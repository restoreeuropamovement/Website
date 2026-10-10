import { archiveTraffic, type ArchiveOutcome } from "@/lib/admin/archive";
import { recordAudit } from "@/lib/admin/audit";
import { hasDatabase } from "@/lib/admin/env";
import { purgeExpiredUnconfirmed } from "@/lib/admin/subscribers";
import { sweepEphemera } from "@/lib/admin/sweep";

/**
 * The one scheduled housekeeping run, and the isolation that makes folding
 * three jobs into it safe.
 *
 * The three pieces of work were three endpoints with three entries in
 * `vercel.json`. The account is on Vercel's Hobby plan, which allows two cron
 * jobs firing at most once a day each, so a third entry is not a job that
 * degrades — it is a deploy that fails. The weekly security digest keeps the
 * second slot and everything nightly is folded in here.
 *
 * **Folding them in is only acceptable because they do not share a fate.** The
 * objection to putting the subscriber purge in the archive job was never about
 * tidiness: archiving reads the Vercel Analytics API, which can be
 * unreachable, rate-limited or simply not configured, and a reader's address
 * being deleted on time must not depend on a third party being up. A promise
 * made to a person about their own data cannot be rescheduled for reasons
 * belonging to somebody else's API.
 *
 * So the tasks do not run in sequence inside one `try`. Each is wrapped by
 * `isolate`, which turns every way a task can end — returning, throwing,
 * hanging — into a value, and all three are started at once. One task failing
 * cannot stop another from running, and cannot stop it from being reported:
 * the caller always receives three outcomes, and the HTTP status is derived
 * from them rather than from whichever exception escaped first.
 *
 * The audit row the purge writes is unchanged, and is written by the purge
 * itself rather than by the route, so it survives the archive failing in every
 * way the archive can fail.
 */

/**
 * How long a task may run before the run gives up on it and reports the other
 * two.
 *
 * Throwing and being unconfigured are handled by ordinary control flow; this
 * exists for the third case, which is the one that quietly defeats the others.
 * `lib/admin/analytics.ts` passes no `AbortSignal` to its fetch, so an upstream
 * that accepts a connection and then says nothing hangs for as long as the
 * platform allows — and a route killed mid-flight returns no body at all, so
 * the purge that did finish is never reported even though it ran. The deadline
 * is well inside the function's own budget for that reason.
 *
 * A task abandoned here is not cancelled, because none of the three can be
 * interrupted safely mid-statement and none needs to be: the archive rewrites
 * the same fortnight on every run, both deletes are idempotent, and whatever a
 * dropped task finishes writing afterwards is work the next run would have
 * done anyway.
 */
const TASK_DEADLINE_MS = 30_000;

export interface SweepReport {
  readonly state: "ok" | "unconfigured" | "error";
  readonly rateLimits: number;
  readonly presence: number;
  readonly message?: string;
}

export interface PurgeReport {
  readonly state: "ok" | "unconfigured" | "error";
  readonly removed: number;
  readonly message?: string;
}

export interface MaintenanceReport {
  readonly archive: ArchiveOutcome;
  readonly sweep: SweepReport;
  readonly purge: PurgeReport;
}

export async function runMaintenance(): Promise<MaintenanceReport> {
  const [archive, sweep, purge] = await Promise.all([
    /* Copies Vercel's daily figures into `traffic_day` before the plan's
     * window forgets them. Why the last fortnight is rewritten on every run
     * rather than only yesterday is in `lib/admin/archive.ts`. This is the one
     * task with a dependency outside this project, and therefore the one the
     * isolation above exists for. */
    isolate("The traffic archive", archiveTraffic, (message) => ({
      state: "error" as const,
      daysWritten: 0,
      message,
    })),
    isolate("The ephemera sweep", sweepTask, (message) => ({
      state: "error" as const,
      rateLimits: 0,
      presence: 0,
      message,
    })),
    isolate("The retention sweep", purgeTask, (message) => ({
      state: "error" as const,
      removed: 0,
      message,
    })),
  ]);

  return { archive, sweep, purge };
}

/**
 * What the route answers with, which is the only part of this a monitoring
 * system reads.
 *
 * Vercel's cron log records a status code and nothing else, so the code is the
 * single signal anybody gets without opening the body. A 200 on a run where
 * the archive failed would show green every night while the history it exists
 * to preserve quietly stopped being written, and the plan's window forgets a
 * day that nobody kept. So any failed task makes the run a failed run.
 *
 * That does not hide the work that did succeed, because neither successful
 * task reports its success through this number. The purge leaves an
 * `admin_audit` row, the archive leaves the rows in `traffic_day`, and the
 * body names all three outcomes separately. A non-2xx here means "something in
 * this run needs looking at", never "nothing happened" — and re-running the
 * whole route by hand after a fix is harmless, since all three tasks are
 * idempotent.
 *
 * Which failure code is not decoration. 502 is what the archive endpoint
 * already returned when Vercel Analytics refused, and it says the fault is
 * upstream and may well clear on its own. 500 is for the two tasks that touch
 * only this project's own database, where nothing clears on its own and the
 * retention promise on `/privacy` is the thing not being kept. When both kinds
 * fail the run reports 500, because that is the half somebody has to fix.
 *
 * `unconfigured` is not a failure and does not colour the status. A deployment
 * with no `DATABASE_URL` or no analytics token is a supported state here as it
 * is everywhere else in this codebase, and a nightly red light for it would
 * train whoever watches to ignore the light.
 */
export function maintenanceStatus(report: MaintenanceReport): number {
  if (report.purge.state === "error" || report.sweep.state === "error") return 500;
  return report.archive.state === "error" ? 502 : 200;
}

/**
 * Discard the rate-limit and presence rows that exist only to be forgotten.
 *
 * Its own task rather than a step inside the archive, which is where it used
 * to sit. The comment there already called it "independent of the archive" and
 * the cheaper and more load-bearing of the two — a night without analytics
 * costs one day of history, a month without a sweep leaves a row per visitor
 * in the throttle table forever — but sequential code cannot keep a promise
 * like that. Running it where an upstream timeout can swallow it was the gap
 * between what the comment claimed and what the code did.
 */
async function sweepTask(): Promise<SweepReport> {
  if (!hasDatabase()) {
    return { state: "unconfigured", rateLimits: 0, presence: 0, message: "No database is configured." };
  }

  const { rateLimits, presence } = await sweepEphemera();
  return { state: "ok", rateLimits, presence };
}

/**
 * Delete the subscriptions whose confirmation link has expired.
 *
 * `/privacy` tells every reader, in all six languages, that an address which
 * is never confirmed is deleted without anybody having looked at it. Until
 * there was a schedule the delete ran from the subscribe path alone, which
 * made that sentence true of a busy list and false of a quiet one: on a
 * movement still in formation, an address somebody else typed in could sit in
 * the table until the next person happened to subscribe. A promise about
 * retention is not a promise about traffic.
 *
 * Once a day rather than twice, which is what the plan allows, and the pages
 * say what that actually bounds rather than rounding it in the flattering
 * direction. The link is good for forty-eight hours and a daily sweep removes
 * what has *already* expired, so the worst case is a row written moments after
 * a sweep whose expiry then also falls moments after one: a little under three
 * days. `/privacy`, `/newsletter` and the confirmation message all say three,
 * not two.
 */
async function purgeTask(): Promise<PurgeReport> {
  if (!hasDatabase()) {
    return { state: "unconfigured", removed: 0, message: "No database is configured." };
  }

  const removed = await purgeExpiredUnconfirmed();

  /*
   * Audited, including the runs that take nothing, and it is the only
   * scheduled delete here that is. The ephemera sweep discards rate-limit and
   * presence rows and is recorded only in this run's reply, because what it
   * throws away is residue. These rows are an encrypted address: disposing of
   * personal data on a timer is the sort of thing a movement may later have to
   * be able to show it actually did, and with no person in the loop this log
   * is the only place the act leaves a trace.
   *
   * What makes it writable at all is that a count is not personal data. The
   * row says the retention rule ran and how much it took, never which address
   * or whose — the same bargain `subscriberCounts` strikes above the passkey.
   * The runs that take nothing are the informative ones: without them a
   * stretch of log holding no purges cannot be told apart from a cron that
   * stopped firing.
   *
   * It is not a complete tally of what was deleted, and is not read as one.
   * The subscribe path sweeps opportunistically and writes no row for it,
   * removing only what this run would have removed anyway.
   */
  try {
    await recordAudit({
      action: "newsletter.purge",
      outcome: "success",
      actorLabel: "retention sweep",
      detail: { removed },
    });
  } catch (error) {
    /*
     * The delete has already happened, so the count is reported rather than
     * swallowed — writing `removed: 0` here would be the one lie this report
     * must not tell. The run is still an error, because the row is the only
     * evidence the rule ran and a deletion nobody can show is, to a reader
     * asking whether the page was true, a deletion that did not happen.
     */
    return {
      state: "error",
      removed,
      message: `Deleted ${removed}, but the audit row could not be written: ${reason(error)}`,
    };
  }

  return { state: "ok", removed };
}

/**
 * Runs a task to a value, whatever it does.
 *
 * Three endings, one return type. A task that resolves gives its own outcome;
 * a task that throws gives the failure its caller describes, carrying the
 * message rather than a generic one, because "Vercel rejected the access token
 * (401)" and "connection refused" send whoever reads the cron log to different
 * places; a task still running at the deadline gives the same shape, so the
 * other tasks' outcomes reach the caller instead of dying with the function.
 *
 * Never rejects, which is what lets `Promise.all` be used above without
 * `allSettled`'s unreachable rejected branch.
 */
async function isolate<T>(
  label: string,
  task: () => Promise<T>,
  onFailure: (message: string) => T,
): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;

  try {
    return await Promise.race([
      task(),
      new Promise<never>((_resolve, reject) => {
        timer = setTimeout(
          () =>
            reject(
              new Error(
                `it was still running after ${Math.round(TASK_DEADLINE_MS / 1000)} seconds and was abandoned`,
              ),
            ),
          TASK_DEADLINE_MS,
        );
      }),
    ]);
  } catch (error) {
    return onFailure(`${label} failed: ${reason(error)}`);
  } finally {
    /* Or the pending timer holds the function open for its full deadline after
     * every single successful run. */
    clearTimeout(timer);
  }
}

function reason(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

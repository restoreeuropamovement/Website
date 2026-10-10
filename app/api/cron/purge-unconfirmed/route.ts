import { NextResponse } from "next/server";
import { recordAudit } from "@/lib/admin/audit";
import { constantTimeEqual } from "@/lib/admin/crypto";
import { hasDatabase } from "@/lib/admin/env";
import { purgeExpiredUnconfirmed } from "@/lib/admin/subscribers";

/**
 * Twice daily: discard the subscriptions whose confirmation link has expired.
 *
 * `/privacy` tells every reader, in all six languages, that an address which is
 * never confirmed is deleted without anybody having looked at it. Until this
 * route existed the delete ran from the subscribe path alone, which made that
 * sentence true of a busy list and false of a quiet one: on a movement still
 * in formation, an address somebody else typed in could sit in the table until
 * the next person happened to subscribe — weeks, or longer. A promise about
 * retention is not a promise about traffic, and only a schedule turns one into
 * the other.
 *
 * Twice a day rather than nightly because the margin should survive a missed
 * run. The link is good for forty-eight hours, so a row becomes deletable two
 * days after it was written and this removes it within twelve hours of that; a
 * run lost to a deployment or an outage costs another twelve hours rather than
 * another day, and the privacy note stays true without depending on the cron
 * having been punctual.
 *
 * Authorised exactly like the nightly archive and the Monday digest:
 * `CRON_SECRET`, no default, refuse when unset.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "CRON_SECRET is not set; refusing to run." },
      { status: 503 },
    );
  }

  if (!constantTimeEqual(request.headers.get("authorization") ?? "", `Bearer ${secret}`)) {
    return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  }

  if (!hasDatabase()) {
    return NextResponse.json({ state: "unconfigured", removed: 0 });
  }

  const removed = await purgeExpiredUnconfirmed();

  /*
   * Audited, including the runs that take nothing, and it is the first
   * scheduled delete here that is. `sweepEphemera` discards rate-limit and
   * presence rows every night and is recorded only in the nightly endpoint's
   * reply, because what it throws away is residue. These rows are an encrypted
   * address: disposing of personal data on a timer is the sort of thing a
   * movement may later have to be able to show it actually did, and with no
   * person in the loop this log is the only place the act leaves a trace.
   *
   * What makes it writable here is that a count is not personal data. The row
   * says the retention rule ran and how much it took, never which address or
   * whose — the same bargain `subscriberCounts` strikes above the passkey. The
   * runs that take nothing are the informative ones: without them a stretch of
   * log holding no purges cannot be told apart from a cron that stopped firing.
   *
   * It is not a complete tally of what was deleted, and is not read as one.
   * The subscribe path sweeps opportunistically and writes no row for it,
   * removing only what this run would have removed anyway.
   */
  await recordAudit({
    action: "newsletter.purge",
    outcome: "success",
    actorLabel: "retention sweep",
    detail: { removed },
  });

  return NextResponse.json({ state: "ok", removed });
}

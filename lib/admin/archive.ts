import { fetchByDimension, fetchDaily, MAX_GROUP_LIMIT } from "@/lib/admin/analytics";
import { db, hasDatabase, jsonb } from "@/lib/db";

/**
 * Copying Vercel's daily figures somewhere they will not expire.
 *
 * The Hobby plan grants access to the latest 31 days and refuses older ranges
 * with an error rather than an empty result. That is not a limit on how the
 * question is asked: past the window the data is gone, and no query, plan
 * upgrade or support request brings back a day nobody kept. A yearly view is
 * therefore not something that can be built when it is wanted — it can only be
 * started, and then waited for.
 *
 * This job runs nightly and rewrites the last fortnight every time rather than
 * only yesterday. Two reasons: a day captured while still in progress is
 * corrected on the following pass, and a job that fails for a week repairs
 * itself when it next succeeds instead of leaving a permanent hole.
 */

/** How far back each run rewrites. Comfortably inside the 31-day window. */
const REWRITE_DAYS = 14;

export interface ArchiveOutcome {
  readonly state: "ok" | "unconfigured" | "error";
  readonly daysWritten: number;
  readonly message?: string;
}

function isoDay(offset: number): string {
  return new Date(Date.now() + offset * 86_400_000).toISOString().slice(0, 10);
}

export async function archiveTraffic(): Promise<ArchiveOutcome> {
  if (!hasDatabase()) {
    return { state: "unconfigured", daysWritten: 0, message: "No database is configured." };
  }

  const since = isoDay(-(REWRITE_DAYS - 1));
  const until = isoDay(0);

  const daily = await fetchDaily(since, until);
  if (daily.state !== "ok") {
    return {
      state: daily.state === "unconfigured" ? "unconfigured" : "error",
      daysWritten: 0,
      message: daily.state === "error" ? daily.message : "Vercel Analytics is not configured.",
    };
  }

  /*
   * Countries are fetched for the window as a whole, not per day: the upstream
   * API has no way to ask for a country breakdown broken down by day, and
   * thirteen extra round trips to approximate one would still be an
   * approximation. The snapshot is attached to the most recent day so that a
   * year of rows carries a usable recent picture without pretending to a
   * precision the source does not offer.
   */
  const countries = await fetchByDimension("country", since, until, MAX_GROUP_LIMIT);
  const snapshot =
    countries.state === "ok"
      ? Object.fromEntries(countries.data.rows.map((row) => [row.label, row.visitors]))
      : {};

  const sql = db();
  let written = 0;

  for (const row of daily.data) {
    const isLatest = row.date === until;
    await sql`
      INSERT INTO traffic_day (day, visitors, pageviews, countries, captured_at)
      VALUES (
        ${row.date}::date,
        ${row.visitors},
        ${row.pageviews},
        ${jsonb(isLatest ? snapshot : {})}::jsonb,
        now()
      )
      ON CONFLICT (day) DO UPDATE
        SET visitors = EXCLUDED.visitors,
            pageviews = EXCLUDED.pageviews,
            -- Never overwrite a stored snapshot with an empty one: the older
            -- days in this pass legitimately have nothing to attach, and
            -- clearing what a previous run captured would lose history that
            -- cannot be fetched again.
            countries = CASE
              WHEN EXCLUDED.countries = '{}'::jsonb THEN traffic_day.countries
              ELSE EXCLUDED.countries
            END,
            captured_at = now()
    `;
    written += 1;
  }

  return { state: "ok", daysWritten: written };
}

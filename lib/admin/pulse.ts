import { db, hasDatabase } from "@/lib/db";
import { PRESENCE_TTL_SECONDS } from "@/lib/pulse";

/**
 * The read side of the site's own measurement: who is here now, how long
 * pages hold people, and what the year looked like.
 *
 * Everything returns `undefined` when there is no database rather than zero.
 * The distinction is the same one the Vercel reader makes and is load-bearing
 * for the same reason: "nobody is reading" and "nothing is recording" look
 * identical as a number and mean opposite things.
 */

export interface LivePlace {
  readonly route: string;
  readonly people: number;
}

export interface Live {
  readonly total: number;
  readonly places: readonly LivePlace[];
}

/**
 * Readers seen within the last window, and what they have open.
 *
 * The sweep happens here rather than on a schedule because this is the only
 * thing that reads the table: expiring a row lazily costs one statement on a
 * page nobody but an administrator opens, and it means the table cannot grow
 * into a log of who was reading what last Tuesday even if a cron job fails.
 */
export async function readLive(): Promise<Live | undefined> {
  if (!hasDatabase()) return undefined;

  const sql = db();
  const stale = `${PRESENCE_TTL_SECONDS} seconds`;

  await sql`DELETE FROM presence WHERE last_seen < now() - ${stale}::interval`;

  const rows = await sql<{ route: string; people: string }[]>`
    SELECT route, count(*)::text AS people
      FROM presence
     WHERE last_seen >= now() - ${stale}::interval
     GROUP BY route
     ORDER BY count(*) DESC, route ASC
  `;

  const places = rows.map((row) => ({ route: row.route, people: Number(row.people) }));
  return { total: places.reduce((running, place) => running + place.people, 0), places };
}

export interface EngagementRow {
  readonly route: string;
  readonly seconds: number;
  readonly readings: number;
  /** Mean foreground seconds per reading. */
  readonly mean: number;
}

export interface Engagement {
  readonly rows: readonly EngagementRow[];
  readonly totalSeconds: number;
  readonly totalReadings: number;
  /** Mean across every route, which is not the mean of the means. */
  readonly mean: number;
}

/**
 * How long each page held its readers over the last `days`.
 *
 * Summed across locales: a translated page is the same page, and splitting it
 * six ways would turn one answerable question into six unanswerable ones on a
 * site this young.
 */
export async function readEngagement(days: number): Promise<Engagement | undefined> {
  if (!hasDatabase()) return undefined;

  const rows = await db()<{ route: string; seconds: string; readings: string }[]>`
    SELECT route,
           sum(seconds)::text  AS seconds,
           sum(readings)::text AS readings
      FROM page_engagement
     WHERE day > CURRENT_DATE - ${days}::int
     GROUP BY route
     ORDER BY sum(seconds) DESC
  `;

  const parsed = rows.map((row) => {
    const seconds = Number(row.seconds);
    const readings = Number(row.readings);
    return { route: row.route, seconds, readings, mean: readings > 0 ? seconds / readings : 0 };
  });

  const totalSeconds = parsed.reduce((running, row) => running + row.seconds, 0);
  const totalReadings = parsed.reduce((running, row) => running + row.readings, 0);

  return {
    rows: parsed,
    totalSeconds,
    totalReadings,
    mean: totalReadings > 0 ? totalSeconds / totalReadings : 0,
  };
}

export interface ArchivedDay {
  readonly day: string;
  readonly visitors: number;
  readonly pageviews: number;
}

/**
 * The archived daily figures, oldest first.
 *
 * This is the only source that can answer anything older than the upstream
 * plan's window, and it can only answer as far back as the night the archive
 * job first ran. An empty stretch at the start of a year is not a quiet
 * period; it is time that was never recorded, and the calendar says so.
 */
export async function readArchivedDays(since: string, until: string): Promise<readonly ArchivedDay[] | undefined> {
  if (!hasDatabase()) return undefined;

  const rows = await db()<{ day: Date; visitors: number; pageviews: number }[]>`
    SELECT day, visitors, pageviews
      FROM traffic_day
     WHERE day BETWEEN ${since}::date AND ${until}::date
     ORDER BY day ASC
  `;

  return rows.map((row) => ({
    day: row.day.toISOString().slice(0, 10),
    visitors: Number(row.visitors),
    pageviews: Number(row.pageviews),
  }));
}

/** The first day the archive holds, which is where any honest history begins. */
export async function archiveBegins(): Promise<string | undefined> {
  if (!hasDatabase()) return undefined;
  const [row] = await db()<{ day: Date | null }[]>`SELECT min(day) AS day FROM traffic_day`;
  return row?.day ? row.day.toISOString().slice(0, 10) : undefined;
}

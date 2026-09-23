import { db } from "@/lib/db";

/**
 * How much the movement is growing, day by day.
 *
 * Deliberately separate from the Vercel traffic figures on the same page, and
 * the distinction is worth keeping straight. Traffic is how many people looked;
 * this is how many acted. They answer different questions, they come from
 * different systems, and only one of them can be unavailable — these figures
 * are the site's own rows, so they are either correct or the database is down.
 *
 * Aggregated in SQL over `created_at` and `status` alone. No encrypted column
 * is touched, nothing is decrypted, and no individual is identifiable in the
 * result, so this needs the ordinary session rather than an elevated one, on
 * the same reasoning as `membershipOverview`: being signed in shows you how
 * large the roll is, but not who is on it.
 */

export interface IntakeDay {
  readonly date: string;
  readonly applications: number;
  readonly enquiries: number;
}

export interface IntakeTrend {
  readonly days: readonly IntakeDay[];
  readonly applications: number;
  readonly enquiries: number;
  /** Applications accepted in the window, not the standing total. */
  readonly accepted: number;
}

/**
 * Daily counts for the last `days` days, inclusive of today.
 *
 * `generate_series` supplies the calendar rather than the rows doing it, so a
 * day with no applications appears as a zero instead of being skipped. That
 * matters for a chart: eight bars over eight weeks reads as steady interest,
 * where the same eight bars over eight months is a movement that has stalled.
 * The zeroes are measurements — there genuinely were none — which is why this
 * may show them where the traffic panel must not.
 */
export async function intakeTrend(days: number): Promise<IntakeTrend> {
  const rows = await db()<{ date: string; applications: string; enquiries: string }[]>`
    WITH calendar AS (
      SELECT generate_series(
               (current_date - make_interval(days => ${days - 1})),
               current_date,
               interval '1 day'
             )::date AS day
    )
    SELECT to_char(calendar.day, 'YYYY-MM-DD') AS date,
           (SELECT count(*) FROM member
             WHERE member.created_at >= calendar.day
               AND member.created_at <  calendar.day + 1)  AS applications,
           (SELECT count(*) FROM enquiry
             WHERE enquiry.created_at >= calendar.day
               AND enquiry.created_at <  calendar.day + 1) AS enquiries
      FROM calendar
     ORDER BY calendar.day ASC
  `;

  const [totals] = await db()<{ accepted: string }[]>`
    SELECT count(*) AS accepted
      FROM member
     WHERE status = 'confirmed'
       AND confirmed_at >= current_date - make_interval(days => ${days - 1})
  `;

  const series = rows.map((row) => ({
    date: row.date,
    applications: Number(row.applications),
    enquiries: Number(row.enquiries),
  }));

  return {
    days: series,
    applications: series.reduce((running, day) => running + day.applications, 0),
    enquiries: series.reduce((running, day) => running + day.enquiries, 0),
    accepted: Number(totals?.accepted ?? 0),
  };
}

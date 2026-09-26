import { db, hasDatabase } from "@/lib/db";

/**
 * Deleting the rows that exist only to be forgotten.
 *
 * Two tables hold state that is meaningful for seconds or minutes and then is
 * merely residue. Neither had a sweeper while the only things throttled were
 * sign-in attempts and form submissions: those have low cardinality, because
 * the row count is bounded by the number of people who actually try something
 * rather than by the number who visit.
 *
 * The presence beacon changed that. It throttles on a hashed address, so
 * `admin_rate_limit` now gains a permanent row for every distinct visitor —
 * unbounded growth that nothing removed. That is a slow leak rather than a
 * bug, and the sort that is invisible in development and obvious the week
 * after a launch.
 *
 * Both deletes are ordinary maintenance, and neither loses anything that is
 * still being used:
 *
 * - A rate-limit row older than a day cannot be inside any window this
 *   codebase uses; the longest is an hour. Deleting it is identical to letting
 *   the next request reset it, except that it happens whether or not that
 *   request ever comes.
 * - A presence row older than an hour belongs to a tab that stopped sending
 *   heartbeats forty times over. `readLive` already ignores anything past
 *   ninety seconds and sweeps as it reads; this catches the case where nobody
 *   opens the dashboard for a week after a busy day.
 */

/** Comfortably beyond the longest window any caller uses, which is an hour. */
const RATE_LIMIT_KEEP_HOURS = 24;

/** Far beyond the ninety seconds presence is read at. */
const PRESENCE_KEEP_HOURS = 1;

export interface SweepOutcome {
  readonly rateLimits: number;
  readonly presence: number;
}

export async function sweepEphemera(): Promise<SweepOutcome> {
  if (!hasDatabase()) return { rateLimits: 0, presence: 0 };

  const sql = db();

  const rateLimits = await sql`
    DELETE FROM admin_rate_limit
     WHERE window_start < now() - ${`${RATE_LIMIT_KEEP_HOURS} hours`}::interval
  `;

  const presence = await sql`
    DELETE FROM presence
     WHERE last_seen < now() - ${`${PRESENCE_KEEP_HOURS} hours`}::interval
  `;

  return { rateLimits: rateLimits.count, presence: presence.count };
}

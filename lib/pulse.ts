import { db, hasDatabase } from "@/lib/db";
import { isLocale, stripLocale, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";

/**
 * The write side of the site's own measurement.
 *
 * Vercel Web Analytics answers how many and from where. It does not answer who
 * is reading right now, nor how long a page holds somebody, and it forgets
 * everything older than the plan's window. This module is the small amount of
 * collection needed to answer those three, written so that the answers exist
 * and the records behind them do not.
 *
 * Two rules govern everything here, and they are what the privacy note
 * promises on the site's behalf:
 *
 * 1. **Nothing is written that identifies a reader.** No address, no hashed
 *    address, no user agent, no value that persists in the browser. The
 *    presence token is random per tab, lives in a JavaScript variable and dies
 *    with the tab.
 * 2. **Readings are summed on arrival, never stored individually.** An
 *    engagement beacon is added into a daily total in the same statement that
 *    consumes it. There is no row anywhere saying how long anyone stayed.
 */

/**
 * Whether the beacon runs at all. **Off unless `PULSE_ENABLED="true"`**, and
 * it should stay off for as long as the database is billed by the hour.
 *
 * It has been on by default twice, and each time it paid for itself in the
 * wrong currency. The first time, recorded below, it kept the database awake
 * around the clock. The second time it had been taught to stop when nobody
 * was reading, on the argument that awake time would then follow reading
 * time — and that argument was wrong in a way worth writing down. Every
 * reading, however short, is followed by the five quiet minutes the database
 * needs before it may sleep, and those minutes are billed. Thirty to two
 * hundred and eighty readings a day, arriving from six languages' worth of
 * time zones, means thirty to two hundred and eighty separate wakings with a
 * paid tail on each: hours of compute a day to learn that the average visit
 * lasts about ten seconds. The reading time was never the cost; the number of
 * separate visits was, and nothing a client can do about its own timer
 * changes how many visitors there are.
 *
 * Vercel's counter already answers how many and from where, without touching
 * this database at all. What is lost is "who is here now" and "how long does
 * a page hold somebody" — worth having, not worth a standing bill and not
 * worth the intake going down again when the allowance runs out. With the
 * beacon off the database wakes for a form, an administrator or the nightly
 * job, which is what it is for.
 *
 * Switching it on means editing `/privacy` first: the note now says both
 * measures stopped, and it must not become untrue the moment a variable is set.
 *
 * What happened when it was first on by default: every open tab posted a
 * heartbeat twice a minute for as long as it existed — hidden, idle or
 * abandoned, it made no difference. Each beat is three writes, and the writes
 * were never the cost. A serverless Postgres sleeps after five minutes of
 * silence and is billed for the hours it is awake, so the bill follows how
 * much of the day something is talking to it and not how often. One forgotten
 * tab answered "all of it". The month's compute allowance went on measuring
 * who was reading, the provider suspended the project, and the membership
 * form spent that time returning a server error to anybody who filled it in.
 * Analytics took down the intake.
 *
 * Beating less often would have saved nothing: a ping every five minutes
 * keeps a database awake exactly as thoroughly as one every thirty seconds.
 * `IDLE_MS` in `components/layout/Pulse.tsx` fixed that failure and not the
 * one above it.
 *
 * The flag is read by the route, which refuses on the next request, and by
 * the chrome, which stops mounting the timer at the next build because most
 * pages are prerendered — so a reader is not shipped a timer only for its
 * beacons to be refused.
 */
export function pulseEnabled(): boolean {
  return process.env.PULSE_ENABLED === "true";
}

/** How long a heartbeat counts for. Two missed beats and a reader is gone. */
export const PRESENCE_TTL_SECONDS = 90;

/**
 * The longest single reading that will be believed.
 *
 * A tab left open overnight is not two hundred minutes of reading, and a
 * forged beacon claiming a year should not be able to move the mean at all.
 * Readings are clamped rather than rejected: the visit was real even when the
 * duration is not, and discarding it would bias the average downwards.
 */
const MAX_READING_SECONDS = 30 * 60;

/**
 * Every route the tables will name, and the bucket for everything else.
 *
 * Cardinality here is an abuse surface, not a detail: a beacon that accepted
 * whatever path it was handed would let anybody write unbounded rows into
 * `page_engagement` by posting random strings. Normalising to a fixed set
 * makes the tables' size a property of the site rather than of the traffic.
 *
 * Dynamic segments collapse to their pattern for the same reason `route`
 * rather than `requestPath` is the dimension worth reading upstream: a hundred
 * policy positions are one question about the policy catalogue, not a hundred
 * questions.
 */
const KNOWN_ROUTES: readonly string[] = [
  ...new Set(Object.values(routes).map((path) => path.split("#")[0] as string)),
  "/policy/[slug]",
  "/wings/[slug]",
];

/** Anything the site does not publish, so one stray row cannot become many. */
const OTHER_ROUTE = "/other";

/**
 * A browser pathname reduced to one of `KNOWN_ROUTES`.
 *
 * The locale prefix is stripped rather than kept: which language a page was
 * read in is already carried separately, and folding `/de/manifesto` into
 * `/manifesto` is what makes "the manifesto holds people for four minutes" a
 * statement about the manifesto rather than about six translations of it.
 */
export function normaliseRoute(pathname: string): string {
  if (typeof pathname !== "string" || pathname.length > 512) return OTHER_ROUTE;

  const withoutQuery = pathname.split(/[?#]/)[0] ?? "/";
  const bare = stripLocale(withoutQuery);
  const trimmed = bare.length > 1 ? bare.replace(/\/+$/, "") : bare;
  const path = trimmed.length === 0 ? "/" : trimmed;

  if (path.startsWith("/policy/")) return "/policy/[slug]";
  if (path.startsWith("/wings/")) return "/wings/[slug]";
  return KNOWN_ROUTES.includes(path) ? path : OTHER_ROUTE;
}

/** A presence token: random, opaque, and structurally incapable of carrying anything. */
export function isPresenceToken(value: unknown): value is string {
  return typeof value === "string" && /^[a-z0-9]{16,40}$/.test(value);
}

export function readLocale(value: unknown): Locale {
  return typeof value === "string" && isLocale(value) ? value : "en";
}

/**
 * Mark a tab as still present.
 *
 * Upserted on the token, so a reader moving between pages stays one person
 * rather than becoming several. Nothing accumulates: the row is overwritten by
 * the next beat and swept once it goes stale.
 */
export async function recordPresence(token: string, route: string): Promise<void> {
  if (!hasDatabase()) return;

  await db()`
    INSERT INTO presence (token, route, last_seen)
    VALUES (${token}, ${route}, now())
    ON CONFLICT (token) DO UPDATE
      SET route = EXCLUDED.route, last_seen = now()
  `;
}

/** Drop a tab the moment it says it is leaving, rather than waiting for the sweep. */
export async function dropPresence(token: string): Promise<void> {
  if (!hasDatabase()) return;
  await db()`DELETE FROM presence WHERE token = ${token}`;
}

/**
 * Add one reading into the day's total for a route.
 *
 * The individual figure never becomes a row. It is summed into
 * `page_engagement` by this statement and is not recoverable afterwards, which
 * is the property that makes the table safe to keep indefinitely.
 */
export async function recordEngagement(
  route: string,
  locale: Locale,
  seconds: number,
): Promise<void> {
  if (!hasDatabase()) return;

  const clamped = Math.min(Math.max(Math.round(seconds), 0), MAX_READING_SECONDS);
  // A reading shorter than a second is a navigation, not a reading of anything.
  if (clamped < 1) return;

  await db()`
    INSERT INTO page_engagement (day, route, locale, seconds, readings)
    VALUES (CURRENT_DATE, ${route}, ${locale}, ${clamped}, 1)
    ON CONFLICT (day, route, locale) DO UPDATE
      SET seconds = page_engagement.seconds + EXCLUDED.seconds,
          readings = page_engagement.readings + 1
  `;
}

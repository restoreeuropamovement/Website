import { NextResponse } from "next/server";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import { hasDatabase } from "@/lib/db";
import {
  dropPresence,
  isPresenceToken,
  normaliseRoute,
  readLocale,
  recordEngagement,
  recordPresence,
} from "@/lib/pulse";

/**
 * The only endpoint on the public site that accepts a write without a person
 * having filled anything in.
 *
 * `AGENTS.md` sets four properties for a public write path: validate on the
 * server, rate limit per connection, encrypt before storing, audit without
 * personal data. Three apply here and the fourth is answered rather than
 * skipped:
 *
 * - **Validated.** The token must match a fixed shape, the route is collapsed
 *   onto a closed list, the locale must be one the site publishes and the
 *   duration is clamped. Nothing the client sends reaches a table unexamined.
 * - **Rate limited** on a hashed address, generously enough for an honest
 *   heartbeat and not for a script inflating the figures.
 * - **Nothing to encrypt.** Encryption protects personal data and none is
 *   stored: no address, no hashed address, no user agent, no identifier that
 *   outlives the tab. The hashed address used for throttling is computed,
 *   compared and dropped; it is never written down.
 * - **Not audited, deliberately.** `admin_audit` records what administrators
 *   do to people's records. A row per page view would bury that signal under
 *   ordinary traffic and would itself become the timestamped browsing log this
 *   whole design exists to avoid.
 *
 * Always answers 204. A measurement endpoint that reports back is a
 * measurement endpoint that can be probed, and there is nothing a reader's
 * browser could usefully do with the answer anyway.
 */

/** Room for a heartbeat every thirty seconds, several tabs, and no more. */
const BEACON_LIMIT = 120;
const BEACON_WINDOW_SECONDS = 300;

/**
 * The ceiling the per-connection limit cannot see, on the same reasoning as the
 * one guarding the intake: a script arriving from several hundred addresses sits
 * comfortably inside every individual allowance while the writes still land.
 *
 * This endpoint needs it more than the forms do, because it is the only
 * unauthenticated write the public site performs and the only page-view-rate
 * path to the database. Everything else a visitor can reach is prerendered and
 * served from the CDN without a query, so under a flood this is the one place
 * the site can be made to do real work.
 *
 * Forty writes a second sustained, which is roughly twelve hundred people
 * reading at once — generous for a movement that has just started promoting
 * itself, and far below what the connection pool would struggle with. Tripping
 * it costs an undercount in the dashboard and nothing else: no reader sees a
 * difference, because this endpoint has never told anyone anything.
 */
const GLOBAL_BEACON_LIMIT = 12_000;

/**
 * Turns the beacon off without touching the code.
 *
 * Analytics is the one thing here that is purely nice to have, so it should be
 * the first thing surrendered when the site is under load or costing money —
 * and that decision should not require someone to be calm enough to write a
 * patch. Read per request, so where the host can change a variable without a
 * rebuild it takes effect without one.
 *
 * Absence means enabled. A measurement that silently stopped because a variable
 * was never set would be discovered weeks later, in the form of a figure nobody
 * could explain.
 */
function disabled(): boolean {
  return process.env.PULSE_DISABLED === "true";
}

/*
 * Constructed per call rather than shared. A `Response` carries a stream that
 * is consumed when it is sent, so one instance handed to two requests is a
 * fault that only appears under concurrency — the worst kind to ship.
 */
const NO_CONTENT = () => new NextResponse(null, { status: 204 });

/**
 * Whether this beacon came from a page of ours.
 *
 * Browsers attach `Origin` to every cross-origin request and to same-origin
 * `POST`s, including `sendBeacon`, so a genuine reader always carries one that
 * matches the host they are reading. Compared against `Host` rather than a
 * configured domain, which keeps preview deployments working without adding a
 * variable that would silently disable counting when it was forgotten.
 *
 * This is a floor, not a wall. Anything that can set a header can satisfy it,
 * and nothing here could distinguish a forged beacon from a real one — the
 * measurement carries no identity by design, which is exactly what keeps it
 * anonymous and exactly what makes it forgeable. What the check does buy is
 * that casual scripts and anything pointed at this endpoint from another site
 * are ignored, which is most of what would ever actually arrive. The real
 * defence against inflated figures is that Vercel's visitor counts are
 * measured independently and cannot be reached from here at all, so the two
 * disagree loudly when one of them is being lied to.
 */
function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  /*
   * Without a database there is nowhere to put any of this. Answering 204
   * anyway keeps the client silent and identical in both cases: a beacon that
   * failed loudly would put errors in the console of a site that is working
   * exactly as configured.
   */
  if (!hasDatabase()) return NO_CONTENT();
  if (disabled()) return NO_CONTENT();
  if (!sameOrigin(request)) return NO_CONTENT();

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NO_CONTENT();
  }

  if (typeof payload !== "object" || payload === null) return NO_CONTENT();
  const body = payload as Record<string, unknown>;

  if (!isPresenceToken(body.token)) return NO_CONTENT();

  /*
   * `clientContext` hashes the address with the admin session secret, which
   * has no default and throws when unset. That is the right behaviour for the
   * env contract and the wrong outcome here: the public site is required to
   * serve without any admin variable, so a missing secret must mean this
   * endpoint records nothing, never that it returns a 500 on every page view.
   */
  let ipHash: string | null;
  try {
    ({ ipHash } = await clientContext());
  } catch {
    return NO_CONTENT();
  }

  /*
   * The site-wide ceiling is consumed before the per-connection one, which is
   * the reverse of the intake and deliberate.
   *
   * Throttling here is itself a write, so the ordering decides what a flood
   * costs. The global bucket is a single row, already hot; a per-connection
   * bucket is a new row for every distinct address, and a distributed flood is
   * distinct addresses by definition. Checking the cheap shared counter first
   * means that once the ceiling is reached the endpoint stops growing
   * `admin_rate_limit` at the rate it is being attacked.
   */
  const global = await consumeRateLimit(
    "pulse:all",
    GLOBAL_BEACON_LIMIT,
    BEACON_WINDOW_SECONDS,
  );
  if (!global.allowed) return NO_CONTENT();

  const { allowed } = await consumeRateLimit(
    `pulse:${ipHash ?? "local"}`,
    BEACON_LIMIT,
    BEACON_WINDOW_SECONDS,
  );
  if (!allowed) return NO_CONTENT();

  const token = body.token;
  const route = normaliseRoute(typeof body.path === "string" ? body.path : "/");
  const locale = readLocale(body.locale);

  /*
   * The two halves are independent. A reader leaving sends their reading and
   * their departure in one beacon, because `sendBeacon` during `pagehide` gets
   * one chance and a second request would not be delivered.
   */
  if (typeof body.seconds === "number" && Number.isFinite(body.seconds)) {
    await recordEngagement(route, locale, body.seconds);
  }

  if (body.leaving === true) await dropPresence(token);
  else await recordPresence(token, route);

  return NO_CONTENT();
}

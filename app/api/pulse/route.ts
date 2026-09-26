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

/*
 * Constructed per call rather than shared. A `Response` carries a stream that
 * is consumed when it is sent, so one instance handed to two requests is a
 * fault that only appears under concurrency — the worst kind to ship.
 */
const NO_CONTENT = () => new NextResponse(null, { status: 204 });

export async function POST(request: Request): Promise<NextResponse> {
  /*
   * Without a database there is nowhere to put any of this. Answering 204
   * anyway keeps the client silent and identical in both cases: a beacon that
   * failed loudly would put errors in the console of a site that is working
   * exactly as configured.
   */
  if (!hasDatabase()) return NO_CONTENT();

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

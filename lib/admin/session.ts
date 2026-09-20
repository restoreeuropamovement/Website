import { cookies } from "next/headers";
import { constantTimeEqual, hashToken, randomToken, sign } from "@/lib/admin/crypto";
import { db } from "@/lib/db";

/**
 * Session handling.
 *
 * The cookie holds `<token>.<hmac>`. The database stores only `sha256(token)`,
 * so the session table is not a bag of usable credentials if it is ever read by
 * someone who should not have it.
 *
 * Two checks sit on top of that, and the distinction matters:
 *
 *   `hasPlausibleSessionCookie` verifies the HMAC only. It is stateless and
 *   cheap, runs in the proxy, and answers "is this worth looking up?".
 *
 *   `currentSession` reads the row, enforces expiry, idle timeout and
 *   revocation, and is the only function whose answer may be trusted. Every
 *   admin page and mutation goes through it. The proxy check is a filter in
 *   front of the door, not the lock.
 */

/**
 * `__Host-` is not decoration: the prefix makes the browser refuse the cookie
 * unless it is Secure, path-wide and carries no Domain, which means a
 * compromised or hostile subdomain cannot plant a session cookie on the apex.
 * It requires HTTPS, so plain development over http keeps an unprefixed name.
 */
const isProduction = process.env.NODE_ENV === "production";
export const SESSION_COOKIE = isProduction ? "__Host-rem_admin" : "rem_admin_dev";

/** Hard ceiling on a session's life, regardless of activity. */
const ABSOLUTE_LIFETIME_HOURS = 12;
/** Inactivity after which a session stops being accepted. */
const IDLE_TIMEOUT_MINUTES = 120;
/** How stale `last_seen_at` may get before a render bothers to refresh it. */
const TOUCH_AFTER_MINUTES = 5;
/**
 * How long a passkey re-assertion keeps the membership roll readable.
 *
 * Short by intention. It should comfortably cover looking someone up and
 * writing to them, and expire well before a laptop left open in a café becomes
 * a copy of the roll.
 */
const ELEVATION_MINUTES = 10;

export interface AdminIdentity {
  readonly id: string;
  readonly username: string;
  readonly displayName: string;
}

export interface ActiveSession {
  readonly user: AdminIdentity;
  readonly sessionId: string;
  readonly expiresAt: Date;
  /** When the current passkey re-assertion lapses, if one is in force. */
  readonly elevatedUntil: Date | null;
}

function splitCookie(raw: string): { token: string; signature: string } | null {
  const separator = raw.lastIndexOf(".");
  if (separator <= 0 || separator === raw.length - 1) return null;
  return { token: raw.slice(0, separator), signature: raw.slice(separator + 1) };
}

/**
 * Stateless validation for the proxy: is the cookie well-formed and signed with
 * our key? Says nothing about whether the session still exists.
 */
export async function hasPlausibleSessionCookie(raw: string | undefined): Promise<boolean> {
  if (!raw) return false;
  const parts = splitCookie(raw);
  if (!parts) return false;
  return constantTimeEqual(await sign(parts.token), parts.signature);
}

export async function createSession(
  userId: string,
  context: { ipHash: string | null; userAgent: string | null },
): Promise<void> {
  const token = randomToken();
  const sessionId = await hashToken(token);
  const sql = db();

  await sql`
    INSERT INTO admin_session (id, user_id, expires_at, ip_hash, user_agent)
    VALUES (
      ${sessionId},
      ${userId},
      now() + ${`${ABSOLUTE_LIFETIME_HOURS} hours`}::interval,
      ${context.ipHash},
      ${context.userAgent}
    )
  `;

  const store = await cookies();
  store.set(SESSION_COOKIE, `${token}.${await sign(token)}`, {
    httpOnly: true, // withheld from document.cookie, so XSS cannot read it
    secure: isProduction,
    sameSite: "strict", // no cross-site request carries this cookie: CSRF cannot ride it
    path: "/",
    maxAge: ABSOLUTE_LIFETIME_HOURS * 60 * 60,
  });
}

/**
 * The authoritative check. Returns the signed-in administrator, or null.
 */
export async function currentSession(): Promise<ActiveSession | null> {
  const raw = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!raw) return null;

  const parts = splitCookie(raw);
  if (!parts) return null;
  if (!constantTimeEqual(await sign(parts.token), parts.signature)) return null;

  const sessionId = await hashToken(parts.token);
  const sql = db();

  const [row] = await sql<
    {
      id: string;
      expires_at: Date;
      user_id: string;
      username: string;
      display_name: string;
      needs_touch: boolean;
      elevated_until: Date | null;
    }[]
  >`
    SELECT s.id,
           s.expires_at,
           s.elevated_until,
           u.id AS user_id,
           u.username,
           u.display_name,
           s.last_seen_at < now() - ${`${TOUCH_AFTER_MINUTES} minutes`}::interval AS needs_touch
    FROM admin_session s
    JOIN admin_user u ON u.id = s.user_id
    WHERE s.id = ${sessionId}
      AND s.revoked_at IS NULL
      AND s.expires_at > now()
      AND s.last_seen_at > now() - ${`${IDLE_TIMEOUT_MINUTES} minutes`}::interval
      AND u.disabled_at IS NULL
  `;

  if (!row) return null;

  // Sliding activity window, written at most once every few minutes so an
  // ordinary page view does not cost a write.
  if (row.needs_touch) {
    await sql`UPDATE admin_session SET last_seen_at = now() WHERE id = ${sessionId}`;
  }

  return {
    user: { id: row.user_id, username: row.username, displayName: row.display_name },
    sessionId: row.id,
    expiresAt: row.expires_at,
    elevatedUntil: row.elevated_until,
  };
}

/**
 * Use in Server Actions and Route Handlers that mutate. Throws rather than
 * returning null so a forgotten check cannot silently fall through to the
 * privileged path.
 */
export async function requireSession(): Promise<ActiveSession> {
  const session = await currentSession();
  if (!session) throw new Error("Not authenticated");
  return session;
}

/**
 * Marks the current session as having just re-asserted its passkey.
 *
 * Called only after a WebAuthn assertion has been verified, and only for the
 * user the session already belongs to — the `user_id` predicate makes it
 * impossible to elevate one person's session with another person's passkey,
 * even if the two are enrolled on the same machine.
 */
export async function elevateSession(session: ActiveSession): Promise<void> {
  await db()`
    UPDATE admin_session
       SET elevated_until = now() + ${`${ELEVATION_MINUTES} minutes`}::interval
     WHERE id = ${session.sessionId}
       AND user_id = ${session.user.id}
       AND revoked_at IS NULL
  `;
}

/** Drops the elevation without ending the session. */
export async function dropElevation(session: ActiveSession): Promise<void> {
  await db()`
    UPDATE admin_session SET elevated_until = NULL WHERE id = ${session.sessionId}
  `;
}

export function isElevated(session: ActiveSession): boolean {
  return session.elevatedUntil !== null && session.elevatedUntil.getTime() > Date.now();
}

/**
 * The gate in front of members' names and email addresses.
 *
 * Distinct from `requireSession` because being signed in is deliberately not
 * enough: reading the roll needs a passkey touch from the last few minutes, so
 * that a stolen cookie — the realistic compromise — cannot be turned into a
 * copy of the membership list. Throws rather than returning null, on the same
 * reasoning as `requireSession`.
 */
export async function requireElevatedSession(): Promise<ActiveSession> {
  const session = await requireSession();
  if (!isElevated(session)) {
    throw new Error("Re-authentication required");
  }
  return session;
}

export async function destroyCurrentSession(): Promise<void> {
  const store = await cookies();
  const raw = store.get(SESSION_COOKIE)?.value;

  if (raw) {
    const parts = splitCookie(raw);
    if (parts) {
      // Revoked server-side as well as cleared client-side: a cookie the user
      // kept a copy of must stop working too.
      await db()`
        UPDATE admin_session SET revoked_at = now() WHERE id = ${await hashToken(parts.token)}
      `;
    }
  }

  store.delete(SESSION_COOKIE);
}

export async function revokeAllSessions(userId: string): Promise<number> {
  const rows = await db()`
    UPDATE admin_session
    SET revoked_at = now()
    WHERE user_id = ${userId} AND revoked_at IS NULL
    RETURNING id
  `;
  return rows.length;
}

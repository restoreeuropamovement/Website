import { hashToken, randomToken } from "@/lib/admin/crypto";
import { db } from "@/lib/db";

/**
 * Administrators, and the invitations that create them.
 *
 * Until this module existed the system held exactly one administrator by
 * construction. `ADMIN_BOOTSTRAP_TOKEN` establishes the first one into an empty
 * credential table and is inert forever after; the only other enrolment path
 * attaches a device to the account already signed in. A second person could
 * therefore only be admitted by sharing the first one's passkey, which defeats
 * the part of this system that matters most: `admin_audit` records who read the
 * membership roll, and two people behind one identity make that record a guess.
 *
 * An invitation is a capability, not an identity. It says "somebody already
 * trusted may enrol a passkey against this account", and nothing else:
 *
 *   - The account is created by the inviter, so the invitee cannot choose the
 *     username the audit log will show, nor claim one already in use.
 *   - Only `sha256(token)` is stored, so the table is not a set of usable
 *     links. This is the same reasoning as `admin_session.id`.
 *   - It expires, it is single-use, and it can be withdrawn before it is used.
 *   - Holding it is never sufficient on its own. It authorises a WebAuthn
 *     ceremony; what actually signs in afterwards is a passkey bound to this
 *     origin and held on the invitee's own device.
 */

/**
 * How long an invitation stands.
 *
 * Long enough to be sent over whatever channel the two people already use and
 * acted on the next time the recipient is at their own machine; short enough
 * that a link forgotten in a chat history stops being a way in. Re-inviting
 * costs one click, so there is no reason to be generous here.
 */
const INVITE_TTL_HOURS = 24;

/** Enough to identify someone in an audit row, and nothing like an identity. */
export interface Administrator {
  readonly id: string;
  readonly username: string;
  readonly displayName: string;
  readonly passkeys: number;
  readonly createdAt: Date;
  readonly disabledAt: Date | null;
  readonly lastSeenAt: Date | null;
}

export interface PendingInvite {
  readonly id: string;
  readonly username: string;
  readonly displayName: string;
  readonly invitedBy: string | null;
  readonly createdAt: Date;
  readonly expiresAt: Date;
}

/**
 * Usernames are compared and stored folded, so `Anna` and `anna` cannot become
 * two administrators who look like one in the log.
 */
function normaliseUsername(value: string): string {
  return value.trim().toLowerCase();
}

export function usernameProblem(value: string): string | null {
  const username = normaliseUsername(value);
  if (username.length < 2) return "A username needs at least two characters.";
  if (username.length > 64) return "A username may be at most sixty-four characters.";
  if (!/^[a-z0-9][a-z0-9._-]*$/.test(username)) {
    return "Use lowercase letters, digits, dots, dashes or underscores.";
  }
  return null;
}

export async function listAdministrators(): Promise<readonly Administrator[]> {
  const rows = await db()<
    {
      id: string;
      username: string;
      display_name: string;
      passkeys: string;
      created_at: Date;
      disabled_at: Date | null;
      last_seen_at: Date | null;
    }[]
  >`
    SELECT u.id,
           u.username,
           u.display_name,
           u.created_at,
           u.disabled_at,
           count(c.id)::text AS passkeys,
           max(c.last_used_at) AS last_seen_at
    FROM admin_user u
    LEFT JOIN admin_credential c ON c.user_id = u.id
    GROUP BY u.id
    ORDER BY u.created_at ASC
  `;

  return rows.map((row) => ({
    id: row.id,
    username: row.username,
    displayName: row.display_name,
    passkeys: Number(row.passkeys),
    createdAt: row.created_at,
    disabledAt: row.disabled_at,
    lastSeenAt: row.last_seen_at,
  }));
}

export async function listPendingInvites(): Promise<readonly PendingInvite[]> {
  const rows = await db()<
    {
      id: string;
      username: string;
      display_name: string;
      invited_by: string | null;
      created_at: Date;
      expires_at: Date;
    }[]
  >`
    SELECT i.id,
           u.username,
           u.display_name,
           b.username AS invited_by,
           i.created_at,
           i.expires_at
    FROM admin_invite i
    JOIN admin_user u ON u.id = i.user_id
    LEFT JOIN admin_user b ON b.id = i.invited_by
    WHERE i.consumed_at IS NULL
      AND i.revoked_at IS NULL
      AND i.expires_at > now()
    ORDER BY i.created_at DESC
  `;

  return rows.map((row) => ({
    id: row.id,
    username: row.username,
    displayName: row.display_name,
    invitedBy: row.invited_by,
    createdAt: row.created_at,
    expiresAt: row.expires_at,
  }));
}

export type CreateInviteResult =
  | { ok: true; token: string; inviteId: string; userId: string; expiresAt: Date }
  | { ok: false; reason: string };

/**
 * Creates the account and the one link that can claim it.
 *
 * The token is returned here and never again: only its digest is written, so
 * there is nowhere to look it up afterwards and a lost link has to be reissued
 * rather than recovered. That is the same trade as the session cookie, and for
 * the same reason.
 *
 * Re-inviting somebody who has not yet enrolled reuses their account and
 * withdraws the previous link, so there is never more than one live way into
 * one pending identity.
 */
export async function createInvite(input: {
  username: string;
  displayName: string;
  invitedById: string;
}): Promise<CreateInviteResult> {
  const username = normaliseUsername(input.username);
  const problem = usernameProblem(username);
  if (problem) return { ok: false, reason: problem };

  const displayName = input.displayName.trim().slice(0, 120) || username;
  const token = randomToken();
  const tokenHash = await hashToken(token);

  return db().begin(async (sql) => {
    const [existing] = await sql<{ id: string; passkeys: string }[]>`
      SELECT u.id, count(c.id)::text AS passkeys
      FROM admin_user u
      LEFT JOIN admin_credential c ON c.user_id = u.id
      WHERE u.username = ${username}
      GROUP BY u.id
    `;

    if (existing && Number(existing.passkeys) > 0) {
      return {
        ok: false as const,
        reason: "That administrator already holds a passkey and can sign in already.",
      };
    }

    let userId = existing?.id;

    if (userId === undefined) {
      const [created] = await sql<{ id: string }[]>`
        INSERT INTO admin_user (username, display_name)
        VALUES (${username}, ${displayName})
        RETURNING id
      `;
      if (!created) return { ok: false as const, reason: "Could not create the account." };
      userId = created.id;
    } else {
      // A pending account whose name was corrected between invitations, and an
      // account previously disabled: re-inviting is the supported way back in.
      await sql`
        UPDATE admin_user
           SET display_name = ${displayName}, disabled_at = NULL
         WHERE id = ${userId}
      `;
      await sql`
        UPDATE admin_invite
           SET revoked_at = now()
         WHERE user_id = ${userId} AND consumed_at IS NULL AND revoked_at IS NULL
      `;
    }

    const [invite] = await sql<{ id: string; expires_at: Date }[]>`
      INSERT INTO admin_invite (token_hash, user_id, invited_by, expires_at)
      VALUES (
        ${tokenHash},
        ${userId},
        ${input.invitedById},
        now() + ${`${INVITE_TTL_HOURS} hours`}::interval
      )
      RETURNING id, expires_at
    `;
    if (!invite) return { ok: false as const, reason: "Could not create the invitation." };

    return {
      ok: true as const,
      token,
      inviteId: invite.id,
      userId,
      expiresAt: invite.expires_at,
    };
  });
}

export interface ResolvedInvite {
  readonly id: string;
  readonly user: { id: string; username: string; displayName: string };
}

/**
 * Reads an invitation without spending it.
 *
 * Deliberately separate from consuming it, because the link is a URL and URLs
 * get fetched by things that are not the recipient — mail scanners, link
 * previews, a browser prefetching. Opening the page must therefore cost
 * nothing; the invitation is spent only when a passkey is actually presented.
 */
export async function resolveInvite(token: string): Promise<ResolvedInvite | null> {
  if (!token) return null;

  const [row] = await db()<
    { id: string; user_id: string; username: string; display_name: string }[]
  >`
    SELECT i.id, u.id AS user_id, u.username, u.display_name
    FROM admin_invite i
    JOIN admin_user u ON u.id = i.user_id
    WHERE i.token_hash = ${await hashToken(token)}
      AND i.consumed_at IS NULL
      AND i.revoked_at IS NULL
      AND i.expires_at > now()
      AND u.disabled_at IS NULL
  `;

  if (!row) return null;
  return {
    id: row.id,
    user: { id: row.user_id, username: row.username, displayName: row.display_name },
  };
}

/**
 * Spends an invitation, atomically.
 *
 * The `consumed_at IS NULL` predicate inside the UPDATE is what makes this
 * single-use under a race, on the same reasoning as `consumeChallenge`: two
 * simultaneous redemptions both reach the statement, and only one can match the
 * row and return it.
 */
export async function consumeInvite(token: string): Promise<ResolvedInvite | null> {
  if (!token) return null;

  const [row] = await db()<{ id: string; user_id: string }[]>`
    UPDATE admin_invite
       SET consumed_at = now()
     WHERE token_hash = ${await hashToken(token)}
       AND consumed_at IS NULL
       AND revoked_at IS NULL
       AND expires_at > now()
    RETURNING id, user_id
  `;

  if (!row) return null;

  const [user] = await db()<{ id: string; username: string; display_name: string }[]>`
    SELECT id, username, display_name FROM admin_user
    WHERE id = ${row.user_id} AND disabled_at IS NULL
  `;

  if (!user) return null;
  return {
    id: row.id,
    user: { id: user.id, username: user.username, displayName: user.display_name },
  };
}

export async function revokeInvite(inviteId: string): Promise<boolean> {
  if (!/^[0-9a-f-]{36}$/i.test(inviteId)) return false;

  const rows = await db()`
    UPDATE admin_invite
       SET revoked_at = now()
     WHERE id = ${inviteId} AND consumed_at IS NULL AND revoked_at IS NULL
    RETURNING id
  `;

  return rows.length > 0;
}

/**
 * Suspends an administrator.
 *
 * Disabling rather than deleting, because `admin_audit.actor_id` is nulled when
 * a user row goes and the log would lose the name behind past actions. The
 * effect is immediate in both places that matter: `currentSession` and
 * `finishAuthentication` both require `disabled_at IS NULL`, so existing
 * sessions stop resolving and the passkey stops being recognised.
 *
 * Two refusals, both about not being able to undo it from inside the panel:
 * nobody may disable themselves, and the last administrator who can still sign
 * in may not be disabled at all. Either would leave the surface reachable only
 * by emptying the credential table by hand.
 */
export async function disableAdministrator(
  actorId: string,
  targetId: string,
): Promise<{ ok: boolean; reason?: string }> {
  if (!/^[0-9a-f-]{36}$/i.test(targetId)) return { ok: false, reason: "Unknown administrator." };
  if (actorId === targetId) {
    return { ok: false, reason: "You cannot disable your own account." };
  }

  const sql = db();
  const [remaining] = await sql<{ count: string }[]>`
    SELECT count(DISTINCT u.id)::text AS count
    FROM admin_user u
    JOIN admin_credential c ON c.user_id = u.id
    WHERE u.disabled_at IS NULL AND u.id <> ${targetId}
  `;

  if (Number(remaining?.count ?? 0) < 1) {
    return { ok: false, reason: "This is the last administrator who can sign in." };
  }

  const rows = await sql`
    UPDATE admin_user SET disabled_at = now()
     WHERE id = ${targetId} AND disabled_at IS NULL
    RETURNING id
  `;

  return rows.length > 0 ? { ok: true } : { ok: false, reason: "Unknown administrator." };
}

import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import type {
  AuthenticationResponseJSON,
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON,
  RegistrationResponseJSON,
} from "@simplewebauthn/server";
import { relyingParty } from "@/lib/admin/env";
import { db } from "@/lib/db";

/**
 * Passkey enrolment and assertion.
 *
 * The property that makes this worth the effort over a password: the private key
 * never leaves the authenticator, and the browser will only use it for the exact
 * origin it was registered to. A convincing replica of this site on another
 * domain cannot extract anything usable, because the signature is bound to the
 * origin the browser observed rather than to anything the page claims. There is
 * no shared secret in the database and nothing to phish.
 *
 * Every ceremony is anchored to a challenge that is generated server-side,
 * stored, expired quickly and consumed exactly once. Re-presenting a captured
 * assertion fails on the second attempt.
 */

const CHALLENGE_TTL_SECONDS = 120;

export async function credentialCount(): Promise<number> {
  const [row] = await db()<{ count: string }[]>`SELECT count(*)::text FROM admin_credential`;
  return Number(row?.count ?? 0);
}

async function storeChallenge(
  kind: "registration" | "authentication",
  challenge: string,
  userId: string | null,
): Promise<string> {
  const [row] = await db()<{ id: string }[]>`
    INSERT INTO admin_challenge (kind, challenge, user_id, expires_at)
    VALUES (
      ${kind},
      ${challenge},
      ${userId},
      now() + ${`${CHALLENGE_TTL_SECONDS} seconds`}::interval
    )
    RETURNING id
  `;
  if (!row) throw new Error("Failed to persist WebAuthn challenge.");
  return row.id;
}

/**
 * Atomically claims a challenge. The `consumed_at IS NULL` predicate inside the
 * UPDATE is what makes this single-use even when two requests race: only one
 * statement can match the row and return it.
 */
async function consumeChallenge(
  id: string,
  kind: "registration" | "authentication",
): Promise<{ challenge: string; userId: string | null } | null> {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;

  const [row] = await db()<{ challenge: string; user_id: string | null }[]>`
    UPDATE admin_challenge
    SET consumed_at = now()
    WHERE id = ${id}
      AND kind = ${kind}
      AND consumed_at IS NULL
      AND expires_at > now()
    RETURNING challenge, user_id
  `;

  return row ? { challenge: row.challenge, userId: row.user_id } : null;
}

/** Best-effort tidy-up of spent and stale ceremony state. */
export async function pruneChallenges(): Promise<void> {
  await db()`DELETE FROM admin_challenge WHERE expires_at < now() - interval '1 day'`;
}

export async function findOrCreateUser(
  username: string,
  displayName: string,
): Promise<{ id: string; username: string; displayName: string }> {
  const sql = db();
  const [row] = await sql<{ id: string; username: string; display_name: string }[]>`
    INSERT INTO admin_user (username, display_name)
    VALUES (${username}, ${displayName})
    ON CONFLICT (username) DO UPDATE SET display_name = EXCLUDED.display_name
    RETURNING id, username, display_name
  `;
  if (!row) throw new Error("Failed to create administrator record.");
  return { id: row.id, username: row.username, displayName: row.display_name };
}

export async function beginRegistration(user: {
  id: string;
  username: string;
  displayName: string;
}): Promise<{ challengeId: string; options: PublicKeyCredentialCreationOptionsJSON }> {
  const rp = relyingParty();

  const existing = await db()<{ id: string; transports: string[] }[]>`
    SELECT id, transports FROM admin_credential WHERE user_id = ${user.id}
  `;

  const options = await generateRegistrationOptions({
    rpName: rp.name,
    rpID: rp.id,
    userName: user.username,
    userDisplayName: user.displayName,
    userID: new TextEncoder().encode(user.id),
    attestationType: "none",
    // Stops the same authenticator being enrolled twice, which otherwise
    // produces a duplicate the user cannot tell apart in their passkey list.
    excludeCredentials: existing.map((credential) => ({
      id: credential.id,
      transports: credential.transports,
    })),
    authenticatorSelection: {
      // Discoverable, so signing in needs no username: the authenticator offers
      // the account itself and we never have to confirm whether one exists.
      residentKey: "required",
      // A present device is not enough; the user must prove it is them with a
      // biometric or PIN. This is what makes a stolen laptop insufficient.
      userVerification: "required",
    },
  });

  return {
    challengeId: await storeChallenge("registration", options.challenge, user.id),
    options,
  };
}

export async function finishRegistration(input: {
  challengeId: string;
  response: RegistrationResponseJSON;
  label: string;
}): Promise<{ ok: true; userId: string } | { ok: false; reason: string }> {
  const claimed = await consumeChallenge(input.challengeId, "registration");
  if (!claimed?.userId) return { ok: false, reason: "Challenge expired or already used." };

  const rp = relyingParty();
  let verification;
  try {
    verification = await verifyRegistrationResponse({
      response: input.response,
      expectedChallenge: claimed.challenge,
      expectedOrigin: rp.origin,
      expectedRPID: rp.id,
      requireUserVerification: true,
    });
  } catch (error) {
    return { ok: false, reason: error instanceof Error ? error.message : "Verification failed." };
  }

  if (!verification.verified) return { ok: false, reason: "Verification failed." };

  const { credential, credentialDeviceType, credentialBackedUp } = verification.registrationInfo;

  await db()`
    INSERT INTO admin_credential
      (id, user_id, public_key, counter, device_type, backed_up, transports, label)
    VALUES (
      ${credential.id},
      ${claimed.userId},
      ${Buffer.from(credential.publicKey)},
      ${credential.counter},
      ${credentialDeviceType},
      ${credentialBackedUp},
      ${credential.transports ?? []},
      ${input.label.slice(0, 80) || "Passkey"}
    )
    ON CONFLICT (id) DO NOTHING
  `;

  return { ok: true, userId: claimed.userId };
}

export async function beginAuthentication(): Promise<{
  challengeId: string;
  options: PublicKeyCredentialRequestOptionsJSON;
}> {
  const options = await generateAuthenticationOptions({
    rpID: relyingParty().id,
    // Deliberately no `allowCredentials`. Passkeys are discoverable, so the
    // authenticator presents the account; the server never has to reveal
    // whether a given username is enrolled.
    userVerification: "required",
  });

  return {
    challengeId: await storeChallenge("authentication", options.challenge, null),
    options,
  };
}

export async function finishAuthentication(input: {
  challengeId: string;
  response: AuthenticationResponseJSON;
}): Promise<
  { ok: true; user: { id: string; username: string; displayName: string } } | { ok: false; reason: string }
> {
  const claimed = await consumeChallenge(input.challengeId, "authentication");
  if (!claimed) return { ok: false, reason: "Challenge expired or already used." };

  const sql = db();
  const [record] = await sql<
    {
      id: string;
      public_key: Buffer;
      counter: string;
      transports: string[];
      user_id: string;
      username: string;
      display_name: string;
    }[]
  >`
    SELECT c.id, c.public_key, c.counter::text, c.transports,
           u.id AS user_id, u.username, u.display_name
    FROM admin_credential c
    JOIN admin_user u ON u.id = c.user_id
    WHERE c.id = ${input.response.id} AND u.disabled_at IS NULL
  `;

  if (!record) return { ok: false, reason: "Unrecognised passkey." };

  const rp = relyingParty();
  let verification;
  try {
    verification = await verifyAuthenticationResponse({
      response: input.response,
      expectedChallenge: claimed.challenge,
      expectedOrigin: rp.origin,
      expectedRPID: rp.id,
      requireUserVerification: true,
      credential: {
        id: record.id,
        publicKey: new Uint8Array(record.public_key),
        counter: Number(record.counter),
        transports: record.transports,
      },
    });
  } catch (error) {
    return { ok: false, reason: error instanceof Error ? error.message : "Verification failed." };
  }

  if (!verification.verified) return { ok: false, reason: "Verification failed." };

  // Persisting the advancing counter is what lets a cloned authenticator be
  // detected: a replayed assertion reports a value that has already been seen.
  await sql`
    UPDATE admin_credential
    SET counter = ${verification.authenticationInfo.newCounter}, last_used_at = now()
    WHERE id = ${record.id}
  `;

  return {
    ok: true,
    user: { id: record.user_id, username: record.username, displayName: record.display_name },
  };
}

export interface PasskeyRow {
  readonly id: string;
  readonly label: string;
  readonly deviceType: string;
  readonly backedUp: boolean;
  readonly createdAt: Date;
  readonly lastUsedAt: Date | null;
}

export async function listPasskeys(userId: string): Promise<readonly PasskeyRow[]> {
  const rows = await db()<
    {
      id: string;
      label: string;
      device_type: string;
      backed_up: boolean;
      created_at: Date;
      last_used_at: Date | null;
    }[]
  >`
    SELECT id, label, device_type, backed_up, created_at, last_used_at
    FROM admin_credential
    WHERE user_id = ${userId}
    ORDER BY created_at ASC
  `;

  return rows.map((row) => ({
    id: row.id,
    label: row.label,
    deviceType: row.device_type,
    backedUp: row.backed_up,
    createdAt: row.created_at,
    lastUsedAt: row.last_used_at,
  }));
}

/**
 * Removes a passkey, refusing to delete the last one.
 *
 * Without this guard an administrator can lock themselves out of their own site
 * with a single click, and recovery would mean going back to the bootstrap token
 * and the database by hand.
 */
export async function deletePasskey(
  userId: string,
  credentialId: string,
): Promise<{ ok: boolean; reason?: string }> {
  const sql = db();
  const [row] = await sql<{ count: string }[]>`
    SELECT count(*)::text FROM admin_credential WHERE user_id = ${userId}
  `;

  if (Number(row?.count ?? 0) <= 1) {
    return { ok: false, reason: "This is your only passkey. Enrol another before removing it." };
  }

  const deleted = await sql`
    DELETE FROM admin_credential WHERE user_id = ${userId} AND id = ${credentialId} RETURNING id
  `;

  return deleted.length > 0 ? { ok: true } : { ok: false, reason: "Passkey not found." };
}

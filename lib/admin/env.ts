/**
 * Environment for the administrative surface.
 *
 * Two rules govern this file.
 *
 * First, **nothing here has a default**. A secret with a fallback value is not a
 * secret: it is a published credential that happens to be inconvenient to find.
 * Every accessor below throws when its variable is absent, so a misconfigured
 * deployment fails loudly at the first admin request instead of quietly serving
 * an admin panel that anyone can sign into.
 *
 * Second, the checks are **lazy**. Reading these at module scope would make the
 * production build depend on secrets that belong only to the running server, and
 * would break `npm run check` on a machine that has never seen the database. The
 * public site must build and serve with none of these set; only `/admin` needs
 * them.
 */

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} is not set. The admin surface refuses to run without it — see README.md, "Administrative surface".`,
    );
  }
  return value;
}

/**
 * Whether a database is wired up at all.
 *
 * The public journal falls back to the bundled content module when this is
 * false, so the site is fully functional before any infrastructure exists.
 */
export function hasDatabase(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

export function databaseUrl(): string {
  return required("DATABASE_URL");
}

/**
 * Key for signing session cookies and for hashing IP addresses in the audit
 * log. Must be at least 32 bytes of entropy; generate with
 * `node -e "console.log(crypto.randomBytes(48).toString('base64url'))"`.
 *
 * Rotating this value invalidates every existing session, which is the intended
 * emergency response to a suspected token leak.
 */
export function sessionSecret(): string {
  const secret = required("ADMIN_SESSION_SECRET");
  if (secret.length < 32) {
    throw new Error(
      "ADMIN_SESSION_SECRET is shorter than 32 characters. Generate one with: node -e \"console.log(crypto.randomBytes(48).toString('base64url'))\"",
    );
  }
  return secret;
}

/**
 * WebAuthn relying party identity.
 *
 * `rpID` is a bare registrable domain with no scheme, port or subdomain —
 * `restoreeuropa.eu`, never `https://restoreeuropa.eu` and never
 * `www.restoreeuropa.eu`. Using the `www` host would bind credentials to it and
 * leave them unusable on the apex. A passkey is cryptographically bound to this
 * value, so changing it orphans every credential already enrolled. The browser
 * refuses assertions whose origin does not match, which is precisely what makes
 * passkeys phishing-resistant and why neither value may be inferred from the
 * request.
 */
export function relyingParty(): { id: string; name: string; origin: string } {
  return {
    id: required("ADMIN_RP_ID"),
    name: "Restore Europe Administration",
    origin: required("ADMIN_ORIGIN"),
  };
}

/**
 * One-time token permitting the very first passkey to be enrolled.
 *
 * This is only honoured while the credential table is empty — see
 * `lib/admin/webauthn.ts`. Once one passkey exists the token is inert, so
 * leaving it set after enrolment does not widen the attack surface; further
 * passkeys can only be added from an already authenticated session.
 */
export function bootstrapToken(): string {
  return required("ADMIN_BOOTSTRAP_TOKEN");
}

export function hasBootstrapToken(): boolean {
  return Boolean(process.env.ADMIN_BOOTSTRAP_TOKEN);
}

/**
 * Key encrypting members' names and email addresses at rest.
 *
 * 32 raw bytes, base64url-encoded. Generate with
 * `node -e "console.log(crypto.randomBytes(32).toString('base64url'))"`.
 *
 * This key must never be stored in, or backed up alongside, the database it
 * protects — the entire point is that a leaked dump decrypts to nothing. Equally,
 * losing it destroys the membership roll irreversibly: there is no recovery path
 * by design, so it needs a backup of its own, kept somewhere else.
 *
 * Separate from `ADMIN_SESSION_SECRET` on purpose. Rotating session signing
 * should cost every administrator a fresh sign-in, not render the members table
 * unreadable.
 */
export function memberEncryptionKey(): string {
  const key = required("MEMBER_ENCRYPTION_KEY");
  // 32 bytes is 43 base64url characters unpadded. Anything shorter is either a
  // truncated key or a passphrase someone typed, and neither gives AES-256 the
  // entropy it is being credited with.
  if (key.length < 43) {
    throw new Error(
      "MEMBER_ENCRYPTION_KEY must be 32 bytes, base64url-encoded. Generate one with: node -e \"console.log(crypto.randomBytes(32).toString('base64url'))\"",
    );
  }
  return key;
}

export function hasMemberEncryptionKey(): boolean {
  return Boolean(process.env.MEMBER_ENCRYPTION_KEY);
}

/**
 * Credentials for reading Vercel Web Analytics. Optional: without them the
 * dashboard says the source is not configured rather than inventing numbers.
 */
export function analyticsConfig():
  | { token: string; projectId: string; teamId?: string }
  | undefined {
  const token = process.env.VERCEL_ANALYTICS_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  if (!token || !projectId) return undefined;
  return { token, projectId, teamId: process.env.VERCEL_TEAM_ID || undefined };
}

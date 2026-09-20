import type { NextRequest } from "next/server";
import { jsonResponse, opaqueFailure } from "@/lib/admin/api";
import { constantTimeEqual } from "@/lib/admin/crypto";
import { bootstrapToken, hasBootstrapToken } from "@/lib/admin/env";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import { currentSession } from "@/lib/admin/session";
import { beginRegistration, credentialCount, findOrCreateUser } from "@/lib/admin/webauthn";

/**
 * Starts passkey enrolment.
 *
 * Two, and only two, ways in:
 *
 *   1. **Bootstrap.** Permitted only while the credential table is empty, and
 *      only with the one-time token from the environment. The emptiness check is
 *      what makes leaving `ADMIN_BOOTSTRAP_TOKEN` configured afterwards harmless
 *      — once a passkey exists this branch is dead, so a leaked token buys
 *      nothing.
 *   2. **Authenticated.** An administrator who is already signed in adding
 *      another device, which is how you avoid being locked out by a lost phone.
 *
 * There is no third path. In particular, no request may name the user it wants
 * to enrol a key for.
 */
export async function POST(request: NextRequest) {
  const { ipHash } = await clientContext();

  const limit = await consumeRateLimit(`register:${ipHash ?? "unknown"}`, 5, 600);
  if (!limit.allowed) return opaqueFailure(429);

  let body: { token?: unknown; username?: unknown; displayName?: unknown };
  try {
    body = await request.json();
  } catch {
    return opaqueFailure();
  }

  const session = await currentSession();

  if (session) {
    const { challengeId, options } = await beginRegistration(session.user);
    return jsonResponse({ challengeId, options });
  }

  // Unauthenticated: bootstrap only, and only into an empty system.
  if ((await credentialCount()) > 0 || !hasBootstrapToken()) return opaqueFailure(403);

  const supplied = typeof body.token === "string" ? body.token : "";
  if (!supplied || !constantTimeEqual(supplied, bootstrapToken())) return opaqueFailure(403);

  const username =
    typeof body.username === "string" && body.username.trim() ? body.username.trim() : "";
  const displayName =
    typeof body.displayName === "string" && body.displayName.trim()
      ? body.displayName.trim()
      : username;

  if (!username || username.length > 64) return opaqueFailure();

  const user = await findOrCreateUser(username, displayName.slice(0, 120));
  const { challengeId, options } = await beginRegistration(user);
  return jsonResponse({ challengeId, options });
}

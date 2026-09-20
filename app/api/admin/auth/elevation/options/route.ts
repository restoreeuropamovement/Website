import { jsonResponse, opaqueFailure } from "@/lib/admin/api";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { currentSession } from "@/lib/admin/session";
import { beginAuthentication } from "@/lib/admin/webauthn";

/**
 * Issues a challenge for re-asserting a passkey mid-session.
 *
 * Unlike the sign-in equivalent this requires an existing session: elevation
 * raises what a session may do, so there has to be one to raise. A caller
 * without one gets 403 and no challenge, which keeps this from becoming a
 * second, quieter sign-in endpoint.
 */
export async function POST() {
  const session = await currentSession();
  if (!session) return opaqueFailure(403);

  // Throttled per session rather than per address: the caller is already
  // identified, so this bounds one session's attempts without letting a shared
  // office address exhaust everybody's allowance at once.
  const limit = await consumeRateLimit(`elevate-options:${session.sessionId}`, 20, 300);
  if (!limit.allowed) return opaqueFailure(429);

  const { challengeId, options } = await beginAuthentication();
  return jsonResponse({ challengeId, options });
}

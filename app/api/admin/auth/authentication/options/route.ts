import { jsonResponse, opaqueFailure } from "@/lib/admin/api";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import { beginAuthentication, pruneChallenges } from "@/lib/admin/webauthn";

/**
 * Issues a sign-in challenge.
 *
 * The response is identical whether or not any administrator exists, so this
 * endpoint cannot be used to discover that the site has an admin account, let
 * alone who holds it.
 */
export async function POST() {
  const { ipHash } = await clientContext();

  const limit = await consumeRateLimit(`auth-options:${ipHash ?? "unknown"}`, 20, 300);
  if (!limit.allowed) return opaqueFailure(429);

  const { challengeId, options } = await beginAuthentication();

  // Opportunistic cleanup; failure here must not affect the sign-in.
  void pruneChallenges().catch(() => {});

  return jsonResponse({ challengeId, options });
}

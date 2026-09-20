import type { NextRequest } from "next/server";
import type { AuthenticationResponseJSON } from "@simplewebauthn/server";
import { jsonResponse, opaqueFailure } from "@/lib/admin/api";
import { recordAudit } from "@/lib/admin/audit";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import { createSession } from "@/lib/admin/session";
import { finishAuthentication } from "@/lib/admin/webauthn";

/**
 * Completes sign-in and issues the session cookie.
 *
 * Throttled harder than the options endpoint: this is the one an attacker would
 * hammer. Every attempt, successful or not, lands in the audit log.
 */
export async function POST(request: NextRequest) {
  const { ipHash, userAgent } = await clientContext();

  const limit = await consumeRateLimit(`auth-verify:${ipHash ?? "unknown"}`, 10, 300);
  if (!limit.allowed) {
    await recordAudit({
      action: "session.sign-in",
      outcome: "failure",
      detail: { reason: "rate limited", attempts: limit.count },
      ipHash,
    });
    return opaqueFailure(429);
  }

  let body: { challengeId?: unknown; response?: unknown };
  try {
    body = await request.json();
  } catch {
    return opaqueFailure();
  }

  if (typeof body.challengeId !== "string" || typeof body.response !== "object" || !body.response) {
    return opaqueFailure();
  }

  const result = await finishAuthentication({
    challengeId: body.challengeId,
    response: body.response as AuthenticationResponseJSON,
  });

  if (!result.ok) {
    await recordAudit({
      action: "session.sign-in",
      outcome: "failure",
      detail: { reason: result.reason },
      ipHash,
    });
    return opaqueFailure(401);
  }

  await createSession(result.user.id, { ipHash, userAgent });

  await recordAudit({
    action: "session.sign-in",
    outcome: "success",
    actorId: result.user.id,
    actorLabel: result.user.username,
    ipHash,
  });

  return jsonResponse({ ok: true });
}

import type { NextRequest } from "next/server";
import type { RegistrationResponseJSON } from "@simplewebauthn/server";
import { jsonResponse, opaqueFailure } from "@/lib/admin/api";
import { recordAudit } from "@/lib/admin/audit";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import { createSession, currentSession } from "@/lib/admin/session";
import { credentialCount, finishRegistration } from "@/lib/admin/webauthn";

/**
 * Completes passkey enrolment.
 *
 * The challenge referenced here was issued by the options endpoint, is bound to
 * a specific user server-side, and is consumed atomically — so this handler
 * cannot be talked into attaching a credential to someone else's account by
 * anything in the request body.
 */
export async function POST(request: NextRequest) {
  const { ipHash } = await clientContext();

  const limit = await consumeRateLimit(`register-verify:${ipHash ?? "unknown"}`, 10, 600);
  if (!limit.allowed) return opaqueFailure(429);

  let body: { challengeId?: unknown; response?: unknown; label?: unknown };
  try {
    body = await request.json();
  } catch {
    return opaqueFailure();
  }

  if (typeof body.challengeId !== "string" || typeof body.response !== "object" || !body.response) {
    return opaqueFailure();
  }

  const wasBootstrap = (await credentialCount()) === 0;
  const existingSession = await currentSession();

  const result = await finishRegistration({
    challengeId: body.challengeId,
    response: body.response as RegistrationResponseJSON,
    label: typeof body.label === "string" ? body.label : "Passkey",
  });

  if (!result.ok) {
    await recordAudit({
      action: "passkey.register",
      outcome: "failure",
      actorId: existingSession?.user.id ?? null,
      detail: { reason: result.reason, bootstrap: wasBootstrap },
      ipHash,
    });
    return opaqueFailure();
  }

  await recordAudit({
    action: "passkey.register",
    outcome: "success",
    actorId: result.userId,
    detail: { bootstrap: wasBootstrap },
    ipHash,
  });

  // Enrolling the first passkey signs that administrator in; there is no other
  // credential they could use and no password to fall back to.
  if (wasBootstrap && !existingSession) {
    const { userAgent } = await clientContext();
    await createSession(result.userId, { ipHash, userAgent });
  }

  return jsonResponse({ ok: true });
}

import type { NextRequest } from "next/server";
import type { AuthenticationResponseJSON } from "@simplewebauthn/server";
import { jsonResponse, opaqueFailure } from "@/lib/admin/api";
import { recordAudit } from "@/lib/admin/audit";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import { currentSession, elevateSession } from "@/lib/admin/session";
import { finishAuthentication } from "@/lib/admin/webauthn";

/**
 * Completes re-authentication and elevates the current session.
 *
 * The assertion has to come from a passkey belonging to the administrator the
 * session already identifies. Verifying the assertion alone would be a hole: any
 * enrolled passkey would then elevate anybody's session, which on a shared
 * machine is a plausible way to borrow a colleague's access to the roll.
 */
export async function POST(request: NextRequest) {
  const { ipHash } = await clientContext();

  const session = await currentSession();
  if (!session) return opaqueFailure(403);

  const limit = await consumeRateLimit(`elevate-verify:${session.sessionId}`, 10, 300);
  if (!limit.allowed) {
    await recordAudit({
      action: "session.elevate",
      outcome: "failure",
      actorId: session.user.id,
      actorLabel: session.user.username,
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
      action: "session.elevate",
      outcome: "failure",
      actorId: session.user.id,
      actorLabel: session.user.username,
      detail: { reason: result.reason },
      ipHash,
    });
    return opaqueFailure(401);
  }

  // The assertion is valid, but is it *theirs*?
  if (result.user.id !== session.user.id) {
    await recordAudit({
      action: "session.elevate",
      outcome: "failure",
      actorId: session.user.id,
      actorLabel: session.user.username,
      detail: { reason: "passkey belongs to a different administrator" },
      ipHash,
    });
    return opaqueFailure(403);
  }

  await elevateSession(session);

  await recordAudit({
    action: "session.elevate",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    ipHash,
  });

  return jsonResponse({ ok: true });
}

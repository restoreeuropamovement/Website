import type { NextRequest } from "next/server";
import type { RegistrationResponseJSON } from "@simplewebauthn/server";
import { consumeInvite } from "@/lib/admin/administrators";
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

  let body: { challengeId?: unknown; response?: unknown; label?: unknown; invite?: unknown };
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

  /*
   * An invitation is spent here rather than when the link was opened, because
   * opening it costs nothing and a URL gets fetched by things that are not the
   * recipient. It is spent *before* the response is verified, not after: a
   * single-use token has to be single-presentation, or a leaked link gets
   * unlimited attempts at the ceremony. The cost of that ordering is close to
   * nothing in practice — a dismissed biometric prompt fails in the browser and
   * never reaches this endpoint at all.
   */
  const invited = typeof body.invite === "string" && body.invite ? body.invite : null;
  const invite = invited ? await consumeInvite(invited) : null;

  if (invited && !invite) {
    await recordAudit({
      action: "admin.invite.redeem",
      outcome: "failure",
      detail: { reason: "Invitation expired, withdrawn or already used." },
      ipHash,
    });
    return opaqueFailure(403);
  }

  const result = await finishRegistration({
    challengeId: body.challengeId,
    response: body.response as RegistrationResponseJSON,
    label: typeof body.label === "string" ? body.label : "Passkey",
  });

  if (!result.ok) {
    await recordAudit({
      action: "passkey.register",
      outcome: "failure",
      actorId: invite?.user.id ?? existingSession?.user.id ?? null,
      detail: { reason: result.reason, bootstrap: wasBootstrap, invited: invite !== null },
      ipHash,
    });
    return opaqueFailure();
  }

  /*
   * The challenge decides which account the credential was attached to, and the
   * invitation decides which account was claimed. They are issued together by
   * the options endpoint and should never disagree; if they do, something has
   * paired an invitation with a ceremony begun by another route, and the safe
   * reading is that no invitation was redeemed.
   */
  if (invite && invite.user.id !== result.userId) {
    await recordAudit({
      action: "admin.invite.redeem",
      outcome: "failure",
      actorId: result.userId,
      detail: { reason: "Invitation did not match the account the ceremony was begun for." },
      ipHash,
    });
    return opaqueFailure(403);
  }

  await recordAudit({
    action: "passkey.register",
    outcome: "success",
    actorId: result.userId,
    detail: { bootstrap: wasBootstrap, invited: invite !== null },
    ipHash,
  });

  if (invite) {
    await recordAudit({
      action: "admin.invite.redeem",
      outcome: "success",
      actorId: result.userId,
      actorLabel: invite.user.username,
      detail: { inviteId: invite.id },
      ipHash,
    });
  }

  /*
   * Enrolling the first passkey signs that administrator in; there is no other
   * credential they could use and no password to fall back to. A redeemed
   * invitation is signed in on the same reasoning: the person has just proved
   * possession of a link somebody with an elevated session issued, and has a
   * verified passkey on the device in front of them.
   */
  if ((wasBootstrap || invite) && !existingSession) {
    const { userAgent } = await clientContext();
    await createSession(result.userId, { ipHash, userAgent });
  }

  return jsonResponse({ ok: true });
}

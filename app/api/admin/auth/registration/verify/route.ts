import type { NextRequest } from "next/server";
import type { RegistrationResponseJSON } from "@simplewebauthn/server";
import { claimInviteAttempt, consumeInvite } from "@/lib/admin/administrators";
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
   * An invitation is claimed here rather than when the link was opened, because
   * opening it costs nothing and a URL gets fetched by things that are not the
   * recipient.
   *
   * Claiming is not spending. This counts one presentation against a small
   * allowance and leaves the invitation live; it is redeemed further down, once
   * a passkey has actually verified against the account it names. Spending it
   * at this point instead — which is what this handler used to do — meant a
   * single malformed request destroyed the invitation, so anyone who saw the
   * link could lock the intended recipient out of enrolling while gaining
   * nothing themselves. The bounded count is what keeps that fix from handing a
   * leaked link unlimited attempts at the ceremony; see `MAX_INVITE_ATTEMPTS`.
   */
  const invited = typeof body.invite === "string" && body.invite ? body.invite : null;
  const invite = invited ? await claimInviteAttempt(invited) : null;

  if (invited && !invite) {
    await recordAudit({
      action: "admin.invite.redeem",
      outcome: "failure",
      detail: {
        reason: "Invitation expired, withdrawn, already used, or out of attempts.",
      },
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

  /*
   * Redeemed only now, with a verified passkey attached to the account the
   * invitation names. `consumeInvite` carries the same `consumed_at IS NULL`
   * predicate as before, so two ceremonies completing together still spend it
   * once; losing that race after enrolling is treated as not having redeemed
   * an invitation rather than as a failure, because the passkey is real and
   * the account is the right one either way.
   */
  const redeemed = invited ? await consumeInvite(invited) : null;

  await recordAudit({
    action: "passkey.register",
    outcome: "success",
    actorId: result.userId,
    detail: { bootstrap: wasBootstrap, invited: invite !== null },
    ipHash,
  });

  if (redeemed) {
    await recordAudit({
      action: "admin.invite.redeem",
      outcome: "success",
      actorId: result.userId,
      actorLabel: redeemed.user.username,
      detail: { inviteId: redeemed.id },
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

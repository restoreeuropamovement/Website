"use server";

import { revalidatePath } from "next/cache";
import { createInvite, disableAdministrator, revokeInvite } from "@/lib/admin/administrators";
import { recordAudit } from "@/lib/admin/audit";
import { relyingParty } from "@/lib/admin/env";
import { clientContext } from "@/lib/admin/request";
import {
  requireElevatedSession,
  requireSession,
  revokeAllSessions,
} from "@/lib/admin/session";
import { deletePasskey } from "@/lib/admin/webauthn";

export async function deletePasskeyAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  const credentialId = String(form.get("credentialId") ?? "").trim();
  if (!credentialId) return;

  // Scoped to the signed-in user, so the id in the request cannot be used to
  // remove somebody else's passkey. `deletePasskey` also refuses to remove the
  // last one, which would lock the account out irrecoverably.
  const result = await deletePasskey(session.user.id, credentialId);

  await recordAudit({
    action: "passkey.delete",
    outcome: result.ok ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { credentialId, reason: result.reason ?? null },
    ipHash,
  });

  revalidatePath("/admin/security");
}

/**
 * What the invitation form gets back.
 *
 * `link` is returned exactly once and is never stored anywhere in a usable
 * form — the database holds only its digest. It is deliberately not written to
 * the audit log either: until it is spent it is a live credential, and that
 * table is not encrypted.
 */
export interface InviteFormState {
  readonly status: "idle" | "created" | "error";
  readonly message?: string;
  readonly link?: string;
  readonly expiresAt?: string;
}

/**
 * Admits a second administrator.
 *
 * Elevated rather than merely signed in, and that is the most important line in
 * this file. Creating an administrator is the one action that can hand the
 * membership roll to somebody new, so it must cost at least as much as reading
 * the roll does — a passkey touch from the last few minutes. A stolen session
 * cookie can already read the journal; it must not be able to quietly mint a
 * second way in that outlives the theft.
 */
export async function createInviteAction(
  _previous: InviteFormState,
  form: FormData,
): Promise<InviteFormState> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const username = String(form.get("username") ?? "");
  const displayName = String(form.get("displayName") ?? "");

  const result = await createInvite({
    username,
    displayName,
    invitedById: session.user.id,
  });

  await recordAudit({
    action: "admin.invite",
    outcome: result.ok ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    // The account invited, never the token that claims it.
    detail: result.ok
      ? { username: username.trim().toLowerCase(), inviteId: result.inviteId }
      : { username: username.trim().toLowerCase(), reason: result.reason },
    ipHash,
  });

  if (!result.ok) return { status: "error", message: result.reason };

  revalidatePath("/admin/security");

  return {
    status: "created",
    /*
     * Built from ADMIN_ORIGIN rather than from the request or the public site
     * URL. A passkey is bound to that exact origin, so a link that arrives on
     * any other host — the www variant, a preview deployment — produces a
     * ceremony the browser will refuse. Sending the wrong one wastes the
     * invitation and looks like a broken site.
     */
    link: `${relyingParty().origin}/admin/invite?token=${encodeURIComponent(result.token)}`,
    expiresAt: result.expiresAt.toISOString(),
  };
}

/** Withdraws an unclaimed invitation. */
export async function revokeInviteAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  const inviteId = String(form.get("inviteId") ?? "").trim();
  if (!inviteId) return;

  const revoked = await revokeInvite(inviteId);

  await recordAudit({
    action: "admin.invite.revoke",
    outcome: revoked ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { inviteId },
    ipHash,
  });

  revalidatePath("/admin/security");
}

/**
 * Suspends another administrator.
 *
 * Elevated for the same reason as issuing an invitation: it changes who can
 * reach the roll. `disableAdministrator` refuses to act on the caller or on the
 * last administrator who can still sign in.
 */
export async function disableAdministratorAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const targetId = String(form.get("administratorId") ?? "").trim();
  if (!targetId) return;

  const result = await disableAdministrator(session.user.id, targetId);

  // Their cookie is as good as their passkey until it is thrown away. The
  // session check reads `disabled_at`, so this is belt and braces rather than
  // the only thing stopping them — but leaving live rows behind after removing
  // somebody is the kind of tidiness that turns out to matter.
  if (result.ok) await revokeAllSessions(targetId);

  await recordAudit({
    action: "admin.disable",
    outcome: result.ok ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { administratorId: targetId, reason: result.reason ?? null },
    ipHash,
  });

  revalidatePath("/admin/security");
}

/**
 * Revokes every session for the signed-in administrator, including this one.
 *
 * The response to a device going missing: the cookie on it stops working
 * immediately rather than lasting until it expires on its own.
 */
export async function revokeSessionsAction(): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  const revoked = await revokeAllSessions(session.user.id);

  await recordAudit({
    action: "session.revoke",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { revoked },
    ipHash,
  });

  revalidatePath("/admin/security");
}

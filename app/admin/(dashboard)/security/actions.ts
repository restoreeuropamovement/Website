"use server";

import { revalidatePath } from "next/cache";
import { recordAudit } from "@/lib/admin/audit";
import { clientContext } from "@/lib/admin/request";
import { requireSession, revokeAllSessions } from "@/lib/admin/session";
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

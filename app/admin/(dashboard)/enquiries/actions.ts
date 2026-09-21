"use server";

import { revalidatePath } from "next/cache";
import { recordAudit } from "@/lib/admin/audit";
import { eraseEnquiry, setEnquiryStatus } from "@/lib/admin/enquiries";
import { clientContext } from "@/lib/admin/request";
import { dropElevation, requireElevatedSession } from "@/lib/admin/session";

/**
 * Mutations against the correspondence inbox. Elevated, like the roll: the
 * messages are encrypted and a stolen session cookie should not be able to
 * read them, let alone delete them.
 */

export async function markEnquiryAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const id = String(form.get("id") ?? "").trim();
  const status = String(form.get("status") ?? "") === "handled" ? "handled" : "new";
  if (!id) return;

  const changed = await setEnquiryStatus(id, status);

  await recordAudit({
    action: "enquiry.update",
    outcome: changed ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { id, status },
    ipHash,
  });

  revalidatePath("/admin/enquiries");
}

/** Ends the elevated window early, for leaving a shared machine. */
export async function lockEnquiriesAction(): Promise<void> {
  const session = await requireElevatedSession();
  await dropElevation(session);
  revalidatePath("/admin/enquiries");
}

export async function eraseEnquiryAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const id = String(form.get("id") ?? "").trim();
  if (!id) return;

  const erased = await eraseEnquiry(id);

  await recordAudit({
    action: "enquiry.erase",
    outcome: erased ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    /* The id, never the correspondent. */
    detail: { id },
    ipHash,
  });

  revalidatePath("/admin/enquiries");
}

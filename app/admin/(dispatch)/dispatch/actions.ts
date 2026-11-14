"use server";

import { revalidatePath } from "next/cache";

import { recordAudit } from "@/lib/admin/audit";
import { clientContext } from "@/lib/admin/request";
import { requireDispatchSession } from "@/lib/admin/session";
import { markPosted, unmarkPosted } from "@/lib/shop/orders";

/**
 * The two things a dispatch account can change: an order has been posted,
 * or it has not after all.
 *
 * `requireDispatchSession` and not `requireSession`, because this is the one
 * place a dispatch account is meant to act. Neither action reveals anything,
 * so neither needs a passkey touch; the addresses they act on were already
 * shown behind one.
 */

const id = (form: FormData) => String(form.get("id") ?? "").trim();

export async function markPostedAction(form: FormData): Promise<void> {
  const session = await requireDispatchSession();
  const { ipHash } = await clientContext();
  const orderId = id(form);
  /* Kept to the shape of a tracking number, so the field cannot become a
     place to write anything else down. */
  const raw = String(form.get("tracking") ?? "").trim().replace(/\s+/g, "");
  const tracking = /^[A-Za-z0-9]{6,40}$/.test(raw) ? raw : null;

  if (await markPosted(orderId, tracking)) {
    await recordAudit({
      action: "shop.order.posted",
      outcome: "success",
      actorId: session.user.id,
      actorLabel: session.user.username,
      detail: { order: orderId, tracked: tracking !== null },
      ipHash,
    });
  }
  revalidatePath("/admin/dispatch");
}

export async function unmarkPostedAction(form: FormData): Promise<void> {
  const session = await requireDispatchSession();
  const { ipHash } = await clientContext();
  const orderId = id(form);

  if (await unmarkPosted(orderId)) {
    await recordAudit({
      action: "shop.order.unposted",
      outcome: "success",
      actorId: session.user.id,
      actorLabel: session.user.username,
      detail: { order: orderId },
      ipHash,
    });
  }
  revalidatePath("/admin/dispatch");
}

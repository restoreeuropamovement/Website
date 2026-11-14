"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { recordAudit } from "@/lib/admin/audit";
import { hasBlobStorage } from "@/lib/admin/env";
import { clientContext } from "@/lib/admin/request";
import { requireSession } from "@/lib/admin/session";
import {
  moveShopDesign,
  removeShopDesign,
  setShopDesignActive,
  storeShopDesign,
  validateShopDesign,
} from "@/lib/admin/shop-designs";
import { processQueue, submitOrder, syncStatuses } from "@/lib/shop/fulfilment";
import { cancelOrder, requeueOrder } from "@/lib/shop/orders";

/**
 * Shop mutations. Each resolves the session first, for the reason every
 * admin action here does: a Server Action is a public endpoint with a stable
 * id, and the layout around the form is not what protects it.
 *
 * A session is enough for all of them. None reveals anything about a
 * customer — the one read that does, the shipping address, is on the page
 * behind a passkey touch — and the worst a stolen cookie achieves with these
 * is to switch a design off or to send an already-paid order to the printer
 * sooner. Holding them to the roll's bar would make the second factor a
 * reflex rather than a signal.
 */

export interface ShopDesignFormState {
  readonly errors: readonly string[];
}

const id = (form: FormData) => String(form.get("id") ?? "").trim();

export async function uploadShopDesignAction(
  _previous: ShopDesignFormState,
  form: FormData,
): Promise<ShopDesignFormState> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  if (!hasBlobStorage()) {
    return { errors: ["BLOB_READ_WRITE_TOKEN is not set, so there is nowhere to put the files."] };
  }

  const fileOf = (key: string) => {
    const value = form.get(key);
    return value instanceof File ? value : null;
  };
  const draft = {
    title: String(form.get("title") ?? "").trim(),
    description: String(form.get("description") ?? "").trim(),
    preview: fileOf("preview"),
    print: fileOf("print"),
  };

  const errors = validateShopDesign(draft);
  if (errors.length > 0) return { errors };

  const stored = await storeShopDesign(draft);
  await recordAudit({
    action: "shop.design.create",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { id: stored.id, slug: stored.slug, bytes: draft.print?.size ?? 0 },
    ipHash,
  });

  revalidatePath("/admin/shop");
  redirect("/admin/shop?saved=1#designs");
}

export async function toggleShopDesignAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();
  const active = form.get("active") === "true";

  if (await setShopDesignActive(id(form), active)) {
    await recordAudit({
      action: "shop.design.update",
      outcome: "success",
      actorId: session.user.id,
      actorLabel: session.user.username,
      detail: { id: id(form), active },
      ipHash,
    });
  }
  revalidatePath("/admin/shop");
}

export async function moveShopDesignAction(form: FormData): Promise<void> {
  await requireSession();
  const direction = form.get("direction") === "up" ? "up" : "down";
  await moveShopDesign(id(form), direction);
  revalidatePath("/admin/shop");
}

export async function deleteShopDesignAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();
  if (!hasBlobStorage()) return;

  const result = await removeShopDesign(id(form));
  if (result.removed) {
    await recordAudit({
      action: "shop.design.delete",
      outcome: "success",
      actorId: session.user.id,
      actorLabel: session.user.username,
      detail: { id: id(form), slug: result.slug },
      ipHash,
    });
  }
  revalidatePath("/admin/shop");
}

/**
 * Puts a reviewed order back in the queue and sends it at once.
 *
 * The page warns, beside the button, when the last failure was one after
 * which the printer may already hold the order. Pressing it then is a
 * decision a person has taken having checked, which is why it exists at all
 * rather than the queue retrying such orders by itself.
 */
export async function retryOrderAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();
  const orderId = id(form);

  if (await requeueOrder(orderId)) {
    const report = await submitOrder(orderId);
    await recordAudit({
      action: "shop.order.retry",
      outcome: report.outcome === "submitted" ? "success" : "failure",
      actorId: session.user.id,
      actorLabel: session.user.username,
      detail: { order: orderId, result: report.outcome },
      ipHash,
    });
  }
  revalidatePath("/admin/shop");
}

/** Closes an order. Any refund is made in the Stripe dashboard, which is where the money is. */
export async function cancelOrderAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();
  const orderId = id(form);

  if (await cancelOrder(orderId)) {
    await recordAudit({
      action: "shop.order.cancel",
      outcome: "success",
      actorId: session.user.id,
      actorLabel: session.user.username,
      detail: { order: orderId },
      ipHash,
    });
  }
  revalidatePath("/admin/shop");
}

export async function processQueueAction(): Promise<void> {
  await requireSession();
  await processQueue();
  revalidatePath("/admin/shop");
}

export async function syncStatusesAction(): Promise<void> {
  await requireSession();
  await syncStatuses();
  revalidatePath("/admin/shop");
}

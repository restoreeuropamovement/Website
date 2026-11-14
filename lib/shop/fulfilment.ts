import { isShopCountry, isShopQuantity, stickerFormat } from "@/content/shop/structure";
import { recordAudit } from "@/lib/admin/audit";
import { encryptPii } from "@/lib/admin/pii";
import { db } from "@/lib/db";
import { designForOrder } from "@/lib/shop/designs";
import type { OrderStatus } from "@/lib/shop/orders";
import { printProvider, type PrintJob, type PrintProvider, type ShipTo } from "@/lib/shop/providers";
import { retrieveCheckoutSession, shippingDetailsOf } from "@/lib/shop/stripe";

/**
 * Getting paid orders to the printer, and hearing back from it.
 *
 * Three rules hold everywhere in this file.
 *
 * 1. **Nothing is sent before Stripe has confirmed payment.** Only `paid` and
 *    `retry` orders are ever claimed, and only `confirmPayment` writes `paid`.
 * 2. **Nothing is sent twice.** An order is claimed by moving it to
 *    `submitting` in one conditional update, so two workers cannot both hold
 *    it; and an attempt whose result is uncertain is only repeated against a
 *    printer that de-duplicates on our order id. Otherwise a person decides.
 * 3. **Nothing is called "submitted" that the printer did not accept.** The
 *    status and the printer's own order id are written in the same statement,
 *    and the schema refuses one without the other.
 *
 * The address is read from Stripe here, used for one request, and dropped. It
 * is never written to this database — see `shop_order` in db/schema.sql.
 */

/** Orders one run sends at most, so a fault in the queue cannot place an unbounded number of paid jobs. */
export const FULFILMENT_BATCH = 10;

/** After this many attempts an order stops retrying itself and waits for a person. */
const MAX_ATTEMPTS = 5;

/** Minutes to wait before attempt n + 1, after n failures. The nightly run is the floor in practice. */
const BACKOFF_MINUTES = [10, 60, 6 * 60, 24 * 60] as const;

/** A claim older than this was abandoned mid-request — the function died or timed out. */
const STALE_CLAIM_MINUTES = 15;

export type SubmitReport =
  | { readonly outcome: "not-due" }
  | { readonly outcome: "submitted"; readonly providerOrderId: string }
  | { readonly outcome: "retry"; readonly code: string }
  | { readonly outcome: "review"; readonly code: string };

interface ClaimedOrder {
  id: string;
  reference: string;
  quantity: number;
  country: string;
  design_id: string;
  checkout_session_id: string | null;
  provider: string;
  attempts: number;
  livemode: boolean;
}

/**
 * Sends one order to the printer if it is due.
 *
 * Safe to call from anywhere and as often as anyone likes — the webhook calls
 * it the moment a payment lands, the nightly run calls it for whatever is
 * still waiting, an administrator can call it with a button. Whoever claims
 * the order first sends it; every other call finds it already claimed and
 * returns `not-due`.
 */
export async function submitOrder(orderId: string): Promise<SubmitReport> {
  const sql = db();
  const [order] = await sql<ClaimedOrder[]>`
    UPDATE shop_order
       SET status = 'submitting', attempts = attempts + 1, updated_at = now()
     WHERE id = ${orderId}
       AND status IN ('paid', 'retry')
       AND (next_attempt_at IS NULL OR next_attempt_at <= now())
    RETURNING id, reference, quantity, country, design_id, checkout_session_id, provider, attempts, livemode
  `;
  if (!order) return { outcome: "not-due" };

  const provider = printProvider(order.provider);
  const report = await attempt(order, provider);

  await recordAudit({
    action: "shop.order.submit",
    outcome: report.outcome === "submitted" ? "success" : "failure",
    actorLabel: "fulfilment",
    /* The order's id, never the customer's: this log is not encrypted. */
    detail: {
      order: order.id,
      provider: order.provider,
      attempt: order.attempts,
      result: report.outcome,
      ...(report.outcome === "retry" || report.outcome === "review" ? { code: report.code } : {}),
    },
  });

  return report;
}

async function attempt(order: ClaimedOrder, provider: PrintProvider | null): Promise<SubmitReport> {
  if (!provider) return toReview(order.id, "unknown-provider", `No printer is registered as "${order.provider}".`);

  /*
   * The second guard on the line between test and live, after `shopReadiness`.
   * Configuration can change between an order being paid and being sent; the
   * order's own record of which Stripe mode paid for it cannot.
   */
  if (provider.placesRealOrders !== order.livemode) {
    return toReview(
      order.id,
      "mode-mismatch",
      order.livemode
        ? "A live payment would have gone to a printer that prints nothing."
        : "A test payment would have gone to a printer that places real orders.",
    );
  }
  if (!provider.configured()) return toRetry(order, "provider-unconfigured", "The printer's credentials are not set.");

  const design = await designForOrder({ id: order.design_id });
  if (!design) return toReview(order.id, "design-missing", "The design this order is for no longer exists.");
  if (!order.checkout_session_id) return toReview(order.id, "no-session", "The order has no Checkout Session.");
  if (!isShopQuantity(order.quantity) || !isShopCountry(order.country)) {
    return toReview(order.id, "invalid-order", "The order's quantity or country is not one the shop offers.");
  }

  let shipTo: ShipTo;
  try {
    const session = await retrieveCheckoutSession(order.checkout_session_id);
    const shipping = shippingDetailsOf(session);
    const address = shipping?.address;
    if (!shipping || !address?.line1 || !address.city || !address.postal_code || !address.country) {
      return toReview(order.id, "no-address", "Stripe holds no complete shipping address for this order.");
    }
    if (address.country !== order.country) {
      return toReview(order.id, "country-mismatch", "The shipping address is not in the country that was priced.");
    }
    shipTo = {
      name: shipping.name,
      line1: address.line1,
      line2: address.line2 || null,
      postalCode: address.postal_code,
      city: address.city,
      state: address.state || null,
      country: order.country,
    };
  } catch (error) {
    return toRetry(order, "stripe-unavailable", error instanceof Error ? error.message : String(error));
  }

  const job: PrintJob = {
    orderId: order.id,
    reference: order.reference,
    quantity: order.quantity,
    design: {
      slug: design.slug,
      printUrl: design.printUrl,
      printSha256: design.printSha256,
      printContentType: design.printContentType,
      finishedMm: stickerFormat.finishedMm,
      bleedMm: stickerFormat.bleedMm,
    },
    shipTo,
  };

  let outcome;
  try {
    outcome = await provider.submit(job);
  } catch (error) {
    /* An adapter that throws has not said whether the request went out, so
       the honest classification is the uncertain one. */
    outcome = {
      kind: "ambiguous" as const,
      code: "adapter-threw",
      message: error instanceof Error ? error.message : String(error),
    };
  }

  switch (outcome.kind) {
    case "accepted": {
      const updated = await db()`
        UPDATE shop_order
           SET status = 'submitted', provider_order_id = ${outcome.providerOrderId},
               submitted_at = now(), next_attempt_at = NULL,
               last_error_code = NULL, last_error_encrypted = NULL, updated_at = now()
         WHERE id = ${order.id} AND status = 'submitting'
        RETURNING id
      `;
      if (updated.length === 0) {
        /* The claim was taken away mid-request — only the stale-claim rescue
           does that — and the printer has the order regardless. Recorded so a
           person reconciles it rather than assuming either way. */
        return toReview(
          order.id,
          "claim-lost",
          `The printer accepted this as ${outcome.providerOrderId} after the claim had lapsed.`,
          ["submitting", "retry", "review"],
        );
      }
      return { outcome: "submitted", providerOrderId: outcome.providerOrderId };
    }
    case "rejected":
      return toReview(order.id, outcome.code, outcome.message);
    case "unavailable":
      return toRetry(order, outcome.code, outcome.message);
    case "ambiguous":
      return provider.idempotentSubmit
        ? toRetry(order, outcome.code, outcome.message)
        : toReview(order.id, outcome.code, `${outcome.message} The printer may already have this order.`);
  }
}

async function toRetry(order: ClaimedOrder, code: string, message: string): Promise<SubmitReport> {
  if (order.attempts >= MAX_ATTEMPTS) {
    return toReview(order.id, code, `${message} (gave up after ${order.attempts} attempts)`);
  }
  const wait = BACKOFF_MINUTES[Math.max(0, Math.min(order.attempts, BACKOFF_MINUTES.length) - 1)];
  await db()`
    UPDATE shop_order
       SET status = 'retry', next_attempt_at = now() + ${`${wait} minutes`}::interval,
           last_error_code = ${code}, last_error_encrypted = ${await encryptPii(message)},
           updated_at = now()
     WHERE id = ${order.id} AND status = 'submitting'
  `;
  return { outcome: "retry", code };
}

async function toReview(
  orderId: string,
  code: string,
  message: string,
  from: readonly OrderStatus[] = ["submitting"],
): Promise<SubmitReport> {
  await db()`
    UPDATE shop_order
       SET status = 'review', next_attempt_at = NULL,
           last_error_code = ${code}, last_error_encrypted = ${await encryptPii(message)},
           updated_at = now()
     WHERE id = ${orderId} AND status IN ${db()(from as OrderStatus[])}
  `;
  return { outcome: "review", code };
}

/**
 * Claims that outlived the function holding them.
 *
 * A serverless function can be killed mid-request, leaving an order in
 * `submitting` that nothing will ever finish. Whether it reached the printer
 * is unknown, so it is treated exactly like an ambiguous answer: retried if
 * the printer de-duplicates, given to a person if it does not.
 *
 * A rescued order is due at once rather than after a backoff. The wait in
 * `toRetry` is for a printer that answered badly; this one never answered,
 * and the run doing the rescuing is usually the nightly one, so a backoff
 * here would cost the customer a day.
 */
async function rescueStaleClaims(): Promise<number> {
  const sql = db();
  const stale = await sql<ClaimedOrder[]>`
    SELECT id, reference, quantity, country, design_id, checkout_session_id, provider, attempts, livemode
      FROM shop_order
     WHERE status = 'submitting'
       AND updated_at < now() - ${`${STALE_CLAIM_MINUTES} minutes`}::interval
     LIMIT ${FULFILMENT_BATCH}
  `;
  for (const order of stale) {
    const provider = printProvider(order.provider);
    if (provider?.idempotentSubmit && order.attempts < MAX_ATTEMPTS) {
      await sql`
        UPDATE shop_order
           SET status = 'retry', next_attempt_at = now(), last_error_code = 'stale-claim',
               last_error_encrypted = ${await encryptPii("The attempt was interrupted before the printer answered.")},
               updated_at = now()
         WHERE id = ${order.id} AND status = 'submitting'
      `;
    } else {
      await toReview(order.id, "stale-claim", "The attempt was interrupted; the printer may already have this order.");
    }
  }
  return stale.length;
}

export interface QueueReport {
  readonly attempted: number;
  readonly submitted: number;
  readonly retrying: number;
  readonly review: number;
  readonly rescued: number;
}

/** Sends whatever is due, oldest payment first, at most `FULFILMENT_BATCH` of them. */
export async function processQueue(): Promise<QueueReport> {
  const rescued = await rescueStaleClaims();

  const due = await db()<{ id: string }[]>`
    SELECT id FROM shop_order
     WHERE status IN ('paid', 'retry') AND (next_attempt_at IS NULL OR next_attempt_at <= now())
     ORDER BY paid_at
     LIMIT ${FULFILMENT_BATCH}
  `;

  let submitted = 0;
  let retrying = 0;
  let review = 0;
  for (const { id } of due) {
    const report = await submitOrder(id);
    if (report.outcome === "submitted") submitted += 1;
    if (report.outcome === "retry") retrying += 1;
    if (report.outcome === "review") review += 1;
  }

  return { attempted: due.length, submitted, retrying, review, rescued };
}

const PROGRESS: readonly OrderStatus[] = ["submitted", "in_production", "shipped", "delivered"];

/**
 * Asks the printer what has become of everything it holds, and moves orders
 * forward — never back. A printer reporting an order cancelled sends it to
 * review rather than closing it, because the customer has paid and somebody
 * has to refund them or reorder.
 */
export async function syncStatuses(): Promise<{ checked: number; changed: number }> {
  const sql = db();
  const open = await sql<
    { id: string; status: OrderStatus; provider: string; provider_order_id: string; submitted_at: Date }[]
  >`
    SELECT id, status, provider, provider_order_id, submitted_at
      FROM shop_order
     WHERE status IN ('submitted', 'in_production', 'shipped') AND provider_order_id IS NOT NULL
     ORDER BY submitted_at
     LIMIT 50
  `;

  let changed = 0;
  for (const order of open) {
    const provider = printProvider(order.provider);
    if (!provider?.configured()) continue;

    let result;
    try {
      result = await provider.status(order.provider_order_id, order.submitted_at);
    } catch {
      continue;
    }
    if (!result.ok) continue;

    if (result.state === "cancelled") {
      await toReview(order.id, "cancelled-by-printer", "The printer reports this order cancelled.", PROGRESS);
      changed += 1;
      continue;
    }

    const next: OrderStatus = result.state === "accepted" ? "submitted" : result.state;
    if (PROGRESS.indexOf(next) <= PROGRESS.indexOf(order.status)) continue;

    const tracking = result.tracking ? await encryptPii(JSON.stringify(result.tracking)) : null;
    const reachedPost = next === "shipped" || next === "delivered";
    const rows = await sql`
      UPDATE shop_order
         SET status = ${next},
             tracking_encrypted = COALESCE(${tracking}, tracking_encrypted),
             shipped_at = ${reachedPost ? sql`COALESCE(shipped_at, now())` : sql`shipped_at`},
             closed_at = ${next === "delivered" ? sql`now()` : sql`closed_at`},
             updated_at = now()
       WHERE id = ${order.id} AND status = ${order.status}
      RETURNING id
    `;
    changed += rows.length;
  }

  return { checked: open.length, changed };
}

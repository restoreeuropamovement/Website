import { after } from "next/server";

import { recordAudit } from "@/lib/admin/audit";
import { sendOrderConfirmation } from "@/lib/shop/confirmation";
import { submitOrder } from "@/lib/shop/fulfilment";
import {
  confirmPayment,
  discardUnstartedOrder,
  expireOrder,
  staleCheckouts,
  type PaymentVerdict,
} from "@/lib/shop/orders";
import { retrieveCheckoutSession } from "@/lib/shop/stripe";

/**
 * Confirms a payment against Stripe and, if it holds, sends the order on.
 *
 * Two callers reach this, and both may run for the same order: the webhook,
 * and the order page a customer lands on when Stripe sends them back — which
 * can happen before the webhook has been delivered, or when it never is.
 * Whichever marks the order paid first wins; the other finds it done. The
 * session is always read back from Stripe's API rather than taken from the
 * caller, so neither path trusts anything but Stripe's own record.
 */
export async function settle(sessionId: string): Promise<PaymentVerdict> {
  const session = await retrieveCheckoutSession(sessionId);
  const verdict = await confirmPayment(session);

  if (verdict.kind === "paid") {
    await recordAudit({
      action: "shop.order.paid",
      outcome: "success",
      actorLabel: "stripe",
      detail: { order: verdict.orderId, total: session.amount_total, livemode: session.livemode },
    });
    /* After the response, so neither Stripe nor the customer waits on the
       printer. The nightly run picks up any order this does not reach. */
    after(() => submitOrder(verdict.orderId).then(() => undefined));
    after(() => sendOrderConfirmation(session, verdict.orderId));
  }

  if (verdict.kind === "mismatch") {
    await recordAudit({
      action: "shop.order.paid",
      outcome: "failure",
      actorLabel: "stripe",
      detail: { order: verdict.orderId, reason: verdict.reason },
    });
  }

  return verdict;
}

/**
 * The net under the webhook: orders still waiting on a payment page that
 * Stripe has long since settled.
 *
 * Without it, one missed delivery — an endpoint misconfigured for an
 * afternoon, a secret rotated in the wrong order — and a customer who closes
 * the tab instead of returning would leave a paid order sitting in `checkout`
 * for ever, unsent and invisible. So the nightly run asks Stripe about every
 * order still in `checkout` after two hours (a session lasts one): paid ones
 * are confirmed exactly as the webhook would, expired ones lapse, and ones
 * whose page never opened are removed.
 *
 * Confirmation here does not send the order itself; the queue run that
 * follows it in the same task does.
 */
export async function reconcileCheckouts(limit = 25): Promise<{ checked: number; paid: number; expired: number }> {
  let paid = 0;
  let expired = 0;
  const stale = await staleCheckouts(limit);

  for (const order of stale) {
    if (!order.sessionId) {
      await discardUnstartedOrder(order.id);
      continue;
    }
    const session = await retrieveCheckoutSession(order.sessionId);
    const verdict = await confirmPayment(session);
    if (verdict.kind === "paid") {
      paid += 1;
      await recordAudit({
        action: "shop.order.paid",
        outcome: "success",
        actorLabel: "stripe reconciliation",
        detail: { order: verdict.orderId, total: session.amount_total, livemode: session.livemode },
      });
      await sendOrderConfirmation(session, verdict.orderId);
    } else if (verdict.kind === "not-paid" && session.status === "expired") {
      if (await expireOrder(order.sessionId)) expired += 1;
    }
  }

  return { checked: stale.length, paid, expired };
}

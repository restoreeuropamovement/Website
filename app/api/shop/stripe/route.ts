import { NextResponse } from "next/server";

import { recordAudit } from "@/lib/admin/audit";
import { shopMode, stripeWebhookSecret } from "@/lib/shop/config";
import { expireOrder } from "@/lib/shop/orders";
import { settle } from "@/lib/shop/payments";
import { isCheckoutSessionId, verifyStripeSignature } from "@/lib/shop/stripe";

/**
 * Stripe's word that something happened to a payment.
 *
 * Four events matter, all about Checkout Sessions:
 *
 *   checkout.session.completed               paid now, or (bank methods) later
 *   checkout.session.async_payment_succeeded the later payment arrived
 *   checkout.session.async_payment_failed    it did not; nothing is owed
 *   checkout.session.expired                 abandoned; nothing is owed
 *
 * **The body is believed only as far as its signature.** A verified event says
 * which session to look at; what the session actually says — paid or not, how
 * much, for which order — is read back from Stripe's API by `confirmPayment`,
 * which is the only code that may mark an order paid. An event that arrives
 * twice, late, or out of order therefore changes nothing it should not:
 * every transition is conditional on the state before it.
 *
 * Answers 2xx for anything it has dealt with or chosen to ignore, and 5xx
 * only when it could not do its job — the database was down — because a
 * 5xx is what makes Stripe deliver the event again, for up to three days.
 */
export async function POST(request: Request): Promise<NextResponse> {
  if (shopMode() === "off") return NextResponse.json({ error: "The shop is closed." }, { status: 404 });

  let secret: string;
  try {
    secret = stripeWebhookSecret();
  } catch {
    return NextResponse.json({ error: "STRIPE_WEBHOOK_SECRET is not set." }, { status: 503 });
  }

  /* The raw text, exactly as sent: the signature is over these bytes. */
  const payload = await request.text();
  if (!(await verifyStripeSignature(payload, request.headers.get("stripe-signature"), secret))) {
    return NextResponse.json({ error: "Signature did not verify." }, { status: 400 });
  }

  let event: { type?: string; livemode?: boolean; data?: { object?: { id?: string } } };
  try {
    event = JSON.parse(payload);
  } catch {
    return NextResponse.json({ error: "Not JSON." }, { status: 400 });
  }

  const sessionId = event.data?.object?.id;
  if (!event.type?.startsWith("checkout.session.") || !sessionId || !isCheckoutSessionId(sessionId)) {
    return NextResponse.json({ ignored: true });
  }

  /*
   * A test event at a live deployment, or the reverse, means an endpoint has
   * been wired to the wrong mode. It is acknowledged — retrying would not make
   * it right — and recorded, and it touches nothing.
   */
  if (event.livemode !== (shopMode() === "live")) {
    await recordAudit({
      action: "shop.order.paid",
      outcome: "failure",
      actorLabel: "stripe webhook",
      detail: { reason: "event from the other Stripe mode", type: event.type },
    });
    return NextResponse.json({ ignored: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded":
        await settle(sessionId);
        break;
      case "checkout.session.async_payment_failed":
      case "checkout.session.expired": {
        const orderId = await expireOrder(sessionId);
        if (orderId) {
          await recordAudit({
            action: "shop.order.expired",
            outcome: "success",
            actorLabel: "stripe webhook",
            detail: { order: orderId, reason: event.type.slice("checkout.session.".length) },
          });
        }
        break;
      }
      default:
        return NextResponse.json({ ignored: true });
    }
  } catch (error) {
    console.error("[shop] webhook could not be processed", event.type, error);
    return NextResponse.json({ error: "Could not process the event." }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

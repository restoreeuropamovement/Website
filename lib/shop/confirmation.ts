import { getShop, needsCustomsDeclaration, type ShopCountryId, type ShopText } from "@/content/shop";
import { recordAudit } from "@/lib/admin/audit";
import { sendEmail } from "@/lib/email";
import { renderHtmlEmail } from "@/lib/email-html";
import { fill } from "@/lib/format";
import { DEFAULT_LOCALE, isLocale, localePath, type Locale } from "@/lib/i18n";
import { formatMoney } from "@/lib/shop/money";
import { orderById } from "@/lib/shop/orders";
import type { CheckoutSession } from "@/lib/shop/stripe";
import { routes, site, SITE_URL } from "@/lib/site";

/**
 * Tells the buyer their order went through.
 *
 * Sent once, from the moment an order becomes paid — `confirmPayment`
 * reports "paid" only to the caller that made the change, so the webhook,
 * the return page and the nightly reconciliation cannot each send one.
 *
 * The email address comes from the Stripe session already in hand and is
 * dropped when this returns, as the delivery address is. Nothing about the
 * buyer is written anywhere: the audit row records the order and whether the
 * message went, never to whom. The mail provider necessarily sees the
 * address it delivers to; that is the one disclosure, and /privacy names it.
 *
 * Best-effort. A failed confirmation must never undo or delay a paid order,
 * so nothing here throws.
 */
export async function sendOrderConfirmation(session: CheckoutSession, orderId: string): Promise<void> {
  try {
    const email = session.customer_details?.email;
    const order = await orderById(orderId);
    if (!email || !order) return;

    const tag = (session.locale ?? "").slice(0, 2);
    const locale: Locale = isLocale(tag) ? tag : DEFAULT_LOCALE;
    const { text } = await getShop(locale);

    const message = orderConfirmationMessage(text, locale, { ...order, sessionId: session.id });
    const result = await sendEmail({ to: email, ...message });

    await recordAudit({
      action: "shop.order.confirmation",
      outcome: result.ok ? "success" : "failure",
      actorLabel: "shop",
      detail: result.ok ? { order: order.id } : { order: order.id, reason: result.reason },
    });
  } catch (error) {
    console.error("[shop] order confirmation could not be sent", error instanceof Error ? error.message : "unknown");
  }
}

export interface ConfirmedOrder {
  readonly reference: string;
  readonly designTitle: string;
  readonly quantity: number;
  readonly country: ShopCountryId;
  readonly currency: "EUR";
  readonly itemsMinor: number;
  readonly shippingMinor: number;
  readonly totalMinor: number;
  readonly livemode: boolean;
  readonly sessionId: string;
}

/** The message itself, plain and laid out. Pure, so it can be checked without a database or a provider. */
export function orderConfirmationMessage(
  text: ShopText,
  locale: Locale,
  order: ConfirmedOrder,
): { subject: string; text: string; html: string } {
  const words = text.confirmation;
  const money = (minor: number) => formatMoney(minor, order.currency, locale);
  const country = new Intl.DisplayNames([locale], { type: "region" }).of(order.country) ?? order.country;
  const orderUrl = `${SITE_URL}${localePath(locale, `${routes.shop}/order`)}?session=${encodeURIComponent(order.sessionId)}`;
  const contact = `${SITE_URL}${localePath(locale, routes.contact)}`;

  const rows: [string, string][] = [
    [words.rows.reference, order.reference],
    [words.rows.design, order.designTitle],
    [words.rows.quantity, String(order.quantity)],
    [words.rows.destination, country],
    [words.rows.stickers, money(order.itemsMinor)],
    [words.rows.postage, money(order.shippingMinor)],
    [words.rows.total, money(order.totalMinor)],
  ];
  const width = Math.max(...rows.map(([label]) => label.length)) + 3;
  const table = rows.map(([label, value]) => `${label.padEnd(width)}${value}`).join("\n");

  const body = [
    words.intro,
    `${words.orderHeading}\n\n${table}`,
    `${words.nextHeading}\n\n${words.next}\n\n${orderUrl}`,
    needsCustomsDeclaration(order.country) ? words.customs : null,
    order.livemode ? null : words.test,
    fill(words.reply, { contact, reference: order.reference }),
  ]
    .filter((part): part is string => part !== null)
    .join("\n\n");

  const why = fill(words.why, { shop: `${SITE_URL}${localePath(locale, routes.shop)}` });
  const subject = fill(words.subject, { reference: order.reference });

  return {
    subject,
    text: `${body}\n\n--\n${site.formal}\n${SITE_URL}\n\n${why}`,
    html: renderHtmlEmail({ subject, body, signature: { name: site.formal, url: SITE_URL }, footer: [why] }),
  };
}

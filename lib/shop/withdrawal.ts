import { withdrawalAlert } from "@/content/emails";
import { getShop, type ShopText } from "@/content/shop";
import { mailNotifyAddress } from "@/lib/admin/env";
import { recordAudit } from "@/lib/admin/audit";
import { sendEmail } from "@/lib/email";
import { renderHtmlEmail } from "@/lib/email-html";
import { fill } from "@/lib/format";
import { localePath, localeTag, type Locale } from "@/lib/i18n";
import { orderByReference, recordWithdrawal } from "@/lib/shop/orders";
import { retrieveCheckoutSession } from "@/lib/shop/stripe";
import { routes, site, SITE_URL } from "@/lib/site";

/**
 * Withdrawing from a purchase, as EU consumer law has required shops to offer
 * online since 19 June 2026: the buyer gives a name, the order and an email
 * address, confirms, and is sent an acknowledgement with the moment it was
 * received.
 *
 * **What identifies the order is the pair, never one half.** The reference
 * alone is printed on an email a buyer might forward; the address alone is
 * the thing this shop exists not to keep. The withdrawal is recorded only
 * when the address typed matches the one Stripe holds for that order, read
 * from Stripe for this request as the delivery address is. Neither the name
 * nor the address is stored: the order gains a timestamp, the audit log an
 * order id or "no match", and the acknowledgement goes to the address that
 * paid.
 *
 * **The answer does not depend on the match.** The page says the same thing
 * either way, and only the buyer's own inbox learns the outcome. Otherwise a
 * reference copied from somebody's screenshot would let a stranger test which
 * email address bought it.
 */

/** A reference as `newReference` writes it: RE- and seven characters from its alphabet. */
const REFERENCE = /^RE-[2-9A-HJKMNP-Z]{7}$/;

export function normaliseReference(value: string): string {
  const compact = value.trim().toUpperCase().replace(/\s+/g, "");
  return compact.startsWith("RE-") ? compact : compact.startsWith("RE") ? `RE-${compact.slice(2)}` : `RE-${compact}`;
}

export function isOrderReference(value: string): boolean {
  return REFERENCE.test(value);
}

export interface WithdrawalRequest {
  readonly name: string;
  readonly reference: string;
  readonly email: string;
  readonly locale: Locale;
}

/** Records the withdrawal if the details match a paid order, and writes to the buyer. Never says which. */
export async function withdraw(request: WithdrawalRequest, ipHash: string | null): Promise<void> {
  const order = await orderByReference(request.reference);
  const session = order?.checkoutSessionId ? await retrieveCheckoutSession(order.checkoutSessionId) : null;
  const paidWith = session?.customer_details?.email?.trim().toLowerCase();

  if (!order || !paidWith || paidWith !== request.email.trim().toLowerCase()) {
    await recordAudit({ action: "shop.order.withdrawal", outcome: "failure", actorLabel: "public shop", detail: { reason: "no match" }, ipHash });
    return;
  }

  const recorded = await recordWithdrawal(order.id);
  const when = recorded ?? order.withdrawnAt;
  if (!when) {
    await recordAudit({ action: "shop.order.withdrawal", outcome: "failure", actorLabel: "public shop", detail: { order: order.id, reason: "not withdrawable" }, ipHash });
    return;
  }

  const { text } = await getShop(request.locale);
  const sent = await sendEmail({ to: paidWith, ...withdrawalMessage(text, request.locale, { reference: order.reference, name: request.name, when }) });

  await recordAudit({
    action: "shop.order.withdrawal",
    outcome: "success",
    actorLabel: "public shop",
    detail: { order: order.id, repeat: recorded === null, acknowledged: sent.ok },
    ipHash,
  });

  const notify = mailNotifyAddress();
  if (recorded && notify) await sendEmail({ to: notify, ...withdrawalAlert() });
}

/** The acknowledgement, plain and laid out. Pure, so it can be checked without a database or a provider. */
export function withdrawalMessage(
  text: ShopText,
  locale: Locale,
  details: { readonly reference: string; readonly name: string; readonly when: Date },
): { subject: string; text: string; html: string } {
  const words = text.withdrawal.acknowledgement;
  const when = new Intl.DateTimeFormat(localeTag(locale), {
    dateStyle: "long",
    timeStyle: "short",
    hourCycle: "h23",
    timeZone: "Europe/Vienna",
  }).format(details.when);
  const contact = `${SITE_URL}${localePath(locale, routes.contact)}`;

  const body = [
    fill(words.intro, { reference: details.reference, when }),
    fill(words.name, { name: details.name }),
    `${words.nextHeading}\n\n${words.notPosted}`,
    fill(words.returns, { contact }),
    words.refund,
  ].join("\n\n");

  const why = fill(words.why, { shop: `${SITE_URL}${localePath(locale, routes.shop)}` });
  const subject = fill(words.subject, { reference: details.reference });

  return {
    subject,
    text: `${body}\n\n--\n${site.formal}\n${SITE_URL}\n\n${why}`,
    html: renderHtmlEmail({ subject, body, signature: { name: site.formal, url: SITE_URL }, footer: [why] }),
  };
}

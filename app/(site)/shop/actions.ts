"use server";

import { redirect } from "next/navigation";

import { getShop, preorder } from "@/content/shop";
import { recordAudit } from "@/lib/admin/audit";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import { plural } from "@/lib/format";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { configuredPrintProvider, shopMode, shopReadiness } from "@/lib/shop/config";
import { designForOrder } from "@/lib/shop/designs";
import { attachCheckoutSession, createOrder, discardUnstartedOrder } from "@/lib/shop/orders";
import { priceBook, quote } from "@/lib/shop/price-book";
import { createCheckoutSession } from "@/lib/shop/stripe";
import { routes, SITE_URL } from "@/lib/site";
import type { CheckoutErrorCode, CheckoutState } from "./state";

/**
 * Starting a purchase: the fifth server action on the public site.
 *
 * `AGENTS.md` allows four and asks for the reasoning before a fifth, so here
 * it is. This one is different in kind from the other four: **nobody types
 * anything into it.** It takes three values chosen from closed lists — a
 * design, a quantity, a country — checks each against the list, recomputes
 * the price from the price book, records an order with no personal data in
 * it, and sends the browser to Stripe's own page, which is where a name and
 * an address are entered and where they stay. So of the four properties the
 * other actions have, two apply as they do there (validated on the server,
 * rate limited per connection with a site-wide ceiling), one does not arise
 * (there is nothing to encrypt, because nothing personal reaches this code),
 * and the audit row carries what any of them carries: the choice, never the
 * chooser.
 *
 * **It is not an oracle.** The answer depends on nothing already stored about
 * anybody, so it cannot be used to learn whether a person has bought before.
 *
 * **The browser's arithmetic is never used.** The order form shows a running
 * total computed from the same price book; the amount Stripe is asked to
 * charge is computed again here from the three choices, and the form posts
 * no amount at all.
 */

/** Generous for somebody changing their mind at the payment page; useless for a script. */
const RATE_LIMIT = 10;
const RATE_WINDOW_SECONDS = 60 * 60;
/** Site-wide: far above what a small shop sees, far below what would flood Stripe or the table. */
const GLOBAL_LIMIT = 300;

export async function startCheckout(_state: CheckoutState, form: FormData): Promise<CheckoutState> {
  let destination: string;
  try {
    const result = await prepareCheckout(form);
    if (typeof result !== "string") return result;
    destination = result;
  } catch (error) {
    console.error("[shop] checkout could not be started", error);
    return { status: "unavailable", errors: [] };
  }
  /* Outside the `try`: `redirect` works by throwing, and the catch above would
     turn a successful checkout into an apology. */
  redirect(destination);
}

async function prepareCheckout(form: FormData): Promise<CheckoutState | string> {
  const readiness = shopReadiness();
  const provider = configuredPrintProvider();
  if (!readiness.open || !provider) return { status: "closed", errors: [] };

  const read = (name: string) => String(form.get(name) ?? "").trim();
  const localeValue = read("locale");
  const locale: Locale = isLocale(localeValue) ? localeValue : "en";

  const errors: CheckoutErrorCode[] = [];
  const slug = read("design");
  const quantity = Number(read("quantity"));
  const country = read("country");

  const design = slug && slug.length <= 120 ? await designForOrder({ slug }) : null;
  if (!design || !design.active) errors.push("design");

  const priced = quote(priceBook, quantity, country);
  if (!priced.ok) errors.push(priced.reason);
  if (errors.length > 0 || !design || !priced.ok) return { status: "invalid", errors };

  const { ipHash } = await clientContext();
  const limit = await consumeRateLimit(`shop:${ipHash ?? "unknown"}`, RATE_LIMIT, RATE_WINDOW_SECONDS);
  if (!limit.allowed) return { status: "throttled", errors: [] };
  const global = await consumeRateLimit("shop:all", GLOBAL_LIMIT, RATE_WINDOW_SECONDS);
  if (!global.allowed) return { status: "busy", errors: [] };

  const livemode = shopMode() === "live";
  const order = await createOrder({ designId: design.id, quote: priced, provider: provider.id, livemode });

  const { text } = await getShop(locale);
  const shopUrl = `${SITE_URL}${localePath(locale, routes.shop)}`;
  let session: { id: string; url: string };
  try {
    session = await createCheckoutSession({
      orderId: order.id,
      reference: order.reference,
      itemName: plural(locale, priced.quantity, text.item, { design: design.title }),
      itemsMinor: priced.itemsMinor,
      shippingMinor: priced.shippingMinor,
      shippingLabel: text.shippingLabel,
      addressNote: text.addressNote,
      submitNote: preorder ? text.form.preorder : undefined,
      currency: priced.currency.toLowerCase(),
      country: priced.country,
      locale,
      /* `{CHECKOUT_SESSION_ID}` is filled in by Stripe, and must reach Stripe
         with its braces intact — which is why it is appended, not encoded. */
      successUrl: `${SITE_URL}${localePath(locale, `${routes.shop}/order`)}?session={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${shopUrl}?design=${encodeURIComponent(design.slug)}&quantity=${priced.quantity}&country=${priced.country}`,
    });
  } catch (error) {
    await discardUnstartedOrder(order.id);
    throw error;
  }
  await attachCheckoutSession(order.id, session.id);

  await recordAudit({
    action: "shop.checkout",
    outcome: "success",
    actorLabel: "public shop",
    detail: {
      order: order.id,
      design: design.slug,
      quantity: priced.quantity,
      country: priced.country,
      total: priced.totalMinor,
      livemode,
    },
    ipHash,
  });

  return session.url;
}

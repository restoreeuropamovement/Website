import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { getShop, isShopCountry, type ShopCountryId, type ShopEdition } from "@/content/shop";
import type { Locale } from "@/lib/i18n";
import { shopReadiness, type ShopMode } from "@/lib/shop/config";
import { activeDesigns, type ShopDesign } from "@/lib/shop/designs";
import { orderBySession, orderTracking, type OrderView } from "@/lib/shop/orders";
import { settle } from "@/lib/shop/payments";
import { offeredCountries, priceBook } from "@/lib/shop/price-book";
import type { Tracking } from "@/lib/shop/providers";
import { isCheckoutSessionId } from "@/lib/shop/stripe";

/**
 * What both `/shop` routes — the English one and the prefixed ones — need,
 * gathered once so the two pages cannot drift apart.
 *
 * `SHOP_MODE` unset is a 404, not a closed sign: an unlaunched shop is not a
 * page, and an address that answered with "closed" would be an address worth
 * linking to. Set but misconfigured is a page saying the shop is closed,
 * because by then somebody may have been sent the link.
 */
export interface ShopPageData {
  readonly edition: ShopEdition;
  readonly mode: ShopMode;
  readonly open: boolean;
  readonly designs: readonly ShopDesign[] | null;
  /** The country the visitor seems to be in, when the shop delivers there; the form's starting destination. */
  readonly visitorCountry: ShopCountryId | null;
}

export async function loadShopPage(locale: Locale): Promise<ShopPageData> {
  const readiness = shopReadiness();
  if (readiness.mode === "off") notFound();

  return {
    edition: await getShop(locale),
    mode: readiness.mode,
    open: readiness.open,
    designs: readiness.open ? await activeDesigns() : [],
    visitorCountry: await visitorCountry(),
  };
}

export const shopCountries = () => offeredCountries(priceBook);

/**
 * The country Vercel's edge places this request in, so the total, postage
 * included, is on the page before anybody touches the form.
 *
 * A suggestion, not a fact: the select starts there and the customer changes
 * it, and the price is computed from whatever is finally posted. It is read
 * from the header for this one render and kept nowhere — no cookie, no log,
 * no row — and absent locally, where the form simply starts empty.
 */
async function visitorCountry(): Promise<ShopCountryId | null> {
  const country = (await headers()).get("x-vercel-ip-country")?.toUpperCase() ?? "";
  return isShopCountry(country) && offeredCountries(priceBook).includes(country) ? country : null;
}

/**
 * One order, for the page the customer is sent back to.
 *
 * If the order is still waiting for payment, the session is read from Stripe
 * and settled here rather than waiting for the webhook — a customer looking
 * at "waiting for confirmation" after paying is a customer about to pay
 * again, and a webhook endpoint misconfigured on launch day would otherwise
 * leave every order there. `settle` reads Stripe's own record, so arriving at
 * this address proves nothing by itself.
 */
export async function loadOrderPage(
  locale: Locale,
  session: string | string[] | undefined,
): Promise<{ edition: ShopEdition; order: OrderView | null; tracking: Tracking | null }> {
  const readiness = shopReadiness();
  if (readiness.mode === "off") notFound();

  const edition = await getShop(locale);
  if (typeof session !== "string" || !isCheckoutSessionId(session)) {
    return { edition, order: null, tracking: null };
  }

  let order = await orderBySession(session);
  if (order?.status === "checkout") {
    try {
      await settle(session);
      order = await orderBySession(session);
    } catch (error) {
      console.error("[shop] could not settle on return", error);
    }
  }

  const tracking = order && ["shipped", "delivered"].includes(order.status) ? await orderTracking(order.id) : null;
  return { edition, order, tracking };
}

/**
 * Kept out of search results until it is live. Test mode is for the people
 * testing it, and a search result for a page that says "use a test card" is
 * one the movement would have to explain.
 */
export function shopRobots(): Metadata["robots"] {
  return shopReadiness().mode === "live" ? undefined : { index: false, follow: false };
}

import {
  isShopCountry,
  isShopQuantity,
  shippingZoneFor,
  shippingZoneIds,
  shopCountryIds,
  shopQuantities,
  type ShippingZoneId,
  type ShopCountryId,
  type ShopQuantity,
} from "@/content/shop/structure";
import { addMinor, assertMinor, type ShopCurrency } from "@/lib/shop/money";

/**
 * What the shop charges.
 *
 * One table, read by the browser to show a running total and by the server to
 * decide what Stripe is asked to charge. **The server never takes a price from
 * the browser**: the order form posts a design, a quantity and a country, and
 * the amount is recomputed here from those three. The browser's copy exists so
 * the customer sees the total before they commit, and agreeing with it is the
 * server's job, not the other way round.
 *
 * Every figure is a consumer price in whole cents — what the customer pays,
 * postage included, VAT included if any is owed. Whether any is owed depends
 * on who the seller turns out to be, which is one of the conditions in
 * `lib/shop/launch.ts`, and the figures have to be revisited when it is
 * settled.
 *
 * `status` is what stops a guess being charged. A provisional book can be
 * used with Stripe's test keys, so the whole flow can be exercised end to
 * end; `SHOP_MODE="live"` is refused until the book in use is `approved`,
 * which should mean: the bulk print price, the envelopes and the postage all
 * checked against what was actually paid, and the margin worked out again.
 */
export interface PriceBook {
  readonly id: string;
  readonly status: "provisional" | "approved";
  readonly currency: ShopCurrency;
  /** The stickers and their envelope, per quantity. */
  readonly items: Readonly<Record<ShopQuantity, number>>;
  /**
   * Postage, per zone and quantity. `null` is a quantity that is not offered
   * to that zone — the order form leaves it out rather than quoting something
   * nobody has worked out how to send.
   */
  readonly shipping: Readonly<Record<ShippingZoneId, Readonly<Record<ShopQuantity, number | null>>>>;
}

/*
 * PROVISIONAL. Worked out, not paid.
 *
 * The model is the one chosen on 14 November 2026: stickers printed in one
 * bulk run, held in Austria, and packed and posted by hand by the people with
 * dispatch accounts, who are not paid for it. docs/sticker-shop-feasibility.md,
 * section 0, lists every input and its source. In short:
 *
 *   stickers   2.9 ct each (a thousand for about €29, Onlineprinters' list price)
 *   envelope   10 ct for the two small sizes, 30 ct for a board-backed B4
 *   postage    Austrian Post, verified: inside Austria Brief S €1.00, Brief M
 *              €1.55, Päckchen S €3.10; to the rest of the EU, Economy,
 *              Brief S €1.25, Brief M €2.00, Brief L €6.70. VAT-exempt.
 *   card fee   Stripe, 1.5 % + 25 ct
 *   margin     about 5 %, and never under 50 ct an order, so that one
 *              lost letter or card dispute does not cost more than a month's
 *              orders earn
 *
 * `shipping` is the postage rounded up to the next ten cents, sometimes a
 * little more where the margin needed it; `items` is the rest.
 */
export const priceBook: PriceBook = {
  id: "2026-11-austria-provisional",
  status: "provisional",
  currency: "EUR",
  items: {
    10: 120,
    25: 160,
    50: 260,
    100: 410,
    250: 860,
    500: 1640,
    1000: 3190,
  },
  shipping: {
    domestic: { 10: 100, 25: 160, 50: 310, 100: 310, 250: 310, 500: 310, 1000: 310 },
    eu: { 10: 130, 25: 210, 50: 680, 100: 680, 250: 680, 500: 680, 1000: 680 },
  },
};

export type Quote =
  | {
      readonly ok: true;
      readonly quantity: ShopQuantity;
      readonly country: ShopCountryId;
      readonly zone: ShippingZoneId;
      readonly currency: ShopCurrency;
      readonly itemsMinor: number;
      readonly shippingMinor: number;
      readonly totalMinor: number;
      readonly priceBook: string;
    }
  | { readonly ok: false; readonly reason: "quantity" | "country" | "not-offered" };

/**
 * The price of one order.
 *
 * Takes plain values because its server caller is handed strings off a form
 * and must not have to trust them; the narrowing happens here, once.
 */
export function quote(book: PriceBook, quantity: number, country: string): Quote {
  if (!isShopQuantity(quantity)) return { ok: false, reason: "quantity" };
  if (!isShopCountry(country)) return { ok: false, reason: "country" };

  const zone = shippingZoneFor(country);
  const shippingMinor = book.shipping[zone][quantity];
  if (shippingMinor === null) return { ok: false, reason: "not-offered" };

  const itemsMinor = assertMinor(book.items[quantity], `items for ${quantity}`);

  return {
    ok: true,
    quantity,
    country,
    zone,
    currency: book.currency,
    itemsMinor,
    shippingMinor: assertMinor(shippingMinor, `postage to ${country}`),
    totalMinor: addMinor(itemsMinor, shippingMinor),
    priceBook: book.id,
  };
}

/** Destinations with postage for at least one quantity, in list order. */
export function offeredCountries(book: PriceBook): readonly ShopCountryId[] {
  return shopCountryIds.filter((country) =>
    shopQuantities.some((quantity) => book.shipping[shippingZoneFor(country)][quantity] !== null),
  );
}

/**
 * Whether every figure is a whole, non-negative number of cents.
 *
 * Run by `npm run check` through `scripts/check-shop.ts`, because a typo in
 * this table — a decimal point, a negative, a missing entry — would otherwise
 * be found by a customer.
 */
export function priceBookProblems(book: PriceBook): readonly string[] {
  const problems: string[] = [];
  const valid = (value: number) => Number.isSafeInteger(value) && value >= 0;

  for (const quantity of shopQuantities) {
    if (!valid(book.items[quantity])) problems.push(`items[${quantity}] is not a whole number of cents`);
    for (const zone of shippingZoneIds) {
      const value = book.shipping[zone][quantity];
      if (value !== null && !valid(value)) {
        problems.push(`shipping.${zone}[${quantity}] is not a whole number of cents`);
      }
    }
  }
  return problems;
}

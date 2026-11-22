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
 * section 0, lists every input and its source.
 *
 * `shipping` is exactly what Austrian Post charges for the format the packing
 * list puts that quantity in (`lib/shop/packing.ts`), verified 15 November
 * 2026 and VAT-exempt: inside Austria Brief S €1.00, Brief M €1.55, Päckchen
 * S €3.10; to the rest of Europe, Economy, Brief S €1.25, Brief M €2.00,
 * Brief L €6.70. Nothing is earned on postage, so the line labelled postage
 * is postage.
 *
 * `items` is a sale price, set on 22 November 2026 at €12 for a hundred,
 * down from €15 because €21.70 with postage abroad was too much. The small
 * packs cost visibly more per sticker, and each larger pack a little less
 * than the one before it (12, 11.2, 10, 9.5 ct), so a bigger order is never
 * the worse buy. The profit is on purpose: it goes back into the movement.
 * Against stickers at 7.5 ct each (about €75 per thousand, the movement's
 * own figure), envelopes at 10–30 ct and Stripe's 1.5 % + 25 ct, every
 * quantity leaves between about €3.66 and €17.88.
 */
export const priceBook: PriceBook = {
  id: "2026-11-austria-provisional-4",
  status: "provisional",
  currency: "EUR",
  items: {
    10: 490,
    25: 790,
    50: 990,
    100: 1200,
    250: 2790,
    500: 4990,
    1000: 9490,
  },
  shipping: {
    domestic: { 10: 155, 25: 155, 50: 310, 100: 310, 250: 310, 500: 310, 1000: 310 },
    europe: { 10: 200, 25: 200, 50: 670, 100: 670, 250: 670, 500: 670, 1000: 670 },
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

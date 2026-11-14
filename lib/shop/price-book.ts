import {
  isShopCountry,
  isShopQuantity,
  shippingBandFor,
  shopCountryIds,
  shopQuantities,
  type ShippingBandId,
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
 * delivery included, VAT included if any is owed. Whether any is owed depends
 * on who the seller turns out to be, which is one of the conditions in
 * `lib/shop/launch.ts`, and the figures have to be revisited when it is
 * settled.
 *
 * `status` is what stops a guess being charged. A provisional book can be
 * used with Stripe's test keys and the mock printer, so the whole flow can be
 * exercised end to end; `SHOP_MODE="live"` is refused until the book in use
 * is `approved`, which should mean: every figure checked against a written
 * quote from the printer actually wired up, for that quantity and that
 * destination, with the per-order margin worked out as in
 * docs/sticker-shop-feasibility.md.
 */
export interface PriceBook {
  readonly id: string;
  readonly status: "provisional" | "approved";
  readonly currency: ShopCurrency;
  /** The stickers themselves, per quantity. */
  readonly items: Readonly<Record<ShopQuantity, number>>;
  /**
   * Delivery, per destination and parcel size. `null` is a destination that
   * is not offered at that size — the order form leaves it out rather than
   * quoting something nobody has agreed to carry.
   */
  readonly shipping: Readonly<Record<ShopCountryId, Readonly<Record<ShippingBandId, number | null>>>>;
}

/*
 * PROVISIONAL. Not a supplier's quote, and not to be read as one.
 *
 * These are the prices docs/sticker-shop-feasibility.md arrives at for its
 * recommended model: stickers printed in bulk, held by a letter-fulfilment
 * house in Germany, and posted per order at Deutsche Post's own rates. Every
 * input is listed there with its source and whether it is verified or
 * assumed; the ones that move these figures most are the fulfilment fee, the
 * postage the house passes on, and the bulk print price. The aim is a margin
 * of about one and a half euros on the smallest orders and a few euros on
 * the largest, after Stripe's fee.
 *
 * `shipping` is postage and nothing else, rounded up to cover the dearest
 * format in each band. One rate serves the five EU destinations because the
 * cost of a goods consignment to them differs by cents. Switzerland is not
 * offered: Swiss price rules expect a shop that targets Swiss consumers to
 * show prices in francs, and this one prices in euros.
 */
export const priceBook: PriceBook = {
  id: "2026-11-provisional",
  status: "provisional",
  currency: "EUR",
  items: {
    10: 480,
    25: 540,
    50: 610,
    100: 810,
    250: 1310,
    500: 2130,
    1000: 3630,
  },
  shipping: {
    DE: { letter: 110, "large-letter": 180, parcel: 360 },
    AT: { letter: 420, "large-letter": 580, parcel: 700 },
    FR: { letter: 420, "large-letter": 580, parcel: 700 },
    NL: { letter: 420, "large-letter": 580, parcel: 700 },
    IT: { letter: 420, "large-letter": 580, parcel: 700 },
    ES: { letter: 420, "large-letter": 580, parcel: 700 },
    CH: { letter: null, "large-letter": null, parcel: null },
  },
};

export type Quote =
  | {
      readonly ok: true;
      readonly quantity: ShopQuantity;
      readonly country: ShopCountryId;
      readonly band: ShippingBandId;
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

  const band = shippingBandFor(quantity);
  const shippingMinor = book.shipping[country][band];
  if (shippingMinor === null) return { ok: false, reason: "not-offered" };

  const itemsMinor = assertMinor(book.items[quantity], `items for ${quantity}`);

  return {
    ok: true,
    quantity,
    country,
    band,
    currency: book.currency,
    itemsMinor,
    shippingMinor: assertMinor(shippingMinor, `shipping to ${country}`),
    totalMinor: addMinor(itemsMinor, shippingMinor),
    priceBook: book.id,
  };
}

/** Destinations with a delivery price for at least one quantity, in list order. */
export function offeredCountries(book: PriceBook): readonly ShopCountryId[] {
  return shopCountryIds.filter((country) =>
    shopQuantities.some((quantity) => book.shipping[country][shippingBandFor(quantity)] !== null),
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
  }
  for (const country of shopCountryIds) {
    for (const band of Object.keys(book.shipping[country]) as ShippingBandId[]) {
      const value = book.shipping[country][band];
      if (value !== null && !valid(value)) {
        problems.push(`shipping.${country}.${band} is not a whole number of cents`);
      }
    }
  }
  return problems;
}

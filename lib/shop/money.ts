import { localeTag, type Locale } from "@/lib/i18n";

/**
 * Money, as the shop handles it: integer minor units, always.
 *
 * A price is a whole number of cents from the moment it is written in the
 * price book to the moment Stripe charges it. Nothing here ever holds euros as
 * a fraction, because `0.1 + 0.2` is not `0.3` and a shop that rounds in the
 * wrong place charges somebody a cent they did not agree to. Division by a
 * hundred happens in exactly one place — `formatMoney`, for display — and its
 * result is a string that nothing does arithmetic with.
 */

export const SHOP_CURRENCIES = ["EUR"] as const;

export type ShopCurrency = (typeof SHOP_CURRENCIES)[number];

/** Throws unless `value` is a non-negative safe integer: a valid amount in minor units. */
export function assertMinor(value: number, label = "amount"): number {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new Error(`${label} must be a non-negative whole number of minor units, got ${value}`);
  }
  return value;
}

/** Sum of minor amounts, checked at every step. */
export function addMinor(...values: readonly number[]): number {
  return values.reduce((sum, value) => assertMinor(sum + assertMinor(value), "sum"), 0);
}

/**
 * An amount as a reader sees it, in their own conventions: `12,50 €` in
 * German, `€12.50` in English.
 */
export function formatMoney(minor: number, currency: ShopCurrency, locale: Locale): string {
  return new Intl.NumberFormat(localeTag(locale), {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(assertMinor(minor) / 100);
}

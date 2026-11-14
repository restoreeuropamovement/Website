/**
 * The sticker shop: everything about it that is not words.
 *
 * Ids, quantities and destinations, here rather than in a language file for
 * the reason every `structure.ts` gives: these values travel in form fields,
 * are compared by the server, are written to `shop_order` and are sent to
 * Stripe and to a printer. A translator who "improved" one would change what
 * the shop sells, in one language only, and nothing would fail.
 */

/**
 * Where the shop delivers, as ISO 3166-1 alpha-2 codes in the upper case
 * Stripe and the printers both expect.
 *
 * The list is the research brief's, not a claim that every printer serves all
 * of them: a destination the price book has no shipping figure for is not
 * offered, whatever this list says. Switzerland is here and is the one that
 * most often will not be — it is outside the EU customs union, so a parcel
 * from a German printer is an export with a declaration and import VAT, and
 * docs/sticker-shop-feasibility.md treats it separately for that reason.
 *
 * Country names are not written anywhere. `Intl.DisplayNames` gives every one
 * of them in every language the site speaks, which is one list fewer for a
 * translator to keep in step.
 */
export const shopCountryIds = ["DE", "AT", "FR", "NL", "IT", "ES", "CH"] as const;

export type ShopCountryId = (typeof shopCountryIds)[number];

export function isShopCountry(value: string): value is ShopCountryId {
  return (shopCountryIds as readonly string[]).includes(value);
}

/**
 * The quantities a customer can choose.
 *
 * A closed list rather than a number field. Online printers price in steps —
 * a run of 73 costs what a run of 100 does, when it is offered at all — so a
 * free quantity would either be rounded up silently, which charges for
 * stickers nobody receives, or priced by a rule the printer does not use.
 */
export const shopQuantities = [10, 25, 50, 100, 250, 500, 1000] as const;

export type ShopQuantity = (typeof shopQuantities)[number];

export function isShopQuantity(value: number): value is ShopQuantity {
  return (shopQuantities as readonly number[]).includes(value);
}

/**
 * What a parcel of each size is, for postage.
 *
 * An 8 × 8 cm sticker on 80 g/m² paper with its backing weighs about a gram
 * and is about 0.14 mm thick, so the steps follow the postal formats rather
 * than the price steps. Within Germany, twenty-five and an envelope fit a
 * Kompaktbrief (50 g, 1 cm), up to two hundred and fifty laid side by side a
 * Großbrief (500 g, 2 cm), and the two largest quantities need a format that
 * takes up to two kilograms. docs/sticker-shop-feasibility.md, "Postage",
 * carries the weights, the formats and their sources.
 */
export const shippingBandIds = ["letter", "large-letter", "parcel"] as const;

export type ShippingBandId = (typeof shippingBandIds)[number];

export function shippingBandFor(quantity: ShopQuantity): ShippingBandId {
  if (quantity <= 25) return "letter";
  if (quantity <= 250) return "large-letter";
  return "parcel";
}

/**
 * The one sticker the shop sells, as the printer is asked for it.
 *
 * `finishedMm` is the size after cutting. The master file is larger by the
 * bleed on every side, and the difference is the margin the cutter is allowed
 * to miss by; a file drawn at exactly 80 mm shows a white hairline on any
 * sticker cut slightly off.
 *
 * The bleed is the printer's to set, not ours. 2 mm is Onlineprinters'
 * (an 84 mm file); WIRmachenDRUCK asks for 3 mm (86 mm). Change it to match
 * whichever printer the masters are made for — the admin upload form reads it.
 */
export const stickerFormat = {
  id: "square-80",
  finishedMm: 80,
  bleedMm: 2,
} as const;

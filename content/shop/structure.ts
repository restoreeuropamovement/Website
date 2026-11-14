/**
 * The sticker shop: everything about it that is not words.
 *
 * Ids, quantities and destinations, here rather than in a language file for
 * the reason every `structure.ts` gives: these values travel in form fields,
 * are compared by the server, are written to `shop_order` and are sent to
 * Stripe and to whoever posts the parcel. A translator who "improved" one
 * would change what the shop sells, in one language only, and nothing would
 * fail.
 */

/**
 * Where the stickers are posted from. Postage is priced from here, and an
 * order to this country is the domestic rate.
 */
export const dispatchCountry = "AT" as const;

/**
 * Where the shop delivers: the twenty-seven member states of the European
 * Union, as ISO 3166-1 alpha-2 codes in the upper case Stripe expects.
 *
 * The EU and not "Europe", for reasons that are each a piece of paperwork
 * nobody has taken on. A parcel to Switzerland, Norway or the United Kingdom
 * leaves the customs union: it needs a customs declaration on every
 * envelope, the buyer may meet import charges at the door, Swiss price rules
 * expect prices in francs, and the United Kingdom requires an overseas
 * seller of goods under £135 to register for its VAT. Any of them can be
 * added later by adding it here and a postage row in the price book.
 *
 * Country names are not written anywhere. `Intl.DisplayNames` gives every one
 * of them in every language the site speaks.
 */
export const shopCountryIds = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE",
  "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
] as const;

export type ShopCountryId = (typeof shopCountryIds)[number];

export function isShopCountry(value: string): value is ShopCountryId {
  return (shopCountryIds as readonly string[]).includes(value);
}

/**
 * Postage zones. Austrian Post charges one rate inside Austria and one rate
 * for every destination in "EU und Rest Europa", so two zones are all the
 * price book needs.
 */
export const shippingZoneIds = ["domestic", "eu"] as const;

export type ShippingZoneId = (typeof shippingZoneIds)[number];

export function shippingZoneFor(country: ShopCountryId): ShippingZoneId {
  return country === dispatchCountry ? "domestic" : "eu";
}

/**
 * The quantities a customer can choose.
 *
 * A closed list rather than a number field: postage steps by weight, packing
 * is done by hand from stacks, and a fixed set of quantities is a fixed set
 * of envelopes the people posting them can learn.
 */
export const shopQuantities = [10, 25, 50, 100, 250, 500, 1000] as const;

export type ShopQuantity = (typeof shopQuantities)[number];

export function isShopQuantity(value: number): value is ShopQuantity {
  return (shopQuantities as readonly number[]).includes(value);
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

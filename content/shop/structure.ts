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
 * The member states of the European Union, plus Monaco, which is inside the
 * EU's customs territory through France. An envelope to any of these needs no
 * customs declaration.
 */
export const customsUnionCountryIds = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE",
  "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "MC",
] as const;

/**
 * Where the shop delivers: every country with a wing of the movement
 * (`content/wings/structure.ts`), as ISO 3166-1 alpha-2 codes in the upper
 * case Stripe expects. England, Scotland, Wales and Northern Ireland are one
 * postal destination, `GB`.
 *
 * Russia is the one wing left out, and not by choice: Austrian Post accepts
 * only documents for Russia and refuses goods (post.at, "Länderinformationen",
 * read 15 November 2026). Add it back when that changes. `scripts/check-shop.ts`
 * fails if a wing is added without a decision here.
 *
 * Outside the EU's customs territory every envelope carries a CN22 customs
 * declaration (the packing list says so), and the customer may be asked for
 * import tax or a handling fee on delivery (the order form says so). The
 * United Kingdom also requires an overseas seller to register for UK VAT
 * before selling it goods under £135; that is a launch condition in
 * `lib/shop/launch.ts`, and the way to open without it is to remove `GB` here.
 *
 * Country names are not written anywhere. `Intl.DisplayNames` gives every one
 * of them in every language the site speaks.
 */
export const shopCountryIds = [
  ...customsUnionCountryIds,
  "AL", "AD", "BA", "GB", "IS", "XK", "LI", "MD", "ME", "MK", "NO", "SM", "RS", "CH", "UA",
] as const;

export type ShopCountryId = (typeof shopCountryIds)[number];

export function isShopCountry(value: string): value is ShopCountryId {
  return (shopCountryIds as readonly string[]).includes(value);
}

/** Whether an envelope to this country leaves the EU's customs territory. */
export function needsCustomsDeclaration(country: ShopCountryId): boolean {
  return !(customsUnionCountryIds as readonly string[]).includes(country);
}

/**
 * Postage zones. Austrian Post charges one rate inside Austria and one rate
 * for every destination in its "EU und Rest Europa" column, which holds every
 * country above, so two zones are all the price book needs.
 */
export const shippingZoneIds = ["domestic", "europe"] as const;

export type ShippingZoneId = (typeof shippingZoneIds)[number];

export function shippingZoneFor(country: ShopCountryId): ShippingZoneId {
  return country === dispatchCountry ? "domestic" : "europe";
}

/**
 * Whether the shop is taking pre-orders: selling before the stock is in
 * Austria, with a stated promise of when an order is posted (`preorder` in
 * the language files: within one month). EU law requires that promise before
 * the buyer pays, so while this is true it is on the shop page, on Stripe's
 * payment page, in the confirmation email and on the order page.
 *
 * Set on 22 November 2026, the day the first run of 2,500 was ordered. Set it
 * to `false` once the stock has arrived and every pre-order has been posted.
 */
export const preorder = true;

/**
 * How many stickers there are to sell: the print runs ordered so far, all
 * designs together. Every order that is paid, or whose payment page is still
 * open, counts against it, and once fewer than the smallest pack are left the
 * shop says it is sold out. Raise it in the same commit that records a new
 * run being ordered.
 *
 * 2,500: the first run, ordered 22 November 2026.
 */
export const stickerStock = 2500;

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
 * FLYERALARM's square indoor sticker: 98 × 98 mm, white 80 g/m²
 * self-adhesive paper ("Haftpapier"), printed 4/0 in CMYK, slit backing, no
 * finish. Chosen 22 November 2026; FLYERALARM prints the run.
 *
 * `finishedMm` is the size after cutting. The master file is larger by the
 * bleed on every side, and the difference is the margin the cutter is allowed
 * to miss by; a file drawn at exactly 98 mm shows a white hairline on any
 * sticker cut slightly off. `safetyMm` is how far from the file's edge
 * anything that must not be cut — text, the address, the imprint — has to
 * stay.
 *
 * Both are the printer's to set, not ours: FLYERALARM's sticker templates
 * ask for 1 mm of bleed on each side (a 100 mm file for a 98 mm sticker) and
 * keep text 3 mm in from the file's edge (its sticker data sheets, read
 * 22 November 2026). The admin upload form reads them.
 */
export const stickerFormat = {
  id: "square-98",
  finishedMm: 98,
  bleedMm: 1,
  safetyMm: 3,
} as const;

/**
 * Who makes the sticker, for the product-safety details the General Product
 * Safety Regulation requires on the listing: name, postal and electronic
 * address. Not words, so not in a language file. FLYERALARM's own imprint,
 * read 22 November 2026.
 */
export const stickerManufacturer = {
  name: "FLYERALARM GmbH",
  address: "Alfred-Nobel-Straße 18, 97080 Würzburg, Germany",
  email: "info@flyeralarm.de",
} as const;

/**
 * Who sells the stickers, as the operator gave it on 22 November 2026: the
 * trading name on the Stripe account, a sole trader in Austria. The postal
 * address is given on request rather than published, by the operator's
 * decision; see `terms` in `lib/shop/launch.ts`.
 */
export const shopSeller = {
  name: "Restore Europa Movement",
  email: "restoreeuropamovement@gmail.com",
  phone: "+43 650 5006955",
} as const;

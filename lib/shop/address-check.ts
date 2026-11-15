import type { ShopCountryId } from "@/content/shop/structure";
import type { StripeAddress } from "@/lib/shop/stripe";

/**
 * A plausibility check on a delivery address, run where the address is shown
 * to the people posting it.
 *
 * Stripe's page already refuses an incomplete address and suggests real ones
 * as the customer types, in the countries where it can. What it does not do
 * is notice a postcode with a digit missing or a street with no number, and a
 * letter sent on an untracked stamp to a mistyped address is simply lost. So
 * every address on the packing list is held against its country's postcode
 * format and a few obvious slips, and anything doubtful is flagged before the
 * envelope is addressed rather than after it comes back.
 *
 * Offline on purpose. Checking that an address exists means a paid lookup
 * service, and sending every buyer's address to it — the shop keeps no
 * customer record so that the list of who bought these stickers exists in
 * as few places as possible. A format check needs neither.
 *
 * It warns and never blocks: a real address can fail a heuristic (a farm with
 * no number, a new postcode), and the person holding the envelope decides.
 */

/**
 * Each country's postcode, after upper-casing and collapsing spaces. Formats
 * are the national post offices' own; optional prefixes ("LV-", "L-") are
 * accepted because people write them.
 */
const POSTCODE: Readonly<Record<ShopCountryId, RegExp>> = {
  AT: /^\d{4}$/,
  BE: /^\d{4}$/,
  BG: /^\d{4}$/,
  HR: /^\d{5}$/,
  CY: /^\d{4}$/,
  CZ: /^\d{3} ?\d{2}$/,
  DK: /^\d{4}$/,
  EE: /^\d{5}$/,
  FI: /^\d{5}$/,
  FR: /^\d{5}$/,
  DE: /^\d{5}$/,
  GR: /^\d{3} ?\d{2}$/,
  HU: /^\d{4}$/,
  IE: /^[AC-FHKNPRTV-Y]\d[\dW] ?[\dAC-FHKNPRTV-Y]{4}$/,
  IT: /^\d{5}$/,
  LV: /^(LV-?)?\d{4}$/,
  LT: /^(LT-?)?\d{5}$/,
  LU: /^(L-?)?\d{4}$/,
  MT: /^[A-Z]{3} ?\d{2,4}$/,
  NL: /^\d{4} ?[A-Z]{2}$/,
  PL: /^\d{2}-?\d{3}$/,
  PT: /^\d{4}-?\d{3}$/,
  RO: /^\d{6}$/,
  SK: /^\d{3} ?\d{2}$/,
  SI: /^(SI-?)?\d{4}$/,
  ES: /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/,
  SE: /^\d{3} ?\d{2}$/,
  MC: /^980\d{2}$/,
  AL: /^\d{4}$/,
  AD: /^(AD)? ?\d{3}$/,
  BA: /^\d{5}$/,
  GB: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/,
  IS: /^\d{3}$/,
  XK: /^\d{5}$/,
  LI: /^94\d{2}$/,
  MD: /^(MD-?)?\d{4}$/,
  ME: /^\d{5}$/,
  MK: /^\d{4}$/,
  NO: /^\d{4}$/,
  SM: /^4789\d$/,
  RS: /^\d{5}$/,
  CH: /^\d{4}$/,
  UA: /^\d{5}$/,
};

/** Where a house often has a name instead of a number, so a street line without a digit is normal. */
const HOUSE_NAMES_COMMON: ReadonlySet<ShopCountryId> = new Set(["GB", "IE"]);

const normalise = (value: string | null) => (value ?? "").trim().toUpperCase().replace(/\s+/g, " ");

/** Plain-English doubts about an address, for the packing list. Empty when nothing looks wrong. */
export function addressDoubts(country: ShopCountryId, address: StripeAddress): readonly string[] {
  const doubts: string[] = [];
  const postcode = normalise(address.postal_code);
  const street = (address.line1 ?? "").trim();
  const city = (address.city ?? "").trim();

  if (address.country && address.country !== country) {
    doubts.push(`The address is in ${address.country}, but the order was priced for ${country}.`);
  }

  if (!postcode) {
    if (country !== "IE") doubts.push("There is no postcode.");
  } else if (!POSTCODE[country].test(postcode)) {
    doubts.push(`The postcode "${address.postal_code?.trim()}" does not have the usual format for this country.`);
  }

  if (street.length < 4) doubts.push("The street line is very short.");
  else if (!/\d/.test(street) && !/\d/.test(address.line2 ?? "") && !HOUSE_NAMES_COMMON.has(country)) {
    doubts.push("There is no house number.");
  }

  if (city.length < 2) doubts.push("The town is missing or very short.");
  else if (/^\d+$/.test(city.replace(/\s/g, ""))) doubts.push("The town is a number — the postcode may be in its place.");

  return doubts;
}

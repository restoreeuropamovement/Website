/**
 * What has to be true before the shop may take a real payment.
 *
 * Every entry is a fact about the world rather than about this code, and
 * none of them can be checked from here — which is why they are written down
 * as constants instead of being inferred. `SHOP_MODE="live"` is refused while
 * any of them is `false` (see `shopReadiness` in `lib/shop/config.ts`), so
 * the only way to open the shop is a commit that flips one, and a commit is
 * reviewed, dated and attributable in a way an environment variable is not.
 *
 * Flip an entry only when the thing it describes is done, and say in the
 * commit message what made it true. docs/sticker-shop-feasibility.md explains
 * each of these at length, with sources; the descriptions below are what the
 * admin page shows beside an unticked box.
 */
export interface LaunchCondition {
  readonly done: boolean;
  readonly title: string;
  readonly detail: string;
}

export const launchChecklist = {
  seller: {
    done: false,
    title: "A seller exists",
    detail:
      "Selling goods needs somebody to sell them. The plan is an association (Verein) in Austria, where the stock is: it puts the association's name rather than a person's on the site and the stickers, and its board appears only in the association register. It needs an address where legal papers can be served, named representatives, a tax number and a bank account; the imprint, the withdrawal notice, the product-safety listing and Stripe's identity checks all require them. Until then the imprint names no publisher, and that gap may not be filled with anything plausible.",
  },
  stickerImprint: {
    done: false,
    title: "The printed sticker carries its imprint",
    detail:
      "Austrian media law requires every printed item to name its publisher and its printer, with the towns of publication and printing — not a street address (MedienG § 24(1)). Stickers posted into Germany are also distributed there, and German state press laws ask for names with addresses (Bavaria: BayPrG Art. 7). The artwork leaves the field blank for whoever puts a sticker up; once the association sells the stickers it is the publisher, so the bulk run is printed with the imprint, worded as an adviser confirms covers both.",
  },
  terms: {
    done: false,
    title: "Terms, withdrawal and delivery are published",
    detail:
      "Terms of sale; pre-contract information including the EU's harmonised warranty notice (Regulation 2025/1960, since 27 September 2026); the fourteen-day withdrawal notice and model form; the online withdrawal function required across the EU since 19 June 2026; delivery costs and times (letters from Austria, Economy abroad); and a lawyer's view of the payment button's wording on Stripe's page. Pre-designed stickers are not made to the buyer's specification, so the right of withdrawal applies.",
  },
  privacy: {
    done: false,
    title: "/privacy describes the shop, in all six languages",
    detail:
      "A purchase from a political movement can reveal a political opinion (GDPR Art. 9; CJEU C-21/23), so the legal basis is settled with an adviser first. The note says what Stripe collects, that the movement's name appears on card statements, that the people posting see a name and address for one envelope and keep nothing, that the buyer's email address is read from Stripe once to send the order confirmation and so passes through the mail provider (Resend), and that this site keeps no customer record of its own. Edited before the shop opens, not after.",
  },
  tax: {
    done: false,
    title: "Tax is settled",
    detail:
      "Registration with the Austrian tax office; whether the small-business exemption applies or VAT is charged; the prices carry a real profit (about €3.69 to €32.65 an order, see the price book), so the seller declares it as business income, and if the seller is an association, whether that sale needs a trade licence (Gewerbeberechtigung) or affects its tax position; tracking sales to other EU countries against the €10,000 threshold above which their VAT applies; and for the United Kingdom, which the shop delivers to, a UK VAT registration, because an overseas seller of goods under £135 must register and charge UK VAT from the first sale (gov.uk, 'VAT and overseas goods sold directly to customers in the UK'). If that is not wanted, remove GB from shopCountryIds instead. Prices are shown to consumers as total prices, with whatever tax wording applies.",
  },
  payments: {
    done: false,
    title: "Payments are set up in the seller's name",
    detail:
      "A Stripe account under the seller's true business type, describing the products as what they are; Klarna off (Klarna forbids political organisations, and checkout excludes it in code as well); fixed prices, never pay-what-you-want, which Stripe treats as fundraising; iDEAL | Wero only once a registration number can be shown, and TWINT only with prices in francs.",
  },
  supplier: {
    done: false,
    title: "Stock and dispatch are ready",
    detail:
      "The bulk run is printed with the imprint and is in Austria; the people posting have dispatch accounts (invited at /admin/security) with a passkey each; envelopes are bought; and one test order of each size has been packed, weighed against the formats on the packing list and posted, at home and to another EU country. The price book is approved from what that actually cost.",
  },
  productSafety: {
    done: false,
    title: "Product-safety details are on the listing",
    detail:
      "Under the General Product Safety Regulation whoever has a product made and sells it under their own name is its manufacturer: the shop names the manufacturer with a postal and an electronic address, identifies the product and states any warnings, and the movement keeps the technical documentation for ten years.",
  },
  packaging: {
    done: false,
    title: "Packaging obligations are resolved",
    detail:
      "Whoever posts goods to consumers puts the envelope on that country's market, and EU countries make the sender responsible for it under the EU Packaging Regulation and their own schemes — Austria's packaging ordinance at home, Germany's VerpackDG and its LUCID register for envelopes to Germany, and so on. Some have thresholds small senders fall under. An adviser settles which apply at this volume.",
  },
} as const satisfies Record<string, LaunchCondition>;

export type LaunchConditionId = keyof typeof launchChecklist;

export const launchConditionIds = Object.keys(launchChecklist) as LaunchConditionId[];

export function outstandingLaunchConditions(): readonly LaunchConditionId[] {
  return launchConditionIds.filter((id) => !launchChecklist[id].done);
}

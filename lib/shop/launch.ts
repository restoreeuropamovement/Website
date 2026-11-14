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
      "Selling goods needs somebody to sell them: a registered association, a company or a named person, with an address where legal papers can be served, named representatives, a tax number and a bank account. The imprint, the withdrawal notice, the product-safety listing and Stripe's identity checks all require it. The imprint names no publisher because the movement is not registered, and that gap may not be filled with anything plausible.",
  },
  stickerImprint: {
    done: false,
    title: "The printed sticker carries its imprint",
    detail:
      "German state press laws require every printed item distributed to the public to name its printer and its publisher, with name and address (Bavaria: BayPrG Art. 6 and 7); only commercial and household printing is exempt. The artwork leaves that field blank for whoever puts a sticker up. Once the movement sells the sticker itself it is the publisher, so the master files carry the imprint, or a lawyer has confirmed in writing that they need not.",
  },
  terms: {
    done: false,
    title: "Terms, withdrawal and delivery are published",
    detail:
      "Terms of sale; pre-contract information including the EU's harmonised warranty notice (Regulation 2025/1960, since 27 September 2026); the fourteen-day withdrawal notice and model form; the 'Vertrag widerrufen' withdrawal function required since 19 June 2026 (§ 356a BGB); delivery costs and times; and a lawyer's view of the payment button's wording on Stripe's page (§ 312j BGB). Pre-designed stickers are not made to the buyer's specification, so the right of withdrawal applies.",
  },
  privacy: {
    done: false,
    title: "/privacy describes the shop, in all six languages",
    detail:
      "A purchase from a political movement can reveal a political opinion (GDPR Art. 9; CJEU C-21/23), so the legal basis is settled with an adviser first, and a data-processing agreement is signed with whoever receives addresses. The note says what Stripe collects, that the movement's name appears on card statements, what the printer or fulfilment house receives and keeps, and that this site keeps no customer record of its own. Edited before the shop opens, not after.",
  },
  tax: {
    done: false,
    title: "Tax is settled",
    detail:
      "Registration with the tax office within a month of starting; whether the small-business exemption (§ 19 UStG) applies or VAT is charged; how VAT falls when someone else posts the goods, which needs an adviser; tracking against the EU's €10,000 and Switzerland's CHF 100,000 thresholds. Prices are shown to consumers as total prices, with whatever tax wording applies.",
  },
  payments: {
    done: false,
    title: "Payments are set up in the seller's name",
    detail:
      "A Stripe account under the seller's true business type, describing the products as what they are; Klarna off (Klarna forbids political organisations, and checkout excludes it in code as well); fixed prices, never pay-what-you-want, which Stripe treats as fundraising; iDEAL | Wero only once a registration number can be shown, and TWINT only with prices in francs.",
  },
  supplier: {
    done: false,
    title: "A printer or fulfilment house has agreed to this",
    detail:
      "Written agreement to political stickers from this seller; automated order intake (an API, or a documented file drop) that the adapter for it is written against and tested in a sandbox; neutral shipping to private addresses; and per-order prices for every quantity and destination offered, from which the price book is approved. For pre-printed stock, the first bulk run is printed with the imprint and delivered to the warehouse.",
  },
  productSafety: {
    done: false,
    title: "Product-safety details are on the listing",
    detail:
      "Under the General Product Safety Regulation whoever has a product made and sells it under their own name is its manufacturer: the shop names the manufacturer with a postal and an electronic address, identifies the product and states any warnings, and the movement keeps the technical documentation for ten years.",
  },
  packaging: {
    done: false,
    title: "Packaging registration is resolved",
    detail:
      "Since 12 August 2026 the EU Packaging Regulation and the German VerpackDG apply. A dropshipping seller must check that whoever packs is registered in LUCID, and becomes the obligated producer itself if the packaging bears its name. The provider's terms or an adviser settle which applies.",
  },
} as const satisfies Record<string, LaunchCondition>;

export type LaunchConditionId = keyof typeof launchChecklist;

export const launchConditionIds = Object.keys(launchChecklist) as LaunchConditionId[];

export function outstandingLaunchConditions(): readonly LaunchConditionId[] {
  return launchConditionIds.filter((id) => !launchChecklist[id].done);
}

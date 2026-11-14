import type { ShopCountryId, ShopQuantity } from "@/content/shop/structure";

/**
 * The seam between the shop and whoever prints or posts the stickers.
 *
 * Everything about a particular provider — its API, its product ids, how it
 * wants the artwork, how it reports a parcel leaving — lives behind this
 * interface, so changing provider is a new file in this directory and one
 * line in `index.ts`, not a rewrite of checkout, payment or the order table.
 * A printer that prints each order and a fulfilment house that posts stock
 * printed in advance both fit it; the second simply ignores `printUrl`.
 */

/** Where the parcel goes. Read from Stripe at the moment of submission; never stored here. */
export interface ShipTo {
  readonly name: string;
  readonly line1: string;
  readonly line2: string | null;
  readonly postalCode: string;
  readonly city: string;
  readonly state: string | null;
  readonly country: ShopCountryId;
}

export interface PrintJob {
  /**
   * Our order id. Sent as the printer's idempotency key or external
   * reference wherever the API has one, so that the same order sent twice is
   * recognised as one order by the printer as well as by us.
   */
  readonly orderId: string;
  /** The short reference the customer was shown, for the printer's paperwork. */
  readonly reference: string;
  readonly quantity: ShopQuantity;
  readonly design: {
    readonly slug: string;
    /** The print-ready master, at a stable address. */
    readonly printUrl: string;
    readonly printSha256: string;
    readonly printContentType: string;
    readonly finishedMm: number;
    readonly bleedMm: number;
  };
  readonly shipTo: ShipTo;
}

/**
 * What came of asking the printer to take a job.
 *
 * Four outcomes rather than success and failure, because the three ways of
 * failing call for three different responses and confusing them either loses
 * an order or prints it twice:
 *
 * - `rejected`: the printer answered and refused — a bad address, an
 *   unsupported option. Nothing was created. Sending it again unchanged
 *   would be refused again, so a person has to look.
 * - `unavailable`: the printer was not reached, or said plainly that it did
 *   nothing. Nothing was created and it is safe to try again later.
 * - `ambiguous`: the request may have been acted on — a timeout after the
 *   body was sent, a server error mid-way. Trying again is safe only if the
 *   printer de-duplicates on `orderId`; otherwise it is a person's call.
 *
 * `code` is a short, fixed string the admin page may show in the clear.
 * `message` is the printer's own wording and may quote an address, so it is
 * stored encrypted.
 */
export type SubmitOutcome =
  | { readonly kind: "accepted"; readonly providerOrderId: string }
  | { readonly kind: "rejected"; readonly code: string; readonly message: string }
  | { readonly kind: "unavailable"; readonly code: string; readonly message: string }
  | { readonly kind: "ambiguous"; readonly code: string; readonly message: string };

export interface Tracking {
  readonly carrier: string;
  readonly number: string;
  readonly url: string | null;
}

export type ProviderState = "accepted" | "in_production" | "shipped" | "delivered" | "cancelled";

export type StatusOutcome =
  | { readonly ok: true; readonly state: ProviderState; readonly tracking: Tracking | null }
  | { readonly ok: false; readonly code: string };

export interface PrintProvider {
  /** Stored in `shop_order.provider`. Never change one once orders carry it. */
  readonly id: string;
  readonly label: string;
  /**
   * Whether `submit` causes something to be printed and posted for money.
   * Test mode refuses any provider for which this is true, and live mode
   * refuses any for which it is false — a test card must never buy a real
   * print run, and a real payment must never go to a simulation.
   */
  readonly placesRealOrders: boolean;
  /** Whether the printer de-duplicates a repeated `submit` for the same `orderId`. */
  readonly idempotentSubmit: boolean;
  /** Whether this deployment has the credentials it needs. */
  configured(): boolean;
  submit(job: PrintJob): Promise<SubmitOutcome>;
  status(providerOrderId: string, submittedAt: Date): Promise<StatusOutcome>;
}

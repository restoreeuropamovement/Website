/**
 * What the checkout action answers when it does not send the customer to
 * Stripe. A successful checkout never returns: it redirects.
 */
export type CheckoutErrorCode = "design" | "quantity" | "country" | "not-offered";

export interface CheckoutState {
  readonly status: "idle" | "invalid" | "closed" | "throttled" | "busy" | "unavailable";
  readonly errors: readonly CheckoutErrorCode[];
}

export const CHECKOUT_INITIAL: CheckoutState = { status: "idle", errors: [] };

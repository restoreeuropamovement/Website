import type { PrintProvider, StatusOutcome, SubmitOutcome } from "@/lib/shop/providers/types";

/**
 * A printer that prints nothing.
 *
 * It accepts every job, invents an order id derived from ours — so sending the
 * same order twice yields the same id, as a printer with idempotency keys
 * would — and reports the parcel moving through production and the post on a
 * clock measured from submission. That is enough to drive every screen and
 * every state of the shop against Stripe's test mode without anyone being
 * charged for a sticker.
 *
 * `SHOP_MOCK_FAILURE` makes it fail in one of the three ways a real printer
 * can, so the retry and review paths can be exercised on purpose rather than
 * discovered in production:
 *
 *   SHOP_MOCK_FAILURE=unavailable   nothing created; the order is retried
 *   SHOP_MOCK_FAILURE=rejected      refused; the order goes to review
 *   SHOP_MOCK_FAILURE=ambiguous     maybe created; retried, as this mock de-duplicates
 *
 * It is a `simulation`, which is what lets test mode use it and what makes
 * live mode refuse it.
 */

const MINUTE = 60_000;

function failure(): SubmitOutcome | null {
  switch (process.env.SHOP_MOCK_FAILURE) {
    case "unavailable":
      return { kind: "unavailable", code: "mock-unavailable", message: "Simulated: the printer could not be reached." };
    case "rejected":
      return { kind: "rejected", code: "mock-rejected", message: "Simulated: the printer refused the job." };
    case "ambiguous":
      return { kind: "ambiguous", code: "mock-timeout", message: "Simulated: the request timed out after it was sent." };
    default:
      return null;
  }
}

export const mockProvider: PrintProvider = {
  id: "mock",
  label: "Mock printer (prints nothing)",
  kind: "simulation",
  idempotentSubmit: true,

  configured: () => true,

  async submit(job): Promise<SubmitOutcome> {
    const simulated = failure();
    if (simulated) return simulated;
    return { kind: "accepted", providerOrderId: `MOCK-${job.orderId.slice(0, 8).toUpperCase()}` };
  },

  async status(providerOrderId, submittedAt): Promise<StatusOutcome> {
    const elapsed = Date.now() - submittedAt.getTime();
    if (elapsed < 2 * MINUTE) return { ok: true, state: "accepted", tracking: null };
    if (elapsed < 5 * MINUTE) return { ok: true, state: "in_production", tracking: null };

    const tracking = {
      carrier: "Mock Post",
      number: `MOCK${providerOrderId.replace(/\W/g, "").slice(-8)}`,
      url: null,
    };
    if (elapsed < 15 * MINUTE) return { ok: true, state: "shipped", tracking };
    return { ok: true, state: "delivered", tracking };
  },
};

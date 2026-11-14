import type { PrintProvider, StatusOutcome, SubmitOutcome } from "@/lib/shop/providers/types";

/**
 * The movement's own dispatch: stickers printed in advance, held in Austria,
 * and packed and posted by the people with dispatch accounts.
 *
 * "Submitting" an order here means putting it on their packing list at
 * `/admin/dispatch`, which is a row in this database, so acceptance is
 * immediate and certain — there is no third party whose answer could be
 * lost, and the same order submitted twice gets the same id. What it does not
 * mean is that anything has been posted: an order stays `submitted` until a
 * person presses "Posted" on the packing list (`markPosted` in
 * `lib/shop/orders.ts`), and the customer's page says it is being packed
 * until then.
 *
 * `status` has nothing to report, because nobody outside this database knows
 * more than it does; the nightly sync leaves these orders alone.
 */
export const selfDispatchProvider: PrintProvider = {
  id: "self-dispatch",
  label: "Our own dispatch (packing list)",
  kind: "in-house",
  idempotentSubmit: true,

  configured: () => true,

  async submit(job): Promise<SubmitOutcome> {
    return { kind: "accepted", providerOrderId: `PACK-${job.reference}` };
  },

  async status(): Promise<StatusOutcome> {
    return { ok: false, code: "in-house" };
  },
};

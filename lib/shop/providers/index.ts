import { mockProvider } from "@/lib/shop/providers/mock";
import type { PrintProvider } from "@/lib/shop/providers/types";

export type { PrintJob, PrintProvider, ShipTo, SubmitOutcome, Tracking } from "@/lib/shop/providers/types";

/**
 * Everyone the shop can send an order to, by the id `SHOP_PRINT_PROVIDER`
 * names.
 *
 * Only the mock is here, and that is the state of the world rather than an
 * unfinished file. Several printers document an ordering API — Print.com,
 * FLYERALARM PRO, Printful, Printen.eu among them — but every one of them
 * issues credentials only to an approved business account, and the movement
 * cannot open one before it exists as a seller (see `launchChecklist.seller`).
 * An adapter written against an API nobody has credentials for would be a
 * guess at somebody else's interface that passes every test it was never run
 * against. docs/sticker-shop-feasibility.md compares them.
 *
 * "Provider" rather than "printer" in spirit: the report's recommended model
 * is a fulfilment house posting pre-printed stock, and it implements the same
 * interface — it receives the design, the quantity and the address, and has
 * no use for the print master.
 *
 * Adding one, once credentials exist: a file beside `mock.ts` implementing
 * `PrintProvider` against the provider's sandbox, an entry here, its
 * credentials read lazily with no defaults (the rule in `lib/admin/env.ts`),
 * and `npm run test:shop-pipeline` passed with it swapped in for the mock
 * before `launchChecklist.supplier` is ticked.
 */
const providers: Readonly<Record<string, PrintProvider>> = {
  [mockProvider.id]: mockProvider,
};

export function printProvider(id: string | undefined): PrintProvider | null {
  if (!id) return null;
  return Object.hasOwn(providers, id) ? providers[id]! : null;
}

export const printProviderIds: readonly string[] = Object.keys(providers);

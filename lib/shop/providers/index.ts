import { mockProvider } from "@/lib/shop/providers/mock";
import { selfDispatchProvider } from "@/lib/shop/providers/self-dispatch";
import type { PrintProvider } from "@/lib/shop/providers/types";

export type {
  PrintJob,
  PrintProvider,
  ProviderKind,
  ShipTo,
  SubmitOutcome,
  Tracking,
} from "@/lib/shop/providers/types";

/**
 * Everyone the shop can send an order to, by the id `SHOP_PRINT_PROVIDER`
 * names.
 *
 *   self-dispatch  the chosen model: stock held in Austria, packed and posted
 *                  by the people with dispatch accounts
 *   mock           prints nothing; for exercising failures in development
 *
 * No outside printer is here. Several document an ordering API — Print.com,
 * FLYERALARM PRO, Printful, Printen.eu among them — but each issues
 * credentials only to an approved business account, and an adapter written
 * against an API nobody has credentials for would be a guess.
 * docs/sticker-shop-feasibility.md compares them. Adding one later is a file
 * beside these implementing `PrintProvider`, an entry here, its credentials
 * read lazily with no defaults (the rule in `lib/admin/env.ts`), and
 * `npm run test:shop-pipeline` passed with it swapped in.
 */
const providers: Readonly<Record<string, PrintProvider>> = {
  [selfDispatchProvider.id]: selfDispatchProvider,
  [mockProvider.id]: mockProvider,
};

export function printProvider(id: string | undefined): PrintProvider | null {
  if (!id) return null;
  return Object.hasOwn(providers, id) ? providers[id]! : null;
}

export const printProviderIds: readonly string[] = Object.keys(providers);

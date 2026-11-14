import { createDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { shopText as englishText } from "./en";

export {
  dispatchCountry,
  isShopCountry,
  isShopQuantity,
  shippingZoneFor,
  shopCountryIds,
  shopQuantities,
  stickerFormat,
} from "./structure";
export type { ShippingZoneId, ShopCountryId, ShopQuantity } from "./structure";

/**
 * `/shop`, by language.
 *
 * No loaders are registered yet, so every language reads the English file —
 * see the note at the top of `en.ts` for why the translations wait for the
 * launch. Registering one is a line here and a file beside `en.ts`, typed
 * against it like every other domain.
 */
export type ShopText = typeof englishText;

export interface ShopEdition {
  readonly locale: Locale;
  readonly text: ShopText;
}

const getShopText = createDictionary<ShopText>(englishText);

export async function getShop(locale: Locale): Promise<ShopEdition> {
  return { locale, text: await getShopText(locale) };
}

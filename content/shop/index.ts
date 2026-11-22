import { createDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { shopText as englishText } from "./en";

export {
  dispatchCountry,
  isShopCountry,
  isShopQuantity,
  needsCustomsDeclaration,
  preorder,
  shippingZoneFor,
  shopCountryIds,
  shopQuantities,
  shopSeller,
  stickerFormat,
  stickerManufacturer,
  stickerStock,
} from "./structure";
export type { ShippingZoneId, ShopCountryId, ShopQuantity } from "./structure";

/**
 * `/shop`, by language: the shop page, the order and withdrawal pages, and
 * the buyer's emails, in all six of the site's languages.
 */

/**
 * The shape of `en.ts` with its words loosened to `string`, so a translation
 * is checked for every key and every list without being required to say the
 * English words.
 */
type Words<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly Words<Item>[]
    : { readonly [Key in keyof T]: Words<T[Key]> };

export type ShopText = Words<typeof englishText>;

export interface ShopEdition {
  readonly locale: Locale;
  readonly text: ShopText;
}

const getShopText = createDictionary<ShopText>(englishText, {
  de: () => import("./de").then((m) => m.shopText),
  fr: () => import("./fr").then((m) => m.shopText),
  pl: () => import("./pl").then((m) => m.shopText),
  it: () => import("./it").then((m) => m.shopText),
  es: () => import("./es").then((m) => m.shopText),
});

export async function getShop(locale: Locale): Promise<ShopEdition> {
  return { locale, text: await getShopText(locale) };
}

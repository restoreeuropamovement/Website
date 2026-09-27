import { createDictionary } from "@/lib/dictionary";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { materialsText as englishText } from "./en";
import {
  carriesImprintNote,
  materialCategoryIds,
  type MaterialCategoryId,
} from "./structure";

/**
 * `/materials`, in six languages.
 *
 * The edition joins the structure to the words the way every other domain
 * here does, and for the same reason: the page renders `edition.categories`,
 * which is a list in the order `structure.ts` fixed, so a translator can
 * change what a shelf is called and can change nothing about which shelves
 * exist or what order they come in.
 *
 * Note the asymmetry this domain has and the others do not. The chrome of the
 * page is translated; the materials on it are not, because they are rows an
 * administrator wrote rather than copy anybody commissioned. That is the same
 * exception the journal makes, and it is worth naming rather than discovering:
 * a German reader gets a German heading over an English poster title.
 */
export { isMaterialCategory, materialCategoryIds } from "./structure";
export type { MaterialCategoryId } from "./structure";

export type MaterialsText = typeof englishText;

export interface MaterialCategory {
  readonly id: MaterialCategoryId;
  readonly label: string;
  readonly note: string;
  /**
   * The note about the blank field for a responsible person, on the shelves
   * that carry it and `null` on the rest.
   *
   * Resolved here rather than in the component for the same reason the order of
   * the shelves is: whether a shelf carries it comes from `structure.ts`, the
   * sentence comes from a language file, and the page should have to know
   * neither. A `null` is a shelf with nothing to say, not a missing
   * translation — the text is one string shared by every shelf that shows it.
   */
  readonly imprintNote: string | null;
}

export interface MaterialsEdition {
  readonly locale: Locale;
  readonly meta: MaterialsText["meta"];
  readonly file: MaterialsText["file"];
  readonly empty: MaterialsText["empty"];
  readonly unavailable: MaterialsText["unavailable"];
  readonly usage: MaterialsText["usage"];
  readonly categories: readonly MaterialCategory[];
}

const getMaterialsText = createDictionary<MaterialsText>(englishText, {
  de: () => import("./de").then((m) => m.materialsText),
  fr: () => import("./fr").then((m) => m.materialsText),
  pl: () => import("./pl").then((m) => m.materialsText),
  it: () => import("./it").then((m) => m.materialsText),
  es: () => import("./es").then((m) => m.materialsText),
});

function edition(locale: Locale, text: MaterialsText): MaterialsEdition {
  return {
    locale,
    meta: text.meta,
    file: text.file,
    empty: text.empty,
    unavailable: text.unavailable,
    usage: text.usage,
    /*
     * Driven by the id list rather than by `Object.entries(text.categories)`.
     * Object key order would put the page in whatever order a translator
     * happened to type the keys in, which is exactly the class of decision the
     * structure/text split exists to keep out of a language file.
     */
    categories: materialCategoryIds.map((id) => ({
      id,
      ...text.categories[id],
      imprintNote: carriesImprintNote(id) ? text.imprint.note : null,
    })),
  };
}

export async function getMaterials(locale: Locale): Promise<MaterialsEdition> {
  return edition(locale, await getMaterialsText(locale));
}

/** The English edition, for the unprefixed route that has no locale in hand. */
export const englishMaterials: MaterialsEdition = edition(DEFAULT_LOCALE, englishText);

import { getImages } from "@/content/images";
import { createDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import type { Principle } from "@/lib/content-types";
import { principlesContent as en } from "./en";
import { principleStructure } from "./structure";

export type PrinciplesContent = typeof en;

const getPrinciplesContent = createDictionary<PrinciplesContent>(en, {
  de: () => import("./de").then((m) => m.principlesContent),
  fr: () => import("./fr").then((m) => m.principlesContent),
  pl: () => import("./pl").then((m) => m.principlesContent),
  it: () => import("./it").then((m) => m.principlesContent),
  es: () => import("./es").then((m) => m.principlesContent),
});

export interface PrinciplesPageContent {
  readonly meta: PrinciplesContent["meta"];
  readonly principles: readonly Principle[];
}

/**
 * Structure and text, joined.
 *
 * The order, numbering and anchors come from `structure.ts` in every language;
 * only the words come from the dictionary. Joining here rather than in each
 * translation is what makes it impossible for a translated page to renumber
 * itself or lose an anchor that something else links to.
 */
export async function getPrinciples(locale: Locale): Promise<PrinciplesPageContent> {
  const [content, images] = await Promise.all([
    getPrinciplesContent(locale),
    getImages(locale),
  ]);

  return {
    meta: content.meta,
    principles: principleStructure.map((structure) => ({
      ...structure,
      ...content.items[structure.id as keyof PrinciplesContent["items"]],
      /* The photograph is chosen by the structure, described by the edition. */
      image: structure.image ? images[structure.image] : undefined,
    })),
  };
}

/** English, for the places that have no locale in hand. */
export const principlesMeta = en.meta;

export { principleStructure } from "./structure";

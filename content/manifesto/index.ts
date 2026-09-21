import { createDictionary } from "@/lib/dictionary";
import type { ContentBlock, ManifestoSectionData } from "@/lib/content-types";
import type { Locale } from "@/lib/i18n";
import { manifestoMeta as enMeta, manifestoSections as enSections } from "./en";
import { manifestoStructure, type ManifestoSectionId } from "./structure";

/**
 * The manifesto, and its translations.
 *
 * English is re-exported unchanged so that every existing importer — the page,
 * the plain-text download, and the policy catalogue that cross-references
 * sections — keeps working without knowing translations exist.
 *
 * Structure lives in `structure.ts` and is shared by all six languages; a
 * translation carries words only, keyed by anchor id. Joining the two here is
 * what makes it impossible for a translated edition to renumber itself, reorder
 * the document, or lose an anchor the policy catalogue links to.
 *
 * The plain-text download is always the English text, and the download button
 * says so.
 */
export { manifestoMeta, manifestoSections } from "./en";
export { manifestoStructure } from "./structure";

/** One section's words. No id, no numeral — those are structural. */
export interface ManifestoSectionText {
  readonly title: string;
  readonly summary: string;
  readonly body: readonly ContentBlock[];
}

export interface ManifestoText {
  readonly meta: {
    readonly title: string;
    readonly subtitle: string;
    readonly status: string;
  };
  readonly sections: Record<ManifestoSectionId, ManifestoSectionText>;
}

export interface ManifestoEdition {
  readonly title: string;
  readonly subtitle: string;
  readonly status: string;
  readonly sections: readonly ManifestoSectionData[];
}

/** English, derived from the authored arrays so the text exists in one place. */
const englishText: ManifestoText = {
  meta: { title: enMeta.title, subtitle: enMeta.subtitle, status: enMeta.status },
  sections: Object.fromEntries(
    enSections.map((section) => [
      section.id,
      { title: section.title, summary: section.summary, body: section.body },
    ]),
  ) as ManifestoText["sections"],
};

/**
 * Registered translations. Adding a language is one line here and one file
 * beside this one — the route, the switcher, the `hreflang` tags and the
 * sitemap all read from `lib/i18n.ts`, so nothing else needs editing.
 */
const getManifestoText = createDictionary<ManifestoText>(englishText, {
  de: () => import("./de").then((m) => m.manifestoText),
  fr: () => import("./fr").then((m) => m.manifestoText),
  pl: () => import("./pl").then((m) => m.manifestoText),
  it: () => import("./it").then((m) => m.manifestoText),
  es: () => import("./es").then((m) => m.manifestoText),
});

export async function getManifesto(locale: Locale): Promise<ManifestoEdition> {
  const text = await getManifestoText(locale);

  return {
    title: text.meta.title,
    subtitle: text.meta.subtitle,
    status: text.meta.status,
    sections: manifestoStructure.map((structure) => ({
      id: structure.id,
      numeral: structure.numeral,
      ...text.sections[structure.id],
    })),
  };
}

/** The English edition in the same shape, for routes with no locale in hand. */
export const englishEdition: ManifestoEdition = {
  title: enMeta.title,
  subtitle: enMeta.subtitle,
  status: enMeta.status,
  sections: enSections,
};

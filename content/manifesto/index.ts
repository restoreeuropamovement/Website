import { createDictionary } from "@/lib/dictionary";
import type { ContentBlock, ManifestoSectionData } from "@/lib/content-types";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import {
  manifestoMeta as enMeta,
  manifestoSections as enSections,
  manifestoText as englishText,
} from "./en";
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
 * The plain-text download is generated from whichever edition is being read,
 * so a reader on `/de/manifesto` downloads the German text rather than being
 * handed the English one by a button with no language in it.
 */
export { manifestoMeta, manifestoSections } from "./en";
export { manifestoStructure } from "./structure";

/** One section's words. No id, no numeral — those are structural. */
export interface ManifestoSectionText {
  readonly title: string;
  readonly summary: string;
  readonly body: readonly ContentBlock[];
}

/**
 * The page around the document: the eyebrow, the download, the contents list
 * and the note that closes it.
 *
 * These were written into `components/manifesto/` while the manifesto existed
 * in English only, which meant a German reader was given the whole document in
 * German under an English heading, with an English contents list beside it.
 */
export interface ManifestoLabels {
  readonly eyebrow: string;
  readonly download: string;
  readonly contents: string;
  /** Names the contents list to a screen reader, which sees several navs. */
  readonly contentsNavLabel: string;
  readonly progressLabel: string;
  readonly copyDocument: string;
  /**
   * `{numeral}` and `{title}` are the section's own, from the structure. The
   * button's other two words — "Copied", and what is announced — are shared
   * with the principles page and live in `content/chrome`.
   */
  readonly copySection: string;
  /**
   * What authority this edition carries.
   *
   * The one string here that deliberately says something different in each
   * language rather than the same thing: the English edition is the reference
   * version, so the other five say so of the English rather than of
   * themselves. A translation claiming to be authoritative would be a false
   * statement about the movement's own text.
   */
  readonly reference: string;
}

export interface ManifestoText {
  readonly meta: {
    readonly title: string;
    readonly subtitle: string;
    readonly status: string;
  };
  readonly labels: ManifestoLabels;
  readonly sections: Record<ManifestoSectionId, ManifestoSectionText>;
}

export interface ManifestoEdition {
  /** Which language this edition is, for the download link and the `lang`. */
  readonly locale: Locale;
  readonly title: string;
  readonly subtitle: string;
  readonly status: string;
  readonly labels: ManifestoLabels;
  readonly sections: readonly ManifestoSectionData[];
}

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
    locale,
    title: text.meta.title,
    subtitle: text.meta.subtitle,
    status: text.meta.status,
    labels: text.labels,
    sections: manifestoStructure.map((structure) => ({
      id: structure.id,
      numeral: structure.numeral,
      ...text.sections[structure.id],
    })),
  };
}

/** The English edition in the same shape, for routes with no locale in hand. */
export const englishEdition: ManifestoEdition = {
  locale: DEFAULT_LOCALE,
  title: enMeta.title,
  subtitle: enMeta.subtitle,
  status: enMeta.status,
  labels: englishText.labels,
  sections: enSections,
};

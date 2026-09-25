import { createDictionary } from "@/lib/dictionary";
import type { ContentBlock } from "@/lib/content-types";
import type { Locale } from "@/lib/i18n";
import { aboutText as englishText } from "./en";
import { aboutStructure, type AboutSectionId } from "./structure";

/**
 * The about page, and its translations.
 *
 * Section ids and their order live in `structure.ts`; a language file carries
 * words. Links inside the prose are written as references — `[manifesto][manifesto]`
 * — which `lib/inline.tsx` resolves against `routes` and rewrites for the
 * reader's language, so no translation contains a URL and none can rot.
 */
export { aboutStructure } from "./structure";
export type { AboutSectionId } from "./structure";

/** One section's words. No id — that is structural. */
export interface AboutSectionText {
  readonly title: string;
  readonly body: readonly ContentBlock[];
}

export interface AboutText {
  readonly meta: {
    readonly eyebrow: string;
    readonly title: string;
    readonly metaTitle: string;
    readonly lede: string;
    readonly description: string;
  };
  /** Heading above the in-page table of contents. */
  readonly onThisPage: string;
  readonly sections: Record<AboutSectionId, AboutSectionText>;
  readonly actions: {
    readonly getInvolved: string;
    readonly contact: string;
  };
}

export interface AboutSection extends AboutSectionText {
  readonly id: AboutSectionId;
}

export interface AboutEdition {
  readonly meta: AboutText["meta"];
  readonly onThisPage: string;
  readonly sections: readonly AboutSection[];
  readonly actions: AboutText["actions"];
}

const getAboutText = createDictionary<AboutText>(englishText, {
  de: () => import("./de").then((m) => m.aboutText),
  fr: () => import("./fr").then((m) => m.aboutText),
  pl: () => import("./pl").then((m) => m.aboutText),
  it: () => import("./it").then((m) => m.aboutText),
  es: () => import("./es").then((m) => m.aboutText),
});

function edition(text: AboutText): AboutEdition {
  return {
    meta: text.meta,
    onThisPage: text.onThisPage,
    sections: aboutStructure.map((id) => ({ id, ...text.sections[id] })),
    actions: text.actions,
  };
}

export async function getAbout(locale: Locale): Promise<AboutEdition> {
  return edition(await getAboutText(locale));
}

/** The English edition, for the unprefixed routes that have no locale in hand. */
export const englishAbout: AboutEdition = edition(englishText);

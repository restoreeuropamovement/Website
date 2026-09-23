import { createDictionary } from "@/lib/dictionary";
import type { ContentBlock } from "@/lib/content-types";
import type { Locale } from "@/lib/i18n";
import { visionText as englishText } from "./en";
import { visionStructure, type VisionOutcomeId } from "./structure";

/**
 * The vision page, and its translations.
 *
 * Same division as the manifesto: `structure.ts` holds the ids, the ordering
 * and the link each outcome makes back into the principles; a language file
 * holds words and nothing else. Joining the two here is what stops a
 * translated edition from reordering the page or pointing a reader at the
 * wrong principle.
 *
 * The heading above the list and the two links below it are text, so they live
 * in the language files too. Leaving "A Europe where —" hard-coded in the page
 * component is the usual way a translated page ends up three-quarters
 * translated.
 */
export { visionStructure } from "./structure";
export type { VisionOutcomeId } from "./structure";

/** One outcome's words. No id, no principle link — those are structural. */
export interface VisionOutcomeText {
  readonly title: string;
  readonly summary: string;
  readonly body: string;
}

export interface VisionText {
  readonly meta: {
    readonly eyebrow: string;
    readonly title: string;
    /**
     * The `<title>`, which is not the headline. The headline is a question;
     * a browser tab and a search result want the name of the page.
     */
    readonly metaTitle: string;
    readonly lede: string;
    /** For `<meta name="description">`, which differs from the on-page lede. */
    readonly description: string;
    readonly intro: readonly ContentBlock[];
  };
  readonly outcomesHeading: string;
  readonly principleLink: string;
  readonly outcomes: Record<VisionOutcomeId, VisionOutcomeText>;
  readonly closing: {
    readonly statement: string;
    readonly body: readonly ContentBlock[];
    readonly readManifesto: string;
    readonly getInvolved: string;
  };
}

/** One outcome as the page renders it: words joined back to structure. */
export interface VisionOutcome extends VisionOutcomeText {
  readonly id: VisionOutcomeId;
  readonly principle: string;
}

export interface VisionEdition {
  readonly meta: VisionText["meta"];
  readonly outcomesHeading: string;
  readonly principleLink: string;
  readonly outcomes: readonly VisionOutcome[];
  readonly closing: VisionText["closing"];
}

/**
 * Registered translations. Adding a language is one line here and one file
 * beside this one; a language with no file falls back to English, so the page
 * is never broken by a translation still being written.
 */
const getVisionText = createDictionary<VisionText>(englishText, {
  de: () => import("./de").then((m) => m.visionText),
  fr: () => import("./fr").then((m) => m.visionText),
  pl: () => import("./pl").then((m) => m.visionText),
  it: () => import("./it").then((m) => m.visionText),
  es: () => import("./es").then((m) => m.visionText),
});

function edition(text: VisionText): VisionEdition {
  return {
    meta: text.meta,
    outcomesHeading: text.outcomesHeading,
    principleLink: text.principleLink,
    outcomes: visionStructure.map((structure) => ({
      id: structure.id,
      principle: structure.principle,
      ...text.outcomes[structure.id],
    })),
    closing: text.closing,
  };
}

export async function getVision(locale: Locale): Promise<VisionEdition> {
  return edition(await getVisionText(locale));
}

/** The English edition, for the unprefixed routes that have no locale in hand. */
export const englishVision: VisionEdition = edition(englishText);

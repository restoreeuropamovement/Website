import { createDictionary } from "@/lib/dictionary";
import type { ContentBlock } from "@/lib/content-types";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { legalText as englishText } from "./en";
import {
  imprintEntryIds,
  privacySectionIds,
  type ImprintEntryId,
  type PrivacySectionId,
} from "./structure";

/**
 * The privacy note and the imprint, in six languages.
 *
 * These two are the pages where a translation that drifts from the English is
 * not merely untidy. The privacy note makes specific promises — which fields
 * exist, which are encrypted, that reading requires a second confirmation,
 * that there is no export — and a language file that softened one of them
 * would be a false statement to the people who trusted it. Being typed against
 * the English means a translator cannot quietly drop a clause; it does not
 * mean they cannot weaken one, which is why these two want reading before
 * they want shipping.
 */
export { imprintEntryIds, privacySectionIds } from "./structure";
export type { ImprintEntryId, PrivacySectionId } from "./structure";

export interface LegalSectionText {
  readonly title: string;
  readonly body: readonly ContentBlock[];
}

export interface LegalText {
  readonly privacy: {
    readonly eyebrow: string;
    readonly title: string;
    readonly metaTitle: string;
    readonly lede: string;
    readonly description: string;
    readonly sections: Record<PrivacySectionId, LegalSectionText>;
  };
  readonly imprint: {
    readonly eyebrow: string;
    readonly title: string;
    readonly metaTitle: string;
    readonly lede: string;
    readonly description: string;
    readonly intro: readonly ContentBlock[];
    readonly particularsHeading: string;
    readonly particularsNote: string;
    /** Labels the "About this website" region for assistive technology. */
    readonly aboutLabel: string;
    readonly entries: Record<ImprintEntryId, { readonly term: string; readonly description: string }>;
    readonly closing: readonly ContentBlock[];
  };
}

export interface LegalSection extends LegalSectionText {
  readonly id: PrivacySectionId;
}

export interface ImprintEntry {
  readonly id: ImprintEntryId;
  readonly term: string;
  readonly description: string;
}

export interface LegalEdition {
  readonly locale: Locale;
  readonly privacy: Omit<LegalText["privacy"], "sections"> & {
    readonly sections: readonly LegalSection[];
  };
  readonly imprint: Omit<LegalText["imprint"], "entries"> & {
    readonly entries: readonly ImprintEntry[];
  };
}

const getLegalText = createDictionary<LegalText>(englishText, {
  de: () => import("./de").then((m) => m.legalText),
  fr: () => import("./fr").then((m) => m.legalText),
  pl: () => import("./pl").then((m) => m.legalText),
  it: () => import("./it").then((m) => m.legalText),
  es: () => import("./es").then((m) => m.legalText),
});

function edition(locale: Locale, text: LegalText): LegalEdition {
  return {
    locale,
    privacy: {
      ...text.privacy,
      sections: privacySectionIds.map((id) => ({ id, ...text.privacy.sections[id] })),
    },
    imprint: {
      ...text.imprint,
      entries: imprintEntryIds.map((id) => ({ id, ...text.imprint.entries[id] })),
    },
  };
}

export async function getLegal(locale: Locale): Promise<LegalEdition> {
  return edition(locale, await getLegalText(locale));
}

/** The English edition, for the unprefixed routes that have no locale in hand. */
export const englishLegal: LegalEdition = edition(DEFAULT_LOCALE, englishText);

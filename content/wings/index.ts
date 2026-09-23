import { createDictionary } from "@/lib/dictionary";
import type { ContentBlock } from "@/lib/content-types";
import type { PluralForms } from "@/lib/format";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { wingsText as englishText } from "./en";
import {
  wingRegionIds,
  wingStructure,
  type Endonym,
  type WingLayerId,
  type WingRegionId,
  type WingRemitId,
  type WingSlug,
} from "./structure";

/**
 * The national wings, and their translations.
 *
 * A wing is the national level of the movement, sitting between regional
 * coordination and the European movement as a whole. Nothing on these pages
 * asserts that a wing is constituted, staffed or active: they set out what a
 * national wing is, what it is answerable for, and how to help establish one.
 *
 * The page chrome is in here too — "Where the wing sits", "Other wings in
 * Southern Europe", the count under each region heading. It was previously
 * written into the components, which is the usual way a translated page ends
 * up with a German headline over English furniture.
 */
export {
  NATIONAL_LAYER,
  wingLayerIds,
  wingRegionIds,
  wingRemitIds,
  wingStructure,
} from "./structure";
export type {
  Endonym,
  WingLayerId,
  WingRegionId,
  WingRemitId,
  WingSlug,
  WingStructure,
} from "./structure";

export interface WingsText {
  readonly meta: {
    readonly eyebrow: string;
    readonly title: string;
    /** The `<title>`, which is not the headline. */
    readonly metaTitle: string;
    readonly lede: string;
    /** For `<meta name="description">`, which differs from the on-page lede. */
    readonly description: string;
    readonly intro: readonly ContentBlock[];
    readonly note: string;
    readonly mapLabel: string;
    readonly mapCaption: string;
    /** Says that the nations on the map are links, which nothing else does. */
    readonly mapHint: string;
  };

  /** Heading for each region. The anchor comes from the id, not from this. */
  readonly regions: Record<WingRegionId, string>;

  /**
   * Every nation, by slug. Exhaustive by construction: a language file that
   * forgets Kosovo does not render a blank cell, it fails the build.
   */
  readonly countries: Record<WingSlug, string>;

  readonly index: {
    /** "{count} nations" under a region heading. */
    readonly nationCount: PluralForms;
    /** "{count} nations. One inheritance." */
    readonly closingTitle: string;
    readonly closingBody: string;
    readonly getInvolved: string;
    readonly howWeOrganise: string;
  };

  readonly wing: {
    /** The link back to the index, at the top of a national page. */
    readonly backLabel: string;
    /** Above the country name. */
    readonly kicker: string;
    /** Opens every national page. Takes `{country}`. */
    readonly lead: string;
    readonly body: readonly ContentBlock[];
    /** Browser tab and search result. Takes `{country}`. */
    readonly metaTitle: string;
    readonly metaDescription: string;
    readonly ogTitle: string;
    readonly ogDescription: string;
    readonly notFound: string;
    readonly remitHeading: string;
    /** Takes `{country}`. */
    readonly remitLede: string;
    /** Takes `{country}`. */
    readonly takePartHeading: string;
    readonly takePartBody: string;
    readonly getInvolved: string;
    readonly contact: string;
    /** Takes `{region}`. */
    readonly neighboursHeading: string;
  };

  readonly chain: {
    readonly caption: string;
    readonly footnote: string;
    /** "National wing — Poland". Takes `{layer}` and `{country}`. */
    readonly nationalLabel: string;
  };

  readonly layers: Record<WingLayerId, { readonly label: string; readonly note: string }>;
  readonly remit: Record<WingRemitId, { readonly term: string; readonly description: string }>;
}

/** One wing as the pages render it: structure joined to the edition's words. */
export interface Wing {
  readonly slug: WingSlug;
  readonly country: string;
  readonly region: WingRegionId;
  /** The region's name in this edition, for headings that print it inline. */
  readonly regionName: string;
  readonly endonyms: readonly Endonym[];
}

export interface WingRegionGroup {
  readonly id: WingRegionId;
  readonly name: string;
  readonly wings: readonly Wing[];
}

export interface WingsEdition {
  readonly locale: Locale;
  readonly meta: WingsText["meta"];
  readonly index: WingsText["index"];
  readonly wing: WingsText["wing"];
  readonly chain: WingsText["chain"];
  readonly wings: readonly Wing[];
  readonly regions: readonly WingRegionGroup[];
  readonly layers: readonly ({ readonly id: WingLayerId } & WingsText["layers"][WingLayerId])[];
  readonly remit: readonly ({ readonly id: WingRemitId } & WingsText["remit"][WingRemitId])[];
}

const getWingsText = createDictionary<WingsText>(englishText, {
  de: () => import("./de").then((m) => m.wingsText),
  fr: () => import("./fr").then((m) => m.wingsText),
  pl: () => import("./pl").then((m) => m.wingsText),
  it: () => import("./it").then((m) => m.wingsText),
  es: () => import("./es").then((m) => m.wingsText),
});

function edition(locale: Locale, text: WingsText): WingsEdition {
  const wings = wingStructure
    .map((structure): Wing => {
      const country = text.countries[structure.slug];
      return {
        slug: structure.slug,
        country,
        region: structure.region,
        regionName: text.regions[structure.region],
        /*
         * An endonym identical to the name already printed above it is noise,
         * and which ones collide depends on the language being read: the
         * German edition prints "Deutschland" as its heading and must not
         * repeat it underneath, while the Polish edition says "Niemcy" and
         * should.
         */
        endonyms: structure.endonyms.filter((endonym) => endonym.name !== country),
      };
    })
    /*
     * Sorted in the reader's own language. Alphabetical order is not a
     * property of the list, it is a property of the alphabet: Åland files
     * after Z in Swedish, and Spain comes before Sweden only in English.
     */
    .sort((a, b) => a.country.localeCompare(b.country, locale));

  return {
    locale,
    meta: text.meta,
    index: text.index,
    wing: text.wing,
    chain: text.chain,
    wings,
    regions: wingRegionIds.map((id) => ({
      id,
      name: text.regions[id],
      wings: wings.filter((wing) => wing.region === id),
    })),
    layers: Object.entries(text.layers).map(([id, layer]) => ({
      id: id as WingLayerId,
      ...layer,
    })),
    remit: Object.entries(text.remit).map(([id, item]) => ({ id: id as WingRemitId, ...item })),
  };
}

export async function getWings(locale: Locale): Promise<WingsEdition> {
  return edition(locale, await getWingsText(locale));
}

/** The English edition, for the unprefixed routes that have no locale in hand. */
export const englishWings: WingsEdition = edition(DEFAULT_LOCALE, englishText);

/* --------------------------------------------------------------- lookups */

/**
 * Slugs only, in a stable order. `generateStaticParams`, the sitemap and the
 * map generator all want the set of nations and none of them wants words, so
 * they read this and stay out of the dictionary entirely.
 */
export const wingSlugs: readonly WingSlug[] = wingStructure.map((wing) => wing.slug);

export function getWing(edition: WingsEdition, slug: string): Wing | undefined {
  return edition.wings.find((wing) => wing.slug === slug);
}

export function getWingsByRegion(
  edition: WingsEdition,
  region: WingRegionId,
): readonly Wing[] {
  return edition.wings.filter((wing) => wing.region === region);
}

/**
 * Country names for the join form's select, in the reader's language.
 *
 * Note what this is *not* used for: the value stored against a membership is
 * the slug, not the name. A `country` column holding "Deutschland" in some
 * rows and "Germany" in others would split one nation's members into two
 * groups in the admin view, and no amount of counting would put them back
 * together.
 */
export function getWingCountries(edition: WingsEdition): readonly Wing[] {
  return edition.wings;
}

/** English country names, for administrative listings that are not translated. */
export const englishCountryNames: Record<WingSlug, string> = englishText.countries;

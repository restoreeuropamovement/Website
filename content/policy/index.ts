import { createDictionary } from "@/lib/dictionary";
import type { PluralForms } from "@/lib/format";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { policyText as englishText } from "./en";
import {
  policyCategoryIds,
  policyCategoryNumerals,
  policyStatusIds,
  policyStructure,
  type PolicyCategoryId,
  type PolicyEntryStructure,
  type PolicySlug,
  type PolicyStatusId,
} from "./structure";

/**
 * The policy catalogue, and its translations.
 *
 * The manifesto carries the worldview; this answers the narrower question of
 * what the movement holds on a particular issue. Every entry carries a status,
 * so an adopted position can be told apart from one that has not been decided,
 * and an entry that departs from existing law says so in its own words rather
 * than describing itself as settled.
 *
 * Eighty-nine entries in six languages is the largest thing on the site, and
 * the one where a translation drifting from the English would do the most
 * damage: these are the movement's stated positions on abortion, euthanasia,
 * capital punishment and the standing of religion in law. A reader in Polish
 * is entitled to the same position as a reader in English, not a nearby one.
 * `scripts/check-translations.ts` enforces what the type system cannot — that
 * every edition has the same entries, with the same number of commitments in
 * each.
 */
export {
  policyCategoryIds,
  policyCategoryNumerals,
  policyStatusIds,
  policyStructure,
} from "./structure";
export type {
  PolicyCategoryId,
  PolicyEntryStructure,
  PolicySlug,
  PolicyStatusId,
} from "./structure";

/** One entry's words. No slug, no status, no cross-references. */
export interface PolicyEntryText {
  readonly title: string;
  /** One or two sentences. Shown in listings and search results. */
  readonly shortAnswer: string;
  /** The position itself, as paragraphs. */
  readonly position: readonly string[];
  /** The specific commitments that follow from the position. */
  readonly policies?: readonly string[];
  /** The position compressed to a single line. */
  readonly principle?: string;
  /** What the position deliberately does not claim, or has not yet settled. */
  readonly limits?: readonly string[];
  /** Where the position stands in relation to existing law. */
  readonly implementationNote?: string;
  /** Search terms beyond the title and position text, in this language. */
  readonly keywords: readonly string[];
}

export interface PolicyText {
  readonly meta: {
    readonly eyebrow: string;
    readonly title: string;
    readonly metaTitle: string;
    /** "Version 0.2". A version is a name, and names are written out. */
    readonly version: string;
    readonly framework: string;
    readonly lede: string;
    readonly description: string;
    readonly body: readonly string[];
    readonly notice: string;
  };

  /** Labels for the four-cell table beside the catalogue's lede. */
  readonly labels: {
    readonly version: string;
    readonly date: string;
    readonly framework: string;
    readonly entries: string;
  };

  readonly statuses: Record<
    PolicyStatusId,
    { readonly label: string; readonly description: string }
  >;

  readonly categories: Record<
    PolicyCategoryId,
    { readonly title: string; readonly summary: string }
  >;

  readonly index: {
    readonly legendHeading: string;
    /** "Showing all {count} positions." */
    readonly showingAll: PluralForms;
    /** "{count} of {total} positions match." */
    readonly showingSome: PluralForms;
    readonly noMatch: string;
    readonly showAll: string;
    readonly openQueue: {
      readonly heading: string;
      readonly body: string;
      readonly items: readonly string[];
    };
    readonly derivedQueue: {
      readonly heading: string;
      readonly body: string;
      readonly items: readonly string[];
    };
  };

  readonly filters: {
    readonly searchLabel: string;
    readonly searchPlaceholder: string;
    readonly searchButton: string;
    readonly clear: string;
    readonly sectionNavLabel: string;
    readonly sectionHeading: string;
    readonly allSections: string;
    readonly statusNavLabel: string;
    readonly statusHeading: string;
    readonly anyStatus: string;
  };

  readonly entry: {
    readonly breadcrumb: string;
    readonly positionHeading: string;
    readonly policiesHeading: string;
    readonly principleHeading: string;
    readonly limitsHeading: string;
    readonly implementationHeading: string;
    readonly basisHeading: string;
    readonly keywordsHeading: string;
    /** Wraps a `<time>`, so it is two fragments rather than one template. */
    readonly lastUpdatedBefore: string;
    readonly lastUpdatedAfter: string;
    readonly relatedHeading: string;
    readonly allPositions: string;
    readonly readManifesto: string;
    readonly notFound: string;
  };

  /**
   * Every entry, by slug. Exhaustive: an edition that forgets one does not
   * publish eighty-eight positions, it fails the build.
   */
  readonly entries: Record<PolicySlug, PolicyEntryText>;
}

/** One entry as the pages render it: words joined back to structure. */
export interface PolicyEntry extends PolicyEntryText {
  readonly slug: PolicySlug;
  readonly category: PolicyCategoryId;
  readonly status: PolicyStatusId;
  readonly secondaryStatus?: PolicyStatusId;
  readonly manifestoBasis?: readonly string[];
  readonly related?: readonly string[];
  readonly lastUpdated: string;
  /** "Manifesto Core / Derived" where an entry sits between two statuses. */
  readonly statusLabel: string;
}

export interface PolicyCategory {
  readonly id: PolicyCategoryId;
  readonly numeral: string;
  readonly title: string;
  readonly summary: string;
}

export interface PolicyStatusOption {
  readonly id: PolicyStatusId;
  readonly label: string;
  readonly description: string;
}

export interface PolicyEdition {
  readonly locale: Locale;
  readonly meta: PolicyText["meta"];
  readonly labels: PolicyText["labels"];
  readonly index: PolicyText["index"];
  readonly filters: PolicyText["filters"];
  readonly entry: PolicyText["entry"];
  readonly entries: readonly PolicyEntry[];
  readonly categories: readonly PolicyCategory[];
  readonly statuses: readonly PolicyStatusOption[];
  /** Lowercased searchable text per entry, built once per edition. */
  readonly haystacks: ReadonlyMap<string, string>;
}

const getPolicyText = createDictionary<PolicyText>(englishText, {
  de: () => import("./de").then((m) => m.policyText),
  fr: () => import("./fr").then((m) => m.policyText),
  pl: () => import("./pl").then((m) => m.policyText),
  it: () => import("./it").then((m) => m.policyText),
  es: () => import("./es").then((m) => m.policyText),
});

const categoryOrder = new Map(policyCategoryIds.map((id, index) => [id, index]));

function edition(locale: Locale, text: PolicyText): PolicyEdition {
  const categories: readonly PolicyCategory[] = policyCategoryIds.map((id) => ({
    id,
    numeral: policyCategoryNumerals[id],
    ...text.categories[id],
  }));
  const categoryTitles = new Map(categories.map((category) => [category.id, category.title]));

  const entries: readonly PolicyEntry[] = policyStructure
    /*
     * Annotated, because `policyStructure` is `as const` — without it each
     * element has its own literal type and the optional keys are absent
     * rather than optional.
     */
    .map((structure: PolicyEntryStructure & { readonly slug: PolicySlug }): PolicyEntry => {
      const words = text.entries[structure.slug];
      return {
        ...structure,
        ...words,
        statusLabel: structure.secondaryStatus
          ? `${text.statuses[structure.status].label} / ${text.statuses[structure.secondaryStatus].label}`
          : text.statuses[structure.status].label,
      };
    })
    /*
     * Catalogue order: by category, then as authored within it. Not sorted
     * by title, in any language — the sequence inside a category is an
     * editorial judgement about what to read first.
     */
    .sort((a, b) => (categoryOrder.get(a.category) ?? 0) - (categoryOrder.get(b.category) ?? 0));

  return {
    locale,
    meta: text.meta,
    labels: text.labels,
    index: text.index,
    filters: text.filters,
    entry: text.entry,
    entries,
    categories,
    statuses: policyStatusIds.map((id) => ({ id, ...text.statuses[id] })),
    /*
     * Searching a translated catalogue has to match translated words. A
     * single module-level haystack built from the English would have meant a
     * German reader typing "Abtreibung" into a box that only knew "abortion".
     */
    haystacks: new Map(
      entries.map((item) => [
        item.slug,
        [
          item.title,
          item.shortAnswer,
          ...item.position,
          ...(item.policies ?? []),
          item.principle ?? "",
          ...(item.limits ?? []),
          item.implementationNote ?? "",
          ...item.keywords,
          categoryTitles.get(item.category) ?? "",
        ]
          .join(" ")
          .toLowerCase(),
      ]),
    ),
  };
}

export async function getPolicy(locale: Locale): Promise<PolicyEdition> {
  return edition(locale, await getPolicyText(locale));
}

/** The English edition, for the unprefixed routes that have no locale in hand. */
export const englishPolicy: PolicyEdition = edition(DEFAULT_LOCALE, englishText);

/**
 * Slugs only, in catalogue order. `generateStaticParams` and the sitemap want
 * the set of entries and none of them wants words.
 */
export const policySlugs: readonly PolicySlug[] = englishPolicy.entries.map((e) => e.slug);

/** ISO date of the catalogue as a whole. Structural: a date is not a word. */
export const POLICY_DATE = "2026-09-21";

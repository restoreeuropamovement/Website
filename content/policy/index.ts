import { createDictionary } from "@/lib/dictionary";
import type { PluralForms } from "@/lib/format";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import type { SearchField } from "@/lib/search";
import { policyText as englishText } from "./en";
import {
  policyCategoryIds,
  policyCategoryNumerals,
  policyStatusIds,
  policyStructure,
  policySynonymGroupIds,
  type PolicyCategoryId,
  type PolicyEntryStructure,
  type PolicySlug,
  type PolicyStatusId,
  type PolicySynonymGroupId,
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
 * Ninety-eight entries in six languages is the largest thing on the site, and
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
  policySynonymGroupIds,
} from "./structure";
export type {
  PolicyCategoryId,
  PolicyEntryStructure,
  PolicySlug,
  PolicyStatusId,
  PolicySynonymGroupId,
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
  /** Search terms beyond the title and position text, in this language. */
  readonly keywords: readonly string[];
}

export interface PolicyText {
  readonly meta: {
    readonly eyebrow: string;
    readonly title: string;
    readonly metaTitle: string;
    /** "Version 0.3". A version is a name, and names are written out. */
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
    /** Heads the flat, ranked list a text search returns. */
    readonly relevanceHeading: string;
    /** "Did you mean", for when a search found little or nothing. */
    readonly suggestions: {
      readonly heading: string;
      readonly body: string;
    };
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
   * Words for the same thing, grouped by subject, in this language.
   *
   * A reader searches for what they call a thing, not for what the catalogue
   * calls it: `gay marriage` where the text says `same-sex`, `immigration`
   * where it says `migrants`, `nukes` where it says `nuclear weapons`.
   * Typing any word in a group widens the search to the rest of it, and the
   * catalogue's own text decides which entry that reaches.
   *
   * These are never displayed. They are the one list in `content/` whose
   * length is a property of the language rather than of the content — German
   * needs one compound where English needs three words — so
   * `scripts/check-translations.ts` compares them by kind and
   * `scripts/check-search.ts` checks what it cannot.
   *
   * Two rules for what goes in: it connects vocabulary and never
   * editorialises, and it never attaches a pejorative to a group of people.
   * A word that is an insult rather than a name for a subject does not
   * belong here even if somebody might type it.
   */
  readonly search: {
    readonly synonyms: Record<PolicySynonymGroupId, readonly string[]>;
  };

  /**
   * Every entry, by slug. Exhaustive: an edition that forgets one does not
   * publish ninety-seven positions, it fails the build.
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
  /** The synonym groups of this language, as the search reads them. */
  readonly synonyms: readonly (readonly string[])[];
  /**
   * Searchable text per entry, split by where it came from and what a hit
   * there is worth. Raw, not folded: `lib/search.ts` owns that, and owning it
   * in one place is what stops the index and the query disagreeing.
   */
  readonly searchFields: ReadonlyMap<string, readonly SearchField[]>;
}

/**
 * What a hit is worth, by where it is.
 *
 * A title is what the entry is about; the body is what it says, which on a
 * catalogue of positions means most entries mention most of the vocabulary at
 * least once. Without the spread, searching `family` would return the
 * thirty-odd entries that mention families ahead of the entry called Family.
 *
 * The slug is in here at the bottom because it is the published URL and is
 * the same in all six languages: a reader who has `/de/policy/abortion` in
 * front of them can search that word on the German page and find it. It is
 * structure, not an English index bolted onto the other five.
 */
export const POLICY_FIELD_WEIGHT = {
  title: 6,
  keywords: 5,
  shortAnswer: 4,
  category: 3,
  slug: 2,
  body: 1,
} as const;

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
    synonyms: policySynonymGroupIds.map((id) => text.search.synonyms[id]),
    /*
     * Searching a translated catalogue has to match translated words. A
     * single module-level index built from the English would have meant a
     * German reader typing "Abtreibung" into a box that only knew "abortion".
     */
    searchFields: new Map(
      entries.map((item) => [
        item.slug,
        [
          { weight: POLICY_FIELD_WEIGHT.title, text: item.title },
          { weight: POLICY_FIELD_WEIGHT.keywords, text: item.keywords.join(" ") },
          { weight: POLICY_FIELD_WEIGHT.shortAnswer, text: item.shortAnswer },
          { weight: POLICY_FIELD_WEIGHT.category, text: categoryTitles.get(item.category) ?? "" },
          { weight: POLICY_FIELD_WEIGHT.slug, text: item.slug.replace(/-/g, " ") },
          {
            weight: POLICY_FIELD_WEIGHT.body,
            text: [
              ...item.position,
              ...(item.policies ?? []),
              item.principle ?? "",
              ...(item.limits ?? []),
            ].join(" "),
          },
        ],
      ]),
    ),
  };
}

/**
 * One edition per language, built once.
 *
 * An edition is derived entirely from two frozen modules, so rebuilding it
 * per request bought nothing and now costs something: the search index is
 * derived from it in turn, and is cached against this object's identity.
 */
const editions = new Map<Locale, PolicyEdition>();

export async function getPolicy(locale: Locale): Promise<PolicyEdition> {
  const cached = editions.get(locale);
  if (cached !== undefined) return cached;
  const built = edition(locale, await getPolicyText(locale));
  editions.set(locale, built);
  return built;
}

/** The English edition, for the unprefixed routes that have no locale in hand. */
export const englishPolicy: PolicyEdition = edition(DEFAULT_LOCALE, englishText);

editions.set(DEFAULT_LOCALE, englishPolicy);

/**
 * Slugs only, in catalogue order. `generateStaticParams` and the sitemap want
 * the set of entries and none of them wants words.
 */
export const policySlugs: readonly PolicySlug[] = englishPolicy.entries.map((e) => e.slug);

/** ISO date of the catalogue as a whole. Structural: a date is not a word. */
export const POLICY_DATE = "2026-09-23";

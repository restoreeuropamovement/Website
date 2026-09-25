import { manifestoSections } from "@/content/manifesto";
import {
  policyCategoryIds,
  policyStatusIds,
  POLICY_FIELD_WEIGHT,
  type PolicyCategory,
  type PolicyEdition,
  type PolicyEntry,
  type PolicyCategoryId,
  type PolicyStatusId,
} from "@/content/policy";
import type { ManifestoSectionData } from "@/lib/content-types";
import { localePath, type Locale } from "@/lib/i18n";
import {
  buildIndex,
  buildSynonymTable,
  parseQuery,
  search,
  type SearchIndex,
  type SynonymTable,
} from "@/lib/search";

/**
 * Queries over one edition of the catalogue.
 *
 * Everything here used to be a module-level singleton reading
 * `content/policy.ts` directly, including the search index. That is exactly
 * the shape that cannot be translated: there is no longer one catalogue, there
 * are six, and a reader searching the German one should be matching German
 * words. Each function now takes the edition it is asked about.
 */

export function getPolicyEntry(edition: PolicyEdition, slug: string): PolicyEntry | undefined {
  return edition.entries.find((entry) => entry.slug === slug);
}

export function getPolicyCategory(
  edition: PolicyEdition,
  id: PolicyCategoryId,
): PolicyCategory | undefined {
  return edition.categories.find((category) => category.id === id);
}

/** An entry counts under both of its statuses where it carries two. */
export function hasStatus(entry: PolicyEntry, status: PolicyStatusId): boolean {
  return entry.status === status || entry.secondaryStatus === status;
}

/**
 * Resolve `related` slugs to entries, dropping any that do not exist. The
 * catalogue is authored by hand, so this is what stops a renamed entry from
 * leaving a link that goes nowhere.
 */
export function getRelatedEntries(
  edition: PolicyEdition,
  entry: PolicyEntry,
): readonly PolicyEntry[] {
  return (entry.related ?? [])
    .filter((slug) => slug !== entry.slug)
    .map((slug) => getPolicyEntry(edition, slug))
    .filter((related): related is PolicyEntry => related !== undefined);
}

/**
 * Resolve `manifestoBasis` ids to real manifesto sections, in document order.
 *
 * Still English, because the manifesto module has not been given an edition
 * lookup by id; the titles here are the sidebar's cross-references rather than
 * the argument itself.
 */
export function getManifestoBasis(entry: PolicyEntry): readonly ManifestoSectionData[] {
  const ids = new Set(entry.manifestoBasis ?? []);
  return manifestoSections.filter((section) => ids.has(section.id));
}

/** Categories that currently hold at least one entry. */
export function getActivePolicyCategories(edition: PolicyEdition): readonly PolicyCategory[] {
  const present = new Set(edition.entries.map((entry) => entry.category));
  return edition.categories.filter((category) => present.has(category.id));
}

/**
 * Statuses at least one entry currently carries.
 *
 * Offered as filters instead of the full scheme, so the catalogue never shows
 * a pill that returns nothing. `Open` disappeared when the v0.2 addendum
 * settled the last undecided question; the legend still explains what it would
 * mean, because the scheme has not changed.
 */
export function getActivePolicyStatuses(edition: PolicyEdition) {
  return edition.statuses.filter((status) =>
    edition.entries.some((entry) => hasStatus(entry, status.id)),
  );
}

/**
 * `/policy` with only the parameters that are actually set.
 *
 * The parameter *values* are ids and stay the same on every page. That is
 * deliberate: a filtered view is a linkable thing, and a reader who sends
 * `/de/policy?category=economy` to somebody reading in Italian should have it
 * open the same section rather than nothing at all.
 */
export function policyHref(
  locale: Locale,
  params: {
    readonly q?: string;
    readonly category?: string;
    readonly status?: string;
  },
): string {
  const search = new URLSearchParams();
  if (params.q) search.set("q", params.q);
  if (params.category) search.set("category", params.category);
  if (params.status) search.set("status", params.status);
  const query = search.toString();
  const base = localePath(locale, "/policy");
  return query ? `${base}?${query}` : base;
}

export interface PolicyQuery {
  readonly q?: string;
  readonly category?: PolicyCategoryId;
  readonly status?: PolicyStatusId;
}

/**
 * The index and the synonym table of one edition, built on the first search
 * of that language and kept against the edition's identity.
 *
 * A `WeakMap` rather than a module-level variable because there are six
 * editions and the pages hold them; keying on the object means the cache can
 * never serve the German index to an Italian reader, which is the one bug
 * worth designing the cache around.
 */
interface PolicySearch {
  readonly index: SearchIndex;
  readonly synonyms: SynonymTable;
}

const searchContexts = new WeakMap<PolicyEdition, PolicySearch>();

function searchContext(edition: PolicyEdition): PolicySearch {
  const cached = searchContexts.get(edition);
  if (cached !== undefined) return cached;

  const built: PolicySearch = {
    index: buildIndex(
      edition.entries.map((entry) => ({
        id: entry.slug,
        fields: edition.searchFields.get(entry.slug) ?? [],
      })),
    ),
    synonyms: buildSynonymTable(edition.synonyms),
  };
  searchContexts.set(edition, built);
  return built;
}

/** Below this many results, the page also offers the nearest entries. */
const SUGGEST_BELOW = 3;

/** How many "did you mean" entries are worth offering. */
const SUGGESTION_LIMIT = 4;

export interface PolicyResults {
  /** What matched, best first when there was a text query. */
  readonly entries: readonly PolicyEntry[];
  /**
   * Entries that matched part of the query, offered when little or nothing
   * matched all of it. Empty whenever the results speak for themselves.
   */
  readonly suggestions: readonly PolicyEntry[];
  /**
   * Whether the order is relevance or the catalogue's own. Browsing keeps
   * the editorial sequence; searching does not, because a ranked list broken
   * back up into ten sections is not a ranked list.
   */
  readonly ranked: boolean;
}

/**
 * Filter and rank the catalogue.
 *
 * Every term in the query must be reached somehow, so adding words still
 * narrows the result. What widened is *how* a term may be reached: the same
 * word inflected, a near spelling of it, or another word for the same thing.
 * See `lib/search.ts` for the tiers and what each is worth.
 */
export function runPolicyQuery(
  edition: PolicyEdition,
  { q, category, status }: PolicyQuery,
): PolicyResults {
  const inScope = edition.entries.filter((entry) => {
    if (category && entry.category !== category) return false;
    if (status && !hasStatus(entry, status)) return false;
    return true;
  });

  const text = (q ?? "").trim();
  if (text === "") return { entries: inScope, suggestions: [], ranked: false };

  const { index, synonyms } = searchContext(edition);
  const terms = parseQuery(text, synonyms);
  /* A query of nothing but punctuation is not a query. */
  if (terms.length === 0) return { entries: inScope, suggestions: [], ranked: false };

  const allowed = new Map(inScope.map((entry) => [entry.slug as string, entry]));
  const { hits, near } = search(index, terms, {
    nearLimit: edition.entries.length,
    /*
     * A synonym has to reach an entry through its title, its keywords or its
     * short answer. Every entry's argument mentions the vocabulary of the
     * neighbouring ones in passing, so letting a substituted word match the
     * body would answer "family" with two thirds of the catalogue.
     */
    synonymMinWeight: POLICY_FIELD_WEIGHT.shortAnswer,
  });

  const entries = hits
    .map((hit) => allowed.get(hit.id))
    .filter((entry): entry is PolicyEntry => entry !== undefined);

  const suggestions =
    entries.length >= SUGGEST_BELOW
      ? []
      : near
          .map((hit) => allowed.get(hit.id))
          .filter((entry): entry is PolicyEntry => entry !== undefined)
          .slice(0, SUGGESTION_LIMIT);

  return { entries, suggestions, ranked: true };
}

/** Just the matches, for callers with nothing to say about the near misses. */
export function queryPolicyEntries(
  edition: PolicyEdition,
  query: PolicyQuery,
): readonly PolicyEntry[] {
  return runPolicyQuery(edition, query).entries;
}

/**
 * Parse a `?category=` value into a known id, ignoring anything else.
 *
 * Against the id list rather than the edition, because a filter link is
 * supposed to survive a change of language: `/policy?category=economy` means
 * the same section on all six pages.
 */
export function parsePolicyCategory(
  value: string | string[] | undefined,
): PolicyCategoryId | undefined {
  const candidate = Array.isArray(value) ? value[0] : value;
  return policyCategoryIds.find((id) => id === candidate);
}

/** Parse a `?status=` value into a known status, ignoring anything else. */
export function parsePolicyStatus(
  value: string | string[] | undefined,
): PolicyStatusId | undefined {
  const candidate = Array.isArray(value) ? value[0] : value;
  return policyStatusIds.find((id) => id === candidate);
}

export function parseQueryText(value: string | string[] | undefined): string {
  const candidate = Array.isArray(value) ? value[0] : value;
  return (candidate ?? "").trim();
}

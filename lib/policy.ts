import { manifestoSections } from "@/content/manifesto";
import { policyCategories, policyEntries } from "@/content/policy";
import type {
  ManifestoSectionData,
  PolicyCategoryData,
  PolicyCategoryId,
  PolicyEntry,
  PolicyStatus,
} from "@/lib/content-types";

/** Every status the catalogue uses, from most settled to least. */
export const policyStatuses: readonly PolicyStatus[] = [
  "Manifesto Core",
  "Agreed Policy",
  "Derived",
  "Open",
];

const categoryOrder = new Map(policyCategories.map((category, index) => [category.id, index]));

/** Entries in catalogue order: by category, then as authored within it. */
export function getPolicyEntries(): readonly PolicyEntry[] {
  return [...policyEntries].sort(
    (a, b) => (categoryOrder.get(a.category) ?? 0) - (categoryOrder.get(b.category) ?? 0),
  );
}

export function getPolicyEntry(slug: string): PolicyEntry | undefined {
  return policyEntries.find((entry) => entry.slug === slug);
}

export function getPolicyCategory(id: PolicyCategoryId): PolicyCategoryData | undefined {
  return policyCategories.find((category) => category.id === id);
}

export function getEntriesInCategory(id: PolicyCategoryId): readonly PolicyEntry[] {
  return policyEntries.filter((entry) => entry.category === id);
}

/** An entry counts under both of its statuses where it carries two. */
export function hasStatus(entry: PolicyEntry, status: PolicyStatus): boolean {
  return entry.status === status || entry.secondaryStatus === status;
}

/** "Manifesto Core / Derived" where an entry sits between two statuses. */
export function formatStatus(entry: PolicyEntry): string {
  return entry.secondaryStatus ? `${entry.status} / ${entry.secondaryStatus}` : entry.status;
}

/**
 * Resolve `related` slugs to entries, dropping any that do not exist. The
 * catalogue is authored by hand, so this is what stops a renamed entry from
 * leaving a link that goes nowhere.
 */
export function getRelatedEntries(entry: PolicyEntry): readonly PolicyEntry[] {
  return (entry.related ?? [])
    .filter((slug) => slug !== entry.slug)
    .map((slug) => getPolicyEntry(slug))
    .filter((related): related is PolicyEntry => related !== undefined);
}

/** Resolve `manifestoBasis` ids to real manifesto sections, in document order. */
export function getManifestoBasis(entry: PolicyEntry): readonly ManifestoSectionData[] {
  const ids = new Set(entry.manifestoBasis ?? []);
  return manifestoSections.filter((section) => ids.has(section.id));
}

/** Categories that currently hold at least one entry. */
export function getActivePolicyCategories(): readonly PolicyCategoryData[] {
  const present = new Set(policyEntries.map((entry) => entry.category));
  return policyCategories.filter((category) => present.has(category.id));
}

/**
 * The text a query is matched against: title, short answer, position, the
 * commitments themselves and the authored keywords. Built once per entry.
 */
const haystacks = new Map<string, string>(
  policyEntries.map((entry) => [
    entry.slug,
    [
      entry.title,
      entry.shortAnswer,
      ...entry.position,
      ...(entry.policies ?? []),
      entry.principle ?? "",
      ...(entry.limits ?? []),
      entry.implementationNote ?? "",
      ...entry.keywords,
      getPolicyCategory(entry.category)?.title ?? "",
    ]
      .join(" ")
      .toLowerCase(),
  ]),
);

export interface PolicyQuery {
  readonly q?: string;
  readonly category?: PolicyCategoryId;
  readonly status?: PolicyStatus;
}

/**
 * Filter the catalogue. Every term in the query must appear somewhere in the
 * entry, so adding words narrows the result rather than widening it.
 */
export function queryPolicyEntries({ q, category, status }: PolicyQuery): readonly PolicyEntry[] {
  const terms = (q ?? "")
    .toLowerCase()
    .split(/\s+/)
    .filter((term) => term.length > 0);

  return getPolicyEntries().filter((entry) => {
    if (category && entry.category !== category) return false;
    if (status && !hasStatus(entry, status)) return false;
    if (terms.length === 0) return true;

    const haystack = haystacks.get(entry.slug) ?? "";
    return terms.every((term) => haystack.includes(term));
  });
}

/** Parse a `?category=` value into a known id, ignoring anything else. */
export function parsePolicyCategory(
  value: string | string[] | undefined,
): PolicyCategoryId | undefined {
  const candidate = Array.isArray(value) ? value[0] : value;
  return policyCategories.find((category) => category.id === candidate)?.id;
}

/** Parse a `?status=` value into a known status, ignoring anything else. */
export function parsePolicyStatus(value: string | string[] | undefined): PolicyStatus | undefined {
  const candidate = Array.isArray(value) ? value[0] : value;
  return policyStatuses.find((status) => status === candidate);
}

export function parseQueryText(value: string | string[] | undefined): string {
  const candidate = Array.isArray(value) ? value[0] : value;
  return (candidate ?? "").trim();
}

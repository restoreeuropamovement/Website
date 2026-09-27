import {
  DEFAULT_MATERIAL_SORT,
  isMaterialCategory,
  isMaterialSort,
  materialCategoryIds,
  type MaterialCategoryId,
  type MaterialSortId,
} from "@/content/materials/structure";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import {
  isMaterialFormatId,
  materialFormatId,
  materialFormatOptions,
  type MaterialFormatId,
} from "@/lib/material-formats";
import type { Material } from "@/lib/materials";

/**
 * Which materials are shown, and in what order.
 *
 * **A module of its own because both sides of the wire run it.** The page reads
 * the catalogue on the server and renders the whole of it; the controls then
 * re-select in the browser, without a round trip. That only works if the two
 * compute the same answer from the same inputs, so the answer is computed by
 * one function rather than by a server one and a client one that look alike.
 *
 * It is separate from `lib/materials.ts` for the reason `lib/material-formats.ts`
 * is: that module imports the Postgres driver, and a client component that
 * imported it would drag the driver into the browser bundle to sort five files.
 * The `Material` type comes from there, which is free — a type import is erased
 * before a bundler ever sees it.
 *
 * The one thing this module must never become is the reason an item appears. A
 * reader with scripting switched off gets the server's render of the default
 * selection, which is every item in the order the database returned them; the
 * filters are an improvement on a complete page, not the mechanism that fills
 * it.
 */

export interface MaterialSelection {
  /** `null` is "every kind", which is not the same as a kind that is empty. */
  readonly category: MaterialCategoryId | null;
  readonly format: MaterialFormatId | null;
  readonly sort: MaterialSortId;
}

/**
 * Whether something is being held back — which is a question about the filters
 * and not about the order.
 *
 * The distinction is the difference between two sentences the page can say. With
 * a kind or a format chosen, some files are not being shown and the count has to
 * admit it: "two of six files match". With only the order changed, all six are
 * still there in a different sequence, and "six of six files match" would be a
 * strange thing to tell somebody who asked for them alphabetically. It is the
 * same reason the "show everything" link appears for one and not the other:
 * everything is already shown.
 */
export function isNarrowed(selection: MaterialSelection): boolean {
  return selection.category !== null || selection.format !== null;
}

type SearchParams = Readonly<Record<string, string | string[] | undefined>>;

/** `?category=a&category=b` is not a thing this page offers; the first wins. */
function first(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

/**
 * Reads a selection out of a query string, and never throws.
 *
 * Every parameter is something a stranger typed — a shared link with a
 * mistake in it, an old bookmark naming a category that has since been
 * removed, a crawler appending rubbish. The reply to each is the default for
 * that one dimension, so the page falls back towards showing more rather than
 * towards an error: an unknown sort is the ordinary order, and an unknown
 * category is every category. A 500 on a public page because somebody edited
 * an address is not a reasonable answer to an address.
 */
export function parseMaterialSelection(params: SearchParams): MaterialSelection {
  const category = first(params.category);
  const format = first(params.format);
  const sort = first(params.sort);

  return {
    category: isMaterialCategory(category) ? category : null,
    format: isMaterialFormatId(format) ? format : null,
    sort: isMaterialSort(sort) ? sort : DEFAULT_MATERIAL_SORT,
  };
}

/**
 * The same selection written back out, so a view can be linked to.
 *
 * The default is the empty string rather than `?sort=newest`, which keeps the
 * canonical address of the page free of parameters — the metadata in both route
 * files declares `/materials` as canonical, and a reader who clears the filters
 * should arrive back at exactly that address rather than at a decorated
 * synonym for it.
 */
export function materialsQuery(selection: MaterialSelection): string {
  const params = new URLSearchParams();
  if (selection.category !== null) params.set("category", selection.category);
  if (selection.format !== null) params.set("format", selection.format);
  if (selection.sort !== DEFAULT_MATERIAL_SORT) params.set("sort", selection.sort);

  const query = params.toString();
  return query === "" ? "" : `?${query}`;
}

/**
 * Titles are English in every edition — they are typed by an administrator, not
 * commissioned as copy — so they are collated as English rather than in the
 * language being read. Naming the locale also matters for a reason that has
 * nothing to do with correctness: `localeCompare` with no argument asks the
 * runtime for its default, and the runtime here is Node during the render and
 * the reader's browser immediately afterwards. Two defaults would be two
 * orders for the same list.
 *
 * `numeric` so that "Poster 2" precedes "Poster 10", which is the order a
 * person filing sheets means by alphabetical.
 */
const byTitle = new Intl.Collator(DEFAULT_LOCALE, { numeric: true });

/**
 * Every order ends on the id, which makes each of them total.
 *
 * Without it, two files uploaded in the same second — a set exported together,
 * which is the normal case — or two of exactly the same size would be left in
 * whatever order `sort` happened to produce. `Array.prototype.sort` is required
 * to be stable, so that would in fact be the input order, and the input order
 * is the database's; but the browser's input is a list that has already been
 * filtered, so "stable" would mean two different things in the two places. A
 * tiebreak on a value that is unique per row removes the question.
 */
const comparators: Readonly<
  Record<MaterialSortId, (a: Material, b: Material) => number>
> = {
  newest: (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  oldest: (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
  title: (a, b) => byTitle.compare(a.title, b.title),
  largest: (a, b) => b.bytes - a.bytes,
  smallest: (a, b) => a.bytes - b.bytes,
};

export function selectMaterials(
  materials: readonly Material[],
  selection: MaterialSelection,
): readonly Material[] {
  const compare = comparators[selection.sort];

  return materials
    .filter(
      (material) =>
        (selection.category === null || material.category === selection.category) &&
        (selection.format === null || materialFormatId(material.contentType) === selection.format),
    )
    .sort((a, b) => compare(a, b) || a.id.localeCompare(b.id));
}

export interface MaterialGroup {
  readonly id: MaterialCategoryId;
  readonly materials: readonly Material[];
}

/**
 * Shelves, in the order `structure.ts` fixed, with the empty ones left out.
 *
 * Grouped rather than laid out as one flat grid, and the sort runs inside each
 * shelf rather than across all of them. A flat grid was the obvious shape for a
 * catalogue with a sort control and was rejected for a specific reason: the
 * note about the blank field for a responsible person belongs above the posters
 * and the stickers and nowhere else, because it is advice about a sheet on a
 * lamp post and not about a wallpaper. Flattening the page would leave that
 * note either at the top, addressed to everybody including the reader who came
 * for a logo, or repeated on every card. Filtering to one kind gives the reader
 * who wants a single sorted list exactly that, which is the case where a global
 * order is actually what was meant.
 *
 * A category with nothing in it is omitted rather than rendered as a heading
 * over a gap: a movement with no posters should show no posters heading, not an
 * empty promise of one. That now also covers a shelf emptied by a filter.
 */
export function groupMaterials(materials: readonly Material[]): readonly MaterialGroup[] {
  return materialCategoryIds
    .map((id) => ({ id, materials: materials.filter((one) => one.category === id) }))
    .filter((group) => group.materials.length > 0);
}

/**
 * The kinds and the formats a control should actually offer.
 *
 * Taken from the whole catalogue rather than from what is currently shown, or
 * choosing one kind would remove the others from the list that changes it. And
 * only what is present, because an option that can only ever produce "nothing
 * matches" is an offer the page cannot keep: while nothing has been uploaded
 * but posters, a PDF filter is a dead end wearing the clothes of a feature.
 */
export function materialCategoriesPresent(
  materials: readonly Material[],
): readonly MaterialCategoryId[] {
  return materialCategoryIds.filter((id) => materials.some((one) => one.category === id));
}

export function materialFormatsPresent(
  materials: readonly Material[],
): readonly MaterialFormatId[] {
  return materialFormatOptions
    .map((option) => option.id)
    .filter((id) => materials.some((one) => materialFormatId(one.contentType) === id));
}

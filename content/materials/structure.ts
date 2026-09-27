/**
 * Downloadable materials: everything about them that is not words.
 *
 * The five category ids are the one part of this domain a database row holds,
 * so they are fixed here rather than in a language file. The reasoning is the
 * same as `member.country`: a `category` column reading "Aufkleber" in some
 * rows and "sticker" in others would split one shelf into two, and no amount
 * of grouping afterwards would put them back together.
 *
 * The order is the order of the page, and it is editorial rather than
 * alphabetical. Logos come first because somebody arriving from an account
 * biography is looking for the mark and nothing else; the two printables sit
 * together in the middle; the screen things come last, because they are the
 * ones nobody needs help finding.
 *
 * Adding a sixth is an entry here plus one label and one note in each of the
 * six language files — a build error until all six are written, which is the
 * point of the split.
 */
export const materialCategoryIds = ["logo", "poster", "sticker", "wallpaper", "social"] as const;

export type MaterialCategoryId = (typeof materialCategoryIds)[number];

/**
 * Narrows a value that arrived from outside the type system.
 *
 * Both callers need it and neither may assume its input. A Server Action is a
 * public endpoint reachable by anything that knows its id, so the category
 * arriving from the upload form is a string somebody chose; and a row may have
 * been written by a version of this list with an entry that has since been
 * removed, which the reader has to survive rather than crash on.
 */
export function isMaterialCategory(value: string): value is MaterialCategoryId {
  return (materialCategoryIds as readonly string[]).includes(value);
}

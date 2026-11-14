import { unstable_cache } from "next/cache";

import { db, hasDatabase } from "@/lib/db";

/**
 * The designs a customer can choose from, as the public page reads them.
 *
 * **Cached, and invalidated by tag rather than by time.** The database is
 * billed for every hour it is awake, and a page that queried it per visit
 * would wake it for every person who glanced at the shop — the failure that
 * switched the reading beacon off. The list changes only when an
 * administrator changes it, so it is read once and kept until
 * `lib/admin/shop-designs.ts` expires `SHOP_DESIGNS_TAG` in the same request
 * that made the change. A visit costs a cache read; an edit costs one query.
 *
 * The cached value carries only what the page shows. The master file's
 * address is not secret, but it is also not something a browser needs, so it
 * stays in the database and is read by checkout and fulfilment directly.
 */

export const SHOP_DESIGNS_TAG = "shop-designs";

export interface ShopDesign {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly previewUrl: string;
}

const readActiveDesigns = unstable_cache(
  async (): Promise<ShopDesign[]> => {
    const rows = await db()<
      { id: string; slug: string; title: string; description: string; preview_url: string }[]
    >`
      SELECT id, slug, title, description, preview_url
        FROM shop_design
       WHERE active
       ORDER BY position, created_at
    `;
    return rows.map((row) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      description: row.description,
      previewUrl: row.preview_url,
    }));
  },
  ["shop-designs-active"],
  { tags: [SHOP_DESIGNS_TAG] },
);

/**
 * The orderable designs, in the administrator's order — or `null` when they
 * cannot be read, which the page says plainly rather than presenting an
 * empty shop as a shop with nothing in it.
 */
export async function activeDesigns(): Promise<readonly ShopDesign[] | null> {
  if (!hasDatabase()) return null;
  try {
    return await readActiveDesigns();
  } catch (error) {
    console.error("[shop] designs could not be read", error);
    return null;
  }
}

/** Everything checkout and the printer need about one design. Read uncached, at the moment of use. */
export interface DesignForOrder {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly active: boolean;
  readonly printUrl: string;
  readonly printSha256: string;
  readonly printContentType: string;
}

export async function designForOrder(where: { slug: string } | { id: string }): Promise<DesignForOrder | null> {
  const sql = db();
  const [row] = await sql<
    {
      id: string;
      slug: string;
      title: string;
      active: boolean;
      print_url: string;
      print_sha256: string;
      print_content_type: string;
    }[]
  >`
    SELECT id, slug, title, active, print_url, print_sha256, print_content_type
      FROM shop_design
     WHERE ${"slug" in where ? sql`slug = ${where.slug}` : sql`id = ${where.id}`}
  `;
  if (!row) return null;

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    active: row.active,
    printUrl: row.print_url,
    printSha256: row.print_sha256,
    printContentType: row.print_content_type,
  };
}

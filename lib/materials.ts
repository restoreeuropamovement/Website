import { isMaterialCategory, type MaterialCategoryId } from "@/content/materials/structure";
import { db, hasDatabase } from "@/lib/db";

/**
 * The catalogue of downloadable materials, as the public site reads it.
 *
 * **This module holds no credential and must never acquire one.** The files
 * live in a Vercel Blob store with public access, so their addresses are
 * already readable by anyone who has one — a token here would buy nothing and
 * would put a write-capable secret into the code path that serves strangers.
 * The public page therefore needs `DATABASE_URL` and nothing else, which keeps
 * true the property the whole env contract exists to keep: the site builds and
 * serves with none of the administrative environment set.
 *
 * Writing is the other half, in `lib/admin/materials.ts`, and that half does
 * hold the token. The split is the one `lib/journal.ts` makes against
 * `lib/admin/journal.ts`, for the same reason.
 */

/**
 * Re-exported for server callers, so a page that wants a format's name does
 * not have to know which of two modules it is in. The list itself lives in a
 * module free of any database import, because the upload form is a client
 * component and reads it too — and so, now, is the public catalogue's grid.
 */
export {
  formatMaterialSize,
  isMaterialContentType,
  materialAccept,
  materialFormatLabel,
  materialFormatLabels,
  materialFormats,
  materialLimitMegabytes,
  materialLimits,
} from "@/lib/material-formats";

export interface Material {
  readonly id: string;
  /** Written by an administrator, in English. See `content/materials/en.ts`. */
  readonly title: string;
  readonly description: string;
  readonly category: MaterialCategoryId;
  /**
   * Where the object lives. Not what the page links to — see `downloadUrl` —
   * but the address that identifies this blob, and the one the withdrawal path
   * hands back to the provider.
   */
  readonly url: string;
  /**
   * The address that makes a browser save the file rather than display it.
   *
   * Stored rather than composed from `url`, because the relationship between
   * the two is the provider's to define: today it is the same address with a
   * query parameter on it, and a line here that assumed so would be a guess at
   * somebody else's URL scheme that keeps working until the day it does not.
   * `<a download>` is not an alternative — browsers ignore the attribute
   * across origins, which is exactly the case this is.
   */
  readonly downloadUrl: string;
  /**
   * The object's key within the store. Nothing renders it; it is here so that
   * a row and the store can be matched up by a person when the two get out of
   * step, which is the failure mode this arrangement actually has.
   */
  readonly pathname: string;
  readonly contentType: string;
  readonly bytes: number;
  readonly createdAt: Date;
}

/** One row as the driver hands it back. Exported so the admin half can use it. */
export interface MaterialRow {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly url: string;
  readonly download_url: string;
  readonly pathname: string;
  readonly content_type: string;
  readonly bytes: string;
  readonly created_at: Date;
}

export const materialColumns = `id, title, description, category, url, download_url,
                                pathname, content_type, bytes::text, created_at`;

/**
 * A row as the pages want it.
 *
 * `bytes` arrives as text because the column is `bigint` and the driver will
 * not silently narrow one; it is cast back here, where the value is known to
 * be a file size rather than something that could exceed a safe integer.
 *
 * An unrecognised category yields `null` rather than throwing. The categories
 * are an editorial list that will be edited, and a row left behind by an entry
 * somebody removed is a file to be re-filed — not a reason for a public page
 * to fail.
 */
export function materialFromRow(row: MaterialRow): Material | null {
  if (!isMaterialCategory(row.category)) return null;

  return {
    id: row.id,
    title: row.title,
    description: row.description,
    category: row.category,
    url: row.url,
    downloadUrl: row.download_url,
    pathname: row.pathname,
    contentType: row.content_type,
    bytes: Number(row.bytes),
    createdAt: row.created_at,
  };
}

/**
 * Everything published, newest first — or `null` when there is no database.
 *
 * The two must not collapse into an empty array, on the reasoning that keeps
 * "no address recorded" apart from "address encrypted" on the gatherings page.
 * "Nobody has made one yet" and "this deployment cannot see the catalogue" are
 * different sentences, and printing the first when the second is true would be
 * a confident falsehood about the movement's own output.
 */
export async function publishedMaterials(): Promise<readonly Material[] | null> {
  if (!hasDatabase()) return null;

  const sql = db();
  const rows = await sql<MaterialRow[]>`
    SELECT ${sql.unsafe(materialColumns)}
      FROM material
     ORDER BY created_at DESC
  `;

  return rows.map(materialFromRow).filter((material) => material !== null);
}

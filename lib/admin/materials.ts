import { del, put } from "@vercel/blob";

import { isMaterialCategory } from "@/content/materials/structure";
import { blobToken } from "@/lib/admin/env";
import { db } from "@/lib/db";
import {
  isMaterialContentType,
  materialFormatLabels,
  materialFormats,
  materialLimitMegabytes,
  materialLimits,
} from "@/lib/material-formats";
import {
  materialColumns,
  materialFromRow,
  type Material,
  type MaterialRow,
} from "@/lib/materials";
import { slugify } from "@/lib/utils";

/**
 * Writing the catalogue of downloadable materials.
 *
 * This is the half that holds `BLOB_READ_WRITE_TOKEN`. Nothing under
 * `app/(site)` may import it, and nothing in it is needed to render the public
 * page: the objects are stored with public access, so reading them is a URL
 * and a database row rather than a credential.
 *
 * Two files rather than one, and the seam is the token. A single module would
 * put a write-capable secret one import away from every public page that
 * wanted to list a poster, and "nothing imports it from there" is a rule kept
 * by attention rather than by the compiler.
 *
 * **Nothing here is encrypted, and nothing here should be.** Every byte of it
 * is published deliberately: the file to anyone who follows the link, the
 * title and description to anyone who loads the page. Encrypting a public
 * poster would be theatre, and — worse — would put this table in the same
 * visual category as `member`, where the encryption means something.
 */

export interface MaterialDraft {
  readonly title: string;
  readonly description: string;
  /** Raw from the form. Narrowed by `validateMaterial`, never trusted before. */
  readonly category: string;
  readonly file: File | null;
}

/**
 * Checked on the server, because the server is the only place a check counts.
 *
 * A Server Action is a public endpoint with a stable identifier: anything that
 * knows the id can post to it without ever having loaded the form, so the
 * `accept` attribute and the `maxLength` on the inputs are conveniences for
 * whoever is using the page and controls over nobody.
 *
 * The content type is what the browser claimed it is, and that is worth being
 * plain about: it is not a proof, and no amount of sniffing would make it one
 * against the only person who can reach this action, who is an administrator
 * holding an enrolled passkey. What the closed list buys is narrower and still
 * worth having — the store is never asked to hold a type nobody chose, and the
 * extension under which it is served is ours rather than the uploader's.
 */
export function validateMaterial(draft: MaterialDraft): readonly string[] {
  const errors: string[] = [];

  if (draft.title.length < 2 || draft.title.length > materialLimits.title) {
    errors.push(`Give it a title, up to ${materialLimits.title} characters.`);
  }
  if (draft.description.length > materialLimits.description) {
    errors.push(`The description is limited to ${materialLimits.description} characters.`);
  }
  if (!isMaterialCategory(draft.category)) {
    errors.push("Choose which kind of material this is.");
  }

  const file = draft.file;
  if (!file || file.size === 0) {
    errors.push("Choose a file.");
    return errors;
  }
  if (!isMaterialContentType(file.type)) {
    errors.push(
      `That is a ${file.type || "file of unknown type"}. Accepted: ${materialFormatLabels.join(", ")}.`,
    );
  }
  if (file.size > materialLimits.bytes) {
    errors.push(
      `The file is larger than ${materialLimitMegabytes} MB, which is as much as an upload through this form can carry.`,
    );
  }

  return errors;
}

/**
 * Where the object goes in the store.
 *
 * The stem is slugified because the name comes off somebody's disk and ends up
 * in a public URL, spaces, accents, apostrophes and all. The extension is
 * taken from the validated content type rather than from that name, so the two
 * cannot disagree about what the file is — the name is a claim and the type
 * has at least been checked against a closed list.
 *
 * `addRandomSuffix` because two posters called `a2.pdf` are not a collision to
 * be resolved, they are two posters; without it the second would be refused,
 * and with `allowOverwrite` it would silently replace the first.
 */
function objectName(category: string, file: File, contentType: string): string {
  const base = (file.name.split(/[\\/]/).pop() ?? "").replace(/\.[^.]+$/, "");
  const stem = slugify(base) || "material";
  const extension = isMaterialContentType(contentType)
    ? materialFormats[contentType].extension
    : "bin";

  return `materials/${category}/${stem}.${extension}`;
}

/**
 * Uploads the file and records the row.
 *
 * In that order, and with the upload undone if the row cannot be written. The
 * two stores can fail independently and only one arrangement is recoverable:
 * an object with no row is invisible to readers and can be cleaned up from the
 * store, while a row with no object is a download link on a public page that
 * answers 404. So the compensating delete runs on the way out of the failure,
 * and the error goes on to the caller rather than being reported as a success
 * with a footnote.
 */
export async function storeMaterial(
  draft: MaterialDraft,
): Promise<{ id: string; contentType: string; bytes: number }> {
  const file = draft.file;
  if (!file) throw new Error("No file was submitted.");

  const contentType = file.type;
  const uploaded = await put(objectName(draft.category, file, contentType), file, {
    access: "public",
    addRandomSuffix: true,
    contentType,
    token: blobToken(),
  });

  try {
    const [row] = await db()<{ id: string }[]>`
      INSERT INTO material
        (title, description, category, url, download_url, pathname, content_type, bytes)
      VALUES (
        ${draft.title}, ${draft.description}, ${draft.category},
        ${uploaded.url}, ${uploaded.downloadUrl}, ${uploaded.pathname},
        ${contentType}, ${file.size}
      )
      RETURNING id
    `;
    if (!row) throw new Error("The material was not written.");
    return { id: row.id, contentType, bytes: file.size };
  } catch (error) {
    await del(uploaded.url, { token: blobToken() }).catch(() => {
      // Both halves failed. The row is what matters and it does not exist, so
      // the caller is told the truth; the object is left for the store's own
      // listing to show, which is the reason `pathname` is a column.
      console.error("[admin][materials] orphaned object", uploaded.pathname);
    });
    throw error;
  }
}

/** Everything, newest first. Drafts do not exist here: an upload is published. */
export async function listMaterials(): Promise<readonly Material[]> {
  const sql = db();
  const rows = await sql<MaterialRow[]>`
    SELECT ${sql.unsafe(materialColumns)}
      FROM material
     ORDER BY created_at DESC
  `;

  return rows.map(materialFromRow).filter((material) => material !== null);
}

/**
 * Withdraws one material: the object first, then the row.
 *
 * The order is chosen for the failure, not the success. Object first means a
 * failed delete leaves both halves present and consistent, and the
 * administrator sees an error against a page that still shows the file. Row
 * first would mean a failed object delete left a live public URL with nothing
 * left in the database pointing at it — unlistable, unfindable, and still
 * being served.
 *
 * The window between the two calls is a public page offering a link to an
 * object that has gone. It is one round trip wide, and the repair is to press
 * the button again: the provider treats deleting an absent object as done
 * rather than as an error, so the retry reaches the row.
 *
 * Returns what the audit entry needs, or `null` if the row had already gone —
 * two people with the panel open is the ordinary way that happens, and it is
 * not worth an exception.
 */
export async function removeMaterial(
  id: string,
): Promise<{ category: string; pathname: string } | null> {
  const sql = db();

  const [row] = await sql<{ category: string; url: string; pathname: string }[]>`
    SELECT category, url, pathname FROM material WHERE id = ${id}
  `;
  if (!row) return null;

  await del(row.url, { token: blobToken() });
  await sql`DELETE FROM material WHERE id = ${id}`;

  return { category: row.category, pathname: row.pathname };
}

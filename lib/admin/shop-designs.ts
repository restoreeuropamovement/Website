import { del, put } from "@vercel/blob";
import { revalidateTag } from "next/cache";

import { blobToken } from "@/lib/admin/env";
import { db } from "@/lib/db";
import {
  designLimits,
  designPreviewFormats,
  designPrintFormats,
  isDesignPreviewType,
  isDesignPrintType,
} from "@/lib/shop/design-formats";
import { SHOP_DESIGNS_TAG } from "@/lib/shop/designs";
import { slugify } from "@/lib/utils";

/**
 * Writing the shop's designs. Holds the Blob token, like
 * `lib/admin/materials.ts`, and for the same reason nothing under
 * `app/(site)` may import it.
 *
 * Nothing here is encrypted. A sticker design is published the moment it is
 * switched on, and a customer is looking at it before they pay.
 */

export interface ShopDesignDraft {
  readonly title: string;
  readonly description: string;
  readonly preview: File | null;
  readonly print: File | null;
}

export function validateShopDesign(draft: ShopDesignDraft): readonly string[] {
  const errors: string[] = [];
  const mb = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

  if (draft.title.length < 2 || draft.title.length > designLimits.title) {
    errors.push(`Give it a title, up to ${designLimits.title} characters.`);
  }
  if (draft.description.length > designLimits.description) {
    errors.push(`The description is limited to ${designLimits.description} characters.`);
  }

  const { preview, print } = draft;
  if (!preview || preview.size === 0) {
    errors.push("Choose the preview image customers will see.");
  } else {
    if (!isDesignPreviewType(preview.type)) errors.push("The preview must be a PNG, JPEG or WebP image.");
    if (preview.size > designLimits.previewBytes) {
      errors.push(`The preview is larger than ${mb(designLimits.previewBytes)}; export a smaller one.`);
    }
  }

  if (!print || print.size === 0) {
    errors.push("Choose the print-ready master file.");
  } else {
    if (!isDesignPrintType(print.type)) errors.push("The master must be a PDF, PNG or JPEG.");
    if (print.size > designLimits.printBytes) {
      errors.push(
        `The master is larger than ${mb(designLimits.printBytes)}, which is as much as this form can carry beside the preview.`,
      );
    }
  }

  return errors;
}

async function sha256Hex(file: File): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", await file.arrayBuffer());
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

/** A slug no other design has, derived from the title. */
async function freeSlug(title: string): Promise<string> {
  const base = slugify(title) || "sticker";
  const taken = new Set(
    (
      await db()<{ slug: string }[]>`
        SELECT slug FROM shop_design WHERE slug = ${base} OR slug LIKE ${`${base}-%`}
      `
    ).map((row) => row.slug),
  );
  if (!taken.has(base)) return base;
  for (let n = 2; ; n += 1) {
    if (!taken.has(`${base}-${n}`)) return `${base}-${n}`;
  }
}

/**
 * Uploads both files and records the design, switched off.
 *
 * Off, so an upload can be checked on the admin page — the preview looked at,
 * the master opened — before any customer can choose it. The compensating
 * deletes follow the reasoning in `storeMaterial`: an object with no row is
 * invisible and can be cleaned up, a row with no object is a broken order.
 */
export async function storeShopDesign(draft: ShopDesignDraft): Promise<{ id: string; slug: string }> {
  const { preview, print } = draft;
  if (!preview || !print || !isDesignPreviewType(preview.type) || !isDesignPrintType(print.type)) {
    throw new Error("The design was not validated before it was stored.");
  }

  const slug = await freeSlug(draft.title);
  const digest = await sha256Hex(print);
  const token = blobToken();

  const storedPreview = await put(
    `shop/previews/${slug}.${designPreviewFormats[preview.type].extension}`,
    preview,
    { access: "public", addRandomSuffix: true, contentType: preview.type, token },
  );

  let storedPrint: Awaited<ReturnType<typeof put>> | null = null;
  try {
    storedPrint = await put(
      `shop/print/${slug}.${designPrintFormats[print.type].extension}`,
      print,
      { access: "public", addRandomSuffix: true, contentType: print.type, token },
    );

    const [row] = await db()<{ id: string }[]>`
      INSERT INTO shop_design
        (slug, title, description, preview_url, preview_pathname,
         print_url, print_pathname, print_content_type, print_bytes, print_sha256, active, position)
      VALUES (
        ${slug}, ${draft.title}, ${draft.description},
        ${storedPreview.url}, ${storedPreview.pathname},
        ${storedPrint.url}, ${storedPrint.pathname}, ${print.type}, ${print.size}, ${digest},
        false,
        (SELECT COALESCE(MAX(position), 0) + 1 FROM shop_design)
      )
      RETURNING id
    `;
    if (!row) throw new Error("The design was not written.");
    return { id: row.id, slug };
  } catch (error) {
    await Promise.all(
      [storedPreview.url, storedPrint?.url]
        .filter((url): url is string => Boolean(url))
        .map((url) =>
          del(url, { token }).catch(() => console.error("[admin][shop] orphaned object", url)),
        ),
    );
    throw error;
  }
}

export interface AdminShopDesign {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly previewUrl: string;
  readonly printUrl: string;
  readonly printContentType: string;
  readonly printBytes: number;
  readonly printSha256: string;
  readonly active: boolean;
  readonly position: number;
  readonly orders: number;
  readonly createdAt: Date;
}

export async function listShopDesigns(): Promise<readonly AdminShopDesign[]> {
  const rows = await db()<
    {
      id: string;
      slug: string;
      title: string;
      description: string;
      preview_url: string;
      print_url: string;
      print_content_type: string;
      print_bytes: string;
      print_sha256: string;
      active: boolean;
      position: number;
      orders: string;
      created_at: Date;
    }[]
  >`
    SELECT d.id, d.slug, d.title, d.description, d.preview_url, d.print_url, d.print_content_type,
           d.print_bytes::text, d.print_sha256, d.active, d.position, d.created_at,
           (SELECT count(*) FROM shop_order o WHERE o.design_id = d.id)::text AS orders
      FROM shop_design d
     ORDER BY d.position, d.created_at
  `;

  return rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    previewUrl: row.preview_url,
    printUrl: row.print_url,
    printContentType: row.print_content_type,
    printBytes: Number(row.print_bytes),
    printSha256: row.print_sha256,
    active: row.active,
    position: row.position,
    orders: Number(row.orders),
    createdAt: row.created_at,
  }));
}

/** The public page reads designs through a cache; every change here expires it at once. */
function expirePublicList(): void {
  revalidateTag(SHOP_DESIGNS_TAG, { expire: 0 });
}

export async function setShopDesignActive(id: string, active: boolean): Promise<boolean> {
  const rows = await db()`
    UPDATE shop_design SET active = ${active}, updated_at = now() WHERE id = ${id} RETURNING id
  `;
  expirePublicList();
  return rows.length > 0;
}

/** Swaps a design with its neighbour in the listing. */
export async function moveShopDesign(id: string, direction: "up" | "down"): Promise<void> {
  await db().begin(async (tx) => {
    const ordered = await tx<{ id: string }[]>`
      SELECT id FROM shop_design ORDER BY position, created_at FOR UPDATE
    `;
    const index = ordered.findIndex((row) => row.id === id);
    const other = index + (direction === "up" ? -1 : 1);
    if (index < 0 || other < 0 || other >= ordered.length) return;

    const ids = ordered.map((row) => row.id);
    [ids[index], ids[other]] = [ids[other]!, ids[index]!];
    for (const [position, designId] of ids.entries()) {
      await tx`UPDATE shop_design SET position = ${position + 1}, updated_at = now() WHERE id = ${designId}`;
    }
  });
  expirePublicList();
}

/**
 * Deletes a design that nobody has ordered, files first.
 *
 * A design with orders is never deleted — the order would no longer be able
 * to say what was bought, and the printer's reprint of it would have no
 * master. It is switched off instead, which takes it out of the shop just as
 * completely.
 */
export async function removeShopDesign(
  id: string,
): Promise<{ removed: true; slug: string } | { removed: false; reason: "missing" | "ordered" }> {
  const sql = db();
  const [row] = await sql<{ slug: string; preview_url: string; print_url: string; orders: string }[]>`
    SELECT slug, preview_url, print_url,
           (SELECT count(*) FROM shop_order WHERE design_id = ${id})::text AS orders
      FROM shop_design WHERE id = ${id}
  `;
  if (!row) return { removed: false, reason: "missing" };
  if (Number(row.orders) > 0) return { removed: false, reason: "ordered" };

  const token = blobToken();
  await del([row.preview_url, row.print_url], { token });
  await sql`DELETE FROM shop_design WHERE id = ${id}`;
  expirePublicList();
  return { removed: true, slug: row.slug };
}

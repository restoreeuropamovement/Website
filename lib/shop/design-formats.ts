/**
 * What a design upload may contain, shared by the upload form (a client
 * component) and the action that checks it. Free of any database import for
 * the reason `lib/material-formats.ts` is.
 *
 * Two files with two jobs, and the limits are set by the one request that
 * carries both: a Server Action body is capped at 4.5 MB in `next.config.ts`,
 * because the platform refuses anything larger before this code runs.
 */

/**
 * The picture a customer chooses from. Raster only, so it always goes through
 * `next/image` and is served from this origin — an SVG would need the
 * content security policy widened to the store, and a preview is not worth it.
 */
export const designPreviewFormats = {
  "image/png": { label: "PNG", extension: "png" },
  "image/jpeg": { label: "JPEG", extension: "jpg" },
  "image/webp": { label: "WebP", extension: "webp" },
} as const;

/**
 * The master the printer receives. PDF is what online printers ask for; PNG
 * and JPEG are accepted because some do take them and the movement's existing
 * artwork is a JPEG, but a raster master is RGB unless somebody converted it,
 * and colour on the sticker will shift accordingly. See
 * docs/sticker-shop-feasibility.md, "Artwork".
 */
export const designPrintFormats = {
  "application/pdf": { label: "PDF", extension: "pdf" },
  "image/png": { label: "PNG", extension: "png" },
  "image/jpeg": { label: "JPEG", extension: "jpg" },
} as const;

export type DesignPreviewType = keyof typeof designPreviewFormats;
export type DesignPrintType = keyof typeof designPrintFormats;

export function isDesignPreviewType(value: string): value is DesignPreviewType {
  return Object.hasOwn(designPreviewFormats, value);
}

export function isDesignPrintType(value: string): value is DesignPrintType {
  return Object.hasOwn(designPrintFormats, value);
}

export const designLimits = {
  title: 80,
  description: 280,
  previewBytes: 900 * 1024,
  printBytes: 3400 * 1024,
} as const;

export const designPreviewAccept = Object.keys(designPreviewFormats).join(",");
export const designPrintAccept = Object.keys(designPrintFormats).join(",");

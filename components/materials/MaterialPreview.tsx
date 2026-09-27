import Image from "next/image";

import { materialFormatLabel, materialPreviewKind } from "@/lib/material-formats";
import type { Material } from "@/lib/materials";

interface MaterialPreviewProps {
  readonly material: Material;
  /** Derived from the item's title. Never the word "preview" on its own. */
  readonly alt: string;
  /** Shown instead of a picture, on a format that has none. */
  readonly noPreview: string;
  readonly sizes: string;
}

/**
 * One thumbnail, filling a frame the caller has already sized and positioned.
 *
 * Every branch absolutely positions itself inside that frame, so a shelf of
 * PDFs, a shelf of logos and a shelf of photographs are all grids of tiles the
 * same shape. That is the point of doing it this way rather than letting each
 * file size its own box: a category with nothing previewable in it has to look
 * deliberate, not broken.
 *
 * The files are served by a Vercel Blob store on
 * `*.public.blob.vercel-storage.com`, which is why `next.config.ts` now admits
 * that host to `img-src` and to `images.remotePatterns`. Neither change is
 * needed by both branches below, and it is worth knowing which is which:
 * `next/image` rewrites its `src` to `/_next/image` on this origin, so the
 * raster branch needs only `remotePatterns`; the vector branch fetches the
 * store directly, so it needs only `img-src`.
 */
export function MaterialPreview({ material, alt, noPreview, sizes }: MaterialPreviewProps) {
  const kind = materialPreviewKind(material.contentType);

  /*
   * `object-contain` rather than `object-cover` throughout, with padding around
   * it. A logo is a shape with margins that are part of the drawing and a
   * poster is a composition with a title at the top; cropping either to fill a
   * tile would show the reader something the file is not. Empty space in the
   * frame is the correct answer to "this artwork is not 4:3".
   */
  if (kind === "raster") {
    return (
      <Image
        src={material.url}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain p-5"
        /* Below the fold on all but the first row, and this page is a grid. */
        loading="lazy"
      />
    );
  }

  if (kind === "vector") {
    /*
     * A plain `<img>`, unoptimised, deliberately. `next/image` refuses to
     * process an SVG unless `dangerouslyAllowSVG` is set, and setting it would
     * open the optimiser to SVGs from every caller in the project to solve a
     * problem that exists on one page.
     *
     * The usual objection to an SVG from elsewhere is that it is a document
     * which can carry script. It does not reach this position: an SVG loaded
     * as an image cannot run script at all — no browser executes it, and the
     * content security policy would not permit it if one tried — and the store
     * answers on a host that shares no origin, no cookie and no session with
     * this site. What is being trusted here is also narrower than it looks:
     * the address comes from a database row written by `storeMaterial`, from
     * the store's own reply to an upload by an administrator holding an
     * enrolled passkey.
     */
    return (
      // eslint-disable-next-line @next/next/no-img-element -- see above: next/image cannot render an SVG without dangerouslyAllowSVG.
      <img
        src={material.url}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-contain p-5"
      />
    );
  }

  /*
   * A PDF. `frame-src` is `'none'` in both policies, so it cannot be embedded,
   * and nothing here will render its first page — so the tile says what the
   * file is and says plainly that there is no picture of it, which is more use
   * to somebody about to spend four megabytes than a grey rectangle would be.
   * The format label is not translated; "PDF" is the same word in six
   * languages, which is why it lives in `lib/material-formats.ts`.
   *
   * Set in the smallest type on the page rather than the largest, so that the
   * tile reads as a label and not as an error, and so that the same component
   * still fits the ninety-six-pixel thumbnail on `/admin/materials`.
   */
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-2 text-center">
      <span className="eyebrow text-muted">{materialFormatLabel(material.contentType)}</span>
      <span className="text-micro text-faint">{noPreview}</span>
    </div>
  );
}

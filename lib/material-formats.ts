/**
 * What may be uploaded, what each format is called, and how big it may be.
 *
 * A module of its own, free of any database import, for the same reason
 * `lib/journal-categories.ts` is one: the upload form is a client component
 * and needs this list, and importing it from `lib/materials.ts` would drag the
 * Postgres driver into the browser bundle to fetch five strings.
 *
 * One object rather than an allow-list beside a label table, so that a format
 * the page can name is exactly a format the action will accept. Two lists
 * would drift, and the direction they drift in is a file that uploads happily
 * and then renders with a blank type beside it.
 *
 * `extension` is not decoration. The name a browser gives an uploaded file is
 * whatever happened to be on somebody's disk, and it ends up in a public URL;
 * the extension written to the store is taken from this table instead, keyed
 * by the content type that was validated, so the store is never asked to hold
 * an `.html` that claims to be a PNG.
 *
 * SVG is on the list because a logo pack without vectors is not a logo pack.
 * The usual objection — that an SVG is a document which can carry script —
 * does not reach this case: the store answers on
 * `*.public.blob.vercel-storage.com`, which shares no origin, no cookie and no
 * session with this site, so the worst such a file could do is misbehave in a
 * tab of its own. The uploader is in any case an administrator who has already
 * touched an enrolled passkey.
 *
 * Format names are the same word in all six languages, which is why they live
 * here and not in a dictionary. "PDF" is not translated; "Posters" is.
 */
export const materialFormats = {
  "image/svg+xml": { label: "SVG", extension: "svg" },
  "image/png": { label: "PNG", extension: "png" },
  "image/jpeg": { label: "JPEG", extension: "jpg" },
  "image/webp": { label: "WebP", extension: "webp" },
  "application/pdf": { label: "PDF", extension: "pdf" },
} as const;

export type MaterialContentType = keyof typeof materialFormats;

export function isMaterialContentType(value: string): value is MaterialContentType {
  return value in materialFormats;
}

/** "PDF", "SVG" — or the raw type, for a row written before this list moved. */
export function materialFormatLabel(contentType: string): string {
  return isMaterialContentType(contentType) ? materialFormats[contentType].label : contentType;
}

/** Every accepted format's short name, for a sentence listing them. */
export const materialFormatLabels: readonly string[] = Object.values(materialFormats).map(
  (format) => format.label,
);

/**
 * The `accept` attribute for the upload control.
 *
 * A courtesy to whoever is choosing a file and nothing more: it changes which
 * files a picker offers, and is trivially bypassed by anything that posts to
 * the action directly. The control that counts is `validateMaterial`.
 */
export const materialAccept = Object.keys(materialFormats).join(",");

/**
 * The bounds, and why each one is where it is.
 *
 * `bytes` is the interesting one, and it is not a taste judgement. A Server
 * Action is an ordinary POST to a serverless function, and the platform caps a
 * function's request body at 4.5 MB before any of this code runs — so a
 * ceiling above that would be a promise the host breaks, and it would break it
 * in production while working perfectly on a laptop. Four megabytes leaves
 * room for what `multipart/form-data` adds around the file, and
 * `next.config.ts` raises the framework's own 1 MB default to match.
 *
 * That is a real limit on what can be published: an A2 poster rasterised at
 * print resolution will not fit. The way past it is the client upload path,
 * where the browser sends the file to the store directly and the server only
 * signs for it — a different shape of feature with a different audit story,
 * deliberately not built here on the strength of a guess about poster sizes.
 * A vector PDF, which is what a printable poster ought to be, is small.
 */
export const materialLimits = {
  title: 120,
  description: 300,
  bytes: 4 * 1024 * 1024,
} as const;

/** The ceiling as the form and the refusal message both want to print it. */
export const materialLimitMegabytes = materialLimits.bytes / (1024 * 1024);

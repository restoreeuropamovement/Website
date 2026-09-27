import type { Locale } from "@/lib/i18n";

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
 *
 * `preview` says how — and whether — a file of this type can be shown as a
 * thumbnail on `/materials`. Three values rather than a boolean, because the
 * two that can be previewed are not previewed the same way:
 *
 *   - `raster` goes through `next/image`, which downscales it on this origin.
 *     That matters rather than being tidy: the ceiling here is four megabytes,
 *     and a grid of full-size posters would be a page weighing tens of them.
 *   - `vector` is rendered by a plain `<img>`, unoptimised. `next/image` will
 *     not touch an SVG without `dangerouslyAllowSVG`, and that flag is not
 *     going to be set — it would admit SVGs into the optimiser for every
 *     caller, not just this one.
 *   - `none` is PDF, and it is honest rather than missing. `frame-src` is
 *     `'none'` in both of this project's content security policies, so a PDF
 *     cannot be embedded here at all, and there is no first page of it to be
 *     had without rendering one. The page says "PDF, no preview" and shows a
 *     tile of the same size as every other, which is the one answer that is
 *     neither a broken image nor an invented picture of somebody's poster.
 */
export const materialFormats = {
  "image/svg+xml": { label: "SVG", extension: "svg", preview: "vector" },
  "image/png": { label: "PNG", extension: "png", preview: "raster" },
  "image/jpeg": { label: "JPEG", extension: "jpg", preview: "raster" },
  "image/webp": { label: "WebP", extension: "webp", preview: "raster" },
  "application/pdf": { label: "PDF", extension: "pdf", preview: "none" },
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

export type MaterialPreviewKind = (typeof materialFormats)[MaterialContentType]["preview"];

/**
 * How to show this file, if at all.
 *
 * An unrecognised content type gets `none` rather than a guess. A row written
 * by a version of this table that has since been edited is a file whose type
 * nothing here can vouch for, and the safe reading of "I do not know what this
 * is" is not "hand it to an image tag".
 */
export function materialPreviewKind(contentType: string): MaterialPreviewKind {
  return isMaterialContentType(contentType) ? materialFormats[contentType].preview : "none";
}

/**
 * The format filter's ids, which are the extensions already in the table.
 *
 * `?format=svg` rather than `?format=image%2Fsvg%2Bxml`: a content type is a
 * MIME identifier and reads like one in an address bar, and the extension is
 * already the short, stable, url-safe name of the same thing. Deriving them
 * from this table rather than writing a second list in
 * `content/materials/structure.ts` is deliberate — two lists of the five
 * formats would eventually disagree, and the way they would disagree is a
 * filter offering a format the upload form no longer accepts.
 */
export type MaterialFormatId = (typeof materialFormats)[MaterialContentType]["extension"];

export interface MaterialFormatOption {
  readonly id: MaterialFormatId;
  readonly label: string;
}

export const materialFormatOptions: readonly MaterialFormatOption[] = Object.values(
  materialFormats,
).map((format) => ({ id: format.extension, label: format.label }));

export function isMaterialFormatId(value: string): value is MaterialFormatId {
  return materialFormatOptions.some((option) => option.id === value);
}

/** The filter id a stored row falls under, or `null` for a type not in the table. */
export function materialFormatId(contentType: string): MaterialFormatId | null {
  return isMaterialContentType(contentType) ? materialFormats[contentType].extension : null;
}

/**
 * A file's size, in the reader's own language.
 *
 * `Intl.NumberFormat` rather than a hand-written suffix, so a French reader
 * gets "1,2 Mo" and a German one "1,2 MB" without either string existing in a
 * language file. A size is a number with a unit, and both of those belong to
 * the locale rather than to a translator.
 *
 * Thousands, not 1024. The symbol printed is kB, and kB means a thousand
 * bytes; taking the binary step while printing the decimal symbol is the small
 * lie that makes a downloaded file look the wrong size beside what the
 * operating system says about it afterwards.
 *
 * Here rather than in `lib/materials.ts`, where it used to be, because the
 * catalogue's cards are rendered in the browser and that module imports the
 * Postgres driver. Same reason the rest of this file is a file of its own.
 */
export function formatMaterialSize(locale: Locale, bytes: number): string {
  const [unit, value] =
    bytes >= 1_000_000
      ? (["megabyte", bytes / 1_000_000] as const)
      : bytes >= 1_000
        ? (["kilobyte", bytes / 1_000] as const)
        : (["byte", bytes] as const);

  return new Intl.NumberFormat(locale, {
    style: "unit",
    unit,
    unitDisplay: "short",
    /* One decimal place while it still means something: "1.2 MB" is useful,
       "1,234.6 kB" is noise. */
    maximumFractionDigits: unit !== "byte" && value < 10 ? 1 : 0,
  }).format(value);
}

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

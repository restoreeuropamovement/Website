import type { ImageSlot } from "@/lib/content-types";
import { createDictionary } from "@/lib/dictionary";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { imageText as englishText, journalImageText } from "./en";
import {
  imageGeometry,
  imageIds,
  journalImageGeometry,
  type ImageId,
  type JournalImageId,
} from "./structure";

/**
 * Photographs, joined to the words that describe them.
 *
 * Alternative text is content, not configuration. It is the only form in which
 * a blind reader receives the picture at all, so leaving it in English would
 * have meant six translated pages of which one paragraph each — the one nobody
 * sighted ever notices — was still in another language.
 *
 * The join happens here for the same reason it does in every other module: the
 * path and the dimensions are structure, the sentence is words, and a
 * translator who can reach the path can break an image.
 */

export { imageGeometry, imageIds, journalImageGeometry } from "./structure";
export type { ImageGeometry, ImageId, JournalImageId } from "./structure";

export interface ImageText {
  /**
   * What is in each photograph, in a sentence.
   *
   * Describe the picture, not the argument it illustrates: somebody using a
   * screen reader is entitled to the same view out of the window as everybody
   * else, and a slogan in place of a description is both less informative and
   * less honest.
   */
  readonly alt: Record<ImageId, string>;
}

export type ImageEdition = Readonly<Record<ImageId, ImageSlot>>;

const getImageText = createDictionary<ImageText>(englishText, {
  de: () => import("./de").then((m) => m.imageText),
  fr: () => import("./fr").then((m) => m.imageText),
  pl: () => import("./pl").then((m) => m.imageText),
  it: () => import("./it").then((m) => m.imageText),
  es: () => import("./es").then((m) => m.imageText),
});

function edition(text: ImageText): ImageEdition {
  return Object.fromEntries(
    imageIds.map((id) => [id, { ...imageGeometry[id], alt: text.alt[id] }]),
  ) as ImageEdition;
}

/** One edition per language, built once. Both inputs are frozen modules. */
const editions = new Map<Locale, ImageEdition>();

export async function getImages(locale: Locale): Promise<ImageEdition> {
  const cached = editions.get(locale);
  if (cached !== undefined) return cached;
  const built = edition(await getImageText(locale));
  editions.set(locale, built);
  return built;
}

/** English, for the places that have no locale in hand. */
export const englishImages: ImageEdition = edition(englishText);

editions.set(DEFAULT_LOCALE, englishImages);

/** The journal's heroes. English only, like the journal. */
export const journalImages: Readonly<Record<JournalImageId, ImageSlot>> = Object.fromEntries(
  (Object.keys(journalImageGeometry) as JournalImageId[]).map((id) => [
    id,
    { ...journalImageGeometry[id], alt: journalImageText.alt[id] },
  ]),
) as Readonly<Record<JournalImageId, ImageSlot>>;

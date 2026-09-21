import type { ImageSlot } from "@/lib/content-types";
import { images } from "@/content/images";

/**
 * Everything about the sixteen principles that is *not* words.
 *
 * Numbering, anchor ids, the manifesto section each draws on and the few
 * images live here and are shared by every language. A translation file
 * supplies text only, so no translator can renumber a principle, break an
 * in-page anchor, or point "In the manifesto" at the wrong section.
 *
 * The order of this array is the order the page renders.
 */
export interface PrincipleStructure {
  /** Anchor id. Also the key every translation is written against. */
  readonly id: string;
  readonly number: number;
  /** Manifesto section this principle draws on, by `ManifestoSectionData.id`. */
  readonly manifesto?: string;
  readonly image?: ImageSlot;
}

export const principleStructure: readonly PrincipleStructure[] = [
  { id: "moral-order", number: 1, manifesto: "moral-order" },
  { id: "person-and-community", number: 2, manifesto: "person-not-atom" },
  { id: "family", number: 3, manifesto: "family", image: images.oldTown },
  { id: "nation-and-continuity", number: 4, manifesto: "nation" },
  { id: "immigration-and-integration", number: 5, manifesto: "immigration" },
  { id: "europe", number: 6, manifesto: "europe", image: images.arcadeWide },
  { id: "economic-order", number: 7, manifesto: "economic-order" },
  { id: "property", number: 8, manifesto: "economic-order" },
  { id: "work", number: 9, manifesto: "work", image: images.workshop },
  { id: "technology", number: 10, manifesto: "technology" },
  { id: "environment", number: 11, manifesto: "stewardship", image: images.woodland },
  { id: "architecture", number: 12, manifesto: "architecture", image: images.terraces },
  { id: "education", number: 13, manifesto: "education" },
  { id: "subsidiarity", number: 14, manifesto: "subsidiarity" },
  { id: "democracy", number: 15, manifesto: "democracy" },
  { id: "foreign-policy", number: 16, manifesto: "foreign-policy" },
];

export type PrincipleId = (typeof principleStructure)[number]["id"];

/**
 * Image slots: everything about a photograph that is not words.
 *
 * The path, the intrinsic width and the intrinsic height are the same in every
 * language, so they live here and a translator never touches them. The `alt`
 * text is words — it is the picture as it reaches somebody who cannot see it —
 * and lives in the language files beside this one.
 *
 * To change a photograph: drop a replacement at the same path and ratio, and
 * rewrite `alt` in all six languages to describe what is actually in it.
 *
 * Everything is served from this origin — nothing is hotlinked, which is what
 * lets the privacy note promise that loading a page discloses your visit to
 * nobody. Licences and sources are recorded in
 * `public/images/photos/CREDITS.md`.
 *
 * Two standing rules for anything added here. **No recognisable faces:** a
 * photograph of an identifiable person on a political site implies an
 * endorsement they never gave, whatever the licence permits. **Europe only:**
 * the subject has to be somewhere this movement is actually about — a
 * handsome terraced hillside in Asia would say something untrue on a page
 * arguing for European continuity, and a reader who recognises it will notice.
 */
export interface ImageGeometry {
  /** Path under /public. All artwork is local; nothing is hotlinked. */
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

export const imageGeometry = {
  heroValley: { src: "/images/hero-valley.jpg", width: 2400, height: 1200 },
  valleyWide: { src: "/images/hero-valley-wide.jpg", width: 2400, height: 1100 },
  woodland: { src: "/images/woodland-river.jpg", width: 2400, height: 1200 },
  arcade: { src: "/images/arcade.jpg", width: 1800, height: 1100 },
  arcadeWide: { src: "/images/arcade-wide.jpg", width: 2400, height: 900 },
  oldTown: { src: "/images/old-town.jpg", width: 1800, height: 1200 },
  workshop: { src: "/images/workshop.jpg", width: 1800, height: 1200 },
  terraces: { src: "/images/terraces.jpg", width: 1800, height: 1200 },
} as const satisfies Record<string, ImageGeometry>;

/** The key a slot is referred to by, in structure and in every language file. */
export type ImageId = keyof typeof imageGeometry;

export const imageIds = Object.keys(imageGeometry) as readonly ImageId[];

/**
 * The journal's own artwork.
 *
 * Apart from the rest because the journal is: it is unlisted, it has no public
 * route, and its essays are written in English only. Describing its heroes in
 * six languages would be translating the frame around a picture nobody can
 * currently see.
 */
export const journalImageGeometry = {
  vault: { src: "/images/journal/vault.jpg", width: 1800, height: 1000 },
  colonnade: { src: "/images/journal/colonnade.jpg", width: 1800, height: 1000 },
  tracery: { src: "/images/journal/tracery.jpg", width: 1800, height: 1000 },
  portal: { src: "/images/journal/portal.jpg", width: 1800, height: 1000 },
  terraces: { src: "/images/journal/terraces.jpg", width: 1800, height: 1000 },
} as const satisfies Record<string, ImageGeometry>;

export type JournalImageId = keyof typeof journalImageGeometry;

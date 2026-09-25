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
  /**
   * Where the subject sits, as one `object-position` utility.
   *
   * Every frame on the site crops: a 3:2 photograph is asked to be 21:9 on
   * `/principles` and nearer 5:1 in a homepage band, and the default centre
   * crop assumes the subject is halfway down the picture. For a townscape it
   * is not — the sky is. This belongs with the geometry rather than at the
   * call site because a principle renders whichever photograph it was given,
   * so the picture has to carry the answer with it.
   *
   * Omit for anything an even crop suits.
   */
  readonly focus?: string;
}

export const imageGeometry = {
  heroValley: { src: "/images/hero-valley.jpg", width: 2400, height: 1200 },
  valleyWide: { src: "/images/hero-valley-wide.jpg", width: 2400, height: 1100 },
  woodland: { src: "/images/woodland-river.jpg", width: 2400, height: 1200 },
  arcade: { src: "/images/arcade.jpg", width: 1800, height: 1100 },
  arcadeWide: { src: "/images/arcade-wide.jpg", width: 2400, height: 900 },
  // Anchored low: the houses and the church front carry this one, and a
  // centred crop spends the band on sky and cuts the towers off mid-spire.
  oldTown: { src: "/images/old-town.jpg", width: 1800, height: 1200, focus: "object-[center_78%]" },
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

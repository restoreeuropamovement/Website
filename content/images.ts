import type { ImageSlot } from "@/lib/content-types";

/**
 * Image slots.
 *
 * To change one: drop a replacement at the same path and ratio and rewrite
 * `alt` to describe what is actually in it.
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
export const images = {
  heroValley: {
    src: "/images/hero-valley.jpg",
    alt: "A village gathered around its church on the floor of a steep alpine valley, sheer cliffs on either side and a snow-covered massif closing the head of the valley.",
    width: 2400,
    height: 1200,
  },
  valleyWide: {
    src: "/images/hero-valley-wide.jpg",
    alt: "A small white chapel alone in a mown meadow, below wooded slopes turning for autumn and a ridge of bare rock peaks under fresh snow.",
    width: 2400,
    height: 1100,
  },
  woodland: {
    src: "/images/woodland-river.jpg",
    alt: "The trunks of a managed beech wood receding into shade, sunlight breaking through the canopy onto the leaf litter.",
    width: 2400,
    height: 1200,
  },
  arcade: {
    src: "/images/arcade.jpg",
    alt: "A Romanesque cloister: paired columns with carved capitals carrying round arches, faded wall paintings visible in the gallery behind.",
    width: 1800,
    height: 1100,
  },
  arcadeWide: {
    src: "/images/arcade-wide.jpg",
    alt: "Carved stone columns, capitals and entablature of a church front, weathered and lit low from one side.",
    width: 2400,
    height: 900,
  },
  oldTown: {
    src: "/images/old-town.jpg",
    alt: "A terrace of baroque town houses along one side of a market square, the twin Gothic towers of a church rising behind their roofs.",
    width: 1800,
    height: 1200,
  },
  workshop: {
    src: "/images/workshop.jpg",
    alt: "Hand tools hung in order on a workshop wall — saws, chisels and gouges ranged above the bench.",
    width: 1800,
    height: 1200,
  },
  terraces: {
    src: "/images/terraces.jpg",
    alt: "Terraced vineyards stepping down a long hillside in autumn colour, with mist lying along the valley floor below.",
    width: 1800,
    height: 1200,
  },
} as const satisfies Record<string, ImageSlot>;

export const journalImages = {
  vault: {
    src: "/images/journal/vault.jpg",
    alt: "The ribs of a Gothic vault converging overhead, lit from the clerestory windows between them.",
    width: 1800,
    height: 1000,
  },
  colonnade: {
    src: "/images/journal/colonnade.jpg",
    alt: "A stone colonnade in silhouette, daylight falling through the gaps between the columns.",
    width: 1800,
    height: 1000,
  },
  tracery: {
    src: "/images/journal/tracery.jpg",
    alt: "A rose window seen from within, its stone tracery radiating from a stained-glass centre.",
    width: 1800,
    height: 1000,
  },
  portal: {
    src: "/images/journal/portal.jpg",
    alt: "The receding carved orders of a Romanesque portal arching over a studded wooden door.",
    width: 1800,
    height: 1000,
  },
  terraces: {
    src: "/images/journal/terraces.jpg",
    alt: "Terraced fields and groves stepping down to a river, seen from the slope opposite.",
    width: 1800,
    height: 1000,
  },
} as const satisfies Record<string, ImageSlot>;

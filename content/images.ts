import type { ImageSlot } from "@/lib/content-types";

/**
 * Image slots.
 *
 * Each entry is a place where commissioned photography belongs. Until then the
 * slot holds locally generated tonal artwork (see `scripts/generate-artwork.mjs`)
 * drawn in the brand palette. To replace one: drop a photograph at the same path
 * and ratio, update `alt`, and remove `placeholder: true`.
 *
 * Direction for the photography that will replace these: European countryside,
 * old towns, villages, churches, forests, mountains, workshops, farms,
 * universities, public squares, stone architecture and ordinary civic life.
 */
export const images = {
  heroValley: {
    src: "/images/hero-valley.svg",
    alt: "A cultivated valley: terraced fields and hedgerows below a village gathered around its church, with mountains beyond.",
    width: 2400,
    height: 1500,
    placeholder: true,
  },
  valleyWide: {
    src: "/images/hero-valley-wide.svg",
    alt: "A wide view of a cultivated valley beneath distant mountains.",
    width: 2400,
    height: 1100,
    placeholder: true,
  },
  woodland: {
    src: "/images/woodland-river.svg",
    alt: "Managed woodland on rolling hills above open meadow.",
    width: 2400,
    height: 1200,
    placeholder: true,
  },
  arcade: {
    src: "/images/arcade.svg",
    alt: "A Romanesque arcade drawn in elevation.",
    width: 1800,
    height: 1100,
    placeholder: true,
  },
  arcadeWide: {
    src: "/images/arcade-wide.svg",
    alt: "A long Romanesque arcade drawn in elevation.",
    width: 2400,
    height: 900,
    placeholder: true,
  },
  oldTown: {
    src: "/images/old-town.svg",
    alt: "Town houses around a square, with a church tower rising behind them.",
    width: 1800,
    height: 1200,
    placeholder: true,
  },
  workshop: {
    src: "/images/workshop.svg",
    alt: "Daylight falling through a tall arched window onto a workshop bench and its tools.",
    width: 1800,
    height: 1200,
    placeholder: true,
  },
  terraces: {
    src: "/images/terraces.svg",
    alt: "Terraced farmland divided by hedgerows, stepping away toward a wooded ridge.",
    width: 1800,
    height: 1200,
    placeholder: true,
  },
} as const satisfies Record<string, ImageSlot>;

export const journalImages = {
  vault: {
    src: "/images/journal/vault.svg",
    alt: "The ribs of a stone vault converging on a central boss.",
    width: 1800,
    height: 1000,
    placeholder: true,
  },
  colonnade: {
    src: "/images/journal/colonnade.svg",
    alt: "A colonnade drawn in elevation.",
    width: 1800,
    height: 1000,
    placeholder: true,
  },
  tracery: {
    src: "/images/journal/tracery.svg",
    alt: "The tracery of a rose window.",
    width: 1800,
    height: 1000,
    placeholder: true,
  },
  portal: {
    src: "/images/journal/portal.svg",
    alt: "The receding orders of a Romanesque portal.",
    width: 1800,
    height: 1000,
    placeholder: true,
  },
  terraces: {
    src: "/images/journal/terraces.svg",
    alt: "Terraced farmland divided by hedgerows.",
    width: 1800,
    height: 1000,
    placeholder: true,
  },
} as const satisfies Record<string, ImageSlot>;

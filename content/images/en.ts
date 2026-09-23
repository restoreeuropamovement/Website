import type { ImageText } from "./index";
import type { JournalImageId } from "./structure";

export const imageText: ImageText = {
  alt: {
    heroValley:
      "A village gathered around its church on the floor of a steep alpine valley, sheer cliffs on either side and a snow-covered massif closing the head of the valley.",
    valleyWide:
      "A small white chapel alone in a mown meadow, below wooded slopes turning for autumn and a ridge of bare rock peaks under fresh snow.",
    woodland:
      "The trunks of a managed beech wood receding into shade, sunlight breaking through the canopy onto the leaf litter.",
    arcade:
      "A Romanesque cloister: paired columns with carved capitals carrying round arches, faded wall paintings visible in the gallery behind.",
    arcadeWide:
      "Carved stone columns, capitals and entablature of a church front, weathered and lit low from one side.",
    oldTown:
      "A terrace of baroque town houses along one side of a market square, the twin Gothic towers of a church rising behind their roofs.",
    workshop:
      "Hand tools hung in order on a workshop wall — saws, chisels and gouges ranged above the bench.",
    terraces:
      "Terraced vineyards stepping down a long hillside in autumn colour, with mist lying along the valley floor below.",
  },
};

/**
 * The journal's heroes, described in English only.
 *
 * Exported here and not from the five language files beside this one, which is
 * a supported state: `scripts/check-translations.ts` compares what a
 * translation exports against the English file, so an English-only export is
 * not a missing translation. The journal is unlisted and its essays are
 * English; when it is published in other languages these belong in `ImageText`
 * with the rest.
 */
export const journalImageText: { readonly alt: Record<JournalImageId, string> } = {
  alt: {
    vault:
      "The ribs of a Gothic vault converging overhead, lit from the clerestory windows between them.",
    colonnade:
      "A stone colonnade in silhouette, daylight falling through the gaps between the columns.",
    tracery: "A rose window seen from within, its stone tracery radiating from a stained-glass centre.",
    portal: "The receding carved orders of a Romanesque portal arching over a studded wooden door.",
    terraces: "Terraced fields and groves stepping down to a river, seen from the slope opposite.",
  },
};

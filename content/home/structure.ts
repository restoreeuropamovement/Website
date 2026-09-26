import type { ImageId } from "@/content/images/structure";
import { principleStructure } from "@/content/principles/structure";
import type { RouteId } from "@/lib/site";

/**
 * The home page: everything about it that is not words.
 *
 * Ids, ordering, the anchors the principles link to, which photograph sits on
 * which card. A translator edits the file beside this one and cannot move a
 * link, reorder a section or silently swap a picture.
 *
 * The language files key their prose by the ids below, so a translation that
 * loses an entry is a build error rather than a hole in the page.
 */

/**
 * Five of the sixteen principles, as the home page samples them.
 *
 * Five rather than all sixteen because the page is a doorway: the whole list is
 * one link away, and a home page that prints the entire programme is a
 * programme nobody reads. The anchors are on `/principles`.
 */
export const standForIds = ["family", "nation", "property", "technology", "subsidiarity"] as const;

export type StandForId = (typeof standForIds)[number];

export const standForAnchors: Record<StandForId, string> = {
  family: "family",
  nation: "nation-and-continuity",
  property: "property",
  technology: "technology",
  subsidiarity: "subsidiarity",
};

/*
 * `PrincipleId` widens to `string`, so nothing above stops one of these from
 * naming a principle that has been renamed or dropped. The failure would be
 * quiet — the link still resolves, it just lands at the top of `/principles`
 * instead of at the principle it promised — so it is worth one pass at import
 * to turn it into a build error.
 */
const principleIds = new Set(principleStructure.map((principle) => principle.id));
for (const [id, anchor] of Object.entries(standForAnchors)) {
  if (!principleIds.has(anchor)) {
    throw new Error(
      `Home: "${id}" points at #${anchor}, which is not a principle on /principles.`,
    );
  }
}

/**
 * What the movement is actually doing, as opposed to what it believes.
 *
 * Every entry here points at something that exists and can be checked by
 * following the link: a catalogue with dated positions, a map of forty-seven
 * nations, an intake that works, a document published in full. Nothing on this
 * list is an intention the site cannot show.
 */
export const objectiveIds = ["programme", "wings", "members", "publication"] as const;

export type ObjectiveId = (typeof objectiveIds)[number];

export const objectiveRoutes: Record<ObjectiveId, RouteId> = {
  programme: "policy",
  wings: "wings",
  members: "join",
  publication: "manifesto",
};

/**
 * The six cards, each a real page with a photograph of its own.
 *
 * Subjects are matched to the page rather than distributed at random: carved
 * stone for the principles the rest rests on, a town that has stood for the
 * founding document, a wall of hand tools for the worked positions, a valley
 * and a chapel for what the programme means in an ordinary life, a cloister of
 * many columns for the national wings, and cultivated terraces for the account
 * of who tends this.
 */
export interface ExploreCardStructure {
  readonly id: string;
  readonly route: RouteId;
  readonly image: ImageId;
}

export const exploreCards = [
  { id: "principles", route: "principles", image: "arcadeWide" },
  { id: "manifesto", route: "manifesto", image: "oldTown" },
  { id: "policy", route: "policy", image: "workshop" },
  { id: "vision", route: "vision", image: "valleyWide" },
  { id: "wings", route: "wings", image: "arcade" },
  { id: "about", route: "about", image: "terraces" },
] as const satisfies readonly ExploreCardStructure[];

export type ExploreCardId = (typeof exploreCards)[number]["id"];

/**
 * The three ways in, and only the three that exist.
 *
 * `member` and `volunteer` are the two values `involvement_role` accepts;
 * `supporter` was retired and now resolves to `member`, so it is not offered
 * here either. There is no newsletter entry because there is no newsletter —
 * no list, no provider, nowhere to store a subscriber — and a fourth card
 * promising one would be the only paragraph on the page the site could not
 * keep.
 */
export interface ParticipationStructure {
  readonly id: string;
  readonly route: RouteId;
  /** Prefills the form's role field; validated again server-side. */
  readonly query?: string;
}

export const participationWays = [
  { id: "member", route: "join" },
  { id: "volunteer", route: "join", query: "?role=volunteer" },
  { id: "chapter", route: "chapters" },
] as const satisfies readonly ParticipationStructure[];

export type ParticipationId = (typeof participationWays)[number]["id"];

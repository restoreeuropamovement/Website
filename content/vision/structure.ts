/**
 * The shape of the vision page, shared by all six languages.
 *
 * Ids, ordering and the link each outcome makes back into the principles. None
 * of it is text, so none of it belongs in a translation: an id is an anchor
 * somebody may have linked to, and a `principle` is a URL. A translated file
 * that carried either could renumber the page, break an inbound link, or send
 * a German reader to an English principle — see content/manifesto/structure.ts,
 * which exists for the same reason.
 *
 * `as const` is load-bearing. It is what makes `VisionOutcomeId` the union of
 * exactly these eleven ids, so a translation missing one is a build error
 * rather than a blank paragraph in production.
 */
export const visionStructure = [
  { id: "homes", principle: "/principles#property" },
  { id: "children", principle: "/principles#family" },
  { id: "time", principle: "/principles#work" },
  { id: "towns", principle: "/principles#architecture" },
  { id: "nature", principle: "/principles#environment" },
  { id: "technology", principle: "/principles#technology" },
  { id: "privacy", principle: "/principles#technology" },
  { id: "enterprise", principle: "/principles#economic-order" },
  { id: "identity", principle: "/principles#nation-and-continuity" },
  { id: "communities", principle: "/principles#subsidiarity" },
  { id: "politics", principle: "/principles#democracy" },
] as const;

export type VisionOutcomeId = (typeof visionStructure)[number]["id"];

import { getWingCountries } from "./wings";

export const joinMeta = {
  eyebrow: "Membership",
  title: "Join the movement.",
  lede: "Membership is belonging. If you can also help build the movement, choose Volunteer. The form asks for five things, encrypts your name and address before storing them, and commits you to nothing until a person has reviewed the application.",
} as const;

export interface InvolvementRole {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly commitment: string;
}

/**
 * Two ways in, not a list of jobs. How someone can help is what the interest
 * field records; the role is the kind of application being made.
 */
export const involvementRoles: readonly InvolvementRole[] = [
  {
    id: "member",
    title: "Member",
    summary:
      "Be counted as a member of the movement. When Restore Europe can receive contributions, members are the people who will be asked to support the work.",
    commitment: "The ordinary way in",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    summary:
      "Help build it: local organising, writing, translation, events, or a trade. Choose the area of interest that fits best.",
    commitment: "As you can spare",
  },
];

/** Older public labels, kept so a hand-entered record still reads in the roll. */
const retiredRoleTitles: Record<string, string> = {
  supporter: "Supporter",
  organizer: "Local organiser",
  writer: "Writer / researcher",
  professional: "Professional contributor",
};

const roleAliases: Record<string, string> = {
  supporter: "member",
  organizer: "volunteer",
  writer: "volunteer",
  professional: "volunteer",
};

export function involvementRoleTitle(id: string): string {
  return involvementRoles.find((role) => role.id === id)?.title ?? retiredRoleTitles[id] ?? id;
}

/** Maps a query-string value, including retired labels, onto a role the form still offers. */
export function resolveInvolvementRole(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const aliased = roleAliases[value] ?? value;
  return involvementRoles.some((role) => role.id === aliased) ? aliased : undefined;
}

export const interestAreas: readonly string[] = [
  "Policy and research",
  "Local organising",
  "Writing and editing",
  "Events and meetings",
  "Translation",
  "Legal and compliance",
  "Technology and infrastructure",
  "Agriculture and land",
  "Architecture and planning",
  "Other",
];

/**
 * The form's country field, taken from the national wings so the two can never
 * disagree. Listing a country is not a claim that a wing is constituted there.
 */
export const europeanCountries: readonly string[] = [...getWingCountries(), "Other"];

export const contactMeta = {
  eyebrow: "Contact",
  title: "Reaching the movement.",
  lede: "Correspondence is handled by function rather than by individual, so a letter reaches the people who can answer it rather than whoever happens to read it first.",
} as const;

export interface ContactChannel {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

/**
 * Functions, not addresses.
 *
 * Each address is published when the function it belongs to is constituted and
 * somebody is answerable for reading it. Printing an address that nobody
 * monitors is worse than printing none: it collects letters that are never
 * answered and makes the movement look larger than it is.
 */
export const contactChannels: readonly ContactChannel[] = [
  {
    id: "general",
    title: "General enquiries",
    description: "Questions about the movement, its programme and its activities.",
  },
  {
    id: "press",
    title: "Press",
    description: "Journalists, broadcasters and researchers seeking comment or background.",
  },
  {
    id: "research",
    title: "Research",
    description: "Academic correspondence and submissions to the policy catalogue.",
  },
  {
    id: "organization",
    title: "Organisation",
    description: "Membership administration, statutes, compliance and internal matters.",
  },
  {
    id: "chapters",
    title: "Local chapters",
    description: "Establishing a chapter, or contacting one once chapters are constituted.",
  },
];

export const contactSubjects: readonly string[] = contactChannels.map(
  (channel) => channel.title,
);

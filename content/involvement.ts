import { getWingCountries } from "./wings";

export const joinMeta = {
  eyebrow: "Get Involved",
  title: "Take part.",
  lede: "The movement is being built by people who are prepared to do the ordinary work: turning up, reading carefully, writing well, and organising where they live.",
} as const;

export interface InvolvementRole {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly commitment: string;
}

export const involvementRoles: readonly InvolvementRole[] = [
  {
    id: "supporter",
    title: "Supporter",
    summary:
      "Follow the movement's work, receive publications, and be notified when a chapter forms near you.",
    commitment: "No time commitment",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    summary:
      "Help with events, distribution, translation, administration and the practical work of establishing local groups.",
    commitment: "A few hours a month",
  },
  {
    id: "organizer",
    title: "Local Organizer",
    summary:
      "Convene and run a local chapter: meetings, membership, and representation of the area within the movement.",
    commitment: "Regular, ongoing",
  },
  {
    id: "writer",
    title: "Writer / Researcher",
    summary:
      "Contribute essays, policy work and research to the Restore Europe Journal and to the development of the programme.",
    commitment: "By agreement",
  },
  {
    id: "professional",
    title: "Professional Contributor",
    summary:
      "Offer specific professional expertise — legal, financial, editorial, technical, agricultural, architectural — where the movement needs it.",
    commitment: "Occasional, by request",
  },
];

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
  lede: "Correspondence is handled by function rather than by individual. Addresses are published as each function is formally constituted.",
} as const;

export interface ContactChannel {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly handle: string;
  readonly response: string;
}

/**
 * No real addresses exist yet, and none are invented here. Each channel shows
 * the address form it will take once the movement is registered.
 */
export const contactChannels: readonly ContactChannel[] = [
  {
    id: "general",
    title: "General Enquiries",
    description: "Questions about the movement, its programme and its activities.",
    handle: "enquiries@[domain to be confirmed]",
    response: "Address published on registration",
  },
  {
    id: "press",
    title: "Press",
    description: "Journalists, broadcasters and researchers seeking comment or background.",
    handle: "press@[domain to be confirmed]",
    response: "Address published on registration",
  },
  {
    id: "research",
    title: "Research",
    description: "Academic correspondence, policy submissions and proposals for the journal.",
    handle: "research@[domain to be confirmed]",
    response: "Address published on registration",
  },
  {
    id: "organization",
    title: "Organization",
    description: "Membership administration, statutes, compliance and internal matters.",
    handle: "office@[domain to be confirmed]",
    response: "Address published on registration",
  },
  {
    id: "chapters",
    title: "Local Chapters",
    description: "Establishing a chapter, or contacting one once chapters are constituted.",
    handle: "chapters@[domain to be confirmed]",
    response: "Address published on registration",
  },
];

export const contactSubjects: readonly string[] = contactChannels.map(
  (channel) => channel.title,
);

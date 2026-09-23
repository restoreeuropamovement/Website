import { wingSlugs } from "@/content/wings";

/**
 * The two public forms: everything about them that is not words.
 *
 * This file matters more than the usual structure file, because three of these
 * values are *written to the database in the clear* — `country`,
 * `interest_area` and the enquiry `subject` are unencrypted so the admin view
 * can sort and count on them without decrypting the roll.
 *
 * Before translation those columns held English labels: "Germany", "Policy and
 * research". Serving the form in six languages would have meant a German
 * applicant storing "Deutschland" and an English one storing "Germany" — the
 * same nation counted as two, with no way to put the halves back together
 * short of a migration that guesses. Worse, the server action validates the
 * submitted value against the list; a translated label would simply have
 * failed, and the form would have rejected every application made in any
 * language but English.
 *
 * So what is stored is an id, and the label is looked up for display. Ids are
 * language-independent by construction, which is the property the column
 * needs and the only one it needs.
 *
 * Both tables were empty when this changed, so no rows carry the old labels.
 */

/** The kind of application being made — not a job, and not how someone helps. */
export const involvementRoleIds = ["member", "volunteer"] as const;

export type InvolvementRoleId = (typeof involvementRoleIds)[number];

export function isInvolvementRole(value: string): value is InvolvementRoleId {
  return (involvementRoleIds as readonly string[]).includes(value);
}

/**
 * Roles the form no longer offers.
 *
 * Kept because links to `/join?role=organizer` exist in the wild and because a
 * hand-entered record may still carry one; the roll should read rather than
 * print a bare id at whoever opens it.
 */
export const retiredRoleIds = ["supporter", "organizer", "writer", "professional"] as const;

export type RetiredRoleId = (typeof retiredRoleIds)[number];

const roleAliases: Record<RetiredRoleId, InvolvementRoleId> = {
  supporter: "member",
  organizer: "volunteer",
  writer: "volunteer",
  professional: "volunteer",
};

/** Maps a query-string value, including retired ones, onto a role still offered. */
export function resolveInvolvementRole(value: string | undefined): InvolvementRoleId | undefined {
  if (!value) return undefined;
  const aliased = roleAliases[value as RetiredRoleId] ?? value;
  return isInvolvementRole(aliased) ? aliased : undefined;
}

export const interestAreaIds = [
  "policy",
  "organising",
  "writing",
  "events",
  "translation",
  "legal",
  "technology",
  "agriculture",
  "architecture",
  "other",
] as const;

export type InterestAreaId = (typeof interestAreaIds)[number];

export function isInterestArea(value: string): value is InterestAreaId {
  return (interestAreaIds as readonly string[]).includes(value);
}

/**
 * The country field's value for anywhere not on the list.
 *
 * A slug, like every other option, and one no wing uses — the check below
 * fails the build rather than letting a future wing quietly shadow it.
 */
export const OTHER_COUNTRY = "other";

if ((wingSlugs as readonly string[]).includes(OTHER_COUNTRY)) {
  throw new Error(
    `A national wing now has the slug "${OTHER_COUNTRY}", which the country field ` +
      `uses for everywhere else. Rename one of them.`,
  );
}

/**
 * The form's country field, taken from the national wings so the two can never
 * disagree. Listing a country is not a claim that a wing is constituted there.
 */
export const countryValues: readonly string[] = [...wingSlugs, OTHER_COUNTRY];

export function isCountryValue(value: string): boolean {
  return countryValues.includes(value);
}

/**
 * Reads the two prefills `/join` accepts from its query string.
 *
 * Both are validated against what the form actually offers. A page rendering
 * whatever arrives in a URL is how a link becomes a way to put words on
 * somebody else's site.
 */
function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export function pickCountry(value: string | string[] | undefined): string | undefined {
  const candidate = first(value);
  return candidate && isCountryValue(candidate) ? candidate : undefined;
}

export function pickRole(value: string | string[] | undefined): InvolvementRoleId | undefined {
  return resolveInvolvementRole(first(value));
}

/** Correspondence is handled by function rather than by individual. */
export const contactChannelIds = [
  "general",
  "press",
  "research",
  "organization",
  "chapters",
] as const;

export type ContactChannelId = (typeof contactChannelIds)[number];

export function isContactChannel(value: string): value is ContactChannelId {
  return (contactChannelIds as readonly string[]).includes(value);
}

/**
 * Validation failures, as codes rather than sentences.
 *
 * The Server Action decides *what* is wrong; the form, which is the only party
 * that knows what language the reader is in, decides how to say it. Returning
 * English prose from the action would have meant a German applicant filling in
 * a German form and being told "Enter a valid email address." — and the
 * alternative, posting the locale along with the data, means trusting a
 * client-supplied value to choose server behaviour for no gain.
 */
export const joinErrorCodes = [
  "name",
  "email",
  "country",
  "region",
  "message",
  "role",
  "interest",
  "consent",
] as const;

export type JoinErrorCode = (typeof joinErrorCodes)[number];

export const contactErrorCodes = ["name", "email", "subject", "message"] as const;

export type ContactErrorCode = (typeof contactErrorCodes)[number];

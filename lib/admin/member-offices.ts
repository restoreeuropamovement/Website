/**
 * The offices somebody can hold in the movement, and nothing else.
 *
 * Why this is here and not in `content/`
 * --------------------------------------
 *
 * Every other list of ids on this site lives in a `structure.ts` beside six
 * language files, because the id is written to the database and the label is
 * read by the public. These ids are written to the database and the labels are
 * read by nobody but the people who run the movement: an office is granted at
 * `/admin/members` and appears on no public page. `/admin` is not translated —
 * see `englishInvolvement` in content/involvement/index.ts for the standing
 * argument — so six editions of "Wing leader" would be five files nothing
 * renders, and `npm run test:i18n` would start policing translations of words
 * no reader ever meets.
 *
 * The precedent is immediately beside this file. `member.status` is also a
 * stored id with an administrator-facing label, and it lives in
 * `lib/admin/member-status.ts` for the same reason. This module is shaped like
 * that one, down to importing nothing at all: the forms that offer these
 * options are rendered on a surface that must ship as little JavaScript as it
 * can, and a module reaching the database or the encryption key would drag
 * both across the boundary with it.
 *
 * What has not changed is the rule that produced the structure/text split in
 * the first place. **No id below may ever move into a language file.** These
 * are database values, and a translator who renamed one would be deciding what
 * a row says.
 *
 * On not inventing an organisation
 * --------------------------------
 *
 * The movement is not registered, `/imprint` names no officer, and nothing
 * here asserts that any of these offices is filled. The list is short on
 * purpose and each entry names something the site already describes rather
 * than something invented to round the list out: wings are the national level
 * of the movement, chapters are the layer beneath them and the thing a wing
 * recognises (`wingLayerIds` and `wingRemitIds` in content/wings/structure.ts),
 * and the European level is the layer above. There is no treasurer, because a
 * movement with no registration and no account has nothing for one to do, and
 * a role in this list that nobody can hold is a claim rather than a record.
 */

/**
 * An office, as stored in `member_office.office_encrypted`.
 *
 * A separate concept from `involvement_role`, which is the kind of application
 * somebody made — member or volunteer — and is a property of how they joined.
 * An office is a responsibility somebody later took on, granted by a person
 * and withdrawn the same way.
 */
export type MemberOffice =
  | "wing-lead"
  | "wing-deputy"
  | "chapter-organiser"
  | "coordinator"
  | "press-officer";

/** Wing-scoped first, then movement-wide: the order the selects offer them. */
export const MEMBER_OFFICES = [
  "wing-lead",
  "wing-deputy",
  "chapter-organiser",
  "coordinator",
  "press-officer",
] as const;

/**
 * The offices that belong to one national wing rather than to the movement.
 *
 * Structural, and the reason it is a list rather than a flag on a label map:
 * whether an office is tied to a wing decides whether a row carries a wing
 * slug, which is a fact about the data and not about how it reads.
 */
export const WING_SCOPED_OFFICES = [
  "wing-lead",
  "wing-deputy",
  "chapter-organiser",
] as const satisfies readonly MemberOffice[];

export function isWingScoped(office: MemberOffice): boolean {
  return (WING_SCOPED_OFFICES as readonly MemberOffice[]).includes(office);
}

/**
 * What each office is called.
 *
 * Beside the union rather than in a component, so that adding an office is a
 * type error until it has been given a name instead of rendering as a raw
 * database value somewhere nobody looks.
 */
export const MEMBER_OFFICE_LABEL: Record<MemberOffice, string> = {
  "wing-lead": "Wing leader",
  "wing-deputy": "Deputy wing leader",
  "chapter-organiser": "Chapter organiser",
  coordinator: "European coordinator",
  "press-officer": "Press officer",
};

/** Narrows an untrusted string — a query parameter, a form field — to an office. */
export function isMemberOffice(value: string): value is MemberOffice {
  return (MEMBER_OFFICES as readonly string[]).includes(value);
}

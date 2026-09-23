/**
 * The vocabulary of the membership pipeline, and nothing else.
 *
 * Split out from `lib/admin/members.ts` for one concrete reason: the forms that
 * offer these states to an administrator are client components, and that module
 * reaches the database and the encryption key. Importing it from the browser
 * bundle would pull the Postgres driver and `lib/admin/pii.ts` across the
 * boundary with it. This file imports nothing, so both sides can share it.
 */

/**
 * The path an application takes through somebody's judgement.
 *
 *   `new`        nobody has read it
 *   `reviewing`  somebody is considering it
 *   `awaiting`   we have written to them and are waiting for a reply
 *   `confirmed`  accepted — a member or a volunteer, per `involvement_role`
 *   `declined`   considered and turned down
 *
 * `awaiting` is separate from `reviewing` because the two differ in who owes
 * the next move. Collapsing them loses the only question that needs asking
 * daily — who has not written back — and an applicant waiting on a reply that
 * nobody remembers promising is how a movement loses people it had already
 * decided it wanted.
 *
 * Nothing moves between these automatically. Every transition is an
 * administrator deciding something, which is why each one writes an audit row.
 */
export type MemberStatus = "new" | "reviewing" | "awaiting" | "confirmed" | "declined";

export const MEMBER_STATUSES = [
  "new",
  "reviewing",
  "awaiting",
  "confirmed",
  "declined",
] as const;

/** The states an application is still waiting on somebody for. */
export const OPEN_STATUSES = [
  "new",
  "reviewing",
  "awaiting",
] as const satisfies readonly MemberStatus[];

/**
 * What each state is called on one record.
 *
 * Kept beside the union rather than in a component so that adding a state is a
 * type error until it has been given a name, instead of rendering as a raw
 * database value somewhere nobody looks.
 */
export const MEMBER_STATUS_LABEL: Record<MemberStatus, string> = {
  new: "Unread",
  reviewing: "In review",
  awaiting: "Awaiting reply",
  confirmed: "Accepted",
  declined: "Declined",
};

/**
 * What each state is called as a tab heading a whole group.
 *
 * Mostly the same words, and deliberately not the same map. A chip labels one
 * record's state; a tab names the collection behind it, and "Accepted" is a
 * poor name for the roll when what it holds is members and volunteers.
 */
export const MEMBER_STATUS_TAB: Record<MemberStatus, string> = {
  new: "Unread",
  reviewing: "In review",
  awaiting: "Awaiting reply",
  confirmed: "Members and volunteers",
  declined: "Declined",
};

/** Narrows an untrusted string — a query parameter, a form field — to a status. */
export function isMemberStatus(value: string): value is MemberStatus {
  return (MEMBER_STATUSES as readonly string[]).includes(value);
}

export type MemberSort = "country" | "name" | "recent" | "waiting";

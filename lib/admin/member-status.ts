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
 * `new` is unread, `reviewing` is being vetted, `confirmed` is a member and
 * `declined` was considered and turned down. Nothing moves between them
 * automatically: every transition is an administrator deciding something, which
 * is why each one writes an audit row.
 */
export type MemberStatus = "new" | "reviewing" | "confirmed" | "declined";

export const MEMBER_STATUSES = ["new", "reviewing", "confirmed", "declined"] as const;

/** The states an application is still waiting on somebody for. */
export const OPEN_STATUSES = ["new", "reviewing"] as const satisfies readonly MemberStatus[];

/**
 * What each state is called in the admin surface.
 *
 * Kept beside the union rather than in a component so that adding a state is a
 * type error until it has been given a name, instead of rendering as a raw
 * database value somewhere nobody looks.
 */
export const MEMBER_STATUS_LABEL: Record<MemberStatus, string> = {
  new: "Unread",
  reviewing: "In review",
  confirmed: "Member",
  declined: "Declined",
};

/** Narrows an untrusted string — a query parameter, a form field — to a status. */
export function isMemberStatus(value: string): value is MemberStatus {
  return (MEMBER_STATUSES as readonly string[]).includes(value);
}

export type MemberSort = "country" | "name" | "recent" | "waiting";

import {
  OPEN_STATUSES,
  type MemberSort,
  type MemberStatus,
} from "@/lib/admin/member-status";
import {
  decryptPiiSafe,
  emailDigest,
  encryptPii,
  foldForSearch,
} from "@/lib/admin/pii";
import { db } from "@/lib/db";

/**
 * Membership records.
 *
 * Two things write here: the public intake at `app/(site)/join/actions.ts`, and
 * an administrator entering an application that arrived some other way. Both
 * land as `new`; nothing becomes a membership until a person reviews it, and
 * nothing is deleted on a timer, because an unreviewed row is somebody's
 * application rather than a stale token.
 *
 * Two halves, kept apart on purpose:
 *
 *   * `membershipOverview` and the counting helpers touch no encrypted column
 *     and therefore need no key and no elevated session. They are what the
 *     admin members page shows by default.
 *   * `searchMembersRevealed` decrypts. It must only ever be reached from a
 *     session that has re-asserted its passkey — see `requireElevatedSession`
 *     in lib/admin/session.ts — and every call is audited by the caller.
 *
 * There is no bulk-export function here, and that is a deliberate omission
 * rather than an oversight. Exporting is the operation that turns a controlled
 * database back into the loose spreadsheet this design exists to avoid.
 */

/**
 * Ceiling on how many rows one search will decrypt.
 *
 * Search works by decrypting candidates and filtering them in memory, because
 * the encrypted columns are deliberately not searchable in SQL. At the scale
 * this table is expected to reach that is a few milliseconds and a couple of
 * megabytes. The cap keeps a pathological case — someone searching with no
 * country filter against a table that has grown far beyond expectations — from
 * turning one request into a memory incident. Results say when they were
 * truncated rather than silently lying about the total.
 */
const SEARCH_SCAN_LIMIT = 20_000;

export interface MemberInput {
  readonly name: string;
  readonly email: string;
  readonly country: string;
  /** Optional. Encrypted: a region narrows a person far more than a country. */
  readonly region?: string;
  /** Optional free text. Encrypted, and never written to the audit log. */
  readonly message?: string;
  readonly involvementRole: string;
  readonly interestArea: string;
  /** Where in the pipeline the record starts. Both intakes use `new`. */
  readonly status: MemberStatus;
}

/*
 * Re-exported so that server-side callers can keep importing the pipeline and
 * its vocabulary from one place, while the client components that only need
 * the names reach for `lib/admin/member-status.ts` and leave the database
 * driver on this side of the boundary.
 */
export {
  MEMBER_STATUSES,
  MEMBER_STATUS_LABEL,
  OPEN_STATUSES,
  isMemberStatus,
  type MemberSort,
  type MemberStatus,
} from "@/lib/admin/member-status";

export type CreateOutcome =
  | { readonly kind: "created"; readonly id: string }
  /** The address is already on the roll. Nothing was written. */
  | { readonly kind: "duplicate" };

/**
 * Adds a record.
 *
 * It encrypts on the way in, so the administrative caller must hold an elevated
 * session; the public intake reaches it only after validating and rate-limiting,
 * and both callers audit.
 *
 * A duplicate address is reported rather than merged: two people cannot share an
 * inbox, so a collision means either a typo or a record that already exists, and
 * quietly overwriting the existing one would lose whatever it held. Detected
 * through the keyed digest, since the encrypted column cannot be compared.
 */
export async function createMember(input: MemberInput): Promise<CreateOutcome> {
  const region = input.region?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  const [digest, nameEncrypted, emailEncrypted, regionEncrypted, messageEncrypted] =
    await Promise.all([
      emailDigest(input.email),
      encryptPii(input.name.trim()),
      encryptPii(input.email.trim()),
      region ? encryptPii(region) : Promise.resolve(null),
      message ? encryptPii(message) : Promise.resolve(null),
    ]);

  const [row] = await db()<{ id: string }[]>`
    INSERT INTO member (
      name_encrypted, email_encrypted, email_digest, country,
      region_encrypted, message_encrypted,
      involvement_role, interest_area, status, confirmed_at
    )
    VALUES (
      ${nameEncrypted}, ${emailEncrypted}, ${digest}, ${input.country},
      ${regionEncrypted}, ${messageEncrypted},
      ${input.involvementRole}, ${input.interestArea}, ${input.status},
      ${input.status === "confirmed" ? db()`now()` : null}
    )
    ON CONFLICT (email_digest) DO NOTHING
    RETURNING id
  `;

  return row ? { kind: "created", id: row.id } : { kind: "duplicate" };
}

/**
 * Moves a record along the pipeline.
 *
 * The distinction between the states is editorial rather than cryptographic: an
 * administrator has made a judgement or has not. Nothing about it is automated,
 * and in particular a record is never deleted on a timer in any state — it is
 * somebody's application, not a stale token.
 *
 * `confirmed_at` is cleared when a record leaves `confirmed`, so it always
 * answers "since when has this person been a member" rather than "when were
 * they last briefly accepted".
 */
export async function setMemberStatus(id: string, status: MemberStatus): Promise<boolean> {
  const [row] = await db()<{ id: string }[]>`
    UPDATE member
       SET status = ${status},
           status_changed_at = now(),
           confirmed_at = ${status === "confirmed" ? db()`now()` : null}
     WHERE id = ${id}
    RETURNING id
  `;
  return Boolean(row);
}

/**
 * Replaces the vetting notes on one record.
 *
 * Encrypted on the way in like every other free-text field, and for the
 * sharpest version of the same reason: this is the only column in the database
 * that holds one person's opinion of another. An empty string clears the note
 * rather than storing ciphertext of nothing, so "no note" and "a note that
 * happens to be blank" are the same state.
 */
export async function setMemberNotes(id: string, notes: string): Promise<boolean> {
  const trimmed = notes.trim();
  const encrypted = trimmed ? await encryptPii(trimmed) : null;

  const [row] = await db()<{ id: string }[]>`
    UPDATE member SET notes_encrypted = ${encrypted} WHERE id = ${id} RETURNING id
  `;
  return Boolean(row);
}

/** A count for each state, used both per country and as the grand total. */
export type StatusCounts = { readonly [S in MemberStatus]: number };

export interface CountryCount extends StatusCounts {
  readonly country: string;
}

export interface MembershipOverview extends StatusCounts {
  /** `new` plus `reviewing`: everything still waiting on a decision. */
  readonly open: number;
  readonly total: number;
  readonly countries: readonly CountryCount[];
}

/**
 * How many applications nobody has read yet.
 *
 * A single number, and the only thing the notification email is allowed to say
 * about the roll. Touches no encrypted column, so it costs nothing and reveals
 * nothing about who is in the queue.
 *
 * Counts `new` alone rather than everything open. An application under review
 * is already somebody's responsibility; the nudge is for the ones that are
 * nobody's yet.
 */
export async function unreadMemberCount(): Promise<number> {
  const [row] = await db()<{ unread: string }[]>`
    SELECT count(*) AS unread FROM member WHERE status = 'new'
  `;
  return Number(row?.unread ?? 0);
}

/**
 * Totals and the per-country breakdown.
 *
 * Aggregated in SQL over the one column held in the clear, so this decrypts
 * nothing, needs no elevated session, and discloses no individual. It is what
 * the members page shows until somebody deliberately asks for more.
 */
export async function membershipOverview(): Promise<MembershipOverview> {
  const rows = await db()<
    { country: string; new: string; reviewing: string; confirmed: string; declined: string }[]
  >`
    SELECT country,
           count(*) FILTER (WHERE status = 'new')       AS new,
           count(*) FILTER (WHERE status = 'reviewing') AS reviewing,
           count(*) FILTER (WHERE status = 'confirmed') AS confirmed,
           count(*) FILTER (WHERE status = 'declined')  AS declined
      FROM member
     GROUP BY country
     ORDER BY count(*) FILTER (WHERE status = 'confirmed') DESC, country ASC
  `;

  const countries = rows.map((row) => ({
    country: row.country,
    new: Number(row.new),
    reviewing: Number(row.reviewing),
    confirmed: Number(row.confirmed),
    declined: Number(row.declined),
  }));

  const sum = (status: MemberStatus) =>
    countries.reduce((total, row) => total + row[status], 0);

  const totals = {
    new: sum("new"),
    reviewing: sum("reviewing"),
    confirmed: sum("confirmed"),
    declined: sum("declined"),
  };

  return {
    ...totals,
    open: totals.new + totals.reviewing,
    total: totals.new + totals.reviewing + totals.confirmed + totals.declined,
    countries,
  };
}

export interface RevealedMember {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly country: string;
  readonly region: string;
  readonly message: string;
  readonly involvementRole: string;
  readonly interestArea: string;
  /** Vetting notes, decrypted. Empty when none were written. */
  readonly notes: string;
  readonly status: MemberStatus;
  readonly statusChangedAt: Date;
  readonly createdAt: Date;
}

export interface MemberSearch {
  readonly query?: string;
  readonly country?: string;
  /** One state, or `open` for everything still awaiting a decision. */
  readonly status?: MemberStatus | "open";
  readonly sort?: MemberSort;
  readonly page?: number;
  readonly pageSize?: number;
}

export interface MemberSearchResult {
  readonly members: readonly RevealedMember[];
  readonly total: number;
  readonly page: number;
  readonly pageCount: number;
  /** True when more rows existed than `SEARCH_SCAN_LIMIT` allowed reading. */
  readonly truncated: boolean;
}

/**
 * Searches and sorts the roll, decrypting as it goes.
 *
 * **Privileged.** Returns names and email addresses in the clear, so callers
 * must hold an elevated session and must audit the call.
 *
 * The country filter and the status filter are applied in SQL, where they are
 * indexed and cost nothing. Name and email matching happens after decryption,
 * which is the price of the encrypted columns not being searchable — and is the
 * right way round: the alternative is a deterministic index that would let
 * whoever steals this table test who is in it.
 */
export async function searchMembersRevealed(
  options: MemberSearch = {},
): Promise<MemberSearchResult> {
  const sql = db();
  const pageSize = Math.min(Math.max(options.pageSize ?? 25, 1), 100);
  const sort = options.sort ?? "country";

  /*
   * `open` is a filter over two states rather than a state of its own, so it
   * expands to a list here and the query matches against the list in every
   * case. One code path, and the index on `status` serves all of them.
   */
  const statuses: readonly MemberStatus[] | null =
    options.status === undefined
      ? null
      : options.status === "open"
        ? OPEN_STATUSES
        : [options.status];

  const rows = await sql<
    {
      id: string;
      name_encrypted: string;
      email_encrypted: string;
      country: string;
      region_encrypted: string | null;
      message_encrypted: string | null;
      notes_encrypted: string | null;
      involvement_role: string;
      interest_area: string;
      status: MemberStatus;
      status_changed_at: Date;
      created_at: Date;
    }[]
  >`
    SELECT id, name_encrypted, email_encrypted, country,
           region_encrypted, message_encrypted, notes_encrypted,
           involvement_role, interest_area, status, status_changed_at, created_at
      FROM member
     WHERE (${options.country ?? null}::text IS NULL OR country = ${options.country ?? null})
       AND (${statuses === null} OR status = ANY(${statuses ?? []}::text[]))
     ORDER BY country ASC, created_at DESC
     LIMIT ${SEARCH_SCAN_LIMIT + 1}
  `;

  const truncated = rows.length > SEARCH_SCAN_LIMIT;
  const scanned = truncated ? rows.slice(0, SEARCH_SCAN_LIMIT) : rows;

  const decrypted = await Promise.all(
    scanned.map(async (row) => ({
      id: row.id,
      // A row whose ciphertext will not open is shown rather than hidden: an
      // administrator cannot delete a corrupt record they cannot see.
      name: (await decryptPiiSafe(row.name_encrypted)) ?? "[unreadable]",
      email: (await decryptPiiSafe(row.email_encrypted)) ?? "[unreadable]",
      country: row.country,
      region: row.region_encrypted
        ? ((await decryptPiiSafe(row.region_encrypted)) ?? "[unreadable]")
        : "",
      message: row.message_encrypted
        ? ((await decryptPiiSafe(row.message_encrypted)) ?? "[unreadable]")
        : "",
      notes: row.notes_encrypted
        ? ((await decryptPiiSafe(row.notes_encrypted)) ?? "[unreadable]")
        : "",
      involvementRole: row.involvement_role,
      interestArea: row.interest_area,
      status: row.status,
      statusChangedAt: row.status_changed_at,
      createdAt: row.created_at,
    })),
  );

  const needle = options.query ? foldForSearch(options.query) : "";
  const matched = needle
    ? decrypted.filter(
        (member) =>
          foldForSearch(member.name).includes(needle) ||
          foldForSearch(member.email).includes(needle),
      )
    : decrypted;

  const sorted = [...matched];
  if (sort === "name") {
    sorted.sort((a, b) => foldForSearch(a.name).localeCompare(foldForSearch(b.name)));
  } else if (sort === "recent") {
    sorted.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  } else if (sort === "waiting") {
    // Oldest first: the queue is worked from the person who has been waiting
    // longest on a decision, not from whoever applied most recently.
    sorted.sort((a, b) => a.statusChangedAt.getTime() - b.statusChangedAt.getTime());
  }
  // "country" is already the SQL ordering, so it needs no second pass.

  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const page = Math.min(Math.max(options.page ?? 1, 1), pageCount);
  const start = (page - 1) * pageSize;

  return {
    members: sorted.slice(start, start + pageSize),
    total: sorted.length,
    page,
    pageCount,
    truncated,
  };
}

/** Erases one record outright. The GDPR right to erasure, and the only delete. */
export async function eraseMember(id: string): Promise<boolean> {
  const [row] = await db()<{ id: string }[]>`
    DELETE FROM member WHERE id = ${id} RETURNING id
  `;
  return Boolean(row);
}

/**
 * Finds a record from an address, for an erasure or access request arriving by
 * email. Goes through the keyed digest, so it works without a search over
 * decrypted rows.
 */
export async function findMemberIdByEmail(email: string): Promise<string | undefined> {
  const [row] = await db()<{ id: string }[]>`
    SELECT id FROM member WHERE email_digest = ${await emailDigest(email)}
  `;
  return row?.id;
}

/*
 * There is deliberately no scheduled deletion here.
 *
 * An earlier draft pruned unreviewed records on a timer, which made sense while
 * the unreviewed state meant "an unverified stranger typed this address". It
 * means the opposite now: `new` is an application nobody has read, and deleting
 * those on a clock would quietly destroy the backlog.
 *
 * `declined` is not on a timer either, and that is the state where the
 * temptation is strongest. It is kept so that somebody already considered and
 * turned down does not reappear as a fresh unread application every time they
 * resubmit — erasing the row erases the email digest that recognises them. The
 * retention is a deliberate choice with a cost, so /privacy states it outright.
 *
 * Records leave this table when somebody decides they should — see
 * `eraseMember`, which remains the answer to an erasure request in any state.
 */

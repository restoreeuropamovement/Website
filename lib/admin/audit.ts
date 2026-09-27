import { chainLink } from "@/lib/admin/audit-chain";
import { db, jsonb } from "@/lib/db";

export type AuditAction =
  | "session.sign-in"
  | "session.sign-out"
  | "session.revoke"
  | "session.elevate"
  | "passkey.register"
  | "passkey.delete"
  /*
   * Admission and removal of administrators. `invite` is recorded against the
   * inviter and `invite.redeem` against the account that was claimed, so the
   * two rows together answer "who let this person in, and did they arrive" —
   * the question an audit log exists to answer about its own readers.
   *
   * The token never appears in the detail. It is a live credential until it is
   * spent, and this table is not encrypted.
   */
  | "admin.invite"
  | "admin.invite.revoke"
  | "admin.invite.redeem"
  | "admin.disable"
  | "journal.create"
  | "journal.update"
  | "journal.publish"
  | "journal.unpublish"
  | "journal.delete"
  /*
   * Reads, not just writes. Everywhere else in this system an audit row marks a
   * change; for the membership roll the read *is* the sensitive event, because
   * the harm in this table is disclosure rather than corruption. Without these
   * two, "who looked at the members, and what did they search for" would be
   * unanswerable after an incident.
   */
  | "member.reveal"
  | "member.create"
  | "member.update"
  /*
   * A vetting note was written or cleared. The note itself never appears in
   * the detail — it is the one column holding one person's opinion of another,
   * and this table is not encrypted. Only that it changed, and on which row.
   */
  | "member.note"
  | "member.erase"
  /*
   * The two writes the public site performs. Recorded with the same care as an
   * administrative action and with no more detail — never a name, an address
   * or a message body, because this log is not encrypted.
   */
  | "member.apply"
  /*
   * Non-delivery of the notification that an application is waiting. Recorded
   * because the alternative is finding out weeks later that nobody was ever
   * told, and because a sudden run of these is itself worth noticing.
   */
  | "member.apply.mail"
  | "enquiry.create"
  /* Non-delivery of the notification that an enquiry is waiting. */
  | "enquiry.create.mail"
  | "enquiry.reveal"
  | "enquiry.update"
  | "enquiry.erase"
  /*
   * The newsletter list. `confirm` and `unsubscribe` are recorded with their
   * outcome but without any token: a failed confirmation is usually an expired
   * link, occasionally somebody guessing at them, and the difference is only
   * visible in the rate.
   */
  | "newsletter.subscribe"
  | "newsletter.confirm"
  | "newsletter.unsubscribe"
  | "newsletter.dispatch"
  /*
   * A session was presented from a client it was not issued to, and was
   * revoked. Usually a browser that updated; occasionally the thing it looks
   * like. Recorded either way, because the distinction is only visible in how
   * often it happens and to whom.
   */
  | "session.mismatch"
  /*
   * Non-delivery of an immediate security alert. The one failure that cannot
   * be allowed to be silent: it means nobody was told about the event that
   * prompted it, while the system behaves as though somebody was.
   */
  | "security.alert.mail"
  /*
   * Gatherings. `reveal` is here for the same reason `member.reveal` is: the
   * sensitive act is reading, because what is read is where people will
   * physically be. The detail never carries the address or the city — this
   * table is not encrypted, and a log of venues would undo the point of
   * encrypting them in the first place.
   */
  | "gathering.reveal"
  | "gathering.create"
  | "gathering.update"
  | "gathering.delete"
  /*
   * Downloadable materials. Both entries carry an id and a category, and the
   * upload also the file's type and size. Neither carries the title: it is
   * free text an operator typed, and this log is the one table that must not
   * slowly accumulate prose nobody has bounded.
   *
   * There is no `material.reveal`. Everywhere else a read is audited it is
   * because disclosure is the harm; here publication is the entire purpose of
   * the row, so looking at one is not an event worth a line.
   */
  | "material.create"
  | "material.delete"
  /* The weekly summary, and its non-delivery. */
  | "security.digest";

export interface AuditEntry {
  readonly action: AuditAction;
  readonly outcome: "success" | "failure";
  readonly actorId?: string | null;
  readonly actorLabel?: string | null;
  readonly detail?: Readonly<Record<string, unknown>>;
  readonly ipHash?: string | null;
}

/*
 * An arbitrary but fixed number identifying the append lock below. Advisory
 * locks share one namespace across the database, so the value only has to not
 * collide with another one — there are no others in this schema.
 */
const AUDIT_APPEND_LOCK = 4_711_002;

/**
 * Appends one entry, linked to the one before it.
 *
 * The lock and the transaction are what the chain costs. A tag computed over
 * the previous tag has to be computed against the tag that will still be last
 * when this row lands, and two administrators acting in the same second would
 * otherwise both read the same tip and write two rows claiming the same
 * predecessor — a fork indistinguishable, later, from a deletion. Serialising
 * the appends removes the possibility rather than making it unlikely.
 *
 * Affordable only because of what this table is. Audit rows are written by
 * human actions on an administrative surface used by a handful of people; the
 * lock is held for one round trip and contention is essentially theoretical.
 * It would be the wrong design for a table taking a thousand writes a second.
 *
 * `id` and `at` are taken from the database but assigned here, because the tag
 * commits to both and cannot be computed after the fact. `nextval` is safe
 * outside the row's own INSERT: sequences do not roll back, so a failed attempt
 * burns a number rather than reusing one.
 */
async function insertAudit(entry: AuditEntry, detail: Readonly<Record<string, unknown>>) {
  await db().begin(async (tx) => {
    await tx`SELECT pg_advisory_xact_lock(${AUDIT_APPEND_LOCK})`;

    const [tip] = await tx<{ chain: string | null }[]>`
      SELECT chain FROM admin_audit ORDER BY id DESC LIMIT 1
    `;

    const [assigned] = await tx<{ id: string }[]>`
      SELECT nextval('admin_audit_id_seq')::text AS id
    `;

    const id = assigned!.id;
    const at = new Date();
    const actorLabel = entry.actorLabel ?? null;
    const ipHash = entry.ipHash ?? null;

    const chain = await chainLink(tip?.chain ?? null, {
      id,
      at,
      actorLabel,
      action: entry.action,
      outcome: entry.outcome,
      detail,
      ipHash,
    });

    await tx`
      INSERT INTO admin_audit (id, at, actor_id, actor_label, action, outcome, detail, ip_hash, chain)
      VALUES (
        ${id},
        ${at},
        ${entry.actorId ?? null},
        ${actorLabel},
        ${entry.action},
        ${entry.outcome},
        ${jsonb(detail)},
        ${ipHash},
        ${chain}
      )
    `;
  });
}

/**
 * Records an administrative action.
 *
 * Failures are recorded as deliberately as successes: a run of
 * `session.sign-in` failures is the signal that someone is probing, and it is
 * the only such signal this system produces.
 *
 * Writing the log must never be able to abort the action it describes, nor to
 * turn a rejected sign-in into a 500 that tells the caller their guess was
 * interesting. Hence the swallowed error — logged to the server console, never
 * surfaced to the client. That trade is not negotiable and is not what the
 * second attempt below changes.
 *
 * What it changes is the shape of the failure. `detail` is the only part of an
 * entry assembled from arbitrary values, so it is the part that can fail on its
 * own — an object that will not serialise, a value far larger than expected.
 * Losing the whole entry to that means the log goes quiet about an action that
 * did happen, which is the one failure mode a log must not have. So a rejected
 * write is retried once with the detail replaced by a marker: the retry keeps
 * who, what and when, and admits that the particulars were dropped. An entry
 * saying less than it should is worth a great deal more than no entry at all.
 *
 * Returns whether anything was written, so a caller that wants to react can.
 * None does today, and nothing should start treating a `false` as grounds to
 * refuse the action it has already performed.
 */
export async function recordAudit(entry: AuditEntry): Promise<boolean> {
  try {
    await insertAudit(entry, entry.detail ?? {});
    return true;
  } catch (error) {
    console.error("[admin][audit] entry rejected", entry.action, error);
  }

  try {
    await insertAudit(entry, { detailDropped: true });
    console.error("[admin][audit] recorded without detail", entry.action);
    return true;
  } catch (error) {
    /*
     * Both attempts failed, so the table is unreachable rather than fussy about
     * one value. Distinctly worded because this line, and only this line, means
     * the record now has a hole in it.
     */
    console.error("[admin][audit] ENTRY LOST", entry.action, entry.outcome, error);
    return false;
  }
}

export interface AuditRow {
  readonly id: string;
  readonly at: Date;
  readonly actorLabel: string | null;
  readonly action: string;
  readonly outcome: "success" | "failure";
  readonly detail: Record<string, unknown>;
  readonly ipHash: string | null;
}

export interface ChainVerdict {
  /** Entries examined. Zero means an empty log, which verifies trivially. */
  readonly checked: number;
  /** Entries written before the chain column existed, and so unverifiable. */
  readonly unchained: number;
  /**
   * The id of the earliest entry whose tag does not match its contents and its
   * predecessor, or null if every examined link holds. One break is all that is
   * reported: everything after a break fails as a consequence of it, so listing
   * the rest would say nothing and would bury the position that matters.
   */
  readonly brokenAt: string | null;
}

/**
 * Recomputes the chain and reports where, if anywhere, it stops holding.
 *
 * `limit` bounds the walk so the security page can show a verdict without
 * reading the whole table; the seed is the stored tag of the entry immediately
 * before the window, which is itself unverified. So a bounded run proves the
 * window is internally consistent and consistent with what precedes it — not
 * that the earlier history is intact. Pass `Infinity`, as `npm run
 * db:verify-audit` does, for the claim that covers everything.
 *
 * Entries with no tag at all are counted rather than failed. They are the rows
 * that existed before the column did, and calling honest old data a forgery
 * would make the check cry wolf from the day it shipped.
 */
export async function verifyAuditChain(limit = 500): Promise<ChainVerdict> {
  const sql = db();
  const bounded = Number.isFinite(limit);

  /*
   * `id` comes back as text because every consumer of this treats it as a label
   * rather than a number. It must not also be what either `ORDER BY` sorts on:
   * a bare name there resolves against the *output* columns first, so
   * `SELECT id::text … ORDER BY id` orders the log lexicographically — entry 10
   * before entry 9 — and a chain walked out of order breaks at the tenth row on
   * any real database. The alias keeps the sort on the integer and the reply on
   * the string, with nothing left for a reader to resolve by hand.
   */
  const rows = await sql<
    {
      id: string;
      at: Date;
      actor_label: string | null;
      action: string;
      outcome: string;
      detail: Record<string, unknown>;
      ip_hash: string | null;
      chain: string | null;
    }[]
  >`
    SELECT ordinal::text AS id, at, actor_label, action, outcome, detail, ip_hash, chain
      FROM (
        SELECT id AS ordinal, at, actor_label, action, outcome, detail, ip_hash, chain
          FROM admin_audit
         ORDER BY id DESC
         ${bounded ? sql`LIMIT ${limit}` : sql``}
      ) window_rows
     ORDER BY ordinal
  `;

  if (rows.length === 0) return { checked: 0, unchained: 0, brokenAt: null };

  /*
   * The tag the first examined entry should be built on. Read separately
   * because a bounded walk starts in the middle of the chain; absent for an
   * unbounded one, which starts at the beginning where there is nothing before.
   */
  const [before] = await sql<{ chain: string | null }[]>`
    SELECT chain FROM admin_audit WHERE id < ${rows[0]!.id}::bigint ORDER BY id DESC LIMIT 1
  `;

  let previous = before?.chain ?? null;
  let unchained = 0;
  let brokenAt: string | null = null;

  for (const row of rows) {
    if (row.chain === null) {
      unchained += 1;
      continue;
    }

    const expected = await chainLink(previous, {
      id: row.id,
      at: row.at,
      actorLabel: row.actor_label,
      action: row.action,
      outcome: row.outcome,
      detail: row.detail,
      ipHash: row.ip_hash,
    });

    if (expected !== row.chain) {
      brokenAt ??= row.id;
      /*
       * Carry on from what is stored rather than from what was expected. After
       * a break every later link is computed against the stored tag, so the
       * rest of the log still verifies among itself and the report names one
       * position instead of every position after it.
       */
    }

    previous = row.chain;
  }

  return { checked: rows.length, unchained, brokenAt };
}

export interface AuditSummaryRow {
  readonly action: string;
  readonly outcome: string;
  readonly count: number;
}

/**
 * How many of each kind of entry were recorded over the last `days` days.
 *
 * Counts only. Everything this returns is already non-personal — the log is
 * written that way — but it is worth saying that this is the shape the weekly
 * digest needs, and no other shape would be safe to put in an email.
 */
export async function auditSummary(days: number): Promise<readonly AuditSummaryRow[]> {
  const sql = db();

  const rows = await sql<{ action: string; outcome: string; count: string }[]>`
    SELECT action, outcome, count(*) AS count
      FROM admin_audit
     WHERE at > now() - ${`${days} days`}::interval
     GROUP BY action, outcome
     ORDER BY count(*) DESC
  `;

  return rows.map((row) => ({
    action: row.action,
    outcome: row.outcome,
    count: Number(row.count),
  }));
}

export async function recentAudit(limit = 50): Promise<readonly AuditRow[]> {
  const sql = db();
  const rows = await sql<
    {
      id: string;
      at: Date;
      actor_label: string | null;
      action: string;
      outcome: "success" | "failure";
      detail: Record<string, unknown>;
      ip_hash: string | null;
    }[]
  >`
    SELECT
      a.id, a.at, a.action, a.outcome, a.detail, a.ip_hash,
      -- The stored label wins: written at the time of the action, it survives
      -- the actor's deletion, which nulls actor_id. The join covers entries
      -- recorded before a label was known: enrolling the first passkey creates
      -- the account mid-ceremony, so there is an id but no name to write yet.
      COALESCE(a.actor_label, u.username) AS actor_label
    FROM admin_audit a
    LEFT JOIN admin_user u ON u.id = a.actor_id
    ORDER BY a.at DESC
    LIMIT ${limit}
  `;

  return rows.map((row) => ({
    id: String(row.id),
    at: row.at,
    actorLabel: row.actor_label,
    action: row.action,
    outcome: row.outcome,
    detail: row.detail,
    ipHash: row.ip_hash,
  }));
}

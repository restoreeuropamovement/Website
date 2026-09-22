import { db, jsonb } from "@/lib/db";

export type AuditAction =
  | "session.sign-in"
  | "session.sign-out"
  | "session.revoke"
  | "session.elevate"
  | "passkey.register"
  | "passkey.delete"
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
  | "member.erase"
  /*
   * The two writes the public site performs. Recorded with the same care as an
   * administrative action and with no more detail — never a name, an address
   * or a message body, because this log is not encrypted.
   */
  | "member.apply"
  /*
   * Non-delivery of the acknowledgement. Recorded because the alternative is
   * finding out weeks later that nobody who applied was ever written to, and
   * because a sudden run of these is itself worth noticing.
   */
  | "member.apply.mail"
  | "enquiry.create"
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
  | "newsletter.dispatch";

export interface AuditEntry {
  readonly action: AuditAction;
  readonly outcome: "success" | "failure";
  readonly actorId?: string | null;
  readonly actorLabel?: string | null;
  readonly detail?: Readonly<Record<string, unknown>>;
  readonly ipHash?: string | null;
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
 * surfaced to the client.
 */
export async function recordAudit(entry: AuditEntry): Promise<void> {
  try {
    const sql = db();
    await sql`
      INSERT INTO admin_audit (actor_id, actor_label, action, outcome, detail, ip_hash)
      VALUES (
        ${entry.actorId ?? null},
        ${entry.actorLabel ?? null},
        ${entry.action},
        ${entry.outcome},
        ${jsonb(entry.detail ?? {})},
        ${entry.ipHash ?? null}
      )
    `;
  } catch (error) {
    console.error("[admin] failed to write audit entry", entry.action, error);
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

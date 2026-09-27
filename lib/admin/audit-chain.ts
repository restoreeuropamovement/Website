import { sign } from "@/lib/admin/crypto";

/**
 * Makes the audit log tamper-*evident* rather than merely tamper-resistant.
 *
 * The append-only trigger in `db/schema.sql` stops an ordinary statement from
 * rewriting history, and that is worth having. What it cannot stop is somebody
 * with rights over the schema, who drops the trigger, edits the row, and puts
 * the trigger back. That is not a far-fetched attacker: it is the holder of a
 * leaked connection string, or an administrator covering their own tracks —
 * precisely the reader the log exists to catch, and the one most motivated to
 * reach for it.
 *
 * So each entry carries a keyed tag over its own contents and the tag of the
 * entry before it. Editing a row invalidates its tag; recomputing that tag
 * invalidates every tag after it; deleting a row leaves a gap where two links
 * no longer meet. The chain cannot be quietly repaired because the key is the
 * session secret, which lives in the environment and not in the table. Whoever
 * steals the database can destroy the log's integrity — nothing stored beside
 * the data it protects can prevent that — but they can no longer do it without
 * the destruction being provable afterwards, which is the property that matters
 * when the question is whether a record can be trusted.
 *
 * ## Two things deliberately left out of the tag
 *
 * `actor_id` is excluded because the schema nulls it when an administrator's
 * account is deleted, by a foreign key the append-only trigger specifically
 * permits so that the log outlives the account. Including it would turn every
 * such deletion into a chain break indistinguishable from an attack. Nothing is
 * lost: `actor_label` holds the name, is immutable, and is covered.
 *
 * `chain` itself is excluded for the obvious reason.
 *
 * ## And one consequence worth knowing before it surprises someone
 *
 * The key is `ADMIN_SESSION_SECRET`. Rotating that secret — which is otherwise a
 * routine thing to do — means every link written before the rotation stops
 * verifying. The verifier reports the position of the earliest break rather than
 * a bare pass or fail, so a break at exactly the moment of a known rotation
 * reads differently from a break in the middle of last Tuesday. Rotate the
 * secret deliberately, and write down when.
 */

/** The columns a link commits to, in this order. */
export interface ChainedEntry {
  readonly id: string;
  readonly at: Date;
  readonly actorLabel: string | null;
  readonly action: string;
  readonly outcome: string;
  readonly detail: Readonly<Record<string, unknown>>;
  readonly ipHash: string | null;
}

/**
 * Key order is not preserved by `jsonb`: PostgreSQL stores object keys sorted
 * by length and then bytewise, so the detail that comes back out of the table
 * is not textually the detail that went in. Sorting on both sides makes the
 * writer and the verifier agree without either depending on how the database
 * chose to store it.
 */
function canonical(value: unknown): string {
  if (value === null || typeof value !== "object") return JSON.stringify(value) ?? "null";
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;

  const entries = Object.entries(value as Record<string, unknown>)
    .filter(([, v]) => v !== undefined)
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([k, v]) => `${JSON.stringify(k)}:${canonical(v)}`);

  return `{${entries.join(",")}}`;
}

/**
 * The tag for one entry, given the tag of the one before it.
 *
 * `previous` is null only for the first entry ever written, and for the first
 * entry written after this column was added to an existing table — see
 * `verifyAuditChain` for how that boundary is reported.
 *
 * Fields are joined with a character that cannot occur in any of them once
 * JSON-quoted, so no combination of values can be rearranged into a different
 * entry with the same tag.
 */
export async function chainLink(previous: string | null, entry: ChainedEntry): Promise<string> {
  const body = [
    previous ?? "",
    entry.id,
    entry.at.toISOString(),
    JSON.stringify(entry.actorLabel),
    JSON.stringify(entry.action),
    JSON.stringify(entry.outcome),
    canonical(entry.detail),
    JSON.stringify(entry.ipHash),
  ].join("\n");

  return sign(`audit-chain:${body}`);
}

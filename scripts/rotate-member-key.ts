import postgres from "postgres";
import type { Sql } from "postgres";
import { sslMode } from "../lib/db";

/**
 * Re-encrypts every personal field under a new `MEMBER_ENCRYPTION_KEY`.
 *
 * Application-layer encryption buys the property that the database alone is
 * worthless, and the price of that property is this script. The provider cannot
 * re-key the data for us, because the provider cannot read it. Without a way to
 * re-wrap, "the member key may have leaked" is a question with no answer that
 * keeps the roll — and a movement facing it would keep using the key.
 *
 * ## Running it
 *
 *   1. Keep the compromised or expiring key, and put it in
 *      `MEMBER_ENCRYPTION_KEY_PREVIOUS`.
 *   2. Generate a new one and set `MEMBER_ENCRYPTION_KEY` to it.
 *   3. `npm run db:rotate-key` — first without `--commit` to see the plan, then
 *      with it.
 *   4. Redeploy, then remove `MEMBER_ENCRYPTION_KEY_PREVIOUS` and redeploy
 *      again.
 *
 * Between steps 2 and 4 the site works: `decryptPii` falls back to the outgoing
 * key, and the digest lookups try both. That window is what makes this
 * survivable — an interrupted run leaves a mixed table, not a broken one, and
 * re-running finishes the job.
 *
 * ## What it does not do
 *
 * It cannot re-key what has already left. Unsubscribe tags are derived, not
 * stored, so links in issues already sent stop verifying once step 4 removes
 * the old key. Nothing else in the system depends on a value that has been
 * mailed out.
 *
 * ## Why it decrypts everything in one process
 *
 * Every plaintext in the roll passes through this program's memory, which is
 * the one thing the design otherwise never does. There is no way around it —
 * re-wrapping *means* unwrapping — so the mitigations are that it runs briefly,
 * writes no file, prints no personal data even on failure, and lives behind a
 * flag rather than being something you can start by accident.
 */

/**
 * Every column holding a value encrypted under the member key.
 *
 * A column missing from this list is not a column that fails to rotate — it is
 * a column that is destroyed, silently, at step 4, when the key that could
 * still read it is unset. So the list is the whole correctness of this script,
 * and the way to check it is `encryptPii` at every call site rather than memory
 * of which tables hold people.
 */
const TABLES = [
  { table: "member", columns: ["name_encrypted", "email_encrypted", "region_encrypted", "message_encrypted", "notes_encrypted"], email: "email_encrypted", digest: "email_digest" },
  { table: "enquiry", columns: ["name_encrypted", "email_encrypted", "message_encrypted"], email: null, digest: null },
  { table: "subscriber", columns: ["email_encrypted"], email: "email_encrypted", digest: "email_digest" },
  /*
   * Gatherings are here because they are encrypted under the same key, and they
   * are the rows whose loss would be worst: `venue_encrypted` is the address of
   * a meeting that was deliberately not published, and it exists nowhere else.
   * A public gathering's address is in `venue` in the clear and is not touched.
   */
  { table: "gathering", columns: ["venue_encrypted", "notes_encrypted"], email: null, digest: null },
] as const;

/** Small enough that a whole page fits comfortably in memory, and it is over quickly. */
const PAGE = 200;

interface Totals {
  rows: number;
  values: number;
  digests: number;
  skipped: number;
}

async function rotateTable(
  sql: Sql,
  spec: (typeof TABLES)[number],
  commit: boolean,
  pii: typeof import("../lib/admin/pii"),
): Promise<Totals> {
  const totals: Totals = { rows: 0, values: 0, digests: 0, skipped: 0 };
  const columns = [...spec.columns];

  /*
   * Paged by id rather than by offset. An offset walk over a table being
   * written to concurrently skips rows, and the rows it would skip here are
   * people who would stay encrypted under a key we are about to discard.
   */
  let after = "00000000-0000-0000-0000-000000000000";

  for (;;) {
    const rows = await sql<Record<string, string | null>[]>`
      SELECT id, ${sql(columns)}
        FROM ${sql(spec.table)}
       WHERE id > ${after}::uuid
       ORDER BY id
       LIMIT ${PAGE}
    `;
    if (rows.length === 0) break;
    after = rows[rows.length - 1]!.id!;

    for (const row of rows) {
      totals.rows += 1;
      const update: Record<string, string> = {};

      for (const column of columns) {
        const value = row[column];
        if (!value) continue;

        /*
         * Decrypt-then-re-encrypt, unconditionally. There is no cheap test for
         * "which key was this written under" — that is the whole point of the
         * nonce — so a row already migrated simply costs one decryption under
         * the current key and is written back re-nonced. Idempotent, and a
         * re-run after an interruption is therefore safe.
         */
        let plaintext: string;
        try {
          plaintext = await pii.decryptPii(value);
        } catch {
          /*
           * Neither key opens it. Reported by id and left exactly as it is:
           * overwriting an unreadable value would destroy the only copy of
           * whatever it holds, and the operator needs to know it exists.
           */
          console.error(`  ! ${spec.table} ${row.id}.${column}: undecryptable, left untouched`);
          totals.skipped += 1;
          continue;
        }

        update[column] = await pii.encryptPii(plaintext);
        totals.values += 1;

        /*
         * The digest is keyed too, so it has to move with the ciphertext or the
         * row stops matching its own address. Recomputed from the plaintext we
         * already hold rather than from the stored digest, which is one-way.
         */
        if (spec.digest && column === spec.email) {
          update[spec.digest] = await pii.emailDigest(plaintext);
          totals.digests += 1;
        }
      }

      if (!commit || Object.keys(update).length === 0) continue;

      await sql`
        UPDATE ${sql(spec.table)} SET ${sql(update)} WHERE id = ${row.id!}::uuid
      `;
    }
  }

  return totals;
}

async function main(): Promise<void> {
  const commit = process.argv.includes("--commit");

  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL is not set. Put it in .env.local or export it.");
    process.exit(1);
  }
  if (!process.env.MEMBER_ENCRYPTION_KEY) {
    console.error("MEMBER_ENCRYPTION_KEY is not set. It must hold the *new* key.");
    process.exit(1);
  }
  if (!process.env.MEMBER_ENCRYPTION_KEY_PREVIOUS) {
    console.error(
      "MEMBER_ENCRYPTION_KEY_PREVIOUS is not set. It must hold the key being rotated away from,\n" +
        "or this run would decrypt nothing and there would be nothing to re-wrap.",
    );
    process.exit(1);
  }

  /*
   * Imported here rather than at the top so the environment checks above fail
   * with their own message: `lib/admin/env.ts` throws on a missing key at first
   * use, and a stack trace is a worse answer than a sentence.
   */
  const pii = await import("../lib/admin/pii");

  const sql = postgres(url, { max: 1, ssl: sslMode() });

  console.log(
    commit
      ? "Rotating the member encryption key. Writing changes."
      : "Dry run — nothing will be written. Re-run with --commit to apply.",
  );

  try {
    let skipped = 0;
    for (const spec of TABLES) {
      const totals = await rotateTable(sql, spec, commit, pii);
      skipped += totals.skipped;
      console.log(
        `  ${spec.table}: ${totals.rows} rows, ${totals.values} values re-wrapped, ` +
          `${totals.digests} digests recomputed`,
      );
    }

    if (skipped > 0) {
      console.error(
        `\n${skipped} value(s) could not be decrypted under either key and were left as they are.\n` +
          "Do not remove MEMBER_ENCRYPTION_KEY_PREVIOUS until you know what they are.",
      );
      process.exitCode = 1;
      return;
    }

    console.log(
      commit
        ? "\nDone. Redeploy, confirm the admin surface reads correctly, then remove\n" +
            "MEMBER_ENCRYPTION_KEY_PREVIOUS and redeploy again."
        : "\nDry run complete. Nothing was written.",
    );
  } finally {
    await sql.end();
  }
}

main().catch((error) => {
  // Deliberately the message only. An error thrown mid-decryption can carry a
  // buffer, and this is the one process where that buffer is somebody's name.
  console.error("Rotation failed:", error instanceof Error ? error.message : "unknown error");
  process.exit(1);
});

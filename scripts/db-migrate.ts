import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import postgres from "postgres";

/**
 * Applies `db/schema.sql`.
 *
 * The schema is written to be idempotent — every statement is `IF NOT EXISTS` —
 * so this is safe to run repeatedly and against a database that already holds
 * essays. There is no down migration and nothing here drops a table: a deploy
 * script that can destroy the journal is not worth the convenience.
 *
 * Run with: npm run db:migrate
 */
const here = dirname(fileURLToPath(import.meta.url));

async function main(): Promise<void> {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL is not set. Put it in .env.local or export it.");
    process.exit(1);
  }

  const schema = await readFile(join(here, "..", "db", "schema.sql"), "utf8");
  const sql = postgres(url, {
    max: 1,
    ssl: process.env.DATABASE_SSL === "disable" ? false : "require",
  });

  try {
    // `sql.unsafe` is required to send a multi-statement script. The input is a
    // file committed to this repository, not anything supplied at runtime.
    await sql.unsafe(schema);
    console.log("Schema applied.");
  } finally {
    await sql.end();
  }
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});

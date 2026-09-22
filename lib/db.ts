import postgres from "postgres";
import { databaseUrl, hasDatabase } from "@/lib/admin/env";

/**
 * The Postgres connection.
 *
 * `postgres.js` is driver-agnostic about the host, so this works against Neon,
 * Supabase, Vercel Postgres or a plain server. Every query in this codebase goes
 * through its tagged-template API, which sends values as bound parameters — the
 * reason there is no string interpolation anywhere near SQL in this project.
 *
 * The connection is cached on `globalThis` because `next dev` re-evaluates
 * modules on every edit; without the cache each save would open a new pool and
 * exhaust the server's connection limit within a few minutes.
 */
const globalForDb = globalThis as unknown as {
  restoreEuropaDb?: ReturnType<typeof postgres>;
};

function connect() {
  return postgres(databaseUrl(), {
    // Serverless invocations are short-lived and concurrent; a large pool per
    // instance is how you run a managed Postgres out of connections.
    max: 5,
    idle_timeout: 20,
    connect_timeout: 10,
    // Surfaces as `require` for hosted providers and is ignored for local
    // sockets, so TLS is never silently skipped in production.
    ssl: process.env.DATABASE_SSL === "disable" ? false : "require",
    transform: { undefined: null },
  });
}

export function db() {
  if (!globalForDb.restoreEuropaDb) {
    globalForDb.restoreEuropaDb = connect();
  }
  return globalForDb.restoreEuropaDb;
}

/**
 * Wraps a value for a `jsonb` column.
 *
 * `postgres.js` types `sql.json()` against its own structural `JSONValue`, which
 * the project's `readonly` content interfaces cannot satisfy because they carry
 * no index signature. The values passed here are plain JSON-serialisable data,
 * so the assertion is sound; keeping it in one helper stops it being repeated at
 * every call site where a reviewer would have to re-derive that it is safe.
 */
export function jsonb(value: unknown) {
  return db().json(value as Parameters<ReturnType<typeof db>["json"]>[0]);
}

export { hasDatabase };

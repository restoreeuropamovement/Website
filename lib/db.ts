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

/**
 * Transport security for the connection. Shared with `scripts/db-migrate.ts`
 * and `scripts/db-seed.ts`, which open their own pools and must not drift.
 *
 * `verify-full` rather than `require`, because postgres.js reads `require` as
 * "encrypt, but do not check who answered": it sets `rejectUnauthorized` to
 * false, so anything able to intercept the route to Postgres can present a
 * certificate of its own and sit in the middle of the connection. The roll
 * survives that — `lib/admin/pii.ts` encrypts before a value ever reaches the
 * wire — and nothing else does. `country`, the whole of `admin_audit`, the
 * journal and every session digest travel in the clear inside the tunnel, and
 * the connection string is handed over at the start of it.
 *
 * This is set as an option rather than left to `sslmode` in the URL because
 * postgres.js lets the option win, so the verification cannot be turned off by
 * editing a query parameter onto `DATABASE_URL`.
 *
 * `DATABASE_SSL=disable` remains, because `npm run db:dev` serves Postgres over
 * a loopback socket that has no certificate to verify. It is refused in
 * production rather than honoured: a variable that switches off transport
 * security is one nobody notices is still set.
 */
export function sslMode(): "verify-full" | false {
  if (process.env.DATABASE_SSL !== "disable") return "verify-full";

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      'DATABASE_SSL=disable is refused in production. Unset it so the connection verifies the server\'s certificate — see README.md, "Database".',
    );
  }

  return false;
}

function connect() {
  return postgres(databaseUrl(), {
    // Serverless invocations are short-lived and concurrent; a large pool per
    // instance is how you run a managed Postgres out of connections.
    max: 5,
    idle_timeout: 20,
    connect_timeout: 10,
    ssl: sslMode(),
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

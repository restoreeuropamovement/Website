/**
 * A local Postgres for development, with nothing to install.
 *
 * PGlite is Postgres compiled to WebAssembly; `PGLiteSocketServer` puts it
 * behind the real wire protocol, so `postgres.js` connects to it exactly as it
 * would to a hosted database. That matters: the schema, the queries and the
 * `jsonb` round-trips are all genuinely exercised rather than mocked.
 *
 * It is not a production database. Data lives in `.pgdata/`, which is
 * gitignored, and PGlite runs single-threaded — fine for development, including
 * the parallel workers `next build` fans out across.
 *
 *   npm run db:dev                       # leave running in its own terminal
 *   DATABASE_URL="postgres://postgres:postgres@127.0.0.1:5433/postgres"
 *   DATABASE_SSL=disable                 # no TLS on a loopback socket
 *
 * Then `npm run db:migrate` and `npm run db:seed` in another terminal.
 */
import { PGlite } from "@electric-sql/pglite";
import { PGLiteSocketServer } from "@electric-sql/pglite-socket";

const PORT = Number(process.env.DEV_DB_PORT ?? 5433);

const db = await PGlite.create({ dataDir: "./.pgdata" });
const server = new PGLiteSocketServer({
  db,
  port: PORT,
  host: "127.0.0.1",
  // `next build` fans out across one worker per core, each opening its own pool.
  maxConnections: 100,
});

await server.start();
console.log(`PGlite listening on postgres://127.0.0.1:${PORT}/postgres`);
console.log("Set DATABASE_SSL=disable alongside DATABASE_URL. Ctrl-C to stop.");

async function shutdown() {
  await server.stop();
  await db.close();
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

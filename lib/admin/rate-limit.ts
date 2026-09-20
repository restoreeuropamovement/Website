import { db } from "@/lib/db";

/**
 * Fixed-window throttling for authentication ceremonies.
 *
 * The counter lives in Postgres rather than in memory because the site runs as
 * serverless functions: an in-process `Map` would give each concurrent instance
 * its own allowance, which an attacker gets to multiply by simply opening more
 * connections. A shared row is the only counter that means anything here.
 *
 * The increment is a single atomic `INSERT ... ON CONFLICT`, so two requests
 * arriving together cannot both read the old count and both decide they are
 * under the limit.
 */
export interface RateLimitResult {
  readonly allowed: boolean;
  readonly count: number;
  readonly retryAfterSeconds: number;
}

export async function consumeRateLimit(
  bucket: string,
  limit: number,
  windowSeconds: number,
): Promise<RateLimitResult> {
  const sql = db();
  const interval = `${windowSeconds} seconds`;

  const [row] = await sql<{ count: number; age_seconds: number }[]>`
    INSERT INTO admin_rate_limit AS rl (bucket, window_start, count)
    VALUES (${bucket}, now(), 1)
    ON CONFLICT (bucket) DO UPDATE
      SET count = CASE
            WHEN rl.window_start < now() - ${interval}::interval THEN 1
            ELSE rl.count + 1
          END,
          window_start = CASE
            WHEN rl.window_start < now() - ${interval}::interval THEN now()
            ELSE rl.window_start
          END
    RETURNING count, EXTRACT(EPOCH FROM (now() - window_start))::int AS age_seconds
  `;

  const count = Number(row?.count ?? 0);
  return {
    allowed: count <= limit,
    count,
    retryAfterSeconds: Math.max(1, windowSeconds - Number(row?.age_seconds ?? 0)),
  };
}

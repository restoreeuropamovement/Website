import { NextResponse } from "next/server";
import { archiveTraffic } from "@/lib/admin/archive";
import { constantTimeEqual } from "@/lib/admin/crypto";
import { sweepEphemera } from "@/lib/admin/sweep";

/**
 * Nightly: copy Vercel's daily figures into `traffic_day` before the plan's
 * window forgets them.
 *
 * Authorised by `CRON_SECRET`, which Vercel sends as a bearer token on its own
 * scheduled invocations. The check is not ceremony: without it anyone could
 * call this endpoint repeatedly and spend the project's upstream API quota,
 * and an analytics reader that has been rate-limited into silence reports
 * nothing at exactly the moment somebody wants a figure.
 *
 * Following the project's env contract, the secret has no default. Unset means
 * refuse, never "allow everything" — a cron endpoint that falls open when
 * misconfigured is a published endpoint.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "CRON_SECRET is not set; refusing to run." },
      { status: 503 },
    );
  }

  /*
   * Compared in constant time, like every other secret in this codebase. A
   * network round trip buries the timing difference of an early-exit `!==`
   * deep enough that this is not a practical attack on a high-entropy secret —
   * but "not practical today" is a worse reason to write a comparison one way
   * than "the same way as everywhere else" is to write it the other, and an
   * exception here is the one a reader would have to stop and re-derive.
   */
  if (!constantTimeEqual(request.headers.get("authorization") ?? "", `Bearer ${secret}`)) {
    return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  }

  /*
   * The sweep runs first and independently of the archive. It is the cheaper
   * and the more load-bearing of the two: a night when Vercel is unreachable
   * costs one day of history, whereas a month when nothing is swept leaves a
   * row per visitor sitting in the throttle table forever.
   */
  const swept = await sweepEphemera();
  const outcome = await archiveTraffic();

  return NextResponse.json(
    { ...outcome, swept },
    { status: outcome.state === "error" ? 502 : 200 },
  );
}

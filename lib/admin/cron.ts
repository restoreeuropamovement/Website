import { NextResponse } from "next/server";
import { constantTimeEqual } from "@/lib/admin/crypto";

/**
 * The door every scheduled job is behind.
 *
 * Authorised by `CRON_SECRET`, which Vercel sends as a bearer token on its own
 * scheduled invocations. The check is not ceremony: without it anyone could
 * call these endpoints repeatedly, spending the project's upstream API quota
 * and running a delete against the subscriber table on a schedule of their
 * choosing.
 *
 * Following the project's env contract, the secret has no default. Unset means
 * refuse, never "allow everything" — a cron endpoint that falls open when
 * misconfigured is a published endpoint. 503 rather than 401 because the
 * caller did nothing wrong and nothing it can send would help; the deployment
 * is the thing that is missing a part.
 *
 * It lives here rather than in each route because the two remaining jobs must
 * authorise identically, and the surest way to say "identically" is to say it
 * once. A cron endpoint that authorises itself differently from its neighbour
 * is the one a reader has to stop and re-derive.
 *
 * Returns the refusal to send, or `null` when the caller may proceed.
 */
export function refuseUnauthorisedCron(request: Request): NextResponse | null {
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
   * than "the same way as everywhere else" is to write it the other.
   */
  if (!constantTimeEqual(request.headers.get("authorization") ?? "", `Bearer ${secret}`)) {
    return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  }

  return null;
}

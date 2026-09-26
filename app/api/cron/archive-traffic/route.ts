import { NextResponse } from "next/server";
import { archiveTraffic } from "@/lib/admin/archive";

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

  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  }

  const outcome = await archiveTraffic();
  return NextResponse.json(outcome, { status: outcome.state === "error" ? 502 : 200 });
}

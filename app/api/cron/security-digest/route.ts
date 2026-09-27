import { NextResponse } from "next/server";
import { securityDigest } from "@/content/emails";
import { raiseSecurityAlert } from "@/lib/admin/alerts";
import { auditSummary, recordAudit, verifyAuditChain } from "@/lib/admin/audit";
import { constantTimeEqual } from "@/lib/admin/crypto";
import { mailNotifyAddress } from "@/lib/admin/env";
import { sendEmail } from "@/lib/email";

/**
 * Weekly: a summary of administrative activity, and a verdict on the audit log.
 *
 * The immediate alerts in `lib/admin/alerts.ts` cover the events that cannot
 * wait. This covers the ones that are only visible in aggregate — a drift in
 * how often the roll is read, an account that has stopped signing in, a run of
 * failures too slow to trip a threshold — and it is the only thing that
 * regularly *runs* the chain verification. A tamper-evident log that nobody
 * checks is tamper-evident in the same sense that an unwatched camera is
 * surveillance.
 *
 * Sending it on a schedule also makes its absence informative. A week with no
 * summary means the cron, the mail provider or the deployment is broken, which
 * is worth knowing; a system that only mails when something is wrong cannot be
 * distinguished from one that has quietly stopped mailing.
 *
 * Authorised exactly like the nightly archive: `CRON_SECRET`, no default,
 * refuse when unset.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "CRON_SECRET is not set; refusing to run." },
      { status: 503 },
    );
  }

  if (!constantTimeEqual(request.headers.get("authorization") ?? "", `Bearer ${secret}`)) {
    return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  }

  /*
   * Verified before the summary is composed, and over the whole log rather than
   * a recent window. This is the run that is allowed to be slow: once a week,
   * off the request path, with nobody waiting.
   */
  const chain = await verifyAuditChain(Infinity);
  const activity = await auditSummary(7);
  const failures = activity.reduce(
    (running, entry) => running + (entry.outcome === "failure" ? entry.count : 0),
    0,
  );

  /*
   * A broken chain does not wait for the digest to be read. The summary says so
   * as well, but this is the one finding in it that means something is wrong
   * right now, and it belongs in the channel reserved for those.
   */
  if (chain.brokenAt !== null) raiseSecurityAlert("audit.broken");

  const notify = mailNotifyAddress();
  if (!notify) {
    return NextResponse.json({ state: "unconfigured", chainBrokenAt: chain.brokenAt });
  }

  const result = await sendEmail({
    to: notify,
    ...securityDigest({
      activity: collapse(activity),
      chainBrokenAt: chain.brokenAt,
    }),
  });

  await recordAudit({
    action: "security.digest",
    outcome: result.ok ? "success" : "failure",
    actorLabel: "security digest",
    detail: {
      entries: chain.checked,
      chainIntact: chain.brokenAt === null,
      ...(result.ok ? {} : { reason: result.reason }),
    },
  });

  return NextResponse.json(
    { state: result.ok ? "sent" : result.reason, chainBrokenAt: chain.brokenAt, failures },
    { status: result.ok ? 200 : 502 },
  );
}

/**
 * Folds the success and failure rows for one action into a single line, then
 * orders by frequency. The reader wants "what happened and how much", not a
 * table they have to add up.
 */
function collapse(
  activity: readonly { action: string; outcome: string; count: number }[],
): readonly (readonly [string, number])[] {
  const totals = new Map<string, number>();

  for (const entry of activity) {
    /* Failures are named as such: eight sign-ins and eight refused sign-ins
     * are the same number and opposite news. */
    const label = entry.outcome === "failure" ? `${entry.action} (failed)` : entry.action;
    totals.set(label, (totals.get(label) ?? 0) + entry.count);
  }

  return [...totals].sort(([, a], [, b]) => b - a);
}

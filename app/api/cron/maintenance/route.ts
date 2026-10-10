import { NextResponse } from "next/server";
import { refuseUnauthorisedCron } from "@/lib/admin/cron";
import { maintenanceStatus, runMaintenance } from "@/lib/admin/maintenance";

/**
 * Nightly: everything this deployment does on a daily clock.
 *
 * One route rather than three because the account is on Vercel's Hobby plan,
 * which permits two cron jobs firing at most once a day each. The weekly
 * security digest holds the other entry in `vercel.json`; the traffic archive,
 * the ephemera sweep and the unconfirmed-subscriber purge are all here.
 *
 * It is a seam and not a pipeline. `runMaintenance` starts the three tasks
 * independently, gives each its own deadline and collects three outcomes, so
 * that the Vercel Analytics API being down cannot stop an address being
 * deleted on the day it was promised — which was the whole objection to
 * folding these together, and is answered by the isolation rather than by
 * keeping them apart. The reasoning, and why a failed task makes the whole run
 * a failed run even when the rest succeeded, is in `lib/admin/maintenance.ts`.
 *
 * The route itself is deliberately four lines: the door, the work, the status.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const refusal = refuseUnauthorisedCron(request);
  if (refusal) return refusal;

  const report = await runMaintenance();

  return NextResponse.json(report, { status: maintenanceStatus(report) });
}

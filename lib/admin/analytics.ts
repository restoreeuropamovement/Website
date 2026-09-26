import { analyticsConfig } from "@/lib/admin/env";

/**
 * Reader for the Vercel Web Analytics API.
 *
 * Server-only: the access token is a credential for the whole Vercel project
 * and must never be serialised into a client component's props or a payload the
 * browser can see. Everything here is called from Server Components.
 *
 * The API reads the same aggregated model as the Vercel dashboard, so these
 * figures match what the team sees there. When it is not configured the result
 * says so explicitly and the dashboard renders an explanation — no zeroes
 * presented as measurements, and nothing invented. An analytics panel that
 * makes up plausible numbers is worse than no panel, because you cannot tell.
 *
 * Three states, and the distinction between them is load-bearing: the figure
 * is real, the source is not configured, or the request failed. Nothing here
 * ever returns a fourth state that looks like data.
 */

const API = "https://api.vercel.com/v1/query/web-analytics";

/**
 * The API's own ceiling on a grouped query (`limit`, max 100). Worth knowing
 * by name because asking for the maximum is what lets the caller tell an
 * unmeasured country from one with no visits — see `DimensionBreakdown`.
 */
export const MAX_GROUP_LIMIT = 100;

export type AnalyticsResult<T> =
  | { readonly state: "ok"; readonly data: T }
  | { readonly state: "unconfigured" }
  | { readonly state: "error"; readonly message: string };

export interface VisitTotals {
  readonly pageviews: number;
  readonly visitors: number;
}

export interface DimensionRow {
  readonly label: string;
  readonly pageviews: number;
  readonly visitors: number;
}

/**
 * A grouped query, plus the one thing about it that changes what the rows mean.
 *
 * When a breakdown has more distinct values than the requested `limit`, Vercel
 * does not truncate: it folds the remainder into a single row labelled
 * `Others`. That row is real traffic and has to be shown, but its presence
 * also settles a question the rows alone cannot answer. If it is absent, every
 * value that occurred is listed, so anything missing from the list genuinely
 * recorded nothing. If it is present, something missing from the list might be
 * inside `Others` instead — and the map must then shade it as unmeasured
 * rather than as a measured zero.
 */
export interface DimensionBreakdown {
  readonly rows: readonly DimensionRow[];
  /** The API's own remainder bucket, when the breakdown overflowed `limit`. */
  readonly others?: DimensionRow;
  /** False when `others` is present: the listed rows are not the whole story. */
  readonly complete: boolean;
}

export interface DailyRow {
  readonly date: string;
  readonly pageviews: number;
  readonly visitors: number;
}

function searchParamsFor(
  config: NonNullable<ReturnType<typeof analyticsConfig>>,
  extra: Record<string, string | number | undefined>,
): URLSearchParams {
  const params = new URLSearchParams({ projectId: config.projectId });
  if (config.teamId) params.set("teamId", config.teamId);
  for (const [key, value] of Object.entries(extra)) {
    if (value !== undefined) params.set(key, String(value));
  }
  return params;
}

/**
 * What a failing status actually means, in terms of something that can be done.
 *
 * A bare "responded 403" sends whoever reads it to the wrong place. The three
 * statuses this endpoint realistically returns fail for three unrelated
 * reasons — the token, the token's scope, the project — and each has a
 * different fix. Worth noting for the 403 in particular: the Web Analytics API
 * is *not* a paid feature. It became generally available in May 2026 and works
 * on Hobby, so a 403 here is about what the token may read, not about the
 * plan. What the plan does limit is how far back an aggregate query can see;
 * that is `RETENTION_NOTE` below, and it is not an error.
 */
function explainStatus(status: number, detail: string | undefined): string {
  const suffix = detail ? ` Vercel said: ${detail}` : "";

  switch (status) {
    case 401:
      return `Vercel rejected the access token (401). VERCEL_ANALYTICS_TOKEN has expired, been revoked, or was copied incompletely.${suffix}`;
    case 403:
      return `Vercel refused the request (403). The token is valid but not allowed to read this project's analytics — check it is scoped to the account or team that owns VERCEL_PROJECT_ID, and that VERCEL_TEAM_ID is set for a team project and unset for a personal one. The Web Analytics API itself needs no paid plan.${suffix}`;
    case 404:
      return `Vercel found no such project (404). Check VERCEL_PROJECT_ID, and that Web Analytics is switched on for it — the API answers nothing for a project that has never been asked to collect.${suffix}`;
    case 429:
      return `Vercel is rate-limiting these queries (429). The figures will return on their own; nothing is misconfigured.${suffix}`;
    default:
      return `Vercel Analytics responded ${status}.${suffix}`;
  }
}

/** Vercel's error envelope, read defensively — it is a diagnostic, not a contract. */
async function errorDetail(response: Response): Promise<string | undefined> {
  try {
    const body = (await response.json()) as { error?: { message?: unknown } };
    const message = body.error?.message;
    return typeof message === "string" && message.length > 0 ? message.slice(0, 300) : undefined;
  } catch {
    return undefined;
  }
}

async function query<T>(
  path: "visits/count" | "visits/aggregate",
  extra: Record<string, string | number | undefined>,
): Promise<AnalyticsResult<T>> {
  const config = analyticsConfig();
  if (!config) return { state: "unconfigured" };

  try {
    const response = await fetch(`${API}/${path}?${searchParamsFor(config, extra)}`, {
      headers: { Authorization: `Bearer ${config.token}` },
      // Cached briefly so opening the dashboard repeatedly does not hammer the
      // upstream quota, while still being fresh enough to be useful.
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      return { state: "error", message: explainStatus(response.status, await errorDetail(response)) };
    }

    const payload = (await response.json()) as { data: T };
    return { state: "ok", data: payload.data };
  } catch (error) {
    return {
      state: "error",
      message: error instanceof Error ? error.message : "Could not reach Vercel Analytics.",
    };
  }
}

export async function fetchTotals(since: string, until: string): Promise<AnalyticsResult<VisitTotals>> {
  return query<VisitTotals>("visits/count", { since, until });
}

export async function fetchDaily(since: string, until: string): Promise<AnalyticsResult<readonly DailyRow[]>> {
  const result = await query<{ timestamp: string; pageviews: number; visitors: number }[]>(
    "visits/aggregate",
    { since, until, by: "day" },
  );

  if (result.state !== "ok") return result;

  return {
    state: "ok",
    data: result.data.map((row) => ({
      date: row.timestamp.slice(0, 10),
      pageviews: Number(row.pageviews ?? 0),
      visitors: Number(row.visitors ?? 0),
    })),
  };
}

/** How Vercel labels the bucket it folds everything past `limit` into. */
const OTHERS = "others";

/**
 * The day after `date`, which is how a grouped query asks to include `date`.
 *
 * `until` does not mean the same thing on both aggregate shapes. `by=day`
 * returns a bucket for `until` itself; every other grouping treats it as a
 * midnight boundary and so excludes that whole day. Passing the caller's
 * `until` through unchanged therefore drops today from the country, route,
 * device and referrer breakdowns while leaving it in the headline totals —
 * which on a young site means an empty map sitting beside a non-zero visitor
 * count, and on an established one a quiet daily undercount that nothing on
 * the page would reveal.
 *
 * Verified against the live API rather than inferred: the same range returns
 * no rows ending today and the expected rows ending tomorrow.
 */
function dayAfter(date: string): string {
  return new Date(Date.parse(`${date}T00:00:00Z`) + 86_400_000).toISOString().slice(0, 10);
}

/**
 * Top values for a grouping dimension.
 *
 * `route` gives the framework pattern (`/journal/[slug]`), so every essay rolls
 * into one row; `requestPath` would give each essay separately. The dashboard
 * uses both, for different questions.
 */
export async function fetchByDimension(
  dimension: "route" | "requestPath" | "country" | "referrerHostname" | "deviceType",
  since: string,
  until: string,
  limit = 8,
): Promise<AnalyticsResult<DimensionBreakdown>> {
  const result = await query<Record<string, string | number>[]>("visits/aggregate", {
    since,
    until: dayAfter(until),
    by: dimension,
    limit,
  });

  if (result.state !== "ok") return result;

  const rows: DimensionRow[] = [];
  let others: DimensionRow | undefined;

  for (const row of result.data) {
    const label = String(row[dimension] ?? "").trim();
    const entry: DimensionRow = {
      label: label.length > 0 ? label : "Unattributed",
      pageviews: Number(row.pageviews ?? 0),
      visitors: Number(row.visitors ?? 0),
    };
    if (label.toLowerCase() === OTHERS) others = entry;
    else rows.push(entry);
  }

  rows.sort((a, b) => b.visitors - a.visitors || b.pageviews - a.pageviews);

  return { state: "ok", data: { rows, others, complete: others === undefined } };
}

/** Inclusive date range ending today, as the API's `since`/`until` strings. */
export function dateRange(days: number): { since: string; until: string } {
  const until = new Date();
  const since = new Date(until.getTime() - (days - 1) * 86_400_000);
  return { since: since.toISOString().slice(0, 10), until: until.toISOString().slice(0, 10) };
}

/**
 * The window of the same length immediately before `dateRange(days)`, which is
 * what "up or down" is measured against.
 *
 * Contiguous by construction: `previousRange(7).until` is the day before
 * `dateRange(7).since`, so the two windows tile rather than overlapping. An
 * overlap would make a rising week compare partly against itself and flatten
 * every change towards zero.
 */
export function previousRange(days: number): { since: string; until: string } {
  const until = new Date(Date.now() - days * 86_400_000);
  const since = new Date(until.getTime() - (days - 1) * 86_400_000);
  return { since: since.toISOString().slice(0, 10), until: until.toISOString().slice(0, 10) };
}

/**
 * Why a long range may come back shorter than it was asked for.
 *
 * Aggregate queries only see inside the plan's reporting window — one month on
 * Hobby, twelve on Pro, twenty-four on Enterprise. Ask for ninety days on
 * Hobby and the answer is not an error and not a refusal: it is simply the
 * last thirty, with the rest absent. Absent is not zero, and the chart says so
 * rather than drawing a flat line across two months the account cannot see.
 */
export const RETENTION_NOTE =
  "Grouped history only reaches back as far as the plan's reporting window — one month on Hobby, twelve on Pro. Days before it are reported as not recorded rather than as zero.";

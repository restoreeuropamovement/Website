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
 */

const API = "https://api.vercel.com/v1/query/web-analytics";

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
      return {
        state: "error",
        message: `Vercel Analytics responded ${response.status}. Check VERCEL_ANALYTICS_TOKEN and VERCEL_PROJECT_ID.`,
      };
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
      pageviews: row.pageviews,
      visitors: row.visitors,
    })),
  };
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
): Promise<AnalyticsResult<readonly DimensionRow[]>> {
  const result = await query<Record<string, string | number>[]>("visits/aggregate", {
    since,
    until,
    by: dimension,
    limit,
  });

  if (result.state !== "ok") return result;

  return {
    state: "ok",
    data: result.data.map((row) => ({
      label: String(row[dimension] ?? "Unknown"),
      pageviews: Number(row.pageviews ?? 0),
      visitors: Number(row.visitors ?? 0),
    })),
  };
}

/** Inclusive date range ending today, as the API's `since`/`until` strings. */
export function dateRange(days: number): { since: string; until: string } {
  const until = new Date();
  const since = new Date(until.getTime() - (days - 1) * 86_400_000);
  return { since: since.toISOString().slice(0, 10), until: until.toISOString().slice(0, 10) };
}

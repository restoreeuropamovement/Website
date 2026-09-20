import type { AnalyticsResult, DailyRow, DimensionRow } from "@/lib/admin/analytics";

/**
 * Presentation for analytics figures.
 *
 * Each of these renders one of three states, and the distinction is the point:
 * real data, "not configured", or "the request failed". None of them renders a
 * zero or a placeholder curve when the number is simply unknown, because a
 * dashboard you cannot trust is worse than one that admits ignorance.
 */

function Unavailable({ result }: { result: AnalyticsResult<unknown> }) {
  if (result.state === "ok") return null;

  return (
    <p className="border-l-2 border-gold/65 py-1 pl-5 text-[0.875rem] leading-relaxed text-muted">
      {result.state === "unconfigured" ? (
        <>
          Vercel Web Analytics is not connected. Enable it for the project, then set{" "}
          <code className="text-ink">VERCEL_ANALYTICS_TOKEN</code> and{" "}
          <code className="text-ink">VERCEL_PROJECT_ID</code> (plus{" "}
          <code className="text-ink">VERCEL_TEAM_ID</code> for a team project). No figures are shown
          until then — none are invented.
        </>
      ) : (
        result.message
      )}
    </p>
  );
}

export function StatPair({
  label,
  result,
}: {
  label: string;
  result: AnalyticsResult<{ pageviews: number; visitors: number }>;
}) {
  return (
    <section className="border border-hairline p-6">
      <h3 className="eyebrow mb-5 text-muted">{label}</h3>
      {result.state === "ok" ? (
        <dl className="flex gap-10">
          <div>
            <dt className="text-micro text-faint">Page views</dt>
            <dd className="numerals-tabular font-serif text-display-3 text-ink">
              {result.data.pageviews.toLocaleString("en-GB")}
            </dd>
          </div>
          <div>
            <dt className="text-micro text-faint">Visitors</dt>
            <dd className="numerals-tabular font-serif text-display-3 text-ink">
              {result.data.visitors.toLocaleString("en-GB")}
            </dd>
          </div>
        </dl>
      ) : (
        <Unavailable result={result} />
      )}
    </section>
  );
}

/**
 * A CSS-only bar chart.
 *
 * No charting library and no client JavaScript: the heights are inline
 * percentages computed on the server. Each bar is also a table-free list item
 * with a text label, so the series is legible to a screen reader rather than
 * being an inaccessible picture of some numbers.
 */
export function TrendBars({
  label,
  result,
}: {
  label: string;
  result: AnalyticsResult<readonly DailyRow[]>;
}) {
  const peak =
    result.state === "ok" ? Math.max(1, ...result.data.map((row) => row.pageviews)) : 1;

  return (
    <section className="border border-hairline p-6">
      <h3 className="eyebrow mb-5 text-muted">{label}</h3>

      {result.state !== "ok" ? (
        <Unavailable result={result} />
      ) : result.data.length === 0 ? (
        <p className="text-[0.875rem] text-muted">No traffic recorded in this range.</p>
      ) : (
        <ol className="flex h-40 items-end gap-1">
          {result.data.map((row) => (
            <li
              key={row.date}
              className="group relative flex-1"
              style={{ height: `${Math.max(2, (row.pageviews / peak) * 100)}%` }}
            >
              <span className="block size-full bg-gold/35 transition-colors group-hover:bg-gold/70" />
              <span className="sr-only">
                {row.date}: {row.pageviews} page views, {row.visitors} visitors
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export function MetricTable({
  label,
  caption,
  result,
}: {
  label: string;
  caption?: string;
  result: AnalyticsResult<readonly DimensionRow[]>;
}) {
  return (
    <section className="border border-hairline p-6">
      <h3 className="eyebrow mb-1 text-muted">{label}</h3>
      {caption ? <p className="mb-4 text-micro text-faint">{caption}</p> : null}

      {result.state !== "ok" ? (
        <Unavailable result={result} />
      ) : result.data.length === 0 ? (
        <p className="mt-4 text-[0.875rem] text-muted">Nothing recorded in this range.</p>
      ) : (
        <dl className="mt-4 flex flex-col">
          {result.data.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_auto_auto] items-baseline gap-4 border-b border-hairline py-2.5 last:border-0"
            >
              <dt className="truncate text-[0.875rem] text-body/92" title={row.label}>
                {row.label}
              </dt>
              <dd className="numerals-tabular text-[0.875rem] text-ink">
                {row.pageviews.toLocaleString("en-GB")}
              </dd>
              <dd className="numerals-tabular w-16 text-right text-micro text-faint">
                {row.visitors.toLocaleString("en-GB")}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

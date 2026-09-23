import Link from "next/link";
import { MetricTable, StatPair, TrendBars } from "@/components/admin/Analytics";
import {
  CountryTable,
  IntakeBars,
  IntakeTotals,
  PipelineTable,
} from "@/components/admin/Intake";
import { dateRange, fetchByDimension, fetchDaily, fetchTotals } from "@/lib/admin/analytics";
import { intakeTrend } from "@/lib/admin/intake";
import { membershipOverview } from "@/lib/admin/members";
import { listArticlesForAdmin } from "@/lib/admin/journal";
import { subscriberCounts } from "@/lib/admin/subscribers";

const RANGES = [
  { days: 7, label: "7 days" },
  { days: 30, label: "30 days" },
  { days: 90, label: "90 days" },
] as const;

function parseRange(value: string | string[] | undefined): number {
  const candidate = Number.parseInt(Array.isArray(value) ? (value[0] ?? "") : (value ?? ""), 10);
  return RANGES.some((range) => range.days === candidate) ? candidate : 30;
}

/**
 * Overview.
 *
 * The traffic figures come from the Vercel Web Analytics API, which reads the
 * same aggregated model as the Vercel dashboard — so these numbers agree with
 * what the team sees there rather than being a second, subtly different count.
 *
 * Beside them sit the movement's own figures — applications, enquiries and the
 * pipeline — which come from our database rather than from Vercel. Keeping the
 * two apart on the page is deliberate: traffic is how many people looked, and
 * intake is how many acted. Only the first of them can be unavailable.
 *
 * Every query is issued concurrently; they are independent, and running them
 * in sequence would make the page as slow as their sum.
 */
export default async function AdminOverview(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;
  const days = parseRange(searchParams.range);
  const { since, until } = dateRange(days);

  const [
    totals,
    daily,
    routes,
    essays,
    countries,
    referrers,
    articles,
    intake,
    membership,
    subscribers,
  ] = await Promise.all([
    fetchTotals(since, until),
    fetchDaily(since, until),
    fetchByDimension("route", since, until, 8),
    fetchByDimension("requestPath", since, until, 8),
    fetchByDimension("country", since, until, 8),
    fetchByDimension("referrerHostname", since, until, 8),
    listArticlesForAdmin(),
    intakeTrend(days),
    membershipOverview(),
    subscriberCounts(),
  ]);

  const published = articles.filter((article) => article.status === "published").length;
  const drafts = articles.length - published;

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4 text-burgundy">Overview</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">
            Movement and traffic
          </h1>
          <p className="mt-3 text-[0.9375rem] text-muted">
            {since} to {until}
          </p>
        </div>

        {/* Range as a link group: linkable, bookmarkable, and works without JS. */}
        <nav aria-label="Date range" className="flex gap-2">
          {RANGES.map((range) => (
            <Link
              key={range.days}
              href={`/admin?range=${range.days}`}
              aria-current={range.days === days ? "page" : undefined}
              className={
                range.days === days
                  ? "border border-gold/70 bg-gold/10 px-3 py-1.5 text-micro text-ink"
                  : "border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy"
              }
            >
              {range.label}
            </Link>
          ))}
        </nav>
      </header>

      <section aria-labelledby="movement-heading" className="flex flex-col gap-6">
        <h2 id="movement-heading" className="eyebrow text-burgundy">
          The movement
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <IntakeTotals days={days} trend={intake} overview={membership} />
          <PipelineTable overview={membership} />
        </div>

        <IntakeBars days={days} trend={intake} />

        <CountryTable overview={membership} />
      </section>

      <section aria-labelledby="traffic-heading" className="flex flex-col gap-6">
        <h2 id="traffic-heading" className="eyebrow text-burgundy">
          Traffic
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <StatPair label={`Total, last ${days} days`} result={totals} />

          <section className="border border-hairline p-6">
            <h3 className="eyebrow mb-5 text-muted">Journal and newsletter</h3>
            <dl className="flex flex-wrap gap-x-10 gap-y-5">
              <div>
                <dt className="text-micro text-faint">Published</dt>
                <dd className="numerals-tabular font-serif text-display-3 text-ink">{published}</dd>
              </div>
              <div>
                <dt className="text-micro text-faint">Drafts</dt>
                <dd className="numerals-tabular font-serif text-display-3 text-ink">{drafts}</dd>
              </div>
              <div>
                <dt className="text-micro text-faint">Subscribers</dt>
                <dd className="numerals-tabular font-serif text-display-3 text-ink">
                  {subscribers.confirmed.toLocaleString("en-GB")}
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-micro text-faint">
              {subscribers.pending.toLocaleString("en-GB")} awaiting confirmation,{" "}
              {subscribers.unsubscribed.toLocaleString("en-GB")} unsubscribed.
            </p>
            <Link
              href="/admin/journal"
              className="mt-4 inline-block text-[0.875rem] text-muted underline underline-offset-4 hover:text-burgundy"
            >
              Manage the journal
            </Link>
          </section>
        </div>

        <TrendBars label="Page views by day" result={daily} />

        <div className="grid gap-6 lg:grid-cols-2">
          <MetricTable
            label="Sections"
            caption="Framework routes, so every essay rolls into /journal/[slug]. Page views, then visitors."
            result={routes}
          />
          <MetricTable
            label="Individual pages"
            caption="Exact paths, so single essays and positions appear separately."
            result={essays}
          />
          <MetricTable label="Countries" result={countries} />
          <MetricTable label="Referrers" result={referrers} />
        </div>
      </section>
    </div>
  );
}

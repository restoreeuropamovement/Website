import Link from "next/link";
import { Headline, Panel, ShareTable, Trend, VisitorMap } from "@/components/admin/Analytics";
import {
  CountryTable,
  IntakeBars,
  IntakeTotals,
  PipelineTable,
} from "@/components/admin/Intake";
import {
  MAX_GROUP_LIMIT,
  RETENTION_NOTE,
  dateRange,
  fetchByDimension,
  fetchDaily,
  fetchTotals,
  previousRange,
} from "@/lib/admin/analytics";
import { LiveNow, ReadingTime, YearCalendar } from "@/components/admin/Pulse";
import { readGeography } from "@/lib/admin/geography";
import { archiveBegins, readArchivedDays, readEngagement, readLive } from "@/lib/admin/pulse";
import { intakeTrend } from "@/lib/admin/intake";
import { membershipOverview } from "@/lib/admin/members";
import { listArticlesForAdmin } from "@/lib/admin/journal";
import { subscriberCounts } from "@/lib/admin/subscribers";
import { compareTotals, readSeries } from "@/lib/admin/traffic";

const RANGES = [
  { days: 7, label: "7 days" },
  { days: 30, label: "30 days" },
  { days: 90, label: "90 days" },
] as const;

function parseRange(value: string | string[] | undefined): number {
  const candidate = Number.parseInt(Array.isArray(value) ? (value[0] ?? "") : (value ?? ""), 10);
  return RANGES.some((range) => range.days === candidate) ? candidate : 30;
}

/** Device types come back lowercase; they are labels here, not identifiers. */
function deviceLabel(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/** A year back from today, the widest the archive is ever asked for. */
function yearAgo(): string {
  const date = new Date();
  date.setUTCFullYear(date.getUTCFullYear() - 1);
  return date.toISOString().slice(0, 10);
}

/**
 * Overview.
 *
 * The traffic figures come from the Vercel Web Analytics API, which reads the
 * same aggregated model as the Vercel dashboard — so these numbers agree with
 * what the team sees there rather than being a second, subtly different count.
 *
 * Beside them sit the movement's own figures — applications, enquiries, the
 * pipeline and the journal — which come from our database rather than from
 * Vercel. Keeping the two apart on the page is deliberate: traffic is how many
 * people looked, and intake is how many acted. Only the first of them can be
 * unavailable, and it says so rather than showing a zero.
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
  const previous = previousRange(days);

  const [
    totals,
    priorTotals,
    daily,
    routes,
    essays,
    countries,
    referrers,
    devices,
    systems,
    browsers,
    articles,
    intake,
    membership,
    subscribers,
    live,
    engagement,
    archived,
    begins,
  ] = await Promise.all([
    fetchTotals(since, until),
    fetchTotals(previous.since, previous.until),
    fetchDaily(since, until),
    fetchByDimension("route", since, until, 8),
    fetchByDimension("requestPath", since, until, 8),
    /*
     * The country breakdown asks for the API's maximum rather than a tidy
     * eight, and the reason is the map rather than the list. Vercel folds
     * everything past the limit into one anonymous bucket, and while that
     * bucket exists a nation with no row might be in it — so the map has to
     * hatch every unlisted country as unknown instead of shading it as a
     * measured zero. Asking for a hundred is what usually makes the breakdown
     * exhaustive, and an exhaustive breakdown is what lets the map say
     * something definite.
     */
    fetchByDimension("country", since, until, MAX_GROUP_LIMIT),
    fetchByDimension("referrerHostname", since, until, 8),
    fetchByDimension("deviceType", since, until, 8),
    fetchByDimension("osName", since, until, 8),
    fetchByDimension("browserName", since, until, 8),
    listArticlesForAdmin(),
    intakeTrend(days),
    membershipOverview(),
    subscriberCounts(),
    /*
     * The last four come from our own tables rather than from Vercel, which
     * measures none of them: it has no realtime endpoint and no notion of
     * time on page, and on this plan it forgets anything older than a month.
     */
    readLive(),
    readEngagement(days),
    readArchivedDays(yearAgo(), until),
    archiveBegins(),
  ]);

  const published = articles.filter((article) => article.status === "published").length;
  const drafts = articles.length - published;

  /*
   * A comparison needs both windows. If the earlier one failed or is not
   * configured, the current figure still stands on its own and simply carries
   * no change beneath it — inferring one from a half-answer is how a panel
   * ends up asserting a trend nobody measured.
   */
  const comparison =
    totals.state === "ok" && priorTotals.state === "ok"
      ? compareTotals(totals.data, priorTotals.data)
      : undefined;

  const series = daily.state === "ok" ? readSeries(daily.data, since, until) : undefined;
  const geography = countries.state === "ok" ? readGeography(countries.data) : undefined;

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

        <div className="grid gap-6 lg:grid-cols-2">
          <CountryTable overview={membership} />

          {/*
           * The journal and the newsletter are our own rows too, so they sit
           * on this side of the page. They used to sit among the traffic
           * panels, where a reader had no way of telling which figures could
           * go unavailable and which could not.
           */}
          <Panel
            title="Journal and newsletter"
            caption="Standing totals, not confined to the selected range."
          >
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
          </Panel>
        </div>
      </section>

      <section aria-labelledby="traffic-heading" className="flex flex-col gap-6">
        <h2 id="traffic-heading" className="eyebrow text-burgundy">
          Traffic
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <Headline days={days} totals={totals} comparison={comparison} />

          {/*
           * Presence sits beside the headline although it comes from our own
           * table rather than from Vercel, which has no realtime endpoint.
           * The pairing is the point: one figure is the range, the other is
           * this moment, and reading them together is the whole question.
           */}
          <LiveNow live={live} />

          <Trend days={days} result={daily} series={series} retention={RETENTION_NOTE} />

          <VisitorMap days={days} result={countries} geography={geography} />

          <ShareTable
            title="Sections"
            caption="Framework routes, so every essay rolls into /journal/[slug]. Page views, then visitors."
            result={routes}
            metric="pageviews"
          />

          <ShareTable
            title="Referrers"
            caption="The host a visitor arrived from. Visitors, then page views."
            result={referrers}
            empty="Nothing arrived with a referring host in this range."
          />

          {/* Full width: exact paths are long, and truncating them loses the end. */}
          <ShareTable
            title="Individual pages"
            caption="Exact paths, so single essays and positions appear separately. Page views, then visitors."
            result={essays}
            metric="pageviews"
            span
          />
        </div>
      </section>

      <section aria-labelledby="attention-heading" className="flex flex-col gap-6">
        <h2 id="attention-heading" className="eyebrow text-burgundy">
          Attention
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {/*
           * Time on page answers what the view counts cannot: whether a page
           * that is opened often is also read. It spans both columns because
           * a list of routes against durations reads badly when narrow.
           */}
          <ReadingTime engagement={engagement} days={days} />

          <ShareTable
            title="Devices"
            caption="How the site was reached. Visitors, then page views."
            result={devices}
            format={deviceLabel}
            empty="No device types recorded in this range."
          />

          <ShareTable
            title="Operating systems"
            caption="Visitors, then page views."
            result={systems}
            empty="No operating systems recorded in this range."
          />

          <ShareTable
            title="Browsers"
            caption="Visitors, then page views."
            result={browsers}
            empty="No browsers recorded in this range."
            span
          />
        </div>
      </section>

      <section aria-labelledby="year-heading" className="flex flex-col gap-6">
        <h2 id="year-heading" className="eyebrow text-burgundy">
          History
        </h2>

        <div className="grid gap-6">
          <YearCalendar days={archived} begins={begins} />
        </div>
      </section>
    </div>
  );
}

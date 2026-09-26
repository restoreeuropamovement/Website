import { Panel } from "@/components/admin/Analytics";
import type { ArchivedDay, Engagement, Live } from "@/lib/admin/pulse";
import { cn } from "@/lib/utils";

/**
 * The three panels fed by our own tables rather than by Vercel: who is reading
 * now, how long pages hold people, and a year of daily figures.
 *
 * Each distinguishes "nothing recorded" from "nothing happened", because on
 * this page those are different facts and only one of them is a measurement.
 */

const num = (value: number) => value.toLocaleString("en-GB");

/** Seconds as something a person reads, not as a decimal minute. */
function duration(seconds: number): string {
  const whole = Math.round(seconds);
  if (whole < 60) return `${whole}s`;
  const minutes = Math.floor(whole / 60);
  const rest = whole % 60;
  return rest === 0 ? `${minutes}m` : `${minutes}m ${rest}s`;
}

function NoDatabase({ what }: { readonly what: string }) {
  return (
    <p className="border-l-2 border-gold/65 py-1 pl-5 text-[0.875rem] leading-relaxed text-muted">
      {what} is recorded in this project&rsquo;s own database, and{" "}
      <code className="text-ink">DATABASE_URL</code> is not set. Nothing is shown until it is —
      nothing is invented.
    </p>
  );
}

/* ------------------------------------------------------------------- live */

/**
 * Readers in the last ninety seconds.
 *
 * Presented as a plain count with no auto-refresh. A number that moves on its
 * own invites watching it, and this one is a diagnostic rather than a
 * scoreboard; the page reloads when somebody asks it to.
 */
export function LiveNow({ live }: { readonly live: Live | undefined }) {
  if (!live) {
    return (
      <Panel title="Reading now" caption="Presence in the last ninety seconds.">
        <NoDatabase what="Presence" />
      </Panel>
    );
  }

  return (
    <Panel
      title="Reading now"
      caption="Tabs seen in the last ninety seconds. Refresh for a newer figure."
    >
      <p className="numerals-tabular font-serif text-display-2 leading-none text-ink">
        {num(live.total)}
      </p>

      {live.places.length === 0 ? (
        <p className="mt-4 text-micro text-faint">
          Nobody is on the site at this moment. This is a measurement, not an outage.
        </p>
      ) : (
        <dl className="mt-5 flex flex-col">
          {live.places.map((place) => (
            <div
              key={place.route}
              className="flex items-baseline justify-between gap-4 border-t border-hairline py-2"
            >
              <dt className="truncate font-mono text-[0.8125rem] text-body">{place.route}</dt>
              <dd className="numerals-tabular shrink-0 text-[0.8125rem] text-muted">
                {num(place.people)}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </Panel>
  );
}

/* ------------------------------------------------------------- engagement */

/**
 * How long each page holds a reader.
 *
 * Foreground time only: a tab open in a background window accumulates
 * nothing, which is the difference between time spent reading and time spent
 * existing. The mean is printed beside the total because a large total is
 * ambiguous on its own — it is equally the mark of one absorbing page and of
 * a great many indifferent ones.
 */
export function ReadingTime({
  engagement,
  days,
}: {
  readonly engagement: Engagement | undefined;
  readonly days: number;
}) {
  if (!engagement) {
    return (
      <Panel title="Time on page" caption="Foreground reading time.">
        <NoDatabase what="Reading time" />
      </Panel>
    );
  }

  const peak = Math.max(1, ...engagement.rows.map((row) => row.mean));

  return (
    <Panel
      title="Time on page"
      caption={`Foreground seconds per reading, last ${days} days. A hidden tab counts for nothing.`}
      span
    >
      {engagement.rows.length === 0 ? (
        <p className="text-[0.875rem] text-muted">
          No readings yet. Figures begin from the day this was deployed, not before.
        </p>
      ) : (
        <>
          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="text-micro text-faint">Average reading</dt>
              <dd className="numerals-tabular font-serif text-display-3 text-ink">
                {duration(engagement.mean)}
              </dd>
            </div>
            <div>
              <dt className="text-micro text-faint">Readings</dt>
              <dd className="numerals-tabular font-serif text-display-3 text-ink">
                {num(engagement.totalReadings)}
              </dd>
            </div>
            <div>
              <dt className="text-micro text-faint">Total time</dt>
              <dd className="numerals-tabular font-serif text-display-3 text-ink">
                {duration(engagement.totalSeconds)}
              </dd>
            </div>
          </dl>

          <table className="mt-7 w-full border-collapse text-[0.875rem]">
            <thead>
              <tr className="border-b border-hairline text-left">
                <th scope="col" className="pb-2 font-normal text-micro text-faint">
                  Page
                </th>
                <th scope="col" className="pb-2 text-right font-normal text-micro text-faint">
                  Average
                </th>
                <th scope="col" className="pb-2 text-right font-normal text-micro text-faint">
                  Readings
                </th>
              </tr>
            </thead>
            <tbody>
              {engagement.rows.map((row) => (
                <tr key={row.route} className="border-b border-hairline/60">
                  <td className="py-2 pr-4">
                    <span className="font-mono text-[0.8125rem] text-body">{row.route}</span>
                    {/*
                      The bar is scaled to the longest mean rather than to the
                      total, because the question here is which page holds
                      people, not which page had the most of them.
                    */}
                    <span
                      aria-hidden="true"
                      className="mt-1.5 block h-px bg-gold/60"
                      style={{ width: `${Math.max(2, (row.mean / peak) * 100)}%` }}
                    />
                  </td>
                  <td className="numerals-tabular py-2 text-right text-ink">
                    {duration(row.mean)}
                  </td>
                  <td className="numerals-tabular py-2 text-right text-muted">
                    {num(row.readings)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </Panel>
  );
}

/* --------------------------------------------------------------- calendar */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Five shades plus "recorded, but nothing happened". */
const SHADES = [
  "bg-gold/15",
  "bg-gold/30",
  "bg-gold/50",
  "bg-gold/70",
  "bg-gold/90",
] as const;

interface Cell {
  readonly date: string;
  readonly visitors: number | undefined;
}

/**
 * A year of daily visitors, one square per day.
 *
 * The distinction the grid exists to make is between a day that recorded no
 * visitors and a day nobody recorded. Vercel keeps thirty-one days on this
 * plan; everything older survives only because the nightly job copied it out
 * first, so the calendar is necessarily blank before that job's first run.
 * Drawing those days as zero would assert a quiet year that was never
 * measured, so they are left as empty outlines and the legend says which is
 * which.
 */
export function YearCalendar({
  days,
  begins,
}: {
  readonly days: readonly ArchivedDay[] | undefined;
  readonly begins: string | undefined;
}) {
  if (!days) {
    return (
      <Panel title="The year" caption="Daily visitors.">
        <NoDatabase what="Daily history" />
      </Panel>
    );
  }

  const byDay = new Map(days.map((day) => [day.day, day.visitors]));

  /*
   * Weeks run Monday to Sunday and the grid ends on the Sunday of this week,
   * so the final column is the current week rather than a ragged edge.
   */
  const today = new Date();
  const end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
  const weekday = (end.getUTCDay() + 6) % 7;
  end.setUTCDate(end.getUTCDate() + (6 - weekday));

  const weeks: Cell[][] = [];
  const cursor = new Date(end.getTime() - 52 * 7 * 86_400_000);

  for (let week = 0; week < 53; week += 1) {
    const column: Cell[] = [];
    for (let day = 0; day < 7; day += 1) {
      const date = new Date(cursor.getTime() + (week * 7 + day) * 86_400_000)
        .toISOString()
        .slice(0, 10);
      column.push({ date, visitors: byDay.get(date) });
    }
    weeks.push(column);
  }

  const peak = Math.max(1, ...days.map((day) => day.visitors));
  const recorded = days.length;

  /* Month labels sit above the week in which each month starts. */
  const labels = weeks.map((column, index) => {
    const first = new Date(`${column[0]!.date}T00:00:00Z`);
    const previous = index === 0 ? undefined : new Date(`${weeks[index - 1]![0]!.date}T00:00:00Z`);
    return previous === undefined || first.getUTCMonth() !== previous.getUTCMonth()
      ? MONTHS[first.getUTCMonth()]
      : "";
  });

  const monthly = monthTotals(days);

  return (
    <Panel
      title="The year"
      caption={
        begins
          ? `Daily visitors. Recorded from ${begins}; earlier days were never kept.`
          : "Daily visitors. Nothing archived yet — the nightly job has not run."
      }
      span
    >
      <div className="overflow-x-auto">
        <div className="min-w-[46rem]">
          <div className="mb-1.5 grid grid-flow-col auto-cols-[0.875rem] gap-[3px] text-micro text-faint">
            {labels.map((label, index) => (
              <span key={weeks[index]![0]!.date} className="whitespace-nowrap">
                {label}
              </span>
            ))}
          </div>

          <div className="grid grid-flow-col auto-cols-[0.875rem] grid-rows-7 gap-[3px]">
            {weeks.flatMap((column) =>
              column.map((cell) => {
                const known = cell.visitors !== undefined;
                const band =
                  known && cell.visitors! > 0
                    ? Math.min(
                        SHADES.length - 1,
                        Math.floor(((cell.visitors! - 1) / peak) * SHADES.length),
                      )
                    : -1;

                return (
                  <span
                    key={cell.date}
                    title={
                      known
                        ? `${cell.date} — ${num(cell.visitors!)} visitors`
                        : `${cell.date} — not recorded`
                    }
                    className={cn(
                      "aspect-square w-full",
                      known
                        ? band === -1
                          ? "bg-canvas-deep"
                          : SHADES[band]
                        : "border border-dashed border-hairline",
                    )}
                  />
                );
              }),
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-micro text-faint">
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-3 border border-dashed border-hairline" />
          Not recorded
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-3 bg-canvas-deep" />
          No visitors
        </span>
        <span className="flex items-center gap-1.5">
          {SHADES.map((shade) => (
            <span key={shade} aria-hidden="true" className={cn("size-3", shade)} />
          ))}
          Up to {num(peak)}
        </span>
        <span>{num(recorded)} days recorded</span>
      </div>

      {monthly.length > 0 ? (
        <table className="mt-7 w-full border-collapse text-[0.875rem]">
          <caption className="pb-3 text-left text-micro text-faint">
            By month. A month the archive only partly covers is counted only for the days it holds.
          </caption>
          <thead>
            <tr className="border-b border-hairline text-left">
              <th scope="col" className="pb-2 font-normal text-micro text-faint">
                Month
              </th>
              <th scope="col" className="pb-2 text-right font-normal text-micro text-faint">
                Visitors
              </th>
              <th scope="col" className="pb-2 text-right font-normal text-micro text-faint">
                Page views
              </th>
              <th scope="col" className="pb-2 text-right font-normal text-micro text-faint">
                Days held
              </th>
            </tr>
          </thead>
          <tbody>
            {monthly.map((month) => (
              <tr key={month.month} className="border-b border-hairline/60">
                <td className="py-2 text-body">{month.month}</td>
                <td className="numerals-tabular py-2 text-right text-ink">{num(month.visitors)}</td>
                <td className="numerals-tabular py-2 text-right text-muted">
                  {num(month.pageviews)}
                </td>
                <td className="numerals-tabular py-2 text-right text-faint">{month.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </Panel>
  );
}

interface MonthTotal {
  readonly month: string;
  readonly visitors: number;
  readonly pageviews: number;
  readonly days: number;
}

/**
 * Monthly sums, newest first.
 *
 * `days` is carried alongside the totals because a month the archive joined
 * halfway through is not a quiet month, and a column of bare sums would
 * silently invite that reading.
 */
function monthTotals(days: readonly ArchivedDay[]): readonly MonthTotal[] {
  const running = new Map<string, { visitors: number; pageviews: number; days: number }>();

  for (const day of days) {
    const key = day.day.slice(0, 7);
    const entry = running.get(key) ?? { visitors: 0, pageviews: 0, days: 0 };
    entry.visitors += day.visitors;
    entry.pageviews += day.pageviews;
    entry.days += 1;
    running.set(key, entry);
  }

  return [...running.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([key, entry]) => {
      const [year, month] = key.split("-");
      return {
        month: `${MONTHS[Number(month) - 1]} ${year}`,
        visitors: entry.visitors,
        pageviews: entry.pageviews,
        days: entry.days,
      };
    });
}

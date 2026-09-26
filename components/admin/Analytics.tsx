import type { ReactNode } from "react";
import { europeContext, europeViewBox, europeWings } from "@/content/wings-map";
import type { AnalyticsResult, DimensionBreakdown, VisitTotals } from "@/lib/admin/analytics";
import { bandFloor, bandOf, type Geography } from "@/lib/admin/geography";
import type { Change, Comparison, Series } from "@/lib/admin/traffic";
import { cn } from "@/lib/utils";

/**
 * Presentation for analytics figures.
 *
 * Each of these renders one of three states, and the distinction is the point:
 * real data, "not configured", or "the request failed". None of them renders a
 * zero or a placeholder curve when the number is simply unknown, because a
 * dashboard you cannot trust is worse than one that admits ignorance.
 *
 * All of it is Server Components with no client JavaScript. The charts are
 * HTML boxes with a percentage height and, for the two line overlays, an SVG
 * `polyline`; hover detail is the browser's own tooltip from a `title`, which
 * costs nothing and works before hydration. Inline `style` for the geometry is
 * deliberate and permitted: the admin policy in `proxy.ts` carries a nonce on
 * `script-src` only and keeps `'unsafe-inline'` on `style-src`, so a computed
 * height is fine where a computed script would not be.
 *
 * Every chart is also a table. A screen reader gets the figures as rows of
 * text rather than an unlabelled picture, and the picture is `aria-hidden` so
 * that it is not read twice.
 */

const num = (value: number) => value.toLocaleString("en-GB");

const TICK_DATE = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});

const FULL_DATE = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function asDate(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`);
}

/* ------------------------------------------------------------------- shell */

/**
 * One box, so the panel reads as a designed whole rather than as a row of
 * unrelated cards that happen to share a border colour.
 */
export function Panel({
  title,
  caption,
  children,
  span,
}: {
  readonly title: string;
  readonly caption?: string;
  readonly children: ReactNode;
  readonly span?: boolean;
}) {
  return (
    <section className={cn("border border-hairline p-6", span && "lg:col-span-2")}>
      <h3 className="eyebrow text-muted">{title}</h3>
      {caption ? <p className="mt-1.5 text-micro text-faint">{caption}</p> : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

/**
 * The two states that are not data.
 *
 * `error` prints what the reader came back with, because the reader has
 * already turned a status code into a sentence about what to change — a 403 is
 * not the same problem as a 404 and must not be flattened into "something went
 * wrong".
 */
export function Unavailable({ result }: { readonly result: AnalyticsResult<unknown> }) {
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

function Empty({ children }: { readonly children: ReactNode }) {
  return <p className="text-[0.875rem] text-muted">{children}</p>;
}

/* ---------------------------------------------------------------- headline */

/**
 * Whether it went up or down, with the direction written out.
 *
 * An arrow alone is a colour-and-shape cue and nothing else; the word beside
 * it is what makes the figure survive being read aloud. Nothing here is
 * coloured as good or bad — the palette has no green, and a dashboard should
 * not be editorialising about its own numbers anyway.
 */
function Delta({ change, noun, days }: { readonly change: Change; readonly noun: string; readonly days: number }) {
  if (change.kind === "no-baseline") {
    return (
      <p className="mt-2 text-micro text-faint">
        No {noun} in the previous {days} days, so there is no change to measure.
      </p>
    );
  }

  const size = Math.abs(change.percent);

  return (
    <p className="mt-2 text-micro text-muted">
      <span className={cn("numerals-tabular", change.kind === "up" ? "text-gold-soft" : "text-muted")}>
        {change.kind === "level" ? "Level with" : `${change.kind === "up" ? "Up" : "Down"} ${size}% on`}
      </span>{" "}
      the previous {days} days ({num(change.previous)}).
    </p>
  );
}

export function Headline({
  days,
  totals,
  comparison,
}: {
  readonly days: number;
  readonly totals: AnalyticsResult<VisitTotals>;
  readonly comparison: Comparison | undefined;
}) {
  return (
    <Panel title={`Traffic, last ${days} days`} caption="Counted by Vercel, against the equal period before it.">
      {totals.state === "ok" ? (
        <dl className="flex flex-wrap gap-x-12 gap-y-6">
          <div>
            <dt className="text-micro text-faint">Visitors</dt>
            <dd className="numerals-tabular font-serif text-display-3 text-ink">
              {num(totals.data.visitors)}
            </dd>
            {comparison ? <Delta change={comparison.visitors} noun="visitors" days={days} /> : null}
          </div>
          <div>
            <dt className="text-micro text-faint">Page views</dt>
            <dd className="numerals-tabular font-serif text-display-3 text-ink">
              {num(totals.data.pageviews)}
            </dd>
            {comparison ? <Delta change={comparison.pageviews} noun="page views" days={days} /> : null}
          </div>
        </dl>
      ) : (
        <Unavailable result={totals} />
      )}
    </Panel>
  );
}

/* ------------------------------------------------------------------- trend */

/**
 * A round number at or above the peak, so the axis label is readable.
 *
 * An axis topped at 137 is accurate and useless; one topped at 150 is both.
 */
function niceCeiling(value: number): number {
  if (value <= 5) return Math.max(1, value);
  const magnitude = 10 ** Math.floor(Math.log10(value));
  for (const step of [1, 1.5, 2, 2.5, 3, 4, 5, 7.5]) {
    if (step * magnitude >= value) return step * magnitude;
  }
  return 10 * magnitude;
}

/**
 * Which days get a written date underneath.
 *
 * Every day at seven, roughly every fifth at thirty, roughly every fifteenth
 * at ninety — always including the first and the last, so the reader can see
 * what the range is without consulting the heading. Labels are positioned by
 * percentage rather than being one-per-column, which keeps them from colliding
 * when ninety columns are four pixels wide.
 */
function tickIndices(count: number): readonly number[] {
  if (count <= 1) return [0];
  const step = Math.max(1, Math.ceil(count / 7));
  const ticks: number[] = [];
  for (let i = 0; i < count - 1; i += step) ticks.push(i);
  // Drop a penultimate tick that would sit on top of the last one.
  if ((ticks.at(-1) ?? 0) > count - 1 - step / 2) ticks.pop();
  ticks.push(count - 1);
  return ticks;
}

/**
 * The visitors line, broken wherever the series is not recorded.
 *
 * A gap has to be a gap: joining across it would draw a straight run between
 * two measurements with an unknown stretch between them, which is a claim
 * about days nobody counted. A lone recorded day between two gaps is emitted
 * as a doubled point so the round line cap renders it as a dot — a polyline of
 * one point draws nothing at all, and the day would vanish.
 */
function visitorRuns(series: Series, ceiling: number): readonly string[] {
  const runs: string[] = [];
  let current: string[] = [];

  const flush = () => {
    if (current.length === 1) runs.push(`${current[0]} ${current[0]}`);
    else if (current.length > 1) runs.push(current.join(" "));
    current = [];
  };

  series.days.forEach((day, index) => {
    if (!day.recorded) {
      flush();
      return;
    }
    const x = ((index + 0.5) / series.days.length) * 100;
    const y = 100 - (day.visitors / ceiling) * 100;
    current.push(`${x.toFixed(3)},${y.toFixed(3)}`);
  });

  flush();
  return runs;
}

export function Trend({
  days,
  result,
  series,
  retention,
}: {
  readonly days: number;
  readonly result: AnalyticsResult<unknown>;
  readonly series: Series | undefined;
  readonly retention: string;
}) {
  const caption =
    "Page views as columns, visitors as the line over them. Hover a day for its figures.";

  if (!series || result.state !== "ok") {
    return (
      <Panel title={`By day, last ${days} days`} caption={caption} span>
        <Unavailable result={result} />
      </Panel>
    );
  }

  if (series.quiet) {
    return (
      <Panel title={`By day, last ${days} days`} caption={caption} span>
        <Empty>
          Vercel recorded no page views on any day in this range. That is a measurement, not a gap.
        </Empty>
      </Panel>
    );
  }

  const ceiling = niceCeiling(series.peak);
  const ticks = tickIndices(series.days.length);
  const runs = visitorRuns(series, ceiling);

  return (
    <Panel title={`By day, last ${days} days`} caption={caption} span>
      <div className="flex gap-4">
        {/* y-axis: the ceiling, its midpoint and the baseline. */}
        <div className="numerals-tabular flex h-48 w-12 shrink-0 flex-col justify-between text-right text-micro text-faint">
          <span>{num(ceiling)}</span>
          <span>{num(Math.round(ceiling / 2))}</span>
          <span>0</span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="relative h-48 border-b border-rule">
            {/* Gridlines, drawn behind everything and inert. */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 top-0 border-t border-hairline" />
              <div className="absolute inset-x-0 top-1/2 border-t border-hairline" />
            </div>

            <ol aria-hidden="true" className="absolute inset-0 flex items-end gap-px">
              {series.days.map((day) => (
                <li
                  key={day.date}
                  title={
                    day.recorded
                      ? `${FULL_DATE.format(asDate(day.date))} — ${num(day.pageviews)} page views, ${num(day.visitors)} visitors`
                      : `${FULL_DATE.format(asDate(day.date))} — not reported`
                  }
                  /*
                   * An unrecorded day is a shaded region across the whole plot
                   * height, which is the conventional way a chart says "no
                   * information here". Drawing it as a zero-height column would
                   * make it indistinguishable from a day on which nobody came,
                   * and those mean opposite things.
                   */
                  className={cn(
                    "flex h-full flex-1 items-end",
                    !day.recorded && "bg-rule/20",
                  )}
                >
                  {day.recorded ? (
                    <span
                      className="block w-full bg-gold/30"
                      style={{ height: `${(day.pageviews / ceiling) * 100}%` }}
                    />
                  ) : null}
                </li>
              ))}
            </ol>

            {/*
             * The visitors line. `preserveAspectRatio="none"` lets one
             * percentage grid stretch to whatever width the column has, and
             * `vector-effect` stops that stretch from smearing the stroke.
             */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 size-full"
            >
              {runs.map((points, index) => (
                <polyline
                  key={index}
                  points={points}
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  className="fill-none stroke-burgundy"
                />
              ))}
            </svg>
          </div>

          {/* x-axis: dates placed by proportion, so they never collide. */}
          <div aria-hidden="true" className="relative mt-2 h-4">
            {ticks.map((index) => {
              const day = series.days[index];
              if (!day) return null;
              const last = index === series.days.length - 1;
              return (
                <span
                  key={day.date}
                  className={cn(
                    "absolute top-0 whitespace-nowrap text-micro text-faint",
                    last ? "-translate-x-full" : index === 0 ? "" : "-translate-x-1/2",
                  )}
                  style={{ left: `${((index + 0.5) / series.days.length) * 100}%` }}
                >
                  {TICK_DATE.format(asDate(day.date))}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-micro text-faint">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-2.5 w-4 bg-gold/30" />
          Page views
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-0.5 w-4 bg-burgundy" />
          Visitors
        </span>
        {series.unreported > 0 ? (
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="inline-block h-2.5 w-4 bg-rule/20" />
            {series.unreported} {series.unreported === 1 ? "day" : "days"} not reported
          </span>
        ) : null}
      </p>

      {series.unreported > 0 ? <p className="mt-2 text-micro text-faint">{retention}</p> : null}

      {/* The same series as text. */}
      <table className="sr-only">
        <caption>Page views and visitors for each of the last {days} days.</caption>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Page views</th>
            <th scope="col">Visitors</th>
          </tr>
        </thead>
        <tbody>
          {series.days.map((day) => (
            <tr key={day.date}>
              <th scope="row">{FULL_DATE.format(asDate(day.date))}</th>
              {day.recorded ? (
                <>
                  <td>{num(day.pageviews)}</td>
                  <td>{num(day.visitors)}</td>
                </>
              ) : (
                <td colSpan={2}>Not reported</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

/* --------------------------------------------------------------------- map */

/**
 * The ramp, darkest last. Written out as literal class names because Tailwind
 * reads the source and would not find a composed one.
 */
const SHADES = [
  "fill-burgundy/22",
  "fill-burgundy/40",
  "fill-burgundy/58",
  "fill-burgundy/76",
  "fill-burgundy/94",
] as const;

const SWATCHES = [
  "bg-burgundy/22",
  "bg-burgundy/40",
  "bg-burgundy/58",
  "bg-burgundy/76",
  "bg-burgundy/94",
] as const;

/**
 * Spread however many bands there are evenly across the five shades, so that
 * a series with three bands uses the palest, the middle and the darkest rather
 * than three indistinguishable tints off one end.
 */
function rampIndex(band: number, bands: number): number {
  const index = bands <= 1 ? SHADES.length - 1 : Math.round((band * (SHADES.length - 1)) / (bands - 1));
  return Math.min(Math.max(index, 0), SHADES.length - 1);
}

function shadeFor(band: number, bands: number): string {
  return SHADES[rampIndex(band, bands)] ?? SHADES[0];
}

function swatchFor(band: number, bands: number): string {
  return SWATCHES[rampIndex(band, bands)] ?? SWATCHES[0];
}

const NO_DATA_FILL = "url(#admin-map-unmeasured)";

/**
 * How a nation is painted.
 *
 * The three cases are returned from one place so they cannot drift apart, and
 * as an attribute *or* a class because only two of them are colours the design
 * tokens know about — the third is a pattern, which has to be referenced by
 * `fill` directly.
 */
function paintFor(
  visitors: number | undefined,
  geography: Geography,
): { readonly className?: string; readonly fill?: string } {
  if (visitors !== undefined) {
    return { className: shadeFor(bandOf(visitors, geography.bands), geography.bands.length) };
  }
  return geography.complete ? { className: "fill-surface" } : { fill: NO_DATA_FILL };
}

/**
 * Visits by country, drawn on the outline of Europa from `content/wings-map.ts`.
 *
 * The geometry is the same module the public map on `/wings` renders, reused
 * rather than reinvented: there is exactly one description of where Europa's
 * borders are in this repository, and a second one would eventually disagree
 * with it. Nothing about the shapes is changed here, only what they are filled
 * with.
 *
 * **Unmeasured is not zero, and the map distinguishes them.** Vercel returns a
 * row per country that had traffic and folds anything past the requested limit
 * into a bucket called `Others`. So when that bucket is absent the answer is
 * exhaustive and a country with no row genuinely had no visitors; when it is
 * present a missing country might be inside it. The first case is shaded as a
 * measured zero, the second is hatched as unknown, and the legend says which
 * of the two the reader is looking at. Land with no wing at all — Belarus,
 * Türkiye, north Africa — is a third thing again, and stays the recessive tone
 * it has on the public map.
 *
 * **On the accessibility tree.** Unlike the public map this one contains no
 * links and nothing focusable, so `aria-hidden` costs a screen reader nothing:
 * the ranked list beside it carries every figure the shading encodes, as text,
 * and is the better reading of the two anyway. The `<title>` elements remain
 * for pointer users, who get a native tooltip without a line of JavaScript.
 */
export function VisitorMap({
  result,
  geography,
  days,
}: {
  readonly result: AnalyticsResult<unknown>;
  readonly geography: Geography | undefined;
  readonly days: number;
}) {
  const caption = `Visitors by country, last ${days} days. Hover a nation for its figures.`;

  if (!geography || result.state !== "ok") {
    return (
      <Panel title="Where visitors are" caption={caption} span>
        <Unavailable result={result} />
      </Panel>
    );
  }

  if (geography.totalVisitors === 0) {
    return (
      <Panel title="Where visitors are" caption={caption} span>
        <Empty>Vercel attributed no visitors to any country in this range.</Empty>
      </Panel>
    );
  }

  return (
    <Panel title="Where visitors are" caption={caption} span>
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <svg viewBox={europeViewBox} aria-hidden="true" className="h-auto w-full">
            <defs>
              {/*
               * Hatching, the cartographic convention for "not surveyed". It
               * has to be a texture rather than another tint: a sixth shade of
               * the same ramp would read as a quantity, which is the one thing
               * this is not.
               */}
              <pattern
                id="admin-map-unmeasured"
                width={64}
                height={64}
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <rect width={64} height={64} className="fill-surface" />
                <line x1={0} y1={0} x2={0} y2={64} strokeWidth={22} className="stroke-rule" />
              </pattern>
            </defs>

            <path
              d={europeContext}
              strokeWidth={4}
              className="pointer-events-none fill-gold/6 stroke-hairline"
            />

            {europeWings.map((shape) => {
              const country = geography.byWing.get(shape.slug);
              const paint = paintFor(country?.visitors, geography);

              return (
                <g key={shape.slug}>
                  <title>
                    {country
                      ? `${country.name} — ${num(country.visitors)} visitors, ${num(country.pageviews)} page views`
                      : `${shape.country} — ${geography.complete ? "no visitors recorded" : "not reported"}`}
                  </title>

                  <path
                    d={shape.d}
                    strokeWidth={5}
                    fill={paint.fill}
                    className={cn("stroke-canvas", paint.className)}
                  />

                  {/*
                   * The five nations a few pixels across would otherwise be
                   * unreadable at any shade. Same marker the public map uses,
                   * carrying the same fill as the outline beneath it.
                   */}
                  {shape.small ? (
                    <circle
                      cx={shape.cx}
                      cy={shape.cy}
                      r={30}
                      strokeWidth={8}
                      fill={paint.fill}
                      className={cn("stroke-canvas", paint.className)}
                    />
                  ) : null}
                </g>
              );
            })}
          </svg>

          <Legend geography={geography} />
        </div>

        <CountryRanking geography={geography} />
      </div>
    </Panel>
  );
}

/**
 * What the shading means, including the two tones that are not quantities.
 *
 * The "unshaded" entry changes wording with `complete`, because in one case it
 * is a measurement and in the other it is an admission, and a legend that said
 * "none" for both would be quietly wrong half the time.
 */
function Legend({ geography }: { readonly geography: Geography }) {
  const { bands } = geography;

  return (
    <ul className="mt-6 flex flex-col gap-2">
      {bands.map((upper, index) => {
        const floor = bandFloor(bands, index);
        return (
          <li key={upper} className="flex items-center gap-3 text-micro text-muted">
            <span
              aria-hidden="true"
              className={cn("inline-block size-3 shrink-0", swatchFor(index, bands.length))}
            />
            <span className="numerals-tabular">
              {floor === upper ? num(upper) : `${num(floor)}–${num(upper)}`}{" "}
              {upper === 1 ? "visitor" : "visitors"}
            </span>
          </li>
        );
      })}

      <li className="flex items-center gap-3 text-micro text-muted">
        <span
          aria-hidden="true"
          className={cn(
            "inline-block size-3 shrink-0 bg-surface",
            !geography.complete && "border border-rule",
          )}
        />
        {geography.complete
          ? "No visitors recorded"
          : "Not reported — more countries occurred than Vercel listed by name, so these may be inside the remainder rather than empty"}
      </li>

      <li className="flex items-center gap-3 text-micro text-faint">
        <span aria-hidden="true" className="inline-block size-3 shrink-0 bg-gold/6" />
        No national wing, so not shaded
      </li>
    </ul>
  );
}

/**
 * Every country, in order, including the ones the map has no outline for.
 *
 * This is the accessible reading of the map and the honest one: a visitor from
 * Brazil is counted here whatever the picture beside it can show.
 */
function CountryRanking({ geography }: { readonly geography: Geography }) {
  const peak = Math.max(
    1,
    ...geography.mapped.map((row) => row.visitors),
    ...geography.elsewhere.map((row) => row.visitors),
  );

  return (
    <div className="flex flex-col gap-6">
      <Ranked
        title="With a national wing"
        rows={geography.mapped}
        peak={peak}
        total={geography.mappedVisitors}
        empty="No visitors from a country the map draws."
      />

      <Ranked
        title="Elsewhere"
        rows={geography.elsewhere}
        peak={peak}
        total={geography.elsewhereVisitors}
        empty="No visitors from outside the forty-seven."
      />

      {geography.others ? (
        <div>
          <h4 className="eyebrow text-muted">Remainder</h4>
          <p className="mt-2 text-micro text-faint">
            {num(geography.others.visitors)} visitors from countries beyond the
            {" "}listed ones, which Vercel returns as a single total rather than by name.
          </p>
        </div>
      ) : null}

      <p className="numerals-tabular border-t border-hairline pt-4 text-micro text-faint">
        {num(geography.totalVisitors)} visitors attributed to a country altogether.
      </p>
    </div>
  );
}

function Ranked({
  title,
  rows,
  peak,
  total,
  empty,
}: {
  readonly title: string;
  readonly rows: readonly { code: string; name: string; visitors: number; pageviews: number }[];
  readonly peak: number;
  readonly total: number;
  readonly empty: string;
}) {
  return (
    <div>
      <h4 className="flex items-baseline justify-between gap-4 eyebrow text-muted">
        {title}
        <span className="numerals-tabular text-micro tracking-normal text-faint">{num(total)}</span>
      </h4>

      {rows.length === 0 ? (
        <p className="mt-3 text-micro text-faint">{empty}</p>
      ) : (
        <dl className="mt-3 flex flex-col">
          {rows.map((row) => (
            <div key={row.code} className="border-b border-hairline py-2 last:border-0">
              <div className="grid grid-cols-[1fr_auto] items-baseline gap-4">
                <dt className="truncate text-[0.875rem] text-body/92" title={row.name}>
                  {row.name}
                </dt>
                <dd className="numerals-tabular text-[0.875rem] text-ink">{num(row.visitors)}</dd>
              </div>
              <div aria-hidden="true" className="mt-1.5 h-0.5 bg-hairline">
                <span
                  className="block h-full bg-burgundy/60"
                  style={{ width: `${Math.max(1, (row.visitors / peak) * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ tables */

/**
 * A dimension as a ranked list with a share bar.
 *
 * The bar is the tidying the tables needed: two columns of digits make the
 * reader do the division themselves, and "which referrer matters" is a
 * question about proportion rather than about the absolute number.
 */
export function ShareTable({
  title,
  caption,
  result,
  metric = "visitors",
  empty = "Nothing recorded in this range.",
  format,
  span,
}: {
  readonly title: string;
  readonly caption?: string;
  readonly result: AnalyticsResult<DimensionBreakdown>;
  readonly metric?: "visitors" | "pageviews";
  readonly empty?: string;
  readonly format?: (label: string) => string;
  readonly span?: boolean;
}) {
  if (result.state !== "ok") {
    return (
      <Panel title={title} caption={caption} span={span}>
        <Unavailable result={result} />
      </Panel>
    );
  }

  const rows = result.data.rows;
  const peak = Math.max(1, ...rows.map((row) => row[metric]));

  return (
    <Panel title={title} caption={caption} span={span}>
      {rows.length === 0 ? (
        <Empty>{empty}</Empty>
      ) : (
        <dl className="flex flex-col">
          {rows.map((row) => (
            <div key={row.label} className="border-b border-hairline py-2.5 last:border-0">
              <div className="grid grid-cols-[1fr_auto_auto] items-baseline gap-4">
                <dt className="truncate text-[0.875rem] text-body/92" title={row.label}>
                  {format ? format(row.label) : row.label}
                </dt>
                <dd className="numerals-tabular text-[0.875rem] text-ink">{num(row[metric])}</dd>
                <dd className="numerals-tabular w-14 text-right text-micro text-faint">
                  {num(metric === "visitors" ? row.pageviews : row.visitors)}
                </dd>
              </div>
              <div aria-hidden="true" className="mt-1.5 h-0.5 bg-hairline">
                <span
                  className="block h-full bg-gold/55"
                  style={{ width: `${Math.max(1, (row[metric] / peak) * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </dl>
      )}

      {result.data.others ? (
        <p className="mt-4 text-micro text-faint">
          A further {num(result.data.others.visitors)} visitors fall outside the rows above; Vercel
          returns them as one total rather than by name.
        </p>
      ) : null}
    </Panel>
  );
}

import type { DailyRow, VisitTotals } from "@/lib/admin/analytics";

/**
 * The arithmetic behind the traffic charts, kept out of the components that
 * draw them.
 *
 * Two things here are easy to get quietly wrong, and both are the sort of
 * wrong that produces a confident number rather than a visible failure: a
 * percentage change measured against nothing, and a gap in a series drawn as
 * though it were a zero. Each has an explicit shape below so that a caller
 * cannot render one without having decided what to say about it.
 */

const DAY = 86_400_000;

/* ------------------------------------------------------------------ change */

/**
 * How this period compares with the one before it.
 *
 * `no-baseline` is a separate case rather than an infinity or a hidden zero.
 * Going from nought to forty visitors is not "up 4000%" and is not "up 100%";
 * it is a first measurement, and the only honest thing to print is that there
 * was nothing to compare against. Rendering it as a percentage would also make
 * the most common state of a new site — and of any range older than the plan's
 * reporting window — look like a dramatic result.
 */
export type Change =
  | { readonly kind: "no-baseline"; readonly current: number }
  | {
      readonly kind: "up" | "down" | "level";
      readonly percent: number;
      readonly current: number;
      readonly previous: number;
    };

export function compare(current: number, previous: number): Change {
  if (previous <= 0) return { kind: "no-baseline", current };

  const percent = ((current - previous) / previous) * 100;
  // Rounded before the direction is decided, so the arrow and the number can
  // never disagree — a +0.4% would otherwise print as "0%" beside a rise.
  const rounded = Math.round(percent);
  const kind = rounded === 0 ? "level" : rounded > 0 ? "up" : "down";

  return { kind, percent: rounded, current, previous };
}

export interface Comparison {
  readonly visitors: Change;
  readonly pageviews: Change;
}

export function compareTotals(current: VisitTotals, previous: VisitTotals): Comparison {
  return {
    visitors: compare(current.visitors, previous.visitors),
    pageviews: compare(current.pageviews, previous.pageviews),
  };
}

/* ------------------------------------------------------------------ series */

export interface SeriesDay {
  readonly date: string;
  readonly pageviews: number;
  readonly visitors: number;
  /**
   * Whether this day is inside the window the API answered for.
   *
   * A day that is not recorded is drawn as a gap, never as a zero column. The
   * two look similar and mean opposite things: one says nobody came, the other
   * says nobody can tell.
   */
  readonly recorded: boolean;
}

export interface Series {
  readonly days: readonly SeriesDay[];
  /** Tallest value on either line; the y-axis is scaled to it. */
  readonly peak: number;
  readonly totalPageviews: number;
  readonly totalVisitors: number;
  /** Days at the start of the range the API said nothing about. */
  readonly unreported: number;
  /** True when every day in range is recorded and every one of them is zero. */
  readonly quiet: boolean;
}

function toUtc(date: string): number {
  const [year, month, day] = date.split("-").map(Number);
  return Date.UTC(year ?? 1970, (month ?? 1) - 1, day ?? 1);
}

function toIso(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10);
}

/**
 * The calendar the chart is drawn on, with each day marked recorded or not.
 *
 * Vercel returns a row per day that had traffic and omits the rest, so the
 * response alone cannot distinguish "nobody visited on the 4th" from "the 4th
 * is older than this plan can see". The rule used here resolves that in the
 * cautious direction: coverage is taken to begin at the first day the API
 * mentioned, days from there on are real zeroes where no row came back, and
 * days before it are marked unrecorded.
 *
 * That errs — a genuinely quiet week before the first visit is shown as
 * unknown rather than as zero. It errs the right way round. Understating what
 * is known costs a little contrast on the chart; the other mistake would draw
 * a month the account cannot see as a month in which nobody came, which is a
 * measurement nobody made.
 */
export function readSeries(rows: readonly DailyRow[], since: string, until: string): Series {
  const byDate = new Map(rows.map((row) => [row.date, row]));
  const first = rows.length > 0 ? Math.min(...rows.map((row) => toUtc(row.date))) : undefined;

  const days: SeriesDay[] = [];
  for (let ms = toUtc(since); ms <= toUtc(until); ms += DAY) {
    const date = toIso(ms);
    const row = byDate.get(date);
    const recorded = first !== undefined && ms >= first;
    days.push({
      date,
      recorded,
      pageviews: row?.pageviews ?? 0,
      visitors: row?.visitors ?? 0,
    });
  }

  const recorded = days.filter((day) => day.recorded);

  return {
    days,
    peak: Math.max(0, ...days.map((day) => Math.max(day.pageviews, day.visitors))),
    totalPageviews: days.reduce((running, day) => running + day.pageviews, 0),
    totalVisitors: days.reduce((running, day) => running + day.visitors, 0),
    unreported: days.length - recorded.length,
    quiet: recorded.length === days.length && recorded.every((day) => day.pageviews === 0),
  };
}

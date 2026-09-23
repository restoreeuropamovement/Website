import Link from "next/link";
import { countryLabel } from "@/content/involvement";
import type { IntakeTrend } from "@/lib/admin/intake";
import { MEMBER_STATUS_LABEL, MEMBER_STATUSES } from "@/lib/admin/member-status";
import type { MembershipOverview } from "@/lib/admin/members";

/**
 * What the movement did, as against what the traffic panel measures, which is
 * what it was shown. These are the site's own rows, so unlike the Vercel
 * figures there is no "unavailable" state to render: if the database cannot be
 * reached the dashboard does not load at all.
 *
 * Nothing here decrypts anything. Counts by country and by state come from the
 * two columns held in the clear, which is the same line the members page draws
 * — an administrator sees the shape of the roll while signed in, and has to
 * re-assert a passkey before seeing anybody on it.
 */

export function IntakeTotals({
  days,
  trend,
  overview,
}: {
  readonly days: number;
  readonly trend: IntakeTrend;
  readonly overview: MembershipOverview;
}) {
  return (
    <section className="border border-hairline p-6">
      <h3 className="eyebrow mb-5 text-muted">Applications, last {days} days</h3>
      <dl className="flex flex-wrap gap-x-10 gap-y-5">
        <Figure label="Received" value={trend.applications} />
        <Figure label="Accepted" value={trend.accepted} />
        <Figure label="Enquiries" value={trend.enquiries} />
      </dl>

      <p className="mt-6 text-[0.875rem] text-muted">
        {overview.total.toLocaleString("en-GB")} on the roll altogether,{" "}
        <strong className="font-normal text-ink">
          {overview.open.toLocaleString("en-GB")} still waiting on a decision
        </strong>
        .
      </p>

      <Link
        href="/admin/members"
        className="mt-4 inline-block text-[0.875rem] text-muted underline underline-offset-4 hover:text-burgundy"
      >
        Review applications
      </Link>
    </section>
  );
}

function Figure({ label, value }: { readonly label: string; readonly value: number }) {
  return (
    <div>
      <dt className="text-micro text-faint">{label}</dt>
      <dd className="numerals-tabular font-serif text-display-3 text-ink">
        {value.toLocaleString("en-GB")}
      </dd>
    </div>
  );
}

/**
 * Two series on one baseline: applications, and enquiries behind them.
 *
 * Same CSS-only approach as the traffic chart — no charting library, no client
 * JavaScript, heights computed on the server — and each day is also a text
 * label in `sr-only`, so the series is readable rather than being an
 * inaccessible picture of some numbers.
 */
export function IntakeBars({ days, trend }: { readonly days: number; readonly trend: IntakeTrend }) {
  const peak = Math.max(
    1,
    ...trend.days.map((day) => Math.max(day.applications, day.enquiries)),
  );
  const quiet = trend.applications === 0 && trend.enquiries === 0;

  return (
    <section className="border border-hairline p-6">
      <h3 className="eyebrow mb-1 text-muted">Applications and enquiries by day</h3>
      <p className="mb-5 text-micro text-faint">
        Applications in burgundy, enquiries in grey. Last {days} days.
      </p>

      {quiet ? (
        <p className="text-[0.875rem] text-muted">
          Nothing arrived through either form in this range. That is a measurement, not a gap — the
          forms are connected and writing.
        </p>
      ) : (
        <ol className="flex h-40 items-end gap-1">
          {trend.days.map((day) => (
            <li key={day.date} className="flex h-full flex-1 items-end gap-px">
              <span
                className="block flex-1 bg-burgundy/55"
                style={{ height: `${(day.applications / peak) * 100}%` }}
              />
              <span
                className="block flex-1 bg-rule"
                style={{ height: `${(day.enquiries / peak) * 100}%` }}
              />
              <span className="sr-only">
                {day.date}: {day.applications} applications, {day.enquiries} enquiries
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

/** The pipeline, as a count for each state an application can be sitting in. */
export function PipelineTable({ overview }: { readonly overview: MembershipOverview }) {
  return (
    <section className="border border-hairline p-6">
      <h3 className="eyebrow mb-1 text-muted">Pipeline</h3>
      <p className="mb-4 text-micro text-faint">Every application, by where it has got to.</p>

      <dl className="flex flex-col">
        {MEMBER_STATUSES.map((status) => (
          <div
            key={status}
            className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-hairline py-2.5 last:border-0"
          >
            <dt className="text-[0.875rem] text-body/92">{MEMBER_STATUS_LABEL[status]}</dt>
            <dd className="numerals-tabular text-[0.875rem] text-ink">
              {overview[status].toLocaleString("en-GB")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/**
 * Where the roll is, by country.
 *
 * `country` is one of the two columns deliberately left unencrypted so that
 * exactly this can be counted without decrypting anybody. Region is not in
 * that group, and is not shown here, because it narrows a person far more than
 * a country does.
 */
export function CountryTable({
  overview,
  limit = 8,
}: {
  readonly overview: MembershipOverview;
  readonly limit?: number;
}) {
  const rows = overview.countries.slice(0, limit);

  return (
    <section className="border border-hairline p-6">
      <h3 className="eyebrow mb-1 text-muted">Countries</h3>
      <p className="mb-4 text-micro text-faint">Accepted, then applications of any state.</p>

      {rows.length === 0 ? (
        <p className="mt-4 text-[0.875rem] text-muted">Nobody has applied yet.</p>
      ) : (
        <dl className="mt-4 flex flex-col">
          {rows.map((row) => {
            const all = MEMBER_STATUSES.reduce((running, status) => running + row[status], 0);
            return (
              <div
                key={row.country}
                className="grid grid-cols-[1fr_auto_auto] items-baseline gap-4 border-b border-hairline py-2.5 last:border-0"
              >
                {/* Stored as a wing slug; the roll counts on ids, not labels. */}
                <dt className="truncate text-[0.875rem] text-body/92">
                  {countryLabel(row.country)}
                </dt>
                <dd className="numerals-tabular text-[0.875rem] text-ink">{row.confirmed}</dd>
                <dd className="numerals-tabular w-16 text-right text-micro text-faint">{all}</dd>
              </div>
            );
          })}
        </dl>
      )}
    </section>
  );
}

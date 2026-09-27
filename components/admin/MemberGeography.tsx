import { MemberMap } from "@/components/admin/MemberMap";
import { countryLabel } from "@/content/involvement";
import type { CountryCount } from "@/lib/admin/members";
import { cn } from "@/lib/utils";

/** Everything held for one country, whatever state each record is in. */
export function heldIn(row: CountryCount): number {
  return row.new + row.reviewing + row.awaiting + row.confirmed + row.declined;
}

export interface MemberGeographyProps {
  readonly countries: readonly CountryCount[];
  /** The country currently filtering the roll, if any. */
  readonly selected?: string;
  /** Link that filters to a country, or clears the filter when given nothing. */
  readonly hrefFor: (country?: string) => string;
}

/**
 * The roll as geography: the map, and the same figures as a list beside it.
 *
 * Both sit above the passkey wall, for the reason the tabs do. `country` is the
 * one column on `member` deliberately left unencrypted, because the admin view
 * counts and sorts on it and a country names nobody; these figures are a SQL
 * aggregate over that column and decrypt nothing. So a signed-in administrator
 * sees the shape of the movement without asserting a passkey, and only asking
 * who those people are costs one.
 *
 * The list is not a fallback for the map. It carries the same figures in the
 * same order, reachable by keyboard and screen reader, and it is where the
 * per-state split lives — a shaded outline can say "more here than there" and
 * nothing else.
 *
 * Countries holding nothing appear in neither. The query groups over rows that
 * exist, so the list is exactly as long as the movement is wide, and the map
 * leaves the rest of Europe unshaded rather than listing forty-odd zeroes.
 */
export function MemberGeography({ countries, selected, hrefFor }: MemberGeographyProps) {
  if (countries.length === 0) {
    return (
      <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
        No records yet. Once applications arrive they appear here, counted by country.
      </p>
    );
  }

  const selectedRow = countries.find((row) => row.country === selected);
  const busiest = countries.reduce((a, b) => (heldIn(b) > heldIn(a) ? b : a));

  /*
   * Clicking the country already being filtered clears the filter rather than
   * setting it again. On a map a second click on the same shape reads as
   * "undo", and the alternative is a selection that can only be undone from
   * somewhere else on the page.
   */
  const toggle = (country: string) => hrefFor(country === selected ? undefined : country);

  /*
   * "Elsewhere" is a real option on the public form and a real answer: a
   * European living outside the forty-seven. It has no outline to shade, so a
   * map-only view would lose it — it keeps its row in the list like any other
   * country, and the map is simply not asked to draw it.
   */
  const outlined = countries.filter((row) => row.country !== "other");

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-3">
        <h2 className="font-serif text-display-4 font-normal text-ink">Where they are</h2>
        <p className="max-w-md text-micro text-faint">
          Every record, in whatever state. Shaded logarithmically, so a country darkens as its
          count multiplies rather than as it gains one — {countryLabel(busiest.country)} leads, at{" "}
          {heldIn(busiest)}.
        </p>
      </div>

      {selected ? (
        <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
          <span>
            <span className="text-ink">{countryLabel(selected)}</span>
            {selectedRow
              ? ` — ${heldIn(selectedRow)} ${heldIn(selectedRow) === 1 ? "record" : "records"}, of which ${selectedRow.confirmed} confirmed and ${selectedRow.new + selectedRow.reviewing} still open.`
              : " holds no records."}
          </span>
          <a
            href={hrefFor()}
            className="text-[0.875rem] underline underline-offset-4 hover:text-ink"
          >
            Show every country
          </a>
        </p>
      ) : null}

      <div className="grid items-start gap-10 lg:grid-cols-[1.7fr_1fr]">
        <MemberMap counts={outlined} selected={selected} hrefFor={toggle} />

        <ul className="flex flex-col border-t border-hairline">
          {countries.map((row) => {
            const held = heldIn(row);
            const open = row.new + row.reviewing;
            const current = row.country === selected;

            return (
              <li key={row.country} className="border-b border-hairline">
                <a
                  href={toggle(row.country)}
                  aria-current={current ? "true" : undefined}
                  className={cn(
                    "flex flex-col gap-1.5 border-l-2 py-3 pr-1 pl-3 transition-colors",
                    current
                      ? "border-gold bg-gold/5"
                      : "border-transparent hover:bg-hairline/40",
                  )}
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="text-[0.9375rem] text-ink">{countryLabel(row.country)}</span>
                    <span className="shrink-0 text-[0.9375rem] tabular-nums text-ink">{held}</span>
                  </span>

                  <span className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-1.5 min-w-8 flex-1 bg-hairline">
                      <span
                        className="block h-full bg-burgundy/70"
                        style={{ width: `${Math.round((held / heldIn(busiest)) * 100)}%` }}
                      />
                    </span>
                    <span className="shrink-0 text-micro tabular-nums text-faint">
                      {row.confirmed} confirmed{open > 0 ? ` · ${open} open` : ""}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

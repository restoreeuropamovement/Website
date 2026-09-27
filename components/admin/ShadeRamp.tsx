import { SHADE_FLOOR, SHADE_PEAK, scaleFraction, scaleTicks } from "@/lib/admin/choropleth";

/**
 * The key to a continuous shade: the ramp itself, marked where it can be read.
 *
 * A bar rather than a column of swatches, because the shading it explains has
 * no steps in it. Five labelled squares beside a smooth ramp would invite the
 * reader to match a country against the nearest square and read off a range
 * that does not exist.
 *
 * The decade marks are placed by the same function that decides the shading,
 * so the point on the bar marked for a hundred is exactly the darkness a
 * country with a hundred of them is drawn in. Their spacing tightens towards
 * the top — that crowding is the scale being logarithmic, shown rather than
 * asserted.
 */
export function ShadeRamp({
  ceiling,
  tone,
  unit,
  format,
}: {
  readonly ceiling: number;
  /** Which ink to ramp. The two maps are burgundy; the calendar is gold. */
  readonly tone: "burgundy" | "gold";
  /** What the numbers count, written after the last mark. */
  readonly unit: string;
  readonly format: (value: number) => string;
}) {
  const ticks = scaleTicks(ceiling);
  const gradient = `admin-shade-ramp-${tone}`;

  return (
    <div className="flex max-w-72 min-w-44 flex-1 flex-col gap-1">
      <svg
        viewBox="0 0 100 4"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={tone === "gold" ? "h-2 w-full text-gold" : "h-2 w-full text-burgundy"}
      >
        <defs>
          {/*
           * `currentColor` rather than the token, so the ink is set by a
           * Tailwind text utility above. A `stop-color` naming a CSS variable
           * is resolved inconsistently, and this needs none of the argument.
           */}
          <linearGradient id={gradient}>
            <stop offset="0%" stopColor="currentColor" stopOpacity={SHADE_FLOOR} />
            <stop offset="100%" stopColor="currentColor" stopOpacity={SHADE_PEAK} />
          </linearGradient>
        </defs>
        <rect width={100} height={4} fill={`url(#${gradient})`} />

        {/*
         * Cut in the ground colour rather than drawn in ink, so a mark reads
         * as a division of the bar at any darkness it lands on.
         */}
        {ticks.map((tick) => {
          const x = scaleFraction(tick, ceiling) * 100;
          return (
            <line
              key={tick}
              x1={x}
              x2={x}
              y1={0}
              y2={4}
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              className="stroke-canvas"
            />
          );
        })}
      </svg>

      <div className="flex items-baseline justify-between gap-3 text-micro tabular-nums text-faint">
        <span>{format(1)}</span>
        <span>
          {format(ceiling)} {unit}
        </span>
      </div>
    </div>
  );
}

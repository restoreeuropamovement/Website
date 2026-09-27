/**
 * Turning a count into a shade.
 *
 * One description of this for the whole admin surface, because the two maps
 * and the calendar were each inventing their own and all three had inherited
 * the same two faults from the obvious implementation — five even bands up to
 * whatever the busiest figure happens to be.
 *
 * **Even bands saturate.** Visits and memberships are not spread evenly across
 * countries; they are heavy-tailed, and a national movement's leading country
 * routinely holds ten or a hundred times what the median one does. Cut that
 * range into five equal slices and every country except the leader lands in
 * the first slice. The map then says "Germany, and forty-six others", which is
 * the one thing about the distribution that needed no map to discover — and it
 * gets worse, not better, the more traffic there is.
 *
 * **Bands measured against the peak are unstable.** If every boundary is a
 * fraction of the current maximum, a single visit to the busiest country moves
 * all five boundaries and can repaint nations that had no new visitors at all.
 * Shade then reports something other than the quantity it claims to.
 *
 * Both are fixed by the same change: shade on a logarithm, against a ceiling
 * that only moves in large steps.
 *
 *   * **Logarithmic**, so equal differences in shade mean equal *ratios*. A
 *     country darkens when its count multiplies rather than when it gains one,
 *     which is both the honest reading of this kind of data and the reason the
 *     picture keeps working after the counts grow by three orders of
 *     magnitude. Nothing ever bunches at either end.
 *   * **Continuous**, not five steps. A boundary between bands is a cliff: two
 *     countries one visit apart can be visibly different colours while two a
 *     hundred apart are identical. A ramp has no cliffs to sit either side of.
 *   * **Against a ladder ceiling** — 1, 2, 5, 10, 20, 50 and so on — rather
 *     than the peak itself, so the scale is stable. Germany going from 4,100
 *     to 4,900 visitors repaints nothing; the ceiling only moves when the
 *     leader grows by something like two and a half times, and then it is
 *     reporting a real change of scale.
 */

/** Mantissas of the ladder the ceiling snaps to, within each power of ten. */
const LADDER = [1, 2, 5] as const;

/**
 * Faintest and strongest ink, as fill opacity.
 *
 * The floor is not zero. A country with one visitor has been somewhere a
 * country with none has not, and that difference has to survive on a dark
 * ground; below roughly this value it does not. It is set high enough that the
 * bottom of the ramp is still legible, because with the anchored ceilings
 * below that is where an early map spends all its time.
 */
export const SHADE_FLOOR = 0.22;
export const SHADE_PEAK = 0.96;

/**
 * Where the top of each ramp is anchored, until the figures outgrow it.
 *
 * These are judgements about what would be a good result, not measurements,
 * and they are meant to be revised upwards once the real numbers are known.
 * Each is the point at which a country or a day is drawn in full ink.
 */

/** Visitors to one country over the reporting window. */
export const VISITOR_CEILING = 1000;

/** Visitors on a single day, which is a thirtieth of the same traffic. */
export const DAILY_VISITOR_CEILING = 100;

/** Records held for one country. A different quantity entirely, and far smaller. */
export const MEMBER_CEILING = 100;

/**
 * The top of the scale: the first ladder rung at or above the busiest figure,
 * but never below `floor`.
 *
 * The floor is what stops the scale from shrinking to fit a quiet week. Left
 * purely adaptive, a ramp reading "1 to 5" paints five visitors in the same
 * ink that fifty thousand would earn later, so the map looks identical in
 * month one and month forty and growth is invisible — the one thing a picture
 * of traffic over time is for. Anchoring the top to a figure that would be a
 * genuinely busy result makes the shading mean the same thing every month, and
 * leaves the early map honestly pale.
 *
 * Each caller sets its own, because a lot of visitors and a lot of members are
 * different quantities by orders of magnitude, and one number for both would
 * be wrong for at least one of them.
 */
export function scaleCeiling(peak: number, floor = 1): number {
  if (!Number.isFinite(peak) || peak <= 1) return Math.max(1, floor);

  const magnitude = 10 ** Math.floor(Math.log10(peak));
  for (const rung of LADDER) {
    if (rung * magnitude >= peak) return Math.max(rung * magnitude, floor);
  }
  return Math.max(10 * magnitude, floor);
}

/**
 * Where a figure sits on the scale, from 0 at nothing to 1 at the ceiling.
 *
 * `value + 1` rather than `value` so that one is distinguishable from none:
 * the logarithm of 1 is 0, which would paint a country that had a visitor
 * exactly as if it had not.
 */
export function scaleFraction(value: number, ceiling: number): number {
  if (value <= 0) return 0;
  const top = Math.log(Math.max(ceiling, 1) + 1);
  if (top <= 0) return 1;
  return Math.min(1, Math.max(0, Math.log(value + 1) / top));
}

/** Fill opacity for a figure, ready for an SVG `fill-opacity` or a CSS one. */
export function shadeOf(value: number, ceiling: number): number {
  return SHADE_FLOOR + scaleFraction(value, ceiling) * (SHADE_PEAK - SHADE_FLOOR);
}

/**
 * Powers of ten strictly inside the ramp, for marking it.
 *
 * Marks rather than labels, and only the interior ones: the two ends carry the
 * numbers. Written against a logarithmic ramp these fall closer and closer
 * together towards the top, and that crowding is the useful thing about them —
 * it shows the scale bending rather than claiming in words that it does.
 * Labelling them as well was the first attempt and they collided, because on a
 * bar two hundred pixels wide the last decade sits within a few pixels of the
 * ceiling.
 */
export function scaleTicks(ceiling: number): readonly number[] {
  const ticks: number[] = [];
  for (let value = 10; value < ceiling; value *= 10) ticks.push(value);
  return ticks;
}

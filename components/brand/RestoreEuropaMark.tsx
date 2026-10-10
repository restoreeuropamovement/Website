import { cn } from "@/lib/utils";
import { markLozenge, markRects, markViewBox } from "./mark-geometry";

interface RestoreEuropaMarkProps {
  readonly className?: string;
  /** Provide a title only when the mark stands alone as the accessible label. */
  readonly title?: string;
  /**
   * `current` takes the colour of the text beside it. `heraldic` paints a navy
   * field inside a gold moulding — see the notes above `FIELD` and `TRIM`.
   */
  readonly tone?: "current" | "heraldic";
}

/** The navy field, read off the reference drawing inside one of its arms. */
const FIELD = "#0f2b4e";

/**
 * The gold trim, as the concentric passes that draw it.
 *
 * The reference does not use a flat gold. A cross-section through one of its
 * bands runs: a dull outer rim, a bright core, a grade back down towards the
 * middle, then a near-black hairline against the navy — a moulding lit from no
 * particular direction, which is why the figure reads as raised. These are the
 * tones from that cross-section, as bands measured outwards from the edge of
 * the silhouette.
 *
 * Each is a stroke, so `width` is twice the distance the band reaches out;
 * only the outer half of a stroke survives the fill. They are listed widest
 * first because that is the order they have to be painted in — every pass
 * covers the inner part of the one before it, so the narrower the stroke the
 * later it goes down, and the bands fall out of the differences between them.
 */
const TRIM = [
  { width: 64, colour: "#8a6530" },
  { width: 56, colour: "#fbd982" },
  { width: 42, colour: "#f0c96f" },
  { width: 28, colour: "#d3a752" },
  { width: 16, colour: "#a87f37" },
  { width: 6, colour: "#0b1420" },
] as const;

/**
 * The trim is strokes under a fill rather than inset outlines, and the ordering
 * is what makes that work. Stroking the six rects and the lozenge individually
 * puts gold along every internal seam where two of them meet; painting the navy
 * fill over the top covers every one of those, because a seam is by definition
 * inside the silhouette. What survives is the outer half of each stroke, which
 * follows the union of the shapes — so the figure gets a continuous moulding
 * without anyone having to compute that union.
 *
 * It also means the navy is untouched however wide the trim goes, which matters
 * because the lozenge band is only 45 units deep and would otherwise be eaten.
 * The lozenge is hollow, so the same passes lay gold along the inside of its
 * band as well, as the reference does.
 *
 * The widest stroke is capped by the box. The lozenge's vertices are right
 * angles, and a miter on a right angle reaches half the stroke width times root
 * two along the bisector; the topmost vertex sits 50 units from the edge, so
 * anything past 70 is clipped. 64 is the most that clears it, and the mark needs
 * all of it: in the masthead the figure is about 34 pixels tall, where the whole
 * moulding is barely a pixel and averages out to a single gold line.
 *
 * The cost is the figure repeated once per pass. It is a few hundred bytes of
 * path data and the copies are identical, so it compresses to almost nothing.
 */

/**
 * The movement's mark: a cross potent with its four tips joined by a lozenge.
 *
 * Drawn in `currentColor`, not in the brand red. In the masthead the mark sits
 * a few pixels from the wordmark, and a red glyph beside parchment lettering
 * reads as two marks rather than one; taking the colour of the text next to it
 * makes the pair a single lockup. The red is where the mark stands alone and
 * has nothing to agree with — the favicon, the home-screen icon and the crest
 * on the link preview card, all cut from the same geometry by
 * `scripts/generate-brand.mjs`.
 *
 * Inline rather than an `<Image>`: it is a few hundred bytes of path data, so
 * inlining costs less than the request would and the masthead cannot render a
 * frame without its mark.
 *
 * The figure is square. Size it by height and the width follows.
 */
export function RestoreEuropaMark({
  className,
  title,
  tone = "current",
}: RestoreEuropaMarkProps) {
  const figure = (
    <>
      <path fillRule="evenodd" d={markLozenge} />
      {markRects.map((rect) => (
        <rect key={`${rect.x}:${rect.y}`} {...rect} />
      ))}
    </>
  );

  return (
    <svg
      viewBox={markViewBox}
      className={cn("aspect-square", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {tone === "heraldic" ? (
        <>
          {TRIM.map((band) => (
            <g
              key={band.width}
              fill="none"
              stroke={band.colour}
              strokeWidth={band.width}
              strokeLinejoin="miter"
            >
              {figure}
            </g>
          ))}
          <g fill={FIELD}>{figure}</g>
        </>
      ) : (
        <g fill="currentColor">{figure}</g>
      )}
    </svg>
  );
}

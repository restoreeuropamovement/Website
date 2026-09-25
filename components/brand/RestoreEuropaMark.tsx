import { cn } from "@/lib/utils";
import { markLozenge, markRects, markViewBox } from "./mark-geometry";

interface RestoreEuropaMarkProps {
  readonly className?: string;
  /** Provide a title only when the mark stands alone as the accessible label. */
  readonly title?: string;
}

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
export function RestoreEuropaMark({ className, title }: RestoreEuropaMarkProps) {
  return (
    <svg
      viewBox={markViewBox}
      className={cn("aspect-square", className)}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path fillRule="evenodd" d={markLozenge} />
      {markRects.map((rect) => (
        <rect key={`${rect.x}:${rect.y}`} {...rect} />
      ))}
    </svg>
  );
}

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
 * Drawn in the accent red, not in `currentColor`, and the reason is what the
 * old colour made it look like. Taking the colour of the text beside it meant
 * that everywhere the mark appears on the site — masthead, footer, hero, the
 * 404 — it came out parchment-white on near-black, and a bare white cross on
 * a dark ground is a composition the far right has made its own. A movement
 * whose whole argument is directed at systems rather than at peoples cannot
 * afford a mark that has to be explained before it is read.
 *
 * The typographic argument that put it in `currentColor` was sound and is
 * simply outweighed: a red glyph beside parchment lettering does read as two
 * marks rather than one lockup, which is a cost in refinement. It is not a
 * cost worth a symbol that announces the opposite of what the movement says.
 *
 * `burgundy` rather than the deeper red the icons are cut in. That red is
 * `#950101` in `scripts/generate-brand.mjs`, which sits around 2:1 on this
 * near-black ground and goes muddy; `burgundy` is the same hue family already
 * lifted for exactly this background, and is the accent the rest of the site
 * marks its links with. The favicon and home-screen icon keep the deeper red,
 * because they are cut against grounds of their own.
 *
 * Set as `fill` rather than as a text colour on purpose. A caller that passes
 * `text-…` for its lettering then cannot silently recolour the mark, which
 * matters because `cn()` concatenates and does not resolve conflicts.
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
      className={cn("aspect-square fill-burgundy", className)}
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

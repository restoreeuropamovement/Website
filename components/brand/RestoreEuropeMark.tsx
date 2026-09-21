import Image from "next/image";
import { cn } from "@/lib/utils";

interface RestoreEuropeMarkProps {
  readonly className?: string;
  /** Provide a title only when the mark stands alone as the accessible label. */
  readonly title?: string;
  /** Preload when the mark is in the first screen of a page, such as the masthead. */
  readonly preload?: boolean;
  /** Display width hint for the image optimizer. Chrome uses 80px; a nameplate needs more. */
  readonly sizes?: string;
}

/**
 * The movement's crest: a sword over the globe, wreathed, with the motto
 * *In varietate concordia*. Colour, not a currentColor glyph — size it with
 * height (`h-* w-auto`) so the shield's portrait proportions stay intact.
 */
export function RestoreEuropeMark({
  className,
  title,
  preload,
  sizes = "80px",
}: RestoreEuropeMarkProps) {
  return (
    <Image
      src="/brand/restore-europa-crest.png"
      alt={title ?? ""}
      width={451}
      height={640}
      sizes={sizes}
      preload={preload}
      className={cn("w-auto", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    />
  );
}

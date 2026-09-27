import Image from "next/image";
import type { ImageSlot } from "@/lib/content-types";
import { cn } from "@/lib/utils";

interface EditorialImageProps {
  readonly slot: ImageSlot;
  readonly className?: string;
  /** Applied to the frame, e.g. "aspect-[4/3]". Omit to use the natural ratio. */
  readonly aspect?: string;
  readonly sizes?: string;
  readonly priority?: boolean;
  /** Hide the caption even when the slot defines one. */
  readonly hideCaption?: boolean;
}

/**
 * The image component for everything the site itself publishes. Every slot is a
 * local asset — nothing reached through here is hotlinked.
 *
 * The one exception on the site is deliberately not this component:
 * `/materials` renders uploaded artwork from the store that holds it, through
 * `components/materials/MaterialPreview.tsx`, which has no intrinsic dimensions
 * to work from and one format `next/image` will not touch. Keeping the two apart
 * is what keeps "an `ImageSlot` is local" true.
 */
export function EditorialImage({
  slot,
  className,
  aspect,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  hideCaption = false,
}: EditorialImageProps) {
  const isVector = slot.src.endsWith(".svg");

  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div
        className={cn("relative overflow-hidden border border-hairline bg-canvas-deep", aspect)}
      >
        <Image
          src={slot.src}
          alt={slot.alt}
          width={slot.width}
          height={slot.height}
          sizes={sizes}
          priority={priority}
          unoptimized={isVector}
          className={cn(
            "text-[0]",
            aspect ? "size-full object-cover" : "h-auto w-full",
            // Only meaningful with a frame; without one nothing is cropped.
            aspect ? slot.focus : undefined,
          )}
        />
      </div>

      {slot.caption && !hideCaption ? (
        <figcaption className="text-micro leading-relaxed text-muted">{slot.caption}</figcaption>
      ) : null}
    </figure>
  );
}

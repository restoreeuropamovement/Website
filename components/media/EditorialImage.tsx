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
 * The single image component.
 *
 * Every slot is a local asset — nothing is hotlinked. Slots currently filled
 * with generated artwork carry `placeholder: true`; replacing them with
 * photography means swapping the file and clearing that flag, nothing more.
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
        className={cn(
          "relative overflow-hidden border border-hairline bg-canvas-deep",
          aspect,
        )}
        data-placeholder={slot.placeholder ? "true" : undefined}
      >
        <Image
          src={slot.src}
          alt={slot.alt}
          width={slot.width}
          height={slot.height}
          sizes={sizes}
          priority={priority}
          unoptimized={isVector}
          className={cn("text-[0]", aspect ? "size-full object-cover" : "h-auto w-full")}
        />
      </div>

      {slot.caption && !hideCaption ? (
        <figcaption className="text-micro leading-relaxed text-muted">{slot.caption}</figcaption>
      ) : null}
    </figure>
  );
}

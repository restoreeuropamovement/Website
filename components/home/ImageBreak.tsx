import Image from "next/image";
import type { ImageSlot } from "@/lib/content-types";

/**
 * A photograph across the full width, between two arguments.
 *
 * The homepage ran for several thousand pixels of near-black with small grey
 * text and one picture at the top, so the eye had nothing to rest against and
 * every section arrived looking like the one before it. These do no work
 * except that: they are decorative, they carry no caption, and the argument
 * reads the same with them removed.
 *
 * Short on purpose. A band this height punctuates a page; a taller one becomes
 * a section of its own and interrupts the argument rather than spacing it.
 */
export function ImageBreak({ slot }: { readonly slot: ImageSlot }) {
  return (
    <div className="relative border-t border-hairline">
      <Image
        src={slot.src}
        alt={slot.alt}
        width={slot.width}
        height={slot.height}
        sizes="100vw"
        loading="lazy"
        className="h-[min(34vh,22rem)] w-full object-cover"
      />

      {/*
        The page is near-black and the photographs are not all dark — the
        workshop in particular is a bright warm wall that jumped out of the
        palette and read as a stock image dropped into the page. Fading the
        edges into the ground seats the band in the page instead, and does it
        for whatever photograph is put here next rather than only for the ones
        chosen today.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-canvas via-transparent to-canvas opacity-70"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-canvas/20" />
    </div>
  );
}

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { RestoreEuropaMark } from "./RestoreEuropaMark";

interface WordmarkProps {
  readonly className?: string;
  /** `stacked` sets the formal name beneath the letters. */
  readonly variant?: "compact" | "stacked";
  readonly size?: "sm" | "md" | "lg";
  readonly preload?: boolean;
  /**
   * "Movement" in the reader's language. The name itself is never translated —
   * it is what the movement is called, not a phrase — but the word beneath it
   * is an ordinary noun and reads as a mistake left in English.
   */
  readonly descriptor?: string;
}

const markSize = {
  sm: "h-8",
  md: "h-10",
  lg: "h-[4.75rem]",
} as const;

const letterSize = {
  sm: "text-[1.0625rem]",
  md: "text-[1.25rem]",
  lg: "text-[1.875rem]",
} as const;

/**
 * The dominant brand is the words "Restore Europa". `stacked` adds "Movement"
 * beneath them in small capitals, so the two lines read as the full name without
 * either repeating the other; the masthead carries the first line alone.
 *
 * Tracking is near-normal rather than the wide letterspacing an acronym wants.
 * Opening up the gaps in a two-word phrase reads as a logo trying too hard, and
 * costs width the masthead does not have on a small screen.
 */
export function Wordmark({
  className,
  variant = "compact",
  size = "md",
  preload,
  descriptor = site.descriptor,
}: WordmarkProps) {
  if (variant === "stacked") {
    return (
      <span className={cn("inline-flex flex-col items-start gap-2.5", className)}>
        <RestoreEuropaMark className={markSize[size]} preload={preload} />
        <span className="flex flex-col gap-1">
          <span
            className={cn(
              "font-serif font-semibold tracking-[0.015em] text-current",
              letterSize[size],
            )}
          >
            {site.short}
          </span>
          <span className="eyebrow text-[0.625rem] text-current opacity-70">{descriptor}</span>
        </span>
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <RestoreEuropaMark className={markSize[size]} preload={preload} />
      <span
        className={cn("font-serif font-semibold tracking-[0.015em] text-current", letterSize[size])}
      >
        {site.short}
      </span>
    </span>
  );
}

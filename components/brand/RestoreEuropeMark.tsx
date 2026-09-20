import { cn } from "@/lib/utils";

interface RestoreEuropeMarkProps {
  readonly className?: string;
  /** Provide a title only when the mark stands alone as the accessible label. */
  readonly title?: string;
}

/**
 * The movement's mark: a Romanesque arch on a plinth — a civic portal.
 * Geometric, monochrome, and legible down to 16px. Inherits `currentColor`.
 */
export function RestoreEuropeMark({ className, title }: RestoreEuropeMarkProps) {
  return (
    <svg
      viewBox="0 0 40 48"
      fill="currentColor"
      className={cn("h-auto", className)}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 42V22a16 16 0 0 1 32 0v20h-6V22a10 10 0 0 0-20 0v20Z" />
      <path d="M1 44.4h38V47H1Z" />
    </svg>
  );
}

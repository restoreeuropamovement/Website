import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EditorialQuoteProps {
  readonly children: ReactNode;
  readonly attribution?: string;
  readonly className?: string;
  readonly tone?: "default" | "inverse";
  /**
   * `display` is the largest setting, for the axioms that carry a section.
   * `pull` is the lighter treatment used inside running prose.
   */
  readonly variant?: "display" | "pull";
  readonly align?: "start" | "center";
}

export function EditorialQuote({
  children,
  attribution,
  className,
  tone = "default",
  variant = "display",
  align = "start",
}: EditorialQuoteProps) {
  const inverse = tone === "inverse";

  return (
    <figure
      className={cn(
        variant === "display"
          ? align === "center"
            ? "border-t border-b py-10 sm:py-14"
            : "border-l-2 pl-6 sm:pl-10"
          : "border-l pl-5",
        inverse
          ? variant === "display"
            ? "border-gold-soft/45"
            : "border-rule-inverse"
          : variant === "display"
            ? "border-gold/65"
            : "border-rule",
        align === "center" && "text-center",
        className,
      )}
    >
      <blockquote
        className={cn(
          "font-serif font-normal text-balance",
          variant === "display"
            ? "text-display-3 sm:text-display-2"
            : "text-display-4 leading-[1.35]",
          inverse ? "text-canvas" : "text-ink",
        )}
      >
        {children}
      </blockquote>

      {attribution ? (
        <figcaption
          className={cn(
            "eyebrow mt-6",
            inverse ? "text-canvas/55" : "text-muted",
          )}
        >
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}

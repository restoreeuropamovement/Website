import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small tracked label above the title, e.g. "Section 03". */
  readonly eyebrow?: string;
  readonly title: ReactNode;
  /** A short paragraph beneath the rule. */
  readonly lede?: ReactNode;
  readonly id?: string;
  readonly className?: string;
  readonly tone?: "default" | "inverse";
  readonly size?: "md" | "lg" | "xl";
  readonly align?: "start" | "center";
  readonly as?: "h1" | "h2" | "h3";
}

const titleSizes = {
  md: "text-display-4 sm:text-display-3",
  lg: "text-display-3 sm:text-display-2",
  xl: "text-display-2 sm:text-display-1",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  lede,
  id,
  className,
  tone = "default",
  size = "lg",
  align = "start",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const inverse = tone === "inverse";

  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-5 flex items-center gap-3",
            inverse ? "text-gold-soft" : "text-burgundy",
          )}
        >
          <span aria-hidden="true" className={cn("h-px w-6", inverse ? "bg-gold-soft/50" : "bg-burgundy/40")} />
          {eyebrow}
        </p>
      ) : null}

      <Tag
        id={id}
        className={cn(
          "font-serif font-normal",
          titleSizes[size],
          inverse ? "text-canvas" : "text-ink",
        )}
      >
        {title}
      </Tag>

      {lede ? (
        <div
          className={cn(
            "mt-6 max-w-(--container-reading) text-lede",
            align === "center" && "mx-auto",
            inverse ? "text-canvas/72" : "text-muted",
          )}
        >
          {lede}
        </div>
      ) : null}
    </div>
  );
}

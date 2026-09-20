import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  readonly children: ReactNode;
  readonly id?: string;
  readonly className?: string;
  readonly tone?: "canvas" | "surface" | "deep" | "ink";
  /** Vertical rhythm. `lg` is reserved for the major editorial statements. */
  readonly spacing?: "sm" | "md" | "lg";
  readonly bordered?: boolean;
  readonly labelledBy?: string;
}

const tones = {
  canvas: "bg-canvas text-body",
  surface: "bg-surface text-body",
  deep: "bg-canvas-deep text-body",
  ink: "on-ink bg-ink text-canvas/80",
} as const;

const spacings = {
  sm: "py-16 sm:py-20 lg:py-24",
  md: "py-20 sm:py-28 lg:py-36",
  lg: "py-24 sm:py-36 lg:py-48",
} as const;

export function Section({
  children,
  id,
  className,
  tone = "canvas",
  spacing = "md",
  bordered = false,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        tones[tone],
        spacings[spacing],
        bordered && (tone === "ink" ? "border-t border-hairline-inverse" : "border-t border-hairline"),
        className,
      )}
    >
      {children}
    </section>
  );
}

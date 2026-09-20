import { cn } from "@/lib/utils";

interface DividerProps {
  readonly className?: string;
  /**
   * `faded` dissolves at both ends, `rule` is a plain hairline, `mark` centres a
   * small gold lozenge on the rule.
   */
  readonly variant?: "faded" | "rule" | "mark";
  readonly tone?: "default" | "inverse";
}

export function Divider({ className, variant = "faded", tone = "default" }: DividerProps) {
  if (variant === "mark") {
    return (
      <div className={cn("flex items-center gap-4", className)} aria-hidden="true">
        <span
          className={cn(
            "h-px flex-1",
            tone === "inverse" ? "rule-faded-inverse" : "rule-faded",
          )}
        />
        <span className="size-1.5 rotate-45 bg-gold" />
        <span
          className={cn(
            "h-px flex-1",
            tone === "inverse" ? "rule-faded-inverse" : "rule-faded",
          )}
        />
      </div>
    );
  }

  return (
    <hr
      className={cn(
        "border-0",
        variant === "faded"
          ? tone === "inverse"
            ? "rule-faded-inverse"
            : "rule-faded"
          : cn("h-px", tone === "inverse" ? "bg-hairline-inverse" : "bg-hairline"),
        className,
      )}
    />
  );
}

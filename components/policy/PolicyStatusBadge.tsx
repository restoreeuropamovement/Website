import type { PolicyStatus } from "@/lib/content-types";
import { cn } from "@/lib/utils";

interface PolicyStatusBadgeProps {
  readonly status: PolicyStatus;
  readonly secondaryStatus?: PolicyStatus;
  readonly className?: string;
}

/**
 * How settled a position is, shown wherever an entry appears. `Open` is drawn
 * with a dashed rule for the same reason the vacant leadership slots are: the
 * absence is the point, and it should read as an absence.
 */
const tones: Record<PolicyStatus, string> = {
  "Manifesto Core": "border-gold/60 text-gold",
  "Agreed Policy": "border-burgundy/55 text-burgundy",
  Derived: "border-rule text-muted",
  Open: "border-dashed border-rule text-faint",
};

export function PolicyStatusBadge({ status, secondaryStatus, className }: PolicyStatusBadgeProps) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex w-fit items-center border px-2.5 py-1",
        tones[status],
        className,
      )}
    >
      {secondaryStatus ? `${status} / ${secondaryStatus}` : status}
    </span>
  );
}

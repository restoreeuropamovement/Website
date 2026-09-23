import type { PolicyStatusId } from "@/content/policy";
import { cn } from "@/lib/utils";

interface PolicyStatusBadgeProps {
  readonly status: PolicyStatusId;
  /** Already formatted, including the "/" where an entry carries two. */
  readonly label: string;
  readonly className?: string;
}

/**
 * How settled a position is, shown wherever an entry appears. `Open` is drawn
 * with a dashed rule for the same reason the vacant leadership slots are: the
 * absence is the point, and it should read as an absence.
 *
 * Keyed by id. The tones used to be looked up by the English label, which
 * would have left every badge unstyled on five of the six pages.
 */
const tones: Record<PolicyStatusId, string> = {
  "manifesto-core": "border-gold/60 text-gold",
  agreed: "border-burgundy/55 text-burgundy",
  derived: "border-rule text-muted",
  open: "border-dashed border-rule text-faint",
};

export function PolicyStatusBadge({ status, label, className }: PolicyStatusBadgeProps) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex w-fit items-center border px-2.5 py-1",
        tones[status],
        className,
      )}
    >
      {label}
    </span>
  );
}

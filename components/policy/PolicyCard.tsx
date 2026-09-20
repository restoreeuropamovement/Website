import Link from "next/link";
import type { PolicyEntry } from "@/lib/content-types";
import { getPolicyCategory } from "@/lib/policy";
import { cn } from "@/lib/utils";
import { PolicyStatusBadge } from "./PolicyStatusBadge";

interface PolicyCardProps {
  readonly entry: PolicyEntry;
  readonly className?: string;
}

/**
 * A listing row. Title, status and the short answer, so the catalogue can be
 * scanned and a position understood without opening the full entry.
 */
export function PolicyCard({ entry, className }: PolicyCardProps) {
  const category = getPolicyCategory(entry.category);

  return (
    <article className={cn("group flex flex-col gap-3", className)}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <PolicyStatusBadge status={entry.status} secondaryStatus={entry.secondaryStatus} />
        {category ? <span className="eyebrow text-faint">{category.title}</span> : null}
      </div>

      <h3 className="font-serif text-display-4 font-normal text-ink">
        <Link href={`/policy/${entry.slug}`} className="transition-colors group-hover:text-burgundy">
          {entry.title}
        </Link>
      </h3>

      <p className="text-[0.9375rem] leading-relaxed text-muted">{entry.shortAnswer}</p>
    </article>
  );
}

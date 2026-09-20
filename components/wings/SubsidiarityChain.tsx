import { wingLayers } from "@/content/wings";
import { cn } from "@/lib/utils";

interface SubsidiarityChainProps {
  /** Names the national level, e.g. "National wing — Poland". */
  readonly country: string;
  readonly className?: string;
}

/**
 * Where a national wing sits: smallest level first, each one holding only what
 * the level below it cannot. The same order the manifesto argues for in
 * section XV.
 */
export function SubsidiarityChain({ country, className }: SubsidiarityChainProps) {
  return (
    <figure className={cn("flex flex-col", className)}>
      <figcaption className="eyebrow mb-6 text-muted">Where the wing sits</figcaption>

      <ol className="flex flex-col border border-hairline">
        {wingLayers.map((layer, index) => {
          const isNational = layer.label === "National wing";
          return (
            <li
              key={layer.label}
              className={cn(
                "flex flex-col gap-1.5 border-t border-hairline p-5 first:border-t-0",
                isNational ? "border-l-2 border-l-burgundy bg-canvas-deep" : "bg-surface",
              )}
            >
              <span className="flex items-baseline gap-3">
                <span
                  className={cn(
                    "numerals-tabular text-[0.6875rem] tracking-[0.1em]",
                    isNational ? "text-burgundy" : "text-faint",
                  )}
                >
                  {index + 1}
                </span>
                <span
                  className={cn(
                    "font-serif text-[1.125rem]",
                    isNational ? "text-ink" : "text-muted",
                  )}
                >
                  {isNational ? `${layer.label} — ${country}` : layer.label}
                </span>
              </span>
              <span className="pl-[1.6rem] text-[0.875rem] leading-relaxed text-muted">
                {layer.note}
              </span>
            </li>
          );
        })}
      </ol>

      <p className="mt-4 text-micro leading-relaxed text-faint">
        Read upward: a level takes on only what the one beneath it cannot competently hold.
      </p>
    </figure>
  );
}

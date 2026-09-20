import { Info } from "lucide-react";

/**
 * Stated on every form. The site has no backend, and pretending otherwise would
 * be a poor way to begin a relationship with a supporter.
 */
export function FormNotice({ children }: { readonly children?: React.ReactNode }) {
  return (
    <div className="flex gap-3 border border-rule bg-canvas-deep p-5">
      <Info className="mt-0.5 size-4 shrink-0 text-burgundy" strokeWidth={1.75} aria-hidden="true" />
      <div className="flex flex-col gap-1.5 text-[0.875rem] leading-relaxed text-muted">
        <p className="font-medium text-ink">This form is not yet connected.</p>
        <p>
          {children ??
            "The movement is in formation and no submission system has been established. The form below validates your entries in your browser; nothing is transmitted, stored or received by anyone."}
        </p>
      </div>
    </div>
  );
}

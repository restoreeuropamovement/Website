import { languages } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Only the English text exists. Nothing here pretends otherwise: the other
 * languages are listed as forthcoming and are not selectable, because inventing
 * a translation of a political document would be worse than having none.
 */
export function LanguageSelector({ className }: { readonly className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h2 className="eyebrow text-muted" id="language-label">
        Language
      </h2>
      <ul className="flex flex-wrap items-center gap-1" aria-labelledby="language-label">
        {languages.map((language) => (
          <li key={language.code}>
            {language.available ? (
              <span
                aria-current="true"
                className="inline-flex h-8 items-center border border-ink bg-ink px-2.5 text-[0.6875rem] font-medium tracking-[0.1em] text-canvas"
              >
                {language.code}
              </span>
            ) : (
              <span
                title={`${language.endonym} translation is not yet available`}
                className="inline-flex h-8 cursor-not-allowed items-center border border-hairline px-2.5 text-[0.6875rem] font-medium tracking-[0.1em] text-faint"
              >
                {language.code}
                <span className="sr-only"> — {language.endonym}, not yet available</span>
              </span>
            )}
          </li>
        ))}
      </ul>
      <p className="text-micro text-faint">
        Translations are in preparation. Only the English text is authoritative.
      </p>
    </div>
  );
}

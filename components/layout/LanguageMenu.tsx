"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Globe } from "lucide-react";
import { languages, localePath, localeTag, stripLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * The masthead language switcher.
 *
 * A native `<details>` rather than a scripted dropdown: it opens without
 * JavaScript, is keyboard-operable for free, and closes on navigation because
 * the page changes. The masthead has no room for six language names, so the
 * trigger shows the current code and the panel spells them out.
 *
 * Targets are the *current* page in the other language — someone halfway
 * through the policy catalogue who switches to Polish wants that position in
 * Polish, not the home page.
 */
export function LanguageMenu({
  current,
  label,
  className,
}: {
  readonly current: Locale;
  readonly label: string;
  readonly className?: string;
}) {
  const pathname = usePathname();
  const basePath = stripLocale(pathname);

  return (
    <details className={cn("group relative", className)}>
      <summary
        aria-label={label}
        className="inline-flex h-9 cursor-pointer list-none items-center gap-1.5 px-2 text-[0.8125rem] text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy [&::-webkit-details-marker]:hidden"
      >
        <Globe className="size-4" strokeWidth={1.5} aria-hidden="true" />
        <span className="uppercase">{current}</span>
      </summary>

      <div className="absolute right-0 z-50 mt-1 min-w-44 border border-rule bg-canvas shadow-lg">
        <p className="eyebrow border-b border-hairline px-4 py-2.5 text-faint">{label}</p>
        <ul className="flex flex-col py-1">
          {languages.map((language) => {
            const isCurrent = language.code === current;
            return (
              <li key={language.code}>
                <Link
                  href={localePath(language.code, basePath)}
                  hrefLang={localeTag(language.code)}
                  aria-current={isCurrent ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-between gap-3 px-4 py-2 text-[0.875rem] transition-colors hover:bg-canvas-deep",
                    isCurrent ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {language.endonym}
                  {isCurrent ? (
                    <Check className="size-3.5 text-burgundy" strokeWidth={2} aria-hidden="true" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
}

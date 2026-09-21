"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages, localePath, localeTag, stripLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Switches language without losing the reader's place.
 *
 * The link target is the *current* page in the other language, not the home
 * page: someone halfway through the policy catalogue who wants it in Polish
 * wants that position in Polish. `stripLocale` recovers the English path from
 * whatever prefix is in the URL, and `localePath` re-prefixes it.
 *
 * Every language is always selectable, because every page exists in all six.
 */
export function LanguageSwitcher({
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
    <div className={cn("flex flex-col gap-3", className)}>
      <h2 className="eyebrow text-canvas/58" id="language-label">
        {label}
      </h2>
      <ul className="flex flex-wrap items-center gap-1.5" aria-labelledby="language-label">
        {languages.map((language) => {
          const isCurrent = language.code === current;
          return (
            <li key={language.code}>
              {isCurrent ? (
                <span
                  aria-current="true"
                  className="inline-flex h-8 items-center border border-gold-soft bg-gold-soft/10 px-2.5 text-[0.75rem] text-gold-soft"
                >
                  {language.endonym}
                </span>
              ) : (
                <Link
                  href={localePath(language.code, basePath)}
                  hrefLang={localeTag(language.code)}
                  className="inline-flex h-8 items-center border border-hairline-inverse px-2.5 text-[0.75rem] text-canvas/62 transition-colors hover:border-gold-soft hover:text-gold-soft"
                >
                  {language.endonym}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

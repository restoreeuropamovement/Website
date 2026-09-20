"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";
import { ctaNav, primaryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * The masthead. It blends into the page at the top and settles onto a solid warm
 * ground with a hairline once the reader has moved.
 */
export function Navbar() {
  const pathname = usePathname();
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const onScroll = () => setSettled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-(--ease-editorial)",
        settled
          ? "border-b border-hairline bg-canvas/92 backdrop-blur-[6px]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="shrink-0 text-ink transition-opacity hover:opacity-70">
          <Wordmark />
          {/* Part of the link text rather than an aria-label, so the accessible
              name still contains the visible wordmark. */}
          <span className="sr-only">— home</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative inline-flex h-9 items-center px-3 text-[0.875rem] font-medium transition-colors xl:px-3.5",
                      active ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    {active ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 bottom-0.5 h-px bg-burgundy xl:inset-x-3.5"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Wrapped rather than given `hidden` directly: the button's own
              `inline-flex` would win against it. */}
          <div className="hidden lg:block">
            <Button href={ctaNav.href} size="sm">
              {ctaNav.label}
            </Button>
          </div>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}

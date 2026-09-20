"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";
import { ctaNav, primaryNav, site } from "@/lib/site";
import { pad } from "@/lib/utils";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Fullscreen navigation for small screens: an index page rather than a dropdown.
 * Each entry keeps its number, title and one line of explanation, so the menu
 * reads like the contents of a document.
 */
export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Lock the page behind the panel without shifting it sideways.
  useEffect(() => {
    if (!open) return;
    const { body, documentElement } = document;
    const gutter = window.innerWidth - documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (gutter > 0) body.style.paddingRight = `${gutter}px`;
    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open]);

  // Escape closes; Tab stays inside the panel.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="-mr-2 inline-flex h-11 items-center gap-2.5 px-2 text-ink transition-opacity hover:opacity-70 lg:hidden"
      >
        <span className="eyebrow">Menu</span>
        <Menu className="size-5" strokeWidth={1.5} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-100 flex flex-col overflow-y-auto bg-canvas lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="flex h-18 shrink-0 items-center justify-between border-b border-hairline px-6 sm:px-8">
              <Link href="/" onClick={close} className="text-ink">
                <Wordmark />
                <span className="sr-only">— home</span>
              </Link>
              <button
                type="button"
                onClick={close}
                className="-mr-2 inline-flex h-11 items-center gap-2.5 px-2 text-ink transition-opacity hover:opacity-70"
              >
                <span className="eyebrow">Close</span>
                <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Primary" className="flex-1 px-6 py-6 sm:px-8">
              <ul className="flex flex-col">
                {primaryNav.map((item, index) => {
                  const active =
                    pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: reduceMotion ? 0 : 0.05 + index * 0.045,
                        ease: [0.22, 0.61, 0.36, 1],
                      }}
                      className="border-b border-hairline last:border-b-0"
                    >
                      <Link
                        href={item.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-2 py-5"
                      >
                        <span className="numerals-tabular eyebrow text-burgundy/70">
                          {pad(index + 1)}
                        </span>
                        <span className="flex flex-col gap-1.5">
                          <span className="font-serif text-display-3 leading-none text-ink transition-colors group-hover:text-burgundy">
                            {item.label}
                          </span>
                          <span className="text-[0.875rem] leading-relaxed text-muted">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="shrink-0 border-t border-hairline px-6 pt-6 pb-10 sm:px-8">
              <Button href={ctaNav.href} size="lg" className="w-full" onClick={close}>
                {ctaNav.label}
              </Button>
              <p className="mt-6 font-serif text-[1.0625rem] leading-snug text-muted text-balance">
                {site.tagline}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Client-side only because it needs the current pathname to mark the active
 * section — the one genuine piece of interactivity in the admin chrome.
 */
const SECTIONS = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/journal", label: "Journal" },
  { href: "/admin/members", label: "Members" },
  { href: "/admin/security", label: "Security" },
] as const;

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Administration">
      <ul className="flex items-center gap-6">
        {SECTIONS.map((section) => {
          const active =
            section.href === "/admin" ? pathname === "/admin" : pathname.startsWith(section.href);

          return (
            <li key={section.href}>
              <Link
                href={section.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[0.875rem] transition-colors",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {section.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

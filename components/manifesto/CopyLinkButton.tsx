"use client";

import { Check, Link2 } from "lucide-react";
import { useEffect, useState } from "react";

interface CopyLinkButtonProps {
  /** Fragment identifier of the section, without the hash. */
  readonly anchor: string;
  readonly label: string;
  /** Shown beside the tick, and announced, in the language being read. */
  readonly copied: string;
  readonly copiedAnnouncement: string;
}

/** Copies a permanent link to one section. Falls back to the plain anchor. */
export function CopyLinkButton({
  anchor,
  label,
  copied: copiedLabel,
  copiedAnnouncement,
}: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const onClick = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${anchor}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Clipboard access can be refused; leaving the address bar to do the work
      // is a perfectly good outcome.
      window.location.hash = anchor;
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-faint transition-colors hover:text-burgundy"
      aria-label={label}
    >
      {copied ? (
        <>
          <Check className="size-3.5" strokeWidth={2} aria-hidden="true" />
          <span className="eyebrow">{copiedLabel}</span>
        </>
      ) : (
        <Link2 className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
      )}
      <span aria-live="polite" className="sr-only">
        {copied ? copiedAnnouncement : ""}
      </span>
    </button>
  );
}

/** Keyboard users land here first and can jump past the masthead. */
export function SkipLink({ label }: { readonly label: string }) {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:inline-flex focus:h-11 focus:items-center focus:rounded-xs focus:bg-ink focus:px-5 focus:text-[0.875rem] focus:font-medium focus:text-canvas"
    >
      {label}
    </a>
  );
}

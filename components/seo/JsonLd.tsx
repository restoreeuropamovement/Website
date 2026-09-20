/**
 * Structured data.
 *
 * Only facts that actually exist are described: the site, its name, its
 * description and its essays. No address, founding date, membership figure,
 * registration or contact point is asserted, because none has been established.
 */
export function JsonLd({ data }: { readonly data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // The value is a literal built in this codebase, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

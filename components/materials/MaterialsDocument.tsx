import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { MaterialsCatalogue } from "@/components/materials/MaterialsCatalogue";
import { Container } from "@/components/ui/Container";
import type { MaterialsEdition } from "@/content/materials";
import { localePath } from "@/lib/i18n";
import type { MaterialSelection } from "@/lib/material-catalogue";
import type { Material } from "@/lib/materials";
import { routes } from "@/lib/site";

/**
 * `/materials`, in one language.
 *
 * Three things are worth knowing before changing it.
 *
 * **This half stays on the server, and it is the half that reads the
 * database.** It renders the page's chrome and the two states in which there is
 * nothing to browse, and hands the rows to `MaterialsCatalogue` for the state
 * in which there is. The filter and the order are interaction and live in that
 * client component; fetching is not, and does not follow it across the
 * boundary.
 *
 * **The distinction between the two empty states is load-bearing.** `null` is
 * "this copy of the site cannot see the catalogue" and an empty list is "nobody
 * has published anything yet". Collapsing them would print a confident
 * falsehood about the movement's own output on a deployment whose only fault is
 * a missing `DATABASE_URL`. Neither state renders a control, because a filter
 * over nothing is furniture.
 *
 * **The items now carry thumbnails**, fetched from the Vercel Blob store that
 * serves the files. That is a deliberate widening of the site's content
 * security policy, argued in `next.config.ts` where the policy is written: the
 * README's old claim that nothing is fetched from another host was worth more
 * than a preview grid right up until there was something to preview, and a
 * catalogue of artwork that shows none of the artwork is a list of filenames
 * wearing a page's clothes.
 */
export function MaterialsDocument({
  edition,
  materials,
  selection,
}: {
  readonly edition: MaterialsEdition;
  /** `null` means the catalogue could not be read at all, which is not "empty". */
  readonly materials: readonly Material[] | null;
  readonly selection: MaterialSelection;
}) {
  const { locale, meta } = edition;

  return (
    <>
      <PageHeader kicker={meta.eyebrow} title={meta.title} lede={meta.lede} />

      <Container className="py-12 lg:py-16">
        <UsageNote edition={edition} />

        {materials === null ? (
          <Notice title={edition.unavailable.title} body={edition.unavailable.body} />
        ) : materials.length === 0 ? (
          <Notice title={edition.empty.title} body={edition.empty.body} />
        ) : (
          <MaterialsCatalogue edition={edition} materials={materials} selection={selection} />
        )}

        <p className="mt-16 border-t border-hairline pt-6 text-[0.9375rem]">
          <Link
            href={localePath(locale, routes.imprint)}
            className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
          >
            {edition.usage.imprintLink}
          </Link>
        </p>
      </Container>
    </>
  );
}

/**
 * The one paragraph on the page that is not a description of a file.
 *
 * It states what the files carry and that no terms of use exist, and it stops
 * there. It does not say what may or may not be done with them, because
 * nobody has decided that: the movement is not registered, there is no
 * published licence and no code of conduct, and a page that invented one would
 * be asserting policy on behalf of people who never agreed to it. Saying
 * plainly that the rules are not written is more use to somebody about to
 * print two hundred of something than a plausible rule would be.
 */
function UsageNote({ edition }: { readonly edition: MaterialsEdition }) {
  return (
    <div className="max-w-(--container-reading) border-l-2 border-gold/60 py-1 pl-5">
      <h2 className="eyebrow mb-2 text-muted">{edition.usage.title}</h2>
      <p className="text-reading leading-relaxed text-body/92">{edition.usage.body}</p>
    </div>
  );
}

function Notice({ title, body }: { readonly title: string; readonly body: string }) {
  return (
    <div className="mt-14 border-t border-hairline pt-10">
      <h2 className="font-serif text-display-3 font-normal text-ink text-balance">{title}</h2>
      <p className="mt-4 max-w-2xl text-reading text-body/92">{body}</p>
    </div>
  );
}

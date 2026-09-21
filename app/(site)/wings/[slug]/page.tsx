import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { SubsidiarityChain } from "@/components/wings/SubsidiarityChain";
import { WingList } from "@/components/wings/WingList";
import { Container } from "@/components/ui/Container";
import {
  getWing,
  getWingsByRegion,
  wingBody,
  wingLead,
  wingRemit,
  wings,
} from "@/content/wings";

export function generateStaticParams() {
  return wings.map((wing) => ({ slug: wing.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const wing = getWing(slug);
  if (!wing) return { title: "Wing not found" };

  return {
    title: `${wing.country} — National Wing`,
    description: `The Restore Europe wing in ${wing.country}: the national level of the movement, what it is answerable for, and how to help establish it.`,
    alternates: { canonical: `/wings/${wing.slug}` },
    openGraph: {
      title: `Restore Europe ${wing.country} — National Wing`,
      description: `The national level of Restore Europe in ${wing.country}.`,
      url: `/wings/${wing.slug}`,
      type: "website",
    },
  };
}

export default async function WingPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const wing = getWing(slug);
  if (!wing) notFound();

  const neighbours = getWingsByRegion(wing.region).filter((item) => item.slug !== wing.slug);

  return (
    <>
      <header className="border-b border-hairline">
        <Container className="pt-10 pb-8 lg:pt-12 lg:pb-10">
          <Link
            href="/wings"
            className="text-[0.875rem] text-muted hover:text-burgundy"
          >
            National wings
          </Link>

          <p className="mt-4 font-serif text-[0.9375rem] text-muted">National wing</p>

          <h1 className="mt-2 font-serif text-display-2 font-normal text-ink">{wing.country}</h1>

          {wing.endonyms.length > 0 ? (
            <p className="mt-4 font-serif text-display-4 leading-snug text-muted">
              {wing.endonyms.map((endonym, index) => (
                <span key={endonym.lang}>
                  {index > 0 ? <span aria-hidden="true"> · </span> : null}
                  <span lang={endonym.lang}>{endonym.name}</span>
                </span>
              ))}
            </p>
          ) : null}

          <p className="mt-8 border-t border-hairline pt-5 text-[0.9375rem] text-muted">
            {wing.region}
          </p>
        </Container>
      </header>

      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
          <ContentBlocks
            blocks={[{ type: "lead", text: wingLead(wing.country) }, ...wingBody]}
            className="max-w-(--container-reading)"
          />

          <SubsidiarityChain country={wing.country} />
        </div>

        <section aria-labelledby="remit-heading" className="mt-14 border-t border-hairline pt-10">
          <h2
            id="remit-heading"
            className="mb-4 font-serif text-display-3 font-normal text-ink"
          >
            What the wing is answerable for
          </h2>
          <p className="mb-8 max-w-(--container-reading) text-reading text-body/92">
            The same six responsibilities in every nation. How they are discharged is for the
            members in {wing.country} to decide.
          </p>

          <dl className="flex flex-col border-t border-hairline">
            {wingRemit.map((item) => (
              <div
                key={item.term}
                className="grid gap-2 border-b border-hairline py-5 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-8"
              >
                <dt className="font-serif text-[1.125rem] text-ink">{item.term}</dt>
                <dd className="text-[0.9375rem] leading-relaxed text-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-labelledby="take-part-heading"
          className="mt-14 border-t border-hairline pt-10"
        >
          <h2
            id="take-part-heading"
            className="font-serif text-display-3 font-normal text-ink text-balance"
          >
            Help establish the wing in {wing.country}.
          </h2>
          <p className="mt-4 max-w-2xl text-reading text-body/92">
            A national wing is built by the people who live under the conditions it exists to
            change. Tell us what you are able to do — organising, writing, professional expertise,
            or simply being counted.
          </p>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
            <Link
              href={`/join?country=${encodeURIComponent(wing.country)}&role=volunteer`}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              Get involved
            </Link>
            <span className="text-faint" aria-hidden="true">
              ·
            </span>
            <Link
              href="/contact#chapters"
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              Contact
            </Link>
          </p>
        </section>

        {neighbours.length > 0 ? (
          <section aria-labelledby="neighbours-heading" className="mt-14 border-t border-hairline pt-10">
            <h2 id="neighbours-heading" className="mb-6 font-serif text-[0.9375rem] text-muted">
              Other wings in {wing.region}
            </h2>
            <WingList wings={neighbours} density="compact" />
          </section>
        ) : null}
      </Container>
    </>
  );
}

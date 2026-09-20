import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { SubsidiarityChain } from "@/components/wings/SubsidiarityChain";
import { WingList } from "@/components/wings/WingList";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
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
      <header className="border-b border-hairline bg-canvas-deep pt-10 pb-14 lg:pt-14 lg:pb-20">
        <Container>
          <Link
            href="/wings"
            className="group inline-flex items-center gap-2 text-[0.875rem] text-muted transition-colors hover:text-burgundy"
          >
            <ArrowLeft
              className="size-3.5 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            National wings
          </Link>

          <p className="eyebrow mt-10 mb-5 text-burgundy">National Wing</p>

          <h1 className="font-serif text-display-1 font-normal text-ink">{wing.country}</h1>

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
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <ContentBlocks
              blocks={[{ type: "lead", text: wingLead(wing.country) }, ...wingBody]}
              className="max-w-(--container-reading)"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <SubsidiarityChain country={wing.country} />
          </Reveal>
        </div>

        <Reveal className="mt-20 lg:mt-28">
          <section aria-labelledby="remit-heading" className="border-t border-hairline pt-12">
            <h2
              id="remit-heading"
              className="mb-4 font-serif text-display-3 font-normal text-ink"
            >
              What the wing is answerable for
            </h2>
            <p className="mb-10 max-w-(--container-reading) text-reading text-body/92">
              The same six responsibilities in every nation. How they are discharged is for the
              members in {wing.country} to decide.
            </p>

            <dl className="grid gap-px border border-hairline bg-hairline md:grid-cols-2">
              {wingRemit.map((item) => (
                <div key={item.term} className="flex flex-col gap-2.5 bg-canvas p-7 lg:p-8">
                  <dt className="font-serif text-[1.25rem] text-ink">{item.term}</dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-muted">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>

        <Reveal className="mt-20 lg:mt-28">
          <section
            aria-labelledby="take-part-heading"
            className="border-t border-hairline pt-12"
          >
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2
                  id="take-part-heading"
                  className="font-serif text-display-3 font-normal text-ink text-balance"
                >
                  Help establish the wing in {wing.country}.
                </h2>
                <p className="mt-5 text-reading text-body/92">
                  A national wing is built by the people who live under the conditions it exists to
                  change. Tell us what you are able to do — organising, writing, professional
                  expertise, or simply being counted.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  href={`/join?country=${encodeURIComponent(wing.country)}&role=organizer`}
                  size="lg"
                >
                  Get Involved
                </Button>
                <Button href="/contact#chapters" size="lg" variant="secondary">
                  Contact
                </Button>
              </div>
            </div>
          </section>
        </Reveal>

        {neighbours.length > 0 ? (
          <Reveal className="mt-20 lg:mt-28">
            <section aria-labelledby="neighbours-heading" className="border-t border-hairline pt-12">
              <h2 id="neighbours-heading" className="eyebrow mb-8 text-muted">
                Other wings in {wing.region}
              </h2>
              <WingList wings={neighbours} density="compact" />
            </section>
          </Reveal>
        ) : null}
      </Container>
    </>
  );
}

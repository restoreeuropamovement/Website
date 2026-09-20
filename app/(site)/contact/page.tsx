import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { contactChannels, contactMeta } from "@/content/involvement";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "How to reach Restore Europe Movement: general enquiries, press, research, organisation and local chapters.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Container>
          <p className="eyebrow mb-6 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            {contactMeta.eyebrow}
          </p>
          <h1 className="font-serif text-display-1 font-normal text-ink">{contactMeta.title}</h1>
          <p className="mt-8 max-w-(--container-reading) text-lede text-muted">{contactMeta.lede}</p>
        </Container>
      </header>

      <Container className="py-14 lg:py-20">
        <section aria-labelledby="channels-heading">
          <h2 id="channels-heading" className="eyebrow mb-8 text-muted">
            Channels
          </h2>
          <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {contactChannels.map((channel) => (
              <li
                key={channel.id}
                id={channel.id}
                className="flex scroll-mt-32 flex-col gap-3 bg-canvas p-7 lg:p-8"
              >
                <h3 className="font-serif text-display-4 font-normal text-ink">{channel.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-muted">{channel.description}</p>
                <p className="mt-auto pt-4">
                  <span className="block border border-dashed border-rule px-3 py-2 font-mono text-[0.8125rem] text-faint">
                    {channel.handle}
                  </span>
                  <span className="eyebrow mt-2 block text-faint">{channel.response}</span>
                </p>
              </li>
            ))}
            {/* Five channels leave one cell short of a full row at two and three
                columns; this keeps the grid's hairline ground from showing. */}
            <li aria-hidden="true" className="hidden bg-canvas sm:block" />
          </ul>
          <p className="mt-6 max-w-(--container-reading) text-[0.9375rem] leading-relaxed text-muted">
            No postal address, telephone number or email address is published above, because none
            has been established. We would rather print nothing than print something that does not
            work.
          </p>
        </section>

        <section aria-labelledby="write-heading" className="mt-20 lg:mt-28">
          <h2 id="write-heading" className="mb-8 font-serif text-display-3 font-normal text-ink">
            Write to us
          </h2>
          <div className="max-w-(--container-narrow)">
            <ContactForm />
          </div>
        </section>
      </Container>
    </>
  );
}

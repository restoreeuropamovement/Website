import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { shopSeller, type ShopEdition } from "@/content/shop";
import { fill } from "@/lib/format";
import { renderInline } from "@/lib/inline";

/** `/shop/terms`, in one language: the terms of sale, the withdrawal notice and the model form. */
export function TermsDocument({ edition }: { readonly edition: ShopEdition }) {
  const { locale, text } = edition;
  const words = text.terms;
  const seller = { seller: shopSeller.name, email: shopSeller.email, phone: shopSeller.phone };
  const render = (value: string) => renderInline(fill(value, seller), locale);

  return (
    <>
      <PageHeader kicker={words.kicker} title={words.title} lede={words.lede} size="narrow" />
      <Container size="narrow" className="flex flex-col gap-10 py-12">
        <p className="text-micro text-faint">{words.updated}</p>

        {words.sections.map((section) => (
          <section key={section.heading} className="flex flex-col gap-4">
            <h2 className="font-serif text-display-4 font-normal text-ink">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-2xl text-reading text-body/92">
                {render(paragraph)}
              </p>
            ))}
          </section>
        ))}

        <section className="flex flex-col gap-4 rounded-[10px] border border-hairline bg-surface/50 p-6 lg:p-8">
          <h2 className="font-serif text-display-4 font-normal text-ink">{words.form.heading}</h2>
          <p className="text-[0.9375rem] text-muted">{words.form.intro}</p>
          <div className="flex flex-col gap-3 border-t border-hairline pt-4">
            {words.form.lines.map((line) => (
              <p key={line} className="text-[0.9375rem] leading-relaxed text-body">
                {render(line)}
              </p>
            ))}
          </div>
          <p className="text-micro text-faint">{words.form.note}</p>
        </section>
      </Container>
    </>
  );
}

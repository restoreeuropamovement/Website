import { CreditCard, MousePointerClick, Send } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { ShopEdition } from "@/content/shop";

const STEP_ICONS = [MousePointerClick, CreditCard, Send] as const;

/** Three steps, settling into place one after another as they scroll into view. */
export function HowItWorks({ edition }: { readonly edition: ShopEdition }) {
  const { how } = edition.text;

  return (
    <section className="border-t border-hairline bg-canvas-deep">
      <Container className="py-16 lg:py-24">
        <Reveal>
          <h2 className="font-serif text-display-3 font-normal text-ink">{how.title}</h2>
        </Reveal>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {how.steps.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? Send;
            return (
              <li key={step.title}>
                <Reveal delay={0.08 + index * 0.12}>
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-full border border-rule bg-surface text-gold">
                      <Icon className="size-[1.125rem]" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span aria-hidden="true" className="numerals-tabular font-serif text-display-4 text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-display-4 font-normal text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-muted">{step.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

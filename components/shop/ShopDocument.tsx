import { PageHeader } from "@/components/layout/PageHeader";
import { StickerOrderForm, type DesignChoice } from "@/components/shop/StickerOrderForm";
import { Container } from "@/components/ui/Container";
import { isShopCountry, isShopQuantity, type ShopCountryId, type ShopEdition } from "@/content/shop";
import type { ShopMode } from "@/lib/shop/config";

/**
 * `/shop`, in one language.
 *
 * Server-rendered, and the order of the states below is the order of what can
 * be wrong: the shop is not open (said, with no form); the designs cannot be
 * read (said, rather than shown as an empty shop); there are none (said); or
 * there is something to buy. Test mode puts a banner over the last of these
 * and changes nothing else, so what is tested is what will be sold.
 */
export function ShopDocument({
  edition,
  mode,
  open,
  designs,
  countries,
  selection,
}: {
  readonly edition: ShopEdition;
  readonly mode: ShopMode;
  readonly open: boolean;
  /** `null` means the designs could not be read, which is not "none". */
  readonly designs: readonly DesignChoice[] | null;
  readonly countries: readonly ShopCountryId[];
  readonly selection: Record<string, string | string[] | undefined>;
}) {
  const { locale, text } = edition;

  return (
    <>
      <PageHeader kicker={text.meta.eyebrow} title={text.meta.title} lede={text.meta.lede} />

      <Container className="py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div>
            {mode === "test" ? (
              <div className="mb-10 border-l-2 border-burgundy py-1 pl-5" role="note">
                <h2 className="eyebrow mb-2 text-burgundy">{text.test.title}</h2>
                <p className="text-[0.9375rem] leading-relaxed text-muted">{text.test.body}</p>
              </div>
            ) : null}

            {!open ? (
              <Notice title={text.closed.title} body={text.closed.body} />
            ) : designs === null ? (
              <Notice title={text.unavailable.title} body={text.unavailable.body} />
            ) : designs.length === 0 ? (
              <Notice title={text.empty.title} body={text.empty.body} />
            ) : (
              <StickerOrderForm
                locale={locale}
                text={text}
                designs={designs}
                countries={countries}
                initial={initialSelection(selection, designs, countries)}
              />
            )}
          </div>

          <aside className="flex flex-col gap-3 lg:pt-1">
            <h2 className="eyebrow text-muted">{text.sticker.title}</h2>
            <ul className="flex flex-col gap-2 text-[0.9375rem] leading-relaxed text-body/92">
              {text.sticker.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </>
  );
}

/**
 * The form's starting values, from the query string when they are valid —
 * which is how "back" from the payment page returns a customer to the order
 * they had chosen rather than to an empty form.
 */
function initialSelection(
  query: Record<string, string | string[] | undefined>,
  designs: readonly DesignChoice[],
  countries: readonly ShopCountryId[],
): { design: string; quantity: number; country: string } {
  const one = (key: string) => {
    const value = query[key];
    return typeof value === "string" ? value : "";
  };

  const design = designs.some((choice) => choice.slug === one("design")) ? one("design") : designs[0]!.slug;
  const quantityValue = Number(one("quantity"));
  const quantity = isShopQuantity(quantityValue) ? quantityValue : 25;
  const countryValue = one("country").toUpperCase();
  const country = isShopCountry(countryValue) && countries.includes(countryValue) ? countryValue : "";

  return { design, quantity, country };
}

function Notice({ title, body }: { readonly title: string; readonly body: string }) {
  return (
    <div className="border-t border-hairline pt-10">
      <h2 className="font-serif text-display-3 font-normal text-balance text-ink">{title}</h2>
      <p className="mt-4 max-w-2xl text-reading text-body/92">{body}</p>
    </div>
  );
}

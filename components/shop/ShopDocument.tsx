import { HowItWorks } from "@/components/shop/HowItWorks";
import { ShopDetails } from "@/components/shop/ShopDetails";
import { ShopHero } from "@/components/shop/ShopHero";
import { StickerOrderForm, type DesignChoice } from "@/components/shop/StickerOrderForm";
import { Container } from "@/components/ui/Container";
import {
  isShopCountry,
  isShopQuantity,
  shopQuantities,
  type ShopCountryId,
  type ShopEdition,
} from "@/content/shop";
import type { ShopMode } from "@/lib/shop/config";
import { formatMoney } from "@/lib/shop/money";
import { priceBook, quote } from "@/lib/shop/price-book";

/**
 * `/shop`, in one language.
 *
 * The order of the states below is the order of what can be wrong: the shop
 * is not open (said, with no form); the designs cannot be read (said, rather
 * than shown as an empty shop); there are none (said); or there is something
 * to buy. Test mode puts a slim bar above the page and changes nothing else,
 * so what is tested is what will be sold.
 */
export function ShopDocument({
  edition,
  mode,
  open,
  designs,
  countries,
  selection,
  visitorCountry,
}: {
  readonly edition: ShopEdition;
  readonly mode: ShopMode;
  readonly open: boolean;
  /** `null` means the designs could not be read, which is not "none". */
  readonly designs: readonly DesignChoice[] | null;
  readonly countries: readonly ShopCountryId[];
  readonly selection: Record<string, string | string[] | undefined>;
  readonly visitorCountry: ShopCountryId | null;
}) {
  const { locale, text } = edition;
  const sellable = open && designs !== null && designs.length > 0;

  return (
    <>
      {mode === "test" ? (
        <div className="border-b border-burgundy/40 bg-burgundy/10" role="note">
          <Container className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-2.5">
            <span className="eyebrow text-burgundy">{text.test.title}</span>
            <span className="text-micro text-body">{text.test.body}</span>
          </Container>
        </div>
      ) : null}

      <ShopHero edition={edition} stickers={sellable ? designs : []} fromPrice={sellable ? cheapest(countries, locale) : null} />

      <Container className="py-14 lg:py-20">
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
            initial={initialSelection(selection, designs, countries, visitorCountry)}
          />
        )}
      </Container>

      {sellable ? <ShopDetails edition={edition} /> : null}
      {sellable ? <HowItWorks edition={edition} /> : null}
    </>
  );
}

/** The lowest total the price book offers anywhere, for "From …" in the hero. */
function cheapest(countries: readonly ShopCountryId[], locale: ShopEdition["locale"]): string | null {
  let lowest: number | null = null;
  for (const country of countries) {
    for (const quantity of shopQuantities) {
      const priced = quote(priceBook, quantity, country);
      if (priced.ok && (lowest === null || priced.totalMinor < lowest)) lowest = priced.totalMinor;
    }
  }
  return lowest === null ? null : formatMoney(lowest, priceBook.currency, locale);
}

/**
 * The form's starting values, from the query string when they are valid —
 * which is how "back" from the payment page returns a customer to the order
 * they had chosen rather than to an empty form. Without one, the destination
 * starts at the country the visitor seems to be in, so the total is shown
 * postage included from the first look.
 */
function initialSelection(
  query: Record<string, string | string[] | undefined>,
  designs: readonly DesignChoice[],
  countries: readonly ShopCountryId[],
  visitorCountry: ShopCountryId | null,
): { design: string; quantity: number; country: string } {
  const one = (key: string) => {
    const value = query[key];
    return typeof value === "string" ? value : "";
  };

  const design = designs.some((choice) => choice.slug === one("design")) ? one("design") : designs[0]!.slug;
  const quantityValue = Number(one("quantity"));
  const quantity = isShopQuantity(quantityValue) ? quantityValue : 25;
  const countryValue = one("country").toUpperCase();
  const country =
    isShopCountry(countryValue) && countries.includes(countryValue) ? countryValue : (visitorCountry ?? "");

  return { design, quantity, country };
}

function Notice({ title, body }: { readonly title: string; readonly body: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-serif text-display-3 font-normal text-balance text-ink">{title}</h2>
      <p className="mt-4 text-reading text-body/92">{body}</p>
    </div>
  );
}

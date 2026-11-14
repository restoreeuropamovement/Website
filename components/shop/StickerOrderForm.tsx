"use client";

import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import { useActionState, useId, useMemo, useState } from "react";

import { startCheckout } from "@/app/(site)/shop/actions";
import { CHECKOUT_INITIAL, type CheckoutState } from "@/app/(site)/shop/state";
import { SelectField } from "@/components/forms/Field";
import { Button } from "@/components/ui/Button";
import { shopQuantities, type ShopCountryId, type ShopText } from "@/content/shop";
import { plural } from "@/lib/format";
import { localePath, type Locale } from "@/lib/i18n";
import { formatMoney } from "@/lib/shop/money";
import { priceBook, quote } from "@/lib/shop/price-book";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";

export interface DesignChoice {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly previewUrl: string;
}

interface StickerOrderFormProps {
  readonly locale: Locale;
  readonly text: ShopText;
  readonly designs: readonly DesignChoice[];
  readonly countries: readonly ShopCountryId[];
  readonly initial: { readonly design: string; readonly quantity: number; readonly country: string };
}

/**
 * Design, quantity, destination, and a running total.
 *
 * Client-side for the total alone: it is computed from the same price book
 * the server uses, so the figure shown is the figure charged — but the form
 * posts the three choices and never an amount, and the server prices them
 * again. Without JavaScript the radios and selects still work and the form
 * still submits; only the running total stays at its first value, which is
 * why the payment page states the amount again before anything is charged.
 */
export function StickerOrderForm({ locale, text, designs, countries, initial }: StickerOrderFormProps) {
  const uid = useId();
  const form = text.form;
  const [state, formAction, pending] = useActionState<CheckoutState, FormData>(
    startCheckout,
    CHECKOUT_INITIAL,
  );

  const [design, setDesign] = useState(initial.design);
  const [quantity, setQuantity] = useState(String(initial.quantity));
  const [country, setCountry] = useState(initial.country);

  const regionName = useMemo(() => new Intl.DisplayNames([locale], { type: "region" }), [locale]);
  const countryOptions = countries
    .map((id) => ({ value: id, label: regionName.of(id) ?? id }))
    .sort((a, b) => a.label.localeCompare(b.label, locale));
  const quantityOptions = shopQuantities.map((count) => ({
    value: String(count),
    label: plural(locale, count, form.quantityOption),
  }));

  const priced = country ? quote(priceBook, Number(quantity), country) : null;
  const money = (minor: number) => formatMoney(minor, priceBook.currency, locale);

  /*
   * React resets a form once its action returns, and here that only happens
   * on a refusal — a successful checkout navigates away. The reset would put
   * the selects back to their first option while the state behind the total
   * kept the old choice, so the page would price one country and show
   * another. Refused, as on the contact form.
   */
  return (
    <form action={formAction} onReset={(event) => event.preventDefault()} className="flex flex-col gap-10">
      <input type="hidden" name="locale" value={locale} />

      {state.status === "throttled" ? <Notice>{text.states.throttled}</Notice> : null}
      {state.status === "busy" ? <Notice>{text.states.busy}</Notice> : null}
      {state.status === "unavailable" ? <Notice>{text.states.unavailable}</Notice> : null}
      {state.status === "closed" ? <Notice>{text.states.closed}</Notice> : null}
      {state.errors.length > 0 ? (
        <ul className="flex flex-col gap-1.5 border border-burgundy/40 bg-burgundy/5 p-5" role="alert">
          {state.errors.map((code) => (
            <li key={code} className="text-[0.875rem] text-burgundy">
              {text.errors[code]}
            </li>
          ))}
        </ul>
      ) : null}

      <fieldset>
        <legend className="eyebrow mb-4 text-muted">{form.design}</legend>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {designs.map((choice) => {
            const id = `${uid}-design-${choice.slug}`;
            const selected = choice.slug === design;
            return (
              <label
                key={choice.slug}
                htmlFor={id}
                className={cn(
                  "group flex cursor-pointer flex-col border bg-surface transition-colors",
                  selected ? "border-burgundy" : "border-hairline hover:border-field",
                )}
              >
                <input
                  id={id}
                  type="radio"
                  name="design"
                  value={choice.slug}
                  checked={selected}
                  onChange={() => setDesign(choice.slug)}
                  required
                  className="sr-only"
                />
                <span className="relative block aspect-square bg-canvas-deep">
                  <Image
                    src={choice.previewUrl}
                    alt={choice.title}
                    fill
                    sizes="(min-width: 640px) 220px, 45vw"
                    className="object-contain p-4"
                  />
                </span>
                <span className="flex flex-col gap-1 border-t border-hairline p-3">
                  <span className="text-[0.9375rem] leading-snug text-ink">{choice.title}</span>
                  {choice.description ? (
                    <span className="text-micro leading-relaxed text-faint">{choice.description}</span>
                  ) : null}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField
          id={`${uid}-quantity`}
          name="quantity"
          label={form.quantity}
          options={quantityOptions}
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
        />
        <SelectField
          id={`${uid}-country`}
          name="country"
          label={form.country}
          options={countryOptions}
          placeholder={form.countryPlaceholder}
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          required
        />
      </div>

      <section aria-live="polite" className="border border-hairline bg-surface p-6">
        <h2 className="eyebrow mb-4 text-muted">{form.summaryTitle}</h2>
        {priced?.ok ? (
          <dl className="flex flex-col gap-2 text-[0.9375rem]">
            <Row label={form.stickers} value={money(priced.itemsMinor)} />
            <Row label={form.delivery} value={money(priced.shippingMinor)} />
            <div className="mt-2 flex items-baseline justify-between gap-4 border-t border-hairline pt-3">
              <dt className="text-ink">{form.total}</dt>
              <dd className="numerals-tabular font-serif text-display-4 text-ink">{money(priced.totalMinor)}</dd>
            </div>
          </dl>
        ) : priced && !priced.ok && priced.reason === "not-offered" ? (
          <p className="text-[0.9375rem] text-muted">{form.notDelivered}</p>
        ) : (
          <p className="text-[0.9375rem] text-faint">{form.countryPlaceholder}</p>
        )}
      </section>

      <div className="flex flex-col gap-4 border-t border-hairline pt-8">
        <Button type="submit" size="lg" disabled={pending || !priced?.ok || !design} className="self-start">
          {pending ? form.submitting : form.submit}
        </Button>
        <p className="max-w-xl text-micro leading-relaxed text-faint">
          {form.payment}{" "}
          <Link href={localePath(locale, routes.privacy)} className="underline underline-offset-4 hover:text-burgundy">
            {form.privacyLink}
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function Row({ label, value }: { readonly label: string; readonly value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-muted">{label}</dt>
      <dd className="numerals-tabular text-ink">{value}</dd>
    </div>
  );
}

function Notice({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex gap-3 border border-rule bg-canvas-deep p-5" role="status">
      <Info className="mt-0.5 size-4 shrink-0 text-burgundy" strokeWidth={1.75} aria-hidden="true" />
      <p className="text-[0.875rem] leading-relaxed text-muted">{children}</p>
    </div>
  );
}

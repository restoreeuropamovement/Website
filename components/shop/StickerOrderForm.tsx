"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { ArrowRight, CalendarClock, Info, Layers, Lock, Palette, Ruler, Sticker } from "lucide-react";
import { useActionState, useId, useMemo, useState } from "react";

import { startCheckout } from "@/app/(site)/shop/actions";
import { CHECKOUT_INITIAL, type CheckoutState } from "@/app/(site)/shop/state";
import { Button } from "@/components/ui/Button";
import {
  needsCustomsDeclaration,
  preorder,
  shopQuantities,
  type ShopCountryId,
  type ShopQuantity,
  type ShopText,
} from "@/content/shop";
import { fill, plural } from "@/lib/format";
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
  /** Stickers left to sell; larger packs are shown but cannot be chosen. `null` when unknown. */
  readonly remaining: number | null;
}

/** Below this many left, the form says how many. */
const LOW_STOCK = 1000;

const EASE = [0.22, 0.61, 0.36, 1] as const;
const FACT_ICONS = [Ruler, Palette, Layers] as const;

/**
 * The product: a large picture of the chosen design beside everything needed
 * to buy it — quantity, destination and a running total.
 *
 * Client-side for the interaction alone. The total is computed from the same
 * price book the server charges from, but the form posts the three choices
 * and never an amount, and the server prices them again. Without JavaScript
 * the radios and the select still work and the form still submits; the
 * picture and the total stay where they first were, and Stripe's page states
 * the amount again before anything is charged.
 *
 * Motion is handed to `MotionConfig reducedMotion="user"`, which lets the
 * library drop transforms for anyone whose system asks it to — the same
 * markup on server and client either way, which a branch here would not be.
 */
export function StickerOrderForm({ locale, text, designs, countries, initial, remaining }: StickerOrderFormProps) {
  const uid = useId();
  const form = text.form;
  const [state, formAction, pending] = useActionState<CheckoutState, FormData>(startCheckout, CHECKOUT_INITIAL);

  const [designSlug, setDesignSlug] = useState(initial.design);
  const [quantity, setQuantity] = useState(initial.quantity);
  const [country, setCountry] = useState(initial.country);

  const design = designs.find((choice) => choice.slug === designSlug) ?? designs[0]!;
  const regionName = useMemo(() => new Intl.DisplayNames([locale], { type: "region" }), [locale]);
  const countryOptions = useMemo(
    () =>
      countries
        .map((id) => ({ value: id, label: regionName.of(id) ?? id }))
        .sort((a, b) => a.label.localeCompare(b.label, locale)),
    [countries, regionName, locale],
  );

  const priced = country ? quote(priceBook, quantity, country) : null;
  const money = (minor: number) => formatMoney(minor, priceBook.currency, locale);

  return (
    <MotionConfig reducedMotion="user">
      {/* The reset is refused for the reason ContactForm gives: it would put the selects back to their
          first option while the state behind the total kept the old choice. */}
      <form
        id="order"
        action={formAction}
        onReset={(event) => event.preventDefault()}
        className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14"
      >
        <input type="hidden" name="locale" value={locale} />

        {/* ------------------------------------------------ the picture */}
        <div className="flex flex-col gap-6">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[10px] border border-hairline bg-[radial-gradient(circle_at_50%_40%,var(--color-surface),var(--color-canvas-deep)_70%)]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={design.slug}
                className="relative aspect-square w-[72%] rounded-[6px] bg-ink p-[3%] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.85),0_10px_24px_-10px_rgba(0,0,0,0.6)]"
                initial={{ opacity: 0, rotate: -9, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, rotate: -2, scale: 1, y: 0 }}
                exit={{ opacity: 0, rotate: 6, scale: 0.94, y: -12 }}
                whileHover={{ rotate: 0, scale: 1.015 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <div className="relative size-full overflow-hidden rounded-[3px]">
                  <Image
                    src={design.previewUrl}
                    alt={design.title}
                    fill
                    sizes="(min-width: 1024px) 520px, 80vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <span className="absolute bottom-4 left-4 rounded-full border border-rule bg-canvas/80 px-3 py-1 text-micro text-muted backdrop-blur-sm">
              {text.sticker.size}
            </span>
          </div>

          {designs.length > 1 ? (
            <fieldset>
              <legend className="eyebrow mb-3 text-muted">{form.design}</legend>
              <div className="flex flex-wrap gap-3">
                {designs.map((choice) => {
                  const id = `${uid}-design-${choice.slug}`;
                  const selected = choice.slug === design.slug;
                  return (
                    <label
                      key={choice.slug}
                      htmlFor={id}
                      title={choice.title}
                      className={cn(
                        "relative size-20 cursor-pointer overflow-hidden rounded-[6px] border-2 transition-[border-color,transform] duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-burgundy motion-safe:hover:-translate-y-0.5",
                        selected ? "border-burgundy" : "border-transparent hover:border-rule-strong",
                      )}
                    >
                      <input
                        id={id}
                        type="radio"
                        name="design"
                        value={choice.slug}
                        checked={selected}
                        onChange={() => setDesignSlug(choice.slug)}
                        className="sr-only"
                      />
                      <Image src={choice.previewUrl} alt={choice.title} fill sizes="80px" className="object-cover" />
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ) : (
            <input type="hidden" name="design" value={design.slug} />
          )}
        </div>

        {/* ------------------------------------------------ the panel */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={design.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <h2 className="font-serif text-display-3 font-normal text-balance text-ink">{design.title}</h2>
                {design.description ? <p className="mt-2 text-reading text-muted">{design.description}</p> : null}
              </motion.div>
            </AnimatePresence>
          </div>

          {state.status !== "idle" && state.status !== "invalid" ? <Notice>{text.states[state.status]}</Notice> : null}
          {state.errors.length > 0 ? (
            <ul className="flex flex-col gap-1.5 rounded-[6px] border border-burgundy/40 bg-burgundy/5 p-4" role="alert">
              {state.errors.map((code) => (
                <li key={code} className="text-[0.875rem] text-burgundy">
                  {text.errors[code]}
                </li>
              ))}
            </ul>
          ) : null}

          <fieldset>
            <legend className="mb-3 flex w-full flex-wrap items-baseline justify-between gap-x-4">
              <span className="eyebrow text-muted">{form.quantity}</span>
              {remaining !== null && remaining <= LOW_STOCK ? (
                <span className="text-micro text-gold">
                  {fill(form.left, { count: remaining.toLocaleString(locale) })}
                </span>
              ) : null}
            </legend>
            <div className="grid grid-cols-4 gap-2">
              {shopQuantities.map((count) => {
                const id = `${uid}-quantity-${count}`;
                const selected = count === quantity;
                const unavailable = remaining !== null && count > remaining;
                return (
                  <label
                    key={count}
                    htmlFor={id}
                    className={cn(
                      "relative flex h-14 flex-col items-center justify-center rounded-[6px] border transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-burgundy",
                      selected
                        ? "cursor-pointer border-transparent text-canvas"
                        : unavailable
                          ? "cursor-not-allowed border-hairline text-faint line-through decoration-faint/60"
                          : "cursor-pointer border-rule text-ink hover:border-field",
                    )}
                  >
                    <input
                      id={id}
                      type="radio"
                      name="quantity"
                      value={count}
                      checked={selected}
                      disabled={unavailable}
                      onChange={() => setQuantity(count)}
                      aria-label={plural(locale, count, form.quantityOption)}
                      className="sr-only"
                    />
                    {selected ? (
                      <motion.span
                        layoutId={`${uid}-quantity-highlight`}
                        aria-hidden="true"
                        className="absolute inset-0 rounded-[6px] bg-ink"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    <span className="relative numerals-tabular text-[1.0625rem] font-medium leading-none">{count}</span>
                    <span className={cn("relative mt-1 text-[0.6875rem] leading-none", selected ? "text-canvas/70" : "text-faint")}>
                      {unavailable
                        ? form.notEnough
                        : fill(form.perSticker, { price: money(Math.round(priceBook.items[count] / count)) })}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <label className="flex flex-col gap-3">
            <span className="eyebrow text-muted">{form.country}</span>
            <select
              name="country"
              required
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              className="h-13 w-full appearance-none rounded-[6px] border border-rule bg-surface bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22none%22 stroke=%22%238E8B84%22 stroke-width=%221.4%22><path d=%22M4 6.5l4 4 4-4%22/></svg>')] bg-[length:16px_16px] bg-[position:right_1rem_center] bg-no-repeat px-4 pr-11 text-[0.9375rem] text-ink transition-colors hover:border-field focus:border-gold focus:outline-none"
            >
              <option value="">{form.countryPlaceholder}</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <section aria-live="polite" className="rounded-[10px] border border-hairline bg-surface/60 p-6">
            <h3 className="eyebrow mb-4 text-muted">{form.summaryTitle}</h3>
            {priced?.ok ? (
              <dl className="flex flex-col gap-2.5 text-[0.9375rem]">
                <Row label={`${form.stickers} · ${quantity}`} value={money(priced.itemsMinor)} />
                <Row label={form.delivery} value={money(priced.shippingMinor)} />
                <div className="mt-3 flex items-end justify-between gap-4 border-t border-hairline pt-4">
                  <div>
                    <dt className="text-ink">{form.total}</dt>
                    <dd className="mt-0.5 text-micro text-faint">
                      {fill(form.each, { price: money(Math.round(priced.totalMinor / quantity)) })}
                    </dd>
                  </div>
                  <dd className="relative h-10 overflow-hidden">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={priced.totalMinor}
                        className="numerals-tabular block font-serif text-display-3 leading-10 text-ink"
                        initial={{ y: 28, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -28, opacity: 0 }}
                        transition={{ duration: 0.32, ease: EASE }}
                      >
                        {money(priced.totalMinor)}
                      </motion.span>
                    </AnimatePresence>
                  </dd>
                </div>
              </dl>
            ) : priced && priced.reason === "not-offered" ? (
              <p className="text-[0.9375rem] text-muted">{form.notDelivered}</p>
            ) : (
              <dl className="flex flex-col gap-2.5 text-[0.9375rem]">
                <Row label={`${form.stickers} · ${quantity}`} value={money(priceBook.items[quantity as ShopQuantity])} />
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-muted">{form.delivery}</dt>
                  <dd className="text-faint">{form.postagePending}</dd>
                </div>
              </dl>
            )}
            {priced?.ok && needsCustomsDeclaration(priced.country) ? (
              <p className="mt-4 flex gap-2.5 border-t border-hairline pt-4 text-micro leading-relaxed text-muted">
                <Info className="mt-0.5 size-3.5 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
                {form.customs}
              </p>
            ) : null}
          </section>

          <div className="flex flex-col gap-4">
            {preorder ? (
              <p className="flex gap-3 rounded-[6px] border border-gold/50 bg-gold/10 p-4 text-[0.875rem] leading-relaxed text-body">
                <CalendarClock className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
                {form.preorder}
              </p>
            ) : null}
            <Button type="submit" size="lg" disabled={pending || !priced?.ok} className="group w-full">
              {pending ? form.submitting : form.submit}
              {pending ? null : (
                <ArrowRight
                  className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              )}
            </Button>
            <p className="flex items-center justify-center gap-2 text-micro text-muted">
              <Lock className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              {form.secure}
            </p>
            <p className="text-micro leading-relaxed text-faint">
              {form.payment}{" "}
              <Link href={localePath(locale, routes.privacy)} className="underline underline-offset-4 hover:text-burgundy">
                {form.privacyLink}
              </Link>
              .
            </p>
          </div>

          <ul className="grid gap-3 border-t border-hairline pt-6 sm:grid-cols-3 lg:grid-cols-1">
            {text.sticker.facts.map((fact, index) => {
              const Icon = FACT_ICONS[index] ?? Sticker;
              return (
                <li key={fact} className="flex items-center gap-3 text-[0.875rem] text-body">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-rule text-gold">
                    <Icon className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  {fact}
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </MotionConfig>
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
    <div className="flex gap-3 rounded-[6px] border border-rule bg-canvas-deep p-4" role="status">
      <Info className="mt-0.5 size-4 shrink-0 text-burgundy" strokeWidth={1.75} aria-hidden="true" />
      <p className="text-[0.875rem] leading-relaxed text-muted">{children}</p>
    </div>
  );
}

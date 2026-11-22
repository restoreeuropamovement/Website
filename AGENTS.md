<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Restore Europa Movement

## Project conventions

- Routes live in `app/`, split into three route groups. `app/(site)` is the public site and owns the
  navbar, footer and analytics; `app/admin/(entry)` holds the unauthenticated pages (sign-in,
  first-passkey enrolment); `app/admin/(dashboard)` holds everything behind the session gate. Route
  groups do not appear in URLs — they exist so the admin surface inherits none of the public chrome.
  `app/layout.tsx` is a bare document shell; put nothing page-specific in it.
- Presentation components live in `components/`, grouped by domain.
- **All long-form political text lives in `content/`**, never inside a component. Components read typed
  content modules and render them. If you are asked to change wording, edit `content/`.
- Content is expressed as typed `ContentBlock[]` (see `lib/content-types.ts`) and rendered by
  `components/content/ContentBlocks.tsx`. Inline `**bold**`, `*italic*` and `[^1]` footnote markers are
  supported by `lib/inline.tsx`.
- Server Components by default. Add `"use client"` only for genuine interaction (nav, forms, scroll
  progress, filters, reveal-on-scroll).
- Design tokens are defined once in `styles/globals.css` under `@theme`. Use the semantic Tailwind
  classes (`bg-canvas`, `text-muted`, `border-hairline`, …) rather than raw hex values.
- `cn()` concatenates; it does **not** resolve conflicting Tailwind utilities. Never emit two
  utilities for the same property — pick one with a ternary, or wrap the element. In particular,
  do not pass `hidden` to a component whose base classes already set `display`.
- Animation must respect `prefers-reduced-motion`; use `components/ui/Reveal.tsx` rather than ad-hoc
  motion wrappers. Reduced motion and no-script are handled by stylesheet rules on `[data-reveal]`,
  not by branching in the component — a branch would break hydration.
- Source Serif 4 is loaded upright only. Authoring italic copy means re-enabling the italic face in
  `app/layout.tsx`, which costs about a tenth of the page weight.

## The administrative surface

`/admin` is real, not a mock. It is unlisted, `noindex`, excluded from the sitemap, and reachable
only with an enrolled passkey. Read `README.md` → "Administrative surface" before changing it.

- **Never weaken the env contract.** `lib/admin/env.ts` gives no variable a default and throws when
  one is missing. A secret with a fallback is a published credential. The checks are lazy on
  purpose: the public site must build and serve with none of them set.
- **Two policies, deliberately.** Public pages get the static CSP in `next.config.ts`
  (`'unsafe-inline'`, so 138 pages stay prerendered); admin pages get a per-request nonce with
  `strict-dynamic` from `proxy.ts`. Do not merge them.
- **Gating is layered.** `proxy.ts` does a cheap stateless cookie check and sets headers;
  `app/admin/(dashboard)/layout.tsx` performs the authoritative database check. A proxy alone is not
  authorisation — never rely on it as the only gate.
- Mutations are Server Actions that call `requireSession()` first, then write an `admin_audit` row.
  Keep both; an unaudited mutation is a gap.
- Journal essays are edited in the line-based notation defined by `lib/admin/journal-syntax.ts`,
  which round-trips `ContentBlock[]` losslessly. Extending `ContentBlock` means extending both the
  parser and the serialiser, or saving will silently drop the new block type.
- In Next.js 16 the old `middleware.ts` is `proxy.ts`. Do not reintroduce the former.

## The membership roll

`member` is the most sensitive table in the project. A membership list for a political movement is,
in the wrong hands, a list of people to be reported to an employer or named publicly, and GDPR
treats the political opinion it implies as Article 9 special-category data. The design assumes the
table will one day be read by someone who should not have it.

- **Name, email, region and message are encrypted** by `lib/admin/pii.ts` (AES-256-GCM, key from
  `MEMBER_ENCRYPTION_KEY`, never in the database). `country`, `involvement_role` and `interest_area`
  are in the clear because the admin view sorts and counts on them and none identifies a person.
  Region is not in that group: it narrows a person far more than a country does. The same applies to
  the `enquiry` table, where the name, address and message body are encrypted and only the
  fixed-list `subject` is readable.
- **The roles members hold are in `member_office`, and they are encrypted** — the role and the wing
  both. This is the one case where a value drawn from a fixed list is *not* in the clear with
  `country` and `involvement_role`, and the test is the one those two pass: does the value identify
  a person? There is one leader of a wing, so `wing-lead` beside a readable `germany` names
  somebody rather than describing a category of people, and it names the row an opponent would most
  want. Nothing is lost by it, because there is no non-identifying view of leadership to count in
  SQL — every view of who runs a wing is a list of people. Reading them therefore takes
  `requireElevatedSession()` like a name, and `admin_audit` records a grant as a keyed digest
  (`officeDigest`) rather than in words.
- **Encryption is non-deterministic on purpose**, so those columns cannot be indexed or searched in
  SQL. Search decrypts candidates and filters in memory — see `searchMembersRevealed`. Do not
  "optimise" this into a deterministic index: that would let whoever steals the table test who is
  in it.
- **Reading requires `requireElevatedSession()`**, not merely `requireSession()`. Being signed in
  shows counts by country; names need a passkey assertion from the last few minutes. A stolen
  session cookie must never be enough to copy the roll.
- **Reads are audited, not just writes** (`member.reveal`). For this table disclosure is the harm,
  so the act of looking is the event worth recording.
- **Never write personal data into `admin_audit`.** It is not encrypted. Search terms are stored as
  keyed digests via `queryDigest`, so "was this person looked up?" stays answerable while the log
  never accumulates names. The same applies to erasure: log the id, never the address.
- **There is no export function, deliberately.** Do not add one. A downloadable file is the form in
  which such lists escape, and it is the failure this whole design exists to prevent.
- **Nothing is a membership until a person reviews it.** Anyone can type a third party's email into
  a public form; enrolling an opponent to damage them is a real tactic. Public applications land as
  `pending` and an administrator vets them. Nothing is deleted on a timer — an unreviewed row is
  somebody's application, not a stale token.
- **The public site has exactly six server actions**, all in `app/(site)`: the membership intake
 (`join/actions.ts`), the contact form (`contact/actions.ts`), the newsletter signup
 (`newsletter/actions.ts`), the member opt-out (`notices/stop/actions.ts`), the shop's checkout
 (`shop/actions.ts`) and withdrawing from a purchase (`shop/withdraw/actions.ts`). Each validates
 server-side and audits without personal data. The first three also rate limit per connection and
 encrypt before storing; the fourth stores nothing anybody typed and is deliberately not throttled,
 because the way out of a mailing list must not be harder than the way in. The fifth is rate limited
 and stores nothing personal because nobody types anything into it: it takes a design, a quantity
 and a country from closed lists, prices them itself, and sends the browser to Stripe, which is
 where a name and an address are entered and kept — its own header says the rest. The sixth exists
 because EU law has required an online withdrawal function since 19 June 2026: it is rate limited,
 uses the name and email typed only to match the order against Stripe and write the
 acknowledgement, and stores nothing but the time of the withdrawal. Three of them must answer
 identically whatever is already stored: the intake, or it becomes an oracle for testing whether a
 named person is a member; the signup, or it becomes one for testing who reads the letter; and the
 withdrawal, or it becomes one for testing which address bought an order. Do not add a seventh
 without the same reasoning written down.

## The sticker shop

`/shop` is built and closed. Read `docs/sticker-shop-feasibility.md` and README.md → "Sticker shop"
before changing it.

- **The shop keeps no customer record.** `shop_order` has no column for a name, an email address or
 a street, and must never gain one: a list of who bought this movement's stickers is a list of its
 supporters. Stripe holds those details; fulfilment reads them from Stripe for one request and drops
 them. Tracking numbers and printer error text are encrypted, because both point at an address.
- **Prices are the server's, in cents.** The form never posts an amount. `quote()` in
 `lib/shop/price-book.ts` is the only arithmetic that is charged, and money is a whole number of
 minor units from the price book to Stripe.
- **Paid means Stripe's record says paid.** Only `confirmPayment`, reading the session back from
 Stripe's API, writes `paid`, and only after the amount, currency, mode and order id all match.
 Never mark an order paid from a webhook body, a redirect or anything a browser sent.
- **Submitted means the provider has it.** `submitted` is written with the provider's order id in the
 same statement and the schema refuses one without the other. For an outside printer that is the
 printer's own acknowledgement; for `self-dispatch` — stock in Austria, posted by hand — it means the
 order is on the packing list, and only a person pressing "Posted" makes it `shipped`. Do not add a
 provider that reports an outside company's order as submitted without that company's answer.
- **Dispatch accounts see the packing list and nothing else.** `requireSession()` refuses the
 `dispatch` role, so every admin page and action is closed to it by default; the packing list in
 `app/admin/(dispatch)` uses `requireDispatchSession()`, and its addresses need a passkey touch. Do
 not give that route group anything but the packing list.
- **Test and live never cross.** Test mode refuses a provider that pays a company for real, live
 mode refuses a simulation, and fulfilment checks the order's own Stripe mode again before sending.
- **Opening it is a commit.** `SHOP_MODE=live` stays closed until the price book is `approved` and
 every entry in `lib/shop/launch.ts` is ticked. Tick one only when the thing it describes is true,
 and say in the commit what made it so. `/privacy` is rewritten before the shop opens, not after.

## Commands

```bash
npm run dev        # development server
npm run check      # lint + typecheck + content tests + translation checks + production build
npm run artwork    # regenerate the generated SVG artwork in public/images
npm run map        # regenerate content/wings-map.ts, the outline of Europa on /wings
npm run db:migrate # apply db/schema.sql (idempotent)
npm run db:seed    # copy the bundled essays into the database (idempotent)
```

## Editing content

Every domain has the same three files: `structure.ts` for what is not words
(ids, slugs, ordering, dates, cross-references), `en.ts` for the words, and
`index.ts` to join them into an edition. Edit the one that matches what you are
changing — moving an id into a language file is how a URL or a database value
ends up being decided by a translator.

| What                        | Where                              |
| --------------------------- | ---------------------------------- |
| Manifesto                   | `content/manifesto/en.ts`          |
| Homepage copy               | `content/home/en.ts`               |
| Principles — the words      | `content/principles/en.ts`         |
| Principles — order, anchors | `content/principles/structure.ts`  |
| Policy catalogue — words    | `content/policy/en.ts`             |
| Policy — slugs, ordering    | `content/policy/structure.ts`      |
| Navigation, footer, 404     | `content/chrome/en.ts`             |
| Vision                      | `content/vision/en.ts`             |
| About                       | `content/about/en.ts`              |
| National wings              | `content/wings/en.ts`              |
| Wings — countries, slugs    | `content/wings/structure.ts`       |
| Join / Contact              | `content/involvement/en.ts`        |
| Join / Contact — field ids  | `content/involvement/structure.ts` |
| Legal pages                 | `content/legal/en.ts`              |
| Routes, site metadata       | `lib/site.ts`                      |

## Six languages

English is the source. `de`, `fr`, `pl`, `it` and `es` sit beside each `en.ts` and are typed against
it, so a translation that omits a key is a build error rather than a blank heading. A language with
no file falls back to English — see `lib/dictionary.ts`.

- **English keeps the bare paths** (`/principles`); translations are prefixed (`/de/principles`).
  Nothing already indexed moves. `app/[locale]` sits beside `app/(site)`, not inside it, because a
  route group adds no path segment and nesting would apply both layouts.
- **Translations contain words only.** Never a URL, never a `type: "paragraph"` discriminant, never
  a `number`. Anything structural belongs in the English-owned file next to it — `routes` in
  `lib/site.ts`, `principleStructure` in `content/principles/structure.ts`.
- **A link in prose is written `[label][route-id]`**, not `[label](/path)`. The label is translated,
  the id is copied, and `lib/inline.tsx` resolves it against `routes` and prefixes it for the
  current locale. An unknown id fails the build; a literal path silently sends a German reader to
  the English page.
- **Plural forms belong to the language.** `PluralForms` in `lib/format.ts` takes whichever CLDR
  categories the language actually uses — Polish four, English two — and `{count}` survives
  translation untouched.
- Add a language in `lib/i18n.ts` and it appears in the switcher, the sitemap and every `hreflang`
  set at once.
- `npm run test:i18n` walks every edition beside the English one and catches what the types cannot:
  a list that lost an item, an optional section that was dropped, a translated placeholder, a path
  written into a language file.

Journal essays are the one exception to "content lives in `content/`", and the journal is currently
unlisted: it has no public route, and is reachable only through `/admin/journal`. `lib/journal.ts`
reads from Postgres when `DATABASE_URL` is set, with `content/journal/articles.ts` as the seed for
`npm run db:seed`. To put it back on the public site, restore the routes and its entries in
`lib/site.ts` and `content/chrome/*`.

## Non-negotiables

- No fabricated facts, statistics, quotations, names, addresses or email addresses. The imprint has
  no named publisher because the movement is not yet registered, and no correspondence addresses are
  printed for it because none is monitored yet. Neither gap may be filled with something plausible.
  The sticker shop is the exception, with details the operator supplied on 22 November 2026: it is
  sold by Restore Europa Movement, a sole trader, at restoreeuropamovement@gmail.com and
  +43 650 5006955 (`shopSeller` in `content/shop/structure.ts`). Its postal address is given on
  request by the operator's decision — do not supply one.
- **Both public forms genuinely work.** `/join` writes to `member`, `/contact` writes to `enquiry`,
  and each says what it does. If either is ever disconnected, the page must say so before the change
  ships — a form that silently discards what is typed into it is worse than no form.
- `/admin` is a genuine backend, and its analytics figures come from the Vercel API or are reported
  as unavailable — never estimated, never placeheld with plausible numbers.
- **Changing what the site collects means editing `/privacy` first**, not afterwards. The privacy
  note makes specific promises about which fields exist, what is encrypted, step-up authentication,
  audit logging, retention and the absence of any export. Adding a field or weakening a promise
  without rewriting it turns a design document into a false statement to the people who trusted it.
- Criticism is directed at systems, institutions and ideas — never at groups of people.

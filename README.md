# Restore Europe Movement

The website of Restore Europe Movement.
*For a Christian, European and Human-Scale Civilization.*

Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS v4 · Motion · Lucide.

---

## Running it

Requires Node 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Development server                                   |
| `npm run build`     | Production build                                     |
| `npm run start`     | Serve the production build                           |
| `npm run lint`      | ESLint                                               |
| `npm run typecheck` | `tsc --noEmit`                                       |
| `npm run check`     | Lint, typecheck, both content tests and build        |
| `npm run artwork`   | Regenerate the generated SVG artwork                 |
| `npm run db:dev`    | A local Postgres, nothing to install                 |
| `npm run db:migrate`| Apply `db/schema.sql` — idempotent                   |
| `npm run db:seed`   | Copy the bundled essays into the database — idempotent |
| `npm run test:syntax`| Assert the journal notation round-trips losslessly  |
| `npm run test:pii`  | Assert membership encryption behaves as designed      |

### Deploying

Copy `.env.example` into the Vercel project's environment variables and fill it
in. Every variable is documented there; none has a default in code, because a
secret with a fallback is a published credential.

In order:

1. **Domain.** Point the apex at Vercel and redirect `www` to it rather than
   answering on both, so pages are not indexed at two addresses. Set
   `NEXT_PUBLIC_SITE_URL` and `ADMIN_ORIGIN` to that exact origin — `ADMIN_ORIGIN`
   must match what the browser shows or passkeys will not verify.
2. **Database.** Add a Postgres integration; it supplies `DATABASE_URL`. Then run
   `npm run db:migrate` against it once. The migration is idempotent and safe to
   repeat.
3. **Keys.** Generate `MEMBER_ENCRYPTION_KEY` and `ADMIN_SESSION_SECRET` with the
   commands in `.env.example`. **Keep a copy of the encryption key somewhere a
   disk failure cannot reach** — it is deliberately not in the database, so
   losing it means losing every stored name, address and message irrecoverably.
4. **First passkey.** Set `ADMIN_BOOTSTRAP_TOKEN`, enrol at `/admin/enrol`, then
   delete the variable. Leaving it set is a standing route to a new
   administrator account.
5. **Analytics (optional).** Without `VERCEL_ANALYTICS_TOKEN` and
   `VERCEL_PROJECT_ID` the dashboard reports traffic as unavailable rather than
   estimating it.

The public site builds and serves with none of this configured. Without a
database or an encryption key the two forms decline submissions and say so,
rather than accepting details they cannot store safely.

---

## Where things live

```
app/(site)/            the public site — owns the navbar, footer and analytics
app/admin/(entry)/     sign-in and first-passkey enrolment, unauthenticated
app/admin/(dashboard)/ everything behind the session gate
app/api/admin/auth/    the WebAuthn ceremonies
proxy.ts               admin gate and per-request nonce CSP
components/            presentation, grouped by domain
content/               every word of long-form political text
db/schema.sql          the database schema
lib/                   site config, content types, helpers, structured data
lib/admin/             env contract, sessions, WebAuthn, audit, rate limiting
public/                local artwork — nothing on this site is hotlinked
scripts/               artwork generator, database migrate and seed
styles/                design tokens and global CSS
```

Route groups — the names in parentheses — do not appear in URLs. They exist so
that `app/layout.tsx` can stay a bare document shell and the admin surface can
inherit none of the public chrome.

### Editing the words

No prose lives inside a component. To change what the site says, edit `content/`:

| What                      | File                                |
| ------------------------- | ----------------------------------- |
| Manifesto                 | `content/manifesto/en.ts`           |
| Homepage                  | `content/home/en.ts`                |
| Principles (text)         | `content/principles/en.ts`          |
| Principles (order, links) | `content/principles/structure.ts`   |
| Navigation, footer, 404   | `content/chrome/en.ts`              |
| Policy catalogue          | `content/policy.ts`                 |
| Vision                    | `content/vision.ts`                 |
| About                     | `content/about.ts`                  |
| National wings            | `content/wings.ts`                  |
| Join / Contact            | `content/involvement.ts`            |
| Privacy / Imprint         | `content/legal.ts`                  |
| Image slots               | `content/images.ts`                 |
| Routes, site metadata     | `lib/site.ts`                       |

Six languages. English is the source; `de`, `fr`, `pl`, `it` and `es` sit beside
each `en.ts` and are typed against it, so a translation that omits a key fails
the build rather than rendering a gap. A language with no file yet falls back to
English, which is why some pages are still English in every locale. See
`lib/i18n.ts` for the routing and `lib/dictionary.ts` for the loader.

Content is typed `ContentBlock[]` (see `lib/content-types.ts`) rendered by
`components/content/ContentBlocks.tsx`. Inside any `text` field you may use
`**bold**`, `*emphasis*`, `[^1]` footnote references and `[label](/path)` links.

> The italic face of Source Serif 4 is not loaded — it cost about a tenth of the
> page weight and nothing used it. If you author italic copy, re-enable it in
> `app/layout.tsx`.

---

## Administrative surface

`/admin` is unlisted, `noindex`, absent from the sitemap, linked from nowhere on
the public site, and reachable only with an enrolled passkey. It shows traffic
figures and edits journal essays.

**The public site does not need any of this.** With no `DATABASE_URL` set the
site builds and serves exactly as before, reading essays from
`content/journal/articles.ts`; `/admin` then explains what is missing instead of
half-working.

### Setting it up

Copy `.env.example` to `.env.local` and work through it. In short:

```bash
# 1. A Postgres connection string, then apply the schema and copy the essays in
DATABASE_URL="postgres://…?sslmode=require"
npm run db:migrate
npm run db:seed

# 2. Three independent secrets
node -e "console.log(crypto.randomBytes(48).toString('base64url'))"   # session
node -e "console.log(crypto.randomBytes(48).toString('base64url'))"   # bootstrap
node -e "console.log(crypto.randomBytes(32).toString('base64url'))"   # member encryption

# 3. The WebAuthn relying party — the bare registrable domain, and the exact origin
ADMIN_RP_ID="restoreeuropa.eu"
ADMIN_ORIGIN="https://restoreeuropa.eu"
```

`ADMIN_RP_ID` is the **registrable domain**, not the host the site is served
from: `restoreeuropa.eu`, never `www.restoreeuropa.eu`. A passkey enrolled
against the `www` host would not work on the apex, and the value cannot be
changed later without orphaning every credential already enrolled.

Then visit `/admin/enrol` and register the first passkey. That page works only
while no credential exists; afterwards it is inert and further passkeys can be
added only from `/admin/security`, already signed in. Sign in at `/admin/login`.

Analytics is optional. Without `VERCEL_ANALYTICS_TOKEN` and `VERCEL_PROJECT_ID`
the dashboard reports that the source is not connected — collection still works,
only the read-back is off.

### Working on it locally

You do not need a hosted database. `npm run db:dev` starts Postgres compiled to
WebAssembly, behind the real wire protocol, with nothing to install:

```bash
npm run db:dev      # leave running in its own terminal

# in .env.local
DATABASE_URL="postgres://postgres:postgres@127.0.0.1:5433/postgres"
DATABASE_SSL=disable          # no TLS on a loopback socket
ADMIN_RP_ID=localhost
ADMIN_ORIGIN=http://localhost:3000

npm run db:migrate && npm run db:seed
```

`localhost` is the one origin browsers exempt from WebAuthn's HTTPS requirement,
so passkeys work against the dev server. Data lives in `.pgdata/`, gitignored;
delete the directory to start over.

### How it is secured

- **Passkeys, not passwords.** WebAuthn credentials are bound to the origin, so
  they cannot be phished, replayed or leaked in a dump. There is no password to
  reset and no recovery email to compromise — enrol a second passkey instead.
- **No secret has a default.** `lib/admin/env.ts` throws on any missing variable
  rather than falling back, so a half-configured deployment refuses to serve an
  admin panel instead of serving an unprotected one.
- **The gate is layered.** `proxy.ts` rejects requests with no plausible session
  cookie before they reach a route; `app/admin/(dashboard)/layout.tsx` then
  checks the session against the database, which is the decision that counts. A
  forged cookie survives the first check and fails the second.
- **Sessions are opaque and bounded.** The cookie is `HttpOnly`, `Secure`,
  `SameSite=Strict`, signed, and holds a random token; only its SHA-256 hash is
  stored. Sessions expire absolutely and on idle, and all of a user's sessions
  can be revoked at once from `/admin/security`.
- **Its own CSP.** Admin responses carry a per-request nonce with
  `strict-dynamic`, `no-store`, and `noindex`. `publickey-credentials-get` is
  enabled for these routes only; the public `Permissions-Policy` denies it.
- **Everything is audited.** Every sign-in, enrolment and content change writes
  to `admin_audit` with an actor, an outcome and a hashed IP — and for the
  membership roll, every *read* as well, since there the harm is disclosure
  rather than corruption. Recent entries are shown on `/admin/security`.
  Authentication endpoints are rate-limited, and failures are deliberately opaque
  about which step failed.
- **The audit log holds no personal data.** It is not encrypted, so it records
  ids and keyed digests rather than names and addresses — otherwise it would
  slowly accumulate, in the clear, the very data the table beside it encrypts.

### The membership roll

`/admin/members` shows who has applied, counted by country, searchable by name or address and
sortable. It is the most sensitive thing in the project, and the design assumes that one day the
database will be read by somebody who should not have it.

**Names and email addresses are encrypted** with `MEMBER_ENCRYPTION_KEY`, which is held in the
environment and never in the database. A leaked dump, backup or connection string yields ciphertext.
Country, role and area of interest are stored in the clear, because sorting and counting by region
is what the page is for and none of the three identifies anybody on its own.

The encryption is **non-deterministic**: the same name encrypts differently every time, so the table
cannot be mined for who shares a surname, and cannot be used to test whether a particular person is
a member. The cost is that those columns cannot be searched in SQL at all, so search decrypts
candidates and filters them in memory. At the scale this list is expected to reach that is a few
milliseconds; the trade is the right way round.

**Reading a name requires a second passkey touch.** Signing in shows only the per-country counts —
revealing individuals needs a fresh assertion, valid for ten minutes, and "Lock again" ends it
early. This is the part that matters: the realistic compromise of an admin panel is a session that
outlives its owner's attention, and such a session gets statistics rather than people. Every reveal
is written to the audit log, with the search term stored as a keyed digest so the log itself never
becomes a plaintext list of members' names.

There is **no export function**, and that is deliberate. A downloadable file is the form in which
membership lists escape, and adding one would undo most of the above.

### How an application works

1. Someone completes the form at `/join`. It asks for a name, an email address, a country, a role
   and one area of interest — and nothing else. There is no free-text field, because free text is
   where people mention their employer, their family or their legal exposure.
2. The record is stored immediately, encrypted, with status `pending`.
3. A confirmation link goes to the address given. **Nothing counts as a membership until that link
   is opened**: anyone can type a third party's address into a public form, and enrolling an
   opponent in a political movement to damage them is a real tactic rather than a hypothetical one.
4. Unconfirmed applications are deleted automatically after 72 hours.

The form's reply is identical whether the address is new or already a confirmed member. That is not
an oversight: a form that answered differently would let anyone test, one address at a time, whether
a named person belongs to this movement.

> **Before opening applications** you need two things that are not code. A named data controller and
> a correspondence address — `/imprint` currently says neither is established, and `/privacy` says
> plainly that this is a gap — and `RESEND_API_KEY`, without which no confirmation can be delivered
> and therefore no membership can complete.

### Editing essays

`/admin/journal` lists every essay, draft and published. Drafts are invisible to
readers: the route 404s and the sitemap omits them.

Essay bodies are written in a line-based notation rather than raw JSON. It maps
onto the same typed `ContentBlock[]` the rest of the site uses and round-trips
without loss, so an essay can be opened and saved without drift. Blocks are
separated by blank lines; a line with no prefix is an ordinary paragraph:

| Prefix | Block          | Prefix | Block                        |
| ------ | -------------- | ------ | ---------------------------- |
| `::`   | Lead paragraph | `-`    | Bulleted list item           |
| `##`   | Subheading     | `1.`   | Numbered list item           |
| `!!`   | Statement      | `=`    | Rule-separated list item     |
| `""`   | Pull quote     | `\|`   | Unadorned list item          |
| `~~`   | Aside          | `?`    | Definition — `? term \| description` |
| `>>`   | Quotation — `>> text \| attribution` | `---` | Divider   |

`**bold**`, `*italic*` and `[^1]` work inside any block, as elsewhere. The
editor carries this key in a collapsible panel beside the field.

---

## Design system

All tokens are declared once, in `styles/globals.css` under `@theme`. Use the
generated semantic utilities (`bg-canvas`, `text-muted`, `border-hairline`, …)
rather than raw values.

The site is dark-grounded. `ink` is therefore the *lightest* value in the palette
and `canvas` the darkest — the two are named for their role (text and ground),
not their lightness.

| Token             | Value     | Use                                    |
| ----------------- | --------- | -------------------------------------- |
| `canvas`          | `#0A0C0F` | Page ground                            |
| `canvas-deep`     | `#10141A` | Page headers, alternating sections     |
| `surface`         | `#161B22` | Raised panels, form controls           |
| `ink`             | `#F4F1E8` | Headings, and the light-slab ground    |
| `body`            | `#C9C6BD` | Running text                           |
| `muted` / `faint` | greys     | Secondary and tertiary text            |
| `burgundy`        | `#C25F68` | The accent on dark grounds             |
| `gold`            | `#C9AD78` | Decorative only — fails AA as text     |
| `field`           | `#75716A` | Form control borders (WCAG 1.4.11)     |

The `.on-ink` class re-points `ink` and `canvas` to their light-ground values,
which flips an entire subtree — heading, body, accent and border — in one place.
Those are the only two tokens that have to mean opposite things on the two
grounds; see the comment in `styles/globals.css`.

Type is Source Serif 4 for display, quotation and editorial statement; Inter for
navigation, UI, body and metadata. The scale is fluid (`text-display-1` …
`text-reading`); long-form prose is set to a 45rem measure.

`cn()` concatenates and does **not** resolve conflicting Tailwind utilities.
Never emit two utilities for the same property — choose one with a ternary, or
wrap the element.

---

## Images

No photography has been supplied, so every image slot holds locally generated
tonal artwork drawn in the brand palette (`npm run artwork`). Each slot is
declared in `content/images.ts` with `placeholder: true`.

To commission photography: drop a file at the same path and aspect ratio, update
its `alt` text, and remove the `placeholder` flag. Nothing else changes.

Preferred direction: European countryside, old towns, villages, churches,
forests, mountains, workshops, farms, universities, public squares, stone
architecture and ordinary civic life.

---

## Things this site deliberately does not do

- **No backend it does not admit to.** `/contact` validates in the browser and
  transmits nothing, and says so on the page. `/join` genuinely does transmit and
  store, and says that instead, above the fields rather than only in the privacy
  note. Changing either means rewriting `/privacy` first, not afterwards.
- **No data collected that is not kept, and none kept that is not needed.** The
  application form has no postal address, no telephone number, no date of birth
  and no free-text field.
- **No invented organisational data.** No address, registration number, officer,
  founding date or membership figure is asserted anywhere. `/imprint` lists what
  will be published and marks each entry as not yet established. The national
  wings under `/wings` describe what a wing *is* and is answerable for; none of
  them claims to be constituted, staffed or active.
- **No fabricated sources.** The journal essays are marked as placeholders and
  cite only this movement's own published documents.
- **No fabricated figures.** The admin dashboard reports analytics from Vercel's
  API or states that the source is not connected. It never estimates.
- **No cookies for readers, no third-party requests.** No font CDN, no embeds, no
  hotlinked images. The one script is Vercel Web Analytics, which is cookieless,
  stores no personal data and is served from this origin — which is why the site
  carries no consent banner. The only cookie on the site is the admin session,
  set after a passkey sign-in. Anything that sets an identifier for readers would
  change that, and `/privacy` would have to be rewritten first.

---

## Accessibility and performance

Verified with Lighthouse against the production build:

| Page                | Perf (desktop) | Perf (mobile) | A11y | Best practices | SEO |
| ------------------- | -------------- | ------------- | ---- | -------------- | --- |
| `/`                 | 100            | 98            | 100  | 100            | 100 |
| `/manifesto`        | 100            | —             | 100  | 100            | 100 |
| `/journal/[slug]`   | 100            | —             | 100  | 100            | 100 |
| `/join`             | 100            | —             | 100  | 100            | 100 |

Every text/ground pair in the palette clears WCAG AA (4.5:1); form control
borders clear 1.4.11 (3:1). All animation is suppressed under
`prefers-reduced-motion`, and `[data-reveal]` content is forced visible when
scripting is unavailable.

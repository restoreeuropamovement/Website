# Sticker shop — feasibility, costs and recommendation

Researched and written 14 November 2026. Every price and capability below carries one of four labels:

- **Verified**: read on the supplier's or authority's own page on that date (sources in section 13).
- **Estimate**: arithmetic or physical estimate made here, with the method shown.
- **Assumption**: a premise the figures depend on that no source confirms; each is listed in section 11.
- **Unconfirmed**: stated by a supplier in a way that leaves the answer open, or not published at all.

No supplier was contacted, no account was opened and nothing was ordered.

---

## 0. Decision, 14 November 2026: dispatch from Austria

Sections 1–14 are the research. After reading them the movement chose a model of its own. Its prices replace the German fulfilment figures in section 10; the rest of the report still stands.

### The model

- **Stock:** one bulk print run, delivered to Austria.
- **Dispatch:** supporters there pack and post each order by hand, unpaid. They work from a packing list at `/admin/dispatch`, using **dispatch accounts** that can see that list and nothing else.
- **Delivery:** to all 27 EU member states. Switzerland, Norway and the United Kingdom are left out for now: each needs a customs declaration per envelope, and Switzerland expects prices in francs and the UK a VAT registration.
- **Profit:** changed on 15 November 2026. The first price book aimed at about 5 % per order. The stickers are now priced to sell, at €15 for 100, with small packs costing visibly more per sticker. Postage is charged at exactly what Austrian Post asks and earns nothing. Every order now leaves a real profit, so the seller has a business income to declare; see `tax` in `lib/shop/launch.ts`.
- **Seller:** an Austrian association (Verein) is recommended, so the association's name, not a person's, appears on the site and the stickers.

### Postage (Verified, Austrian Post)

Austrian Post's prices are VAT-exempt as universal service. Unlike Deutsche Post, Austrian Post **accepts goods in international letters** ("Sendungen mit Wareninhalt", Brief International terms valid from 1 September 2026). That is why posting to the rest of the EU from Austria costs a letter rather than a parcel.

| Stickers | Format (estimated weight) | Inside Austria | Rest of the EU, Economy |
|---|---|---|---|
| 10 | Brief S, ≤ 20 g, 5 mm (C6, ≈ 15 g) | €1.00 | €1.25 |
| 25 | Brief M, ≤ 75 g, 5 mm (C6, ≈ 33 g) | €1.55 | €2.00 |
| 50 | Brief M, ≤ 75 g, 5 mm (C5, two stacks of 25, ≈ 57 g, ≈ 4 mm) | €1.55 | €2.00 |
| 100–1,000 | 353 × 250 × 30 mm, ≤ 2 kg (B4 board-backed) | Päckchen S €3.10 | Brief L €6.70 |

Austrian Post prices letters by weight only up to 75 g. Above that, the large format costs the same up to 2 kg, which is why postage stops rising at 100 stickers. Tariffs re-read on post.at on 15 November 2026.

- **Bulk discount for later:** Brief International Plus, at 20 or more envelopes per drop-off, is much cheaper. Economy costs €0.69 per item plus €8.30 per kg up to 75 g, and €1.80 plus €3.70 per kg for the large format. It could cut EU postage substantially once volume justifies the paperwork.
- **Weights:** all estimates, as in section 6.2. Ten stickers fit a 20 g Brief S only without a card stiffener, which is why the packing list says so.

### Prices in the provisional price book

The other inputs:

- **Stickers:** 2.9 cents each (about €29 per 1,000, Onlineprinters' list price; Estimate for the Austrian shop).
- **Envelopes:** €0.10 for C6 and C5, €0.30 for the board-backed B4 (Estimate).
- **Card fee:** Stripe, 1.5 % + €0.25.
- **Labour:** none.

| Stickers | Stickers price | Per sticker | **Total, Austria** | Left over | **Total, rest of the EU** | Left over |
|---|---|---|---|---|---|---|
| 10 | €4.90 | 49 ct | **€5.90** | €4.17 | **€6.15** | €4.16 |
| 25 | €7.90 | 32 ct | **€9.45** | €6.68 | **€9.90** | €6.68 |
| 50 | €9.90 | 20 ct | **€11.45** | €7.92 | **€11.90** | €7.92 |
| 100 | €15.00 | 15 ct | **€18.10** | €11.27 | **€21.70** | €11.22 |
| 250 | €29.90 | 12 ct | **€33.00** | €21.60 | **€36.60** | €21.55 |
| 500 | €49.90 | 10 ct | **€53.00** | €34.05 | **€56.60** | €34.00 |
| 1,000 | €89.90 | 9 ct | **€93.00** | €58.95 | **€96.60** | €58.90 |

For example, 100 stickers to Austria cost €2.90 for the stickers, €0.30 for the envelope and €3.10 postage. Add Stripe's €0.53, and €18.10 leaves €11.27. The ratio is deliberate: 10 stickers cost more than three times as much each as 100.

### What else changes

- **The imprint on the sticker.** Under Austrian media law (MedienG § 24(1), Verified), every printed item names its publisher and its printer, with the **towns** of publication and printing, not a street address. Stickers posted into Germany are also distributed there, where state press laws ask for addresses (section 11). An adviser should word an imprint that covers both.
- **Code that implements this:**
  - `self-dispatch` in `lib/shop/providers/`.
  - The packing list at `app/admin/(dispatch)`.
  - The `dispatch` role on `admin_user`.
  - Two postage zones in `content/shop/structure.ts` and `lib/shop/price-book.ts`.
  - `lib/shop/launch.ts`, rewritten for this model.

**Sources:**

- Austrian Post domestic and international tariffs: https://www.post.at/p/c/tarife-brief-und-paket and https://www.post.at/p/c/brief-ausland
- Brief International terms, goods content: https://assets.post.at/-/media/Dokumente/De/AGB/PPV-Brief-International-01092026.pdf
- MedienG § 24: https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10000719&Paragraf=24
- Austrian business service portal on the media-law imprint: https://www.usp.gv.at/themen/brancheninformationen/information-und-kommunikation/impressumspflicht-gemaess-para-24-mediengesetz.html

---

## 1. Executive summary

**Recommendation: CONDITIONAL GO.** The shop is technically feasible, and the cheapest model reaches prices close to the brief's target. It cannot lawfully take a single paid order today. The conditions are concrete and listed in section 14; until they are met, the shop that is now built stays closed.

**What the research found:**

1. **Printing each order individually is expensive at every quantity.** Onlineprinters' verified price for ten 8 × 8 cm paper stickers is €15.22 including VAT and delivery in Germany, and for 1,000 it is €29.02. A cutting charge of €10.81–€15.01 net is added to every order regardless of size and makes up most of the cost of a small one. To earn €1.50–€4 on top, the shop would have to charge about **€17.90 for 10 stickers and €33.90 for 1,000**.
2. **Printing in bulk and posting from stock is three times cheaper for small orders.**
   - The inputs: 1,000 stickers cost €29.02 (2.9 cents each), a letter-fulfilment house charges €2.19 net per order with no minimum, and within Germany stickers travel as ordinary letters from €0.95.
   - The resulting prices are **€5.90 for 10 stickers in Germany and €9.00 to the rest of the EU**, each with about €1.50 left over after every cost and Stripe's fee.
   - The provisional price book in `lib/shop/price-book.ts` uses these figures.
3. **A €3–5 order is not achievable with a €1–3 margin.** Even from stock, the fixed cost of one order is about €3.90 before a single sticker is counted: €2.61 fulfilment including VAT, €0.95 postage and €0.34 card fee.
4. **The movement cannot sell anything while it has no legal identity.** All of the following need a named seller with an address where legal papers can be served:
   - the imprint and withdrawal notice;
   - the product-safety listing;
   - Stripe's identity checks;
   - every printer's and fulfilment house's account.
   
   Separately, German press law requires the **printed sticker itself** to name its publisher and printer with their addresses. The current artwork deliberately leaves that field blank.
5. **No order API could be confirmed as available to this movement.** Every printer with a documented API issues credentials only to an approved business account (section 3). The shop therefore runs against a mock printer, with live mode locked behind the conditions in `lib/shop/launch.ts`.

**What is built** (section 9): a closed, working storefront at `/shop` in all six locale routes; Stripe Checkout; a verified webhook; and an order pipeline that sends each paid order to a provider exactly once. Behind it sit a provider-adapter seam with a mock printer, an admin page for orders and designs, and a nightly reconciliation pass.

The shop keeps **no customer record of its own**: names and addresses stay with Stripe and are read only when an order is handed over for dispatch.

---

## 2. Is the business model technically feasible?

**Yes, in either form, given an approved supplier account.** Each step of the intended flow maps onto something that is either built or documented by a supplier:

| Step | Status |
|---|---|
| Customer picks a design, quantity and country; sees the total | Built (`/shop`), priced server-side in integer cents |
| Customer pays and gives an address | Built (Stripe Checkout, hosted; address limited to the priced country) |
| Payment reliably confirmed | Built (signed webhook, re-read from Stripe's API, amount checked; nightly reconciliation for missed webhooks) |
| Order passed to the printer automatically | Seam built and tested with a mock; **real adapter blocked on account approval** |
| Printer prints and ships neutrally to the customer | Verified as offered by Onlineprinters, Print.com, FLYERALARM PRO, WIRmachenDRUCK (reseller checkout), Printful, Printen.eu |
| Status and tracking back to the shop | Built (status sync, encrypted tracking). Verified webhooks at Print.com, Printful, Printen.eu and Helloprint; polling at Onlineprinters via op.connect (Unconfirmed) |

**What is not feasible:**

- An order flow with no supplier relationship at all.
- Sending goods abroad as cheap international letters: Deutsche Post has allowed only documents in international letters since 1 January 2019 (Verified).

---

## 3. Supplier comparison

### 3.1 Print-on-demand (Model A: the printer prints and posts each order)

| Supplier | Matches the sticker? | Order API for a small site | Neutral shipping | Countries | Verified prices for the spec |
|---|---|---|---|---|---|
| **Onlineprinters** (DE) | Yes: 80 g/m² Haftpapier matt, free format 8 × 8 cm, permanent adhesive, from 10 | op.connect, free, "for resellers and large customers with high print volume"; access through sales; order documentation not public | Free | .de delivers to DE + 13 smaller EU states; AT/FR/NL/IT/ES/CH are separate shops with their own accounts and prices | **Yes**, Germany (section 6) and Switzerland in CHF |
| **Print.com** (NL) | Yes: 80 g/m² Raflatac paper, custom size from 8 × 5 cm, from 1 piece | Public REST docs, price endpoint, per-order webhooks, staging; account is free but invite-only for professionals | Default | EU duty-paid; outside the EU ex works; CH Unconfirmed | No (login) |
| **FLYERALARM PRO** (DE) | Yes: custom-size stickers on 80 g paper, from 1 | Mature REST API; expects **€2,500/month** turnover; API fees after 6 months; 12-month term | Yes, EU + CH + NO | Per agreement | No |
| **WIRmachenDRUCK** (DE/CH) | Yes: free-size 80 g/m² paper; the user's current supplier | API "advertised", nothing documented; reseller offer is a hosted shop | In reseller checkout | DE free; CH is a separate company | No |
| **Printful** (LV) | Partly: vinyl kiss-cut, 7.6 cm, no paper | Public API, webhooks, file reuse | Yes | EU + CH (collects Swiss VAT) | Yes: **$2.34 per sticker** (3″), shipping $4.29 + $0.10 each to Europe |
| **Printen.eu** (NL) | Partly: kiss-cut 7.6/10.2/14 cm; material Unconfirmed | Public OpenAPI, stored SKUs, signed webhooks, sandbox; **EU VAT ID required** | Yes | EU; CH contradictory | Partly: "from €12.44"; shipping DE €8.95, AT/IT/ES €14.50 |
| **Expresta** (SK) | Yes: paper, any size | Free, on request; docs not public | Yes | Unconfirmed | No |
| SAXOPRINT | No: from 250, no 8 × 8 | Only "high volume", NDA | Yes | Domestic shops only | No |
| Helloprint | Weak: custom size not in API | Connect members only (€5k/yr potential) | Yes | No AT, no CH | No |
| Gelato, CloudPrinter, Peecho, Prodigi | No: no stickers, or no size near 8 cm, or not shipped to DE | — | — | — | — |
| 4you Design | No paper | API, but **€15,000/year** minimum | Yes | — | No |
| Sticker Mule | Vinyl | API reorders to saved addresses only | — | — | No |
| Spreadconnect | PVC, 5/10 cm | Free API | Yes | **No CH** | No |

### 3.2 Pre-printed stock and fulfilment (Model B: print 500–1,000 in advance, a warehouse posts per order)

| Provider | Fixed cost | Per order | Postage | Integration |
|---|---|---|---|---|
| **VersandLuchs** (Albstadt, DE) | None: no base fee, no minimum, no term, free onboarding | **€2.19 net**, regardless of item count; own envelopes free | Separate; national letters at Deutsche Post rates; abroad "a permitted route" | Agreed individually — no public API |
| **Fulfillment-Box** (DE) | €200 prepaid credit | €1.10 + €0.50 per unit; mailer €0.08–0.14 | DHL; Warenpost offered | WooCommerce, marketplaces |
| Smart Fulfilment (NL) | None | €0.65 | DE €4.67 (NL rates) | WooCommerce, Shopify |
| Amazon MCF | €39/month | €4.53 light envelope | Included; no CH | API |
| Huboo | €1,750/month minimum | — | — | — |

All figures Verified on the providers' pages; postage pass-through prices are not published by any of them.

### 3.3 A different model entirely

**Spreadshop** (Spreadshirt): a free hosted shop.

- In its favour:
  - Spreadshirt is the seller, so it handles payment, VAT, Swiss customs and customer data (Verified).
  - Stickers from €1.99.
- Against it:
  - Vinyl stickers in 5/10/15/20/35 cm sizes, with no 8 cm option.
  - Spreadshirt's checkout rather than this site's.
  - Content moderation at Spreadshirt's discretion.

It sidesteps every legal blocker in section 11. It also gives up most of what the brief asks for.

---

## 4. Onlineprinters API: what is verified

| Question | Answer | Label |
|---|---|---|
| Public or private API for orders? | **op.connect** exists, is live and "komplett kostenfrei". It transmits product, order, price and invoice data, and (Spanish page) print files and shipping status | Verified |
| Who may use it? | "Sie bestellen regelmäßig und viel und haben ein hohes Druckvolumen. Sie sind ein Wiederverkäufer oder Großkunde." Access is via the service team | Verified |
| Minimum volume, fees | No figure published. op.premium is for €10,000+ annual print volume; whether op.connect needs it is not stated | Unconfirmed |
| Can a small independent website get access? | The reseller programme has no minimum turnover and names shop operators, but every application is vetted by sales | Unconfirmed |
| Public documentation | None for orders. `api.pro.onlineprinters.info/docs` exposes a Reseller Portal API (login, articles, CSV exports) with **no order, file, shipment or webhook endpoints** | Verified (what is there) |
| How orders are transmitted | A third-party integrator (Lead-Print, 2023) sends one XML file per order line and the print file over FTP, with credentials issued by Onlineprinters | Unconfirmed for new customers |
| Live prices by quantity and country | op.connect exchanges "Preisdaten"; no public price API | Unconfirmed |
| Different address per order | Yes in the shop; via API Unconfirmed | Verified / Unconfirmed |
| Neutral shipping | Free: neutral parcel, delivery note and label; own sender address possible; own delivery-note PDF upload | Verified |
| Countries | .de delivers to DE + 13 smaller EU states. AT, FR, NL, IT, ES, CH are separate shops. With a VAT ID, goods go only to the billing country | Verified |
| Reuse of artwork | "Erneut bestellen" reuses the previous files; via API Unconfirmed | Verified / Unconfirmed |
| Quantities | Steps of 10 from 10 to 10,000; 25 priced when asked directly, but not in the stated steps | Verified / Unconfirmed |
| Minimum order value | None; but a cutting charge on every order | Verified |
| Several designs per print run | No: each design is its own order line and ships separately | Verified |
| Status, tracking, errors | Account shows status and a parcel number per shipment. No webhooks in the public spec | Verified |
| Fully unattended operation | Only through op.connect | Unconfirmed |
| Supported integration rather than browser automation | op.connect is the supported route; nothing else for a consumer shop. Onlineprinters Spain's general manager stated in March 2026 that there are no pre-built integrations with Shopify or similar | Verified |

Two further risks are specific to Onlineprinters:

- Its terms let it withdraw from orders that conflict with its "values" (§ 4.1, § 9.1).
- Its German account cannot be shown to deliver to the other five target EU countries.

---

## 5. Reusable designs and artwork

**How the shop stores designs** (built): each design is two files in the Vercel Blob store.

- A raster **preview** that customers choose from.
- The **print master**, which every order sends unchanged.

The master's SHA-256 is recorded at upload, so "is this what was printed?" can be answered months later. New designs are added at `/admin/shop` without touching code, and start switched off.

**What the suppliers support:**

| Supplier | Reuse mechanism |
|---|---|
| Print.com | `fileUrl` per order item, or `designs[]` with copies per design (Verified) |
| FLYERALARM PRO | Print data per order as file, FTP or HTTP URL; file-check endpoint (Verified) |
| Printful | File-library ID or URL; a repeated URL is reused (Verified) |
| Printen.eu | Stored reseller SKUs with fixed options, plus `fileUrl` (Verified) |
| Onlineprinters | Web reorder reuses files; API mechanism Unconfirmed (FTP per order in the one known integration) |

Every one of these accepts or can be given the master's stable URL, which is what `PrintJob.design.printUrl` carries. Under Model B the question disappears: the master is printed once, in bulk, by whichever printer gives the best quality, and the fulfilment house never sees it.

**File requirements differ by printer.** The master must be made for the one chosen:

| | Onlineprinters | WIRmachenDRUCK |
|---|---|---|
| Finished size | 80 × 80 mm | 80 × 80 mm |
| Bleed | **2 mm** per side → file **84 × 84 mm** | **3 mm** per side → file **86 × 86 mm** |
| Safety margin | 4 mm inside the cut | 3 mm inside the cut |
| Resolution | 300 dpi | ≥ 300 dpi |
| Colour | CMYK, FOGRA51 (PSO Coated v3) for coated paper; RGB auto-converted | CMYK, recommended ICC profile; ≤ 300 % ink; RGB auto-converted |
| Format | PDF (PDF/X-4 preferred), TIFF, JPEG | PDF, fonts embedded |

`stickerFormat.bleedMm` in `content/shop/structure.ts` is 2 mm, for Onlineprinters; change it to the chosen printer's figure.

Quantity does not change the file requirements, though it does change the price (section 6). At Onlineprinters and WIRmachenDRUCK it does not change the process either: both print these quantities digitally.

**The existing design.** One sticker is published at `/materials`: "Remember your Roots – Sticker with Caesar".

- It is a **1500 × 1500 px RGB JPEG**: enough resolution (about 445–475 dpi at 80–86 mm), but RGB rather than CMYK, so colour will shift unless it is converted and proofed.
- It has no visible bleed allowance.
- The QR code and the "Join at restoreeuropa.eu" line sit near the bottom edge, and need checking against the safety margin.
- It carries no imprint (section 11).

A print master needs to be exported from the source artwork, not from this JPEG.

---

## 6. Production costs

### 6.1 Model A, Onlineprinters: Verified list prices

8 × 8 cm, 80 g/m² Haftpapier matt gestrichen, standard production (3–4 working days), no data check, delivered free within Germany. Read from the official product page.

| Qty | Base (net) | Cutting (net) | Total net | **Total incl. 19 % VAT and delivery** |
|---|---|---|---|---|
| 10 | €1.98 | €10.81 | €12.79 | **€15.22** |
| 25 | €2.20 | €12.01 | €14.21 | **€16.91** (outside the stated steps of 10) |
| 50 | €2.62 | €12.16 | €14.78 | **€17.59** |
| 100 | €3.43 | €12.31 | €15.74 | **€18.73** |
| 250 | €4.51 | €14.65 | €19.16 | **€22.80** |
| 500 | €7.05 | €15.01 | €22.06 | **€26.25** (matches the screenshot) |
| 1,000 | €10.86 | €13.53 | €24.39 | **€29.02** |

- Options: data check +€6.90, 2-day production +€8.90.
- Switzerland (onlineprinters.ch, produced in Germany, export handled by Onlineprinters): **CHF 27.48 for 10, CHF 45.07 for 500, CHF 55.54 for 1,000**, including 8.1 % Swiss VAT.
- Prices for the AT, FR, NL, IT and ES shops were not retrieved.

### 6.2 Model B, stock and a letter-fulfilment house

| Input | Figure | Label |
|---|---|---|
| Bulk print | 1,000 stickers €29.02 incl. VAT → **€0.029 each** (Onlineprinters list). WIRmachenDRUCK's price for the current product was not retrieved | Verified |
| Fulfilment | VersandLuchs **€2.19 net per order**, any item count → €2.61 incl. VAT if VAT cannot be reclaimed | Verified |
| Envelope and card stiffener | €0.10 per letter, €0.20 per larger mailer | Estimate |
| Weight | ≈ 1 g and 0.14 mm per sticker (80 g/m² face + glassine liner); 10 stickers + C6 ≈ 18 g; 25 ≈ 33 g; 250 ≈ 267 g; 1,000 ≈ 1,040 g | Estimate (method: label-stock datasheet) |
| Postage passed on at Deutsche Post list price | Not published by any fulfilment house | Assumption |
| Card fee | Stripe, standard EEA cards **1.5 % + €0.25** (premium cards 2.8 %) | Verified |

---

## 7. Shipping and tax

### 7.1 Postage (Verified, 2026 prices)

**Within Germany** goods may travel as ordinary letters. Deutsche Post's universal-service prices are VAT-exempt.

| Stickers | Format | Price |
|---|---|---|
| 10 | Standardbrief (20 g, 5 mm) | €0.95 |
| 25 | Kompaktbrief (50 g, 1 cm) | €1.10 |
| 50–250 | Großbrief (500 g, 2 cm) | €1.80 |
| 500 | Warensendung (1 kg, ~4 days) / Maxibrief | €2.70 / €2.90 |
| 1,000 | Warensendung up to 2 kg | €3.55 |

**To the EU** goods may not go as letters. The options:

- **Warenpost International** (business contract, about 200 items a year; plus 19 % VAT to EU destinations):
  - FR, AT, NL: €2.87 + €0.47 per 100 g.
  - IT, ES: €2.77 + €0.69 per 100 g.
  - That works out at €3.97–€6.77 incl. VAT to FR/AT/NL, and €4.12–€8.22 to IT/ES.
- **DHL Päckchen XS International**: €6.99, online only.

**To Switzerland:**

- Warenpost International CH is €3.49 + €0.69 per 100 g; a customs declaration (CN22) is required.
- Päckchen XS is €8.99.
- From inside Switzerland, a B-Post letter is CHF 1.00–2.00.

### 7.2 Switzerland

- **Import VAT** of 8.1 % is not collected when the tax amount is CHF 5 or less, i.e. goods plus shipping up to about **CHF 62** (BAZG). Most sticker orders fall below that.
- **Customs duty:** none on industrial goods since 2024.
- **Clearance fee:** Swiss Post charges CHF 13 + 3 % only above that threshold.
- **Swiss VAT registration** is only required for a foreign seller at **CHF 100,000** a year of such small consignments.
- **Price display:** Swiss rules expect a shop that targets Swiss consumers to show prices **in francs**. This shop prices in euros, so **Switzerland is not offered** in the provisional price book.
- **Payment and identity rules for Swiss customers:**
  - TWINT also needs CHF and a full legal identity on the site.
  - Swiss UWG requires the seller's identity and an order confirmation.

### 7.3 VAT and the seller

- **Kleinunternehmer (§ 19 UStG):** VAT-exempt while turnover stays at most €25,000 in the previous year and €100,000 in the current one (Verified). No VAT is shown and input VAT is not reclaimed, which is the basis the prices in section 10 are calculated on.
- **Cross-border sales to consumers** stay taxed in the seller's country below **€10,000 a year** EU-wide, provided the goods leave from that country (Verified). A printer in another member state breaks that condition.
- **Dropshipping** from a printer to the customer is a chain transaction. How it is taxed needs a **tax adviser**; no official guidance resolves it for this case.
- **Registration:** with the tax office within one month of starting (§ 138 AO). Invoices are kept 8 years, books 10.

### 7.4 Other duties that apply to selling stickers

Details and sources are in `lib/shop/launch.ts` and section 13.

- The **imprint** (§ 5 DDG).
- **Pre-contract information**, including the EU's harmonised warranty notice (Regulation 2025/1960, from 27 September 2026).
- The 14-day **right of withdrawal**. Pre-designed stickers are not exempt as custom goods. The "Vertrag widerrufen" **button** is required since 19 June 2026 (§ 356a BGB).
- The **order button** wording (§ 312j BGB).
- **GPSR** manufacturer details on the listing; Onlineprinters' own sticker page carries them.
- **Packaging**: PPWR and VerpackDG since 12 August 2026.

The EU online dispute-resolution platform was discontinued in July 2025: no link to it.

---

## 8. Recommended supplier

**Primary: Model B.**

- **Bulk printing:** at WIRmachenDRUCK, whose quality is already satisfactory, or at Onlineprinters at the verified €29 per 1,000.
- **Dispatch:** a letter-fulfilment house. **VersandLuchs** is first choice: €2.19 per order, no minimum, stickers named explicitly; **Fulfillment-Box** is the alternative.

It is the only route to the price range the brief asks for. It is also the one that keeps the existing print quality.

It is conditional on three answers from the fulfilment house (section 12):

- that it accepts political stickers;
- that orders can be handed over automatically *with an acknowledgement*;
- which route and price it uses to the EU.

**For orders of 1,000**, Model A is cheaper: Onlineprinters prints and delivers 1,000 for €29.02, against €35.38 from stock. Routing by quantity is a later refinement (section 14).

**If no fulfilment house will take the account,** the Model A fallback is **Print.com**: matching paper product, public API, webhooks, neutral packaging, no stated minimum. It depends on account approval and costs about €18 for 10 stickers. **Onlineprinters op.connect** serves Germany only on the evidence available.

**Not recommended:**

- FLYERALARM PRO (turnover target and fees).
- Printful (vinyl, ~$2.34 per sticker).
- Printen.eu (needs an EU VAT ID).
- SAXOPRINT, Helloprint, Spreadconnect, 4you Design, Gelato, CloudPrinter, Peecho, Prodigi, Sticker Mule (section 3).

---

## 9. Architecture, as built

| Concern | Where | What it does |
|---|---|---|
| Storefront | `app/(site)/shop`, `app/[locale]/shop`, `components/shop/` | Design gallery, quantity and country, live total, mobile layout; 404 unless `SHOP_MODE` is set; noindex until live; works without JavaScript |
| Prices | `lib/shop/price-book.ts`, `lib/shop/money.ts` | Integer cents only; the server recomputes every price from the three choices; the form never posts an amount |
| Checkout | `app/(site)/shop/actions.ts`, `lib/shop/stripe.ts` | Fifth public Server Action. Rate-limited, records an order with no personal data, opens a hosted Checkout Session: address limited to the priced country, Klarna excluded, idempotency key per order, API version pinned to `2026-10-28.endive`. No Stripe SDK |
| Payment confirmation | `app/api/shop/stripe/route.ts`, `lib/shop/payments.ts` | HMAC-verified webhook. The session is read back from Stripe and its amount, currency, mode and order id checked before `paid` is written; the return page settles too; a nightly pass reconciles missed webhooks |
| Fulfilment | `lib/shop/fulfilment.ts` | Claims an order atomically, reads the address from Stripe for one request, submits through the adapter, and handles four outcomes (accepted, rejected, unavailable, ambiguous). Backoff retries, stale-claim rescue, status sync, batch limit |
| Provider seam | `lib/shop/providers/` | `PrintProvider` interface; `mock` prints nothing and fails on demand (`SHOP_MOCK_FAILURE`). Test mode refuses real providers, live mode refuses the mock |
| Data | `db/schema.sql` → `shop_design`, `shop_order` | No name, email or address columns. Tracking and provider error text encrypted. `submitted` impossible without the provider's id; total must equal its parts |
| Admin | `app/admin/(dashboard)/shop` | Readiness and launch checklist; orders as sales; retry and cancel; one order's address from Stripe behind a passkey touch, audited; design upload, ordering, on/off |
| Gates | `lib/shop/config.ts`, `lib/shop/launch.ts` | Live mode needs a real provider, an approved price book, a live key and every launch condition ticked by commit |
| Cost to run | `lib/shop/designs.ts` | The design list is served from the data cache and expired by tag on edit, so browsing does not wake the database |
| Tests | `scripts/check-shop.ts` (in `npm run check`), `scripts/check-shop-pipeline.ts` | Prices, signatures, encoding, gating; and 34 end-to-end checks against a real Postgres |

**What it costs to run:** Stripe's per-transaction fee and nothing fixed. There is no subscription anywhere in the stack, and the database wakes only for a checkout, a payment, an admin visit or the nightly run.

---

## 10. Expected per-order profit

Contribution = price − every variable cost − Stripe's fee (1.5 % + €0.25). It is calculated as a Kleinunternehmer: no VAT charged, input VAT not reclaimed. With VAT registration the figures move by a few cents, because 19 % is then charged on the price and reclaimed on the costs.

### Model B (recommended), the provisional price book

| Qty | **Germany** price → contribution | **FR / AT / NL** price → contribution | **IT / ES** price → contribution | CH |
|---|---|---|---|---|
| 10 | **€5.90** → €1.61 | €9.00 → €1.65 | €9.00 → €1.50 | not offered |
| 25 | **€6.50** → €1.61 | €9.60 → €1.80 | €9.60 → €1.65 | not offered |
| 50 | **€7.90** → €1.57 | €11.90 → €3.34 | €11.90 → €3.19 | not offered |
| 100 | **€9.90** → €2.09 | €13.90 → €3.30 | €13.90 → €2.89 | not offered |
| 250 | **€14.90** → €2.66 | €18.90 → €3.31 | €18.90 → €2.64 | not offered |
| 500 | **€24.90** → €4.26 | €28.30 → €3.54 | €28.30 → €3.32 | not offered |
| 1,000 | **€39.90** → €3.67 | €43.30 → €3.58 | €43.30 → €3.58 | not offered |

**The cost lines behind the Germany column:**

- 10 stickers: €0.29 stickers + €2.61 fulfilment + €0.10 envelope + €0.95 postage = €3.95.
- 1,000 stickers: €29.02 + €2.61 + €0.20 + €3.55 = €35.38.

**The cost lines behind the EU columns:**

- Postage is Warenpost International including VAT.
- For IT and ES at 500, and for every EU destination at 1,000, it is Päckchen XS at €6.99.

**Model B for Switzerland, if a CHF price list is added later:**

- Warenpost International CH costs €4.18 for a letter-sized order.
- Below about CHF 62 the customer pays nothing at the border.

### Model A, Onlineprinters (Germany only verified)

| Qty | Cost | Price for a modest contribution | Contribution |
|---|---|---|---|
| 10 | €15.22 | **€17.90** | €2.16 |
| 25 | €16.91 | **€18.90** | €1.46 |
| 50 | €17.59 | **€19.90** | €1.76 |
| 100 | €18.73 | **€21.90** | €2.59 |
| 250 | €22.80 | **€25.90** | €2.46 |
| 500 | €26.25 | **€29.90** | €2.95 |
| 1,000 | €29.02 | **€33.90** | €4.12 |

### The cheapest viable option, per order

| Qty | Germany | EU (FR/AT/NL/IT/ES) | Switzerland |
|---|---|---|---|
| 10–500 | Model B, €5.90–€24.90 | Model B, €9.00–€28.30 | Not offered until prices are in CHF; Model B from DE or Onlineprinters CH (CHF 27.48+) both possible |
| 1,000 | Model A (Onlineprinters), €33.90 | Model B, €43.30 (Model A prices for those shops not retrieved) | as above |

**Why a €3–5 order is impossible.** The floor is the fixed cost of handling one envelope:

- €2.61 for fulfilment including VAT;
- €0.95 for the cheapest postage;
- €0.34 for Stripe.

That is €3.90 before a single sticker is counted. A price of €4.90 would leave about €0.60; €5.90 leaves €1.61. Below that the only levers are outside the brief:

- self-dispatch, which the brief rules out;
- VAT registration, which saves the €0.42 of VAT on the fulfilment fee;
- bundling, i.e. a minimum order of 25.

**Card disputes.** A single dispute costs €20 at Stripe, more than the value of most orders here. A handful of disputes would erase the margin on hundreds of sales.

---

## 11. Risks and limitations

**Blocking until resolved:**

1. **No seller.** The movement is unregistered. Stripe, every supplier, the imprint, the withdrawal notice and GPSR all need a seller with a serviceable address. Anyone acting for an unregistered association is personally liable (§ 54(2) BGB).
2. **Imprint on the printed sticker.** Bavarian press law, for example, requires every printed item for public distribution to name printer and publisher with addresses (BayPrG Art. 6–7); political stickers are not exempt. The current artwork leaves this blank on purpose, and stock printed without it could not be sold.
3. **Special-category data.** A purchase from a political movement can reveal political opinion (GDPR Art. 9; CJEU C-21/23). A legal basis and a data-processing agreement with the dispatcher are needed, and the movement's name appears on every buyer's card statement. The shop is designed to keep no customer list. Stripe and the dispatcher still hold one, and the privacy note must say so.

**Commercial and operational:**

4. **Content refusal.** Onlineprinters' terms allow withdrawal for conflict with its "values"; most suppliers reserve review. A supplier could stop serving the movement mid-stream. Ask in writing before printing stock.
5. **Every figure is provisional.** In particular:
   - postage pass-through and Warenpost International availability at the fulfilment house (Assumption);
   - VAT on Warenpost International (Assumption);
   - the bulk price from the chosen printer;
   - envelope costs (Estimate).
6. **Letters are untracked.** Model B orders show "Posted" with no tracking number. A claimed non-delivery has no evidence either way; tracked options cost €2–3 more.
7. **Disputes and refunds.** The €20 dispute fee exceeds typical order value, and the withdrawal right allows returns of pre-designed goods.
8. **Switzerland** is excluded until prices are offered in francs.
9. **Daily cron.** On Vercel's Hobby plan the retry and status run is nightly. The webhook sends each order the moment it is paid; only failures wait.
10. **Design edits outside `/admin/shop`** (direct SQL) are not seen by the public page until the cache is expired.

**Assumptions the price book depends on:**

- Postage is passed through at Deutsche Post list prices.
- Warenpost International is available through the fulfilment house.
- 19 % VAT applies to Warenpost International to the EU.
- The weight estimates hold (10 stickers fit a 20 g Standardbrief only just).
- WIRmachenDRUCK's bulk price is close to Onlineprinters'.

---

## 12. Questions still open with suppliers

**Every supplier:**

1. Do you accept political (non-party) stickers from this seller, and will you confirm it in writing?
2. Is a registered company or VAT ID required?
3. Will you sign a GDPR Art. 28 data-processing agreement? How long do you keep recipient addresses?

**VersandLuchs / Fulfillment-Box (Model B):**

1. How can our system hand over an order automatically: API, file drop, email? Is each order **acknowledged**, so that we never report an order as accepted that you have not received?
2. Is postage charged at Deutsche Post list price, and with or without VAT?
3. Which route and price do you use to FR, AT, NL, IT, ES and CH? Warenpost International?
4. Is storage of a few thousand stickers included, and what does stock intake cost?
5. Can tracking or a "posted" confirmation be sent back to us?

**WIRmachenDRUCK:**

1. Is there an API our site can call without the hosted reseller shop?
2. What does a bulk run of 1,000 × 8 × 8 cm 80 g/m² paper cost?
3. Can the delivery go to a fulfilment house?
4. Does the Swiss company offer the same?

**Print.com:**

1. Would you approve this account?
2. Is Switzerland shippable, and duty-paid?
3. What are the prices for 10–1,000 at 8 × 8 cm?
4. What are the quantity steps?
5. Is the adhesive permanent?

**Onlineprinters:**

1. Would you grant op.connect at this size, and is op.premium required?
2. Is it REST or XML/FTP?
3. Can one account deliver to AT, FR, NL, IT, ES?
4. Does the "billing country only" rule apply without a VAT ID?
5. Will you pre-clear the designs under § 4.1 and § 9.1 of your terms?

**Stripe:**

1. Would it approve this business type, with the products described as political merchandise?
2. What does the German label on the `submit_type: pay` button say?

---

## 13. Sources (verified 14 November 2026)

**Printers and print APIs**

- Onlineprinters:
  - product page (prices, cutting charge, data notes, "permanent klebend"): https://www.onlineprinters.de/p/eckige-aufkleber-im-freiformat
  - op.connect: https://www.onlineprinters.de/c/lp/op-connect
  - reseller programme: https://www.onlineprinters.de/c/lp/reseller
  - Spanish reseller page: https://www.onlineprinters.es/c/lp/revendedores
  - Germany shipping and country list: https://www.onlineprinters.de/c/versand/versandinformationen/deutschland
  - Switzerland shipping: https://www.onlineprinters.ch/c/versand/versandinformationen/schweiz
  - VAT-ID delivery rule: https://www.onlineprinters.at/c/faq/lieferung-mit-ust-id
  - bleed: https://www.onlineprinters.de/c/faq/was-ist-beschnitt
  - reorder: https://www.onlineprinters.de/c/faq/auftrag-nochmal-bestellen
  - terms: https://www.onlineprinters.de/c/ueber-uns/rechtliche-informationen/agb
  - API host: https://api.pro.onlineprinters.info/docs
  - third-party integration: https://beprint.atlassian.net/wiki/spaces/PL/pages/22479504/Onlineprinters
- Print.com:
  - small stickers: https://www.print.com/en/small-stickers/
  - API docs: https://developer.print.com/reference/introduction
  - order status: https://developer.print.com/reference/order-status.md
  - account: https://knowledge.print.com/helpcenter/en/my-account
  - terms: https://www.print.com/fr/conditions-generales-de-vente/
- FLYERALARM PRO:
  - FAQ: https://flyeralarm.pro/faq/?lang=en
  - API docs: https://rest.flyeralarm-esolutions.com/docs/
  - brochure: https://flyeralarm.pro/wp-content/uploads/media/FA_PRO_Broschuere.pdf
- WIRmachenDRUCK:
  - reseller programme: https://www.wir-machen-druck.de/wiederverkaeufer.html
  - free-size paper stickers: https://www.wir-machen-druck.de/indoor-aufkleber-freie-grosse-guenstig-drucken,category,28427.html
  - data sheet: https://www.wir-machen-druck.de/tpl/manns-partner/media/ddb/druckdatenskizzen/0/Aufkleber_in_freier_Groesse_rechteckig_2.pdf
  - Swiss terms: https://www.wir-machen-druck.ch/cms.htm?c=agb
- Printful:
  - catalogue: https://api.printful.com/products/358
  - shipping: https://www.printful.com/shipping
  - API docs: https://developers.printful.com/docs/
- Printen.eu:
  - developers: https://www.printen.eu/de/developers
  - resellers: https://www.printen.eu/de/wiederverkaeufer
  - shipping: https://www.printen.eu/de/versand
- Other printers and platforms:
  - Expresta: https://www.expresta.eu/service/printing-order-automation-api
  - Helloprint: https://www.helloprint.com/de-de/zulassungskriterien
  - SAXOPRINT: https://www.saxoprint.de/schnittstelle
  - 4you Design: https://shop.4you-design.de/agb-und-kundeninformation
  - Spreadconnect: https://faq.spreadconnect.app/hc/en-us/articles/360020928279-Which-countries-does-Spreadconnect-not-ship-to
  - Spreadshop: https://www.spreadshop.net/products/stickers/
  - Gelato: https://support.gelato.com/en/articles/8996287-what-is-the-product-catalog

**Fulfilment and postage**

- Fulfilment providers:
  - VersandLuchs: https://versandluchs.de/briefversand-fulfillment
  - Fulfillment-Box: https://fulfillment-box.com/de/preise/preis-deutschland/
  - Amazon MCF: https://supplychain.amazon.de/de/preisgestaltung
  - Huboo: https://huboo.com/nl/fulfilment/tarieven/
- Deutsche Post:
  - international letters, documents only: https://www.deutschepost.de/de/b/briefe-ins-ausland.html
  - price list: https://www.deutschepost.de/dam/jcr%3Ac0eb1285-9a22-40b2-8c51-3f70c1a897be/dp-leistungen-und-preise-012026.pdf
  - Warensendung: https://www.deutschepost.de/de/w/warensendung.html
- DHL:
  - Warenpost International rate card: https://www.dhl.de/dam/jcr:0fdd066a-c14f-416d-8f9b-fb72c6421155/dhl-warenpost-international-ratecard-1-082024.pdf
  - international parcels and Päckchen XS: https://www.dhl.de/de/privatkunden/pakete-versenden/weltweit-versenden/preise-international.html
- Swiss Post:
  - B-Post: https://www.post.ch/de/briefe-versenden/briefe-schweiz/b-post-brief
  - import clearance: https://www.post.ch/de/empfangen/importverzollung

**Payments, tax and law**

- Stripe:
  - pricing: https://stripe.com/en-de/pricing
  - Klarna prohibited categories: https://docs.stripe.com/payments/klarna/compliance
  - restricted businesses: https://stripe.com/legal/restricted-businesses
  - API versions: https://docs.stripe.com/upgrades
  - Checkout Session object: https://docs.stripe.com/api/checkout/sessions/object
  - webhook verification: https://docs.stripe.com/webhooks?verify=verify-manually
  - endive change: https://docs.stripe.com/changelog/endive/2026-09-30/remove-payment-method-types-checkout-sessions
- VAT:
  - § 19 UStG: https://www.gesetze-im-internet.de/ustg_1980/__19.html
  - § 3c UStG: https://www.gesetze-im-internet.de/ustg_1980/__3c.html
  - EU OSS: https://vat-one-stop-shop.ec.europa.eu/one-stop-shop_en
- Switzerland:
  - BAZG import VAT: https://www.bazg.admin.ch/de/empfangen-von-briefen-und-paketen
  - ESTV mail-order rule: https://www.estv.admin.ch/de/mwst-versandhandel-und-plattformbesteuerung
- Press law: BayPrG Art. 6–7: https://www.gesetze-bayern.de/Content/Document/BayPrG-6, https://www.gesetze-bayern.de/Content/Document/BayPrG-7
- German civil law (BGB):
  - § 54: https://www.gesetze-im-internet.de/bgb/__54.html
  - § 312g: https://www.gesetze-im-internet.de/bgb/__312g.html
  - § 312j: https://www.gesetze-im-internet.de/bgb/__312j.html
  - § 356a: https://www.gesetze-im-internet.de/bgb/__356a.html
- Imprint, § 5 DDG: https://www.gesetze-im-internet.de/ddg/__5.html
- Product safety (GPSR): https://www.bundesumweltministerium.de/faqs/iiii-eu-produktsicherheitsverordnung-pflichten-der-wirtschaftsakteure-pflichten-im-fernabsatz
- Packaging: https://www.verpackungsregister.org/themen/versand-und-onlinehandel
- Data protection, CJEU C-21/23: https://curia.europa.eu/juris/document/document.jsf?docid=290696&doclang=EN

---

## 14. Implementation plan

**Done (this change):**

- The storefront, checkout, webhook, fulfilment pipeline, provider seam with mock, admin page, schema, launch checklist and tests described in section 9.
- The shop is closed in production and invisible: no link, no sitemap entry, 404.

**Before the first real order, in order:**

1. **Constitute the seller.**
   - Form a registered association or company, or name a person; get a serviceable address.
   - Register with the tax office; open a bank account.
   - Decide Kleinunternehmer or VAT.
   
   → ticks `seller`, `tax`.
2. **Fix the artwork.**
   - Add the imprint (publisher and printer, name and address) to every design.
   - Export print masters to the chosen printer's spec (section 5).
   - Proof the CMYK conversion.
   
   → ticks `stickerImprint`.
3. **Get the supplier answers** in section 12, in writing.
   - Choose the fulfilment house, and the printer for the bulk run.
   - Sign data-processing agreements.
4. **Write the adapter** for the chosen provider (a file in `lib/shop/providers/`).
   - Run `npm run test:shop-pipeline` with it swapped in.
   - Place one real test order in the provider's sandbox or with a test address.
   
   → ticks `supplier`.
5. **Approve the price book** from the written quotes. Set `status: "approved"`, and note the quote references in the commit.
6. **Set up payments.**
   - Stripe account in the seller's name, live webhook at `/api/shop/stripe`.
   - Klarna off; card statement descriptor set; restricted key.
   
   → ticks `payments`.
7. **Publish the legal texts.**
   - Imprint, terms, pre-contract information with the EU warranty notice.
   - Withdrawal notice and model form, and the "Vertrag widerrufen" function.
   - Delivery page; GPSR details on the shop.
   - Settle packaging registration.
   
   → ticks `terms`, `productSafety`, `packaging`.
8. **Rewrite `/privacy` in six languages** for the shop, after deciding the Art. 9 basis. If that basis is explicit consent, add a required consent checkbox to the order form before checkout. → ticks `privacy`.
9. **Translate `content/shop/en.ts`** into the five languages beside it.
10. **Test end to end** in `SHOP_MODE=test` on a preview deployment with Stripe test keys, then switch to `SHOP_MODE=live`.
11. **Link `/shop`** from the Instagram profile, and add it to the sitemap and navigation.

**Later refinements:**

- Prices in CHF and Switzerland as a destination.
- Routing 1,000-sticker orders to print-on-demand.
- Several designs in one order.
- A tracked postage option.

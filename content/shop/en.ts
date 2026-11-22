import type { PluralForms } from "@/lib/format";

/**
 * The sticker shop, in English.
 *
 * English only for now, and that is a decision rather than an omission: the
 * shop is closed until the conditions in `lib/shop/launch.ts` are met, and
 * translating terms of sale and delivery promises that do not yet exist would
 * be translating guesses. `content/shop/index.ts` falls back to this file for
 * every language until the five translations are written beside it, which
 * belongs to the launch, not to the build.
 *
 * Where the stickers are posted from is stated, because it was decided:
 * Austria, by hand (docs/sticker-shop-feasibility.md, section 0). Nothing
 * here names a delivery time or a tax treatment. Each is a fact somebody has
 * to establish first (see the launch checklist), and a plausible sentence
 * about either would be a promise to a paying customer that nobody has made.
 */
export const shopText = {
  meta: {
    eyebrow: "Shop",
    title: "Stickers",
    metaTitle: "Stickers",
    description: "Restore Europa stickers, packed by hand and posted from Austria across Europe.",
    lede: "Pick a design and how many you want. We pack them by hand and post them to you from Austria, across Europe.",
  },

  hero: {
    from: "From {price}",
    posted: "Posted from Austria",
    noAccount: "No account needed",
    /** True by decision, 15 November 2026: what an order earns goes back into the movement. */
    supports: "Every order funds the movement",
    cta: "Choose your stickers",
  },

  how: {
    title: "How it works",
    steps: [
      { title: "Choose", body: "Pick a design, a quantity and the country it goes to. The total is shown before you pay, postage included." },
      { title: "Pay securely", body: "You pay on Stripe's payment page. This site never sees your card and keeps no record of who you are." },
      { title: "Posted to you", body: "Your stickers are packed by hand and posted from Austria. Keep the order page to see when they go out." },
    ],
  },

  test: {
    title: "Test mode",
    body: "Payments here go to Stripe's test environment and nothing is printed or posted. Use Stripe's test card numbers, never a real card.",
  },

  closed: {
    title: "The shop is closed",
    body: "Orders cannot be taken at the moment. Nothing on this page will charge you or send you anything.",
  },

  unavailable: {
    title: "The shop cannot be reached",
    body: "The designs could not be loaded just now. Nothing has been charged. Please try again later.",
  },

  empty: {
    title: "No designs yet",
    body: "There is nothing to order at the moment.",
  },

  /*
   * WIRmachenDRUCK's product sheet, in words a buyer uses: square indoor
   * sticker, 9.8 × 9.8 cm, white 80 g/m² self-adhesive paper, 4/0 CMYK, slit
   * backing, no finish. Nothing here goes beyond that sheet.
   */
  sticker: {
    title: "The sticker",
    /** On the picture of the sticker. */
    size: "9.8 × 9.8 cm",
    facts: ["9.8 × 9.8 cm, square", "Full colour on white sticker paper", "Slit backing, easy to peel"],
    specs: {
      title: "Specifications",
      rows: [
        { label: "Size", value: "9.8 × 9.8 cm, square" },
        { label: "Material", value: "White self-adhesive paper, 80 g/m²" },
        { label: "Print", value: "Full colour (CMYK), front only" },
        { label: "Backing", value: "Slit, so it peels off easily" },
        { label: "Finish", value: "None: no lamination or varnish" },
        { label: "Use", value: "Made for indoors" },
      ],
    },
    delivery: {
      title: "Delivery",
      rows: [
        { label: "From", value: "Austria, packed and posted by hand" },
        { label: "How", value: "Letter post, without tracking" },
        { label: "Postage", value: "By weight, shown in your total before you pay" },
        { label: "Where", value: "The EU and most of Europe; outside the EU, your country's customs may charge on delivery" },
      ],
    },
  },

  form: {
    design: "Design",
    quantity: "How many",
    quantityOption: { one: "{count} sticker", other: "{count} stickers" } satisfies PluralForms,
    /** Under the number on each quantity button: the sticker price divided out, before postage. */
    perSticker: "{price} each",
    country: "Deliver to",
    countryPlaceholder: "Choose a country",
    summaryTitle: "Your order",
    /** In place of the postage before a destination is chosen. */
    postagePending: "Choose a country above",
    stickers: "Stickers",
    delivery: "Postage",
    total: "Total",
    each: "about {price} each",
    secure: "Secure payment with Stripe",
    notDelivered: "This quantity cannot be posted to that country yet.",
    /** Shown when the chosen country is outside the EU's customs territory. */
    customs:
      "This goes through customs. Your country may charge import tax or a handling fee when it is delivered; that is between you and your post office, and is not part of the total here.",
    submit: "Continue to payment",
    submitting: "Opening the payment page…",
    payment:
      "Stripe's page asks for your name, email address and delivery address. This site never sees your card and keeps no record of who you are: the people posting your stickers see your address for this one envelope.",
    privacyLink: "How your details are handled",
  },

  errors: {
    design: "Choose a design.",
    quantity: "Choose how many.",
    country: "Choose a country to deliver to.",
    "not-offered": "That quantity cannot be posted to that country yet.",
  },

  states: {
    throttled: "Too many orders have been started from this connection. Please wait an hour and try again.",
    busy: "The shop is taking a breather after a rush of orders. Please try again in a little while.",
    unavailable: "The payment page could not be opened just now. Nothing has been charged. Please try again later.",
    closed: "The shop has just closed. Nothing has been charged.",
  },

  order: {
    metaTitle: "Your order",
    kicker: "Order",
    missingTitle: "Order not found",
    missingBody:
      "This address does not match an order. If you have just paid, the payment page may still be passing it to us — reload in a minute.",
    keep: "Keep this page's address; we have also emailed it to you. This site does not keep your email address, so this page is how you see your order's progress.",
    design: "Design",
    quantity: "Quantity",
    destination: "Delivered to",
    total: "Paid",
    tracking: "Tracking",
    test: "Test order — nothing will be printed or posted.",
    status: {
      checkout: "Waiting for the payment to be confirmed.",
      expired: "The payment was not completed, so nothing was charged and nothing will be sent.",
      paid: "Paid. Your order is about to be passed on for packing.",
      submitting: "Paid. Your order is being passed on for packing.",
      retry: "Paid. Your order could not be passed on for packing yet; it will be automatically.",
      review: "Paid. Your order needs a moment of a person's attention before it is sent. Nothing more is needed from you.",
      submitted: "Being packed for posting.",
      in_production: "Being packed for posting.",
      shipped: "Posted.",
      delivered: "Delivered.",
      cancelled: "Cancelled. Anything you paid has been or will be refunded to your card.",
    },
  },

  /**
   * The email a buyer gets once Stripe confirms the payment. Their address is
   * read from Stripe for that one send and kept nowhere, like the delivery
   * address. A line in capitals is a heading in the laid-out version, and a
   * label followed by two or more spaces is a row of the order table.
   */
  confirmation: {
    subject: "Your sticker order {reference}",
    intro:
      "Thank you for your order. Your payment has arrived and your stickers are on our packing list.",
    orderHeading: "YOUR ORDER",
    rows: {
      reference: "Order",
      design: "Design",
      quantity: "Quantity",
      destination: "Deliver to",
      stickers: "Stickers",
      postage: "Postage",
      total: "Total paid",
    },
    nextHeading: "WHAT HAPPENS NEXT",
    next: "We pack your stickers by hand and post them from Austria by letter post, without tracking. This page shows when your order has been posted:",
    customs:
      "Your order goes through customs. Your country may charge import tax or a handling fee when it is delivered; that is not part of the total above.",
    test: "This was a test order. Nothing was charged and nothing will be posted.",
    reply:
      "This email was sent automatically and replies to it are not read. If something is wrong with your order, write to us at {contact} and quote {reference}.",
    why: "You are receiving this because you ordered stickers at {shop}. We do not keep your email address and will not write to you again about this order.",
  },

  item: { one: "{count} sticker — {design}", other: "{count} stickers — {design}" } satisfies PluralForms,
  shippingLabel: "Postage",
  /** Shown by Stripe above its address form. Stripe allows up to 1,200 characters. */
  addressNote:
    "Please check your address carefully, especially the house number and postcode. Your stickers go by ordinary letter post without tracking, so a letter to a mistyped address cannot be traced.",
} as const;

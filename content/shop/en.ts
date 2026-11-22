import type { PluralForms } from "@/lib/format";

/**
 * The sticker shop, in English: the source the five translations beside it
 * are typed against.
 *
 * Every promise to a buyer here is one somebody has made: posted from
 * Austria, by hand (docs/sticker-shop-feasibility.md, section 0); within one
 * month while the shop takes pre-orders (decided 22 November 2026). Nothing
 * here names a tax treatment, which is the seller's to state.
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
    preorder: "Pre-order: posted within one month",
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
      /** First row of the delivery card while the shop takes pre-orders. */
      preorderRow: { label: "When", value: "Pre-order: posted within one month of your order" },
    },
  },

  soldOut: {
    title: "Sold out",
    preorderTitle: "No more pre-orders available",
    body: "Every sticker of this print run has been ordered. Nothing can be ordered at the moment.",
  },

  form: {
    design: "Design",
    quantity: "How many",
    quantityOption: { one: "{count} sticker", other: "{count} stickers" } as PluralForms,
    /** Under the number on each quantity button: the sticker price divided out, before postage. */
    perSticker: "{price} each",
    left: "{count} stickers left in this run",
    notEnough: "not enough left",
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
    /** Above the payment button while the shop takes pre-orders. */
    preorder:
      "Pre-order. The stickers are being printed now, and your order is posted within one month of ordering.",
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
    soldout: "There are not enough stickers left for that quantity. Choose fewer. Nothing has been charged.",
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
    preorder: "This is a pre-order: it is posted within one month of the day you ordered.",
    withdrawn:
      "You withdrew from this order on {date}. We refund your payment, including the postage, within 14 days of that day. If the stickers have already reached you, please send them back complete; we may wait until they arrive before refunding.",
    withdrawLink: "Withdraw from this purchase",
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
    preorder: "This is a pre-order. The stickers are being printed now, and your order is posted within one month of today.",
    withdraw: "Changed your mind? You can withdraw from this purchase within 14 days of receiving the stickers, without giving a reason: {withdraw}",
    customs:
      "Your order goes through customs. Your country may charge import tax or a handling fee when it is delivered; that is not part of the total above.",
    test: "This was a test order. Nothing was charged and nothing will be posted.",
    reply:
      "This email was sent automatically and replies to it are not read. If something is wrong with your order, write to us at {contact} and quote {reference}.",
    why: "You are receiving this because you ordered stickers at {shop}. We do not keep your email address and will not write to you again about this order.",
  },

  /**
   * Withdrawing from a purchase: the online function EU consumer law requires
   * of shops since 19 June 2026 (Directive (EU) 2023/2673). It asks for the
   * buyer's name, the order and an email address, shows them back for a
   * second, explicit confirmation, and answers by email with the time it was
   * received. The page's answer is the same whether or not the details match
   * an order, so it cannot be used to test who bought what.
   */
  withdrawal: {
    metaTitle: "Withdraw from a purchase",
    kicker: "Shop",
    title: "Withdraw from your purchase",
    lede: "You can withdraw from a sticker order within 14 days of receiving it, without giving a reason. Fill in the details below, check them, and confirm. We reply by email with the date and time we received it.",
    shopLink: "Changed your mind? Withdraw from a purchase",
    name: "Your name",
    reference: "Order number",
    referenceHint: "It starts with RE- and is in your confirmation email.",
    email: "Email address",
    emailHint: "The one you used when you paid.",
    review: "Continue",
    checkTitle: "Check and confirm",
    checkBody: "You are withdrawing from this purchase:",
    confirm: "Confirm withdrawal",
    change: "Change the details",
    doneTitle: "Withdrawal received",
    doneBody:
      "If these details match an order, your withdrawal is recorded and a confirmation is on its way to that email address, with the date and time we received it. If nothing arrives within an hour, check the order number and email address and try again, or write to us through the contact form.",
    errors: {
      name: "Enter your name.",
      reference: "Enter the order number, which starts with RE-.",
      email: "Enter the email address you ordered with.",
    },
    states: {
      throttled: "Too many attempts from this connection. Please wait an hour and try again.",
      unavailable: "This could not be sent just now. Please try again later, or write to us through the contact form.",
    },
    /** The acknowledgement the law asks for, sent to the address the order was paid with. */
    acknowledgement: {
      subject: "Withdrawal received: order {reference}",
      intro: "We received your withdrawal from order {reference} on {when}.",
      name: "Name given: {name}",
      nextHeading: "WHAT HAPPENS NEXT",
      notPosted: "If your stickers have not been posted yet, they will not be.",
      returns:
        "If they have already reached you, please send them back complete. Write to us through {contact} and we tell you where to send them.",
      refund:
        "We refund your payment, including the postage you paid, within 14 days of today, to the card you paid with. We may wait until the stickers are back before refunding.",
      why: "You are receiving this because a withdrawal was submitted for this order at {shop}. Replies to this email are not read.",
    },
  },

  /**
   * The product-safety details the General Product Safety Regulation asks of a
   * listing. Labels only: the names and addresses come from `structure.ts`.
   */
  safety: {
    title: "Product safety",
    product: "Product",
    productValue: "Sticker, 9.8 × 9.8 cm, white self-adhesive paper, printed in full colour",
    manufacturer: "Manufacturer",
    seller: "Sold by",
  },

  /**
   * The terms of sale, with the withdrawal notice and the model form the law
   * prescribes. `{seller}`, `{email}` and `{phone}` are filled in from
   * `shopSeller` in `structure.ts`. The postal address is given on request,
   * by the operator's decision of 22 November 2026, and is not written here.
   */
  terms: {
    metaTitle: "Terms of sale",
    kicker: "Shop",
    title: "Terms of sale",
    lede: "The terms on which stickers are sold in this shop, with your right to withdraw from a purchase and a form for doing so.",
    updated: "As of 22 November 2026.",
    sections: [
      {
        heading: "1. Who sells",
        paragraphs: [
          "The stickers in this shop are sold by {seller}, a sole trader in Austria. You can reach us by email at {email} or by phone at {phone}. Our postal address is given on request by email.",
        ],
      },
      {
        heading: "2. What these terms cover",
        paragraphs: [
          "These terms apply to every order placed in this shop by a consumer. The description of the stickers on the shop page is part of them.",
        ],
      },
      {
        heading: "3. How the contract is made",
        paragraphs: [
          "On the shop page you choose a design, a quantity and the country of delivery, and see the total, postage included. Continuing to payment takes you to the payment page of our payment provider, Stripe, where you enter your name, email address, delivery address and payment details and can still correct them.",
          "Pressing the pay button there is a binding offer to buy. The contract is made when the payment is confirmed. We then send you a confirmation email with your order number and a link to your order's page.",
        ],
      },
      {
        heading: "4. Prices and payment",
        paragraphs: [
          "All prices are in euros and are what you pay. Postage is shown separately before you pay and is included in the total. We add no further charges.",
          "Outside the European Union, your country's customs may charge import tax or a handling fee on delivery. Those are not part of our price.",
          "You pay on Stripe's payment page with one of the methods offered there. The amount is charged when you order.",
        ],
      },
      {
        heading: "5. Delivery",
        paragraphs: [
          "We post the stickers from Austria by letter post, without tracking, to the address you give on the payment page, in the countries offered on the shop page.",
          "Orders placed while the shop marks them as pre-orders are posted within one month of the day you order. Your order's page shows when it has been posted.",
          "If we cannot deliver an order after all, for example because fewer stickers are printed than expected, we tell you by email and refund the full amount straight away.",
        ],
      },
      {
        heading: "6. Your right to withdraw",
        paragraphs: [
          "You have the right to withdraw from this contract within fourteen days without giving any reason. The withdrawal period ends fourteen days after the day on which you, or someone you name who is not the carrier, receive the stickers.",
          "To withdraw, tell us of your decision by a clear statement. The quickest way is our [withdrawal function][withdraw]. You can also write to {email}, or use the model form below, though you do not have to. It is enough to send your statement before the period ends.",
          "**Effects of withdrawal.** If you withdraw, we refund all payments we received from you, including the standard postage, without undue delay and at the latest within fourteen days of the day we receive your withdrawal. We use the payment method you used, unless we expressly agree otherwise, and you are not charged for the refund. We may withhold the refund until we have the stickers back or you have shown that you sent them, whichever is earlier.",
          "If the stickers have already reached you, send them back to us without undue delay and at the latest within fourteen days of withdrawing. We give you the return address by email when you withdraw. You bear the direct cost of returning them. You are liable for a loss in value of the stickers only if it results from handling them beyond what is needed to establish what they are and how they work, for example if stickers are missing, used or damaged.",
        ],
      },
      {
        heading: "7. If something is wrong",
        paragraphs: [
          "The statutory warranty for goods applies. If stickers arrive damaged, misprinted or not as described, or do not arrive, write to us at {email} with your order number, and we put it right by sending replacements or refunding you.",
        ],
      },
      {
        heading: "8. Applicable law",
        paragraphs: [
          "Austrian law applies, without its rules on conflicts of law. If you are a consumer living in another country, this does not take away the protection of the mandatory law of that country.",
        ],
      },
    ],
    form: {
      heading: "Model withdrawal form",
      intro: "If you want to withdraw from the contract, you can fill in this form and send it to us. You do not have to use it.",
      lines: [
        "To {seller}, {email}:",
        "I/We (*) hereby give notice that I/we (*) withdraw from my/our (*) contract for the purchase of the following goods:",
        "Ordered on (*) / received on (*):",
        "Order number:",
        "Name of consumer(s):",
        "Address of consumer(s):",
        "Signature of consumer(s) (only if this form is sent on paper):",
        "Date:",
      ],
      note: "(*) Delete as appropriate.",
    },
    /** Under the shop's details, and in the footer of the terms' own links. */
    shopLink: "Terms of sale",
    /** Above the payment button. */
    accept: "By continuing to payment you accept our [terms of sale][terms], which include your right to withdraw.",
  },

  item: { one: "{count} sticker — {design}", other: "{count} stickers — {design}" } as PluralForms,
  shippingLabel: "Postage",
  /** Shown by Stripe above its address form. Stripe allows up to 1,200 characters. */
  addressNote:
    "Please check your address carefully, especially the house number and postcode. Your stickers go by ordinary letter post without tracking, so a letter to a mistyped address cannot be traced.",
} as const;

import type { ShopText } from "./index";

/** The sticker shop, in German. Typed against `en.ts`; see its header. */
export const shopText: ShopText = {
  meta: {
    eyebrow: "Shop",
    title: "Sticker",
    metaTitle: "Sticker",
    description: "Restore-Europa-Sticker, von Hand verpackt und aus Österreich in ganz Europa verschickt.",
    lede: "Wählen Sie ein Motiv und die gewünschte Menge. Wir verpacken die Sticker von Hand und schicken sie Ihnen aus Österreich, überallhin in Europa.",
  },

  hero: {
    from: "Ab {price}",
    posted: "Versand aus Österreich",
    noAccount: "Kein Konto nötig",
    supports: "Jede Bestellung finanziert die Bewegung",
    preorder: "Vorbestellung: Versand innerhalb eines Monats",
    cta: "Sticker auswählen",
  },

  how: {
    title: "So funktioniert es",
    steps: [
      { title: "Auswählen", body: "Wählen Sie ein Motiv, eine Menge und das Zielland. Der Gesamtbetrag wird vor der Zahlung angezeigt, Porto inbegriffen." },
      { title: "Sicher bezahlen", body: "Sie bezahlen auf der Zahlungsseite von Stripe. Diese Website sieht Ihre Karte nie und speichert nicht, wer Sie sind." },
      { title: "Zu Ihnen geschickt", body: "Ihre Sticker werden von Hand verpackt und aus Österreich verschickt. Bewahren Sie die Bestellseite auf, um zu sehen, wann sie versandt werden." },
    ],
  },

  test: {
    title: "Testmodus",
    body: "Zahlungen gehen hier an die Testumgebung von Stripe, und nichts wird gedruckt oder verschickt. Verwenden Sie die Testkartennummern von Stripe, niemals eine echte Karte.",
  },

  closed: {
    title: "Der Shop ist geschlossen",
    body: "Derzeit können keine Bestellungen angenommen werden. Nichts auf dieser Seite belastet Sie oder schickt Ihnen etwas.",
  },

  unavailable: {
    title: "Der Shop ist nicht erreichbar",
    body: "Die Motive konnten gerade nicht geladen werden. Es wurde nichts abgebucht. Bitte versuchen Sie es später erneut.",
  },

  empty: {
    title: "Noch keine Motive",
    body: "Derzeit gibt es nichts zu bestellen.",
  },

  sticker: {
    title: "Der Sticker",
    size: "9,8 × 9,8 cm",
    facts: ["9,8 × 9,8 cm, quadratisch", "Vollfarbig auf weißem Stickerpapier", "Geschlitzte Rückseite, leicht abzuziehen"],
    specs: {
      title: "Technische Daten",
      rows: [
        { label: "Größe", value: "9,8 × 9,8 cm, quadratisch" },
        { label: "Material", value: "Weißes selbstklebendes Papier, 80 g/m²" },
        { label: "Druck", value: "Vollfarbig (CMYK), nur Vorderseite" },
        { label: "Rückseite", value: "Geschlitzt, damit er sich leicht abziehen lässt" },
        { label: "Veredelung", value: "Keine: weder Laminierung noch Lack" },
        { label: "Verwendung", value: "Für den Innenbereich gemacht" },
      ],
    },
    delivery: {
      title: "Lieferung",
      rows: [
        { label: "Von", value: "Österreich, von Hand verpackt und verschickt" },
        { label: "Wie", value: "Als Brief, ohne Sendungsverfolgung" },
        { label: "Porto", value: "Nach Gewicht, vor der Zahlung im Gesamtbetrag ausgewiesen" },
        { label: "Wohin", value: "In die EU und den Großteil Europas; außerhalb der EU kann Ihr Land bei der Zustellung Zollabgaben erheben" },
      ],
      preorderRow: { label: "Wann", value: "Vorbestellung: Versand innerhalb eines Monats nach Ihrer Bestellung" },
    },
  },

  soldOut: {
    title: "Ausverkauft",
    preorderTitle: "Keine Vorbestellungen mehr möglich",
    body: "Alle Sticker dieser Auflage sind bestellt. Derzeit kann nichts bestellt werden.",
  },

  form: {
    design: "Motiv",
    quantity: "Wie viele",
    quantityOption: { one: "{count} Sticker", other: "{count} Sticker" },
    perSticker: "{price} pro Stück",
    left: "Noch {count} Sticker aus dieser Auflage",
    notEnough: "nicht genug übrig",
    country: "Lieferung nach",
    countryPlaceholder: "Land auswählen",
    summaryTitle: "Ihre Bestellung",
    postagePending: "Wählen Sie oben ein Land",
    stickers: "Sticker",
    delivery: "Porto",
    total: "Gesamt",
    each: "etwa {price} pro Stück",
    secure: "Sichere Zahlung mit Stripe",
    notDelivered: "Diese Menge kann noch nicht in dieses Land verschickt werden.",
    customs:
      "Diese Sendung geht durch den Zoll. Ihr Land kann bei der Zustellung Einfuhrabgaben oder eine Bearbeitungsgebühr erheben; das betrifft nur Sie und Ihre Post und ist im Gesamtbetrag hier nicht enthalten.",
    preorder:
      "Vorbestellung. Die Sticker werden gerade gedruckt, und Ihre Bestellung wird innerhalb eines Monats nach der Bestellung verschickt.",
    submit: "Weiter zur Zahlung",
    submitting: "Zahlungsseite wird geöffnet …",
    payment:
      "Die Seite von Stripe fragt nach Ihrem Namen, Ihrer E-Mail-Adresse und Ihrer Lieferadresse. Diese Website sieht Ihre Karte nie und speichert nicht, wer Sie sind: Wer Ihre Sticker verschickt, sieht Ihre Adresse nur für diesen einen Umschlag.",
    privacyLink: "Wie mit Ihren Angaben umgegangen wird",
  },

  errors: {
    design: "Wählen Sie ein Motiv.",
    quantity: "Wählen Sie eine Menge.",
    country: "Wählen Sie ein Lieferland.",
    "not-offered": "Diese Menge kann noch nicht in dieses Land verschickt werden.",
  },

  states: {
    throttled: "Von dieser Verbindung wurden zu viele Bestellungen begonnen. Bitte warten Sie eine Stunde und versuchen Sie es dann erneut.",
    busy: "Nach einem Ansturm von Bestellungen legt der Shop eine kurze Pause ein. Bitte versuchen Sie es in Kürze erneut.",
    unavailable: "Die Zahlungsseite konnte gerade nicht geöffnet werden. Es wurde nichts abgebucht. Bitte versuchen Sie es später erneut.",
    closed: "Der Shop wurde soeben geschlossen. Es wurde nichts abgebucht.",
    soldout: "Für diese Menge sind nicht mehr genug Sticker übrig. Bitte wählen Sie weniger. Es wurde nichts berechnet.",
  },

  order: {
    metaTitle: "Ihre Bestellung",
    kicker: "Bestellung",
    missingTitle: "Bestellung nicht gefunden",
    missingBody:
      "Diese Adresse gehört zu keiner Bestellung. Wenn Sie gerade bezahlt haben, übermittelt die Zahlungsseite sie uns möglicherweise noch — laden Sie die Seite in einer Minute neu.",
    keep: "Bewahren Sie die Adresse dieser Seite auf; wir haben sie Ihnen auch per E-Mail geschickt. Diese Website speichert Ihre E-Mail-Adresse nicht, daher sehen Sie den Fortschritt Ihrer Bestellung nur auf dieser Seite.",
    design: "Motiv",
    quantity: "Menge",
    destination: "Geliefert nach",
    total: "Bezahlt",
    tracking: "Sendungsverfolgung",
    test: "Testbestellung — nichts wird gedruckt oder verschickt.",
    preorder: "Dies ist eine Vorbestellung: Sie wird innerhalb eines Monats ab dem Tag Ihrer Bestellung verschickt.",
    withdrawn:
      "Sie haben diese Bestellung am {date} widerrufen. Wir erstatten Ihre Zahlung, einschließlich des Portos, innerhalb von 14 Tagen ab diesem Tag. Wenn die Sticker Sie bereits erreicht haben, senden Sie sie bitte vollständig zurück; wir können mit der Erstattung warten, bis sie bei uns eingetroffen sind.",
    withdrawLink: "Diesen Kauf widerrufen",
    status: {
      checkout: "Die Bestätigung der Zahlung steht noch aus.",
      expired: "Die Zahlung wurde nicht abgeschlossen, daher wurde nichts abgebucht und es wird nichts verschickt.",
      paid: "Bezahlt. Ihre Bestellung wird gleich zum Verpacken weitergegeben.",
      submitting: "Bezahlt. Ihre Bestellung wird zum Verpacken weitergegeben.",
      retry: "Bezahlt. Ihre Bestellung konnte noch nicht zum Verpacken weitergegeben werden; das geschieht automatisch.",
      review: "Bezahlt. Ihre Bestellung muss kurz von einem Menschen geprüft werden, bevor sie verschickt wird. Von Ihnen wird nichts weiter benötigt.",
      submitted: "Wird für den Versand verpackt.",
      in_production: "Wird für den Versand verpackt.",
      shipped: "Verschickt.",
      delivered: "Zugestellt.",
      cancelled: "Storniert. Was Sie bezahlt haben, wurde oder wird auf Ihre Karte zurückerstattet.",
    },
  },

  confirmation: {
    subject: "Ihre Sticker-Bestellung {reference}",
    intro:
      "Vielen Dank für Ihre Bestellung. Ihre Zahlung ist eingegangen, und Ihre Sticker stehen auf unserer Packliste.",
    orderHeading: "IHRE BESTELLUNG",
    rows: {
      reference: "Bestellung",
      design: "Motiv",
      quantity: "Menge",
      destination: "Lieferung nach",
      stickers: "Sticker",
      postage: "Porto",
      total: "Bezahlt gesamt",
    },
    nextHeading: "WIE ES WEITERGEHT",
    next: "Wir verpacken Ihre Sticker von Hand und schicken sie aus Österreich als Brief, ohne Sendungsverfolgung. Diese Seite zeigt, wann Ihre Bestellung verschickt wurde:",
    preorder: "Dies ist eine Vorbestellung. Die Sticker werden gerade gedruckt, und Ihre Bestellung wird innerhalb eines Monats ab heute verschickt.",
    withdraw: "Haben Sie es sich anders überlegt? Sie können innerhalb von 14 Tagen nach Erhalt der Sticker ohne Angabe von Gründen widerrufen: {withdraw}",
    customs:
      "Ihre Bestellung geht durch den Zoll. Ihr Land kann bei der Zustellung Einfuhrabgaben oder eine Bearbeitungsgebühr erheben; diese sind im obigen Gesamtbetrag nicht enthalten.",
    test: "Dies war eine Testbestellung. Es wurde nichts abgebucht, und es wird nichts verschickt.",
    reply:
      "Diese E-Mail wurde automatisch versandt, und Antworten darauf werden nicht gelesen. Wenn mit Ihrer Bestellung etwas nicht stimmt, schreiben Sie uns unter {contact} und geben Sie {reference} an.",
    why: "Sie erhalten diese E-Mail, weil Sie unter {shop} Sticker bestellt haben. Wir speichern Ihre E-Mail-Adresse nicht und schreiben Ihnen zu dieser Bestellung nicht noch einmal.",
  },

  withdrawal: {
    metaTitle: "Einen Kauf widerrufen",
    kicker: "Shop",
    title: "Ihren Kauf widerrufen",
    lede: "Sie können innerhalb von 14 Tagen nach Erhalt eine Sticker-Bestellung ohne Angabe von Gründen widerrufen. Füllen Sie die Angaben unten aus, prüfen Sie sie und bestätigen Sie. Wir antworten per E-Mail mit Datum und Uhrzeit des Eingangs.",
    shopLink: "Es sich anders überlegt? Kauf widerrufen",
    name: "Ihr Name",
    reference: "Bestellnummer",
    referenceHint: "Sie beginnt mit RE- und steht in Ihrer Bestätigungs-E-Mail.",
    email: "E-Mail-Adresse",
    emailHint: "Die Adresse, die Sie bei der Zahlung verwendet haben.",
    review: "Weiter",
    checkTitle: "Prüfen und bestätigen",
    checkBody: "Sie treten von diesem Kauf zurück:",
    confirm: "Widerruf bestätigen",
    change: "Angaben ändern",
    doneTitle: "Widerruf eingegangen",
    doneBody:
      "Wenn diese Angaben zu einer Bestellung passen, ist Ihr Widerruf erfasst, und eine Bestätigung mit Datum und Uhrzeit des Eingangs ist an diese E-Mail-Adresse unterwegs. Wenn innerhalb einer Stunde nichts ankommt, prüfen Sie die Bestellnummer und die E-Mail-Adresse und versuchen Sie es erneut, oder schreiben Sie uns über das Kontaktformular.",
    errors: {
      name: "Geben Sie Ihren Namen ein.",
      reference: "Geben Sie die Bestellnummer ein, die mit RE- beginnt.",
      email: "Geben Sie die E-Mail-Adresse ein, mit der Sie bestellt haben.",
    },
    states: {
      throttled: "Zu viele Versuche von dieser Verbindung. Bitte warten Sie eine Stunde und versuchen Sie es dann erneut.",
      unavailable: "Das konnte gerade nicht gesendet werden. Bitte versuchen Sie es später erneut, oder schreiben Sie uns über das Kontaktformular.",
    },
    acknowledgement: {
      subject: "Widerruf eingegangen: Bestellung {reference}",
      intro: "Ihr Widerruf der Bestellung {reference} ist am {when} bei uns eingegangen.",
      name: "Angegebener Name: {name}",
      nextHeading: "WIE ES WEITERGEHT",
      notPosted: "Wenn Ihre Sticker noch nicht verschickt wurden, werden sie nicht mehr verschickt.",
      returns:
        "Wenn sie Sie bereits erreicht haben, senden Sie sie bitte vollständig zurück. Schreiben Sie uns über {contact}, und wir teilen Ihnen mit, wohin Sie sie schicken sollen.",
      refund:
        "Wir erstatten Ihre Zahlung, einschließlich des von Ihnen bezahlten Portos, innerhalb von 14 Tagen ab heute auf die Karte, mit der Sie bezahlt haben. Wir können mit der Erstattung warten, bis die Sticker wieder bei uns sind.",
      why: "Sie erhalten diese E-Mail, weil unter {shop} ein Widerruf für diese Bestellung eingereicht wurde. Antworten auf diese E-Mail werden nicht gelesen.",
    },
  },

  safety: {
    title: "Produktsicherheit",
    product: "Produkt",
    productValue: "Sticker, 9,8 × 9,8 cm, weißes selbstklebendes Papier, vollfarbig bedruckt",
    manufacturer: "Hersteller",
    seller: "Verkauft von",
  },

  terms: {
    metaTitle: "Allgemeine Geschäftsbedingungen",
    kicker: "Shop",
    title: "Allgemeine Geschäftsbedingungen",
    lede: "Die Bedingungen, zu denen in diesem Shop Sticker verkauft werden, mit Ihrem Recht, einen Kauf zu widerrufen, und einem Formular dafür.",
    updated: "Stand: 22. November 2026.",
    sections: [
      {
        heading: "1. Wer verkauft",
        paragraphs: [
          "Die Sticker in diesem Shop werden von {seller} verkauft, einem Einzelunternehmen in Österreich. Sie erreichen uns per E-Mail unter {email} oder telefonisch unter {phone}. Unsere Postanschrift teilen wir auf Anfrage per E-Mail mit.",
        ],
      },
      {
        heading: "2. Geltungsbereich",
        paragraphs: [
          "Diese Bedingungen gelten für jede Bestellung, die eine Verbraucherin oder ein Verbraucher in diesem Shop aufgibt. Die Beschreibung der Sticker auf der Shopseite ist Teil davon.",
        ],
      },
      {
        heading: "3. Wie der Vertrag zustande kommt",
        paragraphs: [
          "Auf der Shopseite wählen Sie ein Motiv, eine Menge und das Lieferland und sehen den Gesamtbetrag einschließlich Porto. Mit „Weiter zur Zahlung“ gelangen Sie auf die Zahlungsseite unseres Zahlungsdienstleisters Stripe, wo Sie Ihren Namen, Ihre E-Mail-Adresse, Ihre Lieferadresse und Ihre Zahlungsdaten eingeben und noch korrigieren können.",
          "Mit dem Klick auf die Zahlschaltfläche dort geben Sie ein verbindliches Kaufangebot ab. Der Vertrag kommt zustande, wenn die Zahlung bestätigt ist. Wir senden Ihnen dann eine Bestätigungs-E-Mail mit Ihrer Bestellnummer und einem Link zur Seite Ihrer Bestellung.",
        ],
      },
      {
        heading: "4. Preise und Zahlung",
        paragraphs: [
          "Alle Preise sind in Euro angegeben und sind Endpreise. Das Porto wird vor der Zahlung gesondert ausgewiesen und ist im Gesamtbetrag enthalten. Weitere Kosten berechnen wir nicht.",
          "Außerhalb der Europäischen Union kann der Zoll Ihres Landes bei der Zustellung Einfuhrabgaben oder eine Bearbeitungsgebühr erheben. Diese sind nicht Teil unseres Preises.",
          "Sie bezahlen auf der Zahlungsseite von Stripe mit einer der dort angebotenen Zahlungsarten. Der Betrag wird bei der Bestellung belastet.",
        ],
      },
      {
        heading: "5. Lieferung",
        paragraphs: [
          "Wir verschicken die Sticker aus Österreich als Brief, ohne Sendungsverfolgung, an die Adresse, die Sie auf der Zahlungsseite angeben, in die auf der Shopseite angebotenen Länder.",
          "Bestellungen, die aufgegeben werden, solange der Shop sie als Vorbestellungen kennzeichnet, werden innerhalb eines Monats ab dem Tag der Bestellung verschickt. Die Seite Ihrer Bestellung zeigt, wann sie verschickt wurde.",
          "Können wir eine Bestellung doch nicht liefern, etwa weil weniger Sticker gedruckt werden als erwartet, teilen wir Ihnen das per E-Mail mit und erstatten sofort den vollen Betrag.",
        ],
      },
      {
        heading: "6. Ihr Widerrufsrecht",
        paragraphs: [
          "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Sticker in Besitz genommen haben bzw. hat.",
          "Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Am schnellsten geht das über unsere [Widerrufsfunktion][withdraw]. Sie können auch an {email} schreiben oder das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie Ihre Erklärung vor Ablauf der Widerrufsfrist absenden.",
          "**Folgen des Widerrufs.** Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Standard-Lieferkosten, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Sticker wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Sticker zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.",
          "Haben die Sticker Sie bereits erreicht, haben Sie sie unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf unterrichten, an uns zurückzusenden. Die Rücksendeadresse teilen wir Ihnen bei Ihrem Widerruf per E-Mail mit. Sie tragen die unmittelbaren Kosten der Rücksendung. Sie müssen für einen etwaigen Wertverlust der Sticker nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise nicht notwendigen Umgang mit ihnen zurückzuführen ist, etwa wenn Sticker fehlen, verwendet oder beschädigt sind.",
        ],
      },
      {
        heading: "7. Wenn etwas nicht stimmt",
        paragraphs: [
          "Es gilt die gesetzliche Gewährleistung für Waren. Kommen Sticker beschädigt, fehlerhaft gedruckt oder nicht wie beschrieben an, oder kommen sie gar nicht an, schreiben Sie uns unter {email} mit Ihrer Bestellnummer, und wir bringen es in Ordnung, indem wir Ersatz schicken oder Ihnen den Betrag erstatten.",
        ],
      },
      {
        heading: "8. Anwendbares Recht",
        paragraphs: [
          "Es gilt österreichisches Recht unter Ausschluss seiner Verweisungsnormen. Sind Sie Verbraucherin oder Verbraucher mit Wohnsitz in einem anderen Land, wird Ihnen dadurch nicht der Schutz der zwingenden Bestimmungen des Rechts dieses Landes entzogen.",
        ],
      },
    ],
    form: {
      heading: "Muster-Widerrufsformular",
      intro: "Wenn Sie den Vertrag widerrufen wollen, können Sie dieses Formular ausfüllen und an uns zurücksenden. Sie müssen es nicht verwenden.",
      lines: [
        "An {seller}, {email}:",
        "Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren:",
        "Bestellt am (*) / erhalten am (*):",
        "Bestellnummer:",
        "Name des/der Verbraucher(s):",
        "Anschrift des/der Verbraucher(s):",
        "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):",
        "Datum:",
      ],
      note: "(*) Unzutreffendes streichen.",
    },
    shopLink: "Allgemeine Geschäftsbedingungen",
    accept: "Mit „Weiter zur Zahlung“ akzeptieren Sie unsere [Allgemeinen Geschäftsbedingungen][terms], die Ihr Widerrufsrecht enthalten.",
  },

  item: { one: "{count} Sticker — {design}", other: "{count} Sticker — {design}" },
  shippingLabel: "Porto",
  addressNote:
    "Bitte prüfen Sie Ihre Adresse sorgfältig, besonders Hausnummer und Postleitzahl. Ihre Sticker werden als gewöhnlicher Brief ohne Sendungsverfolgung verschickt, daher lässt sich ein Brief an eine falsch eingegebene Adresse nicht nachverfolgen.",
};

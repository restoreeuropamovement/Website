import type { ShopText } from "./index";

/** The sticker shop, in Italian. Typed against `en.ts`; see its header. */
export const shopText: ShopText = {
  meta: {
    eyebrow: "Negozio",
    title: "Adesivi",
    metaTitle: "Adesivi",
    description: "Adesivi di Restore Europa, imballati a mano e spediti dall'Austria in tutta Europa.",
    lede: "Scegli un design e quanti ne vuoi. Li imballiamo a mano e te li spediamo dall'Austria, in tutta Europa.",
  },

  hero: {
    from: "Da {price}",
    posted: "Spediti dall'Austria",
    noAccount: "Nessun account necessario",
    supports: "Ogni ordine finanzia il movimento",
    preorder: "Preordine: spedito entro un mese",
    cta: "Scegli i tuoi adesivi",
  },

  how: {
    title: "Come funziona",
    steps: [
      { title: "Scegli", body: "Scegli un design, una quantità e il paese di destinazione. Il totale ti viene mostrato prima di pagare, spese di spedizione incluse." },
      { title: "Paga in sicurezza", body: "Paghi sulla pagina di pagamento di Stripe. Questo sito non vede mai la tua carta e non conserva alcuna traccia di chi sei." },
      { title: "Spediti a te", body: "I tuoi adesivi vengono imballati a mano e spediti dall'Austria. Conserva la pagina dell'ordine per vedere quando partono." },
    ],
  },

  test: {
    title: "Modalità di prova",
    body: "Qui i pagamenti vanno all'ambiente di prova di Stripe e nulla viene stampato o spedito. Usa i numeri di carta di prova di Stripe, mai una carta vera.",
  },

  closed: {
    title: "Il negozio è chiuso",
    body: "Al momento non è possibile accettare ordini. Nulla in questa pagina ti addebiterà qualcosa o ti invierà qualcosa.",
  },

  unavailable: {
    title: "Il negozio non è raggiungibile",
    body: "Non è stato possibile caricare i design in questo momento. Non è stato addebitato nulla. Riprova più tardi.",
  },

  empty: {
    title: "Ancora nessun design",
    body: "Al momento non c'è nulla da ordinare.",
  },

  sticker: {
    title: "L'adesivo",
    size: "9,8 × 9,8 cm",
    facts: ["9,8 × 9,8 cm, quadrato", "A colori su carta adesiva bianca", "Retro pretagliato, facile da staccare"],
    specs: {
      title: "Caratteristiche",
      rows: [
        { label: "Formato", value: "9,8 × 9,8 cm, quadrato" },
        { label: "Materiale", value: "Carta autoadesiva bianca, 80 g/m²" },
        { label: "Stampa", value: "A colori (CMYK), solo fronte" },
        { label: "Retro", value: "Pretagliato, così si stacca facilmente" },
        { label: "Finitura", value: "Nessuna: né plastificazione né vernice" },
        { label: "Uso", value: "Pensato per interni" },
      ],
    },
    delivery: {
      title: "Consegna",
      rows: [
        { label: "Da", value: "Austria, imballato e spedito a mano" },
        { label: "Come", value: "Posta ordinaria, senza tracciamento" },
        { label: "Spedizione", value: "In base al peso, indicata nel totale prima di pagare" },
        { label: "Dove", value: "L'UE e gran parte dell'Europa; fuori dall'UE, la dogana del tuo paese può applicare oneri alla consegna" },
      ],
      preorderRow: { label: "Quando", value: "Preordine: spedito entro un mese dal tuo ordine" },
    },
  },

  form: {
    design: "Design",
    quantity: "Quanti",
    quantityOption: { one: "{count} adesivo", other: "{count} adesivi" },
    perSticker: "{price} l'uno",
    country: "Consegna in",
    countryPlaceholder: "Scegli un paese",
    summaryTitle: "Il tuo ordine",
    postagePending: "Scegli un paese qui sopra",
    stickers: "Adesivi",
    delivery: "Spese di spedizione",
    total: "Totale",
    each: "circa {price} l'uno",
    secure: "Pagamento sicuro con Stripe",
    notDelivered: "Questa quantità non può ancora essere spedita in quel paese.",
    customs:
      "Questo ordine passa per la dogana. Il tuo paese può applicare un'imposta di importazione o una commissione di gestione alla consegna; la questione riguarda te e il tuo ufficio postale e non fa parte del totale indicato qui.",
    preorder:
      "Preordine. Gli adesivi sono in stampa adesso e il tuo ordine viene spedito entro un mese dall'ordine.",
    submit: "Procedi al pagamento",
    submitting: "Apertura della pagina di pagamento…",
    payment:
      "La pagina di Stripe chiede il tuo nome, il tuo indirizzo email e l'indirizzo di consegna. Questo sito non vede mai la tua carta e non conserva alcuna traccia di chi sei: chi spedisce i tuoi adesivi vede il tuo indirizzo solo per questa busta.",
    privacyLink: "Come vengono trattati i tuoi dati",
  },

  errors: {
    design: "Scegli un design.",
    quantity: "Scegli quanti.",
    country: "Scegli un paese di consegna.",
    "not-offered": "Quella quantità non può ancora essere spedita in quel paese.",
  },

  states: {
    throttled: "Da questa connessione sono stati avviati troppi ordini. Attendi un'ora e riprova.",
    busy: "Il negozio si sta riprendendo da un'ondata di ordini. Riprova tra poco.",
    unavailable: "Non è stato possibile aprire la pagina di pagamento in questo momento. Non è stato addebitato nulla. Riprova più tardi.",
    closed: "Il negozio ha appena chiuso. Non è stato addebitato nulla.",
  },

  order: {
    metaTitle: "Il tuo ordine",
    kicker: "Ordine",
    missingTitle: "Ordine non trovato",
    missingBody:
      "Questo indirizzo non corrisponde a nessun ordine. Se hai appena pagato, la pagina di pagamento potrebbe non avercelo ancora trasmesso: ricarica tra un minuto.",
    keep: "Conserva l'indirizzo di questa pagina; te lo abbiamo anche inviato per email. Questo sito non conserva il tuo indirizzo email, quindi è da questa pagina che segui l'avanzamento del tuo ordine.",
    design: "Design",
    quantity: "Quantità",
    destination: "Consegna in",
    total: "Pagato",
    tracking: "Tracciamento",
    test: "Ordine di prova: nulla verrà stampato o spedito.",
    preorder: "Questo è un preordine: viene spedito entro un mese dal giorno in cui hai ordinato.",
    withdrawn:
      "Hai receduto da questo ordine il {date}. Ti rimborsiamo il pagamento, comprese le spese di spedizione, entro 14 giorni da quel giorno. Se gli adesivi ti sono già arrivati, rispediscili completi; potremmo attendere che arrivino prima di rimborsarti.",
    withdrawLink: "Recedi da questo acquisto",
    status: {
      checkout: "In attesa della conferma del pagamento.",
      expired: "Il pagamento non è stato completato, quindi non è stato addebitato nulla e non verrà spedito nulla.",
      paid: "Pagato. Il tuo ordine sta per essere passato all'imballaggio.",
      submitting: "Pagato. Il tuo ordine viene passato all'imballaggio.",
      retry: "Pagato. Il tuo ordine non ha ancora potuto essere passato all'imballaggio; lo sarà automaticamente.",
      review: "Pagato. Il tuo ordine richiede un momento di attenzione da parte di una persona prima di essere spedito. Da parte tua non serve altro.",
      submitted: "In imballaggio per la spedizione.",
      in_production: "In imballaggio per la spedizione.",
      shipped: "Spedito.",
      delivered: "Consegnato.",
      cancelled: "Annullato. Quanto hai pagato è stato o sarà rimborsato sulla tua carta.",
    },
  },

  confirmation: {
    subject: "Il tuo ordine di adesivi {reference}",
    intro:
      "Grazie per il tuo ordine. Il tuo pagamento è arrivato e i tuoi adesivi sono nella nostra lista di imballaggio.",
    orderHeading: "IL TUO ORDINE",
    rows: {
      reference: "Ordine",
      design: "Design",
      quantity: "Quantità",
      destination: "Consegna in",
      stickers: "Adesivi",
      postage: "Spedizione",
      total: "Totale pagato",
    },
    nextHeading: "COSA SUCCEDE ORA",
    next: "Imballiamo i tuoi adesivi a mano e li spediamo dall'Austria per posta ordinaria, senza tracciamento. Questa pagina mostra quando il tuo ordine è stato spedito:",
    preorder: "Questo è un preordine. Gli adesivi sono in stampa adesso e il tuo ordine viene spedito entro un mese da oggi.",
    withdraw: "Hai cambiato idea? Puoi recedere da questo acquisto entro 14 giorni dal ricevimento degli adesivi, senza indicarne il motivo: {withdraw}",
    customs:
      "Il tuo ordine passa per la dogana. Il tuo paese può applicare un'imposta di importazione o una commissione di gestione alla consegna; non fa parte del totale indicato sopra.",
    test: "Questo era un ordine di prova. Non è stato addebitato nulla e non verrà spedito nulla.",
    reply:
      "Questa email è stata inviata automaticamente e le risposte non vengono lette. Se qualcosa non va nel tuo ordine, scrivici a {contact} indicando {reference}.",
    why: "Ricevi questa email perché hai ordinato adesivi su {shop}. Non conserviamo il tuo indirizzo email e non ti scriveremo più riguardo a questo ordine.",
  },

  withdrawal: {
    metaTitle: "Recedere da un acquisto",
    kicker: "Negozio",
    title: "Recedi dal tuo acquisto",
    lede: "Puoi recedere da un ordine di adesivi entro 14 giorni dal ricevimento, senza indicarne il motivo. Compila i dati qui sotto, controllali e conferma. Ti rispondiamo per email con la data e l'ora in cui lo abbiamo ricevuto.",
    shopLink: "Hai cambiato idea? Recedi da un acquisto",
    name: "Il tuo nome",
    reference: "Numero d'ordine",
    referenceHint: "Inizia con RE- e si trova nella tua email di conferma.",
    email: "Indirizzo email",
    emailHint: "Quello che hai usato per pagare.",
    review: "Continua",
    checkTitle: "Controlla e conferma",
    checkBody: "Stai recedendo da questo acquisto:",
    confirm: "Conferma il recesso",
    change: "Modifica i dati",
    doneTitle: "Recesso ricevuto",
    doneBody:
      "Se questi dati corrispondono a un ordine, il tuo recesso è registrato e una conferma è in arrivo a quell'indirizzo email, con la data e l'ora in cui lo abbiamo ricevuto. Se entro un'ora non arriva nulla, controlla il numero d'ordine e l'indirizzo email e riprova, oppure scrivici tramite il modulo di contatto.",
    errors: {
      name: "Inserisci il tuo nome.",
      reference: "Inserisci il numero d'ordine, che inizia con RE-.",
      email: "Inserisci l'indirizzo email con cui hai ordinato.",
    },
    states: {
      throttled: "Troppi tentativi da questa connessione. Attendi un'ora e riprova.",
      unavailable: "Non è stato possibile inviarlo in questo momento. Riprova più tardi, oppure scrivici tramite il modulo di contatto.",
    },
    acknowledgement: {
      subject: "Recesso ricevuto: ordine {reference}",
      intro: "Abbiamo ricevuto il tuo recesso dall'ordine {reference} il {when}.",
      name: "Nome indicato: {name}",
      nextHeading: "COSA SUCCEDE ORA",
      notPosted: "Se i tuoi adesivi non sono ancora stati spediti, non lo saranno.",
      returns:
        "Se ti sono già arrivati, rispediscili completi. Scrivici tramite {contact} e ti diremo dove inviarli.",
      refund:
        "Ti rimborsiamo il pagamento, comprese le spese di spedizione che hai pagato, entro 14 giorni da oggi, sulla carta con cui hai pagato. Potremmo attendere che gli adesivi siano tornati prima di rimborsarti.",
      why: "Ricevi questa email perché su {shop} è stato inviato un recesso per questo ordine. Le risposte a questa email non vengono lette.",
    },
  },

  item: { one: "{count} adesivo — {design}", other: "{count} adesivi — {design}" },
  shippingLabel: "Spese di spedizione",
  addressNote:
    "Controlla attentamente il tuo indirizzo, in particolare il numero civico e il CAP. I tuoi adesivi viaggiano per posta ordinaria senza tracciamento, quindi una lettera inviata a un indirizzo scritto male non può essere rintracciata.",
};

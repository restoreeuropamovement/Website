import type { WingsText } from "./index";

export const wingsText: WingsText = {
  meta: {
    eyebrow: "Organizzazione",
    title: "Una sezione in ogni nazione europea.",
    metaTitle: "Sezioni nazionali",
    lede: "Restore Europa è organizzata come un movimento di sezioni nazionali e non come un unico partito continentale. Ogni nazione porta la propria — responsabile verso chi vi abita, e verso nessuno all'estero.",
    description:
      "Restore Europa è organizzata come un movimento di sezioni nazionali — una per ogni nazione europea, ciascuna responsabile verso i propri iscritti e titolare soltanto di ciò che i suoi circoli e le sue regioni non possono tenere.",
    intro: [
      {
        type: "lead",
        text: "Il nostro programma sostiene che nulla debba essere governato a un livello superiore quando può essere governato con competenza a uno inferiore. Un movimento che invocasse la sussidiarietà e poi si organizzasse come un unico corpo europeo indifferenziato non meriterebbe di essere creduto.",
      },
      {
        type: "paragraph",
        text: "Il movimento è dunque costruito al contrario. La sezione nazionale è il livello in cui il lavoro politico avviene davvero: porta il programma nelle condizioni di un paese, si presenta alle elezioni secondo la legge di quel paese, ha uno statuto proprio e risponde ai propri iscritti.",
      },
      {
        type: "paragraph",
        text: "Ciò che le sezioni hanno in comune è il [manifesto][manifesto] e i [principi][principles] che ne derivano. Ciò che non hanno in comune è un unico modello di politica, perché le condizioni del Portogallo e quelle dell'Estonia non sono le stesse condizioni.",
      },
    ],
    note: "Le sezioni stanno nascendo in tutto il continente. Se vuoi aiutare ad avviare quella del paese in cui vivi, dillo tramite «Partecipa» — in questa fase è la cosa più utile che chiunque possa fare per il movimento.",
    mapLabel:
      "Una carta dell'Europa in cui le quarantasette nazioni elencate in questa pagina si distinguono dalle terre circostanti.",
    mapCaption:
      "Le nazioni evidenziate qui sono le quarantasette elencate sotto. Essere sulla carta significa che il movimento si organizza attorno a quella nazione, non che la sua sezione sia costituita o attiva.",
    mapHint: "Scegli una nazione sulla carta per aprire la sua sezione.",
  },

  regions: {
    western: "Europa occidentale",
    northern: "Europa settentrionale",
    southern: "Europa meridionale",
    "central-eastern": "Europa centrale e orientale",
  },

  countries: {
    albania: "Albania",
    andorra: "Andorra",
    austria: "Austria",
    belgium: "Belgio",
    "bosnia-and-herzegovina": "Bosnia ed Erzegovina",
    bulgaria: "Bulgaria",
    croatia: "Croazia",
    cyprus: "Cipro",
    czechia: "Cechia",
    denmark: "Danimarca",
    england: "Inghilterra",
    estonia: "Estonia",
    finland: "Finlandia",
    france: "Francia",
    germany: "Germania",
    greece: "Grecia",
    hungary: "Ungheria",
    iceland: "Islanda",
    ireland: "Irlanda",
    italy: "Italia",
    kosovo: "Kosovo",
    latvia: "Lettonia",
    liechtenstein: "Liechtenstein",
    lithuania: "Lituania",
    luxembourg: "Lussemburgo",
    malta: "Malta",
    moldova: "Moldova",
    monaco: "Monaco",
    montenegro: "Montenegro",
    netherlands: "Paesi Bassi",
    "north-macedonia": "Macedonia del Nord",
    "northern-ireland": "Irlanda del Nord",
    norway: "Norvegia",
    poland: "Polonia",
    portugal: "Portogallo",
    romania: "Romania",
    russia: "Russia",
    "san-marino": "San Marino",
    scotland: "Scozia",
    serbia: "Serbia",
    slovakia: "Slovacchia",
    slovenia: "Slovenia",
    spain: "Spagna",
    sweden: "Svezia",
    switzerland: "Svizzera",
    ukraine: "Ucraina",
    wales: "Galles",
  },

  index: {
    nationCount: { one: "{count} nazione", other: "{count} nazioni" },
    closingTitle: "{count} nazioni. Una sola eredità.",
    closingBody:
      "Ogni sezione in questa pagina è un luogo dove il lavoro deve essere fatto da chi vi abita. Se è lì che abiti, il movimento ha bisogno di te più che di un altro lettore.",
    getInvolved: "Partecipa",
    howWeOrganise: "Come ci organizziamo",
  },

  wing: {
    backLabel: "Sezioni nazionali",
    kicker: "Sezione nazionale",
    lead: "La sezione in {country} è il livello nazionale di Restore Europa — l'organo che porta il nostro programma nelle condizioni politiche proprie di {country}, e il livello in cui gli iscritti di quel paese decidono come perseguirlo.",
    body: [
      {
        type: "paragraph",
        text: "Una sezione nazionale non è una filiale che riceve istruzioni. Ha un proprio statuto, sceglie i propri candidati, fissa le proprie priorità all'interno del programma comune e risponde ai propri iscritti anziché a un organo esterno al paese.",
      },
      {
        type: "paragraph",
        text: "Ciò che non fa è decidere materie che appartengono a un corpo più piccolo. Dove un circolo può fare il lavoro, il lavoro appartiene al circolo. La stessa misura che il movimento chiede allo Stato, la chiede prima a sé stesso.",
      },
    ],
    metaTitle: "{country} — Sezione nazionale",
    metaDescription:
      "La sezione di Restore Europa in {country}: il livello nazionale del movimento, di cosa risponde e come aiutare a costituirla.",
    ogTitle: "Restore Europa {country} — Sezione nazionale",
    ogDescription: "Il livello nazionale di Restore Europa in {country}.",
    notFound: "Sezione non trovata",
    remitHeading: "Di cosa risponde la sezione",
    remitLede:
      "Le stesse sei responsabilità in ogni nazione. Come vengano assolte spetta agli iscritti in {country}.",
    takePartHeading: "Aiuta a costituire la sezione in {country}.",
    takePartBody:
      "Una sezione nazionale la costruiscono le persone che vivono nelle condizioni che essa esiste per cambiare. Dicci cosa puoi fare — organizzare, scrivere, mettere a disposizione una competenza professionale, o semplicemente farti contare.",
    getInvolved: "Partecipa",
    contact: "Contatti",
    neighboursHeading: "Altre sezioni in {region}",
  },

  chain: {
    caption: "Dove si colloca la sezione",
    footnote:
      "Da leggere dal basso: un livello assume solo ciò che quello sottostante non può tenere con competenza.",
    nationalLabel: "{layer} — {country}",
  },

  layers: {
    chapter: {
      label: "Circolo locale",
      note: "Il comune o il quartiere. Riunioni, lavoro politico locale e scelta dei candidati dove i circoli sono costituiti.",
    },
    regional: {
      label: "Coordinamento regionale",
      note: "Sostegno tra circoli e organizzazione condivisa. Nessuna competenza che un circolo possa tenere da sé.",
    },
    national: {
      label: "Sezione nazionale",
      note: "Statuto, programma, conformità alla legge nazionale sui partiti e sulle elezioni, e candidature nazionali.",
    },
    european: {
      label: "Movimento europeo",
      note: "Solo ciò che le nazioni davvero non possono fare separatamente: difesa, frontiere, infrastrutture strategiche, scienza, energia.",
    },
  },

  remit: {
    programme: {
      term: "Il programma nel contesto",
      description:
        "Applicare il manifesto alle condizioni reali del paese — il mercato della casa, la demografia, l'industria, il paesaggio — senza alterare ciò che il movimento tiene in comune.",
    },
    elections: {
      term: "Elezioni e candidati",
      description:
        "Registrazione, scelta dei candidati e partecipazione alle elezioni secondo la legge nazionale sui partiti e sulle elezioni, in qualunque forma tale legge assuma.",
    },
    statutes: {
      term: "Statuto e conformità",
      description:
        "Il proprio statuto, il registro degli iscritti, i conti e gli obblighi di rendiconto, pubblicati nel paese in cui opera.",
    },
    chapters: {
      term: "Circoli e regioni",
      description:
        "Costituire circoli locali, sostenere il coordinamento regionale e resistere alla tentazione di assorbire ciò che l'uno o l'altro può fare da sé.",
    },
    language: {
      term: "Lingua e pubblicazione",
      description:
        "Produrre e mantenere il testo di riferimento dei nostri documenti nella lingua nazionale. Le traduzioni sono responsabilità della sezione e non vengono pubblicate finché non sono buone.",
    },
    europe: {
      term: "Rappresentanza in Europa",
      description:
        "Parlare per i propri iscritti dentro il movimento più ampio e cooperare con le altre sezioni sulle materie che lo richiedono davvero.",
    },
  },
};

import type { ContentBlock } from "@/lib/content-types";
import type { HomeContent } from "./index";

export const home: HomeContent = {
  hero: {
    headline: "L'Europa merita di essere ereditata.",
    subheadline: "Per una civiltà cristiana, europea e a misura d'uomo.",
    primaryCta: { label: "Leggi i nostri principi", href: "/principles" },
    secondaryCta: { label: "Leggi il Manifesto", href: "/manifesto" },
  },

  philosophy: {
    eyebrow: "La questione centrale",
    statement: ["L'economia esiste per l'uomo.", "L'uomo non esiste per l'economia."],
    body: [
      {
        type: "lead",
        text: "I sistemi politici ed economici sono strumenti. Esistono per rendere possibile una vita umana buona — non il contrario.",
      },
      {
        type: "paragraph",
        text: "Una civiltà non si misura soltanto da ciò che produce. Il prodotto interno lordo, i consumi, la produttività, l'efficienza amministrativa e la capacità tecnologica descrivono i mezzi di una società. Non dicono quasi nulla sul fatto che le persone che vi abitano possano crescere una famiglia, conservare una casa, conoscere i propri vicini, esercitare un mestiere o riposare.",
      },
      {
        type: "paragraph",
        text: "Quando quei mezzi vengono trattati come fini, le istituzioni che tengono insieme la vita ordinaria sono silenziosamente smantellate per servirli. Non è progresso. È un trasferimento di finalità dalla persona al sistema.",
      },
    ] satisfies readonly ContentBlock[],
    requirements: {
      title: "Gli esseri umani hanno bisogno di tempo e di spazio per",
      items: [
        "Famiglia",
        "Amicizia",
        "Fede",
        "Comunità",
        "Natura",
        "Studio",
        "Artigianato",
        "Bellezza",
        "Riposo",
      ],
    },
    reductions: {
      title: "Una civiltà non si riduce a",
      items: [
        "Prodotto interno lordo",
        "Consumi",
        "Produttività",
        "Efficienza amministrativa",
        "Capacità tecnologica",
      ],
    },
  },

  principles: {
    title: "Ciò in cui crediamo, detto in breve.",
    allLabel: "Tutti e sedici i principi",
    readFull: "leggi il principio per intero",
    items: [
      {
        number: "01",
        title: "Famiglia e vita umana",
        statement:
          "La società deve rendere materialmente possibili la formazione di una famiglia, la genitorialità e una vita umana dotata di senso.",
        href: "/principles#family",
      },
      {
        number: "02",
        title: "Nazione e continuità",
        statement:
          "Le nazioni europee hanno il legittimo diritto di preservare la propria identità storica, la propria cultura e la propria continuità.",
        href: "/principles#nation-and-continuity",
      },
      {
        number: "03",
        title: "Proprietà e indipendenza economica",
        statement:
          "Una società libera richiede una proprietà largamente diffusa, non una dipendenza permanente da un piccolo numero di istituzioni.",
        href: "/principles#property",
      },
      {
        number: "04",
        title: "Tecnologia a misura d'uomo",
        statement:
          "La tecnologia deve rafforzare la competenza umana, l'autonomia e la comunità, non riorganizzare la società attorno alla necessità tecnologica.",
        href: "/principles#technology",
      },
      {
        number: "05",
        title: "Custodia e bellezza",
        statement:
          "La terra, l'architettura e la natura sono eredità da coltivare, proteggere e trasmettere.",
        href: "/principles#environment",
      },
      {
        number: "06",
        title: "Autorità e sussidiarietà",
        statement: "L'autorità politica deve essere esercitata al livello competente più basso.",
        href: "/principles#subsidiarity",
      },
    ],
  },

  lifeAndWork: {
    eyebrow: "Lavoro e vita",
    statement: "Non siamo stati creati per lavorare fino alla morte.",
    body: [
      {
        type: "lead",
        text: "Il lavoro possiede una dignità reale. Attraverso di esso le persone acquisiscono competenza, producono cose utili, mantengono una famiglia e prendono parte alla vita di una comunità.",
      },
      {
        type: "paragraph",
        text: "Ma il lavoro non è lo scopo totale dell'esistenza umana. Un sistema economico è fatto per fornire la base materiale di una vita — non per consumare la vita che era stato costruito per sostenere.",
      },
      {
        type: "paragraph",
        text: "Una società ha perso l'orientamento quando le persone comuni devono cedere quasi tutte le ore di veglia soltanto per assicurarsi una casa e da mangiare; quando i genitori vedono di rado i propri figli; quando le comunità si svuotano perché tutti sono esausti.",
      },
    ] satisfies readonly ContentBlock[],
    diagram: {
      top: "Lavoro",
      middle: "sostiene",
      bottom: "Vita",
      separator: ": ",
      orbit: ["famiglia", "amicizia", "fede", "comunità", "natura", "studio", "mestiere", "riposo"],
    },
    outcome: {
      title: "Che cosa dovrebbe comprare la produttività",
      lead: "Gli incrementi di ciò che una società è in grado di produrre dovrebbero comparire da qualche parte nella vita di chi lo produce.",
      items: [
        "Maggiore sicurezza di fronte alle disgrazie ordinarie",
        "Un tempo libero che sia davvero proprio",
        "Tempo con i figli e con i genitori",
        "Autonomia nell'organizzazione della propria vita lavorativa",
        "Indipendenza dal debito permanente e dalla dipendenza",
      ],
    },
  },

  economicOrder: {
    eyebrow: "Ordine economico",
    statement: "Mercati senza culto del mercato.",
    body: [
      {
        type: "lead",
        text: "La proprietà privata è legittima. L'impresa è legittima. Il profitto è legittimo. Il successo economico è legittimo.",
      },
      {
        type: "paragraph",
        text: "Nessuna di queste cose è il fine più alto di una società. Le istituzioni economiche sono indispensabili e devono restare subordinate al bene comune — che non è un vincolo imposto all'impresa dall'esterno, ma la ragione stessa per cui vale la pena proteggerla.",
      },
      {
        type: "paragraph",
        text: "Non è una posizione contro le imprese. È una posizione contro il dominio: contro il punto in cui un mercato cessa di essere un mezzo di scambio fra molti partecipanti e diventa uno strumento di controllo nelle mani di pochi.",
      },
    ] satisfies readonly ContentBlock[],
    pillars: [
      {
        title: "Impresa",
        lead: "Ciò che sosteniamo",
        items: [
          "Imprenditorialità",
          "Investimento produttivo",
          "Imprese familiari",
          "Mestieri indipendenti",
          "Piccole e medie imprese",
        ],
      },
      {
        title: "Proprietà",
        lead: "Ciò che allarghiamo",
        items: [
          "Proprietà della casa",
          "Cooperative",
          "Azionariato dei lavoratori",
          "Aziende agricole familiari",
          "Banche locali e regionali",
          "Una proprietà del capitale più diffusa",
        ],
      },
      {
        title: "Limiti",
        lead: "Ciò che conteniamo",
        items: [
          "Concentrazione monopolistica",
          "Cattura del regolatore",
          "Estrazione finanziaria",
          "Mercati immobiliari speculativi",
          "Dominio delle grandi imprese sulla politica",
        ],
      },
    ],
    key: "L'economia esiste per la persona, la famiglia e la comunità.",
  },

  technology: {
    eyebrow: "Tecnologia",
    statement: "La macchina deve adattarsi all'uomo.",
    body: [
      {
        type: "lead",
        text: "Restore Europa non è contro la tecnologia. Rifiutiamo l'inevitabilità tecnologica — l'assunto secondo cui tutto ciò che può essere costruito debba essere adottato, e tutto ciò che accresce l'efficienza debba contare come progresso.",
      },
      {
        type: "paragraph",
        text: "Una tecnologia introdotta come facoltativa può diventare economicamente necessaria. Ciò che diventa necessario rimodella le istituzioni, e le istituzioni riorganizzano poi la società attorno alle esigenze della tecnologia. Al termine di questa sequenza, sono le persone ad adattarsi alla macchina.",
      },
      {
        type: "paragraph",
        text: "Ogni tecnologia va giudicata per ciò che fa all'autonomia umana, alla vita familiare, alla comunità, alla riservatezza, al lavoro dotato di senso, alla competenza umana e al decentramento politico.",
      },
    ] satisfies readonly ContentBlock[],
    liberates: {
      title: "La tecnologia che libera",
      items: [
        "Medicina",
        "Igiene pubblica",
        "Ingegneria",
        "Scoperta scientifica",
        "Strumenti utili",
        "Automazione dei lavori pericolosi",
      ],
    },
    dominates: {
      title: "La tecnologia che domina",
      items: [
        "Sorveglianza di massa",
        "Manipolazione dell'attenzione",
        "Dipendenza digitale forzata",
        "Controllo algoritmico",
        "Eliminazione non necessaria della capacità umana di agire",
        "Sistemi che rendono impossibile la partecipazione senza una totale dipendenza tecnologica",
      ],
    },
    closing: ["Non ci opponiamo alla tecnologia.", "Ci opponiamo al dominio tecnologico."],
  },

  stewardship: {
    eyebrow: "Custodia",
    title: "Custodia",
    body: [
      {
        type: "lead",
        text: "Le foreste, i terreni agricoli, i fiumi, le montagne, le coste, la biodiversità e gli insediamenti storici sono beni ereditati. Sono stati ricevuti da persone che non ci sono più e sono dovuti a persone che non sono ancora nate.",
      },
      {
        type: "paragraph",
        text: "Questo li rende qualcosa di diverso da merci usa e getta. Una generazione può servirsene, e deve mantenerli; non ne è proprietaria assoluta.",
      },
      {
        type: "paragraph",
        text: "Non è un discorso che tratta l'umanità come una piaga per il mondo naturale, né uno che consideri accettabile qualunque distruzione purché aumenti la produzione di breve periodo. L'uomo appartiene alla natura — come suo custode, responsabile di ciò che lascia dietro di sé.",
      },
    ] satisfies readonly ContentBlock[],
    categoriesTitle: "Ciò che è tenuto in custodia",
    categories: [
      { title: "Foreste", note: "Selvicoltura responsabile e turni lunghi." },
      { title: "Agricoltura", note: "Suoli sani e agricoltura familiare." },
      { title: "Acqua", note: "Fiumi, falde e coste puliti." },
      { title: "Biodiversità", note: "Habitat mantenuti intatti, non soltanto catalogati." },
      { title: "Paesaggio", note: "Forme di insediamento che rispettano il territorio." },
      { title: "Architettura", note: "Costruire per generazioni, non per cicli." },
      { title: "Produzione regionale", note: "Filiere che una regione può vedere." },
      { title: "Durata e riparazione", note: "Cose fatte per essere riparate." },
    ],
  },

  europe: {
    eyebrow: "Europa",
    title: "Un'Europa di nazioni.",
    subtitle: "Cooperazione senza omologazione.",
    nations: [
      "La Polonia deve restare riconoscibilmente polacca.",
      "L'Italia deve restare riconoscibilmente italiana.",
      "La Francia deve restare riconoscibilmente francese.",
    ],
    together: "E insieme restano europee.",
    body: [
      {
        type: "lead",
        text: "Il principio che deve governare l'organizzazione politica europea è la sussidiarietà: nulla va deciso a un livello più alto quando può essere deciso con competenza a un livello più basso.",
      },
      {
        type: "paragraph",
        text: "Il comune non deve cedere senza necessità alla regione, la regione alla nazione, né la nazione alle istituzioni continentali. Dove un corpo più piccolo sa svolgere bene il compito, il compito gli appartiene — non come comodità amministrativa, ma come condizione della libertà politica.",
      },
      {
        type: "paragraph",
        text: "Resta comunque moltissimo che gli europei possono fare soltanto insieme. L'identità nazionale e locale conserva un significato politico proprio perché la cooperazione è circoscritta alle materie che la richiedono davvero.",
      },
    ] satisfies readonly ContentBlock[],
    cooperation: {
      title: "Gli ambiti propri della cooperazione europea",
      items: [
        "Difesa",
        "Infrastrutture strategiche",
        "Confini",
        "Scienza",
        "Tutela dell'ambiente",
        "Medicina",
        "Resilienza energetica",
        "Industria strategica",
      ],
    },
  },

  politicalCulture: {
    eyebrow: "Cultura politica",
    statement: "Il Paese prima del partito.",
    body: [
      {
        type: "lead",
        text: "Il disaccordo politico è necessario. La guerra di parte permanente non lo è.",
      },
      {
        type: "paragraph",
        text: "Quando sono in gioco gli interessi durevoli di una nazione e del suo popolo — la sicurezza nazionale, le infrastrutture critiche, la stabilità demografica, la tutela delle famiglie, la continuità costituzionale — i movimenti politici devono essere capaci di cooperare al di là degli schieramenti di partito.",
      },
      {
        type: "paragraph",
        text: "Lo scopo di un partito politico non è semplicemente sconfiggere un altro partito. Il suo scopo è servire la comunità politica. L'opposizione è necessaria; l'opposizione fine a sé stessa è corrosiva.",
      },
    ] satisfies readonly ContentBlock[],
    hierarchy: [
      { label: "Popolo", note: "La comunità politica stessa, attraverso le generazioni." },
      { label: "Nazione", note: "La sua continuità, la sua sicurezza e la sua vita comune." },
      { label: "Istituzioni", note: "Le cariche che tengono entrambi in custodia." },
      { label: "Partito", note: "Uno strumento di servizio, e l'ultimo dei quattro." },
    ],
    clarification:
      "È un ordine fondato sul servizio e sulla responsabilità, non una catena di comando. Descrive i doveri di un partito, non un'autorità che un partito possa rivendicare. Nulla in esso autorizza un potere senza consenso: l'autorità politica continua a rispondere alla legge, ai limiti costituzionali e al popolo.",
  },

  restoration: {
    eyebrow: "Restaurazione",
    statement: "Restaurazione, non resa.",
    body: [
      {
        type: "lead",
        text: "Restaurazione non significa ricreare un particolare secolo storico. Il passato ha conosciuto ingiustizia, povertà, violenza ed errore; nulla di tutto questo ha diritto alla nostra nostalgia.",
      },
      {
        type: "paragraph",
        text: "Significa recuperare i principi che la società moderna ha scartato e applicarli con intelligenza alle condizioni in cui viviamo davvero. La storia non si può invertire. La direzione si può cambiare.",
      },
    ] satisfies readonly ContentBlock[],
    closing: "Non spettava a noi creare la nostra eredità. Non spetta a noi scartarla.",
    primaryCta: { label: "Leggi il Manifesto", href: "/manifesto" },
    secondaryCta: { label: "La nostra Visione", href: "/vision" },
  },
};

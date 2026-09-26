import type { ContentBlock } from "@/lib/content-types";
import type { HomeContent } from "./index";

export const home: HomeContent = {
  hero: {
    headline: "L'Europa merita di essere ereditata.",
    statement:
      "Restore Europa è un movimento politico delle nazioni d'Europa, fondato su un manifesto pubblicato e organizzato come un'ala nazionale distinta in ciascun paese anziché come un unico partito europeo.",
    primaryCta: "Leggi i nostri principi",
    secondaryCta: "Partecipa",
  },

  standFor: {
    eyebrow: "Ciò che sosteniamo",
    title: "Cinque convinzioni.",
    lede: "Cinque su sedici. Ciascuna è argomentata per esteso su una pagina propria, accanto alla sezione del manifesto su cui poggia.",
    allLabel: "Tutti e sedici i principi",
    readFull: "leggi il principio per intero",
    items: {
      family: {
        title: "Famiglia e vita umana",
        statement:
          "Un paese che ha reso i figli inaccessibili ha già detto qualcosa su ciò a cui tiene. Le cose ordinarie — sposarsi, crescere una famiglia, tenere una casa — dovrebbero restare alla portata delle persone ordinarie.",
      },
      nation: {
        title: "Nazione e continuità",
        statement:
          "Una nazione è un popolo con una memoria, non un insieme di confini amministrativi. Le è lecito voler ancora riconoscere se stessa fra cento anni.",
      },
      property: {
        title: "Proprietà e indipendenza economica",
        statement:
          "La libertà si esercita male da una posizione di totale dipendenza. La proprietà dovrebbe essere diffusa — case, terra, mestieri, piccole imprese — anziché raccolta in poche istituzioni.",
      },
      technology: {
        title: "Una tecnica a misura d'uomo",
        statement:
          "Non tutto ciò che si può costruire va adottato. Uno strumento deve rendere le persone più capaci di condurre la propria vita, non meno.",
      },
      subsidiarity: {
        title: "Autorità e sussidiarietà",
        statement:
          "Nulla va deciso più in alto di dove può essere deciso bene. Ciò che una famiglia, un comune o una nazione sa fare da sé le appartiene.",
      },
    },
  },

  objectives: {
    eyebrow: "Ciò che vogliamo fare",
    title: "Concretamente, il lavoro è questo.",
    lede: "Un movimento si giudica da ciò che costruisce, non da ciò che deplora. Quattro cose sono in corso, e ciascuna si verifica aprendola.",
    items: {
      programme: {
        title: "Mettere il programma per iscritto.",
        body: "Dieci ambiti, dalla famiglia e dall'economia alla tecnica, alla sanità e alla politica estera. Posizioni elaborate anziché slogan, ognuna legata alla sezione del manifesto su cui poggia e ognuna datata. Una posizione che si può citare è una posizione di cui ci si può chiedere conto.",
        linkLabel: "Leggi il catalogo delle politiche",
      },
      wings: {
        title: "Costruire un'ala in ogni nazione europea.",
        body: "Il lavoro politico si svolge dentro un paese, sotto il suo diritto e nelle sue condizioni. Quarantasette nazioni sono sulla mappa. Ogni ala si dà il proprio statuto, si presenta alle proprie elezioni e risponde ai propri iscritti, non a una sede altrove.",
        linkLabel: "Guarda le ali nazionali",
      },
      members: {
        title: "Essere un partito di iscritti, non di personalità.",
        body: "Un movimento fatto di iscritti può essere chiamato da loro a rendere conto. Nulla diventa un'iscrizione prima che una persona abbia letto la domanda — nessun modulo decide da solo, e ciò che scrivi è cifrato prima di essere conservato.",
        linkLabel: "Chiedi di iscriverti",
      },
      publication: {
        title: "Pubblicare l'argomento per intero.",
        body: "Il manifesto è online integralmente e scaricabile in testo semplice. Nulla è trattenuto dietro un indirizzo di posta, un modulo o un pagamento. Chi vuole contraddire questo movimento può leggere esattamente ciò che ha detto.",
        linkLabel: "Leggi il manifesto",
      },
    },
  },

  manifesto: {
    eyebrow: "Dal manifesto",
    title: "Preambolo",
    body: [
      {
        type: "lead",
        text: "L'Europa è più di un continente, di un mercato o di uno spazio amministrativo.",
      },
      {
        type: "paragraph",
        text: "È una civiltà — frutto del cristianesimo e dell'eredità classica, di popoli e lingue distinti, di generazioni di famiglie, di paesaggi coltivati, di città e villaggi, di chiese, arte, diritto, artigianato e memoria.",
      },
      {
        type: "paragraph",
        text: "Nulla di tutto questo è stato costruito da individui staccati dalla storia. È stato consegnato da una generazione alla successiva. Burke ne diede nel 1790 la formulazione rimasta classica, contro una rivoluzione che pretendeva di ricominciare dalla sola ragione: una società è una società di persone, e poiché i suoi fini non si raggiungono nell'arco di una sola vita, essa lega \u201cnon soltanto coloro che vivono, ma coloro che vivono, coloro che sono morti e coloro che devono nascere\u201d.",
      },
      {
        type: "paragraph",
        text: "L'Europa moderna considera sempre più l'eredità stessa come sospetta. Non accettiamo che questo sia progresso.",
      },
    ] satisfies readonly ContentBlock[],
    cta: "Leggi il manifesto per intero",
  },

  explore: {
    eyebrow: "Esplora",
    title: "Esplora Restore Europa.",
    cards: {
      principles: {
        title: "Principi",
        blurb: "I sedici impegni, argomentati uno per uno.",
      },
      manifesto: {
        title: "Manifesto",
        blurb: "Il documento fondativo: un preambolo e ventidue sezioni, per intero.",
      },
      policy: {
        title: "Politiche",
        blurb: "Posizioni elaborate in dieci ambiti, consultabili e datate.",
      },
      vision: {
        title: "Visione",
        blurb: "Che cosa significherebbe il programma in una vita ordinaria.",
      },
      wings: {
        title: "Ali",
        blurb: "L'ala nazionale in ciascuna delle quarantasette nazioni europee.",
      },
      about: {
        title: "Chi siamo",
        blurb: "Chi siamo e come è costruito il movimento.",
      },
    },
  },

  participation: {
    eyebrow: "Prendere parte",
    title: "Che cosa significa davvero aderire.",
    lede: "Due modi per entrare e una lettera da scrivere. Nessuno costa nulla, perché il movimento non è ancora in grado di ricevere denaro.",
    ways: {
      member: {
        title: "Iscritto",
        note: "La via ordinaria",
        summary:
          "Vieni contato. Qui l'iscrizione è appartenenza e non abbonamento: quando Restore Europa potrà ricevere contributi, saranno gli iscritti le persone a cui verrà chiesto di sostenere il lavoro.",
        cta: "Chiedi di iscriverti",
      },
      volunteer: {
        title: "Volontario",
        note: "Tutto il tempo che riesci a dare",
        summary:
          "La stessa domanda, con l'ambito in cui daresti una mano — organizzazione locale, scrittura, traduzione, eventi, diritto, tecnica, agricoltura, edilizia, o altro che sai fare.",
        cta: "Proponiti come volontario",
      },
      chapter: {
        title: "Un'ala dove vivi",
        note: "Scrivi prima; non c'è un modulo",
        summary:
          "Essere sulla mappa non significa che un'ala sia già costituita. Se vuoi contribuire a fondare quella del tuo paese, dillo — in questa fase è la cosa più utile che si possa fare per il movimento.",
        cta: "Scrivi per un'ala locale",
      },
    },
    closing:
      "Non c'è nessuna lista di distribuzione a cui iscriversi né alcuna newsletter da sottoscrivere. L'unico indirizzo che questo movimento possiede è quello che hai scritto tu stesso in una domanda o in un messaggio, ed è cifrato prima di essere conservato.",
  },
};

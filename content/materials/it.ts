import type { MaterialsText } from "./index";

export const materialsText: MaterialsText = {
  meta: {
    eyebrow: "Materiali",
    title: "Fatti per essere presi e usati.",
    metaTitle: "Materiali",
    lede: "Il marchio del movimento, e i fogli, gli adesivi e le immagini che ne sono nati. Tutto qui è pubblicato per essere scaricato.",
    description:
      "Logotipi, manifesti, adesivi, sfondi e immagini del Restore Europa Movement, liberamente scaricabili.",
  },

  categories: {
    logo: {
      label: "Logotipi",
      note: "Il marchio e il logotipo, nelle forme in cui sono disegnati.",
    },
    poster: {
      label: "Manifesti",
      note: "Fogli in un formato per cui vale la pena stampare.",
    },
    sticker: {
      label: "Adesivi",
      note: "Fogli piccoli, fatti per essere stampati e ritagliati.",
    },
    wallpaper: {
      label: "Sfondi",
      note: "Per un telefono o uno schermo.",
    },
    social: {
      label: "Social",
      note: "Immagini nel formato degli account che il movimento tiene.",
    },
  },

  imprint: {
    note: "La grafica lascia in bianco un campo per il nome e l'indirizzo di una persona responsabile dell'esemplare; compilalo prima di esporre qualcosa in pubblico. Quello che viene richiesto varia da paese a paese, quindi controlla che cosa vale dove ti trovi.",
  },

  file: {
    download: "Scarica",
    downloadLabel: "Scarica {title}",
  },

  preview: {
    alt: "Anteprima di {title}",
    none: "Nessuna anteprima",
  },

  catalogue: {
    label: "Filtra e ordina il catalogo",
    kindLabel: "Tipo",
    kindAll: "Tutti i tipi",
    formatLabel: "Formato",
    formatAll: "Tutti i formati",
    sortLabel: "Ordine",
    sort: {
      newest: "Prima i più recenti",
      oldest: "Prima i più vecchi",
      title: "Titolo, dalla A alla Z",
      largest: "Prima il file più grande",
      smallest: "Prima il file più piccolo",
    },
    apply: "Applica",
    clear: "Mostra tutto",
    showingAll: {
      one: "Si mostra l'unico file.",
      other: "Si mostrano tutti i {count} file.",
    },
    showingSome: {
      one: "{count} file su {total} corrisponde.",
      other: "{count} file su {total} corrispondono.",
    },
    noMatch: "Qui non corrisponde nulla.",
  },

  empty: {
    title: "Non è ancora stato pubblicato nulla.",
    body: "Questa pagina si riempie man mano che i file vengono fatti.",
  },

  unavailable: {
    title: "Il catalogo non è collegato.",
    body: "Questa copia del sito non ha un database, quindi l'elenco dei file non può essere letto. Non è stato ritirato nulla.",
  },

  usage: {
    title: "Come usarli",
    body: "Tutto qui porta il nome e il marchio del movimento, perciò ciò che se ne ricava sarà letto come se parlasse a nome del movimento. Non sono ancora state pubblicate condizioni d'uso, e il movimento non è ancora registrato.",
    imprintLink: "Dati editoriali",
  },
};

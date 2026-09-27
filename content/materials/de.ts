import type { MaterialsText } from "./index";

export const materialsText: MaterialsText = {
  meta: {
    eyebrow: "Materialien",
    title: "Zum Mitnehmen und Verwenden gemacht.",
    metaTitle: "Materialien",
    lede: "Das Zeichen der Bewegung und die Bögen, Aufkleber und Bilder, die daraus entstanden sind. Alles hier ist zum Herunterladen veröffentlicht.",
    description:
      "Logos, Plakate, Aufkleber, Hintergrundbilder und Bilder der Restore Europa Movement, kostenlos zum Herunterladen.",
  },

  categories: {
    logo: {
      label: "Logos",
      note: "Das Zeichen und die Wortmarke, in den Formen, in denen sie gezeichnet sind.",
    },
    poster: {
      label: "Plakate",
      note: "Bögen in einer Größe, für die sich das Drucken lohnt.",
    },
    sticker: {
      label: "Aufkleber",
      note: "Kleine Bögen, zum Drucken und Ausschneiden gemacht.",
    },
    wallpaper: {
      label: "Hintergrundbilder",
      note: "Für ein Telefon oder einen Bildschirm.",
    },
    social: {
      label: "Soziale Netzwerke",
      note: "Bilder im Format der Konten, die die Bewegung unterhält.",
    },
  },

  imprint: {
    note: "Die Vorlagen lassen ein Feld für Namen und Adresse einer verantwortlichen Person frei; füllen Sie es aus, bevor Sie etwas öffentlich aushängen. Was verlangt wird, unterscheidet sich von Land zu Land — prüfen Sie also, was bei Ihnen gilt.",
  },

  file: {
    download: "Herunterladen",
    downloadLabel: "{title} herunterladen",
  },

  preview: {
    alt: "Vorschau von {title}",
    none: "Keine Vorschau",
  },

  catalogue: {
    label: "Katalog filtern und ordnen",
    kindLabel: "Art",
    kindAll: "Alle Arten",
    formatLabel: "Format",
    formatAll: "Alle Formate",
    sortLabel: "Reihenfolge",
    sort: {
      newest: "Neueste zuerst",
      oldest: "Älteste zuerst",
      title: "Titel, A bis Z",
      largest: "Größte Datei zuerst",
      smallest: "Kleinste Datei zuerst",
    },
    apply: "Anwenden",
    clear: "Alles zeigen",
    showingAll: {
      one: "Es wird die einzige Datei gezeigt.",
      other: "Es werden alle {count} Dateien gezeigt.",
    },
    showingSome: {
      one: "{count} von {total} Dateien passt.",
      other: "{count} von {total} Dateien passen.",
    },
    noMatch: "Hier passt dazu nichts.",
  },

  empty: {
    title: "Noch nichts veröffentlicht.",
    body: "Diese Seite füllt sich, sobald die Dateien entstehen.",
  },

  unavailable: {
    title: "Der Katalog ist nicht verbunden.",
    body: "Diese Ausgabe der Website hat keine Datenbank, daher lässt sich die Liste der Dateien nicht lesen. Zurückgezogen wurde nichts.",
  },

  usage: {
    title: "Zur Verwendung",
    body: "Alles hier trägt den Namen und das Zeichen der Bewegung; was daraus gemacht wird, wird also gelesen, als spräche es für die Bewegung. Nutzungsbedingungen sind noch nicht veröffentlicht, und die Bewegung ist noch nicht eingetragen.",
    imprintLink: "Impressum",
  },
};

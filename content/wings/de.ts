import type { WingsText } from "./index";

export const wingsText: WingsText = {
  meta: {
    eyebrow: "Organisation",
    title: "Ein Landesverband in jeder europäischen Nation.",
    metaTitle: "Landesverbände",
    lede: "Restore Europa ist als Bewegung von Landesverbänden organisiert, nicht als eine einzige kontinentale Partei. Jede Nation trägt ihren eigenen — verantwortlich gegenüber den Menschen, die dort leben, und gegenüber niemandem im Ausland.",
    description:
      "Restore Europa ist als Bewegung von Landesverbänden organisiert — einer für jede europäische Nation, jeder seinen eigenen Mitgliedern verantwortlich und nur mit dem befasst, was seine Ortsgruppen und Regionen nicht selbst tragen können.",
    intro: [
      {
        type: "lead",
        text: "Unser Programm hält daran fest, dass nichts auf einer höheren Ebene entschieden werden soll, was auf einer niedrigeren kompetent entschieden werden kann. Eine Bewegung, die für Subsidiarität einträte und sich dann als ein einziger ungegliederter europäischer Körper organisierte, verdiente keinen Glauben.",
      },
      {
        type: "paragraph",
        text: "Also ist die Bewegung andersherum gebaut. Der Landesverband ist die Ebene, auf der politische Arbeit tatsächlich stattfindet: Er trägt das Programm in die Verhältnisse eines Landes, tritt nach dem Recht dieses Landes zu Wahlen an, hält seine eigene Satzung und ist seinen eigenen Mitgliedern verantwortlich.",
      },
      {
        type: "paragraph",
        text: "Gemeinsam ist den Verbänden das [Manifest][manifesto] und die [Grundsätze][principles], die daraus folgen. Nicht gemeinsam ist ihnen eine einheitliche Schablone für Politik, denn die Verhältnisse Portugals und Estlands sind nicht dieselben Verhältnisse.",
      },
    ],
    note: "Überall auf dem Kontinent entstehen Landesverbände. Wenn Sie helfen möchten, den an Ihrem Wohnort zu gründen, sagen Sie es über „Mitmachen“ — es ist in diesem Stadium das Nützlichste, was jemand für die Bewegung tun kann.",
    mapLabel:
      "Eine Karte Europas, auf der die vierundvierzig auf dieser Seite aufgeführten Nationen vom umliegenden Land abgehoben sind.",
    mapCaption:
      "Die hier hervorgehobenen Nationen sind die vierundvierzig, die unten aufgeführt sind. Auf der Karte zu stehen bedeutet, dass die Bewegung um diese Nation herum organisiert ist — nicht, dass ihr Verband konstituiert oder aktiv wäre.",
    mapHint: "Wählen Sie eine Nation auf der Karte, um ihren Landesverband zu öffnen.",
  },

  regions: {
    western: "Westeuropa",
    northern: "Nordeuropa",
    southern: "Südeuropa",
    "central-eastern": "Mittel- und Osteuropa",
  },

  countries: {
    albania: "Albanien",
    andorra: "Andorra",
    austria: "Österreich",
    belgium: "Belgien",
    "bosnia-and-herzegovina": "Bosnien und Herzegowina",
    bulgaria: "Bulgarien",
    croatia: "Kroatien",
    cyprus: "Zypern",
    czechia: "Tschechien",
    denmark: "Dänemark",
    estonia: "Estland",
    finland: "Finnland",
    france: "Frankreich",
    germany: "Deutschland",
    greece: "Griechenland",
    hungary: "Ungarn",
    iceland: "Island",
    ireland: "Irland",
    italy: "Italien",
    kosovo: "Kosovo",
    latvia: "Lettland",
    liechtenstein: "Liechtenstein",
    lithuania: "Litauen",
    luxembourg: "Luxemburg",
    malta: "Malta",
    moldova: "Republik Moldau",
    monaco: "Monaco",
    montenegro: "Montenegro",
    netherlands: "Niederlande",
    "north-macedonia": "Nordmazedonien",
    norway: "Norwegen",
    poland: "Polen",
    portugal: "Portugal",
    romania: "Rumänien",
    russia: "Russland",
    "san-marino": "San Marino",
    serbia: "Serbien",
    slovakia: "Slowakei",
    slovenia: "Slowenien",
    spain: "Spanien",
    sweden: "Schweden",
    switzerland: "Schweiz",
    ukraine: "Ukraine",
    "united-kingdom": "Vereinigtes Königreich",
  },

  index: {
    nationCount: { one: "{count} Nation", other: "{count} Nationen" },
    closingTitle: "{count} Nationen. Ein Erbe.",
    closingBody:
      "Jeder Verband auf dieser Seite steht für einen Ort, an dem die Arbeit von Menschen getan werden muss, die dort leben. Wenn Sie dort leben, braucht die Bewegung Sie mehr als noch einen Leser.",
    getInvolved: "Mitmachen",
    howWeOrganise: "Wie wir uns organisieren",
  },

  wing: {
    backLabel: "Landesverbände",
    kicker: "Landesverband",
    lead: "Der Verband in {country} ist die nationale Ebene von Restore Europa — das Gremium, das unser Programm in die politischen Verhältnisse von {country} trägt, und die Ebene, auf der die dortigen Mitglieder entscheiden, wie es verfolgt wird.",
    body: [
      {
        type: "paragraph",
        text: "Ein Landesverband ist keine Filiale, die Weisungen entgegennimmt. Er hält seine eigene Satzung, wählt seine eigenen Kandidaten aus, setzt innerhalb des gemeinsamen Programms seine eigenen Schwerpunkte und ist seinen eigenen Mitgliedern verantwortlich, nicht irgendeinem Gremium außerhalb des Landes.",
      },
      {
        type: "paragraph",
        text: "Was er nicht tut, ist über Dinge zu entscheiden, die einem kleineren Körper zustehen. Wo eine Ortsgruppe die Arbeit tun kann, gehört die Arbeit der Ortsgruppe. Dieselbe Zurückhaltung, die die Bewegung vom Staat verlangt, verlangt sie zuerst von sich selbst.",
      },
    ],
    metaTitle: "{country} — Landesverband",
    metaDescription:
      "Der Verband von Restore Europa in {country}: die nationale Ebene der Bewegung, wofür sie einsteht und wie man beim Aufbau hilft.",
    ogTitle: "Restore Europa {country} — Landesverband",
    ogDescription: "Die nationale Ebene von Restore Europa in {country}.",
    notFound: "Verband nicht gefunden",
    remitHeading: "Wofür der Verband einsteht",
    remitLede:
      "Dieselben sechs Zuständigkeiten in jeder Nation. Wie sie wahrgenommen werden, entscheiden die Mitglieder in {country}.",
    takePartHeading: "Helfen Sie, den Verband in {country} aufzubauen.",
    takePartBody:
      "Ein Landesverband wird von den Menschen gebaut, die unter den Verhältnissen leben, die er ändern soll. Sagen Sie uns, was Sie beitragen können — Organisation, Schreiben, fachliche Erfahrung oder schlicht mitgezählt zu werden.",
    getInvolved: "Mitmachen",
    contact: "Kontakt",
    neighboursHeading: "Weitere Verbände in {region}",
  },

  chain: {
    caption: "Wo der Verband steht",
    footnote:
      "Von unten zu lesen: Eine Ebene übernimmt nur das, was die darunter nicht kompetent halten kann.",
    nationalLabel: "{layer} — {country}",
  },

  layers: {
    chapter: {
      label: "Ortsgruppe",
      note: "Die Stadt oder der Stadtteil. Treffen, politische Arbeit vor Ort und Kandidatenauswahl, wo Ortsgruppen bestehen.",
    },
    regional: {
      label: "Regionale Koordination",
      note: "Unterstützung zwischen Ortsgruppen und gemeinsame Organisation. Keine Zuständigkeit, die eine Ortsgruppe selbst halten kann.",
    },
    national: {
      label: "Landesverband",
      note: "Satzung, Programm, Einhaltung des nationalen Partei- und Wahlrechts und nationale Kandidaturen.",
    },
    european: {
      label: "Europäische Bewegung",
      note: "Nur das, was die Nationen wirklich nicht getrennt tun können: Verteidigung, Grenzen, strategische Infrastruktur, Wissenschaft, Energie.",
    },
  },

  remit: {
    programme: {
      term: "Das Programm im Kontext",
      description:
        "Das Manifest auf die tatsächlichen Verhältnisse des Landes anwenden — seinen Wohnungsmarkt, seine Demografie, seine Industrie, seine Landschaft — ohne zu verändern, was die Bewegung gemeinsam hält.",
    },
    elections: {
      term: "Wahlen und Kandidaten",
      description:
        "Registrierung, Kandidatenauswahl und Wahlantritt nach nationalem Partei- und Wahlrecht, in welcher Form dieses Recht auch besteht.",
    },
    statutes: {
      term: "Satzung und Rechtstreue",
      description:
        "Eigene Satzung, Mitgliederverzeichnis, Rechnungslegung und gesetzliche Berichterstattung, veröffentlicht in dem Land, in dem er tätig ist.",
    },
    chapters: {
      term: "Ortsgruppen und Regionen",
      description:
        "Ortsgruppen gründen, regionale Koordination unterstützen und der Versuchung widerstehen, an sich zu ziehen, was beide selbst können.",
    },
    language: {
      term: "Sprache und Veröffentlichung",
      description:
        "Den maßgeblichen Text unserer Dokumente in der Landessprache erstellen und pflegen. Übersetzungen sind Sache des Verbands und werden nicht veröffentlicht, bevor sie gut sind.",
    },
    europe: {
      term: "Vertretung in Europa",
      description:
        "Für seine Mitglieder in der weiteren Bewegung sprechen und mit den anderen Verbänden in den Fragen zusammenarbeiten, die es wirklich erfordern.",
    },
  },
};

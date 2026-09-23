import type { InvolvementText } from "./index";

export const involvementText: InvolvementText = {
  join: {
    eyebrow: "Mitgliedschaft",
    title: "Der Bewegung beitreten.",
    metaTitle: "Mitmachen",
    lede: "Mitgliedschaft heißt Zugehörigkeit. Wenn Sie darüber hinaus beim Aufbau helfen können, wählen Sie „Freiwillig“. Das Formular fragt fünf Dinge, verschlüsselt Ihren Namen und Ihre Adresse vor der Speicherung und verpflichtet Sie zu nichts, bis ein Mensch die Bewerbung geprüft hat.",
    description:
      "Treten Sie der Restore Europa Movement als Mitglied bei oder helfen Sie freiwillig beim Aufbau.",
    prefilled:
      "Sie kommen vom Verband in {country}, daher ist das Formular darauf eingestellt. Ändern Sie beide Felder, wenn das nicht stimmt.",
    roleLegend: "Wie Sie sich bewerben",
    fields: {
      name: "Name",
      email: "E-Mail",
      country: "Land",
      region: "Region oder Stadt",
      interest: "Interessengebiet",
      message: "Nachricht",
      messageHint:
        "Was Sie tun möchten, und alles an Ihren Umständen, was dafür von Belang ist.",
      optional: "Optional",
      placeholder: "Bitte wählen …",
      otherCountry: "Anderes",
    },
    consent:
      "Ich bewerbe mich um die Mitgliedschaft in der Restore Europa Movement und bin damit einverstanden, dass die oben eingegebenen Angaben zu diesem Zweck gespeichert werden. Die Mitgliedschaft in einer politischen Bewegung lässt auf eine politische Meinung schließen, die das Recht strenger schützt als gewöhnliche personenbezogene Daten; ich kann diese Einwilligung jederzeit widerrufen und die Löschung des Datensatzes verlangen.",
    submit: "Bewerbung absenden",
    submitting: "Wird gesendet …",
    privacyNote: "Alles, was Sie eingeben, wird vor der Speicherung verschlüsselt. Siehe unsere",
    privacyLink: "Datenschutzerklärung",
    received: {
      title: "Ihre Bewerbung ist eingegangen.",
      body: "Sie wartet nun darauf, von einem Menschen geprüft zu werden. Die Mitgliedschaft beginnt, wenn diese Prüfung abgeschlossen ist, nicht mit dem Absenden eines Formulars — es ist also noch nichts entschieden, und nichts über Sie ist irgendwo veröffentlicht worden.",
      privacy:
        "Ihr Name und Ihre Adresse wurden verschlüsselt, bevor sie festgehalten wurden. Was wir speichern, wie lange wir es speichern und wie Sie es löschen lassen, steht in der",
      privacyLink: "Datenschutzerklärung",
    },
    unavailable:
      "Das Mitgliederverzeichnis nimmt derzeit keine Bewerbungen an. Nichts von dem, was Sie hier eingeben, wurde gesendet. Bitte versuchen Sie es in Kürze erneut.",
    throttled:
      "Von dieser Verbindung wurden bereits mehrere Bewerbungen abgeschickt. Bitte warten Sie eine Stunde, bevor Sie eine weitere senden.",
    problemCount: {
      one: "Dieses Formular hat {count} Problem",
      other: "Dieses Formular hat {count} Probleme",
    },
    errors: {
      name: "Geben Sie Ihren Namen an, höchstens 120 Zeichen.",
      email: "Geben Sie eine gültige E-Mail-Adresse an.",
      country: "Wählen Sie ein Land aus der Liste.",
      region: "Region oder Stadt ist auf 120 Zeichen begrenzt.",
      message: "Ihre Nachricht ist auf 1500 Zeichen begrenzt.",
      role: "Wählen Sie, ob Sie sich als Mitglied oder als Freiwilliger bewerben.",
      interest: "Wählen Sie ein Interessengebiet.",
      consent: "Sie müssen zustimmen, um fortzufahren.",
    },
  },

  roles: {
    member: {
      title: "Mitglied",
      summary:
        "Als Mitglied der Bewegung gezählt werden. Sobald Restore Europa Beiträge annehmen kann, sind es die Mitglieder, die um Unterstützung der Arbeit gebeten werden.",
      commitment: "Der gewöhnliche Weg hinein",
    },
    volunteer: {
      title: "Freiwillig",
      summary:
        "Beim Aufbau helfen: Organisation vor Ort, Schreiben, Übersetzen, Veranstaltungen oder ein Handwerk. Wählen Sie das Interessengebiet, das am besten passt.",
      commitment: "So viel Sie erübrigen können",
    },
  },

  retiredRoles: {
    supporter: "Unterstützer",
    organizer: "Organisator vor Ort",
    writer: "Autor / Forscher",
    professional: "Fachlicher Beitrag",
  },

  interests: {
    policy: "Politik und Forschung",
    organising: "Organisation vor Ort",
    writing: "Schreiben und Redigieren",
    events: "Veranstaltungen und Treffen",
    translation: "Übersetzung",
    legal: "Recht und Rechtstreue",
    technology: "Technik und Infrastruktur",
    agriculture: "Landwirtschaft und Boden",
    architecture: "Architektur und Planung",
    other: "Anderes",
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Die Bewegung erreichen.",
    metaTitle: "Kontakt",
    lede: "Korrespondenz wird nach Funktion statt nach Person bearbeitet, damit ein Schreiben die Menschen erreicht, die es beantworten können, und nicht wen auch immer es zuerst liest.",
    description:
      "Wie Sie die Restore Europa Movement erreichen: allgemeine Anfragen, Presse, Forschung, Organisation und Ortsgruppen.",
    channelsHeading: "Wege",
    writeHeading: "Schreiben Sie uns",
    writeBody:
      "Oben stehen keine E-Mail-Adressen, denn jede wird veröffentlicht, sobald die Funktion, zu der sie gehört, besteht und jemand für das Lesen verantwortlich ist. Dieses Formular erreicht in der Zwischenzeit dieselben Menschen.",
    fields: {
      name: "Name",
      email: "E-Mail",
      subject: "Worum es geht",
      message: "Nachricht",
      placeholder: "Bitte wählen …",
    },
    submit: "Nachricht senden",
    submitting: "Wird gesendet …",
    privacyNote: "Vor der Speicherung verschlüsselt. Siehe unsere",
    privacyLink: "Datenschutzerklärung",
    sent: {
      title: "Ihre Nachricht ist eingegangen.",
      body: "Sie wird von der Person gelesen, die die von Ihnen angesprochene Funktion innehat. Die Bewegung ist klein und beantwortet Korrespondenz von Hand, eine Antwort kann daher einige Tage dauern.",
      privacy:
        "Ihr Name, Ihre Adresse und Ihre Nachricht wurden vor der Speicherung verschlüsselt und können auf Wunsch gelöscht werden — siehe die",
      privacyLink: "Datenschutzerklärung",
    },
    unavailable:
      "Korrespondenz kann derzeit nicht angenommen werden. Nichts von dem, was Sie hier eingeben, wurde gesendet. Bitte versuchen Sie es in Kürze erneut.",
    throttled:
      "Von dieser Verbindung wurden bereits mehrere Nachrichten gesendet. Bitte warten Sie eine Stunde, bevor Sie eine weitere senden.",
    problemCount: {
      one: "Dieses Formular hat {count} Problem",
      other: "Dieses Formular hat {count} Probleme",
    },
    errors: {
      name: "Geben Sie Ihren Namen an, höchstens 120 Zeichen.",
      email: "Geben Sie eine gültige E-Mail-Adresse an, damit eine Antwort Sie erreichen kann.",
      subject: "Wählen Sie, worum es in Ihrer Nachricht geht.",
      message: "Ihre Nachricht sollte zwischen 10 und 2000 Zeichen lang sein.",
    },
    ratherTakePart: {
      before: "Wenn Sie lieber mitmachen als fragen möchten,",
      joinLink: "treten Sie der Bewegung bei",
      between: ". Angaben zum Herausgeber finden Sie im",
      imprintLink: "Impressum",
      after: ".",
    },
  },

  channels: {
    general: {
      title: "Allgemeine Anfragen",
      description: "Fragen zur Bewegung, ihrem Programm und ihren Tätigkeiten.",
    },
    press: {
      title: "Presse",
      description: "Journalisten, Rundfunk und Forschende, die eine Stellungnahme oder Hintergrund suchen.",
    },
    research: {
      title: "Forschung",
      description: "Wissenschaftliche Korrespondenz und Beiträge zum Politikkatalog.",
    },
    organization: {
      title: "Organisation",
      description: "Mitgliederverwaltung, Satzung, Rechtstreue und interne Angelegenheiten.",
    },
    chapters: {
      title: "Ortsgruppen",
      description: "Eine Ortsgruppe gründen oder eine erreichen, sobald Ortsgruppen bestehen.",
    },
  },
};

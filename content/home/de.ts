import type { ContentBlock } from "@/lib/content-types";
import type { HomeContent } from "./index";

export const home: HomeContent = {
  hero: {
    headline: "Europa ist ein Erbe, das es wert ist, angetreten zu werden.",
    statement:
      "Restore Europa ist eine politische Bewegung der Nationen Europas, gegründet auf ein veröffentlichtes Manifest und organisiert als eigener nationaler Flügel in jedem Land statt als eine einzige europäische Partei.",
    primaryCta: "Unsere Grundsätze lesen",
    secondaryCta: "Mitmachen",
  },

  standFor: {
    eyebrow: "Wofür wir stehen",
    title: "Fünf Überzeugungen.",
    lede: "Fünf von sechzehn. Jede wird auf einer eigenen Seite ausführlich begründet, entlang des Abschnitts im Manifest, auf dem sie ruht.",
    allLabel: "Alle sechzehn Grundsätze",
    readFull: "den vollständigen Grundsatz lesen",
    items: {
      family: {
        title: "Familie und menschliches Leben",
        statement:
          "Ein Land, das Kinder unbezahlbar gemacht hat, hat damit bereits gesagt, was ihm wichtig ist. Das Gewöhnliche — heiraten, eine Familie großziehen, ein Zuhause halten — sollte für gewöhnliche Menschen erreichbar sein.",
      },
      nation: {
        title: "Nation und Kontinuität",
        statement:
          "Eine Nation ist ein Volk mit einem Gedächtnis, nicht eine Menge von Verwaltungsgrenzen. Sie darf sich wünschen, sich in hundert Jahren noch wiederzuerkennen.",
      },
      property: {
        title: "Eigentum und wirtschaftliche Unabhängigkeit",
        statement:
          "Freiheit lässt sich aus vollständiger Abhängigkeit heraus schwer ausüben. Eigentum sollte breit gestreut sein — Wohnungen, Land, Handwerk, kleine Betriebe — statt sich in wenigen Institutionen zu sammeln.",
      },
      technology: {
        title: "Technik nach menschlichem Maß",
        statement:
          "Nicht alles, was gebaut werden kann, muss auch übernommen werden. Ein Werkzeug sollte Menschen befähigen, ihr Leben selbst zu führen, nicht weniger dazu befähigen.",
      },
      subsidiarity: {
        title: "Autorität und Subsidiarität",
        statement:
          "Nichts soll weiter oben entschieden werden, als es gut entschieden werden kann. Was eine Familie, eine Stadt oder eine Nation für sich selbst tun kann, gehört ihr.",
      },
    },
  },

  objectives: {
    eyebrow: "Was wir tun wollen",
    title: "Konkret ist dies die Arbeit.",
    lede: "Eine Bewegung wird daran gemessen, was sie aufbaut, nicht daran, was sie beklagt. Vier Dinge sind im Gange, und jedes davon lässt sich überprüfen, indem man es öffnet.",
    items: {
      programme: {
        title: "Das Programm aufschreiben.",
        body: "Zehn Bereiche, von Familie und Wirtschaft bis zu Technik, Gesundheit und Außenpolitik. Ausgearbeitete Positionen statt Parolen, jede an den Abschnitt des Manifests gebunden, auf dem sie ruht, und jede datiert. Eine Position, die man zitieren kann, ist eine Position, an der man uns messen kann.",
        linkLabel: "Den Politikkatalog lesen",
      },
      wings: {
        title: "In jeder europäischen Nation einen Flügel aufbauen.",
        body: "Politische Arbeit geschieht innerhalb eines Landes, nach dessen Recht und unter dessen Bedingungen. Siebenundvierzig Nationen sind verzeichnet. Jeder Flügel gibt sich eigene Statuten, tritt zu eigenen Wahlen an und ist seinen eigenen Mitgliedern verantwortlich, nicht einer Zentrale anderswo.",
        linkLabel: "Die nationalen Flügel ansehen",
      },
      members: {
        title: "Eine Partei der Mitglieder sein, nicht der Personen.",
        body: "Eine Bewegung aus Mitgliedern kann von ihnen zur Rechenschaft gezogen werden. Nichts wird zur Mitgliedschaft, bevor ein Mensch den Antrag gelesen hat — kein Formular entscheidet etwas von allein, und was Sie schreiben, wird vor dem Speichern verschlüsselt.",
        linkLabel: "Mitgliedschaft beantragen",
      },
      publication: {
        title: "Das ganze Argument veröffentlichen.",
        body: "Das Manifest steht vollständig online und lässt sich als reiner Text herunterladen. Nichts liegt hinter einer E-Mail-Adresse, einem Formular oder einer Zahlung. Wer dieser Bewegung widersprechen möchte, kann genau nachlesen, was sie gesagt hat.",
        linkLabel: "Das Manifest lesen",
      },
    },
  },

  manifesto: {
    eyebrow: "Aus dem Manifest",
    title: "Präambel",
    body: [
      {
        type: "lead",
        text: "Europa ist mehr als ein Kontinent, ein Markt oder ein Verwaltungsraum.",
      },
      {
        type: "paragraph",
        text: "Es ist eine Zivilisation — hervorgegangen aus Christentum und klassischem Erbe, aus eigenständigen Völkern und Sprachen, aus Generationen von Familien, gepflegten Landschaften, Städten und Dörfern, Kirchen, Kunst, Recht, Handwerk und Erinnerung.",
      },
      {
        type: "paragraph",
        text: "Nichts davon wurde von Einzelnen geschaffen, die von der Geschichte losgelöst waren. Es wurde von einer Generation an die nächste weitergegeben. Burke gab diesem Gedanken 1790 seine bis heute gültige Fassung, gegen eine Revolution, die aus bloßer Vernunft neu beginnen wollte: Eine Gesellschaft ist eine Partnerschaft, und weil ihre Zwecke in einem einzigen Leben nicht zu erreichen sind, ist sie eine Partnerschaft \u201enicht nur zwischen den Lebenden, sondern zwischen denen, die leben, denen, die gestorben sind, und denen, die geboren werden sollen\u201c.",
      },
      {
        type: "paragraph",
        text: "Das moderne Europa behandelt das Erbe selbst zunehmend als verdächtig. Wir akzeptieren nicht, dass dies Fortschritt ist.",
      },
    ] satisfies readonly ContentBlock[],
    cta: "Das vollständige Manifest lesen",
  },

  explore: {
    eyebrow: "Erkunden",
    title: "Restore Europa erkunden.",
    cards: {
      principles: {
        title: "Grundsätze",
        blurb: "Die sechzehn Verpflichtungen, einzeln begründet.",
      },
      manifesto: {
        title: "Manifest",
        blurb: "Das Gründungsdokument: eine Präambel und zweiundzwanzig Abschnitte, vollständig.",
      },
      policy: {
        title: "Politik",
        blurb: "Ausgearbeitete Positionen in zehn Bereichen, durchsuchbar und datiert.",
      },
      vision: {
        title: "Vision",
        blurb: "Was das Programm in einem gewöhnlichen Leben bedeuten würde.",
      },
      wings: {
        title: "Flügel",
        blurb: "Der nationale Flügel in jeder von siebenundvierzig europäischen Nationen.",
      },
      about: {
        title: "Über uns",
        blurb: "Wer wir sind und wie die Bewegung aufgebaut ist.",
      },
    },
  },

  participation: {
    eyebrow: "Teilnehmen",
    title: "Was es heißt, beizutreten.",
    lede: "Zwei Wege hinein und ein Brief, den man schreiben kann. Keiner kostet etwas, denn die Bewegung kann noch kein Geld entgegennehmen.",
    ways: {
      member: {
        title: "Mitglied",
        note: "Der gewöhnliche Weg hinein",
        summary:
          "Sie werden gezählt. Mitgliedschaft ist hier Zugehörigkeit und kein Abonnement: Sobald Restore Europa Beiträge entgegennehmen kann, sind die Mitglieder diejenigen, die um Unterstützung der Arbeit gebeten werden.",
        cta: "Mitgliedschaft beantragen",
      },
      volunteer: {
        title: "Freiwillige Mitarbeit",
        note: "So viel Zeit, wie Sie erübrigen können",
        summary:
          "Derselbe Antrag, ergänzt um den Bereich, in dem Sie helfen würden — Organisation vor Ort, Schreiben, Übersetzen, Veranstaltungen, Recht, Technik, Landwirtschaft, Bauen oder etwas anderes, das Sie können.",
        cta: "Als Freiwillige bewerben",
      },
      chapter: {
        title: "Ein Flügel dort, wo Sie leben",
        note: "Schreiben Sie zuerst; ein Formular gibt es nicht",
        summary:
          "Auf der Karte zu stehen heißt nicht, dass dort schon ein Flügel gegründet ist. Wenn Sie helfen würden, den in Ihrem Land aufzubauen, sagen Sie es — in diesem Stadium ist das das Nützlichste, was jemand für die Bewegung tun kann.",
        cta: "Über einen Flügel vor Ort schreiben",
      },
    },
    closing:
      "Es gibt keine Verteilerliste, in die man sich eintragen, und keinen Newsletter, den man abonnieren kann. Die einzige Adresse, die diese Bewegung hat, ist die, die Sie selbst in einen Antrag oder eine Anfrage geschrieben haben, und sie wird vor dem Speichern verschlüsselt.",
  },
};

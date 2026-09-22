import type { ContentBlock } from "@/lib/content-types";
import type { HomeContent } from "./index";

export const home: HomeContent = {
  hero: {
    headline: "Europa ist ein Erbe, das es wert ist, angetreten zu werden.",
    subheadline: "Für eine christliche, europäische Zivilisation nach menschlichem Maß.",
    primaryCta: { label: "Unsere Grundsätze lesen", href: "/principles" },
    secondaryCta: { label: "Das Manifest lesen", href: "/manifesto" },
  },

  philosophy: {
    eyebrow: "Die zentrale Frage",
    statement: [
      "Die Wirtschaft ist für den Menschen da.",
      "Der Mensch ist nicht für die Wirtschaft da.",
    ],
    body: [
      {
        type: "lead",
        text: "Politische und wirtschaftliche Systeme sind Werkzeuge. Sie sind dazu da, ein gutes menschliches Leben möglich zu machen — nicht umgekehrt.",
      },
      {
        type: "paragraph",
        text: "Eine Zivilisation lässt sich nicht allein an ihrer Wirtschaftsleistung messen. Bruttoinlandsprodukt, Konsum, Produktivität, Verwaltungseffizienz und technische Leistungsfähigkeit beschreiben die Mittel einer Gesellschaft. Darüber, ob die Menschen, die in ihr leben, eine Familie großziehen, ein Zuhause bewahren, ihre Nachbarn kennen, ein Handwerk ausüben oder zur Ruhe kommen können, sagen sie fast nichts.",
      },
      {
        type: "paragraph",
        text: "Werden diese Mittel zu Zwecken erklärt, so werden die Institutionen, die das gewöhnliche Leben zusammenhalten, stillschweigend abgebaut, um ihnen zu dienen. Das ist kein Fortschritt. Es ist eine Verlagerung des Zwecks vom Menschen auf das System.",
      },
    ] satisfies readonly ContentBlock[],
    requirements: {
      title: "Wofür Menschen Zeit und Raum brauchen",
      items: [
        "Familie",
        "Freundschaft",
        "Glaube",
        "Gemeinschaft",
        "Natur",
        "Bildung",
        "Handwerk",
        "Schönheit",
        "Ruhe",
      ],
    },
    reductions: {
      title: "Worauf eine Zivilisation nicht zu reduzieren ist",
      items: [
        "Bruttoinlandsprodukt",
        "Konsum",
        "Produktivität",
        "Verwaltungseffizienz",
        "Technische Leistungsfähigkeit",
      ],
    },
  },

  principles: {
    title: "Was wir vertreten, kurz gesagt.",
    allLabel: "Alle sechzehn Grundsätze",
    readFull: "den vollständigen Grundsatz lesen",
    items: [
      {
        number: "01",
        title: "Familie & menschliches Leben",
        statement:
          "Die Gesellschaft sollte Familiengründung, Elternschaft und ein sinnvolles menschliches Leben materiell möglich machen.",
        href: "/principles#family",
      },
      {
        number: "02",
        title: "Nation & Kontinuität",
        statement:
          "Die europäischen Nationen haben ein legitimes Recht, ihre historische Identität, ihre Kultur und ihre Kontinuität zu bewahren.",
        href: "/principles#nation-and-continuity",
      },
      {
        number: "03",
        title: "Eigentum & wirtschaftliche Unabhängigkeit",
        statement:
          "Eine freie Gesellschaft braucht breit gestreutes Eigentum statt dauerhafter Abhängigkeit von einer kleinen Zahl von Institutionen.",
        href: "/principles#property",
      },
      {
        number: "04",
        title: "Technik nach menschlichem Maß",
        statement:
          "Technik sollte menschliches Können, Selbstbestimmung und Gemeinschaft stärken, statt die Gesellschaft nach den Zwängen der Technik neu zu ordnen.",
        href: "/principles#technology",
      },
      {
        number: "05",
        title: "Bewahrung & Schönheit",
        statement:
          "Land, Architektur und Natur sind ein Erbe, das zu pflegen, zu schützen und weiterzugeben ist.",
        href: "/principles#environment",
      },
      {
        number: "06",
        title: "Autorität & Subsidiarität",
        statement:
          "Politische Autorität sollte auf der jeweils niedrigsten handlungsfähigen Ebene ausgeübt werden.",
        href: "/principles#subsidiarity",
      },
    ],
  },

  lifeAndWork: {
    eyebrow: "Arbeit und Leben",
    statement: "Wir sind nicht dazu geschaffen, zu arbeiten, bis wir sterben.",
    body: [
      {
        type: "lead",
        text: "Arbeit hat wirkliche Würde. Durch sie erwerben Menschen Können, bringen nützliche Dinge hervor, ernähren Familien und nehmen am Leben einer Gemeinschaft teil.",
      },
      {
        type: "paragraph",
        text: "Aber Arbeit ist nicht der ganze Zweck des menschlichen Daseins. Ein Wirtschaftssystem soll die materielle Grundlage für ein Leben schaffen — und nicht das Leben verzehren, das es tragen sollte.",
      },
      {
        type: "paragraph",
        text: "Eine Gesellschaft hat die Orientierung verloren, wenn gewöhnliche Menschen nahezu alle ihre wachen Stunden hergeben müssen, nur um Wohnung und Nahrung zu sichern; wenn Eltern ihre Kinder kaum sehen; wenn Gemeinschaften ausdünnen, weil alle erschöpft sind.",
      },
    ] satisfies readonly ContentBlock[],
    diagram: {
      top: "Arbeit",
      middle: "trägt",
      bottom: "Leben",
      separator: ": ",
      orbit: [
        "Familie",
        "Freundschaft",
        "Glaube",
        "Gemeinschaft",
        "Natur",
        "Bildung",
        "Handwerk",
        "Ruhe",
      ],
    },
    outcome: {
      title: "Was Produktivität einbringen sollte",
      lead: "Zuwächse an dem, was eine Gesellschaft hervorbringen kann, sollten irgendwo im Leben der Menschen sichtbar werden, die sie hervorbringen.",
      items: [
        "Größere Sicherheit gegenüber den gewöhnlichen Wechselfällen des Lebens",
        "Muße, die wirklich einem selbst gehört",
        "Zeit mit Kindern und Eltern",
        "Selbstbestimmung darüber, wie ein Arbeitsleben eingerichtet wird",
        "Unabhängigkeit von dauerhafter Verschuldung und Abhängigkeit",
      ],
    },
  },

  economicOrder: {
    eyebrow: "Wirtschaftsordnung",
    statement: "Märkte ohne Marktgläubigkeit.",
    body: [
      {
        type: "lead",
        text: "Privateigentum ist legitim. Unternehmertum ist legitim. Gewinn ist legitim. Wirtschaftlicher Erfolg ist legitim.",
      },
      {
        type: "paragraph",
        text: "Nichts davon ist der höchste Zweck einer Gesellschaft. Wirtschaftliche Institutionen sind unentbehrlich und müssen dem Gemeinwohl untergeordnet bleiben — das keine von außen auferlegte Beschränkung des Unternehmertums ist, sondern der Grund, weshalb Unternehmertum überhaupt schützenswert ist.",
      },
      {
        type: "paragraph",
        text: "Das ist keine Haltung gegen das Unternehmertum. Es ist eine Haltung gegen Herrschaft: gegen den Punkt, an dem ein Markt aufhört, ein Mittel des Austauschs unter vielen Beteiligten zu sein, und zum Instrument der Kontrolle durch einige wenige wird.",
      },
    ] satisfies readonly ContentBlock[],
    pillars: [
      {
        title: "Unternehmertum",
        lead: "Was wir unterstützen",
        items: [
          "Unternehmergeist",
          "Produktive Investitionen",
          "Familienunternehmen",
          "Selbstständiges Handwerk",
          "Kleine und mittlere Unternehmen",
        ],
      },
      {
        title: "Eigentum",
        lead: "Was wir breiter streuen",
        items: [
          "Wohneigentum",
          "Genossenschaften",
          "Belegschaftseigentum",
          "Bäuerliche Familienbetriebe",
          "Örtliches und regionales Bankwesen",
          "Breiter gestreutes Eigentum an Kapital",
        ],
      },
      {
        title: "Grenzen",
        lead: "Was wir in Schranken halten",
        items: [
          "Monopolistische Konzentration",
          "Vereinnahmung der Aufsichtsbehörden",
          "Wertabschöpfung durch die Finanzwirtschaft",
          "Spekulative Wohnungsmärkte",
          "Beherrschung der Politik durch Konzerne",
        ],
      },
    ],
    key: "Die Wirtschaft ist für den Menschen, die Familie und die Gemeinschaft da.",
  },

  technology: {
    eyebrow: "Technik",
    statement: "Die Maschine muss sich dem Menschen anpassen.",
    body: [
      {
        type: "lead",
        text: "Restore Europa ist nicht gegen die Technik. Wir verwerfen die Vorstellung technischer Unausweichlichkeit — die Annahme, dass alles Machbare auch übernommen werden müsse und dass alles, was die Effizienz steigert, als Fortschritt zu gelten habe.",
      },
      {
        type: "paragraph",
        text: "Eine Technik, die als freiwilliges Angebot eingeführt wird, kann wirtschaftlich notwendig werden. Was notwendig wird, formt Institutionen um, und die Institutionen ordnen daraufhin die Gesellschaft nach den Erfordernissen der Technik neu. Am Ende dieser Kette passt sich der Mensch der Maschine an.",
      },
      {
        type: "paragraph",
        text: "Jede Technik ist danach zu beurteilen, was sie mit der Selbstbestimmung des Menschen, dem Familienleben, der Gemeinschaft, der Privatsphäre, der sinnvollen Arbeit, dem menschlichen Können und der politischen Dezentralisierung macht.",
      },
    ] satisfies readonly ContentBlock[],
    liberates: {
      title: "Technik, die befreit",
      items: [
        "Medizin",
        "Sanitärversorgung",
        "Ingenieurwesen",
        "Wissenschaftliche Entdeckungen",
        "Nützliche Werkzeuge",
        "Automatisierung gefährlicher Arbeit",
      ],
    },
    dominates: {
      title: "Technik, die beherrscht",
      items: [
        "Massenüberwachung",
        "Manipulation der Aufmerksamkeit",
        "Erzwungene digitale Abhängigkeit",
        "Algorithmische Steuerung",
        "Unnötige Verdrängung menschlicher Handlungsfähigkeit",
        "Systeme, die eine Teilhabe ohne vollständige technische Abhängigkeit unmöglich machen",
      ],
    },
    closing: [
      "Wir wenden uns nicht gegen die Technik.",
      "Wir wenden uns gegen die Herrschaft der Technik.",
    ],
  },

  stewardship: {
    eyebrow: "Bewahrung",
    title: "Bewahrung",
    body: [
      {
        type: "lead",
        text: "Wälder, Ackerland, Flüsse, Berge, Küsten, biologische Vielfalt und historische Siedlungen sind ererbte Güter. Wir haben sie von Menschen empfangen, die nicht mehr sind, und schulden sie Menschen, die noch nicht geboren sind.",
      },
      {
        type: "paragraph",
        text: "Das macht sie zu etwas anderem als beliebig verfügbaren Waren. Eine Generation darf sie nutzen und muss sie erhalten; unbeschränktes Eigentum an ihnen hat sie nicht.",
      },
      {
        type: "paragraph",
        text: "Das ist kein Argument, das den Menschen als Plage für die natürliche Welt behandelt, und auch keines, das jede Zerstörung hinnimmt, sofern sie den kurzfristigen Ertrag steigert. Der Mensch gehört in die Natur hinein — als ihr Sachwalter, verantwortlich für das, was er hinterlässt.",
      },
    ] satisfies readonly ContentBlock[],
    categoriesTitle: "Was uns anvertraut ist",
    categories: [
      { title: "Wälder", note: "Verantwortliche Forstwirtschaft und lange Umtriebszeiten." },
      { title: "Landwirtschaft", note: "Gesunde Böden und bäuerliche Familienbetriebe." },
      { title: "Wasser", note: "Saubere Flüsse, Grundwasserleiter und Küsten." },
      {
        title: "Biologische Vielfalt",
        note: "Lebensräume, die erhalten bleiben und nicht bloß erfasst werden.",
      },
      { title: "Landschaft", note: "Siedlungsformen, die das Land achten." },
      { title: "Architektur", note: "Bauen für Generationen, nicht für Konjunkturzyklen." },
      { title: "Regionale Produktion", note: "Lieferketten, die eine Region überschauen kann." },
      { title: "Haltbarkeit & Reparatur", note: "Dinge, die zum Ausbessern gemacht sind." },
    ],
  },

  europe: {
    eyebrow: "Europa",
    title: "Ein Europa der Nationen.",
    subtitle: "Zusammenarbeit ohne Vereinheitlichung.",
    nations: [
      "Polen soll erkennbar polnisch bleiben.",
      "Italien soll erkennbar italienisch bleiben.",
      "Frankreich soll erkennbar französisch bleiben.",
    ],
    together: "Und gemeinsam bleiben sie europäisch.",
    body: [
      {
        type: "lead",
        text: "Der Grundsatz, der die politische Ordnung Europas bestimmen sollte, ist die Subsidiarität: Nichts soll auf einer höheren Ebene entschieden werden, was auf einer niedrigeren sachgerecht entschieden werden kann.",
      },
      {
        type: "paragraph",
        text: "Die Gemeinde soll nicht unnötig Zuständigkeiten an die Region abtreten, die Region nicht an die Nation und die Nation nicht an gesamteuropäische Institutionen. Wo eine kleinere Einheit die Aufgabe gut erfüllen kann, gehört die Aufgabe ihr — nicht als Bequemlichkeit der Verwaltung, sondern als Bedingung politischer Freiheit.",
      },
      {
        type: "paragraph",
        text: "Damit bleibt sehr viel, was die Europäer nur gemeinsam tun können. Nationale und örtliche Identität behalten gerade deshalb politisches Gewicht, weil die Zusammenarbeit auf die Angelegenheiten beschränkt bleibt, die sie wirklich erfordern.",
      },
    ] satisfies readonly ContentBlock[],
    cooperation: {
      title: "Wohin europäische Zusammenarbeit gehört",
      items: [
        "Verteidigung",
        "Strategische Infrastruktur",
        "Grenzen",
        "Wissenschaft",
        "Umweltschutz",
        "Medizin",
        "Widerstandsfähige Energieversorgung",
        "Strategische Industrie",
      ],
    },
  },

  politicalCulture: {
    eyebrow: "Politische Kultur",
    statement: "Das Land vor der Partei.",
    body: [
      {
        type: "lead",
        text: "Politische Meinungsverschiedenheit ist notwendig. Dauerhafter Parteienkampf ist es nicht.",
      },
      {
        type: "paragraph",
        text: "Wo die dauerhaften Interessen einer Nation und ihrer Bürger auf dem Spiel stehen — nationale Sicherheit, kritische Infrastruktur, demografische Stabilität, der Schutz der Familien, verfassungsmäßige Kontinuität —, sollten politische Bewegungen zur Zusammenarbeit über Parteigrenzen hinweg fähig sein.",
      },
      {
        type: "paragraph",
        text: "Der Zweck einer politischen Partei ist nicht bloß, eine andere Partei zu besiegen. Ihr Zweck ist, der politischen Gemeinschaft zu dienen. Opposition ist notwendig; Opposition um ihrer selbst willen wirkt zerstörerisch.",
      },
    ] satisfies readonly ContentBlock[],
    hierarchy: [
      { label: "Volk", note: "Die politische Gemeinschaft selbst, über die Generationen hinweg." },
      { label: "Nation", note: "Ihre Kontinuität, ihre Sicherheit und ihr gemeinsames Leben." },
      { label: "Institutionen", note: "Die Ämter, denen beides anvertraut ist." },
      { label: "Partei", note: "Ein Werkzeug des Dienens und das Letzte der vier." },
    ],
    clarification:
      "Dies ist eine Ordnung des Dienens und der Verantwortung, keine Befehlskette. Sie beschreibt, was eine Partei schuldet, nicht eine Befugnis, die eine Partei beanspruchen darf. Nichts daran erlaubt Herrschaft ohne Zustimmung: Politische Autorität bleibt dem Recht, den verfassungsmäßigen Grenzen und dem Volk gegenüber verantwortlich.",
  },

  restoration: {
    eyebrow: "Erneuerung",
    statement: "Erneuerung, nicht Selbstaufgabe.",
    body: [
      {
        type: "lead",
        text: "Erneuerung bedeutet nicht, ein bestimmtes historisches Jahrhundert nachzubilden. Die Vergangenheit kannte Ungerechtigkeit, Armut, Gewalt und Irrtum; keinem dieser Dinge schulden wir Nostalgie.",
      },
      {
        type: "paragraph",
        text: "Sie bedeutet, die Grundsätze wiederzugewinnen, die die moderne Gesellschaft verworfen hat, und sie mit Verstand auf die Verhältnisse anzuwenden, in denen wir tatsächlich leben. Geschichte lässt sich nicht zurückdrehen. Die Richtung lässt sich ändern.",
      },
    ] satisfies readonly ContentBlock[],
    closing: "Unser Erbe haben wir nicht geschaffen. Es zu verwerfen steht uns nicht zu.",
    primaryCta: { label: "Das Manifest lesen", href: "/manifesto" },
    secondaryCta: { label: "Unsere Vision", href: "/vision" },
  },
};

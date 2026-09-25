import type { PolicyText } from "./index";

export const policyText: PolicyText = {
  meta: {
    eyebrow: "Positionen",
    title: "Programmkatalog",
    metaTitle: "Programmkatalog",
    lede: "Dieser Katalog beantwortet eine eng gefasste Frage: Was vertritt Restore Europa in dieser Sache? Er ersetzt das Manifest nicht. Das Manifest legt das Weltbild dar; hier stehen durchsuchbare Positionen, Thema für Thema.",
    description:
      "Durchsuchbare Positionen des Restore Europa Movement, Thema für Thema: sittliche Ordnung, Familie, Staatsbürgerschaft, Wirtschaft, Technik, Bildung, Justiz, Gesundheitswesen, Umwelt und Außenpolitik.",
    body: [
      "Wo die katholische Sittenlehre klar ist, übernimmt Restore Europa sie in der Regel als sittliche Grundlinie und nennt die Umsetzung im bürgerlichen Recht gesondert. Eine Abweichung ist ausdrücklich festgehalten: Bei der Todesstrafe hält Restore Europa an der älteren überlieferten Zulassung für Ausnahmefälle fest und nicht an der heutigen abolitionistischen Position.",
      "Der Katalog unterscheidet die Verfassungsordnung, die Restore Europa anstrebt, vom geltenden europäischen Recht. Mehrere Positionen — zur Staatsangehörigkeit, zur Aberkennung der Staatsbürgerschaft, zur Meinungsfreiheit, zur öffentlichen Stellung der Religion und zur Todesstrafe — setzten eine Verfassungs- oder Vertragsänderung voraus, ehe sie in einzelnen europäischen Staaten in Kraft gesetzt werden könnten.",
    ],
  },

  index: {
    showingAll: {
      one: "Die einzige Position wird angezeigt.",
      other: "Alle {count} Positionen werden angezeigt.",
    },
    showingSome: {
      one: "{count} von {total} Positionen entspricht der Suche.",
      other: "{count} von {total} Positionen entsprechen der Suche.",
    },
    noMatch: "Dazu findet sich nichts im Katalog.",
    showAll: "Alle Positionen anzeigen",
    sectionCount: {
      one: "{count} Position",
      other: "{count} Positionen",
    },
    relevanceHeading: "Beste Treffer zuerst",
    suggestions: {
      heading: "Nächstliegende Positionen",
      body: "Diese Einträge kommen dem Eingegebenen am nächsten. Sie verwenden möglicherweise andere Wörter.",
    },
  },

  filters: {
    searchLabel: "Positionen durchsuchen",
    searchPlaceholder: "Abtreibung, Subsidiarität, Einbürgerung…",
    searchButton: "Suchen",
    clear: "Zurücksetzen",
    sectionNavLabel: "Positionen nach Abschnitt filtern",
    sectionHeading: "Abschnitt",
    allSections: "Alle",
  },

  entry: {
    breadcrumb: "Programmkatalog",
    positionHeading: "Position",
    policiesHeading: "Programm",
    principleHeading: "Grundsatz",
    limitsHeading: "Grenzen und offene Einzelfragen",
    basisHeading: "Grundlage im Manifest",
    keywordsHeading: "Suchbegriffe",
    lastUpdatedBefore: "Zuletzt geändert am",
    lastUpdatedAfter: ".",
    commitments: {
      one: "{count} Programmpunkt",
      other: "{count} Programmpunkte",
    },
    sectionPosition: "{index} von {total} in diesem Abschnitt",
    previous: "Vorherige Position",
    next: "Nächste Position",
    relatedHeading: "Verwandte Positionen",
    allPositions: "Alle Positionen",
    readManifesto: "Das Manifest lesen",
    notFound: "Position nicht gefunden",
  },

  categories: {
    constitutional: {
      title: "Verfassungsmäßige, religiöse und sittliche Ordnung",
      summary:
        "Der Ort der Religion im öffentlichen Leben und die sittlichen Fragen, denen das Recht nicht ausweichen kann.",
    },
    family: {
      title: "Familie, Demografie und Gesellschaftsordnung",
      summary: "Der Haushalt als erste Institution und was die öffentliche Politik ihm schuldet.",
    },
    nation: {
      title: "Nation, Staatsbürgerschaft, Einwanderung und Europa",
      summary:
        "Die Zugehörigkeit zu einer politischen Gemeinschaft und die europäische Ordnung zwischen den Nationen.",
    },
    economy: {
      title: "Wirtschaft, Eigentum, Finanzwesen und Arbeit",
      summary: "Eigentum, Unternehmertum, Kredit und die Würde der Arbeit.",
    },
    technology: {
      title: "Technik, KI und ein Leben nach menschlichem Maß",
      summary:
        "Was gebaut werden darf, was eingesetzt werden sollte und was in Reichweite bleiben muss.",
    },
    education: {
      title: "Bildung, Kultur und öffentliches Leben",
      summary: "Was an die nächste Generation weitergegeben wird und wer darüber entscheidet.",
    },
    government: {
      title: "Regierung, Justiz und öffentliche Ordnung",
      summary: "Autorität, ihre Schranken und der Umgang mit denen, die das Recht brechen.",
    },
    healthcare: {
      title: "Gesundheitswesen",
      summary: "Der Zugang zur notwendigen Versorgung und die Ethik, die darin geübt wird.",
    },
    environment: {
      title: "Umwelt, Land und Siedlung",
      summary: "Die Bewahrung eines Erbes, das nicht von uns geschaffen wurde.",
    },
    "foreign-policy": {
      title: "Außenpolitik und Verteidigung",
      summary:
        "Strategische Unabhängigkeit und ein beständiger Vorbehalt gegen jeden unnötigen Krieg.",
    },
  },

  search: {
    synonyms: {
      "church-and-state": [
        "Kirche und Staat",
        "Konfessionsstaat",
        "Staatsreligion",
        "Staatskirche",
        "Integralismus",
        "Säkularismus",
        "Laizismus",
      ],
      abortion: [
        "Abtreibung",
        "Schwangerschaftsabbruch",
        "Ungeborenes",
        "Lebensschutz",
        "Recht auf Leben",
        "Fristenlösung",
      ],
      euthanasia: [
        "Sterbehilfe",
        "assistierter Suizid",
        "Beihilfe zum Suizid",
        "Euthanasie",
        "Lebensende",
        "Palliativversorgung",
      ],
      contraception: [
        "Verhütung",
        "Empfängnisverhütung",
        "Antibabypille",
        "Pille",
        "Familienplanung",
        "Kondome",
        "Fruchtbarkeit",
      ],
      "same-sex-marriage": [
        "gleichgeschlechtliche Ehe",
        "Ehe für alle",
        "Homosexualität",
        "eingetragene Lebenspartnerschaft",
        "Zivilehe",
      ],
      pornography: [
        "Pornografie",
        "Pornographie",
        "Porno",
        "Erwachseneninhalte",
        "Obszönität",
      ],
      prostitution: [
        "Prostitution",
        "Sexarbeit",
        "Bordelle",
        "Zuhälterei",
        "Rotlichtviertel",
        "Menschenhandel",
      ],
      drugs: [
        "Drogen",
        "Betäubungsmittel",
        "Cannabis",
        "Marihuana",
        "Haschisch",
        "Entkriminalisierung",
      ],
      alcohol: ["Alkohol", "Bier", "Wein", "Spirituosen", "Trunkenheit", "Abstinenz"],
      gambling: [
        "Glücksspiel",
        "Wetten",
        "Sportwetten",
        "Kasino",
        "Lotterie",
        "Spielautomaten",
        "Lootboxen",
      ],
      blasphemy: [
        "Blasphemie",
        "Gotteslästerung",
        "Sakrileg",
        "Schändung",
        "Kirchenschändung",
      ],
      family: [
        "Familie",
        "Kinder",
        "Eltern",
        "Haushalt",
        "Mutterschaft",
        "Vaterschaft",
        "Kinderbetreuung",
      ],
      demography: [
        "Demografie",
        "Geburtenrate",
        "Fruchtbarkeit",
        "Bevölkerungsrückgang",
        "Überalterung",
        "Kinderlosigkeit",
      ],
      "sunday-rest": [
        "Sonntagsöffnung",
        "Sonntagsruhe",
        "Ladenöffnungszeiten",
        "Sabbat",
        "Ruhetag",
        "verkaufsoffener Sonntag",
      ],
      welfare: [
        "Sozialhilfe",
        "Sozialleistungen",
        "Bürgergeld",
        "soziales Netz",
        "Arbeitslosengeld",
        "Grundsicherung",
      ],
      nation: [
        "Nation",
        "Volk",
        "Heimat",
        "nationale Identität",
        "Patriotismus",
        "geschichtliche Kontinuität",
      ],
      immigration: [
        "Einwanderung",
        "Zuwanderung",
        "Migration",
        "Migranten",
        "Einwanderer",
        "Grenzkontrollen",
        "offene Grenzen",
        "Masseneinwanderung",
      ],
      "irregular-migration": [
        "irreguläre Migration",
        "illegale Einwanderung",
        "unrechtmäßiger Aufenthalt",
        "Legalisierung",
        "Amnestie",
      ],
      asylum: [
        "Asyl",
        "Flüchtlinge",
        "Asylbewerber",
        "internationaler Schutz",
        "Non-Refoulement",
        "sicherer Drittstaat",
      ],
      deportation: [
        "Abschiebung",
        "Ausweisung",
        "Rückführung",
        "Remigration",
        "Rückkehr",
        "Einreisesperre",
      ],
      citizenship: [
        "Staatsbürgerschaft",
        "Staatsangehörigkeit",
        "Pass",
        "Einbürgerung",
        "Geburtsortsprinzip",
        "Abstammungsprinzip",
      ],
      "dual-citizenship": [
        "doppelte Staatsbürgerschaft",
        "Mehrstaatigkeit",
        "zweiter Pass",
        "Verzicht",
      ],
      integration: [
        "Integration",
        "Assimilation",
        "Sprachanforderung",
        "Staatsbürgerkunde",
        "Einbürgerungstest",
      ],
      voting: ["Wahlrecht", "Stimmrecht", "Wahlen", "Wahlberechtigung"],
      "european-union": [
        "Europäische Union",
        "EU",
        "Brüssel",
        "Europäische Kommission",
        "Vertragsreform",
        "Euroskepsis",
        "Mitgliedstaaten",
      ],
      subsidiarity: [
        "Subsidiarität",
        "Dezentralisierung",
        "Föderalismus",
        "kommunale Selbstverwaltung",
        "Regionalismus",
      ],
      economy: [
        "Wirtschaft",
        "Wirtschaftsordnung",
        "Kapitalismus",
        "Sozialismus",
        "Distributismus",
        "freier Markt",
      ],
      property: [
        "Eigentum",
        "Besitz",
        "Kleineigentümer",
        "Genossenschaften",
        "breit gestreutes Eigentum",
      ],
      monopolies: [
        "Monopol",
        "Monopole",
        "Kartellrecht",
        "Wettbewerbsrecht",
        "Kartelle",
        "Großkonzerne",
        "Marktkonzentration",
      ],
      corporatism: [
        "Zünfte",
        "Kammern",
        "Korporatismus",
        "Handwerk",
        "Berufsausbildung",
        "berufsständische Vertretung",
      ],
      usury: ["Wucher", "Zinsen", "Kredite", "Darlehen", "Verschuldung", "Banken"],
      housing: [
        "Wohnen",
        "Wohnraum",
        "Miete",
        "Vermieter",
        "Hypotheken",
        "Immobilienpreise",
        "Wohneigentum",
        "Mieter",
      ],
      work: [
        "Arbeit",
        "Arbeitsplätze",
        "Beschäftigung",
        "Arbeitnehmer",
        "Arbeitswelt",
        "Erwerbstätigkeit",
      ],
      wages: [
        "Lohn",
        "Löhne",
        "Gehalt",
        "Mindestlohn",
        "gerechter Lohn",
        "Familienlohn",
        "Bezahlung",
      ],
      tax: [
        "Steuer",
        "Steuern",
        "Besteuerung",
        "Einkommensteuer",
        "Mehrwertsteuer",
        "Erbschaftsteuer",
        "Körperschaftsteuer",
        "Vermögensteuer",
      ],
      pensions: [
        "Rente",
        "Renten",
        "Ruhestand",
        "Altersvorsorge",
        "Rentenalter",
        "Alterssicherung",
      ],
      unions: [
        "Gewerkschaften",
        "Tarifverhandlungen",
        "Streiks",
        "Betriebsräte",
        "Arbeitnehmervertretung",
      ],
      technology: [
        "Technologie",
        "Technik",
        "Digitalisierung",
        "Innovation",
        "Big Tech",
        "Maschinen",
      ],
      "artificial-intelligence": [
        "künstliche Intelligenz",
        "KI",
        "maschinelles Lernen",
        "Algorithmen",
        "Chatbots",
        "Sprachmodelle",
      ],
      automation: [
        "Automatisierung",
        "Roboter",
        "Robotik",
        "Entqualifizierung",
        "Wegrationalisierung",
      ],
      cash: [
        "Bargeld",
        "Banknoten",
        "Münzen",
        "bargeldlose Gesellschaft",
        "Bankfilialen",
      ],
      "right-to-repair": [
        "Recht auf Reparatur",
        "Reparierbarkeit",
        "geplante Obsoleszenz",
        "Ersatzteile",
        "Wegwerfprodukte",
      ],
      surveillance: [
        "Überwachung",
        "Ausspähung",
        "Privatsphäre",
        "Videoüberwachung",
        "Vorratsdatenspeicherung",
        "Nachverfolgung",
      ],
      "facial-recognition": [
        "Gesichtserkennung",
        "Biometrie",
        "biometrische Identifizierung",
        "Gesichtsscan",
      ],
      "social-media": [
        "soziale Medien",
        "Smartphones",
        "Bildschirmzeit",
        "Altersverifikation",
        "Kinder im Netz",
        "Aufmerksamkeitsökonomie",
      ],
      "digital-identity": [
        "digitale Identität",
        "digitaler Ausweis",
        "elektronische Identität",
        "Personalausweis",
        "Sozialkredit",
      ],
      "central-bank-digital-currency": [
        "digitales Zentralbankgeld",
        "digitaler Euro",
        "CBDC",
        "programmierbares Geld",
      ],
      cryptocurrency: [
        "Kryptowährung",
        "Krypto",
        "Bitcoin",
        "Blockchain",
        "digitale Vermögenswerte",
      ],
      "genetic-engineering": [
        "Gentechnik",
        "Genmanipulation",
        "Genom-Editierung",
        "CRISPR",
        "Designerbabys",
        "Keimbahn",
        "Embryonen",
        "Eugenik",
      ],
      transhumanism: [
        "Transhumanismus",
        "Menschenoptimierung",
        "Kybernetik",
        "Gehirn-Computer-Schnittstelle",
        "Implantate",
      ],
      education: ["Bildung", "Schule", "Schulen", "Lehrplan", "Unterricht", "Schüler"],
      homeschooling: [
        "Hausunterricht",
        "Heimunterricht",
        "Homeschooling",
        "häusliche Bildung",
      ],
      "school-choice": [
        "Schulwahl",
        "Bildungsgutscheine",
        "Privatschulen",
        "freie Schulen",
        "katholische Schulen",
        "Schulen in freier Trägerschaft",
      ],
      universities: [
        "Universitäten",
        "Hochschulen",
        "Hochschulbildung",
        "Wissenschaftsfreiheit",
        "Forschung",
      ],
      "religion-in-schools": [
        "Religionsunterricht",
        "staatliche Schulen",
        "Christentum in der Schule",
        "Schulgebet",
        "weltlicher Unterricht",
      ],
      "sex-education": [
        "Sexualkunde",
        "Sexualerziehung",
        "Aufklärungsunterricht",
        "Elternrechte",
        "Einwilligung",
      ],
      culture: [
        "Kultur",
        "Tradition",
        "Brauchtum",
        "Dialekte",
        "Volkskunde",
        "Feste",
        "Vereinheitlichung",
        "Globalisierung",
      ],
      architecture: [
        "Architektur",
        "Bauwesen",
        "Stadtplanung",
        "Denkmalschutz",
        "Baukultur",
        "Ortsbild",
      ],
      "free-speech": [
        "Meinungsfreiheit",
        "freie Rede",
        "Zensur",
        "Hassrede",
        "Redeverbote",
        "Pressefreiheit",
        "Aufstachelung",
      ],
      prisons: [
        "Gefängnisse",
        "Haft",
        "Strafvollzug",
        "Strafzumessung",
        "Strafe",
        "Resozialisierung",
        "Strafjustiz",
      ],
      "death-penalty": ["Todesstrafe", "Hinrichtung", "Kapitalstrafe", "Abschaffung"],
      firearms: [
        "Schusswaffen",
        "Waffen",
        "Waffenrecht",
        "Notwehr",
        "Selbstverteidigung",
        "Jagd",
      ],
      healthcare: [
        "Gesundheitsversorgung",
        "Gesundheitswesen",
        "Krankenhäuser",
        "Ärzte",
        "Medizin",
        "Krankenversicherung",
      ],
      "medical-ethics": [
        "Medizinethik",
        "Bioethik",
        "Gewissen",
        "Gewissensvorbehalt",
        "katholische Krankenhäuser",
      ],
      environment: [
        "Umwelt",
        "Natur",
        "Ökologie",
        "Naturschutz",
        "Artenvielfalt",
        "Verschmutzung",
        "Ackerland",
        "Bewahrung der Schöpfung",
      ],
      energy: [
        "Energie",
        "Strom",
        "Stromnetz",
        "Energiepreise",
        "Versorgungssicherheit",
        "Stromausfall",
      ],
      "nuclear-power": ["Kernkraft", "Atomkraft", "Kernenergie", "Reaktoren", "Atommüll"],
      "fossil-fuels": [
        "fossile Brennstoffe",
        "Kohle",
        "Erdöl",
        "Erdgas",
        "Benzin",
        "Diesel",
        "Kohlenwasserstoffe",
      ],
      renewables: [
        "erneuerbare Energien",
        "Solarenergie",
        "Photovoltaik",
        "Windkraft",
        "Windräder",
        "Wasserkraft",
        "Geothermie",
        "Ökostrom",
      ],
      climate: [
        "Klimawandel",
        "Erderwärmung",
        "Kohlenstoff",
        "Emissionen",
        "Klimaneutralität",
        "Treibhausgase",
        "Dekarbonisierung",
      ],
      defence: ["Verteidigung", "Militär", "Armee", "Streitkräfte", "Aufrüstung"],
      nato: [
        "NATO",
        "Nordatlantikpakt",
        "Artikel 5",
        "kollektive Verteidigung",
        "Militärbündnisse",
      ],
      russia: ["Russland", "Russische Föderation", "Moskau", "Kreml"],
      ukraine: ["Ukraine", "Kiew", "Krieg in der Ukraine", "Friedensverhandlungen"],
      "united-states": [
        "Vereinigte Staaten",
        "USA",
        "Amerika",
        "Washington",
        "Atlantizismus",
      ],
      china: ["China", "Volksrepublik China", "Peking", "Lieferketten"],
      "israel-and-palestine": ["Israel", "Palästina", "Gaza", "Naher Osten"],
      "foreign-aid": [
        "Entwicklungshilfe",
        "humanitäre Hilfe",
        "Entwicklungszusammenarbeit",
        "Auslandshilfe",
      ],
      sanctions: [
        "Sanktionen",
        "Embargo",
        "Einfrieren von Vermögenswerten",
        "wirtschaftlicher Zwang",
        "Handelsbeschränkungen",
      ],
      conscription: [
        "Wehrpflicht",
        "Einberufung",
        "Wehrdienst",
        "Nationaldienst",
        "Reserve",
        "Kriegsdienstverweigerung",
      ],
      "nuclear-weapons": [
        "Atomwaffen",
        "Kernwaffen",
        "nukleare Abschreckung",
        "Abrüstung",
        "Nichtverbreitung",
        "Rüstungskontrolle",
      ],
    },
  },

  entries: {
    "catholic-confessional-state": {
      title: "Katholischer Konfessionsstaat",
      shortAnswer:
        "Restore Europa tritt für die förmliche verfassungsmäßige Anerkennung des Katholizismus als vorrangiger öffentlicher Religion ein und verwirft die Behauptung, der Staat könne sittlich oder religiös neutral sein.",
      position: [
        "Restore Europa tritt für eine tief verankerte katholische konfessionelle politische Ordnung ein. Der Staat sollte den Katholizismus förmlich als vorrangige öffentliche Religion anerkennen und keine sittliche oder religiöse Neutralität für sich beanspruchen.",
      ],
      policies: [
        "Der Katholizismus sollte förmliche verfassungsmäßige Anerkennung erhalten.",
        "Die katholische Sittenlehre darf das öffentliche Recht und die öffentlichen Institutionen prägen.",
        "Kirche und weltlicher Staat bleiben institutionell getrennt, doch der Staat ist nicht die metaphysisch höchste Instanz.",
        "Katholische Feiertage, Kirchen, Symbole, Prozessionen, Schulen und öffentliche Überlieferungen sollten geschützt werden.",
        "Der Staat sollte in Fragen der Familie, der Bildung, der Sittlichkeit und der Gesellschaft mit der Kirche zusammenarbeiten.",
      ],
      principle:
        "Der Staat regiert die weltlichen Angelegenheiten, die Kirche die geistlichen; die weltliche Autorität bleibt der höheren sittlichen Ordnung unterworfen.",
      limits: [
        "Restore Europa tritt nicht für Zwangsbekehrung ein.",
        "Dieses Modell ist keine unmittelbare Leitung der gewöhnlichen Staatsverwaltung durch Geistliche.",
      ],
      keywords: [
        "katholischer Staat",
        "Konfessionsstaat",
        "Integralismus",
        "Kirche und Staat",
        "Staatsreligion",
      ],
    },

    abortion: {
      title: "Abtreibung",
      shortAnswer:
        "Restore Europa hält daran fest, dass menschliches Leben von der Empfängnis an zu schützen ist und dass die unmittelbare Abtreibung auf Wunsch verboten werden sollte.",
      position: [
        "Restore Europa folgt der katholischen Lehre, dass menschliches Leben von der Empfängnis an zu achten und zu schützen ist. Die unmittelbare Abtreibung auf Wunsch sollte verboten werden.",
      ],
      policies: [
        "Rechtlicher Schutz des ungeborenen menschlichen Lebens von der Empfängnis an.",
        "Verbot der unmittelbaren Abtreibung auf Wunsch.",
        "Materielle, medizinische und gesellschaftliche Unterstützung für schwangere Frauen und Familien.",
        "Unterstützung der Adoption und praktischer Alternativen zur Abtreibung.",
        "Eine ärztliche Behandlung, die das Leben der Mutter retten soll, kann zulässig bleiben, wenn der Tod des ungeborenen Kindes eine unbeabsichtigte Nebenwirkung und nicht das beabsichtigte Mittel oder Ziel ist.",
      ],
      principle:
        "Die Würde des Menschen und das Recht auf Leben beginnen nicht erst dann, wenn der Staat sich entschließt, sie anzuerkennen.",
      keywords: [
        "Abtreibung",
        "Ungeborenes",
        "Empfängnis",
        "Lebensschutz",
        "Schwangerschaftsabbruch",
      ],
    },

    "euthanasia-and-assisted-suicide": {
      title: "Sterbehilfe und assistierter Suizid",
      shortAnswer:
        "Restore Europa wendet sich gegen die direkte Sterbehilfe und den assistierten Suizid, tritt für die Palliativversorgung ein und lässt die Ablehnung außerordentlicher oder unverhältnismäßiger Behandlung zu.",
      position: [
        "Restore Europa wendet sich gegen die direkte Sterbehilfe und den assistierten Suizid und tritt für die Palliativversorgung ein, lässt zugleich aber die Ablehnung außerordentlicher oder unverhältnismäßiger Behandlung zu.",
      ],
      policies: [
        "Direkte Sterbehilfe verboten.",
        "Assistierter Suizid verboten.",
        "Ein starkes Angebot an Hospiz- und Palliativversorgung.",
        "Patienten dürfen außerordentliche, übermäßig belastende oder unverhältnismäßige Behandlung ablehnen.",
        "Die Schmerzlinderung bleibt zulässig, solange der Tod nicht beabsichtigt ist.",
      ],
      keywords: [
        "Sterbehilfe",
        "assistierter Suizid",
        "Euthanasie",
        "Palliativversorgung",
        "Hospiz",
      ],
    },

    "marriage-and-sexual-ethics": {
      title: "Ehe und Sexualethik",
      shortAnswer:
        "Restore Europa erkennt die bürgerliche Ehe als Verbindung eines Mannes und einer Frau an und richtet das Familienrecht auf die natürliche Familie aus.",
      position: [
        "Restore Europa erkennt die bürgerliche Ehe ausschließlich als Verbindung eines Mannes und einer Frau an und folgt der katholischen Sittenlehre zur Geschlechtlichkeit.",
      ],
      policies: [
        "Die gleichgeschlechtliche Ehe wird rechtlich nicht als Ehe anerkannt.",
        "Das Familienrecht ist auf die natürliche Familie aus Mutter, Vater und Kindern ausgerichtet.",
        "Religiöse Einrichtungen dürfen nicht gezwungen werden, gleichgeschlechtliche Verbindungen anzuerkennen oder zu schließen.",
        "Das Adoptionsrecht sollte der Beziehung eines Kindes zu Mutter und Vater den Vorrang geben.",
      ],
      keywords: ["Ehe", "gleichgeschlechtliche Ehe", "Familienrecht", "Adoption", "Zivilehe"],
    },

    contraception: {
      title: "Empfängnisverhütung",
      shortAnswer:
        "Restore Europa wendet sich gegen die künstliche Empfängnisverhütung und verwirft eine öffentliche Kultur, die die dauerhafte Vermeidung der Fruchtbarkeit als normale Grundlage des geschlechtlichen Lebens behandelt, ohne den privaten Besitz durch Erwachsene unter Strafe zu stellen.",
      position: [
        "Restore Europa folgt der katholischen Lehre in der Ablehnung der künstlichen Empfängnisverhütung und verwirft eine öffentliche Kultur, die die dauerhafte Vermeidung der Fruchtbarkeit als normale Grundlage des geschlechtlichen Lebens behandelt.",
      ],
      policies: [
        "Keine staatliche Förderung der künstlichen Empfängnisverhütung.",
        "Keine gewöhnliche Bezuschussung der Empfängnisverhütung aus Steuermitteln, außer wenn ein Arzneimittel tatsächlich zu einem gesonderten medizinischen Zweck verordnet wird.",
        "Beschränkungen der Werbung für Empfängnisverhütung, die sich an Minderjährige richtet.",
        "Schulen sollten die Empfängnisverhütung nicht als die sittlich neutrale Standardlösung für das geschlechtliche Verhalten darstellen.",
        "Die natürliche Beobachtung der Fruchtbarkeit und die natürliche Familienplanung werden anders behandelt als die künstliche Empfängnisverhütung.",
      ],
      limits: [
        "Diese Position stellt den privaten Besitz von Verhütungsmitteln durch Erwachsene nicht unter Strafe.",
      ],
      keywords: [
        "Empfängnisverhütung",
        "Verhütung",
        "Pille",
        "natürliche Familienplanung",
        "Fruchtbarkeit",
      ],
    },

    pornography: {
      title: "Pornografie",
      shortAnswer:
        "Restore Europa tritt für das vollständige gesetzliche Verbot der Pornografie ein.",
      position: [
        "Restore Europa tritt für das vollständige gesetzliche Verbot der Pornografie ein.",
      ],
      policies: [
        "Herstellung, Finanzierung, gewerbliche Verbreitung, Verkauf und öffentliche Zurschaustellung verboten.",
        "Das Bereithalten im Netz und die wissentliche gewerbliche Bereitstellung verboten.",
        "Der absichtliche Besitz oder Erwerb pornografischen Materials verboten.",
        "Die schwersten Strafen treffen gewerbliche Hersteller, Verbreiter, ausbeuterische Plattformen und Material, an dem Zwang, Menschenhandel oder Minderjährige beteiligt sind.",
        "Die rechtliche Begriffsbestimmung sollte die rechtmäßige Medizin, die Anatomie, die Wissenschaft, die klassische Kunst und nichtpornografische Literatur ausnehmen.",
      ],
      principle:
        "Die Geschlechtlichkeit und der menschliche Leib sollten nicht auf Waren zur Reizung und zum Verbrauch herabgesetzt werden.",
      keywords: ["Pornografie", "Porno", "Erwachseneninhalte", "explizite Inhalte", "Obszönität"],
    },

    prostitution: {
      title: "Prostitution",
      shortAnswer:
        "Restore Europa tritt für das vollständige gesetzliche Verbot der Prostitution und ihrer gewerblichen Förderung ein, mit Ausstiegshilfen für diejenigen, die sie verlassen.",
      position: [
        "Restore Europa tritt für das vollständige gesetzliche Verbot der Prostitution und ihrer gewerblichen Förderung ein.",
      ],
      policies: [
        "Der Kauf sexueller Dienste verboten.",
        "Der Verkauf sexueller Dienste verboten.",
        "Bordelle, Zuhälterei und gewerbliche Förderung verboten.",
        "Werbung für Prostitution verboten.",
        "Menschenhandel zum Zweck der sexuellen Ausbeutung und erzwungene Ausbeutung werden besonders schwer bestraft.",
        "Ausstiegsprogramme, Wohnraum, Suchtbehandlung und berufliche Hilfen stehen Menschen offen, die die Prostitution verlassen.",
      ],
      keywords: ["Prostitution", "Bordelle", "Sexarbeit", "Zuhälterei", "Menschenhandel"],
    },

    "recreational-drugs": {
      title: "Rauschdrogen",
      shortAnswer:
        "Restore Europa tritt dafür ein, dass Betäubungsmittel zum Rauschgebrauch einschließlich Cannabis verboten bleiben, wobei Händler härter bestraft werden als abhängige Konsumenten.",
      position: [
        "Restore Europa tritt in der Regel dafür ein, dass Betäubungsmittel zum Rauschgebrauch, einschließlich Cannabis zum Rauschgebrauch, verboten bleiben.",
      ],
      policies: [
        "Gewerbliche Herstellung und Drogenhandel verboten.",
        "Der Verkauf zum Rauschgebrauch verboten.",
        "Der Besitz bleibt rechtswidrig, mit Strafen, die im Verhältnis zur Tat stehen.",
        "Dealer und der organisierte Drogenhandel werden härter bestraft als abhängige Konsumenten.",
        "Behandlung, Entzug und Rehabilitation stehen bei Abhängigkeit zur Verfügung.",
        "Der tatsächliche medizinische Gebrauch wird gesondert vom Rauschgebrauch behandelt.",
      ],
      keywords: ["Drogen", "Cannabis", "Marihuana", "Betäubungsmittel", "Entkriminalisierung"],
    },

    alcohol: {
      title: "Alkohol",
      shortAnswer:
        "Alkohol bleibt für Erwachsene bei maßvollem Gebrauch erlaubt. Restore Europa wendet sich gegen Trunkenheit, Missbrauch und Verhalten, das anderen schadet.",
      position: [
        "Alkohol bleibt für Erwachsene erlaubt, sofern er maßvoll gebraucht wird. Restore Europa wendet sich gegen Trunkenheit, Missbrauch und Verhalten, das anderen schadet.",
      ],
      policies: [
        "Der Verkauf an Minderjährige verboten.",
        "Trunkenheit am Steuer und alkoholbedingte Störungen der öffentlichen Ordnung werden bestraft.",
        "Werbung, die sich an Minderjährige richtet, beschränkt.",
        "Die Behandlung der Alkoholabhängigkeit wird unterstützt.",
        "Der überlieferte maßvolle Genuss bleibt erlaubt.",
      ],
      keywords: ["Alkohol", "Bier", "Wein", "Trunkenheit", "Mäßigkeit"],
    },

    gambling: {
      title: "Glücksspiel",
      shortAnswer:
        "Glücksspiel darf in begrenzten Formen für Erwachsene erlaubt bleiben, streng geregelt gegen Sucht, Betrug und Ausbeutung.",
      position: [
        "Glücksspiel darf in begrenzten Formen für Erwachsene erlaubt bleiben, sollte aber gegen Sucht, Betrug und Ausbeutung streng geregelt werden.",
      ],
      policies: [
        "Glücksspiel Minderjähriger verboten.",
        "Werbung, die sich an junge oder gefährdete Menschen richtet, beschränkt.",
        "Ausbeuterische oder absichtlich manipulative Spielmechaniken beschränkt oder verboten.",
        "Risikoreiches Online-Glücksspiel unterliegt strenger Regelung.",
        "Systeme zur Selbstsperre und zur Suchtbehandlung vorgeschrieben.",
        "Betrug, illegale Wettangebote und Spielmanipulation werden schwer bestraft.",
      ],
      keywords: ["Glücksspiel", "Wetten", "Kasino", "Sportwetten", "Lootboxen"],
    },

    "blasphemy-and-sacrilege": {
      title: "Gotteslästerung und Sakrileg",
      shortAnswer:
        "Unglaube, Kritik und theologische Auseinandersetzung bleiben erlaubt. Die absichtliche Schändung des Heiligen darf verboten werden.",
      position: [
        "Restore Europa unterscheidet Unglaube und Kritik von der absichtlichen öffentlichen Entweihung. Atheismus und theologische Meinungsverschiedenheit sind für sich genommen keine Straftaten, während die absichtliche Schändung des Heiligen verboten werden darf.",
      ],
      policies: [
        "Atheismus und privater Unglaube bleiben erlaubt.",
        "Die Kritik an kirchlichen Amtsträgern und die theologische Auseinandersetzung bleiben erlaubt.",
        "Die absichtliche Schändung geweihter Gegenstände, von Kirchen oder heiliger christlicher Riten darf unter Strafe gestellt werden.",
        "Christenfeindlicher Vandalismus bleibt nach dem allgemeinen Strafrecht strafbar und kann das Sakrileg als straferschwerendes Merkmal tragen.",
      ],
      principle:
        "Das Heilige schützen, ohne den Zweifel, den Widerspruch oder die geistige Forschung unter Strafe zu stellen.",
      keywords: ["Blasphemie", "Sakrileg", "Atheismus", "Schändung", "Vandalismus"],
    },

    family: {
      title: "Familie",
      shortAnswer:
        "Die um die Ehe gebildete Familie ist die grundlegende gesellschaftliche Institution, und die Politik sollte Ehe und Kindererziehung materiell möglich machen.",
      position: [
        "Die Familie, die sich um die Ehe von Mann und Frau bildet, um die Erziehung der Kinder, um die Verpflichtung zwischen den Generationen und um die Sorge für die Jungen und die Alten, ist die grundlegende gesellschaftliche Institution.",
      ],
      policies: [
        "Ein Steuerrecht, das an der Familie ausgerichtet ist.",
        "Unterstützung der Eltern.",
        "Bezahlbarer Wohnraum für Familien.",
        "Sichere Arbeitsverhältnisse und genug Zeit außerhalb der Erwerbsarbeit.",
        "Die Politik sollte Ehe und Kindererziehung materiell möglich machen.",
      ],
      keywords: ["Familie", "Kinder", "Ehe", "Eltern", "Haushalt"],
    },

    "demographic-renewal": {
      title: "Demografische Erneuerung",
      shortAnswer:
        "Europa sollte dem demografischen Rückgang begegnen, indem es die Familiengründung für die eigene Bevölkerung möglich macht, und nicht durch dauerhafte Masseneinwanderung.",
      position: [
        "Europa sollte dem demografischen Rückgang vor allem dadurch begegnen, dass es Familiengründung und Kindererziehung für die eigene Bevölkerung möglich macht, statt dauerhafte Masseneinwanderung als Ersatz für Geburten zu verwenden.",
      ],
      keywords: ["Demografie", "Geburtenrate", "Fruchtbarkeit", "Bevölkerung", "Rückgang"],
    },

    "sunday-rest-and-trading": {
      title: "Sonntagsruhe und Ladenöffnung",
      shortAnswer:
        "Der Sonntag sollte als gemeinsamer Tag des Gottesdienstes, der Familie und der Ruhe wiederhergestellt werden, mit weitgehender Beschränkung der gewöhnlichen gewerblichen Tätigkeit.",
      position: [
        "Der Sonntag sollte als der normale gemeinsame Tag des Gottesdienstes, der Familie und der Ruhe wiederhergestellt werden. Die gewöhnliche gewerbliche Tätigkeit sollte deshalb weitgehend beschränkt werden.",
      ],
      policies: [
        "Gewöhnliche Geschäfte sonntags in der Regel geschlossen.",
        "Der Inhaber eines kleinen Ladens darf sich persönlich entscheiden zu öffnen und zu arbeiten, doch von gewöhnlichen Beschäftigten sollte nicht regelmäßig Sonntagsarbeit verlangt werden.",
        "Krankenhäuser, Rettungsdienste, kritische Infrastruktur, der notwendige öffentliche Verkehr und Apotheken dürfen tätig sein.",
        "Das Gastgewerbe darf nach gesonderten Regeln arbeiten, weil die Nachfrage am Sonntag zu seiner Aufgabe gehört.",
        "Die Ausnahmen sollten eng genug bleiben, dass der Sonntag kein gewöhnlicher Handelstag wird.",
      ],
      principle:
        "Ein gemeinsamer Tag der Ruhe schützt Gottesdienst, Familienleben und Gemeinschaft vor der vollständigen wirtschaftlichen Vereinnahmung.",
      keywords: ["Sonntagsverkauf", "Geschäfte", "Ladenschluss", "Ruhetag", "Öffnungszeiten"],
    },

    "welfare-and-social-assistance": {
      title: "Sozialleistungen und Sozialhilfe",
      shortAnswer:
        "Ein soziales Netz, das sich vorrangig an Bürger, Familien und diejenigen richtet, die sich wirklich nicht selbst unterhalten können, und das Solidarität ausdrückt, ohne zu dauerhafter vermeidbarer Abhängigkeit zu werden.",
      position: [
        "Restore Europa tritt für ein soziales Netz ein, das sich vorrangig an Bürger, Familien und Menschen richtet, die sich wirklich nicht selbst unterhalten können. Sozialleistungen sollten Solidarität ausdrücken, ohne zu einem dauerhaften System vermeidbarer Abhängigkeit zu werden.",
      ],
      policies: [
        "Vorrang für Bürger und ihre Familien, für Kinder, Pflegende, Menschen mit Behinderung, alte Menschen und Haushalte in wirklicher Not.",
        "Von arbeitsfähigen Empfängern im erwerbsfähigen Alter wird in der Regel erwartet, dass sie Arbeit, Ausbildung oder Rehabilitation suchen.",
        "Von Nichtstaatsangehörigen wird in der Regel erwartet, dass sie arbeiten und für sich selbst sorgen, statt um dauerhafter Sozialleistungen willen einzuwandern.",
        "Beitragsabhängige Leistungen können ausländischen Arbeitnehmern, die rechtmäßig im Land sind und tatsächlich in das betreffende System eingezahlt haben, weiterhin offenstehen.",
        "Sozialleistungsbetrug führt zur Rückzahlung und zu verhältnismäßigen Strafen.",
        "Katholische, christliche und geschichtlich gewachsene karitative Einrichtungen dürfen eine wichtige Rolle spielen, bei nachvollziehbarer Prüfung der öffentlichen Mittel.",
      ],
      principle:
        "Familie, Pfarrei und die Einrichtungen vor Ort sollten vor der fernen zentralen Verwaltung tätig werden, soweit sie das sachgerecht können.",
      keywords: ["Sozialleistungen", "Sozialhilfe", "Bürgergeld", "soziales Netz", "Abhängigkeit"],
    },

    "nation-and-historical-continuity": {
      title: "Nation und geschichtliche Kontinuität",
      shortAnswer:
        "Die Nation ist eine geschichtliche Gemeinschaft über die Generationen hinweg, und die europäischen Völker haben ein berechtigtes Interesse daran, ihre kulturelle und geschichtliche Kontinuität zu wahren.",
      position: [
        "Die Nation ist eine geschichtliche Gemeinschaft über die Generationen hinweg, geformt von Erinnerung, Sprache, Sitte, Institutionen, einem gemeinsamen Gebiet und dem Bewusstsein eines gemeinsamen Schicksals. Die europäischen Völker haben ein berechtigtes Interesse daran, ihre kulturelle und geschichtliche Kontinuität zu wahren.",
      ],
      keywords: ["Nation", "Volk", "Heimat", "Kontinuität", "Identität"],
    },

    immigration: {
      title: "Einwanderung",
      shortAnswer:
        "Einwanderung sollte auf ein Maß begrenzt bleiben, das wirkliche Integration, gesellschaftliche Stabilität, die Tragfähigkeit der Infrastruktur und die demografische Kontinuität zulässt.",
      position: [
        "Einwanderung sollte auf ein Maß begrenzt bleiben, das wirkliche Integration, gesellschaftliche Stabilität, die Tragfähigkeit der Infrastruktur und die demografische wie kulturelle Kontinuität der aufnehmenden Nation zulässt.",
      ],
      policies: [
        "Grenzen bleiben legitime politische Einrichtungen.",
        "Die Einwanderungspolitik muss dem langfristigen Gemeinwohl der aufnehmenden Nation dienen.",
        "Humanitäre Verpflichtungen verlangen nicht, die Verfügung über die demografische Entwicklung aus der Hand zu geben.",
      ],
      keywords: ["Einwanderung", "Migration", "Grenzen", "Integration", "Asyl"],
    },

    "asylum-and-international-protection": {
      title: "Asyl und internationaler Schutz",
      shortAnswer:
        "Asyl ist Schutz vor wirklicher Verfolgung oder ernster Gefahr und kein allgemeines Verfahren, sich ein bevorzugtes Zielland auszusuchen.",
      position: [
        "Schutz sollte in der Regel im ersten wirklich sicheren erreichbaren Land gewährt werden und, wo es praktikabel ist, so nah wie möglich an der Herkunftsregion des Vertriebenen. Die europäischen Staaten behalten das Recht, unbegründete Anträge abzulehnen und Personen abzuschieben, die keine rechtmäßige Grundlage für den Verbleib haben.",
      ],
      policies: [
        "Der Zugang zum Asyl bleibt für Personen erhalten, die glaubhaft Verfolgung oder ernsten Schaden geltend machen.",
        "Unverzügliche Registrierung, Identitätsprüfung und Sicherheitsüberprüfung werden verlangt.",
        "Für Antragsteller aus allgemein sicheren Staaten werden beschleunigte Verfahren angewandt, wobei die Gelegenheit erhalten bleibt, im Einzelfall darzulegen, dass die Vermutung auf sie nicht zutrifft.",
        "Der Grundsatz des ersten sicheren Landes oder des sicheren Drittstaats wird streng angewandt, wo wirksamer Schutz tatsächlich zur Verfügung steht.",
        "Flüchtlinge werden von gewöhnlichen Wirtschaftsmigranten unterschieden; wirtschaftliche Not allein ist kein Asylgrund.",
        "Humanitäre Hilfe in der Herkunftsregion und die geordnete Aufnahme besonders schutzbedürftiger Flüchtlinge haben Vorrang, wo das angemessen ist.",
        "Abgelehnte Antragsteller sollten unverzüglich zurückgeführt werden, sobald die zustehenden Rechtsbehelfe erschöpft sind.",
        "Vorübergehender Schutz im Kriegsfall sollte vorübergehend bleiben und überprüft werden, wenn sich die Verhältnisse wesentlich ändern.",
        "Unbegleitete Minderjährige und Personen mit wirklicher Schutzbedürftigkeit erhalten gesonderte Sicherungen.",
      ],
      keywords: [
        "Asyl",
        "Flüchtlinge",
        "erstes sicheres Land",
        "sicherer Drittstaat",
        "Nichtzurückweisung",
        "vorübergehender Schutz",
        "Rückführung",
      ],
    },

    "asylum-work-and-public-assistance": {
      title: "Asyl, Arbeit und öffentliche Unterstützung",
      shortAnswer:
        "Schutz sollte die Selbständigkeit fördern statt dauerhafte Abhängigkeit von Sozialleistungen.",
      position: [
        "Von Personen, die zum Schutz aufgenommen wurden und arbeitsfähig sind, sollte erwartet werden, dass sie sich so rasch wie vernünftigerweise möglich wirtschaftlich selbst tragen. Laufende Anträge sollten nicht ohne Weiteres den Zugang zum vollen gewöhnlichen System der Sozialleistungen eröffnen.",
      ],
      policies: [
        "Rechtmäßige Arbeit wird erlaubt, sobald es verwaltungsmäßig praktikabel ist.",
        "Von arbeitsfähigen Erwachsenen wird erwartet, dass sie Arbeit suchen, sobald ihnen Beschäftigung rechtlich offensteht.",
        "Während der Prüfung des Antrags richtet sich die Unterstützung auf die notwendige Unterkunft, auf Nahrung, auf die wesentliche Gesundheitsversorgung und auf das Nötigste und nicht auf unbeschränkte Geldleistungen.",
        "Verhältnismäßige Anforderungen an Arbeit, Sprache und Mitwirkung sind zulässig, soweit das Recht sie erlaubt.",
        "Es wird kein bevorzugter Zugang zu knappen öffentlichen Leistungen gegenüber Bürgern in vergleichbarer Not geschaffen.",
        "Nach der endgültigen Ablehnung endet die auf Integration gerichtete Unterstützung und die Person geht in das Rückführungsverfahren über.",
        "Das Nötigste im Notfall und eine angemessene Unterstützung für Kinder und für Personen, die sich wirklich nicht selbst unterhalten können, bleiben erhalten.",
      ],
      keywords: [
        "Asyl",
        "Sozialleistungen",
        "Arbeitspflicht",
        "Selbstversorgung",
        "Flüchtlinge",
        "öffentliche Fürsorge",
        "vorübergehender Schutz",
      ],
    },

    "deportation-of-criminal-offenders": {
      title: "Strafrechtliche Abschiebung und Wiedereinreiseverbote",
      shortAnswer:
        "Schwer straffällig gewordene Ausländer werden nach dem Strafverfahren abgeschoben und dauerhaft ausgeschlossen; gewöhnliche Verstöße gegen das Aufenthaltsrecht ziehen in der Regel ein zehnjähriges Wiedereinreiseverbot nach sich.",
      position: [
        "Staatsbürgerschaft und ausländischer Aufenthalt sind verschiedene Rechtsstellungen. Schwere vorsätzliche Straftaten eines Ausländers können es rechtfertigen, den Aufenthalt nach einer Verurteilung in einem fairen Strafverfahren zu beenden.",
        "Der ausländische Aufenthalt verleiht nicht dasselbe dauerhafte Recht auf Verbleib wie die Staatsbürgerschaft. Ein Ausländer, der wegen einer schweren Straftat des einschlägigen Katalogs verurteilt wird, sollte in der Regel den Aufenthalt verlieren und nach Abschluss des maßgeblichen Strafverfahrens abgeschoben werden.",
      ],
      policies: [
        "Vor einer Abschiebung wegen Straftaten ist eine rechtmäßige Verurteilung wegen der herangezogenen Tat erforderlich.",
        "Schwere Gewaltkriminalität, schwere Sexualstraftaten, Raub, organisierte Kriminalität, Terrorismus, Menschenhandel, schwerer Drogenhandel, schwerer Betrug und vergleichbare vorsätzliche Straftaten lösen vermutungsweise die Abschiebung aus.",
        "Wiederholte Straffälligkeit kann die Abschiebung auch dann rechtfertigen, wenn die einzelnen Taten weniger schwer wiegen.",
        "Vorsätzlicher Mord, Vergewaltigung, schwerer sexueller Missbrauch von Kindern, Terrorismus, schwerer Menschenhandel, schwere organisierte Gewalt und vergleichbare schwerwiegende Straftaten gelten vermutungsweise als Fälle eines dauerhaften Verbots.",
        "An qualifizierte Abschiebungen wegen schwerer Straftaten und wegen schwerwiegender Gefahren für die nationale Sicherheit wird ein dauerhaftes Wiedereinreiseverbot geknüpft.",
        "Für schwere gewöhnliche Verstöße gegen das Aufenthaltsrecht wie die vorsätzliche unerlaubte Einreise, den wiederholten unerlaubten Aufenthalt oder die vorsätzliche Umgehung einer Rückkehrentscheidung gilt regelmäßig ein zehnjähriges Wiedereinreiseverbot, vorbehaltlich der Verhältnismäßigkeitsregeln des Ausführungsgesetzes.",
        "Bei wirklich geringfügigen oder rein technischen Verstößen gegen das Aufenthaltsrecht sind mildere Sanktionen zulässig, wo ein zehnjähriges Verbot unverhältnismäßig wäre.",
        "Die Abschiebung wird nach der Verbüßung der Haftstrafe vollzogen, sofern nicht eine rechtmäßige Überstellung oder eine frühere Abschiebung möglich ist.",
        "Geringfügige Verwaltungsverstöße oder Bagatelltaten lösen nicht ohne Weiteres eine dauerhafte Ausweisung aus.",
        "Eingebürgerte Staatsbürger bleiben dem gesonderten Rahmen der Aberkennung der Staatsbürgerschaft unterstellt, solange die Staatsbürgerschaft nicht zuvor rechtmäßig entzogen worden ist.",
        "Bürger dürfen nicht aus ihrem eigenen Land abgeschoben werden.",
      ],
      keywords: [
        "Abschiebung",
        "strafrechtliche Abschiebung",
        "Straftäter",
        "Ausweisung",
        "Wiedereinreiseverbot",
        "zehn Jahre",
        "dauerhaftes Verbot",
        "Mord",
        "Vergewaltigung",
        "Terrorismus",
        "unerlaubter Aufenthalt",
        "Aufenthaltstitel",
        "öffentliche Ordnung",
        "Rückführung",
      ],
    },

    "citizenship-general-principle": {
      title: "Staatsbürgerschaft: Grundsatz",
      shortAnswer:
        "Die Staatsbürgerschaft ist die Zugehörigkeit zu einer geschichtlichen politischen Gemeinschaft und keine Folge des Aufenthalts; Restore Europa verwirft die automatische Staatsbürgerschaft durch Geburt im Staatsgebiet als allgemeine Regel.",
      position: [
        "Die Staatsbürgerschaft ist die Zugehörigkeit zu einer geschichtlichen politischen Gemeinschaft und nicht bloß Aufenthalt. Restore Europa verwirft die automatische Staatsbürgerschaft durch Geburt im Staatsgebiet als allgemeine Regel.",
      ],
      policies: [
        "Die Staatsbürgerschaft geht in der Regel über die Abstammung von Staatsbürgern über.",
        "Die Geburt im Staatsgebiet als Kind von Eltern ohne Staatsbürgerschaft verleiht für sich genommen keine Staatsbürgerschaft.",
        "Die Einbürgerung setzt eine tiefgehende sprachliche, kulturelle, staatsbürgerliche und patriotische Assimilation voraus.",
        "Die Einbürgerung ist die Aufnahme in die nationale politische Gemeinschaft und kein Anspruch, der sich aus dem Aufenthalt von selbst ergibt.",
      ],
      keywords: [
        "Staatsbürgerschaft",
        "Geburtsrecht",
        "Geburtsortsprinzip",
        "Abstammungsprinzip",
        "Staatsangehörigkeit",
      ],
    },

    naturalization: {
      title: "Assimilation und Einbürgerung",
      shortAnswer:
        "Die Staatsbürgerschaft verlangt einen deutlich höheren Maßstab als der gewöhnliche Aufenthalt oder die Integration: die gelungene Assimilation in die politische Gemeinschaft der Nation.",
      position: [
        "Der gewöhnliche Einbürgerungsweg von Restore Europa verlangt etwa fünfzehn Jahre rechtmäßigen Aufenthalt, ehe ein Antrag gestellt werden darf, dazu außerordentlich anspruchsvolle Anforderungen an die Assimilation.",
        "Die Einbürgerung ist keine selbsttätige Folge der im Land verbrachten Zeit. Antragsteller müssen anspruchsvolle Anforderungen an Sprache, staatsbürgerliche Kenntnisse, Verhalten und Verbundenheit erfüllen, ehe die Staatsbürgerschaft verliehen wird.",
      ],
      policies: [
        "Der im Katalog vorgesehene gewöhnliche Aufenthaltsweg von etwa fünfzehn Jahren vor einem Einbürgerungsantrag bleibt erhalten.",
        "Verlangt werden eine fortgeschrittene praktische Beherrschung der Landessprache und belastbare Kenntnis der Geschichte, der Institutionen und der verfassungsmäßigen Ordnung.",
        "Achtung der verfassungsmäßigen Ordnung und des christlichen und geschichtlichen Gepräges des Landes.",
        "Verlangt werden ein dauerhaft rechtstreues Verhalten und wahrheitsgemäße Angaben gegenüber den Ausländer- und Staatsangehörigkeitsbehörden.",
        "Verlangt wird der Nachweis einer dauerhaften Verbundenheit mit dem Land und nicht bloß des Aufenthalts.",
        "Sachliche Prüfungen in Sprache und staatsbürgerlicher Kunde sind zulässig.",
        "Die Einbürgerung wird versagt, wo schwere Kriminalität, Terrorismus, schwerer Betrug oder vorsätzliche Identitätstäuschung weiterhin entgegenstehen.",
        "Wiederkehrende staatsbürgerliche Tests dürfen nicht dazu dienen, eine Person, die die Staatsbürgerschaft rechtmäßig und redlich erworben hat, ohne Weiteres auszuweisen; die Aberkennung nach der Einbürgerung richtet sich nach gesonderten Einträgen.",
      ],
      limits: ["Fünfzehn Jahre Aufenthalt gewährleisten die Einbürgerung nicht von selbst."],
      keywords: [
        "Einbürgerung",
        "Assimilation",
        "Aufenthalt",
        "Sprache",
        "Sprachnachweis",
        "staatsbürgerliche Kenntnisse",
        "Einbürgerungstest",
        "Verbundenheit",
      ],
    },

    "citizenship-by-descent": {
      title: "Staatsbürgerschaft durch Abstammung und Wiedererlangung",
      shortAnswer:
        "Eine belegte nationale Abstammung kann einen erheblich schnelleren Weg zur Wiedererlangung der Staatsbürgerschaft rechtfertigen als die gewöhnliche Einbürgerung.",
      position: [
        "Eine belegte nationale Abstammung kann einen erheblich schnelleren Weg zur Wiedererlangung der Staatsbürgerschaft rechtfertigen als die gewöhnliche Einbürgerung.",
      ],
      policies: [
        "Das Kind eines Staatsbürgers erbt in der Regel dessen Staatsbürgerschaft, unabhängig vom Geburtsort.",
        "Wer eine belegte nationale Elternschaft oder nahe nationale Abstammung nachweist, kann einen erleichterten Weg der Rückkehr oder der Wiedererlangung erhalten.",
        "Der Arbeitsvorschlag für einen solchen erleichterten Weg lautet auf etwa fünf Jahre statt der gewöhnlichen fünfzehn.",
      ],
      keywords: ["Abstammung", "Vorfahren", "Wiedererlangung", "Rückkehr", "Abstammungsprinzip"],
    },

    "voting-rights-after-naturalization": {
      title: "Wahlrecht nach der Einbürgerung",
      shortAnswer:
        "Eingebürgerte Staatsbürger sollten nach der Einbürgerung weitere vier Jahre warten, ehe sie das volle Wahlrecht erhalten.",
      position: [
        "Eingebürgerte Staatsbürger sollten das Wahlrecht nicht unmittelbar mit der Einbürgerung erhalten. Vor dem vollen Wahlrecht sollten in der Regel weitere vier Jahre der Staatsbürgerschaft liegen.",
      ],
      policies: [
        "Gewöhnlicher Weg: fünfzehn Jahre rechtmäßiger Aufenthalt, ehe ein Einbürgerungsantrag gestellt werden darf.",
        "Nach der Einbürgerung: vier weitere Jahre bis zum vollen Wahlrecht.",
      ],
      keywords: ["Wahlrecht", "Stimmrecht", "aktives Wahlrecht", "Wahlen", "Wartefrist"],
    },

    "high-public-office": {
      title: "Wählbarkeit für hohe Staatsämter",
      shortAnswer:
        "Die höchsten Ämter der Nation bleiben Bürgern vorbehalten, die durch Geburt, Abstammung und Geschichte mit dem Land verbunden sind, und nicht allein durch erworbene Staatsbürgerschaft.",
      position: [
        "Die gewöhnliche Staatsbürgerschaft und die Wählbarkeit für die höchsten verfassungsmäßigen, sicherheitspolitischen und militärischen Ämter sind verschiedene Fragen. Die Einbürgerung allein begründet keine Wählbarkeit für die höchsten Staatsämter.",
      ],
      policies: [
        "Für das Staatsoberhaupt, den Regierungschef, die Leitung der Verteidigung und der inneren Sicherheit, die oberste militärische Führung, die Leitung der Nachrichtendienste und andere Ämter von außerordentlicher verfassungsmäßiger Machtfülle gelten verschärfte Zugangsvoraussetzungen.",
        "Verlangt werden die Staatsbürgerschaft von Geburt an und eine nachweisbare Verbindung zum Land durch Vorfahren oder Geschichte.",
        "Verlangt werden außerdem eine wirkliche Verwurzelung im Land, die Beherrschung der Landessprache und eine erwiesene Treue zur verfassungsmäßigen und nationalen Ordnung.",
        "Die gewöhnliche Einbürgerung begründet, wie lange sie auch zurückliegt, für sich genommen keine Wählbarkeit für diese Ämter.",
        "Welche Ämter unter die beschränkte Gruppe fallen, ist durch Gesetz genau zu bestimmen.",
      ],
      keywords: [
        "hohe Staatsämter",
        "Staatspräsident",
        "Regierungschef",
        "Staatsbürgerschaft von Geburt",
        "Abstammung",
        "nationale Kontinuität",
        "Wählbarkeit",
        "Minister",
        "Treuepflicht",
      ],
    },

    "dual-citizenship": {
      title: "Doppelte Staatsbürgerschaft",
      shortAnswer:
        "Die doppelte Staatsbürgerschaft zwischen europäischen Ländern wird in der Regel hingenommen; von nichteuropäischen Staatsangehörigen, die sich in einer europäischen Nation einbürgern lassen, wird die Aufgabe ihrer bisherigen Staatsbürgerschaft erwartet.",
      position: [
        "Restore Europa nimmt die doppelte Staatsbürgerschaft zwischen europäischen Ländern in der Regel hin, erwartet aber von nichteuropäischen Staatsangehörigen, die sich in einer europäischen Nation einbürgern lassen, dass sie ihre bisherige nichteuropäische Staatsbürgerschaft aufgeben.",
      ],
      policies: [
        "Die doppelte Staatsbürgerschaft zwischen europäischen Staaten ist in der Regel zulässig.",
        "Von nichteuropäischen Eingebürgerten wird in der Regel die Aufgabe der bisherigen Staatsbürgerschaft verlangt.",
        "Ausnahmen können erwogen werden, wo die Aufgabe rechtlich unmöglich ist oder eine außergewöhnliche Härte bedeutete.",
      ],
      principle:
        "Die einzelnen europäischen Nationen sind politische Gemeinschaften innerhalb einer weiteren europäischen Zivilisation.",
      keywords: [
        "doppelte Staatsbürgerschaft",
        "Mehrstaatigkeit",
        "Aufgabe der Staatsangehörigkeit",
        "zweiter Pass",
      ],
    },

    "revocation-of-naturalized-citizenship": {
      title: "Aberkennung der eingebürgerten Staatsbürgerschaft",
      shortAnswer:
        "Die eingebürgerte Staatsbürgerschaft darf in außerordentlich schweren Fällen wie erschlichener Einbürgerung, Landesverrat oder Terrorismus gerichtlich aberkannt werden.",
      position: [
        "Die eingebürgerte Staatsbürgerschaft darf unter außerordentlich schweren Umständen aberkannt werden, etwa bei erschlichener Einbürgerung, Landesverrat, Terrorismus oder anderem eng umschriebenem Verhalten, das dem Staat schwer schadet.",
      ],
      policies: [
        "Die Aberkennung muss in einem gerichtlichen Verfahren erfolgen.",
        "Die Gründe müssen durch Gesetz bestimmt sein und nicht dem unbestimmten Ermessen der Verwaltung überlassen bleiben.",
        "Ein hoher Beweismaßstab und ein Rechtsmittel sind erforderlich.",
        "Täuschung im Einbürgerungsverfahren ist ein unmittelbarer Grund für die Aberkennung.",
        "Landesverrat und Terrorismus können die Aberkennung rechtfertigen.",
        "Restore Europa tritt dafür ein, dass die Aberkennung in außerordentlich schweren Fällen auch dann möglich ist, wenn daraus Staatenlosigkeit folgen könnte.",
      ],
      keywords: [
        "Aberkennung",
        "Entzug der Staatsbürgerschaft",
        "Staatenlosigkeit",
        "Landesverrat",
        "Terrorismus",
      ],
    },

    "remigration-general-principle": {
      title: "Remigration: allgemeiner Grundsatz",
      shortAnswer:
        "Remigration ist die geordnete Rückkehr von Personen, denen eine rechtmäßige Grundlage für den Verbleib fehlt oder verloren geht, verbunden mit einer Politik der freiwilligen Rückkehr, der strengen Durchsetzung der Aufenthaltsbedingungen und der Überprüfung von Rechtsstellungen, die durch Täuschung oder erhebliche Unregelmäßigkeit erlangt wurden.",
      position: [
        "Restore Europa behandelt den Aufenthaltsstatus als bedingt: er hängt an der rechtmäßigen Einreise, an der Einhaltung der Aufenthaltsbedingungen, an der öffentlichen Ordnung und, wo einschlägig, an der gelungenen Integration. Remigration ist nicht als Entfernung allein aufgrund der Herkunft bestimmt; sie wirkt über die Rechtsstellung, die aufenthaltsrechtliche Vorgeschichte, strafbares Verhalten, Täuschung, Sicherheitsgründe und klar umschriebene Aufenthaltsbedingungen.",
      ],
      policies: [
        "Rechtskräftige Rückkehrentscheidungen werden gegenüber Personen ohne rechtmäßiges Bleiberecht durchgesetzt.",
        "Die freiwillige Rückkehr wird genutzt, wo sie realistisch ist, und die zwangsweise Rückkehr dort, wo die rechtliche Grundlage des Aufenthalts entfallen ist.",
        "Aufenthaltsrecht oder Staatsangehörigkeit, die durch erhebliche Täuschung oder Arglist erlangt wurden, werden überprüft.",
        "Der Entzug des ausländischen Aufenthaltsstatus ist bei schwerer Kriminalität, bei schwerwiegenden Sicherheitsgefahren und aus anderen ausdrücklich gesetzlich bestimmten Gründen zulässig.",
        "Staatsbürgerschaft, Daueraufenthalt, vorübergehender Aufenthalt, Asylstatus und unerlaubter Aufenthalt bleiben rechtlich getrennte Kategorien.",
        "Der bloße Zeitablauf begründet für sich kein selbsttätiges Bleiberecht, solange die zugrunde liegende Rechtsstellung vorübergehend oder bedingt bleibt.",
        "Es gelten individuelle Verfahren und Beweisanforderungen statt einer Kollektivausweisung allein nach ethnischer oder rassischer Kategorie.",
      ],
      keywords: [
        "Remigration",
        "Rückkehr",
        "Durchsetzung des Ausländerrechts",
        "Aufenthalt",
        "Abschiebung",
        "Integration",
        "Staatsangehörigkeit",
      ],
    },

    "integration-general-definition": {
      title: "Integration: allgemeine Bestimmung",
      shortAnswer:
        "Integration bedeutet die nachweisbare sprachliche, staatsbürgerliche, wirtschaftliche und gesellschaftliche Eingliederung in die aufnehmende Nation; der Aufenthalt allein genügt nicht.",
      position: [
        "Integration bemisst sich nach Verhalten, Können und dauerhafter Teilhabe. Sie ist von der Staatsbürgerschaft und von dem höheren Assimilationsmaßstab zu unterscheiden, den die Einbürgerung verlangt.",
      ],
      policies: [
        "Verlangt wird eine funktionsfähige Beherrschung der wichtigsten Landessprache, je nach angestrebter Rechtsstellung in der Regel etwa auf dem Niveau B1–B2.",
        "Verlangt werden Grundkenntnisse der nationalen Geschichte, der Institutionen, des Rechts, der staatsbürgerlichen Pflichten und des Verfassungsaufbaus.",
        "Anhaltende schwere Kriminalität, organisierte Kriminalität, Terrorismus, schwerer Betrug und vorsätzlicher Missbrauch des Ausländerrechts gelten als starkes Anzeichen gegen die Integration.",
        "Von arbeitsfähigen Nichtstaatsbürgern im erwerbsfähigen Alter wird die Teilhabe durch Beschäftigung, selbständige Tätigkeit, Bildung, berufliche Ausbildung, anerkannte Sorgearbeit in der Familie oder einen anderen rechtmäßigen Beitrag erwartet.",
        "Vermeidbare langfristige Abhängigkeit von öffentlicher Unterstützung gilt als negativer Umstand für die Integration, wobei echte Erwerbsunfähigkeit, Behinderung, Ruhestand, vorübergehende Arbeitslosigkeit und erhebliche Sorgearbeit ausgenommen bleiben.",
        "Der Nachweis örtlicher Teilhabe durch Arbeit, Bildung, Kirchengemeinden, Vereine, Verbände und andere Einrichtungen des Gemeinwesens ist zulässig, ohne dass die Mitgliedschaft in einer bestimmten Organisation vorgeschrieben würde.",
        "Verlangt wird die Achtung der rechtmäßigen verfassungsmäßigen Ordnung, ohne die weltanschauliche Übereinstimmung mit jeder Maßnahme der Regierung zu fordern.",
        "Die Integration wird anhand belegter individueller Nachweise beurteilt und nicht nach Herkunft allein.",
      ],
      keywords: [
        "Integration",
        "Sprache",
        "staatsbürgerliche Kenntnisse",
        "Selbstversorgung",
        "Aufenthalt",
        "öffentliche Ordnung",
        "Teilhabe",
      ],
    },

    "regularized-irregular-immigration": {
      title: "Nachträglich legalisierter unerlaubter Aufenthalt",
      shortAnswer:
        "Eine spätere Legalisierung löscht eine erwiesene Vorgeschichte unerlaubter Einreise oder unerlaubten Aufenthalts nicht von selbst; früher legalisierte Fälle können nach dem neuen Rechtsrahmen im Einzelfall überprüft werden.",
      position: [
        "Restore Europa weist die Behauptung zurück, jede frühere Legalisierung oder Amnestie müsse als verfassungsrechtlich unantastbar gelten. Wo verlässliche Unterlagen eine frühere unerlaubte Einreise, einen unerlaubten Aufenthalt, eine falsche Identität oder eine andere erhebliche Unregelmäßigkeit belegen, darf die daraus hervorgegangene Aufenthaltsgeschichte im Einzelfall überprüft werden.",
      ],
      policies: [
        "Aufenthaltsrechtliche Stellungen, die aus früheren Amnestien, Massenlegalisierungen oder vergleichbaren Ausnahmeprogrammen hervorgegangen sind, dürfen im Einzelfall überprüft werden.",
        "Der Staat muss die maßgebliche aufenthaltsrechtliche Vorgeschichte aus Unterlagen und Beweisen nachweisen; eine Unregelmäßigkeit darf nicht einfach unterstellt werden.",
        "Geprüft wird die vollständige Ursprungsakte, einschließlich Identität, Einreisegeschichte, Asylgeschichte, Aufenthaltsgrundlage, späterer Titel und eines etwaigen Einbürgerungsverfahrens.",
        "Die bloße frühere Unregelmäßigkeit ist von erheblicher Täuschung, falscher Identität oder Verschleierung zu unterscheiden, die schwerer wiegen können.",
        "Bleibt die Rechtsstellung nach der Prüfung bestehen, so behält sie ihre Gültigkeit vorbehaltlich der gewöhnlichen Aufenthaltsbedingungen.",
        "Wäre die Rechtsstellung nach der anwendbaren neuen Regel nicht erteilt worden und lässt die Verfassung eine rückwirkende Überprüfung zu, so können Entzug und Rückkehr durch eine Einzelentscheidung mit Rechtsmittelverfahren folgen.",
      ],
      limits: [
        "Dieser Eintrag behandelt nicht jeden eingebürgerten Staatsbürger als Täuschenden, bloß weil ein früherer Aufenthaltszeitraum unregelmäßig war; Täuschung und rechtmäßige Legalisierung bleiben verschiedene Begriffe.",
      ],
      keywords: [
        "Legalisierung",
        "Amnestie",
        "unerlaubte Einreise",
        "unerlaubter Aufenthalt",
        "Statusüberprüfung",
        "aufenthaltsrechtliche Vorgeschichte",
      ],
    },

    "employment-and-self-sufficiency-of-foreign-residents": {
      title: "Beschäftigung und Selbständigkeit ausländischer Einwohner",
      shortAnswer:
        "Von arbeitsfähigen ausländischen Einwohnern wird erwartet, dass sie sich wirtschaftlich selbst tragen; sie erhalten in der Regel keinen unbefristeten Leistungsanspruch wie Staatsbürger.",
      position: [
        "Der ausländische Aufenthalt wird zu bestimmten Zwecken gewährt und bleibt bedingt. Arbeitsfähige Einwohner sollten sich in der Regel durch Beschäftigung, selbständige Tätigkeit, Studium, Ausbildung oder anerkannte Sorgearbeit selbst tragen und nicht dauerhaft und vermeidbar von öffentlicher Unterstützung abhängen.",
      ],
      policies: [
        "Von vorübergehend und gewöhnlich aufhältigen Nichtstaatsbürgern wird verlangt, hinreichende rechtmäßige Mittel des Unterhalts zu wahren, vorbehaltlich angemessener Karenzzeiten nach unverschuldetem Verlust des Arbeitsplatzes.",
        "Beschäftigung, selbständige Tätigkeit, Vollzeitbildung, berufliche Ausbildung und erhebliche Sorgearbeit in der Familie zählen als rechtmäßige Teilhabe.",
        "Ausnahmen bestehen bei echter Behinderung, Erwerbsunfähigkeit, Ruhestand, für Kinder und bei vorübergehender Not trotz angemessener Bemühungen um Arbeit.",
        "Gewöhnliche Sozialleistungen außerhalb von Notlagen werden für Nichtstaatsbürger begrenzt, soweit dies verfassungs- und gesetzesrechtlich zulässig ist.",
        "Nahrung, Unterkunft und medizinisch notwendige Versorgung im Notfall bleiben erhalten, wo ihre Versagung grundlegende rechtliche oder humanitäre Verpflichtungen verletzte.",
        "Wiederholte vermeidbare Abhängigkeit von öffentlicher Unterstützung gilt als möglicher Grund für die Überprüfung des Aufenthalts, wo der Titel ausdrücklich an die Selbständigkeit geknüpft war.",
        "Die erworbene Staatsbürgerschaft bleibt davon getrennt: gewöhnliche Arbeitslosigkeit macht einen Staatsbürger nicht von selbst zu einem unerlaubt Aufhältigen.",
      ],
      limits: [
        "Die genaue Karenzzeit nach dem Verlust des Arbeitsplatzes sollte im Ausführungsgesetz bestimmt und nicht im Verfassungsgrundsatz festgeschrieben werden.",
      ],
      keywords: [
        "Selbstversorgung",
        "Beschäftigung",
        "Sozialleistungen",
        "ausländische Einwohner",
        "Aufenthaltstitel",
        "wirtschaftliche Teilhabe",
      ],
    },

    "probationary-naturalization": {
      title: "Einbürgerung auf Probe",
      shortAnswer:
        "Die neu erworbene Staatsbürgerschaft steht zehn Jahre lang unter Vorbehalt, mit verschärften Regeln der Aberkennung für eng umschriebene schwerwiegende Gründe.",
      position: [
        "Die Einbürgerung begründet die Staatsbürgerschaft, doch behält der Staat in den ersten zehn Jahren eine verschärfte Befugnis, die erworbene Staatsbürgerschaft wegen bestimmter schwerer Verfehlungen oder erheblicher Mängel der Einbürgerungsgrundlage wieder aufzugreifen und abzuerkennen.",
      ],
      policies: [
        "Die Probezeit beträgt zehn Jahre ab dem Erwerb der Staatsbürgerschaft.",
        "Die Aberkennung ist zulässig bei erheblicher Täuschung im Einbürgerungsverfahren, bei falscher Identität oder bei vorsätzlichem Verschweigen einer entgegenstehenden Tatsache.",
        "Die Aberkennung ist zulässig bei außerordentlich schweren Straftaten nach der Einbürgerung, wie sie der gesonderte Eintrag zur Staatsbürgerschaft und zu schweren Straftaten bestimmt.",
        "Die Aberkennung ist zulässig bei Terrorismus, Landesverrat oder einem Verhalten, das eine außerordentlich schwere Gefahr für die nationale Sicherheit darstellt, soweit das Gesetz dies ausdrücklich bestimmt.",
        "Erforderlich sind ein individuelles gerichtliches oder gerichtsähnliches Verfahren, der Nachweis des gesetzlichen Grundes und ein wirksames Rechtsmittel.",
        "Gewöhnliche Arbeitslosigkeit, politische Meinungsverschiedenheit oder ein nicht bestandener staatsbürgerlicher Test sind für sich kein selbsttätiger Grund der Aberkennung.",
        "Nach Ablauf der zehn Jahre gelten die gewöhnlichen Schutzrechte der Staatsbürgerschaft, vorbehaltlich der dauerhaften Gründe der Täuschung und der übrigen außerordentlichen Aberkennungsgründe, die an anderer Stelle des Katalogs angenommen sind.",
      ],
      keywords: [
        "Staatsbürgerschaft auf Probe",
        "Einbürgerung",
        "Aberkennung",
        "zehn Jahre",
        "Täuschung",
        "schwere Straftat",
      ],
    },

    "residence-permit-withdrawal": {
      title: "Entzug des Aufenthaltstitels",
      shortAnswer:
        "Der ausländische Aufenthaltsstatus ist leichter zu verlieren als die Staatsbürgerschaft und darf entzogen werden, wenn bestimmte Bedingungen der Zulassung oder des fortdauernden Aufenthalts erheblich verletzt werden.",
      position: [
        "Der Aufenthalt ist eine bedingte rechtliche Erlaubnis. Schwere Kriminalität, erhebliche Täuschung, schwerwiegende Sicherheitsgefahren und die beharrliche Nichterfüllung ausdrücklich gesetzter Aufenthaltsbedingungen können den Entzug und die Rückkehr rechtfertigen.",
      ],
      policies: [
        "Bei erheblicher Täuschung über die Identität oder den Aufenthalt wird der Titel entzogen oder seine Verlängerung versagt.",
        "Der Aufenthalt wird entzogen bei schwerer Gewalt- oder Sexualkriminalität, bei Terrorismus, bei schwerer organisierter Kriminalität und bei vergleichbar schwerem Verhalten, vorbehaltlich des gesonderten Rahmens der strafrechtlichen Abschiebung.",
        "Der Aufenthalt wird entzogen, wo von der Person eine schwerwiegende und belegte Gefahr für die nationale Sicherheit ausgeht.",
        "Eine Überprüfung ist zulässig bei wiederholter vermeidbarer Abhängigkeit von Sozialleistungen, wo die Selbständigkeit ausdrückliche Bedingung des Titels war.",
        "Eine Überprüfung ist zulässig bei schwerer und beharrlicher Nichterfüllung der geltenden Integrationsanforderungen, wo die Rechtsstellung ausdrücklich an die Integration geknüpft war.",
        "Längere Abwesenheit kann den Aufenthaltsstatus beenden; das gewöhnliche Ausführungsgesetz sollte die Frist nach Art des Titels innerhalb einer Spanne von etwa zwei bis fünf Jahren bestimmen.",
        "Die Gründe werden mitgeteilt und es besteht eine individuelle Gelegenheit, die Entscheidung anzufechten.",
      ],
      keywords: [
        "Aufenthaltstitel",
        "Entzug",
        "Täuschung",
        "schwere Straftat",
        "Integration",
        "Abwesenheit",
        "öffentliche Sicherheit",
      ],
    },

    "voluntary-return-and-reintegration": {
      title: "Freiwillige Rückkehr und Wiedereingliederung",
      shortAnswer:
        "Der Staat darf eine maßvolle einmalige Rückkehrhilfe leisten, wo ein Nichtstaatsbürger freiwillig und dauerhaft in das Land seiner Staatsangehörigkeit oder in ein anderes zu seiner Aufnahme berechtigtes Land zurückkehrt.",
      position: [
        "Die freiwillige Rückkehr ist der teuren zwangsweisen Abschiebung vorzuziehen, wo sie dasselbe rechtmäßige Ziel zügig und verlässlich erreicht.",
      ],
      policies: [
        "Angemessene Reisekosten eines anerkannten Programms der freiwilligen Rückkehr werden übernommen.",
        "Eine begrenzte einmalige Hilfe zur Übersiedlung oder Wiedereingliederung ist zulässig, wo sie die Aussicht auf eine dauerhafte Rückkehr erheblich erhöht.",
        "Die Hilfe ist an die tatsächliche Ausreise und an die Einhaltung der vereinbarten Rückkehrabrede geknüpft.",
        "Ein Anspruch auf wiederholte Rückkehrbeihilfen wird nicht begründet.",
        "Besteht ein Wiedereinreiseverbot, so hebt die freiwillige Ausreise es nicht von selbst auf, sofern das Gesetz nicht ausdrücklich etwas anderes bestimmt.",
        "Wo nötig, wird mit den Behörden des Zielstaates oder mit anerkannten Organisationen zusammengearbeitet, um Reisedokumente und Aufnahme zu klären.",
        "Der freiwilligen Ausreise ist der Vorzug vor Haft oder zwangsweiser Abschiebung zu geben, wo keine ernsthafte Gefahr des Untertauchens und keine kriminelle oder sicherheitsrelevante Gefahr besteht.",
      ],
      keywords: [
        "freiwillige Rückkehr",
        "Wiedereingliederung",
        "Übersiedlungshilfe",
        "Reisekosten",
        "Rückkehrprogramm",
      ],
    },

    "naturalized-citizenship-and-exceptionally-serious-crime": {
      title: "Eingebürgerte Staatsbürgerschaft und außerordentlich schwere Straftaten",
      shortAnswer:
        "Die erworbene Staatsbürgerschaft darf für eine eng umschriebene Gruppe außerordentlich schwerer Straftaten aberkannt werden, gefolgt von der Abschiebung, wo die daraus folgenden Anforderungen an Staatsangehörigkeit und Rückkehr rechtmäßig erfüllt werden können.",
      position: [
        "Die Einbürgerung stellt nicht jede spätere Handlung außerhalb des Staatsangehörigkeitsrechts. Die vorgeschlagene Verfassungsordnung lässt die Aberkennung der erworbenen Staatsbürgerschaft für bestimmtes außerordentlich schweres Verhalten nach der Einbürgerung zu, während die gewöhnliche Kriminalität in der Strafrechtspflege verbleibt.",
      ],
      policies: [
        "Diese Befugnis bleibt auf eine abschließend bestimmte Gruppe außerordentlich schwerer Straftaten beschränkt, etwa vorsätzlicher Mord, Vergewaltigung, schwerer sexueller Missbrauch von Kindern, Terrorismus und vergleichbare schwerwiegende Taten.",
        "Vor einer straftatgestützten Aberkennung der Staatsbürgerschaft ist eine rechtskräftige strafrechtliche Verurteilung erforderlich.",
        "Erforderlich ist ein gesondertes staatsangehörigkeitsrechtliches Verfahren, das feststellt, ob die gesetzlichen Voraussetzungen der Aberkennung vorliegen.",
        "Vor dem Vollzug der Abschiebung steht ein wirksames Rechtsmittel offen.",
        "Wird die Staatsbürgerschaft aberkannt und besitzt die Person eine andere Staatsangehörigkeit oder kann sie diese rechtmäßig wiedererlangen, so gilt der gewöhnliche Rahmen der Rückkehr.",
        "Ist die Staatsangehörigkeit streitig, so wird sie förmlich festgestellt, statt anzunehmen, der Geburtsort allein belege die Aufnahmepflicht eines Staates.",
        "Die Abstammung allein ist nicht der strafrechtliche Anknüpfungspunkt; maßgeblich ist die Verbindung von erworbener Staatsbürgerschaft und qualifiziertem Verhalten.",
      ],
      keywords: [
        "eingebürgerte Staatsbürgerschaft",
        "Aberkennung",
        "schwere Straftat",
        "Mord",
        "Vergewaltigung",
        "Terrorismus",
        "Staatsangehörigkeit",
      ],
    },

    "return-readmission-identity-and-removal-procedure": {
      title: "Rückkehr, Rückübernahme, Identität und Abschiebungsverfahren",
      shortAnswer:
        "Die Rückkehrpolitik folgt einem gemischten Vollzugsmodell: Identitätsfeststellung und Abschiebungshaft, wo nötig, danach ein eingeschränkter vorübergehender Status, wenn die Abschiebung einstweilen unmöglich bleibt, bei fortgesetzten Bemühungen um die Feststellung der Staatsangehörigkeit und um die Rückübernahme.",
      position: [
        "Eine rechtskräftige Rückkehrentscheidung muss praktisch vollziehbar sein. Der Staat sollte deshalb Verfahren zur Identitätsfeststellung, zur Haft, zur Meldepflicht und zur Rückübernahme vorhalten, statt zuzulassen, dass die Vernichtung von Dokumenten oder fehlende Mitwirkung von selbst einen dauerhaften Aufenthalt hervorbringt.",
      ],
      policies: [
        "Die Feststellung von Identität und Staatsangehörigkeit beginnt sogleich, wo einer abzuschiebenden Person verlässliche Dokumente fehlen.",
        "Zur Feststellung von Identität und Staatsangehörigkeit dienen Pässe, abgelaufene Dokumente, Personenstandsregister, Fingerabdrücke oder andere biometrische Daten, soweit rechtlich zulässig, Familienunterlagen, konsularische Anfragen, sprachliche und biografische Anhaltspunkte sowie Rückübernahmeabkommen.",
        "Die vorsätzliche Vernichtung oder Verheimlichung von Dokumenten gilt als erschwerender Umstand im Vollzug, wobei die Vernichtung eines Passes die Staatsangehörigkeit nicht beendet.",
        "Abschiebungshaft ist zulässig, soweit sie zur Identitätsfeststellung, zur Verhinderung des Untertauchens oder für eine bevorstehende Abschiebung erforderlich ist, vorbehaltlich bestimmter gesetzlicher Grenzen und fortgesetzter Bemühungen um die Abschiebung.",
        "Kann die Abschiebung innerhalb der gesetzlichen Höchstdauer der Haft nicht vollzogen werden, so geht die Person in einen eingeschränkten vorübergehenden Status über und nicht in den gewöhnlichen Daueraufenthalt.",
        "Der eingeschränkte Status kann Meldepflichten, Aufenthaltsbeschränkungen, die fortgesetzte Mitwirkung bei der Identitätsfeststellung und begrenzte öffentliche Unterstützung umfassen.",
        "Der bloße Zeitablauf im eingeschränkten Status darf nicht von selbst in die Staatsbürgerschaft oder in den Daueraufenthalt erwachsen.",
        "Die Abschiebung wird wieder aufgenommen, sobald Staatsangehörigkeit, Reisedokumente und die rechtmäßige Rückübernahme vorliegen.",
        "Rückübernahmeabkommen und diplomatischer Druck dienen dazu, Staaten zur Aufnahme von Personen anzuhalten, deren Staatsangehörigkeit nach ihrem eigenen Recht feststeht.",
        "Familienangehörige dürfen gemeinsam ausreisen, wo Eltern abgeschoben werden und die Kinder das Recht haben, sie zu begleiten; eigenständige Fragen der Staatsangehörigkeit, des Sorgerechts und des Kinderschutzes verlangen eine Entscheidung im Einzelfall.",
        "Die neuen verfassungsrechtlichen Regeln des Ausländerrechts gelten für bestehende Rechtsstellungen, soweit das Gesetz ausdrücklich eine rückwirkende Überprüfung vorsieht, vorbehaltlich der andernorts in diesem Komplex geregelten Überprüfungsverfahren.",
      ],
      keywords: [
        "Rückkehrverfahren",
        "Rückübernahme",
        "Abschiebungshaft",
        "Identität",
        "Staatsangehörigkeit",
        "eingeschränkter Status",
        "Staatenlosigkeit",
        "Familieneinheit",
        "Rückwirkung",
      ],
    },

    "europe-as-a-civilization-of-nations": {
      title: "Europa als Zivilisation von Nationen",
      shortAnswer:
        "Europa sollte eine zivilisatorische Gemeinschaft souveräner Nationen sein und kein zentralisierter nachnationaler Staat.",
      position: [
        "Europa sollte eine zivilisatorische Gemeinschaft souveräner Nationen sein und kein zentralisierter nachnationaler Staat.",
      ],
      policies: [
        "Europäische Zusammenarbeit in der Verteidigung, bei den Grenzen, der strategischen Infrastruktur, der Wissenschaft, dem Umweltschutz und der Bewahrung der Zivilisation.",
        "Die politische Eigenständigkeit und die geschichtliche Identität der Nationen bleiben erhalten.",
        "Die Subsidiarität bestimmt die Verteilung der Zuständigkeiten.",
      ],
      keywords: ["Europa", "Souveränität", "Staatenbund", "Subsidiarität", "nachnational"],
    },

    "european-union-institutional-relationship": {
      title: "Europäische Union: das institutionelle Verhältnis",
      shortAnswer:
        "Restore Europa tritt für eine grundlegende Reform der Europäischen Union zu einem begrenzten Rahmen der Zusammenarbeit souveräner europäischer Nationen ein, bei dem die meisten politischen Zuständigkeiten an die Mitgliedstaaten zurückgehen.",
      position: [
        "Die europäische Zusammenarbeit sollte fortbestehen, doch die kontinentalen Institutionen sollten nur jene Zuständigkeiten besitzen, die ein Handeln auf europäischer Ebene wirklich verlangen. Restore Europa verwirft die Entwicklung hin zu einem zentralisierten nachnationalen Staat und wendet die Subsidiarität streng an.",
      ],
      policies: [
        "Erhebliche gesetzgeberische und regulatorische Zuständigkeiten gehen an die Mitgliedstaaten zurück.",
        "Familienpolitik, Bildung, Kultur, Religion, das allgemeine Strafrecht und der größte Teil der inneren Sozialpolitik bleiben grundsätzlich national.",
        "Die europäische Zusammenarbeit bleibt dort erhalten, wo die Größenordnung sie wirklich nützlich macht, darunter ausgewählte grenzüberschreitende Infrastruktur, die wissenschaftliche Zusammenarbeit, der Handel, die Abstimmung an den Grenzen und die strategische Sicherheit.",
        "Den EU-Institutionen wird verwehrt, den Nationen ein einheitliches sittliches oder kulturelles Programm aufzuerlegen.",
        "Die nationale Souveränität, die verfassungsmäßige Identität und die geschichtliche Kontinuität bleiben gewahrt.",
        "Angestrebt wird ein europäischer zivilisatorischer Rahmen, der das christliche Erbe Europas anerkennt und zugleich die politische Eigenständigkeit der Nationen erhält.",
      ],
      keywords: [
        "Europäische Union",
        "EU",
        "Souveränität",
        "Subsidiarität",
        "Europäische Kommission",
        "Vertragsreform",
        "christliches Europa",
        "Brüssel",
        "Zuständigkeiten",
      ],
    },

    "economic-order": {
      title: "Wirtschaftsordnung",
      shortAnswer:
        "Restore Europa verwirft beides: den entfesselten Kapitalismus und den zentralistischen Sozialismus. Sein wirtschaftliches Leitbild ist distributistisch im Eigentum und berufsständisch in der Ordnung.",
      position: [
        "Restore Europa verwirft beides: den entfesselten Kapitalismus und den zentralistischen Sozialismus. Sein wirtschaftliches Leitbild ist distributistisch im Eigentum und berufsständisch in der Ordnung.",
      ],
      keywords: [
        "Wirtschaft",
        "Distributismus",
        "berufsständische Ordnung",
        "Kapitalismus",
        "Sozialismus",
      ],
    },

    "private-property-and-broad-ownership": {
      title: "Privateigentum und breit gestreutes Eigentum",
      shortAnswer:
        "Eigentum ist eine Quelle von Unabhängigkeit und Verantwortung. Die Antwort auf die Konzentration ist breiter gestreutes Eigentum und nicht die Abschaffung des Eigentums.",
      position: [
        "Das Privateigentum ist eine Quelle von Unabhängigkeit und Verantwortung. Die Antwort auf übermäßige Konzentration ist breiter gestreutes Eigentum und nicht die Abschaffung des Eigentums.",
      ],
      policies: [
        "Breit gestreutes Wohneigentum.",
        "Familienunternehmen.",
        "Selbstständiges Handwerk und freie Gewerbe.",
        "Kleine und mittlere Unternehmen.",
        "Genossenschaften und Belegschaftseigentum.",
        "Bäuerliche Familienbetriebe.",
        "Örtliches und regionales Bankwesen.",
      ],
      principle: "Viele Eigentümer statt weniger.",
      keywords: ["Eigentum", "Besitz", "Distributismus", "Genossenschaften", "Kleineigentümer"],
    },

    "corporations-and-monopolies": {
      title: "Unternehmen und Monopole",
      shortAnswer:
        "Unternehmen sind legitime Werkzeuge, bleiben aber dem Gemeinwohl untergeordnet, und geballter Unternehmensmacht dürfen Schranken gesetzt werden.",
      position: [
        "Unternehmen sind legitime Werkzeuge, müssen aber dem Gemeinwohl untergeordnet bleiben. Übermäßig geballter Unternehmensmacht dürfen Schranken gesetzt werden.",
      ],
      policies: [
        "Eine starke Wettbewerbs- und Monopolaufsicht.",
        "Schranken dort, wo Unternehmen politische Institutionen oder lebenswichtige Märkte beherrschen.",
        "Schutz tragfähiger Gemeinwesen, des Familienlebens und der politischen Unabhängigkeit vor zerstörerischer Konzentration.",
      ],
      keywords: ["Konzerne", "Monopol", "Kartellrecht", "Wettbewerb", "Konzentration"],
    },

    "guilds-chambers-and-corporatist-representation": {
      title: "Zünfte, Kammern und berufsständische Vertretung",
      shortAnswer:
        "Arbeitnehmer, Unternehmer, Handwerker, Bauern und freie Berufe sollten an Einrichtungen ihrer Branche mitwirken, die fachliche Standards, die Lehre und die Arbeitsbedingungen festlegen.",
      position: [
        "Arbeitnehmer, Unternehmer, Handwerker, Bauern und freie Berufe sollten an Einrichtungen ihrer Branche mitwirken, die fachliche Standards, die Lehre, die Arbeitsbedingungen und Verfahren der Schlichtung festlegen können.",
      ],
      policies: [
        "Berufskammern und berufsständische Körperschaften sollten hinreichend unabhängig von der zentralen Staatsverwaltung bleiben.",
        "Berufsorganisationen dürfen im öffentlichen Leben geordnet vertreten sein.",
        "Die berufsständische Ordnung bleibt der Subsidiarität untergeordnet.",
      ],
      keywords: ["Zünfte", "Kammern", "berufsständische Ordnung", "Lehre", "Handwerk"],
    },

    "finance-lending-and-usury": {
      title: "Finanzwesen, Kredit und Wucher",
      shortAnswer:
        "Das Finanzwesen soll der produktiven Tätigkeit dienen. Rechtmäßige Kreditvergabe und ein angemessener Ertrag werden anerkannt, ausbeuterische Zinsen und Schuldenfallen nicht.",
      position: [
        "Das Finanzwesen soll der produktiven Tätigkeit dienen. Restore Europa erkennt die rechtmäßige Kreditvergabe und einen angemessenen Ertrag auf das Kapital an und wendet sich zugleich gegen ausbeuterische Zinsen, ausbeuterische Kreditvergabe und Schuldenfallen.",
      ],
      policies: [
        "Strenge Beschränkungen oder Obergrenzen für ausbeuterische Kleinkredite nach Art der Zahltagdarlehen.",
        "Die vollständigen Kosten eines Kredits sind offen auszuweisen.",
        "Beschränkungen missbräuchlicher Verzugsgebühren und sich aufsummierender Vertragsstrafen.",
        "Gerichte dürfen offensichtlich sittenwidrige Kreditbedingungen für unwirksam erklären.",
        "Die Politik sollte der produktiven Kreditvergabe für Wohnraum, Familienbetriebe und langfristige Investitionen den Vorzug geben.",
        "Örtliches und regionales Bankwesen wird gefördert.",
      ],
      keywords: ["Finanzwesen", "Wucher", "Zinsen", "Kredit", "Schulden", "Banken"],
    },

    "housing-and-financialization": {
      title: "Wohnen und Finanzialisierung",
      shortAnswer:
        "Wohnraum soll vor allem dem Wohnen und dem Zusammenleben dienen und nicht als endlos an Wert gewinnendes Anlagegut wirken.",
      position: [
        "Wohnraum soll vor allem dem Wohnen und dem Zusammenleben dienen und nicht in erster Linie als endlos an Wert gewinnendes Anlagegut wirken.",
      ],
      policies: [
        "Breit gestreutes Wohneigentum ist ein zentrales Ziel.",
        "Spekulativem und geballtem Eigentum dürfen Schranken gesetzt werden, wo es gewöhnliches Familieneigentum verhindert.",
      ],
      keywords: ["Wohnen", "Wohneigentum", "Miete", "Spekulation", "Vermieter"],
    },

    work: {
      title: "Arbeit",
      shortAnswer:
        "Arbeit hat ihre Würde, aber sie ist nicht der Zweck des menschlichen Daseins. Wirtschaftlicher Fortschritt sollte Sicherheit, Muße und die Verfügung über das eigene Leben vermehren.",
      position: [
        "Arbeit hat ihre Würde, aber sie ist nicht der Zweck des menschlichen Daseins. Wirtschaftlicher Fortschritt sollte Sicherheit, Muße, Zeit für die Familie, sinnvolle Arbeit und die Verfügung über das eigene Leben vermehren.",
      ],
      policies: [
        "Neues gesellschaftliches Ansehen für Handwerk, Landwirtschaft, Ingenieurwesen, Pflege, Unterricht und die Facharbeiterberufe.",
        "Produktivitätsgewinne sollten nicht bloß mehr Arbeit aus den Menschen herausholen.",
        "Die Automatisierung sollte die sinnvolle Mitwirkung des Menschen nicht allein um der zahlenmäßigen Effizienz willen beseitigen.",
      ],
      keywords: ["Arbeit", "Erwerbsarbeit", "Beschäftigung", "Handwerk", "Muße"],
    },

    "minimum-wage": {
      title: "Mindestlohn und gerechter Lohn",
      shortAnswer:
        "Jedem Arbeitenden steht ein gerechter Lohn zu, der für ein würdiges Leben und den angemessenen Unterhalt einer Familie reicht.",
      position: [
        "Die katholische Soziallehre setzt einen inhaltlichen Maßstab des gerechten Lohnes und nicht ein einziges allgemeines gesetzliches Verfahren. Restore Europa tritt deshalb für eine Lohnfindung nach Branchen und Regionen durch Einrichtungen der Vertretung ein, abgesichert durch gesetzlichen Schutz, wo er nötig ist.",
      ],
      policies: [
        "Der Grundsatz eines gesetzlich geschützten gerechten Lohnes wird festgeschrieben.",
        "Lohnuntergrenzen werden in der Regel auf der geeigneten Branchen- oder Regionalebene durch Arbeitnehmer, Arbeitgeber und berufsständische Körperschaften bestimmt.",
        "Zünfte, Kammern und gemeinsame Einrichtungen dürfen Standards aushandeln, die der Produktivität, dem Können und den Verhältnissen der Branche entsprechen.",
        "Ein gesetzlicher Mindestschutz ist zulässig, wo die Einrichtungen der Tariffindung keinen gerechten Lohn sichern.",
        "Die Bedürfnisse der Familie sind zu berücksichtigen, statt allein das Auskommen des Einzelnen zum Maßstab zu nehmen.",
        "Familienzulagen oder Kindergeld werden eingesetzt, wo es angemessen ist, damit die Erziehung von Kindern keinen unzumutbaren wirtschaftlichen Nachteil bedeutet.",
        "Die Tragfähigkeit der Unternehmen, die Produktivität und die Beschäftigungsmöglichkeiten sind zu berücksichtigen.",
      ],
      keywords: [
        "Mindestlohn",
        "gerechter Lohn",
        "existenzsichernder Lohn",
        "Familienlohn",
        "Arbeitnehmer",
        "Zünfte",
        "Tarifverhandlungen",
        "Bezahlung",
        "Lohnuntergrenze",
      ],
    },

    taxation: {
      title: "Steuern",
      shortAnswer:
        "Steuern sind für das Gemeinwohl legitim, sollten aber gerecht sein, auf Familien Rücksicht nehmen, nicht enteignend wirken und mit breit gestreutem Eigentum, produktiver Arbeit und der Subsidiarität vereinbar bleiben.",
      position: [
        "Das Steuersystem sollte die rechtmäßigen öffentlichen Aufgaben finanzieren, ohne zu einem Mittel zu werden, das Privateigentum zu beseitigen, die Familiengründung zu erschweren oder gesellschaftliche Aufgaben unnötig zu zentralisieren.",
      ],
      policies: [
        "Steuern werden nach klarem Gesetz, mit Augenmaß und gerecht erhoben.",
        "Die Gesamtbelastung bleibt mit der Unabhängigkeit der Haushalte, dem Sparen, dem produktiven Unternehmertum und breit gestreutem Eigentum vereinbar.",
        "Unterhaltsberechtigte Kinder werden erheblich berücksichtigt, und Nachteile für Ehe oder Kindererziehung werden vermieden.",
        "Produktive Arbeit und langfristige Investition werden gegenüber der spekulativen Wertabschöpfung bevorzugt, soweit das Steuerrecht beide schlüssig unterscheiden kann.",
        "Unverhältnismäßige Befolgungslasten für kleine Unternehmen, Familienbetriebe, Höfe und Handwerker werden vermieden.",
        "Die Einnahmen werden auf der niedrigsten zuständigen Ebene erhoben, wo das praktikabel ist.",
        "Die Einkommensteuer wird maßvoll progressiv ausgestaltet, ohne erdrosselnde Grenzsteuersätze.",
        "Gewöhnliche Familienwohnhäuser, Höfe und fortgeführte Familienbetriebe werden vor Erbschaftsteuerregeln geschützt, die zu unnötiger Veräußerung zwingen.",
        "Gegenüber laufenden allgemeinen Vermögensteuern, die nicht liquides Eigentum unabhängig vom Einkommen belasten können, bleibt Zurückhaltung geboten.",
        "Für Güter des täglichen Bedarfs wird eine ermäßigte Verbrauchsbesteuerung angewandt, wo das praktikabel ist.",
      ],
      limits: [
        "Genaue Sätze werden nicht vorgeschrieben und bleiben eine Frage der nationalen Umsetzung.",
      ],
      keywords: [
        "Steuern",
        "Besteuerung",
        "Einkommensteuer",
        "Körperschaftsteuer",
        "Mehrwertsteuer",
        "Erbschaftsteuer",
        "Vermögensteuer",
        "Familienbesteuerung",
        "Subsidiarität",
      ],
    },

    pensions: {
      title: "Renten",
      shortAnswer:
        "Ein gemischtes Rentensystem sollte die grundlegende Alterssicherung mit betrieblicher Vorsorge, persönlichem Sparen, Familieneigentum und der Verantwortung zwischen den Generationen verbinden.",
      position: [
        "Alte Menschen, die zur Gesellschaft beigetragen haben, sollten nicht in Not geraten, doch die Alterssicherung sollte die Bürger nicht vollständig von einem einzigen zentralen staatlichen System abhängig machen.",
      ],
      policies: [
        "Eine Grundrente wird gewährleistet, die alte Bürger vor Armut schützt.",
        "Betriebliche und branchenbezogene Rentenkassen, getragen von Arbeitgebern, Zünften, Berufskammern und anderen mittleren Einrichtungen, werden gefördert.",
        "Die private Altersvorsorge und der langfristige Vermögensaufbau der Haushalte werden gefördert.",
        "Zeiten der Kindererziehung oder erheblicher Pflege in der Familie werden bei der Berechnung der gesetzlichen Rentenansprüche angerechnet.",
        "Rentenregeln, die Ehe, Elternschaft oder die Pflege in der Familie strukturell benachteiligen, werden vermieden.",
        "Die Finanzierbarkeit bleibt gewahrt, damit eine Generation der nächsten keine unbezahlbaren Lasten auferlegt.",
        "Das Verhältnis von gesetzlicher, betrieblicher und privater Vorsorge darf von Land zu Land verschieden sein.",
      ],
      keywords: [
        "Renten",
        "Ruhestand",
        "Alter",
        "Sozialversicherung",
        "Rentenkassen",
        "Familie",
        "Ersparnisse",
        "Eigentum",
      ],
    },

    "housing-restrictions": {
      title: "Beschränkungen im Wohnungswesen im Einzelnen",
      shortAnswer:
        "Wohnraum soll vor allem dem Wohnen und dem Zusammenleben dienen; die Politik zielt auf breit gestreutes Familieneigentum statt auf dauerhafte finanzielle Abschöpfung.",
      position: [
        "Das Privateigentum ist geschützt; zugleich dürfen verhältnismäßige Beschränkungen gegen Praktiken gerichtet werden, die knappen Wohnraum zu einem Mittel künstlicher Verknappung, der Monopolbildung oder der spekulativen Anhäufung machen.",
      ],
      policies: [
        "Breit gestreutes selbstgenutztes Wohneigentum wird zu einem zentralen Ziel der Wohnungspolitik.",
        "Das Angebot wird erweitert, soweit das mit der Infrastruktur, dem Charakter des Ortes und der Bewahrung der Umwelt vereinbar ist.",
        "Unnötige Hürden des Planungsrechts für angemessenen Familienwohnraum werden abgebaut, während gewachsene Siedlungen und Landschaften erhalten bleiben.",
        "Ersterwerber und Familien werden angemessen unterstützt.",
        "Ausbeuterischen Hypothekenmodellen wird entgegengewirkt und eine berechenbare langfristige Finanzierung gefördert.",
        "Der Erwerb von Wohnraum in großem Umfang durch marktbeherrschende institutionelle Anleger darf strenger geregelt werden, wo er gewöhnliche Käufer in erheblichem Maße verdrängt.",
        "Dauerhaft leerstehendes Anlageeigentum darf zusätzlich besteuert oder geregelt werden, wo die Knappheit groß ist.",
        "Familienwohnhäuser, Familienhöfe und gewöhnliches ererbtes Eigentum werden vor erzwungener Veräußerung geschützt.",
        "Genossenschaften und örtlich verwurzelte Eigentumsformen werden unterstützt, wo sie wirkliches Eigentum breiter streuen.",
        "Verhältnismäßigen Schutzrechten für Mieter wird der Vorzug gegeben vor Mietpreisbindungen, die neuen Wohnraum wirtschaftlich unmöglich machen.",
      ],
      keywords: [
        "Wohnen",
        "Wohneigentum",
        "Miete",
        "Boden",
        "Eigentum",
        "Finanzialisierung",
        "Hypotheken",
        "institutionelle Anleger",
      ],
    },

    "trade-unions-and-vocational-representation": {
      title: "Gewerkschaften, Zünfte und berufsständische Vertretung",
      shortAnswer:
        "Arbeitnehmer dürfen sich unabhängig organisieren; zugleich sollten sich die Arbeitsbeziehungen zu einer berufsständischen Ordnung dauerhafter Einrichtungen der Branchen entwickeln, die Arbeitnehmer, Arbeitgeber und freie Berufe vertreten.",
      position: [
        "Restore Europa verwirft beides: die Ohnmacht der Arbeitnehmer gegenüber geballtem Kapital und den dauernden Klassenkampf als Ordnungsprinzip des Wirtschaftslebens.",
      ],
      policies: [
        "Das Recht, unabhängige Gewerkschaften zu gründen und ihnen beizutreten, wird geschützt.",
        "Rechtmäßige Tarifverhandlungen über Löhne und Arbeitsbedingungen werden geschützt.",
        "Es werden Branchenkammern oder berufsständische Körperschaften errichtet, die Arbeitnehmer, Arbeitgeber, Handwerker und freie Berufe vertreten.",
        "Diese Körperschaften dürfen Lohnuntergrenzen, die Lehre, fachliche Standards und Verfahren der Streitbeilegung aushandeln.",
        "Schlichtung und Verhandlungslösungen werden gefördert, bevor es zu langwierigem Arbeitskampf kommt.",
        "Ein verhältnismäßiges Streikrecht bleibt erhalten, während wirklich lebenswichtige Dienste durch Anforderungen an ihre Aufrechterhaltung geschützt werden.",
        "Es wird verhindert, dass Gewerkschaften zu Zwangsorganen des Staates werden.",
        "Es wird verhindert, dass Arbeitgeber angeblich unabhängige Arbeitnehmerorganisationen beherrschen.",
        "Eine wirkliche Vielfalt der Vertretung ist zulässig statt einer einzigen staatlich gelenkten Gewerkschaft.",
      ],
      keywords: [
        "Gewerkschaften",
        "Zünfte",
        "berufsständische Ordnung",
        "Tarifverhandlungen",
        "Streik",
        "Berufskammern",
        "Arbeitsbedingungen",
      ],
    },

    "technology-general-doctrine": {
      title: "Technik: die allgemeine Lehre",
      shortAnswer:
        "Technische Entwicklung ist nicht dasselbe wie menschlicher Fortschritt; sie ist an ihren Wirkungen auf Selbstbestimmung, Familie, Gemeinschaft und Arbeit zu messen.",
      position: [
        "Technische Entwicklung ist nicht dasselbe wie menschlicher Fortschritt. Technik ist danach zu beurteilen, ob sie die Selbstbestimmung, das Familienleben, die Gemeinschaft, die sinnvolle Arbeit, die Privatsphäre, die Dezentralisierung und die natürliche Umwelt stärkt oder schwächt.",
      ],
      principle: "Die Maschine muss sich dem Menschen anpassen.",
      keywords: ["Technik", "Fortschritt", "menschliches Maß", "Innovation"],
    },

    "artificial-intelligence": {
      title: "Künstliche Intelligenz",
      shortAnswer:
        "KI darf als Werkzeug eingesetzt werden, sollte aber das menschliche Urteil nicht allein deshalb verdrängen, weil die Automatisierung technisch möglich oder wirtschaftlich effizient ist.",
      position: [
        "KI darf als Werkzeug eingesetzt werden, sollte aber das menschliche Urteil nicht einfach deshalb verdrängen, weil die Automatisierung technisch möglich oder wirtschaftlich effizient ist.",
      ],
      policies: [
        "KI ist an ihren Wirkungen auf das menschliche Können, auf die Beschäftigung, auf die Selbstbestimmung und auf die Macht der Institutionen zu messen.",
        "Wo rechtlich oder sittlich Schwerwiegendes auf dem Spiel steht, sollten menschliche Entscheidungsträger erreichbar bleiben.",
        "Dass es eine Fähigkeit gibt, begründet keine Pflicht, sie auch einzusetzen.",
      ],
      keywords: [
        "künstliche Intelligenz",
        "KI",
        "maschinelles Lernen",
        "Automatisierung",
        "Algorithmen",
      ],
    },

    automation: {
      title: "Automatisierung",
      shortAnswer:
        "Die Automatisierung darf wirklich entwürdigende Arbeit abnehmen, doch den Menschen aus der produktiven Tätigkeit herauszunehmen ist kein unbefragtes Gut.",
      position: [
        "Die Automatisierung darf wirklich entwürdigende Arbeit abnehmen, doch die Mitwirkung des Menschen an der produktiven Tätigkeit zu beseitigen sollte kein unbefragtes Ziel sein.",
      ],
      principle: "Menschliches Können ist selbst ein Gut der Gemeinschaft.",
      keywords: ["Automatisierung", "Roboter", "Arbeitsplätze", "Dequalifizierung", "Effizienz"],
    },

    "cash-and-non-digital-access": {
      title: "Bargeld und nichtdigitaler Zugang",
      shortAnswer:
        "Den Bürgern sollte ein wirklicher Zugang zu physischem Geld und zu öffentlichen Diensten von Angesicht zu Angesicht bleiben.",
      position: [
        "Den Bürgern sollte ein wirklicher Zugang zu physischem Geld und zu öffentlichen Diensten von Angesicht zu Angesicht bleiben.",
      ],
      policies: [
        "Bargeld sollte verfügbar bleiben.",
        "Die wesentliche Teilnahme am staatsbürgerlichen Leben sollte kein Smartphone voraussetzen.",
        "Nichtdigitale Ausweise sollten verfügbar bleiben, wo es praktikabel ist.",
        "Behörden sollten Wege erhalten, die für Menschen ohne technische Mittel zugänglich sind.",
      ],
      keywords: ["Bargeld", "Geld", "digitale Ausgrenzung", "Bankwesen", "persönlicher Kontakt"],
    },

    "right-to-repair": {
      title: "Recht auf Reparatur",
      shortAnswer:
        "Den Bürgern sollte ein wirklicher Zugang zu reparierbaren Erzeugnissen bleiben, gegen unnötige Wegwerfware und technische Abhängigkeit vom Hersteller.",
      position: [
        "Den Bürgern sollte ein wirklicher Zugang zu reparierbaren Erzeugnissen bleiben. Restore Europa tritt für eine Politik ein, die sich der unnötigen Wegwerfware und der technischen Abhängigkeit vom Hersteller widersetzt.",
      ],
      keywords: [
        "Recht auf Reparatur",
        "Reparierbarkeit",
        "Wegwerfware",
        "Herstellerbindung",
        "Ersatzteile",
      ],
    },

    surveillance: {
      title: "Überwachung",
      shortAnswer:
        "Den Bürgern sollten wirkliche private Räume ohne ständige Überwachung bleiben; die Regeln im Einzelnen sind noch nicht entschieden.",
      position: ["Den Bürgern sollten wirkliche private Räume ohne ständige Überwachung bleiben."],
      limits: [
        "Die genauen Regeln zu Gesichtserkennung, Vorratsdatenspeicherung, Videoüberwachung und nachrichtendienstlichen Befugnissen bleiben offen.",
      ],
      keywords: [
        "Überwachung",
        "Privatsphäre",
        "Gesichtserkennung",
        "Videoüberwachung",
        "Vorratsdatenspeicherung",
      ],
    },

    "children-social-media-and-attention-capture": {
      title: "Kinder und soziale Medien",
      shortAnswer:
        "Kinder sollten einen starken rechtlichen Schutz vor Systemen sozialer Medien erhalten, die darauf angelegt sind, zwanghafte Aufmerksamkeit und seelische Abhängigkeit ins Äußerste zu treiben.",
      position: [
        "Die Eltern bleiben die ersten Hüter ihrer Kinder, während der Staat gewerbliche Systeme regeln darf, die die entwicklungsbedingte Verletzlichkeit von Kindern absichtlich ausnutzen.",
      ],
      policies: [
        "Für Minderjährige gelten erheblich strengere Voreinstellungen zur Privatsphäre und zur Auffindbarkeit.",
        "Manipulative Bindungssysteme, die den zwanghaften Gebrauch durch Kinder ins Äußerste treiben sollen, werden beschränkt.",
        "Auf Kinder zugeschnittene verhaltensbezogene Werbung wird stark beschränkt.",
        "Wirksame elterliche Kontrollmöglichkeiten werden vorgeschrieben.",
        "Von Schülern wird für den gewöhnlichen Unterricht nicht verlangt, gewerbliche Konten in sozialen Medien zu unterhalten.",
        "Grenzen für nächtliche Benachrichtigungs- und Bindungsmechanismen, die sich an Minderjährige richten, sind zulässig.",
        "Die Altersprüfung ist so zu gestalten, dass möglichst wenige Identitätsdaten erhoben werden.",
        "Es gilt der allgemeine Rahmen: stark beschränkter Zugang unter 13 Jahren, starker Schutz für Eltern und Minderjährige von 13 bis 15, ein weiterer, aber weiterhin geschützter Zugang von 16 bis 17 und die gewöhnlichen Regeln für Erwachsene ab 18.",
      ],
      keywords: [
        "soziale Medien",
        "Kinder",
        "Minderjährige",
        "Aufmerksamkeitsbindung",
        "Sucht",
        "elterliche Kontrolle",
        "Altersprüfung",
        "Smartphones",
      ],
    },

    "digital-identification": {
      title: "Digitale Ausweise",
      shortAnswer:
        "Digitale Ausweise dürfen als freiwillige Erleichterung bestehen, doch die gewöhnliche Teilnahme am staatsbürgerlichen Leben darf keine verpflichtende rein digitale Identität voraussetzen.",
      position: [
        "Den Bürgern sollte ein wirklicher nichtdigitaler Zugang bleiben, und sie sollten nicht in eine umfassende Identitätsarchitektur gezwungen werden, die eine laufende Verhaltensüberwachung ermöglicht.",
      ],
      policies: [
        "Körperliche Ausweise bleiben verfügbar, wo immer es vernünftigerweise praktikabel ist.",
        "Wesentliche öffentliche Leistungen werden nicht allein deshalb verweigert, weil jemand ein Smartphone oder eine Anwendung für den digitalen Ausweis ablehnt.",
        "Es werden nur die Daten erhoben, die für den genannten Verwaltungszweck notwendig sind.",
        "Identitätssysteme bleiben von allgemeinen Systemen der Verhaltensüberwachung getrennt.",
        "Der Zugriff auf Identitätsdaten setzt eine klare gesetzliche Grundlage und die Nachprüfbarkeit voraus.",
        "Systeme sozialer Bewertung und die Bewertung politischen oder religiösen Verhaltens sind verboten.",
        "Die selbsttätige Verknüpfung von Gesundheits-, Finanz-, Bildungs-, Reise- und Kommunikationsdaten zu einem einzigen umfassenden staatlichen Profil wird vermieden.",
      ],
      keywords: [
        "digitaler Ausweis",
        "elektronische Identität",
        "Privatsphäre",
        "Überwachung",
        "Sozialkredit",
        "nichtdigitaler Zugang",
        "Identität",
      ],
    },

    "central-bank-digital-currencies": {
      title: "Digitales Zentralbankgeld",
      shortAnswer:
        "Digitales Zentralbankgeld darf das Bargeld nicht ersetzen und nicht zu einem verpflichtenden, programmierbaren System der Zahlungsüberwachung werden.",
      position: [
        "Eine digitale Zentralbankwährung darf nur unter strengen Sicherungen für die Privatsphäre und die Dezentralisierung als freiwilliges Zahlungsmittel hingenommen werden.",
      ],
      policies: [
        "Das Bargeld wird nicht zugunsten eines verpflichtenden digitalen Zentralbankgeldes abgeschafft.",
        "Für Löhne, Sozialleistungen oder gewöhnliche Zahlungen wird nicht ausschließlich die Infrastruktur des digitalen Zentralbankgeldes vorgeschrieben.",
        "Eine laufende staatliche Beobachtung jeder rechtmäßigen Zahlung ist nicht zulässig.",
        "Programmierbare politische Beschränkungen sonst rechtmäßiger Käufe sind verboten.",
        "Ein künstliches Verfallsdatum für das Geld der Bürger ist verboten.",
        "Der Einsatz digitalen Zentralbankgeldes für Systeme sozialer Bewertung ist verboten.",
        "Wirkliche private Zahlungen bleiben im Rahmen verhältnismäßiger Regeln zur Verbrechensbekämpfung erhalten.",
      ],
      keywords: [
        "CBDC",
        "digitaler Euro",
        "Bargeld",
        "programmierbares Geld",
        "finanzielle Privatsphäre",
        "digitale Währung",
      ],
    },

    cryptocurrency: {
      title: "Kryptowährungen",
      shortAnswer:
        "Der rechtmäßige Besitz und die rechtmäßige Übertragung von Kryptowährungen sollten erlaubt bleiben, während Betrug, Diebstahl und missbräuchliche zentrale Verwahrung geregelt bleiben.",
      position: [
        "Kryptowährungen sind weder von sich aus befreiend noch von sich aus unrechtmäßig. Sie sind danach zu beurteilen, ob sie rechtmäßigen wirtschaftlichen Zwecken dienen, ohne Betrug, ausbeuterische Spekulation oder unnötige Abhängigkeit hervorzubringen.",
      ],
      policies: [
        "Der rechtmäßige Besitz und die rechtmäßige Übertragung von Kryptowährungen sind erlaubt.",
        "Auf Betrug, Diebstahl, Marktmanipulation und irreführende Werbung wird das allgemeine Strafrecht angewandt.",
        "Handelsplätze, die Kundenvermögen halten, werden hinsichtlich Zahlungsfähigkeit, Verwahrung und Betrugsabwehr verhältnismäßig geregelt.",
        "Dezentrale Protokolle werden von zentralen Verwahrunternehmen unterschieden.",
        "Private Kryptowährungen werden nicht verboten, bloß um einem künftigen digitalen Zentralbankgeld ein Monopol zu sichern.",
        "Die steuerliche Behandlung ist klar und verwaltungsmäßig zumutbar auszugestalten.",
        "Technik, die die Privatsphäre wahrt, wird nicht allein deshalb verboten, weil Privatsphäre technisch möglich ist.",
      ],
      keywords: [
        "Kryptowährung",
        "Bitcoin",
        "digitale Vermögenswerte",
        "Blockchain",
        "Dezentralisierung",
        "finanzielle Privatsphäre",
      ],
    },

    "facial-recognition": {
      title: "Gesichtserkennung",
      shortAnswer:
        "Die dauerhafte oder anlasslose Überwachung der Allgemeinheit durch Gesichtserkennung sollte verboten werden.",
      position: [
        "Die Gesichtserkennung kann eng begrenzte rechtmäßige Verwendungen bei der Aufklärung schwerer Straftaten haben, doch der öffentliche Raum sollte kein dauerhaft biometrisch überwachter Raum werden.",
      ],
      policies: [
        "Die flächendeckende Verfolgung von Bürgern in Echtzeit im gewöhnlichen öffentlichen Leben ist verboten.",
        "Die dauerhafte biometrische Erfassung aller Menschen, die Straßen, Geschäfte, Kirchen, Versammlungen oder öffentliche Verkehrsmittel betreten, ist verboten.",
        "Der gezielte Einsatz zur Aufklärung schwerer Straftaten ist zulässig, unter dem Vorbehalt rechtlicher Genehmigung, der Erforderlichkeit, der Verhältnismäßigkeit und zeitlicher Grenzen.",
        "Für biometrische Fahndungslisten und für die Berichtigung falscher Zuordnungen sind gesetzliche Maßstäbe erforderlich.",
        "Politische oder religiöse Versammlungen werden nicht regelmäßig biometrisch erfasst.",
        "Privaten Unternehmen wird der Aufbau dauerhafter biometrischer Profile ohne starke gesetzliche Grundlage verwehrt.",
      ],
      keywords: [
        "Gesichtserkennung",
        "Biometrie",
        "Videoüberwachung",
        "Überwachung",
        "Privatsphäre",
        "öffentlicher Raum",
      ],
    },

    "communications-metadata-retention": {
      title: "Vorratsspeicherung von Verkehrsdaten",
      shortAnswer:
        "Die anlasslose dauerhafte Speicherung der Verkehrsdaten der gesamten Bevölkerung ist zu verwerfen.",
      position: [
        "Der Staat darf für rechtmäßige Ermittlungen Kommunikationsdaten erlangen, doch gewöhnliche Bürger sollten nicht wie dauernde Verdächtige behandelt werden.",
      ],
      policies: [
        "Die zeitlich unbegrenzte massenhafte Speicherung der Verkehrsdaten aller Menschen wird verworfen.",
        "Die gezielte Sicherung und der gezielte Zugriff zur Aufklärung schwerer Straftaten und zur Abwehr von Gefahren für die nationale Sicherheit sind zulässig.",
        "Der Zugriff setzt in der Regel eine richterliche oder vergleichbar unabhängige Genehmigung voraus.",
        "Es gelten begrenzte Speicherfristen, und nicht zugehörige Daten werden gelöscht, wenn die rechtmäßige Speicherung endet.",
        "Die massenhafte Überwachung wird nicht zur Grundform der Kommunikationsinfrastruktur gemacht.",
        "Der Zugriff von Strafverfolgung und Nachrichtendiensten bleibt streng beaufsichtigt.",
      ],
      keywords: [
        "Verkehrsdaten",
        "Vorratsdatenspeicherung",
        "Kommunikationsüberwachung",
        "Privatsphäre",
        "Telekommunikation",
        "Nachrichtendienste",
      ],
    },

    "genetic-engineering": {
      title: "Gentechnik",
      shortAnswer:
        "Die therapeutische Gentechnik in der Medizin kann rechtmäßig sein, während die vererbbare Verbesserung und die Verzweckung embryonalen menschlichen Lebens einem starken Verbot unterliegen.",
      position: [
        "Restore Europa unterscheidet die Behandlung von Krankheiten von Vorhaben, die darauf zielen, die menschliche Natur umzugestalten oder bevorzugte menschliche Eigenschaften auszuwählen.",
      ],
      policies: [
        "Die rechtmäßige somatische Gentherapie zur Behandlung von Krankheiten ist unter Beachtung der medizinischen Sicherheitsstandards zulässig.",
        "Genetische Versuche, die menschliche Embryonen bloß als verfügbares Forschungsmaterial behandeln, sind verboten, soweit dies dem Schutz des menschlichen Lebens von der Empfängnis an widerspricht.",
        "Gegen die vererbbare Verbesserung der Keimbahn gilt eine starke Vermutung.",
        "Die gewerbliche Erzeugung genetisch ausgewählter oder bearbeiteter Wunschkinder ist verboten.",
        "Die Therapie wird von der Steigerung der Intelligenz, des Aussehens, der Kraft oder anderer bevorzugter Eigenschaften unterschieden.",
        "Eugenische Staatsprogramme werden verworfen.",
        "Genetische Informationen werden als besonders schutzbedürftige personenbezogene Daten geschützt.",
      ],
      keywords: [
        "Gentechnik",
        "Genom-Editierung",
        "CRISPR",
        "Keimbahn",
        "Embryonen",
        "Gentherapie",
        "Designerbabys",
        "Eugenik",
      ],
    },

    "transhumanism-and-human-enhancement": {
      title: "Transhumanismus und die Verbesserung des Menschen",
      shortAnswer:
        "Die Medizin darf heilen und wiederherstellen, doch der Mensch darf nicht als Rohstoff für technische Optimierung oder Ersetzung behandelt werden.",
      position: [
        "Die Würde des Menschen hängt nicht von Intelligenz, Kraft, Lebensdauer, Leistung oder technischer Erweiterung ab.",
      ],
      policies: [
        "Therapeutische Prothesen, Implantate und Hilfsmittel sind zulässig.",
        "Die Wiederherstellung der normalen menschlichen Funktion wird von weltanschaulichen Vorhaben unterschieden, die das gewöhnliche Menschsein durch technisch erzeugte Nachfolger ersetzen wollen.",
        "Eine erzwungene neurologische, kybernetische oder genetische Erweiterung als Bedingung für Arbeit oder für die Teilnahme am staatsbürgerlichen Leben ist verboten.",
        "Es werden keine rechtlich bevorzugten Gruppen technisch veränderter Personen geschaffen.",
        "Militärische Programme zur Steigerung menschlicher Fähigkeiten unterliegen einer strengen ethischen Prüfung.",
        "Für Schnittstellen zwischen Gehirn und Rechner, die die geistige Privatsphäre oder die Selbstbestimmung beeinträchtigen, gelten strenge Beschränkungen.",
        "Die vererbbare Verbesserung künftiger Generationen ist in der Regel verboten.",
      ],
      keywords: [
        "Transhumanismus",
        "Verbesserung des Menschen",
        "Kybernetik",
        "Gehirn-Computer-Schnittstelle",
        "Erweiterung",
        "Menschenwürde",
        "Bioethik",
      ],
    },

    "purpose-of-education": {
      title: "Zweck der Bildung",
      shortAnswer:
        "Bildung soll die Zivilisation zuerst weitergeben, ehe sie daran geht, sie zu verändern, mit ernsthafter Beschäftigung mit dem Christentum, der Geschichte, der Antike, den Naturwissenschaften und den Künsten.",
      position: [
        "Bildung soll die Zivilisation zuerst weitergeben, ehe sie daran geht, sie zu verändern. Das Christentum, die nationale und die europäische Geschichte, die Antike, die Philosophie, die Literatur, die Naturwissenschaft, die Mathematik, die Musik, die Kunst, das Handwerk und die staatsbürgerliche Verantwortung sollten alle ernsthaft behandelt werden.",
      ],
      keywords: ["Bildung", "Lehrplan", "Schulen", "Weitergabe", "klassische Bildung"],
    },

    homeschooling: {
      title: "Hausunterricht",
      shortAnswer:
        "Der Hausunterricht sollte erlaubt und geschützt sein, weil die Eltern die ersten Erzieher ihrer Kinder sind.",
      position: [
        "Der Hausunterricht sollte erlaubt und geschützt sein, weil die Eltern die ersten Erzieher ihrer Kinder sind.",
      ],
      policies: [
        "Eltern dürfen ihre Kinder zu Hause unterrichten.",
        "Ausdrücklich katholischer Hausunterricht ist erlaubt.",
        "Der Staat darf grundlegende Fähigkeiten im Lesen und Schreiben, in der Mathematik und im staatsbürgerlichen Wissen verlangen.",
        "Regelmäßige Überprüfungen dürfen feststellen, ob die Kinder tatsächlich unterrichtet werden.",
        "Der Staat sollte die Aufsicht nicht dazu benutzen, weltanschauliche Gleichförmigkeit durchzusetzen.",
      ],
      keywords: ["Hausunterricht", "häusliche Bildung", "Eltern", "Lehrplan"],
    },

    "private-catholic-and-independent-schools": {
      title: "Private, katholische und freie Schulen",
      shortAnswer:
        "Ein vielfältiges Bildungswesen aus katholischen, privaten, humanistischen, beruflichen und klösterlichen Schulen, bei dem die öffentlichen Mittel den Familien folgen können.",
      position: [
        "Restore Europa tritt für ein vielfältiges Bildungswesen ein, zu dem katholische Schulen, Privatschulen, humanistische Schulen, berufliche Einrichtungen, Klosterschulen und der Hausunterricht gehören.",
      ],
      policies: [
        "Katholische Schulen sind rechtlich geschützt.",
        "Freie Schulen dürfen eigene Lehrpläne und ein eigenes sittliches Gepräge bewahren.",
        "Öffentliche Mittel dürfen den Familien folgen, über Bildungsgutscheine, Steuergutschriften oder gleichwertige Verfahren.",
        "Katholische Schulen dürfen die katholische Lehre unterrichten und das Schulleben nach der katholischen Sittenlehre ordnen.",
        "Grundlegende fachliche Standards dürfen verlangt werden, ohne weltanschauliche Gleichförmigkeit zu erzwingen.",
      ],
      keywords: [
        "Privatschulen",
        "katholische Schulen",
        "Bildungsgutscheine",
        "freie Schulwahl",
        "freie Schulen",
      ],
    },

    "universities-and-academic-freedom": {
      title: "Universitäten und Wissenschaftsfreiheit",
      shortAnswer:
        "Die Universitäten sollten eine wirkliche Wissenschaftsfreiheit behalten und zugleich aufhören, als Einrichtungen verpflichtender weltanschaulicher Verbreitung zu wirken.",
      position: [
        "Die Universitäten sollten eine wirkliche Wissenschaftsfreiheit behalten und zugleich aufhören, als Einrichtungen verpflichtender weltanschaulicher Verbreitung zu wirken.",
      ],
      policies: [
        "Liberale, marxistische, weltliche, katholische, nationale und andere Theorien dürfen wissenschaftlich untersucht und erörtert werden.",
        "Staatliche Universitäten sollten die liberale oder progressive Weltanschauung nicht als unbezweifelbare Lehre institutionell auferlegen.",
        "Von Studenten sollte nicht verlangt werden, sich zu weltanschaulichen Positionen zu bekennen, die mit der fachlichen Eignung nichts zu tun haben.",
        "Einstellung und Beförderung sollten rechtmäßige katholische, konservative oder traditionalistische Wissenschaft nicht benachteiligen.",
        "Dem Christentum, der Antike, der europäischen Geschichte, der Philosophie und der abendländischen Geistesgeschichte sollte ein ernsthafter institutioneller Raum zukommen.",
      ],
      principle:
        "Bildung soll der Wahrheit nachgehen und nicht weltanschauliche Gleichförmigkeit herstellen.",
      keywords: [
        "Universitäten",
        "Wissenschaftsfreiheit",
        "Hochschulen",
        "Forschung",
        "Weltanschauung",
      ],
    },

    "state-schools-and-christianity": {
      title: "Staatliche Schulen und das Christentum",
      shortAnswer:
        "Staatliche Schulen sollten eine christliche zivilisatorische Ausrichtung haben und keine laizistische.",
      position: [
        "Staatliche Schulen sollten eine christliche zivilisatorische Ausrichtung haben und keine laizistische.",
      ],
      policies: [
        "Das Christentum sollte als Grundlage der europäischen Zivilisation, Geschichte, Philosophie, Sittlichkeit, Kunst und Kultur unterrichtet werden.",
        "Der katholischen Lehre sollte in Gesellschaften mit katholischer Mehrheit ein anerkannter Platz in der öffentlichen Bildung zukommen.",
        "Der Laizismus sollte nicht als die einzige geistig berechtigte Weltanschauung dargestellt werden.",
        "Die nationale und die europäische Geschichte sollten als Erbe unterrichtet werden und nicht bloß als angehäufte Schuld.",
      ],
      keywords: [
        "staatliche Schulen",
        "Religionsunterricht",
        "Laizismus",
        "Christentum",
        "öffentliche Bildung",
      ],
    },

    "sex-education-in-schools": {
      title: "Sexualkunde in der Schule",
      shortAnswer:
        "Schulen dürfen die Fortpflanzungsbiologie sachlich unterrichten, doch die sittliche Bildung zur Geschlechtlichkeit kommt vorrangig den Eltern und den gewählten religiösen Einrichtungen zu.",
      position: [
        "Die Eltern und die Kirche sollten die ersten Instanzen der geschlechtlichen und sittlichen Bildung sein. Schulen dürfen die Fortpflanzungsbiologie sachlich unterrichten, sollten aber die Autorität der Eltern nicht mit ausdrücklichem weltanschaulichem oder geschlechtlichem Unterricht übergehen.",
      ],
      policies: [
        "Der Biologieunterricht darf die Anatomie, die menschliche Fortpflanzung, die Schwangerschaft und die Gesundheit behandeln.",
        "Die sittliche Lehre über Geschlechtlichkeit, Empfängnisverhütung und Beziehungen kommt vorrangig den Eltern und den gewählten religiösen Einrichtungen zu.",
        "Die Eltern sollten über die einschlägigen Lehrpläne unterrichtet werden und dürfen ihre Kinder von Stoffen abmelden, die über den grundlegenden Biologieunterricht hinausgehen.",
        "Schulen sollten Minderjährigen kein pornografisches oder geschlechtlich ausdrückliches Unterrichtsmaterial zeigen.",
      ],
      keywords: ["Sexualkunde", "Sexualerziehung", "Lehrplan", "Elternrecht", "Einwilligung"],
    },

    "culture-and-homogenization": {
      title: "Kultur gegen die Vereinheitlichung",
      shortAnswer:
        "Sprachen, Mundarten, Feste, Musik, Küche und Handwerk sollten lebendige Bestandteile des gewöhnlichen Lebens bleiben und keine Museumsstücke.",
      position: [
        "Sprachen, Mundarten, Feste, Musik, Küche, Handwerk und geschichtliche Erinnerung sollten lebendige Bestandteile des gewöhnlichen europäischen Lebens bleiben und nicht zu Museumsstücken oder Waren für Reisende werden.",
      ],
      keywords: ["Kultur", "Mundarten", "Feste", "Überlieferung", "Vereinheitlichung"],
    },

    "architecture-and-historic-preservation": {
      title: "Architektur und Denkmalpflege",
      shortAnswer:
        "Öffentliches Bauen sollte das menschliche Maß, die Baustoffe der Gegend und die Tradition der Region achten, und der historische Bestand sollte erhalten bleiben, wo immer es vernünftigerweise möglich ist.",
      position: [
        "Öffentliches Bauen sollte das menschliche Maß, die Baustoffe der Gegend, die Überlieferungen der Region und den historischen Charakter achten. Kirchen, gewachsene Straßenbilder, Denkmäler und bedeutende historische Bauten sollten erhalten bleiben, wo immer es vernünftigerweise möglich ist.",
      ],
      keywords: ["Architektur", "Denkmalpflege", "Kulturerbe", "Städte", "menschliches Maß"],
    },

    "authority-democracy-and-subsidiarity": {
      title: "Autorität, Demokratie und Subsidiarität",
      shortAnswer:
        "Macht sollte auf der jeweils niedrigsten handlungsfähigen Ebene ausgeübt werden. Wahlen, Vertretung und verfassungsmäßige Schranken bestehen neben der Ablehnung des philosophischen Liberalismus.",
      position: [
        "Restore Europa verwirft beides: den anarchischen Individualismus und die allumfassende Staatsmacht. Wahlen, Vertretung, verfassungsmäßige Schranken und die Beteiligung der Bürger können neben der Ablehnung des philosophischen Liberalismus bestehen.",
      ],
      policies: [
        "Macht sollte auf der jeweils niedrigsten handlungsfähigen Ebene ausgeübt werden.",
        "Über Familienangelegenheiten entscheiden die Familien, über örtliche Angelegenheiten die Gemeinden; den Regionen bleibt eine wirkliche Eigenständigkeit; über nationale Angelegenheiten entscheiden die Nationen.",
        "Die Regierung bleibt durch das Recht, durch die Subsidiarität und durch institutionelle Gegengewichte gebunden.",
        "Politische Meinungsverschiedenheit und Opposition bleiben legitim.",
      ],
      keywords: ["Subsidiarität", "Demokratie", "Autorität", "Föderalismus", "Liberalismus"],
    },

    "free-speech-and-public-doctrine": {
      title: "Meinungsfreiheit und öffentliche Lehre",
      shortAnswer:
        "Die breite politische und wissenschaftliche Auseinandersetzung ist geschützt; Äußerungen, die unmittelbar zu Gewalt, Terrorismus oder Straftaten aufrufen, sind es nicht.",
      position: [
        "Restore Europa tritt für eine breite politische und wissenschaftliche Auseinandersetzung ein, behandelt die Rede aber nicht als unbegrenzt, wo sie unmittelbar zu Gewalt, Terrorismus oder Straftaten aufruft oder auf die absichtliche Entweihung des Heiligen hinausläuft.",
      ],
      policies: [
        "Die Kritik an der Regierung bleibt erlaubt.",
        "Politische und theologische Meinungsverschiedenheit bleibt erlaubt.",
        "Kommunismus, Laizismus und Liberalismus dürfen von Einzelnen erörtert und vertreten werden, auch wenn sie die Verfassungsordnung nicht bestimmen.",
        "Der unmittelbare Aufruf zu Gewalt oder Terrorismus darf verboten werden.",
        "Pornografie bleibt nach der gesonderten Position verboten.",
        "Das absichtliche Sakrileg darf nach der Position zur Gotteslästerung beschränkt werden.",
      ],
      principle:
        "Eine konfessionelle Verfassungsordnung muss nicht zu einem System der Gesinnungsaufsicht werden.",
      keywords: ["Meinungsfreiheit", "Äußerung", "Zensur", "Aufruf zu Gewalt", "Presse"],
    },

    "prisons-punishment-and-rehabilitation": {
      title: "Gefängnisse, Strafe und Wiedereingliederung",
      shortAnswer:
        "Verhältnismäßige Strafe, der Schutz der Gesellschaft, Wiedergutmachung, wo sie möglich ist, und eine ernsthafte Resozialisierung, die auf Reue und Wiedereingliederung zielt.",
      position: [
        "Die Strafjustiz sollte verhältnismäßige Strafe, den Schutz der Gesellschaft, die Wiedergutmachung, wo sie möglich ist, und eine ernsthafte Resozialisierung verbinden, die auf Reue und Wiedereingliederung zielt.",
      ],
      policies: [
        "Strafen, die im Verhältnis zur Schwere der Tat stehen.",
        "Langfristige Sicherung gefährlicher Gewalt- und Wiederholungstäter, wo sie notwendig ist.",
        "Die Gefängnisse sollten Zucht und Ordnung wahren.",
        "Gefangene sollten Zugang zu Arbeit, Bildung, beruflicher Ausbildung, seelsorglicher Betreuung und Suchtbehandlung haben.",
        "Die Strafe sollte nicht absichtlich entwürdigend oder grausam sein.",
      ],
      principle: "Gerechtigkeit ist weder Rache noch Nachgiebigkeit.",
      keywords: ["Gefängnisse", "Strafzumessung", "Strafe", "Resozialisierung", "Strafjustiz"],
    },

    "criminal-sentencing": {
      title: "Strafzumessung",
      shortAnswer:
        "Die Strafe sollte der Schwere und der Schuld entsprechen, die Gesellschaft schützen, Wiedergutmachung ermöglichen, wo sie möglich ist, und die Resozialisierung verfolgen, wo sie erreichbar ist.",
      position: [
        "Die Strafzumessung sollte scharf zwischen geringem Unrecht und absichtlicher schwerer Gewalt unterscheiden. Die Strafe darf rechtmäßig dem Schutz, der verhältnismäßigen Vergeltung, der Wiederherstellung der öffentlichen Ordnung, der Wiedergutmachung, der Abschreckung und der Resozialisierung dienen.",
      ],
      policies: [
        "Vor der Strafe ist eine Verurteilung in einem rechtmäßigen und fairen Verfahren erforderlich.",
        "Vorsatz, Planung, Grausamkeit, der Missbrauch schutzbedürftiger Opfer, organisierte Kriminalität und wiederholte schwere Straftaten gelten als straferschwerende Umstände.",
        "Bei geeigneten geringen oder gewaltlosen Taten ist verhältnismäßigen Geldstrafen, der Wiedergutmachung, gemeinnütziger Arbeit, der Bewährung und der Behandlung der Vorzug zu geben.",
        "Bei schwerer Gewalt, Raub, Entführung, schwerer organisierter Kriminalität, umfangreichem Menschenhandel, schwerer Korruption, schwerem Betrug, schweren Sexualstraftaten und wiederholter Gewaltkriminalität kommt eine erhebliche Freiheitsstrafe zur Anwendung.",
        "Vergewaltigung und schwerer sexueller Missbrauch von Kindern gelten als außerordentlich schwere Verbrechen.",
        "In den schwersten Fällen unterhalb der Todesstrafe kommt, wo es angemessen ist, eine langjährige oder lebenslange Freiheitsstrafe zur Anwendung.",
        "Eng geregelte Sicherungsmaßnahmen nach der Strafe sind nur zulässig, wo ein Täter nachweislich eine schwere Gefahr bleibt und das rechtsstaatliche Verfahren gewahrt ist.",
        "Aus Gründen der rechtlichen Bestimmtheit werden strafbare sexuelle Handlungen wie Missbrauch, Ausbeutung, Anbahnung und rechtswidriges Material vom Missbrauch von Kindern bestraft und nicht eine psychiatrische Diagnose oder eine Neigung für sich genommen.",
      ],
      limits: [
        "Genaue zahlenmäßige Strafrahmen bleiben einer späteren Ausarbeitung des Strafgesetzbuchs vorbehalten, statt ohne tatsächliche Grundlage erfunden zu werden.",
      ],
      keywords: [
        "Strafzumessung",
        "Strafe",
        "Gefängnis",
        "Mord",
        "Vergewaltigung",
        "sexueller Kindesmissbrauch",
        "Resozialisierung",
        "Wiedergutmachung",
      ],
    },

    "death-penalty": {
      title: "Todesstrafe",
      shortAnswer:
        "Restore Europa erkennt die überlieferte Rechtmäßigkeit der Todesstrafe im Grundsatz an, beschränkt auf Ausnahmefälle mit den schwersten Verbrechen.",
      position: [
        "Restore Europa erkennt die überlieferte katholische Rechtmäßigkeit der Todesstrafe im Grundsatz an, behält sie aber Ausnahmefällen mit den schwersten Verbrechen vor.",
      ],
      policies: [
        "Möglicherweise anwendbar auf den vorsätzlichen Mord unter erschwerenden Umständen, den Massenmord, den Terrorismus mit absichtlicher Tötung, den Völkermord und vergleichbar schwere Straftaten.",
        "Nur nach einem vollständigen und fairen Verfahren, einem hohen Beweismaßstab und einem wirklichen Rechtsmittel.",
        "Keine Vollstreckung, wenn ernsthafter Zweifel an der Schuld bleibt.",
        "Keine Vollstreckung an Minderjährigen.",
        "Sie wird allein von der rechtmäßigen staatlichen Gewalt verhängt und niemals bloß zur Rache gebraucht.",
      ],
      keywords: ["Todesstrafe", "Kapitalstrafe", "Hinrichtung", "Mord", "Abschaffung"],
    },

    "capital-punishment-for-aggravated-sexual-crimes": {
      title: "Todesstrafe bei besonders schweren Sexualverbrechen",
      shortAnswer:
        "Die Todesstrafe darf bei den schwersten Formen der Vergewaltigung und des sexuellen Kindesmissbrauchs rechtlich zur Verfügung stehen, ist aber nicht zwingend vorgeschrieben.",
      position: [
        "Restore Europa ordnet außerordentlich schwere Sexualverbrechen der Gruppe von Straftaten zu, die für die Todesstrafe in Betracht kommen können, unter denselben ungewöhnlich strengen verfahrens- und beweisrechtlichen Sicherungen wie andere Kapitalfälle.",
      ],
      policies: [
        "In Betracht kommen können die Vergewaltigung unter außerordentlicher Brutalität, die wiederholte oder serienmäßige Vergewaltigung, die Vergewaltigung in Verbindung mit Entführung oder Folter, der schwere sexuelle Missbrauch von Kindern, der systematische Missbrauch mehrerer Kinder und die organisierte sexuelle Ausbeutung unter außerordentlich schweren Umständen.",
        "Ein vollständiges und faires Strafverfahren ist zwingend.",
        "Die Todesstrafe darf nicht verhängt werden, wenn ein ernsthafter Restzweifel an der Schuld bleibt.",
        "Vor der Vollstreckung sind eine wirkliche Überprüfung in der Rechtsmittelinstanz und die Prüfung wesentlicher neuer entlastender Beweise erforderlich.",
        "Bestätigende und forensische Beweise sind heranzuziehen, wo immer sie vernünftigerweise zu erlangen sind; ein schwacher oder unsicherer Beweis darf niemals ein Todesurteil tragen.",
        "Die lebenslange Freiheitsstrafe bleibt auch dort verfügbar, wo eine Tat rechtlich für die Todesstrafe in Betracht kommt.",
        "Keine Vollstreckung an Minderjährigen.",
      ],
      keywords: [
        "Todesstrafe",
        "Kapitalstrafe",
        "schwere Vergewaltigung",
        "sexueller Kindesmissbrauch",
        "sexuelle Gewalt",
        "Beweismaßstab",
        "lebenslange Freiheitsstrafe",
      ],
    },

    "firearms-and-self-defense": {
      title: "Schusswaffen und Notwehr",
      shortAnswer:
        "Geregelter ziviler Waffenbesitz zu rechtmäßigen Zwecken, unter Erlaubnispflicht, Ausbildungspflicht und Anforderungen an die sichere Aufbewahrung.",
      position: [
        "Restore Europa tritt für einen geregelten zivilen Schusswaffenbesitz zu rechtmäßigen Zwecken ein, darunter Notwehr, Jagd, Sportschießen und Sammeln.",
      ],
      policies: [
        "Eine Erlaubnis ist erforderlich.",
        "Eine Sicherheitsausbildung ist verpflichtend.",
        "Es gelten Anforderungen an die sichere Aufbewahrung.",
        "Für das offene oder verdeckte Führen in der Öffentlichkeit gilt eine strengere Prüfung.",
        "Schwere Gewalttäter verlieren das Recht auf Waffenbesitz.",
        "Illegaler Waffenhandel und strafbarer Besitz werden schwer bestraft.",
      ],
      principle:
        "Der Staat muss nicht jedes Mittel der rechtmäßigen Selbstverteidigung für sich allein beanspruchen, doch der Waffenbesitz bringt schwere Verantwortung mit sich.",
      keywords: ["Schusswaffen", "Waffen", "Notwehr", "Jagd", "Waffenerlaubnis"],
    },

    "universal-healthcare-access": {
      title: "Allgemeiner Zugang zur Gesundheitsversorgung",
      shortAnswer:
        "Ein allgemeiner Zugang zur wesentlichen und medizinisch notwendigen Versorgung, mit Vorkehrungen gegen Übernutzung und Verschwendung.",
      position: [
        "Restore Europa tritt für den allgemeinen Zugang zur wesentlichen und medizinisch notwendigen Gesundheitsversorgung ein und lässt zugleich Vorkehrungen gegen Übernutzung und Verschwendung zu.",
      ],
      policies: [
        "Die Notfallversorgung steht allen offen.",
        "Die hausärztliche Versorgung, wesentliche Arzneimittel, die Geburtshilfe und die Behandlung schwerer Krankheiten sind zugänglich.",
        "Für nicht wesentliche oder nachrangige Leistungen dürfen maßvolle Zuzahlungen erhoben werden.",
        "Kinder, Haushalte mit geringem Einkommen, schwere chronische Krankheiten und Notfälle können von Zuzahlungen befreit sein.",
        "Hausärzte dürfen als erste Anlaufstelle vor der fachärztlichen Behandlung wirken, wo das medizinisch angemessen ist.",
        "Vorbeugung, Rehabilitation und Palliativversorgung sollten stark unterstützt werden.",
        "Betrug, unnötige Eingriffe und übermäßige Verschreibung werden tatkräftig bekämpft.",
      ],
      principle:
        "Notwendige Behandlung sollte niemandem verweigert werden, weil er arm ist, doch die Mittel des Gesundheitswesens sind endlich und verantwortlich einzusetzen.",
      keywords: [
        "Gesundheitsversorgung",
        "allgemeiner Zugang",
        "Zuzahlungen",
        "Krankenhäuser",
        "Medizin",
      ],
    },

    "catholic-medical-ethics": {
      title: "Katholische Medizinethik",
      shortAnswer:
        "Das öffentliche Gesundheitswesen sollte die katholische Medizinethik achten, und katholische Krankenhäuser sollten ihre eigenen ethischen Maßstäbe wahren dürfen.",
      position: [
        "Das öffentliche Gesundheitswesen sollte die katholische Medizinethik achten. Eingriffe, die Restore Europa nach der katholischen Lehre für sittlich unzulässig hält, sollten keine gewöhnliche öffentliche Finanzierung erhalten, und katholische Krankenhäuser sollten ihre ethischen Maßstäbe wahren dürfen.",
      ],
      keywords: [
        "Medizinethik",
        "Gewissen",
        "katholische Krankenhäuser",
        "Bioethik",
        "Finanzierung",
      ],
    },

    "environmental-stewardship": {
      title: "Bewahrung der Umwelt",
      shortAnswer:
        "Die Natur ist ein dem Menschen anvertrautes Erbe und keine Ware ohne Grenzen und keine Gottheit; entsprechend ist sie zu bewahren.",
      position: [
        "Die Natur ist ein dem Menschen anvertrautes Erbe und keine Ware ohne Grenzen und keine Gottheit. Restore Europa tritt für die Bewahrung von Wäldern, Flüssen, Ackerland, Bergen, Küsten und biologischer Vielfalt ein.",
      ],
      policies: [
        "Gesunde Böden und sauberes Wasser.",
        "Landwirtschaft vor Ort und regionale Lieferketten.",
        "Verantwortliche Forstwirtschaft.",
        "Haltbare Erzeugnisse und die Reparatur statt der Wegwerfware.",
        "Die Wiederherstellung geschädigter Lebensräume.",
        "Siedlungsformen, die sowohl die Gemeinschaft als auch die Landschaft erhalten.",
      ],
      keywords: ["Umwelt", "Bewahrung", "Natur", "biologische Vielfalt", "Ackerland"],
    },

    "energy-policy": {
      title: "Energiepolitik: die allgemeine Lehre",
      shortAnswer:
        "Die Energiepolitik ist an Verlässlichkeit, strategischer Widerstandsfähigkeit, Bezahlbarkeit, der Bewahrung der Umwelt und dem langfristigen Wohl der Menschen zu messen und nicht an der Treue zu einer einzelnen Technik.",
      position: [
        "Energie ist strategische Infrastruktur. Die europäischen Nationen sollten genügend eigene und breit gefächerte Kapazität behalten, um die politische Unabhängigkeit, eine produktive Industrie und die Sicherheit der Haushalte zu wahren.",
      ],
      policies: [
        "Eine vielfältige und widerstandsfähige eigene Energieversorgung wird erhalten.",
        "Gefährliche Abhängigkeiten von strategisch unzuverlässigen ausländischen Lieferanten werden verringert.",
        "Techniken werden nach ihrer Umweltwirkung über den gesamten Lebenszyklus, nach Verlässlichkeit, Kosten, Flächenverbrauch und strategischer Widerstandsfähigkeit beurteilt.",
        "Es wird genügend regelbare Erzeugung für die Netzstabilität vorgehalten.",
        "In Netze und Speicher wird investiert, wo es technisch und wirtschaftlich gerechtfertigt ist.",
        "Eine Politik, die gewöhnliches Heizen, den Verkehr oder den Strom wirtschaftlich unerreichbar macht, wird vermieden.",
        "Landschaften und die Gemeinschaften vor Ort werden geschützt.",
        "Eine Vielfalt der Techniken ist zulässig statt einer überall vorgeschriebenen einzigen Energiequelle.",
      ],
      keywords: [
        "Energiesicherheit",
        "Strom",
        "Verlässlichkeit",
        "strategische Infrastruktur",
        "Bezahlbarkeit",
        "Bewahrung",
        "Energie",
      ],
    },

    "nuclear-energy": {
      title: "Kernenergie",
      shortAnswer:
        "Die Kernkraft darf erlaubt und gefördert werden, wo sie sicher, verlässlich, strategisch nützlich und umweltverträglich ist.",
      position: [
        "Das Manifest enthält keinen grundsätzlichen Einwand gegen die Kernkraft. Die Kernenergie ist sachlich und nicht weltanschaulich zu beurteilen.",
      ],
      policies: [
        "Der Bau und der Weiterbetrieb von Anlagen, die anspruchsvolle Sicherheitsstandards erfüllen, sind zulässig.",
        "Ein glaubwürdiger langfristiger Umgang mit dem Atommüll ist erforderlich.",
        "Die eigene kerntechnische Fachkunde wird erhalten, wo das tragfähig ist.",
        "Moderne Reaktortechniken werden nach nachgewiesener Sicherheit und wirtschaftlicher Leistung beurteilt.",
        "Die Kernenergie darf Teil eines breit gefächerten emissionsarmen Systems sein.",
        "Der Einsatz der Kernkraft wird nicht vorgeschrieben, wo die Verhältnisse vor Ort einen anderen Mix vernünftiger machen.",
      ],
      keywords: ["Kernkraft", "Kernenergie", "Reaktoren", "Energiesicherheit", "Strom", "Atommüll"],
    },

    "fossil-fuels": {
      title: "Fossile Energieträger",
      shortAnswer:
        "Fossile Energieträger sollten nicht weltanschaulich verboten werden, ohne Rücksicht auf ihre strategische oder wirtschaftliche Aufgabe, doch unnötige Verschmutzung und vermeidbare Abhängigkeit sollten verringert werden.",
      position: [
        "Kohle, Öl und Gas sind nach den Umweltkosten, der Verlässlichkeit, der strategischen Notwendigkeit und den verfügbaren Ersatzlösungen zu beurteilen.",
      ],
      policies: [
        "Kein sofortiges umfassendes Verbot fossiler Energieträger.",
        "Die notwendige Versorgung für Verkehr, Industrie, Wärme und die strategischen Reserven bleibt erhalten, während Alternativen entwickelt werden.",
        "Schwere Luftverschmutzung und umweltzerstörende Formen der Gewinnung werden verringert.",
        "Die Effizienz wird gefördert, wo sie zugleich Kosten und Ressourcenverbrauch senkt.",
        "Abhängigkeit von feindlichen oder unzuverlässigen ausländischen Lieferanten wird vermieden.",
        "Von besonders schädlichen Verwendungen wird abgerückt, sobald verlässliche und wirtschaftlich realistische Ersatzlösungen bestehen.",
        "Zeitpläne für den Umstieg, die wesentliche industrielle Kapazität zerstören oder die Grundversorgung mit Energie unbezahlbar machen, werden vermieden.",
      ],
      keywords: [
        "fossile Energieträger",
        "Kohle",
        "Öl",
        "Erdgas",
        "Energiesicherheit",
        "Luftverschmutzung",
      ],
    },

    "renewable-energy": {
      title: "Erneuerbare Energien",
      shortAnswer:
        "Erneuerbare Energien sollten gefördert werden, wo sie technisch solide, wirtschaftlich vernünftig und mit Landschaften, Gemeinschaften und der Netzstabilität vereinbar sind.",
      position: [
        "Wind, Sonne, Wasser, Erdwärme und andere Quellen sind Werkzeuge und keine sittlichen Zwecke; sie sind nach den Verhältnissen vor Ort zu beurteilen.",
      ],
      policies: [
        "Die erneuerbare Erzeugung ist zulässig und wird gefördert, wo sie wirtschaftlich und ökologisch sinnvoll ist.",
        "Historische Landschaften und ökologisch empfindliche Gebiete werden vor schlecht geplanter industrieller Erschließung geschützt.",
        "Die unnötige Zerstörung ertragreichen Ackerlands für flächenintensive Energievorhaben wird vermieden.",
        "Der Bedarf an Speichern, Netzen und Reserven wird redlich eingerechnet.",
        "Örtliches und gemeinschaftliches Eigentum an Energieanlagen wird unterstützt, wo es tragfähig ist.",
        "Der Ausbau wird nicht bloß zur Erfüllung zahlenmäßiger Ziele vorgeschrieben, ohne Rücksicht auf die Verlässlichkeit und die Kosten vor Ort.",
      ],
      keywords: [
        "erneuerbare Energien",
        "Solarenergie",
        "Windkraft",
        "Wasserkraft",
        "Erdwärme",
        "Netzstabilität",
        "Landschaft",
      ],
    },

    "climate-policy": {
      title: "Klimapolitik",
      shortAnswer:
        "Zur Bewahrung der Umwelt gehören eine kluge Minderung des Klimawandels und die Anpassung an ihn, doch die Klimapolitik rechtfertigt weder eine unbegrenzte zentrale Steuerung noch Maßnahmen, die für geringen Nutzen unverhältnismäßige Härten auferlegen.",
      position: [
        "Den Klimarisiken sollte mit praktischer Umweltpolitik, technischer Entwicklung, widerstandsfähiger Infrastruktur und wirksamer internationaler Zusammenarbeit dort begegnet werden, wo die Probleme wirklich über die Grenzen hinausgehen.",
      ],
      policies: [
        "Wirtschaftlich vernünftige Minderungen der Treibhausgasemissionen werden unterstützt.",
        "Maßnahmen mit messbarem Nutzen für die Umwelt haben Vorrang.",
        "Kernkraft, erneuerbare Energien, Effizienz und andere Techniken werden nach ihren praktischen Ergebnissen eingesetzt.",
        "In die Anpassung und die Widerstandsfähigkeit gegen Hochwasser, Hitze, Dürre, Waldbrände und andere Gefahren wird investiert.",
        "Wälder, Böden, Gewässer und Lebensräume, die die Widerstandsfähigkeit stärken, werden geschützt.",
        "Maßnahmen, die gewöhnliche Familien unverhältnismäßig verarmen lassen und dabei kaum Nutzen für die Umwelt bringen, werden vermieden.",
        "Die Klimapolitik als pauschale Rechtfertigung für dauerhafte Massenüberwachung oder verpflichtende digitale Steuerung wird verworfen.",
        "Genaue Emissionsziele werden erst nach einer fachlichen Prüfung der wissenschaftlichen Erkenntnisse, der Machbarkeit und der wirtschaftlichen Verhältnisse festgelegt.",
      ],
      limits: [
        "Das Manifest bestimmt keine Netto-Null-Termine, keine CO₂-Steuersätze, keine Temperaturziele und keine verbindlichen Emissionsquoten. Diese zahlenmäßigen Fragen werden hier nicht abgeleitet.",
      ],
      keywords: [
        "Klimawandel",
        "Emissionen",
        "CO₂",
        "Anpassung",
        "Widerstandsfähigkeit",
        "Umwelt",
        "Energie",
        "Bewahrung",
      ],
    },

    "foreign-policy-doctrine": {
      title: "Außenpolitische Lehre",
      shortAnswer:
        "Strategische Unabhängigkeit statt imperialer Ansprüche, geleitet von der Klugheit, vom berechtigten nationalen Interesse und von einem starken Vorbehalt gegen jeden unnötigen Krieg.",
      position: [
        "Die europäische Außenpolitik sollte nach strategischer Unabhängigkeit streben und nicht nach imperialer Geltung. Sie sollte sich von der Klugheit leiten lassen, vom berechtigten nationalen Interesse, vom Schutz der Unschuldigen, wo er wirklich möglich ist, und von einem starken Vorbehalt gegen jeden unnötigen Krieg.",
      ],
      policies: [
        "Strategische Unabhängigkeit bei Nahrung, Energie, Infrastruktur, Medizin und den lebenswichtigen Industrien.",
        "Ablehnung der ideologischen Kriege, die fremde Zivilisationen nach abstrakten politischen Modellen umbauen wollen.",
        "Die europäischen Nationen sollten in der Lage sein, sich selbst zu verteidigen und ihre Grenzen zu sichern.",
      ],
      keywords: [
        "Außenpolitik",
        "Verteidigung",
        "strategische Unabhängigkeit",
        "Krieg",
        "Intervention",
      ],
    },

    nato: {
      title: "NATO",
      shortAnswer:
        "Restore Europa steht einer dauerhaften Abhängigkeit von der NATO skeptisch gegenüber und tritt für mehr nationale und europäische strategische Unabhängigkeit ein.",
      position: [
        "Die Zusammenarbeit zur Verteidigung kann nützlich sein, doch die Mitgliedschaft in der NATO und die Bindung an sie sollten nicht als unbezweifelbare oder dauerhafte Notwendigkeiten behandelt werden.",
      ],
      policies: [
        "Glaubwürdige nationale und europäische Verteidigungsfähigkeiten werden aufgebaut.",
        "Die dauerhafte strategische Abhängigkeit von den Vereinigten Staaten wird verringert.",
        "Die Fähigkeit zur Zusammenarbeit mit NATO-Staaten bei der Aufklärung, der Verteidigungstechnik, den Übungen und wirklichen gemeinsamen Bedrohungen bleibt erhalten.",
        "An Kriegen wird nicht bloß teilgenommen, um die Geschlossenheit des Bündnisses zu zeigen.",
        "Die verfassungsmäßige nationale Verfügung über den Einsatz der Streitkräfte bleibt gewahrt.",
        "Ideologische Kriege, die fremde Gesellschaften umformen sollen, werden verworfen.",
        "Die langfristige Mitgliedschaft in der NATO bleibt einer erneuten Prüfung offen, falls die strategische Unabhängigkeit durch eine geeignetere Verteidigungsstruktur gesichert werden kann.",
      ],
      keywords: [
        "NATO",
        "Artikel 5",
        "kollektive Verteidigung",
        "strategische Unabhängigkeit",
        "europäische Verteidigung",
        "Militärbündnisse",
        "Bündnis",
      ],
    },

    russia: {
      title: "Russland",
      shortAnswer:
        "Weder eine dauerhafte Bindung an Russland noch eine dauerhafte weltanschauliche Feindschaft gegenüber Russland.",
      position: [
        "Russland ist eine auswärtige Macht, mit der die europäischen Nationen zusammenarbeiten können, wo die Interessen übereinstimmen, und der sie entgegentreten können, wo die Interessen widerstreiten.",
      ],
      policies: [
        "Die Beziehungen werden nach den konkreten europäischen und nationalen Interessen beurteilt.",
        "Diplomatische Kanäle bleiben erhalten, wo immer es möglich ist.",
        "Es wird in Handel, Sicherheit oder anderen Fragen zusammengearbeitet, wo das wirklich nützt und sittlich zulässig ist.",
        "Die strategische Unabhängigkeit bei Energie, Verteidigung und kritischer Infrastruktur bleibt gewahrt.",
        "Ein übermäßiger russischer Einfluss auf europäische politische oder wirtschaftliche Institutionen wird nicht zugelassen.",
        "In Kriege gegen Russland wird nicht bloß aus weltanschaulichem oder geopolitischem Geltungsstreben eingetreten.",
        "Verhältnismäßige Antworten auf schwere Friedensbrüche oder schwere Angriffe auf unschuldige Bevölkerungen sind zulässig.",
        "Verhandlungslösungen werden gesucht, wo sie realistisch sind.",
      ],
      keywords: [
        "Russland",
        "Russische Föderation",
        "Europa",
        "Neutralität",
        "strategische Unabhängigkeit",
        "Diplomatie",
        "Moskau",
      ],
    },

    ukraine: {
      title: "Ukraine",
      shortAnswer:
        "Restore Europa macht die politische Bindung weder an die Ukraine noch an Russland zu einem eigenständigen Ziel der europäischen Außenpolitik.",
      position: [
        "Die Politik gegenüber dem Krieg zwischen Russland und der Ukraine sollte sich nach dem berechtigten nationalen Interesse richten, nach dem Schutz unschuldigen Lebens, nach der Gefahr der Eskalation und nach einem realistischen Streben nach Frieden und nicht nach weltanschaulicher Treue zu einer der beiden Seiten.",
      ],
      policies: [
        "Die humanitäre Sorge um die vom Krieg betroffenen Zivilisten bleibt bestehen.",
        "Ernsthafte Bemühungen um einen ausgehandelten und dauerhaften Frieden werden unterstützt, wo sie realistisch sind.",
        "Militärische Verpflichtungen ohne zeitliche Grenze und ohne konkrete Begründung aus der nationalen Sicherheit werden vermieden.",
        "Wiederaufbau, Regimewechsel oder eine dauerhafte geopolitische Konfrontation werden nicht als selbstverständliche europäische Pflichten behandelt.",
        "Militärische Hilfe wird im Einzelfall nach dem nationalen Interesse, der Verhältnismäßigkeit, der Eskalationsgefahr und den sittlichen Grenzen des Waffengebrauchs beurteilt.",
        "Die humanitäre Hilfe für Zivilisten wird von der unmittelbaren Teilnahme am bewaffneten Konflikt unterschieden.",
        "Eine dauerhafte Feindschaft gegenüber dem ukrainischen wie dem russischen Volk wird vermieden.",
      ],
      keywords: [
        "Ukraine",
        "Russland",
        "Krieg",
        "Neutralität",
        "Friedensverhandlungen",
        "Militärhilfe",
        "Außenpolitik",
        "Kiew",
      ],
    },

    "united-states": {
      title: "Vereinigte Staaten",
      shortAnswer:
        "Eine förderliche Zusammenarbeit mit den Vereinigten Staaten ohne politische, militärische, technische oder kulturelle Abhängigkeit.",
      position: [
        "Die Vereinigten Staaten können ein wichtiger Partner sein, doch die europäischen Nationen sollten ihre strategische und kulturelle Eigenständigkeit bewahren.",
      ],
      policies: [
        "Normale diplomatische und wirtschaftliche Beziehungen bleiben erhalten.",
        "In Verteidigung, Wissenschaft, Aufklärung und Handel wird zusammengearbeitet, wo die Interessen wirklich übereinstimmen.",
        "Die kritische Abhängigkeit vom amerikanischen militärischen Schutz und von amerikanischer strategischer Infrastruktur wird verringert.",
        "Die übermäßige Abhängigkeit von marktbeherrschenden ausländischen Technologieplattformen wird verringert.",
        "Die europäischen Institutionen werden vor ausländischer politischer oder unternehmerischer Einflussnahme geschützt.",
        "Die kulturelle Unabhängigkeit von eingeführter kommerzieller Vereinheitlichung bleibt gewahrt.",
        "Die selbstverständliche Übernahme amerikanischer außenpolitischer Prioritäten wird verworfen.",
      ],
      keywords: [
        "Vereinigte Staaten",
        "Amerika",
        "strategische Eigenständigkeit",
        "europäische Unabhängigkeit",
        "Technik",
        "NATO",
        "Atlantizismus",
      ],
    },

    china: {
      title: "China",
      shortAnswer:
        "Sachliche Beziehungen zu China, verbunden mit einem starken Schutz gegen strategische Abhängigkeit und gegen fremde Verfügung über kritische Infrastruktur.",
      position: [
        "China sollte weder als weltanschaulicher Feind noch als Vorbild für Europa behandelt werden.",
      ],
      policies: [
        "Diplomatische Beziehungen und rechtmäßiger Handel bleiben erhalten.",
        "Lieferketten werden breiter aufgestellt, wo eine übermäßige Abhängigkeit strategische Verwundbarkeit schafft.",
        "Kritische Infrastruktur, Verteidigungsindustrie und empfindliche Techniken werden vor ausländischer Verfügung geschützt.",
        "Investitionen in strategisch empfindlichen Bereichen werden auf Risiken für die nationale Sicherheit geprüft.",
        "Eine Abhängigkeit von China bei wesentlichen Arzneimitteln, in der Telekommunikation, bei Energietechnik oder in militärisch bedeutsamen Lieferketten wird vermieden.",
        "Spionage, verdeckter politischer Einfluss und eingeführte Systeme nach Art des Sozialkredits werden abgewehrt.",
        "In Wissenschaft und Handel wird zusammengearbeitet, wo es angemessen ist.",
        "Eine unnötige militärische Konfrontation wird vermieden, wo die europäische Sicherheit nicht unmittelbar berührt ist.",
      ],
      keywords: [
        "China",
        "Volksrepublik China",
        "Handel",
        "strategische Abhängigkeit",
        "kritische Infrastruktur",
        "Lieferketten",
        "Überwachung",
        "Peking",
      ],
    },

    "israel-and-palestine": {
      title: "Israel und Palästina",
      shortAnswer:
        "Keine dauerhafte Bindung an Israel und keine an Palästina; die Politik sollte sich auf unschuldiges Leben, die Stabilität der Region, rechtmäßige Diplomatie und konkrete europäische Interessen richten.",
      position: [
        "Der Konflikt sollte nicht zu einem dauernden Ordnungsprinzip der europäischen Außen- oder Innenpolitik werden.",
      ],
      policies: [
        "Diplomatische Beziehungen werden nach dem gewöhnlichen nationalen Interesse unterhalten.",
        "Keiner Seite wird bedingungslose politische Unterstützung gewährt.",
        "Absichtliche Angriffe auf Zivilisten werden verurteilt, gleich von wem sie ausgehen.",
        "Es werden keine Waffen an eine Partei des Konflikts verkauft und keine rüstungsindustrielle Zusammenarbeit mit ihr betrieben, solange er andauert.",
        "Humanitäre Hilfe ist zulässig, wo sie Zivilisten in wirklicher Not verlässlich erreicht.",
        "Eine unmittelbare militärische Beteiligung wird vermieden, solange keine außerordentliche Bedrohung vorliegt, die die strengen Voraussetzungen der rechtmäßigen Verteidigung erfüllt.",
        "Realistische diplomatische Bemühungen, die die Gewalt verringern können, werden unterstützt.",
        "Eingeführte konfessionelle Einschüchterung oder politische Gewalt wird innerhalb Europas nicht geduldet.",
      ],
      keywords: [
        "Israel",
        "Palästina",
        "Gaza",
        "Naher Osten",
        "Neutralität",
        "humanitäre Hilfe",
        "Außenpolitik",
      ],
    },

    "foreign-aid": {
      title: "Auslandshilfe",
      shortAnswer:
        "Die Auslandshilfe sollte begrenzt sein, Rechenschaft ablegen und sich auf konkrete humanitäre oder entwicklungsbezogene Bedürfnisse richten und nicht auf weltanschaulichen Staatsaufbau oder dauerhafte Abhängigkeit.",
      position: [
        "Die ersten Pflichten einer Regierung gelten der eigenen politischen Gemeinschaft, während die wirklichen humanitären Pflichten bestehen bleiben.",
      ],
      policies: [
        "Nothilfe nach Krieg, Hungersnot, Naturkatastrophen und vergleichbaren humanitären Katastrophen hat Vorrang.",
        "Hilfe, die in der Nähe der betroffenen Bevölkerung geleistet wird, ist vorzuziehen, wo sie wirksam ist.",
        "Nachvollziehbarkeit und Prüfung sind erforderlich.",
        "Programme, die weitgehend von Korruption oder Günstlingswirtschaft vereinnahmt sind, werden beendet.",
        "Hilfe, die vor allem eine weltanschauliche oder kulturelle Umgestaltung durchsetzen soll, wird verworfen.",
        "Hilfe, die vor Ort Fähigkeiten aufbaut, ist einer unbefristeten Abhängigkeit vorzuziehen.",
        "Die Unterstützung von Medizin, Ernährungssicherheit, sauberem Wasser und Wiederaufbau ist zulässig, wo sie nachweislich wirkt.",
        "Die Hilfe bleibt den rechtmäßigen Haushaltspflichten im Inland nachgeordnet.",
      ],
      keywords: [
        "Auslandshilfe",
        "humanitäre Hilfe",
        "Entwicklungshilfe",
        "Wohltätigkeit",
        "internationale Entwicklung",
        "Flüchtlinge",
      ],
    },

    sanctions: {
      title: "Sanktionen",
      shortAnswer:
        "Wirtschaftssanktionen sind außerordentliche Mittel für außerordentlich schwere Fälle und keine gewöhnlichen Werkzeuge weltanschaulicher Zuordnung.",
      position: [
        "Sanktionen können gerechtfertigt sein, wo ein schweres Unrecht klar benannt ist und ein nichtmilitärischer Zwang eine realistische Aussicht hat, es zu begrenzen, ohne der Zivilbevölkerung unverhältnismäßig zu schaden.",
      ],
      policies: [
        "Ein ernsthaftes und klar benanntes Ziel ist erforderlich.",
        "Gezielten Maßnahmen gegen verantwortliche Amtsträger, Organisationen, militärische Vermögenswerte oder Finanznetzwerke ist gegenüber der unterschiedslosen Bestrafung der Zivilbevölkerung der Vorzug zu geben.",
        "Sanktionen werden nur eingesetzt, wo weniger zwingende Mittel nicht ausreichen.",
        "Es wird geprüft, ob die Maßnahmen eine vernünftige Aussicht haben, ihr Ziel zu erreichen.",
        "Der absehbare Schaden für unschuldige Zivilisten wird bedacht.",
        "Sanktionen werden regelmäßig überprüft und aufgehoben, wenn ihr rechtmäßiger Zweck entfällt oder die Kosten unverhältnismäßig werden.",
        "Humanitäre Ausnahmen für wesentliche zivile Güter bleiben erhalten, wo immer es praktikabel ist.",
        "Sehr weitreichende Wirtschaftssanktionen bleiben außerordentlich schweren Umständen vorbehalten.",
      ],
      keywords: [
        "Sanktionen",
        "Embargo",
        "Einfrieren von Vermögen",
        "Außenpolitik",
        "wirtschaftlicher Zwang",
        "humanitäre Ausnahmen",
      ],
    },

    conscription: {
      title: "Wehrdienst und nationale Verteidigungsbereitschaft",
      shortAnswer:
        "Eine starke Freiwilligenarmee, ausgebildete Reserven und eine körperlich leistungsfähige Bevölkerung sind der regelmäßigen allgemeinen Wehrpflicht in Friedenszeiten vorzuziehen.",
      position: [
        "Der Militärdienst ist ehrenhaft und für die Verteidigung notwendig, doch die gewöhnlichen Streitkräfte sollten sich in der Hauptsache aus Menschen zusammensetzen, die sich frei für den Dienst entscheiden.",
      ],
      policies: [
        "Es werden berufliche und freiwillige Streitkräfte unterhalten, die zu einer glaubwürdigen Landesverteidigung fähig sind.",
        "Der Dienst wird durch ernsthafte Ausbildung, gesellschaftliche Achtung und angemessene Bedingungen gefördert und nicht durch regelmäßigen Zwang.",
        "Eine ausgebildete Reserve und eine freiwillige Reserveausbildung werden unterhalten.",
        "Die allgemeine Wehrpflicht in Friedenszeiten wird nicht als Regelmodell verwendet.",
        "Ein zeitweiliger verpflichtender Landesverteidigungsdienst ist in einer äußersten Verteidigungslage, die das Überleben der Nation bedroht, zulässig, wo er wirklich notwendig ist.",
        "Für wirkliche Kriegsdienstverweigerer aus Gewissensgründen wird ein angemessener ziviler Dienst an der Allgemeinheit vorgesehen.",
        "Die Streitkräfte bleiben an sittliche und rechtliche Grenzen gebunden, und offensichtlich rechtswidrige Befehle werden verweigert.",
        "Der Schulsport wird gestärkt: durch ernsthaft aufbauende Ertüchtigung, Schwimmen, Erste Hilfe, Orientierung im Gelände, Fertigkeiten im Freien und altersgerechte Kenntnisse des Zivilschutzes, mit angemessener Rücksicht auf gesundheitliche Einschränkungen und Behinderungen.",
      ],
      keywords: [
        "Wehrpflicht",
        "Militärdienst",
        "Dienst an der Allgemeinheit",
        "Reserve",
        "körperliche Fitness",
        "Schulen",
        "Zivilschutz",
        "Kriegsdienstverweigerung",
        "Einberufung",
      ],
    },

    "nuclear-weapons": {
      title: "Kernwaffen",
      shortAnswer:
        "Restore Europa tritt für die überprüfbare mehrseitige Verringerung und die schließliche Abschaffung der Kernwaffen ein.",
      position: [
        "Kernwaffen schaffen Gefahren und Zerstörungskraft von anderer Art als gewöhnliche konventionelle Waffen und sollten nicht als dauerhafte Mittel der Politik normalisiert werden.",
      ],
      policies: [
        "Auf die international überprüfbare Verringerung und die schließliche Abschaffung der Kernwaffenarsenale wird hingearbeitet.",
        "Ernsthafte Vereinbarungen zur Rüstungskontrolle und zur Nichtverbreitung werden unterstützt.",
        "Absichtliche Kernwaffenangriffe auf die Zivilbevölkerung werden abgelehnt.",
        "Die Entwicklung von Kernwaffen bloß um geopolitischer Geltung willen wird abgelehnt.",
        "Angestrebt wird eine gegenseitige und überprüfbare Abrüstung und nicht Maßnahmen, die ein Land als einziges der nuklearen Erpressung aussetzen.",
        "Starke Prüfsysteme gegen das heimliche Zurückbehalten verbotener Arsenale werden unterhalten.",
        "Maßnahmen, die die Gefahr eines unbeabsichtigten oder unbefugten Atomwaffenstarts verringern, werden unterstützt.",
        "Die Weiterverbreitung an weitere Kernwaffenstaaten wird abgelehnt.",
        "Die Politik zur Kernenergie bleibt von der Politik zu den Kernwaffen getrennt.",
      ],
      keywords: [
        "Kernwaffen",
        "nukleare Abrüstung",
        "Abschreckung",
        "Nichtverbreitung",
        "Rüstungskontrolle",
        "strategische Waffen",
      ],
    },
  },
};

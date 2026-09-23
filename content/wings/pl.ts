import type { WingsText } from "./index";

export const wingsText: WingsText = {
  meta: {
    eyebrow: "Organizacja",
    title: "Oddział w każdym narodzie Europy.",
    metaTitle: "Oddziały krajowe",
    lede: "Restore Europa jest zorganizowana jako ruch oddziałów krajowych, a nie jako jedna partia kontynentalna. Każdy naród prowadzi własny — odpowiedzialny przed ludźmi, którzy tam mieszkają, i przed nikim za granicą.",
    description:
      "Restore Europa jest zorganizowana jako ruch oddziałów krajowych — po jednym na każdy naród Europy, każdy odpowiedzialny przed własnymi członkami i zajmujący się tylko tym, czego nie mogą udźwignąć jego koła i regiony.",
    intro: [
      {
        type: "lead",
        text: "Nasz program głosi, że nic nie powinno być rozstrzygane na wyższym szczeblu, jeśli może być kompetentnie rozstrzygnięte na niższym. Ruch, który opowiadałby się za pomocniczością, a potem zorganizował się jako jedno niezróżnicowane ciało europejskie, nie zasługiwałby na wiarę.",
      },
      {
        type: "paragraph",
        text: "Dlatego ruch zbudowany jest odwrotnie. Oddział krajowy to szczebel, na którym praca polityczna naprawdę się dzieje: wnosi program w warunki jednego kraju, startuje w wyborach zgodnie z prawem tego kraju, ma własny statut i odpowiada przed własnymi członkami.",
      },
      {
        type: "paragraph",
        text: "Oddziały łączy [manifest][manifesto] i wynikające z niego [zasady][principles]. Nie łączy ich jeden szablon polityki, bo warunki Portugalii i Estonii to nie te same warunki.",
      },
    ],
    note: "Oddziały powstają na całym kontynencie. Jeśli chcesz pomóc założyć ten w swoim kraju, napisz o tym przez „Włącz się” — to na tym etapie najpożyteczniejsza rzecz, jaką ktokolwiek może zrobić dla ruchu.",
    mapLabel:
      "Mapa Europy, na której czterdzieści cztery narody wymienione na tej stronie odcinają się od okolicznych ziem.",
    mapCaption:
      "Wyróżnione tutaj narody to te czterdzieści cztery wymienione poniżej. Obecność na mapie znaczy, że ruch organizuje się wokół tego narodu, a nie że jego oddział jest ukonstytuowany lub czynny.",
  },

  regions: {
    western: "Europa Zachodnia",
    northern: "Europa Północna",
    southern: "Europa Południowa",
    "central-eastern": "Europa Środkowa i Wschodnia",
  },

  countries: {
    albania: "Albania",
    andorra: "Andora",
    austria: "Austria",
    belgium: "Belgia",
    "bosnia-and-herzegovina": "Bośnia i Hercegowina",
    bulgaria: "Bułgaria",
    croatia: "Chorwacja",
    cyprus: "Cypr",
    czechia: "Czechy",
    denmark: "Dania",
    estonia: "Estonia",
    finland: "Finlandia",
    france: "Francja",
    germany: "Niemcy",
    greece: "Grecja",
    hungary: "Węgry",
    iceland: "Islandia",
    ireland: "Irlandia",
    italy: "Włochy",
    kosovo: "Kosowo",
    latvia: "Łotwa",
    liechtenstein: "Liechtenstein",
    lithuania: "Litwa",
    luxembourg: "Luksemburg",
    malta: "Malta",
    moldova: "Mołdawia",
    monaco: "Monako",
    montenegro: "Czarnogóra",
    netherlands: "Niderlandy",
    "north-macedonia": "Macedonia Północna",
    norway: "Norwegia",
    poland: "Polska",
    portugal: "Portugalia",
    romania: "Rumunia",
    russia: "Rosja",
    "san-marino": "San Marino",
    serbia: "Serbia",
    slovakia: "Słowacja",
    slovenia: "Słowenia",
    spain: "Hiszpania",
    sweden: "Szwecja",
    switzerland: "Szwajcaria",
    ukraine: "Ukraina",
    "united-kingdom": "Wielka Brytania",
  },

  index: {
    /*
     * Four forms, not two. Polish counts 1 apart, 2–4 apart again, and 5 and
     * upward apart from both; `other` covers the fractional case the page will
     * never produce but the rules still define.
     */
    nationCount: {
      one: "{count} naród",
      few: "{count} narody",
      many: "{count} narodów",
      other: "{count} narodu",
    },
    closingTitle: "{count} narodów. Jedno dziedzictwo.",
    closingBody:
      "Każdy oddział na tej stronie to miejsce, gdzie pracę muszą wykonać ludzie, którzy tam mieszkają. Jeśli mieszkasz tam właśnie ty, ruch potrzebuje ciebie bardziej niż jeszcze jednego czytelnika.",
    getInvolved: "Włącz się",
    howWeOrganise: "Jak się organizujemy",
  },

  wing: {
    backLabel: "Oddziały krajowe",
    kicker: "Oddział krajowy",
    lead: "Oddział w kraju {country} to krajowy szczebel Restore Europa — ciało, które wnosi nasz program w warunki polityczne tego kraju ({country}), i szczebel, na którym tamtejsi członkowie decydują, jak go realizować.",
    body: [
      {
        type: "paragraph",
        text: "Oddział krajowy nie jest filią przyjmującą polecenia. Ma własny statut, wybiera własnych kandydatów, wyznacza własne priorytety w ramach wspólnego programu i odpowiada przed własnymi członkami, a nie przed jakimkolwiek ciałem spoza kraju.",
      },
      {
        type: "paragraph",
        text: "Czego nie robi, to nie rozstrzyga spraw należących do mniejszego ciała. Gdzie pracę może wykonać koło, praca należy do koła. Tę samą powściągliwość, jakiej ruch żąda od państwa, żąda najpierw od siebie.",
      },
    ],
    metaTitle: "{country} — oddział krajowy",
    metaDescription:
      "Oddział Restore Europa w kraju {country}: krajowy szczebel ruchu, za co odpowiada i jak pomóc go założyć.",
    ogTitle: "Restore Europa {country} — oddział krajowy",
    ogDescription: "Krajowy szczebel Restore Europa w kraju {country}.",
    notFound: "Nie znaleziono oddziału",
    remitHeading: "Za co odpowiada oddział",
    remitLede:
      "Te same sześć zadań w każdym narodzie. Jak są wypełniane, rozstrzygają członkowie w kraju {country}.",
    takePartHeading: "Pomóż założyć oddział w kraju {country}.",
    takePartBody:
      "Oddział krajowy budują ludzie żyjący w warunkach, które ma zmienić. Napisz nam, co możesz robić — organizować, pisać, wnieść wiedzę zawodową albo po prostu zostać policzonym.",
    getInvolved: "Włącz się",
    contact: "Kontakt",
    neighboursHeading: "Inne oddziały w regionie {region}",
  },

  chain: {
    caption: "Gdzie stoi oddział",
    footnote:
      "Czytaj od dołu: szczebel przejmuje tylko to, czego ten pod nim nie może kompetentnie udźwignąć.",
    nationalLabel: "{layer} — {country}",
  },

  layers: {
    chapter: {
      label: "Koło lokalne",
      note: "Miasto albo dzielnica. Spotkania, lokalna praca polityczna i wybór kandydatów tam, gdzie koła już działają.",
    },
    regional: {
      label: "Koordynacja regionalna",
      note: "Wsparcie między kołami i wspólna organizacja. Żadnej kompetencji, którą koło może utrzymać samo.",
    },
    national: {
      label: "Oddział krajowy",
      note: "Statut, program, zgodność z krajowym prawem o partiach i wyborach oraz kandydatury krajowe.",
    },
    european: {
      label: "Ruch europejski",
      note: "Tylko to, czego narody naprawdę nie mogą zrobić osobno: obrona, granice, infrastruktura strategiczna, nauka, energia.",
    },
  },

  remit: {
    programme: {
      term: "Program w kontekście",
      description:
        "Stosowanie manifestu do rzeczywistych warunków kraju — jego rynku mieszkaniowego, demografii, przemysłu, krajobrazu — bez zmieniania tego, co ruch ma wspólne.",
    },
    elections: {
      term: "Wybory i kandydaci",
      description:
        "Rejestracja, wybór kandydatów i start w wyborach zgodnie z krajowym prawem o partiach i wyborach, w jakiejkolwiek postaci to prawo występuje.",
    },
    statutes: {
      term: "Statut i zgodność z prawem",
      description:
        "Własny statut, rejestr członków, rachunki i sprawozdawczość ustawowa, publikowane w kraju, w którym działa.",
    },
    chapters: {
      term: "Koła i regiony",
      description:
        "Zakładanie kół lokalnych, wspieranie koordynacji regionalnej i opieranie się pokusie przejmowania tego, co jedno i drugie potrafi samo.",
    },
    language: {
      term: "Język i publikacja",
      description:
        "Tworzenie i utrzymywanie miarodajnego tekstu naszych dokumentów w języku narodowym. Tłumaczenia są zadaniem oddziału i nie są publikowane, dopóki nie są dobre.",
    },
    europe: {
      term: "Reprezentacja w Europie",
      description:
        "Mówienie za swoich członków w szerszym ruchu i współpraca z pozostałymi oddziałami w sprawach, które tego rzeczywiście wymagają.",
    },
  },
};

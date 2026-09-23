import type { AboutText } from "./index";

export const aboutText: AboutText = {
  meta: {
    eyebrow: "O nas",
    title: "Ruch polityczny zorganizowany na długo.",
    metaTitle: "O nas",
    lede: "Restore Europa Movement budujemy jako trwałe przedsięwzięcie polityczne, a nie kampanię. Ta strona przedstawia, kim jesteśmy, jak pracujemy i jakie granice sami sobie stawiamy.",
    description:
      "Kim jest Restore Europa Movement, dlaczego nazywamy naszą politykę przywróceniem, jak się organizujemy oraz na czym polega nasze zobowiązanie do pokojowego, konstytucyjnego i demokratycznego udziału w życiu politycznym.",
  },

  onThisPage: "Na tej stronie",

  sections: {
    "who-we-are": {
      title: "Kim jesteśmy",
      body: [
        {
          type: "lead",
          text: "Restore Europa to europejski ruch polityczny oparty na przekonaniu, że Europa jest cywilizacją wartą kontynuowania i że kontynuowanie jej jest sprawą zwyczajnej polityki, a nie sentymentu.",
        },
        {
          type: "paragraph",
          text: "Organizujemy się jako partia członków, a nie osobowości: grupy lokalne, praca badawcza i pisarska oraz program ogłaszany w całości i broniony publicznie. Nasze stanowiska przedstawia [manifest][manifesto], a streszczają nasze [zasady][principles].",
        },
        {
          type: "note",
          text: "Ruch jest w organizacji. Organy, statuty, funkcyjni i dane rejestrowe będą ogłaszane tutaj w miarę ich ustanawiania — i nie wcześniej.",
        },
      ],
    },

    "why-restoration": {
      title: "Dlaczego przywrócenie",
      body: [
        {
          type: "paragraph",
          text: "Konserwatyzm często oznaczał obronę tego układu, który akurat istnieje. Rewolucja oznacza jego odrzucenie. Żadne z tych określeń nie opisuje tego, czego próbujemy.",
        },
        {
          type: "paragraph",
          text: "Przywrócenie oznacza odzyskanie zasad, które społeczeństwo porzuciło, i rozumne zastosowanie ich do obecnych warunków. Nie oznacza odtwarzania konkretnego stulecia: przeszłość zawierała niesprawiedliwość, biedę, przemoc i błąd, i nic z tego nie zasługuje na naszą nostalgię.",
        },
        {
          type: "statement",
          text: "Historii nie da się odwrócić. Kierunek da się zmienić.",
        },
      ],
    },

    "what-we-believe": {
      title: "W co wierzymy",
      body: [
        {
          type: "paragraph",
          text: "Krótko: że osoba jest pierwotna wobec systemu; że rodzina jest pierwszą instytucją cywilizacji; że narody europejskie mogą prawomocnie zachowywać swoją ciągłość; że własność powinna być szeroko rozproszona, a nie skupiona; że władza należy do najniższego szczebla zdolnego ją sprawować; że dziedzictwo przyrodnicze i budowlane trzymamy w powiernictwie; oraz że technika musi pozostać podporządkowana ludzkiemu osądowi.",
        },
        {
          type: "paragraph",
          text: "Uznajemy chrześcijańskie, a szczególnie katolickie dziedzictwo Europy za fundament jej cywilizacji — bez przymuszania do wiary i bez zakładania, że wspólne dziedzictwo publiczne wymaga prywatnej jednolitości.",
        },
        {
          type: "paragraph",
          text: "Każdy z tych punktów jest obszernie wyłożony wraz z uzasadnieniem w [manifeście][manifesto].",
        },
      ],
    },

    "political-method": {
      title: "Nasza metoda polityczna",
      body: [
        {
          type: "paragraph",
          text: "Argumentujemy publicznie, obszernie i pod własnym nazwiskiem. Nasz program ogłaszamy w całości, zamiast rozprowadzać go w hasłach, ponieważ ruch polityczny, który nie potrafi przedstawić swojego rozumowania, domaga się zaufania, na które nie zapracował.",
        },
        {
          type: "paragraph",
          text: "Krytykę kierujemy wobec systemów, instytucji, bodźców i idei. Nie nazywamy grup ludzi wrogami i nie prowadzimy kampanii opartej na pogardzie. Tam, gdzie nie zgadzamy się z innymi ruchami politycznymi, mówimy, na czym polega spór.",
        },
        {
          type: "paragraph",
          text: "Tam, gdzie wymagają tego trwałe interesy narodu, będziemy współpracować ponad podziałami partyjnymi. Opozycja jest koniecznym elementem życia demokratycznego; opozycja dla samej siebie nie jest.",
        },
      ],
    },

    "how-we-organize": {
      title: "Jak się organizujemy",
      body: [
        {
          type: "paragraph",
          text: "Zamierzona struktura wynika z zasady, za którą opowiadamy się gdzie indziej: kompetencja na najniższym szczeblu, który może ją udźwignąć.",
        },
        {
          type: "definitions",
          items: [
            {
              term: "Koła lokalne",
              description:
                "Jednostka podstawowa. Zebrania, lokalna praca polityczna i wyłanianie kandydatów tam, gdzie koła są założone i zarejestrowane.",
            },
            {
              term: "Koordynacja regionalna",
              description:
                "Wsparcie między kołami, wspólna organizacja i reprezentacja wyżej. Żadnej kompetencji, którą koło może wykonywać samo.",
            },
            {
              term: "Skrzydła narodowe",
              description:
                "Po jednym dla każdego narodu europejskiego, każde z własnym statutem, programem i kandydaturami według prawa własnego kraju. Zobacz [skrzydła][wings].",
            },
            {
              term: "Badania i publikacje",
              description:
                "[Katalog polityk][policy] oraz utrzymywanie manifestu jako żywego tekstu odniesienia.",
            },
          ],
        },
        {
          type: "note",
          text: "Żadne koło nie zostało jeszcze formalnie zawiązane. Zapytania o założenie koła lub [skrzydła narodowego][wings] obsługujemy przez [Włącz się][join].",
        },
      ],
    },

    "democratic-commitment": {
      title: "Nasze zobowiązanie do demokratycznego udziału w polityce",
      body: [
        {
          type: "lead",
          text: "Restore Europa dąży do swoich celów wyłącznie przez zgodny z prawem, pokojowy i konstytucyjny udział w życiu politycznym.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Uczestniczymy przez wybory, publiczną debatę, publikacje i legalne zrzeszanie się.",
            "Uznajemy porządek konstytucyjny i rządy prawa, w tym rozstrzygnięcia, które przegrywamy.",
            "Odrzucamy przemoc polityczną we wszelkich postaciach, bez zastrzeżeń i bez wyjątków.",
            "Odrzucamy terroryzm i uznajemy rozmyślne niszczenie niewinnego życia za niezdolne do zbudowania jakiegokolwiek ładu moralnego.",
            "Odrzucamy totalitaryzm, czy to partii, korporacji, ideologii, czy państwa.",
            "Odrzucamy nienawiść rasową i każdą politykę traktującą ludzi jako nierównych w godności.",
            "Oczekujemy, że członkowie i przedstawiciele dochowają tych zobowiązań, a ich złamanie uznajemy za dyskwalifikujące.",
          ],
        },
        {
          type: "paragraph",
          text: "To nie są zastrzeżenia prawne. Wynikają wprost z tego, co głosimy: że władza polityczna istnieje, by służyć dobru wspólnemu, że odpowiada przed prawem i że ruch, który twierdzi, iż broni cywilizacji, nie może tego czynić środkami niszczącymi warunki cywilizowanego życia.",
        },
      ],
    },
  },

  leadershipHeading: "Osoby",
  leadershipNote:
    "Nie powołano żadnych funkcyjnych i nie będziemy publikować życiorysów osób, które jeszcze tych stanowisk nie zajmują. Poniższe role opisują strukturę, którą wypełni ukształtowana organizacja, wraz z tym, za co każda z nich będzie odpowiadać.",

  leadership: {
    leader: {
      role: "Przewodniczący",
      remit: "Kierunek polityczny, reprezentowanie ruchu i odpowiedzialność przed członkami.",
    },
    "co-leader": {
      role: "Wiceprzewodniczący",
      remit:
        "Dzieli kierunek polityczny z przewodniczącym, zastępuje go w razie potrzeby i odpowiada za organizację oraz wewnętrzne postępowanie ruchu.",
    },
  },

  actions: {
    getInvolved: "Włącz się",
    contact: "Kontakt",
  },
};

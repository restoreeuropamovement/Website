import type { PolicyText } from "./index";

export const policyText: PolicyText = {
  meta: {
    eyebrow: "Stanowiska",
    title: "Katalog programowy",
    metaTitle: "Katalog programowy",
    version: "Wersja 0.3",
    framework: "Europejska odnowa integralna",
    lede: "Ten katalog odpowiada na wąskie pytanie: jakie stanowisko zajmuje Restore Europa w tej sprawie? Nie zastępuje manifestu. Manifest wykłada światopogląd; tutaj wyłożone są stanowiska temat po temacie, z wyszukiwarką.",
    description:
      "Stanowiska Restore Europa Movement temat po temacie, z wyszukiwarką, każde opatrzone informacją o tym, jak dalece jest rozstrzygnięte: ład moralny, rodzina, obywatelstwo, gospodarka, technika, edukacja, wymiar sprawiedliwości, ochrona zdrowia, środowisko i polityka zagraniczna.",
    body: [
      "Tam, gdzie katolicka nauka moralna jest jasna, Restore Europa z reguły przyjmuje ją jako moralny punkt wyjścia, a jej wykonanie w prawie cywilnym określa osobno. Jedno odstępstwo zapisujemy wprost: w sprawie kary śmierci Restore Europa przyjmuje dawniejsze, tradycyjne dopuszczenie jej w wypadkach wyjątkowych, a nie współczesne stanowisko abolicjonistyczne.",
      "Katalog odróżnia ład konstytucyjny, do którego Restore Europa dąży, od prawa europejskiego w jego obecnym stanie. Kilka stanowisk — w sprawie obywatelstwa, pozbawienia obywatelstwa, wolności słowa, publicznego statusu religii oraz kary śmierci — wymagałoby zmiany konstytucji lub traktatów, zanim mogłoby zostać wprowadzone w poszczególnych państwach Europy.",
      "Wersja 0.2 rozstrzyga pytania, które wersja 0.1 pozostawiła otwarte: stosunek instytucjonalny do Europy, azyl, deportacje, wynagrodzenia, podatki, emerytury, mieszkalnictwo, reprezentację pracowniczą, tożsamość i walutę cyfrową, nadzór biometryczny, inżynierię genetyczną, wymiar kar, miks energetyczny i każde stałe pytanie polityki zagranicznej. Tam, gdzie sformułowanie z wersji 0.2 zmieniło wcześniejszy wpis, obowiązuje tekst nowszy.",
      "Wersja 0.3 dodaje zespół wpisów o remigracji i jej egzekwowaniu. Odróżnia on obywatelstwo, status pobytowy, deportację z powodu przestępstwa, powrót po zakończeniu procedury azylowej oraz weryfikację obywatelstwa, zamiast traktować remigrację jako jedno nierozróżnione uprawnienie; jest napisany jako projektowana polityka konstytucyjna i ustawowa, a obowiązujące prawo europejskie i międzynarodowe wskazano osobno w każdym wpisie. Dwa wcześniejsze wpisy — naturalizacja oraz deportacja przestępców niebędących obywatelami — zostały wchłonięte przez nowsze sformułowania, zamiast istnieć obok nich podwójnie.",
    ],
    notice:
      "Każde pytanie w tym katalogu ma swoje stanowisko. Wpisy oznaczone jako Wyprowadzone idą w kierunku wskazanym przez manifest, choć ich wykonanie nie zostało ustalone. Stanowiska są zmieniane w miarę decyzji ruchu; wersja i data powyżej mówią, który tekst czytasz.",
  },

  labels: {
    version: "Wersja",
    date: "Data",
    framework: "Ramy ideowe",
    entries: "Wpisy",
  },

  index: {
    legendHeading: "Legenda statusów",
    /*
     * Cztery formy, nie dwie. Polski liczy inaczej 1, inaczej 2–4 i inaczej 5
     * i więcej; `other` obsługuje przypadek ułamkowy, którego strona nigdy nie
     * wytworzy, a który reguły języka wciąż przewidują.
     */
    showingAll: {
      one: "Pokazujemy jedyne stanowisko.",
      few: "Pokazujemy wszystkie {count} stanowiska.",
      many: "Pokazujemy wszystkie {count} stanowisk.",
      other: "Pokazujemy wszystkie {count} stanowiska.",
    },
    showingSome: {
      one: "Pasuje {count} z {total} stanowisk.",
      few: "Pasują {count} z {total} stanowisk.",
      many: "Pasuje {count} z {total} stanowisk.",
      other: "Pasuje {count} z {total} stanowisk.",
    },
    noMatch: "Nic w katalogu temu nie odpowiada.",
    showAll: "Pokaż wszystkie stanowiska",
    relevanceHeading: "Najlepiej dopasowane najpierw",
    suggestions: {
      heading: "Najbliższe stanowiska",
      body: "To są wpisy najbliższe temu, co zostało wpisane. Mogą używać innych słów.",
    },
    openQueue: {
      heading: "Kolejka spraw otwartych",
      body: "Te pytania zapisujemy jako nierozstrzygnięte, zamiast wywodzić odpowiedź z ideologii. Wymieniamy je, żeby luki były widoczne, a nie po cichu wypełnione.",
      items: [],
    },
    derivedQueue: {
      heading: "Rozstrzygnięte co do kierunku, nie co do szczegółu",
      body: "Każde pytanie w katalogu ma już stanowisko. Poniżej wymieniamy liczby wewnątrz tych stanowisk, które nie zostały ustalone i nie zostaną wymyślone, dopóki nie będzie dla nich podstawy.",
      items: [
        "Dokładne stawki i progi podatkowe",
        "Dokładne widełki kar w prawie karnym",
        "Mechanizm weryfikacji wieku w mediach społecznościowych",
        "Daty zerowej emisji netto, ceny emisji dwutlenku węgla i limity emisji",
        "Kryteria — urząd po urzędzie — dla zastrzeżonych urzędów publicznych",
        "Okresy ochronne dla cudzoziemców po niezawinionej utracie pracy",
        "Okresy nieobecności właściwe dla poszczególnych zezwoleń i górne granice detencji imigracyjnej",
      ],
    },
  },

  filters: {
    searchLabel: "Szukaj w stanowiskach",
    searchPlaceholder: "aborcja, pomocniczość, naturalizacja…",
    searchButton: "Szukaj",
    clear: "Wyczyść",
    sectionNavLabel: "Filtruj stanowiska według działu",
    sectionHeading: "Dział",
    allSections: "Wszystkie",
    statusNavLabel: "Filtruj stanowiska według statusu",
    statusHeading: "Status",
    anyStatus: "Dowolny",
  },

  entry: {
    breadcrumb: "Katalog programowy",
    positionHeading: "Stanowisko",
    policiesHeading: "Program",
    principleHeading: "Zasada",
    limitsHeading: "Granice i sprawy nierozstrzygnięte",
    basisHeading: "Podstawa w manifeście",
    keywordsHeading: "Hasła wyszukiwania",
    lastUpdatedBefore: "Ostatnia aktualizacja:",
    lastUpdatedAfter: ".",
    relatedHeading: "Stanowiska powiązane",
    allPositions: "Wszystkie stanowiska",
    readManifesto: "Przeczytaj manifest",
    notFound: "Nie znaleziono stanowiska",
  },

  statuses: {
    "manifesto-core": {
      label: "Rdzeń manifestu",
      description: "Ustalone wprost w Manifeście europejskiej odnowy integralnej.",
    },
    agreed: {
      label: "Stanowisko przyjęte",
      description: "Stanowisko określone dla tego katalogu po napisaniu manifestu.",
    },
    derived: {
      label: "Wyprowadzone",
      description:
        "Silnie wynikające z manifestu albo z przyjętego stanowiska, ale wykonanie nie jest rozstrzygnięte.",
    },
    open: {
      label: "Otwarte",
      description: "Nie przyjęto żadnego stanowiska.",
    },
  },

  categories: {
    constitutional: {
      title: "Ład konstytucyjny, religijny i moralny",
      summary:
        "Miejsce religii w życiu publicznym i pytania moralne, których prawo nie może ominąć.",
    },
    family: {
      title: "Rodzina, demografia i ład społeczny",
      summary: "Dom jako pierwsza instytucja i to, co polityka publiczna jest mu winna.",
    },
    nation: {
      title: "Naród, obywatelstwo, imigracja i Europa",
      summary: "Przynależność do wspólnoty politycznej i europejski ład między narodami.",
    },
    economy: {
      title: "Gospodarka, własność, finanse i praca",
      summary: "Własność, przedsiębiorczość, kredyt i godność pracy.",
    },
    technology: {
      title: "Technika, sztuczna inteligencja i życie na ludzką miarę",
      summary: "Co wolno zbudować, co należy wdrażać i co musi pozostać w zasięgu ręki.",
    },
    education: {
      title: "Edukacja, kultura i życie publiczne",
      summary: "Co przekazuje się następnemu pokoleniu i kto o tym rozstrzyga.",
    },
    government: {
      title: "Władza, wymiar sprawiedliwości i porządek publiczny",
      summary: "Władza, jej granice i traktowanie tych, którzy łamią prawo.",
    },
    healthcare: {
      title: "Ochrona zdrowia",
      summary: "Dostęp do koniecznej opieki i etyka, którą się w niej praktykuje.",
    },
    environment: {
      title: "Środowisko, ziemia i osadnictwo",
      summary: "Gospodarowanie dziedzictwem, którego nie stworzyliśmy.",
    },
    "foreign-policy": {
      title: "Polityka zagraniczna i obrona",
      summary:
        "Niezależność strategiczna i trwałe założenie przeciw wojnie, bez której można się obejść.",
    },
  },

  search: {
    synonyms: {
      "church-and-state": [
        "Kościół i państwo",
        "państwo wyznaniowe",
        "religia państwowa",
        "integralizm",
        "świeckość państwa",
        "laicyzm",
        "rozdział Kościoła od państwa",
      ],
      abortion: [
        "aborcja",
        "przerywanie ciąży",
        "dziecko nienarodzone",
        "obrona życia",
        "prawo do życia",
      ],
      euthanasia: [
        "eutanazja",
        "samobójstwo wspomagane",
        "wspomagane umieranie",
        "opieka paliatywna",
        "koniec życia",
      ],
      contraception: [
        "antykoncepcja",
        "kontrola urodzeń",
        "tabletka antykoncepcyjna",
        "planowanie rodziny",
        "prezerwatywy",
        "płodność",
      ],
      "same-sex-marriage": [
        "małżeństwa jednopłciowe",
        "małżeństwo osób tej samej płci",
        "związki partnerskie",
        "homoseksualność",
        "małżeństwo cywilne",
      ],
      pornography: [
        "pornografia",
        "porno",
        "treści dla dorosłych",
        "treści erotyczne",
        "nieprzyzwoitość",
      ],
      prostitution: [
        "prostytucja",
        "praca seksualna",
        "domy publiczne",
        "sutenerstwo",
        "handel ludźmi",
      ],
      drugs: [
        "narkotyki",
        "środki odurzające",
        "konopie",
        "marihuana",
        "haszysz",
        "dekryminalizacja",
      ],
      alcohol: ["alkohol", "piwo", "wino", "napoje spirytusowe", "pijaństwo", "trzeźwość"],
      gambling: [
        "hazard",
        "zakłady",
        "zakłady bukmacherskie",
        "kasyno",
        "loteria",
        "automaty do gier",
        "skrzynki z łupami",
      ],
      blasphemy: [
        "bluźnierstwo",
        "świętokradztwo",
        "profanacja",
        "obraza uczuć religijnych",
        "dewastacja kościołów",
      ],
      family: [
        "rodzina",
        "dzieci",
        "rodzice",
        "gospodarstwo domowe",
        "macierzyństwo",
        "ojcostwo",
        "opieka nad dziećmi",
      ],
      demography: [
        "demografia",
        "dzietność",
        "współczynnik urodzeń",
        "płodność",
        "spadek liczby ludności",
        "starzenie się społeczeństwa",
      ],
      "sunday-rest": [
        "handel w niedzielę",
        "niedziela wolna od handlu",
        "odpoczynek niedzielny",
        "dzień odpoczynku",
        "szabat",
        "godziny otwarcia sklepów",
      ],
      welfare: [
        "pomoc społeczna",
        "świadczenia socjalne",
        "zabezpieczenie społeczne",
        "zasiłek dla bezrobotnych",
        "siatka bezpieczeństwa",
      ],
      nation: [
        "naród",
        "lud",
        "ojczyzna",
        "tożsamość narodowa",
        "patriotyzm",
        "ciągłość historyczna",
      ],
      immigration: [
        "imigracja",
        "migracja",
        "migranci",
        "imigranci",
        "przybysze",
        "kontrola granic",
        "otwarte granice",
        "masowa imigracja",
      ],
      "irregular-migration": [
        "migracja nieuregulowana",
        "nielegalna imigracja",
        "nielegalny pobyt",
        "osoby bez dokumentów",
        "legalizacja pobytu",
        "abolicja",
      ],
      asylum: [
        "azyl",
        "uchodźcy",
        "osoby ubiegające się o azyl",
        "ochrona międzynarodowa",
        "zasada non-refoulement",
        "bezpieczny kraj trzeci",
      ],
      deportation: [
        "deportacja",
        "wydalenie",
        "wydalanie",
        "remigracja",
        "powrót",
        "zakaz wjazdu",
      ],
      citizenship: [
        "obywatelstwo",
        "przynależność państwowa",
        "paszport",
        "naturalizacja",
        "prawo ziemi",
        "prawo krwi",
      ],
      "dual-citizenship": [
        "podwójne obywatelstwo",
        "wielość obywatelstw",
        "drugi paszport",
        "zrzeczenie się obywatelstwa",
      ],
      integration: [
        "integracja",
        "asymilacja",
        "wymóg językowy",
        "wiedza obywatelska",
        "egzamin obywatelski",
      ],
      voting: ["prawo wyborcze", "prawo głosu", "wybory", "czynne prawo wyborcze"],
      "european-union": [
        "Unia Europejska",
        "UE",
        "Bruksela",
        "Komisja Europejska",
        "reforma traktatów",
        "eurosceptycyzm",
        "państwa członkowskie",
      ],
      subsidiarity: [
        "pomocniczość",
        "subsydiarność",
        "decentralizacja",
        "federalizm",
        "samorząd lokalny",
      ],
      economy: [
        "gospodarka",
        "ład gospodarczy",
        "kapitalizm",
        "socjalizm",
        "dystrybucjonizm",
        "wolny rynek",
      ],
      property: [
        "własność",
        "mienie",
        "drobni właściciele",
        "spółdzielnie",
        "szeroko rozproszona własność",
      ],
      monopolies: [
        "monopol",
        "monopole",
        "prawo antymonopolowe",
        "konkurencja",
        "kartele",
        "wielkie korporacje",
        "koncentracja gospodarcza",
      ],
      corporatism: [
        "cechy rzemieślnicze",
        "izby zawodowe",
        "korporacjonizm",
        "rzemiosło",
        "praktyki zawodowe",
        "przedstawicielstwo zawodowe",
      ],
      usury: [
        "lichwa",
        "odsetki",
        "stopy procentowe",
        "kredyty",
        "pożyczki",
        "zadłużenie",
        "banki",
      ],
      housing: [
        "mieszkalnictwo",
        "mieszkania",
        "czynsz",
        "wynajmujący",
        "kredyty hipoteczne",
        "ceny mieszkań",
        "własne mieszkanie",
        "najemcy",
      ],
      work: ["praca", "zatrudnienie", "miejsca pracy", "pracownicy", "rynek pracy"],
      wages: [
        "płaca",
        "płace",
        "wynagrodzenie",
        "płaca minimalna",
        "płaca godziwa",
        "płaca rodzinna",
        "zarobki",
      ],
      tax: [
        "podatek",
        "podatki",
        "opodatkowanie",
        "podatek dochodowy",
        "VAT",
        "podatek spadkowy",
        "podatek od osób prawnych",
        "podatek majątkowy",
      ],
      pensions: [
        "emerytura",
        "emerytury",
        "renty",
        "wiek emerytalny",
        "starość",
        "oszczędności emerytalne",
      ],
      unions: [
        "związki zawodowe",
        "rokowania zbiorowe",
        "strajki",
        "rady pracownicze",
        "przedstawicielstwo pracowników",
      ],
      technology: [
        "technologia",
        "technika",
        "cyfryzacja",
        "innowacje",
        "wielkie firmy technologiczne",
        "maszyny",
      ],
      "artificial-intelligence": [
        "sztuczna inteligencja",
        "uczenie maszynowe",
        "algorytmy",
        "chatboty",
        "modele językowe",
      ],
      automation: [
        "automatyzacja",
        "roboty",
        "robotyka",
        "dekwalifikacja",
        "zastępowanie pracowników maszynami",
      ],
      cash: [
        "gotówka",
        "banknoty",
        "monety",
        "społeczeństwo bezgotówkowe",
        "oddziały bankowe",
      ],
      "right-to-repair": [
        "prawo do naprawy",
        "naprawialność",
        "planowane postarzanie produktów",
        "części zamienne",
        "jednorazowość",
      ],
      surveillance: [
        "inwigilacja",
        "nadzór",
        "prywatność",
        "monitoring",
        "retencja danych",
        "śledzenie",
      ],
      "facial-recognition": [
        "rozpoznawanie twarzy",
        "biometria",
        "identyfikacja biometryczna",
        "skanowanie twarzy",
      ],
      "social-media": [
        "media społecznościowe",
        "smartfony",
        "czas przed ekranem",
        "weryfikacja wieku",
        "dzieci w sieci",
        "przechwytywanie uwagi",
      ],
      "digital-identity": [
        "tożsamość cyfrowa",
        "cyfrowy dowód",
        "identyfikacja elektroniczna",
        "dowód osobisty",
        "kredyt społeczny",
      ],
      "central-bank-digital-currency": [
        "cyfrowa waluta banku centralnego",
        "cyfrowe euro",
        "CBDC",
        "pieniądz programowalny",
      ],
      cryptocurrency: [
        "kryptowaluta",
        "krypto",
        "bitcoin",
        "blockchain",
        "aktywa cyfrowe",
      ],
      "genetic-engineering": [
        "inżynieria genetyczna",
        "edycja genów",
        "CRISPR",
        "dzieci na zamówienie",
        "linia zarodkowa",
        "embriony",
        "eugenika",
      ],
      transhumanism: [
        "transhumanizm",
        "ulepszanie człowieka",
        "cybernetyka",
        "interfejs mózg-komputer",
        "implanty",
      ],
      education: [
        "edukacja",
        "oświata",
        "szkoła",
        "szkoły",
        "program nauczania",
        "nauczanie",
        "uczniowie",
      ],
      homeschooling: ["edukacja domowa", "nauczanie domowe", "szkoła w domu"],
      "school-choice": [
        "wybór szkoły",
        "bony oświatowe",
        "szkoły prywatne",
        "szkoły niepubliczne",
        "szkoły katolickie",
        "szkoły społeczne",
      ],
      universities: [
        "uniwersytety",
        "uczelnie",
        "szkolnictwo wyższe",
        "wolność akademicka",
        "badania naukowe",
      ],
      "religion-in-schools": [
        "lekcje religii",
        "szkoły państwowe",
        "chrześcijaństwo w szkole",
        "modlitwa w szkole",
        "nauczanie świeckie",
      ],
      "sex-education": [
        "edukacja seksualna",
        "wychowanie do życia w rodzinie",
        "prawa rodziców",
        "zgoda",
      ],
      culture: [
        "kultura",
        "tradycja",
        "obyczaje",
        "gwary",
        "folklor",
        "święta",
        "ujednolicenie",
        "globalizacja",
      ],
      architecture: [
        "architektura",
        "budynki",
        "planowanie przestrzenne",
        "dziedzictwo",
        "ochrona zabytków",
        "konserwacja",
      ],
      "free-speech": [
        "wolność słowa",
        "wolność wypowiedzi",
        "cenzura",
        "mowa nienawiści",
        "przepisy o wypowiedzi",
        "wolność prasy",
        "nawoływanie",
      ],
      prisons: [
        "więzienia",
        "więzienie",
        "kara pozbawienia wolności",
        "wymiar kary",
        "kara",
        "resocjalizacja",
        "wymiar sprawiedliwości",
      ],
      "death-penalty": [
        "kara śmierci",
        "najwyższy wymiar kary",
        "egzekucja",
        "zniesienie kary śmierci",
      ],
      firearms: [
        "broń palna",
        "broń",
        "dostęp do broni",
        "obrona konieczna",
        "samoobrona",
        "myślistwo",
      ],
      healthcare: [
        "opieka zdrowotna",
        "ochrona zdrowia",
        "szpitale",
        "lekarze",
        "medycyna",
        "ubezpieczenie zdrowotne",
      ],
      "medical-ethics": [
        "etyka medyczna",
        "bioetyka",
        "sumienie",
        "klauzula sumienia",
        "szpitale katolickie",
      ],
      environment: [
        "środowisko",
        "przyroda",
        "ekologia",
        "ochrona przyrody",
        "różnorodność biologiczna",
        "zanieczyszczenie",
        "grunty rolne",
        "troska o stworzenie",
      ],
      energy: [
        "energia",
        "prąd",
        "energia elektryczna",
        "sieć energetyczna",
        "ceny energii",
        "bezpieczeństwo energetyczne",
        "przerwy w dostawie prądu",
      ],
      "nuclear-power": [
        "energetyka jądrowa",
        "energia jądrowa",
        "elektrownie jądrowe",
        "reaktory",
        "odpady promieniotwórcze",
      ],
      "fossil-fuels": [
        "paliwa kopalne",
        "węgiel",
        "ropa naftowa",
        "gaz ziemny",
        "benzyna",
        "olej napędowy",
        "węglowodory",
      ],
      renewables: [
        "odnawialne źródła energii",
        "energia słoneczna",
        "fotowoltaika",
        "energia wiatrowa",
        "turbiny wiatrowe",
        "hydroenergetyka",
        "geotermia",
      ],
      climate: [
        "zmiana klimatu",
        "globalne ocieplenie",
        "dwutlenek węgla",
        "emisje",
        "neutralność klimatyczna",
        "gazy cieplarniane",
        "dekarbonizacja",
      ],
      defence: ["obrona", "wojsko", "armia", "siły zbrojne", "zbrojenia"],
      nato: [
        "NATO",
        "Sojusz Północnoatlantycki",
        "artykuł 5",
        "obrona zbiorowa",
        "sojusze wojskowe",
      ],
      russia: ["Rosja", "Federacja Rosyjska", "Moskwa", "Kreml"],
      ukraine: ["Ukraina", "Kijów", "wojna na Ukrainie", "negocjacje pokojowe"],
      "united-states": ["Stany Zjednoczone", "USA", "Ameryka", "Waszyngton", "atlantyzm"],
      china: ["Chiny", "Chińska Republika Ludowa", "Pekin", "łańcuchy dostaw"],
      "israel-and-palestine": ["Izrael", "Palestyna", "Gaza", "Bliski Wschód"],
      "foreign-aid": [
        "pomoc rozwojowa",
        "pomoc humanitarna",
        "pomoc zagraniczna",
        "współpraca rozwojowa",
      ],
      sanctions: [
        "sankcje",
        "embargo",
        "zamrożenie aktywów",
        "przymus gospodarczy",
        "ograniczenia handlowe",
      ],
      conscription: [
        "pobór",
        "służba wojskowa",
        "zasadnicza służba wojskowa",
        "służba narodowa",
        "rezerwa",
        "odmowa służby wojskowej",
      ],
      "nuclear-weapons": [
        "broń jądrowa",
        "broń atomowa",
        "odstraszanie nuklearne",
        "rozbrojenie",
        "nieproliferacja",
        "kontrola zbrojeń",
      ],
    },
  },

  entries: {
    "catholic-confessional-state": {
      title: "Katolickie państwo wyznaniowe",
      shortAnswer:
        "Restore Europa popiera formalne konstytucyjne uznanie katolicyzmu za główną religię publiczną i odrzuca twierdzenie, że państwo może być neutralne moralnie lub religijnie.",
      position: [
        "Restore Europa popiera głęboko zakorzeniony katolicki ład polityczny o charakterze wyznaniowym. Państwo powinno formalnie uznać katolicyzm za główną religię publiczną i nie powinno rościć sobie neutralności moralnej ani religijnej.",
      ],
      policies: [
        "Katolicyzm powinien uzyskać formalne uznanie konstytucyjne.",
        "Katolicka nauka moralna może kształtować prawo publiczne i instytucje publiczne.",
        "Kościół i państwo doczesne pozostają instytucjonalnie odrębne, ale państwo nie jest metafizycznie najwyższe.",
        "Katolickie święta, kościoły, symbole, procesje, szkoły i tradycje publiczne powinny być chronione.",
        "Państwo powinno współpracować z Kościołem w sprawach rodziny, edukacji, moralności i w sprawach społecznych.",
      ],
      principle:
        "Państwo rządzi sprawami doczesnymi, Kościół sprawami duchowymi; władza doczesna pozostaje podległa wyższemu ładowi moralnemu.",
      limits: [
        "Restore Europa nie popiera przymusowego nawracania.",
        "Ten model nie oznacza bezpośrednich rządów duchowieństwa w zwyczajnej administracji państwowej.",
      ],
      keywords: [
        "państwo katolickie",
        "państwo wyznaniowe",
        "integralizm",
        "kościół i państwo",
        "religia państwowa",
      ],
    },

    abortion: {
      title: "Aborcja",
      shortAnswer:
        "Restore Europa stoi na stanowisku, że życie ludzkie musi być chronione od poczęcia, a bezpośrednia aborcja na życzenie powinna być zakazana.",
      position: [
        "Restore Europa idzie za nauką katolicką, według której życie ludzkie musi być szanowane i chronione od poczęcia. Bezpośrednia aborcja na życzenie powinna być zakazana.",
      ],
      policies: [
        "Prawna ochrona nienarodzonego życia ludzkiego od poczęcia.",
        "Zakaz bezpośredniej aborcji na życzenie.",
        "Wsparcie materialne, medyczne i społeczne dla kobiet w ciąży i dla rodzin.",
        "Wsparcie dla adopcji i praktycznych rozwiązań alternatywnych wobec aborcji.",
        "Leczenie podjęte w celu ratowania matki może pozostać dopuszczalne tam, gdzie śmierć nienarodzonego dziecka jest niezamierzonym skutkiem ubocznym, a nie zamierzonym środkiem ani celem.",
      ],
      principle:
        "Godność człowieka i prawo do życia nie zaczynają się dopiero wtedy, gdy państwo postanowi je uznać.",
      keywords: [
        "aborcja",
        "dziecko nienarodzone",
        "poczęcie",
        "obrona życia",
        "przerywanie ciąży",
      ],
    },

    "euthanasia-and-assisted-suicide": {
      title: "Eutanazja i samobójstwo wspomagane",
      shortAnswer:
        "Restore Europa sprzeciwia się bezpośredniej eutanazji i samobójstwu wspomaganemu, popiera opiekę paliatywną i dopuszcza odmowę leczenia nadzwyczajnego lub nieproporcjonalnego.",
      position: [
        "Restore Europa sprzeciwia się bezpośredniej eutanazji i samobójstwu wspomaganemu oraz popiera opiekę paliatywną, dopuszczając przy tym odmowę leczenia nadzwyczajnego lub nieproporcjonalnego.",
      ],
      policies: [
        "Bezpośrednia eutanazja zakazana.",
        "Samobójstwo wspomagane zakazane.",
        "Mocno rozwinięta opieka hospicyjna i paliatywna.",
        "Pacjenci mogą odmówić leczenia nadzwyczajnego, nadmiernie uciążliwego lub nieproporcjonalnego.",
        "Łagodzenie bólu pozostaje uprawnione tam, gdzie śmierć nie jest zamierzona.",
      ],
      keywords: [
        "eutanazja",
        "samobójstwo wspomagane",
        "wspomagane umieranie",
        "opieka paliatywna",
        "hospicjum",
      ],
    },

    "marriage-and-sexual-ethics": {
      title: "Małżeństwo i etyka seksualna",
      shortAnswer:
        "Restore Europa uznaje małżeństwo cywilne za związek jednego mężczyzny i jednej kobiety, a prawo rodzinne opiera na rodzinie naturalnej.",
      position: [
        "Restore Europa uznaje małżeństwo cywilne wyłącznie za związek jednego mężczyzny i jednej kobiety oraz idzie za katolicką nauką moralną w sprawach płciowości.",
      ],
      policies: [
        "Małżeństwo osób tej samej płci nie jest prawnie uznawane za małżeństwo.",
        "Prawo rodzinne opiera się na rodzinie naturalnej: matce, ojcu i dzieciach.",
        "Instytucje religijne nie mogą być przymuszane do uznawania związków osób tej samej płci ani do udzielania im ślubów.",
        "Polityka adopcyjna powinna dawać pierwszeństwo więzi dziecka z matką i ojcem.",
      ],
      keywords: [
        "małżeństwo",
        "małżeństwa osób tej samej płci",
        "prawo rodzinne",
        "adopcja",
        "małżeństwo cywilne",
      ],
    },

    contraception: {
      title: "Antykoncepcja",
      shortAnswer:
        "Restore Europa sprzeciwia się antykoncepcji sztucznej i odrzuca kulturę publiczną, która trwałe unikanie płodności traktuje jako normalną podstawę życia płciowego, nie kryminalizując przy tym prywatnego posiadania środków antykoncepcyjnych przez osoby dorosłe.",
      position: [
        "Restore Europa idzie za nauką katolicką, sprzeciwiając się antykoncepcji sztucznej, i odrzuca kulturę publiczną, która trwałe unikanie płodności traktuje jako normalną podstawę życia płciowego.",
      ],
      policies: [
        "Żadnej promocji antykoncepcji sztucznej przez państwo.",
        "Żadnego zwyczajnego dofinansowania antykoncepcji z pieniędzy podatnika, poza przypadkami, gdy lek jest rzeczywiście przepisany w odrębnym celu medycznym.",
        "Ograniczenia reklamy antykoncepcji skierowanej do nieletnich.",
        "Szkoły nie powinny przedstawiać antykoncepcji jako moralnie neutralnego, domyślnego rozwiązania kwestii zachowań płciowych.",
        "Rozpoznawanie naturalnej płodności i naturalne planowanie rodziny traktuje się inaczej niż antykoncepcję sztuczną.",
      ],
      limits: [
        "To stanowisko nie wprowadza karnego zakazu prywatnego posiadania środków antykoncepcyjnych przez osoby dorosłe.",
      ],
      keywords: [
        "antykoncepcja",
        "środki antykoncepcyjne",
        "NPR",
        "naturalne planowanie rodziny",
        "płodność",
      ],
    },

    pornography: {
      title: "Pornografia",
      shortAnswer: "Restore Europa popiera całkowity prawny zakaz pornografii.",
      position: ["Restore Europa popiera całkowity prawny zakaz pornografii."],
      policies: [
        "Produkcja, finansowanie, komercyjna dystrybucja, sprzedaż i publiczne wystawianie zakazane.",
        "Udostępnianie w internecie i świadome komercyjne dostarczanie zakazane.",
        "Umyślne posiadanie lub nabywanie materiałów pornograficznych zakazane.",
        "Najsurowsze kary dotyczą producentów komercyjnych, dystrybutorów, wyzyskujących platform oraz materiałów, w których występuje przymus, handel ludźmi lub osoby nieletnie.",
        "Definicja prawna powinna wyłączać rzetelną medycynę, anatomię, naukę, sztukę klasyczną i literaturę niepornograficzną.",
      ],
      principle:
        "Płciowość i ciało człowieka nie powinny być sprowadzane do towaru służącego podnieceniu i konsumpcji.",
      keywords: [
        "pornografia",
        "porno",
        "treści dla dorosłych",
        "treści erotyczne",
        "nieprzyzwoitość",
      ],
    },

    prostitution: {
      title: "Prostytucja",
      shortAnswer:
        "Restore Europa popiera całkowity prawny zakaz prostytucji i jej komercyjnego organizowania, wraz ze wsparciem dla tych, którzy z niej wychodzą.",
      position: [
        "Restore Europa popiera całkowity prawny zakaz prostytucji i jej komercyjnego organizowania.",
      ],
      policies: [
        "Kupowanie usług seksualnych zakazane.",
        "Sprzedawanie usług seksualnych zakazane.",
        "Domy publiczne, stręczycielstwo i komercyjne organizowanie zakazane.",
        "Reklamowanie prostytucji zakazane.",
        "Handel ludźmi w celach seksualnych i wyzysk z użyciem przymusu karane szczególnie surowo.",
        "Programy wyjścia, mieszkania, leczenie uzależnień i pomoc w zdobyciu zawodu dostępne dla osób odchodzących od prostytucji.",
      ],
      keywords: [
        "prostytucja",
        "domy publiczne",
        "praca seksualna",
        "stręczycielstwo",
        "handel ludźmi",
      ],
    },

    "recreational-drugs": {
      title: "Narkotyki rekreacyjne",
      shortAnswer:
        "Restore Europa popiera utrzymanie nielegalności narkotyków rekreacyjnych, w tym rekreacyjnych konopi, z surowszymi karami dla handlarzy niż dla osób uzależnionych.",
      position: [
        "Restore Europa z reguły popiera utrzymanie nielegalności narkotyków rekreacyjnych, w tym rekreacyjnych konopi.",
      ],
      policies: [
        "Produkcja komercyjna i handel zakazane.",
        "Sprzedaż w celach rekreacyjnych zakazana.",
        "Posiadanie pozostaje bezprawne, a kary są proporcjonalne do czynu.",
        "Dilerzy i zorganizowani handlarze odpowiadają surowiej niż osoby uzależnione.",
        "Leczenie, odtrucie i rehabilitacja dostępne w razie uzależnienia.",
        "Rzeczywiste zastosowanie medyczne traktuje się odrębnie od użycia rekreacyjnego.",
      ],
      keywords: ["narkotyki", "konopie", "marihuana", "środki odurzające", "dekryminalizacja"],
    },

    alcohol: {
      title: "Alkohol",
      shortAnswer:
        "Alkohol pozostaje dla dorosłych legalny przy umiarkowanym spożyciu. Restore Europa sprzeciwia się pijaństwu, nadużywaniu i zachowaniom szkodzącym innym.",
      position: [
        "Alkohol pozostaje dla dorosłych legalny, gdy jest spożywany umiarkowanie. Restore Europa sprzeciwia się pijaństwu, nadużywaniu i zachowaniom szkodzącym innym.",
      ],
      policies: [
        "Sprzedaż osobom nieletnim zakazana.",
        "Jazda po alkoholu i zakłócanie porządku publicznego pod jego wpływem karane.",
        "Reklama skierowana do nieletnich ograniczona.",
        "Leczenie alkoholizmu wspierane.",
        "Tradycyjne umiarkowane spożycie pozostaje legalne.",
      ],
      keywords: ["alkohol", "piwo", "wino", "pijaństwo", "wstrzemięźliwość"],
    },

    gambling: {
      title: "Hazard",
      shortAnswer:
        "Hazard może pozostać legalny w ograniczonych formach dla dorosłych, surowo regulowany przeciw uzależnieniu, oszustwu i wyzyskowi.",
      position: [
        "Hazard może pozostać legalny w ograniczonych formach dla dorosłych, ale powinien być surowo regulowany przeciw uzależnieniu, oszustwu i wyzyskowi.",
      ],
      policies: [
        "Hazard osób nieletnich zakazany.",
        "Reklama skierowana do osób młodych lub szczególnie narażonych ograniczona.",
        "Drapieżne lub celowo manipulacyjne mechanizmy hazardowe ograniczone albo zakazane.",
        "Hazard internetowy wysokiego ryzyka poddany surowej regulacji.",
        "Wymagane systemy samowykluczenia i leczenia uzależnienia.",
        "Oszustwa, nielegalne przyjmowanie zakładów i ustawianie wyników karane surowo.",
      ],
      keywords: ["hazard", "zakłady bukmacherskie", "kasyno", "zakłady sportowe", "loot boxy"],
    },

    "blasphemy-and-sacrilege": {
      title: "Bluźnierstwo i świętokradztwo",
      shortAnswer:
        "Niewiara, krytyka i spór teologiczny pozostają legalne. Umyślne bezczeszczenie tego, co święte, może być zakazane.",
      position: [
        "Restore Europa odróżnia niewiarę i krytykę od umyślnej publicznej profanacji. Ateizm i niezgoda teologiczna same w sobie nie są przestępstwami, natomiast umyślne bezczeszczenie tego, co święte, może być zakazane.",
      ],
      policies: [
        "Ateizm i prywatna niewiara pozostają legalne.",
        "Krytyka przełożonych Kościoła i debata teologiczna pozostają legalne.",
        "Umyślne bezczeszczenie przedmiotów poświęconych, kościołów lub świętych obrzędów chrześcijańskich może być uznane za przestępstwo.",
        "Wandalizm antychrześcijański pozostaje karalny na podstawie zwyczajnego prawa karnego i może obejmować świętokradztwo jako okoliczność obciążającą.",
      ],
      principle:
        "Chronić to, co święte, nie czyniąc przestępstwem wątpienia, sprzeciwu ani dociekania intelektualnego.",
      keywords: ["bluźnierstwo", "świętokradztwo", "ateizm", "profanacja", "wandalizm"],
    },

    family: {
      title: "Rodzina",
      shortAnswer:
        "Rodzina zbudowana wokół małżeństwa jest podstawową instytucją społeczną, a polityka publiczna powinna sprawić, by małżeństwo i wychowywanie dzieci były materialnie realne.",
      position: [
        "Rodzina zbudowana wokół małżeństwa mężczyzny i kobiety, wychowywania dzieci, zobowiązania międzypokoleniowego oraz opieki nad młodymi i starymi jest podstawową instytucją społeczną.",
      ],
      policies: [
        "Podatki uwzględniające rodzinę.",
        "Wsparcie dla rodziców.",
        "Dostępne cenowo mieszkania dla rodzin.",
        "Stabilne zatrudnienie i dość czasu poza produkcją gospodarczą.",
        "Polityka publiczna powinna sprawić, by małżeństwo i wychowywanie dzieci były materialnie realne.",
      ],
      keywords: ["rodzina", "dzieci", "małżeństwo", "rodzice", "gospodarstwo domowe"],
    },

    "demographic-renewal": {
      title: "Odnowa demograficzna",
      shortAnswer:
        "Europa powinna odpowiedzieć na spadek demograficzny tym, że zakładanie rodziny stanie się możliwe dla jej własnej ludności, a nie stałą masową imigracją.",
      position: [
        "Europa powinna zaradzić spadkowi demograficznemu przede wszystkim tym, że zakładanie rodziny i wychowywanie dzieci stanie się możliwe dla jej własnej ludności, a nie używać stałej masowej imigracji jako zastępnika urodzeń.",
      ],
      keywords: ["demografia", "dzietność", "płodność", "ludność", "spadek liczby urodzeń"],
    },

    "sunday-rest-and-trading": {
      title: "Odpoczynek niedzielny i handel w niedzielę",
      shortAnswer:
        "Niedzielę należy przywrócić jako wspólny dzień kultu, rodziny i odpoczynku, przy znacznym ograniczeniu zwyczajnej działalności handlowej.",
      position: [
        "Niedzielę należy przywrócić jako zwyczajny wspólny dzień kultu, rodziny i odpoczynku. Zwyczajna działalność handlowa powinna być zatem znacznie ograniczona.",
      ],
      policies: [
        "Zwyczajne sklepy w niedziele z zasady zamknięte.",
        "Właściciel małego sklepu może sam zdecydować, że otworzy i będzie pracował, ale od zwyczajnych pracowników nie powinno się rutynowo wymagać pracy.",
        "Szpitale, służby ratownicze, infrastruktura krytyczna, konieczny transport publiczny i apteki mogą działać.",
        "Gastronomia i hotelarstwo mogą działać na odrębnych zasadach, bo niedzielny popyt należy do samej ich funkcji.",
        "Wyjątki powinny pozostać dość wąskie, by niedziela nie stała się zwyczajnym dniem handlowym.",
      ],
      principle:
        "Wspólny dzień odpoczynku chroni kult, życie rodzinne i wspólnotę przed całkowitym skolonizowaniem przez gospodarkę.",
      keywords: ["handel w niedzielę", "sklepy", "szabat", "dzień odpoczynku", "godziny otwarcia"],
    },

    "welfare-and-social-assistance": {
      title: "Świadczenia socjalne i pomoc społeczna",
      shortAnswer:
        "Sieć zabezpieczenia skierowana przede wszystkim do obywateli, rodzin i osób rzeczywiście niezdolnych do utrzymania się, wyrażająca solidarność i nie stająca się trwałą zależnością, której można było uniknąć.",
      position: [
        "Restore Europa popiera socjalną sieć zabezpieczenia skierowaną przede wszystkim do obywateli, rodzin i osób rzeczywiście niezdolnych do utrzymania się. Świadczenia socjalne powinny wyrażać solidarność, nie stając się trwałym systemem zależności, której można było uniknąć.",
      ],
      policies: [
        "Pierwszeństwo dla obywateli i ich rodzin, dzieci, opiekunów, osób z niepełnosprawnościami, osób starszych i gospodarstw domowych w rzeczywistej biedzie.",
        "Od zdolnych do pracy świadczeniobiorców w wieku produkcyjnym oczekuje się z reguły poszukiwania pracy, szkolenia albo rehabilitacji.",
        "Od osób niebędących obywatelami oczekuje się z reguły pracy i samodzielnego utrzymania, a nie migracji po długoterminowe świadczenia.",
        "Świadczenia oparte na składkach mogą pozostać dostępne dla legalnie pracujących obcokrajowców, którzy rzeczywiście wpłacali do danego systemu.",
        "Oszustwo przy świadczeniach pociąga za sobą zwrot i proporcjonalne kary.",
        "Katolickie, chrześcijańskie i historyczne instytucje dobroczynne mogą odgrywać dużą rolę, przy przejrzystej kontroli środków publicznych.",
      ],
      principle:
        "Rodzina, parafia i instytucje lokalne powinny działać przed odległą biurokracją centralną tam, gdzie są w stanie zrobić to kompetentnie.",
      keywords: [
        "opieka socjalna",
        "świadczenia",
        "pomoc społeczna",
        "zabezpieczenie socjalne",
        "zależność od zasiłków",
      ],
    },

    "nation-and-historical-continuity": {
      title: "Naród i ciągłość historyczna",
      shortAnswer:
        "Naród jest międzypokoleniową wspólnotą historyczną, a ludy Europy mają uzasadniony interes w zachowaniu ciągłości kulturowej i historycznej.",
      position: [
        "Naród jest międzypokoleniową wspólnotą historyczną, ukształtowaną przez pamięć, język, obyczaj, instytucje, terytorium i poczucie wspólnego losu. Ludy Europy mają uzasadniony interes w zachowaniu ciągłości kulturowej i historycznej.",
      ],
      keywords: ["naród", "lud", "ojczyzna", "ciągłość", "tożsamość"],
    },

    immigration: {
      title: "Imigracja",
      shortAnswer:
        "Imigracja powinna być ograniczona do poziomu zgodnego z rzeczywistą integracją, stabilnością społeczną, przepustowością infrastruktury i ciągłością demograficzną.",
      position: [
        "Imigracja powinna być ograniczona do poziomu zgodnego z rzeczywistą integracją, stabilnością społeczną, przepustowością infrastruktury oraz ciągłością demograficzną i kulturową narodu przyjmującego.",
      ],
      policies: [
        "Granice pozostają uprawnionymi instytucjami politycznymi.",
        "Polityka imigracyjna musi służyć długofalowemu dobru wspólnemu narodu przyjmującego.",
        "Zobowiązania humanitarne nie wymagają oddania kontroli nad polityką demograficzną.",
      ],
      keywords: ["imigracja", "migracja", "granice", "integracja", "azyl"],
    },

    "asylum-and-international-protection": {
      title: "Azyl i ochrona międzynarodowa",
      shortAnswer:
        "Azyl jest ochroną przed rzeczywistym prześladowaniem lub poważnym niebezpieczeństwem, a nie ogólnym mechanizmem wyboru preferowanego kraju osiedlenia.",
      position: [
        "Ochrona powinna być z reguły udzielana w pierwszym rzeczywiście bezpiecznym dostępnym kraju i, gdy to wykonalne, możliwie blisko regionu pochodzenia osoby wysiedlonej. Państwa Europy zachowują prawo do odrzucania wniosków bezzasadnych i do usuwania osób, które nie mają prawnej podstawy pobytu.",
      ],
      policies: [
        "Utrzymanie dostępu do azylu dla osób wiarygodnie powołujących się na prześladowanie lub poważną krzywdę.",
        "Wymóg niezwłocznej rejestracji, sprawdzenia tożsamości i weryfikacji bezpieczeństwa.",
        "Stosowanie procedur przyspieszonych wobec wnioskodawców z krajów ogólnie bezpiecznych, z zachowaniem indywidualnej możliwości wykazania, że domniemanie ich nie dotyczy.",
        "Stosowanie mocnej zasady pierwszego bezpiecznego kraju lub bezpiecznego kraju trzeciego tam, gdzie skuteczna ochrona jest rzeczywiście dostępna.",
        "Odróżnianie uchodźców od zwyczajnych migrantów ekonomicznych; sama trudna sytuacja ekonomiczna nie jest podstawą azylu.",
        "Pierwszeństwo dla pomocy humanitarnej w regionie i dla kontrolowanego przesiedlenia szczególnie narażonych uchodźców tam, gdzie jest to właściwe.",
        "Wnioskodawcy, którym odmówiono ochrony, powinni być niezwłocznie usuwani po wyczerpaniu przysługujących im środków odwoławczych.",
        "Tymczasowa ochrona wojenna powinna pozostać tymczasowa i podlegać przeglądowi, gdy warunki istotnie się zmienią.",
        "Nieletni bez opieki i osoby rzeczywiście bezbronne otrzymują odrębne gwarancje.",
      ],
      keywords: [
        "azyl",
        "uchodźcy",
        "pierwszy bezpieczny kraj",
        "bezpieczny kraj trzeci",
        "zasada non-refoulement",
        "ochrona tymczasowa",
        "powrót do kraju",
      ],
    },

    "asylum-work-and-public-assistance": {
      title: "Azyl, praca i pomoc publiczna",
      shortAnswer:
        "Ochrona powinna ułatwiać samodzielne utrzymanie, a nie trwałą zależność od świadczeń socjalnych.",
      position: [
        "Od osób przyjętych w celu ochrony, które są zdolne do pracy, należy oczekiwać, że staną się samodzielne ekonomicznie tak szybko, jak to rozsądnie możliwe. Wniosek w toku nie powinien automatycznie otwierać dostępu do całego zwyczajnego systemu świadczeń socjalnych.",
      ],
      policies: [
        "Dopuszczenie legalnej pracy tak wcześnie, jak to administracyjnie wykonalne.",
        "Oczekiwanie, że dorośli zdolni do pracy będą jej szukać, gdy zatrudnienie stanie się prawnie dostępne.",
        "W czasie rozpatrywania wniosku skupienie pomocy na koniecznym zakwaterowaniu, wyżywieniu, niezbędnej opiece zdrowotnej i podstawowych potrzebach, a nie na nieograniczonym wsparciu pieniężnym.",
        "Dopuszczenie proporcjonalnych wymogów pracy, języka i współdziałania tam, gdzie jest to zgodne z prawem.",
        "Niewprowadzanie uprzywilejowanego dostępu do ograniczonych świadczeń publicznych przed obywatelami w porównywalnej potrzebie.",
        "Zakończenie wsparcia nastawionego na integrację po ostatecznej odmowie i przekazanie osoby do systemu powrotów.",
        "Zachowanie pomocy w sytuacjach nagłych oraz odpowiedniego wsparcia dla dzieci i osób rzeczywiście niezdolnych do utrzymania się.",
      ],
      keywords: [
        "azyl",
        "świadczenia socjalne",
        "obowiązek pracy",
        "samodzielne utrzymanie",
        "uchodźcy",
        "pomoc publiczna",
        "ochrona tymczasowa",
      ],
    },

    "deportation-of-criminal-offenders": {
      title: "Deportacja z powodu przestępstwa i zakazy ponownego wjazdu",
      shortAnswer:
        "Cudzoziemcy skazani za poważne przestępstwa są usuwani z kraju po zakończeniu postępowania karnego i trwale wykluczani; zwyczajne naruszenia przepisów o pobycie pociągają zwykle dziesięcioletni zakaz ponownego wjazdu.",
      position: [
        "Obywatelstwo i pobyt cudzoziemca to odrębne statusy. Poważna umyślna przestępczość osoby niebędącej obywatelem może uzasadniać zakończenie pobytu po skazaniu w rzetelnym postępowaniu karnym.",
        "Pobyt cudzoziemca nie daje tego samego trwałego prawa pozostania co obywatelstwo. Osoba niebędąca obywatelem, skazana za kwalifikujące się ciężkie przestępstwo, powinna z reguły utracić pobyt i zostać usunięta z kraju po zakończeniu właściwego postępowania karnego.",
      ],
      policies: [
        "Wymóg zgodnego z prawem skazania za czyn, na który się powołano, przed deportacją z powodu przestępstwa.",
        "Poważne przestępstwa z użyciem przemocy, poważne przestępstwa seksualne, rozbój, przestępczość zorganizowana, terroryzm, handel ludźmi, poważny obrót narkotykami, poważne oszustwo i porównywalne przestępstwa umyślne z domniemania prowadzą do usunięcia z kraju.",
        "Powtarzalność przestępstw może uzasadniać usunięcie z kraju także tam, gdzie poszczególne czyny są mniej poważne.",
        "Zabójstwo umyślne, zgwałcenie, poważne wykorzystywanie seksualne dzieci, terroryzm, poważny handel ludźmi, poważna zorganizowana przemoc i porównywalne ciężkie przestępstwa z domniemania należą do spraw objętych stałym zakazem.",
        "Stały zakaz ponownego wjazdu stosuje się do kwalifikujących się usunięć z powodu poważnych przestępstw oraz z powodu ciężkich zagrożeń dla bezpieczeństwa narodowego.",
        "Do poważnych zwyczajnych naruszeń przepisów o pobycie, takich jak umyślny nielegalny wjazd, powtarzający się nielegalny pobyt lub umyślne uchylanie się od decyzji o powrocie, stosuje się domyślnie dziesięcioletni zakaz ponownego wjazdu, z zastrzeżeniem zasad proporcjonalności określonych w ustawie wykonawczej.",
        "Przy naprawdę drobnych lub czysto technicznych naruszeniach przepisów o pobycie dopuszcza się łagodniejsze sankcje, gdy dziesięcioletni zakaz byłby nieproporcjonalny.",
        "Usunięcie z kraju następuje po odbyciu kary pozbawienia wolności, chyba że dostępne jest zgodne z prawem przekazanie albo wcześniejsze usunięcie.",
        "Drobne czyny administracyjne lub bagatelne nie prowadzą automatycznie do stałego wydalenia.",
        "Obywatele naturalizowani pozostają objęci odrębnymi ramami odebrania obywatelstwa, dopóki obywatelstwo nie zostanie najpierw zgodnie z prawem cofnięte.",
        "Obywatele nie mogą być deportowani z własnego kraju.",
      ],
      keywords: [
        "deportacja",
        "deportacja z powodu przestępstwa",
        "sprawcy przestępstw",
        "wydalenie",
        "zakaz ponownego wjazdu",
        "dziesięć lat",
        "stały zakaz",
        "zabójstwo",
        "zgwałcenie",
        "terroryzm",
        "nielegalny pobyt",
        "zezwolenie na pobyt",
        "porządek publiczny",
        "usunięcie z kraju",
      ],
    },

    "citizenship-general-principle": {
      title: "Obywatelstwo: zasada ogólna",
      shortAnswer:
        "Obywatelstwo jest przynależnością do historycznej wspólnoty politycznej, a nie pochodną zamieszkania, i Restore Europa odrzuca — jako zasadę ogólną — automatyczne obywatelstwo z tytułu urodzenia na terytorium kraju.",
      position: [
        "Obywatelstwo jest przynależnością do historycznej wspólnoty politycznej, a nie samym zamieszkaniem. Restore Europa odrzuca, jako zasadę ogólną, automatyczne obywatelstwo z tytułu urodzenia na terytorium kraju.",
      ],
      policies: [
        "Obywatelstwo przechodzi z reguły przez pochodzenie od obywateli.",
        "Urodzenie na terytorium kraju z rodziców niebędących obywatelami samo w sobie nie nadaje obywatelstwa.",
        "Naturalizacja wymaga głębokiej asymilacji językowej, kulturowej, obywatelskiej i patriotycznej.",
        "Naturalizacja jest przyjęciem do narodowej wspólnoty politycznej, a nie automatycznym uprawnieniem wynikającym z zamieszkania.",
      ],
      keywords: [
        "obywatelstwo",
        "obywatelstwo z urodzenia",
        "ius soli",
        "ius sanguinis",
        "przynależność państwowa",
      ],
    },

    naturalization: {
      title: "Asymilacja i naturalizacja",
      shortAnswer:
        "Obywatelstwo wymaga znacznie wyższego miernika niż zwyczajne zamieszkanie czy integracja: udanej asymilacji we wspólnocie politycznej narodu.",
      position: [
        "Zwyczajna droga naturalizacji według Restore Europa wymaga około piętnastu lat legalnego zamieszkania przed złożeniem wniosku, a wraz z tym spełnienia wyjątkowo wymagających warunków asymilacji.",
        "Naturalizacja nie jest automatycznym następstwem czasu spędzonego w kraju. Wnioskodawcy muszą spełnić wymagające warunki językowe, obywatelskie, dotyczące postępowania oraz więzi z krajem, zanim obywatelstwo zostanie nadane.",
      ],
      policies: [
        "Utrzymanie przewidzianej w katalogu zwyczajnej drogi około piętnastu lat zamieszkania przed możliwością ubiegania się o zwyczajną naturalizację.",
        "Wymóg zaawansowanego praktycznego opanowania języka narodowego oraz rzetelnej znajomości historii, instytucji i porządku konstytucyjnego.",
        "Poszanowanie porządku konstytucyjnego oraz chrześcijańskiego i historycznego charakteru kraju.",
        "Wymóg trwałego postępowania zgodnego z prawem i prawdomówności wobec organów do spraw cudzoziemców i obywatelstwa.",
        "Wymóg wykazania trwałej więzi z krajem, a nie samego zamieszkania.",
        "Dopuszczalność obiektywnych egzaminów z języka i wiedzy obywatelskiej.",
        "Odmowa naturalizacji tam, gdzie poważna przestępczość, terroryzm, poważne oszustwo lub umyślne wprowadzenie w błąd co do tożsamości nadal stoją temu na przeszkodzie.",
        "Okresowe powtórne egzaminy obywatelskie nie mogą stanowić automatycznej podstawy wydalenia osoby, która nabyła obywatelstwo zgodnie z prawem i uczciwie; odebranie obywatelstwa po naturalizacji regulują odrębne wpisy.",
      ],
      limits: ["Piętnaście lat zamieszkania nie gwarantuje automatycznie naturalizacji."],
      keywords: [
        "naturalizacja",
        "asymilacja",
        "zamieszkanie",
        "język",
        "wymóg językowy",
        "wiedza obywatelska",
        "egzamin na obywatelstwo",
        "więź z krajem",
      ],
    },

    "citizenship-by-descent": {
      title: "Obywatelstwo z pochodzenia i jego przywrócenie",
      shortAnswer:
        "Udokumentowane pochodzenie narodowe może uzasadniać znacznie szybszą drogę przywrócenia obywatelstwa niż zwyczajna naturalizacja.",
      position: [
        "Udokumentowane pochodzenie narodowe może uzasadniać znacznie szybszą drogę przywrócenia obywatelstwa niż zwyczajna naturalizacja.",
      ],
      policies: [
        "Dziecko obywatela z reguły dziedziczy obywatelstwo tego rodzica bez względu na miejsce urodzenia.",
        "Osoba o udokumentowanym narodowym pochodzeniu od rodziców albo o bliskim pochodzeniu narodowym może otrzymać uproszczoną drogę powrotu lub przywrócenia obywatelstwa.",
        "Roboczą propozycją dla takiej uproszczonej drogi jest około pięciu lat, a nie zwyczajnych piętnastu.",
      ],
      keywords: [
        "pochodzenie",
        "przodkowie",
        "przywrócenie obywatelstwa",
        "repatriacja",
        "ius sanguinis",
      ],
    },

    "voting-rights-after-naturalization": {
      title: "Prawo głosu po naturalizacji",
      shortAnswer:
        "Obywatele naturalizowani powinni odczekać po naturalizacji jeszcze cztery lata, zanim otrzymają pełne prawo głosu.",
      position: [
        "Obywatele naturalizowani nie powinni otrzymywać prawa głosu natychmiast po naturalizacji. Pełne prawo głosu powinny z reguły poprzedzać dalsze cztery lata posiadania obywatelstwa.",
      ],
      policies: [
        "Droga zwyczajna: piętnaście lat legalnego zamieszkania przed nabyciem możliwości złożenia wniosku o naturalizację.",
        "Po naturalizacji: cztery dodatkowe lata przed pełnym prawem głosu.",
      ],
      keywords: [
        "prawo głosu",
        "prawo wyborcze",
        "czynne prawo wyborcze",
        "wybory",
        "okres oczekiwania",
      ],
    },

    "high-public-office": {
      title: "Zdolność do sprawowania najwyższych urzędów publicznych",
      shortAnswer:
        "Najwyższe urzędy narodu są zastrzeżone dla obywateli związanych z krajem przez urodzenie, pochodzenie i historię, a nie dla osób o samym obywatelstwie nabytym.",
      position: [
        "Zwyczajne obywatelstwo i zdolność do sprawowania najwyższych urzędów konstytucyjnych, urzędów bezpieczeństwa i urzędów wojskowych to odrębne sprawy. Sama naturalizacja nie daje zdolności do sprawowania najwyższych urzędów państwowych.",
      ],
      policies: [
        "Stosowanie zaostrzonych wymogów wobec głowy państwa, szefa rządu, kierownictwa obrony i bezpieczeństwa wewnętrznego, wyższego dowództwa sił zbrojnych, kierownictwa służb wywiadowczych oraz innych urzędów o wyjątkowej władzy konstytucyjnej.",
        "Wymóg obywatelstwa od urodzenia oraz dowodliwego związku z narodem przez przodków lub historię.",
        "Wymóg istotnego zakorzenienia narodowego, opanowania języka narodowego i utrwalonego dorobku lojalności wobec porządku konstytucyjnego i narodowego.",
        "Zwyczajna naturalizacja, bez względu na jej długość, sama w sobie nie daje zdolności do sprawowania tych urzędów.",
        "Precyzyjne określenie w ustawie, które urzędy należą do kategorii zastrzeżonej.",
      ],
      keywords: [
        "najwyższe urzędy publiczne",
        "prezydent",
        "premier",
        "obywatelstwo od urodzenia",
        "pochodzenie",
        "ciągłość narodowa",
        "zdolność do sprawowania urzędu",
        "ministrowie",
        "wierność państwu",
      ],
    },

    "dual-citizenship": {
      title: "Podwójne obywatelstwo",
      shortAnswer:
        "Podwójne obywatelstwo między krajami Europy jest z reguły przyjmowane; od obywateli spoza Europy, którzy naturalizują się w narodzie europejskim, oczekiwano by zrzeczenia się dawnego obywatelstwa.",
      position: [
        "Restore Europa z reguły przyjmuje podwójne obywatelstwo między krajami Europy, ale oczekuje, że obywatele spoza Europy, którzy naturalizują się w narodzie europejskim, zrzekną się swojego dawnego obywatelstwa pozaeuropejskiego.",
      ],
      policies: [
        "Podwójne obywatelstwo europejsko-europejskie z reguły dozwolone.",
        "Od naturalizujących się obywateli spoza Europy z reguły wymagane zrzeczenie się dawnego obywatelstwa.",
        "Wyjątki mogą być rozważane tam, gdzie zrzeczenie się jest prawnie niemożliwe albo powodowałoby wyjątkową dolegliwość.",
      ],
      principle:
        "Odrębne narody Europy są wspólnotami politycznymi wewnątrz szerszej cywilizacji europejskiej.",
      keywords: [
        "podwójne obywatelstwo",
        "dwa obywatelstwa",
        "zrzeczenie się obywatelstwa",
        "drugi paszport",
      ],
    },

    "revocation-of-naturalized-citizenship": {
      title: "Odebranie obywatelstwa nabytego przez naturalizację",
      shortAnswer:
        "Obywatelstwo nabyte przez naturalizację może zostać odebrane w postępowaniu sądowym w wypadkach wyjątkowo poważnych, takich jak naturalizacja uzyskana oszustwem, zdrada stanu lub terroryzm.",
      position: [
        "Obywatelstwo nabyte przez naturalizację może zostać odebrane w okolicznościach wyjątkowo poważnych, takich jak naturalizacja uzyskana oszustwem, zdrada stanu, terroryzm albo inne wąsko określone postępowanie ciężko szkodzące państwu.",
      ],
      policies: [
        "Odebranie musi nastąpić w postępowaniu sądowym.",
        "Podstawy muszą być określone w ustawie, a nie pozostawione nieostremu uznaniu władzy wykonawczej.",
        "Wymagany jest wysoki standard dowodowy i prawo do odwołania.",
        "Oszustwo w postępowaniu naturalizacyjnym jest bezpośrednią podstawą odebrania.",
        "Zdrada stanu i terroryzm mogą uzasadniać odebranie.",
        "Restore Europa opowiada się za możliwością odebrania w wypadkach wyjątkowo ciężkich, także wtedy, gdy skutkiem mogłaby być bezpaństwowość.",
      ],
      keywords: [
        "odebranie obywatelstwa",
        "pozbawienie obywatelstwa",
        "bezpaństwowość",
        "zdrada stanu",
        "terroryzm",
      ],
    },

    "remigration-general-principle": {
      title: "Remigracja: zasada ogólna",
      shortAnswer:
        "Remigracja to zorganizowany powrót osób, którym brakuje zgodnej z prawem podstawy pozostania albo które ją tracą, połączony z polityką powrotu dobrowolnego, ścisłym egzekwowaniem warunków pobytu oraz weryfikacją statusu uzyskanego oszustwem lub w wyniku kwalifikowanej nieprawidłowości.",
      position: [
        "Restore Europa traktuje status migracyjny jako warunkowy: zależy on od zgodnego z prawem wjazdu, od dochowania warunków pobytu, od porządku publicznego oraz — tam, gdzie ma to zastosowanie — od udanej integracji. Remigracja nie jest określona jako usunięcie z kraju na podstawie samej rasy; działa poprzez status prawny, historię pobytu, zachowania przestępcze, oszustwo, względy bezpieczeństwa i jasno określone warunki pobytu.",
      ],
      policies: [
        "Egzekwowanie prawomocnych decyzji o powrocie wobec osób bez zgodnego z prawem prawa pozostania.",
        "Stosowanie powrotu dobrowolnego tam, gdzie jest realny, i powrotu przymusowego tam, gdzie ustała prawna podstawa pobytu.",
        "Weryfikacja pobytu lub obywatelstwa uzyskanych przez istotne oszustwo lub wprowadzenie w błąd.",
        "Dopuszczenie cofnięcia statusu pobytowego cudzoziemca za poważne przestępstwa, ciężkie zagrożenia dla bezpieczeństwa oraz z innych wyraźnie określonych ustawowo podstaw.",
        "Utrzymanie obywatelstwa, pobytu stałego, pobytu czasowego, statusu azylowego i pobytu nielegalnego jako prawnie odrębnych kategorii.",
        "Sam upływ długiego czasu nie tworzy automatycznego prawa pozostania tam, gdzie leżący u podstaw status pozostaje czasowy lub warunkowy.",
        "Stosowanie procedur indywidualnych i wymogów dowodowych zamiast wydalenia zbiorowego wyłącznie według kategorii etnicznej lub rasowej.",
      ],
      keywords: [
        "remigracja",
        "powrót",
        "egzekwowanie prawa imigracyjnego",
        "pobyt",
        "deportacja",
        "integracja",
        "obywatelstwo",
      ],
    },

    "integration-general-definition": {
      title: "Integracja: określenie ogólne",
      shortAnswer:
        "Integracja oznacza dające się wykazać włączenie językowe, obywatelskie, gospodarcze i społeczne w naród przyjmujący; sam pobyt nie wystarcza.",
      position: [
        "Integrację mierzy się postępowaniem, umiejętnościami i trwałym uczestnictwem. Różni się ona od obywatelstwa oraz od wyższego miernika asymilacji wymaganego przy naturalizacji.",
      ],
      policies: [
        "Wymóg funkcjonalnego opanowania głównego języka narodowego, zwykle mniej więcej na poziomie B1–B2, zależnie od statusu, o który się ubiega.",
        "Wymóg podstawowej znajomości historii narodowej, instytucji, prawa, obowiązków obywatelskich i ustroju konstytucyjnego.",
        "Utrzymująca się poważna przestępczość, przestępczość zorganizowana, terroryzm, poważne oszustwo i umyślne oszustwo imigracyjne stanowią silną przesłankę przeciw integracji.",
        "Oczekiwanie, że zdolni do pracy cudzoziemcy w wieku produkcyjnym będą uczestniczyć przez zatrudnienie, samozatrudnienie, naukę, kształcenie zawodowe, uznaną opiekę nad członkami rodziny albo inny prawnie uznany wkład.",
        "Możliwa do uniknięcia długotrwała zależność od pomocy publicznej jest okolicznością negatywną dla integracji, z wyłączeniem rzeczywistej niezdolności, niepełnosprawności, emerytury, przejściowego bezrobocia i znacznych obowiązków opiekuńczych.",
        "Dopuszczenie dowodów miejscowego uczestnictwa przez pracę, naukę, parafie, stowarzyszenia, kluby i inne instytucje wspólnotowe, bez czynienia obowiązkową przynależności do jakiejkolwiek konkretnej organizacji.",
        "Wymóg poszanowania zgodnego z prawem porządku konstytucyjnego, bez żądania zgodności światopoglądowej z każdą polityką rządu.",
        "Ocena integracji na podstawie udokumentowanych dowodów indywidualnych, a nie samej rasy.",
      ],
      keywords: [
        "integracja",
        "język",
        "wiedza obywatelska",
        "samodzielność",
        "pobyt",
        "porządek publiczny",
        "uczestnictwo",
      ],
    },

    "regularized-irregular-immigration": {
      title: "Zalegalizowana imigracja nieuregulowana",
      shortAnswer:
        "Późniejsza legalizacja nie zaciera automatycznie udowodnionej historii nielegalnego wjazdu lub nielegalnego pobytu; sprawy wcześniej zalegalizowane mogą być indywidualnie zweryfikowane na gruncie nowych ram prawnych.",
      position: [
        "Restore Europa odrzuca twierdzenie, że każda dawna legalizacja czy abolicja musi być traktowana jako konstytucyjnie nienaruszalna. Tam, gdzie wiarygodne dokumenty wykazują wcześniejszy nielegalny wjazd, nielegalny pobyt, fałszywą tożsamość albo inną istotną nieprawidłowość, powstała z tego historia pobytu może zostać zweryfikowana indywidualnie.",
      ],
      policies: [
        "Dopuszczenie indywidualnej weryfikacji statusów pobytowych powstałych z dawniejszych abolicji, masowych legalizacji lub porównywalnych programów nadzwyczajnych.",
        "Wymóg, by państwo udowodniło istotną historię pobytu na podstawie dokumentów i dowodów; nieprawidłowości nie wolno po prostu domniemywać.",
        "Weryfikacja całych akt pierwotnych, w tym tożsamości, historii wjazdu, historii azylowej, podstawy pobytu, późniejszych zezwoleń i ewentualnego postępowania naturalizacyjnego.",
        "Odróżnienie samej wcześniejszej nieprawidłowości od istotnego oszustwa, fałszywej tożsamości lub zatajenia, które mogą pociągać surowsze następstwa.",
        "Jeżeli status przetrwa weryfikację na gruncie nowego prawa, pozostaje ważny z zastrzeżeniem zwyczajnych warunków pobytu.",
        "Jeżeli status nie zostałby przyznany na gruncie właściwej nowej reguły, a konstytucja dopuszcza weryfikację wsteczną, może nastąpić cofnięcie i powrót w drodze decyzji indywidualnej z postępowaniem odwoławczym.",
      ],
      limits: [
        "Niniejszy wpis nie traktuje każdego obywatela naturalizowanego jako oszusta tylko dlatego, że wcześniejszy okres pobytu był nieuregulowany; oszustwo i zgodna z prawem legalizacja pozostają odrębnymi pojęciami.",
      ],
      keywords: [
        "legalizacja",
        "abolicja",
        "nielegalny wjazd",
        "nielegalny pobyt",
        "weryfikacja statusu",
        "historia pobytu",
      ],
    },

    "employment-and-self-sufficiency-of-foreign-residents": {
      title: "Zatrudnienie i samodzielność cudzoziemców zamieszkujących w kraju",
      shortAnswer:
        "Od zdolnych do pracy cudzoziemców zamieszkujących w kraju oczekuje się, że utrzymają się sami, i z reguły nie przysługuje im takie samo bezterminowe uprawnienie do świadczeń jak obywatelom.",
      position: [
        "Pobyt cudzoziemca jest udzielany w określonych celach i pozostaje warunkowy. Mieszkańcy zdolni do pracy powinni zwykle utrzymywać się z zatrudnienia, samozatrudnienia, nauki, szkolenia lub uznanej opieki, a nie przez trwałą i możliwą do uniknięcia zależność od pomocy publicznej.",
      ],
      policies: [
        "Wymóg, by cudzoziemcy przebywający czasowo i zwyczajnie utrzymywali wystarczające zgodne z prawem środki utrzymania, z zastrzeżeniem rozsądnych okresów ochronnych po niezawinionej utracie pracy.",
        "Zatrudnienie, samozatrudnienie, nauka w pełnym wymiarze, kształcenie zawodowe i znaczna opieka nad członkami rodziny liczą się jako prawnie uznane uczestnictwo.",
        "Wyjątki przewiduje się dla rzeczywistej niepełnosprawności, niezdolności, emerytury, dzieci oraz przejściowych trudności mimo rozsądnych starań o pracę.",
        "Ograniczenie zwyczajnych świadczeń socjalnych poza sytuacjami nagłymi dla osób niebędących obywatelami tam, gdzie jest to konstytucyjnie i prawnie dopuszczalne.",
        "Zachowanie żywności, schronienia i koniecznej opieki medycznej w sytuacjach nagłych tam, gdzie ich odmowa naruszałaby podstawowe zobowiązania prawne lub humanitarne.",
        "Powtarzająca się, możliwa do uniknięcia zależność od pomocy publicznej stanowi możliwą podstawę weryfikacji pobytu tam, gdzie zezwolenie było wyraźnie uzależnione od samodzielności.",
        "Nabyte obywatelstwo pozostaje odrębne: samo bezrobocie nie zamienia automatycznie obywatela w osobę przebywającą nielegalnie.",
      ],
      limits: [
        "Dokładny okres ochronny po utracie pracy powinien zostać określony w ustawie wykonawczej, a nie wpisany na stałe w zasadę konstytucyjną.",
      ],
      keywords: [
        "samodzielność",
        "zatrudnienie",
        "świadczenia socjalne",
        "cudzoziemcy zamieszkujący w kraju",
        "zezwolenie na pobyt",
        "uczestnictwo gospodarcze",
      ],
    },

    "probationary-naturalization": {
      title: "Naturalizacja na okres próbny",
      shortAnswer:
        "Nowo nabyte obywatelstwo podlega dziesięcioletniemu okresowi próbnemu z zaostrzonymi zasadami odebrania z wąsko określonych ciężkich podstaw.",
      position: [
        "Naturalizacja tworzy obywatelstwo, lecz przez pierwszych dziesięć lat państwo zachowuje zaostrzone uprawnienie do wznowienia sprawy i odebrania nabytego obywatelstwa z powodu określonych poważnych naruszeń albo istotnych wad podstawy naturalizacji.",
      ],
      policies: [
        "Ustalenie okresu próbnego na dziesięć lat od dnia nabycia obywatelstwa.",
        "Dopuszczenie odebrania za istotne oszustwo w postępowaniu naturalizacyjnym, fałszywą tożsamość lub umyślne zatajenie faktu wykluczającego nadanie.",
        "Dopuszczenie odebrania za wyjątkowo poważne przestępstwa popełnione po naturalizacji, określone w odrębnym wpisie o obywatelstwie i poważnej przestępczości.",
        "Dopuszczenie odebrania za terroryzm, zdradę stanu lub postępowanie stanowiące wyjątkowo ciężkie zagrożenie dla bezpieczeństwa narodowego, gdy ustawa wyraźnie tak stanowi.",
        "Wymóg indywidualnego postępowania sądowego lub quasi-sądowego, dowodu podstawy ustawowej i rzeczywistego prawa do odwołania.",
        "Samo bezrobocie, różnica poglądów politycznych ani niezdany egzamin obywatelski nie stanowią automatycznej podstawy odebrania.",
        "Po upływie dziesięciu lat stosuje się zwyczajną ochronę obywatelstwa, z zastrzeżeniem trwałych podstaw związanych z oszustwem oraz innych nadzwyczajnych podstaw odebrania przyjętych w innym miejscu katalogu.",
      ],
      keywords: [
        "obywatelstwo na okres próbny",
        "naturalizacja",
        "odebranie obywatelstwa",
        "dziesięć lat",
        "oszustwo",
        "poważne przestępstwo",
      ],
    },

    "residence-permit-withdrawal": {
      title: "Cofnięcie zezwolenia na pobyt",
      shortAnswer:
        "Status pobytowy cudzoziemca traci się łatwiej niż obywatelstwo i może on zostać cofnięty, gdy określone warunki wjazdu lub dalszego pobytu zostaną istotnie naruszone.",
      position: [
        "Pobyt jest warunkowym zezwoleniem prawnym. Poważna przestępczość, istotne oszustwo, ciężkie zagrożenia dla bezpieczeństwa oraz uporczywe niedopełnianie wyraźnie określonych warunków pobytu mogą uzasadniać cofnięcie i powrót.",
      ],
      policies: [
        "Cofnięcie zezwolenia lub odmowa jego przedłużenia w razie istotnego oszustwa co do tożsamości lub pobytu.",
        "Cofnięcie pobytu w razie poważnego przestępstwa z użyciem przemocy lub przestępstwa seksualnego, terroryzmu, poważnej przestępczości zorganizowanej i porównywalnych ciężkich czynów, z zastrzeżeniem odrębnych ram deportacji z powodu przestępstwa.",
        "Cofnięcie pobytu, gdy dana osoba stanowi ciężkie i udowodnione zagrożenie dla bezpieczeństwa narodowego.",
        "Dopuszczenie weryfikacji w razie powtarzającej się, możliwej do uniknięcia zależności od świadczeń socjalnych, gdy samodzielność była wyraźnym warunkiem zezwolenia.",
        "Dopuszczenie weryfikacji w razie poważnego i uporczywego niespełniania właściwych wymogów integracyjnych, gdy status był wyraźnie uzależniony od integracji.",
        "Dopuszczenie, by długa nieobecność kończyła status pobytowy; zwyczajna ustawa wykonawcza powinna określić próg według rodzaju zezwolenia w przedziale około dwóch do pięciu lat.",
        "Zawiadomienie o podstawach i indywidualna możliwość zaskarżenia decyzji.",
      ],
      keywords: [
        "zezwolenie na pobyt",
        "cofnięcie",
        "oszustwo",
        "poważne przestępstwo",
        "integracja",
        "nieobecność",
        "bezpieczeństwo publiczne",
      ],
    },

    "voluntary-return-and-reintegration": {
      title: "Powrót dobrowolny i reintegracja",
      shortAnswer:
        "Państwo może sfinansować skromną jednorazową pomoc w powrocie, gdy osoba niebędąca obywatelem dobrowolnie i trwale wraca do kraju swojego obywatelstwa albo do innego kraju uprawnionego do jej przyjęcia.",
      position: [
        "Powrót dobrowolny jest lepszy niż kosztowne usunięcie przymusowe tam, gdzie osiąga ten sam zgodny z prawem cel szybko i niezawodnie.",
      ],
      policies: [
        "Pokrycie rozsądnych kosztów podróży w ramach zatwierdzonego programu powrotu dobrowolnego.",
        "Dopuszczenie ograniczonej jednorazowej pomocy w przesiedleniu lub reintegracji tam, gdzie istotnie zwiększa ona szansę trwałego powrotu.",
        "Uzależnienie pomocy od rzeczywistego wyjazdu i od dochowania uzgodnionych warunków powrotu.",
        "Nietworzenie uprawnienia do powtarzanych świadczeń powrotowych.",
        "Gdy obowiązuje zakaz ponownego wjazdu, dobrowolny wyjazd nie uchyla go automatycznie, chyba że ustawa wyraźnie stanowi inaczej.",
        "Współpraca, gdy to konieczne, z władzami kraju docelowego lub z uznanymi organizacjami w celu uzyskania dokumentów podróży i zapewnienia przyjęcia.",
        "Pierwszeństwo dobrowolnego wyjazdu przed detencją lub przymusowym usunięciem tam, gdzie nie ma poważnego ryzyka ucieczki ani ryzyka przestępczego lub dla bezpieczeństwa.",
      ],
      keywords: [
        "powrót dobrowolny",
        "reintegracja",
        "pomoc w przesiedleniu",
        "koszty podróży",
        "program powrotowy",
      ],
    },

    "naturalized-citizenship-and-exceptionally-serious-crime": {
      title: "Obywatelstwo nabyte a przestępstwa wyjątkowo ciężkie",
      shortAnswer:
        "Nabyte obywatelstwo może zostać odebrane za wąsko określoną grupę przestępstw wyjątkowo ciężkich, po czym następuje usunięcie z kraju tam, gdzie wynikające z tego wymogi obywatelstwa i powrotu da się zgodnie z prawem spełnić.",
      position: [
        "Naturalizacja nie stawia każdego późniejszego czynu poza prawem o obywatelstwie. Proponowany ład konstytucyjny dopuszcza odebranie nabytego obywatelstwa za określone wyjątkowo ciężkie postępowanie po naturalizacji, pozostawiając zwyczajną przestępczość w rękach wymiaru sprawiedliwości w sprawach karnych.",
      ],
      policies: [
        "Ograniczenie tego uprawnienia do wyliczonej grupy przestępstw wyjątkowo ciężkich, takich jak zabójstwo umyślne, zgwałcenie, kwalifikowane wykorzystywanie seksualne dzieci, terroryzm i porównywalne ciężkie czyny.",
        "Wymóg prawomocnego skazania karnego przed odebraniem obywatelstwa z powodu przestępstwa.",
        "Wymóg odrębnego postępowania w sprawie obywatelstwa, ustalającego, czy ustawowe przesłanki odebrania są spełnione.",
        "Zapewnienie rzeczywistego odwołania przed wykonaniem usunięcia z kraju.",
        "Gdy obywatelstwo zostaje odebrane, a dana osoba posiada inne obywatelstwo albo może je zgodnie z prawem odzyskać, stosuje się zwyczajne ramy powrotu.",
        "Gdy obywatelstwo jest sporne, przeprowadza się jego ustalenie, zamiast zakładać, że samo miejsce urodzenia dowodzi obowiązku przyjęcia danej osoby przez jakieś państwo.",
        "Samo pochodzenie nie może być przesłanką prawnokarną; rozstrzygające jest połączenie nabytego obywatelstwa z kwalifikowanym postępowaniem.",
      ],
      keywords: [
        "obywatelstwo nabyte",
        "odebranie obywatelstwa",
        "poważne przestępstwo",
        "zabójstwo",
        "zgwałcenie",
        "terroryzm",
        "obywatelstwo",
      ],
    },

    "return-readmission-identity-and-removal-procedure": {
      title: "Powrót, readmisja, tożsamość i procedura usunięcia z kraju",
      shortAnswer:
        "Polityka powrotowa opiera się na mieszanym modelu egzekwowania: ustalenie tożsamości i detencja w celu usunięcia z kraju tam, gdzie to konieczne, a następnie ograniczony status tymczasowy, jeżeli usunięcie pozostaje przejściowo niemożliwe, przy dalszych staraniach o ustalenie obywatelstwa i uzyskanie readmisji.",
      position: [
        "Prawomocna decyzja o powrocie musi być wykonalna w praktyce. Państwo powinno zatem utrzymywać mechanizmy weryfikacji tożsamości, detencji, obowiązku stawiennictwa i readmisji, zamiast pozwalać, by zniszczenie dokumentów albo brak współpracy automatycznie prowadziły do pobytu stałego.",
      ],
      policies: [
        "Niezwłoczne rozpoczęcie weryfikacji tożsamości i obywatelstwa tam, gdzie osoba podlegająca usunięciu nie ma wiarygodnych dokumentów.",
        "Wykorzystanie paszportów, dokumentów nieważnych, rejestrów stanu cywilnego, odcisków palców lub innych danych biometrycznych tam, gdzie prawo na to pozwala, dokumentów rodzinnych, sprawdzeń konsularnych, przesłanek językowych i biograficznych oraz umów o readmisji w celu ustalenia tożsamości i obywatelstwa.",
        "Traktowanie umyślnego zniszczenia lub ukrycia dokumentów jako okoliczności obciążającej w postępowaniu wykonawczym, przy uznaniu, że zniszczenie paszportu samo w sobie nie kończy obywatelstwa.",
        "Dopuszczenie detencji imigracyjnej tam, gdzie jest konieczna do ustalenia tożsamości, zapobieżenia ucieczce lub wykonania nieodległego usunięcia, z zastrzeżeniem określonych granic ustawowych i ciągłych starań o usunięcie.",
        "Jeżeli usunięcia nie da się wykonać w maksymalnym dopuszczalnym prawem okresie detencji, przeniesienie osoby do ograniczonego statusu tymczasowego, a nie do zwyczajnego pobytu stałego.",
        "Status ograniczony może obejmować obowiązek stawiennictwa, ograniczenia miejsca pobytu, dalszą współpracę w procedurach ustalania tożsamości i ograniczoną pomoc publiczną.",
        "Sam upływ czasu w statusie ograniczonym nie może automatycznie przekształcać się w obywatelstwo ani w pobyt stały.",
        "Wznowienie usunięcia z kraju, gdy tylko obywatelstwo, dokumenty podróży i zgodna z prawem readmisja staną się dostępne.",
        "Wykorzystanie umów o readmisji i nacisku dyplomatycznego, by skłonić państwa do przyjmowania osób, których obywatelstwo jest ustalone według ich własnego prawa.",
        "Dopuszczenie wspólnego wyjazdu członków rodziny tam, gdzie usuwani są rodzice, a dzieci mają prawo im towarzyszyć; samodzielne kwestie obywatelstwa, pieczy i ochrony dziecka wymagają rozstrzygnięcia indywidualnego.",
        "Stosowanie nowych konstytucyjnych reguł imigracyjnych do statusów istniejących tam, gdzie ustawa wyraźnie przewiduje weryfikację wsteczną, z zastrzeżeniem procedur weryfikacyjnych określonych w innych wpisach tego zespołu.",
      ],
      keywords: [
        "procedura powrotu",
        "readmisja",
        "detencja",
        "tożsamość",
        "obywatelstwo",
        "status ograniczony",
        "bezpaństwowość",
        "jedność rodziny",
        "wsteczne stosowanie prawa",
      ],
    },

    "europe-as-a-civilization-of-nations": {
      title: "Europa jako cywilizacja narodów",
      shortAnswer:
        "Europa powinna być cywilizacyjną wspólnotą suwerennych narodów, a nie scentralizowanym państwem ponarodowym.",
      position: [
        "Europa powinna być cywilizacyjną wspólnotą suwerennych narodów, a nie scentralizowanym państwem ponarodowym.",
      ],
      policies: [
        "Współpraca europejska w obronie, na granicach, w infrastrukturze strategicznej, nauce, ochronie środowiska i zachowaniu cywilizacji.",
        "Zachowana narodowa samodzielność polityczna i tożsamość historyczna.",
        "Podziałem kompetencji rządzi pomocniczość.",
      ],
      keywords: ["Europa", "suwerenność", "konfederacja", "pomocniczość", "państwo ponarodowe"],
    },

    "european-union-institutional-relationship": {
      title: "Unia Europejska: stosunek instytucjonalny",
      shortAnswer:
        "Restore Europa popiera gruntowną reformę Unii Europejskiej w ograniczone ramy współpracy suwerennych narodów Europy, z powrotem większości kompetencji politycznych do państw członkowskich.",
      position: [
        "Współpraca europejska powinna trwać, ale instytucje kontynentalne powinny mieć tylko te kompetencje, które rzeczywiście wymagają działania na szczeblu europejskim. Restore Europa odrzuca dążenie do scentralizowanego państwa ponarodowego i stosuje pomocniczość ściśle.",
      ],
      policies: [
        "Zwrot istotnych kompetencji prawodawczych i regulacyjnych państwom członkowskim.",
        "Utrzymanie polityki rodzinnej, edukacji, kultury, religii, zwyczajnego prawa karnego i większości wewnętrznej polityki społecznej głównie na szczeblu narodowym.",
        "Zachowanie współpracy europejskiej tam, gdzie skala czyni ją rzeczywiście pożyteczną, w tym w wybranej infrastrukturze transgranicznej, współpracy naukowej, handlu, koordynacji granic i bezpieczeństwie strategicznym.",
        "Uniemożliwienie instytucjom Unii narzucania narodom członkowskim jednolitego programu moralnego lub kulturowego.",
        "Zachowanie suwerenności narodowej, tożsamości konstytucyjnej i ciągłości historycznej.",
        "Dążenie do europejskich ram cywilizacyjnych, które uznają chrześcijańskie dziedzictwo Europy, zachowując przy tym narodową samodzielność polityczną.",
      ],
      keywords: [
        "Unia Europejska",
        "UE",
        "suwerenność",
        "pomocniczość",
        "Komisja Europejska",
        "reforma traktatów",
        "chrześcijańska Europa",
        "Bruksela",
        "kompetencje",
      ],
    },

    "economic-order": {
      title: "Ład gospodarczy",
      shortAnswer:
        "Restore Europa odrzuca zarówno kapitalizm bez ograniczeń, jak i socjalizm scentralizowany. Jej ideał gospodarczy jest dystrybucjonistyczny co do własności i korporacjonistyczny co do organizacji.",
      position: [
        "Restore Europa odrzuca zarówno kapitalizm bez ograniczeń, jak i socjalizm scentralizowany. Jej ideał gospodarczy jest dystrybucjonistyczny co do własności i korporacjonistyczny co do organizacji.",
      ],
      keywords: ["gospodarka", "dystrybucjonizm", "korporacjonizm", "kapitalizm", "socjalizm"],
    },

    "private-property-and-broad-ownership": {
      title: "Własność prywatna i szeroko rozproszona własność",
      shortAnswer:
        "Własność jest źródłem niezależności i odpowiedzialności. Odpowiedzią na koncentrację jest szersze rozproszenie własności, a nie jej zniesienie.",
      position: [
        "Własność prywatna jest źródłem niezależności i odpowiedzialności. Odpowiedzią na nadmierną koncentrację jest szersze rozproszenie własności, a nie jej zniesienie.",
      ],
      policies: [
        "Szeroka własność mieszkaniowa.",
        "Przedsiębiorstwa rodzinne.",
        "Niezależni rzemieślnicy i zawody rzemieślnicze.",
        "Małe i średnie przedsiębiorstwa.",
        "Spółdzielnie i własność pracownicza.",
        "Rolnictwo rodzinne.",
        "Bankowość lokalna i regionalna.",
      ],
      principle: "Wielu właścicieli, a nie kilku.",
      keywords: ["własność", "posiadanie", "dystrybucjonizm", "spółdzielnie", "drobni właściciele"],
    },

    "corporations-and-monopolies": {
      title: "Korporacje i monopole",
      shortAnswer:
        "Korporacje są uprawnionymi narzędziami, ale pozostają podporządkowane dobru wspólnemu, a skupioną władzę korporacyjną można ograniczyć.",
      position: [
        "Korporacje są uprawnionymi narzędziami, ale muszą pozostać podporządkowane dobru wspólnemu. Nadmiernie skupioną władzę korporacyjną można ograniczyć.",
      ],
      policies: [
        "Mocna polityka konkurencji i przeciwdziałania monopolom.",
        "Ograniczenia tam, gdzie firmy podporządkowują sobie instytucje polityczne albo rynki podstawowe.",
        "Ochrona żywotnych wspólnot, życia rodzinnego i niezależności politycznej przed niszczącą koncentracją.",
      ],
      keywords: ["korporacje", "monopol", "prawo antymonopolowe", "konkurencja", "koncentracja"],
    },

    "guilds-chambers-and-corporatist-representation": {
      title: "Cechy, izby i przedstawicielstwo korporacyjne",
      shortAnswer:
        "Pracownicy, pracodawcy, rzemieślnicy, rolnicy i zawody powinni uczestniczyć w instytucjach branżowych ustalających standardy, naukę zawodu i warunki pracy.",
      position: [
        "Pracownicy, pracodawcy, rzemieślnicy, rolnicy i zawody powinni uczestniczyć w instytucjach branżowych zdolnych ustalać standardy, naukę zawodu, warunki pracy i mechanizmy mediacji.",
      ],
      policies: [
        "Izby zawodowe i korporacje branżowe powinny pozostać dostatecznie niezależne od scentralizowanej władzy.",
        "Organizacje zawodowe mogą mieć zorganizowane przedstawicielstwo w życiu publicznym.",
        "Korporacjonizm pozostaje podporządkowany pomocniczości.",
      ],
      keywords: ["cechy", "izby zawodowe", "korporacjonizm", "nauka zawodu", "rzemiosło"],
    },

    "finance-lending-and-usury": {
      title: "Finanse, kredyt i lichwa",
      shortAnswer:
        "Finanse powinny służyć działalności wytwórczej. Uprawnione pożyczanie i rozsądny zwrot są przyjmowane; wyzyskujące oprocentowanie i pętle zadłużenia — nie.",
      position: [
        "Finanse powinny służyć działalności wytwórczej. Restore Europa przyjmuje uprawnione pożyczanie i rozsądny zwrot z kapitału, sprzeciwiając się wyzyskującemu oprocentowaniu, drapieżnemu kredytowi i pętlom zadłużenia.",
      ],
      policies: [
        "Ścisłe ograniczenia lub limity dla drapieżnych pożyczek typu chwilówka.",
        "Przejrzyste podawanie pełnego kosztu kredytu.",
        "Ograniczenia nadużywanych opłat za opóźnienie i kar narastających.",
        "Sądy mogą unieważniać wyraźnie rażąco nieuczciwe warunki pożyczki.",
        "Polityka powinna sprzyjać kredytowi wytwórczemu na mieszkania, firmy rodzinne i inwestycje długoterminowe.",
        "Wspieranie bankowości lokalnej i regionalnej.",
      ],
      keywords: ["finanse", "lichwa", "oprocentowanie", "pożyczki", "dług", "banki"],
    },

    "housing-and-financialization": {
      title: "Mieszkania i ich finansjalizacja",
      shortAnswer:
        "Mieszkania powinny służyć przede wszystkim zamieszkiwaniu i wspólnocie, a nie działać jako bez końca drożejące aktywo finansowe.",
      position: [
        "Mieszkania powinny służyć przede wszystkim zamieszkiwaniu i wspólnocie, a nie działać głównie jako bez końca drożejące aktywo finansowe.",
      ],
      policies: [
        "Szeroka własność mieszkaniowa jest celem podstawowym.",
        "Własność spekulacyjną i skupioną można ograniczyć tam, gdzie uniemożliwia zwyczajną własność rodzinną.",
      ],
      keywords: ["mieszkania", "własne mieszkanie", "najem", "spekulacja", "wynajmujący"],
    },

    work: {
      title: "Praca",
      shortAnswer:
        "Praca ma swoją godność, ale nie jest celem ludzkiego istnienia. Postęp gospodarczy powinien zwiększać bezpieczeństwo, czas wolny i władzę człowieka nad własnym życiem.",
      position: [
        "Praca ma swoją godność, ale nie jest celem ludzkiego istnienia. Postęp gospodarczy powinien zwiększać bezpieczeństwo, czas wolny, czas dla rodziny, sensowną pracę i władzę człowieka nad własnym życiem.",
      ],
      policies: [
        "Przywrócona pozycja społeczna rzemiosła, rolnictwa, inżynierii, pracy opiekuńczej, nauczania i zawodów fachowych.",
        "Wzrost produktywności nie powinien tylko zwiększać ilości wyciskanej z ludzi pracy.",
        "Automatyzacja nie powinna usuwać sensownego udziału człowieka wyłącznie w imię wydajności liczbowej.",
      ],
      keywords: ["praca", "zatrudnienie", "rynek pracy", "rzemiosło", "czas wolny"],
    },

    "minimum-wage": {
      title: "Płaca minimalna i płaca sprawiedliwa",
      shortAnswer:
        "Każdemu pracownikowi należy się płaca sprawiedliwa, wystarczająca na godne życie i na rozsądne utrzymanie rodziny.",
      position: [
        "Katolicka nauka społeczna ustanawia materialny standard płacy sprawiedliwej, a nie jeden powszechny mechanizm ustawowy. Restore Europa opowiada się zatem za ustalaniem wynagrodzeń na szczeblu branżowym i regionalnym przez instytucje przedstawicielskie, wsparte ochroną ustawową tam, gdzie to konieczne.",
      ],
      policies: [
        "Ustanowienie zasady prawnie chronionej płacy sprawiedliwej.",
        "Ustalanie dolnych granic wynagrodzeń z reguły na właściwym szczeblu branżowym lub regionalnym, przez pracowników, pracodawców i ciała zawodowe.",
        "Dopuszczenie, by cechy, izby i instytucje zbiorowe negocjowały standardy odpowiednie do produktywności, umiejętności i warunków branży.",
        "Dopuszczenie ustawowej ochrony minimalnej tam, gdzie instytucje negocjacyjne nie zdołają zapewnić płacy sprawiedliwej.",
        "Uwzględnianie potrzeb rodziny, a nie traktowanie utrzymania jednej osoby jako jedynego standardu.",
        "Stosowanie dodatków rodzinnych lub świadczeń na dzieci tam, gdzie to właściwe, tak by wychowywanie dzieci nie stawało się nieuzasadnioną karą ekonomiczną.",
        "Uwzględnianie żywotności przedsiębiorstwa, produktywności i możliwości zatrudnienia.",
      ],
      keywords: [
        "płaca minimalna",
        "płaca sprawiedliwa",
        "płaca wystarczająca na życie",
        "płaca rodzinna",
        "pracownicy",
        "cechy",
        "negocjacje zbiorowe",
        "wynagrodzenie",
        "dolna granica wynagrodzenia",
      ],
    },

    taxation: {
      title: "Podatki",
      shortAnswer:
        "Opodatkowanie jest uprawnione dla dobra wspólnego, ale powinno być sprawiedliwe, wrażliwe na rodzinę, niekonfiskacyjne i zgodne z szeroko rozproszoną własnością, pracą wytwórczą i pomocniczością.",
      position: [
        "System podatkowy powinien finansować uprawnione funkcje publiczne, nie stając się mechanizmem znoszenia własności prywatnej, odstraszania od zakładania rodziny ani zbędnej centralizacji obowiązków społecznych.",
      ],
      policies: [
        "Nakładanie podatków na podstawie jasnego prawa, rozsądnie i sprawiedliwie.",
        "Utrzymanie całkowitego obciążenia na poziomie zgodnym z niezależnością gospodarstw domowych, oszczędzaniem, przedsiębiorczością wytwórczą i szeroką własnością.",
        "Istotne uwzględnienie dzieci na utrzymaniu i unikanie kar podatkowych za małżeństwo lub wychowywanie dzieci.",
        "Uprzywilejowanie pracy wytwórczej i inwestycji długoterminowych wobec spekulacyjnego wyciskania zysku tam, gdzie konstrukcja podatku potrafi je spójnie rozróżnić.",
        "Unikanie nieproporcjonalnych obciążeń administracyjnych dla małych firm, przedsiębiorstw rodzinnych, gospodarstw rolnych i rzemieślników.",
        "Pobieranie dochodów na najniższym kompetentnym szczeblu tam, gdzie to wykonalne.",
        "Umiarkowana progresja w podatku dochodowym, przy unikaniu karnych stawek krańcowych.",
        "Ochrona zwyczajnych domów rodzinnych, gospodarstw rolnych i działających firm rodzinnych przed konstrukcjami podatku spadkowego, które wymuszają zbędną likwidację.",
        "Ostrożność wobec powtarzalnych powszechnych podatków majątkowych, które mogą opodatkowywać majątek niepłynny niezależnie od dochodu.",
        "Obniżone opodatkowanie konsumpcji dóbr podstawowych tam, gdzie to wykonalne.",
      ],
      limits: [
        "Dokładne stawki nie są tu przepisane i pozostają sprawą wykonania na szczeblu narodowym.",
      ],
      keywords: [
        "podatek",
        "opodatkowanie",
        "podatek dochodowy",
        "podatek od firm",
        "VAT",
        "podatek spadkowy",
        "podatek majątkowy",
        "podatki a rodzina",
        "pomocniczość",
      ],
    },

    pensions: {
      title: "Emerytury",
      shortAnswer:
        "Mieszany system emerytalny powinien łączyć podstawowe zabezpieczenie na starość z zabezpieczeniem zawodowym, oszczędnościami własnymi, majątkiem rodzinnym i odpowiedzialnością międzypokoleniową.",
      position: [
        "Ludzie starsi, którzy wnieśli swój wkład w społeczeństwo, nie powinni popadać w nędzę, ale zabezpieczenie emerytalne nie powinno czynić obywateli całkowicie zależnymi od jednego scentralizowanego systemu państwowego.",
      ],
      policies: [
        "Zagwarantowanie emerytury podstawowej wystarczającej, by chronić starszych obywateli od ubóstwa.",
        "Wspieranie zakładowych i branżowych funduszy emerytalnych organizowanych przez pracodawców, cechy, izby zawodowe i inne instytucje pośrednie.",
        "Wspieranie prywatnego oszczędzania na starość i długoterminowej własności majątku przez gospodarstwa domowe.",
        "Zaliczanie okresów poświęconych wychowywaniu dzieci lub znacznej opiece nad rodziną przy obliczaniu uprawnień do emerytury publicznej.",
        "Unikanie zasad emerytalnych, które strukturalnie karzą za małżeństwo, rodzicielstwo albo opiekę nad rodziną.",
        "Utrzymanie stabilności finansów publicznych, tak by jedno pokolenie nie nakładało na następne zobowiązań niemożliwych do spłacenia.",
        "Dopuszczenie narodowych różnic w proporcji między zabezpieczeniem publicznym, zawodowym i prywatnym.",
      ],
      keywords: [
        "emerytury",
        "przejście na emeryturę",
        "starość",
        "ubezpieczenia społeczne",
        "fundusze emerytalne",
        "rodzina",
        "oszczędności",
        "własność",
      ],
    },

    "housing-restrictions": {
      title: "Szczegółowe ograniczenia na rynku mieszkaniowym",
      shortAnswer:
        "Mieszkania powinny służyć przede wszystkim zamieszkiwaniu i wspólnocie, a polityka powinna zmierzać do szerokiej własności rodzinnej, a nie do trwałego wyciskania zysku finansowego.",
      position: [
        "Własność prywatna jest chroniona, a proporcjonalne ograniczenia mogą dotyczyć praktyk, które z ograniczonego zasobu mieszkań czynią narzędzie sztucznego niedoboru, monopolu lub spekulacyjnej akumulacji.",
      ],
      policies: [
        "Uczynienie szerokiego zamieszkiwania we własnym mieszkaniu podstawowym celem polityki mieszkaniowej.",
        "Zwiększanie podaży tam, gdzie da się to pogodzić z infrastrukturą, miejscowym charakterem i troską o środowisko.",
        "Zmniejszanie zbędnych barier planistycznych dla odpowiednich mieszkań rodzinnych, przy zachowaniu historycznych osad i krajobrazów.",
        "Rozsądne wsparcie dla osób kupujących pierwsze mieszkanie i dla rodzin.",
        "Zniechęcanie do drapieżnych konstrukcji kredytu hipotecznego i wspieranie przewidywalnego finansowania długoterminowego.",
        "Dopuszczenie ostrzejszej regulacji hurtowego nabywania mieszkań przez dominujących inwestorów instytucjonalnych tam, gdzie istotnie wypiera ono zwyczajnych nabywców.",
        "Dopuszczenie dodatkowego opodatkowania lub regulacji długotrwale pustych mieszkań inwestycyjnych tam, gdzie niedobór jest ciężki.",
        "Ochrona domów rodzinnych, gospodarstw rodzinnych i zwyczajnego majątku odziedziczonego przed przymusową likwidacją.",
        "Wspieranie spółdzielni i zakorzenionych lokalnie form własności tam, gdzie poszerzają rzeczywistą własność.",
        "Pierwszeństwo dla proporcjonalnej ochrony najemców przed systemami kontroli czynszów, które czynią nowe budownictwo ekonomicznie niemożliwym.",
      ],
      keywords: [
        "mieszkania",
        "własne mieszkanie",
        "najem",
        "ziemia",
        "własność",
        "finansjalizacja",
        "kredyty hipoteczne",
        "inwestorzy instytucjonalni",
      ],
    },

    "trade-unions-and-vocational-representation": {
      title: "Związki zawodowe, cechy i przedstawicielstwo zawodowe",
      shortAnswer:
        "Pracownicy mogą organizować się niezależnie, a stosunki pracy powinny zmierzać ku korporacjonistycznemu systemowi trwałych instytucji branżowych reprezentujących pracowników, pracodawców i zawody.",
      position: [
        "Restore Europa odrzuca zarówno bezsilność pracownika wobec skupionego kapitału, jak i trwały konflikt klasowy jako zasadę porządkującą życie gospodarcze.",
      ],
      policies: [
        "Ochrona prawa do zakładania niezależnych związków zawodowych i wstępowania do nich.",
        "Ochrona legalnych negocjacji zbiorowych o wynagrodzenia i warunki pracy.",
        "Ustanowienie izb branżowych albo korporacji zawodowych reprezentujących pracowników, pracodawców, rzemieślników i zawody.",
        "Dopuszczenie, by ciała te negocjowały dolne granice wynagrodzeń, naukę zawodu, standardy zawodowe i mechanizmy rozstrzygania sporów.",
        "Wspieranie mediacji i porozumienia przed długotrwałym sporem zbiorowym.",
        "Zachowanie proporcjonalnego prawa do strajku, przy ochronie rzeczywiście niezbędnych usług przez wymogi ciągłości.",
        "Niedopuszczenie, by związki zawodowe stały się obowiązkowymi organami państwa.",
        "Niedopuszczenie, by pracodawcy kontrolowali rzekomo niezależne organizacje pracownicze.",
        "Dopuszczenie rzeczywistej wielości przedstawicielstwa, a nie jednego związku kontrolowanego przez państwo.",
      ],
      keywords: [
        "związki zawodowe",
        "cechy",
        "korporacjonizm",
        "negocjacje zbiorowe",
        "strajki",
        "izby zawodowe",
        "warunki pracy",
      ],
    },

    "technology-general-doctrine": {
      title: "Technika: doktryna ogólna",
      shortAnswer:
        "Rozwój techniki nie jest tożsamy z postępem człowieka i powinien być oceniany po swoich skutkach dla samodzielności, rodziny, wspólnoty i pracy.",
      position: [
        "Rozwój techniki nie jest tożsamy z postępem człowieka. Technikę należy oceniać po tym, czy umacnia, czy osłabia samodzielność, życie rodzinne, wspólnotę, sensowną pracę, prywatność, decentralizację i środowisko naturalne.",
      ],
      principle: "Maszyna musi dostosować się do człowieka.",
      keywords: ["technika", "postęp", "ludzka miara", "innowacje"],
    },

    "artificial-intelligence": {
      title: "Sztuczna inteligencja",
      shortAnswer:
        "Sztuczna inteligencja może być używana jako narzędzie, ale nie powinna wypierać ludzkiego osądu tylko dlatego, że automatyzacja jest technicznie możliwa albo ekonomicznie wydajna.",
      position: [
        "Sztuczna inteligencja może być używana jako narzędzie, ale nie powinna wypierać ludzkiego osądu tylko dlatego, że automatyzacja jest technicznie możliwa albo ekonomicznie wydajna.",
      ],
      policies: [
        "Sztuczną inteligencję należy oceniać po jej skutkach dla ludzkich kompetencji, zatrudnienia, samodzielności i władzy instytucji.",
        "W sprawach o poważnych skutkach prawnych lub moralnych musi pozostać dostępny człowiek rozstrzygający.",
        "To, że jakaś możliwość istnieje, nie tworzy obowiązku jej wprowadzenia.",
      ],
      keywords: ["sztuczna inteligencja", "AI", "uczenie maszynowe", "automatyzacja", "algorytmy"],
    },

    automation: {
      title: "Automatyzacja",
      shortAnswer:
        "Automatyzacja może usuwać pracę naprawdę poniżającą, ale usuwanie udziału człowieka z działalności wytwórczej nie jest dobrem przyjmowanym bez namysłu.",
      position: [
        "Automatyzacja może usuwać pracę naprawdę poniżającą, ale usuwanie udziału człowieka z działalności wytwórczej nie powinno być celem przyjmowanym bez namysłu.",
      ],
      principle: "Ludzkie umiejętności są same w sobie dobrem społecznym.",
      keywords: ["automatyzacja", "roboty", "miejsca pracy", "utrata umiejętności", "wydajność"],
    },

    "cash-and-non-digital-access": {
      title: "Gotówka i dostęp niecyfrowy",
      shortAnswer:
        "Obywatelom powinien pozostać rzeczywisty dostęp do pieniądza fizycznego i do usług publicznych świadczonych twarzą w twarz.",
      position: [
        "Obywatelom powinien pozostać rzeczywisty dostęp do pieniądza fizycznego i do usług publicznych świadczonych twarzą w twarz.",
      ],
      policies: [
        "Gotówka fizyczna powinna pozostać dostępna.",
        "Podstawowy udział w życiu obywatelskim nie powinien wymagać smartfona.",
        "Niecyfrowe dokumenty tożsamości powinny pozostać dostępne tam, gdzie to wykonalne.",
        "Usługi publiczne powinny zachować rozwiązania dostępne przy udziale człowieka.",
      ],
      keywords: ["gotówka", "pieniądz", "wykluczenie cyfrowe", "bankowość", "obsługa osobista"],
    },

    "right-to-repair": {
      title: "Prawo do naprawy",
      shortAnswer:
        "Obywatelom powinien pozostać rzeczywisty dostęp do rzeczy nadających się do naprawy, przeciw zbędnej jednorazowości i technologicznemu uwięzieniu u producenta.",
      position: [
        "Obywatelom powinien pozostać rzeczywisty dostęp do rzeczy nadających się do naprawy. Restore Europa opowiada się za polityką, która przeciwstawia się zbędnej jednorazowości i technologicznemu uwięzieniu u producenta.",
      ],
      keywords: [
        "prawo do naprawy",
        "naprawialność",
        "jednorazowość",
        "uwięzienie u producenta",
        "części zamienne",
      ],
    },

    surveillance: {
      title: "Nadzór",
      shortAnswer:
        "Obywatelom powinna pozostać rzeczywista przestrzeń prywatna wolna od stałego nadzoru, przy czym szczegółowe zasady nie są jeszcze rozstrzygnięte.",
      position: [
        "Obywatelom powinna pozostać rzeczywista przestrzeń prywatna wolna od stałego nadzoru.",
      ],
      limits: [
        "Dokładne zasady dotyczące rozpoznawania twarzy, zatrzymywania metadanych, monitoringu wizyjnego i uprawnień służb pozostają otwarte.",
      ],
      keywords: [
        "nadzór",
        "prywatność",
        "rozpoznawanie twarzy",
        "monitoring wizyjny",
        "zatrzymywanie danych",
      ],
    },

    "children-social-media-and-attention-capture": {
      title: "Dzieci i media społecznościowe",
      shortAnswer:
        "Dzieci powinny otrzymać mocną ochronę prawną przed systemami mediów społecznościowych zaprojektowanymi tak, by maksymalizować przymusowe skupienie uwagi i zależność psychiczną.",
      position: [
        "Rodzice pozostają pierwszymi opiekunami dzieci, a państwo może regulować systemy komercyjne, które celowo wykorzystują rozwojową bezbronność dzieci.",
      ],
      policies: [
        "Zapewnienie nieletnim istotnie mocniejszych domyślnych ustawień prywatności i widoczności dla innych.",
        "Ograniczenie manipulacyjnych mechanizmów zaangażowania nastawionych na maksymalizację przymusowego korzystania przez dzieci.",
        "Surowe ograniczenie reklamy behawioralnej kierowanej do dzieci.",
        "Wymóg skutecznej kontroli rodzicielskiej.",
        "Niewymaganie od uczniów prowadzenia kont w komercyjnych mediach społecznościowych w zwyczajnej nauce szkolnej.",
        "Dopuszczenie ograniczeń nocnych powiadomień i mechanizmów zaangażowania nastawionych na nieletnich.",
        "Zaprojektowanie potwierdzania wieku tak, by zbierać jak najmniej danych o tożsamości.",
        "Stosowanie ogólnych ram: dostęp silnie ograniczony poniżej 13 lat, mocna ochrona rodzicielska i ochrona nieletnich w wieku 13–15 lat, dostęp szerszy, ale wciąż chroniony w wieku 16–17 lat, oraz zwyczajne zasady dla dorosłych od 18 lat.",
      ],
      keywords: [
        "media społecznościowe",
        "dzieci",
        "nieletni",
        "przechwytywanie uwagi",
        "uzależnienie",
        "kontrola rodzicielska",
        "weryfikacja wieku",
        "smartfony",
      ],
    },

    "digital-identification": {
      title: "Cyfrowa identyfikacja",
      shortAnswer:
        "Cyfrowa identyfikacja może istnieć jako opcjonalna wygoda, ale zwyczajny udział w życiu obywatelskim nie może wymagać obowiązkowej tożsamości wyłącznie cyfrowej.",
      position: [
        "Obywatelom powinien pozostać rzeczywisty dostęp niecyfrowy i nie powinni być wtłaczani w powszechną architekturę tożsamości, zdolną do rutynowego nadzoru nad zachowaniem.",
      ],
      policies: [
        "Utrzymanie dostępności fizycznych dokumentów tożsamości wszędzie tam, gdzie jest to rozsądnie wykonalne.",
        "Nieodmawianie podstawowych usług publicznych tylko dlatego, że ktoś nie zgadza się na smartfona albo na aplikację cyfrowej tożsamości.",
        "Zbieranie tylko danych koniecznych do wskazanego celu administracyjnego.",
        "Oddzielenie systemów tożsamości od ogólnych systemów nadzoru nad zachowaniem.",
        "Wymóg jasnej podstawy prawnej i możliwości kontroli dostępu do danych o tożsamości.",
        "Zakaz systemów zaufania społecznego oraz punktowania zachowań politycznych lub religijnych.",
        "Unikanie automatycznego łączenia zapisów medycznych, finansowych, edukacyjnych, podróżnych i komunikacyjnych w jeden powszechny profil państwowy.",
      ],
      keywords: [
        "cyfrowy dokument tożsamości",
        "tożsamość elektroniczna",
        "prywatność",
        "nadzór",
        "system zaufania społecznego",
        "dostęp niecyfrowy",
        "tożsamość",
      ],
    },

    "central-bank-digital-currencies": {
      title: "Cyfrowe waluty banków centralnych",
      shortAnswer:
        "Cyfrowa waluta banku centralnego nie może zastąpić gotówki fizycznej ani stać się obowiązkowym, programowalnym systemem nadzoru nad transakcjami.",
      position: [
        "Cyfrowa waluta banku centralnego może być tolerowana jako opcjonalny instrument płatniczy tylko przy surowych gwarancjach prywatności i decentralizacji.",
      ],
      policies: [
        "Nieznoszenie gotówki na rzecz obowiązkowej cyfrowej waluty banku centralnego.",
        "Niewymaganie, by wynagrodzenia, świadczenia czy zwyczajne transakcje korzystały wyłącznie z infrastruktury cyfrowej waluty banku centralnego.",
        "Niedopuszczenie rutynowego monitorowania przez władze każdej legalnej transakcji.",
        "Zakaz programowalnych ograniczeń politycznych wobec zakupów zresztą zgodnych z prawem.",
        "Zakaz sztucznego wygasania pieniędzy obywateli.",
        "Zakaz używania cyfrowych walut banków centralnych do systemów zaufania społecznego.",
        "Zachowanie rzeczywistej prywatności transakcji w ramach proporcjonalnych przepisów przeciw przestępczości.",
      ],
      keywords: [
        "CBDC",
        "cyfrowe euro",
        "gotówka",
        "pieniądz programowalny",
        "prywatność finansowa",
        "waluta cyfrowa",
      ],
    },

    cryptocurrency: {
      title: "Kryptowaluty",
      shortAnswer:
        "Legalne posiadanie i przekazywanie kryptowalut powinno pozostać dozwolone, a oszustwo, kradzież i nadużycia w scentralizowanym przechowywaniu pozostają uregulowane.",
      position: [
        "Kryptowaluty nie są z natury ani wyzwalające, ani z natury nieuprawnione. Należy je oceniać po tym, czy służą uprawnionym celom gospodarczym, nie wywołując oszustw, drapieżnej spekulacji ani zbędnej zależności.",
      ],
      policies: [
        "Dopuszczenie legalnego posiadania i przekazywania kryptowalut.",
        "Stosowanie zwyczajnego prawa karnego do oszustwa, kradzieży, manipulacji rynkiem i wprowadzającej w błąd promocji.",
        "Proporcjonalna regulacja giełd przechowujących aktywa klientów, ze względu na wypłacalność, przechowywanie i przeciwdziałanie oszustwom.",
        "Odróżnianie protokołów zdecentralizowanych od scentralizowanych firm powierniczych.",
        "Niezakazywanie prywatnych kryptowalut tylko po to, by chronić monopol przyszłej cyfrowej waluty banku centralnego.",
        "Jasne i administracyjnie rozsądne zasady opodatkowania.",
        "Niezakazywanie technik chroniących prywatność tylko dlatego, że prywatność jest technicznie możliwa.",
      ],
      keywords: [
        "kryptowaluty",
        "Bitcoin",
        "aktywa cyfrowe",
        "blockchain",
        "decentralizacja",
        "prywatność finansowa",
      ],
    },

    "facial-recognition": {
      title: "Rozpoznawanie twarzy",
      shortAnswer:
        "Stały lub masowy nadzór nad ogółem ludności z użyciem rozpoznawania twarzy powinien być zakazany.",
      position: [
        "Rozpoznawanie twarzy może mieć wąskie uprawnione zastosowania w śledztwach dotyczących poważnych przestępstw, ale przestrzeń publiczna nie powinna stać się stale monitorowanym środowiskiem biometrycznym.",
      ],
      policies: [
        "Zakaz powszechnego śledzenia twarzy obywateli w czasie rzeczywistym w zwyczajnym życiu publicznym.",
        "Zakaz stałego katalogowania biometrycznego wszystkich, którzy wychodzą na ulice, wchodzą do sklepów, kościołów, na demonstracje albo do transportu publicznego.",
        "Dopuszczenie użycia ukierunkowanego w śledztwach dotyczących poważnych przestępstw, pod warunkiem zgody przewidzianej prawem, konieczności, proporcjonalności i ograniczeń czasowych.",
        "Wymóg ustanowionych prawem standardów dla biometrycznych list obserwacyjnych i poprawiania błędnej identyfikacji.",
        "Żadnego rutynowego katalogowania biometrycznego zgromadzeń politycznych ani religijnych.",
        "Ograniczenie tworzenia przez firmy prywatne stałych profili biometrycznych bez mocnej podstawy prawnej.",
      ],
      keywords: [
        "rozpoznawanie twarzy",
        "biometria",
        "monitoring wizyjny",
        "nadzór",
        "prywatność",
        "przestrzeń publiczna",
      ],
    },

    "communications-metadata-retention": {
      title: "Zatrzymywanie metadanych komunikacyjnych",
      shortAnswer:
        "Masowe, stałe zatrzymywanie metadanych komunikacyjnych całej ludności należy odrzucić.",
      position: [
        "Państwo może uzyskiwać dane o komunikacji dla uprawnionych śledztw, ale zwyczajni obywatele nie powinni być traktowani jako stali podejrzani.",
      ],
      policies: [
        "Odrzucenie bezterminowego masowego zatrzymywania metadanych komunikacyjnych wszystkich.",
        "Dopuszczenie ukierunkowanego zabezpieczania danych i dostępu do nich w śledztwach dotyczących poważnej przestępczości i zagrożeń bezpieczeństwa narodowego.",
        "Z reguły wymóg zgody sądu albo porównywalnie niezależnego organu na dostęp.",
        "Ograniczone okresy przechowywania i usuwanie danych niezwiązanych ze sprawą po upływie dopuszczalnego okresu.",
        "Nieczynienie z masowego nadzoru domyślnej architektury infrastruktury komunikacyjnej.",
        "Utrzymanie mocnego nadzoru nad dostępem organów ścigania i służb wywiadowczych.",
      ],
      keywords: [
        "metadane",
        "zatrzymywanie danych",
        "nadzór nad komunikacją",
        "prywatność",
        "telekomunikacja",
        "służby wywiadowcze",
      ],
    },

    "genetic-engineering": {
      title: "Inżynieria genetyczna",
      shortAnswer:
        "Lecznicza medycyna genetyczna może być uprawniona, natomiast dziedziczne ulepszanie człowieka i instrumentalne traktowanie ludzkiego życia embrionalnego napotykają mocny zakaz.",
      position: [
        "Restore Europa odróżnia leczenie choroby od przedsięwzięć, których celem jest przeprojektowanie natury człowieka albo wybieranie pożądanych cech ludzkich.",
      ],
      policies: [
        "Dopuszczenie uprawnionej somatycznej terapii genowej nastawionej na leczenie choroby, z zachowaniem medycznych standardów bezpieczeństwa.",
        "Zakaz eksperymentów genetycznych, które traktują ludzkie embriony jedynie jako zużywalny materiał badawczy, tam gdzie kłóci się to z ochroną życia ludzkiego od poczęcia.",
        "Utrzymanie mocnego domniemania przeciw dziedzicznemu ulepszaniu linii germinalnej.",
        "Zakaz komercyjnego tworzenia dzieci na zamówienie, wybieranych lub modyfikowanych genetycznie.",
        "Odróżnianie terapii od ulepszania inteligencji, wyglądu, siły lub innych pożądanych cech.",
        "Odrzucenie państwowych programów eugenicznych.",
        "Ochrona informacji genetycznej jako danych osobowych o szczególnej wrażliwości.",
      ],
      keywords: [
        "inżynieria genetyczna",
        "edycja genów",
        "CRISPR",
        "linia germinalna",
        "embriony",
        "terapia genowa",
        "dzieci na zamówienie",
        "eugenika",
      ],
    },

    "transhumanism-and-human-enhancement": {
      title: "Transhumanizm i ulepszanie człowieka",
      shortAnswer:
        "Medycyna może leczyć i przywracać, ale człowieka nie wolno traktować jako surowca do technologicznej optymalizacji lub zastąpienia.",
      position: [
        "Godność człowieka nie zależy od inteligencji, siły, długowieczności, produktywności ani technologicznego wzmocnienia.",
      ],
      policies: [
        "Dopuszczenie leczniczych protez, wszczepów i technologii wspomagających.",
        "Odróżnianie przywracania normalnych funkcji człowieka od ideologicznych przedsięwzięć zastąpienia zwyczajnej ludzkości zaprojektowanymi następcami.",
        "Zakaz przymusowego wzmocnienia neurologicznego, cybernetycznego lub genetycznego jako warunku pracy albo udziału w życiu obywatelskim.",
        "Nietworzenie prawnie uprzywilejowanych kategorii osób zmodyfikowanych technologicznie.",
        "Poddanie wojskowych programów wzmacniania człowieka ścisłej ocenie etycznej.",
        "Nałożenie surowych ograniczeń na interfejsy mózg–komputer naruszające prywatność myśli lub samodzielność.",
        "Zakaz — z reguły — dziedzicznego ulepszania przyszłych pokoleń.",
      ],
      keywords: [
        "transhumanizm",
        "ulepszanie człowieka",
        "cybernetyka",
        "interfejs mózg–komputer",
        "wzmacnianie ciała",
        "godność człowieka",
        "bioetyka",
      ],
    },

    "purpose-of-education": {
      title: "Cel edukacji",
      shortAnswer:
        "Edukacja powinna przekazywać cywilizację, zanim będzie próbowała ją przemieniać, wraz z poważną nauką chrześcijaństwa, historii, cywilizacji antycznej, nauk przyrodniczych i sztuk.",
      position: [
        "Edukacja powinna przekazywać cywilizację, zanim będzie próbowała ją przemieniać. Chrześcijaństwo, historia narodowa i europejska, cywilizacja antyczna, filozofia, literatura, nauki przyrodnicze, matematyka, muzyka, sztuka, rzemiosło i odpowiedzialność obywatelska — wszystko to powinno być przedmiotem poważnej nauki.",
      ],
      keywords: [
        "edukacja",
        "program nauczania",
        "szkoły",
        "przekazywanie dziedzictwa",
        "edukacja klasyczna",
      ],
    },

    homeschooling: {
      title: "Edukacja domowa",
      shortAnswer:
        "Edukacja domowa powinna być legalna i chroniona, ponieważ rodzice są pierwszymi wychowawcami swoich dzieci.",
      position: [
        "Edukacja domowa powinna być legalna i chroniona, ponieważ rodzice są pierwszymi wychowawcami swoich dzieci.",
      ],
      policies: [
        "Rodzice mogą uczyć dzieci w domu.",
        "Wyraźnie katolicka edukacja domowa jest dozwolona.",
        "Państwo może wymagać podstawowych kompetencji w czytaniu i pisaniu, w matematyce i w wiedzy obywatelskiej.",
        "Okresowa ocena może sprawdzać, czy dzieci rzeczywiście otrzymują wykształcenie.",
        "Państwo nie powinno używać nadzoru do narzucania zgodności ideologicznej.",
      ],
      keywords: ["edukacja domowa", "nauczanie domowe", "rodzice", "program nauczania"],
    },

    "private-catholic-and-independent-schools": {
      title: "Szkoły prywatne, katolickie i niezależne",
      shortAnswer:
        "Wielopostaciowy system edukacji obejmujący szkoły katolickie, prywatne, klasyczne, zawodowe i klasztorne, w którym środki publiczne mogą iść za rodzinami.",
      position: [
        "Restore Europa popiera wielopostaciowy system edukacji obejmujący szkoły katolickie, szkoły prywatne, szkoły klasyczne, instytucje zawodowe, szkoły klasztorne i edukację domową.",
      ],
      policies: [
        "Szkoły katolickie chronione prawem.",
        "Szkoły niezależne mogą utrzymywać własne programy nauczania i własny charakter moralny.",
        "Środki publiczne mogą iść za rodzinami poprzez bony edukacyjne, odliczenia podatkowe albo systemy równoważne.",
        "Szkoły katolickie mogą nauczać doktryny katolickiej i organizować życie szkolne zgodnie z katolicką nauką moralną.",
        "Można wymagać podstawowych standardów kształcenia, nie wymuszając zgodności ideologicznej.",
      ],
      keywords: [
        "szkoły prywatne",
        "szkoły katolickie",
        "bony edukacyjne",
        "wybór szkoły",
        "szkoły niezależne",
      ],
    },

    "universities-and-academic-freedom": {
      title: "Uniwersytety i wolność akademicka",
      shortAnswer:
        "Uniwersytety powinny zachować rzeczywistą wolność akademicką, przestając zarazem działać jako instytucje obowiązkowego szerzenia ideologii.",
      position: [
        "Uniwersytety powinny zachować rzeczywistą wolność akademicką, przestając zarazem działać jako instytucje obowiązkowego szerzenia ideologii.",
      ],
      policies: [
        "Teorie liberalne, marksistowskie, świeckie, katolickie, nacjonalistyczne i inne mogą być badane i omawiane akademicko.",
        "Uniwersytety publiczne nie powinny instytucjonalnie narzucać ideologii liberalnej ani postępowej jako doktryny niepodlegającej zakwestionowaniu.",
        "Od studentów nie powinno się wymagać wyznawania stanowisk ideologicznych niezwiązanych z kompetencją akademicką.",
        "Zatrudnianie i awanse nie powinny dyskryminować legalnej nauki katolickiej, konserwatywnej ani tradycjonalistycznej.",
        "Chrześcijaństwo, cywilizacja antyczna, historia Europy, filozofia i zachodnia tradycja intelektualna powinny mieć poważne miejsce instytucjonalne.",
      ],
      principle: "Edukacja powinna dążyć do prawdy, a nie wytwarzać zgodność ideologiczną.",
      keywords: [
        "uniwersytety",
        "wolność akademicka",
        "szkolnictwo wyższe",
        "badania naukowe",
        "ideologia",
      ],
    },

    "state-schools-and-christianity": {
      title: "Szkoły państwowe i chrześcijaństwo",
      shortAnswer:
        "Szkoły państwowe powinny mieć chrześcijańską orientację cywilizacyjną, a nie laicką.",
      position: [
        "Szkoły państwowe powinny mieć chrześcijańską orientację cywilizacyjną, a nie laicką.",
      ],
      policies: [
        "Chrześcijaństwo powinno być nauczane jako fundament cywilizacji europejskiej, jej historii, filozofii, moralności, sztuki i kultury.",
        "Nauka katolicka powinna mieć uznane miejsce w edukacji publicznej w społeczeństwach o większości katolickiej.",
        "Laickości nie należy przedstawiać jako jedynego intelektualnie uprawnionego światopoglądu.",
        "Historię narodową i europejską należy nauczać jako dziedzictwo, a nie jedynie jako nagromadzoną winę.",
      ],
      keywords: [
        "szkoły państwowe",
        "religia w szkole",
        "laickość",
        "chrześcijaństwo",
        "edukacja publiczna",
      ],
    },

    "sex-education-in-schools": {
      title: "Edukacja seksualna w szkołach",
      shortAnswer:
        "Szkoły mogą nauczać rzeczowej biologii rozrodu, ale formacja moralna w sprawach płciowości należy przede wszystkim do rodziców i wybranych przez nich instytucji religijnych.",
      position: [
        "Rodzice i Kościół powinni być pierwszymi autorytetami w formacji płciowej i moralnej. Szkoły mogą nauczać rzeczowej biologii rozrodu, ale nie powinny obchodzić władzy rodzicielskiej przez nauczanie wyraźnie ideologiczne albo o treści jednoznacznie seksualnej.",
      ],
      policies: [
        "Biologia może obejmować anatomię, rozmnażanie człowieka, ciążę i zdrowie.",
        "Nauczanie moralne o płciowości, antykoncepcji i relacjach należy przede wszystkim do rodziców i wybranych przez nich instytucji religijnych.",
        "Rodzice powinni być informowani o odpowiednich programach nauczania i mogą wycofać dzieci z treści wykraczających poza podstawową naukę biologii.",
        "Szkoły nie powinny wystawiać nieletnich na pornograficzne ani jednoznacznie seksualne materiały dydaktyczne.",
      ],
      keywords: [
        "edukacja seksualna",
        "wychowanie do życia w rodzinie",
        "program nauczania",
        "prawa rodziców",
        "zgoda",
      ],
    },

    "culture-and-homogenization": {
      title: "Kultura przeciw ujednolicaniu",
      shortAnswer:
        "Języki, dialekty, święta, muzyka, kuchnia i rzemiosło powinny pozostać żywą częścią zwyczajnego życia, a nie eksponatami muzealnymi.",
      position: [
        "Języki, dialekty, święta, muzyka, kuchnia, rzemiosło i pamięć historyczna powinny pozostać żywą częścią zwyczajnego życia w Europie, a nie eksponatami muzealnymi ani produktami turystycznymi.",
      ],
      keywords: ["kultura", "dialekty", "święta ludowe", "tradycja", "ujednolicanie"],
    },

    "architecture-and-historic-preservation": {
      title: "Architektura i ochrona zabytków",
      shortAnswer:
        "Architektura publiczna powinna szanować ludzką miarę, materiały miejscowe i tradycję regionu, a tkankę historyczną należy zachowywać wszędzie, gdzie to rozsądnie możliwe.",
      position: [
        "Architektura publiczna powinna szanować ludzką miarę, materiały miejscowe, tradycje regionalne i charakter historyczny. Kościoły, pierzeje ulic, pomniki i ważne budynki zabytkowe należy zachowywać wszędzie, gdzie to rozsądnie możliwe.",
      ],
      keywords: ["architektura", "ochrona zabytków", "dziedzictwo", "miasta", "ludzka miara"],
    },

    "authority-democracy-and-subsidiarity": {
      title: "Władza, demokracja i pomocniczość",
      shortAnswer:
        "Władza powinna być sprawowana na najniższym szczeblu, który jest do tego zdolny. Wybory, przedstawicielstwo i granice konstytucyjne współistnieją z odrzuceniem liberalizmu filozoficznego.",
      position: [
        "Restore Europa odrzuca zarówno anarchiczny indywidualizm, jak i totalną władzę państwa. Wybory, przedstawicielstwo, granice konstytucyjne i udział obywateli mogą współistnieć z odrzuceniem liberalizmu filozoficznego.",
      ],
      policies: [
        "Władza powinna być sprawowana na najniższym szczeblu, który jest do tego zdolny.",
        "O sprawach rodziny rozstrzyga rodzina, o sprawach lokalnych gmina; regiony zachowują rzeczywistą samorządność; o sprawach narodowych rozstrzyga naród.",
        "Rząd pozostaje ograniczony prawem, pomocniczością i przeciwwagą instytucji.",
        "Spór polityczny i opozycja pozostają uprawnione.",
      ],
      keywords: ["pomocniczość", "demokracja", "władza", "federalizm", "liberalizm"],
    },

    "free-speech-and-public-doctrine": {
      title: "Wolność słowa i doktryna publiczna",
      shortAnswer:
        "Szeroka dyskusja polityczna i akademicka jest chroniona; wypowiedź bezpośrednio podżegająca do przemocy, terroryzmu lub czynu przestępnego — nie.",
      position: [
        "Restore Europa popiera szeroką dyskusję polityczną i akademicką, ale nie traktuje wypowiedzi jako nieograniczonej tam, gdzie bezpośrednio podżega do przemocy, terroryzmu lub czynu przestępnego albo stanowi umyślną profanację tego, co święte.",
      ],
      policies: [
        "Krytyka rządu pozostaje legalna.",
        "Niezgoda polityczna i teologiczna pozostaje legalna.",
        "Komunizm, laickość i liberalizm mogą być omawiane i bronione przez poszczególne osoby, chociaż nie określają porządku konstytucyjnego.",
        "Bezpośrednie podżeganie do przemocy lub terroryzmu może być zakazane.",
        "Pornografia pozostaje zakazana na podstawie odrębnego stanowiska.",
        "Umyślne świętokradztwo może być ograniczone na podstawie stanowiska o bluźnierstwie.",
      ],
      principle: "Wyznaniowy porządek konstytucyjny nie musi stać się systemem nadzoru nad myślą.",
      keywords: ["wolność słowa", "swoboda wypowiedzi", "cenzura", "podżeganie", "prasa"],
    },

    "prisons-punishment-and-rehabilitation": {
      title: "Więzienia, kara i resocjalizacja",
      shortAnswer:
        "Kara proporcjonalna, ochrona społeczeństwa, naprawienie szkody tam, gdzie to możliwe, oraz poważna resocjalizacja nastawiona na skruchę i powrót do społeczeństwa.",
      position: [
        "Wymiar sprawiedliwości w sprawach karnych powinien łączyć karę proporcjonalną, ochronę społeczeństwa, naprawienie szkody tam, gdzie to możliwe, oraz poważną resocjalizację nastawioną na skruchę i powrót do społeczeństwa.",
      ],
      policies: [
        "Kary proporcjonalne do wagi przestępstwa.",
        "Długotrwałe odizolowanie groźnych sprawców przemocy i przestępców powtarzających czyny tam, gdzie jest to konieczne.",
        "Więzienia powinny utrzymywać dyscyplinę i porządek.",
        "Więźniowie powinni mieć dostęp do pracy, nauki, szkolenia zawodowego, opieki duchowej i leczenia uzależnień.",
        "Kara nie powinna być rozmyślnie poniżająca ani okrutna.",
      ],
      principle: "Sprawiedliwość nie jest ani zemstą, ani pobłażaniem.",
      keywords: ["więzienia", "wymiar kary", "kara", "resocjalizacja", "prawo karne"],
    },

    "criminal-sentencing": {
      title: "Wymiar kary w prawie karnym",
      shortAnswer:
        "Kara powinna być proporcjonalna do wagi czynu i winy, chronić społeczeństwo, zapewniać naprawienie szkody tam, gdzie to możliwe, i dążyć do resocjalizacji tam, gdzie jest ona realna.",
      position: [
        "Wymiar kary powinien wyraźnie odróżniać drobne przewinienie od umyślnej ciężkiej przemocy. Kara może w sposób uprawniony służyć ochronie, proporcjonalnej odpłacie, przywróceniu porządku publicznego, naprawieniu szkody, odstraszaniu i resocjalizacji.",
      ],
      policies: [
        "Wymóg skazania w postępowaniu zgodnym z prawem i rzetelnym, zanim zostanie nałożona kara.",
        "Traktowanie umyślności, premedytacji, okrucieństwa, wykorzystania bezbronnych ofiar, działania w zorganizowanej przestępczości i powtarzania poważnych czynów jako okoliczności obciążających.",
        "Pierwszeństwo dla proporcjonalnych grzywien, naprawienia szkody, prac społecznych, dozoru i leczenia w odpowiednich czynach drobnych lub popełnionych bez użycia przemocy.",
        "Stosowanie znacznych kar pozbawienia wolności za poważną przemoc, rozbój, porwanie, poważną przestępczość zorganizowaną, poważny handel ludźmi, poważną korupcję, wielkie oszustwo, poważne przestępstwa seksualne i powtarzane czyny z użyciem przemocy.",
        "Traktowanie zgwałcenia i poważnego wykorzystywania seksualnego dzieci jako przestępstw wyjątkowo ciężkich.",
        "Stosowanie długotrwałego lub dożywotniego pozbawienia wolności tam, gdzie jest to właściwe, w najcięższych sprawach niezagrożonych karą śmierci.",
        "Dopuszczenie wąsko uregulowanych środków zabezpieczających po odbyciu kary wyłącznie tam, gdzie sprawca w sposób dowiedziony pozostaje poważnym zagrożeniem, przy zachowaniu rzetelnej procedury.",
        "Dla precyzji prawnej karanie przestępnych czynów seksualnych — wykorzystywania, wyzysku, uwodzenia dzieci w celach seksualnych i nielegalnych materiałów przedstawiających krzywdzenie dzieci — a nie samej diagnozy psychiatrycznej ani samego pociągu.",
      ],
      limits: [
        "Dokładne liczbowe widełki kar pozostają sprawą późniejszej redakcji kodeksu karnego, a nie czymś, co wymyśla się bez podstawy dowodowej.",
      ],
      keywords: [
        "wymiar kary",
        "kara",
        "więzienie",
        "zabójstwo",
        "zgwałcenie",
        "wykorzystywanie seksualne dzieci",
        "resocjalizacja",
        "naprawienie szkody",
      ],
    },

    "death-penalty": {
      title: "Kara śmierci",
      shortAnswer:
        "Restore Europa uznaje co do zasady tradycyjną dopuszczalność kary śmierci, zastrzeżoną dla wypadków wyjątkowych, dotyczących najcięższych przestępstw.",
      position: [
        "Restore Europa uznaje co do zasady tradycyjną katolicką dopuszczalność kary śmierci, ale zastrzega ją dla wypadków wyjątkowych, dotyczących najcięższych przestępstw.",
      ],
      policies: [
        "Potencjalnie stosowalna do kwalifikowanego zabójstwa umyślnego, zabójstwa masowego, terroryzmu połączonego z umyślnym zabijaniem, ludobójstwa i przestępstw porównywalnie ciężkich.",
        "Tylko po pełnym i rzetelnym procesie, przy wysokim progu dowodowym i rzeczywistym prawie do odwołania.",
        "Żadnego wykonania kary tam, gdzie pozostaje poważna wątpliwość co do winy.",
        "Żadnego wykonania kary na osobach nieletnich.",
        "Wymierzana wyłącznie przez uprawnioną władzę cywilną i nigdy nieużywana dla samej zemsty.",
      ],
      keywords: ["kara śmierci", "kara główna", "wykonanie kary śmierci", "zabójstwo", "abolicja"],
    },

    "capital-punishment-for-aggravated-sexual-crimes": {
      title: "Kara śmierci za kwalifikowane przestępstwa seksualne",
      shortAnswer:
        "Kara śmierci może być prawnie dostępna, ale nie obowiązkowa, za najbardziej kwalifikowane formy zgwałcenia i wykorzystywania seksualnego dzieci.",
      position: [
        "Restore Europa umieszcza wyjątkowo kwalifikowane przestępstwa seksualne w kategorii czynów, które mogą kwalifikować się do kary śmierci, z zachowaniem tych samych nadzwyczaj surowych gwarancji proceduralnych i dowodowych, jakie obowiązują w innych sprawach zagrożonych tą karą.",
      ],
      policies: [
        "Do wypadków potencjalnie kwalifikujących się należą: zgwałcenie kwalifikowane, połączone z wyjątkowym okrucieństwem, zgwałcenie powtarzane lub seryjne, zgwałcenie połączone z porwaniem albo torturami, kwalifikowane wykorzystywanie seksualne dzieci, systematyczne wykorzystywanie wielu dzieci oraz zorganizowany wyzysk seksualny w okolicznościach wyjątkowo ciężkich.",
        "Pełny i rzetelny proces karny jest obowiązkowy.",
        "Kary śmierci nie wolno wymierzyć tam, gdzie pozostaje poważna wątpliwość co do winy.",
        "Wymóg rzeczywistej kontroli odwoławczej oraz rozpoznania nowych dowodów istotnie uniewinniających przed wykonaniem kary.",
        "Wykorzystywanie dowodów potwierdzających i dowodów z badań kryminalistycznych wszędzie tam, gdzie da się je rozsądnie uzyskać; dowód słaby lub niepewny nigdy nie może uzasadniać wyroku śmierci.",
        "Zachowanie dostępności kary dożywotniego pozbawienia wolności także tam, gdzie czyn formalnie kwalifikuje się do kary śmierci.",
        "Żadnego wykonania kary na osobach nieletnich.",
      ],
      keywords: [
        "kara śmierci",
        "kara główna",
        "zgwałcenie kwalifikowane",
        "wykorzystywanie seksualne dzieci",
        "przemoc seksualna",
        "próg dowodowy",
        "dożywotnie pozbawienie wolności",
      ],
    },

    "firearms-and-self-defense": {
      title: "Broń palna i obrona własna",
      shortAnswer:
        "Uregulowane posiadanie broni palnej przez osoby cywilne w celach zgodnych z prawem, przy wymogach pozwolenia, szkolenia i bezpiecznego przechowywania.",
      position: [
        "Restore Europa popiera uregulowane posiadanie broni palnej przez osoby cywilne w celach zgodnych z prawem, w tym dla obrony własnej, łowiectwa, strzelectwa sportowego i kolekcjonerstwa.",
      ],
      policies: [
        "Wymagane pozwolenie.",
        "Obowiązkowe szkolenie w zakresie bezpieczeństwa.",
        "Wymogi bezpiecznego przechowywania.",
        "Surowsza ocena przy noszeniu broni publicznie lub w ukryciu.",
        "Sprawcy poważnych czynów z użyciem przemocy tracą prawo do broni.",
        "Nielegalny handel bronią i przestępne jej posiadanie karane surowo.",
      ],
      principle:
        "Państwo nie musi zmonopolizować każdego środka uprawnionej obrony własnej, ale posiadanie broni palnej niesie poważną odpowiedzialność.",
      keywords: ["broń palna", "broń", "obrona własna", "łowiectwo", "pozwolenie na broń"],
    },

    "universal-healthcare-access": {
      title: "Powszechny dostęp do opieki zdrowotnej",
      shortAnswer:
        "Powszechny dostęp do opieki niezbędnej i medycznie koniecznej, z zabezpieczeniami przeciw nadużywaniu i marnotrawstwu.",
      position: [
        "Restore Europa popiera powszechny dostęp do niezbędnej i medycznie koniecznej opieki zdrowotnej, dopuszczając zarazem zabezpieczenia przeciw nadużywaniu i marnotrawstwu.",
      ],
      policies: [
        "Pomoc w nagłych wypadkach dostępna dla każdego.",
        "Dostępna podstawowa opieka lekarska, leki niezbędne, opieka położnicza i leczenie poważnych chorób.",
        "Umiarkowane współpłacenie może dotyczyć świadczeń nieniezbędnych albo o niskim priorytecie.",
        "Dzieci, gospodarstwa domowe o niskich dochodach, poważne choroby przewlekłe i sytuacje nagłe mogą być zwolnione ze współpłacenia.",
        "Lekarze pierwszego kontaktu mogą rozstrzygać o dostępie do opieki specjalistycznej tam, gdzie jest to medycznie uzasadnione.",
        "Profilaktyka, rehabilitacja i opieka paliatywna powinny otrzymać mocne wsparcie.",
        "Oszustwa, zbędne procedury i nadmierne przepisywanie leków czynnie kontrolowane.",
      ],
      principle:
        "Koniecznej opieki nie wolno odmawiać z powodu ubóstwa, ale zasoby ochrony zdrowia są ograniczone i należy je wykorzystywać odpowiedzialnie.",
      keywords: ["ochrona zdrowia", "powszechny dostęp", "współpłacenie", "szpitale", "medycyna"],
    },

    "catholic-medical-ethics": {
      title: "Katolicka etyka lekarska",
      shortAnswer:
        "Publiczna ochrona zdrowia powinna szanować katolicką etykę lekarską, a szpitale katolickie powinny móc swobodnie utrzymywać własne standardy etyczne.",
      position: [
        "Publiczna ochrona zdrowia powinna szanować katolicką etykę lekarską. Procedury, które Restore Europa uznaje za moralnie niedopuszczalne w świetle nauki katolickiej, nie powinny otrzymywać zwyczajnego finansowania publicznego, a szpitale katolickie powinny móc swobodnie utrzymywać swoje standardy etyczne.",
      ],
      keywords: [
        "etyka lekarska",
        "klauzula sumienia",
        "szpitale katolickie",
        "bioetyka",
        "finansowanie",
      ],
    },

    "environmental-stewardship": {
      title: "Gospodarowanie środowiskiem",
      shortAnswer:
        "Przyroda jest dziedzictwem powierzonym ludzkości, a nie towarem bez granic ani bóstwem, i należy nią gospodarować odpowiednio do tego.",
      position: [
        "Przyroda jest dziedzictwem powierzonym ludzkości, a nie towarem bez granic ani bóstwem. Restore Europa popiera troskliwe gospodarowanie lasami, rzekami, ziemią uprawną, górami, wybrzeżami i różnorodnością biologiczną.",
      ],
      policies: [
        "Zdrowe gleby i czysta woda.",
        "Rolnictwo lokalne i regionalne łańcuchy dostaw.",
        "Odpowiedzialna gospodarka leśna.",
        "Rzeczy trwałe i naprawa zamiast jednorazowości.",
        "Odbudowa zniszczonych ekosystemów.",
        "Układy osadnicze, które zachowują zarazem wspólnotę i krajobraz.",
      ],
      keywords: [
        "środowisko",
        "gospodarowanie dziedzictwem",
        "przyroda",
        "różnorodność biologiczna",
        "ziemia uprawna",
      ],
    },

    "energy-policy": {
      title: "Polityka energetyczna: doktryna ogólna",
      shortAnswer:
        "Politykę energetyczną należy oceniać po niezawodności, odporności strategicznej, dostępności cenowej, trosce o środowisko i długofalowym dobru ludzi, a nie po wierności jednej technologii.",
      position: [
        "Energia jest infrastrukturą strategiczną. Narody Europy powinny zachować dostatecznie duże i zróżnicowane moce krajowe, by utrzymać niezależność polityczną, wytwórczy przemysł i bezpieczeństwo gospodarstw domowych.",
      ],
      policies: [
        "Utrzymanie zróżnicowanych i odpornych krajowych źródeł energii.",
        "Zmniejszenie groźnej zależności od strategicznie niepewnych dostawców zagranicznych.",
        "Ocena technologii po wpływie na środowisko w całym cyklu życia, niezawodności, koszcie, zajętości terenu i odporności strategicznej.",
        "Utrzymanie dostatecznej mocy sterowalnej dla stabilności sieci.",
        "Inwestowanie w przesył i magazynowanie tam, gdzie jest to technicznie i ekonomicznie uzasadnione.",
        "Unikanie rozwiązań, które czynią zwyczajne ogrzewanie, transport albo energię elektryczną ekonomicznie niedostępnymi.",
        "Ochrona krajobrazów i wspólnot lokalnych.",
        "Dopuszczenie wielości technologii, a nie jednego nakazanego wszędzie źródła energii.",
      ],
      keywords: [
        "bezpieczeństwo energetyczne",
        "energia elektryczna",
        "niezawodność",
        "infrastruktura strategiczna",
        "dostępność cenowa",
        "gospodarowanie dziedzictwem",
        "energia",
      ],
    },

    "nuclear-energy": {
      title: "Energia jądrowa",
      shortAnswer:
        "Energetyka jądrowa może być dopuszczona i wspierana tam, gdzie jest bezpieczna, niezawodna, strategicznie pożyteczna i odpowiedzialna wobec środowiska.",
      position: [
        "Manifest nie zawiera żadnej kategorycznej zasady przeciw energii jądrowej. Energię jądrową należy oceniać praktycznie, a nie ideologicznie.",
      ],
      policies: [
        "Dopuszczenie budowy i dalszej eksploatacji elektrowni spełniających wymagające standardy bezpieczeństwa.",
        "Wymóg wiarygodnego długoterminowego postępowania z odpadami promieniotwórczymi.",
        "Zachowanie krajowych kompetencji w inżynierii jądrowej tam, gdzie jest to wykonalne.",
        "Ocena nowoczesnych technologii reaktorowych według wykazanego bezpieczeństwa i wyników ekonomicznych.",
        "Dopuszczenie, by energia jądrowa stanowiła część zróżnicowanego systemu niskoemisyjnego.",
        "Niewymaganie budowy energetyki jądrowej tam, gdzie warunki miejscowe czynią inny miks rozsądniejszym.",
      ],
      keywords: [
        "energetyka jądrowa",
        "energia jądrowa",
        "reaktory",
        "bezpieczeństwo energetyczne",
        "energia elektryczna",
        "odpady promieniotwórcze",
      ],
    },

    "fossil-fuels": {
      title: "Paliwa kopalne",
      shortAnswer:
        "Paliw kopalnych nie należy zakazywać ideologicznie, bez względu na ich funkcję strategiczną czy gospodarczą, ale zbędne zanieczyszczenie i zależność, której można uniknąć, należy zmniejszać.",
      position: [
        "Węgiel, ropę i gaz należy oceniać po kosztach środowiskowych, niezawodności, konieczności strategicznej i dostępnych zamiennikach.",
      ],
      policies: [
        "Żadnego natychmiastowego całkowitego zakazu paliw kopalnych.",
        "Zachowanie koniecznych dostaw dla transportu, przemysłu, ogrzewania i rezerw strategicznych w czasie, gdy rozwijane są rozwiązania zamienne.",
        "Zmniejszenie ciężkiego zanieczyszczenia powietrza i niszczących środowisko praktyk wydobywczych.",
        "Wspieranie efektywności tam, gdzie zmniejsza zarazem koszt i zużycie surowców.",
        "Unikanie zależności od wrogich lub niepewnych dostawców zagranicznych.",
        "Odchodzenie od zastosowań szczególnie szkodliwych, gdy istnieją niezawodne i ekonomicznie realne zamienniki.",
        "Unikanie harmonogramów przejścia, które niszczą niezbędne moce przemysłowe albo czynią podstawową energię niedostępną cenowo.",
      ],
      keywords: [
        "paliwa kopalne",
        "węgiel",
        "ropa naftowa",
        "gaz ziemny",
        "bezpieczeństwo energetyczne",
        "zanieczyszczenie",
      ],
    },

    "renewable-energy": {
      title: "Energia odnawialna",
      shortAnswer:
        "Energię odnawialną należy wspierać tam, gdzie jest technicznie solidna, ekonomicznie rozsądna i zgodna z krajobrazem, wspólnotami i niezawodnością sieci.",
      position: [
        "Wiatr, słońce, woda, ciepło ziemi i inne źródła są narzędziami, a nie celami moralnymi, i należy je oceniać według warunków miejscowych.",
      ],
      policies: [
        "Dopuszczenie i wspieranie wytwarzania odnawialnego tam, gdzie ma to sens gospodarczy i środowiskowy.",
        "Ochrona krajobrazów historycznych i obszarów wrażliwych ekologicznie przed źle zaplanowanymi inwestycjami przemysłowymi.",
        "Unikanie zbędnego niszczenia żyznej ziemi uprawnej pod inwestycje energetyczne o małej gęstości mocy.",
        "Uczciwe rozliczenie potrzeb magazynowania, przesyłu i mocy rezerwowej.",
        "Wspieranie lokalnej i wspólnotowej własności energetyki tam, gdzie jest to wykonalne.",
        "Nienakazywanie budowy tylko po to, by osiągnąć cele liczbowe, bez względu na niezawodność i koszt miejscowy.",
      ],
      keywords: [
        "energia odnawialna",
        "fotowoltaika",
        "wiatr",
        "hydroenergetyka",
        "energia geotermalna",
        "niezawodność sieci",
        "krajobraz",
      ],
    },

    "climate-policy": {
      title: "Polityka klimatyczna",
      shortAnswer:
        "Troskliwe gospodarowanie środowiskiem obejmuje roztropne ograniczanie zmiany klimatu i przystosowanie się do niej, ale polityka klimatyczna nie uzasadnia nieograniczonej kontroli centralnej ani rozwiązań, które nakładają nieproporcjonalne ciężary przy znikomej korzyści.",
      position: [
        "Ryzykom klimatycznym należy zaradzać przez praktyczną politykę środowiskową, rozwój techniki, odporną infrastrukturę i skuteczną współpracę międzynarodową tam, gdzie problemy rzeczywiście przekraczają granice.",
      ],
      policies: [
        "Wspieranie ekonomicznie rozsądnego zmniejszania emisji gazów cieplarnianych.",
        "Pierwszeństwo dla działań o wymiernej korzyści środowiskowej.",
        "Stosowanie energetyki jądrowej, odnawialnej, efektywności i innych technologii według praktycznych wyników.",
        "Inwestowanie w przystosowanie i odporność na powodzie, upały, susze, pożary lasów i inne zagrożenia.",
        "Ochrona lasów, gleb, systemów wodnych i ekosystemów, które wzmacniają odporność.",
        "Unikanie rozwiązań, które nieproporcjonalnie zubożają zwyczajne rodziny, dając znikomą korzyść środowiskową.",
        "Odrzucenie używania polityki klimatycznej jako ogólnego usprawiedliwienia stałego masowego nadzoru albo obowiązkowej kontroli cyfrowej.",
        "Ustalanie dokładnych celów emisyjnych tylko po technicznej analizie dowodów naukowych, wykonalności i warunków gospodarczych.",
      ],
      limits: [
        "Manifest nie określa dat zerowej emisji netto, stawek podatku od emisji dwutlenku węgla, celów temperaturowych ani wiążących limitów emisji. Tych pytań liczbowych tutaj nie wywodzimy.",
      ],
      keywords: [
        "zmiana klimatu",
        "emisje",
        "dwutlenek węgla",
        "przystosowanie",
        "odporność",
        "środowisko",
        "energia",
        "gospodarowanie dziedzictwem",
      ],
    },

    "foreign-policy-doctrine": {
      title: "Doktryna polityki zagranicznej",
      shortAnswer:
        "Niezależność strategiczna zamiast ambicji imperialnych, prowadzona roztropnością, uzasadnionym interesem narodowym i mocnym założeniem przeciw wojnie, bez której można się obejść.",
      position: [
        "Europejska polityka zagraniczna powinna dążyć do niezależności strategicznej, a nie do ambicji imperialnych. Powinny nią rządzić roztropność, uzasadniony interes narodowy, obrona niewinnych tam, gdzie jest realnie możliwa, oraz mocne założenie przeciw wojnie, bez której można się obejść.",
      ],
      policies: [
        "Niezależność strategiczna w żywności, energii, infrastrukturze, medycynie i przemyśle podstawowym.",
        "Sprzeciw wobec wojen ideologicznych, których celem jest przebudowa obcych cywilizacji według abstrakcyjnych modeli politycznych.",
        "Narody Europy powinny mieć zdolność do obrony własnej i do zabezpieczenia swoich granic.",
      ],
      keywords: [
        "polityka zagraniczna",
        "obrona",
        "niezależność strategiczna",
        "wojna",
        "interwencja",
      ],
    },

    nato: {
      title: "NATO",
      shortAnswer:
        "Restore Europa odnosi się sceptycznie do trwałej zależności od NATO i opowiada się za większą narodową i europejską niezależnością strategiczną.",
      position: [
        "Współpraca obronna może być pożyteczna, ale członkostwa w NATO i orientacji sojuszniczej nie należy traktować jako wymogów niepodlegających zakwestionowaniu ani trwałych.",
      ],
      policies: [
        "Budowanie wiarygodnych narodowych i europejskich zdolności obronnych.",
        "Zmniejszenie trwałej zależności strategicznej od Stanów Zjednoczonych.",
        "Zachowanie zdolności do współpracy z państwami NATO w wywiadzie, technologii obronnej, ćwiczeniach i wobec rzeczywistych wspólnych zagrożeń.",
        "Nieuczestniczenie w wojnach tylko po to, by okazać solidarność sojuszniczą.",
        "Utrzymanie narodowej, konstytucyjnej kontroli nad użyciem sił zbrojnych.",
        "Odrzucenie wojen ideologicznych zmierzających do przebudowy obcych społeczeństw.",
        "Pozostawienie długoterminowego członkostwa w NATO otwartym na ponowną ocenę, jeśli niezależność strategiczną da się zabezpieczyć przez odpowiedniejszą strukturę obronną.",
      ],
      keywords: [
        "NATO",
        "artykuł 5",
        "obrona zbiorowa",
        "niezależność strategiczna",
        "obrona europejska",
        "sojusze wojskowe",
        "sojusz",
      ],
    },

    russia: {
      title: "Rosja",
      shortAnswer: "Ani trwałe zbliżenie z Rosją, ani trwała wrogość ideologiczna wobec Rosji.",
      position: [
        "Rosja jest obcym mocarstwem, z którym narody Europy mogą współpracować tam, gdzie interesy się zbiegają, i któremu mogą się przeciwstawiać tam, gdzie interesy są sprzeczne.",
      ],
      policies: [
        "Ocena stosunków według konkretnych interesów europejskich i narodowych.",
        "Utrzymywanie kanałów dyplomatycznych wszędzie, gdzie to możliwe.",
        "Współpraca w handlu, bezpieczeństwie i innych sprawach tam, gdzie jest materialnie korzystna i moralnie dopuszczalna.",
        "Utrzymanie niezależności strategicznej w energii, obronie i infrastrukturze krytycznej.",
        "Niedopuszczenie do nadmiernego wpływu Rosji na europejskie instytucje polityczne lub gospodarcze.",
        "Niewchodzenie w wojny przeciw Rosji tylko dla prestiżu ideologicznego lub geopolitycznego.",
        "Dopuszczenie proporcjonalnych odpowiedzi na ciężkie naruszenia pokoju albo poważne napaści na niewinną ludność.",
        "Dążenie do rozwiązań wynegocjowanych tam, gdzie jest to realne.",
      ],
      keywords: [
        "Rosja",
        "Federacja Rosyjska",
        "Europa",
        "neutralność",
        "niezależność strategiczna",
        "dyplomacja",
        "Moskwa",
      ],
    },

    ukraine: {
      title: "Ukraina",
      shortAnswer:
        "Restore Europa nie czyni politycznego zbliżenia ani z Ukrainą, ani z Rosją samodzielnym celem europejskiej polityki zagranicznej.",
      position: [
        "Polityką wobec wojny rosyjsko-ukraińskiej powinny rządzić uzasadniony interes narodowy, ochrona niewinnego życia, ryzyko eskalacji i realistyczne dążenie do pokoju, a nie ideologiczna lojalność wobec którejkolwiek ze stron.",
      ],
      policies: [
        "Utrzymanie humanitarnej troski o ludność cywilną dotkniętą wojną.",
        "Wspieranie poważnych wysiłków na rzecz wynegocjowanego i trwałego pokoju tam, gdzie jest to realne.",
        "Unikanie bezterminowych zobowiązań wojskowych bez konkretnego uzasadnienia w bezpieczeństwie narodowym.",
        "Nietraktowanie odbudowy, zmiany władzy ani trwałej konfrontacji geopolitycznej jako automatycznych zobowiązań Europy.",
        "Ocenianie pomocy wojskowej indywidualnie, według interesu narodowego, proporcjonalności, ryzyka eskalacji i moralnych granic użycia siły.",
        "Odróżnianie pomocy humanitarnej dla ludności cywilnej od bezpośredniego udziału w konflikcie zbrojnym.",
        "Unikanie trwałej wrogości wobec narodu ukraińskiego czy rosyjskiego.",
      ],
      keywords: [
        "Ukraina",
        "Rosja",
        "wojna",
        "neutralność",
        "negocjacje pokojowe",
        "pomoc wojskowa",
        "polityka zagraniczna",
        "Kijów",
      ],
    },

    "united-states": {
      title: "Stany Zjednoczone",
      shortAnswer:
        "Konstruktywna współpraca ze Stanami Zjednoczonymi bez zależności politycznej, wojskowej, technologicznej ani kulturowej.",
      position: [
        "Stany Zjednoczone mogą być ważnym partnerem, ale narody Europy powinny zachować samodzielność strategiczną i kulturową.",
      ],
      policies: [
        "Utrzymywanie normalnych stosunków dyplomatycznych i handlowych.",
        "Współpraca w obronie, nauce, wywiadzie i handlu tam, gdzie interesy rzeczywiście się zbiegają.",
        "Zmniejszenie krytycznej zależności od amerykańskiej ochrony wojskowej i infrastruktury strategicznej.",
        "Zmniejszenie nadmiernej zależności od dominujących zagranicznych platform technologicznych.",
        "Ochrona instytucji europejskich przed obcą ingerencją polityczną lub korporacyjną.",
        "Utrzymanie niezależności kulturowej wobec przywożonego ujednolicania komercyjnego.",
        "Odrzucenie automatycznego przyłączania się do amerykańskich priorytetów w polityce zagranicznej.",
      ],
      keywords: [
        "Stany Zjednoczone",
        "Ameryka",
        "autonomia strategiczna",
        "niezależność Europy",
        "technologia",
        "NATO",
        "atlantyzm",
      ],
    },

    china: {
      title: "Chiny",
      shortAnswer:
        "Praktyczne stosunki z Chinami połączone z mocną ochroną przed zależnością strategiczną i przed obcą kontrolą nad infrastrukturą krytyczną.",
      position: [
        "Chin nie należy traktować ani jako wroga ideologicznego, ani jako wzoru dla Europy.",
      ],
      policies: [
        "Utrzymywanie stosunków dyplomatycznych i legalnego handlu.",
        "Różnicowanie łańcuchów dostaw tam, gdzie nadmierna zależność tworzy podatność strategiczną.",
        "Ochrona infrastruktury krytycznej, przemysłu obronnego i technologii wrażliwych przed obcą kontrolą.",
        "Badanie inwestycji w sektorach strategicznie wrażliwych pod kątem ryzyka dla bezpieczeństwa narodowego.",
        "Unikanie zależności od Chin w lekach niezbędnych, telekomunikacji, technologii energetycznej i łańcuchach dostaw istotnych dla wojska.",
        "Przeciwdziałanie szpiegostwu, ukrytym wpływom politycznym i przywożonym systemom na wzór zaufania społecznego.",
        "Współpraca w nauce i handlu tam, gdzie jest to właściwe.",
        "Unikanie zbędnej konfrontacji wojskowej tam, gdzie bezpieczeństwo Europy nie jest bezpośrednio zagrożone.",
      ],
      keywords: [
        "Chiny",
        "ChRL",
        "handel",
        "zależność strategiczna",
        "infrastruktura krytyczna",
        "łańcuchy dostaw",
        "nadzór",
        "Pekin",
      ],
    },

    "israel-and-palestine": {
      title: "Izrael i Palestyna",
      shortAnswer:
        "Żadnego trwałego zbliżenia ani z Izraelem, ani z Palestyną; polityka powinna skupiać się na niewinnym życiu, stabilności regionu, dyplomacji zgodnej z prawem i konkretnych interesach Europy.",
      position: [
        "Konflikt ten nie powinien stać się trwałą zasadą porządkującą europejską politykę zagraniczną ani wewnętrzną.",
      ],
      policies: [
        "Utrzymywanie stosunków dyplomatycznych zgodnie ze zwyczajnym interesem narodowym.",
        "Nieudzielanie bezwarunkowego poparcia politycznego żadnej ze stron.",
        "Potępianie umyślnych napaści na ludność cywilną bez względu na sprawcę.",
        "Żadnej sprzedaży broni ani współpracy wojskowo-przemysłowej z jakąkolwiek stroną konfliktu, dopóki on trwa.",
        "Dopuszczenie pomocy humanitarnej tam, gdzie pewnie dociera ona do ludności cywilnej w rzeczywistej potrzebie.",
        "Unikanie bezpośredniego zaangażowania wojskowego, o ile nie wystąpi nadzwyczajne zagrożenie spełniające surowe kryteria uprawnionej obrony.",
        "Wspieranie realistycznych wysiłków dyplomatycznych zdolnych zmniejszyć przemoc.",
        "Niedopuszczanie do przywożonego zastraszania na tle wyznaniowym ani do przemocy politycznej w Europie.",
      ],
      keywords: [
        "Izrael",
        "Palestyna",
        "Gaza",
        "Bliski Wschód",
        "neutralność",
        "pomoc humanitarna",
        "polityka zagraniczna",
      ],
    },

    "foreign-aid": {
      title: "Pomoc zagraniczna",
      shortAnswer:
        "Pomoc zagraniczna powinna być ograniczona, rozliczalna i skupiona na konkretnych potrzebach humanitarnych lub rozwojowych, a nie na ideologicznym budowaniu państw ani na trwałej zależności.",
      position: [
        "Pierwsze zobowiązania władzy dotyczą jej własnej wspólnoty politycznej, przy czym rzeczywiste obowiązki humanitarne pozostają.",
      ],
      policies: [
        "Pierwszeństwo dla pomocy w sytuacjach nagłych po wojnie, głodzie, klęsce żywiołowej i porównywalnych katastrofach humanitarnych.",
        "Pierwszeństwo dla pomocy dostarczanej blisko dotkniętej ludności tam, gdzie jest skuteczna.",
        "Wymóg przejrzystości i kontroli.",
        "Zamykanie programów w znacznej mierze przejętych przez korupcję lub układy.",
        "Odrzucenie pomocy nastawionej głównie na narzucenie przemiany ideologicznej lub kulturowej.",
        "Pierwszeństwo dla pomocy, która buduje miejscowe zdolności, a nie bezterminową zależność.",
        "Dopuszczenie wsparcia dla medycyny, bezpieczeństwa żywnościowego, czystej wody i odbudowy tam, gdzie jest ono dowodnie skuteczne.",
        "Utrzymanie pomocy jako podporządkowanej uprawnionym zobowiązaniom budżetowym w kraju.",
      ],
      keywords: [
        "pomoc zagraniczna",
        "pomoc humanitarna",
        "pomoc rozwojowa",
        "dobroczynność",
        "rozwój międzynarodowy",
        "uchodźcy",
      ],
    },

    sanctions: {
      title: "Sankcje",
      shortAnswer:
        "Sankcje gospodarcze są narzędziem wyjątkowym, przewidzianym dla wypadków wyjątkowo ciężkich, a nie rutynowym instrumentem ideologicznego opowiadania się po którejś stronie.",
      position: [
        "Sankcje mogą być uzasadnione tam, gdzie ciężkie bezprawie jest jasno wskazane, a przymus niewojskowy daje realną perspektywę jego ograniczenia bez nieproporcjonalnej krzywdy dla ludności cywilnej.",
      ],
      policies: [
        "Wymóg poważnego i jasno wskazanego celu.",
        "Pierwszeństwo dla środków ukierunkowanych przeciw odpowiedzialnym urzędnikom, organizacjom, majątkowi wojskowemu lub sieciom finansowym, a nie dla niewybiórczego karania ludności cywilnej.",
        "Stosowanie sankcji tylko tam, gdzie środki mniej przymusowe nie wystarczają.",
        "Ocena, czy dane środki dają rozsądną perspektywę osiągnięcia celu.",
        "Uwzględnienie przewidywalnej krzywdy niewinnej ludności cywilnej.",
        "Okresowy przegląd sankcji i ich uchylanie, gdy ich uprawniony cel ustaje albo koszty stają się nieproporcjonalne.",
        "Utrzymanie wyłączeń humanitarnych dla niezbędnych dóbr cywilnych wszędzie, gdzie to wykonalne.",
        "Zastrzeżenie bardzo szerokich sankcji gospodarczych dla okoliczności wyjątkowo ciężkich.",
      ],
      keywords: [
        "sankcje",
        "embargo",
        "zamrożenie majątku",
        "polityka zagraniczna",
        "przymus gospodarczy",
        "wyłączenia humanitarne",
      ],
    },

    conscription: {
      title: "Służba wojskowa i gotowość narodowa",
      shortAnswer:
        "Silne wojsko ochotnicze, wyszkolone rezerwy i sprawna fizycznie ludność są rozwiązaniem lepszym niż rutynowy powszechny pobór w czasie pokoju.",
      position: [
        "Służba wojskowa jest zaszczytna i konieczna dla obrony, ale zwyczajne siły zbrojne powinny składać się przede wszystkim z ludzi, którzy wybierają ją dobrowolnie.",
      ],
      policies: [
        "Utrzymanie zawodowych i ochotniczych sił zbrojnych zdolnych do wiarygodnej obrony terytorialnej.",
        "Zachęcanie do służby przez poważne szkolenie, szacunek społeczny i odpowiednie warunki, a nie przez rutynowy przymus.",
        "Utrzymanie wyszkolonej rezerwy i ochotniczego szkolenia rezerwistów.",
        "Nieużywanie powszechnego poboru w czasie pokoju jako modelu zwyczajnego.",
        "Dopuszczenie tymczasowej obowiązkowej służby obrony narodowej w skrajnym stanie zagrożenia obronnego, godzącym w przetrwanie narodu, tam gdzie jest to rzeczywiście konieczne.",
        "Zapewnienie odpowiedniej cywilnej służby zastępczej osobom rzeczywiście odmawiającym służby z powodu sumienia.",
        "Utrzymanie sił zbrojnych w granicach moralnych i prawnych oraz odrzucanie rozkazów oczywiście bezprawnych.",
        "Wzmocnienie szkolnego wychowania fizycznego poważnym, stopniowanym treningiem sprawności, pływaniem, pierwszą pomocą, orientacją w terenie, umiejętnościami terenowymi i dostosowanymi do wieku umiejętnościami obrony cywilnej, z rozsądnymi udogodnieniami ze względu na stan zdrowia i niepełnosprawność.",
      ],
      keywords: [
        "przymusowy pobór",
        "służba wojskowa",
        "powszechna służba na rzecz państwa",
        "rezerwa",
        "sprawność fizyczna",
        "szkoły",
        "obrona cywilna",
        "odmowa służby z powodu sumienia",
        "pobór",
      ],
    },

    "nuclear-weapons": {
      title: "Broń jądrowa",
      shortAnswer:
        "Restore Europa popiera weryfikowalną, wielostronną redukcję i ostateczne zniesienie broni jądrowej.",
      position: [
        "Broń jądrowa tworzy ryzyka i zdolności niszczenia innego rzędu niż zwyczajna broń konwencjonalna i nie powinna być uznawana za normalne, trwałe narzędzie polityki.",
      ],
      policies: [
        "Praca na rzecz międzynarodowo weryfikowalnej redukcji i ostatecznego zniesienia arsenałów jądrowych.",
        "Wspieranie poważnych porozumień o kontroli zbrojeń i o nierozprzestrzenianiu broni jądrowej.",
        "Sprzeciw wobec umyślnych ataków jądrowych na ludność cywilną.",
        "Sprzeciw wobec rozwijania broni jądrowej tylko dla prestiżu geopolitycznego.",
        "Dążenie do rozbrojenia wzajemnego i weryfikowalnego, a nie do posunięć, które jeden kraj wystawiają na przymus jądrowy w sposób wyjątkowy.",
        "Utrzymanie mocnych systemów weryfikacji przeciw potajemnemu zatrzymywaniu zakazanych arsenałów.",
        "Wspieranie środków zmniejszających ryzyko przypadkowego lub nieupoważnionego odpalenia broni jądrowej.",
        "Sprzeciw wobec rozprzestrzeniania broni jądrowej na kolejne państwa.",
        "Utrzymanie odrębności polityki energetyki jądrowej od polityki broni jądrowej.",
      ],
      keywords: [
        "broń jądrowa",
        "rozbrojenie jądrowe",
        "odstraszanie",
        "nieproliferacja",
        "kontrola zbrojeń",
        "broń strategiczna",
      ],
    },
  },
};

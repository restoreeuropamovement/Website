import type { ContentBlock } from "@/lib/content-types";
import type { HomeContent } from "./index";

export const home: HomeContent = {
  hero: {
    headline: "Europa to dziedzictwo, które warto przyjąć.",
    subheadline: "O cywilizację chrześcijańską, europejską i na ludzką miarę.",
    primaryCta: { label: "Przeczytaj nasze zasady", href: "/principles" },
    secondaryCta: { label: "Przeczytaj Manifest", href: "/manifesto" },
  },

  philosophy: {
    eyebrow: "Pytanie zasadnicze",
    statement: ["Gospodarka istnieje dla człowieka.", "Człowiek nie istnieje dla gospodarki."],
    body: [
      {
        type: "lead",
        text: "Systemy polityczne i gospodarcze są narzędziami. Istnieją po to, by człowiek mógł dobrze żyć — nie odwrotnie.",
      },
      {
        type: "paragraph",
        text: "Cywilizacji nie da się zmierzyć samą wielkością produkcji. Produkt krajowy brutto, konsumpcja, produktywność, sprawność administracyjna i możliwości techniczne opisują środki, jakimi dysponuje społeczeństwo. Nie mówią jednak niemal nic o tym, czy ludzie, którzy w nim żyją, mogą zakładać rodziny, utrzymywać dom, znać sąsiadów, uprawiać rzemiosło i odpoczywać.",
      },
      {
        type: "paragraph",
        text: "Gdy te środki traktuje się jako cele, w ich imię po cichu demontuje się instytucje, które spajają zwyczajne życie. To nie postęp. To przeniesienie celu z osoby na system.",
      },
    ] satisfies readonly ContentBlock[],
    requirements: {
      title: "Człowiek potrzebuje czasu i przestrzeni na",
      items: [
        "Rodzinę",
        "Przyjaźń",
        "Wiarę",
        "Wspólnotę",
        "Przyrodę",
        "Naukę",
        "Rzemiosło",
        "Piękno",
        "Odpoczynek",
      ],
    },
    reductions: {
      title: "Cywilizacji nie można sprowadzić do",
      items: [
        "Produktu krajowego brutto",
        "Konsumpcji",
        "Produktywności",
        "Sprawności administracyjnej",
        "Możliwości technicznych",
      ],
    },
  },

  principles: {
    title: "Co głosimy, w skrócie.",
    allLabel: "Wszystkie szesnaście zasad",
    readFull: "przeczytaj zasadę w całości",
    items: [
      {
        number: "01",
        title: "Rodzina i życie ludzkie",
        statement:
          "Społeczeństwo powinno zapewnić materialne warunki, w których da się założyć rodzinę, wychowywać dzieci i prowadzić sensowne życie.",
        href: "/principles#family",
      },
      {
        number: "02",
        title: "Naród i ciągłość",
        statement:
          "Narody Europy mają pełne prawo zachować swoją historyczną tożsamość, kulturę i ciągłość.",
        href: "/principles#nation-and-continuity",
      },
      {
        number: "03",
        title: "Własność i niezależność gospodarcza",
        statement:
          "Wolne społeczeństwo wymaga szeroko rozproszonej własności, a nie trwałej zależności od kilku instytucji.",
        href: "/principles#property",
      },
      {
        number: "04",
        title: "Technika na ludzką miarę",
        statement:
          "Technika powinna umacniać ludzkie umiejętności, autonomię i wspólnotę, a nie przebudowywać społeczeństwa pod dyktando technologicznej konieczności.",
        href: "/principles#technology",
      },
      {
        number: "05",
        title: "Troska o dziedzictwo i piękno",
        statement:
          "Ziemia, architektura i przyroda to dziedzictwo, które trzeba pielęgnować, chronić i przekazywać dalej.",
        href: "/principles#environment",
      },
      {
        number: "06",
        title: "Władza i pomocniczość",
        statement:
          "Władzę polityczną należy sprawować na najniższym szczeblu, który jest do tego zdolny.",
        href: "/principles#subsidiarity",
      },
    ],
  },

  lifeAndWork: {
    eyebrow: "Praca i życie",
    statement: "Nie po to zostaliśmy stworzeni, żeby pracować do śmierci.",
    body: [
      {
        type: "lead",
        text: "Praca ma rzeczywistą godność. Dzięki niej ludzie zdobywają umiejętności, wytwarzają rzeczy pożyteczne, utrzymują rodziny i uczestniczą w życiu wspólnoty.",
      },
      {
        type: "paragraph",
        text: "Praca nie jest jednak całym celem ludzkiego życia. System gospodarczy ma dawać materialną podstawę życia, a nie pochłaniać życia, które miał wspierać.",
      },
      {
        type: "paragraph",
        text: "Społeczeństwo traci orientację, gdy zwyczajni ludzie muszą oddawać pracy niemal wszystkie godziny, jakie im zostają poza snem, żeby mieć dach nad głową i co jeść; gdy rodzice rzadko widzą swoje dzieci; gdy wspólnoty pustoszeją, bo wszyscy są wyczerpani.",
      },
    ] satisfies readonly ContentBlock[],
    diagram: {
      top: "Praca",
      middle: "wspiera",
      bottom: "Życie",
      separator: ": ",
      /* Accusative, governed by "wspiera", and lower case mid-sentence. */
      orbit: [
        "rodzinę",
        "przyjaźń",
        "wiarę",
        "wspólnotę",
        "przyrodę",
        "naukę",
        "rzemiosło",
        "odpoczynek",
      ],
    },
    outcome: {
      title: "Co produktywność powinna nam przynosić",
      lead: "Jeśli społeczeństwo wytwarza coraz więcej, powinno to być gdzieś widać w życiu ludzi, którzy na ten wzrost pracują.",
      items: [
        "Większe bezpieczeństwo na wypadek zwykłych nieszczęść",
        "Czas wolny, który naprawdę należy do człowieka",
        "Czas z dziećmi i z rodzicami",
        "Samodzielność w urządzaniu własnej pracy",
        "Życie bez trwałego długu i zależności",
      ],
    },
  },

  economicOrder: {
    eyebrow: "Ład gospodarczy",
    statement: "Rynek bez kultu rynku.",
    body: [
      {
        type: "lead",
        text: "Własność prywatna jest słuszna. Przedsiębiorczość jest słuszna. Zysk jest słuszny. Sukces gospodarczy jest słuszny.",
      },
      {
        type: "paragraph",
        text: "Żadne z tych dóbr nie jest najwyższym celem społeczeństwa. Instytucje gospodarcze są niezbędne i muszą pozostać podporządkowane dobru wspólnemu — a dobro wspólne nie jest ograniczeniem narzuconym przedsiębiorczości z zewnątrz, lecz racją, dla której w ogóle warto ją chronić.",
      },
      {
        type: "paragraph",
        text: "Nie występujemy przeciw biznesowi. Występujemy przeciw dominacji: przeciw tej granicy, za którą rynek przestaje być sposobem wymiany między wieloma uczestnikami, a staje się narzędziem kontroli w rękach nielicznych.",
      },
    ] satisfies readonly ContentBlock[],
    pillars: [
      {
        title: "Przedsiębiorczość",
        lead: "Co wspieramy",
        items: [
          "Inicjatywa gospodarcza",
          "Inwestycje produkcyjne",
          "Firmy rodzinne",
          "Niezależne rzemiosło",
          "Małe i średnie przedsiębiorstwa",
        ],
      },
      {
        title: "Własność",
        lead: "Co rozszerzamy",
        items: [
          "Mieszkanie na własność",
          "Spółdzielnie",
          "Własność pracownicza",
          "Gospodarstwa rodzinne",
          "Bankowość lokalna i regionalna",
          "Szerzej rozproszona własność kapitału",
        ],
      },
      {
        title: "Granice",
        lead: "Co ograniczamy",
        items: [
          "Koncentracja monopolistyczna",
          "Zawłaszczenie regulatora",
          "Drenaż finansowy",
          "Spekulacja na rynku mieszkaniowym",
          "Dominacja korporacji w polityce",
        ],
      },
    ],
    key: "Gospodarka istnieje dla osoby, rodziny i wspólnoty.",
  },

  technology: {
    eyebrow: "Technika",
    statement: "Maszyna musi się dostosować do człowieka.",
    body: [
      {
        type: "lead",
        text: "Restore Europa nie występuje przeciw technice. Odrzucamy technologiczną nieuchronność — założenie, że wszystko, co da się zbudować, trzeba wdrożyć, a wszystko, co podnosi wydajność, trzeba uznać za postęp.",
      },
      {
        type: "paragraph",
        text: "Technika, którą wprowadza się jako dobrowolną, może się stać gospodarczo konieczna. To, co staje się konieczne, przekształca instytucje, a instytucje przebudowują potem społeczeństwo pod wymagania tej techniki. Na końcu tego ciągu to człowiek dostosowuje się do maszyny.",
      },
      {
        type: "paragraph",
        text: "Każdą technikę trzeba oceniać po tym, co robi z ludzką autonomią, życiem rodzinnym, wspólnotą, prywatnością, sensowną pracą, ludzkimi umiejętnościami i decentralizacją polityczną.",
      },
    ] satisfies readonly ContentBlock[],
    liberates: {
      title: "Technika, która wyzwala",
      items: [
        "Medycyna",
        "Kanalizacja i wodociągi",
        "Inżynieria",
        "Odkrycia naukowe",
        "Pożyteczne narzędzia",
        "Automatyzacja pracy niebezpiecznej",
      ],
    },
    dominates: {
      title: "Technika, która zniewala",
      items: [
        "Masowa inwigilacja",
        "Manipulowanie uwagą",
        "Wymuszona zależność cyfrowa",
        "Kontrola algorytmiczna",
        "Odbieranie ludziom sprawczości bez potrzeby",
        "Systemy, w których nie można uczestniczyć bez całkowitej zależności od techniki",
      ],
    },
    closing: ["Nie jesteśmy przeciw technice.", "Jesteśmy przeciw dominacji technologicznej."],
  },

  stewardship: {
    eyebrow: "Troska o dziedzictwo",
    title: "Troska o dziedzictwo",
    body: [
      {
        type: "lead",
        text: "Lasy, ziemia uprawna, rzeki, góry, wybrzeża, różnorodność biologiczna oraz zabytkowe miasta i wsie to dobra odziedziczone. Otrzymaliśmy je od ludzi, których już nie ma, i jesteśmy je winni tym, którzy się jeszcze nie narodzili.",
      },
      {
        type: "paragraph",
        text: "Dlatego nie są towarem, który wolno zużyć i wyrzucić. Pokolenie może z nich korzystać i musi o nie dbać; nie jest jednak ich wyłącznym właścicielem.",
      },
      {
        type: "paragraph",
        text: "Nie twierdzimy, że człowiek jest plagą dla świata przyrody, ani że każde zniszczenie jest dopuszczalne, jeśli tylko podnosi produkcję w krótkim okresie. Człowiek należy do przyrody — jako jej gospodarz, odpowiedzialny za to, co po sobie zostawia.",
      },
    ] satisfies readonly ContentBlock[],
    categoriesTitle: "Co zostało nam powierzone",
    categories: [
      { title: "Lasy", note: "Odpowiedzialna gospodarka leśna i długie cykle rębne." },
      { title: "Rolnictwo", note: "Zdrowe gleby i gospodarstwa rodzinne." },
      { title: "Woda", note: "Czyste rzeki, wody podziemne i wybrzeża." },
      {
        title: "Różnorodność biologiczna",
        note: "Siedliska zachowane w całości, a nie tylko skatalogowane.",
      },
      { title: "Krajobraz", note: "Układy osadnicze, które szanują ziemię." },
      { title: "Architektura", note: "Budowanie na pokolenia, nie na cykle koniunkturalne." },
      { title: "Produkcja regionalna", note: "Łańcuchy dostaw, które widać na miejscu." },
      { title: "Trwałość i naprawa", note: "Rzeczy zrobione tak, by dały się naprawić." },
    ],
  },

  europe: {
    eyebrow: "Europa",
    title: "Europa narodów.",
    subtitle: "Współpraca bez ujednolicania.",
    nations: [
      "Polska powinna pozostać wyraźnie polska.",
      "Włochy powinny pozostać wyraźnie włoskie.",
      "Francja powinna pozostać wyraźnie francuska.",
    ],
    together: "A razem pozostają europejskie.",
    body: [
      {
        type: "lead",
        text: "Europejskim ustrojem politycznym powinna rządzić pomocniczość: niczego nie należy rozstrzygać na wyższym szczeblu, jeśli da się to kompetentnie rozstrzygnąć na niższym.",
      },
      {
        type: "paragraph",
        text: "Gmina nie powinna bez potrzeby ustępować regionowi, region narodowi, a naród instytucjom kontynentalnym. Tam, gdzie mniejsza wspólnota potrafi dobrze wykonać zadanie, zadanie to należy do niej — nie dla wygody administracyjnej, lecz jako warunek wolności politycznej.",
      },
      {
        type: "paragraph",
        text: "Pozostaje przy tym wiele spraw, które Europejczycy mogą zrobić tylko razem. Tożsamość narodowa i lokalna zachowuje polityczne znaczenie właśnie dlatego, że współpraca ogranicza się do tych spraw, które jej rzeczywiście wymagają.",
      },
    ] satisfies readonly ContentBlock[],
    cooperation: {
      title: "Gdzie jest miejsce na współpracę europejską",
      items: [
        "Obrona",
        "Infrastruktura strategiczna",
        "Granice",
        "Nauka",
        "Ochrona środowiska",
        "Medycyna",
        "Odporność energetyczna",
        "Przemysł strategiczny",
      ],
    },
  },

  politicalCulture: {
    eyebrow: "Kultura polityczna",
    statement: "Kraj ponad partią.",
    body: [
      {
        type: "lead",
        text: "Spór polityczny jest konieczny. Nieustanna wojna partyjna — nie.",
      },
      {
        type: "paragraph",
        text: "Gdy stawką są trwałe interesy narodu i jego obywateli — bezpieczeństwo narodowe, infrastruktura krytyczna, stabilność demograficzna, ochrona rodzin, ciągłość konstytucyjna — ruchy polityczne powinny umieć współpracować ponad podziałami partyjnymi.",
      },
      {
        type: "paragraph",
        text: "Celem partii politycznej nie jest jedynie pokonanie innej partii. Jej celem jest służba wspólnocie politycznej. Opozycja jest konieczna; opozycja dla samej opozycji tylko wyniszcza.",
      },
    ] satisfies readonly ContentBlock[],
    hierarchy: [
      { label: "Obywatele", note: "Sama wspólnota polityczna, przez pokolenia." },
      { label: "Naród", note: "Jego ciągłość, bezpieczeństwo i wspólne życie." },
      { label: "Instytucje", note: "Urzędy, którym powierzono jedno i drugie." },
      { label: "Partia", note: "Narzędzie służby i ostatnia z czterech." },
    ],
    clarification:
      "To porządek służby i odpowiedzialności, nie łańcuch dowodzenia. Opisuje to, co partia jest winna, a nie władzę, do której mogłaby rościć sobie prawo. Nic w nim nie uprawnia do rządzenia bez zgody rządzonych: władza polityczna pozostaje odpowiedzialna przed prawem i przed obywatelami, a jej granice wyznacza konstytucja.",
  },

  restoration: {
    eyebrow: "Odnowa",
    statement: "Odnowa, nie kapitulacja.",
    body: [
      {
        type: "lead",
        text: "Odnowa nie polega na odtwarzaniu jakiegoś konkretnego stulecia. Przeszłość znała niesprawiedliwość, ubóstwo, przemoc i błąd; nic z tego nie zasługuje na naszą nostalgię.",
      },
      {
        type: "paragraph",
        text: "Polega na tym, żeby odzyskać zasady, które nowoczesne społeczeństwo odrzuciło, i rozumnie zastosować je do warunków, w jakich naprawdę żyjemy. Historii nie da się odwrócić. Kierunek można zmienić.",
      },
    ] satisfies readonly ContentBlock[],
    closing: "Nie my stworzyliśmy to dziedzictwo. Nie nam je odrzucać.",
    primaryCta: { label: "Przeczytaj Manifest", href: "/manifesto" },
    secondaryCta: { label: "Nasza wizja", href: "/vision" },
  },
};

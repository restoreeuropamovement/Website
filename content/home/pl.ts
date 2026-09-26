import type { ContentBlock } from "@/lib/content-types";
import type { HomeContent } from "./index";

export const home: HomeContent = {
  hero: {
    headline: "Europa jest dziedzictwem wartym przyjęcia.",
    statement:
      "Restore Europa to ruch polityczny narodów Europy, oparty na opublikowanym manifeście i zorganizowany jako osobne skrzydło narodowe w każdym kraju, a nie jako jedna europejska partia.",
    primaryCta: "Przeczytaj nasze zasady",
    secondaryCta: "Włącz się",
  },

  creed: {
    eyebrow: "Dlaczego teraz",
    body: [
      {
        type: "lead",
        text: "Jeśli pozwolimy, by naszą kulturę zniekształciły siły, nad którymi nasi dziadkowie jeszcze panowali, o własnym końcu nie przeczytamy w późniejszej historii. Zobaczymy go za życia.",
      },
      {
        type: "paragraph",
        text: "Aby Europa przetrwała, musi wrócić do tych wartości i ponieść je dalej. Tego, czym była Brytania, nie da się przywrócić, a dawne modele miały własne wady, których nikt nie powinien upiększać. Zostaje zbudować tutaj coś nowego — i budować to od dołu.",
      },
      {
        type: "statement",
        text: "Stawiaj ludy Europy na pierwszym miejscu i każdą propozycję, którą ci przedłożą, mierz tym, czy to robi.",
      },
    ] satisfies readonly ContentBlock[],
  },

  standFor: {
    eyebrow: "Za czym się opowiadamy",
    title: "Pięć przekonań.",
    lede: "Pięć z szesnastu. Każde jest szerzej uzasadnione na własnej stronie, przy tej części manifestu, na której się opiera.",
    allLabel: "Wszystkie szesnaście zasad",
    readFull: "przeczytaj pełną zasadę",
    items: {
      family: {
        title: "Rodzina i życie ludzkie",
        statement:
          "Kraj, w którym dzieci stały się luksusem, już powiedział coś o tym, co ceni. Rzeczy zwyczajne — zawarcie małżeństwa, wychowanie dzieci, utrzymanie domu — powinny być w zasięgu zwyczajnych ludzi.",
      },
      nation: {
        title: "Naród i ciągłość",
        statement:
          "Naród to lud obdarzony pamięcią, a nie zbiór granic administracyjnych. Wolno mu chcieć rozpoznawać siebie także za sto lat.",
      },
      property: {
        title: "Własność i niezależność gospodarcza",
        statement:
          "Trudno korzystać z wolności z pozycji całkowitej zależności. Własność powinna być szeroko rozproszona — domy, ziemia, rzemiosło, małe firmy — a nie skupiona w kilku instytucjach.",
      },
      technology: {
        title: "Technika na miarę człowieka",
        statement:
          "Nie wszystko, co da się zbudować, trzeba przyjąć. Narzędzie ma czynić ludzi bardziej zdolnymi do prowadzenia własnego życia, a nie mniej.",
      },
      subsidiarity: {
        title: "Władza i pomocniczość",
        statement:
          "Nic nie powinno być rozstrzygane wyżej, niż można to rozstrzygnąć dobrze. To, co rodzina, miasto albo naród potrafi zrobić sam, należy do niego.",
      },
    },
  },

  objectives: {
    eyebrow: "Co chcemy robić",
    title: "Konkretnie: na tym polega praca.",
    lede: "Ruch ocenia się po tym, co buduje, a nie po tym, co potępia. Cztery rzeczy są w toku i każdą można sprawdzić, po prostu ją otwierając.",
    items: {
      programme: {
        title: "Spisać program.",
        body: "Dziesięć obszarów, od rodziny i gospodarki po technikę, zdrowie i politykę zagraniczną. Opracowane stanowiska zamiast haseł, każde powiązane z częścią manifestu, na której się opiera, i każde opatrzone datą. Stanowisko, które można zacytować, to stanowisko, z którego można nas rozliczyć.",
        linkLabel: "Przeczytaj katalog polityk",
      },
      wings: {
        title: "Zbudować skrzydło w każdym narodzie Europy.",
        body: "Praca polityczna toczy się wewnątrz kraju, pod jego prawem i w jego warunkach. Na mapie jest czterdzieści siedem narodów. Każde skrzydło ma własny statut, startuje we własnych wyborach i odpowiada przed własnymi członkami, a nie przed centralą gdzie indziej.",
        linkLabel: "Zobacz skrzydła narodowe",
      },
      members: {
        title: "Być partią członków, a nie osobowości.",
        body: "Ruch złożony z członków może być przez nich rozliczany. Nic nie staje się członkostwem, zanim człowiek nie przeczyta zgłoszenia — żaden formularz nie rozstrzyga sam z siebie, a to, co piszesz, jest szyfrowane przed zapisaniem.",
        linkLabel: "Złóż wniosek o członkostwo",
      },
      publication: {
        title: "Opublikować całość argumentu.",
        body: "Manifest jest w całości dostępny w sieci i do pobrania jako zwykły tekst. Nic nie jest ukryte za adresem e-mail, formularzem ani płatnością. Kto chce z tym ruchem polemizować, może przeczytać dokładnie to, co powiedział.",
        linkLabel: "Przeczytaj manifest",
      },
    },
  },

  manifesto: {
    eyebrow: "Z manifestu",
    title: "Preambuła",
    body: [
      {
        type: "lead",
        text: "Europa to więcej niż kontynent, rynek czy przestrzeń administracyjna.",
      },
      {
        type: "paragraph",
        text: "To cywilizacja — owoc chrześcijaństwa i dziedzictwa klasycznego, odrębnych ludów i języków, pokoleń rodzin, uprawianych krajobrazów, miast i wsi, kościołów, sztuki, prawa, rzemiosła i pamięci.",
      },
      {
        type: "paragraph",
        text: "Nic z tego nie zostało zbudowane przez jednostki oderwane od historii. Przekazywano to z pokolenia na pokolenie. Burke nadał tej myśli jej klasyczne sformułowanie w 1790 roku, przeciw rewolucji, która chciała zacząć od nowa z samego rozumu: społeczeństwo jest wspólnotą, a ponieważ jej celów nie da się osiągnąć w ciągu jednego życia, jest wspólnotą \u201enie tylko między żyjącymi, lecz między tymi, którzy żyją, tymi, którzy umarli, i tymi, którzy dopiero się narodzą\u201d.",
      },
      {
        type: "paragraph",
        text: "Współczesna Europa coraz częściej traktuje samo dziedzictwo jako podejrzane. Nie zgadzamy się, że to jest postęp.",
      },
    ] satisfies readonly ContentBlock[],
    cta: "Przeczytaj cały manifest",
  },

  explore: {
    eyebrow: "Przeglądaj",
    title: "Poznaj Restore Europa.",
    cards: {
      principles: {
        title: "Zasady",
        blurb: "Szesnaście zobowiązań, uzasadnianych po kolei.",
      },
      manifesto: {
        title: "Manifest",
        blurb: "Dokument założycielski: preambuła i dwadzieścia dwie części, w całości.",
      },
      policy: {
        title: "Polityki",
        blurb: "Opracowane stanowiska w dziesięciu obszarach, z wyszukiwarką i datami.",
      },
      vision: {
        title: "Wizja",
        blurb: "Co program oznaczałby w zwyczajnym życiu.",
      },
      wings: {
        title: "Skrzydła",
        blurb: "Skrzydło narodowe w każdym z czterdziestu siedmiu narodów Europy.",
      },
      about: {
        title: "O nas",
        blurb: "Kim jesteśmy i jak ruch jest zbudowany.",
      },
    },
  },

  participation: {
    eyebrow: "Uczestnictwo",
    title: "Co właściwie znaczy dołączyć.",
    lede: "Dwie drogi do środka i jeden list do napisania. Żadna nic nie kosztuje, bo ruch nie może jeszcze przyjmować pieniędzy.",
    ways: {
      member: {
        title: "Członek",
        note: "Zwyczajna droga do środka",
        summary:
          "Jesteś policzony. Członkostwo jest tu przynależnością, a nie abonamentem: gdy Restore Europa będzie mogła przyjmować składki, to właśnie członków poprosimy o wsparcie pracy.",
        cta: "Złóż wniosek o członkostwo",
      },
      volunteer: {
        title: "Wolontariusz",
        note: "Tyle czasu, ile możesz poświęcić",
        summary:
          "To samo zgłoszenie, wraz z dziedziną, w której chcesz pomóc — organizacja lokalna, pisanie, tłumaczenia, wydarzenia, prawo, technika, rolnictwo, budownictwo albo coś innego, co potrafisz.",
        cta: "Zgłoś się jako wolontariusz",
      },
      chapter: {
        title: "Skrzydło tam, gdzie mieszkasz",
        note: "Najpierw napisz; nie ma formularza",
        summary:
          "Obecność na mapie nie znaczy, że skrzydło już tam powstało. Jeśli chcesz pomóc założyć je w swoim kraju, napisz — na tym etapie jest to najbardziej przydatna rzecz, jaką ktokolwiek może dla ruchu zrobić.",
        cta: "Napisz o skrzydle lokalnym",
      },
    },
    closing:
      "Nie ma listy mailingowej, do której można się zapisać, ani biuletynu, który można zamówić. Jedyny adres, jaki ten ruch posiada, to ten, który sam wpisałeś do zgłoszenia albo zapytania, a jest on szyfrowany przed zapisaniem.",
  },
};

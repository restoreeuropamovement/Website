import type { MaterialsText } from "./index";

export const materialsText: MaterialsText = {
  meta: {
    eyebrow: "Materiały",
    title: "Zrobione po to, by brać i używać.",
    metaTitle: "Materiały",
    lede: "Znak ruchu oraz arkusze, naklejki i obrazy, które z niego powstały. Wszystko tutaj jest opublikowane do pobrania.",
    description:
      "Logotypy, plakaty, naklejki, tapety i obrazy Restore Europa Movement, do pobrania bez opłat.",
  },

  categories: {
    logo: {
      label: "Logotypy",
      note: "Znak i znak słowny, w postaciach, w jakich zostały narysowane.",
    },
    poster: {
      label: "Plakaty",
      note: "Arkusze w rozmiarze, dla którego warto uruchomić drukarkę.",
    },
    sticker: {
      label: "Naklejki",
      note: "Małe arkusze, zrobione do wydrukowania i wycięcia.",
    },
    wallpaper: {
      label: "Tapety",
      note: "Na telefon lub na ekran.",
    },
    social: {
      label: "Media społecznościowe",
      note: "Obrazy w formacie kont, które ruch prowadzi.",
    },
  },

  file: {
    download: "Pobierz",
    downloadLabel: "Pobierz {title}",
  },

  empty: {
    title: "Nic jeszcze nie opublikowano.",
    body: "Ta strona zapełnia się w miarę, jak powstają pliki.",
  },

  unavailable: {
    title: "Katalog nie jest podłączony.",
    body: "Ta kopia serwisu nie ma bazy danych, więc listy plików nie da się odczytać. Nic nie zostało wycofane.",
  },

  usage: {
    title: "Korzystanie",
    body: "Wszystko tutaj nosi nazwę i znak ruchu, więc to, co z tego powstanie, zostanie odczytane jako mówiące w imieniu ruchu. Warunki korzystania nie zostały jeszcze opublikowane, a ruch nie jest jeszcze zarejestrowany.",
    imprintLink: "Nota prawna",
  },
};

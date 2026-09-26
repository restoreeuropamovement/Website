import type { InvolvementText } from "./index";

export const involvementText: InvolvementText = {
  join: {
    eyebrow: "Członkostwo",
    title: "Dołącz do ruchu.",
    metaTitle: "Włącz się",
    lede: "Członkostwo to przynależność. Jeśli możesz też pomóc budować ruch, wybierz „Wolontariusz”. Formularz pyta o pięć rzeczy, szyfruje twoje imię i adres przed zapisaniem i do niczego cię nie zobowiązuje, dopóki człowiek nie rozpatrzy zgłoszenia.",
    description:
      "Dołącz do Restore Europa Movement jako członek albo zgłoś się na wolontariusza, by pomóc go budować.",
    prefilled:
      "Przychodzisz od oddziału w kraju {country}, więc formularz poniżej jest na niego ustawiony. Zmień oba pola, jeśli to się nie zgadza.",
    roleLegend: "W jakim charakterze się zgłaszasz",
    fields: {
      name: "Imię i nazwisko",
      email: "E-mail",
      country: "Kraj",
      region: "Region lub miasto",
      interest: "Obszar zainteresowań",
      message: "Wiadomość",
      messageHint: "Co chciałbyś robić i co w twojej sytuacji ma z tym związek.",
      optional: "Opcjonalnie",
      placeholder: "Wybierz…",
      otherCountry: "Inny",
    },
    consent:
      "Zgłaszam się do Restore Europa Movement i zgadzam się, by to, co wpisałem powyżej, było w tym celu przechowywane. Członkostwo w ruchu politycznym wskazuje na poglądy polityczne, które prawo chroni surowiej niż zwykłe dane osobowe; mogę w każdej chwili cofnąć tę zgodę i zażądać usunięcia wpisu.",
    submit: "Wyślij zgłoszenie",
    submitting: "Wysyłanie…",
    privacyNote: "Wszystko, co wpiszesz, jest szyfrowane przed zapisaniem. Zobacz naszą",
    privacyLink: "notę o prywatności",
    received: {
      title: "Twoje zgłoszenie dotarło.",
      body: "Czeka teraz na rozpatrzenie przez człowieka. Członkostwo zaczyna się wtedy, gdy to rozpatrzenie się kończy, a nie gdy wysyła się formularz — nic więc jeszcze nie zostało rozstrzygnięte i nic o tobie nigdzie nie zostało opublikowane.",
      privacy:
        "Twoje imię i adres zostały zaszyfrowane, zanim je zapisano. Co przechowujemy, jak długo i jak to usunąć, wyjaśnia",
      privacyLink: "nota o prywatności",
    },
    unavailable:
      "Rejestr członków nie przyjmuje w tej chwili zgłoszeń. Nic z tego, co tu wpisujesz, nie zostało wysłane. Spróbuj proszę za chwilę.",
    throttled:
      "Z tego połączenia wysłano już kilka zgłoszeń. Odczekaj proszę godzinę przed wysłaniem kolejnego.",
    busy:
      "W tej chwili napływa naraz więcej zgłoszeń, niż ta strona może przyjąć. Nic z tego, co wpisałeś, nie zostało wysłane i nic w twoim zgłoszeniu nie jest nie tak. Spróbuj ponownie za kilka minut.",
    problemCount: {
      one: "Ten formularz ma {count} problem",
      few: "Ten formularz ma {count} problemy",
      many: "Ten formularz ma {count} problemów",
      other: "Ten formularz ma {count} problemu",
    },
    errors: {
      name: "Podaj imię i nazwisko, najwyżej 120 znaków.",
      email: "Podaj poprawny adres e-mail.",
      country: "Wybierz kraj z listy.",
      region: "Region lub miasto ograniczono do 120 znaków.",
      message: "Twoja wiadomość jest ograniczona do 1500 znaków.",
      role: "Wybierz, czy zgłaszasz się jako członek, czy jako wolontariusz.",
      interest: "Wybierz obszar zainteresowań.",
      consent: "Musisz wyrazić zgodę, żeby przejść dalej.",
    },
  },

  roles: {
    member: {
      title: "Członek",
      summary:
        "Być liczonym jako członek ruchu. Kiedy Restore Europa będzie mogła przyjmować składki, to członków poprosimy o wsparcie pracy.",
      commitment: "Zwykła droga do środka",
    },
    volunteer: {
      title: "Wolontariusz",
      summary:
        "Pomóc go budować: organizacja lokalna, pisanie, tłumaczenia, wydarzenia albo rzemiosło. Wybierz obszar, który pasuje najlepiej.",
      commitment: "Tyle, ile możesz",
    },
  },

  retiredRoles: {
    supporter: "Sympatyk",
    organizer: "Organizator lokalny",
    writer: "Autor / badacz",
    professional: "Wkład zawodowy",
  },

  interests: {
    policy: "Polityki publiczne i badania",
    organising: "Organizacja lokalna",
    writing: "Pisanie i redakcja",
    events: "Wydarzenia i spotkania",
    translation: "Tłumaczenia",
    legal: "Prawo i zgodność",
    technology: "Technika i infrastruktura",
    agriculture: "Rolnictwo i ziemia",
    architecture: "Architektura i planowanie",
    other: "Inne",
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Jak dotrzeć do ruchu.",
    metaTitle: "Kontakt",
    lede: "Korespondencję prowadzi się według funkcji, a nie osób, żeby list trafił do ludzi, którzy potrafią na niego odpowiedzieć, a nie do tego, kto pierwszy go przeczyta.",
    description:
      "Jak dotrzeć do Restore Europa Movement: sprawy ogólne, prasa, badania, organizacja i koła lokalne.",
    channelsHeading: "Drogi kontaktu",
    writeHeading: "Napisz do nas",
    writeBody:
      "Powyżej nie ma adresów e-mail, bo każdy zostaje opublikowany wtedy, gdy funkcja, do której należy, istnieje i ktoś odpowiada za jej czytanie. Ten formularz w międzyczasie dociera do tych samych ludzi.",
    fields: {
      name: "Imię i nazwisko",
      email: "E-mail",
      subject: "Czego dotyczy",
      message: "Wiadomość",
      placeholder: "Wybierz…",
    },
    submit: "Wyślij wiadomość",
    submitting: "Wysyłanie…",
    privacyNote: "Szyfrowane przed zapisaniem. Zobacz naszą",
    privacyLink: "notę o prywatności",
    sent: {
      title: "Twoja wiadomość dotarła.",
      body: "Przeczyta ją osoba pełniąca funkcję, do której ją skierowałeś. Ruch jest niewielki i odpowiada na listy ręcznie, więc odpowiedź może zająć kilka dni.",
      privacy:
        "Twoje imię, adres i wiadomość zostały zaszyfrowane przed zapisaniem i można je na życzenie usunąć — zobacz",
      privacyLink: "notę o prywatności",
    },
    unavailable:
      "W tej chwili nie można przyjmować korespondencji. Nic z tego, co tu wpisujesz, nie zostało wysłane. Spróbuj proszę za chwilę.",
    throttled:
      "Z tego połączenia wysłano już kilka wiadomości. Odczekaj proszę godzinę przed wysłaniem kolejnej.",
    busy:
      "W tej chwili napływa naraz więcej wiadomości, niż ta strona może przyjąć. Nic z tego, co wpisałeś, nie zostało wysłane i nic w twojej wiadomości nie jest nie tak. Spróbuj ponownie za kilka minut.",
    problemCount: {
      one: "Ten formularz ma {count} problem",
      few: "Ten formularz ma {count} problemy",
      many: "Ten formularz ma {count} problemów",
      other: "Ten formularz ma {count} problemu",
    },
    errors: {
      name: "Podaj imię i nazwisko, najwyżej 120 znaków.",
      email: "Podaj poprawny adres e-mail, żeby odpowiedź mogła do ciebie dotrzeć.",
      subject: "Wybierz, czego dotyczy twoja wiadomość.",
      message: "Wiadomość powinna mieć od 10 do 2000 znaków.",
    },
    ratherTakePart: {
      before: "Jeśli wolisz wziąć udział, niż zadać pytanie,",
      joinLink: "dołącz do ruchu",
      between: ". Dane wydawcy znajdziesz w",
      imprintLink: "nocie wydawniczej",
      after: ".",
    },
  },

  channels: {
    general: {
      title: "Sprawy ogólne",
      description: "Pytania o ruch, jego program i działalność.",
    },
    press: {
      title: "Prasa",
      description: "Dziennikarze, media i badacze szukający komentarza lub tła.",
    },
    research: {
      title: "Badania",
      description: "Korespondencja naukowa i zgłoszenia do katalogu polityk.",
    },
    organization: {
      title: "Organizacja",
      description: "Obsługa członkostwa, statut, zgodność z prawem i sprawy wewnętrzne.",
    },
    chapters: {
      title: "Koła lokalne",
      description: "Założenie koła albo kontakt z nim, gdy koła zostaną utworzone.",
    },
  },
};

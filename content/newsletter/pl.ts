import type { NewsletterText } from "./index";

export const newsletterText: NewsletterText = {
  eyebrow: "Biuletyn",
  title: "Dziennik pocztą elektroniczną",
  metaTitle: "Biuletyn",
  lede: "Jeden adres, eseje ruchu w miarę jak powstają, i w każdej wiadomości odnośnik, który zdejmuje cię z listy.",
  description:
    "Dziennik Restore Europa pocztą elektroniczną. Jeden adres, szyfrowany przed zapisaniem, potwierdzany zanim cokolwiek zostanie wysłane, i usuwalny odnośnikiem z każdej wiadomości.",

  body: [
    {
      type: "lead",
      text: "Zapisanie się umieszcza jeden adres poczty elektronicznej na liście, a ta lista otrzymuje eseje ruchu. Nic innego na nią nie trafia — żadnych apeli o wsparcie, żadnych zaproszeń, żadnego przekazywania komukolwiek.",
    },
    {
      type: "paragraph",
      text: "Dziennik nie ma obecnie publicznych stron, więc na razie to biuletyn jest miejscem, w którym jego eseje się ukazują. Każdy przychodzi w całości, zwykłym tekstem: bez obrazków, bez oprawy graficznej i bez niczego, co donosiłoby, czy go otworzyłeś.",
    },
    {
      type: "paragraph",
      text: "**Poprosimy cię o potwierdzenie.** Adres pozostaje niepotwierdzony, dopóki nie zostanie otwarty wysłany na niego odnośnik; wcześniej nic nie jest dostarczane, a adres nigdy niepotwierdzony zostaje usunięty nieprzeczytany: odnośnik traci ważność po dwóch dniach, a przebieg idący raz na dobę usuwa to, czego ważność minęła, więc nic nie jest przechowywane dłużej niż trzy dni. To nie jest formalność. Każdy może wpisać w pole adres obcej osoby, a dla kogoś, kogo zainteresowanie tym ruchem kosztowałoby posadę, niezamówiona poczta polityczna jest realną szkodą wyrządzoną w jego imieniu.",
    },
    {
      type: "paragraph",
      text: "**Adres jest szyfrowany przed zapisaniem**, kluczem, którego nie ma w bazie danych, więc skradziona kopia bazy rozszyfrowuje się do niczego. Obok zapisujemy, w jakim języku czytałeś, żeby biuletyn zwracał się do ciebie w tym języku. Żadnego nazwiska, żadnego kraju i żadnej możliwości pobrania listy przez kogokolwiek. Co jest przechowywane i jak długo, opisuje [nota o prywatności][privacy].",
    },
    {
      type: "paragraph",
      text: "**Odejście zajmuje jedno kliknięcie.** Każda wiadomość niesie odnośnik usuwający adres i nie wymaga ani logowania, ani podania powodu. Ten odnośnik nigdzie nie jest przechowywany — przy każdym użyciu jest wyliczany z samego wpisu — więc kopia bazy nie dałaby nikomu przycisku opróżniającego listę, a wiadomość odnaleziona w archiwum po latach nadal działa.",
    },
    {
      type: "note",
      text: "Eseje są pisane po angielsku i nie są tłumaczone. To, co ruch mówi wokół nich — notka na dole, sposób rezygnacji — jest w języku, w którym się zapisałeś.",
    },
  ],

  form: {
    heading: "Zapisz się",
    email: "Adres poczty elektronicznej",
    submit: "Zapisz się",
    submitting: "Wysyłanie…",
    privacyNote: "Co dzieje się z twoim adresem, opisuje",
    privacyLink: "nota o prywatności",
    invalid: "To nie wygląda na adres poczty elektronicznej. Nic nie zostało wysłane ani zapisane.",
    unavailable:
      "Zapisów nie można teraz przyjąć, więc ten formularz nie przyjmuje adresów. Nic, co tu wpiszesz, nie zostałoby zapisane, a wolimy to powiedzieć, niż przyjąć adres.",
    throttled:
      "Z tego połączenia przyszło już kilka próśb w ciągu ostatniej godziny. Odczekaj chwilę i spróbuj jeszcze raz — adres i tak trafia na listę tylko raz, więc wcześniejsza próba mogła się już udać.",
    busy:
      "Witryna osiągnęła liczbę zgłoszeń, jaką przyjmuje w ciągu godziny od wszystkich łącznie. To niemal na pewno nie ma z tobą nic wspólnego. Spróbuj wkrótce ponownie.",
    sent: {
      title: "Zajrzyj teraz do tej skrzynki.",
      body: "Wiadomość jest już w drodze. Co w niej stoi, zależy od tego, co jest już na liście, i zobaczy to tylko ten, kto potrafi otworzyć tę skrzynkę — ta strona nie dowiaduje się tego w żadnym wypadku, żeby formularza nie dało się użyć do sprawdzania, kto jest zapisany. Jeśli wiadomość niesie odnośnik potwierdzający, nic więcej nie zostanie wysłane, dopóki nie zostanie otwarty.",
    },
  },

  confirm: {
    eyebrow: "Biuletyn",
    title: "Potwierdź zapis",
    metaTitle: "Potwierdź zapis",
    lede: "Jedno naciśnięcie i adres, do którego należy ten odnośnik, trafia na listę.",
    why: "Przycisk, a nie sam odnośnik, ponieważ firmowe filtry pocztowe otwierają każdy adres w nadchodzącej wiadomości, żeby sprawdzić, czy jest bezpieczny. Gdyby wystarczyło otworzyć odnośnik, te skanery potwierdzałyby zapisy w imieniu ludzi, którzy nigdy nie otworzyli poczty — a występują najczęściej właśnie tam, gdzie najuważniej śledzi się, co ktoś czyta.",
    submit: "Potwierdź",
    submitting: "Potwierdzanie…",
    done: {
      title: "Potwierdzone.",
      body: "Adres jest na liście, a następny esej zostanie na niego wysłany. Każda wiadomość niesie odnośnik, który go stamtąd zdejmuje.",
    },
    failed: {
      title: "Ten odnośnik nie zadziałał.",
      body: "Odnośnik potwierdzający jest ważny dwa dni i można go użyć raz. Jeśli wygasł albo został już użyty, poproś ponownie ze [strony biuletynu][newsletter], a zostanie wysłany nowy.",
    },
    missing:
      "Ten adres nie niesie żadnego znacznika potwierdzającego, więc nie ma tu czego potwierdzać. Otwórz odnośnik z wiadomości, która została do ciebie wysłana.",
  },

  unsubscribe: {
    eyebrow: "Biuletyn",
    title: "Opuść listę",
    metaTitle: "Opuść listę",
    lede: "Jedno naciśnięcie i adres, do którego należy ten odnośnik, przestaje cokolwiek otrzymywać.",
    why: "Przycisk, a nie usunięcie przy samym otwarciu, z tego samego powodu co przy potwierdzeniu: skanery odnośników wbudowane w firmowe systemy pocztowe otwierają każdy adres w wiadomości, a odnośnik wypisujący przy otwarciu po cichu usuwałby czytelników, którzy nigdy nie prosili o odejście.",
    submit: "Wypisz się",
    submitting: "Usuwanie…",
    done: {
      title: "Gotowe. Nic więcej nie zostanie wysłane.",
      body: "Nie mówimy, czy adres był na liście, bo ten, kto trzyma w ręku ten odnośnik, niekoniecznie jest osobą, do której adres należy, a na to pytanie nieznajomemu nie odpowiemy. Możesz zapisać się ponownie w dowolnej chwili; zacznie się to od kroku z potwierdzeniem. Jeśli mimo wszystko coś jeszcze przyjdzie, użyty odnośnik pochodzi sprzed obecnego klucza szyfrowania i nie jest już uznawany; ten na dole najnowszej wiadomości będzie.",
    },
    missing:
      "Ten adres nie niesie żadnego znacznika, więc nie ma tu czego usuwać. Użyj odnośnika na dole którejkolwiek z wysłanych do ciebie wiadomości.",
  },
};

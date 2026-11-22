import type { ShopText } from "./index";

/** The sticker shop, in Polish. Typed against `en.ts`; see its header. */
export const shopText: ShopText = {
  meta: {
    eyebrow: "Sklep",
    title: "Naklejki",
    metaTitle: "Naklejki",
    description: "Naklejki Restore Europa, pakowane ręcznie i wysyłane z Austrii do całej Europy.",
    lede: "Wybierz wzór i liczbę naklejek. Pakujemy je ręcznie i wysyłamy do ciebie z Austrii, w całej Europie.",
  },

  hero: {
    from: "Od {price}",
    posted: "Wysyłka z Austrii",
    noAccount: "Bez zakładania konta",
    supports: "Każde zamówienie wspiera ruch",
    preorder: "Przedsprzedaż: wysyłka w ciągu miesiąca",
    cta: "Wybierz naklejki",
  },

  how: {
    title: "Jak to działa",
    steps: [
      { title: "Wybierz", body: "Wybierz wzór, liczbę naklejek i kraj, do którego mają trafić. Kwota łączna, z kosztem wysyłki, jest widoczna przed zapłatą." },
      { title: "Zapłać bezpiecznie", body: "Płacisz na stronie płatności Stripe. Ta strona nigdy nie widzi twojej karty i nie przechowuje żadnych informacji o tym, kim jesteś." },
      { title: "Wysyłka do ciebie", body: "Twoje naklejki są pakowane ręcznie i wysyłane z Austrii. Zachowaj stronę zamówienia, aby zobaczyć, kiedy zostaną nadane." },
    ],
  },

  test: {
    title: "Tryb testowy",
    body: "Płatności trafiają tu do środowiska testowego Stripe i nic nie jest drukowane ani wysyłane. Używaj testowych numerów kart Stripe, nigdy prawdziwej karty.",
  },

  closed: {
    title: "Sklep jest zamknięty",
    body: "W tej chwili nie przyjmujemy zamówień. Nic na tej stronie nie obciąży cię żadną opłatą ani niczego ci nie wyśle.",
  },

  unavailable: {
    title: "Nie można połączyć się ze sklepem",
    body: "Nie udało się teraz wczytać wzorów. Nic nie zostało pobrane. Spróbuj ponownie później.",
  },

  empty: {
    title: "Na razie brak wzorów",
    body: "W tej chwili nie ma nic do zamówienia.",
  },

  sticker: {
    title: "Naklejka",
    size: "9,8 × 9,8 cm",
    facts: ["9,8 × 9,8 cm, kwadratowa", "Pełny kolor na białym papierze samoprzylepnym", "Nacięty podkład, łatwo się odkleja"],
    specs: {
      title: "Specyfikacja",
      rows: [
        { label: "Rozmiar", value: "9,8 × 9,8 cm, kwadratowa" },
        { label: "Materiał", value: "Biały papier samoprzylepny, 80 g/m²" },
        { label: "Druk", value: "Pełny kolor (CMYK), tylko z przodu" },
        { label: "Podkład", value: "Nacięty, więc łatwo się odkleja" },
        { label: "Wykończenie", value: "Brak: bez laminatu i lakieru" },
        { label: "Zastosowanie", value: "Do użytku wewnątrz" },
      ],
    },
    delivery: {
      title: "Dostawa",
      rows: [
        { label: "Skąd", value: "Z Austrii, pakowane i nadawane ręcznie" },
        { label: "Jak", value: "Zwykłym listem, bez śledzenia przesyłki" },
        { label: "Koszt wysyłki", value: "Według wagi, widoczny w kwocie łącznej przed zapłatą" },
        { label: "Dokąd", value: "UE i większość Europy; poza UE służby celne twojego kraju mogą pobrać opłaty przy doręczeniu" },
      ],
      preorderRow: { label: "Kiedy", value: "Przedsprzedaż: wysyłka w ciągu miesiąca od złożenia zamówienia" },
    },
  },

  soldOut: {
    title: "Wyprzedane",
    preorderTitle: "Przedsprzedaż zakończona",
    body: "Wszystkie naklejki z tego nakładu zostały zamówione. Obecnie nie można nic zamówić.",
  },

  form: {
    design: "Wzór",
    quantity: "Ile sztuk",
    quantityOption: {
      one: "{count} naklejka",
      few: "{count} naklejki",
      many: "{count} naklejek",
      other: "{count} naklejki",
    },
    perSticker: "{price} za sztukę",
    left: "Pozostało naklejek z tego nakładu: {count}",
    notEnough: "za mało",
    country: "Kraj dostawy",
    countryPlaceholder: "Wybierz kraj",
    summaryTitle: "Twoje zamówienie",
    postagePending: "Wybierz kraj powyżej",
    stickers: "Naklejki",
    delivery: "Koszt wysyłki",
    total: "Razem",
    each: "ok. {price} za sztukę",
    secure: "Bezpieczna płatność przez Stripe",
    notDelivered: "Tej liczby naklejek nie możemy jeszcze wysłać do tego kraju.",
    customs:
      "Ta przesyłka przechodzi odprawę celną. Twój kraj może przy doręczeniu pobrać podatek importowy lub opłatę manipulacyjną; to sprawa między tobą a twoją pocztą i nie wchodzi w podaną tu kwotę łączną.",
    preorder:
      "Przedsprzedaż. Naklejki są właśnie drukowane, a twoje zamówienie zostanie wysłane w ciągu miesiąca od jego złożenia.",
    submit: "Przejdź do płatności",
    submitting: "Otwieramy stronę płatności…",
    payment:
      "Strona Stripe poprosi o twoje imię i nazwisko, adres e-mail i adres dostawy. Ta strona nigdy nie widzi twojej karty i nie przechowuje żadnych informacji o tym, kim jesteś: osoby wysyłające twoje naklejki widzą twój adres tylko na potrzeby tej jednej koperty.",
    privacyLink: "Jak traktujemy twoje dane",
  },

  errors: {
    design: "Wybierz wzór.",
    quantity: "Wybierz liczbę naklejek.",
    country: "Wybierz kraj dostawy.",
    "not-offered": "Tej liczby naklejek nie możemy jeszcze wysłać do tego kraju.",
  },

  states: {
    throttled: "Z tego połączenia rozpoczęto zbyt wiele zamówień. Odczekaj godzinę i spróbuj ponownie.",
    busy: "Sklep łapie oddech po fali zamówień. Spróbuj ponownie za chwilę.",
    unavailable: "Nie udało się teraz otworzyć strony płatności. Nic nie zostało pobrane. Spróbuj ponownie później.",
    closed: "Sklep został właśnie zamknięty. Nic nie zostało pobrane.",
    soldout: "Na tę ilość zostało za mało naklejek. Wybierz mniejszą. Nic nie zostało pobrane.",
  },

  order: {
    metaTitle: "Twoje zamówienie",
    kicker: "Zamówienie",
    missingTitle: "Nie znaleziono zamówienia",
    missingBody:
      "Ten adres nie odpowiada żadnemu zamówieniu. Jeśli właśnie zapłaciłeś, strona płatności może jeszcze przekazywać je do nas — odśwież stronę za minutę.",
    keep: "Zachowaj adres tej strony; wysłaliśmy go też do ciebie e-mailem. Ta strona nie przechowuje twojego adresu e-mail, więc tylko tutaj zobaczysz, jak postępuje realizacja zamówienia.",
    design: "Wzór",
    quantity: "Liczba",
    destination: "Kraj dostawy",
    total: "Zapłacono",
    tracking: "Śledzenie",
    test: "Zamówienie testowe — nic nie zostanie wydrukowane ani wysłane.",
    preorder: "To zamówienie w przedsprzedaży: zostanie wysłane w ciągu miesiąca od dnia, w którym je złożyłeś.",
    withdrawn:
      "Odstąpiłeś od tego zamówienia dnia {date}. Zwracamy twoją płatność, łącznie z kosztem wysyłki, w ciągu 14 dni od tego dnia. Jeśli naklejki już do ciebie dotarły, odeślij je w komplecie; możemy wstrzymać zwrot pieniędzy do czasu ich otrzymania.",
    withdrawLink: "Odstąp od tego zakupu",
    status: {
      checkout: "Czekamy na potwierdzenie płatności.",
      expired: "Płatność nie została dokończona, więc nic nie pobrano i nic nie zostanie wysłane.",
      paid: "Zapłacono. Twoje zamówienie zaraz zostanie przekazane do pakowania.",
      submitting: "Zapłacono. Twoje zamówienie jest przekazywane do pakowania.",
      retry: "Zapłacono. Nie udało się jeszcze przekazać zamówienia do pakowania; nastąpi to automatycznie.",
      review: "Zapłacono. Zanim zamówienie zostanie wysłane, musi chwilę przyjrzeć mu się człowiek. Nic więcej nie musisz robić.",
      submitted: "Pakowane do wysyłki.",
      in_production: "Pakowane do wysyłki.",
      shipped: "Wysłane.",
      delivered: "Doręczone.",
      cancelled: "Anulowane. Wszystko, co zapłaciłeś, zostało lub zostanie zwrócone na twoją kartę.",
    },
  },

  confirmation: {
    subject: "Twoje zamówienie naklejek {reference}",
    intro:
      "Dziękujemy za zamówienie. Twoja płatność dotarła, a twoje naklejki są na naszej liście do pakowania.",
    orderHeading: "TWOJE ZAMÓWIENIE",
    rows: {
      reference: "Zamówienie",
      design: "Wzór",
      quantity: "Liczba",
      destination: "Kraj dostawy",
      stickers: "Naklejki",
      postage: "Koszt wysyłki",
      total: "Zapłacono łącznie",
    },
    nextHeading: "CO DALEJ",
    next: "Pakujemy twoje naklejki ręcznie i wysyłamy je z Austrii zwykłym listem, bez śledzenia przesyłki. Ta strona pokazuje, kiedy twoje zamówienie zostało wysłane:",
    preorder: "To zamówienie w przedsprzedaży. Naklejki są właśnie drukowane, a twoje zamówienie zostanie wysłane w ciągu miesiąca od dzisiaj.",
    withdraw: "Zmieniłeś zdanie? Możesz odstąpić od tego zakupu w ciągu 14 dni od otrzymania naklejek, bez podawania przyczyny: {withdraw}",
    customs:
      "Twoje zamówienie przechodzi odprawę celną. Twój kraj może przy doręczeniu pobrać podatek importowy lub opłatę manipulacyjną; nie wchodzi ona w powyższą kwotę łączną.",
    test: "To było zamówienie testowe. Nic nie pobrano i nic nie zostanie wysłane.",
    reply:
      "Ta wiadomość została wysłana automatycznie i odpowiedzi na nią nie są czytane. Jeśli coś jest nie tak z twoim zamówieniem, napisz do nas na {contact} i podaj numer {reference}.",
    why: "Otrzymujesz tę wiadomość, ponieważ zamówiłeś naklejki w {shop}. Nie przechowujemy twojego adresu e-mail i nie napiszemy do ciebie ponownie w sprawie tego zamówienia.",
  },

  withdrawal: {
    metaTitle: "Odstąpienie od zakupu",
    kicker: "Sklep",
    title: "Odstąp od zakupu",
    lede: "Możesz odstąpić od zamówienia naklejek w ciągu 14 dni od jego otrzymania, bez podawania przyczyny. Wypełnij poniższe dane, sprawdź je i potwierdź. Odpowiemy e-mailem, podając datę i godzinę otrzymania odstąpienia.",
    shopLink: "Zmieniłeś zdanie? Odstąp od zakupu",
    name: "Twoje imię i nazwisko",
    reference: "Numer zamówienia",
    referenceHint: "Zaczyna się od RE- i znajdziesz go w e-mailu z potwierdzeniem.",
    email: "Adres e-mail",
    emailHint: "Ten, którego użyłeś przy płatności.",
    review: "Dalej",
    checkTitle: "Sprawdź i potwierdź",
    checkBody: "Odstępujesz od tego zakupu:",
    confirm: "Potwierdź odstąpienie",
    change: "Zmień dane",
    doneTitle: "Odstąpienie otrzymane",
    doneBody:
      "Jeśli te dane odpowiadają zamówieniu, twoje odstąpienie zostało zarejestrowane, a potwierdzenie z datą i godziną jego otrzymania jest w drodze na ten adres e-mail. Jeśli w ciągu godziny nic nie dotrze, sprawdź numer zamówienia i adres e-mail i spróbuj ponownie albo napisz do nas przez formularz kontaktowy.",
    errors: {
      name: "Podaj swoje imię i nazwisko.",
      reference: "Podaj numer zamówienia, który zaczyna się od RE-.",
      email: "Podaj adres e-mail, którego użyłeś przy zamówieniu.",
    },
    states: {
      throttled: "Zbyt wiele prób z tego połączenia. Odczekaj godzinę i spróbuj ponownie.",
      unavailable: "Nie udało się tego teraz wysłać. Spróbuj ponownie później albo napisz do nas przez formularz kontaktowy.",
    },
    acknowledgement: {
      subject: "Odstąpienie otrzymane: zamówienie {reference}",
      intro: "Twoje odstąpienie od zamówienia {reference} otrzymaliśmy {when}.",
      name: "Podane imię i nazwisko: {name}",
      nextHeading: "CO DALEJ",
      notPosted: "Jeśli twoje naklejki nie zostały jeszcze wysłane, nie zostaną wysłane.",
      returns:
        "Jeśli już do ciebie dotarły, odeślij je w komplecie. Napisz do nas przez {contact}, a podamy ci, dokąd je wysłać.",
      refund:
        "Zwracamy twoją płatność, łącznie z zapłaconym kosztem wysyłki, w ciągu 14 dni od dzisiaj, na kartę, którą zapłaciłeś. Możemy wstrzymać zwrot pieniędzy do czasu, aż naklejki do nas wrócą.",
      why: "Otrzymujesz tę wiadomość, ponieważ w {shop} złożono odstąpienie od tego zamówienia. Odpowiedzi na tę wiadomość nie są czytane.",
    },
  },

  item: {
    one: "{count} naklejka — {design}",
    few: "{count} naklejki — {design}",
    many: "{count} naklejek — {design}",
    other: "{count} naklejki — {design}",
  },
  shippingLabel: "Koszt wysyłki",
  addressNote:
    "Sprawdź dokładnie swój adres, zwłaszcza numer domu i kod pocztowy. Twoje naklejki idą zwykłym listem bez śledzenia przesyłki, więc listu wysłanego na błędnie wpisany adres nie da się odnaleźć.",
};

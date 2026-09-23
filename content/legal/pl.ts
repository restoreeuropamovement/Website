import type { LegalText } from "./index";

export const legalText: LegalText = {
  privacy: {
    eyebrow: "Informacje prawne",
    title: "Prywatność",
    metaTitle: "Prywatność",
    lede: "Czytanie tej strony nie zbiera od ciebie niczego. Dwie podstrony o coś proszą, i tylko wtedy, gdy zdecydujesz się to podać. Co się z tym dalej dzieje, opisano poniżej.",
    description:
      "Czytanie tej strony nie zbiera niczego: żadnej analityki, żadnych ciasteczek, żadnego śledzenia. Dwie podstrony o coś proszą, i tylko wtedy, gdy zdecydujesz się to podać. Co jest przechowywane, co jest zaszyfrowane i jak to usunąć.",
    sections: {
      "what-we-collect": {
        title: "Co zbiera ta strona",
        body: [
          {
            type: "lead",
            text: "Czytanie nie zbiera niczego, co pozwalałoby cię zidentyfikować. Ta strona nie ma kont, reklam, pikseli śledzących ani osadzonych elementów z zewnątrz.",
          },
          {
            type: "paragraph",
            text: "Czytanie nie ustawia ciasteczek i nie zapisuje niczego w pamięci lokalnej ani sesyjnej twojej przeglądarki. Żaden profil twojej wizyty nie jest tworzony, kupowany ani sprzedawany. Jedyny skrypt to opisany niżej licznik ruchu, który jest anonimowy i nie może cię zidentyfikować.",
          },
          {
            type: "paragraph",
            text: "Są na tej stronie dwa miejsca, przez które możesz przekazać dane osobowe, i w obu trzeba tego naprawdę chcieć: zgłoszenie członkowskie na [Włącz się][join] i formularz wiadomości na [Kontakt][contact]. Nic innego na stronie niczego nie przesyła, a do żadnego z tych formularzy nie trafia się przypadkiem.",
          },
        ],
      },

      membership: {
        title: "Jeśli zgłaszasz się do ruchu",
        body: [
          {
            type: "paragraph",
            text: "Zgłoszenie wysyła to, co wpisałeś, do ruchu, gdzie zostaje zapisane w bazie danych. Wysłanie formularza nie czyni cię członkiem: wpis przychodzi oznaczony jako nieprzeczytany, a decyzję podejmuje człowiek. Do tego czasu — i później — masz prawo wiedzieć dokładnie, co jest przechowywane.",
          },
          {
            type: "paragraph",
            text: "Zgłoszenie przechodzi przez pięć stanów i nic nie przenosi go między nimi poza czyimś osądem. Przychodzi jako **nieprzeczytane**. Kiedy administrator zaczyna je rozważać, jest **w rozpatrywaniu**. Jeśli napisze do ciebie z pytaniami, zostaje oznaczone jako **oczekujące na odpowiedź**, dopóki nie odpowiesz — stan istnieje po to, żeby nikt, do kogo napisano, nie został zapomniany. Następnie staje się albo **przyjęte**, jako członek lub wolontariusz, zależnie od tego, o co prosiłeś, albo **odrzucone**. Żaden krok nie jest automatyczny i w żadnym momencie nie ocenia cię algorytm.",
          },
          {
            type: "paragraph",
            text: "Wpis zawiera najwyżej siedem rzeczy: twoje imię i nazwisko, adres e-mail, kraj, charakter, o jaki prosiłeś, jeden obszar zainteresowań oraz — tylko jeśli zdecydujesz się je podać — twój region lub miasto i wiadomość. Nie ma adresu pocztowego, numeru telefonu ani daty urodzenia. Nic nie jest wywnioskowane, wzbogacone ani dokupione skądkolwiek indziej.",
          },
          {
            type: "paragraph",
            text: "Dwa pola opcjonalne mogą powiedzieć o tobie najwięcej, więc traktuje się je tak samo starannie jak twoje imię i nazwisko. Region zawęża krąg osób znacznie bardziej niż kraj, a wiadomość jest dowolnym tekstem — to w niej ludzie wspominają o pracodawcy, sytuacji rodzinnej albo prawnej. **Oba są szyfrowane** i żadne z nich nigdy nie trafia do dziennika administracyjnego. Jeśli wolisz ich nie podawać, zostaw je puste; zgłoszenie działa dokładnie tak samo.",
          },
          {
            type: "subheading",
            text: "Jedna rzecz, której nie napisałeś",
          },
          {
            type: "paragraph",
            text: "Rozpatrując zgłoszenie, administrator może dołączyć do niego krótką notatkę — treść rozmowy, powód decyzji, z kim cię poznać. To jedyna rzecz w twoim wpisie, której nie napisałeś sam, i jedyne pole w całej bazie danych zawierające ocenę jednej osoby przez drugą, dlatego jest **szyfrowane jak reszta** i nigdy nie trafia do dziennika administracyjnego.",
          },
          {
            type: "paragraph",
            text: "Jest też częścią twojego wpisu na potrzeby wniosku o dostęp do danych. Jeśli zapytasz, co jest o tobie przechowywane, notatka znajdzie się w odpowiedzi. Od każdego, kto ją pisze, oczekuje się, że napisze ją, mając to na uwadze.",
          },
          {
            type: "subheading",
            text: "Dlaczego wolno nam to przechowywać",
          },
          {
            type: "paragraph",
            text: "Przynależność do ruchu politycznego wskazuje na poglądy polityczne, które RODO traktuje jako szczególne kategorie danych osobowych w rozumieniu artykułu 9 i chroni surowiej niż zwykłe dane osobowe. Opieramy się na twojej wyraźnej zgodzie, udzielonej przy zgłoszeniu, w powiązaniu z artykułem 9 ust. 2 lit. d, który pozwala niezarobkowemu podmiotowi o celach politycznych przetwarzać dane swoich własnych członków — pod warunkiem że dane nie są ujawniane poza ten podmiot bez zgody. Nie są i nie będą.",
          },
          {
            type: "subheading",
            text: "Jak długo jest przechowywane",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "Dopóki trwa członkostwo, i nie dłużej, niż ruch tego potrzebuje.",
              "Usuwane, kiedy tylko o to poprosisz, bez konieczności podawania powodu.",
              "Nic nie jest usuwane automatycznie po upływie czasu, bo zgłoszenie, którego nikt jeszcze nie przeczytał, jest czyimś zgłoszeniem, a nie czymś przedawnionym.",
              "**Zgłoszenie, które zostało odrzucone, jest przechowywane z adnotacją o odrzuceniu, a nie usuwane.** To wybór świadomy i ma dla ciebie swoją cenę, więc mówimy o nim wprost: usunięcie wpisu usunęłoby także możliwość rozpoznania, że to samo zgłoszenie było już wcześniej rozpatrywane, i ruch rozpatrywałby je od początku za każdym razem, gdy zostałoby wysłane ponownie. Jeśli wolisz, żeby nie zostało nic, poproś — i wpis zostanie usunięty.",
              "Opisany niżej dziennik administracyjny zapisuje, że wpis został utworzony, zmieniony lub usunięty, i przez kogo, ale nigdy jego treści.",
            ],
          },
          {
            type: "subheading",
            text: "Co robi sam formularz",
          },
          {
            type: "paragraph",
            text: "Twoje imię i nazwisko, adres, region i wiadomość są szyfrowane przed zapisaniem, w obrębie tego samego żądania — żadne z nich nigdy nie jest przechowywane w postaci czytelnej. Odpowiedź, którą widzisz, jest identyczna bez względu na to, czy adres już był w rejestrze, więc formularza nie da się użyć do sprawdzenia, czy dana osoba jest członkiem. Liczba zgłoszeń z jednego połączenia jest ograniczona, a ponadto istnieje pułap tego, ile strona przyjmie w ciągu godziny od wszystkich razem; jedno i drugie to obrona przed skryptem zapełniającym rejestr, a nie środek skierowany przeciw tobie.",
          },
          {
            type: "paragraph",
            text: "Formularz ma też jedno pole, którego nigdy nie zobaczysz: puste okienko umieszczone poza ekranem, pomijane przez klawiaturę i ukryte przed czytnikami ekranu. Automaty wypełniają każde pole, jakie znajdą, a ludzie tego wypełnić nie mogą, więc wszystko, co przychodzi z wypełnionym tym polem, jest odrzucane bez zapisania. **Nie używamy CAPTCHY ani zewnętrznego wykrywania botów**, i to celowo — działają one tak, że firma z zewnątrz obserwuje każdego, kto próbuje przystąpić do ruchu politycznego, a to gorszy układ niż ten, który przyjmujemy tutaj.",
          },
          {
            type: "paragraph",
            text: "Twoje dane nigdy nie są sprzedawane, nigdy nie są udostępniane innej organizacji, nigdy nie służą do budowania profilu reklamowego i nigdy nie są przekazywane osobom trzecim w żadnym celu. Nie podejmuje się wobec ciebie żadnej decyzji automatycznej.",
          },
        ],
      },

      "how-it-is-protected": {
        title: "Jak jest chronione",
        body: [
          {
            type: "paragraph",
            text: "Lista członków to dokładnie taki dokument, który nigdy nie powinien wyciec, dlatego zbudowano ją na założeniu, że kiedyś coś pójdzie nie tak. To, co następuje, jest opisem zabezpieczeń, a nie obietnicą, że nic nie może się stać. Korespondencja przesłana przez formularz kontaktowy jest przechowywana w ten sam sposób.",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "**Twoje imię i nazwisko, adres e-mail, region, wiadomość oraz każda notatka napisana o tobie są szyfrowane** przed zapisaniem, kluczem, którego nie przechowuje się w bazie danych. Ukradziona kopia bazy danych albo jej kopii zapasowej po odszyfrowaniu nie daje niczego.",
              "**Twój kraj jest przechowywany bez szyfrowania**, bo liczenie i organizowanie się według krajów jest powodem, dla którego ta lista istnieje. Sam z siebie nie identyfikuje nikogo. Twojego regionu, który zawężałby krąg znacznie bardziej, nie traktuje się tak samo — jest szyfrowany razem z resztą.",
              "**Nikt nie loguje się hasłem.** Dostęp administracyjny wymaga klucza dostępu przechowywanego na fizycznym urządzeniu, którego nie da się odgadnąć, wyłudzić ani odczytać z ukradzionej bazy danych.",
              "**Odczytanie nazwisk albo wiadomości wymaga drugiego potwierdzenia.** Samo zalogowanie pokazuje tylko liczby; ujawnienie pojedynczej osoby albo otwarcie jakiegokolwiek listu wymaga świeżego użycia klucza dostępu, ważnego przez kilka minut. Kto ukradnie aktywną sesję, dostaje statystyki, a nie ludzi.",
              "**Każde odczytanie jest zapisywane w dzienniku** — kto patrzył i kiedy. Nie tylko każda zmiana: przy takiej liście samo patrzenie jest tym, co warto zapisać. Czego szukano, zapisuje się jako jednokierunkowy skrót, więc dziennik może potwierdzić, czy dana osoba była wyszukiwana, sam nie stając się listą nazwisk.",
              "**Nie ma funkcji eksportu.** Listy nie da się pobrać jako pliku, bo plik jest tą postacią, w której takie listy wyciekają.",
            ],
          },
          {
            type: "paragraph",
            text: "Nikt spoza własnej administracji ruchu nie może odczytać żadnej jej części i żadna jej część nie jest nigdzie publikowana, w żadnym stopniu zagregowania, bez zgody.",
          },
        ],
      },

      forms: {
        title: "Dwa formularze",
        body: [
          {
            type: "paragraph",
            text: "Pierwszy to zgłoszenie członkowskie na [Włącz się][join], opisane powyżej.",
          },
          {
            type: "paragraph",
            text: "Drugi to formularz wiadomości na [Kontakt][contact]. Przechowuje twoje imię i nazwisko, adres e-mail, funkcję, do której się zwróciłeś, i to, co napisałeś. Imię i nazwisko, adres oraz wiadomość są szyfrowane dokładnie tak jak dane członka — napisanie do organizacji nie jest tym samym co przynależenie do niej, ale różnica jest cieńsza, niż się wydaje, a list, w którym piszesz, że myślisz o wstąpieniu, ujawnia tyle samo co sam rejestr.",
          },
          {
            type: "paragraph",
            text: "Korespondencję przechowuje się, dopóki nie zostanie załatwiona, i nie dłużej, niż wymaga tego odpowiedź; usuwa się ją na życzenie i nigdy nie służy do dopisania cię do rejestru członków. Przystąpienie jest odrębną decyzją, którą musisz podjąć świadomie. Na stronie kontaktowej nie ma podanych adresów e-mail, bo każdy zostaje opublikowany wtedy, gdy funkcja, do której należy, istnieje i ktoś odpowiada za jego czytanie.",
          },
        ],
      },

      analytics: {
        title: "Dane o ruchu",
        body: [
          {
            type: "paragraph",
            text: "Wizyty liczy Vercel Web Analytics, które nie używa ciasteczek: nie zapisuje niczego na twoim urządzeniu, nie przechowuje danych osobowych, nie przypisuje ci żadnego identyfikatora i nie może śledzić cię między stronami. Jest udostępniane z tej domeny, a nie z zewnętrznej sieci, więc wczytanie strony nie ujawnia twojej wizyty nikomu innemu. Dlatego strona nie ma banera zgody — nie ma na co się zgadzać.",
          },
          {
            type: "paragraph",
            text: "Powstaje z tego liczba odsłon i odwiedzających, w podziale na podstrony i kraje. Nie jest powiązana z wpisami członkowskimi i być nie może: jedno i drugie nie zawiera nic wspólnego, co pozwoliłoby je połączyć.",
          },
          {
            type: "paragraph",
            text: "Strony administracyjne są wyłączone z licznika, więc dane opisują czytelników, a nie naszą własną pracę redakcyjną.",
          },
        ],
      },

      "fonts-and-assets": {
        title: "Kroje pisma i zasoby",
        body: [
          {
            type: "paragraph",
            text: "Kroje pisma są udostępniane z tej strony, a nie z sieci dostarczającej fonty, więc wczytanie strony nie ujawnia twojej wizyty osobie trzeciej. Wszystkie obrazy są przechowywane lokalnie; nic nie jest wczytywane bezpośrednio z innej domeny.",
          },
        ],
      },

      "server-logs": {
        title: "Dzienniki serwera",
        body: [
          {
            type: "paragraph",
            text: "Ktokolwiek hostuje tę stronę, będzie prowadził zwykłe dzienniki serwera WWW, które zazwyczaj zawierają adresy IP, żądane ścieżki i znaczniki czasu. Wynika to z ustaleń dotyczących hostingu, a nie z tej witryny, i ustalenia te zostaną tu wskazane, gdy zostaną przesądzone.",
          },
        ],
      },

      "your-rights": {
        title: "Twoje prawa",
        body: [
          {
            type: "paragraph",
            text: "Na mocy RODO masz w odniesieniu do przechowywanych o tobie danych osobowych prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz sprzeciwu. Tam, gdzie przetwarzanie opiera się na zgodzie, możesz ją też w każdej chwili cofnąć, a cofnięcie jest tak samo proste, jak było jej udzielenie.",
          },
          {
            type: "paragraph",
            text: "Te prawa są rzeczywiste i istnieje mechanizm, który je realizuje: wpis można na żądanie wydać, poprawić albo usunąć całkowicie, a usunięcie znaczy usunięcie, a nie oznaczenie wiersza, który po cichu zostaje.",
          },
          {
            type: "statement",
            text: "Jednego brakuje, i wolimy to powiedzieć, niż pozostawić ci odkrycie tego samemu.",
          },
          {
            type: "paragraph",
            text: "Rejestracja jako partia albo stowarzyszenie nie została zakończona, więc nie można jeszcze wskazać administratora danych i nie jest publikowany żaden adres do korespondencji — zobacz [notę prawną][imprint]. Dopóki to nie zostanie przesądzone, nie ma adresu, na który mógłbyś wysłać żądanie z pewnością, kto je przeczyta, ani organu nadzorczego, do którego można by złożyć skargę na wskazanego administratora.",
          },
          {
            type: "paragraph",
            text: "To rzeczywista luka i przemawia ona za tym, żeby poczekać: jeśli brak wskazanego administratora cię niepokoi, jeszcze się nie zgłaszaj. Nic się nie traci, gdy zgłosisz się później. Ta strona wskaże administratora, adres i organ nadzorczy, zanim luka się zamknie, a nie po tym.",
          },
          {
            type: "note",
            text: "Ta nota opisuje stronę w stanie, w jakim jest, i jest napisana po to, żeby ją przeczytać, a nie po to, żeby odhaczyć listę kontrolną. Nie jest poradą prawną i z chwilą rejestracji zostanie zastąpiona pełną polityką prywatności.",
          },
        ],
      },
    },
  },

  imprint: {
    eyebrow: "Informacje prawne",
    title: "Nota prawna",
    metaTitle: "Nota prawna",
    lede: "Informacje o wydawcy, wymagane przez europejskie prawo medialne i prawo o partiach.",
    description:
      "Informacje o wydawcy Restore Europa Movement. Ruch jest w trakcie tworzenia; dane rejestrowe publikujemy w miarę, jak stają się prawdziwe.",
    intro: [
      {
        type: "lead",
        text: "Tę stronę wydaje Restore Europa Movement, ruch polityczny narodów Europy.",
      },
      {
        type: "paragraph",
        text: "Rejestracja jako partia albo stowarzyszenie jest w toku i nie została jeszcze zakończona w żadnej jurysdykcji. Dopóki się nie zakończy, nie ma zarejestrowanej nazwy, numeru wpisu ani przedstawiciela ustawowego, które można by podać, a ta strona żadnego nie wymyśli. Każda z tych danych pojawi się tutaj wtedy, gdy stanie się elementem rejestru publicznego.",
      },
      {
        type: "paragraph",
        text: "Pisma prawne i sprostowania należy przesyłać drogami korespondencji wymienionymi na [Kontakt][contact], gdzie podany jest adres opublikowany dla każdej funkcji.",
      },
    ],
    particularsHeading: "Dane, które zostaną opublikowane",
    particularsNote: "Po zakończeniu rejestracji, w tej kolejności.",
    aboutLabel: "O tej stronie",
    entries: {
      publisher: {
        term: "Wydawca",
        description: "Zarejestrowana nazwa stowarzyszenia albo partii.",
      },
      "legal-form": {
        term: "Forma prawna i jurysdykcja",
        description: "Wyznaczona przez kraj rejestracji.",
      },
      "registered-address": {
        term: "Adres rejestrowy",
        description: "Siedziba organizacji.",
      },
      responsible: {
        term: "Odpowiedzialny za treść",
        description: "Osoba odpowiadająca na mocy obowiązującego prawa prasowego.",
      },
      register: {
        term: "Rejestr i numer",
        description: "Rejestr stowarzyszeń albo partii i numer wpisu.",
      },
      "represented-by": {
        term: "Reprezentowana przez",
        description: "Osoby funkcyjne umocowane do działania w imieniu organizacji.",
      },
      "supervisory-authority": {
        term: "Organ nadzorczy",
        description: "Tam, gdzie krajowe prawo o partiach taki przewiduje.",
      },
    },
    closing: [
      {
        type: "subheading",
        text: "Ta strona",
      },
      {
        type: "paragraph",
        text: "Manifest, zasady i katalog programowy są wydawane przez ruch i można je cytować z podaniem źródła. Źródła zdjęć i licencje są zapisane w repozytorium, z którego budowana jest ta strona.",
      },
      {
        type: "paragraph",
        text: "Sprostowania i pisma prawne można przesyłać przez [Kontakt][contact], gdy adresy zostaną opublikowane.",
      },
    ],
  },
};

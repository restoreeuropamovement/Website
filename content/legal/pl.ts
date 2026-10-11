import type { LegalText } from "./index";

export const legalText: LegalText = {
  privacy: {
    eyebrow: "Informacje prawne",
    title: "Prywatność",
    metaTitle: "Prywatność",
    lede: "Czytanie tej strony nie zbiera niczego, co cię identyfikuje. Trzy podstrony o coś proszą, i tylko wtedy, gdy zdecydujesz się to podać. Co się z tym dalej dzieje, opisano poniżej.",
    description:
      "Czytanie tej strony nikogo nie identyfikuje: żadnych ciasteczek, żadnego śledzenia, tylko anonimowe zliczanie wizyt. Trzy podstrony o coś proszą, i tylko wtedy, gdy zdecydujesz się to podać. Co jest przechowywane, co jest zaszyfrowane i jak to usunąć.",
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
            text: "Czytanie nie ustawia ciasteczek i nie zapisuje niczego w pamięci lokalnej ani sesyjnej twojej przeglądarki. Żaden profil twojej wizyty nie jest tworzony, kupowany ani sprzedawany. Jedyne skrypty to dwa opisane niżej pomiary — licznik ruchu i pomiar czasu czytania stron — i żaden z nich nie może cię zidentyfikować.",
          },
          {
            type: "paragraph",
            text: "Są na tej stronie trzy miejsca, przez które możesz przekazać dane osobowe, i we wszystkich trzech trzeba tego naprawdę chcieć: zgłoszenie członkowskie na [Włącz się][join], formularz wiadomości na [Kontakt][contact] i pole zapisu na [stronie biuletynu][newsletter]. Nic innego na stronie niczego nie przesyła, a do żadnego z tych formularzy nie trafia się przypadkiem.",
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
            text: "Wpis zawiera najwyżej siedem rzeczy, a każdą z nich podajesz ty sam: twoje imię i nazwisko, adres e-mail, kraj, charakter, o jaki prosiłeś, jeden obszar zainteresowań oraz — tylko jeśli zdecydujesz się je podać — twój region lub miasto i wiadomość. Nie ma adresu pocztowego, numeru telefonu ani daty urodzenia. Nic nie jest wywnioskowane, wzbogacone ani dokupione skądkolwiek indziej. Dwie dalsze rzeczy mogą zostać dodane do wpisu później, przez człowieka, a nie przez ciebie, i obie opisano niżej.",
          },
          {
            type: "paragraph",
            text: "Dwa pola opcjonalne mogą powiedzieć o tobie najwięcej, więc traktuje się je tak samo starannie jak twoje imię i nazwisko. Region zawęża krąg osób znacznie bardziej niż kraj, a wiadomość jest dowolnym tekstem — to w niej ludzie wspominają o pracodawcy, sytuacji rodzinnej albo prawnej. **Oba są szyfrowane** i żadne z nich nigdy nie trafia do dziennika administracyjnego. Jeśli wolisz ich nie podawać, zostaw je puste; zgłoszenie działa dokładnie tak samo.",
          },
          {
            type: "subheading",
            text: "Dwie rzeczy, których nie napisałeś",
          },
          {
            type: "paragraph",
            text: "Pierwszą jest notatka. Rozpatrując zgłoszenie, administrator może dołączyć do niego krótką — treść rozmowy, powód decyzji, z kim cię poznać. To jedyne pole w całej bazie danych zawierające ocenę jednej osoby przez drugą, dlatego jest **szyfrowane jak reszta** i nigdy nie trafia do dziennika administracyjnego.",
          },
          {
            type: "paragraph",
            text: "Jest też częścią twojego wpisu na potrzeby wniosku o dostęp do danych. Jeśli zapytasz, co jest o tobie przechowywane, notatka znajdzie się w odpowiedzi. Od każdego, kto ją pisze, oczekuje się, że napisze ją, mając to na uwadze.",
          },
          {
            type: "paragraph",
            text: "Drugą jest funkcja w ruchu, a to nie to samo co charakter, o jaki prosiłeś przy zgłoszeniu. Większość wpisów nie zawiera żadnej. Zapisuje się ją tylko dla tych niewielu osób, które biorą na siebie odpowiedzialność — kierowanie oddziałem krajowym, zastępowanie osoby, która nim kieruje, prowadzenie koła lokalnego, koordynowanie między oddziałami, kontakt z prasą — i nazywa oddział, do którego należy. Nic nie jest wywnioskowane i nic nie dzieje się automatycznie: funkcja istnieje, bo człowiek ją zapisał po twojej zgodzie, odbiera się ją tą samą drogą, i jak wszystko inne jest częścią twojego wpisu na potrzeby wniosku o dostęp do danych.",
          },
          {
            type: "paragraph",
            text: "**Funkcja jest szyfrowana jak twoje imię i nazwisko**, i to z powodu ostrzejszego niż cokolwiek innego we wpisie. Oddziałem krajowym kieruje jedna osoba. Twój kraj jest przechowywany bez szyfrowania, bo sam z siebie opisuje grupę ludzi i nie identyfikuje nikogo — ale kierowanie oddziałem w twoim kraju nie opisuje grupy, opisuje ciebie. Tam więc, gdzie kraj można liczyć otwarcie, funkcji, która wyróżniałaby cię w jego obrębie, liczyć tak nie można, i jest przechowywana tam, gdzie reszta twoich danych.",
          },
          {
            type: "subheading",
            text: "Dlaczego wolno nam to przechowywać",
          },
          {
            type: "paragraph",
            text: "Przynależność do ruchu politycznego wskazuje na poglądy polityczne, które RODO traktuje jako szczególne kategorie danych osobowych w rozumieniu artykułu 9 i chroni surowiej niż zwykłe dane osobowe. Opieramy się na twojej wyraźnej zgodzie, udzielonej przy zgłoszeniu, w powiązaniu z artykułem 9 ust. 2 lit. d, który pozwala niezarobkowemu podmiotowi o celach politycznych przetwarzać dane swoich własnych członków — pod warunkiem że dane nie są ujawniane poza ten podmiot bez zgody. Nie są. Jedyna firma, która cokolwiek widzi, działa na nasze zlecenie, nie realizuje przy tym żadnego własnego celu i uczestniczy w tym wyłącznie po to, by dostarczyć ci naszą wiadomość; co widzi, opisano niżej.",
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
            text: "Twoje dane nigdy nie są sprzedawane, nigdy nie są udostępniane innej organizacji i nigdy nie służą do budowania profilu reklamowego. Nie podejmuje się wobec ciebie żadnej decyzji automatycznej.",
          },
          {
            type: "paragraph",
            text: "**Uczestniczy w tym jedna firma z zewnątrz, i to wyłącznie po to, byśmy mogli do ciebie napisać.** Kiedy twoje zgłoszenie zostanie zapisane, serwis wysyła krótkie potwierdzenie na podany przez ciebie adres, a wiadomość tę dostarcza Resend — ten sam i jedyny dostawca, który doręcza opisane niżej pismo. Siłą rzeczy widzi on adres odbiorcy i temat wiadomości, a temat wymienia nazwę ruchu; dostawca dowiaduje się więc, że z tego adresu złożono tu zgłoszenie, i prowadzi własny zapis doręczenia. Nie da się tego uniknąć, jeśli w ogóle mamy do ciebie pisać, i z tego właśnie powodu wcześniej nie wysyłano zgłaszającym się niczego. Nic więcej do niego nie trafia: ani twoje nazwisko, ani region, ani twoja wiadomość — żadne z nich nie pojawia się w treści. Wiadomość jest czystym tekstem, bez obrazków i bez czegokolwiek, co meldowałoby zwrotnie, więc ani dostawca, ani ruch nie są w stanie stwierdzić, czy ją otworzyłeś. To jedyna wiadomość, jaką serwis do ciebie wysyła — zgłoszenie nie zapisuje cię na żadną listę wysyłkową, a pismo to osobny wybór, którego musiałbyś dokonać sam.",
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
              "**Twoje imię i nazwisko, adres e-mail, region, wiadomość, każda sprawowana przez ciebie funkcja oraz każda notatka napisana o tobie są szyfrowane** przed zapisaniem, kluczem, którego nie przechowuje się w bazie danych. Ukradziona kopia bazy danych albo jej kopii zapasowej po odszyfrowaniu nie daje niczego.",
              "**Twój kraj jest przechowywany bez szyfrowania**, bo liczenie i organizowanie się według krajów jest powodem, dla którego ta lista istnieje. Sam z siebie nie identyfikuje nikogo. Twojego regionu oraz każdej sprawowanej przez ciebie funkcji, które zawężałyby krąg znacznie bardziej, nie traktuje się tak samo — jedno i drugie jest szyfrowane razem z resztą.",
              "**Nikt nie loguje się hasłem.** Dostęp administracyjny wymaga klucza dostępu przechowywanego na fizycznym urządzeniu, którego nie da się odgadnąć, wyłudzić ani odczytać z ukradzionej bazy danych.",
              "**Odczytanie nazwisk albo wiadomości wymaga drugiego potwierdzenia.** Samo zalogowanie pokazuje tylko liczby; ujawnienie pojedynczej osoby, otwarcie jakiegokolwiek listu albo zobaczenie, kto sprawuje jaką funkcję, wymaga świeżego użycia klucza dostępu, ważnego przez kilka minut. Kto ukradnie aktywną sesję, dostaje statystyki, a nie ludzi.",
              "**Każde odczytanie jest zapisywane w dzienniku** — kto patrzył i kiedy. Nie tylko każda zmiana: przy takiej liście samo patrzenie jest tym, co warto zapisać. Czego szukano, zapisuje się jako jednokierunkowy skrót, więc dziennik może potwierdzić, czy dana osoba była wyszukiwana, sam nie stając się listą nazwisk. Nadanie albo odebranie funkcji zapisuje się tą samą drogą: dziennik pokazuje, że któraś się zmieniła i przy którym wpisie, nigdy jednak która to była.",
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
        title: "Trzy formularze",
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
          {
            type: "paragraph",
            text: "Trzeci to pole zapisu na [stronie biuletynu][newsletter], które pyta o adres poczty elektronicznej i o nic więcej. Ma niżej własny rozdział, bo to, co dzieje się z adresem na liście wysyłkowej, jest innym pytaniem niż to, co dzieje się z listem, który ktoś czyta.",
          },
        ],
      },

      newsletter: {
        title: "Jeśli zapiszesz się na biuletyn",
        body: [
          {
            type: "paragraph",
            text: "Formularz na [stronie biuletynu][newsletter] pyta o jedno: o adres poczty elektronicznej. Żadnego nazwiska, żadnego kraju i niczego do napisania. Obok wpis przechowuje to, które z sześciu wydań językowych czytałeś, żeby to, co ruch mówi wokół każdego eseju, docierało do ciebie w tym języku, oraz daty zapisania i potwierdzenia.",
          },
          {
            type: "paragraph",
            text: "**Na żaden adres nic nie jest wysyłane, dopóki ten adres nie potwierdzi.** Zapis zachowuje wpis jako niepotwierdzony i wysyła tam jedną wiadomość z odnośnikiem ważnym dwa dni i do jednorazowego użycia. Przed otwarciem tego odnośnika nie jest wysyłany żaden esej, a adres nigdy niepotwierdzony zostaje usunięty, bez tego, by ktokolwiek na niego spojrzał: odnośnik traci ważność dwa dni po wysłaniu, a raz na dobę przebieg usuwa to, czego ważność już minęła. Ponieważ przebieg następuje po utracie ważności, a nie w tej samej chwili, najdłuższy czas przechowywania takiego adresu to trzy dni — a nie dwa — i zwykle jest krócej. To odwrotność zasady obowiązującej przy zgłoszeniach członkowskich, gdzie nic nie jest usuwane po upływie terminu, i różnica jest zamierzona: nieprzeczytane zgłoszenie jest czyimś zgłoszeniem, a niepotwierdzony adres mógł wpisać ktoś obcy i osoba, do której należy, ani razu go nie potwierdziła.",
          },
          {
            type: "paragraph",
            text: "**Adres jest szyfrowany** przed zapisaniem, tą samą metodą i tym samym kluczem co dane członka — zobacz rozdział powyżej. Język i daty są jawne, bo żadne z nich nikogo nie identyfikuje. Nie ma eksportu, a żadna strona panelu administracyjnego w ogóle nie pokazuje adresu osoby zapisanej. Odszyfrowuje je jedna operacja — ta, która wysyła numer — i wymaga ona potwierdzenia kluczem dostępu sprzed kilku minut, a nie samego zalogowania. Wymiana klucza szyfrowania, przeprowadzana z wiersza poleceń przez tego, kto trzyma klucze, również je odczytuje, żeby zapisać je z powrotem pod nowym.",
          },
          {
            type: "paragraph",
            text: "**Odpowiedź, jaką daje formularz, jest taka sama niezależnie od tego, czy adres już był na liście.** Który z dwóch przypadków zachodził, mówi dopiero wiadomość, która potem przychodzi, a ta wiadomość trafia do osoby umiejącej otworzyć tę skrzynkę. Bez tego formularz byłby sposobem sprawdzania, adres po adresie, czy wskazana osoba czyta biuletyn tego ruchu. Formularz ma ograniczoną częstotliwość na połączenie, podlega temu samemu godzinowemu pułapowi co dwa pozostałe i niesie to samo niewidoczne pole-wabik; tu również nie ma CAPTCHA ani cudzego wykrywania robotów.",
          },
          {
            type: "paragraph",
            text: "**Odejście zajmuje jedno kliknięcie i nie wymaga konta.** Każda wiadomość niesie odnośnik usuwający adres, twój program pocztowy może pokazywać własny przycisk rezygnacji korzystający z tego samego odnośnika, i ani jedno, ani drugie nie pyta o powód ani go nie zapisuje. Ten odnośnik nie jest znacznikiem trzymanym w tabeli: przy każdym użyciu jest wyliczany z wpisu i z klucza szyfrowania, więc skradziona kopia bazy nie dałaby nikomu sposobu na opróżnienie listy, a wiadomość odnaleziona w archiwum po latach nadal działa, dopóki działa ten klucz. Wymiana klucza — rzecz robiona od czasu do czasu, nie rutynowo — unieważnia odnośniki w numerach wysłanych wcześniej.",
          },
          {
            type: "paragraph",
            text: "**Bierze w tym udział jedna firma z zewnątrz i jest to ta, która przewozi pocztę.** Wiadomości doręcza Resend, który siłą rzeczy dowiaduje się, na jaki adres każda z nich idzie, i prowadzi o tym własne zapisy. Nic się na to nie poradzi — adres jest celem — więc wszystko inne jest poza tym trzymane. Wiadomości są zwykłym tekstem bez obrazków, bez piksela śledzącego i bez odnośnika wskazującego, który czytelnik za nim poszedł, więc ani dostawca, ani ruch nie mogą stwierdzić, czy którąś otworzyłeś. Twój adres nie jest sprzedawany, nie jest udostępniany żadnej innej organizacji, nie służy do budowania profilu i nie trafia do nikogo poza dostawcą, który go doręcza.",
          },
          {
            type: "paragraph",
            text: "**Po twoim odejściu zostaje** sam wpis, oznaczony jako zakończony — zaszyfrowany adres, język i daty — a nie zupełnie nic. Nie dostaje już żadnej poczty, a ponowne wpisanie tego adresu zaczyna się od kroku z potwierdzeniem, bo cofnięta zgoda nie jest zgodą. Całkowite usunięcie należy do praw opisanych niżej. Zapis na biuletyn i zgłoszenie członkowskie są całkiem odrębne: żadna z list nie powstaje z drugiej, a nic, co tu robisz, nie dopisuje cię do rejestru członków.",
          },
          {
            type: "paragraph",
            text: "Dziennik administracyjny zapisuje, że zapis został poproszony, potwierdzony albo cofnięty, wraz z czasem i jednokierunkowym skrótem połączenia, z którego przyszedł. Adresu nie zapisuje nigdy. Zapisywany jest też codzienny przebieg, wraz z liczbą usuniętych adresów niepotwierdzonych i niczym więcej, żeby obiecane wyżej usunięcie dało się wykazać, a nie tylko tutaj zapewnić. Zapisywana jest też wysyłka — który esej i ile wiadomości poszło — bo napisanie naraz do całej listy jest najbardziej brzemienną w skutki rzeczą, jaką administracja tego ruchu może zrobić.",
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
            text: "Powstaje z tego liczba odsłon i odwiedzających, w podziale na podstrony, kraje, urządzenia, systemy operacyjne i przeglądarki. Nie jest powiązana z wpisami członkowskimi i być nie może: jedno i drugie nie zawiera nic wspólnego, co pozwoliłoby je połączyć.",
          },
          {
            type: "paragraph",
            text: "Te dzienne sumy są co noc kopiowane do własnej bazy danych tego projektu, ponieważ usługa licząca przechowuje tylko ostatni miesiąc, a chcielibyśmy widzieć cały rok. Kopiowane są same sumy — data, liczba odwiedzających, liczba odsłon — i nic, co dotyczyłoby pojedynczej wizyty.",
          },
          {
            type: "paragraph",
            text: "Dwie kolejne rzeczy mierzymy sami, a nie przez usługę liczącą, i obie opisujemy w całości, bo w obu wypadkach twoja przeglądarka coś nam wysyła, kiedy czytasz.",
          },
          {
            type: "paragraph",
            text: "Pierwsza to liczba osób, które mają teraz stronę otwartą. Przy wczytaniu strona losuje liczbę i trzyma ją w pamięci strony — nie w ciasteczku, nie w pamięci lokalnej ani sesyjnej, nigdzie, gdzie by przetrwała. Znika, gdy zamkniesz kartę albo odświeżysz, więc nie rozpozna cię po powrocie, a naszą kopię usuwamy dziewięćdziesiąt sekund po ostatnim sygnale twojej przeglądarki. Odpowiada tylko na pytanie, ile kart jest otwartych i na których podstronach; nigdy — czyich.",
          },
          {
            type: "paragraph",
            text: "Druga to czas, przez jaki strona zatrzymuje czytelnika. Sekundy, które strona spędza przed tobą, dodawane są wprost do sumy dnia dla tej podstrony, w tej samej operacji, która je przyjmuje. Twoja pojedyncza wartość nigdy nie zostaje zapisana: nigdzie nie ma zapisu, ile czasu na czymkolwiek spędziłeś, i żadnego nie dałoby się odtworzyć. Karta pozostawiona za innym oknem nie liczy się wcale, a każde pojedyncze czytanie dłuższe niż pół godziny liczone jest jako pół godziny.",
          },
          {
            type: "paragraph",
            text: "Żaden z tych pomiarów nie zapisuje twojego adresu, jego zamaskowanej postaci, identyfikatora twojej przeglądarki ani żadnej wartości, która przetrwałaby stronę, na której jesteś. Powstają z nich sumy na podstronę i dzień; dlatego przechowujemy je bezterminowo i dlatego nie ma w nich nic, co można by usunąć na żądanie.",
          },
          {
            type: "paragraph",
            text: "Strony administracyjne są wyłączone z tego wszystkiego, więc dane opisują czytelników, a nie naszą własną pracę redakcyjną.",
          },
        ],
      },

      "fonts-and-assets": {
        title: "Kroje pisma i zasoby",
        body: [
          {
            type: "paragraph",
            text: "Kroje pisma są udostępniane z tej strony, a nie z sieci dostarczającej fonty, więc wczytanie strony nie ujawnia twojej wizyty osobie trzeciej. Każdy obraz, którego używają same strony serwisu, również leży tutaj; żaden nie jest wczytywany bezpośrednio z innej domeny.",
          },
          {
            type: "paragraph",
            text: "Jedna strona jest wyjątkiem i zostaje tu nazwana, a nie przemilczana. Projekty na stronie z materiałami leżą we własnym magazynie plików ruchu, który prowadzi ta sama firma, co utrzymuje ten serwis, a podglądy na tej stronie wczytywane są wprost z niego. Otwarcie jej pobiera więc obrazy z innego adresu — ale nie od innej organizacji, a żądanie nie niesie niczego o tobie: adres wskazuje plik, a nie czytającego, i wysyłany z nim referer jest skrócony do nazwy tego serwisu, bez adresu strony, z której nastąpiło przejście. Żadna inna strona nie pobiera niczego skądkolwiek indziej.",
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

import type { ContentBlock } from "@/lib/content-types";
import type { ManifestoText } from "./index";

export const manifestoText: ManifestoText = {
  meta: {
    title: "Manifest europejskiej odnowy integralnej",
    subtitle: "O cywilizację chrześcijańską, europejską i na ludzką miarę",
    status: "Dokument założycielski · Tekst poddany pod rozwagę przed formalnym przyjęciem",
  },
  labels: {
    eyebrow: "Dokument założycielski",
    download: "Pobierz manifest",
    contents: "Spis treści",
    contentsNavLabel: "Spis treści manifestu",
    progressLabel: "Postęp czytania",
    copyDocument: "Skopiuj odnośnik do manifestu",
    copySection: "Skopiuj odnośnik do części {numeral}, {title}",
    reference:
      "Wersją rozstrzygającą jest tekst angielski. Gdy jakiś fragment jest wewnątrz ruchu sporny, różnicę zdań się odnotowuje, a nie usuwa milczącą poprawką.",
  },
  sections: {
    preamble: {
      title: "Preambuła",
      summary: "Europa jest cywilizacją i dziedzictwem — czymś, co zostało przekazane, a nie wymyślone.",
      body: [
        { type: "lead", text: "Europa to więcej niż kontynent, więcej niż rynek, więcej niż obszar administracyjny." },
        {
          type: "paragraph",
          text: "Jest cywilizacją: wyrosła z chrześcijaństwa i dziedzictwa antyku, z odrębnych, ukształtowanych przez historię ludów, języków i narodów, z pokoleń rodzin, z uprawianych krajobrazów, z miast i wsi, z kościołów i klasztorów, ze sztuki, filozofii, prawa i rzemiosła, z ofiary i z pamięci.",
        },
        {
          type: "paragraph",
          text: "Tego dziedzictwa nie stworzyły abstrakcyjne jednostki wyjęte z historii. Przekazywały je sobie kolejne pokolenia.",
        },
        {
          type: "paragraph",
          text: "Klasyczne ujęcie dał tej myśli Burke w roku 1790, przeciw rewolucji, która chciała zacząć wszystko od nowa z samego rozumu. Społeczeństwo — pisał — jest przymierzem, a ponieważ celów tego przymierza nie sposób osiągnąć w ciągu jednego życia, jest ono przymierzem „nie tylko między tymi, którzy żyją, lecz między tymi, którzy żyją, tymi, którzy umarli, i tymi, którzy dopiero się narodzą”. Cokolwiek okaże się sporne na dalszych stronach, to zdanie jest założeniem, które leży pod wszystkim.",
        },
        {
          type: "paragraph",
          text: "Tymczasem dzisiejsza Europa coraz częściej traktuje samo dziedziczenie jako coś podejrzanego.",
        },
        {
          type: "paragraph",
          text: "Panujący ład postawił autonomię jednostki ponad zobowiązaniem, konsumpcję ponad ciągłością, wzrost gospodarczy ponad wspólnotą, możliwości techniczne ponad ludzkim osądem, a jednolitość administracyjną ponad odrębnym charakterem ludów i miejsc. Krok po kroku osłabiał przy tym instytucje, które kiedyś stały między samotną jednostką a władzą scentralizowaną: rodzinę, parafię, cech, gminę, region i naród.",
        },
        { type: "paragraph", text: "Odrzucamy założenie, że jest to nieuchronny postęp." },
        {
          type: "paragraph",
          text: "Odrzucamy również przekonanie, że odnowa polega na mechanicznym odtworzeniu któregoś ze stuleci. Przeszłość znała niesprawiedliwość, ubóstwo, przemoc i błąd. Odnowa nie jest inscenizacją historyczną.",
        },
        {
          type: "paragraph",
          text: "Polega na tym, by odzyskać zasady, które nowoczesne społeczeństwo odrzuciło, i rozumnie zastosować je do warunków teraźniejszości.",
        },
        {
          type: "paragraph",
          text: "Nie dążymy zatem ani do rewolucji dla samej rewolucji, ani do zakonserwowania istniejącego porządku.",
        },
        { type: "statement", text: "Dążymy do odnowy." },
      ] satisfies readonly ContentBlock[],
    },

    "moral-order": {
      title: "Ład moralny",
      summary: "Wspólnota polityczna nie może trwale zachowywać neutralności wobec dobra, którego ma strzec.",
      body: [
        {
          type: "lead",
          text: "Odrzucamy liberalne twierdzenie, że wspólnota polityczna może trwale zachować neutralność wobec dobra.",
        },
        {
          type: "paragraph",
          text: "W każdej cywilizacji zawarte są rozstrzygnięcia: co zasługuje na ochronę, co należy wspierać, na czym polega sprawiedliwość i jakiego człowieka chciałaby ona wychować.",
        },
        {
          type: "paragraph",
          text: "Twierdzimy, że prawda moralna nie bierze się ani z upodobań jednostki, ani z rozkazu państwa, ani z popytu rynkowego, ani z tego, co technicznie możliwe.",
        },
        { type: "statement", text: "Człowiek ma godność, ponieważ jest osobą stworzoną przez Boga." },
        {
          type: "paragraph",
          text: "Władza polityczna nie jest więc po to, by wytworzyć nowego człowieka, ani tylko po to, by zarządzać ścierającymi się pragnieniami. Jej właściwym celem jest dobro wspólne: takie warunki społeczne, w których osoby, rodziny i wspólnoty mogą żyć cnotliwie i rozwijać się.",
        },
        {
          type: "paragraph",
          text: "Cywilizacji europejskiej nie da się zrozumieć bez chrześcijaństwa. Przyznajemy się zatem do chrześcijańskiego, a zwłaszcza katolickiego dziedzictwa Europy jako do jednego z fundamentów tej cywilizacji.",
        },
        {
          type: "paragraph",
          text: "Sprzeciwiamy się nie temu, że ludzie się różnią, lecz doktrynie, wedle której europejskie życie publiczne ma się toczyć tak, jakby jego własnego dziedzictwa religijnego nigdy nie było.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-not-atom": {
      title: "Osoba nie jest atomem",
      summary: "Zaczynamy nie od autonomicznej jednostki, lecz od osoby żyjącej w więziach.",
      body: [
        { type: "lead", text: "Liberalny indywidualizm zaczyna od autonomicznej jednostki." },
        { type: "statement", text: "My zaczynamy od osoby żyjącej w więziach." },
        {
          type: "paragraph",
          text: "Każdy człowiek wchodzi w świat, w którym są już rodzice, rodzina, język, kultura, ojczyzna, powinności, historia i zobowiązania moralne. Nie są to bezsensowne pęta, z których trzeba się bez końca wyzwalać. Należą do warunków, bez których pełne ludzkie życie nie jest możliwe.",
        },
        { type: "paragraph", text: "Prawa są rzeczywiste, ale bez obowiązków nie przetrwają." },
        {
          type: "paragraph",
          text: "Wolność jest rzeczywista, ale nie jest po prostu brakiem przymusu. Prawdziwa wolność mieści w sobie zdolność dążenia do tego, co dobre.",
        },
        { type: "paragraph", text: "Zdrowy ład polityczny utrzymuje zatem w równowadze:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "wolność i odpowiedzialność,",
            "prawa i obowiązki,",
            "godność jednostki i zobowiązanie wobec wspólnoty,",
            "władzę i pomocniczość.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "Rodzina",
      summary: "Pierwsza instytucja cywilizacji — starsza niż państwo, a przy tym taka, której trzeba zapewnić materialne warunki.",
      body: [
        { type: "lead", text: "Rodzina jest pierwszą instytucją cywilizacji i jest starsza niż państwo." },
        {
          type: "paragraph",
          text: "Uznajemy rodzinę — zbudowaną wokół małżeństwa mężczyzny i kobiety, wychowania dzieci, zobowiązania między pokoleniami oraz opieki nad młodymi i starymi — za podstawową instytucję społeczną, na której opiera się wspólnota polityczna.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Gospodarka, w której założenie rodziny jest finansowo niemożliwe, jest źle urządzona.",
            "System zatrudnienia, który traktuje rodzicielstwo jak kłopot, jest źle urządzony.",
            "Rynek mieszkaniowy, który z własnego dachu nad głową czyni przywilej nieosiągalny, jest źle urządzony.",
          ],
        },
        {
          type: "paragraph",
          text: "Kultura, która uczy wiecznej niedojrzałości, konsumpcji i samotności, nie utrzyma cywilizacji.",
        },
        {
          type: "paragraph",
          text: "Polityka publiczna powinna zatem zapewnić materialne warunki do zakładania rodzin: dostępne mieszkania, podatki uwzględniające rodzinę, wsparcie dla rodziców, stabilne zatrudnienie i czas, który nie należy do produkcji.",
        },
        {
          type: "paragraph",
          text: "Odnowa demograficzna Europy powinna brać się przede wszystkim stąd, że życie rodzinne stanie się możliwe dla samych Europejczyków — nie zaś stąd, że trwałą imigrację na wielką skalę uzna się za namiastkę narodzin i ciągłości przyszłych pokoleń.",
        },
      ] satisfies readonly ContentBlock[],
    },

    nation: {
      title: "Naród, wspólnota i ojczyzna",
      summary: "Ludzkość jest powszechna, cywilizacja zawsze konkretna. Narody Europy mają prawo zachować swoją ciągłość.",
      body: [
        { type: "lead", text: "Ludzkość jest powszechna. Cywilizacja jest zawsze konkretna." },
        {
          type: "paragraph",
          text: "Człowiek przynależy nie tylko do abstrakcyjnej ludzkości, lecz do rzeczywistych wspólnot ukształtowanych przez historię.",
        },
        {
          type: "paragraph",
          text: "Naród nie jest więc jedynie jednostką administracyjną. Jest wspólnotą pokoleń, którą spajają pamięć historyczna, język, obyczaj, instytucje, terytorium i poczucie wspólnego losu.",
        },
        {
          type: "paragraph",
          text: "Narody Europy mają uzasadniony interes w tym, by zachować swoją ciągłość historyczną.",
        },
        {
          type: "paragraph",
          text: "Równa godność wszystkich ludzi nie oznacza, że każdy kraj ma się stać kulturowo wymienny z każdym innym.",
        },
        {
          type: "list",
          marker: "none",
          items: [
            "Polskie miasto powinno pozostać rozpoznawalnie polskie.",
            "Włoskie miasto powinno pozostać rozpoznawalnie włoskie.",
            "Francuska wieś powinna pozostać rozpoznawalnie francuska.",
          ],
        },
        {
          type: "paragraph",
          text: "W zachowywaniu historycznych kultur i ludów Europy nie ma nic z natury wrogiego — nie więcej niż w zachowywaniu kultur i tożsamości historycznych innych cywilizacji.",
        },
        { type: "statement", text: "Bronimy zatem ciągłości." },
      ] satisfies readonly ContentBlock[],
    },

    immigration: {
      title: "Imigracja i integracja",
      summary:
        "Przyjmowanie w skali, którą da się pogodzić z rzeczywistą integracją; obywatelstwo jako przynależność, nie jako miejsce zamieszkania.",
      body: [
        { type: "lead", text: "Polityka imigracyjna musi służyć długofalowemu dobru wspólnemu narodu przyjmującego." },
        {
          type: "paragraph",
          text: "Żadne społeczeństwo nie ma nieograniczonej zdolności przyjmowania zmiany demograficznej — za pewną granicą odbija się ona na zaufaniu społecznym, mieszkalnictwie, ciągłości kulturowej, infrastrukturze i spójności politycznej.",
        },
        {
          type: "paragraph",
          text: "Imigracja powinna zatem mieścić się w granicach, które dają się pogodzić z rzeczywistą integracją, ze stabilnością społeczną oraz z demograficzną i kulturową ciągłością społeczeństwa przyjmującego.",
        },
        { type: "paragraph", text: "Obywatelstwo powinno znaczyć przynależność, a nie sam fakt zamieszkania." },
        {
          type: "paragraph",
          text: "Nadanie obywatelstwa powinno wymagać rzeczywistej znajomości języka, historii i instytucji danego kraju, poszanowania porządku konstytucyjnego oraz prawdziwego przywiązania do niego.",
        },
        { type: "statement", text: "Kto zgodnie z prawem został obywatelem, jest obywatelem — i tak ma być traktowany." },
        {
          type: "paragraph",
          text: "Ze zobowiązań humanitarnych nie wynika, że społeczeństwa europejskie mają oddać kontrolę nad własną przyszłością demograficzną.",
        },
        { type: "paragraph", text: "Granice są uprawnioną instytucją." },
        {
          type: "paragraph",
          text: "Gościnność bez porządku niszczy w końcu warunki, dzięki którym gościnność w ogóle jest możliwa.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "Europa jako cywilizacja narodów",
      summary: "Współpraca suwerennych narodów, a nad wszystkim zasada pomocniczości.",
      body: [
        { type: "lead", text: "Jedność Europy nie powinna wymagać zniszczenia narodów europejskich." },
        {
          type: "paragraph",
          text: "Odrzucamy zarówno całkowitą izolację narodową, jak i przekształcenie Europy w scentralizowane, ponarodowe państwo administracyjne.",
        },
        {
          type: "paragraph",
          text: "Europa powinna natomiast stać się wspólnotą cywilizacyjną suwerennych narodów, współpracujących tam, gdzie współpraca rzeczywiście służy ich wspólnym interesom.",
        },
        { type: "paragraph", text: "Europejskim ustrojem politycznym powinna rządzić pomocniczość:" },
        {
          type: "statement",
          text: "Niczego nie należy rozstrzygać na wyższym szczeblu, jeśli da się to kompetentnie rozstrzygnąć na niższym.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Gmina nie powinna bez potrzeby ustępować regionowi.",
            "Region nie powinien bez potrzeby ustępować narodowi.",
            "Naród nie powinien bez potrzeby ustępować instytucjom kontynentalnym.",
          ],
        },
        {
          type: "paragraph",
          text: "Europa powinna współpracować w obronie, w sprawach granic, infrastruktury strategicznej, nauki, ochrony środowiska i zachowania własnej cywilizacji, zachowując przy tym historyczne tożsamości i polityczną samodzielność swoich narodów.",
        },
        { type: "paragraph", text: "Nie chodzi nam o Europę jednolitą." },
        { type: "statement", text: "Chodzi o Europę, której różnorodność pozostaje wyraźnie europejska." },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "Ład gospodarczy",
      summary: "Ani kapitalizm bez ograniczeń, ani socjalizm scentralizowany: wielu właścicieli, a nie kilku.",
      body: [
        { type: "lead", text: "Odrzucamy zarówno kapitalizm bez ograniczeń, jak i socjalizm scentralizowany." },
        { type: "statement", text: "Gospodarka istnieje dla człowieka. Człowiek nie istnieje dla gospodarki." },
        {
          type: "paragraph",
          text: "Stanowisko to jest starsze niż my. Kształt nadał mu Leon XIII w Rerum Novarum w roku 1891: bronił przed socjalizmem prawa do własności dóbr wytwórczych, a zarazem potępiał warunki, jakie wytworzył kapitalizm przemysłowy — odmówił więc uznania, że dwie gotowe odpowiedzi są jedynymi, jakie istnieją. Hilaire Belloc poprowadził ten wywód dalej w Państwie niewolniczym w roku 1912: przewidywał, że społeczeństwo o skupionej własności nie stanie się socjalistyczne, lecz osiądzie w czymś innym — w bezpieczeństwie dla nieposiadających, okupionym trwałym zniewoleniem. Sądzimy, że trafnie odczytał kierunek, w którym to zmierza.",
        },
        { type: "paragraph", text: "Korporacja jest narzędziem prawnym i gospodarczym, a nie instytucją suwerenną." },
        {
          type: "paragraph",
          text: "Firmy pełnią funkcję niezastąpioną, gdy wytwarzają rzeczy pożyteczne, dają ludziom utrzymanie, rozwijają wiedzę i służą społecznościom, wśród których działają.",
        },
        { type: "paragraph", text: "Władza korporacji musi jednak pozostać podporządkowana dobru wspólnemu." },
        {
          type: "paragraph",
          text: "Żadna korporacja nie powinna mieć realnej możliwości podporządkowania sobie instytucji politycznych, rujnowania żywych wspólnot, wpędzania obywateli w trwałą zależność, monopolizowania rynków podstawowych ani przebudowywania społeczeństwa wyłącznie pod wymagania zysku i wydajności.",
        },
        {
          type: "list",
          marker: "none",
          items: ["Zysk jest uprawniony.", "Przedsiębiorczość jest uprawniona.", "Sukces gospodarczy jest uprawniony."],
        },
        { type: "paragraph", text: "Żadne z tych dóbr nie jest jednak najwyższym celem społeczeństwa." },
        { type: "paragraph", text: "Właściwy porządek musi więc być jasny:" },
        {
          type: "statement",
          text: "Gospodarka istnieje dla osoby, rodziny i wspólnoty; osoba, rodzina i wspólnota nie istnieją dla gospodarki.",
        },
        { type: "paragraph", text: "Tam, gdzie firmy przyczyniają się do rozkwitu ludzkiego życia, powinno im się dobrze wieść." },
        {
          type: "paragraph",
          text: "Tam, gdzie skupiona władza korporacji zagraża rzeczywistej konkurencji, życiu rodzinnemu, niezależności politycznej, godności człowieka albo przetrwaniu wspólnot lokalnych, społeczeństwo ma pełne prawo ją ograniczyć.",
        },
        {
          type: "paragraph",
          text: "Nie dążymy ani do zniesienia prywatnej przedsiębiorczości, ani do upaństwowienia gospodarki.",
        },
        {
          type: "paragraph",
          text: "Dążymy do gospodarki, w której przedsiębiorczość pozostaje sługą cywilizacji, zamiast stawać się jej panem.",
        },
        {
          type: "paragraph",
          text: "Własność prywatna jest ważnym źródłem niezależności i odpowiedzialności. Odpowiedzią na nadmierne skupienie własności nie jest więc jej zniesienie, lecz szersze rozproszenie.",
        },
        { type: "paragraph", text: "Nasz ideał gospodarczy jest dystrybucjonistyczny co do własności i korporacjonistyczny co do organizacji." },
        { type: "paragraph", text: "Oto, co powinno cechować społeczeństwo, do którego dążymy:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "powszechna własność mieszkań i domów;",
            "firmy rodzinne;",
            "niezależne rzemiosło i zawody fachowe;",
            "małe i średnie przedsiębiorstwa;",
            "spółdzielnie i własność pracownicza;",
            "gospodarstwa rodzinne;",
            "bankowość lokalna i regionalna;",
            "nauka zawodu u mistrza i szkolnictwo zawodowe;",
            "silne samorządy zawodowe;",
            "granice postawione koncentracji monopolistycznej.",
          ],
        },
        {
          type: "paragraph",
          text: "Cywilizacji, w której miliony nie mają nic, a garstka korporacji, instytucji finansowych albo agend państwowych ma niemal wszystko, nie da się sensownie nazwać społeczeństwem właścicieli.",
        },
        { type: "statement", text: "Celem ma więc być wielu właścicieli, a nie kilku." },
      ] satisfies readonly ContentBlock[],
    },

    corporatism: {
      title: "Korporacjonizm, cechy i dobro wspólne",
      summary: "Samorządy zawodowe z rzeczywistą pozycją w gospodarce — i niezależne od państwa.",
      body: [
        {
          type: "lead",
          text: "Konflikt pracy i kapitału nie powinien uchodzić za trwałą zasadę porządkującą życie gospodarcze.",
        },
        {
          type: "paragraph",
          text: "Pracownicy, pracodawcy, rzemieślnicy, rolnicy i wolne zawody uczestniczą we wspólnym organizmie gospodarczym.",
        },
        {
          type: "paragraph",
          text: "Współczesne odpowiedniki cechów, izby zawodowe i korporacje branżowe powinny zatem współdecydować o ładzie gospodarczym.",
        },
        {
          type: "paragraph",
          text: "Instytucje te powinny ustalać standardy zawodowe, zasady nauki zawodu, warunki pracy, tryby mediacji i sposób reprezentacji branż, pozostając przy tym dostatecznie niezależne od scentralizowanej administracji państwowej.",
        },
        {
          type: "paragraph",
          text: "Także samo przedstawicielstwo polityczne może obejmować nie tylko reprezentację terytorialną, lecz również uporządkowaną reprezentację głównych ciał społecznych i zawodowych.",
        },
        { type: "paragraph", text: "Ten korporacjonizm musi pozostać podporządkowany pomocniczości." },
        {
          type: "paragraph",
          text: "Odrzucamy ustrój, w którym organizacje zawodowe stają się jedynie narzędziami wszechwładnego państwa.",
        },
        { type: "statement", text: "Ani korporacja, ani państwo nie powinny wchłonąć społeczeństwa obywatelskiego." },
      ] satisfies readonly ContentBlock[],
    },

    finance: {
      title: "Przeciw dominacji finansów",
      summary: "Finanse są konieczne — ich dominacja już nie. Ziemia i mieszkania są po to, by w nich mieszkać.",
      body: [
        { type: "lead", text: "Finanse są konieczne." },
        { type: "statement", text: "Dominacja finansów — nie." },
        {
          type: "paragraph",
          text: "Właściwym zadaniem finansów jest kierowanie oszczędności ku działalności wytwórczej, budownictwu mieszkaniowemu, przedsiębiorczości i inwestycjom długoterminowym.",
        },
        {
          type: "paragraph",
          text: "Gospodarka opanowana przez spekulację, nadmuchiwanie cen aktywów, lichwiarski dług i drenaż finansowy stopniowo odrywa bogactwo od wkładu w wytwarzanie.",
        },
        {
          type: "paragraph",
          text: "Polityka publiczna powinna zatem stawiać inwestycję wytwórczą przed spekulacją, a własność rodzinną przed trwałym zadłużeniem.",
        },
        {
          type: "paragraph",
          text: "Ziemia i mieszkania mają przede wszystkim służyć zamieszkaniu i wspólnocie, a nie stawać się instrumentami finansowymi o bez końca rosnącej cenie, oderwanej od zarobków.",
        },
        { type: "paragraph", text: "Rynki są użytecznym narzędziem." },
        { type: "statement", text: "Nie są instancją moralną." },
        {
          type: "paragraph",
          text: "Tam, gdzie rynek podkopuje fundamenty, na których opiera się społeczeństwo, wspólnota polityczna ma prawo go uregulować.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "Technika ma służyć człowiekowi",
      summary: "Przeciw technologicznej nieuchronności. Maszyna musi się dostosować do człowieka.",
      body: [
        { type: "lead", text: "Rozwój techniki to nie to samo co postęp człowieka." },
        {
          type: "paragraph",
          text: "Społeczeństwo może umieć coraz więcej, a zarazem słabnąć jako wspólnota, tracić zdrowie psychiczne, ulegać centralizacji i coraz dotkliwiej niszczyć środowisko.",
        },
        {
          type: "paragraph",
          text: "Odrzucamy więc technologiczną nieuchronność — przekonanie, że wszystko, co da się wynaleźć, trzeba wdrożyć, a wszystko, co podnosi wydajność, trzeba uznać za postęp.",
        },
        { type: "paragraph", text: "System techniczny ma skłonność do rozrostu." },
        {
          type: "paragraph",
          text: "Technika wprowadzona jako dobrowolna może się stać gospodarczo konieczna. To, co konieczne, kształtuje instytucje. Instytucje zaś przebudowują społeczeństwo pod wymagania tej techniki.",
        },
        { type: "paragraph", text: "Na końcu tego ciągu człowiek dostosowuje się do maszyny." },
        {
          type: "paragraph",
          text: "Ivan Illich opisał ten ciąg w roku 1973 w Tools for Conviviality: narzędzie przekracza drugi próg, za którym przestaje służyć celowi, dla którego je przyjęto, i zaczyna narzucać cele własne — przykładami były u niego medycyna, szkoła i samochód, a o żadnym z nich nie sądził, by ktokolwiek dobrowolnie się mu poddał. W tym samym roku E. F. Schumacher ogłosił Małe jest piękne i zapytał, jak wyglądałaby ekonomia, która traktuje miarę ludzkiego życia jako ograniczenie, a nie jako przeszkodę. Żaden z nich nie był reakcjonistą i żaden nie jest wygodną lekturą także dla nas.",
        },
        { type: "paragraph", text: "Nasza zasada jest odwrotna:" },
        { type: "statement", text: "Maszyna musi się dostosować do człowieka." },
        {
          type: "paragraph",
          text: "Technikę należy oceniać po tym, czy umacnia, czy osłabia ludzką autonomię, życie rodzinne, wspólnotę, sensowną pracę, prywatność, decentralizację polityczną i środowisko naturalne.",
        },
        {
          type: "paragraph",
          text: "Odróżniamy zatem technikę, która zaspokaja rzeczywiste ludzkie potrzeby, od techniki, której głównym skutkiem jest zależność, nadzór, rozproszenie uwagi albo rozpad więzi społecznych.",
        },
        {
          type: "paragraph",
          text: "Medycyna, wodociągi i kanalizacja, wiedza naukowa oraz naprawdę pożyteczna inżynieria nie są wrogiem.",
        },
        { type: "paragraph", text: "Nie każdy dawny obyczaj trzeba też zachować tylko dlatego, że jest dawny." },
        { type: "paragraph", text: "Nie głosimy prymitywnego romantyzmu." },
        { type: "statement", text: "Głosimy podporządkowanie techniki." },
      ] satisfies readonly ContentBlock[],
    },

    "human-scale-life": {
      title: "Prawo do życia na ludzką miarę",
      summary: "Zwyczajny udział w życiu społecznym nie może wymagać całkowitej zależności od techniki.",
      body: [
        {
          type: "lead",
          text: "Obywatel coraz częściej potrzebuje systemów technicznych już do tego, by zwyczajnie uczestniczyć w życiu społecznym.",
        },
        { type: "paragraph", text: "Ta zależność nie powinna być nieograniczona." },
        { type: "paragraph", text: "Obywatelom musi pozostać rzeczywisty dostęp do:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "gotówki;",
            "urzędu, w którym rozmawia się z człowiekiem;",
            "niecyfrowych dokumentów tożsamości tam, gdzie jest to wykonalne;",
            "papierowych książek i pomocy naukowych;",
            "rzeczy nadających się do naprawy;",
            "handlu lokalnego;",
            "przestrzeni prywatnej wolnej od stałego nadzoru;",
            "człowieka, który rozstrzyga tam, gdzie w grę wchodzą poważne skutki prawne lub moralne.",
          ],
        },
        {
          type: "paragraph",
          text: "Szczególnej ochrony potrzebują dzieci — przed branżami, których zysk opiera się na pogłębianiu zależności psychicznej i przechwytywaniu uwagi.",
        },
        {
          type: "paragraph",
          text: "Sztuczną inteligencję i automatyzację trzeba oceniać nie tylko po wydajności, lecz po tym, co robią z ludzkimi umiejętnościami, z zatrudnieniem, z autonomią i z układem sił między instytucjami.",
        },
        {
          type: "statement",
          text: "To, że coś jest technicznie możliwe, nie zobowiązuje jeszcze do wprowadzenia tego w życie.",
        },
      ] satisfies readonly ContentBlock[],
    },

    stewardship: {
      title: "Troska o dziedzictwo przyrody",
      summary: "Przyroda nie jest ani towarem bez granic, ani bóstwem — jest dziedzictwem powierzonym nam w opiekę.",
      body: [
        { type: "lead", text: "Świat przyrody nie jest ani towarem bez granic, ani bóstwem, któremu należałaby się cześć." },
        { type: "statement", text: "Jest dziedzictwem powierzonym człowiekowi." },
        {
          type: "paragraph",
          text: "Burke ujął tę myśl ściślej, niż my potrafimy. Pisząc w roku 1790, nazwał żyjących w danej chwili „tymczasowymi posiadaczami i dożywotnimi dzierżawcami” wspólnoty politycznej, którzy nie powinni uważać się za jej nieograniczonych panów. Spierał się o ustroje, a nie o lasy, ale budowa tego zobowiązania jest identyczna — i właśnie dlatego ten rozdział w ogóle znalazł się w dokumencie politycznym.",
        },
        {
          type: "paragraph",
          text: "Lasy, rzeki, ziemię uprawną, góry, wybrzeża i różnorodność biologiczną należy chronić nie tylko dlatego, że mają wartość gospodarczą, lecz dlatego, że sama cywilizacja ludzka zależy od trwałej równowagi w stosunkach ze światem przyrody.",
        },
        { type: "paragraph", text: "Odrzucamy ekologię, która w samej naturze człowieka widzi pasożyta." },
        {
          type: "paragraph",
          text: "Równie stanowczo odrzucamy ideologię gospodarczą, w której każde zniszczenie da się usprawiedliwić, byle podniosło produkcję w krótkim okresie.",
        },
        { type: "paragraph", text: "Polityka wobec środowiska powinna wspierać:" },
        {
          type: "list",
          items: [
            "rolnictwo lokalne,",
            "zdrowe gleby,",
            "czystą wodę,",
            "rzeczy trwałe,",
            "naprawę zamiast jednorazowości,",
            "regionalne łańcuchy dostaw,",
            "odpowiedzialną gospodarkę leśną,",
            "odbudowę zniszczonych ekosystemów,",
            "a także układy osadnicze, które zachowują zarazem wspólnotę ludzką i krajobraz naturalny.",
          ],
        },
        {
          type: "paragraph",
          text: "Wieś nie może się stać ani terenem przemysłowej eksploatacji, ani muzeum, z którego wygnano zwyczajne ludzkie życie.",
        },
        { type: "statement", text: "Człowiek przynależy do przyrody — ale jako jej gospodarz." },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "Miasto, wieś i architektura",
      summary: "Cywilizacja ma swoją postać materialną. Społeczeństwo pewne siebie potrafi znów budować pięknie.",
      body: [
        { type: "lead", text: "Cywilizacja ma swoją postać materialną." },
        { type: "paragraph", text: "Architektura kształtuje to, jak ludzie rozumieją piękno, przynależność i ciągłość." },
        {
          type: "paragraph",
          text: "Nie konserwatyści pierwsi postawili zarzuty urbanistyce połowy XX wieku. Zrobiła to Jane Jacobs w roku 1961 w Śmierci i życiu wielkich miast Ameryki, dowodząc, że planiści niszczą właśnie to gęste, wymieszane, pozbawione blasku życie ulicy, dzięki któremu dzielnice były bezpieczne i nadawały się do mieszkania. Christopher Alexander i jego współpracownicy próbowali w roku 1977 w Języku wzorców pokazać, na czym miałaby w praktyce polegać alternatywa — aż po szerokość drzwi. Wolimy zapożyczać się u tych, którzy wykonali tę pracę, niż oznajmić upodobanie do piękna i na tym poprzestać.",
        },
        {
          type: "paragraph",
          text: "Miasta europejskie powinny zatem przestać uznawać brzydotę i budowanie bez związku z miejscem za oznakę postępu.",
        },
        {
          type: "paragraph",
          text: "Budownictwo publiczne powinno szanować ludzką miarę, materiały miejscowe, tradycję regionu i istniejący charakter zabytkowych układów osadniczych.",
        },
        {
          type: "paragraph",
          text: "Zabytkowe budynki, kościoły, pierzeje ulic i pomniki należy zachowywać wszędzie tam, gdzie jest to rozsądnie możliwe.",
        },
        {
          type: "paragraph",
          text: "Nowe inwestycje powinny tworzyć miejsca, w których da się mieszkać przez pokolenia, a nie otoczenie na jeden cykl, projektowane głównie pod przepustowość dróg, portfele inwestycyjne i krótki rachunek budowlany.",
        },
        { type: "statement", text: "Cywilizacja pewna siebie powinna umieć znów budować pięknie." },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Edukacja",
      summary:
        "Najpierw przekazać dziedzictwo, dopiero potem próbować je przemieniać; pierwszymi wychowawcami pozostają rodzice.",
      body: [
        { type: "lead", text: "Edukacja ma najpierw przekazywać cywilizację, a dopiero potem próbować ją przemieniać." },
        { type: "paragraph", text: "Każde pokolenie jest zobowiązane wprowadzić następne w to, co samo otrzymało." },
        { type: "paragraph", text: "Nauka szkolna powinna zatem obejmować poważne studium:" },
        {
          type: "list",
          items: [
            "chrześcijaństwa,",
            "historii Europy i historii własnego kraju,",
            "cywilizacji antycznej,",
            "filozofii,",
            "literatury,",
            "nauk przyrodniczych,",
            "matematyki,",
            "muzyki,",
            "sztuki,",
            "rzemiosła,",
            "oraz odpowiedzialności obywatelskiej.",
          ],
        },
        {
          type: "paragraph",
          text: "Rozumienie historii nie może się wyrodzić w naukę, która wpaja młodym Europejczykom, że ich cywilizacja jest niewiele więcej niż nagromadzoną winą.",
        },
        {
          type: "statement",
          text: "Naród, który nie umie szanować swoich przodków, w końcu przestanie się troszczyć o swoich potomków.",
        },
        {
          type: "paragraph",
          text: "Pierwszymi wychowawcami dzieci pozostają rodzice — władze oświatowe powinny więc szanować odpowiedzialność rodziców i wielość szkół o odmiennym charakterze.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Władza i pomocniczość",
      summary: "Władza jest konieczna, ale musi być rozproszona aż po najniższy szczebel, który jest do tego zdolny.",
      body: [
        { type: "lead", text: "Odrzucamy zarówno anarchiczny indywidualizm, jak i totalną władzę państwa." },
        { type: "paragraph", text: "Władza jest konieczna, bo wspólnota polityczna potrzebuje porządku." },
        { type: "paragraph", text: "Musi być jednak rozproszona." },
        {
          type: "paragraph",
          text: "Zasada ta ma swoją nazwę i swoje źródło. Wyłożył ją Pius XI w Quadragesimo Anno w roku 1931: niesprawiedliwością i zakłóceniem należytego porządku jest przekazywać większej i wyższej społeczności to, co mogą wykonać społeczności mniejsze i niższego rzędu. Traktował to jako kwestię sprawiedliwości, a nie sprawnej administracji — a jest to żądanie znacznie mocniejsze i o wiele trudniejsze do spełnienia.",
        },
        {
          type: "paragraph",
          text: "Gdy władza społeczna, gospodarcza, technologiczna i państwowa skupia się w niewielu instytucjach, rzeczywista wolność staje się niemożliwa.",
        },
        { type: "statement", text: "Władzę polityczną należy zatem sprawować na najniższym szczeblu, który jest do tego zdolny." },
        {
          type: "list",
          marker: "rule",
          items: [
            "O sprawach rodziny powinna rozstrzygać rodzina.",
            "O sprawach lokalnych powinna rozstrzygać gmina.",
            "Regionom należy zostawić rzeczywistą samorządność.",
            "O sprawach narodowych powinien rozstrzygać naród.",
          ],
        },
        {
          type: "paragraph",
          text: "Władze wyższego szczebla powinny wkraczać przede wszystkim tam, gdzie instytucje niższego szczebla nie są w stanie należycie wykonać koniecznego zadania.",
        },
        { type: "paragraph", text: "To nie jest wygoda administracyjna." },
        { type: "statement", text: "To zasada wolności politycznej." },
        {
          type: "paragraph",
          text: "Powiedzmy otwarcie, w jakim miejscu stawia to cały spór. Traktaty europejskie już dziś deklarują pomocniczość: artykuł 5 Traktatu o Unii Europejskiej wiąże Unię tak, by działała jedynie tam, gdzie cele zamierzonego działania nie mogą zostać osiągnięte w wystarczającym stopniu przez państwa członkowskie. Nie spieramy się więc o samą zasadę, do której przyznają się także nasi przeciwnicy, lecz o to, kto ma prawo oceniać, czy jej dochowano — i co następuje, gdy odpowiedź brzmi: nie.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Demokracja, przedstawicielstwo i państwo",
      summary: "Rządy konstytucyjne, szersze przedstawicielstwo i współpraca tam, gdzie wymaga jej dobro wspólne.",
      body: [
        { type: "lead", text: "Liberalizm i demokracja to nie to samo." },
        {
          type: "paragraph",
          text: "Społeczeństwo może odrzucić liberalizm jako filozofię, a zachować wybory, przedstawicielstwo, granice konstytucyjne i udział obywateli w życiu publicznym.",
        },
        {
          type: "paragraph",
          text: "Rząd powinien mieć dość władzy, by bronić dobra wspólnego, i pozostawać ograniczony prawem, pomocniczością, przeciwwagą instytucji oraz godnością osoby.",
        },
        { type: "paragraph", text: "Przedstawicielstwo powinno sięgać dalej niż zawodowe maszyny partyjne." },
        {
          type: "paragraph",
          text: "Obok przedstawicielstwa terytorialnego może istnieć przedstawicielstwo rodzin, gmin, zawodów, pracowników, rolnictwa, uniwersytetów i innych trwałych instytucji społeczeństwa obywatelskiego.",
        },
        {
          type: "paragraph",
          text: "Przywództwo polityczne to gospodarowanie dobrem powierzonym, a nie nieustanna mobilizacja ideologiczna.",
        },
        { type: "paragraph", text: "Państwo jest konieczne." },
        { type: "statement", text: "Państwo nie jest Bogiem." },
        {
          type: "paragraph",
          text: "Spór polityczny jest uprawniony i konieczny. Zdrowy ład polityczny nie wymaga, by wszystkie partie myślały tak samo.",
        },
        { type: "paragraph", text: "Rywalizacja polityczna nie może się jednak stać celem samym w sobie." },
        {
          type: "paragraph",
          text: "Gdy w grę wchodzą podstawowe interesy narodu i jego obywateli, partie powinny umieć działać ponad partyjnym rachunkiem. Bezpieczeństwo narodowe, infrastruktura krytyczna, stabilność demograficzna, ochrona rodzin, ciągłość konstytucyjna i długofalowa pomyślność obywateli nie powinny się sprowadzać do nieustannej wojny wyborczej.",
        },
        { type: "paragraph", text: "Opozycja jest konieczna; opozycja dla samej opozycji tylko wyniszcza." },
        {
          type: "paragraph",
          text: "Celem partii politycznych nie jest samo pokonanie przeciwnika. Ich pierwszym obowiązkiem jest służba obywatelom i wspólnocie politycznej, do której należą.",
        },
        {
          type: "paragraph",
          text: "Dążymy zatem do takiej kultury politycznej, w której poważny spór pozostaje możliwy, a współpracy ponad podziałami oczekuje się zawsze wtedy, gdy wymaga jej trwałe dobro wspólne narodu.",
        },
        {
          type: "list",
          marker: "none",
          items: [
            "Naród musi stać ponad partią.",
            "Dobro wspólne musi stać ponad stronnictwem.",
            "Obywatele muszą stać ponad klasą polityczną.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    culture: {
      title: "Kultura przeciw ujednoliceniu",
      summary: "Języki, tradycje i rzemiosło należą do zwyczajnego życia, a nie do gospodarki turystycznej.",
      body: [
        {
          type: "lead",
          text: "Globalna kultura konsumpcyjna sprawia, że miasta, style życia, rozrywka i przestrzenie handlowe stają się coraz bardziej wymienne.",
        },
        { type: "statement", text: "Sprzeciwiamy się temu ujednolicaniu." },
        {
          type: "paragraph",
          text: "Języki, gwary, tradycje ludowe, święta, muzyka, kuchnia, rzemiosło i pamięć historyczna nie powinny przetrwać jedynie jako atrakcja turystyczna.",
        },
        { type: "paragraph", text: "Mają należeć do zwyczajnego życia." },
        {
          type: "paragraph",
          text: "Polityka kulturalna powinna wzmacniać twórczość miejscową, a nie sprowadzać to, co akurat ma największy zasięg handlowy na świecie.",
        },
        {
          type: "paragraph",
          text: "Cywilizacja europejska powinna pozostać otwarta na to, czego może się nauczyć od innych cywilizacji, nie rozpuszczając się przy tym w nich.",
        },
        { type: "statement", text: "Wymiana to nie to samo co zatracenie siebie." },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "Praca",
      summary: "Praca ma swoją godność, ale nie jest celem ludzkiego istnienia.",
      body: [
        { type: "lead", text: "Praca to więcej niż transakcja, w której wymienia się czas na wynagrodzenie." },
        { type: "statement", text: "Praca ma swoją godność, ale nie jest celem ludzkiego istnienia." },
        {
          type: "paragraph",
          text: "Nie po to zostaliśmy stworzeni, by wytwarzać, konsumować, gromadzić i powtarzać ten obieg aż do śmierci.",
        },
        {
          type: "paragraph",
          text: "System gospodarczy ma dawać materialną podstawę dobrego życia, a nie pochłaniać życia, które miał wspierać.",
        },
        {
          type: "paragraph",
          text: "Społeczeństwo jest źle urządzone, gdy zwyczajni ludzie muszą oddawać pracy niemal wszystkie godziny, jakie im zostają poza snem, byle utrzymać dach nad głową, jedzenie i podstawowe bezpieczeństwo; gdy rodzice ledwie widują swoje dzieci; gdy wspólnoty pustoszeją, bo wszyscy są wyczerpani pracą; gdy rosnąca produktywność wzbogaca instytucje, a wolności ludziom nie przybywa.",
        },
        { type: "paragraph", text: "Postęp gospodarczy trzeba więc mierzyć także prostym pytaniem:" },
        { type: "statement", text: "Czy daje zwyczajnym ludziom większą władzę nad własnym życiem?" },
        {
          type: "paragraph",
          text: "Produktywność ma ostatecznie przynosić większe bezpieczeństwo, więcej czasu wolnego, mocniejsze rodziny i uwolnienie od trudu, bez którego można się obejść.",
        },
        { type: "paragraph", text: "Celem gospodarki nie jest wyciągnięcie z ludzi jak największej liczby godzin." },
        {
          type: "paragraph",
          text: "Człowiek potrzebuje czasu na rodzinę, przyjaźń, modlitwę, skupienie, przyrodę, rzemiosło, naukę, wspólnotę, świętowanie i odpoczynek.",
        },
        { type: "paragraph", text: "Nie są to gospodarczo jałowe przerwy w życiu." },
        { type: "paragraph", text: "Należą do powodów, dla których gospodarka w ogóle istnieje." },
        {
          type: "paragraph",
          text: "Odrzucamy cywilizację, w której człowiek staje się sługą systemów powołanych po to, by jemu służyły.",
        },
        {
          type: "statement",
          text: "Człowiek musi pracować, żeby żyć. Nigdy nie wolno go sprowadzić do życia po to, by pracować.",
        },
        {
          type: "paragraph",
          text: "Przez pracę ludzie uczestniczą w życiu społecznym, nabywają umiejętności, wytwarzają rzeczy pożyteczne i utrzymują rodziny.",
        },
        {
          type: "paragraph",
          text: "Gospodarka, która likwiduje sensowne zawody tylko dlatego, że ich zastąpienie podnosi wskaźnik wydajności, powinna więc liczyć nie tylko zyski, ale i straty.",
        },
        {
          type: "paragraph",
          text: "Rzemiosło, rolnictwo, inżynieria, opieka nad ludźmi, nauczanie i zawody fachowe zasługują na odzyskanie dawnej pozycji społecznej.",
        },
        {
          type: "paragraph",
          text: "Automatyzacja powinna, gdzie to możliwe, zdejmować z ludzi pracę naprawdę poniżającą. Nie powinna jednak przemieniać się w przyjmowany bez namysłu cel: usuwanie człowieka z każdej czynności wytwórczej.",
        },
        { type: "statement", text: "Ludzkie umiejętności są same w sobie dobrem społecznym." },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Polityka zagraniczna",
      summary: "Niezależność strategiczna, roztropność i stanowcze założenie przeciw wojnie, bez której można się obejść.",
      body: [
        { type: "lead", text: "Europa powinna szukać niezależności, a nie imperialnej ambicji." },
        {
          type: "paragraph",
          text: "Narody Europy powinny być w stanie same się obronić, strzec swoich granic i utrzymać niezależność strategiczną w żywności, energii, infrastrukturze, medycynie i przemyśle podstawowym.",
        },
        {
          type: "paragraph",
          text: "Odrzucamy trwałą zależność od odległych potęg w sprawach, od których zależy przetrwanie narodu.",
        },
        {
          type: "paragraph",
          text: "Odrzucamy także wojny ideologiczne, których celem jest przebudowa obcych cywilizacji według abstrakcyjnych modeli politycznych.",
        },
        { type: "paragraph", text: "Cywilizacje mają różne dzieje." },
        { type: "statement", text: "Pokojowe stosunki nie wymagają jednolitości kulturowej." },
        {
          type: "paragraph",
          text: "Polityką zagraniczną powinny rządzić roztropność, uzasadniony interes narodowy, obrona niewinnych tam, gdzie jest realnie możliwa, oraz stanowcze założenie, że wojny, bez której można się obejść, prowadzić nie należy.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "what-we-reject": {
      title: "Co odrzucamy",
      summary: "Dziesięć odmów wyłożonych wprost — wobec idei i systemów, nigdy wobec ludzi.",
      body: [
        {
          type: "list",
          marker: "rule",
          items: [
            "Odrzucamy **liberalny indywidualizm**, ponieważ społeczeństwo to więcej niż umowa między autonomicznymi jednostkami.",
            "Odrzucamy **materializm**, ponieważ człowieka nie da się sprowadzić do gospodarczego apetytu.",
            "Odrzucamy **komunizm**, ponieważ zniesienie własności i podporządkowanie społeczeństwa scentralizowanemu państwu niszczy i wolność, i organicznie wyrosłe instytucje społeczne.",
            "Odrzucamy **absolutyzm leseferystyczny**, ponieważ rynki muszą pozostać podporządkowane dobru wspólnemu.",
            "Odrzucamy **technokrację**, ponieważ wiedza ekspercka i możliwości techniczne nie czynią nikogo autorytetem moralnym.",
            "Odrzucamy **konsumpcjonizm**, ponieważ samo gromadzenie rzeczy nie da cywilizacji celu.",
            "Odrzucamy **nihilizm historyczny**, ponieważ cywilizacja, która nie umie pokochać niczego z własnego dziedzictwa, nie przetrwa.",
            "Odrzucamy **terroryzm polityczny**, ponieważ na rozmyślnym niszczeniu niewinnego życia nie zbuduje się ładu moralnego.",
            "Odrzucamy **totalitaryzm**, ponieważ ani partia, ani korporacja, ani ideologia, ani państwo nie mają prawa wchłonąć całego ludzkiego życia.",
            "I odrzucamy **kult postępu dla samego postępu**.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    "what-we-seek": {
      title: "Czego chcemy",
      summary: "Program pozytywny: jak wyglądałby odnowiony ład europejski.",
      body: [
        {
          type: "lead",
          text: "Chcemy Europy, w której dzwon kościelny, rodzinny stół, targ, warsztat, gospodarstwo, rynek miasteczka, uniwersytet, las i naród na powrót składają się na jeden spójny ład społeczny.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Chcemy narodów na tyle pewnych siebie, że nie potrzebują nienawiści do innych, by zachować siebie.",
            "Chcemy rodzin, które mogą wychować dzieci, nie popadając w ruinę.",
            "Chcemy własności rozproszonej szeroko, a nie trwałej zależności.",
            "Chcemy rynku bez kultu rynku.",
            "Chcemy władzy bez totalitaryzmu.",
            "Chcemy techniki bez dominacji technologicznej.",
            "Chcemy troski o przyrodę bez pogardy dla człowieka.",
            "Chcemy chrześcijaństwa bez przymuszania do wiary.",
            "Chcemy patriotyzmu.",
            "Chcemy ciągłości bez zastoju.",
            "Chcemy postępu tam, gdzie jest on naprawdę ludzki, i powściągliwości tam, gdzie postęp stał się tylko innym słowem na rozkład.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    restoration: {
      title: "Odnowa",
      summary: "Historii nie da się odwrócić, kierunek można zmienić.",
      body: [
        { type: "lead", text: "Nasz ruch nie żąda, by Europa stała się muzeum." },
        { type: "paragraph", text: "Nie żądamy też odwrócenia historii." },
        { type: "paragraph", text: "Historii nie da się odwrócić." },
        { type: "statement", text: "Kierunek można zmienić." },
        {
          type: "list",
          marker: "none",
          items: [
            "Instytucje można odbudować.",
            "Rodziny mogą odzyskać pewność siebie.",
            "Wspólnoty mogą odzyskać wpływ na własne sprawy.",
            "Własność znów może stać się powszechna.",
            "Technika znów może stać się sługą.",
            "Krajobrazy można odtworzyć.",
            "Kościoły znów mogą wypełnić się życiem.",
            "Narody mogą sobie przypomnieć, czym są.",
            "Europa może znów stać się rozpoznawalnie sobą.",
          ],
        },
        { type: "paragraph", text: "Wybór, przed którym stoimy, nie jest więc po prostu wyborem między przeszłością a przyszłością." },
        { type: "paragraph", text: "Jest wyborem między dwiema różnymi przyszłościami." },
        {
          type: "paragraph",
          text: "Jedna jest coraz bardziej scentralizowana, techniczna, pozbawiona korzeni, zamieniona w towar i wymienna: cywilizacja, w której człowiek ma coraz większą władzę nad światem zewnętrznym, a coraz mniejszą nad systemami rządzącymi jego własnym życiem.",
        },
        { type: "paragraph", text: "Druga przyjmuje granice." },
        {
          type: "paragraph",
          text: "Uznaje, że pewnych rzeczy się nie wymyśla, lecz dziedziczy; że nie optymalizuje się ich, lecz chroni; że nie wycenia się ich, lecz kocha.",
        },
        { type: "statement", text: "Wybieramy tę drugą." },
        {
          type: "list",
          marker: "rule",
          items: [
            "Wybieramy rodzinę zamiast atomizacji.",
            "Wspólnotę zamiast samotności.",
            "Własność zamiast zależności.",
            "Troskę o dziedzictwo zamiast rabunku.",
            "Piękno zamiast miejsc bez twarzy.",
            "Naród zamiast wykorzenienia.",
            "Wiarę zamiast nihilizmu.",
            "Ludzki osąd zamiast technologicznej nieuchronności.",
            "Cywilizację zamiast rozkładu.",
            "I odnowę zamiast kapitulacji.",
          ],
        },
        { type: "paragraph", text: "Europa musi na nowo uświadomić sobie, czym jest." },
        { type: "paragraph", text: "Nie dlatego, że inne cywilizacje są bez wartości." },
        {
          type: "paragraph",
          text: "Dlatego, że żadna cywilizacja nie przetrwa, gdy uzna, że jej własne trwanie jest moralnie zbędne.",
        },
        { type: "paragraph", text: "Nie my stworzyliśmy to dziedzictwo." },
        { type: "paragraph", text: "Nie nam je odrzucać." },
        { type: "statement", text: "Naszą rzeczą jest je przyjąć, odnowić i przekazać." },
      ] satisfies readonly ContentBlock[],
    },
  },
};

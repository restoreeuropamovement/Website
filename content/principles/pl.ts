import type { ContentBlock } from "@/lib/content-types";
import type { PrinciplesContent } from "./index";

export const principlesContent: PrinciplesContent = {
  meta: {
    title: "Zasady",
    subtitle: "Szesnaście zobowiązań wyłożonych wprost",
    lede: "To stanowiska, z których wynika nasza polityka. Każde ujmujemy tu skrótowo; pełny wywód prowadzimy w Manifeście.",
    indexLabel: "Spis",
    indexNavLabel: "Spis zasad",
    inManifesto: "W Manifeście",
    copyLinkTo: "Kopiuj link do zasady:",
    closingTitle: "Każda z tych zasad jest w całości uzasadniona w Manifeście.",
    readManifesto: "Przeczytaj Manifest",
    whatThisMeans: "Co to znaczy w praktyce",
  },

  items: {
    "moral-order": {
      title: "Ład moralny",
      statement:
        "Wspólnota polityczna nie może trwale zachowywać neutralności wobec dobra, którego ma strzec.",
      summary: "Dobro wspólne jako cel władzy politycznej.",
      body: [
        {
          type: "paragraph",
          text: "Każde społeczeństwo rozstrzyga, co zasługuje na ochronę, co warto wspierać i jakie życie chciałoby umożliwić swoim obywatelom. Państwo, które twierdzi, że takich rozstrzygnięć nie podejmuje, zwykle podjęło je już dawno — tylko nie zechciało o tym powiedzieć.",
        },
        {
          type: "paragraph",
          text: "Godność człowieka nie bierze się z preferencji, z popytu, z wygody administracyjnej ani z możliwości technicznych. Władza polityczna nie jest po to, by wytworzyć nowego człowieka, ani tylko po to, by rozsądzać, czyje pragnienia wezmą górę. Jest po to, by zabezpieczyć warunki, w których osoby, rodziny i wspólnoty mogą żyć dobrze.",
        },
        {
          type: "paragraph",
          text: "Cywilizacji europejskiej nie da się zrozumieć bez chrześcijaństwa i przyznajemy się do tego dziedzictwa otwarcie. Nie odrzucamy sporu — spór jest normalnym stanem wolnego społeczeństwa — lecz żądanie, by europejskie życie publiczne toczyło się tak, jakby jego własnego dziedzictwa religijnego nigdy nie było.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-and-community": {
      title: "Osoba i wspólnota",
      statement: "Wychodzimy od osoby żyjącej wśród innych, a nie od wyizolowanej jednostki.",
      summary: "Prawa i obowiązki, wolność i odpowiedzialność — nierozdzielnie.",
      body: [
        {
          type: "paragraph",
          text: "Nikt nie przychodzi na świat bez więzi. Każdy z nas wchodzi w rzeczywistość, w której są już rodzice, język, kultura, ojczyzna, zobowiązania i historia. Nie są to pęta, z których należy się wyrwać. To jedne z warunków, bez których pełne ludzkie życie w ogóle nie jest możliwe.",
        },
        {
          type: "paragraph",
          text: "Prawa są rzeczywiste i bez odpowiadających im obowiązków długo nie przetrwają. Wolność jest rzeczywista i znaczy więcej niż brak przymusu: mieści w sobie zdolność dążenia do tego, co rzeczywiście dobre.",
        },
        {
          type: "paragraph",
          text: "Zdrowy ład polityczny utrzymuje zatem w równowadze cztery pary: wolność i odpowiedzialność, prawa i obowiązki, godność jednostki i zobowiązanie wobec wspólnoty, władzę i pomocniczość.",
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "Rodzina",
      statement:
        "Społeczeństwo powinno sprawić, by zakładanie rodziny, rodzicielstwo i sensowne życie ludzkie były materialnie możliwe.",
      summary: "Pierwsza instytucja cywilizacji — i ta, którą najłatwiej podkopać.",
      body: [
        {
          type: "paragraph",
          text: "Rodzina jest pierwszą instytucją cywilizacji — starszą niż państwo. Niemal wszystko, na czym opiera się społeczeństwo — wychowanie dzieci, opieka nad starszymi, przekazywanie języka i wiary, codzienna praca, która trzyma wspólnotę razem — dzieje się najpierw w niej.",
        },
        {
          type: "paragraph",
          text: "Gospodarka, w której założenie rodziny jest finansowo niemożliwe, jest źle urządzona. Podobnie system zatrudnienia, który traktuje rodzicielstwo jak kłopot, i rynek mieszkaniowy, który z własnego dachu nad głową czyni przywilej nieosiągalny. To nie prywatne nieszczęścia, lecz skutki decyzji politycznych — i decyzjami politycznymi można je odwrócić.",
        },
        {
          type: "paragraph",
          text: "Dlatego popieramy dostępne mieszkania, podatki uwzględniające rodzinę, wsparcie dla rodziców, stabilne zatrudnienie i czas, który nie należy do produkcji. Odnowa demograficzna Europy powinna brać się przede wszystkim z tego, że życie rodzinne stanie się możliwe dla samych Europejczyków.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "nation-and-continuity": {
      title: "Naród i ciągłość",
      statement:
        "Narody Europy mają uzasadnione prawo do zachowania swojej historycznej tożsamości, kultury i ciągłości.",
      summary: "Naród jako wspólnota pokoleń, nie jednostka administracyjna.",
      body: [
        {
          type: "paragraph",
          text: "Ludzkość jest powszechna; cywilizacja jest zawsze konkretna. Człowiek przynależy nie tylko do abstrakcyjnej ludzkości, lecz do rzeczywistych wspólnot ukształtowanych przez historię — wspólnot, które trzymają się razem dzięki pamięci, językowi, obyczajowi, instytucjom, terytorium i poczuciu wspólnego losu.",
        },
        {
          type: "paragraph",
          text: "Równa godność wszystkich ludzi nie wymaga, by każdy kraj stał się kulturowo wymienny z każdym innym. Polskie miasto powinno pozostać rozpoznawalnie polskie, włoskie — rozpoznawalnie włoskie, francuska wieś — rozpoznawalnie francuska.",
        },
        {
          type: "paragraph",
          text: "W zachowywaniu historycznych kultur i ludów Europy nie ma nic z natury wrogiego — nie więcej niż w zachowywaniu kultur i tożsamości historycznych każdej innej cywilizacji. Bronimy ciągłości i bronimy jej dla wszystkich.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "immigration-and-integration": {
      title: "Imigracja i integracja",
      statement:
        "Imigracja powinna mieścić się w granicach, które pozwalają na rzeczywistą integrację i nie naruszają stabilności społecznej.",
      summary: "Granice jako uprawniona instytucja; obywatelstwo jako przynależność.",
      body: [
        {
          type: "paragraph",
          text: "Polityka imigracyjna musi służyć długofalowemu dobru wspólnemu kraju przyjmującego. Żadne społeczeństwo nie ma nieograniczonej zdolności przyjmowania zmiany demograficznej — za pewną granicą odbija się ona na zaufaniu społecznym, mieszkaniach, infrastrukturze, ciągłości kulturowej i spójności politycznej.",
        },
        {
          type: "paragraph",
          text: "Obywatelstwo powinno znaczyć przynależność, a nie sam fakt zamieszkania. Nadanie obywatelstwa powinno wymagać rzeczywistej znajomości języka, historii i instytucji danego kraju, poszanowania porządku konstytucyjnego oraz prawdziwego przywiązania do niego.",
        },
        {
          type: "statement",
          text: "Kto zgodnie z prawem został obywatelem, jest obywatelem — i tak ma być traktowany.",
        },
        {
          type: "paragraph",
          text: "To zobowiązanie nie jest zastrzeżeniem ani dopiskiem na końcu. Przynależność raz przyznana jest pełna. Mówimy o skali i zasadach przyjmowania; nasze zastrzeżenia kierujemy pod adresem polityki — nigdy pod adresem ludzi, którzy przybyli tu na jej podstawie.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "Europa",
      statement:
        "Wspólnota cywilizacyjna suwerennych narodów, współpracujących tam, gdzie współpraca im służy.",
      summary: "Jedność bez ujednolicania; pomocniczość jako zasada nadrzędna.",
      body: [
        {
          type: "paragraph",
          text: "Jedność Europy nie powinna wymagać rozpuszczenia narodów europejskich. Odrzucamy zarówno całkowitą izolację narodową, jak i przekształcenie Europy w scentralizowane, ponarodowe państwo administracyjne.",
        },
        {
          type: "paragraph",
          text: "Zasadą nadrzędną powinna być pomocniczość: nic nie powinno być rozstrzygane na wyższym szczeblu, jeśli może być kompetentnie rozstrzygnięte na niższym. Gmina nie powinna bez potrzeby ustępować regionowi, region narodowi, a naród instytucjom kontynentalnym.",
        },
        {
          type: "paragraph",
          text: "Pozostaje przy tym wiele spraw, które Europejczycy mogą zrobić tylko razem — obrony, granic, infrastruktury strategicznej, nauki, ochrony środowiska, medycyny, odporności energetycznej i przemysłu strategicznego. Nie chodzi nam o Europę jednolitą, lecz o Europę, której różnorodność pozostaje wyraźnie europejska.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "Ład gospodarczy",
      statement:
        "Przedsiębiorczość jest uprawniona; instytucje gospodarcze pozostają podporządkowane dobru wspólnemu.",
      summary: "Ani kapitalizm bez ograniczeń, ani socjalizm scentralizowany.",
      body: [
        {
          type: "paragraph",
          text: "Własność prywatna, przedsiębiorczość, zysk i sukces gospodarczy są uprawnione. Żadna z tych rzeczy nie jest najwyższym celem społeczeństwa. Korporacja jest narzędziem prawnym i gospodarczym — niezbędnym, ale nie suwerennym.",
        },
        {
          type: "paragraph",
          text: "Firmom, które wytwarzają rzeczy pożyteczne, dają ludziom utrzymanie, rozwijają wiedzę i służą miejscom, w których działają, powinno się dobrze wieść. Gdy skupiona władza gospodarcza zaczyna podporządkowywać sobie instytucje polityczne, wydrążać żywe wspólnoty albo monopolizować rynki podstawowe, społeczeństwo ma pełne prawo ją ograniczyć.",
        },
        {
          type: "paragraph",
          text: "Nie jest to stanowisko przeciw biznesowi. Jest to stanowisko przeciw dominacji. Nasz ideał gospodarczy jest dystrybucjonistyczny co do własności i korporacjonistyczny co do organizacji: wielu właścicieli, a nie kilku.",
        },
      ] satisfies readonly ContentBlock[],
    },

    property: {
      title: "Własność",
      statement:
        "Wolne społeczeństwo wymaga szeroko rozproszonej własności, a nie trwałej zależności od niewielkiej liczby instytucji.",
      summary: "Lekarstwem na koncentrację jest rozproszenie, nie zniesienie własności.",
      body: [
        {
          type: "paragraph",
          text: "Własność daje niezależność i uczy odpowiedzialności. Kto ma własny dom, gospodarstwo, warsztat albo udział w firmie, w której pracuje, ma w społeczeństwie pozycję, której nie zastąpi żadna konsumpcja.",
        },
        {
          type: "paragraph",
          text: "Odpowiedzią na skupienie własności nie jest więc jej zniesienie, lecz szersze rozproszenie: własność mieszkaniowa, firmy rodzinne, niezależne rzemiosło, małe i średnie przedsiębiorstwa, spółdzielnie i własność pracownicza, gospodarstwa rodzinne, bankowość lokalna i regionalna.",
        },
        {
          type: "paragraph",
          text: "Społeczeństwa, w którym miliony nie mają nic, a kilka instytucji ma niemal wszystko, nie da się sensownie nazwać społeczeństwem właścicieli — cokolwiek mówi o własności jego prawo.",
        },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "Praca",
      statement: "Praca ma swoją godność, ale nie jest celem ludzkiego istnienia.",
      summary: "Gospodarka ma dawać podstawę życia, a nie je pochłaniać.",
      body: [
        {
          type: "paragraph",
          text: "Przez pracę ludzie uczestniczą w życiu społecznym, nabywają umiejętności, wytwarzają rzeczy pożyteczne i utrzymują rodziny. Ma to realną wartość i zasługuje na szacunek — zwłaszcza w rzemiośle, rolnictwie, inżynierii, opiece nad ludźmi, nauczaniu i zawodach fachowych.",
        },
        {
          type: "paragraph",
          text: "Gospodarka ma jednak dawać materialną podstawę ludzkiego życia, a nie pochłaniać życie, które miała wspierać. Kiedy produktywność rośnie, część zysku powinna wracać do ludzi jako bezpieczeństwo, czas wolny, czas dla rodziny i niezależność — nie tylko jako większa produkcja.",
        },
        {
          type: "paragraph",
          text: "Automatyzacja powinna zdejmować z ludzi pracę naprawdę poniżającą. Nie powinna jednak przemieniać się w przyjmowany bez namysłu cel: usuwanie człowieka z każdej czynności wytwórczej. Ludzkie umiejętności są same w sobie dobrem społecznym.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "Technika",
      statement:
        "Technika powinna umacniać ludzkie kompetencje, autonomię i wspólnotę, a nie przebudowywać społeczeństwa wokół konieczności technologicznej.",
      summary: "Przeciw technologicznej nieuchronności, nie przeciw technice.",
      body: [
        {
          type: "paragraph",
          text: "Rozwój techniki to nie to samo co postęp człowieka. Społeczeństwo może umieć coraz więcej, a jednocześnie słabnąć jako wspólnota, ulegać centralizacji i tracić wolność.",
        },
        {
          type: "paragraph",
          text: "Odrzucamy technologiczną nieuchronność — założenie, że wszystko, co da się zbudować, musi zostać przyjęte, i że wszystko, co podnosi wydajność, jest tym samym postępem. Narzędzie wprowadzone jako opcjonalne może stać się gospodarczo konieczne; to, co konieczne, przekształca instytucje; instytucje zaś przebudowują wokół niego społeczeństwo.",
        },
        {
          type: "paragraph",
          text: "Obywatelom musi pozostać rzeczywisty dostęp do gotówki, do urzędu, w którym rozmawia się z człowiekiem, do rzeczy nadających się do naprawy, do handlu lokalnego, do przestrzeni prywatnej wolnej od stałego nadzoru oraz do człowieka, który rozstrzyga tam, gdzie w grę wchodzą poważne skutki prawne lub moralne. To, że coś jest możliwe, nie zobowiązuje jeszcze do wprowadzania tego w życie.",
        },
      ] satisfies readonly ContentBlock[],
    },

    environment: {
      title: "Środowisko",
      statement:
        "Ziemia, woda i świat żywy to dziedzictwo, które należy pielęgnować, chronić i przekazywać.",
      summary: "Chrześcijańska troska o dziedzictwo, a nie rabunek ani niechęć do człowieka.",
      body: [
        {
          type: "paragraph",
          text: "Lasy, rzeki, ziemia uprawna, góry, wybrzeża i różnorodność biologiczna nie są towarem do zużycia. Pokolenie może z nich korzystać i musi je utrzymywać; nie jest jednak ich wyłącznym właścicielem.",
        },
        {
          type: "paragraph",
          text: "Odrzucamy ekologię, która widzi w człowieku pasożyta, i równie stanowczo ekonomię, która godzi się na każde zniszczenie, o ile podnosi ono produkcję w krótkim okresie. Polityka powinna wspierać rolnictwo lokalne, zdrowe gleby, czystą wodę, rzeczy trwałe i nadające się do naprawy, regionalne łańcuchy dostaw, odpowiedzialną gospodarkę leśną oraz odbudowę zniszczonych ekosystemów.",
        },
        {
          type: "paragraph",
          text: "Wieś nie powinna być ani terenem eksploatacji, ani muzeum, z którego usunięto zwyczajne życie. Człowiek przynależy do przyrody — jako jej gospodarz, odpowiedzialny za to, co po sobie zostawia.",
        },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "Architektura",
      statement:
        "Budownictwo publiczne powinno szanować ludzką miarę, materiały miejscowe i tradycję regionu.",
      summary: "Cywilizacja ma swoją postać materialną — i można ją znów budować dobrze.",
      body: [
        {
          type: "paragraph",
          text: "Architektura kształtuje to, jak ludzie rozumieją piękno, przynależność i ciągłość. Miasta europejskie powinny przestać uznawać brzydotę i budowanie bez związku z miejscem za znak postępu.",
        },
        {
          type: "paragraph",
          text: "Zabytkowe budynki, kościoły, pierzeje ulic i pomniki należy zachowywać wszędzie, gdzie to rozsądnie możliwe. Nowe inwestycje powinny dawać miejsca, w których da się mieszkać przez pokolenia, a nie otoczenie na jeden cykl, projektowane pod przepustowość dróg, portfele inwestycyjne i krótkie terminy budowy.",
        },
        {
          type: "statement",
          text: "Cywilizacja pewna siebie powinna umieć znów budować pięknie.",
        },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Edukacja",
      statement:
        "Edukacja ma najpierw przekazywać cywilizację, a dopiero potem próbować ją przemieniać.",
      summary: "Najpierw dziedzictwo; rodzice jako pierwsi wychowawcy.",
      body: [
        {
          type: "paragraph",
          text: "Każde pokolenie jest zobowiązane wprowadzić następne w to, co samo otrzymało. Do tego dziedzictwa należy poważna nauka chrześcijaństwa, historii Europy i historii własnego kraju, cywilizacji antycznej, filozofii, literatury, nauk przyrodniczych, matematyki, muzyki, sztuki, rzemiosła i odpowiedzialności obywatelskiej.",
        },
        {
          type: "paragraph",
          text: "Rozumienie historii ma być uczciwe wobec win i zbrodni, nie może jednak przerodzić się w naukę, że cywilizacja europejska jest niewiele więcej niż nagromadzoną winą. Naród, który nie umie szanować swoich przodków, w końcu przestanie się troszczyć o swoich potomków.",
        },
        {
          type: "paragraph",
          text: "Pierwszymi wychowawcami dzieci pozostają rodzice. Władze oświatowe powinny szanować odpowiedzialność rodziców i wielość szkół o odmiennym charakterze.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Pomocniczość",
      statement:
        "Władza polityczna powinna być sprawowana na najniższym szczeblu, który jest do tego zdolny.",
      summary: "Rozproszona władza jako warunek wolności politycznej.",
      body: [
        {
          type: "paragraph",
          text: "Odrzucamy zarówno anarchiczny indywidualizm, jak i totalną władzę państwa. Władza jest konieczna, bo wspólnota polityczna potrzebuje porządku. Musi być jednak rozproszona.",
        },
        {
          type: "paragraph",
          text: "O sprawach rodziny powinna rozstrzygać rodzina, o sprawach lokalnych gmina, o sprawach narodowych naród; regionom należy zostawić rzeczywistą samorządność. Władze wyższego szczebla powinny wkraczać przede wszystkim tam, gdzie instytucje niższego szczebla nie są w stanie należycie wykonać koniecznego zadania.",
        },
        {
          type: "paragraph",
          text: "Gdy władza społeczna, gospodarcza, technologiczna i państwowa skupia się w niewielu instytucjach, rzeczywista wolność staje się niemożliwa. Pomocniczość nie jest wygodą administracyjną; jest zasadą wolności politycznej.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Demokracja",
      statement:
        "Rządy konstytucyjne, szersza reprezentacja i współpraca tam, gdzie wymaga jej dobro wspólne.",
      summary: "Wybory, granice władzy, przeciwwagi — i kultura partyjna, która służy.",
      body: [
        {
          type: "paragraph",
          text: "Rząd powinien mieć dość władzy, by bronić dobra wspólnego, i pozostawać ograniczony prawem, pomocniczością, przeciwwagą instytucji oraz godnością osoby. Opowiadamy się za wyborami, za granicami konstytucyjnymi i za udziałem obywateli w życiu publicznym.",
        },
        {
          type: "paragraph",
          text: "Reprezentacja powinna sięgać dalej niż zawodowe maszyny partyjne. Obok przedstawicielstwa terytorialnego może istnieć przedstawicielstwo rodzin, gmin, zawodów, pracowników, rolnictwa, uniwersytetów i innych trwałych instytucji społeczeństwa obywatelskiego.",
        },
        {
          type: "paragraph",
          text: "Spór polityczny jest uprawniony i konieczny; nieustanna wojna partyjna — nie. Gdy w grę wchodzą trwałe interesy narodu, partie powinny umieć działać ponad partyjnym rachunkiem. Państwo jest konieczne. Państwo nie jest Bogiem.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Polityka zagraniczna",
      statement:
        "Niezależność strategiczna, roztropność i stanowcza niechęć do wojen, bez których można się obejść.",
      summary: "Niezależność zamiast ambicji imperialnych.",
      body: [
        {
          type: "paragraph",
          text: "Narody Europy powinny być w stanie same się obronić, strzec swoich granic i utrzymać niezależność strategiczną w żywności, energii, infrastrukturze, medycynie i przemyśle podstawowym. Trwała zależność od odległych potęg w sprawach, od których zależy przetrwanie narodu, nie jest rozwiązaniem, na którym można się oprzeć, lecz ryzykiem, którego nikt nie przemyślał.",
        },
        {
          type: "paragraph",
          text: "Odrzucamy także wojny ideologiczne, których celem jest przebudowa obcych cywilizacji według abstrakcyjnych modeli politycznych. Cywilizacje mają różne dzieje, a pokojowe stosunki nie wymagają jednolitości kulturowej.",
        },
        {
          type: "paragraph",
          text: "Polityką zagraniczną powinny rządzić roztropność, uzasadniony interes narodowy, obrona niewinnych tam, gdzie jest realnie możliwa, oraz stanowcze założenie, że wojny, bez której można się obejść, prowadzić nie należy.",
        },
      ] satisfies readonly ContentBlock[],
    },
  },
};

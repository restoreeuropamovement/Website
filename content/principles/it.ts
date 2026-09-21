import type { ContentBlock } from "@/lib/content-types";
import type { PrinciplesContent } from "./index";

export const principlesContent: PrinciplesContent = {
  meta: {
    title: "Principi",
    subtitle: "Sedici impegni, enunciati con chiarezza",
    lede: "Da queste posizioni discende tutta la nostra politica. Qui ciascuna è esposta in breve; l'argomentazione per esteso è nel Manifesto.",
    indexLabel: "Indice",
    indexNavLabel: "Indice dei principi",
    inManifesto: "Nel Manifesto",
    copyLinkTo: "Copia il link a",
    closingTitle: "Ogni principio è argomentato per intero nel Manifesto.",
    readManifesto: "Leggi il Manifesto",
    whatThisMeans: "Che cosa significa in pratica",
  },

  items: {
    "moral-order": {
      title: "Ordine morale",
      statement:
        "Nessuna comunità politica può restare indefinitamente neutrale riguardo al bene che essa esiste per proteggere.",
      summary: "Il bene comune come fine dell'autorità politica.",
      body: [
        {
          type: "paragraph",
          text: "Ogni società esprime giudizi su ciò che merita protezione, su ciò che va incoraggiato e sul genere di vita che spera di rendere possibile ai propri cittadini. Uno Stato che dichiara di non esprimerne alcuno, di norma, li ha già espressi: ha soltanto scelto di non dirlo.",
        },
        {
          type: "paragraph",
          text: "La dignità umana non nasce dalle preferenze, dalla domanda di mercato, dalla comodità amministrativa o dalla possibilità tecnica. L'autorità politica non esiste per fabbricare un'umanità nuova, né per limitarsi ad arbitrare appetiti in conflitto: esiste per garantire le condizioni in cui le persone, le famiglie e le comunità possano vivere bene.",
        },
        {
          type: "paragraph",
          text: "La civiltà europea non è comprensibile senza il cristianesimo, e quella eredità la riconosciamo apertamente. Ciò che rifiutiamo non è il disaccordo — il disaccordo è la condizione normale di una società libera — ma la pretesa che la vita pubblica europea si comporti come se la propria eredità religiosa non fosse mai esistita.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-and-community": {
      title: "La persona e la comunità",
      statement: "Il nostro punto di partenza è la persona in relazione, non l'individuo isolato.",
      summary: "Diritti e doveri, libertà e responsabilità, tenuti insieme.",
      body: [
        {
          type: "paragraph",
          text: "Nessuno viene al mondo senza legami. Ciascuno di noi entra in un luogo dove già ci sono dei genitori, una lingua, una cultura, una patria, degli obblighi e una storia. Non sono vincoli da cui evadere: sono tra le condizioni che rendono possibile, in partenza, una vita umana piena.",
        },
        {
          type: "paragraph",
          text: "I diritti sono reali, e senza doveri corrispondenti non durano a lungo. La libertà è reale, ed è più della semplice assenza di costrizione: comprende la capacità di perseguire ciò che è davvero un bene.",
        },
        {
          type: "paragraph",
          text: "Un ordine politico sano tiene perciò in equilibrio quattro coppie: libertà e responsabilità, diritti e doveri, dignità individuale e obbligo sociale, autorità e sussidiarietà.",
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "Famiglia",
      statement:
        "La società deve rendere materialmente possibili la formazione di una famiglia, la genitorialità e una vita umana dotata di senso.",
      summary: "La prima istituzione della civiltà, e la più facile da indebolire.",
      body: [
        {
          type: "paragraph",
          text: "La famiglia è la prima istituzione della civiltà e precede lo Stato. Quasi tutto ciò da cui una società dipende — crescere i figli, prendersi cura degli anziani, trasmettere la lingua e la fede, il lavoro quotidiano che tiene insieme una comunità — accade prima di tutto lì.",
        },
        {
          type: "paragraph",
          text: "Un'economia che rende finanziariamente impossibile formare una famiglia è un'economia disordinata. Lo stesso vale per un'organizzazione del lavoro che tratta la genitorialità come un intralcio e per un mercato immobiliare che trasforma la proprietà della casa in un privilegio irraggiungibile. Non sono sventure private: sono il risultato di scelte politiche, e con scelte politiche si possono cambiare.",
        },
        {
          type: "paragraph",
          text: "Sosteniamo perciò case accessibili, una fiscalità attenta ai carichi familiari, il sostegno alla genitorialità, un'occupazione stabile e la disponibilità di tempo sottratto alla produzione economica. Il rinnovamento demografico dell'Europa deve venire anzitutto dal rendere possibile la vita familiare agli europei stessi.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "nation-and-continuity": {
      title: "Nazione e continuità",
      statement:
        "Le nazioni europee hanno il legittimo diritto di preservare la propria identità storica, la propria cultura e la propria continuità.",
      summary: "La nazione come comunità fra le generazioni, non come unità amministrativa.",
      body: [
        {
          type: "paragraph",
          text: "L'umanità è universale; la civiltà è particolare. Le persone non appartengono soltanto all'umanità in astratto, ma a comunità reali plasmate dalla storia — comunità tenute insieme dalla memoria, dalla lingua, dai costumi, dalle istituzioni, dal territorio e dal sentimento di un destino comune.",
        },
        {
          type: "paragraph",
          text: "L'uguale dignità di ogni essere umano non esige che ciascun Paese diventi culturalmente intercambiabile con tutti gli altri. Una città polacca deve restare riconoscibilmente polacca, una città italiana riconoscibilmente italiana, un villaggio francese riconoscibilmente francese.",
        },
        {
          type: "paragraph",
          text: "Preservare le culture storiche e i popoli d'Europa non è, di per sé, più ostile che preservare le culture e le identità storiche di qualunque altra civiltà. Difendiamo la continuità, e la difendiamo per tutti.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "immigration-and-integration": {
      title: "Immigrazione e integrazione",
      statement:
        "L'immigrazione deve essere contenuta entro livelli compatibili con un'integrazione reale e con la stabilità sociale.",
      summary: "I confini come istituzioni legittime; la cittadinanza come appartenenza.",
      body: [
        {
          type: "paragraph",
          text: "La politica migratoria deve servire il bene comune di lungo periodo del Paese che accoglie. Nessuna società è in grado di assorbire un mutamento demografico illimitato senza conseguenze sulla fiducia sociale, sulle abitazioni, sulle infrastrutture, sulla continuità culturale e sulla coesione politica.",
        },
        {
          type: "paragraph",
          text: "La cittadinanza deve significare appartenenza, non semplice residenza. La naturalizzazione deve richiedere una conoscenza reale della lingua, della storia e delle istituzioni nazionali, il rispetto dell'ordine costituzionale e un legame autentico con il Paese.",
        },
        {
          type: "statement",
          text: "Chi diventa cittadino secondo la legge deve essere trattato da cittadino.",
        },
        {
          type: "paragraph",
          text: "Quell'impegno non è una riserva, né un'aggiunta dell'ultimo momento. L'appartenenza, una volta riconosciuta, è piena. Il nostro discorso riguarda l'entità e le condizioni degli ingressi, ed è rivolto alle politiche — mai alle persone che sono arrivate seguendone le regole.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "Europa",
      statement:
        "Una comunità di civiltà composta di nazioni sovrane, che cooperano dove la cooperazione serve loro davvero.",
      summary: "Unità senza uniformità; la sussidiarietà come regola di governo.",
      body: [
        {
          type: "paragraph",
          text: "L'unità europea non deve esigere la dissoluzione delle nazioni europee. Rifiutiamo tanto l'isolamento nazionale assoluto quanto la trasformazione dell'Europa in uno Stato amministrativo centralizzato e post-nazionale.",
        },
        {
          type: "paragraph",
          text: "Il principio di governo deve essere la sussidiarietà: nulla va deciso a un livello più alto quando può essere deciso con competenza a un livello più basso. Il comune non deve cedere senza necessità alla regione, la regione alla nazione, né la nazione alle istituzioni continentali.",
        },
        {
          type: "paragraph",
          text: "Resta comunque moltissimo che gli europei possono fare soltanto insieme — la difesa, i confini, le infrastrutture strategiche, la scienza, la tutela dell'ambiente, la medicina, la resilienza energetica e l'industria strategica. La nostra visione non è quella di un'Europa uniforme, ma di un'Europa la cui diversità resti inconfondibilmente europea.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "Ordine economico",
      statement:
        "L'impresa è legittima; le istituzioni economiche restano subordinate al bene comune.",
      summary: "Né un capitalismo senza limiti né un socialismo centralizzato.",
      body: [
        {
          type: "paragraph",
          text: "La proprietà privata, l'impresa, il profitto e il successo economico sono tutti legittimi. Nessuno di essi è il fine più alto di una società. La società di capitali è uno strumento giuridico ed economico — indispensabile, e non sovrano.",
        },
        {
          type: "paragraph",
          text: "Quando le imprese producono beni utili, creano lavoro, sviluppano conoscenza e servono i luoghi in cui operano, è giusto che prosperino. Quando invece il potere economico concentrato comincia a dominare le istituzioni politiche, a svuotare comunità ancora vitali o a monopolizzare mercati essenziali, la società ha la legittima autorità di porgli un limite.",
        },
        {
          type: "paragraph",
          text: "Non è una posizione contro le imprese. È una posizione contro il dominio. Il nostro ideale economico è distributista quanto alla proprietà e fondato sui corpi intermedi quanto all'organizzazione: molti proprietari, non pochi.",
        },
      ] satisfies readonly ContentBlock[],
    },

    property: {
      title: "Proprietà",
      statement:
        "Una società libera richiede una proprietà largamente diffusa, non una dipendenza permanente da un piccolo numero di istituzioni.",
      summary: "Il rimedio alla concentrazione è la diffusione, non l'abolizione.",
      body: [
        {
          type: "paragraph",
          text: "La proprietà è una fonte di indipendenza e di responsabilità. Chi possiede una casa, un podere, una bottega o una quota dell'azienda in cui lavora ha nella società una posizione che nessuna quantità di consumi può sostituire.",
        },
        {
          type: "paragraph",
          text: "La risposta alla proprietà concentrata non è dunque l'abolizione della proprietà, ma la sua diffusione: la proprietà della casa, le imprese familiari, i mestieri indipendenti, le piccole e medie imprese, le cooperative e l'azionariato dei lavoratori, l'agricoltura familiare, le banche locali e regionali.",
        },
        {
          type: "paragraph",
          text: "Una società in cui milioni di persone non possiedono nulla e poche istituzioni possiedono quasi tutto non può dirsi davvero una società di proprietari, qualunque cosa dicano in materia le sue leggi.",
        },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "Lavoro",
      statement: "Il lavoro possiede una dignità reale, ma non è lo scopo dell'esistenza umana.",
      summary: "L'economia deve dare la base di una vita, non consumarla.",
      body: [
        {
          type: "paragraph",
          text: "Con il lavoro le persone prendono parte alla vita sociale, acquisiscono competenza, producono cose utili e mantengono una famiglia. Tutto questo è reale e merita rispetto — in particolare nell'artigianato, nell'agricoltura, nell'ingegneria, nel lavoro di cura, nell'insegnamento e nei mestieri qualificati.",
        },
        {
          type: "paragraph",
          text: "Ma un sistema economico è fatto per fornire la base materiale della vita umana, non per consumare le vite che era stato costruito per sostenere. Quando la produttività cresce, una parte del guadagno deve comparire come sicurezza, tempo libero, tempo per la famiglia e indipendenza, e non soltanto come produzione.",
        },
        {
          type: "paragraph",
          text: "L'automazione deve liberare le persone dalle fatiche realmente degradanti. Eliminare la presenza umana da ogni attività produttiva non deve invece diventare un fine che nessuno mette in discussione. La competenza umana è essa stessa un bene sociale.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "Tecnologia",
      statement:
        "La tecnologia deve rafforzare la competenza umana, l'autonomia e la comunità, non riorganizzare la società attorno alla necessità tecnologica.",
      summary: "Contro l'inevitabilità tecnologica, non contro la tecnologia.",
      body: [
        {
          type: "paragraph",
          text: "Lo sviluppo tecnologico non coincide con il progresso umano. Una società può diventare più capace e insieme più debole sul piano sociale, più centralizzata e meno libera.",
        },
        {
          type: "paragraph",
          text: "Rifiutiamo l'inevitabilità tecnologica — l'assunto secondo cui tutto ciò che può essere costruito debba essere adottato, e tutto ciò che accresce l'efficienza debba contare come progresso. Uno strumento introdotto come facoltativo può diventare economicamente necessario; ciò che diventa necessario rimodella le istituzioni; le istituzioni riorganizzano poi la società attorno a esso.",
        },
        {
          type: "paragraph",
          text: "I cittadini devono conservare un accesso reale al denaro contante, ai servizi pubblici erogati di persona, ai prodotti riparabili, al commercio di prossimità, a uno spazio privato libero da sorveglianza permanente e a decisori umani là dove le conseguenze giuridiche o morali sono gravi. Che una capacità esista non obbliga a impiegarla.",
        },
      ] satisfies readonly ContentBlock[],
    },

    environment: {
      title: "Ambiente",
      statement:
        "La terra, le acque e i sistemi viventi sono eredità da coltivare, proteggere e trasmettere.",
      summary: "La custodia cristiana, non lo sfruttamento e non la misantropia.",
      body: [
        {
          type: "paragraph",
          text: "Le foreste, i fiumi, i terreni agricoli, le montagne, le coste e la biodiversità non sono merci usa e getta. Una generazione può servirsene, e deve mantenerli; non ne è proprietaria assoluta.",
        },
        {
          type: "paragraph",
          text: "Rifiutiamo un ambientalismo che considera l'umanità un parassita per natura, e con altrettanta fermezza un'economia per cui qualunque distruzione è accettabile purché aumenti la produzione di breve periodo. Le politiche pubbliche devono favorire l'agricoltura locale, suoli sani, acque pulite, prodotti durevoli e riparabili, filiere regionali, una selvicoltura responsabile e il risanamento degli ecosistemi danneggiati.",
        },
        {
          type: "paragraph",
          text: "La campagna non deve essere né una zona di estrazione né un museo da cui la vita ordinaria è stata rimossa. L'uomo appartiene alla natura — come suo custode, responsabile di ciò che lascia dietro di sé.",
        },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "Architettura",
      statement:
        "L'edilizia pubblica deve rispettare la misura d'uomo, i materiali locali e la tradizione regionale.",
      summary: "La civiltà prende forma fisica, e si può tornare a costruirla bene.",
      body: [
        {
          type: "paragraph",
          text: "L'architettura plasma il modo in cui le persone intendono la bellezza, l'appartenenza e la continuità. Le città europee devono smettere di considerare la bruttezza e l'anonimato dei luoghi come segni di progresso.",
        },
        {
          type: "paragraph",
          text: "Gli edifici storici, le chiese, i fronti stradali e i monumenti vanno conservati ovunque sia ragionevolmente possibile. Le nuove costruzioni devono dare luoghi che si possano abitare per generazioni, non ambienti usa e getta disegnati attorno ai flussi di traffico, ai portafogli di investimento e ai cicli brevi dell'edilizia.",
        },
        {
          type: "statement",
          text: "Una civiltà che ha fiducia in sé deve essere capace di tornare a costruire bellezza.",
        },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Educazione",
      statement: "L'educazione deve trasmettere la civiltà prima di pretendere di trasformarla.",
      summary: "Prima l'eredità; i genitori come primi educatori.",
      body: [
        {
          type: "paragraph",
          text: "Ogni generazione ha il dovere di introdurre la successiva a ciò che ha ricevuto. Di quell'eredità fanno parte lo studio serio del cristianesimo, della storia europea e nazionale, della civiltà classica, della filosofia, della letteratura, delle scienze, della matematica, della musica, dell'arte, dell'artigianato e della responsabilità civile.",
        },
        {
          type: "paragraph",
          text: "La comprensione della storia deve essere onesta sugli errori e sui crimini, senza per questo degenerare in un insegnamento per cui la civiltà europea si riduce a una somma di colpe. Un popolo incapace di rispettare i propri antenati finirà per non curarsi dei propri discendenti.",
        },
        {
          type: "paragraph",
          text: "I genitori restano i primi educatori dei propri figli. L'autorità scolastica deve rispettare la responsabilità dei genitori e il pluralismo delle istituzioni educative.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Sussidiarietà",
      statement: "L'autorità politica deve essere esercitata al livello competente più basso.",
      summary: "Un'autorità distribuita come condizione della libertà politica.",
      body: [
        {
          type: "paragraph",
          text: "Rifiutiamo tanto l'individualismo anarchico quanto il potere totalizzante dello Stato. L'autorità è necessaria, perché ogni comunità politica ha bisogno di ordine. Ma l'autorità deve essere distribuita.",
        },
        {
          type: "paragraph",
          text: "Alle famiglie spettano le questioni familiari, ai comuni quelle locali, alle nazioni quelle nazionali; le regioni devono conservare un'autonomia reale. Le autorità superiori devono intervenire soprattutto là dove le istituzioni inferiori non sono in grado di svolgere adeguatamente una funzione necessaria.",
        },
        {
          type: "paragraph",
          text: "La concentrazione del potere sociale, economico, tecnologico e di governo in un piccolo numero di istituzioni rende impossibile una libertà reale. La sussidiarietà non è una comodità amministrativa: è un principio di libertà politica.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Democrazia",
      statement:
        "Un governo costituzionale, una rappresentanza allargata e la cooperazione dove il bene comune la richiede.",
      summary: "Elezioni, limiti, contrappesi — e una cultura di partito intesa come servizio.",
      body: [
        {
          type: "paragraph",
          text: "Il governo deve avere autorità sufficiente a difendere il bene comune e restare limitato dalla legge, dalla sussidiarietà, dai contrappesi istituzionali e dalla dignità della persona. Siamo impegnati a favore delle elezioni, dei limiti costituzionali e della partecipazione dei cittadini.",
        },
        {
          type: "paragraph",
          text: "La rappresentanza deve allargarsi oltre gli apparati di partito professionali. Alla rappresentanza territoriale può affiancarsi quella delle famiglie, dei comuni, delle professioni, dei lavoratori, dell'agricoltura, delle università e delle altre istituzioni durevoli della società civile.",
        },
        {
          type: "paragraph",
          text: "Il disaccordo politico è legittimo e necessario; la guerra di parte permanente non lo è. Quando sono in gioco gli interessi durevoli di una nazione, i partiti devono essere capaci di agire al di là del vantaggio di parte. Lo Stato è necessario. Lo Stato non è Dio.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Politica estera",
      statement:
        "Indipendenza strategica, prudenza e una ferma contrarietà di principio alla guerra non necessaria.",
      summary: "Indipendenza, non ambizione imperiale.",
      body: [
        {
          type: "paragraph",
          text: "Le nazioni europee devono essere in grado di difendersi, di presidiare i propri confini e di mantenere l'indipendenza strategica nell'alimentazione, nell'energia, nelle infrastrutture, nella medicina e nell'industria essenziale. Dipendere in modo permanente da potenze lontane per le condizioni elementari della sopravvivenza nazionale non è un assetto stabile: è un rischio che nessuno ha mai valutato fino in fondo.",
        },
        {
          type: "paragraph",
          text: "Rifiutiamo anche le guerre ideologiche condotte per rifare civiltà altrui secondo modelli politici astratti. Civiltà diverse hanno storie diverse, e rapporti pacifici non richiedono uniformità culturale.",
        },
        {
          type: "paragraph",
          text: "La politica estera deve essere guidata dalla prudenza, dal legittimo interesse nazionale, dalla difesa degli innocenti dove ciò è realisticamente possibile e da una ferma contrarietà di principio alla guerra non necessaria.",
        },
      ] satisfies readonly ContentBlock[],
    },
  },
};

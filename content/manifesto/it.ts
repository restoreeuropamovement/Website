import type { ContentBlock } from "@/lib/content-types";
import type { ManifestoText } from "./index";

export const manifestoText: ManifestoText = {
  meta: {
    title: "Manifesto del restaurazionismo integrale europeo",
    subtitle: "Per una civiltà cristiana, europea e a misura d'uomo",
    status: "Documento fondativo · Testo in revisione prima dell'adozione formale",
  },
  labels: {
    eyebrow: "Documento fondativo",
    download: "Scarica il manifesto",
    contents: "Indice",
    contentsNavLabel: "Indice del manifesto",
    progressLabel: "Avanzamento della lettura",
    copyDocument: "Copia il link al manifesto",
    copySection: "Copia il link alla sezione {numeral}, {title}",
    reference:
      "La versione di riferimento è il testo inglese. Dove un passaggio è discusso all'interno del movimento, il disaccordo viene registrato anziché risolto con una modifica fatta in silenzio.",
  },
  sections: {
    preamble: {
      title: "Preambolo",
      summary: "L'Europa è una civiltà, ed è un'eredità che è stata trasmessa, non inventata.",
      body: [
        { type: "lead", text: "L'Europa è più di un continente, di un mercato o di uno spazio amministrativo." },
        {
          type: "paragraph",
          text: "È una civiltà: il frutto del cristianesimo, dell'eredità classica, di popoli, lingue e nazioni storicamente distinti, di generazioni di famiglie, di paesaggi coltivati, di città e villaggi, di chiese e monasteri, di arte, filosofia, diritto, artigianato, sacrificio e memoria.",
        },
        {
          type: "paragraph",
          text: "Questa eredità non è stata creata da individui astratti, sciolti dalla storia. È stata consegnata da una generazione all'altra.",
        },
        {
          type: "paragraph",
          text: "Fu Burke a darne, nel 1790, la formulazione rimasta classica, contro una rivoluzione che si proponeva di ricominciare daccapo dalla sola ragione. La società, scrisse, è un patto — e poiché i fini di quel patto non possono essere raggiunti nell'arco di una sola vita, è un patto “non soltanto tra coloro che sono in vita, ma tra coloro che sono in vita, coloro che sono morti e coloro che devono ancora nascere”. Qualunque altra cosa si voglia discutere nelle pagine che seguono, quella frase è la premessa che le regge tutte.",
        },
        { type: "paragraph", text: "Eppure l'Europa moderna tratta sempre più l'eredità stessa come qualcosa di sospetto." },
        {
          type: "paragraph",
          text: "L'ordine dominante ha posto l'autonomia individuale al di sopra dell'obbligo, il consumo al di sopra della continuità, la crescita economica al di sopra della comunità, la capacità tecnica al di sopra del giudizio umano e l'uniformità amministrativa al di sopra del carattere particolare dei popoli e dei luoghi. Ha indebolito progressivamente le istituzioni che un tempo si frapponevano tra l'individuo isolato e il potere centrale: la famiglia, la parrocchia, le arti e i mestieri, il comune, la regione e la nazione.",
        },
        { type: "paragraph", text: "Rifiutiamo l'assunto secondo cui questo processo sarebbe un progresso inevitabile." },
        {
          type: "paragraph",
          text: "Rifiutiamo anche la convinzione che restaurare significhi ricreare meccanicamente un secolo determinato. Il passato ha conosciuto ingiustizia, povertà, violenza ed errore. Restaurazione non significa rievocazione storica.",
        },
        {
          type: "paragraph",
          text: "Significa recuperare i principi che la società moderna ha scartato e applicarli con intelligenza alle condizioni del presente.",
        },
        {
          type: "paragraph",
          text: "Il nostro fine non è dunque né la rivoluzione fine a sé stessa né la conservazione dell'ordine esistente.",
        },
        { type: "statement", text: "Il nostro fine è la restaurazione." },
      ] satisfies readonly ContentBlock[],
    },

    "moral-order": {
      title: "L'ordine morale",
      summary:
        "Nessuna comunità politica può restare indefinitamente neutrale riguardo al bene che essa esiste per proteggere.",
      body: [
        {
          type: "lead",
          text: "Rifiutiamo la tesi liberale secondo cui la comunità politica potrebbe restare indefinitamente neutrale riguardo al bene.",
        },
        {
          type: "paragraph",
          text: "Ogni civiltà incarna giudizi su ciò che merita protezione, su ciò che va incoraggiato, su che cosa sia la giustizia e sul genere di essere umano che essa spera di formare.",
        },
        {
          type: "paragraph",
          text: "Affermiamo che la verità morale non nasce dalle preferenze dell'individuo, dai comandi dello Stato, dalla domanda di mercato o dalla possibilità tecnica.",
        },
        { type: "statement", text: "Gli esseri umani possiedono una dignità perché sono persone create da Dio." },
        {
          type: "paragraph",
          text: "L'autorità politica non esiste dunque né per fabbricare un'umanità nuova né per limitarsi ad amministrare appetiti in conflitto. Il suo fine proprio è il bene comune: le condizioni sociali entro le quali le persone, le famiglie e le comunità possono vivere secondo virtù e fiorire.",
        },
        {
          type: "paragraph",
          text: "La civiltà europea non è comprensibile separatamente dal cristianesimo. Riconosciamo perciò l'eredità cristiana, e in particolare cattolica, dell'Europa come elemento fondativo della sua civiltà.",
        },
        {
          type: "paragraph",
          text: "Ciò che rifiutiamo non è l'esistenza del disaccordo, ma la dottrina per cui la vita pubblica europea dovrebbe comportarsi come se la propria eredità religiosa non fosse mai esistita.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-not-atom": {
      title: "La persona non è un atomo",
      summary: "Il nostro punto di partenza non è l'individuo autonomo, ma la persona in relazione.",
      body: [
        { type: "lead", text: "L'individualismo liberale parte dall'individuo autonomo." },
        { type: "statement", text: "Noi partiamo dalla persona in relazione." },
        {
          type: "paragraph",
          text: "Ogni essere umano entra in un mondo dove già ci sono genitori, famiglia, lingua, cultura, patria, doveri, storia e obblighi morali. Non sono vincoli privi di senso da cui la liberazione debba procedere all'infinito. Sono tra le condizioni che rendono possibile una vita pienamente umana.",
        },
        { type: "paragraph", text: "I diritti sono reali, ma senza doveri non sopravvivono." },
        {
          type: "paragraph",
          text: "La libertà è reale, ma non è semplicemente assenza di costrizione. La libertà vera comprende la capacità di perseguire ciò che è bene.",
        },
        { type: "paragraph", text: "Un ordine politico sano tiene perciò in equilibrio:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "la libertà con la responsabilità,",
            "i diritti con i doveri,",
            "la dignità individuale con l'obbligo sociale,",
            "l'autorità con la sussidiarietà.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "La famiglia",
      summary: "La prima istituzione della civiltà, che precede lo Stato e che va resa materialmente possibile.",
      body: [
        { type: "lead", text: "La famiglia è la prima istituzione della civiltà e precede lo Stato." },
        {
          type: "paragraph",
          text: "Riconosciamo nella famiglia fondata sul matrimonio tra uomo e donna, sull'educazione dei figli, sull'obbligo tra le generazioni e sulla cura dei giovani e degli anziani l'istituzione sociale fondamentale da cui dipende la comunità politica.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Un'economia che rende economicamente impossibile formare una famiglia è disordinata.",
            "Un'organizzazione del lavoro che tratta la genitorialità come un intralcio è disordinata.",
            "Un mercato immobiliare che trasforma la proprietà della casa in un privilegio irraggiungibile è disordinato.",
          ],
        },
        {
          type: "paragraph",
          text: "Una cultura che insegna l'adolescenza permanente, il consumismo e l'isolamento non è in grado di sostenere una civiltà.",
        },
        {
          type: "paragraph",
          text: "Le politiche pubbliche devono perciò rendere materialmente possibile la formazione di una famiglia, attraverso case accessibili, una fiscalità attenta ai carichi familiari, il sostegno alla genitorialità, un'occupazione stabile e la disponibilità di tempo sottratto alla produzione economica.",
        },
        {
          type: "paragraph",
          text: "Il rinnovamento demografico dell'Europa deve venire anzitutto dal rendere possibile la vita familiare agli europei stessi, e non dal trattare un'immigrazione di massa permanente come un sostituto della nascita e della continuità delle generazioni future.",
        },
      ] satisfies readonly ContentBlock[],
    },

    nation: {
      title: "Nazione, popolo e patria",
      summary: "L'umanità è universale; la civiltà è particolare. I popoli d'Europa possono conservare la propria continuità.",
      body: [
        { type: "lead", text: "L'umanità è universale. La civiltà è particolare." },
        {
          type: "paragraph",
          text: "Le persone non appartengono soltanto all'umanità in astratto, ma a comunità reali plasmate dalla storia.",
        },
        {
          type: "paragraph",
          text: "La nazione non è dunque una semplice circoscrizione amministrativa. È una comunità fra le generazioni, tenuta insieme dalla memoria storica, dalla lingua, dai costumi, dalle istituzioni, dal territorio e dal sentimento di un destino comune.",
        },
        { type: "paragraph", text: "I popoli d'Europa hanno un interesse legittimo a mantenere la propria continuità storica." },
        {
          type: "paragraph",
          text: "L'uguale dignità di ogni essere umano non implica che ciascun Paese debba diventare culturalmente intercambiabile con tutti gli altri.",
        },
        {
          type: "list",
          marker: "none",
          items: [
            "Una città polacca deve restare riconoscibilmente polacca.",
            "Una città italiana deve restare riconoscibilmente italiana.",
            "Un villaggio francese deve restare riconoscibilmente francese.",
          ],
        },
        {
          type: "paragraph",
          text: "Preservare le culture storiche e i popoli d'Europa non è, di per sé, più ostile che preservare le culture e le identità storiche di qualunque altra civiltà.",
        },
        { type: "statement", text: "Difendiamo perciò la continuità." },
      ] satisfies readonly ContentBlock[],
    },

    immigration: {
      title: "Immigrazione e integrazione",
      summary: "Ingressi a livelli compatibili con un'integrazione reale; la cittadinanza come appartenenza, non come residenza.",
      body: [
        { type: "lead", text: "La politica migratoria deve servire il bene comune di lungo periodo del Paese che accoglie." },
        {
          type: "paragraph",
          text: "Nessuna società possiede una capacità illimitata di trasformazione demografica senza conseguenze sulla fiducia sociale, sulle abitazioni, sulla continuità culturale, sulle infrastrutture e sulla coesione politica.",
        },
        {
          type: "paragraph",
          text: "L'immigrazione deve perciò essere contenuta entro livelli compatibili con un'integrazione reale, con la stabilità sociale e con la continuità demografica e culturale della società che accoglie.",
        },
        { type: "paragraph", text: "La cittadinanza deve significare appartenenza, non semplice residenza." },
        {
          type: "paragraph",
          text: "La naturalizzazione deve richiedere una conoscenza reale della lingua, della storia e delle istituzioni nazionali, il rispetto dell'ordine costituzionale e un legame autentico con il Paese.",
        },
        { type: "statement", text: "Chi diventa cittadino secondo la legge deve essere trattato da cittadino." },
        {
          type: "paragraph",
          text: "Gli obblighi umanitari non possono essere interpretati come se imponessero alle società europee di rinunciare al governo del proprio futuro demografico.",
        },
        { type: "paragraph", text: "I confini sono istituzioni legittime." },
        {
          type: "paragraph",
          text: "L'ospitalità senza ordine finisce per distruggere le condizioni che rendono possibile l'ospitalità stessa.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "L'Europa come civiltà di nazioni",
      summary: "La cooperazione fra nazioni sovrane, governata in ogni sua parte dalla sussidiarietà.",
      body: [
        { type: "lead", text: "L'unità europea non deve esigere la dissoluzione delle nazioni europee." },
        {
          type: "paragraph",
          text: "Rifiutiamo tanto l'isolamento nazionale assoluto quanto la trasformazione dell'Europa in uno Stato amministrativo centralizzato e post-nazionale.",
        },
        {
          type: "paragraph",
          text: "L'Europa deve invece diventare una comunità di civiltà composta di nazioni sovrane, che cooperano negli ambiti in cui la cooperazione serve davvero i loro interessi condivisi.",
        },
        { type: "paragraph", text: "Il principio che deve governare l'organizzazione politica europea è la sussidiarietà:" },
        {
          type: "statement",
          text: "Nulla va deciso a un livello più alto quando può essere deciso con competenza a un livello più basso.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Il comune non deve cedere senza necessità alla regione.",
            "La regione non deve cedere senza necessità alla nazione.",
            "La nazione non deve cedere senza necessità alle istituzioni continentali.",
          ],
        },
        {
          type: "paragraph",
          text: "L'Europa deve cooperare nella difesa, nei confini, nelle infrastrutture strategiche, nella scienza, nella tutela dell'ambiente e nella salvaguardia della propria civiltà, conservando al tempo stesso le identità storiche e l'autonomia politica delle sue nazioni.",
        },
        { type: "paragraph", text: "La nostra visione non è quella di un'Europa uniforme." },
        { type: "statement", text: "È quella di un'Europa la cui diversità resti inconfondibilmente europea." },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "L'ordine economico",
      summary: "Né un capitalismo senza limiti né un socialismo centralizzato: molti proprietari, non pochi.",
      body: [
        { type: "lead", text: "Rifiutiamo tanto il capitalismo senza limiti quanto il socialismo centralizzato." },
        { type: "statement", text: "La vita economica esiste per l'uomo. L'uomo non esiste per la vita economica." },
        {
          type: "paragraph",
          text: "Questa posizione è più antica di noi. Leone XIII ne tracciò la forma nella Rerum Novarum del 1891, difendendo contro il socialismo il diritto di possedere beni produttivi e condannando insieme le condizioni che il capitalismo industriale aveva prodotto — rifiutando, in altre parole, di ammettere che le due risposte disponibili fossero le uniche possibili. Hilaire Belloc spinse l'argomento più avanti nel 1912, con Lo Stato servile, prevedendo che una società a proprietà concentrata non sarebbe diventata socialista, ma si sarebbe assestata in qualcos'altro: sicurezza per chi non possiede nulla, pagata con una mancanza di libertà permanente. Riteniamo che abbia letto correttamente la direzione di marcia.",
        },
        { type: "paragraph", text: "La società di capitali è uno strumento giuridico ed economico, non un'istituzione sovrana." },
        {
          type: "paragraph",
          text: "Le imprese svolgono una funzione indispensabile quando producono beni utili, creano lavoro, sviluppano conoscenza e servono le comunità in cui operano.",
        },
        { type: "paragraph", text: "Ma il potere delle imprese deve restare subordinato al bene comune." },
        {
          type: "paragraph",
          text: "Una società di capitali non deve avere la possibilità pratica di dominare le istituzioni politiche, di distruggere comunità ancora vitali, di manipolare i cittadini fino a renderli permanentemente dipendenti, di monopolizzare mercati essenziali o di riorganizzare la società unicamente secondo le esigenze del profitto e dell'efficienza.",
        },
        {
          type: "list",
          marker: "none",
          items: ["Il profitto è legittimo.", "L'impresa è legittima.", "Il successo economico è legittimo."],
        },
        { type: "paragraph", text: "Ma nessuna di queste cose è il fine più alto di una società." },
        { type: "paragraph", text: "Il rapporto giusto deve perciò essere chiaro:" },
        {
          type: "statement",
          text: "L'economia esiste per la persona, la famiglia e la comunità; la persona, la famiglia e la comunità non esistono per l'economia.",
        },
        { type: "paragraph", text: "Dove le imprese contribuiscono alla fioritura umana, è giusto che prosperino." },
        {
          type: "paragraph",
          text: "Dove il potere economico concentrato minaccia la concorrenza reale, la vita familiare, l'indipendenza politica, la dignità umana o la sopravvivenza delle comunità locali, la società ha la legittima autorità di porgli un limite.",
        },
        {
          type: "paragraph",
          text: "Non cerchiamo né l'abolizione dell'impresa privata né la proprietà pubblica della vita economica.",
        },
        {
          type: "paragraph",
          text: "Cerchiamo un'economia in cui l'impresa resti al servizio della civiltà, invece di diventarne padrona.",
        },
        {
          type: "paragraph",
          text: "La proprietà privata è una fonte importante di indipendenza e di responsabilità. La risposta a una proprietà privata eccessiva non è dunque l'abolizione della proprietà, ma la sua più ampia diffusione.",
        },
        {
          type: "paragraph",
          text: "Il nostro ideale economico è distributista quanto alla proprietà e fondato sui corpi intermedi quanto all'organizzazione.",
        },
        { type: "paragraph", text: "Vogliamo una società caratterizzata da:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "una proprietà della casa largamente diffusa;",
            "imprese familiari;",
            "artigiani e mestieri indipendenti;",
            "piccole e medie imprese;",
            "cooperative e azionariato dei lavoratori;",
            "agricoltura familiare;",
            "banche locali e regionali;",
            "apprendistato e istituzioni di formazione professionale;",
            "associazioni professionali forti;",
            "limiti alla concentrazione monopolistica.",
          ],
        },
        {
          type: "paragraph",
          text: "Una civiltà in cui milioni di persone non possiedono nulla, mentre un piccolo numero di imprese, di istituzioni finanziarie o di apparati statali possiede quasi tutto, non può dirsi davvero una società di proprietari.",
        },
        { type: "statement", text: "L'obiettivo deve perciò essere molti proprietari, non pochi." },
      ] satisfies readonly ContentBlock[],
    },

    corporatism: {
      title: "Corpi intermedi, arti e mestieri e bene comune",
      summary: "Corpi professionali con un ruolo reale nella vita economica — e indipendenti dallo Stato.",
      body: [
        {
          type: "lead",
          text: "Il conflitto tra lavoro e capitale non deve essere assunto come principio organizzatore permanente della vita economica.",
        },
        {
          type: "paragraph",
          text: "Lavoratori, datori di lavoro, artigiani, agricoltori e professioni partecipano a una medesima vita economica.",
        },
        {
          type: "paragraph",
          text: "Le forme moderne delle antiche arti e dei mestieri, le camere professionali e le associazioni di categoria devono perciò prendere parte al governo dell'economia.",
        },
        {
          type: "paragraph",
          text: "Spetta a queste istituzioni fissare le norme della professione, l'apprendistato, le condizioni di lavoro, gli strumenti di mediazione e la rappresentanza di settore, restando al tempo stesso sufficientemente indipendenti dall'amministrazione statale centralizzata.",
        },
        {
          type: "paragraph",
          text: "La stessa rappresentanza politica può comprendere non soltanto la rappresentanza territoriale, ma una rappresentanza ordinata dei principali corpi sociali e professionali del Paese.",
        },
        { type: "paragraph", text: "Questo ordinamento per corpi intermedi deve restare subordinato alla sussidiarietà." },
        {
          type: "paragraph",
          text: "Rifiutiamo un sistema in cui le organizzazioni di mestiere diventino meri strumenti di uno Stato onnipotente.",
        },
        { type: "statement", text: "Né l'impresa né lo Stato devono assorbire la società civile." },
      ] satisfies readonly ContentBlock[],
    },

    finance: {
      title: "Contro il dominio della finanza",
      summary: "La finanza è necessaria; il dominio della finanza non lo è. La terra e la casa servono ad abitare.",
      body: [
        { type: "lead", text: "La finanza è necessaria." },
        { type: "statement", text: "Il dominio della finanza non lo è." },
        {
          type: "paragraph",
          text: "La funzione propria della finanza è indirizzare il risparmio verso l'attività produttiva, la casa, l'impresa e l'investimento di lungo periodo.",
        },
        {
          type: "paragraph",
          text: "Un'economia dominata dalla speculazione, dall'inflazione dei valori patrimoniali, dal debito predatorio e dall'estrazione finanziaria separa a poco a poco la ricchezza dal contributo produttivo.",
        },
        {
          type: "paragraph",
          text: "Le politiche pubbliche devono perciò privilegiare l'investimento produttivo rispetto alla speculazione e la proprietà familiare rispetto all'indebitamento permanente.",
        },
        {
          type: "paragraph",
          text: "La terra e le abitazioni devono servire anzitutto ad abitare e a fare comunità, non diventare strumenti finanziari in continua rivalutazione, scollegati dai salari.",
        },
        { type: "paragraph", text: "I mercati sono strumenti utili." },
        { type: "statement", text: "Non sono autorità morali." },
        {
          type: "paragraph",
          text: "Dove il mercato erode le fondamenta su cui la società poggia, la comunità politica ha il diritto di regolarlo.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "La tecnologia deve servire l'uomo",
      summary: "Contro l'inevitabilità tecnologica. La macchina deve adattarsi all'uomo.",
      body: [
        { type: "lead", text: "Lo sviluppo tecnologico non coincide con il progresso umano." },
        {
          type: "paragraph",
          text: "Una società può diventare tecnologicamente più avanzata e insieme più debole sul piano sociale, meno sana su quello psicologico, più centralizzata su quello politico e più distruttiva su quello ambientale.",
        },
        {
          type: "paragraph",
          text: "Rifiutiamo perciò l'inevitabilità tecnologica: l'assunto secondo cui tutto ciò che può essere inventato debba essere adottato, e tutto ciò che accresce l'efficienza debba contare come progresso.",
        },
        { type: "paragraph", text: "Il sistema tecnologico ha una tendenza propria all'espansione." },
        {
          type: "paragraph",
          text: "Una tecnologia introdotta come facoltativa può diventare economicamente necessaria. Ciò che diventa necessario rimodella le istituzioni. Le istituzioni riorganizzano poi la società attorno alle esigenze della tecnologia.",
        },
        { type: "paragraph", text: "Alla fine, sono gli esseri umani ad adattarsi alla macchina." },
        {
          type: "paragraph",
          text: "Ivan Illich ha descritto questa sequenza nel 1973, in La convivialità, sostenendo che ogni strumento supera una seconda soglia oltre la quale smette di servire lo scopo per cui era stato adottato e comincia a imporre scopi propri — i suoi esempi erano la medicina, la scuola e l'automobile, e riteneva che nessuno avesse davvero scelto di sottomettervisi. Nello stesso anno E. F. Schumacher pubblicava Piccolo è bello, chiedendosi che aspetto avrebbe un'economia che assumesse la misura della vita umana come vincolo anziché come intralcio. Nessuno dei due era un reazionario, e nessuno dei due è una lettura comoda neppure per noi.",
        },
        { type: "paragraph", text: "Il nostro principio è l'inverso:" },
        { type: "statement", text: "La macchina deve adattarsi all'uomo." },
        {
          type: "paragraph",
          text: "La tecnologia va giudicata per il modo in cui rafforza o indebolisce l'autonomia umana, la vita familiare, la comunità, il lavoro dotato di senso, la riservatezza, il decentramento politico e l'ambiente naturale.",
        },
        {
          type: "paragraph",
          text: "Distinguiamo perciò tra la tecnologia che serve bisogni umani reali e quella il cui effetto principale è la dipendenza, la sorveglianza, la distrazione o l'atomizzazione sociale.",
        },
        {
          type: "paragraph",
          text: "La medicina, l'igiene pubblica, la conoscenza scientifica e l'ingegneria realmente utile non sono nostre nemiche.",
        },
        { type: "paragraph", text: "Né ogni pratica tradizionale deve essere conservata solo perché è tradizionale." },
        { type: "paragraph", text: "La nostra dottrina non è un romanticismo primitivista." },
        { type: "statement", text: "È la subordinazione della tecnologia." },
      ] satisfies readonly ContentBlock[],
    },

    "human-scale-life": {
      title: "Il diritto a una vita a misura d'uomo",
      summary: "La partecipazione ordinaria alla vita sociale non deve richiedere una totale dipendenza tecnologica.",
      body: [
        {
          type: "lead",
          text: "I cittadini moderni hanno bisogno, sempre più spesso, di sistemi tecnologici anche solo per prendere parte alla vita ordinaria della società.",
        },
        { type: "paragraph", text: "Questa dipendenza non deve essere illimitata." },
        { type: "paragraph", text: "I cittadini devono conservare un accesso reale:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "al denaro contante;",
            "ai servizi pubblici erogati di persona;",
            "a un'identificazione non digitale, dove è praticabile;",
            "ai libri e ai materiali didattici su carta;",
            "a prodotti riparabili;",
            "al commercio di prossimità;",
            "a spazi privati liberi da sorveglianza permanente;",
            "a decisori umani nelle questioni di grave rilievo giuridico o morale.",
          ],
        },
        {
          type: "paragraph",
          text: "I bambini in particolare devono essere protetti da industrie il cui modello di profitto dipende dal massimizzare la dipendenza psicologica e la cattura dell'attenzione.",
        },
        {
          type: "paragraph",
          text: "L'intelligenza artificiale e l'automazione vanno valutate non soltanto in base alla produttività, ma in base ai loro effetti sulla competenza umana, sull'occupazione, sull'autonomia e sul potere delle istituzioni.",
        },
        {
          type: "statement",
          text: "Che una capacità tecnica esista non crea l'obbligo di impiegarla.",
        },
      ] satisfies readonly ContentBlock[],
    },

    stewardship: {
      title: "La custodia del mondo naturale",
      summary: "La natura non è una merce senza limiti né una divinità — è un'eredità tenuta in custodia.",
      body: [
        { type: "lead", text: "Il mondo naturale non è una merce senza limiti né una divinità da adorare." },
        { type: "statement", text: "È un'eredità affidata all'umanità." },
        {
          type: "paragraph",
          text: "Burke ha detto la cosa con più esattezza di quanta ne sappiamo mettere noi. Scrivendo nel 1790, descriveva coloro che sono in vita in un dato momento come “possessori temporanei e usufruttuari a vita” della cosa pubblica, che non devono ritenersene padroni assoluti. Parlava di costituzioni e non di foreste, ma la struttura dell'obbligo è la stessa, ed è la ragione per cui questa sezione compare in un documento politico.",
        },
        {
          type: "paragraph",
          text: "Le foreste, i fiumi, i terreni agricoli, le montagne, le coste e la biodiversità devono essere protetti non soltanto perché hanno un valore economico, ma perché la civiltà umana stessa dipende da un rapporto stabile con il mondo naturale.",
        },
        { type: "paragraph", text: "Rifiutiamo un ambientalismo che considera l'umanità un parassita per natura." },
        {
          type: "paragraph",
          text: "Rifiutiamo con altrettanta fermezza un'ideologia economica per cui qualunque distruzione è giustificabile purché aumenti la produzione di breve periodo.",
        },
        { type: "paragraph", text: "Le politiche ambientali devono favorire:" },
        {
          type: "list",
          items: [
            "l'agricoltura locale,",
            "suoli sani,",
            "acque pulite,",
            "prodotti durevoli,",
            "la riparazione anziché l'usa e getta,",
            "filiere regionali,",
            "una selvicoltura responsabile,",
            "il risanamento degli ecosistemi danneggiati,",
            "e forme di insediamento che preservino insieme la comunità umana e il paesaggio naturale.",
          ],
        },
        {
          type: "paragraph",
          text: "La campagna non deve diventare né una zona di estrazione industriale né un museo da cui la vita umana ordinaria è stata espulsa.",
        },
        { type: "statement", text: "L'uomo appartiene alla natura, ma come suo custode." },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "Città, villaggio e architettura",
      summary: "La civiltà prende forma fisica. Una società sicura di sé può tornare a costruire bellezza.",
      body: [
        { type: "lead", text: "La civiltà prende forma fisica." },
        { type: "paragraph", text: "L'architettura plasma il modo in cui le persone intendono la bellezza, l'appartenenza e la continuità." },
        {
          type: "paragraph",
          text: "Non furono i conservatori i primi a mettere sotto accusa l'urbanistica di metà Novecento. Lo fece Jane Jacobs nel 1961, in Vita e morte delle grandi città, sostenendo che i pianificatori stavano distruggendo proprio quella vita di strada densa, mescolata e priva di prestigio che rendeva i quartieri sicuri e abitabili. Christopher Alexander e i suoi collaboratori cercarono poi di esporre, in A Pattern Language del 1977, in che cosa consistesse in concreto l'alternativa, fin nella larghezza di una porta. Preferiamo prendere in prestito da chi ha fatto quel lavoro, piuttosto che dichiarare una preferenza per la bellezza e fermarci lì.",
        },
        {
          type: "paragraph",
          text: "Le città europee devono perciò smettere di considerare la bruttezza e l'anonimato dei luoghi come segni di progresso.",
        },
        {
          type: "paragraph",
          text: "L'architettura pubblica deve rispettare la misura d'uomo, i materiali locali, le tradizioni regionali e il carattere già esistente degli insediamenti storici.",
        },
        {
          type: "paragraph",
          text: "Gli edifici storici, le chiese, i fronti stradali e i monumenti vanno conservati ovunque sia ragionevolmente possibile.",
        },
        {
          type: "paragraph",
          text: "Le nuove costruzioni devono dare luoghi che si possano abitare per generazioni, non ambienti usa e getta disegnati anzitutto attorno ai flussi di traffico, ai portafogli di investimento e ai conti di breve periodo dell'edilizia.",
        },
        { type: "statement", text: "Una civiltà che ha fiducia in sé deve essere capace di tornare a costruire bellezza." },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Educazione",
      summary: "Trasmettere l'eredità prima di pretendere di trasformarla; i genitori restano i primi educatori.",
      body: [
        { type: "lead", text: "L'educazione deve trasmettere la civiltà prima di pretendere di trasformarla." },
        {
          type: "paragraph",
          text: "Ogni generazione ha il dovere di introdurre la successiva all'eredità che ha ricevuto.",
        },
        { type: "paragraph", text: "L'educazione deve perciò comprendere lo studio serio:" },
        {
          type: "list",
          items: [
            "del cristianesimo,",
            "della storia europea e nazionale,",
            "della civiltà classica,",
            "della filosofia,",
            "della letteratura,",
            "delle scienze,",
            "della matematica,",
            "della musica,",
            "dell'arte,",
            "dell'artigianato,",
            "e della responsabilità civile.",
          ],
        },
        {
          type: "paragraph",
          text: "La comprensione della storia non deve degenerare in un insegnamento per cui la civiltà europea si riduce a poco più di un cumulo di colpe.",
        },
        {
          type: "statement",
          text: "Un popolo incapace di rispettare i propri antenati finirà per non curarsi dei propri discendenti.",
        },
        {
          type: "paragraph",
          text: "I genitori restano i primi educatori dei propri figli, e l'autorità scolastica deve perciò rispettare la responsabilità dei genitori e il pluralismo delle istituzioni educative.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Autorità e sussidiarietà",
      summary: "L'autorità è necessaria, ma deve essere distribuita fino al livello competente più basso.",
      body: [
        { type: "lead", text: "Rifiutiamo tanto l'individualismo anarchico quanto il potere totalizzante dello Stato." },
        { type: "paragraph", text: "L'autorità è necessaria, perché ogni comunità politica ha bisogno di ordine." },
        { type: "paragraph", text: "Ma l'autorità deve essere distribuita." },
        {
          type: "paragraph",
          text: "Il principio ha un nome e una fonte. Pio XI lo enunciò nella Quadragesimo Anno del 1931: è ingiusto, ed è uno sconvolgimento del retto ordine, rimettere a una società maggiore e più alta ciò che comunità minori e inferiori sono in grado di fare da sé. Lo trattava come una questione di giustizia e non di buona amministrazione, il che è una pretesa assai più forte e assai più difficile da soddisfare.",
        },
        {
          type: "paragraph",
          text: "La concentrazione del potere sociale, economico, tecnologico e di governo in un piccolo numero di istituzioni rende impossibile una libertà reale.",
        },
        { type: "statement", text: "Il potere politico deve perciò essere esercitato al livello competente più basso." },
        {
          type: "list",
          marker: "rule",
          items: [
            "Alle famiglie spettano le questioni familiari.",
            "Ai comuni spettano le questioni locali.",
            "Le regioni devono conservare un'autonomia reale.",
            "Alle nazioni spettano le questioni nazionali.",
          ],
        },
        {
          type: "paragraph",
          text: "Le autorità superiori devono intervenire soprattutto là dove le istituzioni inferiori non sono in grado di svolgere adeguatamente una funzione necessaria.",
        },
        { type: "paragraph", text: "Non è una comodità amministrativa." },
        { type: "statement", text: "È un principio di libertà politica." },
        {
          type: "paragraph",
          text: "Dobbiamo essere sinceri sul punto in cui questo lascia la discussione. I trattati europei professano già la sussidiarietà: l'articolo 5 del Trattato sull'Unione europea vincola l'Unione ad agire soltanto là dove gli obiettivi dell'azione prevista non possono essere conseguiti in misura sufficiente dagli Stati membri. La nostra contesa non è dunque con il principio, che anche i nostri avversari dichiarano di condividere, ma con chi abbia titolo a giudicare se esso sia stato rispettato, e con ciò che ne consegue quando la risposta è no.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Democrazia, rappresentanza e Stato",
      summary: "Governo costituzionale, rappresentanza allargata e cooperazione dove il bene comune la richiede.",
      body: [
        { type: "lead", text: "Liberalismo e democrazia non sono la stessa cosa." },
        {
          type: "paragraph",
          text: "Una società può respingere il liberalismo filosofico e conservare al tempo stesso le elezioni, la rappresentanza, i limiti costituzionali e la partecipazione dei cittadini.",
        },
        {
          type: "paragraph",
          text: "Il governo deve avere autorità sufficiente a difendere il bene comune e restare al tempo stesso limitato dalla legge, dalla sussidiarietà, dai contrappesi istituzionali e dalla dignità della persona.",
        },
        { type: "paragraph", text: "La rappresentanza deve allargarsi oltre gli apparati di partito professionali." },
        {
          type: "paragraph",
          text: "Alla rappresentanza territoriale può affiancarsi quella delle famiglie, dei comuni, delle professioni, dei lavoratori, dell'agricoltura, delle università e delle altre istituzioni durevoli della società civile.",
        },
        {
          type: "paragraph",
          text: "La guida politica va intesa come custodia, non come mobilitazione ideologica permanente.",
        },
        { type: "paragraph", text: "Lo Stato è necessario." },
        { type: "statement", text: "Lo Stato non è Dio." },
        {
          type: "paragraph",
          text: "Il disaccordo politico è legittimo e necessario. Un ordine politico sano non richiede che tutti i partiti la pensino allo stesso modo.",
        },
        { type: "paragraph", text: "Ma la competizione politica non deve diventare un fine in sé." },
        {
          type: "paragraph",
          text: "Quando sono in gioco gli interessi fondamentali della nazione e del suo popolo, i partiti devono essere capaci di agire al di là del vantaggio di parte. Le questioni che riguardano la sicurezza nazionale, le infrastrutture critiche, la stabilità demografica, la tutela delle famiglie, la continuità costituzionale e la prosperità di lungo periodo del popolo non devono essere ridotte a una guerra elettorale permanente.",
        },
        { type: "paragraph", text: "L'opposizione è necessaria, ma l'opposizione fine a sé stessa è distruttiva." },
        {
          type: "paragraph",
          text: "Lo scopo dei partiti politici non è semplicemente sconfiggersi a vicenda. Il loro primo dovere è servire il popolo e la comunità politica a cui appartengono.",
        },
        {
          type: "paragraph",
          text: "Vogliamo perciò una cultura politica in cui il disaccordo serio resti possibile e la cooperazione al di là degli schieramenti sia attesa ogni volta che il bene comune durevole della nazione la richiede.",
        },
        {
          type: "list",
          marker: "none",
          items: [
            "La nazione deve stare al di sopra del partito.",
            "Il bene comune deve stare al di sopra della fazione.",
            "Il popolo deve stare al di sopra della classe politica.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    culture: {
      title: "La cultura contro l'omologazione",
      summary: "Le lingue, le tradizioni e l'artigianato appartengono alla vita ordinaria, non all'economia del turismo.",
      body: [
        {
          type: "lead",
          text: "La cultura globale dei consumi rende sempre più intercambiabili le città, i modi di vivere, l'intrattenimento e gli ambienti commerciali.",
        },
        { type: "statement", text: "Ci opponiamo a questa omologazione." },
        {
          type: "paragraph",
          text: "Le lingue, i dialetti regionali, le tradizioni popolari, le feste, la musica, la cucina, l'artigianato e la memoria storica non devono sopravvivere come semplici attrazioni turistiche.",
        },
        { type: "paragraph", text: "Devono far parte della vita ordinaria." },
        {
          type: "paragraph",
          text: "Le politiche culturali devono rafforzare la creazione locale, invece di limitarsi a importare ciò che ha la maggiore presa commerciale sul mercato mondiale.",
        },
        {
          type: "paragraph",
          text: "La civiltà europea deve restare aperta a imparare dalle altre civiltà, senza per questo dissolversi in esse.",
        },
        { type: "statement", text: "Lo scambio non è la cancellazione." },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "Lavoro",
      summary: "Il lavoro possiede una dignità reale, ma non è lo scopo dell'esistenza umana.",
      body: [
        { type: "lead", text: "Il lavoro è più di uno scambio in cui si cede tempo in cambio di un salario." },
        { type: "statement", text: "Il lavoro possiede una dignità reale, ma non è lo scopo dell'esistenza umana." },
        {
          type: "paragraph",
          text: "Gli esseri umani non sono stati creati soltanto per produrre, consumare, accumulare e ripetere il ciclo fino alla morte.",
        },
        {
          type: "paragraph",
          text: "I sistemi economici devono fornire la base materiale della fioritura umana, non consumare le vite che erano stati costruiti per sostenere.",
        },
        {
          type: "paragraph",
          text: "Una società è disordinata quando le persone comuni devono cedere quasi tutte le ore di veglia soltanto per assicurarsi una casa, da mangiare e una sicurezza elementare; quando i genitori vedono di rado i propri figli; quando le comunità si svuotano perché tutti sono esausti dal lavoro; o quando l'aumento della produttività arricchisce le istituzioni senza produrre alcun corrispondente aumento di libertà umana.",
        },
        { type: "paragraph", text: "Il progresso economico deve perciò essere giudicato anche in base a una domanda semplice:" },
        { type: "statement", text: "Dà alle persone comuni un maggiore governo della propria vita?" },
        {
          type: "paragraph",
          text: "La produttività deve infine tradursi in maggiore sicurezza, più tempo libero, famiglie più solide e una maggiore libertà dalla fatica non necessaria.",
        },
        {
          type: "paragraph",
          text: "Il fine della vita economica non è massimizzare il numero di ore che si possono estrarre dagli esseri umani.",
        },
        {
          type: "paragraph",
          text: "Le persone hanno bisogno di tempo per la famiglia, l'amicizia, il culto, la contemplazione, la natura, il mestiere, lo studio, la comunità, la festa e il riposo.",
        },
        { type: "paragraph", text: "Non sono interruzioni economicamente improduttive della vita." },
        { type: "paragraph", text: "Sono tra le ragioni per cui la vita economica esiste." },
        {
          type: "paragraph",
          text: "Rifiutiamo una civiltà in cui gli esseri umani diventano servitori di sistemi creati in origine per servirli.",
        },
        {
          type: "statement",
          text: "L'uomo deve lavorare per vivere. Non deve mai essere ridotto a vivere soltanto per lavorare.",
        },
        {
          type: "paragraph",
          text: "Con il lavoro le persone prendono parte alla vita sociale, acquisiscono competenza, producono cose utili e mantengono una famiglia.",
        },
        {
          type: "paragraph",
          text: "Un'economia che distrugge occupazioni dotate di senso soltanto perché la loro sostituzione accresce l'efficienza numerica deve perciò considerare anche ciò che si perde, e non soltanto ciò che si guadagna.",
        },
        {
          type: "paragraph",
          text: "L'artigianato, l'agricoltura, l'ingegneria, il lavoro di cura, l'insegnamento e i mestieri qualificati meritano una rinnovata dignità sociale.",
        },
        {
          type: "paragraph",
          text: "L'automazione deve liberare le persone dalle fatiche realmente degradanti, dove è possibile; ma eliminare la presenza umana da ogni attività economicamente produttiva non deve diventare un fine che nessuno mette in discussione.",
        },
        { type: "statement", text: "La competenza umana è essa stessa un bene sociale." },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Politica estera",
      summary: "Indipendenza strategica, prudenza e una ferma contrarietà di principio alla guerra non necessaria.",
      body: [
        { type: "lead", text: "L'Europa deve cercare l'indipendenza, non l'ambizione imperiale." },
        {
          type: "paragraph",
          text: "Le nazioni europee devono essere in grado di difendersi, di presidiare i propri confini e di mantenere l'indipendenza strategica nell'alimentazione, nell'energia, nelle infrastrutture, nella medicina e nell'industria essenziale.",
        },
        {
          type: "paragraph",
          text: "Rifiutiamo una dipendenza permanente da potenze lontane per le condizioni elementari della sopravvivenza nazionale.",
        },
        {
          type: "paragraph",
          text: "Rifiutiamo anche le guerre ideologiche condotte per rifare civiltà altrui secondo modelli politici astratti.",
        },
        { type: "paragraph", text: "Civiltà diverse hanno storie diverse." },
        { type: "statement", text: "Rapporti pacifici non richiedono uniformità culturale." },
        {
          type: "paragraph",
          text: "La politica estera deve essere guidata dalla prudenza, dal legittimo interesse nazionale, dalla difesa degli innocenti dove ciò è realisticamente possibile e da una ferma contrarietà di principio alla guerra non necessaria.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "what-we-reject": {
      title: "Ciò che rifiutiamo",
      summary: "Dieci rifiuti, detti con chiarezza — di idee e di sistemi, non di popoli.",
      body: [
        {
          type: "list",
          marker: "rule",
          items: [
            "Rifiutiamo l'**individualismo liberale**, perché una società è più di un contratto fra individui autonomi.",
            "Rifiutiamo il **materialismo**, perché l'uomo non si riduce all'appetito economico.",
            "Rifiutiamo il **comunismo**, perché abolire la proprietà e subordinare la società allo Stato centralizzato distrugge insieme la libertà e le istituzioni sociali che nascono dal basso.",
            "Rifiutiamo l'**assolutismo del laissez-faire**, perché i mercati devono restare subordinati al bene comune.",
            "Rifiutiamo la **tecnocrazia**, perché la competenza tecnica e la capacità tecnologica non conferiscono autorità morale.",
            "Rifiutiamo il **consumismo**, perché l'accumulo non può dare a una civiltà uno scopo.",
            "Rifiutiamo il **nichilismo storico**, perché una civiltà incapace di amare qualcosa della propria eredità non può sopravvivere.",
            "Rifiutiamo il **terrorismo politico**, perché la distruzione deliberata di vite innocenti non può costruire un ordine morale.",
            "Rifiutiamo il **totalitarismo**, perché né un partito, né un'impresa, né un'ideologia, né lo Stato possono legittimamente assorbire l'intera vita umana.",
            "E rifiutiamo il **culto del progresso per il progresso**.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    "what-we-seek": {
      title: "Ciò che vogliamo",
      summary: "Il programma in positivo: che aspetto avrebbe un ordine europeo restaurato.",
      body: [
        {
          type: "lead",
          text: "Vogliamo un'Europa in cui la campana della chiesa, la tavola di famiglia, il mercato del paese, la bottega, il podere, la piazza, l'università, il bosco e la nazione tornino ad appartenere a un ordine sociale coerente.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Vogliamo nazioni abbastanza sicure di sé da conservarsi senza aver bisogno di odiare nessuno.",
            "Vogliamo famiglie capaci di crescere figli senza rovinarsi economicamente.",
            "Vogliamo una proprietà largamente diffusa, non una dipendenza permanente.",
            "Vogliamo mercati senza culto del mercato.",
            "Vogliamo autorità senza totalitarismo.",
            "Vogliamo tecnologia senza dominio tecnologico.",
            "Vogliamo la custodia dell'ambiente senza disprezzo per l'umanità.",
            "Vogliamo il cristianesimo senza costringere nessuno a credere.",
            "Vogliamo il patriottismo.",
            "Vogliamo continuità senza immobilismo.",
            "Vogliamo il progresso dove il progresso è davvero umano, e la moderazione dove il progresso è diventato soltanto un altro nome per la dissoluzione.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    restoration: {
      title: "Restaurazione",
      summary: "La storia non si può invertire, ma la direzione si può cambiare.",
      body: [
        { type: "lead", text: "Il nostro movimento non chiede che l'Europa diventi un museo." },
        { type: "paragraph", text: "Né chiediamo che la storia sia invertita." },
        { type: "paragraph", text: "La storia non si può invertire." },
        { type: "statement", text: "Ma la direzione si può cambiare." },
        {
          type: "list",
          marker: "none",
          items: [
            "Le istituzioni si possono ricostruire.",
            "Le famiglie possono ritrovare fiducia.",
            "Le comunità possono riacquistare potere.",
            "La proprietà può tornare a essere diffusa.",
            "La tecnologia può tornare a essere al nostro servizio.",
            "I paesaggi si possono risanare.",
            "Le chiese possono tornare a riempirsi di vita.",
            "Le nazioni possono ricordare che cosa sono.",
            "L'Europa può tornare a essere riconoscibilmente sé stessa.",
          ],
        },
        { type: "paragraph", text: "La scelta che ci sta davanti non è dunque semplicemente tra passato e futuro." },
        { type: "paragraph", text: "È tra due futuri diversi." },
        {
          type: "paragraph",
          text: "Uno è sempre più centralizzato, tecnologico, sradicato, mercificato e intercambiabile: una civiltà in cui l'uomo dispone di un potere maggiore sul mondo esterno mentre esercita un controllo sempre minore sui sistemi che governano la sua stessa vita.",
        },
        { type: "paragraph", text: "L'altro accetta dei limiti." },
        {
          type: "paragraph",
          text: "Riconosce che alcune cose vanno ereditate anziché inventate, protette anziché ottimizzate, amate anziché messe a prezzo.",
        },
        { type: "statement", text: "Noi scegliamo il secondo." },
        {
          type: "list",
          marker: "rule",
          items: [
            "Scegliamo la famiglia contro l'atomizzazione.",
            "La comunità contro l'isolamento.",
            "La proprietà contro la dipendenza.",
            "La custodia contro lo sfruttamento.",
            "La bellezza contro l'anonimato dei luoghi.",
            "La nazione contro lo sradicamento.",
            "La fede contro il nichilismo.",
            "Il giudizio umano contro l'inevitabilità tecnologica.",
            "La civiltà contro la dissoluzione.",
            "E la restaurazione contro la resa.",
          ],
        },
        { type: "paragraph", text: "L'Europa deve tornare a essere consapevole di ciò che è." },
        { type: "paragraph", text: "Non perché le altre civiltà siano prive di valore." },
        {
          type: "paragraph",
          text: "Ma perché nessuna civiltà può sopravvivere dopo aver deciso che la propria continuazione è moralmente superflua.",
        },
        { type: "paragraph", text: "Non spettava a noi creare la nostra eredità." },
        { type: "paragraph", text: "Non spetta a noi scartarla." },
        { type: "statement", text: "Spetta a noi riceverla, rinnovarla e trasmetterla." },
      ] satisfies readonly ContentBlock[],
    },
  },
};

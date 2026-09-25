import type { PolicyText } from "./index";

export const policyText: PolicyText = {
  meta: {
    eyebrow: "Posizioni",
    title: "Catalogo programmatico",
    metaTitle: "Catalogo programmatico",
    lede: "Questo catalogo risponde a una domanda circoscritta: che cosa sostiene Restore Europa su una determinata questione? Non sostituisce il Manifesto. Il Manifesto espone la visione del mondo; qui stanno posizioni consultabili, tema per tema.",
    description:
      "Le posizioni del Restore Europa Movement, consultabili tema per tema: ordine morale, famiglia, cittadinanza, economia, tecnologia, educazione, giustizia, sanità, ambiente e politica estera.",
    body: [
      "Dove la dottrina morale cattolica è chiara, Restore Europa di norma la assume come riferimento morale di base, e indica separatamente la sua attuazione nel diritto civile. Uno scostamento è registrato esplicitamente: sulla pena capitale Restore Europa assume la più antica ammissione tradizionale per i casi eccezionali anziché la posizione abolizionista contemporanea.",
      "Il catalogo distingue l'ordine costituzionale a cui Restore Europa tende dal diritto europeo quale oggi vige. Diverse posizioni — sulla nazionalità, sulla privazione della cittadinanza, sulla libertà di parola, sulla rilevanza pubblica della religione e sulla pena capitale — richiederebbero una modifica costituzionale o dei trattati prima di poter essere attuate in singoli Stati europei.",
    ],
  },

  index: {
    showingAll: {
      one: "Viene mostrata l'unica posizione.",
      other: "Vengono mostrate tutte le {count} posizioni.",
    },
    showingSome: {
      one: "{count} posizione su {total} corrisponde.",
      other: "{count} posizioni su {total} corrispondono.",
    },
    noMatch: "Nel catalogo non c'è nulla che corrisponda.",
    showAll: "Mostra tutte le posizioni",
    sectionCount: {
      one: "{count} posizione",
      other: "{count} posizioni",
    },
    relevanceHeading: "Prima le corrispondenze migliori",
    suggestions: {
      heading: "Posizioni più vicine",
      body: "Queste voci sono le più vicine a quanto è stato digitato. Potrebbero non usare le stesse parole.",
    },
  },

  filters: {
    searchLabel: "Cerca tra le posizioni",
    searchPlaceholder: "aborto, sussidiarietà, naturalizzazione…",
    searchButton: "Cerca",
    clear: "Cancella",
    sectionNavLabel: "Filtra le posizioni per sezione",
    sectionHeading: "Sezione",
    allSections: "Tutte",
  },

  entry: {
    breadcrumb: "Catalogo programmatico",
    positionHeading: "Posizione",
    policiesHeading: "Misure",
    principleHeading: "Principio",
    limitsHeading: "Limiti e questioni irrisolte",
    basisHeading: "Fondamento nel Manifesto",
    keywordsHeading: "Termini di ricerca",
    lastUpdatedBefore: "Ultimo aggiornamento",
    lastUpdatedAfter: ".",
    commitments: {
      one: "{count} misura",
      other: "{count} misure",
    },
    sectionPosition: "{index} di {total} in questa sezione",
    previous: "Posizione precedente",
    next: "Posizione successiva",
    relatedHeading: "Posizioni correlate",
    allPositions: "Tutte le posizioni",
    readManifesto: "Leggi il Manifesto",
    notFound: "Posizione non trovata",
  },

  categories: {
    constitutional: {
      title: "Ordine costituzionale, religioso e morale",
      summary:
        "Il posto della religione nella vita pubblica, e le questioni morali che la legge non può evitare.",
    },
    family: {
      title: "Famiglia, demografia e ordine sociale",
      summary:
        "Il nucleo familiare come prima istituzione, e ciò che le politiche pubbliche gli devono.",
    },
    nation: {
      title: "Nazione, cittadinanza, immigrazione ed Europa",
      summary: "L'appartenenza a una comunità politica, e l'ordine europeo fra le nazioni.",
    },
    economy: {
      title: "Economia, proprietà, finanza e lavoro",
      summary: "La proprietà, l'impresa, il credito e la dignità del lavoro.",
    },
    technology: {
      title: "Tecnologia, intelligenza artificiale e vita a misura d'uomo",
      summary:
        "Ciò che si può costruire, ciò che conviene adottare e ciò che deve restare a portata di mano.",
    },
    education: {
      title: "Educazione, cultura e vita pubblica",
      summary: "Ciò che si trasmette alla generazione successiva, e chi lo decide.",
    },
    government: {
      title: "Governo, giustizia e ordine pubblico",
      summary: "L'autorità, i suoi limiti e il trattamento di chi infrange la legge.",
    },
    healthcare: {
      title: "Sanità",
      summary: "L'accesso alle cure necessarie, e l'etica che vi si pratica.",
    },
    environment: {
      title: "Ambiente, territorio e insediamento",
      summary: "La custodia di un'eredità che non è stata fatta da noi.",
    },
    "foreign-policy": {
      title: "Politica estera e difesa",
      summary:
        "L'indipendenza strategica, e una presunzione permanente contro la guerra non necessaria.",
    },
  },

  search: {
    synonyms: {
      "church-and-state": [
        "Chiesa e Stato",
        "Stato confessionale",
        "religione di Stato",
        "Chiesa di Stato",
        "integralismo",
        "laicità",
        "secolarismo",
      ],
      abortion: [
        "aborto",
        "interruzione di gravidanza",
        "nascituro",
        "difesa della vita",
        "diritto alla vita",
      ],
      euthanasia: [
        "eutanasia",
        "suicidio assistito",
        "morte assistita",
        "fine vita",
        "cure palliative",
      ],
      contraception: [
        "contraccezione",
        "controllo delle nascite",
        "pillola",
        "pianificazione familiare",
        "preservativi",
        "fertilità",
      ],
      "same-sex-marriage": [
        "matrimonio omosessuale",
        "matrimonio tra persone dello stesso sesso",
        "matrimonio egualitario",
        "omosessualità",
        "unioni civili",
      ],
      pornography: [
        "pornografia",
        "porno",
        "contenuti per adulti",
        "contenuti espliciti",
        "oscenità",
      ],
      prostitution: [
        "prostituzione",
        "lavoro sessuale",
        "case chiuse",
        "sfruttamento della prostituzione",
        "tratta di esseri umani",
      ],
      drugs: [
        "droghe",
        "stupefacenti",
        "cannabis",
        "marijuana",
        "hashish",
        "depenalizzazione",
      ],
      alcohol: ["alcol", "birra", "vino", "superalcolici", "ubriachezza", "temperanza"],
      gambling: [
        "gioco d'azzardo",
        "scommesse",
        "scommesse sportive",
        "casinò",
        "lotteria",
        "slot machine",
        "casse premio",
      ],
      blasphemy: [
        "bestemmia",
        "blasfemia",
        "sacrilegio",
        "profanazione",
        "vandalismo contro le chiese",
      ],
      family: [
        "famiglia",
        "figli",
        "genitori",
        "nucleo familiare",
        "maternità",
        "paternità",
        "servizi per l'infanzia",
      ],
      demography: [
        "demografia",
        "natalità",
        "tasso di natalità",
        "fertilità",
        "calo demografico",
        "invecchiamento della popolazione",
      ],
      "sunday-rest": [
        "apertura domenicale",
        "riposo domenicale",
        "giorno di riposo",
        "sabato",
        "orari di apertura dei negozi",
        "lavoro domenicale",
      ],
      welfare: [
        "assistenza sociale",
        "sussidi",
        "previdenza sociale",
        "rete di protezione",
        "sussidio di disoccupazione",
        "reddito minimo",
      ],
      nation: [
        "nazione",
        "popolo",
        "patria",
        "identità nazionale",
        "patriottismo",
        "continuità storica",
      ],
      immigration: [
        "immigrazione",
        "migrazione",
        "migranti",
        "immigrati",
        "nuovi arrivati",
        "controllo delle frontiere",
        "frontiere aperte",
        "immigrazione di massa",
      ],
      "irregular-migration": [
        "migrazione irregolare",
        "immigrazione illegale",
        "soggiorno irregolare",
        "senza documenti",
        "regolarizzazione",
        "sanatoria",
      ],
      asylum: [
        "asilo",
        "rifugiati",
        "richiedenti asilo",
        "protezione internazionale",
        "non-refoulement",
        "paese terzo sicuro",
      ],
      deportation: [
        "espulsione",
        "rimpatrio",
        "allontanamento",
        "remigrazione",
        "ritorno",
        "divieto di reingresso",
      ],
      citizenship: [
        "cittadinanza",
        "nazionalità",
        "passaporto",
        "naturalizzazione",
        "ius soli",
        "ius sanguinis",
      ],
      "dual-citizenship": [
        "doppia cittadinanza",
        "doppia nazionalità",
        "secondo passaporto",
        "rinuncia",
      ],
      integration: [
        "integrazione",
        "assimilazione",
        "requisito linguistico",
        "conoscenze civiche",
        "test di cittadinanza",
      ],
      voting: ["diritto di voto", "suffragio", "elezioni", "elettorato"],
      "european-union": [
        "Unione europea",
        "UE",
        "Bruxelles",
        "Commissione europea",
        "riforma dei trattati",
        "euroscetticismo",
        "Stati membri",
      ],
      subsidiarity: [
        "sussidiarietà",
        "decentramento",
        "federalismo",
        "autonomie locali",
        "localismo",
      ],
      economy: [
        "economia",
        "ordine economico",
        "capitalismo",
        "socialismo",
        "distributismo",
        "libero mercato",
      ],
      property: [
        "proprietà",
        "patrimonio",
        "piccoli proprietari",
        "cooperative",
        "proprietà diffusa",
      ],
      monopolies: [
        "monopolio",
        "monopoli",
        "antitrust",
        "diritto della concorrenza",
        "cartelli",
        "grandi imprese",
        "concentrazione economica",
      ],
      corporatism: [
        "corporazioni",
        "camere",
        "corporativismo",
        "apprendistato",
        "mestieri",
        "rappresentanza professionale",
      ],
      usury: [
        "usura",
        "interessi",
        "tassi di interesse",
        "prestiti",
        "credito",
        "debito",
        "banche",
      ],
      housing: [
        "casa",
        "abitazioni",
        "affitto",
        "locatori",
        "mutui",
        "prezzi delle case",
        "proprietà della casa",
        "inquilini",
      ],
      work: ["lavoro", "occupazione", "posti di lavoro", "lavoratori", "mercato del lavoro"],
      wages: [
        "salario",
        "salari",
        "retribuzione",
        "salario minimo",
        "salario giusto",
        "salario familiare",
        "stipendio",
      ],
      tax: [
        "tassa",
        "tasse",
        "imposte",
        "fiscalità",
        "imposta sul reddito",
        "IVA",
        "imposta di successione",
        "imposta sulle società",
        "patrimoniale",
      ],
      pensions: [
        "pensione",
        "pensioni",
        "previdenza",
        "età pensionabile",
        "vecchiaia",
        "risparmio previdenziale",
      ],
      unions: [
        "sindacati",
        "contrattazione collettiva",
        "scioperi",
        "rappresentanze aziendali",
        "rappresentanza dei lavoratori",
      ],
      technology: [
        "tecnologia",
        "tecnica",
        "digitale",
        "innovazione",
        "grandi piattaforme",
        "macchine",
      ],
      "artificial-intelligence": [
        "intelligenza artificiale",
        "apprendimento automatico",
        "algoritmi",
        "chatbot",
        "modelli linguistici",
      ],
      automation: [
        "automazione",
        "robot",
        "robotica",
        "dequalificazione",
        "sostituzione dei lavoratori con le macchine",
      ],
      cash: [
        "contante",
        "denaro contante",
        "banconote",
        "monete",
        "società senza contanti",
        "filiali bancarie",
      ],
      "right-to-repair": [
        "diritto alla riparazione",
        "riparabilità",
        "obsolescenza programmata",
        "pezzi di ricambio",
        "usa e getta",
      ],
      surveillance: [
        "sorveglianza",
        "spionaggio",
        "riservatezza",
        "videosorveglianza",
        "conservazione dei dati",
        "tracciamento",
      ],
      "facial-recognition": [
        "riconoscimento facciale",
        "biometria",
        "identificazione biometrica",
        "scansione del volto",
      ],
      "social-media": [
        "social media",
        "smartphone",
        "tempo davanti allo schermo",
        "verifica dell'età",
        "minori online",
        "cattura dell'attenzione",
      ],
      "digital-identity": [
        "identità digitale",
        "documento digitale",
        "identità elettronica",
        "carta d'identità",
        "credito sociale",
      ],
      "central-bank-digital-currency": [
        "valuta digitale di banca centrale",
        "euro digitale",
        "CBDC",
        "moneta programmabile",
      ],
      cryptocurrency: [
        "criptovaluta",
        "cripto",
        "bitcoin",
        "blockchain",
        "attività digitali",
      ],
      "genetic-engineering": [
        "ingegneria genetica",
        "editing genetico",
        "CRISPR",
        "bambini su misura",
        "linea germinale",
        "embrioni",
        "eugenetica",
      ],
      transhumanism: [
        "transumanesimo",
        "potenziamento umano",
        "cibernetica",
        "interfaccia cervello-computer",
        "impianti",
      ],
      education: [
        "istruzione",
        "educazione",
        "scuola",
        "scuole",
        "programmi scolastici",
        "insegnamento",
        "alunni",
      ],
      homeschooling: [
        "istruzione parentale",
        "scuola a casa",
        "educazione domiciliare",
      ],
      "school-choice": [
        "libertà di scelta della scuola",
        "buono scuola",
        "scuole private",
        "scuole paritarie",
        "scuole cattoliche",
        "scuole indipendenti",
      ],
      universities: [
        "università",
        "istruzione superiore",
        "accademia",
        "libertà accademica",
        "ricerca",
      ],
      "religion-in-schools": [
        "insegnamento della religione",
        "scuole statali",
        "cristianesimo nella scuola",
        "preghiera a scuola",
        "insegnamento laico",
      ],
      "sex-education": [
        "educazione sessuale",
        "educazione all'affettività",
        "diritti dei genitori",
        "consenso",
      ],
      culture: [
        "cultura",
        "tradizione",
        "usanze",
        "dialetti",
        "folklore",
        "feste",
        "omologazione",
        "globalizzazione",
      ],
      architecture: [
        "architettura",
        "edifici",
        "urbanistica",
        "patrimonio",
        "tutela dei beni culturali",
        "conservazione",
      ],
      "free-speech": [
        "libertà di parola",
        "libertà di espressione",
        "censura",
        "discorsi d'odio",
        "leggi sulla parola",
        "libertà di stampa",
        "istigazione",
      ],
      prisons: [
        "carceri",
        "carcere",
        "detenzione",
        "pene",
        "punizione",
        "rieducazione",
        "giustizia penale",
      ],
      "death-penalty": ["pena di morte", "pena capitale", "esecuzione", "abolizione"],
      firearms: [
        "armi da fuoco",
        "armi",
        "controllo delle armi",
        "legittima difesa",
        "caccia",
      ],
      healthcare: [
        "sanità",
        "assistenza sanitaria",
        "ospedali",
        "medici",
        "medicina",
        "assicurazione sanitaria",
      ],
      "medical-ethics": [
        "etica medica",
        "bioetica",
        "coscienza",
        "obiezione di coscienza",
        "ospedali cattolici",
      ],
      environment: [
        "ambiente",
        "natura",
        "ecologia",
        "tutela della natura",
        "biodiversità",
        "inquinamento",
        "terreni agricoli",
        "custodia del creato",
      ],
      energy: [
        "energia",
        "elettricità",
        "rete elettrica",
        "prezzi dell'energia",
        "sicurezza energetica",
        "blackout",
      ],
      "nuclear-power": [
        "energia nucleare",
        "nucleare civile",
        "centrali nucleari",
        "reattori",
        "scorie nucleari",
      ],
      "fossil-fuels": [
        "combustibili fossili",
        "carbone",
        "petrolio",
        "gas naturale",
        "benzina",
        "gasolio",
        "idrocarburi",
      ],
      renewables: [
        "energie rinnovabili",
        "solare",
        "fotovoltaico",
        "eolico",
        "pale eoliche",
        "idroelettrico",
        "geotermia",
      ],
      climate: [
        "cambiamento climatico",
        "riscaldamento globale",
        "carbonio",
        "emissioni",
        "neutralità climatica",
        "gas serra",
        "decarbonizzazione",
      ],
      defence: ["difesa", "militare", "esercito", "forze armate", "riarmo"],
      nato: [
        "NATO",
        "alleanza atlantica",
        "articolo 5",
        "difesa collettiva",
        "alleanze militari",
      ],
      russia: ["Russia", "Federazione Russa", "Mosca", "Cremlino"],
      ukraine: ["Ucraina", "Kiev", "guerra in Ucraina", "negoziati di pace"],
      "united-states": ["Stati Uniti", "USA", "America", "Washington", "atlantismo"],
      china: [
        "Cina",
        "Repubblica popolare cinese",
        "Pechino",
        "catene di approvvigionamento",
      ],
      "israel-and-palestine": ["Israele", "Palestina", "Gaza", "Medio Oriente"],
      "foreign-aid": [
        "aiuti allo sviluppo",
        "aiuti umanitari",
        "aiuti esteri",
        "cooperazione internazionale",
      ],
      sanctions: [
        "sanzioni",
        "embargo",
        "congelamento dei beni",
        "coercizione economica",
        "restrizioni commerciali",
      ],
      conscription: [
        "leva obbligatoria",
        "servizio militare",
        "servizio nazionale",
        "riserva",
        "obiezione di coscienza",
        "coscrizione",
      ],
      "nuclear-weapons": [
        "armi nucleari",
        "armi atomiche",
        "deterrenza nucleare",
        "disarmo",
        "non proliferazione",
        "controllo degli armamenti",
      ],
    },
  },

  entries: {
    "catholic-confessional-state": {
      title: "Stato confessionale cattolico",
      shortAnswer:
        "Restore Europa sostiene il riconoscimento costituzionale formale del cattolicesimo come religione pubblica principale, e respinge la pretesa che lo Stato possa essere neutrale sul piano morale o religioso.",
      position: [
        "Restore Europa sostiene un ordine politico confessionale cattolico profondamente radicato. Lo Stato deve riconoscere formalmente il cattolicesimo come religione pubblica principale e non deve rivendicare alcuna neutralità morale o religiosa.",
      ],
      policies: [
        "Il cattolicesimo deve ricevere un riconoscimento costituzionale formale.",
        "La dottrina morale cattolica può informare il diritto pubblico e le istituzioni pubbliche.",
        "La Chiesa e lo Stato temporale restano istituzionalmente distinti, ma lo Stato non è metafisicamente supremo.",
        "Le feste cattoliche, le chiese, i simboli, le processioni, le scuole e le tradizioni pubbliche devono essere tutelati.",
        "Lo Stato deve cooperare con la Chiesa nelle questioni relative alla famiglia, all'educazione, alla morale e alla vita sociale.",
      ],
      principle:
        "Lo Stato governa le cose temporali; la Chiesa governa le cose spirituali; l'autorità temporale resta soggetta all'ordine morale superiore.",
      limits: [
        "Restore Europa non sostiene la conversione forzata.",
        "Questo modello non è un governo clericale diretto dell'ordinaria amministrazione statale.",
      ],
      keywords: [
        "Stato cattolico",
        "Stato confessionale",
        "integralismo",
        "Chiesa e Stato",
        "religione di Stato",
      ],
    },

    abortion: {
      title: "Aborto",
      shortAnswer:
        "Restore Europa sostiene che la vita umana debba essere protetta fin dal concepimento e che l'aborto diretto volontario debba essere vietato.",
      position: [
        "Restore Europa segue la dottrina cattolica secondo cui la vita umana deve essere rispettata e protetta fin dal concepimento. L'aborto diretto volontario deve essere vietato.",
      ],
      policies: [
        "Tutela giuridica della vita umana non ancora nata fin dal concepimento.",
        "Divieto dell'aborto diretto volontario.",
        "Sostegno materiale, medico e sociale alle donne incinte e alle famiglie.",
        "Sostegno all'adozione e alle alternative concrete all'aborto.",
        "Il trattamento medico volto a salvare la madre può restare lecito quando la morte del bambino non ancora nato è un effetto secondario non voluto anziché il mezzo o il fine perseguito.",
      ],
      principle:
        "La dignità umana e il diritto alla vita non cominciano soltanto quando lo Stato decide di riconoscerli.",
      keywords: ["aborto", "nascituro", "concepimento", "pro-life", "interruzione di gravidanza"],
    },

    "euthanasia-and-assisted-suicide": {
      title: "Eutanasia e suicidio assistito",
      shortAnswer:
        "Restore Europa si oppone all'eutanasia diretta e al suicidio assistito, sostiene le cure palliative e ammette il rifiuto di trattamenti straordinari o sproporzionati.",
      position: [
        "Restore Europa si oppone all'eutanasia diretta e al suicidio assistito e sostiene le cure palliative, ammettendo al tempo stesso il rifiuto di trattamenti straordinari o sproporzionati.",
      ],
      policies: [
        "Eutanasia diretta vietata.",
        "Suicidio assistito vietato.",
        "Un'offerta solida di hospice e di cure palliative.",
        "I pazienti possono rifiutare trattamenti straordinari, eccessivamente gravosi o sproporzionati.",
        "La terapia del dolore resta legittima quando la morte non è voluta.",
      ],
      keywords: ["eutanasia", "suicidio assistito", "fine vita", "cure palliative", "hospice"],
    },

    "marriage-and-sexual-ethics": {
      title: "Matrimonio ed etica sessuale",
      shortAnswer:
        "Restore Europa riconosce il matrimonio civile come unione di un uomo e una donna, e incentra il diritto di famiglia sulla famiglia naturale.",
      position: [
        "Restore Europa riconosce il matrimonio civile esclusivamente come unione di un uomo e una donna e segue la dottrina morale cattolica in materia di sessualità.",
      ],
      policies: [
        "Il matrimonio fra persone dello stesso sesso non è giuridicamente riconosciuto come matrimonio.",
        "Il diritto di famiglia è incentrato sulla famiglia naturale di madre, padre e figli.",
        "Le istituzioni religiose non possono essere costrette a riconoscere o a celebrare unioni fra persone dello stesso sesso.",
        "La disciplina delle adozioni deve dare priorità al rapporto del bambino con una madre e un padre.",
      ],
      keywords: [
        "matrimonio",
        "matrimonio omosessuale",
        "diritto di famiglia",
        "adozione",
        "matrimonio civile",
      ],
    },

    contraception: {
      title: "Contraccezione",
      shortAnswer:
        "Restore Europa si oppone alla contraccezione artificiale e respinge una cultura pubblica che tratta l'elusione permanente della fertilità come fondamento normale della vita sessuale, senza però sanzionare penalmente il possesso privato da parte di adulti.",
      position: [
        "Restore Europa segue la dottrina cattolica nell'opporsi alla contraccezione artificiale e respinge una cultura pubblica che tratta l'elusione permanente della fertilità come fondamento normale della vita sessuale.",
      ],
      policies: [
        "Nessuna promozione statale della contraccezione artificiale.",
        "Nessun finanziamento pubblico ordinario della contraccezione, salvo quando un farmaco sia realmente prescritto per una distinta finalità medica.",
        "Restrizioni alla pubblicità di contraccettivi rivolta ai minori.",
        "Le scuole non devono presentare la contraccezione come la soluzione predefinita e moralmente neutra del comportamento sessuale.",
        "La conoscenza naturale della fertilità e i metodi naturali di regolazione delle nascite sono trattati diversamente dalla contraccezione artificiale.",
      ],
      limits: [
        "Questa posizione non impone un divieto penale del possesso privato di contraccettivi da parte di adulti.",
      ],
      keywords: [
        "contraccezione",
        "anticoncezionali",
        "metodi naturali",
        "regolazione naturale delle nascite",
        "fertilità",
      ],
    },

    pornography: {
      title: "Pornografia",
      shortAnswer: "Restore Europa sostiene il divieto legale completo della pornografia.",
      position: ["Restore Europa sostiene il divieto legale completo della pornografia."],
      policies: [
        "Produzione, finanziamento, distribuzione commerciale, vendita ed esposizione pubblica vietate.",
        "Hosting online e fornitura commerciale consapevole vietati.",
        "Possesso o acquisizione deliberati di materiale pornografico vietati.",
        "Le pene più severe si applicano ai produttori commerciali, ai distributori, alle piattaforme che sfruttano le persone e al materiale che comporta coercizione, tratta o minori.",
        "La definizione giuridica deve escludere la medicina legittima, l'anatomia, la scienza, l'arte classica e la letteratura non pornografica.",
      ],
      principle:
        "La sessualità e il corpo umano non devono essere ridotti a oggetti commerciali di stimolo e di consumo.",
      keywords: ["pornografia", "porno", "contenuti per adulti", "contenuti espliciti", "oscenità"],
    },

    prostitution: {
      title: "Prostituzione",
      shortAnswer:
        "Restore Europa sostiene il divieto legale completo della prostituzione e del suo favoreggiamento commerciale, con sostegno all'uscita per chi la lascia.",
      position: [
        "Restore Europa sostiene il divieto legale completo della prostituzione e del suo favoreggiamento commerciale.",
      ],
      policies: [
        "Acquisto di prestazioni sessuali vietato.",
        "Vendita di prestazioni sessuali vietata.",
        "Case chiuse, lenocinio e favoreggiamento commerciale vietati.",
        "Pubblicità della prostituzione vietata.",
        "Tratta a fini sessuali e sfruttamento coercitivo puniti con particolare severità.",
        "Programmi di uscita, alloggio, cura delle dipendenze e assistenza professionale disponibili per chi lascia la prostituzione.",
      ],
      keywords: ["prostituzione", "case chiuse", "sex work", "lenocinio", "tratta"],
    },

    "recreational-drugs": {
      title: "Droghe ricreative",
      shortAnswer:
        "Restore Europa sostiene che gli stupefacenti a uso ricreativo, cannabis ricreativa compresa, restino illegali, con pene più severe per i trafficanti che per i consumatori dipendenti.",
      position: [
        "Restore Europa sostiene in linea generale che gli stupefacenti a uso ricreativo, cannabis ricreativa compresa, restino illegali.",
      ],
      policies: [
        "Produzione commerciale e traffico vietati.",
        "Vendita a uso ricreativo vietata.",
        "Il possesso resta illecito, con pene proporzionate alla condotta.",
        "Gli spacciatori e i trafficanti organizzati subiscono pene più severe dei consumatori dipendenti.",
        "Cura, disintossicazione e riabilitazione disponibili per le dipendenze.",
        "L'uso medico effettivo è trattato separatamente dall'uso ricreativo.",
      ],
      keywords: ["droga", "cannabis", "marijuana", "stupefacenti", "depenalizzazione"],
    },

    alcohol: {
      title: "Alcol",
      shortAnswer:
        "L'alcol resta lecito per gli adulti in uso moderato. Restore Europa si oppone all'ubriachezza, all'abuso e alle condotte che danneggiano altri.",
      position: [
        "L'alcol resta legale per gli adulti quando ne è fatto un uso moderato. Restore Europa si oppone all'ubriachezza, all'abuso e alle condotte che danneggiano altri.",
      ],
      policies: [
        "Vendita ai minori vietata.",
        "Guida in stato di ebbrezza e disordini pubblici legati all'alcol puniti.",
        "Pubblicità rivolta ai minori limitata.",
        "Cura dell'alcolismo sostenuta.",
        "Il consumo tradizionale e moderato resta lecito.",
      ],
      keywords: ["alcol", "birra", "vino", "ubriachezza", "temperanza"],
    },

    gambling: {
      title: "Gioco d'azzardo",
      shortAnswer:
        "Il gioco d'azzardo può restare lecito in forme limitate riservate agli adulti, regolate rigorosamente contro la dipendenza, la frode e lo sfruttamento.",
      position: [
        "Il gioco d'azzardo può restare legale in forme limitate riservate agli adulti, ma deve essere regolato rigorosamente contro la dipendenza, la frode e lo sfruttamento.",
      ],
      policies: [
        "Gioco d'azzardo dei minori vietato.",
        "Pubblicità rivolta ai giovani o alle persone vulnerabili limitata.",
        "Meccaniche di gioco predatorie o deliberatamente manipolatorie limitate o vietate.",
        "Gioco d'azzardo online ad alto rischio sottoposto a una disciplina rigorosa.",
        "Sistemi di autoesclusione e di cura della dipendenza obbligatori.",
        "Frodi, raccolta illegale di scommesse e partite truccate punite severamente.",
      ],
      keywords: ["gioco d'azzardo", "scommesse", "casinò", "scommesse sportive", "loot box"],
    },

    "blasphemy-and-sacrilege": {
      title: "Blasfemia e sacrilegio",
      shortAnswer:
        "La miscredenza, la critica e la discussione teologica restano lecite. La profanazione deliberata del sacro può essere vietata.",
      position: [
        "Restore Europa distingue la miscredenza e la critica dalla profanazione pubblica deliberata. L'ateismo e il dissenso teologico non sono di per sé reati, mentre la profanazione deliberata del sacro può essere vietata.",
      ],
      policies: [
        "L'ateismo e la miscredenza privata restano leciti.",
        "La critica ai pastori della Chiesa e il dibattito teologico restano leciti.",
        "La profanazione deliberata di oggetti consacrati, di chiese o di sacri riti cristiani può essere sanzionata penalmente.",
        "Il vandalismo anticristiano resta punibile secondo il diritto penale ordinario, e può portare con sé un'aggravante di sacrilegio.",
      ],
      principle:
        "Proteggere il sacro senza criminalizzare il dubbio, il dissenso o la ricerca intellettuale.",
      keywords: ["blasfemia", "bestemmia", "ateismo", "profanazione", "vandalismo"],
    },

    family: {
      title: "Famiglia",
      shortAnswer:
        "La famiglia formata attorno al matrimonio è l'istituzione sociale fondamentale, e le politiche pubbliche devono rendere materialmente realistici il matrimonio e la crescita dei figli.",
      position: [
        "La famiglia formata attorno al matrimonio fra uomo e donna, alla crescita dei figli, all'obbligo fra le generazioni e alla cura dei piccoli e degli anziani è l'istituzione sociale fondamentale.",
      ],
      policies: [
        "Una fiscalità attenta ai carichi familiari.",
        "Sostegno alla genitorialità.",
        "Case accessibili per le famiglie.",
        "Occupazione stabile, e tempo sufficiente sottratto alla produzione economica.",
        "Le politiche pubbliche devono rendere materialmente realistici il matrimonio e la crescita dei figli.",
      ],
      keywords: ["famiglia", "figli", "matrimonio", "genitori", "nucleo familiare"],
    },

    "demographic-renewal": {
      title: "Rinnovamento demografico",
      shortAnswer:
        "L'Europa deve rispondere al declino demografico rendendo praticabile la formazione di una famiglia per la propria popolazione, anziché con un'immigrazione di massa permanente.",
      position: [
        "L'Europa deve affrontare il declino demografico principalmente rendendo praticabili la formazione di una famiglia e la crescita dei figli per la propria popolazione, anziché usare un'immigrazione di massa permanente come sostituto delle nascite.",
      ],
      keywords: ["demografia", "natalità", "fecondità", "popolazione", "declino"],
    },

    "sunday-rest-and-trading": {
      title: "Riposo domenicale e aperture commerciali",
      shortAnswer:
        "La domenica deve tornare a essere il giorno comune di culto, di famiglia e di riposo, con l'attività commerciale ordinaria fortemente limitata.",
      position: [
        "La domenica deve tornare a essere il normale giorno comune di culto, di famiglia e di riposo. L'attività commerciale ordinaria deve perciò essere fortemente limitata.",
      ],
      policies: [
        "Negozi ordinari di norma chiusi la domenica.",
        "Il titolare di un piccolo esercizio può scegliere personalmente di aprire e di lavorare, ma ai dipendenti ordinari non deve essere richiesto abitualmente di lavorare.",
        "Ospedali, servizi di emergenza, infrastrutture critiche, trasporto pubblico necessario e farmacie possono operare.",
        "La ristorazione e l'ospitalità possono operare secondo regole distinte, perché la domanda domenicale è intrinseca alla loro funzione.",
        "Le eccezioni devono restare abbastanza ristrette perché la domenica non diventi un giorno commerciale ordinario.",
      ],
      principle:
        "Un giorno di riposo condiviso protegge il culto, la vita familiare e la comunità da una colonizzazione economica totale.",
      keywords: [
        "aperture domenicali",
        "negozi",
        "riposo festivo",
        "giorno di riposo",
        "orari di apertura",
      ],
    },

    "welfare-and-social-assistance": {
      title: "Welfare e assistenza sociale",
      shortAnswer:
        "Una rete di protezione rivolta anzitutto ai cittadini, alle famiglie e a chi è realmente incapace di mantenersi, che esprima solidarietà senza diventare una dipendenza permanente ed evitabile.",
      position: [
        "Restore Europa sostiene una rete di protezione sociale rivolta anzitutto ai cittadini, alle famiglie e alle persone realmente incapaci di mantenersi. Il welfare deve esprimere solidarietà senza diventare un sistema permanente di dipendenza evitabile.",
      ],
      policies: [
        "Priorità ai cittadini e alle loro famiglie, ai bambini, a chi presta cura, alle persone con disabilità, agli anziani e ai nuclei in condizioni di reale difficoltà.",
        "Dai beneficiari in età lavorativa e abili al lavoro ci si attende di norma che cerchino un impiego, una formazione o un percorso di reinserimento.",
        "Dai non cittadini ci si attende di norma che lavorino e si mantengano, anziché emigrare per accedere a un'assistenza di lungo periodo.",
        "Le prestazioni di natura contributiva possono restare accessibili ai lavoratori stranieri regolari che abbiano effettivamente versato nel sistema corrispondente.",
        "La frode nelle prestazioni assistenziali comporta la restituzione e sanzioni proporzionate.",
        "Le istituzioni caritative cattoliche, cristiane e storiche possono svolgere un ruolo di primo piano, con una rendicontazione trasparente dei fondi pubblici.",
      ],
      principle:
        "La famiglia, la parrocchia e le istituzioni locali devono intervenire prima della lontana burocrazia centrale, là dove sono in grado di farlo con competenza.",
      keywords: ["welfare", "sussidi", "assistenza sociale", "rete di protezione", "dipendenza"],
    },

    "nation-and-historical-continuity": {
      title: "Nazione e continuità storica",
      shortAnswer:
        "La nazione è una comunità storica fra le generazioni, e i popoli europei hanno un legittimo interesse a mantenere la propria continuità culturale e storica.",
      position: [
        "La nazione è una comunità storica fra le generazioni, plasmata dalla memoria, dalla lingua, dai costumi, dalle istituzioni, dal territorio e dal sentimento di un destino comune. I popoli europei hanno un legittimo interesse a mantenere la propria continuità culturale e storica.",
      ],
      keywords: ["nazione", "popolo", "patria", "continuità", "identità"],
    },

    immigration: {
      title: "Immigrazione",
      shortAnswer:
        "L'immigrazione deve essere contenuta entro livelli compatibili con un'integrazione reale, con la stabilità sociale, con la capacità delle infrastrutture e con la continuità demografica.",
      position: [
        "L'immigrazione deve essere contenuta entro livelli compatibili con un'integrazione reale, con la stabilità sociale, con la capacità delle infrastrutture e con la continuità demografica e culturale della nazione che accoglie.",
      ],
      policies: [
        "I confini restano istituzioni politiche legittime.",
        "La politica migratoria deve servire il bene comune di lungo periodo della nazione che accoglie.",
        "Gli obblighi umanitari non impongono di rinunciare al controllo sulla politica demografica.",
      ],
      keywords: ["immigrazione", "migrazione", "confini", "integrazione", "asilo"],
    },

    "asylum-and-international-protection": {
      title: "Asilo e protezione internazionale",
      shortAnswer:
        "L'asilo è protezione da una persecuzione reale o da un pericolo grave, non un meccanismo generale per scegliere il Paese in cui si preferisce stabilirsi.",
      position: [
        "La protezione deve di norma essere prestata nel primo Paese realmente sicuro disponibile e, dove praticabile, il più vicino possibile alla regione di provenienza della persona costretta a fuggire. Gli Stati europei conservano il diritto di respingere le domande infondate e di allontanare le persone prive di un titolo legittimo a restare.",
      ],
      policies: [
        "Mantenere l'accesso all'asilo per chi alleghi in modo credibile una persecuzione o un danno grave.",
        "Esigere registrazione tempestiva, accertamenti di identità e controlli di sicurezza.",
        "Applicare procedure accelerate ai richiedenti provenienti da Paesi in generale sicuri, conservando però a ciascuno la possibilità di dimostrare che quella presunzione non vale nel suo caso.",
        "Applicare con rigore il principio del primo Paese sicuro o del Paese terzo sicuro là dove una protezione effettiva sia realmente disponibile.",
        "Distinguere i rifugiati dai comuni migranti economici; la sola difficoltà economica non è motivo di asilo.",
        "Dare priorità all'assistenza umanitaria nelle regioni di origine e, dove opportuno, al reinsediamento controllato dei rifugiati particolarmente vulnerabili.",
        "I richiedenti respinti devono essere allontanati prontamente, una volta esauriti i mezzi di impugnazione applicabili.",
        "La protezione temporanea concessa in tempo di guerra deve restare temporanea ed essere riesaminata quando le condizioni mutano in modo sostanziale.",
        "I minori non accompagnati e le persone realmente vulnerabili ricevono tutele distinte.",
      ],
      keywords: [
        "asilo",
        "rifugiati",
        "primo Paese sicuro",
        "Paese terzo sicuro",
        "non respingimento",
        "protezione temporanea",
        "rimpatrio",
      ],
    },

    "asylum-work-and-public-assistance": {
      title: "Asilo, lavoro e assistenza pubblica",
      shortAnswer:
        "La protezione deve favorire l'autosufficienza anziché una dipendenza permanente dall'assistenza.",
      position: [
        "Da chi è ammesso alla protezione ed è in grado di lavorare ci si deve attendere che raggiunga l'autonomia economica con la maggiore rapidità ragionevolmente possibile. Una domanda ancora pendente non deve aprire automaticamente l'accesso all'intero sistema assistenziale ordinario.",
      ],
      policies: [
        "Consentire il lavoro regolare non appena è amministrativamente praticabile.",
        "Attendersi che gli adulti abili al lavoro cerchino un impiego non appena l'occupazione è loro giuridicamente aperta.",
        "Durante l'esame della domanda, concentrare l'assistenza sull'alloggio necessario, sul vitto, sulle cure sanitarie essenziali e sui beni di prima necessità, anziché su un sostegno in denaro senza vincoli.",
        "Ammettere, dove è lecito, obblighi proporzionati di lavoro, di apprendimento della lingua e di cooperazione.",
        "Non creare un accesso preferenziale a prestazioni pubbliche scarse rispetto a cittadini in condizioni di bisogno comparabili.",
        "Far cessare il sostegno all'integrazione dopo il rigetto definitivo e trasferire la persona nel sistema dei rimpatri.",
        "Conservare i mezzi di emergenza indispensabili e un sostegno adeguato per i bambini e per le persone realmente incapaci di mantenersi.",
      ],
      keywords: [
        "asilo",
        "welfare",
        "obbligo di lavoro",
        "autosufficienza",
        "rifugiati",
        "assistenza pubblica",
        "protezione temporanea",
      ],
    },

    "deportation-of-criminal-offenders": {
      title: "Espulsione per reato e divieti di reingresso",
      shortAnswer:
        "Gli stranieri autori di reati gravi sono allontanati al termine del processo penale ed esclusi in via permanente; le violazioni ordinarie della disciplina del soggiorno comportano di norma un divieto di reingresso di dieci anni.",
      position: [
        "La cittadinanza e il soggiorno da straniero sono due status distinti. Un reato doloso grave commesso da uno straniero può giustificare la cessazione del soggiorno dopo una condanna pronunciata in un processo penale equo.",
        "Il soggiorno da straniero non conferisce lo stesso diritto permanente di restare che spetta alla cittadinanza. Lo straniero condannato per un reato grave rientrante nell'elenco deve di regola perdere il soggiorno ed essere allontanato al termine del procedimento penale applicabile.",
      ],
      policies: [
        "Esigere una regolare condanna per il reato invocato prima dell'espulsione per motivi di reato.",
        "I reati violenti gravi, i gravi reati sessuali, la rapina, la criminalità organizzata, il terrorismo, la tratta, lo spaccio di stupefacenti in misura grave, la truffa grave e i reati dolosi comparabili fanno presumere l'allontanamento.",
        "La reiterazione dei reati può giustificare l'allontanamento anche quando i singoli fatti sono meno gravi.",
        "Trattare l'omicidio doloso, la violenza sessuale, gli abusi sessuali gravi su minori, il terrorismo, la tratta grave, la violenza organizzata grave e i reati gravi comparabili come casi che fanno presumere il divieto permanente.",
        "Applicare un divieto permanente di reingresso agli allontanamenti per criminalità grave rientranti nell'elenco e a quelli motivati da gravi ragioni di sicurezza nazionale.",
        "Applicare in via ordinaria un divieto di reingresso di dieci anni alle violazioni gravi della disciplina ordinaria del soggiorno, quali l'ingresso irregolare doloso, il soggiorno irregolare reiterato o l'elusione dolosa di una decisione di rimpatrio, fatte salve le regole di proporzionalità previste dalla legge di attuazione.",
        "Consentire sanzioni più brevi per le violazioni della disciplina del soggiorno realmente minori o puramente tecniche, quando un divieto decennale risulterebbe sproporzionato.",
        "Eseguire l'allontanamento dopo l'espiazione della pena detentiva, salvo che sia possibile un trasferimento conforme alla legge o un allontanamento anticipato.",
        "Le violazioni amministrative minori o i fatti di lieve entità non comportano automaticamente l'espulsione permanente.",
        "Mantenere i cittadini naturalizzati nel distinto quadro della revoca della cittadinanza, salvo che la cittadinanza sia stata prima legittimamente ritirata.",
        "I cittadini non possono essere espulsi dal proprio Paese.",
      ],
      keywords: [
        "espulsione",
        "espulsione per reato",
        "stranieri autori di reato",
        "allontanamento",
        "divieto di reingresso",
        "dieci anni",
        "divieto permanente",
        "omicidio",
        "violenza sessuale",
        "terrorismo",
        "soggiorno irregolare",
        "permesso di soggiorno",
        "ordine pubblico",
        "rimpatrio",
      ],
    },

    "citizenship-general-principle": {
      title: "Cittadinanza: principio generale",
      shortAnswer:
        "La cittadinanza è appartenenza a una comunità politica storica e non una conseguenza della residenza, e Restore Europa respinge come regola generale l'attribuzione automatica della cittadinanza per nascita sul territorio.",
      position: [
        "La cittadinanza è appartenenza a una comunità politica storica, non semplice residenza. Restore Europa respinge come regola generale l'attribuzione automatica della cittadinanza per nascita sul territorio.",
      ],
      policies: [
        "La cittadinanza si trasmette di norma per filiazione da un cittadino.",
        "La nascita sul territorio nazionale da genitori non cittadini non conferisce di per sé la cittadinanza.",
        "La naturalizzazione richiede un'assimilazione linguistica, culturale, civica e patriottica profonda.",
        "La naturalizzazione è un'ammissione nella comunità politica nazionale e non un diritto automatico generato dalla residenza.",
      ],
      keywords: [
        "cittadinanza",
        "cittadinanza per nascita",
        "ius soli",
        "ius sanguinis",
        "nazionalità",
      ],
    },

    naturalization: {
      title: "Assimilazione e naturalizzazione",
      shortAnswer:
        "La cittadinanza esige uno standard sensibilmente più alto della residenza ordinaria o dell'integrazione: un'assimilazione riuscita nella comunità politica nazionale.",
      position: [
        "La via ordinaria di naturalizzazione proposta da Restore Europa richiede all'incirca quindici anni di residenza regolare prima che si possa presentare domanda, insieme a requisiti di assimilazione eccezionalmente esigenti.",
        "La naturalizzazione non è una conseguenza automatica del tempo trascorso nel Paese. I richiedenti devono soddisfare esigenti requisiti di lingua, di conoscenze civiche, di condotta e di legame prima che la cittadinanza sia concessa.",
      ],
      policies: [
        "Mantenere la via ordinaria di residenza di circa quindici anni prevista dal catalogo prima che possa essere chiesta la naturalizzazione ordinaria.",
        "Esigere una padronanza pratica avanzata della lingua nazionale e una conoscenza sostanziale della storia, delle istituzioni e dell'ordine costituzionale.",
        "Rispetto dell'ordine costituzionale e del carattere cristiano e storico del Paese.",
        "Esigere una condotta durevolmente conforme alla legge e dichiarazioni veritiere alle autorità competenti in materia di immigrazione e cittadinanza.",
        "Esigere la prova di un legame duraturo con il Paese e non della sola residenza.",
        "Ammettere esami oggettivi di lingua e di conoscenze civiche.",
        "Negare la naturalizzazione dove permangano ostativi una criminalità grave, il terrorismo, una truffa grave o un inganno doloso sull'identità.",
        "Non fare di una riverifica civica periodica un motivo automatico di espulsione di chi abbia acquisito la cittadinanza in modo regolare e onesto; la revoca successiva alla naturalizzazione è disciplinata da voci distinte.",
      ],
      limits: ["Quindici anni di residenza non garantiscono automaticamente la naturalizzazione."],
      keywords: [
        "naturalizzazione",
        "assimilazione",
        "residenza",
        "lingua",
        "requisito linguistico",
        "conoscenze civiche",
        "test di cittadinanza",
        "legame con il Paese",
      ],
    },

    "citizenship-by-descent": {
      title: "Cittadinanza per discendenza e reintegrazione",
      shortAnswer:
        "Una discendenza nazionale documentata può giustificare una via di reintegrazione nella cittadinanza assai più rapida della naturalizzazione ordinaria.",
      position: [
        "Una discendenza nazionale documentata può giustificare una via di reintegrazione nella cittadinanza assai più rapida della naturalizzazione ordinaria.",
      ],
      policies: [
        "Il figlio di un cittadino eredita di regola la cittadinanza del genitore, indipendentemente dal luogo di nascita.",
        "Chi ha una filiazione nazionale documentata o una discendenza nazionale ravvicinata può accedere a una via agevolata di rientro o di reintegrazione.",
        "La proposta di lavoro per una simile via agevolata è di circa cinque anni, anziché i quindici ordinari.",
      ],
      keywords: ["discendenza", "ascendenza", "reintegrazione", "rimpatrio", "ius sanguinis"],
    },

    "voting-rights-after-naturalization": {
      title: "Diritto di voto dopo la naturalizzazione",
      shortAnswer:
        "I cittadini naturalizzati devono attendere altri quattro anni dopo la naturalizzazione prima di ottenere il pieno diritto di voto.",
      position: [
        "I cittadini naturalizzati non devono ottenere il diritto di voto immediatamente al momento della naturalizzazione. Di norma il pieno diritto di voto deve essere preceduto da un ulteriore periodo di quattro anni di cittadinanza.",
      ],
      policies: [
        "Via ordinaria: quindici anni di residenza regolare prima di poter chiedere la naturalizzazione.",
        "Dopo la naturalizzazione: altri quattro anni prima del pieno diritto di voto.",
      ],
      keywords: ["diritto di voto", "elettorato", "suffragio", "elezioni", "periodo di attesa"],
    },

    "high-public-office": {
      title: "Eleggibilità alle alte cariche pubbliche",
      shortAnswer:
        "Le più alte cariche della nazione sono riservate ai cittadini che hanno con il Paese un legame di nascita, di discendenza e di storia, e non alla sola cittadinanza acquisita.",
      position: [
        "La cittadinanza ordinaria e l'eleggibilità alle supreme cariche costituzionali, di sicurezza e militari sono questioni distinte. La sola naturalizzazione non rende eleggibili alle più alte cariche dello Stato.",
      ],
      policies: [
        "Applicare requisiti di eleggibilità rafforzati al capo dello Stato, al capo del governo, ai vertici della difesa e della sicurezza interna, agli alti comandi delle forze armate, ai vertici dei servizi di informazione e alle altre cariche di eccezionale autorità costituzionale.",
        "Esigere la cittadinanza dalla nascita e un legame nazionale, di ascendenza o di storia, dimostrabile.",
        "Esigere radici nazionali consistenti, la padronanza della lingua nazionale e una comprovata lealtà all'ordine costituzionale e nazionale.",
        "La naturalizzazione ordinaria, quale che ne sia la durata, non conferisce di per sé l'eleggibilità a queste cariche.",
        "Definire con precisione per legge quali cariche rientrano nella categoria riservata.",
      ],
      keywords: [
        "alte cariche pubbliche",
        "presidente",
        "primo ministro",
        "cittadinanza per nascita",
        "discendenza",
        "continuità nazionale",
        "eleggibilità",
        "ministri",
        "fedeltà",
      ],
    },

    "dual-citizenship": {
      title: "Doppia cittadinanza",
      shortAnswer:
        "La doppia cittadinanza fra Paesi europei è in generale accettata; da chi, cittadino extraeuropeo, si naturalizza in una nazione europea ci si attende la rinuncia alla cittadinanza precedente.",
      position: [
        "Restore Europa accetta in generale la doppia cittadinanza fra Paesi europei, ma si attende che i cittadini extraeuropei che si naturalizzano in una nazione europea rinuncino alla loro precedente cittadinanza extraeuropea.",
      ],
      policies: [
        "Doppia cittadinanza fra Paesi europei in generale consentita.",
        "Ai cittadini extraeuropei che si naturalizzano è di norma richiesto di rinunciare alla cittadinanza precedente.",
        "Possono essere previste eccezioni quando la rinuncia è giuridicamente impossibile o comporterebbe un pregiudizio eccezionale.",
      ],
      principle:
        "Le distinte nazioni europee sono comunità politiche all'interno di una più ampia civiltà europea.",
      keywords: ["doppia cittadinanza", "doppia nazionalità", "rinuncia", "secondo passaporto"],
    },

    "revocation-of-naturalized-citizenship": {
      title: "Revoca della cittadinanza acquisita",
      shortAnswer:
        "La cittadinanza acquisita per naturalizzazione può essere revocata per via giudiziaria in casi di eccezionale gravità, quali la naturalizzazione ottenuta con frode, il tradimento o il terrorismo.",
      position: [
        "La cittadinanza acquisita per naturalizzazione può essere revocata in circostanze di eccezionale gravità, quali la naturalizzazione ottenuta con frode, il tradimento, il terrorismo o altre condotte, definite in modo ristretto, gravemente pregiudizievoli per lo Stato.",
      ],
      policies: [
        "La revoca deve seguire un procedimento giudiziario.",
        "I presupposti devono essere definiti dalla legge e non rimessi a una vaga discrezionalità del potere esecutivo.",
        "Sono richiesti un elevato standard probatorio e un diritto di impugnazione.",
        "La frode nel procedimento di naturalizzazione è motivo diretto di revoca.",
        "Il tradimento e il terrorismo possono giustificare la revoca.",
        "Restore Europa è favorevole alla possibilità della revoca nei casi di eccezionale gravità anche quando ne potrebbe derivare l'apolidia.",
      ],
      keywords: ["revoca", "privazione della cittadinanza", "apolidia", "tradimento", "terrorismo"],
    },

    "remigration-general-principle": {
      title: "Remigrazione: principio generale",
      shortAnswer:
        "La remigrazione è il rimpatrio organizzato di chi non ha o perde una base legale per restare, unito a una politica di rimpatrio volontario, alla rigorosa applicazione delle condizioni di soggiorno e al riesame degli status ottenuti con frode o attraverso un'irregolarità qualificata.",
      position: [
        "Restore Europa considera lo status migratorio come condizionato: dipende dall'ingresso regolare, dal rispetto delle condizioni di soggiorno, dall'ordine pubblico e, ove pertinente, da un'integrazione riuscita. La remigrazione non è definita come allontanamento fondato sulla sola razza; opera attraverso lo status giuridico, la storia migratoria, la condotta penale, la frode, i motivi di sicurezza e condizioni di soggiorno chiaramente definite.",
      ],
      policies: [
        "Eseguire le decisioni definitive di rimpatrio nei confronti di chi non ha alcun diritto legale di restare.",
        "Ricorrere al rimpatrio volontario dove sia realistico e al rimpatrio coattivo dove la base legale del soggiorno sia venuta meno.",
        "Riesaminare il soggiorno o la cittadinanza ottenuti mediante frode o inganno rilevanti.",
        "Consentire il ritiro dello status di soggiorno dello straniero per reati gravi, gravi minacce alla sicurezza e altri motivi espressamente definiti dalla legge.",
        "Mantenere cittadinanza, soggiorno permanente, soggiorno temporaneo, status di asilo e presenza irregolare come categorie giuridicamente distinte.",
        "Non considerare il solo lungo decorso del tempo come fonte di un diritto automatico a restare quando lo status sottostante rimane temporaneo o condizionato.",
        "Applicare procedure e requisiti di prova individuali anziché l'espulsione collettiva fondata sulla sola categoria etnica o razziale.",
      ],
      keywords: [
        "remigrazione",
        "rimpatrio",
        "applicazione del diritto dell'immigrazione",
        "soggiorno",
        "espulsione",
        "integrazione",
        "cittadinanza",
      ],
    },

    "integration-general-definition": {
      title: "Integrazione: definizione generale",
      shortAnswer:
        "L'integrazione è l'incorporazione linguistica, civica, economica e sociale dimostrabile nella nazione che accoglie; la sola residenza non basta.",
      position: [
        "L'integrazione si misura sulla condotta, sulla competenza e su una partecipazione duratura. È distinta dalla cittadinanza e dal più alto standard di assimilazione richiesto per la naturalizzazione.",
      ],
      policies: [
        "Esigere una padronanza funzionale della principale lingua nazionale, normalmente intorno a B1–B2 a seconda dello status richiesto.",
        "Esigere una conoscenza di base della storia nazionale, delle istituzioni, del diritto, dei doveri civici e dell'assetto costituzionale.",
        "Considerare una criminalità grave e persistente, la criminalità organizzata, il terrorismo, la truffa grave e la frode migratoria dolosa come forti indizi contrari all'integrazione.",
        "Attendersi che gli stranieri abili al lavoro e in età lavorativa partecipino mediante impiego, lavoro autonomo, istruzione, formazione professionale, assistenza familiare riconosciuta o un altro contributo legittimo.",
        "Considerare la dipendenza prolungata ed evitabile dall'assistenza pubblica come un fattore negativo per l'integrazione, esentando l'incapacità effettiva, la disabilità, la pensione, la disoccupazione temporanea e l'assistenza familiare rilevante.",
        "Ammettere la prova della partecipazione locale attraverso il lavoro, l'istruzione, le parrocchie, le associazioni, i circoli e altre istituzioni della comunità, senza rendere obbligatoria l'appartenenza ad alcuna organizzazione determinata.",
        "Esigere il rispetto dell'ordine costituzionale legittimo senza pretendere una conformità ideologica a ogni politica di governo.",
        "Valutare l'integrazione su elementi individuali documentati anziché sulla sola razza.",
      ],
      keywords: [
        "integrazione",
        "lingua",
        "conoscenze civiche",
        "autosufficienza",
        "soggiorno",
        "ordine pubblico",
        "partecipazione",
      ],
    },

    "regularized-irregular-immigration": {
      title: "Immigrazione irregolare regolarizzata",
      shortAnswer:
        "Una legalizzazione successiva non cancella automaticamente una comprovata storia di ingresso o di soggiorno irregolari; i casi già regolarizzati possono essere riesaminati individualmente alla luce del nuovo quadro giuridico.",
      position: [
        "Restore Europa respinge la tesi secondo cui ogni regolarizzazione o sanatoria del passato debba essere considerata costituzionalmente intangibile. Dove documenti attendibili accertino un precedente ingresso irregolare, un soggiorno irregolare, una falsa identità o un'altra irregolarità rilevante, la storia di soggiorno che ne è derivata può essere riesaminata individualmente.",
      ],
      policies: [
        "Consentire il riesame individuale degli status di soggiorno sorti da precedenti sanatorie, regolarizzazioni di massa o programmi eccezionali comparabili.",
        "Esigere che sia lo Stato a provare la pertinente storia migratoria sulla base di atti e prove; l'irregolarità non può essere semplicemente presunta.",
        "Riesaminare l'intero fascicolo originario, comprensivo di identità, storia dell'ingresso, storia della domanda di asilo, base del soggiorno, titoli successivi ed eventuale procedimento di naturalizzazione.",
        "Distinguere la mera irregolarità pregressa dalla frode rilevante, dalla falsa identità o dall'occultamento, che possono comportare conseguenze più severe.",
        "Se lo status supera il riesame condotto secondo la nuova legge, esso resta valido nel rispetto delle ordinarie condizioni di soggiorno.",
        "Se lo status non sarebbe stato concesso secondo la nuova regola applicabile e la Costituzione permette un riesame retroattivo, possono seguire il ritiro e il rimpatrio, mediante una decisione individuale e un procedimento di impugnazione.",
      ],
      limits: [
        "La presente voce non considera fraudolento ogni cittadino naturalizzato per il solo fatto che un precedente periodo di soggiorno sia stato irregolare; la frode e la regolarizzazione legittima restano concetti distinti.",
      ],
      keywords: [
        "regolarizzazione",
        "sanatoria",
        "ingresso irregolare",
        "soggiorno irregolare",
        "riesame dello status",
        "storia migratoria",
      ],
    },

    "employment-and-self-sufficiency-of-foreign-residents": {
      title: "Lavoro e autosufficienza degli stranieri residenti",
      shortAnswer:
        "Dagli stranieri residenti abili al lavoro ci si attende che restino economicamente autosufficienti e di regola non spetta loro lo stesso diritto assistenziale a tempo indeterminato riconosciuto ai cittadini.",
      position: [
        "Il soggiorno da straniero è concesso per scopi determinati e rimane condizionato. I residenti in grado di lavorare dovrebbero normalmente mantenersi con l'impiego, il lavoro autonomo, lo studio, la formazione o un'attività di cura riconosciuta, anziché con una dipendenza permanente ed evitabile dall'assistenza pubblica.",
      ],
      policies: [
        "Esigere che gli stranieri con soggiorno temporaneo e ordinario mantengano mezzi di sostentamento leciti e sufficienti, fatti salvi ragionevoli periodi di tolleranza dopo una perdita involontaria del lavoro.",
        "Ammettere come partecipazione legittima l'impiego, il lavoro autonomo, l'istruzione a tempo pieno, la formazione professionale e un'attività di cura familiare rilevante.",
        "Prevedere eccezioni per disabilità effettiva, incapacità, pensione, minori e difficoltà temporanee nonostante ragionevoli sforzi di trovare lavoro.",
        "Limitare l'assistenza ordinaria non urgente per gli stranieri dove sia costituzionalmente e legalmente ammesso.",
        "Preservare cibo, alloggio e cure mediche necessarie in caso di emergenza dove il loro diniego violerebbe obblighi giuridici o umanitari elementari.",
        "Trattare la dipendenza reiterata ed evitabile dall'assistenza pubblica come possibile motivo di riesame del soggiorno dove il titolo era espressamente condizionato all'autosufficienza.",
        "Tenere distinta la cittadinanza acquisita: la semplice disoccupazione non trasforma automaticamente un cittadino in un soggiornante irregolare.",
      ],
      limits: [
        "L'esatto periodo di tolleranza dopo la perdita del lavoro dovrebbe essere fissato dalla legge di attuazione anziché irrigidito nel principio costituzionale.",
      ],
      keywords: [
        "autosufficienza",
        "lavoro",
        "assistenza pubblica",
        "stranieri residenti",
        "permesso di soggiorno",
        "partecipazione economica",
      ],
    },

    "probationary-naturalization": {
      title: "Naturalizzazione in prova",
      shortAnswer:
        "La cittadinanza appena acquisita è soggetta a un periodo di prova di dieci anni, con regole di revoca rafforzate per motivi gravi definiti in modo ristretto.",
      position: [
        "La naturalizzazione costituisce la cittadinanza, ma nei primi dieci anni lo Stato conserva un potere rafforzato di riaprire il procedimento e revocare la cittadinanza acquisita per determinati comportamenti gravi o per vizi rilevanti del fondamento della naturalizzazione.",
      ],
      policies: [
        "Fissare il periodo di prova in dieci anni dalla data di acquisto della cittadinanza.",
        "Consentire la revoca per frode rilevante nella naturalizzazione, falsa identità od occultamento doloso di un fatto ostativo.",
        "Consentire la revoca per i reati di eccezionale gravità commessi dopo la naturalizzazione, quali definiti nella distinta voce sulla cittadinanza e sulla criminalità grave.",
        "Consentire la revoca per terrorismo, tradimento o condotta che costituisca una minaccia di eccezionale gravità per la sicurezza nazionale, dove la legge lo preveda espressamente.",
        "Esigere un procedimento individuale giurisdizionale o paragiurisdizionale, la prova del motivo di legge e un effettivo diritto di impugnazione.",
        "Non fare della semplice disoccupazione, di un dissenso politico o di un test civico non superato un motivo automatico di revoca di per sé.",
        "Trascorsi i dieci anni, si applicano le ordinarie tutele della cittadinanza, fatti salvi i motivi permanenti fondati sulla frode e gli altri motivi eccezionali di revoca adottati altrove nel catalogo.",
      ],
      keywords: [
        "cittadinanza in prova",
        "naturalizzazione",
        "revoca",
        "dieci anni",
        "frode",
        "reato grave",
      ],
    },

    "residence-permit-withdrawal": {
      title: "Ritiro del permesso di soggiorno",
      shortAnswer:
        "Lo status di soggiorno dello straniero si perde più facilmente della cittadinanza e può essere ritirato quando condizioni definite di ammissione o di soggiorno continuato siano violate in modo rilevante.",
      position: [
        "Il soggiorno è un'autorizzazione giuridica condizionata. Una criminalità grave, una frode rilevante, gravi minacce alla sicurezza e il persistente inadempimento di condizioni di soggiorno espressamente enunciate possono giustificare il ritiro e il rimpatrio.",
      ],
      policies: [
        "Ritirare il titolo o negarne il rinnovo in caso di frode rilevante sull'identità o sul soggiorno.",
        "Ritirare il soggiorno in caso di reato violento o sessuale grave, terrorismo, criminalità organizzata grave e condotte gravi comparabili, fatto salvo il distinto quadro dell'espulsione per reato.",
        "Ritirare il soggiorno quando la persona costituisca una minaccia grave e comprovata per la sicurezza nazionale.",
        "Consentire il riesame in caso di dipendenza assistenziale reiterata ed evitabile, dove l'autosufficienza fosse condizione espressa del titolo.",
        "Consentire il riesame in caso di inadempimento grave e persistente dei requisiti di integrazione applicabili, dove lo status fosse espressamente condizionato all'integrazione.",
        "Ammettere che un'assenza prolungata faccia cessare lo status di soggiorno; la legge ordinaria di attuazione dovrebbe fissare la soglia per tipo di titolo entro un intervallo di circa due-cinque anni.",
        "Comunicare i motivi e assicurare una possibilità individuale di contestare la decisione.",
      ],
      keywords: [
        "permesso di soggiorno",
        "ritiro",
        "frode",
        "reato grave",
        "integrazione",
        "assenza",
        "sicurezza pubblica",
      ],
    },

    "voluntary-return-and-reintegration": {
      title: "Rimpatrio volontario e reinserimento",
      shortAnswer:
        "Lo Stato può finanziare un contributo modesto e una tantum al rimpatrio quando uno straniero rientri volontariamente e stabilmente nel Paese di cui ha la cittadinanza o in un altro Paese legittimato ad ammetterlo.",
      position: [
        "Il rimpatrio volontario è preferibile a un allontanamento coattivo costoso dove consegua il medesimo fine legittimo in modo rapido e affidabile.",
      ],
      policies: [
        "Sostenere spese di viaggio ragionevoli nell'ambito di un programma approvato di rimpatrio volontario.",
        "Ammettere un contributo limitato e una tantum al trasferimento o al reinserimento dove accresca in misura rilevante la probabilità di un rimpatrio duraturo.",
        "Subordinare il contributo alla partenza effettiva e al rispetto dell'accordo di rimpatrio convenuto.",
        "Non creare un diritto a contributi di rimpatrio ripetuti.",
        "Dove operi un divieto di reingresso, la partenza volontaria non lo cancella automaticamente, salvo che la legge disponga espressamente altrimenti.",
        "Coordinarsi, ove necessario, con le autorità del Paese di destinazione o con organizzazioni riconosciute per ottenere i documenti di viaggio e l'accoglienza.",
        "Preferire la partenza volontaria al trattenimento o all'allontanamento forzato dove non sussistano rischi seri di fuga, di reato o per la sicurezza.",
      ],
      keywords: [
        "rimpatrio volontario",
        "reinserimento",
        "contributo al trasferimento",
        "spese di viaggio",
        "programma di rimpatrio",
      ],
    },

    "naturalized-citizenship-and-exceptionally-serious-crime": {
      title: "Cittadinanza acquisita e reati di eccezionale gravità",
      shortAnswer:
        "La cittadinanza acquisita può essere revocata per una classe ristretta di reati di eccezionale gravità, cui segue l'allontanamento dove i conseguenti requisiti di cittadinanza e di rimpatrio possano essere soddisfatti legittimamente.",
      position: [
        "La naturalizzazione non colloca ogni atto successivo fuori dal diritto della cittadinanza. L'ordine costituzionale proposto permette la revoca della cittadinanza acquisita per determinate condotte di eccezionale gravità successive alla naturalizzazione, lasciando la criminalità ordinaria al sistema della giustizia penale.",
      ],
      policies: [
        "Limitare questo potere a una classe tassativa di reati di eccezionale gravità, quali l'omicidio doloso, la violenza sessuale, gli abusi sessuali aggravati su minori, il terrorismo e i reati gravi comparabili.",
        "Esigere una condanna penale definitiva prima della revoca della cittadinanza fondata su un reato.",
        "Esigere un distinto procedimento in materia di cittadinanza che accerti se ricorrano le condizioni di legge per la revoca.",
        "Assicurare un'impugnazione effettiva prima che l'allontanamento sia eseguito.",
        "Dove la cittadinanza sia revocata e la persona possieda o possa legittimamente riacquistare un'altra cittadinanza, applicare il quadro ordinario del rimpatrio.",
        "Dove la cittadinanza sia controversa, procedere al suo accertamento anziché presumere che il solo luogo di nascita provi l'obbligo di uno Stato di accogliere la persona.",
        "Non usare la sola ascendenza come criterio di attivazione penale; la distinzione che opera è la cittadinanza acquisita unita a una condotta qualificata.",
      ],
      keywords: [
        "cittadinanza acquisita",
        "revoca",
        "reato grave",
        "omicidio",
        "violenza sessuale",
        "terrorismo",
        "cittadinanza",
      ],
    },

    "return-readmission-identity-and-removal-procedure": {
      title: "Rimpatrio, riammissione, identità e procedura di allontanamento",
      shortAnswer:
        "La politica di rimpatrio segue un modello di esecuzione misto: identificazione e trattenimento ai fini dell'allontanamento dove necessario, poi status temporaneo limitato se l'allontanamento resta provvisoriamente impossibile, con il proseguimento degli sforzi per accertare la cittadinanza e ottenere la riammissione.",
      position: [
        "Una decisione definitiva di rimpatrio deve poter essere eseguita in concreto. Lo Stato dovrebbe perciò mantenere meccanismi di verifica dell'identità, di trattenimento, di presentazione periodica e di riammissione, anziché lasciare che la distruzione dei documenti o la mancata cooperazione producano automaticamente un soggiorno permanente.",
      ],
      policies: [
        "Avviare immediatamente la verifica dell'identità e della cittadinanza dove la persona allontanabile sia priva di documenti attendibili.",
        "Utilizzare passaporti, documenti scaduti, registri dello stato civile, impronte digitali o altri dati biometrici dove la legge lo consenta, documenti di famiglia, verifiche consolari, elementi linguistici e biografici e accordi di riammissione per accertare identità e cittadinanza.",
        "Trattare la distruzione o l'occultamento doloso dei documenti come circostanza aggravante in sede esecutiva, riconoscendo al contempo che distruggere un passaporto non fa cessare la cittadinanza.",
        "Ammettere il trattenimento ai fini dell'immigrazione dove sia necessario per l'identificazione, per prevenire la fuga o per un allontanamento imminente, nel rispetto di limiti di legge definiti e di un impegno costante verso l'allontanamento.",
        "Se l'allontanamento non può essere eseguito entro la durata massima legale del trattenimento, far passare la persona a uno status temporaneo limitato anziché al soggiorno permanente ordinario.",
        "Lo status limitato può comprendere obblighi di presentazione, restrizioni di residenza, la cooperazione continuata alle procedure di identificazione e un'assistenza pubblica ridotta.",
        "Non consentire che il solo decorso del tempo trascorso in status limitato maturi automaticamente in cittadinanza o in soggiorno permanente.",
        "Riprendere l'allontanamento non appena cittadinanza, documenti di viaggio e riammissione legittima divengano disponibili.",
        "Ricorrere agli accordi di riammissione e alla pressione diplomatica per esigere che i Paesi accolgano le persone la cui cittadinanza è accertata secondo il loro stesso diritto.",
        "Consentire ai familiari di partire insieme dove i genitori siano allontanati e i figli abbiano il diritto di accompagnarli; le questioni autonome di cittadinanza, affidamento e protezione dell'infanzia richiedono una decisione individuale.",
        "Applicare le nuove regole costituzionali in materia di immigrazione agli status esistenti dove la legge preveda espressamente un riesame retroattivo, nel rispetto delle procedure di riesame enunciate altrove in questo complesso di voci.",
      ],
      keywords: [
        "procedura di rimpatrio",
        "riammissione",
        "trattenimento",
        "identità",
        "cittadinanza",
        "status limitato",
        "apolidia",
        "unità familiare",
        "retroattività",
      ],
    },

    "europe-as-a-civilization-of-nations": {
      title: "L'Europa come civiltà di nazioni",
      shortAnswer:
        "L'Europa deve essere una comunità di civiltà composta di nazioni sovrane, non uno Stato post-nazionale centralizzato.",
      position: [
        "L'Europa deve essere una comunità di civiltà composta di nazioni sovrane, non uno Stato post-nazionale centralizzato.",
      ],
      policies: [
        "Cooperazione europea nella difesa, nei confini, nelle infrastrutture strategiche, nella scienza, nella tutela dell'ambiente e nella conservazione della civiltà.",
        "Autonomia politica nazionale e identità storica conservate.",
        "La sussidiarietà governa la ripartizione delle competenze.",
      ],
      keywords: ["Europa", "sovranità", "confederazione", "sussidiarietà", "post-nazionale"],
    },

    "european-union-institutional-relationship": {
      title: "Unione europea: rapporto istituzionale",
      shortAnswer:
        "Restore Europa sostiene una riforma di fondo dell'Unione europea, che la trasformi in un quadro limitato di cooperazione fra nazioni europee sovrane, restituendo agli Stati membri la maggior parte dei poteri politici.",
      position: [
        "La cooperazione europea deve proseguire, ma le istituzioni continentali devono possedere soltanto le competenze che richiedono davvero un'azione a livello europeo. Restore Europa respinge l'evoluzione verso uno Stato post-nazionale centralizzato e applica la sussidiarietà in modo rigoroso.",
      ],
      policies: [
        "Restituire agli Stati membri competenze legislative e regolamentari consistenti.",
        "Mantenere principalmente nazionali le politiche familiari, l'istruzione, la cultura, la religione, il diritto penale ordinario e la maggior parte delle politiche sociali interne.",
        "Conservare la cooperazione europea dove la scala la rende davvero utile: alcune infrastrutture transfrontaliere, la cooperazione scientifica, il commercio, il coordinamento delle frontiere e la sicurezza strategica.",
        "Impedire che le istituzioni dell'Unione impongano alle nazioni membre un programma morale o culturale uniforme.",
        "Preservare la sovranità nazionale, l'identità costituzionale e la continuità storica.",
        "Perseguire un quadro europeo di civiltà che riconosca l'eredità cristiana dell'Europa preservando al tempo stesso l'autonomia politica nazionale.",
      ],
      keywords: [
        "Unione europea",
        "UE",
        "sovranità",
        "sussidiarietà",
        "Commissione europea",
        "riforma dei trattati",
        "Europa cristiana",
        "Bruxelles",
        "competenze",
      ],
    },

    "economic-order": {
      title: "Ordine economico",
      shortAnswer:
        "Restore Europa respinge tanto il capitalismo senza limiti quanto il socialismo centralizzato. Il suo ideale economico è distributista quanto alla proprietà e fondato sui corpi intermedi quanto all'organizzazione.",
      position: [
        "Restore Europa respinge tanto il capitalismo senza limiti quanto il socialismo centralizzato. Il suo ideale economico è distributista quanto alla proprietà e fondato sui corpi intermedi quanto all'organizzazione.",
      ],
      keywords: ["economia", "distributismo", "corporativismo", "capitalismo", "socialismo"],
    },

    "private-property-and-broad-ownership": {
      title: "Proprietà privata e proprietà diffusa",
      shortAnswer:
        "La proprietà è fonte di indipendenza e di responsabilità. La risposta alla concentrazione è una proprietà più diffusa, non l'abolizione della proprietà.",
      position: [
        "La proprietà privata è fonte di indipendenza e di responsabilità. La risposta a una concentrazione eccessiva è una proprietà più diffusa anziché l'abolizione della proprietà.",
      ],
      policies: [
        "Proprietà della casa largamente diffusa.",
        "Imprese familiari.",
        "Artigiani e mestieri indipendenti.",
        "Piccole e medie imprese.",
        "Cooperative e azionariato dei lavoratori.",
        "Agricoltura familiare.",
        "Banche locali e regionali.",
      ],
      principle: "Molti proprietari, non pochi.",
      keywords: [
        "proprietà",
        "proprietà diffusa",
        "distributismo",
        "cooperative",
        "piccoli proprietari",
      ],
    },

    "corporations-and-monopolies": {
      title: "Società di capitali e monopoli",
      shortAnswer:
        "Le società di capitali sono strumenti legittimi ma restano subordinate al bene comune, e un potere societario concentrato può essere limitato.",
      position: [
        "Le società di capitali sono strumenti legittimi ma devono restare subordinate al bene comune. Un potere societario eccessivamente concentrato può essere limitato.",
      ],
      policies: [
        "Una politica forte di concorrenza e antimonopolio.",
        "Limiti là dove le imprese dominano le istituzioni politiche o i mercati essenziali.",
        "Tutela delle comunità ancora vitali, della vita familiare e dell'indipendenza politica dalla concentrazione distruttiva.",
      ],
      keywords: ["società di capitali", "monopolio", "antitrust", "concorrenza", "concentrazione"],
    },

    "guilds-chambers-and-corporatist-representation": {
      title: "Arti e mestieri, camere e rappresentanza dei corpi intermedi",
      shortAnswer:
        "Lavoratori, datori di lavoro, artigiani, agricoltori e professioni devono prendere parte a istituzioni di settore che fissino le norme della professione, l'apprendistato e le condizioni di lavoro.",
      position: [
        "Lavoratori, datori di lavoro, artigiani, agricoltori e professioni devono prendere parte a istituzioni di settore in grado di fissare le norme della professione, l'apprendistato, le condizioni di lavoro e gli strumenti di mediazione.",
      ],
      policies: [
        "Le camere professionali e le associazioni di categoria devono restare sufficientemente indipendenti dall'amministrazione statale centralizzata.",
        "Le organizzazioni di mestiere possono avere una rappresentanza strutturata nella vita pubblica.",
        "L'ordinamento per corpi intermedi resta subordinato alla sussidiarietà.",
      ],
      keywords: [
        "arti e mestieri",
        "camere professionali",
        "corporativismo",
        "apprendistato",
        "mestieri",
      ],
    },

    "finance-lending-and-usury": {
      title: "Finanza, credito e usura",
      shortAnswer:
        "La finanza deve servire l'attività produttiva. Il credito legittimo e una remunerazione ragionevole sono accettati; gli interessi che sfruttano il debitore e le trappole del debito no.",
      position: [
        "La finanza deve servire l'attività produttiva. Restore Europa accetta il credito legittimo e una ragionevole remunerazione del capitale, opponendosi però agli interessi che sfruttano il debitore, al credito predatorio e alle trappole del debito.",
      ],
      policies: [
        "Restrizioni severe o tetti al credito predatorio del tipo dei prestiti a brevissimo termine.",
        "Indicazione trasparente del costo totale del credito.",
        "Limiti alle penali di mora abusive e alle sanzioni che si capitalizzano.",
        "I giudici possono dichiarare nulle le clausole di prestito manifestamente inique.",
        "Le politiche pubbliche devono favorire il credito produttivo per la casa, per le imprese familiari e per l'investimento di lungo periodo.",
        "Banche locali e regionali incoraggiate.",
      ],
      keywords: ["finanza", "usura", "interessi", "credito", "debito", "banche"],
    },

    "housing-and-financialization": {
      title: "Casa e finanziarizzazione",
      shortAnswer:
        "La casa deve servire anzitutto all'abitare e alla comunità, anziché funzionare come un'attività finanziaria destinata a rivalutarsi senza fine.",
      position: [
        "La casa deve servire anzitutto all'abitare e alla comunità, anziché funzionare in primo luogo come un'attività finanziaria destinata a rivalutarsi senza fine.",
      ],
      policies: [
        "La proprietà della casa largamente diffusa è un obiettivo centrale.",
        "La proprietà speculativa e concentrata può essere limitata là dove impedisce alle famiglie comuni di diventare proprietarie.",
      ],
      keywords: [
        "casa",
        "proprietà della casa",
        "affitto",
        "speculazione",
        "proprietari immobiliari",
      ],
    },

    work: {
      title: "Lavoro",
      shortAnswer:
        "Il lavoro ha una dignità reale ma non è lo scopo dell'esistenza umana. Il progresso economico deve accrescere la sicurezza, il tempo libero e il governo della propria vita.",
      position: [
        "Il lavoro ha una dignità reale ma non è lo scopo dell'esistenza umana. Il progresso economico deve accrescere la sicurezza, il tempo libero, il tempo per la famiglia, un lavoro dotato di senso e il governo della propria vita.",
      ],
      policies: [
        "Un rinnovato riconoscimento sociale per l'artigianato, l'agricoltura, l'ingegneria, il lavoro di cura, l'insegnamento e i mestieri qualificati.",
        "I guadagni di produttività non devono limitarsi ad aumentare l'estrazione di lavoro.",
        "L'automazione non deve eliminare una partecipazione umana dotata di senso solo per ragioni di efficienza numerica.",
      ],
      keywords: ["lavoro", "occupazione", "impiego", "artigianato", "tempo libero"],
    },

    "minimum-wage": {
      title: "Salario minimo e giusta retribuzione",
      shortAnswer:
        "Ogni lavoratore ha diritto a una giusta retribuzione sufficiente a una vita dignitosa e al ragionevole mantenimento di una famiglia.",
      position: [
        "La dottrina sociale della Chiesa fissa un criterio sostanziale di giusta retribuzione anziché un unico meccanismo legale universale. Restore Europa è perciò favorevole a una determinazione salariale settoriale e regionale attraverso istituzioni rappresentative, sostenuta da una tutela di legge dove necessario.",
      ],
      policies: [
        "Stabilire il principio di una giusta retribuzione tutelata dalla legge.",
        "Determinare di norma i minimi salariali al livello settoriale o regionale appropriato, attraverso lavoratori, datori di lavoro e organismi di categoria.",
        "Consentire alle arti e mestieri, alle camere professionali e alle istituzioni collettive di negoziare standard adeguati alla produttività, alle competenze e alle condizioni del settore.",
        "Ammettere una tutela minima di legge dove le istituzioni della contrattazione non riescono ad assicurare una giusta retribuzione.",
        "Tenere conto dei bisogni familiari anziché assumere la sussistenza individuale come unico criterio.",
        "Ricorrere, dove opportuno, agli assegni familiari o alle prestazioni per i figli, perché crescere dei figli non comporti una penalizzazione economica irragionevole.",
        "Tenere conto della sostenibilità dell'impresa, della produttività e delle opportunità di impiego.",
      ],
      keywords: [
        "salario minimo",
        "giusta retribuzione",
        "salario dignitoso",
        "salario familiare",
        "lavoratori",
        "arti e mestieri",
        "contrattazione collettiva",
        "retribuzione",
        "minimo salariale",
      ],
    },

    taxation: {
      title: "Fiscalità",
      shortAnswer:
        "L'imposizione fiscale è legittima in vista del bene comune, ma deve essere equa, attenta alla famiglia, non confiscatoria e compatibile con una proprietà diffusa, con il lavoro produttivo e con la sussidiarietà.",
      position: [
        "Il sistema fiscale deve finanziare le funzioni pubbliche legittime senza diventare uno strumento per eliminare la proprietà privata, per scoraggiare la formazione di una famiglia o per centralizzare senza necessità le responsabilità sociali.",
      ],
      policies: [
        "Applicare i tributi in base a leggi chiare, in modo ragionevole ed equo.",
        "Mantenere il carico complessivo compatibile con l'indipendenza delle famiglie, con il risparmio, con l'impresa produttiva e con una proprietà largamente diffusa.",
        "Riconoscere in misura consistente i figli a carico ed evitare penalizzazioni del matrimonio o della crescita dei figli.",
        "Privilegiare il lavoro produttivo e l'investimento di lungo periodo rispetto all'estrazione speculativa, là dove la struttura del tributo sappia distinguerli in modo coerente.",
        "Evitare oneri di adempimento sproporzionati per le piccole imprese, per le imprese familiari, per le aziende agricole e per gli artigiani.",
        "Riscuotere il gettito al livello competente più basso dove è praticabile.",
        "Adottare una progressività moderata nell'imposta sul reddito, evitando aliquote marginali punitive.",
        "Proteggere le case di abitazione familiare, le aziende agricole e le imprese familiari in attività dalle imposte di successione strutturate in modo da imporre liquidazioni non necessarie.",
        "Mantenere cautela verso le imposte patrimoniali generali ricorrenti, che possono colpire beni illiquidi a prescindere dal reddito.",
        "Applicare, dove praticabile, un'imposizione ridotta sui consumi di prima necessità.",
      ],
      limits: [
        "Le aliquote esatte non sono prescritte e restano una questione di attuazione nazionale.",
      ],
      keywords: [
        "tasse",
        "fiscalità",
        "imposta sul reddito",
        "imposta sulle società",
        "IVA",
        "imposta di successione",
        "imposta patrimoniale",
        "fisco e famiglia",
        "sussidiarietà",
      ],
    },

    pensions: {
      title: "Pensioni",
      shortAnswer:
        "Un sistema pensionistico misto deve combinare una sicurezza di base per la vecchiaia con la previdenza di categoria, il risparmio personale, la proprietà familiare e la responsabilità fra le generazioni.",
      position: [
        "Gli anziani che hanno contribuito alla società non devono trovarsi nell'indigenza, ma la previdenza per la vecchiaia non deve rendere i cittadini interamente dipendenti da un unico sistema statale centralizzato.",
      ],
      policies: [
        "Garantire una pensione di base sufficiente a proteggere i cittadini anziani dalla povertà.",
        "Incoraggiare i fondi pensione aziendali e di settore organizzati attraverso i datori di lavoro, le arti e mestieri, le camere professionali e gli altri corpi intermedi.",
        "Incoraggiare il risparmio previdenziale privato e la proprietà di beni durevoli da parte delle famiglie.",
        "Accreditare, nel calcolo dei diritti pensionistici pubblici, i periodi dedicati alla crescita dei figli o a un'assistenza familiare rilevante.",
        "Evitare regole pensionistiche che penalizzino strutturalmente il matrimonio, la genitorialità o la cura familiare.",
        "Mantenere la sostenibilità finanziaria, perché una generazione non imponga alla successiva obblighi impossibili da onorare.",
        "Consentire variazioni nazionali nell'equilibrio fra previdenza pubblica, di categoria e privata.",
      ],
      keywords: [
        "pensioni",
        "pensionamento",
        "vecchiaia",
        "previdenza sociale",
        "fondi pensione",
        "famiglia",
        "risparmio",
        "proprietà",
      ],
    },

    "housing-restrictions": {
      title: "Limiti dettagliati in materia di casa",
      shortAnswer:
        "La casa deve servire anzitutto all'abitare e alla comunità, e le politiche devono mirare a una proprietà familiare largamente diffusa anziché a un'estrazione finanziaria permanente.",
      position: [
        "La proprietà privata è tutelata, mentre limiti proporzionati possono colpire le pratiche che trasformano un patrimonio abitativo scarso in uno strumento di scarsità artificiale, di monopolio o di accumulazione speculativa.",
      ],
      policies: [
        "Fare della diffusione della casa di proprietà abitata dal titolare un obiettivo centrale delle politiche abitative.",
        "Ampliare l'offerta dove è compatibile con le infrastrutture, con il carattere dei luoghi e con la custodia dell'ambiente.",
        "Ridurre gli ostacoli urbanistici non necessari alla realizzazione di alloggi adatti alle famiglie, preservando gli insediamenti storici e i paesaggi.",
        "Dare un sostegno ragionevole a chi acquista la prima casa e alle famiglie.",
        "Scoraggiare le strutture ipotecarie predatorie e incoraggiare un credito di lungo periodo prevedibile.",
        "Consentire una regolazione più stringente dell'acquisto in blocco di immobili residenziali da parte di investitori istituzionali dominanti, dove esso estromette in misura rilevante gli acquirenti comuni.",
        "Consentire un'imposizione o una regolazione aggiuntive sugli immobili di investimento sfitti da lungo tempo dove la scarsità è grave.",
        "Proteggere le case di famiglia, le aziende agricole familiari e i beni ereditati ordinari dalla liquidazione forzata.",
        "Sostenere le cooperative e i modelli di proprietà radicati sul territorio dove ampliano una proprietà effettiva.",
        "Preferire tutele proporzionate degli inquilini ai sistemi di calmiere degli affitti che rendono economicamente impossibile costruire nuove abitazioni.",
      ],
      keywords: [
        "casa",
        "proprietà della casa",
        "affitto",
        "suolo",
        "proprietà",
        "finanziarizzazione",
        "mutui",
        "investitori istituzionali",
      ],
    },

    "trade-unions-and-vocational-representation": {
      title: "Sindacati, arti e mestieri e rappresentanza di categoria",
      shortAnswer:
        "I lavoratori possono organizzarsi in modo indipendente, mentre le relazioni di lavoro devono muovere verso un ordinamento per corpi intermedi, fatto di istituzioni di settore permanenti che rappresentino lavoratori, datori di lavoro e professioni.",
      position: [
        "Restore Europa respinge tanto l'impotenza dei lavoratori di fronte al capitale concentrato quanto il conflitto di classe permanente come principio ordinatore della vita economica.",
      ],
      policies: [
        "Tutelare il diritto di costituire sindacati indipendenti e di aderirvi.",
        "Tutelare la contrattazione collettiva lecita su salari e condizioni di lavoro.",
        "Istituire camere di settore o associazioni di categoria che rappresentino lavoratori, datori di lavoro, artigiani e professioni.",
        "Consentire a tali organismi di negoziare i minimi salariali, l'apprendistato, le norme della professione e gli strumenti di composizione delle controversie.",
        "Incoraggiare la mediazione e la composizione negoziata prima di un conflitto sindacale prolungato.",
        "Conservare un diritto di sciopero proporzionato, tutelando al tempo stesso i servizi realmente essenziali con obblighi di continuità.",
        "Impedire che i sindacati diventino organi obbligatori dello Stato.",
        "Impedire che i datori di lavoro controllino organizzazioni di lavoratori solo apparentemente indipendenti.",
        "Ammettere una rappresentanza realmente plurale anziché un unico sindacato controllato dallo Stato.",
      ],
      keywords: [
        "sindacati",
        "arti e mestieri",
        "corporativismo",
        "contrattazione collettiva",
        "scioperi",
        "camere di categoria",
        "condizioni di lavoro",
      ],
    },

    "technology-general-doctrine": {
      title: "Tecnologia: dottrina generale",
      shortAnswer:
        "Lo sviluppo tecnologico non coincide con il progresso umano, e va giudicato dai suoi effetti sull'autonomia, sulla famiglia, sulla comunità e sul lavoro.",
      position: [
        "Lo sviluppo tecnologico non coincide con il progresso umano. La tecnologia va giudicata dal fatto che rafforzi o indebolisca l'autonomia, la vita familiare, la comunità, un lavoro dotato di senso, la sfera privata, il decentramento e l'ambiente naturale.",
      ],
      principle: "La macchina deve adattarsi all'uomo.",
      keywords: ["tecnologia", "progresso", "misura d'uomo", "innovazione"],
    },

    "artificial-intelligence": {
      title: "Intelligenza artificiale",
      shortAnswer:
        "L'intelligenza artificiale può essere usata come strumento, ma non deve sostituire il giudizio umano solo perché l'automazione è tecnicamente possibile o economicamente efficiente.",
      position: [
        "L'intelligenza artificiale può essere usata come strumento, ma non deve sostituire il giudizio umano semplicemente perché l'automazione è tecnicamente possibile o economicamente efficiente.",
      ],
      policies: [
        "L'intelligenza artificiale va valutata per i suoi effetti sulla competenza umana, sull'occupazione, sull'autonomia e sul potere delle istituzioni.",
        "Nelle materie dalle gravi conseguenze giuridiche o morali devono restare disponibili decisori umani.",
        "L'esistenza di una capacità non crea l'obbligo di impiegarla.",
      ],
      keywords: [
        "intelligenza artificiale",
        "IA",
        "apprendimento automatico",
        "automazione",
        "algoritmi",
      ],
    },

    automation: {
      title: "Automazione",
      shortAnswer:
        "L'automazione può eliminare le fatiche realmente degradanti, ma togliere la partecipazione umana dall'attività produttiva non è un bene indiscusso.",
      position: [
        "L'automazione può eliminare le fatiche realmente degradanti, ma eliminare la partecipazione umana dall'attività produttiva non deve essere un obiettivo indiscusso.",
      ],
      principle: "La competenza umana è essa stessa un bene sociale.",
      keywords: ["automazione", "robot", "posti di lavoro", "perdita di competenze", "efficienza"],
    },

    "cash-and-non-digital-access": {
      title: "Contante e accesso non digitale",
      shortAnswer:
        "I cittadini devono conservare un accesso reale al denaro contante e ai servizi pubblici erogati di persona.",
      position: [
        "I cittadini devono conservare un accesso reale al denaro contante e ai servizi pubblici erogati di persona.",
      ],
      policies: [
        "Il denaro contante deve restare disponibile.",
        "La partecipazione civica essenziale non deve richiedere uno smartphone.",
        "Un'identificazione non digitale deve restare disponibile dove praticabile.",
        "I servizi pubblici devono conservare alternative accessibili attraverso persone.",
      ],
      keywords: ["contante", "denaro", "esclusione digitale", "servizi bancari", "di persona"],
    },

    "right-to-repair": {
      title: "Diritto alla riparazione",
      shortAnswer:
        "I cittadini devono conservare un accesso reale a prodotti riparabili, contro l'usa e getta non necessario e il vincolo tecnologico.",
      position: [
        "I cittadini devono conservare un accesso reale a prodotti riparabili. Restore Europa è favorevole a politiche che resistano all'usa e getta non necessario e al vincolo tecnologico.",
      ],
      keywords: [
        "diritto alla riparazione",
        "riparabilità",
        "usa e getta",
        "vincolo tecnologico",
        "pezzi di ricambio",
      ],
    },

    surveillance: {
      title: "Sorveglianza",
      shortAnswer:
        "I cittadini devono conservare spazi privati reali, liberi da una sorveglianza permanente; le regole di dettaglio non sono ancora definite.",
      position: [
        "I cittadini devono conservare spazi privati reali, liberi da una sorveglianza permanente.",
      ],
      limits: [
        "Le regole precise sul riconoscimento facciale, sulla conservazione dei metadati, sulla videosorveglianza e sui poteri dei servizi di informazione restano aperte.",
      ],
      keywords: [
        "sorveglianza",
        "riservatezza",
        "riconoscimento facciale",
        "videosorveglianza",
        "conservazione dei dati",
      ],
    },

    "children-social-media-and-attention-capture": {
      title: "Minori e social media",
      shortAnswer:
        "I bambini devono ricevere una forte tutela giuridica dai sistemi dei social media progettati per massimizzare l'attenzione compulsiva e la dipendenza psicologica.",
      position: [
        "I genitori restano i primi custodi dei figli, mentre lo Stato può regolare i sistemi commerciali che sfruttano deliberatamente la vulnerabilità evolutiva dei bambini.",
      ],
      policies: [
        "Prevedere per i minori impostazioni predefinite assai più protettive quanto alla riservatezza e alla reperibilità.",
        "Limitare i sistemi manipolatori di coinvolgimento volti a massimizzare l'uso compulsivo da parte dei bambini.",
        "Limitare severamente la pubblicità comportamentale mirata ai bambini.",
        "Esigere controlli parentali efficaci.",
        "Non richiedere agli alunni di mantenere profili su social media commerciali per la normale attività scolastica.",
        "Consentire limiti alle notifiche notturne e ai meccanismi di coinvolgimento rivolti ai minori.",
        "Progettare la verifica dell'età in modo da ridurre al minimo la raccolta di dati identificativi.",
        "Adottare un quadro generale di accesso fortemente limitato sotto i 13 anni, forti tutele parentali e dei minori fra i 13 e i 15, un accesso più ampio ma ancora protetto fra i 16 e i 17, e le regole ordinarie degli adulti a 18.",
      ],
      keywords: [
        "social media",
        "bambini",
        "minori",
        "cattura dell'attenzione",
        "dipendenza",
        "controlli parentali",
        "verifica dell'età",
        "smartphone",
      ],
    },

    "digital-identification": {
      title: "Identificazione digitale",
      shortAnswer:
        "L'identificazione digitale può esistere come comodità facoltativa, ma la normale partecipazione civica non deve richiedere un'identità obbligatoriamente e unicamente digitale.",
      position: [
        "I cittadini devono conservare un accesso non digitale reale e non devono essere costretti dentro un'architettura universale dell'identità capace di una sorveglianza comportamentale abituale.",
      ],
      policies: [
        "Mantenere disponibile un documento di identità fisico ovunque sia ragionevolmente praticabile.",
        "Non negare i servizi pubblici essenziali per il solo fatto che una persona rifiuti uno smartphone o un'applicazione di identità digitale.",
        "Raccogliere soltanto i dati necessari alla finalità amministrativa dichiarata.",
        "Tenere separati i sistemi di identità dai sistemi generali di sorveglianza comportamentale.",
        "Esigere una chiara base legale e la tracciabilità dei controlli per l'accesso ai dati identificativi.",
        "Vietare i sistemi di credito sociale e i punteggi comportamentali di natura politica o religiosa.",
        "Evitare di collegare automaticamente i dati sanitari, finanziari, scolastici, di viaggio e di comunicazione in un unico profilo statale universale.",
      ],
      keywords: [
        "identità digitale",
        "identità elettronica",
        "riservatezza",
        "sorveglianza",
        "credito sociale",
        "accesso non digitale",
        "identità",
      ],
    },

    "central-bank-digital-currencies": {
      title: "Valute digitali delle banche centrali",
      shortAnswer:
        "Una valuta digitale di banca centrale non deve sostituire il denaro contante né diventare un sistema obbligatorio e programmabile di sorveglianza delle transazioni.",
      position: [
        "Una valuta digitale di banca centrale può essere tollerata come strumento di pagamento facoltativo soltanto a condizione di rigorose garanzie di riservatezza e di decentramento.",
      ],
      policies: [
        "Non abolire il contante a favore di una valuta digitale di banca centrale obbligatoria.",
        "Non imporre che salari, prestazioni sociali o transazioni ordinarie passino esclusivamente per l'infrastruttura di una valuta digitale di banca centrale.",
        "Non consentire un monitoraggio abituale, da parte dello Stato, di ogni transazione lecita.",
        "Vietare restrizioni politiche programmabili su acquisti per il resto leciti.",
        "Vietare la scadenza artificiale del denaro dei cittadini.",
        "Vietare l'uso delle valute digitali di banca centrale per sistemi di credito sociale.",
        "Preservare transazioni realmente private, entro regole proporzionate di contrasto alla criminalità.",
      ],
      keywords: [
        "CBDC",
        "euro digitale",
        "contante",
        "moneta programmabile",
        "riservatezza finanziaria",
        "moneta digitale",
      ],
    },

    cryptocurrency: {
      title: "Criptovalute",
      shortAnswer:
        "Il possesso e il trasferimento leciti di criptovalute devono restare consentiti, mentre la frode, il furto e la custodia centralizzata abusiva restano soggetti a regolazione.",
      position: [
        "Le criptovalute non sono di per sé liberatorie né di per sé illegittime. Vanno giudicate a seconda che servano scopi economici legittimi senza produrre frode, speculazione predatoria o dipendenza non necessaria.",
      ],
      policies: [
        "Consentire il possesso e il trasferimento leciti di criptovalute.",
        "Applicare il diritto penale ordinario alla frode, al furto, alla manipolazione del mercato e alla promozione ingannevole.",
        "Regolare in modo proporzionato le piattaforme di scambio che detengono beni della clientela, ai fini della solvibilità, della custodia e del contrasto alle frodi.",
        "Distinguere i protocolli decentrati dalle imprese centralizzate di custodia.",
        "Non vietare le criptovalute private al solo scopo di proteggere il monopolio di una futura valuta digitale di banca centrale.",
        "Adottare un trattamento fiscale chiaro e amministrativamente ragionevole.",
        "Non vietare le tecnologie che preservano la riservatezza per il solo fatto che la riservatezza sia tecnicamente possibile.",
      ],
      keywords: [
        "criptovalute",
        "Bitcoin",
        "cripto-attività",
        "blockchain",
        "decentramento",
        "riservatezza finanziaria",
      ],
    },

    "facial-recognition": {
      title: "Riconoscimento facciale",
      shortAnswer:
        "La sorveglianza permanente o indiscriminata della popolazione mediante riconoscimento facciale deve essere vietata.",
      position: [
        "Il riconoscimento facciale può avere usi legittimi circoscritti nelle indagini su reati gravi, ma lo spazio pubblico non deve diventare un ambiente biometrico sotto monitoraggio permanente.",
      ],
      policies: [
        "Vietare il tracciamento facciale universale in tempo reale dei cittadini nella normale vita pubblica.",
        "Vietare la catalogazione biometrica permanente di chiunque percorra le strade, entri nei negozi o nelle chiese, partecipi a manifestazioni o usi i trasporti pubblici.",
        "Consentire un impiego mirato nelle indagini su reati gravi, subordinato ad autorizzazione giudiziaria, necessità, proporzionalità e limiti temporali.",
        "Esigere standard di legge per le liste biometriche di sorveglianza e per la correzione delle identificazioni errate.",
        "Non catalogare abitualmente per via biometrica le riunioni politiche o religiose.",
        "Impedire alle imprese private di costruire profili biometrici permanenti senza una solida base legale.",
      ],
      keywords: [
        "riconoscimento facciale",
        "biometria",
        "videosorveglianza",
        "sorveglianza",
        "riservatezza",
        "spazio pubblico",
      ],
    },

    "communications-metadata-retention": {
      title: "Conservazione dei metadati delle comunicazioni",
      shortAnswer:
        "La conservazione permanente e indiscriminata dei metadati delle comunicazioni dell'intera popolazione deve essere respinta.",
      position: [
        "Lo Stato può ottenere i dati delle comunicazioni per indagini legittime, ma i cittadini comuni non devono essere trattati come sospetti permanenti.",
      ],
      policies: [
        "Respingere la conservazione di massa a tempo indeterminato dei metadati delle comunicazioni di tutti.",
        "Consentire la conservazione e l'accesso mirati per indagare reati gravi e minacce alla sicurezza nazionale.",
        "Esigere di norma, per l'accesso, un'autorizzazione giudiziaria o di un'autorità di pari indipendenza.",
        "Adottare periodi di conservazione limitati e cancellare i dati estranei alla scadenza del termine legale.",
        "Non fare della sorveglianza di massa l'architettura predefinita delle infrastrutture di comunicazione.",
        "Mantenere un controllo rigoroso sugli accessi delle forze dell'ordine e dei servizi di informazione.",
      ],
      keywords: [
        "metadati",
        "conservazione dei dati",
        "sorveglianza delle comunicazioni",
        "riservatezza",
        "telecomunicazioni",
        "servizi di informazione",
      ],
    },

    "genetic-engineering": {
      title: "Ingegneria genetica",
      shortAnswer:
        "La medicina genetica a fini terapeutici può essere legittima, mentre il potenziamento ereditabile e la strumentalizzazione della vita umana embrionale incontrano un divieto forte.",
      position: [
        "Restore Europa distingue la cura delle malattie dai progetti volti a riprogettare la natura umana o a selezionare tratti umani preferiti.",
      ],
      policies: [
        "Consentire la terapia genica somatica legittima diretta alla cura delle malattie, nel rispetto degli standard di sicurezza medica.",
        "Vietare la sperimentazione genetica che tratta gli embrioni umani come semplice materiale di ricerca da scartare, là dove ciò contrasta con la protezione della vita umana fin dal concepimento.",
        "Mantenere una forte presunzione contraria al potenziamento ereditabile della linea germinale.",
        "Vietare la creazione commerciale di bambini su misura, selezionati o modificati geneticamente.",
        "Distinguere la terapia dal potenziamento dell'intelligenza, dell'aspetto, della forza o di altri tratti preferiti.",
        "Respingere i programmi eugenetici di Stato.",
        "Proteggere l'informazione genetica come dato personale altamente sensibile.",
      ],
      keywords: [
        "ingegneria genetica",
        "editing genetico",
        "CRISPR",
        "linea germinale",
        "embrioni",
        "terapia genica",
        "bambini su misura",
        "eugenetica",
      ],
    },

    "transhumanism-and-human-enhancement": {
      title: "Transumanesimo e potenziamento umano",
      shortAnswer:
        "La medicina può guarire e restituire funzioni, ma gli esseri umani non devono essere trattati come materia prima per un'ottimizzazione o una sostituzione tecnologica.",
      position: [
        "La dignità umana non dipende dall'intelligenza, dalla forza, dalla longevità, dalla produttività o dal potenziamento tecnologico.",
      ],
      policies: [
        "Consentire protesi, impianti e tecnologie assistive a fini terapeutici.",
        "Distinguere il ripristino delle normali funzioni umane dai progetti ideologici di sostituire l'umanità comune con successori progettati.",
        "Vietare il potenziamento neurologico, cibernetico o genetico imposto come condizione per lavorare o per partecipare alla vita civica.",
        "Non creare classi giuridicamente privilegiate di persone tecnologicamente modificate.",
        "Sottoporre i programmi militari di potenziamento a un rigoroso vaglio etico.",
        "Imporre restrizioni stringenti alle interfacce cervello-computer che compromettono la riservatezza mentale o l'autonomia.",
        "Vietare in linea generale il potenziamento ereditabile delle generazioni future.",
      ],
      keywords: [
        "transumanesimo",
        "potenziamento umano",
        "cibernetica",
        "interfaccia cervello-computer",
        "aumento",
        "dignità umana",
        "bioetica",
      ],
    },

    "purpose-of-education": {
      title: "Fine dell'educazione",
      shortAnswer:
        "L'educazione deve trasmettere la civiltà prima di pretendere di trasformarla, con lo studio serio del cristianesimo, della storia, della civiltà classica, delle scienze e delle arti.",
      position: [
        "L'educazione deve trasmettere la civiltà prima di pretendere di trasformarla. Il cristianesimo, la storia nazionale ed europea, la civiltà classica, la filosofia, la letteratura, le scienze, la matematica, la musica, l'arte, l'artigianato e la responsabilità civile devono essere tutti oggetto di studio serio.",
      ],
      keywords: ["educazione", "programmi scolastici", "scuole", "trasmissione", "studi classici"],
    },

    homeschooling: {
      title: "Istruzione parentale",
      shortAnswer:
        "L'istruzione parentale deve essere legale e tutelata, perché i genitori sono i primi educatori dei propri figli.",
      position: [
        "L'istruzione parentale deve essere legale e tutelata, perché i genitori sono i primi educatori dei propri figli.",
      ],
      policies: [
        "I genitori possono istruire i figli a casa.",
        "L'istruzione parentale dichiaratamente cattolica è consentita.",
        "Lo Stato può esigere competenze di base nella lettura e nella scrittura, nella matematica e nelle conoscenze civiche.",
        "Verifiche periodiche possono accertare che i bambini ricevano effettivamente un'istruzione.",
        "Lo Stato non deve usare la vigilanza per imporre una conformità ideologica.",
      ],
      keywords: ["istruzione parentale", "scuola a casa", "genitori", "programmi scolastici"],
    },

    "private-catholic-and-independent-schools": {
      title: "Scuole private, cattoliche e indipendenti",
      shortAnswer:
        "Un sistema educativo plurale che comprenda scuole cattoliche, private, classiche, professionali e monastiche, con un finanziamento pubblico che possa seguire le famiglie.",
      position: [
        "Restore Europa sostiene un sistema educativo plurale che comprenda scuole cattoliche, scuole private, scuole classiche, istituti professionali, scuole monastiche e istruzione parentale.",
      ],
      policies: [
        "Scuole cattoliche tutelate dalla legge.",
        "Le scuole indipendenti possono mantenere programmi propri e un proprio carattere morale.",
        "Il finanziamento pubblico può seguire le famiglie attraverso buoni scuola, crediti d'imposta o sistemi equivalenti.",
        "Le scuole cattoliche possono insegnare la dottrina cattolica e organizzare la vita scolastica secondo la dottrina morale cattolica.",
        "Si possono esigere standard didattici di base senza imporre una conformità ideologica.",
      ],
      keywords: [
        "scuole private",
        "scuole cattoliche",
        "buoni scuola",
        "libertà di scelta educativa",
        "scuole indipendenti",
      ],
    },

    "universities-and-academic-freedom": {
      title: "Università e libertà accademica",
      shortAnswer:
        "Le università devono conservare una libertà accademica reale e cessare al tempo stesso di operare come istituzioni di propagazione ideologica obbligatoria.",
      position: [
        "Le università devono conservare una libertà accademica reale e cessare al tempo stesso di operare come istituzioni di propagazione ideologica obbligatoria.",
      ],
      policies: [
        "Le teorie liberali, marxiste, laiche, cattoliche, nazionaliste e altre possono essere studiate e discusse in sede accademica.",
        "Le università pubbliche non devono imporre istituzionalmente l'ideologia liberale o progressista come dottrina indiscutibile.",
        "Agli studenti non deve essere richiesto di professare posizioni ideologiche estranee alla competenza accademica.",
        "Le assunzioni e le promozioni non devono discriminare la ricerca cattolica, conservatrice o tradizionalista condotta nel rispetto della legge.",
        "Il cristianesimo, la civiltà classica, la storia europea, la filosofia e la tradizione intellettuale occidentale devono ricevere uno spazio istituzionale serio.",
      ],
      principle: "L'educazione deve cercare la verità anziché fabbricare conformità ideologica.",
      keywords: [
        "università",
        "libertà accademica",
        "istruzione superiore",
        "ricerca",
        "ideologia",
      ],
    },

    "state-schools-and-christianity": {
      title: "Scuola pubblica e cristianesimo",
      shortAnswer:
        "La scuola pubblica deve avere un orientamento di civiltà cristiana anziché laicista.",
      position: [
        "La scuola pubblica deve avere un orientamento di civiltà cristiana anziché laicista.",
      ],
      policies: [
        "Il cristianesimo deve essere insegnato come elemento fondativo della civiltà, della storia, della filosofia, della morale, dell'arte e della cultura europee.",
        "La dottrina cattolica deve avere un posto riconosciuto nell'istruzione pubblica nelle società a maggioranza cattolica.",
        "Il laicismo non deve essere presentato come l'unica visione del mondo intellettualmente legittima.",
        "La storia nazionale ed europea deve essere insegnata come un'eredità e non come una semplice somma di colpe.",
      ],
      keywords: [
        "scuola pubblica",
        "insegnamento della religione",
        "laicismo",
        "cristianesimo",
        "istruzione pubblica",
      ],
    },

    "sex-education-in-schools": {
      title: "Educazione sessuale a scuola",
      shortAnswer:
        "Le scuole possono insegnare la biologia della riproduzione nei suoi dati di fatto, ma la formazione morale in materia di sessualità spetta anzitutto ai genitori e alle istituzioni religiose che essi scelgono.",
      position: [
        "I genitori e la Chiesa devono essere le prime autorità nella formazione sessuale e morale. Le scuole possono insegnare la biologia della riproduzione nei suoi dati di fatto, ma non devono aggirare l'autorità dei genitori con un insegnamento ideologico o sessualmente esplicito.",
      ],
      policies: [
        "La biologia può trattare l'anatomia, la riproduzione umana, la gravidanza e la salute.",
        "L'insegnamento morale sulla sessualità, sulla contraccezione e sulle relazioni spetta anzitutto ai genitori e alle istituzioni religiose che essi scelgono.",
        "I genitori devono essere informati dei programmi in materia e possono sottrarre i figli ai contenuti che vanno oltre l'istruzione biologica di base.",
        "Le scuole non devono esporre i minori a materiale didattico pornografico o sessualmente esplicito.",
      ],
      keywords: [
        "educazione sessuale",
        "educazione affettiva",
        "programmi scolastici",
        "diritti dei genitori",
        "consenso",
      ],
    },

    "culture-and-homogenization": {
      title: "La cultura contro l'omologazione",
      shortAnswer:
        "Le lingue, i dialetti, le feste, la musica, la cucina e l'artigianato devono restare parti vive della vita ordinaria e non pezzi da museo.",
      position: [
        "Le lingue, i dialetti, le feste, la musica, la cucina, l'artigianato e la memoria storica devono restare parti vive della vita ordinaria europea, e non pezzi da museo o prodotti per turisti.",
      ],
      keywords: ["cultura", "dialetti", "feste", "tradizione", "omologazione"],
    },

    "architecture-and-historic-preservation": {
      title: "Architettura e tutela del patrimonio storico",
      shortAnswer:
        "L'architettura pubblica deve rispettare la misura d'uomo, i materiali locali e la tradizione regionale, e il tessuto storico va conservato ovunque sia ragionevolmente possibile.",
      position: [
        "L'architettura pubblica deve rispettare la misura d'uomo, i materiali locali, le tradizioni regionali e il carattere storico dei luoghi. Le chiese, i fronti stradali, i monumenti e gli edifici storici di rilievo vanno conservati ovunque sia ragionevolmente possibile.",
      ],
      keywords: ["architettura", "conservazione", "patrimonio", "centri storici", "misura d'uomo"],
    },

    "authority-democracy-and-subsidiarity": {
      title: "Autorità, democrazia e sussidiarietà",
      shortAnswer:
        "Il potere deve essere esercitato al livello competente più basso. Le elezioni, la rappresentanza e i limiti costituzionali coesistono con il rifiuto del liberalismo filosofico.",
      position: [
        "Restore Europa rifiuta tanto l'individualismo anarchico quanto il potere totalizzante dello Stato. Le elezioni, la rappresentanza, i limiti costituzionali e la partecipazione dei cittadini possono coesistere con il rifiuto del liberalismo filosofico.",
      ],
      policies: [
        "Il potere deve essere esercitato al livello competente più basso.",
        "Alle famiglie spettano le questioni familiari, ai comuni quelle locali; le regioni conservano un'autonomia reale; alle nazioni spettano le questioni nazionali.",
        "Il governo resta limitato dalla legge, dalla sussidiarietà e dai contrappesi istituzionali.",
        "Il disaccordo politico e l'opposizione restano legittimi.",
      ],
      keywords: ["sussidiarietà", "democrazia", "autorità", "federalismo", "liberalismo"],
    },

    "free-speech-and-public-doctrine": {
      title: "Libertà di parola e dottrina pubblica",
      shortAnswer:
        "Una discussione politica e accademica ampia è tutelata; non lo è l'espressione che istiga direttamente alla violenza, al terrorismo o a condotte criminali.",
      position: [
        "Restore Europa sostiene un'ampia discussione politica e accademica, ma non considera illimitata l'espressione che istiga direttamente alla violenza, al terrorismo o a condotte criminali, o che equivale a una profanazione deliberata del sacro.",
      ],
      policies: [
        "La critica al governo resta lecita.",
        "Il dissenso politico e teologico resta lecito.",
        "Il comunismo, il laicismo e il liberalismo possono essere discussi e sostenuti dai singoli, pur non definendo l'ordine costituzionale.",
        "L'istigazione diretta alla violenza o al terrorismo può essere vietata.",
        "La pornografia resta vietata in forza di una posizione distinta.",
        "Il sacrilegio deliberato può essere limitato in forza della posizione sulla blasfemia.",
      ],
      principle:
        "Un ordine costituzionale confessionale non deve per questo diventare un sistema di polizia del pensiero.",
      keywords: ["libertà di parola", "espressione", "censura", "istigazione", "stampa"],
    },

    "prisons-punishment-and-rehabilitation": {
      title: "Carceri, pena e riabilitazione",
      shortAnswer:
        "Una pena proporzionata, la protezione della società, la riparazione dove possibile e una riabilitazione seria, ordinata al pentimento e al reinserimento.",
      position: [
        "La giustizia penale deve combinare una pena proporzionata, la protezione della società, la riparazione dove possibile e una riabilitazione seria, ordinata al pentimento e al reinserimento.",
      ],
      policies: [
        "Pene proporzionate alla gravità del reato.",
        "Neutralizzazione di lungo periodo, dove necessario, per gli autori di reati violenti pericolosi e per i recidivi.",
        "Le carceri devono mantenere la disciplina e l'ordine.",
        "I detenuti devono avere accesso al lavoro, all'istruzione, alla formazione professionale, all'assistenza spirituale e alla cura delle dipendenze.",
        "La pena non deve essere deliberatamente degradante o crudele.",
      ],
      principle: "La giustizia non è né vendetta né permissivismo.",
      keywords: [
        "carceri",
        "commisurazione della pena",
        "pena",
        "riabilitazione",
        "giustizia penale",
      ],
    },

    "criminal-sentencing": {
      title: "Commisurazione della pena",
      shortAnswer:
        "La pena deve essere proporzionata alla gravità del fatto e alla colpevolezza, proteggere la società, assicurare la riparazione dove possibile e perseguire la riabilitazione dove è realistico.",
      position: [
        "La commisurazione della pena deve distinguere nettamente il fatto di lieve entità dalla violenza grave e deliberata. La pena può legittimamente servire alla protezione, a una retribuzione proporzionata, al ristabilimento dell'ordine pubblico, alla riparazione, alla deterrenza e alla riabilitazione.",
      ],
      policies: [
        "Esigere una condanna pronunciata in un processo regolare ed equo prima della pena.",
        "Considerare aggravanti il dolo, la premeditazione, la crudeltà, l'abuso di vittime vulnerabili, la criminalità organizzata e la reiterazione di reati gravi.",
        "Preferire pene pecuniarie proporzionate, la riparazione, i lavori di pubblica utilità, la messa alla prova e i percorsi terapeutici per i reati minori o non violenti che lo consentano.",
        "Ricorrere a pene detentive consistenti per la violenza grave, la rapina, il sequestro di persona, la criminalità organizzata grave, i grandi traffici, la corruzione grave, le grandi frodi, i reati sessuali gravi e la reiterazione di reati violenti.",
        "Trattare lo stupro e gli abusi sessuali gravi su minori come reati di eccezionale gravità.",
        "Applicare, dove opportuno, la reclusione di lunga durata o l'ergastolo nei casi più gravi non punibili con la pena capitale.",
        "Consentire misure di sicurezza successive alla pena, disciplinate in modo ristretto, soltanto quando il condannato resti dimostrabilmente un pericolo grave e siano mantenute le garanzie del giusto processo.",
        "Per precisione giuridica, punire le condotte sessuali penalmente rilevanti — l'abuso, lo sfruttamento, l'adescamento e il materiale illecito di abuso su minori — e non una diagnosi psichiatrica o un'inclinazione in sé.",
      ],
      limits: [
        "Gli intervalli numerici esatti di pena restano materia di una successiva stesura del codice penale, anziché essere inventati senza una base documentata.",
      ],
      keywords: [
        "commisurazione della pena",
        "pena",
        "carcere",
        "omicidio",
        "stupro",
        "abuso sessuale su minori",
        "riabilitazione",
        "riparazione",
      ],
    },

    "death-penalty": {
      title: "Pena di morte",
      shortAnswer:
        "Restore Europa accetta in linea di principio la legittimità tradizionale della pena capitale, riservandola a casi eccezionali che riguardino i delitti più gravi.",
      position: [
        "Restore Europa accetta in linea di principio la legittimità tradizionale cattolica della pena capitale, ma la riserva a casi eccezionali che riguardino i delitti più gravi.",
      ],
      policies: [
        "Potenzialmente applicabile all'omicidio doloso aggravato, alla strage, al terrorismo che comporti uccisioni deliberate, al genocidio e ai delitti di gravità comparabile.",
        "Soltanto dopo un processo completo ed equo, con un'elevata soglia probatoria e un effettivo diritto di impugnazione.",
        "Nessuna esecuzione dove permanga un dubbio serio sulla colpevolezza.",
        "Nessuna esecuzione di minori.",
        "Inflitta soltanto da una legittima autorità civile, e mai usata per semplice vendetta.",
      ],
      keywords: ["pena di morte", "pena capitale", "esecuzione", "omicidio", "abolizione"],
    },

    "capital-punishment-for-aggravated-sexual-crimes": {
      title: "Pena capitale per i reati sessuali aggravati",
      shortAnswer:
        "La pena di morte può essere giuridicamente prevista, ma non obbligatoria, per le forme più aggravate di stupro e di abuso sessuale su minori.",
      position: [
        "Restore Europa colloca i reati sessuali eccezionalmente aggravati fra i delitti che possono rientrare nella pena capitale, con le stesse garanzie procedurali e probatorie di insolito rigore previste per gli altri casi capitali.",
      ],
      policies: [
        "Fra i casi potenzialmente rientranti vi sono lo stupro aggravato da eccezionale brutalità, lo stupro ripetuto o seriale, lo stupro accompagnato da sequestro di persona o da tortura, l'abuso sessuale aggravato su minori, l'abuso sistematico di più minori e lo sfruttamento sessuale organizzato in circostanze di eccezionale gravità.",
        "Un processo penale completo ed equo è obbligatorio.",
        "La pena di morte non può essere inflitta dove permanga un serio dubbio residuo sulla colpevolezza.",
        "Esigere, prima dell'esecuzione, un effettivo riesame in appello e la valutazione di nuove prove sostanzialmente a discarico.",
        "Ricorrere a riscontri e a prove scientifiche ovunque siano ragionevolmente ottenibili; una prova debole o incerta non può mai sorreggere una condanna a morte.",
        "Mantenere disponibile l'ergastolo anche là dove un reato rientri tecnicamente fra quelli punibili con la pena capitale.",
        "Nessuna esecuzione di minori.",
      ],
      keywords: [
        "pena di morte",
        "pena capitale",
        "stupro aggravato",
        "abuso sessuale su minori",
        "violenza sessuale",
        "soglia probatoria",
        "ergastolo",
      ],
    },

    "firearms-and-self-defense": {
      title: "Armi da fuoco e legittima difesa",
      shortAnswer:
        "Una detenzione civile di armi da fuoco regolamentata per fini leciti, soggetta a licenza, a formazione e a obblighi di custodia in sicurezza.",
      position: [
        "Restore Europa sostiene una detenzione civile di armi da fuoco regolamentata per fini leciti, fra cui la legittima difesa, la caccia, il tiro sportivo e il collezionismo.",
      ],
      policies: [
        "Licenza obbligatoria.",
        "Formazione obbligatoria alla sicurezza.",
        "Obblighi di custodia in sicurezza.",
        "Controlli più severi per il porto in luogo pubblico o per il porto occulto.",
        "Chi si è reso responsabile di gravi reati violenti perde il diritto di detenere armi.",
        "Il traffico illecito e la detenzione a fini criminali sono puniti severamente.",
      ],
      principle:
        "Lo Stato non deve necessariamente monopolizzare ogni mezzo di legittima difesa, ma la detenzione di un'arma da fuoco comporta responsabilità gravi.",
      keywords: ["armi da fuoco", "armi", "legittima difesa", "caccia", "porto d'armi"],
    },

    "universal-healthcare-access": {
      title: "Accesso universale alle cure",
      shortAnswer:
        "Un accesso universale alle cure essenziali e medicalmente necessarie, con tutele contro l'uso eccessivo e lo spreco.",
      position: [
        "Restore Europa sostiene un accesso universale alle cure essenziali e medicalmente necessarie, ammettendo al tempo stesso tutele contro l'uso eccessivo e lo spreco.",
      ],
      policies: [
        "Cure d'urgenza disponibili per tutti.",
        "Medicina di base, farmaci essenziali, assistenza alla maternità e cura delle malattie gravi accessibili.",
        "Ticket contenuti possono applicarsi alle prestazioni non essenziali o di bassa priorità.",
        "I bambini, i nuclei a basso reddito, le malattie croniche gravi e le urgenze possono essere esentati dai ticket.",
        "I medici di famiglia possono fare da filtro prima delle cure specialistiche dove è medicalmente appropriato.",
        "La prevenzione, la riabilitazione e le cure palliative devono ricevere un forte sostegno.",
        "Frodi, procedure non necessarie e prescrizioni eccessive attivamente controllate.",
      ],
      principle:
        "Le cure necessarie non devono essere negate perché una persona è povera, ma le risorse sanitarie sono finite e vanno usate con responsabilità.",
      keywords: ["sanità", "universale", "ticket", "ospedali", "medicina"],
    },

    "catholic-medical-ethics": {
      title: "Etica medica cattolica",
      shortAnswer:
        "La sanità pubblica deve rispettare l'etica medica cattolica, e gli ospedali cattolici devono essere liberi di mantenere i propri standard etici.",
      position: [
        "La sanità pubblica deve rispettare l'etica medica cattolica. Le procedure che Restore Europa considera moralmente illecite secondo la dottrina cattolica non devono ricevere l'ordinario finanziamento pubblico, e gli ospedali cattolici devono essere liberi di mantenere i propri standard etici.",
      ],
      keywords: [
        "etica medica",
        "obiezione di coscienza",
        "ospedali cattolici",
        "bioetica",
        "finanziamento",
      ],
    },

    "environmental-stewardship": {
      title: "Custodia dell'ambiente",
      shortAnswer:
        "La natura è un'eredità affidata all'uomo, non una merce senza limiti né una divinità, e va custodita di conseguenza.",
      position: [
        "La natura è un'eredità affidata all'uomo, non una merce senza limiti né una divinità. Restore Europa sostiene la custodia delle foreste, dei fiumi, dei terreni agricoli, delle montagne, delle coste e della biodiversità.",
      ],
      policies: [
        "Suoli sani e acque pulite.",
        "Agricoltura locale e filiere regionali.",
        "Selvicoltura responsabile.",
        "Prodotti durevoli e riparazione anziché usa e getta.",
        "Risanamento degli ecosistemi danneggiati.",
        "Forme di insediamento che preservino insieme la comunità e il paesaggio.",
      ],
      keywords: ["ambiente", "custodia", "natura", "biodiversità", "terreni agricoli"],
    },

    "energy-policy": {
      title: "Politica energetica: dottrina generale",
      shortAnswer:
        "La politica energetica va giudicata sull'affidabilità, sulla resilienza strategica, sull'accessibilità dei costi, sulla custodia dell'ambiente e sul benessere umano di lungo periodo, e non sulla fedeltà a una sola tecnologia.",
      position: [
        "L'energia è un'infrastruttura strategica. Le nazioni europee devono conservare una capacità interna e diversificata sufficiente a preservare l'indipendenza politica, l'industria produttiva e la sicurezza delle famiglie.",
      ],
      policies: [
        "Mantenere approvvigionamenti energetici interni diversificati e resilienti.",
        "Ridurre la pericolosa dipendenza da fornitori esteri strategicamente inaffidabili.",
        "Valutare le tecnologie in base all'impatto ambientale sull'intero ciclo di vita, all'affidabilità, al costo, al consumo di suolo e alla resilienza strategica.",
        "Mantenere una capacità di generazione programmabile sufficiente alla stabilità della rete.",
        "Investire nella trasmissione e nell'accumulo dove è tecnicamente ed economicamente giustificato.",
        "Evitare politiche che rendano economicamente inaccessibili il normale riscaldamento, i trasporti o l'elettricità.",
        "Proteggere i paesaggi e le comunità locali.",
        "Ammettere un pluralismo tecnologico anziché imporre ovunque un'unica fonte energetica.",
      ],
      keywords: [
        "sicurezza energetica",
        "elettricità",
        "affidabilità",
        "infrastrutture strategiche",
        "accessibilità dei costi",
        "custodia",
        "energia",
      ],
    },

    "nuclear-energy": {
      title: "Energia nucleare",
      shortAnswer:
        "L'energia nucleare può essere consentita e sostenuta dove è sicura, affidabile, strategicamente utile e ambientalmente responsabile.",
      position: [
        "Il Manifesto non contiene alcun principio categoricamente antinucleare. L'energia nucleare va valutata con criteri pragmatici e non ideologici.",
      ],
      policies: [
        "Consentire la costruzione e la prosecuzione dell'esercizio degli impianti che rispettano standard di sicurezza esigenti.",
        "Esigere una gestione credibile e di lungo periodo delle scorie nucleari.",
        "Preservare, dove è praticabile, una competenza ingegneristica nucleare nazionale.",
        "Valutare le moderne tecnologie di reattore in base alla sicurezza dimostrata e ai risultati economici.",
        "Permettere che il nucleare faccia parte di un sistema diversificato a basse emissioni.",
        "Non imporre il ricorso al nucleare dove le condizioni locali rendono più razionale un altro mix.",
      ],
      keywords: [
        "centrali nucleari",
        "energia nucleare",
        "reattori",
        "sicurezza energetica",
        "elettricità",
        "scorie nucleari",
      ],
    },

    "fossil-fuels": {
      title: "Combustibili fossili",
      shortAnswer:
        "I combustibili fossili non devono essere vietati per ragioni ideologiche a prescindere dalla loro funzione strategica o economica, ma l'inquinamento non necessario e la dipendenza evitabile vanno ridotti.",
      position: [
        "Il carbone, il petrolio e il gas vanno giudicati in base ai costi ambientali, all'affidabilità, alla necessità strategica e ai sostituti disponibili.",
      ],
      policies: [
        "Nessun divieto generalizzato e immediato dei combustibili fossili.",
        "Preservare gli approvvigionamenti necessari ai trasporti, all'industria, al riscaldamento e alle riserve strategiche mentre si sviluppano le alternative.",
        "Ridurre l'inquinamento atmosferico grave e le pratiche estrattive distruttive per l'ambiente.",
        "Incoraggiare l'efficienza dove riduce insieme i costi e il consumo di risorse.",
        "Evitare la dipendenza da fornitori esteri ostili o inaffidabili.",
        "Abbandonare gli usi particolarmente dannosi quando esistono sostituti affidabili ed economicamente realistici.",
        "Evitare calendari di transizione che distruggano capacità industriali essenziali o rendano inaccessibile l'energia di base.",
      ],
      keywords: [
        "combustibili fossili",
        "carbone",
        "petrolio",
        "gas naturale",
        "sicurezza energetica",
        "inquinamento",
      ],
    },

    "renewable-energy": {
      title: "Energie rinnovabili",
      shortAnswer:
        "Le energie rinnovabili vanno sostenute dove sono tecnicamente valide, economicamente ragionevoli e compatibili con i paesaggi, con le comunità e con l'affidabilità della rete.",
      position: [
        "L'eolico, il solare, l'idroelettrico, il geotermico e le altre fonti sono strumenti e non fini morali, e vanno valutati secondo le condizioni locali.",
      ],
      policies: [
        "Consentire e sostenere la generazione rinnovabile dove ha senso sul piano economico e ambientale.",
        "Proteggere i paesaggi storici e le aree ecologicamente sensibili da uno sviluppo industriale mal progettato.",
        "Evitare la distruzione non necessaria di terreni agricoli produttivi per progetti energetici a bassa densità.",
        "Contabilizzare onestamente i fabbisogni di accumulo, di trasmissione e di riserva.",
        "Sostenere, dove è praticabile, la proprietà locale e comunitaria degli impianti energetici.",
        "Non imporre nuove installazioni al solo scopo di raggiungere obiettivi numerici, senza riguardo all'affidabilità e ai costi locali.",
      ],
      keywords: [
        "energie rinnovabili",
        "solare",
        "eolico",
        "idroelettrico",
        "geotermico",
        "affidabilità della rete",
        "paesaggio",
      ],
    },

    "climate-policy": {
      title: "Politica climatica",
      shortAnswer:
        "La custodia dell'ambiente comprende una prudente mitigazione del clima e l'adattamento, ma la politica climatica non giustifica un controllo centralizzato illimitato né misure che impongano sacrifici sproporzionati a fronte di benefici trascurabili.",
      position: [
        "I rischi climatici vanno affrontati con politiche ambientali concrete, con lo sviluppo tecnologico, con infrastrutture resilienti e con una cooperazione internazionale efficace là dove i problemi attraversano davvero i confini.",
      ],
      policies: [
        "Sostenere riduzioni economicamente razionali delle emissioni di gas serra.",
        "Dare priorità alle misure con un beneficio ambientale misurabile.",
        "Impiegare il nucleare, le rinnovabili, l'efficienza e le altre tecnologie in base ai risultati pratici.",
        "Investire nell'adattamento e nella resilienza contro le alluvioni, il caldo, la siccità, gli incendi boschivi e gli altri rischi.",
        "Proteggere le foreste, i suoli, i sistemi idrici e gli ecosistemi che rafforzano la resilienza.",
        "Evitare politiche che impoveriscono in modo sproporzionato le famiglie comuni producendo un beneficio ambientale trascurabile.",
        "Respingere l'uso della politica climatica come giustificazione generale di una sorveglianza di massa permanente o di un controllo digitale obbligatorio.",
        "Fissare obiettivi di emissione precisi soltanto dopo un'analisi tecnica delle evidenze scientifiche, della fattibilità e delle condizioni economiche.",
      ],
      limits: [
        "Il Manifesto non precisa date di neutralità climatica, aliquote di tassazione del carbonio, obiettivi di temperatura o quote vincolanti di emissione. Quelle questioni numeriche non vengono qui dedotte.",
      ],
      keywords: [
        "cambiamento climatico",
        "emissioni",
        "carbonio",
        "adattamento",
        "resilienza",
        "ambiente",
        "energia",
        "custodia",
      ],
    },

    "foreign-policy-doctrine": {
      title: "Dottrina di politica estera",
      shortAnswer:
        "Indipendenza strategica anziché ambizione imperiale, guidata dalla prudenza, dal legittimo interesse nazionale e da una forte presunzione contraria alla guerra non necessaria.",
      position: [
        "La politica estera europea deve perseguire l'indipendenza strategica anziché l'ambizione imperiale. Deve essere guidata dalla prudenza, dal legittimo interesse nazionale, dalla difesa degli innocenti dove ciò è realisticamente possibile e da una forte presunzione contraria alla guerra non necessaria.",
      ],
      policies: [
        "Indipendenza strategica nell'alimentazione, nell'energia, nelle infrastrutture, nella medicina e nell'industria essenziale.",
        "Opposizione alle guerre ideologiche volte a rifare civiltà altrui secondo modelli politici astratti.",
        "Le nazioni europee devono possedere la capacità di difendersi e di presidiare i propri confini.",
      ],
      keywords: ["politica estera", "difesa", "indipendenza strategica", "guerra", "intervento"],
    },

    nato: {
      title: "NATO",
      shortAnswer:
        "Restore Europa guarda con scetticismo a una dipendenza permanente dalla NATO ed è favorevole a una maggiore indipendenza strategica nazionale ed europea.",
      position: [
        "La cooperazione difensiva può essere utile, ma l'appartenenza alla NATO e l'allineamento a essa non devono essere trattati come requisiti indiscutibili o permanenti.",
      ],
      policies: [
        "Costruire capacità difensive nazionali ed europee credibili.",
        "Ridurre la dipendenza strategica permanente dagli Stati Uniti.",
        "Conservare la capacità di cooperare con gli Stati della NATO nell'intelligence, nelle tecnologie della difesa, nelle esercitazioni e di fronte a minacce realmente comuni.",
        "Non partecipare a guerre al solo scopo di dimostrare solidarietà all'alleanza.",
        "Mantenere il controllo costituzionale nazionale sull'impiego delle forze armate.",
        "Respingere le guerre ideologiche intese a rifare società altrui.",
        "Mantenere aperta, nel lungo periodo, la riconsiderazione dell'appartenenza alla NATO, se l'indipendenza strategica potrà essere assicurata attraverso una struttura difensiva più adeguata.",
      ],
      keywords: [
        "NATO",
        "articolo 5",
        "difesa collettiva",
        "indipendenza strategica",
        "difesa europea",
        "alleanze militari",
        "alleanza",
      ],
    },

    russia: {
      title: "Russia",
      shortAnswer:
        "Né un allineamento permanente con la Russia né un'ostilità ideologica permanente verso la Russia.",
      position: [
        "La Russia è una potenza straniera con cui le nazioni europee possono cooperare dove gli interessi coincidono e a cui possono opporsi dove gli interessi confliggono.",
      ],
      policies: [
        "Giudicare i rapporti in base a concreti interessi europei e nazionali.",
        "Mantenere i canali diplomatici ovunque sia possibile.",
        "Cooperare nel commercio, nella sicurezza o in altre materie dove ciò è materialmente vantaggioso e moralmente lecito.",
        "Mantenere l'indipendenza strategica nell'energia, nella difesa e nelle infrastrutture critiche.",
        "Non consentire alla Russia un'influenza eccessiva sulle istituzioni politiche o economiche europee.",
        "Non entrare in guerra contro la Russia per semplice prestigio ideologico o geopolitico.",
        "Ammettere risposte proporzionate a gravi violazioni della pace o ad attacchi gravi contro popolazioni innocenti.",
        "Cercare soluzioni negoziate dove è realistico.",
      ],
      keywords: [
        "Russia",
        "Federazione Russa",
        "Europa",
        "neutralità",
        "indipendenza strategica",
        "diplomazia",
        "Mosca",
      ],
    },

    ukraine: {
      title: "Ucraina",
      shortAnswer:
        "Restore Europa non fa dell'allineamento politico con l'Ucraina né con la Russia un obiettivo autonomo della politica estera europea.",
      position: [
        "La linea verso la guerra russo-ucraina deve essere governata dal legittimo interesse nazionale, dalla protezione delle vite innocenti, dal rischio di escalation e da una ricerca realistica della pace, anziché da una fedeltà ideologica all'una o all'altra parte.",
      ],
      policies: [
        "Mantenere una preoccupazione umanitaria per i civili colpiti dalla guerra.",
        "Sostenere gli sforzi seri verso una pace negoziata e duratura dove è realistico.",
        "Evitare impegni militari senza termine in assenza di una concreta giustificazione di sicurezza nazionale.",
        "Non trattare la ricostruzione, il cambio di regime o un confronto geopolitico permanente come obblighi europei automatici.",
        "Valutare caso per caso l'assistenza militare secondo l'interesse nazionale, la proporzionalità, il rischio di escalation e i limiti morali all'uso della forza.",
        "Distinguere l'assistenza umanitaria ai civili dalla partecipazione diretta al conflitto militare.",
        "Evitare un'ostilità permanente verso il popolo ucraino o verso quello russo.",
      ],
      keywords: [
        "Ucraina",
        "Russia",
        "guerra",
        "neutralità",
        "negoziati di pace",
        "aiuti militari",
        "politica estera",
        "Kiev",
      ],
    },

    "united-states": {
      title: "Stati Uniti",
      shortAnswer:
        "Una cooperazione costruttiva con gli Stati Uniti senza dipendenza politica, militare, tecnologica o culturale.",
      position: [
        "Gli Stati Uniti possono essere un partner importante, ma le nazioni europee devono conservare autonomia strategica e culturale.",
      ],
      policies: [
        "Mantenere normali relazioni diplomatiche e commerciali.",
        "Cooperare nella difesa, nella scienza, nell'intelligence e nel commercio dove gli interessi coincidono davvero.",
        "Ridurre la dipendenza critica dalla protezione militare e dalle infrastrutture strategiche americane.",
        "Ridurre la dipendenza eccessiva dalle piattaforme tecnologiche straniere dominanti.",
        "Proteggere le istituzioni europee dalle interferenze politiche o societarie straniere.",
        "Mantenere l'indipendenza culturale da un'omologazione commerciale importata.",
        "Respingere l'allineamento automatico alle priorità di politica estera americane.",
      ],
      keywords: [
        "Stati Uniti",
        "America",
        "autonomia strategica",
        "indipendenza europea",
        "tecnologia",
        "NATO",
        "atlantismo",
      ],
    },

    china: {
      title: "Cina",
      shortAnswer:
        "Relazioni pragmatiche con la Cina, unite a una forte protezione contro la dipendenza strategica e contro il controllo delle infrastrutture critiche.",
      position: [
        "La Cina non va trattata né come un nemico ideologico né come un modello per l'Europa.",
      ],
      policies: [
        "Mantenere relazioni diplomatiche e scambi commerciali leciti.",
        "Diversificare le filiere di approvvigionamento dove una dipendenza eccessiva crea vulnerabilità strategica.",
        "Proteggere le infrastrutture critiche, le industrie della difesa e le tecnologie sensibili dal controllo straniero.",
        "Sottoporre a esame gli investimenti nei settori strategicamente sensibili per i rischi alla sicurezza nazionale.",
        "Evitare la dipendenza dalla Cina per i farmaci essenziali, le telecomunicazioni, le tecnologie energetiche o le filiere rilevanti sul piano militare.",
        "Contrastare lo spionaggio, l'influenza politica occulta e l'importazione di sistemi del tipo del credito sociale.",
        "Cooperare nella scienza e nel commercio dove è opportuno.",
        "Evitare confronti militari non necessari dove la sicurezza europea non è direttamente in gioco.",
      ],
      keywords: [
        "Cina",
        "RPC",
        "commercio",
        "dipendenza strategica",
        "infrastrutture critiche",
        "filiere di approvvigionamento",
        "sorveglianza",
        "Pechino",
      ],
    },

    "israel-and-palestine": {
      title: "Israele e Palestina",
      shortAnswer:
        "Nessun allineamento permanente né con Israele né con la Palestina; la linea deve concentrarsi sulle vite innocenti, sulla stabilità regionale, su una diplomazia conforme al diritto e su concreti interessi europei.",
      position: [
        "Il conflitto non deve diventare un principio ordinatore permanente della politica estera o interna europea.",
      ],
      policies: [
        "Mantenere relazioni diplomatiche secondo l'ordinario interesse nazionale.",
        "Non concedere un sostegno politico incondizionato a nessuna delle due parti.",
        "Condannare gli attacchi deliberati contro i civili, chiunque ne sia l'autore.",
        "Non vendere armi e non intrattenere alcuna cooperazione militare-industriale con nessuna parte del conflitto finché esso perdura.",
        "Consentire l'assistenza umanitaria dove raggiunge in modo affidabile i civili in reale bisogno.",
        "Evitare un coinvolgimento militare diretto in assenza di una minaccia straordinaria che soddisfi rigorosi criteri di legittima difesa.",
        "Sostenere gli sforzi diplomatici realistici capaci di ridurre la violenza.",
        "Non consentire in Europa intimidazioni settarie importate né violenza politica.",
      ],
      keywords: [
        "Israele",
        "Palestina",
        "Gaza",
        "Medio Oriente",
        "neutralità",
        "aiuti umanitari",
        "politica estera",
      ],
    },

    "foreign-aid": {
      title: "Aiuti internazionali",
      shortAnswer:
        "Gli aiuti internazionali devono essere limitati, soggetti a rendiconto e rivolti a concreti bisogni umanitari o di sviluppo, anziché alla costruzione ideologica di nazioni o a una dipendenza permanente.",
      position: [
        "I primi obblighi di un governo sono verso la propria comunità politica, fermi restando i doveri umanitari autentici.",
      ],
      policies: [
        "Dare priorità agli aiuti di emergenza dopo guerre, carestie, catastrofi naturali e calamità umanitarie comparabili.",
        "Preferire gli aiuti prestati vicino alle popolazioni colpite dove ciò è efficace.",
        "Esigere trasparenza e controllo contabile.",
        "Chiudere i programmi in larga misura catturati dalla corruzione o dal clientelismo.",
        "Respingere gli aiuti concepiti principalmente per imporre una trasformazione ideologica o culturale.",
        "Preferire l'assistenza che costruisce capacità locali anziché una dipendenza senza termine.",
        "Consentire il sostegno alla medicina, alla sicurezza alimentare, all'acqua potabile e alla ricostruzione dove è dimostrabilmente efficace.",
        "Mantenere gli aiuti subordinati ai legittimi obblighi di bilancio interni.",
      ],
      keywords: [
        "aiuti internazionali",
        "aiuti umanitari",
        "cooperazione allo sviluppo",
        "beneficenza",
        "sviluppo internazionale",
        "rifugiati",
      ],
    },

    sanctions: {
      title: "Sanzioni",
      shortAnswer:
        "Le sanzioni economiche sono strumenti eccezionali per casi di eccezionale gravità, non arnesi ordinari di allineamento ideologico.",
      position: [
        "Le sanzioni possono essere giustificate quando un illecito grave è chiaramente individuato e una coercizione non militare ha una prospettiva realistica di limitarlo senza danni sproporzionati ai civili.",
      ],
      policies: [
        "Esigere un obiettivo serio e chiaramente individuato.",
        "Preferire misure mirate contro i responsabili, le organizzazioni, gli assetti militari o le reti finanziarie, anziché una punizione indiscriminata dei civili.",
        "Ricorrere alle sanzioni soltanto dove alternative meno coercitive sono insufficienti.",
        "Valutare se le misure abbiano una ragionevole prospettiva di raggiungere il loro obiettivo.",
        "Considerare il danno prevedibile ai civili innocenti.",
        "Riesaminare periodicamente le sanzioni e revocarle quando il loro scopo legittimo viene meno o i costi diventano sproporzionati.",
        "Mantenere esenzioni umanitarie per i beni civili essenziali ovunque sia praticabile.",
        "Riservare le sanzioni economiche molto estese alle circostanze di eccezionale gravità.",
      ],
      keywords: [
        "sanzioni",
        "embargo",
        "congelamento dei beni",
        "politica estera",
        "coercizione economica",
        "esenzioni umanitarie",
      ],
    },

    conscription: {
      title: "Servizio militare e preparazione nazionale",
      shortAnswer:
        "Forze armate di volontari solide, riserve addestrate e una popolazione fisicamente capace sono preferite alla coscrizione universale ordinaria in tempo di pace.",
      position: [
        "Il servizio militare è onorevole e necessario alla difesa, ma le forze armate ordinarie devono essere composte principalmente da persone che scelgono liberamente di servire.",
      ],
      policies: [
        "Mantenere forze armate professionali e di volontari capaci di una credibile difesa del territorio.",
        "Incoraggiare il servizio con un addestramento serio, il rispetto sociale e condizioni adeguate, anziché con una coercizione ordinaria.",
        "Mantenere una riserva addestrata e un addestramento volontario della riserva.",
        "Non adottare la coscrizione universale in tempo di pace come modello ordinario.",
        "Consentire un servizio obbligatorio e temporaneo di difesa nazionale in un'emergenza difensiva estrema che minacci la sopravvivenza del Paese, dove sia realmente necessario.",
        "Prevedere un adeguato servizio civile nazionale per gli obiettori di coscienza autentici.",
        "Mantenere le forze armate soggette a limiti morali e giuridici e respingere gli ordini manifestamente illegittimi.",
        "Rafforzare l'educazione fisica scolastica con una preparazione atletica seria e progressiva, il nuoto, il primo soccorso, l'orientamento, la competenza in ambiente naturale e nozioni di protezione civile adeguate all'età, con ragionevoli adattamenti per condizioni mediche e disabilità.",
      ],
      keywords: [
        "coscrizione",
        "servizio militare",
        "servizio nazionale",
        "riserve",
        "preparazione fisica",
        "scuole",
        "protezione civile",
        "obiezione di coscienza",
        "leva",
      ],
    },

    "nuclear-weapons": {
      title: "Armi nucleari",
      shortAnswer:
        "Restore Europa sostiene una riduzione multilaterale verificabile e, in prospettiva, l'abolizione delle armi nucleari.",
      position: [
        "Le armi nucleari creano rischi e capacità distruttive di ordine diverso dalle ordinarie armi convenzionali e non devono essere normalizzate come strumenti permanenti della politica.",
      ],
      policies: [
        "Operare per una riduzione internazionalmente verificabile e, in prospettiva, per l'abolizione degli arsenali nucleari.",
        "Sostenere accordi seri di controllo degli armamenti e di non proliferazione.",
        "Opporsi agli attacchi nucleari deliberati contro le popolazioni civili.",
        "Opporsi allo sviluppo di armi nucleari per semplice prestigio geopolitico.",
        "Perseguire un disarmo reciproco e verificabile anziché misure che lascino un solo Paese esposto in modo singolare alla coercizione nucleare.",
        "Mantenere solidi sistemi di verifica contro la conservazione segreta di arsenali vietati.",
        "Sostenere le misure che riducono il rischio di un lancio nucleare accidentale o non autorizzato.",
        "Opporsi alla proliferazione verso ulteriori Stati dotati di armi nucleari.",
        "Tenere distinta la politica sull'energia nucleare da quella sulle armi nucleari.",
      ],
      keywords: [
        "armi nucleari",
        "disarmo nucleare",
        "deterrenza",
        "non proliferazione",
        "controllo degli armamenti",
        "armi strategiche",
      ],
    },
  },
};

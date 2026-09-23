import type { LegalText } from "./index";

export const legalText: LegalText = {
  privacy: {
    eyebrow: "Note legali",
    title: "Privacy",
    metaTitle: "Privacy",
    lede: "Leggere questo sito non raccoglie nulla di tuo. Due pagine chiedono qualcosa, e soltanto se scegli di darlo. Che cosa ne viene fatto è esposto qui sotto.",
    description:
      "Leggere questo sito non raccoglie nulla: nessuna analisi del traffico, nessun cookie, nessun tracciamento. Due pagine chiedono qualcosa, e soltanto se scegli di darlo. Che cosa viene conservato, che cosa è cifrato e come farlo cancellare.",
    sections: {
      "what-we-collect": {
        title: "Che cosa raccoglie questo sito",
        body: [
          {
            type: "lead",
            text: "La lettura non raccoglie nulla che ti identifichi. Questo sito non ha account, non ha pubblicità, non ha pixel di tracciamento e non incorpora contenuti di terzi.",
          },
          {
            type: "paragraph",
            text: "Leggerlo non imposta cookie e non scrive nulla nella memoria locale o di sessione del tuo browser. Nessun profilo della tua visita viene costruito, acquistato o venduto. L'unico script è il contatore di traffico descritto più sotto, che è anonimo e non può identificarti.",
          },
          {
            type: "paragraph",
            text: "Su questo sito ci sono due soli luoghi attraverso i quali puoi consegnare dati personali, e in entrambi devi volerlo davvero: la domanda di iscrizione su [Partecipa][join] e il modulo per i messaggi su [Contatti][contact]. Nient'altro nel sito trasmette qualcosa, e nessuno dei due moduli si raggiunge per caso.",
          },
        ],
      },

      membership: {
        title: "Se chiedi di iscriverti",
        body: [
          {
            type: "paragraph",
            text: "Presentare la domanda invia al movimento quanto hai inserito, dove viene scritto in una banca dati. Inviare il modulo non ti rende socio: la registrazione arriva contrassegnata come non letta, e decide una persona. Fino a quel momento, e anche dopo, hai diritto di sapere esattamente che cosa viene conservato.",
          },
          {
            type: "paragraph",
            text: "Una domanda attraversa cinque stati, e nulla la fa passare dall'uno all'altro se non il giudizio di qualcuno. Arriva **non letta**. Quando un amministratore comincia a esaminarla, è **in esame**. Se ti scrive per chiederti qualcosa, viene contrassegnata come **in attesa di risposta** finché non rispondi — uno stato che esiste perché nessuno a cui sia stato scritto venga dimenticato. Diventa poi **accolta**, come socio o come volontario secondo quanto hai chiesto, oppure **respinta**. Nessun passaggio è automatico, e in nessun momento un algoritmo ti valuta.",
          },
          {
            type: "paragraph",
            text: "Una registrazione contiene al massimo sette cose: il tuo nome, il tuo indirizzo email, il tuo paese, il ruolo per cui ti sei candidato, un'area di interesse e — soltanto se scegli di darli — la tua regione o città e un messaggio. Non c'è alcun indirizzo postale, alcun numero di telefono né alcuna data di nascita. Nulla viene dedotto, arricchito o acquistato altrove.",
          },
          {
            type: "paragraph",
            text: "I due campi facoltativi sono quelli che possono dire di te più di ogni altro, e perciò sono trattati con la stessa cura del tuo nome. Una regione circoscrive una persona molto più di quanto faccia un paese, e un messaggio è testo libero — ed è lì che si finisce per nominare un datore di lavoro, una situazione familiare o una giudiziaria. **Entrambi sono cifrati**, e nessuno dei due viene mai scritto nel registro amministrativo. Se preferisci non darli, lasciali vuoti; la domanda funziona esattamente allo stesso modo.",
          },
          {
            type: "subheading",
            text: "Una cosa che non hai scritto tu",
          },
          {
            type: "paragraph",
            text: "Nell'esaminare una domanda, un amministratore può allegarvi una breve annotazione — il contenuto di una conversazione, la ragione di una decisione, a chi presentarti. È l'unica cosa nella tua registrazione che non hai scritto tu, ed è l'unico campo in tutta la banca dati a contenere il giudizio di una persona su un'altra: perciò è **cifrata come il resto** e non viene mai scritta nel registro amministrativo.",
          },
          {
            type: "paragraph",
            text: "Fa parte inoltre della tua registrazione ai fini del diritto di accesso. Se chiedi che cosa viene conservato su di te, l'annotazione è compresa nella risposta. Chi ne scrive una è tenuto a scriverla sapendolo.",
          },
          {
            type: "subheading",
            text: "Perché ci è consentito conservarlo",
          },
          {
            type: "paragraph",
            text: "L'appartenenza a un movimento politico implica un'opinione politica, che il Regolamento generale sulla protezione dei dati (GDPR) annovera fra le categorie particolari di dati personali all'articolo 9 e tutela più rigorosamente dei dati personali ordinari. Ci fondiamo sul tuo consenso esplicito, prestato al momento della domanda, insieme all'articolo 9, paragrafo 2, lettera d), che consente a un organismo senza scopo di lucro che persegua una finalità politica di trattare i dati dei propri membri — a condizione che i dati non siano comunicati all'esterno dell'organismo senza consenso. Non lo sono, e non lo saranno.",
          },
          {
            type: "subheading",
            text: "Per quanto tempo viene conservato",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "Per la durata dell'iscrizione, e non più a lungo di quanto serva al movimento.",
              "Cancellato ogni volta che lo chiedi, senza che tu debba darne ragione.",
              "Nulla viene cancellato automaticamente allo scadere di un termine, perché una domanda che nessuno ha ancora letto è la domanda di qualcuno, non un residuo da smaltire.",
              "**Una domanda respinta viene conservata, contrassegnata come respinta, anziché cancellata.** È una scelta deliberata e ha un costo per te, perciò la diciamo francamente: cancellare la registrazione cancellerebbe anche il modo di riconoscere che la stessa domanda era già stata esaminata, e il movimento la riesaminerebbe da principio ogni volta che venisse ripresentata. Se preferisci che non sia conservato nulla, chiedilo, e sarà cancellata.",
              "Il registro amministrativo descritto più sotto annota che una registrazione è stata creata, modificata o cancellata, e da chi, ma mai il suo contenuto.",
            ],
          },
          {
            type: "subheading",
            text: "Che cosa fa il modulo stesso",
          },
          {
            type: "paragraph",
            text: "Il tuo nome, il tuo indirizzo, la tua regione e il tuo messaggio sono cifrati prima di essere annotati, nella stessa richiesta — nessuno di essi è mai conservato in forma leggibile. La risposta che vedi è identica sia che l'indirizzo fosse già nel registro sia che non lo fosse, così che il modulo non possa servire a verificare se una determinata persona sia socia. Le domande sono limitate nel numero per ciascuna connessione, e c'è un tetto a quante il sito ne accetti in un'ora da tutti insieme; sono entrambe difese contro uno script che riempia il registro, non misure rivolte a te.",
          },
          {
            type: "paragraph",
            text: "Il modulo porta inoltre un campo che non vedrai mai: una casella vuota, collocata fuori dallo schermo, saltata dalla tastiera e nascosta ai lettori di schermo. Gli invii automatici compilano ogni campo che trovano e una persona non può compilare questo, perciò tutto quanto arriva con esso riempito viene scartato senza essere conservato. **Non usiamo alcun CAPTCHA né alcun rilevamento di bot di terze parti**, e deliberatamente — quei sistemi funzionano facendo osservare da un'azienda esterna chiunque tenti di iscriversi a un movimento politico, che è uno scambio peggiore di quello che qui si accetta.",
          },
          {
            type: "paragraph",
            text: "I tuoi dati non sono mai venduti, mai condivisi con un'altra organizzazione, mai usati per costruire un profilo pubblicitario e mai trasmessi a terzi per alcuno scopo. Nessuna decisione automatizzata viene presa nei tuoi confronti.",
          },
        ],
      },

      "how-it-is-protected": {
        title: "Come è protetto",
        body: [
          {
            type: "paragraph",
            text: "Un elenco di soci è esattamente il genere di documento che non dovrebbe mai uscire, e perciò è costruito nel presupposto che un giorno qualcosa andrà storto. Quel che segue è la descrizione delle tutele adottate, non la promessa che nulla possa accadere. La corrispondenza inviata attraverso il modulo di contatto è conservata nello stesso modo.",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "**Il tuo nome, il tuo indirizzo email, la tua regione, il tuo messaggio e qualunque annotazione scritta su di te sono cifrati** prima di essere annotati, con una chiave che non è conservata nella banca dati. Una copia rubata della banca dati, o di una sua copia di sicurezza, non si decifra in nulla.",
              "**Il tuo paese è conservato non cifrato**, perché contare e organizzare per paese è la ragione per cui l'elenco esiste. Da solo non identifica nessuno. La tua regione, che ti circoscriverebbe molto di più, non è trattata così — è cifrata con il resto.",
              "**Nessuno accede con una password.** L'accesso amministrativo richiede una passkey custodita su un dispositivo fisico, che non si può indovinare, carpire con un inganno né leggere da una banca dati rubata.",
              "**Leggere nomi o messaggi richiede una seconda conferma.** Essere autenticati mostra soltanto dei conteggi; scoprire una singola persona, o aprire una lettera, richiede una nuova conferma con la passkey, valida per pochi minuti. Chi rubasse una sessione attiva otterrebbe statistiche, non persone.",
              "**Ogni lettura è registrata** — chi ha guardato, e quando. Non soltanto ogni modifica: per un elenco come questo, è l'atto di guardare la cosa che merita di essere annotata. Ciò che è stato cercato è annotato come impronta non reversibile, così che il registro possa confermare se una determinata persona sia stata cercata senza diventare esso stesso un elenco di nomi.",
              "**Non esiste alcuna funzione di esportazione.** L'elenco non può essere scaricato come file, perché il file è la forma in cui elenchi simili sfuggono.",
            ],
          },
          {
            type: "paragraph",
            text: "Nessuno al di fuori dell'amministrazione del movimento stesso può leggerne alcuna parte, e nessuna sua parte è pubblicata da nessuna parte, a nessun livello di aggregazione, senza consenso.",
          },
        ],
      },

      forms: {
        title: "I due moduli",
        body: [
          {
            type: "paragraph",
            text: "Il primo è la domanda di iscrizione su [Partecipa][join], descritta sopra.",
          },
          {
            type: "paragraph",
            text: "Il secondo è il modulo per i messaggi su [Contatti][contact]. Conserva il tuo nome, il tuo indirizzo email, la funzione a cui ti sei rivolto e quanto hai scritto. Nome, indirizzo e messaggio sono cifrati esattamente come i dati di un socio — scrivere a un'organizzazione non è lo stesso che appartenervi, ma la distanza è più sottile di quanto sembri, e una lettera in cui dici che stai pensando di iscriverti rivela quanto il registro stesso.",
          },
          {
            type: "paragraph",
            text: "La corrispondenza è conservata finché non è stata trattata e non più a lungo di quanto la risposta richieda, è cancellata su richiesta e non è mai usata per aggiungerti al registro dei soci. Iscriversi è una decisione distinta, che devi prendere deliberatamente. Sulla pagina dei contatti non è stampato alcun indirizzo email, perché ciascuno viene pubblicato soltanto quando la funzione a cui appartiene esiste e qualcuno risponde della sua lettura.",
          },
        ],
      },

      analytics: {
        title: "I dati di traffico",
        body: [
          {
            type: "paragraph",
            text: "Le visite sono contate con Vercel Web Analytics, che non usa cookie: non scrive nulla sul tuo dispositivo, non conserva dati personali, non ti assegna alcun identificativo e non può seguirti da un sito all'altro. È servito da questo dominio anziché da una rete di terzi, così che caricare una pagina non riveli la tua visita a nessun altro. È per questo che il sito non porta alcun banner di consenso — non c'è nulla a cui acconsentire.",
          },
          {
            type: "paragraph",
            text: "Ciò che produce è un conteggio di visualizzazioni e di visitatori, per pagina e per paese. Non è collegato alle registrazioni dei soci, e non può esserlo: i due insiemi non hanno nulla in comune che li unisca.",
          },
          {
            type: "paragraph",
            text: "Le pagine amministrative sono escluse dal conteggio, così che i dati descrivano i lettori e non il nostro stesso lavoro di redazione.",
          },
        ],
      },

      "fonts-and-assets": {
        title: "Caratteri e risorse",
        body: [
          {
            type: "paragraph",
            text: "I caratteri tipografici sono serviti da questo sito anziché da una rete di distribuzione di font, così che caricare una pagina non riveli la tua visita a terzi. Tutte le immagini sono conservate localmente; nulla è richiamato direttamente da un altro dominio.",
          },
        ],
      },

      "server-logs": {
        title: "I registri del server",
        body: [
          {
            type: "paragraph",
            text: "Chi ospita questo sito conserverà gli ordinari registri del server web, che di norma comprendono indirizzi IP, percorsi richiesti e marche temporali. Ciò dipende dal contratto di hosting anziché da questo sito, e il contratto sarà indicato qui una volta definito.",
          },
        ],
      },

      "your-rights": {
        title: "I tuoi diritti",
        body: [
          {
            type: "paragraph",
            text: "In forza del Regolamento generale sulla protezione dei dati (GDPR) hai il diritto di accesso, di rettifica, di cancellazione, di limitazione, di portabilità e di opposizione riguardo ai dati personali conservati su di te. Dove il trattamento si fonda sul consenso, puoi inoltre revocarlo in qualsiasi momento, e revocarlo è semplice quanto lo è stato prestarlo.",
          },
          {
            type: "paragraph",
            text: "Questi diritti sono reali e i mezzi per onorarli esistono: su richiesta una registrazione può essere prodotta, corretta o cancellata del tutto, e cancellazione significa cancellazione, non un contrassegno su una riga che in silenzio si continua a conservare.",
          },
          {
            type: "statement",
            text: "Una cosa manca, e preferiamo dirlo anziché lasciare che sia tu a scoprirlo.",
          },
          {
            type: "paragraph",
            text: "La registrazione come partito o come associazione non è compiuta, e perciò non è ancora possibile indicare un titolare del trattamento né pubblicare un indirizzo per la corrispondenza — vedi i [dati editoriali][imprint]. Finché la cosa non è definita non esiste un indirizzo a cui inviare una richiesta con la certezza di chi la leggerà, né un'autorità di controllo presso la quale presentare reclamo contro un titolare del trattamento designato.",
          },
          {
            type: "paragraph",
            text: "È una lacuna reale, e induce ad attendere: se l'assenza di un titolare del trattamento designato ti dà da pensare, non presentare ancora domanda. Nulla si perde a presentarla più tardi. Questa pagina indicherà il titolare del trattamento, l'indirizzo e l'autorità di controllo prima che la lacuna si chiuda, non dopo.",
          },
          {
            type: "note",
            text: "Questa nota descrive il sito come è oggi ed è scritta per essere letta, non per soddisfare un elenco di adempimenti. Non costituisce consulenza legale, e sarà sostituita da un'informativa completa sulla riservatezza al momento della registrazione.",
          },
        ],
      },
    },
  },

  imprint: {
    eyebrow: "Note legali",
    title: "Dati editoriali",
    metaTitle: "Dati editoriali",
    lede: "Informazioni sull'editore, come richiesto dalla normativa europea sui media e sui partiti.",
    description:
      "Informazioni sull'editore del Restore Europa Movement. Il movimento è in formazione; i dati di registrazione sono pubblicati man mano che diventano reali.",
    intro: [
      {
        type: "lead",
        text: "Questo sito è pubblicato dal Restore Europa Movement, un movimento politico dei popoli nazionali d'Europa.",
      },
      {
        type: "paragraph",
        text: "La registrazione come partito o come associazione è in corso e non si è ancora compiuta in alcun ordinamento. Finché non si compirà, non vi è alcuna denominazione registrata, alcun numero di iscrizione né alcun rappresentante legale da indicare, e questa pagina non ne inventerà uno. Ciascun dato comparirà qui nel momento in cui diventerà materia di pubblico registro.",
      },
      {
        type: "paragraph",
        text: "Le comunicazioni legali e le rettifiche vanno inviate attraverso i canali di corrispondenza indicati su [Contatti][contact], dove è elencato l'indirizzo pubblicato per ciascuna funzione.",
      },
    ],
    particularsHeading: "Dati da pubblicare",
    particularsNote: "Al compimento della registrazione, in questo ordine.",
    aboutLabel: "Su questo sito",
    entries: {
      publisher: {
        term: "Editore",
        description: "La denominazione registrata dell'associazione o del partito.",
      },
      "legal-form": {
        term: "Forma giuridica e ordinamento",
        description: "Determinata dal paese di registrazione.",
      },
      "registered-address": {
        term: "Sede legale",
        description: "La sede dell'organizzazione.",
      },
      responsible: {
        term: "Responsabile dei contenuti",
        description: "La persona che ne risponde secondo la legge sulla stampa applicabile.",
      },
      register: {
        term: "Registro e numero",
        description: "Il registro delle associazioni o dei partiti, e l'iscrizione.",
      },
      "represented-by": {
        term: "Rappresentato da",
        description: "Le cariche legittimate ad agire per l'organizzazione.",
      },
      "supervisory-authority": {
        term: "Autorità di controllo",
        description: "Dove la legge nazionale sui partiti ne preveda una.",
      },
    },
    closing: [
      {
        type: "subheading",
        text: "Questo sito",
      },
      {
        type: "paragraph",
        text: "Il manifesto, i principi e il catalogo delle politiche sono pubblicati dal movimento e possono essere citati indicando la fonte. I crediti e le licenze fotografiche sono annotati nel repository con cui questo sito è costruito.",
      },
      {
        type: "paragraph",
        text: "Rettifiche e comunicazioni legali potranno essere inviate attraverso [Contatti][contact] una volta pubblicati gli indirizzi.",
      },
    ],
  },
};

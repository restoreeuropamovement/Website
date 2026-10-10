import type { NewsletterText } from "./index";

export const newsletterText: NewsletterText = {
  eyebrow: "Lettera",
  title: "La rivista per posta elettronica",
  metaTitle: "Lettera",
  lede: "Un indirizzo, i saggi del movimento man mano che vengono scritti, e in ogni messaggio un collegamento che ti toglie dalla lista.",
  description:
    "Ricevi la rivista di Restore Europa per posta elettronica. Un indirizzo, cifrato prima di essere conservato, confermato prima che venga inviato qualcosa, e rimovibile da un collegamento presente in ogni messaggio.",

  body: [
    {
      type: "lead",
      text: "Iscriversi mette un solo indirizzo di posta elettronica su una lista, e quella lista riceve i saggi del movimento. Nient'altro le viene inviato: nessun appello, nessun invito, nessuna cessione a chicchessia.",
    },
    {
      type: "paragraph",
      text: "La rivista al momento non ha pagine pubbliche, quindi per ora è la lettera il luogo in cui i suoi saggi compaiono. Ognuno arriva per intero, in testo semplice: nessuna immagine, nessuna grafica e niente che riferisca se lo hai aperto.",
    },
    {
      type: "paragraph",
      text: "**Ti verrà chiesta una conferma.** L'indirizzo resta non confermato finché non viene seguito un collegamento inviato ad esso; prima di allora non viene recapitato nulla, e un indirizzo mai confermato è cancellato senza essere letto: il collegamento scade dopo due giorni, e una passata che corre una volta al giorno rimuove ciò che è scaduto, così che nulla resta conservato oltre tre giorni. Non è una formalità. Chiunque può digitare in un campo l'indirizzo di uno sconosciuto, e per chi dal proprio interesse per questo movimento rischierebbe il posto di lavoro, posta politica non richiesta è un danno vero, fatto a suo nome.",
    },
    {
      type: "paragraph",
      text: "**L'indirizzo è cifrato prima di essere scritto**, con una chiave che non è conservata nella banca dati: una copia rubata di quest'ultima si decifra in nulla. Accanto registriamo in quale lingua stavi leggendo, perché la lettera ti si rivolga in quella lingua. Nessun nome, nessun paese e nessun modo, per nessuno, di scaricare la lista. Che cosa viene conservato, e per quanto, è esposto nella [nota sulla riservatezza][privacy].",
    },
    {
      type: "paragraph",
      text: "**Andarsene costa un clic.** Ogni messaggio porta un collegamento che rimuove l'indirizzo, e non chiede né accesso né motivo. Quel collegamento non è conservato da nessuna parte — viene ricalcolato dal registro a ogni uso — così una copia della banca dati non darebbe a nessuno un pulsante che svuota la lista, e un messaggio ritrovato in un archivio dopo anni funziona ancora.",
    },
    {
      type: "note",
      text: "I saggi sono scritti in inglese e non vengono tradotti. Quello che il movimento dice attorno a ciascuno — la nota in calce, le istruzioni per cancellarsi — è nella lingua in cui ti sei iscritto.",
    },
  ],

  form: {
    heading: "Iscriviti",
    email: "Indirizzo di posta elettronica",
    submit: "Iscriviti",
    submitting: "Invio…",
    privacyNote: "Che cosa accade al tuo indirizzo è esposto nella",
    privacyLink: "nota sulla riservatezza",
    invalid:
      "Questo non sembra un indirizzo di posta elettronica. Non è stato inviato né conservato nulla.",
    unavailable:
      "Le iscrizioni al momento non possono essere registrate, quindi questo modulo non accetta indirizzi. Niente di ciò che scrivi qui verrebbe conservato, e preferiamo dirlo piuttosto che prenderlo.",
    throttled:
      "Da questa connessione sono già arrivate diverse richieste nell'ultima ora. Aspetta un poco e riprova — un indirizzo viene comunque aggiunto una volta sola, quindi un tentativo precedente può aver già funzionato.",
    busy:
      "Il sito ha raggiunto il numero di invii che accetta in un'ora, contando tutti insieme. Quasi certamente non dipende da te. Riprova fra poco.",
    sent: {
      title: "Ora controlla quella casella.",
      body: "Un messaggio è in viaggio. Che cosa dica dipende da che cosa c'è già sulla lista, e lo vedrà soltanto chi può aprire quella casella — questa pagina non lo viene a sapere in nessuno dei due casi, perché il modulo non possa essere usato per scoprire chi è iscritto. Se il messaggio porta un collegamento di conferma, non verrà inviato altro finché non sarà seguito.",
    },
  },

  confirm: {
    eyebrow: "Lettera",
    title: "Conferma l'iscrizione",
    metaTitle: "Conferma l'iscrizione",
    lede: "Una pressione, e l'indirizzo a cui questo collegamento appartiene entra nella lista.",
    why: "Un pulsante e non il collegamento da solo, perché i filtri di posta aziendali aprono ogni indirizzo contenuto in un messaggio in arrivo per verificare che sia innocuo. Se bastasse seguire il collegamento, quei programmi confermerebbero iscrizioni per conto di persone che non hanno mai aperto la posta — e sono più diffusi proprio là dove ciò che si legge è sorvegliato più da vicino.",
    submit: "Conferma",
    submitting: "Conferma in corso…",
    done: {
      title: "Confermato.",
      body: "L'indirizzo è sulla lista, e il prossimo saggio gli sarà inviato. Ogni messaggio porta un collegamento che lo toglie di nuovo.",
    },
    failed: {
      title: "Questo collegamento non ha funzionato.",
      body: "Un collegamento di conferma vale due giorni e si può usare una volta sola. Se è scaduto, o è già stato usato, richiedilo dalla [pagina della lettera][newsletter] e ne verrà inviato uno nuovo.",
    },
    missing:
      "Questo indirizzo non porta alcun gettone di conferma, quindi qui non c'è nulla da confermare. Apri il collegamento contenuto nel messaggio che ti è stato inviato.",
  },

  unsubscribe: {
    eyebrow: "Lettera",
    title: "Lascia la lista",
    metaTitle: "Lascia la lista",
    lede: "Una pressione, e l'indirizzo a cui questo collegamento appartiene smette di ricevere qualunque cosa.",
    why: "Un pulsante e non una rimozione alla semplice apertura, per la stessa ragione della conferma: i controllori di collegamenti integrati nei sistemi di posta aziendali aprono ogni indirizzo di un messaggio, e un collegamento che cancellasse l'iscrizione all'apertura toglierebbe in silenzio lettori che non hanno mai chiesto di andarsene.",
    submit: "Cancellami",
    submitting: "Rimozione…",
    done: {
      title: "Fatto. Non verrà inviato altro.",
      body: "Non diciamo se l'indirizzo fosse sulla lista, perché chi ha in mano questo collegamento non è necessariamente la persona a cui l'indirizzo appartiene, e non è una domanda a cui risponderemo a uno sconosciuto. Puoi iscriverti di nuovo quando vuoi; si ripartirà dal passaggio della conferma. Se malgrado questo arrivasse ancora qualcosa, il collegamento che hai usato è anteriore alla chiave di cifratura attuale e non viene più riconosciuto; quello in fondo al messaggio più recente lo sarà.",
    },
    missing:
      "Questo indirizzo non porta alcun gettone, quindi qui non c'è nulla da rimuovere. Usa il collegamento in calce a uno qualsiasi dei messaggi che ti sono stati inviati.",
  },
};

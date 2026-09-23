import type { InvolvementText } from "./index";

export const involvementText: InvolvementText = {
  join: {
    eyebrow: "Iscrizione",
    title: "Unisciti al movimento.",
    metaTitle: "Partecipa",
    lede: "Iscriversi è appartenere. Se puoi anche aiutare a costruire il movimento, scegli «Volontario». Il modulo chiede cinque cose, cifra il tuo nome e il tuo indirizzo prima di conservarli e non ti impegna a nulla finché una persona non ha esaminato la domanda.",
    description:
      "Iscriviti al Restore Europa Movement come socio, oppure offriti come volontario per aiutare a costruirlo.",
    prefilled:
      "Sei arrivato dalla sezione in {country}, quindi il modulo qui sotto è impostato su di essa. Cambia l'uno o l'altro campo se non è esatto.",
    roleLegend: "A che titolo ti candidi",
    fields: {
      name: "Nome",
      email: "Email",
      country: "Paese",
      region: "Regione o città",
      interest: "Area di interesse",
      message: "Messaggio",
      messageHint:
        "Cosa vorresti fare, e qualunque cosa della tua situazione sia attinente.",
      optional: "Facoltativo",
      placeholder: "Scegli…",
      otherCountry: "Altro",
    },
    consent:
      "Chiedo di iscrivermi al Restore Europa Movement e acconsento a che quanto ho inserito sopra sia conservato a tale scopo. L'iscrizione a un movimento politico implica un'opinione politica, che la legge tutela più rigorosamente dei dati personali ordinari; posso revocare questo consenso e far cancellare il dato in qualsiasi momento.",
    submit: "Invia la domanda",
    submitting: "Invio…",
    privacyNote: "Tutto ciò che inserisci è cifrato prima di essere conservato. Vedi la nostra",
    privacyLink: "nota sulla riservatezza",
    received: {
      title: "La tua domanda è stata ricevuta.",
      body: "Ora attende di essere esaminata da una persona. L'iscrizione comincia quando quell'esame è concluso, non quando si invia un modulo — dunque nulla è ancora deciso, e nulla che ti riguardi è stato pubblicato da nessuna parte.",
      privacy:
        "Il tuo nome e il tuo indirizzo sono stati cifrati prima di essere annotati. Cosa conserviamo, per quanto tempo e come farlo cancellare è esposto nella",
      privacyLink: "nota sulla riservatezza",
    },
    unavailable:
      "Il registro dei soci non accetta domande in questo momento. Nulla di ciò che scrivi qui è stato inviato. Riprova tra poco.",
    throttled:
      "Da questa connessione sono già state inviate diverse domande. Attendi un'ora prima di inviarne un'altra.",
    problemCount: {
      one: "Questo modulo presenta {count} problema",
      other: "Questo modulo presenta {count} problemi",
    },
    errors: {
      name: "Inserisci il tuo nome, al massimo 120 caratteri.",
      email: "Inserisci un indirizzo email valido.",
      country: "Scegli un paese dall'elenco.",
      region: "Regione o città è limitata a 120 caratteri.",
      message: "Il tuo messaggio è limitato a 1500 caratteri.",
      role: "Scegli se ti candidi come socio o come volontario.",
      interest: "Scegli un'area di interesse.",
      consent: "Devi acconsentire per proseguire.",
    },
  },

  roles: {
    member: {
      title: "Socio",
      summary:
        "Essere contato come socio del movimento. Quando Restore Europa potrà ricevere contributi, saranno i soci a cui verrà chiesto di sostenere il lavoro.",
      commitment: "La via ordinaria",
    },
    volunteer: {
      title: "Volontario",
      summary:
        "Aiutare a costruirlo: organizzazione locale, scrittura, traduzione, eventi o un mestiere. Scegli l'area di interesse che si adatta meglio.",
      commitment: "Per quanto puoi",
    },
  },

  retiredRoles: {
    supporter: "Sostenitore",
    organizer: "Organizzatore locale",
    writer: "Autore / ricercatore",
    professional: "Contributo professionale",
  },

  interests: {
    policy: "Politiche pubbliche e ricerca",
    organising: "Organizzazione locale",
    writing: "Scrittura e redazione",
    events: "Eventi e incontri",
    translation: "Traduzione",
    legal: "Diritto e conformità",
    technology: "Tecnologia e infrastrutture",
    agriculture: "Agricoltura e territorio",
    architecture: "Architettura e urbanistica",
    other: "Altro",
  },

  contact: {
    eyebrow: "Contatti",
    title: "Raggiungere il movimento.",
    metaTitle: "Contatti",
    lede: "La corrispondenza è trattata per funzione anziché per persona, così che una lettera arrivi a chi può risponderle e non a chi capita di leggerla per primo.",
    description:
      "Come raggiungere il Restore Europa Movement: richieste generali, stampa, ricerca, organizzazione e circoli locali.",
    channelsHeading: "Canali",
    writeHeading: "Scrivici",
    writeBody:
      "Sopra non è stampato alcun indirizzo email, perché ciascuno viene pubblicato quando la funzione a cui appartiene esiste e qualcuno risponde della sua lettura. Nel frattempo questo modulo raggiunge le stesse persone.",
    fields: {
      name: "Nome",
      email: "Email",
      subject: "Di cosa si tratta",
      message: "Messaggio",
      placeholder: "Scegli…",
    },
    submit: "Invia il messaggio",
    submitting: "Invio…",
    privacyNote: "Cifrato prima di essere conservato. Vedi la nostra",
    privacyLink: "nota sulla riservatezza",
    sent: {
      title: "Il tuo messaggio è stato ricevuto.",
      body: "Sarà letto da chi ricopre la funzione a cui l'hai indirizzato. Il movimento è piccolo e risponde alla corrispondenza a mano, quindi una risposta può richiedere qualche giorno.",
      privacy:
        "Il tuo nome, il tuo indirizzo e il tuo messaggio sono stati cifrati prima di essere conservati e possono essere cancellati su richiesta — vedi la",
      privacyLink: "nota sulla riservatezza",
    },
    unavailable:
      "Non è possibile ricevere corrispondenza in questo momento. Nulla di ciò che scrivi qui è stato inviato. Riprova tra poco.",
    throttled:
      "Da questa connessione sono già stati inviati diversi messaggi. Attendi un'ora prima di inviarne un altro.",
    problemCount: {
      one: "Questo modulo presenta {count} problema",
      other: "Questo modulo presenta {count} problemi",
    },
    errors: {
      name: "Inserisci il tuo nome, al massimo 120 caratteri.",
      email: "Inserisci un indirizzo email valido, così che una risposta possa raggiungerti.",
      subject: "Scegli di cosa tratta il tuo messaggio.",
      message: "Il messaggio deve essere tra 10 e 2000 caratteri.",
    },
    ratherTakePart: {
      before: "Se preferisci partecipare anziché fare una domanda,",
      joinLink: "unisciti al movimento",
      between: ". Le informazioni sull'editore sono nel",
      imprintLink: "colophon",
      after: ".",
    },
  },

  channels: {
    general: {
      title: "Richieste generali",
      description: "Domande sul movimento, sul suo programma e sulle sue attività.",
    },
    press: {
      title: "Stampa",
      description: "Giornalisti, emittenti e ricercatori in cerca di un commento o di un contesto.",
    },
    research: {
      title: "Ricerca",
      description: "Corrispondenza accademica e contributi al catalogo delle politiche.",
    },
    organization: {
      title: "Organizzazione",
      description: "Gestione delle iscrizioni, statuto, conformità e questioni interne.",
    },
    chapters: {
      title: "Circoli locali",
      description: "Costituire un circolo, o contattarne uno quando i circoli saranno costituiti.",
    },
  },
};

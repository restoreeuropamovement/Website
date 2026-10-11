import type { EmailText } from "./index";

export const emails: EmailText = {
  applicationReceived: {
    subject: "La tua domanda a Restore Europa",
    body: `Grazie per la tua domanda.

È stata registrata e sarà letta da una persona prima che accada altro.
Non esiste alcuna approvazione automatica, e preferiamo prenderci il
tempo di leggere bene piuttosto che rispondere in fretta: non ti
promettiamo quindi una data. Quando sarà stata letta ti scriveremo a
questo indirizzo, perciò vale la pena tenerlo d'occhio.

Questo messaggio è stato inviato automaticamente, e nessuno legge
l'indirizzo da cui proviene. Tutto ciò che vuoi dirci raggiunge una
persona all'indirizzo {contact}.

Se non hai compilato tu questo modulo, non devi fare nulla. Non è stato
pubblicato niente, non è stato trasmesso niente, e una domanda che non
viene mai accolta non diventa mai un'iscrizione. Se preferisci che
l'annotazione sparisca subito, dillo lì e sarà cancellata.

Cosa conserviamo e come è protetto è esposto all'indirizzo {privacy}.`,
  },

  confirmSubscription: {
    subject: "Conferma l'iscrizione",
    body: `Conferma di voler ricevere per posta elettronica la rivista di
Restore Europa — all'incirca un saggio a settimana sul movimento e su ciò
che accade in Europa.

Conferma qui:
{confirm}

Se non l'hai chiesto tu, ignora questo messaggio. Non ti sarà inviato
nulla, non devi rispondere, e l'indirizzo sarà cancellato senza che tu
debba fare alcunché: il collegamento qui sopra scade fra due giorni, e
una passata che corre una volta al giorno rimuove ciò che è scaduto,
così che il registro sparisce entro tre giorni.`,
  },

  alreadySubscribed: {
    subject: "Sei già iscritto",
    body: `Qualcuno ha chiesto di iscrivere questo indirizzo alla rivista di
Restore Europa, ed è già in elenco. Non è cambiato nulla e non devi fare
niente.

Se preferisci non riceverla, puoi interrompere in qualsiasi momento:
{unsubscribe}`,
  },

  journalIssue: {
    readOnSite: `Leggilo sul sito, con note e fonti:
{url}`,
    unsubscribeNote: `Ricevi questo messaggio perché hai confermato questo indirizzo. Per
interrompere:
{unsubscribe}`,
  },
};

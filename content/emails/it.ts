import type { EmailText } from "./index";

export const emails: EmailText = {
  applicationReceived: {
    subject: "La tua domanda a Restore Europa",
    body: `Grazie per la tua domanda.

È stata registrata e sarà letta da una persona prima che accada altro.
Non esiste alcuna approvazione automatica, e preferiamo prenderci il
tempo di leggere bene piuttosto che rispondere in fretta: non ti
promettiamo quindi una data.

Se non hai compilato tu questo modulo, non devi fare nulla. Non è stato
pubblicato niente, non è stato trasmesso niente, e una domanda che non
viene mai accolta non diventa mai un'iscrizione. Se preferisci che
l'annotazione sia cancellata prima di allora, rispondi a questo messaggio
e dillo.

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
nulla, non devi rispondere, e l'indirizzo sarà cancellato entro due
giorni senza che tu debba fare alcunché.`,
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

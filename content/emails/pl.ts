import type { EmailText } from "./index";

export const emails: EmailText = {
  applicationReceived: {
    subject: "Twoje zgłoszenie do Restore Europa",
    body: `Dziękujemy za zgłoszenie.

Zostało ono zapisane i zanim wydarzy się cokolwiek dalej, przeczyta je
człowiek. Nie ma żadnego automatycznego przyjęcia, a wolimy przeczytać
spokojnie, niż odpowiedzieć szybko — dlatego nie obiecujemy terminu.

Jeśli ten formularz wypełnił ktoś inny, nie musisz nic robić. Nic nie
zostało opublikowane, nic nie zostało nikomu przekazane, a zgłoszenie,
które nigdy nie zostanie przyjęte, nigdy nie stanie się członkostwem.
Jeśli chcesz, by wpis usunięto wcześniej, odpowiedz na tę wiadomość i
napisz o tym.

Co przechowujemy i jak jest to chronione, wyjaśnia {privacy}.`,
  },

  confirmSubscription: {
    subject: "Potwierdź subskrypcję",
    body: `Potwierdź, że chcesz otrzymywać pismo Restore Europa pocztą
elektroniczną — mniej więcej jeden esej tygodniowo o ruchu i o tym, co
dzieje się w Europie.

Potwierdź tutaj:
{confirm}

Jeśli to nie twoja prośba, zignoruj tę wiadomość. Nic nie zostanie do
ciebie wysłane, nie musisz odpowiadać, a adres zostanie usunięty w ciągu
dwóch dni bez żadnego działania z twojej strony.`,
  },

  alreadySubscribed: {
    subject: "Ten adres jest już zapisany",
    body: `Ktoś poprosił o zapisanie tego adresu na pismo Restore Europa, a
adres już jest na liście. Nic się nie zmieniło i nie musisz nic robić.

Jeśli wolisz go nie otrzymywać, możesz zrezygnować w każdej chwili:
{unsubscribe}`,
  },

  journalIssue: {
    readOnSite: `Przeczytaj na stronie, z przypisami i źródłami:
{url}`,
    unsubscribeNote: `Otrzymujesz tę wiadomość, ponieważ ten adres został potwierdzony. Aby
zrezygnować:
{unsubscribe}`,
  },
};

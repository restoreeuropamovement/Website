import type { ContentBlock } from "@/lib/content-types";
import type { PrinciplesContent } from "./index";

export const principlesContent: PrinciplesContent = {
  meta: {
    title: "Grundsätze",
    subtitle: "Sechzehn Verpflichtungen, klar ausgesprochen",
    lede: "Aus diesen Positionen ergibt sich unsere Politik. Hier steht jede von ihnen in Kürze; die vollständige Begründung liefert das Manifest.",
    indexLabel: "Übersicht",
    indexNavLabel: "Übersicht der Grundsätze",
    inManifesto: "Im Manifest",
    copyLinkTo: "Link kopieren zum Grundsatz",
    closingTitle: "Jeder Grundsatz wird im Manifest vollständig begründet.",
    readManifesto: "Das Manifest lesen",
    whatThisMeans: "Was das in der Praxis bedeutet",
  },

  items: {
    "moral-order": {
      title: "Sittliche Ordnung",
      statement:
        "Eine politische Gemeinschaft kann dem Gut, zu dessen Schutz sie besteht, nicht auf Dauer neutral gegenüberstehen.",
      summary: "Das Gemeinwohl als Zweck politischer Autorität.",
      body: [
        {
          type: "paragraph",
          text: "Jede Gesellschaft urteilt darüber, was Schutz verdient, was gefördert werden soll und welches Leben sie den Menschen ermöglichen will, die in ihr leben. Ein Staat, der von sich behauptet, solche Urteile nicht zu fällen, hat sie meist längst gefällt und nur nicht ausgesprochen.",
        },
        {
          type: "paragraph",
          text: "Die Würde des Menschen gründet nicht in persönlicher Vorliebe, nicht in der Nachfrage des Marktes, nicht in der Bequemlichkeit der Verwaltung und nicht im technisch Machbaren. Politische Autorität ist weder dazu da, einen neuen Menschen hervorzubringen, noch bloß dazu, zwischen konkurrierenden Begehrlichkeiten zu schlichten. Sie ist dazu da, die Bedingungen zu sichern, unter denen Menschen, Familien und Gemeinschaften gut leben können.",
        },
        {
          type: "paragraph",
          text: "Die europäische Zivilisation lässt sich ohne das Christentum nicht verstehen, und wir bekennen uns offen zu diesem Erbe. Was wir zurückweisen, ist nicht der Widerspruch — Widerspruch ist der Normalzustand einer freien Gesellschaft —, sondern die Forderung, das öffentliche Leben Europas habe sich zu verhalten, als hätte es sein eigenes religiöses Erbe nie gegeben.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-and-community": {
      title: "Person und Gemeinschaft",
      statement:
        "Wir gehen von der Person in ihren Bindungen aus, nicht vom vereinzelten Individuum.",
      summary: "Rechte und Pflichten, Freiheit und Verantwortung gehören zusammen.",
      body: [
        {
          type: "paragraph",
          text: "Niemand kommt bindungslos zur Welt. Wer geboren wird, findet Eltern vor, eine Sprache, eine Kultur, eine Heimat, Verpflichtungen und eine Geschichte. Das sind keine Fesseln, die es abzustreifen gälte, sondern Bedingungen, unter denen ein volles menschliches Leben überhaupt erst möglich wird.",
        },
        {
          type: "paragraph",
          text: "Wir nehmen Rechte ernst; ohne die Pflichten, die ihnen entsprechen, haben sie keinen Bestand. Wir nehmen die Freiheit ernst; sie ist mehr als die Abwesenheit von Zwang, denn zu ihr gehört die Fähigkeit, das wirklich Gute zu ergreifen.",
        },
        {
          type: "paragraph",
          text: "Eine gesunde politische Ordnung hält deshalb vier Paare im Gleichgewicht: Freiheit und Verantwortung, Rechte und Pflichten, die Würde des Einzelnen und seine Verpflichtung gegenüber der Gemeinschaft, Autorität und Subsidiarität.",
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "Familie",
      statement:
        "Die Gesellschaft sollte Familiengründung, Elternschaft und ein sinnvolles menschliches Leben materiell möglich machen.",
      summary:
        "Die erste Institution der Zivilisation und zugleich die, die sich am leichtesten untergraben lässt.",
      body: [
        {
          type: "paragraph",
          text: "Die Familie ist die erste Institution der Zivilisation, und sie geht dem Staat voraus. Fast alles, worauf eine Gesellschaft angewiesen ist, geschieht zuerst in ihr: dass Kinder aufwachsen, dass Alte versorgt werden, dass Sprache und Glaube weitergegeben werden, dass eine Gemeinschaft im Alltag zusammenhält.",
        },
        {
          type: "paragraph",
          text: "Eine Wirtschaft, die Familiengründung finanziell unmöglich macht, ist aus der Ordnung geraten. Ebenso eine Arbeitswelt, die Elternschaft als Störfall behandelt, und ein Wohnungsmarkt, der Eigentum zum unerreichbaren Vorrecht macht. Das sind keine privaten Unglücksfälle, sondern Ergebnisse von Politik — und was Politik hervorgebracht hat, kann Politik ändern.",
        },
        {
          type: "paragraph",
          text: "Wir treten deshalb für bezahlbares Wohnen ein, für ein Steuerrecht, das Familien entlastet, für die Unterstützung von Eltern, für sichere Arbeitsverhältnisse und dafür, dass Zeit bleibt, die nicht der Erwerbsarbeit gehört. Europas demografische Erneuerung sollte vor allem daher kommen, dass Familienleben für die Europäer selbst wieder möglich wird.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "nation-and-continuity": {
      title: "Nation und Kontinuität",
      statement:
        "Die europäischen Nationen haben ein legitimes Recht, ihre historische Identität, ihre Kultur und ihre Kontinuität zu bewahren.",
      summary:
        "Die Nation als Gemeinschaft über die Generationen hinweg, nicht als Verwaltungseinheit.",
      body: [
        {
          type: "paragraph",
          text: "Das Menschsein ist allen gemeinsam; Zivilisation gibt es nur im Besonderen. Menschen gehören nicht allein der Menschheit im Allgemeinen an, sondern wirklichen Gemeinschaften, die die Geschichte geformt hat — zusammengehalten von Erinnerung und Sprache, von Sitte, Institutionen und einem gemeinsamen Gebiet und von dem Bewusstsein, ein gemeinsames Schicksal zu teilen.",
        },
        {
          type: "paragraph",
          text: "Die gleiche Würde aller Menschen verlangt nicht, dass jedes Land kulturell gegen jedes andere austauschbar wird. Eine polnische Stadt soll erkennbar polnisch bleiben, eine italienische Stadt erkennbar italienisch, ein französisches Dorf erkennbar französisch.",
        },
        {
          type: "paragraph",
          text: "Die überlieferten Kulturen und die Völker Europas zu bewahren ist an sich nicht feindseliger, als die Kulturen und die geschichtliche Identität jeder anderen Zivilisation zu bewahren. Wir verteidigen Kontinuität — und wir verteidigen sie für alle.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "immigration-and-integration": {
      title: "Einwanderung und Integration",
      statement:
        "Einwanderung sollte auf ein Maß begrenzt bleiben, das wirkliche Integration und gesellschaftliche Stabilität zulässt.",
      summary: "Grenzen als legitime Einrichtungen; Staatsbürgerschaft als Zugehörigkeit.",
      body: [
        {
          type: "paragraph",
          text: "Einwanderungspolitik hat dem langfristigen Gemeinwohl des aufnehmenden Landes zu dienen. Keine Gesellschaft verträgt demografischen Wandel in unbegrenztem Umfang, ohne dass es Folgen hätte — für das Vertrauen der Menschen untereinander, für Wohnraum und Infrastruktur, für die kulturelle Kontinuität und den politischen Zusammenhalt.",
        },
        {
          type: "paragraph",
          text: "Die Staatsbürgerschaft sollte Zugehörigkeit bedeuten und nicht bloßen Aufenthalt. Wer eingebürgert wird, sollte die Landessprache wirklich beherrschen, Geschichte und Institutionen des Landes kennen, die verfassungsmäßige Ordnung achten und sich dem Land wirklich verbunden fühlen.",
        },
        {
          type: "statement",
          text: "Wer auf rechtmäßigem Weg Bürger wird, ist Bürger und muss als Bürger behandelt werden.",
        },
        {
          type: "paragraph",
          text: "Dieser Satz ist keine Einschränkung und kein Nachsatz. Wer dazugehört, gehört ganz dazu. Unsere Auseinandersetzung gilt dem Umfang und den Bedingungen der Zuwanderung; sie richtet sich gegen eine Politik — niemals gegen die Menschen, die unter dieser Politik ins Land gekommen sind.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "Europa",
      statement:
        "Eine Gemeinschaft souveräner Nationen, die eine Zivilisation teilen und dort zusammenarbeiten, wo die Zusammenarbeit ihnen dient.",
      summary: "Einheit ohne Vereinheitlichung; Subsidiarität als leitender Grundsatz.",
      body: [
        {
          type: "paragraph",
          text: "Europäische Einheit darf nicht den Preis haben, dass die europäischen Nationen verschwinden. Wir verwerfen beides: die vollständige Abschottung der Nationen ebenso wie den Umbau Europas zu einem zentralisierten, nachnationalen Verwaltungsstaat.",
        },
        {
          type: "paragraph",
          text: "Leitend sollte die Subsidiarität sein: Nichts soll auf einer höheren Ebene entschieden werden, was auf einer niedrigeren sachgerecht entschieden werden kann. Die Gemeinde soll nicht unnötig Zuständigkeiten an die Region abtreten, die Region nicht an die Nation und die Nation nicht an gesamteuropäische Institutionen.",
        },
        {
          type: "paragraph",
          text: "Damit bleibt sehr viel, was die Europäer nur gemeinsam tun können — Verteidigung, Grenzen, strategische Infrastruktur, Wissenschaft, Umweltschutz, Medizin, eine widerstandsfähige Energieversorgung und strategische Industrie. Unser Ziel ist kein einheitliches Europa, sondern ein Europa, dessen Vielfalt unverkennbar europäisch bleibt.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "Wirtschaftsordnung",
      statement:
        "Unternehmertum ist legitim; wirtschaftliche Institutionen bleiben dem Gemeinwohl untergeordnet.",
      summary: "Weder entfesselter Kapitalismus noch zentralistischer Sozialismus.",
      body: [
        {
          type: "paragraph",
          text: "Privateigentum, Unternehmertum, Gewinn und wirtschaftlicher Erfolg sind legitim. Nichts davon ist der höchste Zweck einer Gesellschaft. Das Unternehmen ist ein rechtliches und wirtschaftliches Werkzeug — unentbehrlich, aber nicht souverän.",
        },
        {
          type: "paragraph",
          text: "Wo Unternehmen nützliche Güter herstellen, Arbeit und Auskommen schaffen, Wissen entwickeln und den Orten dienen, an denen sie tätig sind, sollen sie gedeihen. Wo geballte Wirtschaftsmacht beginnt, politische Institutionen zu beherrschen, tragfähige Gemeinwesen auszuhöhlen oder lebenswichtige Märkte zu monopolisieren, hat die Gesellschaft das Recht, ihr Schranken zu setzen.",
        },
        {
          type: "paragraph",
          text: "Das ist keine Haltung gegen das Unternehmertum. Es ist eine Haltung gegen Herrschaft. Unser wirtschaftliches Leitbild ist distributistisch im Eigentum und berufsständisch in der Ordnung: viele Eigentümer statt weniger.",
        },
      ] satisfies readonly ContentBlock[],
    },

    property: {
      title: "Eigentum",
      statement:
        "Eine freie Gesellschaft braucht breit gestreutes Eigentum statt dauerhafter Abhängigkeit von einer kleinen Zahl von Institutionen.",
      summary: "Gegen Konzentration hilft Streuung, nicht Abschaffung.",
      body: [
        {
          type: "paragraph",
          text: "Eigentum macht unabhängig und verantwortlich. Wer ein Haus besitzt, einen Hof, eine Werkstatt oder einen Anteil an dem Unternehmen, in dem er arbeitet, hat in der Gesellschaft einen Stand, den kein noch so großer Konsum ersetzt.",
        },
        {
          type: "paragraph",
          text: "Die Antwort auf zusammengeballtes Eigentum ist deshalb nicht, das Eigentum abzuschaffen, sondern es breiter zu streuen: Wohneigentum, Familienunternehmen, selbstständiges Handwerk, kleine und mittlere Unternehmen, Genossenschaften und Belegschaftseigentum, bäuerliche Familienbetriebe, örtliches und regionales Bankwesen.",
        },
        {
          type: "paragraph",
          text: "Eine Gesellschaft, in der Millionen nichts besitzen und einige wenige Institutionen nahezu alles, ist keine Gesellschaft von Eigentümern — was immer ihre Gesetze über das Eigentum sagen mögen.",
        },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "Arbeit",
      statement: "Arbeit hat ihre Würde, aber sie ist nicht der Zweck des menschlichen Daseins.",
      summary: "Die Wirtschaft soll ein Leben tragen und nicht verzehren.",
      body: [
        {
          type: "paragraph",
          text: "Durch Arbeit nehmen Menschen am Leben der Gesellschaft teil, erwerben Können, bringen nützliche Dinge hervor und ernähren Familien. Das zählt, und es verdient Achtung — im Handwerk, in der Landwirtschaft, im Ingenieurwesen, in der Pflege, im Unterricht und in den Facharbeiterberufen ganz besonders.",
        },
        {
          type: "paragraph",
          text: "Aber eine Wirtschaft soll die materielle Grundlage des menschlichen Lebens schaffen und nicht das Leben verzehren, das sie tragen sollte. Wo die Produktivität steigt, sollte ein Teil des Zuwachses als Sicherheit ankommen, als Muße, als Zeit für die Familie und als Unabhängigkeit — nicht allein als höherer Ausstoß.",
        },
        {
          type: "paragraph",
          text: "Automatisierung soll den Menschen wirklich entwürdigende Arbeit abnehmen. Sie darf nicht zum unbefragten Ziel werden, den Menschen aus jeder produktiven Tätigkeit herauszunehmen. Menschliches Können ist selbst ein Gut der Gemeinschaft.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "Technik",
      statement:
        "Technik sollte menschliches Können, Selbstbestimmung und Gemeinschaft stärken, statt die Gesellschaft nach den Zwängen der Technik neu zu ordnen.",
      summary: "Gegen die vermeintliche Unausweichlichkeit der Technik, nicht gegen die Technik.",
      body: [
        {
          type: "paragraph",
          text: "Technische Entwicklung ist nicht dasselbe wie menschlicher Fortschritt. Eine Gesellschaft kann mehr können und dabei gesellschaftlich schwächer, zentralisierter und unfreier werden.",
        },
        {
          type: "paragraph",
          text: "Wir verwerfen die Vorstellung technischer Unausweichlichkeit — die Annahme, dass alles Machbare auch übernommen werden müsse und dass alles, was die Effizienz steigert, als Fortschritt zu gelten habe. Ein Werkzeug, das als freiwilliges Angebot eingeführt wird, kann wirtschaftlich notwendig werden; was notwendig wird, formt die Institutionen um; und die Institutionen ordnen daraufhin die Gesellschaft nach ihm neu.",
        },
        {
          type: "paragraph",
          text: "Den Bürgern sollte ein wirklicher Zugang zu Bargeld bleiben, zu Behörden, die von Angesicht zu Angesicht antworten, zu reparierbaren Erzeugnissen, zum Handel vor Ort und zu einem privaten Raum ohne ständige Überwachung; und wo rechtlich oder sittlich Schwerwiegendes auf dem Spiel steht, sollten Menschen entscheiden. Dass sich etwas machen lässt, verpflichtet niemanden, es auch einzusetzen.",
        },
      ] satisfies readonly ContentBlock[],
    },

    environment: {
      title: "Umwelt",
      statement:
        "Boden, Wasser und die lebendige Natur sind ein Erbe, das zu pflegen, zu schützen und weiterzugeben ist.",
      summary: "Christliche Bewahrung statt Raubbau oder Menschenfeindlichkeit.",
      body: [
        {
          type: "paragraph",
          text: "Wälder, Flüsse, Ackerland, Berge, Küsten und die biologische Vielfalt sind keine beliebig verfügbaren Waren. Eine Generation darf sie nutzen und muss sie erhalten; unbeschränktes Eigentum an ihnen hat sie nicht.",
        },
        {
          type: "paragraph",
          text: "Wir verwerfen einen Umweltschutz, der den Menschen für eine Plage hält, und ebenso eine Wirtschaftsweise, der jede Zerstörung recht ist, sofern sie den kurzfristigen Ertrag steigert. Politik sollte der Landwirtschaft vor Ort den Vorzug geben, gesunden Böden, sauberem Wasser, haltbaren und reparierbaren Erzeugnissen, regionalen Lieferketten, verantwortlicher Forstwirtschaft und der Wiederherstellung geschädigter Lebensräume.",
        },
        {
          type: "paragraph",
          text: "Das Land soll weder Abbaugebiet sein noch Museum, aus dem das gewöhnliche Leben vertrieben wurde. Der Mensch gehört in die Natur hinein — als ihr Sachwalter, verantwortlich für das, was er hinterlässt.",
        },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "Architektur",
      statement:
        "Öffentliches Bauen sollte das menschliche Maß, die Baustoffe der Gegend und die Tradition der Region achten.",
      summary: "Zivilisation zeigt sich im Gebauten — und sie lässt sich wieder gut bauen.",
      body: [
        {
          type: "paragraph",
          text: "Die Architektur prägt, was Menschen unter Schönheit, Zugehörigkeit und Kontinuität verstehen. Europas Städte sollten aufhören, Hässlichkeit und Gesichtslosigkeit für Zeichen des Fortschritts zu halten.",
        },
        {
          type: "paragraph",
          text: "Historische Bauten, Kirchen, gewachsene Straßenbilder und Denkmäler sollten erhalten bleiben, wo immer es vernünftigerweise möglich ist. Neu gebaut werden sollten Orte, in denen Menschen über Generationen wohnen können — und nicht Wegwerfarchitektur, die sich an Verkehrsströmen, Anlageportfolios und kurzen Bauzyklen ausrichtet.",
        },
        {
          type: "statement",
          text: "Eine Zivilisation, die ihrer selbst gewiss ist, sollte wieder schön bauen können.",
        },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Bildung",
      statement:
        "Bildung soll die Zivilisation zuerst weitergeben, ehe sie daran geht, sie zu verändern.",
      summary: "Zuerst das Erbe; die Eltern als erste Erzieher.",
      body: [
        {
          type: "paragraph",
          text: "Jede Generation schuldet der nächsten, sie mit dem vertraut zu machen, was sie selbst empfangen hat. Dazu gehört die ernsthafte Beschäftigung mit dem Christentum, mit der europäischen und der nationalen Geschichte, mit der Antike, mit Philosophie, Literatur, Naturwissenschaft, Mathematik, Musik, Kunst, Handwerk und staatsbürgerlicher Verantwortung.",
        },
        {
          type: "paragraph",
          text: "Der Blick auf die eigene Geschichte muss ehrlich sein: Versagen und Verbrechen gehören beim Namen genannt, ohne dass daraus die Lehre wird, die europäische Zivilisation sei kaum mehr als angehäufte Schuld. Ein Volk, das seine Vorfahren nicht achten kann, hört eines Tages auf, sich um seine Nachkommen zu kümmern.",
        },
        {
          type: "paragraph",
          text: "Die Eltern bleiben die ersten Erzieher ihrer Kinder. Die staatliche Schulaufsicht hat die Verantwortung der Eltern und die Vielfalt der Träger zu achten.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Subsidiarität",
      statement:
        "Politische Autorität sollte auf der jeweils niedrigsten handlungsfähigen Ebene ausgeübt werden.",
      summary: "Verteilte Autorität als Bedingung politischer Freiheit.",
      body: [
        {
          type: "paragraph",
          text: "Wir verwerfen beides: den anarchischen Individualismus und die allumfassende Staatsmacht. Autorität ist notwendig, denn politische Gemeinschaften brauchen Ordnung. Aber sie muss verteilt sein.",
        },
        {
          type: "paragraph",
          text: "Über Familienangelegenheiten sollen die Familien entscheiden, über örtliche Angelegenheiten die Gemeinden, über nationale die Nationen; den Regionen soll eine wirkliche Eigenständigkeit bleiben. Höhere Ebenen sollten vor allem dort eingreifen, wo die niedrigeren eine notwendige Aufgabe nicht hinreichend erfüllen können.",
        },
        {
          type: "paragraph",
          text: "Ballen sich gesellschaftliche, wirtschaftliche, technische und staatliche Macht in wenigen Institutionen, wird wirkliche Freiheit unmöglich. Subsidiarität ist keine Bequemlichkeit der Verwaltung, sondern ein Grundsatz der politischen Freiheit.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Demokratie",
      statement:
        "Regieren im Rahmen der Verfassung, eine breitere Vertretung und Zusammenarbeit, wo das Gemeinwohl sie verlangt.",
      summary: "Wahlen, Schranken, Gegengewichte — und eine Parteienkultur, die dient.",
      body: [
        {
          type: "paragraph",
          text: "Eine Regierung braucht genug Autorität, um das Gemeinwohl zu verteidigen, und sie muss durch das Recht, durch die Subsidiarität, durch institutionelle Gegengewichte und durch die Würde der Person gebunden bleiben. Wir bekennen uns zu Wahlen, zu verfassungsmäßigen Schranken und zur Beteiligung der Bürger.",
        },
        {
          type: "paragraph",
          text: "Die Vertretung des Volkes sollte über die Apparate der Berufspolitiker hinausreichen. Neben die Vertretung nach Gebieten kann die Vertretung der Familien, der Gemeinden, der Berufe, der Arbeitnehmer, der Landwirtschaft, der Universitäten und anderer dauerhafter Einrichtungen der Bürgergesellschaft treten.",
        },
        {
          type: "paragraph",
          text: "Politische Meinungsverschiedenheit ist legitim und notwendig; dauerhafter Parteienkampf ist es nicht. Wo die dauerhaften Interessen einer Nation auf dem Spiel stehen, sollten Parteien über den Parteivorteil hinaus handeln können. Der Staat ist notwendig. Der Staat ist nicht Gott.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Außenpolitik",
      statement:
        "Strategische Unabhängigkeit, Klugheit und ein starker Vorbehalt gegen jeden vermeidbaren Krieg.",
      summary: "Unabhängigkeit statt imperialer Ansprüche.",
      body: [
        {
          type: "paragraph",
          text: "Die europäischen Nationen sollten in der Lage sein, sich selbst zu verteidigen, ihre Grenzen zu sichern und bei Nahrung, Energie, Infrastruktur, Medizin und den lebenswichtigen Industrien strategisch unabhängig zu bleiben. Wer für die Grundlagen des eigenen Überlebens dauerhaft von fernen Mächten abhängt, hat keine gesicherte Ordnung, sondern ein Risiko, das nie geprüft wurde.",
        },
        {
          type: "paragraph",
          text: "Wir verwerfen ebenso die ideologischen Kriege, die fremde Zivilisationen nach abstrakten politischen Modellen umbauen wollen. Zivilisationen haben verschiedene Geschichten, und friedliche Beziehungen setzen keine kulturelle Gleichförmigkeit voraus.",
        },
        {
          type: "paragraph",
          text: "Außenpolitik sollte sich von der Klugheit leiten lassen, vom berechtigten nationalen Interesse, vom Schutz der Unschuldigen, wo er wirklich möglich ist, und von einem starken Vorbehalt gegen jeden vermeidbaren Krieg.",
        },
      ] satisfies readonly ContentBlock[],
    },
  },
};

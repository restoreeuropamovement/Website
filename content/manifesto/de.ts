import type { ContentBlock } from "@/lib/content-types";
import type { ManifestoText } from "./index";

export const manifestoText: ManifestoText = {
  meta: {
    title: "Manifest der europäischen integralen Erneuerung",
    subtitle: "Für eine christliche, europäische Zivilisation nach menschlichem Maß",
    status: "Gründungsdokument · Text in Prüfung vor der förmlichen Annahme",
  },
  labels: {
    eyebrow: "Gründungsdokument",
    download: "Manifest herunterladen",
    contents: "Inhalt",
    contentsNavLabel: "Inhaltsverzeichnis des Manifests",
    progressLabel: "Lesefortschritt",
    copyDocument: "Link zum Manifest kopieren",
    copySection: "Link zu Abschnitt {numeral}, {title} kopieren",
    reference:
      "Maßgeblich ist die englische Fassung. Wo eine Passage innerhalb der Bewegung umstritten ist, wird die Meinungsverschiedenheit festgehalten und nicht durch eine stillschweigende Änderung aufgelöst.",
  },
  sections: {
    preamble: {
      title: "Präambel",
      summary: "Europa ist eine Zivilisation und ein Erbe, das weitergegeben und nicht erfunden wurde.",
      body: [
        { type: "lead", text: "Europa ist mehr als ein Kontinent, mehr als ein Markt, mehr als ein Verwaltungsraum." },
        {
          type: "paragraph",
          text: "Es ist eine Zivilisation: hervorgegangen aus dem Christentum und dem Erbe der Antike, aus geschichtlich gewachsenen Völkern, Sprachen und Nationen, aus Generationen von Familien, aus gestalteten Landschaften, Städten und Dörfern, Kirchen und Klöstern, aus Kunst, Philosophie, Recht und Handwerk, aus Opfer und Erinnerung.",
        },
        {
          type: "paragraph",
          text: "Dieses Erbe haben nicht abstrakte, der Geschichte enthobene Individuen geschaffen. Es wurde von einer Generation an die nächste weitergegeben.",
        },
        {
          type: "paragraph",
          text: "Edmund Burke hat diesem Gedanken 1790 seine bleibende Fassung gegeben, gegen eine Revolution, die allein aus der Vernunft noch einmal von vorn beginnen wollte. Die Gesellschaft, schrieb er, sei eine Teilhaberschaft — und weil ihre Zwecke in einem einzelnen Menschenleben nicht zu erreichen seien, bestehe sie „nicht nur zwischen denen, die leben, sondern zwischen denen, die leben, denen, die tot sind, und denen, die noch geboren werden“. Was auf den folgenden Seiten sonst auch strittig sein mag: Dieser Satz ist die Voraussetzung, die unter allem liegt.",
        },
        {
          type: "paragraph",
          text: "Das heutige Europa aber behandelt das Erben selbst mehr und mehr als etwas Verdächtiges.",
        },
        {
          type: "paragraph",
          text: "Die herrschende Ordnung hat die Selbstbestimmung des Einzelnen über die Verpflichtung gestellt, den Verbrauch über die Kontinuität, das Wirtschaftswachstum über die Gemeinschaft, das technisch Machbare über das menschliche Urteil und die Gleichförmigkeit der Verwaltung über die Eigenart der Völker und der Orte. Und sie hat Schritt für Schritt jene Einrichtungen geschwächt, die einst zwischen dem vereinzelten Menschen und der zentralen Macht standen: Familie, Pfarrei, Zunft, Gemeinde, Region und Nation.",
        },
        {
          type: "paragraph",
          text: "Wir verwerfen die Annahme, dieser Vorgang sei ein unausweichlicher Fortschritt.",
        },
        {
          type: "paragraph",
          text: "Wir verwerfen ebenso die Vorstellung, Erneuerung heiße, ein bestimmtes Jahrhundert mechanisch nachzubilden. Die Vergangenheit kannte Ungerechtigkeit, Armut, Gewalt und Irrtum. Erneuerung ist keine historische Nachstellung.",
        },
        {
          type: "paragraph",
          text: "Sie heißt, die Grundsätze wiederzugewinnen, die die moderne Gesellschaft verworfen hat, und sie mit Verstand auf die Verhältnisse der Gegenwart anzuwenden.",
        },
        {
          type: "paragraph",
          text: "Unser Ziel ist daher weder die Revolution um ihrer selbst willen noch die Konservierung der bestehenden Ordnung.",
        },
        { type: "statement", text: "Unser Ziel ist die Erneuerung." },
      ] satisfies readonly ContentBlock[],
    },

    "moral-order": {
      title: "Die sittliche Ordnung",
      summary:
        "Eine politische Gemeinschaft kann dem Gut, zu dessen Schutz sie besteht, nicht auf Dauer neutral gegenüberstehen.",
      body: [
        {
          type: "lead",
          text: "Wir verwerfen den liberalen Satz, eine politische Gemeinschaft könne dem Guten gegenüber auf Dauer neutral bleiben.",
        },
        {
          type: "paragraph",
          text: "Jede Zivilisation verkörpert Urteile darüber, was Schutz verdient, was gefördert werden soll, worin die Gerechtigkeit besteht und welche Art von Mensch sie heranzubilden hofft.",
        },
        {
          type: "paragraph",
          text: "Wir bekennen: Die sittliche Wahrheit entspringt weder der Vorliebe des Einzelnen noch dem Befehl des Staates, weder der Nachfrage des Marktes noch dem technisch Möglichen.",
        },
        { type: "statement", text: "Der Mensch hat Würde, weil er eine von Gott geschaffene Person ist." },
        {
          type: "paragraph",
          text: "Politische Autorität ist deshalb weder dazu da, einen neuen Menschen hervorzubringen, noch bloß dazu, konkurrierende Begehrlichkeiten zu verwalten. Ihr eigentlicher Zweck ist das Gemeinwohl: jene gesellschaftlichen Bedingungen, unter denen Personen, Familien und Gemeinschaften tugendhaft leben und gedeihen können.",
        },
        {
          type: "paragraph",
          text: "Die europäische Zivilisation lässt sich ohne das Christentum nicht verstehen. Wir bekennen uns daher zum christlichen und insbesondere katholischen Erbe Europas als einem Grundbestandteil dieser Zivilisation.",
        },
        {
          type: "paragraph",
          text: "Was wir zurückweisen, ist nicht der Widerspruch, sondern die Lehre, das öffentliche Leben Europas habe sich zu verhalten, als hätte es sein eigenes religiöses Erbe nie gegeben.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-not-atom": {
      title: "Die Person ist kein Atom",
      summary: "Wir gehen nicht vom selbstbestimmten Individuum aus, sondern von der Person in ihren Bindungen.",
      body: [
        { type: "lead", text: "Der liberale Individualismus setzt beim selbstbestimmten Individuum an." },
        { type: "statement", text: "Wir setzen bei der Person in ihren Bindungen an." },
        {
          type: "paragraph",
          text: "Jeder Mensch tritt in eine Welt ein, in der es Eltern schon gibt, Familie, Sprache, Kultur, Heimat, Pflichten, Geschichte und sittliche Verbindlichkeiten. Das sind keine sinnlosen Fesseln, von denen es sich ohne Ende zu befreien gälte. Sie gehören zu den Bedingungen, unter denen ein volles menschliches Leben überhaupt möglich wird.",
        },
        { type: "paragraph", text: "Rechte sind wirklich; ohne Pflichten aber haben sie keinen Bestand." },
        {
          type: "paragraph",
          text: "Die Freiheit ist wirklich; sie ist aber nicht einfach die Abwesenheit von Zwang. Zur wirklichen Freiheit gehört die Fähigkeit, das Gute zu ergreifen.",
        },
        { type: "paragraph", text: "Eine gesunde politische Ordnung hält deshalb im Gleichgewicht:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "Freiheit und Verantwortung,",
            "Rechte und Pflichten,",
            "die Würde des Einzelnen und seine Verpflichtung gegenüber der Gemeinschaft,",
            "Autorität und Subsidiarität.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "Die Familie",
      summary:
        "Die erste Institution der Zivilisation: Sie geht dem Staat voraus, und sie muss materiell möglich sein.",
      body: [
        { type: "lead", text: "Die Familie ist die erste Institution der Zivilisation, und sie geht dem Staat voraus." },
        {
          type: "paragraph",
          text: "Wir bekennen uns zur Familie, die sich um die Ehe von Mann und Frau bildet, um die Erziehung der Kinder, um die Verpflichtung zwischen den Generationen und um die Sorge für die Jungen und die Alten: Sie ist die grundlegende gesellschaftliche Institution, auf die jede politische Gemeinschaft angewiesen ist.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Eine Wirtschaft, die Familiengründung finanziell unmöglich macht, ist aus der Ordnung geraten.",
            "Eine Arbeitswelt, die Elternschaft als Störfall behandelt, ist aus der Ordnung geraten.",
            "Ein Wohnungswesen, das dauerhaftes Eigentum zum unerreichbaren Vorrecht macht, ist aus der Ordnung geraten.",
          ],
        },
        {
          type: "paragraph",
          text: "Eine Kultur, die zu immerwährender Unreife, zu Konsum und zur Vereinzelung erzieht, kann eine Zivilisation nicht tragen.",
        },
        {
          type: "paragraph",
          text: "Die Politik sollte Familiengründung deshalb materiell möglich machen: durch bezahlbares Wohnen, durch ein Steuerrecht, das Familien entlastet, durch die Unterstützung der Eltern, durch sichere Arbeitsverhältnisse und dadurch, dass Zeit bleibt, die nicht der Erwerbsarbeit gehört.",
        },
        {
          type: "paragraph",
          text: "Europas demografische Erneuerung sollte vor allem daher kommen, dass Familienleben für die Europäer selbst wieder möglich wird, und nicht daraus, dass dauerhafte Zuwanderung in großem Umfang an die Stelle der Geburt und der Kontinuität künftiger Generationen tritt.",
        },
      ] satisfies readonly ContentBlock[],
    },

    nation: {
      title: "Nation, Volk und Heimat",
      summary:
        "Das Menschsein ist allen gemeinsam, Zivilisation gibt es nur im Besonderen. Die Völker Europas dürfen ihre Kontinuität wahren.",
      body: [
        { type: "lead", text: "Das Menschsein ist allen gemeinsam. Zivilisation gibt es nur im Besonderen." },
        {
          type: "paragraph",
          text: "Menschen gehören nicht allein der Menschheit im Allgemeinen an, sondern wirklichen Gemeinschaften, die die Geschichte geformt hat.",
        },
        {
          type: "paragraph",
          text: "Die Nation ist deshalb nicht bloß ein Verwaltungsbezirk. Sie ist eine Gemeinschaft über die Generationen hinweg, zusammengehalten von geschichtlicher Erinnerung, von Sprache, Sitte, Institutionen und einem gemeinsamen Gebiet und von dem Bewusstsein, ein gemeinsames Schicksal zu teilen.",
        },
        {
          type: "paragraph",
          text: "Die Völker Europas haben ein berechtigtes Interesse daran, ihre geschichtliche Kontinuität zu wahren.",
        },
        {
          type: "paragraph",
          text: "Die gleiche Würde aller Menschen verlangt nicht, dass jedes Land kulturell gegen jedes andere austauschbar wird.",
        },
        {
          type: "list",
          marker: "none",
          items: [
            "Eine polnische Stadt soll erkennbar polnisch bleiben.",
            "Eine italienische Stadt soll erkennbar italienisch bleiben.",
            "Ein französisches Dorf soll erkennbar französisch bleiben.",
          ],
        },
        {
          type: "paragraph",
          text: "Die überlieferten Kulturen und die Völker Europas zu bewahren ist an sich nicht feindseliger, als die Kulturen und die geschichtliche Identität anderer Zivilisationen zu bewahren.",
        },
        { type: "statement", text: "Wir verteidigen deshalb die Kontinuität." },
      ] satisfies readonly ContentBlock[],
    },

    immigration: {
      title: "Einwanderung und Integration",
      summary:
        "Aufnahme in einem Maß, das wirkliche Integration zulässt; Staatsbürgerschaft als Zugehörigkeit, nicht als bloßer Aufenthalt.",
      body: [
        {
          type: "lead",
          text: "Einwanderungspolitik hat dem langfristigen Gemeinwohl des aufnehmenden Landes zu dienen.",
        },
        {
          type: "paragraph",
          text: "Keine Gesellschaft verträgt demografischen Wandel in unbegrenztem Umfang, ohne dass es Folgen hätte — für das Vertrauen der Menschen untereinander, für Wohnraum und Infrastruktur, für die kulturelle Kontinuität und den politischen Zusammenhalt.",
        },
        {
          type: "paragraph",
          text: "Einwanderung sollte deshalb auf ein Maß begrenzt bleiben, das wirkliche Integration, gesellschaftliche Stabilität und die demografische wie kulturelle Kontinuität der aufnehmenden Gesellschaft zulässt.",
        },
        { type: "paragraph", text: "Die Staatsbürgerschaft sollte Zugehörigkeit bedeuten und nicht bloßen Aufenthalt." },
        {
          type: "paragraph",
          text: "Die Einbürgerung sollte voraussetzen, dass jemand die Landessprache wirklich beherrscht, die Geschichte und die Institutionen des Landes kennt, die verfassungsmäßige Ordnung achtet und dem Land wirklich verbunden ist.",
        },
        { type: "statement", text: "Wer auf rechtmäßigem Weg Bürger wird, ist Bürger und muss als Bürger behandelt werden." },
        {
          type: "paragraph",
          text: "Humanitäre Verpflichtungen sind nicht so auszulegen, dass die europäischen Gesellschaften die Verfügung über ihre demografische Zukunft aus der Hand geben müssten.",
        },
        { type: "paragraph", text: "Grenzen sind legitime Einrichtungen." },
        {
          type: "paragraph",
          text: "Gastfreundschaft ohne Ordnung zerstört am Ende die Bedingungen, unter denen Gastfreundschaft überhaupt möglich ist.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "Europa als Zivilisation von Nationen",
      summary: "Zusammenarbeit souveräner Nationen, durchgehend bestimmt von der Subsidiarität.",
      body: [
        { type: "lead", text: "Europäische Einheit darf nicht den Preis haben, dass die europäischen Nationen zerstört werden." },
        {
          type: "paragraph",
          text: "Wir verwerfen beides: die vollständige Abschottung der Nationen ebenso wie den Umbau Europas zu einem zentralisierten, nachnationalen Verwaltungsstaat.",
        },
        {
          type: "paragraph",
          text: "Europa sollte stattdessen eine Gemeinschaft souveräner Nationen werden, die eine Zivilisation teilen und dort zusammenarbeiten, wo die Zusammenarbeit ihren gemeinsamen Interessen wirklich dient.",
        },
        {
          type: "paragraph",
          text: "Der Grundsatz, der die politische Ordnung Europas bestimmen sollte, ist die Subsidiarität:",
        },
        {
          type: "statement",
          text: "Nichts soll auf einer höheren Ebene entschieden werden, was auf einer niedrigeren sachgerecht entschieden werden kann.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Das Dorf soll nicht unnötig Zuständigkeiten an die Region abtreten.",
            "Die Region soll nicht unnötig Zuständigkeiten an die Nation abtreten.",
            "Die Nation soll nicht unnötig Zuständigkeiten an gesamteuropäische Institutionen abtreten.",
          ],
        },
        {
          type: "paragraph",
          text: "Europa sollte in der Verteidigung zusammenwirken, bei den Grenzen, der strategischen Infrastruktur, der Wissenschaft, dem Umweltschutz und der Bewahrung der gemeinsamen Zivilisation — und dabei die geschichtliche Identität und die politische Eigenständigkeit seiner Nationen erhalten.",
        },
        { type: "paragraph", text: "Unser Ziel ist kein einheitliches Europa." },
        { type: "statement", text: "Es ist ein Europa, dessen Vielfalt unverkennbar europäisch bleibt." },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "Die Wirtschaftsordnung",
      summary: "Weder entfesselter Kapitalismus noch zentralistischer Sozialismus: viele Eigentümer statt weniger.",
      body: [
        { type: "lead", text: "Wir verwerfen beides: den entfesselten Kapitalismus und den zentralistischen Sozialismus." },
        { type: "statement", text: "Die Wirtschaft ist für den Menschen da. Der Mensch ist nicht für die Wirtschaft da." },
        {
          type: "paragraph",
          text: "Diese Haltung ist älter als wir. Leo XIII. hat ihr 1891 in Rerum Novarum ihre Gestalt gegeben: Er verteidigte gegen den Sozialismus das Recht, produktives Eigentum zu besitzen, und verurteilte zugleich die Zustände, die der industrielle Kapitalismus hervorgebracht hatte — er weigerte sich also anzuerkennen, dass die beiden bereitliegenden Antworten die einzigen seien. Hilaire Belloc hat das Argument 1912 in The Servile State weitergetrieben. Eine Gesellschaft mit zusammengeballtem Eigentum, sagte er voraus, werde nicht sozialistisch werden, sondern sich in etwas anderem einrichten: in Sicherheit für die Besitzlosen, erkauft mit dauerhafter Unfreiheit. Wir meinen, er hat die Richtung, in die es geht, richtig gelesen.",
        },
        { type: "paragraph", text: "Das Unternehmen ist ein rechtliches und wirtschaftliches Werkzeug, keine souveräne Institution." },
        {
          type: "paragraph",
          text: "Unternehmen erfüllen eine unentbehrliche Aufgabe, wenn sie nützliche Güter herstellen, Arbeit und Auskommen schaffen, Wissen entwickeln und den Gemeinwesen dienen, in denen sie tätig sind.",
        },
        { type: "paragraph", text: "Aber die Macht der Unternehmen muss dem Gemeinwohl untergeordnet bleiben." },
        {
          type: "paragraph",
          text: "Kein Unternehmen sollte tatsächlich in der Lage sein, politische Institutionen zu beherrschen, tragfähige Gemeinwesen zu zerstören, Bürger in dauerhafte Abhängigkeit zu manipulieren, lebenswichtige Märkte zu monopolisieren oder die Gesellschaft allein nach den Erfordernissen von Gewinn und Effizienz umzuordnen.",
        },
        {
          type: "list",
          marker: "none",
          items: ["Gewinn ist legitim.", "Unternehmertum ist legitim.", "Wirtschaftlicher Erfolg ist legitim."],
        },
        { type: "paragraph", text: "Nichts davon aber ist der höchste Zweck einer Gesellschaft." },
        { type: "paragraph", text: "Das rechte Verhältnis muss deshalb klar ausgesprochen sein:" },
        {
          type: "statement",
          text: "Die Wirtschaft ist für die Person, die Familie und die Gemeinschaft da; die Person, die Familie und die Gemeinschaft sind nicht für die Wirtschaft da.",
        },
        { type: "paragraph", text: "Wo Unternehmen zum Gedeihen der Menschen beitragen, sollen sie gedeihen." },
        {
          type: "paragraph",
          text: "Wo geballte Wirtschaftsmacht den echten Wettbewerb bedroht, das Familienleben, die politische Unabhängigkeit, die Würde des Menschen oder den Fortbestand der Gemeinwesen vor Ort, hat die Gesellschaft die rechtmäßige Befugnis, ihr Schranken zu setzen.",
        },
        {
          type: "paragraph",
          text: "Wir erstreben weder die Abschaffung des privaten Unternehmertums noch die staatliche Übernahme des Wirtschaftslebens.",
        },
        {
          type: "paragraph",
          text: "Wir erstreben eine Wirtschaft, in der das Unternehmertum der Zivilisation dient, statt über sie zu herrschen.",
        },
        {
          type: "paragraph",
          text: "Eigentum ist eine wichtige Quelle von Unabhängigkeit und Verantwortung. Die Antwort auf übermäßig zusammengeballtes Eigentum ist deshalb nicht, das Eigentum abzuschaffen, sondern es breiter zu streuen.",
        },
        { type: "paragraph", text: "Unser wirtschaftliches Leitbild ist distributistisch im Eigentum und berufsständisch in der Ordnung." },
        { type: "paragraph", text: "Wir erstreben eine Gesellschaft, die geprägt ist von:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "breit gestreutem Wohneigentum;",
            "Familienunternehmen;",
            "selbstständigem Handwerk und freien Gewerben;",
            "kleinen und mittleren Unternehmen;",
            "Genossenschaften und Belegschaftseigentum;",
            "bäuerlichen Familienbetrieben;",
            "örtlichem und regionalem Bankwesen;",
            "der Lehre und der beruflichen Bildung;",
            "starken Berufsverbänden;",
            "Schranken gegen monopolistische Konzentration.",
          ],
        },
        {
          type: "paragraph",
          text: "Eine Zivilisation, in der Millionen nichts besitzen, während einige wenige Konzerne, Finanzinstitute oder Staatsbehörden nahezu alles besitzen, lässt sich sinnvollerweise keine Gesellschaft von Eigentümern nennen.",
        },
        { type: "statement", text: "Das Ziel muss deshalb lauten: viele Eigentümer statt weniger Eigentümer." },
      ] satisfies readonly ContentBlock[],
    },

    corporatism: {
      title: "Berufsständische Ordnung, Zünfte und das Gemeinwohl",
      summary: "Berufsständische Körperschaften mit wirklichem Gewicht im Wirtschaftsleben — und unabhängig vom Staat.",
      body: [
        {
          type: "lead",
          text: "Der Gegensatz von Arbeit und Kapital sollte nicht als das dauerhafte Ordnungsprinzip des Wirtschaftslebens behandelt werden.",
        },
        {
          type: "paragraph",
          text: "Arbeitnehmer, Unternehmer, Handwerker, Bauern und freie Berufe haben Anteil an einem gemeinsamen wirtschaftlichen Organismus.",
        },
        {
          type: "paragraph",
          text: "Zünfte in zeitgemäßer Gestalt, Kammern und berufsständische Körperschaften sollten deshalb an der Ordnung des Wirtschaftslebens mitwirken.",
        },
        {
          type: "paragraph",
          text: "Diese Einrichtungen sollten die fachlichen Standards setzen, die Lehre ordnen, die Arbeitsbedingungen regeln, die Schlichtung ermöglichen und ihre Branche vertreten — und dabei hinreichend unabhängig von der zentralen Staatsverwaltung bleiben.",
        },
        {
          type: "paragraph",
          text: "Auch die politische Vertretung selbst kann über die Vertretung nach Gebieten hinausgehen und die wichtigsten gesellschaftlichen und beruflichen Körperschaften geordnet zu Wort kommen lassen.",
        },
        { type: "paragraph", text: "Diese berufsständische Ordnung muss der Subsidiarität untergeordnet bleiben." },
        {
          type: "paragraph",
          text: "Wir verwerfen ein System, in dem die Berufsorganisationen zu bloßen Werkzeugen eines allmächtigen Staates werden.",
        },
        { type: "statement", text: "Weder der Konzern noch der Staat darf die Bürgergesellschaft vereinnahmen." },
      ] satisfies readonly ContentBlock[],
    },

    finance: {
      title: "Gegen die Herrschaft der Finanzwirtschaft",
      summary:
        "Die Finanzwirtschaft ist notwendig, ihre Herrschaft ist es nicht. Boden und Wohnraum sind zum Wohnen da.",
      body: [
        { type: "lead", text: "Die Finanzwirtschaft ist notwendig." },
        { type: "statement", text: "Ihre Herrschaft ist es nicht." },
        {
          type: "paragraph",
          text: "Ihre eigentliche Aufgabe ist es, Ersparnisse in die produktive Tätigkeit zu lenken, in den Wohnungsbau, in die Unternehmen und in langfristige Investitionen.",
        },
        {
          type: "paragraph",
          text: "Eine Wirtschaft, in der Spekulation, aufgeblähte Vermögenspreise, ausbeuterische Verschuldung und finanzielle Wertabschöpfung den Ton angeben, trennt den Reichtum nach und nach von der produktiven Leistung.",
        },
        {
          type: "paragraph",
          text: "Die Politik sollte deshalb der produktiven Investition den Vorzug geben vor der Spekulation und dem Eigentum der Familien vor der dauerhaften Verschuldung.",
        },
        {
          type: "paragraph",
          text: "Boden und Wohnraum sollen vor allem dem Wohnen und dem Zusammenleben dienen und nicht zu endlos steigenden Anlagegütern werden, die sich von den Löhnen gelöst haben.",
        },
        { type: "paragraph", text: "Märkte sind nützliche Einrichtungen." },
        { type: "statement", text: "Sittliche Instanzen sind sie nicht." },
        {
          type: "paragraph",
          text: "Wo der Markt die Grundlagen untergräbt, auf die eine Gesellschaft angewiesen ist, hat die politische Gemeinschaft das Recht, ihn zu regeln.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "Die Technik muss dem Menschen dienen",
      summary: "Gegen die vermeintliche Unausweichlichkeit der Technik. Die Maschine muss sich dem Menschen anpassen.",
      body: [
        { type: "lead", text: "Technische Entwicklung ist nicht dasselbe wie menschlicher Fortschritt." },
        {
          type: "paragraph",
          text: "Eine Gesellschaft kann technisch weiter vorankommen und dabei gesellschaftlich schwächer werden, seelisch kränker, politisch zentralisierter und für die Natur zerstörerischer.",
        },
        {
          type: "paragraph",
          text: "Wir verwerfen deshalb die Vorstellung technischer Unausweichlichkeit: die Annahme, dass alles Erfindbare auch übernommen werden müsse und dass alles, was die Effizienz steigert, als Fortschritt zu gelten habe.",
        },
        { type: "paragraph", text: "Das technische System neigt von sich aus zur Ausdehnung." },
        {
          type: "paragraph",
          text: "Eine Technik, die als freiwilliges Angebot eingeführt wird, kann wirtschaftlich notwendig werden. Was notwendig wird, formt die Institutionen. Und die Institutionen ordnen daraufhin die Gesellschaft nach den Erfordernissen der Technik neu.",
        },
        { type: "paragraph", text: "Am Ende dieser Kette passt sich der Mensch der Maschine an." },
        {
          type: "paragraph",
          text: "Ivan Illich hat diese Abfolge 1973 in Tools for Conviviality beschrieben: Ein Werkzeug überschreite eine zweite Schwelle, jenseits deren es dem Zweck, um dessentwillen es übernommen wurde, nicht mehr dient, sondern eigene Zwecke aufzwingt — seine Beispiele waren die Medizin, die Schule und das Automobil, und von keinem dieser drei glaubte er, dass irgendjemand sich ihm freiwillig unterworfen hätte. E. F. Schumacher veröffentlichte im selben Jahr Small Is Beautiful und fragte, wie eine Wirtschaftslehre aussähe, die das Maß des menschlichen Lebens als Schranke begreift und nicht als lästiges Hindernis. Keiner der beiden war ein Reaktionär, und bequeme Lektüre ist auch für uns keiner von beiden.",
        },
        { type: "paragraph", text: "Unser Grundsatz lautet umgekehrt:" },
        { type: "statement", text: "Die Maschine muss sich dem Menschen anpassen." },
        {
          type: "paragraph",
          text: "Jede Technik ist danach zu beurteilen, ob sie die Selbstbestimmung des Menschen, das Familienleben, die Gemeinschaft, die sinnvolle Arbeit, die Privatsphäre, die politische Dezentralisierung und die natürliche Umwelt stärkt oder schwächt.",
        },
        {
          type: "paragraph",
          text: "Wir unterscheiden deshalb zwischen einer Technik, die wirklichen menschlichen Bedürfnissen dient, und einer Technik, deren hauptsächliche Wirkung Abhängigkeit, Überwachung, Zerstreuung oder gesellschaftliche Vereinzelung ist.",
        },
        {
          type: "paragraph",
          text: "Medizin, Sanitärversorgung, wissenschaftliche Erkenntnis und ein wirklich nützliches Ingenieurwesen sind keine Gegner.",
        },
        { type: "paragraph", text: "Ebenso wenig muss jeder überlieferte Brauch erhalten bleiben, bloß weil er überliefert ist." },
        { type: "paragraph", text: "Unsere Lehre ist keine Romantik des Ursprünglichen." },
        { type: "statement", text: "Sie ist die Unterordnung der Technik." },
      ] satisfies readonly ContentBlock[],
    },

    "human-scale-life": {
      title: "Das Recht auf ein Leben nach menschlichem Maß",
      summary: "Die gewöhnliche Teilhabe am gesellschaftlichen Leben darf keine vollständige technische Abhängigkeit voraussetzen.",
      body: [
        {
          type: "lead",
          text: "Der Bürger von heute braucht immer häufiger technische Systeme, nur um am gewöhnlichen gesellschaftlichen Leben teilzunehmen.",
        },
        { type: "paragraph", text: "Diese Abhängigkeit sollte nicht unbegrenzt sein." },
        { type: "paragraph", text: "Den Bürgern sollte ein wirklicher Zugang bleiben zu:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "Bargeld;",
            "Behörden, die von Angesicht zu Angesicht antworten;",
            "nichtdigitalen Ausweisen, wo es praktikabel ist;",
            "gedruckten Büchern und Lehrmitteln;",
            "reparierbaren Erzeugnissen;",
            "dem Handel vor Ort;",
            "privaten Räumen ohne ständige Überwachung;",
            "Menschen, die entscheiden, wo rechtlich oder sittlich Schwerwiegendes auf dem Spiel steht.",
          ],
        },
        {
          type: "paragraph",
          text: "Kinder sind besonders vor Wirtschaftszweigen zu schützen, deren Ertrag davon abhängt, seelische Abhängigkeit und die Bindung der Aufmerksamkeit ins Äußerste zu treiben.",
        },
        {
          type: "paragraph",
          text: "Künstliche Intelligenz und Automatisierung sind nicht allein an der Produktivität zu messen, sondern an ihren Wirkungen auf das menschliche Können, auf die Beschäftigung, auf die Selbstbestimmung und auf die Macht der Institutionen.",
        },
        {
          type: "statement",
          text: "Dass sich etwas machen lässt, verpflichtet niemanden, es auch einzusetzen.",
        },
      ] satisfies readonly ContentBlock[],
    },

    stewardship: {
      title: "Die Bewahrung der natürlichen Welt",
      summary: "Die Natur ist weder eine Ware ohne Grenzen noch eine Gottheit — sie ist ein anvertrautes Erbe.",
      body: [
        { type: "lead", text: "Die natürliche Welt ist weder eine Ware ohne Grenzen noch eine Gottheit, die anzubeten wäre." },
        { type: "statement", text: "Sie ist ein Erbe, das dem Menschen anvertraut ist." },
        {
          type: "paragraph",
          text: "Burke hat den Gedanken genauer gefasst, als wir es können. 1790 nannte er die jeweils Lebenden „zeitweilige Besitzer und Pächter auf Lebenszeit“ im Gemeinwesen, die sich nicht für dessen unumschränkte Herren halten sollten. Ihm ging es um Verfassungen und nicht um Wälder; der Bau der Verpflichtung aber ist derselbe, und er ist der Grund, weshalb dieser Abschnitt überhaupt in einem politischen Dokument steht.",
        },
        {
          type: "paragraph",
          text: "Wälder, Flüsse, Ackerland, Berge, Küsten und die biologische Vielfalt sind nicht nur deshalb zu schützen, weil sie wirtschaftlichen Wert haben, sondern weil die menschliche Zivilisation selbst auf ein beständiges Verhältnis zur natürlichen Welt angewiesen ist.",
        },
        { type: "paragraph", text: "Wir verwerfen einen Umweltschutz, der den Menschen von Grund auf für einen Schmarotzer hält." },
        {
          type: "paragraph",
          text: "Wir verwerfen ebenso eine Wirtschaftsideologie, der jede Zerstörung recht ist, sofern sie den kurzfristigen Ertrag steigert.",
        },
        { type: "paragraph", text: "Die Umweltpolitik sollte fördern:" },
        {
          type: "list",
          items: [
            "die Landwirtschaft vor Ort,",
            "gesunde Böden,",
            "sauberes Wasser,",
            "haltbare Erzeugnisse,",
            "die Reparatur statt der Wegwerfware,",
            "regionale Lieferketten,",
            "eine verantwortliche Forstwirtschaft,",
            "die Wiederherstellung geschädigter Lebensräume,",
            "und Siedlungsformen, die sowohl die menschliche Gemeinschaft als auch die Naturlandschaft erhalten.",
          ],
        },
        {
          type: "paragraph",
          text: "Das Land darf weder Abbaugebiet der Industrie werden noch Museum, aus dem das gewöhnliche menschliche Leben vertrieben ist.",
        },
        { type: "statement", text: "Der Mensch gehört in die Natur hinein — aber als ihr Sachwalter." },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "Stadt, Dorf und Architektur",
      summary: "Zivilisation zeigt sich im Gebauten. Eine Gesellschaft, die ihrer selbst gewiss ist, kann wieder schön bauen.",
      body: [
        { type: "lead", text: "Zivilisation drückt sich im Gebauten aus." },
        { type: "paragraph", text: "Die Architektur prägt, was Menschen unter Schönheit, Zugehörigkeit und Kontinuität verstehen." },
        {
          type: "paragraph",
          text: "Der Einspruch gegen die Stadtplanung der Nachkriegsjahrzehnte kam nicht zuerst von Konservativen. Jane Jacobs erhob ihn 1961 in The Death and Life of Great American Cities: Die Planer zerstörten gerade jenes dichte, gemischte, unscheinbare Leben auf der Straße, das die Viertel überhaupt erst sicher und bewohnbar machte. Christopher Alexander und seine Mitarbeiter versuchten 1977 in A Pattern Language zu beschreiben, worin die Alternative in der Praxis bestünde — bis hinunter zur Breite eines Türdurchgangs. Wir borgen lieber bei denen, die diese Arbeit geleistet haben, als eine Vorliebe für das Schöne zu bekunden und es dabei bewenden zu lassen.",
        },
        {
          type: "paragraph",
          text: "Europas Städte sollten deshalb aufhören, Hässlichkeit und Gesichtslosigkeit für Zeichen des Fortschritts zu halten.",
        },
        {
          type: "paragraph",
          text: "Öffentliches Bauen sollte das menschliche Maß achten, die Baustoffe der Gegend, die Tradition der Region und den gewachsenen Charakter der historischen Ortsbilder.",
        },
        {
          type: "paragraph",
          text: "Historische Bauten, Kirchen, gewachsene Straßenbilder und Denkmäler sollten erhalten bleiben, wo immer es vernünftigerweise möglich ist.",
        },
        {
          type: "paragraph",
          text: "Neu gebaut werden sollten Orte, in denen Menschen über Generationen wohnen können — und nicht Wegwerfumgebungen, die sich vor allem an Verkehrsströmen, Anlageportfolios und kurzfristiger Baurechnung ausrichten.",
        },
        { type: "statement", text: "Eine Zivilisation, die ihrer selbst gewiss ist, sollte wieder schön bauen können." },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Bildung",
      summary: "Das Erbe weitergeben, ehe man daran geht, es zu verändern; die Eltern bleiben die ersten Erzieher.",
      body: [
        { type: "lead", text: "Bildung soll die Zivilisation zuerst weitergeben, ehe sie daran geht, sie zu verändern." },
        {
          type: "paragraph",
          text: "Jede Generation schuldet der nächsten, sie mit dem vertraut zu machen, was sie selbst empfangen hat.",
        },
        { type: "paragraph", text: "Zur Bildung gehört deshalb die ernsthafte Beschäftigung mit:" },
        {
          type: "list",
          items: [
            "dem Christentum,",
            "der europäischen und der nationalen Geschichte,",
            "der Antike,",
            "der Philosophie,",
            "der Literatur,",
            "der Naturwissenschaft,",
            "der Mathematik,",
            "der Musik,",
            "der Kunst,",
            "dem Handwerk,",
            "und der staatsbürgerlichen Verantwortung.",
          ],
        },
        {
          type: "paragraph",
          text: "Das Verständnis der eigenen Geschichte darf nicht dahin verkommen, jungen Europäern beizubringen, ihre Zivilisation sei kaum mehr als angehäufte Schuld.",
        },
        {
          type: "statement",
          text: "Ein Volk, das seine Vorfahren nicht achten kann, hört eines Tages auf, sich um seine Nachkommen zu kümmern.",
        },
        {
          type: "paragraph",
          text: "Die Eltern bleiben die ersten Erzieher ihrer Kinder; die staatliche Schulaufsicht hat deshalb die Verantwortung der Eltern und die Vielfalt der Träger zu achten.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Autorität und Subsidiarität",
      summary: "Autorität ist notwendig, aber sie muss auf die jeweils niedrigste handlungsfähige Ebene verteilt werden.",
      body: [
        { type: "lead", text: "Wir verwerfen beides: den anarchischen Individualismus und die allumfassende Staatsmacht." },
        { type: "paragraph", text: "Autorität ist notwendig, denn politische Gemeinschaften brauchen Ordnung." },
        { type: "paragraph", text: "Aber sie muss verteilt sein." },
        {
          type: "paragraph",
          text: "Der Grundsatz hat einen Namen und eine Quelle. Pius XI. hat ihn 1931 in Quadragesimo Anno ausgesprochen: Es verstößt gegen die Gerechtigkeit und verwirrt die rechte Ordnung, der größeren und übergeordneten Gemeinschaft zuzuweisen, was die kleineren und untergeordneten Gemeinwesen zu leisten vermögen. Er behandelte das als eine Frage der Gerechtigkeit und nicht der zweckmäßigen Verwaltung — ein erheblich stärkerer Anspruch und einer, dem schwerer zu genügen ist.",
        },
        {
          type: "paragraph",
          text: "Ballen sich gesellschaftliche, wirtschaftliche, technische und staatliche Macht in wenigen Institutionen, wird wirkliche Freiheit unmöglich.",
        },
        { type: "statement", text: "Politische Macht sollte deshalb auf der jeweils niedrigsten handlungsfähigen Ebene ausgeübt werden." },
        {
          type: "list",
          marker: "rule",
          items: [
            "Über Familienangelegenheiten sollen die Familien entscheiden.",
            "Über örtliche Angelegenheiten sollen die Gemeinden entscheiden.",
            "Den Regionen soll eine wirkliche Eigenständigkeit bleiben.",
            "Über nationale Angelegenheiten sollen die Nationen entscheiden.",
          ],
        },
        {
          type: "paragraph",
          text: "Höhere Ebenen sollten vor allem dort eingreifen, wo die niedrigeren eine notwendige Aufgabe nicht hinreichend erfüllen können.",
        },
        { type: "paragraph", text: "Das ist keine Bequemlichkeit der Verwaltung." },
        { type: "statement", text: "Es ist ein Grundsatz der politischen Freiheit." },
        {
          type: "paragraph",
          text: "Wir sollten offen sagen, wohin das die Auseinandersetzung führt. Die europäischen Verträge bekennen sich bereits zur Subsidiarität: Artikel 5 des Vertrags über die Europäische Union bindet die Union daran, nur dort tätig zu werden, wo die Ziele einer in Betracht gezogenen Maßnahme von den Mitgliedstaaten nicht ausreichend verwirklicht werden können. Unser Streit gilt deshalb nicht dem Grundsatz, den auch unsere Gegner zu vertreten behaupten, sondern der Frage, wer darüber befinden darf, ob er eingehalten wurde, und was folgt, wenn die Antwort Nein lautet.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Demokratie, Vertretung und Staat",
      summary: "Regieren im Rahmen der Verfassung, eine breitere Vertretung und Zusammenarbeit, wo das Gemeinwohl sie verlangt.",
      body: [
        { type: "lead", text: "Liberalismus und Demokratie sind nicht dasselbe." },
        {
          type: "paragraph",
          text: "Eine Gesellschaft kann den philosophischen Liberalismus zurückweisen und dennoch an Wahlen festhalten, an der Vertretung des Volkes, an verfassungsmäßigen Schranken und an der Beteiligung der Bürger.",
        },
        {
          type: "paragraph",
          text: "Eine Regierung braucht genug Autorität, um das Gemeinwohl zu verteidigen, und muss zugleich durch das Recht, durch die Subsidiarität, durch institutionelle Gegengewichte und durch die Würde der Person gebunden bleiben.",
        },
        { type: "paragraph", text: "Die Vertretung des Volkes sollte über die Apparate der Berufspolitiker hinausreichen." },
        {
          type: "paragraph",
          text: "Neben die Vertretung nach Gebieten kann die Vertretung der Familien, der Gemeinden, der Berufe, der Arbeitnehmer, der Landwirtschaft, der Universitäten und anderer dauerhafter Einrichtungen der Bürgergesellschaft treten.",
        },
        {
          type: "paragraph",
          text: "Politische Führung ist als Sachwalterschaft zu verstehen und nicht als dauernde weltanschauliche Mobilisierung.",
        },
        { type: "paragraph", text: "Der Staat ist notwendig." },
        { type: "statement", text: "Der Staat ist nicht Gott." },
        {
          type: "paragraph",
          text: "Politische Meinungsverschiedenheit ist legitim und notwendig. Eine gesunde politische Ordnung verlangt nicht, dass alle Parteien dasselbe denken.",
        },
        { type: "paragraph", text: "Der Wettstreit der Parteien darf jedoch nicht zum Selbstzweck werden." },
        {
          type: "paragraph",
          text: "Wo die grundlegenden Interessen der Nation und ihrer Bürger auf dem Spiel stehen, sollten die Parteien über den Parteivorteil hinaus handeln können. Fragen der nationalen Sicherheit, der kritischen Infrastruktur, der demografischen Stabilität, des Schutzes der Familien, der verfassungsmäßigen Kontinuität und des langfristigen Wohlstands der Bürger dürfen nicht zum dauernden Wahlkampf verkommen.",
        },
        { type: "paragraph", text: "Opposition ist notwendig; Opposition um ihrer selbst willen wirkt zerstörerisch." },
        {
          type: "paragraph",
          text: "Der Zweck der Parteien ist nicht bloß, einander zu besiegen. Ihre erste Pflicht ist der Dienst am Volk und an der politischen Gemeinschaft, der sie angehören.",
        },
        {
          type: "paragraph",
          text: "Wir erstreben deshalb eine politische Kultur, in der ernsthafter Widerspruch möglich bleibt und in der Zusammenarbeit über Parteigrenzen hinweg erwartet wird, sooft das dauerhafte Gemeinwohl der Nation sie verlangt.",
        },
        {
          type: "list",
          marker: "none",
          items: [
            "Die Nation muss über der Partei stehen.",
            "Das Gemeinwohl muss über dem Parteiinteresse stehen.",
            "Das Volk muss über der politischen Klasse stehen.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    culture: {
      title: "Kultur gegen die Vereinheitlichung",
      summary: "Sprachen, Überlieferungen und Handwerk gehören ins gewöhnliche Leben und nicht in die Fremdenverkehrswirtschaft.",
      body: [
        {
          type: "lead",
          text: "Die weltweite Konsumkultur macht Städte, Lebensformen, Unterhaltung und kommerzielle Umgebungen einander immer ähnlicher, bis sie austauschbar werden.",
        },
        { type: "statement", text: "Wir widersetzen uns dieser Vereinheitlichung." },
        {
          type: "paragraph",
          text: "Sprachen, Mundarten, überlieferte Bräuche, Feste, Musik, Küche, Handwerk und geschichtliche Erinnerung sollten nicht bloß als Sehenswürdigkeiten für Reisende fortbestehen.",
        },
        { type: "paragraph", text: "Sie sollten zum gewöhnlichen Leben gehören." },
        {
          type: "paragraph",
          text: "Die Kulturpolitik sollte das Schaffen vor Ort stärken, statt bloß einzuführen, was weltweit die größte kommerzielle Reichweite hat.",
        },
        {
          type: "paragraph",
          text: "Die europäische Zivilisation sollte offen dafür bleiben, von anderen Zivilisationen zu lernen, ohne sich in ihnen aufzulösen.",
        },
        { type: "statement", text: "Austausch ist nicht Auslöschung." },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "Arbeit",
      summary: "Arbeit hat ihre Würde, aber sie ist nicht der Zweck des menschlichen Daseins.",
      body: [
        { type: "lead", text: "Arbeit ist mehr als ein Geschäft, bei dem Zeit gegen Lohn getauscht wird." },
        { type: "statement", text: "Arbeit hat ihre Würde, aber sie ist nicht der Zweck des menschlichen Daseins." },
        {
          type: "paragraph",
          text: "Der Mensch ist nicht dazu geschaffen, bloß zu erzeugen, zu verbrauchen, anzuhäufen und diesen Kreislauf bis zum Tod zu wiederholen.",
        },
        {
          type: "paragraph",
          text: "Ein Wirtschaftssystem soll die materielle Grundlage für ein gelingendes Leben schaffen und nicht das Leben verzehren, das es tragen sollte.",
        },
        {
          type: "paragraph",
          text: "Eine Gesellschaft ist aus der Ordnung geraten, wenn gewöhnliche Menschen nahezu alle ihre wachen Stunden hergeben müssen, nur um Wohnung, Nahrung und ein Mindestmaß an Sicherheit zu halten; wenn Eltern ihre Kinder kaum sehen; wenn Gemeinschaften verschwinden, weil alle von der Arbeit erschöpft sind; oder wenn eine gestiegene Produktivität die Institutionen reicher macht, ohne dass die Freiheit der Menschen entsprechend wüchse.",
        },
        { type: "paragraph", text: "Der wirtschaftliche Fortschritt ist deshalb zum Teil an einer einfachen Frage zu messen:" },
        { type: "statement", text: "Gibt er den gewöhnlichen Menschen mehr Verfügung über ihr eigenes Leben?" },
        {
          type: "paragraph",
          text: "Produktivität sollte am Ende mehr Sicherheit hervorbringen, mehr Muße, stärkere Familien und größere Freiheit von unnötiger Plackerei.",
        },
        {
          type: "paragraph",
          text: "Der Zweck des Wirtschaftslebens ist nicht, die Zahl der Stunden zu maximieren, die sich dem Menschen abgewinnen lassen.",
        },
        {
          type: "paragraph",
          text: "Menschen brauchen Zeit für Familie, Freundschaft, Gottesdienst, Betrachtung, Natur, Handwerk, Lernen, Gemeinschaft, Feier und Ruhe.",
        },
        { type: "paragraph", text: "Das sind keine wirtschaftlich unproduktiven Unterbrechungen des Lebens." },
        { type: "paragraph", text: "Sie gehören zu den Gründen, um derentwillen es das Wirtschaftsleben gibt." },
        {
          type: "paragraph",
          text: "Wir verwerfen eine Zivilisation, in der die Menschen zu Dienern von Systemen werden, die ursprünglich geschaffen wurden, um ihnen zu dienen.",
        },
        {
          type: "statement",
          text: "Der Mensch muss arbeiten, um zu leben. Niemals darf er darauf herabgesetzt werden, bloß zu leben, um zu arbeiten.",
        },
        {
          type: "paragraph",
          text: "Durch Arbeit nehmen Menschen am Leben der Gesellschaft teil, erwerben Können, bringen nützliche Dinge hervor und ernähren Familien.",
        },
        {
          type: "paragraph",
          text: "Eine Wirtschaft, die sinnvolle Berufe zerstört, bloß weil ihre Ersetzung die messbare Effizienz steigert, sollte deshalb auch bedenken, was dabei verloren geht, und nicht nur, was gewonnen wird.",
        },
        {
          type: "paragraph",
          text: "Handwerk, Landwirtschaft, Ingenieurwesen, Pflege, Unterricht und die Facharbeiterberufe verdienen wieder gesellschaftliches Ansehen.",
        },
        {
          type: "paragraph",
          text: "Automatisierung soll den Menschen, wo es möglich ist, wirklich entwürdigende Arbeit abnehmen. Sie darf aber nicht zum unbefragten Ziel werden, den Menschen aus jeder wirtschaftlich produktiven Tätigkeit herauszunehmen.",
        },
        { type: "statement", text: "Menschliches Können ist selbst ein Gut der Gemeinschaft." },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Außenpolitik",
      summary: "Strategische Unabhängigkeit, Klugheit und ein starker Vorbehalt gegen jeden vermeidbaren Krieg.",
      body: [
        { type: "lead", text: "Europa sollte nach Unabhängigkeit streben und nicht nach imperialer Geltung." },
        {
          type: "paragraph",
          text: "Die europäischen Nationen sollten in der Lage sein, sich selbst zu verteidigen, ihre Grenzen zu sichern und bei Nahrung, Energie, Infrastruktur, Medizin und den lebenswichtigen Industrien strategisch unabhängig zu bleiben.",
        },
        {
          type: "paragraph",
          text: "Wir verwerfen die dauerhafte Abhängigkeit von fernen Mächten in dem, was das Überleben einer Nation überhaupt erst sichert.",
        },
        {
          type: "paragraph",
          text: "Wir verwerfen ebenso die ideologischen Kriege, die fremde Zivilisationen nach abstrakten politischen Modellen umbauen wollen.",
        },
        { type: "paragraph", text: "Verschiedene Zivilisationen haben verschiedene Geschichten." },
        { type: "statement", text: "Friedliche Beziehungen setzen keine kulturelle Gleichförmigkeit voraus." },
        {
          type: "paragraph",
          text: "Außenpolitik sollte sich von der Klugheit leiten lassen, vom berechtigten nationalen Interesse, vom Schutz der Unschuldigen, wo er wirklich möglich ist, und von einem starken Vorbehalt gegen jeden vermeidbaren Krieg.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "what-we-reject": {
      title: "Was wir verwerfen",
      summary: "Zehn Absagen, klar ausgesprochen — sie gelten Ideen und Systemen, nicht Menschen.",
      body: [
        {
          type: "list",
          marker: "rule",
          items: [
            "Wir verwerfen den **liberalen Individualismus**, denn eine Gesellschaft ist mehr als ein Vertrag zwischen selbstbestimmten Individuen.",
            "Wir verwerfen den **Materialismus**, denn der Mensch geht nicht im wirtschaftlichen Begehren auf.",
            "Wir verwerfen den **Kommunismus**, denn das Eigentum abzuschaffen und die Gesellschaft dem zentralen Staat zu unterwerfen zerstört beides: die Freiheit und die gewachsenen gesellschaftlichen Einrichtungen.",
            "Wir verwerfen den **Absolutismus des Laissez-faire**, denn die Märkte müssen dem Gemeinwohl untergeordnet bleiben.",
            "Wir verwerfen die **Technokratie**, denn Sachverstand und technisches Vermögen verleihen keine sittliche Autorität.",
            "Wir verwerfen den **Konsumismus**, denn das Anschaffen kann einer Zivilisation keinen Sinn geben.",
            "Wir verwerfen den **geschichtlichen Nihilismus**, denn eine Zivilisation, die an ihrem Erbe nichts mehr lieben kann, hat keinen Bestand.",
            "Wir verwerfen den **politischen Terrorismus**, denn die absichtliche Vernichtung unschuldigen Lebens begründet keine sittliche Ordnung.",
            "Wir verwerfen den **Totalitarismus**, denn weder Partei noch Konzern, weder Weltanschauung noch Staat darf mit Recht das ganze menschliche Leben vereinnahmen.",
            "Und wir verwerfen die **Anbetung des Fortschritts um des Fortschritts willen**.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    "what-we-seek": {
      title: "Was wir erstreben",
      summary: "Das positive Programm: wie eine erneuerte europäische Ordnung aussähe.",
      body: [
        {
          type: "lead",
          text: "Wir erstreben ein Europa, in dem die Kirchenglocke, der Familientisch, der Markt am Ort, die Werkstatt, der Hof, der Stadtplatz, die Universität, der Wald und die Nation wieder zu einer stimmigen gesellschaftlichen Ordnung gehören.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Wir erstreben Nationen, die ihrer selbst gewiss genug sind, um sich zu bewahren, ohne dazu den Hass auf andere zu brauchen.",
            "Wir erstreben Familien, die Kinder großziehen können, ohne daran wirtschaftlich zugrunde zu gehen.",
            "Wir erstreben breit gestreutes Eigentum statt dauerhafter Abhängigkeit.",
            "Wir erstreben Märkte ohne Marktgläubigkeit.",
            "Wir erstreben Autorität ohne Totalitarismus.",
            "Wir erstreben Technik ohne die Herrschaft der Technik.",
            "Wir erstreben die Bewahrung der Natur ohne Verachtung des Menschen.",
            "Wir erstreben das Christentum ohne Glaubenszwang.",
            "Wir erstreben Vaterlandsliebe.",
            "Wir erstreben Kontinuität ohne Stillstand.",
            "Wir erstreben Fortschritt, wo der Fortschritt wirklich menschlich ist, und Zurückhaltung, wo Fortschritt nur noch ein anderes Wort für Auflösung geworden ist.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    restoration: {
      title: "Erneuerung",
      summary: "Geschichte lässt sich nicht zurückdrehen, die Richtung aber lässt sich ändern.",
      body: [
        { type: "lead", text: "Unsere Bewegung verlangt nicht, dass Europa ein Museum werde." },
        { type: "paragraph", text: "Wir verlangen auch nicht, dass die Geschichte zurückgedreht werde." },
        { type: "paragraph", text: "Geschichte lässt sich nicht zurückdrehen." },
        { type: "statement", text: "Die Richtung aber lässt sich ändern." },
        {
          type: "list",
          marker: "none",
          items: [
            "Institutionen lassen sich wieder aufbauen.",
            "Familien können ihre Zuversicht wiederfinden.",
            "Gemeinschaften können wieder Gewicht bekommen.",
            "Eigentum kann wieder breit gestreut sein.",
            "Die Technik kann wieder dienen.",
            "Landschaften lassen sich wiederherstellen.",
            "Kirchen können sich wieder mit Leben füllen.",
            "Nationen können sich erinnern, was sie sind.",
            "Europa kann wieder erkennbar es selbst werden.",
          ],
        },
        { type: "paragraph", text: "Die Wahl, vor der wir stehen, ist deshalb nicht einfach die zwischen Vergangenheit und Zukunft." },
        { type: "paragraph", text: "Sie ist die zwischen zwei verschiedenen Zukünften." },
        {
          type: "paragraph",
          text: "Die eine wird immer zentralisierter, technischer, wurzelloser, durchgängig zur Ware gemacht und austauschbar: eine Zivilisation, in der der Mensch größere Macht über die äußere Welt besitzt und zugleich immer weniger Verfügung über die Systeme, die sein eigenes Leben bestimmen.",
        },
        { type: "paragraph", text: "Die andere nimmt Grenzen an." },
        {
          type: "paragraph",
          text: "Sie erkennt, dass manches ererbt sein will und nicht erfunden, geschützt und nicht optimiert, geliebt und nicht mit einem Preis versehen.",
        },
        { type: "statement", text: "Wir wählen die zweite." },
        {
          type: "list",
          marker: "rule",
          items: [
            "Wir wählen die Familie, nicht die Vereinzelung.",
            "Die Gemeinschaft, nicht die Vereinsamung.",
            "Das Eigentum, nicht die Abhängigkeit.",
            "Die Bewahrung, nicht den Raubbau.",
            "Die Schönheit, nicht die Gesichtslosigkeit.",
            "Die Nation, nicht die Wurzellosigkeit.",
            "Den Glauben, nicht den Nihilismus.",
            "Das menschliche Urteil, nicht die vermeintliche Unausweichlichkeit der Technik.",
            "Die Zivilisation, nicht die Auflösung.",
            "Und die Erneuerung, nicht die Selbstaufgabe.",
          ],
        },
        { type: "paragraph", text: "Europa muss sich wieder bewusst werden, was es ist." },
        { type: "paragraph", text: "Nicht, weil andere Zivilisationen ohne Wert wären." },
        {
          type: "paragraph",
          text: "Sondern weil keine Zivilisation fortbestehen kann, die entschieden hat, ihr eigener Fortbestand sei sittlich entbehrlich.",
        },
        { type: "paragraph", text: "Unser Erbe haben wir nicht geschaffen." },
        { type: "paragraph", text: "Es zu verwerfen steht uns nicht zu." },
        { type: "statement", text: "Uns steht zu, es zu empfangen, zu erneuern und weiterzugeben." },
      ] satisfies readonly ContentBlock[],
    },
  },
};

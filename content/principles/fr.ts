import type { ContentBlock } from "@/lib/content-types";
import type { PrinciplesContent } from "./index";

export const principlesContent: PrinciplesContent = {
  meta: {
    title: "Principes",
    subtitle: "Seize engagements, énoncés sans détour",
    lede: "Ce sont là les positions dont découle notre politique. Chacune est ici exposée brièvement ; le Manifeste en développe l'argument complet.",
    indexLabel: "Sommaire",
    indexNavLabel: "Sommaire des principes",
    inManifesto: "Dans le Manifeste",
    copyLinkTo: "Copier le lien vers",
    closingTitle: "Chacun de ces principes est développé en entier dans le Manifeste.",
    readManifesto: "Lire le Manifeste",
    whatThisMeans: "Ce que cela signifie en pratique",
  },

  items: {
    "moral-order": {
      title: "Ordre moral",
      statement:
        "Une communauté politique ne peut rester indéfiniment neutre à l'égard du bien dont la protection est sa raison d'être.",
      summary: "Le bien commun comme fin de l'autorité politique.",
      body: [
        {
          type: "paragraph",
          text: "Toute société porte des jugements : sur ce qui mérite protection, sur ce qu'il convient d'encourager, sur le genre de vie qu'elle souhaite rendre accessible à ceux qui la composent. L'État qui prétend n'en porter aucun les a le plus souvent déjà portés ; il s'est simplement dispensé de le dire.",
        },
        {
          type: "paragraph",
          text: "La dignité humaine ne tire son origine ni de la préférence, ni de la demande du marché, ni de la commodité administrative, ni de la possibilité technique. L'autorité politique n'a pas pour tâche de fabriquer une humanité nouvelle, ni de se borner à arbitrer des appétits concurrents : elle est là pour garantir les conditions dans lesquelles les personnes, les familles et les communautés peuvent vivre bien.",
        },
        {
          type: "paragraph",
          text: "On ne peut comprendre la civilisation européenne indépendamment du christianisme, et nous assumons ouvertement cet héritage. Ce que nous refusons n'est pas le désaccord — le désaccord est l'état normal d'une société libre — mais l'injonction faite à la vie publique européenne de se conduire comme si son propre héritage religieux n'avait jamais existé.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-and-community": {
      title: "La personne et la communauté",
      statement: "Nous partons de la personne en relation, non de l'individu isolé.",
      summary: "Les droits et les devoirs, la liberté et la responsabilité, tenus ensemble.",
      body: [
        {
          type: "paragraph",
          text: "Nul ne vient au monde sans attaches. Chacun entre dans un lieu où se trouvent déjà des parents, une langue, une culture, une patrie, des obligations et une histoire. Ce ne sont pas des entraves dont il faudrait s'affranchir : elles comptent au nombre des conditions sans lesquelles une vie humaine accomplie ne serait pas même possible.",
        },
        {
          type: "paragraph",
          text: "Les droits sont réels, et ils ne survivent guère longtemps sans les devoirs qui leur répondent. La liberté est réelle, et elle ne se réduit pas à l'absence de contrainte : elle comprend la capacité de poursuivre ce qui est véritablement bon.",
        },
        {
          type: "paragraph",
          text: "Un ordre politique sain tient donc en équilibre quatre couples : la liberté et la responsabilité, les droits et les devoirs, la dignité de chacun et l'obligation envers tous, l'autorité et la subsidiarité.",
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "Famille",
      statement:
        "La société doit rendre matériellement possibles la fondation d'une famille, la parentalité et une vie humaine qui ait un sens.",
      summary: "La première institution de la civilisation, et la plus facile à défaire.",
      body: [
        {
          type: "paragraph",
          text: "La famille est la première institution de la civilisation, et elle précède l'État. Presque tout ce dont une société dépend — l'éducation des enfants, le soin des anciens, la transmission de la langue et de la foi, le travail ordinaire qui tient une communauté ensemble — s'y accomplit d'abord.",
        },
        {
          type: "paragraph",
          text: "Une économie qui rend financièrement impossible la fondation d'une famille est une économie déréglée. Il en va de même d'un marché du travail qui traite la parentalité comme une gêne, et d'un marché du logement qui fait de l'accession à la propriété un privilège hors d'atteinte. Ce ne sont pas là des infortunes privées : ce sont des effets de politiques publiques, et des politiques publiques peuvent les corriger.",
        },
        {
          type: "paragraph",
          text: "Nous soutenons donc un logement abordable, une fiscalité familiale, un soutien à la parentalité, des emplois stables et la disponibilité d'un temps soustrait à la production économique. Le renouveau démographique de l'Europe doit procéder avant tout d'une vie de famille redevenue possible pour les Européens eux-mêmes.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "nation-and-continuity": {
      title: "Nation et continuité",
      statement:
        "Les nations européennes ont le droit légitime de préserver leur identité historique, leur culture et leur continuité.",
      summary: "La nation comme communauté à travers les générations, non comme unité administrative.",
      body: [
        {
          type: "paragraph",
          text: "L'humanité est universelle ; les civilisations sont particulières. On n'appartient pas seulement à l'humanité en général, mais à des communautés réelles, façonnées par l'histoire — des communautés que tiennent ensemble la mémoire, la langue, la coutume, les institutions, le territoire et le sentiment d'un destin commun.",
        },
        {
          type: "paragraph",
          text: "L'égalité en dignité n'exige pas que chaque pays devienne culturellement interchangeable avec tous les autres. Une ville polonaise doit rester reconnaissable comme polonaise, une ville italienne comme italienne, un village français comme français.",
        },
        {
          type: "paragraph",
          text: "Préserver les cultures et les peuples historiques de l'Europe n'est pas en soi plus hostile que de préserver les cultures et les identités historiques de n'importe quelle autre civilisation. Nous défendons la continuité, et nous la défendons pour tous.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "immigration-and-integration": {
      title: "Immigration et intégration",
      statement:
        "L'immigration doit être limitée à des niveaux compatibles avec une intégration réelle et la stabilité sociale.",
      summary: "Les frontières comme institutions légitimes ; la citoyenneté comme appartenance.",
      body: [
        {
          type: "paragraph",
          text: "La politique migratoire doit servir le bien commun du pays d'accueil, entendu dans la durée. Aucune société ne dispose d'une capacité illimitée à absorber un changement démographique sans que la confiance sociale, le logement, les infrastructures, la continuité culturelle et la cohésion politique en soient affectés.",
        },
        {
          type: "paragraph",
          text: "La citoyenneté doit signifier une appartenance, et non une simple résidence. La naturalisation doit exiger une connaissance réelle de la langue nationale, de l'histoire et des institutions, le respect de l'ordre constitutionnel et un attachement sincère au pays.",
        },
        {
          type: "statement",
          text: "Ceux qui deviennent citoyens selon la loi doivent être traités en citoyens.",
        },
        {
          type: "paragraph",
          text: "Cet engagement n'est ni une réserve ni une clause ajoutée après coup. L'appartenance, une fois accordée, est entière. Notre propos porte sur l'ampleur et les conditions de l'admission ; il met en cause une politique — jamais les personnes qui sont venues sous son régime.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "Europe",
      statement:
        "Une communauté de civilisation formée de nations souveraines, coopérant là où la coopération les sert.",
      summary: "L'unité sans l'uniformité ; la subsidiarité pour règle.",
      body: [
        {
          type: "paragraph",
          text: "L'unité européenne ne doit pas avoir pour prix la dissolution des nations européennes. Nous refusons aussi bien l'isolement national absolu que la transformation de l'Europe en un État administratif centralisé et post-national.",
        },
        {
          type: "paragraph",
          text: "Le principe directeur doit être la subsidiarité : rien ne doit être décidé à un échelon supérieur lorsque cela peut l'être avec compétence à un échelon inférieur. Le village ne doit pas céder sans nécessité devant la région, ni la région devant la nation, ni la nation devant les institutions continentales.",
        },
        {
          type: "paragraph",
          text: "Il reste après cela bien des choses que les Européens ne peuvent faire qu'ensemble — la défense, les frontières, les infrastructures stratégiques, la science, la protection de l'environnement, la médecine, la résilience énergétique et l'industrie stratégique. Ce que nous voulons n'est pas une Europe uniforme, mais une Europe dont la diversité demeure proprement européenne.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "Ordre économique",
      statement:
        "L'entreprise est légitime ; les institutions économiques demeurent subordonnées au bien commun.",
      summary: "Ni capitalisme sans frein, ni socialisme centralisé.",
      body: [
        {
          type: "paragraph",
          text: "La propriété privée, l'entreprise, le profit et la réussite économique sont tous légitimes. Aucun d'eux n'est la fin la plus haute d'une société. La société commerciale est un instrument juridique et économique — indispensable, et non souveraine.",
        },
        {
          type: "paragraph",
          text: "Là où les entreprises produisent des biens utiles, créent des moyens d'existence, développent des savoirs et servent les lieux où elles sont implantées, elles doivent prospérer. Là où la puissance économique concentrée se met à dominer les institutions politiques, à vider de leur substance des communautés viables ou à monopoliser des marchés essentiels, la société a l'autorité légitime de la contenir.",
        },
        {
          type: "paragraph",
          text: "Ce n'est pas une position contre les entreprises. C'est une position contre la domination. Notre idéal économique est distributiste quant à la propriété et corporatiste quant à l'organisation : beaucoup de propriétaires plutôt que quelques-uns.",
        },
      ] satisfies readonly ContentBlock[],
    },

    property: {
      title: "Propriété",
      statement:
        "Une société libre exige une propriété largement répartie plutôt qu'une dépendance permanente à l'égard d'un petit nombre d'institutions.",
      summary: "Le remède à la concentration est la répartition, non l'abolition.",
      body: [
        {
          type: "paragraph",
          text: "La propriété est une source d'indépendance et de responsabilité. Celui qui possède un logement, une terre, un atelier ou une part de l'entreprise où il travaille occupe dans la société une place qu'aucune consommation, si abondante soit-elle, ne saurait remplacer.",
        },
        {
          type: "paragraph",
          text: "La réponse à la concentration de la propriété n'est donc pas son abolition, mais sa répartition plus large : l'accession à la propriété du logement, les entreprises familiales, les métiers indépendants, les petites et moyennes entreprises, les coopératives et l'actionnariat salarié, l'agriculture familiale, la banque locale et régionale.",
        },
        {
          type: "paragraph",
          text: "Une société où des millions de personnes ne possèdent rien tandis que quelques institutions possèdent presque tout ne peut sérieusement passer pour une société de propriétaires, quoi que ses lois disent de la propriété.",
        },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "Travail",
      statement:
        "Le travail possède une dignité, mais le travail n'est pas la finalité de l'existence humaine.",
      summary: "Une économie doit fournir la base d'une vie, non la dévorer.",
      body: [
        {
          type: "paragraph",
          text: "Par le travail, on prend part à la vie de la société, on acquiert une compétence, on produit des choses utiles et on fait vivre une famille. Cela est réel et mérite le respect — dans l'artisanat en particulier, dans l'agriculture, l'ingénierie, les métiers du soin, l'enseignement et les métiers qualifiés.",
        },
        {
          type: "paragraph",
          text: "Mais une économie est faite pour fournir la base matérielle de la vie humaine, non pour dévorer les vies qu'elle avait pour tâche de soutenir. Lorsque la productivité augmente, une part du gain doit se traduire en sécurité, en temps libre, en temps passé en famille et en indépendance, et non seulement en volume produit.",
        },
        {
          type: "paragraph",
          text: "L'automatisation doit décharger les hommes des travaux véritablement avilissants. Elle ne doit pas devenir un objectif que l'on cesse d'interroger : celui de retirer toute participation humaine à l'activité productive. La compétence humaine est en elle-même un bien social.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "La technique",
      statement:
        "La technique doit renforcer la compétence, l'autonomie et la communauté humaines plutôt que de réorganiser la société autour de la nécessité technique.",
      summary: "Contre l'inéluctabilité technologique, non contre la technique.",
      body: [
        {
          type: "paragraph",
          text: "Le développement technique n'est pas le progrès humain. Une société peut gagner en puissance tout en s'affaiblissant socialement, en se centralisant davantage et en perdant de sa liberté.",
        },
        {
          type: "paragraph",
          text: "Nous refusons l'inéluctabilité technologique — l'idée que tout ce qui peut être construit doit être adopté, et que tout ce qui accroît l'efficacité vaut comme un progrès. Un outil introduit comme facultatif peut devenir économiquement nécessaire ; ce qui devient nécessaire remodèle les institutions ; et les institutions réorganisent ensuite la société autour de lui.",
        },
        {
          type: "paragraph",
          text: "Les citoyens doivent conserver un accès réel à l'argent liquide, à des services publics où l'on peut encore s'adresser à une personne, à des produits réparables, au commerce de proximité, à un espace privé soustrait à la surveillance permanente, et à des décideurs humains partout où les conséquences juridiques ou morales sont graves. De ce qu'une capacité existe, il ne suit aucune obligation de la mettre en œuvre.",
        },
      ] satisfies readonly ContentBlock[],
    },

    environment: {
      title: "Environnement",
      statement:
        "La terre, l'eau et les milieux vivants sont des héritages à cultiver, à protéger et à transmettre.",
      summary: "L'intendance chrétienne, plutôt que l'extraction ou la misanthropie.",
      body: [
        {
          type: "paragraph",
          text: "Les forêts, les rivières, les terres agricoles, les montagnes, les littoraux et la biodiversité ne sont pas des marchandises jetables. Une génération peut en user, et doit les entretenir ; elle n'en a pas la pleine propriété.",
        },
        {
          type: "paragraph",
          text: "Nous refusons une écologie qui ferait de l'humanité un parasite par nature, comme nous refusons une économie qui tiendrait n'importe quelle destruction pour acceptable dès lors qu'elle augmente la production à court terme. L'action publique doit favoriser l'agriculture locale, des sols sains, une eau propre, des objets durables et réparables, des chaînes d'approvisionnement régionales, une sylviculture responsable et la restauration des écosystèmes abîmés.",
        },
        {
          type: "paragraph",
          text: "La campagne ne doit être ni une zone d'extraction ni un musée d'où la vie ordinaire aurait été retirée. L'homme a sa place au sein de la nature — comme son intendant, comptable de ce qu'il laisse derrière lui.",
        },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "Architecture",
      statement:
        "La construction publique doit respecter l'échelle humaine, les matériaux locaux et la tradition régionale.",
      summary: "La civilisation s'inscrit dans la pierre, et l'on peut de nouveau bien bâtir.",
      body: [
        {
          type: "paragraph",
          text: "L'architecture façonne l'idée que l'on se fait de la beauté, de l'appartenance et de la continuité. Les villes européennes doivent cesser de tenir la laideur et l'absence de lieu pour des signes de progrès.",
        },
        {
          type: "paragraph",
          text: "Les édifices anciens, les églises, les ensembles urbains et les monuments doivent être préservés partout où cela reste raisonnablement possible. Les constructions nouvelles doivent donner des lieux habitables sur plusieurs générations, et non des cadres jetables conçus pour des flux de circulation, des portefeuilles d'investissement et de courts cycles de chantier.",
        },
        {
          type: "statement",
          text: "Une civilisation sûre d'elle-même doit être capable de bâtir de nouveau avec beauté.",
        },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Éducation",
      statement: "L'éducation doit transmettre la civilisation avant de chercher à la transformer.",
      summary: "L'héritage d'abord ; les parents comme premiers éducateurs.",
      body: [
        {
          type: "paragraph",
          text: "Chaque génération a le devoir d'initier la suivante à ce qu'elle a elle-même reçu. Font partie de cet héritage l'étude sérieuse du christianisme, de l'histoire européenne et nationale, de la civilisation classique, de la philosophie, de la littérature, des sciences, des mathématiques, de la musique, de l'art, de l'artisanat et de la responsabilité civique.",
        },
        {
          type: "paragraph",
          text: "L'intelligence de l'histoire doit être honnête à l'égard des fautes et des crimes, sans dégénérer pour autant en un enseignement qui réduirait la civilisation européenne à une culpabilité accumulée. Un peuple incapable de respecter ses ancêtres finira par se désintéresser de ses descendants.",
        },
        {
          type: "paragraph",
          text: "Les parents demeurent les premiers éducateurs de leurs enfants. L'autorité scolaire doit respecter cette responsabilité et le pluralisme des établissements.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Subsidiarité",
      statement: "L'autorité politique doit s'exercer à l'échelon compétent le plus bas.",
      summary: "L'autorité répartie comme condition de la liberté politique.",
      body: [
        {
          type: "paragraph",
          text: "Nous refusons aussi bien l'individualisme anarchique qu'un pouvoir d'État qui absorbe tout. L'autorité est nécessaire, car une communauté politique a besoin d'ordre. Mais elle doit être répartie.",
        },
        {
          type: "paragraph",
          text: "Aux familles de régler les affaires familiales, aux communes les affaires locales ; aux régions de conserver une autonomie réelle ; aux nations de régler les affaires nationales. Les autorités supérieures ne doivent intervenir, pour l'essentiel, que là où les institutions inférieures ne peuvent remplir convenablement une fonction nécessaire.",
        },
        {
          type: "paragraph",
          text: "La concentration du pouvoir social, économique, technique et gouvernemental entre les mains d'un petit nombre d'institutions rend toute liberté véritable impossible. La subsidiarité n'est pas une commodité administrative : c'est un principe de liberté politique.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Démocratie",
      statement:
        "Un gouvernement constitutionnel, une représentation élargie, et la coopération là où le bien commun l'exige.",
      summary: "Des élections, des limites, des contrepoids — et une culture partisane qui serve.",
      body: [
        {
          type: "paragraph",
          text: "Le gouvernement doit disposer d'une autorité suffisante pour défendre le bien commun, et rester tenu par la loi, par la subsidiarité, par les contrepoids institutionnels et par la dignité de la personne. Nous sommes attachés aux élections, aux limites constitutionnelles et à la participation des citoyens.",
        },
        {
          type: "paragraph",
          text: "La représentation doit s'élargir au-delà des appareils de partis professionnalisés. À la représentation territoriale peut s'ajouter celle des familles, des communes, des professions, des salariés, de l'agriculture, des universités et des autres institutions durables de la société civile.",
        },
        {
          type: "paragraph",
          text: "Le désaccord politique est légitime et nécessaire ; la guerre partisane permanente ne l'est pas. Lorsque les intérêts durables d'une nation sont en jeu, les partis doivent être capables d'agir par-delà l'avantage partisan. L'État est nécessaire. L'État n'est pas Dieu.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Politique étrangère",
      statement: "Indépendance stratégique, prudence, et forte présomption contre la guerre inutile.",
      summary: "L'indépendance, non l'ambition impériale.",
      body: [
        {
          type: "paragraph",
          text: "Les nations européennes doivent être en mesure de se défendre, de tenir leurs frontières et de conserver leur indépendance stratégique en matière d'alimentation, d'énergie, d'infrastructures, de médecine et d'industries essentielles. Dépendre durablement de puissances lointaines pour les conditions élémentaires de la survie nationale n'est pas un arrangement acquis : c'est un risque que l'on n'a pas pris la peine d'examiner.",
        },
        {
          type: "paragraph",
          text: "Nous refusons également les guerres idéologiques qui prétendent refaire des civilisations étrangères sur le patron de modèles politiques abstraits. Les civilisations n'ont pas la même histoire, et des relations pacifiques n'exigent pas l'uniformité culturelle.",
        },
        {
          type: "paragraph",
          text: "La politique étrangère doit être gouvernée par la prudence, par l'intérêt national légitime, par la défense des innocents partout où elle est réellement possible, et par une présomption forte contre toute guerre inutile.",
        },
      ] satisfies readonly ContentBlock[],
    },
  },
};

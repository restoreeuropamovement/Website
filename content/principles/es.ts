import type { ContentBlock } from "@/lib/content-types";
import type { PrinciplesContent } from "./index";

export const principlesContent: PrinciplesContent = {
  meta: {
    title: "Principios",
    subtitle: "Dieciséis compromisos, dichos sin rodeos",
    lede: "Estas son las posiciones de las que se deriva nuestra política. Aquí se enuncia cada una en breve; el argumento completo se desarrolla en el Manifiesto.",
    indexLabel: "Índice",
    indexNavLabel: "Índice de principios",
    inManifesto: "En el Manifiesto",
    copyLinkTo: "Copiar enlace a",
    closingTitle: "Cada principio se argumenta íntegramente en el Manifiesto.",
    readManifesto: "Lee el Manifiesto",
    whatThisMeans: "Lo que esto significa en la práctica",
  },

  items: {
    "moral-order": {
      title: "Orden moral",
      statement:
        "Una comunidad política no puede permanecer indefinidamente neutral ante el bien que existe para proteger.",
      summary: "El bien común como finalidad de la autoridad política.",
      body: [
        {
          type: "paragraph",
          text: "Toda sociedad emite juicios sobre qué merece protección, qué conviene fomentar y qué clase de vida espera que puedan llevar quienes viven en ella. El Estado que afirma no emitir ninguno de esos juicios suele haberlos emitido ya; lo único que ha hecho es callarlos.",
        },
        {
          type: "paragraph",
          text: "La dignidad humana no nace de la preferencia, ni de la demanda del mercado, ni de la comodidad administrativa, ni de lo técnicamente posible. La autoridad política no está para fabricar una humanidad nueva, ni para limitarse a arbitrar entre apetitos en pugna, sino para asegurar las condiciones en las que las personas, las familias y las comunidades puedan vivir bien.",
        },
        {
          type: "paragraph",
          text: "La civilización europea no puede entenderse al margen del cristianismo, y afirmamos esa herencia sin reservas. Lo que rechazamos no es el desacuerdo —que es la condición normal de una sociedad libre—, sino la exigencia de que la vida pública europea se comporte como si su propia herencia religiosa nunca hubiera existido.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-and-community": {
      title: "La persona y la comunidad",
      statement: "Partimos de la persona en relación, no del individuo aislado.",
      summary: "Derechos y deberes, libertad y responsabilidad, nunca por separado.",
      body: [
        {
          type: "paragraph",
          text: "Nadie llega al mundo sin vínculos. Cada uno de nosotros entra en un lugar que ya contiene unos padres, una lengua, una cultura, una tierra natal, unas obligaciones y una historia. No son ataduras de las que haya que librarse: son, de entrada, algunas de las condiciones que hacen posible una vida humana plena.",
        },
        {
          type: "paragraph",
          text: "Los derechos son reales y no sobreviven mucho tiempo sin los deberes que les corresponden. La libertad es real y es algo más que la ausencia de coacción: incluye la capacidad de buscar lo que es verdaderamente bueno.",
        },
        {
          type: "paragraph",
          text: "Un orden político sano mantiene, por tanto, cuatro parejas en equilibrio: la libertad con la responsabilidad, los derechos con los deberes, la dignidad individual con la obligación social y la autoridad con la subsidiariedad.",
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "Familia",
      statement:
        "La sociedad debe hacer materialmente posibles la formación de una familia, la crianza de los hijos y una vida humana con sentido.",
      summary: "La primera institución de la civilización y la más fácil de socavar.",
      body: [
        {
          type: "paragraph",
          text: "La familia es la primera institución de la civilización y precede al Estado. Casi todo aquello de lo que depende una sociedad —la crianza de los hijos, el cuidado de los mayores, la transmisión de la lengua y de las creencias, la labor corriente de mantener unida a una comunidad— sucede allí antes que en ningún otro sitio.",
        },
        {
          type: "paragraph",
          text: "Una economía que vuelve financieramente imposible formar una familia está desordenada, y lo mismo cabe decir de un régimen laboral que trata la maternidad y la paternidad como un estorbo, o de un mercado inmobiliario que convierte la propiedad de una vivienda en un privilegio inalcanzable. Nada de esto es una desgracia privada: son resultados de decisiones políticas y por decisiones políticas pueden cambiarse.",
        },
        {
          type: "paragraph",
          text: "Apoyamos, por tanto, la vivienda asequible, una fiscalidad favorable a la familia, el apoyo a los padres, el empleo estable y la disponibilidad de tiempo al margen de la producción económica. La renovación demográfica de Europa debe venir, ante todo, de hacer posible la vida familiar a los propios europeos.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "nation-and-continuity": {
      title: "Nación y continuidad",
      statement:
        "Las naciones europeas tienen el derecho legítimo de preservar su identidad histórica, su cultura y su continuidad.",
      summary: "La nación como comunidad entre generaciones, no como unidad administrativa.",
      body: [
        {
          type: "paragraph",
          text: "La humanidad es universal; las civilizaciones son particulares. Las personas no pertenecen solo a la humanidad en abstracto, sino a comunidades concretas moldeadas por la historia —comunidades que se mantienen unidas por la memoria, la lengua, la costumbre, las instituciones, el territorio y la conciencia de un destino común.",
        },
        {
          type: "paragraph",
          text: "La igualdad en la dignidad humana no exige que todos los países se vuelvan culturalmente intercambiables. Una ciudad polaca debe seguir siendo reconociblemente polaca; una ciudad italiana, reconociblemente italiana; un pueblo francés, reconociblemente francés.",
        },
        {
          type: "paragraph",
          text: "Preservar las culturas y los pueblos históricos de Europa no es en sí más hostil que preservar las culturas y las identidades históricas de cualquier otra civilización. Defendemos la continuidad, y la defendemos para todos.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "immigration-and-integration": {
      title: "Inmigración e integración",
      statement:
        "La inmigración debe mantenerse en niveles compatibles con una integración real y con la estabilidad social.",
      summary: "Las fronteras como instituciones legítimas; la ciudadanía como pertenencia.",
      body: [
        {
          type: "paragraph",
          text: "La política migratoria debe servir al bien común a largo plazo del país de acogida. Ninguna sociedad tiene una capacidad ilimitada de absorber cambios demográficos sin consecuencias para la confianza social, la vivienda, las infraestructuras, la continuidad cultural y la cohesión política.",
        },
        {
          type: "paragraph",
          text: "La ciudadanía debe significar pertenencia y no simple residencia. La naturalización debe exigir un conocimiento real de la lengua, la historia y las instituciones del país, respeto al orden constitucional y un vínculo verdadero con él.",
        },
        {
          type: "statement",
          text: "Quienes adquieren la ciudadanía conforme a la ley son ciudadanos, y como ciudadanos deben ser tratados.",
        },
        {
          type: "paragraph",
          text: "Ese compromiso no es una salvedad ni un añadido de última hora. La pertenencia, una vez concedida, es plena: no admite grados ni reservas. Nuestro argumento se refiere al volumen y a las condiciones de la admisión, y se dirige a las políticas —nunca a las personas que han llegado al amparo de ellas.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "Europa",
      statement:
        "Una comunidad de civilización formada por naciones soberanas que cooperan allí donde la cooperación les sirve.",
      summary: "Unidad sin uniformidad; la subsidiariedad como regla rectora.",
      body: [
        {
          type: "paragraph",
          text: "La unidad europea no debe exigir la disolución de las naciones europeas. Rechazamos por igual el aislamiento nacional absoluto y la conversión de Europa en un Estado administrativo centralizado y posnacional.",
        },
        {
          type: "paragraph",
          text: "El principio rector debe ser la subsidiariedad: nada debería decidirse en un nivel superior cuando puede decidirse con competencia en uno inferior. El municipio no debe ceder innecesariamente ante la región, ni la región ante la nación, ni la nación ante las instituciones continentales.",
        },
        {
          type: "paragraph",
          text: "Queda con ello mucho que los europeos solo pueden hacer juntos —la defensa, las fronteras, las infraestructuras estratégicas, la ciencia, la protección del medio ambiente, la medicina, la resiliencia energética y la industria estratégica. No aspiramos a una Europa uniforme, sino a una Europa cuya diversidad siga siendo inconfundiblemente europea.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "Orden económico",
      statement:
        "La empresa es legítima; las instituciones económicas permanecen subordinadas al bien común.",
      summary: "Ni capitalismo sin límites ni socialismo centralizado.",
      body: [
        {
          type: "paragraph",
          text: "La propiedad privada, la empresa, el beneficio y el éxito económico son legítimos, pero ninguno de ellos es la finalidad más alta de una sociedad. La gran empresa es un instrumento jurídico y económico —indispensable, desde luego, pero no soberano.",
        },
        {
          type: "paragraph",
          text: "Cuando las empresas producen bienes útiles, generan medios de vida, desarrollan conocimiento y sirven a los lugares donde operan, merecen prosperar. Cuando el poder económico concentrado empieza a dominar las instituciones políticas, a vaciar comunidades viables o a monopolizar mercados esenciales, la sociedad tiene la autoridad legítima para contenerlo.",
        },
        {
          type: "paragraph",
          text: "Esta no es una posición contra la empresa; es una posición contra la dominación. Nuestro ideal económico es distributista en cuanto a la propiedad y corporativista en cuanto a la organización: muchos propietarios antes que unos pocos.",
        },
      ] satisfies readonly ContentBlock[],
    },

    property: {
      title: "Propiedad",
      statement:
        "Una sociedad libre exige una propiedad ampliamente repartida y no la dependencia permanente de un número reducido de instituciones.",
      summary: "El remedio a la concentración es el reparto, no la abolición.",
      body: [
        {
          type: "paragraph",
          text: "La propiedad es una fuente de independencia y de responsabilidad. Quien posee una casa, una explotación, un taller o una parte de la empresa en la que trabaja tiene en la sociedad una posición que ningún grado de consumo sustituye.",
        },
        {
          type: "paragraph",
          text: "La respuesta a la propiedad concentrada no es, por tanto, abolir la propiedad, sino repartirla más: vivienda en propiedad, empresas familiares, oficios independientes, pequeñas y medianas empresas, cooperativas y propiedad de los trabajadores, agricultura familiar, banca local y regional.",
        },
        {
          type: "paragraph",
          text: "Una sociedad en la que millones de personas no poseen nada mientras unas pocas instituciones lo poseen casi todo no puede describirse seriamente como una sociedad de propietarios, digan lo que digan sus leyes sobre la propiedad.",
        },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "Trabajo",
      statement: "El trabajo posee dignidad, pero no es la finalidad de la existencia humana.",
      summary: "Un sistema económico debe proporcionar la base de una vida, no consumirla.",
      body: [
        {
          type: "paragraph",
          text: "Por el trabajo las personas participan en la sociedad, adquieren competencia, producen cosas útiles y mantienen a sus familias. Eso es real y merece respeto —de manera muy particular en la artesanía, la agricultura, la ingeniería, los cuidados, la enseñanza y los oficios cualificados.",
        },
        {
          type: "paragraph",
          text: "Pero un sistema económico está para proporcionar la base material de la vida humana, no para consumir las vidas que debía sostener. Cuando la productividad aumenta, parte de la ganancia debería aparecer en forma de seguridad, de ocio, de tiempo en familia y de independencia, y no solo en forma de producción.",
        },
        {
          type: "paragraph",
          text: "La automatización debe liberar a las personas de los trabajos verdaderamente degradantes, pero no convertirse en el objetivo irreflexivo de suprimir la participación humana en toda actividad productiva. La competencia humana es, en sí misma, un bien social.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "Tecnología",
      statement:
        "La tecnología debe reforzar la competencia humana, la autonomía y la comunidad, en lugar de reorganizar la sociedad en torno a la necesidad tecnológica.",
      summary: "Contra la inevitabilidad tecnológica, no contra la tecnología.",
      body: [
        {
          type: "paragraph",
          text: "El desarrollo tecnológico no es lo mismo que el progreso humano: una sociedad puede volverse más capaz y, a la vez, socialmente más débil, más centralizada y menos libre.",
        },
        {
          type: "paragraph",
          text: "Rechazamos la inevitabilidad tecnológica —la suposición de que todo lo que puede construirse debe adoptarse y de que todo lo que aumenta la eficiencia ha de contar como progreso. Una herramienta introducida como opcional puede volverse económicamente necesaria; lo que se vuelve necesario remodela las instituciones; y las instituciones reorganizan después la sociedad en torno a ella.",
        },
        {
          type: "paragraph",
          text: "Los ciudadanos deben conservar un acceso real al dinero físico, a servicios públicos con atención presencial, a productos reparables, al comercio de proximidad, a un espacio privado libre de vigilancia permanente y a decisiones tomadas por seres humanos allí donde las consecuencias jurídicas o morales son graves. Que algo pueda hacerse no obliga a hacerlo.",
        },
      ] satisfies readonly ContentBlock[],
    },

    environment: {
      title: "Medio ambiente",
      statement:
        "La tierra, el agua y los sistemas vivos son herencias que hay que cultivar, proteger y transmitir.",
      summary: "Custodia cristiana, y no extracción ni misantropía.",
      body: [
        {
          type: "paragraph",
          text: "Los bosques, los ríos, las tierras de cultivo, las montañas, las costas y la biodiversidad no son mercancías desechables. Una generación puede usarlos, y debe mantenerlos; no los posee en plena propiedad.",
        },
        {
          type: "paragraph",
          text: "Rechazamos un ecologismo que trata a la humanidad como una plaga sobre el mundo natural, y con igual firmeza una economía en la que cualquier destrucción resulta aceptable con tal de aumentar la producción a corto plazo. La política pública debe favorecer la agricultura de proximidad, los suelos sanos, el agua limpia, los productos duraderos y reparables, las cadenas de suministro regionales, la silvicultura responsable y la restauración de los ecosistemas dañados.",
        },
        {
          type: "paragraph",
          text: "El campo no debe ser una zona de extracción ni un museo del que se ha expulsado la vida corriente. El hombre pertenece a la naturaleza —como su custodio, responsable de lo que deja tras de sí.",
        },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "Arquitectura",
      statement:
        "La edificación pública debe respetar la escala humana, los materiales del lugar y la tradición regional.",
      summary: "La civilización se expresa físicamente, y puede volver a construirse bien.",
      body: [
        {
          type: "paragraph",
          text: "La arquitectura moldea la idea que la gente tiene de la belleza, de la pertenencia y de la continuidad. Las ciudades europeas deberían dejar de tomar la fealdad y la falta de carácter propio por señales de progreso.",
        },
        {
          type: "paragraph",
          text: "Los edificios históricos, las iglesias, los conjuntos urbanos y los monumentos deben conservarse siempre que sea razonablemente posible. La nueva construcción debe dar lugares habitables durante generaciones, y no entornos desechables concebidos en torno a los flujos de tráfico, las carteras de inversión y los ciclos cortos de obra.",
        },
        {
          type: "statement",
          text: "Una civilización segura de sí misma debería ser capaz de volver a construir con belleza.",
        },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Educación",
      statement: "La educación debe transmitir la civilización antes de pretender transformarla.",
      summary: "Primero la herencia; los padres como primeros educadores.",
      body: [
        {
          type: "paragraph",
          text: "Toda generación tiene la obligación de dar a conocer a la siguiente lo que ella misma recibió. De esa herencia forman parte el estudio serio del cristianismo, de la historia europea y nacional, de la civilización clásica, la filosofía, la literatura, la ciencia, las matemáticas, la música, el arte, los oficios y la responsabilidad cívica.",
        },
        {
          type: "paragraph",
          text: "La comprensión de la historia debe ser honesta con los fracasos y los crímenes, sin degenerar en la enseñanza de que la civilización europea apenas es algo más que una culpa acumulada. Un pueblo incapaz de respetar a sus antepasados acabará por desentenderse de sus descendientes.",
        },
        {
          type: "paragraph",
          text: "Los padres siguen siendo los primeros educadores de sus hijos, y la autoridad educativa debe respetar esa responsabilidad, así como el pluralismo de instituciones.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Subsidiariedad",
      statement: "La autoridad política debe ejercerse en el nivel competente más bajo.",
      summary: "La autoridad repartida como condición de la libertad política.",
      body: [
        {
          type: "paragraph",
          text: "Rechazamos por igual el individualismo anárquico y el poder estatal total. La autoridad es necesaria, porque toda comunidad política necesita orden; pero la autoridad debe estar repartida.",
        },
        {
          type: "paragraph",
          text: "Las familias deben gobernar los asuntos familiares; los municipios, los asuntos locales; las regiones deben conservar una autonomía real, y las naciones gobernar los asuntos nacionales. Las autoridades superiores deben intervenir sobre todo allí donde las instituciones inferiores no pueden desempeñar adecuadamente una función necesaria.",
        },
        {
          type: "paragraph",
          text: "La concentración del poder social, económico, tecnológico y de gobierno en un número reducido de instituciones hace imposible la libertad verdadera. La subsidiariedad no es una comodidad administrativa: es un principio de libertad política.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Democracia",
      statement:
        "Gobierno constitucional, representación ampliada y cooperación allí donde el bien común la exige.",
      summary: "Elecciones, límites, contrapesos —y una cultura de partido que sirva.",
      body: [
        {
          type: "paragraph",
          text: "El gobierno debe tener autoridad suficiente para defender el bien común y permanecer, al mismo tiempo, limitado por la ley, por la subsidiariedad, por los contrapesos institucionales y por la dignidad de la persona. Nos comprometemos con las elecciones, con los límites constitucionales y con la participación pública.",
        },
        {
          type: "paragraph",
          text: "La representación debe ampliarse más allá de las maquinarias profesionales de los partidos. La representación territorial puede complementarse con la de las familias, los municipios, las profesiones, los trabajadores, la agricultura, las universidades y otras instituciones duraderas de la sociedad civil.",
        },
        {
          type: "paragraph",
          text: "El desacuerdo político es legítimo y necesario; la guerra partidista permanente no lo es. Cuando están en juego los intereses duraderos de una nación, los partidos deben ser capaces de actuar por encima de su propio provecho. El Estado es necesario. El Estado no es Dios.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Política exterior",
      statement:
        "Independencia estratégica, prudencia y una presunción firme en contra de toda guerra innecesaria.",
      summary: "Independencia, no ambición imperial.",
      body: [
        {
          type: "paragraph",
          text: "Las naciones europeas deben poder defenderse, asegurar sus fronteras y mantener la independencia estratégica en alimentación, energía, infraestructuras, medicina e industria esencial. Depender de forma permanente de potencias lejanas para las condiciones básicas de la supervivencia nacional no es un arreglo estable: es un riesgo que nadie ha examinado.",
        },
        {
          type: "paragraph",
          text: "Rechazamos también las guerras ideológicas que pretenden reconstruir civilizaciones ajenas conforme a modelos políticos abstractos. Cada civilización tiene su propia historia, y unas relaciones pacíficas no exigen uniformidad cultural.",
        },
        {
          type: "paragraph",
          text: "La política exterior debe regirse por la prudencia, por el interés nacional legítimo, por la defensa de los inocentes allí donde sea realistamente posible y por una presunción firme en contra de toda guerra innecesaria.",
        },
      ] satisfies readonly ContentBlock[],
    },
  },
};

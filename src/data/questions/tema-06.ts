import type { Question } from '../../types'

/** Tema 6: Gestión por procesos. */
export const TEMA_06_QUESTIONS: Question[] = [
  {
    id: 't6-01',
    temaId: 6,
    stem: 'Según el enfoque a procesos, un proceso se define con mayor rigor como:',
    options: [
      'Conjunto de actividades mutuamente relacionadas que transforman entradas en una salida prevista con valor',
      'Lista de unidades del organigrama ordenadas por jerarquía y presupuesto asignado',
      'Indicador aislado de resultado sin secuencia de actividades ni dueño asignado',
      'Procedimiento PDF archivado, aunque no se ejecute ni se mida su desempeño',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Un proceso es un conjunto de actividades interrelacionadas que transforman entradas en salidas previstas. B confunde proceso con organigrama (silos). C reduce el proceso a un KPI. D confunde documentación con proceso gestionado.',
    tags: ['calibre'],
  },
  {
    id: 't6-02',
    temaId: 6,
    stem: 'En un mapa de procesos de una Diputación, la clasificación MÁS habitual es:',
    options: [
      'Procesos penales, civiles y administrativos según la materia jurídica',
      'Procesos estratégicos, clave (u operativos) y de soporte o apoyo',
      'Procesos internos solo, excluyendo siempre cualquier interfaz externa',
      'Procesos certificados ISO y procesos no certificados como única tipología',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El mapa suele distinguir estratégicos (dirección), clave/operativos (valor al usuario) y soporte. A usa tipología jurídica ajena. C niega interfaces relevantes. D confunde tipología del mapa con certificación.',
    tags: ['calibre'],
  },
  {
    id: 't6-03',
    temaId: 6,
    stem: 'Señale el error GRAVE al elaborar el mapa de procesos en una AAPP:',
    options: [
      'Representar las interfaces y traspasos entre procesos clave y de soporte',
      'Identificar dueños de proceso y su relación con indicadores de desempeño',
      'Confundir unidades orgánicas con procesos de extremo a extremo, perpetuando silos',
      'Separar procesos de soporte de los clave para visualizar dependencias',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El error clásico es dibujar el organigrama como si fueran procesos, en lugar del flujo de valor extremo a extremo. A, B y D son buenas prácticas del mapa y del despliegue.',
    tags: ['calibre'],
  },
  {
    id: 't6-04',
    temaId: 6,
    stem: 'El dueño de proceso (process owner) en gestión por procesos debe, de forma prioritaria:',
    options: [
      'Limitarse a firmar nóminas y turnos de la sección que dirige en el organigrama',
      'Ignorar las interfaces con otros procesos porque “no son de su departamento”',
      'Prohibir mediciones para no condicionar la autonomía de las unidades',
      'Coordinar actores de varias unidades, proponer cambios y responder de los indicadores del proceso',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El dueño responde del desempeño del flujo completo, aunque atraviese unidades. A reduce el rol a jefatura orgánica. B niega las interfaces. C contradice la gestión basada en datos.',
    tags: ['calibre'],
  },
  {
    id: 't6-05',
    temaId: 6,
    stem: 'Respecto de SIPOC y flujograma, señale la afirmación CORRECTA:',
    options: [
      'El flujograma sustituye siempre al SIPOC porque detalla cada actividad desde el primer día',
      'El SIPOC fija alcance (proveedores, entradas, proceso, salidas, clientes) antes de detallar el flujo',
      'Ambos miden capacidad estadística (Cp/Cpk) y sustituyen a los gráficos de control',
      'El SIPOC certifica el SGC conforme a ISO 9001 sin necesidad de auditoría',
    ],
    correct: 1,
    explanation:
      'Correcta: B. SIPOC encuadra el proceso; el flujograma detalla la secuencia. A invierte el uso habitual. C confunde herramientas de delimitar proceso con capacidad. D confunde herramienta con certificación.',
    tags: ['calibre'],
  },
  {
    id: 't6-06',
    temaId: 6,
    stem: 'Un estándar de proceso en una Carta de Servicios o ficha de proceso NO es:',
    options: [
      'Un nivel de referencia de desempeño verificable con indicador y umbral',
      'Una meta operativa ligada a plazo, calidad o cumplimiento legal del servicio',
      'Un deseo genérico del tipo “mejorar la atención” sin umbral ni evidencia',
      'Un criterio de conformidad usado en el control y la mejora del proceso',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Sin umbral verificable no hay estándar gestionable. A, B y D sí describen estándares útiles para operar y auditar el proceso.',
    tags: ['calibre'],
  },
  {
    id: 't6-07',
    temaId: 6,
    stem: 'En un proceso de expedientes, ¿qué par ilustra mejor indicador leading frente a lagging?',
    options: [
      '% de solicitudes con documentación completa a la entrada (leading) vs % resueltos fuera de plazo (lagging)',
      '% resueltos fuera de plazo (leading) vs % de entradas completas (lagging)',
      'Ambos indicadores son siempre idénticos y no cabe distinguirlos en AAPP',
      'Solo existen indicadores lagging; los leading están prohibidos en el sector público',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Leading anticipa (calidad de entrada); lagging mide resultado (plazos incumplidos). B invierte los conceptos. C y D niegan una distinción operativa habitual.',
    tags: ['calibre'],
  },
  {
    id: 't6-08',
    temaId: 6,
    stem: 'Gestionar de forma explícita las interfaces entre procesos sirve principalmente para:',
    options: [
      'Eliminar cualquier acuerdo de nivel de servicio interno entre unidades',
      'Prohibir la definición de salidas y requisitos del “cliente” interno',
      'Sustituir al dueño de proceso por la suma de jefes de sección del organigrama',
      'Reducir pérdidas de información, retrabajo y “tierras de nadie” entre unidades',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Las interfaces mal definidas generan fallos de handoff. A y B van en sentido contrario. C confunde coordinación transversal con mera jerarquía.',
    tags: ['calibre'],
  },
  {
    id: 't6-09',
    temaId: 6,
    stem: 'Señale la afirmación INCORRECTA sobre documentación de procesos:',
    options: [
      'La documentación apoya la formación, la estandarización y la trazabilidad',
      'La información documentada debe ser la necesaria para la eficacia del sistema',
      'Documentar el proceso garantiza por sí solo que se cumpla en la práctica',
      'Los registros aportan evidencia de ejecución y de resultados del proceso',
    ],
    correct: 2,
    explanation:
      'Correcta: C (es la incorrecta). Documentar ≠ implantar ni cumplir. A, B y D son afirmaciones válidas sobre el papel de la documentación y los registros.',
    tags: ['calibre'],
  },
  {
    id: 't6-10',
    temaId: 6,
    stem: 'Un proceso clave en una Diputación se reconoce, frente a uno de soporte, porque:',
    options: [
      'Contribuye directamente a la misión o al servicio a municipios/ciudadanía',
      'Es siempre el más antiguo en el inventario histórico de procedimientos',
      'Carece de indicadores porque su valor “se da por supuesto”',
      'Coincide necesariamente con una única sección del organigrama',
    ],
    correct: 0,
    explanation:
      'Correcta: A. La criticidad se define por contribución al valor/misión. B usa un criterio irrelevante. C es mala práctica. D confunde proceso clave con unidad orgánica.',
    tags: ['calibre'],
  },
  {
    id: 't6-11',
    temaId: 6,
    stem: 'Al desplegar un proceso, el conjunto MÁS completo de elementos típicos incluye:',
    options: [
      'Solo un eslogan de calidad y el logo institucional del área',
      'Únicamente el flujograma, sin roles, riesgos ni indicadores',
      'Eliminación del dueño para “no burocratizar” la mejora',
      'Flujograma/procedimiento, roles (p. ej. RACI), riesgos, indicadores, recursos y control',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El despliegue pasa del mapa a la operación medible. A y B son incompletos. C elimina un elemento central de la gestión por procesos.',
    tags: ['calibre'],
  },
  {
    id: 't6-12',
    temaId: 6,
    stem: 'La gestión por procesos busca optimizar, en primer término:',
    options: [
      'El tamaño y el presupuesto de cada silo departamental por separado',
      'El flujo de valor de extremo a extremo, aunque atraviese varios departamentos',
      'La opacidad de las interfaces para preservar la autonomía de cada unidad',
      'La duplicación de controles sin criterio de riesgo ni de valor añadido',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El enfoque a procesos mira el flujo completo, no el silo. A, C y D describen antitácticas típicas de la organización por departamentos.',
    tags: ['calibre'],
  },
  {
    id: 't6-13',
    temaId: 6,
    stem: 'Un KPI de proceso debe cumplir, como mínimo, que sea:',
    options: [
      'Relevante, medible, comparable en el tiempo y vinculado a meta o estándar',
      'Secreto para el dueño, a fin de no condicionar su gestión diaria',
      'Cambiado cada día sin criterio para mantener el cuadro “en verde”',
      'Independiente de la estrategia y de los compromisos de servicio',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Sin relevancia, medición, comparabilidad y meta no hay gestión. B, C y D degradan el indicador a ornamento o manipulación.',
    tags: ['calibre'],
  },
  {
    id: 't6-14',
    temaId: 6,
    stem: 'Si se externaliza una actividad de un proceso, la práctica CORRECTA es:',
    options: [
      'Desentenderse del desempeño porque “ya es del contratista”',
      'Eliminar evidencias y controles para no interferir en la relación contractual',
      'Definir requisitos, controles y seguimiento del proveedor como parte del sistema',
      'Prohibir auditorías de segunda parte sobre el proveedor del servicio',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Externalizar no externaliza la responsabilidad del proceso. A, B y D contradicen el control de proveedores propio de un SGC.',
    tags: ['calibre'],
  },
  {
    id: 't6-15',
    temaId: 6,
    stem: 'Sobre la “salida” de un proceso en AAPP, la afirmación MÁS precisa es:',
    options: [
      'Su conformidad es irrelevante si el organigrama está bien definido',
      'Solo importa la calidad de la entrada; la salida no debe medirse',
      'No puede medirse cuando el servicio es intangible',
      'Debe satisfacer requisitos del cliente/siguiente proceso y los legales aplicables',
    ],
    correct: 3,
    explanation:
      'Correcta: D. La salida es el resultado previsto sujeto a requisitos (incluidos legales). A y B trivializan la conformidad. C confunde intangibilidad con imposibilidad de medir evidencias/plazos/errores.',
    tags: ['calibre'],
  },
  {
    id: 't6-16',
    temaId: 6,
    stem: 'El retrabajo reiterado de expedientes antes de notificar al interesado suele indicar:',
    options: [
      'Estabilidad perfecta del proceso y ausencia de fallos internos',
      'Falla de calidad, capacidad o diseño del proceso (típicamente fallo interno)',
      'Que sobran indicadores y conviene dejar de medir el proceso',
      'Excelencia operativa, porque “se corrige todo antes de salir”',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El retrabajo interno es señal de no calidad o mal diseño. A y D confunden corrección con excelencia. C propone cegar la gestión.',
    tags: ['calibre'],
  },
  {
    id: 't6-17',
    temaId: 6,
    stem: 'El tiempo de ciclo (cycle/lead time) de un expediente mide:',
    options: [
      'La antigüedad media del personal que interviene en el trámite',
      'El número de sellos o firmas sin relación con fechas de inicio y fin',
      'La duración desde el inicio hasta el fin del proceso para ese ítem',
      'Solo el coste salarial imputado al área, sin dimensión temporal',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El tiempo de ciclo es duración extremo a extremo. A, B y D miden otras cosas (plantilla, formalismos, coste) que no son lead time.',
    tags: ['calibre'],
  },
  {
    id: 't6-18',
    temaId: 6,
    stem: 'Actualizar el mapa de procesos cuando cambian servicios o competencias es necesario porque:',
    options: [
      'Un mapa obsoleto induce decisiones y auditorías sobre un sistema ficticio',
      'ISO 9001 prohíbe actualizar mapas una vez aprobados por primera vez',
      'El mapa es un documento eterno que no debe revisarse tras su publicación',
      'En AAPP los procesos no cambian aunque cambien las competencias',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El mapa debe reflejar el sistema real. B, C y D son falsas: el mapa es vivo y los servicios públicos sí evolucionan.',
    tags: ['calibre'],
  },
  {
    id: 't6-19',
    temaId: 6,
    stem: 'La matriz RACI en el despliegue de un proceso aclara:',
    options: [
      'La reforma constitucional aplicable a las Diputaciones provinciales',
      'Quién es Responsible, Accountable, Consulted e Informed en cada actividad',
      'El color corporativo y la tipografía de los procedimientos publicados',
      'La diferencia entre acreditación ENAC y certificación ISO 9001',
    ],
    correct: 1,
    explanation:
      'Correcta: B. RACI asigna roles por actividad. A, C y D son temas ajenos al despliegue operativo del proceso.',
    tags: ['calibre'],
  },
  {
    id: 't6-20',
    temaId: 6,
    stem: 'Un riesgo típico de “sobreprocedimentar” un proceso es:',
    options: [
      'Mayor claridad útil siempre, sin coste ni rigideces relevantes',
      'Eliminación garantizada de silos y de interfaces conflictivas',
      'Mejor percepción ciudadana automática sin necesidad de medir',
      'Rigideces que alargan plazos sin reducir fallos verdaderamente relevantes',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Más papel no implica más valor: puede burocratizar. A, B y C sobreprometen efectos automáticos que el exceso documental no garantiza.',
    tags: ['calibre'],
  },
  {
    id: 't6-21',
    temaId: 6,
    stem: 'El enfoque a procesos en ISO 9001 implica, entre otros requisitos de sistema:',
    options: [
      'Determinar los procesos necesarios, su secuencia e interacción, y gestionarlos',
      'Prohibir mapas de procesos para no rigidizar la organización',
      'Ignorar riesgos e indicadores asociados a los procesos identificados',
      'Sustituir la gestión de procesos por un organigrama detallado',
    ],
    correct: 0,
    explanation:
      'Correcta: A. ISO 9001 exige identificar, secuenciar e interactuar/gestionar procesos. B, C y D contradicen el enfoque a procesos de la norma.',
    tags: ['calibre'],
  },
  {
    id: 't6-22',
    temaId: 6,
    stem: 'Señale la afirmación CORRECTA sobre procesos estratégicos:',
    options: [
      'Son idénticos a los de soporte (p. ej. limpieza o mantenimiento de flota)',
      'Sustituyen a los procesos clave y entregan el servicio final al ciudadano',
      'Orientan y despliegan la dirección (planificación, CMI, revisión); no suelen entregar el servicio final',
      'No necesitan dueño ni indicadores porque son “de gabinete”',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Estratégicos gobiernan el sistema; clave entregan valor; soporte habilita. A y B confunden tipologías. D niega gestión medible también en estratégicos.',
    tags: ['calibre'],
  },
  {
    id: 't6-23',
    temaId: 6,
    stem: 'Un SLA interno entre procesos (p. ej. registro → instrucción) sirve para:',
    options: [
      'Derogar plazos legales del procedimiento administrativo cuando “no den”',
      'Acordar tiempos y calidad de las entregas entre unidades del flujo',
      'Sustituir las atribuciones del Pleno en materia de organización',
      'Certificar automáticamente la competencia profesional del personal',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El SLA interno formaliza requisitos de interfaz. A es ilegal/incorrecto. C y D confunden el acuerdo operativo con órganos o certificación de personas.',
    tags: ['calibre'],
  },
  {
    id: 't6-24',
    temaId: 6,
    stem: 'Para desmontar la trampa “tenemos procesos porque tenemos PDFs”, la pregunta clave es:',
    options: [
      'Si el PDF tiene portada corporativa y más de un índice detallado',
      'Si el archivo supera las 500 páginas y está en tres carpetas distintas',
      'Si el procedimiento está fechado en el mismo ejercicio presupuestario',
      'Si hay dueño, indicadores, evidencias de cumplimiento y mejora basada en datos',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Proceso gestionado = operación medible y mejorada, no solo documento. A–C son criterios cosméticos o formales insuficientes.',
    tags: ['calibre'],
  },
  {
    id: 't6-25',
    temaId: 6,
    stem: 'Estratificar indicadores por municipio, canal o tipo de expediente permite:',
    options: [
      'Detectar bolsas de problema ocultas detrás de una media agregada',
      'Ocultar siempre la variabilidad y presentar un único dato “verde”',
      'Eliminar la utilidad de Pareto e histogramas en el análisis',
      'Sustituir la definición del proceso por el organigrama provincial',
    ],
    correct: 0,
    explanation:
      'Correcta: A. La estratificación revela heterogeneidad oculta. B describe un mal uso. C y D no se siguen de estratificar bien.',
    tags: ['calibre'],
  },
  {
    id: 't6-26',
    temaId: 6,
    stem: 'El “resultado previsto” de un proceso público debe alinearse con:',
    options: [
      'Solo la comodidad interna de las unidades que intervienen',
      'Requisitos de partes interesadas relevantes y el mandato legal del servicio',
      'El color del sello y el formato de la plantilla de salida',
      'Criterios aleatorios revisados en cada turno de trabajo',
    ],
    correct: 1,
    explanation:
      'Correcta: B. En AAPP el resultado previsto combina valor para stakeholders y legalidad. A, C y D trivializan el propósito del proceso.',
    tags: ['calibre'],
  },
  {
    id: 't6-27',
    temaId: 6,
    stem: 'Señale la afirmación MÁS avanzada sobre estabilidad y capacidad de un proceso:',
    options: [
      'Si el proceso está estable (bajo control), siempre cumple el estándar de servicio',
      'La capacidad suficiente garantiza automáticamente la ausencia de causas especiales',
      'Sin datos se gestiona mejor, porque los indicadores “rigidizan” la mejora',
      'Un proceso estable puede ser incapaz: hay que rediseñar el sistema, no solo exhortar',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Control ≠ capacidad: estable y fuera de especificación exige mejora del sistema. A y B confunden ambos conceptos. C niega la gestión basada en evidencia.',
    tags: ['calibre'],
  },
  {
    id: 't6-28',
    temaId: 6,
    stem: 'Inventariar el proceso AS-IS antes de diseñar el TO-BE evita principalmente:',
    options: [
      'Cualquier cambio posterior, al cristalizar el estado actual',
      'Toda medición, porque el AS-IS ya “explica” el problema',
      'Rediseñar sobre una imagen idealizada falsa del funcionamiento real',
      'Toda participación del personal operativo en el diagnóstico',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El AS-IS ancla el rediseño en la realidad (esperas, bucles, handoffs). A, B y D malinterpretan el propósito del diagnóstico.',
    tags: ['calibre'],
  },
  {
    id: 't6-29',
    temaId: 6,
    stem: 'La mejor métrica de “calidad del handoff” entre unidades de un expediente es:',
    options: [
      '% de transferencias con información completa y correcta a la primera',
      'Número de plantas o despachos que separan físicamente a las unidades',
      'Antigüedad media del personal, sin mirar la calidad de la transferencia',
      'Número de “likes” o menciones internas del área emisora',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Mide la conformidad de la interfaz. B–D son proxies irrelevantes o cosméticos para la calidad del traspaso.',
    tags: ['calibre'],
  },
  {
    id: 't6-30',
    temaId: 6,
    stem: 'En el temario, “despliegue y gestión de procesos” e “indicadores y estándares” apuntan a que el opositor sepa:',
    options: [
      'Solo dibujar cajas del mapa sin pasar a operación ni métricas',
      'Pasar del mapa a la operación medible con responsables y seguimiento',
      'Citar EFQM o CAF sin necesidad de definir procesos ni dueños',
      'Memorizar el organigrama provincial como sustituto del mapa de procesos',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El núcleo es operar y medir el proceso, no solo representarlo. A, C y D se quedan en representación, modelo o organigrama.',
    tags: ['calibre'],
  },
  {
    id: 't6-31',
    temaId: 6,
    stem: 'Un proceso de soporte bien gestionado se reconoce porque:',
    options: [
      'Compite por protagonismo institucional sin aportar al flujo de valor',
      'Carece de indicadores porque “no atiende al ciudadano”',
      'Habilita a los procesos clave con niveles de servicio acordados, sin ser cuello de botella opaco',
      'Ignora a sus clientes internos al priorizar solo la jerarquía del área',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El soporte existe para habilitar el valor con SLA claros. A, B y D describen soporte mal gestionado.',
    tags: ['calibre'],
  },
  {
    id: 't6-32',
    temaId: 6,
    stem: '¿Cuál es el mayor síntoma de que NO hay gestión por procesos real?',
    options: [
      'Existe un mapa actualizado con interfaces y dueños visibles',
      'Hay dueños nombrados con KPIs revisados periódicamente',
      'Se revisan y acuerdan los requisitos de las interfaces entre unidades',
      'Los problemas se “tiran” al departamento siguiente y nadie mira el flujo completo',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El síntoma clásico es el silo: empujar el problema aguas abajo. A–C son signos de que sí hay (o se intenta) gestión por procesos.',
    tags: ['calibre'],
  },
]

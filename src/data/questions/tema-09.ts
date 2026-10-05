import type { Question } from '../../types'

/** Tema 9: Cuadro de mando integral (CMI / BSC). Preguntas calibre. */
export const TEMA_09_QUESTIONS: Question[] = [
  {
    id: 't9-01',
    temaId: 9,
    stem: 'Según Kaplan y Norton, el Balanced Scorecard nace principalmente para corregir:',
    options: [
      'La gestión estratégica apoyada casi solo en indicadores financieros retrospectivos',
      'La ausencia total de indicadores financieros en las organizaciones',
      'La imposibilidad de medir resultados de procesos internos',
      'La obligación legal de publicar cuentas en las AAPP',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El BSC surge para equilibrar la mirada financiera (a menudo lagging) con otras perspectivas que anticipan y explican el desempeño. B es falsa: el BSC no elimina lo financiero. C y D no describen el problema que motivó el modelo.',
    tags: ['calibre'],
  },
  {
    id: 't9-02',
    temaId: 9,
    stem: 'Las cuatro perspectivas clásicas del CMI de Kaplan y Norton son:',
    options: [
      'Presupuesto, auditoría, nómina y contratación',
      'Misión, visión, valores y carta de servicios',
      'Financiera, clientes, procesos internos, y aprendizaje y crecimiento',
      'Prevención, evaluación, fallos internos y fallos externos',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Esas son las cuatro perspectivas clásicas. A mezcla funciones administrativas. B son elementos de planificación estratégica, no perspectivas del BSC. D es la tipología PAF de costes de calidad (tema 8).',
    tags: ['calibre'],
  },
  {
    id: 't9-03',
    temaId: 9,
    stem: 'En una Diputación, adaptar la perspectiva financiera del CMI suele significar, de forma más coherente:',
    options: [
      'Maximizar el dividendo de accionistas privados',
      'Uso eficiente, sostenible y transparente de recursos públicos orientado a valor público',
      'Eliminar el control interventor y la legalidad presupuestaria',
      'Sustituir el presupuesto por un cuadro de indicadores de actividad',
    ],
    correct: 1,
    explanation:
      'Correcta: B. En AAPP la “financiera” se reinterpreta como stewardship de recursos y valor público, no como rentabilidad de accionistas. A es lógica privada. C y D vulneran el marco legal y presupuestario: el CMI no los sustituye.',
    tags: ['calibre'],
  },
  {
    id: 't9-04',
    temaId: 9,
    stem: 'Un mapa estratégico aporta frente a una lista suelta de KPIs, sobre todo:',
    options: [
      'La obligación de certificar el SGC conforme a ISO 9001',
      'La eliminación de metas e iniciativas asociadas',
      'Más indicadores de vanidad sin vínculo entre sí',
      'Hipótesis causa-efecto entre objetivos de distintas perspectivas',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El mapa estratégico visualiza relaciones causa-efecto (p. ej. capacidades → procesos → ciudadanía → resultados/recursos). A confunde CMI con certificación. B y C son lo contrario de un buen mapa.',
    tags: ['calibre'],
  },
  {
    id: 't9-05',
    temaId: 9,
    stem: 'Señale la afirmación INCORRECTA sobre el CMI:',
    options: [
      'El CMI sustituye necesariamente al presupuesto y exime del cumplimiento legal',
      'El CMI traduce la estrategia en objetivos, indicadores, metas e iniciativas',
      'El CMI puede cascaderse a unidades con métricas adaptadas',
      'El CMI debe revisarse periódicamente con datos reales',
    ],
    correct: 0,
    explanation:
      'Correcta: A (es la incorrecta). El CMI no sustituye presupuesto ni legalidad; es un sistema de gestión estratégica complementario. B, C y D sí describen usos adecuados.',
    tags: ['calibre'],
  },
  {
    id: 't9-06',
    temaId: 9,
    stem: 'Incluir demasiados indicadores en el CMI tiende a producir:',
    options: [
      'Mejor priorización automática sin coste de medición',
      'Alineación perfecta garantizada entre unidades',
      'Dispersión de la atención directiva y pérdida de foco estratégico',
      'Sustitución automática de la estrategia por el reporting',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El exceso de métricas diluye foco y encarece la medición. A y B son falsas. D puede ocurrir si se usa mal el CMI, pero no es el efecto directo del exceso de indicadores; el enunciado apunta a la dispersión de atención.',
    tags: ['calibre'],
  },
  {
    id: 't9-07',
    temaId: 9,
    stem: 'La perspectiva de aprendizaje y crecimiento cubre típicamente:',
    options: [
      'Solo el resultado presupuestario del ejercicio',
      'Personas, sistemas de información y clima/capacidades organizativas',
      'Solo el número de expedientes resueltos en el mes',
      'Solo las reclamaciones externas ya materializadas',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Es la perspectiva de capacidades habilitadoras (capital humano, informacional y organizativo). A es más financiera/resultados. C es tipicamente de procesos o actividad. D es un resultado lagging (fallo/experiencia ciudadana).',
    tags: ['calibre'],
  },
  {
    id: 't9-08',
    temaId: 9,
    stem: 'Cascader el CMI de forma torpe consiste, sobre todo, en:',
    options: [
      'Adaptar métricas locales cuya mejora contribuye causalmente al objetivo institucional',
      'Asignar dueños claros a cada indicador relevante',
      'Revisar línea base y capacidad antes de fijar metas',
      'Copiar el mismo KPI a todas las unidades aunque su contribución causal sea distinta',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Cascada inteligente ≠ copia mecánica. A, B y C son prácticas deseables; D genera distorsión e inequidad de responsabilidad.',
    tags: ['calibre'],
  },
  {
    id: 't9-09',
    temaId: 9,
    stem: 'Usar el CMI solo como reporting periódico sin decisiones ni iniciativas implica:',
    options: [
      'El uso ideal según Kaplan y Norton',
      'Desperdiciar su potencial como sistema de gestión estratégica',
      'La equivalencia automática con el modelo CAF',
      'La certificación ISO 9001 sin auditoría',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El BSC es un sistema de gestión (objetivos–indicadores–metas–iniciativas–revisión), no un panel decorativo. A es lo contrario. C y D confunden CMI con otros marcos.',
    tags: ['calibre'],
  },
  {
    id: 't9-10',
    temaId: 9,
    stem: 'En una Diputación, un indicador más propio de la perspectiva “ciudadanía/usuarios” sería:',
    options: [
      'Porcentaje de municipios asistidos que valoran útil el servicio técnico recibido',
      'Coste medio de personal por expediente (sin vínculo a servicio)',
      'Horas de formación interna del área de calidad',
      'Número de puestos de trabajo en plantilla de Intervención',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Mide percepción/valor para el destinatario del servicio. B es más de recursos/eficiencia. C es aprendizaje/crecimiento. D es estructura, no resultado para ciudadanía.',
    tags: ['calibre'],
  },
  {
    id: 't9-11',
    temaId: 9,
    stem: 'Respecto de indicadores leading y lagging en un CMI, es más correcto afirmar que:',
    options: [
      'Todos los indicadores financieros son leading por definición',
      'Los indicadores de satisfacción ciudadana son siempre leading',
      'No conviene mezclar leading y lagging en el mismo cuadro',
      'Los leading anticipan el desempeño; los lagging confirman resultados ya ocurridos',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Leading (impulsores) predicen; lagging (resultados) confirman. A es falsa: lo financiero suele ser lagging. B: la satisfacción suele ser lagging o de resultado. C es incorrecta: el equilibrio leading/lagging es deseable.',
    tags: ['calibre'],
  },
  {
    id: 't9-12',
    temaId: 9,
    stem: 'Señale el ejemplo que mejor ilustra una “vanity metric” frente a un KPI accionable de CMI:',
    options: [
      'P90 del tiempo de resolución de solicitudes de asistencia técnica',
      'Porcentaje de no conformidades cerradas en plazo con verificación de eficacia',
      'Número de “me gusta” en la red social institucional sin vínculo a servicio ni decisión',
      'Tasa de cumplimiento de compromisos de carta de servicios del área',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Es métrica de vanidad si no orienta decisiones ni se liga a estrategia. A, B y D son accionables y alineables con objetivos de calidad/servicio.',
    tags: ['calibre'],
  },
  {
    id: 't9-13',
    temaId: 9,
    stem: 'Un indicador típico de la perspectiva de procesos internos en un servicio provincial sería:',
    options: [
      'Porcentaje de expedientes con incumplimiento de plazo interno por causa especial controlable',
      'Importe total del presupuesto de gastos corrientes',
      'Clima laboral percibido por el personal',
      'Número de diputados en el Pleno',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Refleja desempeño del flujo de trabajo. B es financiero/recursos. C es aprendizaje/clima. D es dato institucional ajeno al CMI de gestión del servicio.',
    tags: ['calibre'],
  },
  {
    id: 't9-14',
    temaId: 9,
    stem: 'En AAPP, la perspectiva “clientes” del BSC clásico se reorienta con más rigor hacia:',
    options: [
      'Únicamente proveedores privados del contrato menor',
      'Ciudadanía, usuarios y mandatos de servicio (incluidos municipios asistidos)',
      'Solo el personal de la propia unidad, como único stakeholder',
      'Los accionistas del mercado de capitales',
    ],
    correct: 1,
    explanation:
      'Correcta: B. En lo público “cliente” se amplía a ciudadanía/usuarios y a quien recibe el mandato (p. ej. municipios). A y D son inadecuados. C confunde cliente interno con la perspectiva completa.',
    tags: ['calibre'],
  },
  {
    id: 't9-15',
    temaId: 9,
    stem: 'En la lógica Kaplan/Norton, la secuencia más coherente al desplegar estrategia en el CMI es:',
    options: [
      'Iniciativas → indicadores → objetivos → estrategia',
      'Metas sueltas → estrategia → indicadores sin objetivos',
      'Indicadores → visión → misión (en ese orden obligatorio)',
      'Estrategia → objetivos → indicadores → metas → iniciativas',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El CMI traduce la estrategia en objetivos, luego indicadores y metas, y las iniciativas cierran el hueco. A invierte el orden. B y C rompen la lógica de despliegue.',
    tags: ['calibre'],
  },
  {
    id: 't9-16',
    temaId: 9,
    stem: 'Asignar “dueño” a un indicador del CMI significa, de forma más útil:',
    options: [
      'Que el indicador solo exista en el informe anual de Intervención',
      'Que cualquier unidad pueda alterar la definición sin control',
      'Que una persona/unidad responda del seguimiento, la calidad del dato y el plan de acción',
      'Que el indicador quede congelado y no pueda revisarse nunca',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Ownership implica responsabilidad de medición y actuación. A reduce el CMI a reporting formal. B degrada la gobernanza del dato. D impide aprendizaje y ajuste de metas.',
    tags: ['calibre'],
  },
  {
    id: 't9-17',
    temaId: 9,
    stem: 'Un error frecuente al clasificar indicadores en perspectivas es:',
    options: [
      'Situar horas de formación en aprendizaje y crecimiento',
      'Situar satisfacción de usuarios en perspectiva de ciudadanía',
      'Situar “horas de formación impartidas” como si fueran resultado final de valor público, confundiendo input con outcome',
      'Situar coste unitario del servicio en la perspectiva de recursos/financiera adaptada',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Las horas de formación son impulsor/capacidad (o input), no outcome de ciudadanía. A, B y D son clasificaciones razonables.',
    tags: ['calibre'],
  },
  {
    id: 't9-18',
    temaId: 9,
    stem: 'Si el CMI solo contiene indicadores de actividad (outputs) y ninguno de resultado (outcomes), el riesgo principal es:',
    options: [
      'Optimizar volumen o trámites sin garantizar valor, equidad o impacto del servicio',
      'Garantizar automáticamente la excelencia EFQM',
      'Cumplir ISO 19011 sin auditar',
      'Eliminar la necesidad de mapa estratégico',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Outputs sin outcomes favorecen productivismo y gaming. B, C y D no se derivan de ese desequilibrio.',
    tags: ['calibre'],
  },
  {
    id: 't9-19',
    temaId: 9,
    stem: '¿Cuál de estos indicadores es más claramente lagging en un servicio de asistencia a municipios?',
    options: [
      'Porcentaje de personal con competencia crítica actualizada (plan formativo cerrado)',
      'Porcentaje de municipios que declaran el problema resuelto tras la intervención',
      'Tiempo medio de ciclo interno de preparación del expediente (antes de respuesta)',
      'Disponibilidad del sistema de cola de solicitudes en el mes',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Es un resultado percibido/ya ocurrido. A y D son más leading (capacidades/disponibilidad). C es de proceso; puede ser impulsor, no el outcome final.',
    tags: ['calibre'],
  },
  {
    id: 't9-20',
    temaId: 9,
    stem: '¿Cuál de estos indicadores es más claramente leading respecto de la calidad del servicio?',
    options: [
      'Número de reclamaciones formales ya presentadas en el trimestre',
      'Puntuación media de satisfacción post-servicio del semestre',
      'Coste total de indemnizaciones por errores ya externalizados',
      'Porcentaje de checklist de control críticos cumplidos antes de emitir la respuesta',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Es un impulsor de conformidad en proceso. A, B y C son resultados/lagging (fallos o percepción ya materializados).',
    tags: ['calibre'],
  },
  {
    id: 't9-21',
    temaId: 9,
    stem: 'La relación causa-efecto del mapa estratégico debe tratarse como:',
    options: [
      'Hipótesis a contrastar con datos en las revisiones del CMI',
      'Verdad dogmática que no admite revisión',
      'Sustituto del presupuesto aprobado',
      'Equivalente a una no conformidad de auditoría',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El mapa formula hipótesis estratégicas; si los datos no las confirman, se revisan objetivos/iniciativas. B niega el aprendizaje. C y D confunden planos (presupuesto; auditoría).',
    tags: ['calibre'],
  },
  {
    id: 't9-22',
    temaId: 9,
    stem: 'Respecto de CMI e ISO 9001, la afirmación más rigurosa es:',
    options: [
      'El CMI es la norma certificable del SGC',
      'ISO 9001 sustituye siempre al CMI en AAPP',
      'El CMI es un marco de despliegue estratégico; ISO 9001 fija requisitos de SGC (pueden complementarse)',
      'Ambos son idénticos al modelo CAF',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Son herramientas distintas y complementarias. A invierte roles. B es falsa. D confunde CMI, 9001 y CAF.',
    tags: ['calibre'],
  },
  {
    id: 't9-23',
    temaId: 9,
    stem: 'Un CMI “desequilibrado” hacia solo lo económico en una AAPP suele producir:',
    options: [
      'Mayor foco automático en capacidades y clima',
      'Sesgo que puede deteriorar servicio, personas y procesos aunque “cuadren” los números',
      'Equivalencia con un mapa estratégico completo',
      'Cumplimiento garantizado de cartas de servicios',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Sin equilibrio de perspectivas, se suboptimiza. A, C y D no se siguen de un sesgo solo económico.',
    tags: ['calibre'],
  },
  {
    id: 't9-24',
    temaId: 9,
    stem: 'Al fijar metas de indicadores del CMI, la práctica más sólida es:',
    options: [
      'Fijar metas imposibles para “motivar por tensión” sin línea base',
      'Copiar metas de otra organización sin contexto ni capacidad',
      'Dejar las metas indefinidas para no generar presión',
      'Partir de línea base, capacidad y estrategia, con metas ambiciosas pero alcanzables',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Metas útiles requieren datos, capacidad y alineación estratégica (lógica SMART). A y B generan cinismo o irrealidad. C vacía el CMI.',
    tags: ['calibre'],
  },
  {
    id: 't9-25',
    temaId: 9,
    stem: 'En el CMI, una iniciativa estratégica es, de forma más precisa:',
    options: [
      'Un indicador más del cuadro',
      'Una meta numérica sin plan',
      'La misión institucional reformulada',
      'Un conjunto de acciones para cerrar la brecha entre desempeño actual y meta',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Las iniciativas son proyectos/acciones que mueven los indicadores. A confunde iniciativa con KPI. B es solo la meta. C es marco de planificación, no iniciativa.',
    tags: ['calibre'],
  },
  {
    id: 't9-26',
    temaId: 9,
    stem: '¿Qué afirmación describe mejor un buen ritmo de revisión del CMI en una unidad de calidad provincial?',
    options: [
      'Revisar solo al final de legislatura, sin datos intermedios',
      'Revisiones periódicas con datos, análisis de desviaciones e impulso de acciones',
      'Revisar indicadores cada hora aunque no haya decisión asociada',
      'No revisar nunca para no “contaminar” la estrategia',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El CMI exige ciclo de seguimiento y decisión. A y D anulan la gestión. C confunde frecuencia con valor: medir sin decidir es ruido.',
    tags: ['calibre'],
  },
  {
    id: 't9-27',
    temaId: 9,
    stem: 'Si dos indicadores del CMI miden esencialmente lo mismo con definiciones solapadas, el riesgo principal es:',
    options: [
      'Redundancia que encarece la medición y da falsa sensación de cobertura estratégica',
      'Mejor mapa causa-efecto automáticamente',
      'Mayor independencia entre perspectivas',
      'Sustitución del programa de auditoría interna',
    ],
    correct: 0,
    explanation:
      'Correcta: A. KPIs redundantes desperdician atención y no aportan nueva información. B, C y D no se derivan de la duplicidad.',
    tags: ['calibre'],
  },
  {
    id: 't9-28',
    temaId: 9,
    stem: 'En una adaptación pública del BSC, ¿cuál es la cadena causa-efecto más plausible?',
    options: [
      'Resultados financieros privados → formación → menos procesos',
      'Satisfacción ciudadana → eliminación de controles legales → más riesgo',
      'Capacidades del personal y sistemas → mejores procesos → mejor servicio a municipios/ciudadanía → mejor uso de recursos/valor público',
      'Más indicadores de vanidad → mejor estrategia → menos necesidad de datos',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Es la lógica clásica adaptada al sector público. A mezcla lógica privada. B es perversa. D es absurda metodológicamente.',
    tags: ['calibre'],
  },
  {
    id: 't9-29',
    temaId: 9,
    stem: 'Un objetivo del CMI está bien formulado cuando, entre otros rasgos:',
    options: [
      'Es genérico (“mejorar la calidad”) sin indicador ni plazo',
      'Es específico, medible, alineado con estrategia y con meta temporal',
      'Depende solo de factores externos incontrolables sin palancas internas',
      'Se define tras el cierre del ejercicio, solo para justificar lo ocurrido',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Lógica SMART aplicada al despliegue estratégico. A es vanity. C genera impotencia e injusticia. D es reporting retrospectivo, no dirección.',
    tags: ['calibre'],
  },
  {
    id: 't9-30',
    temaId: 9,
    stem: 'Señale la opción que mejor distingue “tema estratégico” en un CMI:',
    options: [
      'Un color corporativo del informe',
      'Un indicador aislado sin objetivo',
      'La lista completa de procedimientos del SGC',
      'Un eje de estrategia (p. ej. “mejorar asistencia a municipios pequeños”) que agrupa objetivos e iniciativas',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Los temas estratégicos estructuran el mapa. A es cosmética. B es incompleto. C confunde SGC documental con estrategia.',
    tags: ['calibre'],
  },
  {
    id: 't9-31',
    temaId: 9,
    stem: '¿Cuál NO es una función propia del CMI bien implantado?',
    options: [
      'Alinear unidades con la estrategia mediante objetivos e indicadores',
      'Facilitar el diálogo de gestión con evidencias',
      'Sustituir la legalidad administrativa y el control presupuestario',
      'Priorizar iniciativas según brechas de desempeño',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El CMI no deroga legalidad ni presupuesto. A, B y D sí son funciones típicas de un CMI útil.',
    tags: ['calibre'],
  },
  {
    id: 't9-32',
    temaId: 9,
    stem: 'En el contexto de una oposición de Técnico Medio de Calidad, el error de test más frecuente sobre el CMI es:',
    options: [
      'Tratarlo como un mero listado financiero o como sustituto del presupuesto y de la legalidad',
      'Asociarlo a perspectivas múltiples y mapa causa-efecto',
      'Entenderlo como traducción de estrategia en objetivos e indicadores',
      'Reconocer su adaptación en AAPP hacia ciudadanía y valor público',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El error típico es reducirlo a finanzas o creer que anula marco legal/presupuestario. B, C y D son afirmaciones sólidas sobre el CMI.',
    tags: ['calibre'],
  },
]

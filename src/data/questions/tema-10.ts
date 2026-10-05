import type { Question } from '../../types'

/** Tema 10: Dirección por objetivos (DPO). Preguntas calibre. */
export const TEMA_10_QUESTIONS: Question[] = [
  {
    id: 't10-01',
    temaId: 10,
    stem: 'La DPO, bien entendida, NO es:',
    options: [
      'Un sistema de objetivos acordados, medibles, seguidos y evaluados',
      'Una lista de deseos genéricos sin métrica, responsable ni revisión',
      'Compatible con el despliegue de un CMI y con la gestión por procesos',
      'Una herramienta de alineación entre estrategia y actuación cotidiana',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Sin medición, acuerdo y seguimiento no hay verdadera DPO. A, C y D sí describen rasgos o usos válidos.',
    tags: ['calibre'],
  },
  {
    id: 't10-02',
    temaId: 10,
    stem: 'Un riesgo clásico de una DPO mal diseñada es:',
    options: [
      'Objetivos cortoplacistas o sesgados que inducen gaming y distorsión de conductas',
      'Demasiada claridad en criterios de evaluación',
      'Feedback frecuente basado en datos fiables',
      'Alineación explícita con la estrategia institucional',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El mal diseño empuja a “cuadrar el número” aunque se deteriore el servicio. B, C y D son factores protectores, no riesgos.',
    tags: ['calibre'],
  },
  {
    id: 't10-03',
    temaId: 10,
    stem: 'Para la legitimidad percibida de la DPO, el pilar más crítico suele ser:',
    options: [
      'Opacidad de metas y criterios “para evitar protestas”',
      'Castigo automático sin diálogo ante cualquier desviación',
      'Criterios de evaluación transparentes y datos fiables',
      'Metas imposibles comunicadas solo al final del periodo',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Justicia procedimental + dato creíble sostienen la DPO. A, B y D erosionan confianza y fomentan ocultación.',
    tags: ['calibre'],
  },
  {
    id: 't10-04',
    temaId: 10,
    stem: '“Cascada de objetivos” en DPO significa, de forma más precisa:',
    options: [
      'Elevar solo quejas al nivel directivo',
      'Eliminar responsables intermedios para “agilizar”',
      'Ocultar resultados de unidades para comparar solo al final',
      'Desglosar metas institucionales en unidades/personas con trazabilidad causal',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Cascada = despliegue con trazabilidad. A, B y C no definen cascada y son malas prácticas.',
    tags: ['calibre'],
  },
  {
    id: 't10-05',
    temaId: 10,
    stem: 'Objetivos individuales extremos sin componente de equipo suelen:',
    options: [
      'Romper colaboración y generar suboptimización de silos',
      'Mejorar siempre el flujo extremo a extremo del proceso',
      'Eliminar automáticamente los silos organizativos',
      'Sustituir la necesidad de mapa de procesos',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Incentivos solo individuales favorecen localismos. B, C y D no se siguen; a menudo ocurre lo contrario.',
    tags: ['calibre'],
  },
  {
    id: 't10-06',
    temaId: 10,
    stem: 'En AAPP, ¿cuál sería un objetivo DPO ilegítimo o inaceptable?',
    options: [
      'Reducir el P90 de tiempo manteniendo conformidad legal y documental',
      'Acortar plazos omitiendo trámites esenciales de garantía legal',
      'Elevar el porcentaje de completitud documental a la entrada',
      'Mejorar satisfacción ciudadana sin vulnerar ética ni igualdad de trato',
    ],
    correct: 1,
    explanation:
      'Correcta: B. La DPO no puede empujar a incumplir legalidad. A, C y D son legítimos si están bien medidos y alineados.',
    tags: ['calibre'],
  },
  {
    id: 't10-07',
    temaId: 10,
    stem: 'La DPO fracasa con más probabilidad cuando:',
    options: [
      'Existen rituales de feedback con datos',
      'Hay patrocinio directivo visible',
      'Hay pocas metas claras y priorizadas',
      'No hay seguimiento ni datos, solo un “contrato” anual olvidado',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Sin seguimiento cíclico, la DPO es papel. A, B y C (pocas metas claras) son condiciones favorables o neutras/positivas.',
    tags: ['calibre'],
  },
  {
    id: 't10-08',
    temaId: 10,
    stem: 'Vincular la DPO casi solo a sanción disciplinaria tiende a:',
    options: [
      'Mejorar la cultura de aprendizaje y la detección temprana de errores',
      'Ser el ideal de un sistema de calidad maduro',
      'Generar miedo, ocultación de problemas y distorsión de indicadores',
      'Sustituir con ventaja al ciclo PDCA',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El castigo como eje principal deteriora datos y aprendizaje. A, B y D describen lo contrario o confunden herramientas.',
    tags: ['calibre'],
  },
  {
    id: 't10-09',
    temaId: 10,
    stem: 'Una secuencia típica de implantación de DPO incluye:',
    options: [
      'Difusión, formación, definición de objetivos, seguimiento, evaluación y nuevo ciclo',
      'Una charla única sin definición de indicadores',
      'Ocultar las metas al personal hasta la evaluación final',
      'Prohibir indicadores para “evitar burocracia”',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Es el ciclo clásico de implantación. B, C y D vacían el método.',
    tags: ['calibre'],
  },
  {
    id: 't10-10',
    temaId: 10,
    stem: 'Los objetivos de la DPO deben enlazar preferentemente con:',
    options: [
      'Preferencias personales del evaluador sin marco estratégico',
      'Indicadores de vanidad de redes sociales',
      'La estrategia institucional (y, si existe, el CMI) y los procesos clave',
      'Solo el volumen de horas extraordinarias',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Alineación estratégica y de procesos. A, B y D generan sesgo o irrelevancia.',
    tags: ['calibre'],
  },
  {
    id: 't10-11',
    temaId: 10,
    stem: 'Un objetivo SMART en DPO se caracteriza por ser:',
    options: [
      'Genérico, inspirador y sin plazo (“ser excelentes”)',
      'Específico, medible, alcanzable, relevante y temporalizado',
      'Solo ambicioso, aunque sea inalcanzable e inmedible',
      'Secreto para el equipo hasta la evaluación',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Es la definición SMART. A, C y D incumplen alguno o todos los criterios.',
    tags: ['calibre'],
  },
  {
    id: 't10-12',
    temaId: 10,
    stem: 'En AAPP, un efecto perverso típico de fijar solo “número de expedientes resueltos” es:',
    options: [
      'Mejor calidad documental automática',
      'Mayor equidad en casos complejos',
      'Mayor cumplimiento legal sin necesidad de controles',
      'Priorizar lo fácil y acumular o rechazar lo difícil',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Gaming por selección adversa de casos. A, B y C no se garantizan; a menudo empeoran.',
    tags: ['calibre'],
  },
  {
    id: 't10-13',
    temaId: 10,
    stem: 'La participación del personal en la definición de objetivos DPO sirve sobre todo para:',
    options: [
      'Eliminar la responsabilidad directiva',
      'Aumentar compromiso, realismo de metas y conocimiento del puesto',
      'Sustituir la estrategia institucional por preferencias locales',
      'Evitar cualquier medición cuantitativa',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Participación no diluye el mando ni anula la estrategia; mejora ownership y factibilidad. A, C y D son malentendidos.',
    tags: ['calibre'],
  },
  {
    id: 't10-14',
    temaId: 10,
    stem: 'Si los datos de seguimiento de la DPO no son fiables, lo más probable es que:',
    options: [
      'La evaluación pierda credibilidad y se incentiven comportamientos oportunistas',
      'La DPO mejore automáticamente por “presión”',
      'ISO 9001 quede certificada sin auditoría',
      'El CMI se vuelva innecesario',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Sin dato fiable, la DPO se pudre. B, C y D no se siguen.',
    tags: ['calibre'],
  },
  {
    id: 't10-15',
    temaId: 10,
    stem: 'Respecto de objetivos de equipo e individuales, la afirmación más sólida es:',
    options: [
      'Solo deben existir objetivos individuales',
      'Solo deben existir objetivos de equipo, nunca individuales',
      'Conviene equilibrar contribución individual y resultados compartidos del proceso',
      'Los objetivos de equipo sustituyen siempre a los indicadores de proceso',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El equilibrio evita suboptimización y free-riding. A y B son extremos. D confunde DPO con gestión por procesos.',
    tags: ['calibre'],
  },
  {
    id: 't10-16',
    temaId: 10,
    stem: 'Un indicador de DPO “accionable” se distingue de una vanity metric porque:',
    options: [
      'Es más fácil de publicar en redes',
      'Siempre es un porcentaje',
      'No requiere línea base',
      'Orientan decisiones y se vinculan a palancas controlables del puesto/proceso',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Accionabilidad = utilidad para gestionar. A, B y C no definen calidad del indicador.',
    tags: ['calibre'],
  },
  {
    id: 't10-17',
    temaId: 10,
    stem: 'En la evaluación DPO, comparar resultados sin considerar contexto (carga, complejidad, recursos) suele:',
    options: [
      'Generar inequidad y desmotivación, aunque los números “cuadren”',
      'Garantizar meritocracia perfecta',
      'Sustituir la necesidad de feedback',
      'Eliminar el riesgo de gaming',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Sin contexto, la comparación es engañosa. B, C y D son falsas.',
    tags: ['calibre'],
  },
  {
    id: 't10-18',
    temaId: 10,
    stem: '¿Cuál es una mala práctica al negociar/acordar objetivos DPO?',
    options: [
      'Partir de línea base y capacidad real',
      'Alinear con prioridades estratégicas del año',
      'Dejar evidencia escrita de definición, fórmula y fuentes de dato',
      'Imponer metas inalcanzables “para seleccionar” sin diálogo ni recursos',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Imposición irreal sin medios destruye legitimidad. A, B y C son buenas prácticas.',
    tags: ['calibre'],
  },
  {
    id: 't10-19',
    temaId: 10,
    stem: 'El feedback en DPO es más útil cuando:',
    options: [
      'Se limita a una nota anual sin conversación',
      'Es frecuente, basado en evidencias y orientado a aprendizaje y ajuste',
      'Se usa solo para justificar sanciones ya decididas',
      'Se oculta al evaluado hasta el cierre de nómina',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Feedback cíclico y basado en datos. A, C y D degradan el sistema.',
    tags: ['calibre'],
  },
  {
    id: 't10-20',
    temaId: 10,
    stem: 'Relacionar DPO y CMI de forma correcta implica que:',
    options: [
      'La DPO sustituye al CMI y anula perspectivas',
      'El CMI sustituye a la DPO y elimina objetivos personales',
      'La DPO puede desplegar en personas/unidades objetivos coherentes con el CMI',
      'Ambos son incompatibles con ISO 9001',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Son complementarios: CMI (estratégico) y DPO (acuerdo/seguimiento de objetivos). A y B son exclusiones falsas. D es incorrecta.',
    tags: ['calibre'],
  },
  {
    id: 't10-21',
    temaId: 10,
    stem: 'Un objetivo DPO en calidad provincial más sólido sería:',
    options: [
      '“Mejorar la calidad” sin indicador',
      '“Ser líderes” sin meta ni plazo',
      'Aumentar un 5 % las publicaciones en redes sin vínculo a servicio',
      'Reducir en un 15 % el P90 de tiempo de respuesta a municipios, manteniendo tasa de retrabajo ≤ X %',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Combina meta temporal, métrica y contrapeso de calidad (anti-gaming). A y B no son SMART. C es vanity.',
    tags: ['calibre'],
  },
  {
    id: 't10-22',
    temaId: 10,
    stem: 'Cuando un objetivo DPO depende casi solo de terceros incontrolables, el problema principal es:',
    options: [
      'Falta de atribuibilidad: el evaluado no puede gestionar el resultado con palancas propias',
      'Exceso de especificidad SMART',
      'Demasiada alineación con procesos internos',
      'Exceso de indicadores leading',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Sin palancas, el objetivo es injusto e inútil para dirigir. B, C y D no describen ese fallo.',
    tags: ['calibre'],
  },
  {
    id: 't10-23',
    temaId: 10,
    stem: 'En AAPP, equilibrar “cantidad” y “calidad” en DPO sirve sobre todo para:',
    options: [
      'Eliminar la necesidad de auditorías',
      'Sustituir cartas de servicios',
      'Reducir incentivos a resolver mucho a costa de errores, inequidad o ilegalidad',
      'Evitar cualquier indicador cuantitativo',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Los contrapesos mitigan efectos perversos. A y B confunden instrumentos. D es falsa.',
    tags: ['calibre'],
  },
  {
    id: 't10-24',
    temaId: 10,
    stem: 'Señale la afirmación INCORRECTA sobre la DPO:',
    options: [
      'Requiere seguimiento periódico, no solo evaluación final',
      'Autoriza incumplir la legalidad si con ello se alcanza la meta numérica',
      'Los objetivos deben poder medirse con fuentes definidas',
      'Puede distorsionar conductas si los indicadores están mal elegidos',
    ],
    correct: 1,
    explanation:
      'Correcta: B (es la incorrecta). Ninguna DPO legítima prevalece sobre la legalidad. A, C y D son correctas.',
    tags: ['calibre'],
  },
  {
    id: 't10-25',
    temaId: 10,
    stem: 'Una revisión intermedia de objetivos DPO es especialmente útil cuando:',
    options: [
      'Se quiere ocultar desviaciones hasta diciembre',
      'Ya no hay margen de actuación',
      'Hay cambios de demanda/recursos y aún se pueden replanificar acciones',
      'Se desea evitar cualquier ajuste de metas aunque el contexto cambie radicalmente',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El seguimiento intermedio permite corregir rumbo. A, B y D niegan el valor del ciclo.',
    tags: ['calibre'],
  },
  {
    id: 't10-26',
    temaId: 10,
    stem: 'El “acuerdo” de objetivos en DPO implica, en la práctica más sana:',
    options: [
      'Comprensión compartida de definición, fórmula, fuentes, meta y criterios de evaluación',
      'Firma formal sin que el evaluado entienda el indicador',
      'Metas distintas secretas para cada persona sin criterio',
      'Evaluación retrospectiva inventada al final',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Acuerdo real = claridad compartida. B, C y D son formalismos o arbitrariedad.',
    tags: ['calibre'],
  },
  {
    id: 't10-27',
    temaId: 10,
    stem: 'Si la DPO se usa solo como ritual de RR. HH. desconectado de la operativa, el resultado más probable es:',
    options: [
      'Mejora automática de procesos clave',
      'Alineación estratégica reforzada',
      'Datos más fiables de servicio',
      'Cinismo organizativo y pérdida de valor como sistema de dirección',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Desconexión operativa vacía la DPO. A, B y C no se producen en ese escenario.',
    tags: ['calibre'],
  },
  {
    id: 't10-28',
    temaId: 10,
    stem: 'Un buen contrapeso anti-gaming para un objetivo de “reducir tiempos” sería:',
    options: [
      'Eliminar muestreo de calidad',
      'Añadir indicador de retrabajo/errores o de conformidad documental',
      'Premiar solo el volumen diario',
      'Ignorar reclamaciones asociadas',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Contrapesos de calidad/conformidad mitigan acelerar mal. A, C y D agravan el gaming.',
    tags: ['calibre'],
  },
  {
    id: 't10-29',
    temaId: 10,
    stem: 'Respecto del número de objetivos por persona/unidad, la orientación más prudente es:',
    options: [
      'Pocos objetivos prioritarios y medibles, antes que una lista interminable',
      'Cuantos más objetivos, mejor la priorización',
      'Un único objetivo de vanidad basta siempre',
      'Objetivos sin límite porque “todo es importante”',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Foco > exhaustividad. B y D dispersan. C puede ser insuficiente o irrelevante.',
    tags: ['calibre'],
  },
  {
    id: 't10-30',
    temaId: 10,
    stem: 'En una Diputación, un objetivo DPO alineado con asistencia a municipios pequeños podría ser:',
    options: [
      'Maximizar visitas solo a municipios grandes por comodidad',
      'Reducir asistencia a quien más la necesita para subir ratios medios',
      'Aumentar el % de resoluciones útiles en municipios de menor capacidad, con calidad verificada',
      'Medir solo el número de correos enviados por el área',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Orientación a valor y equidad territorial. A y B contradicen el mandato. D es vanity/actividad sin resultado.',
    tags: ['calibre'],
  },
  {
    id: 't10-31',
    temaId: 10,
    stem: 'La diferencia clave entre “objetivo” e “indicador” en DPO es:',
    options: [
      'No hay diferencia: son sinónimos estrictos',
      'El objetivo expresa el resultado deseado; el indicador es la métrica que permite seguirlo',
      'El indicador sustituye siempre a la meta',
      'El objetivo es solo cualitativo y el indicador solo sancionador',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Objetivo (qué lograr) vs indicador (cómo medirlo). A, C y D son incorrectas.',
    tags: ['calibre'],
  },
  {
    id: 't10-32',
    temaId: 10,
    stem: 'Señale el enunciado que mejor resume la DPO en AAPP de calidad:',
    options: [
      'Sistema para premiar solo el volumen, aunque se vulnere la legalidad',
      'Sustituto del presupuesto y de la planificación estratégica',
      'Equivalente exacto a una auditoría de tercera parte',
      'Acuerdo, medición y seguimiento de objetivos alineados, sin empujar a ilegalidad ni gaming',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Resume pilares y límites éticos/legales. A, B y C son confusiones graves.',
    tags: ['calibre'],
  },
]

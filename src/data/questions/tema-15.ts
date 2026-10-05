import type { Question } from '../../types'

/** Tema 15: Herramientas básicas de calidad — banco Calibre. */
export const TEMA_15_QUESTIONS: Question[] = [
  {
    id: 't15-01',
    temaId: 15,
    stem: 'El diagrama de Ishikawa (causa-efecto) se usa preferentemente para:',
    options: [
      'Estructurar causas potenciales de un efecto/problema en familias (p. ej. 6M)',
      'Priorizar las pocas causas que concentran el 80 % del efecto mediante barras acumuladas',
      'Monitorizar estabilidad del proceso con límites de control en el tiempo',
      'Mostrar la forma y dispersión de una distribución de tiempos de trámite',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Ishikawa = mapa de causas potenciales. Pareto prioriza; gráfico de control monitoriza estabilidad; histograma muestra distribución.',
    tags: ['calibre'],
  },
  {
    id: 't15-02',
    temaId: 15,
    stem: 'El análisis de Pareto (80/20) en mejora sirve para:',
    options: [
      'Tratar todas las causas con el mismo esfuerzo por principio de equidad',
      'Priorizar las pocas causas o categorías vitales que explican la mayor parte del efecto',
      'Sustituir la recogida de datos por brainstorming sin cuantificar',
      'Dibujar el flujo SIPOC de proveedores y clientes',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Vital few vs trivial many. No iguala esfuerzos a ciegas ni sustituye datos; SIPOC es otra herramienta.',
    tags: ['calibre'],
  },
  {
    id: 't15-03',
    temaId: 15,
    stem: 'Ante demoras en un trámite, la secuencia metodológica más sólida es:',
    options: [
      'Sancionar sin datos y archivar el expediente de mejora',
      'Cuantificar (histograma/Pareto) → explorar causas (Ishikawa/5 porqués) → acciones PDCA → verificar',
      'Añadir formularios sin medir el impacto',
      'Cambiar la Carta de Servicios en silencio sin indicadores',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Datos → causas → acción → verificación. Sancionar, burocratizar u ocultar no es método de calidad.',
    tags: ['calibre'],
  },
  {
    id: 't15-04',
    temaId: 15,
    stem: 'SIPOC frente a un flujograma detallado:',
    options: [
      'Son idénticos: ambos detallan cada decisión operativa',
      'SIPOC sustituye a los indicadores de proceso',
      'El flujograma prohíbe identificar clientes del proceso',
      'SIPOC delimita alcance (proveedores-entradas-proceso-salidas-clientes); el flujograma detalla la secuencia',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Niveles distintos de detalle. SIPOC acota; el flujo narra pasos. No sustituyen indicadores ni niegan clientes.',
    tags: ['calibre'],
  },
  {
    id: 't15-05',
    temaId: 15,
    stem: 'Un histograma de tiempos de resolución permite ver principalmente:',
    options: [
      'Forma, centro y dispersión de la distribución de los datos',
      'Las causas raíz agrupadas en espina de pez',
      'Si el proceso está fuera de control por puntos más allá de límites',
      'La priorización 80/20 de categorías de reclamación',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Histograma = distribución. Ishikawa = causas; control = estabilidad temporal; Pareto = priorización de categorías.',
    tags: ['calibre'],
  },
  {
    id: 't15-06',
    temaId: 15,
    stem: 'Un gráfico de control (carta de control) monitoriza:',
    options: [
      'La estabilidad y la variación del proceso a lo largo del tiempo',
      'La matriz de priorización impacto-esfuerzo de proyectos',
      'El DAFO estratégico de la Diputación',
      'Las 5 preguntas sucesivas hacia la causa raíz',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Control chart = variación en el tiempo y señales de descontrol. Matriz, DAFO y 5 porqués son otras herramientas.',
    tags: ['calibre'],
  },
  {
    id: 't15-07',
    temaId: 15,
    stem: 'La técnica de los 5 porqués se orienta a:',
    options: [
      'Representar la distribución de una variable continua',
      'Trazar límites superior e inferior de control',
      'Profundizar en la causa raíz mediante preguntas sucesivas “¿por qué?”',
      'Ordenar barras de mayor a menor frecuencia acumulada',
    ],
    correct: 2,
    explanation:
      'Correcta: C. 5 porqués = profundidad causal. Histograma, control y Pareto cubren otras funciones.',
    tags: ['calibre'],
  },
  {
    id: 't15-08',
    temaId: 15,
    stem: 'Una matriz de priorización (p. ej. impacto vs esfuerzo) es más adecuada cuando:',
    options: [
      'Hay que dibujar la secuencia de actividades de un procedimiento',
      'Se necesita ver si hay causas especiales en un gráfico de control',
      'Hay varias acciones posibles y debe decidirse por cuáles empezar con criterios explícitos',
      'Se quiere la forma asimétrica de un histograma',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Priorizar iniciativas. Flujo, control e histograma no sustituyen esa decisión multicriterio.',
    tags: ['calibre'],
  },
  {
    id: 't15-09',
    temaId: 15,
    stem: 'El flujograma de un proceso sirve especialmente para:',
    options: [
      'Visualizar la secuencia real (pasos, decisiones, esperas, bucles y traspasos)',
      'Sustituir el análisis de Pareto de defectos',
      'Acreditar el laboratorio ante ENAC',
      'Emitir el certificado ISO 9001',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El dibujo del proceso revela fricciones. No certifica, no acredita ni reemplaza Pareto.',
    tags: ['calibre'],
  },
  {
    id: 't15-10',
    temaId: 15,
    stem: 'Si el objetivo es “separar las vital few de las trivial many” en tipologías de error, la herramienta idónea es:',
    options: [
      'El DAFO',
      'El gráfico de dispersión sin categorías',
      'El diagrama de Pareto',
      'La Carta de Servicios',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Pareto clasifica y acumula para priorizar. DAFO es estratégico; dispersión relaciona variables; la Carta es compromiso ciudadano.',
    tags: ['calibre'],
  },
  {
    id: 't15-11',
    temaId: 15,
    stem: 'El DAFO (SWOT) en el arsenal del tema se usa sobre todo para:',
    options: [
      'Controlar límites estadísticos de un indicador semanal',
      'Analizar fortalezas, debilidades, oportunidades y amenazas de la organización o unidad',
      'Contar frecuencias de defectos en un histograma',
      'Construir la espina de pez de un problema operativo concreto',
    ],
    correct: 1,
    explanation:
      'Correcta: B. DAFO = diagnóstico estratégico/organizativo. No es control chart, histograma ni Ishikawa.',
    tags: ['calibre'],
  },
  {
    id: 't15-12',
    temaId: 15,
    stem: 'Elegir Ishikawa cuando lo que se necesita es un Pareto sería un error porque:',
    options: [
      'Ishikawa genera hipótesis de causas; Pareto cuantifica y prioriza categorías ya medidas',
      'Ishikawa ya ordena automáticamente las causas por frecuencia acumulada',
      'Pareto no requiere datos y Ishikawa sí',
      'Ambas herramientas son intercambiables en cualquier fase',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Roles distintos: brainstorming estructurado vs priorización cuantitativa. No son intercambiables.',
    tags: ['calibre'],
  },
  {
    id: 't15-13',
    temaId: 15,
    stem: 'Una hoja de recogida de datos (check sheet) aporta valor al:',
    options: [
      'Sustituir el PDCA completo',
      'Emitir acreditaciones ENAC',
      'Definir la visión estratégica de la Diputación',
      'Estructurar de forma simple el registro de hechos/frecuencias para análisis posterior',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Base de datos limpios. No sustituye PDCA ni crea acreditación/visión.',
    tags: ['calibre'],
  },
  {
    id: 't15-14',
    temaId: 15,
    stem: 'El diagrama de dispersión (scatter) es útil para:',
    options: [
      'Dibujar el organigrama oficial',
      'Sustituir los 5 porqués en todo diagnóstico',
      'Publicar la Carta de Servicios',
      'Explorar la relación entre dos variables cuantitativas',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Correlación visual entre variables. No es organigrama, ni reemplaza 5 porqués, ni es la Carta.',
    tags: ['calibre'],
  },
  {
    id: 't15-15',
    temaId: 15,
    stem: 'La estratificación de datos consiste en:',
    options: [
      'Prohibir el uso de histogramas',
      'Mezclar todas las fuentes para ocultar diferencias',
      'Separar los datos por categorías relevantes (turno, sede, canal…) para ver patrones ocultos',
      'Calcular solo el promedio global sin más análisis',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Desagregar para aprender. Mezclar u “solo el promedio” puede ocultar la señal.',
    tags: ['calibre'],
  },
  {
    id: 't15-16',
    temaId: 15,
    stem: 'En un gráfico de control, un punto más allá de los límites de control sugiere preferentemente:',
    options: [
      'Una posible causa especial / señal de que el proceso puede no estar bajo control estadístico',
      'Que el DAFO está mal formulado',
      'Que la Carta de Servicios debe publicarse mañana',
      'Que SIPOC ya no es necesario',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Señal de causa especial a investigar. No implica automáticamente DAFO, Carta o fin de SIPOC.',
    tags: ['calibre'],
  },
  {
    id: 't15-17',
    temaId: 15,
    stem: 'Para delimitar un proceso antes de mejorarlo, la herramienta más directa entre las siguientes es:',
    options: [
      'SIPOC (o mapa/ficha de proceso) que aclare proveedores, entradas, salidas y clientes',
      'Solo un histograma sin definir el proceso',
      'Solo Pareto de reclamaciones sin saber el flujo',
      'Solo 5 porqués sin alcance del problema',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Primero delimitar. Histograma/Pareto/5P ayudan después, pero no definen el perímetro.',
    tags: ['calibre'],
  },
  {
    id: 't15-18',
    temaId: 15,
    stem: '¿Qué herramienta encaja peor si la pregunta es “¿está estable el tiempo medio semanal de resolución?”?',
    options: [
      'Gráfico de control del indicador en el tiempo',
      'Serie temporal con criterios de estabilidad',
      'Análisis de causas especiales tras señales fuera de límites',
      'Diagrama de Ishikawa sin datos temporales del indicador',
    ],
    correct: 3,
    explanation:
      'Correcta: D (la que peor encaja). Ishikawa no responde por sí a estabilidad temporal; control/serie sí.',
    tags: ['calibre'],
  },
  {
    id: 't15-19',
    temaId: 15,
    stem: 'Los “7 herramientas básicas” clásicas de calidad incluyen, entre otras:',
    options: [
      'Solo DAFO y CMI, excluyendo gráficos',
      'Solo Cartas de Servicios y sellos ENAC',
      'Únicamente RADAR de EFQM',
      'Histograma, Pareto, Ishikawa, dispersión, hojas de datos, estratificación y gráficos de control (según listados clásicos)',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El set clásico es de herramientas estadísticas/gráficas de calidad. DAFO/CMI/Carta/ENAC/RADAR son otros instrumentos.',
    tags: ['calibre'],
  },
  {
    id: 't15-20',
    temaId: 15,
    stem: 'Si tras un Pareto queda claro el “vital few”, el siguiente paso típico es:',
    options: [
      'Archivar sin actuar porque “ya está priorizado”',
      'Cambiar de tema al CMI sin analizar causas',
      'Analizar causas (Ishikawa/5 porqués) de esas categorías prioritarias y planificar acciones PDCA',
      'Publicar un eslogan en la Carta sin métrica',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Priorizar no basta: hay que explicar causas y actuar. Archivar o marketing no cierran el ciclo.',
    tags: ['calibre'],
  },
  {
    id: 't15-21',
    temaId: 15,
    stem: 'Un error típico al usar los 5 porqués es:',
    options: [
      'Combinarlos con Ishikawa para estructurar familias de causas',
      'Detenerse en la primera respuesta superficial sin contrastar con datos',
      'Verificar la causa raíz con evidencias antes de actuar',
      'Documentar la cadena de porqués para el equipo',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Parar en la superficie invalida la técnica. B–D son usos sanos.',
    tags: ['calibre'],
  },
  {
    id: 't15-22',
    temaId: 15,
    stem: 'Cuando el histograma es bimodal, una hipótesis razonable es:',
    options: [
      'Que el proceso es necesariamente excelente EFQM',
      'Que pueden coexistir dos poblaciones o condiciones distintas (p. ej. dos sedes/canales) y conviene estratificar',
      'Que Pareto queda prohibido',
      'Que el gráfico de control ya no tiene sentido nunca',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Bimodalidad sugiere mezclas; estratificar. No implica excelencia ni invalida otras herramientas.',
    tags: ['calibre'],
  },
  {
    id: 't15-23',
    temaId: 15,
    stem: 'La relación correcta entre “proceso bajo control” y “proceso capaz” es:',
    options: [
      'Son sinónimos perfectos en todos los casos',
      'Puede estar estable (bajo control) y aun así ser incapaz de cumplir requisitos: entonces hay que mejorar el sistema',
      'Si está bajo control, siempre cumple especificaciones',
      'Si es capaz, nunca necesita gráficos de control',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Estabilidad ≠ capacidad. Un proceso estable puede incumplir specs de forma sistemática.',
    tags: ['calibre'],
  },
  {
    id: 't15-24',
    temaId: 15,
    stem: 'Para comparar visualmente la frecuencia de cinco tipos de incidencia y su peso acumulado, lo más directo es:',
    options: [
      'Un DAFO',
      'Un SIPOC',
      'Un diagrama de Pareto',
      'Unos 5 porqués sin datos',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Pareto = frecuencias + acumulado. DAFO/SIPOC/5P no cumplen esa función gráfica.',
    tags: ['calibre'],
  },
  {
    id: 't15-25',
    temaId: 15,
    stem: 'En un taller de causas, las “6M” (mano de obra, máquina, material, método, medio, medición) se asocian típicamente a:',
    options: [
      'El gráfico de control como límites',
      'El histograma como intervalos de clase',
      'La matriz de priorización como ejes impacto-esfuerzo',
      'El diagrama de Ishikawa como familias de causas',
    ],
    correct: 3,
    explanation:
      'Correcta: D. 6M = categorías clásicas de espina de pez. No son los ejes de control, histograma o matriz.',
    tags: ['calibre'],
  },
  {
    id: 't15-26',
    temaId: 15,
    stem: 'Si la pregunta del supuesto es “¿qué acción abordar primero con recursos limitados?”, la herramienta más alineada es:',
    options: [
      'Solo el flujograma as-is sin criterios de decisión',
      'Solo el histograma de una variable irrelevante',
      'Una matriz de priorización (y/o Pareto si hay datos de impacto)',
      'Solo publicar el organigrama',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Decidir con criterios (impacto/esfuerzo o peso del problema). Flujo/histograma/organigrama no priorizan solos.',
    tags: ['calibre'],
  },
  {
    id: 't15-27',
    temaId: 15,
    stem: 'El PDCA conecta con estas herramientas porque:',
    options: [
      'Prohíbe usar Pareto o Ishikawa en la fase Plan',
      'Sustituye cualquier medición por intuición directiva',
      'Planificar usa diagnóstico (datos/causas); hacer prueba acciones; verificar con indicadores/gráficos; actuar estandariza o corrige',
      'Solo aplica a certificación ENAC',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Las herramientas alimentan el ciclo PDCA. No las prohíbe ni sustituye datos; ENAC no es el dueño del PDCA.',
    tags: ['calibre'],
  },
  {
    id: 't15-28',
    temaId: 15,
    stem: 'Usar un gráfico de control para “priorizar las categorías de reclamación más frecuentes” es un mal encaje porque:',
    options: [
      'El gráfico de control es idéntico al Pareto',
      'Esa necesidad la cubre mejor un Pareto (o tabla de frecuencias); el control mira estabilidad temporal de un indicador',
      'El gráfico de control no existe en servicios públicos',
      'Las reclamaciones no pueden medirse',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Wrong tool for the job: control ≠ ranking de categorías. Las reclamaciones sí se pueden medir.',
    tags: ['calibre'],
  },
  {
    id: 't15-29',
    temaId: 15,
    stem: 'Un mapa de procesos en el conjunto de herramientas organiza:',
    options: [
      'Solo las cuentas anuales',
      'Únicamente los límites de control de un KPI',
      'La acreditación del certificador',
      'La visión de conjunto de procesos estratégicos, clave y de soporte y sus relaciones',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Visión de sistema de procesos. No es contabilidad, ni control chart, ni ENAC.',
    tags: ['calibre'],
  },
  {
    id: 't15-30',
    temaId: 15,
    stem: 'En la 2ª parte del examen, una combinación metódica sólida suele ser:',
    options: [
      'Sancionar → archivar → no medir',
      'Delimitar (SIPOC/flujo) → cuantificar (Pareto/histograma) → causas (Ishikawa/5P) → priorizar → PDCA con indicadores',
      'Eslogan → sello → silencio',
      'DAFO → olvidar datos operativos → cambiar la Carta sin evidencia',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Cadena completa de diagnóstico a mejora. Las otras son anti-método.',
    tags: ['calibre'],
  },
  {
    id: 't15-31',
    temaId: 15,
    stem: 'Señale la pareja herramienta–uso CORRECTA:',
    options: [
      'Histograma → emitir certificado ISO',
      'Pareto → dibujar proveedores y clientes del SIPOC',
      'Gráfico de control → matriz impacto-esfuerzo',
      'Ishikawa → estructurar causas potenciales de un efecto',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Las otras emparejan mal la herramienta con el uso (certificar, SIPOC, priorizar).',
    tags: ['calibre'],
  },
  {
    id: 't15-32',
    temaId: 15,
    stem: 'Síntesis del tema 15:',
    options: [
      'Hay que elegir la herramienta según el propósito: delimitar, cuantificar, priorizar, buscar causas, ver distribución/estabilidad u organizar el diagnóstico; el error típico es usar la herramienta equivocada',
      'Todas las herramientas sirven para lo mismo; da igual cuál se elija',
      'Solo el Pareto es válido en AAPP; el resto están derogados',
      'Ishikawa sustituye a datos, indicadores y PDCA',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Encaje propósito–herramienta. No son intercambiables ni “solo Pareto”; Ishikawa no anula datos ni PDCA.',
    tags: ['calibre'],
  },
]

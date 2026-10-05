import type { Question } from '../../types'

/** Tema 11: Auditorías de calidad e ISO 19011. Preguntas calibre. */
export const TEMA_11_QUESTIONS: Question[] = [
  {
    id: 't11-01',
    temaId: 11,
    stem: 'ISO 19011 es, de forma más precisa:',
    options: [
      'Norma de requisitos certificables del SGC, equivalente a ISO 9001',
      'Modelo de excelencia EFQM de autoevaluación',
      'Directrices para la auditoría de sistemas de gestión',
      'Ley de Bases de Régimen Local',
    ],
    correct: 2,
    explanation:
      'Correcta: C. 19011 da directrices de auditoría (principios, programa, competencia, etc.), no requisitos certificables de SGC. A confunde con 9001. B y D son otros marcos.',
    tags: ['calibre'],
  },
  {
    id: 't11-02',
    temaId: 11,
    stem: 'Una auditoría de tercera parte es la que:',
    options: [
      'Realiza un organismo independiente (p. ej. con fines de certificación)',
      'Realiza exclusivamente el propio proceso auditado sobre sí mismo',
      'Solo puede realizarla la Intervención general del Estado',
      'Sustituye la publicación en el BOP de las bases de convocatoria',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Tercera parte = independiente/externa (p. ej. certificación). B describe mal la interna. C y D son ajenas al concepto.',
    tags: ['calibre'],
  },
  {
    id: 't11-03',
    temaId: 11,
    stem: 'Una auditoría de segunda parte, típicamente:',
    options: [
      'Es idéntica a la acreditación ENAC',
      'La realiza siempre el organismo de certificación acreditado',
      'No existe en el ámbito de la calidad',
      'La realiza una parte interesada externa (p. ej. cliente) sobre el proveedor',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Segunda parte = cliente/parte interesada sobre proveedor. A confunde con acreditación. B es más tercera parte. C es falsa.',
    tags: ['calibre'],
  },
  {
    id: 't11-04',
    temaId: 11,
    stem: 'Señale un conjunto de principios alineados con ISO 19011:',
    options: [
      'Auditar sin evidencias y con dependencia total del auditado',
      'Integridad, presentación imparcial, debido cuidado, confidencialidad, independencia, enfoque basado en evidencias y en el riesgo',
      'Publicar datos personales del personal auditado sin base',
      'Maximizar no conformidades inventadas para “demostrar rigor”',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Resume principios típicos de 19011. A, C y D los vulneran.',
    tags: ['calibre'],
  },
  {
    id: 't11-05',
    temaId: 11,
    stem: 'Una no conformidad es, en sentido estricto:',
    options: [
      'Incumplimiento de un requisito',
      'Cualquier oportunidad de mejora, aunque se cumplan los requisitos',
      'Un logro del proceso auditado',
      'La visión estratégica de la organización',
    ],
    correct: 0,
    explanation:
      'Correcta: A. NC = incumplimiento de requisito. B describe más OFI/observación potencial. C y D no son hallazgos de auditoría.',
    tags: ['calibre'],
  },
  {
    id: 't11-06',
    temaId: 11,
    stem: 'Confundir una observación/OFI con una NC grave es un error porque:',
    options: [
      'Todas las OFI son NC automáticamente según ISO',
      'ISO 19011 prohíbe registrar oportunidades de mejora',
      'No todo hallazgo es incumplimiento de requisito; graduar mal debilita el informe',
      'Las NC no existen en auditorías internas',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Hay que distinguir incumplimiento (NC) de mejora potencial. A, B y D son falsas.',
    tags: ['calibre'],
  },
  {
    id: 't11-07',
    temaId: 11,
    stem: 'El programa de auditoría define, de forma más adecuada:',
    options: [
      'Solo la agenda horaria de una entrevista concreta',
      'El conjunto de auditorías planificadas en un periodo, con objetivos y recursos',
      'Únicamente el texto del certificado ISO 9001',
      'La reforma constitucional aplicable',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Programa = planificación plurianual/periodica del conjunto. A es más propio del plan de una auditoría. C y D son ajenos.',
    tags: ['calibre'],
  },
  {
    id: 't11-08',
    temaId: 11,
    stem: 'El plan de una auditoría concreta suele fijar:',
    options: [
      'Solo los colores corporativos del informe',
      'La lista electoral del municipio',
      'Nada operativo: basta el programa anual',
      'Alcance, criterios, agenda, equipo auditor y logística',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El plan aterriza una auditoría específica. A y B son irrelevantes. C confunde programa y plan.',
    tags: ['calibre'],
  },
  {
    id: 't11-09',
    temaId: 11,
    stem: 'La independencia del auditor implica, sobre todo:',
    options: [
      'Imparcialidad y gestión de conflictos de interés relevantes',
      'Amistad con el auditado para suavizar hallazgos',
      'Ignorar evidencias que incomoden a la dirección',
      'Cobrar un plus por no reportar no conformidades',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Independencia = objetividad e imparcialidad. B, C y D son violaciones éticas.',
    tags: ['calibre'],
  },
  {
    id: 't11-10',
    temaId: 11,
    stem: 'El muestreo en auditoría es necesario porque, entre otras razones:',
    options: [
      'La auditoría debe revisar el 100 % de registros siempre',
      'No es viable revisar toda la población; se infiere a partir de una muestra razonable',
      'El muestreo sustituye la necesidad de criterios de auditoría',
      'ISO 19011 prohíbe examinar documentos',
    ],
    correct: 1,
    explanation:
      'Correcta: B. La auditoría trabaja por muestreo con limitaciones explícitas. A es inviable en general. C y D son falsas.',
    tags: ['calibre'],
  },
  {
    id: 't11-11',
    temaId: 11,
    stem: 'Una auditoría interna (primera parte) se caracteriza porque:',
    options: [
      'La realiza siempre un organismo de certificación acreditado',
      'Es idéntica a una inspección de trabajo',
      'La organiza la propia organización sobre su SGC/procesos, con independencia relativa del área auditada',
      'Solo puede hacerse tras perder el certificado',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Interna = 1ª parte. A es 3ª parte. B confunde ámbitos. D es falsa.',
    tags: ['calibre'],
  },
  {
    id: 't11-12',
    temaId: 11,
    stem: 'Respecto de ISO 19011 e ISO 9001, la afirmación correcta es:',
    options: [
      '19011 certifica el SGC; 9001 solo da consejos de auditoría',
      'Ambas son el mismo documento con distinto nombre',
      '19011 sustituye los requisitos de 9001 en AAPP',
      '9001 fija requisitos de SGC (certificables); 19011 orienta cómo auditar sistemas de gestión',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Distinción clave de temario. A invierte roles. B y C son falsas.',
    tags: ['calibre'],
  },
  {
    id: 't11-13',
    temaId: 11,
    stem: 'La evidencia objetiva en auditoría es, de forma más rigurosa:',
    options: [
      'La opinión personal del auditor sin soporte',
      'Registros, hechos verificables u otra información que respalda hallazgos',
      'Un rumor de pasillo confirmado por un solo comentario',
      'La hipótesis estratégica del mapa del CMI',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Enfoque basado en evidencias. A y C no bastan. D pertenece a gestión estratégica, no a evidencia de conformidad.',
    tags: ['calibre'],
  },
  {
    id: 't11-14',
    temaId: 11,
    stem: 'El ciclo típico de una auditoría (visión de proceso) incluye:',
    options: [
      'Programa → plan → ejecución → informe → seguimiento de acciones',
      'Solo informe final sin planificación',
      'Certificación automática sin visita',
      'Sanción disciplinaria previa al muestreo',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Es la secuencia estándar. B, C y D omiten o distorsionan etapas esenciales.',
    tags: ['calibre'],
  },
  {
    id: 't11-15',
    temaId: 11,
    stem: 'La confidencialidad como principio de auditoría implica:',
    options: [
      'Publicar hallazgos con datos personales innecesarios',
      'Ocultar no conformidades graves a la dirección del auditado',
      'Compartir el informe con cualquiera que lo pida, sin criterio',
      'Proteger información sensible obtenida y usarla solo para los fines de la auditoría',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Confidencialidad no equivale a ocultar NC a quien debe conocerlas (cliente de la auditoría), sino a no divulgar indebidamente. A, B y C son usos incorrectos.',
    tags: ['calibre'],
  },
  {
    id: 't11-16',
    temaId: 11,
    stem: 'Un auditor interno no debería auditar, en condiciones normales:',
    options: [
      'Un proceso ajeno a su responsabilidad directa, con independencia razonable',
      'Un proveedor externo en auditoría de segunda parte bien encargada',
      'Su propio trabajo reciente (conflicto de interés / falta de independencia)',
      'Un área distinta tras un periodo de cooling-off adecuado, si procede',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Auditar el propio trabajo vulnera independencia. A, B y D pueden ser aceptables según contexto y salvaguardas.',
    tags: ['calibre'],
  },
  {
    id: 't11-17',
    temaId: 11,
    stem: 'Los criterios de auditoría son:',
    options: [
      'Las preferencias estéticas del equipo auditor',
      'Solo las quejas de redes sociales del mes',
      'El número máximo de NC que “hay que” encontrar',
      'El conjunto de políticas, procedimientos o requisitos frente a los que se compara la evidencia',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Criterios = referencial (p. ej. ISO 9001, procedimientos internos, requisitos legales aplicables al alcance). A, B y C son incorrectos.',
    tags: ['calibre'],
  },
  {
    id: 't11-18',
    temaId: 11,
    stem: 'El alcance de la auditoría delimita, principalmente:',
    options: [
      'Extensión y límites (unidades, procesos, ubicaciones, periodo) objeto de la auditoría',
      'El color de la tipografía del informe',
      'La sanción aplicable al personal',
      'El presupuesto general de la Diputación',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Alcance = qué se audita y hasta dónde. B, C y D no definen alcance.',
    tags: ['calibre'],
  },
  {
    id: 't11-19',
    temaId: 11,
    stem: 'Un informe de auditoría debería, como mínimo, permitir:',
    options: [
      'Sustituir el sistema de gestión por el propio informe',
      'Ocultar el muestreo y las limitaciones',
      'Comprender hallazgos, evidencias, conclusiones y, en su caso, no conformidades con trazabilidad',
      'Evitar cualquier recomendación o OFI aunque aporte valor',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El informe comunica resultados con base en evidencias. A es absurdo. B vulnera transparencia metodológica. D: las OFI pueden ser útiles si no se confunden con NC.',
    tags: ['calibre'],
  },
  {
    id: 't11-20',
    temaId: 11,
    stem: 'El seguimiento tras la auditoría sirve sobre todo para:',
    options: [
      'Archivar el informe y no volver a mirarlo',
      'Verificar que las acciones correctivas/preventivas abordan causas y son eficaces',
      'Repetir la misma NC sin comprobar cierre',
      'Sustituir la dirección por el equipo auditor',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Cierre eficaz de hallazgos. A, C y D distorsionan el ciclo.',
    tags: ['calibre'],
  },
  {
    id: 't11-21',
    temaId: 11,
    stem: 'El enfoque basado en el riesgo en la auditoría (19011) orienta, entre otras cosas, a:',
    options: [
      'Priorizar áreas/procesos con mayor riesgo e impacto en el alcance y el muestreo',
      'Auditar solo lo trivial para acabar antes',
      'Ignorar procesos críticos si “siempre salieron bien”',
      'Eliminar la planificación del programa',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El riesgo informa prioridades de auditoría. B, C y D van en sentido contrario.',
    tags: ['calibre'],
  },
  {
    id: 't11-22',
    temaId: 11,
    stem: 'Señale la afirmación INCORRECTA:',
    options: [
      'La auditoría aporta evidencia sobre conformidad y/o eficacia',
      'La auditoría no sustituye la gestión cotidiana del proceso',
      'La auditoría no debe usarse como mero instrumento de castigo',
      'Una auditoría interna elimina la necesidad de indicadores de proceso y de DPO',
    ],
    correct: 3,
    explanation:
      'Correcta: D (es la incorrecta). Auditar complementa, no sustituye, medición y dirección. A, B y C son afirmaciones sólidas.',
    tags: ['calibre'],
  },
  {
    id: 't11-23',
    temaId: 11,
    stem: 'Una no conformidad mayor (en contextos donde se gradúa así) suele asociarse a:',
    options: [
      'Una OFI sin gap de requisito',
      'Un incumplimiento que afecta a la capacidad del sistema o es sistémico/grave respecto de un requisito',
      'Un cumplido al equipo auditado',
      'Un indicador leading del CMI',
    ],
    correct: 1,
    explanation:
      'Correcta: B. La gradación mayor/menor (según esquema) refleja gravedad/sistematicidad. A no es NC. C y D son ajenos.',
    tags: ['calibre'],
  },
  {
    id: 't11-24',
    temaId: 11,
    stem: 'Durante la ejecución, una buena práctica del auditor es:',
    options: [
      'Formular conclusiones antes de recoger evidencias',
      'Aceptar como evidencia exclusiva declaraciones sin contrastar nunca',
      'Triangular fuentes (documentos, entrevistas, observación) y registrar evidencias',
      'Negociar la desaparición de hallazgos a cambio de favores',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Triangulación y registro sostienen hallazgos. A, B y D vulneran método y ética.',
    tags: ['calibre'],
  },
  {
    id: 't11-25',
    temaId: 11,
    stem: 'La competencia del auditor (19011) incluye, de forma típica:',
    options: [
      'Solo antigüedad en la organización, sin conocimientos de auditoría',
      'Conocimientos/habilidades de auditoría, del referencial y del contexto auditado, mantenidos en el tiempo',
      'Únicamente simpatía personal con la dirección',
      'La facultad de modificar requisitos legales',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Competencia = combinación de conocimientos y habilidades relevantes, con mantenimiento. A, C y D no bastan o son incorrectas.',
    tags: ['calibre'],
  },
  {
    id: 't11-26',
    temaId: 11,
    stem: 'Si el muestreo no encuentra NC, lo más correcto es concluir que:',
    options: [
      'El sistema es perfecto al 100 % en toda la población',
      'ISO 9001 queda certificada automáticamente',
      'No hace falta programa futuro de auditorías',
      'No se hallaron incumplimientos en la muestra examinada, con las limitaciones del muestreo',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Ausencia de hallazgo en muestra ≠ certeza absoluta sobre toda la población. A, B y C exageran.',
    tags: ['calibre'],
  },
  {
    id: 't11-27',
    temaId: 11,
    stem: 'La reunión de apertura de una auditoría sirve principalmente para:',
    options: [
      'Confirmar alcance, criterios, plan, canales de comunicación y logística con el auditado',
      'Emitir el certificado final',
      'Cerrar todas las NC antes de empezar',
      'Sustituir la necesidad de evidencias',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Alineación inicial. B, C y D no corresponden a esa fase.',
    tags: ['calibre'],
  },
  {
    id: 't11-28',
    temaId: 11,
    stem: 'La reunión de cierre suele utilizarse para:',
    options: [
      'Ocultar hallazgos hasta el año siguiente',
      'Negociar la eliminación de evidencias',
      'Presentar hallazgos y conclusiones de forma comprensible y posibilitar aclaraciones',
      'Cambiar el alcance a posteriori sin criterio',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Cierre = comunicación de resultados y aclaraciones. A, B y D son malas prácticas.',
    tags: ['calibre'],
  },
  {
    id: 't11-29',
    temaId: 11,
    stem: 'En una Diputación, un ejemplo típico de auditoría interna de calidad sería:',
    options: [
      'La certificación inicial por organismo acreditado sin equipo interno',
      'Una visita del cliente externo al proveedor sin encargo interno',
      'La revisión planificada del proceso de asistencia a municipios frente a procedimientos e indicadores del SGC, por auditores internos independientes del área',
      'El control parlamentario del Pleno',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Encaja en 1ª parte. A es 3ª. B es más 2ª. D es control político, no auditoría de SGC.',
    tags: ['calibre'],
  },
  {
    id: 't11-30',
    temaId: 11,
    stem: '“Debido cuidado profesional” del auditor implica:',
    options: [
      'Garantizar resultados favorables al auditado',
      'Aplicar juicio diligente, reconocer limitaciones y no extralimitarse en conclusiones',
      'Ignorar el riesgo en la planificación',
      'Revelar información confidencial en redes',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Debido cuidado = diligencia y prudencia profesional. A, C y D lo contradicen.',
    tags: ['calibre'],
  },
  {
    id: 't11-31',
    temaId: 11,
    stem: 'Una observación de auditoría (frente a una NC) se usa con más propiedad cuando:',
    options: [
      'Se identifica un riesgo o mejora potencial sin incumplimiento demostrable de requisito',
      'Hay evidencia de fallo sistémico grave del SGC',
      'Existe incumplimiento claro de un requisito documentado',
      'Se quiere elevar artificialmente la gravedad del informe',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Observación/OFI ≠ NC. B y C apuntan a NC (posible mayor). D es mala praxis.',
    tags: ['calibre'],
  },
  {
    id: 't11-32',
    temaId: 11,
    stem: 'El error de test más frecuente sobre auditorías e ISO 19011 es:',
    options: [
      'Distinguir interna, segunda y tercera parte',
      'Separar NC de OFI/observación',
      'Recordar que 19011 no es la norma certificable del SGC',
      'Tratar ISO 19011 como si fuera ISO 9001 o como un trámite punitivo sin evidencias',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El fallo típico es confundir 19011 con 9001 o vaciar la auditoría de método/evidencias. A, B y C son distinciones correctas del temario.',
    tags: ['calibre'],
  },
]

import type { Question } from '../../types'

/** Tema 14: Cartas de Servicios — banco Calibre. */
export const TEMA_14_QUESTIONS: Question[] = [
  {
    id: 't14-01',
    temaId: 14,
    stem: 'Una Carta de Servicios es, en sentido estricto:',
    options: [
      'Un contrato laboral indefinido con el personal de ventanilla',
      'Un compromiso público de calidad con estándares e indicadores verificables ante la ciudadanía',
      'Un certificado ISO 9001 emitido por ENAC',
      'Un organigrama interno de uso exclusivo del gabinete de prensa',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Compromiso público medible. No es contrato laboral, ni certificado/acreditación, ni documento secreto de organigrama.',
    tags: ['calibre'],
  },
  {
    id: 't14-02',
    temaId: 14,
    stem: 'El contenido MÁS característico de una Carta de Servicios incluye:',
    options: [
      'Solo el escudo y el lema electoral de la legislatura',
      'Únicamente las nóminas del personal eventual',
      'Servicios, derechos de la persona usuaria, estándares, indicadores, canales de contacto y reclamación/participación',
      'Secretos clasificados del procedimiento sancionador',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Ese es el núcleo típico. Escudo, nóminas o secretos no definen la Carta como instrumento de calidad ciudadana.',
    tags: ['calibre'],
  },
  {
    id: 't14-03',
    temaId: 14,
    stem: 'Una Carta sin medición ni revisión periódica tiende a convertirse en:',
    options: [
      'Excelencia EFQM garantizada por publicación',
      'Sustituto válido de la certificación ISO 9001',
      'Acreditación ENAC del servicio',
      'Marketing vacío con riesgo reputacional si se incumple lo prometido',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Sin medir y revisar, la Carta es declaración de intenciones. No equivale a EFQM, ISO ni ENAC.',
    tags: ['calibre'],
  },
  {
    id: 't14-04',
    temaId: 14,
    stem: 'Alinear la Carta con la capacidad real de los procesos sirve sobre todo para:',
    options: [
      'Eliminar toda transparencia hacia la ciudadanía',
      'Prohibir indicadores de tiempo de respuesta',
      'Sustituir la gestión por procesos por eslóganes',
      'Evitar prometer plazos o estándares que el sistema no puede cumplir de forma consistente',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Promesas sin capacidad = incumplimiento sistemático. La alineación no elimina transparencia ni indicadores.',
    tags: ['calibre'],
  },
  {
    id: 't14-05',
    temaId: 14,
    stem: 'Si se incumplen de forma reiterada los estándares de la Carta, la respuesta adecuada es:',
    options: [
      'Mejorar el proceso o ajustar el compromiso con transparencia, informando del cumplimiento',
      'Ignorar los datos para no generar alarma',
      'Ocultar los indicadores en un anexo no publicado',
      'Eliminar la Carta en silencio sin explicación ciudadana',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Cerrar el ciclo: mejorar o recalibrar con transparencia. Ocultar o silenciar agrava el daño reputacional.',
    tags: ['calibre'],
  },
  {
    id: 't14-06',
    temaId: 14,
    stem: 'La Carta de Servicios refuerza especialmente:',
    options: [
      'La transparencia y la rendición de cuentas ante la ciudadanía',
      'La opacidad como valor de gestión pública',
      'La eliminación de cualquier canal de reclamación',
      'La privatización obligatoria de todos los servicios provinciales',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Transparencia y accountability. No opacidad, ni cierre de reclamaciones, ni privatización forzada.',
    tags: ['calibre'],
  },
  {
    id: 't14-07',
    temaId: 14,
    stem: 'Un estándar de Carta del tipo “resolver el 90 % de las solicitudes en 15 días hábiles” exige, para ser creíble:',
    options: [
      'Solo un eslogan en redes sociales',
      'La equivalencia automática con un sello EFQM',
      'Que ENAC acredite el texto literario de la Carta',
      'Definición operativa, medición, responsable y revisión del cumplimiento',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Compromiso medible = definición + datos + dueño + revisión. Ni eslogan, ni EFQM automático, ni acreditación ENAC del texto.',
    tags: ['calibre'],
  },
  {
    id: 't14-08',
    temaId: 14,
    stem: 'Respecto a ISO 9001 y la Carta de Servicios, la relación más correcta es:',
    options: [
      'Son el mismo documento con distinto membrete',
      'Pueden complementarse: el SGC sostiene la capacidad de cumplir lo prometido en la Carta',
      'La Carta sustituye siempre a la certificación del SGC',
      'ISO 9001 acredita Cartas ante ENAC',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Instrumentos distintos y complementarios. La Carta no es el certificado; 9001 no “acredita cartas”.',
    tags: ['calibre'],
  },
  {
    id: 't14-09',
    temaId: 14,
    stem: 'El lenguaje de una Carta de Servicios debería priorizar:',
    options: [
      'Jerga interna ilegible para demostrar tecnicismo',
      'Referencias exclusivas a cláusulas ISO sin explicar el servicio',
      'Claridad y accesibilidad para la ciudadanía (lenguaje claro, canales comprensibles)',
      'Omisiones deliberadas de plazos para ganar flexibilidad política',
    ],
    correct: 2,
    explanation:
      'Correcta: C. La Carta es para la ciudadanía. Jerga, solo-ISO u omisiones de plazos debilitan el instrumento.',
    tags: ['calibre'],
  },
  {
    id: 't14-10',
    temaId: 14,
    stem: 'Publicar la Carta en sede electrónica u otros canales accesibles busca:',
    options: [
      'Limitar el conocimiento de los compromisos al personal directivo',
      'Facilitar el conocimiento, la consulta y el ejercicio de derechos/reclamaciones por la ciudadanía',
      'Sustituir la necesidad de indicadores de cumplimiento',
      'Convertir la Carta en norma con rango de ley orgánica',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Difusión accesible. No es secreto directivo, ni sustituye medición, ni crea ley orgánica.',
    tags: ['calibre'],
  },
  {
    id: 't14-11',
    temaId: 14,
    stem: 'Los derechos de la persona usuaria en la Carta suelen acompañarse de:',
    options: [
      'Canales y vías para quejas, sugerencias o reclamaciones, además de la información del servicio',
      'La prohibición de presentar reclamaciones',
      'La sustitución del procedimiento administrativo por un chat informal',
      'La obligación de renunciar al amparo constitucional para ser atendido',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Derechos + canales de reclamación/participación. Las otras niegan tutela o legalidad.',
    tags: ['calibre'],
  },
  {
    id: 't14-12',
    temaId: 14,
    stem: 'Señale la afirmación INCORRECTA sobre Cartas de Servicios:',
    options: [
      'Deben alinearse con procesos e indicadores reales',
      'Bastan como único sistema de gestión y hacen innecesarios procesos, riesgos e indicadores internos',
      'Requieren revisión cuando cambian servicios o capacidad',
      'Pueden reforzar transparencia si se publica el grado de cumplimiento',
    ],
    correct: 1,
    explanation:
      'Correcta: B (incorrecta). La Carta no sustituye un SGC completo. A–C son prácticas sólidas.',
    tags: ['calibre'],
  },
  {
    id: 't14-13',
    temaId: 14,
    stem: 'Un indicador de Carta debe ser, preferentemente:',
    options: [
      'Ambiguo a propósito para no poder incumplirse',
      'Identico al organigrama de la Diputación',
      'Medible, comprensible y vinculado a un compromiso concreto',
      'Reservado y no publicable aunque midan un compromiso público',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Si el compromiso es público, el indicador ha de poder verificarse. Ambigüedad u ocultación lo vacían.',
    tags: ['calibre'],
  },
  {
    id: 't14-14',
    temaId: 14,
    stem: 'La diferencia clave entre “compromiso de Carta” y “eslogan de marketing” es:',
    options: [
      'El eslogan siempre incluye indicador y responsable de proceso',
      'No hay diferencia: ambos tienen el mismo valor jurídico-técnico',
      'El compromiso fijado en Carta es verificable y genera expectativa de rendición de cuentas; el eslogan no exige medición',
      'El marketing sustituye legalmente a la Carta en AAPP',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Verificabilidad y accountability. El eslogan no es, por sí, compromiso de calidad medible.',
    tags: ['calibre'],
  },
  {
    id: 't14-15',
    temaId: 14,
    stem: 'Al diseñar plazos de atención en la Carta, un error metodológico frecuente es:',
    options: [
      'Contrastar datos históricos de capacidad y demanda',
      'Definir excepciones o casos especiales con claridad',
      'Asignar un responsable de seguimiento del indicador',
      'Copiar el plazo más ambicioso de otra entidad sin analizar el propio proceso',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Copiar plazos ajenos sin capacidad propia genera incumplimiento. A, B y D son buenas prácticas.',
    tags: ['calibre'],
  },
  {
    id: 't14-16',
    temaId: 14,
    stem: 'La revisión de la Carta debería activarse, entre otros supuestos, cuando:',
    options: [
      'Cambian servicios, normativa aplicable, capacidad o se detecta incumplimiento sistemático',
      'Nunca: una vez publicada es inmutable',
      'Solo si lo ordena ENAC como requisito de acreditación',
      'Únicamente tras perder un certificado ISO',
    ],
    correct: 0,
    explanation:
      'Correcta: A. La Carta es viva. No es inmutable ni depende de ENAC/ISO como gatillo exclusivo.',
    tags: ['calibre'],
  },
  {
    id: 't14-17',
    temaId: 14,
    stem: 'Informar públicamente del grado de cumplimiento de los compromisos de Carta contribuye a:',
    options: [
      'La nulidad automática de las reclamaciones presentadas',
      'La conversión de la Carta en modelo CAF',
      'La rendición de cuentas y la credibilidad institucional',
      'La acreditación del certificador ISO',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Publicar cumplimiento cierra el ciclo de transparencia. No anula reclamaciones ni crea CAF/ENAC.',
    tags: ['calibre'],
  },
  {
    id: 't14-18',
    temaId: 14,
    stem: 'En una Diputación, la Carta puede dirigirse a:',
    options: [
      'Solo al personal interno, nunca a municipios o ciudadanía',
      'Exclusivamente a ENAC como cliente contractual',
      'Únicamente a organismos de certificación',
      'Ciudadanía y personas usuarias de servicios (y, según el caso, municipios asistidos), como destinatarios del compromiso',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Destinatario típico: ciudadanía/usuarios (y a veces entidades locales). No es un documento “para ENAC” o solo internos.',
    tags: ['calibre'],
  },
  {
    id: 't14-19',
    temaId: 14,
    stem: 'Relacionar Carta y mapa de procesos es útil porque:',
    options: [
      'Elimina la necesidad de dueños de proceso',
      'Sustituye el SIPOC por un eslogan',
      'Prohíbe medir tiempos de ciclo',
      'Permite identificar qué proceso sostiene cada compromiso y qué indicador lo mide',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Trazabilidad compromiso→proceso→indicador. No elimina dueños ni medición.',
    tags: ['calibre'],
  },
  {
    id: 't14-20',
    temaId: 14,
    stem: 'Un compromiso imposible (“100 % de expedientes complejos resueltos en 24 h” sin recursos) es problemático porque:',
    options: [
      'Mejora automáticamente la satisfacción al ser ambicioso',
      'Genera incumplimiento previsibile, frustración ciudadana y pérdida de credibilidad',
      'Es obligatorio en todas las Cartas según ISO 9001',
      'Demuestra excelencia EFQM por definición',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Ambición sin capacidad destruye confianza. No es requisito ISO ni prueba EFQM.',
    tags: ['calibre'],
  },
  {
    id: 't14-21',
    temaId: 14,
    stem: 'La participación ciudadana en el ciclo de la Carta puede concretarse, entre otras formas, en:',
    options: [
      'Prohibir sugerencias para no alterar el texto aprobado',
      'Sustituir la medición por votaciones en redes sin datos de servicio',
      'Canales de quejas/sugerencias y análisis de su voz para revisar compromisos',
      'Delegar en ENAC la redacción íntegra de los estándares',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Escuchar y usar esa información. No cerrar canales ni reemplazar datos por “likes” o por ENAC.',
    tags: ['calibre'],
  },
  {
    id: 't14-22',
    temaId: 14,
    stem: '¿Qué papel juega la Carta respecto al control de legalidad del acto administrativo?',
    options: [
      'Lo sustituye: si hay Carta, el acto es siempre legal',
      'No lo sustituye: los compromisos de calidad conviven con el respeto al ordenamiento',
      'Ninguno: la Carta es solo marketing y nunca se relaciona con calidad de servicio',
      'Lo deroga en los servicios incluidos en el alcance ISO',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Calidad prometida ≠ exención de legalidad. La Carta no deroga el control jurídico.',
    tags: ['calibre'],
  },
  {
    id: 't14-23',
    temaId: 14,
    stem: 'Para que un compromiso de horario de atención sea operativo, conviene:',
    options: [
      'Especificar días, franjas, canales (presencial/electrónico) y excepciones relevantes',
      'Dejarlo genérico (“cuando se pueda”)',
      'Publicarlo solo en un PDF escaneado ilegible',
      'Vincularlo exclusivamente a un reconocimiento EFQM futuro',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Concreción operativa. Ambigüedad, ilegibilidad o dependencia de sellos futuros debilitan el compromiso.',
    tags: ['calibre'],
  },
  {
    id: 't14-24',
    temaId: 14,
    stem: 'La Carta y CAF/EFQM se relacionan mejor así:',
    options: [
      'CAF emite la Carta como certificado de tercera parte',
      'EFQM prohíbe Cartas en AAPP',
      'Son incompatibles: hay que elegir excelencia o Carta',
      'La Carta puede ser evidencia de orientación a ciudadanía dentro de un enfoque de excelencia; no la sustituye',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Complementariedad. CAF/EFQM no “certifican” la Carta ni la prohíben.',
    tags: ['calibre'],
  },
  {
    id: 't14-25',
    temaId: 14,
    stem: 'Un panel de seguimiento de Carta en la dirección del servicio debería incluir, como mínimo:',
    options: [
      'Solo el inventario de logos corporativos sin metas de servicio',
      'Únicamente el inventario de sellos ISO sin datos de servicio',
      'Indicadores de cumplimiento de compromisos, tendencias y acciones ante desviaciones',
      'La lista de acreditaciones ENAC de proveedores ajenos al compromiso',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Gestión del compromiso con datos y acciones. Sellos ajenos o logos sin metas no miden el cumplimiento de la Carta.',
    tags: ['calibre'],
  },
  {
    id: 't14-26',
    temaId: 14,
    stem: 'Si la demanda se dispara y el plazo comprometido deja de ser realista, la opción más coherente con el espíritu de la Carta es:',
    options: [
      'Seguir publicando el mismo plazo sin medir, para “no preocupar”',
      'Eliminar todos los indicadores',
      'Replanificar capacidad y/o revisar el compromiso de forma transparente, con datos',
      'Afirmar que el sello ISO cubre el incumplimiento',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Ajuste transparente basado en datos. Ocultar, borrar indicadores o esconderse tras ISO no es gestión de Carta.',
    tags: ['calibre'],
  },
  {
    id: 't14-27',
    temaId: 14,
    stem: 'La identificación de servicios en la Carta debe:',
    options: [
      'Mezclar servicios inexistentes para parecer más completa',
      'Ocultar requisitos de acceso para evitar reclamaciones',
      'Limitarse al nombre del departamento sin explicar el servicio',
      'Describir de forma comprensible qué se ofrece, a quién y cómo acceder',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Claridad de oferta y acceso. Inventar servicios u ocultar requisitos es contrario a la finalidad.',
    tags: ['calibre'],
  },
  {
    id: 't14-28',
    temaId: 14,
    stem: 'En términos de examen, el distractor típico “la Carta basta como marketing” se responde mejor con:',
    options: [
      'Correcto: la Carta no necesita indicadores',
      'Incorrecto: sin medición, revisión y alineación con procesos, pierde valor y genera riesgo reputacional',
      'Correcto: medir el cumplimiento está prohibido en AAPP',
      'Correcto: sustituye a procesos y a ISO 9001',
    ],
    correct: 1,
    explanation:
      'Correcta: B. La tesis “solo marketing” es precisamente lo que el tema rechaza.',
    tags: ['calibre'],
  },
  {
    id: 't14-29',
    temaId: 14,
    stem: 'Un buen compromiso de calidad en Carta debería poder traducirse en:',
    options: [
      'Una métrica observable y un umbral o meta de cumplimiento',
      'Una frase motivacional sin umbral',
      'Una referencia genérica a “excelencia” sin definición',
      'Un logotipo ISO sin alcance',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Compromiso → métrica + umbral. Motivación, excelencia vaga o logo no miden.',
    tags: ['calibre'],
  },
  {
    id: 't14-30',
    temaId: 14,
    stem: 'La difusión interna de la Carta al personal que presta el servicio es importante porque:',
    options: [
      'El personal no necesita conocer los compromisos que debe cumplir',
      'Quien presta el servicio debe conocer estándares, plazos y canales para hacerlos efectivos',
      'Solo debe conocerla el gabinete de comunicación',
      'Sustituye la formación en el procedimiento administrativo',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Despliegue interno. Sin conocimiento del personal, el compromiso externo es papel mojado.',
    tags: ['calibre'],
  },
  {
    id: 't14-31',
    temaId: 14,
    stem: 'Comparada con un cuadro de mando interno, la Carta se caracteriza por:',
    options: [
      'Estar pensada como compromiso público ciudadano, no solo como herramienta gerencial interna',
      'Ser siempre más detallada en costes PAF que el CMI',
      'Sustituir al CMI y a la DPO en todos los casos',
      'Ser emitida por ENAC tras auditoría de tercera parte',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Dimensión pública y ciudadana. No es ENAC, ni necesariamente sustituye CMI/DPO, ni se centra en PAF.',
    tags: ['calibre'],
  },
  {
    id: 't14-32',
    temaId: 14,
    stem: 'Síntesis del tema 14:',
    options: [
      'Carta = compromiso público medible (servicios, estándares, indicadores, canales), alineado con procesos, difundido y revisado; no es marketing vacío ni sustituto de legalidad o SGC',
      'Carta = certificado ISO; indicadores opcionales; marketing suficiente',
      'Carta = acreditación ENAC de la Diputación',
      'Carta = modelo CAF con puntuación RADAR obligatoria',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Definición operativa completa del tema. No es ISO/ENAC/CAF por sí misma ni marketing sin medición.',
    tags: ['calibre'],
  },
]

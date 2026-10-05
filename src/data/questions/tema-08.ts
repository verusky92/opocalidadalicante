import type { Question } from '../../types'

/** Tema 8: Costes de calidad. */
export const TEMA_08_QUESTIONS: Question[] = [
  {
    id: 't8-01',
    temaId: 8,
    stem: 'En la tipología PAF (prevención–evaluación–fallos), la formación preventiva del personal se clasifica tipicamente como:',
    options: [
      'Coste de prevención',
      'Coste de fallo externo',
      'Coste de fallo interno por retrabajo',
      'Coste de evaluación o inspección final',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Formar para evitar errores es prevención. B y C son fallos (ya ocurrió el problema). D es appraisal (detectar, no prevenir).',
    tags: ['calibre'],
  },
  {
    id: 't8-02',
    temaId: 8,
    stem: 'Una auditoría interna de conformidad del SGC se clasifica preferentemente como:',
    options: [
      'Coste de fallo externo puro, al “exponer” a la organización',
      'Coste de evaluación/detección (appraisal)',
      'Ingreso financiero o ahorro contable automático',
      'Coste ajeno a la calidad, por ser actividad de control interno genérico',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Auditar/inspeccionar para detectar no conformidades es evaluación. A confunde con fallo externo. C y D niegan su naturaleza de coste de calidad.',
    tags: ['calibre'],
  },
  {
    id: 't8-03',
    temaId: 8,
    stem: 'El retrabajo de un expediente detectado antes de notificar al ciudadano es:',
    options: [
      'Coste de prevención, porque “se corrige a tiempo”',
      'Coste de evaluación, al ser un control documental',
      'Coste de fallo interno',
      'Inversión de excelencia equivalente a poka-yoke',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Fallo interno = defecto detectado antes de llegar al usuario. A y D confunden corrección con prevención. B es detección planificada, no el coste del fallo ya producido.',
    tags: ['calibre'],
  },
  {
    id: 't8-04',
    temaId: 8,
    stem: 'Indemnizaciones, media adversa y pérdida de confianza tras un error ya externalizado son:',
    options: [
      'Costes de prevención del próximo ejercicio',
      'Costes de evaluación de la Carta de Servicios',
      'Costes de fallo interno, al originarse en una unidad interna',
      'Costes de fallo externo (a menudo infraestimados)',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Fallo externo = impacto ya percibido por el ciudadano/tercero. A y B son categorías distintas. C confunde origen interno con clasificación por momento de detección/impacto.',
    tags: ['calibre'],
  },
  {
    id: 't8-05',
    temaId: 8,
    stem: 'Señale la afirmación MÁS sólida sobre la estructura de costes de calidad:',
    options: [
      'Conviene maximizar fallos externos para “aprender más barato”',
      'Aumentar prevención y detección inteligente suele reducir el coste total al bajar fallos, sin convertir la inspección en infinita',
      'La prevención nunca reduce fallos en servicios públicos',
      'Solo importan los costes de evaluación; prevención y fallos son irrelevantes',
    ],
    correct: 1,
    explanation:
      'Correcta: B. La lógica PAF es invertir en prevención (y evaluación útil) para reducir fallos, sin sobreinspeccionar. A, C y D son falsas o parciales.',
    tags: ['calibre'],
  },
  {
    id: 't8-06',
    temaId: 8,
    stem: 'Un exceso de inspección final sin mejorar el proceso suele:',
    options: [
      'Sustituir con garantía total a la prevención y a la causa raíz',
      'Eliminar la perecibilidad del servicio público',
      'Añadir coste de evaluación y dejar intacta la causa raíz del fallo',
      'Certificar automáticamente el modelo EFQM de la organización',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Más appraisal sin rediseño encarece y no elimina la generación de defectos. A sobrevalora la inspección. B y D son ajenas.',
    tags: ['calibre'],
  },
  {
    id: 't8-07',
    temaId: 8,
    stem: 'Un poka-yoke (dispositivo/antierrores) en la entrada de solicitudes se clasifica mejor como:',
    options: [
      'Coste de prevención',
      'Coste de fallo externo',
      'Coste de fallo interno por rechazo',
      'Coste de evaluación equivalente a una auditoría completa',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Diseñar para que el error no ocurra es prevención. B y C son fallos. D confunde prevención con detección/auditoría.',
    tags: ['calibre'],
  },
  {
    id: 't8-08',
    temaId: 8,
    stem: 'Señale la INCORRECTA sobre costes de fallo interno y externo:',
    options: [
      'El fallo interno se detecta antes de que el defecto llegue al usuario',
      'El fallo externo incluye reclamaciones, indemnizaciones y daño reputacional',
      'Ambos forman parte del “precio de la no calidad”',
      'El fallo externo es siempre más barato que el interno porque “ya salió”',
    ],
    correct: 3,
    explanation:
      'Correcta: D (es la incorrecta). El fallo externo suele ser más caro (imagen, indemnizaciones, retrabajo externo). A–C son correctas.',
    tags: ['calibre'],
  },
  {
    id: 't8-09',
    temaId: 8,
    stem: 'Clasificar y medir costes de calidad en una Diputación sirve principalmente para:',
    options: [
      'Sustituir el presupuesto legalmente aprobado por el Pleno',
      'Argumentar inversiones en prevención frente al coste oculto de los fallos',
      'Eliminar la necesidad de indicadores de proceso y de servicio',
      'Derogar compromisos de la Carta de Servicios cuando salen caros',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Medir PAF permite decidir con criterio económico-de calidad. A, C y D son usos incorrectos o ilegales.',
    tags: ['calibre'],
  },
  {
    id: 't8-10',
    temaId: 8,
    stem: 'El tiempo del personal dedicado a revisar sistemáticamente muestras de expedientes antes de firmar es, tipicamente:',
    options: [
      'Coste de fallo externo',
      'Coste de prevención del diseño del servicio',
      'Coste de evaluación/detección',
      'Coste de fallo interno si no se encuentra ningún error',
    ],
    correct: 2,
    explanation:
      'Correcta: C. La inspección/revisión planificada es evaluación. A es impacto externo. B sería diseño/formación preventiva. D confunde el acto de detectar con el fallo.',
    tags: ['calibre'],
  },
  {
    id: 't8-11',
    temaId: 8,
    stem: 'Una reclamación ciudadana que obliga a refacer un trámite ya notificado se asocia sobre todo a:',
    options: [
      'Prevención, porque mejora el aprendizaje organizativo',
      'Evaluación, al tratarse de un “control social”',
      'Fallo interno exclusivamente, al no haber salido del edificio',
      'Fallo externo, con coste de corrección e impacto en confianza',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Ya impactó al ciudadano: fallo externo. A y B mal clasifican el aprendizaje/control. C niega el criterio de externalización del defecto.',
    tags: ['calibre'],
  },
  {
    id: 't8-12',
    temaId: 8,
    stem: 'Diseñar un procedimiento claro y estandarizado para reducir errores de tramitación es:',
    options: [
      'Coste de fallo interno',
      'Coste de prevención',
      'Coste de fallo externo anticipado',
      'Coste de evaluación equivalente a inspección al 100 %',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Estandarizar/diseñar para hacer bien a la primera es prevención. A y C son fallos. D es appraisal, no diseño preventivo.',
    tags: ['calibre'],
  },
  {
    id: 't8-13',
    temaId: 8,
    stem: 'Señale la afirmación CORRECTA sobre prevención frente a evaluación:',
    options: [
      'Prevención actúa sobre la causa para que el error no nazca; evaluación busca detectarlo',
      'Evaluación elimina siempre la causa raíz mejor que la prevención',
      'Prevención y evaluación son sinónimos en el modelo PAF',
      'En AAPP solo cabe evaluación; la prevención no es aplicable',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Esa es la distinción clave P vs A. B invierte la lógica. C y D son falsas.',
    tags: ['calibre'],
  },
  {
    id: 't8-14',
    temaId: 8,
    stem: 'Un coste “oculto” típico de la no calidad en servicios públicos es:',
    options: [
      'La cuota de inscripción en un curso de formación preventiva',
      'El software de checklist usado como poka-yoke de entrada',
      'La hora de auditor interno planificada en el programa anual',
      'La pérdida de legitimidad y de confianza tras errores reiterados de servicio',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Daño reputacional/confianza es fallo externo difícil de contabilizar. A y B son prevención. C es evaluación.',
    tags: ['calibre'],
  },
  {
    id: 't8-15',
    temaId: 8,
    stem: 'Si una unidad solo aumenta controles finales y no toca el diseño del proceso, el patrón de costes esperable es:',
    options: [
      'Bajan a cero los costes de evaluación y de fallo',
      'Suben los de evaluación; los fallos pueden bajar poco si la causa raíz permanece',
      'Desaparecen los fallos externos por definición contable',
      'La prevención absorbe automáticamente todo el coste de inspección',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Más inspección = más appraisal; sin prevención/rediseño la generación de defectos sigue. A, C y D son irreales.',
    tags: ['calibre'],
  },
  {
    id: 't8-16',
    temaId: 8,
    stem: 'Clasifique: “horas de corrección de errores detectados en mesa antes de la firma/salida”.',
    options: [
      'Prevención',
      'Evaluación',
      'Fallo interno',
      'Fallo externo',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Corregir un defecto ya producido, aún interno, es fallo interno. Prevención evita; evaluación detecta; externo ya impactó al usuario.',
    tags: ['calibre'],
  },
  {
    id: 't8-17',
    temaId: 8,
    stem: 'Priorizar inversiones por coste de calidad implica, con buen criterio:',
    options: [
      'Financiar solo lo que reduce el mayor coste de fallo con mejor relación esfuerzo/impacto',
      'Invertir siempre el máximo en inspección al 100 % de todos los expedientes',
      'Ignorar fallos externos porque “no salen en contabilidad analítica”',
      'Eliminar prevención cuando hay presupuesto de evaluación',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Priorizar por impacto económico de la no calidad. B–D son sesgos típicos (sobreinspección, ceguera a externos, desinversión preventiva).',
    tags: ['calibre'],
  },
  {
    id: 't8-18',
    temaId: 8,
    stem: 'Señale la INCORRECTA respecto del modelo de costes de calidad:',
    options: [
      'Permite hacer visibles trade-offs entre prevención, evaluación y fallos',
      'Ayuda a justificar recursos para hacer bien a la primera',
      'Sustituye por sí solo el cumplimiento del ordenamiento jurídico del servicio',
      'Puede usarse junto con indicadores de proceso y de satisfacción',
    ],
    correct: 2,
    explanation:
      'Correcta: C (es la incorrecta). Medir costes no sustituye la legalidad ni el mandato del servicio. A, B y D son usos válidos.',
    tags: ['calibre'],
  },
  {
    id: 't8-19',
    temaId: 8,
    stem: 'La calibración/verificación periódica de equipos de medición usados en control de calidad se asocia sobre todo a:',
    options: [
      'Fallo externo',
      'Fallo interno',
      'Indemnización preventiva',
      'Evaluación (asegurar que la detección es fiable)',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Mantener fiable la medición/inspección es típico de evaluación (a veces frontera con prevención del error de medida). A y B son fallos. C no es categoría PAF.',
    tags: ['calibre'],
  },
  {
    id: 't8-20',
    temaId: 8,
    stem: 'En un servicio de asistencia a municipios, un fallo que genera recurso contencioso y costas es principalmente:',
    options: [
      'Prevención del próximo plan de formación',
      'Evaluación de segunda parte sobre el proveedor',
      'Fallo interno sin externalizar',
      'Fallo externo con costes jurídicos y reputacionales',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El contencioso evidencia impacto externo. A y B son otras categorías. C niega la externalización del daño.',
    tags: ['calibre'],
  },
  {
    id: 't8-21',
    temaId: 8,
    stem: '“Hacerlo bien a la primera” se relaciona más directamente con reducir:',
    options: [
      'Costes de fallo (interno y externo) mediante prevención adecuada',
      'Únicamente los costes de evaluación, eliminando toda inspección útil',
      'Solo el presupuesto de formación, por ser “gasto improductivo”',
      'La necesidad de dueño de proceso e indicadores',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Prevención + buen diseño bajan fallos. B puede ser peligroso. C y D van contra la lógica de calidad.',
    tags: ['calibre'],
  },
  {
    id: 't8-22',
    temaId: 8,
    stem: 'Un checklist obligatorio en la recepción de documentación del interesado es, en clave PAF:',
    options: [
      'Fallo externo anticipado',
      'Prevención (y a veces frontera con evaluación temprana de la entrada)',
      'Fallo interno contabilizado como prevención',
      'Coste ajeno a calidad por ser “mero trámite”',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Evita que entre basura al proceso (prevención); si se usa como inspección de entrada, toca evaluación temprana. A y C mal clasifican. D niega su papel en calidad.',
    tags: ['calibre'],
  },
  {
    id: 't8-23',
    temaId: 8,
    stem: '¿Qué combinación describe mejor el riesgo de “inspección infinita”?',
    options: [
      'Prevención alta, evaluación baja, fallos bajos',
      'Evaluación muy alta sin atacar causas, con coste total elevado y fallos residuales',
      'Fallos externos cero garantizados por más revisiones finales',
      'Eliminación contable de fallos internos al renombrarlos como evaluación',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Sobreinspeccionar sin prevención/rediseño encarece el sistema. A es un patrón sano. C es falso. D es maquillaje contable.',
    tags: ['calibre'],
  },
  {
    id: 't8-24',
    temaId: 8,
    stem: 'La scrap/desecho o anulación de un documento erróneo detectado internamente antes de notificar es:',
    options: [
      'Prevención',
      'Evaluación',
      'Fallo externo',
      'Fallo interno',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Material/tiempo perdido por defecto interno = fallo interno. Prevención evita; evaluación detecta; externo ya salió.',
    tags: ['calibre'],
  },
  {
    id: 't8-25',
    temaId: 8,
    stem: 'Para argumentar un proyecto de prevención ante la dirección, el dato MÁS útil suele ser:',
    options: [
      'Estimación del coste actual de fallos (retrabajo, reclamaciones, plazos) frente al coste del proyecto',
      'El número de páginas del manual de calidad',
      'La antigüedad media del personal del área',
      'El color corporativo de la Carta de Servicios',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El business case de prevención compara inversión vs coste de no calidad. B–D no fundamentan la decisión económica.',
    tags: ['calibre'],
  },
  {
    id: 't8-26',
    temaId: 8,
    stem: 'Señale la clasificación CORRECTA: ensayo o prueba de conformidad de una muestra de salidas del proceso.',
    options: [
      'Fallo externo',
      'Evaluación/detección',
      'Prevención del diseño estratégico',
      'Fallo interno si la muestra está conforme',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Probar/inspeccionar salidas es evaluación. A es impacto externo. C sería diseño preventivo. D confunde resultado conforme con categoría de coste.',
    tags: ['calibre'],
  },
  {
    id: 't8-27',
    temaId: 8,
    stem: 'Un exceso de fallos externos respecto de internos puede indicar, entre otras hipótesis:',
    options: [
      'Que la prevención es perfecta y no hace falta medir',
      'Que la evaluación es excesiva y detecta todo antes de salir',
      'Que el sistema detecta poco antes de la entrega y el defecto llega al ciudadano',
      'Que los costes PAF no aplican a AAPP',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Mucho externo y poco interno sugiere fugas del control previo. A, B y D no encajan con ese patrón.',
    tags: ['calibre'],
  },
  {
    id: 't8-28',
    temaId: 8,
    stem: 'La revisión por la dirección del SGC, orientada a decidir mejoras del sistema, se acerca más a:',
    options: [
      'Fallo externo tipificado',
      'Fallo interno de expediente',
      'Actividad de prevención/gestión del sistema (no es “inspección de producto”)',
      'Indemnización anticipada',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Gobernar y mejorar el sistema es prevención/gestión, distinta de appraisal de unidades de servicio. A, B y D no encajan.',
    tags: ['calibre'],
  },
  {
    id: 't8-29',
    temaId: 8,
    stem: 'En la práctica de AAPP, infraestimar costes de fallo externo suele llevar a:',
    options: [
      'Subinvertir en prevención y sobreactuar cuando ya hay crisis reputacional',
      'Maximizar de forma óptima la prevención desde el primer día',
      'Eliminar toda evaluación por innecesaria',
      'Cumplir automáticamente los plazos legales',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Si no se ve el coste externo, se aplaza la prevención hasta el escándalo. B–D no se siguen de infraestimar.',
    tags: ['calibre'],
  },
  {
    id: 't8-30',
    temaId: 8,
    stem: '¿Cuál es el error de clasificación MÁS frecuente en tests de costes de calidad?',
    options: [
      'Llamar prevención a toda actividad que “suene a calidad”, incluida la corrección de defectos ya ocurridos',
      'Distinguir fallo interno de externo según el momento de impacto al usuario',
      'Separar evaluación (detectar) de prevención (evitar)',
      'Usar la medición PAF para priorizar inversiones',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Corregir no es prevenir. B–D son distinciones/usos correctos que el opositor debe dominar.',
    tags: ['calibre'],
  },
  {
    id: 't8-31',
    temaId: 8,
    stem: 'Una formación post-mortem tras una oleada de reclamaciones, si solo “explica el fallo” sin rediseñar barreras, es sobre todo:',
    options: [
      'Prevención estructural equivalente a poka-yoke de proceso',
      'Evaluación sistemática de todas las salidas futuras',
      'Respuesta incompleta: sin cambio de método puede no reducir el coste futuro de fallos',
      'Fallo externo contabilizado como ingreso de aprendizaje',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Formar ayuda, pero sin rediseño/prevención real el fallo puede repetirse. A sobrevalora. B es otra categoría. D es absurdo contable.',
    tags: ['calibre'],
  },
  {
    id: 't8-32',
    temaId: 8,
    stem: 'La lógica de gestión del temario (priorizar por coste) recomienda:',
    options: [
      'Tratar igual un fallo cosmético interno y un fallo externo masivo con daño reputacional',
      'Maximizar siempre la evaluación aunque la prevención sea más barata y eficaz',
      'Ocultar la tipología PAF en el cuadro de mando para “no alarmar”',
      'Orientar recursos a prevenir/detectar donde el coste de fallo es mayor y más frecuente',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Priorizar por magnitud y frecuencia del coste de no calidad. A–C son malas prácticas de gestión de costes de calidad.',
    tags: ['calibre'],
  },
]

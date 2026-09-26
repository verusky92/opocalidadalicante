import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../src/data/questions')

function writeTema(temaId, items) {
  if (items.length < 30) throw new Error(`Tema ${temaId}: ${items.length}`)
  const pad = String(temaId).padStart(2, '0')
  const lines = items.map((q, i) => {
    const id = `t${temaId}-${String(i + 1).padStart(2, '0')}`
    const opts = q.options.map((o) => JSON.stringify(o)).join(', ')
    return `  {
    id: ${JSON.stringify(id)},
    temaId: ${temaId},
    stem: ${JSON.stringify(q.stem)},
    options: [${opts}],
    correct: ${q.correct},
    explanation: ${JSON.stringify(q.explanation)},
  }`
  })
  fs.writeFileSync(
    path.join(outDir, `tema-${pad}.ts`),
    `import type { Question } from '../../types'\n\nexport const TEMA_${pad}_QUESTIONS: Question[] = [\n${lines.join(',\n')},\n]\n`,
  )
  console.log(`tema ${temaId}: ${items.length}`)
}

function q(stem, options, correct, explanation) {
  return { stem, options, correct, explanation }
}

writeTema(3, [
  q('En la gestión de calidad de servicios, la inseparabilidad implica principalmente que:', [
    'La producción y el consumo tienden a ser simultáneos, de modo que el usuario interviene en el proceso y afecta al resultado',
    'El servicio puede almacenarse indefinidamente como un producto terminado',
    'No existe heterogeneidad posible entre prestaciones',
    'La calidad se agota en el diseño del soporte físico sin interacción',
  ], 0, 'Inseparabilidad = co-producción y simultaneidad; complica el control a priori solo sobre el “output terminado”.'),
  q('Señale la afirmación MÁS precisa sobre la heterogeneidad de los servicios:', [
    'Introduce variabilidad entre prestaciones; se mitiga con estandarización, formación, guiones/procedimientos y sistemas de apoyo, sin negar la adaptación legítima al caso',
    'Impide cualquier estandarización en el sector público',
    'Desaparece automáticamente al digitalizar un trámite',
    'Solo afecta a empresas privadas y no a AAPP',
  ], 0, 'Heterogeneidad ≠ imposibilidad de estándares; en AAPP hay que equilibrar equidad y personalización legítima.'),
  q('La perecibilidad de la capacidad de servicio significa que:', [
    'La capacidad no utilizada en un periodo (cita, ventanilla, equipo) no se “almacena” como stock y se pierde como oportunidad de prestar',
    'Los servicios públicos no pueden programarse',
    'Siempre conviene maximizar colas para demostrar demanda',
    'No tiene implicaciones para la planificación de recursos',
  ], 0, 'Gestionar demanda/capacidad es crítico precisamente por la perecibilidad.'),
  q('Una diferencia estructural de la calidad en el sector público frente al privado es que:', [
    'Deben reconciliarse satisfacción/experiencia con legalidad, equidad, transparencia y rendición de cuentas, a menudo con múltiples “clientes” y objetivos en tensión',
    'La legalidad es irrelevante si hay alta satisfacción',
    'Solo importa el precio',
    'No existen partes interesadas externas',
  ], 0, 'Marco público: no es un “customer satisfaction” puro.'),
  q('Señale la INCORRECTA sobre factores clave de implantación de calidad en servicios públicos:', [
    'El liderazgo puede sustituirse indefinidamente por un manual ISO sin compromiso directivo ni recursos',
    'Las personas que prestan el servicio son críticas por el “momento de verdad”',
    'Los procesos definen la consistencia de la prestación',
    'La medición permite aprendizaje y mejora',
  ], 0, 'Sin liderazgo y recursos, el sistema suele quedar en burocracia documental.'),
  q('La intangibilidad obliga, en un SGC de servicios, a:', [
    'Hacer visibles evidencias de la prestación (registros, estándares comunicados, pruebas de conformidad) y gestionar expectativas',
    'Renunciar a cualquier indicador',
    'Eliminar la documentación del proceso',
    'Medir solo metros cuadrados de oficinas',
  ], 0, 'Lo intangible se gestiona con evidencia, especificación y comunicación.'),
  q('En una Diputación, el “usuario” de un servicio de asistencia técnica a municipios puede ser:', [
    'El Ayuntamiento asistido (y, mediatamente, la ciudadanía), lo que exige definir bien el cliente del proceso y sus requisitos',
    'Solo el turista ocasional',
    'Únicamente el Congreso de los Diputados',
    'Nadie, al ser servicios sin destinatario',
  ], 0, 'Cadena de destinatarios típica en servicios provinciales.'),
  q('La co-producción del servicio implica que:', [
    'Errores u omisiones del usuario (documentación incompleta, etc.) condicionan el resultado; el diseño del proceso debe anticipar ayudas, checklists y prevención',
    'El usuario nunca influye en la calidad',
    'Toda desviación es culpa exclusiva del empleado',
    'No cabe medir tiempos de ciclo',
  ], 0, 'Diseño del proceso con el usuario “dentro” del sistema.'),
  q('Un riesgo típico al implantar “calidad” en AAPP es:', [
    'Confundir proliferación documental con mejora real del servicio',
    'Escuchar sistemáticamente a la ciudadanía',
    'Formar al personal en el estándar de atención',
    'Definir indicadores de plazo y retrabajo',
  ], 0, 'Burocratización vs valor.'),
  q('La calidad percibida se explica mejor como:', [
    'Función de la brecha entre expectativas y percepción del desempeño a lo largo de la experiencia de servicio',
    'Únicamente el coste unitario contable',
    'Solo el número de sellos en un documento',
    'Un concepto ajeno a las Cartas de Servicios',
  ], 0, 'Modelo de gaps / expectativas-percepción.'),
  q('Estandarizar un servicio público busca, en primer término:', [
    'Reducir variabilidad indeseada y garantizar equidad de trato conforme a derecho, manteniendo márgenes de adaptación reglados',
    'Introducir arbitrariedad entre usuarios',
    'Eliminar la normativa aplicable',
    'Sustituir el control de legalidad por marketing',
  ], 0, 'Estándar + equidad.'),
  q('Señale la opción que mejor define “momento de verdad” en servicios:', [
    'Interacción concreta en la que el usuario se forma un juicio decisivo sobre la calidad del servicio',
    'La fecha de publicación de una ordenanza',
    'El cierre contable anual',
    'La toma de posesión de un cargo',
  ], 0, 'Concepto clásico de gestión de servicios.'),
  q('Respecto de la medición en servicios públicos, es más correcto decir que:', [
    'Conviene combinar indicadores de proceso (tiempos, errores) con indicadores de percepción/satisfacción y de cumplimiento normativo',
    'Basta una encuesta anual sin datos de proceso',
    'Solo importan likes en redes',
    'Medir plazos vulnera siempre la transparencia',
  ], 0, 'Triangulación de evidencias.'),
  q('La “capacidad” en un servicio de atención presencial se relaciona con la perecibilidad porque:', [
    'Las franjas no ocupadas no se recuperan mañana como stock; hay que ajustar slots, citas y canales',
    'La capacidad es infinita e inagotable',
    'No cabe cita previa en AAPP',
    'Solo afecta a fábricas',
  ], 0, 'Revenue/capacity management aplicado a servicios.'),
  q('Un factor diferencial del sector público al aplicar modelos de calidad industriales es:', [
    'La dificultad de definir un único “beneficio” y la presencia de mandatos legales no negociables',
    'La ausencia total de procesos',
    'La imposibilidad de usar indicadores',
    'La prohibición de escuchar al usuario',
  ], 0, 'Adaptación de modelos.'),
  q('Señale la CORRECTA sobre cultura de calidad:', [
    'Detectar y registrar no conformidades debe incentivarse como aprendizaje, no solo como sanción',
    'Ocultar errores mejora el SGC',
    'La mejora continua requiere castigar toda desviación sin análisis de sistema',
    'La dirección no necesita ejemplaridad',
  ], 0, 'Cultura just culture / aprendizaje.'),
  q('En servicios intensivos en conocimiento (p. ej. asesoramiento técnico municipal), la heterogeneidad se controla mejor con:', [
    'Comunidades de práctica, plantillas de informe, revisión por pares y criterios de calidad del dictamen',
    'Prohibir cualquier criterio escrito',
    'Eliminar la supervisión técnica',
    'Medir solo el número de cafés',
  ], 0, 'Servicios profesionales públicos.'),
  q('La equidad como requisito de calidad pública implica que:', [
    'Tratos diferentes exigen justificación objetiva y razonable conforme a derecho; el “cliente VIP” no puede saltarse la legalidad',
    'Quien más protesta debe tener siempre prioridad ilegal',
    'Los estándares sobran',
    'La Carta de Servicios autoriza discriminación por renta sin base legal',
  ], 0, 'Igualdad/equidad vs personalización ilegal.'),
  q('Al diseñar un sistema de calidad para un servicio digital administrativo, ¿qué enfoque es más sólido?', [
    'Definir requisitos de usabilidad/accesibilidad, trazabilidad, plazos, privacidad y continuidad, con indicadores y dueño de proceso',
    'Publicar un banner de “excelencia” sin procesos',
    'Eliminar registros para “agilizar”',
    'Ignorar la accesibilidad',
  ], 0, 'Calidad + cumplimiento digital.'),
  q('La satisfacción alta con un servicio ilegal o inequitativo:', [
    'No convierte el servicio en “de calidad” en sentido público pleno',
    'Justifica derogar la ley aplicable',
    'Sustituye a la auditoría de conformidad',
    'Elimina la necesidad de Carta de Servicios',
  ], 0, 'Calidad pública ≠ solo percepción.'),
  q('Señale la mejor definición operativa de “requisito del servicio” en un SGC:', [
    'Necesidad o expectativa establecida (explícita), generalmente implícita u obligatoria (legal)',
    'Cualquier deseo informal sin contraste',
    'Solo el eslogan institucional',
    'Únicamente el color corporativo',
  ], 0, 'Concepto ISO de requisito, adaptado.'),
  q('Un indicador adelantado (leading) en un servicio de atención podría ser:', [
    '% de expedientes con checklist de documentación completo a la entrada',
    'Número de reclamaciones del año pasado ya cerradas sin más análisis',
    'La antigüedad del edificio',
    'El número de sellos comprados',
  ], 0, 'Leading = predictor; lagging = resultado tardío (reclamaciones finales).'),
  q('La mejora de un servicio con alta intangibilidad debe priorizar, entre otros:', [
    'Claridad informativa, reducción de esfuerzo del usuario y consistencia del trato',
    'Aumentar jerga administrativa',
    'Multiplicar desplazamientos innecesarios',
    'Ocultar plazos',
  ], 0, 'Experiencia administrativa.'),
  q('En implantación de calidad, “gestión del cambio” falla con frecuencia por:', [
    'No implicar a mandos intermedios ni a quienes prestan el servicio, quedándose en un proyecto de “calidad” paralelo',
    'Comunicar el propósito del cambio',
    'Formar y acompañar',
    'Pilotar antes de generalizar',
  ], 0, 'Cambio organizacional.'),
  q('Señale la opción que describe un “factor clave” más que una herramienta puntual:', [
    'Compromiso de la dirección y alineación con estrategia',
    'Un único histograma aislado sin decisión',
    'Una encuesta sin análisis',
    'Un flujograma guardado sin uso',
  ], 0, 'Factores vs herramientas.'),
  q('La heterogeneidad “buena” (adaptación al caso) se distingue de la “mala” cuando:', [
    'La variación está reglada, trazable y no genera inequidad arbitraria ni errores sistemáticos',
    'Cada empleado inventa el procedimiento cada día',
    'No hay criterios de decisión',
    'Se ocultan los tiempos reales',
  ], 0, 'Variación controlada vs caos.'),
  q('Un sistema de quejas eficaz en servicios públicos es, ante todo:', [
    'Canal de aprendizaje y corrección, no solo de registro defensivo',
    'Prueba de fracaso que debe ocultarse',
    'Sustituto del SGC completo',
    'Irrelevante para la calidad percibida',
  ], 0, 'Quejas = VOC.'),
  q('Al aplicar directrices de calidad en servicios, el control a posteriori exclusivo (solo inspeccionar al final):', [
    'Suele ser insuficiente; conviene prevenir errores en el diseño del proceso e interacción',
    'Es siempre superior a la prevención',
    'Elimina la perecibilidad',
    'Hace innecesaria la formación',
  ], 0, 'Prevención > inspección excesiva.'),
  q('En el temario de la convocatoria, “características diferenciales” de los servicios aluden sobre todo a:', [
    'Intangibilidad, heterogeneidad, inseparabilidad y perecibilidad, y sus consecuencias de gestión',
    'Solo al color del logotipo',
    'Exclusivamente a ISO 19011',
    'Únicamente al art. 141 CE',
  ], 0, 'Enunciado del tema 3.'),
  q('Señale la afirmación más exigente y correcta:', [
    'Un servicio público “de calidad” debe ser eficaz, eficiente y conforme a derecho, además de percibido como adecuado por sus destinatarios legítimos',
    'Basta con que el usuario “se sienta bien”, aunque el acto sea nulo',
    'La eficiencia autoriza saltarse trámites esenciales de garantía',
    'La transparencia es opcional si hay ISO',
  ], 0, 'Trinomio clásico de calidad pública + percepción.'),
  q('La digitalización de un servicio, por sí sola:', [
    'No garantiza calidad: puede trasladar barreras (brecha digital, usabilidad) si no se rediseña el proceso',
    'Elimina siempre la heterogeneidad',
    'Sustituye la necesidad de dueño de proceso',
    'Hace innecesario medir satisfacción',
  ], 0, 'Tecnología ≠ calidad automática.'),
  q('¿Qué enfoque de implantación es más sólido en una AAPP?', [
    'Piloto en un proceso crítico, medir, aprender, escalar con patrocinio directivo y formación',
    'Certificar mañana sin procesos definidos',
    'Copiar un manual de otra entidad sin adaptación legal',
    'Empezar por 200 indicadores sin priorizar',
  ], 0, 'Implantación pragmática.'),
])

writeTema(4, [
  q('En planificación estratégica, la misión se distingue de la visión porque:', [
    'La misión expresa el propósito actual/razón de ser; la visión describe el futuro deseado a medio-largo plazo',
    'Son sinónimos perfectos',
    'La visión es solo el presupuesto anual',
    'La misión es un indicador lagging',
  ], 0, 'Distinción clásica misión/visión.'),
  q('Un objetivo “estratégico” mal formulado típico sería:', [
    '“Mejorar la calidad” sin meta, plazo ni indicador',
    '“Reducir el P90 del tiempo de resolución del servicio X a ≤ 10 días hábiles a 31/12, con responsable del proceso”',
    'Un objetivo operativo SMART enlazado al CMI',
    'Una iniciativa con presupuesto y hitos',
  ], 0, 'Sin SMART no hay gestión.'),
  q('SMART, aplicado con rigor, exige que el objetivo sea:', [
    'Específico, Medible, Alcanzable, Relevante y Temporalmente definido',
    'Secreto, Multifásico, Ambiguo, Retórico y Tácito',
    'Solo inspiracional sin métrica',
    'Independiente de la misión',
  ], 0, 'Acrónimo SMART.'),
  q('El despliegue estratégico (“cascada”) consiste en:', [
    'Traducir prioridades institucionales en objetivos de unidades/procesos e iniciativas financiables, manteniendo coherencia vertical',
    'Publicar la misión y dar por terminada la planificación',
    'Multiplicar indicadores contradictorios a propósito',
    'Delegar la estrategia solo en un externo sin ownership interno',
  ], 0, 'Alignment.'),
  q('Señale la INCORRECTA sobre el ciclo de planificación estratégica:', [
    'El seguimiento es opcional si el documento estratégico es “bonito”',
    'El diagnóstico precede a la formulación',
    'El despliegue concreta la estrategia',
    'La revisión permite adaptar ante cambios de entorno',
  ], 0, 'Sin seguimiento no hay gestión estratégica.'),
  q('DAFO en el diagnóstico estratégico:', [
    'Combina análisis interno (fortalezas/debilidades) y externo (oportunidades/amenazas)',
    'Solo mira el interior',
    'Solo mira el exterior',
    'Sustituye a los indicadores de proceso para siempre',
  ], 0, 'SWOT/DAFO.'),
  q('Un riesgo de planificar sin análisis de stakeholders en AAPP es:', [
    'Fijar objetivos que colisionan con mandatos legales o expectativas legítimas de grupos clave',
    'Mejorar la legitimidad',
    'Aumentar la transparencia',
    'Facilitar la evaluación',
  ], 0, 'Stakeholders públicos.'),
  q('La coherencia misión–valores–objetivos implica que:', [
    'No se pueden promover objetivos que contradigan valores declarados (p. ej. “opacidad” vs valor “transparencia”)',
    'Los valores son decorativos',
    'La misión puede ignorarse en el CMI',
    'Los operativos no necesitan vínculo estratégico',
  ], 0, 'Coherencia narrativa y de gestión.'),
  q('Vincular presupuesto a estrategia significa, en la práctica:', [
    'Priorizar recursos hacia iniciativas que cierran brechas estratégicas, no solo inercia histórica de partidas',
    'Gastar lo mismo cada año sin revisión',
    'Eliminar el control interventor',
    'Sustituir el presupuesto por un eslogan',
  ], 0, 'Presupuesto alineado.'),
  q('Un factor crítico de éxito (FCE) es:', [
    'Condición indispensable para lograr la visión/estrategia, útil para enfocar capacidades',
    'Un indicador de vanidad aislado',
    'Una tarea administrativa menor',
    'Un coste de fallo externo',
  ], 0, 'CSF/FCE.'),
  q('Señale la mejor crítica a un plan estratégico “de cajón”:', [
    'Carece de indicadores, responsables, iniciativas y rituales de seguimiento directivo',
    'Tiene mapa estratégico y CMI desplegado',
    'Se revisa trimestralmente con datos',
    'Comunica prioridades al personal',
  ], 0, 'Paper strategy.'),
  q('Objetivos operativos vs estratégicos: la diferencia clave es:', [
    'Horizonte, granularidad y cercanía a la ejecución diaria, manteniendo trazabilidad al nivel estratégico',
    'Que los operativos no deben medirse',
    'Que los estratégicos carecen de relevancia institucional',
    'Que solo los operativos pueden ser SMART',
  ], 0, 'Ambos pueden (y deben) ser medibles; cambia el nivel.'),
  q('En AAPP, la estrategia debe subordinarse a:', [
    'El marco legal y el mandato institucional, aun cuando existan “deseos” de usuarios incompatibles con derecho',
    'Cualquier petición viral en redes',
    'El marketing electoral exclusivo',
    'La eliminación de controles internos',
  ], 0, 'Límite de legalidad.'),
  q('Mapear iniciativas a objetivos evita:', [
    'Proyectos huérfanos o que no contribuyen a prioridades',
    'La priorización',
    'El CMI',
    'La DPO',
  ], 0, 'Portfolio alignment.'),
  q('La revisión estratégica periódica NO debería:', [
    'Cambiar indicadores a mitad de ciclo sin criterio solo para “poner verde” el cuadro',
    'Analizar desviaciones con datos',
    'Reasignar recursos ante shocks externos',
    'Aprender de pilotos',
  ], 0, 'Integridad del sistema de medición.'),
  q('Escenarios (optimista/base/pesimista) aportan:', [
    'Anticipación de riesgos y opciones de contingencia',
    'Una única verdad infalible',
    'Sustitución del diagnóstico',
    'Eliminación de indicadores',
  ], 0, 'Prospectiva.'),
  q('Comunicar la estrategia a toda la organización es crítico porque:', [
    'Sin comprensión compartida, el despliegue se fragmenta en agendas locales',
    'La estrategia debe ser secreta siempre',
    'Solo la dirección puede conocer objetivos públicos',
    'Rompe la transparencia',
  ], 0, 'Sense-making.'),
  q('Un objetivo estratégico bien anclado a un servicio provincial podría ser:', [
    'Elevar al 85% el % de municipios de <5.000 hab. con tiempo de respuesta ≤X en el servicio Y en 24 meses',
    '“Ser los mejores” sin métrica',
    '“Innovar” sin definición',
    '“Mejorar todo”',
  ], 0, 'Concreción + segmento + plazo.'),
  q('La planificación operativa anual debería:', [
    'Desglosar hitos, responsables, recursos y métricas del año alineados al plan estratégico',
    'Ignorar la estrategia plurianual',
    'Duplicar objetivos contradictorios a propósito',
    'Evitar cualquier dato',
  ], 0, 'Plan operativo.'),
  q('Señale la CORRECTA sobre valores institucionales:', [
    'Deben observarse en decisiones de diseño de procesos e indicadores, no solo en pósteres',
    'Sobran si hay ISO 9001',
    'Sustituyen a la ley',
    'Son solo estéticos',
  ], 0, 'Valores operativos.'),
  q('Un error de cascada es:', [
    'Copiar el mismo KPI idéntico a todas las unidades aunque su contribución causal sea distinta',
    'Adaptar métricas locales que suman al objetivo institucional',
    'Acordar metas con dueños de proceso',
    'Revisar cargas de trabajo al fijar metas',
  ], 0, 'Cascada inteligente ≠ copia ciega.'),
  q('Integrar riesgos en la planificación estratégica implica:', [
    'Identificar amenazas/oportunidades que pueden desviar el logro de objetivos y definir respuestas',
    'Eliminar el pensamiento basado en riesgos de ISO 9001',
    'Prohibir contingencias',
    'Ignorar el entorno',
  ], 0, 'Estrategia + riesgo.'),
  q('¿Qué relación es más correcta?', [
    'Estrategia → CMI/DPO → procesos → indicadores de proceso → resultados',
    'Indicadores de vanidad → estrategia secreta → nada de procesos',
    'ISO 19011 → reforma del art. 168 CE',
    'ENAC → misión provincial',
  ], 0, 'Cadena de despliegue.'),
  q('La “relevancia” en SMART (la R) exige que el objetivo:', [
    'Contribuya de forma causal a prioridades estratégicas/mandato, no sea accesorio',
    'Sea imposible',
    'Carezca de plazo',
    'No tenga dueño',
  ], 0, 'Relevant.'),
  q('Señale la INCORRECTA:', [
    'Cuantos más objetivos estratégicos (p. ej. 40+), mejor el foco directivo',
    'Pocos objetivos claros facilitan la atención',
    'El exceso de KPIs dispersa',
    'Priorizar es parte de estrategar',
  ], 0, 'Menos es más en foco estratégico.'),
  q('Un plan sin ownership claro suele fracasar porque:', [
    'Nadie se siente responsable del resultado ni de desbloquear impedimentos',
    'Hay demasiados datos útiles',
    'Hay demasiada claridad',
    'Hay patrocinio directivo excesivo',
  ], 0, 'Accountability.'),
  q('En oposiciones de calidad, “desarrollo de una planificación estratégica” apunta a:', [
    'Fases/método (diagnóstico–formulación–despliegue–seguimiento) y coherencia misión/visión/valores/objetivos',
    'Solo memorizar la definición de Pareto',
    'Solo el art. 14 CE',
    'Solo ENAC',
  ], 0, 'Enunciado tema 4.'),
  q('La visión debe ser ambiciosa pero creíble; si es inalcanzable de modo manifiesto:', [
    'Desmotiva y pierde función orientadora',
    'Mejora automáticamente los indicadores',
    'Sustituye al presupuesto',
    'Elimina la necesidad de diagnóstico',
  ], 0, 'Visión útil.'),
  q('Actualizar la estrategia ante un cambio legal relevante es:', [
    'Señal de buen gobierno, no de “fracaso” del plan anterior',
    'Siempre ilegal',
    'Prueba de que no debía planificarse',
    'Motivo para abandonar indicadores',
  ], 0, 'Adaptación.'),
  q('¿Cuál es el mejor “test” de que existe estrategia real y no solo documento?', [
    'Decisiones de priorización y asignación de recursos coherentes con lo declarado, visibles en el día a día',
    'Un PDF de 200 páginas sin seguimiento',
    'Un lema en la web',
    'Una foto de un workshop',
  ], 0, 'Strategy-in-use.'),
  q('Los objetivos a corto sin anclaje estratégico tienden a:', [
    'Optimizaciones locales que pueden perjudicar el resultado global (suboptimización)',
    'Mejorar siempre el mapa estratégico',
    'Eliminar silos automáticamente',
    'Sustituir la misión con éxito',
  ], 0, 'Suboptimisation.'),
  q('En un CMI público, un objetivo estratégico de “aprendizaje y crecimiento” podría ser:', [
    'Elevar la competencia media del personal del servicio X en metodología de mejora (PDCA/herramientas) medida por evaluación/certificación interna',
    'Reducir el patrimonio neto de un ayuntamiento',
    'Aumentar el Euribor',
    'Reformar el Título II CE',
  ], 0, 'Perspectiva aprendizaje.'),
])

writeTema(5, [
  q('En una organización pública, el análisis de partes interesadas es crítico porque:', [
    'Existen múltiples actores con intereses legítimos distintos (y a veces en tensión) que condicionan requisitos del servicio',
    'Solo existe un cliente idéntico al de una empresa de consumo',
    'Los empleados nunca son parte interesada',
    'Los órganos de control no imponen requisitos',
  ], 0, 'Pluralidad de stakeholders.'),
  q('Señale la herramienta MÁS adecuada para explorar en profundidad percepciones cualitativas de un grupo reducido:', [
    'Grupo focal (focus group) bien moderado',
    'Solo el balance de sumas y saldos',
    'Un gráfico de control sin más contexto',
    'La reforma del art. 167 CE',
  ], 0, 'Focus group = cualitativo.'),
  q('Triangular encuesta + quejas + datos de proceso sirve para:', [
    'Reducir sesgos (p. ej. solo quien reclama) y validar hipótesis de mejora',
    'Complicar inútilmente siempre la decisión',
    'Sustituir la legalidad',
    'Eliminar la necesidad de dueño de proceso',
  ], 0, 'Triangulación.'),
  q('Un mapa de stakeholders con ejes poder/interés ayuda a:', [
    'Priorizar estrategias de relación e información',
    'Discriminar ilegalmente a usuarios',
    'Eliminar la transparencia',
    'Sustituir el presupuesto',
  ], 0, 'Mendelow u otros.'),
  q('Señale la INCORRECTA sobre medición de satisfacción:', [
    'Publicar resultados y no cambiar nada suele aumentar la credibilidad institucional',
    'Las encuestas deben ser accionables',
    'El cierre de ciclo con quien reclamó genera confianza',
    'Hay que cuidar sesgos de no respuesta',
  ], 0, 'Medir sin actuar destruye credibilidad.'),
  q('El “cliente interno” en una Diputación podría ser:', [
    'Un área gestora que recibe soporte de TIC, contratación o calidad',
    'Solo un turista',
    'El BOE',
    'ENAC siempre',
  ], 0, 'Servicios internos.'),
  q('Traducir la “voz del ciudadano” a requisitos de proceso significa:', [
    'Convertir necesidades en especificaciones operativas (plazos, claridad, canales, evidencias) verificables',
    'Colgar testimonios sin cambiar el proceso',
    'Eliminar indicadores',
    'Improvisar sin documentar',
  ], 0, 'VOC → requirements.'),
  q('Segmentar usuarios en AAPP es legítimo si:', [
    'Mejora el diseño del servicio sin vulnerar igualdad ante la ley ni generar privilegios arbitrarios',
    'Sirve para denegar derechos a un colectivo vulnerable sin base',
    'Sustituye al procedimiento legalmente debido',
    'Se oculta al Pleno cuando hay deber de información',
  ], 0, 'Segmentación ≠ discriminación ilegal.'),
  q('Un NPS adaptado mide esencialmente:', [
    'Propensión a recomendar el servicio / lealtad percibida, con limitaciones en contexto público',
    'La inflación',
    'El censo electoral',
    'La capacidad de un proceso industrial solo',
  ], 0, 'NPS = recomendación; usar con cautela en lo público.'),
  q('Ignorar a quienes NO usan el servicio (no-usuarios) sesga el diagnóstico porque:', [
    'Puede ocultar barreras de acceso (digitales, idiomáticas, horarias, desconfianza)',
    'Los no-usuarios nunca importan',
    'La equidad prohíbe estudiar barreras',
    'ISO 9001 veda analizar demanda',
  ], 0, 'Acceso e inclusión.'),
  q('Las quejas son especialmente valiosas cuando:', [
    'Se clasifican, se priorizan (Pareto) y se vinculan a acciones de proceso',
    'Se archivan sin análisis para “no manchar” indicadores',
    'Se usan solo para sancionar sin mirar el sistema',
    'Se publican datos personales indebidamente',
  ], 0, 'Quejas con método.'),
  q('Mystery shopping en AAPP, si se utiliza, exige:', [
    'Marco ético/legal claro, no engaño ilícito y uso orientado a mejora, no a escarnio',
    'Grabar en secreto sin límite ni base',
    'Sustituir auditorías de conformidad normativa',
    'Publicar el nombre de empleados en prensa sin garantías',
  ], 0, 'Límites del mystery shopping público.'),
  q('Un indicador de esfuerzo del usuario (customer effort) encaja mejor con:', [
    'Número de interacciones/reenvíos necesarios para completar un trámite',
    'El color del escudo',
    'La antigüedad del Presidente',
    'El número de plantas del edificio solo',
  ], 0, 'Esfuerzo del usuario.'),
  q('Proveedores como parte interesada importan porque:', [
    'Su desempeño condiciona la calidad final percibida por el ciudadano/municipio',
    'Nunca afectan al servicio público',
    'ISO prohíbe evaluar proveedores',
    'Solo importan en el sector privado',
  ], 0, 'Cadena de suministro.'),
  q('Órganos de control (Intervención, Sindicatura, etc.) como stakeholders:', [
    'Imponen requisitos de legalidad, control financiero y evidencia que el SGC debe integrar',
    'Son irrelevantes para calidad',
    'Sustituyen al usuario como único criterio',
    'Prohíben indicadores de servicio',
  ], 0, 'Compliance + calidad.'),
  q('Una encuesta “útil” se caracteriza por:', [
    'Pocas preguntas ligadas a decisiones, escala clara, muestreo razonable y plan de explotación',
    '200 ítems sin hipótesis',
    'Preguntas tendenciosas para “salir bien”',
    'No analizar resultados',
  ], 0, 'Diseño de encuesta.'),
  q('Gestionar expectativas es parte de la calidad porque:', [
    'Promesas (Cartas, webs, mostradores) no alineadas con capacidad generan insatisfacción aunque el proceso sea legal',
    'Las expectativas sobran en AAPP',
    'Hay que prometer siempre el máximo imposible',
    'La comunicación clara empeora la percepción',
  ], 0, 'Expectativas vs capacidad.'),
  q('Señale la CORRECTA sobre accesibilidad:', [
    'Es requisito de calidad y a menudo de cumplimiento (física, web, lectura fácil, canales alternativos)',
    'Es solo estética',
    'No afecta a la satisfacción',
    'Solo aplica a empresas privadas',
  ], 0, 'Accesibilidad.'),
  q('Priorizar necesidades detectadas debería combinar:', [
    'Impacto en personas, frecuencia, riesgo legal/reputacional y alineación con mandato',
    'Solo quien más grita en redes',
    'Azar',
    'Orden alfabético de apellidos',
  ], 0, 'Priorización multicriterio.'),
  q('El feedback loop con la persona reclamante:', [
    'Explica qué se ha hecho y cierra el ciclo; mejora confianza y aprendizaje',
    'Es siempre ilegal',
    'Empeora sistemáticamente la imagen sin beneficio',
    'Sustituye la corrección del proceso',
  ], 0, 'Cierre de ciclo.'),
  q('En servicios a municipios, medir solo satisfacción del técnico municipal sin mirar tiempos/errores:', [
    'Da visión parcial; conviene combinar percepción y desempeño',
    'Basta siempre',
    'Prohíbe el CMI',
    'Elimina la VOC',
  ], 0, 'Percepción + performance.'),
  q('Un panel ciudadano periódico aporta:', [
    'Señal cualitativa longitudinal, no necesariamente representatividad estadística plena',
    'Sustituto perfecto de un censo',
    'Prueba pericial penal',
    'Certificación ISO automática',
  ], 0, 'Límites del panel.'),
  q('Datos de demanda (picos, estacionalidad) permiten:', [
    'Ajustar capacidad, horarios y canales (perecibilidad)',
    'Ignorar colas',
    'Eliminar citas útiles sin análisis',
    'Cerrar el servicio sin comunicación',
  ], 0, 'Demanda-capacidad.'),
  q('Señale la trampa típica de tests:', [
    'Tratar “cliente” en AAPP como concepto único e idéntico al marketing privado, sin matices de ciudadanía y legalidad',
    'Hablar de stakeholders',
    'Usar encuestas con ética',
    'Triangular fuentes',
  ], 0, 'Matiz público.'),
  q('La LO 3/2007 y la escucha institucional se relacionan cuando:', [
    'Se incorpora perspectiva de género en diagnóstico de necesidades y en el diseño del servicio',
    'Se prohíbe encuestar a mujeres',
    'Se elimina la igualdad del art. 14 CE',
    'Se ignora la transversalidad',
  ], 0, 'Igualdad + VOC.'),
  q('Publicar resultados de satisfacción sin segmentar ni contextualizar puede:', [
    'Inducir lecturas engañosas; conviene acompañar metodología y limitaciones',
    'Ser siempre suficiente',
    'Sustituir la mejora',
    'Eliminar sesgos automáticamente',
  ], 0, 'Transparencia metodológica.'),
  q('En ISO 9001, la orientación al cliente se acerca conceptualmente a:', [
    'Determinar y cumplir requisitos del cliente y los legales/reglamentarios aplicables, y aumentar la satisfacción',
    'Ignorar requisitos legales si el cliente lo pide',
    'Eliminar partes interesadas relevantes',
    'Prohibir encuestas',
  ], 0, 'Puente tema 5 ↔ 12.'),
  q('Un buen “insight” de VOC no es un dato aislado, sino:', [
    'Una conclusión accionable validada con más de una evidencia',
    'Un comentario anónimo sin patrón',
    'Un rumor de pasillo',
    'Una anécdota de dirección sin contraste',
  ], 0, 'Insight vs ruido.'),
  q('Cuando hay conflicto entre preferencia mayoritaria y derecho de una minoría:', [
    'Prevalecen legalidad y garantías; la calidad pública no es solo “lo que opina la mayoría”',
    'Siempre gana la encuesta',
    'Se elimina el procedimiento',
    'Decide solo el community manager',
  ], 0, 'Límite democrático-legal.'),
  q('El temario pide “herramientas para identificar necesidades y expectativas” y “medidas de satisfacción”. La respuesta más completa combina:', [
    'Identificación (encuestas, focus, quejas, observación, demanda, stakeholders) + medición (encuestas, índices, reclamaciones, experiencia) + uso para mejora',
    'Solo un buzón sin explotación',
    'Solo el organigrama',
    'Solo el presupuesto',
  ], 0, 'Enunciado tema 5.'),
  q('Señale la más EXIGENTE:', [
    'Satisfacción alta + incumplimiento sistemático de plazos legales NO es éxito de calidad pública',
    'Da igual el plazo legal si hay sonrisa',
    'Los indicadores legales sobran',
    'La Carta puede contradecir la ley',
  ], 0, 'Cumplimiento + percepción.'),
  q('Analizar el “esfuerzo” además de la “satisfacción” ayuda porque:', [
    'Un usuario puede declararse “satisfecho” por resignación tras un proceso muy costoso',
    'El esfuerzo nunca importa',
    'Satisfacción y esfuerzo son siempre idénticos',
    'ISO prohíbe medir esfuerzo',
  ], 0, 'Satisfaction vs effort.'),
])

console.log('3-5 ok')

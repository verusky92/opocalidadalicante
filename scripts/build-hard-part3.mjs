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

writeTema(6, [
  q('La definición más rigurosa de proceso en gestión de calidad es:', [
    'Conjunto de actividades mutuamente relacionadas que utilizan entradas para proporcionar un resultado previsto (salida)',
    'Un departamento del organigrama',
    'Un indicador aislado',
    'Una norma ISO completa por sí sola',
  ], 0, 'Definición tipo ISO.'),
  q('Señale la clasificación MÁS habitual en un mapa de procesos:', [
    'Estratégicos / clave u operativos / de soporte o apoyo',
    'Solo penales y civiles',
    'Solo informáticos y analógicos',
    'Públicos y secretos sin más criterio de valor',
  ], 0, 'Tipología clásica.'),
  q('Un error grave al elaborar el mapa de procesos es:', [
    'Confundir unidades orgánicas con procesos de extremo a extremo, perpetuando silos',
    'Mostrar interfaces entre procesos',
    'Identificar dueños',
    'Separar soporte de procesos clave',
  ], 0, 'Proceso ≠ organigrama.'),
  q('El dueño de proceso (process owner) debe poder:', [
    'Coordinar actores de varias unidades, proponer cambios y responder de indicadores del proceso',
    'Solo firmar nóminas de su sección',
    'Ignorar interfaces con otros procesos',
    'Prohibir mediciones',
  ], 0, 'Autoridad transversal limitada pero real.'),
  q('SIPOC es especialmente útil al inicio porque:', [
    'Fija alcance: Supplier-Input-Process-Output-Customer sin perderse en el detalle del flujograma',
    'Sustituye al CMI',
    'Certifica ISO 9001 automáticamente',
    'Mide capacidad estadística sola',
  ], 0, 'Herramienta de encuadre.'),
  q('Un estándar de proceso NO es:', [
    'Un deseo genérico sin umbral verificable',
    'Un nivel de referencia de desempeño',
    'Una meta operativa ligada a indicador',
    'Un criterio de conformidad del servicio',
  ], 0, 'Estándar debe ser verificable.'),
  q('Indicador leading vs lagging en un proceso de expedientes:', [
    '% de entradas completas (leading) vs % resueltos fuera de plazo (lagging)',
    'Ambos son siempre idénticos',
    'Solo existen lagging en AAPP',
    'Leading prohíbe la mejora',
  ], 0, 'Predicción vs resultado.'),
  q('Gestionar interfaces entre procesos evita:', [
    'Pérdidas de información, retrabajo y “tierra de nadie” entre unidades',
    'Toda colaboración',
    'Los acuerdos de nivel de servicio internos',
    'La definición de salidas',
  ], 0, 'Handoffs.'),
  q('Señale la INCORRECTA:', [
    'Documentar procesos garantiza por sí solo que se cumplan',
    'La documentación apoya formación y estandarización',
    'La información documentada debe ser la necesaria para la eficacia',
    'Los registros aportan evidencia',
  ], 0, 'Documentar ≠ implantar.'),
  q('Un proceso clave en una Diputación se reconoce porque:', [
    'Contribuye directamente a la misión/servicio a municipios o ciudadanía, no solo a soporte interno',
    'Es el más barato',
    'Es el más antiguo',
    'No tiene indicadores',
  ], 0, 'Criticidad por valor.'),
  q('Desplegar un proceso incluye tipicamente:', [
    'Flujograma/procedimiento, roles RACI, riesgos, indicadores, recursos y plan de control',
    'Solo un eslogan',
    'Solo el logo',
    'Eliminar al dueño',
  ], 0, 'Despliegue completo.'),
  q('La gestión por procesos busca optimizar:', [
    'El flujo de valor extremo a extremo, aunque atraviese varios departamentos',
    'La maximización del tamaño de cada silo',
    'La opacidad de interfaces',
    'La duplicación de controles inútiles sin criterio',
  ], 0, 'End-to-end.'),
  q('Un KPI de proceso debe ser, como mínimo:', [
    'Relevante, medible, comparable en el tiempo y con meta/estándar',
    'Secreto para el dueño',
    'Cambiado cada día sin criterio para “poner verde”',
    'Independiente de la estrategia',
  ], 0, 'Calidad del KPI.'),
  q('Externalizar una actividad del proceso exige:', [
    'Definir requisitos, controles y desempeño del proveedor como parte del sistema',
    'Desentenderse totalmente',
    'Eliminar evidencias',
    'Prohibir auditorías de segunda parte',
  ], 0, 'Control de proveedores.'),
  q('Señale la más precisa sobre “salida” del proceso:', [
    'Debe satisfacer requisitos del cliente/siguiente proceso y los legales aplicables',
    'Es irrelevante su conformidad',
    'Solo importa la entrada',
    'No puede medirse',
  ], 0, 'Output conforme.'),
  q('Retrabajo es señal de:', [
    'Falla de calidad/capacidad o de diseño del proceso (fallo interno típico)',
    'Excelencia',
    'Estabilidad perfecta',
    'Que sobran indicadores',
  ], 0, 'Rework.'),
  q('Tiempo de ciclo (cycle/lead time) mide:', [
    'Duración desde inicio a fin del proceso para un ítem/expediente',
    'Solo el salario medio',
    'La superficie del archivo',
    'El número de sellos',
  ], 0, 'Lead time.'),
  q('Actualizar el mapa cuando cambian servicios es necesario porque:', [
    'Un mapa obsoleto induce auditorías y decisiones sobre un sistema ficticio',
    'ISO prohíbe actualizar mapas',
    'El mapa es eterno',
    'Los procesos no cambian nunca en AAPP',
  ], 0, 'Mapa vivo.'),
  q('RACI en el despliegue aclara:', [
    'Quién es Responsible, Accountable, Consulted, Informed en cada actividad',
    'Solo el color corporativo',
    'La reforma constitucional',
    'ENAC',
  ], 0, 'RACI.'),
  q('Un riesgo de “sobreprocedimentar” es:', [
    'Rigideces que aumentan tiempos sin reducir fallos relevantes',
    'Mayor claridad útil siempre sin coste',
    'Mejor percepción automática',
    'Eliminación de silos garantizada',
  ], 0, 'Burocracia vs valor.'),
  q('Enfoque a procesos en ISO 9001 implica, entre otros:', [
    'Determinar procesos necesarios, su secuencia e interacción, y gestionarlos',
    'Prohibir mapas',
    'Ignorar riesgos',
    'Eliminar indicadores',
  ], 0, 'Puente con tema 12.'),
  q('Señale la CORRECTA sobre procesos estratégicos:', [
    'Orientan y despliegan la dirección (planificación, CMI, revisión); no suelen “entregar” el servicio final al ciudadano',
    'Son idénticos a los de limpieza',
    'Sustituyen a los procesos clave',
    'No necesitan dueño',
  ], 0, 'Estratégicos vs clave.'),
  q('Un SLA interno entre procesos sirve para:', [
    'Acordar tiempos/calidad de las entregas entre unidades',
    'Derogar la ley',
    'Sustituir al Pleno',
    'Certificar personas automáticamente',
  ], 0, 'Acuerdos de interfaz.'),
  q('La trampa “tenemos procesos porque tenemos procedimientos PDF” se desmonta preguntando:', [
    'Si hay dueño, indicadores, evidencias de cumplimiento y mejora basada en datos',
    'Si el PDF tiene portada bonita',
    'Si hay más de 500 páginas',
    'Si está archivado en tres carpetas',
  ], 0, 'Proceso gestionado vs papel.'),
  q('Estratificar indicadores por municipio/canal/tipo de expediente permite:', [
    'Detectar bolsas de problema ocultas en la media',
    'Ocultar siempre la variabilidad',
    'Eliminar Pareto',
    'Prohibir histograma',
  ], 0, 'Estratificación.'),
  q('El “resultado previsto” del proceso debe alinearse con:', [
    'Requisitos de partes interesadas relevantes y mandato legal del servicio',
    'Solo la comodidad interna',
    'Azar',
    'El color del sello',
  ], 0, 'Propósito del proceso.'),
  q('¿Qué afirmación es más avanzada?', [
    'Un proceso estable (bajo control) puede ser incapaz de cumplir el estándar de servicio: hay que rediseñar, no solo exhortar',
    'Estabilidad garantiza capacidad siempre',
    'Capacidad garantiza ausencia de causas especiales',
    'Sin datos se gestiona mejor',
  ], 0, 'Puente con tema 7.'),
  q('Inventariar procesos “como están” (AS-IS) antes del TO-BE evita:', [
    'Rediseñar sobre una imagen idealizada falsa',
    'Todo cambio',
    'Toda medición',
    'Toda participación',
  ], 0, 'AS-IS/TO-BE.'),
  q('Señale la mejor métrica de “calidad del handoff”:', [
    '% de transferencias con información completa y correcta a la primera',
    'Número de plantas entre despachos',
    'Antigüedad media del personal solo',
    'Likes del área',
  ], 0, 'Calidad de interfaz.'),
  q('En el temario, “despliegue y gestión de procesos” e “indicadores y estándares” apuntan a que el opositor sepa:', [
    'Pasar del mapa a la operación medible con responsables',
    'Solo dibujar cajas sin métricas',
    'Solo citar EFQM sin procesos',
    'Solo memorizar el art. 1 CE',
  ], 0, 'Enunciado tema 6.'),
  q('Un proceso de soporte bien gestionado se reconoce porque:', [
    'Habilita a los procesos clave con niveles de servicio acordados, sin convertirse en cuello de botella opaco',
    'Compite por protagonismo sin aportar al valor',
    'Carece de indicadores',
    'Ignora a sus “clientes” internos',
  ], 0, 'Soporte eficaz.'),
  q('¿Cuál es el mayor síntoma de que NO hay gestión por procesos real?', [
    'Los problemas se “tiran” al departamento siguiente y nadie mira el flujo completo del expediente',
    'Existe un mapa actualizado',
    'Hay dueños nombrados con KPIs',
    'Se revisan interfaces',
  ], 0, 'Silos vs flujo.'),
])

writeTema(7, [
  q('“Proceso bajo control” (estadístico) significa que:', [
    'La variación observada se explica por causas comunes del sistema, sin indicios de causas especiales',
    'No existe ninguna variación',
    'El proceso está certificado ISO necesariamente',
    'No hace falta medir',
  ], 0, 'Control ≠ cero variación.'),
  q('Capacidad del proceso se refiere a:', [
    'Aptitud para cumplir especificaciones/requisitos de forma consistente',
    'Número de empleados del organigrama',
    'Metros del archivo',
    'Presupuesto de marketing',
  ], 0, 'Capability.'),
  q('Señale la afirmación CORRECTA:', [
    'Un proceso puede estar bajo control y ser incapaz (estable pero fuera de especificación)',
    'Bajo control implica automáticamente capacidad suficiente',
    'Capacidad elimina toda causa común',
    'Causas especiales deben ignorarse',
  ], 0, 'Estable ≠ capaz.'),
  q('Tratar una causa común como si fuera especial suele producir:', [
    'Sobreajuste (tampering) y más variabilidad',
    'Mejora sostenible del sistema',
    'Eliminación del PDCA',
    'Certificación automática',
  ], 0, 'Error clásico de Deming.'),
  q('PDCA correctamente aplicado termina el ciclo cuando:', [
    'Se estandariza lo que funciona (Act) o se corrige el plan tras verificar',
    'Se planifica y no se ejecuta',
    'Se ejecuta sin verificar',
    'Se archiva el plan sin Act',
  ], 0, 'Cierre del ciclo.'),
  q('Una señal típica de causa especial es:', [
    'Un punto fuera de límites de control o un patrón no aleatorio relevante',
    'La variación habitual del sistema',
    'La media estable dentro de límites',
    'Un histograma sin outliers y estable',
  ], 0, 'Reglas de detección (orientativas).'),
  q('Reducir variabilidad indeseada busca:', [
    'Mayor predicibilidad del servicio y menos defectos/incumplimientos',
    'Más improvisación',
    'Ocultar datos',
    'Eliminar estándares',
  ], 0, 'Predictibilidad.'),
  q('Límites de especificación vs límites de control:', [
    'La especificación la fija el requisito/cliente/norma; el control describe el comportamiento estadístico del proceso',
    'Son siempre el mismo número',
    'ISO prohíbe distinguirlos',
    'Solo existen en el sector privado',
  ], 0, 'Spec vs control limits.'),
  q('Señale la INCORRECTA sobre mejora:', [
    'Exhortar a las personas sin cambiar el sistema es la forma más sostenible de elevar capacidad',
    'PDCA estructura el aprendizaje',
    'Hay mejora incremental y rediseño',
    'Hay que verificar el impacto',
  ], 0, 'El sistema explica la mayoría del desempeño.'),
  q('Antes de implantar 10 acciones, el método más sólido es:', [
    'Priorizar causas vitales con datos (Pareto) y validar hipótesis',
    'Aplicar todas a la vez sin medición',
    'Cambiar indicadores para esconder el problema',
    'Culpar solo a un empleado sin mirar el proceso',
  ], 0, 'Priorización.'),
  q('Verificar (Check) en PDCA exige:', [
    'Comparar resultados con la predicción/meta usando datos comparables',
    'Asumir éxito sin evidencia',
    'Borrar la línea base',
    'Cambiar la meta a posteriori sin declarar',
  ], 0, 'Integridad del Check.'),
  q('Un plan de mejora mínimamente serio incluye:', [
    'Acciones, responsables, plazos, recursos, riesgo e indicador de éxito',
    'Solo un titular en un correo',
    'Ningún responsable',
    'Sin verificación',
  ], 0, 'Calidad del plan.'),
  q('Estratificar demoras por canal (presencial/web/teléfono) puede revelar:', [
    'Que la media oculta un canal fuera de control',
    'Que no hace falta mejorar',
    'Que el proceso es único e indivisible siempre',
    'Que Pareto no aplica',
  ], 0, 'Estratificación.'),
  q('La reingeniería/rediseño procede cuando:', [
    'La mejora incremental no logra la capacidad exigida o el proceso está obsoleto respecto al mandato',
    'Todo indicador está en verde estable',
    'No hay problema de usuario',
    'Solo por moda, sin datos',
  ], 0, 'Cuándo rediseñar.'),
  q('Documentar lecciones aprendidas evita:', [
    'Reabrir ciclos PDCA sobre el mismo fallo sistémico',
    'Toda estandarización',
    'Toda formación',
    'Todo control',
  ], 0, 'Aprendizaje organizacional.'),
  q('En servicios públicos, evaluar procesos debe incluir a menudo:', [
    'Desempeño + conformidad legal + experiencia de usuario',
    'Solo likes',
    'Solo coste sin servicio',
    'Solo estética del informe',
  ], 0, 'Evaluación multidimensional.'),
  q('Un pico puntual por una caída informática:', [
    'Es candidato a causa especial: contención + acción correctiva sobre la causa',
    'Debe tratarse como variación común del “día a día” sin más',
    'Obliga a cambiar la especificación del ciudadano',
    'Demuestra que no hace falta continuidad de servicio',
  ], 0, 'Incidente = especial.'),
  q('Capacidad “a corto” vs mejora del sistema:', [
    'Horas extra pueden tapar incapacidad estructural, pero no la corrigen',
    'Horas extra cambian el sistema permanentemente siempre',
    'Son equivalentes al rediseño',
    'Eliminan causas comunes',
  ], 0, 'Parches vs sistema.'),
  q('Señale la más rigurosa:', [
    'Sin dato de línea base, cualquier “mejora” es anecdótica',
    'Las anécdotas bastan para cerrar PDCA',
    'Los gráficos sobran si hay intuición',
    'Verificar es opcional',
  ], 0, 'Baseline.'),
  q('El gráfico de control en un servicio administrativo se puede aplicar a:', [
    'Tiempos de ciclo diarios/semanales, % defectos de documentación, etc., con cautela por no normalidad',
    'Solo a procesos químicos',
    'Nunca en AAPP',
    'Solo a nóminas del Gobierno',
  ], 0, 'SPC en servicios con matices.'),
  q('“Act” puede significar dos cosas:', [
    'Estandarizar (si funcionó) o ajustar/corregir el plan (si no)',
    'Archivar siempre',
    'Ocultar el Check',
    'Cambiar la meta en silencio',
  ], 0, 'Doble sentido de Act.'),
  q('Una métrica de capacidad orientada a plazos legales podría ser:', [
    '% de expedientes resueltos dentro del plazo máximo legal/estándar de Carta',
    'Número de vasos en la máquina de café',
    'Likes',
    'Color del logo',
  ], 0, 'Capacidad vs spec de plazo.'),
  q('Señale la trampa de examen:', [
    'Afirmar que “bajo control” significa “sin errores” o “sin variación”',
    'Distinguir causas comunes y especiales',
    'Usar PDCA',
    'Hablar de capacidad',
  ], 0, 'Definición estricta.'),
  q('Mejora continua vs innovación disruptiva:', [
    'Compatible: PDCA incremental y proyectos de rediseño cuando hace falta',
    'Mutuamente excluyentes siempre',
    'Prohibidas en ISO 9001',
    'Irrelevantes en CAF',
  ], 0, 'Ambas caben.'),
  q('Si tras una acción el indicador mejora pero empeora otro crítico (p. ej. plazo vs legalidad):', [
    'Hay que revisar el sistema de métricas y efectos colaterales (suboptimización)',
    'Celebrar sin más',
    'Ocultar el indicador legal',
    'Eliminar el Check',
  ], 0, 'Trade-offs.'),
  q('La evaluación de procesos alimenta de forma natural:', [
    'CMI, auditorías, planes de mejora y DPO',
    'Solo el art. 56 CE',
    'Solo ENAC',
    'Solo el Preámbulo',
  ], 0, 'Integración.'),
  q('En el enunciado del tema 7, “proceso bajo control” y “variabilidad” exigen que el aspirante distinga:', [
    'Estabilidad estadística vs cumplimiento de requisitos (capacidad)',
    'Solo sinónimos de “bonito”',
    'Solo certificación',
    'Solo Cartas de Servicios',
  ], 0, 'Núcleo del tema.'),
  q('Un equipo que celebra “cero no conformidades” sin auditorías ni medición:', [
    'Probablemente tiene ceguera de sistema, no excelencia',
    'Ha alcanzado capacidad infinita',
    'Puede cerrar el SGC',
    'Demuestra ausencia de causas comunes',
  ], 0, 'Cero NC sospechoso.'),
  q('La mejor primera pregunta ante un problema crónico de demoras es:', [
    '¿El proceso es estable? ¿Dónde está el cuello de botella? ¿Qué dice el Pareto de causas?',
    '¿A quién sancionamos hoy sin datos?',
    '¿Ponemos más formularios?',
    '¿Ocultamos la Carta?',
  ], 0, 'Diagnóstico.'),
  q('Formar en método (PDCA, 5P, Pareto) aumenta capacidad organizacional porque:', [
    'Distribuye competencia para mejorar el sistema, no solo ejecutar tareas',
    'Sustituye a los datos',
    'Elimina la necesidad de dueños',
    'Prohíbe indicadores',
  ], 0, 'Capability building.'),
  q('Señale la CORRECTA:', [
    'La reducción de variabilidad sin entender la necesidad del usuario puede estandarizar un mal servicio',
    'Toda reducción de variabilidad es siempre positiva sin matices',
    'La especificación sobra',
    'El usuario no define requisitos',
  ], 0, 'Estandarizar lo correcto.'),
  q('Un “proceso capaz” en atención a plazos de Carta implica:', [
    'Que la distribución de tiempos cumple de forma consistente el estándar comprometido',
    'Que existe un PDF del proceso',
    'Que hay una reunión semanal',
    'Que el edificio es nuevo',
  ], 0, 'Capacidad = cumplimiento consistente.'),
])

writeTema(8, [
  q('En la tipología PAF de costes de calidad, la formación preventiva del personal es tipicamente:', [
    'Coste de prevención',
    'Fallo externo',
    'Indemnización',
    'Sanción penal',
  ], 0, 'Prevención.'),
  q('Una auditoría interna de conformidad del SGC se clasifica preferentemente como:', [
    'Coste de evaluación/detección',
    'Fallo externo puro',
    'Coste ajeno a calidad',
    'Ingreso financiero',
  ], 0, 'Appraisal/evaluation.'),
  q('El retrabajo detectado antes de entregar al ciudadano es:', [
    'Fallo interno',
    'Prevención',
    'Excelencia',
    'Acreditación ENAC',
  ], 0, 'Internal failure.'),
  q('Indemnizaciones, media adversa y pérdida de confianza tras un fallo ya externalizado son:', [
    'Costes de fallo externo (a menudo infraestimados)',
    'Prevención',
    'Misión institucional',
    'Valores',
  ], 0, 'External failure.'),
  q('Señale la afirmación MÁS sólida:', [
    'Aumentar prevención y detección inteligente suele reducir el coste total al bajar fallos, pero el óptimo no es “inspección infinita”',
    'Conviene maximizar fallos externos',
    'La prevención nunca reduce fallos',
    'Solo importan costes de evaluación',
  ], 0, 'Trade-off y óptimo.'),
  q('Un exceso de inspección final sin mejorar el proceso suele:', [
    'Añadir coste de evaluación y dejar intacta la causa raíz',
    'Sustituir con garantía total a la prevención',
    'Eliminar la perecibilidad',
    'Certificar EFQM',
  ], 0, 'Inspección ≠ prevención.'),
  q('Medir el coste de no calidad (COPQ) sirve para:', [
    'Traducir problemas de proceso a lenguaje directivo de recursos y priorización',
    'Sustituir la ética pública',
    'Eliminar indicadores de servicio',
    'Prohibir PDCA',
  ], 0, 'COPQ.'),
  q('Señale la INCORRECTA:', [
    'Si no se miden fallos internos, la organización puede parecer “barata” mientras desperdicia capacidad',
    'Los fallos internos también cuestan',
    'El retrabajo consume tiempo de servicio (perecibilidad)',
    'Solo los fallos externos tienen coste',
  ], 0, 'Internos también cuestan.'),
  q('Un poka-yoke en un trámite digital (campo obligatorio con validación) es:', [
    'Inversión de prevención/a prueba de errores',
    'Fallo externo',
    'Sanción',
    'Indemnización',
  ], 0, 'Error-proofing.'),
  q('Calibración/verificación de instrumentos de medida se asocia sobre todo a:', [
    'Evaluación (y prevención de decisiones basadas en medida errónea)',
    'Fallo externo puro',
    'Marketing',
    'Art. 168 CE',
  ], 0, 'Metrología.'),
  q('Priorizar con Pareto de costes de fallos permite:', [
    'Atacar las pocas causas que concentran la mayor pérdida',
    'Tratar todas las causas por igual siempre',
    'Ignorar el dinero',
    'Eliminar prevención',
  ], 0, '80/20 en COPQ.'),
  q('La “calidad barata” (recortar prevención y controles útiles) suele:', [
    'Desplazar costes hacia fallos externos más caros y visibles',
    'Optimizar siempre el coste total',
    'Mejorar reputación',
    'Garantizar ISO',
  ], 0, 'Desplazamiento de costes.'),
  q('En AAPP, un coste de fallo externo olvidado con frecuencia es:', [
    'Pérdida de legitimidad/confianza y coste político-institucional',
    'Solo el toner de la impresora',
    'La formación',
    'El diseño del proceso',
  ], 0, 'Reputación pública.'),
  q('Clasificar bien P/A/F evita el error de:', [
    'Contar como “prevención” lo que en realidad es reparación tardía',
    'Medir formación',
    'Auditar',
    'Diseñar estándares',
  ], 0, 'Taxonomía limpia.'),
  q('El coste de oportunidad del personal atrapado en retrabajo es:', [
    'Parte del coste de no calidad (capacidad no usada en valor)',
    'Un ingreso',
    'Prevención pura',
    'Irrelevante por perecibilidad inversa',
  ], 0, 'Opportunity cost.'),
  q('Garantías/compensaciones por servicio deficiente se acercan a:', [
    'Fallo externo',
    'Misión',
    'Visión',
    'Valor sin coste',
  ], 0, 'Post-servicio.'),
  q('Señale la más exigente:', [
    'Un SGC maduro hace visibles los costes de fallos y los usa en el CMI/revisión directiva',
    'Hablar de costes de calidad es ajeno a lo público',
    'Solo el sector privado mide COPQ',
    'ISO prohíbe estimar costes de fallos',
  ], 0, 'Madurez.'),
  q('Detectar NC a la entrada (compleción documental) es preferible a detectarlas al final porque:', [
    'Reduce coste de fallo interno y evita consumir capacidad aguas abajo',
    'Aumenta fallos externos',
    'Empeora la perecibilidad de forma deseable',
    'Elimina la necesidad de prevención',
  ], 0, 'Detección temprana.'),
  q('¿Qué partida es más “gris” y exige criterio al clasificar?', [
    'Auditoría interna (evaluación) vs formación de auditores (prevención/competencia)',
    'Indemnización al usuario (externo claro)',
    'Retrabajo de informe defectuoso (interno claro)',
    'Campaña de disculpas por crisis (externo claro)',
  ], 0, 'Zonas grises P vs A.'),
  q('Recortar evaluación sin haber reducido la tasa de defectos:', [
    'Puede incrementar fallos externos de forma peligrosa',
    'Es siempre óptimo',
    'Elimina causas comunes',
    'Sustituye al rediseño',
  ], 0, 'No recortar a ciegas.'),
  q('Estructura de costes de calidad significa:', [
    'Modelo de clasificación, medición y seguimiento en el tiempo para decidir',
    'Solo un Excel ornamental',
    'Sustituir al presupuesto legal',
    'Derogar controles interventores',
  ], 0, 'Estructura = sistema.'),
  q('Un indicador financiero de no calidad podría ser:', [
    'Horas de retrabajo × coste hora + indemnizaciones + costes de crisis',
    'Número de plantas del edificio',
    'Color corporativo',
    'Likes',
  ], 0, 'Monetización aproximada.'),
  q('Prevención en AAPP incluye también:', [
    'Claridad normativa interna, checklists legales del trámite y formación en procedimiento',
    'Ocultar plazos al ciudadano',
    'Eliminar información predecible',
    'Improvisar requisitos por persona',
  ], 0, 'Prevención pública.'),
  q('Señale la CORRECTA:', [
    'No todo gasto en “calidad” es prevención: hay que ver si actúa antes del fallo',
    'Toda reunión se clasifica como prevención',
    'Toda multa es prevención',
    'Toda encuesta es fallo externo',
  ], 0, 'Criterio temporal causal.'),
  q('El temario distingue anomalías internas/externas y costes de detección y prevención. La clave examinadora es:', [
    'Situar el fallo respecto del “cliente” y situar la actividad respecto del momento del fallo',
    'Memorizar solo la palabra Pareto',
    'Citar el art. 56 CE',
    'Confundir ENAC con prevención',
  ], 0, 'Criterio de clasificación.'),
  q('Una crisis reputacional por filtración de datos es, en costes de calidad:', [
    'Fallo externo grave (además de posible incumplimiento legal)',
    'Prevención ejemplar',
    'Evaluación rutinaria',
    'Coste ajeno al SGC',
  ], 0, 'Externo + compliance.'),
  q('Invertir en diseño del servicio (service design) se justifica como prevención porque:', [
    'Evita fallos de usabilidad y retrabajo futuros',
    'Es siempre fallo interno',
    'Es indemnización',
    'No afecta a costes posteriores',
  ], 0, 'Diseño = prevención.'),
  q('¿Qué afirmación es falsa?', [
    'Los costes de fallos externos son siempre inferiores a los internos, por definición',
    'Los externos pueden ser mucho mayores por reputación y responsabilidad',
    'Los internos incluyen scrap/retrabajo',
    'La prevención puede ser la inversión más rentable',
  ], 0, 'No hay “siempre inferiores”.'),
  q('Reportar COPQ a dirección sin rigor metodológico:', [
    'Puede desacreditar el sistema; conviene explicitar hipótesis y rangos',
    'Es mejor que cualquier dato',
    'Debe ocultarse la metodología',
    'Sustituye a la evidencia de proceso',
  ], 0, 'Rigor.'),
  q('Relación con Carta de Servicios:', [
    'Incumplir estándares medidos eleva probabilidad de costes externos (reclamaciones, reputación)',
    'La Carta elimina COPQ',
    'La Carta es solo prevención contable',
    'No hay relación posible',
  ], 0, 'Puente tema 14.'),
  q('La mejor estrategia de reducción de COPQ es:', [
    'Eliminar causas raíz de los vital few y prevenir en el diseño',
    'Añadir inspecciones infinitas al final',
    'Ocultar NC',
    'Recortar formación útil',
  ], 0, 'Root cause + prevention.'),
  q('Señale el ejemplo correcto de evaluación:', [
    'Muestreo de calidad de resoluciones antes de notificación',
    'Curso de inducción en el procedimiento (prevención)',
    'Pago de indemnización (externo)',
    'Reescritura total tras queja externa ya presentada (más fallo que evaluación)',
  ], 0, 'Evaluación = verificar conformidad.'),
])

console.log('6-8 ok')

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../src/data/questions')
fs.mkdirSync(outDir, { recursive: true })

function writeTema(temaId, items) {
  if (items.length < 30) throw new Error(`Tema ${temaId}: ${items.length}`)
  const pad = String(temaId).padStart(2, '0')
  const exportName = `TEMA_${pad}_QUESTIONS`
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
    `import type { Question } from '../../types'\n\nexport const ${exportName}: Question[] = [\n${lines.join(',\n')},\n]\n`,
  )
  console.log(`tema ${temaId}: ${items.length}`)
}

function q(stem, correctText, wrongs, explanation, correctIndex = 0) {
  const options = ['', '', '', '']
  const w = [...wrongs]
  options[correctIndex] = correctText
  let wi = 0
  for (let i = 0; i < 4; i++) {
    if (i === correctIndex) continue
    options[i] = w[wi++]
  }
  return { stem, options, correct: correctIndex, explanation }
}

writeTema(3, [
  q('Una característica diferencial de los servicios es:', 'La intangibilidad', ['Su perfecta estandarización siempre', 'Que no requieren procesos', 'Que no tienen usuarios'], 'Los servicios no son tangibles como un producto físico.', 0),
  q('La heterogeneidad de los servicios implica:', 'Variabilidad en la prestación', ['Identidad absoluta en cada entrega', 'Almacenamiento ilimitado', 'Ausencia de personal'], 'Dependen de personas, momento y contexto.', 0),
  q('La inseparabilidad significa que:', 'Producción y consumo suelen coincidir', ['El servicio se almacena años', 'No hay interacción', 'Solo hay servicios digitales'], 'Simultaneidad tipica producción-consumo.', 0),
  q('La perecibilidad indica que:', 'El servicio no se almacena como un stock físico habitual', ['Los servicios duran siempre igual', 'No hay demanda variable', 'No importa la capacidad'], 'Capacidad no utilizada se pierde.', 0),
  q('En el sector público, la calidad debe reconciliarse con:', 'Legalidad, equidad y transparencia', ['Solo el beneficio privado', 'Publicidad engañosa', 'Opacidad total'], 'Condicionantes públicos.', 0),
  q('Un factor clave de implantación de calidad es:', 'El liderazgo y el compromiso de la dirección', ['Eliminar toda medición', 'Ignorar a las personas', 'Suprimir la mejora continua'], 'Sin liderazgo el sistema no arraiga.', 0),
  q('El enfoque al usuario/ciudadano en AAPP implica:', 'Conocer necesidades y expectativas dentro del marco legal', ['Ignorar reclamaciones', 'Trato desigual injustificado', 'Eliminar canales de contacto'], 'Calidad orientada al servicio público.', 0),
  q('La cultura de aprendizaje favorece:', 'La mejora continua', ['Ocultar errores', 'Castigar la detección de fallos', 'Congelar procesos para siempre'], 'Aprender de desviaciones.', 0),
  q('Los “múltiples clientes” en lo público significan:', 'Diversas partes interesadas (ciudadanía, usuarios, otras AAPP…)', ['Que no hay nadie a quien servir', 'Solo el equipo directivo', 'Solo proveedores'], 'Stakeholders amplios.', 0),
  q('Una directriz para sistemas de calidad en servicios es:', 'Gestionar la evidencia de la prestación y la experiencia del usuario', ['Eliminar indicadores', 'Documentar solo al final del año sin uso', 'Prohibir auditorías'], 'Hacer visible lo intangible.', 0),
  q('La participación del usuario en el servicio (co-producción):', 'Afecta al resultado de calidad', ['Nunca influye', 'Impide medir satisfacción', 'Elimina procesos'], 'El usuario forma parte del proceso.', 0),
  q('Estandarizar un servicio público busca:', 'Reducir variabilidad indeseada manteniendo equidad', ['Introducir arbitrariedad', 'Eliminar la normativa', 'Suprimir la atención'], 'Estándares y equidad.', 0),
  q('Un riesgo típico al implantar calidad en AAPP es:', 'Quedarse en burocracia documental sin mejora real', ['Medir demasiado los resultados útiles', 'Escuchar a la ciudadanía', 'Formar al personal'], 'Papeles sin cambio.', 0),
  q('La calidad percibida se relaciona con:', 'La comparación entre expectativas y percepción del servicio', ['Solo el coste de personal', 'Únicamente el color del logo', 'El número de sellos sin contenido'], 'Gap expectativas-percepción.', 0),
  q('La mejora continua en servicios públicos requiere:', 'Medir, analizar y actuar (p. ej. PDCA)', ['Nunca revisar procesos', 'Improvisar sin datos', 'Ocultar indicadores'], 'Ciclo de mejora.', 0),
  q('La equidad en la calidad pública implica:', 'Igualdad de trato conforme a derecho', ['Favoritismos', 'Atención solo a quien protesta más alto sin criterio', 'Excluir a colectivos vulnerables'], 'Principio de igualdad.', 0),
  q('La rendición de cuentas se refuerza cuando:', 'Hay indicadores y compromisos públicos', ['Todo es opaco', 'No hay cartas de servicios ni datos', 'Se prohibe informar'], 'Transparencia.', 0),
  q('Formar al personal que presta el servicio:', 'Es prevención de fallos y factor clave de calidad', ['Es irrelevante', 'Solo sirve en el sector privado', 'Sustituye a la legalidad'], 'Personas = calidad en servicios.', 0),
  q('La gestión de colas/capacidad en servicios aborda:', 'La perecibilidad y la demanda variable', ['Solo el diseño gráfico', 'La reforma constitucional', 'La acuñación de moneda'], 'Capacidad no almacenada.', 0),
  q('Un sistema de gestión de calidad en servicios debe:', 'Definir procesos, responsabilidades e indicadores', ['Eliminar responsabilidades', 'Prohibir la documentación útil', 'Ignorar entradas y salidas'], 'Enfoque sistemático.', 0),
  q('La heterogeneidad se mitiga con:', 'Procedimientos, formación y estándares', ['Improvisación total', 'Ocultar desviaciones', 'Eliminar supervisión'], 'Reducir variación indeseada.', 0),
  q('En AAPP, el “cliente” interno puede ser:', 'Otras unidades o empleados que reciben un servicio interno', ['Solo turistas extranjeros', 'El TC', 'Nunca existe'], 'Cliente interno.', 0),
  q('La calidad total en el sector público enfatiza:', 'Mejora de procesos y orientación a resultados para la ciudadanía', ['Solo recortar sin criterio', 'Eliminar controles legales', 'Sustituir la CE'], 'Enfoque integral.', 0),
  q('Una barrera cultural frecuente es:', 'Resistencia al cambio y miedo a la medición', ['El deseo de mejorar con datos', 'La transparencia', 'El liderazgo ejemplar'], 'Cambio organizacional.', 0),
  q('Definir el servicio esperado ayuda a:', 'Alinear estándares y comunicación al usuario', ['Generar ambigüedad', 'Impedir cartas de servicios', 'Eliminar reclamaciones sin causa'], 'Especificar el servicio.', 0),
  q('La evidencia del servicio (registros) sirve para:', 'Demostrar conformidad y aprender', ['Nunca auditar', 'Ocultar fallos', 'Sustituir la misión'], 'Trazabilidad.', 0),
  q('La satisfacción no es el único criterio en lo público porque:', 'También pesan legalidad, equidad e interés general', ['La ciudadanía no importa', 'No hay usuarios', 'Los indicadores están prohibidos'], 'Marco público.', 0),
  q('Implantar calidad sin procesos definidos suele producir:', 'Inconsistencia y dependencia de personas concretas', ['Excelencia automática', 'Certificación inmediata sin esfuerzo', 'Cero reclamaciones garantizadas'], 'Procesos primero.', 0),
  q('El factor “personas” en calidad de servicios es crítico porque:', 'Gran parte del valor se crea en la interacción', ['Los servicios no usan personas', 'Solo importan edificios', 'La tecnología elimina toda interacción siempre'], 'Momento de verdad.', 0),
  q('Una directriz diferencial frente a productos industriales es:', 'Gestionar la experiencia y la co-producción del usuario', ['Ignorar al usuario', 'Almacenar el servicio en silos físicos como tornillos', 'Eliminar feedback'], 'Servicios ≠ productos.', 0),
  q('El sector público añade complejidad por:', 'Mandato legal y pluralidad de objetivos', ['Carecer de usuarios', 'No tener normativa', 'No necesitar procesos'], 'Objetivos múltiples.', 0),
  q('Para aplicar un SGC a servicios conviene:', 'Traducir requisitos a procesos de prestación medibles', ['Copiar indicadores industriales sin adaptación', 'Eliminar al usuario del diseño', 'Prohibir reclamaciones'], 'Adaptación al servicio.', 0),
])

writeTema(4, [
  q('La misión expresa:', 'La razón de ser / propósito de la organización', ['Solo el presupuesto', 'El organigrama', 'El resultado de una auditoría'], 'Para qué existimos.', 0),
  q('La visión describe:', 'El futuro deseado', ['La nómina', 'Un contrato menor', 'Una sanción'], 'Hacia dónde vamos.', 0),
  q('Los valores son:', 'Principios que guían el comportamiento', ['Indicadores financieros solo', 'El precio público', 'Sanciones penales'], 'Cómo actuamos.', 0),
  q('Los objetivos estratégicos suelen ser:', 'De largo plazo y orientadores', ['Tareas diarias sin vínculo', 'Siempre secretos', 'Independientes de la misión'], 'Horizonte estratégico.', 0),
  q('Los objetivos operativos suelen ser:', 'Concretos, a corto plazo y medibles', ['Genéricos a 30 años', 'No asignables', 'Sin meta'], 'Despliegue operativo.', 0),
  q('SMART significa, en esencia:', 'Específico, Medible, Alcanzable, Relevante y Temporal', ['Solo secreto y ambiguo', 'Sin plazo', 'Sin responsable'], 'Criterios de buen objetivo.', 0),
  q('Un ciclo típico de planificación estratégica incluye:', 'Diagnóstico → formulación → despliegue → seguimiento', ['Solo contratar sin análisis', 'Eliminar indicadores', 'Planificar sin entorno'], 'Ciclo completo.', 0),
  q('El diagnóstico estratégico analiza:', 'Entorno e interior (p. ej. DAFO)', ['Solo el color corporativo', 'Únicamente rumores', 'Nada medible'], 'Base del plan.', 0),
  q('Desplegar la estrategia implica:', 'Traducirla en objetivos, planes e indicadores', ['Dejarla en un cajón', 'Ocultarla al personal', 'Eliminar responsables'], 'Cascada estratégica.', 0),
  q('El seguimiento estratégico sirve para:', 'Corregir desviaciones y aprender', ['Nunca revisar', 'Castigar sin datos', 'Congelar el plan aunque falle'], 'Control y aprendizaje.', 0),
  q('Alinear unidades con la estrategia evita:', 'Esfuerzos contradictorios', ['La coordinación', 'Los indicadores útiles', 'La comunicación'], 'Alineación.', 0),
  q('Un objetivo sin indicador:', 'Dificulta saber si se cumple', ['Se cumple siempre', 'No necesita plazo', 'Es preferible'], 'Lo que no se mide…', 0),
  q('La planificación operativa concreta:', 'Acciones, plazos y responsables del corto plazo', ['Solo la visión a 50 años', 'La reforma de la CE', 'La política monetaria'], 'Plan operativo.', 0),
  q('Participar al personal en la estrategia favorece:', 'Comprensión y compromiso', ['Sabotaje garantizado', 'Opacidad', 'Pérdida de misión'], 'Compromiso.', 0),
  q('Revisar la estrategia periódicamente es necesario porque:', 'El entorno cambia', ['Nunca cambia nada', 'Está prohibido', 'La visión es ilegal'], 'Adaptación.', 0),
  q('Mapear iniciativas a objetivos permite:', 'Priorizar proyectos según valor estratégico', ['Financiar todo sin criterio', 'Ignorar resultados', 'Eliminar el CMI'], 'Priorización.', 0),
  q('En AAPP, la estrategia debe respetar:', 'El marco legal y el mandato institucional', ['Solo el marketing', 'Intereses particulares ilegítimos', 'La eliminación de controles'], 'Límites públicos.', 0),
  q('La coherencia misión-visión-valores-objetivos evita:', 'Mensajes contradictorios', ['La claridad', 'La evaluación', 'El despliegue'], 'Coherencia.', 0),
  q('Un plan estratégico sin seguimiento es:', 'Papel sin gestión', ['Garantía de éxito', 'Una certificación ISO', 'Un presupuesto cerrado automáticamente'], 'Ejecución > documento.', 0),
  q('Los factores críticos de éxito ayudan a:', 'Enfocar capacidades en lo esencial', ['Dispersar esfuerzos al azar', 'Eliminar la misión', 'Ocultar riesgos'], 'FCE.', 0),
  q('Comunicar la estrategia a toda la organización:', 'Facilita el alineamiento', ['Es inútil', 'Está prohibido en AAPP', 'Sustituye al Pleno'], 'Comunicación.', 0),
  q('Los escenarios (optimista/pesimista) sirven para:', 'Anticipar riesgos y opciones', ['Eliminar el diagnóstico', 'Sustituir indicadores', 'Evitar decisiones'], 'Prospectiva.', 0),
  q('Vincular presupuesto a objetivos estratégicos favorece:', 'Asignar recursos a prioridades', ['Gastar sin rumbo', 'Ignorar resultados', 'Eliminar control'], 'Presupuesto alineado.', 0),
  q('Un objetivo operativo bien formulado incluye:', 'Meta, plazo y responsable', ['Solo adjetivos', 'Ninguna cifra', 'Ambigüedad total'], 'Formulación.', 0),
  q('La visión debe ser:', 'Ambiciosa pero creíble', ['Imposible e inútil', 'Secreta siempre', 'Igual a la nómina'], 'Visión útil.', 0),
  q('Separar estratégico y operativo evita:', 'Confundir el día a día con el rumbo', ['Toda planificación', 'Los indicadores', 'La mejora'], 'Niveles de gestión.', 0),
  q('El análisis de grupos de interés en la estrategia pública ayuda a:', 'Identificar expectativas legítimas', ['Ignorar a la ciudadanía', 'Eliminar transparencia', 'Sustituir la ley'], 'Stakeholders.', 0),
  q('Actualizar KPIs cuando cambia la estrategia:', 'Mantiene la relevancia del seguimiento', ['Es un error siempre', 'Está prohibido', 'Elimina el CMI'], 'KPIs vivos.', 0),
  q('La planificación estratégica NO sustituye:', 'El cumplimiento de la legalidad', ['La definición de misión', 'El seguimiento', 'Los valores'], 'Ley primero.', 0),
  q('Un riesgo de planes demasiado genéricos es:', 'No orientar la acción cotidiana', ['Demasiada claridad', 'Exceso de metas SMART', 'Sobremedición útil'], 'Vagueza.', 0),
  q('Integrar riesgos en la planificación:', 'Anticipa amenazas al logro de objetivos', ['Elimina la visión', 'Prohíbe indicadores', 'Sustituye la misión'], 'Gestión de riesgos.', 0),
  q('El “despliegue” en cascada significa:', 'Bajar objetivos del nivel estratégico al operativo/unidades', ['Subir solo quejas', 'Eliminar responsables', 'Ocultar la estrategia'], 'Cascada.', 0),
])

writeTema(5, [
  q('Las partes interesadas en una AAPP incluyen tipicamente:', 'Ciudadanía, usuarios, empleados, proveedores y órganos de control', ['Solo el equipo directivo', 'Únicamente proveedores', 'Solo medios'], 'Stakeholders públicos.', 0),
  q('Identificar necesidades se puede hacer con:', 'Encuestas, focus group y análisis de quejas', ['Ignorar reclamaciones', 'Cerrar canales', 'Medir solo absentismo'], 'Voz del ciudadano.', 0),
  q('Medir satisfacción sirve para:', 'Detectar brechas y orientar mejora', ['Sustituir la legalidad', 'Evitar control interno', 'Eliminar procesos'], 'Mejora basada en datos.', 0),
  q('Un mapa de stakeholders ayuda a:', 'Clasificar influencia e interés de los actores', ['Eliminar la participación', 'Ocultar expectativas', 'Sustituir el presupuesto'], 'Priorizar relaciones.', 0),
  q('Las quejas y sugerencias son:', 'Fuente de aprendizaje si se analizan', ['Ruido inútil siempre', 'Motivo para no medir', 'Sustituto de la estrategia'], 'Feedback.', 0),
  q('El “cliente interno” es:', 'Quien recibe un servicio de otra unidad de la misma organización', ['Solo un turista', 'El BOE', 'Un partido político'], 'Servicios internos.', 0),
  q('Segmentar usuarios permite:', 'Adaptar información y canales sin romper equidad legal', ['Discriminar ilegalmente', 'Eliminar estándares', 'Ignorar necesidades'], 'Segmentación legítima.', 0),
  q('Un indicador de experiencia puede ser:', 'Tiempo de espera percibido o facilidad del trámite', ['El color del sello solo', 'La hora del café', 'El número de plantas del edificio sin más'], 'Experiencia.', 0),
  q('La escucha activa institucional implica:', 'Recoger, analizar y responder sistemáticamente', ['Borrar quejas', 'No registrar', 'Responder al azar'], 'Sistema de voz del cliente.', 0),
  q('Expectativas no gestionadas suelen generar:', 'Insatisfacción aunque el proceso sea legal', ['Satisfacción automática', 'Certificación ISO', 'Cero reclamaciones'], 'Gestión de expectativas.', 0),
  q('Mystery shopping (cuando procede) sirve para:', 'Evaluar la experiencia real de atención', ['Reformar la CE', 'Nombrar cargos', 'Sustituir auditorías legales'], 'Observación encubierta ética/regulada.', 0),
  q('Un panel ciudadano puede aportar:', 'Percepciones cualitativas profundas', ['Solo datos de nómina', 'Sentencias penales', 'Tipos de interés'], 'Cualitativo.', 0),
  q('Priorizar necesidades debe considerar:', 'Impacto, frecuencia y mandato legal', ['Solo quien grita más', 'El azar', 'Ningún criterio'], 'Priorización.', 0),
  q('Comunicar cambios de servicio a usuarios:', 'Reduce incertidumbre y reclamaciones evitables', ['Es inútil', 'Está prohibido', 'Elimina la transparencia'], 'Comunicación.', 0),
  q('La accesibilidad (física/digital/lectora) afecta a:', 'La calidad percibida y el derecho a acceder', ['Solo la estética', 'Nada relevante', 'Únicamente al archivo'], 'Accesibilidad.', 0),
  q('Medir solo reclamaciones sin encuestas:', 'Da una visión parcial (sesgo de quien reclama)', ['Es suficiente siempre', 'Prohíbe mejorar', 'Sustituye procesos'], 'Sesgo.', 0),
  q('Cerrar el ciclo con el reclamante (feedback loop):', 'Aumenta confianza', ['Empeora siempre la imagen', 'Está prohibido', 'Elimina indicadores'], 'Respuesta al ciudadano.', 0),
  q('En lo público, satisfacer a un grupo no puede:', 'Vulnerar derechos de otros o la legalidad', ['Respetar la equidad', 'Mejorar procesos', 'Medir resultados'], 'Límite legal.', 0),
  q('Herramientas digitales de valoración (si se usan bien):', 'Amplían muestra y rapidez de escucha', ['Sustituyen siempre el derecho', 'Eliminan sesgos automáticamente', 'Prohíben el papel'], 'Canales digitales.', 0),
  q('El análisis de demanda ayuda a:', 'Dimensionar capacidad y horarios', ['Ignorar picos', 'Eliminar personal sin dato', 'Cerrar sin aviso'], 'Capacidad.', 0),
  q('Traducir necesidades a requisitos de proceso:', 'Conecta escucha con diseño del servicio', ['Rompe el SGC', 'Elimina indicadores', 'Impide el CMI'], 'VOC → requisitos.', 0),
  q('Un NPS adaptado mide, en esencia:', 'Recomendación/lealtad percibida', ['La inflación', 'El censo electoral', 'La temperatura'], 'Net Promoter (adaptado).', 0),
  q('Ignorar empleados como parte interesada:', 'Deteriora la calidad del servicio externo', ['Mejora siempre la atención', 'Es obligatorio', 'No tiene efectos'], 'Empleados = eslabón.', 0),
  q('Los proveedores influyen en la calidad cuando:', 'Sus entregas afectan al servicio final', ['Nunca', 'Solo en el sector privado', 'Está prohibido medirlos'], 'Cadena de valor.', 0),
  q('Órganos de control como parte interesada:', 'Marcan requisitos de legalidad y rendición de cuentas', ['No existen en AAPP', 'Solo hacen marketing', 'Sustituyen al usuario'], 'Control externo/interno.', 0),
  q('Una encuesta útil debe ser:', 'Clara, breve y accionable', ['Interminable y ambigua', 'Sin objetivo', 'Sin análisis posterior'], 'Diseño de encuesta.', 0),
  q('Triangular fuentes (encuesta + quejas + datos de proceso):', 'Da una imagen más fiable', ['Confunde siempre', 'Está prohibido', 'Elimina la mejora'], 'Triangulación.', 0),
  q('Publicar resultados de satisfacción:', 'Refuerza transparencia y compromiso de mejora', ['Es siempre ilegal', 'Elimina la Carta de Servicios', 'Impide el aprendizaje'], 'Transparencia.', 0),
  q('La “experiencia de usuario” en trámites incluye:', 'Comprensión, esfuerzo, tiempo y trato', ['Solo el membrete', 'Únicamente el escudo', 'Nada medible'], 'UX administrativa.', 0),
  q('No actuar tras medir satisfacción provoca:', 'Cinismo y pérdida de credibilidad', ['Mejora automática', 'Más confianza', 'Certificación'], 'Medir + actuar.', 0),
  q('Identificar no-usuarios (quien no accede) sirve para:', 'Detectar barreras de acceso', ['Ignorar equidad', 'Reducir transparencia', 'Eliminar canales'], 'Inclusión.', 0),
  q('En calidad pública, “expectativas” deben contrastarse con:', 'Lo que el servicio puede y debe ofrecer legalmente', ['Promesas imposibles', 'Silencio institucional', 'Azar'], 'Gestión realista.', 0),
])

console.log('temas 3-5 ok')

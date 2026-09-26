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

function q(stem, correctText, wrongs, explanation, correctIndex = 0) {
  const options = ['', '', '', '']
  options[correctIndex] = correctText
  let wi = 0
  for (let i = 0; i < 4; i++) {
    if (i === correctIndex) continue
    options[i] = wrongs[wi++]
  }
  return { stem, options, correct: correctIndex, explanation }
}

writeTema(6, [
  q('Un proceso es:', 'Conjunto de actividades interrelacionadas que transforman entradas en salidas', ['Un departamento del organigrama', 'Una norma ISO completa', 'Un indicador aislado'], 'Definición clásica.', 0),
  q('Los procesos se clasifican habitualmente en:', 'Estratégicos, operativos/clave y de soporte', ['Solo judiciales', 'Solo informáticos', 'Públicos y secretos'], 'Mapa típico.', 0),
  q('El mapa de procesos sirve para:', 'Representar visualmente procesos e interrelaciones', ['Sustituir el presupuesto', 'Eliminar indicadores', 'Nombrar al Presidente'], 'Visión de conjunto.', 0),
  q('El dueño de proceso es responsable de:', 'Desempeño y mejora del proceso', ['Solo fichar', 'Política exterior', 'Ninguna medición'], 'Process owner.', 0),
  q('Un indicador de proceso debe ser:', 'Relevante, medible y con meta/estándar', ['Vago', 'Secreto a la dirección', 'Desconectado de objetivos'], 'KPI útil.', 0),
  q('SIPOC resume:', 'Proveedores, Entradas, Proceso, Salidas, Clientes', ['Solo sanciones', 'Solo nóminas', 'Solo el escudo'], 'Herramienta de alcance.', 0),
  q('Documentar un proceso ayuda a:', 'Estandarizar y formar', ['Ocultar el trabajo', 'Eliminar evidencias', 'Impedir auditorías'], 'Estandarización.', 0),
  q('Los procesos estratégicos orientan:', 'Dirección y despliegue de la estrategia', ['Solo limpieza', 'Solo archivo pasivo', 'Nada relevante'], 'Nivel estratégico.', 0),
  q('Los procesos de soporte:', 'Dan apoyo a los procesos clave (RRHH, TIC, compras…)', ['Crean el valor principal del ciudadano siempre', 'Sustituyen la misión', 'Eliminan lo operativo'], 'Soporte.', 0),
  q('Desplegar un proceso incluye:', 'Definir actividades, roles, indicadores y riesgos', ['Improvisar sin roles', 'Eliminar salidas', 'Prohibir medición'], 'Despliegue.', 0),
  q('Un estándar de proceso es:', 'Nivel de referencia de desempeño esperado', ['Un rumor', 'Una sanción penal', 'Un partido político'], 'Estándar.', 0),
  q('Gestionar por procesos frente a silos busca:', 'Flujo de valor de extremo a extremo', ['Más barreras entre unidades', 'Opacidad', 'Duplicar fallos'], 'End-to-end.', 0),
  q('La ficha de proceso suele incluir:', 'Objeto, alcance, responsable, indicadores', ['Solo el logo', 'Datos personales irrelevantes', 'Nada operativo'], 'Ficha.', 0),
  q('Entradas de un proceso pueden ser:', 'Información, solicitudes, recursos', ['Solo el resultado final', 'Únicamente sanciones', 'Nada tangible o intangible'], 'Inputs.', 0),
  q('Salidas de un proceso deben:', 'Cumplir requisitos del cliente/siguiente proceso', ['Ser ilegibles', 'Ignorar requisitos', 'No medirse nunca'], 'Outputs conformes.', 0),
  q('Interrelacionar procesos implica:', 'Gestionar interfaces y handoffs', ['Aislar unidades para siempre', 'Prohibir comunicación', 'Eliminar el mapa'], 'Interfaces.', 0),
  q('Un proceso clave en una Diputación podría ser:', 'Un servicio de asistencia a municipios', ['La política monetaria europea', 'La defensa nacional', 'La acuñación'], 'Ejemplo provincial.', 0),
  q('Sin dueño de proceso suele ocurrir:', 'Nadie se responsabiliza del resultado global', ['Mejora automática', 'Cero fallos', 'Certificación inmediata'], 'Accountability.', 0),
  q('Los indicadores adelantados (leading) miden:', 'Condiciones que predicen resultados', ['Solo el pasado lejano irrelevante', 'Nada útil', 'Únicamente sanciones'], 'Leading vs lagging.', 0),
  q('Los indicadores atrasados (lagging) miden:', 'Resultados ya ocurridos', ['Solo predicciones', 'El clima laboral futuro exclusivo', 'Nada'], 'Lagging.', 0),
  q('Riesgos del proceso se gestionan para:', 'Prevenir fallos e incumplimientos', ['Aumentar variabilidad', 'Ocultar causas', 'Eliminar controles'], 'Riesgo.', 0),
  q('Mejorar un proceso requiere:', 'Datos, análisis y acciones verificadas', ['Opinión sin evidencia siempre', 'Borrar indicadores', 'Ignorar al dueño'], 'Mejora basada en hechos.', 0),
  q('El enfoque a procesos es central en:', 'ISO 9001 y modelos de excelencia', ['Solo en publicidad', 'Nunca en calidad', 'Únicamente derecho penal'], 'SGC.', 0),
  q('Un flujograma representa:', 'La secuencia de actividades', ['El BOE completo', 'La CE íntegra', 'Un balance contable solo'], 'Flujo.', 0),
  q('Medir el tiempo de ciclo sirve para:', 'Conocer duración del proceso extremo a extremo', ['Reformar la Corona', 'Elegir diputados', 'Fijar el IPC'], 'Lead time.', 0),
  q('Retrabajos indican:', 'Fallos de calidad en el proceso', ['Excelencia', 'Capacidad perfecta', 'Cero variabilidad'], 'Rework.', 0),
  q('Externalizar parte del proceso exige:', 'Control de proveedores y requisitos claros', ['Abandonar toda vigilancia', 'Eliminar indicadores', 'No definir salidas'], 'Compras/proveedores.', 0),
  q('La gestión por procesos NO elimina:', 'La necesidad de cumplir la legalidad', ['Los indicadores', 'Al dueño', 'El mapa'], 'Cumplimiento.', 0),
  q('Estandarizar no significa:', 'Impedir toda mejora', ['Documentar lo acordado', 'Formar al personal', 'Medir conformidad'], 'Estándar vivo.', 0),
  q('Un buen mapa de procesos distingue:', 'Qué crea valor y qué es apoyo', ['Solo nombres de personas', 'Únicamente fechas de vacaciones', 'Nada estructural'], 'Claridad.', 0),
  q('La interacción entre procesos se gestiona mediante:', 'Acuerdos de nivel de servicio internos / requisitos de interfaz', ['Silencio', 'Culpar siempre a otro', 'Eliminar reuniones de coordinación útiles'], 'SLA interno.', 0),
  q('Actualizar el mapa cuando cambian servicios:', 'Mantiene la utilidad del SGC', ['Está prohibido', 'Elimina ISO', 'Impide auditar'], 'Mapa vivo.', 0),
])

writeTema(7, [
  q('La capacidad de un proceso es:', 'Su aptitud para cumplir especificaciones', ['El nº de empleados solo', 'La superficie de oficinas', 'El presupuesto de marketing'], 'Capacidad.', 0),
  q('Un proceso bajo control implica:', 'Variación solo por causas comunes', ['Cero variación absoluta', 'Certificación automática', 'Sin indicadores'], 'Control estadístico.', 0),
  q('Las causas especiales:', 'Indican descontrol y requieren investigación', ['Son irrelevantes', 'Siempre deben ignorarse', 'Mejoran solas'], 'Causas especiales.', 0),
  q('Reducir variabilidad busca:', 'Mayor predicibilidad y calidad', ['Más caos', 'Más fallos externos', 'Eliminar mejora'], 'Variabilidad.', 0),
  q('PDCA significa:', 'Planificar, Hacer, Verificar, Actuar', ['Pagar, Devolver, Cobrar, Archivar', 'Prohibir datos', 'Nada en calidad'], 'Ciclo Deming.', 0),
  q('Evaluar un proceso incluye:', 'Comparar indicadores con estándares', ['Nunca medir', 'Ocultar desviaciones', 'Eliminar metas'], 'Evaluación.', 0),
  q('Un gráfico de control ayuda a:', 'Ver si el proceso es estable', ['Nombrar cargos', 'Redactar leyes', 'Sustituir la misión'], 'SPC básico.', 0),
  q('La mejora puede ser:', 'Incremental o de rediseño', ['Solo castigo', 'Solo archivo', 'Prohibida en AAPP'], 'Tipos de mejora.', 0),
  q('Capacidad insuficiente respecto a especificación implica:', 'Más defectos/incumplimientos', ['Calidad perfecta', 'Cero quejas garantizadas', 'No hacer nada'], 'Capacidad vs spec.', 0),
  q('Analizar causas antes de actuar evita:', 'Síntomas tratados sin resolver el problema', ['El PDCA', 'Los datos', 'Ishikawa'], 'Root cause.', 0),
  q('Un proceso estable pero incapaz:', 'Está bajo control pero no cumple requisitos', ['Es ideal', 'No necesita mejora', 'Está certificado por definición'], 'Estable ≠ capaz.', 0),
  q('La mejora continua se basa en:', 'Pequeños ciclos reiterados de aprendizaje', ['Congelar todo', 'Un único cambio eterno', 'Ignorar resultados'], 'Kaizen/mejora.', 0),
  q('Estratificar datos sirve para:', 'Ver patrones por segmentos', ['Mezclar causas', 'Ocultar variación', 'Eliminar Pareto'], 'Estratificación.', 0),
  q('Verificar tras una acción de mejora confirma:', 'Si el cambio funcionó', ['Nada', 'Solo la culpa', 'La eliminación del indicador'], 'Check del PDCA.', 0),
  q('Actuar (Act) en PDCA implica:', 'Estandarizar lo que funciona o corregir', ['Borrar evidencias', 'Abandonar el ciclo', 'Prohibir formación'], 'Act.', 0),
  q('La variabilidad común es:', 'Inherente al sistema actual', ['Siempre un sabotaje individual aislado sin sistema', 'Imposible de reducir nunca', 'Irrelevante'], 'Causas comunes.', 0),
  q('Tratar causas comunes como especiales suele:', 'Generar sobreajuste y desperdicio', ['Mejorar siempre', 'Eliminar el proceso', 'Certificar ISO'], 'Error de gestión.', 0),
  q('Un límite de especificación lo fija:', 'El requisito del cliente/norma/servicio', ['El azar', 'Un rumor', 'La temperatura ambiente sola'], 'Spec limits.', 0),
  q('Reducir defectos de forma sostenible exige:', 'Cambiar el sistema/proceso', ['Solo exhortar sin medios', 'Ocultar datos', 'Culpar sin análisis'], 'Sistema.', 0),
  q('La evaluación de procesos alimenta:', 'El CMI, auditorías y planes de mejora', ['Nada', 'Solo marketing vacío', 'La reforma constitucional'], 'Uso de la evaluación.', 0),
  q('Un pico súbito en un indicador puede ser:', 'Señal de causa especial', ['Prueba de estabilidad', 'Motivo para no investigar', 'Irrelevante siempre'], 'Señal.', 0),
  q('Documentar lecciones aprendidas:', 'Evita repetir fallos', ['Empeora la capacidad', 'Está prohibido', 'Elimina PDCA'], 'Aprendizaje.', 0),
  q('Comparar antes/después de una mejora:', 'Cuantifica el impacto', ['No aporta', 'Es ilegal', 'Sustituye la legalidad'], 'Impacto.', 0),
  q('La “capacidad de proceso” no es lo mismo que:', 'La ocupación de agendas personales sola', ['Cumplir specs', 'Producir conforme', 'Medir aptitud'], 'No confundir conceptos.', 0),
  q('Un plan de mejora debe incluir:', 'Acciones, responsables, plazos y métrica de éxito', ['Solo deseos', 'Ningún responsable', 'Sin verificación'], 'Plan.', 0),
  q('La estabilidad del proceso facilita:', 'Predecir y planificar', ['El caos', 'Más causas especiales deseadas', 'Abandonar indicadores'], 'Predictibilidad.', 0),
  q('Ignorar la voz del proceso (datos) lleva a:', 'Decisiones basadas en sesgos', ['Mejor capacidad', 'Menos fallos automáticamente', 'Control perfecto'], 'Datos.', 0),
  q('Rehacer el diseño del proceso (reingeniería) procede cuando:', 'La mejora incremental no basta', ['Todo va perfecto', 'No hay problema', 'Solo por moda'], 'Rediseño.', 0),
  q('El control de proceso busca:', 'Detectar a tiempo desviaciones relevantes', ['Ocultarlas', 'Eliminar medición', 'Improvisar sanciones al azar'], 'Control.', 0),
  q('Formar en método de mejora (PDCA, 5P, etc.):', 'Aumenta autonomía para resolver problemas', ['Es inútil', 'Solo sirve en fábricas privadas', 'Prohíbe datos'], 'Competencia metodológica.', 0),
  q('Un indicador fuera de estándar de forma reiterada:', 'Exige acción correctiva/preventiva', ['Debe ignorarse', 'Demuestra excelencia', 'Cierra el SGC'], 'Acción.', 0),
  q('La mejora de procesos en AAPP debe respetar:', 'Legalidad y equidad además del desempeño', ['Solo velocidad ilegal', 'Favoritismos', 'Opacidad'], 'Marco público.', 0),
])

writeTema(8, [
  q('Los costes de prevención buscan:', 'Evitar que ocurran fallos', ['Reparar reclamaciones ya ocurridas', 'Solo pagar sanciones', 'Inspeccionar el 100% sin más'], 'Prevención.', 0),
  q('Los costes de detección/evaluación son:', 'Inspección, ensayos, auditorías de verificación', ['Solo publicidad', 'Solo indemnizaciones', 'La misión'], 'Evaluación.', 0),
  q('Los fallos internos se detectan:', 'Antes de llegar al usuario/ciudadano', ['Solo tras la reclamación externa', 'Nunca', 'Solo en tribunales'], 'Internos.', 0),
  q('Los fallos externos incluyen:', 'Reclamaciones, indemnizaciones, pérdida de confianza', ['Formación preventiva', 'Diseño del proceso', 'Calibración preventiva'], 'Externos.', 0),
  q('Invertir en prevención suele:', 'Reducir a medio plazo los costes de fallos', ['Maximizar fallos externos', 'Eliminar todo valor', 'Solo aumentar caos'], 'Trade-off.', 0),
  q('Clasificar costes de calidad permite:', 'Priorizar acciones de mejora', ['Ignorar el dinero', 'Ocultar fallos', 'Eliminar indicadores'], 'Estructura de costes.', 0),
  q('El retrabajo es tipicamente:', 'Coste de fallo interno', ['Coste de prevención', 'Ingreso', 'Visión estratégica'], 'Retrabajo.', 0),
  q('Una campaña de formación en calidad es:', 'Coste de prevención', ['Fallo externo', 'Sanción', 'Nada relacionado'], 'Formación.', 0),
  q('Una auditoría interna de conformidad es, en gran medida:', 'Coste de evaluación/detección', ['Fallo externo puro', 'Indemnización', 'Publicidad engañosa'], 'Auditoría.', 0),
  q('Pagar una indemnización por servicio deficiente es:', 'Coste de fallo externo', ['Prevención', 'Misión', 'Valor'], 'Indemnización.', 0),
  q('Medir costes de mala calidad ayuda a:', 'Argumentar inversiones en mejora', ['Prohibir el SGC', 'Eliminar datos', 'Castigar sin causa'], 'COPQ.', 0),
  q('No medir costes de fallos provoca:', 'Subestimar el problema', ['Excelencia automática', 'Cero reclamaciones', 'Certificación'], 'Ceguera de costes.', 0),
  q('La prevención incluye también:', 'Diseño robusto y estandarización', ['Solo pagar multas', 'Solo disculpas públicas', 'Ignorar causas'], 'Diseño.', 0),
  q('Un exceso de inspección sin prevención puede:', 'Ser costoso y no eliminar la causa raíz', ['Sustituir siempre la prevención con éxito total', 'Eliminar variabilidad mágicamente', 'Ser ilegal siempre'], 'Inspección ≠ prevención.', 0),
  q('La estructura de costes tipica distingue:', 'Prevención, evaluación, fallos internos y externos', ['Solo CAPEX', 'Solo impuestos', 'Solo sueldos políticos'], 'P-A-F.', 0),
  q('Reducir fallos externos mejora:', 'Reputación y confianza ciudadana', ['La opacidad', 'El descontrol', 'La ilegalidad'], 'Impacto externo.', 0),
  q('Un coste de oportunidad por reproceso es:', 'Parte del coste de no calidad', ['Un ingreso', 'Prevención pura', 'Irrelevante siempre'], 'Oportunidad.', 0),
  q('Calibrar equipos de medida es:', 'Más cercano a evaluación/prevención de errores de medición', ['Fallo externo', 'Indemnización', 'Sanción penal'], 'Metrología.', 0),
  q('Priorizar por coste e impacto usa a menudo:', 'Pareto de problemas caros/frecuentes', ['Azar', 'Silencio', 'Eliminar datos'], 'Priorización.', 0),
  q('La “calidad barata” sin prevención suele:', 'Salir cara por fallos', ['Ser óptima siempre', 'Eliminar externos', 'Garantizar ISO'], 'Barato sale caro.', 0),
  q('Registrar no conformidades permite:', 'Cuantificar fallos internos', ['Ocultarlos', 'Prohibir mejora', 'Eliminar Poka-yoke'], 'NC.', 0),
  q('Un poka-yoke es:', 'Dispositivo/método a prueba de errores (prevención)', ['Una multa', 'Una queja', 'Un organigrama'], 'A prueba de errores.', 0),
  q('Comunicar costes de calidad a dirección:', 'Facilita decisiones de inversión', ['Es inútil', 'Está prohibido', 'Elimina el CMI'], 'Lenguaje directivo.', 0),
  q('Garantías y devoluciones asimiladas en servicios equivalen a:', 'Costes de fallo (a menudo externo)', ['Misión', 'Visión', 'Valor ético puro sin coste'], 'Post-servicio.', 0),
  q('Equilibrar prevención y evaluación busca:', 'Nivel óptimo de coste total de calidad', ['Maximizar fallos', 'Cero medición', 'Inspección infinita sin sentido'], 'Óptimo.', 0),
  q('Un fallo que llega al BOE/prensa es:', 'Fallo externo con alto impacto reputacional', ['Prevención', 'Éxito de calidad', 'Irrelevante'], 'Reputación.', 0),
  q('La prevención en AAPP también incluye:', 'Claridad normativa interna y formación legal del trámite', ['Ocultar plazos', 'Eliminar información al ciudadano', 'Improvisar requisitos'], 'Prevención pública.', 0),
  q('No diferenciar internos/externos impide:', 'Ver dónde duele más la cadena', ['Toda contabilidad', 'El organigrama', 'La CE'], 'Clasificar.', 0),
  q('El coste de formación de un auditor interno es:', 'Principalmente prevención/evaluación según enfoque', ['Fallo externo puro', 'Sanción', 'Indemnización al usuario'], 'Matiz P/E.', 0),
  q('Reducir costes de fallos sin destruir valor exige:', 'Mejorar procesos, no solo recortar controles útiles', ['Eliminar toda inspección a ciegas', 'Prohibir datos', 'Ignorar al usuario'], 'Recortes inteligentes.', 0),
  q('La dirección debería ver los costes de calidad como:', 'Información de gestión', ['Castigo personal exclusivo', 'Dato secreto inútil', 'Sustituto de la ética'], 'Gestión.', 0),
  q('Un sistema que solo mide fallos externos:', 'Detecta tarde el problema', ['Es el más preventivo', 'Elimina internos', 'Basta siempre'], 'Detección tardía.', 0),
])

writeTema(9, [
  q('El CMI/BSC fue popularizado por:', 'Kaplan y Norton', ['Deming solo', 'Taylor y Fayol', 'ISO exclusivamente'], 'Autores.', 0),
  q('Las cuatro perspectivas clásicas son:', 'Financiera, clientes, procesos internos, aprendizaje y crecimiento', ['Solo legal y penal', 'Marketing y almacén solo', 'Auditoría y nómina solo'], '4 perspectivas.', 0),
  q('En AAPP el CMI se adapta hacia:', 'Ciudadanía/resultados, procesos, personas/recursos', ['Eliminar indicadores', 'Solo redes sociales', 'La Corona'], 'Adaptación pública.', 0),
  q('El CMI traduce la estrategia en:', 'Indicadores, metas e iniciativas', ['Solo eslóganes', 'Órdenes sin medida', 'Archivo muerto'], 'Traducción.', 0),
  q('Un mapa estratégico muestra:', 'Relaciones causa-efecto entre objetivos', ['Solo el parking', 'La lista de personal sin más', 'El menú del comedor'], 'Mapa.', 0),
  q('La perspectiva de aprendizaje y crecimiento cubre:', 'Personas, sistemas y clima/capacidades', ['Solo el beneficio a corto', 'Solo multas', 'Solo el edificio'], 'Intangibles.', 0),
  q('La perspectiva de procesos internos mira:', 'Qué procesos críticos crean valor', ['Solo la cuenta de Twitter', 'Solo el pasado geológico', 'Nada operativo'], 'Procesos.', 0),
  q('Sin metas en el CMI:', 'Los indicadores no orientan', ['Sobran los datos', 'Hay excelencia automática', 'No hace falta estrategia'], 'Metas.', 0),
  q('Iniciativas en el CMI son:', 'Proyectos para cerrar brechas de desempeño', ['Sanciones', 'Leyes orgánicas', 'Partidos'], 'Iniciativas.', 0),
  q('Equilibrar perspectivas evita:', 'Optimizar una dimensión destruyendo otra', ['Toda medición', 'La estrategia', 'El aprendizaje'], 'Balance.', 0),
  q('Un indicador de ciudadanía en Diputación podría ser:', '% de municipios satisfechos con un servicio de apoyo', ['El Euribor', 'La prima de riesgo solo', 'El IBEX'], 'Ejemplo.', 0),
  q('Revisar el CMI periódicamente:', 'Mantiene alineación con la estrategia viva', ['Está prohibido', 'Elimina el valor', 'Congela errores'], 'Revisión.', 0),
  q('El CMI no sustituye:', 'El presupuesto ni la legalidad', ['Los indicadores', 'Las metas', 'El mapa'], 'Límites.', 0),
  q('Cascadar el CMI a unidades:', 'Alinea equipos con la estrategia', ['Genera caos siempre', 'Está prohibido', 'Elimina dueños de proceso'], 'Despliegue.', 0),
  q('Demasiados indicadores provocan:', 'Dispersión y pérdida de foco', ['Claridad máxima', 'Mejor siempre', 'Cero coste'], 'Sobreindicación.', 0),
  q('Pocos indicadores clave favorecen:', 'Atención directiva efectiva', ['Ceguera total', 'Azar', 'Opacidad'], 'Foco.', 0),
  q('La perspectiva financiera en lo público puede reinterpretarse como:', 'Uso eficiente y sostenible de recursos', ['Beneficio de accionistas privados', 'Especulación', 'Eliminación de controles'], 'Finanzas públicas.', 0),
  q('Coherencia vertical del CMI significa:', 'Objetivos de unidades contribuyen a los estratégicos', ['Cada uno a lo suyo sin nexo', 'Indicadores contradictorios deseados', 'Silencio'], 'Alineación vertical.', 0),
  q('El CMI se alimenta de:', 'Datos de procesos, encuestas y resultados', ['Solo rumores', 'Solo intuición', 'Nada empírico'], 'Datos.', 0),
  q('Usar el CMI solo como cuadro de reporting sin gestión:', 'Desperdicia su potencial', ['Es el uso ideal', 'Certifica ISO solo', 'Sustituye CAF'], 'Gestión vs reporting.', 0),
  q('Relacionar formación (aprendizaje) con mejores procesos:', 'Es lógica causa-efecto del mapa', ['No tiene sentido', 'Está prohibido', 'Elimina clientes'], 'Cadena estratégica.', 0),
  q('Un tablero CMI efectivo es:', 'Actualizado, visible y discutido', ['Secreto y obsoleto', 'Sin dueño', 'Sin metas'], 'Uso.', 0),
  q('El CMI complementa:', 'Plan estratégico y DPO', ['La eliminación de objetivos', 'La opacidad', 'El azar'], 'Integración.', 0),
  q('Indicadores de proceso vs resultado:', 'Conviene combinar ambos', ['Solo resultados lejanos', 'Solo vanidad', 'Ninguno'], 'Mix.', 0),
  q('El origen del BSC está en:', 'La necesidad de no gestionar solo con lo financiero', ['La CE de 1978', 'La LBRL', 'ENAC'], 'Motivación BSC.', 0),
  q('Asignar dueño a cada objetivo/indicador:', 'Clarifica responsabilidad', ['Crea ambigüedad', 'Está prohibido', 'Elimina el CMI'], 'Ownership.', 0),
  q('Semáforos (rojo/ámbar/verde) en CMI sirven para:', 'Visualizar desviaciones rápidamente', ['Ocultar datos', 'Sustituir análisis', 'Eliminar metas'], 'Visual management.', 0),
  q('Incluir riesgos estratégicos en el debate del CMI:', 'Anticipa amenazas al plan', ['Es irrelevante', 'Prohibido', 'Elimina iniciativas'], 'Riesgo.', 0),
  q('Un CMI municipal/provincial debe reflejar:', 'Mandato de servicio público', ['Solo lucro privado', 'Intereses opacos', 'Nada ciudadano'], 'Mandato.', 0),
  q('La perspectiva clientes en AAPP se orienta a:', 'Ciudadanía/usuarios y otras AAPP receptoras', ['Solo proveedores ilegales', 'Solo mercados bursátiles', 'Nadie'], 'Clientes públicos.', 0),
  q('Actualizar iniciativas cuando cambian prioridades:', 'Mantiene la relevancia del CMI', ['Rompe siempre la estrategia útil', 'Está prohibido', 'Elimina KPIs buenos'], 'Agilidad.', 0),
  q('El CMI es principalmente:', 'Un sistema de gestión estratégica', ['Una ley orgánica', 'Un impuesto', 'Un certificado obligatorio universal'], 'Naturaleza.', 0),
])

writeTema(10, [
  q('La DPO se basa en:', 'Objetivos acordados, seguimiento y evaluación', ['Órdenes sin metas', 'Eliminar evaluación', 'Solo intuición'], 'Esencia DPO.', 0),
  q('Un beneficio típico de la DPO es:', 'Mayor foco y alineación', ['Más ambigüedad', 'Imposibilidad de medir', 'Suprimir comunicación'], 'Beneficio.', 0),
  q('Un riesgo de mala DPO es:', 'Objetivos cortoplacistas que distorsionan conductas', ['Demasiada claridad útil', 'Feedback excesivo bueno', 'Participación sana'], 'Riesgo.', 0),
  q('Pilares de la DPO incluyen:', 'Claridad, medición, feedback y alineación', ['Opacidad', 'Metas imposibles secretas', 'Castigo sin criterio'], 'Pilares.', 0),
  q('Acordar objetivos con el personal favorece:', 'Compromiso y comprensión', ['Rechazo garantizado siempre', 'Sabotaje inevitable', 'Ilegalidad'], 'Participación.', 0),
  q('Evaluar el logro de objetivos permite:', 'Gestión del desempeño más objetiva', ['Azar total', 'Favoritismos sin dato', 'Eliminar mejora'], 'Evaluación.', 0),
  q('Metodología de implantación suele incluir:', 'Difusión, formación, definición, seguimiento y revisión', ['Improvisar sin fases', 'Ocultar metas', 'Prohibir indicadores'], 'Implantación.', 0),
  q('Los objetivos DPO deben enlazar con:', 'La estrategia / CMI', ['Nada externo', 'Solo rumores', 'Intereses ilegítimos'], 'Alineación.', 0),
  q('Feedback periódico evita:', 'Sorpresas a fin de año', ['Toda mejora', 'La claridad', 'El aprendizaje'], 'Feedback.', 0),
  q('Objetivos demasiado numerosos provocan:', 'Pérdida de priorización', ['Foco perfecto', 'Mejor DPO', 'Cero estrés siempre'], 'Exceso.', 0),
  q('Objetivos no medibles dificultan:', 'La evaluación justa', ['La ambigüedad deseada', 'El azar útil', 'La opacidad buena'], 'Medibilidad.', 0),
  q('La DPO no debe:', 'Empujar a incumplir la legalidad para “cumplir el número”', ['Respetar la ética', 'Alinear equipos', 'Medir resultados'], 'Límite ético/legal.', 0),
  q('Cascada de objetivos significa:', 'Desglosar metas de dirección a unidades/personas', ['Subir solo quejas', 'Eliminar responsables', 'Ocultar resultados'], 'Cascada.', 0),
  q('Revisar objetivos ante cambios de contexto:', 'Mantiene realismo', ['Está prohibido', 'Rompe toda DPO útil', 'Elimina la estrategia'], 'Revisión.', 0),
  q('Vincular DPO solo a castigo:', 'Genera miedo y distorsión', ['Motiva sanamente siempre', 'Es el ideal', 'Mejora la ética'], 'Uso punitivo.', 0),
  q('Reconocer logros en DPO:', 'Refuerza conductas deseadas', ['Empeora el clima siempre', 'Está prohibido', 'Elimina indicadores'], 'Reconocimiento.', 0),
  q('Objetivos individuales vs de equipo:', 'Conviene equilibrarlos para no romper colaboración', ['Solo individuales extremos', 'Solo equipo sin aporte personal', 'Ninguno'], 'Equilibrio.', 0),
  q('La DPO en AAPP debe contemplar:', 'Resultados de servicio y cumplimiento normativo', ['Solo ventas', 'Solo likes', 'Nada público'], 'Contexto público.', 0),
  q('Formar a mandos en DPO es:', 'Crítico para una implantación seria', ['Inútil', 'Opcional sin efecto', 'Prohibido'], 'Capacitación.', 0),
  q('Documentar acuerdos de objetivos:', 'Da trazabilidad y claridad', ['Crea confusión siempre', 'Es ilegal', 'Elimina feedback'], 'Registro.', 0),
  q('Indicadores de la DPO deberían ser:', 'Pocos, relevantes y comprensibles', ['Cientos ilegibles', 'Secretos contradictorios', 'Aleatorios'], 'Diseño.', 0),
  q('La DPO complementa la gestión por procesos cuando:', 'Los objetivos se anclan a resultados de proceso', ['Se ignoran los procesos', 'Se eliminan dueños', 'Se prohíben datos'], 'Integración.', 0),
  q('Un ciclo anual típico de DPO incluye:', 'Planificación, seguimiento, evaluación y nuevo ciclo', ['Una charla única', 'Nada medible', 'Solo sanción'], 'Ciclo.', 0),
  q('Objetivos impuestos sin diálogo suelen:', 'Reducir compromiso', ['Aumentar ownership', 'Mejorar ética', 'Clarificar todo'], 'Imposición.', 0),
  q('La dirección por objetivos NO elimina:', 'La necesidad de liderazgo cotidiano', ['Las metas', 'El seguimiento', 'La evaluación'], 'Liderazgo.', 0),
  q('Alinear incentivos con objetivos públicos delicados exige:', 'Cuidado para no generar efectos perversos', ['Maximizar distorsión', 'Ignorar ética', 'Ocultar metas'], 'Incentivos.', 0),
  q('Transparencia sobre criterios de evaluación:', 'Aumenta percepción de justicia', ['Genera miedo útil siempre', 'Está prohibida', 'Elimina DPO'], 'Justicia procedimental.', 0),
  q('Incluir objetivos de mejora (no solo de mantenimiento):', 'Impulsa progreso', ['Congela la organización', 'Prohíbe innovación', 'Elimina PDCA'], 'Mejora.', 0),
  q('La DPO fracasa si:', 'No hay datos fiables ni seguimiento', ['Hay claridad', 'Hay feedback', 'Hay alineación'], 'Condiciones de fracaso.', 0),
  q('Comunicar el “para qué” de cada objetivo:', 'Da sentido al esfuerzo', ['Es inútil', 'Confunde siempre', 'Está prohibido'], 'Propósito.', 0),
  q('En oposiciones de calidad, la DPO se relaciona con:', 'Pilares, beneficios y metodología de implantación del temario', ['Solo la Corona', 'Solo el art. 168 CE', 'ENAC exclusivamente'], 'Encaje temario.', 0),
  q('Un objetivo SMART en DPO incluye plazo porque:', 'Permite verificar cumplimiento temporal', ['Los plazos sobran', 'Nunca hay fechas en gestión', 'Prohíbe evaluar'], 'Temporalidad.', 0),
])

console.log('6-10 ok')

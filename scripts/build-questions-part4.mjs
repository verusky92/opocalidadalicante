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

writeTema(11, [
  q('Una auditoría interna la realiza:', 'La propia organización sobre su sistema', ['Solo la policía', 'Siempre un certificador obligatorio', 'El Pleno sustituyendo al SGC'], 'Primera parte.', 0),
  q('ISO 19011 proporciona:', 'Directrices para auditar sistemas de gestión', ['Requisitos certificables de SGC', 'El texto de la CE', 'Un modelo electoral'], '19011 = guidelines.', 0),
  q('Un principio de ISO 19011 es:', 'La confidencialidad', ['Auditar sin evidencias', 'Publicar datos personales sin base', 'Dependencia total del auditado para el resultado'], 'Principios.', 0),
  q('Las conclusiones deben basarse en:', 'Evidencias objetivas', ['Rumores', 'Opiniones sin soporte', 'Resultados electorales'], 'Evidencia.', 0),
  q('Auditoría de tercera parte:', 'La realiza un organismo independiente', ['La hace el propio proceso auditado en exclusiva', 'Es siempre ilegal', 'Sustituye al BOE'], 'Tercera parte.', 0),
  q('Auditoría de segunda parte:', 'La realiza una parte interesada externa (p. ej. cliente sobre proveedor)', ['Solo ENAC', 'Solo el Rey', 'No existe'], 'Segunda parte.', 0),
  q('El programa de auditoría planifica:', 'Qué auditorías, cuándo y con qué recursos', ['Solo vacaciones', 'La reforma CE', 'El IPC'], 'Programa.', 0),
  q('El plan de una auditoría concreta define:', 'Alcance, criterios, agenda y equipo', ['Solo el menú', 'La lista electoral', 'Nada operativo'], 'Plan.', 0),
  q('Independencia del auditor significa:', 'Imparcialidad y ausencia de conflictos relevantes', ['Amistad con el auditado para suavizar', 'Ignorar evidencias', 'Cobrar por ocultar NC'], 'Independencia.', 0),
  q('Una no conformidad es:', 'Incumplimiento de un requisito', ['Un logro', 'Una visión', 'Un valor ético abstracto sin gap'], 'NC.', 0),
  q('Hallazgos pueden ser:', 'NC, observaciones/oportunidades de mejora', ['Solo elogios sin base', 'Leyes nuevas', 'Sentencias penales'], 'Hallazgos.', 0),
  q('El informe de auditoría comunica:', 'Hallazgos, conclusiones y, en su caso, seguimiento', ['Solo rumores', 'Datos personales irrelevantes', 'Nada al auditado'], 'Informe.', 0),
  q('El seguimiento verifica:', 'Que las correcciones/acciones son eficaces', ['Que se archivó sin actuar', 'Que se ocultó la NC', 'Nada'], 'Follow-up.', 0),
  q('Enfoque basado en el riesgo en auditoría prioriza:', 'Áreas de mayor riesgo e importancia', ['Lo irrelevante primero', 'Azar puro', 'Solo lo fácil'], 'Risk-based.', 0),
  q('Integridad del auditor implica:', 'Honestidad y profesionalidad', ['Falsear muestreos', 'Aceptar sobornos', 'Ocultar evidencias'], 'Integridad.', 0),
  q('Muestrear en auditoría es necesario porque:', 'No siempre se puede revisar el 100%', ['Está prohibido revisar nada', 'No hay evidencias nunca', 'ISO lo prohíbe'], 'Muestreo.', 0),
  q('Criterios de auditoría pueden ser:', 'Norma, procedimientos internos, requisitos legales aplicables', ['Solo chistes', 'Solo redes', 'Nada escrito'], 'Criterios.', 0),
  q('Alcance de auditoría delimita:', 'Qué unidades/procesos/periodos se cubren', ['El universo entero siempre sin límite', 'Solo el logo', 'Nada'], 'Alcance.', 0),
  q('Una auditoría de proceso se centra en:', 'Un proceso concreto y su desempeño', ['Toda la CE', 'Solo el parking', 'La política monetaria'], 'Proceso.', 0),
  q('Una auditoría de sistema mira:', 'El SGC en su conjunto', ['Una sola factura aislada sin contexto', 'Solo un email', 'Nada sistémico'], 'Sistema.', 0),
  q('Presentación imparcial significa:', 'Reportar con verdad y equilibrio', ['Ocultar NC graves', 'Exagerar sin base', 'Mentir por amistad'], 'Fair presentation.', 0),
  q('Debido cuidado profesional implica:', 'Diligencia y juicio acorde a la importancia', ['Negligencia', 'Improvisar sin método', 'Ignorar riesgos'], 'Due professional care.', 0),
  q('Confidencialidad protege:', 'Información del auditado según reglas', ['La difusión masiva indebida', 'Vender datos', 'Publicar todo en redes'], 'Confidencialidad.', 0),
  q('Reunión de apertura sirve para:', 'Confirmar plan y reglas de juego', ['Cerrar el informe final ya', 'Sancionar', 'Eliminar evidencias'], 'Opening meeting.', 0),
  q('Reunión de cierre comunica:', 'Hallazgos preliminares al auditado', ['Nada', 'Solo amenazas', 'Resultados electorales'], 'Closing.', 0),
  q('Competencia del auditor incluye:', 'Conocimiento de norma y técnicas de auditoría', ['Solo carisma', 'Solo antigüedad sin formación', 'Nada técnico'], 'Competence.', 0),
  q('ISO 19011 NO es:', 'Una norma de requisitos para certificar el SGC como 9001', ['Una guía de auditoría', 'Un apoyo a auditorías internas', 'Útil para programas de auditoría'], 'No es 9001.', 0),
  q('Evidencia objetiva puede ser:', 'Registros, entrevistas contrastadas, observación', ['Solo intuición', 'Solo rumor de pasillo', 'Una opinión sin base'], 'Evidencia.', 0),
  q('Auditar el pensamiento basado en riesgos (9001) implica:', 'Ver cómo la organización identifica y trata riesgos', ['Ignorar riesgos', 'Prohibir controles', 'Eliminar procesos'], 'Riesgos en SGC.', 0),
  q('La auditoría aporta valor cuando:', 'Identifica mejoras y verifica conformidad con rigor', ['Solo busca culpables sin sistema', 'Es cosmética', 'Se falsea'], 'Valor.', 0),
  q('Conflictos de interés del auditor deben:', 'Gestionarse/evitarse', ['Ocultarse', 'Incentivarse', 'Ignorarse'], 'Ética.', 0),
  q('En el temario, UNE-EN ISO 19011 se cita como:', 'Directrices para la auditoría de los sistemas de gestión', ['Modelo EFQM', 'Carta de Servicios', 'LBRL'], 'Enunciado del tema 11.', 0),
])

writeTema(12, [
  q('ISO 9001 establece:', 'Requisitos para un SGC', ['Un modelo de excelencia no certificable', 'Solo herramientas estadísticas', 'La estructura de Diputaciones'], '9001 requisitos.', 0),
  q('EFQM es principalmente:', 'Modelo de excelencia para autoevaluación y mejora', ['Ley orgánica española', 'Impuesto', 'Certificado obligatorio de todos los ayuntamientos'], 'EFQM.', 0),
  q('CAF está pensado para:', 'Administraciones públicas', ['Automoción privada solo', 'Clubs exclusivos', 'Partidos'], 'CAF = public sector.', 0),
  q('Un enfoque central de ISO 9001 es:', 'Procesos, riesgo y mejora continua', ['Eliminar documentación útil', 'Ignorar al cliente', 'Prohibir auditorías internas'], 'Enfoques 9001.', 0),
  q('Diferencia clave ISO 9001 vs EFQM:', '9001 es certificable por requisitos; EFQM orienta excelencia/autoevaluación', ['Son idénticos', 'EFQM certifica ENAC siempre', '9001 solo sirve a partidos'], 'Diferencia.', 0),
  q('CAF se inspira en:', 'EFQM adaptado al sector público', ['La Corona', 'El Código Penal solo', 'ISO 19011 exclusivamente'], 'Origen CAF.', 0),
  q('Autoevaluación CAF/EFQM sirve para:', 'Diagnosticar fortalezas y áreas de mejora', ['Sustituir la CE', 'Eliminar indicadores', 'Prohibir procesos'], 'Autoevaluación.', 0),
  q('ISO 9001 exige, entre otros:', 'Enfoque al cliente y mejora continua', ['Opacidad total', 'Cero registros', 'Prohibir no conformidades'], 'Requisitos nucleares.', 0),
  q('El ciclo PDCA está presente en:', 'ISO 9001 y lógica de mejora de modelos de excelencia', ['Solo en el art. 168 CE', 'Solo en ENAC', 'Nunca en calidad'], 'PDCA.', 0),
  q('Un “modelo de referencia” sirve para:', 'Comparar y orientar la gestión', ['Sustituir la legalidad', 'Eliminar la estrategia', 'Prohibir mediciones'], 'Referencia.', 0),
  q('Certificarse en ISO 9001 demuestra:', 'Conformidad del SGC con requisitos auditados por tercera parte', ['Excelencia EFQM automática', 'Cumplimiento CAF obligatorio', 'Reforma constitucional'], 'Significado certificado.', 0),
  q('EFQM no equivale automáticamente a:', 'Un certificado ISO 9001', ['Autoevaluación', 'Mejora', 'Excelencia orientativa'], 'No confundir.', 0),
  q('CAF es especialmente útil porque:', 'Está diseñado para AAPP y es accesible', ['Solo vale en multinacionales de auto', 'Es secreto', 'Sustituye al Pleno'], 'Utilidad CAF.', 0),
  q('ISO 9001 se centra en:', 'Satisfacer requisitos del cliente y requisitos aplicables', ['Solo beneficio bursátil', 'Solo propaganda', 'Eliminar al usuario'], 'Foco cliente + requisitos.', 0),
  q('Pensamiento basado en riesgos en 9001 busca:', 'Anticipar efectos indeseados y oportunidades', ['Aumentar caos', 'Eliminar planificación', 'Prohibir controles'], 'Risk-based thinking.', 0),
  q('Los modelos de excelencia enfatizan:', 'Resultados + enfoques de gestión (liderazgo, personas, etc.)', ['Solo un procedimiento aislado', 'Solo una multa', 'Solo un sello vacío'], 'Visión holística.', 0),
  q('Elegir ISO 9001 conviene cuando:', 'Se busca un SGC certificable y estructurado', ['Se quiere solo un premio EFQM sin sistema', 'Se prohíbe documentar', 'No hay procesos'], 'Cuándo 9001.', 0),
  q('Elegir CAF/EFQM conviene cuando:', 'Se busca autoevaluación integral de excelencia (CAF en AAPP)', ['Se necesita solo un requisito ISO puntual sin más', 'Se quiere eliminar evidencia', 'No hay estrategia'], 'Cuándo excelencia.', 0),
  q('Compatibilidad: una organización puede:', 'Usar ISO 9001 y apoyarse en CAF/EFQM para excelencia', ['Nunca combinar enfoques', 'Solo usar uno en toda Europa por ley', 'Prohibir mejora'], 'Compatibilidad.', 0),
  q('ISO 9001 requiere información documentada:', 'En la medida necesaria para la eficacia del SGC', ['Infinita e inútil siempre', 'Cero documentos siempre', 'Solo papel mojado'], 'Documentación.', 0),
  q('La orientación a resultados en EFQM/CAF mira:', 'Qué logra la organización para grupos de interés', ['Solo el membrete', 'Solo el edificio', 'Nada medible'], 'Resultados.', 0),
  q('Liderazgo aparece como factor clave en:', 'Modelos de excelencia y éxito de SGC', ['Ningún modelo', 'Solo en derecho penal', 'Solo en el art. 56 CE'], 'Liderazgo.', 0),
  q('Mejora continua en 9001 implica:', 'Incrementar idoneidad, adecuación y eficacia del SGC', ['Congelar el sistema', 'Eliminar NC a base de ocultarlas', 'Prohibir auditorías'], 'Mejora 9001.', 0),
  q('Un error típico es:', 'Confundir certificado ISO con excelencia total EFQM', ['Distinguir modelos', 'Autoevaluar', 'Mejorar procesos'], 'Confusión.', 0),
  q('El temario cita expresamente:', 'EFQM, CAF e ISO 9001', ['Solo el Código de Comercio', 'Solo la Prima de Riesgo', 'Solo el IBEX'], 'Tema 12.', 0),
  q('ISO 9001 “Requisitos” significa que:', 'Define condiciones exigibles al SGC', ['Es solo una guía voluntaria sin requisitos', 'Es un impuesto', 'Es una Carta de Servicios'], 'Requisitos.', 0),
  q('CAF ayuda a AAPP a:', 'Hablar un lenguaje común de calidad pública europea', ['Eliminar la transparencia', 'Privatizar la CE', 'Suprimir indicadores'], 'Lenguaje común.', 0),
  q('La evidencia en modelos de excelencia se usa para:', 'Sustentar la autoevaluación', ['Decorar sin contenido', 'Ocultar debilidades siempre', 'Evitar mejora'], 'Evidencia.', 0),
  q('Integrar calidad con estrategia evita:', 'SGC decorativo desconectado del CMI', ['La mejora', 'Los procesos', 'Los indicadores'], 'Integración.', 0),
  q('Un SGC ISO sin cultura de mejora:', 'Cumple papeles pero aporta poco valor', ['Es el ideal de excelencia', 'Sustituye CAF', 'Garantiza EFQM'], 'Cultura.', 0),
  q('La diferencia CAF vs EFQM más citada es:', 'CAF específico y gratuito/orientado a AAPP', ['CAF es para automoción', 'EFQM solo para Diputaciones por ley', 'Son normas ISO'], 'CAF vs EFQM.', 0),
  q('ISO 9001 no evalúa por sí sola:', 'El grado de excelencia global tipo RADAR/EFQM', ['La conformidad con sus requisitos', 'Auditorías internas', 'Mejora continua del SGC'], 'Límite 9001.', 0),
])

writeTema(13, [
  q('La certificación de un SGC es:', 'Declaración de conformidad por tercera parte independiente', ['Autoevaluación sin evidencias', 'Un decreto del Presidente del Gobierno', 'La aprobación del presupuesto'], 'Certificación.', 0),
  q('La acreditación reconoce:', 'Competencia de organismos de evaluación de la conformidad', ['Que un producto es barato', 'Afiliación sindical', 'Resultado electoral'], 'Acreditación.', 0),
  q('En España, el organismo nacional de acreditación es:', 'ENAC', ['El Congreso', 'El BOE', 'El Banco de España'], 'ENAC.', 0),
  q('Certificación ≠ acreditación porque:', 'Una declara conformidad del sistema/producto; la otra, competencia del evaluador', ['Son sinónimos perfectos', 'ENAC certifica SGC de todos los ayuntamientos siempre', 'No existen'], 'Diferencia.', 0),
  q('El ciclo típico de certificación incluye:', 'Solicitud, auditoría, certificado, seguimiento y renovación', ['Solo una foto', 'Un sorteo', 'Una multa automática'], 'Ciclo.', 0),
  q('Un organismo de certificación:', 'Audita y emite certificados de conformidad', ['Aprueba leyes orgánicas', 'Emite moneda', 'Nombra al Rey'], 'Certificador.', 0),
  q('Elegir un certificador acreditado aporta:', 'Confianza en su competencia', ['Nada', 'Ilegalidad', 'Opacidad'], 'Confianza.', 0),
  q('La vigilancia/seguimiento del certificado verifica:', 'Que se mantiene la conformidad', ['Que se abandonó el SGC', 'Que se ocultaron NC', 'Nada'], 'Surveillance.', 0),
  q('Suspender o retirar un certificado puede ocurrir si:', 'Se pierden condiciones de conformidad', ['Todo va bien', 'Hay mejora continua', 'Hay auditorías internas eficaces'], 'Retirada.', 0),
  q('La marca de certificado no sustituye:', 'El cumplimiento legal del servicio', ['La auditoría', 'El SGC', 'Los registros'], 'Límite del sello.', 0),
  q('Autodeclarar “cumplimos ISO” sin auditoría de tercera parte:', 'No es una certificación', ['Es certificación plena', 'Equivale a ENAC', 'Sustituye a CAF'], 'Autodeclaración.', 0),
  q('Laboratorios acreditados demuestran:', 'Competencia técnica reconocida', ['Que son baratos', 'Que son políticos', 'Nada técnico'], 'Labs.', 0),
  q('La confianza internacional en certificados se apoya en:', 'Redes de acreditación y reconocimiento mutuo', ['Azar', 'Solo marketing', 'Silencio'], 'MLA/reconocimiento.', 0),
  q('Preparar la certificación exige:', 'SGC implantado y evidencias, no solo papeles', ['Comprar el sello sin sistema', 'Ocultar procesos', 'Eliminar auditorías internas'], 'Preparación.', 0),
  q('La auditoría de certificación es tipicamente:', 'De tercera parte', ['Solo interna', 'Solo del cliente sin organismo', 'Inexistente'], 'Tipo.', 0),
  q('Un certificado tiene:', 'Alcance y validez temporal definidos', ['Validez eterna sin seguimiento', 'Alcance infinito mágico', 'Ningún límite'], 'Alcance/validez.', 0),
  q('Ampliar el alcance del certificado requiere:', 'Demostrar conformidad en nuevas áreas', ['Nada', 'Solo un tuit', 'Una circular sin evidencia'], 'Alcance nuevo.', 0),
  q('ENAC no es:', 'Un organismo que sustituye a todos los certificadores de SGC en bloque', ['El acreditador nacional', 'Referente de competencia', 'Clave en la infraestructura de calidad'], 'Rol ENAC.', 0),
  q('La infraestructura de la calidad incluye:', 'Normalización, metrología, acreditación y evaluación de la conformidad', ['Solo partidos', 'Solo el IBEX', 'Solo el art. 14 CE'], 'Infraestructura.', 0),
  q('Usar mal el logo de certificación puede:', 'Ser uso indebido regulado/sancionable según reglas', ['Ser siempre libre', 'Estar obligado', 'Sustituir la ley'], 'Uso de marca.', 0),
  q('La certificación aporta valor si:', 'Hay mejora real detrás del sello', ['Solo hay marketing vacío', 'Se falsean auditorías', 'No hay procesos'], 'Valor real.', 0),
  q('Un municipio puede pedirle a un proveedor:', 'Certificación o evidencia de SGC según pliego', ['Reformar la CE', 'Emitir moneda', 'Ser ENAC'], 'Compras públicas.', 0),
  q('La renovación del certificado implica:', 'Nueva evaluación según esquema', ['Silencio eterno', 'Autodeclaración basta siempre', 'Nada'], 'Renovación.', 0),
  q('Distinguir entidades de acreditación y de certificación es:', 'Esencial en el tema 13 del temario', ['Irrelevante', 'Prohibido', 'Solo cosmética'], 'Temario.', 0),
  q('Un esquema de certificación define:', 'Reglas para otorgar y mantener el certificado', ['La CE', 'El censo', 'El himno'], 'Esquema.', 0),
  q('La imparcialidad del certificador es:', 'Requisito de confianza del sistema', ['Opcional', 'Indeseable', 'Ilegal'], 'Imparcialidad.', 0),
  q('Evidencias falsas en certificación:', 'Invalidan la confianza y pueden tener consecuencias', ['Son práctica recomendada', 'Mejoran ENAC', 'No importan'], 'Integridad.', 0),
  q('La certificación de personas (cuando existe) reconoce:', 'Competencia de individuos según esquema', ['La soberanía nacional', 'Un municipio entero automáticamente', 'La Corona'], 'Personas.', 0),
  q('Tras la certificación, la organización debe:', 'Mantener y mejorar el SGC', ['Abandonarlo', 'Ocultar NC', 'Eliminar auditoría interna'], 'Mantenimiento.', 0),
  q('Un beneficio externo de certificarse puede ser:', 'Mayor confianza de clientes/ciudadanía/otras AAPP', ['Opacidad', 'Menos transparencia', 'Ilegalidad'], 'Beneficio.', 0),
  q('Un beneficio interno puede ser:', 'Disciplina de procesos y reducción de fallos', ['Más caos', 'Menos datos', 'Más retrabajo deseado'], 'Beneficio interno.', 0),
  q('Confundir ENAC con certificador ISO 9001 típico es:', 'Un error conceptual frecuente', ['Correcto siempre', 'Obligatorio', 'Irrelevante en el temario'], 'Error típico.', 0),
])

writeTema(14, [
  q('Una Carta de Servicios es:', 'Documento público de compromisos de calidad con la ciudadanía', ['Un contrato laboral', 'Un impuesto', 'Un organigrama secreto'], 'Definición.', 0),
  q('Para ser útil debe:', 'Incluir compromisos medibles y revisarse', ['Ser folleto sin seguimiento', 'Ocultarse', 'Sustituir el ordenamiento'], 'Utilidad.', 0),
  q('Refuerza especialmente:', 'Transparencia y rendición de cuentas', ['Opacidad', 'Eliminación de control', 'Privatización obligatoria'], 'Transparencia.', 0),
  q('Suele incluir:', 'Servicios, derechos, estándares, indicadores y reclamaciones', ['Solo el escudo', 'Solo nóminas', 'Secretos clasificados'], 'Contenido.', 0),
  q('Los estándares de la Carta deben ser:', 'Realistas y verificables', ['Imposibles', 'Secretos', 'Ambiguos a propósito'], 'Estándares.', 0),
  q('Publicar la Carta sin medir:', 'Genera incredulidad', ['Garantiza excelencia', 'Sustituye ISO', 'Elimina quejas'], 'Medir.', 0),
  q('Las Cartas conectan con:', 'Enfoque al ciudadano y mejora continua', ['La reforma agravada de la CE solo', 'ENAC exclusivamente', 'El IBEX'], 'Calidad pública.', 0),
  q('Actualizar la Carta procede cuando:', 'Cambian servicios o capacidades', ['Nunca', 'Solo cada 50 años obligatoriamente sin más', 'Está prohibido'], 'Actualización.', 0),
  q('Incluir plazos de respuesta tipicos:', 'Concretiza el compromiso', ['Es inútil', 'Es ilegal siempre', 'Elimina indicadores'], 'Plazos.', 0),
  q('Canales de reclamación en la Carta:', 'Facilitan el ejercicio de derechos', ['Sobran', 'Aumentan opacidad', 'Prohíben quejas'], 'Reclamaciones.', 0),
  q('La Carta no sustituye:', 'La normativa reguladora del procedimiento', ['Los indicadores', 'La publicidad', 'Los compromisos'], 'Límite.', 0),
  q('Contrastar resultados vs Carta permite:', 'Ver grado de cumplimiento', ['Nada', 'Ocultar fallos', 'Eliminar mejora'], 'Cumplimiento.', 0),
  q('Comunicar incumplimientos y planes de mejora:', 'Refuerza credibilidad', ['Destruye siempre la confianza sin remedio', 'Está prohibido', 'Elimina transparencia'], 'Honestidad.', 0),
  q('Participar a usuarios en el diseño de la Carta:', 'Mejora relevancia de compromisos', ['Es inútil', 'Es ilegal', 'Rompe equidad siempre'], 'Co-diseño.', 0),
  q('Horarios y modos de acceso en la Carta:', 'Información práctica de servicio', ['Irrelevantes', 'Secretos', 'Prohibidos'], 'Acceso.', 0),
  q('Indicadores de la Carta deben ser:', 'Comprensibles para la ciudadanía', ['Ilegibles solo para expertos', 'Secretos', 'Aleatorios'], 'Claridad.', 0),
  q('Alinear Carta y procesos internos evita:', 'Prometer lo que el proceso no puede cumplir', ['Toda mejora', 'Toda medición', 'Toda transparencia'], 'Alineación.', 0),
  q('La Carta es herramienta de:', 'Calidad y comunicación pública', ['Política monetaria', 'Derecho penal sustantivo', 'Metrología legal exclusiva'], 'Naturaleza.', 0),
  q('Revisar anualmente resultados de Carta es:', 'Buena práctica de gestión', ['Innecesario siempre', 'Ilegal', 'Sustituto de la CE'], 'Revisión.', 0),
  q('Incluir derechos de la persona usuaria:', 'Refuerza enfoque de servicio público', ['Sobran', 'Confunden', 'Están prohibidos'], 'Derechos.', 0),
  q('Un riesgo es usar la Carta como:', 'Marketing vacío sin gestión', ['Sistema de mejora real', 'Transparencia seria', 'Compromiso medido'], 'Riesgo.', 0),
  q('Vincular Carta al CMI ayuda a:', 'Seguimiento directivo de compromisos', ['Eliminar indicadores', 'Ocultar resultados', 'Prohibir encuestas'], 'CMI.', 0),
  q('En Diputaciones, la Carta puede cubrir:', 'Servicios de asistencia a municipios/ciudadanía según alcance', ['La defensa nacional', 'La política exterior', 'La emisión de moneda'], 'Ámbito.', 0),
  q('Formar al personal en compromisos de la Carta:', 'Asegura coherencia en la prestación', ['Es inútil', 'Empeora el servicio', 'Está prohibido'], 'Personas.', 0),
  q('Publicar en sede electrónica la Carta:', 'Facilita acceso y transparencia', ['La oculta', 'Es irrelevante', 'Rompe la LBRL siempre'], 'Publicidad.', 0),
  q('Compromisos de calidad percibida pueden incluir:', 'Trato, claridad informativa y tiempos', ['Solo el color del logo', 'Solo el membrete', 'Nada humano'], 'Percibida.', 0),
  q('La Carta complementa:', 'SGC, auditorías y escucha ciudadana', ['La eliminación del SGC', 'La opacidad', 'El azar'], 'Complemento.', 0),
  q('Si un estándar se incumple de forma reiterada:', 'Hay que mejorar el proceso o ajustar el compromiso con transparencia', ['Ignorarlo', 'Ocultarlo', 'Eliminar la Carta en silencio'], 'Acción.', 0),
  q('El temario dedica el tema 14 a:', 'Las Cartas de Servicios', ['La Corona', 'ENAC solo', 'Pareto solo'], 'Temario.', 0),
  q('Una Carta sin responsable claro:', 'Debilita la rendición de cuentas', ['Mejora el control', 'Es ideal', 'Sustituye al dueño de proceso'], 'Responsabilidad.', 0),
  q('Medios de participación ciudadana en la Carta pueden ser:', 'Sugerencias, encuestas, paneles', ['Ninguno', 'Solo silencio', 'Solo sanciones'], 'Participación.', 0),
  q('La Carta debe escribirse en lenguaje:', 'Claro y accesible', ['Jurídico incomprensible a propósito', 'Cifrado', 'Extranjero obligatorio'], 'Lenguaje claro.', 0),
])

writeTema(15, [
  q('El diagrama de Ishikawa sirve para:', 'Analizar causas potenciales de un problema', ['Representar el presupuesto solo', 'Sustituir el mapa de procesos', 'Elegir al Presidente'], 'Causa-efecto.', 0),
  q('El diagrama de Pareto se basa en:', 'Pocos factores explican la mayor parte de los efectos (80/20)', ['Todas las causas pesan igual', 'No priorizar', 'Solo causas especiales inexistentes'], 'Pareto.', 0),
  q('Un flujograma es herramienta de:', 'Representación de actividades/procesos', ['Solo contabilidad', 'Publicidad electoral', 'Calibración exclusiva'], 'Flujo.', 0),
  q('Un histograma muestra:', 'La distribución de un conjunto de datos', ['Una ley', 'Un nombramiento', 'Una auditoría completa'], 'Histograma.', 0),
  q('DAFO analiza:', 'Debilidades, Amenazas, Fortalezas y Oportunidades', ['Solo costes externos', 'Certificación automática', 'Cómputo de votos'], 'DAFO.', 0),
  q('Los 5 Porqués buscan:', 'Profundizar hasta la causa raíz', ['Quedarse en el síntoma', 'Culpar sin método', 'Eliminar datos'], '5 Whys.', 0),
  q('SIPOC ayuda a:', 'Delimitar el proceso de extremo a extremo', ['Sustituir la CE', 'Eliminar clientes', 'Prohibir entradas'], 'SIPOC.', 0),
  q('Un gráfico de control monitoriza:', 'Estabilidad del proceso en el tiempo', ['La nómina política', 'El himno', 'El censo'], 'Control chart.', 0),
  q('La estratificación consiste en:', 'Separar datos por categorías para ver patrones', ['Mezclar causas', 'Ocultar Pareto', 'Eliminar histogramas'], 'Estratificar.', 0),
  q('Una matriz de priorización ayuda a:', 'Ordenar acciones según impacto/esfuerzo', ['Elegir al azar', 'Prohibir mejora', 'Ocultar Ishikawa'], 'Priorización.', 0),
  q('Herramientas de representación de actividades incluyen:', 'Flujogramas y diagramas de proceso', ['Solo histogramas', 'Solo Pareto', 'Solo DAFO'], 'Clasificación temario.', 0),
  q('Herramientas de representación de datos incluyen:', 'Histogramas y gráficos de control', ['Solo 5 Porqués', 'Solo DAFO', 'Solo organigramas políticos'], 'Datos.', 0),
  q('Herramientas de análisis de datos incluyen:', 'Pareto e Ishikawa (entre otras)', ['Solo el escudo', 'Solo el membrete', 'Solo el himno'], 'Análisis.', 0),
  q('Herramientas de análisis de la organización incluyen:', 'DAFO y mapas de procesos/encuestas', ['Solo un tornillo', 'Solo una multa', 'Solo un sello'], 'Organización.', 0),
  q('Usar Pareto antes de Ishikawa suele ayudar a:', 'Enfocar el problema vital', ['Dispersar esfuerzos', 'Ignorar frecuencias', 'Eliminar datos'], 'Secuencia útil.', 0),
  q('Un brainstorming estructurado alimenta:', 'Ishikawa / listas de causas', ['La opacidad', 'La eliminación de evidencias', 'El azar puro sin registro'], 'Ideas.', 0),
  q('La hoja de recogida de datos sirve para:', 'Registrar hechos de forma sistemática', ['Improvisar sin registro', 'Ocultar frecuencias', 'Eliminar histograma'], 'Check sheet.', 0),
  q('Diagrama de dispersión explora:', 'Relación entre dos variables', ['Solo una categoría nominal sin eje', 'La CE', 'ENAC'], 'Scatter.', 0),
  q('Elegir mal la herramienta provoca:', 'Análisis superficial o erróneo', ['Excelencia automática', 'Certificación', 'Cero problemas'], 'Método.', 0),
  q('Combinar herramientas (Pareto+Ishikawa+PDCA):', 'Es práctica habitual de mejora', ['Está prohibido', 'Confunde siempre sin remedio', 'Elimina evidencias'], 'Combinar.', 0),
  q('Un mapa de proceso no sustituye:', 'El análisis de causas cuando hay un problema', ['La representación del flujo', 'La visión del proceso', 'La formación'], 'Límite.', 0),
  q('El temario clasifica herramientas en tipos de:', 'Actividades, datos, análisis de datos y análisis de la organización', ['Solo penales', 'Solo electorales', 'Solo monetarias'], 'Enunciado tema 15.', 0),
  q('Usar histograma tras recoger tiempos de trámite permite:', 'Ver forma y dispersión de demoras', ['Nombrar diputados', 'Reformar la Corona', 'Acreditar ENAC'], 'Uso práctico.', 0),
  q('Ishikawa con categorías 6M tipicas incluye:', 'Método, Máquina, Material, Mano de obra, Medio, Medición', ['Solo Monarquía', 'Solo Municipio', 'Solo Multa'], '6M.', 0),
  q('Priorizar con impacto×esfuerzo evita:', 'Empezar por lo difícil y poco útil', ['Toda mejora', 'Todo dato', 'Todo flujograma'], 'Impacto-esfuerzo.', 0),
  q('Una herramienta no elimina la necesidad de:', 'Criterio profesional y conocimiento del servicio', ['Datos', 'Análisis', 'Verificación'], 'Juicio.', 0),
  q('Visualizar el flujo detecta:', 'Cuellos de botella y retrabajos', ['La prima de riesgo', 'El IBEX', 'El Euribor'], 'Cuellos de botella.', 0),
  q('DAFO externo mira especialmente:', 'Amenazas y oportunidades del entorno', ['Solo debilidades internas', 'Solo fortalezas internas', 'Nada externo'], 'Externo.', 0),
  q('DAFO interno mira especialmente:', 'Fortalezas y debilidades', ['Solo amenazas globales', 'Solo oportunidades de mercado abstractas', 'Nada interno'], 'Interno.', 0),
  q('Tras Ishikawa conviene:', 'Validar causas con datos y contrastar', ['Implementar 20 acciones a la vez sin dato', 'Archivar sin actuar siempre', 'Ocultar el diagrama'], 'Validar.', 0),
  q('Las 7 herramientas clásicas de calidad incluyen entre otras:', 'Pareto, Ishikawa, histograma, gráfico de control, dispersión, estratificación, hoja de datos', ['Solo DAFO político', 'Solo encuestas electorales', 'Solo CMI financiero'], '7 tools.', 0),
  q('En un supuesto práctico de la 2ª parte, estas herramientas sirven para:', 'Diagnosticar y priorizar mejoras del servicio', ['Reformar el Título II CE', 'Sustituir al Pleno', 'Acreditar certificadores'], 'Aplicación examen.', 0),
])

console.log('11-15 ok')

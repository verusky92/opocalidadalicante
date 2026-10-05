import type { TemaSection } from '../types'

/**
 * Material de la Unidad / Sección de Calidad de la Diputación de Alicante
 * (temarios 2005 y temas orientativos de la convocatoria 2008/2009),
 * revisado y actualizado normativamente (octubre 2026).
 *
 * Fuentes originales (Wayback / MERI):
 * - Temas 1–3 «Unidad de Calidad» (enero 2005)
 * - Tema 54 y Tema 60 (RRHH, BOP 29/08/2008)
 */

export interface UnidadCalidadUnit {
  id: string
  title: string
  summary: string
  /** Qué se ha corregido/actualizado respecto al PDF original */
  updates: string[]
  sections: TemaSection[]
}

export const UNIDAD_CALIDAD_AUDIT = {
  reviewedAt: '2026-10-02',
  sources: [
    'Unidad de Calidad Dipu Alicante — Temas 1–3 (ene. 2005)',
    'Tema 54 y Tema 60 orientativos convocatoria Técnico Medio en Calidad (BOP 29/08/2008)',
  ],
  headline:
    'El material histórico de la Dipu se mantiene como base pedagógica, pero varias referencias normativas ya no estaban vigentes. Esta versión las sustituye o las marca como contexto histórico.',
  outdatedFound: [
    {
      original: 'UNE-EN ISO 9001:2000 / 9002:1994',
      current:
        'Edición de referencia actual: ISO 9001:2026 (publicada 16/09/2026). Los certificados frente a ISO 9001:2015 siguen válidos en periodo de transición (hasta 30/09/2029 según calendario IAF/ACI). No usar 9001:2000 ni 9002:1994 como norma vigente.',
    },
    {
      original: '«ENAC da rango UNE a las normas»',
      current:
        'Error conceptual del original. UNE (Asociación Española de Normalización) adopta/publica normas UNE; ENAC acredita organismos de evaluación de la conformidad. No confundir normalización con acreditación.',
    },
    {
      original: 'EFQM con 5 agentes + 4 resultados (modelo clásico)',
      current:
        'El modelo EFQM vigente es el de 2020 (actualizado 2025): Dirección, Ejecución y Resultados. El esquema 9 criterios se cita solo como historia.',
    },
    {
      original: 'Ley 30/1992; Ley 11/2007; LO 15/1999; RD 1259/1999',
      current:
        'Procedimiento y régimen jurídico: Leyes 39/2015 y 40/2015. Administración electrónica: 39/2015 + RD 203/2021. Protección de datos: RGPD + LO 3/2018. Cartas de Servicios AGE: RD 951/2005 (deroga el marco del RD 1259/1999).',
    },
    {
      original: 'MAP / Secretaría General de Calidad de los Servicios; fvQ «Moderniza.com»',
      current:
        'La estructura ministerial ha cambiado varias veces (MHFP, Función Pública, Transformación Digital…). Citar funciones (calidad, gobernanza pública, cartas de servicios) sin anclar a un organigrama de 2005. La Fundación Valenciana de la Calidad es referencia histórica regional; verificar denominación/estado actual si se pregunta en un test oficial reciente.',
    },
    {
      original: 'Datos de plantilla, sedes y certificaciones % de ~2005–2009; Presidente Ripoll',
      current:
        'Se conservan como historia del despliegue de calidad en la Dipu, no como foto actual de la organización.',
    },
  ],
}

export const UNIDAD_CALIDAD_UNITS: UnidadCalidadUnit[] = [
  {
    id: 'uc-01',
    title: 'Gestión de la calidad (conceptos y modelos)',
    summary:
      'Definición de calidad, pilares del SGC y comparación ISO / EFQM / CAF, con modelos actuales.',
    updates: [
      'ISO 9001:2000 → ISO 9001:2026 (con nota de transición desde 2015)',
      'Corregido el papel UNE vs ENAC',
      'EFQM actualizado al modelo 2020/2025; CAF como marco europeo de autoevaluación pública',
      'Modelo «Ciudadanía»/OCSP tratado como referencia histórica, no como estándar vigente',
    ],
    sections: [
      {
        title: '1. Qué es calidad y cómo se gestiona',
        body: [
          'Calidad es el grado en que un producto o servicio satisface necesidades y expectativas de clientes/usuarios (y, en lo público, también mandatos legales, equidad y transparencia).',
          'No se improvisa: requiere un sistema de gestión que alinee requisitos, plan, recursos, procesos, responsabilidades y mejora.',
          'Cliente/usuario = destinatario. En AAPP hay múltiples partes interesadas (ciudadanía, municipios asistidos, personal, órganos de control…).',
        ],
      },
      {
        title: '2. Pilares clásicos del SGC',
        body: [
          'Enfoque al cliente/usuario: conocer requisitos y medir satisfacción (encuestas, quejas, focus, datos de proceso).',
          'Liderazgo: compromiso expreso de la dirección con política, objetivos y recursos.',
          'Mejora continua: ciclo PDCA (planificar–hacer–verificar–actuar), sin “punto final”.',
          'Participación del personal: el sistema no funciona solo con un manual; hace falta competencia e implicación.',
        ],
      },
      {
        title: '3. Modelo ISO 9001 (vigente)',
        body: [
          'ISO elabora normas internacionales; el CEN puede adoptarlas como EN; en España se publican como UNE-EN ISO… La adopción UNE es de la Asociación Española de Normalización (no de ENAC).',
          'ENAC acredita a entidades de certificación/ensayo/inspección. El certificado ISO 9001 lo emite un organismo de certificación; ENAC acredita a ese organismo.',
          'ISO 9001:2026 (sept. 2026) es la edición de requisitos del SGC. Mantiene la estructura armonizada (cláusulas 4–10). Integra el cambio climático como cuestión externa potencialmente relevante (ya anticipado en Amd 1:2024 a la edición 2015).',
          'Transición: los certificados frente a ISO 9001:2015 permanecen válidos durante el periodo transitorio (referencia IAF/ACI: hasta 30/09/2029). No estudiar 9001:2000 ni 9002:1994 como norma actual.',
          'Lógica del modelo: contexto y partes interesadas → liderazgo → planificación (riesgos/oportunidades) → apoyo → operación → evaluación del desempeño → mejora.',
        ],
      },
      {
        title: '4. EFQM y CAF',
        body: [
          'EFQM (fundación europea, 1988): modelo de excelencia / calidad total orientado a autoevaluación y mejora, no a “certificación de requisitos” al estilo 9001.',
          'Modelo EFQM actual (2020, con actualización 2025): bloques de Dirección, Ejecución y Resultados (ya no el esquema didáctico antiguo de 5 agentes + 4 resultados, aunque conviene conocerlo como historia).',
          'CAF (Common Assessment Framework): marco europeo de autoevaluación para el sector público, inspirado en EFQM pero adaptado y más sencillo de aplicar en AAPP. Versiones recientes: CAF 2020.',
          'El “modelo Ciudadanía” del Observatorio OCSP (años 90) es referencia histórica de calidad pública en España; no es el marco operativo actual de la AGE.',
        ],
      },
    ],
  },
  {
    id: 'uc-02',
    title: 'Herramientas básicas de la calidad',
    summary:
      'Hoja de datos, histograma, flujo, control, brainstorming, Ishikawa, matriz, Pareto y benchmarking.',
    updates: [
      'Contenido técnico esencialmente vigente (herramientas clásicas)',
      'Añadida precisión: gráfico de control ≠ capacidad del proceso; Pareto prioriza, no “demuestra” causalidad sola',
    ],
    sections: [
      {
        title: '1. Para qué sirven',
        body: [
          'Son técnicas de apoyo para implantar y mejorar un SGC: medir, visualizar, priorizar causas y aprender de referentes.',
          'La Unidad de Calidad de la Dipu las enseñaba como caja básica: hoja de recogida, histograma, diagrama de flujo, gráfico de control, tormenta de ideas, causa-efecto, matriz de ponderación, Pareto y benchmarking.',
        ],
      },
      {
        title: '2. Herramientas una a una',
        body: [
          'Hoja de recogida de datos: tabla para registrar frecuencias/tiempos de forma ordenada antes del análisis.',
          'Histograma: barras que muestran la distribución/variación de un conjunto de datos.',
          'Diagrama de flujo: secuencia de actividades de un proceso con símbolos; alinea a quienes intervienen.',
          'Gráfico de control: evolución temporal frente a promedio y límites; “bajo control” ≈ solo causas comunes (no confundir con “capaz” de cumplir especificaciones).',
          'Tormenta de ideas: generar muchas ideas sin criticar en la fase divergente.',
          'Diagrama causa-efecto (Ishikawa): estructura causas potenciales de un efecto (p. ej. 4M/6M).',
          'Matriz de ponderación: priorizar de forma consensuada con criterios previos (impacto, coste, facilidad…).',
          'Pareto (80/20): pocas causas vitales concentran la mayor parte del efecto; prioriza actuación.',
          'Benchmarking: aprender de mejores prácticas internas o externas por comparación estructurada.',
        ],
      },
    ],
  },
  {
    id: 'uc-03',
    title: 'Calidad en la Administración pública',
    summary:
      'Calidad vs modernización; marco estatal/autonómico/local actualizado; aplicaciones típicas.',
    updates: [
      'Ley 30/1992 → 39/2015 y 40/2015',
      'RD 1259/1999 → RD 951/2005 (Cartas de Servicios AGE)',
      'Ley 11/2007 / LO 15/1999 → marco 39/2015 + RD 203/2021 y RGPD/LO 3/2018',
      'Organigramas MAP/fvQ relativizados',
    ],
    sections: [
      {
        title: '1. Calidad y modernización',
        body: [
          'Calidad en AAPP: capacidad de prestar servicios que satisfagan necesidades/expectativas de la ciudadanía con legalidad, equidad, eficacia y uso razonable de recursos.',
          'Modernización: uso de tecnologías y rediseño organizativo para hacer los servicios más accesibles, ágiles y transparentes. Es instrumental: apoya la calidad, no la sustituye.',
          'El enfoque “Administración al servicio del ciudadano” se consolida en Europa desde los años 80–90 (OCDE, reformas nacionales).',
        ],
      },
      {
        title: '2. Marco normativo actual (no el de 2005)',
        body: [
          'Tres niveles: AGE, CCAA y Administración Local (municipios, diputaciones, cabildos/consejos).',
          'Procedimiento administrativo y régimen jurídico: Ley 39/2015 (procedimiento común) y Ley 40/2015 (régimen jurídico del sector público). Derogan el núcleo de la Ley 30/1992.',
          'Administración electrónica: derechos y obligaciones de relación electrónica en 39/2015; desarrollo reglamentario relevante en RD 203/2021. La antigua Ley 11/2007 es precedente histórico.',
          'Cartas de Servicios en la AGE: RD 951/2005 (marco de mejora de la calidad). Sustituye el régimen del RD 1259/1999.',
          'Protección de datos: Reglamento (UE) 2016/679 (RGPD) y LO 3/2018. La LO 15/1999 está derogada.',
          'Modelos de gestión: ISO 9001, EFQM, CAF y sistemas ambientales (ISO 14001, EMAS) siguen siendo vías habituales; las “aplicaciones sencillas” (simplificación, quejas/sugerencias, cartas, procesos) siguen siendo la puerta de entrada.',
        ],
      },
      {
        title: '3. Aplicaciones típicas',
        body: [
          'Sencillas/relativamente asequibles: simplificación, registro/sede electrónica, quejas y sugerencias, gestión por procesos, cartas de servicios.',
          'Complejas: grupos de mejora, encuestas sistemáticas, participación ciudadana, SGC certificados, sistemas ambientales, integración calidad–PRL–medio ambiente.',
          'Modernización tecnológica: sedes, interoperabilidad, identidad electrónica, expediente electrónico, atención multicanal.',
        ],
      },
    ],
  },
  {
    id: 'uc-04',
    title: 'La calidad en la Diputación de Alicante (historia y modelo)',
    summary:
      'Programa CADA, ISO por departamentos, incentivos, premios y lecciones del despliegue provincial.',
    updates: [
      'Se conserva como relato histórico (1996–2009); no afirma plantilla/% certificados actuales',
      'Normas citadas en su momento (9002:1994 → 9001:2000) explicadas como evolución, no como vigencia',
      'Principios y método de implantación por unidades se mantienen como aprendizaje transferible',
    ],
    sections: [
      {
        title: '1. Contexto institucional',
        body: [
          'La Diputación (LBRL) asegura solidaridad y equilibrio intermunicipal; en Alicante atiende a muchos municipios pequeños además de servicios propios.',
          'El material oficial de la convocatoria destacaba una organización grande y multicentro (Palacio, servicios sociales, MARQ/MUBAG, organismos autónomos como SUMA, etc.).',
          'Algunos OO.AA. fueron pioneros (p. ej. certificaciones/acreditaciones en Proaguas; reconocimientos del MARQ). El núcleo del Tema 60 es el despliegue en departamentos de la propia Diputación.',
        ],
      },
      {
        title: '2. Cronología (fases)',
        body: [
          '1996–1998 — Programa CADA: sensibilización, grupos de mejora, encuestas, intento de autoevaluación; piloto en Régimen Interior/Personal; Día de la Calidad.',
          '1999–2000 — Estrategia ISO por departamentos + Certamen de Premios a la Calidad + inclusión de calidad en temarios de oposiciones. Inicio con ISO 9002:1994; contratación de técnicos de calidad.',
          '2001–2002 — Primeras certificaciones (Tesorería, Gestión documental/Registro/Archivo…); incentivo ligado a la certificación voluntaria; expansión a toda la organización.',
          'Fases posteriores (hasta el material ~2008/09): mantenimiento, auditorías, transición de ediciones de norma y consolidación de la Sección/Unidad de Calidad como apoyo interno.',
        ],
      },
      {
        title: '3. Método transferible (sigue siendo útil)',
        body: [
          'Enfoque departamental (“comerse el elefante a bocados”): unidades funcionales certificables, no esperar a certificar toda la corporación de golpe.',
          'Secuencia típica: asesoramiento → conocimiento del área → planificación → reuniones → medición de progreso → auditoría interna → auditoría externa.',
          'Principios: enfoque al cliente, liderazgo, participación, procesos, mejora continua (corregir y prevenir).',
          'Actividades: política de calidad, voz del cliente, mapa/procedimientos, registros, medición, priorización de problemas, objetivos, acciones, seguimiento y revisión del sistema.',
          'Certificación: reconocimiento de conformidad por tercera parte; después, seguimiento periódico y renovación según reglas del esquema (hoy, ciclo habitual trienal con vigilancias).',
        ],
      },
    ],
  },
  {
    id: 'uc-05',
    title: 'Modernización y administración electrónica',
    summary:
      'De la burocracia weberiana a la AAPP digital: marco vigente tras actualizar el Tema 54.',
    updates: [
      'Reescrito el bloque normativo (39/2015, 40/2015, RD 203/2021, RGPD)',
      'Ventanilla única / multicanal reinterpretados en clave de sede electrónica e interoperabilidad',
      'Planes Avanza/Moderniza citados como historia de impulso, no como programas vigentes',
    ],
    sections: [
      {
        title: '1. Idea de modernización',
        body: [
          'Modernizar no es solo “poner ordenadores”: es adaptar misión, procesos y cultura a demandas de cercanía, eficacia, transparencia y trazabilidad.',
          'Se busca pasar de un modelo burocrático puramente formal a uno orientado a resultados y ciudadanía, sin renunciar a la legalidad.',
          'Instrumentos clásicos de calidad pública: cartas de servicios, simplificación, medición, atención multicanal.',
        ],
      },
      {
        title: '2. E-administración hoy',
        body: [
          'La relación electrónica con las AAPP es regla general para sujetos obligados y un derecho/posibilidad ampliado para la ciudadanía (Ley 39/2015).',
          'Elementos clave: sede electrónica, registro electrónico, identificación/firma, expediente electrónico, archivo electrónico, notificaciones, interoperabilidad.',
          'RD 203/2021 desarrolla el funcionamiento del sector público por medios electrónicos.',
          'Protección de datos y seguridad de la información son requisitos transversales (RGPD/LO 3/2018 y esquemas de seguridad aplicables).',
        ],
      },
      {
        title: '3. Encaje con calidad',
        body: [
          'La tecnología potencia la calidad si se rediseña el proceso (menos esfuerzo del usuario, menos errores, más trazabilidad). Digitalizar un mal proceso solo acelera el fallo.',
          'Indicadores útiles: tiempos de ciclo, retrabajo, tasa de resolución en primer contacto, accesibilidad, disponibilidad de sede, cumplimiento de compromisos de carta.',
          'En una Diputación, la e-admin también es servicio a municipios (asistencia, plataformas, interoperabilidad local).',
        ],
      },
    ],
  },
]

# -*- coding: utf-8 -*-
"""Explicaciones detalladas por sourceId (oficiales Dipu) y regeneración T1–T2."""
import json
import re

oficial = json.load(open("fuentes-dipu/oficial-t1-t2.json", encoding="utf-8"))

E = {
    "servicios-q1": (
        "Correcta: C. Art. 64.1 CE: los actos del Rey serán refrendados por el Presidente del Gobierno y, "
        "en su caso, por los Ministros competentes. El art. 64.2 añade que de los actos del Rey serán "
        "responsables las personas que los refrenden. No refrenda el Presidente de las Cortes ni el del "
        "Senado (salvo el supuesto específico del art. 64.1 in fine: propuesta y nombramiento del "
        "Presidente del Gobierno, y disolución prevista en el art. 99, que refrenda el Presidente del Congreso)."
    ),
    "servicios-q2": (
        "Correcta: B. Art. 21.1 CE: se reconoce el derecho de reunión pacífica y sin armas; no necesita "
        "autorización previa. A es incorrecta: el derecho al trabajo (art. 35) no es derecho fundamental "
        "de la Sección 1ª del Cap. II, sino derecho y deber del Cap. II Sección 2ª. C es falsa: la "
        "asociación está en el art. 22. D distorsiona el 21.2: en tránsito público se comunica previamente "
        "y solo puede prohibirse cuando existan razones fundadas de alteración del orden público, con "
        "peligro para personas o bienes."
    ),
    "servicios-q3": (
        "Correcta: C. Art. 168.1 CE (reforma agravada): si se propone revisión total o parcial que afecte "
        "al Título Preliminar, a la Sección 1ª del Cap. II del Título I o al Título II, se requiere "
        "aprobación por mayoría de dos tercios de cada Cámara y la disolución inmediata de las Cortes. "
        "No basta con tres quintos (eso es el art. 167, reforma ordinaria) ni con tres cuartas partes "
        "ni unanimidad."
    ),
    "servicios-q4": (
        "Correcta: D. Art. 3.1 LO 3/2007: el principio de igualdad de trato entre mujeres y hombres "
        "supone la ausencia de toda discriminación, directa o indirecta, por razón de sexo y, "
        "especialmente, las derivadas de la maternidad, la asunción de obligaciones familiares y el "
        "estado civil. Las demás opciones alteran el texto (hablan de «violencia», omiten la "
        "discriminación indirecta o cambian el sentido)."
    ),
    "aux58-q1": (
        "Correcta: D. El art. 167 CE (reforma ordinaria) contempla las tres reglas: (1) aprobación por "
        "tres quintos de cada Cámara, con Comisión paritaria si no hay acuerdo; (2) si no se logra así "
        "y el texto tuvo mayoría absoluta del Senado, el Congreso puede aprobarlo por dos tercios; "
        "(3) referéndum facultativo si lo piden, en 15 días, una décima parte de los miembros de "
        "cualquiera de las Cámaras. Por tanto, A, B y C son correctas."
    ),
    "aux58-q2": (
        "Correcta: B. Art. 17.4 CE: la ley regulará un procedimiento de «habeas corpus» para producir "
        "la inmediata puesta a disposición judicial de toda persona ilegalmente detenida. El término "
        "constitucional es detención ilegal, no prisión ilegal ni preventiva."
    ),
    "aux58-q3": (
        "Correcta: C. Art. 55.1 CE: pueden suspenderse derechos en estados de excepción y sitio, pero "
        "el propio precepto exceptúa, respecto del art. 17.3, el derecho del detenido a la asistencia "
        "de abogado en las diligencias policiales y judiciales en los términos de la ley. Es decir: "
        "aunque se suspendan otros derechos del 17, se conserva la asistencia letrada. El plazo de 72 h "
        "(17.2) y el secreto de las comunicaciones (18.3) sí pueden verse afectados según el régimen "
        "de los estados excepcionales."
    ),
    "aux58-q4": (
        "Correcta: A. Art. 11.2 CE: ningún español de origen podrá ser privado de su nacionalidad. "
        "Es una garantía absoluta: no cabe privación por ley, por Gobierno ni por Cortes."
    ),
    "aux58-q5": (
        "Correcta: B. Art. 13.3 CE: se excluyen de la extradición los delitos políticos, no "
        "considerándose como tales los actos de terrorismo. Por tanto el terrorismo no queda excluido "
        "por esa vía; las opciones que excluyen el terrorismo o mezclan «delitos sociales» son incorrectas."
    ),
    "aux58-q6": (
        "Correcta: A. Art. 15 del Estatuto de Autonomía de la Comunitat Valenciana: la Generalitat "
        "garantiza el derecho a la solidaridad y a una renta de ciudadanía «con el fin de combatir la "
        "pobreza y facilitar la inserción social». Las demás cambian «pobreza» por «desigualdades» o "
        "«inserción» por «reinserción»."
    ),
    "aux58-q7": (
        "Correcta: B. Art. 10 EACV: se elaborará por Ley de Les Corts la Carta de Derechos Sociales de "
        "la Comunitat Valenciana. No es Decreto-ley del Consell ni un mero dictamen o acuerdo mixto."
    ),
    "aux58-q8": (
        "Correcta: D. Art. 49.3 EACV: la Generalitat tiene competencia exclusiva sobre mediadores de "
        "seguros. Las otras materias (crédito/banca/seguros, propiedad intelectual/industrial, régimen "
        "minero y energético) no son el encaje de ese apartado 49.3 en los términos de la pregunta."
    ),
    "aux58-q9": (
        "Correcta: A. Art. 51 EACV: corresponde a la Generalitat la ejecución de la legislación del "
        "Estado en fondos europeo y estatal de garantía agraria en la Comunitat Valenciana. Turismo o "
        "régimen minero no son el contenido de ese artículo en la opción correcta del examen."
    ),
    "aux58-q10": (
        "Correcta: D. Art. 50 EACV: competencia de desarrollo legislativo y ejecución en protección del "
        "medio ambiente, sin perjuicio de las facultades de la Generalitat para establecer normas "
        "adicionales de protección. Las otras opciones corresponden a otros títulos competenciales."
    ),
    "aux58-q61": (
        "Correcta: A. Art. 25 LO 3/2007: las Administraciones públicas promoverán la inclusión, en los "
        "planes de estudio en que proceda, de enseñanzas de igualdad; la creación de postgrados "
        "específicos; y estudios e investigaciones especializadas. No limita la obligación solo a "
        "centros públicos o privados concretos como hacen B–D."
    ),
    "aux58-q62": (
        "Correcta: C. Art. 28 LO 3/2007: es el Gobierno quien promoverá la plena incorporación de las "
        "mujeres en la Sociedad de la Información mediante programas específicos (acceso y formación "
        "en TIC), contemplando colectivos en riesgo de exclusión y ámbito rural. No atribuye esa "
        "función a «Administraciones + RTVE» ni solo a las CCAA."
    ),
    "aux58-q63": (
        "Correcta: B. Art. 36 LO 3/2007: los medios de comunicación social de titularidad pública "
        "velarán por una imagen igualitaria, plural y no estereotipada y promoverán el conocimiento "
        "del principio de igualdad. El precepto se refiere a los de titularidad pública (no «públicos "
        "y privados» en bloque, ni solo RTVE)."
    ),
    "aux58-q64": (
        "Correcta: A. Art. 41 LO 3/2007: la publicidad que comporte una conducta discriminatoria "
        "conforme a esta Ley se considerará publicidad ilícita / deshonesta según la legislación "
        "general de publicidad y de publicidad y comunicación institucional. La opción A reproduce "
        "el criterio legal usado en la plantilla (publicidad deshonesta en ese marco). «Condenable» "
        "no es la categoría legal."
    ),
    "aux58-q65": (
        "Correcta: A. Art. 51 LO 3/2007 (criterios de actuación de las AAPP): deben, entre otras "
        "medidas, fomentar la formación en igualdad en el acceso al empleo público y a lo largo de "
        "la carrera. Las opciones B y C no reproducen fielmente ese artículo (p. ej. no impone "
        "«presencia preferente» de mujeres en órganos de selección ni evaluación «trimestral»)."
    ),
    "aux2017-q1": (
        "Correcta: B. Art. 8.1 CE: las Fuerzas Armadas tienen como misión garantizar la soberanía e "
        "independencia de España, defender su integridad territorial y el ordenamiento "
        "constitucional. Las FCSE (art. 104) protegen el libre ejercicio de derechos y velan por la "
        "seguridad ciudadana; no son el título de «integridad territorial» del art. 8."
    ),
    "aux2017-q3": (
        "Correcta: D. Art. 22.5 CE: se prohíben las asociaciones secretas y las de carácter "
        "paramilitar. Las asociaciones políticas no están prohibidas (son cauce de participación). "
        "Por tanto B y C son las prohibidas → respuesta D."
    ),
    "aux2017-q4": (
        "Correcta: D. Art. 11.3 CE: el Estado podrá concertar tratados de doble nacionalidad con "
        "países iberoamericanos o con aquellos que hayan tenido o tengan una particular vinculación "
        "con España. A, B y C quedan cubiertas → D."
    ),
    "aux2017-q9": (
        "Correcta: C. Art. 3.1 EACV: gozan de la condición política de valencianos los ciudadanos "
        "españoles que tengan o adquieran vecindad administrativa en cualquiera de los municipios de "
        "la Comunitat Valenciana. No basta con «vivir en Valencia» o en las tres capitales."
    ),
    "servicios-q5": (
        "Correcta: A. Art. 34.1 LBRL: corresponde en todo caso al Presidente dirigir, inspeccionar e "
        "impulsar los servicios y obras de la Diputación. Aprobar planes provinciales o la plantilla "
        "es del Pleno (art. 33); la contratación no es «en todo caso» del Presidente sin matices de "
        "cuantía/delegación."
    ),
    "servicios-q6": (
        "Correcta: B. Art. 33.2 LBRL: el Pleno no puede delegar, entre otras, el planteamiento de "
        "conflictos de competencias a otras Entidades locales y demás Administraciones públicas. "
        "Otras atribuciones del listado sí pueden tener régimen distinto de delegación; la pregunta "
        "señala la que NO puede delegar."
    ),
    "servicios-q7": (
        "Correcta: A. Art. 33.1 LBRL: el Pleno de la Diputación está constituido por el Presidente y "
        "los Diputados. No se limita a un tercio ni a «delegados»."
    ),
    "servicios-q8": (
        "Correcta: D. Art. 34.2 LBRL: el Presidente puede delegar atribuciones, salvo las que enumera "
        "como indelegables (entre ellas la jefatura superior del personal, la separación del servicio/"
        "despido laboral, y dirigir el gobierno y la administración provincial). Representar a la "
        "Diputación sí es delegable."
    ),
    "servicios-q9": (
        "Correcta: A. Art. 33.2.g) LBRL (atribuciones del Pleno): aprobación de la plantilla, RPT, "
        "cuantía de retribuciones complementarias fijas y periódicas de funcionarios, y número y "
        "régimen del personal eventual. No es del Presidente ni de la Junta de Gobierno."
    ),
    "servicios-q10": (
        "Correcta: C. Art. 34.1 LBRL: corresponde al Presidente el nombramiento de los Vicepresidentes. "
        "No lo hace el Pleno ni la Junta de Gobierno (salvo otras normas específicas que no desplazan "
        "esta regla general)."
    ),
    "aux58-q11": (
        "Correcta: C. Art. 32 LBRL: son órganos necesarios de todas las Diputaciones el Presidente, "
        "los Vicepresidentes, el Pleno y la Junta de Gobierno. Faltan piezas en A y B; D añade una "
        "condición inexistente («cuando lo apruebe el Pleno»)."
    ),
    "aux58-q12": (
        "Correcta: D. Art. 33.2 LBRL: son indelegables, entre otras, la aprobación de ordenanzas, la "
        "organización de la Diputación y el control y fiscalización de los órganos de gobierno. Por "
        "tanto A, B y C son indelegables → D."
    ),
    "aux58-q13": (
        "Correcta: A. Art. 56 LBRL: los Presidentes y, de forma inmediata, los Secretarios de las "
        "Corporaciones son responsables de remitir a las Administraciones estatal y autonómica copia "
        "o, en su caso, extracto de los actos y acuerdos. No invierte el orden Presidente/Secretario."
    ),
    "aux58-q14": (
        "Correcta: A. Art. 46.2.d) LBRL: la ausencia de uno o varios miembros, una vez iniciada la "
        "deliberación de un asunto, equivale, a efectos de la votación correspondiente, a la "
        "abstención (no a voto a favor, en contra ni secreto)."
    ),
    "aux58-q15": (
        "Correcta: B. Art. 46.2 LBRL: el Pleno de las Diputaciones se celebra, como mínimo, cada mes "
        "(sesión ordinaria). No es «cada dos meses» ni un máximo de tres."
    ),
    "aux58-q16": (
        "Correcta: D. Art. 87 ROF (RD 2568/1986): se procurará que la sesión termine el mismo día de "
        "su comienzo; si terminare sin que se hubieren debatido todos los asuntos, el Presidente podrá "
        "levantar la sesión y señalar día y hora para su continuación (sin nuevas convocatorias). Las "
        "demás no recogen esa regla del art. 87."
    ),
    "aux58-q17": (
        "Correcta: C. Art. 78 ROF: la sede de la Corporación (Diputación) será fijada por acuerdo del "
        "Pleno en sesión extraordinaria especialmente convocada al efecto. No la fija el Presidente "
        "ni la Junta de Gobierno."
    ),
    "aux58-q18": (
        "Correcta: D. Art. 97 ROF: se entiende por pregunta cualquier cuestión planteada a los órganos "
        "de gobierno en el seno del Pleno. Ruego, proposición y voto particular tienen otras "
        "definiciones en el mismo Reglamento."
    ),
    "aux2021-q6": (
        "Correcta: C. Órganos necesarios de la Diputación (art. 32 LBRL): Presidente, Vicepresidentes, "
        "Pleno y Junta de Gobierno. Las Comisiones Informativas son órganos complementarios habituales. "
        "El Consejo de participación ciudadana no es órgano necesario de la Diputación."
    ),
    "aux2021-q8": (
        "Correcta: C. Art. 33 LBRL: la aprobación de la plantilla de personal corresponde al Pleno. "
        "La separación del servicio de funcionarios y la oferta pública de empleo tienen otro "
        "reparto (Presidente/Pleno según casos); la competencia residual no es del Pleno por defecto."
    ),
    "aux2021-q9": (
        "Correcta: C. Art. 36.1 LBRL (competencias propias de la Diputación): asistencia en la "
        "gestión de la recaudación tributaria (periodo voluntario y ejecutivo) y apoyo a la gestión "
        "financiera de municipios de menos de 20.000 habitantes. Las otras opciones alteran umbrales "
        "o tipifican mal el servicio (p. ej. residuos, secretaría/intervención, contratación "
        "centralizada con umbrales incorrectos)."
    ),
    "aux2017-q7": (
        "Correcta: A. En sesión extraordinaria solo pueden tratarse los asuntos de la convocatoria. "
        "Los acuerdos sobre asuntos no incluidos en el orden del día son nulos. La urgencia (mayoría "
        "absoluta) permite incluir asuntos fuera del orden del día en sesión ordinaria, no «salvar» "
        "un extraordinario sin incluirlos en la convocatoria."
    ),
    "aux2017-q36": (
        "Correcta: C. Art. 46.2.c) LBRL: el Pleno se constituye válidamente con la asistencia de un "
        "tercio del número legal de miembros, en número no inferior a tres (salvo municipios de "
        "régimen especial muy reducido). No basta con la cuarta parte ni solo con «tres» sin la "
        "fracción de un tercio."
    ),
    "aux2017-q37": (
        "Correcta: B. Art. 47.2 LBRL: se exige mayoría absoluta del número legal de miembros, entre "
        "otros supuestos, para la alteración de la calificación jurídica de los bienes demaniales o "
        "comunales. La aprobación del presupuesto y de ordenanzas fiscales sigue, con carácter "
        "general, el régimen de mayoría simple (salvo reglas específicas)."
    ),
    "aux2017-q38": (
        "Correcta: D. La convocatoria del Pleno corresponde al Presidente, salvo los supuestos "
        "previstos en la LBRL y en la legislación electoral (p. ej. convocatoria a instancia de un "
        "cuarto de los miembros, o reglas postelectorales). No es «en todo caso» ni del Secretario "
        "por sí solo."
    ),
    "aux2017-q39": (
        "Correcta: B. Art. 80 ROF: el expediente de la convocatoria incluirá el orden del día fijado "
        "por la Presidencia (junto con la documentación de los asuntos). No exige informe de "
        "legalidad de Secretaría ni las tres últimas actas como contenido mínimo de toda convocatoria."
    ),
    "aux2017-q40": (
        "Correcta: C. Art. 100 ROF / práctica del art. 46 LBRL: en caso de empate se efectúa una "
        "segunda votación y, si persiste, decide el voto de calidad de quien preside. No se entiende "
        "rechazado automáticamente ni se aplaza por el solo empate."
    ),
}

CALIBRE = {
    "De conformidad con el art. 1 CE": (
        "Correcta: A. Art. 1.1 CE: España se constituye en un Estado social y democrático de Derecho. "
        "Art. 1.2: la soberanía nacional reside en el pueblo español, del que emanan los poderes del "
        "Estado. Art. 1.3: la forma política es la Monarquía parlamentaria (no República ni Estado federal)."
    ),
    "Señale la afirmación INCORRECTA respecto del Título Preliminar": (
        "Correcta: D (es la incorrecta). El art. 14 CE (igualdad ante la ley) está en el Título I, "
        "Capítulo II, no en el Título Preliminar. Los arts. 9.2, 2 y 3.1 sí están en el Título Preliminar."
    ),
    "Respecto de la protección de los derechos, el recurso de amparo": (
        "Correcta: A. Art. 53.2 CE: el amparo ante el TC procede respecto del art. 14, de la Sección 1ª "
        "del Cap. II del Título I y de la objeción de conciencia del art. 30.2. Los principios rectores "
        "(Cap. III) no gozan, con carácter general, de esa vía."
    ),
    "La reforma constitucional del art. 168 CE": (
        "Correcta: A. Art. 168.1 CE: reforma agravada si es total o afecta al Título Preliminar, a la "
        "Sección 1ª del Cap. II del Título I o al Título II (Corona). No se dispara automáticamente por "
        "cualquier precepto del Título I (p. ej. Cap. III) ni solo por el Título VIII."
    ),
    "En el procedimiento de reforma ordinaria del art. 167": (
        "Correcta: A. Art. 167.1 CE: mayoría de tres quintos de cada Cámara. Los dos tercios del "
        "Congreso aparecen en el 167.2 como vía subsidiaria; el 168 usa dos tercios en la reforma agravada."
    ),
    "En la reforma agravada del art. 168 CE, una vez aprobada": (
        "Correcta: A. Art. 168.3 CE: aprobada la reforma por las Cortes, será sometida a referéndum "
        "para su ratificación (referéndum preceptivo, a diferencia del facultativo del art. 167.3)."
    ),
    "Según el art. 56.3 CE, los actos del Rey": (
        "Correcta: A. Art. 56.3 CE: la persona del Rey es inviolable y no está sujeta a responsabilidad; "
        "sus actos estarán siempre refrendados (salvo lo del art. 65.2 sobre la Casa del Rey). El "
        "refrendo no desaparece por la inviolabilidad."
    ),
    "De la responsabilidad por los actos del Rey": (
        "Correcta: A. Art. 64.1 CE: de los actos del Rey serán responsables las personas que los "
        "refrenden (Presidente del Gobierno / Ministros / Presidente del Congreso en los casos del 64)."
    ),
    "Señale la opción correcta sobre el art. 14 CE": (
        "Correcta: A. Art. 14 CE: los españoles son iguales ante la ley, sin que pueda prevalecer "
        "discriminación por nacimiento, raza, sexo, religión, opinión o cualquier otra condición o "
        "circunstancia personal o social. Vincula a los poderes públicos."
    ),
    "Respecto del art. 9.2 y del art. 14 CE": (
        "Correcta: A. El art. 9.2 (Título Preliminar) impone a los poderes públicos promover la "
        "igualdad real y efectiva; el art. 14 consagra la igualdad formal ante la ley. El amparo del "
        "53.2 cubre el 14, no el 9.2 como tal."
    ),
    "La LO 3/2007, de igualdad efectiva": (
        "Correcta: A. La LO 3/2007 incorpora la transversalidad (mainstreaming) del principio de "
        "igualdad en la actuación de los poderes públicos (art. 15 y concordantes): informar, "
        "planificar y evaluar con perspectiva de género."
    ),
    "Conforme al art. 141.1 CE, la provincia": (
        "Correcta: A. Art. 141.1 CE: la provincia es una entidad local con personalidad jurídica "
        "propia, determinada por la agrupación de municipios y división territorial para el "
        "cumplimiento de las actividades del Estado."
    ),
    "El gobierno y la administración autónoma de las provincias": (
        "Correcta: A. Art. 141.2 CE: el gobierno y la administración autónoma de las provincias "
        "corresponden a Diputaciones u otras Corporaciones de carácter representativo."
    ),
    "Señale la afirmación INCORRECTA sobre la autonomía local": (
        "Correcta: D (incorrecta). El art. 149.1.18.ª CE permite al Estado fijar las bases del "
        "régimen jurídico de las AAPP, pero no anula la autonomía local (arts. 137 y 140-142) ni el "
        "desarrollo autonómico compatible. Esa opción niega indebidamente la autonomía."
    ),
    "En el sistema orgánico típico de una Diputación Provincial, el Pleno": (
        "Correcta: A. El Pleno es el órgano colegiado de máxima representación política de la "
        "Diputación (Presidente + Diputados), con atribuciones indelegables clave (art. 33 LBRL)."
    ),
    "Entre las atribuciones típicas del Pleno de la Diputación NO se encuentra": (
        "Correcta: A. La política exterior es competencia del Estado. El Pleno sí interviene en "
        "organización, control de órganos de gobierno, plantilla, ordenanzas, etc. (art. 33 LBRL)."
    ),
    "La Junta de Gobierno de la Diputación": (
        "Correcta: A. Art. 32 y 34–35 LBRL: la Junta de Gobierno es órgano necesario que asiste al "
        "Presidente en el ejercicio de sus atribuciones y en las que el Pleno o el Presidente le "
        "deleguen."
    ),
    "Las Comisiones Informativas de la Diputación": (
        "Correcta: A. Órganos complementarios (ROF): estudian, informan y dictaminan los asuntos "
        "que deban someterse al Pleno o a la Junta; no sustituyen la decisión del órgano competente."
    ),
    "El art. 36 LBRL atribuye a las Diputaciones": (
        "Correcta: A. Art. 36 LBRL: competencias propias provinciales de coordinación, asistencia y "
        "cooperación municipal, garantía de servicios mínimos, prestación de servicios "
        "supramunicipales, etc."
    ),
    "Respecto de la delegación de atribuciones del Presidente": (
        "Correcta: A. El Presidente puede delegar atribuciones en Diputados o en la Junta, con "
        "reserva de las indelegables del art. 34.2 LBRL (jefatura de personal, separación del "
        "servicio, dirección del gobierno provincial, etc.)."
    ),
    "Los actos del Presidente de la Diputación se formalizan": (
        "Correcta: A. Los actos unipersonales del Presidente se formalizan habitualmente como "
        "decretos o resoluciones; los acuerdos colegiados del Pleno/Junta constan en actas y "
        "certificaciones."
    ),
    "La prestación de servicios de carácter supramunicipal": (
        "Correcta: A. Art. 36 LBRL: la Diputación presta servicios de carácter supramunicipal y de "
        "asistenciaencia a municipios, en el marco de sus competencias propias y de las encomendadas."
    ),
}

NOTE = (
    "Procede de otra convocatoria de la Diputación de Alicante "
    "(no es de la bolsa de Técnico Medio de Calidad). "
)


def load_calibre(path: str):
    text = open(path, encoding="utf-8").read()
    items = []
    for block in re.split(r"\n  \{\n", text)[1:]:
        if "oficial-dipu" in block:
            continue
        stem_m = re.search(r'stem:\s*"((?:\\.|[^"\\])*)"', block)
        expl_m = re.search(r'explanation:\s*"((?:\\.|[^"\\])*)"', block)
        corr_m = re.search(r"correct:\s*(\d)", block)
        opts_m = re.search(r"options:\s*\[(.*?)\]", block, re.S)
        if not all([stem_m, expl_m, corr_m, opts_m]):
            continue
        opts = re.findall(r'"((?:\\.|[^"\\])*)"', opts_m.group(1))
        un = lambda s: s.replace('\\"', '"').replace("\\n", "\n")
        if len(opts) != 4:
            continue
        stem = un(stem_m.group(1))
        expl = un(expl_m.group(1))
        for k, v in CALIBRE.items():
            if stem.startswith(k):
                expl = v
                break
        else:
            if not expl.startswith("Correcta"):
                letter = "ABCD"[int(corr_m.group(1))]
                expl = f"Correcta: {letter}. {expl}"
        items.append(
            {
                "stem": stem,
                "options": [un(o) for o in opts],
                "correct": int(corr_m.group(1)),
                "explanation": expl,
            }
        )
    return items


def write_tema(tema_id: int, official, fillers, target=34):
    seen = set()
    out = []

    def norm(s):
        return re.sub(r"\s+", " ", s.lower())[:120]

    def add(q, off):
        k = norm(q["stem"])
        if k in seen:
            return
        seen.add(k)
        out.append((q, off))

    for q in official:
        add(q, True)
    for q in fillers:
        if len(out) >= target:
            break
        add(q, False)

    pad = f"{tema_id:02d}"
    parts = []
    missing = []
    for i, (q, off) in enumerate(out, 1):
        qid = f"t{tema_id}-{i:02d}"
        letter = "ABCD"[q["correct"]]
        if off:
            sid = q.get("sourceId", "")
            detail = E.get(sid)
            if not detail:
                missing.append(sid)
                detail = f"Correcta: {letter}. Revisar el precepto citado en el enunciado."
            src = q.get("source", "Diputación Alicante")
            expl = f"{NOTE}{detail}"
            source_line = f"    source: {json.dumps(src, ensure_ascii=False)},\n"
            tags = "['oficial-dipu']"
        else:
            expl = q["explanation"]
            source_line = ""
            tags = "['calibre']"
        opts_js = ",\n      ".join(json.dumps(o, ensure_ascii=False) for o in q["options"])
        parts.append(
            "  {\n"
            f"    id: {json.dumps(qid)},\n"
            f"    temaId: {tema_id},\n"
            f"    stem: {json.dumps(q['stem'], ensure_ascii=False)},\n"
            f"    options: [\n      {opts_js},\n    ],\n"
            f"    correct: {q['correct']},\n"
            f"    explanation: {json.dumps(expl, ensure_ascii=False)},\n"
            f"{source_line}"
            f"    tags: {tags},\n"
            "  }"
        )
    path = f"src/data/questions/tema-{pad}.ts"
    open(path, "w", encoding="utf-8").write(
        "import type { Question } from '../../types'\n\n"
        f"/** Tema {tema_id}: mix otras convocatorias Dipu + síntesis Calibre (explicaciones ampliadas). */\n"
        f"export const TEMA_{pad}_QUESTIONS: Question[] = [\n"
        + ",\n".join(parts)
        + ",\n]\n"
    )
    avg = sum(len(p) for p in parts) // max(len(parts), 1)
    print(f"Tema {tema_id}: {len(out)} preguntas; missing={missing}; approx part size avg={avg}")


if __name__ == "__main__":
    write_tema(1, oficial["t1"], load_calibre("src/data/questions/tema-01.ts"), 34)
    write_tema(2, oficial["t2"], load_calibre("src/data/questions/tema-02.ts"), 34)
    used = {q["sourceId"] for q in oficial["t1"] + oficial["t2"]}
    print("uncovered", sorted(used - set(E)))

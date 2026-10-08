/* Refunds training - Spanish content (translated from the English source). */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    pageTitle:'Capacitación sobre reembolsos — Capacitación de tutores de Kodland',
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:'💸 Programa de capacitación para tutores',
    heroTitle:'Comprender los <span class="h-pill">reembolsos</span>',
    heroIntro:"Detrás de cada solicitud de reembolso hay un niño que estaba construyendo algo y se detuvo — y tú casi siempre eres la primera persona que podría haberlo notado. Esta capacitación trata sobre qué tan bien observas y qué tan rápido actúas.",
    heroR1:'Aprende exactamente qué observar, durante la clase y entre clases.',
    heroR2:"Practica cómo leer la vista de Progreso de un grupo en una simulación práctica del BO.",
    heroR3:"Ten claro qué te toca resolver, qué te toca reportar y a quién avisar.",
    heroWork:'Completa los 7 módulos y la lista de verificación final, y luego ve al DST. Cada módulo requiere 70% o más para desbloquear el siguiente.',
    startBtn:'🚀 Comenzar la capacitación',
    pathLabel:'Tu ruta de aprendizaje',
    devTitle:'Dev: desbloquear todos los módulos para revisión',
    backToPath:'Volver a la ruta',
    modulesPassed:'{done} / {total} módulos aprobados',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprobado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Comenzar',
    reviewBadge:'▶ Repasar',
    objective:'Objetivo',
    startCheck:'▶ Comenzar la evaluación del módulo',
    toExam:'▶ Continuar al examen final',
    doneBack:'✓ Listo — volver a la ruta',
    ixBadge:'📋 Evaluación del módulo — 70% para desbloquear el siguiente módulo',
    ixItemBadge:'📋 Evaluación del módulo — pregunta {i} de {n}',
    scoreSoFar:'Puntaje hasta ahora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'No exactamente — la respuesta correcta es “{label}”.',
    resPassed:'¡Módulo aprobado!',
    resFailed:'Todavía no lo logras',
    resUnlocked:"Desbloqueaste el siguiente módulo.",
    resNeed:'Necesitas 70% para desbloquear el siguiente módulo. Repasa la sección de arriba y vuelve a intentar la evaluación.',
    resContinue:'Continuar a la ruta de aprendizaje',
    resBack:'Volver a la ruta',
    resReview:'Repasar este módulo',
    doneEyebrow:'Examen final',
    doneTitle:'🎉 ¡Felicidades!',
    doneP1:"🎉 <strong>¡Felicidades! ¡Completaste la capacitación autodirigida para mejorar tus métricas de reembolsos!</strong>",
    doneP2:"¡Ya casi terminas! Regresa a la página de capacitación del LMS desde donde accediste a esta capacitación. El DST está disponible justo debajo de la capacitación.",
    doneP3:'👉 <strong>Debes completar y aprobar el DST para que la capacitación se considere completada con éxito.</strong> Si no completas el DST, la capacitación quedará incompleta y podría vencerse.',
    doneP4:'Asegúrate de completar el DST y obtener una calificación aprobatoria para cerrar la asignación con éxito.',
    doneP5:'¡Mucha suerte! ❤️',
    devUnlockAlert:'Modo dev: todos los módulos están desbloqueados para revisión.',
    devOn:'🔓 Modo dev ACTIVADO — todos los módulos desbloqueados',
    devOff:'🔒 Modo dev DESACTIVADO — progreso borrado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Haz',
    avoidLabel:'🚫 Evita',
    noticeLabel:'Observa:'
  },
  buildModules(){
    return [
{id:'intro', numLabel:'Introducción', emoji:'💸', color:'var(--coral)',
 title:'Por qué existe esta capacitación',
 desc:'Cómo se ve un reembolso desde el lado del niño, por qué eres la primera persona que puede verlo venir y qué parte de esto te corresponde.',
 obj:'Comprender cómo se ve un reembolso desde el lado del niño, por qué eres la primera persona que puede verlo venir y qué parte de esto te corresponde.',
 sections:[
  {t:'📋 Estás aquí por una razón específica — encuéntrala rápido', html:`
   <div class="card"><p>A continuación encontrarás los motivos por los que se te pudo haber asignado esta capacitación. Aquí solo cubrimos los reembolsos solicitados por motivos relacionados con la clase — situaciones en las que podemos ayudarte a manejarlos, no solo para prevenirlos de aquí en adelante, sino para evitar que el reembolso se concrete. Aun así, completar toda la capacitación te dará una perspectiva más amplia que también ayuda a prevenir reembolsos que surgen por otros motivos.</p></div>
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>🚩 El motivo señalado</th><th>👀 Cómo suele verse</th><th>📍 Cómo te ayuda esta capacitación</th></tr>
   <tr><td><strong>Falta de interés en la programación / en los cursos de Kodland</strong></td><td>Aburrido, hace las cosas por cumplir, “¿eso es todo?”, sin una objeción concreta a nada en particular</td><td>Módulo 5.2 · Módulo 3.6</td></tr>
   <tr><td><strong>Organización / disciplina en la clase</strong></td><td>La clase se siente caótica, un niño acapara todo, otros se quedan callados o se desconectan</td><td>Módulo 5.5 · Módulo 3</td></tr>
   <tr><td><strong>Reacción muy negativa ante los errores</strong></td><td>Se rinde rápido, se altera con errores pequeños, “no puedo hacerlo” desde temprano y a menudo</td><td>Módulo 5.1 · Módulo 3.5</td></tr>
   <tr><td><strong>Inquietud sobre la forma de enseñar del propio tutor</strong></td><td>No apunta al patrón de un niño en particular — se trata de la clase en sí</td><td>Habla directamente con tu Team Leader y tu Mentor Regional; el Módulo 3 como repaso</td></tr>
   </table></div></div>
  `},
  {t:'💔 Un reembolso es un niño que deja de aprender', html:`
   <div class="card"><p>Detrás de cada solicitud de reembolso hay un niño que estaba construyendo algo y se detuvo. Un grupo que se achica. Una familia que confió en nosotros y decidió que no valía la pena seguir con nosotros.</p>
   <p>De eso trata esta capacitación. No de un número en un tablero — de un niño concreto, en uno de tus grupos, que se está alejando ahora mismo y no sabe cómo decirlo.</p></div>
   <img src="Images/Image_1.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
  `},
  {t:'📉 Los reembolsos casi nunca son repentinos', html:`
   <div class="card"><p>Esto es lo más útil que debes saber sobre ellos. Para cuando una familia pide que le devuelvan su dinero, la historia suele llevar semanas en marcha — y la mayor parte ocurrió <strong>frente al tutor.</strong></p></div>
   ${stepFlow([
     {ic:'📋', label:'Deja de terminar el trabajo en clase'},
     {ic:'🏠', label:'Deja de entregar la tarea'},
     {ic:'📵', label:'Empieza a faltar a clases'},
     {ic:'☎️', label:'La familia llama a alguien'}
   ])}
   <div class="card"><p>En las clases previas a una solicitud de reembolso, el patrón es constante:</p></div>
   ${bigStat('39%→56%', `<p><strong>Las inasistencias a clase</strong> aumentan bruscamente en el tramo final antes de una solicitud de reembolso.</p>`)}
   ${bigStat('35%→15%', `<p><strong>La tasa de tareas completadas</strong> cae igual de bruscamente en el mismo período.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted);margin-top:-4px;margin-bottom:14px">Basado en patrones históricos de distintos grupos; las cifras exactas pueden variar según la región.</p>
   ${co('co-danger','🚨',`<p><strong>Esta es la parte que más te importa.</strong></p><p>Un niño que está por dejar el curso puede verse completamente normal en la clase que estás dando. El derrumbe no está en su atención mientras está ahí — está en <strong>presentarse y hacer el trabajo.</strong> Así que “en clase se ve bien” no es prueba de que todo esté bien.</p>`)}
  `},
  {t:'🦸 Por qué eres la persona más importante en esto', html:`
   ${co('co-idea','💡',`<p><strong>Eres la única persona que ve a este niño, en este grupo, todas las semanas.</strong> Nadie en Atención al Cliente, en Operaciones Académicas ni en el equipo de Clases de Prueba puede ver a un niño quedarse callado o dejar de intentarlo. <strong>Tú sí.</strong> Toda esta capacitación se resume en dos cosas: <strong>qué tan bien observas y qué tan rápido actúas.</strong></p>`)}
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Totalmente tuyo</th><th>🔁 Te toca adaptarte — y reportarlo</th><th>🚫 Fuera de nuestro control</th></tr>
   <tr><td>El niño se siente motivado y acompañado en cada clase</td><td><strong>Nivel demasiado difícil o demasiado fácil.</strong> Adapta la tarea ahora. Repórtalo para que se revise.</td><td>Salud</td></tr>
   <tr><td>Cada niño tiene un turno real y una respuesta real</td><td><strong>Una necesidad especial de la que nadie te avisó.</strong> Adapta tu enfoque. Repórtalo.</td><td>Circunstancias familiares</td></tr>
   <tr><td>Notas las primeras señales de que se está alejando — y actúas</td><td><strong>Grupo numeroso y animado.</strong> Es una habilidad que se aprende — ajusta tu enfoque. Repórtalo si la brecha sigue siendo demasiado grande.</td><td>La situación económica de la familia</td></tr>
   <tr><td>La familia siente que una persona real sigue el progreso</td><td><strong>Un cambio de tutor, grupo u horario cayó mal.</strong> Sé transparente, coordina rápido.</td><td></td></tr>
   <tr><td>Un niño que faltó a clases realmente se pone al día</td><td><strong>A la familia le dijeron algo distinto al inscribirse.</strong> Aclara con honestidad. Repórtalo.</td><td></td></tr>
   </table></div></div>
   ${co('co-danger','🚨',`<p><strong>Nada de esto es tu culpa — pero el trabajo real sigue siendo tuyo.</strong> Adaptar la tarea, cambiar cómo manejas el grupo, proteger a un niño durante un cambio. E igual de importante: <strong>avísale a alguien.</strong> Informa a tu Team Leader, involucra a Atención al Cliente, deja el comentario en el BO. Si no lo haces, el problema queda en silencio — y unas semanas después, perdemos al niño.</p>`)}
  `},
  {t:'💬 Hablar con las familias: qué haces tú y en qué momento lo derivas', html:`
   <img src="Images/Image_2.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Los padres van a querer hablar contigo sobre el aprendizaje de su hijo — <strong>eso es parte de tu trabajo</strong>, y debes mostrarte cálido y disponible.</p>
   <p>Lo que <strong>no</strong> puedes hacer es la <em>acción</em>: cambiar a un niño de grupo, modificar un horario, un nivel o un paquete, ni aprobar una clase extra. Eso le corresponde a Atención al Cliente — y solo pueden actuar si tú les avisas.</p></div>
   ${co('co-idea','💡',`<p><strong>La regla: habla del aprendizaje. Deriva la acción.</strong> Eres el puente entre la clase y las personas que pueden cambiar la situación del niño — y un puente solo sirve si las cosas lo cruzan <strong>rápido.</strong></p>`)}
  `},
  {t:'🔀 El orden importa: primero el Team Leader, después la familia', html:`
   <div class="card"><p>Hay una secuencia que debes respetar, y equivocarse en ella es justamente cómo mensajes bien intencionados terminan creando problemas.</p></div>
   ${co('co-danger','🚨',`<p><strong>Siempre que la situación involucre algo más allá de tu propia enseñanza</strong> — nivel, grupo, horario, una necesidad especial, una promesa incumplida, una clase perdida — <strong>no le escribas primero a la familia.</strong></p>`)}
   ${stepFlow([
     {ic:'👩‍💼', label:'1. Coordina con tu Team Leader — explica lo que viste, involucra a Atención al Cliente, deja un comentario en el BO'},
     {ic:'🧭', label:'2. Acuerden la estrategia — qué hay realmente disponible para este niño y qué no'},
     {ic:'👪', label:'3. Después, la familia — exactamente lo que acordó tu Team Leader, nada más'}
   ])}
   <div class="card"><p>Así nunca tienes que adivinar, nunca prometes de más y nunca tienes que retractarte.</p></div>
   ${co('co-danger','🚨',`<p><strong>Explicar soluciones y opciones no te corresponde, ni siquiera después de coordinar.</strong> Tu Team Leader te dirá una de dos cosas:</p>
   <ul><li><em>“Dile X a la familia”</em> → di exactamente eso, nada más</li>
   <li><em>“Nosotros nos encargamos desde aquí”</em> → <strong>tú te mantienes al margen.</strong> Dos voces dándole a una familia versiones distintas es como se rompe la confianza.</li></ul>`)}
  `},
  {t:'📌 Lo que siempre puedes decir y lo que siempre espera', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Siempre tuyo — escribe libremente, con calidez y buena disposición</th><th>⏸️ Siempre espera a tu Team Leader</th></tr>
   <tr><td>Cómo va el niño, qué hizo bien, qué le está costando</td><td>Cualquier cosa sobre <strong>niveles, cursos, grupos, horarios, formatos o paquetes</strong></td></tr>
   <tr><td>Qué <strong>apoyo le estás dando tú</strong> en la clase y qué adaptaste</td><td>Cualquier <strong>opción, solución o próximo paso</strong> para que la familia elija</td></tr>
   <tr><td>Que notaste que le está costando y que te importa cómo se siente</td><td>Cualquier <strong>explicación de cómo algo salió mal</strong>, o por qué</td></tr>
   <tr><td>Preguntar qué ayuda a este niño a aprender mejor</td><td>Cualquier cosa relacionada con <strong>dinero</strong></td></tr>
   <tr><td>Una clase perdida y qué debe ponerse al día</td><td>Cualquier confirmación de que algo <strong>va a</strong> o <strong>no va a</strong> pasar</td></tr>
   <tr><td>Que planteaste algo con tu equipo, en términos generales, sin detalles</td><td>Cualquier detalle sobre <strong>lo que reportaste internamente</strong></td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p><strong>La diferencia en una línea: tú hablas del niño. Tu Team Leader y Atención al Cliente hablan de las condiciones del servicio.</strong></p>`)}
   ${co('co-danger','⛔',`<p><strong>Nunca prometas y nunca te niegues.</strong></p><p>Ni <em>“lo vamos a pasar a otro grupo”</em>. Ni <em>“eso no es posible”</em>. Ambas son decisiones que no te corresponden.</p>
   <p><strong>Pero tampoco seas frío ni evasivo.</strong> Lo que siempre debes mostrar, de inmediato, es que de verdad quieres que este niño esté cómodo y tenga la mejor experiencia de aprendizaje posible — y que ya estás trabajando en ello. <em>“Lo vi, me importa, estoy viendo qué podemos hacer y le vuelvo a escribir.”</em> Eso no es una promesa. Es lo que mantiene a una familia con nosotros mientras se encuentra la respuesta.</p>`)}
   <div class="card"><p><strong>Siempre puedes escribir directamente, sin consultar antes,</strong> sobre lo cotidiano de la enseñanza: cómo fue la clase, algo que el niño hizo bien, una clase perdida y qué debe ponerse al día, una pregunta sobre cómo le va en casa. Muéstrate disponible y cálido en todo eso — es tu trabajo, y es lo que hace posibles las conversaciones más difíciles más adelante.</p></div>
  `}
 ],
 ix:{
  title:'Qué es mío, qué adapto y reporto, qué no es mío',
  instr:'Clasifica cada situación real en la zona correcta. 70% para desbloquear el Módulo 1.',
  items:[
   {type:'sort', prompt:'“En un grupo grande, un estudiante se pierde y no logra participar” —', card:'En un grupo grande, un estudiante se pierde y no logra participar', zones:[
     {label:'Totalmente mío', fb:'No exactamente — empieza por cambiar tu propio enfoque, pero si la brecha sigue siendo demasiado grande después de intentarlo de verdad, eso también hay que reportarlo.'},
     {label:'Me toca adaptar y reportar', fb:'Correcto — es una habilidad de manejo de grupo que puedes cambiar tú mismo desde la próxima clase, y la reportas si después de intentarlo sigue sin ser suficiente.'},
     {label:'Fuera de nuestro control', fb:'No exactamente — es una habilidad de manejo de grupo, y empieza por adaptar tu propio enfoque.'}
   ], correctZone:1, fb:''},
   {type:'sort', prompt:'“Cambió la situación económica de la familia” —', card:'Cambió la situación económica de la familia', zones:[
     {label:'Totalmente mío', fb:'No exactamente — la situación económica de una familia está realmente fuera de nuestro control.'},
     {label:'Me toca adaptar y reportar', fb:'No exactamente — la situación económica de una familia está realmente fuera de nuestro control; no es algo a lo que adaptarse.'},
     {label:'Fuera de nuestro control', fb:'Correcto — es una causa genuinamente fuera de nuestro control. Sé amable, no esperes nada y no insistas.'}
   ], correctZone:2, fb:''},
   {type:'sort', prompt:'“El nivel es demasiado avanzado para su edad” —', card:'El nivel es demasiado avanzado para su edad', zones:[
     {label:'Totalmente mío'},
     {label:'Me toca adaptar y reportar', fb:'Correcto — adapta la tarea ahora y repórtalo para que se revise el nivel.'},
     {label:'Fuera de nuestro control'}
   ], correctZone:1, fb:'No exactamente — puedes adaptar la tarea de inmediato, y también debes reportarlo para que se revise el nivel. Ambas partes importan.'},
   {type:'sort', prompt:'“Dejó de entregar la tarea” —', card:'Dejó de entregar la tarea', zones:[
     {label:'Totalmente mío', fb:'Correcto — notarlo y actuar (una conversación individual, ajustar tu enfoque) es completamente tuyo.'},
     {label:'Me toca adaptar y reportar'},
     {label:'Fuera de nuestro control'}
   ], correctZone:0, fb:'No exactamente — notar una caída en la tarea y tener una conversación individual está totalmente dentro de tu propia enseñanza; no hace falta reportarlo, salvo que apunte a un problema mayor, como un nivel que no corresponde.'},
   {type:'sort', prompt:'“Nadie me dijo que tiene una necesidad educativa especial” —', card:'Nadie me dijo que tiene una necesidad educativa especial', zones:[
     {label:'Totalmente mío'},
     {label:'Me toca adaptar y reportar', fb:'Correcto — adapta todo lo que puedas en la clase y repórtalo para que se puedan evaluar opciones como el formato individual.'},
     {label:'Fuera de nuestro control'}
   ], correctZone:1, fb:'No exactamente — adaptas tu enfoque de inmediato y también lo reportas para que se consideren opciones más amplias.'},
   {type:'sort', prompt:'“La familia dice que le prometieron algo distinto” —', card:'La familia dice que le prometieron algo distinto', zones:[
     {label:'Totalmente mío'},
     {label:'Me toca adaptar y reportar', fb:'Correcto — no puedes cambiar el pasado, pero aclaras con honestidad y lo reportas para que la conversación se dé entre los departamentos.'},
     {label:'Fuera de nuestro control'}
   ], correctZone:1, fb:'No exactamente — hay que reportarlo para que no se repita, aunque el desajuste en sí no haya sido culpa tuya.'},
   {type:'sort', prompt:'“El niño se aburre y termina en diez minutos” —', card:'El niño se aburre y termina en diez minutos', zones:[
     {label:'Totalmente mío'},
     {label:'Me toca adaptar y reportar', fb:'Correcto — dale ahora un desafío adicional real y repórtalo como un posible caso de nivel demasiado fácil.'},
     {label:'Fuera de nuestro control'}
   ], correctZone:1, fb:'No exactamente — el aburrimiento por un nivel fácil necesita un desafío adicional inmediato en tu clase, además de un reporte para que se revise el nivel.'}
  ]
 }
},
{id:'m1', numLabel:'Módulo 1', emoji:'👀', color:'var(--blue)',
 title:'Aprender a verlo a tiempo',
 desc:'Qué observar durante la clase y entre clases, y en qué momento debes actuar.',
 obj:'Saber exactamente qué observar durante la clase y entre clases, distinguir entre un niño que tiene una mala semana y uno que está por irse, y saber en qué momento debes actuar.',
 sections:[
  {t:'', html:`<div class="card"><p>Este es el módulo más importante de la capacitación. Todo lo demás depende de que lo notes a tiempo.</p></div>`},
  {t:'👁️ 1.1 · Qué notar durante la clase', html:`
   <div class="card"><p>Estas son las señales que nadie más en la empresa puede ver. No necesitas un reporte para leerlas — necesitas estar atento.</p></div>
   <img src="Images/Image_4.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   ${iconGrid([
     {ic:'📷', html:`<strong>La cámara se apaga</strong> y se queda apagada, cuando antes estaba encendida. Es la señal temprana de retraimiento más común — los niños que terminan yéndose pasan aproximadamente <strong>la mitad</strong> del tiempo con la cámara encendida que sus compañeros.`},
     {ic:'🎤', html:`<strong>Deja de usar el micrófono</strong> por completo — aproximadamente <strong>un tercio</strong> del tiempo de micrófono de sus compañeros. Un niño que dejó de hablar normalmente dejó de sentirse parte del grupo.`},
     {ic:'💬', html:`<strong>Respuestas de una sola palabra</strong>, donde antes había oraciones completas. Si es un cambio, no es timidez — un cambio es una señal.`},
     {ic:'🖥️', html:`<strong>Deja de compartir su pantalla</strong> durante el trabajo individual. A menudo significa “no quiero que veas que estoy atascado” o “todavía no empecé”.`},
     {ic:'📝', html:`<strong>Empieza el trabajo en clase pero nunca lo termina</strong> — la versión más clara, dentro de la clase, de quedarse atrás.`},
     {ic:'✋', html:`<strong>Levanta la mano y no le dan la palabra</strong> — y deja de levantarla. <strong>Esta depende de nosotros.</strong>`},
     {ic:'⏰', html:`<strong>Llega tarde, se va temprano o entra y sale.</strong> La atención está bien; el compromiso, no.`},
     {ic:'😞', html:`<strong>Se queda callado o se frustra rápido</strong> después de un error, sobre todo si es un comportamiento nuevo.`},
     {ic:'⚡', html:`<strong>Termina en la mitad del tiempo y luego interrumpe.</strong> También es un problema de nivel — el aburrimiento se ve exactamente igual que la desconexión.`},
     {ic:'🔁', html:`<strong>Hace la misma pregunta básica una y otra vez.</strong> Probablemente el nivel no es el adecuado — ver el Módulo 5.`}
   ])}
   ${co('co-idea','💡',`<p><strong>El truco es comparar, no juzgar.</strong> Nada de esto significa algo por sí solo. Todo significa algo en el momento en que es <strong>distinto de cómo suele ser ese niño</strong>, o <strong>distinto del resto del grupo en la misma clase.</strong></p>`)}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">La mano a la que nunca le dan la palabra</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/12AOW3X9Vgm_cVzeOdjX5HN7Z2j-JV-lK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">En este video verás a un estudiante que intenta comunicarse con su tutor por el chat, pero el tutor no parece notarlo.</div></div>
  `},
  {t:'📅 1.2 · Qué notar entre clases', html:`
   <div class="card"><p>Entre clases tienes algo que la clase en vivo no te puede dar: el registro de si el niño realmente está haciendo el trabajo. Son dos cosas distintas, y <strong>ambas importan.</strong></p></div>
   ${iconGrid([
     {ic:'🏫', html:`<strong>Trabajo en clase (En clase)</strong> — lo que el niño completa durante la clase misma. Te dice si puede seguir el ritmo <strong>mientras tú estás ahí</strong>. Cuando esto baja, el problema es la dificultad o la participación en la clase.`},
     {ic:'🏠', html:`<strong>Tarea (En casa)</strong> — lo que el niño completa por su cuenta. Te dice si el curso sigue importando <strong>cuando tú no estás</strong>, y si la familia lo respalda. Es la señal más difícil y más honesta.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Observa ambas. Actúa ante cualquiera.</strong></p><p>Un niño puede estar bien en el trabajo en clase y en cero en la tarea — eso es un problema de motivación y de apoyo familiar. Un niño puede hacer la tarea pero fallar en el trabajo en clase — eso suele ser un problema de dificultad o de distracción en la clase. Cualquiera de los dos, por sí solo, basta para actuar. <strong>No esperes a que fallen ambos.</strong></p>`)}
   ${bigStat('47%',`De los niños que terminan solicitando un reembolso <strong>asiste a menos de la mitad</strong> de sus clases. La asistencia no es un trámite — es la señal más visible que da una familia sobre si este curso todavía le importa.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Basado en patrones históricos de distintos grupos; la cifra exacta puede variar según la región.</p>
  `},
  {t:'🔎 1.3 · El error que casi todos cometen', html:`
   <div class="card"><p>La mayoría de los tutores busca una <strong>caída</strong> — un momento en que las cosas empeoraron. Ese instinto pasa por alto la mayoría de los casos.</p></div>
   ${co('co-danger','🚨',`<p><strong>No busques una caída. Busca un vacío.</strong></p>`)}
   ${bigStat('58.6%',`De los casos de reembolso tenían la tarea <strong>plana, no en descenso</strong> — el niño ya había dejado de hacerla, o nunca había empezado de verdad. No había ninguna caída que notar.`)}
   ${bigStat('56.9%',`De los casos tenían el trabajo en clase <strong>en descenso</strong> — por eso suele ser la señal visible más temprana de las dos.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Basado en patrones históricos de distintos grupos; las cifras exactas pueden variar según la región.</p>
  `},
  {t:'💔 1.4 · Por qué no hacer la tarea puede predecir un reembolso', html:`
   <img src="Images/Image_6.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Vale la pena tenerlo claro, porque cambia la urgencia con la que lo tratas.</p>
   <p>Un niño que no hace el trabajo se queda atrás. Un niño que se queda atrás se siente perdido en la clase. Un niño que se siente perdido en la clase deja de querer venir. La familia ve a un niño que no quiere ir a clase y concluye: <em>“no le interesa”</em> o <em>“este curso no es para él”</em>.</p></div>
   ${co('co-idea','💡',`<p>Para cuando un padre usa esas palabras, está describiendo una espiral que empezó con <strong>tres proyectos sin entregar.</strong> El trabajo que falta no es solo un síntoma de un niño que ya decidió irse — es parte de lo que lo lleva a decidirlo.</p>`)}
   ${co('co-idea','📌',`<p><strong>Entonces: una racha de trabajo en clase o de tareas sin entregar es motivo suficiente para actuar.</strong> No es algo para vigilar. No es algo para plantear solo si empeora. <strong>Actúa.</strong></p>`)}
  `},
  {t:'🧩 1.5 · Los tres patrones', html:`
   <div class="card"><p>Cuando revisas las últimas clases de un niño, vas a ver una de tres formas. Cada una significa algo distinto y requiere una respuesta distinta.</p></div>
   ${patternCards([
     {ic:'🐌', title:'El descenso lento', desc:'La asistencia y el trabajo van cayendo poco a poco a lo largo de varias clases; cada vez falta más; cámara apagada', note:'Alejamiento clásico. <strong>Este es el que puedes revertir</strong> — cuanto antes actúes, más probable es lograrlo. → Módulos 3 y 4'},
     {ic:'🧱', title:'El corte repentino', desc:'Normal, normal, normal — y luego nada', note:'Algo pasó. Un choque de horarios, un incidente, algo en casa. <strong>Pregunta. No supongas.</strong> → Módulo 4'},
     {ic:'✅', title:'Participa y aun así se va', desc:'Asiste, participa, hace el trabajo — y la familia igual pide irse', note:'<strong>La causa no es la participación, y no eres tú.</strong> Más motivación no lo va a resolver. <strong>Encuentra el motivo real y derívalo rápido.</strong> → Módulos 5 y 6'}
   ])}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">El estudiante que nunca se presentó</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RfFI5FTMg3DBHEiJtoG9DpJyjVoHFv74/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Uno de los casos más críticos, y uno que debe reportarse de inmediato: un estudiante que no ha asistido desde la primera clase.</div></div>
  `},
  {t:'🚦 1.6 · Cuándo debes actuar', html:`
   <div class="card"><p>No necesitas estar seguro. Necesitas un umbral, para que “no estaba seguro” deje de ser una razón para no hacer nada.</p><p><strong>Actúa esta semana si se cumple cualquiera de estas condiciones:</strong></p></div>
   ${iconGrid([
     {ic:'📉', html:`El niño asiste a <strong>menos de la mitad</strong> de sus clases`},
     {ic:'📊', html:`El trabajo en clase o la tarea está <strong>muy por debajo del promedio del grupo</strong> — como regla general, 15 puntos o más`},
     {ic:'🤔', html:`La asistencia está en un punto intermedio — no desapareció, pero no es confiable — <strong>y</strong> además se cumple una de las anteriores`},
     {ic:'0️⃣', html:`<strong>Dos o más clases seguidas</strong> sin nada entregado`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Y actúa de inmediato, sin importar ningún número, si:</strong> el niño dejó de hablar o de aparecer en cámara cuando antes lo hacía · intentó participar y no llegaste a darle la palabra · te dijo que algo anda mal · tienes un mal presentimiento. <strong>Tu criterio cuenta como señal.</strong></p>`)}
  `}
 ],
 ix:{
  title:'¿Descenso lento, corte repentino o participa y aun así se va?',
  instr:'Para cada historial de progreso anonimizado, elige qué patrón es — y luego elige el primer paso correcto. 70% para desbloquear el Módulo 2.',
  items:[
   {type:'choice', prompt:'La asistencia y el trabajo en clase de un niño han ido bajando en silencio durante las últimas cinco clases, un poco más cada vez, y la cámara ha estado apagada en las dos últimas.', opts:['El descenso lento','El corte repentino','Participa y aun así se va'], correct:0, fb:'Es el descenso lento — alejamiento clásico, y el que con más probabilidad puedes revertir cuanto antes actúes.'},
   {type:'choice', prompt:'Un niño estuvo completamente normal la clase pasada — asistencia completa, cámara encendida, tarea hecha — y esta semana simplemente no se conectó, sin avisar.', opts:['El descenso lento','El corte repentino','Participa y aun así se va'], correct:1, fb:'Es el corte repentino. Algo pasó — pregunta, no supongas.'},
   {type:'choice', prompt:'Un niño ha asistido a todas las clases, participa y entrega todo su trabajo — y la familia acaba de pedir cancelar de todos modos.', opts:['El descenso lento','El corte repentino','Participa y aun así se va'], correct:2, fb:'Participa y aun así se va. La causa no es la participación — es algo como el nivel, las expectativas, el horario o las circunstancias. Más motivación no lo va a resolver; encuentra el motivo real y derívalo.'},
   {type:'choice', prompt:'Para “el descenso lento”, ¿cuál es el primer paso correcto?', opts:['Esperar algunas clases más para confirmar que es un patrón real','Actuar ahora — es el que con más probabilidad se revierte cuanto antes actúes','Suponer que es temporal y volver a revisar el próximo mes'], correct:1, fb:'Los descensos lentos son justamente lo que una acción temprana puede revertir. Esperar desperdicia la ventaja que tienes.'},
   {type:'choice', prompt:'Para “el corte repentino”, ¿cuál es el primer paso correcto?', opts:['Suponer que no es nada y esperar a que vuelva por su cuenta','Preguntar — averiguar qué pasó realmente, en lugar de adivinar','Decirle de inmediato a la familia que su hijo se está quedando atrás'], correct:1, fb:'Un corte repentino tiene una causa específica. Averigua cuál es antes de decidir qué hacer al respecto.'},
   {type:'choice', prompt:'Para “participa y aun así se va”, ¿cuál es el primer paso correcto?', opts:['Darle al niño más elogios y ánimo para intentar mantenerlo motivado','Averiguar cuál es el motivo real — nivel, expectativas, horario, circunstancias — y derivarlo rápido','Concluir que no se puede hacer nada porque al niño ya le iba bien'], correct:1, fb:'Más motivación no puede resolver una causa que nunca tuvo que ver con la motivación. Averigua cuál es y hazla llegar rápido a la persona indicada.'}
  ]
 }
},
{id:'m2', numLabel:'Módulo 2', emoji:'🖥️', color:'var(--blue)',
 title:'Leer la vista de Progreso',
 desc:'Descubre, en menos de dos minutos, si un niño de tu grupo se está alejando — de forma práctica, en una simulación del BO.',
 obj:'Descubrir, en menos de dos minutos, si un niño de tu grupo se está alejando — y revisar las dos cosas que siempre debes saber antes de tu primera clase con un estudiante nuevo.',
 sections:[
  {t:'👤 2.1 · Antes de tu primera clase con un estudiante nuevo — siempre', html:`
   <div class="card"><p>Uno de los pasos más importantes antes de empezar con un grupo nuevo — y uno que puede prevenir muchos problemas después — es revisar el perfil del estudiante y los comentarios de Atención al Cliente.</p></div>
   ${iconGrid([
     {ic:'🎂', html:`<strong>Edad adecuada.</strong> Si la edad del niño corresponde al curso en el que está inscrito.`},
     {ic:'🎯', html:`<strong>Intereses.</strong> Qué le gusta a este niño — útil para ejemplos y para conversar desde la primera clase.`},
     {ic:'📝', html:`<strong>Notas de los padres o de tutores anteriores.</strong> Sobre todo si el niño viene transferido de otro grupo.`}
   ])}
   ${co('co-idea','💡',`<p>Esta información te ayuda a entender cómo conectar con cada estudiante y a detectar posibles problemas o solicitar cambios <strong>antes de que el grupo siquiera empiece.</strong></p>`)}
   <div class="card"><p>En la siguiente simulación aprenderás a revisar esta información en el BO y a usarla para preparar tu nuevo grupo.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Perfil del estudiante</span><iframe src="Simulacion_BO_M2_Profile_ES.html" title="BO — Perfil del estudiante" loading="lazy"></iframe></div></div>
  `},
  {t:'📊 2.2 · La vista de Progreso — tu revisión semanal de 60 segundos', html:`
   <div class="card"><p>Abajo verás exactamente cómo se ve la pantalla de Progreso. Sigue los pasos de la simulación para aprender dónde están el trabajo en clase y la tarea, qué significa cada color y cómo leer el patrón.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Progreso</span><iframe src="Simulacion_BO_M2_Progress_ES.html" title="BO — Progreso" loading="lazy"></iframe></div></div>
   ${co('co-danger','🚨',`<p>Mira lo que te dice la pantalla de este estudiante: puntajes altos, en verde, en <strong>En clase</strong> — pero cada una de las celdas de <strong>En casa</strong> está en naranja, “no entregado”. <strong>Mismo estudiante, mismas clases, historia opuesta.</strong> Está bien mientras tú lo observas; el curso deja de importar en cuanto no estás.</p>`)}
   <div class="card"><h4>Cómo leerla en menos de un minuto</h4>
   <ol><li><strong>Busca rachas de ceros.</strong> <strong>Dos seguidos bastan para actuar.</strong> Una racha consecutiva es lo más contundente de esta pantalla — mucho más informativa que cualquier celda aislada.</li>
   <li><strong>Compara las dos pestañas del mismo niño.</strong> En clase alto, En casa vacío → está contigo en la clase, pero el curso dejó de importar en casa. En clase bajo, En casa aceptable → algo en la clase no está funcionando: la dificultad, el ritmo o la atención.</li>
   <li><strong>Compara al niño con el resto del grupo.</strong> Los mismos números significan cosas distintas según si todos están en 30/50 o solo este niño.</li>
   <li><strong>Fíjate dónde empieza la racha.</strong> ¿En qué clase comenzó? Vuelve a lo que pasó ahí — generalmente ahí está la respuesta.</li>
   <li><strong>Revisa la asistencia junto con esto.</strong> Lo que ves aquí es la asistencia registrada en el Back Office, no la presencia durante la clase — léela como “¿vino?”, no como “¿qué tan involucrado estuvo?”.</li></ol></div>
   ${co('co-danger','🚨',`<p><strong>Haz esto una vez por semana, para todo el grupo, no solo para el niño que ya te preocupa.</strong> El sentido de una revisión es encontrar al que <em>todavía no</em> notaste.</p>`)}
   ${co('co-idea','🧭',`<p><strong>¿Das un curso en el que la tarea o el trabajo en clase se hacen fuera de la plataforma?</strong> La vista de Progreso no te mostrará nada útil — pero lo que falta es el registro, no la información. Hazlo de forma deliberada en lugar de automática: pide a los niños que muestren su trabajo compartiendo pantalla, haz revisiones frecuentes durante el trabajo individual, asigna la tarea explícitamente en voz alta y dale seguimiento por nombre en la próxima clase. Las mismas señales, los mismos umbrales — solo que tienes que ir a buscarlos tú.</p>`)}
  `}
 ],
 ix:{
  title:'Leer la revisión — evaluación rápida',
  instr:'Según el ejemplo del BO de arriba, responde estas preguntas. 70% para desbloquear el Módulo 3.',
  items:[
   {type:'choice', prompt:'En el ejemplo de arriba, los puntajes de En clase de este estudiante se mantuvieron altos (verde), mientras que En casa estaba en “no entregado” (naranja) en todas las clases. ¿Qué es lo más probable que signifique?', opts:['Un problema de tarea o motivación — el curso dejó de importar cuando el tutor no está mirando','Un problema de trabajo en clase o de dificultad en la clase misma','Nada — una pestaña baja no importa si la otra está bien'], correct:0, fb:'Un En clase alto con En casa vacío apunta a la motivación o al apoyo familiar en casa, no a una dificultad en la clase.'},
   {type:'choice', prompt:'Si fuera al revés — En clase bajando hacia cero mientras En casa se mantiene razonable — ¿qué es lo más probable que signifique?', opts:['Un problema de tarea o motivación en casa','Un problema de trabajo en clase o de dificultad — el ritmo, la dificultad o no recibir suficiente atención en la clase','Este estudiante en realidad está bien, porque sigue haciendo la tarea'], correct:1, fb:'Que la tarea se mantenga mientras el trabajo en clase cae suele apuntar a algo de la clase misma — la dificultad, el ritmo o la atención.'},
   {type:'choice', prompt:'¿Qué es lo más importante que debes buscar al revisar una vista de Progreso?', opts:['El puntaje más bajo de toda la cuadrícula','Una racha de dos o más ceros (o “no entregado”) seguidos','Si el total del módulo parece un número redondo'], correct:1, fb:'Una racha consecutiva es mucho más informativa que cualquier celda baja aislada — es la señal más clara de toda la pantalla.'},
   {type:'choice', prompt:'¿Por qué debes revisar tanto En clase como En casa para cada niño, cada semana — y no solo para el niño que ya te preocupa?', opts:['Porque el sentido de una revisión semanal es encontrar al niño que todavía no notaste','Porque es un requisito formal, no porque encuentre algo nuevo','Porque En casa es más importante que En clase, así que es la única que vale la pena revisar'], correct:0, fb:'Una revisión solo vale la pena si saca a la luz al niño que no estaba en tu radar.'},
   {type:'choice', prompt:'Antes de tu primera clase con un estudiante nuevo, ¿qué debes revisar siempre?', opts:['Nada — irás aprendiendo lo que necesitas saber a medida que le enseñes','Los campos Información y Comentarios del perfil del estudiante','Solo su registro de asistencia con su tutor anterior'], correct:1, fb:'Dos minutos en Información y Comentarios antes de la primera clase es el hábito más sencillo y de mayor valor de esta capacitación.'}
  ]
 }
},
{id:'m3', numLabel:'Módulo 3', emoji:'🎬', color:'var(--blue)',
 title:'Actuar en la clase',
 desc:'Usa la clase misma como intervención — la participación es la herramienta más rápida que tienes.',
 obj:'Usar la clase misma como intervención — porque a una clase virtual, opcional y fuera del horario escolar un niño solo vuelve si encontró algo por lo que valga la pena volver.',
 sections:[
  {t:'🔌 3.1 · Por qué aquí la participación pesa más', html:`
   <div class="card"><p>Nuestros estudiantes no están obligados a estar aquí como en la escuela. Están en casa, con todas las distracciones a un clic de distancia, y sin la presencia física que sostiene la atención en un salón real. <strong>La conexión que construyes en cada clase no es un extra agradable — es la razón por la que un niño decide volver la semana siguiente.</strong></p>
   <p>Y cuando un niño empieza a alejarse, la clase es tu herramienta más rápida. No necesitas el permiso de nadie para cambiar cómo la diriges.</p></div>
  `},
  {t:'👋 3.2 · Los primeros minutos deciden mucho', html:`
   <div class="card"><p>Cómo empieza una clase marca el tono de todo lo que sigue. Un niño que se conecta y siente calidez en el saludo tiene una disposición muy distinta de la de uno al que se lanza directo a “abran la actividad”.</p></div>
   ${doavoid(
     ['Saluda con energía real: <em>“qué gusto verte hoy”</em>','Haz una pregunta breve y personal antes del contenido','Di cuál es el objetivo de hoy, y que se note que lo dices en serio','Menciona en voz alta a quien estuvo ausente: <em>“qué bueno tenerte de vuelta”</em>'],
     ['Entrar directo al contenido sin saludar','Sonar apurado o estresado al comienzo','No explicar lo que vas a hacer, ni por qué','Dejar que un niño que regresa pase desapercibido']
   )}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Un inicio sin energía</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1GyQV2tEQq3OuDPfFI0NZTQRjWhg_9Rri/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Un inicio cálido</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RqXcQLKBiWEhV97ZasJGIFuJhB8yU0Dh/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'💬 3.3 · Retroalimentación que motiva en lugar de solo corregir', html:`
   <div class="card"><p>Un elogio genérico repetido — <em>“bien”, “muy bien”</em> — pierde fuerza rápido y, sin decirlo, transmite el mensaje opuesto: que no estás mirando de verdad el trabajo del niño.</p></div>
   ${co('co-idea','🔁',`<p><strong>Destacar → Preguntar → Activar</strong></p>
   <ol><li><strong>Destaca</strong> algo específico que el niño <em>decidió</em> hacer, y di por qué funciona.</li>
   <li><strong>Pregunta</strong> al respecto con curiosidad genuina, tratándolo como la autoridad sobre su propio trabajo.</li>
   <li><strong>Activa</strong> ofreciendo una elección real sobre lo que sigue.</li></ol>
   <p>En lugar de <em>“¡Buen trabajo!”</em> → <em>“Me encantó que hicieras saltar al personaje justo ahí — ¿lo planeaste desde el principio o se te ocurrió mientras armabas la escena? ¿Quieres darle una historia a este personaje o sientes que ya está terminado así?”</em></p>`)}
  `},
  {t:'✋ 3.4 · Que cada niño tenga un turno real', html:`
   <div class="card"><p>Los niños vuelven porque encontraron un lugar donde se sienten vistos y parte de algo. Y la forma más rápida de perder a uno es que intente participar y no reciba nada a cambio.</p></div>
   ${co('co-danger','🚨',`<p><strong>“Rotar tu atención” no basta.</strong> Todos los tutores creen que lo hacen. <strong>Hazlo medible.</strong></p>
   <ul><li>Ten la lista de participantes a la vista y <strong>marca cada nombre cuando tenga un turno real</strong> — no una mirada, un intercambio de verdad.</li>
   <li><strong>A mitad de la clase, revisa quién todavía no tiene marca.</strong> Ve con ellos a continuación.</li>
   <li>Usa el chat y las reacciones como un segundo canal real, no como premio consuelo: <em>“escriban su idea en el chat y las leo todas en voz alta”</em>.</li>
   <li><strong>Quien termine la clase con una pregunta sin responder recibe una respuesta por escrito en un plazo de 24 horas.</strong></li>
   <li>Si el grupo es simplemente demasiado grande para que esto sea matemáticamente posible, <strong>díselo a tu Team Leader.</strong> Es una señal para derivar, no un fracaso personal.</li></ul>`)}
   ${doavoid(
     ['Nombra logros específicos: <em>“Sofia, tu lógica quedó muy clara ahí”</em>','Usa el chat y las reacciones para que hasta el más callado pueda participar','Celebra el esfuerzo: <em>“probaste tres caminos distintos — eso es pensar como programador”</em>','Pasa por cada estudiante del grupo durante el trabajo individual'],
     ['Elogios genéricos dirigidos a todo el grupo por igual','Prestar atención solo a quien termina primero','Tratar los errores como algo malo, o dar las respuestas antes de que piensen','El mismo ritmo para todos, aburriendo a algunos y apurando a otros']
   )}
  `},
  {t:'🧩 3.5 · El mismo consejo no funciona con todos los niños', html:`
   <div class="card"><p>Dos niños atascados en el mismo ejercicio pueden necesitar cosas opuestas de ti. Reconocer algunos patrones, y tener una respuesta distinta lista para cada uno, es lo que convierte una clase genérica en una donde cada niño realmente quiere estar.</p></div>
   ${patternCards([
     {ic:'🙈', title:'Tímido', desc:'Cámara encendida pero casi no habla; respuestas cortas; nunca se ofrece; se encoge cuando lo ponen en evidencia', note:'Primero, formas de participar con poca presión — chat, reacciones, un pulgar arriba. Invítalo <strong>de forma directa y privada</strong>.'},
     {ic:'😣', title:'Se frustra fácilmente', desc:'“No puedo hacerlo” aparece rápido; abandona al primer error; se altera visiblemente con errores pequeños', note:'Pasos más pequeños. Normaliza los errores en voz alta. Pregúntale cómo va <strong>antes</strong> de que crezca la frustración.'},
     {ic:'🎯', title:'Perfeccionista', desc:'Rehace lo mismo una y otra vez; se resiste a entregar algo “sin terminar”', note:'Elogia la decisión y el intento. Dale permiso explícito para entregar un borrador imperfecto.'},
     {ic:'⚡', title:'Se aburre rápido', desc:'Termina rápido; distrae una vez que terminó; “¿eso es todo?”', note:'Un desafío adicional real, siempre listo. Considera darle un rol de mentor. <strong>Nunca lo dejes sin hacer nada.</strong>'}
   ],2)}
  `},
  {t:'🎂 3.6 · Lo que motiva cambia con la edad', html:`
   <div class="two-col">
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧒</span>Niños más pequeños (aproximadamente 6–9)</h4>
   <ul><li>La motivación viene de la conexión y el juego, no de metas a largo plazo.</li>
   <li>Su capacidad de atención es corta. Tu energía los sostiene más que el contenido.</li>
   <li>Funciona un marco imaginativo — una misión, un personaje, una historia.</li>
   <li>Sus intereses específicos son una vía directa a su atención.</li>
   <li>Los errores se sienten emocionalmente más grandes. Hay que tranquilizarlos de inmediato.</li>
   <li>Necesitan más repetición y demostración práctica antes de intentarlo solos.</li></ul></div>
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧑</span>Niños mayores (aproximadamente 10–14+)</h4>
   <ul><li>La motivación pasa a la competencia y la relevancia — y a saber <em>por qué</em> importa.</li>
   <li>Son sensibles a que les hablen con condescendencia. Lo que más importa es que los traten como capaces.</li>
   <li>La retroalimentación sobre su <strong>razonamiento y sus decisiones</strong> funciona mejor que la que solo valora el esfuerzo.</li>
   <li>Las dinámicas sociales pesan más — sus compañeros influyen en si se arriesgan a hacer una pregunta.</li>
   <li>Pueden concentrarse más tiempo, pero se desconectan rápido si el ritmo se hace lento o se siente infantil.</li>
   <li>La autonomía importa — darles una opción sobre cómo encarar una tarea da resultado.</li></ul></div>
   </div>
   ${co('co-idea','💡',`<p>Las herramientas son las mismas a cualquier edad — un inicio cálido, retroalimentación específica, espacio para participar. Lo que cambia es <strong>qué resulta motivador</strong>: los más pequeños necesitan sentir que esto es divertido y que ellos importan; los mayores necesitan sentir que vale la pena su tiempo y que de verdad son buenos en esto.</p>`)}
  `},
  {t:'🔧 3.7 · Cuando la tecnología falla', html:`
   <div class="card"><p>Las cosas van a fallar — una pantalla congelada, un micrófono que no conecta. Lo que decide si eso arruina la clase no es la falla; es cómo reacciona el adulto.</p></div>
   ${co('co-cute','🫂',`<p><strong>El primer paso es emocional, no técnico.</strong> Reacciona con calma y normalízalo en voz alta. Un adulto tranquilo le transmite a un niño que no hay nada de qué preocuparse, y el grupo toma su tono emocional de ti. Solo cuando eso se calmó tiene sentido ponerse a resolver el problema técnico.</p>`)}
  `}
 ],
 ix:{
  title:'Basura o tesoro — hábitos en clase',
  instr:'Clasifica cada hábito en la zona que le corresponde: hábitos que construyen una clase a la que los niños vuelven, o hábitos que, sin que lo notes, te cuestan un niño. 70% para desbloquear el Módulo 4.',
  items:[
   {type:'sort', prompt:'', card:'Marcar el nombre de cada niño cuando tiene un turno real y revisar a mitad de la clase quién todavía no tuvo ninguno', zones:[{label:'🌱 Construye la clase', fb:'Correcto — esto es exactamente lo que convierte “rotar tu atención” de una intención en algo real.'},{label:'🗑️ Te cuesta un niño', fb:'No exactamente — registrar los turnos reales es un hábito tesoro, no basura.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Elogiar a todo el grupo con el mismo “¡buen trabajo, todos!” al final de cada clase', zones:[{label:'🌱 Construye la clase', fb:'No exactamente — el elogio genérico y repetido es justamente el tipo de hábito que, sin que lo notes, deja de motivar.'},{label:'🗑️ Te cuesta un niño', fb:'Correcto — el elogio genérico repetido pierde fuerza rápido y transmite que no estás mirando de verdad el trabajo.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Cuando algo falla técnicamente, reaccionar con calma y normalizarlo en voz alta antes de resolverlo', zones:[{label:'🌱 Construye la clase', fb:'Correcto — el primer paso ante una falla técnica es la regulación emocional, no la solución en sí.'},{label:'🗑️ Te cuesta un niño', fb:'No exactamente — mantener la calma y normalizar la falla es exactamente el primer paso correcto.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Darle a cada niño del grupo exactamente el mismo ritmo y la misma tarea, sin importar cómo le esté yendo', zones:[{label:'🌱 Construye la clase', fb:'No exactamente — un único ritmo fijo para todo el grupo es lo que aburre a algunos y apura a otros.'},{label:'🗑️ Te cuesta un niño', fb:'Correcto — el mismo ritmo para todos aburre a algunos y apura a otros; es uno de los factores de desconexión más claros.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Dejar sin responder una pregunta del chat porque se acabó el tiempo de la clase', zones:[{label:'🌱 Construye la clase', fb:'No exactamente — una pregunta sin responder es una de las formas más claras en que un niño concluye que aquí no importa.'},{label:'🗑️ Te cuesta un niño', fb:'Correcto — quien termina una clase con una pregunta sin responder debería recibir una respuesta por escrito en un plazo de 24 horas.'}], correctZone:1, fb:''}
  ]
 }
},
{id:'m4', numLabel:'Módulo 4', emoji:'📞', color:'var(--blue)',
 title:'Actuar entre clases',
 desc:'La conversación individual que realmente funciona, el seguimiento de ausencias y mantener a la familia al tanto.',
 obj:'Hacer lo necesario entre clases para que un niño que se está alejando no termine en una solicitud de reembolso: la conversación individual, el seguimiento de ausencias y mantener a la familia al tanto.',
 sections:[
  {t:'🏠 4.1 · La rutina de tareas que realmente funciona', html:`
   <div class="card"><p>La tarea no se sigue entregando por casualidad. Cuatro pequeños hábitos, siempre, son lo que evita que caiga a cero sin que nadie lo note.</p></div>
   ${stepFlow([
     {ic:'🗣️', label:'1. Explica — qué es y por qué importa, en voz alta'},
     {ic:'⏰', label:'2. Recuerda — un aviso antes de la fecha de entrega'},
     {ic:'🔦', label:'3. Señala — nombra lo que falta, de forma específica'},
     {ic:'📝', label:'4. Revisa — un comentario real, no solo una calificación'}
   ])}
   ${iconGrid([
     {ic:'🗣️', html:`<strong>Explica.</strong> Cuando la asignes, di qué es y por qué importa para la próxima clase — no solo “hagan los ejercicios del 1 al 5”.`},
     {ic:'⏰', html:`<strong>Recuerda.</strong> Un recordatorio breve antes de la fecha de entrega, sobre todo para los más pequeños — un mensaje, o un momento al final de la clase anterior.`},
     {ic:'🔦', html:`<strong>Señala.</strong> Si falta, dilo de forma específica y por nombre en la próxima clase — no un genérico “algunos no hicieron la tarea”.`},
     {ic:'📝', html:`<strong>Revisa.</strong> Deja <strong>un comentario real que la familia pueda leer</strong> — qué estuvo bien, qué no, y un próximo paso concreto. Una simple marca de revisado no le dice nada a nadie.`}
   ])}
   ${co('co-idea','💡',`<p>Esta es la rutina, cada semana, para cada niño — no solo para los que ya te preocupan. También es lo que hace que un cero signifique algo cuando lo ves: sabes que no es porque nadie explicó, recordó o se dio cuenta.</p>`)}
  `},
  {t:'☎️ 4.2 · La conversación individual que realmente funciona', html:`
   <div class="card"><p>Cuando detectaste una señal del Módulo 1, este es el paso. Bien hecha, muchas veces resuelve el problema por sí sola.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Nombra lo específico que notaste.</strong> Una preocupación vaga se percibe como vaga. <em>“No llegaste a hacer los dos últimos proyectos”</em> — no <em>“¿está todo bien?”</em>`},
     {ic:'🚧', html:`<strong>Pregunta por el obstáculo, no por la actitud.</strong> <em>“¿Qué te lo impidió?”</em> — no <em>“¿por qué no te estás esforzando?”</em> Una invita a responder; la otra invita a defenderse.`},
     {ic:'🤫', html:`<strong>Nunca frente al grupo.</strong> Un mensaje privado, el chat, o el último minuto de la clase a solas.`}
   ])}
   ${co('co-idea','💡',`<p>Luego <strong>haz un seguimiento dos clases después</strong>, pase lo que pase. Una conversación individual sin seguimiento le enseña al niño que lo notaste pero que en realidad no te importó.</p>`)}
   <div class="card"><p>Una de las formas de recuperar a un estudiante desmotivado es la revisión de la tarea — y <strong>cómo</strong> la hacemos. En los dos videos de abajo, mira dos casos muy distintos: uno en el que el tutor ignora que un estudiante no hizo su tarea, y otro en el que el tutor lo vuelve a integrar, de forma dinámica, haciéndolo sentir parte del grupo.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">El tutor que no motiva</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1zwbSiLXBj9mcqhKsFKNJriwSppbcEY5B/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">El tutor que motiva</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1m2m_RRNTf5zMh2-1NmExvEMGZX0DPIaK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'📵 4.3 · Cuando un niño falta a una clase', html:`
   <div class="card"><p>Mandar la grabación no es un plan para ponerse al día. <strong>Dos clases perdidas al principio de un curso pueden terminarlo</strong>, porque el niño vuelve a una clase donde todos los demás pueden hacer algo que él no — frente al grupo.</p></div>
   ${timeline([
     {ic:'📅', label:'El mismo día', items:[
       '<strong>Escríbele a la familia</strong>, primero con calidez: <em>“hoy la extrañamos — ¿está todo bien?”</em> La empatía antes que nada.',
       '<strong>Envía la grabación más lo único que importa.</strong> No “vean la clase completa” — señala la parte que de verdad importa.'
     ]},
     {ic:'⏳', label:'Antes de la próxima clase', items:[
       '<strong>Cinco minutos individuales</strong>, o una breve explicación por escrito del único concepto que necesita para reincorporarse — un concepto, no toda la clase.'
     ]},
     {ic:'🏫', label:'En la próxima clase', items:[
       '<strong>Dale un logro temprano, fácil y visible</strong>, para que vuelva sintiéndose capaz y no atrasado.',
       '<strong>Muéstrale que notaste que no estuvo</strong> — de forma breve y cálida. Que lo hayan extrañado es justamente el punto.'
     ]},
     {ic:'🚩', label:'Si faltó a dos o más', items:[
       '<strong>Avísale a tu Team Leader y deja un comentario en el BO para que Atención al Cliente también lo vea.</strong> Este es el umbral para discutir internamente una clase extra de recuperación. Tú lo planteas — no se lo ofreces a la familia, y tampoco lo descartas.'
     ]}
   ])}
  `},
  {t:'💌 4.4 · Mantener a la familia de tu lado', html:`
   <img src="Images/Image_3.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>La mayoría de las familias que se van nunca recibieron una buena noticia. Supieron de nosotros al inscribirse, y luego no otra vez hasta que hubo un problema.</p></div>
   ${checkbox([
     `<strong>Escribe algo específico después de una buena clase.</strong> Una vez. No tiene que ser largo: <em>“hoy resolvió el bucle ella sola — quería que lo supiera”</em>. Este único hábito cambia cómo una familia interpreta todo lo que viene después.`,
     `<strong>Cuando un niño vuelve después de una ausencia o de una dificultad, cuéntale a la familia el logro.</strong>`,
     `<strong>Si planteaste algo internamente, dile a la familia que lo planteaste</strong> — y más o menos cuándo tendrán noticias. El silencio después de un problema hace más daño que el problema mismo.`,
     `<strong>Mantente disponible para preguntas sobre el aprendizaje.</strong> Un padre o una madre que quiere hablar de cómo va su hijo debería encontrarte receptivo.`
   ])}
   ${co('co-danger','⛔',`<p><strong>Y aun así: habla del aprendizaje, deriva la acción.</strong> Nada de promesas sobre grupos, horarios, niveles, paquetes, reembolsos ni clases extra — no te corresponde darlas, ni negarlas.</p>`)}
  `}
 ],
 ix:{
  title:'Elige el mensaje',
  instr:'Para cada escenario, elige el mensaje correcto. 70% para desbloquear el Módulo 5.',
  items:[
   {type:'choice', prompt:'<strong>Escenario:</strong> un niño no entregó nada en las últimas dos clases, pero sigue asistiendo con normalidad. ¿Qué mensaje al <strong>niño</strong> es el correcto?', opts:[
     '“¿Está todo bien? Te noto un poco raro últimamente.”',
     '“No entregaste los dos últimos proyectos, y eso no es típico de ti — ¿qué te lo impidió?”',
     '“¿Por qué no has estado haciendo tu trabajo? Tienes que ponerte al día.”'
   ], correct:1, fb:'Nombrar lo específico que notaste y preguntar por el obstáculo en lugar de la actitud es lo que realmente abre una conversación, en vez de provocar una defensa o un encogimiento de hombros.'},
   {type:'choice', prompt:'<strong>Mismo escenario:</strong> el niño no entregó nada en dos clases y sigue asistiendo con normalidad. ¿Qué mensaje a la <strong>familia</strong> es el correcto?', opts:[
     '“Noté que [estudiante] no entregó trabajos en las últimas dos clases — ya hablé con él y quería mantenerlos al tanto.”',
     '“[Estudiante] no se está esforzando y quizás necesite pasar a un grupo más fácil — ¿podemos hablar de opciones?”',
     '“¡Todo está bien, solo quería saludar!”'
   ], correct:0, fb:'Esto le cuenta a la familia cómo va el niño y muestra que estás atento — sin sugerir un cambio de grupo, de nivel ni ninguna opción, que no te corresponde plantear a la familia.'},
   {type:'choice', prompt:'<strong>Nuevo escenario:</strong> un niño faltó a una clase ayer sin avisar antes. ¿Cuál es el paso correcto ese mismo día?', opts:[
     'Enviar el enlace de la grabación sin ningún mensaje y esperar a que se ponga al día solo',
     'Escribirle a la familia primero con calidez (“hoy la extrañamos, ¿está todo bien?”) y luego enviar la grabación más la parte que más importa',
     'Esperar a la próxima clase para mencionarlo, para no hacerlo más grande de lo que es'
   ], correct:1, fb:'Calidez primero, luego un repaso enfocado — ni un enlace suelto ni el silencio: ese es el verdadero plan para ponerse al día, no solo “mandar la grabación”.'}
  ]
 }
},
{id:'m5', numLabel:'Módulo 5', emoji:'🧩', color:'var(--blue)',
 title:'Las ocho situaciones',
 desc:'Para cada una de las ocho cosas que realmente alejan a las familias: qué notar, qué hacer y a quién avisar.',
 obj:'Para cada una de las ocho cosas que realmente alejan a las familias, saber qué notar, qué hacer en la clase, qué hacer fuera de ella y a quién avisar.',
 sections:[
  {t:'', html:`
   <h3 class="acc-big-title">🧩 Las 8 situaciones más comunes detrás de un reembolso</h3>
  `},
  {t:'', html:`${accItem('😣 5.1 · El trabajo es demasiado difícil', `
   <img src="Images/Image_5.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Un estudiante puede mostrar varias señales de que le está costando. Puede decir “no puedo hacerlo” desde temprano y a menudo, rendirse después de cometer un error o empezar el trabajo en clase sin terminarlo. También puede volverse más callado, dejar de compartir su pantalla o hacer una y otra vez las mismas preguntas básicas. A veces, un estudiante se queda atrás después de faltar a una sola clase y nunca logra ponerse al día del todo. Otra señal de alerta es cuando su trabajo en clase sigue siendo débil aunque continúe intentando hacer la tarea.`)}
   ${stepIconBlock('⚡','Adapta — en la próxima clase, sin pedir permiso', `<ul><li>Divide la tarea en pequeños logros (10 min)</li><li>Da un objetivo más simple y explícito, en voz alta</li><li>Normaliza los errores; pregúntale cómo va <strong>antes</strong> de que crezca la frustración</li><li>¿Sigue atascado después de 2 clases? Agenda una sesión con tu <strong>Mentor Regional</strong> para conseguir ideas de enseñanza</li></ul>`)}
   ${stepIconBlock('🗣️','Coordina — TL + Evaluación de Tutores en el BO, esta semana', `<ul><li>Reporta lo que ves y cómo se siente el niño</li><li>Pide una clase de diagnóstico/nivelación si la brecha es real</li><li>Nunca plantees tú el tema del nivel con la familia</li></ul>`)}
   ${stepIconBlock('👪','Familia', `<p>Solo lo que te corresponde: <em>“apoyo extra en las clases, ya lo comenté con mi equipo”</em>. Nada sobre niveles. Haz seguimiento en 2 clases.</p>`)}
   ${co('co-idea','🔴',`<p><strong>¿Ya recibiste la solicitud de reembolso por este motivo?</strong> Ve directo al Módulo 7 — el intento de retención empieza en tu próxima clase con este niño.</p>`)}
  `)}
  ${accItem('😴 5.2 · El trabajo es demasiado fácil', `
   <img src="Images/Image_7.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Un estudiante puede terminar su trabajo en la mitad del tiempo esperado y preguntar: “¿Eso es todo?”. Puede distraerse o distraer a otros una vez que termina, o comentar que ya conoce el material. Otra señal importante es cuando un estudiante muestra mucha capacidad pero sistemáticamente no hace la tarea. En los números, el aburrimiento puede verse exactamente igual que la desconexión, así que es importante mirar más allá de las apariencias.`)}
   ${stepIconBlock('⚡','Adapta — de inmediato', `<ul><li>Un desafío adicional real: la misma habilidad, una consigna más difícil</li><li>Un pequeño rol de mentor en el grupo</li><li>Dale opciones; nunca lo dejes sin hacer nada</li></ul>`)}
   ${stepIconBlock('🗣️','Coordina — TL + Evaluación de Tutores en el BO, esta semana', `<p>Di exactamente: <em>“necesita subir de nivel, no es un problema de motivación”</em>. Pide una clase de diagnóstico/evaluación de nivel.</p>`)}
   ${stepIconBlock('👪','Familia', `<p>Solo: <em>“aprende muy rápido, le estoy dando desafíos extra, ya lo comenté con mi equipo”</em>. Haz seguimiento en 2 clases.</p>${co('co-ok','✅',`<p>Este caso se resuelve a menudo — pero solo si alguien dijo algo.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>¿Ya recibiste la solicitud de reembolso por este motivo?</strong> Ve directo al Módulo 7 — el intento de retención empieza en tu próxima clase con este niño.</p>`)}
  `)}
  ${accItem('🧩 5.3 · Una necesidad educativa especial', `
   <img src="Images/Image_8.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Hay niños que llegan con autismo, TDAH, dislexia, necesidades sensoriales, ansiedad — y a veces altas capacidades, que también son una necesidad educativa especial y se ven muy distintas del aburrimiento común. Puede estar en el perfil, haberlo mencionado la familia una sola vez o no haberse dicho nunca en voz alta. Las familias suelen dar primero otra explicación — <em>“perdió el interés”</em>, <em>“no es para él”</em> — y el motivo real solo sale a la luz cuando alguien pregunta como corresponde.</p></div>
   ${noticeLine(`Una nota en el perfil (Módulo 2.1) · sobrecarga sensorial · la concentración se apaga temprano · reacciones grandes ante errores pequeños · angustia ante los cambios · lectura o escritura lenta · mucha capacidad con motivación inestable.`)}
   ${stepIconBlock('⚡','Adapta — aquí está la mayor parte del trabajo, y es todo tuyo', `<ul><li>Unidades más cortas, estructura predecible, <strong>avisa antes de cada transición</strong></li><li>Instrucciones escritas + habladas; cámara opcional</li><li>Adapta la tarea en sí; protege la rutina por encima de todo</li><li>Tu <strong>Mentor Regional</strong> puede ayudarte a armar un plan para este niño en particular</li></ul>${co('co-danger','🚨',`<p>Primero esfuérzate de verdad. Pero si la brecha sigue siendo demasiado grande, <strong>escala de inmediato</strong> — eso no es un fracaso.</p>`)}`)}
   ${stepIconBlock('🗣️','Coordina — TL de inmediato + Evaluación de Tutores en el BO', `<p>Si las clases individuales o un tutor con experiencia en necesidades educativas especiales ayudarían, <strong>recomiéndalo — no lo ofrezcas.</strong></p>`)}
   ${stepIconBlock('👪','Familia — con cuidado', `<p>Revisa primero el perfil (2.1); si no hay nada registrado, pregunta con delicadeza. Escribe lo que averigües en los Comentarios del BO.</p>${co('co-danger','⛔',`<p>Nunca: <em>“no puede seguir el ritmo”</em> ni nada que suene a diagnóstico. Haz seguimiento cada 2 clases, y siempre después de cualquier cambio.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>¿Ya recibiste la solicitud de reembolso por este motivo?</strong> Ve directo al Módulo 7 — el intento de retención empieza en tu próxima clase con este niño.</p>`)}
  `)}
  ${accItem('📐 5.4 · El niño, la edad o el formato no encajan', `
   <img src="Images/Image_9.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Un estudiante puede tener dificultades porque todavía no tiene las habilidades de lectura que requiere el material o porque no logra mantener la concentración durante toda la clase. En algunos casos, el curso puede exigir habilidades que están muy por encima de su edad o de su nivel actual. Otras barreras pueden ser la dificultad de una familia para adaptarse al formato de aprendizaje en línea o una barrera de idioma que no se detectó antes. Estas señales pueden indicar que el problema no es la participación, sino un desajuste entre las necesidades del estudiante y el entorno de aprendizaje.`)}
   ${stepIconBlock('⚡','Adapta', `<p>Prueba todo — acorta, simplifica, demuestra más, dale más atención individual. Conoce el límite: a un niño que todavía no sabe leer no se le puede enseñar con un curso que depende mucho de la lectura.</p>`)}
   ${stepIconBlock('🗣️','Coordina — TL + Evaluación de Tutores en el BO', `<p>Di exactamente: <em>“es una conversación de ubicación, no de motivación”</em>. Derívalo — no es una decisión que te corresponda.</p>`)}
   ${stepIconBlock('👪','Familia — solo si tu TL te lo pide', `<p>Puede haber varias opciones, pero <strong>tú no las presentas.</strong> Sigue el mensaje exacto que te dé tu TL, o mantente al margen.</p>`)}
   ${co('co-idea','🔴',`<p><strong>¿Ya recibiste la solicitud de reembolso por este motivo?</strong> Ve directo al Módulo 7 — el intento de retención empieza en tu próxima clase con este niño.</p>`)}
  `)}
  ${accItem('👥 5.5 · El grupo es demasiado numeroso y el niño nunca tiene su turno', `
   <img src="Images/Image_10.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${co('co-idea','🎯',`<p><strong>Esta es la única situación de la lista que depende directamente del comportamiento del tutor — y por eso es la que puedes resolver más rápido.</strong></p>`)}
   <div class="card"><p>Un niño que levanta la mano, espera, no recibe la palabra y se queda con preguntas sin responder va a concluir que no importa en este grupo. Pueden bastar dos clases.</p></div>
   ${noticeLine(`Presta atención a los niños que dejan de levantar la mano, a las preguntas del chat que quedan sin respuesta o a que siempre respondan los mismos dos o tres estudiantes. Fíjate también en los estudiantes que pasan una clase entera sin una sola interacción contigo.`)}
   ${stepIconBlock('⚡','Adapta — es una habilidad, y se puede aprender', `<ul><li>Registro de turnos (3.4): lista visible, una marca por turno, revisión a mitad de la clase</li><li>Segmentos más cortos, el chat usado de forma deliberada, parejas o tareas pequeñas</li><li>Responde por escrito en 24 h cualquier pregunta que haya quedado sin respuesta</li><li>Justamente para esto es una sesión con tu <strong>Mentor Regional</strong> — pídela si no te está saliendo</li></ul>`)}
   ${stepIconBlock('🗣️','Coordina — TL', `<p>Solo después de intentarlo de verdad: tamaño del grupo, formato, quién se está quedando afuera, qué cambiaste. Un grupo más pequeño es posible, pero solo si tu TL lo sabe.</p>`)}
   ${stepIconBlock('👪','Familia — solo si lo acordaste con tu TL', `<p>No plantees tú un cambio de grupo. Sí puedes decir con calidez que lo notaste y que estás cambiando cómo diriges el grupo — esa parte es tuya.</p>`)}
   ${co('co-idea','🔴',`<p><strong>¿Ya recibiste la solicitud de reembolso por este motivo?</strong> Ve directo al Módulo 7 — el intento de retención empieza en tu próxima clase con este niño.</p>`)}
  `)}
  ${accItem('🔀 5.6 · Un cambio de tutor, grupo u horario cayó mal', `
   <img src="Images/Image_11.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>La continuidad importa mucho más de lo que parece, y sobre todo para los niños que ya son más frágiles.</p></div>
   ${co('co-ok','✅',`<p><strong>Una buena noticia que vale la pena decir en voz alta: esto casi siempre tiene solución.</strong> Tenemos muchos tutores y muchos grupos — casi siempre se puede encontrar otra opción, pero solo si el problema se plantea rápido, mientras la familia todavía quiere una solución y no una salida. Las tres cosas que deciden el resultado: transparencia, rapidez y que todos estén al tanto — la familia, tu TL, Atención al Cliente y un comentario en el BO.</p>`)}
   <div class="card"><h4 style="margin-bottom:10px">👋 Si te vas</h4>${iconGrid([
     {ic:'📝', html:`<strong>Traspaso en los Comentarios del BO:</strong> necesidades especiales, qué lo motiva, en qué está atascado, situación de la familia.`},
     {ic:'🗣️', html:`<strong>Pregúntale a tu TL cómo</strong> comunicarlo, y a quién — acuérdalo primero y luego haz exactamente eso.`}
   ])}</div>
   <div class="card"><h4 style="margin-bottom:10px">🙋 Si llegas</h4>${iconGrid([
     {ic:'📖', html:`<strong>Lee el traspaso</strong> primero.`},
     {ic:'💬', html:`<strong>Nombra el cambio</strong>, de forma breve y positiva.`},
     {ic:'🏷️', html:`<strong>Aprende todos los nombres</strong> en la primera clase.`},
     {ic:'⏸️', html:`<strong>No cambies nada más</strong> durante 2 clases.`}
   ])}</div>
   <div class="card"><p>En un traspaso rutinario y planificado, en la mayoría de las regiones es el tutor — no Atención al Cliente — quien anuncia el cambio directamente en el chat del grupo y se presenta. Atención al Cliente normalmente solo interviene en cambios inesperados o casos delicados.</p></div>
   ${stepIconBlock('🗣️','Coordina — TL', `<p>De inmediato si algún niño tiene una necesidad educativa especial, o si un nuevo horario no le funciona a una familia.</p>`)}
   ${stepIconBlock('👪','Familia — como tutor nuevo, con calidez', `<p style="font-style:italic">“¡Hola! Soy [nombre] y a partir de ahora acompaño a este grupo — ya leí sobre [estudiante] para que retomemos justo donde lo dejó.”</p><p>Solo entusiasmo — no el motivo del cambio.</p>`)}
   ${co('co-idea','🔴',`<p><strong>¿Ya recibiste la solicitud de reembolso por este motivo?</strong> Ve directo al Módulo 7 — el intento de retención empieza en tu próxima clase con este niño.</p>`)}
  `)}
  ${accItem('⚠️ 5.7 · Algo falló de nuestro lado', `
   <img src="Images/Image_12.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Una clase perdida por una falla de la plataforma, una cancelación, un problema técnico que se llevó la mayor parte de la hora.</p></div>
   ${co('co-danger','🚨',`<p><strong>Lo peor que puede decir un tutor aquí es “eso no es posible”.</strong> Un niño pierde clases porque nuestra plataforma falló, la familia pide una clase de recuperación, el tutor dice que no se puede — la familia pierde la confianza y pide un reembolso. <strong>Nunca fue una decisión del tutor.</strong> Dos clases perdidas o afectadas es el disparador que usan la mayoría de las regiones para abrir la conversación sobre una clase extra de recuperación, aunque la decisión final siempre la toma tu TL. Iniciar esa conversación es tu trabajo. Cerrarla, no.</p>`)}
   ${stepIconBlock('⚡','Adapta', `<p>Mantén la calma, normalízalo (3.7), cuida el ánimo del grupo, envía la grabación, aplica el plan para ponerse al día (4.3).</p>`)}
   ${stepIconBlock('🗣️','Coordina — TL el mismo día', `<ul><li>Conversen sobre una clase extra de recuperación</li><li>Involucra a Atención al Cliente si la familia está molesta o si hay un tema comercial</li><li>Envía una Evaluación de Tutores en el BO</li></ul>`)}
   ${stepIconBlock('👪','Familia — acuerda primero el mensaje con tu TL, el mismo día', `<p><em>“Ya lo planteé con mi equipo y le vamos a responder”</em> — y luego asegúrate de que alguien lo haga, hoy.</p>${co('co-danger','⛔',`<p>Nunca prometas la clase extra, nunca la descartes. Seguimiento: dale el primer turno real en la próxima clase.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>¿Ya recibiste la solicitud de reembolso por este motivo?</strong> Ve directo al Módulo 7 — el intento de retención empieza en tu próxima clase con este niño.</p>`)}
  `)}
  ${accItem('📢 5.8 · “Esto no es lo que nos dijeron”', `
   <img src="Images/Image_13.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Un padre o una madre te dice que el nivel, el paquete, el horario o el curso en sí no es lo que entendieron que estaban comprando. Es la conversación más incómoda que tiene un tutor, y la más fácil de empeorar.</p>
   <p><em>Las expectativas creadas antes de que empezara el curso están detrás de una gran parte de todas las solicitudes de reembolso — más que cualquier otra causa individual.</em></p></div>
   ${stepIconBlock('⚡','Adapta', `<p>Para el niño no cambia nada — sigue enseñando bien.</p>`)}
   ${stepIconBlock('🗣️','Coordina — TL + Atención al Cliente, antes de responder cualquier cosa', `<ul><li>Llévalo a tu TL el mismo día</li><li>Involucra a Atención al Cliente — son quienes se encargan de lo que sigue</li><li>Escribe las palabras textuales de la familia en una Evaluación de Tutores en el BO</li></ul><p>Está bien acusar recibo: <em>“gracias, voy a llevar esto a mi equipo y le vuelvo a escribir”</em>. No es una respuesta. <span style="font-size:12.5px">(Si lo que piden es algo pequeño — una clase extra — muchas veces es algo que tú y tu TL resuelven directamente, sin Atención al Cliente. Pregúntale a tu TL cuál es el caso.)</span></p>`)}
   ${stepIconBlock('👪','Familia — solo con la aprobación de tu TL', `<ol><li>Reconoce lo que te dicen, sin culpar a nadie</li><li>Muestra que te importa el niño</li><li>Pasa el caso a Atención al Cliente de forma ordenada</li></ol>${co('co-danger','⛔',`<p>Nunca: culpar a un colega, discutir u ofrecer soluciones por tu cuenta.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>¿Ya recibiste la solicitud de reembolso por este motivo?</strong> Ve directo al Módulo 7 — el intento de retención empieza en tu próxima clase con este niño.</p>`)}
  `)}
  `}
 ],
 ix:{
  title:'Ocho situaciones, ocho primeros pasos',
  instr:'Para cada situación anonimizada, elige a cuál de las ocho categorías corresponde y luego elige el primer paso correcto. 70% para desbloquear el Módulo 6.',
  items:[
   {type:'choice', prompt:'“Dice que no puede hacerlo, se pone a llorar al primer error y dejó de terminar el trabajo en clase.” — ¿qué situación es esta?', opts:['El trabajo es demasiado difícil','El trabajo es demasiado fácil','Una necesidad educativa especial'], correct:0, fb:'Fallar repetidamente desde temprano y abandonar al primer error es el perfil clásico de un trabajo demasiado difícil.'},
   {type:'choice', prompt:'El primer paso correcto para esa situación es —', opts:['Escribirle a la familia sugiriendo un cambio de nivel','Dividir la tarea en pasos más pequeños y dar un objetivo reducido y explícito — desde esta misma clase','Seguir según lo planeado; el nivel no es algo que puedas ajustar'], correct:1, fb:'Adapta la tarea tú mismo de inmediato — la conversación sobre el nivel, si hace falta, va a tu Team Leader y a Atención al Cliente, nunca directo a la familia.'},
   {type:'choice', prompt:'“Termina en un tercio del tiempo y luego empieza a distraer al compañero de al lado. No entrega la tarea desde hace tres semanas.” — ¿qué situación es esta?', opts:['El trabajo es demasiado fácil','Una necesidad educativa especial','Circunstancias familiares'], correct:0, fb:'Terminar rápido, interrumpir y no entregar la tarea es aburrimiento por un nivel demasiado fácil — parece desconexión, pero no lo es.'},
   {type:'choice', prompt:'El primer paso correcto para esa situación es —', opts:['Darle de inmediato un desafío adicional real ligado a la misma habilidad, y reportarlo como posible subida de nivel','Reportarlo y esperar la revisión del nivel antes de cambiar nada','Suponer que simplemente no está motivado y animarlo más'], correct:0, fb:'Aquí se necesitan las dos partes: adaptar ahora para que no se aburra durante semanas, y reportar ahora para que se revise el nivel.'},
   {type:'choice', prompt:'“La familia mencionó en la Clase de prueba que tiene TDAH, pero nunca se registró en ningún lado y ningún tutor se adaptó a eso.” — ¿qué situación es esta?', opts:['El grupo es demasiado numeroso','Una necesidad educativa especial','Algo falló de nuestro lado'], correct:1, fb:'Este es exactamente el caso de necesidad educativa especial que más se pasa por alto — la información existía, pero nunca llegó a la clase.'},
   {type:'choice', prompt:'El primer paso correcto para esa situación es —', opts:['Esperar un diagnóstico oficial antes de cambiar nada','Adaptar la clase de inmediato — unidades más cortas, estructura predecible, transiciones anticipadas — y coordinar con tu Team Leader y Atención al Cliente, además de dejar un comentario en el BO','Decirle a la familia que quizás su hijo no es apto para este formato'], correct:1, fb:'Adaptas tú mismo todo lo que puedes, de inmediato, y también te aseguras de que quede registrado para que el próximo tutor y Atención al Cliente lo sepan.'},
   {type:'choice', prompt:'“Dos niños de mi grupo animado de diez no han tenido un intercambio real conmigo en tres clases, y una dejó de levantar la mano.” — ¿qué situación es esta?', opts:['El niño, la edad o el formato no encajan','El grupo es demasiado numeroso y el niño nunca tiene su turno','Esto no es lo que nos dijeron'], correct:1, fb:'Es claramente un tema de manejo de grupo — y la única situación de la lista que depende directamente del comportamiento del tutor.'},
   {type:'choice', prompt:'El primer paso correcto para esa situación es —', opts:['Reportar el tamaño del grupo a tu Team Leader y esperar una decisión antes de cambiar nada','Cambiar cómo diriges este grupo en particular — registrar turnos, usar el chat de forma deliberada, reorganizar los segmentos — y escalar solo si aun así no alcanza','Concentrarte en los niños que sí participan, ya que claramente están más involucrados'], correct:1, fb:'Es una habilidad que puedes aplicar de inmediato. Escalas porque lo intentaste de verdad y la brecha sigue siendo demasiado grande — no en lugar de intentarlo.'},
   {type:'choice', prompt:'“Un padre dice que le dijeron que serían clases individuales, no un grupo de ocho.” — ¿qué situación es esta?', opts:['Un cambio de tutor, grupo u horario cayó mal','Esto no es lo que nos dijeron','El trabajo es demasiado difícil'], correct:1, fb:'Un desajuste entre lo prometido y lo que se está dando es exactamente “esto no es lo que nos dijeron” — la más delicada de las ocho.'},
   {type:'choice', prompt:'El primer paso correcto para esa situación es —', opts:['Explicar cómo funcionan las clases grupales y por qué son valiosas pedagógicamente','Acusar recibo y luego llevarlo a tu Team Leader y a Atención al Cliente el mismo día, antes de responder como corresponde — y registrar textualmente las palabras de la familia en el BO','Disculparte por la confusión y ofrecer averiguar si se puede pasar a clases individuales'], correct:1, fb:'Responder por tu cuenta — aunque sea con buen criterio — es como los tutores terminan, sin querer, confirmando una queja o insinuando algo que no podemos cumplir. Siempre coordina primero.'}
  ]
 }
},
{id:'m6', numLabel:'Módulo 6', emoji:'🧭', color:'var(--blue)',
 title:'A quién avisar y qué tan rápido',
 desc:'Convierte todo lo anterior en algo que de verdad ocurra — el mapa de derivación y las cinco reglas.',
 obj:'Convertir todo lo anterior en algo que de verdad ocurra — sabiendo, sin tener que pensarlo, a quién avisar y qué tan rápido.',
 sections:[
  {t:'⏱️ 6.1 · La rapidez lo es todo', html:`
   <div class="card"><p>Todas las situaciones del Módulo 5 tienen la misma forma: se resuelven fácilmente si se detectan temprano y salen caras si se detectan tarde. Un nivel equivocado detectado en la clase tres se resuelve. El mismo nivel equivocado en la clase quince ya se convirtió en <em>“ya no le interesa”</em> — y para entonces la familia dejó de creernos.</p></div>
   ${co('co-idea','💡',`<p><strong>Eres el puente entre la clase y las personas que pueden cambiar la situación del niño. Un puente solo vale algo si las cosas lo cruzan rápido.</strong></p>`)}
  `},
  {t:'🗺️ 6.2 · El mapa de derivación', html:`
   <div class="tbl-full"><div class="card"><table>
   <tr><th>🔎 Lo que notaste</th><th>① En la clase</th><th>② Entre clases</th><th>③ A quién avisas + BO</th><th>④ La familia</th><th>⏱️ Qué tan rápido</th></tr>
   <tr><td><strong>Asistencia menor a la mitad</strong>, o trabajo muy por debajo del grupo</td><td>Dale un turno real y un logro alcanzable</td><td>Conversación individual privada con el niño</td><td>Team Leader si pasan dos clases más sin cambios</td><td>Mensaje breve y cálido — te corresponde enviarlo</td><td>La misma semana</td></tr>
   <tr><td><strong>Dos o más clases sin entregar nada</strong></td><td>Revisa el trabajo en vivo con pantalla compartida; reduce el objetivo</td><td>Conversación individual; explica bien la próxima tarea y haz seguimiento</td><td>Team Leader si continúa</td><td>Mensaje sobre el progreso — te corresponde enviarlo</td><td>La misma semana</td></tr>
   <tr><td><strong>Trabajo demasiado difícil</strong></td><td>Pasos más pequeños, objetivo reducido, adapta la tarea, normaliza los errores</td><td>Explicación por escrito del concepto que falta</td><td><strong>Team Leader + Evaluación de Tutores en el BO</strong> — pide una clase de diagnóstico/nivelación si hace falta</td><td>Solo lo que apruebe tu TL. Nunca el nivel ni las opciones</td><td>La misma semana</td></tr>
   <tr><td><strong>Trabajo demasiado fácil</strong></td><td>Desafío adicional real, tarea adaptada hacia arriba, rol de mentor, nunca sin hacer nada</td><td>Ten lista una tarea del siguiente nivel</td><td><strong>Team Leader + Evaluación de Tutores en el BO</strong> — pide una clase de diagnóstico/nivelación si hace falta</td><td>Solo lo que apruebe tu TL. Nunca el nivel ni las opciones</td><td>La misma semana</td></tr>
   <tr><td><strong>Necesidad educativa especial</strong>, registrada o sospechada</td><td>Unidades más cortas, estructura predecible, avisa antes de las transiciones, adapta las tareas</td><td>Anota qué funciona y qué no</td><td><strong>Team Leader + Evaluación de Tutores en el BO.</strong> Pregunta por clases individuales si la brecha es grande</td><td>Preguntar qué lo ayuda: tuyo, con cuidado. Formato/grupo/clases individuales: nunca lo propones tú</td><td>Antes de la próxima clase · de inmediato si la brecha es demasiado grande</td></tr>
   <tr><td><strong>La edad o el formato no encajan</strong></td><td>Simplifica, demuestra más, da más atención en la clase</td><td>Sé honesto sobre el límite</td><td><strong>Team Leader + Evaluación de Tutores en el BO</strong> — di “ubicación, no motivación”</td><td>Solo si tu TL te lo pide</td><td>La misma semana</td></tr>
   <tr><td><strong>El niño nunca tiene su turno</strong></td><td>Registro de turnos; ajusta tu enfoque; adapta una tarea para el niño que lo necesita</td><td>Respuestas por escrito en 24 h a todo lo que quedó sin responder</td><td>Team Leader, si no se puede resolver dentro de la clase</td><td>Los cambios en tu propia enseñanza: tuyos. Un cambio de grupo: nunca de tu parte</td><td>La misma semana</td></tr>
   <tr><td><strong>Cambio de tutor, grupo u horario</strong></td><td>Nómbralo, normalízalo y no cambies nada más durante dos clases</td><td>Traspaso escrito en los Comentarios del BO</td><td><strong>Team Leader</strong> — de inmediato si algún niño tiene una necesidad especial o si un horario no funciona. Atención al Cliente solo para casos inesperados o delicados</td><td>Como tutor nuevo: cálido, entusiasta. Ni el motivo del cambio ni horarios</td><td>Antes de la clase del traspaso</td></tr>
   <tr><td><strong>Dos clases afectadas</strong> — falla de la plataforma, cancelación, ausencia</td><td>Mantén la calma, cuida el ánimo</td><td>Grabación + la parte que importa; plan para ponerse al día</td><td><strong>Team Leader el mismo día — inicia la conversación sobre una clase extra (dos clases es el disparador que usan la mayoría de las regiones).</strong> Atención al Cliente si la familia está molesta · Evaluación de Tutores en el BO</td><td>El mismo día — acuerda antes el mensaje con tu TL</td><td>El mismo día</td></tr>
   <tr><td><strong>“Esto no es lo que nos dijeron”</strong></td><td>Para el niño no cambia nada — sigue enseñando bien</td><td>—</td><td><strong>Team Leader + Atención al Cliente, antes de responder · las palabras textuales de la familia en una Evaluación de Tutores</strong></td><td>Solo acusa recibo. La respuesta real, después de la aprobación de tu TL — sin opciones de tu parte</td><td>El mismo día</td></tr>
   <tr><td><strong>Circunstancias familiares, salud, dinero</strong></td><td>Sé amable, no esperes nada</td><td>—</td><td>Atención al Cliente, a través de tu Team Leader · no insistas</td><td>Una línea cálida, sin preguntas de seguimiento</td><td>Cuando te enteres</td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p>Para cualquier cosa urgente, la mayoría de las regiones también tienen un canal directo de Slack entre Team Leader y Atención al Cliente como respaldo más rápido que el BO — el nombre cambia en cada región, así que pregúntale a tu Team Leader cuál es el tuyo.</p>`)}
   ${co('co-idea','🎓',`<p><strong>Una columna que este mapa no muestra: tu Mentor Regional.</strong> Todo lo que está en la columna “a quién avisas” trata sobre <em>las condiciones del servicio</em> — nivel, grupo, horario, paquete — y siempre va a tu Team Leader y a Atención al Cliente. Cuando la pregunta, en cambio, es <em>cómo enseño esto mejor</em>, tu Mentor Regional es a quien debes consultar, junto con la ruta anterior — no en lugar de ella.</p>`)}
  `},
  {t:'⚖️ 6.3 · Las cinco reglas', html:`
   <div class="rule-row">
     <div class="rule-card"><div class="rule-num">1</div><div class="rule-ic">⚡</div><div class="rule-txt"><strong>Adapta primero.</strong> No necesitas permiso para enseñar mejor mañana — muchos casos terminan ahí mismo. ¿Sigues atascado después de 2 clases? Agenda una sesión con tu Mentor Regional.</div></div>
     <div class="rule-card"><div class="rule-num">2</div><div class="rule-ic">📣</div><div class="rule-txt"><strong>Avisar a alguien no es opcional.</strong> Informas al Team Leader, involucras a Atención al Cliente, envías la Evaluación de Tutores — o el problema queda en silencio.</div></div>
     <div class="rule-card"><div class="rule-num">3</div><div class="rule-ic">🚦</div><div class="rule-txt"><strong>El Team Leader antes que la familia.</strong> Coordinen y acuerden la estrategia, <em>después</em> habla con la familia — exactamente lo acordado, nunca opciones propias.</div></div>
     <div class="rule-card"><div class="rule-num">4</div><div class="rule-ic">🤐</div><div class="rule-txt"><strong>Nunca prometas, nunca te niegues — siempre muestra que te importa.</strong> Tú recomiendas; Atención al Cliente ofrece. Una excepción: una vez que tu Team Leader aprobó una clase extra, muchas veces puedes ser tú quien se lo comunique a la familia.</div></div>
     <div class="rule-card"><div class="rule-num">5</div><div class="rule-ic">🔁</div><div class="rule-txt"><strong>Escala una vez y luego da seguimiento.</strong> Plantear algo y olvidarlo es lo mismo que nunca haberlo planteado.</div></div>
   </div>
   ${co('co-idea','💡',`<p>Vale la pena convertir estas cinco reglas en hábito, no solo leerlas una vez — son la diferencia entre una señal que se atiende y una que desaparece sin que nadie lo note. Consulta con tu Team Leader cualquier aspecto específico de cómo funciona esto en tu región.</p>`)}
  `}
 ],
 ix:{
  title:'Derivación — cinco señales',
  instr:'Para cada señal, elige adónde va primero. 70% para desbloquear el Módulo 7.',
  items:[
   {type:'choice', prompt:'El trabajo en clase de un niño está bien, pero la tarea lleva dos clases seguidas en cero, sin que se haya identificado todavía ninguna otra causa.', opts:['Actúo yo — una conversación individual esta semana; todavía no hace falta reportar','Team Leader + Atención al Cliente de inmediato','Derivar directamente a Atención al Cliente, sin pasar por el Team Leader'], correct:0, fb:'Una baja solo en la tarea como esta empieza con tu propia conversación individual. Escala a tu Team Leader solo si continúa después de eso.'},
   {type:'choice', prompt:'Llevas dos semanas adaptando la clase para un niño al que claramente le cuesta el nivel, y todavía no alcanza.', opts:['Seguir adaptando indefinidamente — el nivel no es decisión tuya, así que no hay nada que escalar','Team Leader + Atención al Cliente, con un comentario en el BO','Escribirle directamente a la familia sobre un posible cambio de nivel'], correct:1, fb:'Este es exactamente el momento en que un caso de “demasiado difícil” tiene que ir a tu Team Leader y a Atención al Cliente, por escrito, en el BO.'},
   {type:'choice', prompt:'Un niño de tu grupo tiene un diagnóstico de autismo registrado en su perfil, y te acaban de avisar que el grupo se va a reorganizar con un tutor nuevo el próximo mes.', opts:['Esperar a que el cambio se confirme antes de mencionárselo a nadie','Avisar a tu Team Leader de inmediato, escribir un traspaso completo en el BO y acordar cómo se comunica el cambio','Decírselo tú mismo al niño en privado, ya mismo, para que tenga tiempo de prepararse'], correct:1, fb:'Una necesidad educativa especial más un cambio en la continuidad hay que señalarlo de inmediato — y cómo se comunica tiene que acordarse primero con tu Team Leader.'},
   {type:'choice', prompt:'Dos clases seguidas se vieron interrumpidas por una falla de la plataforma, y el padre acaba de preguntar por una clase de recuperación.', opts:['Decirle que las clases de recuperación no son posibles','Decirle que tú mismo vas a organizar una, para tranquilizarlo rápido','Responder que lo vas a plantear y hablar con tu Team Leader ese mismo día sobre una clase extra'], correct:2, fb:'Ni negarte ni prometer te corresponde — pero iniciar la conversación interna el mismo día es exactamente tu trabajo.'},
   {type:'choice', prompt:'Un padre escribe que el nivel, el paquete o el horario no son lo que le dijeron al inscribirse.', opts:['Responder ese mismo día con tu explicación más honesta','Acusar recibo y luego llevarlo a tu Team Leader y a Atención al Cliente antes de responder como corresponde, registrando sus palabras textuales en el BO','Reenviarlo a Atención al Cliente y considerar que ya no es asunto tuyo'], correct:1, fb:'Esta es la única situación en la que responder por tu cuenta hace más daño. Coordina primero, siempre — pero tampoco te quedes en silencio.'}
  ]
 }
},
{id:'m7', numLabel:'Módulo 7', emoji:'🛟', color:'var(--coral)',
 title:'Salvar una solicitud de reembolso',
 desc:'Todo lo anterior trata de prevenir una solicitud. Este módulo trata de qué hacer cuando ya se presentó una.',
 obj:'Saber qué cambia una vez que ya se presentó una solicitud de reembolso: qué debe lograr la próxima clase, qué puedes y qué no puedes decir, y cómo seguir dándole a Atención al Cliente lo que necesita.',
 sections:[
  {t:'🔀 7.1 · Todo cambia una vez que existe una solicitud', html:`
   <div class="card"><p>Los Módulos 1 a 6 tratan de detectar esto <strong>antes</strong> de que una familia pida que le devuelvan su dinero. Este módulo es para el momento en que eso ya pasó: <strong>se presentó una solicitud de reembolso</strong> y te avisaron.</p></div>
   ${co('co-idea','💡',`<p><strong>La solicitud en sí la crea el gerente de Atención al Cliente, no tú.</strong> Nada de esa parte depende de ti. Lo que sigue siendo tuyo es todo lo que pasa en la clase de aquí en adelante — y eso no es poco.</p>`)}
   ${co('co-danger','🚨',`<p><strong>No digas nada sobre la solicitud en sí</strong> — ni al niño ni a la familia — a menos que Atención al Cliente te pida explícitamente que digas algo concreto. Tu trabajo ahora es la clase, no la conversación.</p>`)}
  `},
  {t:'🎯 7.2 · Tu próxima clase con este niño es el intento de retención', html:`
   <div class="card"><p>Puede que no tengas otra oportunidad de cambiar nada. Trata la próxima clase como el momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dale un turno real.</strong> No una pregunta sin sentido — un momento genuino en el que se sienta visto y le vaya bien.`},
     {ic:'🏆', html:`<strong>Incluye un logro temprano, fácil y visible.</strong> Debería salir de la clase sintiéndose capaz, no atrasado.`},
     {ic:'👀', html:`<strong>Hazlo sentir notado</strong> — de forma específica, no genérica. La misma regla que en cada conversación individual de esta capacitación.`},
     {ic:'🤐', html:`<strong>No menciones la solicitud.</strong> Esta clase no es el lugar para esa conversación, aunque el niño saque el tema — redirige con calidez y sigue enseñando.`}
   ])}
  `},
  {t:'📮 7.3 · Mantén informada a Atención al Cliente, rápido — sigue siendo tu trabajo', html:`
   <div class="card"><p>Atención al Cliente está gestionando la solicitud sin estar en tu clase. Lo que tú viste, con detalle y rápido, es información que no tienen otra forma de conseguir.</p></div>
   ${checkbox([
     'Un comentario en el BO con exactamente lo que viste — fechas, datos concretos, no impresiones',
     'Las palabras de la familia, textuales, si las tienes — no parafraseadas',
     'Cualquier cosa que ya adaptaste u ofreciste, para que Atención al Cliente no la duplique',
     'Tu Team Leader al tanto, el mismo día'
   ])}
   ${co('co-idea','💡',`<p>Puedes enterarte de que existe una solicitud a través de los propios comentarios de Atención al Cliente en el perfil del niño en el BO — no hay un sistema automático que te avise en cuanto una familia pide un reembolso. Tú le das señales a Atención al Cliente; ellos no te envían actualizaciones.</p>`)}
  `},
  {t:'🚧 7.4 · Qué puedes y qué no puedes hacer', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Puedes</th><th>🚫 Nunca puedes</th></tr>
   <tr><td>Avisar a Atención al Cliente a través del BO en cuanto te enteres de una solicitud</td><td>Confirmar que un reembolso fue aprobado</td></tr>
   <tr><td>Si surge una oportunidad natural <strong>antes</strong> de ese aviso, ofrecer algo concreto — una clase extra, una evaluación de nivel, recomendar otro curso</td><td>Confirmar o hablar de cualquier monto</td></tr>
   <tr><td>Decirle al padre o la madre que Atención al Cliente lo va a ayudar</td><td>Decir o insinuar algo más que eso sobre la solicitud</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>El mensaje que siempre es seguro decir:</strong> <em>“Atención al Cliente lo va a ayudar con esto.”</em> Nada más — ahí termina tu parte, y es una conversación para la que no tienes la información.</p>`)}
  `},
  {t:'🌱 7.5 · Las 2 a 4 clases después de la retención', html:`
   <div class="card"><p>Ya sea que se retire la solicitud, que el niño se quede en tu grupo, pase a otro tutor o a clases individuales — las próximas clases deciden si la retención realmente se sostuvo.</p></div>
   ${iconGrid([
     {ic:'🔁', html:`<strong>Cuidado extra, en cada una de esas clases</strong> — un turno real, un logro específico, una ausencia que se nota — todo lo que te enseñó esta capacitación, una y otra vez.`},
     {ic:'📝', html:`<strong>Un traspaso completo</strong> en los Comentarios del BO si el niño pasa a un tutor o formato nuevo — la misma disciplina de traspaso del Módulo 5.6.`},
     {ic:'👋', html:`<strong>Continuidad cálida</strong> si se queda contigo — no dejes que el alivio de “funcionó” haga que vuelvas, sin darte cuenta, a como hacías las cosas antes.`}
   ])}
  `},
  {t:'🔙 7.6 · La prevención sigue siendo lo principal', html:`
   <div class="card"><p>Todo lo que sigue ya está en los Módulos 1 a 6 — esta es la versión corta, como recordatorio de que la mayor parte de tu trabajo es evitar que este módulo llegue a ser necesario.</p></div>
   ${checkbox([
     'Dale seguimiento a la tarea, cada semana',
     'Mantén la estructura completa de la clase — no dejes que se relaje cuando un grupo parece fácil',
     'Reporta más de dos ausencias, o un problema técnico, en cuanto ocurra',
     'Escala a tu Team Leader en el momento en que veas una señal de riesgo',
     'Envía el reporte de atención al estudiante cuando se espere que lo hagas'
   ])}

  `}
 ],
 ix:{
  title:'Cuando la solicitud ya está hecha',
  instr:'Para cada escenario, elige el paso correcto. 70% para continuar.',
  items:[
   {type:'choice', prompt:'Acabas de enterarte de que una familia presentó una solicitud de reembolso para un niño de tu grupo. ¿Qué haces primero?', opts:['Escribirle a la familia para averiguar por qué, y así poder resolverlo directamente','Avisar a Atención al Cliente a través del BO y poner al tanto a tu Team Leader el mismo día','Esperar a que Atención al Cliente se comunique contigo antes de hacer nada'], correct:1, fb:'La solicitud ya está con Atención al Cliente — tu trabajo es hacerles llegar lo que sabes, rápido, no abrir tu propia conversación con la familia.'},
   {type:'choice', prompt:'En tu próxima clase con ese niño, ¿qué debería cambiar?', opts:['Nada — actuar distinto podría hacerle sospechar que algo anda mal','Darle un logro real y visible y asegurarte de que se sienta notado — sin mencionar la solicitud','Tener una conversación directa con el niño sobre por qué su familia quiere irse'], correct:1, fb:'La clase en sí es el intento de retención. La solicitud nunca es algo que se plantea con el niño.'},

   {type:'choice', prompt:'Un padre te pregunta directamente si su reembolso fue aprobado. ¿Qué le dices?', opts:['Le das tu mejor suposición según cómo suelen resolverse estos casos','Le dices que Atención al Cliente lo va a ayudar con esto, y lo dejas ahí','Le confirmas el monto que le corresponde, si llegas a saberlo'], correct:1, fb:'Confirmar una aprobación o un monto nunca te corresponde, por más seguro que te sientas. La única frase segura lo deriva a Atención al Cliente.'},
   {type:'choice', prompt:'La solicitud se retira y el niño se queda en tu grupo. ¿Y ahora?', opts:['Volver a la normalidad — la crisis terminó','Seguir dándole cuidado extra a ese niño durante las próximas clases, porque una retención todavía puede deshacerse','Decirle a la familia que te alegra que hayan cambiado de opinión'], correct:1, fb:'Una retención que se sostiene una clase y luego vuelve a la normalidad a menudo no se sostiene en absoluto. Las próximas clases son las que realmente lo deciden.'}
  ]
 }
},
{id:'checklist', numLabel:'Módulo 8', emoji:'✅', color:'var(--green-d)',
 title:'Lista de verificación final',
 desc:'Aquí no hay cuestionario — solo todo lo de esta capacitación, en una lista, antes de que hagas el examen.',
 obj:'Revisa la lista completa de abajo. Este módulo no se califica — léelo y luego pasa al examen final.',
 sections:[
  {t:'✅ Lo esencial, en una lista', html:`
   ${numlist([
     'Reviso el perfil del estudiante, incluidos los Comentarios, <strong>antes</strong> de mi primera clase con un niño nuevo',
     'Reviso la vista de Progreso de todo mi grupo una vez por semana — tanto En clase como En casa',
     'Trato una línea plana en cero como la lectura más grave que existe, no como una neutral',
     'Cada niño de mi grupo tiene un turno real, y puedo demostrarlo porque lo registro',
     'Cuando un niño falta a una clase, hago los cuatro pasos, no solo envío la grabación',
     'Reconozco los patrones que estoy viendo y respondo de forma distinta a cada uno',
     'Siempre aviso a mi Team Leader, involucro a Atención al Cliente cuando hace falta y dejo un comentario en el BO',
     'Cuando Atención al Cliente se hace cargo de una conversación, me mantengo al margen y sigo sus instrucciones',
     'Escalo una vez y luego doy seguimiento'
   ])}
  `},
  {t:'🪞 Autoevaluación — vale la pena hacértela cada semana', html:`
   ${numlist([
     '¿Noté una baja en el trabajo en clase o en la tarea de algún niño esta semana, incluso de uno que siguió asistiendo con normalidad?',
     '¿Hay algún niño de mi grupo en cero en el trabajo al que, sin darme cuenta, dejé de prestarle atención?',
     '¿Cada niño de mi grupo tuvo un turno real en mi última clase? ¿Estoy seguro o lo estoy suponiendo?',
     '¿Hay algo que noté y todavía no le conté a nadie?',
     '¿Hay algo que le conté a alguien y nunca le di seguimiento?'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Esa es toda la capacitación.</strong> Cuando estés listo, continúa al examen final — y luego completa el DST en el LMS para cerrar la asignación.</p>`)}
  `}
 ],
 gateExam:true
},
    ];
  }
};

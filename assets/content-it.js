/* Refunds training - Italian content (translated from the English source). */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    pageTitle:'Formazione sui rimborsi — Formazione Tutor Kodland',
    logoSub:'Dipartimento Sviluppo Tutor',
    heroEyebrow:'💸 Programma di formazione per tutor',
    heroTitle:'Capire i <span class="h-pill">rimborsi</span>',
    heroIntro:"Dietro ogni richiesta di rimborso c’è un bambino che stava costruendo qualcosa e si è fermato — e quasi sempre tu sei la prima persona a potersene accorgere. Questa formazione si concentra sulla tua capacità di osservazione e sulla tua prontezza nell’agire.",
    heroR1:'Impara esattamente a cosa prestare attenzione, durante la lezione e tra una lezione e l’altra.',
    heroR2:"Esercitati a leggere la sezione Progressi di un gruppo in una simulazione pratica del BO.",
    heroR3:"Scopri con precisione cosa devi risolvere in autonomia, cosa devi segnalare e a chi rivolgerti.",
    heroWork:'Completa 7 moduli e una checklist finale, poi passa al DST. Ogni modulo richiede un punteggio minimo del 70% per sbloccare il successivo.',
    startBtn:'🚀 Inizia la formazione',
    pathLabel:'Il tuo percorso di apprendimento',
    devTitle:'Modalità sviluppatore: sblocca tutti i moduli per la revisione',
    backToPath:'Torna al percorso',
    modulesPassed:'{done} / {total} moduli superati',
    moduleN:'Modulo {n}',
    of:'di',
    locked:'🔒 Bloccato',
    passedBadge:'✅ Superato · {pct}%',
    reviewedBadge:'✅ Rivisto',
    startBadge:'▶ Inizia',
    reviewBadge:'▶ Rivedi',
    objective:'Obiettivo',
    startCheck:'▶ Inizia la verifica del modulo',
    toExam:'▶ Continua con l’esame finale',
    doneBack:'✓ Fatto — torna al percorso',
    ixBadge:'📋 Verifica del modulo — 70% per sbloccare il modulo successivo',
    ixItemBadge:'📋 Verifica del modulo — domanda {i} di {n}',
    scoreSoFar:'Punteggio finora: {c} / {t}',
    continue:'Continua →',
    sortWrong:'Non proprio — la risposta corretta è «{label}».',
    resPassed:'Modulo superato!',
    resFailed:'Non ci sei ancora',
    resUnlocked:"Hai sbloccato il modulo successivo.",
    resNeed:'Ti serve il 70% per sbloccare il modulo successivo. Rivedi la sezione qui sopra e riprova la verifica.',
    resContinue:'Continua il percorso di apprendimento',
    resBack:'Torna al percorso',
    resReview:'Rivedi questo modulo',
    doneEyebrow:'Esame finale',
    doneTitle:'🎉 Complimenti!',
    doneP1:"🎉 <strong>Complimenti! Hai completato la formazione in autoapprendimento per migliorare le tue metriche sui rimborsi!</strong>",
    doneP2:"Ci sei quasi! Torna alla pagina della formazione nell’LMS da cui hai aperto questo corso. Il DST si trova direttamente sotto la formazione.",
    doneP3:'👉 <strong>Per considerare la formazione completata con successo devi completare e superare il DST.</strong> Se il DST non viene completato, la formazione resterà incompleta e potrebbe risultare scaduta.',
    doneP4:'Assicurati di completare il DST e di ottenere un punteggio sufficiente per chiudere correttamente l’assegnazione.',
    doneP5:'In bocca al lupo! ❤️',
    devUnlockAlert:'Modalità sviluppatore: tutti i moduli sono ora sbloccati per la revisione.',
    devOn:'🔓 Modalità sviluppatore ATTIVA — tutti i moduli sbloccati',
    devOff:'🔒 Modalità sviluppatore DISATTIVATA — progressi azzerati',
    devBadge:'🔓 MODALITÀ SVILUPPATORE',
    doLabel:'✅ Fai',
    avoidLabel:'🚫 Evita',
    noticeLabel:'Osserva:'
  },
  buildModules(){
    return [
{id:'intro', numLabel:'Introduzione', emoji:'💸', color:'var(--coral)',
 title:'Perché esiste questa formazione',
 desc:'Come appare un rimborso dal punto di vista del bambino, perché sei la prima persona a poterne cogliere i segnali e quale parte spetta a te.',
 obj:'Capire come viene vissuto un rimborso dal punto di vista del bambino, perché sei la prima persona a poterne cogliere i segnali e quale parte spetta a te.',
 sections:[
  {t:'📋 Sei qui per un motivo preciso: scoprilo subito', html:`
   <div class="card"><p>Qui sotto trovi i motivi per cui questa formazione potrebbe esserti stata assegnata. Trattiamo solo i rimborsi richiesti per motivi legati alla lezione — situazioni in cui possiamo aiutarti a gestirli: non solo per prevenirli in futuro, ma per evitare il rimborso e trattenere lo studente.. Detto questo, completare tutta la formazione ti darà una prospettiva più ampia, utile anche a prevenire i rimborsi dovuti ad altri motivi.</p></div>
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>🚩 Il motivo segnalato</th><th>👀 Come si presenta di solito</th><th>📍 Come ti aiuta questa formazione</th></tr>
   <tr><td><strong>Nessun interesse per la programmazione / per i corsi Kodland</strong></td><td>Sembra annoiato, partecipa per inerzia, chiede «tutto qui?» e non muove obiezioni concrete</td><td>Modulo 5.2 · Modulo 3.6</td></tr>
   <tr><td><strong>Organizzazione / disciplina della lezione</strong></td><td>La classe sembra caotica, un bambino monopolizza la scena, gli altri si zittiscono o si disconnettono</td><td>Modulo 5.5 · Modulo 3</td></tr>
   <tr><td><strong>Forte reazione negativa agli errori</strong></td><td>Si arrende subito, si agita per piccoli errori, ripete spesso e fin da subito «non ce la faccio»</td><td>Modulo 5.1 · Modulo 3.5</td></tr>
   <tr><td><strong>Dubbi sul modo di insegnare del tutor</strong></td><td>Non riguarda il comportamento di un singolo bambino, ma la lezione in sé</td><td>Parlane direttamente con il tuo Team Leader e il tuo Mentor Regionale; usa il Modulo 3 come ripasso</td></tr>
   </table></div></div>
  `},
  {t:'💔 Un rimborso è un bambino che smette di imparare', html:`
   <div class="card"><p>Dietro ogni richiesta di rimborso c’è un bambino che stava costruendo qualcosa e si è fermato, un gruppo che si rimpicciolisce, una famiglia che si è fidata di noi e ha deciso che non valeva la pena continuare.</p>
   <p>Ecco di cosa parla questa formazione. Non di un numero su una dashboard — ma di un bambino preciso, in uno dei tuoi gruppi, che si sta allontanando proprio adesso e non sa come dirlo.</p></div>
   <img src="Images/Image_1.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
  `},
  {t:'📉 I rimborsi non arrivano quasi mai all’improvviso', html:`
   <div class="card"><p>È la cosa più utile da sapere. Quando una famiglia chiede indietro i soldi, la situazione andava avanti da settimane — e gran parte si è svolta <strong>sotto gli occhi del tutor.</strong></p></div>
   ${stepFlow([
     {ic:'📋', label:'Le attività in classe non vengono più completate'},
     {ic:'🏠', label:'I compiti non vengono più consegnati'},
     {ic:'📵', label:'Iniziano le assenze alle lezioni'},
     {ic:'☎️', label:'Il genitore chiama qualcuno'}
   ])}
   <div class="card"><p>Nelle lezioni che precedono una richiesta di rimborso, lo schema è costante:</p></div>
   ${bigStat('39%→56%', `<p><strong>Le lezioni saltate</strong> aumentano bruscamente nell’ultimo tratto prima di una richiesta di rimborso.</p>`)}
   ${bigStat('35%→15%', `<p><strong>Il completamento dei compiti</strong> crolla altrettanto bruscamente nello stesso periodo.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted);margin-top:-4px;margin-bottom:14px">Dati basati sullo storico di diversi gruppi; le percentuali esatte possono variare in base alla regione.</p>
   ${co('co-danger','🚨',`<p><strong>Ecco la parte più importante per te.</strong></p><p>Un bambino che sta per lasciare il corso può sembrare del tutto normale nella lezione che stai tenendo. Il calo non riguarda necessariamente la sua attenzione in classe, ma la presenza <strong>e lo svolgimento delle attività.</strong> Quindi, il fatto che «in classe sembri tranquillo» non garantisce che vada tutto bene.</p>`)}
  `},
  {t:'🦸 Perché sei la persona più importante in tutto questo', html:`
   ${co('co-idea','💡',`<p><strong>Sei l’unica persona che vede questo bambino, in questo gruppo, ogni singola settimana.</strong> Nessuno nel Servizio Clienti, nelle Operazioni didattiche o nel team delle lezioni di prova può vedere un bambino che si zittisce o smette di provarci. <strong>Tu sì.</strong> L’intera formazione si riassume in due aspetti fondamentali: <strong>le tue capacità di osservazione e la tua tempestività nell’agire.</strong></p>`)}
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Di tua completa competenza</th><th>🔁 Da gestire con flessibilità — e da segnalare</th><th>🚫 Fuori dal nostro controllo</th></tr>
   <tr><td>Assicurarsi che il bambino si senta motivato e supportato a ogni lezione</td><td><strong>Livello troppo difficile o troppo facile.</strong> Adatta subito l’attività. Segnalalo perché venga rivisto.</td><td>Salute</td></tr>
   <tr><td>Garantire ad ogni bambino il proprio turno e un riscontro reale</td><td><strong>Un bisogno speciale di cui nessuno ti ha parlato.</strong> Adatta il tuo approccio. Segnalalo.</td><td>Situazione familiare</td></tr>
   <tr><td>Notare i primi segnali di allontanamento e intervenire</td><td><strong>Gruppo numeroso e vivace.</strong> Un’abilità che si impara — adatta il tuo approccio. Segnalalo se il divario resta troppo grande.</td><td>Situazione economica della famiglia</td></tr>
   <tr><td>Far percepire alla famiglia che c’è una persona reale a seguire i progressi</td><td><strong>Un cambio di tutor/gruppo/orario è stato vissuto male.</strong> Sii trasparente, allineati in fretta.</td><td></td></tr>
   <tr><td>Assicurarsi che chi ha perso delle lezioni le recuperi effettivamente</td><td><strong>Alla famiglia è stato detto qualcosa di diverso all’iscrizione.</strong> Chiarisci con onestà. Segnalalo.</td><td></td></tr>
   </table></div></div>
   ${co('co-danger','🚨',`<p><strong>Niente di tutto questo è colpa tua — ma il lavoro vero resta tuo.</strong> Adattare l’attività, cambiare il modo in cui gestisci il gruppo, proteggere un bambino durante un cambiamento. E altrettanto importante: <strong>dillo a qualcuno.</strong> Informa il tuo Team Leader, coinvolgi il Servizio Clienti, lascia il commento nel BO. Se non lo fai, il problema finisce nel silenzio — e qualche settimana dopo perdiamo il bambino.</p>`)}
  `},
  {t:'💬 Parlare con le famiglie: cosa fai tu e quando passi la mano', html:`
   <img src="Images/Image_2.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>I genitori vorranno parlare con te del percorso di apprendimento del figlio — <strong>fa parte del tuo lavoro</strong>, ed è importante mostrare calore e disponibilità.</p>
   <p>Ciò che <strong>non</strong> puoi fare è prendere l’<em>iniziativa su questioni organizzative</em>: spostare un bambino in un altro gruppo, cambiare un orario, un livello o un pacchetto, o approvare una lezione extra. Queste decisioni spettano al Servizio Clienti — che può intervenire solo se tu lo informi.</p></div>
   ${co('co-idea','💡',`<p><strong>La regola: occupati dell’apprendimento, delega le questioni organizzative.</strong> Sei il ponte tra la classe e chi ha il potere di intervenire sulla situazione del bambino, e un ponte è utile solo se le informazioni vi circolano <strong>rapidamente.</strong></p>`)}
  `},
  {t:'🔀 L’ordine conta: prima il Team Leader, poi la famiglia', html:`
   <div class="card"><p>C’è una procedura da rispettare: non seguirla significa rischiare che anche i messaggi scritti con le migliori intenzioni causino problemi.</p></div>
   ${co('co-danger','🚨',`<p><strong>Ogni volta che la situazione riguarda qualcosa che va oltre il tuo insegnamento</strong> — livello, gruppo, orario, un bisogno speciale, una promessa non mantenuta, una lezione persa — <strong>non scrivere prima di tutto alla famiglia.</strong></p>`)}
   ${stepFlow([
     {ic:'👩‍💼', label:'1. Allineati con il tuo Team Leader — spiega cosa hai visto, coinvolgi il Servizio Clienti, lascia un commento nel BO'},
     {ic:'🧭', label:'2. Concordate la strategia — definite quali opzioni sono realmente fattibili per il bambino e quali no'},
     {ic:'👪', label:'3. Poi contatta la famiglia — comunicando esattamente quanto concordato con il Team Leader, senza aggiungere altro'}
   ])}
   <div class="card"><p>Così non devi mai tirare a indovinare, non prometti mai troppo e non devi mai ritrattare.</p></div>
   ${co('co-danger','🚨',`<p><strong>Non spetta a te illustrare soluzioni e opzioni alternative, nemmeno dopo l’allineamento interno.</strong> Il tuo Team Leader ti dirà una di queste due cose:</p>
   <ul><li><em>«Di’ X alla famiglia»</em> → di’ esattamente quello, niente di più</li>
   <li><em>«Da qui ce ne occupiamo noi»</em> → <strong>ti tiri fuori dalla questione.</strong> Fornire alla famiglia due versioni diverse è il modo più rapido per distruggere la fiducia.</li></ul>`)}
  `},
  {t:'📌 Cosa puoi dire sempre e cosa deve sempre aspettare', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Di tua competenza — comunica apertamente, con empatia e tempestività</th><th>⏸️ Richiede sempre l’intervento del Team Leader</th></tr>
   <tr><td>Come se la sta cavando il bambino, cosa ha fatto bene, cosa trova difficile</td><td>Qualsiasi cosa su <strong>livelli, corsi, gruppi, orari, formati o pacchetti</strong></td></tr>
   <tr><td>Quale <strong>supporto stai dando tu</strong> durante la lezione e cosa hai adattato</td><td>Qualsiasi <strong>opzione, soluzione o alternativa proposta</strong> alla famiglia</td></tr>
   <tr><td>Far sapere che hai notato le sue difficoltà e che hai a cuore il suo benessere</td><td>Qualsiasi <strong>spiegazione di come qualcosa sia andato storto</strong>, o del perché</td></tr>
   <tr><td>Chiedere cosa aiuta questo bambino a imparare meglio</td><td>Qualsiasi questione di natura <strong>economica</strong></td></tr>
   <tr><td>Informazioni su una lezione persa e sul relativo recupero</td><td>Qualsiasi garanzia o promessa <strong>su</strong> eventi <strong>futuri</strong></td></tr>
   <tr><td>Comunicare in termini generali di aver segnalato il caso al team, senza scendere nei dettagli</td><td>Qualsiasi dettaglio su <strong>ciò che hai segnalato internamente</strong></td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p><strong>La differenza in sintesi: tu parli del bambino. Il tuo Team Leader e il Servizio Clienti parlano delle questioni contrattuali e organizzative.</strong></p>`)}
   ${co('co-danger','⛔',`<p><strong>Non promettere mai e non rifiutare mai.</strong></p><p>Né <em>«lo spostiamo in un altro gruppo».</em> Né <em>«non è possibile».</em> Sono entrambe decisioni che non spettano a te.</p>
   <p><strong>Ma evita anche freddezza e risposte evasive.</strong> Quello che devi sempre mostrare, fin da subito, è che vuoi davvero che questo bambino stia bene e viva la migliore esperienza di apprendimento possibile — e che ci stai già lavorando. <em>«L’ho notato, mi sta a cuore, sto verificando cosa possiamo fare e vi faccio sapere.»</em> Non è una promessa. È ciò che tiene la famiglia con noi mentre si cerca la risposta.</p>`)}
   <div class="card"><p><strong>Puoi sempre scrivere direttamente, senza chiedere autorizzazioni,</strong> riguardo alle consuete questioni didattiche: com’è andata la lezione, qualcosa che il bambino ha fatto bene, una lezione persa e cosa recuperare, una domanda su come se la cava a casa. Rispondi in modo pronto e caloroso su tutto questo — è il tuo lavoro, ed è ciò che rende possibili, più avanti, le conversazioni più difficili.</p></div>
  `}
 ],
 ix:{
  title:'Cosa mi compete, cosa adatto e segnalo, cosa non mi compete',
  instr:'Assegna ogni situazione reale alla categoria corretta. 70% per sbloccare il Modulo 1.',
  items:[
   {type:'sort', prompt:'«In un gruppo numeroso, uno studente si perde e non riesce a partecipare» —', card:'In un gruppo numeroso, uno studente si perde e non riesce a partecipare', zones:[
     {label:'Completamente mio', fb:'Non proprio — inizia cambiando il tuo approccio, ma se dopo un tentativo sincero il divario è ancora troppo grande, va segnalato anche questo.'},
     {label:'Da adattare e segnalare', fb:'Corretto — è un’abilità di gestione del gruppo che puoi cambiare da subito, dalla prossima lezione, e la segnali se dopo averci provato non basta ancora.'},
     {label:'Fuori dal nostro controllo', fb:'Non proprio — è un’abilità di gestione del gruppo, e si parte dall’adattare il tuo approccio.'}
   ], correctZone:1, fb:''},
   {type:'sort', prompt:'«Situazione economica della famiglia sono cambiate» —', card:'Situazione economica della famiglia sono cambiate', zones:[
     {label:'Completamente mio', fb:'Non proprio — le finanze di una famiglia sono davvero fuori dal nostro controllo.'},
     {label:'Da adattare e segnalare', fb:'Non proprio — le finanze di una famiglia sono davvero fuori dal nostro controllo, non qualcosa a cui adattarsi.'},
     {label:'Fuori dal nostro controllo', fb:'Corretto — è una causa davvero fuori dal nostro controllo. Sii gentile, non aspettarti nulla e non insistere.'}
   ], correctZone:2, fb:''},
   {type:'sort', prompt:'«Il livello è troppo avanzato per la sua età» —', card:'Il livello è troppo avanzato per la sua età', zones:[
     {label:'Completamente mio'},
     {label:'Da adattare e segnalare', fb:'Corretto — adatta subito l’attività e segnalalo, così che il livello stesso possa essere rivisto.'},
     {label:'Fuori dal nostro controllo'}
   ], correctZone:1, fb:'Non proprio — puoi adattare subito l’attività, e devi anche segnalarlo perché il livello venga rivisto. Contano entrambe le parti.'},
   {type:'sort', prompt:'«Ha smesso di consegnare i compiti» —', card:'Ha smesso di consegnare i compiti', zones:[
     {label:'Completamente mio', fb:'Corretto — accorgertene e intervenire (un colloquio individuale, un cambio di approccio) spetta interamente a te.'},
     {label:'Da adattare e segnalare'},
     {label:'Fuori dal nostro controllo'}
   ], correctZone:0, fb:'Non proprio — notare un calo nei compiti e fare un colloquio individuale rientra pienamente nel tuo insegnamento; non serve segnalarlo, a meno che non indichi un problema più grande, come un livello non adatto.'},
   {type:'sort', prompt:'«Nessuno mi ha detto che ha un bisogno educativo speciale» —', card:'Nessuno mi ha detto che ha un bisogno educativo speciale', zones:[
     {label:'Completamente mio'},
     {label:'Da adattare e segnalare', fb:'Corretto — adatta tutto ciò che puoi durante la lezione e segnalalo, così si possono valutare opzioni come le lezioni individuali.'},
     {label:'Fuori dal nostro controllo'}
   ], correctZone:1, fb:'Non proprio — adatti subito il tuo approccio e lo segnali anche, così si possono valutare opzioni più ampie.'},
   {type:'sort', prompt:'«Il genitore dice che gli era stato promesso qualcosa di diverso» —', card:'Il genitore dice che gli era stato promesso qualcosa di diverso', zones:[
     {label:'Completamente mio'},
     {label:'Da adattare e segnalare', fb:'Corretto — non puoi cambiare il passato, ma chiarisci con onestà e lo segnali, così la conversazione avviene tra i reparti.'},
     {label:'Fuori dal nostro controllo'}
   ], correctZone:1, fb:'Non proprio — va segnalato perché non si ripeta, anche se la discrepanza in sé non dipende da te.'},
   {type:'sort', prompt:'«Il bambino si annoia e finisce in dieci minuti» —', card:'Il bambino si annoia e finisce in dieci minuti', zones:[
     {label:'Completamente mio'},
     {label:'Da adattare e segnalare', fb:'Corretto — proponi subito una vera sfida extra e segnalalo come possibile caso di livello troppo facile.'},
     {label:'Fuori dal nostro controllo'}
   ], correctZone:1, fb:'Non proprio — la noia dovuta a un livello facile richiede subito una sfida extra nella tua lezione, più una segnalazione perché il livello venga rivisto.'}
  ]
 }
},
{id:'m1', numLabel:'Modulo 1', emoji:'👀', color:'var(--blue)',
 title:'Imparare a vederlo per tempo',
 desc:'Cosa osservare durante la lezione e tra una lezione e l’altra, e il momento in cui devi agire.',
 obj:'Sapere esattamente cosa osservare durante la lezione e tra una lezione e l’altra, distinguere un bambino che ha solo una giornata no da uno che sta per abbandonare il corso, e sapere in quale momento devi agire.',
 sections:[
  {t:'', html:`<div class="card"><p>Questo è il modulo più importante della formazione. Tutto il resto dipende dalla tua capacità di accorgertene in tempo.</p></div>`},
  {t:'👁️ 1.1 · Cosa notare durante la lezione', html:`
   <div class="card"><p>Questi sono segnali che nessun altro in azienda può notare. Non ti serve un report per individuarli, ma ti basta osservare.</p></div>
   <img src="Images/Image_4.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   ${iconGrid([
     {ic:'📷', html:`<strong>La videocamera si spegne</strong> e resta spenta, quando prima era accesa. È il campanello d’allarme più comune — i bambini che finiscono per abbandonare il corso hanno la videocamera accesa circa la <strong>metà</strong> del tempo rispetto al resto della classe.`},
     {ic:'🎤', html:`<strong>Il microfono non viene quasi più utilizzato (il tempo di</strong> utilizzo scende a circa un <strong>terzo</strong> rispetto ai compagni). Un bambino che ha smesso di parlare di solito ha smesso di sentirsi parte del gruppo.`},
     {ic:'💬', html:`<strong>Risposte di una sola parola</strong>, dove prima c’erano frasi intere. Se si tratta di un cambiamento improvviso, non è timidezza — è un segnale d’allarme.`},
     {ic:'🖥️', html:`<strong>Smette di condividere lo schermo</strong> durante le attività individuali. Spesso significa «non voglio farti vedere che sono bloccato» oppure «non ho ancora iniziato».`},
     {ic:'📝', html:`<strong>Inizia le attività in classe ma non le porta mai</strong> a termine — è il segno più evidente, durante la lezione, che sta rimanendo indietro.`},
     {ic:'✋', html:`<strong>Alza la mano e non viene interpellato</strong> — finché smette di farlo. <strong>Questa è una nostra responsabilità.</strong>`},
     {ic:'⏰', html:`<strong>Arriva in ritardo, esce in anticipo o si connette e disconnette di continuo.</strong> La presenza fisica c’è, ma l’impegno no.`},
     {ic:'😞', html:`<strong>Si zittisce o si frustra in fretta</strong> dopo un errore, soprattutto se è un comportamento nuovo.`},
     {ic:'⚡', html:`<strong>Finisce gli esercizi nella metà del tempo e poi disturba.</strong> Anche questo è un problema di livello: la noia si manifesta proprio come il disinteresse.`},
     {ic:'🔁', html:`<strong>Fa la stessa domanda di base più e più volte.</strong> Probabilmente il livello non è quello giusto — vedi il Modulo 5.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Il segreto è contestualizzare.</strong> Presi singolarmente, questi segnali non significano nulla. Tutti diventano significativi nel momento in cui sono <strong>diversi da come quel bambino è di solito</strong>, oppure <strong>diversi dal resto del gruppo nella stessa lezione.</strong></p>`)}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">La mano che nessuno chiama</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/12AOW3X9Vgm_cVzeOdjX5HN7Z2j-JV-lK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">In questo video vedrai uno studente che cerca di comunicare con il suo tutor tramite la chat, ma il tutor non sembra accorgersene.</div></div>
  `},
  {t:'📅 1.2 · Cosa notare tra una lezione e l’altra', html:`
   <div class="card"><p>Tra una lezione e l’altra hai qualcosa che la lezione dal vivo non può darti: la traccia di quanto il bambino stia davvero facendo il lavoro. Sono due cose distinte, ed <strong>entrambe contano.</strong></p></div>
   ${iconGrid([
     {ic:'🏫', html:`<strong>Lavoro in classe (In classe)</strong> — ciò che il bambino completa durante la lezione stessa. Ti dice se riesce a seguire <strong>quando ci sei tu</strong>. Quando cala, il problema è la difficoltà o il coinvolgimento in classe.`},
     {ic:'🏠', html:`<strong>Compiti (A casa)</strong> — ciò che il bambino completa da solo. Ti dice se il corso conta ancora <strong>quando tu non ci sei</strong>, e se la famiglia lo sostiene. È il segnale più difficile e più sincero.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Tieni d’occhio entrambi. Agisci su ciascuno dei due.</strong></p><p>Un bambino può partecipare attivamente in classe ma non consegnare mai i compiti — è un problema di motivazione e di sostegno familiare. Un bambino può fare i compiti ma avere difficoltà nel lavoro in classe — di solito è un problema di difficoltà o di distrazione durante la lezione. Ciascuno dei due, da solo, basta per agire. <strong>Non aspettare che vadano male entrambi.</strong></p>`)}
   ${bigStat('47%',`Il 47% dei bambini per i quali viene richiesto un rimborso <strong>frequenta meno della metà</strong> delle lezioni. La frequenza non è un pro forma: è il segnale più evidente di quanto il corso sia ancora importante per la famiglia.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Basato su andamenti storici di diversi gruppi; la cifra esatta può variare da regione a regione.</p>
  `},
  {t:'🔎 1.3 · L’errore che fanno quasi tutti', html:`
   <div class="card"><p>La maggior parte dei tutor va alla ricerca di un <strong>calo</strong> prestazionale, un momento in cui le cose iniziano a peggiorare. Questo approccio fa sfuggire la maggior parte dei casi.</p></div>
   ${co('co-danger','🚨',`<p><strong>Non cercare solo un peggioramento. Fai attenzione anche all’assenza totale di partecipazione.</strong></p>`)}
   ${bigStat('58.6%',`Dei casi di rimborso aveva compiti <strong>piatti, non in calo</strong> — il bambino aveva già smesso, o non aveva mai davvero iniziato. Non c’era nessun declino da notare.`)}
   ${bigStat('56.9%',`Il 56,9% dei casi presentava un calo nella partecipazione <strong>in classe</strong> — per questo, tra i due, è spesso il primo segnale a manifestarsi.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Basato su andamenti storici di diversi gruppi; le cifre esatte possono variare da regione a regione.</p>
  `},
  {t:'💔 1.4 · Perché non fare i compiti può prevedere un rimborso', html:`
   <img src="Images/Image_6.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Vale la pena chiarirlo, perché cambia l’urgenza con cui lo affronti.</p>
   <p>Un bambino che non fa il lavoro resta indietro. Un bambino che è rimasto indietro si sente perso durante la lezione. Un bambino che si sente perso durante la lezione smette di voler venire. La famiglia vede un bambino che non vuole andare a lezione e conclude: <em>«non gli interessa»</em> oppure <em>«questo corso non fa per lui».</em></p></div>
   ${co('co-idea','💡',`<p>Quando un genitore usa queste parole, sta descrivendo una spirale iniziata con <strong>tre progetti non consegnati.</strong> Il lavoro mancante non è solo il sintomo di un bambino che ha già deciso di andarsene — è parte di ciò che lo porta a decidere.</p>`)}
   ${co('co-idea','📌',`<p><strong>Quindi: una serie di attività in classe o compiti non consegnati è già di per sé un motivo per intervenire.</strong> Non è una situazione solo ’da monitorare” o da segnalare se peggiora. <strong>Agisci.</strong></p>`)}
  `},
  {t:'🧩 1.5 · I tre schemi', html:`
   <div class="card"><p>Quando ripercorri le ultime lezioni di un bambino, vedrai una di tre forme. Ognuna significa qualcosa di diverso e ognuna richiede una risposta diversa.</p></div>
   ${patternCards([
     {ic:'🐌', title:'La discesa lenta', desc:'Presenza e lavoro calano piano piano nel corso di diverse lezioni; mancano sempre più cose; videocamera spenta', note:'Il classico allontanamento. <strong>È quello che puoi invertire</strong> — prima ti muovi, più è probabile riuscirci. → Moduli 3 e 4'},
     {ic:'🧱', title:'Lo stop improvviso', desc:'Normale, normale, normale — poi più niente', note:'È successo qualcosa. Un conflitto di orari, un episodio, qualcosa a casa. <strong>Chiedi. Non dare nulla per scontato.</strong> → Modulo 4'},
     {ic:'✅', title:'Coinvolto, ma se ne va lo stesso', desc:'Frequenta, partecipa, fa il lavoro — eppure la famiglia chiede di interrompere', note:'<strong>La causa non è il coinvolgimento, e non sei tu.</strong> Più motivazione non risolverà nulla. <strong>Trova il vero motivo e indirizzalo in fretta.</strong> → Moduli 5 e 6'}
   ])}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Lo studente che non si è mai presentato</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RfFI5FTMg3DBHEiJtoG9DpJyjVoHFv74/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Uno dei casi più critici, da segnalare subito: uno studente che non si presenta dalla primissima lezione.</div></div>
  `},
  {t:'🚦 1.6 · Quando devi agire', html:`
   <div class="card"><p>Non serve averne la certezza. Serve stabilire una soglia limite, in modo che l«espressione «non ne ero sicuro» smetta di essere una scusa per non intervenire.</p><p><strong>Agisci questa settimana se si verifica una di queste condizioni:</strong></p></div>
   ${iconGrid([
     {ic:'📉', html:`Il bambino frequenta <strong>meno della metà</strong> delle lezioni`},
     {ic:'📊', html:`Lavoro in classe o compiti sono <strong>molto al di sotto della media del gruppo</strong> — come regola pratica, 15 punti o più`},
     {ic:'🤔', html:`La frequenza è irregolare — lo studente non è del tutto assente, ma non è costante — <strong>e</strong> si verifica anche una delle condizioni precedenti`},
     {ic:'0️⃣', html:`<strong>Due o più lezioni di fila</strong> senza nulla di consegnato`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Inoltre, intervieni immediatamente, a prescindere dalle statistiche, se:</strong> il bambino ha smesso di parlare o di farsi vedere in video; ha provato a partecipare ma non sei riuscito a dargli spazio; ha espresso un disagio; hai un brutto presentimento. <strong>Anche il tuo istinto è un segnale d’allarme valido.</strong></p>`)}
  `}
 ],
 ix:{
  title:'Discesa lenta, stop improvviso o coinvolto ma se ne va lo stesso?',
  instr:'Per ogni storico dei progressi anonimizzato, scegli di quale schema si tratta — poi scegli la prima mossa giusta. 70% per sbloccare il Modulo 2.',
  items:[
   {type:'choice', prompt:'Presenza e lavoro in classe di un bambino sono calati silenziosamente nelle ultime cinque lezioni, un po’ di più ogni volta, e la videocamera è rimasta spenta nelle ultime due.', opts:['La discesa lenta','Lo stop improvviso','Coinvolto, ma se ne va lo stesso'], correct:0, fb:'È la discesa lenta — il classico allontanamento, e quello che con più probabilità puoi invertire, quanto prima ti muovi.'},
   {type:'choice', prompt:'Nella scorsa lezione un bambino era del tutto normale — presenza completa, videocamera accesa, compiti fatti — e questa settimana semplicemente non si è presentato, senza alcun messaggio.', opts:['La discesa lenta','Lo stop improvviso','Coinvolto, ma se ne va lo stesso'], correct:1, fb:'È lo stop improvviso. È successo qualcosa — chiedi, non dare nulla per scontato.'},
   {type:'choice', prompt:'Un bambino ha frequentato tutte le lezioni, partecipa e consegna tutto il lavoro — eppure la famiglia ha appena chiesto di disdire.', opts:['La discesa lenta','Lo stop improvviso','Coinvolto, ma se ne va lo stesso'], correct:2, fb:'Coinvolto, ma se ne va lo stesso. La causa non è il coinvolgimento — è qualcosa come il livello, le aspettative, l’orario o le circostanze. Più motivazione non risolverà nulla; trova il vero motivo e indirizzalo.'},
   {type:'choice', prompt:'Per «la discesa lenta», qual è la prima mossa giusta?', opts:['Aspettare ancora qualche lezione per essere certi che sia davvero uno schema','Agire subito — è proprio quella che si inverte più facilmente quanto prima ti muovi','Considerarla temporanea e ricontrollare il mese prossimo'], correct:1, fb:'Le discese lente sono esattamente ciò che un’azione tempestiva può invertire. Aspettare significa sprecare il vantaggio che hai.'},
   {type:'choice', prompt:'Per «lo stop improvviso», qual è la prima mossa giusta?', opts:['Pensare che non sia niente e aspettare che torni da solo','Chiedere — scoprire cosa è successo davvero, invece di tirare a indovinare','Dire subito alla famiglia che il figlio sta restando indietro'], correct:1, fb:'Uno stop improvviso ha una causa precisa. Scopri qual è prima di decidere cosa fare.'},
   {type:'choice', prompt:'Per «coinvolto, ma se ne va lo stesso», qual è la prima mossa giusta?', opts:['Dare al bambino più lodi e incoraggiamenti per cercare di mantenerlo motivato','Scoprire qual è il vero motivo — livello, aspettative, orario, circostanze — e indirizzarlo in fretta','Concludere che non si può fare nulla, visto che il bambino andava già bene'], correct:1, fb:'Più motivazione non può risolvere una causa che non ha mai avuto a che fare con la motivazione. Scopri qual è davvero e falla arrivare in fretta alla persona giusta.'}
  ]
 }
},
{id:'m2', numLabel:'Modulo 2', emoji:'🖥️', color:'var(--blue)',
 title:'Leggere la schermata Progressi',
 desc:'Scopri, in meno di due minuti, se un bambino del tuo gruppo sta perdendo interesse — in pratica, in una simulazione del BO.',
 obj:'Scoprire, in meno di due minuti, se un bambino del tuo gruppo sta perdendo interesse — e verificare le due informazioni fondamentali da conoscere sempre prima della lezione inaugurale con un nuovo studente.',
 sections:[
  {t:'👤 2.1 · Prima della lezione inaugurale con un nuovo studente — da fare sempre', html:`
   <div class="card"><p>Uno dei passi più importanti prima di iniziare con un nuovo gruppo — e uno di quelli che possono prevenire molti problemi in seguito — è rivedere il profilo dello studente e i commenti del Servizio Clienti.</p></div>
   ${iconGrid([
     {ic:'🎂', html:`<strong>Età adeguata: verifica</strong> che l’età del bambino corrisponda a quella prevista per il corso.`},
     {ic:'🎯', html:`<strong>Interessi:</strong> scopri cosa appassiona il bambino. È utile per fare esempi mirati e per rompere il ghiaccio fin dalla prima lezione.`},
     {ic:'📝', html:`<strong>Note dei genitori o dei tutor precedenti.</strong> Soprattutto se il bambino arriva da un altro gruppo.`}
   ])}
   ${co('co-idea','💡',`<p>Queste informazioni ti aiutano a entrare in sintonia con ogni studente, a prevenire eventuali problemi e a richiedere modifiche ancor <strong>prima dell’inizio del corso.</strong></p>`)}
   <div class="card"><p>Nella simulazione seguente imparerai a consultare queste informazioni nel BO e a utilizzarle per prepararti al meglio al nuovo gruppo.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Profilo dello studente</span><iframe src="Simulacion_BO_M2_Profile_IT.html" title="BO — Profilo dello studente" loading="lazy"></iframe></div></div>
  `},
  {t:'📊 2.2 · La schermata Progressi — il tuo check settimanale da 60 secondi', html:`
   <div class="card"><p>Di seguito puoi vedere esattamente come si presenta la schermata Progressi. Segui i passaggi della simulazione per imparare dove si trovano il lavoro in classe e i compiti, cosa significa ogni colore e come leggere lo schema.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Progressi</span><iframe src="Simulacion_BO_M2_Progress_IT.html" title="BO — Progressi" loading="lazy"></iframe></div></div>
   ${co('co-danger','🚨',`<p>Guarda cosa ti dice la schermata di questo studente: punteggi alti e verdi in <strong>In classe</strong> — ma ogni singola cella di <strong>A casa</strong> è arancione, «non consegnato». <strong>Stesso studente, stesse lezioni, andamento opposto.</strong> Partecipa finché è sotto la tua supervisione, ma il corso perde importanza non appena la lezione finisce.</p>`)}
   <div class="card"><h4>Come interpretarla in meno di un minuto</h4>
   <ol><li><strong>Cerca le serie di zeri.</strong> <strong>Due di fila bastano per agire.</strong> Una serie consecutiva è l’elemento più forte di questa schermata — molto più informativa di qualsiasi singola cella.</li>
   <li><strong>Confronta le due schede dello stesso bambino.</strong> In classe alto, A casa vuoto → è con te durante la lezione, ma a casa il corso ha smesso di contare. In classe basso, A casa discreto → qualcosa nella lezione non funziona: difficoltà, ritmo o attenzione.</li>
   <li><strong>Confronta il bambino con il resto del gruppo.</strong> Gli stessi numeri significano cose diverse a seconda che tutti siano a 30/50 o solo questo bambino.</li>
   <li><strong>Guarda dove inizia la serie.</strong> Da quale lezione è partita? Torna a ciò che è successo lì — di solito la risposta è lì.</li>
   <li><strong>Controlla anche la presenza.</strong> Quella che vedi qui è la presenza registrata nel Back Office, non la presenza effettiva durante la lezione — leggila come «è venuto?», non come «quanto era coinvolto?».</li></ol></div>
   ${co('co-danger','🚨',`<p><strong>Esegui questo check una volta a settimana per tutto il gruppo, non solo per gli allievi che ti preoccupano.</strong> L’obiettivo del controllo è proprio far emergere ciò di cui <em>non</em> ti sei ancora accorto.</p>`)}
   ${co('co-idea','🧭',`<p><strong>Insegni in un corso in cui i compiti o le attività in classe si svolgono fuori dalla piattaforma?</strong> In questo caso la schermata Progressi non ti sarà d’aiuto: mancherà il tracciamento automatico, ma non per questo deve mancare l’informazione. Rendi il controllo proattivo anziché automatico: chiedi ai bambini di mostrare il proprio lavoro condividendo lo schermo, fai verifiche frequenti durante le attività individuali, assegna i compiti a voce in modo chiaro e nominali uno per uno alla lezione successiva. I segnali e le soglie d’allarme restano gli stessi, spetta solo a te individuarli attivamente.</p>`)}
  `}
 ],
 ix:{
  title:'Leggere il controllo — verifica rapida',
  instr:'In base all’esempio del BO qui sopra, rispondi a queste domande. 70% per sbloccare il Modulo 3.',
  items:[
   {type:'choice', prompt:'Nell’esempio qui sopra, i punteggi In classe di questo studente sono rimasti alti (verde), mentre A casa risultava «non consegnato» (arancione) in ogni lezione. Che cosa significa, con ogni probabilità?', opts:['Un problema di compiti/motivazione — il corso ha smesso di contare quando il tutor non guarda','Un problema di lavoro in classe/difficoltà nella lezione stessa','Niente — una sola scheda bassa non conta se l’altra va bene'], correct:0, fb:'In classe alto con A casa vuoto indica un problema di motivazione o di sostegno familiare a casa, non una difficoltà nella lezione.'},
   {type:'choice', prompt:'Se invece fosse il contrario — In classe in calo verso lo zero mentre A casa resta discreto — che cosa significherebbe, con ogni probabilità?', opts:['Un problema di compiti/motivazione a casa','Un problema di lavoro in classe/difficoltà — ritmo, difficoltà o poca attenzione ricevuta durante la lezione','Questo studente in realtà sta bene, visto che fa ancora i compiti'], correct:1, fb:'Se i compiti tengono mentre il lavoro in classe cala, di solito il problema sta nella lezione stessa — difficoltà, ritmo o attenzione.'},
   {type:'choice', prompt:'Qual è l’elemento singolo più forte da cercare quando controlli una vista Progressi?', opts:['Il punteggio più basso in qualsiasi punto della griglia','Una serie di due o più zeri (o «non consegnato») di fila','Se il totale del modulo sembra un numero tondo'], correct:1, fb:'Una serie consecutiva è molto più informativa di qualsiasi singola cella bassa — è il segnale più netto di tutta la schermata.'},
   {type:'choice', prompt:'Perché dovresti controllare sia In classe sia A casa per ogni bambino, ogni settimana — e non solo per quello che già ti preoccupa?', opts:['Perché lo scopo del controllo settimanale è trovare il bambino che non hai ancora notato','Perché è un obbligo formale, non perché faccia emergere qualcosa di nuovo','Perché A casa è più importante di In classe, quindi è l’unica scheda che vale la pena controllare'], correct:0, fb:'Un controllo vale la pena solo se fa emergere il bambino che non era ancora sul tuo radar.'},
   {type:'choice', prompt:'Prima della primissima lezione con un nuovo studente, cosa devi sempre controllare?', opts:['Niente — scoprirai ciò che ti serve sapere man mano che insegni','I campi Info e Commenti del profilo dello studente','Solo il suo registro presenze con il tutor precedente'], correct:1, fb:'Due minuti su Info e Commenti prima della prima lezione sono l’abitudine più economica e di maggior valore di tutta questa formazione.'}
  ]
 }
},
{id:'m3', numLabel:'Modulo 3', emoji:'🎬', color:'var(--blue)',
 title:'Agire durante la lezione',
 desc:'Usa la lezione stessa come intervento — il coinvolgimento è lo strumento più rapido che hai.',
 obj:'Usare la lezione stessa come intervento — perché una lezione virtuale, facoltativa e pomeridiana è una lezione a cui un bambino partecipa di nuovo solo se ha trovato un buon motivo per farlo.',
 sections:[
  {t:'🔌 3.1 · Perché qui il coinvolgimento pesa di più', html:`
   <div class="card"><p>I nostri studenti non sono obbligati a frequentare come a scuola. Sono a casa, con ogni distrazione a un clic di distanza, e senza la presenza fisica che in un’aula vera tiene viva l’attenzione. <strong>Il legame che crei in ogni lezione non è un piacevole extra — è la vera ragione per cui un bambino decide di ricollegarsi la settimana successiva.</strong></p>
   <p>E quando un bambino inizia davvero ad allontanarsi, la lezione è il tuo strumento più rapido. Non devi aspettare il permesso di nessuno per cambiare il modo in cui la conduci.</p></div>
  `},
  {t:'👋 3.2 · I primi minuti decidono molto', html:`
   <div class="card"><p>Il modo in cui inizia una lezione dà il tono a tutto ciò che segue. Un bambino che al momento del login viene accolto con calore ha un atteggiamento diverso rispetto a chi viene subito catapultato in un «aprite l’esercizio».</p></div>
   ${doavoid(
     ['Saluta con vera energia: <em>«che bello vederti oggi»</em>','Fai una domanda breve e personale prima dei contenuti','Spiega l’obiettivo della giornata, e fallo con convinzione','Saluta esplicitamente chi era stato assente: <em>«bentornato!»</em>'],
     ['Iniziare subito con la lezione senza salutare','Sembrare di fretta o sotto stress all’inizio','Non spiegare cosa si andrà a fare, o il perché','Lasciare che un bambino che rientra passi inosservato']
   )}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Un inizio piatto</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1GyQV2tEQq3OuDPfFI0NZTQRjWhg_9Rri/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Un inizio caloroso</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RqXcQLKBiWEhV97ZasJGIFuJhB8yU0Dh/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'💬 3.3 · Un feedback che motiva invece di limitarsi a correggere', html:`
   <div class="card"><p>Un complimento generico e ripetitivo — <em>«bravo», «bello»</em> — perde efficacia rapidamente e trasmette, implicitamente, il messaggio opposto: che non stai prestando vera attenzione al lavoro dell’allievo.</p></div>
   ${co('co-idea','🔁',`<p><strong>Evidenzia → Chiedi → Attiva</strong></p>
   <ol><li><strong>Evidenzia</strong> qualcosa di specifico che il bambino ha <em>deciso</em> di fare, e di’ perché funziona.</li>
   <li><strong>Fagli una</strong> domanda al riguardo con sincera curiosità, trattandolo come il vero esperto del suo progetto.</li>
   <li><strong>Attiva</strong> offrendo una scelta vera su cosa fare dopo.</li></ol>
   <p>Invece di dire solo <em>«Ottimo lavoro!»</em> → prova con <em>«Mi è piaciuto tantissimo che tu abbia fatto saltare il personaggio proprio lì: ci avevi pensato fin dall’inizio o ti è venuto in mente mentre creavi la scena? Vuoi inventare una storia per questo personaggio, o secondo te va bene così?»</em></p>`)}
  `},
  {t:'✋ 3.4 · Fare in modo che ogni bambino abbia un vero turno', html:`
   <div class="card"><p>I bambini tornano se trovano un ambiente in cui si sentono considerati e parte di un gruppo. Il modo più rapido per perderne uno è ignorare i suoi tentativi di partecipazione.</p></div>
   ${co('co-danger','🚨',`<p><strong>«Distribuire l’attenzione» non basta.</strong> Ogni tutor è convinto di farlo. <strong>Rendilo misurabile.</strong></p>
   <ul><li>Tieni l’elenco dei partecipanti in vista e <strong>spunta ogni nome quando quel bambino ha avuto il suo turno</strong> — non una semplice occhiata, ma una vera interazione.</li>
   <li><strong>A metà lezione, controlla chi non ha ancora la spunta.</strong> Rivolgiti a loro subito dopo.</li>
   <li>Usa chat e reazioni come un vero secondo canale, non come premio di consolazione: <em>«scrivete la vostra idea in chat e le leggo tutte ad alta voce».</em></li>
   <li><strong>Se un allievo finisce la lezione con una domanda rimasta in sospeso, assicurati che riceva una risposta scritta entro 24 ore.</strong></li>
   <li>Se il gruppo è troppo numeroso per riuscirci matematicamente, <strong>comunicalo al tuo Team Leader.</strong> È un problema organizzativo da risolvere, non un tuo fallimento personale.</li></ul>`)}
   ${doavoid(
     ['Sottolinea successi specifici: <em>«Sofia, la logica che hai usato qui è davvero pulita»</em>','Usa chat e reazioni così che anche i più silenziosi possano partecipare','Premia l’impegno: <em>«hai provato tre strade diverse — questo significa ragionare da programmatore»</em>','Segui i bambini uno a uno durante le attività individuali'],
     ['Lodi generiche rivolte a tutto il gruppo allo stesso modo','Prestare attenzione solo a chi finisce per primo','Trattare gli errori come qualcosa di negativo, o fornire le risposte prima che abbiano avuto il tempo di riflettere','Mantenere lo stesso ritmo per tutti, finendo per annoiare alcuni e mettere fretta ad altri']
   )}
  `},
  {t:'🧩 3.5 · Lo stesso consiglio non funziona con ogni bambino', html:`
   <div class="card"><p>Due bambini bloccati sullo stesso identico esercizio possono aver bisogno da te di cose opposte. Riconoscere alcuni schemi, e avere una mossa diversa pronta per ognuno, è ciò che trasforma una lezione generica in una lezione in cui ogni bambino vuole davvero esserci.</p></div>
   ${patternCards([
     {ic:'🙈', title:'Timido', desc:'Videocamera accesa ma parla poco; risposte brevi; non si offre mai volontario; si chiude quando viene messo sotto i riflettori', note:'Prima offri modalità di partecipazione a bassa pressione: chat, reazioni, un pollice in su. Coinvolgilo <strong>direttamente ma con discrezione</strong>.'},
     {ic:'😣', title:'Si frustra facilmente', desc:'«Non ce la faccio» arriva presto; molla al primo errore; visibilmente turbato dai piccoli errori', note:'Procedi a piccoli passi. Normalizza gli errori parlandone apertamente. Chiedigli come procede <strong>prima</strong> che la frustrazione aumenti.'},
     {ic:'🎯', title:'Perfezionista', desc:'Rifà la stessa cosa più volte; restio a consegnare qualcosa di «non finito»', note:'Elogia le sue scelte e i suoi tentativi. Dagli esplicitamente il permesso di consegnare un lavoro ancora imperfetto o in bozza.'},
     {ic:'⚡', title:'Si annoia in fretta', desc:'Finisce presto; una volta finito distrae gli altri; «tutto qui?»', note:'Tieni sempre pronta una vera sfida extra. Valuta di affidargli il ruolo di tutor per i compagni. <strong>Non lasciarlo mai con le mani in mano.</strong>'}
   ],2)}
  `},
  {t:'🎂 3.6 · Ciò che motiva cambia con l’età', html:`
   <div class="two-col">
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧒</span>Bambini più piccoli (circa 6–9 anni)</h4>
   <ul><li>La motivazione nasce dal legame e dal gioco, non da obiettivi a lungo termine.</li>
   <li>La soglia di attenzione è breve. È la tua energia a tenerli, più dei contenuti.</li>
   <li>Una cornice di fantasia funziona — una missione, un personaggio, una storia.</li>
   <li>I loro interessi specifici sono una via diretta alla loro attenzione.</li>
   <li>Vivono gli errori con maggiore peso emotivo. La rassicurazione deve essere immediata.</li>
   <li>Hanno bisogno di più ripetizione e di dimostrazioni pratiche prima di provare da soli.</li></ul></div>
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧑</span>Ragazzi più grandi (circa 10–14+ anni)</h4>
   <ul><li>La motivazione si sposta sulla competenza e sull’utilità pratica, sul capire <em>perché</em> un argomento è importante.</li>
   <li>Sono insofferenti a un tono condiscendente. Essere trattati come persone capaci è ciò che conta di più.</li>
   <li>Un feedback sul loro <strong>ragionamento logico e sulle loro scelte</strong> è più efficace di uno basato solo sull’impegno.</li>
   <li>Le dinamiche sociali assumono maggiore importanza: il giudizio dei coetanei influenza il coraggio di fare domande.</li>
   <li>Riescono a concentrarsi più a lungo, ma si disinteressano in fretta se il ritmo si trascina o sembra infantile.</li>
   <li>L’autonomia è fondamentale: lasciare loro la libertà di scegliere come affrontare un compito dà ottimi risultati.</li></ul></div>
   </div>
   ${co('co-idea','💡',`<p>Gli strumenti sono gli stessi a ogni età — un inizio caloroso, un feedback specifico, spazio per partecipare. Ciò che cambia è <strong>la leva motivazionale</strong>: i più piccoli hanno bisogno di divertirsi e di sentirsi importanti; i ragazzi più grandi hanno bisogno di capire l’utilità di ciò che fanno e di sentirsi competenti.</p>`)}
  `},
  {t:'🔧 3.7 · Quando la tecnologia si guasta', html:`
   <div class="card"><p>Gli imprevisti tecnologici capiteranno: uno schermo bloccato, un microfono che non funziona. A determinare se la lezione andrà a monte non è il guasto in sé, ma la reazione dell’adulto.</p></div>
   ${co('co-cute','🫂',`<p><strong>Il primo intervento deve essere emotivo, non tecnico.</strong> Reagisci con calma e minimizza l’accaduto ad alta voce. Un adulto tranquillo trasmette al bambino che non c’è nulla di cui preoccuparsi, e il gruppo si sintonizzerà sul tuo stato d’animo. Solo dopo aver riportato la calma avrà senso mettersi a risolvere il problema tecnico.</p>`)}
  `}
 ],
 ix:{
  title:'Abitudini in classe: da scartare o da conservare',
  instr:'Assegna ogni abitudine alla categoria corretta: abitudini che fidelizzano gli allievi, o abitudini che, senza che tu te ne accorga, rischiano di farteli perdere. 70% per sbloccare il Modulo 4.',
  items:[
   {type:'sort', prompt:'', card:'Spuntare il nome di ogni bambino quando ha un vero turno e controllare a metà lezione chi non l’ha ancora avuto', zones:[{label:'🌱 Costruisce la lezione', fb:'Corretto — è esattamente ciò che trasforma «distribuire l’attenzione» da intenzione in qualcosa di reale.'},{label:'🗑️ Ti fa perdere un bambino', fb:'Non proprio — tenere traccia dei turni reali è un’abitudine tesoro, non spazzatura.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Lodare tutto il gruppo con lo stesso «ottimo lavoro, ragazzi!» alla fine di ogni lezione', zones:[{label:'🌱 Costruisce la lezione', fb:'Non proprio — la lode generica e ripetuta è proprio il tipo di abitudine che smette di motivare senza che ce ne si accorga.'},{label:'🗑️ Ti fa perdere un bambino', fb:'Corretto — la lode generica ripetuta perde forza in fretta e dà l’impressione di non guardare davvero il lavoro.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Quando qualcosa si guasta, reagire con calma e normalizzarlo ad alta voce prima di risolvere il problema', zones:[{label:'🌱 Costruisce la lezione', fb:'Corretto — la prima mossa dopo un guasto tecnico è regolare le emozioni, non la soluzione in sé.'},{label:'🗑️ Ti fa perdere un bambino', fb:'Non proprio — mantenere la calma e normalizzare l’intoppo è proprio la prima mossa giusta.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Dare a ogni bambino del gruppo esattamente lo stesso ritmo e lo stesso compito, a prescindere da come sta andando', zones:[{label:'🌱 Costruisce la lezione', fb:'Non proprio — un unico ritmo fisso per tutto il gruppo è ciò che annoia alcuni e mette fretta ad altri.'},{label:'🗑️ Ti fa perdere un bambino', fb:'Corretto — lo stesso ritmo per tutti annoia alcuni e mette fretta ad altri; è uno dei fattori di disinteresse più evidenti.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Lasciare senza risposta una domanda in chat perché la lezione è finita', zones:[{label:'🌱 Costruisce la lezione', fb:'Non proprio — una domanda lasciata in sospeso è uno dei modi più chiari con cui un bambino conclude di non contare qui.'},{label:'🗑️ Ti fa perdere un bambino', fb:'Corretto — chi finisce una lezione con una domanda senza risposta dovrebbe ricevere una risposta scritta entro 24 ore.'}], correctZone:1, fb:''}
  ]
 }
},
{id:'m4', numLabel:'Modulo 4', emoji:'📞', color:'var(--blue)',
 title:'Agire tra una lezione e l’altra',
 desc:'Il colloquio individuale che funziona davvero, la gestione delle assenze e il tenere la famiglia aggiornata.',
 obj:'Fare, tra una lezione e l’altra, le cose che evitano che la demotivazione di un bambino si trasformi in una richiesta di rimborso: il colloquio individuale, la gestione delle assenze e il tenere la famiglia aggiornata.',
 sections:[
  {t:'🏠 4.1 · La routine dei compiti che funziona davvero', html:`
   <div class="card"><p>La costanza nella consegna dei compiti non avviene per caso. Quattro piccole abitudini, ogni volta, sono ciò che impedisce che le consegne si azzerino gradualmente senza che nessuno se ne accorga.</p></div>
   ${stepFlow([
     {ic:'🗣️', label:'1. Spiega — cosa sono e perché contano, a voce'},
     {ic:'⏰', label:'2. Ricorda — un promemoria prima della scadenza'},
     {ic:'🔦', label:'3. Fai notare — segnala in modo specifico cosa manca'},
     {ic:'📝', label:'4. Correggi — un commento vero, non solo un voto'}
   ])}
   ${iconGrid([
     {ic:'🗣️', html:`<strong>Spiega.</strong> Quando li assegni, di’ cosa sono e perché contano per la prossima lezione — non solo «fate gli esercizi da 1 a 5».`},
     {ic:'⏰', html:`<strong>Ricorda.</strong> Un breve promemoria prima della scadenza, soprattutto per i più piccoli — un messaggio, o un momento alla fine della lezione precedente.`},
     {ic:'🔦', html:`<strong>Evidenzia.</strong> Se mancano, dillo in modo specifico e per nome alla lezione successiva — non un generico «alcuni di voi non hanno fatto i compiti».`},
     {ic:'📝', html:`<strong>Correggi.</strong> Lascia <strong>un commento vero che la famiglia possa leggere</strong> — cosa è andato bene, cosa no, un passo concreto successivo. Una semplice spunta senza commento non serve a nulla.`}
   ])}
   ${co('co-idea','💡',`<p>Questa è la routine, ogni settimana, per ogni bambino — non solo per quelli che già ti preoccupano. Ed è anche ciò che dà un peso e un significato reale a un’eventuale mancata consegna: sai che non è perché nessuno ha spiegato, ricordato o notato.</p>`)}
  `},
  {t:'☎️ 4.2 · Il colloquio individuale che funziona davvero', html:`
   <div class="card"><p>Quando noti uno dei segnali del Modulo 1, questa è l’azione da compiere. Se il colloquio è condotto bene, spesso risolve il problema alla radice.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Cita esattamente ciò che hai notato.</strong> Una preoccupazione generica verrà percepita in modo altrettanto generico. Chiedi: <em>«Ho visto che non sei riuscito a completare gli ultimi due progetti»,</em> anziché un vago <em>«Va tutto bene?»</em>`},
     {ic:'🚧', html:`<strong>Indaga sulle difficoltà, non sull’atteggiamento.</strong> <em>«Cosa ti ha bloccato?»</em> — non <em>«perché non ti impegni?»</em> La prima spinge ad aprirsi, la seconda a mettersi sulla difensiva.`},
     {ic:'🤫', html:`<strong>Mai di fronte alla classe.</strong> Un messaggio privato, la chat, o l’ultimo minuto della lezione a tu per tu.`}
   ])}
   ${co('co-idea','💡',`<p>Poi <strong>ricontrolla due lezioni dopo</strong>, qualunque cosa sia successa. Un colloquio senza seguito insegna al bambino che te ne sei accorto, ma che in fondo non ti importava.</p>`)}
   <div class="card"><p>Uno dei modi per recuperare uno studente demotivato è la correzione dei compiti — e il <strong>modo</strong> in cui la facciamo. Nei due video qui sotto, guarda due casi molto diversi: uno in cui il tutor ignora che uno studente non ha fatto i compiti, e uno in cui il tutor lo coinvolge di nuovo, in modo dinamico, facendolo sentire parte del gruppo.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Il tutor che non motiva</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1zwbSiLXBj9mcqhKsFKNJriwSppbcEY5B/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Il tutor che motiva</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1m2m_RRNTf5zMh2-1NmExvEMGZX0DPIaK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'📵 4.3 · Quando un bambino salta una lezione', html:`
   <div class="card"><p>Inviare la registrazione della lezione non è un vero piano di recupero. <strong>Due lezioni perse all’inizio di un corso possono porvi fine</strong>, perché il bambino torna in una classe in cui tutti gli altri sanno fare qualcosa che lui non sa fare — mettendolo in difficoltà davanti al resto della classe.</p></div>
   ${timeline([
     {ic:'📅', label:'Lo stesso giorno', items:[
       '<strong>Scrivi alla famiglia</strong>, prima di tutto con calore: <em>«oggi abbiamo sentito la sua mancanza, va tutto bene?»</em> L’empatia prima di ogni altra cosa.',
       '<strong>Invia la registrazione indicando chiaramente il punto focale.</strong> Non dire «guardatevi tutta l’ora di lezione», ma segnala l’unico passaggio fondamentale.'
     ]},
     {ic:'⏳', label:'Prima della lezione successiva', items:[
       '<strong>Cinque minuti a tu per tu</strong>, oppure una breve spiegazione scritta dell’unico concetto chiave che gli serve per rimettersi in pari: un singolo concetto, non l’intera lezione.'
     ]},
     {ic:'🏫', label:'Nella lezione successiva', items:[
       '<strong>Dagli presto un successo facile e visibile</strong>, così rientra sentendosi capace e non indietro.',
       '<strong>Mostragli che hai notato la sua assenza</strong> — in breve e con calore. Fargli capire che la sua assenza è stata notata è esattamente lo scopo.'
     ]},
     {ic:'🚩', label:'Se ha saltato due o più lezioni', items:[
       '<strong>Avvisa il tuo Team Leader e lascia un commento nel BO, così che lo veda anche il Servizio Clienti.</strong> Questo è il momento in cui valutare internamente se offrire una lezione di recupero extra. Spetta a te sollevare la questione, ma non devi promettere la lezione alla famiglia, né escluderla a priori.'
     ]}
   ])}
  `},
  {t:'💌 4.4 · Avere la famiglia dalla propria parte', html:`
   <img src="Images/Image_3.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>La maggior parte delle famiglie che decide di ritirarsi non ha mai ricevuto un feedback positivo. Ci hanno sentiti al momento dell’iscrizione e poi il nulla, fino al verificarsi di un problema.</p></div>
   ${checkbox([
     `<strong>Scrivi qualcosa di specifico dopo una buona lezione.</strong> Una volta. Non serve che sia lungo: <em>«oggi oggi ha capito l’argomento da sola — volevo farvelo sapere.»</em> Questa singola abitudine cambia radicalmente il modo in cui la famiglia valuterà qualsiasi comunicazione futura.`,
     `<strong>Quando un bambino torna dopo un’assenza o una difficoltà, racconta alla famiglia il suo successo.</strong>`,
     `<strong>Se hai fatto una segnalazione al team interno, avvisa la famiglia</strong> specificando indicativamente quando riceveranno un riscontro. Il silenzio a seguito di un problema causa più danni del problema stesso.`,
     `<strong>Mostrati sempre disponibile a rispondere a domande sull’andamento didattico.</strong> Un genitore che vuole aggiornamenti sul figlio deve trovarti recettivo.`
   ])}
   ${co('co-danger','⛔',`<p><strong>E comunque: occupati della didattica, delega le questioni organizzative.</strong> Nessuna promessa su gruppi, orari, livelli, pacchetti, rimborsi o lezioni extra — non spetta a te concederli, né rifiutarli.</p>`)}
  `}
 ],
 ix:{
  title:'Scegli il messaggio',
  instr:'Per ogni scenario, scegli il messaggio giusto. 70% per sbloccare il Modulo 5.',
  items:[
   {type:'choice', prompt:'<strong>Scenario:</strong> un bambino non ha consegnato nulla nelle ultime due lezioni, ma continua a frequentare normalmente. Quale messaggio al <strong>bambino</strong> è quello giusto?', opts:[
     '«Va tutto bene? Ultimamente ti vedo un po’ strano.»',
     '«Non hai consegnato gli ultimi due progetti, e non è da te — cosa ti ha bloccato?»',
     '«Perché non stai facendo il tuo lavoro? Devi stare al passo.»'
   ], correct:1, fb:'Nominare la cosa specifica che hai notato, e chiedere dell’ostacolo invece che dell’atteggiamento, è ciò che apre davvero una conversazione, invece di provocare una difesa o un’alzata di spalle.'},
   {type:'choice', prompt:'<strong>Stesso scenario:</strong> il bambino non ha consegnato nulla per due lezioni, ma continua a frequentare normalmente. Quale messaggio alla <strong>famiglia</strong> è quello giusto?', opts:[
     '«Ho notato che [nome] non ha consegnato i lavori nelle ultime due lezioni — ne ho parlato con lui e volevo tenervi aggiornati.»',
     '«[Nome] non si impegna e forse dovrebbe passare a un gruppo più facile — possiamo parlare delle opzioni?»',
     '«Va tutto bene, volevo solo salutarvi!»'
   ], correct:0, fb:'Così informi la famiglia sui progressi del bambino e mostri che te ne stai occupando — senza suggerire un cambio di gruppo, di livello o qualsiasi opzione, che non spetta a te proporre alla famiglia.'},
   {type:'choice', prompt:'<strong>Nuovo scenario:</strong> un bambino ha saltato la lezione di ieri senza avvisare. Qual è la mossa giusta da fare in giornata?', opts:[
     'Mandare il link della registrazione senza alcun messaggio e aspettare che recuperi da solo',
     'Scrivere alla famiglia prima di tutto con calore («oggi ci è mancata, va tutto bene?»), poi mandare la registrazione più la parte che conta di più',
     'Aspettare la lezione successiva per parlarne, per non farne un caso più grande di quello che è'
   ], correct:1, fb:'Prima il calore, poi un riepilogo mirato — non un link lasciato lì e non il silenzio — è il vero piano di recupero, non il semplice «mandare la registrazione».'}
  ]
 }
},
{id:'m5', numLabel:'Modulo 5', emoji:'🧩', color:'var(--blue)',
 title:'Le otto situazioni',
 desc:'Per ciascuna degli otto motivi reali che spingono le famiglie ad allontanarsi: cosa notare, cosa fare e a chi dirlo.',
 obj:'Per ciascuna degli otto motivi reali che spingono le famiglie ad allontanarsi, sapere cosa notare, cosa fare durante la lezione, cosa fare al di fuori e a chi dirlo.',
 sections:[
  {t:'', html:`
   <h3 class="acc-big-title">🧩 Le 8 situazioni più comuni dietro un rimborso</h3>
  `},
  {t:'', html:`${accItem('😣 5.1 · Il lavoro è troppo difficile', `
   <img src="Images/Image_5.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Uno studente può mostrare diversi segnali di difficoltà. Può dire «non ce la faccio» presto e spesso, arrendersi dopo un errore o iniziare le attività in classe senza portarle a termine. Può anche diventare più silenzioso, smettere di condividere lo schermo o fare ripetutamente le stesse domande di base. A volte uno studente resta indietro dopo aver perso una sola lezione e non riesce mai a recuperare del tutto. Un altro campanello d’allarme è quando le prestazioni in classe rimangono scarse anche se continua a provare a fare i compiti.`)}
   ${stepIconBlock('⚡','Adatta — dalla prossima lezione, senza dover chiedere autorizzazioni', `<ul><li>Suddividi l’attività in micro-obiettivi facilmente raggiungibili (10 min)</li><li>Dai un obiettivo più semplice ed esplicito, a voce</li><li>Normalizza gli errori; chiedi come va <strong>prima</strong> che la frustrazione cresca</li><li>Ancora bloccato dopo 2 lezioni? Prenota una sessione con il tuo <strong>Mentor Regionale</strong> per avere idee didattiche</li></ul>`)}
   ${stepIconBlock('🗣️','Allineati — TL + Valutazione Tutor nel BO, questa settimana', `<ul><li>Riporta cosa vedi e come si sente il bambino</li><li>Chiedi una lezione di valutazione/livellamento se il divario è reale</li><li>Non sollevare mai di tua iniziativa la questione del livello con la famiglia</li></ul>`)}
   ${stepIconBlock('👪','Famiglia', `<p>Comunica solo ciò che ti compete: <em>«sto offrendo supporto extra durante le lezioni e ne ho parlato con il mio team.»</em> Niente sui livelli. Ricontrolla entro 2 lezioni.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Hai già ricevuto la richiesta di rimborso per questo motivo?</strong> Vai direttamente al Modulo 7 — il tentativo di recupero inizia nella tua prossima lezione con questo bambino.</p>`)}
  `)}
  ${accItem('😴 5.2 · Il lavoro è troppo facile', `
   <img src="Images/Image_7.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Uno studente può finire il lavoro in metà del tempo previsto e chiedere: «Tutto qui?». Una volta finito può distrarsi o distrarre gli altri, oppure dire che conosce già l’argomento. Un altro segnale importante è quando uno studente mostra grandi capacità ma costantemente non fa i compiti. Nelle statistiche, la noia può manifestarsi esattamente come il disinteresse, quindi è importante guardare oltre le apparenze.`)}
   ${stepIconBlock('⚡','Adatta — subito', `<ul><li>Una vera sfida extra, stessa abilità, richiesta o consegna più complessa</li><li>Un piccolo ruolo da tutor dei compagni nel gruppo</li><li>Offri una scelta; non lasciarlo mai senza niente da fare</li></ul>`)}
   ${stepIconBlock('🗣️','Allineati — TL + Valutazione Tutor nel BO, questa settimana', `<p>Di’ esattamente: <em>«serve un livello superiore, non è un problema di motivazione.»</em> Chiedi una lezione di valutazione/verifica del livello.</p>`)}
   ${stepIconBlock('👪','Famiglia', `<p>Comunica solo: <em>«impara molto in fretta, gli sto proponendo sfide extra e ne ho parlato con il mio team.»</em> Ricontrolla entro 2 lezioni.</p>${co('co-ok','✅',`<p>Questo caso si risolve spesso — ma solo se qualcuno ha detto qualcosa.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Hai già ricevuto la richiesta di rimborso per questo motivo?</strong> Vai direttamente al Modulo 7 — il tentativo di recupero inizia nella tua prossima lezione con questo bambino.</p>`)}
  `)}
  ${accItem('🧩 5.3 · Un bisogno educativo speciale', `
   <img src="Images/Image_8.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Arrivano bambini con autismo, ADHD, dislessia, bisogni sensoriali, ansia — e a volte con plusdotazione, che è anch’essa un bisogno educativo speciale e appare molto diversa dalla semplice noia. Può essere scritto nel profilo, essere stato menzionato una volta dalla famiglia o non essere mai stato esplicitato chiaramente. Spesso le famiglie danno prima un’altra spiegazione — <em>«ha perso interesse»</em>, <em>«non fa per lui»</em> — e il vero motivo emerge solo quando qualcuno fa le domande giuste.</p></div>
   ${noticeLine(`Una nota nel profilo (Modulo 2.1) · sovraccarico sensoriale · concentrazione che cala presto · reazioni forti a piccoli errori · disagio di fronte ai cambiamenti · lettura/scrittura lenta · grandi capacità con una motivazione instabile.`)}
   ${stepIconBlock('⚡','Adatta — è qui che sta la maggior parte del lavoro, ed è tutto tuo', `<ul><li>Unità più brevi, struttura prevedibile, <strong>preavviso a ogni passaggio</strong></li><li>Istruzioni scritte + orali; videocamera facoltativa</li><li>Adatta l’attività stessa; proteggi la routine sopra ogni cosa</li><li>Il tuo <strong>Mentor Regionale</strong> può aiutarti a costruire un piano per questo bambino in particolare</li></ul>${co('co-danger','🚨',`<p>Prima impegnati davvero. Ma se il divario resta troppo grande, <strong>segnalalo subito ai referenti competenti (escalation)</strong> — non è un fallimento.</p>`)}`)}
   ${stepIconBlock('🗣️','Allineati — TL subito + Valutazione Tutor nel BO', `<p>Se le lezioni individuali o un tutor esperto di bisogni educativi speciali potessero aiutare, <strong>suggeriscilo internamente, ma non prometterlo alla famiglia.</strong></p>`)}
   ${stepIconBlock('👪','Famiglia — con delicatezza', `<p>Controlla prima il profilo (2.1); se non c’è nulla, chiedi con garbo. Scrivi ciò che scopri nei Commenti del BO.</p>${co('co-danger','⛔',`<p>Mai: <em>«non riesce a stare al passo»</em> o qualsiasi frase che suoni come una diagnosi. Ricontrolla ogni 2 lezioni, e sempre dopo ogni cambiamento.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Hai già ricevuto la richiesta di rimborso per questo motivo?</strong> Vai direttamente al Modulo 7 — il tentativo di recupero inizia nella tua prossima lezione con questo bambino.</p>`)}
  `)}
  ${accItem('📐 5.4 · Il bambino, l’età o il formato non sono adatti', `
   <img src="Images/Image_9.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Uno studente può avere difficoltà perché non ha ancora le capacità di lettura richieste dal materiale o perché non riesce a restare concentrato per tutta la lezione. In alcuni casi il corso può richiedere abilità ben al di sopra della sua età o del suo livello attuale. Altri ostacoli possono essere la difficoltà di una famiglia ad adattarsi al formato di apprendimento online o una barriera linguistica non individuata prima. Questi segnali possono indicare che il problema non è il coinvolgimento, ma una mancata corrispondenza tra le esigenze dello studente e l’ambiente di apprendimento.`)}
   ${stepIconBlock('⚡','Adatta', `<p>Prova di tutto — accorcia, semplifica, più dimostrazioni, più attenzione individuale. Conosci il limite: a un bambino che non sa ancora leggere non si può insegnare con un corso basato in gran parte sulla lettura.</p>`)}
   ${stepIconBlock('🗣️','Allineati — TL + Valutazione Tutor nel BO', `<p>Di’ esattamente: <em>«è una questione di collocazione, non di motivazione.»</em> Indirizza la questione al team corretto — non è una decisione che spetta a te prendere.</p>`)}
   ${stepIconBlock('👪','Famiglia — solo se te lo chiede il TL', `<p>Possono esistere diverse opzioni, ma <strong>non sei tu a presentarle.</strong> Segui il messaggio esatto che ti dà il tuo TL, oppure resta fuori dalla questione.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Hai già ricevuto la richiesta di rimborso per questo motivo?</strong> Vai direttamente al Modulo 7 — il tentativo di recupero inizia nella tua prossima lezione con questo bambino.</p>`)}
  `)}
  ${accItem('👥 5.5 · Il gruppo è troppo numeroso e il bambino non ha mai il suo turno', `
   <img src="Images/Image_10.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${co('co-idea','🎯',`<p><strong>È l’unica situazione di questo elenco che riguarda direttamente il comportamento del tutor — e quindi quella che puoi risolvere più in fretta.</strong></p>`)}
   <div class="card"><p>Un bambino che alza la mano, aspetta, non viene chiamato e resta con domande senza risposta concluderà di non contare in questo gruppo. Possono bastare due lezioni.</p></div>
   ${noticeLine(`Fai attenzione ai bambini che smettono di alzare la mano, alle domande in chat che restano senza risposta o ai soliti due o tre studenti che rispondono ogni volta. Fai attenzione anche agli studenti che trascorrono un’intera lezione senza interagire nemmeno una volta con te.`)}
   ${stepIconBlock('⚡','Adatta — è un’abilità, e si può imparare', `<ul><li>Tracciamento dei turni (3.4): elenco visibile, una spunta per turno, controllo a metà lezione</li><li>Segmenti più brevi, chat usata in modo mirato, coppie/piccoli compiti</li><li>Rispondi per iscritto entro 24 h a ogni domanda rimasta senza risposta</li><li>Una sessione con il tuo <strong>Mentor Regionale</strong> serve proprio a questo — chiedila se non sta funzionando</li></ul>`)}
   ${stepIconBlock('🗣️','Allineati — TL', `<p>Solo dopo averci provato davvero: dimensione del gruppo, formato, chi resta escluso, cosa hai cambiato. Un gruppo più piccolo è possibile, ma solo se il TL lo sa.</p>`)}
   ${stepIconBlock('👪','Famiglia — solo se concordato con il TL', `<p>Non proporre di tua iniziativa un cambio di gruppo. Puoi dire con calore che te ne sei accorto e che stai cambiando il modo in cui conduci il gruppo — quella parte è tua.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Hai già ricevuto la richiesta di rimborso per questo motivo?</strong> Vai direttamente al Modulo 7 — il tentativo di recupero inizia nella tua prossima lezione con questo bambino.</p>`)}
  `)}
  ${accItem('🔀 5.6 · Un cambio di tutor, gruppo o orario è stato vissuto male', `
   <img src="Images/Image_11.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>La continuità conta molto più di quanto sembri, e conta soprattutto per i bambini già più fragili.</p></div>
   ${co('co-ok','✅',`<p><strong>Una buona notizia da dire ad alta voce: questo caso di solito si risolve.</strong> Abbiamo molti tutor e molti gruppi — c’è quasi sempre un’altra soluzione da trovare, ma solo se il problema viene segnalato in fretta, mentre la famiglia vuole ancora una soluzione e non una via d’uscita. Le tre cose che decidono l’esito: trasparenza, rapidità e tutti informati — la famiglia, il tuo TL, il Servizio Clienti e un commento nel BO.</p>`)}
   <div class="card"><h4 style="margin-bottom:10px">👋 Se lasci il gruppo</h4>${iconGrid([
     {ic:'📝', html:`<strong>Passaggio di consegne nei Commenti del BO:</strong> bisogni speciali, cosa lo motiva, dove è bloccato, situazione familiare.`},
     {ic:'🗣️', html:`<strong>Chiedi al TL come</strong> comunicarlo, e a chi — concordalo prima, poi fai esattamente quello.`}
   ])}</div>
   <div class="card"><h4 style="margin-bottom:10px">🙋 Se arrivi nel gruppo</h4>${iconGrid([
     {ic:'📖', html:`<strong>Leggi prima il passaggio di consegne</strong>.`},
     {ic:'💬', html:`<strong>Menziona il cambiamento</strong>, in modo conciso e positivo.`},
     {ic:'🏷️', html:`<strong>Impara tutti i nomi</strong> fin dalla prima lezione.`},
     {ic:'⏸️', html:`<strong>Non cambiare nient’altro</strong> per 2 lezioni.`}
   ])}</div>
   <div class="card"><p>Per un passaggio di consegne ordinario e pianificato, nella maggior parte delle regioni è il tutor — non il Servizio Clienti — ad annunciare il cambiamento direttamente nella chat del gruppo e a presentarsi. Di solito il Servizio Clienti interviene solo per cambi imprevisti o casi delicati.</p></div>
   ${stepIconBlock('🗣️','Allineati — TL', `<p>Subito se un bambino ha un bisogno educativo speciale, o se un nuovo orario non va bene a una famiglia.</p>`)}
   ${stepIconBlock('👪','Famiglia — come nuovo tutor, con calore', `<p style="font-style:italic">«Ciao a tutti! Sono [nome] e da oggi seguirò il vostro gruppo — ho già letto le note su [bambino], così ripartiamo esattamente da dove si era fermato.»</p><p>Solo entusiasmo — non il motivo del cambiamento.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Hai già ricevuto la richiesta di rimborso per questo motivo?</strong> Vai direttamente al Modulo 7 — il tentativo di recupero inizia nella tua prossima lezione con questo bambino.</p>`)}
  `)}
  ${accItem('⚠️ 5.7 · Qualcosa non ha funzionato da parte nostra', `
   <img src="Images/Image_12.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Una lezione persa per un malfunzionamento della piattaforma, una cancellazione, un problema tecnico che ha fatto perdere gran parte della lezione.</p></div>
   ${co('co-danger','🚨',`<p><strong>La cosa peggiore che un tutor possa dire qui è «non è possibile».</strong> Un bambino perde lezioni perché la nostra piattaforma non ha funzionato, la famiglia chiede una lezione di recupero, il tutor risponde che non si può — la famiglia perde fiducia e chiede un rimborso. <strong>Non è mai stata una decisione del tutor.</strong> Due lezioni perse o compromesse sono la soglia che la maggior parte delle regioni usa per aprire la discussione su una lezione di recupero extra, anche se la decisione finale spetta sempre al tuo TL. Avviare questa discussione è compito tuo. Prenderne la decisione finale no.</p>`)}
   ${stepIconBlock('⚡','Adatta', `<p>Mantieni la calma, normalizza (3.7), proteggi il clima del gruppo, manda la registrazione, segui il piano di recupero (4.3).</p>`)}
   ${stepIconBlock('🗣️','Allineati — TL in giornata', `<ul><li>Discuti una lezione di recupero extra</li><li>Coinvolgi il Servizio Clienti se la famiglia è scontenta o se c’è una questione commerciale</li><li>Compila una Valutazione Tutor nel BO</li></ul>`)}
   ${stepIconBlock('👪','Famiglia — concorda prima il messaggio con il TL, in giornata', `<p><em>«Ne ho parlato con il mio team e vi faremo sapere»</em> — poi assicurati che qualcuno lo faccia, oggi.</p>${co('co-danger','⛔',`<p>Non promettere mai la lezione extra, non escluderla mai. Follow-up: alla lezione successiva dagli il primo vero turno.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Hai già ricevuto la richiesta di rimborso per questo motivo?</strong> Vai direttamente al Modulo 7 — il tentativo di recupero inizia nella tua prossima lezione con questo bambino.</p>`)}
  `)}
  ${accItem('📢 5.8 · «Non è quello che ci avevano detto»', `
   <img src="Images/Image_13.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Un genitore ti dice che il livello, il pacchetto, l’orario o il corso stesso non corrispondono a ciò che pensava di aver acquistato. È la conversazione più scomoda per un tutor, e la più facile da peggiorare.</p>
   <p><em>Le aspettative create prima dell’inizio del corso sono alla base di una larga parte di tutte le richieste di rimborso — più di qualsiasi altra singola causa.</em></p></div>
   ${stepIconBlock('⚡','Adatta', `<p>Per il bambino non cambia nulla — continua a insegnare bene.</p>`)}
   ${stepIconBlock('🗣️','Allineati — TL + Servizio Clienti, prima di rispondere a qualsiasi cosa', `<ul><li>Porta la questione al tuo TL in giornata</li><li>Coinvolgi il Servizio Clienti — sono loro a gestire i passi successivi</li><li>Riporta le parole della famiglia testualmente in una Valutazione Tutor nel BO</li></ul><p>Va bene dare una conferma di ricezione: <em>«grazie, segnalo la questione al mio team e vi faccio sapere». Tuttavia, questa</em> non sostituisce una risposta risolutiva. <span style="font-size:12.5px">(Se ciò che chiedono è qualcosa di piccolo — una lezione extra — spesso tu e il tuo TL potete risolverlo direttamente, senza il Servizio Clienti. Chiedi al tuo TL quale caso si applica.)</span></p>`)}
   ${stepIconBlock('👪','Famiglia — solo con il via libera del TL', `<ol><li>Riconosci ciò che ti dicono, senza dare colpe</li><li>Mostra che il bambino ti sta a cuore</li><li>Passa la questione al Servizio Clienti in modo ordinato</li></ol>${co('co-danger','⛔',`<p>Mai: incolpare un collega, discutere o proporre soluzioni di tua iniziativa.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Hai già ricevuto la richiesta di rimborso per questo motivo?</strong> Vai direttamente al Modulo 7 — il tentativo di recupero inizia nella tua prossima lezione con questo bambino.</p>`)}
  `)}
  `}
 ],
 ix:{
  title:'Otto scenari, otto azioni iniziali',
  instr:'Per ogni situazione anonimizzata, scegli a quale delle otto categorie appartiene, poi scegli la prima mossa corretta. 70% per sbloccare il Modulo 6.',
  items:[
   {type:'choice', prompt:'«Dice che non ci riesce, scoppia a piangere al primo errore e ha smesso di finire il lavoro in classe.» — di quale situazione si tratta?', opts:['Il lavoro è troppo difficile','Il lavoro è troppo facile','Un bisogno educativo speciale'], correct:0, fb:'Fallimenti ripetuti fin dall’inizio e l’abbandono al primo errore sono il profilo classico di un lavoro troppo difficile.'},
   {type:'choice', prompt:'La prima mossa giusta per questa situazione è —', opts:['Scrivere alla famiglia proponendo un cambio di livello','Spezzare l’attività in passi più piccoli e dare un obiettivo ridotto ed esplicito — a partire da questa lezione','Andare avanti come previsto; il livello non è qualcosa che puoi modificare'], correct:1, fb:'Adatta subito l’attività tu stesso — la questione del livello, se serve, va al tuo Team Leader e al Servizio Clienti, mai direttamente alla famiglia.'},
   {type:'choice', prompt:'«Finisce in un terzo del tempo, poi inizia a distrarre il compagno accanto. Niente compiti da tre settimane.» — di quale situazione si tratta?', opts:['Il lavoro è troppo facile','Un bisogno educativo speciale','Situazione familiare'], correct:0, fb:'Finire in fretta, disturbare e zero compiti è noia dovuta a un livello troppo facile — sembra disinteresse, ma non lo è.'},
   {type:'choice', prompt:'La prima mossa giusta per questa situazione è —', opts:['Dare subito una vera sfida extra legata alla stessa abilità e segnalarlo come possibile passaggio di livello','Segnalarlo e aspettare la revisione del livello prima di cambiare qualsiasi cosa','Pensare che semplicemente non sia motivato e incoraggiarlo di più'], correct:0, fb:'Qui servono entrambe le parti: adattare subito perché non si annoi per settimane, e segnalare subito perché il livello stesso venga rivisto.'},
   {type:'choice', prompt:'«Durante la lezione di prova la famiglia ha detto che ha l’ADHD, ma non è mai stato scritto da nessuna parte e nessun tutor si è adattato.» — di quale situazione si tratta?', opts:['Il gruppo è troppo numeroso','Un bisogno educativo speciale','Qualcosa non ha funzionato da parte nostra'], correct:1, fb:'È esattamente il caso di bisogno educativo speciale che sfugge più spesso — l’informazione esisteva, ma non è mai arrivata alla lezione.'},
   {type:'choice', prompt:'La prima mossa giusta per questa situazione è —', opts:['Aspettare una diagnosi ufficiale prima di cambiare qualsiasi cosa','Adattare subito la lezione — unità più brevi, struttura prevedibile, passaggi annunciati — e allinearsi con il Team Leader e il Servizio Clienti, più un commento nel BO','Dire alla famiglia che forse il figlio non è adatto a questo formato'], correct:1, fb:'Adatti tu stesso tutto ciò che puoi, subito, e ti assicuri anche che resti agli atti, così che il prossimo tutor e il Servizio Clienti lo sappiano.'},
   {type:'choice', prompt:'«Due bambini del mio gruppo vivace di dieci non hanno avuto un vero scambio con me da tre lezioni, e una ha smesso di alzare la mano.» — di quale situazione si tratta?', opts:['Il bambino, l’età o il formato non sono adatti','Il gruppo è troppo numeroso e il bambino non ha mai il suo turno','Non è quello che ci avevano detto'], correct:1, fb:'È chiaramente una questione di gestione del gruppo — e l’unica situazione dell’elenco che riguarda direttamente il comportamento del tutor.'},
   {type:'choice', prompt:'La prima mossa giusta per questa situazione è —', opts:['Segnalare la dimensione del gruppo al Team Leader e aspettare una decisione prima di cambiare qualsiasi cosa','Cambiare il modo in cui conduci proprio questo gruppo — tracciare i turni, usare la chat in modo mirato, ristrutturare i segmenti — e fare escalation solo se non basta ancora','Concentrarti sui bambini che partecipano, visto che sono chiaramente più coinvolti'], correct:1, fb:'È un’abilità che puoi applicare subito. Fai escalation perché ci hai provato davvero e il divario resta troppo grande — non al posto di provarci.'},
   {type:'choice', prompt:'«Un genitore dice che gli avevano detto che sarebbero state lezioni individuali, non un gruppo di otto.» — di quale situazione si tratta?', opts:['Un cambio di tutor, gruppo o orario è stato vissuto male','Non è quello che ci avevano detto','Il lavoro è troppo difficile'], correct:1, fb:'Una discrepanza tra ciò che era stato promesso e ciò che viene offerto è esattamente «non è quello che ci avevano detto» — la più delicata delle otto.'},
   {type:'choice', prompt:'La prima mossa giusta per questa situazione è —', opts:['Spiegare come funzionano le lezioni di gruppo e perché hanno valore didattico','Confermare di aver ricevuto il messaggio, poi portare la questione al Team Leader e al Servizio Clienti in giornata, prima di rispondere davvero — e riportare testualmente le parole della famiglia nel BO','Scusarsi per il malinteso e offrirsi di verificare il passaggio a lezioni individuali'], correct:1, fb:'Rispondere da soli — anche in modo ragionevole — è il modo in cui i tutor finiscono, senza volerlo, per confermare un reclamo o lasciar intendere qualcosa che non possiamo garantire. Prima ci si allinea, sempre.'}
  ]
 }
},
{id:'m6', numLabel:'Modulo 6', emoji:'🧭', color:'var(--blue)',
 title:'A chi dirlo, e quanto in fretta',
 desc:'Trasforma tutto ciò che hai visto finora in qualcosa che accade davvero — la mappa di indirizzamento e le cinque regole.',
 obj:'Trasformare tutto ciò che hai visto finora in un’azione concreta — sapendo istintivamente, a chi dirlo e quanto in fretta.',
 sections:[
  {t:'⏱️ 6.1 · La velocità è tutto', html:`
   <div class="card"><p>Ogni situazione del Modulo 5 ha la stessa forma: si risolve se affrontata subito, diventa critica se ignorata. Un livello sbagliato individuato alla terza lezione si sistema. Lo stesso livello sbagliato alla quindicesima lezione è già diventato <em>«non gli interessa più»</em> — e a quel punto la famiglia ha smesso di crederci.</p></div>
   ${co('co-idea','💡',`<p><strong>Sei il ponte tra la lezione e le persone che possono cambiare la situazione del bambino. Un ponte è utile solo se le informazioni vi circolano rapidamente.</strong></p>`)}
  `},
  {t:'🗺️ 6.2 · La mappa di indirizzamento', html:`
   <div class="tbl-full"><div class="card"><table>
   <tr><th>🔎 Cosa hai notato</th><th>① Durante la lezione</th><th>② Tra una lezione e l’altra</th><th>③ A chi lo dici + BO</th><th>④ La famiglia</th><th>⏱️ Quanto in fretta</th></tr>
   <tr><td><strong>Frequenza inferiore al 50%</strong>, o rendimento nettamente inferiore al resto della classe</td><td>Dai un vero turno e un successo raggiungibile</td><td>Colloquio individuale privato con il bambino</td><td>Team Leader se passano altre due lezioni senza cambiamenti</td><td>Messaggio breve e caloroso — puoi mandarlo tu</td><td>In settimana</td></tr>
   <tr><td><strong>Due o più lezioni senza nulla di consegnato</strong></td><td>Controlla il lavoro dal vivo con la condivisione schermo; riduci l’obiettivo</td><td>Colloquio individuale; spiega bene i prossimi compiti e ricontrolla</td><td>Team Leader se continua</td><td>Messaggio sui progressi — puoi mandarlo tu</td><td>In settimana</td></tr>
   <tr><td><strong>Lavoro troppo difficile</strong></td><td>Passi più piccoli, obiettivo ridotto, adatta l’attività, normalizza gli errori</td><td>Spiegazione scritta del concetto mancante</td><td><strong>Team Leader + Valutazione Tutor nel BO</strong> — richiedi una lezione di valutazione/livellamento se serve</td><td>Solo ciò che approva il tuo TL. Mai il livello o le opzioni</td><td>In settimana</td></tr>
   <tr><td><strong>Lavoro troppo facile</strong></td><td>Vera sfida extra, attività adattata verso l’alto, ruolo da tutor dei compagni, mai senza niente da fare</td><td>Tieni pronta un’attività del livello successivo</td><td><strong>Team Leader + Valutazione Tutor nel BO</strong> — richiedi una lezione di valutazione/livellamento se serve</td><td>Solo ciò che approva il tuo TL. Mai il livello o le opzioni</td><td>In settimana</td></tr>
   <tr><td><strong>Bisogno educativo speciale</strong>, segnalato o sospetto</td><td>Unità più brevi, struttura prevedibile, preavviso prima dei passaggi, adatta le attività</td><td>Annota cosa funziona e cosa no</td><td><strong>Team Leader + Valutazione Tutor nel BO.</strong> Chiedi delle lezioni individuali se il divario è grande</td><td>Chiedere cosa lo aiuta: tuo, con delicatezza. Formato/gruppo/lezioni individuali: mai proposti da te</td><td>Prima della prossima lezione · subito se il divario è troppo grande</td></tr>
   <tr><td><strong>Età o formato non adatti</strong></td><td>Semplifica, più dimostrazioni, più attenzione durante la lezione</td><td>Parla con onestà del limite</td><td><strong>Team Leader + Valutazione Tutor nel BO</strong> — di’ «collocazione, non motivazione»</td><td>Solo se te lo chiede il tuo TL</td><td>In settimana</td></tr>
   <tr><td><strong>Il bambino non ha mai occasione di intervenire</strong></td><td>Tracciamento dei turni; adatta il tuo approccio; adatta un’attività per il bambino che ne ha bisogno</td><td>Risposte scritte entro 24 h a tutto ciò che è rimasto senza risposta</td><td>Team Leader, se non si risolve in classe</td><td>I cambiamenti nel tuo modo di insegnare: tuoi. Un cambio di gruppo: mai da parte tua</td><td>In settimana</td></tr>
   <tr><td><strong>Cambio di tutor/gruppo/orario</strong></td><td>Nominalo, normalizzalo, non cambiare nient’altro per due lezioni</td><td>Passaggio di consegne scritto nei Commenti del BO</td><td><strong>Team Leader</strong> — subito se un bambino ha un bisogno speciale o se un orario non funziona. Servizio Clienti solo per casi imprevisti/delicati</td><td>Come nuovo tutor: con calore ed entusiasmo. Non il perché, non gli orari</td><td>Prima della lezione di passaggio</td></tr>
   <tr><td><strong>Due lezioni compromesse</strong> — malfunzionamento della piattaforma, cancellazione, assenza</td><td>Mantieni la calma, proteggi il clima</td><td>Registrazione + la parte che conta; piano di recupero</td><td><strong>Team Leader in giornata — avvia la discussione sulla lezione extra (due lezioni è la soglia usata dalla maggior parte delle regioni).</strong> Servizio Clienti se la famiglia è scontenta · Valutazione Tutor nel BO</td><td>In giornata — concorda prima la formulazione con il tuo TL</td><td>In giornata</td></tr>
   <tr><td><strong>«Non è quello che ci avevano detto»</strong></td><td>Per il bambino non cambia nulla — continua a insegnare bene</td><td>—</td><td><strong>Team Leader + Servizio Clienti, prima di rispondere · riporta le parole testuali della famiglia in una Valutazione Tutor</strong></td><td>Solo conferma di ricezione. Risposta vera dopo il via libera del TL — nessuna opzione da parte tua</td><td>In giornata</td></tr>
   <tr><td><strong>Situazione familiare, salute, denaro</strong></td><td>Sii gentile, non aspettarti nulla</td><td>—</td><td>Servizio Clienti, tramite il tuo Team Leader · non insistere</td><td>Una frase calorosa, nessuna domanda di approfondimento</td><td>Appena lo vieni a sapere</td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p>Per qualsiasi urgenza, la maggior parte delle regioni ha anche un canale Slack diretto tra Team Leader e Servizio Clienti, come alternativa più rapida al BO — il nome cambia da regione a regione, quindi chiedi al tuo Team Leader qual è il tuo.</p>`)}
   ${co('co-idea','🎓',`<p><strong>Un riferimento che questa tabella non include: il tuo Mentor Regionale.</strong> Tutto ciò che vedi nella colonna «a chi lo dici» riguarda le questioni organizzative e <em>contrattuali</em> — livello, gruppo, orario, pacchetto — e va sempre al tuo Team Leader e al Servizio Clienti. Quando invece la domanda è <em>come posso insegnarlo meglio</em>, è al tuo Mentor Regionale che devi chiedere, insieme al percorso indicato sopra — non al suo posto.</p>`)}
  `},
  {t:'⚖️ 6.3 · Le cinque regole', html:`
   <div class="rule-row">
     <div class="rule-card"><div class="rule-num">1</div><div class="rule-ic">⚡</div><div class="rule-txt"><strong>Per prima cosa, adatta il metodo.</strong> Non ti serve un permesso per insegnare meglio domani — molti casi finiscono proprio lì. Ancora in difficoltà dopo 2 lezioni? Prenota una sessione con il tuo Mentor Regionale.</div></div>
     <div class="rule-card"><div class="rule-num">2</div><div class="rule-ic">📣</div><div class="rule-txt"><strong>Dirlo a qualcuno non è facoltativo.</strong> Informi il Team Leader, coinvolgi il Servizio Clienti, compili la Valutazione Tutor — altrimenti il problema finisce nel silenzio.</div></div>
     <div class="rule-card"><div class="rule-num">3</div><div class="rule-ic">🚦</div><div class="rule-txt"><strong>Il Team Leader prima della famiglia.</strong> Allineatevi e concordate la strategia, <em>poi</em> parla con la famiglia — esattamente ciò che è stato concordato, mai opzioni tue.</div></div>
     <div class="rule-card"><div class="rule-num">4</div><div class="rule-ic">🤐</div><div class="rule-txt"><strong>Non promettere mai, non rifiutare mai — mostra sempre che ti importa.</strong> Tu raccomandi; il Servizio Clienti offre. Un’eccezione: una volta che il tuo Team Leader ha approvato una lezione extra, spesso puoi essere tu a comunicarlo alla famiglia.</div></div>
     <div class="rule-card"><div class="rule-num">5</div><div class="rule-ic">🔁</div><div class="rule-txt"><strong>Fai la segnalazione (escalation) e assicurati di fare follow-up.</strong> Segnalare un problema e dimenticarsene equivale a non averlo mai segnalato.</div></div>
   </div>
   ${co('co-idea','💡',`<p>Vale la pena trasformare queste cinque regole in abitudini, non solo leggerle una volta — sono la differenza tra un segnale che porta a un’azione e uno che sparisce in silenzio. Chiedi al tuo Team Leader per tutto ciò che riguarda in modo specifico come funziona nella tua regione.</p>`)}
  `}
 ],
 ix:{
  title:'Smistamento delle segnalazioni — cinque segnali',
  instr:'Per ogni segnale, scegli dove va per primo. 70% per sbloccare il Modulo 7.',
  items:[
   {type:'choice', prompt:'Il lavoro in classe di un bambino va bene, ma i compiti sono a zero da due lezioni di fila, e non è ancora emersa nessun’altra causa.', opts:['Agisco io — un colloquio individuale questa settimana, per ora nessuna segnalazione','Team Leader + Servizio Clienti, subito','Indirizzo direttamente al Servizio Clienti, saltando il Team Leader'], correct:0, fb:'Un calo che riguarda solo i compiti, come questo, parte dal tuo colloquio individuale. Fai escalation al tuo Team Leader solo se continua anche dopo.'},
   {type:'choice', prompt:'Da due settimane adatti la lezione per un bambino che fa chiaramente fatica con il livello, e non basta ancora.', opts:['Continuare ad adattare all’infinito — il livello non è una tua decisione, quindi non c’è nulla da segnalare','Team Leader + Servizio Clienti, con un commento nel BO','Scrivere direttamente alla famiglia di un possibile cambio di livello'], correct:1, fb:'È esattamente il momento in cui un caso «troppo difficile» deve arrivare al tuo Team Leader e al Servizio Clienti, per iscritto, nel BO.'},
   {type:'choice', prompt:'Un bambino del tuo gruppo ha una diagnosi di autismo indicata nel profilo, e ti hanno appena detto che il mese prossimo il gruppo verrà riorganizzato con un nuovo tutor.', opts:['Aspettare che il cambio sia confermato prima di parlarne con chiunque','Avvisare subito il tuo Team Leader, scrivere un passaggio di consegne completo nel BO e concordare come comunicare il cambiamento','Dirlo tu stesso al bambino in privato, subito, così ha il tempo di prepararsi'], correct:1, fb:'Un bisogno educativo speciale più un cambio di continuità va segnalato subito — e il modo di comunicarlo va concordato prima con il tuo Team Leader.'},
   {type:'choice', prompt:'Due lezioni di fila sono state interrotte da un malfunzionamento della piattaforma, e il genitore ha appena chiesto di una lezione di recupero.', opts:['Dirgli che le lezioni di recupero non sono possibili','Dirgli che la organizzerai tu, per rassicurarlo in fretta','Confermare che porterai la questione al team, poi parlare con il tuo Team Leader in giornata di una lezione extra'], correct:2, fb:'Né rifiutare né promettere spetta a te — ma avviare la conversazione interna in giornata è proprio il tuo compito.'},
   {type:'choice', prompt:'Un genitore scrive che il livello, il pacchetto o l’orario non sono quelli che gli avevano detto all’iscrizione.', opts:['Rispondere in giornata con la spiegazione più onesta che hai','Confermare di aver ricevuto il messaggio, poi portare la questione al tuo Team Leader e al Servizio Clienti prima di rispondere davvero, riportando le sue parole testuali nel BO','Inoltrarlo al Servizio Clienti e considerarlo non più affare tuo'], correct:1, fb:'È l’unica situazione in cui rispondere da soli fa più danni. Prima ci si allinea, sempre — ma senza sparire nel silenzio.'}
  ]
 }
},
{id:'m7', numLabel:'Modulo 7', emoji:'🛟', color:'var(--coral)',
 title:'Gestire (o Recuperare) una richiesta di rimborso',
 desc:'Finora si è parlato di prevenire una richiesta. Questo modulo riguarda cosa fare quando una richiesta è già stata presentata.',
 obj:'Sapere cosa cambia quando una richiesta di rimborso è già stata presentata: quale deve essere l’obiettivo della lezione successiva, cosa puoi e non puoi dire, e come continuare a fornire al Servizio Clienti ciò di cui ha bisogno.',
 sections:[
  {t:'🔀 7.1 · Quando la richiesta esiste, cambia tutto', html:`
   <div class="card"><p>I Moduli da 1 a 6 servono a cogliere i segnali <strong>prima</strong> che una famiglia chieda indietro i soldi. Questo modulo riguarda il momento in cui è già successo: <strong>è stata presentata una richiesta di rimborso</strong> e la notizia ti è arrivata.</p></div>
   ${co('co-idea','💡',`<p><strong>La richiesta in sé viene creata dal Responsabile del Servizio Clienti, non da te.</strong> Su quella parte non hai alcun controllo. Ciò che resta di tua competenza è tutto quello che succede nella lezione da qui in avanti — e non è poco.</p>`)}
   ${co('co-danger','🚨',`<p><strong>Non dire nulla sulla richiesta in sé</strong> — né al bambino né alla famiglia — a meno che il Servizio Clienti non ti chieda esplicitamente di dire qualcosa di preciso. Ora il tuo compito è la lezione, non la conversazione.</p>`)}
  `},
  {t:'🎯 7.2 · La tua prossima lezione con questo bambino è il tentativo di recupero', html:`
   <div class="card"><p>Potresti non avere altre occasioni per cambiare qualcosa. Considera la lezione successiva come il momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Offrigli una vera opportunità di intervenire.</strong> Non una domanda di circostanza, ma un momento autentico in cui si senta considerato e in grado di farcela.`},
     {ic:'🏆', html:`<strong>Prevedi presto un successo facile e visibile.</strong> Deve uscire dalla lezione sentendosi capace, non indietro.`},
     {ic:'👀', html:`<strong>Fagli capire che la sua presenza non passa inosservata</strong> — in modo specifico, non generico. La stessa regola di ogni colloquio individuale di questa formazione.`},
     {ic:'🤐', html:`<strong>Non menzionare la richiesta.</strong> Questa lezione non è il luogo per quella conversazione, anche se è il bambino a tirarla fuori — riporta il discorso con calore sulla lezione e continua a insegnare.`}
   ])}
  `},
  {t:'📮 7.3 · Informa il Servizio Clienti in fretta — è ancora compito tuo', html:`
   <div class="card"><p>Il Servizio Clienti gestisce la richiesta senza essere presente alla tua lezione. Ciò che hai visto, nei dettagli e in fretta, è un’informazione che non può ottenere in nessun altro modo.</p></div>
   ${checkbox([
     'Un commento nel BO con esattamente ciò che hai visto — date, dettagli concreti, non impressioni',
     'Le parole della famiglia, testuali, se le hai — non parafrasate',
     'Tutto ciò che hai già adattato o proposto, così il Servizio Clienti non lo ripete',
     'Il tuo Team Leader informato, in giornata'
   ])}
   ${co('co-idea','💡',`<p>Puoi scoprire che esiste una richiesta attraverso i commenti del Servizio Clienti nel profilo del bambino nel BO — non c’è un sistema automatico che ti avvisa nel momento in cui una famiglia chiede un rimborso. Sei tu a mandare segnali al Servizio Clienti; non è il Servizio Clienti a mandarti aggiornamenti.</p>`)}
  `},
  {t:'🚧 7.4 · Cosa puoi e non puoi fare', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Puoi</th><th>🚫 Non puoi mai</th></tr>
   <tr><td>Avvisare il Servizio Clienti tramite il BO appena vieni a sapere di una richiesta</td><td>Confermare che un rimborso è stato approvato</td></tr>
   <tr><td>Se si presenta un’occasione naturale <strong>prima</strong> di quell’avviso, proporre qualcosa di concreto — una lezione extra, una verifica del livello, consigliare un corso diverso</td><td>Confermare o discutere qualsiasi importo</td></tr>
   <tr><td>Dire al genitore che il Servizio Clienti lo aiuterà</td><td>Dire o lasciar intendere qualsiasi altra cosa sulla richiesta in sé</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>Il messaggio che si può sempre dire:</strong> <em>«Il Servizio Clienti vi aiuterà con questo.»</em> Niente di più — lì finisce la tua parte, ed è una conversazione per la quale non hai le informazioni.</p>`)}
  `},
  {t:'🌱 7.5 · Le 2–4 lezioni dopo il recupero', html:`
   <div class="card"><p>Che la richiesta venga ritirata, che il bambino resti nel tuo gruppo, passi a un altro tutor o a lezioni individuali — sono le lezioni successive a determinare se il recupero è andato davvero a buon fine.</p></div>
   ${iconGrid([
     {ic:'🔁', html:`<strong>Attenzione extra, in ognuna di quelle lezioni</strong> — un vero turno, un successo specifico, un’assenza notata — tutto ciò che questa formazione ti ha insegnato, ripetuto.`},
     {ic:'📝', html:`<strong>Un passaggio di consegne completo</strong> nei Commenti del BO se il bambino passa a un nuovo tutor o formato — la stessa cura nel passaggio di consegne del Modulo 5.6.`},
     {ic:'👋', html:`<strong>Mantieni un atteggiamento accogliente</strong> se resta con te — non lasciare che il sollievo di aver risolto il problema ti faccia scivolare di nuovo nelle vecchie abitudini.`}
   ])}
  `},
  {t:'🔙 7.6 · La prevenzione resta il punto centrale', html:`
   <div class="card"><p>Tutto ciò che segue è già nei Moduli da 1 a 6 — questa è la versione breve, per ricordarti che gran parte del tuo lavoro consiste nel fare in modo che questo modulo non serva mai.</p></div>
   ${checkbox([
     'Segui i compiti, ogni settimana',
     'Mantieni la struttura completa della lezione — non trascurarla quando la gestione del gruppo ti sembra facile',
     'Segnala più di due assenze, o un problema tecnico, non appena succede',
     'Fai escalation al tuo Team Leader nel momento in cui vedi un segnale di rischio',
     'Invia il report di attenzione sullo studente quando ti viene richiesto'
   ])}

  `}
 ],
 ix:{
  title:'Quando la richiesta è già arrivata',
  instr:'Per ogni scenario, scegli la mossa giusta. 70% per continuare.',
  items:[
   {type:'choice', prompt:'Hai appena saputo che una famiglia ha presentato una richiesta di rimborso per un bambino del tuo gruppo. Cosa fai per prima cosa?', opts:['Scrivere alla famiglia per capire il motivo, così da affrontarlo direttamente','Avvisare il Servizio Clienti tramite il BO e informare il tuo Team Leader in giornata','Aspettare che il Servizio Clienti ti contatti prima di fare qualsiasi cosa'], correct:1, fb:'La richiesta è già nelle mani del Servizio Clienti — il tuo compito è fargli arrivare ciò che sai, in fretta, non aprire una tua conversazione con la famiglia.'},
   {type:'choice', prompt:'Nella prossima lezione con quel bambino, cosa dovrebbe cambiare?', opts:['Niente — comportarsi diversamente potrebbe fargli capire che qualcosa non va','Dargli un successo vero e visibile e assicurarsi che si senta notato — senza menzionare la richiesta','Avere una conversazione diretta con il bambino sul perché la sua famiglia vuole andarsene'], correct:1, fb:'La lezione stessa è il tentativo di recupero. La richiesta in sé non va mai sollevata con il bambino.'},

   {type:'choice', prompt:'Un genitore ti chiede direttamente se il suo rimborso è stato approvato. Cosa rispondi?', opts:['Dai la tua ipotesi migliore in base a come vanno di solito queste cose','Gli dici che il Servizio Clienti lo aiuterà con questo, e ti fermi lì','Confermi l’importo che gli spetta, se ti capita di saperlo'], correct:1, fb:'Confermare un’approvazione o un importo non spetta mai a te, per quanto la cosa ti sembri chiara. L’unica frase sicura lo indirizza al Servizio Clienti.'},
   {type:'choice', prompt:'La richiesta viene ritirata e il bambino resta nel tuo gruppo. E adesso?', opts:['Tornare alla normalità — la crisi è passata','Continuare a dare a quel bambino un’attenzione extra per le prossime lezioni, perché il recupero può ancora sfaldarsi','Dire alla famiglia che ti fa piacere che abbiano cambiato idea'], correct:1, fb:'Un recupero che tiene per una lezione e poi torna alla normalità spesso non tiene affatto. Sono le lezioni successive a deciderlo davvero.'}
  ]
 }
},
{id:'checklist', numLabel:'Modulo 8', emoji:'✅', color:'var(--green-d)',
 title:'Checklist finale',
 desc:'Niente quiz qui — solo tutto ciò che c’è in questa formazione, in un’unica lista, prima di affrontare l’esame.',
 obj:'Rivedi la checklist completa qui sotto. Questo modulo non è valutato — leggilo, poi passa all’esame finale.',
 sections:[
  {t:'✅ L’essenziale, in un’unica lista', html:`
   ${numlist([
     'Controllo il profilo dello studente, Commenti compresi, <strong>prima</strong> della mia prima lezione con un nuovo bambino',
     'Una volta a settimana controllo la schermata Progressi di tutto il gruppo — sia In classe sia A casa',
     'Considero una linea piatta a zero il segnale più grave che esista, non un dato neutro',
     'Ogni bambino del mio gruppo ha occasione di intervenire, e posso dimostrarlo perché ne tengo traccia',
     'Quando un bambino salta una lezione faccio tutti e quattro i passi, non mi limito a mandare la registrazione',
     'Riconosco le diverse situazioni che mi si presentano e rispondo a ciascuno in modo diverso',
     'Informo sempre il mio Team Leader, coinvolgo il Servizio Clienti quando serve e lascio un commento nel BO',
     'Quando il Servizio Clienti prende in mano una conversazione, ne resto fuori e seguo le sue indicazioni',
     'Faccio la segnalazione (escalation) e mi assicuro di fare follow-up'
   ])}
  `},
  {t:'🪞 Autoverifica — domande da farti ogni settimana', html:`
   ${numlist([
     'Questa settimana ho notato un calo nel lavoro in classe o nei compiti di qualche bambino, anche di uno che ha continuato a frequentare normalmente?',
     'C’è un bambino del mio gruppo che non consegna nessuna attività che, senza accorgermene, ho smesso di notare?',
     'Ogni bambino del mio gruppo ha avuto vera occasione di intervenire nella mia ultima lezione? Lo so con certezza o lo sto dando per scontato?',
     'C’è qualcosa che ho notato e non ho ancora segnalato a nessuno?',
     'C’è qualcosa che ho segnalato e su cui non ho fatto follow-up?'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Questa è tutta la formazione.</strong> Quando sei pronto, passa all’esame finale — poi completa il DST nell’LMS per completare l’attività assegnata.</p>`)}
  `}
 ],
 gateExam:true
},
    ];
  }
};

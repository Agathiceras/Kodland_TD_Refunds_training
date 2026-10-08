/* Refunds training - Portuguese content (translated from the English source). */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    pageTitle:'Treinamento sobre reembolsos — Treinamento de Tutores Kodland',
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:'💸 Programa de treinamento para tutores',
    heroTitle:'Entendendo os <span class="h-pill">reembolsos</span>',
    heroIntro:"Por trás de cada pedido de reembolso existe uma criança que estava construindo algo e parou — e você quase sempre é a primeira pessoa que poderia ter percebido. Este treinamento é sobre o quanto você observa bem e o quão rápido você age.",
    heroR1:'Aprenda exatamente o que observar, durante a aula e entre uma aula e outra.',
    heroR2:"Pratique a leitura da tela de Progresso de uma turma em uma simulação prática do BO.",
    heroR3:"Saiba exatamente o que cabe a você resolver, o que cabe a você reportar e a quem avisar.",
    heroWork:'Complete os 7 módulos e o checklist final, depois siga para o DST. Cada módulo exige 70% ou mais para liberar o próximo.',
    startBtn:'🚀 Começar o treinamento',
    pathLabel:'Sua trilha de aprendizagem',
    devTitle:'Modo desenvolvedor: liberar todos os módulos para revisão',
    backToPath:'Voltar para a trilha',
    modulesPassed:'{done} / {total} módulos concluídos',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprovado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Começar',
    reviewBadge:'▶ Revisar',
    objective:'Objetivo',
    startCheck:'▶ Começar a verificação do módulo',
    toExam:'▶ Seguir para a prova final',
    doneBack:'✓ Pronto — voltar para a trilha',
    ixBadge:'📋 Verificação do módulo — 70% para liberar o próximo módulo',
    ixItemBadge:'📋 Verificação do módulo — questão {i} de {n}',
    scoreSoFar:'Pontuação até agora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'Não exatamente — a resposta certa é “{label}”.',
    resPassed:'Módulo concluído!',
    resFailed:'Ainda não foi desta vez',
    resUnlocked:"Você liberou o próximo módulo.",
    resNeed:'Você precisa de 70% para liberar o próximo módulo. Revise a seção acima e tente a verificação de novo.',
    resContinue:'Continuar na trilha de aprendizagem',
    resBack:'Voltar para a trilha',
    resReview:'Revisar este módulo',
    doneEyebrow:'Prova final',
    doneTitle:'🎉 Parabéns!',
    doneP1:"🎉 <strong>Parabéns! Você concluiu o treinamento autoinstrucional para melhorar suas métricas de reembolso!</strong>",
    doneP2:"Você está quase lá! Volte à página do treinamento no LMS por onde você acessou este conteúdo. O DST está disponível logo abaixo do treinamento.",
    doneP3:'👉 <strong>Você precisa fazer e ser aprovado no DST para que o treinamento seja considerado concluído com sucesso.</strong> Se o DST não for feito, o treinamento continuará incompleto e poderá ficar em atraso.',
    doneP4:'Não deixe de fazer o DST e atingir a nota mínima para encerrar a atividade com sucesso.',
    doneP5:'Boa sorte! ❤️',
    devUnlockAlert:'Modo desenvolvedor: todos os módulos agora estão liberados para revisão.',
    devOn:'🔓 Modo desenvolvedor ATIVADO — todos os módulos liberados',
    devOff:'🔒 Modo desenvolvedor DESATIVADO — progresso apagado',
    devBadge:'🔓 MODO DESENVOLVEDOR',
    doLabel:'✅ Faça',
    avoidLabel:'🚫 Evite',
    noticeLabel:'Observe:'
  },
  buildModules(){
    return [
{id:'intro', numLabel:'Introdução', emoji:'💸', color:'var(--coral)',
 title:'Por que este treinamento existe',
 desc:'Como um reembolso aparece do ponto de vista da criança, por que você é a primeira pessoa que consegue vê-lo chegando e qual parte disso é sua.',
 obj:'Entender como um reembolso aparece do ponto de vista da criança, por que você é a primeira pessoa que consegue vê-lo chegando e qual parte disso é sua.',
 sections:[
  {t:'📋 Você está aqui por um motivo específico — encontre-o rápido', html:`
   <div class="card"><p>Abaixo você encontra os motivos pelos quais este treinamento pode ter sido atribuído a você. Aqui tratamos apenas dos reembolsos solicitados por motivos relacionados à aula — situações em que podemos ajudar você a lidar com eles, não só para evitá-los daqui para frente, mas para salvar o reembolso. Ainda assim, fazer o treinamento completo vai dar a você uma visão mais ampla, que também ajuda a evitar reembolsos que surgem por outros motivos.</p></div>
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>🚩 O motivo registrado</th><th>👀 Como costuma aparecer</th><th>📍 Como este treinamento ajuda</th></tr>
   <tr><td><strong>Falta de interesse por programação / pelos cursos da Kodland</strong></td><td>Entediado, fazendo as coisas só por fazer, “é só isso?”, sem nenhuma objeção concreta a algo específico</td><td>Módulo 5.2 · Módulo 3.6</td></tr>
   <tr><td><strong>Organização da aula / disciplina</strong></td><td>A aula parece caótica, uma criança domina tudo, as outras ficam quietas ou se desligam</td><td>Módulo 5.5 · Módulo 3</td></tr>
   <tr><td><strong>Reação muito negativa aos erros</strong></td><td>Desiste rápido, fica chateado com erros pequenos, “eu não consigo” cedo e com frequência</td><td>Módulo 5.1 · Módulo 3.5</td></tr>
   <tr><td><strong>Preocupação com a forma de ensinar do próprio tutor</strong></td><td>Não aponta para o padrão de uma criança específica — é sobre a aula em si</td><td>Converse diretamente com seu Team Leader e seu Mentor Regional; Módulo 3 como revisão</td></tr>
   </table></div></div>
  `},
  {t:'💔 Um reembolso é uma criança que para de aprender', html:`
   <div class="card"><p>Por trás de cada pedido de reembolso existe uma criança que estava construindo algo e parou. Uma turma que fica menor. Uma família que confiou na gente e decidiu que não valia a pena continuar.</p>
   <p>É disso que trata este treinamento. Não de um número em um dashboard — de uma criança específica, em uma das suas turmas, que está se afastando agora mesmo e não sabe como dizer isso.</p></div>
   <img src="Images/Image_1.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
  `},
  {t:'📉 Reembolsos quase nunca acontecem de repente', html:`
   <div class="card"><p>Essa é a coisa mais útil de saber sobre eles. Quando uma família pede o dinheiro de volta, a história geralmente já vem acontecendo há semanas — e a maior parte dela se passou <strong>na frente do tutor.</strong></p></div>
   ${stepFlow([
     {ic:'📋', label:'As atividades em aula deixam de ser concluídas'},
     {ic:'🏠', label:'As lições de casa deixam de ser entregues'},
     {ic:'📵', label:'As faltas começam a aparecer'},
     {ic:'☎️', label:'O responsável liga para alguém'}
   ])}
   <div class="card"><p>Nas aulas que antecedem um pedido de reembolso, o padrão se repete:</p></div>
   ${bigStat('39%→56%', `<p><strong>As aulas perdidas</strong> aumentam bruscamente na reta final antes de um pedido de reembolso.</p>`)}
   ${bigStat('35%→15%', `<p><strong>A entrega das lições de casa</strong> cai na mesma proporção no mesmo período.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted);margin-top:-4px;margin-bottom:14px">Com base em padrões históricos de várias turmas; os números exatos podem variar por região.</p>
   ${co('co-danger','🚨',`<p><strong>Esta é a parte que mais importa para você.</strong></p><p>Uma criança que está saindo do curso pode parecer completamente normal na aula que você está dando. O colapso não está na atenção dela enquanto está ali — está em <strong>aparecer e fazer as atividades.</strong> Então “na aula ele parece bem” não é prova de que está tudo bem.</p>`)}
  `},
  {t:'🦸 Por que você é a pessoa mais importante nisso', html:`
   ${co('co-idea','💡',`<p><strong>Você é a única pessoa que vê essa criança, nessa turma, toda semana.</strong> Ninguém do Atendimento ao Cliente, de Operações Pedagógicas ou da equipe de Aula Experimental consegue ver uma criança ficando quieta ou deixando de tentar. <strong>Você consegue.</strong> Todo este treinamento se resume a duas coisas: <strong>o quanto você observa bem e o quão rápido você age.</strong></p>`)}
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Totalmente seu</th><th>🔁 Seu para adaptar — e para reportar</th><th>🚫 Fora do nosso controle</th></tr>
   <tr><td>A criança se sente motivada e apoiada em todas as aulas</td><td><strong>Nível difícil ou fácil demais.</strong> Adapte a atividade agora. Reporte para revisão.</td><td>Saúde</td></tr>
   <tr><td>Toda criança tem uma vez de verdade e uma resposta de verdade</td><td><strong>Uma necessidade especial que ninguém informou a você.</strong> Adapte sua abordagem. Reporte.</td><td>Circunstâncias familiares</td></tr>
   <tr><td>Você percebe os primeiros sinais de afastamento — e age</td><td><strong>Turma cheia e agitada.</strong> Uma habilidade que se aprende — ajuste sua abordagem. Reporte se a diferença continuar grande demais.</td><td>A situação financeira da família</td></tr>
   <tr><td>A família sente que uma pessoa de verdade acompanha o progresso</td><td><strong>Uma troca de tutor/turma/horário foi mal recebida.</strong> Seja transparente, alinhe rápido.</td><td></td></tr>
   <tr><td>Uma criança que perdeu aulas realmente recupera o conteúdo</td><td><strong>Disseram algo diferente para a família na matrícula.</strong> Esclareça com honestidade. Reporte.</td><td></td></tr>
   </table></div></div>
   ${co('co-danger','🚨',`<p><strong>Nada disso é culpa sua — mas o trabalho de verdade continua sendo seu.</strong> Adaptar a atividade, mudar a forma de conduzir a turma, proteger uma criança durante uma mudança. E tão importante quanto: <strong>avise alguém.</strong> Informe seu Team Leader, envolva o Atendimento ao Cliente, deixe o comentário no BO. Se você não fizer isso, o problema fica em silêncio — e algumas semanas depois perdemos a criança.</p>`)}
  `},
  {t:'💬 Conversando com as famílias: o que você faz e quando passa adiante', html:`
   <img src="Images/Image_2.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Os responsáveis vão querer conversar com você sobre o aprendizado dos filhos — <strong>isso faz parte do seu trabalho</strong>, e é importante ser acolhedor e estar disponível.</p>
   <p>O que você <strong>não</strong> pode fazer é a <em>ação</em>: mudar uma criança de turma, alterar um horário, um nível ou um pacote, ou aprovar uma aula extra. Isso é com o Atendimento ao Cliente — e eles só conseguem agir se você avisar.</p></div>
   ${co('co-idea','💡',`<p><strong>A regra: fale sobre o aprendizado. Passe a ação adiante.</strong> Você é a ponte entre a aula e as pessoas que podem mudar a situação da criança — e uma ponte só ajuda se as coisas a atravessam <strong>rápido.</strong></p>`)}
  `},
  {t:'🔀 A ordem importa: primeiro o Team Leader, depois a família', html:`
   <div class="card"><p>Existe uma sequência a seguir, e errar nela é exatamente como mensagens bem-intencionadas acabam criando problemas.</p></div>
   ${co('co-danger','🚨',`<p><strong>Sempre que a situação envolver algo além do seu próprio ensino</strong> — nível, turma, horário, uma necessidade especial, uma promessa não cumprida, uma aula perdida — <strong>não escreva para a família primeiro.</strong></p>`)}
   ${stepFlow([
     {ic:'👩‍💼', label:'1. Alinhe com seu Team Leader — explique o que você viu, envolva o Atendimento ao Cliente, deixe um comentário no BO'},
     {ic:'🧭', label:'2. Combinem a estratégia — o que realmente está disponível para essa criança e o que não está'},
     {ic:'👪', label:'3. Depois, a família — exatamente o que seu Team Leader combinou, nada além disso'}
   ])}
   <div class="card"><p>Assim você nunca precisa adivinhar, nunca promete demais e nunca precisa voltar atrás no que disse.</p></div>
   ${co('co-danger','🚨',`<p><strong>Explicar soluções e opções não cabe a você, nem depois do alinhamento.</strong> Seu Team Leader vai dizer uma de duas coisas:</p>
   <ul><li><em>“Diga X para a família”</em> → diga exatamente isso, nada além</li>
   <li><em>“A partir daqui a gente cuida”</em> → <strong>você fica de fora.</strong> Duas vozes passando versões diferentes para uma família é como a confiança se quebra.</li></ul>`)}
  `},
  {t:'📌 O que você sempre pode dizer e o que sempre precisa esperar', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Sempre seu — escreva à vontade, com acolhimento e agilidade</th><th>⏸️ Sempre espera pelo seu Team Leader</th></tr>
   <tr><td>Como a criança está indo, o que fez bem, o que está achando difícil</td><td>Qualquer coisa sobre <strong>níveis, cursos, turmas, horários, formatos ou pacotes</strong></td></tr>
   <tr><td>Que <strong>apoio você</strong> está dando na aula e o que você adaptou</td><td>Qualquer <strong>opção, solução ou próximo passo</strong> para a família escolher</td></tr>
   <tr><td>Que você percebeu as dificuldades dela e se importa com como ela está se sentindo</td><td>Qualquer <strong>explicação de como algo deu errado</strong>, ou por quê</td></tr>
   <tr><td>Perguntar o que ajuda essa criança a aprender melhor</td><td>Qualquer coisa relacionada a <strong>dinheiro</strong></td></tr>
   <tr><td>Uma aula perdida e o que precisa ser recuperado</td><td>Qualquer confirmação de que algo <strong>vai</strong> ou <strong>não vai</strong> acontecer</td></tr>
   <tr><td>Que você levou algo para sua equipe, em termos gerais, sem detalhes</td><td>Qualquer detalhe sobre <strong>o que você reportou internamente</strong></td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p><strong>A diferença em uma linha: você fala sobre a criança. Seu Team Leader e o Atendimento ao Cliente falam sobre as condições combinadas.</strong></p>`)}
   ${co('co-danger','⛔',`<p><strong>Nunca prometa e nunca recuse.</strong></p><p>Nem <em>“vamos mudá-lo de turma”.</em> Nem <em>“isso não é possível”.</em> As duas são decisões que não cabem a você.</p>
   <p><strong>Mas também não seja frio nem evasivo.</strong> O que você sempre deve mostrar, logo de cara, é que quer de verdade que essa criança fique bem e tenha a melhor experiência de aprendizagem possível — e que você já está trabalhando nisso. <em>“Eu vi isso, me importo com isso, estou vendo o que podemos fazer e volto a falar com vocês.”</em> Isso não é uma promessa. É o que mantém a família com a gente enquanto a resposta está sendo encontrada.</p>`)}
   <div class="card"><p><strong>Você sempre pode escrever diretamente, sem consultar antes,</strong> sobre o dia a dia das aulas: como foi a aula, algo que a criança fez bem, uma aula perdida e o que recuperar, uma pergunta sobre como ela está em casa. Seja ágil e acolhedor em tudo isso — é o seu trabalho, e é o que torna possíveis as conversas mais difíceis depois.</p></div>
  `}
 ],
 ix:{
  title:'O que é meu, o que eu adapto e reporto, o que não é meu',
  instr:'Classifique cada situação real na área correta. 70% para liberar o Módulo 1.',
  items:[
   {type:'sort', prompt:'“Em uma turma grande, um aluno se perde e não consegue participar” —', card:'Em uma turma grande, um aluno se perde e não consegue participar', zones:[
     {label:'Totalmente meu', fb:'Não exatamente — comece mudando sua própria abordagem, mas se depois de tentar de verdade a diferença continuar grande demais, isso também precisa ser reportado.'},
     {label:'Meu para adaptar e reportar', fb:'Correto — é uma habilidade de gestão de turma que você mesmo pode mudar a partir da próxima aula, e você reporta se, depois de tentar, ainda não for suficiente.'},
     {label:'Fora do nosso controle', fb:'Não exatamente — é uma habilidade de gestão de turma, e começa com você adaptando sua própria abordagem.'}
   ], correctZone:1, fb:''},
   {type:'sort', prompt:'“A situação financeira da família mudou” —', card:'A situação financeira da família mudou', zones:[
     {label:'Totalmente meu', fb:'Não exatamente — a situação financeira de uma família está realmente fora do nosso controle.'},
     {label:'Meu para adaptar e reportar', fb:'Não exatamente — a situação financeira de uma família está realmente fora do nosso controle, não é algo a que se adaptar.'},
     {label:'Fora do nosso controle', fb:'Correto — esta é uma causa realmente fora do nosso controle. Seja gentil, não espere nada e não insista.'}
   ], correctZone:2, fb:''},
   {type:'sort', prompt:'“O nível está avançado demais para a idade dele” —', card:'O nível está avançado demais para a idade dele', zones:[
     {label:'Totalmente meu'},
     {label:'Meu para adaptar e reportar', fb:'Correto — adapte a atividade agora e reporte para que o próprio nível possa ser revisado.'},
     {label:'Fora do nosso controle'}
   ], correctZone:1, fb:'Não exatamente — você pode adaptar a atividade imediatamente e também deve reportar para que o nível seja revisado. As duas partes importam.'},
   {type:'sort', prompt:'“Ele parou de entregar a lição de casa” —', card:'Ele parou de entregar a lição de casa', zones:[
     {label:'Totalmente meu', fb:'Correto — perceber isso e agir (uma conversa individual, ajustar sua abordagem) é totalmente seu.'},
     {label:'Meu para adaptar e reportar'},
     {label:'Fora do nosso controle'}
   ], correctZone:0, fb:'Não exatamente — perceber uma queda nas lições de casa e fazer uma conversa individual está totalmente dentro do seu próprio ensino; não precisa reportar, a menos que isso aponte para um problema maior, como um nível inadequado.'},
   {type:'sort', prompt:'“Ninguém me contou que ele tem uma necessidade educacional especial” —', card:'Ninguém me contou que ele tem uma necessidade educacional especial', zones:[
     {label:'Totalmente meu'},
     {label:'Meu para adaptar e reportar', fb:'Correto — adapte tudo o que puder na aula e reporte para que opções como aulas individuais possam ser avaliadas.'},
     {label:'Fora do nosso controle'}
   ], correctZone:1, fb:'Não exatamente — você adapta sua abordagem imediatamente e também reporta para que opções mais amplas possam ser consideradas.'},
   {type:'sort', prompt:'“O responsável diz que prometeram algo diferente” —', card:'O responsável diz que prometeram algo diferente', zones:[
     {label:'Totalmente meu'},
     {label:'Meu para adaptar e reportar', fb:'Correto — você não pode mudar o passado, mas esclarece com honestidade e reporta para que a conversa aconteça entre os departamentos.'},
     {label:'Fora do nosso controle'}
   ], correctZone:1, fb:'Não exatamente — isso precisa ser reportado para não se repetir, mesmo que a divergência em si não tenha sido culpa sua.'},
   {type:'sort', prompt:'“A criança fica entediada e termina em dez minutos” —', card:'A criança fica entediada e termina em dez minutos', zones:[
     {label:'Totalmente meu'},
     {label:'Meu para adaptar e reportar', fb:'Correto — dê um desafio extra de verdade agora e reporte como um possível caso de nível fácil demais.'},
     {label:'Fora do nosso controle'}
   ], correctZone:1, fb:'Não exatamente — o tédio causado por um nível fácil precisa de um desafio extra imediato na sua aula, além de um reporte para que o nível seja revisado.'}
  ]
 }
},
{id:'m1', numLabel:'Módulo 1', emoji:'👀', color:'var(--blue)',
 title:'Aprendendo a enxergar cedo',
 desc:'O que observar durante a aula e entre uma aula e outra, e o momento em que você precisa agir.',
 obj:'Saber exatamente o que observar durante a aula e entre uma aula e outra, diferenciar uma criança que está numa semana ruim de uma criança que está saindo, e saber em que momento você precisa agir.',
 sections:[
  {t:'', html:`<div class="card"><p>Este é o módulo mais importante do treinamento. Todo o resto depende de você perceber a tempo.</p></div>`},
  {t:'👁️ 1.1 · O que observar durante a aula', html:`
   <div class="card"><p>Estes são sinais que ninguém mais na empresa consegue ver. Você não precisa de um relatório para lê-los — precisa estar olhando.</p></div>
   <img src="Images/Image_4.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   ${iconGrid([
     {ic:'📷', html:`<strong>A câmera é desligada</strong> e continua desligada, quando antes ficava ligada. É o sinal precoce de afastamento mais comum — as crianças que acabam saindo ficam com a câmera ligada cerca de <strong>metade</strong> do tempo dos colegas de turma.`},
     {ic:'🎤', html:`<strong>O microfone deixa de ser usado</strong> de vez — mais ou menos <strong>um terço</strong> do tempo de microfone dos colegas. Uma criança que parou de falar geralmente parou de se sentir parte da turma.`},
     {ic:'💬', html:`<strong>Respostas de uma palavra só</strong>, onde antes havia frases. Se for uma mudança, não é timidez — mudança é sinal.`},
     {ic:'🖥️', html:`<strong>Para de compartilhar a tela</strong> durante o trabalho individual. Muitas vezes quer dizer “não quero que você veja que estou travado” ou “ainda nem comecei”.`},
     {ic:'📝', html:`<strong>Começa a atividade em aula, mas nunca termina</strong> — a forma mais clara, dentro da aula, de ficar para trás.`},
     {ic:'✋', html:`<strong>Levanta a mão e não é chamado</strong> — e para de levantar. <strong>Essa é responsabilidade nossa.</strong>`},
     {ic:'⏰', html:`<strong>Chega atrasado, sai mais cedo ou fica entrando e saindo.</strong> A atenção está ali; o compromisso, não.`},
     {ic:'😞', html:`<strong>Fica quieto ou se frustra rápido</strong> depois de um erro, principalmente se for um comportamento novo.`},
     {ic:'⚡', html:`<strong>Termina na metade do tempo e depois atrapalha.</strong> Também é um problema de nível — o tédio parece exatamente desinteresse.`},
     {ic:'🔁', html:`<strong>Faz a mesma pergunta básica de novo e de novo.</strong> O nível provavelmente está errado — veja o Módulo 5.`}
   ])}
   ${co('co-idea','💡',`<p><strong>O segredo é comparar, não julgar.</strong> Nenhum desses sinais significa algo isoladamente. Todos passam a significar algo no momento em que estão <strong>diferentes de como essa criança costuma ser</strong>, ou <strong>diferentes do resto da turma na mesma aula.</strong></p>`)}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">A mão que nunca é chamada</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/12AOW3X9Vgm_cVzeOdjX5HN7Z2j-JV-lK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Neste vídeo, você vai ver um aluno tentando se comunicar com o tutor pelo chat, mas o tutor parece não perceber.</div></div>
  `},
  {t:'📅 1.2 · O que observar entre uma aula e outra', html:`
   <div class="card"><p>Entre as aulas, você tem algo que a aula ao vivo não oferece: o registro de se a criança está realmente fazendo as atividades. São duas coisas diferentes, e <strong>as duas importam.</strong></p></div>
   ${iconGrid([
     {ic:'🏫', html:`<strong>Atividade em aula (Em aula)</strong> — o que a criança conclui durante a própria aula. Mostra se ela consegue acompanhar <strong>enquanto você está presente</strong>. Quando isso cai, o problema é a dificuldade ou o engajamento durante a aula.`},
     {ic:'🏠', html:`<strong>Lição de casa (Em casa)</strong> — o que a criança conclui sozinha. Mostra se o curso ainda importa <strong>quando você não está por perto</strong>, e se a família está apoiando. É o sinal mais difícil e mais honesto.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Observe os dois. Aja diante de qualquer um.</strong></p><p>Uma criança pode ir bem nas atividades em aula e estar zerada nas lições de casa — isso é um problema de motivação e de apoio familiar. Uma criança pode fazer a lição de casa, mas ir mal nas atividades em aula — isso geralmente é um problema de dificuldade ou de distração durante a aula. Qualquer um dos dois, sozinho, já é motivo para agir. <strong>Não espere os dois piorarem.</strong></p>`)}
   ${bigStat('47%',`Das crianças que acabam pedindo reembolso <strong>frequentam menos da metade</strong> das aulas. A presença não é uma formalidade — é o sinal mais visível que uma família dá sobre se este curso ainda importa para ela.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Com base em padrões históricos de várias turmas; o número exato pode variar por região.</p>
  `},
  {t:'🔎 1.3 · O erro que quase todo mundo comete', html:`
   <div class="card"><p>A maioria dos tutores procura uma <strong>queda</strong> — um momento em que as coisas pioraram. Esse instinto deixa passar a maioria dos casos.</p></div>
   ${co('co-danger','🚨',`<p><strong>Não procure uma queda. Procure um vazio.</strong></p>`)}
   ${bigStat('58.6%',`Dos casos de reembolso tinham lição de casa <strong>estável, não em queda</strong> — a criança já tinha parado, ou nunca tinha começado de verdade. Não havia nenhuma queda para perceber.`)}
   ${bigStat('56.9%',`Dos casos tinham atividades em aula <strong>em queda</strong> — por isso esse costuma ser o sinal visível que aparece primeiro.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Com base em padrões históricos de várias turmas; os números exatos podem variar por região.</p>
  `},
  {t:'💔 1.4 · Por que não fazer a lição de casa pode prever reembolsos', html:`
   <img src="Images/Image_6.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Vale a pena deixar isso claro, porque muda a urgência com que você trata o assunto.</p>
   <p>Uma criança que não faz as atividades fica para trás. Uma criança que ficou para trás se sente perdida na aula. Uma criança que se sente perdida na aula deixa de querer vir. A família vê uma criança que não quer ir para a aula e conclui: <em>“ele não está interessado”</em> ou <em>“esse curso não é para ele”.</em></p></div>
   ${co('co-idea','💡',`<p>Quando um responsável usa essas palavras, está descrevendo uma espiral que começou com <strong>três projetos não entregues.</strong> As atividades não feitas não são apenas um sintoma de uma criança que já decidiu sair — são parte do que a leva a decidir.</p>`)}
   ${co('co-idea','📌',`<p><strong>Então: uma sequência de atividades em aula ou lições de casa não feitas já é, por si só, motivo para agir.</strong> Não é algo para ficar de olho. Não é algo para levantar só se piorar. <strong>Aja.</strong></p>`)}
  `},
  {t:'🧩 1.5 · Os três padrões', html:`
   <div class="card"><p>Quando você olha para as últimas aulas de uma criança, vai ver um de três formatos. Cada um significa algo diferente, e cada um pede uma resposta diferente.</p></div>
   ${patternCards([
     {ic:'🐌', title:'O declínio lento', desc:'Presença e atividades vão caindo aos poucos ao longo de várias aulas; cada vez mais coisas faltando; câmera desligada', note:'Afastamento clássico. <strong>Este é o que você consegue reverter</strong> — quanto mais cedo você agir, maior a chance. → Módulos 3 e 4'},
     {ic:'🧱', title:'A parada repentina', desc:'Normal, normal, normal — e depois nada', note:'Algo aconteceu. Um conflito de horário, um incidente, algo em casa. <strong>Pergunte. Não presuma.</strong> → Módulo 4'},
     {ic:'✅', title:'Engajado e mesmo assim saindo', desc:'Presente, participando, atividades feitas — e mesmo assim a família pede para sair', note:'<strong>A causa não é engajamento, e não é você.</strong> Mais motivação não vai resolver. <strong>Descubra o motivo real e encaminhe rápido.</strong> → Módulos 5 e 6'}
   ])}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">O aluno que nunca apareceu</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RfFI5FTMg3DBHEiJtoG9DpJyjVoHFv74/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Um dos casos mais críticos, que precisa ser reportado na hora: um aluno que não aparece desde a primeira aula.</div></div>
  `},
  {t:'🚦 1.6 · Quando você precisa agir', html:`
   <div class="card"><p>Você não precisa ter certeza. Você precisa de um limite, para que “eu não tinha certeza” deixe de ser motivo para não fazer nada.</p><p><strong>Aja nesta semana se qualquer uma destas situações for verdadeira:</strong></p></div>
   ${iconGrid([
     {ic:'📉', html:`A criança frequenta <strong>menos da metade</strong> das aulas`},
     {ic:'📊', html:`As atividades em aula ou as lições de casa estão <strong>bem abaixo da média da turma</strong> — como regra prática, 15 pontos ou mais`},
     {ic:'🤔', html:`A presença está no meio-termo — não sumiu, mas não é confiável — <strong>e</strong> uma das situações acima também é verdadeira`},
     {ic:'0️⃣', html:`<strong>Duas ou mais aulas seguidas</strong> sem nada entregue`}
   ])}
   ${co('co-danger','🚨',`<p><strong>E aja imediatamente, independentemente de qualquer número, se:</strong> a criança parou de falar ou de aparecer na câmera quando antes fazia isso · ela tentou participar e você não chegou até ela · ela contou que algo está errado · você tem um mau pressentimento. <strong>Seu julgamento conta como sinal.</strong></p>`)}
  `}
 ],
 ix:{
  title:'Declínio lento, parada repentina ou engajado e mesmo assim saindo?',
  instr:'Para cada histórico de progresso anônimo, escolha qual é o padrão — depois escolha o primeiro passo certo. 70% para liberar o Módulo 2.',
  items:[
   {type:'choice', prompt:'A presença e as atividades em aula de uma criança vêm caindo silenciosamente nas últimas cinco aulas, um pouco mais a cada vez, e a câmera ficou desligada nas duas últimas.', opts:['O declínio lento','A parada repentina','Engajado e mesmo assim saindo'], correct:0, fb:'Este é o declínio lento — o afastamento clássico, e o que você tem mais chance de reverter quanto antes agir.'},
   {type:'choice', prompt:'Na última aula, a criança estava completamente normal — presença total, câmera ligada, lição de casa feita — e nesta semana simplesmente não apareceu, sem nenhuma mensagem.', opts:['O declínio lento','A parada repentina','Engajado e mesmo assim saindo'], correct:1, fb:'Esta é a parada repentina. Algo aconteceu — pergunte, não presuma.'},
   {type:'choice', prompt:'A criança frequentou todas as aulas, participa e entrega todas as atividades — e a família acabou de pedir o cancelamento mesmo assim.', opts:['O declínio lento','A parada repentina','Engajado e mesmo assim saindo'], correct:2, fb:'Engajado e mesmo assim saindo. A causa não é engajamento — é algo como nível, expectativas, horário ou circunstâncias. Mais motivação não vai resolver; descubra o motivo real e encaminhe.'},
   {type:'choice', prompt:'No caso do “declínio lento”, qual é o primeiro passo certo?', opts:['Esperar mais algumas aulas para ter certeza de que é um padrão real','Agir agora — este é o que tem mais chance de ser revertido quanto antes você agir','Supor que é temporário e verificar de novo no mês que vem'], correct:1, fb:'Declínios lentos são exatamente o que uma ação precoce consegue reverter. Esperar é desperdiçar a vantagem que você tem.'},
   {type:'choice', prompt:'No caso da “parada repentina”, qual é o primeiro passo certo?', opts:['Supor que não é nada e esperar que a criança volte sozinha','Perguntar — descobrir o que realmente aconteceu, em vez de adivinhar','Avisar imediatamente a família que a criança está ficando para trás'], correct:1, fb:'Uma parada repentina tem uma causa específica. Descubra qual é antes de decidir o que fazer.'},
   {type:'choice', prompt:'No caso de “engajado e mesmo assim saindo”, qual é o primeiro passo certo?', opts:['Dar mais elogios e incentivo à criança para tentar mantê-la motivada','Descobrir qual é o motivo real — nível, expectativas, horário, circunstâncias — e encaminhar rápido','Concluir que não há nada a fazer, já que a criança estava indo bem'], correct:1, fb:'Mais motivação não resolve uma causa que nunca teve a ver com motivação. Descubra o que é de fato e leve rápido à pessoa certa.'}
  ]
 }
},
{id:'m2', numLabel:'Módulo 2', emoji:'🖥️', color:'var(--blue)',
 title:'Lendo a tela de Progresso',
 desc:'Descubra, em menos de dois minutos, se uma criança da sua turma está se afastando — na prática, em uma simulação do BO.',
 obj:'Descobrir, em menos de dois minutos, se uma criança da sua turma está se afastando — e verificar as duas coisas que você sempre precisa saber antes da primeira aula com um aluno novo.',
 sections:[
  {t:'👤 2.1 · Antes da primeira aula com um aluno novo — sempre', html:`
   <div class="card"><p>Um dos passos mais importantes antes de começar com uma turma nova — e que pode evitar muitos problemas depois — é revisar o perfil do aluno e os comentários do Atendimento ao Cliente.</p></div>
   ${iconGrid([
     {ic:'🎂', html:`<strong>Idade compatível.</strong> Se a idade da criança combina com o curso em que ela foi matriculada.`},
     {ic:'🎯', html:`<strong>Interesses.</strong> Do que essa criança gosta — útil para exemplos e para puxar conversa desde a primeira aula.`},
     {ic:'📝', html:`<strong>Observações dos responsáveis ou de tutores anteriores.</strong> Principalmente se a criança veio de outra turma.`}
   ])}
   ${co('co-idea','💡',`<p>Essas informações ajudam você a entender como se conectar com cada aluno e a identificar possíveis problemas ou pedir mudanças <strong>antes mesmo de a turma começar.</strong></p>`)}
   <div class="card"><p>Na simulação a seguir, você vai aprender a revisar essas informações no BO e a usá-las para se preparar para a sua nova turma.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Perfil do aluno</span><iframe src="Simulacion_BO_M2_Profile_PT.html" title="BO — Perfil do aluno" loading="lazy"></iframe></div></div>
  `},
  {t:'📊 2.2 · A tela de Progresso — sua checagem semanal de 60 segundos', html:`
   <div class="card"><p>Abaixo está exatamente como é a tela de Progresso. Siga os passos da simulação para aprender onde ficam as atividades em aula e as lições de casa, o que cada cor significa e como ler o padrão.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Progresso</span><iframe src="Simulacion_BO_M2_Progress_PT.html" title="BO — Progresso" loading="lazy"></iframe></div></div>
   ${co('co-danger','🚨',`<p>Veja o que a tela deste aluno está mostrando: notas altas e verdes em <strong>Em aula</strong> — mas todas as células de <strong>Em casa</strong> estão laranja, “não entregue”. <strong>Mesmo aluno, mesmas aulas, histórias opostas.</strong> Ele vai bem enquanto você está olhando; o curso deixa de importar no momento em que você não está.</p>`)}
   <div class="card"><h4>Como ler em menos de um minuto</h4>
   <ol><li><strong>Procure sequências de zeros.</strong> <strong>Dois seguidos já bastam para agir.</strong> Uma sequência é o sinal mais forte desta tela — muito mais informativo do que qualquer célula isolada.</li>
   <li><strong>Compare as duas abas da mesma criança.</strong> Em aula alto, Em casa vazio → ela está com você na aula, mas em casa o curso deixou de importar. Em aula baixo, Em casa razoável → algo na aula não está funcionando: dificuldade, ritmo ou atenção.</li>
   <li><strong>Compare a criança com o resto da turma.</strong> Os mesmos números significam coisas diferentes dependendo de se toda a turma está em 30/50 ou só essa criança.</li>
   <li><strong>Veja onde a sequência começa.</strong> Em qual aula ela começou? Volte ao que aconteceu ali — geralmente é lá que está a resposta.</li>
   <li><strong>Confira a presença junto.</strong> O que você vê aqui é a presença registrada no Back Office, não a presença real durante a aula — leia como “ele veio?”, e não como “quão engajado ele estava?”.</li></ol></div>
   ${co('co-danger','🚨',`<p><strong>Faça isso uma vez por semana, para a turma inteira, e não só para a criança com quem você já está preocupado.</strong> O objetivo da checagem é encontrar aquela que você <em>ainda não</em> percebeu.</p>`)}
   ${co('co-idea','🧭',`<p><strong>Você dá aulas em um curso em que a lição de casa ou a atividade em aula acontece fora da plataforma?</strong> A tela de Progresso não vai mostrar nada útil — mas o que falta é o registro, não a informação. Faça isso de forma intencional, e não automática: peça para as crianças mostrarem o trabalho compartilhando a tela, faça verificações frequentes durante o trabalho individual, passe a lição de casa de forma explícita e em voz alta, e retome o assunto chamando cada um pelo nome na aula seguinte. Mesmos sinais, mesmos limites — só que você precisa ir atrás deles.</p>`)}
  `}
 ],
 ix:{
  title:'Lendo a checagem — verificação rápida',
  instr:'Com base no exemplo do BO acima, responda às perguntas. 70% para liberar o Módulo 3.',
  items:[
   {type:'choice', prompt:'No exemplo acima, as notas de Em aula deste aluno se mantiveram altas (verde), enquanto Em casa ficou como “não entregue” (laranja) em todas as aulas. O que isso mais provavelmente significa?', opts:['Um problema de lição de casa/motivação — o curso deixou de importar quando o tutor não está olhando','Um problema de atividade em aula/dificuldade na própria aula','Nada — uma aba baixa não importa se a outra está boa'], correct:0, fb:'Em aula alto com Em casa vazio aponta para motivação ou apoio da família em casa, e não para uma dificuldade na aula.'},
   {type:'choice', prompt:'Se fosse o contrário — Em aula caindo até zero enquanto Em casa se mantém razoável — o que isso mais provavelmente significaria?', opts:['Um problema de lição de casa/motivação em casa','Um problema de atividade em aula/dificuldade — ritmo, dificuldade ou pouca atenção recebida na aula','Na verdade este aluno está bem, já que continua fazendo a lição de casa'], correct:1, fb:'Quando a lição de casa se mantém e a atividade em aula cai, geralmente o problema está na própria aula — dificuldade, ritmo ou atenção.'},
   {type:'choice', prompt:'Qual é a coisa mais importante a procurar ao checar uma tela de Progresso?', opts:['A nota mais baixa em qualquer ponto da tabela','Uma sequência de dois ou mais zeros (ou “não entregue”) seguidos','Se o total do módulo parece um número redondo'], correct:1, fb:'Uma sequência é muito mais informativa do que qualquer célula baixa isolada — é o sinal mais claro de toda a tela.'},
   {type:'choice', prompt:'Por que você deve checar tanto Em aula quanto Em casa para todas as crianças, toda semana — e não só para a criança com quem você já está preocupado?', opts:['Porque o objetivo da checagem semanal é encontrar a criança que você ainda não percebeu','Porque é uma exigência formal, não porque revele algo novo','Porque Em casa é mais importante do que Em aula, então é a única aba que vale a pena checar'], correct:0, fb:'Uma checagem só vale a pena se fizer aparecer a criança que ainda não estava no seu radar.'},
   {type:'choice', prompt:'Antes da primeiríssima aula com um aluno novo, o que você deve sempre verificar?', opts:['Nada — você vai descobrir o que precisa enquanto dá aula','Os campos Informações e Comentários do perfil do aluno','Apenas o registro de presença dele com o tutor anterior'], correct:1, fb:'Dois minutos em Informações e Comentários antes da primeira aula são o hábito mais barato e mais valioso de todo este treinamento.'}
  ]
 }
},
{id:'m3', numLabel:'Módulo 3', emoji:'🎬', color:'var(--blue)',
 title:'Agindo durante a aula',
 desc:'Use a própria aula como intervenção — o engajamento é a ferramenta mais rápida que você tem.',
 obj:'Usar a própria aula como intervenção — porque uma aula virtual, opcional e no contraturno é uma aula à qual a criança só volta se encontrou algo que valha a pena.',
 sections:[
  {t:'🔌 3.1 · Por que o engajamento pesa mais aqui', html:`
   <div class="card"><p>Nossos alunos não são obrigados a estar aqui como são na escola. Estão em casa, com todas as distrações a um clique de distância, e sem a presença física que mantém a atenção em uma sala de verdade. <strong>A conexão que você constrói em cada aula não é um bônus — é o motivo pelo qual a criança decide voltar na semana seguinte.</strong></p>
   <p>E quando uma criança começa a se afastar, a aula é a sua ferramenta mais rápida. Você não precisa esperar a permissão de ninguém para mudar a forma como conduz a aula.</p></div>
  `},
  {t:'👋 3.2 · Os primeiros minutos decidem muita coisa', html:`
   <div class="card"><p>O começo da aula define o tom de tudo o que vem depois. Uma criança que entra e sente acolhimento no cumprimento está num estado de espírito bem diferente de uma que é jogada direto no “abram a atividade”.</p></div>
   ${doavoid(
     ['Cumprimente com energia de verdade: <em>“que bom ver você hoje”</em>','Faça uma pergunta rápida e pessoal antes do conteúdo','Diga qual é o objetivo de hoje, e com convicção','Comente em voz alta quem estava ausente: <em>“que bom que você voltou”</em>'],
     ['Ir direto para o conteúdo sem cumprimentar','Parecer apressado ou estressado no começo','Não explicar o que vai fazer, nem por quê','Deixar uma criança que está voltando passar despercebida']
   )}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Um começo sem energia</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1GyQV2tEQq3OuDPfFI0NZTQRjWhg_9Rri/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Um começo acolhedor</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RqXcQLKBiWEhV97ZasJGIFuJhB8yU0Dh/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'💬 3.3 · Feedback que motiva em vez de só corrigir', html:`
   <div class="card"><p>Um elogio genérico repetido — <em>“bom”, “legal”</em> — perde a força rápido e, sem perceber, passa a mensagem oposta: que você não está olhando de verdade para o trabalho da criança.</p></div>
   ${co('co-idea','🔁',`<p><strong>Destacar → Perguntar → Ativar</strong></p>
   <ol><li><strong>Destaque</strong> algo específico que a criança <em>decidiu</em> fazer, e diga por que funciona.</li>
   <li><strong>Pergunte</strong> sobre isso com curiosidade genuína, tratando a criança como a autoridade no próprio trabalho.</li>
   <li><strong>Ative</strong> oferecendo uma escolha de verdade sobre o que vem a seguir.</li></ol>
   <p>Em vez de <em>“Muito bem!”</em> → <em>“Adorei que você fez o personagem pular bem ali — você planejou isso desde o começo ou a ideia veio enquanto montava a cena? Quer dar uma história para esse personagem ou acha que ele já está pronto assim?”</em></p>`)}
  `},
  {t:'✋ 3.4 · Garantindo que toda criança tenha uma vez de verdade', html:`
   <div class="card"><p>As crianças voltam porque encontraram um lugar onde se sentem vistas e parte de algo. E o jeito mais rápido de perder uma delas é ela tentar participar e não receber nada em troca.</p></div>
   ${co('co-danger','🚨',`<p><strong>“Distribuir a atenção” não é suficiente.</strong> Todo tutor acredita que já faz isso. <strong>Torne isso mensurável.</strong></p>
   <ul><li>Deixe a lista de participantes à vista e <strong>marque cada nome quando a criança tiver uma vez de verdade</strong> — não um olhar, uma troca real.</li>
   <li><strong>Na metade da aula, veja quem ainda não tem marcação.</strong> Vá até essas crianças em seguida.</li>
   <li>Use o chat e as reações como um segundo canal de verdade, não como prêmio de consolação: <em>“escrevam a ideia de vocês no chat que eu leio todas em voz alta”.</em></li>
   <li><strong>Quem terminar a aula com uma pergunta sem resposta recebe uma resposta por escrito em até 24 horas.</strong></li>
   <li>Se a turma for simplesmente grande demais para isso ser matematicamente possível, <strong>avise seu Team Leader.</strong> É um sinal para encaminhar, não uma falha pessoal.</li></ul>`)}
   ${doavoid(
     ['Nomeie conquistas específicas: <em>“Sofia, sua lógica ficou muito clara aí”</em>','Use o chat e as reações para que até os mais quietos participem','Valorize o esforço: <em>“você tentou três caminhos diferentes — isso é pensar como programador”</em>','Passe por cada criança da turma durante o trabalho individual'],
     ['Elogios genéricos dirigidos à turma inteira por igual','Dar atenção só a quem termina primeiro','Tratar os erros como algo ruim, ou dar as respostas antes que eles pensem','O mesmo ritmo para todos, entediando alguns e apressando outros']
   )}
  `},
  {t:'🧩 3.5 · O mesmo conselho não funciona com toda criança', html:`
   <div class="card"><p>Duas crianças travadas no mesmo exercício podem precisar de coisas opostas de você. Reconhecer alguns padrões, e ter uma ação diferente pronta para cada um, é o que transforma uma aula genérica em uma aula em que cada criança realmente quer estar.</p></div>
   ${patternCards([
     {ic:'🙈', title:'Tímido', desc:'Câmera ligada, mas quase não fala; respostas curtas; nunca se oferece; se encolhe quando é chamado de surpresa', note:'Primeiro, formas de participar com pouca pressão — chat, reações, um joinha. Convide <strong>diretamente e em particular</strong>.'},
     {ic:'😣', title:'Se frustra fácil', desc:'O “eu não consigo” chega rápido; desiste no primeiro erro; fica visivelmente chateado com erros pequenos', note:'Passos menores. Normalize os erros em voz alta. Pergunte como está indo <strong>antes</strong> de a frustração crescer.'},
     {ic:'🎯', title:'Perfeccionista', desc:'Refaz a mesma coisa várias vezes; resiste a entregar algo “inacabado”', note:'Elogie a decisão e a tentativa. Dê permissão explícita para entregar um rascunho imperfeito.'},
     {ic:'⚡', title:'Se entedia rápido', desc:'Termina rápido; distrai os outros depois que termina; “é só isso?”', note:'Um desafio extra de verdade, sempre pronto. Pense em dar a ele o papel de ajudante. <strong>Nunca o deixe sem nada para fazer.</strong>'}
   ],2)}
  `},
  {t:'🎂 3.6 · O que motiva muda com a idade', html:`
   <div class="two-col">
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧒</span>Crianças menores (aproximadamente 6–9 anos)</h4>
   <ul><li>A motivação vem da conexão e da brincadeira, não de objetivos de longo prazo.</li>
   <li>O tempo de atenção é curto. Sua energia segura a atenção mais do que o conteúdo.</li>
   <li>Um enredo imaginativo funciona — uma missão, um personagem, uma história.</li>
   <li>Os interesses específicos delas são um caminho direto para a atenção.</li>
   <li>Os erros pesam mais emocionalmente. O acolhimento precisa ser imediato.</li>
   <li>Precisam de mais repetição e demonstração prática antes de tentar sozinhas.</li></ul></div>
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧑</span>Crianças maiores (aproximadamente 10–14+ anos)</h4>
   <ul><li>A motivação passa para a competência e a relevância — e para entender <em>por que</em> aquilo importa.</li>
   <li>São sensíveis a serem tratadas com condescendência. O que mais importa é serem tratadas como capazes.</li>
   <li>Feedback sobre o <strong>raciocínio e as decisões</strong> delas funciona melhor do que só elogiar o esforço.</li>
   <li>A dinâmica social pesa mais — os colegas influenciam se elas vão arriscar uma pergunta.</li>
   <li>Conseguem se concentrar por mais tempo, mas se desligam rápido se o ritmo arrasta ou parece infantil.</li>
   <li>Autonomia importa — dar uma escolha sobre como resolver uma tarefa traz resultado.</li></ul></div>
   </div>
   ${co('co-idea','💡',`<p>As ferramentas são as mesmas em qualquer idade — um começo acolhedor, feedback específico, espaço para participar. O que muda é <strong>o que motiva</strong>: as menores precisam sentir que é divertido e que elas importam; as maiores precisam sentir que vale o tempo delas e que elas são realmente boas naquilo.</p>`)}
  `},
  {t:'🔧 3.7 · Quando a tecnologia falha', html:`
   <div class="card"><p>Coisas vão dar errado — uma tela congelada, um microfone que não conecta. O que decide se isso estraga a aula não é a falha; é a reação do adulto.</p></div>
   ${co('co-cute','🫂',`<p><strong>O primeiro passo é emocional, não técnico.</strong> Reaja com calma e normalize a situação em voz alta. Um adulto calmo mostra à criança que não há nada com que se preocupar, e a turma segue o seu tom emocional. Só depois que tudo se acalmou é que faz sentido resolver o problema técnico.</p>`)}
  `}
 ],
 ix:{
  title:'Lixo ou tesouro — hábitos em aula',
  instr:'Classifique cada hábito na área a que pertence: hábitos que constroem uma aula à qual as crianças querem voltar, ou hábitos que, sem você perceber, fazem você perder uma criança. 70% para liberar o Módulo 4.',
  items:[
   {type:'sort', prompt:'', card:'Marcar o nome de cada criança quando ela tem uma vez de verdade e verificar, na metade da aula, quem ainda não teve', zones:[{label:'🌱 Constrói a aula', fb:'Correto — é exatamente isso que transforma “distribuir a atenção” de uma intenção em algo real.'},{label:'🗑️ Faz você perder uma criança', fb:'Não exatamente — acompanhar as vezes de verdade é um hábito tesouro, não lixo.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Elogiar a turma inteira com o mesmo “muito bem, pessoal!” no fim de toda aula', zones:[{label:'🌱 Constrói a aula', fb:'Não exatamente — o elogio genérico e repetido é justamente o tipo de hábito que, sem ninguém perceber, para de motivar.'},{label:'🗑️ Faz você perder uma criança', fb:'Correto — o elogio genérico repetido perde a força rápido e passa a impressão de que ninguém está olhando de verdade para o trabalho.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Quando algo dá errado tecnicamente, reagir com calma e normalizar em voz alta antes de tentar resolver', zones:[{label:'🌱 Constrói a aula', fb:'Correto — o primeiro passo depois de uma falha técnica é regular as emoções, não a correção em si.'},{label:'🗑️ Faz você perder uma criança', fb:'Não exatamente — manter a calma e normalizar o problema é exatamente o primeiro passo certo.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Dar a todas as crianças da turma exatamente o mesmo ritmo e exatamente a mesma tarefa, independentemente de como cada uma está indo', zones:[{label:'🌱 Constrói a aula', fb:'Não exatamente — um ritmo único e fixo para a turma toda é o que entedia alguns e apressa outros.'},{label:'🗑️ Faz você perder uma criança', fb:'Correto — o mesmo ritmo para todos entedia alguns e apressa outros; é um dos fatores de desengajamento mais claros.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Deixar uma pergunta do chat sem resposta porque o tempo da aula acabou', zones:[{label:'🌱 Constrói a aula', fb:'Não exatamente — uma pergunta deixada sem resposta é uma das formas mais claras de a criança concluir que não importa ali.'},{label:'🗑️ Faz você perder uma criança', fb:'Correto — quem termina uma aula com uma pergunta sem resposta deve receber uma resposta por escrito em até 24 horas.'}], correctZone:1, fb:''}
  ]
 }
},
{id:'m4', numLabel:'Módulo 4', emoji:'📞', color:'var(--blue)',
 title:'Agindo entre as aulas',
 desc:'A conversa individual que realmente funciona, o acompanhamento das faltas e manter a família informada.',
 obj:'Fazer, entre as aulas, o que impede que uma criança que está se afastando vire um pedido de reembolso: a conversa individual, o acompanhamento das faltas e manter a família informada.',
 sections:[
  {t:'🏠 4.1 · A rotina de lição de casa que realmente funciona', html:`
   <div class="card"><p>A lição de casa não continua sendo entregue por acaso. Quatro pequenos hábitos, toda vez, são o que impede que ela caia silenciosamente para zero.</p></div>
   ${stepFlow([
     {ic:'🗣️', label:'1. Explique — o que é e por que importa, em voz alta'},
     {ic:'⏰', label:'2. Lembre — um aviso antes do prazo'},
     {ic:'🔦', label:'3. Aponte — diga especificamente o que está faltando'},
     {ic:'📝', label:'4. Corrija — um comentário de verdade, não só uma nota'}
   ])}
   ${iconGrid([
     {ic:'🗣️', html:`<strong>Explique.</strong> Ao passar a lição, diga o que é e por que ela importa para a próxima aula — e não apenas “façam os exercícios de 1 a 5”.`},
     {ic:'⏰', html:`<strong>Lembre.</strong> Um lembrete curto antes do prazo, principalmente para as crianças menores — uma mensagem ou um momento no final da aula anterior.`},
     {ic:'🔦', html:`<strong>Aponte.</strong> Se estiver faltando, diga isso de forma específica e pelo nome na aula seguinte — e não um genérico “alguns de vocês não fizeram a lição”.`},
     {ic:'📝', html:`<strong>Corrija.</strong> Deixe <strong>um comentário de verdade que a família possa ler</strong> — o que ficou bom, o que não ficou, um próximo passo concreto. Um visto sem palavras não diz nada a ninguém.`}
   ])}
   ${co('co-idea','💡',`<p>Esta é a rotina, toda semana, para todas as crianças — e não só para as que já preocupam você. É também o que dá significado a um zero quando você o vê: você sabe que não foi porque ninguém explicou, lembrou ou percebeu.</p>`)}
  `},
  {t:'☎️ 4.2 · A conversa individual que realmente funciona', html:`
   <div class="card"><p>Quando você identificar um dos sinais do Módulo 1, este é o próximo passo. Bem feita, ela muitas vezes resolve o problema sozinha.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Diga a coisa específica que você percebeu.</strong> Uma preocupação vaga soa vaga. <em>“Você não conseguiu fazer os dois últimos projetos”</em> — e não <em>“está tudo bem?”</em>`},
     {ic:'🚧', html:`<strong>Pergunte sobre o obstáculo, não sobre a atitude.</strong> <em>“O que atrapalhou?”</em> — e não <em>“por que você não está se esforçando?”</em> A primeira convida a responder; a segunda convida a se defender.`},
     {ic:'🤫', html:`<strong>Nunca na frente da turma.</strong> Uma mensagem privada, o chat ou o último minuto da aula a sós.`}
   ])}
   ${co('co-idea','💡',`<p>Depois, <strong>retome o assunto duas aulas depois</strong>, aconteça o que acontecer. Uma conversa individual sem acompanhamento ensina à criança que você percebeu, mas não se importou de verdade.</p>`)}
   <div class="card"><p>Uma das formas de recuperar um aluno desmotivado é a correção da lição de casa — e <strong>como</strong> fazemos isso. Nos dois vídeos abaixo, veja dois casos bem diferentes: um em que o tutor ignora que um aluno não fez a lição, e outro em que o tutor traz o aluno de volta, de forma dinâmica, fazendo com que ele se sinta parte da turma.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">O tutor que não motiva</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1zwbSiLXBj9mcqhKsFKNJriwSppbcEY5B/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">O tutor que motiva</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1m2m_RRNTf5zMh2-1NmExvEMGZX0DPIaK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'📵 4.3 · Quando uma criança falta a uma aula', html:`
   <div class="card"><p>Mandar a gravação não é um plano de recuperação. <strong>Duas faltas no começo do curso podem acabar com ele</strong>, porque a criança volta para uma turma em que todo mundo sabe fazer algo que ela não sabe — na frente de todos.</p></div>
   ${timeline([
     {ic:'📅', label:'No mesmo dia', items:[
       '<strong>Escreva para a família</strong>, com acolhimento em primeiro lugar: <em>“sentimos a falta dela hoje — está tudo bem?”</em> Empatia antes de qualquer outra coisa.',
       '<strong>Mande a gravação junto com a única coisa que importa.</strong> Não “assistam à aula inteira” — aponte a parte importante.'
     ]},
     {ic:'⏳', label:'Antes da próxima aula', items:[
       '<strong>Cinco minutos individuais</strong>, ou uma explicação curta por escrito do único conceito de que a criança precisa para voltar — um conceito, não a aula inteira.'
     ]},
     {ic:'🏫', label:'Na próxima aula', items:[
       '<strong>Dê a ela uma conquista rápida, fácil e visível</strong>, para que volte se sentindo capaz, e não atrasada.',
       '<strong>Mostre que você percebeu a ausência dela</strong> — de forma breve e carinhosa. Sentir que fez falta é justamente o ponto.'
     ]},
     {ic:'🚩', label:'Se faltou a duas ou mais aulas', items:[
       '<strong>Avise seu Team Leader e deixe um comentário no BO para que o Atendimento ao Cliente também veja.</strong> Esse é o limite para discutir internamente uma aula extra de reposição. Você levanta o assunto — não oferece a aula à família, e também não descarta.'
     ]}
   ])}
  `},
  {t:'💌 4.4 · Mantendo a família ao seu lado', html:`
   <img src="Images/Image_3.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>A maioria das famílias que vão embora nunca ouviu nada de bom. Tiveram notícias nossas na matrícula, e depois nunca mais — até surgir um problema.</p></div>
   ${checkbox([
     `<strong>Escreva algo específico depois de uma boa aula.</strong> Uma vez. Não precisa ser longo: <em>“hoje ela entendeu o loop sozinha — quis que vocês soubessem.”</em> Esse único hábito muda a forma como a família interpreta tudo o que vem depois.`,
     `<strong>Quando uma criança volta depois de uma falta ou de uma dificuldade, conte a conquista dela para a família.</strong>`,
     `<strong>Se você levou algo internamente, diga à família que levou</strong> — e mais ou menos quando ela terá uma resposta. O silêncio depois de um problema faz mais estrago do que o próprio problema.`,
     `<strong>Esteja disponível para perguntas sobre o aprendizado.</strong> Um responsável que quer conversar sobre como o filho está indo deve encontrar você receptivo.`
   ])}
   ${co('co-danger','⛔',`<p><strong>E ainda assim: fale sobre o aprendizado, passe a ação adiante.</strong> Nada de promessas sobre turmas, horários, níveis, pacotes, reembolsos ou aulas extras — não cabe a você conceder nem recusar essas coisas.</p>`)}
  `}
 ],
 ix:{
  title:'Escolha a mensagem',
  instr:'Para cada cenário, escolha a mensagem certa. 70% para liberar o Módulo 5.',
  items:[
   {type:'choice', prompt:'<strong>Cenário:</strong> uma criança não entregou nada nas duas últimas aulas, mas continua frequentando normalmente. Qual mensagem para a <strong>criança</strong> é a certa aqui?', opts:[
     '“Está tudo bem? Você parece meio diferente ultimamente.”',
     '“Você não entregou os dois últimos projetos, e isso não é do seu feitio — o que atrapalhou?”',
     '“Por que você não está fazendo as atividades? Você precisa acompanhar a turma.”'
   ], correct:1, fb:'Nomear a coisa específica que você percebeu, e perguntar sobre o obstáculo em vez da atitude, é o que realmente abre uma conversa, em vez de provocar uma defesa ou um dar de ombros.'},
   {type:'choice', prompt:'<strong>Mesmo cenário:</strong> a criança não entregou nada em duas aulas e continua frequentando normalmente. Qual mensagem para a <strong>família</strong> é a certa?', opts:[
     '“Percebi que [nome] não entregou as atividades das duas últimas aulas — já conversei com ele e quis deixar vocês a par.”',
     '“[Nome] não está se esforçando e talvez precise mudar para uma turma mais fácil — podemos conversar sobre as opções?”',
     '“Está tudo ótimo, só queria dar um oi!”'
   ], correct:0, fb:'Essa mensagem conta à família como a criança está e mostra que você está acompanhando — sem sugerir mudança de turma, de nível ou qualquer opção, o que não cabe a você levar à família.'},
   {type:'choice', prompt:'<strong>Novo cenário:</strong> uma criança faltou à aula de ontem sem avisar antes. Qual é o passo certo no mesmo dia?', opts:[
     'Mandar o link da gravação sem nenhuma mensagem e esperar que a criança recupere sozinha',
     'Escrever para a família primeiro com acolhimento (“sentimos a falta dela hoje, está tudo bem?”) e depois mandar a gravação junto com a parte mais importante',
     'Esperar a próxima aula para comentar qualquer coisa, para não fazer disso algo maior do que é'
   ], correct:1, fb:'Primeiro o acolhimento, depois um resumo direcionado — nem um link solto, nem o silêncio — esse é o verdadeiro plano de recuperação, e não apenas “mandar a gravação”.'}
  ]
 }
},
{id:'m5', numLabel:'Módulo 5', emoji:'🧩', color:'var(--blue)',
 title:'As oito situações',
 desc:'Para cada uma das oito coisas que realmente afastam as famílias: o que observar, o que fazer e a quem avisar.',
 obj:'Para cada uma das oito coisas que realmente afastam as famílias, saber o que observar, o que fazer na aula, o que fazer fora dela e a quem avisar.',
 sections:[
  {t:'', html:`
   <h3 class="acc-big-title">🧩 As 8 situações mais comuns por trás de um reembolso</h3>
  `},
  {t:'', html:`${accItem('😣 5.1 · A atividade está difícil demais', `
   <img src="Images/Image_5.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Um aluno pode mostrar vários sinais de que está com dificuldade. Pode dizer “eu não consigo” cedo e com frequência, desistir depois de errar ou começar a atividade em aula sem terminar. Também pode ficar mais quieto, parar de compartilhar a tela ou fazer as mesmas perguntas básicas repetidamente. Às vezes, o aluno fica para trás depois de perder uma única aula e nunca consegue recuperar totalmente. Outro sinal de alerta é quando as atividades em aula continuam fracas mesmo que ele continue tentando fazer a lição de casa.`)}
   ${stepIconBlock('⚡','Adapte — na próxima aula, sem precisar de permissão', `<ul><li>Divida a atividade em pequenas conquistas (10 min)</li><li>Dê um objetivo mais simples e explícito, em voz alta</li><li>Normalize os erros; pergunte como está indo <strong>antes</strong> de a frustração crescer</li><li>Continua travado depois de 2 aulas? Agende uma sessão com seu <strong>Mentor Regional</strong> para conseguir ideias de ensino</li></ul>`)}
   ${stepIconBlock('🗣️','Alinhe — TL + Avaliação de Tutores no BO, nesta semana', `<ul><li>Relate o que você está vendo e como a criança está se sentindo</li><li>Peça uma aula de avaliação/nivelamento se a diferença for real</li><li>Nunca levante a questão do nível com a família por conta própria</li></ul>`)}
   ${stepIconBlock('👪','Família', `<p>Só o que é seu: <em>“apoio extra nas aulas, e já levei o assunto para a minha equipe.”</em> Nada sobre níveis. Retome o assunto em até 2 aulas.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Já recebeu o pedido de reembolso por esse motivo?</strong> Vá direto para o Módulo 7 — a tentativa de retenção começa na sua próxima aula com essa criança.</p>`)}
  `)}
  ${accItem('😴 5.2 · A atividade está fácil demais', `
   <img src="Images/Image_7.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Um aluno pode terminar a atividade na metade do tempo previsto e perguntar: “É só isso?”. Depois de terminar, pode se distrair ou distrair os outros, ou comentar que já sabe o conteúdo. Outro sinal importante é quando o aluno mostra muita capacidade, mas não faz a lição de casa de forma consistente. Nos números, o tédio pode parecer exatamente desinteresse, por isso é importante olhar além das aparências.`)}
   ${stepIconBlock('⚡','Adapte — imediatamente', `<ul><li>Um desafio extra de verdade: a mesma habilidade, uma proposta mais difícil</li><li>Um pequeno papel de ajudante na turma</li><li>Dê opções; nunca o deixe sem nada para fazer</li></ul>`)}
   ${stepIconBlock('🗣️','Alinhe — TL + Avaliação de Tutores no BO, nesta semana', `<p>Diga exatamente: <em>“precisa subir de nível, não é um problema de motivação.”</em> Peça uma aula de avaliação/nivelamento.</p>`)}
   ${stepIconBlock('👪','Família', `<p>Apenas: <em>“está aprendendo muito rápido, estou dando desafios extras, e já levei o assunto para a minha equipe.”</em> Retome o assunto em até 2 aulas.</p>${co('co-ok','✅',`<p>Esse caso costuma ser resolvido — mas só se alguém falar alguma coisa.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Já recebeu o pedido de reembolso por esse motivo?</strong> Vá direto para o Módulo 7 — a tentativa de retenção começa na sua próxima aula com essa criança.</p>`)}
  `)}
  ${accItem('🧩 5.3 · Uma necessidade educacional especial', `
   <img src="Images/Image_8.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Chegam crianças com autismo, TDAH, dislexia, necessidades sensoriais, ansiedade — e às vezes com altas habilidades, que também são uma necessidade educacional especial e aparecem de um jeito bem diferente do tédio comum. Isso pode estar no perfil, ter sido mencionado uma vez pela família ou nunca ter sido dito em voz alta. As famílias muitas vezes dão primeiro outra explicação — <em>“ele perdeu o interesse”</em>, <em>“isso não é para ele”</em> — e o motivo real só aparece quando alguém pergunta do jeito certo.</p></div>
   ${noticeLine(`Uma observação no perfil (Módulo 2.1) · sobrecarga sensorial · concentração que se perde cedo · reações fortes a erros pequenos · desconforto com mudanças · leitura/escrita lenta · muita capacidade com motivação instável.`)}
   ${stepIconBlock('⚡','Adapte — é aqui que está a maior parte do trabalho, e ele é todo seu', `<ul><li>Blocos mais curtos, estrutura previsível, <strong>avise antes de cada transição</strong></li><li>Instruções por escrito + faladas; câmera opcional</li><li>Adapte a própria atividade; proteja a rotina acima de tudo</li><li>Seu <strong>Mentor Regional</strong> pode ajudar você a montar um plano para essa criança específica</li></ul>${co('co-danger','🚨',`<p>Primeiro, se esforce de verdade. Mas se a diferença continuar grande demais, <strong>escale imediatamente</strong> — isso não é um fracasso.</p>`)}`)}
   ${stepIconBlock('🗣️','Alinhe — TL imediatamente + Avaliação de Tutores no BO', `<p>Se aulas individuais ou um tutor com experiência em necessidades educacionais especiais puderem ajudar, <strong>recomende — não ofereça.</strong></p>`)}
   ${stepIconBlock('👪','Família — com cuidado', `<p>Confira primeiro o perfil (2.1); se não houver nada registrado, pergunte com delicadeza. Registre o que descobrir nos Comentários do BO.</p>${co('co-danger','⛔',`<p>Nunca: <em>“ele não consegue acompanhar”</em> ou qualquer coisa que soe como diagnóstico. Retome o assunto a cada 2 aulas, e sempre depois de qualquer mudança.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Já recebeu o pedido de reembolso por esse motivo?</strong> Vá direto para o Módulo 7 — a tentativa de retenção começa na sua próxima aula com essa criança.</p>`)}
  `)}
  ${accItem('📐 5.4 · A criança, a idade ou o formato não combinam', `
   <img src="Images/Image_9.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Um aluno pode ter dificuldade porque ainda não tem as habilidades de leitura que o material exige ou porque não consegue manter a concentração durante a aula inteira. Em alguns casos, o curso pode exigir habilidades bem acima da idade ou do nível atual dele. Outras barreiras podem ser a dificuldade da família em se adaptar ao formato de aprendizagem on-line ou uma barreira de idioma que não foi identificada antes. Esses sinais podem indicar que o problema não é engajamento, e sim um descompasso entre as necessidades do aluno e o ambiente de aprendizagem.`)}
   ${stepIconBlock('⚡','Adapte', `<p>Tente de tudo — encurte, simplifique, demonstre mais, dê mais atenção individual. Conheça o limite: uma criança que ainda não sabe ler não pode aprender em um curso que depende muito de leitura.</p>`)}
   ${stepIconBlock('🗣️','Alinhe — TL + Avaliação de Tutores no BO', `<p>Diga exatamente: <em>“é uma questão de enquadramento, não de motivação.”</em> Encaminhe — essa decisão não é sua.</p>`)}
   ${stepIconBlock('👪','Família — só se o TL pedir', `<p>Podem existir várias opções, mas <strong>não é você quem as apresenta.</strong> Siga exatamente a mensagem que o seu TL passar, ou fique de fora.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Já recebeu o pedido de reembolso por esse motivo?</strong> Vá direto para o Módulo 7 — a tentativa de retenção começa na sua próxima aula com essa criança.</p>`)}
  `)}
  ${accItem('👥 5.5 · A turma está cheia demais e a criança nunca tem sua vez', `
   <img src="Images/Image_10.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${co('co-idea','🎯',`<p><strong>Esta é a única situação da lista que depende diretamente do comportamento do tutor — e, por isso, é a que você consegue resolver mais rápido.</strong></p>`)}
   <div class="card"><p>Uma criança que levanta a mão, espera, não é chamada e fica com perguntas sem resposta vai concluir que não importa nessa turma. Duas aulas podem ser suficientes para isso.</p></div>
   ${noticeLine(`Fique atento às crianças que param de levantar a mão, às perguntas no chat que ficam sem resposta ou aos mesmos dois ou três alunos respondendo sempre. Preste atenção também aos alunos que passam uma aula inteira sem nenhuma interação com você.`)}
   ${stepIconBlock('⚡','Adapte — é uma habilidade, e dá para aprender', `<ul><li>Controle de vezes (3.4): lista visível, uma marcação por vez, verificação na metade da aula</li><li>Blocos mais curtos, chat usado de forma intencional, duplas/tarefas pequenas</li><li>Responda por escrito em até 24 h toda pergunta que ficou sem resposta</li><li>É exatamente para isso que serve uma sessão com o seu <strong>Mentor Regional</strong> — peça uma se não estiver funcionando</li></ul>`)}
   ${stepIconBlock('🗣️','Alinhe — TL', `<p>Só depois de tentar de verdade: tamanho da turma, formato, quem está ficando de fora, o que você mudou. Uma turma menor é possível, mas só se o TL souber.</p>`)}
   ${stepIconBlock('👪','Família — só se combinado com o TL', `<p>Não proponha uma troca de turma por conta própria. Você pode dizer com carinho que percebeu e que está mudando a forma de conduzir a turma — essa parte é sua.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Já recebeu o pedido de reembolso por esse motivo?</strong> Vá direto para o Módulo 7 — a tentativa de retenção começa na sua próxima aula com essa criança.</p>`)}
  `)}
  ${accItem('🔀 5.6 · Uma troca de tutor, turma ou horário foi mal recebida', `
   <img src="Images/Image_11.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>A continuidade importa muito mais do que parece, e importa principalmente para as crianças que já estão mais frágeis.</p></div>
   ${co('co-ok','✅',`<p><strong>Uma boa notícia que vale dizer em voz alta: este caso geralmente tem solução.</strong> Temos muitos tutores e muitas turmas — quase sempre dá para encontrar outro arranjo, mas só se o problema for levantado rápido, enquanto a família ainda quer uma solução, e não uma saída. As três coisas que decidem o resultado: transparência, rapidez e todo mundo informado — a família, seu TL, o Atendimento ao Cliente e um comentário no BO.</p>`)}
   <div class="card"><h4 style="margin-bottom:10px">👋 Se você está saindo</h4>${iconGrid([
     {ic:'📝', html:`<strong>Repasse nos Comentários do BO:</strong> necessidades especiais, o que motiva a criança, onde ela está travada, situação da família.`},
     {ic:'🗣️', html:`<strong>Pergunte ao TL como</strong> comunicar a mudança, e para quem — combine primeiro, depois faça exatamente isso.`}
   ])}</div>
   <div class="card"><h4 style="margin-bottom:10px">🙋 Se você está chegando</h4>${iconGrid([
     {ic:'📖', html:`<strong>Leia o repasse</strong> primeiro.`},
     {ic:'💬', html:`<strong>Nomeie a mudança</strong>, de forma breve e positiva.`},
     {ic:'🏷️', html:`<strong>Aprenda todos os nomes</strong> na primeira aula.`},
     {ic:'⏸️', html:`<strong>Não mude mais nada</strong> por 2 aulas.`}
   ])}</div>
   <div class="card"><p>Em um repasse de rotina, planejado, na maioria das regiões é o tutor — e não o Atendimento ao Cliente — quem anuncia a mudança diretamente no chat da turma e se apresenta. O Atendimento ao Cliente geralmente só entra em mudanças inesperadas ou casos delicados.</p></div>
   ${stepIconBlock('🗣️','Alinhe — TL', `<p>Imediatamente se alguma criança tiver uma necessidade educacional especial, ou se um novo horário não funcionar para alguma família.</p>`)}
   ${stepIconBlock('👪','Família — como novo tutor, com acolhimento', `<p style="font-style:italic">“Olá! Eu sou [nome] e vou assumir a turma — já li tudo sobre [criança] para a gente continuar exatamente de onde parou.”</p><p>Só entusiasmo — sem o motivo da mudança.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Já recebeu o pedido de reembolso por esse motivo?</strong> Vá direto para o Módulo 7 — a tentativa de retenção começa na sua próxima aula com essa criança.</p>`)}
  `)}
  ${accItem('⚠️ 5.7 · Algo falhou do nosso lado', `
   <img src="Images/Image_12.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Uma aula perdida por uma falha da plataforma, um cancelamento, um problema técnico que consumiu a maior parte da hora.</p></div>
   ${co('co-danger','🚨',`<p><strong>A pior coisa que um tutor pode dizer aqui é “isso não é possível”.</strong> Uma criança perde aulas porque nossa plataforma falhou, a família pede uma aula de reposição, o tutor diz que não dá — a família perde a confiança e pede reembolso. <strong>Essa nunca foi uma decisão do tutor.</strong> Duas aulas perdidas ou prejudicadas são o gatilho que a maioria das regiões usa para abrir a conversa sobre uma aula extra de reposição, embora a decisão final seja sempre do seu TL. Abrir essa conversa é trabalho seu. Fechá-la, não.</p>`)}
   ${stepIconBlock('⚡','Adapte', `<p>Mantenha a calma, normalize a situação (3.7), proteja o clima da turma, mande a gravação, siga o plano de recuperação (4.3).</p>`)}
   ${stepIconBlock('🗣️','Alinhe — TL no mesmo dia', `<ul><li>Discutam uma aula extra de reposição</li><li>Envolva o Atendimento ao Cliente se a família estiver insatisfeita ou houver uma questão comercial</li><li>Preencha uma Avaliação de Tutores no BO</li></ul>`)}
   ${stepIconBlock('👪','Família — combine a mensagem com o TL primeiro, no mesmo dia', `<p><em>“Já levei isso para a minha equipe e vamos dar um retorno para vocês”</em> — e depois garanta que alguém realmente dê esse retorno, hoje.</p>${co('co-danger','⛔',`<p>Nunca prometa a aula extra, nunca a descarte. Acompanhamento: dê à criança a primeira vez de verdade na próxima aula.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Já recebeu o pedido de reembolso por esse motivo?</strong> Vá direto para o Módulo 7 — a tentativa de retenção começa na sua próxima aula com essa criança.</p>`)}
  `)}
  ${accItem('📢 5.8 · “Não foi isso que nos disseram”', `
   <img src="Images/Image_13.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Um responsável diz que o nível, o pacote, o horário ou o próprio curso não são o que ele entendeu que estava comprando. É a conversa mais desconfortável que um tutor tem, e a mais fácil de piorar.</p>
   <p><em>As expectativas criadas antes do início do curso estão por trás de uma grande parte de todos os pedidos de reembolso — mais do que qualquer outra causa isolada.</em></p></div>
   ${stepIconBlock('⚡','Adapte', `<p>Para a criança, nada muda — continue dando boas aulas.</p>`)}
   ${stepIconBlock('🗣️','Alinhe — TL + Atendimento ao Cliente, antes de responder qualquer coisa', `<ul><li>Leve o assunto ao seu TL no mesmo dia</li><li>Envolva o Atendimento ao Cliente — eles são os responsáveis pelos próximos passos</li><li>Registre as palavras da família ao pé da letra em uma Avaliação de Tutores no BO</li></ul><p>Tudo bem confirmar o recebimento: <em>“obrigado, vou levar isso para a minha equipe e volto a falar com vocês.”</em> Isso não é uma resposta. <span style="font-size:12.5px">(Se o que pedem for algo pequeno — uma aula extra — muitas vezes você e seu TL conseguem resolver diretamente, sem o Atendimento ao Cliente. Pergunte ao seu TL qual é o caso.)</span></p>`)}
   ${stepIconBlock('👪','Família — só com a liberação do TL', `<ol><li>Acolha o que foi dito, sem culpar ninguém</li><li>Mostre que você se importa com a criança</li><li>Passe o caso para o Atendimento ao Cliente de forma organizada</li></ol>${co('co-danger','⛔',`<p>Nunca: culpar um colega, discutir ou oferecer soluções por conta própria.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Já recebeu o pedido de reembolso por esse motivo?</strong> Vá direto para o Módulo 7 — a tentativa de retenção começa na sua próxima aula com essa criança.</p>`)}
  `)}
  `}
 ],
 ix:{
  title:'Oito situações, oito primeiros passos',
  instr:'Para cada situação anônima, escolha a qual das oito categorias ela pertence e depois escolha o primeiro passo correto. 70% para liberar o Módulo 6.',
  items:[
   {type:'choice', prompt:'“Ele diz que não consegue, começa a chorar no primeiro erro e parou de terminar as atividades em aula.” — que situação é essa?', opts:['A atividade está difícil demais','A atividade está fácil demais','Uma necessidade educacional especial'], correct:0, fb:'Fracassos repetidos logo no começo e desistir no primeiro erro são o perfil clássico de uma atividade difícil demais.'},
   {type:'choice', prompt:'O primeiro passo certo para essa situação é —', opts:['Mandar mensagem para a família sugerindo uma mudança de nível','Dividir a atividade em passos menores e dar um objetivo reduzido e explícito — já nesta aula','Seguir como planejado; o nível não é algo que você possa ajustar'], correct:1, fb:'Adapte a atividade você mesmo, imediatamente — a conversa sobre o nível, se for necessária, vai para o seu Team Leader e o Atendimento ao Cliente, nunca direto para a família.'},
   {type:'choice', prompt:'“Ele termina em um terço do tempo e depois começa a distrair o colega do lado. Nenhuma lição de casa em três semanas.” — que situação é essa?', opts:['A atividade está fácil demais','Uma necessidade educacional especial','Circunstâncias familiares'], correct:0, fb:'Terminar rápido, atrapalhar e não fazer nenhuma lição de casa é tédio causado por um nível fácil demais — parece desinteresse, mas não é.'},
   {type:'choice', prompt:'O primeiro passo certo para essa situação é —', opts:['Dar imediatamente um desafio extra de verdade ligado à mesma habilidade e reportar como possível subida de nível','Reportar e esperar a revisão do nível antes de mudar qualquer coisa','Supor que ele simplesmente não está motivado e incentivá-lo mais'], correct:0, fb:'Aqui as duas partes são necessárias: adaptar agora para que ele não fique entediado por semanas, e reportar agora para que o próprio nível seja revisado.'},
   {type:'choice', prompt:'“A família mencionou na aula experimental que ele tem TDAH, mas isso nunca foi registrado em lugar nenhum e nenhum tutor se adaptou.” — que situação é essa?', opts:['A turma está cheia demais','Uma necessidade educacional especial','Algo falhou do nosso lado'], correct:1, fb:'Este é exatamente o caso de necessidade educacional especial que mais passa despercebido — a informação existia, só nunca chegou à aula.'},
   {type:'choice', prompt:'O primeiro passo certo para essa situação é —', opts:['Esperar um diagnóstico oficial antes de mudar qualquer coisa','Adaptar a aula imediatamente — blocos mais curtos, estrutura previsível, transições avisadas — e alinhar com seu Team Leader e o Atendimento ao Cliente, além de deixar um comentário no BO','Dizer à família que talvez o filho não se adapte a esse formato'], correct:1, fb:'Você mesmo adapta tudo o que pode, imediatamente, e também garante que fique registrado para que o próximo tutor e o Atendimento ao Cliente saibam.'},
   {type:'choice', prompt:'“Duas crianças da minha turma agitada de dez não tiveram nenhuma troca de verdade comigo em três aulas, e uma delas parou de levantar a mão.” — que situação é essa?', opts:['A criança, a idade ou o formato não combinam','A turma está cheia demais e a criança nunca tem sua vez','Não foi isso que nos disseram'], correct:1, fb:'É claramente uma questão de gestão de turma — e a única situação da lista que depende diretamente do comportamento do tutor.'},
   {type:'choice', prompt:'O primeiro passo certo para essa situação é —', opts:['Reportar o tamanho da turma ao seu Team Leader e esperar uma decisão antes de mudar qualquer coisa','Mudar a forma como você conduz essa turma específica — controlar as vezes, usar o chat de forma intencional, reorganizar os blocos — e escalar só se ainda assim não for suficiente','Focar nas crianças que participam, já que elas estão claramente mais engajadas'], correct:1, fb:'É uma habilidade que você pode aplicar imediatamente. Você escala porque tentou de verdade e a diferença continua grande demais — não no lugar de tentar.'},
   {type:'choice', prompt:'“Um responsável diz que falaram para ele que seriam aulas individuais, e não uma turma de oito.” — que situação é essa?', opts:['Uma troca de tutor, turma ou horário foi mal recebida','Não foi isso que nos disseram','A atividade está difícil demais'], correct:1, fb:'Uma divergência entre o que foi prometido e o que está sendo entregue é exatamente “não foi isso que nos disseram” — a mais delicada das oito.'},
   {type:'choice', prompt:'O primeiro passo certo para essa situação é —', opts:['Explicar como funcionam as aulas em turma e por que elas têm valor pedagógico','Confirmar o recebimento, depois levar o assunto ao seu Team Leader e ao Atendimento ao Cliente no mesmo dia, antes de responder de fato — e registrar ao pé da letra as palavras da família no BO','Pedir desculpas pela confusão e se oferecer para ver a possibilidade de mudar para aulas individuais'], correct:1, fb:'Responder por conta própria — mesmo de forma razoável — é como os tutores acabam, sem querer, confirmando uma reclamação ou dando a entender algo que não podemos cumprir. Alinhe primeiro, sempre.'}
  ]
 }
},
{id:'m6', numLabel:'Módulo 6', emoji:'🧭', color:'var(--blue)',
 title:'A quem avisar, e com que rapidez',
 desc:'Transforme tudo o que você viu até aqui em algo que realmente aconteça — o mapa de encaminhamento e as cinco regras.',
 obj:'Transformar tudo o que você viu até aqui em algo que realmente aconteça — sabendo, sem precisar pensar, a quem avisar e com que rapidez.',
 sections:[
  {t:'⏱️ 6.1 · A velocidade é tudo', html:`
   <div class="card"><p>Todas as situações do Módulo 5 têm o mesmo formato: são fáceis de resolver cedo e caras de resolver tarde. Um nível errado identificado na terceira aula se resolve. O mesmo nível errado na décima quinta aula já virou <em>“ele não se interessa mais”</em> — e, a essa altura, a família já deixou de acreditar na gente.</p></div>
   ${co('co-idea','💡',`<p><strong>Você é a ponte entre a aula e as pessoas que podem mudar a situação da criança. Uma ponte só vale alguma coisa se as coisas a atravessam rápido.</strong></p>`)}
  `},
  {t:'🗺️ 6.2 · O mapa de encaminhamento', html:`
   <div class="tbl-full"><div class="card"><table>
   <tr><th>🔎 O que você percebeu</th><th>① Na aula</th><th>② Entre as aulas</th><th>③ A quem avisar + BO</th><th>④ A família</th><th>⏱️ Com que rapidez</th></tr>
   <tr><td><strong>Presença abaixo da metade</strong>, ou atividades bem abaixo da turma</td><td>Dê uma vez de verdade e uma conquista possível</td><td>Conversa individual em particular com a criança</td><td>Team Leader se passarem mais duas aulas sem mudança</td><td>Mensagem curta e acolhedora — você pode enviar</td><td>Na mesma semana</td></tr>
   <tr><td><strong>Duas ou mais aulas sem nada entregue</strong></td><td>Confira as atividades ao vivo pelo compartilhamento de tela; reduza o objetivo</td><td>Conversa individual; explique bem a próxima lição de casa e acompanhe</td><td>Team Leader se continuar</td><td>Mensagem sobre o progresso — você pode enviar</td><td>Na mesma semana</td></tr>
   <tr><td><strong>Atividade difícil demais</strong></td><td>Passos menores, objetivo reduzido, adapte a atividade, normalize os erros</td><td>Explicação por escrito do conceito que está faltando</td><td><strong>Team Leader + Avaliação de Tutores no BO</strong> — peça uma aula de avaliação/nivelamento se necessário</td><td>Só o que seu TL liberar. Nunca o nível nem as opções</td><td>Na mesma semana</td></tr>
   <tr><td><strong>Atividade fácil demais</strong></td><td>Desafio extra de verdade, atividade adaptada para cima, papel de ajudante, nunca sem nada para fazer</td><td>Tenha pronta uma atividade do próximo nível</td><td><strong>Team Leader + Avaliação de Tutores no BO</strong> — peça uma aula de avaliação/nivelamento se necessário</td><td>Só o que seu TL liberar. Nunca o nível nem as opções</td><td>Na mesma semana</td></tr>
   <tr><td><strong>Necessidade educacional especial</strong>, registrada ou suspeita</td><td>Blocos mais curtos, estrutura previsível, avisar antes das transições, adaptar as atividades</td><td>Anote o que funciona e o que não funciona</td><td><strong>Team Leader + Avaliação de Tutores no BO.</strong> Pergunte sobre aulas individuais se a diferença for grande</td><td>Perguntar o que ajuda: com você, com cuidado. Formato/turma/aulas individuais: nunca sugeridos por você</td><td>Antes da próxima aula · imediatamente se a diferença for grande demais</td></tr>
   <tr><td><strong>Idade ou formato não combinam</strong></td><td>Simplifique, demonstre mais, dê mais atenção na aula</td><td>Seja honesto sobre o limite</td><td><strong>Team Leader + Avaliação de Tutores no BO</strong> — diga “enquadramento, não motivação”</td><td>Só se o seu TL pedir</td><td>Na mesma semana</td></tr>
   <tr><td><strong>A criança nunca tem sua vez</strong></td><td>Controle de vezes; ajuste sua abordagem; adapte uma atividade para quem precisa</td><td>Respostas por escrito em até 24 h para tudo o que ficou sem resposta</td><td>Team Leader, se não der para resolver na aula</td><td>Mudanças no seu próprio ensino: com você. Troca de turma: nunca parte de você</td><td>Na mesma semana</td></tr>
   <tr><td><strong>Troca de tutor/turma/horário</strong></td><td>Nomeie a mudança, normalize, não mude mais nada por duas aulas</td><td>Repasse registrado nos Comentários do BO</td><td><strong>Team Leader</strong> — imediatamente se alguma criança tiver uma necessidade especial ou se um horário não funcionar. Atendimento ao Cliente só para casos inesperados/delicados</td><td>Como novo tutor: acolhedor, entusiasmado. Sem o motivo da mudança, sem falar de horários</td><td>Antes da aula de repasse</td></tr>
   <tr><td><strong>Duas aulas prejudicadas</strong> — falha da plataforma, cancelamento, falta</td><td>Mantenha a calma, proteja o clima</td><td>Gravação + a parte que importa; plano de recuperação</td><td><strong>Team Leader no mesmo dia — abre a discussão sobre a aula extra (duas aulas é o gatilho que a maioria das regiões usa).</strong> Atendimento ao Cliente se a família estiver insatisfeita · Avaliação de Tutores no BO</td><td>No mesmo dia — combine o texto com seu TL primeiro</td><td>No mesmo dia</td></tr>
   <tr><td><strong>“Não foi isso que nos disseram”</strong></td><td>Para a criança, nada muda — continue dando boas aulas</td><td>—</td><td><strong>Team Leader + Atendimento ao Cliente, antes de responder · as palavras da família ao pé da letra em uma Avaliação de Tutores</strong></td><td>Só confirme o recebimento. A resposta de fato vem depois da liberação do TL — sem opções vindas de você</td><td>No mesmo dia</td></tr>
   <tr><td><strong>Circunstâncias familiares, saúde, dinheiro</strong></td><td>Seja gentil, não espere nada</td><td>—</td><td>Atendimento ao Cliente, por meio do seu Team Leader · não insista</td><td>Uma frase acolhedora, sem perguntas adicionais</td><td>Assim que você souber</td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p>Para qualquer urgência, a maioria das regiões também tem um canal direto no Slack entre Team Leader e Atendimento ao Cliente, como alternativa mais rápida ao BO — o nome muda em cada região, então pergunte ao seu Team Leader qual é o seu.</p>`)}
   ${co('co-idea','🎓',`<p><strong>Uma coluna que este mapa não mostra: o seu Mentor Regional.</strong> Tudo o que está na coluna “a quem avisar” acima tem a ver com as <em>condições combinadas</em> — nível, turma, horário, pacote — e sempre vai para o seu Team Leader e o Atendimento ao Cliente. Quando a pergunta for <em>como ensinar isso melhor</em>, é ao seu Mentor Regional que você deve recorrer, junto com o caminho acima — não no lugar dele.</p>`)}
  `},
  {t:'⚖️ 6.3 · As cinco regras', html:`
   <div class="rule-row">
     <div class="rule-card"><div class="rule-num">1</div><div class="rule-ic">⚡</div><div class="rule-txt"><strong>Adapte primeiro.</strong> Você não precisa de permissão para ensinar melhor amanhã — muitos casos terminam aí. Continua travado depois de 2 aulas? Agende uma sessão com seu Mentor Regional.</div></div>
     <div class="rule-card"><div class="rule-num">2</div><div class="rule-ic">📣</div><div class="rule-txt"><strong>Avisar alguém não é opcional.</strong> Você informa o Team Leader, envolve o Atendimento ao Cliente, preenche a Avaliação de Tutores — ou o problema fica em silêncio.</div></div>
     <div class="rule-card"><div class="rule-num">3</div><div class="rule-ic">🚦</div><div class="rule-txt"><strong>Team Leader antes da família.</strong> Alinhem e combinem a estratégia, <em>depois</em> fale com a família — exatamente o que foi combinado, nunca opções suas.</div></div>
     <div class="rule-card"><div class="rule-num">4</div><div class="rule-ic">🤐</div><div class="rule-txt"><strong>Nunca prometa, nunca recuse — sempre mostre que se importa.</strong> Você recomenda; o Atendimento ao Cliente oferece. Uma exceção: depois que seu Team Leader aprovar uma aula extra, muitas vezes você mesmo pode avisar a família.</div></div>
     <div class="rule-card"><div class="rule-num">5</div><div class="rule-ic">🔁</div><div class="rule-txt"><strong>Escale uma vez e depois acompanhe.</strong> Levantar um assunto e esquecer dele é o mesmo que nunca ter levantado.</div></div>
   </div>
   ${co('co-idea','💡',`<p>Vale a pena transformar essas cinco regras em hábito, e não apenas lê-las uma vez — elas são a diferença entre um sinal que vira ação e um que desaparece em silêncio. Confira com seu Team Leader qualquer detalhe sobre como isso funciona na sua região.</p>`)}
  `}
 ],
 ix:{
  title:'Encaminhamento — cinco sinais',
  instr:'Para cada sinal, escolha para onde ele vai primeiro. 70% para liberar o Módulo 7.',
  items:[
   {type:'choice', prompt:'As atividades em aula de uma criança estão boas, mas a lição de casa está zerada há duas aulas seguidas, e ainda não foi identificada nenhuma outra causa.', opts:['Eu mesmo ajo — uma conversa individual nesta semana, sem precisar reportar ainda','Team Leader + Atendimento ao Cliente imediatamente','Encaminhar direto para o Atendimento ao Cliente, sem passar pelo Team Leader'], correct:0, fb:'Uma queda só na lição de casa, como esta, começa com a sua própria conversa individual. Escale para o Team Leader só se continuar depois disso.'},
   {type:'choice', prompt:'Há duas semanas você adapta a aula para uma criança que claramente está com dificuldade no nível, e ainda não é suficiente.', opts:['Continuar adaptando indefinidamente — o nível não é decisão sua, então não há nada para escalar','Team Leader + Atendimento ao Cliente, com um comentário no BO','Mandar mensagem direto para a família sobre uma possível mudança de nível'], correct:1, fb:'Este é exatamente o momento em que um caso de “difícil demais” precisa ir para o seu Team Leader e o Atendimento ao Cliente, por escrito, no BO.'},
   {type:'choice', prompt:'Uma criança da sua turma tem um diagnóstico de autismo registrado no perfil, e você acabou de saber que a turma vai ser reorganizada com um novo tutor no mês que vem.', opts:['Esperar a mudança ser confirmada antes de comentar com qualquer pessoa','Avisar seu Team Leader imediatamente, escrever um repasse completo no BO e combinar como a mudança vai ser comunicada','Contar você mesmo para a criança, em particular, agora, para ela ter tempo de se preparar'], correct:1, fb:'Uma necessidade educacional especial somada a uma mudança na continuidade precisa ser sinalizada imediatamente — e a forma de comunicar precisa ser combinada antes com seu Team Leader.'},
   {type:'choice', prompt:'Duas aulas seguidas foram prejudicadas por uma falha da plataforma, e o responsável acabou de perguntar sobre uma aula de reposição.', opts:['Dizer que aulas de reposição não são possíveis','Dizer que você mesmo vai organizar uma, para tranquilizá-lo rápido','Confirmar que vai levar o assunto adiante e conversar com seu Team Leader no mesmo dia sobre uma aula extra'], correct:2, fb:'Recusar ou prometer não cabe a você — mas abrir a conversa interna no mesmo dia é exatamente o seu trabalho.'},
   {type:'choice', prompt:'Um responsável manda mensagem dizendo que o nível, o pacote ou o horário não são o que disseram para ele na matrícula.', opts:['Responder no mesmo dia com a explicação mais honesta que você tiver','Confirmar o recebimento, depois levar o assunto ao seu Team Leader e ao Atendimento ao Cliente antes de responder de fato, registrando as palavras exatas dele no BO','Encaminhar para o Atendimento ao Cliente e considerar que o assunto não é mais seu'], correct:1, fb:'Esta é a única situação em que responder por conta própria causa mais estrago. Alinhe primeiro, sempre — mas também não fique em silêncio.'}
  ]
 }
},
{id:'m7', numLabel:'Módulo 7', emoji:'🛟', color:'var(--coral)',
 title:'Salvando um pedido de reembolso',
 desc:'Tudo até aqui foi sobre evitar um pedido. Este módulo é sobre o que fazer quando um pedido já foi feito.',
 obj:'Saber o que muda quando um pedido de reembolso já foi feito: o que a próxima aula precisa alcançar, o que você pode e não pode dizer, e como continuar passando ao Atendimento ao Cliente o que ele precisa.',
 sections:[
  {t:'🔀 7.1 · Tudo muda quando o pedido já existe', html:`
   <div class="card"><p>Os Módulos 1 a 6 são sobre perceber o problema <strong>antes</strong> de uma família pedir o dinheiro de volta. Este módulo é para o momento em que isso já aconteceu: <strong>um pedido de reembolso foi feito</strong> e você foi avisado.</p></div>
   ${co('co-idea','💡',`<p><strong>O pedido em si é criado pelo gerente de Atendimento ao Cliente, não por você.</strong> Nada nessa parte está sob o seu controle. O que continua sendo seu é tudo o que acontece na aula daqui para frente — e isso não é pouco.</p>`)}
   ${co('co-danger','🚨',`<p><strong>Não diga nada sobre o pedido em si</strong> — nem para a criança, nem para a família — a menos que o Atendimento ao Cliente peça explicitamente que você diga algo específico. Seu trabalho agora é a aula, não a conversa.</p>`)}
  `},
  {t:'🎯 7.2 · Sua próxima aula com essa criança é a tentativa de retenção', html:`
   <div class="card"><p>Talvez você não tenha outra chance de mudar alguma coisa. Trate a próxima aula como o momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dê a ela uma vez de verdade.</strong> Não uma pergunta qualquer — um momento genuíno em que ela é vista e se sai bem.`},
     {ic:'🏆', html:`<strong>Garanta uma conquista rápida, fácil e visível.</strong> Ela deve sair da aula se sentindo capaz, e não atrasada.`},
     {ic:'👀', html:`<strong>Faça a criança se sentir notada</strong> — de forma específica, não genérica. A mesma regra de toda conversa individual deste treinamento.`},
     {ic:'🤐', html:`<strong>Não mencione o pedido.</strong> Esta aula não é o lugar para essa conversa, mesmo que a criança toque no assunto — mude de assunto com carinho e continue a aula.`}
   ])}
  `},
  {t:'📮 7.3 · Passe informações rápido ao Atendimento ao Cliente — isso continua sendo seu trabalho', html:`
   <div class="card"><p>O Atendimento ao Cliente está cuidando do pedido sem estar na sua aula. O que você viu, com detalhes e rapidez, é uma informação que eles não têm como conseguir de outra forma.</p></div>
   ${checkbox([
     'Um comentário no BO com exatamente o que você viu — datas, fatos concretos, não impressões',
     'As palavras da própria família, ao pé da letra, se você as tiver — sem parafrasear',
     'Tudo o que você já adaptou ou ofereceu, para que o Atendimento ao Cliente não repita',
     'Seu Team Leader informado, no mesmo dia'
   ])}
   ${co('co-idea','💡',`<p>Você pode descobrir que existe um pedido pelos próprios comentários do Atendimento ao Cliente no perfil da criança no BO — não existe um sistema automático que avise você no momento em que uma família pede reembolso. Você passa sinais para o Atendimento ao Cliente; eles não passam atualizações para você.</p>`)}
  `},
  {t:'🚧 7.4 · O que você pode e o que não pode fazer', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Você pode</th><th>🚫 Você nunca pode</th></tr>
   <tr><td>Avisar o Atendimento ao Cliente pelo BO assim que souber de um pedido</td><td>Confirmar que um reembolso foi aprovado</td></tr>
   <tr><td>Se surgir uma oportunidade natural <strong>antes</strong> desse aviso, oferecer algo concreto — uma aula extra, uma verificação de nível, recomendar outro curso</td><td>Confirmar ou discutir qualquer valor</td></tr>
   <tr><td>Dizer ao responsável que o Atendimento ao Cliente vai ajudá-lo</td><td>Dizer ou insinuar qualquer coisa além disso sobre o pedido em si</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>A mensagem que é sempre segura dizer:</strong> <em>“O Atendimento ao Cliente vai ajudar vocês com isso.”</em> Nada além disso — é aí que sua parte termina, e é uma conversa para a qual você não tem as informações.</p>`)}
  `},
  {t:'🌱 7.5 · As 2 a 4 aulas depois da retenção', html:`
   <div class="card"><p>Seja o pedido retirado, a criança fique na sua turma, mude para outro tutor ou passe para aulas individuais — as próximas aulas é que decidem se a retenção realmente se sustentou.</p></div>
   ${iconGrid([
     {ic:'🔁', html:`<strong>Cuidado extra em cada uma dessas aulas</strong> — uma vez de verdade, uma conquista específica, uma ausência notada — tudo o que este treinamento ensinou, repetidamente.`},
     {ic:'📝', html:`<strong>Um repasse completo</strong> nos Comentários do BO se a criança for para um novo tutor ou formato — com o mesmo cuidado de repasse do Módulo 5.6.`},
     {ic:'👋', html:`<strong>Continuidade acolhedora</strong> se ela ficar com você — não deixe o alívio do “deu certo” fazer você voltar, sem perceber, ao jeito como as coisas eram antes.`}
   ])}
  `},
  {t:'🔙 7.6 · A prevenção continua sendo o principal', html:`
   <div class="card"><p>Tudo abaixo já está nos Módulos 1 a 6 — esta é a versão curta, para lembrar que a maior parte do seu trabalho é fazer com que este módulo nunca seja necessário.</p></div>
   ${checkbox([
     'Acompanhe a lição de casa, toda semana',
     'Mantenha a estrutura completa da aula — não deixe ela se perder quando a turma parecer fácil',
     'Reporte mais de duas faltas, ou um problema técnico, assim que acontecer',
     'Escale para o seu Team Leader no momento em que vir um sinal de risco',
     'Envie o relatório de atenção ao aluno quando ele for esperado de você'
   ])}

  `}
 ],
 ix:{
  title:'Quando o pedido já chegou',
  instr:'Para cada cenário, escolha o passo certo. 70% para continuar.',
  items:[
   {type:'choice', prompt:'Você acabou de saber que uma família fez um pedido de reembolso para uma criança da sua turma. O que você faz primeiro?', opts:['Mandar mensagem para a família para descobrir o motivo e resolver diretamente','Avisar o Atendimento ao Cliente pelo BO e informar seu Team Leader no mesmo dia','Esperar o Atendimento ao Cliente entrar em contato antes de fazer qualquer coisa'], correct:1, fb:'O pedido já está com o Atendimento ao Cliente — seu trabalho é fazer chegar a eles o que você sabe, rápido, e não abrir sua própria conversa com a família.'},
   {type:'choice', prompt:'Na sua próxima aula com essa criança, o que deve mudar?', opts:['Nada — agir diferente poderia fazê-la perceber que algo está errado','Dar a ela uma conquista real e visível e garantir que se sinta notada — sem mencionar o pedido','Ter uma conversa direta com a criança sobre por que a família dela quer sair'], correct:1, fb:'A própria aula é a tentativa de retenção. O pedido em si nunca é algo para levantar com a criança.'},

   {type:'choice', prompt:'Um responsável pergunta diretamente se o reembolso foi aprovado. O que você responde?', opts:['Dá o seu melhor palpite com base em como essas coisas costumam acontecer','Diz que o Atendimento ao Cliente vai ajudá-lo com isso, e para por aí','Confirma o valor que ele tem a receber, se por acaso você souber'], correct:1, fb:'Confirmar uma aprovação ou um valor nunca cabe a você, por mais seguro que você esteja. A única frase segura encaminha o responsável para o Atendimento ao Cliente.'},
   {type:'choice', prompt:'O pedido é retirado e a criança fica na sua turma. E agora?', opts:['Voltar ao normal — a crise passou','Continuar dando cuidado extra a essa criança nas próximas aulas, porque a retenção ainda pode se desfazer','Dizer à família que você está feliz por eles terem mudado de ideia'], correct:1, fb:'Uma retenção que se sustenta por uma aula e depois volta ao normal muitas vezes não se sustenta. São as próximas aulas que realmente decidem.'}
  ]
 }
},
{id:'checklist', numLabel:'Módulo 8', emoji:'✅', color:'var(--green-d)',
 title:'Checklist final',
 desc:'Aqui não tem quiz — só tudo o que você viu neste treinamento, em uma lista, antes de fazer a prova.',
 obj:'Revise o checklist completo abaixo. Este módulo não é avaliado — leia e depois siga para a prova final.',
 sections:[
  {t:'✅ O essencial, em uma lista', html:`
   ${numlist([
     'Confiro o perfil do aluno, incluindo os Comentários, <strong>antes</strong> da minha primeira aula com uma criança nova',
     'Uma vez por semana, checo a tela de Progresso da turma toda — tanto Em aula quanto Em casa',
     'Trato uma linha reta no zero como o sinal mais grave que existe, e não como algo neutro',
     'Toda criança da minha turma tem uma vez de verdade, e consigo comprovar isso porque faço o controle',
     'Quando uma criança falta, faço os quatro passos, e não só mando a gravação',
     'Reconheço os padrões que estou vendo e respondo de forma diferente a cada um',
     'Sempre aviso meu Team Leader, envolvo o Atendimento ao Cliente quando necessário e deixo um comentário no BO',
     'Quando o Atendimento ao Cliente assume uma conversa, fico de fora e sigo as orientações deles',
     'Escalo uma vez e depois acompanho'
   ])}
  `},
  {t:'🪞 Autoavaliação — perguntas para se fazer toda semana', html:`
   ${numlist([
     'Percebi alguma queda nas atividades em aula ou na lição de casa de alguma criança nesta semana, mesmo de uma que continuou frequentando normalmente?',
     'Tem alguma criança da minha turma zerada nas atividades que, sem eu perceber, deixei de notar?',
     'Toda criança da minha turma teve uma vez de verdade na minha última aula? Tenho certeza ou estou supondo?',
     'Tem algo que percebi e ainda não contei para ninguém?',
     'Tem algo que contei para alguém e nunca acompanhei?'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Esse é o treinamento inteiro.</strong> Quando estiver pronto, siga para a prova final — e depois faça o DST no LMS para encerrar a atividade.</p>`)}
  `}
 ],
 gateExam:true
},
    ];
  }
};

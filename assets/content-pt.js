/* Refunds training - Portuguese content (translated from the English source). */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    pageTitle:'Treinamento sobre reembolsos — Treinamento de Tutores Kodland',
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:'💸 Programa de treinamento para tutores',
    heroTitle:'Entendendo os <span class="h-pill">reembolsos</span>',
    heroIntro:"Por trás de cada pedido de reembolso existe uma criança que estava construindo algo e parou — e você geralmente é a primeira pessoa que pode perceber isso. Este treinamento é sobre o quanto você observa bem e o quão rápido você age.",
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
 desc:'Como um reembolso se manifesta do ponto de vista da criança, por que você é a primeira pessoa a notar os sinais e qual é o seu papel nesse processo.',
 obj:'Entender como um reembolso se manifesta do ponto de vista da criança, por que você é a primeira pessoa a notar os sinais e qual é o seu papel nesse processo.',
 sections:[
  {t:'📋 Você está aqui por um motivo específico — identifique-o rapidamente', html:`
   <div class="card"><p>Abaixo você encontra os motivos pelos quais este treinamento pode ter sido atribuído a você. Aqui tratamos apenas dos reembolsos solicitados por motivos relacionados à aula — situações em que podemos ajudar você a lidar com eles, não só para evitá-los daqui para frente, mas para reverter o pedido de reembolso. Ainda assim, fazer o treinamento completo proporcionará a você uma visão mais ampla, que também ajuda a evitar reembolsos que surgem por outros motivos.</p></div>
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>🚩 O motivo registrado</th><th>👀 Como costuma aparecer</th><th>📍 Como este treinamento ajuda</th></tr>
   <tr><td><strong>Falta de interesse por programação / pelos cursos da Kodland</strong></td><td>Entediado, fazendo as atividades sem engajamento, “é só isso?”, sem nenhuma objeção concreta a algo específico</td><td>Módulo 5.2 · Módulo 3.6</td></tr>
   <tr><td><strong>Organização da aula / disciplina</strong></td><td>A aula parece caótica, uma criança monopoliza a atenção, enquanto as outras ficam quietas ou se dispersam</td><td>Módulo 5.5 · Módulo 3</td></tr>
   <tr><td><strong>Reação muito negativa aos erros</strong></td><td>Desiste rapidamente, frustra-se com pequenos erros, dizendo “eu não consigo” logo no início e com frequência</td><td>Módulo 5.1 · Módulo 3.5</td></tr>
   <tr><td><strong>Preocupação com a forma de ensinar do próprio tutor</strong></td><td>Não se restringe ao comportamento de um aluno específico — trata-se da dinâmica da aula em si</td><td>Converse diretamente com seu Team Leader e seu Mentor Regional; Módulo 3 como revisão</td></tr>
   </table></div></div>
  `},
  {t:'💔 Um reembolso é uma criança que para de aprender', html:`
   <div class="card"><p>Por trás de cada pedido de reembolso existe uma criança que estava construindo algo e parou. Uma turma que diminui. Uma família que confiou em nosso trabalho e decidiu que não valia a pena continuar.</p>
   <p>É disso que trata este treinamento. Não se trata de um número em um dashboard — de uma criança específica, em uma das suas turmas, que está se afastando agora mesmo e não sabe como dizer isso.</p></div>
   <img src="Images/Image_1.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
  `},
  {t:'📉 Reembolsos quase nunca acontecem de repente', html:`
   <div class="card"><p>Essa é a coisa mais útil de saber sobre eles. Quando uma família pede o dinheiro de volta, o problema geralmente já vem se desenrolando há semanas — e a maior parte dela se passou <strong>na frente do tutor.</strong></p></div>
   ${stepFlow([
     {ic:'📋', label:'As atividades em aula deixam de ser concluídas'},
     {ic:'🏠', label:'As lições de casa deixam de ser entregues'},
     {ic:'📵', label:'As faltas começam a se tornar frequentes'},
     {ic:'☎️', label:'O responsável entra em contato com a equipe'}
   ])}
   <div class="card"><p>Nas aulas que antecedem um pedido de reembolso, o padrão se repete:</p></div>
   ${bigStat('39%→56%', `<p><strong>As aulas perdidas</strong> aumentam bruscamente na reta final antes de um pedido de reembolso.</p>`)}
   ${bigStat('35%→15%', `<p><strong>A entrega das lições de casa</strong> cai na mesma proporção no mesmo período.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted);margin-top:-4px;margin-bottom:14px">Com base em padrões históricos de várias turmas; os números exatos podem variar por região.</p>
   ${co('co-danger','🚨',`<p><strong>Esta é a parte que mais importa para você.</strong></p><p>Uma criança que está saindo do curso pode parecer completamente normal na aula que você está dando. A falha não está necessariamente na atenção da criança durante a aula — está em <strong>comparecer e realizar as atividades.</strong> Então “na aula ela parece bem” não é prova de que está tudo bem.</p>`)}
  `},
  {t:'🦸 Por que você é a pessoa mais importante nisso', html:`
   ${co('co-idea','💡',`<p><strong>Você é a única pessoa que vê essa criança, nessa turma, toda semana.</strong> Ninguém do Atendimento ao Cliente, de Operações Pedagógicas ou da equipe de Aula Experimental consegue ver uma criança ficando quieta ou deixando de tentar. <strong>Mas você tem essa capacidade.</strong> Todo este treinamento se resume a duas coisas: <strong>à sua capacidade de observação e à sua agilidade em agir.</strong></p>`)}
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Totalmente sob seu controle</th><th>🔁 Sua responsabilidade adaptar — e reportar</th><th>🚫 Fora do nosso controle</th></tr>
   <tr><td>A criança se sente motivada e apoiada em todas as aulas</td><td><strong>Nível difícil ou fácil demais.</strong> Adapte a atividade agora. Reporte para revisão.</td><td>Saúde</td></tr>
   <tr><td>Toda criança recebe a devida atenção e respostas claras</td><td><strong>Uma necessidade especial que não foi informada a você previamente.</strong> Adapte sua abordagem. Reporte.</td><td>Circunstâncias familiares</td></tr>
   <tr><td>Você percebe os primeiros sinais de afastamento — e age</td><td><strong>Turma cheia e agitada.</strong> Lidar com isso é uma habilidade que se adquire — ajuste sua abordagem. Reporte se a diferença continuar grande demais.</td><td>A situação financeira da família</td></tr>
   <tr><td>A família sente que uma pessoa de verdade acompanha o progresso</td><td><strong>Uma troca de tutor/turma/horário foi mal recebida.</strong> Seja transparente, alinhe rápido.</td><td></td></tr>
   <tr><td>Uma criança que perdeu aulas realmente recupera o conteúdo</td><td><strong>Informaram algo diferente à família na matrícula.</strong> Esclareça com honestidade. Reporte.</td><td></td></tr>
   </table></div></div>
   ${co('co-danger','🚨',`<p><strong>Nada disso é culpa sua — mas o trabalho prático continua sendo sua responsabilidade.</strong> Adaptar a atividade, mudar a forma de conduzir a turma, proteger uma criança durante uma mudança. E, tão importante quanto isso: <strong>avise a equipe.</strong> Informe seu Team Leader, envolva o Atendimento ao Cliente, deixe o comentário no BO. Se você não fizer isso, o problema fica em silêncio — e algumas semanas depois perdemos a criança.</p>`)}
  `},
  {t:'💬 Conversando com as famílias: o que você faz e quando passa adiante', html:`
   <img src="Images/Image_2.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Os responsáveis vão querer conversar com você sobre o aprendizado dos filhos — <strong>isso faz parte do seu trabalho</strong>, e é importante ser acolhedor e estar disponível.</p>
   <p>O que você <strong>não</strong> deve executar diretamente é a <em>ação operacional</em>: mudar uma criança de turma, alterar um horário, um nível ou um pacote, ou aprovar uma aula extra. Essa é uma atribuição do Atendimento ao Cliente — e eles só conseguem agir se você avisar.</p></div>
   ${co('co-idea','💡',`<p><strong>A regra: fale sobre o aprendizado. Repasse as demandas operacionais.</strong> Você é a ponte entre a aula e as pessoas que podem mudar a situação da criança — e uma ponte só é útil se as informações transitarem rapidamente por <strong>ela.</strong></p>`)}
  `},
  {t:'🔀 A ordem importa: primeiro o Team Leader, depois a família', html:`
   <div class="card"><p>Existe uma sequência a seguir, e pular etapas é exatamente o motivo pelo qual mensagens bem-intencionadas acabam criando problemas.</p></div>
   ${co('co-danger','🚨',`<p><strong>Sempre que a situação envolver algo além do seu próprio ensino</strong> — nível, turma, horário, uma necessidade especial, uma promessa não cumprida, uma aula perdida — <strong>não escreva para a família primeiro.</strong></p>`)}
   ${stepFlow([
     {ic:'👩‍💼', label:'1. Alinhe com seu Team Leader — explique o que você viu, envolva o Atendimento ao Cliente, deixe um comentário no BO'},
     {ic:'🧭', label:'2. Combinem a estratégia — quais opções realmente estão disponíveis para essa criança e quais não estão'},
     {ic:'👪', label:'3. Depois, a família — exatamente o que seu Team Leader combinou, nada além disso'}
   ])}
   <div class="card"><p>Assim você nunca precisa adivinhar, nunca faz promessas indevidas e não precisa voltar atrás no que disse.</p></div>
   ${co('co-danger','🚨',`<p><strong>Explicar soluções e opções não cabe a você, nem depois do alinhamento.</strong> Seu Team Leader vai dizer uma de duas coisas:</p>
   <ul><li><em>“Diga X para a família”</em> → diga exatamente isso, nada além</li>
   <li><em>“Daqui em diante, nós assumimos”</em> → <strong>sua atuação se encerra nessa etapa.</strong> Duas pessoas passando versões diferentes para uma família quebram a confiança.</li></ul>`)}
  `},
  {t:'📌 O que você sempre pode dizer e quando é necessário aguardar orientações', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Sempre seu — escreva à vontade, com acolhimento e agilidade</th><th>⏸️ Sempre espera pelo seu Team Leader</th></tr>
   <tr><td>Como está o desempenho da criança, o que fez bem, o que está achando difícil</td><td>Qualquer assunto sobre <strong>níveis, cursos, turmas, horários, formatos ou pacotes</strong></td></tr>
   <tr><td>Que <strong>apoio você</strong> está dando na aula e o que você adaptou</td><td>Qualquer <strong>opção, solução ou próximo passo</strong> para a família escolher</td></tr>
   <tr><td>Que você percebeu as dificuldades dela e se importa com como ela está se sentindo</td><td>Qualquer <strong>explicação de como algo deu errado</strong>, ou por quê</td></tr>
   <tr><td>Perguntar o que ajuda essa criança a aprender melhor</td><td>Qualquer questão relacionada ao <strong>financeiro</strong></td></tr>
   <tr><td>Uma aula perdida e o que precisa ser recuperado</td><td>Qualquer confirmação de que algo <strong>vai</strong> ou <strong>não vai</strong> acontecer</td></tr>
   <tr><td>Que você levou o caso para a sua equipe, em termos gerais, sem detalhes</td><td>Qualquer detalhe sobre <strong>o que você reportou internamente</strong></td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p><strong>Resumindo a diferença: você fala sobre a criança. Seu Team Leader e o Atendimento ao Cliente falam sobre as condições combinadas.</strong></p>`)}
   ${co('co-danger','⛔',`<p><strong>Nunca prometa e nunca recuse.</strong></p><p>Nem <em>“vamos mudá-lo de turma”.</em> Nem <em>“isso não é possível”.</em> Ambas são decisões que fogem da sua alçada.</p>
   <p><strong>Mas também não seja frio nem evasivo.</strong> O que você sempre deve mostrar, desde o primeiro contato, é que realmente deseja que essa criança se sinta acolhida e tenha a melhor experiência de aprendizagem possível — e que você já está trabalhando nisso. <em>“Eu vi isso, me importo com isso, estou verificando as possibilidades e retornarei o contato.”</em> Isso não é uma promessa. É o que mantém a família conosco enquanto a resposta está sendo encontrada.</p>`)}
   <div class="card"><p><strong>Você sempre pode escrever diretamente, sem consultar antes,</strong> sobre o dia a dia das aulas: como foi a aula, algo que a criança fez bem, uma aula perdida e o que precisa ser reposto, uma pergunta sobre como ela está em casa. Seja ágil e acolhedor em tudo isso — é o seu trabalho, e é o que torna possíveis as conversas mais difíceis depois.</p></div>
  `}
 ],
 ix:{
  title:'O que é minha responsabilidade, o que devo adaptar e reportar, e o que foge do meu controle',
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
 title:'Aprendendo a identificar os sinais precocemente',
 desc:'O que observar durante a aula e entre uma aula e outra, e o momento exato de agir.',
 obj:'Saber exatamente o que observar durante a aula e entre uma aula e outra, diferenciar uma criança que está enfrentando uma semana difícil de uma criança que está desistindo do curso, e saber em que momento você precisa agir.',
 sections:[
  {t:'', html:`<div class="card"><p>Este é o módulo mais importante do treinamento. Todo o restante depende de você notar os sinais a tempo.</p></div>`},
  {t:'👁️ 1.1 · O que observar durante a aula', html:`
   <div class="card"><p>Estes são sinais que ninguém mais na empresa consegue ver. Você não precisa de um relatório para identificá-los — você precisa apenas estar atento.</p></div>
   <img src="Images/Image_4.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   ${iconGrid([
     {ic:'📷', html:`<strong>A câmera é desligada</strong> e continua desligada, quando antes ficava ligada. É o sinal precoce de afastamento mais comum — os alunos que acabam cancelando ficam com a câmera ligada cerca de <strong>metade</strong> do tempo dos colegas de turma.`},
     {ic:'🎤', html:`<strong>O microfone deixa de ser utilizado</strong> completamente — mais ou menos <strong>um terço</strong> do tempo de microfone dos colegas. Uma criança que parou de falar geralmente deixou de se sentir parte da turma.`},
     {ic:'💬', html:`<strong>Respostas de uma palavra só</strong>, quando antes formava frases. Se for uma mudança, não é timidez — mudança é sinal.`},
     {ic:'🖥️', html:`<strong>Para de compartilhar a tela</strong> durante o trabalho individual. Muitas vezes, isso significa “não quero que veja que estou com dificuldades” ou “ainda nem comecei”.`},
     {ic:'📝', html:`<strong>Começa a atividade em aula, mas nunca termina</strong> — a forma mais clara, durante a aula, de não acompanhar o ritmo.`},
     {ic:'✋', html:`<strong>Levanta a mão e não é atendida</strong> — e para de levantar. <strong>Essa é responsabilidade nossa.</strong>`},
     {ic:'⏰', html:`<strong>Chega atrasado, sai mais cedo ou desconecta-se frequentemente da chamada.</strong> A atenção está ali; o compromisso, não.`},
     {ic:'😞', html:`<strong>Fica calada ou frustra-se rapidamente</strong> depois de um erro, principalmente se for um comportamento novo.`},
     {ic:'⚡', html:`<strong>Termina na metade do tempo e depois distrai os colegas.</strong> Também é um problema de nível — o tédio manifesta-se da mesma forma que o desinteresse.`},
     {ic:'🔁', html:`<strong>Faz a mesma pergunta básica repetidas vezes.</strong> O nível provavelmente está errado — veja o Módulo 5.`}
   ])}
   ${co('co-idea','💡',`<p><strong>O segredo é comparar, não julgar.</strong> Nenhum desses sinais significa algo isoladamente. Todos passam a significar algo no momento em que divergem <strong>do comportamento habitual da criança</strong>, ou <strong>diferentes do resto da turma na mesma aula.</strong></p>`)}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">O aluno que nunca é atendido</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/12AOW3X9Vgm_cVzeOdjX5HN7Z2j-JV-lK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Neste vídeo, você verá um aluno tentando se comunicar com o tutor pelo chat, mas o tutor parece não perceber.</div></div>
  `},
  {t:'📅 1.2 · O que observar entre uma aula e outra', html:`
   <div class="card"><p>Entre as aulas, você tem algo que a aula ao vivo não oferece: o registro que comprova se a criança está realmente fazendo as atividades. São duas coisas diferentes, e <strong>as duas importam.</strong></p></div>
   ${iconGrid([
     {ic:'🏫', html:`<strong>Atividade em aula (Em aula)</strong> — o que a criança conclui durante a própria aula. Mostra se ela consegue acompanhar <strong>enquanto você está presente</strong>. Quando esse índice cai, o problema é a dificuldade ou o engajamento durante a aula.`},
     {ic:'🏠', html:`<strong>Lição de casa (Em casa)</strong> — o que a criança conclui sozinha. Mostra se o curso ainda importa <strong>quando você não está por perto</strong>, e se a família está apoiando. É o sinal mais crítico e revelador.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Observe os dois. Aja diante de qualquer um.</strong></p><p>Uma criança pode ir bem nas atividades em aula e ter zero entregas nas lições de casa — isso é um problema de motivação e de apoio familiar. Uma criança pode fazer a lição de casa, mas ir mal nas atividades em aula — isso geralmente é um problema de dificuldade ou de distração durante a aula. Qualquer um dos dois, sozinho, já justifica uma intervenção. <strong>Não espere os dois piorarem.</strong></p>`)}
   ${bigStat('47%',`Das famílias que acabam pedindo reembolso, as crianças <strong>frequentam menos da metade</strong> das aulas. A presença não é uma formalidade — é o sinal mais evidente de que o curso ainda é relevante para a família.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Com base em padrões históricos de várias turmas; o número exato pode variar por região.</p>
  `},
  {t:'🔎 1.3 · O erro que quase todo mundo comete', html:`
   <div class="card"><p>A maioria dos tutores busca um declínio <strong>evidente</strong> — um momento em que o desempenho piorou. Essa abordagem faz com que a maioria dos casos passe despercebida.</p></div>
   ${co('co-danger','🚨',`<p><strong>Não procure apenas um declínio. Atente-se à total ausência de entregas.</strong></p>`)}
   ${bigStat('58.6%',`Dos casos de reembolso apresentavam lição de casa <strong>estável, não em queda</strong> — a criança já tinha parado, ou nunca tinha começado de verdade. Não havia nenhuma queda para perceber.`)}
   ${bigStat('56.9%',`Dos casos apresentavam atividades em aula <strong>em queda</strong> — por isso esse costuma ser o sinal visível que aparece primeiro.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Com base em padrões históricos de várias turmas; os números exatos podem variar por região.</p>
  `},
  {t:'💔 1.4 · Por que não fazer a lição de casa pode prever pedidos de reembolso', html:`
   <img src="Images/Image_6.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Vale a pena deixar isso claro, porque muda a urgência com que você trata o assunto.</p>
   <p>Uma criança que não faz as atividades não acompanha o ritmo. Uma criança que ficou para trás se sente perdida na aula. Uma criança que se sente perdida na aula perde a vontade de participar. A família vê uma criança que não quer participar da aula e conclui: <em>“ele não está interessado”</em> ou <em>“esse curso não é para ele”.</em></p></div>
   ${co('co-idea','💡',`<p>Quando um responsável usa essas palavras, está descrevendo um ciclo que começou com <strong>três projetos não entregues.</strong> As atividades não feitas não são apenas um sintoma de uma criança que já decidiu desistir — são parte do que a leva a decidir.</p>`)}
   ${co('co-idea','📌',`<p><strong>Então: uma sequência de atividades em aula ou lições de casa não feitas já é, por si só, motivo para agir.</strong> Não é apenas algo para monitorar. Não é uma questão para relatar apenas se houver piora. <strong>Aja.</strong></p>`)}
  `},
  {t:'🧩 1.5 · Os três padrões', html:`
   <div class="card"><p>Quando você olha para as últimas aulas de uma criança, identificará um de três padrões. Cada um significa algo diferente, e cada um pede uma resposta diferente.</p></div>
   ${patternCards([
     {ic:'🐌', title:'O declínio lento', desc:'Presença e atividades vão caindo aos poucos ao longo de várias aulas; entregas cada vez mais escassas; câmera desligada', note:'Afastamento clássico. <strong>Este é o cenário que pode ser revertido</strong> — quanto mais cedo você agir, maior a chance. → Módulos 3 e 4'},
     {ic:'🧱', title:'A parada repentina', desc:'Desempenho regular, seguido por ausência repentina', note:'Algo aconteceu. Um conflito de horário, um incidente, algo em casa. <strong>Pergunte. Não tire conclusões precipitadas.</strong> → Módulo 4'},
     {ic:'✅', title:'Engajado e mesmo assim saindo', desc:'Presente, participando, atividades feitas — e mesmo assim a família pede para sair', note:'<strong>A causa não é engajamento, e não é você.</strong> Mais motivação não vai resolver. <strong>Descubra o motivo real e encaminhe o caso rapidamente.</strong> → Módulos 5 e 6'}
   ])}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">O aluno que nunca apareceu</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RfFI5FTMg3DBHEiJtoG9DpJyjVoHFv74/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Um dos casos mais críticos, que precisa ser reportado na hora: um aluno que não aparece desde a primeira aula.</div></div>
  `},
  {t:'🚦 1.6 · Quando você precisa agir', html:`
   <div class="card"><p>Você não precisa ter certeza. Você precisa de um parâmetro de limite, para que “eu não tinha certeza” deixe de ser uma justificativa para a inação.</p><p><strong>Aja nesta semana se qualquer uma destas situações for verdadeira:</strong></p></div>
   ${iconGrid([
     {ic:'📉', html:`A criança frequenta <strong>menos da metade</strong> das aulas`},
     {ic:'📊', html:`As atividades em aula ou as lições de casa estão <strong>bem abaixo da média da turma</strong> — como regra prática, 15 pontos ou mais`},
     {ic:'🤔', html:`A presença está inconsistente — a criança não abandonou o curso, mas a frequência é irregular — <strong>e</strong> uma das situações acima também é verdadeira`},
     {ic:'0️⃣', html:`<strong>Duas ou mais aulas seguidas</strong> sem nada entregue`}
   ])}
   ${co('co-danger','🚨',`<p><strong>E aja imediatamente, independentemente de qualquer número, se:</strong> a criança parou de falar ou de aparecer na câmera quando antes fazia isso · ela tentou participar e você não conseguiu atendê-la · ela contou que algo está errado · você tem a intuição de que algo está errado. <strong>Seu julgamento conta como sinal.</strong></p>`)}
  `}
 ],
 ix:{
  title:'Declínio lento, parada repentina ou engajado, mas ainda assim desistindo?',
  instr:'Para cada histórico de progresso anônimo, identifique o padrão correspondente — em seguida, defina o próximo passo adequado. 70% para liberar o Módulo 2.',
  items:[
   {type:'choice', prompt:'A presença e as atividades em aula de uma criança vêm caindo silenciosamente nas últimas cinco aulas, um pouco mais a cada vez, e a câmera ficou desligada nas duas últimas.', opts:['O declínio lento','A parada repentina','Engajado e mesmo assim saindo'], correct:0, fb:'Este é o declínio lento — o afastamento clássico, e o que você tem mais chance de reverter quanto antes agir.'},
   {type:'choice', prompt:'Na última aula, a criança estava completamente normal — presença total, câmera ligada, lição de casa feita — e nesta semana simplesmente não apareceu, sem nenhuma mensagem.', opts:['O declínio lento','A parada repentina','Engajado e mesmo assim saindo'], correct:1, fb:'Esta é a parada repentina. Algo aconteceu — pergunte, não presuma.'},
   {type:'choice', prompt:'A criança frequentou todas as aulas, participa e entrega todas as atividades — e a família acabou de pedir o cancelamento mesmo assim.', opts:['O declínio lento','A parada repentina','Engajado e mesmo assim saindo'], correct:2, fb:'Engajado e mesmo assim saindo. A causa não é engajamento — é algo como nível, expectativas, horário ou circunstâncias. Mais motivação não vai resolver; descubra o motivo real e encaminhe.'},
   {type:'choice', prompt:'No caso do “declínio lento”, qual é o primeiro passo certo?', opts:['Esperar mais algumas aulas para ter certeza de que é um padrão real','Agir agora — este é o que tem mais chance de ser revertido quanto antes você agir','Supor que é temporário e verificar de novo no mês que vem'], correct:1, fb:'Declínios lentos são exatamente o que uma ação precoce consegue reverter. Esperar é desperdiçar a vantagem que você tem.'},
   {type:'choice', prompt:'No caso da “parada repentina”, qual é o primeiro passo certo?', opts:['Supor que não é nada e esperar que a criança volte sozinha','Perguntar — descobrir o que realmente aconteceu, em vez de adivinhar','Avisar imediatamente a família que a criança está ficando para trás'], correct:1, fb:'Uma parada repentina tem uma causa específica. Descubra qual é antes de decidir o que fazer.'},
   {type:'choice', prompt:'No caso de “engajado, mas ainda assim desistindo”, qual é o primeiro passo certo?', opts:['Dar mais elogios e incentivo à criança para tentar mantê-la motivada','Descobrir qual é o motivo real — nível, expectativas, horário, circunstâncias — e encaminhar rápido','Concluir que não há nada a fazer, já que a criança estava indo bem'], correct:1, fb:'Mais motivação não resolve uma causa que nunca teve a ver com motivação. Descubra o que é de fato e leve rápido à pessoa certa.'}
  ]
 }
},
{id:'m2', numLabel:'Módulo 2', emoji:'🖥️', color:'var(--blue)',
 title:'Lendo a tela de Progresso',
 desc:'Descubra, em menos de dois minutos, se um aluno da sua turma está se desengajando — na prática, em uma simulação do BO.',
 obj:'Descobrir, em menos de dois minutos, se um aluno da sua turma está se desengajando — e verificar os dois pontos cruciais que você sempre precisa saber antes da primeira aula com um aluno novo.',
 sections:[
  {t:'👤 2.1 · Antes da primeira aula com um aluno novo — sempre', html:`
   <div class="card"><p>Um dos passos mais importantes antes de iniciar uma nova turma — e que pode evitar muitos problemas depois — é revisar o perfil do aluno e os comentários do Atendimento ao Cliente.</p></div>
   ${iconGrid([
     {ic:'🎂', html:`<strong>Idade compatível.</strong> Se a idade da criança está adequada ao curso em que ela foi matriculada.`},
     {ic:'🎯', html:`<strong>Interesses.</strong> Quais são as preferências da criança — útil para exemplos e para estabelecer conexão desde a primeira aula.`},
     {ic:'📝', html:`<strong>Observações dos responsáveis ou de tutores anteriores.</strong> Principalmente se a criança foi transferida de outra turma.`}
   ])}
   ${co('co-idea','💡',`<p>Essas informações ajudam a entender como estabelecer conexão com cada aluno e a identificar possíveis problemas ou solicitar ajustes <strong>antes mesmo do início das aulas.</strong></p>`)}
   <div class="card"><p>Na simulação a seguir, você aprenderá a analisar essas informações no BO e a usá-las para se preparar para a sua nova turma.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Perfil do aluno</span><iframe src="Simulacion_BO_M2_Profile_PT.html" title="BO — Perfil do aluno" loading="lazy"></iframe></div></div>
  `},
  {t:'📊 2.2 · A tela de Progresso — sua checagem semanal de 60 segundos', html:`
   <div class="card"><p>Abaixo, apresentamos a representação exata da tela de Progresso. Siga os passos da simulação para aprender onde localizar as atividades em aula e as lições de casa, o que cada cor significa e como interpretar o padrão.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Progresso</span><iframe src="Simulacion_BO_M2_Progress_PT.html" title="BO — Progresso" loading="lazy"></iframe></div></div>
   ${co('co-danger','🚨',`<p>Observe o que a tela deste aluno indica: notas altas e verdes em <strong>Em aula</strong> — mas todas as células de <strong>Em casa</strong> estão laranja, “não entregue”. <strong>Mesmo aluno, mesmas aulas, cenários opostos.</strong> Ele vai bem sob a sua supervisão; mas o curso perde a relevância quando o aluno está sozinho.</p>`)}
   <div class="card"><h4>Como analisar em menos de um minuto</h4>
   <ol><li><strong>Procure sequências de zeros.</strong> <strong>Dois seguidos já são suficientes para justificar uma intervenção.</strong> Uma sequência é o indicador mais forte desta tela — muito mais informativo do que qualquer célula isolada.</li>
   <li><strong>Compare as duas abas da mesma criança.</strong> Em aula alto, Em casa vazio → a criança acompanha o conteúdo durante a aula, mas em casa o curso perdeu a relevância. Em aula baixo, Em casa razoável → algo na dinâmica da aula não está sendo eficaz: dificuldade, ritmo ou atenção.</li>
   <li><strong>Compare a criança com o resto da turma.</strong> Os mesmos números possuem interpretações diferentes dependendo se toda a turma está em 30/50 ou só essa criança.</li>
   <li><strong>Identifique onde a sequência se inicia.</strong> Em qual aula ela começou? Analise o que ocorreu naquele momento — geralmente é lá que está a resposta.</li>
   <li><strong>Verifique a frequência simultaneamente.</strong> O que você vê aqui é a presença registrada no Back Office, não a presença real durante a aula — interprete como “o aluno compareceu?”, e não como “qual era o seu nível de engajamento?”.</li></ol></div>
   ${co('co-danger','🚨',`<p><strong>Faça isso uma vez por semana, para a turma inteira, e não só para a criança que já apresenta sinais de alerta.</strong> O objetivo da checagem é identificar o aluno cujos sinais <em>ainda passaram</em> despercebidos.</p>`)}
   ${co('co-idea','🧭',`<p><strong>Você ministra um curso no qual a lição de casa ou a atividade em aula acontece fora da plataforma?</strong> A tela de Progresso não exibirá dados relevantes — mas o que falta é o registro, não a informação. Faça isso de forma intencional, e não automática: peça para as crianças mostrarem o trabalho compartilhando a tela, faça verificações frequentes durante o trabalho individual, atribua a lição de casa de forma explícita e em voz alta, e retome o assunto dirigindo-se a cada aluno nominalmente na aula seguinte. Mesmos sinais, mesmos limites — porém, você precisará monitorá-los ativamente.</p>`)}
  `}
 ],
 ix:{
  title:'Analisando a checagem — verificação rápida',
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
 obj:'Usar a própria aula como intervenção — porque uma aula virtual, opcional e no contraturno é uma aula à qual a criança só volta se considerar a experiência valiosa.',
 sections:[
  {t:'🔌 3.1 · Por que o engajamento pesa mais aqui', html:`
   <div class="card"><p>Nossos alunos não são obrigados a estar aqui como ocorre na escola. Estão em casa, com todas as distrações a um clique de distância, e sem a presença física que mantém a atenção em uma sala de aula tradicional. <strong>A conexão que você constrói em cada aula não é apenas um diferencial — é o motivo pelo qual a criança decide voltar na semana seguinte.</strong></p>
   <p>E quando uma criança começa a se desengajar, a aula é a sua ferramenta de intervenção mais imediata. Você não precisa esperar a permissão de ninguém para mudar a forma como conduz a aula.</p></div>
  `},
  {t:'👋 3.2 · Os primeiros minutos são decisivos', html:`
   <div class="card"><p>O início da aula dita o ritmo das atividades subsequentes. Uma criança que entra e sente acolhimento no cumprimento está num estado de espírito bem diferente de um aluno que é direcionado abruptamente para o “abram a atividade”.</p></div>
   ${doavoid(
     ['Cumprimente com entusiasmo genuíno: <em>“que bom ver você hoje”</em>','Faça uma pergunta rápida e pessoal antes do conteúdo','Apresente o objetivo do dia com clareza e convicção','Comente em voz alta quem estava ausente: <em>“que bom que você voltou”</em>'],
     ['Ir direto para o conteúdo sem cumprimentar','Parecer apressado ou estressado no começo','Não explicar o que vai fazer, nem por quê','Deixar uma criança que está voltando passar despercebida']
   )}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Um começo sem energia</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1GyQV2tEQq3OuDPfFI0NZTQRjWhg_9Rri/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Um começo acolhedor</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RqXcQLKBiWEhV97ZasJGIFuJhB8yU0Dh/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'💬 3.3 · Feedback que motiva em vez de apenas corrigir', html:`
   <div class="card"><p>Um elogio genérico repetido — <em>“bom”, “legal”</em> — perde a eficácia rapidamente e, inadvertidamente, transmite a mensagem oposta: a de que você não está prestando atenção real ao trabalho do aluno.</p></div>
   ${co('co-idea','🔁',`<p><strong>Destacar → Perguntar → Ativar</strong></p>
   <ol><li><strong>Destaque</strong> algo específico que a criança <em>decidiu</em> fazer, e diga por que funciona.</li>
   <li><strong>Pergunte</strong> sobre isso com curiosidade genuína, tratando a criança como a protagonista de sua própria criação.</li>
   <li><strong>Ative</strong> oferecendo uma escolha de verdade sobre o que vem a seguir.</li></ol>
   <p>Em vez de <em>“Muito bem!”</em> → <em>“Adorei que você fez o personagem pular bem ali — você planejou isso desde o começo ou a ideia veio enquanto montava a cena? Quer dar uma história para esse personagem ou acha que ele já está pronto assim?”</em></p>`)}
  `},
  {t:'✋ 3.4 · Garantindo que todos os alunos tenham oportunidades reais de participação', html:`
   <div class="card"><p>Os alunos retornam porque encontram um ambiente onde se sentem valorizados e pertencentes. A maneira mais rápida de desengajá-los é ignorar suas tentativas de participação.</p></div>
   ${co('co-danger','🚨',`<p><strong>“Distribuir a atenção” não é suficiente.</strong> Todo tutor supõe que já realiza isso. <strong>Torne essa prática mensurável.</strong></p>
   <ul><li>Deixe a lista de participantes à vista e <strong>marque cada nome quando a criança tiver uma vez de verdade</strong> — não um olhar, uma troca real.</li>
   <li><strong>Na metade da aula, veja quem ainda não tem marcação.</strong> Vá até essas crianças em seguida.</li>
   <li>Use o chat e as reações como um canal de comunicação efetivo, e não como um recurso secundário: <em>“escrevam a ideia de vocês no chat que eu leio todas em voz alta”.</em></li>
   <li><strong>Quem terminar a aula com uma pergunta sem resposta recebe uma resposta por escrito em até 24 horas.</strong></li>
   <li>Se a turma for simplesmente grande demais para isso ser viável, <strong>avise seu Team Leader.</strong> É um sinal para encaminhar, não uma falha pessoal.</li></ul>`)}
   ${doavoid(
     ['Nomeie conquistas específicas: <em>“Sofia, sua lógica ficou muito clara aí”</em>','Use o chat e as reações para que até os mais quietos participem','Valorize o esforço: <em>“você tentou três caminhos diferentes — isso é pensar como programador”</em>','Passe por cada criança da turma durante o trabalho individual'],
     ['Elogios genéricos dirigidos à turma inteira por igual','Dar atenção só a quem termina primeiro','Tratar os erros como algo ruim, ou dar as respostas antes que eles pensem','O mesmo ritmo para todos, entediando alguns e apressando outros']
   )}
  `},
  {t:'🧩 3.5 · A mesma abordagem não funciona para todos os alunos', html:`
   <div class="card"><p>Dois alunos com dificuldades no mesmo exercício podem demandar intervenções completamente opostas da sua parte. Reconhecer alguns padrões, e dispor de estratégias específicas para cada perfil, é o que transforma uma aula genérica em uma aula da qual o aluno realmente deseja participar.</p></div>
   ${patternCards([
     {ic:'🙈', title:'Tímido', desc:'Câmera ligada, mas quase não fala; respostas curtas; nunca se voluntaria; retrai-se quando é chamado de surpresa', note:'Primeiro, formas de participar com baixa pressão — chat, reações, um aceno positivo. Convide <strong>diretamente e em particular</strong>.'},
     {ic:'😣', title:'Frustra-se facilmente', desc:'O “eu não consigo” chega rápido; desiste no primeiro erro; demonstra irritação visível com falhas menores', note:'Passos menores. Normalize os erros em voz alta. Pergunte como está indo <strong>antes</strong> de a frustração crescer.'},
     {ic:'🎯', title:'Perfeccionista', desc:'Refaz a mesma coisa várias vezes; resiste a entregar algo “inacabado”', note:'Elogie a decisão e a tentativa. Dê permissão explícita para entregar um rascunho imperfeito.'},
     {ic:'⚡', title:'Entedia-se rapidamente', desc:'Termina rápido; distrai os colegas após concluir as tarefas; “é só isso?”', note:'Um desafio extra de verdade, sempre pronto. Considere atribuir-lhe o papel de monitor. <strong>Evite deixá-lo ocioso.</strong>'}
   ],2)}
  `},
  {t:'🎂 3.6 · Os fatores motivacionais variam conforme a faixa etária', html:`
   <div class="two-col">
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧒</span>Crianças menores (aproximadamente 6–9 anos)</h4>
   <ul><li>A motivação vem da conexão e da brincadeira, não de objetivos de longo prazo.</li>
   <li>O tempo de atenção é curto. Sua energia retém a atenção mais do que o conteúdo.</li>
   <li>Narrativas lúdicas são eficazes — uma missão, um personagem, uma história.</li>
   <li>Os interesses específicos delas são um caminho direto para a atenção.</li>
   <li>Os erros geram maior impacto emocional. O acolhimento precisa ser imediato.</li>
   <li>Precisam de mais repetição e demonstração prática antes de tentar sozinhas.</li></ul></div>
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧑</span>Crianças maiores (aproximadamente 10–14+ anos)</h4>
   <ul><li>A motivação desloca-se para a competência e a relevância — a compreensão do <em>propósito da</em> atividade.</li>
   <li>São refratárias a atitudes condescendentes. É fundamental tratá-las como indivíduos plenamente capazes.</li>
   <li>Feedback sobre o <strong>raciocínio e as decisões</strong> delas funciona melhor do que só elogiar o esforço.</li>
   <li>A dinâmica social exerce maior influência — os colegas influenciam se elas vão arriscar uma pergunta.</li>
   <li>Conseguem se concentrar por mais tempo, mas se desligam rápido se o ritmo for lento ou a abordagem parecer infantilizada.</li>
   <li>Autonomia importa — dar uma escolha sobre como resolver uma tarefa traz resultado.</li></ul></div>
   </div>
   ${co('co-idea','💡',`<p>As ferramentas são as mesmas em qualquer idade — um começo acolhedor, feedback específico, espaço para participar. O que muda é <strong>o que motiva</strong>: as menores precisam sentir que é divertido e que elas importam; as maiores precisam sentir que vale o tempo delas e que elas são realmente boas naquilo.</p>`)}
  `},
  {t:'🔧 3.7 · Quando a tecnologia falha', html:`
   <div class="card"><p>Imprevistos tecnológicos ocorrerão — uma tela congelada, um microfone que não conecta. O que determina o impacto na aula não é a falha em si, mas a reação do tutor.</p></div>
   ${co('co-cute','🫂',`<p><strong>O primeiro passo é emocional, não técnico.</strong> Reaja com calma e normalize a situação em voz alta. Um adulto calmo mostra à criança que não há nada com que se preocupar, e a turma segue o seu tom emocional. Só depois que tudo se acalmou é que faz sentido resolver o problema técnico.</p>`)}
  `}
 ],
 ix:{
  title:'Práticas inadequadas ou valiosas — hábitos em aula',
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
 desc:'A abordagem individual que realmente funciona, o acompanhamento das faltas e como manter a família informada.',
 obj:'Fazer, entre as aulas, o que impede que o desengajamento de um aluno resulte em um pedido de reembolso: a conversa individual, o acompanhamento das faltas e como manter a família informada.',
 sections:[
  {t:'🏠 4.1 · A rotina de lição de casa que realmente funciona', html:`
   <div class="card"><p>A entrega contínua das lições de casa não ocorre por acaso. Quatro pequenos hábitos, toda vez, são fundamentais para evitar que o índice de entrega caia silenciosamente a zero.</p></div>
   ${stepFlow([
     {ic:'🗣️', label:'1. Explique — o que é e por que é importante, de forma clara e explícita'},
     {ic:'⏰', label:'2. Lembre — um aviso antes do prazo'},
     {ic:'🔦', label:'3. Aponte — diga especificamente o que está faltando'},
     {ic:'📝', label:'4. Corrija — um comentário construtivo, não apenas uma nota'}
   ])}
   ${iconGrid([
     {ic:'🗣️', html:`<strong>Explique.</strong> Ao passar a lição, explique o conteúdo e a sua relevância para a próxima aula — e não apenas “façam os exercícios de 1 a 5”.`},
     {ic:'⏰', html:`<strong>Lembre.</strong> Um lembrete curto antes do prazo, principalmente para as crianças menores — uma mensagem ou um momento no final da aula anterior.`},
     {ic:'🔦', html:`<strong>Aponte.</strong> Se estiver faltando, diga isso de forma específica e pelo nome na aula seguinte — e não apenas um aviso genérico como “alguns de vocês não fizeram a lição”.`},
     {ic:'📝', html:`<strong>Corrija.</strong> Deixe <strong>um comentário construtivo que a família possa ler</strong> — o que ficou bom, o que precisa ser aprimorado, um próximo passo concreto. Um simples visto sem observações não agrega valor ao aprendizado.`}
   ])}
   ${co('co-idea','💡',`<p>Esta é a rotina, toda semana, para todas as crianças — e não só para as que já preocupam você. É também o que contextualiza a ausência de entrega: você saberá que a falha não ocorreu por falta de explicação, lembrete ou acompanhamento.</p>`)}
  `},
  {t:'☎️ 4.2 · A abordagem individual que realmente funciona', html:`
   <div class="card"><p>Quando você identificar um dos sinais do Módulo 1, este é o próximo passo. Quando bem conduzida, essa abordagem frequentemente resolve o problema por si só.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Mencione a questão específica que você observou.</strong> Uma preocupação genérica soa superficial. <em>“Notei que você teve dificuldades nos dois últimos projetos”</em> — e não <em>“está tudo bem?”</em>`},
     {ic:'🚧', html:`<strong>Investigue o obstáculo, e não a atitude.</strong> <em>“O que atrapalhou?”</em> — e não <em>“por que você não está se esforçando?”</em> A primeira abordagem convida ao diálogo; a segunda, coloca o aluno na defensiva.`},
     {ic:'🤫', html:`<strong>Nunca exponha o aluno perante a turma.</strong> Utilize uma mensagem privada, o chat individual ou reserve o último minuto da aula para conversarem a sós.`}
   ])}
   ${co('co-idea','💡',`<p>Posteriormente, <strong>retome o assunto após duas aulas</strong>, independentemente da situação. Uma conversa individual sem acompanhamento transmite ao aluno a sensação de que você notou o problema, mas não se importou genuinamente.</p>`)}
   <div class="card"><p>Uma das formas de recuperar um aluno desmotivado é a correção da lição de casa — e <strong>como</strong> fazemos isso. Nos dois vídeos abaixo, veja dois casos bem diferentes: um em que o tutor ignora que um aluno não fez a lição, e outro em que o tutor traz o aluno de volta, de forma dinâmica, fazendo com que ele se sinta parte da turma.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">O tutor que não motiva</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1zwbSiLXBj9mcqhKsFKNJriwSppbcEY5B/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">O tutor que motiva</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1m2m_RRNTf5zMh2-1NmExvEMGZX0DPIaK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'📵 4.3 · Quando uma criança falta a uma aula', html:`
   <div class="card"><p>Apenas enviar a gravação não constitui um plano de recuperação eficaz. <strong>Duas faltas no começo do curso podem comprometer a continuidade no curso</strong>, porque o aluno retorna a uma turma onde os colegas dominam um conteúdo que ele desconhece — e isso fica evidente para todos.</p></div>
   ${timeline([
     {ic:'📅', label:'No mesmo dia', items:[
       '<strong>Entre em contato com a família</strong>, priorizando o acolhimento: <em>“sentimos a falta dela hoje — está tudo bem?”</em> Empatia antes de qualquer outra coisa.',
       '<strong>Envie a gravação destacando apenas o trecho essencial.</strong> Em vez de instruir a “assistir à aula inteira”, indique exatamente o momento crucial do vídeo.'
     ]},
     {ic:'⏳', label:'Antes da próxima aula', items:[
       '<strong>Dedique cinco minutos individuais</strong> ou envie uma breve explicação por escrito sobre o conceito central necessário para o retorno — foque em um único conceito, não na aula inteira.'
     ]},
     {ic:'🏫', label:'Na próxima aula', items:[
       '<strong>Proporcione ao aluno uma vitória rápida e visível</strong>, para que ele retome as atividades sentindo-se capaz, e não defasado.',
       '<strong>Mostre que você percebeu a ausência dela</strong> — de forma breve e carinhosa. Demonstrar que a presença dele é valorizada é justamente o objetivo.'
     ]},
     {ic:'🚩', label:'Se faltou a duas ou mais aulas', items:[
       '<strong>Avise seu Team Leader e deixe um comentário no BO para que o Atendimento ao Cliente também veja.</strong> Esse é o limite para discutir internamente uma aula extra de reposição. Você apenas levanta a questão internamente — não ofereça a aula à família, tampouco a descarte de antemão.'
     ]}
   ])}
  `},
  {t:'💌 4.4 · Mantendo a família engajada e informada', html:`
   <img src="Images/Image_3.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>A maioria das famílias que cancelam o curso raramente recebeu feedbacks positivos. Tiveram contato conosco na matrícula e, depois disso, somente quando surgiu um problema.</p></div>
   ${checkbox([
     `<strong>Escreva algo específico depois de uma boa aula.</strong> Uma vez. Não precisa ser longo: <em>“hoje ela compreendeu a lógica do projeto sozinha — fiz questão de compartilhar isso com vocês.”</em> Esse simples hábito transforma a maneira como a família interpretará qualquer comunicação futura.`,
     `<strong>Quando uma criança volta depois de uma falta ou de uma dificuldade, conte a conquista dela para a família.</strong>`,
     `<strong>Se você encaminhou uma questão internamente, informe isso à família e dê</strong> uma estimativa de quando haverá um retorno. O silêncio depois de um problema causa mais danos do que o próprio problema.`,
     `<strong>Esteja disponível para perguntas sobre o aprendizado.</strong> Um responsável que deseja conversar sobre o desenvolvimento do filho deve encontrar em você uma postura receptiva.`
   ])}
   ${co('co-danger','⛔',`<p><strong>E ainda assim: fale sobre o aprendizado, passe a ação adiante.</strong> Evite fazer promessas sobre turmas, horários, níveis, pacotes, reembolsos ou aulas extras — essas concessões ou recusas fogem da sua alçada.</p>`)}
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
 desc:'Para cada uma dos oito motivos que realmente afastam as famílias: o que observar, o que fazer e a quem avisar.',
 obj:'Para cada uma dos oito motivos que realmente afastam as famílias, saber o que observar, o que fazer na aula, o que fazer fora dela e a quem avisar.',
 sections:[
  {t:'', html:`
   <h3 class="acc-big-title">🧩 As 8 situações mais comuns por trás de um reembolso</h3>
  `},
  {t:'', html:`${accItem('😣 5.1 · A atividade está difícil demais', `
   <img src="Images/Image_5.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Um aluno pode mostrar vários sinais de que está com dificuldade. Pode dizer “eu não consigo” logo de início e com frequência, desistir depois de errar ou começar a atividade em aula sem terminar. Também pode ficar mais quieto, parar de compartilhar a tela ou fazer as mesmas perguntas repetidas vezes. Às vezes, o aluno fica para trás depois de perder uma única aula e nunca consegue recuperar totalmente. Outro sinal de alerta é quando as atividades em aula continuam insatisfatórias mesmo que o aluno continue tentando fazer a lição de casa.`)}
   ${stepIconBlock('⚡','Adapte — na próxima aula, sem precisar de permissão', `<ul><li>Divida a atividade em pequenas conquistas (10 min)</li><li>Dê um objetivo mais simples e explícito, em voz alta</li><li>Normalize os erros; pergunte como está indo <strong>antes</strong> de a frustração crescer</li><li>Continua travado depois de 2 aulas? Agende uma sessão com seu <strong>Mentor Regional</strong> para obter novas estratégias didáticas</li></ul>`)}
   ${stepIconBlock('🗣️','Alinhe — TL + Avaliação de Tutores no BO, nesta semana', `<ul><li>Relate o que você está vendo e como a criança está se sentindo</li><li>Peça uma aula de avaliação/nivelamento se a diferença for real</li><li>Nunca levante a questão do nível com a família por conta própria</li></ul>`)}
   ${stepIconBlock('👪','Família', `<p>Apenas o que compete a você: <em>“apoio extra nas aulas, e já levei o assunto para a minha equipe.”</em> Nada sobre níveis. Retome o assunto em até 2 aulas.</p>`)}
   ${co('co-idea','🔴',`<p><strong>O pedido de reembolso já foi feito por esse motivo?</strong> Vá direto para o Módulo 7 — a estratégia de retenção começa na próxima aula com esse aluno.</p>`)}
  `)}
  ${accItem('😴 5.2 · A atividade está excessivamente fácil', `
   <img src="Images/Image_7.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Um aluno pode terminar a atividade na metade do tempo previsto e perguntar: “É só isso?”. Depois de terminar, pode se distrair ou distrair os outros, ou comentar que já sabe o conteúdo. Outro sinal importante é quando o aluno mostra muita capacidade, mas não faz a lição de casa de forma consistente. Nos números, o tédio pode parecer exatamente desinteresse, por isso é importante olhar além das aparências.`)}
   ${stepIconBlock('⚡','Adapte — imediatamente', `<ul><li>Um desafio adicional autêntico: a mesma habilidade, uma proposta mais difícil</li><li>O papel de monitor na turma</li><li>Dê opções; evite deixá-lo ocioso</li></ul>`)}
   ${stepIconBlock('🗣️','Alinhe — TL + Avaliação de Tutores no BO, nesta semana', `<p>Diga exatamente: <em>“precisa subir de nível, não é um problema de motivação.”</em> Peça uma aula de avaliação/nivelamento.</p>`)}
   ${stepIconBlock('👪','Família', `<p>Apenas: <em>“está aprendendo muito rápido, estou dando desafios extras, e já levei o assunto para a minha equipe.”</em> Retome o assunto em até 2 aulas.</p>${co('co-ok','✅',`<p>Essa situação geralmente é contornável — mas apenas se for reportada à equipe.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>O pedido de reembolso já foi feito por esse motivo?</strong> Vá direto para o Módulo 7 — a estratégia de retenção começa na próxima aula com esse aluno.</p>`)}
  `)}
  ${accItem('🧩 5.3 · Uma necessidade educacional especial', `
   <img src="Images/Image_8.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Recebemos alunos com autismo, TDAH, dislexia, necessidades sensoriais, ansiedade — e às vezes com altas habilidades, que também são uma necessidade educacional especial e aparecem de um jeito bem diferente do tédio comum. Isso pode estar no perfil, ter sido mencionado uma vez pela família ou nunca ter sido explicitado formalmente. As famílias muitas vezes dão primeiro outra explicação — <em>“ele perdeu o interesse”</em>, <em>“isso não é para ele”</em> — e o motivo real só aparece quando alguém aborda a questão da forma adequada.</p></div>
   ${noticeLine(`Uma observação no perfil (Módulo 2.1) · sobrecarga sensorial · concentração que se dispersa rapidamente · reações desproporcionais a pequenos erros · desconforto com mudanças · leitura/escrita lenta · alta capacidade cognitiva acompanhada de motivação instável.`)}
   ${stepIconBlock('⚡','Adapte — é aqui que está a maior parte do trabalho, e ele é todo seu', `<ul><li>Blocos mais curtos, estrutura previsível, <strong>avise antes de cada transição</strong></li><li>Instruções por escrito + faladas; câmera opcional</li><li>Adapte a própria atividade; priorize a manutenção da rotina acima de tudo</li><li>Seu <strong>Mentor Regional</strong> pode ajudar você a montar um plano para essa criança específica</li></ul>${co('co-danger','🚨',`<p>Primeiro, empenhe-se de fato nas adaptações. Mas se a defasagem continuar excessiva, acione a <strong>equipe imediatamente</strong> — isso não representa uma falha sua.</p>`)}`)}
   ${stepIconBlock('🗣️','Alinhe — TL imediatamente + Avaliação de Tutores no BO', `<p>Se aulas individuais ou um tutor com experiência em necessidades educacionais especiais puderem ajudar, <strong>recomende — não ofereça.</strong></p>`)}
   ${stepIconBlock('👪','Família — com cuidado', `<p>Confira primeiro o perfil (2.1); se não houver nada registrado, aborde o assunto com cautela. Registre o que descobrir nos Comentários do BO.</p>${co('co-danger','⛔',`<p>Nunca: <em>“ele não consegue acompanhar”</em> ou qualquer afirmação que pareça um diagnóstico. Retome o assunto a cada 2 aulas, e sempre depois de qualquer mudança.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>O pedido de reembolso já foi feito por esse motivo?</strong> Vá direto para o Módulo 7 — a estratégia de retenção começa na próxima aula com esse aluno.</p>`)}
  `)}
  ${accItem('📐 5.4 · Incompatibilidade do aluno com a idade ou o formato do curso', `
   <img src="Images/Image_9.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Um aluno pode ter dificuldade porque ainda não tem as habilidades de leitura que o material exige ou porque não consegue manter a concentração durante a aula inteira. Em alguns casos, o curso pode exigir habilidades bem acima da idade ou do nível atual dele. Outras barreiras podem ser a dificuldade da família em se adaptar ao formato de aprendizagem on-line ou uma barreira de idioma que não foi identificada antes. Esses sinais podem indicar que o problema não é engajamento, e sim um descompasso entre as necessidades do aluno e o ambiente de aprendizagem.`)}
   ${stepIconBlock('⚡','Adapte', `<p>Esgote as possibilidades — reduza, simplifique, demonstre mais, dê mais atenção individual. Conheça o limite: uma criança que ainda não sabe ler não pode aprender em um curso que depende muito de leitura.</p>`)}
   ${stepIconBlock('🗣️','Alinhe — TL + Avaliação de Tutores no BO', `<p>Diga exatamente: <em>“é uma questão de adequação, não de motivação.”</em> Encaminhe — essa decisão não é sua.</p>`)}
   ${stepIconBlock('👪','Família — só se o TL pedir', `<p>Podem existir várias opções, mas <strong>não é você quem as apresenta.</strong> Siga exatamente a mensagem que o seu TL passar, ou não interfira nessa etapa.</p>`)}
   ${co('co-idea','🔴',`<p><strong>O pedido de reembolso já foi feito por esse motivo?</strong> Vá direto para o Módulo 7 — a estratégia de retenção começa na próxima aula com esse aluno.</p>`)}
  `)}
  ${accItem('👥 5.5 · A turma está superlotada e o aluno não tem oportunidade de participar', `
   <img src="Images/Image_10.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${co('co-idea','🎯',`<p><strong>Esta é a única situação da lista que depende diretamente do comportamento do tutor — e, por isso, é a que pode ser solucionada mais rapidamente.</strong></p>`)}
   <div class="card"><p>Uma criança que levanta a mão, espera, não é chamada e fica com perguntas sem resposta concluirá que sua presença não é relevante para a turma. Duas aulas são suficientes para gerar esse sentimento de exclusão.</p></div>
   ${noticeLine(`Preste atenção aos alunos que param de levantar a mão, às perguntas no chat que ficam sem resposta ou aos mesmos dois ou três alunos respondendo sempre. Preste atenção também aos alunos que passam uma aula inteira sem nenhuma interação com você.`)}
   ${stepIconBlock('⚡','Adapte — Lidar com isso é uma habilidade que pode ser desenvolvida', `<ul><li>Controle de participações (3.4): lista visível, uma marcação por vez, verificação na metade da aula</li><li>Blocos mais curtos, chat usado de forma intencional, duplas/tarefas pequenas</li><li>Responda por escrito em até 24 h toda pergunta que ficou sem resposta</li><li>É exatamente para isso que serve uma sessão com o seu <strong>Mentor Regional</strong> — peça uma se não estiver funcionando</li></ul>`)}
   ${stepIconBlock('🗣️','Alinhe — TL', `<p>Apenas após tentar efetivamente as estratégias: tamanho da turma, formato, quem está ficando de fora, o que você mudou. Uma turma menor é possível, mas só se o TL souber.</p>`)}
   ${stepIconBlock('👪','Família — só se combinado com o TL', `<p>Não proponha uma troca de turma por conta própria. Você pode dizer com carinho que percebeu e que está mudando a forma de conduzir a turma — essa parte é sua.</p>`)}
   ${co('co-idea','🔴',`<p><strong>O pedido de reembolso já foi feito por esse motivo?</strong> Vá direto para o Módulo 7 — a estratégia de retenção começa na próxima aula com esse aluno.</p>`)}
  `)}
  ${accItem('🔀 5.6 · Recepção negativa a uma troca de tutor, turma ou horário', `
   <img src="Images/Image_11.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>A continuidade importa muito mais do que parece, e importa principalmente para as crianças que já se encontram desengajados.</p></div>
   ${co('co-ok','✅',`<p><strong>Uma boa notícia que vale dizer em voz alta: este caso geralmente tem solução.</strong> Temos muitos tutores e muitas turmas — quase sempre é possível encontrar uma alternativa, mas só se o problema for levantado rápido, enquanto a família ainda quer uma solução, e não o cancelamento. As três coisas que decidem o resultado: transparência, rapidez e todo mundo informado — a família, seu TL, o Atendimento ao Cliente e um comentário no BO.</p>`)}
   <div class="card"><h4 style="margin-bottom:10px">👋 Se você está saindo</h4>${iconGrid([
     {ic:'📝', html:`<strong>Repasse nos Comentários do BO:</strong> necessidades especiais, o que motiva a criança, onde ela está travada, situação da família.`},
     {ic:'🗣️', html:`<strong>Pergunte ao TL como</strong> comunicar a mudança, e para quem — combine primeiro, depois faça exatamente isso.`}
   ])}</div>
   <div class="card"><h4 style="margin-bottom:10px">🙋 Se você está chegando</h4>${iconGrid([
     {ic:'📖', html:`<strong>Leia o repasse</strong> primeiro.`},
     {ic:'💬', html:`<strong>Nomeie a mudança</strong>, de forma breve e positiva.`},
     {ic:'🏷️', html:`<strong>Memorize todos os nomes</strong> na primeira aula.`},
     {ic:'⏸️', html:`<strong>Não mude mais nada</strong> por 2 aulas.`}
   ])}</div>
   <div class="card"><p>Em um repasse de rotina, planejado, na maioria das regiões é o tutor — e não o Atendimento ao Cliente — quem anuncia a mudança diretamente no chat da turma e se apresenta. O Atendimento ao Cliente geralmente só entra em mudanças inesperadas ou casos delicados.</p></div>
   ${stepIconBlock('🗣️','Alinhe — TL', `<p>Imediatamente se alguma criança tiver uma necessidade educacional especial, ou se um novo horário não funcionar para alguma família.</p>`)}
   ${stepIconBlock('👪','Família — como novo tutor, com acolhimento', `<p style="font-style:italic">“Olá! Eu sou [nome] e vou assumir a turma — já li tudo sobre [criança] para a gente continuar exatamente de onde parou.”</p><p>Demonstre apenas entusiasmo — evite justificar o motivo da mudança.</p>`)}
   ${co('co-idea','🔴',`<p><strong>O pedido de reembolso já foi feito por esse motivo?</strong> Vá direto para o Módulo 7 — a estratégia de retenção começa na próxima aula com esse aluno.</p>`)}
  `)}
  ${accItem('⚠️ 5.7 · Falha técnica ou operacional de nossa parte', `
   <img src="Images/Image_12.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Uma aula perdida por uma falha da plataforma, um cancelamento, um problema técnico que consumiu a maior parte da hora.</p></div>
   ${co('co-danger','🚨',`<p><strong>A pior coisa que um tutor pode dizer aqui é “isso não é possível”.</strong> Uma criança perde aulas porque nossa plataforma falhou, a família pede uma aula de reposição, o tutor afirma que não é possível — a família perde a confiança e pede reembolso. <strong>Essa nunca foi uma decisão do tutor.</strong> Duas aulas perdidas ou prejudicadas são o gatilho que a maioria das regiões usa para iniciar as tratativas sobre uma aula extra de reposição, embora a decisão final seja sempre do seu TL. Abrir essa conversa é trabalho seu. Fechá-la, não.</p>`)}
   ${stepIconBlock('⚡','Adapte', `<p>Mantenha a calma, normalize a situação (3.7), proteja o clima da turma, mande a gravação, siga o plano de recuperação (4.3).</p>`)}
   ${stepIconBlock('🗣️','Alinhe — TL no mesmo dia', `<ul><li>Discutam uma aula extra de reposição</li><li>Envolva o Atendimento ao Cliente se a família estiver insatisfeita ou houver uma questão comercial</li><li>Preencha uma Avaliação de Tutores no BO</li></ul>`)}
   ${stepIconBlock('👪','Família — combine a mensagem com o TL primeiro, no mesmo dia', `<p><em>“Já levei isso para a minha equipe e vamos dar um retorno para vocês”</em> — e depois certifique-se de que a equipe efetivamente dê esse retorno no mesmo dia.</p>${co('co-danger','⛔',`<p>Nunca prometa a aula extra, tampouco a descarte de antemão. Acompanhamento: garanta ao aluno a primeira oportunidade real de participação na próxima aula.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>O pedido de reembolso já foi feito por esse motivo?</strong> Vá direto para o Módulo 7 — a estratégia de retenção começa na próxima aula com esse aluno.</p>`)}
  `)}
  ${accItem('📢 5.8 · “Não foi isso que nos disseram”', `
   <img src="Images/Image_13.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Um responsável diz que o nível, o pacote, o horário ou o próprio curso não correspondem ao que acreditavam ter adquirido. Essa é a conversa mais delicada para um tutor, e a mais suscetível a agravamentos se mal conduzida.</p>
   <p><em>As expectativas criadas antes do início do curso estão por trás de uma grande parte de todos os pedidos de reembolso — mais do que qualquer outra causa isolada.</em></p></div>
   ${stepIconBlock('⚡','Adapte', `<p>Para a criança, nada muda — continue dando boas aulas.</p>`)}
   ${stepIconBlock('🗣️','Alinhe — TL + Atendimento ao Cliente, antes de responder qualquer coisa', `<ul><li>Leve o assunto ao seu TL no mesmo dia</li><li>Envolva o Atendimento ao Cliente — eles são os responsáveis pelos próximos passos</li><li>Registre as palavras da família ao pé da letra em uma Avaliação de Tutores no BO</li></ul><p>É apropriado confirmar o recebimento: <em>“obrigado, vou levar isso para a minha equipe e retornarei o contato.”</em> Isso não é uma resposta. <span style="font-size:12.5px">(Se o que pedem for algo pequeno — uma aula extra — muitas vezes você e seu TL conseguem resolver diretamente, sem o Atendimento ao Cliente. Pergunte ao seu TL qual é o caso.)</span></p>`)}
   ${stepIconBlock('👪','Família — só com a liberação do TL', `<ol><li>Acolha o que foi dito, sem atribuir culpa à equipe</li><li>Mostre que você se importa com a criança</li><li>Passe o caso para o Atendimento ao Cliente de forma organizada</li></ol>${co('co-danger','⛔',`<p>Nunca: culpar um colega, discutir ou oferecer soluções por conta própria.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>O pedido de reembolso já foi feito por esse motivo?</strong> Vá direto para o Módulo 7 — a estratégia de retenção começa na próxima aula com esse aluno.</p>`)}
  `)}
  `}
 ],
 ix:{
  title:'Oito situações, oito primeiros passos',
  instr:'Para cada situação anônima, escolha a qual das oito categorias ela pertence e depois escolha o primeiro passo correto. 70% para liberar o Módulo 6.',
  items:[
   {type:'choice', prompt:'“Ele diz que não consegue, começa a chorar no primeiro erro e parou de terminar as atividades em aula.” — que situação é essa?', opts:['A atividade está difícil demais','A atividade está excessivamente fácil','Uma necessidade educacional especial'], correct:0, fb:'Fracassos repetidos logo no começo e desistir no primeiro erro são o perfil clássico de uma atividade difícil demais.'},
   {type:'choice', prompt:'O primeiro passo certo para essa situação é —', opts:['Mandar mensagem para a família sugerindo uma mudança de nível','Dividir a atividade em passos menores e dar um objetivo reduzido e explícito — já nesta aula','Seguir como planejado; o nível não é algo que você possa ajustar'], correct:1, fb:'Adapte a atividade você mesmo, imediatamente — a conversa sobre o nível, se for necessária, vai para o seu Team Leader e o Atendimento ao Cliente, nunca direto para a família.'},
   {type:'choice', prompt:'“Ele termina em um terço do tempo e depois começa a distrair o colega do lado. Nenhuma lição de casa em três semanas.” — que situação é essa?', opts:['A atividade está excessivamente fácil','Uma necessidade educacional especial','Circunstâncias familiares'], correct:0, fb:'Terminar rápido, atrapalhar e não fazer nenhuma lição de casa é tédio causado por um nível fácil demais — parece desinteresse, mas não é.'},
   {type:'choice', prompt:'O primeiro passo certo para essa situação é —', opts:['Dar imediatamente um desafio extra de verdade ligado à mesma habilidade e reportar como possível subida de nível','Reportar e esperar a revisão do nível antes de mudar qualquer coisa','Supor que ele simplesmente não está motivado e incentivá-lo mais'], correct:0, fb:'Aqui as duas partes são necessárias: adaptar agora para que ele não fique entediado por semanas, e reportar agora para que o próprio nível seja revisado.'},
   {type:'choice', prompt:'“A família mencionou na aula experimental que ele tem TDAH, mas isso nunca foi registrado em lugar nenhum e nenhum tutor se adaptou.” — que situação é essa?', opts:['A turma está cheia demais','Uma necessidade educacional especial','Falha técnica ou operacional de nossa parte'], correct:1, fb:'Este é exatamente o caso de necessidade educacional especial que mais passa despercebido — a informação existia, só nunca chegou à aula.'},
   {type:'choice', prompt:'O primeiro passo certo para essa situação é —', opts:['Esperar um diagnóstico oficial antes de mudar qualquer coisa','Adaptar a aula imediatamente — blocos mais curtos, estrutura previsível, transições avisadas — e alinhar com seu Team Leader e o Atendimento ao Cliente, além de deixar um comentário no BO','Dizer à família que talvez o filho não se adapte a esse formato'], correct:1, fb:'Você mesmo adapta tudo o que pode, imediatamente, e também garante que fique registrado para que o próximo tutor e o Atendimento ao Cliente saibam.'},
   {type:'choice', prompt:'“Duas crianças da minha turma agitada de dez não tiveram nenhuma troca de verdade comigo em três aulas, e uma delas parou de levantar a mão.” — que situação é essa?', opts:['Incompatibilidade do aluno com a idade ou o formato do curso','A turma está superlotada e o aluno não tem oportunidade de participar','Não foi isso que nos disseram'], correct:1, fb:'É claramente uma questão de gestão de turma — e a única situação da lista que depende diretamente do comportamento do tutor.'},
   {type:'choice', prompt:'O primeiro passo certo para essa situação é —', opts:['Reportar o tamanho da turma ao seu Team Leader e esperar uma decisão antes de mudar qualquer coisa','Mudar a forma como você conduz essa turma específica — controlar as vezes, usar o chat de forma intencional, reorganizar os blocos — e escalar só se ainda assim não for suficiente','Focar nas crianças que participam, já que elas estão claramente mais engajadas'], correct:1, fb:'É uma habilidade que você pode aplicar imediatamente. Você escala porque tentou de verdade e a diferença continua grande demais — não no lugar de tentar.'},
   {type:'choice', prompt:'“Um responsável diz que falaram para ele que seriam aulas individuais, e não uma turma de oito.” — que situação é essa?', opts:['Recepção negativa a uma troca de tutor, turma ou horário','Não foi isso que nos disseram','A atividade está difícil demais'], correct:1, fb:'Uma divergência entre o que foi prometido e o que está sendo entregue é exatamente “não foi isso que nos disseram” — a mais delicada das oito.'},
   {type:'choice', prompt:'O primeiro passo certo para essa situação é —', opts:['Explicar como funcionam as aulas em turma e por que elas têm valor pedagógico','Confirmar o recebimento, depois levar o assunto ao seu Team Leader e ao Atendimento ao Cliente no mesmo dia, antes de responder de fato — e registrar ao pé da letra as palavras da família no BO','Pedir desculpas pela confusão e se oferecer para ver a possibilidade de mudar para aulas individuais'], correct:1, fb:'Responder por conta própria — mesmo de forma razoável — é como os tutores acabam, sem querer, confirmando uma reclamação ou dando a entender algo que não podemos cumprir. Alinhe primeiro, sempre.'}
  ]
 }
},
{id:'m6', numLabel:'Módulo 6', emoji:'🧭', color:'var(--blue)',
 title:'A quem avisar, e com que rapidez',
 desc:'Transforme tudo o que você aprendeu até aqui em ações práticas — o mapa de encaminhamento e as cinco regras.',
 obj:'Transformar tudo o que você aprendeu até aqui em ações práticas — sabendo intuitivamente a quem reportar e com qual urgência.',
 sections:[
  {t:'⏱️ 6.1 · A velocidade é tudo', html:`
   <div class="card"><p>Todas as situações do Módulo 5 têm o mesmo formato: são simples de resolver no início, mas complexas de solucionar tardiamente. Um erro de nivelamento identificado na terceira aula é facilmente solucionável. O mesmo nível errado na décima quinta aula já se transformou em <em>“ele não se interessa mais”</em> — e, a essa altura, a família já perdeu a confiança em nosso trabalho.</p></div>
   ${co('co-idea','💡',`<p><strong>Você é a ponte entre a aula e as pessoas que podem mudar a situação da criança. Uma ponte só é útil se as informações transitarem rapidamente por ela.</strong></p>`)}
  `},
  {t:'🗺️ 6.2 · O mapa de encaminhamento', html:`
   <div class="tbl-full"><div class="card"><table>
   <tr><th>🔎 O que você percebeu</th><th>① Na aula</th><th>② Entre as aulas</th><th>③ A quem avisar + BO</th><th>④ A família</th><th>⏱️ Com que rapidez</th></tr>
   <tr><td><strong>Presença abaixo da metade</strong>, ou atividades bem abaixo da turma</td><td>Garanta uma oportunidade real de participação e proponha um objetivo alcançável</td><td>Conversa individual em particular com a criança</td><td>Team Leader se passarem mais duas aulas sem mudança</td><td>Mensagem curta e acolhedora — você pode enviar</td><td>Na mesma semana</td></tr>
   <tr><td><strong>Duas ou mais aulas sem nada entregue</strong></td><td>Verifique as atividades em tempo real via compartilhamento de tela; simplifique o objetivo</td><td>Conversa individual; explique bem a próxima lição de casa e acompanhe</td><td>Team Leader se continuar</td><td>Mensagem sobre o progresso — você pode enviar</td><td>Na mesma semana</td></tr>
   <tr><td><strong>Atividade difícil demais</strong></td><td>Etapas menores, objetivo reduzido, adapte a atividade, normalize os erros</td><td>Explicação por escrito do conceito que está faltando</td><td><strong>Team Leader + Avaliação de Tutores no BO</strong> — peça uma aula de avaliação/nivelamento se necessário</td><td>Só o que seu TL liberar. Nunca o nível nem as opções</td><td>Na mesma semana</td></tr>
   <tr><td><strong>Atividade fácil demais</strong></td><td>Desafio extra de verdade, atividade adaptada para cima, papel de ajudante, nunca sem nada para fazer</td><td>Tenha pronta uma atividade do próximo nível</td><td><strong>Team Leader + Avaliação de Tutores no BO</strong> — peça uma aula de avaliação/nivelamento se necessário</td><td>Só o que seu TL liberar. Nunca o nível nem as opções</td><td>Na mesma semana</td></tr>
   <tr><td><strong>Necessidade educacional especial</strong>, registrada ou suspeita</td><td>Blocos mais curtos, estrutura previsível, avisar antes das transições, adaptar as atividades</td><td>Anote o que funciona e o que não funciona</td><td><strong>Team Leader + Avaliação de Tutores no BO.</strong> Pergunte sobre aulas individuais se a diferença for grande</td><td>Perguntar o que ajuda: com você, com cuidado. Formato/turma/aulas individuais: nunca sugeridos por você</td><td>Antes da próxima aula · imediatamente se a diferença for grande demais</td></tr>
   <tr><td><strong>Incompatibilidade do aluno com a idade ou o formato do curso</strong></td><td>Simplifique, demonstre mais, dê mais atenção na aula</td><td>Seja honesto sobre o limite</td><td><strong>Team Leader + Avaliação de Tutores no BO</strong> — diga “enquadramento, não motivação”</td><td>Só se o seu TL pedir</td><td>Na mesma semana</td></tr>
   <tr><td><strong>O aluno não tem oportunidade de participar</strong></td><td>Controle de participações; ajuste sua abordagem; adapte uma atividade para quem precisa</td><td>Respostas por escrito em até 24 h para tudo o que ficou sem resposta</td><td>Team Leader, se não der para resolver na aula</td><td>Ajustes na sua didática: responsabilidade sua. Troca de turma: decisão fora da sua alçada</td><td>Na mesma semana</td></tr>
   <tr><td><strong>Recepção a uma troca de tutor, turma ou horário</strong></td><td>Nomeie a mudança, normalize, não mude mais nada por duas aulas</td><td>Transição registrada nos Comentários do BO</td><td><strong>Team Leader</strong> — imediatamente se alguma criança tiver uma necessidade especial ou se um horário não funcionar. Atendimento ao Cliente só para casos inesperados/delicados</td><td>Como novo tutor: acolhedor, entusiasmado. Evite justificar o motivo da transição ou discutir horários</td><td>Antes da aula de repasse</td></tr>
   <tr><td><strong>Duas aulas comprometidas</strong> — falha da plataforma, cancelamento, falta</td><td>Mantenha a calma, proteja o clima</td><td>Gravação + o trecho essencial; plano de recuperação</td><td><strong>Team Leader no mesmo dia — inicie as tratativas sobre uma aula extra (duas aulas comprometidas representam o limite adotado pela maioria das regiões).</strong> Atendimento ao Cliente se a família estiver insatisfeita · Avaliação de Tutores no BO</td><td>No mesmo dia — combine o texto com seu TL primeiro</td><td>No mesmo dia</td></tr>
   <tr><td><strong>“Não foi isso que nos informaram”</strong></td><td>Para o aluno, a dinâmica permanece inalterada — continue dando boas aulas</td><td>—</td><td><strong>Team Leader + Atendimento ao Cliente, antes de responder · o relato da família na íntegra em uma Avaliação de Tutores</strong></td><td>Só confirme o recebimento. A resposta definitiva ocorrerá apenas após a autorização do TL — não ofereça opções por conta própria</td><td>No mesmo dia</td></tr>
   <tr><td><strong>Circunstâncias familiares, questões de saúde ou financeiras</strong></td><td>Demonstre empatia, sem criar expectativas de retorno imediato</td><td>—</td><td>Atendimento ao Cliente, por meio do seu Team Leader · não insista</td><td>Uma mensagem de acolhimento, evitando perguntas investigativas</td><td>Assim que você souber</td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p>Para qualquer urgência, a maioria das regiões também tem um canal direto no Slack entre Team Leader e Atendimento ao Cliente, como alternativa mais rápida ao BO — a nomenclatura varia por região, portanto, confirme com o seu Team Leader o canal correto.</p>`)}
   ${co('co-idea','🎓',`<p><strong>Uma coluna que este mapa não mostra: o seu Mentor Regional.</strong> Tudo o que está na coluna “a quem avisar” acima tem a ver com as <em>condições combinadas</em> — nível, turma, horário, pacote — e sempre vai para o seu Team Leader e o Atendimento ao Cliente. Quando a dúvida for <em>sobre aprimoramento didático</em>, é ao seu Mentor Regional que você deve recorrer, junto com o caminho acima — não em substituição a ele.</p>`)}
  `},
  {t:'⚖️ 6.3 · As cinco regras', html:`
   <div class="rule-row">
     <div class="rule-card"><div class="rule-num">1</div><div class="rule-ic">⚡</div><div class="rule-txt"><strong>Adapte primeiro.</strong> Você não precisa de autorização para aprimorar sua didática — muitas situações são resolvidas nessa etapa. Continua travado depois de 2 aulas? Agende uma sessão com seu Mentor Regional.</div></div>
     <div class="rule-card"><div class="rule-num">2</div><div class="rule-ic">📣</div><div class="rule-txt"><strong>Avisar alguém não é opcional.</strong> Você informa o Team Leader, envolve o Atendimento ao Cliente, preenche a Avaliação de Tutores — caso contrário, o problema passará despercebido.</div></div>
     <div class="rule-card"><div class="rule-num">3</div><div class="rule-ic">🚦</div><div class="rule-txt"><strong>Team Leader antes da família.</strong> Alinhem e combinem a estratégia, <em>depois</em> fale com a família — exatamente o que foi combinado, nunca opções suas.</div></div>
     <div class="rule-card"><div class="rule-num">4</div><div class="rule-ic">🤐</div><div class="rule-txt"><strong>Nunca faça promessas, tampouco recuse solicitações de imediato — sempre demonstre acolhimento.</strong> Você recomenda; o Atendimento ao Cliente oferece. Uma exceção: depois que seu Team Leader aprovar uma aula extra, muitas vezes você mesmo pode avisar a família.</div></div>
     <div class="rule-card"><div class="rule-num">5</div><div class="rule-ic">🔁</div><div class="rule-txt"><strong>Escale uma vez e depois acompanhe.</strong> Levantar um assunto e não acompanhá-lo equivale a ignorá-lo.</div></div>
   </div>
   ${co('co-idea','💡',`<p>Vale a pena transformar essas cinco regras em hábito, e não apenas lê-las uma vez — elas representam a diferença entre um alerta que gera ação e um problema que passa despercebido. Confira com seu Team Leader qualquer detalhe sobre como isso funciona na sua região.</p>`)}
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
 title:'Revertendo um pedido de reembolso',
 desc:'Tudo até aqui foi sobre evitar um pedido. Este módulo é sobre o que fazer quando um pedido já foi feito.',
 obj:'Saber o que muda quando um pedido de reembolso já foi feito: os objetivos da próxima aula, o que você pode e não pode dizer, e como continuar repassando ao Atendimento ao Cliente as informações necessárias.',
 sections:[
  {t:'🔀 7.1 · A dinâmica muda quando o pedido já foi feito', html:`
   <div class="card"><p>Os Módulos 1 a 6 focam em identificar o problema <strong>antes</strong> que a família solicite o reembolso. Este módulo é para o momento em que isso já aconteceu: <strong>um pedido de reembolso foi feito</strong> e você foi avisado.</p></div>
   ${co('co-idea','💡',`<p><strong>O pedido em si é criado pelo gerente de Atendimento ao Cliente, não por você.</strong> Essa etapa não está sob seu controle. Sua responsabilidade continua sendo a condução das próximas aulas — e isso tem um peso enorme.</p>`)}
   ${co('co-danger','🚨',`<p><strong>Não mencione o pedido de reembolso</strong> — nem para o aluno, nem para a família — a menos que o Atendimento ao Cliente solicite explicitamente uma comunicação pontual. O seu foco agora é a parte pedagógica, não a negociação.</p>`)}
  `},
  {t:'🎯 7.2 · A próxima aula com esse aluno é a etapa de retenção', html:`
   <div class="card"><p>Essa pode ser a sua única chance de reverter a situação. Encare a próxima aula como o momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Garanta a ele uma oportunidade real de participação.</strong> Não uma pergunta qualquer — um momento genuíno em que o aluno seja notado e tenha sucesso.`},
     {ic:'🏆', html:`<strong>Garanta uma conquista rápida, fácil e visível.</strong> O aluno deve concluir a aula sentindo-se capaz, e não defasado.`},
     {ic:'👀', html:`<strong>Faça o aluno sentir que sua presença foi notada</strong> — de forma específica, não genérica. A mesma regra de toda conversa individual deste treinamento.`},
     {ic:'🤐', html:`<strong>Não mencione o pedido.</strong> Esta aula não é o lugar para essa conversa, mesmo que o aluno aborde o assunto — redirecione o foco com sutileza e dê continuidade à aula.`}
   ])}
  `},
  {t:'📮 7.3 · Repasse informações rapidamente ao Atendimento ao Cliente — isso continua sendo sua responsabilidade', html:`
   <div class="card"><p>O Atendimento ao Cliente gerencia o pedido sem o contexto da aula. Suas observações rápidas e detalhadas fornecem informações cruciais que eles não conseguiriam obter de outra maneira.</p></div>
   ${checkbox([
     'Um comentário no BO relatando exatamente o que você observou — datas e fatos concretos, não impressões pessoais',
     'O relato da família na íntegra, caso o tenha recebido — sem paráfrases',
     'Todas as adaptações ou ofertas já realizadas por você, para evitar redundâncias por parte do Atendimento ao Cliente',
     'Seu Team Leader informado, no mesmo dia'
   ])}
   ${co('co-idea','💡',`<p>Você pode tomar conhecimento do pedido por meio dos comentários do Atendimento ao Cliente no perfil do aluno no BO — não há um sistema de notificação automática para alertá-lo quando a família solicita o reembolso. Você reporta os sinais ao Atendimento ao Cliente; mas não cabe a eles fornecer atualizações do processo a você.</p>`)}
  `},
  {t:'🚧 7.4 · O que está e o que não está sob sua alçada', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Você pode</th><th>🚫 Você nunca pode</th></tr>
   <tr><td>Notificar o Atendimento ao Cliente via BO assim que tomar conhecimento do pedido</td><td>Confirmar a aprovação de um reembolso</td></tr>
   <tr><td>Se surgir uma oportunidade natural <strong>antes</strong> desse aviso, oferecer algo concreto — uma aula extra, uma verificação de nível, recomendar outro curso</td><td>Confirmar ou discutir questões financeiras</td></tr>
   <tr><td>Informar ao responsável que o Atendimento ao Cliente prestará o suporte necessário</td><td>Fazer afirmações ou insinuações adicionais sobre o andamento do pedido</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>A abordagem mais segura é informar:</strong> <em>“O Atendimento ao Cliente vai ajudar vocês com isso.”</em> Nada além disso — sua atribuição encerra-se nessa etapa, pois as tratativas fogem da sua alçada.</p>`)}
  `},
  {t:'🌱 7.5 · O período de 2 a 4 aulas após a retenção', html:`
   <div class="card"><p>Caso o pedido seja cancelado e o aluno permaneça na sua turma, seja transferido para outro tutor ou migre para aulas individuais — as aulas subsequentes serão decisivas para confirmar se a retenção foi efetiva.</p></div>
   ${iconGrid([
     {ic:'🔁', html:`<strong>Cuidado extra em cada uma dessas aulas</strong> — uma participação efetiva, uma conquista específica, a valorização da presença — a aplicação contínua de todas as práticas ensinadas neste treinamento.`},
     {ic:'📝', html:`<strong>Um registro detalhado</strong> nos Comentários do BO caso o aluno seja transferido para um novo tutor ou formato — mantendo o mesmo rigor de transição do Módulo 5.6.`},
     {ic:'👋', html:`<strong>Manutenção do acolhimento caso</strong> o aluno permaneça com você — não permita que a sensação de resolução faça com que a sua didática retorne, inadvertidamente, ao padrão anterior ao desengajamento.`}
   ])}
  `},
  {t:'🔙 7.6 · A prevenção continua sendo a prioridade', html:`
   <div class="card"><p>Os pontos abaixo resumem os Módulos 1 a 6 — uma breve revisão para reforçar que o seu principal objetivo é evitar que este módulo precise ser acionado.</p></div>
   ${checkbox([
     'Acompanhe a lição de casa, toda semana',
     'Mantenha a estrutura completa da aula — não permita que a dinâmica se perca caso a turma apresente facilidade com o conteúdo',
     'Comunique ausências superiores a duas aulas, ou falhas técnicas, imediatamente após a ocorrência',
     'Escale para o seu Team Leader assim que identificar qualquer sinal de risco',
     'Envie o relatório de acompanhamento do aluno sempre que for solicitado'
   ])}

  `}
 ],
 ix:{
  title:'Quando o pedido já foi formalizado',
  instr:'Para cada cenário, defina a ação adequada. 70% para continuar.',
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
 desc:'Este módulo não possui questionário — apresenta apenas um resumo de tudo o que você aprendeu neste treinamento, em formato de lista, para revisão antes da prova.',
 obj:'Revise o checklist completo abaixo. Este módulo não possui avaliação — leia-o e, em seguida, avance para a prova final.',
 sections:[
  {t:'✅ Resumo dos pontos essenciais', html:`
   ${numlist([
     'Confiro o perfil do aluno, incluindo os Comentários, <strong>antes</strong> da minha primeira aula com um novo aluno',
     'Uma vez por semana, verifico a tela de Progresso de toda a turma — analisando as métricas Em aula e Em casa',
     'Encaro a ausência contínua de entregas como o sinal de alerta mais crítico, e não como um fator neutro',
     'Garanto que todos os alunos tenham oportunidades reais de participação e comprovo isso por meio do meu controle',
     'Quando um aluno se ausenta, aplico os quatro passos de recuperação, em vez de apenas enviar a gravação',
     'Identifico os padrões de comportamento observados e aplico estratégias específicas para cada perfil',
     'Sempre notifico meu Team Leader, aciono o Atendimento ao Cliente quando necessário e registro as informações no BO',
     'Quando o Atendimento ao Cliente assume uma conversa, encerro minha intervenção direta e sigo suas orientações',
     'Escalo o problema e acompanho a sua resolução'
   ])}
  `},
  {t:'🪞 Autoavaliação — perguntas semanais de acompanhamento', html:`
   ${numlist([
     'Notei algum declínio no desempenho durante a aula ou na entrega de lições de casa nesta semana, mesmo entre os alunos com frequência regular?',
     'Há algum aluno na turma com ausência total de entregas que tenha passado despercebido?',
     'Todos os alunos tiveram uma participação efetiva na minha última aula? Tenho certeza ou estou supondo?',
     'Observei algum sinal de alerta que ainda não reportei à equipe?',
     'Reportei alguma situação que deixei de acompanhar posteriormente?'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Este é o conteúdo completo do treinamento.</strong> Quando estiver preparado, avance para a prova final e, em seguida, realize o DST no LMS para concluir a atividade.</p>`)}
  `}
 ],
 gateExam:true
},
    ];
  }
};

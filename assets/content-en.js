/* Refunds training — English content (identical to Materials/Refunds_Training.html) */
const PAGE_LANG='en';
const CONTENT = {
  flag:'🇬🇧', dir:'ltr',
  ui:{
    pageTitle:'Refunds Training — Kodland Tutor Training',
    logoSub:'Tutor Development Department',
    heroEyebrow:'💸 Tutor Training Program',
    heroTitle:'Understanding <span class="h-pill">Refunds</span>',
    heroIntro:"Behind every refund request there's a child who was building something and stopped — and you are almost always the first person who could have noticed it. This training is about how well you observe, and how fast you act.",
    heroR1:'Learn exactly what to watch for, during the lesson and between lessons.',
    heroR2:"Practice reading a group's Progress view in a hands-on BO simulation.",
    heroR3:"Know exactly what's yours to fix, what's yours to report, and who to tell.",
    heroWork:'Work through 7 modules and a final checklist, then head to the DST. Each module needs 70%+ to unlock the next.',
    startBtn:'🚀 Start Training',
    pathLabel:'Your learning path',
    devTitle:'Dev: unlock all modules for review',
    backToPath:'Back to path',
    modulesPassed:'{done} / {total} modules passed',
    moduleN:'Module {n}',
    of:'of',
    locked:'🔒 Locked',
    passedBadge:'✅ Passed · {pct}%',
    reviewedBadge:'✅ Reviewed',
    startBadge:'▶ Start',
    reviewBadge:'▶ Review',
    objective:'Objective',
    startCheck:'▶ Start the module check',
    toExam:'▶ Continue to the Final Exam',
    doneBack:'✓ Done — back to path',
    ixBadge:'📋 Module check — 70% to unlock the next module',
    ixItemBadge:'📋 Module check — item {i} of {n}',
    scoreSoFar:'Score so far: {c} / {t}',
    continue:'Continue →',
    sortWrong:'Not quite — the right answer is "{label}".',
    resPassed:'Module passed!',
    resFailed:'Not quite there yet',
    resUnlocked:"You've unlocked the next module.",
    resNeed:'You need 70% to unlock the next module. Review the section above and try the check again.',
    resContinue:'Continue to learning path',
    resBack:'Back to path',
    resReview:'Review this module',
    doneEyebrow:'Final Exam',
    doneTitle:'🎉 Congratulations!',
    doneP1:"🎉 <strong>Congratulations! You've completed the self-study training to improve your Refunds Metrics!</strong>",
    doneP2:"You're almost done! Please return to the LMS training page where you accessed this training. The DST is available directly below the training.",
    doneP3:'👉 <strong>You must complete and pass the DST for the training to be considered successfully completed.</strong> If the DST is not completed, the training will remain incomplete and may become overdue.',
    doneP4:'Please make sure to complete the DST and achieve a passing score to successfully close the assignment.',
    doneP5:'Good luck! ❤️',
    devUnlockAlert:'Dev mode: all modules are now unlocked for review.',
    devOn:'🔓 Dev mode ON — all modules unlocked',
    devOff:'🔒 Dev mode OFF — progress cleared',
    devBadge:'🔓 DEV MODE',
    doLabel:'✅ Do',
    avoidLabel:'🚫 Avoid',
    noticeLabel:'Notice:'
  },
  buildModules(){
    return [
{id:'intro', numLabel:'Introduction', emoji:'💸', color:'var(--coral)',
 title:'Why This Training Exists',
 desc:'What a refund looks like from the child\'s side, why you\'re the first person who can see one coming, and what part of it is yours.',
 obj:'Understand what a refund looks like from the child\'s side, why you are the first person who can see one coming, and what part of it is yours.',
 sections:[
  {t:'📋 You\'re here for a specific reason — find it fast', html:`
   <div class="card"><p>Below you'll find the reasons this training may have been assigned to you. Here we only cover refunds requested for reasons related to the lesson — situations where we can help you manage them, not only to prevent them going forward, but to save the refund. Still, completing the full training will give you a broader perspective that also helps prevent refunds that come from other reasons.</p></div>
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>🚩 The flagged reason</th><th>👀 What it usually looks like</th><th>📍 How this training helps</th></tr>
   <tr><td><strong>No interest in programming / Kodland courses</strong></td><td>Bored, going through the motions, "is that all?", no real objection to anything specific</td><td>Module 5.2 · Module 3.6</td></tr>
   <tr><td><strong>Lesson organisation / discipline</strong></td><td>The room feels chaotic, one child dominates, others go quiet or check out</td><td>Module 5.5 · Module 3</td></tr>
   <tr><td><strong>Strong negative reaction to making errors</strong></td><td>Gives up fast, upset by small mistakes, "I can't do this" early and often</td><td>Module 5.1 · Module 3.5</td></tr>
   <tr><td><strong>Concern about the tutor's own teaching</strong></td><td>Doesn't point to one child's pattern — it's about the lesson itself</td><td>Talk to your Team Leader and Regional Mentor directly; Module 3 as a refresher</td></tr>
   </table></div></div>
  `},
  {t:'💔 A refund is a child who stops learning', html:`
   <div class="card"><p>Behind every refund request there is a child who was building something and stopped. A group that gets smaller. A family that trusted us and decided we weren't worth continuing with.</p>
   <p>That's what this training is about. Not a number on a dashboard — a specific child, in one of your groups, who is drifting right now and doesn't know how to say so.</p></div>
   <img src="Images/Image_1.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
  `},
  {t:'📉 Refunds are almost never sudden', html:`
   <div class="card"><p>This is the most useful thing to know about them. By the time a family asks for their money back, the story has usually been running for weeks — and most of it played out <strong>in front of the tutor.</strong></p></div>
   ${stepFlow([
     {ic:'📋', label:'Classwork stops getting finished'},
     {ic:'🏠', label:'Homework stops being submitted'},
     {ic:'📵', label:'Lessons start getting missed'},
     {ic:'☎️', label:'The parent calls someone'}
   ])}
   <div class="card"><p>In the lessons before a refund request, the pattern is consistent:</p></div>
   ${bigStat('39%→56%', `<p><strong>Lessons skipped</strong> rises sharply in the final stretch before a refund request.</p>`)}
   ${bigStat('35%→15%', `<p><strong>Homework completion</strong> falls just as sharply over the same period.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted);margin-top:-4px;margin-bottom:14px">Based on historical patterns across groups; the exact figures can vary by region.</p>
   ${co('co-danger','🚨',`<p><strong>Here's the part that matters most for you.</strong></p><p>A child on the way out of the course can look completely normal in the lesson you're teaching. The collapse isn't in their attention while they're there — it's in <strong>showing up and doing the work.</strong> So "he seems fine in class" is not evidence that everything is fine.</p>`)}
  `},
  {t:'🦸 Why you are the most important person in this', html:`
   ${co('co-idea','💡',`<p><strong>You're the only person who sees this child, in this group, every single week.</strong> Nobody in Client Service, Teaching Ops, or the Trial Class team can see a child go quiet or stop trying. <strong>You can.</strong> This whole training comes down to two things: <strong>how well you observe, and how fast you act.</strong></p>`)}
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Fully yours</th><th>🔁 Yours to adapt around — and to report</th><th>🚫 Outside our control</th></tr>
   <tr><td>The child feels motivated and supported every lesson</td><td><strong>Level too hard or too easy.</strong> Adapt the task now. Report it for review.</td><td>Health</td></tr>
   <tr><td>Every child gets a real turn and a real answer</td><td><strong>A special need nobody told you about.</strong> Adapt your approach. Report it.</td><td>Family circumstances</td></tr>
   <tr><td>You notice the first signs of drifting — and act</td><td><strong>Crowded, lively group.</strong> A learnable skill — tailor your approach. Report if the gap stays too big.</td><td>The family's finances</td></tr>
   <tr><td>The family feels a real person is following progress</td><td><strong>A tutor/group/schedule change landed badly.</strong> Be transparent, sync fast.</td><td></td></tr>
   <tr><td>A child who missed lessons is genuinely caught up</td><td><strong>Family told something different at sign-up.</strong> Clarify honestly. Report it.</td><td></td></tr>
   </table></div></div>
   ${co('co-danger','🚨',`<p><strong>None of these are your fault — real work is still yours.</strong> Adapt the task, change how you run the group, protect a child through a change. And just as important: <strong>tell someone.</strong> Inform your Team Leader, involve Client Service, leave the comment in BO. If you don't, the problem goes quiet — and a few weeks later, we lose the child.</p>`)}
  `},
  {t:'💬 Talking to families: what you do, and where you hand over', html:`
   <img src="Images/Image_2.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Parents will want to talk to you about their child's learning — <strong>that's part of your job</strong>, and you should be warm and available about it.</p>
   <p>What you <strong>can't</strong> do is the <em>action</em>: move a child to another group, change a schedule, a level or a package, or approve an extra lesson. Those belong to Client Service — and they can only act if you tell them.</p></div>
   ${co('co-idea','💡',`<p><strong>The rule: talk about the learning. Hand over the action.</strong> You're the bridge between the lesson and the people who can change the child's situation — and a bridge only helps if things cross it <strong>quickly.</strong></p>`)}
  `},
  {t:'🔀 The order matters: Team Leader first, then the family', html:`
   <div class="card"><p>There's a sequence to get right, and getting it wrong is how well-meant messages create problems.</p></div>
   ${co('co-danger','🚨',`<p><strong>Whenever the situation involves anything beyond your own teaching</strong> — level, group, schedule, a special need, a broken promise, a lost lesson — <strong>do not write to the family first.</strong></p>`)}
   ${stepFlow([
     {ic:'👩‍💼', label:'1. Sync with your Team Leader — explain what you saw, involve Client Service, leave a BO comment'},
     {ic:'🧭', label:'2. Agree the strategy — what\'s genuinely available for this child, and what isn\'t'},
     {ic:'👪', label:'3. Then the family — exactly what your Team Leader agreed, nothing more'}
   ])}
   <div class="card"><p>This way you never have to guess, never over-promise, and never have to walk something back.</p></div>
   ${co('co-danger','🚨',`<p><strong>Solutions and options are not yours to explain, even after you sync.</strong> Your Team Leader tells you one of two things:</p>
   <ul><li><em>"Say X to the family"</em> → say exactly that, nothing more</li>
   <li><em>"We'll handle it from here"</em> → <strong>you stay out of it.</strong> Two voices giving a family different pictures is how trust breaks.</li></ul>`)}
  `},
  {t:'📌 What you can always say, and what always waits', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Always yours — write freely, be warm and responsive</th><th>⏸️ Always waits for your Team Leader</th></tr>
   <tr><td>How the child is getting on, what they did well, what they're finding hard</td><td>Anything about <strong>levels, courses, groups, schedules, formats or packages</strong></td></tr>
   <tr><td>What <strong>support you</strong> are giving them in the lesson, and what you've adapted</td><td>Any <strong>option, solution or next step</strong> for the family to choose from</td></tr>
   <tr><td>That you've noticed they're struggling, and that you care about how they're feeling</td><td>Any <strong>explanation of how something went wrong</strong>, or why</td></tr>
   <tr><td>Asking what helps this child learn best</td><td>Anything at all about <strong>money</strong></td></tr>
   <tr><td>A missed lesson, and what to catch up on</td><td>Any confirmation that something <strong>will</strong> or <strong>won't</strong> happen</td></tr>
   <tr><td>That you've raised something with your team, in general terms, without detail</td><td>Any detail about <strong>what you've reported internally</strong></td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p><strong>The distinction in one line: you talk about the child. Your Team Leader and Client Service talk about the arrangement.</strong></p>`)}
   ${co('co-danger','⛔',`<p><strong>Never promise, and never refuse.</strong></p><p>Not <em>"we'll move him to another group."</em> Not <em>"that's not possible."</em> Both are decisions that aren't yours.</p>
   <p><strong>But do not be cold or non-committal either.</strong> What you should always show, straight away, is that you genuinely want this child to be comfortable and to get the best possible learning experience — and that you're already working on it. <em>"I've seen this, I care about it, I'm looking into what we can do, and I'll come back to you."</em> That's not a promise. It's the thing that keeps a family with us while the answer is being found.</p>`)}
   <div class="card"><p><strong>You can always write directly, without checking first,</strong> about the ordinary business of teaching: how the lesson went, something the child did well, a missed lesson and what to catch up on, a question about how they're getting on at home. Be responsive and warm about all of it — that's your job, and it's what makes the harder conversations possible later.</p></div>
  `}
 ],
 ix:{
  title:'What\'s mine, what I adapt and report, what isn\'t mine',
  instr:'Sort each real situation into the right zone. 70% to unlock Module 1.',
  items:[
   {type:'sort', prompt:'"In a big group, a student gets lost and isn\'t able to participate" —', card:'In a big group, a student gets lost and isn\'t able to participate', zones:[
     {label:'Fully mine', fb:'Not quite — start by changing your own approach, but if the gap is still too big after genuinely trying, that\'s something to report too.'},
     {label:'Mine to adapt and report', fb:'Correct — this is a group-management skill you can change yourself starting next lesson, and you report it if it\'s still not enough after trying.'},
     {label:'Outside our control', fb:'Not quite — this is a group-management skill, and it starts with you adapting your own approach.'}
   ], correctZone:1, fb:''},
   {type:'sort', prompt:'"The family\'s finances changed" —', card:'The family\'s finances changed', zones:[
     {label:'Fully mine', fb:'Not quite — a family\'s finances are genuinely outside our control.'},
     {label:'Mine to adapt and report', fb:'Not quite — a family\'s finances are genuinely outside our control, not something to adapt around.'},
     {label:'Outside our control', fb:'Correct — this is a genuine outside-our-control cause. Be kind, expect nothing, and don\'t chase it.'}
   ], correctZone:2, fb:''},
   {type:'sort', prompt:'"The level is too advanced for his age" —', card:'The level is too advanced for his age', zones:[
     {label:'Fully mine'},
     {label:'Mine to adapt and report', fb:'Correct — adapt the task now, and report it so the level itself can be reviewed.'},
     {label:'Outside our control'}
   ], correctZone:1, fb:'Not quite — you can adapt the task immediately, and you should also report it so the level gets reviewed. Both halves matter.'},
   {type:'sort', prompt:'"He\'s stopped submitting homework" —', card:'He\'s stopped submitting homework', zones:[
     {label:'Fully mine', fb:'Correct — noticing this and acting on it (a check-in, adjusting your approach) is entirely yours.'},
     {label:'Mine to adapt and report'},
     {label:'Outside our control'}
   ], correctZone:0, fb:'Not quite — noticing a drop in homework and doing a check-in is fully within your own teaching, no report needed unless it points to a bigger issue like a level mismatch.'},
   {type:'sort', prompt:'"Nobody told me he has a special educational need" —', card:'Nobody told me he has a special educational need', zones:[
     {label:'Fully mine'},
     {label:'Mine to adapt and report', fb:'Correct — adapt everything you can in the lesson, and report it so options like a one-to-one format can be looked at.'},
     {label:'Outside our control'}
   ], correctZone:1, fb:'Not quite — you adapt your approach immediately, and you also report it so wider options can be considered.'},
   {type:'sort', prompt:'"The parent says they were promised something different" —', card:'The parent says they were promised something different', zones:[
     {label:'Fully mine'},
     {label:'Mine to adapt and report', fb:'Correct — you can\'t change the past, but you clarify honestly and report it so the conversation happens between departments.'},
     {label:'Outside our control'}
   ], correctZone:1, fb:'Not quite — this needs reporting so it stops repeating, even though the mismatch itself wasn\'t your doing.'},
   {type:'sort', prompt:'"The child is bored and finishes in ten minutes" —', card:'The child is bored and finishes in ten minutes', zones:[
     {label:'Fully mine'},
     {label:'Mine to adapt and report', fb:'Correct — give a real extension now, and report it as a possible level-too-easy case.'},
     {label:'Outside our control'}
   ], correctZone:1, fb:'Not quite — boredom from an easy level needs an immediate extension in your lesson, plus a report so the level gets reviewed.'}
  ]
 }
},
{id:'m1', numLabel:'Module 1', emoji:'👀', color:'var(--blue)',
 title:'Learning to See It Early',
 desc:'What to look for during the lesson and between lessons, and the point at which you must act.',
 obj:'Know exactly what to look for during the lesson and between lessons, tell the difference between a child having an off week and a child on the way out, and know the point at which you must act.',
 sections:[
  {t:'', html:`<div class="card"><p>This is the most important module in the training. Everything else depends on you noticing in time.</p></div>`},
  {t:'👁️ 1.1 · What to notice during the lesson', html:`
   <div class="card"><p>These are the signals nobody else in the company can see. You don't need a report to read them — you need to be looking.</p></div>
   <img src="Images/Image_4.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   ${iconGrid([
     {ic:'📷', html:`<strong>Camera goes off</strong> and stays off, when it used to be on. The most common early sign of withdrawing — children who go on to leave spend around <strong>half</strong> as much camera time as their groupmates.`},
     {ic:'🎤', html:`<strong>The microphone stops being used</strong> at all — roughly a <strong>third</strong> of their groupmates' mic time. A child who's stopped speaking has usually stopped feeling part of the group.`},
     {ic:'💬', html:`<strong>One-word answers</strong>, where there used to be sentences. Not shyness if it's a change — a change is a signal.`},
     {ic:'🖥️', html:`<strong>Stops sharing their screen</strong> during independent work. Often means "I don't want you to see I'm stuck" or "I haven't started."`},
     {ic:'📝', html:`<strong>Starts the classwork but never finishes it</strong> — the clearest in-lesson version of falling behind.`},
     {ic:'✋', html:`<strong>Raises their hand and doesn't get called on</strong> — and stops raising it. <strong>This one is on us.</strong>`},
     {ic:'⏰', html:`<strong>Arrives late, leaves early, or drifts in and out.</strong> Attention is fine; commitment isn't.`},
     {ic:'😞', html:`<strong>Goes quiet or gets frustrated fast</strong> after an error, especially if it's new behaviour.`},
     {ic:'⚡', html:`<strong>Finishes in half the time and then disrupts.</strong> Also a level problem — boredom looks exactly like disengagement.`},
     {ic:'🔁', html:`<strong>Asks the same foundational question again and again.</strong> The level is probably wrong — see Module 5.`}
   ])}
   ${co('co-idea','💡',`<p><strong>The trick is comparison, not judgment.</strong> None of these mean anything in isolation. All of them mean something the moment they're <strong>different from how that child usually is</strong>, or <strong>different from the rest of the group in the same lesson.</strong></p>`)}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">The hand that never gets called</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/12AOW3X9Vgm_cVzeOdjX5HN7Z2j-JV-lK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">In this video, you'll see a student trying to communicate with his tutor via chat, but the tutor doesn't seem to notice him.</div></div>
  `},
  {t:'📅 1.2 · What to notice between lessons', html:`
   <div class="card"><p>Between lessons you have something the live lesson can't give you: the record of whether the child is actually doing the work. Two separate things, and <strong>both matter.</strong></p></div>
   ${iconGrid([
     {ic:'🏫', html:`<strong>Classwork (In The Class)</strong> — what the child completes during the lesson itself. Tells you whether they can follow <strong>while you're there</strong>. When this drops, difficulty or engagement in the room is the problem.`},
     {ic:'🏠', html:`<strong>Homework (At home)</strong> — what the child completes on their own. Tells you whether the course still matters <strong>when you're not there</strong>, and whether the family is behind it. This is the harder, more honest signal.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Watch both. Act on either.</strong></p><p>A child can be fine on classwork and at zero on homework — that's a motivation and family-support problem. A child can be doing homework but failing classwork — that's usually a difficulty or a distraction problem in the lesson. Either one, on its own, is enough to act on. <strong>Do not wait for both to fail.</strong></p>`)}
   ${bigStat('47%',`Of children who end up requesting a refund <strong>attend less than half</strong> of their lessons. Attendance is not a formality — it's the single most visible statement a family makes about whether this course still matters to them.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Based on historical patterns across groups; the exact figure can vary by region.</p>
  `},
  {t:'🔎 1.3 · The mistake almost everyone makes', html:`
   <div class="card"><p>Most tutors look for a <strong>drop</strong> — a moment where things got worse. That instinct misses the majority of cases.</p></div>
   ${co('co-danger','🚨',`<p><strong>Don't look for a drop. Look for a gap.</strong></p>`)}
   ${bigStat('58.6%',`Of refund cases had homework that was <strong>flat, not falling</strong> — the child had already stopped, or never really started. There was no decline to notice.`)}
   ${bigStat('56.9%',`Of cases had <strong>declining</strong> classwork — which is why it's often the earlier visible signal of the two.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Based on historical patterns across groups; the exact figures can vary by region.</p>
  `},
  {t:'💔 1.4 · Why not doing the homework can predict refunds', html:`
   <img src="Images/Image_6.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>This is worth being clear about, because it changes how urgently you treat it.</p>
   <p>A child who doesn't do the work falls behind. A child who is behind feels lost in the lesson. A child who feels lost in the lesson stops wanting to come. The family sees a child who doesn't want to go to class and concludes: <em>"he's not interested"</em> or <em>"this course isn't right for him."</em></p></div>
   ${co('co-idea','💡',`<p>By the time a parent uses those words, they are describing a spiral that started with <strong>three unsubmitted projects.</strong> Missing work isn't only a symptom of a child who has already decided to leave — it's part of what makes them decide.</p>`)}
   ${co('co-idea','📌',`<p><strong>So: a run of missing classwork or homework is a reason to act on its own.</strong> Not something to keep an eye on. Not something to raise only if it gets worse. <strong>Act.</strong></p>`)}
  `},
  {t:'🧩 1.5 · The three patterns', html:`
   <div class="card"><p>When you look back over a child's last several lessons, you'll see one of three shapes. Each one means something different, and each one needs a different response.</p></div>
   ${patternCards([
     {ic:'🐌', title:'The slow slide', desc:'Attendance and work slowly fall away over several lessons; more and more missing; camera off', note:'Classic drifting. <strong>This is the one you can turn around</strong> — the earlier you move, the more likely it is. → Modules 3 and 4'},
     {ic:'🧱', title:'The sudden stop', desc:'Normal, normal, normal — then nothing', note:'Something happened. A schedule clash, an incident, something at home. <strong>Ask. Don\'t assume.</strong> → Module 4'},
     {ic:'✅', title:'Engaged and still leaving', desc:'Attending, participating, work done — and the family still asks to leave', note:'<strong>The cause is not engagement, and not you.</strong> More motivation won\'t fix it. <strong>Find the real reason and route it fast.</strong> → Modules 5 and 6'}
   ])}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">The student who never showed up</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RfFI5FTMg3DBHEiJtoG9DpJyjVoHFv74/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">One of the most critical cases, and one that must be reported right away: a student who hasn't attended since the very first lesson.</div></div>
  `},
  {t:'🚦 1.6 · When you must act', html:`
   <div class="card"><p>You don't need to be certain. You need a threshold, so that "I wasn't sure" stops being a reason to do nothing.</p><p><strong>Act this week if any of these is true:</strong></p></div>
   ${iconGrid([
     {ic:'📉', html:`The child attends <strong>less than half</strong> of their lessons`},
     {ic:'📊', html:`Classwork or homework is <strong>well below the group average</strong> — as a rule of thumb, 15 points or more`},
     {ic:'🤔', html:`Attendance is in the middle — not gone, but not reliable — <strong>and</strong> one of the above is also true`},
     {ic:'0️⃣', html:`<strong>Two or more lessons in a row</strong> with nothing submitted`}
   ])}
   ${co('co-danger','🚨',`<p><strong>And act immediately, regardless of any number, if:</strong> the child has stopped speaking or appearing on camera when they used to · they tried to participate and you didn't get to them · they've told you something is wrong · you have a bad feeling about it. <strong>Your judgment counts as a signal.</strong></p>`)}
  `}
 ],
 ix:{
  title:'Slow slide, sudden stop, or engaged and still leaving?',
  instr:'For each anonymised progress history, pick which pattern it is — then pick the right first move. 70% to unlock Module 2.',
  items:[
   {type:'choice', prompt:'A child\'s attendance and classwork have both been quietly falling for the last five lessons, a little more each time, and the camera has been off for the last two.', opts:['The slow slide','The sudden stop','Engaged and still leaving'], correct:0, fb:'This is the slow slide — classic drifting, and the one you can most likely turn around the earlier you move.'},
   {type:'choice', prompt:'A child was completely normal last lesson — full attendance, camera on, homework done — and simply didn\'t show up this week, with no message.', opts:['The slow slide','The sudden stop','Engaged and still leaving'], correct:1, fb:'This is the sudden stop. Something happened — ask, don\'t assume.'},
   {type:'choice', prompt:'A child has attended every lesson, participates, and submits all their work — and the family has just asked to cancel anyway.', opts:['The slow slide','The sudden stop','Engaged and still leaving'], correct:2, fb:'Engaged and still leaving. The cause isn\'t engagement — it\'s something like level, expectations, schedule or circumstances. More motivation won\'t fix it; find the real reason and route it.'},
   {type:'choice', prompt:'For "the slow slide", what is the right first move?', opts:['Wait a few more lessons to be sure it\'s a real pattern','Act now — this is the one most likely to turn around the earlier you move','Assume it\'s temporary and check back next month'], correct:1, fb:'Slow slides are exactly what earlier action can reverse. Waiting spends the advantage you have.'},
   {type:'choice', prompt:'For "the sudden stop", what is the right first move?', opts:['Assume it\'s nothing and wait for them to come back on their own','Ask — find out what actually happened, rather than guessing','Immediately tell the family their child is falling behind'], correct:1, fb:'A sudden stop has a specific cause. Find out what it is before deciding what to do about it.'},
   {type:'choice', prompt:'For "engaged and still leaving", what is the right first move?', opts:['Give the child extra praise and encouragement to try to keep them motivated','Find out what the real reason is — level, expectations, schedule, circumstances — and route it fast','Conclude nothing can be done since the child was already doing well'], correct:1, fb:'More motivation can\'t fix a cause that was never about motivation. Find out what it actually is and get it to the right person quickly.'}
  ]
 }
},
{id:'m2', numLabel:'Module 2', emoji:'🖥️', color:'var(--blue)',
 title:'Reading the Progress View',
 desc:'Find out, in under two minutes, whether a child in your group is drifting — hands-on, in a BO simulation.',
 obj:'Find out, in under two minutes, whether a child in your group is drifting — and check the two things you should always know before your first lesson with a new student.',
 sections:[
  {t:'👤 2.1 · Before your first lesson with a new student — always', html:`
   <div class="card"><p>One of the most important steps before starting a new group — and one that can prevent many problems later — is reviewing the student's profile and CS comments.</p></div>
   ${iconGrid([
     {ic:'🎂', html:`<strong>Age match.</strong> Whether the child's age matches the course they're placed in.`},
     {ic:'🎯', html:`<strong>Interests.</strong> What this child is into — useful for examples and small talk from lesson one.`},
     {ic:'📝', html:`<strong>Notes from parents or previous tutors.</strong> Especially if the child has transferred from another group.`}
   ])}
   ${co('co-idea','💡',`<p>This information helps you understand how to connect with each student, and to spot potential issues or request changes <strong>before the group even begins.</strong></p>`)}
   <div class="card"><p>In the following simulation, you'll learn how to review this information in BO and use it to prepare for your new group.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Student profile</span><iframe src="Simulacion_BO_M2_Profile.html" title="BO — Student profile" loading="lazy"></iframe></div></div>
  `},
  {t:'📊 2.2 · The Progress view — your weekly 60-second scan', html:`
   <div class="card"><p>Below is exactly what the Progress screen looks like. Follow the steps in the simulation to learn where classwork and homework live, what each colour means, and how to read the pattern.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Progress</span><iframe src="Simulacion_BO_M2_Progress.html" title="BO — Progress" loading="lazy"></iframe></div></div>
   ${co('co-danger','🚨',`<p>Look at what this student's screen is telling you: strong, green <strong>In The Class</strong> scores — but every single <strong>At Home</strong> cell is orange, "not submitted." <strong>Same student, same lessons, opposite story.</strong> They're fine while you're watching; the course has stopped mattering the moment you're not.</p>`)}
   <div class="card"><h4>How to read it in under a minute</h4>
   <ol><li><strong>Scan for runs of zeros.</strong> <strong>Two in a row is enough to act.</strong> A consecutive run is the strongest thing on this screen — much more informative than any single cell.</li>
   <li><strong>Compare the two tabs for the same child.</strong> Strong In The Class, empty At Home → they're with you in the lesson but the course has stopped mattering at home. Weak In The Class, decent At Home → something in the lesson isn't working: difficulty, pace, or attention.</li>
   <li><strong>Compare the child to the rest of the group.</strong> The same numbers mean different things depending on whether everyone is at 30/50 or only this child is.</li>
   <li><strong>Look at where the run starts.</strong> Which lesson did it begin at? Go back to what happened there — that's usually where the answer is.</li>
   <li><strong>Check attendance alongside it.</strong> What you see here is attendance recorded in the back office, not in-lesson presence — read it as "did they come", not "how engaged were they".</li></ol></div>
   ${co('co-danger','🚨',`<p><strong>Do this once a week, for the whole group, not just for the child you're already worried about.</strong> The point of a scan is to find the one you <em>haven't</em> noticed.</p>`)}
   ${co('co-idea','🧭',`<p><strong>Teach a course where homework or classwork happens outside the platform?</strong> The Progress view won't show you anything useful — but the record is missing, not the information. Make it deliberate instead of automatic: ask children to show their work by screen share, use frequent check-ins during independent work, assign homework explicitly out loud, and follow up on it by name next lesson. Same signals, same thresholds — you just have to go and get them yourself.</p>`)}
  `}
 ],
 ix:{
  title:'Reading the scan — quick check',
  instr:'Based on the BO example above, answer these. 70% to unlock Module 3.',
  items:[
   {type:'choice', prompt:'In the example above, this student\'s In The Class scores stayed strong (green) while At Home was "not submitted" (orange) across every lesson. What does this most likely mean?', opts:['A homework/motivation problem — the course has stopped mattering when the tutor isn\'t watching','A classwork/difficulty problem in the lesson itself','Nothing — a single low tab doesn\'t matter if the other one is fine'], correct:0, fb:'Strong In The Class with empty At Home points to motivation or family support at home, not a difficulty in the lesson.'},
   {type:'choice', prompt:'If it were reversed instead — In The Class declining toward zero while At Home stayed reasonable — what would that most likely mean?', opts:['A homework/motivation problem at home','A classwork/difficulty problem — pace, difficulty, or not getting enough attention in the lesson','This student is actually fine, since they\'re still doing homework'], correct:1, fb:'Homework holding up while classwork falls usually points to something in the lesson itself — difficulty, pace, or attention.'},
   {type:'choice', prompt:'What is the strongest single thing to look for when scanning a Progress view?', opts:['The single lowest score anywhere in the grid','A run of two or more zeros (or "not submitted") in a row','Whether the module total looks round'], correct:1, fb:'A consecutive run is far more informative than any single low cell — it\'s the sharpest signal on the whole screen.'},
   {type:'choice', prompt:'Why should you check both In The Class and At home for every child, every week — not just the child you\'re already worried about?', opts:['Because the point of a weekly scan is to find the child you haven\'t noticed yet','Because it\'s a compliance requirement, not because it finds anything new','Because At home is more important than In The Class, so it\'s the only one worth checking'], correct:0, fb:'A scan only earns its keep if it surfaces the child who wasn\'t already on your radar.'},
   {type:'choice', prompt:'Before your very first lesson with a new student, what should you always check?', opts:['Nothing — you\'ll learn what you need to know as you teach them','Their student profile\'s Info and Comments fields','Only their attendance record from their previous tutor'], correct:1, fb:'Two minutes on Info and Comments before the first lesson is the single cheapest, highest-value habit in this training.'}
  ]
 }
},
{id:'m3', numLabel:'Module 3', emoji:'🎬', color:'var(--blue)',
 title:'Acting in the Lesson',
 desc:'Use the lesson itself as the intervention — engagement is the fastest tool you have.',
 obj:'Use the lesson itself as the intervention — because a virtual, optional, after-school class is one a child only comes back to if they found something worth coming back for.',
 sections:[
  {t:'🔌 3.1 · Why engagement carries more weight here', html:`
   <div class="card"><p>Our students aren't required to be here the way they are at school. They're at home, with every distraction one click away, and without the physical presence that holds attention in a real room. <strong>The connection you build in each lesson isn't a nice extra — it's the reason a child decides to come back next week.</strong></p>
   <p>And when a child does start drifting, the lesson is your fastest tool. You don't have to wait for anyone's permission to change how you run it.</p></div>
  `},
  {t:'👋 3.2 · The first minutes decide a lot', html:`
   <div class="card"><p>How a lesson starts sets the tone for everything after it. A child who logs in and feels warmth from the greeting is in a different frame of mind from one dropped straight into "open the activity."</p></div>
   ${doavoid(
     ['Greet with real energy: <em>"so glad to see you today"</em>','Ask something brief and personal before the content','Say what today\'s goal is, and sound like you mean it','Notice out loud who\'s been away: <em>"good to have you back"</em>'],
     ['Going straight into content with no greeting','Sounding rushed or stressed at the start','Not explaining what you\'re about to do, or why','Letting a returning child slip in unmentioned']
   )}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">A flat opening</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1GyQV2tEQq3OuDPfFI0NZTQRjWhg_9Rri/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">A warm opening</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RqXcQLKBiWEhV97ZasJGIFuJhB8yU0Dh/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'💬 3.3 · Feedback that motivates instead of just correcting', html:`
   <div class="card"><p>A repeated generic compliment — <em>"good", "nice"</em> — loses its power fast, and quietly sends the opposite message: that you're not really looking at the child's work.</p></div>
   ${co('co-idea','🔁',`<p><strong>Highlight → Ask → Activate</strong></p>
   <ol><li><strong>Highlight</strong> something specific the child <em>decided</em> to do, and say why it works.</li>
   <li><strong>Ask</strong> about it with real curiosity, treating them as the authority on their own work.</li>
   <li><strong>Activate</strong> by offering a genuine choice about what comes next.</li></ol>
   <p>Instead of <em>"Great job!"</em> → <em>"I loved that you had the character jump right there — did you plan that from the start, or did it come to you while you were building the scene? Do you want to give this character a story, or does it feel finished as it is?"</em></p>`)}
  `},
  {t:'✋ 3.4 · Making sure every child gets a real turn', html:`
   <div class="card"><p>Children come back because they found a place where they feel seen and part of something. And the fastest way to lose one is for them to try to participate and get nothing back.</p></div>
   ${co('co-danger','🚨',`<p><strong>"Rotate your attention" is not enough.</strong> Every tutor believes they're doing it. <strong>Make it countable.</strong></p>
   <ul><li>Keep the participant list where you can see it, and <strong>tick each name as they get a real turn</strong> — not a glance, an actual exchange.</li>
   <li><strong>Halfway through the lesson, check who has no tick yet.</strong> Go to them next.</li>
   <li>Use the chat and reactions as a genuine second channel, not a consolation prize: <em>"drop your idea in the chat and I'll read them all out."</em></li>
   <li><strong>Anyone who ends the lesson with an unanswered question gets a written answer within 24 hours.</strong></li>
   <li>If the group is simply too large for this to be arithmetically possible, <strong>say so to your Team Leader.</strong> That's a signal to route, not a personal failing.</li></ul>`)}
   ${doavoid(
     ['Name specific wins: <em>"Sofia, your logic came out really clean there"</em>','Use chat and reactions so even the quietest can take part','Celebrate the effort: <em>"you tried three approaches — that\'s thinking like a programmer"</em>','Move around the group during independent work'],
     ['Generic praise aimed at the whole group equally','Only paying attention to whoever finishes first','Treating mistakes as bad, or giving answers before they\'ve thought','The same pace for everyone, boring some and rushing others']
   )}
  `},
  {t:'🧩 3.5 · The same advice doesn\'t work on every child', html:`
   <div class="card"><p>Two children stuck on the identical exercise can need opposite things from you. Recognising a few patterns, and having a different move ready for each, is what turns a generic lesson into one where each child actually wants to be.</p></div>
   ${patternCards([
     {ic:'🙈', title:'Shy', desc:'Camera on but rarely speaks; short answers; never volunteers; shrinks when put on the spot', note:'Low-pressure ways in first — chat, reactions, a thumbs-up. Invite <strong>directly and privately</strong>.'},
     {ic:'😣', title:'Frustrates easily', desc:'"I can\'t do this" arrives fast; abandons at the first mistake; visibly upset by small errors', note:'Smaller steps. Normalise mistakes out loud. Check in <strong>before</strong> frustration builds.'},
     {ic:'🎯', title:'Perfectionist', desc:'Redoes the same thing repeatedly; reluctant to submit anything "unfinished"', note:'Praise the decision and the attempt. Give explicit permission to submit an imperfect draft.'},
     {ic:'⚡', title:'Bores quickly', desc:'Finishes fast; distracts once done; "is that all?"', note:'A real extension, always ready. Consider a mentor role. <strong>Never let them sit idle.</strong>'}
   ],2)}
  `},
  {t:'🎂 3.6 · What motivates changes with age', html:`
   <div class="two-col">
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧒</span>Younger children (roughly 6–9)</h4>
   <ul><li>Motivation comes from connection and play, not long-term goals.</li>
   <li>Attention spans are short. Your energy holds them more than the content does.</li>
   <li>Imaginative framing works — a mission, a character, a story.</li>
   <li>Their specific interests are a direct line to their attention.</li>
   <li>Mistakes feel emotionally bigger. Reassurance needs to be immediate.</li>
   <li>They need more repetition and hands-on demonstration before trying alone.</li></ul></div>
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧑</span>Older children (roughly 10–14+)</h4>
   <ul><li>Motivation shifts to competence and relevance — and knowing <em>why</em> it matters.</li>
   <li>Sensitive to being talked down to. Being treated as capable matters most.</li>
   <li>Feedback on their <strong>reasoning and decisions</strong> lands better than effort alone.</li>
   <li>Social dynamics matter more — peers affect whether they'll risk a question.</li>
   <li>Can focus longer, but disengage fast if the pace drags or feels babyish.</li>
   <li>Autonomy matters — a choice in how to approach a task pays off.</li></ul></div>
   </div>
   ${co('co-idea','💡',`<p>The tools are the same at every age — a warm start, specific feedback, room to take part. What changes is <strong>what counts as motivating</strong>: younger children need to feel this is fun and that they matter; older ones need to feel it's worth their time and that they're actually good at it.</p>`)}
  `},
  {t:'🔧 3.7 · When the technology breaks', html:`
   <div class="card"><p>Things will break — a frozen screen, a microphone that won't connect. What decides whether it wrecks the lesson isn't the fault; it's how the adult reacts.</p></div>
   ${co('co-cute','🫂',`<p><strong>The first move is emotional, not technical.</strong> React calmly and normalise it out loud. A calm adult tells a child there's nothing to worry about, and the group takes its emotional cue from you. Only once that's settled does troubleshooting make sense.</p>`)}
  `}
 ],
 ix:{
  title:'Trash or treasure — lesson habits',
  instr:'Sort each habit into the zone it belongs in: habits that build a lesson children come back to, or habits that quietly cost you a child. 70% to unlock Module 4.',
  items:[
   {type:'sort', prompt:'', card:'Ticking off each child\'s name as they get a real turn, and checking at the halfway point who has none yet', zones:[{label:'🌱 Builds the lesson', fb:'Correct — this is exactly what turns "rotate your attention" from an intention into something real.'},{label:'🗑️ Costs you a child', fb:'Not quite — tracking real turns is a treasure habit, not a trash one.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Praising the whole group with the same "great job, everyone!" at the end of every lesson', zones:[{label:'🌱 Builds the lesson', fb:'Not quite — generic, repeated praise is exactly the kind of habit that quietly stops motivating.'},{label:'🗑️ Costs you a child', fb:'Correct — repeated generic praise loses its power fast and reads as not really looking at the work.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'When something breaks technically, reacting calmly and normalising it out loud before troubleshooting', zones:[{label:'🌱 Builds the lesson', fb:'Correct — the first move after a tech failure is emotional regulation, not the fix itself.'},{label:'🗑️ Costs you a child', fb:'Not quite — staying calm and normalising the glitch is exactly the right first move.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Giving every child in the group the exact same pace and the exact same task, regardless of how they\'re doing', zones:[{label:'🌱 Builds the lesson', fb:'Not quite — a single fixed pace for the whole group is what bores some and rushes others.'},{label:'🗑️ Costs you a child', fb:'Correct — the same pace for everyone bores some and rushes others; it\'s one of the clearest disengagement drivers.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Leaving an unanswered question from the chat unaddressed because the lesson ran out of time', zones:[{label:'🌱 Builds the lesson', fb:'Not quite — an unanswered question left hanging is one of the clearest ways a child concludes they don\'t matter here.'},{label:'🗑️ Costs you a child', fb:'Correct — anyone who ends a lesson with an unanswered question should get a written answer within 24 hours.'}], correctZone:1, fb:''}
  ]
 }
},
{id:'m4', numLabel:'Module 4', emoji:'📞', color:'var(--blue)',
 title:'Acting Between Lessons',
 desc:'The check-in that actually works, absence follow-up, and keeping the family in the loop.',
 obj:'Do the things between lessons that keep a drifting child from becoming a refund request: the check-in, absence follow-up, and keeping the family in the loop.',
 sections:[
  {t:'🏠 4.1 · The homework routine that actually works', html:`
   <div class="card"><p>Homework doesn't stay submitted by accident. Four small habits, every time, are what keep it from quietly dropping to zero.</p></div>
   ${stepFlow([
     {ic:'🗣️', label:'1. Explain — what, and why it matters, out loud'},
     {ic:'⏰', label:'2. Remind — a nudge before the deadline'},
     {ic:'🔦', label:'3. Highlight — name what\'s missing, specifically'},
     {ic:'📝', label:'4. Review — a real comment, not just a mark'}
   ])}
   ${iconGrid([
     {ic:'🗣️', html:`<strong>Explain.</strong> When you set it, say what it is and why it matters for next lesson — not just "do exercises 1 to 5."`},
     {ic:'⏰', html:`<strong>Remind.</strong> A short reminder before the deadline, especially for younger children — a message, or a moment at the end of the previous lesson.`},
     {ic:'🔦', html:`<strong>Highlight.</strong> If it's missing, say so specifically and by name next lesson — not a generic "some of you didn't do your homework."`},
     {ic:'📝', html:`<strong>Review.</strong> Leave <strong>a real comment the family can read</strong> — what was done well, what wasn't, one concrete next step. A silent checkmark tells nobody anything.`}
   ])}
   ${co('co-idea','💡',`<p>This is the routine, every week, for every child — not just the ones you're already worried about. It's also what makes a zero mean something when you do see one: you know it isn't because nobody explained, reminded, or noticed.</p>`)}
  `},
  {t:'☎️ 4.2 · The check-in that actually works', html:`
   <div class="card"><p>When you've spotted a signal from Module 1, this is the move. Done well it often ends the problem on its own.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Name the specific thing you noticed.</strong> Vague concern reads as vague. <em>"You didn't get to the last two projects"</em> — not <em>"is everything okay?"</em>`},
     {ic:'🚧', html:`<strong>Ask about the obstacle, not the attitude.</strong> <em>"What got in the way?"</em> — not <em>"why aren't you trying?"</em> One invites an answer; the other invites a defence.`},
     {ic:'🤫', html:`<strong>Never in front of the group.</strong> A private message, the chat, or the last minute of the lesson alone.`}
   ])}
   ${co('co-idea','💡',`<p>Then <strong>follow up two lessons later</strong>, whatever happened. A check-in that isn't followed up teaches the child that you noticed but didn't really mind.</p>`)}
   <div class="card"><p>One of the ways we can bring back a demotivated student is through homework review — and <strong>how</strong> we do it. In the two videos below, watch two very different cases: one where the tutor ignores that a student didn't do their homework, and one where the tutor brings the student back in, dynamically, making them feel part of the group.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">The tutor who doesn't motivate</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1zwbSiLXBj9mcqhKsFKNJriwSppbcEY5B/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">The tutor who motivates</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1m2m_RRNTf5zMh2-1NmExvEMGZX0DPIaK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'📵 4.3 · When a child misses a lesson', html:`
   <div class="card"><p>Sending the recording is not a catch-up plan. <strong>Two missed lessons early in a course can end it</strong>, because the child comes back into a room where everyone else can do something they can't — in front of the group.</p></div>
   ${timeline([
     {ic:'📅', label:'The same day', items:[
       '<strong>Write to the family</strong>, warmth first: <em>"we missed her today — is everything alright?"</em> Empathy before anything else.',
       '<strong>Send the recording plus the one thing that matters.</strong> Not "watch the hour" — point to the one important part.'
     ]},
     {ic:'⏳', label:'Before the next lesson', items:[
       '<strong>Five minutes one-to-one</strong>, or a short written walkthrough of the single concept they need to rejoin — one concept, not the whole lesson.'
     ]},
     {ic:'🏫', label:'In the next lesson', items:[
       '<strong>Give them an early, easy, visible win</strong>, so they come back feeling capable rather than behind.',
       '<strong>Show them you noticed they were away</strong> — briefly and warmly. Being missed is the point.'
     ]},
     {ic:'🚩', label:'If they\'ve missed two or more', items:[
       '<strong>Tell your Team Leader, and leave a comment in BO so Client Service can see it too.</strong> This is the threshold for discussing an extra catch-up lesson internally. You raise it — you don\'t offer it to the family, and you don\'t rule it out either.'
     ]}
   ])}
  `},
  {t:'💌 4.4 · Keeping the family with you', html:`
   <img src="Images/Image_3.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Most families who leave were never told anything good. They heard from us at enrolment, and then not again until there was a problem.</p></div>
   ${checkbox([
     `<strong>Write something specific after a good lesson.</strong> Once. It doesn't need to be long: <em>"she worked out the loop on her own today — I wanted you to know."</em> This single habit changes how a family reads everything that comes later.`,
     `<strong>When a child comes back after an absence or a difficulty, tell the family about the win.</strong>`,
     `<strong>If you've raised something internally, tell the family you've raised it</strong> — and roughly when they'll hear. Silence after a problem does more damage than the problem.`,
     `<strong>Be available for questions about the learning.</strong> A parent who wants to talk about how their child is getting on should find you responsive.`
   ])}
   ${co('co-danger','⛔',`<p><strong>And still: talk about the learning, hand over the action.</strong> No promises about groups, schedules, levels, packages, refunds or extra lessons — those aren't yours to give, or to refuse.</p>`)}
  `}
 ],
 ix:{
  title:'Pick the message',
  instr:'For each scenario, pick the right message. 70% to unlock Module 5.',
  items:[
   {type:'choice', prompt:'<strong>Scenario:</strong> a child has submitted nothing for the last two lessons, but is still attending normally. Which message to the <strong>child</strong> is right here?', opts:[
     '"Is everything okay? You seem a bit off lately."',
     '"You haven\'t submitted the last two projects, and that\'s not like you — what got in the way?"',
     '"Why haven\'t you been doing your work? You need to keep up."'
   ], correct:1, fb:'Naming the specific thing you noticed, and asking about the obstacle rather than the attitude, is what actually opens a conversation instead of inviting a defence or a shrug.'},
   {type:'choice', prompt:'<strong>Same scenario:</strong> the child has submitted nothing for two lessons, still attending normally. Which message to the <strong>family</strong> is right?', opts:[
     '"I\'ve noticed [child] hasn\'t submitted work in the last two lessons — I\'ve checked in with them and wanted to keep you posted."',
     '"[Child] isn\'t trying and may need to move to an easier group — can we discuss options?"',
     '"Everything is fine, just wanted to say hello!"'
   ], correct:0, fb:'This tells the family about the child\'s progress and shows you\'re on it — without suggesting a group change, a level change, or any option, which isn\'t yours to raise with the family.'},
   {type:'choice', prompt:'<strong>New scenario:</strong> a child missed a lesson yesterday with no message beforehand. What\'s the right same-day move?', opts:[
     'Send the recording link with no message and wait for them to catch up on their own',
     'Write to the family with warmth first ("we missed her today, is everything alright?"), then send the recording plus the one part that matters most',
     'Wait until the next lesson to mention anything, so as not to make it a bigger deal than it is'
   ], correct:1, fb:'Warmth first, then a targeted recap — not just a dropped link and not silence — is the actual catch-up plan, not just "sending the recording."'}
  ]
 }
},
{id:'m5', numLabel:'Module 5', emoji:'🧩', color:'var(--blue)',
 title:'The Eight Situations',
 desc:'For each of the eight things that actually drive families away: what to notice, what to do, and who to tell.',
 obj:'For each of the eight things that actually drive families away, know what to notice, what to do in the lesson, what to do outside it, and who to tell.',
 sections:[
  {t:'', html:`
   <h3 class="acc-big-title">🧩 The 8 most common situations for a refund</h3>
  `},
  {t:'', html:`${accItem('😣 5.1 · The work is too hard', `
   <img src="Images/Image_5.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`A student may show several signs that they are struggling. They might say "I can't do this" early and often, give up after making a mistake, or start their classwork without finishing it. They may also become quieter, stop sharing their screen, or repeatedly ask the same basic questions. Sometimes, a student falls behind after missing just one class and never fully catches up. Another warning sign is when their classwork remains weak even though they continue attempting their homework.`)}
   ${stepIconBlock('⚡','Adapt — next lesson, no permission needed', `<ul><li>Break the task into small wins (10 min)</li><li>Give a simpler, explicit target, out loud</li><li>Normalise mistakes; check in <strong>before</strong> frustration builds</li><li>Still stuck after 2 lessons? Book a session with your <strong>Regional Mentor</strong> for teaching ideas</li></ul>`)}
   ${stepIconBlock('🗣️','Sync — TL + BO Tutors\' Evaluation, this week', `<ul><li>Report what you see and how the child feels</li><li>Ask for a profiling/leveling lesson if the gap is real</li><li>Never raise the level question with the family yourself</li></ul>`)}
   ${stepIconBlock('👪','Family', `<p>Only what's yours: <em>"extra support in the lessons, flagged with my team."</em> Nothing about levels. Follow up in 2 lessons.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Already got the refund request for this reason?</strong> Go straight to Module 7 — the save attempt starts in your very next lesson with this child.</p>`)}
  `)}
  ${accItem('😴 5.2 · The work is too easy', `
   <img src="Images/Image_7.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`A student may finish their work in half the expected time and ask, "Is that all?" They might become distracted or distract others once they finish, or mention that they already know the material. Another important sign is when a student shows high ability but consistently does not do their homework. Boredom can look exactly like disengagement in the numbers, so it's important to look beyond appearances.`)}
   ${stepIconBlock('⚡','Adapt — immediately', `<ul><li>Real extension, same skill, harder brief</li><li>Small mentor role in the group</li><li>Give choice; never let them sit idle</li></ul>`)}
   ${stepIconBlock('🗣️','Sync — TL + BO Tutors\' Evaluation, this week', `<p>Say exactly: <em>"level upgrade, not a motivation problem."</em> Ask for a profiling/level-assessment lesson.</p>`)}
   ${stepIconBlock('👪','Family', `<p>Only: <em>"picking this up fast, extra challenges, flagged with my team."</em> Follow up in 2 lessons.</p>${co('co-ok','✅',`<p>This one gets fixed often — but only if somebody said something.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Already got the refund request for this reason?</strong> Go straight to Module 7 — the save attempt starts in your very next lesson with this child.</p>`)}
  `)}
  ${accItem('🧩 5.3 · A special educational need', `
   <img src="Images/Image_8.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Children arrive with autism, ADHD, dyslexia, sensory needs, anxiety — and sometimes giftedness, which is a special educational need too, and looks very different from ordinary boredom. It may be in the profile, mentioned once by the family, or never said aloud. Families often give a different first explanation — <em>"he's lost interest"</em>, <em>"it's not for him"</em> — and the real reason only comes out when someone asks properly.</p></div>
   ${noticeLine(`A profile note (Module 2.1) · sensory overwhelm · focus fading early · big reactions to small errors · distress at change · slow reading/writing · high ability with unstable motivation.`)}
   ${stepIconBlock('⚡','Adapt — this is where most of the work is, and it\'s all yours', `<ul><li>Shorter units, predictable structure, <strong>warn every transition</strong></li><li>Written + spoken instructions; camera optional</li><li>Adapt the task itself; protect routine above all</li><li>Your <strong>Regional Mentor</strong> can help you build a plan for this specific child</li></ul>${co('co-danger','🚨',`<p>Give it real effort first. But if the gap stays too big, <strong>escalate straight away</strong> — that's not a failure.</p>`)}`)}
   ${stepIconBlock('🗣️','Sync — TL immediately + BO Tutors\' Evaluation', `<p>If one-to-one or an SEN-experienced tutor would help, <strong>recommend it — don't offer it.</strong></p>`)}
   ${stepIconBlock('👪','Family — carefully', `<p>Check the profile first (2.1); ask gently if nothing's on file. Write what you learn into BO Comments.</p>${co('co-danger','⛔',`<p>Never: <em>"he can't keep up"</em> or anything that reads as a diagnosis. Follow up every 2 lessons, always after any change.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Already got the refund request for this reason?</strong> Go straight to Module 7 — the save attempt starts in your very next lesson with this child.</p>`)}
  `)}
  ${accItem('📐 5.4 · The child, age or format doesn\'t fit', `
   <img src="Images/Image_9.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`A student may struggle because they do not yet have the reading skills required for the material or cannot stay focused for the full lesson. In some cases, the course may require skills that are well beyond their age or current level. Other barriers may include a family's difficulty adapting to an online learning format or a language barrier that was not identified earlier. These signs may indicate that the issue is not engagement, but rather a mismatch between the student's needs and the learning environment.`)}
   ${stepIconBlock('⚡','Adapt', `<p>Try everything — shorten, simplify, more demonstration, more 1:1 attention. Know the ceiling: a child who can't yet read can't be taught through a reading-heavy course.</p>`)}
   ${stepIconBlock('🗣️','Sync — TL + BO Tutors\' Evaluation', `<p>Say exactly: <em>"placement conversation, not motivation."</em> Route it — it's not your call to make.</p>`)}
   ${stepIconBlock('👪','Family — only if TL asks you to', `<p>Several options may exist, but <strong>you don't present them.</strong> Follow the exact message your TL gives you, or stay out of it.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Already got the refund request for this reason?</strong> Go straight to Module 7 — the save attempt starts in your very next lesson with this child.</p>`)}
  `)}
  ${accItem('👥 5.5 · The group is too crowded and the child never gets a turn', `
   <img src="Images/Image_10.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${co('co-idea','🎯',`<p><strong>This is the one situation on this list that is directly about tutor behaviour — and therefore the one you can fix fastest.</strong></p>`)}
   <div class="card"><p>A child who raises their hand, waits, doesn't get called on, and is left with unanswered questions will conclude that they don't matter in this group. It can take as little as two lessons.</p></div>
   ${noticeLine(`Watch for children who stop raising their hands, questions in the chat that go unanswered, or the same two or three students answering every time. Also pay attention to students who go through an entire lesson without a single interaction with you.`)}
   ${stepIconBlock('⚡','Adapt — this is a skill, and it can be learned', `<ul><li>Turn-tracking (3.4): visible list, tick per turn, mid-lesson check</li><li>Shorter segments, chat used deliberately, pairs/small tasks</li><li>Answer any unanswered question in writing within 24h</li><li>This is exactly what a <strong>Regional Mentor</strong> session is for — ask for one if it isn't clicking</li></ul>`)}
   ${stepIconBlock('🗣️','Sync — TL', `<p>Only after genuinely trying: group size, format, who's missing out, what you changed. A smaller group is possible, but only if TL knows.</p>`)}
   ${stepIconBlock('👪','Family — only if agreed with TL', `<p>Don't raise a group change yourself. You may warmly say you've noticed and you're changing how you run the group — that part is yours.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Already got the refund request for this reason?</strong> Go straight to Module 7 — the save attempt starts in your very next lesson with this child.</p>`)}
  `)}
  ${accItem('🔀 5.6 · A tutor, group or schedule change landed badly', `
   <img src="Images/Image_11.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Continuity matters far more than it looks, and it matters most for the children who are already most fragile.</p></div>
   ${co('co-ok','✅',`<p><strong>Good news worth saying out loud: this one is usually solvable.</strong> We have plenty of tutors and plenty of groups — there is almost always another arrangement to be found, but only if the problem is named quickly, while the family still wants a solution rather than an exit. The three things that decide the outcome: transparency, speed, and everyone in the loop — the family, your TL, Client Service, and a comment in BO.</p>`)}
   <div class="card"><h4 style="margin-bottom:10px">👋 Leaving</h4>${iconGrid([
     {ic:'📝', html:`<strong>Handover in BO Comments:</strong> special needs, what motivates them, what's stuck, family status.`},
     {ic:'🗣️', html:`<strong>Ask TL how</strong> to communicate it, and to whom — agree it first, then do exactly that.`}
   ])}</div>
   <div class="card"><h4 style="margin-bottom:10px">🙋 Arriving</h4>${iconGrid([
     {ic:'📖', html:`<strong>Read the handover</strong> first.`},
     {ic:'💬', html:`<strong>Name the change</strong>, briefly and positively.`},
     {ic:'🏷️', html:`<strong>Learn every name</strong> lesson one.`},
     {ic:'⏸️', html:`<strong>Change nothing else</strong> for 2 lessons.`}
   ])}</div>
   <div class="card"><p>For a routine, planned handover, in most regions it's the tutor — not Client Service — who announces the change directly in the group chat and introduces themselves. Client Service typically only steps in for unexpected changes or delicate cases.</p></div>
   ${stepIconBlock('🗣️','Sync — TL', `<p>Immediately if any child has a special educational need, or if a new schedule doesn't work for a family.</p>`)}
   ${stepIconBlock('👪','Family — as the new tutor, warmly', `<p style="font-style:italic">"Hello! I'm [name], taking over your group — I've read up on [child] so we pick up right where they left off."</p><p>Enthusiasm only — not the reason for the change.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Already got the refund request for this reason?</strong> Go straight to Module 7 — the save attempt starts in your very next lesson with this child.</p>`)}
  `)}
  ${accItem('⚠️ 5.7 · Something on our side failed', `
   <img src="Images/Image_12.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>A lesson lost to a platform failure, a cancellation, a technical problem that wasted most of the hour.</p></div>
   ${co('co-danger','🚨',`<p><strong>The worst thing a tutor can say here is "that's not possible."</strong> A child misses lessons because our platform failed, the family asks for a make-up lesson, the tutor says it can't be done — the family loses trust and asks for a refund. <strong>It was never the tutor's decision to make.</strong> Two missed or compromised lessons is the trigger most regions use to open the conversation about an extra catch-up lesson, though your TL always makes the final call. Starting that discussion is your job. Closing it isn't.</p>`)}
   ${stepIconBlock('⚡','Adapt', `<p>Stay calm, normalise it (3.7), protect the mood, send the recording, run the catch-up plan (4.3).</p>`)}
   ${stepIconBlock('🗣️','Sync — TL same day', `<ul><li>Discuss an extra catch-up lesson</li><li>Loop in Client Service if unhappy or commercial</li><li>Submit a BO Tutors' Evaluation</li></ul>`)}
   ${stepIconBlock('👪','Family — agree the message with TL first, same day', `<p><em>"I've raised it with my team and we'll come back to you"</em> — then make sure someone does, today.</p>${co('co-danger','⛔',`<p>Never promise the extra lesson, never rule it out. Follow up: give them the first real turn next lesson.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Already got the refund request for this reason?</strong> Go straight to Module 7 — the save attempt starts in your very next lesson with this child.</p>`)}
  `)}
  ${accItem('📢 5.8 · "This isn\'t what we were told"', `
   <img src="Images/Image_13.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>A parent tells you the level, the package, the schedule or the course itself isn't what they understood they were buying. It's the most uncomfortable conversation a tutor has, and the easiest one to make worse.</p>
   <p><em>Expectations set before the course started are behind a large share of all refund requests — more than any other single cause.</em></p></div>
   ${stepIconBlock('⚡','Adapt', `<p>Nothing changes for the child — keep teaching well.</p>`)}
   ${stepIconBlock('🗣️','Sync — TL + CS, before replying to anything', `<ul><li>Take it to your TL the same day</li><li>Loop in Client Service — they own what happens next</li><li>Write the family's words verbatim into a BO Tutors' Evaluation</li></ul><p>Ok to acknowledge receipt: <em>"thank you, I'm taking this to my team and I'll come back to you."</em> Not an answer. <span style="font-size:12.5px">(If what they want is small — an extra lesson — that's often something you and your TL resolve directly, without Client Service. Ask your TL which applies.)</span></p>`)}
   ${stepIconBlock('👪','Family — only with TL clearance', `<ol><li>Acknowledge, no blame</li><li>Show you care about the child</li><li>Hand over to Client Service cleanly</li></ol>${co('co-danger','⛔',`<p>Never: blame a colleague, argue, or offer solutions yourself.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Already got the refund request for this reason?</strong> Go straight to Module 7 — the save attempt starts in your very next lesson with this child.</p>`)}
  `)}
  `}
 ],
 ix:{
  title:'Eight situations, eight first moves',
  instr:'For each anonymised situation, pick which of the eight categories it is, then pick the correct first move. 70% to unlock Module 6.',
  items:[
   {type:'choice', prompt:'"He says he can\'t do it, starts crying at the first mistake, and has stopped finishing the classwork." — which situation is this?', opts:['The work is too hard','The work is too easy','A special educational need'], correct:0, fb:'Repeated early failure and abandoning at the first mistake is the classic profile of work that\'s too hard.'},
   {type:'choice', prompt:'The right first move for that situation is —', opts:['Message the family suggesting a level change','Break the task into smaller steps and give a reduced, explicit target — starting this lesson','Keep going as planned; the level isn\'t something you can adjust'], correct:1, fb:'Adapt the task immediately yourself — the level conversation, if needed, goes to your Team Leader and Client Service, never straight to the family.'},
   {type:'choice', prompt:'"He finishes in a third of the time, then starts distracting the child next to him. No homework in three weeks." — which situation is this?', opts:['The work is too easy','A special educational need','Family circumstances'], correct:0, fb:'Fast finishing plus disruption plus zero homework is boredom from a level that\'s too easy — it looks like disengagement but isn\'t.'},
   {type:'choice', prompt:'The right first move for that situation is —', opts:['Give a real extension tied to the same skill, right away, and report it as a possible level upgrade','Report it and wait for the level review before changing anything','Assume he\'s simply not motivated and encourage him more'], correct:0, fb:'Both halves are required here: adapt now so he isn\'t bored for weeks, and report now so the level itself gets reviewed.'},
   {type:'choice', prompt:'"The family mentioned at the Trial Class that he has ADHD, but it was never written anywhere and no tutor has adapted for it." — which situation is this?', opts:['The group is too crowded','A special educational need','Something on our side failed'], correct:1, fb:'This is exactly the special-educational-need case that gets missed most — the information existed, it just never reached the lesson.'},
   {type:'choice', prompt:'The right first move for that situation is —', opts:['Wait for an official diagnosis before changing anything','Adapt the lesson immediately — shorter units, predictable structure, warned transitions — and sync with your Team Leader and Client Service, plus a comment in BO','Tell the family their child may not be suited to this format'], correct:1, fb:'You adapt everything you can yourself, right away, and you also make sure it\'s on record so the next tutor and Client Service know.'},
   {type:'choice', prompt:'"Two children in my lively group of ten haven\'t had a real exchange with me in three lessons, and one has stopped raising her hand." — which situation is this?', opts:['The child, age or format doesn\'t fit','The group is too crowded and the child never gets a turn','This isn\'t what we were told'], correct:1, fb:'This is squarely a group-management issue — and the one situation on the list that\'s directly about tutor behaviour.'},
   {type:'choice', prompt:'The right first move for that situation is —', opts:['Report the group size to your Team Leader and wait for a decision before changing anything','Change how you run this specific group — track turns, use chat deliberately, restructure segments — and escalate only if it still isn\'t enough','Focus on the children who do participate, since they\'re clearly more engaged'], correct:1, fb:'This is a skill you can apply immediately. Escalate because you\'ve genuinely tried and the gap is still too big — not instead of trying.'},
   {type:'choice', prompt:'"A parent says they were told this would be one-to-one lessons, not a group of eight." — which situation is this?', opts:['A tutor, group or schedule change landed badly','This isn\'t what we were told','The work is too hard'], correct:1, fb:'A mismatch between what was promised and what\'s being delivered is exactly "this isn\'t what we were told" — the most sensitive of the eight.'},
   {type:'choice', prompt:'The right first move for that situation is —', opts:['Explain how group lessons work and why they\'re pedagogically valuable','Acknowledge receipt, then take it to your Team Leader and Client Service the same day, before replying properly — and record the family\'s words verbatim in BO','Apologise for the mix-up and offer to look into moving them to one-to-one'], correct:1, fb:'Answering on your own — even reasonably — is how tutors accidentally confirm a complaint or hint at something we can\'t deliver. Sync first, always.'}
  ]
 }
},
{id:'m6', numLabel:'Module 6', emoji:'🧭', color:'var(--blue)',
 title:'Who to Tell, and How Fast',
 desc:'Turn everything above into something that actually happens — the routing map and the five rules.',
 obj:'Turn everything above into something that actually happens — by knowing, without having to think about it, who to tell and how quickly.',
 sections:[
  {t:'⏱️ 6.1 · Speed is the whole thing', html:`
   <div class="card"><p>Every situation in Module 5 has the same shape: it's fixable early and expensive late. A wrong level caught at lesson three gets sorted. The same wrong level at lesson fifteen has already become <em>"he's not interested any more"</em> — and by then the family has stopped believing us.</p></div>
   ${co('co-idea','💡',`<p><strong>You are the bridge between the lesson and the people who can change the child's situation. A bridge is only worth anything if things cross it quickly.</strong></p>`)}
  `},
  {t:'🗺️ 6.2 · The routing map', html:`
   <div class="tbl-full"><div class="card"><table>
   <tr><th>🔎 What you noticed</th><th>① In the lesson</th><th>② Between lessons</th><th>③ Who you tell + BO</th><th>④ The family</th><th>⏱️ How fast</th></tr>
   <tr><td><strong>Attendance under half</strong>, or work well below the group</td><td>Give a real turn and an achievable win</td><td>Private check-in with the child</td><td>Team Leader if two more lessons pass with no change</td><td>Short, warm message — yours to send</td><td>The same week</td></tr>
   <tr><td><strong>Two+ lessons, nothing submitted</strong></td><td>Check work live by screen share; reduce the target</td><td>Check-in; explain next homework properly and follow up</td><td>Team Leader if it continues</td><td>Message about progress — yours to send</td><td>The same week</td></tr>
   <tr><td><strong>Work too hard</strong></td><td>Smaller steps, reduced target, adapt the task, normalise errors</td><td>Written walkthrough of the missing concept</td><td><strong>Team Leader + Tutors' Evaluation in BO</strong> — request a profiling/leveling lesson if needed</td><td>Only what your TL clears. Never the level or options</td><td>The same week</td></tr>
   <tr><td><strong>Work too easy</strong></td><td>Real extension, task adapted upward, mentor role, never idle</td><td>Keep a next-level task ready</td><td><strong>Team Leader + Tutors' Evaluation in BO</strong> — request a profiling/leveling lesson if needed</td><td>Only what your TL clears. Never the level or options</td><td>The same week</td></tr>
   <tr><td><strong>Special educational need</strong>, noted or suspected</td><td>Shorter units, predictable structure, warn before transitions, adapt tasks</td><td>Note what works and what doesn't</td><td><strong>Team Leader + Tutors' Evaluation in BO.</strong> Ask about 1:1 if the gap is big</td><td>Asking what helps: yours, carefully. Format/group/1:1: never floated by you</td><td>Before next lesson · immediately if the gap is too big</td></tr>
   <tr><td><strong>Age or format doesn't fit</strong></td><td>Simplify, demonstrate more, more attention in the lesson</td><td>Be honest about the ceiling</td><td><strong>Team Leader + Tutors' Evaluation in BO</strong> — say "placement, not motivation"</td><td>Only if your TL asks you to</td><td>The same week</td></tr>
   <tr><td><strong>Child never gets a turn</strong></td><td>Turn-tracking; tailor your approach; adapt a task for the child who needs it</td><td>Written answers within 24h to anything unanswered</td><td>Team Leader, if it can't be closed in the room</td><td>Your own teaching changes: yours. A group change: never from you</td><td>The same week</td></tr>
   <tr><td><strong>Tutor/group/schedule change</strong></td><td>Name it, normalise it, change nothing else for two lessons</td><td>Handover written into BO Comments</td><td><strong>Team Leader</strong> — immediately if any child has a special need, or a schedule doesn't work. Client Service only for unexpected/delicate cases</td><td>As the new tutor: warm, enthusiastic. Not why it happened, not schedules</td><td>Before the handover lesson</td></tr>
   <tr><td><strong>Two lessons compromised</strong> — platform failure, cancellation, absence</td><td>Stay calm, protect the mood</td><td>Recording + the one part that matters; catch-up plan</td><td><strong>Team Leader same day — starts the extra-lesson discussion (two lessons is the trigger most regions use).</strong> Client Service if unhappy · Tutors' Evaluation in BO</td><td>Same day — agree wording with your TL first</td><td>Same day</td></tr>
   <tr><td><strong>"This isn't what we were told"</strong></td><td>Nothing changes for the child — keep teaching well</td><td>—</td><td><strong>Team Leader + Client Service, before you reply · family's words verbatim in a Tutors' Evaluation</strong></td><td>Acknowledge receipt only. Real reply after TL clearance — no options from you</td><td>Same day</td></tr>
   <tr><td><strong>Family circumstances, health, money</strong></td><td>Be kind, expect nothing</td><td>—</td><td>Client Service, through your Team Leader · don't chase it</td><td>One warm line, no follow-up questions</td><td>When you hear it</td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p>For anything urgent, most regions also have a direct Team Leader / Client Service Slack channel as a faster backup to BO — the name is different in every region, so ask your Team Leader which one is yours.</p>`)}
   ${co('co-idea','🎓',`<p><strong>One column this map doesn't show: your Regional Mentor.</strong> Everything in the "who you tell" column above is about the <em>arrangement</em> — level, group, schedule, package — and always goes to your Team Leader and Client Service. Whenever the question is instead <em>how do I teach this better</em>, your Regional Mentor is who to ask, alongside — not instead of — the route above.</p>`)}
  `},
  {t:'⚖️ 6.3 · The five rules', html:`
   <div class="rule-row">
     <div class="rule-card"><div class="rule-num">1</div><div class="rule-ic">⚡</div><div class="rule-txt"><strong>Adapt first.</strong> You don't need permission to teach better tomorrow — a lot of cases end right there. Stuck after 2 lessons? Book a session with your Regional Mentor.</div></div>
     <div class="rule-card"><div class="rule-num">2</div><div class="rule-ic">📣</div><div class="rule-txt"><strong>Telling someone is not optional.</strong> You inform the Team Leader, loop in Client Service, submit the Tutors' Evaluation — or the problem goes silent.</div></div>
     <div class="rule-card"><div class="rule-num">3</div><div class="rule-ic">🚦</div><div class="rule-txt"><strong>Team Leader before the family.</strong> Sync and agree the strategy, <em>then</em> speak to the family — exactly what was agreed, never options of your own.</div></div>
     <div class="rule-card"><div class="rule-num">4</div><div class="rule-ic">🤐</div><div class="rule-txt"><strong>Never promise, never refuse — always show you care.</strong> You recommend; Client Service offers. One exception: once your Team Leader has approved an extra lesson, you can often be the one to tell the family yourself.</div></div>
     <div class="rule-card"><div class="rule-num">5</div><div class="rule-ic">🔁</div><div class="rule-txt"><strong>Escalate once, then follow up.</strong> Raising something and forgetting it is the same as never raising it.</div></div>
   </div>
   ${co('co-idea','💡',`<p>These five rules are worth building into habit, not just reading once — they're the difference between a signal that gets acted on and one that quietly disappears. Check with your Team Leader for anything specific to how your region runs this.</p>`)}
  `}
 ],
 ix:{
  title:'Routing — five signals',
  instr:'For each signal, pick where it goes first. 70% to unlock Module 7.',
  items:[
   {type:'choice', prompt:'A child\'s classwork is fine, but homework has been at zero for two lessons in a row, with no other cause identified yet.', opts:['I act myself — a check-in this week, no report needed yet','Team Leader + Client Service immediately','Route straight to Client Service, skip the Team Leader'], correct:0, fb:'A homework-only dip like this starts with your own check-in. Escalate to your Team Leader only if it continues after that.'},
   {type:'choice', prompt:'You\'ve adapted the lesson for a child who\'s clearly struggling with the level, for two weeks, and it still isn\'t enough.', opts:['Keep adapting indefinitely — the level isn\'t your call, so there\'s nothing to escalate','Team Leader + Client Service, with a comment in BO','Message the family directly about a possible level change'], correct:1, fb:'This is exactly when a "too hard" case needs to go to your Team Leader and Client Service, in writing, in BO.'},
   {type:'choice', prompt:'A child in your group has an autism diagnosis noted in their profile, and you\'ve just been told the group is being restructured with a new tutor next month.', opts:['Wait until the change is confirmed before mentioning it to anyone','Tell your Team Leader immediately, write a full handover in BO, and agree how the change is communicated','Tell the child privately yourself, right away, so they have time to prepare'], correct:1, fb:'A special educational need plus a continuity change needs flagging immediately — and how it\'s communicated has to be agreed with your Team Leader first.'},
   {type:'choice', prompt:'Two lessons in a row were disrupted by a platform failure, and the parent has just asked about a make-up lesson.', opts:['Tell them make-up lessons aren\'t possible','Tell them you\'ll arrange one yourself, to reassure them quickly','Acknowledge you\'ll raise it, then talk to your Team Leader the same day about an extra lesson'], correct:2, fb:'Neither refusing nor promising is yours to do — but starting the internal conversation the same day is exactly your job.'},
   {type:'choice', prompt:'A parent messages that the level, package or schedule isn\'t what they were told at sign-up.', opts:['Reply the same day with your best honest explanation','Acknowledge receipt, then take it to your Team Leader and Client Service before replying properly, recording their exact words in BO','Forward it to Client Service and consider it no longer your concern'], correct:1, fb:'This is the one situation where answering on your own does the most damage. Sync first, always — but don\'t go silent either.'}
  ]
 }
},
{id:'m7', numLabel:'Module 7', emoji:'🛟', color:'var(--coral)',
 title:'Saving a Refund Request',
 desc:'Everything so far is about preventing a request. This module is about what to do once one has already been submitted.',
 obj:'Know what changes once a refund request has already been submitted: what the next lesson needs to do, what you can and can\'t say, and how to keep feeding Client Service what they need.',
 sections:[
  {t:'🔀 7.1 · Everything changes once a request exists', html:`
   <div class="card"><p>Modules 1 to 6 are about catching this <strong>before</strong> a family ever asks for their money back. This module is for the moment that's already happened: <strong>a refund request has been submitted</strong>, and you've been notified.</p></div>
   ${co('co-idea','💡',`<p><strong>The request itself is created by the Customer Service Manager, not by you.</strong> Nothing about that part is yours to control. What's still yours is everything that happens in the lesson from here — and that's not nothing.</p>`)}
   ${co('co-danger','🚨',`<p><strong>Say nothing about the request itself</strong> — not to the child, not to the family — unless Client Service explicitly asks you to say something specific. Your job now is the lesson, not the conversation.</p>`)}
  `},
  {t:'🎯 7.2 · Your next lesson with this child is the save attempt', html:`
   <div class="card"><p>You may not get a chance to change anything else. Treat the very next lesson as the moment that decides it.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Give them a real turn.</strong> Not a meaningless question — a genuine moment where they're seen and they succeed.`},
     {ic:'🏆', html:`<strong>Build in an early, easy, visible win.</strong> They should leave the lesson feeling capable, not behind.`},
     {ic:'👀', html:`<strong>Make them feel noticed</strong> — specifically, not generically. The same rule as every check-in in this training.`},
     {ic:'🤐', html:`<strong>Don't mention the request.</strong> This lesson isn't where that conversation happens, even if the child brings it up — redirect warmly and keep teaching.`}
   ])}
  `},
  {t:'📮 7.3 · Feed Client Service fast — this is still your job', html:`
   <div class="card"><p>Client Service is working the request without being in your lesson. What you saw, in detail and quickly, is information they don't have any other way.</p></div>
   ${checkbox([
     'A comment in BO with exactly what you\'ve seen — dates, specifics, not impressions',
     'The family\'s own words, verbatim, if you have them — not paraphrased',
     'Anything you\'ve already adapted or offered, so CS isn\'t duplicating it',
     'Your Team Leader looped in, the same day'
   ])}
   ${co('co-idea','💡',`<p>You can find out a request exists through Client Service's own comments on the child's profile in BO — there's no automatic system that pings you the moment a family asks for a refund. You feed Client Service signals; they don't feed you updates.</p>`)}
  `},
  {t:'🚧 7.4 · What you can and can\'t do', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ You can</th><th>🚫 You can never</th></tr>
   <tr><td>Notify Client Service through BO the moment you learn of a request</td><td>Confirm that a refund has been approved</td></tr>
   <tr><td>If there's a natural opening <strong>before</strong> that notification, offer something concrete — an extra lesson, a levelling check, recommending a different course</td><td>Confirm or discuss any amount</td></tr>
   <tr><td>Tell the parent that Client Service will help them</td><td>Say or imply anything beyond that about the request itself</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>The message that's always safe to say:</strong> <em>"Customer Service will help you with this."</em> Nothing more — that's where your part ends, and it's the conversation you don't have the information to have.</p>`)}
  `},
  {t:'🌱 7.5 · The 2–4 lessons after the save', html:`
   <div class="card"><p>Whether the request is withdrawn, the child stays in your group, moves to another tutor, or goes 1:1 — the next few lessons decide whether the save actually held.</p></div>
   ${iconGrid([
     {ic:'🔁', html:`<strong>Extra care, every one of those lessons</strong> — a real turn, a specific win, a noticed absence — whatever this training has taught you, on repeat.`},
     {ic:'📝', html:`<strong>A full handover</strong> in BO Comments if the child is moving to a new tutor or format — the same handover discipline as Module 5.6.`},
     {ic:'👋', html:`<strong>Warm continuity</strong> if they're staying with you — don't let the relief of "it worked" mean you quietly go back to how things were before.`}
   ])}
  `},
  {t:'🔙 7.6 · Prevention is still the whole point', html:`
   <div class="card"><p>Everything below already lives in Modules 1 to 6 — this is the short version, as a reminder that most of your job is stopping this module from ever being needed.</p></div>
   ${checkbox([
     'Follow up on homework, every week',
     'Maintain the full lesson structure — don\'t let it slip when a group feels easy',
     'Report more than two absences, or a technical issue, as soon as it happens',
     'Escalate to your Team Leader the moment you see a risk signal',
     'Send the student attention report when one is expected of you'
   ])}

  `}
 ],
 ix:{
  title:'Once a request is already in',
  instr:'For each scenario, pick the right move. 70% to continue.',
  items:[
   {type:'choice', prompt:'You\'ve just learned a family submitted a refund request for a child in your group. What do you do first?', opts:['Message the family to find out why, so you can address it directly','Notify Client Service through BO and loop in your Team Leader the same day','Wait for Client Service to contact you before doing anything'], correct:1, fb:'The request is already with Client Service — your job is to get them what you know, fast, not to open your own conversation with the family.'},
   {type:'choice', prompt:'In your next lesson with that child, what should change?', opts:['Nothing — acting differently might tip them off that something is wrong','Give them a real, visible win and make sure they feel noticed — without mentioning the request','Have a direct conversation with the child about why their family wants to leave'], correct:1, fb:'The lesson itself is the save attempt. The request itself is never something to raise with the child.'},

   {type:'choice', prompt:'A parent asks you directly whether their refund has been approved. What do you say?', opts:['Give them your best guess based on how these things usually go','Tell them Customer Service will help them with this, and leave it there','Confirm the amount they\'re owed, if you happen to know it'], correct:1, fb:'Confirming approval or an amount is never yours to do, however confident you feel. The one safe line points them to Client Service.'},
   {type:'choice', prompt:'The request is withdrawn and the child stays in your group. What now?', opts:['Go back to normal — the crisis is over','Keep giving that child extra care for the next several lessons, since a save can still unravel','Tell the family you\'re glad they changed their mind'], correct:1, fb:'A save that holds for one lesson and then reverts to normal often doesn\'t hold at all. The next few lessons are what actually decide it.'}
  ]
 }
},
{id:'checklist', numLabel:'Module 8', emoji:'✅', color:'var(--green-d)',
 title:'Final Checklist',
 desc:'No quiz here — just everything from this training, in one list, before you sit the exam.',
 obj:'Review the full checklist below. This module is ungraded — read it, then move on to the Final Exam.',
 sections:[
  {t:'✅ The essentials, in one list', html:`
   ${numlist([
     'I check the student profile, including Comments, <strong>before</strong> my first lesson with a new child',
     'I scan the Progress view for my whole group once a week — both In The Class and At home',
     'I treat a flat line at zero as the most serious reading there is, not a neutral one',
     'Every child in my group gets a real turn, and I can prove it because I track it',
     'When a child misses a lesson I do all four steps, not just send the recording',
     'I recognise the patterns I\'m looking at, and I respond differently to each',
     'I always tell my Team Leader, loop in Client Service where needed, and leave a comment in BO',
     'When Client Service takes over a conversation, I stay out of it and follow their instructions',
     'I escalate once, and then I follow up'
   ])}
  `},
  {t:'🪞 Self-check — worth asking yourself weekly', html:`
   ${numlist([
     'Did I notice a drop in classwork or homework from any child this week, even one who kept attending normally?',
     'Is there a child in my group at zero on the work, who I\'ve quietly stopped noticing?',
     'Did every child in my group get a real turn in my last lesson? Am I sure, or am I assuming?',
     'Is there anything I\'ve noticed and not yet told anyone about?',
     'Is there anything I told someone about and never followed up on?'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>That's the whole training.</strong> When you're ready, continue to the Final Exam — then complete the DST in the LMS to close out the assignment.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};

/* Refunds training - Polish content (translated from the English source). */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    pageTitle:'Szkolenie o zwrotach środków — Szkolenie korepetytorów Kodland',
    logoSub:'Dział Rozwoju Korepetytorów',
    heroEyebrow:'💸 Program szkoleniowy dla korepetytorów',
    heroTitle:'Zrozumieć <span class="h-pill">zwroty środków</span>',
    heroIntro:"Za każdą prośbą o zwrot środków stoi dziecko, które coś budowało i przestało — a ty niemal zawsze jesteś pierwszą osobą, która mogła to zauważyć. To szkolenie dotyczy tego, jak uważnie obserwujesz i jak szybko działasz.",
    heroR1:'Dowiedz się dokładnie, na co zwracać uwagę — w trakcie lekcji i między lekcjami.',
    heroR2:"Poćwicz czytanie widoku Postępy grupy w praktycznej symulacji BO.",
    heroR3:"Wiedz dokładnie, co należy do ciebie, co trzeba zgłosić i komu.",
    heroWork:'Przejdź przez 7 modułów i końcową listę kontrolną, a potem przejdź do DST. Każdy moduł wymaga co najmniej 70%, aby odblokować kolejny.',
    startBtn:'🚀 Rozpocznij szkolenie',
    pathLabel:'Twoja ścieżka nauki',
    devTitle:'Tryb deweloperski: odblokuj wszystkie moduły do przeglądu',
    backToPath:'Wróć do ścieżki',
    modulesPassed:'Zaliczone moduły: {done} / {total}',
    moduleN:'Moduł {n}',
    of:'z',
    locked:'🔒 Zablokowany',
    passedBadge:'✅ Zaliczony · {pct}%',
    reviewedBadge:'✅ Przejrzany',
    startBadge:'▶ Rozpocznij',
    reviewBadge:'▶ Przejrzyj',
    objective:'Cel',
    startCheck:'▶ Rozpocznij sprawdzian modułu',
    toExam:'▶ Przejdź do egzaminu końcowego',
    doneBack:'✓ Gotowe — wróć do ścieżki',
    ixBadge:'📋 Sprawdzian modułu — 70%, aby odblokować kolejny moduł',
    ixItemBadge:'📋 Sprawdzian modułu — pytanie {i} z {n}',
    scoreSoFar:'Dotychczasowy wynik: {c} / {t}',
    continue:'Dalej →',
    sortWrong:'Niezupełnie — prawidłowa odpowiedź to „{label}”.',
    resPassed:'Moduł zaliczony!',
    resFailed:'Jeszcze nie tym razem',
    resUnlocked:"Kolejny moduł jest już odblokowany.",
    resNeed:'Aby odblokować kolejny moduł, potrzebujesz 70%. Przejrzyj powyższą sekcję i spróbuj ponownie.',
    resContinue:'Przejdź do ścieżki nauki',
    resBack:'Wróć do ścieżki',
    resReview:'Przejrzyj ten moduł',
    doneEyebrow:'Egzamin końcowy',
    doneTitle:'🎉 Gratulacje!',
    doneP1:"🎉 <strong>Gratulacje! Szkolenie do samodzielnej nauki, które pomoże poprawić twoje wskaźniki zwrotów środków, jest ukończone!</strong>",
    doneP2:"To już prawie koniec! Wróć na stronę szkolenia w LMS, z której to szkolenie zostało otwarte. DST znajdziesz bezpośrednio pod szkoleniem.",
    doneP3:'👉 <strong>Aby szkolenie zostało uznane za ukończone, musisz wypełnić i zaliczyć DST.</strong> Jeśli DST nie zostanie wypełniony, szkolenie pozostanie nieukończone i może zostać oznaczone jako zaległe.',
    doneP4:'Upewnij się, że DST jest wypełniony, a wynik — zaliczający, aby poprawnie zamknąć to zadanie.',
    doneP5:'Powodzenia! ❤️',
    devUnlockAlert:'Tryb deweloperski: wszystkie moduły są teraz odblokowane do przeglądu.',
    devOn:'🔓 Tryb deweloperski WŁĄCZONY — wszystkie moduły odblokowane',
    devOff:'🔒 Tryb deweloperski WYŁĄCZONY — postęp wyczyszczony',
    devBadge:'🔓 TRYB DEWELOPERSKI',
    doLabel:'✅ Rób',
    avoidLabel:'🚫 Unikaj',
    noticeLabel:'Zwróć uwagę:'
  },
  buildModules(){
    return [
{id:'intro', numLabel:'Wprowadzenie', emoji:'💸', color:'var(--coral)',
 title:'Po co jest to szkolenie',
 desc:'Jak zwrot środków wygląda z perspektywy dziecka, dlaczego to ty jako pierwsza osoba możesz go przewidzieć i która część tej sytuacji należy do ciebie.',
 obj:'Zrozumieć, jak zwrot środków wygląda z perspektywy dziecka, dlaczego to ty jako pierwsza osoba możesz go przewidzieć i która część tej sytuacji należy do ciebie.',
 sections:[
  {t:'📋 Masz konkretny powód, by tu być — znajdź go szybko', html:`
   <div class="card"><p>Poniżej znajdziesz powody, dla których to szkolenie mogło zostać ci przypisane. Zajmujemy się tu wyłącznie zwrotami środków zgłaszanymi z powodów związanych z lekcją — sytuacjami, w których możemy pomóc ci nimi pokierować, nie tylko po to, by zapobiegać im w przyszłości, ale też by uratować sprawę zwrotu. Mimo to przejście całego szkolenia da ci szerszą perspektywę, która pomaga zapobiegać także zwrotom wynikającym z innych przyczyn.</p></div>
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>🚩 Zgłoszony powód</th><th>👀 Jak to zwykle wygląda</th><th>📍 Jak pomaga to szkolenie</th></tr>
   <tr><td><strong>Brak zainteresowania programowaniem / kursami Kodland</strong></td><td>Znudzenie, robienie czegoś „bo trzeba”, „to wszystko?”, brak konkretnego zastrzeżenia do czegokolwiek</td><td>Moduł 5.2 · Moduł 3.6</td></tr>
   <tr><td><strong>Organizacja lekcji / dyscyplina</strong></td><td>Na lekcji panuje chaos, jedno dziecko dominuje, inne milkną albo się wyłączają</td><td>Moduł 5.5 · Moduł 3</td></tr>
   <tr><td><strong>Silna negatywna reakcja na błędy</strong></td><td>Szybko się poddaje, denerwuje się drobnymi pomyłkami, „nie dam rady” — wcześnie i często</td><td>Moduł 5.1 · Moduł 3.5</td></tr>
   <tr><td><strong>Zastrzeżenia do sposobu nauczania korepetytora</strong></td><td>Nie dotyczy wzorca jednego dziecka — chodzi o samą lekcję</td><td>Porozmawiaj bezpośrednio ze swoim Team Leaderem i Mentorem Regionalnym; Moduł 3 jako powtórka</td></tr>
   </table></div></div>
  `},
  {t:'💔 Zwrot środków to dziecko, które przestaje się uczyć', html:`
   <div class="card"><p>Za każdą prośbą o zwrot środków stoi dziecko, które coś budowało i przestało. Grupa, która się zmniejsza. Rodzina, która nam zaufała i uznała, że nie warto kontynuować.</p>
   <p>O tym właśnie jest to szkolenie. Nie o liczbie na dashboardzie — o konkretnym dziecku w jednej z twoich grup, które właśnie teraz się oddala i nie wie, jak o tym powiedzieć.</p></div>
   <img src="Images/Image_1.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
  `},
  {t:'📉 Zwroty środków prawie nigdy nie przychodzą nagle', html:`
   <div class="card"><p>To najważniejsza rzecz, jaką warto o nich wiedzieć. Zanim rodzina poprosi o zwrot pieniędzy, cała historia trwa zwykle od tygodni — a większość z niej rozgrywa się <strong>na oczach korepetytora.</strong></p></div>
   ${stepFlow([
     {ic:'📋', label:'Praca na lekcji przestaje być kończona'},
     {ic:'🏠', label:'Prace domowe przestają być oddawane'},
     {ic:'📵', label:'Zaczynają się nieobecności na lekcjach'},
     {ic:'☎️', label:'Rodzic do kogoś dzwoni'}
   ])}
   <div class="card"><p>Na lekcjach poprzedzających prośbę o zwrot środków wzorzec jest zawsze ten sam:</p></div>
   ${bigStat('39%→56%', `<p><strong>Liczba opuszczonych lekcji</strong> gwałtownie rośnie w ostatnim okresie przed prośbą o zwrot środków.</p>`)}
   ${bigStat('35%→15%', `<p><strong>Odsetek oddanych prac domowych</strong> spada równie gwałtownie w tym samym czasie.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted);margin-top:-4px;margin-bottom:14px">Na podstawie historycznych danych z wielu grup; dokładne liczby mogą się różnić w zależności od regionu.</p>
   ${co('co-danger','🚨',`<p><strong>To jest najważniejsza część dla ciebie.</strong></p><p>Dziecko, które jest już w drodze do rezygnacji z kursu, może na twojej lekcji wyglądać zupełnie normalnie. Załamanie nie dotyczy jego uwagi w czasie lekcji — dotyczy <strong>przychodzenia na zajęcia i wykonywania pracy.</strong> Dlatego „na lekcji wydaje się w porządku” nie jest dowodem, że wszystko jest w porządku.</p>`)}
  `},
  {t:'🦸 Dlaczego to ty jesteś tu najważniejszą osobą', html:`
   ${co('co-idea','💡',`<p><strong>Tylko ty widzisz to dziecko, w tej grupie, co tydzień.</strong> Nikt w Obsłudze Klienta, w Dziale Operacji Dydaktycznych ani w zespole lekcji próbnych nie zobaczy, że dziecko milknie albo przestaje się starać. <strong>Ty to widzisz.</strong> Całe to szkolenie sprowadza się do dwóch rzeczy: <strong>jak uważnie obserwujesz i jak szybko działasz.</strong></p>`)}
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ W pełni twoje</th><th>🔁 Twoje do dostosowania — i do zgłoszenia</th><th>🚫 Poza naszą kontrolą</th></tr>
   <tr><td>Dziecko czuje się zmotywowane i wspierane na każdej lekcji</td><td><strong>Poziom za trudny albo za łatwy.</strong> Dostosuj zadanie od razu. Zgłoś to do weryfikacji.</td><td>Zdrowie</td></tr>
   <tr><td>Każde dziecko dostaje prawdziwą kolej i prawdziwą odpowiedź</td><td><strong>Specjalna potrzeba, o której nikt cię nie poinformował.</strong> Dostosuj swoje podejście. Zgłoś to.</td><td>Sytuacja rodzinna</td></tr>
   <tr><td>Zauważasz pierwsze oznaki oddalania się — i działasz</td><td><strong>Liczna, żywiołowa grupa.</strong> To umiejętność, której można się nauczyć — dostosuj podejście. Zgłoś, jeśli przepaść pozostaje zbyt duża.</td><td>Sytuacja finansowa rodziny</td></tr>
   <tr><td>Rodzina czuje, że postępy śledzi prawdziwy człowiek</td><td><strong>Zmiana korepetytora/grupy/harmonogramu została źle przyjęta.</strong> Działaj transparentnie, szybko się uzgadniaj.</td><td></td></tr>
   <tr><td>Dziecko, które opuściło lekcje, naprawdę nadrabia zaległości</td><td><strong>Rodzinie przy zapisie powiedziano coś innego.</strong> Wyjaśnij uczciwie. Zgłoś to.</td><td></td></tr>
   </table></div></div>
   ${co('co-danger','🚨',`<p><strong>Nic z tego nie jest twoją winą — ale prawdziwa praca nadal należy do ciebie.</strong> Dostosuj zadanie, zmień sposób prowadzenia grupy, chroń dziecko w czasie zmiany. I równie ważne: <strong>powiedz o tym komuś.</strong> Poinformuj swojego Team Leadera, zaangażuj Obsługę Klienta, zostaw komentarz w BO. Bez tego problem ucichnie — a kilka tygodni później stracimy dziecko.</p>`)}
  `},
  {t:'💬 Rozmowy z rodzinami: co robisz ty, a co przekazujesz dalej', html:`
   <img src="Images/Image_2.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Rodzice będą chcieli rozmawiać z tobą o nauce swojego dziecka — <strong>to część twojej pracy</strong>, i warto okazywać przy tym ciepło i dostępność.</p>
   <p>Czego <strong>nie</strong> możesz zrobić, to samo <em>działanie</em>: przenieść dziecko do innej grupy, zmienić harmonogram, poziom czy pakiet albo zatwierdzić dodatkową lekcję. To należy do Obsługi Klienta — a ona może zadziałać tylko wtedy, gdy ją o tym poinformujesz.</p></div>
   ${co('co-idea','💡',`<p><strong>Zasada: rozmawiaj o nauce. Działanie przekaż dalej.</strong> Jesteś mostem między lekcją a osobami, które mogą zmienić sytuację dziecka — a most pomaga tylko wtedy, gdy sprawy przechodzą przez niego <strong>szybko.</strong></p>`)}
  `},
  {t:'🔀 Kolejność ma znaczenie: najpierw Team Leader, potem rodzina', html:`
   <div class="card"><p>Jest tu kolejność, której trzeba się trzymać — a jej pomylenie to właśnie sposób, w jaki wiadomości pisane w dobrej wierze tworzą problemy.</p></div>
   ${co('co-danger','🚨',`<p><strong>Za każdym razem, gdy sytuacja wykracza poza samo twoje nauczanie</strong> — poziom, grupa, harmonogram, specjalna potrzeba, niedotrzymana obietnica, stracona lekcja — <strong>nie pisz najpierw do rodziny.</strong></p>`)}
   ${stepFlow([
     {ic:'👩‍💼', label:'1. Uzgodnij sprawę z Team Leaderem — wyjaśnij, co widzisz, zaangażuj Obsługę Klienta, zostaw komentarz w BO'},
     {ic:'🧭', label:'2. Ustalcie strategię — co naprawdę jest dostępne dla tego dziecka, a co nie'},
     {ic:'👪', label:'3. Dopiero potem rodzina — dokładnie to, co ustalił Team Leader, nic więcej'}
   ])}
   <div class="card"><p>Dzięki temu nigdy nie musisz zgadywać, obiecywać za dużo ani wycofywać się ze swoich słów.</p></div>
   ${co('co-danger','🚨',`<p><strong>Objaśnianie rozwiązań i opcji nie należy do ciebie, nawet po uzgodnieniu.</strong> Team Leader powie ci jedną z dwóch rzeczy:</p>
   <ul><li><em>„Powiedz rodzinie X”</em> → powiedz dokładnie to, nic więcej</li>
   <li><em>„Od tego momentu zajmujemy się tym my”</em> → <strong>nie angażujesz się w tę sprawę.</strong> Dwa głosy, które dają rodzinie różny obraz sytuacji, to sposób na utratę zaufania.</li></ul>`)}
  `},
  {t:'📌 Co zawsze możesz powiedzieć, a co zawsze musi poczekać', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Zawsze twoje — pisz swobodnie, ciepło i szybko</th><th>⏸️ Zawsze czeka na Team Leadera</th></tr>
   <tr><td>Jak radzi sobie dziecko, co mu wyszło, co sprawia mu trudność</td><td>Wszystko, co dotyczy <strong>poziomów, kursów, grup, harmonogramów, formatów czy pakietów</strong></td></tr>
   <tr><td>Jakiego <strong>wsparcia udzielasz</strong> na lekcji i co zostało dostosowane</td><td>Każda <strong>opcja, rozwiązanie czy kolejny krok</strong> do wyboru dla rodziny</td></tr>
   <tr><td>Że widzisz jego trudności i zależy ci na tym, jak się czuje</td><td>Każde <strong>wyjaśnienie, jak coś poszło nie tak</strong>, albo dlaczego</td></tr>
   <tr><td>Pytanie, co pomaga temu dziecku uczyć się najlepiej</td><td>Cokolwiek, co dotyczy <strong>pieniędzy</strong></td></tr>
   <tr><td>Opuszczona lekcja i to, co trzeba nadrobić</td><td>Każde potwierdzenie, że coś <strong>się wydarzy</strong> albo <strong>się nie wydarzy</strong></td></tr>
   <tr><td>Że sprawa została przekazana zespołowi — ogólnie, bez szczegółów</td><td>Każdy szczegół tego, <strong>co zgłaszasz wewnętrznie</strong></td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p><strong>Różnica w jednym zdaniu: ty mówisz o dziecku. Team Leader i Obsługa Klienta mówią o ustaleniach.</strong></p>`)}
   ${co('co-danger','⛔',`<p><strong>Nigdy nie obiecuj i nigdy nie odmawiaj.</strong></p><p>Ani <em>„przeniesiemy go do innej grupy”.</em> Ani <em>„to niemożliwe”.</em> Obie te decyzje nie należą do ciebie.</p>
   <p><strong>Ale unikaj też chłodu i wymijających odpowiedzi.</strong> Zawsze, od razu, pokazuj, że naprawdę zależy ci na tym, by to dziecko czuło się dobrze i miało jak najlepsze doświadczenie nauki — i że już nad tym pracujesz. <em>„Widzę to, zależy mi na tym, sprawdzam, co możemy zrobić, i wrócę do Państwa z odpowiedzią.”</em> To nie jest obietnica. To właśnie to zatrzymuje rodzinę przy nas, dopóki szukamy odpowiedzi.</p>`)}
   <div class="card"><p><strong>Zawsze możesz pisać bezpośrednio, bez wcześniejszego konsultowania,</strong> o zwykłych sprawach nauczania: jak minęła lekcja, co dziecku dobrze poszło, opuszczona lekcja i co trzeba nadrobić, pytanie o to, jak radzi sobie w domu. Odpowiadaj na to wszystko szybko i ciepło — to twoja praca i to ona umożliwia później trudniejsze rozmowy.</p></div>
  `}
 ],
 ix:{
  title:'Co jest moje, co dostosowuję i zgłaszam, a co nie jest moje',
  instr:'Przypisz każdą rzeczywistą sytuację do właściwej strefy. 70%, aby odblokować Moduł 1.',
  items:[
   {type:'sort', prompt:'„W dużej grupie uczeń się gubi i nie jest w stanie uczestniczyć” —', card:'W dużej grupie uczeń się gubi i nie jest w stanie uczestniczyć', zones:[
     {label:'W pełni moje', fb:'Niezupełnie — zacznij od zmiany własnego podejścia, ale jeśli po rzetelnej próbie przepaść wciąż jest zbyt duża, to również trzeba zgłosić.'},
     {label:'Moje do dostosowania i zgłoszenia', fb:'Dobrze — to umiejętność zarządzania grupą, którą możesz zmienić samodzielnie już od następnej lekcji, i zgłaszasz ją, jeśli po próbie to wciąż za mało.'},
     {label:'Poza naszą kontrolą', fb:'Niezupełnie — to umiejętność zarządzania grupą, a zaczyna się od dostosowania twojego podejścia.'}
   ], correctZone:1, fb:''},
   {type:'sort', prompt:'„Sytuacja finansowa rodziny się zmieniła” —', card:'Sytuacja finansowa rodziny się zmieniła', zones:[
     {label:'W pełni moje', fb:'Niezupełnie — sytuacja finansowa rodziny jest naprawdę poza naszą kontrolą.'},
     {label:'Moje do dostosowania i zgłoszenia', fb:'Niezupełnie — sytuacja finansowa rodziny jest naprawdę poza naszą kontrolą i nie jest czymś, do czego trzeba się dostosowywać.'},
     {label:'Poza naszą kontrolą', fb:'Dobrze — to rzeczywiście przyczyna poza naszą kontrolą. Okaż życzliwość, niczego nie oczekuj i nie naciskaj.'}
   ], correctZone:2, fb:''},
   {type:'sort', prompt:'„Poziom jest zbyt zaawansowany jak na jego wiek” —', card:'Poziom jest zbyt zaawansowany jak na jego wiek', zones:[
     {label:'W pełni moje'},
     {label:'Moje do dostosowania i zgłoszenia', fb:'Dobrze — dostosuj zadanie od razu i zgłoś to, aby sam poziom mógł zostać zweryfikowany.'},
     {label:'Poza naszą kontrolą'}
   ], correctZone:1, fb:'Niezupełnie — możesz od razu dostosować zadanie, a także zgłosić sprawę, aby poziom został zweryfikowany. Liczą się obie części.'},
   {type:'sort', prompt:'„Przestał oddawać prace domowe” —', card:'Przestał oddawać prace domowe', zones:[
     {label:'W pełni moje', fb:'Dobrze — zauważenie tego i reakcja (rozmowa indywidualna, zmiana podejścia) należą w całości do ciebie.'},
     {label:'Moje do dostosowania i zgłoszenia'},
     {label:'Poza naszą kontrolą'}
   ], correctZone:0, fb:'Niezupełnie — zauważenie spadku prac domowych i rozmowa indywidualna mieszczą się w pełni w twoim nauczaniu; zgłoszenie nie jest potrzebne, chyba że wskazuje to na większy problem, np. niedopasowany poziom.'},
   {type:'sort', prompt:'„Nikt mi nie powiedział, że ma specjalne potrzeby edukacyjne” —', card:'Nikt mi nie powiedział, że ma specjalne potrzeby edukacyjne', zones:[
     {label:'W pełni moje'},
     {label:'Moje do dostosowania i zgłoszenia', fb:'Dobrze — dostosuj wszystko, co możesz, na lekcji i zgłoś to, aby można było rozważyć opcje takie jak zajęcia indywidualne.'},
     {label:'Poza naszą kontrolą'}
   ], correctZone:1, fb:'Niezupełnie — od razu dostosowujesz swoje podejście i zgłaszasz sprawę, aby można było rozważyć szersze opcje.'},
   {type:'sort', prompt:'„Rodzic mówi, że obiecano mu coś innego” —', card:'Rodzic mówi, że obiecano mu coś innego', zones:[
     {label:'W pełni moje'},
     {label:'Moje do dostosowania i zgłoszenia', fb:'Dobrze — przeszłości nie zmienisz, ale wyjaśniasz uczciwie i zgłaszasz sprawę, aby rozmowa odbyła się między działami.'},
     {label:'Poza naszą kontrolą'}
   ], correctZone:1, fb:'Niezupełnie — to trzeba zgłosić, aby sytuacja się nie powtarzała, nawet jeśli sama rozbieżność nie wynika z twoich działań.'},
   {type:'sort', prompt:'„Dziecko się nudzi i kończy w dziesięć minut” —', card:'Dziecko się nudzi i kończy w dziesięć minut', zones:[
     {label:'W pełni moje'},
     {label:'Moje do dostosowania i zgłoszenia', fb:'Dobrze — od razu daj prawdziwe dodatkowe wyzwanie i zgłoś sprawę jako możliwy przypadek zbyt łatwego poziomu.'},
     {label:'Poza naszą kontrolą'}
   ], correctZone:1, fb:'Niezupełnie — nuda wynikająca ze zbyt łatwego poziomu wymaga natychmiastowego dodatkowego wyzwania na lekcji oraz zgłoszenia, aby poziom został zweryfikowany.'}
  ]
 }
},
{id:'m1', numLabel:'Moduł 1', emoji:'👀', color:'var(--blue)',
 title:'Jak zauważyć to wcześnie',
 desc:'Na co zwracać uwagę w trakcie lekcji i między lekcjami oraz kiedy trzeba zacząć działać.',
 obj:'Wiedzieć dokładnie, na co zwracać uwagę w trakcie lekcji i między lekcjami, odróżnić dziecko, które ma gorszy tydzień, od dziecka, które jest w drodze do rezygnacji, i wiedzieć, w którym momencie trzeba działać.',
 sections:[
  {t:'', html:`<div class="card"><p>To najważniejszy moduł w całym szkoleniu. Wszystko inne zależy od tego, czy zauważysz problem na czas.</p></div>`},
  {t:'👁️ 1.1 · Na co zwracać uwagę w trakcie lekcji', html:`
   <div class="card"><p>To sygnały, których nikt inny w firmie nie widzi. Nie potrzebujesz raportu, żeby je odczytać — wystarczy uważnie patrzeć.</p></div>
   <img src="Images/Image_4.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   ${iconGrid([
     {ic:'📷', html:`<strong>Kamera się wyłącza</strong> i pozostaje wyłączona, choć wcześniej była włączona. To najczęstszy wczesny sygnał wycofywania się — dzieci, które później rezygnują, mają włączoną kamerę mniej więcej o <strong>połowę</strong> krócej niż ich koledzy z grupy.`},
     {ic:'🎤', html:`<strong>Mikrofon przestaje być używany</strong> w ogóle — mniej więcej <strong>jedna trzecia</strong> czasu mówienia kolegów z grupy. Dziecko, które przestało mówić, zwykle przestało też czuć się częścią grupy.`},
     {ic:'💬', html:`<strong>Odpowiedzi jednym słowem</strong> tam, gdzie wcześniej były pełne zdania. Jeśli to zmiana, to nie nieśmiałość — zmiana jest sygnałem.`},
     {ic:'🖥️', html:`<strong>Przestaje udostępniać ekran</strong> podczas samodzielnej pracy. Często oznacza to „nie chcę, żeby było widać, że utknąłem” albo „jeszcze nie zacząłem”.`},
     {ic:'📝', html:`<strong>Zaczyna pracę na lekcji, ale nigdy jej nie kończy</strong> — najwyraźniejsza forma zostawania w tyle w trakcie lekcji.`},
     {ic:'✋', html:`<strong>Podnosi rękę i nie zostaje wywołane</strong> — a potem przestaje ją podnosić. <strong>To jest po naszej stronie.</strong>`},
     {ic:'⏰', html:`<strong>Spóźnia się, wychodzi wcześniej albo co chwilę znika i wraca.</strong> Uwaga jest w porządku; zaangażowania brakuje.`},
     {ic:'😞', html:`<strong>Milknie albo szybko się frustruje</strong> po błędzie, zwłaszcza jeśli to nowe zachowanie.`},
     {ic:'⚡', html:`<strong>Kończy w połowie czasu, a potem przeszkadza.</strong> To też problem z poziomem — nuda wygląda dokładnie jak brak zaangażowania.`},
     {ic:'🔁', html:`<strong>Ciągle zadaje to samo podstawowe pytanie.</strong> Poziom jest prawdopodobnie nieodpowiedni — zobacz Moduł 5.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Klucz to porównanie, nie ocena.</strong> Żaden z tych sygnałów osobno niczego nie oznacza. Każdy z nich zaczyna coś znaczyć w chwili, gdy jest <strong>inny niż to, jak to dziecko zwykle się zachowuje</strong>, albo <strong>inny niż u reszty grupy na tej samej lekcji.</strong></p>`)}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Ręka, której nikt nie zauważa</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/12AOW3X9Vgm_cVzeOdjX5HN7Z2j-JV-lK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">W tym filmie zobaczysz ucznia, który próbuje skontaktować się z korepetytorem przez czat, ale korepetytor zdaje się tego nie zauważać.</div></div>
  `},
  {t:'📅 1.2 · Na co zwracać uwagę między lekcjami', html:`
   <div class="card"><p>Między lekcjami masz coś, czego lekcja na żywo nie daje: zapis tego, czy dziecko faktycznie wykonuje pracę. To dwie osobne rzeczy i <strong>obie są ważne.</strong></p></div>
   ${iconGrid([
     {ic:'🏫', html:`<strong>Praca na lekcji (Na lekcji)</strong> — to, co dziecko wykonuje w trakcie samej lekcji. Mówi ci, czy nadąża <strong>wtedy, gdy jesteś obok</strong>. Gdy ten wskaźnik spada, problemem jest trudność materiału albo zaangażowanie na zajęciach.`},
     {ic:'🏠', html:`<strong>Praca domowa (W domu)</strong> — to, co dziecko wykonuje samodzielnie. Mówi ci, czy kurs nadal ma dla niego znaczenie <strong>wtedy, gdy ciebie nie ma</strong>, i czy rodzina to wspiera. To trudniejszy, ale bardziej szczery sygnał.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Obserwuj oba. Reaguj na każdy z nich.</strong></p><p>Dziecko może dobrze radzić sobie z pracą na lekcji i mieć zero w pracach domowych — to problem motywacji i wsparcia ze strony rodziny. Dziecko może odrabiać prace domowe, ale nie radzić sobie z pracą na lekcji — to zwykle problem trudności materiału albo rozproszenia na zajęciach. Każdy z nich osobno wystarczy, żeby zacząć działać. <strong>Nie czekaj, aż oba się posypią.</strong></p>`)}
   ${bigStat('47%',`Dzieci, które ostatecznie proszą o zwrot środków, <strong>uczestniczy w mniej niż połowie</strong> swoich lekcji. Frekwencja to nie formalność — to najbardziej widoczny sygnał od rodziny, czy ten kurs wciąż ma dla niej znaczenie.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Na podstawie historycznych danych z wielu grup; dokładna liczba może się różnić w zależności od regionu.</p>
  `},
  {t:'🔎 1.3 · Błąd, który popełnia prawie każdy', html:`
   <div class="card"><p>Większość korepetytorów szuka <strong>spadku</strong> — momentu, w którym coś się pogorszyło. Ten odruch pomija większość przypadków.</p></div>
   ${co('co-danger','🚨',`<p><strong>Nie szukaj spadku. Szukaj pustki.</strong></p>`)}
   ${bigStat('58.6%',`Przypadków zwrotu środków miało prace domowe na <strong>stałym, a nie spadającym</strong> poziomie — dziecko już wcześniej przestało je robić albo nigdy tak naprawdę nie zaczęło. Nie było żadnego spadku do zauważenia.`)}
   ${bigStat('56.9%',`Przypadków miało <strong>spadającą</strong> pracę na lekcji — dlatego często to ona jest wcześniej widocznym sygnałem z tych dwóch.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Na podstawie historycznych danych z wielu grup; dokładne liczby mogą się różnić w zależności od regionu.</p>
  `},
  {t:'💔 1.4 · Dlaczego brak prac domowych może zapowiadać zwrot środków', html:`
   <img src="Images/Image_6.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Warto mieć tu jasność, bo to zmienia to, jak pilnie traktujesz sprawę.</p>
   <p>Dziecko, które nie wykonuje pracy, zostaje w tyle. Dziecko, które zostało w tyle, czuje się zagubione na lekcji. Dziecko, które czuje się zagubione na lekcji, przestaje chcieć przychodzić. Rodzina widzi dziecko, które nie chce iść na zajęcia, i wyciąga wniosek: <em>„nie interesuje go to”</em> albo <em>„ten kurs nie jest dla niego”.</em></p></div>
   ${co('co-idea','💡',`<p>Kiedy rodzic używa tych słów, opisuje spiralę, która zaczęła się od <strong>trzech nieoddanych projektów.</strong> Brakująca praca to nie tylko objaw dziecka, które już zdecydowało się odejść — to część tego, co prowadzi je do tej decyzji.</p>`)}
   ${co('co-idea','📌',`<p><strong>Dlatego: seria brakujących prac na lekcji lub prac domowych to sama w sobie wystarczający powód do działania.</strong> Nie coś, co tylko warto obserwować. Nie coś, co zgłasza się dopiero wtedy, gdy się pogorszy. <strong>Działaj.</strong></p>`)}
  `},
  {t:'🧩 1.5 · Trzy wzorce', html:`
   <div class="card"><p>Kiedy przeglądasz kilka ostatnich lekcji dziecka, zobaczysz jeden z trzech kształtów. Każdy z nich oznacza coś innego i każdy wymaga innej reakcji.</p></div>
   ${patternCards([
     {ic:'🐌', title:'Powolne osuwanie się', desc:'Frekwencja i praca stopniowo spadają przez kilka lekcji; coraz więcej braków; wyłączona kamera', note:'Klasyczne oddalanie się. <strong>To jest ten przypadek, który możesz odwrócić</strong> — im wcześniej zareagujesz, tym większa szansa. → Moduły 3 i 4'},
     {ic:'🧱', title:'Nagłe zatrzymanie', desc:'Normalnie, normalnie, normalnie — a potem nic', note:'Coś się wydarzyło. Kolizja w harmonogramie, jakieś zdarzenie, coś w domu. <strong>Zapytaj. Nie zakładaj.</strong> → Moduł 4'},
     {ic:'✅', title:'Zaangażowane, a mimo to odchodzi', desc:'Obecne, aktywne, praca wykonana — a mimo to rodzina chce zrezygnować', note:'<strong>Przyczyną nie jest brak zaangażowania ani ty.</strong> Więcej motywacji tego nie naprawi. <strong>Znajdź prawdziwy powód i szybko przekaż go dalej.</strong> → Moduły 5 i 6'}
   ])}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Uczeń, który ani razu się nie pojawił</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RfFI5FTMg3DBHEiJtoG9DpJyjVoHFv74/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Jeden z najbardziej krytycznych przypadków, który trzeba zgłosić od razu: uczeń, który nie pojawił się od pierwszej lekcji.</div></div>
  `},
  {t:'🚦 1.6 · Kiedy trzeba działać', html:`
   <div class="card"><p>Nie potrzebujesz pewności. Potrzebujesz progu — tak, by brak pewności przestał być powodem, by nic nie robić.</p><p><strong>Działaj jeszcze w tym tygodniu, jeśli spełniony jest którykolwiek z tych warunków:</strong></p></div>
   ${iconGrid([
     {ic:'📉', html:`Dziecko uczestniczy w <strong>mniej niż połowie</strong> swoich lekcji`},
     {ic:'📊', html:`Praca na lekcji lub praca domowa jest <strong>wyraźnie poniżej średniej grupy</strong> — orientacyjnie o 15 punktów lub więcej`},
     {ic:'🤔', html:`Frekwencja jest na średnim poziomie — nie zniknęła, ale jest nieregularna — <strong>i</strong> spełniony jest też jeden z powyższych warunków`},
     {ic:'0️⃣', html:`<strong>Dwie lub więcej lekcji z rzędu</strong> bez oddanej pracy`}
   ])}
   ${co('co-danger','🚨',`<p><strong>I działaj natychmiast, niezależnie od liczb, jeśli:</strong> dziecko przestało mówić albo pokazywać się na kamerze, choć wcześniej to robiło · próbowało coś powiedzieć, a nie było na to czasu · powiedziało ci, że coś jest nie tak · masz złe przeczucie. <strong>Twoja ocena też jest sygnałem.</strong></p>`)}
  `}
 ],
 ix:{
  title:'Powolne osuwanie się, nagłe zatrzymanie czy zaangażowane, a mimo to odchodzi?',
  instr:'Dla każdej zanonimizowanej historii postępów wybierz, który to wzorzec — a potem wybierz właściwy pierwszy krok. 70%, aby odblokować Moduł 2.',
  items:[
   {type:'choice', prompt:'Frekwencja i praca na lekcji dziecka po cichu spadają od pięciu ostatnich lekcji, za każdym razem trochę bardziej, a przez dwie ostatnie kamera była wyłączona.', opts:['Powolne osuwanie się','Nagłe zatrzymanie','Zaangażowane, a mimo to odchodzi'], correct:0, fb:'To powolne osuwanie się — klasyczne oddalanie się, i ten przypadek, który najłatwiej odwrócić, im wcześniej zareagujesz.'},
   {type:'choice', prompt:'Na ostatniej lekcji dziecko zachowywało się zupełnie normalnie — pełna obecność, włączona kamera, odrobiona praca domowa — a w tym tygodniu po prostu się nie pojawiło, bez żadnej wiadomości.', opts:['Powolne osuwanie się','Nagłe zatrzymanie','Zaangażowane, a mimo to odchodzi'], correct:1, fb:'To nagłe zatrzymanie. Coś się wydarzyło — zapytaj, nie zakładaj.'},
   {type:'choice', prompt:'Dziecko było na każdej lekcji, jest aktywne i oddaje wszystkie prace — a mimo to rodzina właśnie poprosiła o rezygnację.', opts:['Powolne osuwanie się','Nagłe zatrzymanie','Zaangażowane, a mimo to odchodzi'], correct:2, fb:'Zaangażowane, a mimo to odchodzi. Przyczyną nie jest zaangażowanie — tylko coś w rodzaju poziomu, oczekiwań, harmonogramu albo okoliczności. Więcej motywacji tego nie naprawi; znajdź prawdziwy powód i przekaż go dalej.'},
   {type:'choice', prompt:'Jaki jest właściwy pierwszy krok przy „powolnym osuwaniu się”?', opts:['Odczekać jeszcze kilka lekcji, żeby mieć pewność, że to rzeczywisty wzorzec','Działać od razu — ten przypadek najłatwiej odwrócić, im wcześniej zareagujesz','Uznać, że to chwilowe, i sprawdzić ponownie w przyszłym miesiącu'], correct:1, fb:'Powolne osuwanie się to dokładnie to, co wczesne działanie może odwrócić. Czekanie to marnowanie przewagi, którą masz.'},
   {type:'choice', prompt:'Jaki jest właściwy pierwszy krok przy „nagłym zatrzymaniu”?', opts:['Uznać, że to nic takiego, i poczekać, aż dziecko samo wróci','Zapytać — dowiedzieć się, co się naprawdę stało, zamiast zgadywać','Od razu poinformować rodzinę, że dziecko zostaje w tyle'], correct:1, fb:'Nagłe zatrzymanie ma konkretną przyczynę. Dowiedz się, jaką, zanim zdecydujesz, co z tym zrobić.'},
   {type:'choice', prompt:'Jaki jest właściwy pierwszy krok w przypadku „zaangażowane, a mimo to odchodzi”?', opts:['Dawać dziecku więcej pochwał i zachęty, żeby utrzymać jego motywację','Dowiedzieć się, jaki jest prawdziwy powód — poziom, oczekiwania, harmonogram, okoliczności — i szybko przekazać sprawę dalej','Uznać, że nic nie da się zrobić, skoro dziecku i tak dobrze szło'], correct:1, fb:'Więcej motywacji nie naprawi przyczyny, która nigdy nie dotyczyła motywacji. Dowiedz się, co to naprawdę jest, i szybko przekaż to właściwej osobie.'}
  ]
 }
},
{id:'m2', numLabel:'Moduł 2', emoji:'🖥️', color:'var(--blue)',
 title:'Czytanie widoku Postępy',
 desc:'W niecałe dwie minuty sprawdź, czy któreś dziecko w twojej grupie się oddala — w praktyce, w symulacji BO.',
 obj:'W niecałe dwie minuty sprawdzić, czy któreś dziecko w twojej grupie się oddala — i zweryfikować dwie rzeczy, które zawsze trzeba wiedzieć przed pierwszą lekcją z nowym uczniem.',
 sections:[
  {t:'👤 2.1 · Przed pierwszą lekcją z nowym uczniem — zawsze', html:`
   <div class="card"><p>Jednym z najważniejszych kroków przed rozpoczęciem pracy z nową grupą — i takim, który może zapobiec wielu późniejszym problemom — jest przejrzenie profilu ucznia i komentarzy Obsługi Klienta.</p></div>
   ${iconGrid([
     {ic:'🎂', html:`<strong>Zgodność wieku.</strong> Czy wiek dziecka pasuje do kursu, na który zostało zapisane.`},
     {ic:'🎯', html:`<strong>Zainteresowania.</strong> Co to dziecko lubi — przydatne do przykładów i krótkich rozmów od pierwszej lekcji.`},
     {ic:'📝', html:`<strong>Notatki od rodziców lub poprzednich korepetytorów.</strong> Szczególnie jeśli dziecko przeszło z innej grupy.`}
   ])}
   ${co('co-idea','💡',`<p>Te informacje pomagają ci zrozumieć, jak nawiązać kontakt z każdym uczniem, a także wychwycić potencjalne problemy lub poprosić o zmiany <strong>jeszcze zanim grupa w ogóle wystartuje.</strong></p>`)}
   <div class="card"><p>W poniższej symulacji dowiesz się, jak przejrzeć te informacje w BO i wykorzystać je, by przygotować się do pracy z nową grupą.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Profil ucznia</span><iframe src="Simulacion_BO_M2_Profile_PL.html" title="BO — Profil ucznia" loading="lazy"></iframe></div></div>
  `},
  {t:'📊 2.2 · Widok Postępy — twój cotygodniowy przegląd w 60 sekund', html:`
   <div class="card"><p>Poniżej widać dokładnie, jak wygląda ekran Postępy. Wykonaj kroki w symulacji, aby dowiedzieć się, gdzie znajdują się praca na lekcji i praca domowa, co oznacza każdy kolor i jak odczytać wzorzec.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Postępy</span><iframe src="Simulacion_BO_M2_Progress_PL.html" title="BO — Postępy" loading="lazy"></iframe></div></div>
   ${co('co-danger','🚨',`<p>Zobacz, co mówi ekran tego ucznia: wysokie, zielone wyniki <strong>Na lekcji</strong> — ale każda pojedyncza komórka <strong>W domu</strong> jest pomarańczowa, „nieoddane”. <strong>Ten sam uczeń, te same lekcje, zupełnie inna historia.</strong> Wszystko jest w porządku, dopóki patrzysz; kurs przestaje mieć znaczenie w chwili, gdy cię nie ma.</p>`)}
   <div class="card"><h4>Jak odczytać go w niecałą minutę</h4>
   <ol><li><strong>Szukaj serii zer.</strong> <strong>Dwa z rzędu wystarczą, by działać.</strong> Seria kolejnych zer to najmocniejszy sygnał na tym ekranie — znacznie bardziej wymowny niż jakakolwiek pojedyncza komórka.</li>
   <li><strong>Porównaj obie zakładki tego samego dziecka.</strong> Wysoko Na lekcji, pusto W domu → jest z tobą na lekcji, ale w domu kurs przestał mieć znaczenie. Nisko Na lekcji, nieźle W domu → coś na lekcji nie działa: trudność, tempo albo uwaga.</li>
   <li><strong>Porównaj dziecko z resztą grupy.</strong> Te same liczby znaczą co innego w zależności od tego, czy wszyscy mają 30/50, czy tylko to jedno dziecko.</li>
   <li><strong>Sprawdź, gdzie seria się zaczyna.</strong> Od której lekcji? Wróć do tego, co się wtedy wydarzyło — zwykle tam jest odpowiedź.</li>
   <li><strong>Sprawdź przy tym frekwencję.</strong> To, co tu widzisz, to obecność zarejestrowana w Back Office, a nie faktyczna obecność na lekcji — czytaj to jako „czy przyszło”, a nie „jak bardzo było zaangażowane”.</li></ol></div>
   ${co('co-danger','🚨',`<p><strong>Rób to raz w tygodniu, dla całej grupy, a nie tylko dla dziecka, o które już się martwisz.</strong> Cały sens przeglądu polega na tym, by znaleźć to, którego <em>jeszcze nie</em> zauważasz.</p>`)}
   ${co('co-idea','🧭',`<p><strong>Prowadzisz kurs, w którym praca domowa lub praca na lekcji odbywa się poza platformą?</strong> Widok Postępy nie pokaże ci nic przydatnego — ale brakuje zapisu, a nie informacji. Zrób to świadomie zamiast automatycznie: proś dzieci, by pokazywały swoją pracę przez udostępnianie ekranu, często sprawdzaj postępy podczas samodzielnej pracy, zadawaj pracę domową wyraźnie i na głos, a na następnej lekcji wracaj do niej, zwracając się do dzieci po imieniu. Te same sygnały, te same progi — po prostu musisz je zdobyć samodzielnie.</p>`)}
  `}
 ],
 ix:{
  title:'Czytanie przeglądu — szybki sprawdzian',
  instr:'Na podstawie powyższego przykładu z BO odpowiedz na pytania. 70%, aby odblokować Moduł 3.',
  items:[
   {type:'choice', prompt:'W powyższym przykładzie wyniki Na lekcji tego ucznia pozostawały wysokie (zielone), a W domu na każdej lekcji widniało „nieoddane” (pomarańczowe). Co to najprawdopodobniej oznacza?', opts:['Problem z pracą domową/motywacją — kurs przestał mieć znaczenie, gdy korepetytor nie patrzy','Problem z pracą na lekcji/trudnością na samej lekcji','Nic — jedna niska zakładka nie ma znaczenia, jeśli druga jest w porządku'], correct:0, fb:'Wysoko Na lekcji przy pustym W domu wskazuje na motywację lub wsparcie rodziny w domu, a nie na trudność na lekcji.'},
   {type:'choice', prompt:'A gdyby było odwrotnie — Na lekcji spada do zera, a W domu utrzymuje się na rozsądnym poziomie — co by to najprawdopodobniej oznaczało?', opts:['Problem z pracą domową/motywacją w domu','Problem z pracą na lekcji/trudnością — tempo, trudność albo zbyt mało uwagi na lekcji','Ten uczeń w gruncie rzeczy radzi sobie dobrze, skoro wciąż odrabia prace domowe'], correct:1, fb:'Gdy prace domowe się trzymają, a praca na lekcji spada, zwykle wskazuje to na coś na samej lekcji — trudność, tempo albo uwagę.'},
   {type:'choice', prompt:'Na co najbardziej warto zwracać uwagę podczas przeglądu widoku Postępy?', opts:['Na najniższy pojedynczy wynik w całej tabeli','Na serię dwóch lub więcej zer (albo „nieoddane”) z rzędu','Na to, czy suma modułu wygląda na okrągłą liczbę'], correct:1, fb:'Seria kolejnych zer mówi znacznie więcej niż jakakolwiek pojedyncza niska komórka — to najwyraźniejszy sygnał na całym ekranie.'},
   {type:'choice', prompt:'Dlaczego co tydzień warto sprawdzać zarówno Na lekcji, jak i W domu dla każdego dziecka — a nie tylko dla tego, o które już się martwisz?', opts:['Bo sens cotygodniowego przeglądu polega na znalezieniu dziecka, którego jeszcze nie zauważasz','Bo to formalny wymóg, a nie dlatego, że pozwala dostrzec coś nowego','Bo W domu jest ważniejsze niż Na lekcji, więc tylko tę zakładkę warto sprawdzać'], correct:0, fb:'Przegląd ma sens tylko wtedy, gdy wyłapuje dziecko, którego wcześniej nie było na twoim radarze.'},
   {type:'choice', prompt:'Co zawsze trzeba sprawdzić przed pierwszą lekcją z nowym uczniem?', opts:['Nic — wszystkiego, czego trzeba, dowiesz się w trakcie nauczania','Pola Info i Komentarze w profilu ucznia','Tylko jego listę obecności u poprzedniego korepetytora'], correct:1, fb:'Dwie minuty na przejrzenie pól Info i Komentarze przed pierwszą lekcją to najtańszy i najbardziej wartościowy nawyk w całym szkoleniu.'}
  ]
 }
},
{id:'m3', numLabel:'Moduł 3', emoji:'🎬', color:'var(--blue)',
 title:'Działanie na lekcji',
 desc:'Wykorzystaj samą lekcję jako interwencję — zaangażowanie to najszybsze narzędzie, jakie masz.',
 obj:'Wykorzystać samą lekcję jako interwencję — bo na wirtualne, nieobowiązkowe zajęcia pozaszkolne dziecko wraca tylko wtedy, gdy znalazło na nich coś, dla czego warto wracać.',
 sections:[
  {t:'🔌 3.1 · Dlaczego zaangażowanie waży tu więcej', html:`
   <div class="card"><p>Nasi uczniowie nie muszą tu być tak, jak muszą być w szkole. Są w domu, każde rozproszenie jest na wyciągnięcie ręki, a brakuje fizycznej obecności, która w prawdziwej sali utrzymuje uwagę. <strong>Więź, którą budujesz na każdej lekcji, to nie miły dodatek — to powód, dla którego dziecko decyduje się wrócić w przyszłym tygodniu.</strong></p>
   <p>A gdy dziecko zaczyna się oddalać, lekcja jest twoim najszybszym narzędziem. Nie musisz czekać na niczyje pozwolenie, by zmienić sposób jej prowadzenia.</p></div>
  `},
  {t:'👋 3.2 · Pierwsze minuty decydują o wielu rzeczach', html:`
   <div class="card"><p>Początek lekcji nadaje ton wszystkiemu, co dzieje się potem. Dziecko, które loguje się i czuje ciepło w powitaniu, jest w zupełnie innym nastroju niż to, które od razu słyszy „otwórzcie zadanie”.</p></div>
   ${doavoid(
     ['Witaj z prawdziwą energią: <em>„jak dobrze cię dziś widzieć”</em>','Zadaj krótkie, osobiste pytanie przed przejściem do materiału','Powiedz, jaki jest dzisiejszy cel, i mów to z przekonaniem','Zauważ na głos, kto był nieobecny: <em>„dobrze, że jesteś z powrotem”</em>'],
     ['Przechodzenie od razu do materiału bez przywitania','Pośpiech lub napięcie słyszalne na początku','Brak wyjaśnienia, co zaraz będzie się działo i dlaczego','Pozwolenie, by dziecko wracające po nieobecności przeszło niezauważone']
   )}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Płaskie otwarcie</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1GyQV2tEQq3OuDPfFI0NZTQRjWhg_9Rri/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Ciepłe otwarcie</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RqXcQLKBiWEhV97ZasJGIFuJhB8yU0Dh/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'💬 3.3 · Informacja zwrotna, która motywuje, a nie tylko poprawia', html:`
   <div class="card"><p>Powtarzany ogólnikowy komplement — <em>„dobrze”, „super”</em> — szybko traci moc i po cichu przekazuje odwrotny komunikat: że tak naprawdę nie przyglądasz się pracy dziecka.</p></div>
   ${co('co-idea','🔁',`<p><strong>Wyróżnij → Zapytaj → Zaktywizuj</strong></p>
   <ol><li><strong>Wyróżnij</strong> coś konkretnego, co dziecko <em>postanowiło</em> zrobić, i powiedz, dlaczego to działa.</li>
   <li><strong>Zapytaj</strong> o to z prawdziwą ciekawością, traktując dziecko jako eksperta od własnej pracy.</li>
   <li><strong>Zaktywizuj</strong>, dając prawdziwy wybór co do następnego kroku.</li></ol>
   <p>Zamiast <em>„Świetna robota!”</em> → <em>„Bardzo mi się podoba, że twoja postać skacze akurat w tym miejscu — zaplanowałeś to od początku, czy wpadłeś na to w trakcie budowania sceny? Chcesz dać tej postaci jakąś historię, czy uważasz, że jest już skończona?”</em></p>`)}
  `},
  {t:'✋ 3.4 · Jak zadbać o to, by każde dziecko miało prawdziwą kolej', html:`
   <div class="card"><p>Dzieci wracają, bo znalazły miejsce, w którym czują się zauważone i są częścią czegoś. A najszybszy sposób, by któreś stracić, to sytuacja, w której próbuje się włączyć i nic z tego nie wynika.</p></div>
   ${co('co-danger','🚨',`<p><strong>„Rozkładaj uwagę po równo” to za mało.</strong> Każdy korepetytor wierzy, że tak robi. <strong>Zrób z tego coś policzalnego.</strong></p>
   <ul><li>Trzymaj listę uczestników w zasięgu wzroku i <strong>odhaczaj każde imię, gdy dziecko dostaje prawdziwą kolej</strong> — nie spojrzenie, ale prawdziwą wymianę.</li>
   <li><strong>W połowie lekcji sprawdź, kto jeszcze nie jest odhaczony.</strong> Do tych dzieci zwróć się w następnej kolejności.</li>
   <li>Używaj czatu i reakcji jako prawdziwego drugiego kanału, a nie nagrody pocieszenia: <em>„wpiszcie swoje pomysły na czacie, a ja przeczytam je wszystkie na głos”.</em></li>
   <li><strong>Każdy, kto kończy lekcję z pytaniem bez odpowiedzi, dostaje odpowiedź na piśmie w ciągu 24 godzin.</strong></li>
   <li>Jeśli grupa jest po prostu zbyt liczna, by było to arytmetycznie możliwe, <strong>powiedz o tym Team Leaderowi.</strong> To sygnał do przekazania dalej, a nie osobista porażka.</li></ul>`)}
   ${doavoid(
     ['Nazywaj konkretne sukcesy: <em>„Sofia, twoja logika jest tu naprawdę przejrzysta”</em>','Używaj czatu i reakcji, by nawet najcichsze dzieci mogły się włączyć','Doceniaj wysiłek: <em>„spróbowałeś trzech sposobów — tak myśli programista”</em>','Podczas samodzielnej pracy zaglądaj kolejno do każdego dziecka'],
     ['Ogólnikowe pochwały kierowane do całej grupy po równo','Zwracanie uwagi tylko na tych, którzy kończą pierwsi','Traktowanie błędów jako czegoś złego albo podawanie odpowiedzi, zanim dzieci zdążą pomyśleć','To samo tempo dla wszystkich, przez co jedni się nudzą, a inni nie nadążają']
   )}
  `},
  {t:'🧩 3.5 · Ta sama rada nie działa na każde dziecko', html:`
   <div class="card"><p>Dwoje dzieci, które utknęły na identycznym zadaniu, może potrzebować od ciebie zupełnie przeciwnych rzeczy. Rozpoznawanie kilku wzorców i posiadanie innej reakcji na każdy z nich to właśnie to, co zmienia zwykłą lekcję w taką, na której każde dziecko naprawdę chce być.</p></div>
   ${patternCards([
     {ic:'🙈', title:'Nieśmiałe', desc:'Kamera włączona, ale rzadko się odzywa; krótkie odpowiedzi; nigdy się nie zgłasza; kurczy się, gdy zostaje nagle wywołane', note:'Najpierw sposoby udziału bez presji — czat, reakcje, kciuk w górę. Zapraszaj <strong>bezpośrednio i prywatnie</strong>.'},
     {ic:'😣', title:'Łatwo się frustruje', desc:'„Nie dam rady” pojawia się szybko; rezygnuje przy pierwszym błędzie; widocznie przejmuje się drobnymi pomyłkami', note:'Mniejsze kroki. Mów na głos, że błędy są normalne. Zapytaj, jak idzie, <strong>zanim</strong> frustracja narośnie.'},
     {ic:'🎯', title:'Perfekcjonista', desc:'Wielokrotnie poprawia to samo; niechętnie oddaje cokolwiek „nieskończonego”', note:'Chwal decyzję i próbę. Daj wyraźne pozwolenie na oddanie niedoskonałej wersji roboczej.'},
     {ic:'⚡', title:'Szybko się nudzi', desc:'Kończy szybko; po skończeniu rozprasza innych; „to wszystko?”', note:'Prawdziwe dodatkowe wyzwanie, zawsze przygotowane. Rozważ rolę pomocnika dla innych. <strong>Nigdy nie zostawiaj go bez zajęcia.</strong>'}
   ],2)}
  `},
  {t:'🎂 3.6 · To, co motywuje, zmienia się z wiekiem', html:`
   <div class="two-col">
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧒</span>Młodsze dzieci (mniej więcej 6–9 lat)</h4>
   <ul><li>Motywacja wynika z relacji i zabawy, a nie z długoterminowych celów.</li>
   <li>Zdolność skupienia uwagi jest krótka. Twoja energia trzyma je bardziej niż materiał.</li>
   <li>Działa wyobraźnia — misja, postać, historia.</li>
   <li>Ich konkretne zainteresowania to bezpośrednia droga do ich uwagi.</li>
   <li>Błędy emocjonalnie ważą więcej. Pocieszenie musi przyjść od razu.</li>
   <li>Potrzebują więcej powtórzeń i praktycznych pokazów, zanim spróbują samodzielnie.</li></ul></div>
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧑</span>Starsze dzieci (mniej więcej 10–14+ lat)</h4>
   <ul><li>Motywacja przesuwa się w stronę kompetencji i sensu — i zrozumienia, <em>dlaczego</em> coś jest ważne.</li>
   <li>Są wrażliwe na protekcjonalny ton. Najważniejsze jest traktowanie ich jako osób kompetentnych.</li>
   <li>Informacja zwrotna o ich <strong>rozumowaniu i decyzjach</strong> trafia lepiej niż pochwała samego wysiłku.</li>
   <li>Dynamika grupy ma większe znaczenie — rówieśnicy wpływają na to, czy odważą się zadać pytanie.</li>
   <li>Potrafią dłużej się skupić, ale szybko się wyłączają, gdy tempo się wlecze albo wydaje się dziecinne.</li>
   <li>Liczy się samodzielność — wybór sposobu podejścia do zadania się opłaca.</li></ul></div>
   </div>
   ${co('co-idea','💡',`<p>Narzędzia są te same w każdym wieku — ciepły początek, konkretna informacja zwrotna, przestrzeń do udziału. Zmienia się to, <strong>co działa motywująco</strong>: młodsze dzieci muszą czuć, że to zabawa i że są ważne; starsze — że warto poświęcić na to czas i że naprawdę są w tym dobre.</p>`)}
  `},
  {t:'🔧 3.7 · Gdy zawodzi technologia', html:`
   <div class="card"><p>Coś na pewno się zepsuje — zamrożony ekran, mikrofon, który nie chce się połączyć. To, czy zrujnuje to lekcję, zależy nie od samej usterki, lecz od reakcji dorosłego.</p></div>
   ${co('co-cute','🫂',`<p><strong>Pierwszy krok jest emocjonalny, nie techniczny.</strong> Zareaguj spokojnie i powiedz na głos, że to normalne. Spokojny dorosły daje dziecku sygnał, że nie ma się czym martwić, a grupa przejmuje twój nastrój. Dopiero gdy emocje opadną, rozwiązywanie problemu technicznego ma sens.</p>`)}
  `}
 ],
 ix:{
  title:'Śmieć czy skarb — nawyki na lekcji',
  instr:'Przypisz każdy nawyk do właściwej strefy: nawyki, które budują lekcję, na którą dzieci chcą wracać, albo nawyki, przez które po cichu tracisz dziecko. 70%, aby odblokować Moduł 4.',
  items:[
   {type:'sort', prompt:'', card:'Odhaczanie imienia każdego dziecka, gdy dostaje prawdziwą kolej, i sprawdzanie w połowie lekcji, kto jeszcze jej nie miał', zones:[{label:'🌱 Buduje lekcję', fb:'Dobrze — to właśnie zmienia „rozkładanie uwagi” z zamiaru w coś rzeczywistego.'},{label:'🗑️ Tracisz przez to dziecko', fb:'Niezupełnie — śledzenie prawdziwych kolejek to nawyk-skarb, a nie śmieć.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Chwalenie całej grupy tym samym „świetna robota, wszyscy!” na koniec każdej lekcji', zones:[{label:'🌱 Buduje lekcję', fb:'Niezupełnie — ogólnikowa, powtarzana pochwała to właśnie taki nawyk, który po cichu przestaje motywować.'},{label:'🗑️ Tracisz przez to dziecko', fb:'Dobrze — powtarzana ogólnikowa pochwała szybko traci moc i odbierana jest tak, jakby nikt naprawdę nie patrzył na pracę.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Gdy coś technicznie się psuje — spokojna reakcja i mówienie na głos, że to normalne, zanim zacznie się naprawiać problem', zones:[{label:'🌱 Buduje lekcję', fb:'Dobrze — pierwszy krok po awarii technicznej to opanowanie emocji, a nie sama naprawa.'},{label:'🗑️ Tracisz przez to dziecko', fb:'Niezupełnie — zachowanie spokoju i potraktowanie usterki jako czegoś normalnego to właśnie właściwy pierwszy krok.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Dawanie każdemu dziecku w grupie dokładnie tego samego tempa i dokładnie tego samego zadania, niezależnie od tego, jak sobie radzi', zones:[{label:'🌱 Buduje lekcję', fb:'Niezupełnie — jedno stałe tempo dla całej grupy sprawia, że jedni się nudzą, a inni nie nadążają.'},{label:'🗑️ Tracisz przez to dziecko', fb:'Dobrze — to samo tempo dla wszystkich sprawia, że jedni się nudzą, a inni nie nadążają; to jedna z najwyraźniejszych przyczyn utraty zaangażowania.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Zostawienie pytania z czatu bez odpowiedzi, bo skończył się czas lekcji', zones:[{label:'🌱 Buduje lekcję', fb:'Niezupełnie — pytanie pozostawione bez odpowiedzi to jeden z najwyraźniejszych sygnałów, po którym dziecko dochodzi do wniosku, że tu się nie liczy.'},{label:'🗑️ Tracisz przez to dziecko', fb:'Dobrze — każdy, kto kończy lekcję z pytaniem bez odpowiedzi, powinien dostać odpowiedź na piśmie w ciągu 24 godzin.'}], correctZone:1, fb:''}
  ]
 }
},
{id:'m4', numLabel:'Moduł 4', emoji:'📞', color:'var(--blue)',
 title:'Działanie między lekcjami',
 desc:'Rozmowa indywidualna, która naprawdę działa, reakcja na nieobecności i informowanie rodziny na bieżąco.',
 obj:'Robić między lekcjami to, co sprawia, że oddalające się dziecko nie zamieni się w prośbę o zwrot środków: rozmowę indywidualną, reakcję na nieobecności i informowanie rodziny na bieżąco.',
 sections:[
  {t:'🏠 4.1 · Rutyna prac domowych, która naprawdę działa', html:`
   <div class="card"><p>Prace domowe nie są oddawane regularnie przez przypadek. Cztery drobne nawyki, za każdym razem, sprawiają, że ich liczba nie spada po cichu do zera.</p></div>
   ${stepFlow([
     {ic:'🗣️', label:'1. Wyjaśnij — co i dlaczego to ważne, na głos'},
     {ic:'⏰', label:'2. Przypomnij — krótkie przypomnienie przed terminem'},
     {ic:'🔦', label:'3. Wskaż — nazwij konkretnie, czego brakuje'},
     {ic:'📝', label:'4. Sprawdź — prawdziwy komentarz, nie tylko ocena'}
   ])}
   ${iconGrid([
     {ic:'🗣️', html:`<strong>Wyjaśnij.</strong> Zadając pracę, powiedz, na czym polega i dlaczego jest ważna przed następną lekcją — a nie tylko „zróbcie zadania od 1 do 5”.`},
     {ic:'⏰', html:`<strong>Przypomnij.</strong> Krótkie przypomnienie przed terminem, zwłaszcza dla młodszych dzieci — wiadomość albo chwila na koniec poprzedniej lekcji.`},
     {ic:'🔦', html:`<strong>Wskaż.</strong> Jeśli pracy brakuje, powiedz o tym konkretnie i z imienia na następnej lekcji — a nie ogólnikowe „niektórzy z was nie odrobili pracy domowej”.`},
     {ic:'📝', html:`<strong>Sprawdź.</strong> Zostaw <strong>prawdziwy komentarz, który rodzina może przeczytać</strong> — co wyszło dobrze, co nie, jeden konkretny kolejny krok. Samo milczące „ptaszkowanie” nikomu nic nie mówi.`}
   ])}
   ${co('co-idea','💡',`<p>To jest rutyna — co tydzień, dla każdego dziecka, a nie tylko dla tych, o które już się martwisz. To także dzięki niej zero coś znaczy, gdy je widzisz: wiesz, że nie wynika z tego, że nikt niczego nie wyjaśnił, nie przypomniał ani nie zauważył.</p>`)}
  `},
  {t:'☎️ 4.2 · Rozmowa indywidualna, która naprawdę działa', html:`
   <div class="card"><p>Gdy pojawia się sygnał z Modułu 1, to jest właściwy ruch. Dobrze przeprowadzona rozmowa często sama rozwiązuje problem.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Nazwij konkretną rzecz, którą zauważasz.</strong> Ogólnikowa troska brzmi ogólnikowo. <em>„Nie udało ci się zrobić dwóch ostatnich projektów”</em> — a nie <em>„wszystko w porządku?”</em>`},
     {ic:'🚧', html:`<strong>Pytaj o przeszkodę, nie o postawę.</strong> <em>„Co ci przeszkodziło?”</em> — a nie <em>„dlaczego się nie starasz?”</em> Pierwsze pytanie zaprasza do odpowiedzi; drugie — do obrony.`},
     {ic:'🤫', html:`<strong>Nigdy przy całej grupie.</strong> Prywatna wiadomość, czat albo ostatnia minuta lekcji w cztery oczy.`}
   ])}
   ${co('co-idea','💡',`<p>Potem <strong>wróć do tematu dwie lekcje później</strong>, bez względu na to, co się wydarzyło. Rozmowa, do której się nie wraca, uczy dziecko, że sprawa została zauważona, ale tak naprawdę nikomu na niej nie zależało.</p>`)}
   <div class="card"><p>Jednym ze sposobów na odzyskanie zniechęconego ucznia jest omawianie prac domowych — i <strong>to, jak</strong> to robimy. W dwóch filmach poniżej zobaczysz dwie bardzo różne sytuacje: w jednej korepetytor ignoruje fakt, że uczeń nie odrobił pracy domowej, a w drugiej korepetytor z energią na nowo włącza ucznia do lekcji, dzięki czemu ten czuje się częścią grupy.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Korepetytor, który nie motywuje</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1zwbSiLXBj9mcqhKsFKNJriwSppbcEY5B/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Korepetytor, który motywuje</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1m2m_RRNTf5zMh2-1NmExvEMGZX0DPIaK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'📵 4.3 · Gdy dziecko opuszcza lekcję', html:`
   <div class="card"><p>Wysłanie nagrania to nie jest plan nadrabiania zaległości. <strong>Dwie opuszczone lekcje na początku kursu mogą go zakończyć</strong>, bo dziecko wraca do grupy, w której wszyscy potrafią coś, czego ono nie potrafi — i to na oczach innych.</p></div>
   ${timeline([
     {ic:'📅', label:'Tego samego dnia', items:[
       '<strong>Napisz do rodziny</strong>, zaczynając od ciepłych słów: <em>„brakowało nam jej dzisiaj — czy wszystko w porządku?”</em> Empatia przede wszystkim.',
       '<strong>Wyślij nagranie plus tę jedną rzecz, która jest najważniejsza.</strong> Nie „obejrzyjcie całą godzinę” — wskaż jeden ważny fragment.'
     ]},
     {ic:'⏳', label:'Przed następną lekcją', items:[
       '<strong>Pięć minut indywidualnie</strong> albo krótkie pisemne wyjaśnienie jednego pojęcia, którego dziecko potrzebuje, by wrócić do grupy — jedno pojęcie, a nie cała lekcja.'
     ]},
     {ic:'🏫', label:'Na następnej lekcji', items:[
       '<strong>Daj mu szybki, łatwy i widoczny sukces</strong>, żeby wróciło z poczuciem, że sobie radzi, a nie że zostało w tyle.',
       '<strong>Pokaż, że zauważasz jego nieobecność</strong> — krótko i ciepło. Chodzi właśnie o to, by poczuło, że go brakowało.'
     ]},
     {ic:'🚩', label:'Jeśli opuściło dwie lekcje lub więcej', items:[
       '<strong>Powiedz o tym Team Leaderowi i zostaw komentarz w BO, aby Obsługa Klienta też go zobaczyła.</strong> To próg, od którego wewnętrznie rozmawia się o dodatkowej lekcji wyrównawczej. Ty zgłaszasz temat — nie proponujesz jej rodzinie, ale też jej nie wykluczasz.'
     ]}
   ])}
  `},
  {t:'💌 4.4 · Jak utrzymać rodzinę po swojej stronie', html:`
   <img src="Images/Image_3.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Większość rodzin, które odchodzą, nigdy nie usłyszała niczego dobrego. Słyszały nas przy zapisie, a potem już nie — aż do momentu, gdy pojawił się problem.</p></div>
   ${checkbox([
     `<strong>Po dobrej lekcji napisz coś konkretnego.</strong> Raz. Nie musi to być długie: <em>„dziś sama rozgryzła pętlę — chciałem/chciałam, żeby Państwo o tym wiedzieli.”</em> Ten jeden nawyk zmienia to, jak rodzina odbiera wszystko, co przychodzi później.`,
     `<strong>Gdy dziecko wraca po nieobecności albo trudnościach, opowiedz rodzinie o jego sukcesie.</strong>`,
     `<strong>Jeśli zgłaszasz coś wewnętrznie, powiedz rodzinie, że sprawa została zgłoszona</strong> — i mniej więcej kiedy dostaną odpowiedź. Cisza po problemie szkodzi bardziej niż sam problem.`,
     `<strong>Zadbaj o to, by być pod ręką, gdy pojawią się pytania o naukę.</strong> Rodzic, który chce porozmawiać o postępach dziecka, powinien trafić na kogoś, kto szybko odpowiada.`
   ])}
   ${co('co-danger','⛔',`<p><strong>I nadal: rozmawiaj o nauce, działanie przekaż dalej.</strong> Żadnych obietnic dotyczących grup, harmonogramów, poziomów, pakietów, zwrotów środków czy dodatkowych lekcji — to nie twoja rola, by je dawać ani by ich odmawiać.</p>`)}
  `}
 ],
 ix:{
  title:'Wybierz wiadomość',
  instr:'Dla każdego scenariusza wybierz właściwą wiadomość. 70%, aby odblokować Moduł 5.',
  items:[
   {type:'choice', prompt:'<strong>Scenariusz:</strong> dziecko nie oddało niczego przez dwie ostatnie lekcje, ale nadal normalnie na nie przychodzi. Która wiadomość do <strong>dziecka</strong> jest tu właściwa?', opts:[
     '„Wszystko w porządku? Ostatnio wydajesz się jakiś nieswój.”',
     '„Nie oddałeś dwóch ostatnich projektów, a to do ciebie niepodobne — co ci przeszkodziło?”',
     '„Dlaczego nie odrabiasz swojej pracy? Musisz nadążać.”'
   ], correct:1, fb:'Nazwanie konkretnej rzeczy, którą widzisz, i pytanie o przeszkodę zamiast o postawę — to właśnie otwiera rozmowę, zamiast prowokować obronę albo wzruszenie ramion.'},
   {type:'choice', prompt:'<strong>Ten sam scenariusz:</strong> dziecko nie oddało niczego przez dwie lekcje, nadal normalnie przychodzi. Która wiadomość do <strong>rodziny</strong> jest właściwa?', opts:[
     '„Widzę, że [imię] nie oddał prac z dwóch ostatnich lekcji — porozmawiałem/porozmawiałam z nim o tym i chciałem/chciałam, żeby Państwo o tym wiedzieli.”',
     '„[Imię] się nie stara i może powinien przejść do łatwiejszej grupy — czy możemy porozmawiać o możliwościach?”',
     '„Wszystko jest w porządku, chciałem/chciałam się tylko przywitać!”'
   ], correct:0, fb:'Ta wiadomość informuje rodzinę o postępach dziecka i pokazuje, że trzymasz rękę na pulsie — bez sugerowania zmiany grupy, poziomu czy jakiejkolwiek opcji, bo to nie ty przedstawiasz je rodzinie.'},
   {type:'choice', prompt:'<strong>Nowy scenariusz:</strong> dziecko opuściło wczorajszą lekcję bez wcześniejszej wiadomości. Jaki jest właściwy krok tego samego dnia?', opts:[
     'Wysłać link do nagrania bez żadnej wiadomości i poczekać, aż dziecko samo nadrobi zaległości',
     'Najpierw napisać ciepło do rodziny („brakowało nam jej dzisiaj, czy wszystko w porządku?”), a potem wysłać nagranie wraz z najważniejszym fragmentem',
     'Poczekać do następnej lekcji, zanim cokolwiek się powie, żeby nie robić z tego większej sprawy, niż jest'
   ], correct:1, fb:'Najpierw ciepło, potem ukierunkowane podsumowanie — nie sam link i nie cisza — to jest prawdziwy plan nadrabiania, a nie tylko „wysłanie nagrania”.'}
  ]
 }
},
{id:'m5', numLabel:'Moduł 5', emoji:'🧩', color:'var(--blue)',
 title:'Osiem sytuacji',
 desc:'Dla każdej z ośmiu rzeczy, które naprawdę zniechęcają rodziny: na co zwracać uwagę, co robić i komu powiedzieć.',
 obj:'Dla każdej z ośmiu rzeczy, które naprawdę zniechęcają rodziny: wiedzieć, na co zwracać uwagę, co robić na lekcji, co robić poza nią i komu powiedzieć.',
 sections:[
  {t:'', html:`
   <h3 class="acc-big-title">🧩 8 najczęstszych sytuacji prowadzących do zwrotu środków</h3>
  `},
  {t:'', html:`${accItem('😣 5.1 · Materiał jest za trudny', `
   <img src="Images/Image_5.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Uczeń może wykazywać kilka oznak, że sobie nie radzi. Może mówić „nie dam rady” wcześnie i często, poddawać się po popełnieniu błędu albo zaczynać pracę na lekcji i jej nie kończyć. Może też stać się cichszy, przestać udostępniać ekran albo wielokrotnie zadawać te same podstawowe pytania. Czasem uczeń zostaje w tyle po opuszczeniu zaledwie jednej lekcji i już nigdy w pełni tego nie nadrabia. Kolejnym sygnałem ostrzegawczym jest sytuacja, gdy jego praca na lekcji pozostaje słaba, choć wciąż próbuje odrabiać prace domowe.`)}
   ${stepIconBlock('⚡','Dostosuj — na następnej lekcji, bez pytania o zgodę', `<ul><li>Podziel zadanie na małe sukcesy (10 min)</li><li>Wyznacz prostszy, jasno określony cel, na głos</li><li>Mów, że błędy są normalne; pytaj, jak idzie, <strong>zanim</strong> narośnie frustracja</li><li>Po 2 lekcjach nadal nie ma postępu? Umów sesję z <strong>Mentorem Regionalnym</strong>, by zdobyć pomysły dydaktyczne</li></ul>`)}
   ${stepIconBlock('🗣️','Uzgodnij — TL + Ocena Korepetytorów w BO, w tym tygodniu', `<ul><li>Zgłoś, co widzisz i jak czuje się dziecko</li><li>Poproś o lekcję diagnostyczną/poziomującą, jeśli różnica poziomów jest realna</li><li>Nigdy samodzielnie nie poruszaj kwestii poziomu z rodziną</li></ul>`)}
   ${stepIconBlock('👪','Rodzina', `<p>Tylko to, co należy do ciebie: <em>„dodatkowe wsparcie na lekcjach, sprawa przekazana mojemu zespołowi”.</em> Nic o poziomach. Wróć do tematu w ciągu 2 lekcji.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Prośba o zwrot środków z tego powodu już wpłynęła?</strong> Przejdź od razu do Modułu 7 — próba zatrzymania ucznia zaczyna się na twojej najbliższej lekcji z tym dzieckiem.</p>`)}
  `)}
  ${accItem('😴 5.2 · Materiał jest za łatwy', `
   <img src="Images/Image_7.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Uczeń może kończyć pracę w połowie przewidzianego czasu i pytać: „To wszystko?”. Po skończeniu może się rozpraszać lub rozpraszać innych albo wspominać, że już zna ten materiał. Innym ważnym sygnałem jest sytuacja, gdy uczeń wykazuje duże możliwości, ale konsekwentnie nie odrabia prac domowych. W liczbach nuda może wyglądać dokładnie jak brak zaangażowania, dlatego ważne jest, by patrzeć głębiej.`)}
   ${stepIconBlock('⚡','Dostosuj — od razu', `<ul><li>Prawdziwe dodatkowe wyzwanie: ta sama umiejętność, trudniejsze polecenie</li><li>Niewielka rola pomocnika w grupie</li><li>Daj wybór; nigdy nie zostawiaj go bez zajęcia</li></ul>`)}
   ${stepIconBlock('🗣️','Uzgodnij — TL + Ocena Korepetytorów w BO, w tym tygodniu', `<p>Powiedz dokładnie: <em>„potrzebny wyższy poziom, to nie problem z motywacją”.</em> Poproś o lekcję diagnostyczną/sprawdzającą poziom.</p>`)}
   ${stepIconBlock('👪','Rodzina', `<p>Tylko: <em>„szybko łapie materiał, daję mu dodatkowe wyzwania, sprawa przekazana mojemu zespołowi”.</em> Wróć do tematu w ciągu 2 lekcji.</p>${co('co-ok','✅',`<p>Ten przypadek często udaje się rozwiązać — ale tylko wtedy, gdy ktoś coś powie.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Prośba o zwrot środków z tego powodu już wpłynęła?</strong> Przejdź od razu do Modułu 7 — próba zatrzymania ucznia zaczyna się na twojej najbliższej lekcji z tym dzieckiem.</p>`)}
  `)}
  ${accItem('🧩 5.3 · Specjalne potrzeby edukacyjne', `
   <img src="Images/Image_8.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Przychodzą do nas dzieci z autyzmem, ADHD, dysleksją, potrzebami sensorycznymi, lękiem — a czasem z wybitnymi uzdolnieniami, które również są specjalną potrzebą edukacyjną i wyglądają zupełnie inaczej niż zwykła nuda. Informacja o tym może być w profilu, mogła zostać raz wspomniana przez rodzinę albo nigdy nie paść na głos. Rodziny często najpierw podają inne wyjaśnienie — <em>„stracił zainteresowanie”</em>, <em>„to nie dla niego”</em> — a prawdziwy powód wychodzi na jaw dopiero wtedy, gdy ktoś zapyta we właściwy sposób.</p></div>
   ${noticeLine(`Notatka w profilu (Moduł 2.1) · przeciążenie sensoryczne · szybko słabnąca koncentracja · silne reakcje na drobne błędy · niepokój przy zmianach · wolne czytanie/pisanie · duże możliwości przy niestabilnej motywacji.`)}
   ${stepIconBlock('⚡','Dostosuj — tu jest najwięcej pracy i cała należy do ciebie', `<ul><li>Krótsze części, przewidywalna struktura, <strong>uprzedzaj przed każdą zmianą aktywności</strong></li><li>Instrukcje pisemne + ustne; kamera opcjonalna</li><li>Dostosuj samo zadanie; przede wszystkim chroń rutynę</li><li><strong>Mentor Regionalny</strong> może pomóc ci przygotować plan dla tego konkretnego dziecka</li></ul>${co('co-danger','🚨',`<p>Najpierw podejmij prawdziwą próbę. Ale jeśli różnica pozostaje zbyt duża, <strong>od razu eskaluj sprawę</strong> — to nie porażka.</p>`)}`)}
   ${stepIconBlock('🗣️','Uzgodnij — TL natychmiast + Ocena Korepetytorów w BO', `<p>Jeśli pomogłyby zajęcia indywidualne albo korepetytor z doświadczeniem w pracy ze specjalnymi potrzebami edukacyjnymi, <strong>zarekomenduj to — nie proponuj.</strong></p>`)}
   ${stepIconBlock('👪','Rodzina — ostrożnie', `<p>Najpierw sprawdź profil (2.1); jeśli nic w nim nie ma, zapytaj delikatnie. To, czego się dowiesz, zapisz w Komentarzach w BO.</p>${co('co-danger','⛔',`<p>Nigdy: <em>„nie nadąża”</em> ani nic, co brzmi jak diagnoza. Wracaj do tematu co 2 lekcje i zawsze po każdej zmianie.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Prośba o zwrot środków z tego powodu już wpłynęła?</strong> Przejdź od razu do Modułu 7 — próba zatrzymania ucznia zaczyna się na twojej najbliższej lekcji z tym dzieckiem.</p>`)}
  `)}
  ${accItem('📐 5.4 · Dziecko, wiek lub format nie pasują', `
   <img src="Images/Image_9.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Uczeń może mieć trudności, bo nie ma jeszcze umiejętności czytania wymaganych przez materiał albo nie jest w stanie skupić się przez całą lekcję. W niektórych przypadkach kurs może wymagać umiejętności znacznie wykraczających poza jego wiek lub obecny poziom. Innymi barierami mogą być trudności rodziny z przystosowaniem się do nauki online albo bariera językowa, której wcześniej nie zauważono. Takie sygnały mogą wskazywać, że problemem nie jest zaangażowanie, lecz niedopasowanie potrzeb ucznia do warunków nauki.`)}
   ${stepIconBlock('⚡','Dostosuj', `<p>Spróbuj wszystkiego — skróć, uprość, więcej pokazuj, więcej indywidualnej uwagi. Znaj granicę: dziecka, które jeszcze nie umie czytać, nie da się uczyć na kursie opartym głównie na czytaniu.</p>`)}
   ${stepIconBlock('🗣️','Uzgodnij — TL + Ocena Korepetytorów w BO', `<p>Powiedz dokładnie: <em>„to kwestia przydziału, nie motywacji”.</em> Przekaż sprawę dalej — to nie twoja decyzja.</p>`)}
   ${stepIconBlock('👪','Rodzina — tylko jeśli poprosi o to TL', `<p>Może istnieć kilka opcji, ale <strong>to nie ty je przedstawiasz.</strong> Przekaż dokładnie tę wiadomość, którą da ci TL, albo nie angażuj się w temat.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Prośba o zwrot środków z tego powodu już wpłynęła?</strong> Przejdź od razu do Modułu 7 — próba zatrzymania ucznia zaczyna się na twojej najbliższej lekcji z tym dzieckiem.</p>`)}
  `)}
  ${accItem('👥 5.5 · Grupa jest zbyt liczna i dziecko nigdy nie dostaje swojej kolei', `
   <img src="Images/Image_10.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${co('co-idea','🎯',`<p><strong>To jedyna sytuacja na tej liście, która dotyczy bezpośrednio zachowania korepetytora — i dlatego właśnie ją możesz naprawić najszybciej.</strong></p>`)}
   <div class="card"><p>Dziecko, które podnosi rękę, czeka, nie zostaje wywołane i zostaje z pytaniami bez odpowiedzi, dojdzie do wniosku, że nie liczy się w tej grupie. Mogą wystarczyć do tego dwie lekcje.</p></div>
   ${noticeLine(`Zwracaj uwagę na dzieci, które przestają podnosić rękę, na pytania na czacie, które pozostają bez odpowiedzi, albo na to, że za każdym razem odpowiada tych samych dwoje czy troje uczniów. Zwróć też uwagę na uczniów, którzy przez całą lekcję nie mają z tobą ani jednej interakcji.`)}
   ${stepIconBlock('⚡','Dostosuj — to umiejętność, której można się nauczyć', `<ul><li>Śledzenie kolejek (3.4): widoczna lista, jedno odhaczenie za kolejkę, sprawdzenie w połowie lekcji</li><li>Krótsze fragmenty, świadome korzystanie z czatu, praca w parach/małe zadania</li><li>Na każde pytanie bez odpowiedzi odpowiedz pisemnie w ciągu 24 h</li><li>Właśnie do tego służy sesja z <strong>Mentorem Regionalnym</strong> — poproś o nią, jeśli coś nie działa</li></ul>`)}
   ${stepIconBlock('🗣️','Uzgodnij — TL', `<p>Dopiero po prawdziwej próbie: wielkość grupy, format, kto jest pomijany, co zostało zmienione. Mniejsza grupa jest możliwa, ale tylko wtedy, gdy TL o tym wie.</p>`)}
   ${stepIconBlock('👪','Rodzina — tylko po uzgodnieniu z TL', `<p>Nie proponuj samodzielnie zmiany grupy. Możesz ciepło powiedzieć, że widzisz problem i zmieniasz sposób prowadzenia grupy — ta część należy do ciebie.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Prośba o zwrot środków z tego powodu już wpłynęła?</strong> Przejdź od razu do Modułu 7 — próba zatrzymania ucznia zaczyna się na twojej najbliższej lekcji z tym dzieckiem.</p>`)}
  `)}
  ${accItem('🔀 5.6 · Zmiana korepetytora, grupy lub harmonogramu została źle przyjęta', `
   <img src="Images/Image_11.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Ciągłość ma znacznie większe znaczenie, niż się wydaje — a największe dla dzieci, które już i tak są najbardziej wrażliwe.</p></div>
   ${co('co-ok','✅',`<p><strong>Dobra wiadomość, którą warto powiedzieć na głos: ten przypadek zwykle da się rozwiązać.</strong> Mamy wielu korepetytorów i wiele grup — niemal zawsze można znaleźć inne rozwiązanie, ale tylko wtedy, gdy problem zostanie szybko zgłoszony, dopóki rodzina wciąż szuka rozwiązania, a nie wyjścia. O wyniku decydują trzy rzeczy: przejrzystość, szybkość i to, że wszyscy są na bieżąco — rodzina, twój TL, Obsługa Klienta i komentarz w BO.</p>`)}
   <div class="card"><h4 style="margin-bottom:10px">👋 Gdy odchodzisz z grupy</h4>${iconGrid([
     {ic:'📝', html:`<strong>Notatka przekazania w Komentarzach w BO:</strong> specjalne potrzeby, co dziecko motywuje, z czym ma trudności, sytuacja rodziny.`},
     {ic:'🗣️', html:`<strong>Zapytaj TL, jak</strong> i komu przekazać informację — najpierw to uzgodnij, potem zrób dokładnie to.`}
   ])}</div>
   <div class="card"><h4 style="margin-bottom:10px">🙋 Gdy przejmujesz grupę</h4>${iconGrid([
     {ic:'📖', html:`<strong>Najpierw przeczytaj notatkę przekazania</strong>.`},
     {ic:'💬', html:`<strong>Nazwij zmianę</strong> — krótko i pozytywnie.`},
     {ic:'🏷️', html:`<strong>Naucz się wszystkich imion</strong> na pierwszej lekcji.`},
     {ic:'⏸️', html:`<strong>Nie zmieniaj niczego innego</strong> przez 2 lekcje.`}
   ])}</div>
   <div class="card"><p>Przy rutynowym, zaplanowanym przekazaniu grupy w większości regionów to korepetytor — a nie Obsługa Klienta — ogłasza zmianę bezpośrednio na czacie grupy i się przedstawia. Obsługa Klienta zwykle włącza się tylko przy nieoczekiwanych zmianach lub delikatnych przypadkach.</p></div>
   ${stepIconBlock('🗣️','Uzgodnij — TL', `<p>Natychmiast, jeśli któreś dziecko ma specjalne potrzeby edukacyjne albo nowy harmonogram nie pasuje którejś rodzinie.</p>`)}
   ${stepIconBlock('👪','Rodzina — jako nowy korepetytor, ciepło', `<p style="font-style:italic">„Dzień dobry! Nazywam się [imię] i od teraz prowadzę Państwa grupę — znam już notatki o [imię dziecka], więc zaczniemy dokładnie tam, gdzie skończyliśmy.”</p><p>Tylko entuzjazm — bez powodu zmiany.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Prośba o zwrot środków z tego powodu już wpłynęła?</strong> Przejdź od razu do Modułu 7 — próba zatrzymania ucznia zaczyna się na twojej najbliższej lekcji z tym dzieckiem.</p>`)}
  `)}
  ${accItem('⚠️ 5.7 · Coś zawiodło po naszej stronie', `
   <img src="Images/Image_12.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Lekcja stracona przez awarię platformy, odwołanie zajęć albo problem techniczny, który zajął większość godziny.</p></div>
   ${co('co-danger','🚨',`<p><strong>Najgorsze, co może tu powiedzieć korepetytor, to „to niemożliwe”.</strong> Dziecko traci lekcje, bo zawiodła nasza platforma, rodzina prosi o lekcję wyrównawczą, korepetytor mówi, że się nie da — rodzina traci zaufanie i prosi o zwrot środków. <strong>To nigdy nie była decyzja korepetytora.</strong> Dwie stracone lub zakłócone lekcje to próg, przy którym większość regionów rozpoczyna rozmowę o dodatkowej lekcji wyrównawczej, choć ostateczną decyzję zawsze podejmuje twój TL. Rozpoczęcie tej rozmowy to twoje zadanie. Jej zakończenie — nie.</p>`)}
   ${stepIconBlock('⚡','Dostosuj', `<p>Zachowaj spokój, potraktuj to jako coś normalnego (3.7), zadbaj o nastrój grupy, wyślij nagranie, zrealizuj plan nadrabiania (4.3).</p>`)}
   ${stepIconBlock('🗣️','Uzgodnij — TL tego samego dnia', `<ul><li>Omówcie dodatkową lekcję wyrównawczą</li><li>Zaangażuj Obsługę Klienta, jeśli rodzina jest niezadowolona lub sprawa ma wymiar handlowy</li><li>Wypełnij Ocenę Korepetytorów w BO</li></ul>`)}
   ${stepIconBlock('👪','Rodzina — najpierw uzgodnij treść z TL, tego samego dnia', `<p><em>„Zgłosiłem/zgłosiłam to mojemu zespołowi i wrócimy do Państwa z odpowiedzią”</em> — a potem upewnij się, że ktoś to zrobi, jeszcze dziś.</p>${co('co-danger','⛔',`<p>Nigdy nie obiecuj dodatkowej lekcji i nigdy jej nie wykluczaj. Dalszy krok: na następnej lekcji daj dziecku pierwszą prawdziwą kolej.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Prośba o zwrot środków z tego powodu już wpłynęła?</strong> Przejdź od razu do Modułu 7 — próba zatrzymania ucznia zaczyna się na twojej najbliższej lekcji z tym dzieckiem.</p>`)}
  `)}
  ${accItem('📢 5.8 · „To nie jest to, co nam powiedziano”', `
   <img src="Images/Image_13.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Rodzic mówi ci, że poziom, pakiet, harmonogram albo sam kurs nie są tym, co — jak rozumiał — kupował. To najbardziej niezręczna rozmowa, jaką odbywa korepetytor, i najłatwiej ją pogorszyć.</p>
   <p><em>Oczekiwania ukształtowane przed rozpoczęciem kursu stoją za dużą częścią wszystkich próśb o zwrot środków — większą niż jakakolwiek inna pojedyncza przyczyna.</em></p></div>
   ${stepIconBlock('⚡','Dostosuj', `<p>Dla dziecka nic się nie zmienia — nadal ucz dobrze.</p>`)}
   ${stepIconBlock('🗣️','Uzgodnij — TL + Obsługa Klienta, zanim na cokolwiek odpowiesz', `<ul><li>Przekaż sprawę TL tego samego dnia</li><li>Zaangażuj Obsługę Klienta — to ona odpowiada za dalsze kroki</li><li>Zapisz słowa rodziny dosłownie w Ocenie Korepetytorów w BO</li></ul><p>Można potwierdzić odbiór wiadomości: <em>„dziękuję, przekażę to mojemu zespołowi i wrócę do Państwa z odpowiedzią”.</em> To nie jest odpowiedź. <span style="font-size:12.5px">(Jeśli chodzi o drobną sprawę — dodatkową lekcję — często możesz ją rozwiązać bezpośrednio razem z TL, bez Obsługi Klienta. Zapytaj TL, która sytuacja ma zastosowanie.)</span></p>`)}
   ${stepIconBlock('👪','Rodzina — tylko po zgodzie TL', `<ol><li>Przyjmij to do wiadomości, bez szukania winnych</li><li>Pokaż, że zależy ci na dziecku</li><li>Sprawnie przekaż sprawę Obsłudze Klienta</li></ol>${co('co-danger','⛔',`<p>Nigdy: obwiniać współpracownika, kłócić się ani samodzielnie proponować rozwiązań.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Prośba o zwrot środków z tego powodu już wpłynęła?</strong> Przejdź od razu do Modułu 7 — próba zatrzymania ucznia zaczyna się na twojej najbliższej lekcji z tym dzieckiem.</p>`)}
  `)}
  `}
 ],
 ix:{
  title:'Osiem sytuacji, osiem pierwszych kroków',
  instr:'Dla każdej zanonimizowanej sytuacji wybierz, do której z ośmiu kategorii należy, a potem wybierz właściwy pierwszy krok. 70%, aby odblokować Moduł 6.',
  items:[
   {type:'choice', prompt:'„Mówi, że nie da rady, płacze przy pierwszym błędzie i przestał kończyć pracę na lekcji.” — jaka to sytuacja?', opts:['Materiał jest za trudny','Materiał jest za łatwy','Specjalne potrzeby edukacyjne'], correct:0, fb:'Powtarzające się wczesne porażki i rezygnacja przy pierwszym błędzie to klasyczny obraz zbyt trudnego materiału.'},
   {type:'choice', prompt:'Właściwy pierwszy krok w tej sytuacji to —', opts:['Napisać do rodziny z propozycją zmiany poziomu','Podzielić zadanie na mniejsze kroki i wyznaczyć ograniczony, jasny cel — już na tej lekcji','Kontynuować zgodnie z planem; poziomu nie możesz zmienić'], correct:1, fb:'Od razu samodzielnie dostosuj zadanie — rozmowa o poziomie, jeśli jest potrzebna, trafia do Team Leadera i Obsługi Klienta, nigdy bezpośrednio do rodziny.'},
   {type:'choice', prompt:'„Kończy w jednej trzeciej czasu, a potem zaczyna rozpraszać kolegę obok. Od trzech tygodni żadnej pracy domowej.” — jaka to sytuacja?', opts:['Materiał jest za łatwy','Specjalne potrzeby edukacyjne','Sytuacja rodzinna'], correct:0, fb:'Szybkie kończenie, przeszkadzanie i zero prac domowych to nuda wynikająca ze zbyt łatwego poziomu — wygląda jak brak zaangażowania, ale nim nie jest.'},
   {type:'choice', prompt:'Właściwy pierwszy krok w tej sytuacji to —', opts:['Od razu dać prawdziwe dodatkowe wyzwanie związane z tą samą umiejętnością i zgłosić sprawę jako możliwy awans na wyższy poziom','Zgłosić sprawę i poczekać na weryfikację poziomu, zanim cokolwiek się zmieni','Uznać, że po prostu brakuje mu motywacji, i bardziej go zachęcać'], correct:0, fb:'Potrzebne są tu obie części: dostosuj teraz, żeby nie nudził się przez kolejne tygodnie, i zgłoś teraz, żeby zweryfikować sam poziom.'},
   {type:'choice', prompt:'„Rodzina wspomniała podczas lekcji próbnej, że ma ADHD, ale nigdzie tego nie zapisano i żaden korepetytor się do tego nie dostosował.” — jaka to sytuacja?', opts:['Grupa jest zbyt liczna','Specjalne potrzeby edukacyjne','Coś zawiodło po naszej stronie'], correct:1, fb:'To dokładnie ten przypadek specjalnych potrzeb edukacyjnych, który najczęściej umyka — informacja istniała, ale nigdy nie dotarła na lekcję.'},
   {type:'choice', prompt:'Właściwy pierwszy krok w tej sytuacji to —', opts:['Czekać na oficjalną diagnozę, zanim cokolwiek się zmieni','Od razu dostosować lekcję — krótsze części, przewidywalna struktura, zapowiadane zmiany aktywności — i uzgodnić sprawę z Team Leaderem i Obsługą Klienta oraz zostawić komentarz w BO','Powiedzieć rodzinie, że ten format może nie pasować do ich dziecka'], correct:1, fb:'Samodzielnie i od razu dostosowujesz wszystko, co możesz, a także dbasz o to, by informacja została zapisana i dotarła do kolejnego korepetytora i Obsługi Klienta.'},
   {type:'choice', prompt:'„Dwoje dzieci w mojej żywiołowej dziesięcioosobowej grupie nie miało ze mną prawdziwej wymiany od trzech lekcji, a jedno przestało podnosić rękę.” — jaka to sytuacja?', opts:['Dziecko, wiek lub format nie pasują','Grupa jest zbyt liczna i dziecko nigdy nie dostaje swojej kolei','To nie jest to, co nam powiedziano'], correct:1, fb:'To wyraźnie kwestia zarządzania grupą — i jedyna sytuacja na liście, która dotyczy bezpośrednio zachowania korepetytora.'},
   {type:'choice', prompt:'Właściwy pierwszy krok w tej sytuacji to —', opts:['Zgłosić Team Leaderowi wielkość grupy i czekać na decyzję, zanim cokolwiek się zmieni','Zmienić sposób prowadzenia tej konkretnej grupy — śledzić kolejki, świadomie korzystać z czatu, przebudować fragmenty lekcji — i eskalować tylko wtedy, gdy to nadal nie wystarcza','Skupić się na dzieciach, które się angażują, skoro wyraźnie są bardziej zaangażowane'], correct:1, fb:'To umiejętność, którą możesz zastosować od razu. Eskalujesz dlatego, że po prawdziwej próbie różnica wciąż jest zbyt duża — a nie zamiast próbowania.'},
   {type:'choice', prompt:'„Rodzic mówi, że miały to być zajęcia indywidualne, a nie grupa ośmiorga dzieci.” — jaka to sytuacja?', opts:['Zmiana korepetytora, grupy lub harmonogramu została źle przyjęta','To nie jest to, co nam powiedziano','Materiał jest za trudny'], correct:1, fb:'Rozbieżność między tym, co obiecano, a tym, co jest realizowane, to dokładnie „to nie jest to, co nam powiedziano” — najbardziej delikatna z ośmiu sytuacji.'},
   {type:'choice', prompt:'Właściwy pierwszy krok w tej sytuacji to —', opts:['Wyjaśnić, jak działają zajęcia grupowe i dlaczego mają wartość dydaktyczną','Potwierdzić odbiór wiadomości, a potem tego samego dnia przekazać sprawę Team Leaderowi i Obsłudze Klienta, zanim padnie właściwa odpowiedź — i zapisać słowa rodziny dosłownie w BO','Przeprosić za nieporozumienie i zaproponować sprawdzenie możliwości przejścia na zajęcia indywidualne'], correct:1, fb:'Odpowiadanie na własną rękę — nawet rozsądnie — to sposób, w jaki korepetytorzy nieświadomie potwierdzają skargę albo sugerują coś, czego nie możemy zapewnić. Zawsze najpierw uzgodnij.'}
  ]
 }
},
{id:'m6', numLabel:'Moduł 6', emoji:'🧭', color:'var(--blue)',
 title:'Komu powiedzieć i jak szybko',
 desc:'Zamień wszystko, co powyżej, w coś, co naprawdę się dzieje — mapa przekazywania spraw i pięć zasad.',
 obj:'Zamienić wszystko, co powyżej, w coś, co naprawdę się dzieje — wiedząc bez zastanowienia, komu powiedzieć i jak szybko.',
 sections:[
  {t:'⏱️ 6.1 · Szybkość to podstawa', html:`
   <div class="card"><p>Każda sytuacja z Modułu 5 ma ten sam kształt: łatwo ją naprawić wcześnie, a drogo — późno. Niewłaściwy poziom wychwycony na trzeciej lekcji da się poprawić. Ten sam niewłaściwy poziom na piętnastej lekcji zamienił się już w <em>„już go to nie interesuje”</em> — a wtedy rodzina przestała nam już wierzyć.</p></div>
   ${co('co-idea','💡',`<p><strong>Jesteś mostem między lekcją a osobami, które mogą zmienić sytuację dziecka. Most ma jakąkolwiek wartość tylko wtedy, gdy sprawy szybko przez niego przechodzą.</strong></p>`)}
  `},
  {t:'🗺️ 6.2 · Mapa przekazywania spraw', html:`
   <div class="tbl-full"><div class="card"><table>
   <tr><th>🔎 Co zauważasz</th><th>① Na lekcji</th><th>② Między lekcjami</th><th>③ Komu mówisz + BO</th><th>④ Rodzina</th><th>⏱️ Jak szybko</th></tr>
   <tr><td><strong>Frekwencja poniżej połowy</strong> albo praca wyraźnie poniżej grupy</td><td>Daj prawdziwą kolej i osiągalny sukces</td><td>Prywatna rozmowa indywidualna z dzieckiem</td><td>Team Leader, jeśli przez kolejne dwie lekcje nic się nie zmieni</td><td>Krótka, ciepła wiadomość — tę wiadomość wysyłasz samodzielnie</td><td>W tym samym tygodniu</td></tr>
   <tr><td><strong>Dwie lub więcej lekcji bez oddanej pracy</strong></td><td>Sprawdzaj pracę na żywo przez udostępnianie ekranu; zmniejsz cel</td><td>Rozmowa indywidualna; dobrze wyjaśnij następną pracę domową i wróć do tematu</td><td>Team Leader, jeśli to się utrzymuje</td><td>Wiadomość o postępach — tę wiadomość wysyłasz samodzielnie</td><td>W tym samym tygodniu</td></tr>
   <tr><td><strong>Materiał za trudny</strong></td><td>Mniejsze kroki, ograniczony cel, dostosowane zadanie, błędy jako coś normalnego</td><td>Pisemne wyjaśnienie brakującego zagadnienia</td><td><strong>Team Leader + Ocena Korepetytorów w BO</strong> — w razie potrzeby poproś o lekcję diagnostyczną/poziomującą</td><td>Tylko to, co zatwierdzi TL. Nigdy poziom ani opcje</td><td>W tym samym tygodniu</td></tr>
   <tr><td><strong>Materiał za łatwy</strong></td><td>Prawdziwe dodatkowe wyzwanie, zadanie dostosowane w górę, rola pomocnika, nigdy bez zajęcia</td><td>Miej przygotowane zadanie z wyższego poziomu</td><td><strong>Team Leader + Ocena Korepetytorów w BO</strong> — w razie potrzeby poproś o lekcję diagnostyczną/poziomującą</td><td>Tylko to, co zatwierdzi TL. Nigdy poziom ani opcje</td><td>W tym samym tygodniu</td></tr>
   <tr><td><strong>Specjalne potrzeby edukacyjne</strong>, odnotowane lub podejrzewane</td><td>Krótsze części, przewidywalna struktura, uprzedzanie przed zmianami aktywności, dostosowane zadania</td><td>Notuj, co działa, a co nie</td><td><strong>Team Leader + Ocena Korepetytorów w BO.</strong> Zapytaj o zajęcia indywidualne, jeśli różnica jest duża</td><td>Pytanie o to, co pomaga: twoje, ostrożnie. Format/grupa/zajęcia indywidualne: nigdy nie proponujesz ich ty</td><td>Przed następną lekcją · natychmiast, jeśli różnica jest zbyt duża</td></tr>
   <tr><td><strong>Wiek lub format nie pasują</strong></td><td>Upraszczaj, więcej pokazuj, więcej uwagi na lekcji</td><td>Mów uczciwie o granicach możliwości</td><td><strong>Team Leader + Ocena Korepetytorów w BO</strong> — powiedz „kwestia przydziału, nie motywacji”</td><td>Tylko jeśli poprosi o to TL</td><td>W tym samym tygodniu</td></tr>
   <tr><td><strong>Dziecko nigdy nie dostaje swojej kolei</strong></td><td>Śledzenie kolejek; dostosuj podejście; dostosuj zadanie dla dziecka, które tego potrzebuje</td><td>Pisemne odpowiedzi w ciągu 24 h na wszystko, co zostało bez odpowiedzi</td><td>Team Leader, jeśli nie da się tego rozwiązać na lekcji</td><td>Zmiany w twoim własnym nauczaniu: twoje. Zmiana grupy: nigdy od ciebie</td><td>W tym samym tygodniu</td></tr>
   <tr><td><strong>Zmiana korepetytora/grupy/harmonogramu</strong></td><td>Nazwij ją, potraktuj jako coś normalnego, przez dwie lekcje nie zmieniaj niczego innego</td><td>Notatka przekazania zapisana w Komentarzach w BO</td><td><strong>Team Leader</strong> — natychmiast, jeśli któreś dziecko ma specjalne potrzeby albo harmonogram nie pasuje. Obsługa Klienta tylko w przypadkach nieoczekiwanych/delikatnych</td><td>Jako nowy korepetytor: ciepło, z entuzjazmem. Bez powodów zmiany i bez harmonogramów</td><td>Przed lekcją przekazania</td></tr>
   <tr><td><strong>Dwie zakłócone lekcje</strong> — awaria platformy, odwołanie, nieobecność</td><td>Zachowaj spokój, dbaj o nastrój</td><td>Nagranie + ten jeden ważny fragment; plan nadrabiania</td><td><strong>Team Leader tego samego dnia — rozpoczyna rozmowę o dodatkowej lekcji (dwie lekcje to próg stosowany w większości regionów).</strong> Obsługa Klienta, jeśli rodzina jest niezadowolona · Ocena Korepetytorów w BO</td><td>Tego samego dnia — najpierw uzgodnij treść z TL</td><td>Tego samego dnia</td></tr>
   <tr><td><strong>„To nie jest to, co nam powiedziano”</strong></td><td>Dla dziecka nic się nie zmienia — nadal ucz dobrze</td><td>—</td><td><strong>Team Leader + Obsługa Klienta, zanim odpowiesz · słowa rodziny dosłownie w Ocenie Korepetytorów</strong></td><td>Tylko potwierdzenie odbioru. Właściwa odpowiedź po zgodzie TL — bez opcji od ciebie</td><td>Tego samego dnia</td></tr>
   <tr><td><strong>Sytuacja rodzinna, zdrowie, pieniądze</strong></td><td>Okaż życzliwość, niczego nie oczekuj</td><td>—</td><td>Obsługa Klienta, za pośrednictwem Team Leadera · nie naciskaj</td><td>Jedno ciepłe zdanie, bez dopytywania</td><td>Gdy tylko się o tym dowiesz</td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p>W pilnych sprawach większość regionów ma też bezpośredni kanał na Slacku między Team Leaderem a Obsługą Klienta, jako szybszą alternatywę dla BO — jego nazwa różni się w każdym regionie, więc zapytaj swojego Team Leadera, który kanał jest twój.</p>`)}
   ${co('co-idea','🎓',`<p><strong>Jedna kolumna, której ta mapa nie pokazuje: twój Mentor Regionalny.</strong> Wszystko w kolumnie „komu mówisz” dotyczy <em>ustaleń</em> — poziomu, grupy, harmonogramu, pakietu — i zawsze trafia do Team Leadera i Obsługi Klienta. Gdy natomiast pytanie brzmi <em>jak lepiej tego uczyć</em>, warto zwrócić się do Mentora Regionalnego — równolegle z powyższą ścieżką, a nie zamiast niej.</p>`)}
  `},
  {t:'⚖️ 6.3 · Pięć zasad', html:`
   <div class="rule-row">
     <div class="rule-card"><div class="rule-num">1</div><div class="rule-ic">⚡</div><div class="rule-txt"><strong>Najpierw dostosuj.</strong> Nie potrzebujesz pozwolenia, żeby jutro uczyć lepiej — wiele spraw kończy się właśnie na tym. Po 2 lekcjach wciąż brak efektu? Umów sesję z Mentorem Regionalnym.</div></div>
     <div class="rule-card"><div class="rule-num">2</div><div class="rule-ic">📣</div><div class="rule-txt"><strong>Poinformowanie kogoś nie jest opcjonalne.</strong> Informujesz Team Leadera, angażujesz Obsługę Klienta, wypełniasz Ocenę Korepetytorów — inaczej problem ucichnie.</div></div>
     <div class="rule-card"><div class="rule-num">3</div><div class="rule-ic">🚦</div><div class="rule-txt"><strong>Team Leader przed rodziną.</strong> Uzgodnijcie sprawę i strategię, <em>a potem</em> porozmawiaj z rodziną — dokładnie tak, jak ustaliliście, nigdy z własnymi opcjami.</div></div>
     <div class="rule-card"><div class="rule-num">4</div><div class="rule-ic">🤐</div><div class="rule-txt"><strong>Nigdy nie obiecuj, nigdy nie odmawiaj — zawsze pokazuj, że ci zależy.</strong> Ty rekomendujesz; Obsługa Klienta proponuje. Jeden wyjątek: gdy Team Leader zatwierdzi dodatkową lekcję, często to ty możesz przekazać tę informację rodzinie.</div></div>
     <div class="rule-card"><div class="rule-num">5</div><div class="rule-ic">🔁</div><div class="rule-txt"><strong>Eskaluj raz, a potem wracaj do tematu.</strong> Zgłoszenie sprawy i zapomnienie o niej to to samo, co niezgłoszenie jej wcale.</div></div>
   </div>
   ${co('co-idea','💡',`<p>Te pięć zasad warto zamienić w nawyk, a nie tylko raz przeczytać — to one decydują o tym, czy sygnał zostanie wykorzystany, czy po cichu zniknie. W sprawach dotyczących tego, jak wygląda to w twoim regionie, skonsultuj się z Team Leaderem.</p>`)}
  `}
 ],
 ix:{
  title:'Przekazywanie spraw — pięć sygnałów',
  instr:'Dla każdego sygnału wybierz, dokąd trafia w pierwszej kolejności. 70%, aby odblokować Moduł 7.',
  items:[
   {type:'choice', prompt:'Praca na lekcji dziecka jest w porządku, ale od dwóch lekcji z rzędu prace domowe są na zerze i na razie nie widać innej przyczyny.', opts:['Działam samodzielnie — rozmowa indywidualna w tym tygodniu, na razie bez zgłoszenia','Team Leader + Obsługa Klienta natychmiast','Od razu do Obsługi Klienta, z pominięciem Team Leadera'], correct:0, fb:'Spadek dotyczący wyłącznie prac domowych, taki jak ten, zaczyna się od twojej rozmowy indywidualnej. Eskaluj do Team Leadera tylko wtedy, gdy sytuacja utrzymuje się także potem.'},
   {type:'choice', prompt:'Od dwóch tygodni dostosowujesz lekcję dla dziecka, które wyraźnie nie radzi sobie z poziomem, i to wciąż nie wystarcza.', opts:['Dostosowywać bez końca — poziom to nie twoja decyzja, więc nie ma czego eskalować','Team Leader + Obsługa Klienta, z komentarzem w BO','Napisać bezpośrednio do rodziny o możliwej zmianie poziomu'], correct:1, fb:'To dokładnie ten moment, w którym przypadek „za trudno” musi trafić do Team Leadera i Obsługi Klienta, na piśmie, w BO.'},
   {type:'choice', prompt:'Dziecko w twojej grupie ma w profilu odnotowaną diagnozę autyzmu, a ty właśnie dowiadujesz się, że w przyszłym miesiącu grupa zostanie przeorganizowana i dostanie nowego korepetytora.', opts:['Poczekać, aż zmiana zostanie potwierdzona, zanim komukolwiek się o tym wspomni','Natychmiast powiedzieć o tym Team Leaderowi, napisać pełną notatkę przekazania w BO i uzgodnić, jak zostanie zakomunikowana zmiana','Samodzielnie i od razu powiedzieć o tym dziecku na osobności, żeby miało czas się przygotować'], correct:1, fb:'Specjalne potrzeby edukacyjne w połączeniu z przerwaniem ciągłości trzeba zgłosić natychmiast — a sposób przekazania informacji należy najpierw uzgodnić z Team Leaderem.'},
   {type:'choice', prompt:'Dwie lekcje z rzędu zostały zakłócone przez awarię platformy, a rodzic właśnie zapytał o lekcję wyrównawczą.', opts:['Powiedzieć, że lekcje wyrównawcze nie są możliwe','Powiedzieć, że samodzielnie ją zorganizujesz, żeby szybko uspokoić rodzica','Potwierdzić, że przekażesz sprawę dalej, a potem tego samego dnia porozmawiać z Team Leaderem o dodatkowej lekcji'], correct:2, fb:'Ani odmowa, ani obietnica nie należą do ciebie — ale rozpoczęcie wewnętrznej rozmowy tego samego dnia to właśnie twoje zadanie.'},
   {type:'choice', prompt:'Rodzic pisze, że poziom, pakiet lub harmonogram nie są takie, jak mu powiedziano przy zapisie.', opts:['Odpowiedzieć tego samego dnia najuczciwiej, jak potrafisz','Potwierdzić odbiór wiadomości, a potem przekazać sprawę Team Leaderowi i Obsłudze Klienta, zanim padnie właściwa odpowiedź, zapisując dosłownie jego słowa w BO','Przekazać to Obsłudze Klienta i uznać, że to już nie twoja sprawa'], correct:1, fb:'To jedyna sytuacja, w której odpowiadanie na własną rękę szkodzi najbardziej. Zawsze najpierw uzgodnij — ale też nie milknij.'}
  ]
 }
},
{id:'m7', numLabel:'Moduł 7', emoji:'🛟', color:'var(--coral)',
 title:'Ratowanie prośby o zwrot środków',
 desc:'Wszystko do tej pory dotyczyło zapobiegania prośbie. Ten moduł dotyczy tego, co robić, gdy prośba już została złożona.',
 obj:'Wiedzieć, co się zmienia, gdy prośba o zwrot środków została już złożona: co musi osiągnąć następna lekcja, co możesz, a czego nie możesz powiedzieć, i jak dalej dostarczać Obsłudze Klienta to, czego potrzebuje.',
 sections:[
  {t:'🔀 7.1 · Gdy prośba już istnieje, wszystko się zmienia', html:`
   <div class="card"><p>Moduły od 1 do 6 dotyczą wychwycenia problemu <strong>zanim</strong> rodzina w ogóle poprosi o zwrot pieniędzy. Ten moduł dotyczy chwili, gdy to już się stało: <strong>prośba o zwrot środków została złożona</strong> i informacja o tym do ciebie dotarła.</p></div>
   ${co('co-idea','💡',`<p><strong>Samą prośbę tworzy Menedżer Obsługi Klienta, a nie ty.</strong> Na tę część nie masz wpływu. Do ciebie nadal należy wszystko, co od tej chwili dzieje się na lekcji — a to wcale nie jest mało.</p>`)}
   ${co('co-danger','🚨',`<p><strong>Nie mów nic o samej prośbie</strong> — ani dziecku, ani rodzinie — chyba że Obsługa Klienta wyraźnie poprosi cię o przekazanie czegoś konkretnego. Twoim zadaniem jest teraz lekcja, a nie rozmowa.</p>`)}
  `},
  {t:'🎯 7.2 · Twoja najbliższa lekcja z tym dzieckiem to próba jego zatrzymania', html:`
   <div class="card"><p>Możesz nie mieć już innej szansy, żeby cokolwiek zmienić. Traktuj najbliższą lekcję jako moment, który o wszystkim zdecyduje.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Daj dziecku prawdziwą kolej.</strong> Nie pytanie dla zasady — tylko prawdziwy moment, w którym zostaje zauważone i odnosi sukces.`},
     {ic:'🏆', html:`<strong>Zaplanuj wczesny, łatwy i widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że sobie radzi, a nie że zostaje w tyle.`},
     {ic:'👀', html:`<strong>Spraw, by poczuło się zauważone</strong> — konkretnie, a nie ogólnikowo. Ta sama zasada co przy każdej rozmowie indywidualnej w tym szkoleniu.`},
     {ic:'🤐', html:`<strong>Nie wspominaj o prośbie.</strong> Ta lekcja nie jest miejscem na tę rozmowę, nawet jeśli dziecko samo o tym wspomni — ciepło zmień temat i ucz dalej.`}
   ])}
  `},
  {t:'📮 7.3 · Szybko przekazuj informacje Obsłudze Klienta — to nadal twoje zadanie', html:`
   <div class="card"><p>Obsługa Klienta zajmuje się prośbą, nie będąc na twojej lekcji. To, co widzisz — szczegółowo i szybko przekazane — to informacje, których nie zdobędzie w żaden inny sposób.</p></div>
   ${checkbox([
     'Komentarz w BO z dokładnym opisem tego, co widzisz — daty, konkrety, a nie wrażenia',
     'Słowa rodziny dosłownie, jeśli je masz — bez parafrazowania',
     'Wszystko, co już zostało przez ciebie dostosowane lub zaproponowane, żeby Obsługa Klienta tego nie powielała',
     'Team Leader poinformowany tego samego dnia'
   ])}
   ${co('co-idea','💡',`<p>O istnieniu prośby możesz dowiedzieć się z komentarzy Obsługi Klienta w profilu dziecka w BO — nie ma automatycznego systemu, który powiadomi cię w chwili, gdy rodzina poprosi o zwrot środków. To ty przekazujesz sygnały Obsłudze Klienta; ona nie przesyła ci aktualizacji.</p>`)}
  `},
  {t:'🚧 7.4 · Co możesz, a czego nie możesz robić', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Możesz</th><th>🚫 Nigdy nie możesz</th></tr>
   <tr><td>Powiadomić Obsługę Klienta przez BO, gdy tylko dowiesz się o prośbie</td><td>Potwierdzić, że zwrot środków został zatwierdzony</td></tr>
   <tr><td>Jeśli <strong>przed</strong> tym powiadomieniem pojawi się naturalna okazja, zaproponować coś konkretnego — dodatkową lekcję, sprawdzenie poziomu, inny kurs</td><td>Potwierdzać ani omawiać jakiejkolwiek kwoty</td></tr>
   <tr><td>Powiedzieć rodzicowi, że Obsługa Klienta mu pomoże</td><td>Mówić lub sugerować cokolwiek więcej na temat samej prośby</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>Wiadomość, którą zawsze można bezpiecznie przekazać:</strong> <em>„Obsługa Klienta pomoże Państwu w tej sprawie.”</em> Nic więcej — tu kończy się twoja rola, a to rozmowa, do której nie masz informacji.</p>`)}
  `},
  {t:'🌱 7.5 · 2–4 lekcje po zatrzymaniu ucznia', html:`
   <div class="card"><p>Niezależnie od tego, czy prośba zostanie wycofana, dziecko zostanie w twojej grupie, przejdzie do innego korepetytora czy na zajęcia indywidualne — kilka kolejnych lekcji zdecyduje, czy zatrzymanie ucznia się utrzymało.</p></div>
   ${iconGrid([
     {ic:'🔁', html:`<strong>Dodatkowa troska na każdej z tych lekcji</strong> — prawdziwa kolej, konkretny sukces, zauważona nieobecność — wszystko, czego nauczyło cię to szkolenie, raz za razem.`},
     {ic:'📝', html:`<strong>Pełna notatka przekazania</strong> w Komentarzach w BO, jeśli dziecko przechodzi do nowego korepetytora lub formatu — z tą samą starannością co w Module 5.6.`},
     {ic:'👋', html:`<strong>Ciepła ciągłość</strong>, jeśli dziecko zostaje z tobą — nie pozwól, by ulga, że „się udało”, sprawiła, że po cichu wrócisz do tego, jak było wcześniej.`}
   ])}
  `},
  {t:'🔙 7.6 · Zapobieganie nadal jest najważniejsze', html:`
   <div class="card"><p>Wszystko, co poniżej, jest już w Modułach od 1 do 6 — to skrócona wersja, jako przypomnienie, że większość twojej pracy polega na tym, by ten moduł w ogóle nie był potrzebny.</p></div>
   ${checkbox([
     'Co tydzień pilnuj prac domowych',
     'Utrzymuj pełną strukturę lekcji — nie odpuszczaj, gdy grupa wydaje się łatwa',
     'Zgłaszaj więcej niż dwie nieobecności lub problem techniczny od razu, gdy wystąpią',
     'Eskaluj do Team Leadera, gdy tylko zobaczysz sygnał ryzyka',
     'Wysyłaj raport o uczniu wymagającym uwagi, gdy jest od ciebie oczekiwany'
   ])}

  `}
 ],
 ix:{
  title:'Gdy prośba już wpłynęła',
  instr:'Dla każdego scenariusza wybierz właściwy krok. 70%, aby kontynuować.',
  items:[
   {type:'choice', prompt:'Właśnie dowiadujesz się, że rodzina złożyła prośbę o zwrot środków za dziecko z twojej grupy. Co robisz najpierw?', opts:['Piszesz do rodziny, żeby dowiedzieć się dlaczego i od razu się tym zająć','Powiadamiasz Obsługę Klienta przez BO i tego samego dnia informujesz Team Leadera','Czekasz, aż Obsługa Klienta się z tobą skontaktuje, zanim cokolwiek zrobisz'], correct:1, fb:'Prośba jest już w rękach Obsługi Klienta — twoim zadaniem jest szybko przekazać jej to, co wiesz, a nie otwierać własną rozmowę z rodziną.'},
   {type:'choice', prompt:'Co powinno się zmienić na twojej najbliższej lekcji z tym dzieckiem?', opts:['Nic — zachowywanie się inaczej mogłoby zdradzić, że coś jest nie tak','Daj mu prawdziwy, widoczny sukces i zadbaj, by poczuło się zauważone — bez wspominania o prośbie','Porozmawiaj z dzieckiem wprost o tym, dlaczego jego rodzina chce zrezygnować'], correct:1, fb:'Sama lekcja jest próbą zatrzymania ucznia. Samej prośby nigdy nie porusza się z dzieckiem.'},

   {type:'choice', prompt:'Rodzic pyta cię wprost, czy jego zwrot środków został zatwierdzony. Co mówisz?', opts:['Podajesz swoje najlepsze przypuszczenie na podstawie tego, jak zwykle przebiegają takie sprawy','Mówisz, że Obsługa Klienta pomoże mu w tej sprawie, i na tym poprzestajesz','Potwierdzasz kwotę, która mu się należy, jeśli akurat ją znasz'], correct:1, fb:'Potwierdzanie zatwierdzenia czy kwoty nigdy nie należy do ciebie, bez względu na to, jak bardzo jest to oczywiste. Jedyne bezpieczne zdanie kieruje rodzica do Obsługi Klienta.'},
   {type:'choice', prompt:'Prośba zostaje wycofana, a dziecko zostaje w twojej grupie. Co teraz?', opts:['Wrócić do normalności — kryzys minął','Przez kolejne lekcje nadal okazywać temu dziecku dodatkową troskę, bo zatrzymanie ucznia wciąż może się nie utrzymać','Powiedzieć rodzinie, że cieszysz się, że zmienili zdanie'], correct:1, fb:'Zatrzymanie, które utrzymuje się przez jedną lekcję, a potem wszystko wraca do normy, często w ogóle się nie utrzymuje. O wszystkim decyduje kilka kolejnych lekcji.'}
  ]
 }
},
{id:'checklist', numLabel:'Moduł 8', emoji:'✅', color:'var(--green-d)',
 title:'Końcowa lista kontrolna',
 desc:'Bez quizu — tylko wszystko z tego szkolenia na jednej liście, zanim podejdziesz do egzaminu.',
 obj:'Przejrzyj całą listę kontrolną poniżej. Ten moduł nie jest oceniany — przeczytaj go, a potem przejdź do egzaminu końcowego.',
 sections:[
  {t:'✅ Najważniejsze rzeczy na jednej liście', html:`
   ${numlist([
     'Sprawdzam profil ucznia, łącznie z Komentarzami, <strong>przed</strong> pierwszą lekcją z nowym dzieckiem',
     'Raz w tygodniu przeglądam widok Postępy całej grupy — zarówno Na lekcji, jak i W domu',
     'Traktuję płaską linię na zerze jako najpoważniejszy możliwy sygnał, a nie coś neutralnego',
     'Każde dziecko w mojej grupie dostaje prawdziwą kolej i mogę to udowodnić, bo to śledzę',
     'Gdy dziecko opuszcza lekcję, wykonuję wszystkie cztery kroki, a nie tylko wysyłam nagranie',
     'Rozpoznaję wzorce, które widzę, i reaguję na każdy z nich inaczej',
     'Zawsze informuję Team Leadera, w razie potrzeby angażuję Obsługę Klienta i zostawiam komentarz w BO',
     'Gdy Obsługa Klienta przejmuje rozmowę, nie angażuję się w nią i stosuję się do jej wskazówek',
     'Eskaluję raz, a potem wracam do tematu'
   ])}
  `},
  {t:'🪞 Samoocena — pytania, które warto zadawać sobie co tydzień', html:`
   ${numlist([
     'Czy w tym tygodniu był u któregoś dziecka spadek pracy na lekcji lub prac domowych — nawet u takiego, które nadal normalnie przychodzi?',
     'Czy w mojej grupie jest dziecko z zerem w pracach, które po cichu zniknęło z mojego pola widzenia?',
     'Czy każde dziecko w mojej grupie dostało prawdziwą kolej na ostatniej lekcji? Wiem to na pewno czy tylko tak zakładam?',
     'Czy jest coś, co już widzę, a czego jeszcze nikomu nie zgłaszam?',
     'Czy jest coś, co komuś zgłaszam, a do czego potem nie wracam?'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>To już całe szkolenie.</strong> Gdy wszystko będzie gotowe, przejdź do egzaminu końcowego — a potem wypełnij DST w LMS, aby zamknąć zadanie.</p>`)}
  `}
 ],
 gateExam:true
},
    ];
  }
};

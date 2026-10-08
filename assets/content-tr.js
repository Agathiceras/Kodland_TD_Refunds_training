/* Refunds training - Turkish content (translated from the English source). */
const PAGE_LANG='tr';
const CONTENT = {
  flag:'🇹🇷', dir:'ltr',
  ui:{
    pageTitle:'İade Eğitimi — Kodland Eğitmen Eğitimi',
    logoSub:'Eğitmen Gelişim Departmanı',
    heroEyebrow:'💸 Eğitmen Eğitim Programı',
    heroTitle:'<span class="h-pill">İadeleri</span> Anlamak',
    heroIntro:"Her iade talebinin arkasında bir şey inşa ederken duran bir çocuk vardır — ve bunu fark edebilecek ilk kişi neredeyse her zaman sensin. Bu eğitim, ne kadar iyi gözlemlediğin ve ne kadar hızlı harekete geçtiğinle ilgili.",
    heroR1:'Ders sırasında ve dersler arasında tam olarak neye dikkat etmen gerektiğini öğren.',
    heroR2:"Uygulamalı bir BO simülasyonunda bir grubun İlerleme ekranını okumayı dene.",
    heroR3:"Neyi düzeltmenin, neyi bildirmenin ve kime haber vermenin sana düştüğünü net olarak bil.",
    heroWork:'7 modülü ve son kontrol listesini tamamla, ardından DST’ye geç. Her modülde bir sonrakinin kilidini açmak için en az %70 gerekir.',
    startBtn:'🚀 Eğitime Başla',
    pathLabel:'Öğrenme yolun',
    devTitle:'Geliştirici modu: tüm modülleri inceleme için aç',
    backToPath:'Yola dön',
    modulesPassed:'{done} / {total} modül tamamlandı',
    moduleN:'Modül {n}',
    of:'/',
    locked:'🔒 Kilitli',
    passedBadge:'✅ Geçildi · %{pct}',
    reviewedBadge:'✅ İncelendi',
    startBadge:'▶ Başla',
    reviewBadge:'▶ Gözden geçir',
    objective:'Hedef',
    startCheck:'▶ Modül kontrolünü başlat',
    toExam:'▶ Final Sınavına geç',
    doneBack:'✓ Tamam — yola dön',
    ixBadge:'📋 Modül kontrolü — bir sonraki modül için %70',
    ixItemBadge:'📋 Modül kontrolü — soru {i} / {n}',
    scoreSoFar:'Şu ana kadarki puan: {c} / {t}',
    continue:'Devam →',
    sortWrong:'Tam olarak değil — doğru cevap: “{label}”.',
    resPassed:'Modül tamamlandı!',
    resFailed:'Henüz olmadı',
    resUnlocked:"Bir sonraki modülün kilidini açtın.",
    resNeed:'Bir sonraki modülün kilidini açmak için %70 gerekiyor. Yukarıdaki bölümü gözden geçir ve kontrolü tekrar dene.',
    resContinue:'Öğrenme yoluna devam et',
    resBack:'Yola dön',
    resReview:'Bu modülü gözden geçir',
    doneEyebrow:'Final Sınavı',
    doneTitle:'🎉 Tebrikler!',
    doneP1:"🎉 <strong>Tebrikler! İade metriklerini iyileştirmeye yönelik kendi kendine öğrenme eğitimini tamamladın!</strong>",
    doneP2:"Neredeyse bitti! Lütfen bu eğitime ulaştığın LMS eğitim sayfasına geri dön. DST, eğitimin hemen altında yer alıyor.",
    doneP3:'👉 <strong>Eğitimin başarıyla tamamlanmış sayılması için DST’yi tamamlaman ve geçmen gerekiyor.</strong> DST tamamlanmazsa eğitim tamamlanmamış olarak kalır ve süresi geçmiş olarak işaretlenebilir.',
    doneP4:'Görevi başarıyla kapatmak için lütfen DST’yi tamamladığından ve geçer not aldığından emin ol.',
    doneP5:'Bol şans! ❤️',
    devUnlockAlert:'Geliştirici modu: tüm modüller artık inceleme için açık.',
    devOn:'🔓 Geliştirici modu AÇIK — tüm modüller açık',
    devOff:'🔒 Geliştirici modu KAPALI — ilerleme silindi',
    devBadge:'🔓 GELİŞTİRİCİ MODU',
    doLabel:'✅ Yap',
    avoidLabel:'🚫 Kaçın',
    noticeLabel:'Dikkat et:'
  },
  buildModules(){
    return [
{id:'intro', numLabel:'Giriş', emoji:'💸', color:'var(--coral)',
 title:'Bu Eğitim Neden Var',
 desc:'Bir iadenin çocuğun gözünden nasıl göründüğü, onu ilk fark edebilecek kişinin neden sen olduğun ve bunun hangi kısmının sana ait olduğu.',
 obj:'Bir iadenin çocuğun gözünden nasıl göründüğünü, onu ilk fark edebilecek kişinin neden sen olduğunu ve bunun hangi kısmının sana ait olduğunu anlamak.',
 sections:[
  {t:'📋 Burada belirli bir nedenle bulunuyorsun — onu hemen bul', html:`
   <div class="card"><p>Aşağıda bu eğitimin sana atanmış olabileceği nedenleri bulacaksın. Burada yalnızca dersle ilgili nedenlerle talep edilen iadeleri ele alıyoruz — bunları yönetmene yardımcı olabileceğimiz durumlar; yalnızca ileride önlemek için değil, iadeyi kurtarmak için de. Yine de eğitimin tamamını bitirmek sana daha geniş bir bakış açısı kazandıracak ve başka nedenlerden kaynaklanan iadeleri önlemene de yardımcı olacak.</p></div>
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>🚩 Bildirilen neden</th><th>👀 Genellikle nasıl görünür</th><th>📍 Bu eğitim nasıl yardımcı olur</th></tr>
   <tr><td><strong>Programlamaya / Kodland kurslarına ilgi yok</strong></td><td>Sıkılmış, işi sadece yapmış olmak için yapıyor, “hepsi bu mu?”, belirli bir şeye gerçek bir itirazı yok</td><td>Modül 5.2 · Modül 3.6</td></tr>
   <tr><td><strong>Ders düzeni / disiplin</strong></td><td>Ders kaotik görünüyor, bir çocuk her şeye hâkim, diğerleri susuyor ya da kopuyor</td><td>Modül 5.5 · Modül 3</td></tr>
   <tr><td><strong>Hata yapmaya karşı güçlü olumsuz tepki</strong></td><td>Çabuk pes ediyor, küçük hatalara üzülüyor, erkenden ve sık sık “yapamıyorum” diyor</td><td>Modül 5.1 · Modül 3.5</td></tr>
   <tr><td><strong>Eğitmenin kendi öğretim tarzıyla ilgili endişe</strong></td><td>Tek bir çocuğun davranış örüntüsüne işaret etmiyor — dersin kendisiyle ilgili</td><td>Doğrudan Team Leader’ınla ve Bölge Mentorunla konuş; hatırlatma olarak Modül 3</td></tr>
   </table></div></div>
  `},
  {t:'💔 Bir iade, öğrenmeyi bırakan bir çocuktur', html:`
   <div class="card"><p>Her iade talebinin arkasında bir şey inşa ederken duran bir çocuk vardır. Küçülen bir grup. Bize güvenen ve devam etmeye değmeyeceğimize karar veren bir aile.</p>
   <p>Bu eğitim tam olarak bununla ilgili. Bir paneldeki sayıyla değil — gruplarından birinde, şu anda uzaklaşan ve bunu nasıl söyleyeceğini bilmeyen belirli bir çocukla.</p></div>
   <img src="Images/Image_1.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
  `},
  {t:'📉 İadeler neredeyse hiçbir zaman aniden gelmez', html:`
   <div class="card"><p>Onlarla ilgili bilinmesi en faydalı şey bu. Bir aile parasını geri istediğinde, hikâye genellikle haftalardır sürüyordur — ve büyük kısmı <strong>eğitmenin gözü önünde yaşanmıştır.</strong></p></div>
   ${stepFlow([
     {ic:'📋', label:'Ders içi çalışmalar bitirilmez olur'},
     {ic:'🏠', label:'Ödevler teslim edilmez olur'},
     {ic:'📵', label:'Dersler kaçırılmaya başlar'},
     {ic:'☎️', label:'Veli birini arar'}
   ])}
   <div class="card"><p>Bir iade talebinden önceki derslerde örüntü hep aynıdır:</p></div>
   ${bigStat('39%→56%', `<p><strong>Kaçırılan derslerin oranı</strong> iade talebinden önceki son dönemde keskin bir şekilde artar.</p>`)}
   ${bigStat('35%→15%', `<p><strong>Ödev tamamlama oranı</strong> aynı dönemde aynı keskinlikte düşer.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted);margin-top:-4px;margin-bottom:14px">Gruplar genelindeki geçmiş verilere dayanmaktadır; kesin rakamlar bölgeye göre değişebilir.</p>
   ${co('co-danger','🚨',`<p><strong>İşte senin için en önemli kısım.</strong></p><p>Kurstan ayrılmak üzere olan bir çocuk, verdiğin derste tamamen normal görünebilir. Çöküş, oradayken gösterdiği dikkatte değil — <strong>derse gelmekte ve çalışmaları yapmakta.</strong> Yani “derste iyi görünüyor” her şeyin yolunda olduğunun kanıtı değildir.</p>`)}
  `},
  {t:'🦸 Bunda neden en önemli kişi sensin', html:`
   ${co('co-idea','💡',`<p><strong>Bu çocuğu, bu grupta, her hafta gören tek kişi sensin.</strong> Müşteri Hizmetleri’nde, Eğitim Operasyonları’nda ya da Deneme Dersi ekibinde hiç kimse bir çocuğun sessizleştiğini ya da denemeyi bıraktığını göremez. <strong>Sen görebilirsin.</strong> Bu eğitimin tamamı iki şeye dayanıyor: <strong>ne kadar iyi gözlemlediğin ve ne kadar hızlı harekete geçtiğin.</strong></p>`)}
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Tamamen senin</th><th>🔁 Uyum sağlamak senin — bildirmek de</th><th>🚫 Bizim kontrolümüz dışında</th></tr>
   <tr><td>Çocuk her derste motive ve desteklenmiş hissediyor</td><td><strong>Seviye çok zor ya da çok kolay.</strong> Görevi şimdi uyarla. İncelenmesi için bildir.</td><td>Sağlık</td></tr>
   <tr><td>Her çocuk gerçek bir söz hakkı ve gerçek bir cevap alıyor</td><td><strong>Kimsenin sana söylemediği özel bir ihtiyaç.</strong> Yaklaşımını uyarla. Bildir.</td><td>Aile koşulları</td></tr>
   <tr><td>Uzaklaşmanın ilk işaretlerini fark edip harekete geçiyorsun</td><td><strong>Kalabalık, hareketli bir grup.</strong> Öğrenilebilir bir beceri — yaklaşımını ayarla. Fark çok büyük kalırsa bildir.</td><td>Ailenin maddi durumu</td></tr>
   <tr><td>Aile, ilerlemeyi gerçek bir insanın takip ettiğini hissediyor</td><td><strong>Eğitmen/grup/program değişikliği kötü karşılandı.</strong> Şeffaf ol, hızla koordine ol.</td><td></td></tr>
   <tr><td>Ders kaçıran bir çocuk gerçekten eksiğini kapatıyor</td><td><strong>Kayıt sırasında aileye farklı bir şey söylenmiş.</strong> Dürüstçe açıkla. Bildir.</td><td></td></tr>
   </table></div></div>
   ${co('co-danger','🚨',`<p><strong>Bunların hiçbiri senin suçun değil — ama asıl iş yine de sende.</strong> Görevi uyarlamak, grubu yönetme şeklini değiştirmek, bir değişiklik sırasında çocuğu korumak. Ve aynı derecede önemli: <strong>birine haber ver.</strong> Team Leader’ını bilgilendir, Müşteri Hizmetleri’ni dahil et, BO’ya yorum bırak. Bunu yapmazsan sorun sessizce kaybolur — ve birkaç hafta sonra çocuğu kaybederiz.</p>`)}
  `},
  {t:'💬 Ailelerle konuşmak: senin yaptığın ve devrettiğin kısım', html:`
   <img src="Images/Image_2.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Veliler çocuklarının öğrenimi hakkında seninle konuşmak isteyecek — <strong>bu işinin bir parçası</strong> ve bu konuda sıcak ve ulaşılabilir olmalısın.</p>
   <p><strong>Yapamayacağın</strong> şey ise <em>işlemin</em> kendisi: bir çocuğu başka bir gruba almak, programı, seviyeyi ya da paketi değiştirmek veya ek bir dersi onaylamak. Bunlar Müşteri Hizmetleri’nin işi — ve onlar ancak sen haber verirsen harekete geçebilir.</p></div>
   ${co('co-idea','💡',`<p><strong>Kural: öğrenme hakkında konuş. İşlemi devret.</strong> Sen ders ile çocuğun durumunu değiştirebilecek kişiler arasındaki köprüsün — ve bir köprü ancak üzerinden bir şeyler <strong>hızla</strong> geçerse işe yarar.</p>`)}
  `},
  {t:'🔀 Sıra önemli: önce Team Leader, sonra aile', html:`
   <div class="card"><p>Doğru yapılması gereken bir sıra var ve bu sırayı yanlış uygulamak, iyi niyetli mesajların sorun yaratmasının tam olarak nedenidir.</p></div>
   ${co('co-danger','🚨',`<p><strong>Durum, kendi öğretiminin ötesinde bir şeyi içerdiğinde</strong> — seviye, grup, program, özel bir ihtiyaç, tutulmamış bir söz, kaybedilmiş bir ders — <strong>önce aileye yazma.</strong></p>`)}
   ${stepFlow([
     {ic:'👩‍💼', label:'1. Team Leader’ınla koordine ol — ne gördüğünü anlat, Müşteri Hizmetleri’ni dahil et, BO’ya yorum bırak'},
     {ic:'🧭', label:'2. Stratejide anlaşın — bu çocuk için gerçekten neyin mümkün olduğu ve neyin olmadığı'},
     {ic:'👪', label:'3. Sonra aile — tam olarak Team Leader’ınla kararlaştırdığınız şey, fazlası değil'}
   ])}
   <div class="card"><p>Böylece asla tahmin yürütmek, fazla söz vermek ya da söylediğini geri almak zorunda kalmazsın.</p></div>
   ${co('co-danger','🚨',`<p><strong>Çözümleri ve seçenekleri açıklamak, koordinasyondan sonra bile senin işin değil.</strong> Team Leader’ın sana şu iki şeyden birini söyler:</p>
   <ul><li><em>“Aileye X’i söyle”</em> → tam olarak bunu söyle, fazlasını değil</li>
   <li><em>“Buradan sonrasını biz hallederiz”</em> → <strong>sen konunun dışında kalırsın.</strong> Bir aileye farklı tablolar çizen iki ses, güvenin tam olarak böyle kırılmasına yol açar.</li></ul>`)}
  `},
  {t:'📌 Her zaman söyleyebileceklerin ve her zaman beklemesi gerekenler', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Her zaman senin — rahatça yaz, sıcak ve ilgili ol</th><th>⏸️ Her zaman Team Leader’ını bekler</th></tr>
   <tr><td>Çocuğun nasıl gittiği, neyi iyi yaptığı, neyi zor bulduğu</td><td><strong>Seviyeler, kurslar, gruplar, programlar, formatlar ya da paketlerle</strong> ilgili her şey</td></tr>
   <tr><td>Derste <strong>ona verdiğin destek</strong> ve neyi uyarladığın</td><td>Ailenin seçebileceği her türlü <strong>seçenek, çözüm ya da sonraki adım</strong></td></tr>
   <tr><td>Zorlandığını fark ettiğin ve nasıl hissettiğini önemsediğin</td><td>Bir şeyin <strong>nasıl ters gittiğine dair her açıklama</strong> ya da nedeni</td></tr>
   <tr><td>Bu çocuğun en iyi nasıl öğrendiğini sormak</td><td><strong>Parayla</strong> ilgili her şey</td></tr>
   <tr><td>Kaçırılan bir ders ve neyin telafi edilmesi gerektiği</td><td>Bir şeyin <strong>olacağına</strong> ya da <strong>olmayacağına</strong> dair her türlü teyit</td></tr>
   <tr><td>Bir konuyu ekibine, genel hatlarıyla ve ayrıntıya girmeden ilettiğin</td><td><strong>Şirket içinde bildirdiklerinle</strong> ilgili her türlü ayrıntı</td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p><strong>Tek cümlede fark: sen çocuktan bahsedersin. Team Leader’ın ve Müşteri Hizmetleri ise koşullardan bahseder.</strong></p>`)}
   ${co('co-danger','⛔',`<p><strong>Asla söz verme ve asla reddetme.</strong></p><p><em>“Onu başka bir gruba alacağız”</em> değil. <em>“Bu mümkün değil”</em> de değil. İkisi de senin vereceğin kararlar değil.</p>
   <p><strong>Ama soğuk ya da kaçamak da olma.</strong> Her zaman, hemen göstermen gereken şey, bu çocuğun rahat etmesini ve mümkün olan en iyi öğrenme deneyimini yaşamasını gerçekten istediğin — ve bunun üzerinde zaten çalıştığındır. <em>“Bunu gördüm, benim için önemli, neler yapabileceğimize bakıyorum ve size dönüş yapacağım.”</em> Bu bir söz değil. Cevap bulunurken aileyi bizimle tutan şey budur.</p>`)}
   <div class="card"><p><strong>Öğretimin olağan işleri hakkında her zaman önceden sormadan doğrudan yazabilirsin:</strong> dersin nasıl geçtiği, çocuğun iyi yaptığı bir şey, kaçırılan bir ders ve neyin telafi edileceği, evde nasıl gittiğine dair bir soru. Bunların hepsinde ilgili ve sıcak ol — bu senin işin ve daha zor konuşmaları ileride mümkün kılan da bu.</p></div>
  `}
 ],
 ix:{
  title:'Ne bana ait, neyi uyarlayıp bildiririm, ne bana ait değil',
  instr:'Her gerçek durumu doğru alana yerleştir. Modül 1’in kilidini açmak için %70.',
  items:[
   {type:'sort', prompt:'“Büyük bir grupta bir öğrenci kayboluyor ve katılamıyor” —', card:'Büyük bir grupta bir öğrenci kayboluyor ve katılamıyor', zones:[
     {label:'Tamamen bana ait', fb:'Tam olarak değil — önce kendi yaklaşımını değiştirerek başla, ama gerçekten denedikten sonra fark hâlâ çok büyükse bu da bildirilmesi gereken bir şey.'},
     {label:'Uyarlamak ve bildirmek bana ait', fb:'Doğru — bu, bir sonraki dersten itibaren kendin değiştirebileceğin bir grup yönetimi becerisi; denedikten sonra hâlâ yeterli değilse bildirirsin.'},
     {label:'Bizim kontrolümüz dışında', fb:'Tam olarak değil — bu bir grup yönetimi becerisi ve kendi yaklaşımını uyarlamanla başlar.'}
   ], correctZone:1, fb:''},
   {type:'sort', prompt:'“Ailenin maddi durumu değişti” —', card:'Ailenin maddi durumu değişti', zones:[
     {label:'Tamamen bana ait', fb:'Tam olarak değil — bir ailenin maddi durumu gerçekten bizim kontrolümüz dışındadır.'},
     {label:'Uyarlamak ve bildirmek bana ait', fb:'Tam olarak değil — bir ailenin maddi durumu gerçekten bizim kontrolümüz dışındadır, uyum sağlanacak bir şey değildir.'},
     {label:'Bizim kontrolümüz dışında', fb:'Doğru — bu gerçekten kontrolümüz dışında olan bir neden. Nazik ol, bir şey bekleme ve üstüne gitme.'}
   ], correctZone:2, fb:''},
   {type:'sort', prompt:'“Seviye yaşına göre çok ileri” —', card:'Seviye yaşına göre çok ileri', zones:[
     {label:'Tamamen bana ait'},
     {label:'Uyarlamak ve bildirmek bana ait', fb:'Doğru — görevi şimdi uyarla ve seviyenin kendisinin incelenebilmesi için bildir.'},
     {label:'Bizim kontrolümüz dışında'}
   ], correctZone:1, fb:'Tam olarak değil — görevi hemen uyarlayabilirsin ve seviyenin incelenmesi için ayrıca bildirmelisin. İki kısım da önemli.'},
   {type:'sort', prompt:'“Ödev teslim etmeyi bıraktı” —', card:'Ödev teslim etmeyi bıraktı', zones:[
     {label:'Tamamen bana ait', fb:'Doğru — bunu fark etmek ve harekete geçmek (birebir görüşme, yaklaşımını ayarlamak) tamamen sana ait.'},
     {label:'Uyarlamak ve bildirmek bana ait'},
     {label:'Bizim kontrolümüz dışında'}
   ], correctZone:0, fb:'Tam olarak değil — ödevlerdeki düşüşü fark etmek ve birebir görüşme yapmak tamamen kendi öğretim alanında; seviye uyumsuzluğu gibi daha büyük bir soruna işaret etmedikçe bildirmen gerekmez.'},
   {type:'sort', prompt:'“Kimse bana özel eğitim ihtiyacı olduğunu söylemedi” —', card:'Kimse bana özel eğitim ihtiyacı olduğunu söylemedi', zones:[
     {label:'Tamamen bana ait'},
     {label:'Uyarlamak ve bildirmek bana ait', fb:'Doğru — derste uyarlayabileceğin her şeyi uyarla ve birebir ders gibi seçeneklerin değerlendirilebilmesi için bildir.'},
     {label:'Bizim kontrolümüz dışında'}
   ], correctZone:1, fb:'Tam olarak değil — yaklaşımını hemen uyarlarsın ve daha kapsamlı seçeneklerin değerlendirilebilmesi için ayrıca bildirirsin.'},
   {type:'sort', prompt:'“Veli, kendilerine farklı bir şey vaat edildiğini söylüyor” —', card:'Veli, kendilerine farklı bir şey vaat edildiğini söylüyor', zones:[
     {label:'Tamamen bana ait'},
     {label:'Uyarlamak ve bildirmek bana ait', fb:'Doğru — geçmişi değiştiremezsin ama dürüstçe açıklarsın ve konuşmanın departmanlar arasında yapılması için bildirirsin.'},
     {label:'Bizim kontrolümüz dışında'}
   ], correctZone:1, fb:'Tam olarak değil — uyumsuzluk senden kaynaklanmamış olsa bile tekrarlanmaması için bunun bildirilmesi gerekiyor.'},
   {type:'sort', prompt:'“Çocuk sıkılıyor ve on dakikada bitiriyor” —', card:'Çocuk sıkılıyor ve on dakikada bitiriyor', zones:[
     {label:'Tamamen bana ait'},
     {label:'Uyarlamak ve bildirmek bana ait', fb:'Doğru — şimdi gerçek bir ek zorluk ver ve olası bir “seviye çok kolay” durumu olarak bildir.'},
     {label:'Bizim kontrolümüz dışında'}
   ], correctZone:1, fb:'Tam olarak değil — kolay bir seviyeden kaynaklanan sıkılma, dersinde hemen bir ek zorluk gerektirir; ayrıca seviyenin incelenmesi için bildirmen gerekir.'}
  ]
 }
},
{id:'m1', numLabel:'Modül 1', emoji:'👀', color:'var(--blue)',
 title:'Erken Fark Etmeyi Öğrenmek',
 desc:'Ders sırasında ve dersler arasında neye bakman gerektiği ve hangi noktada harekete geçmen gerektiği.',
 obj:'Ders sırasında ve dersler arasında tam olarak neye bakman gerektiğini bilmek, kötü bir hafta geçiren çocukla ayrılmak üzere olan çocuğu ayırt etmek ve hangi noktada harekete geçmen gerektiğini bilmek.',
 sections:[
  {t:'', html:`<div class="card"><p>Bu, eğitimdeki en önemli modül. Geri kalan her şey, durumu zamanında fark etmene bağlı.</p></div>`},
  {t:'👁️ 1.1 · Ders sırasında neyi fark etmelisin', html:`
   <div class="card"><p>Bunlar şirkette başka hiç kimsenin göremeyeceği sinyaller. Bunları okumak için bir rapora ihtiyacın yok — sadece dikkatle bakman gerekiyor.</p></div>
   <img src="Images/Image_4.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   ${iconGrid([
     {ic:'📷', html:`<strong>Kamera kapanıyor</strong> ve eskiden açık olmasına rağmen kapalı kalıyor. Geri çekilmenin en yaygın erken işareti — sonunda ayrılan çocuklar, grup arkadaşlarına göre kamerayı yaklaşık <strong>yarısı</strong> kadar süre açık tutuyor.`},
     {ic:'🎤', html:`<strong>Mikrofon hiç kullanılmaz oluyor</strong> — grup arkadaşlarının mikrofon süresinin kabaca <strong>üçte biri</strong>. Konuşmayı bırakan bir çocuk genellikle kendini grubun bir parçası gibi hissetmeyi de bırakmıştır.`},
     {ic:'💬', html:`Eskiden cümle kurduğu yerde <strong>tek kelimelik cevaplar</strong>. Eğer bu bir değişimse utangaçlık değildir — değişim bir sinyaldir.`},
     {ic:'🖥️', html:`Bireysel çalışma sırasında <strong>ekranını paylaşmayı bırakıyor</strong>. Genellikle “takıldığımı görmeni istemiyorum” ya da “daha başlamadım” anlamına gelir.`},
     {ic:'📝', html:`<strong>Ders içi çalışmaya başlıyor ama hiç bitirmiyor</strong> — geride kalmanın ders içindeki en net hâli.`},
     {ic:'✋', html:`<strong>Elini kaldırıyor ama söz verilmiyor</strong> — ve sonra el kaldırmayı bırakıyor. <strong>Bu bizim sorumluluğumuzda.</strong>`},
     {ic:'⏰', html:`<strong>Geç geliyor, erken çıkıyor ya da girip çıkıp duruyor.</strong> Dikkat yerinde; bağlılık değil.`},
     {ic:'😞', html:`Bir hatadan sonra <strong>sessizleşiyor ya da hızla sinirleniyor</strong>, özellikle bu yeni bir davranışsa.`},
     {ic:'⚡', html:`<strong>İşi yarı sürede bitiriyor ve sonra dersi bölüyor.</strong> Bu da bir seviye sorunu — sıkılmak, ilgisizlikle tamamen aynı görünür.`},
     {ic:'🔁', html:`<strong>Aynı temel soruyu tekrar tekrar soruyor.</strong> Seviye muhtemelen uygun değil — Modül 5’e bak.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Püf noktası karşılaştırmak, yargılamak değil.</strong> Bunların hiçbiri tek başına bir şey ifade etmez. Hepsi, <strong>o çocuğun her zamanki hâlinden farklı</strong> ya da <strong>aynı dersteki grubun geri kalanından farklı</strong> olduğu anda bir anlam kazanır.</p>`)}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Hiç söz verilmeyen el</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/12AOW3X9Vgm_cVzeOdjX5HN7Z2j-JV-lK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Bu videoda, sohbet üzerinden eğitmeniyle iletişim kurmaya çalışan bir öğrenciyi göreceksin; ama eğitmen onu fark etmiyor gibi görünüyor.</div></div>
  `},
  {t:'📅 1.2 · Dersler arasında neyi fark etmelisin', html:`
   <div class="card"><p>Dersler arasında, canlı dersin sana veremeyeceği bir şeye sahipsin: çocuğun çalışmaları gerçekten yapıp yapmadığının kaydı. Bunlar iki ayrı şey ve <strong>ikisi de önemli.</strong></p></div>
   ${iconGrid([
     {ic:'🏫', html:`<strong>Ders içi çalışma (Derste)</strong> — çocuğun dersin kendisi sırasında tamamladıkları. <strong>Sen oradayken</strong> takip edip edemediğini gösterir. Bu düştüğünde sorun, zorluk ya da ders içindeki katılımdır.`},
     {ic:'🏠', html:`<strong>Ödev (Evde)</strong> — çocuğun kendi başına tamamladıkları. Kursun <strong>sen orada değilken</strong> hâlâ önemli olup olmadığını ve ailenin bunu destekleyip desteklemediğini gösterir. Bu daha zor ama daha dürüst bir sinyaldir.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>İkisini de izle. Herhangi birinde harekete geç.</strong></p><p>Bir çocuk ders içi çalışmada iyi, ödevde ise sıfırda olabilir — bu bir motivasyon ve aile desteği sorunudur. Bir çocuk ödevini yapıyor ama ders içi çalışmada zorlanıyor olabilir — bu genellikle derste bir zorluk ya da dikkat dağınıklığı sorunudur. Her biri, tek başına, harekete geçmek için yeterlidir. <strong>İkisinin birden kötüleşmesini bekleme.</strong></p>`)}
   ${bigStat('47%',`Sonunda iade talep eden çocukların bu oranı, derslerinin <strong>yarısından azına katılıyor</strong>. Devam bir formalite değildir — bir ailenin bu kursun kendisi için hâlâ önemli olup olmadığına dair verdiği en görünür mesajdır.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Gruplar genelindeki geçmiş verilere dayanmaktadır; kesin rakam bölgeye göre değişebilir.</p>
  `},
  {t:'🔎 1.3 · Neredeyse herkesin yaptığı hata', html:`
   <div class="card"><p>Çoğu eğitmen bir <strong>düşüş</strong> arar — işlerin kötüleştiği bir an. Bu içgüdü vakaların çoğunu gözden kaçırır.</p></div>
   ${co('co-danger','🚨',`<p><strong>Düşüş arama. Boşluk ara.</strong></p>`)}
   ${bigStat('58.6%',`İade vakalarının bu oranında ödevler <strong>düşmüyor, düz bir çizgideydi</strong> — çocuk zaten bırakmıştı ya da hiç gerçekten başlamamıştı. Fark edilecek bir düşüş yoktu.`)}
   ${bigStat('56.9%',`Vakaların bu oranında ders içi çalışma <strong>düşüyordu</strong> — bu yüzden ikisi arasında genellikle daha erken görünen sinyal odur.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Gruplar genelindeki geçmiş verilere dayanmaktadır; kesin rakamlar bölgeye göre değişebilir.</p>
  `},
  {t:'💔 1.4 · Ödev yapmamak neden iadeyi öngörebilir', html:`
   <img src="Images/Image_6.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Bunu net olarak anlamak önemli, çünkü konuyu ne kadar acil ele aldığını değiştirir.</p>
   <p>Çalışmalarını yapmayan bir çocuk geride kalır. Geride kalan bir çocuk derste kendini kaybolmuş hisseder. Derste kendini kaybolmuş hisseden bir çocuk gelmek istemez olur. Aile, derse gitmek istemeyen bir çocuk görür ve şu sonuca varır: <em>“ilgilenmiyor”</em> ya da <em>“bu kurs ona göre değil.”</em></p></div>
   ${co('co-idea','💡',`<p>Bir veli bu sözleri kullandığında, <strong>teslim edilmemiş üç projeyle</strong> başlayan bir sarmalı anlatıyordur. Eksik çalışmalar yalnızca ayrılmaya çoktan karar vermiş bir çocuğun belirtisi değildir — onun bu kararı vermesine yol açan şeyin bir parçasıdır.</p>`)}
   ${co('co-idea','📌',`<p><strong>Yani: art arda eksik ders içi çalışma ya da ödev, tek başına harekete geçmek için bir nedendir.</strong> Göz kulak olunacak bir şey değil. Sadece kötüleşirse dile getirilecek bir şey değil. <strong>Harekete geç.</strong></p>`)}
  `},
  {t:'🧩 1.5 · Üç örüntü', html:`
   <div class="card"><p>Bir çocuğun son birkaç dersine geriye dönüp baktığında üç şekilden birini görürsün. Her biri farklı bir anlama gelir ve her biri farklı bir tepki gerektirir.</p></div>
   ${patternCards([
     {ic:'🐌', title:'Yavaş kayış', desc:'Devam ve çalışmalar birkaç ders boyunca yavaş yavaş azalıyor; eksikler giderek artıyor; kamera kapalı', note:'Klasik uzaklaşma. <strong>Tersine çevirebileceğin durum bu</strong> — ne kadar erken harekete geçersen o kadar olasıdır. → Modül 3 ve 4'},
     {ic:'🧱', title:'Ani duruş', desc:'Normal, normal, normal — sonra hiçbir şey', note:'Bir şey oldu. Program çakışması, bir olay, evde bir durum. <strong>Sor. Varsayımda bulunma.</strong> → Modül 4'},
     {ic:'✅', title:'Katılımcı ama yine de ayrılıyor', desc:'Derse geliyor, katılıyor, çalışmaları yapıyor — ama aile yine de ayrılmak istiyor', note:'<strong>Neden katılım değil, sen de değilsin.</strong> Daha fazla motivasyon bunu çözmez. <strong>Asıl nedeni bul ve hızla doğru yere ilet.</strong> → Modül 5 ve 6'}
   ])}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Hiç derse gelmeyen öğrenci</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RfFI5FTMg3DBHEiJtoG9DpJyjVoHFv74/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">En kritik vakalardan biri ve hemen bildirilmesi gereken bir durum: ilk dersten beri hiç katılmamış bir öğrenci.</div></div>
  `},
  {t:'🚦 1.6 · Ne zaman harekete geçmelisin', html:`
   <div class="card"><p>Emin olmana gerek yok. Bir eşiğe ihtiyacın var; böylece “emin değildim” bir şey yapmamak için gerekçe olmaktan çıkar.</p><p><strong>Aşağıdakilerden herhangi biri doğruysa bu hafta harekete geç:</strong></p></div>
   ${iconGrid([
     {ic:'📉', html:`Çocuk derslerinin <strong>yarısından azına</strong> katılıyor`},
     {ic:'📊', html:`Ders içi çalışma ya da ödev <strong>grup ortalamasının belirgin şekilde altında</strong> — genel bir kural olarak 15 puan veya daha fazla`},
     {ic:'🤔', html:`Devam orta düzeyde — tamamen kopmamış ama düzenli de değil — <strong>ve</strong> yukarıdakilerden biri de doğru`},
     {ic:'0️⃣', html:`<strong>Art arda iki veya daha fazla ders</strong> boyunca hiçbir şey teslim edilmemiş`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Ve şu durumlarda, rakam ne olursa olsun, hemen harekete geç:</strong> çocuk eskiden konuşur ya da kamerada görünürken artık bunu yapmıyor · katılmaya çalıştı ama ona sıra gelmedi · sana bir şeylerin yolunda olmadığını söyledi · içinde kötü bir his var. <strong>Senin değerlendirmen de bir sinyal sayılır.</strong></p>`)}
  `}
 ],
 ix:{
  title:'Yavaş kayış, ani duruş mu, yoksa katılımcı ama yine de ayrılıyor mu?',
  instr:'Her anonimleştirilmiş ilerleme geçmişi için hangi örüntü olduğunu seç — ardından doğru ilk adımı seç. Modül 2’nin kilidini açmak için %70.',
  items:[
   {type:'choice', prompt:'Bir çocuğun devamı ve ders içi çalışmaları son beş derstir sessiz sedasız düşüyor, her seferinde biraz daha; son iki derste de kamera kapalıydı.', opts:['Yavaş kayış','Ani duruş','Katılımcı ama yine de ayrılıyor'], correct:0, fb:'Bu yavaş kayış — klasik uzaklaşma ve ne kadar erken harekete geçersen tersine çevirme ihtimalin o kadar yüksek olan durum.'},
   {type:'choice', prompt:'Bir çocuk geçen derste tamamen normaldi — tam katılım, kamera açık, ödev yapılmış — ve bu hafta hiçbir mesaj göndermeden derse gelmedi.', opts:['Yavaş kayış','Ani duruş','Katılımcı ama yine de ayrılıyor'], correct:1, fb:'Bu ani duruş. Bir şey oldu — sor, varsayımda bulunma.'},
   {type:'choice', prompt:'Bir çocuk her derse katıldı, aktif ve tüm çalışmalarını teslim ediyor — ama aile yine de az önce kaydı iptal etmek istedi.', opts:['Yavaş kayış','Ani duruş','Katılımcı ama yine de ayrılıyor'], correct:2, fb:'Katılımcı ama yine de ayrılıyor. Neden katılım değil — seviye, beklentiler, program ya da koşullar gibi bir şey. Daha fazla motivasyon bunu çözmez; asıl nedeni bul ve doğru yere ilet.'},
   {type:'choice', prompt:'“Yavaş kayış” için doğru ilk adım nedir?', opts:['Gerçek bir örüntü olduğundan emin olmak için birkaç ders daha beklemek','Hemen harekete geçmek — ne kadar erken müdahale edersen tersine çevrilme ihtimali en yüksek olan durum bu','Geçici olduğunu varsayıp gelecek ay tekrar kontrol etmek'], correct:1, fb:'Yavaş kayışlar, erken müdahalenin tam olarak tersine çevirebileceği durumlardır. Beklemek, elindeki avantajı harcamak demektir.'},
   {type:'choice', prompt:'“Ani duruş” için doğru ilk adım nedir?', opts:['Önemli bir şey olmadığını varsayıp çocuğun kendiliğinden dönmesini beklemek','Sormak — tahmin etmek yerine gerçekte ne olduğunu öğrenmek','Aileye hemen çocuğun geride kaldığını söylemek'], correct:1, fb:'Ani duruşun belirli bir nedeni vardır. Ne yapacağına karar vermeden önce bu nedenin ne olduğunu öğren.'},
   {type:'choice', prompt:'“Katılımcı ama yine de ayrılıyor” için doğru ilk adım nedir?', opts:['Çocuğu motive tutmak için ona daha fazla övgü ve cesaret vermek','Asıl nedenin ne olduğunu öğrenmek — seviye, beklentiler, program, koşullar — ve hızla doğru yere iletmek','Çocuk zaten iyi gittiği için yapılacak bir şey olmadığı sonucuna varmak'], correct:1, fb:'Daha fazla motivasyon, hiçbir zaman motivasyonla ilgili olmamış bir nedeni çözemez. Gerçekte ne olduğunu öğren ve hızla doğru kişiye ulaştır.'}
  ]
 }
},
{id:'m2', numLabel:'Modül 2', emoji:'🖥️', color:'var(--blue)',
 title:'İlerleme Ekranını Okumak',
 desc:'Grubundaki bir çocuğun uzaklaşıp uzaklaşmadığını iki dakikadan kısa sürede öğren — uygulamalı olarak, bir BO simülasyonunda.',
 obj:'Grubundaki bir çocuğun uzaklaşıp uzaklaşmadığını iki dakikadan kısa sürede öğrenmek — ve yeni bir öğrenciyle ilk dersinden önce her zaman bilmen gereken iki şeyi kontrol etmek.',
 sections:[
  {t:'👤 2.1 · Yeni bir öğrenciyle ilk dersinden önce — her zaman', html:`
   <div class="card"><p>Yeni bir gruba başlamadan önceki en önemli adımlardan biri — ve ileride birçok sorunu önleyebilecek bir adım — öğrencinin profilini ve Müşteri Hizmetleri yorumlarını incelemektir.</p></div>
   ${iconGrid([
     {ic:'🎂', html:`<strong>Yaş uyumu.</strong> Çocuğun yaşının yerleştirildiği kursa uygun olup olmadığı.`},
     {ic:'🎯', html:`<strong>İlgi alanları.</strong> Bu çocuğun nelerden hoşlandığı — ilk dersten itibaren örnekler ve kısa sohbetler için faydalı.`},
     {ic:'📝', html:`<strong>Velilerin ya da önceki eğitmenlerin notları.</strong> Özellikle çocuk başka bir gruptan geldiyse.`}
   ])}
   ${co('co-idea','💡',`<p>Bu bilgiler, her öğrenciyle nasıl bağ kuracağını anlamana ve olası sorunları fark etmene ya da <strong>grup daha başlamadan</strong> değişiklik talep etmene yardımcı olur.</p>`)}
   <div class="card"><p>Aşağıdaki simülasyonda bu bilgileri BO’da nasıl inceleyeceğini ve yeni grubuna hazırlanmak için nasıl kullanacağını öğreneceksin.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Öğrenci profili</span><iframe src="Simulacion_BO_M2_Profile_TR.html" title="BO — Öğrenci profili" loading="lazy"></iframe></div></div>
  `},
  {t:'📊 2.2 · İlerleme ekranı — haftalık 60 saniyelik taraman', html:`
   <div class="card"><p>Aşağıda İlerleme ekranının tam olarak nasıl göründüğünü görüyorsun. Ders içi çalışmaların ve ödevlerin nerede olduğunu, her rengin ne anlama geldiğini ve örüntüyü nasıl okuyacağını öğrenmek için simülasyondaki adımları takip et.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — İlerleme</span><iframe src="Simulacion_BO_M2_Progress_TR.html" title="BO — İlerleme" loading="lazy"></iframe></div></div>
   ${co('co-danger','🚨',`<p>Bu öğrencinin ekranının sana ne söylediğine bak: <strong>Derste</strong> güçlü, yeşil puanlar — ama <strong>Evde</strong> sütunundaki her hücre turuncu, “teslim edilmedi.” <strong>Aynı öğrenci, aynı dersler, tam tersi bir hikâye.</strong> Sen izlerken her şey yolunda; sen olmadığın anda kursun önemi kalmıyor.</p>`)}
   <div class="card"><h4>Bir dakikadan kısa sürede nasıl okunur</h4>
   <ol><li><strong>Art arda gelen sıfırları ara.</strong> <strong>Art arda iki tane, harekete geçmek için yeterli.</strong> Ardışık bir seri bu ekrandaki en güçlü sinyaldir — tek bir hücreden çok daha fazla bilgi verir.</li>
   <li><strong>Aynı çocuğun iki sekmesini karşılaştır.</strong> Derste güçlü, Evde boş → derste seninle birlikte ama evde kursun önemi kalmamış. Derste zayıf, Evde fena değil → derste bir şey işlemiyor: zorluk, tempo ya da dikkat.</li>
   <li><strong>Çocuğu grubun geri kalanıyla karşılaştır.</strong> Aynı rakamlar, herkesin 30/50’de olmasına ya da sadece bu çocuğun öyle olmasına göre farklı anlamlar taşır.</li>
   <li><strong>Serinin nerede başladığına bak.</strong> Hangi derste başladı? O derste ne olduğuna geri dön — cevap genellikle oradadır.</li>
   <li><strong>Devamı da kontrol et.</strong> Burada gördüğün, ders sırasındaki gerçek varlık değil, Back Office’e kaydedilen devamdır — bunu “derse geldi mi” diye oku, “ne kadar katılımcıydı” diye değil.</li></ol></div>
   ${co('co-danger','🚨',`<p><strong>Bunu haftada bir, tüm grup için yap; sadece zaten endişelendiğin çocuk için değil.</strong> Taramanın amacı, <em>henüz</em> fark etmediğin çocuğu bulmaktır.</p>`)}
   ${co('co-idea','🧭',`<p><strong>Ödevlerin ya da ders içi çalışmaların platform dışında yapıldığı bir kurs mu veriyorsun?</strong> İlerleme ekranı sana işe yarar bir şey göstermeyecek — ama eksik olan kayıttır, bilgi değil. Bunu otomatik değil, bilinçli bir şekilde yap: çocuklardan çalışmalarını ekran paylaşımıyla göstermelerini iste, bireysel çalışma sırasında sık sık kontrol et, ödevi açıkça ve sesli olarak ver ve bir sonraki derste isim vererek takip et. Aynı sinyaller, aynı eşikler — sadece onları kendin gidip toplaman gerekiyor.</p>`)}
  `}
 ],
 ix:{
  title:'Taramayı okumak — hızlı kontrol',
  instr:'Yukarıdaki BO örneğine göre şu soruları yanıtla. Modül 3’ün kilidini açmak için %70.',
  items:[
   {type:'choice', prompt:'Yukarıdaki örnekte bu öğrencinin Derste puanları güçlü (yeşil) kalırken, Evde her derste “teslim edilmedi” (turuncu) olarak görünüyordu. Bu büyük olasılıkla ne anlama geliyor?', opts:['Bir ödev/motivasyon sorunu — eğitmen bakmadığında kursun önemi kalmamış','Dersin kendisinde bir ders içi çalışma/zorluk sorunu','Hiçbir şey — diğeri iyiyse tek bir düşük sekme önemli değil'], correct:0, fb:'Derste güçlü, Evde boş olması dersteki bir zorluğa değil, evdeki motivasyona ya da aile desteğine işaret eder.'},
   {type:'choice', prompt:'Bunun tersi olsaydı — Derste sıfıra doğru düşerken Evde makul düzeyde kalsaydı — bu büyük olasılıkla ne anlama gelirdi?', opts:['Evde bir ödev/motivasyon sorunu','Bir ders içi çalışma/zorluk sorunu — tempo, zorluk ya da derste yeterince ilgi görmemek','Bu öğrenci aslında iyi durumda, çünkü hâlâ ödevlerini yapıyor'], correct:1, fb:'Ödevler devam ederken ders içi çalışmanın düşmesi, genellikle dersin kendisindeki bir şeye işaret eder — zorluk, tempo ya da dikkat.'},
   {type:'choice', prompt:'Bir İlerleme ekranını tararken aranacak en güçlü tek şey nedir?', opts:['Tablonun herhangi bir yerindeki en düşük tek puan','Art arda iki veya daha fazla sıfır (ya da “teslim edilmedi”)','Modül toplamının yuvarlak bir sayı gibi görünüp görünmediği'], correct:1, fb:'Ardışık bir seri, tek bir düşük hücreden çok daha fazla bilgi verir — tüm ekrandaki en net sinyaldir.'},
   {type:'choice', prompt:'Neden her hafta her çocuk için hem Derste hem Evde sekmelerini kontrol etmelisin — sadece zaten endişelendiğin çocuk için değil?', opts:['Çünkü haftalık taramanın amacı, henüz fark etmediğin çocuğu bulmaktır','Çünkü bu, yeni bir şey bulduğu için değil, resmî bir zorunluluk olduğu için yapılır','Çünkü Evde, Derste’den daha önemlidir, bu yüzden kontrol etmeye değen tek sekme odur'], correct:0, fb:'Tarama, ancak henüz radarında olmayan çocuğu ortaya çıkarırsa işe yarar.'},
   {type:'choice', prompt:'Yeni bir öğrenciyle ilk dersinden önce her zaman neyi kontrol etmelisin?', opts:['Hiçbir şeyi — ders verdikçe bilmen gerekenleri öğrenirsin','Öğrenci profilindeki Bilgi ve Yorumlar alanlarını','Sadece önceki eğitmenindeki devam kaydını'], correct:1, fb:'İlk dersten önce Bilgi ve Yorumlar alanlarına iki dakika ayırmak, bu eğitimdeki en ucuz ve en değerli alışkanlıktır.'}
  ]
 }
},
{id:'m3', numLabel:'Modül 3', emoji:'🎬', color:'var(--blue)',
 title:'Derste Harekete Geçmek',
 desc:'Dersin kendisini bir müdahale aracı olarak kullan — katılım, elindeki en hızlı araç.',
 obj:'Dersin kendisini bir müdahale aracı olarak kullanmak — çünkü sanal, isteğe bağlı, okul sonrası bir derse çocuk ancak geri dönmeye değer bir şey bulduysa döner.',
 sections:[
  {t:'🔌 3.1 · Katılım burada neden daha fazla önem taşıyor', html:`
   <div class="card"><p>Öğrencilerimiz okulda olduğu gibi burada bulunmak zorunda değil. Evdeler, her türlü dikkat dağıtıcı bir tık uzaklarında ve gerçek bir sınıfta dikkati ayakta tutan fiziksel varlıktan yoksunlar. <strong>Her derste kurduğun bağ hoş bir ekstra değil — bir çocuğun gelecek hafta geri dönmeye karar vermesinin nedeni.</strong></p>
   <p>Ve bir çocuk uzaklaşmaya başladığında, ders senin en hızlı aracındır. Dersi nasıl yürüttüğünü değiştirmek için kimsenin iznini beklemene gerek yok.</p></div>
  `},
  {t:'👋 3.2 · İlk dakikalar çok şeyi belirler', html:`
   <div class="card"><p>Bir dersin nasıl başladığı, sonrasındaki her şeyin tonunu belirler. Derse girip selamlamadaki sıcaklığı hisseden bir çocuk, doğrudan “etkinliği açın” diye başlanan bir çocuktan bambaşka bir ruh hâlindedir.</p></div>
   ${doavoid(
     ['Gerçek bir enerjiyle selamla: <em>“seni bugün gördüğüme çok sevindim”</em>','İçeriğe geçmeden önce kısa ve kişisel bir şey sor','Bugünün hedefini söyle ve bunu gerçekten kastettiğini hissettir','Kimin yokken geri geldiğini yüksek sesle fark et: <em>“seni tekrar görmek çok güzel”</em>'],
     ['Hiç selamlaşmadan doğrudan içeriğe geçmek','Başlangıçta aceleci ya da stresli görünmek','Ne yapacağını ya da nedenini açıklamamak','Geri dönen bir çocuğun fark edilmeden derse karışmasına izin vermek']
   )}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Durgun bir açılış</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1GyQV2tEQq3OuDPfFI0NZTQRjWhg_9Rri/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Sıcak bir açılış</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RqXcQLKBiWEhV97ZasJGIFuJhB8yU0Dh/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'💬 3.3 · Sadece düzeltmek yerine motive eden geri bildirim', html:`
   <div class="card"><p>Tekrarlanan genel bir iltifat — <em>“iyi”, “güzel”</em> — hızla etkisini kaybeder ve sessizce tam tersi bir mesaj verir: çocuğun çalışmasına gerçekten bakmadığın.</p></div>
   ${co('co-idea','🔁',`<p><strong>Vurgula → Sor → Harekete geçir</strong></p>
   <ol><li>Çocuğun yapmaya <em>karar verdiği</em> belirli bir şeyi <strong>vurgula</strong> ve neden işe yaradığını söyle.</li>
   <li>Bunu gerçek bir merakla <strong>sor</strong>; çocuğa kendi çalışmasının uzmanı gibi davran.</li>
   <li>Sırada ne olacağına dair gerçek bir seçim sunarak <strong>harekete geçir</strong>.</li></ol>
   <p><em>“Aferin!”</em> yerine → <em>“Karakteri tam orada zıplatman çok hoşuma gitti — bunu en baştan mı planladın, yoksa sahneyi kurarken mi aklına geldi? Bu karakterin bir hikâyesi olsun ister misin, yoksa bence böyle tamamlanmış mı diyorsun?”</em></p>`)}
  `},
  {t:'✋ 3.4 · Her çocuğun gerçek bir söz hakkı almasını sağlamak', html:`
   <div class="card"><p>Çocuklar, görüldüklerini ve bir şeyin parçası olduklarını hissettikleri bir yer buldukları için geri gelirler. Ve bir çocuğu kaybetmenin en hızlı yolu, katılmaya çalışıp karşılığında hiçbir şey alamamasıdır.</p></div>
   ${co('co-danger','🚨',`<p><strong>“Dikkatini sırayla dağıt” yeterli değil.</strong> Her eğitmen bunu yaptığına inanır. <strong>Bunu sayılabilir hâle getir.</strong></p>
   <ul><li>Katılımcı listesini görebileceğin bir yerde tut ve <strong>her çocuk gerçek bir söz hakkı aldığında adının yanına işaret koy</strong> — bir bakış değil, gerçek bir etkileşim.</li>
   <li><strong>Dersin ortasında kimin henüz işareti olmadığını kontrol et.</strong> Sıradaki söz hakkını onlara ver.</li>
   <li>Sohbeti ve tepkileri teselli ödülü olarak değil, gerçek bir ikinci kanal olarak kullan: <em>“fikrinizi sohbete yazın, hepsini sesli okuyacağım.”</em></li>
   <li><strong>Dersi cevaplanmamış bir soruyla bitiren herkes 24 saat içinde yazılı bir cevap alır.</strong></li>
   <li>Grup bunun aritmetik olarak mümkün olmayacağı kadar kalabalıksa, <strong>bunu Team Leader’ına söyle.</strong> Bu kişisel bir başarısızlık değil, iletilmesi gereken bir sinyaldir.</li></ul>`)}
   ${doavoid(
     ['Belirli başarıları adıyla söyle: <em>“Sofia, mantığın orada gerçekten çok net olmuş”</em>','En sessiz çocukların bile katılabilmesi için sohbeti ve tepkileri kullan','Çabayı kutla: <em>“üç farklı yol denedin — bu tam bir programcı gibi düşünmek”</em>','Bireysel çalışma sırasında grup içinde dolaş, her çocuğa uğra'],
     ['Tüm gruba eşit şekilde yöneltilen genel övgüler','Sadece ilk bitirene dikkat etmek','Hataları kötü bir şey gibi görmek ya da çocuklar düşünmeden cevabı vermek','Herkes için aynı tempo; bazılarını sıkmak, bazılarını telaşlandırmak']
   )}
  `},
  {t:'🧩 3.5 · Aynı tavsiye her çocukta işe yaramaz', html:`
   <div class="card"><p>Aynı alıştırmada takılan iki çocuk senden tamamen zıt şeylere ihtiyaç duyabilir. Birkaç örüntüyü tanımak ve her biri için farklı bir hamleni hazır tutmak, sıradan bir dersi her çocuğun gerçekten orada olmak istediği bir derse dönüştürür.</p></div>
   ${patternCards([
     {ic:'🙈', title:'Utangaç', desc:'Kamera açık ama nadiren konuşuyor; kısa cevaplar; asla gönüllü olmuyor; aniden söz verildiğinde içine kapanıyor', note:'Önce düşük baskılı katılım yolları — sohbet, tepkiler, bir başparmak. <strong>Doğrudan ve özel olarak</strong> davet et.'},
     {ic:'😣', title:'Çabuk hüsrana uğruyor', desc:'“Yapamıyorum” çabucak geliyor; ilk hatada bırakıyor; küçük hatalara gözle görülür şekilde üzülüyor', note:'Daha küçük adımlar. Hataları yüksek sesle normalleştir. Hüsran birikmeden <strong>önce</strong> durumunu sor.'},
     {ic:'🎯', title:'Mükemmeliyetçi', desc:'Aynı şeyi tekrar tekrar yapıyor; “bitmemiş” bir şeyi teslim etmekte isteksiz', note:'Kararı ve denemeyi öv. Kusurlu bir taslak teslim etmesi için açık bir izin ver.'},
     {ic:'⚡', title:'Çabuk sıkılıyor', desc:'Hızlı bitiriyor; bitirince başkalarının dikkatini dağıtıyor; “hepsi bu mu?”', note:'Her zaman hazır, gerçek bir ek zorluk. Ona yardımcı rolü vermeyi düşün. <strong>Asla boş oturmasına izin verme.</strong>'}
   ],2)}
  `},
  {t:'🎂 3.6 · Motivasyon kaynağı yaşla değişir', html:`
   <div class="two-col">
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧒</span>Küçük çocuklar (yaklaşık 6–9 yaş)</h4>
   <ul><li>Motivasyon uzun vadeli hedeflerden değil, bağ kurmaktan ve oyundan gelir.</li>
   <li>Dikkat süreleri kısadır. İçerikten çok senin enerjin onları tutar.</li>
   <li>Hayal gücüne dayalı bir çerçeve işe yarar — bir görev, bir karakter, bir hikâye.</li>
   <li>Özel ilgi alanları, dikkatlerine giden doğrudan bir yoldur.</li>
   <li>Hatalar duygusal olarak daha büyük hissettirir. Güvence hemen verilmelidir.</li>
   <li>Kendi başlarına denemeden önce daha fazla tekrara ve uygulamalı gösterime ihtiyaç duyarlar.</li></ul></div>
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧑</span>Büyük çocuklar (yaklaşık 10–14+ yaş)</h4>
   <ul><li>Motivasyon yetkinliğe ve anlamlılığa kayar — ve bir şeyin <em>neden</em> önemli olduğunu bilmeye.</li>
   <li>Kendilerine tepeden bakılmasına karşı hassastırlar. En önemlisi, yetenekli biri gibi görülmektir.</li>
   <li><strong>Akıl yürütmelerine ve kararlarına</strong> dair geri bildirim, sadece çabayı övmekten daha iyi karşılık bulur.</li>
   <li>Sosyal dinamikler daha önemlidir — akranları, bir soru sormayı göze alıp almayacaklarını etkiler.</li>
   <li>Daha uzun süre odaklanabilirler, ama tempo ağırlaşırsa ya da çocukça gelirse hızla koparlar.</li>
   <li>Özerklik önemlidir — bir görevi nasıl ele alacaklarına dair bir seçim sunmak karşılığını verir.</li></ul></div>
   </div>
   ${co('co-idea','💡',`<p>Araçlar her yaşta aynıdır — sıcak bir başlangıç, belirli geri bildirim, katılım için alan. Değişen şey <strong>neyin motive edici sayıldığıdır</strong>: küçük çocukların bunun eğlenceli olduğunu ve kendilerinin önemli olduğunu hissetmeleri gerekir; büyüklerin ise zamanlarına değdiğini ve bu işte gerçekten iyi olduklarını.</p>`)}
  `},
  {t:'🔧 3.7 · Teknoloji bozulduğunda', html:`
   <div class="card"><p>Bir şeyler bozulacak — donan bir ekran, bağlanmayan bir mikrofon. Bunun dersi mahvedip etmeyeceğini belirleyen arıza değil; yetişkinin nasıl tepki verdiğidir.</p></div>
   ${co('co-cute','🫂',`<p><strong>İlk hamle teknik değil, duygusaldır.</strong> Sakin tepki ver ve durumu yüksek sesle normalleştir. Sakin bir yetişkin çocuğa endişelenecek bir şey olmadığını söyler ve grup duygusal tonunu senden alır. Ancak ortam sakinleştikten sonra sorunu çözmeye geçmek anlamlıdır.</p>`)}
  `}
 ],
 ix:{
  title:'Çöp mü hazine mi — ders alışkanlıkları',
  instr:'Her alışkanlığı ait olduğu alana yerleştir: çocukların geri dönmek istediği bir ders kuran alışkanlıklar ya da sessizce bir çocuğu kaybetmene yol açan alışkanlıklar. Modül 4’ün kilidini açmak için %70.',
  items:[
   {type:'sort', prompt:'', card:'Her çocuğun adını gerçek bir söz hakkı aldığında işaretlemek ve dersin ortasında henüz hiç söz hakkı almayanları kontrol etmek', zones:[{label:'🌱 Dersi kurar', fb:'Doğru — “dikkatini sırayla dağıt” fikrini bir niyetten gerçek bir şeye dönüştüren tam olarak budur.'},{label:'🗑️ Bir çocuğu kaybettirir', fb:'Tam olarak değil — gerçek söz haklarını takip etmek bir hazine alışkanlığıdır, çöp değil.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Her dersin sonunda tüm grubu aynı “aferin hepinize!” ile övmek', zones:[{label:'🌱 Dersi kurar', fb:'Tam olarak değil — genel ve tekrarlanan övgü, sessizce motive etmeyi bırakan alışkanlıkların tam da kendisidir.'},{label:'🗑️ Bir çocuğu kaybettirir', fb:'Doğru — tekrarlanan genel övgü hızla etkisini kaybeder ve çalışmaya gerçekten bakılmadığı izlenimi verir.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Teknik bir şey bozulduğunda, sorunu çözmeden önce sakin tepki verip durumu yüksek sesle normalleştirmek', zones:[{label:'🌱 Dersi kurar', fb:'Doğru — teknik bir arızadan sonraki ilk hamle, çözümün kendisi değil, duygusal düzenlemedir.'},{label:'🗑️ Bir çocuğu kaybettirir', fb:'Tam olarak değil — sakin kalmak ve aksaklığı normalleştirmek tam olarak doğru ilk hamledir.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Nasıl gittiklerinden bağımsız olarak gruptaki her çocuğa tamamen aynı tempoyu ve tamamen aynı görevi vermek', zones:[{label:'🌱 Dersi kurar', fb:'Tam olarak değil — tüm grup için tek ve sabit bir tempo, bazılarını sıkan, bazılarını telaşlandıran şeydir.'},{label:'🗑️ Bir çocuğu kaybettirir', fb:'Doğru — herkes için aynı tempo bazılarını sıkar, bazılarını telaşlandırır; katılım kaybının en belirgin nedenlerinden biridir.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Ders süresi dolduğu için sohbetteki bir soruyu cevapsız bırakmak', zones:[{label:'🌱 Dersi kurar', fb:'Tam olarak değil — cevapsız bırakılan bir soru, çocuğun burada önemsenmediği sonucuna varmasının en net yollarından biridir.'},{label:'🗑️ Bir çocuğu kaybettirir', fb:'Doğru — dersi cevaplanmamış bir soruyla bitiren herkes 24 saat içinde yazılı bir cevap almalıdır.'}], correctZone:1, fb:''}
  ]
 }
},
{id:'m4', numLabel:'Modül 4', emoji:'📞', color:'var(--blue)',
 title:'Dersler Arasında Harekete Geçmek',
 desc:'Gerçekten işe yarayan birebir görüşme, devamsızlık takibi ve aileyi sürecin içinde tutmak.',
 obj:'Dersler arasında, uzaklaşan bir çocuğun iade talebine dönüşmesini önleyen şeyleri yapmak: birebir görüşme, devamsızlık takibi ve aileyi sürecin içinde tutmak.',
 sections:[
  {t:'🏠 4.1 · Gerçekten işe yarayan ödev rutini', html:`
   <div class="card"><p>Ödevler tesadüfen düzenli teslim edilmez. Her seferinde uygulanan dört küçük alışkanlık, sessizce sıfıra düşmelerini engeller.</p></div>
   ${stepFlow([
     {ic:'🗣️', label:'1. Açıkla — ne olduğunu ve neden önemli olduğunu, sesli olarak'},
     {ic:'⏰', label:'2. Hatırlat — son tarihten önce küçük bir hatırlatma'},
     {ic:'🔦', label:'3. Belirt — eksik olanı açıkça söyle'},
     {ic:'📝', label:'4. Değerlendir — sadece not değil, gerçek bir yorum'}
   ])}
   ${iconGrid([
     {ic:'🗣️', html:`<strong>Açıkla.</strong> Ödevi verirken ne olduğunu ve bir sonraki ders için neden önemli olduğunu söyle — sadece “1’den 5’e kadar alıştırmaları yapın” deme.`},
     {ic:'⏰', html:`<strong>Hatırlat.</strong> Son tarihten önce kısa bir hatırlatma, özellikle küçük çocuklar için — bir mesaj ya da önceki dersin sonunda kısa bir an.`},
     {ic:'🔦', html:`<strong>Belirt.</strong> Eksikse, bir sonraki derste bunu açıkça ve isim vererek söyle — “bazılarınız ödevini yapmamış” gibi genel bir ifadeyle değil.`},
     {ic:'📝', html:`<strong>Değerlendir.</strong> <strong>Ailenin okuyabileceği gerçek bir yorum</strong> bırak — neyin iyi yapıldığı, neyin yapılmadığı, somut bir sonraki adım. Sessiz bir onay işareti kimseye bir şey anlatmaz.`}
   ])}
   ${co('co-idea','💡',`<p>Bu rutin her hafta, her çocuk için uygulanır — sadece zaten endişelendiğin çocuklar için değil. Ayrıca bir sıfır gördüğünde onun bir anlam taşımasını sağlayan da budur: bunun kimse açıklamadığı, hatırlatmadığı ya da fark etmediği için olmadığını bilirsin.</p>`)}
  `},
  {t:'☎️ 4.2 · Gerçekten işe yarayan birebir görüşme', html:`
   <div class="card"><p>Modül 1’deki sinyallerden birini fark ettiğinde atacağın adım budur. İyi yapıldığında çoğu zaman sorunu kendi başına çözer.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Fark ettiğin belirli şeyi adıyla söyle.</strong> Belirsiz bir endişe belirsiz algılanır. <em>“Son iki projeye vakit bulamadın”</em> — <em>“her şey yolunda mı?”</em> değil.`},
     {ic:'🚧', html:`<strong>Tutumu değil, engeli sor.</strong> <em>“Seni ne engelledi?”</em> — <em>“neden çabalamıyorsun?”</em> değil. Biri cevap vermeye, diğeri savunmaya davet eder.`},
     {ic:'🤫', html:`<strong>Asla grubun önünde değil.</strong> Özel bir mesaj, sohbet ya da dersin son dakikasında baş başa.`}
   ])}
   ${co('co-idea','💡',`<p>Sonra, ne olursa olsun, <strong>iki ders sonra konuyu tekrar takip et</strong>. Takip edilmeyen bir birebir görüşme çocuğa, fark ettiğini ama aslında umursamadığını öğretir.</p>`)}
   <div class="card"><p>Motivasyonunu kaybetmiş bir öğrenciyi geri kazanmanın yollarından biri ödev değerlendirmesidir — ve bunu <strong>nasıl</strong> yaptığımız. Aşağıdaki iki videoda birbirinden çok farklı iki durumu izle: birinde eğitmen, öğrencinin ödevini yapmadığını görmezden geliyor; diğerinde ise eğitmen öğrenciyi dinamik bir şekilde yeniden derse katıyor ve grubun bir parçası olduğunu hissettiriyor.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Motive etmeyen eğitmen</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1zwbSiLXBj9mcqhKsFKNJriwSppbcEY5B/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Motive eden eğitmen</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1m2m_RRNTf5zMh2-1NmExvEMGZX0DPIaK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'📵 4.3 · Bir çocuk dersi kaçırdığında', html:`
   <div class="card"><p>Kaydı göndermek bir telafi planı değildir. <strong>Kursun başında kaçırılan iki ders kursun sonu olabilir</strong>, çünkü çocuk herkesin yapabildiği bir şeyi kendisinin yapamadığı bir sınıfa geri döner — hem de grubun önünde.</p></div>
   ${timeline([
     {ic:'📅', label:'Aynı gün', items:[
       '<strong>Aileye yaz</strong>, önce sıcaklıkla: <em>“bugün onu çok özledik — her şey yolunda mı?”</em> Her şeyden önce empati.',
       '<strong>Kaydı ve önemli olan tek şeyi gönder.</strong> “Bir saatin tamamını izleyin” değil — önemli olan tek bölümü göster.'
     ]},
     {ic:'⏳', label:'Bir sonraki dersten önce', items:[
       '<strong>Beş dakikalık birebir görüşme</strong> ya da gruba yeniden katılması için ihtiyaç duyduğu tek kavramın kısa, yazılı bir açıklaması — dersin tamamı değil, tek bir kavram.'
     ]},
     {ic:'🏫', label:'Bir sonraki derste', items:[
       '<strong>Ona erken, kolay ve görünür bir başarı yaşat</strong>, böylece geride kalmış değil, yapabildiğini hissederek döner.',
       '<strong>Yokluğunu fark ettiğini göster</strong> — kısaca ve sıcak bir şekilde. Özlendiğini hissetmesi tam da önemli olan şey.'
     ]},
     {ic:'🚩', label:'İki veya daha fazla ders kaçırdıysa', items:[
       '<strong>Team Leader’ına söyle ve Müşteri Hizmetleri’nin de görebilmesi için BO’ya yorum bırak.</strong> Ek bir telafi dersinin şirket içinde konuşulması için eşik budur. Konuyu sen açarsın — aileye teklif etmezsin, ama ihtimal dışı da bırakmazsın.'
     ]}
   ])}
  `},
  {t:'💌 4.4 · Aileyi yanında tutmak', html:`
   <img src="Images/Image_3.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Ayrılan ailelerin çoğu hiç iyi bir şey duymamıştır. Kayıt sırasında bizden haber almışlar, sonra bir sorun çıkana kadar bir daha almamışlardır.</p></div>
   ${checkbox([
     `<strong>İyi geçen bir dersten sonra belirli bir şey yaz.</strong> Bir kez. Uzun olması gerekmez: <em>“bugün döngüyü tek başına çözdü — bilmenizi istedim.”</em> Bu tek alışkanlık, ailenin sonrasında gelen her şeyi nasıl okuduğunu değiştirir.`,
     `<strong>Bir çocuk bir devamsızlık ya da zorluktan sonra geri döndüğünde, aileye başarısını anlat.</strong>`,
     `<strong>Bir konuyu şirket içinde ilettiysen, aileye ilettiğini söyle</strong> — ve yaklaşık olarak ne zaman haber alacaklarını. Bir sorundan sonraki sessizlik, sorunun kendisinden daha fazla zarar verir.`,
     `<strong>Öğrenmeyle ilgili sorulara açık ol.</strong> Çocuğunun nasıl gittiğini konuşmak isteyen bir veli seni ulaşılabilir bulmalı.`
   ])}
   ${co('co-danger','⛔',`<p><strong>Ve yine de: öğrenme hakkında konuş, işlemi devret.</strong> Gruplar, programlar, seviyeler, paketler, iadeler ya da ek dersler hakkında söz yok — bunları vermek de reddetmek de senin işin değil.</p>`)}
  `}
 ],
 ix:{
  title:'Mesajı seç',
  instr:'Her senaryo için doğru mesajı seç. Modül 5’in kilidini açmak için %70.',
  items:[
   {type:'choice', prompt:'<strong>Senaryo:</strong> bir çocuk son iki derste hiçbir şey teslim etmedi ama derslere normal şekilde katılmaya devam ediyor. Burada <strong>çocuğa</strong> gönderilecek doğru mesaj hangisi?', opts:[
     '“Her şey yolunda mı? Son zamanlarda biraz farklı görünüyorsun.”',
     '“Son iki projeyi teslim etmedin ve bu hiç senlik değil — seni ne engelledi?”',
     '“Neden çalışmalarını yapmıyorsun? Gruba ayak uydurman gerekiyor.”'
   ], correct:1, fb:'Fark ettiğin belirli şeyi adıyla söylemek ve tutum yerine engeli sormak, savunmaya ya da omuz silkmeye davet etmek yerine gerçekten bir konuşma başlatır.'},
   {type:'choice', prompt:'<strong>Aynı senaryo:</strong> çocuk iki derstir hiçbir şey teslim etmedi ve normal şekilde katılmaya devam ediyor. <strong>Aileye</strong> gönderilecek doğru mesaj hangisi?', opts:[
     '“[Ad]’ın son iki derste çalışmalarını teslim etmediğini fark ettim — onunla konuştum ve sizi de bilgilendirmek istedim.”',
     '“[Ad] çabalamıyor ve daha kolay bir gruba geçmesi gerekebilir — seçenekleri konuşabilir miyiz?”',
     '“Her şey yolunda, sadece merhaba demek istedim!”'
   ], correct:0, fb:'Bu mesaj aileye çocuğun ilerlemesi hakkında bilgi verir ve konuyla ilgilendiğini gösterir — grup değişikliği, seviye değişikliği ya da aileye senin sunman gerekmeyen herhangi bir seçenek önermeden.'},
   {type:'choice', prompt:'<strong>Yeni senaryo:</strong> bir çocuk dün önceden haber vermeden bir dersi kaçırdı. Aynı gün atılacak doğru adım nedir?', opts:[
     'Hiçbir mesaj eklemeden kaydın bağlantısını göndermek ve kendi kendine yetişmesini beklemek',
     'Önce sıcak bir dille aileye yazmak (“bugün onu çok özledik, her şey yolunda mı?”), sonra kaydı ve en önemli bölümü göndermek',
     'Olayı büyütmemek için herhangi bir şeyden bahsetmek için bir sonraki dersi beklemek'
   ], correct:1, fb:'Önce sıcaklık, sonra odaklı bir özet — ne sadece bırakılmış bir bağlantı ne de sessizlik — gerçek telafi planı budur; sadece “kaydı göndermek” değil.'}
  ]
 }
},
{id:'m5', numLabel:'Modül 5', emoji:'🧩', color:'var(--blue)',
 title:'Sekiz Durum',
 desc:'Aileleri gerçekten uzaklaştıran sekiz şeyin her biri için: neyi fark etmeli, ne yapmalı ve kime haber vermeli.',
 obj:'Aileleri gerçekten uzaklaştıran sekiz şeyin her biri için neyi fark etmen, derste ne yapman, ders dışında ne yapman ve kime haber vermen gerektiğini bilmek.',
 sections:[
  {t:'', html:`
   <h3 class="acc-big-title">🧩 İadenin ardındaki en yaygın 8 durum</h3>
  `},
  {t:'', html:`${accItem('😣 5.1 · Çalışmalar çok zor', `
   <img src="Images/Image_5.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Bir öğrenci zorlandığına dair birkaç işaret gösterebilir. Erkenden ve sık sık “yapamıyorum” diyebilir, bir hata yaptıktan sonra pes edebilir ya da ders içi çalışmaya başlayıp bitirmeyebilir. Ayrıca daha sessizleşebilir, ekranını paylaşmayı bırakabilir ya da aynı temel soruları tekrar tekrar sorabilir. Bazen bir öğrenci tek bir dersi kaçırdıktan sonra geride kalır ve bir daha tam olarak yetişemez. Bir diğer uyarı işareti de, ödevlerini yapmaya devam etmesine rağmen ders içi çalışmalarının zayıf kalmasıdır.`)}
   ${stepIconBlock('⚡','Uyarla — bir sonraki derste, izin gerekmeden', `<ul><li>Görevi küçük başarılara böl (10 dk)</li><li>Daha basit ve açık bir hedef ver, sesli olarak</li><li>Hataları normalleştir; hüsran birikmeden <strong>önce</strong> durumunu sor</li><li>2 dersten sonra hâlâ takılıyor mu? Öğretim fikirleri için <strong>Bölge Mentorunla</strong> bir görüşme ayarla</li></ul>`)}
   ${stepIconBlock('🗣️','Koordine ol — TL + BO’daki Eğitmen Değerlendirmesi, bu hafta', `<ul><li>Gördüklerini ve çocuğun nasıl hissettiğini bildir</li><li>Fark gerçekse bir seviye belirleme dersi talep et</li><li>Seviye konusunu asla kendin aileyle açma</li></ul>`)}
   ${stepIconBlock('👪','Aile', `<p>Sadece sana ait olanı: <em>“derslerde ek destek veriyorum, konuyu ekibime ilettim.”</em> Seviyeler hakkında hiçbir şey. 2 ders içinde takip et.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Bu nedenle iade talebini zaten aldın mı?</strong> Doğrudan Modül 7’ye git — öğrenciyi tutma girişimi bu çocukla bir sonraki dersinde başlıyor.</p>`)}
  `)}
  ${accItem('😴 5.2 · Çalışmalar çok kolay', `
   <img src="Images/Image_7.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Bir öğrenci çalışmasını beklenen sürenin yarısında bitirip “Hepsi bu mu?” diye sorabilir. Bitirdikten sonra dikkati dağılabilir ya da başkalarının dikkatini dağıtabilir, veya konuyu zaten bildiğini söyleyebilir. Bir diğer önemli işaret de, yüksek yetenek gösteren bir öğrencinin sürekli olarak ödevlerini yapmamasıdır. Sayılarda sıkılmak, ilgisizlikle tamamen aynı görünebilir; bu yüzden görünenin ötesine bakmak önemlidir.`)}
   ${stepIconBlock('⚡','Uyarla — hemen', `<ul><li>Gerçek bir ek zorluk: aynı beceri, daha zor bir görev</li><li>Grupta küçük bir yardımcı rolü</li><li>Seçim şansı ver; asla boş oturmasına izin verme</li></ul>`)}
   ${stepIconBlock('🗣️','Koordine ol — TL + BO’daki Eğitmen Değerlendirmesi, bu hafta', `<p>Aynen şöyle söyle: <em>“seviye yükseltme gerekiyor, motivasyon sorunu değil.”</em> Bir seviye belirleme dersi talep et.</p>`)}
   ${stepIconBlock('👪','Aile', `<p>Sadece: <em>“çok hızlı kavrıyor, ek görevler veriyorum, konuyu ekibime ilettim.”</em> 2 ders içinde takip et.</p>${co('co-ok','✅',`<p>Bu durum çoğu zaman çözülür — ama yalnızca biri bir şey söylediyse.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Bu nedenle iade talebini zaten aldın mı?</strong> Doğrudan Modül 7’ye git — öğrenciyi tutma girişimi bu çocukla bir sonraki dersinde başlıyor.</p>`)}
  `)}
  ${accItem('🧩 5.3 · Özel eğitim ihtiyacı', `
   <img src="Images/Image_8.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Çocuklar otizm, DEHB, disleksi, duyusal ihtiyaçlar, kaygı ile gelebilir — ve bazen üstün yetenekle; bu da bir özel eğitim ihtiyacıdır ve sıradan sıkılmadan çok farklı görünür. Profilde yazıyor olabilir, aile bir kez bahsetmiş olabilir ya da hiç yüksek sesle söylenmemiş olabilir. Aileler genellikle önce farklı bir açıklama yapar — <em>“ilgisini kaybetti”</em>, <em>“bu ona göre değil”</em> — ve asıl neden ancak biri doğru şekilde sorduğunda ortaya çıkar.</p></div>
   ${noticeLine(`Profilde bir not (Modül 2.1) · duyusal aşırı yüklenme · erken azalan odaklanma · küçük hatalara büyük tepkiler · değişiklik karşısında huzursuzluk · yavaş okuma/yazma · dengesiz motivasyonla birlikte yüksek yetenek.`)}
   ${stepIconBlock('⚡','Uyarla — işin büyük kısmı burada ve tamamen sana ait', `<ul><li>Daha kısa bölümler, öngörülebilir yapı, <strong>her geçişten önce haber ver</strong></li><li>Yazılı + sözlü talimatlar; kamera isteğe bağlı</li><li>Görevin kendisini uyarla; her şeyden önce rutini koru</li><li><strong>Bölge Mentorun</strong>, bu çocuğa özel bir plan oluşturmana yardımcı olabilir</li></ul>${co('co-danger','🚨',`<p>Önce gerçekten çaba göster. Ama fark çok büyük kalmaya devam ederse <strong>hemen üst kademeye taşı</strong> — bu bir başarısızlık değil.</p>`)}`)}
   ${stepIconBlock('🗣️','Koordine ol — TL hemen + BO’daki Eğitmen Değerlendirmesi', `<p>Birebir dersler ya da özel eğitim deneyimi olan bir eğitmen faydalı olacaksa, <strong>bunu öner — ama teklif etme.</strong></p>`)}
   ${stepIconBlock('👪','Aile — dikkatle', `<p>Önce profili kontrol et (2.1); kayıtlı bir şey yoksa nazikçe sor. Öğrendiklerini BO Yorumlarına yaz.</p>${co('co-danger','⛔',`<p>Asla: <em>“yetişemiyor”</em> ya da teşhis gibi algılanabilecek herhangi bir şey söyleme. Her 2 derste bir ve her değişiklikten sonra mutlaka takip et.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Bu nedenle iade talebini zaten aldın mı?</strong> Doğrudan Modül 7’ye git — öğrenciyi tutma girişimi bu çocukla bir sonraki dersinde başlıyor.</p>`)}
  `)}
  ${accItem('📐 5.4 · Çocuk, yaş ya da format uygun değil', `
   <img src="Images/Image_9.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Bir öğrenci, materyalin gerektirdiği okuma becerilerine henüz sahip olmadığı ya da dersin tamamı boyunca odaklanamadığı için zorlanıyor olabilir. Bazı durumlarda kurs, yaşının ya da mevcut seviyesinin çok üzerinde beceriler gerektirebilir. Diğer engeller arasında ailenin çevrimiçi öğrenme formatına uyum sağlamakta zorlanması ya da daha önce fark edilmemiş bir dil engeli olabilir. Bu işaretler, sorunun katılım değil, öğrencinin ihtiyaçlarıyla öğrenme ortamı arasındaki bir uyumsuzluk olduğunu gösterebilir.`)}
   ${stepIconBlock('⚡','Uyarla', `<p>Her şeyi dene — kısalt, basitleştir, daha fazla göster, daha fazla birebir ilgi ver. Sınırı bil: henüz okuma bilmeyen bir çocuğa, büyük ölçüde okumaya dayalı bir kursla öğretemezsin.</p>`)}
   ${stepIconBlock('🗣️','Koordine ol — TL + BO’daki Eğitmen Değerlendirmesi', `<p>Aynen şöyle söyle: <em>“bu bir yerleştirme konusu, motivasyon değil.”</em> Konuyu ilet — bu senin vereceğin bir karar değil.</p>`)}
   ${stepIconBlock('👪','Aile — sadece TL istediğinde', `<p>Birkaç seçenek olabilir, ama <strong>onları sunan sen değilsin.</strong> TL’nin sana verdiği mesajı aynen ilet ya da konunun dışında kal.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Bu nedenle iade talebini zaten aldın mı?</strong> Doğrudan Modül 7’ye git — öğrenciyi tutma girişimi bu çocukla bir sonraki dersinde başlıyor.</p>`)}
  `)}
  ${accItem('👥 5.5 · Grup çok kalabalık ve çocuk hiç söz hakkı alamıyor', `
   <img src="Images/Image_10.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${co('co-idea','🎯',`<p><strong>Bu, listedeki doğrudan eğitmen davranışıyla ilgili tek durumdur — ve bu yüzden en hızlı düzeltebileceğin durumdur.</strong></p>`)}
   <div class="card"><p>Elini kaldıran, bekleyen, söz verilmeyen ve cevapsız sorularla kalan bir çocuk, bu grupta önemsenmediği sonucuna varır. Bunun için iki ders bile yetebilir.</p></div>
   ${noticeLine(`El kaldırmayı bırakan çocuklara, sohbette cevapsız kalan sorulara ya da her seferinde aynı iki üç öğrencinin cevap vermesine dikkat et. Dersin tamamını seninle tek bir etkileşim bile yaşamadan geçiren öğrencilere de dikkat et.`)}
   ${stepIconBlock('⚡','Uyarla — bu bir beceri ve öğrenilebilir', `<ul><li>Söz hakkı takibi (3.4): görünür liste, her söz hakkı için bir işaret, ders ortasında kontrol</li><li>Daha kısa bölümler, bilinçli sohbet kullanımı, ikili/küçük görevler</li><li>Cevapsız kalan her soruyu 24 saat içinde yazılı olarak yanıtla</li><li><strong>Bölge Mentorunla</strong> yapılacak bir görüşme tam olarak bunun için — işler yolunda gitmiyorsa iste</li></ul>`)}
   ${stepIconBlock('🗣️','Koordine ol — TL', `<p>Ancak gerçekten denedikten sonra: grup büyüklüğü, format, kimin dışarıda kaldığı, neleri değiştirdiğin. Daha küçük bir grup mümkün, ama sadece TL bilirse.</p>`)}
   ${stepIconBlock('👪','Aile — sadece TL ile kararlaştırıldıysa', `<p>Grup değişikliğini kendin gündeme getirme. Fark ettiğini ve grubu yönetme şeklini değiştirdiğini sıcak bir dille söyleyebilirsin — o kısım sana ait.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Bu nedenle iade talebini zaten aldın mı?</strong> Doğrudan Modül 7’ye git — öğrenciyi tutma girişimi bu çocukla bir sonraki dersinde başlıyor.</p>`)}
  `)}
  ${accItem('🔀 5.6 · Eğitmen, grup ya da program değişikliği kötü karşılandı', `
   <img src="Images/Image_11.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Süreklilik göründüğünden çok daha önemlidir — ve en çok da zaten en kırılgan olan çocuklar için.</p></div>
   ${co('co-ok','✅',`<p><strong>Yüksek sesle söylemeye değer bir iyi haber: bu durum genellikle çözülebilir.</strong> Çok sayıda eğitmenimiz ve grubumuz var — neredeyse her zaman başka bir düzenleme bulunabilir, ama yalnızca sorun hızla dile getirilirse, aile hâlâ bir çıkış yolu değil bir çözüm ararken. Sonucu belirleyen üç şey: şeffaflık, hız ve herkesin bilgilendirilmesi — aile, TL’n, Müşteri Hizmetleri ve BO’da bir yorum.</p>`)}
   <div class="card"><h4 style="margin-bottom:10px">👋 Ayrılıyorsan</h4>${iconGrid([
     {ic:'📝', html:`<strong>BO Yorumlarında devir notu:</strong> özel ihtiyaçlar, çocuğu neyin motive ettiği, nerede takıldığı, ailenin durumu.`},
     {ic:'🗣️', html:`<strong>TL’ne bunu nasıl</strong> ve kime ileteceğini sor — önce kararlaştırın, sonra tam olarak bunu yap.`}
   ])}</div>
   <div class="card"><h4 style="margin-bottom:10px">🙋 Yeni geliyorsan</h4>${iconGrid([
     {ic:'📖', html:`Önce <strong>devir notunu oku</strong>.`},
     {ic:'💬', html:`<strong>Değişikliği adıyla söyle</strong>, kısaca ve olumlu bir şekilde.`},
     {ic:'🏷️', html:`İlk derste <strong>herkesin adını öğren</strong>.`},
     {ic:'⏸️', html:`2 ders boyunca <strong>başka hiçbir şeyi değiştirme</strong>.`}
   ])}</div>
   <div class="card"><p>Rutin, planlı bir devirde çoğu bölgede değişikliği doğrudan grup sohbetinde duyuran ve kendini tanıtan kişi — Müşteri Hizmetleri değil — eğitmendir. Müşteri Hizmetleri genellikle yalnızca beklenmedik değişikliklerde ya da hassas durumlarda devreye girer.</p></div>
   ${stepIconBlock('🗣️','Koordine ol — TL', `<p>Herhangi bir çocuğun özel eğitim ihtiyacı varsa ya da yeni bir program bir aileye uymuyorsa hemen.</p>`)}
   ${stepIconBlock('👪','Aile — yeni eğitmen olarak, sıcak bir dille', `<p style="font-style:italic">“Merhaba! Ben [ad], grubunuzu bundan sonra ben yürüteceğim — [çocuk] hakkındaki notları okudum, böylece tam kaldığımız yerden devam edeceğiz.”</p><p>Sadece heves — değişikliğin nedeni değil.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Bu nedenle iade talebini zaten aldın mı?</strong> Doğrudan Modül 7’ye git — öğrenciyi tutma girişimi bu çocukla bir sonraki dersinde başlıyor.</p>`)}
  `)}
  ${accItem('⚠️ 5.7 · Bizim tarafımızda bir şey aksadı', `
   <img src="Images/Image_12.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Platform arızası nedeniyle kaybedilen bir ders, bir iptal, saatin büyük kısmını alan teknik bir sorun.</p></div>
   ${co('co-danger','🚨',`<p><strong>Bir eğitmenin burada söyleyebileceği en kötü şey “bu mümkün değil” olur.</strong> Platformumuz arızalandığı için bir çocuk ders kaçırır, aile telafi dersi ister, eğitmen bunun yapılamayacağını söyler — aile güvenini kaybeder ve iade ister. <strong>Bu hiçbir zaman eğitmenin vereceği bir karar değildi.</strong> Kaçırılan ya da aksayan iki ders, çoğu bölgenin ek bir telafi dersi konuşmasını başlatmak için kullandığı eşiktir; ancak son kararı her zaman TL’n verir. Bu konuşmayı başlatmak senin işin. Sonuçlandırmak değil.</p>`)}
   ${stepIconBlock('⚡','Uyarla', `<p>Sakin kal, durumu normalleştir (3.7), grubun havasını koru, kaydı gönder, telafi planını uygula (4.3).</p>`)}
   ${stepIconBlock('🗣️','Koordine ol — TL ile aynı gün', `<ul><li>Ek bir telafi dersini konuşun</li><li>Aile memnun değilse ya da ticari bir konu varsa Müşteri Hizmetleri’ni dahil et</li><li>BO’da bir Eğitmen Değerlendirmesi gönder</li></ul>`)}
   ${stepIconBlock('👪','Aile — mesajı önce TL ile kararlaştır, aynı gün', `<p><em>“Konuyu ekibime ilettim, size dönüş yapacağız”</em> — sonra birinin bunu gerçekten yaptığından emin ol, bugün.</p>${co('co-danger','⛔',`<p>Ek dersi asla vaat etme, asla ihtimal dışı bırakma. Takip: bir sonraki derste ona ilk gerçek söz hakkını ver.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Bu nedenle iade talebini zaten aldın mı?</strong> Doğrudan Modül 7’ye git — öğrenciyi tutma girişimi bu çocukla bir sonraki dersinde başlıyor.</p>`)}
  `)}
  ${accItem('📢 5.8 · “Bize söylenen bu değildi”', `
   <img src="Images/Image_13.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Bir veli sana seviyenin, paketin, programın ya da kursun kendisinin satın aldığını düşündüğü şey olmadığını söylüyor. Bu, bir eğitmenin yaşadığı en rahatsız edici konuşmadır ve kötüleştirilmesi en kolay olanıdır.</p>
   <p><em>Kurs başlamadan önce oluşturulan beklentiler, tüm iade taleplerinin büyük bir kısmının arkasındadır — diğer tüm tekil nedenlerden daha fazla.</em></p></div>
   ${stepIconBlock('⚡','Uyarla', `<p>Çocuk için hiçbir şey değişmez — iyi ders vermeye devam et.</p>`)}
   ${stepIconBlock('🗣️','Koordine ol — TL + Müşteri Hizmetleri, herhangi bir şeye cevap vermeden önce', `<ul><li>Konuyu aynı gün TL’ne ilet</li><li>Müşteri Hizmetleri’ni dahil et — sonraki adımlar onların sorumluluğunda</li><li>Ailenin sözlerini kelimesi kelimesine BO’daki bir Eğitmen Değerlendirmesine yaz</li></ul><p>Mesajı aldığını bildirmek sorun değil: <em>“teşekkür ederim, bunu ekibime ileteceğim ve size dönüş yapacağım.”</em> Bu bir cevap değil. <span style="font-size:12.5px">(İstedikleri küçük bir şeyse — bir ek ders — bu çoğu zaman sen ve TL’nin, Müşteri Hizmetleri olmadan doğrudan çözebileceğiniz bir şeydir. Hangisinin geçerli olduğunu TL’ne sor.)</span></p>`)}
   ${stepIconBlock('👪','Aile — sadece TL onayıyla', `<ol><li>Söylenenleri kabul et, kimseyi suçlama</li><li>Çocuğu önemsediğini göster</li><li>Konuyu düzgün bir şekilde Müşteri Hizmetleri’ne devret</li></ol>${co('co-danger','⛔',`<p>Asla: bir iş arkadaşını suçlama, tartışma ya da kendi başına çözüm önerme.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Bu nedenle iade talebini zaten aldın mı?</strong> Doğrudan Modül 7’ye git — öğrenciyi tutma girişimi bu çocukla bir sonraki dersinde başlıyor.</p>`)}
  `)}
  `}
 ],
 ix:{
  title:'Sekiz durum, sekiz ilk adım',
  instr:'Her anonimleştirilmiş durum için sekiz kategoriden hangisine ait olduğunu seç, ardından doğru ilk adımı seç. Modül 6’nın kilidini açmak için %70.',
  items:[
   {type:'choice', prompt:'“Yapamadığını söylüyor, ilk hatada ağlamaya başlıyor ve ders içi çalışmaları bitirmeyi bıraktı.” — bu hangi durum?', opts:['Çalışmalar çok zor','Çalışmalar çok kolay','Özel eğitim ihtiyacı'], correct:0, fb:'Erken ve tekrarlanan başarısızlık ile ilk hatada bırakmak, çok zor çalışmaların klasik tablosudur.'},
   {type:'choice', prompt:'Bu durum için doğru ilk adım —', opts:['Aileye seviye değişikliği öneren bir mesaj göndermek','Görevi daha küçük adımlara bölmek ve azaltılmış, açık bir hedef vermek — bu dersten itibaren','Planlandığı gibi devam etmek; seviye senin ayarlayabileceğin bir şey değil'], correct:1, fb:'Görevi hemen kendin uyarla — seviye konuşması gerekiyorsa Team Leader’ına ve Müşteri Hizmetleri’ne gider, asla doğrudan aileye değil.'},
   {type:'choice', prompt:'“Sürenin üçte birinde bitiriyor, sonra yanındaki çocuğun dikkatini dağıtmaya başlıyor. Üç haftadır ödev yok.” — bu hangi durum?', opts:['Çalışmalar çok kolay','Özel eğitim ihtiyacı','Aile koşulları'], correct:0, fb:'Hızlı bitirmek, dersi bölmek ve hiç ödev yapmamak, çok kolay bir seviyeden kaynaklanan sıkılmadır — ilgisizlik gibi görünür ama öyle değildir.'},
   {type:'choice', prompt:'Bu durum için doğru ilk adım —', opts:['Aynı beceriye bağlı gerçek bir ek zorluğu hemen vermek ve olası bir seviye yükseltmesi olarak bildirmek','Bildirmek ve herhangi bir şeyi değiştirmeden önce seviye incelemesini beklemek','Sadece motive olmadığını varsayıp onu daha fazla cesaretlendirmek'], correct:0, fb:'Burada iki kısım da gerekli: haftalarca sıkılmasın diye hemen uyarla ve seviyenin kendisi incelensin diye hemen bildir.'},
   {type:'choice', prompt:'“Aile deneme dersinde onun DEHB’si olduğunu söylemiş, ama bu hiçbir yere yazılmamış ve hiçbir eğitmen buna göre uyum sağlamamış.” — bu hangi durum?', opts:['Grup çok kalabalık','Özel eğitim ihtiyacı','Bizim tarafımızda bir şey aksadı'], correct:1, fb:'Bu, en sık gözden kaçan özel eğitim ihtiyacı durumunun ta kendisi — bilgi vardı, sadece derse hiç ulaşmadı.'},
   {type:'choice', prompt:'Bu durum için doğru ilk adım —', opts:['Herhangi bir şeyi değiştirmeden önce resmî bir teşhis beklemek','Dersi hemen uyarlamak — daha kısa bölümler, öngörülebilir yapı, önceden haber verilen geçişler — ve Team Leader’ınla ve Müşteri Hizmetleri’yle koordine olmak, ayrıca BO’ya yorum bırakmak','Aileye çocuklarının bu formata uygun olmayabileceğini söylemek'], correct:1, fb:'Yapabildiğin her şeyi hemen kendin uyarlarsın ve bir sonraki eğitmenin ve Müşteri Hizmetleri’nin bilmesi için bunun kayda geçtiğinden de emin olursun.'},
   {type:'choice', prompt:'“On kişilik hareketli grubumdaki iki çocuk üç derstir benimle gerçek bir etkileşim yaşamadı ve biri el kaldırmayı bıraktı.” — bu hangi durum?', opts:['Çocuk, yaş ya da format uygun değil','Grup çok kalabalık ve çocuk hiç söz hakkı alamıyor','Bize söylenen bu değildi'], correct:1, fb:'Bu açıkça bir grup yönetimi meselesi — ve listedeki doğrudan eğitmen davranışıyla ilgili tek durum.'},
   {type:'choice', prompt:'Bu durum için doğru ilk adım —', opts:['Grup büyüklüğünü Team Leader’ına bildirmek ve herhangi bir şeyi değiştirmeden önce bir karar beklemek','Bu gruba özel olarak dersi yürütme şeklini değiştirmek — söz haklarını takip etmek, sohbeti bilinçli kullanmak, bölümleri yeniden düzenlemek — ve yalnızca bu da yetmezse üst kademeye taşımak','Açıkça daha katılımcı oldukları için katılan çocuklara odaklanmak'], correct:1, fb:'Bu hemen uygulayabileceğin bir beceri. Gerçekten denedikten sonra fark hâlâ çok büyük olduğu için üst kademeye taşırsın — denemenin yerine değil.'},
   {type:'choice', prompt:'“Bir veli, kendilerine sekiz kişilik bir grup değil, birebir dersler olacağının söylendiğini belirtiyor.” — bu hangi durum?', opts:['Eğitmen, grup ya da program değişikliği kötü karşılandı','Bize söylenen bu değildi','Çalışmalar çok zor'], correct:1, fb:'Vaat edilenle sunulan arasındaki uyumsuzluk tam olarak “bize söylenen bu değildi” durumudur — sekiz durum arasında en hassas olanı.'},
   {type:'choice', prompt:'Bu durum için doğru ilk adım —', opts:['Grup derslerinin nasıl işlediğini ve neden pedagojik olarak değerli olduğunu açıklamak','Mesajı aldığını bildirmek, ardından düzgün bir cevap vermeden önce konuyu aynı gün Team Leader’ına ve Müşteri Hizmetleri’ne iletmek — ve ailenin sözlerini kelimesi kelimesine BO’ya kaydetmek','Karışıklık için özür dilemek ve birebir derslere geçiş olasılığını araştırmayı teklif etmek'], correct:1, fb:'Kendi başına cevap vermek — makul bir şekilde bile olsa — eğitmenlerin farkında olmadan bir şikâyeti doğrulamasının ya da sağlayamayacağımız bir şeyi ima etmesinin yoludur. Her zaman önce koordine ol.'}
  ]
 }
},
{id:'m6', numLabel:'Modül 6', emoji:'🧭', color:'var(--blue)',
 title:'Kime Söylemeli ve Ne Kadar Hızlı',
 desc:'Yukarıdaki her şeyi gerçekten hayata geçen bir şeye dönüştür — yönlendirme haritası ve beş kural.',
 obj:'Yukarıdaki her şeyi gerçekten hayata geçen bir şeye dönüştürmek — kime ve ne kadar hızlı haber vereceğini düşünmeye gerek kalmadan bilerek.',
 sections:[
  {t:'⏱️ 6.1 · Her şey hıza bağlı', html:`
   <div class="card"><p>Modül 5’teki her durumun yapısı aynıdır: erken fark edilirse düzeltilebilir, geç kalınırsa pahalıya patlar. Üçüncü derste fark edilen yanlış bir seviye çözülür. Aynı yanlış seviye on beşinci derste çoktan <em>“artık ilgilenmiyor”</em> hâline gelmiştir — ve o noktada aile bize inanmayı bırakmıştır.</p></div>
   ${co('co-idea','💡',`<p><strong>Sen ders ile çocuğun durumunu değiştirebilecek kişiler arasındaki köprüsün. Bir köprü ancak üzerinden bir şeyler hızla geçerse bir değer taşır.</strong></p>`)}
  `},
  {t:'🗺️ 6.2 · Yönlendirme haritası', html:`
   <div class="tbl-full"><div class="card"><table>
   <tr><th>🔎 Fark ettiğin şey</th><th>① Derste</th><th>② Dersler arasında</th><th>③ Kime söylersin + BO</th><th>④ Aile</th><th>⏱️ Ne kadar hızlı</th></tr>
   <tr><td><strong>Devam yarının altında</strong> ya da çalışmalar grubun çok altında</td><td>Gerçek bir söz hakkı ve ulaşılabilir bir başarı ver</td><td>Çocukla özel birebir görüşme</td><td>İki ders daha değişiklik olmadan geçerse Team Leader</td><td>Kısa, sıcak bir mesaj — göndermek senin işin</td><td>Aynı hafta</td></tr>
   <tr><td><strong>İki veya daha fazla ders, hiçbir şey teslim edilmemiş</strong></td><td>Çalışmayı ekran paylaşımıyla canlı kontrol et; hedefi küçült</td><td>Birebir görüşme; bir sonraki ödevi iyice açıkla ve takip et</td><td>Devam ederse Team Leader</td><td>İlerleme hakkında mesaj — göndermek senin işin</td><td>Aynı hafta</td></tr>
   <tr><td><strong>Çalışmalar çok zor</strong></td><td>Daha küçük adımlar, azaltılmış hedef, görevi uyarla, hataları normalleştir</td><td>Eksik kavramın yazılı açıklaması</td><td><strong>Team Leader + BO’daki Eğitmen Değerlendirmesi</strong> — gerekirse bir seviye belirleme dersi talep et</td><td>Sadece TL’nin onayladığı şey. Seviye ya da seçenekler asla</td><td>Aynı hafta</td></tr>
   <tr><td><strong>Çalışmalar çok kolay</strong></td><td>Gerçek bir ek zorluk, yukarı doğru uyarlanmış görev, yardımcı rolü, asla boş bırakma</td><td>Bir üst seviyeden bir görevi hazır tut</td><td><strong>Team Leader + BO’daki Eğitmen Değerlendirmesi</strong> — gerekirse bir seviye belirleme dersi talep et</td><td>Sadece TL’nin onayladığı şey. Seviye ya da seçenekler asla</td><td>Aynı hafta</td></tr>
   <tr><td><strong>Özel eğitim ihtiyacı</strong>, kayıtlı ya da şüpheli</td><td>Daha kısa bölümler, öngörülebilir yapı, geçişlerden önce haber verme, görevleri uyarlama</td><td>Neyin işe yarayıp neyin yaramadığını not et</td><td><strong>Team Leader + BO’daki Eğitmen Değerlendirmesi.</strong> Fark büyükse birebir dersleri sor</td><td>Neyin yardımcı olduğunu sormak: senin işin, dikkatle. Format/grup/birebir: asla senin tarafından önerilmez</td><td>Bir sonraki dersten önce · fark çok büyükse hemen</td></tr>
   <tr><td><strong>Yaş ya da format uygun değil</strong></td><td>Basitleştir, daha fazla göster, derste daha fazla ilgi göster</td><td>Sınır konusunda dürüst ol</td><td><strong>Team Leader + BO’daki Eğitmen Değerlendirmesi</strong> — “yerleştirme, motivasyon değil” de</td><td>Sadece TL’n isterse</td><td>Aynı hafta</td></tr>
   <tr><td><strong>Çocuk hiç söz hakkı alamıyor</strong></td><td>Söz hakkı takibi; yaklaşımını ayarla; ihtiyacı olan çocuk için bir görevi uyarla</td><td>Cevapsız kalan her şeye 24 saat içinde yazılı cevap</td><td>Ders içinde çözülemiyorsa Team Leader</td><td>Kendi öğretimindeki değişiklikler: senin işin. Grup değişikliği: asla senden gelmez</td><td>Aynı hafta</td></tr>
   <tr><td><strong>Eğitmen/grup/program değişikliği</strong></td><td>Adıyla söyle, normalleştir, iki ders boyunca başka hiçbir şeyi değiştirme</td><td>Devir notu BO Yorumlarına yazılır</td><td><strong>Team Leader</strong> — herhangi bir çocuğun özel ihtiyacı varsa ya da program uymuyorsa hemen. Müşteri Hizmetleri sadece beklenmedik/hassas durumlarda</td><td>Yeni eğitmen olarak: sıcak, hevesli. Neden olduğu değil, programlar değil</td><td>Devir dersinden önce</td></tr>
   <tr><td><strong>İki ders aksadı</strong> — platform arızası, iptal, devamsızlık</td><td>Sakin kal, havayı koru</td><td>Kayıt + önemli olan bölüm; telafi planı</td><td><strong>Aynı gün Team Leader — ek ders konuşmasını başlatır (iki ders, çoğu bölgenin kullandığı eşiktir).</strong> Aile memnun değilse Müşteri Hizmetleri · BO’daki Eğitmen Değerlendirmesi</td><td>Aynı gün — ifadeyi önce TL’nle kararlaştır</td><td>Aynı gün</td></tr>
   <tr><td><strong>“Bize söylenen bu değildi”</strong></td><td>Çocuk için hiçbir şey değişmez — iyi ders vermeye devam et</td><td>—</td><td><strong>Cevap vermeden önce Team Leader + Müşteri Hizmetleri · ailenin sözleri kelimesi kelimesine bir Eğitmen Değerlendirmesinde</strong></td><td>Sadece mesajı aldığını bildir. Gerçek cevap TL onayından sonra — senden seçenek yok</td><td>Aynı gün</td></tr>
   <tr><td><strong>Aile koşulları, sağlık, para</strong></td><td>Nazik ol, bir şey bekleme</td><td>—</td><td>Team Leader’ın aracılığıyla Müşteri Hizmetleri · üstüne gitme</td><td>Tek bir sıcak cümle, ek soru yok</td><td>Öğrendiğin anda</td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p>Acil durumlar için çoğu bölgede BO’ya daha hızlı bir alternatif olarak Team Leader ile Müşteri Hizmetleri arasında doğrudan bir Slack kanalı da bulunur — adı her bölgede farklıdır, bu yüzden hangisinin seninki olduğunu Team Leader’ına sor.</p>`)}
   ${co('co-idea','🎓',`<p><strong>Bu haritanın göstermediği bir sütun: Bölge Mentorun.</strong> Yukarıdaki “kime söylersin” sütunundaki her şey <em>koşullarla</em> — seviye, grup, program, paket — ilgilidir ve her zaman Team Leader’ına ve Müşteri Hizmetleri’ne gider. Soru bunun yerine <em>bunu nasıl daha iyi öğretirim</em> olduğunda, soracağın kişi Bölge Mentorundur — yukarıdaki yolun yerine değil, onunla birlikte.</p>`)}
  `},
  {t:'⚖️ 6.3 · Beş kural', html:`
   <div class="rule-row">
     <div class="rule-card"><div class="rule-num">1</div><div class="rule-ic">⚡</div><div class="rule-txt"><strong>Önce uyarla.</strong> Yarın daha iyi öğretmek için izne ihtiyacın yok — birçok durum tam orada çözülür. 2 dersten sonra hâlâ takıldın mı? Bölge Mentorunla bir görüşme ayarla.</div></div>
     <div class="rule-card"><div class="rule-num">2</div><div class="rule-ic">📣</div><div class="rule-txt"><strong>Birine haber vermek isteğe bağlı değildir.</strong> Team Leader’ı bilgilendirirsin, Müşteri Hizmetleri’ni dahil edersin, Eğitmen Değerlendirmesini gönderirsin — yoksa sorun sessizce kaybolur.</div></div>
     <div class="rule-card"><div class="rule-num">3</div><div class="rule-ic">🚦</div><div class="rule-txt"><strong>Aileden önce Team Leader.</strong> Koordine olun ve stratejide anlaşın, <em>sonra</em> aileyle konuş — tam olarak kararlaştırılanı, asla kendi seçeneklerini değil.</div></div>
     <div class="rule-card"><div class="rule-num">4</div><div class="rule-ic">🤐</div><div class="rule-txt"><strong>Asla söz verme, asla reddetme — her zaman önemsediğini göster.</strong> Sen önerirsin; Müşteri Hizmetleri teklif eder. Tek bir istisna: Team Leader’ın ek bir dersi onayladığında, bunu aileye çoğu zaman kendin söyleyebilirsin.</div></div>
     <div class="rule-card"><div class="rule-num">5</div><div class="rule-ic">🔁</div><div class="rule-txt"><strong>Bir kez üst kademeye taşı, sonra takip et.</strong> Bir şeyi dile getirip sonra unutmak, hiç dile getirmemekle aynıdır.</div></div>
   </div>
   ${co('co-idea','💡',`<p>Bu beş kuralı bir kez okumakla yetinmeyip alışkanlık hâline getirmeye değer — bunlar, harekete geçilen bir sinyalle sessizce kaybolan bir sinyal arasındaki farktır. Bölgende bunun nasıl işlediğine dair özel konular için Team Leader’ına danış.</p>`)}
  `}
 ],
 ix:{
  title:'Yönlendirme — beş sinyal',
  instr:'Her sinyal için önce nereye gideceğini seç. Modül 7’nin kilidini açmak için %70.',
  items:[
   {type:'choice', prompt:'Bir çocuğun ders içi çalışmaları iyi, ama ödevleri art arda iki derstir sıfırda ve henüz başka bir neden belirlenmedi.', opts:['Kendim harekete geçerim — bu hafta birebir görüşme, henüz bildirmeye gerek yok','Hemen Team Leader + Müşteri Hizmetleri','Team Leader’ı atlayarak doğrudan Müşteri Hizmetleri’ne ilet'], correct:0, fb:'Bunun gibi sadece ödevdeki bir düşüş, kendi birebir görüşmenle başlar. Ancak bundan sonra da devam ederse Team Leader’ına taşı.'},
   {type:'choice', prompt:'Seviyede açıkça zorlanan bir çocuk için dersi iki haftadır uyarlıyorsun ve hâlâ yeterli değil.', opts:['Süresiz olarak uyarlamaya devam etmek — seviye senin kararın değil, yani üst kademeye taşınacak bir şey yok','BO’ya yorumla birlikte Team Leader + Müşteri Hizmetleri','Olası bir seviye değişikliği hakkında doğrudan aileye mesaj atmak'], correct:1, fb:'Bir “çok zor” vakasının yazılı olarak, BO’da Team Leader’ına ve Müşteri Hizmetleri’ne gitmesi gereken an tam olarak budur.'},
   {type:'choice', prompt:'Grubundaki bir çocuğun profilinde otizm tanısı kayıtlı ve sana az önce grubun gelecek ay yeni bir eğitmenle yeniden yapılandırılacağı söylendi.', opts:['Kimseye bahsetmeden önce değişikliğin kesinleşmesini beklemek','Team Leader’ına hemen söylemek, BO’ya eksiksiz bir devir notu yazmak ve değişikliğin nasıl iletileceğini kararlaştırmak','Hazırlanmak için zamanı olsun diye çocuğa hemen kendin, özel olarak söylemek'], correct:1, fb:'Özel eğitim ihtiyacı artı süreklilikte bir değişiklik hemen bildirilmelidir — ve bunun nasıl iletileceği önce Team Leader’ınla kararlaştırılmalıdır.'},
   {type:'choice', prompt:'Art arda iki ders platform arızası nedeniyle aksadı ve veli az önce bir telafi dersi sordu.', opts:['Telafi derslerinin mümkün olmadığını söylemek','Onları hızla rahatlatmak için kendin ayarlayacağını söylemek','Konuyu ileteceğini belirtmek, sonra aynı gün ek bir ders için Team Leader’ınla konuşmak'], correct:2, fb:'Reddetmek de söz vermek de senin işin değil — ama şirket içi konuşmayı aynı gün başlatmak tam olarak senin işin.'},
   {type:'choice', prompt:'Bir veli, seviyenin, paketin ya da programın kayıt sırasında kendisine söylenen şey olmadığını yazıyor.', opts:['Aynı gün en dürüst açıklamanla cevap vermek','Mesajı aldığını bildirmek, sonra düzgün bir cevap vermeden önce konuyu Team Leader’ına ve Müşteri Hizmetleri’ne iletmek ve velinin sözlerini kelimesi kelimesine BO’ya kaydetmek','Müşteri Hizmetleri’ne iletip artık seni ilgilendirmediğini düşünmek'], correct:1, fb:'Kendi başına cevap vermenin en çok zarar verdiği tek durum budur. Her zaman önce koordine ol — ama sessiz de kalma.'}
  ]
 }
},
{id:'m7', numLabel:'Modül 7', emoji:'🛟', color:'var(--coral)',
 title:'Bir İade Talebini Kurtarmak',
 desc:'Şimdiye kadarki her şey bir talebi önlemekle ilgiliydi. Bu modül, bir talep zaten iletildiğinde ne yapılacağıyla ilgili.',
 obj:'Bir iade talebi zaten iletildiğinde nelerin değiştiğini bilmek: bir sonraki dersin ne yapması gerektiği, neyi söyleyip neyi söyleyemeyeceğin ve Müşteri Hizmetleri’ne ihtiyaç duyduğu bilgileri nasıl sağlamaya devam edeceğin.',
 sections:[
  {t:'🔀 7.1 · Bir talep oluştuğunda her şey değişir', html:`
   <div class="card"><p>Modül 1–6, bir aile parasını geri istemeden <strong>önce</strong> durumu yakalamakla ilgilidir. Bu modül, bunun zaten gerçekleştiği an içindir: <strong>bir iade talebi iletildi</strong> ve sen bilgilendirildin.</p></div>
   ${co('co-idea','💡',`<p><strong>Talebin kendisini sen değil, Müşteri Hizmetleri Yöneticisi oluşturur.</strong> O kısım üzerinde hiçbir kontrolün yok. Hâlâ sana ait olan şey, bundan sonra derste olan her şeydir — ve bu az şey değildir.</p>`)}
   ${co('co-danger','🚨',`<p><strong>Talebin kendisi hakkında hiçbir şey söyleme</strong> — ne çocuğa ne de aileye — Müşteri Hizmetleri senden açıkça belirli bir şey söylemeni istemedikçe. Artık senin işin ders, konuşma değil.</p>`)}
  `},
  {t:'🎯 7.2 · Bu çocukla bir sonraki dersin, öğrenciyi tutma girişimidir', html:`
   <div class="card"><p>Başka bir şeyi değiştirme şansın olmayabilir. Hemen bir sonraki dersi, sonucu belirleyecek an olarak gör.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Ona gerçek bir söz hakkı ver.</strong> Anlamsız bir soru değil — görüldüğü ve başarılı olduğu gerçek bir an.`},
     {ic:'🏆', html:`<strong>Erken, kolay ve görünür bir başarı planla.</strong> Dersten geride kalmış değil, yapabildiğini hissederek çıkmalı.`},
     {ic:'👀', html:`<strong>Fark edildiğini hissettir</strong> — genel değil, belirli bir şekilde. Bu eğitimdeki her birebir görüşmedeki kuralın aynısı.`},
     {ic:'🤐', html:`<strong>Talepten bahsetme.</strong> Bu ders o konuşmanın yeri değil, çocuk konuyu açsa bile — konuyu sıcak bir şekilde değiştir ve ders anlatmaya devam et.`}
   ])}
  `},
  {t:'📮 7.3 · Müşteri Hizmetleri’ni hızla bilgilendir — bu hâlâ senin işin', html:`
   <div class="card"><p>Müşteri Hizmetleri, dersinde bulunmadan talep üzerinde çalışıyor. Senin gördüklerin — ayrıntılı ve hızlı şekilde — onların başka hiçbir yoldan edinemeyeceği bilgilerdir.</p></div>
   ${checkbox([
     'BO’da tam olarak ne gördüğünü anlatan bir yorum — tarihler, somut ayrıntılar, izlenimler değil',
     'Elinde varsa ailenin kendi sözleri, kelimesi kelimesine — başka sözcüklerle değil',
     'Müşteri Hizmetleri tekrarlamasın diye zaten uyarladığın ya da teklif ettiğin her şey',
     'Team Leader’ın aynı gün bilgilendirilmiş olsun'
   ])}
   ${co('co-idea','💡',`<p>Bir talebin var olduğunu, Müşteri Hizmetleri’nin BO’daki çocuk profiline bıraktığı yorumlardan öğrenebilirsin — bir aile iade istediği anda sana haber veren otomatik bir sistem yok. Sen Müşteri Hizmetleri’ne sinyal iletirsin; onlar sana güncelleme iletmez.</p>`)}
  `},
  {t:'🚧 7.4 · Neler yapabilirsin, neler yapamazsın', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Yapabilirsin</th><th>🚫 Asla yapamazsın</th></tr>
   <tr><td>Bir talepten haberdar olduğun anda BO üzerinden Müşteri Hizmetleri’ni bilgilendirmek</td><td>Bir iadenin onaylandığını teyit etmek</td></tr>
   <tr><td>O bildirimden <strong>önce</strong> doğal bir fırsat çıkarsa somut bir şey önermek — ek bir ders, seviye kontrolü, farklı bir kurs önerisi</td><td>Herhangi bir tutarı teyit etmek ya da konuşmak</td></tr>
   <tr><td>Veliye Müşteri Hizmetleri’nin kendisine yardımcı olacağını söylemek</td><td>Talebin kendisi hakkında bunun ötesinde herhangi bir şey söylemek ya da ima etmek</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>Her zaman söylemesi güvenli olan mesaj:</strong> <em>“Müşteri Hizmetleri bu konuda size yardımcı olacak.”</em> Fazlası değil — senin rolün burada biter ve bu, yürütmek için gereken bilgilere sahip olmadığın bir konuşmadır.</p>`)}
  `},
  {t:'🌱 7.5 · Öğrenciyi tuttuktan sonraki 2–4 ders', html:`
   <div class="card"><p>Talep geri çekilsin, çocuk grubunda kalsın, başka bir eğitmene geçsin ya da birebir derslere başlasın — sonraki birkaç ders, öğrenciyi tutmanın gerçekten kalıcı olup olmadığını belirler.</p></div>
   ${iconGrid([
     {ic:'🔁', html:`<strong>O derslerin her birinde ekstra ilgi</strong> — gerçek bir söz hakkı, belirli bir başarı, fark edilen bir devamsızlık — bu eğitimin sana öğrettiği her şey, tekrar tekrar.`},
     {ic:'📝', html:`Çocuk yeni bir eğitmene ya da formata geçiyorsa BO Yorumlarında <strong>eksiksiz bir devir notu</strong> — Modül 5.6’daki devir disiplininin aynısı.`},
     {ic:'👋', html:`Seninle kalıyorsa <strong>sıcak bir süreklilik</strong> — “işe yaradı” rahatlamasının seni sessizce eski alışkanlıklarına döndürmesine izin verme.`}
   ])}
  `},
  {t:'🔙 7.6 · Önleme hâlâ asıl mesele', html:`
   <div class="card"><p>Aşağıdakilerin hepsi zaten Modül 1–6’da var — bu kısa versiyon, işinin büyük kısmının bu modüle hiç ihtiyaç kalmamasını sağlamak olduğunu hatırlatmak için.</p></div>
   ${checkbox([
     'Ödevleri her hafta takip et',
     'Dersin tam yapısını koru — grup kolay göründüğünde gevşemesine izin verme',
     'İkiden fazla devamsızlığı ya da teknik bir sorunu gerçekleştiği anda bildir',
     'Bir risk sinyali gördüğün anda Team Leader’ına taşı',
     'Senden beklendiğinde öğrenci takip raporunu gönder'
   ])}

  `}
 ],
 ix:{
  title:'Talep zaten geldiğinde',
  instr:'Her senaryo için doğru adımı seç. Devam etmek için %70.',
  items:[
   {type:'choice', prompt:'Bir ailenin grubundaki bir çocuk için iade talebinde bulunduğunu az önce öğrendin. İlk olarak ne yaparsın?', opts:['Nedenini öğrenip doğrudan çözmek için aileye mesaj atmak','BO üzerinden Müşteri Hizmetleri’ni bilgilendirmek ve aynı gün Team Leader’ını haberdar etmek','Herhangi bir şey yapmadan önce Müşteri Hizmetleri’nin seninle iletişime geçmesini beklemek'], correct:1, fb:'Talep zaten Müşteri Hizmetleri’nde — senin işin bildiklerini onlara hızla ulaştırmak, aileyle kendi konuşmanı başlatmak değil.'},
   {type:'choice', prompt:'O çocukla bir sonraki dersinde ne değişmeli?', opts:['Hiçbir şey — farklı davranmak bir şeylerin ters gittiğini hissettirebilir','Ona gerçek ve görünür bir başarı yaşatmak ve fark edildiğini hissetmesini sağlamak — talepten bahsetmeden','Ailesinin neden ayrılmak istediği hakkında çocukla doğrudan konuşmak'], correct:1, fb:'Dersin kendisi öğrenciyi tutma girişimidir. Talebin kendisi asla çocukla konuşulacak bir konu değildir.'},

   {type:'choice', prompt:'Bir veli sana doğrudan iadesinin onaylanıp onaylanmadığını soruyor. Ne söylersin?', opts:['Bu tür durumların genelde nasıl ilerlediğine dayanarak en iyi tahminini vermek','Müşteri Hizmetleri’nin bu konuda kendisine yardımcı olacağını söyleyip orada bırakmak','Eğer biliyorsan, kendisine ödenecek tutarı teyit etmek'], correct:1, fb:'Bir onayı ya da tutarı teyit etmek, ne kadar emin hissedersen hisset, asla senin işin değil. Tek güvenli cümle onu Müşteri Hizmetleri’ne yönlendirir.'},
   {type:'choice', prompt:'Talep geri çekildi ve çocuk grubunda kalıyor. Şimdi ne olacak?', opts:['Normale dönmek — kriz geçti','Sonraki birkaç ders boyunca o çocuğa ekstra ilgi göstermeye devam etmek, çünkü öğrenciyi tutmak hâlâ bozulabilir','Aileye fikirlerini değiştirdikleri için sevindiğini söylemek'], correct:1, fb:'Bir ders boyunca dayanıp sonra eski hâline dönen bir tutma girişimi çoğu zaman hiç dayanmaz. Asıl belirleyici olan sonraki birkaç derstir.'}
  ]
 }
},
{id:'checklist', numLabel:'Modül 8', emoji:'✅', color:'var(--green-d)',
 title:'Son Kontrol Listesi',
 desc:'Burada sınav yok — sınava girmeden önce bu eğitimdeki her şey, tek bir listede.',
 obj:'Aşağıdaki kontrol listesinin tamamını gözden geçir. Bu modül notlandırılmaz — oku, ardından Final Sınavına geç.',
 sections:[
  {t:'✅ Temel noktalar, tek listede', html:`
   ${numlist([
     'Yeni bir çocukla ilk dersimden <strong>önce</strong>, Yorumlar dahil öğrenci profilini kontrol ederim',
     'Haftada bir, tüm grubum için İlerleme ekranını tararım — hem Derste hem Evde',
     'Sıfırda düz bir çizgiyi nötr bir durum olarak değil, olabilecek en ciddi işaret olarak görürüm',
     'Grubumdaki her çocuk gerçek bir söz hakkı alır ve bunu takip ettiğim için kanıtlayabilirim',
     'Bir çocuk ders kaçırdığında sadece kaydı göndermem, dört adımın hepsini uygularım',
     'Gördüğüm örüntüleri tanırım ve her birine farklı tepki veririm',
     'Her zaman Team Leader’ımı bilgilendiririm, gerektiğinde Müşteri Hizmetleri’ni dahil ederim ve BO’ya yorum bırakırım',
     'Müşteri Hizmetleri bir konuşmayı devraldığında, konunun dışında kalır ve onların talimatlarına uyarım',
     'Bir kez üst kademeye taşırım, ardından takip ederim'
   ])}
  `},
  {t:'🪞 Öz değerlendirme — her hafta kendine sormaya değer', html:`
   ${numlist([
     'Bu hafta herhangi bir çocuğun ders içi çalışmasında ya da ödevinde, derslere normal şekilde katılmaya devam eden biri olsa bile, bir düşüş fark ettim mi?',
     'Grubumda çalışmaları sıfırda olan ve sessizce fark etmeyi bıraktığım bir çocuk var mı?',
     'Son dersimde grubumdaki her çocuk gerçek bir söz hakkı aldı mı? Emin miyim, yoksa öyle mi varsayıyorum?',
     'Fark ettiğim ama henüz kimseye söylemediğim bir şey var mı?',
     'Birine söylediğim ama hiç takip etmediğim bir şey var mı?'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Eğitimin tamamı bu kadar.</strong> Hazır olduğunda Final Sınavına geç — ardından görevi kapatmak için LMS’teki DST’yi tamamla.</p>`)}
  `}
 ],
 gateExam:true
},
    ];
  }
};

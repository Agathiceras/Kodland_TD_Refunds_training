/* Refunds training - Indonesian content (translated from the English source). */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    pageTitle:'Pelatihan Pengembalian Dana — Pelatihan Tutor Kodland',
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:'💸 Program Pelatihan Tutor',
    heroTitle:'Memahami <span class="h-pill">Pengembalian Dana</span>',
    heroIntro:"Di balik setiap permintaan pengembalian dana (refund), ada seorang anak yang sedang membangun sesuatu lalu berhenti — dan kamu hampir selalu menjadi orang pertama yang sebenarnya bisa menyadarinya. Pelatihan ini membahas seberapa baik kamu mengamati, dan seberapa cepat kamu bertindak.",
    heroR1:'Pelajari dengan tepat apa yang perlu kamu perhatikan, selama pelajaran dan di antara pelajaran.',
    heroR2:"Berlatih membaca tampilan Progres sebuah grup dalam simulasi BO secara langsung.",
    heroR3:"Pahami dengan jelas apa yang harus kamu perbaiki, apa yang harus kamu laporkan, dan kepada siapa.",
    heroWork:'Selesaikan 7 modul dan daftar periksa akhir, lalu lanjutkan ke DST. Setiap modul membutuhkan nilai 70%+ untuk membuka modul berikutnya.',
    startBtn:'🚀 Mulai Pelatihan',
    pathLabel:'Jalur belajarmu',
    devTitle:'Mode pengembang: buka semua modul untuk ditinjau',
    backToPath:'Kembali ke jalur',
    modulesPassed:'{done} / {total} modul lulus',
    moduleN:'Modul {n}',
    of:'dari',
    locked:'🔒 Terkunci',
    passedBadge:'✅ Lulus · {pct}%',
    reviewedBadge:'✅ Sudah ditinjau',
    startBadge:'▶ Mulai',
    reviewBadge:'▶ Tinjau',
    objective:'Tujuan',
    startCheck:'▶ Mulai uji modul',
    toExam:'▶ Lanjut ke Ujian Akhir',
    doneBack:'✓ Selesai — kembali ke jalur',
    ixBadge:'📋 Uji modul — 70% untuk membuka modul berikutnya',
    ixItemBadge:'📋 Uji modul — soal {i} dari {n}',
    scoreSoFar:'Skor sejauh ini: {c} / {t}',
    continue:'Lanjut →',
    sortWrong:'Belum tepat — jawaban yang benar adalah “{label}”.',
    resPassed:'Modul lulus!',
    resFailed:'Belum sampai',
    resUnlocked:"Kamu sudah membuka modul berikutnya.",
    resNeed:'Kamu membutuhkan 70% untuk membuka modul berikutnya. Tinjau kembali bagian di atas, lalu coba uji ini lagi.',
    resContinue:'Lanjut ke jalur belajar',
    resBack:'Kembali ke jalur',
    resReview:'Tinjau modul ini',
    doneEyebrow:'Ujian Akhir',
    doneTitle:'🎉 Selamat!',
    doneP1:"🎉 <strong>Selamat! Kamu telah menyelesaikan pelatihan mandiri untuk meningkatkan Metrik Pengembalian Dana-mu!</strong>",
    doneP2:"Kamu hampir selesai! Silakan kembali ke halaman pelatihan di LMS tempat kamu membuka pelatihan ini. DST tersedia tepat di bawah pelatihan.",
    doneP3:'👉 <strong>Kamu harus menyelesaikan dan lulus DST agar pelatihan ini dianggap selesai dengan sukses.</strong> Jika DST tidak diselesaikan, pelatihan akan tetap berstatus belum selesai dan bisa melewati tenggat waktu.',
    doneP4:'Pastikan kamu menyelesaikan DST dan meraih nilai kelulusan untuk menutup tugas ini dengan sukses.',
    doneP5:'Semoga sukses! ❤️',
    devUnlockAlert:'Mode pengembang: semua modul sekarang terbuka untuk ditinjau.',
    devOn:'🔓 Mode pengembang AKTIF — semua modul terbuka',
    devOff:'🔒 Mode pengembang NONAKTIF — progres dihapus',
    devBadge:'🔓 MODE PENGEMBANG',
    doLabel:'✅ Lakukan',
    avoidLabel:'🚫 Hindari',
    noticeLabel:'Perhatikan:'
  },
  buildModules(){
    return [
{id:'intro', numLabel:'Pendahuluan', emoji:'💸', color:'var(--coral)',
 title:'Mengapa Pelatihan Ini Ada',
 desc:'Seperti apa pengembalian dana dari sisi anak, mengapa kamu adalah orang pertama yang bisa melihatnya datang, dan bagian mana yang menjadi tanggung jawabmu.',
 obj:'Memahami seperti apa pengembalian dana dari sisi anak, mengapa kamu adalah orang pertama yang bisa melihatnya datang, dan bagian mana yang menjadi tanggung jawabmu.',
 sections:[
  {t:'📋 Kamu di sini karena alasan tertentu — Ayo kita bahas bersama', html:`
   <div class="card"><p>Di bawah ini kamu akan menemukan alasan-alasan mengapa pelatihan ini mungkin ditugaskan kepadamu. Di sini kita hanya membahas pengembalian dana (refund) yang diminta karena alasan yang berkaitan dengan pelajaran — situasi di mana kami bisa membantumu menanganinya, bukan hanya untuk mencegahnya dimasa depan, tetapi untuk menghilangkan kasus pengembalian dana yang terulang kembali.. Meski begitu, menyelesaikan seluruh pelatihan akan memberimu sudut pandang yang lebih luas, yang juga membantu mencegah pengembalian dana karena alasan lain.</p></div>
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>🚩 Alasan yang dicatat</th><th>👀 Biasanya terlihat seperti apa</th><th>📍 Bagaimana pelatihan ini membantu</th></tr>
   <tr><td><strong>Tidak tertarik pada pemrograman / kursus Kodland</strong></td><td>Bosan, sekadar menjalankan kewajiban, “cuma ini?”, tanpa hasil yang nyata yang bisa langsung dirasakan oleh siswa.</td><td>Modul 5.2 · Modul 3.6</td></tr>
   <tr><td><strong>Pengelolaan / kedisiplinan pelajaran</strong></td><td>Suasana kelas terasa kacau, satu anak mendominasi, yang lain diam atau tidak lagi ikut serta</td><td>Modul 5.5 · Modul 3</td></tr>
   <tr><td><strong>Reaksi negatif yang kuat saat membuat kesalahan</strong></td><td>Cepat menyerah, kesal karena kesalahan kecil, “aku nggak bisa” sejak awal dan berulang kali</td><td>Modul 5.1 · Modul 3.5</td></tr>
   <tr><td><strong>Kekhawatiran tentang cara mengajar tutor sendiri</strong></td><td>Tidak ada penyeimbangan cara pengajaran pada setiap karakteristik siswa tertentu melainkan hanya menyampaikan pelajaran pada umumnya.</td><td>Bicarakan langsung dengan Team Leader dan Mentor Regional-mu; Modul 3 sebagai penyegar</td></tr>
   </table></div></div>
  `},
  {t:'💔 Pengembalian dana adalah anak yang berhenti belajar', html:`
   <div class="card"><p>Di balik setiap permintaan pengembalian dana, ada seorang anak yang sedang membangun sesuatu lalu berhenti. Sebuah grup yang makin kecil. Sebuah keluarga yang memercayai kita dan memutuskan bahwa kita tidak layak untuk dilanjutkan.</p>
   <p>Itulah inti pelatihan ini. Bukan angka di dasbor — melainkan seorang anak tertentu, di salah satu grupmu, yang sedang menjauh saat ini juga dan tidak tahu bagaimana mengatakannya.</p></div>
   <img src="Images/Image_1.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
  `},
  {t:'📉 Pengembalian dana hampir tidak pernah terjadi tiba-tiba', html:`
   <div class="card"><p>Inilah hal paling berguna yang perlu kamu ketahui tentangnya. Saat sebuah keluarga meminta uangnya kembali, ceritanya biasanya sudah berjalan berminggu-minggu — dan sebagian besar terjadi <strong>di depan mata tutor.</strong></p></div>
   ${stepFlow([
     {ic:'📋', label:'Tugas kelas mulai tidak diselesaikan'},
     {ic:'🏠', label:'PR mulai tidak dikumpulkan'},
     {ic:'📵', label:'Mulai sering absen'},
     {ic:'☎️', label:'Orang tua menghubungi seseorang'}
   ])}
   <div class="card"><p>Pada pelajaran-pelajaran sebelum permintaan pengembalian dana, polanya selalu sama:</p></div>
   ${bigStat('39%→56%', `<p><strong>Pelajaran yang dilewatkan</strong> naik drastis pada masa-masa terakhir sebelum permintaan pengembalian dana.</p>`)}
   ${bigStat('35%→15%', `<p><strong>Penyelesaian PR</strong> juga turun drastis pada periode yang sama.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted);margin-top:-4px;margin-bottom:14px">Berdasarkan pola historis di berbagai grup; angka pastinya bisa berbeda di setiap wilayah.</p>
   ${co('co-danger','🚨',`<p><strong>Ini bagian yang paling penting untukmu.</strong></p><p>Anak yang sedang bersiap meninggalkan kursus bisa terlihat benar-benar normal di pelajaran yang kamu ajar. Hilangnya minat tidak terlihat pada perhatiannya saat ia hadir — melainkan pada <strong>kehadiran dan penyelesaian tugasnya.</strong> Jadi, “dia kelihatan baik-baik saja di kelas” bukanlah bukti bahwa semuanya baik-baik saja.</p>`)}
  `},
  {t:'🦸 Mengapa kamu adalah orang terpenting dalam hal ini', html:`
   ${co('co-idea','💡',`<p><strong>Kamu satu-satunya orang yang melihat anak ini, di grup ini, setiap minggu.</strong> Tidak ada seorang pun di CS tim, TL atau Operasional tim, dan TCM tim yang bisa melihat seorang anak mulai diam atau berhenti berusaha. <strong>Kamu bisa.</strong> Seluruh pelatihan ini bermuara pada dua hal: <strong>seberapa baik kamu mengamati, dan seberapa cepat kamu bertindak.</strong></p>`)}
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Sepenuhnya tanggung jawabmu</th><th>🔁 Tugasmu untuk menyesuaikan — dan melaporkan</th><th>🚫 Di luar kendali kita</th></tr>
   <tr><td>Anak merasa termotivasi dan didukung di setiap pelajaran</td><td><strong>Level terlalu sulit atau terlalu mudah.</strong> Sesuaikan tugasnya sekarang. Laporkan untuk ditinjau.</td><td>Masalah Kesehatan Siswa</td></tr>
   <tr><td>Setiap anak mendapat giliran nyata dan jawaban nyata</td><td><strong>Kebutuhan khusus yang tidak pernah diberitahukan kepadamu.</strong> Sesuaikan pendekatanmu. Laporkan.</td><td>Keadaan keluarga</td></tr>
   <tr><td>Kamu menyadari tanda-tanda pertama anak menjauh — dan bertindak</td><td><strong>Grup yang ramai dan aktif.</strong> Keterampilan yang bisa dipelajari — sesuaikan pendekatanmu. Laporkan jika kesenjangannya tetap terlalu besar.</td><td>Kondisi keuangan keluarga</td></tr>
   <tr><td>Keluarga merasa ada orang yang benar-benar memantau perkembangan anak mereka</td><td><strong>Pergantian tutor/grup/jadwal berdampak buruk.</strong> Bersikaplah transparan, koordinasikan dengan cepat.</td><td></td></tr>
   <tr><td>Anak yang tertinggal pelajaran bisa dengan mudah mengejar ketertinggalannya</td><td><strong>Keluarga diberi informasi berbeda saat mendaftar.</strong> Jelaskan dengan jujur. Laporkan.</td><td></td></tr>
   </table></div></div>
   ${co('co-danger','🚨',`<p><strong>Semua ini bukan salahmu — tetapi pekerjaan nyatanya tetap milikmu.</strong> Sesuaikan tugas, ubah cara kamu mengelola grup, beritahu anak saat ada perubahan. Dan sama pentingnya: <strong>beri tahu tim yang bisa selalu membantu kamu.</strong> Informasikan Team Leader-mu, libatkan CS, tinggalkan komentar di BO. Jika tidak, masalahnya akan tenggelam — dan beberapa minggu kemudian, kita kehilangan anak itu.</p>`)}
  `},
  {t:'💬 Berbicara dengan keluarga: apa yang kamu lakukan, dan kapan kamu menyerahkannya', html:`
   <img src="Images/Image_2.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Orang Tua tentu ingin berbicara dengan kamu tentang bagaimana anak mereka belajar dalam kelas — <strong>itu bagian dari pekerjaanmu</strong>, dan kamu perlu bersikap hangat dan mudah dihubungi soal itu.</p>
   <p>Yang <strong>tidak</strong> bisa kamu lakukan adalah <em>tindakannya</em>: memindahkan anak ke grup lain, mengubah jadwal, level, atau paket, atau menyetujui pelajaran tambahan. Semua itu wewenang CS — dan mereka hanya bisa bertindak jika kamu memberi tahu mereka.</p></div>
   ${co('co-idea','💡',`<p><strong>Aturannya: Komunikasikan tentang bagaimana siswa belajar dan jabarkan apa yang perlu siswa lakukan..</strong> Kamu adalah jembatan antara pelajaran dan orang-orang yang bisa mengubah situasi anak — dan jembatan hanya berguna jika hal-hal melintasinya <strong>dengan cepat.</strong></p>`)}
  `},
  {t:'🔀 Urutannya penting: Team Leader dulu, baru keluarga', html:`
   <div class="card"><p>Ada urutan yang harus diikuti dengan benar, dan kesalahan dalam urutan inilah yang membuat pesan dengan niat baik justru menimbulkan masalah.</p></div>
   ${co('co-danger','🚨',`<p><strong>Setiap kali situasinya melibatkan hal di luar cara mengajarmu sendiri</strong> — level, grup, jadwal, kebutuhan khusus, janji yang tidak ditepati, pelajaran yang hilang — <strong>jangan menulis kepada keluarga lebih dulu.</strong></p>`)}
   ${stepFlow([
     {ic:'👩‍💼', label:'1. Koordinasikan dengan Team Leader-mu — jelaskan apa yang kamu lihat, libatkan CS, tinggalkan komentar di BO'},
     {ic:'🧭', label:'2. Sepakati strateginya — apa yang benar-benar tersedia untuk anak ini, dan apa yang tidak'},
     {ic:'👪', label:'3. Baru keluarga — persis seperti yang disepakati Team Leader-mu, tidak lebih'}
   ])}
   <div class="card"><p>Dengan begitu kamu tidak perlu menebak-nebak, tidak menjanjikan berlebihan, dan tidak perlu menarik kembali ucapanmu.</p></div>
   ${co('co-danger','🚨',`<p><strong>Menjelaskan solusi secara langsung dengan orangtua bukan tugas utama tutor bahkan setelah berkoordinasi.</strong> Team Leader-mu akan menyampaikan salah satu dari dua hal ini:</p>
   <ul><li><em>“Sampaikan X kepada keluarga”</em> → sampaikan persis itu, tidak lebih</li>
   <li><em>“Kami akan menanganinya dari sini”</em> → <strong>kamu tidak ikut campur.</strong> Dua suara yang memberi keluarga gambaran berbeda adalah cara kepercayaan runtuh.</li></ul>`)}
  `},
  {t:'📌 Apa yang selalu boleh kamu sampaikan, dan apa yang selalu harus menunggu', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Selalu boleh — tulis dengan bebas, hangat, dan responsif</th><th>⏸️ Selalu menunggu Team Leader-mu</th></tr>
   <tr><td>Bagaimana perkembangan anak, apa yang sudah ia lakukan dengan baik, apa yang masih terasa sulit</td><td>Apa pun tentang <strong>level, kursus, grup, jadwal, format, atau paket</strong></td></tr>
   <tr><td><strong>Dukungan apa yang kamu</strong> berikan di pelajaran, dan apa yang sudah kamu sesuaikan</td><td><strong>Pilihan, solusi, atau langkah selanjutnya</strong> apa pun untuk dipilih keluarga</td></tr>
   <tr><td>Bahwa kamu menyadari ia sedang kesulitan, dan bahwa kamu peduli dengan perasaannya</td><td><strong>Penjelasan tentang bagaimana sesuatu bisa salah</strong>, atau mengapa</td></tr>
   <tr><td>Menanyakan apa yang membantu anak ini belajar dengan baik</td><td>Apa pun yang berkaitan dengan <strong>uang</strong></td></tr>
   <tr><td>Pelajaran yang terlewat, dan apa yang perlu dikejar</td><td>Konfirmasi apa pun bahwa sesuatu <strong>akan</strong> atau <strong>tidak akan</strong> terjadi</td></tr>
   <tr><td>Bahwa kamu sudah menyampaikan sesuatu kepada timmu, secara umum, tanpa detail</td><td>Detail apa pun tentang <strong>apa yang kamu laporkan secara internal</strong></td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p><strong>Perbedaannya dalam satu kalimat: kamu berbicara tentang anak. Team Leader-mu dan CS berbicara tentang pengaturannya.</strong></p>`)}
   ${co('co-danger','⛔',`<p><strong>Jangan pernah berjanji, dan jangan pernah menolak.</strong></p><p>Bukan <em>“kami akan memindahkannya ke grup lain.”</em> Bukan pula <em>“itu tidak mungkin.”</em> Keduanya adalah keputusan yang bukan wewenangmu.</p>
   <p><strong>Tetapi jangan juga bersikap dingin atau mengambang.</strong> Yang selalu perlu kamu tunjukkan, sejak awal, adalah bahwa kamu sungguh-sungguh ingin anak ini merasa nyaman dan mendapatkan pengalaman belajar terbaik — dan bahwa kamu sudah mengupayakannya. <em>“Saya sudah melihat hal ini, saya peduli, saya sedang mencari tahu apa yang bisa kami lakukan, dan saya akan menghubungi Bapak/Ibu kembali.”</em> Itu bukan janji. Itulah yang membuat keluarga tetap bersama kita selama jawabannya sedang dicari.</p>`)}
   <div class="card"><p><strong>Kamu selalu bisa berkomunikasi langsung dengan orangtua, tanpa perlu bertanya dulu,</strong> tentang urusan sehari-hari mengajar: bagaimana pelajaran berjalan, sesuatu yang dilakukan anak dengan baik, pelajaran yang terlewat dan apa yang perlu dikejar, pertanyaan tentang perkembangannya di rumah. Bersikaplah responsif dan hangat dalam semua itu — itu pekerjaanmu, dan itulah yang memungkinkan percakapan yang lebih sulit di kemudian hari.</p></div>
  `}
 ],
 ix:{
  title:'Apa yang tanggung jawabku, apa yang kusesuaikan dan kulaporkan, apa yang bukan tanggung jawabku',
  instr:'Kelompokkan setiap situasi nyata ke zona yang tepat. 70% untuk membuka Modul 1.',
  items:[
   {type:'sort', prompt:'“Di grup besar, seorang siswa tertinggal dan tidak bisa ikut berpartisipasi” —', card:'Di grup besar, seorang siswa tertinggal dan tidak bisa ikut berpartisipasi', zones:[
     {label:'Sepenuhnya tanggung jawabku', fb:'Belum tepat — mulailah dengan mengubah pendekatanmu sendiri, tetapi jika kesenjangannya masih terlalu besar setelah benar-benar mencoba, itu juga perlu dilaporkan.'},
     {label:'Kusesuaikan dan kulaporkan', fb:'Benar — ini keterampilan mengelola grup yang bisa kamu ubah sendiri mulai pelajaran berikutnya, dan kamu laporkan jika setelah dicoba masih belum cukup.'},
     {label:'Di luar kendali kita', fb:'Belum tepat — ini keterampilan mengelola grup, dan dimulai dengan menyesuaikan pendekatanmu sendiri.'}
   ], correctZone:1, fb:''},
   {type:'sort', prompt:'“Kondisi keuangan keluarga berubah” —', card:'Kondisi keuangan keluarga berubah', zones:[
     {label:'Sepenuhnya tanggung jawabku', fb:'Belum tepat — kondisi keuangan keluarga benar-benar di luar kendali kita.'},
     {label:'Kusesuaikan dan kulaporkan', fb:'Belum tepat — kondisi keuangan keluarga benar-benar di luar kendali kita, bukan sesuatu yang perlu disesuaikan.'},
     {label:'Di luar kendali kita', fb:'Benar — ini memang penyebab di luar kendali kita. Bersikaplah baik, jangan berharap apa-apa, dan jangan dikejar.'}
   ], correctZone:2, fb:''},
   {type:'sort', prompt:'“Levelnya terlalu tinggi untuk usianya” —', card:'Levelnya terlalu tinggi untuk usianya', zones:[
     {label:'Sepenuhnya tanggung jawabku'},
     {label:'Kusesuaikan dan kulaporkan', fb:'Benar — sesuaikan tugasnya sekarang, dan laporkan agar levelnya sendiri bisa ditinjau.'},
     {label:'Di luar kendali kita'}
   ], correctZone:1, fb:'Belum tepat — kamu bisa langsung menyesuaikan tugasnya, dan kamu juga perlu melaporkannya agar levelnya ditinjau. Kedua bagian sama pentingnya.'},
   {type:'sort', prompt:'“Dia berhenti mengumpulkan PR” —', card:'Dia berhenti mengumpulkan PR', zones:[
     {label:'Sepenuhnya tanggung jawabku', fb:'Benar — menyadari hal ini dan bertindak (obrolan empat mata, menyesuaikan pendekatanmu) sepenuhnya tanggung jawabmu.'},
     {label:'Kusesuaikan dan kulaporkan'},
     {label:'Di luar kendali kita'}
   ], correctZone:0, fb:'Belum tepat — menyadari turunnya PR dan melakukan obrolan empat mata sepenuhnya termasuk dalam cara mengajarmu sendiri; tidak perlu dilaporkan kecuali mengarah pada masalah yang lebih besar seperti level yang tidak sesuai.'},
   {type:'sort', prompt:'“Tidak ada yang memberitahuku bahwa dia punya kebutuhan pendidikan khusus” —', card:'Tidak ada yang memberitahuku bahwa dia punya kebutuhan pendidikan khusus', zones:[
     {label:'Sepenuhnya tanggung jawabku'},
     {label:'Kusesuaikan dan kulaporkan', fb:'Benar — sesuaikan semua yang bisa kamu sesuaikan di pelajaran, dan laporkan agar pilihan seperti format satu-lawan-satu bisa dipertimbangkan.'},
     {label:'Di luar kendali kita'}
   ], correctZone:1, fb:'Belum tepat — kamu langsung menyesuaikan pendekatanmu, dan juga melaporkannya agar pilihan yang lebih luas bisa dipertimbangkan.'},
   {type:'sort', prompt:'“Orang tua bilang mereka dijanjikan sesuatu yang berbeda” —', card:'Orang tua bilang mereka dijanjikan sesuatu yang berbeda', zones:[
     {label:'Sepenuhnya tanggung jawabku'},
     {label:'Kusesuaikan dan kulaporkan', fb:'Benar — kamu tidak bisa mengubah masa lalu, tetapi kamu menjelaskan dengan jujur dan melaporkannya agar pembicaraan terjadi antar departemen.'},
     {label:'Di luar kendali kita'}
   ], correctZone:1, fb:'Belum tepat — ini perlu dilaporkan agar tidak terulang, meskipun ketidaksesuaian itu sendiri bukan ulahmu.'},
   {type:'sort', prompt:'“Anaknya bosan dan selesai dalam sepuluh menit” —', card:'Anaknya bosan dan selesai dalam sepuluh menit', zones:[
     {label:'Sepenuhnya tanggung jawabku'},
     {label:'Kusesuaikan dan kulaporkan', fb:'Benar — berikan tantangan tambahan yang nyata sekarang, dan laporkan sebagai kemungkinan kasus level yang terlalu mudah.'},
     {label:'Di luar kendali kita'}
   ], correctZone:1, fb:'Belum tepat — kebosanan karena level yang mudah membutuhkan tantangan tambahan segera di pelajaranmu, ditambah laporan agar levelnya ditinjau.'}
  ]
 }
},
{id:'m1', numLabel:'Modul 1', emoji:'👀', color:'var(--blue)',
 title:'Belajar Melihatnya Lebih Awal',
 desc:'Apa yang perlu diperhatikan selama pelajaran dan di antara pelajaran, serta kapan kamu harus bertindak.',
 obj:'Mengetahui dengan tepat apa yang perlu diperhatikan selama pelajaran dan di antara pelajaran, membedakan anak yang sedang mengalami minggu yang buruk dari anak yang akan pergi, dan mengetahui kapan kamu harus bertindak.',
 sections:[
  {t:'', html:`<div class="card"><p>Ini adalah modul terpenting dalam pelatihan ini. Semua hal lainnya bergantung pada kemampuanmu untuk menyadarinya tepat waktu.</p></div>`},
  {t:'👁️ 1.1 · Apa yang perlu diperhatikan selama pelajaran', html:`
   <div class="card"><p>Ini adalah sinyal-sinyal dari siswa yang tidak bisa dilihat oleh siapapun selain kamu sebagai tutor mereka. Kamu tidak memerlukan laporan untuk membacanya — kamu hanya perlu memperhatikan.</p></div>
   <img src="Images/Image_4.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   ${iconGrid([
     {ic:'📷', html:`<strong>Kamera dimatikan</strong> dan tetap mati, padahal sebelumnya menyala. Ini tanda awal menarik diri yang paling umum — anak-anak yang akhirnya pergi hanya menyalakan kamera sekitar <strong>separuh</strong> waktu dibandingkan teman-teman sekelompoknya.`},
     {ic:'🎤', html:`<strong>Mikrofon tidak lagi digunakan</strong> sama sekali — kira-kira <strong>sepertiga</strong> waktu penggunaan mikrofon teman-temannya. Anak yang berhenti berbicara biasanya sudah berhenti merasa menjadi bagian dari grup.`},
     {ic:'💬', html:`<strong>Jawaban satu kata</strong>, padahal sebelumnya berupa kalimat. Jika ini sebuah perubahan, itu bukan rasa malu — perubahan adalah sinyal.`},
     {ic:'🖥️', html:`<strong>Berhenti membagikan layarnya</strong> saat kerja mandiri. Sering kali artinya “aku nggak mau kamu lihat aku lagi bingung” atau “aku belum mulai.”`},
     {ic:'📝', html:`<strong>Memulai tugas kelas tetapi tidak pernah menyelesaikannya</strong> — Sinyal paling jelas dari siswa yang tertinggal saat pelajaran`},
     {ic:'✋', html:`<strong>Mengangkat tangan dan tidak dipanggil</strong> — lalu berhenti mengangkatnya. <strong>Yang ini tanggung jawab kita.</strong>`},
     {ic:'⏰', html:`<strong>Datang terlambat, pulang lebih awal, atau keluar-masuk.</strong> Perhatiannya ada; komitmennya tidak.`},
     {ic:'😞', html:`<strong>Menjadi diam atau cepat frustrasi</strong> setelah membuat kesalahan, terutama jika ini perilaku baru.`},
     {ic:'⚡', html:`<strong>Selesai lebih awal lalu mengganggu.</strong> Ini juga masalah level — kebosanan terlihat persis pada siswa seperti ini`},
     {ic:'🔁', html:`<strong>Menanyakan pertanyaan dasar yang sama berulang-ulang.</strong> Kemungkinan levelnya tidak tepat — lihat Modul 5.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Kuncinya adalah membandingkan, bukan menilai.</strong> Tanda-Tanda diatas tidak berpengaruh jika hanya satu tapi jika terjadi berulang apalagi merupakan perilaku baru yang ditunjukan oleh siswa Semuanya menjadi berarti ketika <strong>berbeda dari kebiasaan anak itu</strong>, atau <strong>berbeda dari anggota grup lainnya di pelajaran yang sama.</strong></p>`)}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Tangan yang tak pernah dipanggil</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/12AOW3X9Vgm_cVzeOdjX5HN7Z2j-JV-lK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Dalam video ini, kamu akan melihat seorang siswa yang mencoba berkomunikasi dengan tutornya melalui chat, tetapi tutornya tampak tidak menyadarinya.</div></div>
  `},
  {t:'📅 1.2 · Apa yang perlu diperhatikan di antara pelajaran', html:`
   <div class="card"><p>Di antara pelajaran, kamu punya sesuatu yang bisa diperhatikan lebih jauh: catatan tentang apakah anak benar-benar mengerjakan tugasnya. Ada dua hal yang berbeda, dan <strong>keduanya penting.</strong></p></div>
   ${iconGrid([
     {ic:'🏫', html:`<strong>Tugas kelas (Di Kelas)</strong> — apa yang diselesaikan anak selama pelajaran berlangsung. Ini memberi tahu apakah ia bisa mengikuti <strong>saat kamu ada</strong>. Ketika ini turun, masalahnya ada pada tingkat kesulitan atau keterlibatan di kelas.`},
     {ic:'🏠', html:`<strong>PR (Di Rumah)</strong> — apa yang diselesaikan anak secara mandiri. Ini memberi tahu apakah kursus masih berarti baginya <strong>saat kamu tidak ada</strong>, dan apakah keluarganya mendukung. Inilah sinyal yang lebih sulit dan lebih jujur.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Pantau keduanya. Bertindaklah jika salah satunya bermasalah.</strong></p><p>Seorang anak bisa baik-baik saja dalam tugas kelas tetapi nol dalam PR — itu masalah motivasi dan dukungan keluarga. Seorang anak bisa mengerjakan PR tetapi gagal dalam tugas kelas — itu biasanya masalah kesulitan atau gangguan selama pelajaran. Salah satunya saja sudah cukup untuk bertindak. <strong>Jangan menunggu sampai keduanya gagal.</strong></p>`)}
   ${bigStat('47%',`Dari anak-anak yang akhirnya meminta pengembalian dana <strong>menghadiri kurang dari separuh</strong> pelajarannya. Kehadiran bukan formalitas — kehadiran adalah pernyataan paling jelas dari sebuah keluarga tentang apakah kursus ini masih penting bagi mereka.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Berdasarkan pola historis di berbagai grup; angka pastinya bisa berbeda di setiap wilayah.</p>
  `},
  {t:'🔎 1.3 · Kesalahan yang dilakukan hampir semua orang', html:`
   <div class="card"><p>Sebagian besar tutor mencari <strong>penurunan</strong> — momen ketika keadaan memburuk. Insting itu melewatkan sebagian besar kasus.</p></div>
   ${co('co-danger','🚨',`<p><strong>Jangan mencari penurunan. Carilah kekosongan.</strong></p>`)}
   ${bigStat('58.6%',`Dari kasus pengembalian dana memiliki PR yang <strong>datar, bukan menurun</strong> — anak itu sudah berhenti, atau memang tidak pernah benar-benar mulai. Tidak ada penurunan yang bisa disadari.`)}
   ${bigStat('56.9%',`Dari kasus memiliki tugas kelas yang <strong>menurun</strong> — itulah sebabnya tugas kelas sering menjadi sinyal yang terlihat lebih awal di antara keduanya.`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Berdasarkan pola historis di berbagai grup; angka pastinya bisa berbeda di setiap wilayah.</p>
  `},
  {t:'💔 1.4 · Mengapa tidak mengerjakan PR bisa memprediksi pengembalian dana', html:`
   <img src="Images/Image_6.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Hal ini perlu dipahami dengan jelas, karena mengubah seberapa mendesak kamu menanganinya.</p>
   <p>Anak yang tidak mengerjakan tugas akan tertinggal. Anak yang tertinggal merasa tersesat di pelajaran. Anak yang merasa tersesat di pelajaran tidak lagi ingin datang. Keluarga melihat anak yang tidak mau ikut kelas dan menyimpulkan: <em>“dia tidak tertarik”</em> atau <em>“kursus ini tidak cocok untuknya.”</em></p></div>
   ${co('co-idea','💡',`<p>Saat orang tua menggunakan kata-kata itu, mereka sedang menggambarkan sebuah spiral yang berawal dari <strong>tiga proyek yang tidak dikumpulkan.</strong> Tugas yang tidak dikerjakan bukan hanya gejala dari anak yang sudah memutuskan untuk pergi — itu juga bagian dari hal yang membuatnya memutuskan.</p>`)}
   ${co('co-idea','📌',`<p><strong>Jadi: serangkaian tugas kelas atau PR yang tidak dikerjakan sudah merupakan alasan yang cukup untuk bertindak.</strong> Bukan sekadar sesuatu untuk diawasi. Bukan sesuatu yang baru disampaikan jika keadaan memburuk. <strong>Bertindaklah.</strong></p>`)}
  `},
  {t:'🧩 1.5 · Tiga pola', html:`
   <div class="card"><p>Saat kamu meninjau kembali beberapa pelajaran terakhir seorang anak, kamu akan melihat salah satu dari tiga bentuk. Masing-masing memiliki arti berbeda, dan masing-masing membutuhkan respons yang berbeda.</p></div>
   ${patternCards([
     {ic:'🐌', title:'Kemunduran perlahan', desc:'Kehadiran dan tugas perlahan menurun selama beberapa pelajaran; makin banyak yang terlewat; kamera mati', note:'Menjauh secara klasik. <strong>Inilah yang bisa kamu perbaiki</strong> — makin cepat kamu bergerak, makin besar peluangnya. → Modul 3 dan 4'},
     {ic:'🧱', title:'Berhenti mendadak', desc:'Normal, normal, normal — lalu tidak ada apa-apa', note:'Sesuatu telah terjadi. Bentrok jadwal, sebuah kejadian, sesuatu di rumah. <strong>Tanyakan. Jangan berasumsi.</strong> → Modul 4'},
     {ic:'✅', title:'Terlibat tetapi tetap pergi', desc:'Hadir, berpartisipasi, tugas selesai — dan keluarga tetap meminta berhenti', note:'<strong>Penyebabnya bukan keterlibatan, dan bukan kamu.</strong> Motivasi tambahan tidak akan menyelesaikannya. <strong>Temukan alasan sebenarnya dan teruskan dengan cepat.</strong> → Modul 5 dan 6'}
   ])}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Siswa yang tidak pernah hadir</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RfFI5FTMg3DBHEiJtoG9DpJyjVoHFv74/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Salah satu kasus paling kritis, dan yang harus segera dilaporkan: siswa yang tidak pernah hadir sejak pelajaran pertama.</div></div>
  `},
  {t:'🚦 1.6 · Kapan kamu harus bertindak', html:`
   <div class="card"><p>Kamu tidak perlu yakin sepenuhnya. Kamu butuh ambang batas, supaya “aku tidak yakin” tidak lagi menjadi alasan untuk tidak melakukan apa pun.</p><p><strong>Bertindaklah minggu ini jika salah satu hal berikut terjadi:</strong></p></div>
   ${iconGrid([
     {ic:'📉', html:`Anak menghadiri <strong>kurang dari separuh</strong> pelajarannya`},
     {ic:'📊', html:`Tugas kelas atau PR <strong>jauh di bawah rata-rata grup</strong> — sebagai patokan, selisih 15 poin atau lebih`},
     {ic:'🤔', html:`Kehadirannya di tengah-tengah — belum hilang, tetapi tidak bisa diandalkan — <strong>dan</strong> salah satu kondisi di atas juga terjadi`},
     {ic:'0️⃣', html:`<strong>Dua pelajaran atau lebih berturut-turut</strong> tanpa ada yang dikumpulkan`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Dan bertindaklah segera, berapa pun angkanya, jika:</strong> anak berhenti berbicara atau muncul di kamera padahal sebelumnya biasa melakukannya · ia mencoba berpartisipasi dan kamu tidak sempat menanggapinya · ia memberi tahu bahwa ada sesuatu yang salah · kamu punya firasat buruk tentangnya. <strong>Penilaianmu juga dihitung sebagai sinyal.</strong></p>`)}
  `}
 ],
 ix:{
  title:'Kemunduran perlahan, berhenti mendadak, atau terlibat tetapi tetap pergi?',
  instr:'Untuk setiap riwayat progres anonim, pilih pola yang sesuai — lalu pilih langkah pertama yang tepat. 70% untuk membuka Modul 2.',
  items:[
   {type:'choice', prompt:'Kehadiran dan tugas kelas seorang anak sama-sama menurun diam-diam selama lima pelajaran terakhir, sedikit demi sedikit setiap kali, dan kameranya mati di dua pelajaran terakhir.', opts:['Kemunduran perlahan','Berhenti mendadak','Terlibat tetapi tetap pergi'], correct:0, fb:'Ini adalah kemunduran perlahan — menjauh secara klasik, dan yang paling mungkin bisa kamu balikkan makin cepat kamu bergerak.'},
   {type:'choice', prompt:'Seorang anak benar-benar normal di pelajaran terakhir — hadir penuh, kamera menyala, PR selesai — lalu minggu ini ia tidak muncul sama sekali, tanpa pesan.', opts:['Kemunduran perlahan','Berhenti mendadak','Terlibat tetapi tetap pergi'], correct:1, fb:'Ini adalah berhenti mendadak. Sesuatu telah terjadi — tanyakan, jangan berasumsi.'},
   {type:'choice', prompt:'Seorang anak menghadiri setiap pelajaran, berpartisipasi, dan mengumpulkan semua tugasnya — dan keluarganya baru saja meminta untuk berhenti.', opts:['Kemunduran perlahan','Berhenti mendadak','Terlibat tetapi tetap pergi'], correct:2, fb:'Terlibat tetapi tetap pergi. Penyebabnya bukan keterlibatan — melainkan hal seperti level, ekspektasi, jadwal, atau keadaan. Motivasi tambahan tidak akan menyelesaikannya; temukan alasan sebenarnya dan teruskan.'},
   {type:'choice', prompt:'Untuk “kemunduran perlahan”, apa langkah pertama yang tepat?', opts:['Menunggu beberapa pelajaran lagi untuk memastikan itu benar-benar sebuah pola','Bertindak sekarang — inilah yang paling mungkin berbalik makin cepat kamu bergerak','Menganggapnya sementara dan memeriksa lagi bulan depan'], correct:1, fb:'Kemunduran perlahan justru bisa dibalikkan oleh tindakan yang lebih awal. Menunggu berarti membuang keunggulan yang kamu miliki.'},
   {type:'choice', prompt:'Untuk “berhenti mendadak”, apa langkah pertama yang tepat?', opts:['Menganggapnya bukan apa-apa dan menunggu ia kembali dengan sendirinya','Bertanya — cari tahu apa yang sebenarnya terjadi, bukan menebak-nebak','Langsung memberi tahu keluarga bahwa anaknya tertinggal'], correct:1, fb:'Berhenti mendadak punya penyebab yang spesifik. Cari tahu penyebabnya sebelum memutuskan apa yang harus dilakukan.'},
   {type:'choice', prompt:'Untuk “terlibat tetapi tetap pergi”, apa langkah pertama yang tepat?', opts:['Memberi anak pujian dan semangat ekstra agar ia tetap termotivasi','Mencari tahu alasan sebenarnya — level, ekspektasi, jadwal, keadaan — dan meneruskannya dengan cepat','Menyimpulkan tidak ada yang bisa dilakukan karena anaknya sudah berprestasi baik'], correct:1, fb:'Motivasi tambahan tidak bisa menyelesaikan penyebab yang sejak awal tidak berkaitan dengan motivasi. Cari tahu apa sebenarnya penyebabnya dan sampaikan dengan cepat kepada orang yang tepat.'}
  ]
 }
},
{id:'m2', numLabel:'Modul 2', emoji:'🖥️', color:'var(--blue)',
 title:'Membaca Tampilan Progres',
 desc:'Cari tahu, dalam waktu kurang dari dua menit, apakah ada anak di grupmu yang mulai menjauh — secara langsung, dalam simulasi BO.',
 obj:'Mencari tahu, dalam waktu kurang dari dua menit, apakah ada anak di grupmu yang mulai menjauh — dan memeriksa dua hal yang selalu perlu kamu ketahui sebelum pelajaran pertamamu dengan siswa baru.',
 sections:[
  {t:'👤 2.1 · Sebelum pelajaran pertamamu dengan siswa baru — selalu', html:`
   <div class="card"><p>Salah satu langkah terpenting sebelum memulai grup baru — dan langkah yang bisa mencegah banyak masalah di kemudian hari — adalah meninjau profil siswa dan komentar dari CS.</p></div>
   ${iconGrid([
     {ic:'🎂', html:`<strong>Kesesuaian usia.</strong> Apakah usia anak sesuai dengan kursus tempat ia ditempatkan.`},
     {ic:'🎯', html:`<strong>Minat.</strong> Apa yang disukai anak ini — berguna untuk contoh dan obrolan ringan sejak pelajaran pertama.`},
     {ic:'📝', html:`<strong>Catatan dari orang tua atau tutor sebelumnya.</strong> Terutama jika anak pindah dari grup lain.`}
   ])}
   ${co('co-idea','💡',`<p>Informasi ini membantumu memahami cara terhubung dengan setiap siswa, serta mengenali potensi masalah atau meminta perubahan <strong>bahkan sebelum grup dimulai.</strong></p>`)}
   <div class="card"><p>Dalam simulasi berikut, kamu akan belajar cara meninjau informasi ini di BO dan menggunakannya untuk mempersiapkan grup barumu.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Profil siswa</span><iframe src="Simulacion_BO_M2_Profile_ID.html" title="BO — Profil siswa" loading="lazy"></iframe></div></div>
  `},
  {t:'📊 2.2 · Tampilan Progres — pemeriksaan mingguan 60 detikmu', html:`
   <div class="card"><p>Di bawah ini adalah tampilan persis layar Progres. Ikuti langkah-langkah dalam simulasi untuk mempelajari di mana letak tugas kelas dan PR, apa arti setiap warna, dan cara membaca polanya.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Progres</span><iframe src="Simulacion_BO_M2_Progress_ID.html" title="BO — Progres" loading="lazy"></iframe></div></div>
   ${co('co-danger','🚨',`<p>Lihat apa yang ditunjukkan layar siswa ini: nilai <strong>Di Kelas</strong> yang tinggi dan berwarna hijau — tetapi setiap sel <strong>Di Rumah</strong> berwarna oranye, “belum dikumpulkan.” <strong>Siswa yang sama, pelajaran yang sama, cerita yang berlawanan.</strong> Ia baik-baik saja selama kamu mengawasinya; kursus tidak lagi berarti baginya begitu kamu tidak ada.</p>`)}
   <div class="card"><h4>Cara membacanya dalam waktu kurang dari satu menit</h4>
   <ol><li><strong>Cari deretan nol.</strong> <strong>Dua kali berturut-turut sudah cukup untuk bertindak.</strong> Deretan berturut-turut adalah hal paling kuat di layar ini — jauh lebih informatif daripada satu sel mana pun.</li>
   <li><strong>Bandingkan kedua tab untuk anak yang sama.</strong> Di Kelas tinggi, Di Rumah kosong → ia bersamamu saat pelajaran, tetapi kursus tidak lagi berarti di rumah. Di Kelas rendah, Di Rumah cukup baik → ada sesuatu di pelajaran yang tidak berjalan: tingkat kesulitan, tempo, atau perhatian.</li>
   <li><strong>Bandingkan anak dengan anggota grup lainnya.</strong> Angka yang sama memiliki arti berbeda tergantung apakah semua anak berada di 30/50 atau hanya anak ini saja.</li>
   <li><strong>Lihat di mana deretan itu dimulai.</strong> Di pelajaran mana ia dimulai? Kembali ke apa yang terjadi di sana — biasanya jawabannya ada di situ.</li>
   <li><strong>Periksa kehadiran bersamaan dengannya.</strong> Yang kamu lihat di sini adalah kehadiran yang tercatat di Back Office, bukan kehadiran nyata selama pelajaran — bacalah sebagai “apakah ia datang”, bukan “seberapa terlibat ia”.</li></ol></div>
   ${co('co-danger','🚨',`<p><strong>Lakukan ini seminggu sekali, untuk seluruh grup, bukan hanya untuk anak yang sedang kamu khawatirkan.</strong> Tujuan pemeriksaan adalah menemukan anak yang <em>belum</em> kamu sadari.</p>`)}
   ${co('co-idea','🧭',`<p><strong>Mengajar kursus yang PR atau tugas kelasnya dikerjakan di luar platform?</strong> Tampilan Progres tidak akan menunjukkan sesuatu yang berguna — tetapi yang hilang adalah catatannya, bukan informasinya. Lakukan dengan mandiri, bukan otomatis: minta anak-anak menunjukkan pekerjaan mereka lewat berbagi layar, sering-seringlah mengecek mereka selama kerja mandiri, berikan PR secara jelas dan lisan, lalu tindak lanjuti dengan menyebut nama mereka di pelajaran berikutnya. Sinyalnya sama, ambang batasnya sama — hanya saja kamu harus mencarinya sendiri.</p>`)}
  `}
 ],
 ix:{
  title:'Membaca pemeriksaan — uji singkat',
  instr:'Berdasarkan contoh BO di atas, jawab pertanyaan berikut. 70% untuk membuka Modul 3.',
  items:[
   {type:'choice', prompt:'Pada contoh di atas, nilai Di Kelas siswa ini tetap tinggi (hijau), sedangkan Di Rumah berstatus “belum dikumpulkan” (oranye) di setiap pelajaran. Apa kemungkinan besar artinya?', opts:['Masalah PR/motivasi — kursus tidak lagi berarti saat tutor tidak mengawasi','Masalah tugas kelas/kesulitan di dalam pelajaran itu sendiri','Tidak ada — satu tab yang rendah tidak masalah jika tab lainnya baik'], correct:0, fb:'Di Kelas yang tinggi dengan Di Rumah yang kosong mengarah pada motivasi atau dukungan keluarga di rumah, bukan kesulitan di pelajaran.'},
   {type:'choice', prompt:'Jika kebalikannya — Di Kelas turun mendekati nol sementara Di Rumah tetap cukup baik — apa kemungkinan besar artinya?', opts:['Masalah PR/motivasi di rumah','Masalah tugas kelas/kesulitan — tempo, tingkat kesulitan, atau kurang mendapat perhatian di pelajaran','Siswa ini sebenarnya baik-baik saja, karena masih mengerjakan PR'], correct:1, fb:'PR yang tetap terjaga sementara tugas kelas menurun biasanya mengarah pada sesuatu di dalam pelajaran — tingkat kesulitan, tempo, atau perhatian.'},
   {type:'choice', prompt:'Apa satu hal paling penting yang perlu dicari saat memeriksa tampilan Progres?', opts:['Satu nilai terendah di mana pun dalam tabel','Deretan dua nol atau lebih (atau “belum dikumpulkan”) secara berturut-turut','Apakah total modul terlihat seperti angka bulat'], correct:1, fb:'Deretan berturut-turut jauh lebih informatif daripada satu sel rendah mana pun — itulah sinyal paling tajam di seluruh layar.'},
   {type:'choice', prompt:'Mengapa kamu perlu memeriksa Di Kelas dan Di Rumah untuk setiap anak, setiap minggu — bukan hanya anak yang sudah kamu khawatirkan?', opts:['Karena tujuan pemeriksaan mingguan adalah menemukan anak yang belum kamu sadari','Karena itu kewajiban administratif, bukan karena menemukan hal baru','Karena Di Rumah lebih penting daripada Di Kelas, jadi hanya itu yang layak diperiksa'], correct:0, fb:'Pemeriksaan hanya bernilai jika berhasil memunculkan anak yang belum masuk radarmu.'},
   {type:'choice', prompt:'Sebelum pelajaran pertamamu dengan siswa baru, apa yang selalu perlu kamu periksa?', opts:['Tidak ada — kamu akan tahu apa yang perlu diketahui sambil mengajarnya','Kolom Info dan Komentar di profil siswa','Hanya catatan kehadirannya dari tutor sebelumnya'], correct:1, fb:'Dua menit untuk membaca Info dan Komentar sebelum pelajaran pertama adalah kebiasaan paling murah dan paling bernilai dalam pelatihan ini.'}
  ]
 }
},
{id:'m3', numLabel:'Modul 3', emoji:'🎬', color:'var(--blue)',
 title:'Bertindak di Dalam Pelajaran',
 desc:'Gunakan pelajaran itu sendiri sebagai intervensi — keterlibatan adalah alat tercepat yang kamu miliki.',
 obj:'Menggunakan pelajaran itu sendiri sebagai intervensi — karena kelas virtual, opsional, dan di luar jam sekolah hanya akan didatangi lagi oleh anak jika ia menemukan sesuatu yang layak untuk didatangi kembali.',
 sections:[
  {t:'🔌 3.1 · Mengapa keterlibatan lebih berbobot di sini', html:`
   <div class="card"><p>Siswa kita tidak wajib hadir seperti di sekolah. Mereka ada di rumah, dengan semua gangguan hanya sejauh satu klik, dan tanpa kehadiran fisik yang menjaga perhatian di ruang kelas sungguhan. <strong>Hubungan yang kamu bangun di setiap pelajaran bukan sekadar nilai tambah — itulah alasan seorang anak memutuskan untuk kembali minggu depan.</strong></p>
   <p>Dan ketika seorang anak mulai menjauh, pelajaran adalah alat tercepatmu. Kamu tidak perlu menunggu izin siapa pun untuk mengubah cara kamu menjalankannya.</p></div>
  `},
  {t:'👋 3.2 · Menit-menit pertama sangat menentukan', html:`
   <div class="card"><p>Cara sebuah pelajaran dimulai menentukan suasana untuk semua yang terjadi setelahnya. Anak yang masuk dan merasakan kehangatan dari sapaanmu berada dalam suasana hati yang berbeda dari anak yang langsung disodori “buka aktivitasnya.”</p></div>
   ${doavoid(
     ['Sapa dengan energi yang tulus: <em>“senang sekali bertemu kamu hari ini”</em>','Ajukan pertanyaan singkat dan personal sebelum masuk ke materi','Sampaikan tujuan hari ini, dan ucapkan dengan sungguh-sungguh','Sebutkan dengan jelas siapa yang sempat absen: <em>“senang kamu kembali”</em>'],
     ['Langsung masuk ke materi tanpa sapaan','Terdengar terburu-buru atau tegang di awal','Tidak menjelaskan apa yang akan dilakukan, atau alasannya','Membiarkan anak yang kembali masuk begitu saja tanpa disapa']
   )}
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Pembukaan yang datar</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1GyQV2tEQq3OuDPfFI0NZTQRjWhg_9Rri/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Pembukaan yang hangat</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1RqXcQLKBiWEhV97ZasJGIFuJhB8yU0Dh/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'💬 3.3 · Umpan balik yang memotivasi, bukan sekadar mengoreksi', html:`
   <div class="card"><p>Pujian umum yang diulang-ulang — <em>“bagus”, “keren”</em> — membuat siswa bosan, dan membuat mereka berpikir bahwa: bahwa kamu tidak benar-benar melihat hasil kerja anak itu.</p></div>
   ${co('co-idea','🔁',`<p><strong>Sorot → Tanyakan → Aktifkan</strong></p>
   <ol><li><strong>Sorot</strong> sesuatu yang spesifik yang <em>diputuskan</em> oleh anak, dan katakan mengapa itu berhasil.</li>
   <li><strong>Tanyakan</strong> tentang hal itu dengan rasa ingin tahu yang tulus, perlakukan ia sebagai pihak yang paling tahu tentang karyanya sendiri.</li>
   <li><strong>Aktifkan</strong> dengan menawarkan pilihan nyata tentang langkah berikutnya.</li></ol>
   <p>Alih-alih <em>“Kerja bagus!”</em> → <em>“Aku suka kamu bikin karakternya melompat tepat di situ — kamu sudah merencanakannya dari awal, atau idenya muncul waktu kamu sedang membangun adegannya? Kamu mau memberi karakter ini sebuah cerita, atau menurutmu sudah selesai seperti ini?”</em></p>`)}
  `},
  {t:'✋ 3.4 · Memastikan setiap anak mendapat giliran yang adil', html:`
   <div class="card"><p>Anak-anak kembali karena mereka menemukan tempat di mana mereka merasa dilihat dan menjadi bagian dari sesuatu. Dan cara tercepat kehilangan seorang anak adalah ketika ia mencoba berpartisipasi tetapi tidak mendapat tanggapan apa pun.</p></div>
   ${co('co-danger','🚨',`<p><strong>“Bagi perhatianmu secara bergiliran” saja tidak cukup.</strong> Setiap tutor merasa sudah melakukannya. <strong>Buatlah bisa dihitung.</strong></p>
   <ul><li>Letakkan daftar peserta di tempat yang bisa kamu lihat, dan <strong>centang setiap nama saat anak itu mendapat giliran nyata</strong> — bukan sekadar lirikan, tetapi interaksi sungguhan.</li>
   <li><strong>Di pertengahan pelajaran, periksa siapa yang belum dicentang.</strong> Datangi mereka berikutnya.</li>
   <li>Gunakan chat dan reaksi sebagai alat interaksi, bukan hanya basa-basi: <em>“tulis idemu di chat, nanti aku bacakan semuanya.”</em></li>
   <li><strong>Siapa pun yang mengakhiri pelajaran dengan pertanyaan yang belum terjawab akan mendapat jawaban tertulis dalam 24 jam.</strong></li>
   <li>Jika grupnya memang terlalu besar sehingga hal ini mustahil secara hitungan, <strong>sampaikan kepada Team Leader-mu.</strong> Itu sinyal untuk ditinjau lebih jauh bukan kegagalan tutor</li></ul>`)}
   ${doavoid(
     ['Sebutkan keberhasilan yang spesifik: <em>“Sofia, logikamu rapi sekali di bagian itu”</em>','Gunakan chat dan reaksi agar anak yang paling pendiam pun bisa ikut serta','Rayakan usahanya: <em>“kamu sudah mencoba tiga cara — itu cara berpikir seorang programmer”</em>','Hampiri anggota grup satu per satu selama kerja mandiri'],
     ['Pujian umum yang ditujukan sama rata ke seluruh grup','Hanya memperhatikan siapa yang selesai paling dulu','Menganggap kesalahan sebagai hal buruk, atau memberi jawaban sebelum mereka sempat berpikir','Tempo yang sama untuk semua, sehingga sebagian bosan dan sebagian lagi terburu-buru']
   )}
  `},
  {t:'🧩 3.5 · Saran yang sama tidak berhasil untuk setiap anak', html:`
   <div class="card"><p>Dua anak yang terjebak di latihan yang sama bisa membutuhkan hal yang berlawanan darimu. Mengenali beberapa pola, dan menyiapkan langkah berbeda untuk masing-masing, itulah yang mengubah pelajaran biasa menjadi pelajaran yang benar-benar ingin dihadiri setiap anak.</p></div>
   ${patternCards([
     {ic:'🙈', title:'Pemalu', desc:'Kamera menyala tetapi jarang berbicara; jawaban singkat; tidak pernah menawarkan diri; mengkerut saat ditunjuk mendadak', note:'Awali dengan cara ikut serta yang minim tekanan — chat, reaksi, jempol. Ajak ia <strong>secara langsung dan pribadi</strong>.'},
     {ic:'😣', title:'Mudah frustrasi', desc:'“Aku nggak bisa” cepat muncul; menyerah di kesalahan pertama; terlihat kesal karena kesalahan kecil', note:'Langkah yang lebih kecil. Sampaikan dengan lantang bahwa salah itu wajar. Tanyakan kabarnya <strong>sebelum</strong> frustrasinya menumpuk.'},
     {ic:'🎯', title:'Perfeksionis', desc:'Mengulang hal yang sama berkali-kali; enggan mengumpulkan sesuatu yang “belum selesai”', note:'Puji keputusan dan usahanya. Beri izin yang jelas untuk mengumpulkan draf yang belum sempurna.'},
     {ic:'⚡', title:'Cepat bosan', desc:'Selesai dengan cepat; mengganggu setelah selesai; “cuma ini?”', note:'Tantangan tambahan yang nyata, selalu siap. Pertimbangkan peran mentor. <strong>Jangan pernah biarkan ia menganggur.</strong>'}
   ],2)}
  `},
  {t:'🎂 3.6 · Apa yang memotivasi berubah seiring usia', html:`
   <div class="two-col">
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧒</span>Anak yang lebih kecil (sekitar 6–9)</h4>
   <ul><li>Motivasi datang dari kedekatan dan bermain, bukan dari tujuan jangka panjang.</li>
   <li>Rentang perhatian mereka pendek. Energimu lebih menahan perhatian mereka daripada materinya.</li>
   <li>Bingkai imajinatif berhasil — sebuah misi, sebuah karakter, sebuah cerita.</li>
   <li>Minat khusus mereka adalah jalur langsung menuju perhatian mereka.</li>
   <li>Kesalahan terasa lebih besar secara emosional. Mereka perlu ditenangkan saat itu juga.</li>
   <li>Mereka butuh lebih banyak pengulangan dan contoh langsung sebelum mencoba sendiri.</li></ul></div>
   <div class="card"><h4><span style="font-size:34px;vertical-align:middle;margin-right:10px;line-height:1">🧑</span>Anak yang lebih besar (sekitar 10–14+)</h4>
   <ul><li>Motivasi bergeser ke kompetensi dan relevansi — serta memahami <em>mengapa</em> hal itu penting.</li>
   <li>Peka terhadap sikap menggurui. Diperlakukan sebagai orang yang mampu adalah hal terpenting.</li>
   <li>Umpan balik tentang <strong>penalaran dan keputusan</strong> mereka lebih penting daripada pujian atas usaha saja.</li>
   <li>Dinamika sosial lebih berpengaruh — teman sebaya memengaruhi apakah mereka berani bertanya.</li>
   <li>Bisa fokus lebih lama, tetapi cepat kehilangan minat jika temponya lambat atau terasa kekanak-kanakan.</li>
   <li>Otonomi penting — memberi pilihan dalam cara mengerjakan tugas akan membuahkan hasil.</li></ul></div>
   </div>
   ${co('co-idea','💡',`<p>Alatnya sama di setiap usia — awal yang hangat, umpan balik yang spesifik, ruang untuk ikut serta. Yang berubah adalah <strong>apa yang dianggap memotivasi</strong>: anak yang lebih kecil perlu merasa ini menyenangkan dan bahwa mereka berarti; anak yang lebih besar perlu merasa ini sepadan dengan waktu mereka dan bahwa mereka memang mahir.</p>`)}
  `},
  {t:'🔧 3.7 · Saat teknologi bermasalah', html:`
   <div class="card"><p>Akan ada saatnya sesuatu rusak — layar membeku, mikrofon tidak tersambung. Yang menentukan apakah hal itu merusak pelajaran bukan masalah teknisnya tapi bagaimana tutor menanganinya</p></div>
   ${co('co-cute','🫂',`<p><strong>Langkah pertama bersifat emosional, bukan teknis.</strong> Bereaksilah dengan tenang dan sampaikan dengan lantang bahwa ini hal yang wajar. Orang dewasa yang tenang memberi tahu anak bahwa tidak ada yang perlu dikhawatirkan, dan grup mengikuti suasana emosimu. Baru setelah suasana tenang, memperbaiki masalah teknisnya menjadi masuk akal.</p>`)}
  `}
 ],
 ix:{
  title:'Sampah atau harta karun — kebiasaan saat pelajaran',
  instr:'Kelompokkan setiap kebiasaan ke zona yang tepat: kebiasaan yang membangun pelajaran yang ingin didatangi kembali oleh anak-anak, atau kebiasaan yang diam-diam membuatmu kehilangan seorang anak. 70% untuk membuka Modul 4.',
  items:[
   {type:'sort', prompt:'', card:'Mencentang nama setiap anak saat ia mendapat giliran nyata, dan memeriksa di pertengahan pelajaran siapa yang belum mendapat giliran', zones:[{label:'🌱 Membangun pelajaran', fb:'Benar — inilah yang mengubah “bagi perhatianmu secara bergiliran” dari sekadar niat menjadi sesuatu yang nyata.'},{label:'🗑️ Membuatmu kehilangan anak', fb:'Belum tepat — melacak giliran nyata adalah kebiasaan harta karun, bukan sampah.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Memuji seluruh grup dengan kalimat yang sama, “kerja bagus, semuanya!”, di akhir setiap pelajaran', zones:[{label:'🌱 Membangun pelajaran', fb:'Belum tepat — pujian umum yang diulang-ulang justru jenis kebiasaan yang diam-diam berhenti memotivasi.'},{label:'🗑️ Membuatmu kehilangan anak', fb:'Benar — pujian umum yang diulang cepat kehilangan kekuatannya dan terkesan tidak benar-benar melihat hasil kerja.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Saat terjadi masalah teknis, bereaksi dengan tenang dan menyampaikan dengan lantang bahwa itu wajar sebelum memperbaikinya', zones:[{label:'🌱 Membangun pelajaran', fb:'Benar — langkah pertama setelah gangguan teknis adalah mengelola emosi, bukan perbaikannya.'},{label:'🗑️ Membuatmu kehilangan anak', fb:'Belum tepat — tetap tenang dan menganggap gangguan itu wajar justru langkah pertama yang tepat.'}], correctZone:0, fb:''},
   {type:'sort', prompt:'', card:'Memberi setiap anak di grup tempo yang persis sama dan tugas yang persis sama, apa pun perkembangannya', zones:[{label:'🌱 Membangun pelajaran', fb:'Belum tepat — satu tempo tetap untuk seluruh grup itulah yang membuat sebagian bosan dan sebagian terburu-buru.'},{label:'🗑️ Membuatmu kehilangan anak', fb:'Benar — tempo yang sama untuk semua membuat sebagian bosan dan sebagian terburu-buru; ini salah satu pemicu paling jelas anak tidak terlibat.'}], correctZone:1, fb:''},
   {type:'sort', prompt:'', card:'Membiarkan pertanyaan di chat tidak terjawab karena waktu pelajaran habis', zones:[{label:'🌱 Membangun pelajaran', fb:'Belum tepat — pertanyaan yang dibiarkan menggantung adalah salah satu cara paling jelas bagi anak untuk menyimpulkan bahwa ia tidak berarti di sini.'},{label:'🗑️ Membuatmu kehilangan anak', fb:'Benar — siapa pun yang mengakhiri pelajaran dengan pertanyaan yang belum terjawab harus mendapat jawaban tertulis dalam 24 jam.'}], correctZone:1, fb:''}
  ]
 }
},
{id:'m4', numLabel:'Modul 4', emoji:'📞', color:'var(--blue)',
 title:'Bertindak di Antara Pelajaran',
 desc:'Obrolan empat mata yang benar-benar berhasil, tindak lanjut ketidakhadiran, dan menjaga keluarga tetap mendapat kabar.',
 obj:'Melakukan hal-hal di antara pelajaran yang mencegah siswa mengajukan pengembalian dana: obrolan empat mata, tindak lanjut ketidakhadiran, dan menjaga keluarga tetap mendapat kabar.',
 sections:[
  {t:'🏠 4.1 · Rutinitas PR yang benar-benar berhasil', html:`
   <div class="card"><p>PR tidak terus dikumpulkan secara kebetulan. Empat kebiasaan kecil, setiap kali, itulah yang mencegahnya diam-diam turun ke nol.</p></div>
   ${stepFlow([
     {ic:'🗣️', label:'1. Jelaskan — apa tugasnya dan mengapa penting, secara lisan'},
     {ic:'⏰', label:'2. Ingatkan — pesan pengingat sebelum tenggat'},
     {ic:'🔦', label:'3. Sorot — sebutkan apa yang belum ada, secara spesifik'},
     {ic:'📝', label:'4. Tinjau — komentar sungguhan, bukan sekadar nilai'}
   ])}
   ${iconGrid([
     {ic:'🗣️', html:`<strong>Jelaskan.</strong> Saat memberikannya, sampaikan apa tugasnya dan mengapa penting untuk pelajaran berikutnya — bukan sekadar “kerjakan latihan 1 sampai 5.”`},
     {ic:'⏰', html:`<strong>Ingatkan.</strong> Pengingat singkat sebelum tenggat, terutama untuk anak yang lebih kecil — lewat pesan, atau sejenak di akhir pelajaran sebelumnya.`},
     {ic:'🔦', html:`<strong>Sorot.</strong> Jika belum dikumpulkan, sampaikan secara spesifik dan dengan menyebut nama di pelajaran berikutnya — bukan kalimat umum seperti “beberapa dari kalian belum mengerjakan PR.”`},
     {ic:'📝', html:`<strong>Tinjau.</strong> Tinggalkan <strong>komentar sungguhan yang bisa dibaca keluarga</strong> — apa yang sudah baik, apa yang belum, dan satu langkah konkret berikutnya. Tanda centang tanpa kata-kata tidak memberi tahu siapa pun apa-apa.`}
   ])}
   ${co('co-idea','💡',`<p>Inilah rutinitasnya, setiap minggu, untuk setiap anak — bukan hanya untuk mereka yang sudah kamu khawatirkan. Rutinitas ini juga yang membuat penurunan benar-benar penting saat kamu melihatnya: kamu tahu itu bukan karena tidak ada yang menjelaskan, mengingatkan, atau menyadarinya.</p>`)}
  `},
  {t:'☎️ 4.2 · Obrolan empat mata yang benar-benar berhasil', html:`
   <div class="card"><p>Saat kamu melihat salah satu sinyal dari Modul 1, inilah langkahnya. Jika dilakukan dengan baik, sering kali masalahnya selesai dengan sendirinya.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Sebutkan hal spesifik yang kamu perhatikan.</strong> Kekhawatiran yang ambigu akan terdengar rancu <em>“Kamu belum sempat mengerjakan dua proyek terakhir”</em> — bukan <em>“semuanya baik-baik saja?”</em>`},
     {ic:'🚧', html:`<strong>Tanyakan hambatannya, bukan sikapnya.</strong> <em>“Apa yang menghalangimu?”</em> — bukan <em>“kenapa kamu tidak berusaha?”</em> Yang pertama mengundang jawaban; yang kedua mengundang pembelaan diri.`},
     {ic:'🤫', html:`<strong>Jangan pernah di depan grup.</strong> Pesan pribadi, chat, atau menit terakhir pelajaran saat berdua saja.`}
   ])}
   ${co('co-idea','💡',`<p>Lalu <strong>tindak lanjuti dua pelajaran kemudian</strong>, apa pun yang terjadi. Obrolan empat mata yang tidak ditindaklanjuti mengajarkan anak bahwa kamu menyadarinya, tetapi tidak benar-benar peduli.</p>`)}
   <div class="card"><p>Salah satu cara untuk mengembalikan siswa yang kehilangan motivasi adalah melalui peninjauan PR — dan <strong>cara</strong> kita melakukannya. Dalam dua video di bawah ini, saksikan dua kasus yang sangat berbeda: satu di mana tutor mengabaikan siswa yang tidak mengerjakan PR, dan satu lagi di mana tutor mengajak siswa itu kembali terlibat secara dinamis, membuatnya merasa menjadi bagian dari grup.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Tutor yang tidak memotivasi</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1zwbSiLXBj9mcqhKsFKNJriwSppbcEY5B/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Tutor yang memotivasi</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1m2m_RRNTf5zMh2-1NmExvEMGZX0DPIaK/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div></div>
  `},
  {t:'📵 4.3 · Saat seorang anak tidak hadir', html:`
   <div class="card"><p>Mengirim rekaman bukanlah rencana untuk mengejar ketertinggalan. <strong>Dua pelajaran yang terlewat di awal kursus bisa membuat siswa berhenti</strong>, karena anak kembali ke kelas di mana semua orang bisa melakukan sesuatu yang tidak bisa ia lakukan — di depan grup.</p></div>
   ${timeline([
     {ic:'📅', label:'Di hari yang sama', items:[
       '<strong>Tulis pesan kepada keluarga</strong>, kehangatan lebih dulu: <em>“kami kangen dia hari ini — semuanya baik-baik saja?”</em> Empati sebelum hal lainnya.',
       '<strong>Kirim rekaman beserta satu hal yang paling penting.</strong> Bukan “tonton satu jam penuh” — tunjukkan satu bagian yang penting.'
     ]},
     {ic:'⏳', label:'Sebelum pelajaran berikutnya', items:[
       '<strong>Lima menit secara empat mata</strong>, atau penjelasan tertulis singkat tentang satu konsep yang ia butuhkan untuk bergabung kembali — satu konsep, bukan seluruh pelajaran.'
     ]},
     {ic:'🏫', label:'Di pelajaran berikutnya', items:[
       '<strong>Beri ia keberhasilan awal yang mudah dan terlihat</strong>, supaya ia kembali dengan perasaan mampu, bukan tertinggal.',
       '<strong>Tunjukkan bahwa kamu menyadari ia sempat absen</strong> — singkat dan hangat. Merasa dirindukan itulah intinya.'
     ]},
     {ic:'🚩', label:'Jika ia sudah absen dua kali atau lebih', items:[
       '<strong>Beri tahu Team Leader-mu, dan tinggalkan komentar di BO agar CS juga bisa melihatnya.</strong> Inilah ambang batas untuk membahas pelajaran pengganti tambahan secara internal. Kamu yang mengangkatnya — kamu tidak menawarkannya kepada keluarga, dan juga tidak menolaknya.'
     ]}
   ])}
  `},
  {t:'💌 4.4 · Menjaga keluarga tetap bersamamu', html:`
   <img src="Images/Image_3.png" alt="" style="display:block;width:100%;border-radius:var(--r);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Sebagian besar keluarga yang pergi tidak pernah mendengar kabar baik apa pun. Mereka mendengar dari kita saat pendaftaran, lalu tidak lagi sampai muncul masalah.</p></div>
   ${checkbox([
     `<strong>Tulis sesuatu yang spesifik setelah pelajaran yang berjalan baik.</strong> Sekali saja. Tidak perlu panjang: <em>“hari ini dia berhasil memahami perulangan sendiri — saya ingin Bapak/Ibu tahu.”</em> Kebiasaan sederhana ini mengubah cara keluarga menanggapi semua hal yang datang sesudahnya.`,
     `<strong>Saat seorang anak kembali setelah absen atau mengalami kesulitan, ceritakan keberhasilannya kepada keluarga.</strong>`,
     `<strong>Jika kamu sudah menyampaikan sesuatu secara internal, beri tahu keluarga bahwa kamu sudah menyampaikannya</strong> — dan kira-kira kapan mereka akan mendapat kabar. Diam setelah ada masalah menimbulkan masalah yang lebih besar.`,
     `<strong>Bersiaplah menjawab pertanyaan tentang proses belajar siswa.</strong> Orang tua yang ingin membicarakan perkembangan anaknya harus mendapatimu responsif.`
   ])}
   ${co('co-danger','⛔',`<p><strong>Dan tetap: bicarakan tentang belajar, serahkan tindakannya.</strong> Tidak ada janji tentang grup, jadwal, level, paket, pengembalian dana, atau pelajaran tambahan — semua itu bukan wewenangmu untuk diberikan, ataupun ditolak.</p>`)}
  `}
 ],
 ix:{
  title:'Pilih pesannya',
  instr:'Untuk setiap skenario, pilih pesan yang tepat. 70% untuk membuka Modul 5.',
  items:[
   {type:'choice', prompt:'<strong>Skenario:</strong> seorang anak tidak mengumpulkan apa pun dalam dua pelajaran terakhir, tetapi masih hadir seperti biasa. Pesan mana untuk <strong>anak</strong> yang tepat di sini?', opts:[
     '“Semuanya baik-baik saja? Kamu kelihatan agak beda belakangan ini.”',
     '“Kamu belum mengumpulkan dua proyek terakhir, dan itu nggak seperti biasanya — apa yang menghalangimu?”',
     '“Kenapa kamu tidak mengerjakan tugasmu? Kamu harus bisa mengikuti.”'
   ], correct:1, fb:'Menyebutkan hal spesifik yang kamu perhatikan, dan menanyakan hambatannya alih-alih sikapnya, itulah yang benar-benar membuka percakapan, bukan mengundang pembelaan diri atau sikap acuh.'},
   {type:'choice', prompt:'<strong>Skenario yang sama:</strong> anak tidak mengumpulkan apa pun selama dua pelajaran, dan masih hadir seperti biasa. Pesan mana untuk <strong>keluarga</strong> yang tepat?', opts:[
     '“Saya perhatikan [anak] belum mengumpulkan tugas dalam dua pelajaran terakhir — saya sudah mengobrol dengannya dan ingin memberi kabar kepada Bapak/Ibu.”',
     '“[Anak] tidak berusaha dan mungkin perlu pindah ke grup yang lebih mudah — bisakah kita membahas pilihannya?”',
     '“Semuanya baik-baik saja, saya cuma ingin menyapa!”'
   ], correct:0, fb:'Pesan ini memberi tahu keluarga tentang perkembangan anak dan menunjukkan bahwa kamu menanganinya — tanpa menyarankan pindah grup, ganti level, atau pilihan apa pun, yang bukan wewenangmu untuk disampaikan kepada keluarga.'},
   {type:'choice', prompt:'<strong>Skenario baru:</strong> seorang anak tidak hadir kemarin tanpa pesan sebelumnya. Apa langkah yang tepat di hari yang sama?', opts:[
     'Mengirim tautan rekaman tanpa pesan apa pun dan menunggu ia mengejar sendiri',
     'Menulis kepada keluarga dengan hangat lebih dulu (“kami kangen dia hari ini, semuanya baik-baik saja?”), lalu mengirim rekaman beserta bagian yang paling penting',
     'Menunggu sampai pelajaran berikutnya untuk membahasnya, supaya tidak dibesar-besarkan'
   ], correct:1, fb:'Kehangatan lebih dulu, lalu ringkasan yang terarah — bukan sekadar tautan yang dikirim begitu saja, dan bukan diam — itulah rencana mengejar ketertinggalan yang sebenarnya, bukan sekadar “mengirim rekaman.”'}
  ]
 }
},
{id:'m5', numLabel:'Modul 5', emoji:'🧩', color:'var(--blue)',
 title:'Delapan Situasi',
 desc:'Hal-hal apa saja yang menjadi alasan siswa atau orangtua memutuskan untuk berhenti mengikuti kursus: apa yang perlu diperhatikan, apa yang harus dilakukan, dan siapa yang perlu diberi tahu.',
 obj:'Hal-hal apa saja yang menjadi alasan siswa atau orangtua memutuskan untuk berhenti mengikuti kursus, mengetahui apa yang perlu diperhatikan, apa yang harus dilakukan di dalam pelajaran, apa yang harus dilakukan di luar pelajaran, dan siapa yang perlu diberi tahu.',
 sections:[
  {t:'', html:`
   <h3 class="acc-big-title">🧩 8 situasi paling umum penyebab pengembalian dana</h3>
  `},
  {t:'', html:`${accItem('😣 5.1 · Tugasnya terlalu sulit', `
   <img src="Images/Image_5.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Seorang siswa bisa menunjukkan beberapa tanda di bawah ini saat ia sedang kesulitan. Ia mungkin berkata “aku nggak bisa” sejak awal dan berulang kali, menyerah setelah membuat kesalahan, atau memulai tugas kelas tanpa menyelesaikannya. Ia juga bisa menjadi lebih pendiam, berhenti membagikan layar, atau berulang kali menanyakan pertanyaan dasar yang sama. Kadang, seorang siswa tertinggal setelah melewatkan satu pelajaran saja dan tidak pernah benar-benar bisa mengejar. Tanda bahaya lainnya adalah ketika tugas kelasnya tidak dikumpulkan meskipun ia terus mencoba mengerjakan PR.`)}
   ${stepIconBlock('⚡','Sesuaikan — pelajaran berikutnya, tanpa perlu izin', `<ul><li>Pecah tugas menjadi keberhasilan-keberhasilan kecil (10 menit)</li><li>Berikan target yang lebih sederhana dan jelas, secara lisan</li><li>Anggap kesalahan sebagai hal wajar; tanyakan kabarnya <strong>sebelum</strong> frustrasinya menumpuk</li><li>Masih buntu setelah 2 pelajaran? Jadwalkan sesi dengan <strong>Mentor Regional</strong>-mu untuk mendapatkan ide mengajar</li></ul>`)}
   ${stepIconBlock('🗣️','Koordinasi — TL + Evaluasi Tutor di BO, minggu ini', `<ul><li>Laporkan apa yang kamu lihat dan bagaimana perasaan anak</li><li>Ajukan permintaan untuk EC atau pergantian kursus atau pergantian level jika kemampuan siswa tidak bisa menyeimbangi kursus saat ini</li><li>Jangan pernah membahas soal level dengan orang tua terlebih dulu. Selalu diskusikan dengan TL lebih awal</li></ul>`)}
   ${stepIconBlock('👪','Keluarga', `<p>Tutor hanya perlu memberitahu orangtua tentang hasil diskusi dari TL. Misalnya tentang EC yang disetujui/pemindahan siswa ke level yang sesuai. Contoh pesan <em>“Baik Ibu/Bapak. Permintaan EC sedang saya diskusikan dengan tim saya terlebih dahulu”</em> - Kasus seperti ini bisa ditindak lanjuti dalam 2 pelajaran yang terlewat.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Sudah menerima permintaan pengembalian dana karena alasan ini?</strong> Kita akan bahas lebih detail di Modul 7 yaitu tentang upaya mempertahankan siswa saat pelajaran</p>`)}
  `)}
  ${accItem('😴 5.2 · Tugasnya terlalu mudah', `
   <img src="Images/Image_7.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Seorang siswa mungkin menyelesaikan tugasnya dalam separuh waktu yang diharapkan dan bertanya, “Cuma ini?” Ia mungkin jadi teralihkan atau mengalihkan perhatian teman lain setelah selesai, atau menyebut bahwa ia sudah tahu materinya. Tanda penting lainnya adalah ketika siswa menunjukkan kemampuan tinggi tetapi secara konsisten tidak mengerjakan PR. Di balik angka, kebosanan dan kurangnya keterlibatan sering kali terlihat serupa.Makanya, kita perlu jeli melihat apa yang sebenarnya terjadi di balik itu`)}
   ${stepIconBlock('⚡','Sesuaikan — segera', `<ul><li>Tantangan tambahan yang nyata, keterampilan yang sama, instruksi yang lebih sulit</li><li>Peran mentor kecil di dalam grup</li><li>Beri pilihan; jangan pernah biarkan ia menganggur</li></ul>`)}
   ${stepIconBlock('🗣️','Koordinasi — TL + Evaluasi Tutor di BO, minggu ini', `<p>Sampaikan dengan persis: <em>“perlu naik level, bukan masalah motivasi.”</em> Minta EC atau Extraclass/penentuan level.</p>`)}
   ${stepIconBlock('👪','Keluarga', `<p>Tutor dapat memberikan feedback singkat setelah pelajaran kepada orangtua seperti contoh <em>“Moms/Dads saat dikelas adik cepat sekali menangkap materi, saya beri tantangan tambahan, saya menunggu hasilnya di PR yang akan dikumpulkan”</em> Mari lihat perkembangannya di 2 pelajaran kedepan.</p>${co('co-ok','✅',`<p>Kasus ini sering bisa diselesaikan — tetapi hanya jika ada yang menyampaikannya.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Sudah menerima permintaan pengembalian dana karena alasan ini?</strong> Kita akan bahas lebih detail di Modul 7 yaitu tentang upaya mempertahankan siswa saat pelajaran</p>`)}
  `)}
  ${accItem('🧩 5.3 · Kebutuhan pendidikan khusus', `
   <img src="Images/Image_8.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Ada anak yang datang dengan autisme, ADHD, disleksia, kebutuhan sensorik, kecemasan — dan kadang bakat istimewa, yang juga merupakan kebutuhan pendidikan khusus dan tampak sangat berbeda dari kebosanan biasa. Hal ini mungkin tercantum di profil, pernah disebut sekali oleh keluarga, atau tidak pernah diucapkan sama sekali. Keluarga sering memberikan penjelasan lain di awal — <em>“dia sudah tidak tertarik”</em>, <em>“ini bukan untuknya”</em> — dan alasan sebenarnya baru muncul ketika seseorang bertanya dengan cara yang tepat.</p></div>
   ${noticeLine(`Catatan di profil (Modul 2.1) · kewalahan secara sensorik · fokus memudar lebih awal · reaksi besar terhadap kesalahan kecil · tertekan saat ada perubahan · membaca/menulis lambat · kemampuan tinggi dengan motivasi yang naik-turun.`)}
   ${stepIconBlock('⚡','Sesuaikan — di sinilah sebagian besar pekerjaannya, dan semuanya tanggung jawabmu', `<ul><li>Unit yang lebih pendek, struktur yang bisa diprediksi, <strong>beri tahu sebelum setiap peralihan</strong></li><li>Instruksi tertulis + lisan; kamera opsional</li><li>Sesuaikan tugasnya sendiri; jaga rutinitas di atas segalanya</li><li><strong>Mentor Regional</strong>-mu bisa membantumu menyusun rencana untuk anak ini secara khusus</li></ul>${co('co-danger','🚨',`<p>Berusahalah sungguh-sungguh terlebih dahulu. Tetapi jika kesenjangannya tetap terlalu besar, <strong>segera eskalasikan</strong> — itu bukan kegagalan.</p>`)}`)}
   ${stepIconBlock('🗣️','Koordinasi — TL segera + Evaluasi Tutor di BO', `<p>Jika pelajaran 1-1 private class atau tutor yang berpengalaman menangani kebutuhan pendidikan khusus akan membantu, <strong>rekomendasikan — jangan tawarkan.</strong></p>`)}
   ${stepIconBlock('👪','Keluarga — dengan hati-hati', `<p>Periksa profil terlebih dahulu (2.1); tanyakan dengan lembut jika tidak ada catatan. Tuliskan apa yang kamu ketahui di Komentar BO.</p>${co('co-danger','⛔',`<p>Jangan pernah: <em>“dia tidak bisa mengikuti”</em> atau apa pun yang terdengar seperti diagnosis. Tindak lanjuti setiap 2 pelajaran, dan selalu setelah ada perubahan.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Sudah menerima permintaan pengembalian dana karena alasan ini?</strong> Kita akan bahas lebih detail di Modul 7 yaitu tentang upaya mempertahankan siswa saat pelajaran</p>`)}
  `)}
  ${accItem('📐 5.4 · Anak, usia, atau formatnya tidak cocok', `
   <img src="Images/Image_9.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${noticeLine(`Seorang siswa mungkin kesulitan karena belum memiliki kemampuan membaca yang dibutuhkan materi, atau tidak bisa tetap fokus selama seluruh pelajaran. Dalam beberapa kasus, kursus mungkin menuntut kemampuan yang jauh melampaui usia atau levelnya saat ini. Hambatan lain bisa berupa kesulitan keluarga dalam beradaptasi dengan format belajar online, atau hambatan bahasa yang tidak terdeteksi sebelumnya. Tanda-tanda ini bisa menunjukkan bahwa masalahnya bukan keterlibatan, melainkan ketidaksesuaian antara kebutuhan siswa dan lingkungan belajarnya.`)}
   ${stepIconBlock('⚡','Sesuaikan', `<p>Coba semuanya — persingkat, sederhanakan, lebih banyak peragaan, lebih banyak perhatian satu-lawan-satu. Ketahui batasnya: anak yang belum bisa membaca tidak bisa diajar lewat kursus yang sangat bergantung pada bacaan.</p>`)}
   ${stepIconBlock('🗣️','Koordinasi — TL + Evaluasi Tutor di BO', `<p>Sampaikan dengan persis: <em>“ini soal penempatan, bukan motivasi.”</em> Teruskan — ini bukan keputusanmu.</p>`)}
   ${stepIconBlock('👪','Keluarga — hanya jika TL memintamu', `<p>Mungkin ada beberapa pilihan, tetapi <strong>bukan kamu yang menyampaikannya.</strong> Ikuti persis pesan yang diberikan TL-mu, atau jangan ikut campur.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Sudah menerima permintaan pengembalian dana karena alasan ini?</strong> Kita akan bahas lebih detail di Modul 7 yaitu tentang upaya mempertahankan siswa saat pelajaran</p>`)}
  `)}
  ${accItem('👥 5.5 · Grupnya terlalu ramai dan anak tidak pernah mendapat giliran', `
   <img src="Images/Image_10.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   ${co('co-idea','🎯',`<p><strong>Ini satu-satunya situasi dalam daftar ini yang berkaitan langsung dengan perilaku tutor — dan karena itu, inilah yang paling cepat bisa kamu perbaiki.</strong></p>`)}
   <div class="card"><p>Anak yang mengangkat tangan, menunggu, tidak dipanggil, dan dibiarkan dengan pertanyaan yang tidak terjawab akan menyimpulkan bahwa ia tidak berarti di grup ini. Bisa cukup dua pelajaran saja.</p></div>
   ${noticeLine(`Perhatikan anak-anak yang berhenti mengangkat tangan, pertanyaan di chat yang tidak terjawab, atau dua-tiga siswa yang sama yang selalu menjawab. Perhatikan juga siswa yang melewati satu pelajaran penuh tanpa satu pun interaksi denganmu.`)}
   ${stepIconBlock('⚡','Sesuaikan — ini keterampilan, dan bisa dipelajari', `<ul><li>Pelacakan giliran (3.4): daftar yang terlihat, centang tiap giliran, cek di pertengahan pelajaran</li><li>Segmen yang lebih pendek, chat digunakan dengan sengaja, kerja berpasangan/tugas kecil</li><li>Jawab secara tertulis dalam 24 jam setiap pertanyaan yang belum terjawab</li><li>Justru untuk inilah sesi dengan <strong>Mentor Regional</strong> — mintalah jika belum berhasil</li></ul>`)}
   ${stepIconBlock('🗣️','Koordinasi — TL', `<p>Hanya setelah benar-benar mencoba: ukuran grup, format, siapa yang tertinggal, apa yang sudah kamu ubah. Grup yang lebih kecil memungkinkan, tetapi hanya jika TL mengetahuinya.</p>`)}
   ${stepIconBlock('👪','Keluarga — hanya jika sudah disepakati dengan TL', `<p>Jangan mengusulkan pindah grup sendiri. Kamu boleh dengan hangat menyampaikan bahwa kamu sudah menyadarinya dan sedang mengubah cara kamu mengelola grup — bagian itu memang tanggung jawabmu.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Sudah menerima permintaan pengembalian dana karena alasan ini?</strong> Kita akan bahas lebih detail di Modul 7 yaitu tentang upaya mempertahankan siswa saat pelajaran</p>`)}
  `)}
  ${accItem('🔀 5.6 · Pergantian tutor, grup, atau jadwal berdampak buruk', `
   <img src="Images/Image_11.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Konsistensi jauh lebih krusial dari yang kita bayangkan, terutama bagi anak-anak yang berada dalam kondisi paling rentan</p></div>
   ${co('co-ok','✅',`<p><strong>Kabar baik yang layak disampaikan dengan lantang: kasus ini biasanya bisa diatasi.</strong> Kita punya banyak tutor dan banyak grup — hampir selalu ada pengaturan lain yang bisa ditemukan, tetapi hanya jika masalahnya disampaikan dengan cepat, selagi keluarga masih menginginkan solusi, bukan jalan keluar. Tiga hal yang menentukan hasilnya: transparansi, kecepatan, dan semua pihak tetap mendapat kabar — keluarga, TL-mu, CS, dan komentar di BO.</p>`)}
   <div class="card"><h4 style="margin-bottom:10px">👋 Saat pergi</h4>${iconGrid([
     {ic:'📝', html:`<strong>Serah terima di Komentar BO:</strong> kebutuhan khusus, apa yang memotivasinya, di mana ia buntu, kondisi keluarga.`},
     {ic:'🗣️', html:`<strong>Tanyakan kepada TL bagaimana</strong> menyampaikannya, dan kepada siapa — sepakati dulu, lalu lakukan persis seperti itu.`}
   ])}</div>
   <div class="card"><h4 style="margin-bottom:10px">🙋 Saat datang</h4>${iconGrid([
     {ic:'📖', html:`<strong>Baca catatan dari tutor asli group</strong> terlebih dahulu`},
     {ic:'💬', html:`<strong>Sebutkan perubahannya</strong>, singkat dan positif.`},
     {ic:'🏷️', html:`<strong>Hafalkan setiap nama</strong> di pelajaran pertama.`},
     {ic:'⏸️', html:`<strong>Jangan mengubah hal lain</strong> selama 2 pelajaran.`}
   ])}</div>
   <div class="card"><p>Untuk proses pergantian kelas yang sudah terjadwal, di sebagian besar wilayah tutor pengganti -lah bukan tim Customer Service yang mengumumkan perubahan tersebut di grup chat sekaligus memperkenalkan diri. CS biasanya hanya turun tangan untuk perubahan yang tidak terduga atau kasus yang sensitif.</p></div>
   ${stepIconBlock('🗣️','Koordinasi — TL', `<p>Segera, jika ada anak yang memiliki kebutuhan pendidikan khusus, atau jika jadwal baru tidak cocok untuk sebuah keluarga.</p>`)}
   ${stepIconBlock('👪','Keluarga — sebagai tutor baru, dengan hangat', `<p style="font-style:italic">“Halo! Saya [nama], tutor baru untuk grup ini — saya sudah membaca catatan tentang [anak] supaya kita bisa melanjutkan tepat dari tempat ia berhenti.”</p><p>Antusiasme saja — bukan alasan perubahannya.</p>`)}
   ${co('co-idea','🔴',`<p><strong>Sudah menerima permintaan pengembalian dana karena alasan ini?</strong> Kita akan bahas lebih detail di Modul 7 yaitu tentang upaya mempertahankan siswa saat pelajaran</p>`)}
  `)}
  ${accItem('⚠️ 5.7 · Ada kegagalan dari pihak kita', `
   <img src="Images/Image_12.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Pelajaran yang hilang karena gangguan platform, pembatalan, atau masalah teknis yang menghabiskan sebagian besar waktu pelajaran.</p></div>
   ${co('co-danger','🚨',`<p><strong>Hal terburuk yang bisa dikatakan tutor di sini adalah “itu tidak mungkin.”</strong> Seorang anak melewatkan pelajaran karena platform kita bermasalah, keluarga meminta pelajaran pengganti, tutor bilang tidak bisa — keluarga kehilangan kepercayaan dan meminta pengembalian dana. <strong>Itu tidak pernah menjadi keputusan tutor.</strong> Dua pelajaran yang terlewat atau terganggu adalah pemicu yang digunakan sebagian besar wilayah untuk membuka pembicaraan tentang pelajaran pengganti tambahan, meskipun keputusan akhirnya selalu ada di TL-mu. Memulai pembicaraan itu adalah tugasmu. Menutupnya bukan.</p>`)}
   ${stepIconBlock('⚡','Sesuaikan', `<p>Tetap tenang, anggap wajar (3.7), jaga suasana, kirim rekaman, jalankan rencana mengejar ketertinggalan (4.3).</p>`)}
   ${stepIconBlock('🗣️','Koordinasi — TL di hari yang sama', `<ul><li>Bahas pelajaran pengganti tambahan</li><li>Libatkan CS jika keluarga tidak puas atau ada urusan komersial</li><li>Kirim Evaluasi Tutor di BO</li></ul>`)}
   ${stepIconBlock('👪','Keluarga — sepakati pesannya dengan TL dulu, di hari yang sama', `<p><em>“Saya sudah menyampaikannya ke tim saya dan kami akan menghubungi Bapak/Ibu kembali”</em> — lalu pastikan memang ada yang melakukannya, hari ini.</p>${co('co-danger','⛔',`<p>Jangan pernah menjanjikan pelajaran tambahan, dan jangan pernah menolaknya. Tindak lanjut: berikan ia giliran nyata pertama di pelajaran berikutnya.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Sudah menerima permintaan pengembalian dana karena alasan ini?</strong> Kita akan bahas lebih detail di Modul 7 yaitu tentang upaya mempertahankan siswa saat pelajaran</p>`)}
  `)}
  ${accItem('📢 5.8 · “Ini bukan yang dijanjikan kepada kami”', `
   <img src="Images/Image_13.png" alt="" style="display:block;width:100%;border-radius:var(--rsm);margin-bottom:14px;box-shadow:var(--shadow)">
   <div class="card"><p>Orang tua memberi tahu kamu bahwa level, paket, jadwal, atau kursusnya sendiri tidak sesuai dengan apa yang mereka pahami saat membeli. Ini percakapan paling tidak nyaman yang dialami tutor, dan yang paling mudah menjadi lebih buruk.</p>
   <p><em>Ekspektasi yang terbentuk sebelum kursus dimulai berada di balik sebagian besar permintaan pengembalian dana — lebih banyak daripada penyebab tunggal lainnya.</em></p></div>
   ${stepIconBlock('⚡','Sesuaikan', `<p>Tidak ada yang berubah untuk anaknya — tetap mengajar dengan baik.</p>`)}
   ${stepIconBlock('🗣️','Koordinasi — TL + CS, sebelum membalas apa pun', `<ul><li>Sampaikan kepada TL-mu di hari yang sama</li><li>Libatkan CS — merekalah yang menangani langkah selanjutnya</li><li>Tuliskan kata-kata keluarga apa adanya di Evaluasi Tutor di BO</li></ul><p>Boleh mengonfirmasi bahwa pesan sudah diterima: <em>“terima kasih, saya akan menyampaikan ini ke tim saya dan menghubungi Bapak/Ibu kembali.”</em> Itu bukan jawaban. <span style="font-size:12.5px">(Jika yang mereka inginkan hal kecil — satu pelajaran tambahan — sering kali itu bisa diselesaikan langsung oleh kamu dan TL-mu, tanpa CS. Tanyakan kepada TL-mu mana yang berlaku.)</span></p>`)}
   ${stepIconBlock('👪','Keluarga — hanya dengan persetujuan TL', `<ol><li>Akui, tanpa menyalahkan</li><li>Tunjukkan bahwa kamu peduli pada anaknya</li><li>Serahkan dengan rapi kepada CS</li></ol>${co('co-danger','⛔',`<p>Jangan pernah: menyalahkan rekan kerja, berdebat, atau menawarkan solusi sendiri.</p>`)}`)}
   ${co('co-idea','🔴',`<p><strong>Sudah menerima permintaan pengembalian dana karena alasan ini?</strong> Kita akan bahas lebih detail di Modul 7 yaitu tentang upaya mempertahankan siswa saat pelajaran</p>`)}
  `)}
  `}
 ],
 ix:{
  title:'Delapan situasi, delapan langkah pertama',
  instr:'Untuk setiap situasi anonim, pilih termasuk kategori mana dari delapan kategori, lalu pilih langkah pertama yang tepat. 70% untuk membuka Modul 6.',
  items:[
   {type:'choice', prompt:'“Dia bilang dia tidak bisa, langsung menangis di kesalahan pertama, dan sudah berhenti menyelesaikan tugas kelas.” — situasi apa ini?', opts:['Tugasnya terlalu sulit','Tugasnya terlalu mudah','Kebutuhan pendidikan khusus'], correct:0, fb:'Gagal berulang sejak awal dan menyerah di kesalahan pertama adalah gambaran klasik tugas yang terlalu sulit.'},
   {type:'choice', prompt:'Langkah pertama yang tepat untuk situasi itu adalah —', opts:['Mengirim pesan ke keluarga untuk menyarankan perubahan level','Memecah tugas menjadi langkah-langkah lebih kecil dan memberi target yang lebih ringan dan jelas — mulai pelajaran ini juga','Tetap berjalan sesuai rencana; level bukan sesuatu yang bisa kamu atur'], correct:1, fb:'Sesuaikan tugasnya sendiri dengan segera — pembicaraan soal level, jika diperlukan, disampaikan ke Team Leader dan CS, tidak pernah langsung ke keluarga.'},
   {type:'choice', prompt:'“Dia selesai dalam sepertiga waktu, lalu mulai mengganggu anak di sebelahnya. Tidak ada PR selama tiga minggu.” — situasi apa ini?', opts:['Tugasnya terlalu mudah','Kebutuhan pendidikan khusus','Keadaan keluarga'], correct:0, fb:'Selesai cepat, mengganggu, dan tanpa PR adalah kebosanan karena level yang terlalu mudah — terlihat seperti tidak terlibat, padahal bukan.'},
   {type:'choice', prompt:'Langkah pertama yang tepat untuk situasi itu adalah —', opts:['Memberi tantangan tambahan yang nyata terkait keterampilan yang sama, saat itu juga, dan melaporkannya sebagai kemungkinan naik level','Melaporkannya dan menunggu peninjauan level sebelum mengubah apa pun','Menganggap ia memang tidak termotivasi dan lebih menyemangatinya'], correct:0, fb:'Kedua bagian dibutuhkan di sini: sesuaikan sekarang agar ia tidak bosan berminggu-minggu, dan laporkan sekarang agar levelnya sendiri ditinjau.'},
   {type:'choice', prompt:'“Keluarga menyebutkan saat Kelas Percobaan bahwa dia memiliki ADHD, tetapi hal itu tidak pernah dicatat di mana pun dan tidak ada tutor yang menyesuaikan diri.” — situasi apa ini?', opts:['Grupnya terlalu ramai','Kebutuhan pendidikan khusus','Ada kegagalan dari pihak kita'], correct:1, fb:'Inilah tepatnya kasus kebutuhan pendidikan khusus yang paling sering terlewat — informasinya ada, hanya saja tidak pernah sampai ke pelajaran.'},
   {type:'choice', prompt:'Langkah pertama yang tepat untuk situasi itu adalah —', opts:['Menunggu diagnosis resmi sebelum mengubah apa pun','Langsung menyesuaikan pelajaran — unit lebih pendek, struktur yang bisa diprediksi, peralihan yang diberi tahu lebih dulu — dan berkoordinasi dengan Team Leader dan CS, ditambah komentar di BO','Memberi tahu keluarga bahwa anak mereka mungkin tidak cocok dengan format ini'], correct:1, fb:'Kamu sendiri menyesuaikan semua yang bisa kamu sesuaikan, saat itu juga, dan memastikan hal ini tercatat agar tutor berikutnya dan CS mengetahuinya.'},
   {type:'choice', prompt:'“Dua anak di grupku yang ramai berisi sepuluh orang belum pernah benar-benar berinteraksi denganku selama tiga pelajaran, dan salah satunya sudah berhenti mengangkat tangan.” — situasi apa ini?', opts:['Anak, usia, atau formatnya tidak cocok','Grupnya terlalu ramai dan anak tidak pernah mendapat giliran','Ini bukan yang dijanjikan kepada kami'], correct:1, fb:'Ini jelas masalah pengelolaan grup — dan satu-satunya situasi dalam daftar yang berkaitan langsung dengan perilaku tutor.'},
   {type:'choice', prompt:'Langkah pertama yang tepat untuk situasi itu adalah —', opts:['Melaporkan ukuran grup ke Team Leader dan menunggu keputusan sebelum mengubah apa pun','Mengubah cara kamu mengelola grup ini secara khusus — melacak giliran, menggunakan chat dengan sengaja, menyusun ulang segmen — dan mengeskalasikan hanya jika masih belum cukup','Fokus pada anak-anak yang berpartisipasi, karena mereka jelas lebih terlibat'], correct:1, fb:'Ini keterampilan yang bisa langsung kamu terapkan. Eskalasikan karena kamu sudah benar-benar mencoba dan kesenjangannya masih terlalu besar — bukan sebagai pengganti usaha.'},
   {type:'choice', prompt:'“Orang tua bilang mereka diberi tahu bahwa ini pelajaran 1-1 private, bukan grup berisi delapan orang.” — situasi apa ini?', opts:['Pergantian tutor, grup, atau jadwal berdampak buruk','Ini bukan yang dijanjikan kepada kami','Tugasnya terlalu sulit'], correct:1, fb:'Ketidaksesuaian antara yang dijanjikan dan yang diberikan adalah persis “ini bukan yang dijanjikan kepada kami” — situasi paling sensitif dari kedelapannya.'},
   {type:'choice', prompt:'Langkah pertama yang tepat untuk situasi itu adalah —', opts:['Menjelaskan cara kerja pelajaran grup dan mengapa bernilai secara pedagogis','Mengonfirmasi pesan sudah diterima, lalu menyampaikannya ke Team Leader dan CS di hari yang sama sebelum membalas secara lengkap — dan mencatat kata-kata keluarga apa adanya di BO','Meminta maaf atas kekeliruan dan menawarkan untuk mengecek kemungkinan pindah ke pelajaran satu-lawan-satu'], correct:1, fb:'Menjawab sendiri — bahkan dengan jawaban yang masuk akal — adalah cara tutor tanpa sengaja membenarkan keluhan atau mengisyaratkan sesuatu yang tidak bisa kita penuhi. Selalu koordinasi dulu.'}
  ]
 }
},
{id:'m6', numLabel:'Modul 6', emoji:'🧭', color:'var(--blue)',
 title:'Siapa yang Diberi Tahu, dan Seberapa Cepat',
 desc:'Ubah semua hal di atas menjadi sesuatu yang benar-benar terjadi — peta penerusan dan lima aturan.',
 obj:'Mengubah semua hal di atas menjadi sesuatu yang benar-benar terjadi — dengan mengetahui, tanpa perlu berpikir lama, siapa yang harus diberi tahu dan seberapa cepat.',
 sections:[
  {t:'⏱️ 6.1 · Kecepatan adalah segalanya', html:`
   <div class="card"><p>Setiap situasi di Modul 5 punya pola yang sama: mudah diperbaiki jika ditangani lebih awal, mahal jika terlambat. Level yang salah dan terdeteksi di pelajaran ketiga bisa dibereskan. Level yang salah yang sama di pelajaran kelima belas sudah berubah menjadi <em>“dia sudah tidak tertarik lagi”</em> — dan saat itu keluarga sudah berhenti memercayai kita.</p></div>
   ${co('co-idea','💡',`<p><strong>Kamu adalah jembatan antara pelajaran dan orang-orang yang bisa mengubah situasi anak. Jembatan hanya berarti jika hal-hal melintasinya dengan cepat.</strong></p>`)}
  `},
  {t:'🗺️ 6.2 · Peta penerusan', html:`
   <div class="tbl-full"><div class="card"><table>
   <tr><th>🔎 Apa yang kamu perhatikan</th><th>① Di dalam pelajaran</th><th>② Di antara pelajaran</th><th>③ Siapa yang diberi tahu + BO</th><th>④ Keluarga</th><th>⏱️ Seberapa cepat</th></tr>
   <tr><td><strong>Kehadiran di bawah separuh</strong>, atau tugas jauh di bawah grup</td><td>Berikan giliran nyata dan keberhasilan yang bisa dicapai</td><td>Obrolan empat mata dengan anak</td><td>Team Leader jika dua pelajaran berikutnya berlalu tanpa perubahan</td><td>Pesan singkat dan hangat — boleh kamu kirim</td><td>Di minggu yang sama</td></tr>
   <tr><td><strong>Dua pelajaran atau lebih tanpa ada yang dikumpulkan</strong></td><td>Cek tugasnya langsung lewat berbagi layar; turunkan targetnya</td><td>Obrolan empat mata; jelaskan PR berikutnya dengan baik dan tindak lanjuti</td><td>Team Leader jika berlanjut</td><td>Pesan tentang perkembangan — boleh kamu kirim</td><td>Di minggu yang sama</td></tr>
   <tr><td><strong>Tugas terlalu sulit</strong></td><td>Langkah lebih kecil, target lebih ringan, sesuaikan tugas, anggap kesalahan wajar</td><td>Penjelasan tertulis tentang konsep yang belum dikuasai</td><td><strong>Team Leader + Evaluasi Tutor di BO</strong> — minta EC atau Extraclass/penentuan level jika perlu</td><td>Hanya yang disetujui TL-mu. Jangan pernah soal level atau pilihan</td><td>Di minggu yang sama</td></tr>
   <tr><td><strong>Tugas terlalu mudah</strong></td><td>Tantangan tambahan yang nyata, tugas disesuaikan ke atas, peran mentor, jangan pernah menganggur</td><td>Siapkan tugas level berikutnya</td><td><strong>Team Leader + Evaluasi Tutor di BO</strong> — minta EC atau Extraclass/penentuan level jika perlu</td><td>Hanya yang disetujui TL-mu. Jangan pernah soal level atau pilihan</td><td>Di minggu yang sama</td></tr>
   <tr><td><strong>Kebutuhan pendidikan khusus</strong>, tercatat atau diduga</td><td>Unit lebih pendek, struktur yang bisa diprediksi, beri tahu sebelum peralihan, sesuaikan tugas</td><td>Catat apa yang berhasil dan yang tidak</td><td><strong>Team Leader + Evaluasi Tutor di BO.</strong> Tanyakan soal pelajaran satu-lawan-satu jika kesenjangannya besar</td><td>Menanyakan apa yang membantu: boleh, dengan hati-hati. Format/grup/satu-lawan-satu: jangan pernah kamu usulkan</td><td>Sebelum pelajaran berikutnya · segera jika kesenjangannya terlalu besar</td></tr>
   <tr><td><strong>Usia atau format tidak cocok</strong></td><td>Sederhanakan, perbanyak peragaan, lebih banyak perhatian di pelajaran</td><td>Jujur soal batasnya</td><td><strong>Team Leader + Evaluasi Tutor di BO</strong> — sampaikan “soal penempatan, bukan motivasi”</td><td>Hanya jika TL-mu memintanya</td><td>Di minggu yang sama</td></tr>
   <tr><td><strong>Anak tidak pernah mendapat giliran</strong></td><td>Pelacakan giliran; sesuaikan pendekatanmu; sesuaikan tugas untuk anak yang membutuhkannya</td><td>Jawaban tertulis dalam 24 jam untuk semua yang belum terjawab</td><td>Team Leader, jika tidak bisa diselesaikan di dalam kelas</td><td>Perubahan cara mengajarmu sendiri: boleh. Pindah grup: jangan pernah dari kamu</td><td>Di minggu yang sama</td></tr>
   <tr><td><strong>Pergantian tutor/grup/jadwal</strong></td><td>Sebutkan, anggap wajar, jangan ubah hal lain selama dua pelajaran</td><td>Serah terima ditulis di Komentar BO</td><td><strong>Team Leader</strong> — segera jika ada anak dengan kebutuhan khusus, atau jadwalnya tidak cocok. CS hanya untuk kasus tak terduga/sensitif</td><td>Sebagai tutor baru: hangat, antusias. Bukan alasan perubahan, bukan soal jadwal</td><td>Sebelum pelajaran serah terima</td></tr>
   <tr><td><strong>Dua pelajaran terganggu</strong> — gangguan platform, pembatalan, ketidakhadiran</td><td>Tetap tenang, jaga suasana</td><td>Rekaman + bagian yang penting; rencana mengejar ketertinggalan</td><td><strong>Team Leader di hari yang sama — memulai pembahasan pelajaran tambahan (dua pelajaran adalah pemicu yang digunakan sebagian besar wilayah).</strong> CS jika keluarga tidak puas · Evaluasi Tutor di BO</td><td>Di hari yang sama — sepakati kata-katanya dengan TL-mu dulu</td><td>Di hari yang sama</td></tr>
   <tr><td><strong>“Ini bukan yang dijanjikan kepada kami”</strong></td><td>Tidak ada yang berubah untuk anaknya — tetap mengajar dengan baik</td><td>—</td><td><strong>Team Leader + CS, sebelum kamu membalas · kata-kata keluarga apa adanya di Evaluasi Tutor</strong></td><td>Hanya konfirmasi pesan sudah diterima. Jawaban sebenarnya setelah disetujui TL — tanpa pilihan dari kamu</td><td>Di hari yang sama</td></tr>
   <tr><td><strong>Keadaan keluarga, kesehatan, keuangan</strong></td><td>Bersikaplah baik, jangan berharap apa-apa</td><td>—</td><td>CS, melalui Team Leader-mu · jangan dikejar</td><td>Satu kalimat hangat, tanpa pertanyaan lanjutan</td><td>Saat kamu mendengarnya</td></tr>
   </table></div></div>
   ${co('co-idea','💡',`<p>Untuk hal yang mendesak, sebagian besar wilayah juga punya kanal Slack langsung antara Team Leader dan CS sebagai cadangan yang lebih cepat daripada BO — namanya berbeda di setiap wilayah, jadi tanyakan kepada Team Leader-mu kanal mana yang berlaku untukmu.</p>`)}
   ${co('co-idea','🎓',`<p><strong>Satu kolom yang tidak ditampilkan peta ini: Mentor Regional-mu.</strong> Semua yang ada di kolom “siapa yang diberi tahu” di atas berkaitan dengan <em>pengaturan</em> — level, grup, jadwal, paket — dan selalu disampaikan ke Team Leader dan CS. Namun ketika pertanyaannya adalah <em>bagaimana aku bisa mengajarkan ini dengan lebih baik</em>, Mentor Regional kamu adalah tempat nyaman untuk bertanya dan diskusi bersama bukan sebagai pengganti jalur pada tabel diatas.</p>`)}
  `},
  {t:'⚖️ 6.3 · Lima aturan', html:`
   <div class="rule-row">
     <div class="rule-card"><div class="rule-num">1</div><div class="rule-ic">⚡</div><div class="rule-txt"><strong>Sesuaikan dulu.</strong> Kamu tidak perlu izin untuk mengajar lebih baik besok — banyak kasus selesai di situ. Masih buntu setelah 2 pelajaran? Jadwalkan sesi dengan Mentor Regional-mu.</div></div>
     <div class="rule-card"><div class="rule-num">2</div><div class="rule-ic">📣</div><div class="rule-txt"><strong>Memberi tahu seseorang itu wajib.</strong> Kamu menginformasikan Team Leader, melibatkan CS, mengirim Evaluasi Tutor — kalau tidak, masalahnya akan tenggelam.</div></div>
     <div class="rule-card"><div class="rule-num">3</div><div class="rule-ic">🚦</div><div class="rule-txt"><strong>Team Leader sebelum keluarga.</strong> Koordinasikan dan sepakati strateginya, <em>baru</em> bicara dengan keluarga — persis seperti yang disepakati, jangan pernah dengan pilihan buatanmu sendiri.</div></div>
     <div class="rule-card"><div class="rule-num">4</div><div class="rule-ic">🤐</div><div class="rule-txt"><strong>Jangan pernah berjanji, jangan pernah menolak — selalu tunjukkan kepedulianmu.</strong> Kamu merekomendasikan; CS yang menawarkan. Satu pengecualian: setelah Team Leader-mu menyetujui pelajaran tambahan, sering kali kamu sendiri yang bisa menyampaikannya kepada keluarga.</div></div>
     <div class="rule-card"><div class="rule-num">5</div><div class="rule-ic">🔁</div><div class="rule-txt"><strong>Eskalasikan sekali, lalu tindak lanjuti.</strong> Menyampaikan sesuatu lalu melupakannya sama saja dengan tidak pernah menyampaikannya.</div></div>
   </div>
   ${co('co-idea','💡',`<p>Kelima aturan ini layak dijadikan kebiasaan, bukan sekadar dibaca sekali — aturan inilah pembeda antara sinyal yang ditindaklanjuti dan sinyal yang dibiarkan menjadi masalah.. Tanyakan kepada Team Leader-mu untuk hal-hal khusus tentang cara wilayahmu menjalankan ini.</p>`)}
  `}
 ],
 ix:{
  title:'Penerusan — lima sinyal',
  instr:'Untuk setiap sinyal, pilih ke mana sinyal itu diteruskan lebih dulu. 70% untuk membuka Modul 7.',
  items:[
   {type:'choice', prompt:'Tugas kelas seorang anak baik-baik saja, tetapi PR-nya nol selama dua pelajaran berturut-turut, dan belum ada penyebab lain yang teridentifikasi.', opts:['Aku bertindak sendiri — obrolan empat mata minggu ini, belum perlu melapor','Team Leader + CS segera','Langsung teruskan ke CS, lewati Team Leader'], correct:0, fb:'Penurunan yang hanya terjadi pada PR seperti ini dimulai dengan obrolan empat matamu sendiri. Eskalasikan ke Team Leader hanya jika berlanjut setelah itu.'},
   {type:'choice', prompt:'Kamu sudah menyesuaikan pelajaran selama dua minggu untuk anak yang jelas kesulitan dengan levelnya, dan itu masih belum cukup.', opts:['Terus menyesuaikan tanpa batas — level bukan keputusanmu, jadi tidak ada yang perlu dieskalasikan','Team Leader + CS, dengan komentar di BO','Mengirim pesan langsung ke keluarga tentang kemungkinan perubahan level'], correct:1, fb:'Inilah tepatnya saat kasus “terlalu sulit” perlu diteruskan ke Team Leader dan CS, secara tertulis, di BO.'},
   {type:'choice', prompt:'Seorang anak di grupmu memiliki diagnosis autisme yang tercatat di profilnya, dan kamu baru saja diberi tahu bahwa grup akan disusun ulang dengan tutor baru bulan depan.', opts:['Menunggu sampai perubahannya pasti sebelum menyampaikannya kepada siapa pun','Segera memberi tahu Team Leader-mu, menulis serah terima lengkap di BO, dan menyepakati cara menyampaikan perubahan itu','Memberi tahu anak itu sendiri secara pribadi, saat itu juga, agar ia punya waktu bersiap'], correct:1, fb:'Kebutuhan pendidikan khusus ditambah perubahan kesinambungan harus segera ditandai — dan cara menyampaikannya harus disepakati dulu dengan Team Leader-mu.'},
   {type:'choice', prompt:'Dua pelajaran berturut-turut terganggu karena masalah platform, dan orang tua baru saja menanyakan tentang pelajaran pengganti.', opts:['Mengatakan bahwa pelajaran pengganti tidak mungkin','Mengatakan bahwa kamu sendiri yang akan mengaturnya, agar mereka cepat tenang','Mengonfirmasi bahwa kamu akan menyampaikannya, lalu berbicara dengan Team Leader-mu di hari yang sama tentang pelajaran tambahan'], correct:2, fb:'Menolak ataupun berjanji bukan wewenangmu — tetapi memulai pembicaraan internal di hari yang sama memang tugasmu.'},
   {type:'choice', prompt:'Orang tua mengirim pesan bahwa level, paket, atau jadwalnya tidak sesuai dengan yang disampaikan saat mendaftar.', opts:['Membalas di hari yang sama dengan penjelasan terjujur yang kamu punya','Mengonfirmasi pesan sudah diterima, lalu menyampaikannya ke Team Leader dan CS sebelum membalas secara lengkap, sambil mencatat kata-kata mereka apa adanya di BO','Meneruskannya ke CS dan menganggapnya bukan urusanmu lagi'], correct:1, fb:'Inilah satu-satunya situasi di mana menjawab sendiri menimbulkan kerusakan paling besar. Selalu koordinasi dulu — tetapi jangan juga diam saja.'}
  ]
 }
},
{id:'m7', numLabel:'Modul 7', emoji:'🛟', color:'var(--coral)',
 title:'Menyelamatkan Permintaan Pengembalian Dana',
 desc:'Semua hal sejauh ini adalah tentang mencegah permintaan. Modul ini membahas apa yang harus dilakukan setelah permintaan itu diajukan.',
 obj:'Mengetahui apa yang berubah setelah permintaan pengembalian dana diajukan: apa yang harus dicapai pelajaran berikutnya, apa yang boleh dan tidak boleh kamu katakan, dan bagaimana terus memberi CS apa yang mereka butuhkan.',
 sections:[
  {t:'🔀 7.1 · Semuanya berubah setelah ada permintaan', html:`
   <div class="card"><p>Modul 1 sampai 6 membahas cara menyikapi hal ini <strong>sebelum</strong> keluarga meminta uangnya kembali. Modul ini untuk saat hal itu sudah terjadi: <strong>permintaan pengembalian dana sudah diajukan</strong>, dan kamu sudah diberi tahu.</p></div>
   ${co('co-idea','💡',`<p><strong>Permintaan itu sendiri dibuat oleh Manajer CS, bukan oleh kamu.</strong> Bagian itu sama sekali tidak berada dalam kendalimu. Yang masih menjadi tanggung jawabmu adalah semua hal yang terjadi di pelajaran mulai sekarang — dan itu bukan hal kecil.</p>`)}
   ${co('co-danger','🚨',`<p><strong>Jangan mengatakan apa pun tentang permintaan itu</strong> — tidak kepada anak, tidak kepada keluarga — kecuali CS secara eksplisit memintamu menyampaikan sesuatu yang spesifik. Tugasmu sekarang adalah pelajarannya, bukan percakapannya.</p>`)}
  `},
  {t:'🎯 7.2 · Pelajaran berikutnya dengan anak ini adalah upaya mempertahankannya', html:`
   <div class="card"><p>Mungkin kamu tidak akan punya kesempatan lain untuk mengubah apa pun. Perlakukan pelajaran berikutnya sebagai momen penentu.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Beri ia giliran yang nyata.</strong> Bukan pertanyaan basa-basi — melainkan momen sungguhan di mana ia dilihat dan berhasil.`},
     {ic:'🏆', html:`<strong>Siapkan keberhasilan awal yang mudah dan terlihat.</strong> Ia harus meninggalkan pelajaran dengan perasaan mampu, bukan tertinggal.`},
     {ic:'👀', html:`<strong>Buat ia merasa diperhatikan</strong> — secara spesifik, bukan umum. Aturan yang sama seperti setiap obrolan empat mata dalam pelatihan ini.`},
     {ic:'🤐', html:`<strong>Jangan menyinggung permintaan itu.</strong> Pelajaran ini bukan tempat untuk percakapan itu, bahkan jika anak sendiri yang mengungkitnya — alihkan dengan hangat dan lanjutkan mengajar.`}
   ])}
  `},
  {t:'📮 7.3 · Beri informasi ke CS dengan cepat — ini tetap tugasmu', html:`
   <div class="card"><p>CS menangani permintaan itu tanpa hadir di pelajaranmu. Apa yang kamu lihat, secara rinci dan cepat, adalah informasi yang tidak bisa mereka dapatkan dengan cara lain.</p></div>
   ${checkbox([
     'Komentar di BO berisi persis apa yang kamu lihat — tanggal, hal-hal spesifik, bukan kesan',
     'Pakai kata-kata asli dari pihak keluarga jika tersedia — jangan diubah',
     'Apa pun yang sudah kamu sesuaikan atau tawarkan, agar CS tidak mengulanginya',
     'Team Leader-mu diberi kabar, di hari yang sama'
   ])}
   ${co('co-idea','💡',`<p>Kamu bisa mengetahui adanya permintaan melalui komentar CS sendiri di profil anak di BO — tidak ada sistem otomatis yang memberitahumu begitu sebuah keluarga meminta pengembalian dana. Kamu yang memberi sinyal kepada CS; mereka tidak mengirimimu kabar terbaru.</p>`)}
  `},
  {t:'🚧 7.4 · Apa yang boleh dan tidak boleh kamu lakukan', html:`
   <div class="card"><div class="tbl-wrap"><table>
   <tr><th>✅ Kamu boleh</th><th>🚫 Kamu tidak pernah boleh</th></tr>
   <tr><td>Memberi tahu CS melalui BO begitu kamu mengetahui ada permintaan</td><td>Mengonfirmasi bahwa pengembalian dana sudah disetujui</td></tr>
   <tr><td>Jika ada kesempatan yang wajar <strong>sebelum</strong> pemberitahuan itu, menawarkan sesuatu yang konkret — pelajaran tambahan, pengecekan level, merekomendasikan kursus lain</td><td>Mengonfirmasi atau membahas jumlah uang apa pun</td></tr>
   <tr><td>Memberi tahu orang tua bahwa CS akan membantu mereka</td><td>Mengatakan atau menyiratkan apa pun di luar itu tentang permintaan tersebut</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>Pesan yang selalu aman untuk disampaikan:</strong> <em>“CS akan membantu Bapak/Ibu soal ini.”</em> Tidak lebih — di situlah bagianmu berakhir, dan itu percakapan yang informasinya tidak kamu miliki.</p>`)}
  `},
  {t:'🌱 7.5 · 2–4 pelajaran setelah anak berhasil dipertahankan', html:`
   <div class="card"><p>Entah permintaannya ditarik, anak tetap di grupmu, pindah ke tutor lain, atau beralih ke pelajaran satu-lawan-satu — beberapa pelajaran berikutnya menentukan apakah upaya mempertahankannya benar-benar berhasil.</p></div>
   ${iconGrid([
     {ic:'🔁', html:`<strong>Perhatian ekstra, di setiap pelajaran tersebut</strong> — giliran nyata, keberhasilan yang spesifik, ketidakhadiran yang disadari — semua yang diajarkan pelatihan ini, berulang kali.`},
     {ic:'📝', html:`<strong>Serah terima lengkap</strong> di Komentar BO jika anak pindah ke tutor atau format baru — kedisiplinan serah terima yang sama seperti di Modul 5.6.`},
     {ic:'👋', html:`<strong>Kesinambungan yang hangat</strong> jika ia tetap bersamamu — jangan biarkan kelegaan karena “berhasil” membuatmu diam-diam kembali ke cara lama.`}
   ])}
  `},
  {t:'🔙 7.6 · Pencegahan tetap menjadi intinya', html:`
   <div class="card"><p>Semua yang ada di bawah ini sudah dibahas di Modul 1 sampai 6 — ini versi singkatnya, sebagai pengingat bahwa sebagian besar tugasmu adalah memastikan modul ini tidak pernah dibutuhkan.</p></div>
   ${checkbox([
     'Tindak lanjuti PR, setiap minggu',
     'Pertahankan struktur pelajaran yang lengkap — jangan biarkan mengendur ketika grup terasa mudah',
     'Laporkan lebih dari dua ketidakhadiran, atau masalah teknis, segera setelah terjadi',
     'Eskalasikan ke Team Leader-mu begitu kamu melihat sinyal risiko',
     'Kirim laporan perhatian siswa saat kamu diharapkan mengirimkannya'
   ])}

  `}
 ],
 ix:{
  title:'Saat permintaan sudah masuk',
  instr:'Untuk setiap skenario, pilih langkah yang tepat. 70% untuk melanjutkan.',
  items:[
   {type:'choice', prompt:'Kamu baru tahu bahwa sebuah keluarga mengajukan permintaan pengembalian dana untuk seorang anak di grupmu. Apa yang kamu lakukan pertama kali?', opts:['Mengirim pesan ke keluarga untuk mencari tahu alasannya, agar kamu bisa langsung menanganinya','Memberi tahu CS melalui BO dan memberi kabar ke Team Leader-mu di hari yang sama','Menunggu CS menghubungimu sebelum melakukan apa pun'], correct:1, fb:'Permintaan itu sudah ada di tangan CS — tugasmu adalah menyampaikan apa yang kamu ketahui kepada mereka, dengan cepat, bukan membuka percakapan sendiri dengan keluarga.'},
   {type:'choice', prompt:'Di pelajaran berikutnya dengan anak itu, apa yang perlu berubah?', opts:['Tidak ada — bersikap berbeda bisa membuatnya curiga ada yang tidak beres','Memberinya keberhasilan yang nyata dan terlihat serta memastikan ia merasa diperhatikan — tanpa menyinggung permintaan itu','Berbicara langsung dengan anak tentang mengapa keluarganya ingin berhenti'], correct:1, fb:'Pelajaran itu sendiri adalah upaya mempertahankannya. Permintaan itu sendiri tidak pernah boleh dibahas dengan anak.'},

   {type:'choice', prompt:'Orang tua bertanya langsung kepadamu apakah pengembalian dana mereka sudah disetujui. Apa yang kamu katakan?', opts:['Memberi tebakan terbaikmu berdasarkan biasanya kasus seperti ini berjalan','Mengatakan bahwa CS akan membantu mereka soal ini, dan cukup sampai di situ','Mengonfirmasi jumlah yang menjadi hak mereka, jika kebetulan kamu mengetahuinya'], correct:1, fb:'Mengonfirmasi persetujuan atau jumlah uang tidak pernah menjadi wewenangmu, seyakin apa pun kamu. Satu-satunya kalimat aman adalah mengarahkan mereka ke CS.'},
   {type:'choice', prompt:'Permintaannya ditarik dan anak tetap di grupmu. Lalu apa?', opts:['Kembali seperti biasa — krisisnya sudah lewat','Terus memberi anak itu perhatian ekstra selama beberapa pelajaran berikutnya, karena upaya mempertahankan masih bisa gagal','Mengatakan kepada keluarga bahwa kamu senang mereka berubah pikiran'], correct:1, fb:'Upaya mempertahankan yang bertahan satu pelajaran lalu kembali seperti biasa sering kali tidak bertahan sama sekali. Beberapa pelajaran berikutnyalah yang benar-benar menentukan.'}
  ]
 }
},
{id:'checklist', numLabel:'Modul 8', emoji:'✅', color:'var(--green-d)',
 title:'Daftar Periksa Akhir',
 desc:'Tidak ada kuis di sini — hanya semua isi pelatihan ini, dalam satu daftar, sebelum kamu mengikuti ujian.',
 obj:'Tinjau daftar periksa lengkap di bawah ini. Modul ini tidak dinilai — bacalah, lalu lanjutkan ke Ujian Akhir.',
 sections:[
  {t:'✅ Hal-hal penting, dalam satu daftar', html:`
   ${numlist([
     'Aku memeriksa profil siswa, termasuk Komentar, <strong>sebelum</strong> pelajaran pertamaku dengan anak baru',
     'Aku memeriksa tampilan Progres untuk seluruh grupku seminggu sekali — Di Kelas maupun Di Rumah',
     'Aku menganggap garis datar di angka nol sebagai tanda paling serius, bukan tanda netral',
     'Setiap anak di grupku mendapat giliran nyata, dan aku bisa membuktikannya karena aku mencatatnya',
     'Saat seorang anak tidak hadir, aku menjalankan keempat langkahnya, bukan hanya mengirim rekaman',
     'Aku mengenali pola yang sedang kulihat, dan aku merespons masing-masing dengan cara berbeda',
     'Aku selalu memberi tahu Team Leader-ku, melibatkan CS bila perlu, dan meninggalkan komentar di BO',
     'Saat CS mengambil alih sebuah percakapan, aku tidak ikut campur dan mengikuti arahan mereka',
     'Aku mengeskalasikan sekali, lalu menindaklanjutinya'
   ])}
  `},
  {t:'🪞 Refleksi diri — layak ditanyakan kepada dirimu setiap minggu', html:`
   ${numlist([
     'Apakah minggu ini aku menyadari penurunan tugas kelas atau PR pada anak mana pun, bahkan yang tetap hadir seperti biasa?',
     'Apakah ada anak di grupku yang nilai tugasnya nol, dan diam-diam tidak lagi kuperhatikan?',
     'Apakah setiap anak di grupku mendapat giliran nyata di pelajaran terakhirku? Apakah aku yakin, atau hanya mengira-ngira?',
     'Apakah ada sesuatu yang sudah kusadari tetapi belum kuberitahukan kepada siapa pun?',
     'Apakah ada sesuatu yang sudah kusampaikan kepada seseorang tetapi tidak pernah kutindaklanjuti?'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Itulah seluruh pelatihannya.</strong> Jika kamu sudah siap, lanjutkan ke Ujian Akhir — lalu selesaikan DST di LMS untuk menutup tugas ini.</p>`)}
  `}
 ],
 gateExam:true
},
    ];
  }
};

"use client";
import { useState } from "react";
import Link from "next/link";

const NOTES = [
  {
    id: "guvenlik-sistem-cihazlari",
    title: "Güvenlik Sistem ve Cihazları",
    icon: "📡",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.2)",
    desc: "Fiziki engeller, metal detektörler, X-ray cihazları, CCTV sistemleri ve erişim kontrol teknolojileri.",
    sections: [
      {
        heading: "Fiziki Engeller",
        content: `<p><strong>1. Doğal Engeller:</strong> Dağlar, tepeler, su yolları</p>
<p><strong>2. İnsan Yapımı Fiziki Engeller:</strong> Duvarlar, tel örgüler, çitler, kuleler, bariyer, aydınlatma, kilit sistemleri, ikaz levhaları, kapanlar, hız kesme kasisleri, araç engelleri</p>`,
      },
      {
        heading: "El Tipi Metal Detektörleri",
        content: `<p>Metalle karşılaştıklarında sesli veya ışıklı uyarı sinyali veren, metale duyarlı cihazlardır.</p>
<p><strong>Kullanımında Dikkat Edilmesi Gereken Hususlar:</strong></p>
<ul>
<li>Cihaz çalışır durumda ve yaklaşık 5 cm (2,5–7,5 cm) mesafeden gezdirilmelidir</li>
<li>Tüm vücudu tarayacak şekilde kullanılmalıdır</li>
<li>Arama sırasında cihaz hareket halinde olmalıdır</li>
<li>Kullanım sırasında şarjının dolu olması gerekir</li>
<li>Kontrol edilen kişi bayan ve etek giyinmişse, kontrol bayan görevli tarafından yapılmalıdır</li>
<li>Fiziki kontrol, herkesin göremeyeceği ayrı bir odada yapılmalı ve ikinci bir şahıs da bulunmalıdır</li>
<li>Özürlü kişilerin kontrolünde incitici davranışlardan kaçınılmalıdır</li>
<li>Suç unsuru eşya bulunursa alınarak tutanakla tespit edilmelidir</li>
</ul>
<p><strong>El Detektörleri Bakımı:</strong></p>
<ul>
<li>Islak zemine ve metal zemine bırakılmamalı</li>
<li>İnsanın baş kısmına tutulmamalı</li>
<li>Kapalı durumda iken şarj edilmelidir</li>
</ul>`,
      },
      {
        heading: "Kapı Tipi Metal Detektörler",
        content: `<p>Aşırı hava akımından, sıcak-soğuk ve nemden etkilenerek yanlış alarm verebilir.</p>
<p><strong>Montaj Mesafeleri:</strong></p>
<ul>
<li>Hareketli metallerle aralarında en az <strong>1 metre</strong></li>
<li>Yan yana birden fazla detektör çalıştırılması gerekiyorsa aralarında en az <strong>50 cm</strong> mesafe</li>
</ul>
<p><strong>Kullanımında Dikkat Edilmesi Gereken Hususlar:</strong></p>
<ul>
<li>Kontrol edilecek kişiler metal maddeleri çıkarmaları hususunda uyarılmalıdır</li>
<li>Alarmın kaynağını tespit ederken el detektörü kullanılmalıdır</li>
<li>Kişiler detektöre 1 metre mesafede bekletilmeli, cihaz hazır olmadan ikinci kişi geçirilmemelidir</li>
<li>Metal detektörden geçen kişilerin el bagajları X-ray cihazıyla kontrol edilmelidir</li>
<li>Hamile bayanlar ve kalp rahatsızlığı olanlar geçmeye zorlanmamalıdır</li>
</ul>`,
      },
      {
        heading: "X-Ray Cihazı",
        content: `<p>Bagajı açmadan, içerisinde tehlikeli madde olup olmadığını X ışını geçirerek gösteren, düşük radyasyonla çalışan cihazlardır.</p>
<p><strong>Ana Üniteler:</strong></p>
<ul>
<li><strong>X ışını ünitesi:</strong> X ışınlarının gönderildiği, algılandığı ve eşyaların konulduğu taşıyıcı bandın bulunduğu ünite</li>
<li><strong>Ekran:</strong> Aygıttan geçen eşyaların içinin görüldüğü yer</li>
<li><strong>Kontrol paneli:</strong> Aygıtı kontrol eden düğmelerin yer aldığı kısım</li>
</ul>
<p><strong>Dikkat Edilmesi Gereken Hususlar:</strong></p>
<ul>
<li>Paket ve bavullar taşıma bandına aralarında en az <strong>50 cm</strong> olacak şekilde konulmalıdır</li>
<li>İnceleme sırası: önce büyük, sonra küçük cisimler</li>
<li>Kesin fikir edinilemeyen bagaj sahibine açtırılarak kontrol edilmeli</li>
<li>Cihaz çalışırken tünele el sokulmamalı</li>
<li><strong>Canlılar hiçbir şekilde X-ray cihazıyla kontrol edilmemelidir</strong></li>
</ul>
<p><strong>Renk Kodları:</strong></p>
<ul>
<li>Koyu mavi → Metal maddeler</li>
<li>Sütlü kahverengi / turuncu → Organik maddeler</li>
<li>Yeşil → Az yoğun maddeler</li>
</ul>
<p><strong>Dozimetre:</strong> X-ray cihazı kullanan personelin maruz kaldığı X ışını dozunu ölçmek için kullanılan filmli karttır. Başka birine ödünç verilmez; toka ve metal parçaların yanına konulmaz.</p>`,
      },
      {
        heading: "CCTV (Kapalı Devre TV) Sistem Bileşenleri",
        content: `<ul>
<li><strong>Kamera:</strong> Görüntüyü video sinyaline çevirerek monitöre aktarır</li>
<li><strong>Monitör:</strong> Video sinyalini ekranda gösterir</li>
<li><strong>Switcher (Seçici):</strong> Kameralar arasında atlamalı görüntü sağlar</li>
<li><strong>Quad (Bölücü):</strong> Aynı ekranda 4 kamerayı eşzamanlı izlemeye imkân tanır</li>
<li><strong>Video Kayıt Cihazı:</strong> 3 saatten 960 saate kadar aralıklı kayıt yapabilir</li>
<li><strong>Multiplexer (Çoklayıcı):</strong> Aynı anda 8 veya 16 kameranın görüntüsünü tek ekrandan izleme sağlar</li>
<li><strong>Pan-Tilt:</strong> Sabit kameraya sağa-sola, yukarı-aşağı hareket verir; 5 derece/saniye hızında döner</li>
<li><strong>Housing:</strong> Kameraları toz, duman, su ve müdahalelere karşı koruyan muhafaza</li>
</ul>`,
      },
      {
        heading: "Erişim Kontrol Sistemleri",
        content: `<ul>
<li><strong>Biyometrik Cihazlar:</strong> El yazısı, iris ve retina şekli, damar yapısı, ses karakteristiği gibi özelliklerle giriş-çıkış yetkilendirmesi sağlar</li>
<li><strong>PDKS (Personel Devam Kontrol Sistemi):</strong> Çalışanların giriş-çıkış zamanlarını kayıt ve kontrol altına alır</li>
<li><strong>Turnike Geçiş Sistemleri:</strong> Sadece izin verilen kişinin geçişini sağlar. Tam boy, yarım boy ve hızlı geçiş çeşitleri vardır</li>
</ul>`,
      },
    ],
  },
  {
    id: "etkili-iletisim",
    title: "Etkili İletişim",
    icon: "💬",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.2)",
    desc: "İletişim türleri, empati, mekan kullanımı, stres belirtileri ve iletişim engelleri.",
    sections: [
      {
        heading: "İletişim Çeşitleri ve Türleri",
        content: `<p><strong>İletişim Çeşitleri:</strong> Paralel iletişim, çapraz iletişim, örtülü iletişim</p>
<p><strong>İletişim Türleri:</strong> Kişi içi, kişiler arası, örgüt içi, kitle iletişimi</p>
<p><strong>Kitle İletişiminin 4 Temel İşlevi:</strong></p>
<ul>
<li>Haber işlevi</li>
<li>Yönetime katılma işlevi</li>
<li>Öğretici olma işlevi</li>
<li>Eğlendirme işlevi</li>
</ul>
<p><strong>Kitle İletişiminin Ortaya Çıkardığı Sorunlar:</strong> İletişim kaynaklarının etkisinde kalma, propaganda etkisi, topluma yabancılaşma</p>`,
      },
      {
        heading: "Temel Kavramlar",
        content: `<p><strong>Empati:</strong> "Bir insanın kendisini karşısındaki insanın yerine koyarak olaylara onun bakış açısıyla bakması"</p>
<p><strong>Motivasyon:</strong> İnsanları teşvik etme ve belirli amaçları gerçekleştirmeleri için harekete geçirme süreci.</p>
<p><strong>İletişimin 4 Temel Amacı:</strong> Var olmak, haberleşmek, paylaşmak, etkilemek ve yönlendirmek</p>
<p><strong>İletişim Sürecinin 5 Ögesi:</strong></p>
<ul>
<li><strong>Kaynak (Verici):</strong> İletişimi başlatan kişi ya da kurum</li>
<li><strong>Alıcı (Hedef):</strong> Mesajın ulaşması istenen kişi veya topluluk</li>
<li><strong>Mesaj (İleti):</strong> İletilmek istenen konu</li>
<li><strong>Kanal:</strong> Gönderici ile alıcı arasındaki bağ</li>
<li><strong>Geri Bildirim (Feed Back):</strong> Mesajın doğru alınıp yorumlandığını öğrenmesini sağlar</li>
</ul>`,
      },
      {
        heading: "Mekan Kullanımı ve Mesafe Bölgeleri",
        content: `<p>İnsanın çevresinde oluşturduğu boş mekanlar aracılığıyla başkalarına mesaj iletmesidir.</p>
<ul>
<li><strong>Mahrem alan:</strong> 0–35 cm (yalnızca çok yakın kişiler)</li>
<li><strong>Kişisel alan:</strong> 40–80 cm (yakınların giriş izni verdiği mesafe)</li>
<li><strong>Sosyal alan:</strong> 80 cm – 2 m (resmi ilişkiler bölgesi)</li>
<li><strong>Genel alan:</strong> 2 m ve daha fazlası (tanımadığımız kişilerle mesafe)</li>
</ul>`,
      },
      {
        heading: "Stres Belirtileri",
        content: `<p><strong>Psikolojik Sorunlar:</strong> Öfke, kaygı, depresyon, sinirlilik, aşırı duyarlılık, gerginlik, can sıkıntısı, korku</p>
<p><strong>Davranışsal Sorunlar:</strong> İştah artması ya da azalması, kekeleme, ağlama, uykusuzluk, dişleri sıkma, aşırı sigara/madde kullanımı</p>
<p><strong>Bedensel Sorunlar:</strong> Kalp rahatsızlığı, yüksek tansiyon, çarpıntı, mide rahatsızlıkları, titreme, yorgunluk, baş ağrısı, sırt/boyun problemleri</p>`,
      },
      {
        heading: "İletişimin Önündeki Engeller",
        content: `<ul>
<li>Korkular</li>
<li>Ön kabuller ve ön yargılar</li>
<li>Duyarsızlık</li>
<li>İsim takmak, alay etmek</li>
<li>Kararsızlık ve alınganlık</li>
<li>Ben merkezcilik</li>
<li>Kutuplaştırma</li>
<li>Değiştirme gayreti</li>
<li>Aşırı fedakarlık ve keşkecilik</li>
</ul>`,
      },
    ],
  },
  {
    id: "ozel-guvenlik-hukuku",
    title: "Özel Güvenlik Hukuku",
    icon: "⚖️",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.2)",
    desc: "5188 sayılı Kanun, güvenlik görevlisinin yetkileri ve 25 madde ile yasal sorumluluklar.",
    sections: [
      {
        heading: "Temel Hukuki Bilgiler (1–10)",
        content: `<ol>
<li>Toplu kuvvet olarak müdahale edilen olaylarda zor kullanmanın derecesini <strong>"müdahale eden kuvvetin amiri"</strong> belirler.</li>
<li>Özel güvenlik görevlisinin el koyma ve zapt etme yetkisi <strong>"emanete alma"</strong> olarak tanımlanmıştır.</li>
<li>Özel güvenlik görevlisi, görev alanında işlenmiş ve işlenmekte olan suçları <strong>"genel kolluğa"</strong> bildirmeye zorunludur.</li>
<li>Anayasa madde 17/3: "Kimseye işkence ve eziyet yapılamaz" — <strong>kişi dokunulmazlığını</strong> güvence altına almıştır.</li>
<li>Adli aramaya karar verme yetkisi <strong>"hakimindir"</strong>.</li>
<li>Göreve başlayan özel güvenlik görevlileri <strong>"15 gün içinde valiliğe"</strong> bildirilir.</li>
<li>Özel güvenlik görevlileri yetkilerini <strong>"görev alanında, görev süresince, suçüstü halinde, kimlik kartı yakaya takılı olduğunda"</strong> kullanabilirler.</li>
<li>Disiplin cezasına karşı <strong>"iş mahkemesine"</strong> başvurulabilir.</li>
<li>5188 Sayılı Kanun ile <strong>"2495 Sayılı Kanun"</strong> yürürlükten kaldırılmıştır.</li>
<li>Suçun unsurları <strong>"maddi – manevi – kanunilik"</strong> tir.</li>
</ol>`,
      },
      {
        heading: "Temel Hukuki Bilgiler (11–25)",
        content: `<ol start="11">
<li>Temel hak ve hürriyetler <strong>"ancak kanunla sınırlandırılabilir"</strong>.</li>
<li>Özel güvenlik görevlileri suçla karşılaştıklarında: <strong>suça el koyar, suçun devamını engeller, sanığı yakalar, olay yeri ve delilleri korurlar.</strong></li>
<li>Genel kolluk dışında, özel yasalarına göre kurulan sınırlı yetkili kolluğa <strong>"özel kolluk"</strong> denir.</li>
<li>Bir mal üzerindeki tasarruf yetkisinin kamu gücüyle kaldırılmasına <strong>"el koyma"</strong> denir.</li>
<li>Özel güvenlik komisyonunda kararlar <strong>"oy çokluğu"</strong> ile alınır.</li>
<li>Uzun namlulu silah bulundurma gerekiyorsa <strong>"Genelkurmay Başkanlığının"</strong> görüşü alınmalıdır.</li>
<li>Geçici ve acil hallerde özel güvenlik izni <strong>"Vali"</strong> tarafından verilir.</li>
<li>Ateşli silahlar <strong>"devir teslim ve rapor defterine"</strong> imza karşılığı devir teslim edilir.</li>
<li>Ateşli silah miktarı ve özellikleri <strong>"özel güvenlik komisyonu"</strong> tarafından belirlenir.</li>
<li>Önleyici kolluk hizmetleri bakımından özel güvenlik <strong>"mülki amire"</strong> bağlıdır.</li>
<li>Yakalanan kişi veya emanete alınan eşya <strong>"yetkili genel kolluğa"</strong> teslim edilir.</li>
<li>Genel kolluk kuvvetleri: <strong>Polis – Jandarma – Sahil Güvenlik</strong></li>
<li>Yapılması istenilen hizmetin söz ve yazı ile ifadesine <strong>"emir"</strong> denir.</li>
<li>Havalimanında istihdam edilecek ÖGG'ler <strong>"Uyuşturucu Madde Bilgileri Dersini"</strong> almak zorundadır.</li>
<li>Ülkenin genel asayiş ve güvenliğinden <strong>"İçişleri Bakanlığı"</strong> sorumludur.</li>
</ol>`,
      },
    ],
  },
  {
    id: "kisi-koruma",
    title: "Kişi Koruma",
    icon: "🛡️",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.2)",
    desc: "VIP koruma teknikleri, suikast safhaları, koruma çemberleri ve konvoy araçları.",
    sections: [
      {
        heading: "Suikastların Nedenleri ve Koruma Çeşitleri",
        content: `<p><strong>Suikastların Temel Nedenleri:</strong> Siyasi, ekonomik, psikolojik, kişisel nedenler, dini ve sosyal inançlar, terör</p>
<p><strong>Koruma Çeşitleri:</strong></p>
<ul>
<li><strong>Özel koruma:</strong> Önemli kişiyi konutta, işyerinde, gezide vb. yerlerde koruma</li>
<li><strong>Yakın koruma:</strong> Önemli kişiyi konutu dışında koruma</li>
<li><strong>Konut ve işyeri koruma</strong></li>
<li><strong>Çağrı üzerine koruma:</strong> Önemli kişinin çağrısı üzerine görevlendirme</li>
</ul>`,
      },
      {
        heading: "Yaya Koruma Teknikleri",
        content: `<ul>
<li><strong>1 Kişiyle:</strong> 360 derecelik koruma (refakat koruması)</li>
<li><strong>2 Kişiyle:</strong> Her görevli 180 derecelik koruma; öndeki öncü görevi de görür</li>
<li><strong>3 Kişiyle:</strong> Her görevli 120 derecelik koruma; yoğun alanlarda kullanılır</li>
<li><strong>4 Kişiyle:</strong> Koruma amiri VİP'e yönelir; diğerleri 120 derece</li>
<li><strong>5 Kişiyle:</strong> Koruma amiri VİP'e yönelir; diğerleri 90 derece</li>
<li><strong>6 Kişiyle:</strong> Koruma amiri VİP'e yönelir; diğerleri 72 derece</li>
</ul>`,
      },
      {
        heading: "Terörist Saldırı Safhaları ve Temel Prensipler",
        content: `<p><strong>5 Safhası:</strong></p>
<ol>
<li>Hedef seçme</li>
<li>Bilgi toplama</li>
<li>Plan</li>
<li>Saldırı</li>
<li>Kaçış</li>
</ol>
<p><strong>Temel Koruma Prensipleri:</strong></p>
<ul>
<li>Günümüzde tam koruma mümkün değildir</li>
<li>Kaçış istikameti ve güvenli yer önceden tespit edilmelidir</li>
<li>Koruma hizmeti önemli kişiyi engellememelidir</li>
<li>Koruma sürekli (24 saat) olmalıdır</li>
<li>Giriş-çıkış saatleri rutin olmamalıdır</li>
<li>Ekip birbiriyle uyumlu olmalıdır</li>
</ul>`,
      },
      {
        heading: "Koruma Çemberleri",
        content: `<ul>
<li><strong>Dış Çember:</strong> Hakim yere yerleştirilmiş keskin nişancılar; yaklaşma istikametlerini kapatır</li>
<li><strong>Orta Çember:</strong> Savunma hattı; yerel kolluk veya sabit özel güvenlik personelinden oluşur</li>
<li><strong>İç Çember:</strong> Korunan kişinin en yakınında, yakın koruma personeli tarafından oluşturulan en önemli halka</li>
</ul>`,
      },
      {
        heading: "Boğma (Boğum) Noktaları",
        content: `<p>Korunan kişinin geçmek zorunda olduğu, alternatifi olmayan, hız yapmaya müsait olmayan noktalardır. Saldırılar en çok buralarda gerçekleştirilmektedir.</p>
<p><strong>Boğma Noktaları:</strong></p>
<ul>
<li>Trafik lambalarının bulunduğu yerler ve kavşaklar</li>
<li>Yol çalışmaları ve kırsal/ıssız alanlar</li>
<li>Tüneller, hemzemin, alt-üst geçitler</li>
<li>Araçların manevra yapmasına imkan vermeyecek darlıktaki yollar</li>
<li>Araçtan iniş-biniş noktaları</li>
</ul>`,
      },
      {
        heading: "Konvoy Araçları ve Makam Aracı",
        content: `<p><strong>Konvoyu Oluşturan Araçlar:</strong></p>
<ul>
<li>Öncü İstihbarat Aracı</li>
<li>Eskort Aracı (Kılavuz Araç)</li>
<li>Öncü Koruma Aracı</li>
<li>Makam Aracı</li>
<li>Karşı Müdahale Ekip Aracı</li>
<li>Ambulans</li>
<li>Motosikletler</li>
<li>Konuk Heyet Aracı, Basın Aracı, Artçı Araç</li>
</ul>
<p><strong>Makam Aracında Aranan Özellikler:</strong> Motoru güçlü ve hızlı, zırhlı, 4×4 çeker, dört kapılı, çarpışmalara karşı dayanıklı, ülkenin hava ve yol şartlarına uygun olmalı</p>`,
      },
    ],
  },
  {
    id: "kalabalik-yonetimi",
    title: "Kalabalık Yönetimi",
    icon: "👥",
    color: "#10b981",
    glow: "rgba(16,185,129,0.2)",
    desc: "Kalabalık çeşitleri, toplu düzenler, göz yaşartıcı gazlar ve cop teknikleri.",
    sections: [
      {
        heading: "Davranış Türleri ve Grup/Kalabalık Farkı",
        content: `<p><strong>Doğuştan Gelen Davranışlar:</strong></p>
<ul>
<li><strong>Refleks:</strong> Beyne ulaşmadan omurilik tarafından yönetilir; bilinç dışı, kalıtsal ve türe özgüdür</li>
<li><strong>İçgüdüsel Davranış:</strong> Belli bir uyarıya karşı her zaman aynı tepki gösterilir</li>
</ul>
<p><strong>Sonradan Kazanılan Davranışlar:</strong> Bilgi (teorik), beceri (uygulamalı, otomatik), tutum (inançlar ve alışkanlıklar)</p>
<p><strong>Grup Olmanın Koşulları:</strong> Uzun süreli ilişki, ortak amaçlar, belirli normlar, karşılıklı roller, üyelik bilinci</p>
<p><strong>Kalabalığın Özellikleri:</strong> Dar alanda toplanır, aralarında iş bölümü yoktur, birbirlerini tanımazlar, gelip geçici heyecan paylaşırlar, duygusaldırlar</p>`,
      },
      {
        heading: "Kalabalık Çeşitleri",
        content: `<ol>
<li><strong>İrade Kalabalığı:</strong> Tiyatro, spor etkinlikleri, dans partileri</li>
<li><strong>Dinleyici Kalabalıkları:</strong> Konser, konferans, basın açıklaması</li>
<li><strong>Dini Hizmetlere Yönelik Kalabalıklar:</strong> Camilerde, tarikat mensupları</li>
<li><strong>Önceden Planlanmış Toplantılar:</strong> Dernekler, siyasi parti toplantıları</li>
<li><strong>Kızgın Kalabalıklar:</strong> Aniden oluşan, etrafa zarar veren, isyan eden kalabalıklar</li>
</ol>`,
      },
      {
        heading: "Olayları Başlatma ve Eylem Biçimleri",
        content: `<p><strong>Olayların Hazırlık Safhası:</strong> Önderlik, kabarma devresi, topluluğun büyümesi, fikrî hazırlık, çabuklaştırıcı olay, kontrolden çıkış</p>
<p><strong>Eylem Biçimleri:</strong></p>
<ul>
<li>Hakaret ve tahrik</li>
<li>Yazılı ve sözlü gereçlerle tahrik</li>
<li>Bazı maddelerin atılması</li>
<li>El silahları ve ateşli silah kullanılması</li>
<li>Eşya tahribi ve yağma</li>
</ul>`,
      },
      {
        heading: "Toplu Düzenler",
        content: `<p><strong>1. Hat Düzeni:</strong> Yol veya alan kapatma, bina/şahıs koruma, iki grubu birbirinden ayırma, her yönden gelebilecek tehditlere karşı tedbir alma</p>
<p><strong>2. Çember Düzeni:</strong> Bir şahsı veya kıymetli malzemeyi koruma, 360 derecelik koruma gerektiren hallerde kullanılır</p>
<p><strong>3. Kama Düzeni:</strong> Topluluğu bölmek ve yanlara dağıtmak, lider suçluları yakalamak, kalabalık içinde yol açmak için kullanılır</p>`,
      },
      {
        heading: "Göz Yaşartıcı Gazların Yayılma Yolları ve Etkileri",
        content: `<p><strong>4 Yayılma Yöntemi:</strong></p>
<ol>
<li><strong>Yanma ile:</strong> Geri atılmaya zaman bırakır; psikolojik etkisi yüksektir</li>
<li><strong>Patlama ile:</strong> Geri atılmaya zaman bırakmaz</li>
<li><strong>Sıkıştırılmış Aerosol ile:</strong> Ani ve dengeli yayar; güvenlik güçlerince en çok tercih edilir</li>
<li><strong>Sisleme ile:</strong> Yoğun toz bulutu oluşturur</li>
</ol>
<p><strong>Fizyolojik Etkiler (10–20 dakikada geçer):</strong> Göz yaşarması, yanma, ağız-burun salgısında artış, nefes darlığı, öksürme, denge kaybı, mide bulanması</p>
<p><strong>İlk Yardım:</strong> Gazlı ortamdan uzaklaş, temiz havaya çık, gözleri rüzgâra karşı aç, bol su ile yıka; kolonya, krem veya losyon sürme.</p>
<p>Kapalı alan temizliği için %5 oranında çamaşır sodası karıştırılmış su kullanılmalıdır.</p>`,
      },
      {
        heading: "Cop Teknikleri",
        content: `<p><strong>Cop Çekme Pozisyonları:</strong> Rahat pozisyon, hazır pozisyon</p>
<p><strong>Copla Suçlu Taşıma Teknikleri:</strong> Copun bacak arasından geçirilerek götürme, götürme tutuşu, çaprazlama boğma tutuşu, copun kelepçe yerine kullanılması</p>
<p><strong>Copla Vuruş Teknikleri:</strong> Tam ileri dürtme, açılı hamle, tam ileri vuruş, değişik vuruş, yan hamle, direkt darbe</p>
<p><strong>Copla Blok Teknikleri:</strong> Üst, orta ve alt seviyede blok</p>`,
      },
      {
        heading: "Organize/Organize Olmayan — Aktif/Pasif Kalabalık",
        content: `<ul>
<li>Sinemaya film izlemek için gelenler: <strong>organize – pasif</strong></li>
<li>Pazar yerindeki kalabalık: <strong>organize olmayan – pasif</strong></li>
<li>Gösteri yürüyüşünde taşkınlık yapan kalabalık: <strong>organize – aktif</strong></li>
<li>Tecavüzcüyü linç etmeye kalkışan kalabalık: <strong>organize olmayan – aktif</strong></li>
</ul>`,
      },
    ],
  },
  {
    id: "yangin-guvenligi",
    title: "Yangın Güvenliği",
    icon: "🔥",
    color: "#f97316",
    glow: "rgba(249,115,22,0.2)",
    desc: "Yanma çeşitleri, yangın sınıfları, söndürücü maddeler ve doğal afetler.",
    sections: [
      {
        heading: "Yanma Çeşitleri",
        content: `<ol>
<li><strong>Yavaş Yanma:</strong> Demirin oksitlenmesi (paslanması) örneğidir</li>
<li><strong>Hızlı Yanma:</strong> Alev, ısı, ışık ve korlaşmanın oluştuğu yanma türüdür</li>
<li><strong>Parlama ve Patlama:</strong>
  <ul>
    <li>Parlama: Benzin gibi kolay ateş alabilen maddelerde görülür</li>
    <li>Patlama: Maddenin tamamının bir anda yanmasıdır</li>
  </ul>
</li>
<li><strong>Kendi Kendine Yanma:</strong> Yavaş yanma sonucu oluşan oksitlenme ile artan ısının tutuşarak hızlı yanmaya dönüşmesidir</li>
</ol>`,
      },
      {
        heading: "Yangın Safhaları ve Sebepleri",
        content: `<p><strong>Yangın Safhaları:</strong></p>
<ol>
<li>Koku (birinci aşama)</li>
<li>Duman (ikinci aşama)</li>
<li>Alev (üçüncü aşama)</li>
</ol>
<p><strong>Yangın Sebepleri:</strong> Korunma önlemlerinin alınmaması, bilgisizlik, ihmal ve dikkatsizlik, kazalar, sabotaj, sıçrama, tabiat olayları</p>`,
      },
      {
        heading: "Yangın Sınıfları",
        content: `<ul>
<li><strong>A Sınıfı:</strong> Katı yanıcı maddeler (ahşap, tekstil, dokuma ürünleri)</li>
<li><strong>B Sınıfı:</strong> Sıvı yanıcı maddeler (benzin, mazot, madeni yağlar, vernik, alkol)</li>
<li><strong>C Sınıfı:</strong> Gaz halindeki yanıcı maddeler (doğalgaz, LPG, asetilen, hidrojen)</li>
<li><strong>D Sınıfı:</strong> Yanabilen hafif metaller (alüminyum, magnezyum, lityum, sodyum, potasyum)</li>
</ul>`,
      },
      {
        heading: "Söndürücü Maddeler ve Kullanım Alanları",
        content: `<ul>
<li><strong>Su:</strong> Ahşap, kağıt, ot, dokuma yangınlarında ideal</li>
<li><strong>Karbondioksit (CO₂):</strong> Gemilerin makine daireleri, matbaa makineleri, boya imali yapılan yerler</li>
<li><strong>Kuru Kimyevi Toz:</strong> Kimya fabrikaları, nükleer istasyonlar (A, B, C sınıfı)</li>
<li><strong>Köpük (FOAM):</strong> Rafineriler, kimyasal madde depoları, havaalanları, uçak hangarları, gemiler</li>
<li><strong>Halojenli Hidrokarbonlar:</strong> Bilgi işlem merkezleri, telekomünikasyon, hassas makinelerin bulunduğu yerler</li>
</ul>`,
      },
      {
        heading: "Doğal Afet Tanımları",
        content: `<ul>
<li><strong>Doğal Afet:</strong> Yerleşim, üretim, altyapı ve normal yaşamı bozacak ölçüde, aniden meydana gelen doğal yer ve hava hareketleridir</li>
<li><strong>Sel:</strong> Ani, büyük ve düzensiz su akıntılarına verilen addır (Seylap: su baskını)</li>
<li><strong>Erozyon:</strong> Toprağın üst tabakasının su veya rüzgarın etkisiyle aşınıp taşınmasıdır</li>
<li><strong>Heyelan:</strong> Toprak örtüsü veya kayanın bir parçasının bulunduğu yerden koparak yamaç üzerinden harekete geçip daha aşağıda birikmesidir</li>
<li><strong>Çığ:</strong> Yamaçlarda biriken karların çeşitli nedenlerle yerinden koparak aşağı doğru kayması veya yuvarlanmasıdır</li>
</ul>`,
      },
    ],
  },
  {
    id: "genel-kollukla-iliskiler",
    title: "Genel Kollukla İlişkiler",
    icon: "🚔",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.2)",
    desc: "Polis, jandarma, sahil güvenlik ve özel güvenliğin tam yetki sınırları.",
    sections: [
      {
        heading: "Genel Kolluk Türleri",
        content: `<p><strong>1. Polis:</strong> Emniyet Genel Müdürlüğü'ne bağlı; belediye sınırları içinde kamu düzeninin sağlanmasından sorumludur. (2559 Sayılı Kanun)</p>
<p><strong>2. Jandarma:</strong> Belediye sınırları dışında ve polis teşkilatı bulunmayan yerlerde görev yapan silahlı askeri güvenlik kuvveti. (2803 Sayılı Kanun)</p>
<p><strong>3. Sahil Güvenlik:</strong> Sahillerimiz, karasularımız ve iç sularımızda koruma. (2692 Sayılı Kanun)</p>
<p><strong>Yardımcı Kolluk:</strong> Çarşı/mahalle bekçileri, gemi kaptanları, TEK koruma görevlileri, TCDD</p>
<p><strong>Özel Kolluk:</strong> Çiftçi malları koruma, köy korucuları, orman kolluğu, gümrük zabıtası, belediye kolluğu vb.</p>`,
      },
      {
        heading: "Genel Kolluğun Görev ve Yetkileri",
        content: `<ul>
<li>Durdurma, kimlik sorma ve kimlik tespit</li>
<li>Parmak izi ve fotoğraf alma</li>
<li>Arama yetkisi</li>
<li>Yakalama ve gözaltında tutma</li>
<li>Zor kullanma ve silah kullanma</li>
<li>El koyma yetkisi</li>
<li>Adli görevler ve istihbarat toplama</li>
<li>Trafik hizmetleri</li>
<li>Engel olma ve yasaklama</li>
</ul>`,
      },
      {
        heading: "Özel Güvenliğin Yapabileceği İşlemler (5188 Sayılı Kanun, 7. madde)",
        content: `<ol>
<li>Koruma alanına girenlerden kimlik sorma, detektöre çektirme, eşyaları X-ray'den geçirme</li>
<li>Toplantı, konser, spor müsabakası, cenaze ve düğün törenlerinde kimlik sorma ve arama</li>
<li>Suçüstü halinde yakalama ve arama</li>
<li>Yakalama, tutuklama veya mahkûmiyet kararı bulunan kişileri yakalama</li>
<li>Yangın, deprem gibi afetlerde görev alanına girme</li>
<li>Havaalanı, liman, gar, istasyon gibi tesislerde kimlik sorma ve arama</li>
<li>Suç delili olabilecek eşyayı ve bulunmuş eşyayı emanete alma</li>
<li>Kişinin vücudu veya sağlığı tehlikeden korunması amacıyla yakalama</li>
<li>Olay yerini ve delilleri koruma</li>
</ol>`,
      },
      {
        heading: "Özel Güvenliğin Yapamayacağı İşlemler",
        content: `<p>Özel güvenlik personeli şunları <strong>yapamaz:</strong></p>
<ul>
<li>Parmak izi ve fotoğraf alamaz</li>
<li>Teknik takip ve dinleme yapamaz</li>
<li>Özel hayata müdahale edemez</li>
<li>Suç soruşturamaz, delil inceleyemez</li>
<li>Elle (fiziki) arama yapamaz</li>
<li>Kimlik tespit edemez</li>
<li>İfade alamaz</li>
<li>Tutuklama yapamaz</li>
</ul>`,
      },
      {
        heading: "Özel Güvenliğin Denetimi",
        content: `<p>Bakanlık ve valilikler, özel güvenlik şirketlerini, birimlerini ve eğitim kurumlarını her zaman denetleyebilir.</p>
<p><strong>Denetim Kapsamı:</strong> Faaliyet izni ve personel çalışma izinleri, mali sorumluluk sigortası, sözleşmelerin usulü, görev alanına uyum, silah ve teçhizatın ruhsatlı olması, eğitim hizmetlerinin yönetmeliğe uygunluğu</p>`,
      },
      {
        heading: "Kamu Hizmetinin Özellikleri",
        content: `<ul>
<li><strong>Süreklilik ve düzenlilik:</strong> Kesintisiz ve düzenli yürütme</li>
<li><strong>Tarafsızlık ve eşitlik:</strong> Ayrım yapılmaksızın eşit hizmet</li>
<li><strong>Değişkenlik:</strong> Toplumsal ihtiyaç ve teknolojiye uyum</li>
<li><strong>Bedelsizlik:</strong> Hizmetlerin ödeme gücünü aşmayacak şekilde sunulması</li>
</ul>`,
      },
    ],
  },
  {
    id: "uyusturucu-maddeler",
    title: "Uyuşturucu Maddeler",
    icon: "🚫",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.2)",
    desc: "Uyuşturucu çeşitleri, bağımlılık tanımları, reçete sistemi ve mücadele kurumları.",
    sections: [
      {
        heading: "Sınıflandırma — Merkezi Sinir Sistemine Etkisine Göre",
        content: `<p><strong>Merkezi Sinir Sistemini Yavaşlatanlar:</strong></p>
<ul>
<li>Tabi: Afyon, morfin, eroin, kodein</li>
<li>Sentetik: Depresantlar, trankilizanlar, halüsinojenler</li>
</ul>
<p><strong>Merkezi Sinir Sistemini Uyaranlar:</strong></p>
<ul>
<li>Tabi: Kokain, crack</li>
<li>Sentetik: Ecstasy, captagon</li>
</ul>
<p><strong>Halüsinojenler (Duyuları Bozan):</strong></p>
<ul>
<li>Tabi: Esrar, marihuana</li>
<li>Sentetik: LSD</li>
</ul>`,
      },
      {
        heading: "Uyuşturucu Madde Türleri",
        content: `<p><strong>1. Afyon:</strong> Haşhaş bitkisinden elde edilir; morfin, kodein ve eroin türevleri içerir. Haşhaş ekimi Toprak Mahsulleri Ofisi tarafından denetlenir.</p>
<p><strong>2. Esrar:</strong> Dişi Hint kenevirinden elde edilen, sinir sistemine yatıştırıcı etki yapan madde. Çeşitleri: reçine esrar, marihuana, toz esrar, pres/takoz esrar, sıvı esrar.</p>
<p><strong>3. Kokain:</strong> Koka bitkisi yapraklarından elde edilen uyarıcı; Güney Amerika'nın yüksek dağlarında yetişen bitkiden alınan bir alkaloittir. <em>Crack:</em> Kokainin kimyasal işlemlerle saflaştırılmış tehlikeli türevidir.</p>
<p><strong>4. Amfetaminler:</strong> Sinir sistemini uyarır; doping amaçlı kullanılır. En bilinenleri Ecstasy ve Captagon.</p>
<p><strong>5. LSD:</strong> Çavdar mahmuzu mantarından sentezlenen, en kuvvetli halüsinojenlerden biri.</p>
<p><strong>6. Uçucular (İnhalanlar):</strong> Tiner, gazyağı, bali, çakmak gazı, uhu, oje. Etkileri: denge bozukluğu, sarhoşluk, kusma, baş ağrısı, görme bulanıklığı.</p>
<p><strong>7. Sakinleştiriciler:</strong> Trankilizanlar, sedatifler, barbituratlar. Doktor kontrolü dışında bağımlılığa yol açar.</p>`,
      },
      {
        heading: "Temel Tanımlar",
        content: `<p><strong>Bağımlılık:</strong> Kişinin özdenetim ve özerklik gibi temel özelliklerini yitirmesi; maddeye karşı şiddetli istek duyması, bırakmak istemesine rağmen bırakamaması, dozu artırması ve yoksunluk belirtileri yaşaması durumudur.</p>
<p><strong>Yoksunluk:</strong> Alışılan madde kullanılmadığı zaman vücutta fiziki ve psikolojik sorunların ortaya çıkmasıdır.</p>
<p><strong>Tolerans:</strong> Kullanılan madde miktarının aynı etkiyi elde etmek için giderek artırılmasıdır.</p>
<p><strong>Tabi Uyuşturucular:</strong> Tabiatta yetişen çeşitli bitkilerden elde edilen maddeler.</p>
<p><strong>Sentetik Uyuşturucular:</strong> Fabrikalarda ve laboratuvarlarda kimyasal yoldan elde edilen uyuşturucular.</p>`,
      },
      {
        heading: "Türkiye'de Reçete Sistemi ve Mücadele Kurumları",
        content: `<p><strong>Reçete Sistemi:</strong></p>
<ul>
<li><strong>Kırmızı reçete:</strong> Sentetik uyarıcılar için</li>
<li><strong>Yeşil reçete:</strong> Uyuşturucular için</li>
</ul>
<p><strong>Uyuşturucu ile Mücadelede Görevli 4 Kurum:</strong></p>
<ul>
<li>İçişleri Bakanlığı</li>
<li>Sağlık Bakanlığı</li>
<li>Tarım ve Köyişleri Bakanlığı</li>
<li>Gümrük Müsteşarlığı</li>
</ul>`,
      },
    ],
  },
  {
    id: "temel-ilk-yardim",
    title: "Temel İlk Yardım",
    icon: "🚑",
    color: "#22c55e",
    glow: "rgba(34,197,94,0.2)",
    desc: "A-B-C değerlendirmesi, hayat kurtarma zinciri, triage sistemi ve önemli hatırlatmalar.",
    sections: [
      {
        heading: "Tanımlar ve Amaçlar",
        content: `<p><strong>İlk Yardım:</strong> "Olay yerinde tıbbi araç-gereç aranmaksızın mevcut araç ve gereçlerle yapılan ilaçsız uygulamalardır."</p>
<p><strong>Acil Tedavi:</strong> Doktor ve sağlık personeli tarafından yapılan tıbbi müdahalelerdir.</p>
<p><strong>İlk Yardımın Öncelikli Amaçları:</strong></p>
<ul>
<li>Hayati tehlikeyi ortadan kaldırmak, çevre güvenliğini sağlamak</li>
<li>Yaşamsal fonksiyonların sürdürülmesini sağlamak</li>
<li>Hasta/yaralının durumunun kötüleşmesini önlemek</li>
<li>İyileştirmeyi kolaylaştırmak</li>
</ul>
<p><strong>İlk Yardımın Temel Uygulamaları:</strong> Koruma, Bildirme, Kurtarma (KBK)</p>`,
      },
      {
        heading: "İlk Yardımcının Özellikleri",
        content: `<ul>
<li>Sakin, kendine güvenli, pratik ve kararlı olmalı</li>
<li>İnsan vücudu ile ilgili temel bilgilere sahip olmalı</li>
<li>Önce kendi can güvenliğini korumalı</li>
<li>Eldeki olanakları değerlendirebilmeli</li>
<li>Olayı zamanında ve doğru olarak <strong>112'ye</strong> haber vermeli</li>
<li>Çevredeki kişileri organize edebilmeli</li>
</ul>`,
      },
      {
        heading: "A-B-C Değerlendirmesi ve Hayat Kurtarma Zinciri",
        content: `<ul>
<li><strong>A (Airway):</strong> Hava yolu açıklığının değerlendirilmesi</li>
<li><strong>B (Breathing):</strong> Solunumun değerlendirilmesi (Bak – Dinle – Hisset)</li>
<li><strong>C (Circulation):</strong> Dolaşımın değerlendirilmesi (şah damarından 5 saniye nabız alınır)</li>
</ul>
<p><strong>Hayat Kurtarma Zinciri (4 Halka):</strong></p>
<ol>
<li>Sağlık kuruluşuna haber verme</li>
<li>Olay yerinde Temel Yaşam Desteği (TYD)</li>
<li>Ambulans ekiplerince yapılan müdahaleler</li>
<li>Hastane acil servisleri (son iki halka ileri yaşam desteğidir)</li>
</ol>`,
      },
      {
        heading: "Hava Yolu Tıkanıklığı",
        content: `<p><strong>Tam Tıkanma Belirtileri:</strong></p>
<ul>
<li>Nefes alamaz, acı çeker, ellerini boynuna götürür</li>
<li>Konuşamaz, rengi morarır</li>
<li>Bu durumda <strong>Heimlich manevrası</strong> uygulanır</li>
</ul>
<p><strong>Kısmi Tıkanma Belirtileri:</strong> Öksürür, nefes alabilir, konuşabilir</p>`,
      },
      {
        heading: "Triage (Triyaj) Sistemi",
        content: `<ul>
<li>🔴 <strong>Kırmızı (İvedi-Acil):</strong> Yaşamını veya uzvunu kurtarmak için acil müdahale gerekiyor</li>
<li>🟡 <strong>Sarı (Geciktirilebilir):</strong> Acil bakıma ihtiyacı var ama hayati tehlike yok</li>
<li>🟢 <strong>Yeşil (Bekleyebilir):</strong> Çok hafif yaralanmalar; kişiler kendileri gidebilir</li>
<li>⚫ <strong>Siyah (Ölmüş veya Kayıp Vaka):</strong> Her türlü müdahaleye rağmen yaşam belirtisi yok</li>
</ul>`,
      },
      {
        heading: "Önemli Hatırlatmalar",
        content: `<ul>
<li>Başa alınan darbe sonucu kulak veya burundan kan geliyorsa kazazede kan akan bölge altta kalacak şekilde <strong>yan yatırılır</strong>, kanama engellenmez</li>
<li>Suni solunum: Solunumu durmuş olan kimseye dışarıdan hava takviye etmektir</li>
<li>Çok sayıda yaralının olduğu kazalarda en son <strong>hayatını kaybetmiş olanlar</strong> taşınır</li>
<li>Şok pozisyonu: Hasta sırt üstü yatırılır, ayakları 20–30 derece kaldırılır, üstü örtülerek sıcak tutulur</li>
<li>Burun kanamasında: Kişi oturur pozisyona getirilerek başı öne eğilir, burun kanatları sıkıştırılır</li>
<li>Kanamayı durdurmak için: Kanayan bölgeye temiz bir bez ile <strong>basınç uygulanmalıdır</strong></li>
<li>Göğüs basısı hızı: <strong>100–120 bası/dakika</strong></li>
<li>Sara (epilepsi) krizinde: Kendine zarar vermesi engellenir, kriz kendi sürecini tamamlamaya bırakılır</li>
</ul>`,
      },
    ],
  },
  {
    id: "guvenlik-tedbirleri",
    title: "Güvenlik Tedbirleri",
    icon: "🔒",
    color: "#14b8a6",
    glow: "rgba(20,184,166,0.2)",
    desc: "Devriye, kelepçe, olay yeri koruma, şüpheli paket ve tutanak prosedürleri.",
    sections: [
      {
        heading: "Aranması Özel Hükme Bağlı Kişiler ve Silah Yasağı",
        content: `<p><strong>Aranması Özel Hükme Bağlı Kişiler:</strong> Cumhurbaşkanı, milletvekilleri, diplomatik dokunulmazlığı bulunanlar, hakim ve savcılar, avukat büroları, noterler</p>
<p><strong>Silah ile Girilemeyecek Yerler:</strong></p>
<ul>
<li>Duruşmalar ve mahkeme salonları</li>
<li>Hastanelerin psikiyatri bölümleri, akıl hastaneleri</li>
<li>Ceza ve tutukevleri ile ıslah ve infaz kurumları</li>
<li>Öğrencilerin toplu oturdukları yurtlar</li>
<li>Siyasi partilerin toplantıları</li>
<li>Her türlü spor karşılaşmaları ve yarışmaları</li>
<li>Sendikalar, dernekler ve toplantı/kongreleri</li>
<li>Kanuna uygun veya aykırı grev yapılan işyerleri</li>
<li>TBMM ana binaları</li>
</ul>`,
      },
      {
        heading: "Devriye Hizmetleri",
        content: `<p><strong>Tanım:</strong> Görev alanı içinde genel emniyeti ve caydırıcılığı sağlamak amacıyla sorumluluk bölgesinde yapılan üniformalı ve tam teçhizatlı, iki özel güvenlik elemanından oluşan hizmet.</p>
<p><strong>Devriye Çeşitleri:</strong> Yaya devriye, araçlı devriye, kombine devriye</p>
<p><strong>Devriye Yöntemleri:</strong> Olağan, dairesel, geri dönüşlü, planlı devriye</p>
<p><strong>Düdük İşaretleri:</strong></p>
<ul>
<li>Tek düdük: Yoklama; işiten aynı şekilde karşılık verir</li>
<li>İki düdük: Davet; işiten derhal çağrıya uyar</li>
<li>Sürekli düdük: İmdat; koşanlar kesik-kısa üç düdükle karşılık verir</li>
</ul>`,
      },
      {
        heading: "Kelepçe",
        content: `<p><strong>Tanım:</strong> "Kendisine zarar vermesini önlemek için el ve bileklerini bağlamaya yarayan her türlü araç."</p>
<ul>
<li>Henüz <strong>18 yaşını doldurmamış çocuklara</strong> kelepçe takılmasına izin verilmez</li>
</ul>
<p><strong>Malzeme Türlerine Göre:</strong> Plastik kelepçeler, metal kelepçeler</p>
<p><strong>Uygulama Türlerine Göre:</strong> Masonet kelepçe, parmak kelepçe, plastik kelepçe, zincir kelepçe, sevk zinciri</p>`,
      },
      {
        heading: "Not Alma, Rapor ve Tutanak",
        content: `<p><strong>Not Alma:</strong> Görme, koklama, dokunma, duyma ve tatma duyu organlarıyla hafızada algılanan bilgilerin yazılı olarak kayıtlara geçirilmesi</p>
<p><strong>Rapor:</strong> Herhangi bir iş veya olay sonucu yapılanların, elde edilen bilgi-belge ve düşüncelerin belirli bir düzen dahilinde yazılı olarak bildirilmesi</p>
<p><strong>Tutanak Bölümleri:</strong> Başlık, giriş, gelişme, sonuç, tarih ve saat, imza</p>
<p><strong>Tutanak Çeşitleri:</strong> Olay tespit, yakalama, arama, emanete alma, teslim-tesellüm, yangın, salıverme, tebliğ-tebellüğ, buluntu eşya, ihbar tutanağı</p>`,
      },
      {
        heading: "Olay Yeri Koruma",
        content: `<p><em>"Olay yeri incelemesi, suç soruşturmasının ilk ve en önemli aşamasıdır."</em></p>
<p><strong>İlk Ekibin Yapması Gerekenler:</strong></p>
<ul>
<li>Olay devam ediyorsa müdahale edilerek kontrol altına alınır</li>
<li>Olay yeri "Olay Yeri Girilmez" yazılı güvenlik şeridi ile korunur</li>
<li>Olay yerine girilmez; girilmesi gerekirse giriş-çıkışlarda aynı hat kullanılır</li>
<li>Hiçbir eşyaya çıplak elle dokunulmaz; dokunulması zorunluysa eldiven ve şapka takılır</li>
<li>Şüpheli ile mağdurun birbirleriyle konuşmaları engellenir</li>
<li>Tabanca, kovan, mermi çekirdeği gibi eşyaların yerleri değiştirilmez</li>
<li>Basın mensuplarına ve kalabalığa bilgi verilmez</li>
<li>Meraklı kalabalık uzaklaştırılır</li>
</ul>
<p><strong>Sık Yapılan Hatalar:</strong> Olay yerine girip bildirmemek, şüpheli ve tanıkların birbirleriyle temasına izin vermek, her şeyin delil olabileceğini göz ardı etmek</p>`,
      },
      {
        heading: "Şüpheli Paket ve Patlama Prosedürleri",
        content: `<p><strong>Şüpheli Paket Olaylarında:</strong></p>
<ul>
<li>Pakete kesinlikle <strong>dokunulmaz, hareket ettirilmez</strong></li>
<li>Etrafında ses, ısı ve titreşime engel olunur; haberleşme cihazları kullanılmaz</li>
<li>Yola yakınsa en az <strong>100 metrelik emniyet hattı</strong> oluşturulur</li>
<li>Kolluk kuvvetleri ve bomba uzmanı aranır</li>
<li>Paketi ilk görenler tespit edilerek olay yerinden ayrılmamaları sağlanır</li>
</ul>
<p><strong>Patlama Olaylarında:</strong></p>
<ul>
<li>Yaralı sayısı, ihtiyaç varsa ambulans ve itfaiye bildirilir</li>
<li>İkinci patlayıcı madde bulunma ihtimaline karşı önlem alınır</li>
<li>Delillerin kaybolmasına engel olunur</li>
</ul>
<p><strong>Bomba İhbarlarında:</strong> İhbar kendi amirine ve <strong>155 haber merkezine</strong> bildirilmelidir. Bomba imha uzmanları müdahale eder.</p>`,
      },
    ],
  },
];

export default function DersNotlariPage() {
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const activeData = NOTES.find(n => n.id === activeNote);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#01030e 0%,#020830 50%,#010520 100%)", color: "#fff" }}>

      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", padding: "7rem 0 4rem" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)", backgroundSize: "52px 52px", opacity: .4, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 350, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(251,191,36,.07) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div className="wrapper rel" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", padding: ".35rem 1rem", borderRadius: 999, border: "1px solid rgba(251,191,36,.35)", background: "rgba(0,0,0,.4)", marginBottom: "1.5rem" }}>
            <span style={{ color: "#fbbf24" }}>📚</span>
            <span style={{ color: "#fcd34d", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>Ücretsiz Eğitim İçerikleri</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.1, letterSpacing: "-.03em", marginBottom: "1rem" }}>
            <span style={{ color: "#fff" }}>Özel Güvenlik</span>{" "}
            <span style={{ background: "linear-gradient(90deg,#d97706,#fbbf24)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Ders Notları</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "36rem", margin: "0 auto 2rem" }}>
            Sınava hazırlık için ihtiyacınız olan tüm ders notları. 10 konu, eksiksiz içerik, ücretsiz erişim.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            {[["10", "Konu"], ["40+", "Alt Başlık"], ["100%", "Ücretsiz"]].map(([v, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "1.75rem", color: "#fbbf24" }}>{v}</div>
                <div style={{ color: "rgba(255,255,255,.45)", fontSize: ".78rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Konu Kartları */}
      {!activeNote && (
        <section style={{ padding: "2rem 0 5rem" }}>
          <div className="wrapper">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.25rem" }}>
              {NOTES.map(note => (
                <button
                  key={note.id}
                  onClick={() => setActiveNote(note.id)}
                  style={{
                    textAlign: "left", cursor: "pointer", border: `1px solid ${note.color}44`,
                    background: "linear-gradient(160deg,rgba(5,14,77,.65) 0%,rgba(2,6,38,.88) 100%)",
                    borderRadius: "1.125rem", padding: "1.75rem", position: "relative", overflow: "hidden",
                    boxShadow: `0 4px 24px rgba(0,0,0,.3), inset 0 0 40px ${note.glow}`,
                    transition: "transform .2s, box-shadow .2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: `linear-gradient(90deg,transparent,${note.color}55,transparent)` }} />
                  <div style={{ width: 52, height: 52, borderRadius: "1rem", background: `${note.color}22`, border: `1px solid ${note.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1.25rem" }}>
                    {note.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "1.05rem", color: "#fff", marginBottom: ".5rem", letterSpacing: "-.02em" }}>{note.title}</h3>
                  <p style={{ color: "rgba(255,255,255,.5)", fontSize: ".82rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{note.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: ".4rem", color: note.color, fontSize: ".8rem", fontWeight: 700 }}>
                    <span>{note.sections.length} bölüm</span>
                    <span>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ders Detay */}
      {activeNote && activeData && (
        <section style={{ padding: "2rem 0 5rem" }}>
          <div className="wrapper" style={{ maxWidth: 860 }}>
            <button
              onClick={() => { setActiveNote(null); setOpenSections({}); }}
              style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "rgba(255,255,255,.6)", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: ".75rem", padding: ".5rem 1.25rem", cursor: "pointer", fontSize: ".85rem", marginBottom: "2rem" }}
            >
              ← Tüm Dersler
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem", padding: "1.75rem", borderRadius: "1.25rem", background: "linear-gradient(160deg,rgba(5,14,77,.7) 0%,rgba(2,6,38,.9) 100%)", border: `1px solid ${activeData.color}44` }}>
              <div style={{ width: 64, height: 64, borderRadius: "1rem", background: `${activeData.color}22`, border: `1px solid ${activeData.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem", flexShrink: 0 }}>
                {activeData.icon}
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(1.25rem,3vw,1.75rem)", color: "#fff", marginBottom: ".35rem" }}>{activeData.title}</h2>
                <p style={{ color: "rgba(255,255,255,.5)", fontSize: ".85rem" }}>{activeData.desc}</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
              {activeData.sections.map((sec, i) => {
                const key = `${activeNote}-${i}`;
                const isOpen = openSections[key];
                return (
                  <div key={i} style={{ borderRadius: "1rem", border: `1px solid ${isOpen ? activeData.color + "55" : "rgba(255,255,255,.08)"}`, background: isOpen ? `linear-gradient(160deg,rgba(5,14,77,.8) 0%,rgba(2,6,38,.95) 100%)` : "rgba(255,255,255,.02)", overflow: "hidden", transition: "border-color .2s" }}>
                    <button
                      onClick={() => toggleSection(key)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.5rem", cursor: "pointer", background: "transparent", border: "none", color: "#fff", textAlign: "left" }}
                    >
                      <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: "1rem" }}>{sec.heading}</span>
                      <span style={{ width: 28, height: 28, borderRadius: "50%", background: isOpen ? `${activeData.color}22` : "rgba(255,255,255,.06)", border: `1px solid ${isOpen ? activeData.color + "55" : "rgba(255,255,255,.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: isOpen ? activeData.color : "rgba(255,255,255,.5)", fontSize: "1rem", flexShrink: 0, transition: "all .2s" }}>
                        {isOpen ? "×" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{ padding: "0 1.5rem 1.5rem", color: "rgba(255,255,255,.72)", fontSize: ".9rem", lineHeight: 1.8 }}
                        dangerouslySetInnerHTML={{ __html: sec.content }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "2.5rem", padding: "1.75rem", borderRadius: "1.125rem", background: "linear-gradient(135deg,rgba(251,191,36,.1) 0%,rgba(217,119,6,.08) 100%)", border: "1px solid rgba(251,191,36,.25)", textAlign: "center" }}>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".9rem", marginBottom: "1rem" }}>Bu konuyu sınava hazırlık için pratik yapmak ister misiniz?</p>
              <Link href="/online-test" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", padding: ".75rem 2rem", borderRadius: ".875rem", background: "linear-gradient(135deg,#d97706,#fbbf24)", color: "#01051f", fontWeight: 800, fontSize: ".9rem", textDecoration: "none" }}>
                🚀 Online Test Çöz
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

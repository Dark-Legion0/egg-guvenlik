// ─── Central content data ─────────────────────────────────────
// All CTA texts, FAQ items, blog posts and program descriptions
// live here so pages stay clean and content is easy to update.

export const CTA = {
  wa:        "WhatsApp'tan Hemen Bilgi Al",
  call:      "Hemen Ara",
  register:  "Kayıt Şartlarını Öğren",
  price:     "Kurs Ücretlerini Sor",
  match:     "Sana Uygun Eğitimi Seç",
  advisor:   "Danışmanla Görüş",
  docs:      "Evrak Listesini Al",
  date:      "En Yakın Eğitim Dönemini Öğren",
};

// ─── SSS Data ─────────────────────────────────────────────────
export interface FaqItem { q: string; a: string; }
export interface FaqCategory { label: string; icon: string; items: FaqItem[]; }

export const FAQ_CATS: FaqCategory[] = [
  {
    label: "Genel Sorular", icon: "🎯",
    items: [
      { q: "Özel güvenlik olmak için yaş şartı nedir?", a: "18 yaşını doldurmuş olmak zorunludur. Üst yaş sınırı yasal olarak belirlenmemiş olmakla birlikte bazı işverenler kendi tercihlerini uygulayabilir. Güncel şartlar için danışmanımızdan bilgi alabilirsiniz." },
      { q: "Silahlı güvenlik için ayrı bir yaş şartı var mı?", a: "Silahlı özel güvenlik eğitimi için de asgari yaş 18'dir. Ek bir üst yaş sınırı bulunmamaktadır; ancak tam teşekküllü devlet hastanesinden alınan sağlık kurulu raporunun olumlu çıkması gerekmektedir." },
      { q: "Kadınlar özel güvenlik görevlisi olabilir mi?", a: "Evet. Kadınlar hem silahlı hem silahsız özel güvenlik eğitimine katılabilir. Özellikle havalimanı, AVM ve kurumsal güvenlik alanlarında kadın personele olan talep sürekli artmaktadır." },
      { q: "Özel güvenlik görevlisi ne kadar kazanır?", a: "Maaş; çalışılan sektör, belge türü (silahlı/silahsız) ve deneyime göre değişmektedir. Silahlı belge genellikle daha yüksek ücret imkânı sağlar. Güncel rakamlar için danışmanımızla görüşebilirsiniz." },
      { q: "Askerliğini yapmamış olan başvurabilir mi?", a: "Yasal olarak askerlik şartı aranmamaktadır. Ancak bazı işverenler askerliğini tamamlamış adayları tercih edebilir. Detaylar için danışmanımıza ulaşabilirsiniz." },
    ],
  },
  {
    label: "Silahlı Eğitim", icon: "hand",
    items: [
      { q: "Silahlı özel güvenlik eğitimi kaç gün/saat sürer?", a: "Silahlı özel güvenlik eğitimi 120 saattir. Programın yoğunluğuna ve haftalık ders saatine göre toplam süreç genellikle 2–3 ay arasında tamamlanmaktadır." },
      { q: "Silahlı eğitimde atış eğitimi var mı?", a: "Evet. Ateşli silah kullanımı, bakımı, güvenli taşıma ve atış tatbikatı 120 saatlik programın ayrılmaz bir parçasıdır. Eğitim yetkili poligon alanlarında gerçekleştirilmektedir." },
      { q: "Silahlı eğitim için özel sağlık raporu gerekiyor mu?", a: "Evet. Tam teşekküllü devlet hastanesinden alınan sağlık kurulu raporu zorunludur. Özel hastane raporu kabul edilmez. Hangi hastanelerin uygun olduğu konusunda danışmanımız yönlendirme yapar." },
      { q: "Silahlı belge hangi alanlarda avantaj sağlar?", a: "Fabrika, banka şubesi, havalimanı, VIP koruma ve endüstriyel tesisler gibi alanlarda silahlı belge zorunlu veya tercih edilen belgedir. Bu pozisyonlar genellikle daha yüksek ücret sunar." },
    ],
  },
  {
    label: "Silahsız Eğitim", icon: "🛡️",
    items: [
      { q: "Silahsız özel güvenlik eğitimi kaç gün/saat sürer?", a: "Silahsız özel güvenlik eğitimi 90 saattir. Ders takvimine göre süreç genellikle 1,5–2 ay içinde tamamlanır." },
      { q: "Silahsız belgeyle hangi alanlarda çalışılır?", a: "AVM, site, rezidans, hastane, okul, üniversite, etkinlik alanları ve fabrikalar başta olmak üzere yüzlerce farklı sektörde çalışılabilir. Türkiye'deki güvenlik pozisyonlarının büyük çoğunluğu silahsız belgeyle dolduruluyor." },
      { q: "Silahsız belgeden sonra silahlı belgeye geçiş yapılabilir mi?", a: "Evet. Silahsız belge aldıktan sonra tamamlayıcı silahlı eğitim programına katılarak silahlı belge edinilebilir. Detaylı bilgi için danışmanımızla görüşebilirsiniz." },
      { q: "Diploma şartı nedir?", a: "En az ilkokul (8 yıllık ilköğretim) mezunu olmak yeterlidir. Lise veya üniversite mezunları için ek eğitim şartı aranmaz." },
    ],
  },
  {
    label: "Yenileme Eğitimi", icon: "🔄",
    items: [
      { q: "Yenileme eğitimi ne zaman alınmalı?", a: "Özel güvenlik kimlikleri 5 yılda bir yenilenmek zorundadır. Kimlik bitiş tarihinden en az 3 ay önce başvurmanızı tavsiye ediyoruz; olası gecikmeler yasal sorunlara yol açabilir." },
      { q: "Kimlik süresi dolduktan sonra çalışmaya devam edilebilir mi?", a: "Hayır. Süresi dolmuş bir güvenlik kimliğiyle aktif görev yapmak yasal değildir. Yenileme sürecini zamanında tamamlamanız kritik önem taşır." },
      { q: "Yenileme eğitimi kaç saat sürer?", a: "Yenileme eğitimi 40 saattir. Bu süre, güncel mevzuat değişikliklerini, vaka analizlerini ve silahlı belge sahipleri için atış tazelemesini kapsar." },
    ],
  },
  {
    label: "Kayıt ve Evrak", icon: "📄",
    items: [
      { q: "Sağlık raporu gerekli mi?", a: "Evet. Silahsız eğitim için herhangi bir resmi sağlık kuruluşundan alınan sağlık raporu yeterlidir. Silahlı eğitim için tam teşekküllü devlet hastanesinden alınan sağlık kurulu raporu zorunludur." },
      { q: "Adli sicil kaydı gerekli mi?", a: "Evet. Temiz adli sicil kaydı (sabıka kaydı) zorunludur. E-devlet veya PTT şubelerinden kolaylıkla temin edilebilir." },
      { q: "Kurs ücretlerini nasıl öğrenebilirim?", a: "Ücretler döneme ve programa göre farklılık gösterebilir. Güncel ücret ve kontenjan bilgisi için WhatsApp hattımızdan veya telefonumuzu arayarak bilgi alabilirsiniz." },
      { q: "Kayıt için diploma gerekir mi?", a: "Evet. En az ilkokul mezuniyetini kanıtlayan diploma fotokopisi gereklidir." },
      { q: "WhatsApp'tan kayıt bilgisi alabilir miyim?", a: "Evet. WhatsApp hattımız 7/24 aktiftir. Kayıt şartları, evrak listesi, eğitim takvimi ve kurs ücretleri dahil tüm konularda hızlı bilgi alabilirsiniz." },
    ],
  },
  {
    label: "Sınav Süreci", icon: "📝",
    items: [
      { q: "Sınav süreci nasıl ilerler?", a: "Eğitim tamamlandıktan sonra İçişleri Bakanlığı'nın belirlediği merkezlerde yazılı ve uygulamalı sınava girilir. EGG Güvenlik, sınav takvimini takip ederek öğrencilerini önceden bilgilendirir." },
      { q: "Sınavdan başarısız olunursa ne yapılır?", a: "Belirlenen sınav takvimi çerçevesinde bir sonraki sınav döneminde tekrar sınava girilebilir. Başarısız öğrencilerimize ek hazırlık desteği sunuyoruz." },
      { q: "Eğitim sonunda iş garantisi var mı?", a: "Kesin iş garantisi vermek yasal olarak mümkün değildir. Ancak 120+ iş ortağı firmamız aracılığıyla mezunlarımızı aktif istihdam süreçlerine yönlendiriyor, referans ve yönlendirme desteği sağlıyoruz." },
    ],
  },
];

// ─── Blog Data ────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  cat: string;
  catColor: string;
  catGroup: string;
  read: string;
  date: string;
  desc: string;
  image?: string;
  toc: string[];
  body: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "adana-ozel-guvenlik-kursu-nasil-secilir",
    image: "/images/blog/blog-adana.webp",
    title: "Adana Özel Güvenlik Kursu Nasıl Seçilir?",
    metaTitle: "Adana Özel Güvenlik Kursu Nasıl Seçilir? | EGG Güvenlik",
    metaDesc: "Adana'da özel güvenlik kursu ararken nelere dikkat etmelisiniz? Devlet onayı, eğitmen kalitesi ve başarı oranlarını karşılaştırın.",
    cat: "Rehber", catColor: "tag-green", catGroup: "Eğitim Rehberi",
    read: "8 dk", date: "Mart 2025",
    desc: "Adana'da özel güvenlik kursu ararken dikkat etmeniz gereken kriterler ve doğru kurumu seçme rehberi.",
    toc: ["Devlet Onayını Kontrol Edin","Başarı Oranlarına Bakın","Eğitmen Kadrosunu Araştırın","Kontenjan ve Dönem Takvimi","Sonuç"],
    body: `
<h2 id="toc-0">Devlet Onayını Kontrol Edin</h2>
<p>Adana'da özel güvenlik kursu seçerken yapmanız gereken ilk şey, kurumun İçişleri Bakanlığı tarafından yetkilendirilmiş olup olmadığını doğrulamaktır. Yetkisiz kurumlardan alınan eğitimler, sertifika veya sınava giriş hakkı tanımaz ve harcanan zaman ile paranın boşa gitmesi anlamına gelir.</p>
<p>Yetkili kurum listesine İçişleri Bakanlığı'nın resmi web sitesinden ulaşabilirsiniz. EGG Özel Güvenlik Eğitim Kurumu, İçişleri Bakanlığı onaylı olarak faaliyet göstermektedir.</p>
<h2 id="toc-1">Başarı Oranlarına Bakın</h2>
<p>Kurs kalitesinin en somut göstergesi, sınav başarı oranlarıdır. Türkiye genelinde özel güvenlik sınavı başarı oranı %70–75 bandında seyrederken, nitelikli eğitim kurumları bu oranı çok daha yukarıya taşır. EGG Güvenlik'in %94 başarı oranı, piyasa ortalamasının önemli ölçüde üzerindedir.</p>
<p>Bir kuruma kayıt yaptırmadan önce bu oranı mutlaka sorun. Gerçekçi veriler sunamayan kurumlardan uzak durun.</p>
<h2 id="toc-2">Eğitmen Kadrosunu Araştırın</h2>
<p>Özel güvenlik eğitiminin kalitesi büyük ölçüde eğitmene bağlıdır. Sahada fiilen görev yapmış, emekli güvenlik uzmanları veya Bakanlık sertifikalı eğiticilerden oluşan bir kadro, size sadece sınav bilgisi değil, mesleğin gerçek pratiklerini de aktarır.</p>
<p>EGG'de eğitmenlerimiz ortalama 15+ yıl sektör deneyimine sahiptir. Tatbikat alanlarında gerçekleştirdiğimiz uygulamalı eğitimler, mezunlarımızın sahaya hazır çıkmasını sağlar.</p>
<h2 id="toc-3">Kontenjan ve Dönem Takvimi</h2>
<p>Güvenilir kurumların kontenjanları belirli dönemlerde dolmaktadır. Kayıt yaptırmadan önce bir sonraki eğitim döneminin ne zaman başlayacağını ve kalan kontenjan sayısını öğrenin. Belirsiz "sürekli açık" ifadeleri güvenilirlik açısından soru işareti doğurabilir.</p>
<p>EGG, yılda birden fazla dönem düzenlemekte olup kontenjan bilgisi WhatsApp hattımızdan anlık olarak öğrenilebilir.</p>
<h2 id="toc-4">Sonuç</h2>
<p>Adana'da özel güvenlik kursu seçerken; Bakanlık onayı, kanıtlanmış başarı oranı, deneyimli eğitmen kadrosu ve şeffaf kontenjan bilgisini esas alın. Bu kriterlerin hepsini karşılayan bir kurum, hem sınavı geçmenizi hem de güçlü bir kariyer başlangıcı yapmanızı sağlar.</p>
<p>EGG Özel Güvenlik hakkında detaylı bilgi almak veya kayıt dönemini öğrenmek için WhatsApp hattımızdan bize ulaşabilirsiniz.</p>
    `,
  },
  {
    slug: "silahli-ozel-guvenlik-belgesi-nasil-alinir",
    image: "/images/blog/blog-silahli.webp",
    title: "Silahlı Özel Güvenlik Belgesi Nasıl Alınır?",
    metaTitle: "Silahlı Özel Güvenlik Belgesi Nasıl Alınır? | EGG Güvenlik",
    metaDesc: "Silahlı özel güvenlik belgesi almak için gerekli şartlar, başvuru süreci, evrak listesi ve sınav aşamaları hakkında kapsamlı rehber.",
    cat: "Silahlı", catColor: "tag-gold", catGroup: "Eğitim Rehberi",
    read: "10 dk", date: "Şubat 2025",
    desc: "Silahlı güvenlik belgesi alma süreci, gerekli evraklar ve sınav aşamaları hakkında kapsamlı rehber.",
    toc: ["Silahlı Belge Nedir?","Başvuru Şartları","Gerekli Evraklar","120 Saatlik Eğitim","Sınav Süreci","Belge Hangi Avantajları Sağlar?"],
    body: `
<h2 id="toc-0">Silahlı Özel Güvenlik Belgesi Nedir?</h2>
<p>Silahlı özel güvenlik belgesi; İçişleri Bakanlığı tarafından onaylanan, ateşli silah taşıyarak güvenlik görevi yapma yetkisi veren resmi bir belgedir. Bu belge yalnızca yetkili kurumların düzenlediği 120 saatlik eğitim programını başarıyla tamamlayan ve ardından Bakanlık sınavını geçen kişilere verilir.</p>
<p>Silahlı belge, iş piyasasında silahsız belgeye kıyasla önemli bir rekabet avantajı sunar. Fabrika, banka, havalimanı ve VIP koruma gibi pozisyonlar için bu belge zorunlu ya da güçlü biçimde tercih edilen belgedir.</p>
<h2 id="toc-1">Başvuru Şartları</h2>
<p>Silahlı özel güvenlik eğitimine başvurabilmek için aşağıdaki şartların tamamını karşılamak gerekmektedir:</p>
<ul>
<li>18 yaşını doldurmuş Türk vatandaşı olmak</li>
<li>En az ilkokul (8 yıllık eğitim) mezunu olmak</li>
<li>Güvenlik soruşturması ve arşiv araştırması sonucunun olumlu çıkması</li>
<li>Tam teşekküllü devlet hastanesinden alınan sağlık kurulu raporunun "silah taşımaya engel yoktur" ibaresi içermesi</li>
<li>Adli sicil kaydının temiz olması</li>
</ul>
<p>Güncel şartlarda değişiklik olması durumunda danışmanımız sizi bilgilendirecektir.</p>
<h2 id="toc-2">Gerekli Evraklar</h2>
<p>Kayıt başvurusu için gereken belgeler şunlardır:</p>
<ul>
<li>TC kimlik kartı fotokopisi (ön–arka)</li>
<li>Diploma fotokopisi</li>
<li>Tam teşekküllü devlet hastanesinden alınmış sağlık kurulu raporu</li>
<li>Son 6 ay içinde çekilmiş biyometrik fotoğraf (4 adet)</li>
<li>E-devlet veya PTT'den alınan güncel adli sicil belgesi</li>
</ul>
<p>Evrak listesini WhatsApp'tan da alabilir; eksik belge konusunda danışmanınızdan destek isteyebilirsiniz.</p>
<h2 id="toc-3">120 Saatlik Eğitim Süreci</h2>
<p>Eğitim; teorik dersler, uygulamalı tatbikatlar ve poligonda gerçekleştirilen atış eğitiminden oluşmaktadır. Program boyunca şu konular işlenmektedir:</p>
<ul>
<li>Özel güvenlik mevzuatı ve yasal yetki sınırları</li>
<li>Ateşli silah bilgisi, bakımı ve güvenli taşıma</li>
<li>Atış teknikleri ve poligon uygulamaları</li>
<li>Taktiksel müdahale ve kalabalık yönetimi</li>
<li>Temel ilk yardım ve acil müdahale prosedürleri</li>
<li>İletişim, raporlama ve meslek etiği</li>
</ul>
<h2 id="toc-4">Sınav Süreci</h2>
<p>Eğitim tamamlandıktan sonra adaylar, İçişleri Bakanlığı'nın belirlediği merkezlerde yazılı ve uygulamalı sınava girerler. EGG, sınav takvimini öğrencileriyle paylaşarak hazırlık sürecinde destek sağlar.</p>
<p>Sınavı başarıyla geçen adaylar, silahlı özel güvenlik kimlik belgelerini alarak aktif görev yapabilir hale gelir.</p>
<h2 id="toc-5">Silahlı Belge Hangi Avantajları Sağlar?</h2>
<p>Silahlı güvenlik belgesi; iş imkânlarını genişletmesi, daha yüksek ücret potansiyeli sunması ve sektörde rekabet avantajı sağlaması bakımından önemli bir belgedir. Fabrika, endüstriyel tesis, banka şubesi ve VIP koruma alanlarında silahlı personel talebi sürekli yüksek seyretmektedir.</p>
    `,
  },
  {
    slug: "silahsiz-ozel-guvenlik-egitimi-kimler-icin-uygundur",
    image: "/images/blog/blog-silahsiz.webp",
    title: "Silahsız Özel Güvenlik Eğitimi Kimler İçin Uygundur?",
    metaTitle: "Silahsız Özel Güvenlik Eğitimi Kimler İçin Uygundur? | EGG",
    metaDesc: "Silahsız özel güvenlik eğitimi kimlere uygundur? Çalışma alanları, şartlar ve kariyer fırsatları hakkında eksiksiz rehber.",
    cat: "Silahsız", catColor: "tag-blue", catGroup: "Eğitim Rehberi",
    read: "7 dk", date: "Ocak 2025",
    desc: "Silahsız güvenlik eğitimine kimlerin katılabileceği, çalışma alanları ve kariyer fırsatları hakkında kapsamlı rehber.",
    toc: ["Silahsız Eğitim Nedir?","Kimler İçin İdeal?","Çalışma Alanları","Başvuru Şartları","Eğitim Süreci"],
    body: `
<h2 id="toc-0">Silahsız Özel Güvenlik Eğitimi Nedir?</h2>
<p>Silahsız özel güvenlik eğitimi; ateşli silah kullanımı gerektirmeyen güvenlik pozisyonlarına yönelik, İçişleri Bakanlığı onaylı 90 saatlik temel güvenlik programıdır. Türkiye'deki güvenlik pozisyonlarının büyük çoğunluğu silahsız belgeyle doldurulabildiğinden, bu belge sektöre giriş açısından en yaygın tercih olmaya devam etmektedir.</p>
<h2 id="toc-1">Kimler İçin İdeal?</h2>
<p>Silahsız özel güvenlik eğitimi şu profillerdeki adaylar için özellikle uygun bir başlangıç noktasıdır:</p>
<ul>
<li>Güvenlik sektörüne ilk kez adım atacak olanlar</li>
<li>AVM, hastane, okul veya site gibi alanlarda çalışmayı hedefleyenler</li>
<li>Daha kısa sürede ve daha az bürokratik yük ile belge almak isteyenler</li>
<li>Silahlı belgenin gerektirdiği sağlık kurulu raporunu henüz almamış olanlar</li>
<li>Güvenlik alanına geçiş yapmak isteyen farklı sektör çalışanları</li>
</ul>
<h2 id="toc-2">Hangi Alanlarda Çalışılabilir?</h2>
<p>Silahsız güvenlik belgesiyle çalışılabilecek alanlar oldukça geniştir:</p>
<ul>
<li>Alışveriş merkezleri ve mağaza kompleksleri</li>
<li>Kapalı siteler, rezidanslar ve konut topluluğu güvenliği</li>
<li>Hastane, klinik ve sağlık merkezi güvenliği</li>
<li>Okul, dershane ve üniversite kampüsleri</li>
<li>Fuar, konser ve kurumsal etkinlik alanları</li>
<li>Fabrika ve üretim tesisi giriş–çıkış güvenliği</li>
</ul>
<h2 id="toc-3">Başvuru Şartları</h2>
<p>18 yaşını doldurmuş, en az ilkokul mezunu, güvenlik soruşturması ve adli sicil kaydı temiz olan Türk vatandaşları başvurabilir. Sağlık raporu olarak herhangi bir resmi sağlık kuruluşundan alınan güncel rapor yeterlidir.</p>
<h2 id="toc-4">90 Saatlik Eğitim Süreci</h2>
<p>Program teorik ve uygulamalı derslerden oluşur. Güvenlik mevzuatı, iletişim teknikleri, kalabalık yönetimi, ilk yardım ve raporlama standartları başlıca konular arasındadır. Eğitim tamamlandıktan sonra Bakanlık sınavına girilir ve başarı durumunda silahsız özel güvenlik kimliği teslim alınır.</p>
    `,
  },
  {
    slug: "ozel-guvenlik-olmak-icin-sartlar-nelerdir",
    image: "/images/blog/blog-sartlar.svg",
    title: "Özel Güvenlik Olmak İçin Şartlar Nelerdir?",
    metaTitle: "Özel Güvenlik Olmak İçin Şartlar | EGG Özel Güvenlik",
    metaDesc: "Özel güvenlik görevlisi olmak için gereken yaş, eğitim, sağlık ve hukuki şartları öğrenin. Güncel bilgilerle eksiksiz rehber.",
    cat: "Genel", catColor: "tag-green", catGroup: "Kayıt Şartları",
    read: "8 dk", date: "Ocak 2025",
    desc: "Yaş, eğitim, sağlık ve başvuru koşulları. Güvenlik kariyerine başlamadan önce bilmeniz gerekenler.",
    toc: ["Yaş Şartı","Eğitim Şartı","Sağlık Şartları","Güvenlik Soruşturması","Yabancı Uyruklu Adaylar","Başvuru Nasıl Yapılır?"],
    body: `
<h2 id="toc-0">Yaş Şartı</h2>
<p>Özel güvenlik eğitimine başvurmak için 18 yaşını doldurmuş olmak gerekmektedir. Yasal olarak belirlenmiş bir üst yaş sınırı bulunmamaktadır. Ancak bazı işverenler kendi bünyesindeki pozisyonlar için yaş tercihi uygulayabilir.</p>
<h2 id="toc-1">Eğitim Şartı</h2>
<p>Özel güvenlik eğitimine katılmak için en az ilkokul (8 yıllık zorunlu eğitim) mezunu olmak yeterlidir. Lise, ön lisans veya lisans mezuniyeti ek avantaj sağlayabilir; ancak bu, yasal bir zorunluluk değildir.</p>
<h2 id="toc-2">Sağlık Şartları</h2>
<p>Silahsız eğitim için herhangi bir resmi sağlık kuruluşundan alınan güncel sağlık raporu yeterlidir. Silahlı eğitim için ise tam teşekküllü devlet hastanesinden alınan ve "silah taşımaya engel yoktur" ibaresini içeren sağlık kurulu raporu zorunludur. Özel hastane raporları silahlı eğitim için geçerli değildir.</p>
<h2 id="toc-3">Güvenlik Soruşturması ve Adli Sicil</h2>
<p>Adli sicil kaydının temiz olması zorunludur. Bazı suç türleri, özel güvenlik eğitimine katılımı yasal olarak engellemektedir. Güvenlik soruşturması kapsamında yapılan arşiv araştırmasının da olumlu sonuçlanması gerekmektedir. Güncel mevzuat kapsamındaki kısıtlamalar için danışmanımızdan bilgi alabilirsiniz.</p>
<h2 id="toc-4">Yabancı Uyruklu Adaylar</h2>
<p>Özel güvenlik eğitimi yalnızca Türk vatandaşlarına açıktır. Çift vatandaşlık durumunda ise ilgili mevzuat çerçevesinde değerlendirme yapılmaktadır. Detaylı bilgi için danışmanımıza ulaşabilirsiniz.</p>
<h2 id="toc-5">Başvuru Nasıl Yapılır?</h2>
<p>Yukarıdaki şartları karşıladığınızı düşünüyorsanız yapmanız gereken tek şey EGG Güvenlik'e başvurmaktır. WhatsApp hattımız veya telefon numaramız üzerinden danışmanınıza ulaşarak evrak listesini alabilir, eğitim dönemini öğrenebilir ve kayıt sürecini başlatabilirsiniz.</p>
    `,
  },
  {
    slug: "ozel-guvenlik-yenileme-egitimi-nedir",
    image: "/images/blog/blog-yenileme.svg",
    title: "Özel Güvenlik Yenileme Eğitimi Nedir?",
    metaTitle: "Özel Güvenlik Yenileme Eğitimi Nedir? | EGG Güvenlik",
    metaDesc: "Özel güvenlik kimlik yenileme eğitimi hakkında her şey. Kimler almalı, ne zaman başvurulmalı, gerekli evraklar ve sık yapılan hatalar.",
    cat: "Yenileme", catColor: "tag-gray", catGroup: "Yenileme Eğitimi",
    read: "6 dk", date: "Aralık 2024",
    desc: "5 yılda bir zorunlu olan yenileme eğitimi hakkında her şey. Süreç, evraklar ve dikkat edilmesi gerekenler.",
    toc: ["Yenileme Eğitimi Nedir?","Kimler Almalı?","Ne Zaman Başvurulmalı?","Gerekli Evraklar","Sık Yapılan Hatalar"],
    body: `
<h2 id="toc-0">Özel Güvenlik Yenileme Eğitimi Nedir?</h2>
<p>Özel güvenlik kimlikleri 5 yılda bir yenilenmek zorundadır. Yenileme eğitimi; mevcut belge sahiplerinin güncel mevzuat bilgilerini tazelemelerine, yeni uygulamalar hakkında bilgi edinmelerine ve silahlı belge sahipleri için atış eğitimlerini güncellemelerine olanak tanıyan 40 saatlik bir programdır.</p>
<p>Yenileme eğitimi alınmadan süresi dolan güvenlik kimliğiyle aktif olarak görev yapılması yasal değildir.</p>
<h2 id="toc-1">Kimler Yenileme Eğitimi Almalı?</h2>
<p>Halihazırda silahlı ya da silahsız özel güvenlik kimliğine sahip olan ve kimliğinin geçerlilik süresi dolmak üzere olan tüm güvenlik personeli bu eğitimi almak zorundadır. Sektörden bir süre ayrılmış ve aktif göreve geri dönmek isteyen eski güvenlik çalışanları da yenileme eğitiminden yararlanabilir.</p>
<h2 id="toc-2">Ne Zaman Başvurulmalı?</h2>
<p>Kimlik bitiş tarihinden en az 3 ay önce başvurmanızı tavsiye ediyoruz. Bu süre, olası evrak eksikliklerini ve idari gecikmelerini absorbe edebilecek yeterli bir tampon sağlar. Son güne bırakılan başvurular hem stres hem de yasal risk doğurmaktadır.</p>
<h2 id="toc-3">Gerekli Evraklar</h2>
<ul>
<li>Mevcut özel güvenlik kimlik kartı fotokopisi</li>
<li>TC kimlik kartı fotokopisi (ön–arka)</li>
<li>Son 6 ayda çekilmiş biyometrik fotoğraf (2 adet)</li>
<li>Danışman tarafından sağlanan resmi başvuru formu</li>
</ul>
<h2 id="toc-4">Sık Yapılan Hatalar</h2>
<p>Yenileme sürecinde en çok karşılaşılan hata, kimliğin son gününe kadar beklenerek başvurunun yapılmasıdır. Bunun yanı sıra silahlı belge yenileyenlerin sağlık raporunu özel hastaneden alması da sıkça yaşanan bir sorundur; devlet hastanesi raporu zorunludur.</p>
<p>Eksik evrakla başvuru yapmak da süreci uzatmaktadır. Danışmanınızın sağladığı eksiksiz listeyi takip etmeniz süreci büyük ölçüde hızlandırır.</p>
    `,
  },
  {
    slug: "ozel-guvenlik-sinavina-nasil-hazirlanilir",
    image: "/images/blog/blog-sinav.svg",
    title: "Özel Güvenlik Sınavına Nasıl Hazırlanılır?",
    metaTitle: "Özel Güvenlik Sınavına Hazırlık Rehberi | EGG Güvenlik",
    metaDesc: "Özel güvenlik sınavında başarılı olmak için pratik hazırlık önerileri, sınav yapısı ve çalışma stratejileri.",
    cat: "Sınav", catColor: "tag-gold", catGroup: "Sınav Süreci",
    read: "9 dk", date: "Aralık 2024",
    desc: "İçişleri Bakanlığı özel güvenlik sınavı için pratik hazırlık önerileri, sınav yapısı ve çalışma stratejileri.",
    toc: ["Sınav Nasıl Yapılır?","Yazılı Sınav Konuları","Uygulamalı Sınav","Etkili Hazırlık Yöntemleri","Sınav Günü Tavsiyeleri","Başarısız Olunursa"],
    body: `
<h2 id="toc-0">Sınav Nasıl Yapılır?</h2>
<p>Özel güvenlik sınavı, İçişleri Bakanlığı'nın belirlediği akredite merkezlerde yapılır. Sınav yazılı ve uygulamalı olmak üzere iki aşamadan oluşur. EGG Güvenlik, sınav takvimini öğrencileriyle paylaşarak katılım sağlanmasına destek olur.</p>
<h2 id="toc-1">Yazılı Sınav Konuları</h2>
<p>Yazılı sınavda şu başlıklardan sorular çıkmaktadır:</p>
<ul>
<li>5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun</li>
<li>Meşru müdafaa ve yasal sınırlar</li>
<li>Güvenlik prosedürleri ve protokoller</li>
<li>Temel ilk yardım bilgisi</li>
<li>İletişim, etik ve mesleki sorumluluklar</li>
</ul>
<h2 id="toc-2">Uygulamalı Sınav</h2>
<p>Silahlı adaylar için uygulamalı sınav, atış tatbikatı ve görev senaryolarını kapsar. Silahsız adaylar ise güvenlik uygulamaları ve vaka senaryolarında değerlendirilir. EGG'nin uygulamalı eğitim programı, bu sınava doğrudan hazırlık niteliği taşır.</p>
<h2 id="toc-3">Etkili Hazırlık Yöntemleri</h2>
<ul>
<li>Ders notlarını günlük küçük oturumlarla düzenli tekrar edin</li>
<li>5188 sayılı Kanun'u madde bazında özet çıkarın</li>
<li>EGG'nin sağladığı deneme sorularını mutlaka çözün</li>
<li>İlk yardım konularını hem teorik hem uygulamalı pekiştirin</li>
<li>Sınav öncesi son bir haftada konu tekrarına odaklanın</li>
</ul>
<h2 id="toc-4">Sınav Günü Tavsiyeleri</h2>
<p>Sınav sabahı erken kalkın ve sınav merkezine en az 30 dakika erken gidin. Kimliğinizi ve gerekli belgeleri önceden hazırlayın. Sakin ve odaklı kalmaya çalışın; eğitim sürecinde öğrendiklerinize güvenin.</p>
<h2 id="toc-5">Başarısız Olunursa Ne Olur?</h2>
<p>Sınavdan başarısız olan adaylar, Bakanlık'ın belirlediği bir sonraki sınav döneminde tekrar sınava girebilir. EGG, başarısız öğrencilerine ek hazırlık materyali ve destek sağlamaktadır. Yılmadan devam etmek, sınavı geçmenin en önemli anahtarıdır.</p>
    `,
  },

  // ── KARİYER REHBERİ ──────────────────────────────────────────
  {
    slug: "ozel-guvenlik-maasi-ne-kadar",
    image: "/images/blog/blog-sinav.svg",
    title: "Özel Güvenlik Görevlisi Maaşı Ne Kadar?",
    metaTitle: "Özel Güvenlik Maaşı 2025 | EGG Güvenlik",
    metaDesc: "2025 yılında özel güvenlik görevlisi maaşları, silahlı ve silahsız arasındaki farklar ve sektöre göre ücret karşılaştırması.",
    cat: "Kariyer", catColor: "tag-green", catGroup: "Kariyer Rehberi",
    read: "6 dk", date: "Mart 2025",
    desc: "Silahlı ve silahsız güvenlik görevlilerinin 2025 maaş aralıkları, sektöre göre ücret farklılıkları ve ek gelir kalemleri.",
    toc: ["Genel Ücret Aralığı","Silahlı vs Silahsız Farkı","Sektöre Göre Maaşlar","Yan Haklar ve Ek Ödemeler","Maaşı Artıran Faktörler"],
    body: `
<h2 id="toc-0">Genel Ücret Aralığı</h2>
<p>2025 yılı itibarıyla özel güvenlik görevlisi maaşları; deneyim, belge türü ve çalışılan sektöre bağlı olarak aylık net 18.000–35.000 TL aralığında seyretmektedir. Asgari ücretin üzerinde başlayan bu rakamlar, kıdemle birlikte belirgin biçimde yükselmektedir.</p>
<h2 id="toc-1">Silahlı ve Silahsız Arasındaki Fark</h2>
<p>Silahlı güvenlik belgesi, ortalama %20–30 daha yüksek ücret anlamına gelmektedir. Bunun temel nedeni, silahlı pozisyonların daha fazla sorumluluk gerektirmesi ve bazı alanlarda zorunlu tutulmasıdır. Fabrika, banka ve havalimanı gibi güvenlik yoğun sektörlerde silahlı personel talebi, ücretleri de yukarıya taşımaktadır.</p>
<h2 id="toc-2">Sektöre Göre Maaşlar</h2>
<ul>
<li><strong>Bankacılık ve finans:</strong> En yüksek ücret bandı, silahlı belge zorunlu</li>
<li><strong>Havalimanı ve liman:</strong> Yüksek ücret, vardiya sistemi</li>
<li><strong>Endüstriyel tesis ve fabrika:</strong> Orta-yüksek bant, silahlı tercih ediliyor</li>
<li><strong>AVM ve perakende:</strong> Yaygın istihdam, rekabetçi başlangıç ücreti</li>
<li><strong>Site ve rezidans:</strong> Esnek çalışma, orta bant</li>
</ul>
<h2 id="toc-3">Yan Haklar ve Ek Ödemeler</h2>
<p>Temel maaşın yanı sıra servis, yemek, sağlık sigortası ve vardiya primleri gibi yan haklar da toplam geliri artırmaktadır. Gece vardiyası ve bayram çalışmaları yasal olarak ek ücrete tabidir.</p>
<h2 id="toc-4">Maaşı Artıran Faktörler</h2>
<p>Silahlı belge, yabancı dil bilgisi, ilk yardım sertifikası ve uzun süreli sektör deneyimi, müzakere gücünüzü artıran başlıca unsurlardır. Yönetici pozisyonlarına (güvenlik amiri, koordinatör) geçiş ise ücret tavanını önemli ölçüde yükseltmektedir.</p>
    `,
  },
  {
    slug: "ozel-guvenlik-kariyer-firsatlari",
    image: "/images/blog/blog-adana.webp",
    title: "Özel Güvenlik Sektöründe Kariyer Fırsatları",
    metaTitle: "Özel Güvenlik Kariyer Fırsatları 2025 | EGG Güvenlik",
    metaDesc: "Özel güvenlik sektöründe hangi pozisyonlar var, kariyer basamakları nasıl ilerler, hangi alanlarda en fazla istihdam bulunur?",
    cat: "Kariyer", catColor: "tag-green", catGroup: "Kariyer Rehberi",
    read: "7 dk", date: "Şubat 2025",
    desc: "Güvenlik sektöründe kariyer basamakları, yönetici pozisyonları ve en fazla istihdam sağlayan sektörler.",
    toc: ["Sektörün Büyüme Trendi","Kariyer Basamakları","En Fazla İstihdam Sağlayan Alanlar","Yönetici Pozisyonları","Kariyer Tavsiyesi"],
    body: `
<h2 id="toc-0">Sektörün Büyüme Trendi</h2>
<p>Türkiye'de özel güvenlik sektörü son on yılda sürekli büyümüştür. Artan kentleşme, genişleyen alışveriş merkezi ağı, endüstriyel yatırımlar ve havalimanı kapasitesi bu büyümenin arkasındaki temel faktörlerdir. Sektörde 500.000'i aşkın kayıtlı özel güvenlik personeli aktif olarak istihdam edilmektedir.</p>
<h2 id="toc-1">Kariyer Basamakları</h2>
<ul>
<li><strong>Güvenlik Görevlisi:</strong> Giriş seviyesi, belge alındıktan hemen sonra</li>
<li><strong>Kıdemli Güvenlik Personeli:</strong> 2–3 yıl deneyimle</li>
<li><strong>Ekip Lideri / Vardiya Sorumlusu:</strong> 4–5 yıl deneyim</li>
<li><strong>Güvenlik Amiri:</strong> 5+ yıl, liderlik becerileri</li>
<li><strong>Güvenlik Müdürü / Koordinatörü:</strong> Üst yönetim, kurumsal pozisyon</li>
</ul>
<h2 id="toc-2">En Fazla İstihdam Sağlayan Alanlar</h2>
<p>AVM güvenliği ve site güvenliği en yaygın pozisyonlar olmakla birlikte, fabrika ve endüstriyel tesis güvenliği yüksek ücretiyle öne çıkmaktadır. Havalimanı güvenliği ise hem prestij hem ücret açısından sektörün üst bandında yer almaktadır.</p>
<h2 id="toc-3">Yönetici Pozisyonlarına Geçiş</h2>
<p>Güvenlik amiri veya müdürü pozisyonlarına ulaşmak için teknik bilginin yanı sıra liderlik, raporlama ve iletişim becerileri de önem kazanmaktadır. Bazı firmalar bu pozisyonlar için ek kurs ve sertifikalar talep etmektedir.</p>
<h2 id="toc-4">Kariyer Tavsiyesi</h2>
<p>Güçlü bir kariyer başlangıcı için silahlı belge tercih edilebilir; bu, daha fazla pozisyona başvurma imkânı tanır. EGG'nin 120+ iş ortağı ağı, mezunların hızlıca istihdam edilmesine önemli katkı sağlamaktadır.</p>
    `,
  },
  {
    slug: "silahli-guvenlik-calisma-alanlari",
    image: "/images/blog/blog-silahli.webp",
    title: "Silahlı Güvenlik Görevlisi Hangi Alanlarda Çalışır?",
    metaTitle: "Silahlı Güvenlik Çalışma Alanları | EGG Güvenlik",
    metaDesc: "Silahlı özel güvenlik belgesi ile çalışılabilecek alanlar, avantajlı sektörler ve iş bulma sürecinde dikkat edilmesi gerekenler.",
    cat: "Kariyer", catColor: "tag-gold", catGroup: "Kariyer Rehberi",
    read: "6 dk", date: "Ocak 2025",
    desc: "Silahlı özel güvenlik belgesinin geçerli olduğu çalışma alanları ve her sektörün sunduğu kariyer avantajları.",
    toc: ["Silahlı Belgenin Farkı","Bankacılık ve Finans","Havalimanı ve Liman","Endüstriyel Tesisler","VIP ve Özel Koruma","Başvuru Önerileri"],
    body: `
<h2 id="toc-0">Silahlı Belgenin Farkı Nedir?</h2>
<p>Silahlı özel güvenlik belgesi, hem daha geniş bir çalışma alanı hem de daha yüksek maaş imkânı sunar. Bazı sektörlerde silahlı personel çalıştırma yasal zorunluluktur; bu nedenle talebin yüksek olduğu pozisyonlarda silahlı belge kesin bir avantaj sağlar.</p>
<h2 id="toc-1">Bankacılık ve Finans</h2>
<p>Banka şubeleri, döviz büroları ve nakit taşıma araçları gibi finans alanlarında silahlı güvenlik görevlisi zorunlu tutulmaktadır. Bu alan, sektörün en yüksek ücret bandında yer alır.</p>
<h2 id="toc-2">Havalimanı ve Liman Güvenliği</h2>
<p>Havalimanları ve limanlar, silahlı güvenlik personeline en fazla ihtiyaç duyan alanlar arasındadır. Vardiyalı çalışma düzeni ve cazip yan haklarıyla bu pozisyonlar büyük talep görmektedir.</p>
<h2 id="toc-3">Endüstriyel Tesisler ve Fabrikalar</h2>
<p>Büyük üretim tesisleri, enerji santralleri ve depo kompleksleri silahlı personel istihdam etmektedir. Gece nöbetleri ve kritik altyapı koruma görevleri bu alandaki ücretleri yukarıya taşımaktadır.</p>
<h2 id="toc-4">VIP ve Özel Koruma</h2>
<p>Özel şahıs koruma, etkinlik güvenliği ve kurumsal üst düzey yönetici koruması da silahlı belge gerektiren alanlardandır. Bu pozisyonlar yüksek sorumluluk içerse de kariyer açısından oldukça prestijlidir.</p>
<h2 id="toc-5">Başvuru Sürecinde Dikkat Edilmesi Gerekenler</h2>
<p>Silahlı pozisyonlara başvururken belge güncelliğini, sağlık raporunu ve güvenlik soruşturması sonucunu hazır bulundurun. EGG'nin iş ortağı ağından yararlanarak doğru pozisyonlara hızlı başvuru yapabilirsiniz.</p>
    `,
  },
  {
    slug: "guvenlik-sektorunde-is-bulmak",
    image: "/images/blog/blog-sartlar.svg",
    title: "Güvenlik Sektöründe İş Bulmak: Pratik Rehber",
    metaTitle: "Güvenlik Sektöründe İş Bulma Rehberi | EGG Güvenlik",
    metaDesc: "Özel güvenlik belgesi aldıktan sonra iş bulma süreci, CV hazırlama, mülakata hazırlık ve sektördeki istihdam kanalları.",
    cat: "Kariyer", catColor: "tag-green", catGroup: "Kariyer Rehberi",
    read: "7 dk", date: "Aralık 2024",
    desc: "Belge aldıktan sonra iş bulma sürecinde kullanılacak kanallar, CV önerileri ve mülakat hazırlığı.",
    toc: ["İstihdam Kanalları","CV Hazırlama","Mülakat Hazırlığı","EGG'nin İş Ortağı Ağı","Sık Yapılan Hatalar"],
    body: `
<h2 id="toc-0">İstihdam Kanalları</h2>
<p>Özel güvenlik alanında iş bulmanın birkaç ana kanalı vardır: özel güvenlik firmalarına doğrudan başvuru, iş ilanı platformları (İŞKUR, kariyer siteleri), eğitim kurumunuzun iş ortağı ağı ve sektör referansları. EGG mezunları, 120'yi aşkın iş ortağı firma aracılığıyla hızla istihdam süreçlerine yönlendirilmektedir.</p>
<h2 id="toc-1">Etkili CV Hazırlama</h2>
<p>Güvenlik sektörüne yönelik CV'nizde belge türünüzü (silahlı/silahsız), eğitim aldığınız kurumu, sınav başarı tarihini ve varsa önceki iş deneyimlerinizi net biçimde belirtin. Fotoğraf eklemek bu sektörde alışılagelen bir uygulamadır.</p>
<h2 id="toc-2">Mülakat Hazırlığı</h2>
<p>Güvenlik mülakatlarında sıkça sorulan konular: acil durum yönetimi, iletişim becerileri, fiziksel dayanıklılık ve vardiyanın getirdiği yükümlülüklere uyum. Sakin, güvenilir ve kararlı bir tutum sergilemek olumlu izlenim bırakır.</p>
<h2 id="toc-3">EGG'nin İş Ortağı Ağından Yararlanın</h2>
<p>EGG Özel Güvenlik, mezunlarına referans ve yönlendirme desteği sunmaktadır. 120+ aktif iş ortağı firma sayesinde sertifika alır almaz iş görüşmelerine başlayabilirsiniz.</p>
<h2 id="toc-4">Sık Yapılan Hatalar</h2>
<p>Belge türünü CV'ye yazmamak, mülakatta vardiyalı çalışmaya uyumu net belirtmemek ve yalnızca bir kanala başvurmak; iş bulma sürecini uzatır. Birden fazla kanalı aynı anda aktif tutmak sonucu hızlandırır.</p>
    `,
  },

  // ── KAYIT ŞARTLARI ───────────────────────────────────────────
  {
    slug: "ozel-guvenlik-kayit-icin-gerekli-evraklar",
    image: "/images/blog/blog-sartlar.svg",
    title: "Özel Güvenlik Kaydı İçin Gerekli Evraklar",
    metaTitle: "Özel Güvenlik Kayıt Evrakları Tam Liste | EGG Güvenlik",
    metaDesc: "Silahlı ve silahsız özel güvenlik eğitimi kaydı için gereken belgelerin tam listesi ve her belge için pratik bilgiler.",
    cat: "Evrak", catColor: "tag-blue", catGroup: "Kayıt Şartları",
    read: "5 dk", date: "Mart 2025",
    desc: "Silahlı ve silahsız eğitim kaydı için gereken belgelerin tam listesi, nereden alınacağı ve dikkat edilmesi gerekenler.",
    toc: ["Ortak Evraklar","Silahlı Eğitime Özel Belgeler","Belgeleri Nereden Alırsınız?","Eksik Evrak Durumunda"],
    body: `
<h2 id="toc-0">Ortak Evraklar (Her İki Program İçin)</h2>
<ul>
<li>TC kimlik kartı fotokopisi (ön ve arka yüz)</li>
<li>En az ilkokul mezuniyetini gösteren diploma fotokopisi</li>
<li>Son 6 ay içinde çekilmiş biyometrik fotoğraf (4 adet)</li>
<li>E-devlet veya PTT'den alınan güncel adli sicil belgesi (sabıka kaydı)</li>
<li>Resmi sağlık kuruluşundan alınan genel sağlık raporu</li>
</ul>
<h2 id="toc-1">Silahlı Eğitime Özel Ek Belgeler</h2>
<ul>
<li>Tam teşekküllü devlet hastanesinden alınan sağlık kurulu raporu ("silah taşımaya engel yoktur" ibareli)</li>
<li>Güvenlik soruşturması ve arşiv araştırması sonuç belgesi</li>
</ul>
<p>Silahlı eğitim için özel hastane raporu kesinlikle kabul edilmez; devlet hastanesi raporu zorunludur.</p>
<h2 id="toc-2">Belgeleri Nereden Alırsınız?</h2>
<p>Adli sicil belgesi e-devlet üzerinden veya PTT şubelerinden, sağlık raporları devlet hastanelerinden, biyometrik fotoğraflar profesyonel fotoğraf stüdyolarından temin edilebilir. Diploma kaybı durumunda ilgili okuldan tasdikli suret alınabilir.</p>
<h2 id="toc-3">Eksik Evrak Durumunda</h2>
<p>Eksik belgeyle başvuru yapılması süreci uzatır. EGG danışmanlarımız, başvurudan önce belge kontrolü yaparak eksiklikleri önceden tespit etmenize yardımcı olur. WhatsApp hattımızdan listeyi alabilir ve adım adım yönlendirme talep edebilirsiniz.</p>
    `,
  },
  {
    slug: "saglik-raporu-hangi-hastaneden-alinir",
    image: "/images/blog/blog-sartlar.svg",
    title: "Özel Güvenlik İçin Sağlık Raporu Nereden Alınır?",
    metaTitle: "Özel Güvenlik Sağlık Raporu Rehberi | EGG Güvenlik",
    metaDesc: "Silahsız ve silahlı özel güvenlik için gerekli sağlık raporu türleri, hangi hastanelerden alınabileceği ve raporlarda aranan kriterler.",
    cat: "Evrak", catColor: "tag-blue", catGroup: "Kayıt Şartları",
    read: "5 dk", date: "Şubat 2025",
    desc: "Silahlı ve silahsız güvenlik eğitimi için hangi hastaneden, nasıl sağlık raporu alınacağına dair eksiksiz rehber.",
    toc: ["Silahsız İçin Sağlık Raporu","Silahlı İçin Sağlık Kurulu Raporu","Özel Hastane Raporları Geçerli mi?","Raporlarda Aranan Kriterler","Sık Yapılan Hatalar"],
    body: `
<h2 id="toc-0">Silahsız Eğitim İçin Sağlık Raporu</h2>
<p>Silahsız özel güvenlik eğitimine başvurmak için herhangi bir resmi sağlık kuruluşundan (devlet hastanesi veya aile hekimi) alınan basit sağlık raporu yeterlidir. Bu raporda "güvenlik görevi yapmaya engel bir sağlık durumu yoktur" benzeri bir ifade bulunması beklenir.</p>
<h2 id="toc-1">Silahlı Eğitim İçin Sağlık Kurulu Raporu</h2>
<p>Silahlı eğitim adayları, tam teşekküllü devlet hastanesinden alınan sağlık kurulu raporunu ibraz etmek zorundadır. Bu raporda "silah taşımaya engel teşkil eden bir hastalık bulunmamaktadır" ibaresi yer almalıdır. İlgili bölümler dahiliye, göz, kulak-burun-boğaz, psikiyatri ve nöroloji uzmanlarından oluşan bir kurulca değerlendirilir.</p>
<h2 id="toc-2">Özel Hastane Raporları Geçerli mi?</h2>
<p>Silahlı eğitim için özel hastanelerden alınan raporlar kabul edilmez. Yalnızca tam teşekküllü devlet hastanesi (devlet üniversite hastaneleri dahil) tarafından düzenlenen kurul raporları geçerlidir. Silahsız eğitim için ise özel sağlık kuruluşu raporu da kabul görmektedir.</p>
<h2 id="toc-3">Raporlarda Aranan Kriterler</h2>
<p>Raporlarda engel teşkil edebilecek başlıca durumlar: ciddi görme bozuklukları, işitme kaybı, psikiyatrik tanı geçmişi ve kronik nörolojik rahatsızlıklardır. Her vaka bireysel olarak değerlendirilir; danışmanımız bu konuda da yönlendirme sağlayabilir.</p>
<h2 id="toc-4">Sık Yapılan Hatalar</h2>
<p>Silahlı eğitim için özel hastaneden rapor alarak süreci başlatmak ve raporun geçersiz çıkmasıyla zaman kaybetmek en sık karşılaşılan hatadır. Başvurmadan önce danışmanımızdan güncel bilgi almanız bu tür aksaklıkları önler.</p>
    `,
  },
  {
    slug: "adli-sicil-belgesi-nasil-alinir",
    image: "/images/blog/blog-sartlar.svg",
    title: "Adli Sicil Belgesi Nasıl Alınır?",
    metaTitle: "Adli Sicil Belgesi Alma Rehberi | EGG Güvenlik",
    metaDesc: "Özel güvenlik başvurusu için gereken adli sicil belgesini e-devlet, PTT veya adliye üzerinden nasıl alırsınız? Adım adım rehber.",
    cat: "Evrak", catColor: "tag-blue", catGroup: "Kayıt Şartları",
    read: "4 dk", date: "Ocak 2025",
    desc: "E-devlet, PTT ve adliye üzerinden adli sicil belgesi alma yöntemleri ve güvenlik başvurusu için dikkat edilmesi gerekenler.",
    toc: ["E-Devlet Üzerinden","PTT Şubesinden","Adliyeden","Belgenin Geçerlilik Süresi","Sabıka Kaydı Varsa"],
    body: `
<h2 id="toc-0">E-Devlet Üzerinden (En Hızlı Yöntem)</h2>
<p>e-Devlet (turkiye.gov.tr) hesabınıza TC kimlik numarası ve şifrenizle giriş yapın. Arama kutusuna "adli sicil belgesi" yazın. İlgili hizmet sayfasından online olarak belgenizi oluşturun ve yazdırın. Tüm işlem birkaç dakika içinde tamamlanır.</p>
<h2 id="toc-1">PTT Şubesinden</h2>
<p>Herhangi bir PTT şubesine TC kimlik kartınızla giderek adli sicil belgesi talep edebilirsiniz. Belge genellikle aynı gün verilmekte, küçük bir işlem ücreti alınmaktadır.</p>
<h2 id="toc-2">Cumhuriyet Başsavcılığı (Adliye) Üzerinden</h2>
<p>Bağlı bulunduğunuz ildeki Cumhuriyet Başsavcılığı'na bizzat giderek de belge alabilirsiniz. Bu yöntem daha uzun sürebilir; e-devlet veya PTT tercih edilmesi önerilir.</p>
<h2 id="toc-3">Belgenin Geçerlilik Süresi</h2>
<p>Adli sicil belgelerinin belirli bir yasal geçerlilik süresi olmamakla birlikte, özel güvenlik başvurularında genellikle son 1–3 ay içinde alınmış belge talep edilmektedir. Eski tarihli belgeler kurumdan kuruma farklı değerlendirilebilir.</p>
<h2 id="toc-4">Sabıka Kaydı Varsa</h2>
<p>Belirli suç türleri özel güvenlik eğitimine katılımı yasal olarak engellemektedir. Kaydınızda kayıt bulunması durumunda danışmanımızla görüşerek durumunuzun değerlendirilebilir olup olmadığını öğrenebilirsiniz.</p>
    `,
  },

  // ── SINAV SÜRECİ ─────────────────────────────────────────────
  {
    slug: "ozel-guvenlik-sinav-konulari",
    image: "/images/blog/blog-sinav.svg",
    title: "Özel Güvenlik Sınavı Konuları Nelerdir?",
    metaTitle: "Özel Güvenlik Sınav Konuları | EGG Güvenlik",
    metaDesc: "İçişleri Bakanlığı özel güvenlik sınavında çıkan konular, soru dağılımı ve her konudan ne kadarlık ağırlık bekleneceği.",
    cat: "Sınav", catColor: "tag-gold", catGroup: "Sınav Süreci",
    read: "7 dk", date: "Şubat 2025",
    desc: "Özel güvenlik sınavındaki konu başlıkları, soru dağılımı ve her modül için çalışma önerileri.",
    toc: ["Sınavın Genel Yapısı","5188 Sayılı Kanun","Güvenlik Uygulamaları","Temel İlk Yardım","Silah Bilgisi (Silahlı)","Çalışma Stratejisi"],
    body: `
<h2 id="toc-0">Sınavın Genel Yapısı</h2>
<p>Özel güvenlik sınavı, yazılı ve uygulamalı olmak üzere iki aşamadan oluşur. Yazılı bölüm çoktan seçmeli sorulardan oluşur. Geçme notu her iki bölüm için ayrı ayrı belirlenmekte olup yazılı sınavı geçemeyen adaylar uygulamalı sınava katılamaz.</p>
<h2 id="toc-1">5188 Sayılı Kanun ve Mevzuat</h2>
<p>Sınavın en ağırlıklı konusu, Özel Güvenlik Hizmetlerine Dair 5188 Sayılı Kanun ve ilgili yönetmeliktir. Güvenlik görevlisinin yasal yetkileri, yetki sınırları, durdurma ve kimlik sorma hakkı, silah kullanma koşulları bu bölümün temel konularıdır.</p>
<h2 id="toc-2">Güvenlik Uygulamaları ve Protokoller</h2>
<p>Güvenlik önlemleri, X-ray cihazı kullanımı, devriye hizmetleri, olay yönetimi ve rapor tutma bu başlık altında değerlendirilmektedir. Pratik senaryolar üzerinden soru sorulduğundan uygulamalı eğitim önem taşır.</p>
<h2 id="toc-3">Temel İlk Yardım</h2>
<p>Kalp masajı (CPR), yabancı cisim tıkanması, kanama kontrolü ve şok yönetimi gibi temel ilk yardım bilgileri hem yazılı hem uygulamalı sınavda yer almaktadır. Bu konular günlük hayatta da işlevsel olduğundan öğrenciler tarafından önemsenmektedir.</p>
<h2 id="toc-4">Silah Bilgisi (Silahlı Adaylar)</h2>
<p>Silahlı eğitim adayları ek olarak tabanca bakımı, güvenli taşıma, mermi bilgisi ve atış teknikleri konularında sınava girer. Poligon tatbikatı uygulamalı sınavın ayrılmaz parçasıdır.</p>
<h2 id="toc-5">Etkili Çalışma Stratejisi</h2>
<p>Önce 5188 sayılı Kanun'u özet çıkararak çalışın. Daha sonra güvenlik uygulamaları ve ilk yardım modüllerine geçin. Sınav öncesi son hafta tüm konuları kısa bir tekrardan geçirin. EGG'nin sağladığı deneme soruları bu süreçte büyük kolaylık sağlamaktadır.</p>
    `,
  },
  {
    slug: "ozel-guvenlik-sinav-sonuclari-nasil-ogrenilir",
    image: "/images/blog/blog-sinav.svg",
    title: "Özel Güvenlik Sınav Sonuçları Nasıl Öğrenilir?",
    metaTitle: "Özel Güvenlik Sınav Sonuçları | EGG Güvenlik",
    metaDesc: "Özel güvenlik sınav sonuçlarının açıklanma süreci, sonuçlara nereden bakılacağı ve sonraki adımlar hakkında rehber.",
    cat: "Sınav", catColor: "tag-gold", catGroup: "Sınav Süreci",
    read: "5 dk", date: "Ocak 2025",
    desc: "Sınav sonuçlarının ne zaman ve nasıl açıklandığı, itiraz süreci ve sonuç sonrası yapılması gerekenler.",
    toc: ["Sonuçların Açıklanma Süresi","Sonuçlara Nasıl Bakılır?","Başarı Durumunda Sonraki Adım","Başarısız Durumda Ne Yapılır?","İtiraz Süreci"],
    body: `
<h2 id="toc-0">Sonuçların Açıklanma Süresi</h2>
<p>Özel güvenlik sınav sonuçları genellikle sınavdan 2–4 hafta sonra açıklanmaktadır. Bu süre, sınav merkezinin yoğunluğuna ve değerlendirme takvimine göre değişebilir. EGG, sonuçları öğrencileriyle paylaşarak süreci yakından takip etmelerine destek olur.</p>
<h2 id="toc-1">Sonuçlara Nasıl Bakılır?</h2>
<p>Sınav sonuçları İçişleri Bakanlığı'nın ilgili web portalı üzerinden TC kimlik numarasıyla sorgulanabilmektedir. EGG danışmanlarınız da size özel bilgilendirme yapmaktadır; bu nedenle iletişim bilgilerinizin güncel olması önemlidir.</p>
<h2 id="toc-2">Başarı Durumunda Sonraki Adım</h2>
<p>Sınavı başarıyla geçen adaylar, İçişleri Bakanlığı tarafından çıkarılan özel güvenlik kimlik belgesini belirli bir süre içinde teslim alır. EGG, bu aşamada da başvuru ve teslim sürecinde rehberlik yapmaktadır.</p>
<h2 id="toc-3">Başarısız Durumda Ne Yapılır?</h2>
<p>Sınavdan başarısız olan adaylar bir sonraki sınav döneminde tekrar girebilir. Eğitimi tekrar almanız gerekmez; ancak EGG'nin sunduğu ek hazırlık desteğinden yararlanmanız tavsiye edilir.</p>
<h2 id="toc-4">İtiraz Süreci</h2>
<p>Sonuçlara itiraz etmek isteyen adaylar, sonuçların açıklanmasından itibaren belirli bir süre içinde resmi itiraz başvurusunda bulunabilir. Danışmanınız bu süreçte gerekli evraklar ve prosedür hakkında bilgi verecektir.</p>
    `,
  },
  {
    slug: "sinav-oncesi-en-cok-sorulan-sorular",
    image: "/images/blog/blog-sinav.svg",
    title: "Sınav Öncesi En Çok Sorulan 10 Soru",
    metaTitle: "Özel Güvenlik Sınavı Öncesi Sık Sorulan Sorular | EGG",
    metaDesc: "Özel güvenlik sınavına girmeden önce merak edilen 10 temel soru ve net yanıtları. Sınava hazır mısınız?",
    cat: "Sınav", catColor: "tag-gold", catGroup: "Sınav Süreci",
    read: "6 dk", date: "Kasım 2024",
    desc: "Sınav günü ne götürülmeli, kaç soru çıkar, geçme notu kaçtır gibi en sık sorulan soruların cevapları.",
    toc: ["Sınava Neler Götürülmeli?","Kaç Soru Çıkar?","Geçme Notu Nedir?","Sınav Süresi Ne Kadar?","Sınav Yeri Nasıl Öğrenilir?"],
    body: `
<h2 id="toc-0">Sınava Neler Götürülmeli?</h2>
<p>Sınava mutlaka geçerli TC kimlik kartınızı ve sınav giriş belgenizi yanınızda bulundurun. Bunlara ek olarak saat, kalem ve silgi gibi temel kırtasiye malzemeleri de alabilirsiniz. Telefon ve elektronik cihazlar çoğu merkezde yasaktır.</p>
<h2 id="toc-1">Kaç Soru Çıkar?</h2>
<p>Yazılı sınav; belge türüne ve programa bağlı olarak genellikle 50–100 soru arasında değişmektedir. Çoktan seçmeli sorular 4 veya 5 şıktan oluşmaktadır. EGG eğitmenleriniz, geçmiş sınav örneklerine göre güncel tahmini yapıyı paylaşacaktır.</p>
<h2 id="toc-2">Geçme Notu Nedir?</h2>
<p>Her iki aşamada (yazılı ve uygulamalı) ayrı ayrı başarılı olmak gerekmektedir. Geçme notu İçişleri Bakanlığı tarafından belirlenmekte olup genellikle 100 üzerinden 70 olarak uygulanmaktadır. Güncel kural için danışmanınıza başvurun.</p>
<h2 id="toc-3">Sınav Süresi Ne Kadar?</h2>
<p>Yazılı sınav için soru başına ortalama 1–1,5 dakika hesaplanır. Toplam süre genellikle 60–90 dakika arasındadır. Zamanı iyi yönetmek için önce bildiğiniz soruları çözün, şüphelileri sona bırakın.</p>
<h2 id="toc-4">Sınav Yeri Nasıl Öğrenilir?</h2>
<p>Sınav yeri ve tarihi, İçişleri Bakanlığı'nın tebliğleri ve EGG'nin öğrenci bilgilendirme sistemi aracılığıyla duyurulmaktadır. Sınav tarihine yakın danışmanınızla iletişime geçerek son bilgileri teyit edin.</p>
    `,
  },

  // ── YENİLEME EĞİTİMİ ─────────────────────────────────────────
  {
    slug: "yenileme-egitimi-evraklari-nelerdir",
    image: "/images/blog/blog-yenileme.svg",
    title: "Yenileme Eğitimi İçin Gerekli Evraklar",
    metaTitle: "Özel Güvenlik Yenileme Eğitimi Evrakları | EGG Güvenlik",
    metaDesc: "Özel güvenlik kimlik yenileme eğitimine başvurmak için gerekli belgeler, nereden alınacağı ve dikkat edilmesi gereken detaylar.",
    cat: "Yenileme", catColor: "tag-gray", catGroup: "Yenileme Eğitimi",
    read: "5 dk", date: "Ocak 2025",
    desc: "Güvenlik kimliği yenileme başvurusu için tam evrak listesi ve her belgenin nasıl temin edileceğine dair rehber.",
    toc: ["Temel Evrak Listesi","Silahlı Belge Sahipleri İçin Ek Evrak","Belgeleri Nereden Alırsınız?","Başvuru Zamanlaması","Hızlı Kontrol Listesi"],
    body: `
<h2 id="toc-0">Temel Evrak Listesi</h2>
<ul>
<li>Mevcut özel güvenlik kimlik kartı (asıl veya fotokopi)</li>
<li>TC kimlik kartı fotokopisi (ön–arka)</li>
<li>Son 6 ay içinde çekilmiş biyometrik fotoğraf (2 adet)</li>
<li>Güncel adli sicil belgesi (e-devlet veya PTT'den)</li>
<li>Resmi sağlık kuruluşundan alınan sağlık raporu</li>
</ul>
<h2 id="toc-1">Silahlı Belge Sahipleri İçin Ek Evrak</h2>
<p>Silahlı kimliğini yenileyecek adaylar ek olarak tam teşekküllü devlet hastanesinden alınan sağlık kurulu raporunu ibraz etmek zorundadır. Bu adımı atlamak başvurunun reddedilmesine neden olabilir.</p>
<h2 id="toc-2">Belgeleri Nereden Alırsınız?</h2>
<p>Adli sicil e-devlet veya PTT'den, sağlık raporları devlet hastanelerinden, fotoğraflar ise fotoğraf stüdyolarından temin edilir. Kimlik kartı kaybı durumunda önce nüfus müdürlüğünden yeni kimlik almanız gerekebilir.</p>
<h2 id="toc-3">Başvuru Zamanlaması</h2>
<p>Kimlik bitiş tarihinden en az 3 ay önce başvurmanızı tavsiye ederiz. Evrak eksiklikleri ve randevu süreleri göz önünde bulundurulduğunda bu tampon süre kritik öneme sahiptir. Son güne bırakılan başvurular hukuki riske yol açabilir.</p>
<h2 id="toc-4">Hızlı Kontrol Listesi</h2>
<p>Başvurmadan önce şunları kontrol edin: fotoğraf tarihi 6 ayı geçmemiş mi? Adli sicil belgesi güncel mi? Silahlı adaylar için devlet hastanesi raporu alındı mı? Tüm belgeler eksiksizse EGG danışmanınızla hemen iletişime geçin.</p>
    `,
  },
  {
    slug: "kimlik-suresi-dolunca-ne-olur",
    image: "/images/blog/blog-yenileme.svg",
    title: "Güvenlik Kimliği Süresi Dolunca Ne Olur?",
    metaTitle: "Güvenlik Kimliği Süresi Dolunca | EGG Güvenlik",
    metaDesc: "Özel güvenlik kimliğinin süresi dolduğunda yasal durum, çalışmaya devam edilip edilemeyeceği ve yenileme sürecine dair her şey.",
    cat: "Yenileme", catColor: "tag-gray", catGroup: "Yenileme Eğitimi",
    read: "5 dk", date: "Ekim 2024",
    desc: "Süresi dolan güvenlik kimliğinin yarattığı yasal sonuçlar, işverenin yükümlülükleri ve yenileme için doğru adımlar.",
    toc: ["Yasal Durum","İşverenin Yükümlülüğü","Aktif Görevden Uzaklaştırılma","Yenileme Süreci Nasıl Başlatılır?","Önlem Olarak Erken Başvuru"],
    body: `
<h2 id="toc-0">Süresi Dolan Kimlikle Çalışmak Yasal mı?</h2>
<p>Hayır. Süresi dolmuş bir özel güvenlik kimliğiyle aktif olarak görev yapmak 5188 sayılı Kanun kapsamında yasal değildir. Bu durum hem görevli hem de işveren açısından idari ve hukuki yaptırımlara yol açabilir.</p>
<h2 id="toc-1">İşverenin Yükümlülüğü</h2>
<p>İşverenler, bünyelerindeki güvenlik personelinin kimlik geçerlilik sürelerini takip etmekle yükümlüdür. Süresi dolan personelin aktif görevde tutulması halinde işveren de denetim yaptırımlarıyla karşılaşabilir.</p>
<h2 id="toc-2">Aktif Görevden Uzaklaştırılma</h2>
<p>Kimlik süresi dolduğunda personel aktif görevden çekilmek zorundadır. Yenileme eğitimi tamamlanıp yeni kimlik teslim alınana kadar güvenlik görevlisi olarak çalışmak mümkün değildir. Bu süre iş kaybı anlamına gelebilir.</p>
<h2 id="toc-3">Yenileme Sürecini Nasıl Başlatırsınız?</h2>
<p>EGG ile iletişime geçerek evrak listenizi alın, belgeleri hazırlayın ve en yakın yenileme eğitim dönemine kayıt yaptırın. EGG'nin hızlı süreci, en kısa sürede aktif göreve geri dönmenize imkân tanır.</p>
<h2 id="toc-4">Önlem Olarak Erken Başvuru</h2>
<p>Kimlik bitiş tarihinden 3–4 ay önce başvurmak, olası gecikmeleri önlemenin en etkili yoludur. Yenileme eğitimi almadan kimlik süresinin dolmasına izin vermek; iş, gelir ve kariyer kaybına neden olabilir.</p>
    `,
  },

  // ── EĞİTİM REHBERİ (ek) ──────────────────────────────────────
  {
    slug: "ozel-guvenlik-egitimi-kac-gun-surer",
    image: "/images/blog/blog-adana.webp",
    title: "Özel Güvenlik Eğitimi Kaç Gün Sürer?",
    metaTitle: "Özel Güvenlik Eğitimi Süresi | EGG Güvenlik",
    metaDesc: "Silahlı, silahsız ve yenileme özel güvenlik eğitimlerinin süreleri, haftalık ders saatleri ve toplam süreç takvimi.",
    cat: "Rehber", catColor: "tag-green", catGroup: "Eğitim Rehberi",
    read: "5 dk", date: "Kasım 2024",
    desc: "Silahlı, silahsız ve yenileme programlarının kaç saatlik olduğu ve toplam eğitim süreçlerinin ne kadar sürdüğü.",
    toc: ["Silahlı Eğitim Süresi","Silahsız Eğitim Süresi","Yenileme Eğitimi Süresi","Haftalık Ders Düzeni","Toplam Süreç Takvimi"],
    body: `
<h2 id="toc-0">Silahlı Eğitim Süresi</h2>
<p>Silahlı özel güvenlik eğitimi 120 saattir. Haftalık ders saatine göre eğitim süresi değişmekle birlikte program genellikle 8–12 hafta (2–3 ay) içinde tamamlanmaktadır. Poligon tatbikatları bu sürenin ayrılmaz bir parçasıdır.</p>
<h2 id="toc-1">Silahsız Eğitim Süresi</h2>
<p>Silahsız özel güvenlik eğitimi 90 saattir. Program genellikle 6–8 hafta (1,5–2 ay) içinde tamamlanır. Daha kısa eğitim süresi, hızlı belgelendirme isteyen adaylar için bu programı cazip kılmaktadır.</p>
<h2 id="toc-2">Yenileme Eğitimi Süresi</h2>
<p>Yenileme eğitimi 40 saattir. Mevcut güvenlik personeline yönelik bu program, yoğun takvimle 2–3 haftada tamamlanabilmektedir. Sürecin kısa tutulması, personelin iş hayatından minimum kopuş yaşamasını sağlar.</p>
<h2 id="toc-3">Haftalık Ders Düzeni</h2>
<p>EGG, öğrencilerin iş ve sosyal hayatlarını aksatmayacak şekilde düzenlenen haftalık ders takvimleri sunmaktadır. Hem hafta içi hem de hafta sonu seçenekleri mümkündür; dönem başında belirlenen program tüm öğrencilerle paylaşılır.</p>
<h2 id="toc-4">Toplam Süreç Takvimi</h2>
<p>Eğitim süresi, sınav hazırlığı, sınav bekleme ve kimlik teslim aşamalarıyla birlikte silahlı program için ortalama 3–4 ay, silahsız için 2–3 ay hesaplanmalıdır. Tüm süreç EGG danışmanı tarafından adım adım takip edilmektedir.</p>
    `,
  },
  {
    slug: "silahsizdan-silahliya-gecis-mumkun-mu",
    image: "/images/blog/blog-silahsiz.webp",
    title: "Silahsız Belgeden Silahlıya Geçiş Mümkün mü?",
    metaTitle: "Silahsız'dan Silahlı Güvenlik Belgesine Geçiş | EGG",
    metaDesc: "Halihazırda silahsız özel güvenlik belgesine sahipseniz, silahlı belgeye nasıl geçiş yapabilirsiniz? Süreç, evraklar ve avantajlar.",
    cat: "Rehber", catColor: "tag-green", catGroup: "Eğitim Rehberi",
    read: "6 dk", date: "Ekim 2024",
    desc: "Mevcut silahsız belge sahiplerinin silahlı belgeye geçiş süreci, ek eğitim gereksinimleri ve kariyer kazanımları.",
    toc: ["Geçiş Mümkün mü?","Tamamlayıcı Eğitim Nedir?","Ek Evrak Gereksinimleri","Süreç Kaç Sürer?","Kariyer Açısından Değeri"],
    body: `
<h2 id="toc-0">Silahsız Belgeden Silahlıya Geçiş Mümkün mü?</h2>
<p>Evet. Halihazırda silahsız özel güvenlik belgesine sahip olan kişiler, tamamlayıcı eğitim programına katılarak silahlı belge edinebilir. Bu, sıfırdan başlamak zorunda olmadığınız anlamına gelir; mevcut belgeniz avantajınıza çalışır.</p>
<h2 id="toc-1">Tamamlayıcı Eğitim Nedir?</h2>
<p>Tamamlayıcı eğitim, silahsız belgeli adayların eksik olan ateşli silah modüllerini tamamlaması için tasarlanmış özel bir programdır. 120 saatlik tam eğitim yerine daha kısa süren bu program, ateşli silah bilgisi, bakımı, güvenli taşıma ve poligon tatbikatlarını kapsar.</p>
<h2 id="toc-2">Ek Evrak Gereksinimleri</h2>
<p>Geçiş programına başvurmak için mevcut silahsız güvenlik kimliğinizin yanı sıra tam teşekküllü devlet hastanesinden alınan sağlık kurulu raporu (silahlı için zorunlu) gerekmektedir. Adli sicil belgesi ve biyometrik fotoğraf da hazır bulundurulmalıdır.</p>
<h2 id="toc-3">Süreç Kaç Sürer?</h2>
<p>Tamamlayıcı eğitim, tam programa kıyasla daha kısa olduğundan geçiş süreci genellikle 4–8 hafta arasında tamamlanmaktadır. Ardından sınav ve kimlik teslim aşamaları normal süreçte devam eder.</p>
<h2 id="toc-4">Kariyer Açısından Değeri</h2>
<p>Silahlı belge edinmek; banka, fabrika ve havalimanı gibi yüksek ücretli pozisyonlara kapı aralar. Mevcut belgenizin üzerine eklenen bu yetki, kariyerinizde somut bir sıçrama noktası oluşturabilir. EGG danışmanları geçiş sürecinde size rehberlik etmektedir.</p>
    `,
  },
];

// ─── Program descriptions (detailed, SEO-rich) ────────────────
export const PROGRAM_DETAIL = {
  silahli: {
    hero_sub: "Silahlı özel güvenlik görevlisi olmak isteyen adaylar için İçişleri Bakanlığı onaylı, 120 saatlik kapsamlı eğitim programı. Adana ve çevre illerde hizmet vermekteyiz.",
    seo_intro: "Silahlı özel güvenlik eğitimi, ateşli silah taşıma yetkisi veren ve Türkiye genelinde geçerli olan devlet onaylı bir belgedir.",
    why: "Silahlı belge, iş piyasasında silahsız belgeye kıyasla belirgin bir rekabet avantajı sunar. Fabrika, havalimanı, banka ve VIP koruma gibi pozisyonlar yüksek maaş imkânı ile birlikte talep eder.",
  },
  silahsiz: {
    hero_sub: "Güvenlik sektörüne profesyonel bir başlangıç yapmak isteyen adaylar için İçişleri Bakanlığı onaylı, 90 saatlik temel özel güvenlik eğitim programı.",
    seo_intro: "Silahsız özel güvenlik eğitimi, Türkiye'deki güvenlik pozisyonlarının büyük çoğunluğuna erişim sağlayan, hızlı ve erişilebilir bir belgelendirme yoludur.",
    why: "Daha kısa süreç, daha az bürokratik yük ve geniş çalışma alanı seçenekleriyle silahsız belge, sektöre giriş için ideal bir başlangıç noktasıdır.",
  },
  yenileme: {
    hero_sub: "Mevcut özel güvenlik kimlik kartının geçerliliğini uzatmak isteyen adaylar için güncel mevzuata uygun, 40 saatlik yenileme eğitimi.",
    seo_intro: "Özel güvenlik kimliği 5 yılda bir yenilenmesi zorunlu yasal bir belgedir. Zamanında alınan yenileme eğitimi, kariyer kesintisini önler.",
    why: "Kimlik süresi dolmadan yenileme yapılmazsa yasal sorunlarla karşılaşılır. EGG'nin hızlı ve düzenli yenileme süreci, bu riski ortadan kaldırır.",
  },
};

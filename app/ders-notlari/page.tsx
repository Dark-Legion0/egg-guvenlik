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
    desc: "Metal detektörler, X-ray cihazları, CCTV sistemleri ve erişim kontrol teknolojileri.",
    sections: [
      {
        heading: "Fiziki Engeller",
        content: `<ul>
          <li><strong>Doğal engeller:</strong> Dağlar, tepeler, su yolları gibi doğanın sunduğu koruma unsurları.</li>
          <li><strong>Yapay engeller:</strong> Duvarlar, tel örgüler, çitler, kuleler, aydınlatma sistemleri ve kilit mekanizmaları.</li>
        </ul>`,
      },
      {
        heading: "Metal Detektörler",
        content: `<p><strong>El Tipi:</strong> Cihaz aranan kişinin vücudundan yaklaşık 5 cm mesafede gezdirilir. Şarjın dolu olması, bayan kişilerin bayan görevli tarafından kontrol edilmesi ve fiziki incelemenin gizli ortamda yapılması zorunludur.</p>
        <p><strong>Kapı Tipi:</strong> Hareketli metal nesnelerden en az 1 metre uzakta kurulmalıdır. Alarm durumunda el detektörü ile kesin konum belirlenir.</p>`,
      },
      {
        heading: "X-Ray Cihazları",
        content: `<p>Üç ana bileşenden oluşur: X ışını ünitesi, ekran ve kontrol paneli. Paketler en az 50 cm aralıkla yerleştirilmelidir. Canlı varlıklar hiçbir şekilde kontrol edilmez.</p>
        <p><strong>Renk kodlaması:</strong></p>
        <ul>
          <li>Koyu mavi → Metal</li>
          <li>Kahverengi/turuncu → Organik maddeler</li>
          <li>Yeşil → Az yoğun maddeler</li>
        </ul>`,
      },
      {
        heading: "CCTV Sistem Bileşenleri",
        content: `<ul>
          <li><strong>Kamera:</strong> Görüntü yakalama</li>
          <li><strong>Monitör:</strong> Görüntü gösterimi</li>
          <li><strong>Switcher:</strong> Kameralar arası geçiş</li>
          <li><strong>Quad:</strong> 4 kamera eşzamanlı izleme</li>
          <li><strong>Multiplexer:</strong> 8 veya 16 kamera izleme</li>
          <li><strong>Pan-Tilt:</strong> Kamera hareketi kontrolü</li>
          <li><strong>Housing:</strong> Kamera koruması</li>
        </ul>`,
      },
      {
        heading: "Erişim Kontrol Sistemleri",
        content: `<ul>
          <li><strong>Biyometrik Cihazlar:</strong> El yazısı, iris, retina gibi fiziksel özelliklere dayalı erişim kontrolü.</li>
          <li><strong>PDKS:</strong> Çalışan giriş-çıkış saatlerinin kaydı.</li>
          <li><strong>Turnike Sistemleri:</strong> Yalnızca yetkili kişilerin geçişini sağlayan sistemler.</li>
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
    desc: "İletişim türleri, empati, mekan yönetimi ve iletişim engelleri.",
    sections: [
      {
        heading: "İletişim Çeşitleri ve Türleri",
        content: `<p><strong>Çeşitler:</strong> Paralel, çapraz ve örtülü iletişim.</p>
        <p><strong>Türler:</strong> Kişi içi, kişiler arası, örgüt içi ve kitle iletişimi.</p>
        <p><strong>Kitle iletişiminin 4 işlevi:</strong> Haber verme, yönetsel katılım, eğitim ve eğlendirme.</p>`,
      },
      {
        heading: "Temel Kavramlar",
        content: `<ul>
          <li><strong>Empati:</strong> Bir insanın kendisini karşısındaki insanın yerine koyarak olaylara onun bakış açısıyla bakması.</li>
          <li><strong>Motivasyon:</strong> İnsanları belirli amaçları gerçekleştirmeye yöneltme.</li>
        </ul>
        <p><strong>İletişimin 5 temel öğesi:</strong> Kaynak, alıcı, mesaj, kanal ve geri bildirim.</p>`,
      },
      {
        heading: "Mekan ve Mesafe Bölgeleri",
        content: `<ul>
          <li><strong>Mahrem alan:</strong> 0–35 cm</li>
          <li><strong>Kişisel alan:</strong> 40–80 cm</li>
          <li><strong>Sosyal alan:</strong> 80 cm – 2 m</li>
          <li><strong>Genel alan:</strong> 2 m üstü</li>
        </ul>`,
      },
      {
        heading: "Stres ve İletişim Engelleri",
        content: `<p><strong>Stres belirtileri:</strong></p>
        <ul>
          <li>Psikolojik: Öfke, kaygı, depresyon</li>
          <li>Davranışsal: Uyku sorunları, beslenme değişiklikleri</li>
          <li>Bedensel: Kalp rahatsızlığı, tansiyon</li>
        </ul>
        <p><strong>İletişim engelleri:</strong> Korkular, ön yargılar, duyarsızlık, alay, kararsızlık ve ben-merkezcilik.</p>`,
      },
    ],
  },
  {
    id: "ozel-guvenlik-hukuku",
    title: "Özel Güvenlik Hukuku",
    icon: "⚖️",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.2)",
    desc: "5188 sayılı Kanun, güvenlik görevlisinin yetkileri ve yasal sorumluluklar.",
    sections: [
      {
        heading: "Yasal Çerçeve",
        content: `<ul>
          <li>Özel güvenlik hizmetleri <strong>5188 Sayılı Kanun</strong> ile düzenlenir.</li>
          <li>Kişi dokunulmazlığı anayasal güvence altındadır.</li>
          <li>Temel hak ve hürriyetler yasal sınırlamaya tabidir.</li>
          <li>İçişleri Bakanlığı genel asayiş sorumluluğunu taşır.</li>
        </ul>`,
      },
      {
        heading: "Güvenlik Görevlisinin Yetkileri",
        content: `<ul>
          <li>Görevliler "emanete alma" işlemi ile mal zapt etme yetkisine sahiptir.</li>
          <li>Suçlar genel kolluğa derhal bildirilmelidir.</li>
          <li>Yetkiler belirli koşullarla sınırlıdır.</li>
          <li>Vali, geçici güvenlik hizmetleri için izin verme yetkisine sahiptir.</li>
        </ul>`,
      },
      {
        heading: "İdari ve Hukuki Süreçler",
        content: `<ul>
          <li>Özel Güvenlik Komisyonu silah bulundurmaya ilişkin kararları alır.</li>
          <li>Cezalara karşı iş mahkemesine başvuru hakkı bulunur.</li>
          <li>Hukuka aykırı yakalama yapan görevli "kişiyi hürriyetinden yoksun kılma" suçunu işler.</li>
        </ul>`,
      },
    ],
  },
  {
    id: "kisi-koruma",
    title: "Kişi Koruma",
    icon: "🛡️",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.2)",
    desc: "VIP koruma teknikleri, suikast safhaları ve koruma çemberleri.",
    sections: [
      {
        heading: "Suikastların Nedenleri",
        content: `<p>Saldırılar şu kaynaklardan doğabilir:</p>
        <ul>
          <li>Siyasi, ekonomik veya psikolojik nedenler</li>
          <li>Kişisel anlaşmazlıklar</li>
          <li>Dini veya sosyal inançlar</li>
          <li>Terör örgütü faaliyetleri</li>
        </ul>`,
      },
      {
        heading: "Koruma Çeşitleri",
        content: `<ul>
          <li><strong>Özel koruma:</strong> Konut ve işyerinde</li>
          <li><strong>Yakın koruma:</strong> Dışarıda hareket ederken</li>
          <li><strong>Konut-işyeri koruma</strong></li>
          <li><strong>Tek mekân koruması</strong></li>
          <li><strong>Çağrı üzerine koruma</strong></li>
        </ul>`,
      },
      {
        heading: "Terörist Saldırı Safhaları",
        content: `<ol>
          <li>Hedef seçme</li>
          <li>Bilgi toplama</li>
          <li>Plan yapma</li>
          <li>Saldırı</li>
          <li>Kaçış</li>
        </ol>`,
      },
      {
        heading: "Koruma Çemberleri ve Prensipler",
        content: `<p><strong>3 katmanlı koruma:</strong></p>
        <ul>
          <li><strong>Dış çember:</strong> Keskin nişancılar</li>
          <li><strong>Orta çember:</strong> Savunma hattı</li>
          <li><strong>İç çember:</strong> Yakın koruma personeli</li>
        </ul>
        <p>Kaçış istikametleri önceden tespit edilmeli, koruma 24 saat sürekli olmalı ve korunan kişiyi engellememeli.</p>`,
      },
    ],
  },
  {
    id: "kalabalik-yonetimi",
    title: "Kalabalık Yönetimi",
    icon: "👥",
    color: "#10b981",
    glow: "rgba(16,185,129,0.2)",
    desc: "Kalabalık çeşitleri, güvenlik operasyonları ve toplu düzenler.",
    sections: [
      {
        heading: "Grup ve Kalabalık Farkı",
        content: `<p><strong>Grup:</strong> Uzun süreli ilişki, ortak amaçlar, belirli normlar ve karşılıklı roller gerektirir.</p>
        <p><strong>Kalabalık:</strong> Belirli alanda toplanır, aralarında iş bölümü yoktur, birbirlerini tanımazlar ve gelip geçici heyecan paylaşırlar.</p>`,
      },
      {
        heading: "Kalabalık Çeşitleri",
        content: `<ol>
          <li>İrade kalabalığı (tiyatro, spor etkinlikleri)</li>
          <li>Dinleyici kalabalıkları (konser, konferans)</li>
          <li>Dini hizmetlere yönelik kalabalıklar</li>
          <li>Önceden planlanmış toplantılar</li>
          <li>Kızgın kalabalıklar (isyan eden, zarar veren)</li>
        </ol>`,
      },
      {
        heading: "Güvenlik Operasyonları — Toplu Düzenler",
        content: `<ul>
          <li><strong>Hat Düzeni:</strong> Yol kapatma ve kişi koruma amaçlı.</li>
          <li><strong>Çember Düzeni:</strong> 360 derecelik koruma sağlar.</li>
          <li><strong>Kama Düzeni:</strong> Kalabalığı bölme ve dağıtma işlemi.</li>
        </ul>`,
      },
      {
        heading: "Göz Yaşartıcı Gazlar",
        content: `<p><strong>Yayılma yöntemleri:</strong> Yanma, patlama, aerosol ve sisleme.</p>
        <p><strong>Fizyolojik etkiler:</strong> Göz yaşarması, yanma, nefes darlığı, mide bulantısı — etkiler 10–20 dakika içinde geçer.</p>`,
      },
    ],
  },
  {
    id: "yangin-guvenligi",
    title: "Yangın Güvenliği",
    icon: "🔥",
    color: "#f97316",
    glow: "rgba(249,115,22,0.2)",
    desc: "Yangın sınıfları, söndürücü maddeler ve doğal afetlerde müdahale.",
    sections: [
      {
        heading: "Yanma Çeşitleri",
        content: `<ul>
          <li><strong>Yavaş yanma:</strong> Demirin paslanması gibi alev olmaksızın</li>
          <li><strong>Hızlı yanma:</strong> Alev ve ısı içeren yanma</li>
          <li><strong>Parlama/Patlama:</strong> Kolay ateş alan maddelerde</li>
          <li><strong>Kendiliğinden yanma:</strong> Oksitleme ısısından tutuşma</li>
        </ul>`,
      },
      {
        heading: "Yangın Safhaları",
        content: `<ol>
          <li><strong>Koku:</strong> İlk ve erken uyarı aşaması</li>
          <li><strong>Duman:</strong> İkinci aşama</li>
          <li><strong>Alev:</strong> Üçüncü ve en tehlikeli aşama</li>
        </ol>`,
      },
      {
        heading: "Yangın Sınıflandırması",
        content: `<ul>
          <li><strong>A Sınıfı:</strong> Katı maddeler (odun, kâğıt)</li>
          <li><strong>B Sınıfı:</strong> Sıvı yakıtlar (benzin, yağ)</li>
          <li><strong>C Sınıfı:</strong> Gazlar (LPG, doğalgaz)</li>
          <li><strong>D Sınıfı:</strong> Hafif metaller (magnezyum)</li>
        </ul>`,
      },
      {
        heading: "Söndürücü Maddeler",
        content: `<ul>
          <li><strong>Su:</strong> A sınıfı yangınlar</li>
          <li><strong>Karbondioksit (CO₂):</strong> Elektrik ve B sınıfı</li>
          <li><strong>Kuru kimyevi toz:</strong> A, B, C sınıfı</li>
          <li><strong>Köpük:</strong> B sınıfı sıvı yangınlar</li>
          <li><strong>Halojenli hidrokarbonlar:</strong> Hassas ekipman bölgeleri</li>
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
    desc: "Polis, jandarma, sahil güvenlik ve özel güvenliğin yetki sınırları.",
    sections: [
      {
        heading: "Kolluk Türleri",
        content: `<ul>
          <li><strong>Polis:</strong> Belediye sınırları içinde, Emniyet Genel Müdürlüğü bünyesinde.</li>
          <li><strong>Jandarma:</strong> Belediye dışı alanlarda görevli askeri güvenlik kuvveti.</li>
          <li><strong>Sahil Güvenlik:</strong> Deniz, liman ve karasularında görevli.</li>
          <li><strong>Yardımcı Kolluk:</strong> Asıl görevliler bulunmadığında görev yapan kişiler (bekçiler vb.).</li>
          <li><strong>Özel Kolluk:</strong> Sınırlı yetkili özel kuruluşlar (orman, gümrük, belediye).</li>
        </ul>`,
      },
      {
        heading: "Genel Kolluğun Yetkileri",
        content: `<p>Durdurma, kimlik sorma, arama, yakalama, zor kullanma, silah kullanma, el koyma ve adli görevler.</p>`,
      },
      {
        heading: "Özel Güvenliğin Yapabileceği İşlemler",
        content: `<ul>
          <li>Detektör ve X-ray araması</li>
          <li>Etkinliklerde kimlik sorma</li>
          <li>Suçüstü durumunda yakalama</li>
          <li>Afet durumlarında yardım</li>
          <li>Olay yerini koruma</li>
        </ul>`,
      },
      {
        heading: "Özel Güvenliğin Yapamayacağı İşlemler",
        content: `<p>Parmak izi alma, teknik takip, dinleme, özel hayata müdahale, soruşturma yapma, el ile üst arama, kimlik tespit, ifade alma ve tutuklama <strong>yapamaz</strong>.</p>`,
      },
    ],
  },
  {
    id: "uyusturucu-maddeler",
    title: "Uyuşturucu Maddeler",
    icon: "🚫",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.2)",
    desc: "Uyuşturucu çeşitleri, bağımlılık kavramları ve mücadele kurumları.",
    sections: [
      {
        heading: "Etki Türlerine Göre Sınıflandırma",
        content: `<ul>
          <li><strong>Yavaşlatıcılar:</strong> Afyon, morfin, eroin, kodein, sentetik trankilizanlar</li>
          <li><strong>Uyarıcılar:</strong> Kokain, crack, ecstasy, captagon</li>
          <li><strong>Halüsinojenler:</strong> Esrar, marihuana, LSD</li>
        </ul>`,
      },
      {
        heading: "Spesifik Maddeler",
        content: `<ul>
          <li><strong>Afyon:</strong> Haşhaştan elde edilir, morfin ve eroin türevleri içerir.</li>
          <li><strong>Esrar:</strong> Dişi Hint kenevirinden elde edilen, sinir sistemini yatıştıran madde.</li>
          <li><strong>Kokain:</strong> Koka bitkisinden elde edilen uyarıcı.</li>
          <li><strong>Amfetaminler:</strong> Sinir sistemini uyarır, doping amaçlı kullanılır.</li>
          <li><strong>LSD:</strong> Halüsinojen yarı sentetik uyuşturucu.</li>
          <li><strong>Uçucular:</strong> Tiner, gazyağı, çakmak gazı gibi inhalasyon maddeleri.</li>
        </ul>`,
      },
      {
        heading: "Temel Tanımlar",
        content: `<ul>
          <li><strong>Bağımlılık:</strong> Kişinin özdenetimini kaybetmesi ve maddeye karşı şiddetli istek duyması.</li>
          <li><strong>Tolerans:</strong> Aynı etkiyi almak için dozun artırılması gerekliliği.</li>
          <li><strong>Yoksunluk:</strong> Madde kullanılmadığında yaşanan fiziki ve psikolojik sorunlar.</li>
        </ul>`,
      },
      {
        heading: "Mücadele Kurumları",
        content: `<p>Türkiye'de dört ana kurum uyuşturucuyla mücadele eder:</p>
        <ul>
          <li>İçişleri Bakanlığı</li>
          <li>Sağlık Bakanlığı</li>
          <li>Tarım Bakanlığı</li>
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
    desc: "A-B-C değerlendirmesi, triage sistemi ve acil müdahale teknikleri.",
    sections: [
      {
        heading: "İlk Yardım Nedir?",
        content: `<p>Olay yerinde tıbbi araç-gereç aranmaksızın mevcut imkânlarla yapılan ilaçsız uygulamalardır.</p>
        <p><strong>Amaçları:</strong></p>
        <ul>
          <li>Hayati tehlikeyi ortadan kaldırma ve çevre güvenliği</li>
          <li>Yaşamsal fonksiyonların sürdürülmesi</li>
          <li>Hastanın durumunun kötüleşmesini engelleme</li>
          <li>İyileştirmeyi kolaylaştırma</li>
        </ul>`,
      },
      {
        heading: "A-B-C Değerlendirmesi",
        content: `<ul>
          <li><strong>A (Airway):</strong> Hava yolu açıklığının kontrolü</li>
          <li><strong>B (Breathing):</strong> Solunumun değerlendirilmesi</li>
          <li><strong>C (Circulation):</strong> Şah damarından nabız kontrolü</li>
        </ul>
        <p>Göğüs basısı hızı: <strong>100–120 bası/dakika</strong></p>`,
      },
      {
        heading: "Tıkanıklık Belirtileri",
        content: `<ul>
          <li><strong>Tam tıkanma:</strong> Nefes alamama, konuşamama, renk morarması</li>
          <li><strong>Kısmi tıkanma:</strong> Öksürme yeteneği korunur</li>
        </ul>`,
      },
      {
        heading: "Triage (Triyaj) Sistemi",
        content: `<ul>
          <li>🔴 <strong>Kırmızı:</strong> Acil — derhal müdahale</li>
          <li>🟡 <strong>Sarı:</strong> Geciktirilebilir müdahale</li>
          <li>🟢 <strong>Yeşil:</strong> Hafif yaralı</li>
          <li>⚫ <strong>Siyah:</strong> Yaşam belirtisi yok</li>
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
    desc: "Devriye hizmetleri, olay yeri koruma ve şüpheli paket prosedürleri.",
    sections: [
      {
        heading: "Devriye Hizmetleri",
        content: `<p>Sorumluluk bölgesinde güvenliği sağlamak amacıyla yapılan kontrol gezileridir. En az iki güvenlik görevlisinden oluşur.</p>
        <p><strong>Türleri:</strong> Yaya, araçlı ve kombine devriye.</p>
        <p>Gece devriyesinde en önemli unsur: <strong>sürekli temas ve düzensiz rota değişimi</strong>.</p>`,
      },
      {
        heading: "Kelepçe Kullanımı",
        content: `<p>Şüphelileri kontrol altında tutmak için kullanılan zor kullanma aracıdır.</p>
        <p><strong>Önemli kural:</strong> 18 yaşını doldurmamış çocuklara kelepçe takılamaz.</p>`,
      },
      {
        heading: "Olay Yeri Korunması",
        content: `<p>Olay yerinde yapılacak en basit bir hata dahi soruşturmanın seyrini etkileyerek yanlış sonuca ulaştırabilir.</p>
        <ul>
          <li>Delillere dokunulmaz</li>
          <li>Alan güvence altına alınır</li>
          <li>Yetkililere derhal haber verilir</li>
        </ul>`,
      },
      {
        heading: "Şüpheli Paket Prosedürü",
        content: `<ul>
          <li>Pakete <strong>kesinlikle dokunulmaz</strong></li>
          <li>100 metrelik emniyet hattı oluşturulur</li>
          <li>Bomba uzmanına ve polise haber verilir</li>
          <li>Bölge tahliye edilir</li>
        </ul>`,
      },
      {
        heading: "Silah ile Girilemeyecek Yerler",
        content: `<ul>
          <li>Duruşmalar ve mahkeme salonları</li>
          <li>Ceza ve tutukevleri</li>
          <li>Her türlü spor karşılaşmaları</li>
          <li>Eğitim kurumları</li>
        </ul>`,
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
            Sınava hazırlık için ihtiyacınız olan tüm ders notları. 10 konu, kapsamlı içerik, ücretsiz erişim.
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
            {/* Geri butonu */}
            <button
              onClick={() => { setActiveNote(null); setOpenSections({}); }}
              style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "rgba(255,255,255,.6)", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: ".75rem", padding: ".5rem 1.25rem", cursor: "pointer", fontSize: ".85rem", marginBottom: "2rem" }}
            >
              ← Tüm Dersler
            </button>

            {/* Başlık */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem", padding: "1.75rem", borderRadius: "1.25rem", background: "linear-gradient(160deg,rgba(5,14,77,.7) 0%,rgba(2,6,38,.9) 100%)", border: `1px solid ${activeData.color}44` }}>
              <div style={{ width: 64, height: 64, borderRadius: "1rem", background: `${activeData.color}22`, border: `1px solid ${activeData.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem", flexShrink: 0 }}>
                {activeData.icon}
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(1.25rem,3vw,1.75rem)", color: "#fff", marginBottom: ".35rem" }}>{activeData.title}</h2>
                <p style={{ color: "rgba(255,255,255,.5)", fontSize: ".85rem" }}>{activeData.desc}</p>
              </div>
            </div>

            {/* Accordion Bölümler */}
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

            {/* CTA */}
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

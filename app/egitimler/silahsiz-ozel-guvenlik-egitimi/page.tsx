import { SEO_BASE, buildCourseSchema, buildBreadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { WA_URL, SITE } from "@/lib/config";
import { waUrl, CONTACT } from "@/lib/contact";
import { CTA } from "@/lib/content";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import WaIcon from "@/components/ui/WaIcon";

export const metadata: Metadata = {
  title: "Silahsız Özel Güvenlik Eğitimi Adana | EGG Güvenlik",
  description: "Adana'da silahsız özel güvenlik eğitimi. 90 saatlik İçişleri Bakanlığı onaylı program. AVM, site, hastane güvenlik kariyeri için ideal başlangıç. 0546 267 89 79.",
  keywords: ["silahsız özel güvenlik eğitimi","silahsız özel güvenlik kursu","Adana silahsız güvenlik kursu","silahsız güvenlik belgesi"],
  alternates: { canonical: `${SEO_BASE.siteUrl}/egitimler/silahsiz-ozel-guvenlik-egitimi` },
  openGraph: { title: "Silahsız Özel Güvenlik Eğitimi Adana", description: "90 saatlik devlet onaylı silahsız güvenlik eğitimi. Geniş iş imkânları.", url: `${SEO_BASE.siteUrl}/egitimler/silahsiz-ozel-guvenlik-egitimi`, locale: "tr_TR", type: "website" },
};

const EGITIM_ITEMS = [
  ["🛡️", "Güvenlik Prosedürleri", "Devriye, kimlik denetimi, arama ve kontrol prosedürleri ile standart raporlama teknikleri."],
  ["⚖️", "Hukuki Mevzuat", "Özel güvenlik kanunu, güvenlik görevlisinin yasal yetki sınırları ve cezai sorumluluklar."],
  ["🗣️", "İletişim ve İnsan Yönetimi", "Halkla ilişkiler, şüpheli kişi yönetimi ve zor durumlarda doğru iletişim teknikleri."],
  ["🚨", "Acil Durum Prosedürleri", "Yangın, tıbbi acil ve kalabalık yönetimi senaryolarında doğru müdahale adımları."],
  ["💊", "İlk Yardım Uygulamaları", "Temel ilk yardım, CPR ve acil servise köprü kurma prosedürleri."],
  ["📋", "Raporlama Standartları", "Olay raporu düzenleme, günlük tutma ve kurumsal iletişim protokolleri."]
];
const STEPS = [
  ["1", "💬", "WhatsApp'tan Bilgi Alın", "Hattımıza yazın; danışmanımız eğitim dönemi, kontenjan ve ücret bilgisini paylaşır."],
  ["2", "📄", "Evraklarınızı Hazırlayın", "5 belgeyi eksiksiz hazırlayıp kurumumuza teslim edin."],
  ["3", "✅", "Kayıt ve Ödeme", "Kayıt işlemini tamamlayın, ödeme seçeneğinizi belirleyin."],
  ["4", "📖", "90 Saatlik Eğitim", "Teorik ve uygulamalı dersleri tamamlayın."],
  ["5", "🎯", "Bakanlık Sınavı", "Sınava girin. EGG sınav takvimini takip edip sizi bilgilendirir."],
  ["6", "🏅", "Belgenizi Alın", "Silahsız özel güvenlik kimliğinizi alın, iş başvurularına başlayın."]
];
const FAQ = [
  ["Silahsız belgeyle hangi alanlarda çalışabilirim?", "AVM, site, rezidans, hastane, okul, üniversite, fabrika, etkinlik alanları ve daha pek çok sektörde çalışabilirsiniz. Türkiye genelinde yüzlerce pozisyon sizi bekler."],
  ["İlk kez güvenlik sektörüne giriyorum, bu program bana uygun mu?", "Evet. Silahsız eğitim özellikle sektöre ilk adımını atacaklar için tasarlanmıştır. Sıfır deneyimle başlayan adaylar rahatlıkla katılabilir."],
  ["Silahsız belgeden silahlı belgeye geçiş yapabilir miyim?", "Evet. Silahsız belge aldıktan sonra tamamlayıcı silahlı eğitim programına katılarak silahlı belge edinebilirsiniz. Detaylar için danışmanımıza ulaşın."],
  ["Kadınlar da bu eğitime katılabilir mi?", "Evet. Kadın adaylar silahsız özel güvenlik eğitimine katılabilir. Özellikle AVM, hastane ve kurumsal güvenlik alanlarında kadın personele yönelik yüksek talep mevcuttur."],
  ["Eğitim ne zaman başlar?", "Kontenjan müsaitliğine göre genellikle başvurudan 1–2 hafta sonra. Güncel takvim için WhatsApp'tan danışmanımıza yazabilirsiniz."]
];
const EVRAKLAR = [
  ["01", "TC Kimlik Fotokopisi", "Geçerli TC kimlik kartı ön–arka fotokopisi", false],
  ["02", "Diploma Fotokopisi", "En az ilkokul mezuniyetini kanıtlayan belge fotokopisi", false],
  ["03", "Sağlık Raporu", "Herhangi bir resmi sağlık kuruluşundan alınan güncel sağlık raporu", false],
  ["04", "Biyometrik Fotoğraf", "Son 6 ay içinde çekilmiş 4 adet vesikalık", false],
  ["05", "Adli Sicil Belgesi", "E-devlet veya PTT'den alınan güncel sabıka kaydı belgesi", false]
];
const BASVURU = ["18 yaşını doldurmuş Türk vatandaşları", "En az ilkokul mezunları", "Güvenlik soruşturması ve adli sicil kaydı temiz olanlar", "Genel sağlık durumu güvenlik görevine uygun olanlar", "Sektöre ilk kez girecek adaylar dahil herkese açık program"];
const STATS = [
  ["90", "Toplam Saat"],
  ["%94", "Başarı Oranı"],
  ["1,5", "Ay Süreç"],
  ["✓", "Devlet Onaylı"]
];

export default function Page() {
  const courseSchema = buildCourseSchema({
    name: "Silahsız Özel Güvenlik Eğitimi",
    description: "Adana'da silahsız özel güvenlik eğitimi. 90 saatlik İçişleri Bakanlığı onaylı program.",
    duration: "PT90H",
    url: "/egitimler/silahsiz-ozel-guvenlik-egitimi",
  });
  const breadcrumbSchema = buildBreadcrumbSchema([{"name": "Ana Sayfa", "url": "/"}, {"name": "Eğitimler", "url": "/egitimler"}, {"name": "Silahsız Özel Güvenlik", "url": "/egitimler/silahsiz-ozel-guvenlik-egitimi"}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <PageHero
        title="Silahsız Özel Güvenlik Eğitimi"
        sub="Adana'da güvenlik sektörüne profesyonel bir başlangıç yapmak isteyen adaylar için İçişleri Bakanlığı onaylı 90 saatlik temel özel güvenlik eğitim programı."
        badge="90 Saatlik Hızlı Program"
        breadcrumbs={[{ label:"Eğitimler", href:"/egitimler" }, { label:"Silahsız Özel Güvenlik" }]}
      >
        <div style={{ display:"flex", flexWrap:"wrap", gap:".875rem" }}>
          <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm">
            <WaIcon size={16}/> {CTA.wa}
          </a>
          <Link href="/kayit-sureci" className="btn btn-secondary btn-sm">Kayıt Sürecini Gör →</Link>
        </div>
      </PageHero>

      {/* SEO Intro + Kimler Başvurabilir */}
      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div className="two-col">
            <div>
              <p className="s-label">📖 Program Hakkında</p>
              <h2 className="s-title">Silahsız Özel Güvenlik Eğitimi<br/><span className="text-gold">Nedir?</span></h2>
              <p style={{ color:"rgba(255,255,255,.65)", fontSize:".95rem", lineHeight:1.8, margin:"1rem 0 .875rem" }}>
                Silahsız özel güvenlik eğitimi, Türkiye'deki güvenlik pozisyonlarının büyük çoğunluğuna doğrudan erişim sağlayan, 90 saatlik İçişleri Bakanlığı onaylı temel güvenlik programıdır. Ateşli silah içermez; bunun yerine güvenlik prosedürleri, mevzuat ve insan yönetimi ön plana çıkar.
              </p>
              <p style={{ color:"rgba(255,255,255,.55)", fontSize:".9rem", lineHeight:1.75, marginBottom:"1.25rem" }}>
                Adana silahsız özel güvenlik kursu olarak yürüttüğümüz programımız; AVM, site, rezidans, hastane, eğitim kurumu ve etkinlik alanları gibi geniş bir çalışma havuzuna kapı açar. Daha kısa süreç ve daha az bürokratik yük, bu programı ilk kez güvenlik sektörüne girecekler için ideal seçenek haline getirir.
              </p>
              <div className="highlight">
                <p>💡 Silahsız belge, iş piyasasındaki en yaygın güvenlik pozisyonlarına kapı açar. Türkiye genelindeki güvenlik personeli taleplerinin büyük çoğunluğu silahsız belgeyle karşılanmaktadır.</p>
              </div>
              <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:700, color:"#fbbf24", margin:"1.5rem 0 .875rem" }}>Kimler Silahsız Özel Güvenlik Olabilir?</h3>
              <ul className="check-list">
                {BASVURU.map((b)=><li key={b}>{b}</li>)}
              </ul>
              <div className="highlight" style={{ marginTop:"1rem" }}>
                <p>{"💡 Silahsız eğitim için gereken sağlık raporu standart bir belgedir; herhangi bir resmi sağlık kuruluşundan alınabilir. Silahlı eğitime kıyasla çok daha pratik bir süreçtir."}</p>
              </div>
            </div>
            <div>
              <div className="card" style={{ borderColor:"rgba(59,130,246,.25)", marginBottom:"1rem" }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:".75rem", marginBottom:"1rem" }}>
                  {STATS.map(([v,l])=>(
                    <div key={l} style={{ textAlign:"center", padding:".75rem", borderRadius:".875rem", background:"rgba(59,130,246,.07)" }}>
                      <div style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"1.75rem", color:"#93c5fd" }}>{v}</div>
                      <div style={{ fontSize:".72rem", color:"rgba(255,255,255,.45)", marginTop:".25rem" }}>{l}</div>
                    </div>
                  ))}
                </div>
                <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-full btn-sm">
                  <WaIcon size={15}/> {CTA.price}
                </a>
              </div>
              <div className="card">
                <h3 style={{ fontSize:".9rem", marginBottom:".75rem" }}>🔗 Hızlı Bağlantılar</h3>
                <Link href="/kayit-sureci" style={{ display:"block", color:"#fbbf24", fontSize:".88rem", padding:".25rem 0", borderBottom:"1px solid rgba(255,255,255,.06)" }}>→ Kayıt Sürecini Gör</Link>
                <Link href="/kariyer-firsatlari" style={{ display:"block", color:"#fbbf24", fontSize:".88rem", padding:".25rem 0", borderBottom:"1px solid rgba(255,255,255,.06)" }}>→ Kariyer Fırsatları</Link>
                <Link href="/sss" style={{ display:"block", color:"#fbbf24", fontSize:".88rem", padding:".25rem 0" }}>→ Sık Sorulan Sorular</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim İçeriği */}
      <section className="section section-alt">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div style={{ textAlign:"center", marginBottom:"2.5rem" }}>
            <p className="s-label" style={{ justifyContent:"center" }}>📚 Eğitim İçeriği</p>
            <h2 className="s-title">90 Saatlik Eğitim Kapsamında Neler Öğrenilir?</h2>
          </div>
          <div className="grid-1 grid-3" style={{ gap:"1rem" }}>
            {EGITIM_ITEMS.map(([ic,t,d])=>(
              <div key={t} className="card" style={{ padding:"1.25rem" }}>
                <div style={{ fontSize:"1.5rem", marginBottom:".6rem" }}>{ic}</div>
                <h3 style={{ fontSize:".875rem", marginBottom:".35rem" }}>{t}</h3>
                <p style={{ fontSize:".8rem", lineHeight:1.65 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evrak Listesi */}
      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <p className="s-label">📄 Gerekli Belgeler</p>
          <h2 className="s-title" style={{ marginBottom:"1.5rem" }}>Kayıt İçin <span className="text-gold">Gereken Evraklar</span></h2>
          <div className="ev-wrap" style={{ maxWidth:600 }}>
            <div className="ev-header" style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <span className="tag" style={{ background:"rgba(59,130,246,.12)", border:"1px solid rgba(59,130,246,.25)", color:"#93c5fd" }}>
                🛡️ Silahsız Özel Güvenlik
              </span>
              <span style={{ fontSize:".78rem", color:"rgba(255,255,255,.4)" }}>{EVRAKLAR.length} Belge Gerekli</span>
            </div>
            <div className="ev-body">
              <ul className="ev-items">
                {EVRAKLAR.map(([n,t,d,gold], idx)=>(
                  <li key={idx}>
                    <div className="ev-num" style={{ ...(gold===true||gold==="true"?{background:"rgba(251,191,36,.18)",border:"1px solid rgba(251,191,36,.4)"}:{}) }}>{n}</div>
                    <div>
                      <strong>{t}</strong>
                      <span style={{ color:(gold===true||gold==="true")?"rgba(251,191,36,.8)":"rgba(255,255,255,.45)" }}>{d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding:"0 1.5rem 1.5rem" }}>
              <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-full btn-sm">
                <WaIcon size={15}/> {CTA.docs}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="section section-alt">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div style={{ textAlign:"center", marginBottom:"2rem" }}>
            <p className="s-label" style={{ justifyContent:"center" }}>🗺️ Süreç</p>
            <h2 className="s-title">Adım Adım <span className="text-gold">Ne Yapmalısınız?</span></h2>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:"1rem", maxWidth:680, margin:"0 auto" }}>
            {STEPS.map(([n,ic,t,d])=>(
              <div key={n} className="step">
                <div className="step-num">{n}</div>
                <div>
                  <div style={{ fontSize:"1.15rem", marginBottom:".3rem" }}>{ic}</div>
                  <h3>{t}</h3><p>{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:"2rem" }}>
            <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm">
              <WaIcon size={15}/> {CTA.date}
            </a>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <p className="s-label">❓ Sık Sorulan Sorular</p>
          <h2 className="s-title" style={{ marginBottom:"1.5rem" }}>Merak <span className="text-gold">Edilenler</span></h2>
          <div style={{ display:"flex", flexDirection:"column", gap:".75rem", maxWidth:760 }}>
            {FAQ.map(([q,a])=>(
              <details key={q} className="faq-item">
                <summary>{q}<span className="faq-toggle">+</span></summary>
                <div className="faq-content"><p>{a}</p></div>
              </details>
            ))}
          </div>
          <div className="highlight" style={{ marginTop:"1.5rem", maxWidth:640 }}>
            <p>💡 Aklınızdaki soruları <strong style={{ color:"#fbbf24" }}>danışmanımıza</strong> iletmekten çekinmeyin. WhatsApp hattımız 7/24 aktiftir.</p>
          </div>
        </div>
      </section>

      <CTASection title="Silahsız Güvenlik Kariyerinizi Bugün Başlatın" sub="Adana'da silahsız özel güvenlik kursu için danışmanımızla görüşün. Kayıt şartları, eğitim dönemi ve kontenjan bilgisi için WhatsApp hattımız aktiftir."/>
    </>
  );
}

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
  title: "Silahlı Özel Güvenlik Eğitimi Adana | EGG Güvenlik",
  description: "Adana'da silahlı özel güvenlik eğitimi. 120 saatlik İçişleri Bakanlığı onaylı program, ateşli silah tatbikatı dahil. Devlet onaylı sertifika. 0546 267 89 79.",
  keywords: ["silahlı özel güvenlik eğitimi","silahlı özel güvenlik kursu","Adana silahlı güvenlik kursu","silahlı güvenlik belgesi"],
  alternates: { canonical: `${SEO_BASE.siteUrl}/egitimler/silahli-ozel-guvenlik-egitimi` },
  openGraph: { title: "Silahlı Özel Güvenlik Eğitimi Adana", description: "120 saatlik devlet onaylı silahlı güvenlik eğitimi. Ateşli silah tatbikatı dahil.", url: `${SEO_BASE.siteUrl}/egitimler/silahli-ozel-guvenlik-egitimi`, locale: "tr_TR", type: "website" },
};

const EGITIM_ITEMS = [
  ["🎯", "Atış Eğitimi ve Silah Bilgisi", "Ateşli silah türleri, bakımı, güvenli taşıma ve muhafaza yöntemleri. Yetkili poligon alanında gerçekleştirilen atış tatbikatları."],
  ["⚖️", "Hukuki Mevzuat", "5188 sayılı Kanun, meşru müdafaa sınırları, cezai sorumluluklar ve güvenlik görevlisinin yasal yetki sınırları."],
  ["🛡️", "Güvenlik Prosedürleri", "Devriye, kimlik denetimi, kontrol noktası kurma, şüpheli durum yönetimi ve standart raporlama."],
  ["🚨", "Acil Durum Yönetimi", "Yangın, saldırı, toplu olay ve tahliye senaryolarında doğru müdahale teknikleri."],
  ["💊", "İlk Yardım", "Temel ilk yardım, CPR, yaralı taşıma ve acil servise köprü kurma prosedürleri."],
  ["📡", "İletişim ve Raporlama", "Telsiz kullanımı, olay raporu düzenleme ve kurumsal iletişim standartları."]
];
const STEPS = [
  ["1", "💬", "WhatsApp'tan Bilgi Alın", "Hattımıza yazın; danışmanımız eğitim dönemi, kontenjan ve ücret bilgisini paylaşır."],
  ["2", "📄", "Evraklarınızı Hazırlayın", "Danışmanınızın gönderdiği listeye göre 5 belgeyi eksiksiz hazırlayın."],
  ["3", "💳", "Kayıt ve Ödeme", "Kayıt işlemini tamamlayın. Ödeme seçenekleri danışmanınız tarafından aktarılır."],
  ["4", "🏫", "120 Saatlik Eğitim", "Teorik dersler, uygulamalı tatbikatlar ve poligon eğitimini tamamlayın."],
  ["5", "📝", "Bakanlık Sınavı", "EGG'nin takip ettiği takvimle sınava girin. Sınav hazırlığında da destek alırsınız."],
  ["6", "🏅", "Silahlı Belgenizi Alın", "Sınavı başarıyla geçtikten sonra devlet onaylı silahlı güvenlik kimliğiniz teslim alınır."]
];
const FAQ = [
  ["Silahlı eğitim öncesinde silah deneyimine ihtiyaç var mı?", "Hayır. Sıfır deneyimle başlayan adaylar için kapsamlı silah eğitimi programa dahildir. Eğitimin amacı sizi sıfırdan hazırlamaktır."],
  ["Sağlık kurulu raporunu nereden almalıyım?", "Tam teşekküllü bir devlet hastanesinden alınması zorunludur. Özel hastane raporu geçerli değildir. Danışmanınız size en yakın uygun hastaneyi bildirabilir."],
  ["Silahlı belge ile silahsız arasındaki temel fark nedir?", "Silahlı belge ateşli silah taşıma yetkisi verir ve daha geniş iş alanı sunar. Eğitim süresi 120 saat, silahsız eğitim ise 90 saattir."],
  ["Sınavda başarısız olursam ne olur?", "Bir sonraki sınav döneminde tekrar sınava girebilirsiniz. EGG, başarısız öğrencilerine ek hazırlık desteği sağlar."],
  ["Silahlı belge aldıktan sonra hangi alanlarda çalışabilirim?", "Fabrika, banka, havalimanı, VIP koruma ve tüm silahsız pozisyonlar dahil Türkiye genelinde geniş bir istihdam alanı sizi bekler."]
];
const EVRAKLAR = [
  ["01", "TC Kimlik Fotokopisi", "Geçerli TC kimlik kartı ön–arka fotokopisi", false],
  ["02", "Diploma Fotokopisi", "En az ilkokul mezuniyetini kanıtlayan belge fotokopisi", false],
  ["03", "Sağlık Kurulu Raporu", "Tam teşekküllü devlet hastanesinden 'silah taşımaya engel yoktur' ibareli rapor", true],
  ["04", "Biyometrik Fotoğraf", "Son 6 ay içinde çekilmiş 4 adet vesikalık", false],
  ["05", "Adli Sicil Belgesi", "E-devlet veya PTT'den alınan güncel sabıka kaydı belgesi", false]
];
const BASVURU = ["18 yaşını doldurmuş Türk vatandaşları", "En az ilkokul mezunları", "Güvenlik soruşturması ve adli sicil kaydı temiz olanlar", "Tam teşekküllü devlet hastanesinden sağlık kurulu raporu alanlar", "Silah taşımaya engel psikolojik veya fiziksel rahatsızlığı bulunmayanlar"];
const STATS = [
  ["120", "Toplam Saat"],
  ["%94", "Başarı Oranı"],
  ["2–3", "Ay Süreç"],
  ["✓", "Devlet Onaylı"]
];

export default function Page() {
  const courseSchema = buildCourseSchema({
    name: "Silahlı Özel Güvenlik Eğitimi",
    description: "Adana'da silahlı özel güvenlik eğitimi. 120 saatlik İçişleri Bakanlığı onaylı program, ateşli silah tatbikatı dahil.",
    duration: "PT120H",
    url: "/egitimler/silahli-ozel-guvenlik-egitimi",
  });
  const breadcrumbSchema = buildBreadcrumbSchema([{"name": "Ana Sayfa", "url": "/"}, {"name": "Eğitimler", "url": "/egitimler"}, {"name": "Silahlı Özel Güvenlik", "url": "/egitimler/silahli-ozel-guvenlik-egitimi"}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <PageHero
        title="Silahlı Özel Güvenlik Eğitimi"
        sub="Adana'da silahlı özel güvenlik görevlisi olmak isteyen adaylar için İçişleri Bakanlığı onaylı, 120 saatlik kapsamlı eğitim programı. Ateşli silah tatbikatı dahil."
        badge="120 Saatlik Kapsamlı Program"
        breadcrumbs={[{ label:"Eğitimler", href:"/egitimler" }, { label:"Silahlı Özel Güvenlik" }]}
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
              <h2 className="s-title">Silahlı Özel Güvenlik Eğitimi<br/><span className="text-gold">Nedir?</span></h2>
              <p style={{ color:"rgba(255,255,255,.65)", fontSize:".95rem", lineHeight:1.8, margin:"1rem 0 .875rem" }}>
                Silahlı özel güvenlik eğitimi, ateşli silah taşıma yetkisi veren devlet onaylı bir belge kazandırır. Program; ateşli silah bilgisi, atış tatbikatı, güvenlik mevzuatı ve acil durum müdahalesini kapsayan 120 saatlik teorik ve uygulamalı eğitimden oluşmaktadır.
              </p>
              <p style={{ color:"rgba(255,255,255,.55)", fontSize:".9rem", lineHeight:1.75, marginBottom:"1.25rem" }}>
                Adana özel güvenlik kursu olarak yürüttüğümüz silahlı eğitim programımız, İçişleri Bakanlığı tarafından denetlenen standartlara uygundur. Mezunlarımızın büyük çoğunluğu sınavı ilk denemede başarıyla geçmekte ve kısa sürede istihdam edilmektedir.
              </p>
              <div className="highlight">
                <p>💡 Silahlı belge, silahsız belgeye kıyasla daha geniş çalışma alanı ve genellikle daha yüksek ücret imkânı sunar. Özellikle fabrika, banka, havalimanı ve VIP koruma pozisyonlarında bu belge zorunlu ya da güçlü biçimde tercih edilen belgedir.</p>
              </div>
              <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:700, color:"#fbbf24", margin:"1.5rem 0 .875rem" }}>Kimler Silahlı Özel Güvenlik Olabilir?</h3>
              <ul className="check-list">
                {BASVURU.map((b)=><li key={b}>{b}</li>)}
              </ul>
              <div className="highlight" style={{ marginTop:"1rem" }}>
                <p>{"⚠ Silahlı eğitim için gerekli sağlık kurulu raporu, herhangi bir sağlık kuruluşundan değil, tam teşekküllü devlet hastanesinden alınmalıdır. Özel hastane raporu kabul edilmez."}</p>
              </div>
            </div>
            <div>
              <div className="card" style={{ borderColor:"rgba(251,191,36,.25)", marginBottom:"1rem" }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:".75rem", marginBottom:"1rem" }}>
                  {STATS.map(([v,l])=>(
                    <div key={l} style={{ textAlign:"center", padding:".75rem", borderRadius:".875rem", background:"rgba(251,191,36,.07)" }}>
                      <div style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"1.75rem", color:"#fbbf24" }}>{v}</div>
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
            <h2 className="s-title">120 Saatlik Eğitim Kapsamında Neler Öğrenilir?</h2>
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
              <span className="tag" style={{ background:"rgba(251,191,36,.12)", border:"1px solid rgba(251,191,36,.25)", color:"#fbbf24" }}>
                🔫 Silahlı Özel Güvenlik
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

      <CTASection title="Silahlı Güvenlik Kariyerine Adım Atmaya Hazır mısınız?" sub="Adana'da silahlı özel güvenlik kursu için danışmanımızla görüşün. Eğitim dönemi, kontenjan ve kayıt şartları hakkında ücretsiz bilgi alın."/>
    </>
  );
}

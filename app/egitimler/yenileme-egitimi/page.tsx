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
  title: "Özel Güvenlik Yenileme Eğitimi Adana | EGG Güvenlik",
  description: "Adana'da özel güvenlik kimlik yenileme eğitimi. 40 saatlik devlet onaylı program. Silahlı ve silahsız belge yenileme. Bitiş tarihinden önce başvurun.",
  keywords: ["özel güvenlik yenileme eğitimi","güvenlik kimlik yenileme","Adana güvenlik yenileme","özel güvenlik yenileme kursu"],
  alternates: { canonical: `${SEO_BASE.siteUrl}/egitimler/yenileme-egitimi` },
  openGraph: { title: "Özel Güvenlik Yenileme Eğitimi Adana", description: "40 saatlik devlet onaylı yenileme eğitimi. 5 yılda bir zorunlu.", url: `${SEO_BASE.siteUrl}/egitimler/yenileme-egitimi`, locale: "tr_TR", type: "website" },
};

const EGITIM_ITEMS = [
  ["📜", "Güncel Mevzuat Değişiklikleri", "Son 5 yılda özel güvenlik mevzuatında yapılan yasal değişiklikler ve yeni uygulamalar."],
  ["🎯", "Atış Tazeleme", "Silahlı belge sahipleri için poligon eğitimi ve silah becerilerinin güncellenmesi."],
  ["📊", "Vaka Analizi", "Türkiye genelinden gerçek olay analizleri ve öğrenilen dersler."],
  ["⚖️", "Hukuki Güncellemeler", "Değişen yasal düzenlemeler, yeni içtihatlar ve sorumluluk sınırları."],
  ["💊", "İlk Yardım Güncellemesi", "Revize edilen ilk yardım protokollerinin tazelenmesi ve pratik uygulamalar."],
  ["📋", "Prosedür Revizyonu", "Güncellenmiş güvenlik prosedürleri, raporlama standartları ve protokoller."]
];
const STEPS = [
  ["1", "📞", "Danışmanınızı Arayın", "Kimlik bitiş tarihinizi bildirin. Uygun dönem planlamasını birlikte yapın."],
  ["2", "📄", "Evraklarınızı Hazırlayın", "4 belgeyi eksiksiz hazırlayıp kurumumuza teslim edin."],
  ["3", "📖", "40 Saatlik Yenileme Eğitimi", "Güncel mevzuat, vaka analizi ve atış tazeleme (silahlı için) eğitimini tamamlayın."],
  ["4", "🎯", "Yenileme Sınavı", "İçişleri Bakanlığı'nın belirlediği yenileme sınavına katılın."],
  ["5", "🆔", "Yeni Kimliğinizi Teslim Alın", "5 yıl daha geçerli olan yeni özel güvenlik kimliğinizi alın."]
];
const FAQ = [
  ["Kimliğim süresi dolduktan sonra ne kadar süre çalışabilirim?", "Süresi dolan güvenlik kimliğiyle aktif çalışmak yasal değildir. Yenileme eğitimini ve sınavını tamamlayana kadar göreve devam edilmemelidir."],
  ["Yenileme için en geç ne zaman başvurmalıyım?", "Kimlik bitiş tarihinden en az 3 ay önce başvurmanızı tavsiye ediyoruz. Olası gecikmeler için tampon süre bırakmak önemlidir."],
  ["Yenileme eğitimi silahlı ve silahsız için aynı mı?", "Program içeriği büyük ölçüde benzerdir. Ancak silahlı belge sahipleri poligon atış tatbikatına da katılmaktadır."],
  ["Eski belge sahipleri de yenileme yapabilir mi?", "Kimliğin süresi dolmuş olsa bile yenileme eğitimine katılmak mümkündür. Güncel koşullar için danışmanımıza ulaşmanızı öneririz."]
];
const EVRAKLAR = [
  ["01", "Mevcut Güvenlik Kimlik Kartı", "Yenilenecek kimliğin fotokopisi", false],
  ["02", "TC Kimlik Fotokopisi", "Geçerli TC kimlik kartı ön–arka fotokopisi", false],
  ["03", "Biyometrik Fotoğraf", "Son 6 ay içinde çekilmiş 2 adet vesikalık", false],
  ["04", "Başvuru Formu", "Danışman tarafından sağlanan resmi başvuru formu", false]
];
const BASVURU = ["Silahlı özel güvenlik kimliğinin süresi 5 yıl dolmak üzere olan görevliler", "Silahsız özel güvenlik kimliğinin süresi dolmak üzere olan görevliler", "Kimliğinin süresi çoktan dolmuş ve aktif göreve dönmek isteyen eski güvenlik personeli", "Belgesi yakında dolacak konumundaki tüm özel güvenlik personeli"];
const STATS = [
  ["40", "Toplam Saat"],
  ["5 Yıl", "Yenileme Periyodu"],
  ["1–1,5", "Ay Süreç"],
  ["✓", "Zorunlu"]
];

export default function Page() {
  const courseSchema = buildCourseSchema({
    name: "Özel Güvenlik Yenileme Eğitimi",
    description: "Adana'da özel güvenlik kimlik yenileme eğitimi. 40 saatlik devlet onaylı program.",
    duration: "PT40H",
    url: "/egitimler/yenileme-egitimi",
  });
  const breadcrumbSchema = buildBreadcrumbSchema([{"name": "Ana Sayfa", "url": "/"}, {"name": "Eğitimler", "url": "/egitimler"}, {"name": "Yenileme Eğitimi", "url": "/egitimler/yenileme-egitimi"}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <PageHero
        title="Özel Güvenlik Yenileme Eğitimi"
        sub="Özel güvenlik kimliğinin 5 yıllık geçerlilik süresi dolmak üzere olan görevliler için güncel mevzuata uygun, hızlı ve eksiksiz yenileme eğitimi."
        badge="40 Saatlik Hızlı Yenileme"
        breadcrumbs={[{ label:"Eğitimler", href:"/egitimler" }, { label:"Yenileme Eğitimi" }]}
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
              <h2 className="s-title">Özel Güvenlik Yenileme Eğitimi<br/><span className="text-gold">Nedir?</span></h2>
              <p style={{ color:"rgba(255,255,255,.65)", fontSize:".95rem", lineHeight:1.8, margin:"1rem 0 .875rem" }}>
                Özel güvenlik yenileme eğitimi, 5 yıllık geçerlilik süresini dolduran güvenlik kimliklerinin yasal olarak yenilenmesi için zorunlu tutulan 40 saatlik devlet onaylı bir programdır. Bu eğitim alınmadan güvenlik kimliği geçersiz sayılır ve aktif görev yapmak yasal değildir.
              </p>
              <p style={{ color:"rgba(255,255,255,.55)", fontSize:".9rem", lineHeight:1.75, marginBottom:"1.25rem" }}>
                Adana özel güvenlik yenileme eğitimi olarak yürüttüğümüz programımız; güncel mevzuat bilgisi, vaka analizleri ve silahlı belge sahipleri için atış tatbikatı tazelemesini kapsamaktadır. Kimlik bitiş tarihinden en az 3 ay önce başvurmanızı öneriyoruz.
              </p>
              <div className="highlight">
                <p>💡 Kimlik süresi dolmadan yenileme işleminin tamamlanması yasal bir zorunluluktur. Süresi dolmuş güvenlik kimliğiyle aktif görev yapmak idari ve hukuki yaptırımlara yol açabilir.</p>
              </div>
              <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:700, color:"#fbbf24", margin:"1.5rem 0 .875rem" }}>Kimler Yenileme Eğitimi Almalıdır?</h3>
              <ul className="check-list">
                {BASVURU.map((b)=><li key={b}>{b}</li>)}
              </ul>
              <div className="highlight" style={{ marginTop:"1rem" }}>
                <p>{"⏰ Bitiş tarihine en az 3 ay kala başvuru yapmanızı öneririz. Son güne bırakılan başvurularda yaşanan gecikmeler yasal sorunlara yol açabilir."}</p>
              </div>
            </div>
            <div>
              <div className="card" style={{ borderColor:"rgba(107,114,128,.25)", marginBottom:"1rem" }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:".75rem", marginBottom:"1rem" }}>
                  {STATS.map(([v,l])=>(
                    <div key={l} style={{ textAlign:"center", padding:".75rem", borderRadius:".875rem", background:"rgba(107,114,128,.1)" }}>
                      <div style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"1.75rem", color:"#d1d5db" }}>{v}</div>
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
            <h2 className="s-title">40 Saatlik Yenileme Eğitiminde Neler Ele Alınır?</h2>
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
              <span className="tag" style={{ background:"rgba(107,114,128,.12)", border:"1px solid rgba(107,114,128,.25)", color:"#d1d5db" }}>
                🔄 Yenileme Eğitimi
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

      <CTASection title="Belgenizi Yenilemeyi Daha Fazla Ertelemeyin" sub="Adana'da özel güvenlik yenileme eğitimi için danışmanımızla hemen görüşün. Eğitim takvimi ve başvuru için WhatsApp hattımız aktiftir."/>
    </>
  );
}

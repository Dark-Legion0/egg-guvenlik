import type { Metadata } from "next";
import Link from "next/link";
import { PROGRAMS, SITE } from "@/lib/config";
import { waUrl } from "@/lib/contact";
import { CTA } from "@/lib/content";
import CTASection from "@/components/sections/CTASection";
import WaIcon from "@/components/ui/WaIcon";
import { SEO_BASE, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Özel Güvenlik Eğitim Programları | EGG Güvenlik Adana",
  description: "Adana'da silahlı, silahsız ve yenileme özel güvenlik eğitim programları. İçişleri Bakanlığı onaylı sertifika, deneyimli eğitmenler, %94 başarı oranı.",
  alternates: { canonical: `${SEO_BASE.siteUrl}/egitimler` },
};

const GUIDE = [
  { icon:"hand", t:"Silahlı eğitim kimler için?", d:"Daha geniş çalışma alanı (fabrika, banka, havalimanı) hedefleyenler ve daha yüksek ücret potansiyelini tercih edenler için idealdir. Atış tatbikatı eğitimi kapsamındadır.", href:"/egitimler/silahli-ozel-guvenlik-egitimi" },
  { icon:"🛡️", t:"Silahsız eğitim kimler için?", d:"Güvenlik sektörüne ilk adımını atacaklar, AVM/site/hastane gibi alanlarda çalışmak isteyenler ve daha hızlı süreç tercih edenler için uygun seçenektir.", href:"/egitimler/silahsiz-ozel-guvenlik-egitimi" },
  { icon:"🔄", t:"Yenileme eğitimi kimler için?", d:"Halihazırda güvenlik kimliğine sahip olup 5 yıllık geçerlilik süresi dolmak üzere olan tüm güvenlik görevlileri yasal olarak yenileme eğitimi almak zorundadır.", href:"/egitimler/yenileme-egitimi" },
];

const BOTTOM_FEATURES = [
  { ic:"👥", t:"Deneyimli Kadro", d:"Alanında uzman eğitmenler" },
  { ic:"🎯", t:"Uygulamalı Eğitim", d:"Pratik ve gerçek senaryolar" },
  { ic:"📋", t:"Modern Eğitim Modeli", d:"Güncel müfredat ve içerik" },
  { ic:"📅", t:"Düzenli Süreç Takibi", d:"Adım adım profesyonel takip" },
];

export default function EgitimlerPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name:"Ana Sayfa", url:"/" },
    { name:"Eğitimler", url:"/egitimler" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>

      {/* ══ HERO ══ */}
      <section style={{
        minHeight:"100vh",
        position:"relative", overflow:"hidden",
        display:"flex", flexDirection:"column",
        background:"#01030e",
      }}>
        {/* Arka plan görseli */}
        <img src="/images/egitimler-hero-bg.webp" alt="" aria-hidden="true" style={{
          position:"absolute", inset:0, width:"100%", height:"100%",
          objectFit:"cover", objectPosition:"center center",
          zIndex:0, display:"block", opacity:.9,
        }}/>
        {/* Sol koyu overlay — metin okunabilsin */}
        <div style={{ position:"absolute", inset:0, zIndex:1, background:"linear-gradient(100deg, rgba(1,3,14,.97) 0%, rgba(1,3,14,.92) 30%, rgba(1,3,14,.6) 55%, rgba(1,3,14,.15) 80%, transparent 100%)", pointerEvents:"none" }}/>
        {/* Alt fade */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:200, background:"linear-gradient(to top,rgba(1,3,14,1),transparent)", zIndex:1, pointerEvents:"none" }}/>
        <div className="grid-bg" style={{ position:"absolute", inset:0, zIndex:1, opacity:.25 }}/>

        {/* İçerik */}
        <div className="wrapper" style={{ position:"relative", zIndex:2, flex:1, display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:"7rem", paddingBottom:"2rem" }}>
          <div style={{ maxWidth:"52%" }} className="egitim-hero-left">

          {/* Breadcrumb */}
          <div style={{ display:"flex", alignItems:"center", gap:".5rem", marginBottom:"1.5rem", fontSize:".78rem" }}>
            <Link href="/" style={{ color:"rgba(255,255,255,.4)", textDecoration:"none" }}>Ana Sayfa</Link>
            <span style={{ color:"rgba(255,255,255,.2)" }}>›</span>
            <span style={{ color:"rgba(255,255,255,.6)" }}>Eğitimler</span>
          </div>

          {/* Badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:".5rem", padding:".35rem 1rem", borderRadius:999, border:"1px solid rgba(251,191,36,.35)", background:"rgba(0,0,0,.5)", marginBottom:"1.5rem", width:"fit-content" }}>
            <span style={{ color:"#fbbf24" }}>⭐</span>
            <span style={{ color:"#fcd34d", fontSize:".72rem", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase" }}>3 Farklı Devlet Onaylı Program</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"clamp(2.5rem,6vw,4.5rem)", lineHeight:1.0, letterSpacing:"-.04em", marginBottom:"1.25rem", maxWidth:"12ch" }}>
            <span style={{ color:"#fff" }}>Özel Güvenlik</span><br/>
            <span style={{ background:"linear-gradient(90deg,#d97706,#fbbf24,#f59e0b)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>Eğitim Programları</span>
          </h1>

          {/* Alt yazı */}
          <p style={{ color:"rgba(255,255,255,.65)", fontSize:"clamp(.9rem,1.8vw,1.05rem)", lineHeight:1.75, maxWidth:"30rem", marginBottom:"1.75rem" }}>
            {SITE.city}&apos;da silahlı, silahsız ve yenileme özel güvenlik eğitimleri.<br/>
            İçişleri Bakanlığı onaylı sertifika, deneyimli kadro ve düzenli süreç takibi.
          </p>

          {/* 3 mini rozet */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"1.5rem", marginBottom:"2rem" }}>
            {[
              { ic:"🛡️", t:"Devlet Onaylı", d:"Resmi ve geçerli sertifika" },
              { ic:"👥", t:"2500+ Mezun", d:"Başarıyla tamamlayan" },
              { ic:"💬", t:"7/24 Destek", d:"Uzman ekip desteği" },
            ].map(r => (
              <div key={r.t} style={{ display:"flex", alignItems:"center", gap:".625rem" }}>
                <span style={{ fontSize:"1.1rem" }}>{r.ic}</span>
                <div>
                  <div style={{ color:"#fff", fontWeight:700, fontSize:".82rem" }}>{r.t}</div>
                  <div style={{ color:"rgba(255,255,255,.4)", fontSize:".72rem" }}>{r.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA butonlar */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", marginBottom:"3rem" }}>
            <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" style={{
              display:"flex", flexDirection:"column", alignItems:"flex-start",
              padding:".875rem 1.5rem", borderRadius:".875rem",
              background:"linear-gradient(135deg,#16a34a,#22c55e)",
              color:"#fff", textDecoration:"none",
              boxShadow:"0 4px 20px rgba(37,211,102,.3)",
            }}>
              <span style={{ display:"flex", alignItems:"center", gap:".5rem", fontWeight:800, fontSize:".95rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Danışmanla Görüş
              </span>
              <span style={{ fontSize:".72rem", opacity:.8, marginTop:".15rem", paddingLeft:"1.6rem" }}>Ortalama yanıt süresi: 3 dk</span>
            </a>
            <a href="#karsilastirma" style={{
              display:"flex", alignItems:"center",
              padding:".875rem 1.5rem", borderRadius:".875rem",
              border:"1px solid rgba(251,191,36,.4)", background:"rgba(0,0,0,.4)",
              color:"#fcd34d", fontWeight:700, fontSize:".9rem", textDecoration:"none",
            }}>
              Programları Karşılaştır →
            </a>
          </div>

          </div>{/* /egitim-hero-left */}

          {/* Alt 4 özellik şeridi */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem", paddingTop:"1.5rem", borderTop:"1px solid rgba(255,255,255,.07)" }} className="egitim-bottom-grid">
            {BOTTOM_FEATURES.map(f => (
              <div key={f.t} style={{ display:"flex", alignItems:"center", gap:".625rem" }}>
                <div style={{ width:40, height:40, borderRadius:".75rem", background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem", flexShrink:0 }}>{f.ic}</div>
                <div>
                  <div style={{ color:"#fff", fontWeight:700, fontSize:".8rem" }}>{f.t}</div>
                  <div style={{ color:"rgba(255,255,255,.4)", fontSize:".72rem" }}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REHBER ══ */}
      <section style={{ padding:"5rem 0", background:"linear-gradient(180deg,#010520 0%,#020830 100%)", position:"relative", overflow:"hidden" }}>
        <div className="grid-bg"/>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:800, height:400, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(251,191,36,.04) 0%,transparent 65%)", pointerEvents:"none" }}/>
        <div className="wrapper rel">
          <div style={{ textAlign:"center", marginBottom:"3rem" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:".4rem", padding:".28rem .875rem", borderRadius:999, background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.25)", marginBottom:"1rem" }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#fbbf24", display:"inline-block" }}/>
              <span style={{ color:"#fcd34d", fontSize:".72rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase" }}>Rehber</span>
            </div>
            <h2 style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"clamp(1.75rem,4vw,2.75rem)", letterSpacing:"-.03em", color:"#fff", marginBottom:".75rem" }}>
              Eğitim Seçerken <span style={{ background:"linear-gradient(90deg,#d97706,#fbbf24)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>Nelere Dikkat Etmeli?</span>
            </h2>
            <p style={{ color:"rgba(255,255,255,.55)", fontSize:".95rem", lineHeight:1.7, maxWidth:"38rem", margin:"0 auto" }}>
              Her program farklı kariyer hedeflerine ve kişisel koşullara uygundur.<br/>
              Aşağıdaki rehber kısa sürede doğru seçimi yapmanıza yardımcı olur.
            </p>
          </div>
          <div className="grid-1 grid-3" style={{ gap:"1.25rem" }}>
            {GUIDE.map(g => (
              <div key={g.t} style={{ display:"flex", flexDirection:"column", borderRadius:"1.125rem", background:"linear-gradient(160deg,rgba(5,14,77,.65) 0%,rgba(2,6,38,.85) 100%)", border:"1px solid rgba(255,255,255,.08)", padding:"1.75rem", boxShadow:"0 4px 24px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.05)", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:"15%", right:"15%", height:1, background:"linear-gradient(90deg,transparent,rgba(251,191,36,.3),transparent)" }}/>
                <div style={{ fontSize:"2rem", marginBottom:"1.25rem" }}>
                  {g.icon === "hand"
                    ? <img src="/images/hand.png" alt="" style={{ width:36, height:36, objectFit:"contain" }}/>
                    : g.icon}
                </div>
                <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:800, fontSize:"1.05rem", color:"#fff", marginBottom:".875rem", letterSpacing:"-.02em" }}>{g.t}</h3>
                <p style={{ color:"rgba(255,255,255,.58)", fontSize:".875rem", lineHeight:1.75, flex:1 }}>{g.d}</p>
                <div style={{ marginTop:"1.5rem", paddingTop:"1rem", borderTop:"1px solid rgba(255,255,255,.07)" }}>
                  <Link href={g.href} style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:36, height:36, borderRadius:"50%", background:"rgba(251,191,36,.12)", border:"1px solid rgba(251,191,36,.3)", textDecoration:"none", color:"#fbbf24", fontSize:"1rem" }}>→</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROGRAM KARTLARI ══ */}
      <section id="karsilastirma" className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div style={{ textAlign:"center", marginBottom:"2.5rem" }}>
            <p className="s-label" style={{ justifyContent:"center" }}>🎯 Programlar</p>
            <h2 className="s-title">Size Uygun Programı <span className="text-gold">İnceleyin</span></h2>
          </div>
          <div className="grid-1 grid-3" style={{ gap:"1.25rem" }}>
            {PROGRAMS.map(p => {
              const borderClr = p.color==="gold"?"#f59e0b":p.color==="blue"?"#3b82f6":"#6b7280";
              const gradBtn = p.color==="gold"?"linear-gradient(135deg,#d97706,#fbbf24)":p.color==="blue"?"linear-gradient(135deg,#1e40af,#3b82f6)":"linear-gradient(135deg,#6b21a8,#a855f7)";
              return (
                <div key={p.id} style={{ display:"flex", flexDirection:"column", borderRadius:"1.125rem", border:`1px solid ${borderClr}55`, background:"linear-gradient(160deg,rgba(5,14,77,.7) 0%,rgba(2,6,38,.9) 100%)", padding:"2rem", position:"relative", overflow:"hidden", boxShadow:"0 8px 40px rgba(0,0,0,.4)" }}>
                  <div style={{ position:"absolute", top:0, left:"10%", right:"10%", height:1, background:`linear-gradient(90deg,transparent,${borderClr}55,transparent)` }}/>
                  {p.badge && <div style={{ position:"absolute", top:"1.125rem", right:"1.125rem", display:"inline-flex", alignItems:"center", gap:".3rem", padding:".28rem .75rem", borderRadius:999, background:p.badge==="En Popüler"?"rgba(251,191,36,.15)":"rgba(168,85,247,.15)", border:`1px solid ${p.badge==="En Popüler"?"rgba(251,191,36,.4)":"rgba(168,85,247,.4)"}`, color:p.badge==="En Popüler"?"#fbbf24":"#c084fc", fontSize:".72rem", fontWeight:700 }}>⭐ {p.badge}</div>}
                  <div style={{ width:64, height:64, borderRadius:"50%", background:`${borderClr}22`, border:`1px solid ${borderClr}55`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.75rem", marginBottom:"1.25rem" }}>
                    {p.icon === "hand"
                      ? <img src="/images/hand.png" alt="" style={{ width:36, height:36, objectFit:"contain" }}/>
                      : p.icon}
                  </div>
                  <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:800, fontSize:"1.15rem", color:"#fff", marginBottom:".625rem", letterSpacing:"-.02em" }}>{p.title}</h3>
                  <p style={{ color:"rgba(255,255,255,.58)", fontSize:".875rem", lineHeight:1.72, marginBottom:"1.125rem" }}>{p.desc}</p>
                  <div style={{ display:"flex", alignItems:"center", gap:".5rem", padding:".5rem .875rem", borderRadius:".75rem", background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", fontSize:".78rem", color:"rgba(255,255,255,.45)", marginBottom:"1.125rem" }}>⏱ {p.duration} Eğitim Süresi</div>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:".55rem", marginBottom:"1.5rem", flex:1 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ display:"flex", alignItems:"flex-start", gap:".6rem", fontSize:".875rem", color:"rgba(255,255,255,.72)" }}>
                        <span style={{ width:18, height:18, borderRadius:"50%", flexShrink:0, background:`${borderClr}22`, border:`1px solid ${borderClr}55`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:".6rem", color:borderClr, marginTop:".1rem" }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={p.href} style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:".875rem", borderRadius:".875rem", background:gradBtn, color:p.color==="gold"?"#01051f":"#fff", fontWeight:700, fontSize:".9rem", textDecoration:"none", marginBottom:".75rem" }}>Detayları İncele →</Link>
                  <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" style={{ textAlign:"center", color:"rgba(255,255,255,.4)", fontSize:".8rem", display:"block" }}>Kurs Ücretlerini Sor</a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ KARŞILAŞTIRMA ══ */}
      <section className="section section-alt">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div style={{ textAlign:"center", marginBottom:"2rem" }}>
            <p className="s-label" style={{ justifyContent:"center" }}>⚖️ Karşılaştırma</p>
            <h2 className="s-title">Programlar Arasındaki <span className="text-gold">Temel Farklar</span></h2>
          </div>
          <div className="ct-wrap">
            <table className="ct">
              <thead><tr><th>Özellik</th><th>Silahlı</th><th>🛡️ Silahsız</th><th>🔄 Yenileme</th></tr></thead>
              <tbody>
                {[
                  ["Toplam Eğitim Süresi","120 Saat","90 Saat","40 Saat"],
                  ["Tahmini Toplam Süreç","2–3 Ay","1.5–2 Ay","1–1.5 Ay"],
                  ["İlk Kez Başvuru","✓ Uygun","✓ Uygun","— Yalnızca mevcut belge sahipleri"],
                  ["Ateşli Silah Eğitimi","✓ Dahil","— Yok","Silahlı belge için dahil"],
                  ["Devlet Onaylı Sertifika","✓","✓","✓ (Yenileme)"],
                  ["AVM / Site Güvenliği","✓","✓","Mevcut belge devam"],
                  ["Fabrika / Banka / VIP","✓ Zorunlu ya da tercihli","— Genelde kabul edilmez","Mevcut belge kapsamı"],
                  ["Kariyer Potansiyeli","Yüksek, çift alanlı","Geniş, yaygın","Mevcut kariyer devam"],
                ].map(([f,...vals])=>(
                  <tr key={f}><td style={{ fontWeight:600 }}>{f}</td>{vals.map((v,i)=><td key={i} className={v==="✓"||v.startsWith("✓")?"y":v.startsWith("—")?"n":""}>{v}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title={`${SITE.city}'da Size En Uygun Özel Güvenlik Eğitimini Belirleyelim`}
        sub="Danışmanımızla görüşün. Ücretsiz yönlendirme ve güncel kontenjan bilgisi için WhatsApp hattımız aktiftir."
        btn2={<Link href="/kayit-sureci" className="btn btn-primary">{CTA.register} →</Link>}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, waUrl } from "@/lib/contact";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import ContactForm from "@/components/sections/ContactForm";
import { WaBtn, PhoneBtn, MapBtn } from "@/components/ui/QuickActions";
import WaIcon from "@/components/ui/WaIcon";
import { SEO_BASE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EGG Özel Güvenlik İletişim | Adana Güvenlik Kursu",
  description: "EGG Özel Güvenlik Adana iletişim. Tel: 0546 267 89 79 · WhatsApp · eggguvenlik01@gmail.com. Ücretsiz danışmanlık, kayıt bilgisi ve kurs ücretleri.",
  keywords: ["Adana özel güvenlik iletişim","EGG güvenlik telefon","özel güvenlik kayıt Adana","güvenlik kursu bilgi"],
  alternates: { canonical: `${SEO_BASE.siteUrl}/iletisim` },
  openGraph: { title: "EGG Özel Güvenlik İletişim | Adana", description: "0546 267 89 79 · WhatsApp · eggguvenlik01@gmail.com. Ücretsiz danışmanlık.", url: `${SEO_BASE.siteUrl}/iletisim`, locale: "tr_TR", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EGG Özel Güvenlik Eğitim Kurumu",
  description: "Adana'da silahlı ve silahsız özel güvenlik personeli yetiştiren devlet onaylı eğitim kurumu.",
  url: "https://egg-guvenlik.com",
  telephone: `+${CONTACT.phone}`,
  email: CONTACT.email,
  address: { "@type": "PostalAddress", addressLocality: "Adana", addressCountry: "TR" },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-15:00"],
};

export default function IletisimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}/>

            {/* ══ HERO + DANIŞMANLIK — birleşik section ══ */}
      <section style={{
        position:"relative", overflow:"hidden",
        background:"#01031a",
        paddingBottom:"4rem",
      }}>
        {/* Arka plan görseli */}
        <img src="/images/iletisim-hero-bg.webp" alt="" aria-hidden="true" style={{
          position:"absolute", inset:0, width:"100%", height:"100%",
          objectFit:"cover", objectPosition:"60% center", zIndex:0, opacity:.65,
        }}/>
        <div style={{ position:"absolute", inset:0, zIndex:1, background:"linear-gradient(160deg, rgba(1,3,26,.96) 0%, rgba(1,3,26,.88) 30%, rgba(1,3,26,.82) 60%, rgba(1,3,26,.92) 100%)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:120, background:"linear-gradient(to top,rgba(2,8,48,1),transparent)", zIndex:1, pointerEvents:"none" }}/>
        <div className="grid-bg" style={{ position:"absolute", inset:0, zIndex:1, opacity:.4 }}/>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:900, height:400, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(251,191,36,.04) 0%,transparent 65%)", pointerEvents:"none", zIndex:1 }}/>

        <div className="wrapper" style={{ position:"relative", zIndex:2, paddingTop:"7rem" }}>
          {/* ── DANIŞMANLIK KONULARI Başlık ── */}
          <div style={{ textAlign:"center", marginBottom:"3rem" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", marginBottom:".875rem" }}>
              <div style={{ height:1, width:48, background:"linear-gradient(to right,transparent,rgba(251,191,36,.4))" }}/>
              <div style={{ display:"inline-flex", alignItems:"center", gap:".4rem" }}>
                <span style={{ color:"#fbbf24", fontSize:".8rem" }}>👥</span>
                <span style={{ color:"#fcd34d", fontSize:".72rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase" }}>Danışmanlık Konuları</span>
              </div>
              <div style={{ height:1, width:48, background:"linear-gradient(to left,transparent,rgba(251,191,36,.4))" }}/>
            </div>
            <h2 style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"clamp(1.875rem,5vw,3rem)", letterSpacing:"-.04em", color:"#fff", marginBottom:".75rem" }}>
              Danışmanımız<br/>Şu Konularda <span style={{ background:"linear-gradient(90deg,#d97706,#fbbf24)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>Bilgi Verir</span>
            </h2>
            <p style={{ color:"rgba(255,255,255,.5)", fontSize:".9rem" }}>Doğru bilgi, doğru yönlendirme ile zamanınızı verimli kullanın.</p>
          </div>

          {/* 4 Kart */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.25rem", marginBottom:"2rem" }} className="danismanlik-grid">
            {[
              { ic:"📅", t:"Eğitim Takvimi", d:"Bir sonraki eğitim dönemini ve kalan kontenjan sayısını öğrenin.", badge:"⭐ En Çok Sorulan" },
              { ic:"💰", t:"Kurs Ücretleri", d:"Güncel ücret bilgisi ve ödeme planı seçeneklerini sorun.", badge:"⚡ Hızlı Bilgi" },
              { ic:"📄", t:"Evrak Listesi", d:"Programınıza göre tam ve eksiksiz evrak listesini alın.", badge:"🛡️ Güvenli & Kolay" },
              { ic:"🎯", t:"Program Seçimi", d:"Hangi eğitimin size uygun olduğunu birlikte belirleyelim.", badge:"👤 Sizin için" },
            ].map((item) => (
              <div key={item.t} style={{
                background:"linear-gradient(160deg,rgba(10,12,35,.85) 0%,rgba(5,8,28,.95) 100%)",
                border:"1px solid rgba(255,255,255,.08)",
                borderRadius:"1.125rem",
                padding:"1.625rem 1.25rem",
                display:"flex", flexDirection:"column",
                position:"relative", overflow:"hidden",
                boxShadow:"0 4px 24px rgba(0,0,0,.4)",
              }}>
                <div style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".2rem .625rem", borderRadius:999, background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.2)", marginBottom:"1.25rem", width:"fit-content", fontSize:".68rem", color:"#fcd34d", fontWeight:700 }}>
                  {item.badge}
                </div>
                <div style={{ width:64, height:64, borderRadius:"50%", background:"rgba(0,0,0,.5)", border:"1px solid rgba(255,255,255,.1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.75rem", marginBottom:"1.125rem" }}>
                  {item.ic}
                </div>
                <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:800, fontSize:"1rem", color:"#fff", marginBottom:".625rem" }}>{item.t}</h3>
                <p style={{ color:"rgba(255,255,255,.5)", fontSize:".82rem", lineHeight:1.72, flex:1 }}>{item.d}</p>
                <div style={{ marginTop:"1.25rem" }}>
                  <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" style={{
                    width:34, height:34, borderRadius:"50%",
                    background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.15)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    color:"rgba(255,255,255,.6)", textDecoration:"none", fontSize:"1rem",
                  }}>→</a>
                </div>
              </div>
            ))}
          </div>

          {/* Alt CTA şeridi */}
          <div style={{
            display:"grid", gridTemplateColumns:"1fr auto auto",
            gap:"1.5rem", alignItems:"center",
            background:"linear-gradient(135deg,rgba(10,12,35,.9) 0%,rgba(5,8,28,.95) 100%)",
            border:"1px solid rgba(251,191,36,.2)",
            borderRadius:"1.125rem",
            padding:"1.5rem 2rem",
            marginBottom:"2rem",
          }} className="danisman-cta-grid">
            <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
              <div style={{ width:48, height:48, borderRadius:"50%", background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", flexShrink:0 }}>🎧</div>
              <div>
                <div style={{ color:"#fff", fontWeight:800, fontSize:"1.05rem" }}>
                  Danışmanınız sizi <span style={{ color:"#fbbf24" }}>hemen arasın</span>
                </div>
                <div style={{ color:"rgba(255,255,255,.45)", fontSize:".82rem", marginTop:".2rem" }}>Bilgi almak için formu doldurun, uzmanımız en kısa sürede sizi arasın.</div>
              </div>
            </div>
            <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" style={{
              display:"inline-flex", alignItems:"center", gap:".625rem",
              padding:".875rem 1.75rem", borderRadius:".875rem",
              background:"linear-gradient(135deg,#d97706,#fbbf24)",
              color:"#01051f", fontWeight:800, fontSize:".9rem", textDecoration:"none",
              whiteSpace:"nowrap",
            }}>Hemen Talep Oluştur →</a>
            <div style={{
              display:"flex", alignItems:"center", gap:".875rem",
              padding:".875rem 1.25rem", borderRadius:".875rem",
              background:"rgba(251,191,36,.08)", border:"1px solid rgba(251,191,36,.2)",
              whiteSpace:"nowrap",
            }}>
              <div style={{ width:36, height:36, borderRadius:"50%", background:"rgba(251,191,36,.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:".9rem", flexShrink:0 }}>🛡️</div>
              <div>
                <div style={{ color:"#fff", fontWeight:700, fontSize:".8rem" }}>7/24 Destek</div>
                <div style={{ display:"flex", alignItems:"center", gap:".3rem", color:"rgba(255,255,255,.45)", fontSize:".7rem" }}>
                  <span style={{ width:5, height:5, borderRadius:"50%", background:"#25D366", display:"inline-block" }}/>
                  Uzman ekibimiz her zaman yanınızda.
                </div>
              </div>
            </div>
          </div>

          {/* Alt 3 güven rozeti */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem" }} className="guven-3grid">
            {[
              { ic:"🔒", t:"Güvenli & KVKK Uyumlu", d:"Kişisel bilgileriniz güvenle korunur." },
              { ic:"👥", t:"Uzman Danışman Kadrosu", d:"Alanında deneyimli uzmanlar." },
              { ic:"⚡", t:"Hızlı Geri Dönüş", d:"Ortalama yanıt süresi 5 dakikadır." },
            ].map(r => (
              <div key={r.t} style={{ display:"flex", alignItems:"center", gap:".75rem", padding:".875rem 1rem", background:"rgba(5,14,60,.3)", border:"1px solid rgba(255,255,255,.07)", borderRadius:".875rem" }}>
                <span style={{ width:36, height:36, borderRadius:".625rem", background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{r.ic}</span>
                <div>
                  <div style={{ color:"#fff", fontWeight:700, fontSize:".8rem" }}>{r.t}</div>
                  <div style={{ color:"rgba(255,255,255,.4)", fontSize:".72rem" }}>{r.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── İletişim kanalları — referans görsele göre ── */}
      <section style={{
        padding:"5rem 0",
        background:"linear-gradient(180deg,#010520 0%,#020830 100%)",
        position:"relative", overflow:"hidden",
      }}>
        <div className="grid-bg"/>

        {/* Sağ arka logo watermark */}
        <div style={{
          position:"absolute", right:"-3%", top:"50%", transform:"translateY(-50%)",
          width:420, height:420, opacity:.04, pointerEvents:"none",
          background:"radial-gradient(circle, rgba(251,191,36,.8) 0%, transparent 65%)",
          borderRadius:"50%",
        }}/>
        

        <div className="wrapper rel">

          {/* Başlık */}
          <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:".5rem", padding:".3rem .875rem", borderRadius:999, border:"1px solid rgba(251,191,36,.3)", background:"rgba(251,191,36,.08)", marginBottom:"1.125rem" }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#fbbf24", display:"inline-block" }}/>
              <span style={{ color:"#fcd34d", fontSize:".72rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase" }}>Hızlı İletişim</span>
            </div>
            <h2 style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"clamp(2rem,5vw,3.25rem)", letterSpacing:"-.04em", color:"#fff", marginBottom:".75rem" }}>
              Bize Nasıl <span style={{ background:"linear-gradient(90deg,#d97706,#fbbf24)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>Ulaşabilirsiniz?</span>
            </h2>
            {/* Yan çizgiler */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", marginBottom:".875rem" }}>
              <div style={{ height:1, width:60, background:"linear-gradient(to right,transparent,rgba(251,191,36,.4))" }}/>
              <p style={{ color:"rgba(255,255,255,.5)", fontSize:".9rem", lineHeight:1.6, maxWidth:"28rem", textAlign:"center" }}>
                Kayıt, eğitim programı ve kurs ücretleri hakkında danışmanımızdan hızlıca bilgi alabilirsiniz.
              </p>
              <div style={{ height:1, width:60, background:"linear-gradient(to left,transparent,rgba(251,191,36,.4))" }}/>
            </div>
          </div>

          {/* ÜST 4 KART */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem", marginBottom:"1.25rem" }} className="iletisim-4grid">

            {/* Telefon */}
            <div className="iletisim-card">
              <div className="iletisim-card-icon" style={{ background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.25)", color:"#fbbf24" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.1 5.18 2 2 0 015.08 3h3a2 2 0 012 1.72c.128.96.36 1.903.69 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.33 1.85.562 2.81.69A2 2 0 0122 17.92v-.99z"/></svg>
              </div>
              <h3 className="iletisim-card-title">Telefon</h3>
              <p className="iletisim-card-sub">Pzt–Cmt 08:00 - 18:00</p>
              <a href={CONTACT.phoneHref} style={{ color:"#fbbf24", fontWeight:700, fontSize:".95rem", textDecoration:"none", display:"flex", alignItems:"center", gap:".4rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.1 5.18 2 2 0 015.08 3h3a2 2 0 012 1.72c.128.96.36 1.903.69 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.33 1.85.562 2.81.69A2 2 0 0122 17.92v-.99z"/></svg>
                {CONTACT.displayPhone}
              </a>
            </div>

            {/* WhatsApp — ÖNERİLEN */}
            <div className="iletisim-card" style={{ border:"1.5px solid rgba(37,211,102,.4)", background:"linear-gradient(160deg,rgba(4,40,20,.7) 0%,rgba(2,20,10,.85) 100%)" }}>
              {/* Önerilen badge */}
              <div style={{ position:"absolute", top:"-1px", left:"50%", transform:"translateX(-50%)", background:"linear-gradient(90deg,#16a34a,#22c55e)", color:"#fff", fontSize:".68rem", fontWeight:700, padding:".2rem .875rem", borderRadius:"0 0 .625rem .625rem", whiteSpace:"nowrap", display:"flex", alignItems:"center", gap:".3rem" }}>
                ⭐ ÖNERİLEN
              </div>
              <div className="iletisim-card-icon" style={{ background:"rgba(37,211,102,.12)", border:"1px solid rgba(37,211,102,.3)", color:"#4ade80", marginTop:".75rem" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="iletisim-card-title">WhatsApp</h3>
              <p className="iletisim-card-sub">7/24 mesaj atabilirsiniz.</p>
              <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" style={{ color:"#4ade80", fontWeight:700, fontSize:".95rem", textDecoration:"none" }}>
                Hemen Yaz →
              </a>
            </div>

            {/* E-posta */}
            <div className="iletisim-card">
              <div className="iletisim-card-icon" style={{ background:"rgba(96,165,250,.1)", border:"1px solid rgba(96,165,250,.25)", color:"#60a5fa" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3 className="iletisim-card-title">E-posta</h3>
              <p className="iletisim-card-sub">1–2 iş günü yanıt</p>
              <a href={`mailto:${CONTACT.email}`} style={{ color:"#fbbf24", fontWeight:600, fontSize:".82rem", textDecoration:"none", wordBreak:"break-all" }}>
                {CONTACT.email}
              </a>
            </div>

            {/* Adres */}
            <div className="iletisim-card">
              <div className="iletisim-card-icon" style={{ background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.25)", color:"#fbbf24" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="iletisim-card-title">Adres</h3>
              <p className="iletisim-card-sub">EGG Özel Güvenlik Eğitim Kurumu, Adana</p>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ color:"#fbbf24", fontWeight:700, fontSize:".875rem", textDecoration:"none" }}>
                Haritada Aç →
              </a>
            </div>
          </div>

          {/* ALT 2 KART */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"2rem" }} className="iletisim-2grid">

            {/* Çalışma Saatleri */}
            <div className="iletisim-card" style={{ textAlign:"left" }}>
              <div style={{ display:"flex", alignItems:"center", gap:".875rem", marginBottom:"1.25rem" }}>
                <div className="iletisim-card-icon" style={{ background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.25)", color:"#fbbf24", margin:0, width:44, height:44, flexShrink:0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                </div>
                <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:800, fontSize:"1.1rem", color:"#fff", margin:0 }}>Çalışma Saatleri</h3>
              </div>
              {CONTACT.workingHours.map(w => (
                <div key={w.day} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:".875rem", padding:".45rem 0", borderBottom:"1px solid rgba(255,255,255,.06)" }}>
                  <span style={{ color:"rgba(255,255,255,.5)" }}>{w.day}</span>
                  <span style={{ color: w.open ? "#fbbf24" : "rgba(255,255,255,.28)", fontWeight: w.open ? 700 : 400 }}>{w.hours}</span>
                </div>
              ))}
              <div style={{ marginTop:".875rem", display:"flex", alignItems:"center", gap:".5rem" }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"#25D366", display:"inline-block", flexShrink:0, boxShadow:"0 0 6px #25D366" }}/>
                <span style={{ fontSize:".75rem", color:"rgba(37,211,102,.8)", fontWeight:600 }}>7/24 WhatsApp desteği</span>
              </div>
            </div>

            {/* WhatsApp 7/24 — telefon görseli sağda */}
            <div className="iletisim-card" style={{ border:"1.5px solid rgba(37,211,102,.25)", background:"linear-gradient(160deg,rgba(4,30,15,.7) 0%,rgba(2,15,8,.85) 100%)", textAlign:"left", display:"flex", flexDirection:"column", overflow:"hidden" }}>
              {/* Sağ tarafta telefon görseli */}
              <img
                src="/images/iletisim-phone.webp"
                alt=""
                aria-hidden="true"
                className="iletisim-phone-img"
                style={{
                  position:"absolute", right:"-15%", bottom:"-15%",
                  height:"130%", width:"auto",
                  objectFit:"contain", objectPosition:"right bottom",
                  pointerEvents:"none", userSelect:"none",
                  opacity:.28,
                  maskImage:"linear-gradient(to left, rgba(0,0,0,.6) 0%, rgba(0,0,0,.3) 40%, transparent 80%)",
                  WebkitMaskImage:"linear-gradient(to left, rgba(0,0,0,.6) 0%, rgba(0,0,0,.3) 40%, transparent 80%)",
                  filter:"blur(0.5px) brightness(0.7)",
                }}
              />
              {/* İçerik — sol taraf */}
              <div className="iletisim-wa-content" style={{ position:"relative", zIndex:1, display:"flex", flexDirection:"column", flex:1, maxWidth:"55%" }}>
                <div style={{ display:"flex", alignItems:"center", gap:".875rem", marginBottom:"1rem" }}>
                  <div className="iletisim-card-icon" style={{ background:"rgba(37,211,102,.12)", border:"1px solid rgba(37,211,102,.3)", color:"#4ade80", margin:0, width:44, height:44, flexShrink:0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>
                  </div>
                  <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:800, fontSize:"1.1rem", color:"#fff", margin:0 }}>WhatsApp 7/24 Aktif</h3>
                </div>
                <p style={{ color:"rgba(255,255,255,.6)", fontSize:".875rem", lineHeight:1.72, marginBottom:"1.5rem", flex:1 }}>
                  Mesai saatleri dışında da mesajlarınıza en kısa sürede dönüş yapıyoruz.
                </p>
                <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" style={{
                  display:"inline-flex", alignItems:"center", justifyContent:"center", gap:".625rem",
                  padding:".875rem 1.25rem", borderRadius:".875rem",
                  background:"linear-gradient(135deg,#16a34a,#22c55e)",
                  color:"#fff", fontWeight:700, fontSize:".9rem", textDecoration:"none",
                  boxShadow:"0 4px 20px rgba(37,211,102,.35)",
                }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp&apos;tan Yaz
                </a>
              </div>
            </div>
          </div>

          {/* ALT HIZLI İLETİŞİM ŞERİDİ */}
          <div style={{ borderRadius:"1.125rem", border:"1px solid rgba(251,191,36,.25)", background:"rgba(2,6,38,.7)", backdropFilter:"blur(12px)", padding:"1rem 1.5rem" }}>
            <p style={{ textAlign:"center", color:"rgba(255,255,255,.35)", fontSize:".72rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", marginBottom:".875rem" }}>Hızlı İletişim</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1px 1fr 1px 1fr", alignItems:"center" }}>
              <a href={CONTACT.phoneHref} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:".625rem", textDecoration:"none", padding:".625rem 0" }}>
                <div style={{ width:34, height:34, borderRadius:".625rem", background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.2)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fbbf24" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.1 5.18 2 2 0 015.08 3h3a2 2 0 012 1.72c.128.96.36 1.903.69 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.33 1.85.562 2.81.69A2 2 0 0122 17.92v-.99z"/></svg>
                </div>
                <div>
                  <div style={{ color:"#fff", fontWeight:700, fontSize:".85rem" }}>Ara</div>
                  <div style={{ color:"rgba(255,255,255,.4)", fontSize:".72rem" }}>{CONTACT.displayPhone}</div>
                </div>
              </a>
              <div style={{ width:1, height:40, background:"rgba(255,255,255,.08)" }}/>
              <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:".625rem", textDecoration:"none", padding:".625rem 0" }}>
                <div style={{ width:34, height:34, borderRadius:".625rem", background:"rgba(37,211,102,.12)", border:"1px solid rgba(37,211,102,.25)", display:"flex", alignItems:"center", justifyContent:"center", color:"#4ade80" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <div style={{ color:"#fff", fontWeight:700, fontSize:".85rem" }}>WhatsApp</div>
                  <div style={{ color:"rgba(255,255,255,.4)", fontSize:".72rem" }}>7/24 Ulaşın</div>
                </div>
              </a>
              <div style={{ width:1, height:40, background:"rgba(255,255,255,.08)" }}/>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:".625rem", textDecoration:"none", padding:".625rem 0" }}>
                <div style={{ width:34, height:34, borderRadius:".625rem", background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.2)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fbbf24" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div style={{ color:"#fff", fontWeight:700, fontSize:".85rem" }}>Konum</div>
                  <div style={{ color:"rgba(255,255,255,.4)", fontSize:".72rem" }}>Yol Tarifi Al</div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Bilgi formu ── */}
      <section className="section section-alt">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div style={{ textAlign:"center", marginBottom:"2rem" }}>
            <p className="s-label" style={{ justifyContent:"center" }}>📝 Bilgi Formu</p>
            <h2 className="s-title">Kayıt ve Bilgi <span className="text-gold">Talep Formu</span></h2>
            <p className="s-sub" style={{ textAlign:"center", margin:".75rem auto 0", maxWidth:"36rem" }}>
              Formu doldurun, danışmanımız en kısa sürede sizi arasın. Veya bilgilerinizi doğrudan WhatsApp'tan gönderin.
            </p>
          </div>
          <div style={{ maxWidth:640, margin:"0 auto" }}>
            <div style={{ background:"linear-gradient(145deg, rgba(2,6,40,.85) 0%, rgba(3,9,52,.9) 100%)", border:"1px solid rgba(255,255,255,.09)", borderRadius:"1.5rem", padding:"clamp(1.25rem, 5vw, 2rem)" }}>
              <ContactForm page="iletisim" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Harita ── */}
      <section style={{ padding:0, background:"#01051f" }} id="harita">
        <div style={{
          height:280,
          background:"linear-gradient(135deg, rgba(7,20,102,.55), rgba(5,13,72,.8))",
          display:"flex", alignItems:"center", justifyContent:"center",
          position:"relative", overflow:"hidden",
          borderTop:"1px solid rgba(255,255,255,.07)",
        }}>
          <div className="grid-bg"/>
          <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
            <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>📍</div>
            <p style={{ color:"rgba(255,255,255,.75)", fontWeight:700, marginBottom:".5rem", fontFamily:"var(--font-archivo)" }}>
              EGG Özel Güvenlik Eğitim Kurumu
            </p>
            <p style={{ color:"rgba(255,255,255,.38)", fontSize:".875rem", marginBottom:"1.375rem" }}>{CONTACT.addressFull}</p>
            <div style={{ display:"flex", gap:".75rem", flexWrap:"wrap", justifyContent:"center" }}>
              <MapBtn page="iletisim" label="Google Maps'te Aç" />
              <WaBtn waKey="default" page="iletisim" label="WhatsApp'tan Ulaş" size="sm" />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

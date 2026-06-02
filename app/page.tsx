import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PROGRAMS } from "@/lib/config";
import { waUrl, CONTACT } from "@/lib/contact";
import { BLOG_POSTS, CTA } from "@/lib/content";
import CTASection from "@/components/sections/CTASection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import StaggerGrid from "@/components/ui/StaggerGrid";
import WaIcon from "@/components/ui/WaIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";
import HeroSecurityVisual from "@/components/sections/HeroSecurityVisual";
import { SEO_BASE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EGG Özel Güvenlik Eğitim Kurumu | Adana Özel Güvenlik Kursu",
  description: "Adana'da silahlı, silahsız ve yenileme özel güvenlik eğitimi. İçişleri Bakanlığı onaylı, %94 sınav başarısı, 2.500+ mezun. Kayıt: 0546 267 89 79.",
  keywords: ["Adana özel güvenlik kursu","özel güvenlik eğitimi","güvenlik kursu Adana","özel güvenlik belgesi","silahlı güvenlik kursu Adana"],
  alternates: { canonical: SEO_BASE.siteUrl },
  openGraph: { title: "EGG Özel Güvenlik Eğitim Kurumu | Adana", description: "Silahlı, silahsız ve yenileme özel güvenlik eğitimi. Devlet onaylı, %94 başarı.", url: SEO_BASE.siteUrl, locale: "tr_TR", type: "website" },
};

const STATS = [
  { val:"2.500+", lbl:"Mezun Öğrenci", sub:"Türkiye genelinde aktif", icon:"🎓" },
  { val:"%94", lbl:"Sınav Başarısı", sub:"Sektör ortalamasının üzerinde", icon:"🎯" },
  { val:"15+", lbl:"Yıllık Deneyim", sub:"2008'den bu yana faaliyette", icon:"⭐" },
  { val:"120+", lbl:"İş Ortağı", sub:"Aktif istihdam ağı", icon:"🤝" },
];


const STEPS_PREVIEW = [
  { n:"1", ic:"💬", t:"WhatsApp'tan Bilgi Al", d:"7/24 aktif hattımızdan eğitim dönemi, kontenjan ve ücret bilgisini anında öğrenin." },
  { n:"2", ic:"📄", t:"Evraklarını Hazırla", d:"Danışmanın gönderdiği listeye göre belgelerini tamamla, kurumumuza teslim et." },
  { n:"3", ic:"🏫", t:"Eğitimini Tamamla", d:"Teorik, uygulamalı ve (silahlı için) poligon eğitimini tamamlayarak sınava hazırlan." },
  { n:"4", ic:"🏅", t:"Sertifikanı Al", d:"Bakanlık sınavını geç, devlet onaylı özel güvenlik kimliğini teslim al, kariyerine başla." },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: "#01051f",
      }}>

        {/* ── ARKA PLAN VİDEO — tam ekran ── */}
        <HeroSecurityVisual/>

        {/* ── Arka grid dokusu ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 3,
          backgroundImage: "linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 80% 80% at 35% 50%,black 10%,transparent 100%)",
          pointerEvents: "none",
        }}/>

        {/* ── Alt fade ── */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:200, background:"linear-gradient(to top,#01031a,transparent)", pointerEvents:"none", zIndex:4 }}/>

        {/* ════ İÇERİK — videonun üstünde ════ */}
        <div className="wrapper" style={{
          position: "relative", zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "7rem",
          paddingBottom: "3rem",
        }}>
          {/* Onay badge */}
          <div className="animate-fadeup" style={{
            display: "inline-flex", alignItems: "center", gap: ".55rem",
            padding: ".38rem .9rem", borderRadius: 999,
            border: "1px solid rgba(251,191,36,.28)",
            background: "rgba(1,5,30,.55)",
            backdropFilter: "blur(16px)",
            marginBottom: "1.5rem",
            width: "fit-content",
          }}>
            <span style={{ fontSize: ".75rem" }}>🛡️</span>
            <span style={{ color:"#fcd34d", fontSize:".67rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase" }}>
              İçişleri Bakanlığı Onaylı · {SITE.city}
            </span>
          </div>

          {/* H1 */}
          <h1 className="animate-fadeup delay-1" style={{
            fontFamily: "var(--font-archivo)", fontWeight: 900,
            fontSize: "clamp(2.5rem,6vw,4.5rem)",
            lineHeight: 1.0, color: "#fff", letterSpacing: "-.04em",
            marginBottom: "1.25rem",
            maxWidth: "14ch",
            textShadow: "0 2px 40px rgba(0,0,0,.8)",
          }}>
            Özel Güvenlik<br/>Kariyerine<br/>
            <span style={{
              background: "linear-gradient(90deg,#d97706,#fcd34d,#f59e0b,#fcd34d,#d97706)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
              animation: "shimmerText 5s linear infinite",
            }}>EGG ile Güçlü<br/>Başlangıç</span>
          </h1>

          {/* Açıklama */}
          <p className="animate-fadeup delay-2" style={{
            color: "rgba(255,255,255,.75)", fontSize: "clamp(.9rem,1.8vw,1.05rem)",
            lineHeight: 1.78, maxWidth: "32rem", marginBottom: "2rem",
            textShadow: "0 1px 20px rgba(0,0,0,.9)",
          }}>
            Silahlı, silahsız ve yenileme özel güvenlik eğitimlerinde profesyonel eğitmen kadrosu, düzenli süreç takibi ve kariyer odaklı yaklaşımıyla geleceğine güvenle adım at.
          </p>

          {/* CTA butonları */}
          <div className="animate-fadeup delay-3" style={{ display:"flex", flexWrap:"wrap", gap:".875rem", marginBottom:"1.5rem" }}>
            <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <WaIcon size={18}/> {CTA.wa}
            </a>
            <Link href="/egitimler" className="btn btn-secondary">{CTA.match} →</Link>
          </div>

          {/* Güven rozetleri */}
          <div className="animate-fadeup delay-4" style={{ display:"flex", flexWrap:"wrap", gap:".5rem" }}>
            {[
              { ic:"📍", t:`${SITE.city} Merkezli` },
              { ic:"⭐", t:"%94 Başarı Oranı" },
              { ic:"🛡️", t:"Devlet Onaylı" },
              { ic:"🎓", t:"2.500+ Mezun" },
            ].map(r => (
              <span key={r.t} style={{
                display:"inline-flex", alignItems:"center", gap:".4rem",
                padding:".32rem .8rem", borderRadius:999,
                background:"rgba(1,5,30,.55)",
                backdropFilter:"blur(12px)",
                border:"1px solid rgba(255,255,255,.15)",
                color:"rgba(255,255,255,.85)", fontSize:".72rem",
              }}>
                <span style={{ fontSize:".8rem" }}>{r.ic}</span> {r.t}
              </span>
            ))}
          </div>
        </div>

        {/* ════ KAYAN İSTATİSTİK ŞERİDİ ════ */}
        <div style={{
          position: "relative", zIndex: 10,
          borderTop: "1px solid rgba(255,255,255,.08)",
          background: "rgba(1,5,30,.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          overflow: "hidden",
          padding: ".75rem 0",
        }}>
          {/* Sol fade maskesi */}
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:120, background:"linear-gradient(to right, rgba(1,5,30,.9), transparent)", zIndex:2, pointerEvents:"none" }}/>
          {/* Sağ fade maskesi */}
          <div style={{ position:"absolute", right:0, top:0, bottom:0, width:120, background:"linear-gradient(to left, rgba(1,5,30,.9), transparent)", zIndex:2, pointerEvents:"none" }}/>

          {/* Kayan şerit */}
          <div className="marquee-track">
            {/* İki kopya = kesintisiz loop */}
            {[0, 1].map(copy => (
              <div key={copy} className="marquee-row" aria-hidden={copy === 1}>
                {STATS.map(s => (
                  <div key={s.val + copy} className="marquee-item">
                    <span className="marquee-icon">{s.icon}</span>
                    <span className="marquee-val">{s.val}</span>
                    <span className="marquee-lbl">{s.lbl}</span>
                    <span className="marquee-dot">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ══════════════ EĞİTİM PROGRAMLARI ══════════════ */}
      <section style={{
        padding: "4rem 0 0",
        position: "relative",
        background: "linear-gradient(180deg, #020830 0%, #010520 100%)",
        overflow: "hidden",
      }}>
        <div className="grid-bg"/>
        {/* Arka ışık efektleri */}
        <div style={{ position:"absolute", top:-100, left:"50%", transform:"translateX(-50%)", width:800, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(251,191,36,.06) 0%, transparent 65%)", pointerEvents:"none" }}/>

        <div className="wrapper rel">
          {/* Başlık */}
          <AnimateOnScroll style={{ textAlign:"center", marginBottom:"3rem" }}>
            <p className="s-label" style={{ justifyContent:"center" }}>🎯 Eğitim Programları</p>
            <h2 className="s-title">Size Uygun Özel Güvenlik <span className="text-gold">Eğitimini Seçin</span></h2>
          </AnimateOnScroll>

          {/* 3 Kart - referans görsele göre */}
          <StaggerGrid className="grid-1 grid-3" style={{ gap:"1.5rem", paddingBottom:"3rem" }}>
            {PROGRAMS.map((p, idx) => {
              const gradBtn =
                p.color === "gold"  ? "linear-gradient(135deg, #d97706, #fbbf24)" :
                p.color === "blue"  ? "linear-gradient(135deg, #1e40af, #3b82f6)" :
                                      "linear-gradient(135deg, #6b21a8, #a855f7)";
              const borderClr =
                p.color === "gold"  ? "rgba(251,191,36,.35)" :
                p.color === "blue"  ? "rgba(59,130,246,.35)" :
                                      "rgba(168,85,247,.35)";
              const iconBg =
                p.color === "gold"  ? "rgba(251,191,36,.15)" :
                p.color === "blue"  ? "rgba(59,130,246,.15)" :
                                      "rgba(168,85,247,.15)";
              const iconClr =
                p.color === "gold"  ? "#fbbf24" :
                p.color === "blue"  ? "#60a5fa" :
                                      "#c084fc";
              const badgeClr =
                p.badge === "En Popüler" ? { bg:"rgba(251,191,36,.15)", border:"rgba(251,191,36,.4)", txt:"#fbbf24" } :
                                           { bg:"rgba(168,85,247,.15)", border:"rgba(168,85,247,.4)", txt:"#c084fc" };

              return (
                <div key={p.id} style={{
                  display:"flex", flexDirection:"column",
                  borderRadius:"1.25rem",
                  border:`1px solid ${borderClr}`,
                  background:"linear-gradient(160deg, rgba(5,14,77,.7) 0%, rgba(2,6,38,.9) 100%)",
                  padding:"2rem",
                  position:"relative",
                  overflow:"hidden",
                  boxShadow:`0 8px 40px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.06)`,
                }}>
                  {/* Üst ışık çizgisi */}
                  <div style={{ position:"absolute", top:0, left:"10%", right:"10%", height:1, background:`linear-gradient(90deg, transparent, ${borderClr}, transparent)` }}/>

                  {/* Badge */}
                  {p.badge && (
                    <div style={{
                      position:"absolute", top:"1.25rem", right:"1.25rem",
                      display:"inline-flex", alignItems:"center", gap:".35rem",
                      padding:".28rem .75rem", borderRadius:999,
                      background: badgeClr.bg,
                      border:`1px solid ${badgeClr.border}`,
                      color: badgeClr.txt,
                      fontSize:".72rem", fontWeight:700,
                    }}>
                      ⭐ {p.badge}
                    </div>
                  )}

                  {/* İkon - büyük daire */}
                  <div style={{
                    width:72, height:72, borderRadius:"50%",
                    background: iconBg,
                    border:`1px solid ${borderClr}`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:"2rem", marginBottom:"1.5rem",
                    boxShadow:`0 0 20px ${iconBg}`,
                  }}>
                    {p.icon === "hand"
                      ? <img src="/images/hand.png" alt="Silahlı Güvenlik" style={{ width:36, height:36, objectFit:"contain" }}/>
                      : <span style={{ fontSize:"2rem" }}>{p.icon}</span>
                    }
                  </div>

                  {/* Başlık */}
                  <h3 style={{
                    fontFamily:"var(--font-archivo)", fontWeight:800,
                    fontSize:"1.25rem", color:"#fff", marginBottom:".75rem",
                    letterSpacing:"-.02em", lineHeight:1.2,
                  }}>{p.title}</h3>

                  {/* Açıklama */}
                  <p style={{ color:"rgba(255,255,255,.6)", fontSize:".875rem", lineHeight:1.72, marginBottom:"1.25rem" }}>{p.desc}</p>

                  {/* Süre */}
                  <div style={{
                    display:"flex", alignItems:"center", gap:".5rem",
                    padding:".55rem 1rem", borderRadius:".75rem",
                    background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)",
                    fontSize:".8rem", color:"rgba(255,255,255,.5)", marginBottom:"1.25rem",
                  }}>
                    <span>⏱</span> {p.duration} Eğitim Süresi
                  </div>

                  {/* Özellikler */}
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:".6rem", marginBottom:"1.75rem", flex:1 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ display:"flex", alignItems:"flex-start", gap:".625rem", fontSize:".875rem", color:"rgba(255,255,255,.75)" }}>
                        <span style={{
                          width:20, height:20, borderRadius:"50%", flexShrink:0,
                          background: iconBg, border:`1px solid ${borderClr}`,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          fontSize:".65rem", color:iconClr, marginTop:".1rem",
                        }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Buton - gradient */}
                  <Link href={p.href} style={{
                    display:"flex", alignItems:"center", justifyContent:"center",
                    gap:".5rem", padding:".875rem 1.5rem",
                    borderRadius:".875rem", fontWeight:700, fontSize:".9rem",
                    background: gradBtn,
                    color: p.color === "gold" ? "#01051f" : "#fff",
                    textDecoration:"none", marginBottom:".875rem",
                    boxShadow:`0 4px 20px rgba(0,0,0,.3)`,
                    transition:"transform .2s, box-shadow .2s",
                  }}>
                    Detayları İncele →
                  </Link>

                  {/* Alt link */}
                  <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" style={{
                    textAlign:"center", color:iconClr, fontSize:".8rem",
                    fontWeight:600, display:"block", textDecoration:"none",
                    opacity:.75,
                  }}>
                    {CTA.price}
                  </a>
                </div>
              );
            })}
          </StaggerGrid>
        </div>

        {/* Alt özellik şeridi - referans görseldeki 4 kutucuk */}
        <div style={{
          background:"rgba(1,4,20,.6)",
          borderTop:"1px solid rgba(255,255,255,.07)",
          backdropFilter:"blur(12px)",
        }}>
          <div className="wrapper">
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(2,1fr)",
              gap:0,
            }}
            className="feat-strip"
            >
              {[
                { ic:"🛡️", t:"%100 Resmi ve Onaylı", d:"Devlet onaylı sertifika" },
                { ic:"👨‍🏫", t:"Deneyimli Eğitmen Kadrosu", d:"Alanında uzman eğitmenler" },
                { ic:"🏆", t:"Yüksek Başarı Oranı", d:"%94 başarı oranı" },
                { ic:"📋", t:"Esnek Eğitim Seçenekleri", d:"Online ve yüz yüze seçenek" },
              ].map((f, i) => (
                <div key={f.t} style={{
                  display:"flex", alignItems:"center", gap:"1rem",
                  padding:"1.25rem 1.5rem",
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,.07)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,.07)" : "none",
                }}>
                  <div style={{
                    width:44, height:44, borderRadius:".75rem", flexShrink:0,
                    background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.2)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:"1.25rem",
                  }}>{f.ic}</div>
                  <div>
                    <div style={{ color:"#fff", fontWeight:700, fontSize:".875rem" }}>{f.t}</div>
                    <div style={{ color:"rgba(255,255,255,.45)", fontSize:".75rem", marginTop:".15rem" }}>{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ ÖĞRENCİ YORUMLARI ══════════════ */}
      <section style={{
        padding: "4rem 0",
        background: "linear-gradient(180deg, #010520 0%, #020830 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="grid-bg"/>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:700, height:300, borderRadius:"50%", background:"radial-gradient(circle, rgba(251,191,36,.04) 0%, transparent 65%)", pointerEvents:"none" }}/>

        <div className="wrapper rel" style={{ marginBottom:"2.5rem" }}>
          <AnimateOnScroll style={{ textAlign:"center" }}>
            <p className="s-label" style={{ justifyContent:"center" }}>🛡️ Neden EGG?</p>
            <h2 className="s-title">Mezunlarımız <span className="text-gold">Ne Diyor?</span></h2>
          </AnimateOnScroll>
        </div>

        {/* Kayan yorumlar — satır 1 (soldan sağa) */}
        <div className="review-track-wrap" style={{ marginBottom:"1.25rem" }}>
          <div className="review-track review-track-ltr">
            {[
              { name:"Mehmet Y.", city:"Adana", stars:5, text:"EGG sayesinde silahlı güvenlik belgesini aldım. Eğitmenler çok deneyimliydi, sınav sürecinde hiç yalnız hissetmedim.", job:"Silahlı Güvenlik Görevlisi" },
              { name:"Fatma K.", city:"Mersin", stars:5, text:"Yenileme eğitimini burada tamamladım. Hızlı ve sorunsuz bir süreç oldu. Kesinlikle tavsiye ediyorum.", job:"Özel Güvenlik Uzmanı" },
              { name:"Ali R.", city:"Adana", stars:5, text:"Silahsız eğitim programı çok kapsamlıydı. Sınava girerken kendinize güveniyorsunuz. %94 başarı oranı boşuna değil.", job:"Site Güvenlik Amiri" },
              { name:"Selin A.", city:"Osmaniye", stars:5, text:"Danışmanlar her aşamada yardımcı oldu. Evrak sürecini bile onlar takip etti. Harika bir deneyimdi.", job:"Alışveriş Merkezi Güvenliği" },
              { name:"Hüseyin T.", city:"Adana", stars:5, text:"3 yıldır bu alandayım, EGG'de aldığım eğitim kariyerimi değiştirdi. Pratik ve teorik denge mükemmeldi.", job:"Güvenlik Şefi" },
            ].concat([
              { name:"Mehmet Y.", city:"Adana", stars:5, text:"EGG sayesinde silahlı güvenlik belgesini aldım. Eğitmenler çok deneyimliydi, sınav sürecinde hiç yalnız hissetmedim.", job:"Silahlı Güvenlik Görevlisi" },
              { name:"Fatma K.", city:"Mersin", stars:5, text:"Yenileme eğitimini burada tamamladım. Hızlı ve sorunsuz bir süreç oldu. Kesinlikle tavsiye ediyorum.", job:"Özel Güvenlik Uzmanı" },
              { name:"Ali R.", city:"Adana", stars:5, text:"Silahsız eğitim programı çok kapsamlıydı. Sınava girerken kendinize güveniyorsunuz. %94 başarı oranı boşuna değil.", job:"Site Güvenlik Amiri" },
              { name:"Selin A.", city:"Osmaniye", stars:5, text:"Danışmanlar her aşamada yardımcı oldu. Evrak sürecini bile onlar takip etti. Harika bir deneyimdi.", job:"Alışveriş Merkezi Güvenliği" },
              { name:"Hüseyin T.", city:"Adana", stars:5, text:"3 yıldır bu alandayım, EGG'de aldığım eğitim kariyerimi değiştirdi. Pratik ve teorik denge mükemmeldi.", job:"Güvenlik Şefi" },
            ]).map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">{"⭐".repeat(r.stars)}</div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="review-footer">
                  <div className="review-avatar">{r.name[0]}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-meta">{r.job} · {r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kayan yorumlar — satır 2 (sağdan sola) */}
        <div className="review-track-wrap">
          <div className="review-track review-track-rtl">
            {[
              { name:"Kerem B.", city:"Adana", stars:5, text:"Eğitim kalitesi gerçekten yüksek. Poligon tatbikatları çok faydalıydı. Sınavı ilk denemede geçtim.", job:"Güvenlik Koordinatörü" },
              { name:"Ayşe M.", city:"Gaziantep", stars:5, text:"Silahsız güvenlik kursunu tamamladım. Hocalar sabırlı ve bilgiliydi. Belgeyi kısa sürede aldım.", job:"Banka Güvenlik Personeli" },
              { name:"Mustafa D.", city:"Adana", stars:5, text:"5 yıl önce de EGG'den aldım, yenileme için tekrar geldim. Güven duyduğum tek kurum bu.", job:"Kıdemli Güvenlik Uzmanı" },
              { name:"Elif Ç.", city:"Hatay", stars:5, text:"Kadın güvenlik personeli için de çok uygun bir ortam. Tüm süreçte destek aldım, teşekkürler.", job:"AVM Güvenlik Görevlisi" },
              { name:"Oğuz S.", city:"Adana", stars:5, text:"İş garantisi olmasa da 120+ ortakları sayesinde hemen iş buldum. Gerçekten fark yaratan bir kurum.", job:"Liman Güvenlik Görevlisi" },
            ].concat([
              { name:"Kerem B.", city:"Adana", stars:5, text:"Eğitim kalitesi gerçekten yüksek. Poligon tatbikatları çok faydalıydı. Sınavı ilk denemede geçtim.", job:"Güvenlik Koordinatörü" },
              { name:"Ayşe M.", city:"Gaziantep", stars:5, text:"Silahsız güvenlik kursunu tamamladım. Hocalar sabırlı ve bilgiliydi. Belgeyi kısa sürede aldım.", job:"Banka Güvenlik Personeli" },
              { name:"Mustafa D.", city:"Adana", stars:5, text:"5 yıl önce de EGG'den aldım, yenileme için tekrar geldim. Güven duyduğum tek kurum bu.", job:"Kıdemli Güvenlik Uzmanı" },
              { name:"Elif Ç.", city:"Hatay", stars:5, text:"Kadın güvenlik personeli için de çok uygun bir ortam. Tüm süreçte destek aldım, teşekkürler.", job:"AVM Güvenlik Görevlisi" },
              { name:"Oğuz S.", city:"Adana", stars:5, text:"İş garantisi olmasa da 120+ ortakları sayesinde hemen iş buldum. Gerçekten fark yaratan bir kurum.", job:"Liman Güvenlik Görevlisi" },
            ]).map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">{"⭐".repeat(r.stars)}</div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="review-footer">
                  <div className="review-avatar">{r.name[0]}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-meta">{r.job} · {r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sol/sağ fade maskesi */}
        <div style={{ position:"absolute", top:0, bottom:0, left:0, width:120, background:"linear-gradient(to right, #010520, transparent)", zIndex:10, pointerEvents:"none" }}/>
        <div style={{ position:"absolute", top:0, bottom:0, right:0, width:120, background:"linear-gradient(to left, #010520, transparent)", zIndex:10, pointerEvents:"none" }}/>
      </section>

            {/* ══════════════ BLOG ══════════════ */}
      <section style={{
        padding:"5rem 0",
        position:"relative",
        background:"linear-gradient(180deg,#010520 0%,#020830 100%)",
        overflow:"hidden",
      }}>
        <div className="grid-bg"/>

        {/* Dekoratif arka ışık */}
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:900, height:400, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(251,191,36,.04) 0%, transparent 65%)", pointerEvents:"none" }}/>

        <div className="wrapper rel">

          {/* Başlık — referans görseldeki gibi */}
          <div style={{ textAlign:"center", marginBottom:"3rem" }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:".5rem",
              padding:".35rem 1.1rem", borderRadius:999,
              border:"1px solid rgba(255,255,255,.15)",
              background:"rgba(255,255,255,.05)",
              backdropFilter:"blur(10px)",
              marginBottom:"1.25rem",
            }}>
              <span style={{ fontSize:".8rem" }}>📖</span>
              <span style={{ color:"rgba(255,255,255,.7)", fontSize:".75rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase" }}>Blog &amp; Rehber</span>
            </div>

            <h2 style={{
              fontFamily:"var(--font-archivo)", fontWeight:900,
              fontSize:"clamp(1.875rem,5vw,3rem)",
              lineHeight:1.1, letterSpacing:"-.03em",
              color:"#fff", marginBottom:".875rem",
            }}>
              Güvenlik Dünyasından<br/>
              <span className="text-gold">En Güncel İçerikler</span>
            </h2>
            <p style={{ color:"rgba(255,255,255,.55)", fontSize:".95rem", lineHeight:1.7, maxWidth:"38rem", margin:"0 auto" }}>
              Özel güvenlik sektörü, mevzuatlar, sınav süreçleri ve kariyer fırsatları hakkında uzman içerikleri keşfedin.
            </p>
          </div>

          {/* Blog kartları — referans görsele göre */}
          <StaggerGrid className="grid-1 grid-3" style={{ gap:"1.5rem", marginBottom:"2.5rem" }}>
            {BLOG_POSTS.slice(0, 3).map(post => {
              const tagColors: Record<string,{bg:string,txt:string}> = {
                "tag-green": { bg:"#059669", txt:"#fff" },
                "tag-gold":  { bg:"#d97706", txt:"#fff" },
                "tag-blue":  { bg:"#2563eb", txt:"#fff" },
                "tag-gray":  { bg:"#4b5563", txt:"#fff" },
              };
              const tc = tagColors[post.catColor] || { bg:"#374151", txt:"#fff" };
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration:"none", display:"flex", flexDirection:"column" }}>
                  <div style={{
                    display:"flex", flexDirection:"column",
                    borderRadius:"1.125rem",
                    background:"linear-gradient(160deg,rgba(5,14,77,.7) 0%,rgba(2,6,38,.9) 100%)",
                    border:"1px solid rgba(255,255,255,.08)",
                    overflow:"hidden",
                    boxShadow:"0 4px 24px rgba(0,0,0,.35)",
                    transition:"transform .25s,box-shadow .25s,border-color .25s",
                    height:"100%",
                    cursor:"pointer",
                  }}
className="blog-card-new"
                  >
                    {/* Görsel alanı */}
                    <div style={{ position:"relative", height:200, overflow:"hidden" }}>
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
                        />
                      ) : (
                        <div style={{ width:"100%", height:"100%", background:"linear-gradient(135deg,#0a1628,#1e3a8a)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                          <span style={{ fontSize:"3rem", opacity:.4 }}>🛡️</span>
                        </div>
                      )}
                      {/* Görsel üst badge + okuma süresi */}
                      <div style={{ position:"absolute", top:"1rem", left:"1rem", display:"flex", alignItems:"center", gap:".5rem" }}>
                        <span style={{ padding:".28rem .75rem", borderRadius:999, background:tc.bg, color:tc.txt, fontSize:".72rem", fontWeight:700 }}>
                          {post.cat}
                        </span>
                        <span style={{ display:"flex", alignItems:"center", gap:".3rem", color:"rgba(255,255,255,.75)", fontSize:".72rem", background:"rgba(0,0,0,.45)", backdropFilter:"blur(8px)", padding:".25rem .6rem", borderRadius:999 }}>
                          <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                          {post.read} okuma
                        </span>
                      </div>
                      {/* Bookmark ikonu */}
                      <div style={{ position:"absolute", top:"1rem", right:"1rem", width:34, height:34, borderRadius:".5rem", background:"rgba(0,0,0,.45)", backdropFilter:"blur(8px)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                      </div>
                      {/* Alt altın çizgi */}
                      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:3, background:"linear-gradient(90deg, #d97706, #fbbf24, #d97706)" }}/>
                    </div>

                    {/* İçerik */}
                    <div style={{ padding:"1.5rem", display:"flex", flexDirection:"column", flex:1 }}>
                      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:".75rem", marginBottom:".75rem" }}>
                        <h3 style={{
                          fontFamily:"var(--font-archivo)", fontWeight:800,
                          fontSize:"1.05rem", color:"#fff", lineHeight:1.3,
                          letterSpacing:"-.02em",
                        }}>{post.title}</h3>
                        <div style={{ width:28, height:28, borderRadius:".5rem", background:"rgba(251,191,36,.15)", border:"1px solid rgba(251,191,36,.3)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                          <svg width="12" height="12" fill="none" stroke="#fbbf24" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </div>
                      </div>
                      <p style={{ color:"rgba(255,255,255,.55)", fontSize:".85rem", lineHeight:1.7, marginBottom:"1.25rem", flex:1 }}>{post.desc}</p>
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:".875rem", borderTop:"1px solid rgba(255,255,255,.07)" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:".4rem", color:"rgba(255,255,255,.4)", fontSize:".78rem" }}>
                          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {post.date}
                        </div>
                        <span style={{ color:"#fbbf24", fontSize:".82rem", fontWeight:700, display:"flex", alignItems:"center", gap:".3rem" }}>
                          Devamını Oku
                          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </StaggerGrid>

          {/* Tüm yazılar butonu — referans görseldeki gibi oval */}
          <div style={{ textAlign:"center" }}>
            <Link href="/blog" style={{
              display:"inline-flex", alignItems:"center", gap:".6rem",
              padding:".875rem 2.5rem", borderRadius:999,
              border:"1px solid rgba(255,255,255,.2)",
              background:"rgba(255,255,255,.05)",
              backdropFilter:"blur(12px)",
              color:"#fff", fontWeight:700, fontSize:".9rem",
              textDecoration:"none",
              transition:"all .25s",
            }}>
              Tüm Blog Yazıları
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`${SITE.city}'da Özel Güvenlik Kariyerine Bugün Başla`}
        sub="EGG Özel Güvenlik Eğitim Kurumu ile eğitim sürecini net, güvenilir ve profesyonel şekilde planla. Danışmanımız seni yönlendirir."
        trustPills={["Ücretsiz Danışmanlık", "7/24 WhatsApp", "Devlet Onaylı Belge", "%94 Başarı"]}
      />
    </>
  );
}

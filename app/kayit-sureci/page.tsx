import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/config";
import { waUrl, CONTACT } from "@/lib/contact";
import { CTA } from "@/lib/content";
import ContactForm from "@/components/sections/ContactForm";
import WaIcon from "@/components/ui/WaIcon";
import { SEO_BASE, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Özel Güvenlik Kursu Kayıt Süreci | EGG Güvenlik Adana",
  description: "Adana özel güvenlik kursuna kayıt nasıl yapılır? Adım adım süreç, evrak listesi, danışman görüşmesi. Ücretsiz bilgi: 0546 267 89 79.",
  alternates: { canonical: `${SEO_BASE.siteUrl}/kayit-sureci` },
};

const STEPS = [
  {
    n: 1, ic: "💬",
    title: "WhatsApp'tan veya Telefonla Bilgi Alın",
    desc: "Kayıt sürecinin ilk adımı bilgi almaktır. WhatsApp hattımıza yazın ya da telefonu arayın. Danışmanımız eğitim dönemini, kontenjanı ve kurs ücretini paylaşır.",
    note: "En hızlı yanıt WhatsApp üzerinden gelir. 7/24 mesaj atabilirsiniz.",
    img: "/images/steps/step-1.webp",
    badges: [],
  },
  {
    n: 2, ic: "📞",
    title: "Danışman Görüşmesi Yapın",
    desc: "Uzman danışmanımız sizi arar ve durumunuzu değerlendirir. Silahlı mı, silahsız mı, yenileme mi? Hangi eğitimin size uygun olduğunu birlikte belirleriz.",
    note: "",
    img: "/images/steps/step-2.webp",
    badges: ["Uzman Danışman","Ortalama 5-10 dk","%100 Size Özel Yönlendirme"],
  },
  {
    n: 3, ic: "🎯",
    title: "Eğitim Programınızı Seçin",
    desc: "Danışmanınızın yönlendirmesiyle hedeflerinize en uygun programı seçin. Eğitim takvimi, başlangıç tarihi ve süreç hakkında net bilgi alırsınız.",
    note: "",
    img: "/images/steps/step-3.webp",
    badges: ["Esnek Eğitim Takvimi","Online/Yüz Yüze","Deneyimli Eğitmen Kadrosu"],
  },
  {
    n: 4, ic: "📄",
    title: "Evraklarınızı Hazırlayın",
    desc: "Danışmanınız size programa özel eksiksiz evrak listesini gönderir. Belgeleri hazırlayıp kurumumuza teslim edin. Eksik evrak durumunda anında bilgilendirilirsiniz.",
    note: "",
    img: "/images/steps/step-4.webp",
    badges: ["Eksiksiz Evrak Kontrolü","Anlık Bilgilendirme","Güvenli Evrak Teslimi"],
  },
  {
    n: 5, ic: "🏫",
    title: "Eğitiminize Başlayın",
    desc: "Belirlenen tarihte eğitiminize katılın. Teorik dersler, uygulamalı tatbikatlar ve silahlı program için poligon eğitimi bu süreçte tamamlanır.",
    note: "",
    img: "/images/steps/step-5.webp",
    badges: ["Teorik + Uygulamalı","Poligon Eğitimi","%100 Katılımcı Takibi"],
  },
  {
    n: 6, ic: "🏅",
    title: "Sınava Girin ve Belgenizi Alın",
    desc: "EGG, Bakanlık sınav takvimini takip ederek sizi bilgilendirir. Sınavı başarıyla geçtikten sonra devlet onaylı özel güvenlik kimliğiniz teslim alınır.",
    note: "",
    img: "/images/steps/step-6.webp",
    badges: ["Devlet Onaylı Belge","Yüksek Başarı Oranı","Hızlı Belge Teslimi"],
    gold: true,
  },
];

const BOTTOM_BADGES = [
  { ic:"🛡️", t:"Devlet Onaylı Eğitim Kurumu" },
  { ic:"🔒", t:"%100 Güvenli Veri Koruma" },
  { ic:"⚡", t:"Hızlı ve Kesintisiz Süreç Yönetimi" },
  { ic:"🌍", t:"Türkiye Genelinde 81 İlde Hizmet" },
];

export default function KayitSureciPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name:"Ana Sayfa", url:"/" },
    { name:"Kayıt Süreci", url:"/kayit-sureci" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>

      {/* ══ HERO — Başlık + Adım Progress ══ */}
      <section style={{
        padding:"6rem 0 3rem",
        background:"linear-gradient(180deg,#010316 0%,#020830 100%)",
        position:"relative", overflow:"hidden",
      }}>
        <div className="grid-bg"/>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:800, height:400, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(251,191,36,.05) 0%,transparent 65%)", pointerEvents:"none" }}/>

        <div className="wrapper rel" style={{ textAlign:"center" }}>
          {/* Üst badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:".5rem", padding:".3rem 1rem", borderRadius:999, border:"1px solid rgba(251,191,36,.3)", background:"rgba(251,191,36,.08)", marginBottom:"1.5rem" }}>
            <span style={{ color:"#fbbf24" }}>⭐</span>
            <span style={{ color:"#fcd34d", fontSize:".72rem", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase" }}>6 Adımda Kayıt Süreci</span>
            <span style={{ color:"#fbbf24" }}>⭐</span>
          </div>

          <h1 style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"clamp(2rem,6vw,3.5rem)", lineHeight:1.1, letterSpacing:"-.04em", color:"#fff", marginBottom:"1rem" }}>
            Özel Güvenlik Kursuna<br/>
            Kayıt <span style={{ background:"linear-gradient(90deg,#d97706,#fbbf24,#f59e0b)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>Nasıl Yapılır?</span>
          </h1>
          <p style={{ color:"rgba(255,255,255,.55)", fontSize:".95rem", lineHeight:1.75, maxWidth:"42rem", margin:"0 auto 3rem" }}>
            WhatsApp&apos;tan bilgi almaktan belge teslim almaya kadar her adımda danışmanınız sürecinizi yönetir. Kafanızda belirsiz tek bir nokta kalmasın.
          </p>

          {/* Progress bar — 6 adım */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:0, maxWidth:640, margin:"0 auto" }}>
            {STEPS.map((s, i) => (
              <>
                <div key={s.n} style={{
                  width:38, height:38, borderRadius:"50%", flexShrink:0,
                  background: s.gold ? "linear-gradient(135deg,#d97706,#fbbf24)" : "rgba(251,191,36,.12)",
                  border:`2px solid ${s.gold ? "#fbbf24" : "rgba(251,191,36,.35)"}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  color: s.gold ? "#01051f" : "#fbbf24",
                  fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:".9rem",
                  boxShadow: s.gold ? "0 0 16px rgba(251,191,36,.4)" : "none",
                  zIndex:1,
                }}>{s.n}</div>
                {i < STEPS.length - 1 && (
                  <div key={`line-${i}`} style={{ flex:1, height:2, background:"linear-gradient(to right,rgba(251,191,36,.4),rgba(251,191,36,.15))" }}/>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ADIMLAR — 2 kolon zigzag ══ */}
      <section style={{ padding:"3rem 0 4rem", background:"linear-gradient(180deg,#020830 0%,#010520 100%)", position:"relative", overflow:"hidden" }}>
        <div className="grid-bg"/>

        {/* Dikey orta çizgi */}
        <div style={{ position:"absolute", left:"50%", top:0, bottom:0, width:2, background:"linear-gradient(to bottom,transparent,rgba(251,191,36,.2) 10%,rgba(251,191,36,.2) 90%,transparent)", transform:"translateX(-50%)", pointerEvents:"none" }}/>

        <div className="wrapper rel">
          <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
            {STEPS.map((s, idx) => {
              const isLeft = idx % 2 === 0;
              const borderClr = s.gold ? "rgba(251,191,36,.4)" : "rgba(255,255,255,.09)";
              return (
                <div key={s.n} className="step-row" style={{
                  display:"grid",
                  gridTemplateColumns:"1fr 48px 1fr",
                  gap:0,
                  alignItems:"center",
                }}>
                  {/* Sol içerik ya da boş */}
                  {isLeft ? (
                    <div className="step-card" style={{
                      background:"linear-gradient(160deg,rgba(5,14,77,.7) 0%,rgba(2,6,38,.9) 100%)",
                      border:`1px solid ${borderClr}`,
                      borderRadius:"1.125rem",
                      overflow:"hidden",
                      boxShadow:`0 8px 32px rgba(0,0,0,.4)${s.gold ? ", 0 0 24px rgba(251,191,36,.1)" : ""}`,
                      marginRight:"1rem",
                    }}>
                      {/* Görsel */}
                      <div style={{ height:180, overflow:"hidden", position:"relative" }}>
                        <img src={s.img} alt={s.title} style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
                        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 40%,rgba(2,6,38,.8))" }}/>
                        {/* Adım numarası görselin üstünde */}
                        <div style={{
                          position:"absolute", top:"1rem", left:"1rem",
                          width:36, height:36, borderRadius:"50%",
                          background: s.gold ? "linear-gradient(135deg,#d97706,#fbbf24)" : "rgba(2,6,38,.8)",
                          border:`2px solid ${s.gold ? "#fbbf24" : "rgba(251,191,36,.5)"}`,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          color: s.gold ? "#01051f" : "#fbbf24",
                          fontWeight:900, fontSize:".9rem",
                        }}>{s.n}</div>
                      </div>
                      {/* İçerik */}
                      <div style={{ padding:"1.25rem" }}>
                        <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:800, fontSize:"1.05rem", color:"#fff", marginBottom:".625rem", letterSpacing:"-.02em" }}>{s.title}</h3>
                        <p style={{ color:"rgba(255,255,255,.58)", fontSize:".85rem", lineHeight:1.75, marginBottom: s.note || s.badges.length ? ".875rem" : 0 }}>{s.desc}</p>
                        {s.note && (
                          <div style={{ display:"flex", alignItems:"flex-start", gap:".5rem", padding:".625rem .875rem", borderRadius:".75rem", background:"rgba(251,191,36,.07)", border:"1px solid rgba(251,191,36,.15)" }}>
                            <span style={{ color:"#fbbf24", fontSize:".8rem" }}>⚡</span>
                            <span style={{ color:"rgba(255,255,255,.55)", fontSize:".78rem" }}>{s.note}</span>
                          </div>
                        )}
                        {s.badges.length > 0 && (
                          <div style={{ display:"flex", flexWrap:"wrap", gap:".5rem" }}>
                            {s.badges.map(b => (
                              <span key={b} style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".25rem .625rem", borderRadius:999, background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", color:"rgba(255,255,255,.6)", fontSize:".72rem" }}>
                                <span style={{ color:"#fbbf24" }}>✓</span> {b}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : <div/>}

                  {/* Orta nokta */}
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
                    <div style={{
                      width:20, height:20, borderRadius:"50%",
                      background: s.gold ? "#fbbf24" : "rgba(251,191,36,.3)",
                      border:`2px solid ${s.gold ? "#fbbf24" : "rgba(251,191,36,.5)"}`,
                      boxShadow: s.gold ? "0 0 12px rgba(251,191,36,.5)" : "none",
                    }}/>
                  </div>

                  {/* Sağ içerik ya da boş */}
                  {!isLeft ? (
                    <div className="step-card" style={{
                      background:"linear-gradient(160deg,rgba(5,14,77,.7) 0%,rgba(2,6,38,.9) 100%)",
                      border:`1px solid ${borderClr}`,
                      borderRadius:"1.125rem",
                      overflow:"hidden",
                      boxShadow:`0 8px 32px rgba(0,0,0,.4)${s.gold ? ", 0 0 24px rgba(251,191,36,.1)" : ""}`,
                      marginLeft:"1rem",
                    }}>
                      <div style={{ height:180, overflow:"hidden", position:"relative" }}>
                        <img src={s.img} alt={s.title} style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
                        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 40%,rgba(2,6,38,.8))" }}/>
                        <div style={{
                          position:"absolute", top:"1rem", left:"1rem",
                          width:36, height:36, borderRadius:"50%",
                          background: s.gold ? "linear-gradient(135deg,#d97706,#fbbf24)" : "rgba(2,6,38,.8)",
                          border:`2px solid ${s.gold ? "#fbbf24" : "rgba(251,191,36,.5)"}`,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          color: s.gold ? "#01051f" : "#fbbf24",
                          fontWeight:900, fontSize:".9rem",
                        }}>{s.n}</div>
                      </div>
                      <div style={{ padding:"1.25rem" }}>
                        <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:800, fontSize:"1.05rem", color:"#fff", marginBottom:".625rem", letterSpacing:"-.02em" }}>{s.title}</h3>
                        <p style={{ color:"rgba(255,255,255,.58)", fontSize:".85rem", lineHeight:1.75, marginBottom: s.note || s.badges.length ? ".875rem" : 0 }}>{s.desc}</p>
                        {s.note && (
                          <div style={{ display:"flex", alignItems:"flex-start", gap:".5rem", padding:".625rem .875rem", borderRadius:".75rem", background:"rgba(251,191,36,.07)", border:"1px solid rgba(251,191,36,.15)" }}>
                            <span style={{ color:"#fbbf24", fontSize:".8rem" }}>⚡</span>
                            <span style={{ color:"rgba(255,255,255,.55)", fontSize:".78rem" }}>{s.note}</span>
                          </div>
                        )}
                        {s.badges.length > 0 && (
                          <div style={{ display:"flex", flexWrap:"wrap", gap:".5rem" }}>
                            {s.badges.map(b => (
                              <span key={b} style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".25rem .625rem", borderRadius:999, background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", color:"rgba(255,255,255,.6)", fontSize:".72rem" }}>
                                <span style={{ color:"#fbbf24" }}>✓</span> {b}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : <div/>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA — Kayıt Sürecini Hemen Başlatalım ══ */}
      <section style={{
        padding:"3.5rem 0",
        position:"relative", overflow:"hidden",
        borderTop:"1px solid rgba(251,191,36,.15)",
        borderBottom:"1px solid rgba(251,191,36,.15)",
        background:"#010a2e",
      }}>
        {/* Arka plan görseli */}
        <img src="/images/kayit-cta-bg.webp" alt="" aria-hidden="true" style={{
          position:"absolute", inset:0,
          width:"100%", height:"100%",
          objectFit:"cover", objectPosition:"center center",
          display:"block", zIndex:0,
          opacity:.55,
        }}/>
        {/* Koyu overlay — yazılar okunabilsin */}
        <div style={{ position:"absolute", inset:0, zIndex:1, background:"linear-gradient(105deg, rgba(1,10,46,.92) 0%, rgba(1,10,46,.75) 45%, rgba(1,10,46,.35) 75%, rgba(1,10,46,.15) 100%)", pointerEvents:"none" }}/>

        <div className="wrapper" style={{ position:"relative", zIndex:2 }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"center" }} className="cta-kayit-grid">

            {/* SOL: Metin + danışmanlar + güven rozetleri */}
            <div>
              {/* 7/24 AKTİF badge */}
              <div style={{ display:"inline-flex", alignItems:"center", gap:".4rem", padding:".28rem .75rem", borderRadius:999, border:"1px solid rgba(251,191,36,.35)", background:"rgba(0,0,0,.4)", marginBottom:"1.25rem" }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"#fbbf24", display:"inline-block", boxShadow:"0 0 6px #fbbf24" }}/>
                <span style={{ color:"#fcd34d", fontSize:".72rem", fontWeight:700, letterSpacing:".1em" }}>7/24 AKTİF</span>
              </div>

              {/* Başlık */}
              <h2 style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"clamp(1.875rem,4.5vw,3rem)", lineHeight:1.05, letterSpacing:"-.04em", marginBottom:"1rem" }}>
                <span style={{ color:"#fff" }}>Kaydınızı Bugün</span><br/>
                <span style={{ background:"linear-gradient(90deg,#d97706,#fbbf24,#f59e0b)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>Birlikte Başlatalım</span>
              </h2>

              <p style={{ color:"rgba(255,255,255,.6)", fontSize:".9rem", lineHeight:1.75, marginBottom:"1.75rem", maxWidth:"26rem" }}>
                Danışmanımız eğitim türünüzü belirlesin, evrak ve kayıt sürecinizi adım adım yönetsin.
              </p>

              {/* Danışman avatarları */}
              <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1.5rem" }}>
                <div style={{ display:"flex" }}>
                  {[
                    { bg:"#1a2a1a", txt:"👨" },
                    { bg:"#2a1a2a", txt:"👩" },
                    { bg:"#1a1a2a", txt:"👨" },
                  ].map((av,i) => (
                    <div key={i} style={{
                      width:52, height:52, borderRadius:"50%",
                      background:av.bg,
                      border:"2.5px solid rgba(251,191,36,.4)",
                      marginLeft: i > 0 ? -14 : 0,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:"1.4rem", overflow:"hidden",
                      boxShadow:"0 2px 12px rgba(0,0,0,.5)",
                    }}>{av.txt}</div>
                  ))}
                </div>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:".4rem", marginBottom:".2rem" }}>
                    <span style={{ width:7, height:7, borderRadius:"50%", background:"#25D366", display:"inline-block", boxShadow:"0 0 6px #25D366" }}/>
                    <span style={{ color:"rgba(255,255,255,.55)", fontSize:".82rem" }}>Şu anda</span>
                  </div>
                  <span style={{ color:"#fff", fontWeight:800, fontSize:"1rem" }}>12 danışman</span>
                  <span style={{ color:"rgba(255,255,255,.55)", fontSize:".82rem" }}> sizin için hazır.</span>
                </div>
              </div>

              {/* Alt güven rozetleri */}
              <div style={{ display:"flex", gap:"1.5rem", flexWrap:"wrap" }}>
                {[
                  { ic:"🔒", t:"KVKK'ya Uygun", d:"Kişisel verileriniz güvende." },
                  { ic:"🛡️", t:"Bilgileriniz Güvende", d:"Tüm bilgileriniz gizli ve korunur." },
                  { ic:"⚡", t:"Hızlı Geri Dönüş", d:"Ortalama yanıt süremiz 5 dakikadır." },
                ].map(r => (
                  <div key={r.t} style={{ display:"flex", alignItems:"flex-start", gap:".5rem" }}>
                    <div style={{ width:32, height:32, borderRadius:".5rem", background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:".9rem", flexShrink:0 }}>{r.ic}</div>
                    <div>
                      <div style={{ color:"#fff", fontWeight:700, fontSize:".75rem" }}>{r.t}</div>
                      <div style={{ color:"rgba(255,255,255,.4)", fontSize:".68rem" }}>{r.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SAĞ: WA kutusu — referans görseldeki kart */}
            <div style={{ display:"flex", justifyContent:"center" }}>
              <div style={{
                width:"100%", maxWidth:400,
                background:"rgba(2,14,8,.85)",
                border:"1.5px solid rgba(37,211,102,.3)",
                borderRadius:"1.25rem",
                padding:"1.75rem",
                boxShadow:"0 8px 40px rgba(37,211,102,.12), 0 0 0 1px rgba(37,211,102,.08)",
                backdropFilter:"blur(16px)",
              }}>
                {/* Kart üst: 7/24 AKTİF */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:".4rem", marginBottom:"1.25rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#4ade80"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span style={{ color:"#4ade80", fontSize:".75rem", fontWeight:700, letterSpacing:".08em" }}>7/24 AKTİF</span>
                </div>

                {/* WA logo + başlık */}
                <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1rem" }}>
                  <div style={{ width:64, height:64, borderRadius:"50%", background:"#25D366", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 0 20px rgba(37,211,102,.4)" }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <div style={{ color:"#fff", fontWeight:800, fontSize:"1.15rem", fontFamily:"var(--font-archivo)", letterSpacing:"-.02em" }}>Kayıt Sürecini<br/>Birlikte Başlatalım</div>
                    <div style={{ color:"rgba(255,255,255,.5)", fontSize:".8rem", marginTop:".25rem" }}>Hemen yaz, hızlıca cevaplayalım.</div>
                  </div>
                </div>

                {/* Hemen Başlatalım butonu */}
                <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" style={{
                  display:"flex", alignItems:"center", justifyContent:"space-between",
                  padding:"1rem 1.25rem", borderRadius:".875rem",
                  background:"linear-gradient(135deg,#16a34a,#22c55e)",
                  color:"#fff", fontWeight:800, fontSize:".95rem", textDecoration:"none",
                  boxShadow:"0 4px 20px rgba(37,211,102,.35)",
                  marginBottom:"1rem",
                }}>
                  <span style={{ display:"flex", alignItems:"center", gap:".625rem" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    HEMEN BAŞLATALIM
                  </span>
                  <span style={{ fontSize:"1.1rem" }}>›</span>
                </a>

                {/* Yanıt süresi */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:".4rem", color:"rgba(37,211,102,.7)", fontSize:".75rem" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                  Ortalama yanıt süresi: <strong style={{ color:"#4ade80" }}>5 dakika</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ ALT ROZET ŞERİDİ ══ */}
      <section style={{ padding:"2rem 0", background:"#010316", borderTop:"1px solid rgba(255,255,255,.06)" }}>
        <div className="wrapper">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem" }} className="bottom-badge-grid">
            {BOTTOM_BADGES.map(b => (
              <div key={b.t} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:".625rem", padding:"1rem", borderRadius:".875rem", background:"rgba(5,14,60,.4)", border:"1px solid rgba(255,255,255,.07)" }}>
                <span style={{ fontSize:"1.25rem" }}>{b.ic}</span>
                <span style={{ color:"rgba(255,255,255,.7)", fontWeight:700, fontSize:".82rem" }}>{b.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

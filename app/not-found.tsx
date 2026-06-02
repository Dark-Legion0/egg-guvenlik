import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { waUrl } from "@/lib/contact";
import WaIcon from "@/components/ui/WaIcon";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı (404)",
  description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { href: "/egitimler",        label: "Eğitim Programları",     icon: "🛡️" },
  { href: "/kayit-sureci",     label: "Kayıt Süreci",           icon: "📋" },
  { href: "/sss",              label: "Sık Sorulan Sorular",    icon: "❓" },
  { href: "/iletisim",         label: "İletişim",               icon: "📞" },
  { href: "/blog",             label: "Rehber Yazılar",         icon: "📰" },
];

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(145deg,#010418 0%,#040c36 50%,#010316 100%)",
        position: "relative", overflow: "hidden",
      }}
      aria-label="Sayfa bulunamadı"
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)",
        backgroundSize: "52px 52px", opacity: .5,
        pointerEvents: "none",
      }}/>
      <div style={{ position:"absolute", top:-60, left:-80, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(26,53,255,.12) 0%,transparent 65%)", pointerEvents:"none" }}/>

      <div style={{ position:"relative", zIndex:1, textAlign:"center", maxWidth:560, padding:"0 1.5rem" }}>
        {/* 404 */}
        <div
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-archivo)", fontWeight: 900,
            fontSize: "clamp(5rem,18vw,8rem)",
            background: "linear-gradient(135deg,#d97706,#fcd34d)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            lineHeight: 1, marginBottom: ".25rem",
          }}
        >
          404
        </div>

        <h1 style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"clamp(1.5rem,4vw,2rem)", color:"#fff", marginBottom:".875rem" }}>
          Sayfa Bulunamadı
        </h1>

        <p style={{ color:"rgba(255,255,255,.52)", fontSize:"clamp(.875rem,2vw,.975rem)", lineHeight:1.72, marginBottom:"2rem" }}>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          Ana sayfaya dönerek devam edebilir ya da aşağıdaki sayfalardan birini ziyaret edebilirsiniz.
        </p>

        {/* CTAs */}
        <div style={{ display:"flex", gap:".875rem", flexWrap:"wrap", justifyContent:"center", marginBottom:"2rem" }}>
          <Link href="/" className="btn btn-primary">
            ← Ana Sayfaya Dön
          </Link>
          <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WaIcon size={17}/> WhatsApp&apos;tan Yardım Al
          </a>
        </div>

        {/* Quick links */}
        <nav aria-label="Hızlı bağlantılar" style={{
          padding: "1.25rem", borderRadius: "1.25rem",
          background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)",
        }}>
          <p style={{ color:"rgba(255,255,255,.38)", fontSize:".72rem", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", marginBottom:"1rem" }}>
            Hızlı Bağlantılar
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:".5rem", justifyContent:"center" }}>
            {QUICK_LINKS.map(l => (
              <Link key={l.href} href={l.href} style={{
                display:"inline-flex", alignItems:"center", gap:".4rem",
                padding:".4rem .875rem", borderRadius:"999px",
                background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)",
                color:"rgba(255,255,255,.65)", fontSize:".82rem",
                transition:"all .2s",
                textDecoration:"none",
              }}>
                <span aria-hidden="true">{l.icon}</span> {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}

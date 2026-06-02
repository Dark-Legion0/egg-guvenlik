"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/config";
import { CONTACT, waUrl, trackEvent } from "@/lib/contact";
import WaIcon from "@/components/ui/WaIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const pathname                  = usePathname();

  const onScroll = useCallback(() => setScrolled(window.scrollY > 32), []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header id="main-header" className={scrolled ? "scrolled" : ""}>
        <div className="wrapper">
          <div className="header-inner">

            {/* ── LOGO ── */}
            <Link
              href="/"
              style={{
                display: "flex", alignItems: "center", gap: ".625rem",
                flexShrink: 0, textDecoration: "none",
                // Hiçbir arka plan yok — şeffaf
              }}
              aria-label="EGG Güvenlik Ana Sayfa"
            >
              <div style={{
                width: 44, height: 44,
                flexShrink: 0,
                filter: "drop-shadow(0 2px 6px rgba(251,191,36,.25))",
              }}>
                <Image
                  src="/logo.png"
                  alt="EGG Özel Güvenlik Eğitim Kurumu"
                  width={44}
                  height={44}
                  priority
                  style={{ width: 44, height: 44, objectFit: "contain", display: "block" }}
                />
              </div>
              <div className="logo-text">
                <span className="logo-name">EGG Güvenlik</span>
                <span className="logo-sub">Özel Güvenlik Eğitim Kurumu</span>
              </div>
            </Link>

            {/* ── Desktop nav (orta) ── */}
            <nav className="desktop-nav" aria-label="Ana menü">
              {NAV_LINKS.map(l => (
                <Link
                  key={l.href} href={l.href}
                  className={`nav-link${isActive(l.href) ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* ── Desktop sağ CTAs ── */}
            <div className="desktop-cta">
              <a
                href={CONTACT.phoneHref}
                className="header-phone"
                aria-label={`Telefon: ${CONTACT.displayPhone}`}
              >
                <PhoneIcon size={13}/> {CONTACT.displayPhone}
              </a>
              <a
                href={waUrl("default")}
                target="_blank" rel="noopener noreferrer"
                className="header-cta"
                onClick={() => trackEvent("whatsapp_click", { page: "header" })}
              >
                <WaIcon size={14}/> Hemen Bilgi Al
              </a>
            </div>

            {/* ── Mobile sağ ── */}
            <div className="mobile-actions">
              <a href={CONTACT.phoneHref} className="icon-btn" aria-label="Ara">
                <PhoneIcon size={17}/>
              </a>
              <button
                className="icon-btn"
                onClick={() => setOpen(o => !o)}
                aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={open}
              >
                {open
                  ? <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  : <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="18" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                }
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Drawer backdrop ── */}
      <div
        className={`drawer-backdrop${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ── Drawer ── */}
      <div className={`drawer${open ? " open" : ""}`} role="dialog" aria-label="Navigasyon menüsü">
        <div className="drawer-header">
          <div style={{ display:"flex", alignItems:"center", gap:".75rem" }}>
            <Image src="/logo.png" alt="EGG Logo" width={40} height={40}
              style={{ width:40, height:40, objectFit:"contain" }}/>
            <div>
              <span style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:".9rem", letterSpacing:"-.02em", color:"#fff", display:"block" }}>EGG Güvenlik</span>
              <span style={{ fontSize:".58rem", color:"rgba(251,191,36,.5)", letterSpacing:".1em", textTransform:"uppercase" }}>Özel Güvenlik Eğitim Kurumu</span>
            </div>
          </div>
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Kapat">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav className="drawer-nav" aria-label="Mobil menü">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className={`drawer-link${isActive(l.href) ? " active" : ""}`}>
              <span>{l.label}</span>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </Link>
          ))}
        </nav>

        <div className="drawer-ctas">
          <a href={waUrl("default")} target="_blank" rel="noopener noreferrer"
            className="btn btn-wa btn-full btn-sm">
            <WaIcon size={16}/> WhatsApp&apos;tan Hızlı Bilgi Al
          </a>
          <a href={CONTACT.phoneHref} className="btn btn-secondary btn-full btn-sm">
            <PhoneIcon size={15}/> {CONTACT.displayPhone}
          </a>
        </div>

        <p style={{ textAlign:"center", padding:"1rem", fontSize:".68rem", color:"rgba(255,255,255,.2)" }}>
          İçişleri Bakanlığı Onaylı · 2008&apos;den Bu Yana
        </p>
      </div>
    </>
  );
}

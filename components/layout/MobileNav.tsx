"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MOBILE_NAV } from "@/lib/config";
import { CONTACT, waUrl, trackEvent } from "@/lib/contact";
import WaIcon from "@/components/ui/WaIcon";

const NAV_ICONS: Record<string, React.ReactElement> = {
  "🏠": <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  "🛡️": <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  "📋": <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><path d="M9 12h6M9 16h4"/></svg>,
  "❓": <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>,
  "📞": <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.5 19.79 19.79 0 01.84 4.86 2 2 0 012.83 2.68h3a2 2 0 012 1.72c.13.97.37 1.91.7 2.81a2 2 0 01-.45 2.11L7.09 10.1a16 16 0 006.77 6.77l1.5-.96a2 2 0 012.11-.45c.9.33 1.84.57 2.81.7A2 2 0 0122 16.92z"/></svg>,
};

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <>
      <nav id="mobile-nav" role="navigation" aria-label="Mobil navigasyon">
        <div className="mobile-nav-inner">
          {MOBILE_NAV.map(item => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${active ? "active" : ""}`}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
              >
                <span className="nav-item-icon">{NAV_ICONS[item.icon] ?? item.icon}</span>
                <span className="nav-item-label">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom CTA bar */}
      <div id="bottom-cta" role="complementary" aria-label="Hızlı iletişim">
        <a
          href={CONTACT.phoneHref}
          className="cta-bar-call"
          aria-label={`Telefon: ${CONTACT.displayPhone}`}
          onClick={() => trackEvent("phone_click", { page: "mobile_nav" })}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.5 19.79 19.79 0 01.84 4.86 2 2 0 012.83 2.68h3a2 2 0 012 1.72c.13.97.37 1.91.7 2.81a2 2 0 01-.45 2.11L7.09 10.1a16 16 0 006.77 6.77l1.5-.96a2 2 0 012.11-.45c.9.33 1.84.57 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span>Ara</span>
        </a>
        <a
          href={waUrl("default")}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-bar-wa"
          aria-label="WhatsApp"
          onClick={() => trackEvent("whatsapp_click", { page: "mobile_nav" })}
        >
          <WaIcon size={18}/>
          <span>WhatsApp</span>
        </a>
        <a
          href={CONTACT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-bar-map"
          aria-label="Konumu haritada gör"
          onClick={() => trackEvent("map_click", { page: "mobile_nav" })}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Konum</span>
        </a>
      </div>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { CONTACT, waUrl } from "@/lib/contact";
import WaIcon from "@/components/ui/WaIcon";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top-line"/>
      <div className="wrapper footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display:"flex", alignItems:"center", gap:".875rem", marginBottom:"1.25rem" }}>
              <Image
                src="/logo.png"
                alt="EGG Özel Güvenlik Eğitim Kurumu Logo"
                width={56}
                height={56}
                style={{ width:56, height:56, objectFit:"contain", flexShrink:0 }}
              />
              <div>
                <p style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"1.05rem", color:"#fff", letterSpacing:"-.02em" }}>EGG Güvenlik</p>
                <p style={{ color:"rgba(251,191,36,.6)", fontSize:".6rem", letterSpacing:".12em", textTransform:"uppercase", marginTop:2 }}>Özel Güvenlik Eğitim Kurumu</p>
              </div>
            </div>
            <p>İçişleri Bakanlığı onaylı eğitim programlarımızla güvenlik sektöründe kariyer sahibi olmanıza yardımcı oluyoruz.</p>

            <div style={{ marginTop:"1.25rem", display:"flex", flexDirection:"column", gap:".625rem" }}>
              <a href={CONTACT.phoneHref} style={{ display:"flex", alignItems:"center", gap:".75rem", color:"rgba(255,255,255,.5)", fontSize:".875rem", transition:"color .2s" }} aria-label={`Telefon: ${CONTACT.displayPhone}`}>
                <span style={{ width:32, height:32, borderRadius:".5rem", background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:".9rem" }}>📞</span>
                {CONTACT.displayPhone}
              </a>
              <a href={`mailto:${CONTACT.email}`} style={{ display:"flex", alignItems:"center", gap:".75rem", color:"rgba(255,255,255,.5)", fontSize:".875rem", transition:"color .2s" }}>
                <span style={{ width:32, height:32, borderRadius:".5rem", background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:".9rem" }}>✉️</span>
                {CONTACT.email}
              </a>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display:"flex", alignItems:"center", gap:".75rem", color:"rgba(255,255,255,.5)", fontSize:".875rem", transition:"color .2s" }}>
                <span style={{ width:32, height:32, borderRadius:".5rem", background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:".9rem" }}>📍</span>
                {CONTACT.address} →
              </a>
            </div>

            <div style={{ marginTop:"1rem", padding:".875rem", borderRadius:".875rem", background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)" }}>
              <p style={{ fontSize:".72rem", fontWeight:700, color:"rgba(255,255,255,.35)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:".5rem" }}>Çalışma Saatleri</p>
              {CONTACT.workingHours.map(w => (
                <div key={w.day} style={{ display:"flex", justifyContent:"space-between", fontSize:".78rem", padding:".125rem 0" }}>
                  <span style={{ color:"rgba(255,255,255,.4)" }}>{w.day}</span>
                  <span style={{ color: w.open ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.25)", fontWeight: w.open ? 600 : 400 }}>{w.hours}</span>
                </div>
              ))}
              <div style={{ marginTop:".5rem", display:"flex", alignItems:"center", gap:".4rem" }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#25D366", animation:"pulseDot 2s ease-in-out infinite", display:"inline-block", flexShrink:0 }}/>
                <span style={{ fontSize:".72rem", color:"rgba(37,211,102,.7)" }}>{CONTACT.whatsappAvailability}</span>
              </div>
            </div>
          </div>

          {/* Eğitimler */}
          <div className="footer-col">
            <h3>🛡️ Eğitimler</h3>
            <ul className="footer-links">
              <li><Link href="/egitimler">Tüm Programlar</Link></li>
              <li><Link href="/egitimler/silahli-ozel-guvenlik-egitimi">Silahlı Güvenlik</Link></li>
              <li><Link href="/egitimler/silahsiz-ozel-guvenlik-egitimi">Silahsız Güvenlik</Link></li>
              <li><Link href="/egitimler/yenileme-egitimi">Yenileme Eğitimi</Link></li>
              <li><Link href="/kayit-sureci">Kayıt Süreci</Link></li>
              <li><Link href="/kariyer-firsatlari">Kariyer Fırsatları</Link></li>
            </ul>
          </div>

          {/* Kurumsal + CTA */}
          <div className="footer-col">
            <h3>Kurumsal</h3>
            <ul className="footer-links">
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/sss">Sık Sorulan Sorular</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
              <li><Link href="/blog">Blog / Rehber</Link></li>
              <li><Link href="#">Gizlilik Politikası</Link></li>
              <li><Link href="#">KVKK Aydınlatma</Link></li>
            </ul>
            <div style={{ marginTop:"1.5rem", display:"flex", flexDirection:"column", gap:".625rem" }}>
              <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm btn-full">
                <WaIcon size={15}/> WhatsApp&apos;tan Bilgi Al
              </a>
              <a href={CONTACT.phoneHref} className="btn btn-secondary btn-sm btn-full">
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.5 19.79 19.79 0 01.84 4.86 2 2 0 012.83 2.68h3a2 2 0 012 1.72c.13.97.37 1.91.7 2.81a2 2 0 01-.45 2.11L7.09 10.1a16 16 0 006.77 6.77l1.5-.96a2 2 0 012.11-.45c.9.33 1.84.57 2.81.7A2 2 0 0122 16.92z"/></svg>
                {CONTACT.displayPhone}
              </a>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm btn-full">
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Konumu Gör
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-dim" style={{ fontSize:".75rem" }}>© 2025 EGG Özel Güvenlik Eğitim Kurumu. Tüm hakları saklıdır.</p>
          <p className="text-dim" style={{ fontSize:".75rem" }}>İçişleri Bakanlığı Onaylı Eğitim Kurumu</p>
        </div>
      </div>
    </footer>
  );
}

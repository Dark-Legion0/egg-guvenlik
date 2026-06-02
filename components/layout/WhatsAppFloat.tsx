"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { waUrl, trackEvent, CONTACT } from "@/lib/contact";
import WaIcon from "@/components/ui/WaIcon";

// Map pathname to WA message key
function getWaKey(pathname: string): keyof typeof CONTACT.messages {
  if (pathname.includes("silahli")) return "silahli";
  if (pathname.includes("silahsiz")) return "silahsiz";
  if (pathname.includes("yenileme")) return "yenileme";
  if (pathname.includes("kayit")) return "kayit";
  if (pathname.includes("kariyer")) return "kariyer";
  if (pathname.includes("egitimler")) return "egitimler";
  return "default";
}

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1800);
    const t2 = setTimeout(() => setShowTooltip(true), 9000);
    const t3 = setTimeout(() => setShowTooltip(false), 15000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Reset tooltip on page change
  useEffect(() => {
    setShowTooltip(false);
    setDismissed(false);
  }, [pathname]);

  if (!visible) return null;

  const key = getWaKey(pathname);
  const url = waUrl(key);

  return (
    <div id="wa-float">
      {/* Tooltip */}
      {showTooltip && !dismissed && (
        <div style={{
          position:"absolute", right:0, bottom:"calc(100% + .875rem)",
          background:"linear-gradient(145deg, rgba(2,6,48,.98) 0%, rgba(1,4,32,.98) 100%)",
          border:"1px solid rgba(251,191,36,.18)",
          borderRadius:"1.125rem",
          padding:"1rem 1.25rem",
          width:228,
          boxShadow:"0 16px 48px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.04)",
          animation:"fadeUp .3s ease forwards",
        }}>
          <button
            onClick={() => setDismissed(true)}
            style={{ position:"absolute", top:".5rem", right:".625rem", color:"rgba(255,255,255,.3)", fontSize:".8rem", background:"none", border:"none", cursor:"pointer", padding:".125rem .25rem", lineHeight:1 }}
            aria-label="Kapat"
          >✕</button>
          <p style={{ color:"rgba(255,255,255,.9)", fontSize:".82rem", fontWeight:700, marginBottom:".35rem" }}>
            Hızlı bilgi almak ister misiniz?
          </p>
          <p style={{ color:"rgba(255,255,255,.45)", fontSize:".78rem", lineHeight:1.55 }}>
            WhatsApp&apos;tan yazın, danışmanımız kısa sürede yanıt versin.
          </p>
          {/* Arrow */}
          <div style={{ position:"absolute", bottom:-7, right:20, width:14, height:7, overflow:"hidden" }}>
            <div style={{ width:14, height:14, background:"rgba(2,6,48,.98)", border:"1px solid rgba(251,191,36,.18)", transform:"rotate(45deg)", marginTop:-7 }}/>
          </div>
        </div>
      )}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="WhatsApp ile iletişime geç"
        onClick={() => {
          setDismissed(true);
          trackEvent("whatsapp_float_click", { page: pathname });
        }}
      >
        <WaIcon size={28}/>
      </a>
    </div>
  );
}

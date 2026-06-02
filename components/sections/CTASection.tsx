import Link from "next/link";
import { waUrl } from "@/lib/contact";
import WaIcon from "@/components/ui/WaIcon";

interface CTASectionProps {
  title: string;
  sub: string;
  btn1?: React.ReactNode;
  btn2?: React.ReactNode;
  trustPills?: string[];
}

const DEFAULT_PILLS = ["Ücretsiz Danışmanlık", "7/24 WhatsApp Desteği", "Devlet Onaylı Belge"];

export default function CTASection({ title, sub, btn1, btn2, trustPills }: CTASectionProps) {
  const b1 = btn1 ?? (
    <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
      <WaIcon size={18}/> WhatsApp&apos;tan Hemen Bilgi Al
    </a>
  );
  const b2 = btn2 ?? (
    <Link href="/kayit-sureci" className="btn btn-primary">Kayıt Şartlarını Öğren →</Link>
  );
  const pills = trustPills ?? DEFAULT_PILLS;

  return (
    <section className="cta-section">
      <div className="grid-bg"/>
      <div className="cta-orb"/>
      {/* Extra spotlight */}
      <div style={{
        position:"absolute", top:"50%", left:"50%",
        transform:"translate(-50%, -50%)",
        width:400, height:400, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(251,191,36,.04) 0%, transparent 70%)",
        animation:"heroGlow 4s ease-in-out infinite",
        pointerEvents:"none",
      }}/>

      <div className="wrapper cta-inner">
        <div className="cta-badge">
          <span className="cta-badge-dot"/>
          <span>Hemen Başla</span>
        </div>

        <h2>{title}</h2>
        <p>{sub}</p>

        <div className="cta-btns">{b1}{b2}</div>

        {/* Trust pills */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:".5rem", justifyContent:"center", marginTop:"1.5rem" }}>
          {pills.map(p => (
            <span key={p} style={{
              display:"inline-flex", alignItems:"center", gap:".35rem",
              padding:".3rem .75rem", borderRadius:"999px",
              background:"rgba(255,255,255,.04)",
              border:"1px solid rgba(255,255,255,.09)",
              color:"rgba(255,255,255,.4)", fontSize:".72rem",
            }}>
              <span style={{ width:4, height:4, borderRadius:"50%", background:"var(--gold-400)", flexShrink:0 }}/>
              {p}
            </span>
          ))}
        </div>

        <p className="cta-trust" style={{ marginTop:"1rem" }}>
          Bilgileriniz yalnızca eğitim danışmanlığı için kullanılacaktır.
        </p>
      </div>
    </section>
  );
}

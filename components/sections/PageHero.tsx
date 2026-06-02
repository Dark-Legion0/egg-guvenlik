// Server component — no "use client" needed
import Link from "next/link";

interface BreadcrumbItem { label: string; href?: string; }

interface PageHeroProps {
  title: string;
  sub: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export default function PageHero({ title, sub, badge, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid"/>
      <div className="page-hero-orb1"/>
      <div className="page-hero-orb2"/>
      <div className="page-hero-fade"/>

      <div className="wrapper page-hero-inner">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/" style={{ color:"rgba(255,255,255,.4)", fontSize:".75rem" }}>
              Ana Sayfa
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} style={{ display:"contents" }}>
                <span aria-hidden="true" style={{ color:"rgba(255,255,255,.18)", fontSize:".75rem", padding:"0 .25rem" }}>›</span>
                {b.href
                  ? <Link href={b.href} style={{ color:"rgba(255,255,255,.4)", fontSize:".75rem" }}>{b.label}</Link>
                  : <span className="current" aria-current="page" style={{ color:"rgba(255,255,255,.65)", fontSize:".75rem" }}>{b.label}</span>
                }
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div
            className="animate-fadeup"
            aria-label={badge}
            style={{
              display:"inline-flex", alignItems:"center", gap:".5rem",
              padding:".375rem .9rem", borderRadius:"999px",
              border:"1px solid rgba(251,191,36,.26)",
              background:"rgba(251,191,36,.07)",
              marginBottom:"1.25rem",
              backdropFilter:"blur(8px)",
            }}
          >
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#fbbf24", animation:"pulseDot 2s ease-in-out infinite", display:"inline-block" }} aria-hidden="true"/>
            <span style={{ color:"#fcd34d", fontSize:".68rem", fontWeight:700, letterSpacing:".14em", textTransform:"uppercase" }}>
              {badge}
            </span>
          </div>
        )}

        {/* H1 — exactly one per page */}
        <h1 className="ph1 animate-fadeup delay-1">{title}</h1>

        {/* Sub */}
        <p className="psub animate-fadeup delay-2">{sub}</p>

        {/* CTA slot */}
        {children && (
          <div className="animate-fadeup delay-3" style={{ marginTop:"1.875rem" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

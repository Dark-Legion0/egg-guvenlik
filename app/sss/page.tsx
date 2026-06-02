import type { Metadata } from "next";
import { WA_URL, SITE } from "@/lib/config";
import { waUrl, CONTACT } from "@/lib/contact";
import { FAQ_CATS, CTA } from "@/lib/content";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import WaIcon from "@/components/ui/WaIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";
import Link from "next/link";
import { SEO_BASE, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Özel Güvenlik Eğitimi Sık Sorulan Sorular | EGG Adana",
  description: "Özel güvenlik eğitimi SSS. Yaş şartı, evrak, sınav süreci, kurs ücretleri ve kariyer hakkında tüm sorularınıza cevap. Adana güvenlik kursu bilgi merkezi.",
  keywords: ["özel güvenlik sık sorulan sorular","güvenlik kursu SSS","özel güvenlik şartları","özel güvenlik sınav süreç"],
  alternates: { canonical: `${SEO_BASE.siteUrl}/sss` },
  openGraph: { title: "Özel Güvenlik Eğitimi SSS | Adana", description: "Kayıttan sınava tüm sorularınıza cevap.", url: `${SEO_BASE.siteUrl}/sss`, locale: "tr_TR", type: "website" },
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATS.flatMap(c =>
    c.items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function SSSPage() {
  const allFaqs = FAQ_CATS.flatMap(c => c.items);
  const faqSchema = buildFAQSchema(allFaqs.map(i => ({ q: i.q, a: i.a })));
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "Sık Sorulan Sorular", url: "/sss" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <PageHero
        title="Özel Güvenlik Eğitimi Hakkında Sık Sorulan Sorular"
        sub={`${SITE.city} özel güvenlik kursu hakkında merak ettiğiniz her şey. Kayıt şartlarından sınav sürecine, kurs ücretlerinden kariyer imkânlarına kadar kapsamlı cevaplar.`}
        badge="12 Kategoride Güncel Cevaplar"
        breadcrumbs={[{ label: "SSS" }]}
      />

      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div className="two-col two-col-3-2">
            {/* FAQ accordion columns */}
            <div>
              {FAQ_CATS.map(cat => (
                <div key={cat.label} style={{marginBottom:"2.5rem"}}>
                  <p className="faq-cat">{cat.icon} {cat.label}</p>
                  <div style={{display:"flex",flexDirection:"column",gap:".75rem"}}>
                    {cat.items.map(item => (
                      <details key={item.q} className="faq-item">
                        <summary><span>{item.q}</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
                        <div className="faq-content"><p>{item.a}</p></div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div>
              <div style={{position:"sticky",top:"6rem",display:"flex",flexDirection:"column",gap:"1rem"}}>
                <div className="card" style={{borderColor:"rgba(251,191,36,.2)"}}>
                  <div className="card-icon">💬</div>
                  <h3>Hızlı Yanıt İçin</h3>
                  <p style={{marginBottom:".875rem",fontSize:".85rem"}}>
                    Cevabını bulamadığın bir soru için WhatsApp hattımıza yaz; danışmanımız kısa sürede dönüş yapar.
                  </p>
                  <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-full btn-sm">
                    <WaIcon size={15}/> {CTA.wa}
                  </a>
                </div>

                <div className="card">
                  <div className="card-icon">📞</div>
                  <h3>Telefon Desteği</h3>
                  <p style={{marginBottom:".875rem",fontSize:".85rem"}}>Sesli konuşmayı tercih ediyorsanız bizi arayın. Pzt–Cmt 08:00–18:00.</p>
                  <a href={CONTACT.phoneHref} className="btn btn-secondary btn-full btn-sm">
                    <PhoneIcon size={15}/> {CONTACT.displayPhone}
                  </a>
                </div>

                <div className="card">
                  <h3 style={{marginBottom:".75rem"}}>🔗 Hızlı Bağlantılar</h3>
                  {[
                    ["Silahlı Güvenlik Eğitimi","/egitimler/silahli-ozel-guvenlik-egitimi"],
                    ["Silahsız Güvenlik Eğitimi","/egitimler/silahsiz-ozel-guvenlik-egitimi"],
                    ["Yenileme Eğitimi","/egitimler/yenileme-egitimi"],
                    ["Kayıt Süreci","/kayit-sureci"],
                    ["Kariyer Fırsatları","/kariyer-firsatlari"],
                  ].map(([l,h])=>(
                    <Link key={h} href={h} style={{display:"block",color:"#fbbf24",fontSize:".88rem",padding:".25rem 0",borderBottom:"1px solid rgba(255,255,255,.05)"}}>→ {l}</Link>
                  ))}
                </div>

                <div className="highlight">
                  <p>💡 <strong style={{color:"#fbbf24"}}>Not:</strong> Özel güvenlik mevzuatı değişkenlik gösterebilir. En güncel bilgi için lütfen danışmanımıza ulaşın.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Sorunuz Cevapsız Kalmadı mı?"
        sub={`${SITE.city}'da özel güvenlik kursu hakkında aklınızda kalan tüm soruları WhatsApp hattımızdan sorabilirsiniz. Ücretsiz danışmanlık hizmetimizden yararlanın.`}
        btn2={<Link href="/kayit-sureci" className="btn btn-primary">{CTA.register} →</Link>}
      />
    </>
  );
}

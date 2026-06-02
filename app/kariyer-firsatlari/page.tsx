import type { Metadata } from "next";
import Link from "next/link";
import { WA_URL, SITE } from "@/lib/config";
import { waUrl, CONTACT } from "@/lib/contact";
import { CTA } from "@/lib/content";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import WaIcon from "@/components/ui/WaIcon";
import { SEO_BASE, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Özel Güvenlik Kariyer Fırsatları | EGG Güvenlik Adana",
  description: "Özel güvenlik belgesiyle nerelerde çalışılır? AVM, hastane, fabrika, site güvenliği ve kadın personel fırsatları. Adana'da güvenlik kariyerinizi planlayın.",
  keywords: ["özel güvenlik kariyer","güvenlik görevlisi iş alanları","özel güvenlik belgesi çalışma alanları","güvenlik kariyer Adana"],
  alternates: { canonical: `${SEO_BASE.siteUrl}/kariyer-firsatlari` },
  openGraph: { title: "Özel Güvenlik Kariyer Fırsatları | Adana", description: "AVM, hastane, fabrika güvenliği ve daha fazlası. Kariyer yol haritası.", url: `${SEO_BASE.siteUrl}/kariyer-firsatlari`, locale: "tr_TR", type: "website" },
};

const AREAS = [
  { ic:"🏬", t:"Alışveriş Merkezleri (AVM)", d:"Türkiye genelindeki en büyük güvenlik istihdam alanıdır. Kapı güvenliği, devriye, müşteri yönlendirme ve acil durum koordinasyonu görevleri yoğun talep görmektedir.", tag:"Silahsız", tc:"tag-blue", detail:"Büyük AVM'ler genellikle 20–50+ güvenlik personeli ile çalışır. Vardiyalı sistem mevcuttur." },
  { ic:"🏢", t:"Site ve Rezidans Güvenliği", d:"Kapalı siteler, rezidanslar ve lüks konut projelerinde 7/24 güvenlik hizmeti. Giriş–çıkış kontrolü, ziyaretçi yönetimi ve anahtar protokolleri temel görevlerdir.", tag:"Silahsız", tc:"tag-blue", detail:"Yüksek yaşam kaliteli sitelerde güvenlik personeline olan talep sürekli artmaktadır." },
  { ic:"🏥", t:"Hastane ve Sağlık Tesisleri", d:"Acil servis, yoğun bakım ve özel koridorlarda hasta, personel ve ziyaretçi güvenliği. Acil durumlarda koordinasyon kritik önem taşır.", tag:"Her İki Belge", tc:"tag-green", detail:"Sağlık alanında güvenlik personeli sayısı son yıllarda hızla artmaktadır." },
  { ic:"🏭", t:"Fabrika ve Sanayi Tesisleri", d:"Üretim tesisleri, lojistik merkezleri ve organize sanayi bölgelerinde giriş–çıkış denetimi ve malzeme güvenliği. Silahlı belge avantaj sağlar.", tag:"Silahlı Avantajlı", tc:"tag-gold", detail:"24 saatlik vardiyalı çalışma düzeni ve rekabetçi ücretler bu alanı cazip kılar." },
  { ic:"🎤", t:"Konser, Fuar ve Etkinlikler", d:"Büyük organizasyonlarda kalabalık yönetimi, giriş denetimi ve VIP koruma. Esnek çalışma saatleri ile ek gelir fırsatı sunar.", tag:"Silahsız", tc:"tag-blue", detail:"Organizasyon sektörünün büyümesiyle birlikte bu alandaki talep de istikrarlı biçimde artmaktadır." },
  { ic:"🏫", t:"Eğitim Kurumları", d:"Okul, dershane ve üniversite kampüslerinde güvenli öğrenme ortamı sağlama. Öğrenci ve personel güvenliğinin korunması.", tag:"Silahsız", tc:"tag-blue", detail:"Eğitim yatırımlarının artmasıyla bu alandaki güvenlik pozisyonları da çoğalmaktadır." },
];

const ROADMAP = [
  { ev:"BAŞLANGIÇ", ic:"🌱", t:"Güvenlik Görevlisi", d:"Temel belgeyle sektöre adım atın. İlk pozisyon genellikle AVM, site veya hastane güvenliğidir.", bc:"rgba(107,114,128,.5)", tc:"#9ca3af" },
  { ev:"1–3 YIL", ic:"📈", t:"Kıdemli Güvenlik Personeli", d:"Deneyimle sorumluluk ve ücret artar. Vardiya liderliği ve amir yardımcısı pozisyonları açılır.", bc:"rgba(59,130,246,.5)", tc:"#93c5fd" },
  { ev:"3–7 YIL", ic:"👑", t:"Ekip Lideri / Vardiya Amiri", d:"Ekip yönetimi, raporlama ve koordinasyon sorumlulukları. Daha yüksek statü ve ücret.", bc:"rgba(251,191,36,.5)", tc:"#fbbf24" },
  { ev:"7+ YIL", ic:"🏆", t:"Güvenlik Müdürü / Direktörü", d:"Tüm güvenlik operasyonlarının planlanması ve yönetimi. Kurumsal kariyer zirvesi.", bc:"rgba(167,139,250,.5)", tc:"#c4b5fd" },
];

export default function KariyerPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{"name": "Ana Sayfa", "url": "/"}, {"name": "Kariyer Fırsatları", "url": "/kariyer-firsatlari"}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <PageHero
        title="Özel Güvenlik Belgesiyle Kariyer Fırsatları"
        sub="Özel güvenlik belgeniz Türkiye'nin dört bir yanında yüzlerce farklı pozisyona kapı açar. AVM'den fabrikaya, hastaneden etkinliklere kadar geniş bir istihdam ağı sizi bekliyor."
        badge="120+ İş Ortağı Firmamız"
        breadcrumbs={[{ label: "Kariyer Fırsatları" }]}
      >
        <div style={{display:"flex",flexWrap:"wrap",gap:".875rem"}}>
          <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm"><WaIcon size={16}/> {CTA.advisor}</a>
          <Link href="/egitimler" className="btn btn-secondary btn-sm">Eğitimleri İncele →</Link>
        </div>
      </PageHero>

      {/* Çalışma Alanları */}
      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
            <p className="s-label" style={{justifyContent:"center"}}>💼 Çalışma Alanları</p>
            <h2 className="s-title">Belgenizle <span className="text-gold">Nerelerde Çalışabilirsiniz?</span></h2>
            <p className="s-sub" style={{textAlign:"center",margin:".75rem auto 0",maxWidth:"40rem"}}>Özel güvenlik belgesi, Türkiye&apos;nin en geniş istihdam alanlarından birine açılan kapıdır. Aşağıdaki sektörler sadece başlangıç noktasıdır.</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            {AREAS.map(a=>(
              <div key={a.t} className="career-card">
                <div className="career-icon">{a.ic}</div>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:".75rem",flexWrap:"wrap",marginBottom:".35rem"}}>
                    <h3>{a.t}</h3>
                    <span className={`tag ${a.tc}`}>{a.tag}</span>
                  </div>
                  <p style={{marginBottom:".5rem"}}>{a.d}</p>
                  <p style={{color:"rgba(255,255,255,.38)",fontSize:".78rem"}}>{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kadın güvenlik bölümü */}
      <section className="section section-alt">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div className="two-col" style={{alignItems:"center"}}>
            <div>
              <p className="s-label">👩‍💼 Kadın Güvenlik Görevlileri</p>
              <h2 className="s-title">Güvenlik Sektöründe <span className="text-gold">Kadın İstihdamı Artıyor</span></h2>
              <p className="s-sub" style={{marginTop:".875rem"}}>
                Özel güvenlik sektöründe kadın personele olan talep son yıllarda önemli ölçüde artmıştır. Havalimanı, AVM, hastane ve kurumsal ofis güvenliğinde kadın güvenlik görevlilerine güçlü tercih uygulanmaktadır.
              </p>
              <ul className="check-list" style={{marginTop:"1.25rem"}}>
                <li>Havalimanı üst araması ve yolcu güvenliği</li>
                <li>Büyük AVM&apos;lerde kapı ve iç alan güvenliği</li>
                <li>Hastane, klinik ve özel sağlık tesisleri</li>
                <li>Kurumsal ofis ve yönetim merkezleri</li>
                <li>Otel ve lüks konaklama tesisleri</li>
              </ul>
            </div>
            <div className="card" style={{borderColor:"rgba(251,191,36,.2)",padding:"1.5rem"}}>
              <div style={{fontSize:"2rem",marginBottom:".875rem"}}>👩‍🔒</div>
              <h3 style={{marginBottom:".75rem"}}>Neden Kadın Personele Talep Artıyor?</h3>
              <p style={{fontSize:".875rem",lineHeight:1.7,marginBottom:"1rem",color:"rgba(255,255,255,.6)"}}>
                Yasal düzenlemeler gereği bazı lokasyonlarda (havalimanı, kapalı alanlar vb.) üst arama işlemi yalnızca aynı cinsiyetten güvenlik personeli tarafından yapılabilmektedir. Bu durum kadın personele olan kurumsal talebi kalıcı olarak yüksek tutmaktadır.
              </p>
              <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-full btn-sm">
                <WaIcon size={15}/> Daha Fazla Bilgi Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kariyer Yol Haritası */}
      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
            <p className="s-label" style={{justifyContent:"center"}}>🗺️ Kariyer Yol Haritası</p>
            <h2 className="s-title">Güvenlik Kariyerinde <span className="text-gold">Nasıl Yükselilir?</span></h2>
            <p className="s-sub" style={{textAlign:"center",margin:".75rem auto 0",maxWidth:"40rem"}}>Özel güvenlik, bilinçli bir kariyer planıyla yönetildiğinde ciddi bir mesleki yükseliş sunar.</p>
          </div>
          <div className="grid-1 grid-4" style={{gap:"1rem"}}>
            {ROADMAP.map(r=>(
              <div key={r.ev} className="card" style={{textAlign:"center",borderTop:`3px solid ${r.bc}`,paddingTop:"1.5rem"}}>
                <div style={{fontFamily:"var(--font-archivo)",fontWeight:900,fontSize:".85rem",color:r.tc,marginBottom:".5rem"}}>{r.ev}</div>
                <div style={{fontSize:"1.75rem",marginBottom:".5rem"}}>{r.ic}</div>
                <h3 style={{fontSize:".9rem",marginBottom:".4rem"}}>{r.t}</h3>
                <p style={{fontSize:".8rem",lineHeight:1.6}}>{r.d}</p>
              </div>
            ))}
          </div>
          <div className="highlight" style={{marginTop:"2rem"}}>
            <p>🤝 <strong style={{color:"#fbbf24"}}>EGG Mezun Desteği:</strong> 120+ iş ortağı firmamız aracılığıyla mezunlarımızı aktif istihdam süreçlerine yönlendiriyor; referans ve kariyer danışmanlığı desteği sağlıyoruz.</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Güvenlik Kariyerinizi Planlamaya Başlayın"
        sub={`Hangi alanda çalışmak istediğinizi belirleyin; EGG danışmanları en uygun eğitim programıyla birlikte kariyer planınızı da şekillendirmenize yardımcı olur.`}
        btn2={<Link href="/egitimler" className="btn btn-primary">{CTA.match} →</Link>}
      />
    </>
  );
}

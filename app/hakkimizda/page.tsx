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
  title: "EGG Özel Güvenlik Eğitim Kurumu Hakkında | Adana",
  description: "EGG Özel Güvenlik: 2008'den bu yana Adana'da İçişleri Bakanlığı onaylı güvenlik eğitimleri. 2.500+ mezun, %94 sınav başarısı, 120+ iş ortağı.",
  keywords: ["EGG özel güvenlik","Adana güvenlik eğitim kurumu","özel güvenlik okulu Adana","güvenlik kursu Adana hakkında"],
  alternates: { canonical: `${SEO_BASE.siteUrl}/hakkimizda` },
  openGraph: { title: "EGG Özel Güvenlik Eğitim Kurumu | Adana", description: "2008'den bu yana devlet onaylı güvenlik eğitimleri. 2.500+ mezun.", url: `${SEO_BASE.siteUrl}/hakkimizda`, locale: "tr_TR", type: "website" },
};

const VALUES = [
  { ic:"🛡️", t:"Güven", d:"Her ilişkimizde şeffaflık ve güvenilirlik temelimizdir. Söylediğimizi yaparız." },
  { ic:"⚖️", t:"Disiplin", d:"Güvenlik mesleği disiplin gerektirir. Bu değeri eğitimin ilk gününden itibaren aktarırız." },
  { ic:"🤝", t:"Sorumluluk", d:"Öğrencimizin kariyer yolculuğunu ve toplumun güvenliğini ciddiye alırız." },
  { ic:"🏆", t:"Profesyonellik", d:"Eğitim standartlarımız, kadromuz ve hizmet anlayışımızda en yüksek seviyeyi hedefleriz." },
  { ic:"📈", t:"Kariyer Odaklılık", d:"Sertifika vermek değil, kariyer sahibi mezunlar yetiştirmek önceliğimizdir." },
  { ic:"🔬", t:"Sürekli Gelişim", d:"Mevzuat değişikliklerini ve sektör ihtiyaçlarını yakından izleyerek programlarımızı güncel tutarız." },
];

const WHY = [
  { ic:"✅", t:"Devlet Onaylı Eğitim", d:"Tüm programlarımız İçişleri Bakanlığı tarafından yetkilendirilmiş ve denetlenmektedir. Aldığınız belge Türkiye genelinde geçerlidir." },
  { ic:"🎯", t:"%94 Sınav Başarı Oranı", d:"Türkiye ortalamasının belirgin biçimde üzerinde seyreden başarı oranımız, eğitim kalitemizin en somut göstergesidir." },
  { ic:"📋", t:"Tam Süreç Desteği", d:"Kayıt, evrak, eğitim, sınav ve belge teslimi sürecinin her adımında danışmanınız yanınızdadır. Hiçbir aşamada yalnız bırakılmıyorsunuz." },
  { ic:"🤝", t:"İstihdam Ağı", d:"120+ iş ortağı firmamız aracılığıyla mezunlarımız aktif istihdam süreçlerine yönlendirilmektedir. EGG sertifikası işverenler tarafından tanınan bir referanstır." },
  { ic:"👨‍🏫", t:"Deneyimli Kadro", d:"Eğitmenlerimiz ortalama 15+ yıl sektör deneyimine sahip, Bakanlık sertifikalı uzmanlardır. Teorik bilgi ile sahadan gelen pratik deneyimi bir araya getiriyorlar." },
  { ic:"📅", t:"Düzenli Eğitim Dönemleri", d:"Yıl içinde birden fazla eğitim dönemi düzenliyoruz. Kontenjan ve dönem bilgisi için WhatsApp hattımız her zaman aktiftir." },
];

export default function HakkimizdaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{"name": "Ana Sayfa", "url": "/"}, {"name": "Hakkımızda", "url": "/hakkimizda"}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <PageHero
        title={`${SITE.fullName}`}
        sub={`${SITE.city}'da özel güvenlik sektörünün güvenilir eğitim adresi. 2008'den bu yana İçişleri Bakanlığı onaylı programlarla 2.500'den fazla profesyonel yetiştirdik.`}
        badge="Devlet Onaylı · 2008'den Bu Yana"
        breadcrumbs={[{ label: "Hakkımızda" }]}
      >
        <div style={{ display:"flex", flexWrap:"wrap", gap:".875rem" }}>
          <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm">
            <WaIcon size={16}/> {CTA.wa}
          </a>
          <Link href="/iletisim" className="btn btn-secondary btn-sm">İletişime Geç →</Link>
        </div>
      </PageHero>

      {/* EGG Kimdir */}
      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div className="two-col" style={{ alignItems:"center" }}>
            <div>
              <p className="s-label">🏛️ EGG Kimdir?</p>
              <h2 className="s-title">Sadece Kurs Değil,<br/><span className="text-gold">Kariyer Başlangıç Noktası</span></h2>
              <p style={{ color:"rgba(255,255,255,.65)", fontSize:".95rem", lineHeight:1.8, margin:"1rem 0 .875rem" }}>
                EGG Özel Güvenlik Eğitim Kurumu, {SITE.city}&apos;da 2008 yılında kurulmuş, İçişleri Bakanlığı onaylı bir eğitim kurumudur. 15+ yıllık deneyimimizle silahlı, silahsız ve yenileme özel güvenlik eğitimleri veriyoruz.
              </p>
              <p style={{ color:"rgba(255,255,255,.55)", fontSize:".9rem", lineHeight:1.75, marginBottom:"1.25rem" }}>
                Birçok kurs öğrenciyi sınava hazırlayıp bırakır. EGG&apos;de ise danışmanlık süreci kayıtla başlar, belge tesliminden sonra da kariyer desteğiyle devam eder. Öğrencilerimiz sürecin hiçbir adımında yalnız değildir.
              </p>
              <div className="highlight">
                <p>📌 Türkiye genelinde geçerli, İçişleri Bakanlığı onaylı belgeler veriyoruz. <strong style={{ color:"#fbbf24" }}>Mezunlarımızın %94&apos;ü sınavı ilk denemede geçiyor.</strong></p>
              </div>
            </div>
            <div className="card" style={{ borderColor:"rgba(251,191,36,.2)" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:".875rem" }}>
                {[["2008","Kuruluş Yılı"],["2.500+","Mezun Sayısı"],["%94","Başarı Oranı"],["120+","İş Ortağı"]].map(([v,l])=>(
                  <div key={l} style={{ textAlign:"center", padding:".875rem", borderRadius:".875rem", background:"rgba(251,191,36,.07)" }}>
                    <div style={{ fontFamily:"var(--font-archivo)", fontWeight:900, fontSize:"1.75rem", color:"#fbbf24" }}>{v}</div>
                    <div style={{ fontSize:".72rem", color:"rgba(255,255,255,.45)", marginTop:".3rem" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim Anlayışı */}
      <section className="section section-alt">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div className="two-col" style={{ alignItems:"start" }}>
            <div>
              <p className="s-label">📚 Eğitim Anlayışımız</p>
              <h2 className="s-title">Sınava Hazırlık Değil,<br/><span className="text-gold">Mesleğe Hazırlık</span></h2>
              <p className="s-sub" style={{ marginTop:".875rem" }}>
                Özel güvenlik eğitimi yalnızca yazılı sınav hazırlığından ibaret değildir. Güvenlik görevlisi sahaya çıktığında teorik bilgiye değil, içselleştirilmiş reflekslere ihtiyaç duyar. Bu farkı bilen bir eğitim anlayışıyla çalışıyoruz.
              </p>
              <ul className="check-list" style={{ marginTop:"1.5rem" }}>
                <li>Teorik dersler gerçek vaka analizleriyle pekiştiriliyor</li>
                <li>Uygulamalı tatbikatlar yetkili alanlarda gerçekleştiriliyor</li>
                <li>Sınıf büyüklükleri bireysel ilkiyi mümkün kılacak şekilde sınırlı tutuluyor</li>
                <li>Mevzuat değişiklikleri anında müfredata yansıtılıyor</li>
                <li>Sınav öncesi tekrar ve hazırlık desteği sağlanıyor</li>
                <li>Mezuniyet sonrası istihdam yönlendirmesi yapılıyor</li>
              </ul>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {[
                { ic:"👨‍🏫", t:"Eğitmen Kadrosu", d:"Emekli güvenlik uzmanları, hukuk akademisyenleri ve aktif sektör profesyonellerinden oluşan kadromuz, teorik bilgiyi sahadan gelen gerçek deneyimle harmanlıyor." },
                { ic:"🎯", t:"Uygulamalı Tatbikat", d:"Sınıf dersleriyle başlayan eğitim, gerçek tatbikat alanlarında uygulama boyutuna taşınır. Poligon eğitimi silahlı program kapsamındadır." },
                { ic:"📋", t:"Süreç Takibi", d:"Kayıttan sertifika teslimini kadar danışmanınız sizi takip eder. Sınav tarihleri, evrak süreçleri ve Bakanlık yazışmalarında destek alırsınız." },
              ].map(f=>(
                <div key={f.t} className="card" style={{ padding:"1.25rem" }}>
                  <div style={{ display:"flex", gap:".875rem", alignItems:"flex-start" }}>
                    <div style={{ width:44, height:44, borderRadius:11, background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", flexShrink:0 }}>{f.ic}</div>
                    <div><h3 style={{ marginBottom:".3rem" }}>{f.t}</h3><p style={{ fontSize:".82rem", lineHeight:1.65 }}>{f.d}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div style={{ textAlign:"center", marginBottom:"2.5rem" }}>
            <p className="s-label" style={{ justifyContent:"center" }}>🎯 Misyon & Vizyon</p>
            <h2 className="s-title">Nereye Gidiyoruz,<br/><span className="text-gold">Neden Var Oluyoruz?</span></h2>
          </div>
          <div className="grid-1 grid-2" style={{ maxWidth:860, margin:"0 auto", gap:"1.25rem" }}>
            <div className="card" style={{ borderColor:"rgba(251,191,36,.2)", padding:"2rem" }}>
              <div style={{ fontSize:"2rem", marginBottom:".875rem" }}>🎯</div>
              <h3 style={{ color:"#fbbf24", fontSize:"1.1rem", marginBottom:".75rem" }}>Misyonumuz</h3>
              <p style={{ fontSize:".9rem", lineHeight:1.75, color:"rgba(255,255,255,.65)" }}>
                Özel güvenlik sektörüne, hukuki bilgisi yerinde, sahaya hazır ve etik değerlere sahip güvenlik profesyonelleri yetiştirmek. Her adayı yalnızca sınava değil, güçlü ve uzun soluklu bir kariyere hazırlamak.
              </p>
            </div>
            <div className="card" style={{ borderColor:"rgba(251,191,36,.15)", padding:"2rem" }}>
              <div style={{ fontSize:"2rem", marginBottom:".875rem" }}>🔭</div>
              <h3 style={{ color:"#fbbf24", fontSize:"1.1rem", marginBottom:".75rem" }}>Vizyonumuz</h3>
              <p style={{ fontSize:".9rem", lineHeight:1.75, color:"rgba(255,255,255,.65)" }}>
                Türkiye&apos;nin özel güvenlik sektöründe kalite standartlarını belirleyen, mezunlarının kariyer başarısıyla anılan ve sektörün referans eğitim kurumu olarak kabul gören bir kurum olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="section section-alt">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div style={{ textAlign:"center", marginBottom:"2.5rem" }}>
            <p className="s-label" style={{ justifyContent:"center" }}>💎 Değerlerimiz</p>
            <h2 className="s-title">EGG&apos;yi EGG Yapan <span className="text-gold">Temel Değerler</span></h2>
          </div>
          <div className="grid-1 grid-2 grid-3">
            {VALUES.map(v=>(
              <div key={v.t} className="value-card">
                <div className="value-card-icon">{v.ic}</div>
                <h3>{v.t}</h3><p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden EGG */}
      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div style={{ textAlign:"center", marginBottom:"2.5rem" }}>
            <p className="s-label" style={{ justifyContent:"center" }}>✅ Neden Bizi Seçmeli?</p>
            <h2 className="s-title">EGG&apos;yi Tercih Etmek İçin <span className="text-gold">6 Güçlü Neden</span></h2>
          </div>
          <div className="grid-1 grid-2 grid-3">
            {WHY.map(w=>(
              <div key={w.t} className="card">
                <div style={{ fontSize:"1.75rem", marginBottom:".75rem" }}>{w.ic}</div>
                <h3 style={{ marginBottom:".5rem" }}>{w.t}</h3>
                <p style={{ fontSize:".85rem", lineHeight:1.7 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="EGG ile Kariyer Yolculuğunuzu Başlatın"
        sub={`${SITE.city}'da özel güvenlik eğitimi hakkında bilgi almak, kurumumuzu tanımak veya kayıt sürecini başlatmak için danışmanımıza ulaşın.`}
        btn2={<Link href="/iletisim" className="btn btn-primary">İletişime Geç →</Link>}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { WA_URL, SITE } from "@/lib/config";
import { waUrl, CONTACT } from "@/lib/contact";
import { BLOG_POSTS, CTA } from "@/lib/content";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import WaIcon from "@/components/ui/WaIcon";
import { SEO_BASE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Özel Güvenlik Rehberi | EGG Güvenlik Blog Adana",
  description: "Adana özel güvenlik kursu rehberi. Silahlı belge nasıl alınır, yenileme eğitimi nedir, sınav nasıl geçilir? Güncel ve güvenilir içerikler.",
  keywords: ["özel güvenlik blog","güvenlik eğitimi rehberi","silahlı güvenlik belge bilgi","özel güvenlik kariyer Adana"],
  alternates: { canonical: `${SEO_BASE.siteUrl}/blog` },
  openGraph: { title: "Özel Güvenlik Rehberi | EGG Güvenlik Blog", description: "Güvenlik eğitimi, kariyer ve sınav hakkında rehber içerikler.", url: `${SEO_BASE.siteUrl}/blog`, locale: "tr_TR", type: "website" },
};

const GROUPS = ["Tümü", "Eğitim Rehberi", "Kayıt Şartları", "Sınav Süreci", "Kariyer Rehberi", "Yenileme Eğitimi"];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Özel Güvenlik Rehberi"
        sub={`${SITE.city} ve Türkiye genelinde özel güvenlik eğitimi hakkında güncel, doğru ve pratik bilgiler. Kariyer kararınızı bu içeriklerle daha güvenli verin.`}
        badge="Ücretsiz Rehber İçerikler"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          {/* Category pills */}
          <div style={{display:"flex",flexWrap:"wrap",gap:".5rem",marginBottom:"2.5rem"}}>
            {GROUPS.map((c,i)=>(
              <span key={c} style={{padding:".35rem .875rem",borderRadius:999,fontSize:".78rem",fontWeight:700,cursor:"pointer",
                background:i===0?"rgba(251,191,36,.15)":"rgba(255,255,255,.05)",
                border:i===0?"1px solid rgba(251,191,36,.35)":"1px solid rgba(255,255,255,.1)",
                color:i===0?"#fbbf24":"rgba(255,255,255,.55)"}}>
                {c}
              </span>
            ))}
          </div>

          <div className="grid-1 grid-3">
            {BLOG_POSTS.map(post=>(
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{textDecoration:"none"}}>
                <div className="blog-card-top">
                  <div className="blog-card-tags">
                    <span className={`tag ${post.catColor}`}>{post.cat}</span>
                    <span style={{color:"rgba(255,255,255,.3)",fontSize:".72rem"}}>⏱ {post.read}</span>
                    <span style={{color:"rgba(255,255,255,.25)",fontSize:".7rem",marginLeft:"auto"}}>{post.catGroup}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                </div>
                <div className="blog-card-footer">
                  <span className="blog-card-meta">{post.date}</span>
                  <span className="blog-card-link">Devamını Oku →</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{textAlign:"center",marginTop:"3rem"}}>
            <div className="highlight" style={{maxWidth:520,margin:"0 auto 1.5rem"}}>
              <p>💡 Aradığınız konuyu bulamadınız mı? WhatsApp&apos;tan danışmanımıza sorun; en doğru bilgiyi paylaşalım.</p>
            </div>
            <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm">
              <WaIcon size={15}/> {CTA.advisor}
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Bilgi Aldınız, Şimdi Adım Atın"
        sub={`${SITE.city}'da özel güvenlik kariyerinizi başlatmak için danışmanımızla görüşün. Kayıt süreci, evrak listesi ve eğitim takvimi hakkında ücretsiz bilgi alın.`}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WA_URL } from "@/lib/config";
import { BLOG_POSTS, CTA } from "@/lib/content";
import { SEO_BASE, buildBlogPostingSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { waUrl } from "@/lib/contact";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import WaIcon from "@/components/ui/WaIcon";

export function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: post.metaTitle,
    description: post.metaDesc,
    keywords: [post.cat, "özel güvenlik eğitimi", "Adana güvenlik kursu", "EGG güvenlik"],
    authors: [{ name: SEO_BASE.siteName }],
    alternates: { canonical: `${SEO_BASE.siteUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      url: `${SEO_BASE.siteUrl}/blog/${post.slug}`,
      locale: "tr_TR",
      type: "article",
      siteName: SEO_BASE.siteName,
      publishedTime: post.date,
    },
    twitter: { card: "summary_large_image", title: post.metaTitle, description: post.metaDesc },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 4);
  
  const blogSchema = buildBlogPostingSchema({
    title: post.title,
    description: post.metaDesc,
    slug: post.slug,
    date: post.date,
  });
  
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>

      <PageHero
        title={post.title}
        sub={post.desc}
        badge={`${post.cat} · ${post.read} okuma`}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <section className="section section-dark">
        <div className="grid-bg"/>
        <div className="wrapper rel">
          <div className="two-col two-col-3-2">
            {/* Article */}
            <article aria-label={post.title}>
              <div style={{ display:"flex", gap:".75rem", flexWrap:"wrap", alignItems:"center", marginBottom:"1.5rem" }}>
                <span className={`tag ${post.catColor}`}>{post.cat}</span>
                <time dateTime={post.date} style={{ color:"rgba(255,255,255,.35)", fontSize:".78rem" }}>📅 {post.date}</time>
                <span style={{ color:"rgba(255,255,255,.35)", fontSize:".78rem" }}>⏱ {post.read} okuma</span>
              </div>

              {/* TOC */}
              {post.toc.length > 0 && (
                <nav aria-label="İçindekiler" className="toc-box">
                  <h2 style={{ fontFamily:"var(--font-archivo)", fontWeight:700, color:"#fbbf24", fontSize:".9rem", marginBottom:".875rem" }}>📋 İçindekiler</h2>
                  <ol>
                    {post.toc.map((t, i) => (
                      <li key={i}><a href={`#toc-${i}`}>{t}</a></li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* Body */}
              <div className="bdc" dangerouslySetInnerHTML={{ __html: post.body }}/>

              {/* In-article CTA */}
              <div style={{ marginTop:"2.5rem", padding:"1.5rem", borderRadius:"1.25rem", background:"linear-gradient(135deg,rgba(251,191,36,.08),rgba(251,191,36,.04))", border:"1px solid rgba(251,191,36,.2)" }}>
                <p style={{ color:"#fff", fontFamily:"var(--font-archivo)", fontWeight:700, marginBottom:".5rem" }}>
                  Bu konuda danışmanlık almak ister misiniz?
                </p>
                <p style={{ color:"rgba(255,255,255,.55)", fontSize:".875rem", marginBottom:"1rem", lineHeight:1.65 }}>
                  Adana&apos;da özel güvenlik eğitimi hakkında tüm sorularınız için WhatsApp hattımız aktiftir.
                </p>
                <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm">
                  <WaIcon size={15}/> {CTA.wa}
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside aria-label="Kenar çubuğu">
              <div style={{ position:"sticky", top:"6rem", display:"flex", flexDirection:"column", gap:"1rem" }}>
                {/* CTA card */}
                <div className="card" style={{ borderColor:"rgba(251,191,36,.2)" }}>
                  <div className="card-icon">💬</div>
                  <h3>Ücretsiz Danışmanlık</h3>
                  <p style={{ marginBottom:".875rem" }}>
                    Kayıt şartları, evrak listesi ve eğitim takvimi için danışmanımıza yazın.
                  </p>
                  <a href={waUrl("default")} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-full btn-sm">
                    <WaIcon size={15}/> WhatsApp
                  </a>
                </div>

                {/* Programs */}
                <div className="card">
                  <h3 style={{ marginBottom:".75rem", fontSize:".9rem" }}>🛡️ Eğitim Programları</h3>
                  {[
                    ["Silahlı Güvenlik Eğitimi", "/egitimler/silahli-ozel-guvenlik-egitimi"],
                    ["Silahsız Güvenlik Eğitimi", "/egitimler/silahsiz-ozel-guvenlik-egitimi"],
                    ["Yenileme Eğitimi", "/egitimler/yenileme-egitimi"],
                  ].map(([l, h]) => (
                    <Link key={h} href={h} style={{ display:"block", color:"#fbbf24", fontSize:".88rem", padding:".25rem 0", borderBottom:"1px solid rgba(255,255,255,.05)" }}>
                      → {l}
                    </Link>
                  ))}
                </div>

                {/* Related */}
                {related.length > 0 && (
                  <div className="card">
                    <h3 style={{ marginBottom:".75rem", fontSize:".9rem" }}>📰 İlgili Yazılar</h3>
                    {related.map(p => (
                      <Link key={p.slug} href={`/blog/${p.slug}`}
                        style={{ display:"block", color:"rgba(255,255,255,.6)", fontSize:".84rem", lineHeight:1.5, padding:".3rem 0", borderBottom:"1px solid rgba(255,255,255,.05)" }}>
                        {p.title}
                      </Link>
                    ))}
                  </div>
                )}

                {/* SSS link */}
                <div className="card">
                  <h3 style={{ marginBottom:".625rem", fontSize:".9rem" }}>❓ Sık Sorulan Sorular</h3>
                  <Link href="/sss" style={{ color:"#fbbf24", fontSize:".88rem" }}>→ Tüm SSS sayfasına git</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title={`Adana'da Özel Güvenlik Eğitimine Başlayın`}
        sub="Eğitim programları ve kayıt süreci hakkında ücretsiz bilgi alın. Danışmanımız sorularınızı yanıtlar."
      />
    </>
  );
}

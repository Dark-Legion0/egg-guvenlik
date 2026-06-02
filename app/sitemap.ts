import { MetadataRoute } from "next";

export const dynamic = "force-static";
import { SEO_BASE } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SEO_BASE.siteUrl;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}`,                                               lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/egitimler`,                                     lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/egitimler/silahli-ozel-guvenlik-egitimi`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/egitimler/silahsiz-ozel-guvenlik-egitimi`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/egitimler/yenileme-egitimi`,                    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kayit-sureci`,                                  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kariyer-firsatlari`,                            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sss`,                                           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hakkimizda`,                                    lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/iletisim`,                                      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,                                          lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

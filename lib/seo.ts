// ═══════════════════════════════════════════════════════════
// EGG — Merkezi SEO & Schema Konfigürasyonu
// ═══════════════════════════════════════════════════════════
import { CONTACT } from "./contact";

export const SEO_BASE = {
  siteName:    "EGG Özel Güvenlik Eğitim Kurumu",
  siteUrl:     "https://egg-guvenlik.com",  // Gerçek domain girilince güncelle
  locale:      "tr_TR",
  city:        "Adana",
  region:      "TR-01",
  country:     "TR",
  ogImage:     "/og-image.jpg",  // public/og-image.jpg eklenmeli
};

export const META_DEFAULTS = {
  title:       "EGG Özel Güvenlik Eğitim Kurumu | Adana Özel Güvenlik Kursu",
  description: "Adana'da silahlı, silahsız ve yenileme özel güvenlik eğitimi. İçişleri Bakanlığı onaylı sertifika, %94 sınav başarısı, 2.500+ mezun. Hemen bilgi alın.",
  keywords:    ["Adana özel güvenlik kursu","özel güvenlik eğitimi","silahlı özel güvenlik kursu","silahsız özel güvenlik kursu","özel güvenlik belgesi","güvenlik kursu Adana"],
};

// ── Sayfa bazlı metadata tanımları ──────────────────────────
export const PAGE_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  "/": {
    title: "EGG Özel Güvenlik Eğitim Kurumu | Adana Özel Güvenlik Kursu",
    description: "Adana'da silahlı, silahsız ve yenileme özel güvenlik eğitimi. İçişleri Bakanlığı onaylı, %94 sınav başarısı, 2.500+ mezun. Ücretsiz danışmanlık için WhatsApp.",
    keywords: ["Adana özel güvenlik kursu","özel güvenlik eğitimi","güvenlik kursu Adana","özel güvenlik belgesi"],
  },
  "/egitimler": {
    title: "Özel Güvenlik Eğitim Programları | EGG Güvenlik Adana",
    description: "Adana'da silahlı, silahsız ve yenileme özel güvenlik eğitim programları. İçişleri Bakanlığı onaylı sertifika, deneyimli eğitmenler.",
    keywords: ["özel güvenlik eğitim programları","silahlı güvenlik eğitimi","silahsız güvenlik eğitimi","yenileme eğitimi"],
  },
  "/egitimler/silahli-ozel-guvenlik-egitimi": {
    title: "Silahlı Özel Güvenlik Eğitimi Adana | EGG Güvenlik",
    description: "Adana'da silahlı özel güvenlik eğitimi. 120 saatlik İçişleri Bakanlığı onaylı program, ateşli silah tatbikatı, devlet onaylı sertifika. 0546 267 89 79.",
    keywords: ["silahlı özel güvenlik eğitimi","silahlı özel güvenlik kursu","Adana silahlı güvenlik kursu","silahlı güvenlik belgesi"],
  },
  "/egitimler/silahsiz-ozel-guvenlik-egitimi": {
    title: "Silahsız Özel Güvenlik Eğitimi Adana | EGG Güvenlik",
    description: "Adana'da silahsız özel güvenlik eğitimi. 90 saatlik devlet onaylı program, AVM / site / hastane güvenlik kariyeri için ideal başlangıç.",
    keywords: ["silahsız özel güvenlik eğitimi","silahsız özel güvenlik kursu","Adana silahsız güvenlik kursu","silahsız güvenlik belgesi"],
  },
  "/egitimler/yenileme-egitimi": {
    title: "Özel Güvenlik Yenileme Eğitimi Adana | EGG Güvenlik",
    description: "Adana'da özel güvenlik kimlik yenileme eğitimi. 40 saatlik devlet onaylı program, silahlı ve silahsız belge yenileme. Zamanında başvurun.",
    keywords: ["özel güvenlik yenileme eğitimi","güvenlik kimlik yenileme","Adana güvenlik yenileme eğitimi","özel güvenlik yenileme kursu"],
  },
  "/kayit-sureci": {
    title: "Özel Güvenlik Kursu Kayıt Süreci | EGG Güvenlik Adana",
    description: "Adana özel güvenlik kursuna nasıl kayıt olunur? Adım adım süreç, evrak listesi, danışman görüşmesi ve sınav takibi hakkında kapsamlı bilgi.",
    keywords: ["özel güvenlik kursu kayıt","güvenlik kursu başvuru","özel güvenlik evrak listesi","Adana güvenlik kursu kayıt şartları"],
  },
  "/kariyer-firsatlari": {
    title: "Özel Güvenlik Kariyer Fırsatları | EGG Güvenlik Adana",
    description: "Özel güvenlik belgesiyle nerelerde çalışılır? AVM, hastane, fabrika, site güvenliği ve kariyer yol haritası. Adana'da güvenlik kariyerinizi planlayın.",
    keywords: ["özel güvenlik kariyer","güvenlik görevlisi iş alanları","özel güvenlik belgesi çalışma alanları","güvenlik kariyer Adana"],
  },
  "/sss": {
    title: "Özel Güvenlik Eğitimi Sık Sorulan Sorular | EGG Güvenlik",
    description: "Özel güvenlik eğitimi SSS. Yaş şartı, evrak listesi, sınav süreci, kurs ücretleri ve kariyer hakkında tüm sorularınızın cevabı.",
    keywords: ["özel güvenlik sık sorulan sorular","güvenlik kursu SSS","özel güvenlik şartları","özel güvenlik sınav süreci"],
  },
  "/hakkimizda": {
    title: "EGG Özel Güvenlik Eğitim Kurumu Hakkında | Adana",
    description: "EGG Özel Güvenlik Eğitim Kurumu hakkında. 2008'den bu yana İçişleri Bakanlığı onaylı güvenlik eğitimleri. 2500+ mezun, %94 başarı oranı, Adana.",
    keywords: ["EGG özel güvenlik","Adana güvenlik eğitim kurumu","özel güvenlik okulu Adana","güvenlik kursu Adana"],
  },
  "/iletisim": {
    title: "EGG Özel Güvenlik İletişim | Adana Güvenlik Kursu",
    description: "EGG Özel Güvenlik Eğitim Kurumu iletişim bilgileri. Tel: 0546 267 89 79 · WhatsApp · eggguvenlik01@gmail.com · Adana. Ücretsiz danışmanlık.",
    keywords: ["Adana özel güvenlik iletişim","güvenlik kursu bilgi","EGG güvenlik telefon","özel güvenlik kayıt Adana"],
  },
  "/blog": {
    title: "Özel Güvenlik Rehberi | EGG Güvenlik Blog",
    description: "Özel güvenlik eğitimi rehberi. Silahlı belge nasıl alınır, yenileme eğitimi nedir, sınav nasıl geçilir? Güncel ve güvenilir içerikler.",
    keywords: ["özel güvenlik blog","güvenlik eğitimi rehberi","silahlı güvenlik belge","özel güvenlik kariyer"],
  },
};

// ── Schema Builders ──────────────────────────────────────────

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${SEO_BASE.siteUrl}/#organization`,
    name: SEO_BASE.siteName,
    alternateName: "EGG Güvenlik",
    description: "Adana'da silahlı ve silahsız özel güvenlik personeli yetiştiren İçişleri Bakanlığı onaylı eğitim kurumu.",
    url: SEO_BASE.siteUrl,
    telephone: `+${CONTACT.phone}`,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "",  // Tam adres girilince eklenecek
      addressLocality: "Adana",
      addressRegion: "Adana",
      postalCode: "",     // Posta kodu girilince eklenecek
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.0015",   // Adana genel koordinatı - gerçek koordinat girilecek
      longitude: "35.3213",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "15:00" },
    ],
    hasMap: CONTACT.mapsUrl,
    areaServed: { "@type": "City", name: "Adana" },
    serviceType: ["Özel Güvenlik Eğitimi", "Silahlı Güvenlik Eğitimi", "Silahsız Güvenlik Eğitimi", "Yenileme Eğitimi"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87",   // Gerçek yorum sayısı girilecek
      bestRating: "5",
    },
    sameAs: [
      CONTACT.mapsUrl,
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_BASE.siteUrl}/#website`,
    url: SEO_BASE.siteUrl,
    name: SEO_BASE.siteName,
    description: META_DEFAULTS.description,
    inLanguage: "tr-TR",
    publisher: { "@id": `${SEO_BASE.siteUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SEO_BASE.siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SEO_BASE.siteUrl}${item.url}`,
    })),
  };
}

export function buildFAQSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function buildBlogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SEO_BASE.siteUrl}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: SEO_BASE.siteName,
      url: SEO_BASE.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SEO_BASE.siteName,
      logo: { "@type": "ImageObject", url: `${SEO_BASE.siteUrl}/logo.png` },
    },
    isPartOf: { "@id": `${SEO_BASE.siteUrl}/#website` },
    inLanguage: "tr-TR",
  };
}

export function buildCourseSchema(course: {
  name: string;
  description: string;
  duration: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: SEO_BASE.siteName,
      url: SEO_BASE.siteUrl,
    },
    url: `${SEO_BASE.siteUrl}${course.url}`,
    inLanguage: "tr-TR",
    timeRequired: course.duration,
    educationalCredentialAwarded: "İçişleri Bakanlığı Onaylı Özel Güvenlik Sertifikası",
    availableLanguage: "Turkish",
    courseMode: "BLENDED",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "TRY",
      seller: { "@type": "Organization", name: SEO_BASE.siteName },
    },
  };
}

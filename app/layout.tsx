import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { buildLocalBusinessSchema, buildWebSiteSchema, SEO_BASE, META_DEFAULTS } from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#01051f",
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_BASE.siteUrl),
  title: {
    default: META_DEFAULTS.title,
    template: `%s | EGG Özel Güvenlik`,
  },
  description: META_DEFAULTS.description,
  keywords: META_DEFAULTS.keywords,
  authors: [{ name: SEO_BASE.siteName }],
  creator: SEO_BASE.siteName,
  publisher: SEO_BASE.siteName,
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: SEO_BASE.locale,
    siteName: SEO_BASE.siteName,
    images: [{ url: SEO_BASE.ogImage, width: 1200, height: 630, alt: SEO_BASE.siteName }],
  },
  twitter: { card: "summary_large_image", images: [SEO_BASE.ogImage] },
  alternates: { canonical: SEO_BASE.siteUrl },
  verification: { google: "" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusiness = buildLocalBusinessSchema();
  const website = buildWebSiteSchema();

  return (
    <html lang="tr" dir="ltr">
      <head>
        {/* Archivo — tek font ailesi, tüm ağırlıklar */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">İçeriğe geç</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileNav />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

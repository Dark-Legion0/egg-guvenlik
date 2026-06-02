// ─── Site-wide config ───────────────────────────────────────
// İletişim bilgileri için lib/contact.ts dosyasını kullanın.
import { CONTACT, waUrl } from "./contact";

export const SITE = {
  name:     "EGG Güvenlik",
  fullName: "EGG Özel Güvenlik Eğitim Kurumu",
  city:     "Adana",
  // Geriye dönük uyumluluk için contact.ts'den al
  phone:    CONTACT.displayPhone,
  phoneHref:CONTACT.phoneHref,
  email:    CONTACT.email,
  address:  CONTACT.address,
  mapsUrl:  CONTACT.mapsUrl,
  // WhatsApp — default mesajla
  whatsapp:     CONTACT.whatsappNum,
  whatsappMsg:  CONTACT.messages.default,
};

// Geriye dönük uyumluluk için WA_URL
export const WA_URL = waUrl("default");

export const NAV_LINKS = [
  { label: "Ana Sayfa",  href: "/" },
  { label: "Eğitimler", href: "/egitimler" },
  { label: "Kayıt",     href: "/kayit-sureci" },
  { label: "Online Test", href: "/online-test" },
  { label: "SSS",       href: "/sss" },
  { label: "Hakkımızda",href: "/hakkimizda" },
  { label: "İletişim",  href: "/iletisim" },
];

export const MOBILE_NAV = [
  { label: "Ana Sayfa",  href: "/",            icon: "🏠" },
  { label: "Eğitimler", href: "/egitimler",    icon: "🛡️" },
  { label: "Kayıt",     href: "/kayit-sureci", icon: "📋" },
  { label: "SSS",       href: "/sss",          icon: "❓" },
  { label: "İletişim",  href: "/iletisim",     icon: "📞" },
];

export const PROGRAMS = [
  {
    id: "silahli",
    href: "/egitimler/silahli-ozel-guvenlik-egitimi",
    title: "Silahlı Özel Güvenlik Eğitimi",
    icon: "hand",
    duration: "120 Saat",
    badge: "En Popüler",
    color: "gold",
    desc: "Ateşli silah eğitimi dahil kapsamlı güvenlik programı. Geniş iş alanı ve yüksek ücret potansiyeli.",
    features: ["Ateşli silah ve poligon tatbikatı","Taktiksel müdahale teknikleri","Özel güvenlik mevzuatı","Temel ilk yardım ve CPR"],
    waKey: "silahli" as const,
  },
  {
    id: "silahsiz",
    href: "/egitimler/silahsiz-ozel-guvenlik-egitimi",
    title: "Silahsız Özel Güvenlik Eğitimi",
    icon: "🛡️",
    duration: "90 Saat",
    badge: null,
    color: "blue",
    desc: "Hızlı süreç, yaygın iş imkânı. Güvenlik sektörüne profesyonel giriş için ideal program.",
    features: ["Güvenlik prosedürleri ve devriye","İletişim ve kalabalık yönetimi","Hukuki mevzuat ve sorumluluklar","Temel ilk yardım uygulamaları"],
    waKey: "silahsiz" as const,
  },
  {
    id: "yenileme",
    href: "/egitimler/yenileme-egitimi",
    title: "Yenileme Eğitimi",
    icon: "🔄",
    duration: "40 Saat",
    badge: "Zorunlu",
    color: "gray",
    desc: "5 yılda bir zorunlu. Güncel mevzuat bilgisi ve kimlik yenileme desteği.",
    features: ["Güncel mevzuat değişiklikleri","Atış tazeleme (silahlı için)","Vaka analizi ve senaryolar","Hızlı bürokrasi ve sertifika desteği"],
    waKey: "yenileme" as const,
  },
];

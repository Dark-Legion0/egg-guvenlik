// ═══════════════════════════════════════════════════════════
// EGG Özel Güvenlik — Merkezi İletişim ve Dönüşüm Config
// Bu dosyayı güncelleyerek tüm sayfalardaki bilgileri
// tek seferinde değiştirebilirsiniz.
// ═══════════════════════════════════════════════════════════

export const CONTACT = {
  // ── Telefon ─────────────────────────────────────────────
  phone:        "905462678979",          // wa.me / tel: formatı için (başında + olmadan)
  displayPhone: "0546 267 89 79",        // Gösterim için formatlanmış
  phoneHref:    "tel:+905462678979",     // Doğrudan arama linki

  // ── E-posta ─────────────────────────────────────────────
  email:        "eggguvenlik01@gmail.com",

  // ── WhatsApp ─────────────────────────────────────────────
  // Aynı numara, farklı format gerekmez
  whatsappNum:  "905462678979",

  // ── Adres & Konum ────────────────────────────────────────
  address:      "Adana, Türkiye",
  addressFull:  "EGG Özel Güvenlik Eğitim Kurumu, Adana",
  mapsUrl:      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x15288f8a490394b3:0xd1b676b51fff6cb1",

  // ── Çalışma Saatleri ─────────────────────────────────────
  workingHours: [
    { day: "Pzt–Cuma",    hours: "08:00 – 18:00", open: true  },
    { day: "Cumartesi",   hours: "09:00 – 15:00", open: true  },
    { day: "Pazar",       hours: "Kapalı",         open: false },
  ],
  whatsappAvailability: "7/24 WhatsApp desteği",

  // ── Sosyal Medya ─────────────────────────────────────────
  instagram: "",   // Daha sonra eklenecek
  facebook:  "",   // Daha sonra eklenecek

  // ── WhatsApp Mesajları (sayfa bazlı) ─────────────────────
  messages: {
    default:    "Merhaba, EGG Özel Güvenlik Eğitim Kurumu hakkında bilgi almak istiyorum.",
    egitimler:  "Merhaba, özel güvenlik eğitim programları hakkında bilgi almak istiyorum.",
    silahli:    "Merhaba, silahlı özel güvenlik eğitimi hakkında bilgi almak istiyorum.",
    silahsiz:   "Merhaba, silahsız özel güvenlik eğitimi hakkında bilgi almak istiyorum.",
    yenileme:   "Merhaba, özel güvenlik yenileme eğitimi hakkında bilgi almak istiyorum.",
    kayit:      "Merhaba, özel güvenlik kursu kayıt süreci hakkında bilgi almak istiyorum.",
    evrak:      "Merhaba, kayıt için gerekli evrak listesini öğrenmek istiyorum.",
    ucret:      "Merhaba, özel güvenlik kurs ücretleri hakkında bilgi almak istiyorum.",
    kariyer:    "Merhaba, özel güvenlik kariyer fırsatları hakkında bilgi almak istiyorum.",
    danismanlik:"Merhaba, ücretsiz eğitim danışmanlığı almak istiyorum.",
  },
} as const;

// ── WhatsApp URL oluşturucu ──────────────────────────────
export function waUrl(messageKey: keyof typeof CONTACT.messages = "default"): string {
  const msg = CONTACT.messages[messageKey];
  return `https://wa.me/${CONTACT.whatsappNum}?text=${encodeURIComponent(msg)}`;
}

// ── Form WhatsApp mesajı oluşturucu ──────────────────────
export function waFormUrl(data: {
  name: string;
  phone: string;
  educationType: string;
  message?: string;
}): string {
  const text = [
    "Merhaba, özel güvenlik eğitimi hakkında bilgi almak istiyorum.",
    `Ad Soyad: ${data.name}`,
    `Telefon: ${data.phone}`,
    `İlgilendiğim Eğitim: ${data.educationType}`,
    data.message ? `Mesaj: ${data.message}` : "",
  ].filter(Boolean).join("\n");
  return `https://wa.me/${CONTACT.whatsappNum}?text=${encodeURIComponent(text)}`;
}

// ── Event tracking altyapısı ─────────────────────────────
// Şimdilik console.log — ileride Meta Pixel / GA4 bağlanabilir
export function trackEvent(event: string, props?: Record<string, string>): void {
  if (process.env.NODE_ENV === "development") {
    console.log(`[EGG Analytics] ${event}`, props ?? {});
  }
  // TODO: window.fbq?.("track", event, props);
  // TODO: window.gtag?.("event", event, props);
}

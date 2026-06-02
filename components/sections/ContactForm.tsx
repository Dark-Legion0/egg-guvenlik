"use client";
import { useState, FormEvent } from "react";
import { waFormUrl, trackEvent } from "@/lib/contact";
import WaIcon from "@/components/ui/WaIcon";

interface FormData {
  name: string;
  phone: string;
  educationType: string;
  message: string;
  kvkk: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  educationType?: string;
  kvkk?: string;
}

const EDUCATION_OPTIONS = [
  { value: "", label: "Eğitim türü seçin..." },
  { value: "Silahlı Özel Güvenlik Eğitimi", label: "Silahlı Özel Güvenlik Eğitimi" },
  { value: "Silahsız Özel Güvenlik Eğitimi", label: "🛡️ Silahsız Özel Güvenlik Eğitimi" },
  { value: "Yenileme Eğitimi", label: "🔄 Yenileme Eğitimi" },
  { value: "Henüz karar vermedim, danışmanlık istiyorum", label: "❓ Henüz karar vermedim" },
];

export default function ContactForm({ page = "iletisim", showWaBtn = false }: { page?: string; showWaBtn?: boolean }) {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", educationType: "", message: "", kvkk: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Ad soyad en az 2 karakter olmalıdır.";
    if (!form.phone.trim())
      e.phone = "Telefon numarası zorunludur.";
    else if (!/^[\d\s\-()+]{10,15}$/.test(form.phone.trim()))
      e.phone = "Geçerli bir telefon numarası girin. (örn: 05XX XXX XX XX)";
    if (!form.educationType)
      e.educationType = "Lütfen ilgilendiğiniz eğitimi seçin.";
    if (!form.kvkk)
      e.kvkk = "Devam etmek için KVKK metnini kabul etmelisiniz.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (k: keyof FormData, v: string | boolean) => {
    setForm(prev => ({ ...prev, [k]: v }));
    if (errors[k as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [k]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulated submit — replace with real API/Formspree later
    await new Promise(r => setTimeout(r, 900));
    trackEvent("form_submit", { page, educationType: form.educationType });
    setStatus("success");
    setLoading(false);
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    trackEvent("form_whatsapp_click", { page, educationType: form.educationType });
    const url = waFormUrl({
      name: form.name,
      phone: form.phone,
      educationType: form.educationType,
      message: form.message,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (status === "success") {
    return (
      <div style={{
        padding:"2.5rem", borderRadius:"1.5rem", textAlign:"center",
        background:"linear-gradient(145deg, rgba(52,211,153,.08) 0%, rgba(16,185,129,.04) 100%)",
        border:"1px solid rgba(52,211,153,.2)",
      }}>
        <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>✅</div>
        <h3 style={{ fontFamily:"var(--font-archivo)", fontWeight:700, fontSize:"1.25rem", color:"#fff", marginBottom:".75rem" }}>
          Bilgi Talebiniz Alındı!
        </h3>
        <p style={{ color:"rgba(255,255,255,.6)", fontSize:".9rem", lineHeight:1.7, marginBottom:"1.5rem" }}>
          Danışmanımız en kısa sürede <strong style={{ color:"#fff" }}>{form.phone}</strong> numaralı telefonunuzu arayacak.
          Hızlı yanıt için WhatsApp&apos;tan da ulaşabilirsiniz.
        </p>
        <a
          href={waFormUrl({ name: form.name, phone: form.phone, educationType: form.educationType, message: form.message })}
          target="_blank" rel="noopener noreferrer"
          className="btn btn-wa btn-sm"
        >
          <WaIcon size={16}/> WhatsApp&apos;tan da Yaz
        </a>
      </div>
    );
  }

  const inputStyle = (hasError: boolean) => ({
    width:"100%", padding:".9rem 1.125rem",
    borderRadius:".875rem",
    background:"rgba(255,255,255,.04)",
    border: hasError ? "1.5px solid rgba(239,68,68,.6)" : "1.5px solid rgba(255,255,255,.1)",
    color:"#fff",
    fontFamily:"var(--font-archivo)", fontSize:".9rem",
    transition:"border-color .2s, box-shadow .2s",
    outline:"none",
    boxSizing:"border-box" as const,
  });

  const errorStyle = {
    color:"#f87171", fontSize:".78rem",
    marginTop:".375rem", display:"block",
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Bilgi talep formu">
      <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"1rem" }}>
        {/* Ad Soyad */}
        <div>
          <label htmlFor="cf-name" style={{ display:"block", color:"rgba(255,255,255,.7)", fontSize:".85rem", fontWeight:600, marginBottom:".4rem" }}>
            Ad Soyad <span style={{ color:"#fbbf24" }}>*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            value={form.name}
            onChange={e => handleChange("name", e.target.value)}
            placeholder="Adınızı ve soyadınızı girin"
            style={inputStyle(!!errors.name)}
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
          />
          {errors.name && <span id="cf-name-err" role="alert" style={errorStyle}>⚠ {errors.name}</span>}
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="cf-phone" style={{ display:"block", color:"rgba(255,255,255,.7)", fontSize:".85rem", fontWeight:600, marginBottom:".4rem" }}>
            Telefon <span style={{ color:"#fbbf24" }}>*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={form.phone}
            onChange={e => handleChange("phone", e.target.value)}
            placeholder="05XX XXX XX XX"
            style={inputStyle(!!errors.phone)}
            autoComplete="tel"
            inputMode="tel"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "cf-phone-err" : undefined}
          />
          {errors.phone && <span id="cf-phone-err" role="alert" style={errorStyle}>⚠ {errors.phone}</span>}
        </div>

        {/* Eğitim Türü */}
        <div>
          <label htmlFor="cf-type" style={{ display:"block", color:"rgba(255,255,255,.7)", fontSize:".85rem", fontWeight:600, marginBottom:".4rem" }}>
            İlgilendiğiniz Eğitim <span style={{ color:"#fbbf24" }}>*</span>
          </label>
          <select
            id="cf-type"
            value={form.educationType}
            onChange={e => handleChange("educationType", e.target.value)}
            style={{ ...inputStyle(!!errors.educationType), cursor:"pointer" }}
            aria-required="true"
            aria-invalid={!!errors.educationType}
            aria-describedby={errors.educationType ? "cf-type-err" : undefined}
          >
            {EDUCATION_OPTIONS.map(o => (
              <option key={o.value} value={o.value} style={{ background:"#020830" }}>{o.label}</option>
            ))}
          </select>
          {errors.educationType && <span id="cf-type-err" role="alert" style={errorStyle}>⚠ {errors.educationType}</span>}
        </div>

        {/* Mesaj */}
        <div>
          <label htmlFor="cf-msg" style={{ display:"block", color:"rgba(255,255,255,.7)", fontSize:".85rem", fontWeight:600, marginBottom:".4rem" }}>
            Mesajınız <span style={{ color:"rgba(255,255,255,.35)", fontWeight:400 }}>(opsiyonel)</span>
          </label>
          <textarea
            id="cf-msg"
            value={form.message}
            onChange={e => handleChange("message", e.target.value)}
            placeholder="Sormak istediğiniz sorular, eğitim dönemi tercihiniz veya notlarınız..."
            style={{ ...inputStyle(false), minHeight:110, resize:"vertical" }}
          />
        </div>

        {/* KVKK */}
        <div>
          <label style={{ display:"flex", alignItems:"flex-start", gap:".75rem", cursor:"pointer" }}>
            <input
              type="checkbox"
              checked={form.kvkk}
              onChange={e => handleChange("kvkk", e.target.checked)}
              style={{ width:18, height:18, marginTop:".15rem", accentColor:"#fbbf24", flexShrink:0, cursor:"pointer" }}
              aria-required="true"
              aria-invalid={!!errors.kvkk}
              aria-describedby={errors.kvkk ? "cf-kvkk-err" : undefined}
            />
            <span style={{ color:"rgba(255,255,255,.5)", fontSize:".8rem", lineHeight:1.6 }}>
              Kişisel verilerimin eğitim danışmanlığı amacıyla işlenmesini kabul ediyorum. <span style={{ color:"rgba(255,255,255,.3)" }}>(KVKK Aydınlatma Metni)</span>
            </span>
          </label>
          {errors.kvkk && <span id="cf-kvkk-err" role="alert" style={{ ...errorStyle, marginTop:".5rem" }}>⚠ {errors.kvkk}</span>}
        </div>
      </div>

      {/* Submit buttons */}
      <div style={{ display:"flex", gap:".75rem", flexWrap:"wrap", marginTop:"1.375rem" }}>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
          style={{ flex:1, minWidth:160, opacity: loading ? .7 : 1 }}
          aria-live="polite"
        >
          {loading ? (
            <span style={{ display:"flex", alignItems:"center", gap:".5rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation:"spin .8s linear infinite" }}>
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
              Gönderiliyor...
            </span>
          ) : "Bilgi Talebi Gönder →"}
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="btn btn-wa"
          style={{ flex:1, minWidth:160 }}
        >
          <WaIcon size={17}/> WhatsApp&apos;tan Gönder
        </button>
      </div>

      {/* Trust */}
      <p style={{ color:"rgba(255,255,255,.22)", fontSize:".72rem", marginTop:".875rem", textAlign:"center", lineHeight:1.6 }}>
        🔒 Bilgileriniz yalnızca eğitim danışmanlığı ve kayıt süreci hakkında bilgilendirme amacıyla kullanılacaktır.
        Üçüncü taraflarla paylaşılmaz.
      </p>
    </form>
  );
}

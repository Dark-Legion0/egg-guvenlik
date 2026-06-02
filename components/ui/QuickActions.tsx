"use client";
import { CONTACT, waUrl, trackEvent } from "@/lib/contact";
import WaIcon from "./WaIcon";
import PhoneIcon from "./PhoneIcon";

interface WaBtnProps {
  label?: string;
  waKey?: keyof typeof CONTACT.messages;
  className?: string;
  size?: "sm" | "md";
  full?: boolean;
  page?: string;
}

export function WaBtn({
  label = "WhatsApp'tan Bilgi Al",
  waKey = "default",
  className = "btn btn-wa",
  size,
  full,
  page = "",
}: WaBtnProps) {
  const cls = [className, size === "sm" ? "btn-sm" : "", full ? "btn-full" : ""].filter(Boolean).join(" ");
  return (
    <a
      href={waUrl(waKey)}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      onClick={() => trackEvent("whatsapp_click", { page, label })}
      aria-label={`WhatsApp: ${label}`}
    >
      <WaIcon size={size === "sm" ? 15 : 18} />
      {label}
    </a>
  );
}

interface PhoneBtnProps {
  label?: string;
  className?: string;
  size?: "sm" | "md";
  full?: boolean;
  page?: string;
}

export function PhoneBtn({
  label = "Hemen Ara",
  className = "btn btn-secondary",
  size,
  full,
  page = "",
}: PhoneBtnProps) {
  const cls = [className, size === "sm" ? "btn-sm" : "", full ? "btn-full" : ""].filter(Boolean).join(" ");
  return (
    <a
      href={CONTACT.phoneHref}
      className={cls}
      onClick={() => trackEvent("phone_click", { page })}
      aria-label={`Telefon: ${CONTACT.displayPhone}`}
    >
      <PhoneIcon size={size === "sm" ? 14 : 17} />
      {label}
    </a>
  );
}

interface MapBtnProps {
  label?: string;
  className?: string;
  size?: "sm" | "md";
  full?: boolean;
  page?: string;
}

export function MapBtn({
  label = "Konum Al",
  className = "btn btn-ghost",
  size,
  full,
  page = "",
}: MapBtnProps) {
  const cls = [className, size === "sm" ? "btn-sm" : "", full ? "btn-full" : ""].filter(Boolean).join(" ");
  return (
    <a
      href={CONTACT.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      onClick={() => trackEvent("map_click", { page })}
      aria-label="Konumu haritada gör"
    >
      <svg width={size === "sm" ? 14 : 17} height={size === "sm" ? 14 : 17} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      {label}
    </a>
  );
}

// Kurs ücreti sor
export function PricingBtn({ page = "", size = "sm" as const, full = false }) {
  return (
    <WaBtn
      label="Kurs Ücretlerini Sor"
      waKey="ucret"
      size={size}
      full={full}
      page={page}
    />
  );
}

// Evrak listesi al
export function DocsBtn({ page = "", size = "sm" as const, full = false }) {
  return (
    <WaBtn
      label="Evrak Listesini Al"
      waKey="evrak"
      size={size}
      full={full}
      page={page}
    />
  );
}

// Danışmanla görüş
export function AdvisorBtn({ page = "", size = "sm" as const, full = false }) {
  return (
    <WaBtn
      label="Danışmanla Görüş"
      waKey="danismanlik"
      size={size}
      full={full}
      page={page}
    />
  );
}

// Kayıt şartlarını öğren — navigasyon + WA combo
import Link from "next/link";
export function RegisterBtn({ page = "", className = "btn btn-primary btn-sm" }) {
  return (
    <Link
      href="/kayit-sureci"
      className={className}
      onClick={() => trackEvent("register_click", { page })}
    >
      Kayıt Şartlarını Öğren →
    </Link>
  );
}

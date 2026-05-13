"use client";

const DEFAULT_WHATSAPP_URL =
  "https://wa.me/212656712008?text=Hi%20Brocli%2C%20I%20need%20help%20before%20booking%20a%20cleaning.";

export function getWhatsAppUrl() {
  return process.env.NEXT_PUBLIC_BROCLI_WHATSAPP_URL || DEFAULT_WHATSAPP_URL;
}

export function BookingCta({ children, className = "" }) {
  return (
    <a
      href="#services"
      className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#00B050] px-6 text-center text-[13px] font-black uppercase tracking-[0.08em] text-white shadow-[0_16px_34px_rgba(0,176,80,0.26)] transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

export function AppCta({ children, className = "" }) {
  return (
    <a
      href="#download"
      className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border-2 border-[#06180F] bg-white px-6 text-center text-[13px] font-black uppercase tracking-[0.08em] text-[#06180F] transition-colors hover:border-[#00B050] hover:text-[#00B050] ${className}`}
    >
      {children}
    </a>
  );
}

export function WhatsAppCta({ children, className = "" }) {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border-2 border-[#CFE9D8] bg-white px-6 text-center text-[13px] font-black uppercase tracking-[0.08em] text-[#1D3328] transition-colors hover:border-[#00B050] hover:text-[#00B050] ${className}`}
    >
      {children}
    </a>
  );
}

"use client";

import { useLocale } from "./LocaleProvider";
import { AppCta, BookingCta, WhatsAppCta } from "./SupportActions";

export default function SupportBlock() {
  const { t } = useLocale();

  return (
    <section className="w-full border-t border-[#DDE8DC] bg-[#EAF8F0]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-8 rounded-[1.75rem] border-4 border-[#06180F] bg-white p-6 shadow-[12px_12px_0_#FFD447] md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#00B050]">
              {t.support.eyebrow}
            </p>
            <h2 className="mt-3 max-w-[680px] text-[2rem] font-black leading-[1.04] tracking-tight text-[#06180F] sm:text-[2.55rem]">
              {t.support.title}
            </h2>
            <p className="mt-4 max-w-[620px] text-[0.98rem] font-semibold leading-[1.75] text-[#1D3328]">
              {t.support.body}
            </p>
            <p className="mt-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#08763A]">
              {t.support.note}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
            <BookingCta>{t.support.primaryCta}</BookingCta>
            <WhatsAppCta>{t.support.whatsappCta}</WhatsAppCta>
            <AppCta>{t.support.appCta}</AppCta>
          </div>
        </div>
      </div>
    </section>
  );
}

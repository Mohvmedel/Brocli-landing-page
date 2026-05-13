"use client";

import { useLocale } from "./LocaleProvider";
import { getWhatsAppUrl } from "./SupportActions";

export default function MobileStickyCta() {
  const { t } = useLocale();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#CFE9D8] bg-white/95 px-4 py-3 shadow-[0_-12px_34px_rgba(6,24,15,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[1.15fr_0.85fr] gap-2.5">
        <a
          href="#services"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#00B050] px-4 text-[12px] font-black uppercase tracking-[0.07em] text-white"
        >
          {t.sticky.download}
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#CFE9D8] bg-white px-4 text-[12px] font-black uppercase tracking-[0.07em] text-[#1D3328]"
        >
          {t.sticky.help}
        </a>
      </div>
    </div>
  );
}

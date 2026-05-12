"use client";

import { useLocale } from "./LocaleProvider";
import { StoreBadges } from "./StoreBadges";

export default function FinalCta() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#DDE8DC] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 lg:px-16 lg:py-[4.5rem]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#00B050]">
              {t.final.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[720px] text-[2.25rem] font-black leading-[1.02] tracking-tight text-[#06180F] sm:text-[3rem]">
              {t.final.title}
            </h2>
            <p className="mt-5 max-w-[520px] text-[0.98rem] font-semibold leading-[1.75] text-[#1D3328]">
              {t.final.body}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
            <StoreBadges appStoreTop={t.hero.appStoreTop} playStoreTop={t.hero.playTop} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#DDE8DC] pt-6 text-[12px] font-black uppercase tracking-[0.16em] text-[#08763A] sm:flex-row sm:items-center sm:justify-between">
          <p>{t.final.left}</p>
          <p>{t.final.right}</p>
        </div>

        <p className="mt-5 text-center text-[12px] font-semibold text-[#6D7D71]">
          © {year} BrocliConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

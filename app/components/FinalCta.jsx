"use client";

import { useLocale } from "./LocaleProvider";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] shrink-0" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] shrink-0" aria-hidden="true">
      <path d="M3.18 23.76c.5.28 1.08.28 1.6-.02l16.5-9.5c.5-.29.8-.82.8-1.39s-.3-1.1-.8-1.39L4.78.18C4.26-.12 3.68-.1 3.18.18 2.67.47 2.34 1.01 2.34 1.6v20.79c0 .59.33 1.13.84 1.37z" />
    </svg>
  );
}

function StoreButton({ icon, mainLabel, topLabel }) {
  return (
    <a
      href="#download"
      className="inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#06180F] px-5 text-white shadow-[0_18px_36px_rgba(0,176,80,0.18)] transition-transform hover:-translate-y-0.5"
    >
      {icon}
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-normal uppercase tracking-widest text-white/60">{topLabel}</span>
        <span className="text-[14px] font-semibold">{mainLabel}</span>
      </span>
    </a>
  );
}

export default function FinalCta() {
  const { t } = useLocale();

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
            <StoreButton icon={<AppleIcon />} topLabel={t.hero.appStoreTop} mainLabel="App Store" />
            <StoreButton icon={<PlayIcon />} topLabel={t.hero.playTop} mainLabel="Google Play" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#DDE8DC] pt-6 text-[12px] font-black uppercase tracking-[0.16em] text-[#08763A] sm:flex-row sm:items-center sm:justify-between">
          <p>{t.final.left}</p>
          <p>{t.final.right}</p>
        </div>
      </div>
    </footer>
  );
}

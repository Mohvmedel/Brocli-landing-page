"use client";

import { useLocale } from "./LocaleProvider";

export default function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="w-full border-t border-[#DDE8DC] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 lg:px-16 lg:py-24">

        {/* Header row */}
        <div className="flex flex-col gap-4 mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#00B050]">
              {t.services.eyebrow}
            </p>
            <h2 className="text-[2rem] font-black leading-[1.04] tracking-tight text-[#06180F] sm:text-[2.6rem] lg:text-[3.15rem]">
              {t.services.title}
            </h2>
          </div>
          <a
            href="#download"
            className="group inline-flex w-fit shrink-0 items-center gap-1.5 pb-1 text-[13px] font-black uppercase tracking-[0.08em] text-[#06180F] underline decoration-[#FFD447] decoration-4 underline-offset-4 transition-colors hover:text-[#00B050]"
          >
            {t.services.cta}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Service rows */}
        <div className="grid gap-4 lg:grid-cols-3">
          {t.services.items.map(({ name, tagline, description, ideal, availability }, index) => (
            <div
              key={name}
              className="group flex min-h-[360px] flex-col rounded-[1.35rem] border-4 border-[#06180F] bg-white p-6 shadow-[10px_10px_0_#EAF8F0] transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[12px] font-black tabular-nums text-[#00B050]">{String(index + 1).padStart(2, "0")}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF8F0] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#08763A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00B050]" />
                  {availability}
                </span>
              </div>

              <div className="mt-8 flex flex-1 flex-col">
                <h3 className="text-[1.55rem] font-black tracking-tight text-[#06180F]">
                  {name}
                </h3>
                <p className="mt-1 text-[13px] font-black text-[#00B050]">
                  {tagline}
                </p>
                <p className="mt-5 text-[0.92rem] font-medium leading-[1.7] text-[#405248]">
                  {description}
                </p>

                <div className="mt-auto pt-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#00B050]">
                    {t.services.ideal}
                  </span>
                  <p className="mt-2 text-[0.9rem] font-bold leading-[1.6] text-[#1D3328]">
                    {ideal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

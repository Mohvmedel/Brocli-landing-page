"use client";

import { useLocale } from "./LocaleProvider";

export default function Solution() {
  const { t } = useLocale();

  return (
    <section id="how-it-works" className="w-full border-t border-[#00B050] bg-[#00B050] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 lg:px-16 lg:py-24">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">

          <div className="lg:sticky lg:top-24 flex flex-col gap-6">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#FFD447]">
              {t.solution.eyebrow}
            </p>

            <h2 className="text-[2rem] font-black leading-[1.02] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.25rem]">
              {t.solution.title}
            </h2>

            <p className="max-w-[420px] text-[0.98rem] font-bold leading-[1.75] text-white/90">
              {t.solution.body}
            </p>

            <div className="grid max-w-[420px] grid-cols-2 gap-3 pt-2">
              <div className="rounded-2xl border-4 border-white bg-[#06180F] p-4 shadow-[8px_8px_0_#FFD447]">
                <p className="text-[1.45rem] font-black">{t.solution.statOne}</p>
                <p className="mt-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#FFD447]">{t.solution.statOneBody}</p>
              </div>
              <div className="rounded-2xl border-4 border-white bg-[#06180F] p-4 shadow-[8px_8px_0_#FFD447]">
                <p className="text-[1.45rem] font-black">{t.solution.statTwo}</p>
                <p className="mt-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#FFD447]">{t.solution.statTwoBody}</p>
              </div>
            </div>
          </div>

          <ol className="flex flex-col divide-y divide-white/25">
            {t.solution.steps.map(([label, detail], index) => (
              <li key={label} className="group flex items-start gap-5 py-7 first:pt-0 last:pb-0">

                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-white bg-[#06180F] pt-[1px] text-[13px] font-black tabular-nums text-white">
                  {index + 1}
                </span>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2.5">
                    {index === 0 && (
                      <span className="inline-block h-[7px] w-[7px] shrink-0 rounded-full bg-[#FFD447]" />
                    )}
                    <span className="text-[1.15rem] font-black leading-snug text-white">
                      {label}
                    </span>
                  </div>
                  <p className="max-w-[560px] text-[0.92rem] font-semibold leading-[1.7] text-white/90">
                    {detail}
                  </p>
                </div>

                <span className="hidden select-none pt-0.5 text-[18px] font-light text-[#FFD447] opacity-0 transition-opacity group-hover:opacity-100 lg:block">
                  →
                </span>

              </li>
            ))}
          </ol>

        </div>

        <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-white/25 pt-8">
          <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#FFD447]" />
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white">
            {t.solution.active}
          </p>
          <span className="select-none text-white/25">·</span>
          <p className="text-[12px] font-black uppercase tracking-[0.18em] text-white/80">
            {t.solution.next}
          </p>
        </div>

      </div>
    </section>
  );
}

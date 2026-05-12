"use client";

import { useLocale } from "./LocaleProvider";

export default function MarketProblem() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 lg:px-16 lg:py-24">

        {/* Section label */}
        <p className="mb-6 text-[11px] font-black uppercase tracking-[0.22em] text-[#00B050]">
          {t.problem.eyebrow}
        </p>

        {/* Main statement */}
        <h2 className="max-w-3xl text-[2.15rem] font-black leading-[1.02] tracking-tight text-[#06180F] sm:text-[2.85rem] lg:text-[3.6rem]">
          {t.problem.title}
        </h2>

        {/* Supporting copy */}
        <p className="mt-5 max-w-[560px] text-[0.98rem] font-semibold leading-[1.75] text-[#1D3328]">
          {t.problem.body}
        </p>

        {/* Divider */}
        <div className="mt-12 border-t border-[#DDE8DC]" />

        {/* Editorial problem list */}
        <ol className="divide-y divide-[#DDE8DC]">
          {t.problem.items.map(([title, body], index) => (
            <li key={title} className="grid grid-cols-[3rem_1fr] gap-x-6 py-7 sm:grid-cols-[4rem_1fr_1fr] sm:gap-x-8 lg:gap-x-12">

              {/* Number */}
              <span className="pt-0.5 text-[13px] font-black tabular-nums text-[#00B050]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <span className="text-[1rem] font-black text-[#06180F] sm:text-[1.0625rem]">
                {title}
              </span>

              {/* Body — full width on mobile, second column on sm+ */}
              <p className="col-start-2 mt-2 text-[0.9rem] font-medium leading-[1.7] text-[#405248] sm:col-start-3 sm:mt-0">
                {body}
              </p>

            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}

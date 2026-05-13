"use client";

import { useLocale } from "./LocaleProvider";

export default function FaqSection() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 lg:px-16 lg:py-24">
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#00B050]">{t.faq.eyebrow}</p>
        <h2 className="text-[2rem] font-black leading-[1.04] tracking-tight text-[#06180F] sm:text-[2.6rem] lg:text-[3.15rem]">
          {t.faq.title}
        </h2>
        <div className="mt-10 divide-y divide-[#DDE8DC] border-y border-[#DDE8DC]">
          {t.faq.items.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1rem] font-black text-[#06180F]">
                {question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#EAF8F0] text-[#00B050] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-[720px] text-[0.92rem] font-semibold leading-[1.7] text-[#405248]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

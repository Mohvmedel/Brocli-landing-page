"use client";

import { useLocale } from "./LocaleProvider";

export default function TrustProof() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-[#F8FCFA]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 lg:px-16 lg:py-24">
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#00B050]">{t.trust.eyebrow}</p>
        <h2 className="max-w-[740px] text-[2rem] font-black leading-[1.04] tracking-tight text-[#06180F] sm:text-[2.6rem] lg:text-[3.15rem]">
          {t.trust.title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.trust.items.map(([title, body]) => (
            <article key={title} className="rounded-[1.25rem] border border-[#CFE9D8] bg-white p-5 shadow-[0_18px_38px_rgba(6,24,15,0.06)]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00B050]" />
              <h3 className="mt-4 text-[1.05rem] font-black text-[#06180F]">{title}</h3>
              <p className="mt-2 text-[0.9rem] font-semibold leading-[1.65] text-[#405248]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLocale } from "./LocaleProvider";
import { BookingCta } from "./SupportActions";

export default function PricingSection() {
  const { t } = useLocale();

  return (
    <section className="w-full border-t border-[#DDE8DC] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#00B050]">{t.pricing.eyebrow}</p>
            <h2 className="max-w-[720px] text-[2rem] font-black leading-[1.04] tracking-tight text-[#06180F] sm:text-[2.6rem] lg:text-[3.15rem]">
              {t.pricing.title}
            </h2>
          </div>
          <p className="max-w-[280px] rounded-2xl bg-[#EAF8F0] px-4 py-3 text-[12px] font-black uppercase leading-[1.5] tracking-[0.12em] text-[#08763A]">
            {t.pricing.note}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {t.pricing.cards.map((card) => (
            <article key={card.name} className="flex min-h-[430px] flex-col rounded-[1.35rem] border-4 border-[#06180F] bg-white p-6 shadow-[10px_10px_0_#EAF8F0]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[1.45rem] font-black tracking-tight text-[#06180F]">{card.name}</h3>
                  <p className="mt-2 text-[0.92rem] font-semibold leading-[1.6] text-[#405248]">{card.description}</p>
                </div>
                <span className="rounded-full bg-[#FFD447] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#06180F]">
                  {card.duration}
                </span>
              </div>

              <p className="mt-7 text-[1.55rem] font-black text-[#00B050]">{card.price}</p>
              <div className="mt-5 rounded-2xl bg-[#EAF8F0] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#08763A]">
                  {t.pricing.bestFor}
                </p>
                <p className="mt-2 text-[0.9rem] font-bold leading-[1.55] text-[#1D3328]">
                  {card.ideal}
                </p>
              </div>
              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.16em] text-[#08763A]">
                {t.pricing.included}
              </p>
              <ul className="mt-3 flex flex-col gap-3">
                {card.included.map((item) => (
                  <li key={item} className="flex gap-2 text-[0.92rem] font-bold leading-[1.55] text-[#1D3328]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00B050]" />
                    {item}
                  </li>
                ))}
              </ul>
              <BookingCta className="mt-auto w-full">{t.services.bookCta}</BookingCta>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

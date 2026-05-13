"use client";

import { useLocale } from "./LocaleProvider";

// Image prompts to generate later are stored in app/image-prompts.js.
// Replace each ImageSlot with a Next/Image once the generated assets exist.

function ImageSlot({ label, detail, aspect = "aspect-[4/3]", dark = false }) {
  return (
    <article
      className={`overflow-hidden rounded-[1.35rem] border-4 border-[#06180F] shadow-[10px_10px_0_#EAF8F0] ${
        dark ? "bg-[#00B050] text-white shadow-[10px_10px_0_#FFD447]" : "bg-white text-[#06180F]"
      }`}
    >
      <div
        className={`relative ${aspect} overflow-hidden ${
          dark ? "bg-[#08763A]" : "bg-[linear-gradient(135deg,#F8FCFA_0%,#EAF8F0_58%,#FFF7D6_100%)]"
        }`}
      >
        <div className="absolute inset-5 rounded-[1.15rem] border border-dashed border-[#06180F]/20 bg-white/45" />
        <div className="absolute left-5 top-5 rounded-full border border-[#CFE9D8] bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#08763A]">
          Image slot
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/92 p-4 shadow-[0_16px_34px_rgba(6,24,15,0.10)]">
          <p className="text-[0.95rem] font-black text-[#06180F]">{label}</p>
          <p className="mt-1 text-[12px] font-bold leading-[1.55] text-[#405248]">{detail}</p>
        </div>
      </div>
    </article>
  );
}

export default function VisualProof() {
  const { t } = useLocale();
  const [agent, result, beforeAfter, appBooking, checklist] = t.visualProof.items;

  return (
    <section className="w-full border-y border-[#DDE8DC] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 lg:px-16 lg:py-24">
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#00B050]">{t.visualProof.eyebrow}</p>
        <h2 className="max-w-[760px] text-[1.85rem] font-black leading-[1.06] tracking-tight text-[#06180F] sm:text-[2.45rem] lg:text-[3rem]">
          {t.visualProof.title}
        </h2>

        <div className="mt-9 grid gap-4 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <ImageSlot label={agent[0]} detail={agent[1]} aspect="aspect-[4/5]" />
          </div>
          <div className="lg:col-span-4">
            <ImageSlot label={result[0]} detail={result[1]} aspect="aspect-[16/9]" />
          </div>
          <div className="lg:col-span-3">
            <ImageSlot label={beforeAfter[0]} detail={beforeAfter[1]} aspect="aspect-[16/9]" dark />
          </div>
          <div className="lg:col-span-3">
            <ImageSlot label={appBooking[0]} detail={appBooking[1]} aspect="aspect-[16/9]" />
          </div>
          <div className="lg:col-span-2 lg:col-start-3">
            <ImageSlot label={checklist[0]} detail={checklist[1]} aspect="aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
}

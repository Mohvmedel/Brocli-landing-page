"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useLocale } from "./LocaleProvider";
import { WhatsAppCta } from "./SupportActions";

const MAP_CITIES = [
  { left: 67.5, top: 5.7, label: "Tangier", align: "right" },
  { left: 61.9, top: 17.3, label: "Rabat", align: "left", active: true },
  { left: 57.8, top: 20.2, label: "Casablanca", align: "left" },
  { left: 72, top: 17.3, label: "Fes", align: "right" },
  { left: 55.7, top: 32.9, label: "Marrakech", align: "right" },
  { left: 46.9, top: 40.5, label: "Agadir", align: "left" },
  { left: 27.1, top: 61, label: "Laayoune", align: "right" },
  { left: 12, top: 82, label: "Dakhla", align: "right" },
];

// ── variants ──────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const listStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const dotPop = {
  hidden:  { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.35, ease: "backOut" } },
};

const cityStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } },
};

function MapPin({ city }) {
  const { t } = useLocale();
  const labelPosition =
    city.align === "left"
      ? "right-[calc(100%+0.55rem)] text-right"
      : "left-[calc(100%+0.55rem)] text-left";

  return (
    <motion.div
      variants={dotPop}
      className="absolute z-10"
      style={{ left: `${city.left}%`, top: `${city.top}%` }}
    >
      {city.active && (
        <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B050]/20 animate-ping" />
      )}
      <span
        className={`relative block h-7 w-7 -translate-x-1/2 -translate-y-full rounded-full border-[3px] border-[#06180F] ${
          city.active ? "bg-[#00B050] shadow-[0_10px_24px_rgba(0,176,80,0.28)]" : "bg-[#FFD447]"
        }`}
      >
        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <span className="absolute left-1/2 top-[85%] h-3 w-3 -translate-x-1/2 rotate-45 border-b-[3px] border-r-[3px] border-[#06180F] bg-inherit" />
      </span>
      <span className={`absolute top-[-2.15rem] whitespace-nowrap text-[11px] font-black text-[#06180F] ${labelPosition}`}>
        {city.label}
        {city.active && <span className="block text-[8px] tracking-[0.14em] text-[#00B050]">{t.coverage.live}</span>}
      </span>
    </motion.div>
  );
}

export default function RabatLive() {
  const { t } = useLocale();
  const sectionRef = useRef(null);
  const inView      = useInView(sectionRef, { once: true, margin: "-80px" });
  const reduced     = useReducedMotion();

  const animate = inView && !reduced ? "visible" : reduced ? "visible" : "hidden";

  return (
    <section
      id="cities"
      ref={sectionRef}
      className="w-full border-t border-[#DDE8DC] bg-[#EAF8F0]"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 lg:px-16 lg:py-24">

        {/* ── Headline ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={animate}
          className="mb-12"
        >
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#00B050]">
            {t.coverage.eyebrow}
          </p>
          <h2 className="text-[2rem] font-black leading-[1.04] tracking-tight text-[#06180F] sm:text-[2.6rem] lg:text-[3.15rem]">
            {t.coverage.title}<br />{t.coverage.titleSecond}
          </h2>
          <p className="mt-4 max-w-[500px] text-[0.98rem] font-semibold leading-[1.75] text-[#1D3328]">
            {t.coverage.body}
          </p>
        </motion.div>

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:items-start">

          {/* LEFT — Morocco map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={animate}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="w-full max-w-[420px]">
              <div
                className="relative aspect-square overflow-visible rounded-[2rem] border-4 border-[#06180F] bg-white p-5 shadow-[12px_12px_0_#FFD447]"
                role="img"
                aria-label="Morocco map — Rabat active, other cities coming soon"
              >
                <Image
                  src="/brand/morocco-regions-map.svg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-contain p-5"
                  priority={false}
                />

                <motion.div
                  variants={cityStagger}
                  initial="hidden"
                  animate={animate}
                  className="absolute inset-5"
                >
                  {MAP_CITIES.map((city) => (
                    <MapPin key={city.label} city={city} />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#00B050]" />
                <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#06180F]">
                  {t.coverage.active}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#FFD447] opacity-90" />
                <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#08763A]">
                  {t.coverage.coming}
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Proof list + CTA */}
          <div className="flex flex-col gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={animate}
              className="rounded-[1.35rem] border-4 border-[#06180F] bg-white p-5 shadow-[10px_10px_0_#FFD447]"
            >
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#00B050]">
                {t.coverage.areaTitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.coverage.areas.map((area) => (
                  <span key={area} className="rounded-full bg-[#EAF8F0] px-3 py-2 text-[12px] font-black text-[#06180F]">
                    {area}
                  </span>
                ))}
              </div>
              <WhatsAppCta className="mt-5 w-full sm:w-auto">{t.coverage.areaCta}</WhatsAppCta>
            </motion.div>

            <motion.ul
              variants={listStagger}
              initial="hidden"
              animate={animate}
              className="flex flex-col divide-y divide-[#CFE9D8]"
            >
              {t.coverage.proof.map((label, index) => (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-3 py-4 first:pt-0"
                >
                  <span
                    className={`inline-block h-[6px] w-[6px] shrink-0 rounded-full ${
                      index < 2 ? "bg-[#00B050]" : "bg-[#FFD447]"
                    }`}
                  />
                  <span className="text-[0.9375rem] font-black text-[#06180F]">
                    {label}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="#services"
              variants={fadeUp}
              initial="hidden"
              animate={animate}
              transition={{ delay: 0.55 }}
              className="group inline-flex w-fit items-center gap-1.5 text-[13px] font-black uppercase tracking-[0.08em] text-[#06180F] underline decoration-[#FFD447] decoration-4 underline-offset-4 transition-colors hover:text-[#00B050]"
            >
              {t.coverage.cta}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
}

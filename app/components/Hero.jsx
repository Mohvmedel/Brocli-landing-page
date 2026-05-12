"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
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

function AppButton({ icon, topLabel, mainLabel }) {
  return (
    <a
      href="#"
      className="inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#06180F] px-5 text-white shadow-[0_18px_36px_rgba(0,176,80,0.18)] transition-transform hover:-translate-y-0.5"
    >
      {icon}
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-normal opacity-60 uppercase tracking-widest">{topLabel}</span>
        <span className="text-[14px] font-semibold">{mainLabel}</span>
      </span>
    </a>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const { t } = useLocale();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set("[data-hero-reveal]", { opacity: 0, y: 22 });
      gsap.set("[data-hero-art]", { opacity: 0, scale: 0.94, y: 24 });
      gsap.set("[data-hero-card]", { opacity: 0, x: -22, rotate: -1.5 });
      gsap.set("[data-hero-price]", { opacity: 0, y: 18, scale: 0.96 });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .to("[data-hero-reveal]", {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
        })
        .to(
          "[data-hero-art]",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
          },
          0.18
        )
        .to(
          "[data-hero-card]",
          {
            opacity: 1,
            x: 0,
            rotate: 0,
            duration: 0.72,
          },
          0.45
        )
        .to(
          "[data-hero-price]",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
          },
          0.72
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="w-full overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-10 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-16 lg:pb-[4.5rem] lg:pt-16">
          <div className="flex flex-col">
            <div data-hero-reveal className="mb-6 flex w-fit items-center gap-2 rounded-full border border-[#CFE9D8] bg-[#EAF8F0] px-3 py-2">
              <span className="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#00B050]" />
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#08763A]">
                {t.hero.eyebrow}
              </span>
            </div>

            <h1 data-hero-reveal className="max-w-[640px] text-[2.65rem] font-black  leading-[0.96] tracking-tight text-[#06180F] sm:text-[3.55rem] lg:text-[4.6rem]">
              {t.hero.titleTop}
              <span className="block text-[#00B050]">{t.hero.titleBottom}</span>
            </h1>

            <p data-hero-reveal className="mt-6 max-w-[470px] text-[0.98rem] font-bold leading-[1.65] text-[#1D3328] lg:text-[1.04rem]">
              {t.hero.body}
            </p>

            <div data-hero-reveal className="mt-8 flex flex-col gap-4">
              <div id="download" className="flex flex-col gap-2.5 sm:flex-row">
                <AppButton icon={<AppleIcon />} topLabel={t.hero.appStoreTop} mainLabel="App Store" />
                <AppButton icon={<PlayIcon />} topLabel={t.hero.playTop} mainLabel="Google Play" />
              </div>
              <a
                href="#cities"
                className="inline-flex w-fit items-center gap-2 text-[13px] font-black uppercase tracking-[0.08em] text-[#06180F] underline decoration-[#FFD447] decoration-4 underline-offset-4 transition-colors hover:text-[#00B050]"
              >
                {t.hero.link}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[430px] lg:min-h-[560px]">
            <div data-hero-art className="absolute inset-0 rounded-[2rem] bg-[#00B050]" />
            <div data-hero-art className="absolute inset-4 rounded-[1.5rem] bg-white" />
            <div data-hero-art className="absolute bottom-0 right-0 h-[82%] w-[90%]">
              <Image
                src="/brand/calendar-cleaning.png"
                alt="Brocli cleaning schedule illustration"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-contain object-bottom"
              />
            </div>

            <div data-hero-card className="absolute left-0 top-6 w-[min(86vw,330px)] rounded-[2rem] border-4 border-[#06180F] bg-white p-4 shadow-[12px_12px_0_#FFD447] md:left-3">
              <div className="flex items-start justify-between gap-4 border-b border-[#DDE8DC] pb-4">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#00B050]">
                    {t.hero.nextSlot}
                  </p>
                  <p className="mt-1 text-[1.4rem] font-black  tracking-tight text-[#06180F]">
                    {t.hero.under30}
                  </p>
                </div>
                <span className="rounded-full bg-[#00B050] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-white">
                  {t.hero.live}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 py-4">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#6D7D71]">{t.hero.service}</p>
                  <p className="mt-1 text-[14px] font-black text-[#06180F]">{t.hero.serviceValue}</p>
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#6D7D71]">{t.hero.team}</p>
                  <p className="mt-1 text-[14px] font-black text-[#06180F]">{t.hero.teamValue}</p>
                </div>
              </div>
              <div className="rounded-2xl bg-[#EAF8F0] p-3">
                <div className="mb-2 flex items-center justify-between text-[12px] font-black text-[#1D3328]">
                  <span>{t.hero.checklist}</span>
                  <span>{t.hero.oneTap}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white">
                  <div className="h-full w-[78%] rounded-full bg-[#00B050]" />
                </div>
              </div>
            </div>

            <div data-hero-price className="absolute bottom-5 right-4 rounded-full bg-[#FFD447] px-4 py-3 text-[12px] font-black uppercase tracking-[0.14em] text-[#06180F] shadow-[0_16px_32px_rgba(0,176,80,0.2)] md:right-7">
              {t.hero.price}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-[#DDE8DC] bg-[#EAF8F0]">
        <div className="mx-auto max-w-6xl px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 divide-y divide-[#CFE9D8] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {t.hero.proof.map(({ value, label }) => (
              <div key={label} className="py-6 sm:px-8 first:sm:pl-0 last:sm:pr-0">
                <p className="text-[1.5rem] font-black  tracking-tight text-[#06180F]">{value}</p>
                <p className="mt-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#08763A]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocale } from "./LocaleProvider";
import { StoreBadges } from "./StoreBadges";
import { BookingCta } from "./SupportActions";

function CollageImage({ src, alt, className = "", imageClassName = "object-cover object-center", children }) {
  return (
    <div className={`relative overflow-hidden rounded-[1rem] bg-[#EAF8F0] shadow-[0_18px_42px_rgba(6,24,15,0.10)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        preload={src.includes("hero-worker-1")}
        sizes="(min-width: 1024px) 340px, 92vw"
        className={imageClassName}
      />
      {children}
    </div>
  );
}

function HeroImageCollage() {
  const { t } = useLocale();

  return (
    <div className="relative mx-auto w-full max-w-[680px]">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
        <CollageImage
          src="/brand/hero-worker-1.png"
          alt="Brocli cleaning agent standing in a clean modern Rabat apartment"
          className="col-span-2 aspect-[4/3] border border-[#DDE8DC] lg:col-span-3 lg:row-span-2 lg:aspect-auto lg:min-h-[520px]"
          imageClassName="object-cover object-[52%_center]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,24,15,0)_58%,rgba(6,24,15,0.42)_100%)]" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:bottom-5 sm:left-5">
            <span className="rounded-full bg-white/92 px-3 py-2 text-[10px] font-black uppercase tracking-[0.13em] text-[#08763A] shadow-[0_12px_26px_rgba(6,24,15,0.14)] backdrop-blur">
              {t.hero.availableBadge}
            </span>
            <span className="rounded-full bg-[#FFD447] px-3 py-2 text-[10px] font-black uppercase tracking-[0.13em] text-[#06180F] shadow-[0_12px_26px_rgba(6,24,15,0.12)]">
              {t.hero.priceBefore}
            </span>
          </div>
        </CollageImage>

        <CollageImage
          src="/brand/hero-worker-2.png"
          alt="Brocli cleaning agent holding cleaning supplies"
          className="aspect-[4/5] lg:col-span-2 lg:aspect-[5/4]"
          imageClassName="object-cover object-[50%_center]"
        />

        <CollageImage
          src="/brand/hero-worker-3.png"
          alt="Brocli cleaning agent checking booking details on a phone"
          className="aspect-[4/5] lg:col-span-2 lg:aspect-[5/4]"
          imageClassName="object-cover object-[53%_center]"
        >
          <div className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-[#08763A] backdrop-blur">
            {t.hero.verifiedBadge}
          </div>
        </CollageImage>
      </div>
    </div>
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
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="w-full overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 pb-10 pt-8 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-16 lg:pb-16 lg:pt-12">
          <div className="flex flex-col">
            <div data-hero-reveal className="mb-5 flex w-fit items-center gap-2 rounded-full border border-[#CFE9D8] bg-[#EAF8F0] px-3 py-2">
              <span className="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#00B050]" />
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#08763A]">
                {t.hero.eyebrow}
              </span>
            </div>

            <h1 data-hero-reveal className="max-w-[620px] text-[2rem] font-black leading-[1.08] tracking-tight text-[#06180F] sm:text-[2.55rem] lg:text-[3.05rem]">
              {t.hero.title}
            </h1>

            <p data-hero-reveal className="mt-5 max-w-[540px] text-[0.95rem] font-bold leading-[1.65] text-[#1D3328] lg:text-[1rem]">
              {t.hero.body}
            </p>

            <div data-hero-reveal className="mt-7 flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:items-center">
                <BookingCta className="w-full">{t.hero.primaryCta}</BookingCta>
                <a
                  href="#how-it-works"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-[#06180F] bg-white px-5 text-center text-[12px] font-black uppercase tracking-[0.08em] text-[#06180F] transition-colors hover:border-[#00B050] hover:text-[#00B050]"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>
              <p className="max-w-[520px] text-[11px] font-black uppercase leading-[1.7] tracking-[0.1em] text-[#08763A]">
                {t.hero.trustLine}
              </p>
              <div id="download" className="hidden flex-col gap-2.5 border-t border-[#DDE8DC] pt-4 sm:flex">
                <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#6D7D71]">
                  {t.hero.appCta}
                </span>
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  <StoreBadges appStoreTop={t.hero.appStoreTop} playStoreTop={t.hero.playTop} compact />
                </div>
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

          <div data-hero-art>
            <HeroImageCollage />
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

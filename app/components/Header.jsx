"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "./LocaleProvider";

function BrocliLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 select-none" aria-label="Brocli home">
      <span className="text-[28px] font-black italic leading-none tracking-tight text-[#00B050]">Brocli</span>
      <span className="mt-2 h-2 w-2 rounded-full bg-[#FFD447]" aria-hidden="true" />
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const nextLocale = locale === "en" ? "fr" : "en";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DDE8DC]/80 bg-white/92 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 md:px-10 lg:px-16">
        <div className="flex h-[64px] items-center justify-between">

          <BrocliLogo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#how-it-works" className="text-[13px] font-black uppercase tracking-[0.08em] text-[#1D3328] transition-colors hover:text-[#00B050]">
              {t.nav.how}
            </a>
            <a href="#services" className="text-[13px] font-black uppercase tracking-[0.08em] text-[#1D3328] transition-colors hover:text-[#00B050]">
              {t.nav.services}
            </a>
            <a href="#cities" className="text-[13px] font-black uppercase tracking-[0.08em] text-[#1D3328] transition-colors hover:text-[#00B050]">
              {t.nav.cities}
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => setLocale(nextLocale)}
              className="min-h-11 rounded-full border-2 border-[#06180F] px-4 text-[12px] font-black uppercase tracking-[0.08em] text-[#06180F] transition-transform hover:-translate-y-0.5"
              aria-label={`Switch language to ${nextLocale.toUpperCase()}`}
            >
              {locale.toUpperCase()} / {nextLocale.toUpperCase()}
            </button>
            <a
              href="#download"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#00B050] px-5 text-[13px] font-black uppercase tracking-[0.06em] text-white shadow-[0_14px_30px_rgba(0,176,80,0.22)] transition-transform hover:-translate-y-0.5"
            >
              {t.nav.download}
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="p-2 text-[#1D3328] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-[#DDE8DC] pb-4 pt-4 md:hidden">
            <a href="#how-it-works" className="text-[15px] font-black uppercase tracking-[0.06em] text-[#1D3328]" onClick={() => setMenuOpen(false)}>
              {t.nav.how}
            </a>
            <a href="#services" className="text-[15px] font-black uppercase tracking-[0.06em] text-[#1D3328]" onClick={() => setMenuOpen(false)}>
              {t.nav.services}
            </a>
            <a href="#cities" className="text-[15px] font-black uppercase tracking-[0.06em] text-[#1D3328]" onClick={() => setMenuOpen(false)}>
              {t.nav.cities}
            </a>
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#06180F] px-5 text-[14px] font-black uppercase tracking-[0.06em] text-[#06180F]"
              onClick={() => setLocale(nextLocale)}
            >
              {locale.toUpperCase()} / {nextLocale.toUpperCase()}
            </button>
            <a
              href="#download"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#00B050] px-5 text-[14px] font-black uppercase tracking-[0.06em] text-white"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.download}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

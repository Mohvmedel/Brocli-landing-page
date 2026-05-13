"use client";

import { useStoreLinks } from "./StoreLinksProvider";

function AppleLogo({ compact = false }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${compact ? "h-7 w-7" : "h-8 w-8"} shrink-0`} aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayLogo({ compact = false }) {
  return (
    <svg viewBox="0 0 40 44" className={`${compact ? "h-7 w-7" : "h-8 w-8"} shrink-0`} aria-hidden="true">
      <path d="M3.3 1.3 25.2 22 3.3 42.7C2.5 42 2 40.9 2 39.5V4.5C2 3.1 2.5 2 3.3 1.3Z" fill="#34A853" />
      <path d="m25.2 22 6.7-6.3 6.4 3.6c2.3 1.3 2.3 4.1 0 5.4l-6.4 3.6L25.2 22Z" fill="#FBBC04" />
      <path d="M3.3 1.3c1-.9 2.5-1 4-.1l24.6 14.5-6.7 6.3L3.3 1.3Z" fill="#4285F4" />
      <path d="m3.3 42.7 21.9-20.7 6.7 6.3L7.3 42.8c-1.5.9-3 .8-4-.1Z" fill="#EA4335" />
    </svg>
  );
}

function StoreBadge({ type, topLabel, mainLabel, href, compact = false }) {
  const isApple = type === "apple";
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const sizeClass = compact ? "h-[50px] w-[164px] gap-2.5 px-3" : "h-[58px] w-[188px] gap-3 px-4";
  const topClass = compact ? "text-[9px]" : "text-[11px]";
  const mainClass = compact ? "text-[18px]" : "text-[22px]";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center overflow-hidden rounded-[13px] border-2 border-[#686868] bg-black text-white shadow-[0_18px_36px_rgba(0,176,80,0.14)] transition-transform hover:-translate-y-0.5 ${sizeClass}`}
      aria-label={`${topLabel} ${mainLabel}`}
    >
      {isApple ? <AppleLogo compact={compact} /> : <GooglePlayLogo compact={compact} />}
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`${topClass} font-medium tracking-[0.01em]`}>{topLabel}</span>
        <span className={`mt-1 whitespace-nowrap font-semibold tracking-[-0.04em] ${mainClass}`}>{mainLabel}</span>
      </span>
    </a>
  );
}

export function StoreBadges({ appStoreTop, playStoreTop, compact = false }) {
  const { playStoreUrl, appStoreUrl } = useStoreLinks();

  return (
    <>
      <StoreBadge type="google" topLabel={playStoreTop} mainLabel="Google Play" href={playStoreUrl} compact={compact} />
      <StoreBadge type="apple" topLabel={appStoreTop} mainLabel="App Store" href={appStoreUrl} compact={compact} />
    </>
  );
}

"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const DEFAULT_STORE_LINKS = {
  playStoreUrl: "https://play.google.com/",
  appStoreUrl: "https://apps.apple.com/",
};

const StoreLinksContext = createContext(DEFAULT_STORE_LINKS);

function getConfigurationsEndpoint() {
  const configuredBase =
    process.env.NEXT_PUBLIC_BROCLI_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const base = configuredBase.trim().replace(/\/+$/, "");

  if (!base) {
    return null;
  }

  if (base.endsWith("/configurations")) {
    return base;
  }

  if (base.endsWith("/api")) {
    return `${base}/configurations`;
  }

  return `${base}/api/configurations`;
}

function safeHttpUrl(value, fallback) {
  if (typeof value !== "string" || !value.trim()) {
    return fallback;
  }

  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : fallback;
  } catch {
    return fallback;
  }
}

function readStoreLinks(payload) {
  const data = payload?.data ?? payload ?? {};

  return {
    playStoreUrl: safeHttpUrl(data.playstore_url, DEFAULT_STORE_LINKS.playStoreUrl),
    appStoreUrl: safeHttpUrl(data.appstore_url, DEFAULT_STORE_LINKS.appStoreUrl),
  };
}

export function StoreLinksProvider({ children }) {
  const [links, setLinks] = useState(DEFAULT_STORE_LINKS);

  useEffect(() => {
    const endpoint = getConfigurationsEndpoint();

    if (!endpoint) {
      return;
    }

    const controller = new AbortController();

    async function loadStoreLinks() {
      try {
        const response = await fetch(endpoint, {
          method: "GET",
          credentials: "omit",
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          return;
        }

        const payload = await response.json();
        setLinks(readStoreLinks(payload));
      } catch (error) {
        if (error.name !== "AbortError") {
          setLinks(DEFAULT_STORE_LINKS);
        }
      }
    }

    loadStoreLinks();

    return () => controller.abort();
  }, []);

  const value = useMemo(() => links, [links]);

  return <StoreLinksContext.Provider value={value}>{children}</StoreLinksContext.Provider>;
}

export function useStoreLinks() {
  return useContext(StoreLinksContext);
}

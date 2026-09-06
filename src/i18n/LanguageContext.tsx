"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { getDictionary, type Dictionary } from "./dictionaries";
import {
  marketplaceUrl,
  type Locale,
  localePath,
} from "./config";

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
  marketplace: string;
  href: (hash?: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t: getDictionary(locale),
      marketplace: marketplaceUrl(locale),
      href: (hash = "") => localePath(locale, hash),
    }),
    [locale]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

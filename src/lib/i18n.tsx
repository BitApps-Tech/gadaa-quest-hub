import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { messages, type Locale, type Messages } from "./messages";

const STORAGE_KEY = "gadaa_locale";
const LOCALE_EVENT = "gadaa-locale";

export const locales: { id: Locale; short: string; name: string }[] = [
  { id: "en", short: "EN", name: "English" },
  { id: "am", short: "አማ", name: "አማርኛ" },
  { id: "om", short: "OM", name: "Afaan Oromoo" },
];

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "am" || value === "om";
}

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : "en";
}

function applyDocumentLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale;
  document.documentElement.classList.toggle("lang-am", locale === "am");
}

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const next = readStoredLocale();
    setLocaleState(next);
    applyDocumentLocale(next);
    const sync = () => {
      const stored = readStoredLocale();
      setLocaleState(stored);
      applyDocumentLocale(stored);
    };
    window.addEventListener(LOCALE_EVENT, sync);
    return () => window.removeEventListener(LOCALE_EVENT, sync);
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    function setLocale(next: Locale) {
      localStorage.setItem(STORAGE_KEY, next);
      setLocaleState(next);
      applyDocumentLocale(next);
      window.dispatchEvent(new Event(LOCALE_EVENT));
    }
    return { locale, setLocale, t: messages[locale] };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}

export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ""));
}

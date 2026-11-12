import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ar" | "en";

/** A bilingual string pair used across all content and UI copy. */
export type L = { ar: string; en: string };

const STORAGE_KEY = "nova-lang";

type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  isAr: boolean;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Resolve a bilingual pair to the active language. */
  t: (pair: L) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Arabic is the default language of the clinic.
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "ar" || stored === "en") setLangState(stored);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
    el.classList.toggle("lang-ar", lang === "ar");
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      isAr: lang === "ar",
      setLang,
      toggle: () => setLang(lang === "ar" ? "en" : "ar"),
      t: (pair: L) => pair[lang],
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Fallback used if a component renders outside the provider (e.g. during a hot reload). */
const fallbackCtx: Ctx = {
  lang: "ar",
  dir: "rtl",
  isAr: true,
  setLang: () => {},
  toggle: () => {},
  t: (pair: L) => pair.ar,
};

export function useLang() {
  return useContext(LanguageContext) ?? fallbackCtx;
}

/** Format a number with Arabic-Indic or Latin digits depending on language. */
export function useNumber() {
  const { lang } = useLang();
  return useCallback(
    (n: number, opts?: Intl.NumberFormatOptions) =>
      new Intl.NumberFormat(lang === "ar" ? "ar-KW" : "en-US", opts).format(n),
    [lang],
  );
}

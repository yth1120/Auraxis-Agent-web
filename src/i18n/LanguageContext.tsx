import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { TRANSLATIONS, type Language, type Translations } from './translations';

/** 跨 React 孤岛同步语言变更的自定义事件名 */
const LANG_CHANGE_EVENT = 'auraxis:lang-change';

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readLang(): Language {
  if (typeof window === 'undefined') return 'zh';
  const stored = localStorage.getItem('lang') as Language | null;
  if (stored === 'en' || stored === 'zh') return stored;
  return navigator.language.startsWith('zh') ? 'zh' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('zh');

  useEffect(() => {
    setLang(readLang());

    // 跨孤岛同步 + 静态 Astro 文本更新
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ lang: Language }>).detail;
      setLang(detail.lang);
      // 同步更新所有 [data-i18n] 静态元素
      document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (key && key in TRANSLATIONS[detail.lang]) {
          el.textContent = (TRANSLATIONS[detail.lang] as unknown as Record<string, string>)[key];
        }
      });
    };
    window.addEventListener(LANG_CHANGE_EVENT, handler);
    return () => window.removeEventListener(LANG_CHANGE_EVENT, handler);
  }, []);

  const toggleLang = useCallback(() => {
    const next: Language = readLang() === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', next);
    setLang(next);
    window.dispatchEvent(new CustomEvent(LANG_CHANGE_EVENT, { detail: { lang: next } }));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: TRANSLATIONS[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { TRANSLATIONS, type Language, type Translations } from './translations';

/** 跨 React 孤岛同步语言变更的自定义事件名 */
const LANG_CHANGE_EVENT = 'auraxis:lang-change';

/** 语言切换时同步 <html lang> 与页面标题 */
function applyDocumentLang(lang: Language) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title =
    lang === 'zh'
      ? 'Auraxis Agent — 桌面端编程助手 | Official Website'
      : 'Auraxis Agent — Desktop Coding Assistant | Official Website';
}

/** 同步静态元素上的 aria-label / title 属性（配合 data-i18n-aria / data-i18n-title） */
function applyStaticAttributes(lang: Language) {
  if (typeof document === 'undefined') return;
  const dict = TRANSLATIONS[lang] as unknown as Record<string, string>;
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (key && dict[key]) el.setAttribute('aria-label', dict[key]);
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (key && dict[key]) el.setAttribute('title', dict[key]);
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (key && dict[key]) el.setAttribute('alt', dict[key]);
  });
}

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
    const initial = readLang();
    setLang(initial);
    applyDocumentLang(initial);
    applyStaticAttributes(initial);

    // 跨孤岛同步 + 静态 Astro 文本更新
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ lang: Language }>).detail;
      setLang(detail.lang);
      applyDocumentLang(detail.lang);
      applyStaticAttributes(detail.lang);
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
    applyDocumentLang(next);
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

import { useState, useEffect, useCallback } from 'react';
import { Sun, Moon } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../i18n/LanguageContext';

function ThemeToggleInner() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const { t } = useLanguage();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('theme');
      if (!stored) {
        document.documentElement.classList.toggle('dark', e.matches);
        setIsDark(e.matches);
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggle = useCallback(() => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  }, [isDark]);

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? t.theme_light : t.theme_dark}
      title={isDark ? t.theme_light : t.theme_dark}
      className="h-8 w-8 flex items-center justify-center p-2 rounded-md bg-white dark:bg-brand-dark hover:bg-black/5 dark:hover:bg-white/5 text-brand-muted border border-brand-hairline dark:border-brand-border transition-colors"
    >
      {isDark ? (
        <Sun className="w-4 h-4" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4" aria-hidden="true" />
      )}
    </button>
  );
}

export default function ThemeToggle() {
  return (
    <LanguageProvider>
      <ThemeToggleInner />
    </LanguageProvider>
  );
}

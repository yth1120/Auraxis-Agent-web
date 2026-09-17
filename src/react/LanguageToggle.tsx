import { LanguageProvider, useLanguage } from '../i18n/LanguageContext';

function LanguageToggleInner() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === 'zh' ? 'Switch to English' : '切换到中文'}
      title={lang === 'zh' ? 'Switch to English' : '切换到中文'}
      className="px-2.5 h-8 rounded-md text-xs font-mono font-medium transition-colors bg-white dark:bg-brand-dark hover:bg-black/5 dark:hover:bg-white/5 text-brand-muted border border-brand-hairline dark:border-brand-border"
    >
      {lang === 'zh' ? 'EN' : '中'}
    </button>
  );
}

export default function LanguageToggle() {
  return (
    <LanguageProvider>
      <LanguageToggleInner />
    </LanguageProvider>
  );
}

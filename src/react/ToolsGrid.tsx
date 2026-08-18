import { useState, useCallback, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, ShieldCheck, Search } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../i18n/LanguageContext';
import { ALL_TOOLS, DANGER_TOOLS, SAFE_TOOLS, TOOLS_BY_CATEGORY, TOOL_CATEGORIES } from '../data/tools';
import type { ToolType, ToolCategory } from '../types';

type FilterKey = 'all' | ToolType | ToolCategory;

/** 数据驱动数字滚动（600ms ease-out；prefers-reduced-motion 时直接显示） */
function AnimatedNumber({ value }: { value?: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value === undefined) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    const duration = 600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  if (value === undefined) return null;
  return <span className="opacity-60 tabular-nums">{display}</span>;
}

const FILTER_KEYS: FilterKey[] = [
  'all',
  'danger',
  'safe',
  ...TOOL_CATEGORIES,
];

function ToolsGridInner() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [query, setQuery] = useState<string>('');
  const [expandedTools, setExpandedTools] = useState<Set<string>>(new Set());

  const filterLabels: Record<string, string> = {
    all: t.tools_filter_all,
    danger: t.tools_filter_danger,
    safe: t.tools_filter_safe,
    files: t.tools_filter_files,
    documents: t.tools_filter_documents,
    connectors: t.tools_filter_connectors,
    execution: t.tools_filter_execution,
    terminal: t.tools_filter_terminal,
    web: t.tools_filter_web,
    planning: t.tools_filter_planning,
    agent: t.tools_filter_agent,
    background: t.tools_filter_background,
    session: t.tools_filter_session,
    capability: t.tools_filter_capability,
    verify: t.tools_filter_verify,
    interaction: t.tools_filter_interaction,
  };

  // 静态站点：工具数据随包内置，按筛选条件直接本地过滤
  const stats = { danger: DANGER_TOOLS.length, safe: SAFE_TOOLS.length };

  const filteredTools = useMemo(() => {
    if (activeFilter === 'danger') return DANGER_TOOLS;
    if (activeFilter === 'safe') return SAFE_TOOLS;
    if (activeFilter !== 'all') return TOOLS_BY_CATEGORY[activeFilter] ?? ALL_TOOLS;
    return ALL_TOOLS;
  }, [activeFilter]);

  // 客户端搜索过滤（名称 + 描述，大小写不敏感）
  const visibleTools = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return filteredTools;
    return filteredTools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        (tool.descriptionEn ?? '').toLowerCase().includes(q)
    );
  }, [filteredTools, query]);

  const toggleExpand = useCallback((toolName: string) => {
    setExpandedTools((prev) => { const next = new Set(prev); if (next.has(toolName)) next.delete(toolName); else next.add(toolName); return next; });
  }, []);

  return (
    <div className="space-y-6">
      {/* 搜索框 + 分类胶囊 */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-faint pointer-events-none" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.tools_search_placeholder}
            aria-label={t.tools_search_placeholder}
            className="w-full h-9 pl-9 pr-3 rounded-md border border-brand-hairline dark:border-brand-border bg-white dark:bg-brand-dark text-sm text-ink dark:text-ivory placeholder:text-brand-faint focus:outline-none focus:border-brand-accent/60 focus:ring-2 focus:ring-brand-accent/20 transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label={lang === 'zh' ? '工具分类筛选' : 'Tool category filter'}>
          {FILTER_KEYS.map((key) => {
            const count = key === 'all' ? stats.danger + stats.safe : key === 'danger' ? stats.danger : key === 'safe' ? stats.safe : undefined;
            return (
              <button key={key} role="tab" aria-selected={activeFilter === key} onClick={() => setActiveFilter(key)}
                className={`inline-flex items-center gap-1.5 px-3 h-9 rounded-full text-xs font-mono font-medium transition-colors ${activeFilter === key ? 'bg-brand-accent/15 text-brand-accent border border-brand-accent/40' : 'bg-white dark:bg-brand-dark text-brand-muted hover:text-ink dark:hover:text-ivory border border-brand-hairline dark:border-brand-border'}`}>
                {filterLabels[key] ?? key}<AnimatedNumber value={count} />
              </button>
            );
          })}
        </div>
      </div>

      {
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" role="list" aria-label={lang === 'zh' ? `${visibleTools.length} 个工具` : `${visibleTools.length} tools`}>
          {visibleTools.map((tool) => {
            const isDanger = tool.type === 'danger';
            const isExpanded = expandedTools.has(tool.name);
            return (
              <div key={tool.name} role="listitem" tabIndex={0} aria-expanded={isExpanded}
                onClick={() => toggleExpand(tool.name)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleExpand(tool.name); } }}
                className={`group relative bg-white dark:bg-brand-card border p-4 rounded-lg flex flex-col cursor-pointer transition-colors select-none ${isDanger ? 'border-brand-danger/40 hover:border-brand-danger/70' : 'border-brand-hairline dark:border-brand-border hover:border-brand-accent/40'} ${isExpanded ? (isDanger ? 'border-brand-danger/70' : 'border-brand-accent/50') : ''}`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-ink dark:text-ivory text-xs font-mono">{tool.name}</span>
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${isDanger ? 'text-brand-danger bg-brand-danger/10 border-brand-danger/30' : 'text-brand-success bg-brand-success/10 border-brand-success/30'}`}>
                    {isDanger ? <span className="inline-flex items-center gap-0.5"><AlertTriangle className="w-2.5 h-2.5" aria-hidden="true" />{t.tools_badge_danger}</span> : <span className="inline-flex items-center gap-0.5"><ShieldCheck className="w-2.5 h-2.5" aria-hidden="true" />{t.tools_badge_safe}</span>}
                  </span>
                </div>
                <p className="text-brand-muted mt-2 text-[11px] leading-tight flex-1">
                  {lang === 'en' && tool.descriptionEn ? tool.descriptionEn : tool.description}
                </p>
                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-brand-hairline dark:border-brand-border/60">
                  <span className="text-[9px] font-mono text-brand-faint">{filterLabels[tool.category] ?? tool.category}</span>
                  {isExpanded ? <ChevronUp className="w-3 h-3 text-brand-faint" aria-hidden="true" /> : <ChevronDown className="w-3 h-3 text-brand-faint" aria-hidden="true" />}
                </div>
                {isExpanded && (
                  <div className="mt-3 p-2.5 code-dark-box rounded border border-brand-border font-mono text-[10px] text-brand-ivory overflow-x-auto" onClick={(e) => e.stopPropagation()}>
                    <pre className="whitespace-pre-wrap leading-relaxed">{JSON.stringify(tool.params, null, 2)}</pre>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      }
      {visibleTools.length === 0 && <p className="text-center text-brand-muted text-sm py-8">{t.tools_empty}</p>}
    </div>
  );
}

export default function ToolsGrid() {
  return <LanguageProvider><ToolsGridInner /></LanguageProvider>;
}

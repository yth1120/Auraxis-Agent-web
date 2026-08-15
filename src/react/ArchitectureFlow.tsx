import { useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftRight, LayoutTemplate, Workflow, FileCode, Puzzle, Terminal, RefreshCw, KeyRound, FolderLock } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../i18n/LanguageContext';

type HoverZone = 'none' | 'renderer' | 'main';

/** 粒子定义：起点、终点、颜色 */
interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

/** Aura 紫灰 — 仅作状态点/数据流动画的强调色 */
const PARTICLES: Particle[] = [
  { id: 1, x: 20, y: 25, color: '#8C8AA8' },
  { id: 2, x: 20, y: 50, color: '#8C8AA8' },
  { id: 3, x: 20, y: 75, color: '#8C8AA8' },
  { id: 4, x: 30, y: 38, color: '#8C8AA8' },
  { id: 5, x: 30, y: 62, color: '#8C8AA8' },
];

function ArchitectureFlowInner() {
  const { t } = useLanguage();
  const [hoverZone, setHoverZone] = useState<HoverZone>('none');
  const prefersReduced = useReducedMotion();

  const handleRendererEnter = useCallback(() => setHoverZone('renderer'), []);
  const handleMainEnter = useCallback(() => setHoverZone('main'), []);
  const handleLeave = useCallback(() => setHoverZone('none'), []);

  const shouldAnimate = !prefersReduced;

  return (
    <div className="bg-white dark:bg-brand-dark border border-brand-hairline dark:border-brand-border rounded-xl p-8 overflow-x-auto transition-colors">      <div className="min-w-[800px] flex items-stretch justify-between gap-8 font-mono text-xs">
        {/* ── 渲染进程 ── */}
        <div
          className="flex-1 border border-brand-accent/25 dark:border-brand-accent/30 bg-white dark:bg-brand-accent/5 rounded-lg p-5 transition-colors"
          onMouseEnter={handleRendererEnter}
          onMouseLeave={handleLeave}
        >
          <div className="flex items-center gap-2 pb-3 border-b border-brand-hairline dark:border-brand-border mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent"></span>
            <span className="font-medium text-ink dark:text-ivory">
              {t.arch_renderer_title}
            </span>
          </div>
          <ul className="space-y-3 text-brand-muted">
            <li className="flex items-center gap-2">
              <LayoutTemplate className="w-4 h-4 text-brand-accent" aria-hidden="true" />
              <span>{t.arch_renderer_1}</span>
            </li>
            <li className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-brand-accent" aria-hidden="true" />
              <span>{t.arch_renderer_2}</span>
            </li>
            <li className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-brand-accent" aria-hidden="true" />
              <span>{t.arch_renderer_3}</span>
            </li>
            <li className="flex items-center gap-2">
              <Puzzle className="w-4 h-4 text-brand-accent" aria-hidden="true" />
              <span>{t.arch_renderer_4}</span>
            </li>
          </ul>
        </div>

        {/* ── IPC 桥梁 + 粒子动画 ── */}
        <div className="w-44 flex flex-col items-center justify-center text-center px-4 relative">
          <div className="text-[10px] text-brand-faint mb-2 uppercase tracking-widest font-bold">
            {t.arch_ipc_label}
          </div>

          {/* 粒子流动画（CSS 定位，数据驱动） */}
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute left-0 w-2 h-2 rounded-full pointer-events-none"
              style={{
                top: `${p.y}%`,
                backgroundColor: p.color,
              }}
              aria-hidden="true"
              animate={
                shouldAnimate && hoverZone === 'renderer'
                  ? {
                      x: [0, 160, 160, 0],
                      opacity: [0.3, 1, 0.7, 0.3],
                    }
                  : { x: 0, opacity: 0.2 }
              }
              transition={
                shouldAnimate
                  ? {
                      x: {
                        duration: 2.5 + p.id * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      opacity: {
                        duration: 2.5 + p.id * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }
                  : { duration: 0 }
              }
            />
          ))}

          <div className="w-full py-1 border-y border-dashed border-brand-border text-brand-accent flex items-center justify-center gap-1 relative z-10">
            <motion.div
              animate={
                shouldAnimate && hoverZone !== 'none'
                  ? { rotate: [0, 180, 360] }
                  : { rotate: 0 }
              }
              transition={
                shouldAnimate
                  ? { duration: 3, repeat: Infinity, ease: 'linear' }
                  : { duration: 0 }
              }
              className="flex items-center gap-1"
            >
              <ArrowLeftRight className="w-4 h-4" aria-hidden="true" />
            </motion.div>
            <span>{t.arch_ipc_bridge}</span>
          </div>
          <div className="text-[9px] text-brand-faint mt-2 font-mono relative z-10">
            {t.arch_ipc_protocol}
          </div>
        </div>

        {/* ── 主进程 ── */}
        <div
          className="flex-1 border border-brand-accent/25 dark:border-brand-accent/30 bg-white dark:bg-brand-accent/5 rounded-lg p-5 transition-colors relative"
          onMouseEnter={handleMainEnter}
          onMouseLeave={handleLeave}
        >
          {/* 悬浮高亮（数据驱动淡入） */}
          {shouldAnimate && hoverZone === 'main' && (
            <motion.div
              className="absolute inset-0 rounded-lg bg-brand-accent/10 pointer-events-none"
              animate={{ opacity: [0, 0.15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
          )}

          <div className="flex items-center gap-2 pb-3 border-b border-brand-hairline dark:border-brand-border mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent"></span>
            <span className="font-medium text-ink dark:text-ivory">
              {t.arch_main_title}
            </span>
          </div>
          <ul className="space-y-3 text-brand-muted">
            <li className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-accent" aria-hidden="true" />
              <span>{t.arch_main_1}</span>
            </li>
            <li className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-brand-accent" aria-hidden="true" />
              <span>{t.arch_main_2}</span>
            </li>
            <li className="flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-brand-accent" aria-hidden="true" />
              <span>{t.arch_main_3}</span>
            </li>
            <li className="flex items-center gap-2">
              <FolderLock className="w-4 h-4 text-brand-accent" aria-hidden="true" />
              <span>{t.arch_main_4}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ArchitectureFlow() {
  return <LanguageProvider><ArchitectureFlowInner /></LanguageProvider>;
}

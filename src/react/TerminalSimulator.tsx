import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  CheckCircle,
  Sparkles,
  ShieldAlert,
  ShieldCheck,
  ChevronRight,
  Folder,
  FileCode,
} from 'lucide-react';
import { SIM_STEPS } from '../data/simSteps';
import { LanguageProvider, useLanguage } from '../i18n/LanguageContext';
import type { LogStep, PlayState, PermissionState } from '../types';

/**
 * 交互式 IDE 风格仿真器 (React 孤岛)
 *
 * 状态驱动、抗竞态。模拟 Auraxis 统一 ReAct 步进循环：
 *   输入 → step-engine → 计划 → Glob/Read → 权限看门狗 → 批准 →
 *   Write → Code Mode → LSP → ReviewArtifact → <FINAL_ANSWER>
 *
 * 核心状态机：
 *   PlayState:  playing | paused | finished
 *   PermissionState: idle | awaiting-approval | approved | denied
 */

const STEP_INTERVAL_MS = 1800;

const FILE_TREE = [
  { name: 'auraxis', folder: true, depth: 0 },
  { name: 'src', folder: true, depth: 1 },
  { name: 'App.tsx', folder: false, depth: 2 },
  { name: '__tests__', folder: true, depth: 2 },
  { name: 'App.test.tsx', folder: false, depth: 3, active: true },
  { name: 'electron', folder: true, depth: 1 },
  { name: 'step-engine.ts', folder: false, depth: 2 },
  { name: 'tool-handlers.ts', folder: false, depth: 2 },
  { name: 'package.json', folder: false, depth: 1 },
  { name: 'vitest.config.ts', folder: false, depth: 1 },
];

/** 为各日志类型生成终端 HTML 类名 */
function getLogClassNames(step: LogStep): { container: string; preBlock?: string } {
  switch (step.type) {
    case 'input':
      return { container: 'text-brand-accent font-medium' };
    case 'system':
      return { container: 'text-brand-muted text-[11px] border-l-2 border-brand-border pl-2 py-0.5' };
    case 'step':
      return { container: 'bg-brand-accent/5 border border-brand-accent/20 p-2.5 rounded text-brand-text' };
    case 'tool-call':
      return { container: 'bg-white/5 border border-brand-border p-2.5 rounded' };
    case 'permission':
      return { container: 'bg-yellow-500/10 border border-yellow-600/30 p-2.5 rounded text-yellow-600 dark:text-yellow-500' };
    case 'user-approved':
      return { container: 'text-emerald-600 dark:text-emerald-400 font-medium' };
    case 'success-answer':
      return {
        container: 'bg-emerald-500/10 border border-emerald-600/30 p-3 rounded text-brand-text',
      };
  }
}

/** 渲染单条日志条目 */
function LogEntry({
  step,
  permissionState,
  onApprove,
  onDeny,
}: {
  step: LogStep;
  permissionState: PermissionState;
  onApprove: () => void;
  onDeny: () => void;
}) {
  const { t } = useLanguage();
  const classes = getLogClassNames(step);
  const isAwaitingApproval = step.type === 'permission' && permissionState === 'awaiting-approval';

  return (
    <div className={`font-mono text-xs leading-relaxed ${classes.container}`}>
      {step.type === 'input' && (
        <div className="flex items-start gap-1.5">
          <ChevronRight className="w-4 h-4 text-brand-faint mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span className="cursor-blink">{step.text}</span>
        </div>
      )}

      {step.type === 'system' && <span>{step.text}</span>}

      {step.type === 'step' && (
        <>
          <div className="text-brand-accent font-medium mb-1">{step.title}</div>
          <pre className="whitespace-pre-wrap font-mono text-[11px] text-brand-muted">
            {step.text}
          </pre>
        </>
      )}

      {step.type === 'tool-call' && (
        <>
          <div className="flex items-center justify-between text-brand-text mb-1">
            <span>
              {t.terminal_tool_call}
              <span className="text-brand-accent font-bold">{step.name}</span>
            </span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-600/30 px-1 rounded font-mono">
              {step.status}
            </span>
          </div>
          <div className="text-brand-faint text-[10px] mb-1.5">{t.terminal_args}{step.args}</div>
          <div className="text-brand-muted text-[11px] bg-brand-black/60 p-1.5 rounded font-mono border border-brand-border whitespace-pre-wrap">
            {step.result}
          </div>
        </>
      )}

      {step.type === 'permission' && (
        <>
          <pre className="whitespace-pre-wrap font-mono text-[11px]">{step.text}</pre>
          {isAwaitingApproval && (
            <div className="flex items-center gap-3 mt-3" role="group" aria-label="权限审批操作">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onApprove();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded border border-emerald-400/30 transition-colors"
                aria-label={t.terminal_allow}
              >
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                {t.terminal_allow}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeny();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-medium rounded border border-red-400/30 transition-colors"
                aria-label={t.terminal_deny}
              >
                <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
                {t.terminal_deny}
              </button>
            </div>
          )}
        </>
      )}

      {step.type === 'user-approved' && (
        <div className="flex items-center gap-1.5">
          <CheckCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>{step.text}</span>
        </div>
      )}

      {step.type === 'success-answer' && (
        <>
          <div className="text-emerald-600 dark:text-emerald-400 font-bold mb-1.5 flex items-center gap-1">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            {t.terminal_task_done}
          </div>
          <pre className="whitespace-pre-wrap font-mono text-[11px] text-brand-muted">
            {step.text}
          </pre>
        </>
      )}
    </div>
  );
}

function TerminalSimulatorInner() {
  const { t } = useLanguage();
  const [logs, setLogs] = useState<LogStep[]>([]);
  const [, setCurrentStepIndex] = useState<number>(0);
  const [playState, setPlayState] = useState<PlayState>('playing');
  const [permissionState, setPermissionState] = useState<PermissionState>('idle');

  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── 自动滚动（仅终端内部容器，不影响页面）──
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // ── 推进到下一步 ──
  const advanceStep = useCallback(() => {
    setCurrentStepIndex((prev) => {
      const nextIndex = prev;

      if (nextIndex >= SIM_STEPS.length) {
        setPlayState('finished');
        return prev;
      }

      const step = SIM_STEPS[nextIndex];

      // 权限看门狗阻断：遇到 permission 类型自动暂停
      if (step.type === 'permission') {
        setPermissionState('awaiting-approval');
        setPlayState('paused');
      }

      setLogs((prevLogs) => [...prevLogs, step]);
      return nextIndex + 1;
    });
  }, []);

  // ── 自动播放循环 ──
  useEffect(() => {
    if (playState !== 'playing') {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      advanceStep();
    }, STEP_INTERVAL_MS);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [playState, advanceStep]);

  // ── 首次自动启动 ──
  useEffect(() => {
    // 立即渲染第一步
    if (logs.length === 0 && SIM_STEPS.length > 0) {
      const firstStep = SIM_STEPS[0];
      setLogs([firstStep]);
      setCurrentStepIndex(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── 播放控制 ──
  const handlePlayPause = useCallback(() => {
    if (playState === 'finished') {
      // 重新开始
      setLogs([]);
      setCurrentStepIndex(0);
      setPermissionState('idle');
      setPlayState('playing');
      return;
    }
    setPlayState((prev) => (prev === 'playing' ? 'paused' : 'playing'));
  }, [playState]);

  const handleSkip = useCallback(() => {
    if (playState === 'finished' || permissionState === 'awaiting-approval') return;
    advanceStep();
  }, [playState, permissionState, advanceStep]);

  const handleReset = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setLogs([]);
    setCurrentStepIndex(0);
    setPlayState('playing');
    setPermissionState('idle');
  }, []);

  // ── 权限看门狗交互 ──
  const handleApprove = useCallback(() => {
    setPermissionState('approved');
    // 追加 user-approved 日志并继续
    const approvedStep = SIM_STEPS.find((s) => s.type === 'user-approved');
    if (approvedStep) {
      setLogs((prev) => [...prev, approvedStep]);
    }
    // 跳过 permission 后的 user-approved 步骤，指向下一个索引
    setCurrentStepIndex((prev) => {
      // 找到 user-approved 在 SIM_STEPS 中的位置，然后 +1
      const approvedIdx = SIM_STEPS.findIndex((s) => s.type === 'user-approved');
      return approvedIdx >= 0 ? approvedIdx + 1 : prev;
    });
    setPlayState('playing');
  }, []);

  const handleDeny = useCallback(() => {
    setPermissionState('denied');
    // 追加拒绝日志
    const denyLog: LogStep = {
      type: 'system',
      text: t.terminal_deny_log,
    };
    setLogs((prev) => [...prev, denyLog]);
    // 跳过后面的依赖步骤，直接到最后一个 success-answer
    const finalIdx = SIM_STEPS.findIndex((s) => s.type === 'success-answer');
    if (finalIdx >= 0) {
      setCurrentStepIndex(finalIdx);
    } else {
      setCurrentStepIndex(SIM_STEPS.length);
    }
    setPlayState('playing');
  }, [t]);

  const isPlaying = playState === 'playing';
  const isFinished = playState === 'finished';
  const canSkip = isPlaying && permissionState !== 'awaiting-approval';

  return (
    <div className="relative">
      {/* IDE 外壳 Aura 微光（仅 3% 面积强调） */}
      <div className="absolute -inset-1 rounded-xl bg-brand-accent/15 blur-lg opacity-60" aria-hidden="true" />

      <div className="relative terminal-dark-box border border-brand-border rounded-xl overflow-hidden">
        {/* ── 标题栏：mac 三键 + 文件标签 + 状态 ── */}
        <div className="bg-brand-black px-4 py-2.5 border-b border-brand-border flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-1.5 flex-shrink-0" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <div className="flex items-center gap-1 min-w-0">
              <span className="flex items-center gap-1.5 px-2.5 h-7 bg-white/5 border border-brand-border rounded-t-md text-brand-accent text-[10px] font-mono whitespace-nowrap">
                <FileCode className="w-3 h-3" aria-hidden="true" />
                {t.terminal_title}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
            <span className="text-[10px] text-brand-accent font-mono">{t.terminal_status}</span>
          </div>
        </div>

        {/* ── 主体：文件树侧栏 + 日志区 ── */}
        <div className="flex">
          {/* 文件树（移动端隐藏） */}
          <aside className="hidden sm:block w-44 flex-shrink-0 border-r border-brand-border/60 p-2.5" aria-hidden="true">
            <div className="text-[9px] font-mono text-brand-faint uppercase tracking-widest px-1.5 pb-2">Explorer</div>
            <ul className="space-y-0.5">
              {FILE_TREE.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center gap-1.5 px-1.5 py-[3px] rounded font-mono text-[10px] ${
                    item.active
                      ? 'bg-brand-accent/10 text-brand-accent'
                      : item.folder
                        ? 'text-brand-muted'
                        : 'text-brand-faint'
                  }`}
                  style={{ paddingLeft: `${8 + item.depth * 12}px` }}
                >
                  {item.folder ? (
                    <Folder className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <FileCode className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                  )}
                  <span className="truncate">{item.name}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* 日志区 */}
          <div
            ref={terminalContainerRef}
            className="flex-1 p-4 h-[360px] overflow-y-auto space-y-3 min-w-0"
            role="log"
            aria-live="polite"
            aria-label="终端模拟输出"
          >
            {logs.map((step, i) => (
              <LogEntry
                key={i}
                step={step}
                permissionState={
                  i === logs.length - 1 ? permissionState : ('approved' as PermissionState)
                }
                onApprove={handleApprove}
                onDeny={handleDeny}
              />
            ))}

            {/* 滚动锚点 */}
            <div aria-hidden="true" />

            {/* 完成状态 */}
            {isFinished && (
              <div className="text-[11px] text-brand-faint font-mono text-center pt-2 border-t border-brand-border/60">
                ⏹ {t.terminal_finished}
              </div>
            )}
          </div>
        </div>

        {/* ── 底部状态栏：装饰信息 + 播放控制 ── */}
        <div className="bg-brand-black px-3 py-1.5 border-t border-brand-border flex items-center gap-3 text-[10px] font-mono text-brand-faint">
          <span className="hidden md:inline">ReAct Loop · iter 3/200 · utf-8</span>
          <span className="hidden sm:inline">TSX · Ln 12, Col 8</span>

          <div className="ml-auto flex items-center gap-1.5" role="toolbar" aria-label="终端播放控制">
            <button
              onClick={handlePlayPause}
              aria-label={isPlaying ? t.terminal_pause : isFinished ? t.terminal_replay : t.terminal_play}
              title={isPlaying ? t.terminal_pause : isFinished ? t.terminal_replay : t.terminal_play}
              className="bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent border border-brand-accent/30 px-2 h-6 rounded transition-colors inline-flex items-center gap-1"
            >
              {isPlaying ? (
                <Pause className="w-3 h-3" aria-hidden="true" />
              ) : (
                <Play className="w-3 h-3" aria-hidden="true" />
              )}
              <span>{isPlaying ? t.terminal_pause : isFinished ? t.terminal_replay : t.terminal_play}</span>
            </button>

            <button
              onClick={handleSkip}
              disabled={!canSkip}
              aria-label={t.terminal_skip}
              title={t.terminal_skip}
              className="bg-white/5 hover:bg-white/10 text-brand-text border border-brand-border px-2 h-6 rounded transition-colors inline-flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <SkipForward className="w-3 h-3" aria-hidden="true" />
              <span>{t.terminal_skip}</span>
            </button>

            <button
              onClick={handleReset}
              aria-label={t.terminal_reset}
              title={t.terminal_reset}
              className="bg-white/5 hover:bg-white/10 text-brand-text border border-brand-border px-2 h-6 rounded transition-colors inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" aria-hidden="true" />
              <span>{t.terminal_reset}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TerminalSimulator() {
  return <LanguageProvider><TerminalSimulatorInner /></LanguageProvider>;
}

/**
 * Auraxis 共享类型定义
 *
 * 与桌面端 electron/contracts/ 保持语义同构映射：
 * PermissionMode ↔ electron/types.ts，IPC 响应封装 ↔ IpcResponse 风格。
 */

// ─── 权限模态 ─────────────────────────────────────
/** 工具执行审批策略 — 与桌面端 ApprovalPolicy 对齐（历史 'afe' 拼写归一为 'auto'） */
export type PermissionMode = 'ask' | 'plan' | 'auto';

// ─── 工具分类 ─────────────────────────────────────
/** 工具安全等级 */
export type ToolType = 'danger' | 'safe';

/** 工具功能分类（按能力族划分，对应桌面端 71 个工具） */
export type ToolCategory =
  | 'files'
  | 'documents'
  | 'connectors'
  | 'execution'
  | 'terminal'
  | 'web'
  | 'planning'
  | 'agent'
  | 'background'
  | 'session'
  | 'capability'
  | 'verify'
  | 'interaction';

// ─── 终端仿真 ─────────────────────────────────────
/**
 * 终端日志条目类型
 *
 * 状态机流转：
 *   input → system → step → tool-call → ... → permission → user-approved → ... → success-answer
 *
 * 当 type === 'permission' 时，终端自动暂停，等待用户人工批准。
 */
export type LogStepType =
  | 'input'
  | 'system'
  | 'step'
  | 'tool-call'
  | 'permission'
  | 'user-approved'
  | 'success-answer';

export interface LogStep {
  type: LogStepType;
  /** 通用文本内容（input / system / permission / success-answer） */
  text?: string;
  /** step 类型标题 */
  title?: string;
  /** tool-call 类型工具名 */
  name?: string;
  /** tool-call 类型参数 JSON */
  args?: string;
  /** tool-call 执行状态 */
  status?: 'SUCCESS' | 'FAILED' | 'PENDING';
  /** tool-call 执行返回结果 */
  result?: string;
}

// ─── 播放状态 ─────────────────────────────────────
export type PlayState = 'playing' | 'paused' | 'finished';
export type PermissionState = 'idle' | 'awaiting-approval' | 'approved' | 'denied';

// ─── 工具数据结构 ─────────────────────────────────
export interface Tool {
  /** 工具唯一标识名 */
  name: string;
  /** 安全分级 */
  type: ToolType;
  /** 中文简述 */
  description: string;
  /** 英文描述（桌面端 tool-defs.ts 原文，用于英文界面） */
  descriptionEn?: string;
  /** 入参字段名列表（对应桌面端 input_schema 顶层 properties） */
  params: string[];
  /** 功能分类 */
  category: ToolCategory;
  /** 是否允许并发安全调用（桌面端 isConcurrencySafe） */
  concurrencySafe: boolean;
}

// ─── 平台检测 ─────────────────────────────────────
export type Platform = 'windows' | 'mac' | 'linux' | 'mobile';

// ─── API 响应封装 ─────────────────────────────────
/** 统一 API 响应封装 — 与桌面端 IpcResponse 风格同构 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

// ─── 发布版本 ─────────────────────────────────────
/** 各平台下载资产信息 */
export interface DownloadAsset {
  /** 展示标签，如 "macOS (Universal DMG)" */
  label: string;
  /** 下载直链（首个公开版本发布前为占位符） */
  url: string;
  /** 文件体积，如 "142 MB" */
  size: string;
  /** CPU 架构，如 "arm64" | "x64" | "universal" */
  arch?: string;
  /** 同平台备选架构资产（如 macOS Apple Silicon DMG） */
  alt?: DownloadAsset;
}

/** 发布版本完整信息 */
export interface ReleaseInfo {
  version: string;
  releaseDate: string;
  changelog: string[];
  downloads: Record<Platform, DownloadAsset>;
}

// ─── API 响应数据类型 ──────────────────────────────
/** 工具列表统计数据结构（站点静态数据，非 API 响应） */
export interface ToolsListData {
  tools: Tool[];
  total: number;
  stats: {
    danger: number;
    safe: number;
  };
}

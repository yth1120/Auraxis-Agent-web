import type { Tool, ToolType, ToolCategory } from '../types';
import rawTools from './tools-data.json';

/**
 * Auraxis 完整的 63 个内置工具数据集
 *
 * 数据事实源：桌面端 electron/tool-defs.ts（由提取流程生成 tools-data.json），
 * danger 分类对齐 electron/ipc/tool-handlers.ts 的 DANGEROUS_TOOLS（共 11 个）。
 */

interface RawTool {
  name: string;
  description: string;
  category: ToolCategory;
  danger: boolean;
  summary: boolean;
  concurrencySafe: boolean;
  params: string[];
}

const RAW = rawTools as RawTool[];

export const ALL_TOOLS: Tool[] = RAW.map((t) => ({
  name: t.name,
  type: (t.danger ? 'danger' : 'safe') as ToolType,
  description: t.description,
  category: t.category,
  params: t.params,
  summary: t.summary,
  concurrencySafe: t.concurrencySafe,
}));

/** 按类型筛选 */
export const DANGER_TOOLS = ALL_TOOLS.filter((t) => t.type === 'danger');
export const SAFE_TOOLS = ALL_TOOLS.filter((t) => t.type === 'safe');

/** 按分类筛选 */
export const TOOLS_BY_CATEGORY: Record<string, Tool[]> = Object.fromEntries(
  [...new Set(ALL_TOOLS.map((t) => t.category))].map((cat) => [
    cat,
    ALL_TOOLS.filter((t) => t.category === cat),
  ])
);

/** 全量分类列表（保持出现顺序） */
export const TOOL_CATEGORIES: ToolCategory[] = [
  ...new Set(ALL_TOOLS.map((t) => t.category)),
];

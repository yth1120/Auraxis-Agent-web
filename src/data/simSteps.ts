import type { LogStep } from '../types';

/**
 * 终端模拟演示的完整步骤序列
 *
 * 模拟一个典型的 Auraxis ReAct 循环：
 *   用户输入 → 统一步进引擎 → 计划生成 → Glob 搜索 → Read 读取 →
 *   权限看门狗阻断 (Write) → 用户批准 → 文件写入 → Code Mode 编排 →
 *   LSP 静态检查 → ReviewArtifact 验证 → <FINAL_ANSWER>
 */
export const SIM_STEPS: LogStep[] = [
  {
    type: 'input',
    text: 'auraxis --run "为 src/App.tsx 编写单元测试，通过 LSP 校验后提交"',
  },
  {
    type: 'system',
    text: '[StepEngine] v2.0.1 · 统一 ReAct 步进 · 迭代上限 200 | 分配 AgentId: a7b1-9d2c-f6ea | 优先级: HIGH | 并发: 3',
  },
  {
    type: 'step',
    title: 'Phase 1: 计划树生成',
    text: 'Agent 脑暴结构化计划 TaskPlan...\n✔ 已生成 TaskPlan JSON 树\n├─ 任务 1: 运行 Glob / Grep 定位 App.tsx 核心测试点\n├─ 任务 2: 新建 App.test.tsx 测试文件\n├─ 任务 3: 运行 LSP (tsc --noEmit) 静态语法分析\n└─ 任务 4: 利用 ReviewArtifact 编译质检门禁并合并',
  },
  {
    type: 'tool-call',
    name: 'Glob',
    args: '{ "pattern": "**/App.tsx", "maxDepth": 6 }',
    status: 'SUCCESS',
    result: '找到 1 个匹配文件: src/App.tsx',
  },
  {
    type: 'tool-call',
    name: 'Read',
    args: '{ "file_path": "src/App.tsx", "limit": 100 }',
    status: 'SUCCESS',
    result: '已读出 App.tsx (约 2400 字节，成功获取核心状态结构)',
  },
  {
    type: 'permission',
    text: '⚠️ 【权限看门狗】检测到高危写入尝试!\n工具: Write\n参数: "src/__tests__/App.test.tsx"\n策略模式: ask (当前等待人工批准...)',
  },
  {
    type: 'user-approved',
    text: '✔ 用户在前端弹窗点击【允许执行本次操作】',
  },
  {
    type: 'tool-call',
    name: 'Write',
    args: '{ "file_path": "src/__tests__/App.test.tsx", "content": "import { test, expect } from \'vitest\'..." }',
    status: 'SUCCESS',
    result: '写入完成，已创建撤销快照至 .auraxis-snapshots/',
  },
  {
    type: 'tool-call',
    name: 'RunCode',
    args: '{ "language": "typescript", "code": "await tools.Glob({ pattern: \\"**/*.test.ts\\" }) ..." }',
    status: 'SUCCESS',
    result: 'Code Mode: 程序体在 worker 线程执行，子调用回穿权限管线 (并发 2 / 上限 8)',
  },
  {
    type: 'tool-call',
    name: 'LSP',
    args: '{ "command": "diagnostics" }',
    status: 'SUCCESS',
    result: '静态类型检查成功! tsc 报错行数: 0 (没有发现隐式 any 或悬挂类型)',
  },
  {
    type: 'tool-call',
    name: 'ReviewArtifact',
    args: '{ "scope": "test" }',
    status: 'SUCCESS',
    result: '单元测试执行结果:\n✓ App.test.tsx (2.1s)\n✓ 1 passed | 组件覆盖 100%',
  },
  {
    type: 'success-answer',
    text: '<FINAL_ANSWER>\nApp.tsx 的测试体系编写完成，LSP 静态质检通过，ReviewArtifact 门禁通过。成果已合并进入主开发工作目录。\n</FINAL_ANSWER>',
  },
];

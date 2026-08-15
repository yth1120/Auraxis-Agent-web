export type Language = 'zh' | 'en';

export interface Translations {
  // Header
  nav_features: string;
  nav_demo: string;
  nav_architecture: string;
  nav_tools: string;
  nav_download: string;
  nav_github_label: string;

  // Hero
  hero_badge: string;
  hero_title_line1: string;
  hero_title_line2: string;
  hero_description: string;
  hero_cta_download: string;
  hero_cta_docs: string;
  hero_stat_tools: string;
  hero_stat_tools_sub: string;
  hero_stat_perms: string;
  hero_stat_perms_sub: string;
  hero_stat_tests: string;
  hero_stat_tests_sub: string;
  hero_stat_sdk: string;
  hero_stat_sdk_sub: string;

  // Download section
  download_title: string;
  download_subtitle: string;
  download_current_version: string;
  download_detected: string;
  download_loading: string;
  download_error: string;
  download_mobile_warning: string;
  download_requirements_title: string;
  download_req1: string;
  download_req2: string;
  download_req3: string;
  download_changelog_title: string;
  download_placeholder_note: string;
  download_unavailable: string;
  download_windows_tip: string;
  download_mac_tip: string;
  download_linux_tip: string;

  // Terminal
  terminal_title: string;
  terminal_target: string;
  terminal_play: string;
  terminal_pause: string;
  terminal_skip: string;
  terminal_reset: string;
  terminal_replay: string;
  terminal_finished: string;
  terminal_allow: string;
  terminal_deny: string;
  terminal_tool_call: string;
  terminal_args: string;
  terminal_task_done: string;
  terminal_deny_log: string;
  terminal_status: string;

  // Features
  features_title: string;
  features_subtitle: string;
  feature1_title: string;
  feature1_desc: string;
  feature2_title: string;
  feature2_desc: string;
  feature3_title: string;
  feature3_desc: string;
  feature4_title: string;
  feature4_desc: string;
  feature5_title: string;
  feature5_desc: string;
  feature6_title: string;
  feature6_desc: string;
  feature7_title: string;
  feature7_desc: string;
  feature8_title: string;
  feature8_desc: string;
  feature9_title: string;
  feature9_desc: string;

  // Architecture
  arch_title: string;
  arch_subtitle: string;
  arch_renderer_title: string;
  arch_renderer_1: string;
  arch_renderer_2: string;
  arch_renderer_3: string;
  arch_renderer_4: string;
  arch_ipc_label: string;
  arch_ipc_bridge: string;
  arch_ipc_protocol: string;
  arch_main_title: string;
  arch_main_1: string;
  arch_main_2: string;
  arch_main_3: string;
  arch_main_4: string;

  // Permission gate
  perm_title: string;
  perm_subtitle: string;
  perm_ask_title: string;
  perm_ask_desc: string;
  perm_ask_1: string;
  perm_ask_2: string;
  perm_ask_3: string;
  perm_plan_title: string;
  perm_plan_desc: string;
  perm_plan_1: string;
  perm_plan_2: string;
  perm_plan_3: string;
  perm_afe_title: string;
  perm_afe_desc: string;
  perm_afe_1: string;
  perm_afe_2: string;
  perm_afe_3: string;
  sandbox_title: string;
  sandbox_subtitle: string;
  sandbox_win: string;
  sandbox_linux: string;
  sandbox_mac: string;
  sandbox_worktree: string;

  // Code Mode
  code_title: string;
  code_subtitle: string;
  code_note: string;
  code_tab_code: string;
  code_tab_out: string;

  // Tools
  tools_title: string;
  tools_subtitle: string;
  tools_search_placeholder: string;
  tools_danger_label: string;
  tools_safe_label: string;
  tools_filter_all: string;
  tools_filter_danger: string;
  tools_filter_safe: string;
  tools_filter_files: string;
  tools_filter_execution: string;
  tools_filter_terminal: string;
  tools_filter_web: string;
  tools_filter_planning: string;
  tools_filter_agent: string;
  tools_filter_background: string;
  tools_filter_session: string;
  tools_filter_capability: string;
  tools_filter_verify: string;
  tools_filter_interaction: string;
  tools_badge_danger: string;
  tools_badge_safe: string;
  tools_view_params: string;
  tools_hide_params: string;
  tools_loading: string;
  tools_error: string;
  tools_empty: string;
  tools_footnote: string;

  // Developer Docs
  dev_title: string;
  dev_description: string;
  dev_check1: string;
  dev_check2: string;
  dev_check3: string;
  dev_link_cli: string;
  dev_step1_comment: string;
  dev_step2_comment: string;
  dev_step3_comment: string;
  dev_step3_line2: string;
  dev_titlebar: string;
  dev_titlebar_type: string;
  dev_copy_button: string;

  // Footer
  footer_brand: string;
  footer_spec_title: string;
  footer_spec_1: string;
  footer_spec_2: string;
  footer_spec_3: string;
  footer_spec_4: string;
  footer_contrib_title: string;
  footer_contrib_1: string;
  footer_contrib_2: string;
  footer_contrib_3: string;
  footer_contrib_4: string;
  footer_support_title: string;
  footer_support_1: string;
  footer_support_2: string;
  footer_support_3: string;
  footer_copyright: string;
  footer_privacy: string;
  footer_license: string;

  // Theme
  theme_dark: string;
  theme_light: string;
}

const zh: Translations = {
  nav_features: '技术特性',
  nav_demo: '智能体演练',
  nav_architecture: '系统架构',
  nav_tools: '工具矩阵',
  nav_download: '免费下载',
  nav_github_label: 'Auraxis GitHub 仓库',

  hero_badge: '原生沙箱隔离 · 统一 ReAct 步进引擎',
  hero_title_line1: '让 AI 智能体在桌面上',
  hero_title_line2: '真正动手写代码',
  hero_description:
    'Auraxis 是基于 Electron 的桌面端 Agentic 编程助手：聊天与智能体共用一套统一步进引擎，63 个内置工具、多智能体调度、Code Mode 工具编排与原生沙箱，让 AI 从「只说不做」变成「可审计地动手」。',
  hero_cta_download: '免费下载',
  hero_cta_docs: '查看文档',
  hero_stat_tools: '63',
  hero_stat_tools_sub: '内置 AI 工具',
  hero_stat_perms: '3',
  hero_stat_perms_sub: '权限模式（ask/plan/afe）',
  hero_stat_tests: '1347',
  hero_stat_tests_sub: '测试用例 · 166 个文件',
  hero_stat_sdk: '2',
  hero_stat_sdk_sub: 'TypeScript & Python SDK',

  download_title: '下载 Auraxis',
  download_subtitle:
    'v2.0.1 · Electron 43 · MIT 开源。首个公开版本发布前，下载链接为占位符。',
  download_current_version: '当前稳定版本',
  download_detected: '检测到:',
  download_loading: '加载中...',
  download_error: '版本信息加载失败，下载链接可能不可用。',
  download_mobile_warning:
    'Auraxis 为桌面端（Mac / Windows / Linux）原生开发工具，请在桌面端浏览器打开以下载。',
  download_requirements_title: '系统要求',
  download_req1: 'Windows 10+ (x64) · macOS 12+ · Linux (x64)',
  download_req2: '内置 Node 24 运行时，无需额外安装',
  download_req3: 'Shell 工具建议使用 Git Bash 或 PowerShell',
  download_changelog_title: 'v2.0.1 更新内容',
  download_placeholder_note: '下载链接将在首个公开版本发布后开放。',
  download_unavailable: '下载链接暂不可用：',
  download_windows_tip: '下载 Windows 版本',
  download_mac_tip: '下载 macOS 版本',
  download_linux_tip: '下载 Linux 版本',

  terminal_title: 'auraxis_react_loop.sh',
  terminal_target: '目标: "为 src/App.tsx 编写单元测试并通过 LSP 校验"',
  terminal_play: '播放',
  terminal_pause: '暂停',
  terminal_skip: '跳过',
  terminal_reset: '重置',
  terminal_replay: '重放',
  terminal_finished: 'ReAct 循环完成。点击「重放」重新演示。',
  terminal_allow: '允许执行',
  terminal_deny: '拒绝',
  terminal_tool_call: '调用工具: ',
  terminal_args: '参数: ',
  terminal_task_done: '任务宣告圆满完成',
  terminal_deny_log:
    '[PermissionGate] ⛔ 用户拒绝了本次高危操作。Agent 将跳过此步骤并重新规划替代方案。',
  terminal_status: 'STEP_ENGINE: v2.0.1',

  features_title: '外置于系统的透明能力',
  features_subtitle:
    '彻底打开大模型与操作系统之间的「黑盒」。Auraxis 不仅发送 prompt，更是一整套可审计的代码执行引擎。',
  feature1_title: '统一 ReAct 步进引擎',
  feature1_desc:
    '聊天与 Agent 共用 step-engine 单一步进循环，停止策略 / 上下文压缩 / 重试均为策略钩子；业务迭代上限 200 次，安全硬上限 500 次，API 失败 3 次指数退避重试。',
  feature2_title: '多智能体调度器',
  feature2_desc:
    '优先级队列（high/normal/low）、默认并发 3、状态机实时广播；三级偏差检测（L1 工具失败 / L2 连续停滞 / L3 Replan 重规划）与 5 分钟计划审批流。',
  feature3_title: 'Code Mode',
  feature3_desc:
    'RunCode 将 TypeScript 程序放入 worker 线程执行，每个 tools.Name() 子调用回穿完整权限管线；并发安全工具最多 8 路重叠、变异工具串行、硬超时可强杀。',
  feature4_title: '三模态权限看门狗',
  feature4_desc:
    'ask（默认）/ plan（计划审批）/ afe（全自动）三模式；规则作用域 once/session/always；只读工具（Read/Grep/Glob）自动放行，危险调用必经拦截审查。',
  feature5_title: '原生沙箱',
  feature5_desc:
    'Windows restricted token / AppContainer、Linux、macOS 四后端命令级隔离，另加 Git worktree 沙箱（.auraxis-sandbox/task-<id>）为并发 Agent 提供隔离分支。',
  feature6_title: 'MCP + 插件系统',
  feature6_desc:
    '完整 MCP 客户端（JSON-RPC over stdio）；渲染层插件提供 commands/tools/hooks/ui 四类扩展点，载入前扫描 8 种危险模式，从源头切断窃密隐患。',
  feature7_title: '持久化项目记忆',
  feature7_desc:
    'LLM 驱动的对话记忆提取（user/feedback/project/reference 四类）按项目隔离；会话统一 append-only JSONL 事件日志 + SQLite 投影缓存 + FTS5 全文搜索。',
  feature8_title: '双 API 格式',
  feature8_desc:
    '默认 DeepSeek（内置 deepseek-v4-flash / v4-pro），同时兼容 OpenAI 与 Anthropic 消息格式；联网搜索支持 DuckDuckGo / Exa / Perplexity / DeepSeek 官方搜索。',
  feature9_title: 'TS & Python 双 SDK',
  feature9_desc:
    'TypeScript SDK（TCP JSON-RPC）与 Python SDK 双端对接，另有 headless CLI（--run / --sdk / --acp / --plugin）与 ACP 协议支持，自动化接入零门槛。',

  arch_title: '透明、干净的双进程交互架构',
  arch_subtitle: '拒绝一切黑盒逻辑。这是 Auraxis 的内部运行方式，让每一条数据流转都在你的控制之中。',
  arch_renderer_title: '渲染进程 (Renderer / React 18)',
  arch_renderer_1: 'Ant Design 5 UI（深色 / 浅色 / 跟随系统）',
  arch_renderer_2: '17 个 Zustand Stores（会话以主进程为权威）',
  arch_renderer_3: 'Markdown + mermaid + KaTeX 渲染',
  arch_renderer_4: '动态插件管理器（载入前安全审计）',
  arch_ipc_label: 'IPC 双向传输',
  arch_ipc_bridge: 'Context Bridge',
  arch_ipc_protocol: 'domain:action 协议',
  arch_main_title: '主进程 (Main / Node.js Env)',
  arch_main_1: '63 个工具执行器 + step-engine / agent-loop',
  arch_main_2: '多智能体调度器与三级偏差检测',
  arch_main_3: '原生沙箱（四后端）+ Worktree 隔离',
  arch_main_4: '统一 JSONL 事件日志 + FTS5 全文搜索',

  perm_title: '三模态权限看门狗',
  perm_subtitle:
    '每一次危险调用都经过权限管线：权限模式 → 沙箱门 → 审批 → 执行，顺序不可绕过。',
  perm_ask_title: 'Ask · 询问模式',
  perm_ask_desc: '默认模式。安全与效率的最佳平衡。',
  perm_ask_1: '只读工具（Read / Grep / Glob）自动放行',
  perm_ask_2: '危险工具弹窗确认，逐次可见',
  perm_ask_3: '规则作用域 once / session / always',
  perm_plan_title: 'Plan · 计划审批',
  perm_plan_desc: '先出计划，再动手。适合大型重构。',
  perm_plan_1: 'LLM 生成结构化任务计划交用户审批',
  perm_plan_2: '计划内工具自动执行，计划外回退 Ask',
  perm_plan_3: '审批等待 5 分钟超时自动取消',
  perm_afe_title: 'AFE · 全自动',
  perm_afe_desc: '无人值守的自动化执行。',
  perm_afe_1: '所有工具自动批准，无弹窗打断',
  perm_afe_2: '安全检查仍然生效（路径/扩展名/URL）',
  perm_afe_3: '适合 CI 流水线与长时间后台任务',

  sandbox_title: '原生沙箱，四后端隔离',
  sandbox_subtitle:
    '命令级隔离 + Git worktree 分支级隔离，并发 Agent 之间互不污染工作区。',
  sandbox_win: 'Windows Restricted Token / AppContainer',
  sandbox_linux: 'Linux 隔离后端',
  sandbox_mac: 'macOS 隔离后端',
  sandbox_worktree: 'Git Worktree 沙箱（.auraxis-sandbox/task-<id>）',

  code_title: 'Code Mode：让模型编排工具',
  code_subtitle:
    'RunCode 把 TypeScript 程序放进 worker 线程，模型用 await tools.Name() 像写代码一样编排工具调用。',
  code_note: '并发安全工具最多 8 路重叠 · 变异工具串行 · 硬超时强杀',
  code_tab_code: 'RunCode · TypeScript 程序',
  code_tab_out: 'worker 线程输出',

  tools_title: '彻底解耦的内置工具矩阵',
  tools_subtitle:
    '智能体在每一步 ReAct 循环中，将根据您的系统权限约束，挑选最合理的工具集进行组装。',
  tools_search_placeholder: '搜索工具名称或描述…',
  tools_danger_label: '危险工具（需审批）',
  tools_safe_label: '安全工具（静默放行）',
  tools_filter_all: '全部',
  tools_filter_danger: '危险',
  tools_filter_safe: '安全',
  tools_filter_files: '文件',
  tools_filter_execution: '执行',
  tools_filter_terminal: '终端',
  tools_filter_web: '联网',
  tools_filter_planning: '规划',
  tools_filter_agent: '智能体',
  tools_filter_background: '后台调度',
  tools_filter_session: '会话检索',
  tools_filter_capability: '能力加载',
  tools_filter_verify: '验证提交',
  tools_filter_interaction: '交互',
  tools_badge_danger: '危险',
  tools_badge_safe: '安全',
  tools_view_params: '查看参数',
  tools_hide_params: '收起 Schema',
  tools_loading: '加载工具数据...',
  tools_error: '工具数据加载失败：',
  tools_empty: '当前筛选条件下没有匹配的工具。',
  tools_footnote: '全部 63 个工具均提供严格的 TypeScript 类型声明与 IPC 安全策略映射。',

  dev_title: '基于 Auraxis 进行二次开发',
  dev_description:
    'Auraxis 主进程与渲染进程全部基于 TypeScript，跨进程类型以 electron/contracts/ 为单一事实源。无论扩展底层工具、外接企业 MCP 服务器，还是修改 17 个 Zustand Store，基础设施都已就绪。',
  dev_check1: 'Vitest 覆盖率门槛：行/语句 86.20% · 分支 79.37% · 函数 84.32%',
  dev_check2: '严格 CSP 内容安全策略与原生沙箱锁保证主进程安全',
  dev_check3: '166 个测试文件 · 1347 个用例 · 13 条 Playwright E2E 链路',
  dev_link_cli: 'headless CLI（--run / --sdk / --acp / --plugin）',
  dev_step1_comment: '// 1. 克隆底层核心仓库',
  dev_step2_comment: '// 2. 创建本地开发环境变量配置',
  dev_step3_comment: '// 3. 安装依赖并启动 Electron 联动调试开发',
  dev_step3_line2: 'npm run electron:dev',
  dev_titlebar: '快速克隆并启动开发',
  dev_titlebar_type: 'TypeScript / Vite',
  dev_copy_button: '复制命令',

  footer_brand: '基于 Electron 构建的桌面端 Agentic 编程助手 — 透明、沙箱隔离、可扩展。',
  footer_spec_title: '核心规范',
  footer_spec_1: '统一 ReAct 步进引擎',
  footer_spec_2: '63 个内置工具',
  footer_spec_3: '原生沙箱（四后端）',
  footer_spec_4: 'Git Worktree 隔离',
  footer_contrib_title: '开源资源',
  footer_contrib_1: '架构文档 (docs/README)',
  footer_contrib_2: '工程规范 (AGENTS.md)',
  footer_contrib_3: 'TypeScript SDK',
  footer_contrib_4: 'Python SDK',
  footer_support_title: '服务支持',
  footer_support_1: '报告安全缺陷',
  footer_support_2: 'GitHub Issues',
  footer_support_3: 'GitHub Discussions',
  footer_copyright: '© 2026 Auraxis Core Contributors. 基于 MIT License 开源.',
  footer_privacy: '隐私条例',
  footer_license: '软件许可证',

  theme_dark: '切换到深色模式',
  theme_light: '切换到浅色模式',
};

const en: Translations = {
  nav_features: 'Features',
  nav_demo: 'Agent Demo',
  nav_architecture: 'Architecture',
  nav_tools: 'Tools',
  nav_download: 'Download',
  nav_github_label: 'Auraxis GitHub Repository',

  hero_badge: 'Native Sandbox · Unified ReAct Step Engine',
  hero_title_line1: 'Your desktop AI agent',
  hero_title_line2: 'that actually ships code',
  hero_description:
    'Auraxis is a desktop Agentic coding assistant built on Electron. One unified ReAct step engine drives chat and agents alike — with 63 built-in tools, multi-agent scheduling, Code Mode orchestration and native sandboxing, AI moves from "talking" to auditable "doing".',
  hero_cta_download: 'Download',
  hero_cta_docs: 'View Docs',
  hero_stat_tools: '63',
  hero_stat_tools_sub: 'Built-in AI tools',
  hero_stat_perms: '3',
  hero_stat_perms_sub: 'Permission modes (ask/plan/afe)',
  hero_stat_tests: '1347',
  hero_stat_tests_sub: 'Test cases · 166 files',
  hero_stat_sdk: '2',
  hero_stat_sdk_sub: 'TypeScript & Python SDKs',

  download_title: 'Download Auraxis',
  download_subtitle:
    'v2.0.1 · Electron 43 · MIT License. Download links are placeholders until the first public release.',
  download_current_version: 'Current Stable Version',
  download_detected: 'Detected:',
  download_loading: 'Loading...',
  download_error: 'Failed to load version info. Download links may be unavailable.',
  download_mobile_warning:
    'Auraxis is a desktop-native tool for Mac / Windows / Linux. Please open this page on a desktop browser to download.',
  download_requirements_title: 'System Requirements',
  download_req1: 'Windows 10+ (x64) · macOS 12+ · Linux (x64)',
  download_req2: 'Node 24 runtime embedded — no extra installs',
  download_req3: 'Git Bash or PowerShell recommended for shell tools',
  download_changelog_title: "What's new in v2.0.1",
  download_placeholder_note: 'Download links will be live after the first public release.',
  download_unavailable: 'Download not available: ',
  download_windows_tip: 'Download for Windows',
  download_mac_tip: 'Download for macOS',
  download_linux_tip: 'Download for Linux',

  terminal_title: 'auraxis_react_loop.sh',
  terminal_target: 'Target: "Write unit tests for src/App.tsx and pass LSP validation"',
  terminal_play: 'Play',
  terminal_pause: 'Pause',
  terminal_skip: 'Skip',
  terminal_reset: 'Reset',
  terminal_replay: 'Replay',
  terminal_finished: 'ReAct loop complete. Click "Replay" to restart.',
  terminal_allow: 'Allow',
  terminal_deny: 'Deny',
  terminal_tool_call: 'Tool: ',
  terminal_args: 'Args: ',
  terminal_task_done: 'Task accomplished',
  terminal_deny_log:
    '[PermissionGate] ⛔ The user denied this dangerous operation. The agent will skip this step and replan an alternative.',
  terminal_status: 'STEP_ENGINE: v2.0.1',

  features_title: 'Transparent Capabilities, Outside the System',
  features_subtitle:
    'Open the "black box" between the LLM and your operating system. Auraxis is not just a prompt sender — it is a fully auditable code execution engine.',
  feature1_title: 'Unified ReAct Step Engine',
  feature1_desc:
    'Chat and agents share one step engine (step-engine.ts) — stop policies, context compression and retries are strategy hooks. 200 iteration business cap, 500 hard cap, 3 exponential-backoff API retries.',
  feature2_title: 'Multi-Agent Scheduler',
  feature2_desc:
    'Priority queue (high/normal/low), max concurrency 3, real-time status broadcast, plus 3-level deviance detection (L1 failure / L2 stall / L3 replan) and a 5-minute plan approval flow.',
  feature3_title: 'Code Mode',
  feature3_desc:
    'RunCode executes TypeScript programs in a worker thread; every tools.Name() sub-call re-enters the full permission pipeline — 8-way overlap for concurrency-safe tools, serial mutation, hard timeout kill.',
  feature4_title: 'Tri-Modal Permission Gate',
  feature4_desc:
    'Ask (default) / Plan (approval) / AFE (auto-execute). Rule scopes once/session/always. Read-only tools (Read/Grep/Glob) pass silently; dangerous calls must pass strict interception review.',
  feature5_title: 'Native Sandbox',
  feature5_desc:
    'Windows restricted token / AppContainer, Linux and macOS backends for command-level isolation, plus Git worktree sandboxes (.auraxis-sandbox/task-<id>) for concurrent agents.',
  feature6_title: 'MCP + Plugin System',
  feature6_desc:
    'Full MCP client over JSON-RPC stdio. Renderer plugins extend commands/tools/hooks/ui — source is scanned for 8 dangerous patterns before loading, cutting off rogue-plugin data theft.',
  feature7_title: 'Persistent Project Memory',
  feature7_desc:
    'LLM-driven memory extraction (user/feedback/project/reference) isolated per project. Sessions use an append-only JSONL event log with SQLite projection cache and FTS5 full-text search.',
  feature8_title: 'Dual API Formats',
  feature8_desc:
    'DeepSeek by default (deepseek-v4-flash / v4-pro), compatible with both OpenAI and Anthropic message formats. Web search across DuckDuckGo / Exa / Perplexity / DeepSeek providers.',
  feature9_title: 'TS & Python SDKs',
  feature9_desc:
    'TypeScript SDK over TCP JSON-RPC plus a Python SDK, along with a headless CLI (--run / --sdk / --acp / --plugin) and ACP protocol support for zero-friction automation.',
  arch_title: 'Transparent Dual-Process Architecture',
  arch_subtitle: 'No black-box logic — this is how Auraxis operates internally, every data flow under your control.',
  arch_renderer_title: 'Renderer Process (React 18)',
  arch_renderer_1: 'Ant Design 5 UI (Dark / Light / System)',
  arch_renderer_2: '17 Zustand Stores (main process is session authority)',
  arch_renderer_3: 'Markdown + mermaid + KaTeX rendering',
  arch_renderer_4: 'Dynamic Plugin Manager (pre-load audit)',
  arch_ipc_label: 'IPC Bidirectional',
  arch_ipc_bridge: 'Context Bridge',
  arch_ipc_protocol: 'domain:action Protocol',
  arch_main_title: 'Main Process (Node.js Env)',
  arch_main_1: '63 Tool Executors + step-engine / agent-loop',
  arch_main_2: 'Multi-Agent Scheduler & Deviance Detection',
  arch_main_3: 'Native Sandbox (4 backends) + Worktree Isolation',
  arch_main_4: 'Unified JSONL Event Log + FTS5 Search',

  perm_title: 'Tri-Modal Permission Gate',
  perm_subtitle:
    'Every dangerous call runs through the pipeline: permission profile → sandbox gate → approval → execution. The order cannot be bypassed.',
  perm_ask_title: 'Ask · Default',
  perm_ask_desc: 'The default mode. Best balance of safety and velocity.',
  perm_ask_1: 'Read-only tools (Read / Grep / Glob) pass silently',
  perm_ask_2: 'Dangerous tools prompt for confirmation, call by call',
  perm_ask_3: 'Rule scopes: once / session / always',
  perm_plan_title: 'Plan · Approval',
  perm_plan_desc: 'Plan first, then act. Built for large refactors.',
  perm_plan_1: 'LLM generates a structured task plan for user approval',
  perm_plan_2: 'Approved plan steps auto-execute; others fall back to Ask',
  perm_plan_3: 'Approval waits time out after 5 minutes',
  perm_afe_title: 'AFE · Auto',
  perm_afe_desc: 'Unattended, automated execution.',
  perm_afe_1: 'All tools auto-approved — no modal interruptions',
  perm_afe_2: 'Safety checks still apply (paths / extensions / URLs)',
  perm_afe_3: 'Ideal for CI pipelines and long-running background tasks',

  sandbox_title: 'Native Sandbox, Four Backends',
  sandbox_subtitle:
    'Command-level isolation plus Git worktree branch isolation — concurrent agents never pollute each other\u2019s workspace.',
  sandbox_win: 'Windows Restricted Token / AppContainer',
  sandbox_linux: 'Linux isolation backend',
  sandbox_mac: 'macOS isolation backend',
  sandbox_worktree: 'Git Worktree sandbox (.auraxis-sandbox/task-<id>)',

  code_title: 'Code Mode: Let the Model Orchestrate Tools',
  code_subtitle:
    'RunCode executes TypeScript programs in a worker thread — the model writes code with await tools.Name() to orchestrate tool calls.',
  code_note: 'Up to 8-way overlap for concurrency-safe tools · serial mutation · hard-timeout kill',
  code_tab_code: 'RunCode · TypeScript program',
  code_tab_out: 'worker thread output',

  tools_title: 'Fully Decoupled Built-in Tool Matrix',
  tools_subtitle:
    'At each ReAct step, the agent assembles the most reasonable toolset under your system permission constraints.',
  tools_search_placeholder: 'Search tools by name or description…',
  tools_danger_label: 'Danger (requires approval)',
  tools_safe_label: 'Safe (silent pass-through)',
  tools_filter_all: 'All',
  tools_filter_danger: 'Danger',
  tools_filter_safe: 'Safe',
  tools_filter_files: 'Files',
  tools_filter_execution: 'Execute',
  tools_filter_terminal: 'Terminal',
  tools_filter_web: 'Web',
  tools_filter_planning: 'Planning',
  tools_filter_agent: 'Agents',
  tools_filter_background: 'Background',
  tools_filter_session: 'Sessions',
  tools_filter_capability: 'Capability',
  tools_filter_verify: 'Verify',
  tools_filter_interaction: 'Interaction',
  tools_badge_danger: 'Danger',
  tools_badge_safe: 'Safe',
  tools_view_params: 'View Schema',
  tools_hide_params: 'Hide Schema',
  tools_loading: 'Loading tools...',
  tools_error: 'Failed to load tools: ',
  tools_empty: 'No tools match the current filter.',
  tools_footnote: 'All 63 tools ship with strict TypeScript definitions and IPC security policy mapping.',

  dev_title: 'Extend Auraxis',
  dev_description:
    'Auraxis is built entirely in TypeScript with a single source of truth for cross-process types (electron/contracts/). Whether you want to extend low-level tools, connect enterprise MCP servers, or modify the 17 Zustand stores, the infrastructure is ready.',
  dev_check1: 'Vitest coverage: lines 86.20% / branches 79.37% / functions 84.32%',
  dev_check2: 'Strict CSP enforcement and native sandbox locks keep the main process secure',
  dev_check3: '166 test files · 1347 cases · 13 Playwright E2E flows',
  dev_link_cli: 'headless CLI (--run / --sdk / --acp / --plugin)',
  dev_step1_comment: '// 1. Clone the core repository',
  dev_step2_comment: '// 2. Create local environment config',
  dev_step3_comment: '// 3. Install dependencies & launch Electron dev mode',
  dev_step3_line2: 'npm run electron:dev',
  dev_titlebar: 'Quick Clone & Start Development',
  dev_titlebar_type: 'TypeScript / Vite',
  dev_copy_button: 'Copy command',

  footer_brand: 'A desktop Agentic coding assistant built on Electron — transparent, sandboxed, extensible.',
  footer_spec_title: 'Core Spec',
  footer_spec_1: 'Unified ReAct Engine',
  footer_spec_2: '63 Built-in Tools',
  footer_spec_3: 'Native Sandbox',
  footer_spec_4: 'Git Worktree Isolation',
  footer_contrib_title: 'Open Source',
  footer_contrib_1: 'Architecture Docs',
  footer_contrib_2: 'Engineering Spec (AGENTS.md)',
  footer_contrib_3: 'TypeScript SDK',
  footer_contrib_4: 'Python SDK',
  footer_support_title: 'Support',
  footer_support_1: 'Report Security Issues',
  footer_support_2: 'GitHub Issues',
  footer_support_3: 'GitHub Discussions',
  footer_copyright: '© 2026 Auraxis Core Contributors. Open source under MIT License.',
  footer_privacy: 'Privacy',
  footer_license: 'License',

  theme_dark: 'Switch to Dark Mode',
  theme_light: 'Switch to Light Mode',
};

export const TRANSLATIONS: Record<Language, Translations> = { zh, en };

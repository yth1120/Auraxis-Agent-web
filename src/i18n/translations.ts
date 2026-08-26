export type Language = 'zh' | 'en';

export interface Translations {
  // Header
  nav_features: string;
  nav_demo: string;
  nav_architecture: string;
  nav_tools: string;
  nav_download: string;
  nav_github_label: string;
  nav_solution: string;
  nav_compare: string;
  nav_safety: string;
  nav_faq: string;
  nav_home: string;
  nav_main: string;

  // Update banner
  banner_label: string;
  banner_text: string;
  banner_link: string;
  banner_close: string;

  // Hero
  hero_badge: string;
  hero_title_line1: string;
  hero_title_line2: string;
  hero_description: string;
  hero_cta_download: string;
  hero_cta_docs: string;
  hero_image_alt: string;
  hero_stat_tools: string;
  hero_stat_tools_sub: string;
  hero_stat_perms: string;
  hero_stat_perms_sub: string;
  hero_stat_sandbox: string;
  hero_stat_sandbox_sub: string;
  hero_stat_agents: string;
  hero_stat_agents_sub: string;
  hero_stat_sdk: string;
  hero_stat_sdk_sub: string;
  hero_stat_engine: string;
  hero_stat_engine_sub: string;

  // Screenshot（界面预览）
  screenshot_caption: string;
  screenshot_note: string;
  screenshot_alt: string;

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
  feature10_title: string;
  feature10_desc: string;
  feature11_title: string;
  feature11_desc: string;
  feature12_title: string;
  feature12_desc: string;

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

  // Safety (安全模型)
  safety_title: string;
  safety_subtitle: string;
  safety_note: string;
  safety_sandbox_levels_title: string;
  safety_sandbox_levels_desc: string;
  safety_profiles_title: string;
  safety_profiles_desc: string;
  safety_pipe_title: string;
  safety_pipe_1: string;
  safety_pipe_2: string;
  safety_pipe_3: string;
  safety_pipe_4: string;
  safety_pipe_5: string;
  safety_pipe_6: string;

  // Research & Systems (技术内核)
  research_title: string;
  research_subtitle: string;
  research_group_papers: string;
  research_group_cache: string;
  research_sources_title: string;
  research_stat_papers: string;
  research_stat_modules: string;
  research_stat_cache: string;
  research_note_original: string;
  research_status_landed: string;
  research_eywa_title: string;
  research_eywa_desc: string;
  research_map_title: string;
  research_map_desc: string;
  research_agora_title: string;
  research_agora_desc: string;
  research_swe_title: string;
  research_swe_desc: string;
  research_oversight_title: string;
  research_oversight_desc: string;
  research_autotool_title: string;
  research_autotool_desc: string;
  research_gate_title: string;
  research_gate_desc: string;
  research_radix_title: string;
  research_radix_desc: string;
  research_promptcache_title: string;
  research_promptcache_desc: string;
  research_cacheaware_title: string;
  research_cacheaware_desc: string;
  research_dedup_title: string;
  research_dedup_desc: string;

  // Ecosystem (开发者生态)
  eco_title: string;
  eco_subtitle: string;
  eco_cli_title: string;
  eco_cli_desc: string;
  eco_ts_title: string;
  eco_ts_desc: string;
  eco_py_title: string;
  eco_py_desc: string;
  eco_plugin_title: string;
  eco_plugin_desc: string;

  // Problem (叙事区)
  problem_title: string;
  problem_subtitle: string;
  problem1_title: string;
  problem1_desc: string;
  problem2_title: string;
  problem2_desc: string;
  problem3_title: string;
  problem3_desc: string;

  // Solution (叙事区)
  solution_title: string;
  solution_subtitle: string;
  pillar2_title: string;
  pillar2_desc: string;
  solution_more_label: string;
  ui_details: string;

  // Demo (叙事区)
  demo_title: string;
  demo_subtitle: string;
  demo_video_caption: string;
  demo_video_aria: string;
  flow1_title: string;
  flow1_desc: string;
  flow2_title: string;
  flow2_desc: string;
  flow3_title: string;
  flow3_desc: string;
  flow4_title: string;
  flow4_desc: string;

  // Compare (叙事区)
  compare_title: string;
  compare_subtitle: string;
  compare_other: string;
  compare_auraxis: string;
  compare_row1_label: string;
  compare_row1_other: string;
  compare_row1_auraxis: string;
  compare_row2_label: string;
  compare_row2_other: string;
  compare_row2_auraxis: string;
  compare_row3_label: string;
  compare_row3_other: string;
  compare_row3_auraxis: string;
  compare_row4_label: string;
  compare_row4_other: string;
  compare_row4_auraxis: string;
  compare_modes_label: string;

  // FAQ
  faq_title: string;
  faq_subtitle: string;
  faq_q1: string;
  faq_a1: string;
  faq_q2: string;
  faq_a2: string;
  faq_q3: string;
  faq_a3: string;
  faq_q4: string;
  faq_a4: string;
  faq_q5: string;
  faq_a5: string;
  faq_q6: string;
  faq_a6: string;
  faq_q7: string;
  faq_a7: string;
  faq_q8: string;
  faq_a8: string;
  faq_q9: string;
  faq_a9: string;
  faq_q10: string;
  faq_a10: string;
  faq_q11: string;
  faq_a11: string;
  faq_q12: string;
  faq_a12: string;

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
  tools_filter_documents: string;
  tools_filter_connectors: string;
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
  tools_legend: string;

  // Footer
  footer_nav: string;
  footer_support: string;

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
  dev_copy_title: string;

  // Footer
  footer_brand: string;
  footer_cta_kicker: string;
  footer_cta_title: string;
  footer_cta_desc: string;
  footer_cta_primary: string;
  footer_cta_secondary: string;
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
  nav_demo: '演示',
  nav_architecture: '系统架构',
  nav_tools: '工具矩阵',
  nav_download: '下载',
  nav_github_label: 'Auraxis Agent GitHub 仓库',
  nav_solution: '功能',
  nav_compare: '对比',
  nav_safety: '安全模型',
  nav_faq: '常见问题',
  nav_home: 'Auraxis Agent 首页',
  nav_main: '主导航',

  banner_label: '重点更新横幅',
  banner_text:
    '重点更新：多模态模型 · DeepSeek Harness MCP · 飞书 / Lark MCP · 技术栈与架构升级',
  banner_link: '查看详情',
  banner_close: '关闭横幅',

  hero_badge: 'MIT 开源 · v3.2.0 · 个人开发',
  hero_title_line1: 'Auraxis Agent',
  hero_title_line2: '桌面端智能体工作台',
  hero_description:
    'Auraxis Agent 是一个基于 Electron 的桌面端智能体工作台（编码 / 文档 / 自动化），个人开发、MIT 开源。它提供 Chat / Work / Code 三模式、统一的 ReAct 步进引擎、71 个内置工具、多 Agent 调度、文档生成与云连接器，以及原生沙箱隔离。',
  hero_cta_download: '下载',
  hero_cta_docs: '查看演示',
  hero_image_alt: 'Auraxis Agent 桌面端界面截图',
  hero_stat_tools: '71',
  hero_stat_tools_sub: '内置 AI 工具',
  hero_stat_perms: '3',
  hero_stat_perms_sub: '审批策略（ask/plan/auto）',
  hero_stat_sandbox: '4',
  hero_stat_sandbox_sub: '原生沙箱后端',
  hero_stat_agents: '3',
  hero_stat_agents_sub: '内置 Agent 类型',
  hero_stat_sdk: '2',
  hero_stat_sdk_sub: 'TS / Python SDK',
  hero_stat_engine: '1',
  hero_stat_engine_sub: '统一步进引擎',

  screenshot_caption: 'Auraxis Agent — 桌面端界面预览',
  screenshot_note: '界面截图来自项目 README，实际效果以最新版本为准。',
  screenshot_alt: 'Auraxis Agent 桌面端界面预览',

  download_title: '下载 Auraxis Agent',
  download_subtitle:
    'v3.2.0 · Electron 44 · MIT 开源。安装包托管在 GitHub Releases，点击下方按钮即可下载。',
  download_current_version: '当前稳定版本',
  download_detected: '检测到:',
  download_loading: '加载中...',
  download_error: '版本信息加载失败，下载链接可能不可用。',
  download_mobile_warning:
    'Auraxis Agent 为桌面端（Mac / Windows / Linux）原生开发工具，请在桌面端浏览器打开以下载。',
  download_requirements_title: '系统要求',
  download_req1: 'Windows 10+ (x64) · macOS 12+ · Linux (x64)',
  download_req2: '内置 Node 24 运行时，无需额外安装',
  download_req3: 'Shell 工具建议使用 Git Bash 或 PowerShell',
  download_changelog_title: 'v3.2.0 更新内容',
  download_placeholder_note: '下载遇到问题？前往 GitHub Releases 获取全部安装包（含 Apple Silicon arm64）。',
  download_unavailable: '下载链接暂不可用：',
  download_windows_tip: '下载 Windows 版本',
  download_mac_tip: '下载 macOS 版本',
  download_linux_tip: '下载 Linux 版本',

  features_title: '外置于系统的透明能力',
  features_subtitle:
    'Auraxis Agent 不只是发送 prompt，更是一整套可审计的代码执行引擎：工具调用、权限决策、文件改动全部记录在统一事件日志中。',
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
    'ask（默认）/ plan（计划审批）/ auto（全自动）三种审批策略；规则作用域 once/session/always；只读工具（Read/Grep/Glob）自动放行，危险调用必经拦截审查。',
  feature5_title: '原生沙箱',
  feature5_desc:
    'Windows restricted token / AppContainer、Linux、macOS 四后端命令级隔离，另加 Git worktree 沙箱（.auraxis-sandbox/task-<id>）为并发 Agent 提供隔离分支。',
  feature6_title: 'MCP + 插件系统',
  feature6_desc:
    'MCP 客户端（JSON-RPC over stdio）；渲染层插件提供 commands/tools/hooks/ui 四类扩展点，载入前扫描危险模式并需要用户确认。',
  feature7_title: '持久化项目记忆',
  feature7_desc:
    'Eywa 溯源记忆（M1–M4）：证据先于信念、不可变证据、规则信号与硬锚点校验，零 LLM 确定性读取路径，支持信念审计与擦除；会话统一 append-only JSONL 事件日志 + SQLite 投影缓存 + FTS5 全文搜索。',
  feature8_title: 'DeepSeek 官方深度能力',
  feature8_desc:
    '默认 DeepSeek（内置 deepseek-v4-flash / v4-pro），支持 reasoning effort（low/high/max）、strict tools、FIM 补全、计划 JSON 模式、最大 384K 输出与流式缓存命中显示；同时兼容 OpenAI / Anthropic 消息格式。',
  feature9_title: 'TS & Python 双 SDK',
  feature9_desc:
    'TypeScript SDK（TCP JSON-RPC）与 Python SDK，另有 headless CLI（--run / --sdk / --acp / --plugin）与 ACP 协议支持，可用于自动化集成。',
  feature10_title: 'Chat / Work / Code 三模式',
  feature10_desc:
    '三种产品形态共用同一套 ReAct 步进引擎，模式状态互不污染：Chat 会话时间线、Work 文档协作（代码只读硬边界 + 执行自主档位）、Code Mode worker 线程工具编排。',
  feature11_title: '文档生成与云连接器',
  feature11_desc:
    'ReadDocument / WriteDocument 读写 Word、Excel、PPT、PDF（CJK 字体自动嵌入）；Slack / Google Drive / Notion 连接器在设置中配置，令牌经 safeStorage 加密保存。',
  feature12_title: '本地账户与分层设置',
  feature12_desc:
    '本地优先账户（scrypt 密码哈希）、分层 Instructions 面板（全局 → 项目根 → 嵌套目录 AGENTS.md）、连接器 / MCP / 插件 / 权限档案管理，以及内嵌真实测试覆盖率报告。',

  arch_title: '双进程架构',
  arch_subtitle:
    'Auraxis Agent 的内部结构：主进程负责工具执行与调度，渲染进程负责界面，二者通过 IPC 通信。',
  arch_renderer_title: '渲染进程 (Renderer / React 18)',
  arch_renderer_1: 'Ant Design 5 UI（深色 / 浅色 / 跟随系统）',
  arch_renderer_2: '18 个 Zustand Stores（会话以主进程为权威）',
  arch_renderer_3: 'Markdown + mermaid + KaTeX 渲染',
  arch_renderer_4: '动态插件管理器（载入前安全审计）',
  arch_ipc_label: 'IPC 双向传输',
  arch_ipc_bridge: 'Context Bridge',
  arch_ipc_protocol: 'domain:action 协议',
  arch_main_title: '主进程 (Main / Node.js Env)',
  arch_main_1: '71 个工具执行器 + step-engine / agent-loop',
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
  perm_plan_2: '计划获批准后仅执行已批准步骤；计划被拒绝则回退 Ask',
  perm_plan_3: '审批等待 5 分钟超时，自动回退 Ask',
  perm_afe_title: 'Auto · 全自动',
  perm_afe_desc: '无人值守的自动化执行。',
  perm_afe_1: '所有工具自动批准，无弹窗打断',
  perm_afe_2: '工作区卫生检查（扩展名 / read-before-write / URL）仍然生效',
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

  safety_title: '安全模型：权限与沙箱',
  safety_subtitle:
    '每次危险调用都按固定顺序经过权限模式、沙箱门、审批与执行；路径边界、read-before-write、撤销快照与冲突检测作为兜底，覆盖工具调用的全生命周期。',
  safety_note:
    '所有工具调用统一经过「权限模式 → 沙箱门 → 审批 → 执行」管线，并受路径边界、read-before-write、撤销快照与冲突检测约束。',
  safety_sandbox_levels_title: '沙箱权限档位',
  safety_sandbox_levels_desc:
    'read（只读）/ workspace-write（工作区写入，默认）/ full（完全访问）',
  safety_profiles_title: '内置权限档案',
  safety_profiles_desc:
    '标准（工作区写入 + 逐次确认）/ 只读（read + 逐次确认）/ 沙箱（工作区写入、网络拒绝、auto）；另有 ask / auto / full / readonly 四个运行时预设',
  safety_pipe_title: '工具调用安全管线',
  safety_pipe_1: 'read-before-write 硬门：写入已有文件前必须先 Read 或携带版本号',
  safety_pipe_2: '路径边界与扩展名白名单，文件工具只允许在项目边界内操作',
  safety_pipe_3: '原生沙箱四后端：Windows restricted token / AppContainer、Linux、macOS',
  safety_pipe_4: 'Git Worktree 沙箱：并发任务在 .auraxis-sandbox/task-<id> 隔离分支执行',
  safety_pipe_5: '写操作前自动生成撤销快照（.auraxis-snapshots/），可随时回退',
  safety_pipe_6: '多 Agent 文件锁与冲突检测，防止并发写入互相覆盖',

  research_title: '技术内核 · 论文驱动开发',
  research_subtitle:
    'Auraxis 以 11 篇论文的核心思想驱动工程落地：7 个研究模块 + 4 项缓存对齐技术，全部为原创客户端实现。',
  research_group_papers: '研究驱动模块',
  research_group_cache: '缓存对齐套件',
  research_sources_title: '全部论文地址（11 篇）',
  research_stat_papers: '论文',
  research_stat_modules: '研究模块',
  research_stat_cache: '缓存技术',
  research_note_original:
    '11 项实现均为原创代码：借鉴论文算法思想，未复制论文代码；缓存技术为 DeepSeek 官方前缀缓存的客户端适配。',
  research_status_landed: '已落地',
  research_eywa_title: 'Eywa · 溯源记忆',
  research_eywa_desc:
    '证据先于信念：不可变证据、规则信号与硬锚点校验，零 LLM 确定性读取路径，支持信念审计与擦除。',
  research_map_title: 'MAP-Graph · 共享记忆授权',
  research_map_desc:
    '多智能体共享记忆的授权、来源信任与风险门控：高风险 Write / Edit / Bash 需要更高证据标准。',
  research_agora_title: 'AGORA · 步级压缩',
  research_agora_desc:
    '免推理的整步保留 / 丢弃，绝不把工具调用与结果拆开，保护 Agent 的动作语法。',
  research_swe_title: 'SWE-Touch · 漂移检测',
  research_swe_desc:
    '用户或外部进程触碰代码后，下一轮迭代前检测工作区漂移，并定向验证受影响区域。',
  research_oversight_title: 'Oversight · 审批疲劳防护',
  research_oversight_desc:
    '把“是否升级给人审”当作资源分配问题：20 次决策滑动窗口 + 疲劳分数，输出 escalate / auto / balanced 建议。',
  research_autotool_title: 'AutoTool · 工具惯性图',
  research_autotool_desc:
    '从历史工具轨迹构建有向图并预测下一个工具，观测层 + 预测层，可降低约 30% 推理成本。',
  research_gate_title: 'Verifier-as-Gatekeeper · 技能准入',
  research_gate_desc:
    '技能入库前做结构、行为与语义三重校验与边际增益子集选择，阻止不可逆的技能污染。',
  research_radix_title: 'RadixAttention · 规范历史重放',
  research_radix_desc:
    '每轮把实际发送的完整消息数组写入 llm_context_v1，下一轮回放相同前缀，保持字节级稳定。',
  research_promptcache_title: 'Prompt Cache · 稳定块组织',
  research_promptcache_desc:
    '系统提示、工具定义、AGENTS.md 等静态块原位替换；升级或切换项目时才重新组装。',
  research_cacheaware_title: 'Cache-Aware · 动态内容尾置',
  research_cacheaware_desc:
    '跨会话记忆不再前插到头部，而是作为独立字段放到当前用户消息之前或快照尾部，避免破坏前缀缓存。',
  research_dedup_title: 'Byte-Exact · 字节精确去重',
  research_dedup_desc:
    '回放时若新记忆块与快照末尾字节相同则跳过追加，防止同一检索内容逐轮累积。',

  eco_title: '扩展与集成',
  eco_subtitle: 'Auraxis Agent 提供 MCP 协议、CLI、SDK 与插件机制，方便脚本和外部程序接入。',
  eco_cli_title: 'Headless CLI',
  eco_cli_desc:
    'npm run cli -- --run "任务" 直接跑完整 ReAct 循环，模型、权限、沙箱与 JSON 输出均可配置。',
  eco_ts_title: 'TypeScript SDK',
  eco_ts_desc:
    'packages/auraxis-sdk 通过 TCP JSON-RPC 与桌面端通信，可嵌入自己的工具链。',
  eco_py_title: 'Python SDK',
  eco_py_desc:
    'python/auraxis_sdk 提供同构 API，Python 自动化脚本可直接驱动会话与工具。',
  eco_plugin_title: '插件系统',
  eco_plugin_desc:
    'commands / tools / hooks / ui 四类扩展点，载入前做危险模式扫描与能力确认。',

  problem_title: '今天的 AI 助手，为什么还不够用',
  problem_subtitle: '三个每天都在发生的痛点，Auraxis 逐个解决。',
  problem1_title: '只说不做',
  problem1_desc:
    '聊天式 AI 只输出建议，改哪一行、跑什么命令全靠你手动执行。回复很长，代码没动。',
  problem2_title: '黑盒不可审计',
  problem2_desc:
    '工具调用、权限决策、文件改动全在云端或未知逻辑里发生，出了问题无从追溯。',
  problem3_title: '环境被污染',
  problem3_desc:
    '多个任务并行时互相踩踏工作区，临时文件、未完成改动散落一地，主分支随时可能被弄脏。',

  solution_title: '核心能力',
  solution_subtitle:
    'Auraxis Agent 把聊天与 Agent 执行收敛到同一套 ReAct 步进引擎，工具、调度与沙箱都在本地运行。',
  ui_details:
    '界面与工程细节：终端抽屉 · PTY/SSH 会话 · 后台与定时任务 · 图片输入 · 撤销快照 · 冲突检测 · Work 模式任务看板 · 本地账户 · 中英双语界面 · 深浅主题（Windows 11 Acrylic）· 可选遥测',
  pillar2_title: '71 个内置工具',
  pillar2_desc:
    '从文件读写、终端与 Web 搜索，到文档生成、云连接器、后台调度、会话检索与子 Agent 编排，全部 71 个工具经同一条权限管线执行，15 个危险工具默认弹窗确认。',
  solution_more_label: '更多能力',

  demo_title: 'ReAct 循环演示',
  demo_subtitle:
    '一段真实录屏，展示从用户输入到 <FINAL_ANSWER> 的 ReAct 循环：统一引擎驱动，权限看门狗把关，Code Mode 编排工具。',
  demo_video_caption: '真实录屏演示',
  demo_video_aria: 'Auraxis Agent ReAct 循环真实录屏',
  flow1_title: '理解任务',
  flow1_desc: '解析需求、读取项目上下文，注入相关记忆与项目指令。',
  flow2_title: '生成计划',
  flow2_desc: 'LLM 产出结构化 TaskPlan；plan 模式下先交用户审批再执行。',
  flow3_title: '执行工具',
  flow3_desc: '71 个工具经「权限模式 → 沙箱门 → 审批 → 执行」管线逐一落地。',
  flow4_title: '验证交付',
  flow4_desc: 'LSP / ReviewArtifact 验证通过后输出 <FINAL_ANSWER>，回合结束。',

  compare_title: 'Auraxis vs 普通 AI 助手',
  compare_subtitle: '同样是大模型驱动，差别在是否真正掌控执行链路。',
  compare_other: '普通 AI 助手',
  compare_auraxis: 'Auraxis Agent',
  compare_row1_label: '执行方式',
  compare_row1_other: '只给建议，不碰你的代码',
  compare_row1_auraxis: '本地驱动 Bash / LSP / Git 真实执行',
  compare_row2_label: '可审计性',
  compare_row2_other: '黑盒输出，无法追溯',
  compare_row2_auraxis: '统一事件日志，每一步可回放',
  compare_row3_label: '安全隔离',
  compare_row3_other: '直接操作主工作区',
  compare_row3_auraxis: '三模式权限 + 原生沙箱 + Worktree 隔离',
  compare_row4_label: '扩展能力',
  compare_row4_other: '工具稀少、生态封闭',
  compare_row4_auraxis: '71 工具 + MCP + 插件 + 双 SDK',
  compare_modes_label: '三种权限模式，按场景切换',

  faq_title: '常见问题',
  faq_subtitle: '关于模型、权限、沙箱与数据的一些说明。',
  faq_q1: '需要 API Key 吗？支持哪些模型？',
  faq_a1:
    '需要。Auraxis Agent 默认使用 DeepSeek API（内置 deepseek-v4-flash / v4-pro），同时兼容 OpenAI 与 Anthropic 消息格式；也可以在设置中添加自定义模型，或通过环境变量配置。',
  faq_q2: '与 IDE 插件或纯 CLI 工具有什么区别？',
  faq_a2:
    'Auraxis Agent 是独立的桌面客户端，把聊天与多 Agent 收敛到同一套可审计的 ReAct 引擎，工具、调度、沙箱都在本地。同时它也提供 headless CLI 与 SDK，方便自动化集成。',
  faq_q3: '三种权限模式应该怎么选？',
  faq_a3:
    '默认 ask 适合日常：危险工具逐个弹窗确认；plan 适合大型重构：先审批计划，批准后仅执行已批准步骤；auto（原 afe 拼写）适合 CI 与无人值守任务：全自动放行，工具仍走统一执行管线。另有四个运行时预设：ask / auto / full / readonly，组合审批策略、沙箱档位与卫生检查。',
  faq_q4: '沙箱隔离到什么程度？',
  faq_a4:
    '命令级隔离覆盖 Windows restricted token / AppContainer、Linux 与 macOS 四类后端；文件类工具受路径边界与扩展名白名单约束；Git 仓库中的并发任务还可以进入独立 worktree 分支。',
  faq_q5: '我的数据存在哪里？',
  faq_a5:
    '全部本地。会话为 append-only JSONL 事件日志，检索走 SQLite 投影缓存与 FTS5；长期记忆升级为 Eywa 溯源记忆（证据先于信念，零 LLM 读取路径），按项目隔离；API Key 与云连接器令牌使用系统 safeStorage 加密保存。',
  faq_q6: '这个项目开源吗？',
  faq_a6:
    '是的，MIT License。源码、架构文档与两份 SDK 都在 GitHub（yth1120/Auraxis-Agent）上。',
  faq_q7: '需要自己安装 Node.js 吗？',
  faq_a7:
    '不需要。安装包内置 Node 24 运行时，开箱即用；Shell 工具建议使用 Git Bash 或 PowerShell。',
  faq_q8: '这个项目成熟吗？',
  faq_a8:
    '不成熟。这是个人开发项目，处于持续迭代阶段，可能存在缺陷或缺失功能，请谨慎用于重要工作；发现问题欢迎在 GitHub 提交 Issue。',
  faq_q9: 'ask/plan/auto 和只读/工作区写入/完全访问是什么关系？',
  faq_a9:
    '它们是两层：ask/plan/auto 是审批策略，决定危险工具是否需要确认（默认 ask；afe 为历史拼写，已归一为 auto）；read/workspace-write/full 是沙箱权限档位，决定 Agent 能访问项目哪些范围（默认 workspace-write）。另有四个运行时预设（ask / auto / full / readonly）与内置权限档案（标准/只读/沙箱）组合这两层。',
  faq_q10: 'Auraxis Agent 会上传我的数据吗？',
  faq_a10:
    '默认不会。会话、记忆与设置都保存在本地；遥测默认关闭，只有手动开启后才会以严格白名单脱敏的方式上报。API Key 使用系统 safeStorage 加密保存。',
  faq_q11: 'Chat / Work / Code 三种模式有什么区别？',
  faq_a11:
    '三种模式共用同一套 ReAct 步进引擎，但互不污染状态：Chat 是日常对话与代码问答；Work 面向文档协作，默认先澄清需求，只允许写文档与非代码文件，代码写入会被硬拒绝；Code 模式用 RunCode 在 worker 线程编排工具，适合自动化编码任务。',
  faq_q12: '文档生成和云连接器需要额外配置吗？',
  faq_a12:
    '文档工具（Word / Excel / PPT / PDF）开箱即用，无需配置。Slack / Google Drive / Notion 需要在设置 → 连接器中填入令牌，令牌使用系统 safeStorage 加密保存；对应工具会在每次调用时提示外部副作用。',

  tools_title: '内置工具矩阵',
  tools_subtitle: '智能体在每一步 ReAct 循环中，在权限约束下调用这些工具。',
  tools_search_placeholder: '搜索工具名称或描述…',
  tools_danger_label: '危险工具（需审批）',
  tools_safe_label: '安全工具（静默放行）',
  tools_filter_all: '全部',
  tools_filter_danger: '危险',
  tools_filter_safe: '安全',
  tools_filter_files: '文件',
  tools_filter_documents: '文档',
  tools_filter_connectors: '连接器',
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
  tools_footnote: '工具定义与桌面端 electron/tool-defs.ts 保持同步。',
  tools_legend: '工具安全等级图例',

  footer_nav: '页脚导航',
  footer_support: '支持与反馈',

  dev_title: '本地开发',
  dev_description:
    'Auraxis Agent 的源码在 GitHub 上，主进程与渲染进程均为 TypeScript。下面的命令可以克隆项目并在本地启动开发。',
  dev_check1: 'Vitest 覆盖率：行/语句 85.42% · 分支 79.08% · 函数 86.63%（门槛 80 / 70 / 80）',
  dev_check2: '生产环境启用严格 CSP，主进程与渲染进程隔离',
  dev_check3: '237 个测试文件 · 1740 个用例 · 15 条 Playwright E2E 链路',
  dev_link_cli: 'headless CLI（--run / --sdk / --acp / --plugin）',
  dev_step1_comment: '// 1. 克隆底层核心仓库',
  dev_step2_comment: '// 2. 创建本地开发环境变量配置',
  dev_step3_comment: '// 3. 安装依赖并启动 Electron 联动调试开发',
  dev_step3_line2: 'npm run electron:dev',
  dev_titlebar: '快速克隆并启动开发',
  dev_titlebar_type: 'TypeScript / Vite',
  dev_copy_button: '复制命令',
  dev_copy_title: '点击复制',

  footer_brand: 'Auraxis Agent —— 一个基于 Electron 的桌面端智能体工作台（编码 / 文档 / 自动化），MIT 开源，个人开发中。',
  footer_cta_kicker: 'Open Source · 共建',
  footer_cta_title: '诚邀各大技术大牛参与修复与共建',
  footer_cta_desc:
    'Auraxis 是个人 MIT 开源项目，正在持续迭代。欢迎提交 Issue、PR、性能 / 安全 / 架构建议，帮助我们一起把工程细节打磨得更稳。',
  footer_cta_primary: '提交 Issue / PR',
  footer_cta_secondary: '访问 GitHub 仓库',
  footer_spec_title: '核心规范',
  footer_spec_1: '统一 ReAct 步进引擎',
  footer_spec_2: '71 个内置工具',
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
  footer_support_3: '更新日志',
  footer_copyright: '© 2026 Auraxis Core Contributors. 基于 MIT License 开源.',
  footer_privacy: '隐私条例',
  footer_license: '软件许可证',

  theme_dark: '切换到深色模式',
  theme_light: '切换到浅色模式',
};

const en: Translations = {
  nav_features: 'Features',
  nav_demo: 'Demo',
  nav_architecture: 'Architecture',
  nav_tools: 'Tools',
  nav_download: 'Download',
  nav_github_label: 'Auraxis Agent GitHub Repository',
  nav_solution: 'Features',
  nav_compare: 'Compare',
  nav_safety: 'Security',
  nav_faq: 'FAQ',
  nav_home: 'Auraxis Agent Home',
  nav_main: 'Main navigation',

  banner_label: 'Update banner',
  banner_text:
    'Highlights: multimodal model · DeepSeek Harness MCP · Feishu/Lark MCP · stack & architecture upgrades',
  banner_link: 'View details',
  banner_close: 'Close banner',

  hero_badge: 'MIT License · v3.2.0 · Personal project',
  hero_title_line1: 'Auraxis Agent',
  hero_title_line2: 'Agentic Workbench',
  hero_description:
    'Auraxis Agent is a desktop agentic workbench built on Electron — a personal, MIT-licensed project. It provides Chat / Work / Code modes, a unified ReAct step engine, 71 built-in tools, multi-agent scheduling, document generation, cloud connectors and native sandbox isolation.',
  hero_cta_download: 'Download',
  hero_cta_docs: 'View Demo',
  hero_image_alt: 'Auraxis Agent desktop UI screenshot',
  hero_stat_tools: '71',
  hero_stat_tools_sub: 'Built-in AI tools',
  hero_stat_perms: '3',
  hero_stat_perms_sub: 'Approval policies (ask/plan/auto)',
  hero_stat_sandbox: '4',
  hero_stat_sandbox_sub: 'Native sandbox backends',
  hero_stat_agents: '3',
  hero_stat_agents_sub: 'Built-in agent types',
  hero_stat_sdk: '2',
  hero_stat_sdk_sub: 'TS / Python SDKs',
  hero_stat_engine: '1',
  hero_stat_engine_sub: 'Unified step engine',

  screenshot_caption: 'Auraxis Agent — Desktop UI Preview',
  screenshot_note: 'Screenshot from the project README; the actual UI may differ in the latest version.',
  screenshot_alt: 'Auraxis Agent desktop UI preview',

  download_title: 'Download Auraxis Agent',
  download_subtitle:
    'v3.2.0 · Electron 44 · MIT License. Installers are hosted on GitHub Releases — pick your platform below.',
  download_current_version: 'Current Stable Version',
  download_detected: 'Detected:',
  download_loading: 'Loading...',
  download_error: 'Failed to load version info. Download links may be unavailable.',
  download_mobile_warning:
    'Auraxis Agent is a desktop-native tool for Mac / Windows / Linux. Please open this page on a desktop browser to download.',
  download_requirements_title: 'System Requirements',
  download_req1: 'Windows 10+ (x64) · macOS 12+ · Linux (x64)',
  download_req2: 'Node 24 runtime embedded — no extra installs',
  download_req3: 'Git Bash or PowerShell recommended for shell tools',
  download_changelog_title: "What's new in v3.2.0",
  download_placeholder_note: 'Having trouble? Visit GitHub Releases for every installer, including the Apple Silicon arm64 DMG.',
  download_unavailable: 'Download not available: ',
  download_windows_tip: 'Download for Windows',
  download_mac_tip: 'Download for macOS',
  download_linux_tip: 'Download for Linux',

  features_title: 'Transparent Capabilities, Outside the System',
  features_subtitle:
    'Auraxis Agent is not just a prompt sender — it is a fully auditable code execution engine: every tool call, permission decision and file change lands in the unified event log.',
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
    'Ask (default) / Plan (approval) / Auto (fully automatic) approval policies. Rule scopes once/session/always. Read-only tools (Read/Grep/Glob) pass silently; dangerous calls must pass strict interception review.',
  feature5_title: 'Native Sandbox',
  feature5_desc:
    'Windows restricted token / AppContainer, Linux and macOS backends for command-level isolation, plus Git worktree sandboxes (.auraxis-sandbox/task-<id>) for concurrent agents.',
  feature6_title: 'MCP + Plugin System',
  feature6_desc:
    'MCP client over JSON-RPC stdio. Renderer plugins extend commands/tools/hooks/ui — source is scanned for dangerous patterns and requires user confirmation before loading.',
  feature7_title: 'Persistent Project Memory',
  feature7_desc:
    'Eywa provenance memory (M1–M4): evidence before belief, immutable evidence, rule-based signals and hard-anchor validation, with a deterministic zero-LLM read path and belief audit/erasure. Sessions use an append-only JSONL event log with SQLite projection cache and FTS5 full-text search.',
  feature8_title: 'DeepSeek Native Capabilities',
  feature8_desc:
    'DeepSeek by default (deepseek-v4-flash / v4-pro) with reasoning effort (low/high/max), strict tools, FIM completion, plan-generation JSON mode, up to 384K max output tokens and streaming cache-hit display; OpenAI- and Anthropic-format endpoints are also supported.',
  feature9_title: 'TS & Python SDKs',
  feature9_desc:
    'TypeScript SDK over TCP JSON-RPC plus a Python SDK, along with a headless CLI (--run / --sdk / --acp / --plugin) and ACP protocol support for automation.',
  feature10_title: 'Chat / Work / Code Modes',
  feature10_desc:
    'Three product forms share one ReAct step engine without state pollution: Chat session timeline, Work document collaboration (read-only code boundary + execution autonomy tiers) and Code Mode worker-thread tool orchestration.',
  feature11_title: 'Documents & Cloud Connectors',
  feature11_desc:
    'ReadDocument / WriteDocument handle Word, Excel, PowerPoint and PDF (with automatic CJK font embedding); Slack / Google Drive / Notion connectors are configured in Settings with tokens encrypted via safeStorage.',
  feature12_title: 'Local Account & Layered Settings',
  feature12_desc:
    'Local-first account with scrypt password hashing, layered Instructions (global → project root → nested AGENTS.md), connector / MCP / plugin / permission-profile management, and a live test-coverage report in Settings.',
  arch_title: 'Dual-Process Architecture',
  arch_subtitle:
    'How Auraxis Agent is structured: the main process handles tool execution and scheduling, the renderer process handles the UI, and they communicate over IPC.',
  arch_renderer_title: 'Renderer Process (React 18)',
  arch_renderer_1: 'Ant Design 5 UI (Dark / Light / System)',
  arch_renderer_2: '18 Zustand Stores (main process is session authority)',
  arch_renderer_3: 'Markdown + mermaid + KaTeX rendering',
  arch_renderer_4: 'Dynamic Plugin Manager (pre-load audit)',
  arch_ipc_label: 'IPC Bidirectional',
  arch_ipc_bridge: 'Context Bridge',
  arch_ipc_protocol: 'domain:action Protocol',
  arch_main_title: 'Main Process (Node.js Env)',
  arch_main_1: '71 Tool Executors + step-engine / agent-loop',
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
  perm_plan_2: 'After approval, only approved plan steps execute; a rejected plan falls back to Ask',
  perm_plan_3: 'Approval waits time out after 5 minutes and falls back to Ask',
  perm_afe_title: 'Auto · Full Automation',
  perm_afe_desc: 'Unattended, automated execution.',
  perm_afe_1: 'All tools auto-approved — no modal interruptions',
  perm_afe_2: 'Workspace hygiene checks (extensions / read-before-write / URLs) still apply',
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

  safety_title: 'Security Model: Permissions & Sandbox',
  safety_subtitle:
    'Every dangerous call goes through permission profile → sandbox gate → approval → execution in a fixed order. Path boundaries, read-before-write, undo snapshots and conflict detection back it up across the whole tool-call lifecycle.',
  safety_note:
    'All tool calls go through permission profile → sandbox gate → approval → execution, constrained by path boundaries, read-before-write, undo snapshots and conflict detection.',
  safety_sandbox_levels_title: 'Sandbox levels',
  safety_sandbox_levels_desc: 'read / workspace-write (default) / full',
  safety_profiles_title: 'Built-in permission profiles',
  safety_profiles_desc: 'Standard (workspace-write + ask) / Read-only (read + ask) / Sandbox (workspace-write, network blocked, auto); plus four runtime presets: ask / auto / full / readonly',
  safety_pipe_title: 'Tool-call Safety Pipeline',
  safety_pipe_1: 'read-before-write gate: existing files must be read first or carry a version',
  safety_pipe_2: 'Path boundaries and extension whitelist keep file tools inside the project',
  safety_pipe_3: 'Native sandbox: Windows restricted token / AppContainer, Linux, macOS',
  safety_pipe_4: 'Git worktree sandbox: concurrent tasks run in isolated branches under .auraxis-sandbox/task-<id>',
  safety_pipe_5: 'Undo snapshots (.auraxis-snapshots/) are created before writes, recoverable anytime',
  safety_pipe_6: 'File locks and conflict detection prevent concurrent agents from overwriting each other',

  research_title: 'Research & Systems · Paper-Driven',
  research_subtitle:
    'Auraxis is engineering-driven by 11 papers: 7 research modules plus 4 cache-alignment techniques, all original client-side implementations.',
  research_group_papers: 'Research-Driven Modules',
  research_group_cache: 'Cache-Alignment Suite',
  research_sources_title: 'Paper Sources (11)',
  research_stat_papers: 'Papers',
  research_stat_modules: 'Research Modules',
  research_stat_cache: 'Cache Techniques',
  research_note_original:
    'All 11 implementations are original code: algorithmic ideas borrowed, no paper code copied. Cache techniques are client-side adaptations of DeepSeek\u2019s official prefix cache.',
  research_status_landed: 'Landed',
  research_eywa_title: 'Eywa · Provenance Memory',
  research_eywa_desc:
    'Evidence before belief: immutable evidence, rule-based signals and hard-anchor validation, a deterministic zero-LLM read path, and belief audit/erasure.',
  research_map_title: 'MAP-Graph · Shared-Memory Authorization',
  research_map_desc:
    'Authorization, source trust and risk gating for multi-agent shared memory: high-risk Write / Edit / Bash calls demand a higher evidence bar.',
  research_agora_title: 'AGORA · Step-Level Compression',
  research_agora_desc:
    'Inference-free whole-step keep/drop that never splits a tool call from its result, preserving the agent\u2019s action grammar.',
  research_swe_title: 'SWE-Touch · Drift Detection',
  research_swe_desc:
    'When the user or another process touches the code, drift is detected before the next iteration and the affected areas are verified.',
  research_oversight_title: 'Oversight · Approval-Fatigue Guard',
  research_oversight_desc:
    'Treats human escalation as a resource-allocation problem: a 20-decision sliding window plus fatigue score suggests escalate / auto / balanced.',
  research_autotool_title: 'AutoTool · Tool Inertia Graph',
  research_autotool_desc:
    'Builds a directed graph from historical tool trajectories to predict the next tool — observation plus prediction layers cut inference cost by up to ~30%.',
  research_gate_title: 'Verifier-as-Gatekeeper · Skill Admission',
  research_gate_desc:
    'Pre-commit structural, behavioral and semantic checks plus marginal-gain subset selection prevent irreversible skill-library contamination.',
  research_radix_title: 'RadixAttention · Canonical Replay',
  research_radix_desc:
    'Writes the full message array actually sent to the LLM into llm_context_v1 each round; the next turn replays the same prefix byte-for-byte.',
  research_promptcache_title: 'Prompt Cache · Stable Blocks',
  research_promptcache_desc:
    'System prompt, tool definitions and AGENTS.md stay as stable blocks, replaced in place only when content really changes.',
  research_cacheaware_title: 'Cache-Aware · Dynamic Tail',
  research_cacheaware_desc:
    'Cross-session memory is no longer unshifted to the head — it travels as a separate field near the current user message or snapshot tail.',
  research_dedup_title: 'Byte-Exact · Deduplication',
  research_dedup_desc:
    'On replay, a byte-identical memory block is skipped, preventing the same retrieval from accumulating every round.',

  eco_title: 'Extensions & Integration',
  eco_subtitle: 'Auraxis Agent ships an MCP client, a CLI, SDKs and a plugin mechanism for scripts and external programs.',
  eco_cli_title: 'Headless CLI',
  eco_cli_desc:
    'Run a full ReAct loop headlessly: npm run cli -- --run "task", with configurable model, permissions, sandbox and JSON output.',
  eco_ts_title: 'TypeScript SDK',
  eco_ts_desc:
    'packages/auraxis-sdk talks to the desktop app over TCP JSON-RPC, ready to embed in your own toolchain.',
  eco_py_title: 'Python SDK',
  eco_py_desc:
    'python/auraxis_sdk provides a symmetric API for driving sessions and tools from Python automation.',
  eco_plugin_title: 'Plugin System',
  eco_plugin_desc:
    'Four extension points — commands / tools / hooks / ui — with dangerous-pattern scanning and capability confirmation before load.',

  problem_title: "Why today's AI assistants aren't enough",
  problem_subtitle: 'Three everyday pain points — Auraxis solves each of them.',
  problem1_title: 'All talk, no code',
  problem1_desc:
    'Chat-based AI only outputs advice — which line to change, which command to run is left to you. Long replies, untouched code.',
  problem2_title: 'Black box, zero audit',
  problem2_desc:
    'Tool calls, permission decisions and file changes happen in cloud or opaque logic. When something breaks, there is nothing to trace.',
  problem3_title: 'Polluted workspace',
  problem3_desc:
    'Parallel tasks trample each other\u2019s working directory — temp files and half-finished changes scattered everywhere, main branch at risk.',

  solution_title: 'Core Features',
  solution_subtitle:
    'Auraxis Agent converges chat and agent execution into one ReAct step engine — tools, scheduling and sandboxing all run locally.',
  ui_details:
    'UI & engineering details: terminal drawer · PTY/SSH sessions · background & scheduled tasks · image input · undo snapshots · conflict detection · Work task board · local account · bilingual UI · dark/light theme (Windows 11 Acrylic) · opt-in telemetry',
  pillar2_title: '71 Built-in Tools',
  pillar2_desc:
    'From file I/O, terminal and web search to document generation, cloud connectors, background scheduling, session retrieval and sub-agent orchestration — all 71 tools run through the same permission pipeline; 15 dangerous ones ask for confirmation by default.',
  solution_more_label: 'More capabilities',

  demo_title: 'ReAct Loop Demo',
  demo_subtitle:
    'A real screen recording showing the ReAct loop from user input to <FINAL_ANSWER>: one unified engine, a permission watchdog at the gate, Code Mode orchestrating tools.',
  demo_video_caption: 'Screen recording demo',
  demo_video_aria: 'Auraxis Agent ReAct loop screen recording',
  flow1_title: 'Understand',
  flow1_desc: 'Parse the request, read project context, inject relevant memory and project instructions.',
  flow2_title: 'Plan',
  flow2_desc: 'The LLM produces a structured TaskPlan; in plan mode it waits for your approval first.',
  flow3_title: 'Execute',
  flow3_desc: 'All 71 tools land through the pipeline: permission profile → sandbox gate → approval → execution.',
  flow4_title: 'Verify & deliver',
  flow4_desc: 'LSP / ReviewArtifact checks pass, then <FINAL_ANSWER> ends the turn.',

  compare_title: 'Auraxis vs ordinary AI assistants',
  compare_subtitle: 'Same LLM under the hood — the difference is who controls the execution chain.',
  compare_other: 'Ordinary AI assistant',
  compare_auraxis: 'Auraxis Agent',
  compare_row1_label: 'Execution',
  compare_row1_other: 'Advice only — never touches your code',
  compare_row1_auraxis: 'Really drives Bash / LSP / Git locally',
  compare_row2_label: 'Auditability',
  compare_row2_other: 'Black-box output, nothing to trace',
  compare_row2_auraxis: 'Unified event log, every step replayable',
  compare_row3_label: 'Isolation',
  compare_row3_other: 'Writes straight into your main workspace',
  compare_row3_auraxis: '3 permission modes + native sandbox + Worktree',
  compare_row4_label: 'Extensibility',
  compare_row4_other: 'Few tools, closed ecosystem',
  compare_row4_auraxis: '71 tools + MCP + plugins + dual SDKs',
  compare_modes_label: 'Three permission modes, switch by scenario',

  faq_title: 'FAQ',
  faq_subtitle: 'Answers about models, permissions, sandboxing and data.',
  faq_q1: 'Do I need an API key? Which models are supported?',
  faq_a1:
    'Yes. Auraxis Agent uses DeepSeek by default (deepseek-v4-flash / v4-pro) and is compatible with OpenAI- and Anthropic-format endpoints. You can add custom models in settings or via environment variables.',
  faq_q2: 'How is this different from an IDE plugin or a plain CLI tool?',
  faq_a2:
    'Auraxis Agent is a standalone desktop client that converges chat and multi-agent runs into one auditable ReAct engine — tools, scheduling and sandboxing all run locally. It also ships a headless CLI and SDKs for automation.',
  faq_q3: 'Which permission mode should I choose?',
  faq_a3:
    'ask (default) fits everyday work — dangerous tools prompt one by one; plan fits large refactors — approve a plan, then only approved steps execute; auto (legacy spelling: afe) fits CI and unattended tasks — auto-approve while tools still go through the unified execution pipeline. Four runtime presets (ask / auto / full / readonly) combine approval policy, sandbox level and hygiene checks.',
  faq_q4: 'How far does sandbox isolation go?',
  faq_a4:
    'Command-level isolation covers Windows restricted token / AppContainer, Linux and macOS. File tools are constrained by path boundaries and extension whitelists; concurrent tasks in Git repos can also run in separate worktree branches.',
  faq_q5: 'Where is my data stored?',
  faq_a5:
    'Everything stays local. Sessions are append-only JSONL event logs with a SQLite projection cache and FTS5 search; long-term memory is now Eywa provenance memory (evidence before belief, zero-LLM read path), isolated per project; API keys and connector tokens are encrypted with the OS safeStorage.',
  faq_q6: 'Is this project open source?',
  faq_a6:
    'Yes, under the MIT License. Source code, architecture docs and both SDKs are on GitHub (yth1120/Auraxis-Agent).',
  faq_q7: 'Do I need to install Node.js myself?',
  faq_a7:
    'No. The app embeds the Node 24 runtime; shell tools work best with Git Bash or PowerShell.',
  faq_q8: 'Is this project mature?',
  faq_a8:
    'No. It is a personal project under continuous iteration and may contain bugs or missing features. Please be cautious with important work; issues and feedback on GitHub are welcome.',
  faq_q9: 'How do ask/plan/auto relate to read/workspace-write/full?',
  faq_a9:
    'They are two layers: ask/plan/auto is the approval policy that decides whether dangerous tools need confirmation (default ask; "afe" is a legacy spelling normalized to auto); read/workspace-write/full is the sandbox level that decides how much of the project an agent can access (default workspace-write). Four runtime presets (ask / auto / full / readonly) and built-in permission profiles (Standard / Read-only / Sandbox) combine both layers.',
  faq_q10: 'Does Auraxis Agent upload my data?',
  faq_a10:
    'Not by default. Sessions, memory and settings all stay local; telemetry is off unless you opt in, and is reported through a strict allowlist with personal data removed. API keys are encrypted with the OS safeStorage.',
  faq_q11: 'What is the difference between Chat / Work / Code modes?',
  faq_a11:
    'All three modes share the same ReAct step engine without polluting each other\u2019s state. Chat is everyday conversation and code Q&A; Work targets document collaboration — it clarifies ambiguous requests first and hard-rejects code-file writes; Code mode orchestrates tools via RunCode in a worker thread for automated coding tasks.',
  faq_q12: 'Do document generation and cloud connectors need extra setup?',
  faq_a12:
    'Document tools (Word / Excel / PowerPoint / PDF) work out of the box. Slack / Google Drive / Notion require tokens in Settings → Connectors, encrypted with the OS safeStorage; corresponding tools show an external side-effect warning on each call.',

  tools_title: 'Built-in Tool Matrix',
  tools_subtitle: 'At each ReAct step, the agent calls these tools within your permission constraints.',
  tools_search_placeholder: 'Search tools by name or description…',
  tools_danger_label: 'Danger (requires approval)',
  tools_safe_label: 'Safe (silent pass-through)',
  tools_filter_all: 'All',
  tools_filter_danger: 'Danger',
  tools_filter_safe: 'Safe',
  tools_filter_files: 'Files',
  tools_filter_documents: 'Documents',
  tools_filter_connectors: 'Connectors',
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
  tools_footnote: 'Tool definitions stay in sync with the desktop electron/tool-defs.ts.',
  tools_legend: 'Tool safety legend',

  footer_nav: 'Footer navigation',
  footer_support: 'Support & feedback',

  dev_title: 'Local Development',
  dev_description:
    'The Auraxis Agent source is on GitHub, and both the main and renderer processes are TypeScript. The commands below clone the project and start local development.',
  dev_check1: 'Vitest coverage: lines 85.42% / branches 79.08% / functions 86.63% (thresholds 80 / 70 / 80)',
  dev_check2: 'Strict CSP is enabled in production; main and renderer processes are isolated',
  dev_check3: '237 test files · 1740 cases · 15 Playwright E2E flows',
  dev_link_cli: 'headless CLI (--run / --sdk / --acp / --plugin)',
  dev_step1_comment: '// 1. Clone the core repository',
  dev_step2_comment: '// 2. Create local environment config',
  dev_step3_comment: '// 3. Install dependencies & launch Electron dev mode',
  dev_step3_line2: 'npm run electron:dev',
  dev_titlebar: 'Quick Clone & Start Development',
  dev_titlebar_type: 'TypeScript / Vite',
  dev_copy_button: 'Copy command',
  dev_copy_title: 'Click to copy',

  footer_brand: 'Auraxis Agent — an Electron-based desktop agentic workbench, MIT-licensed, personal project in development.',
  footer_cta_kicker: 'Open Source · Build Together',
  footer_cta_title: 'An open invitation to every developer and expert: let\u2019s fix and build together',
  footer_cta_desc:
    'Auraxis is a personal MIT-licensed project under continuous iteration. Issues, PRs, and performance / security / architecture feedback are all welcome as we polish the engineering details together.',
  footer_cta_primary: 'Open an Issue / PR',
  footer_cta_secondary: 'Visit the GitHub repo',
  footer_spec_title: 'Core Spec',
  footer_spec_1: 'Unified ReAct Engine',
  footer_spec_2: '71 Built-in Tools',
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
  footer_support_3: 'Changelog',
  footer_copyright: '© 2026 Auraxis Core Contributors. Open source under MIT License.',
  footer_privacy: 'Privacy',
  footer_license: 'License',

  theme_dark: 'Switch to Dark Mode',
  theme_light: 'Switch to Light Mode',
};

export const TRANSLATIONS: Record<Language, Translations> = { zh, en };

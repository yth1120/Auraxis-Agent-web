# Auraxis Agent — 官方网站

<img width="3078" height="1376" alt="Auraxis 官网预览" src="https://github.com/user-attachments/assets/cc06146b-51a2-4b2e-a6c4-41aca0a0fb5e" />

<p align="center">
  <strong>Auraxis Agent</strong> 的官方品牌营销站点。<br />
  为桌面端编程助手 <strong>Auraxis Agent</strong>（Electron 应用）量身打造的单页落地页。<br />
  中英双语 · 深色/浅色主题 · 基于 Astro 4 + Hono + Cloudflare Pages。
</p>

<p align="center">
  <a href="#快速上手">快速上手</a> ·
  <a href="#技术栈">技术栈</a> ·
  <a href="#项目结构">项目结构</a> ·
  <a href="#架构设计">架构设计</a> ·
  <a href="#i18n">国际化</a> ·
  <a href="#开发指南">开发指南</a> ·
  <a href="#部署">部署</a>
</p>

---

## 概述

Auraxis Agent 网站是 [Auraxis Agent](https://github.com/yth1120/Auraxis-Agent) 桌面端 Electron 应用的品牌官网，向开发者社区展示 Auraxis Agent 的核心能力：

- **统一 ReAct 步进引擎** — 聊天与智能体共用 step-engine 单一步进循环，停止策略/压缩/重试均为策略钩子
- **63 个内置工具** — 11 个危险 + 52 个安全，按 10 大能力族分类
- **多智能体调度** — 优先级队列、并发控制、三级偏差检测、计划审批流
- **Code Mode** — worker 线程执行 TypeScript 工具编排，子调用回穿完整权限管线
- **原生沙箱** — Windows restricted token / AppContainer、Linux、macOS 四后端 + Git Worktree 隔离
- **MCP + 插件系统** — JSON-RPC over stdio 标准兼容、四类扩展点
- **持久化记忆** — SQLite + FTS5 全文搜索 + LLM 驱动记忆提取

### 在线预览

| 语言 | 链接 |
|------|------|
| 🇨🇳 中文 | `https://auraxis-website.pages.dev` |
| 🇺🇸 English | `https://auraxis-website.pages.dev`（切换 EN） |

---

## 快速上手

```bash
# 1. 克隆本仓库
git clone <repo-url>
cd auraxis-website

# 2. 安装依赖
npm install

# 3. 启动开发服务器（默认 http://localhost:4321）
npm run dev

# 4. 构建生产版本
npm run build

# 5. 本地预览构建产物
npm run preview
```

### 可用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` / `npm start` | 启动 Astro 开发服务器 |
| `npm run build` | 生产构建（首页 SSG + API 路由 SSR） |
| `npm run preview` | 本地预览构建产物 |
| `npm run check` | TypeScript 类型检查 |
| `npm run astro` | Astro CLI 工具 |

---

## 技术栈

| 层级 | 技术 | 用途 |
|------|------|------|
| **框架** | [Astro 4](https://astro.build) | Hybrid 渲染引擎（SSG + SSR） |
| **交互** | [React 18](https://react.dev) | 交互岛屿（Islands Architecture） |
| **API** | [Hono](https://hono.dev) | 轻量服务端 API 框架（CF Workers 兼容） |
| **样式** | [Tailwind CSS 3](https://tailwindcss.com) | 原子化 CSS + 暗色模式 |
| **动画** | [Framer Motion 11](https://motion.dev) | 数据驱动动画（粒子流动/旋转，遵循零位移动画规范） |
| **图标** | [Lucide React](https://lucide.dev) | 开源线性图标库 |
| **运行时** | [Cloudflare Pages](https://pages.cloudflare.com) | 部署 + SSR 运行时 |
| **构建** | [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | CF 部署管理 |

### 设计系统（与桌面端 Auraxis 品牌一致）

| Token | 值 | 用途 |
|-------|-----|------|
| `brand-black` | `#111216` | 深色主题页面背景（品牌黑） |
| `brand-dark` | `#171822` | 深色卡片/代码块背景 |
| `brand-card` | `#1C1E28` | 卡片背景 |
| `brand-border` | `#262A35` | hairline 发丝线（深色） |
| `brand-accent` | `#8C8AA8` | Aura 紫灰 — 仅约 3% 面积强调（焦点/选中/状态点） |
| `brand-ivory` | `#F1F1EE` | 象牙白 — 浅色主题底色 / 深底正文 |
| `sans` | 系统 UI 栈 | 正文（`-apple-system, Segoe UI, PingFang SC, Microsoft YaHei`） |
| `mono` | `SF Mono, JetBrains Mono, Fira Code, Consolas` | 代码/终端字体 |

> 视觉规范：圆角六档（5/6/8/12/14/9999）、零位移动画（按钮无 hover 位移/缩放）、选中态背景高亮禁左侧色条、禁止蓝色与大面积渐变。

---

## 项目结构

```
auraxis-website/
├── astro.config.mjs          # Astro 配置（Hybrid + CF 适配器）
├── tailwind.config.mjs       # Tailwind 配置（Auraxis 品牌色彩 Token）
├── wrangler.toml             # Cloudflare Pages 部署配置
├── tsconfig.json             # TypeScript 配置
├── package.json
│
├── public/
│   ├── auraxis-logo.png      # 品牌 Logo（拷贝自桌面端 src/assets/）
│   └── favicon-96.png        # 站点图标
│
└── src/
    ├── pages/
    │   ├── index.astro       # ★ 主页入口（SSG 预渲染）
    │   └── api/
    │       └── [...route].ts # API catch-all，委托给 Hono
    │
    ├── layouts/
    │   └── BaseLayout.astro  # HTML 骨架、主题预加载、i18n 引导
    │
    ├── components/           # Astro 无交互组件
    │   ├── Header.astro
    │   ├── HeroSection.astro
    │   ├── SolutionSection.astro    # 核心能力（6 张能力卡）
    │   ├── DemoSection.astro        # ReAct 循环演示（终端模拟）
    │   ├── ArchitectureSection.astro
    │   ├── ToolsMatrixSection.astro
    │   ├── SafetySection.astro      # 安全模型（权限模式 / 沙箱后端）
    │   ├── EcosystemSection.astro   # 开发者生态（CLI / TS SDK / Python SDK / 插件）
    │   ├── DownloadSection.astro    # 下载区（版本/系统要求/更新日志）
    │   ├── DeveloperDocs.astro      # 二次开发指南（克隆 / 启动 / 文档链接）
    │   ├── FaqSection.astro         # 常见问题（details/summary）
    │   ├── GitHubIcon.astro         # GitHub 品牌图标（内联 SVG）
    │   └── Footer.astro
    │
    ├── react/                # React 交互岛屿
    │   ├── ThemeToggle.tsx   # 深色/浅色切换
    │   ├── LanguageToggle.tsx# 中/英语言切换
    │   ├── TerminalSimulator.tsx # ReAct 循环终端模拟器
    │   ├── ArchitectureFlow.tsx  # 双进程架构交互图
    │   ├── ToolsGrid.tsx     # 工具矩阵交互筛选器（63 工具）
    │   └── SmartDownloader.tsx  # 智能下载按钮（自动平台检测）
    │
    ├── i18n/
    │   ├── translations.ts   # ★ 中/英完整翻译表
    │   └── LanguageContext.tsx# React i18n Context Provider
    │
    ├── data/
    │   ├── tools-data.json   # ★ 63 个内置工具数据集（源自桌面端 tool-defs.ts）
    │   ├── tools.ts          # 类型化工具数据访问层
    │   ├── releases.json     # 发布版本 & 下载资产（v2.0.0）
    │   └── simSteps.ts       # 终端模拟步骤序列
    │
    ├── types/
    │   └── index.ts          # ★ 全局 TypeScript 类型定义（与桌面端 contracts 同构）
    │
    ├── server/
    │   ├── app.ts            # ★ Hono 应用工厂（中间件 + 路由注册）
    │   └── routes/
    │       ├── releases.ts   # GET /api/releases/latest
    │       └── tools.ts      # GET /api/tools   &   /api/tools/:name
    │
    ├── utils/
    │   └── platform.ts       # User Agent 平台嗅探
    │
    └── styles/
        └── global.css        # 全局样式、网格背景、终端光标、滚动条
```

---

## 架构设计

### 渲染模型：Astro Hybrid

```
┌────────────────────────────────────────────────────┐
│                    Cloudflare Pages                   │
│                                                       │
│   GET / (SSG)              GET /api/* (SSR)          │
│   ┌─────────────────┐     ┌────────────────────┐     │
│   │  index.astro     │     │  [...route].ts     │     │
│   │  (预渲染静态HTML) │     │  (动态执行)         │     │
│   │                 │     │       ↓             │     │
│   │  React Islands  │     │  Hono Factory      │     │
│   │  (客户端水合)    │     │  ┌──────────────┐  │     │
│   └─────────────────┘     │  │ releases.ts  │  │     │
│                            │  │ tools.ts     │  │     │
│                            │  └──────────────┘  │     │
│                            └────────────────────┘     │
└────────────────────────────────────────────────────┘
```

- **首页 (`index.astro`)**: 构建时预渲染为静态 HTML，`prerender = true`
- **API 路由 (`[...route].ts`)**: 运行时动态执行，`prerender = false`
- **React 岛屿**: 无共享根节点，每个 `.astro` 组件独立导入 React 岛屿，通过 `client:visible` / `client:idle` 按需水合

### API 层

API 请求经 Astro catch-all 转发至 Hono 实例：

| 端点 | 方法 | 说明 | 缓存策略 |
|------|------|------|---------|
| `/api/health` | GET | 健康检查 + 运行时长 | 无 |
| `/api/releases/latest` | GET | 最新版本 & 各平台下载资产 | 浏览器 1h / CDN 24h |
| `/api/tools` | GET | 工具列表（支持 `?type=` & `?category=` 筛选） | 浏览器 1d / CDN 7d |
| `/api/tools/:name` | GET | 单个工具详细定义 | 浏览器 1d / CDN 7d |

所有 API 响应遵循统一契约：

```typescript
interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: { code: string; message: string };
}
```

### 数据流

```
┌──────────────────┐    ┌──────────────┐    ┌─────────────────┐
│ tools-data.json  │───▶│  /api/tools  │───▶│  ToolsGrid.tsx  │
│ (63 tools)       │    │  (Hono SSR)  │    │  (React Island) │
├──────────────────┤    ├──────────────┤    ├─────────────────┤
│ releases.json    │───▶│ /api/releases│───▶│ SmartDownloader │
│ (version + DL)   │    │  (Hono SSR)  │    │  (React Island) │
├──────────────────┤    └──────────────┘    └─────────────────┘
│ simSteps.ts      │
│ (LogStep[])      │───────────────────────▶ TerminalSimulator
└──────────────────┘                         (React Island)
```

- **工具数据**: 静态 JSON（源自桌面端 `electron/tool-defs.ts`）→ `GET /api/tools` → React 筛选过滤 UI
- **版本数据**: 静态 JSON → `GET /api/releases/latest` → 自动平台检测下载按钮
- **终端演示**: 硬编码的 LogStep 序列 → 逐行动画播放模拟 Auraxis ReAct 循环

---

## 国际化 (i18n)

系统支持 **简体中文 (zh)** 和 **英文 (en)** 两种语言。

### 工作原理

1. **翻译表**: `src/i18n/translations.ts` 定义了完整的 `Translations` 接口 + 中英对照
2. **静态内容**: HTML 标签使用 `data-i18n="key"` 属性标记，引导脚本自动替换文本
3. **React 内容**: 每个岛屿包裹 `<LanguageProvider>`，通过 `useLanguage().t.key` 获取翻译
4. **跨岛屿同步**: `auraxis:lang-change` 自定义事件在所有 React 岛屿和 Astro DOM 间同步
5. **持久化**: 语言偏好存储在 `localStorage('lang')`，默认跟随浏览器 `navigator.language`

### 新增翻译

1. 在 `Translations` 接口中添加新 key
2. 在 `zh` 和 `en` 两个对象中补充对应的值
3. 在 Astro 模板中使用 `data-i18n="key"`
4. 在 React 组件中通过 `useLanguage().t.key` 引用
5. 若该 key 出现在静态 Astro 元素上，同步更新 `BaseLayout.astro` 内联 EN 引导映射

---

## 主题系统

支持 **深色模式 (dark)** 和 **浅色模式 (light)**。

- Tailwind 的 `darkMode: 'class'` 策略，通过 `<html class="dark">` 驱动
- 首屏阻塞脚本从 `localStorage('theme')` 读取偏好并在 DOM 解析前应用，防止 FOUC（闪白）
- 未设置时跟随系统 `prefers-color-scheme`
- `ThemeToggle` React 岛屿切换并持久化选择
- 终端模块和代码克隆框始终保持深色背景（`.terminal-dark-box` / `.code-dark-box`），确保代码高亮对比度

---

## 开发指南

### 添加新的页面区块

1. 在 `src/components/` 创建 Astro 组件
2. 如需交互，在 `src/react/` 创建 React 组件并用 `client:*` 指令导入
3. 在 `src/pages/index.astro` 中引入并放置
4. 在 `src/i18n/translations.ts` 中添加所有 UI 字符串到 `Translations` 接口及中英对象
5. 静态文本使用 `data-i18n="key"`，React 文本使用 `useLanguage().t.key`

### 更新工具数据

工具数据的事实源是桌面端 `electron/tool-defs.ts`。重新提取：

```bash
# 从桌面端仓库读取 TOOL_DEFINITIONS，生成 tools-data.json
# 字段: name / description(中文翻译) / descriptionEn(桌面端原文) / category / danger / concurrencySafe / params
# params 对应桌面端 input_schema.properties 的顶层键名
```

### TypeScript

项目使用严格模式 TypeScript，路径别名 `@/*` 映射到 `src/*`：

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
```

### 构建检查

```bash
npm run check    # Astro 内置 TypeScript 诊断
npm run build    # 生产构建（如有类型错误会失败）
```

---

## 部署

项目原生部署到 **Cloudflare Pages**。

```bash
# 1. 构建生产版本
npm run build

# 2. 使用 Wrangler 部署
npx wrangler pages deploy ./dist --project-name=auraxis-website

# 3. 或通过 Cloudflare Dashboard 连接 Git 仓库自动部署
```

### Cloudflare 配置

`wrangler.toml`：

```toml
name = "auraxis-website"
pages_build_output_dir = "./dist"
compatibility_date = "2026-08-16"
```

- 构建命令: `npm run build`
- 构建输出: `./dist`
- 适配器: `@astrojs/cloudflare`（Hybrid 模式自动输出 `_worker.js`）

---

## React 岛屿一览

| 组件 | 文件 | 水合策略 | 功能 |
|------|------|----------|------|
| 主题切换 | `ThemeToggle.tsx` | `client:visible` | 深色/浅色模式切换 |
| 语言切换 | `LanguageToggle.tsx` | `client:visible` | 中/英双语切换 |
| 终端模拟器 | `TerminalSimulator.tsx` | `client:idle` | ReAct 循环动画演示 |
| 架构流程图 | `ArchitectureFlow.tsx` | `client:visible` | 双进程交互架构可视化 |
| 工具矩阵 | `ToolsGrid.tsx` | `client:visible` | 63 工具筛选/查看/参数展示 |
| 智能下载 | `SmartDownloader.tsx` | `client:idle` | 自动检测平台，展示下载链接 |

---

## 与 Auraxis 桌面端的对应关系

本网站的数据与类型定义与 Auraxis Electron 应用保持同构映射：

| 概念 | 桌面端实现 | 网站数据源 |
|------|-----------|-----------|
| 63 个工具 | `electron/tool-defs.ts` | `src/data/tools-data.json` |
| 危险工具集合 | `electron/ipc/tool-handlers.ts` (DANGEROUS_TOOLS) | `tools-data.json` 的 danger 字段 |
| 权限模式 | `electron/types.ts` | `types.ts PermissionMode` |
| LogStep 序列 | 运行时 ReAct 循环日志 | `src/data/simSteps.ts` |
| 发布版本 | 桌面端 `package.json` | `src/data/releases.json` |
| 平台检测 | `electron/utils/` | `src/utils/platform.ts` |

---

## 浏览器兼容性

项目构建产物面向现代浏览器（Chrome/Firefox/Safari/Edge 最近 2 个主版本），经由 Astro 的自动转译与 polyfill 策略提供兼容性保障。

---

## 许可证

[MIT License](./LICENSE)

© 2026 Auraxis Core Contributors.

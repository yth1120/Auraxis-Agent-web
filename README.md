# Auraxis Agent — 官方网站

<img width="3078" height="1376" alt="Auraxis 官网预览" src="https://github.com/user-attachments/assets/cc06146b-51a2-4b2e-a6c4-41aca0a0fb5e" />

<p align="center">
  <strong>Auraxis Agent</strong> 的官方品牌营销站点。<br />
  为桌面端智能体工作台 <strong>Auraxis Agent</strong>（Electron 应用）量身打造的单页落地页。<br />
  中英双语 · 深色/浅色主题 · 基于 Astro 4 + React Islands + Tailwind CSS。
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

- **Chat / Work / Code 三模式** — 三种产品形态共用同一套 ReAct 步进引擎，模式状态互不污染
- **71 个内置工具** — 15 个危险 + 56 个安全，按 13 大能力族分类
- **多智能体调度** — 优先级队列、并发控制、三级偏差检测、计划审批流
- **Code Mode** — worker 线程执行 TypeScript 工具编排，子调用回穿完整权限管线
- **文档生成与云连接器** — Word / Excel / PPT / PDF 读写，Slack / Google Drive / Notion
- **原生沙箱** — Windows restricted token / AppContainer、Linux、macOS 四后端 + Git Worktree 隔离
- **MCP + 插件系统** — JSON-RPC over stdio 标准兼容、四类扩展点
- **Eywa 溯源记忆** — 证据先于信念、零 LLM 读取路径 + SQLite FTS5 全文搜索
- **研究驱动模块 + 缓存对齐** — 7 篇论文落地（Eywa / MAP-Graph / AGORA / SWE-Touch / Oversight / AutoTool / Verifier-as-Gatekeeper）+ 4 项客户端缓存技术（RadixAttention / Prompt Cache / Cache-Aware / Byte-Exact）

### 在线预览

| 平台 | 链接 |
|------|------|
| GitHub Pages | `https://yth1120.github.io/Auraxis-Agent-web/` |

---

## 快速上手

```bash
# 1. 克隆本仓库
git clone <repo-url>
cd Auraxis-Agent-web

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
| `npm run build` | 生产构建（纯静态输出到 `dist/`） |
| `npm run preview` | 本地预览构建产物 |
| `npm run check` | `astro check` TypeScript 诊断（无输出） |
| `npm run astro` | Astro CLI 工具 |

---

## 技术栈

| 层级 | 技术 | 用途 |
|------|------|------|
| **框架** | [Astro 4](https://astro.build) | 静态站点生成（SSG） |
| **交互** | [React 19](https://react.dev) | 交互岛屿（Islands Architecture） |
| **样式** | [Tailwind CSS 3](https://tailwindcss.com) | 原子化 CSS + 暗色模式 |
| **动画** | [Framer Motion 11](https://motion.dev) | 数据驱动动画（粒子流动/旋转，遵循零位移动画规范） |
| **图标** | [Lucide React](https://lucide.dev) | 开源线性图标库 |
| **部署** | [GitHub Pages](https://pages.github.com) / [Cloudflare Pages](https://pages.cloudflare.com) | 静态托管 + 自动部署 |
| **构建** | [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | 可选的 CF Pages 部署管理 |

> 本站为**纯静态站点**：所有数据（工具矩阵、版本/下载信息）随构建打包为 JSON，由 React 岛屿在客户端消费，无 SSR 与后端 API。

### 设计系统（与桌面端 Auraxis 品牌一致）

| Token | 值 | 用途 |
|-------|-----|------|
| `brand-page` | 浅 `#EAEDF1` / 深 `#111216` | 页面底衬/顶栏/页脚（浅色主题压深一档） |
| `brand-black` | `#111216` | 深色主题页面背景（品牌黑） |
| `brand-dark` | `#1B1D21` | 深色卡片/代码块背景 |
| `brand-card` | `#23262B` | 卡片背景 |
| `brand-border` | `#454B55` | hairline 发丝线（深色，更强对比） |
| `brand-accent` | 浅 `#5C5A74` / 深 `#8C8AA8` | Aura 紫灰 — 仅约 3% 面积强调（焦点/选中/状态点，随主题切换） |
| `brand-ivory` | `#F3F3F0` | 深底正文色 |
| `brand-muted` | 浅 `#2B2F35` / 深 `#D6DAE0` | 次级/辅助文字（随主题切换，字体加深） |
| `brand-faint` | 浅 `#33373D` / 深 `#BCC1C8` | 三级弱文字（随主题切换，字体加深） |
| `sans` | 系统 UI 栈 | 正文（`-apple-system, Segoe UI, PingFang SC, Microsoft YaHei`） |
| `mono` | `SF Mono, JetBrains Mono, Fira Code, Consolas` | 代码/终端字体 |

> 视觉规范：圆角六档（5/6/8/12/14/9999）、零位移动画（按钮无 hover 位移/缩放）、选中态背景高亮禁左侧色条、禁止蓝色与大面积渐变。

---

## 项目结构

```
Auraxis-Agent-web/
├── astro.config.mjs          # Astro 配置（静态输出 + 可选 BASE_PATH）
├── tailwind.config.mjs       # Tailwind 配置（Auraxis 品牌色彩 Token）
├── package.json
├── public/
│   ├── auraxis-logo.png      # 品牌 Logo
│   ├── favicon-96.png        # 站点图标
│   ├── releases.json         # 运行时版本/下载信息（与 src/data 同步）
│   ├── screenshots/          # 界面截图
│   └── videos/               # 真实录屏演示
│
└── src/
    ├── pages/
    │   └── index.astro       # ★ 主页入口（单页落地页）
    ├── layouts/
    │   └── BaseLayout.astro  # HTML 骨架、主题预加载、i18n 引导
    ├── components/           # Astro 无交互组件
    │   ├── UpdateBanner.astro     # 顶部重点更新横幅（每次进入自动弹出，可关闭）
    │   ├── Header.astro
    │   ├── HeroSection.astro
    │   ├── ScreenshotSection.astro
    │   ├── SolutionSection.astro    # 核心能力（12 张能力卡）
    │   ├── DemoSection.astro        # 真实录屏演示
    │   ├── ArchitectureSection.astro
    │   ├── ResearchSection.astro     # 技术内核·论文驱动开发（论文台账 + 缓存管线 + 地址清单）
    │   ├── ToolsMatrixSection.astro
    │   ├── SafetySection.astro      # 安全模型（权限策略 / 沙箱后端）
    │   ├── EcosystemSection.astro   # 开发者生态（CLI / TS SDK / Python SDK / 插件）
    │   ├── DeveloperDocs.astro      # 二次开发指南（克隆 / 启动 / 文档链接）
    │   ├── DownloadSection.astro    # 下载区（版本/系统要求/更新日志）
    │   ├── FaqSection.astro         # 常见问题（details/summary）
    │   ├── GitHubIcon.astro         # GitHub 品牌图标（内联 SVG）
    │   └── Footer.astro
    ├── react/                # React 交互岛屿
    │   ├── ThemeToggle.tsx   # 深色/浅色切换
    │   ├── LanguageToggle.tsx# 中/英语言切换
    │   ├── ArchitectureFlow.tsx  # 双进程架构交互图
    │   ├── ToolsGrid.tsx     # 工具矩阵交互筛选器（71 工具）
    │   └── SmartDownloader.tsx  # 智能下载按钮（自动平台检测）
    ├── i18n/
    │   ├── translations.ts   # ★ 中/英完整翻译表
    │   └── LanguageContext.tsx# React i18n Context Provider
    ├── data/
    │   ├── tools-data.json   # ★ 71 个内置工具数据集（源自桌面端 tool-defs.ts）
    │   ├── tools.ts          # 类型化工具数据访问层
    │   └── releases.json     # 发布版本 & 下载资产（v3.2.0）
    ├── types/
    │   └── index.ts          # ★ 全局 TypeScript 类型定义（与桌面端 contracts 同构）
    ├── utils/
    │   └── platform.ts       # User Agent 平台嗅探
    └── styles/
        └── global.css        # 全局样式、网格背景、滚动条
```

---

## 架构设计

### 渲染模型：Astro 静态站点

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Pages / CF Pages                  │
│                                                              │
│   GET / (index.html)                                         │
│   ┌──────────────────────────────────────────────────────┐   │
│   │  index.astro（构建时预渲染为静态 HTML）                  │   │
│   │  ├── React Islands（client:visible / client:idle）     │   │
│   │  │   ├── ToolsGrid ──────▶ src/data/tools-data.json    │   │
│   │  │   └── SmartDownloader ─▶ public/releases.json        │   │
│   │  └── 静态资源（截图 / 录屏 / Logo）                      │   │
│   └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

- **首页 (`index.astro`)**: 构建时预渲染为静态 HTML，无运行时服务端逻辑
- **React 岛屿**: 无共享根节点，每个 `.astro` 组件独立导入 React 岛屿，通过 `client:visible` / `client:idle` 按需水合
- **数据流**: 工具与版本数据随构建打包为 JSON，岛屿在客户端直接消费，天然支持任意静态托管

### 数据流

```
┌──────────────────┐    ┌─────────────────┐
│ tools-data.json  │───▶│  ToolsGrid.tsx  │
│ (71 tools)       │    │  (React Island) │
├──────────────────┤    ├─────────────────┤
│ releases.json    │───▶│ SmartDownloader │
│ (v3.2.0 + DL)    │    │  (React Island) │
└──────────────────┘    └─────────────────┘
```

- **工具数据**: 静态 JSON（源自桌面端 `electron/tool-defs.ts`，危险集合对齐 `DANGEROUS_TOOLS`）→ 本地筛选/搜索 UI
- **版本数据**: `src/data/releases.json` 与 `public/releases.json` 双写保持同步 → 自动平台检测下载按钮

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
# danger 对齐 electron/ipc/tool-handlers.ts 的 DANGEROUS_TOOLS（当前 15 个）
```

### 更新版本/下载数据

桌面端发布新版本时，同步修改 `src/data/releases.json` 与 `public/releases.json`（两处保持一致），并更新页面中的版本徽标与 `download_*` 翻译。

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

### GitHub Pages（默认，CI 自动部署）

`.github/workflows/deploy.yml` 会在推送到 `master` / `main` 时自动构建并部署：

```yaml
# 构建时注入子路径 BASE_PATH=/Auraxis-Agent-web/
```

### Cloudflare Pages（静态托管）

构建产物为纯静态目录，可直接部署到 Cloudflare Pages：

```bash
# 1. 构建生产版本
npm run build

# 2. 使用 Wrangler 部署
npx wrangler pages deploy ./dist --project-name=auraxis-website

# 3. 或通过 Cloudflare Dashboard 连接 Git 仓库自动部署
```

- 构建命令: `npm run build`
- 构建输出: `./dist`
- 根路径部署时无需 `BASE_PATH`；子路径部署时传入对应前缀

---

## React 岛屿一览

| 组件 | 文件 | 水合策略 | 功能 |
|------|------|----------|------|
| 主题切换 | `ThemeToggle.tsx` | `client:idle` | 深色/浅色模式切换 |
| 语言切换 | `LanguageToggle.tsx` | `client:idle` | 中/英双语切换 |
| 架构流程图 | `ArchitectureFlow.tsx` | `client:idle` | 双进程交互架构可视化 |
| 工具矩阵 | `ToolsGrid.tsx` | `client:visible` | 71 工具筛选/搜索/参数展示 |
| 智能下载 | `SmartDownloader.tsx` | `client:visible` | 自动检测平台，展示下载链接 |

---

## 与 Auraxis 桌面端的对应关系

本网站的数据与类型定义与 Auraxis Electron 应用保持同构映射：

| 概念 | 桌面端实现 | 网站数据源 |
|------|-----------|-----------|
| 71 个工具 | `electron/tool-defs.ts` | `src/data/tools-data.json` |
| 危险工具集合 | `electron/ipc/tool-handlers.ts` (DANGEROUS_TOOLS) | `tools-data.json` 的 danger 字段 |
| 权限策略 | `electron/contracts/core.ts` / `permission.ts` | `types.ts PermissionMode` |
| 发布版本 | 桌面端 `CHANGELOG.md` + GitHub Releases | `src/data/releases.json` |
| 平台检测 | `electron/utils/` | `src/utils/platform.ts` |

---

## 浏览器兼容性

项目构建产物面向现代浏览器（Chrome/Firefox/Safari/Edge 最近 2 个主版本），经由 Astro 的自动转译与 polyfill 策略提供兼容性保障。

---

## 许可证

[MIT License](./LICENSE)

© 2026 Auraxis Core Contributors.

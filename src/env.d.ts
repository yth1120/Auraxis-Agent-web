/// <reference path="../.astro/types.d.ts" />

// Cloudflare Pages Functions 在运行时注入 process.env polyfill
// 此处声明避免 TS 编译时 "找不到名称 process" 错误
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: string;
  }
}
declare const process: {
  env: NodeJS.ProcessEnv;
  uptime?: () => number;
} | undefined;

// ── Astro Locals 扩展（Cloudflare 适配器运行时） ──
// @astrojs/cloudflare 在运行时将 Cloudflare Pages 的
// EventContext（包含 .env）挂载到 Astro.locals.runtime
declare namespace App {
  interface Locals {
    runtime?: {
      env: Env;
    };
  }
}

// ── Cloudflare Pages 环境变量绑定 ──────────────────
// 通过 wrangler.toml [vars] 或 Cloudflare Dashboard 注入，
// 在 Hono 路由中通过 c.env 读取（当前站点无需任何密钥）
interface Env {
  [key: string]: unknown;
}

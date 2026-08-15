import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://yth1120.github.io/Auraxis-Agent-web/',
  // 默认根路径（Cloudflare Pages / 自托管）；GitHub Pages 部署时用 BASE_PATH 注入子路径
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  // GitHub Pages 环境不依赖图片优化服务，显式使用 noop 服务以消除构建告警
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  integrations: [react(), tailwind()],
});

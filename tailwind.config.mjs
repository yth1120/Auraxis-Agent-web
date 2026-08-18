/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
        mono: ['SF Mono', 'JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        // 顶层基础色：浅色主题主文字 ink / 深底正文与浅色主题底色 ivory
        ink: '#111216',
        // ivory 随主题切换：浅色 = 冷中性白 #FFFFFF，深色 = 正文 #F3F3F0
        ivory: 'rgb(var(--color-ivory-rgb) / <alpha-value>)',
        brand: {
          // Auraxis 品牌色板（对齐桌面端 tokens.css v3.0.0 UI 更新）
          page: 'rgb(var(--color-page-rgb) / <alpha-value>)', // 页面底衬：浅 #EAEDF1 / 深 #111216
          black: '#111216', // 品牌黑：深色主题页面底色
          dark: '#1B1D21', // 深色抬升面（终端/代码块深底）
          card: '#23262B', // 深色卡片背景
          border: '#454B55', // 深色 hairline 发丝线（更强对比）
          ink: '#111216', // 浅色主题主文字
          ink2: '#25292F', // 浅色主题次级文字（加深）
          text: '#E2E5E7', // 深色主题次级文字
          muted: 'rgb(var(--color-muted-rgb) / <alpha-value>)', // 次级/辅助文字（随主题切换）
          faint: 'rgb(var(--color-faint-rgb) / <alpha-value>)', // 三级弱文字（随主题切换）
          accent: 'rgb(var(--color-accent-rgb) / <alpha-value>)', // Aura 紫灰：浅 #6A6884 / 深 #8C8AA8
          ivory: '#F3F3F0', // 深底上的正文色
          hairline: 'rgb(var(--color-hairline-rgb) / <alpha-value>)', // 浅色主题 hairline
          success: 'rgb(var(--color-success-rgb) / <alpha-value>)', // 语义成功色（随主题切换）
          danger: 'rgb(var(--color-danger-rgb) / <alpha-value>)', // 语义危险色（随主题切换）
          warning: 'rgb(var(--color-warning-rgb) / <alpha-value>)', // 语义警告色（随主题切换）
        },
      },
      borderRadius: {
        // 圆角六档：5 / 6 / 8 / 12 / 14 / 9999（禁止碎角）
        axs: '5px',
        amd: '6px',
        alg: '8px',
        axl: '12px',
        a2xl: '14px',
      },
    },
  },
  plugins: [],
};

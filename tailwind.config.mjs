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
        ivory: '#F1F1EE',
        brand: {
          // Auraxis 品牌色板 —「Black is the Axis, White is the Structure, Purple is the Aura」
          black: '#111216', // 品牌黑：深色主题页面底色
          dark: '#171822', // 深色抬升面（终端/代码块深底）
          card: '#1C1E28', // 深色卡片背景
          border: '#262A35', // 深色 hairline 发丝线
          ink: '#111216', // 浅色主题主文字
          ink2: '#3E3D4A', // 浅色主题次级文字
          text: '#C9C8D6', // 深色主题正文
          muted: '#9B9AAE', // 次级/辅助文字（深浅主题通用）
          faint: '#8F8EA3', // 三级弱文字（深色模式下保证 4.5:1 以上对比度）
          accent: '#8C8AA8', // Aura 紫灰：仅约 3% 面积强调（焦点/选中/状态点）
          ivory: '#F1F1EE', // 象牙白：浅色主题底色 / 深底上的正文色
          hairline: '#E3E2DC', // 浅色主题 hairline
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

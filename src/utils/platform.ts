import type { Platform } from '../types';

/**
 * 通过 User Agent 嗅探用户的操作系统平台
 *
 * 仅在客户端（浏览器环境）调用。服务端渲染时返回 'linux' 作为安全降级。
 */
export function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') {
    return 'linux';
  }

  const ua = navigator.userAgent;

  // 移动端优先检测
  if (/iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(ua)) {
    return 'mobile';
  }

  // macOS（排除 iPhone/iPad UA 中的 Mac 关键词误判）
  if (/Mac|Macintosh/i.test(ua) && !/iPhone|iPad|iPod/i.test(ua)) {
    return 'mac';
  }

  // Windows
  if (/Windows|Win|Win32|Win64/i.test(ua)) {
    return 'windows';
  }

  // 其他均视为 Linux
  return 'linux';
}

/** 平台友好的展示名称映射 */
export const PLATFORM_LABELS: Record<Platform, string> = {
  windows: 'Windows',
  mac: 'macOS',
  linux: 'Linux',
  mobile: 'Mobile',
};

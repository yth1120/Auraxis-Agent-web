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

/**
 * 尝试识别 CPU 架构（Apple Silicon / x64）
 *
 * 优先使用 User-Agent Client Hints（Chrome / Edge），
 * 不可用时回退到 UA 关键字；macOS UA 无法可靠区分，默认 Intel。
 */
export async function detectArch(): Promise<'arm64' | 'x64' | 'unknown'> {
  if (typeof navigator === 'undefined') return 'unknown';

  try {
    const uaData = (navigator as unknown as {
      userAgentData?: {
        getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string }>;
      };
    }).userAgentData;
    if (uaData?.getHighEntropyValues) {
      const values = await uaData.getHighEntropyValues(['architecture']);
      if (values?.architecture === 'arm') return 'arm64';
      if (values?.architecture === 'x86') return 'x64';
    }
  } catch {
    // 忽略 UA-CH 不可用的情况，继续走 UA 回退
  }

  const ua = navigator.userAgent;
  if (/arm64|aarch64|armv8|Windows NT 10\.0; ARM64/i.test(ua)) return 'arm64';
  if (/Win64|x86_64|amd64/i.test(ua)) return 'x64';
  if (/Macintosh|Mac OS X/i.test(ua)) return 'x64';
  return 'unknown';
}

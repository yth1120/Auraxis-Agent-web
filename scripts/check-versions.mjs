/**
 * 版本号一致性检查。
 *
 * 站点版本号唯一来源是 src/data/releases.json，其余位置（顶栏徽标、页脚徽标、
 * 首屏横幅、下载区、meta description、中英文词典文案）都必须与它一致。
 * 发布新版本时改完那一个文件，跑这个脚本确认没有漏改。
 *
 * 用法：node scripts/check-versions.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const releasesRaw = await fs.readFile(path.join(root, 'src/data/releases.json'), 'utf8');
const releases = JSON.parse(releasesRaw);
const version = releases.version;
const tag = `v${version}`;

const publicRaw = await fs.readFile(path.join(root, 'public/releases.json'), 'utf8');
const publicReleases = JSON.parse(publicRaw);

const failures = [];

/** 1) 两份 releases.json 必须完全一致（public 那份供外部静态引用） */
if (JSON.stringify(releases) !== JSON.stringify(publicReleases)) {
  failures.push('public/releases.json 与 src/data/releases.json 内容不一致');
}

/** 2) 下载 URL 必须指向当前版本 */
for (const [platform, asset] of Object.entries(releases.downloads)) {
  const urls = [asset.url, asset.alt?.url].filter((u) => typeof u === 'string' && u.startsWith('http'));
  for (const url of urls) {
    if (!url.includes(tag)) failures.push(`${platform} 下载链接未指向 ${tag}：${url}`);
  }
}

/** 3) 源码中不得残留其它版本号的硬编码（词典里的文案必须与当前版本一致） */
const SCAN = [
  'src/components/Header.astro',
  'src/components/Footer.astro',
  'src/components/HeroSection.astro',
  'src/components/DownloadSection.astro',
  'src/layouts/BaseLayout.astro',
  'src/i18n/translations.ts',
];
const VERSION_RE = /v?(\d+\.\d+\.\d+)/g;
const SELF_VERSION_RE = /Auraxis CLI v(\d+\.\d+\.\d+)/;

for (const rel of SCAN) {
  const text = await fs.readFile(path.join(root, rel), 'utf8');
  for (const match of text.matchAll(VERSION_RE)) {
    const found = match[1];
    if (found === version) continue;
    // 站点自身版本之外，允许出现其它产品版本（如 Auraxis CLI v1.x）
    const line = text.slice(0, match.index).split('\n').pop() + text.slice(match.index, text.indexOf('\n', match.index));
    if (SELF_VERSION_RE.test(line)) continue;
    failures.push(`${rel} 出现与当前版本不一致的版本号 v${found}`);
  }
}

if (failures.length) {
  console.error(`版本一致性检查失败（当前版本 ${tag}）：`);
  for (const line of failures) console.error(`  - ${line}`);
  process.exit(1);
}

console.log(`version ok: 站点版本 ${tag}，两处 releases.json 一致，源码无残留旧版本号`);

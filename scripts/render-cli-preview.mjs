/**
 * 把 Auraxis CLI 的真实会话渲染成终端预览图（public/screenshots/cli-session.png）。
 *
 * 内容取自一次真实运行（deepseek-flash，4 次工具调用），排版按 CLI 终端界面还原：
 * 会话头、用户输入、执行时间轴（╭ ├ ╰ 引导线 + ⎿ 输出缩进）、助手回复、状态行。
 * 文字按“列”定位，因此耗时是右对齐的，和真实 TUI 一致。
 *
 * 想换成自己的真实截图时，直接替换同名 PNG 即可（建议 1600 宽、16:10 左右）。
 *
 * 用法：node scripts/render-cli-preview.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'screenshots');
const outFile = path.join(outDir, 'cli-session.png');

const COLS = 84; // 终端宽度（列）
const LEFT = 20; // 左内边距
const FONT_SIZE = 20;
// Consolas 的字符宽约为字号的 0.55 倍，单元格宽必须与之一致，否则文字会被拉伸/压扁。
const CELL = Math.round(FONT_SIZE * 0.55 * 100) / 100;
const LINE_HEIGHT = 30;
const CONTENT_TOP = 88;
const WIDTH = Math.round(LEFT * 2 + COLS * CELL);
const DURATION_END_COL = 76; // 耗时右对齐到该列

const INK = '#F3F3F0';
const MUTED = '#9DA2A9';
const FAINT = '#6E747C';
const ACCENT = '#A6A4C2';
const SUCCESS = '#4FAE86';
const WARNING = '#C79A5C';
const BG = '#16181C';
const BAR = '#1B1D21';
const BORDER = '#2A2E35';

const C = { d: INK, i: MUTED, f: FAINT, a: ACCENT, s: SUCCESS, w: WARNING };

/**
 * 每行是片段数组；col 指定起始列，end 指定右对齐结束列（用于耗时列）。
 * 文本与真实 TUI 一致，使用中文界面文案；框线字符由矢量线条绘制（见 DRAW）。
 */
const LINES = [
  [[{ t: '模型 ', c: 'i' }, { t: 'deepseek-flash', c: 'd' }, { t: ' · 模式 ', c: 'i' }, { t: 'auto', c: 'a' }, { t: ' · 思考 ', c: 'i' }, { t: 'high', c: 'd' }]],
  [[{ t: '路径 ', c: 'i' }, { t: '~/projects/demo', c: 'd' }, { t: ' · 分支 ', c: 'i' }, { t: 'main', c: 'd' }, { t: '会话 00:00:07', end: 84, c: 'i' }]],
  [],
  [[{ t: '❯ ', c: 'a' }, { t: '在 shot.txt 写入 ok，然后读回来确认', c: 'd' }]],
  [],
  [[{ t: '● ', c: 'w' }, { t: '执行中', c: 'w' }, { t: ' · 4 步 · 1.3s', c: 'i' }]],
  [
    [{ t: '╭─ ✓ ▤ ListFiles ', c: 'i' }, { t: 'path: .', c: 'f' }],
    [{ t: '1ms', end: DURATION_END_COL, c: 'i' }],
  ],
  [[{ t: '│  ⎿ ', c: 'f' }, { t: '- demo', c: 'f' }]],
  [
    [{ t: '├─ ✓ ▤ Read ', c: 'i' }, { t: 'file_path: package.json', c: 'f' }],
    [{ t: '2ms', end: DURATION_END_COL, c: 'i' }],
  ],
  [[{ t: '│  ⎿ ', c: 'f' }, { t: '1| { "name": "demo", "type": "module" }', c: 'f' }]],
  [
    [{ t: '├─ ✓ ✎ Write ', c: 'i' }, { t: 'file_path: shot.txt', c: 'f' }],
    [{ t: '2ms', end: DURATION_END_COL, c: 'i' }],
  ],
  [[{ t: '│  ⎿ ', c: 'f' }, { t: 'OK 已写入 shot.txt', c: 'f' }]],
  [
    [{ t: '╰─ ✓ ▤ Read ', c: 'i' }, { t: 'file_path: shot.txt', c: 'f' }],
    [{ t: '1ms', end: DURATION_END_COL, c: 'i' }],
  ],
  [[{ t: '   ⎿ ', c: 'f' }, { t: '1| ok', c: 'f' }]],
  [],
  [[{ t: '已完成：shot.txt 已写入 ok，读回确认第 1 行为 ok。', c: 'd' }]],
  [],
  [[{ t: '模型 ', c: 'i' }, { t: 'deepseek-flash', c: 'd' }, { t: ' · 模式 ', c: 'i' }, { t: 'auto', c: 'a' }, { t: ' · 思考 ', c: 'i' }, { t: 'high', c: 'd' }]],
  [[{ t: '✓ ', c: 's' }, { t: '就绪', c: 's' }, { t: ' · iter 4 · tools 4 · 14k in / 0.4k out', c: 'f' }]],
];

/** 框线字符用几何线条绘制：Consolas 缺少这些字形，交给字体回退会错位。 */
const DRAW = new Set(['╭', '├', '╰', '│', '─']);

const HEIGHT = CONTENT_TOP + LINES.length * LINE_HEIGHT + 26;

// 数据里每行可能写成 [seg, seg] 或 [[seg, seg]]，统一压平成一维片段列表。
const normalize = (line) => (Array.isArray(line[0]) ? line.flat() : line);

function escapeXml(value) {
  return value.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[ch]);
}

function isWide(ch) {
  const code = ch.codePointAt(0) ?? 0;
  return (
    (code >= 0x1100 && code <= 0x115f) ||
    (code >= 0x2e80 && code <= 0xa4cf) ||
    (code >= 0xac00 && code <= 0xd7a3) ||
    (code >= 0xf900 && code <= 0xfaff) ||
    (code >= 0xfe30 && code <= 0xfe4f) ||
    (code >= 0xff00 && code <= 0xff60) ||
    (code >= 0xffe0 && code <= 0xffe6) ||
    (code >= 0x20000 && code <= 0x2ffff)
  );
}

function cellWidth(text) {
  let width = 0;
  for (const ch of text) width += isWide(ch) ? 2 : 1;
  return width;
}

const xOf = (col) => LEFT + (col - 1) * CELL;

const MONO = 'Consolas, monospace';
const CJK = "'Microsoft YaHei UI', 'Microsoft YaHei', sans-serif";
const BOX = "'Nimbus Mono PS', 'DejaVu Sans Mono', monospace";

const boxTop = (baseline) => baseline - FONT_SIZE * 0.3;
const boxMid = (baseline) => baseline - FONT_SIZE * 0.29;
const boxBottom = (baseline) => baseline - 1;

/** 单个单元格上绘制一段 1px 线条，用于框线字符。 */
function edge(x1, y1, x2, y2, color) {
  return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${color}" stroke-width="1.4" stroke-linecap="round" fill="none"/>`;
}

function drawGlyph(ch, x, baseline, color) {
  const mid = x + CELL / 2;
  const top = boxTop(baseline);
  const middle = boxMid(baseline);
  const bottom = boxBottom(baseline);
  switch (ch) {
    case '─':
      return edge(x, middle, x + CELL, middle, color);
    case '│':
      return edge(mid, top - 4, mid, bottom + 4, color);
    case '├':
      return edge(mid, top - 4, mid, bottom + 4, color) + edge(mid, middle, x + CELL, middle, color);
    case '╭':
      return `<path d="M${mid.toFixed(1)} ${bottom.toFixed(1)} L${mid.toFixed(1)} ${(middle + 3).toFixed(1)} Q${mid.toFixed(1)} ${middle.toFixed(1)} ${(mid + 3).toFixed(1)} ${middle.toFixed(1)} L${(x + CELL).toFixed(1)} ${middle.toFixed(1)}" stroke="${color}" stroke-width="1.4" stroke-linecap="round" fill="none"/>`;
    case '╰':
      return `<path d="M${mid.toFixed(1)} ${top.toFixed(1)} L${mid.toFixed(1)} ${(middle - 3).toFixed(1)} Q${mid.toFixed(1)} ${middle.toFixed(1)} ${(mid + 3).toFixed(1)} ${middle.toFixed(1)} L${(x + CELL).toFixed(1)} ${middle.toFixed(1)}" stroke="${color}" stroke-width="1.4" stroke-linecap="round" fill="none"/>`;
    default:
      return '';
  }
}

/** 一行里的片段按列推进：CJK 段整段交给雅黑，其余交给等宽字体，框线字符走矢量线条。 */
function renderLine(segments, baseline) {
  const out = [];
  let cursor = segments[0].col ?? 1;
  for (const seg of segments) {
    const targetCol = seg.col ?? cursor;
    const text = seg.end ? ' '.repeat(Math.max(0, seg.end - cellWidth(seg.t) - cursor + 1)) + seg.t : seg.t;
    let col = targetCol;
    const color = C[seg.c] ?? INK;
    let run = '';
    let runCjk = null;
    let runStart = targetCol;
    const flush = () => {
      if (!run) return;
      out.push(
        `<text x="${xOf(runStart).toFixed(1)}" y="${baseline.toFixed(1)}" fill="${color}" font-family="${runCjk ? CJK : MONO}" font-size="${FONT_SIZE}" xml:space="preserve">${escapeXml(run)}</text>`,
      );
      run = '';
    };
    for (const ch of text) {
      if (DRAW.has(ch)) {
        flush();
        runCjk = null;
        const x = xOf(col);
        // 先用回退字体把字形画出来（保证字符位置不漂移），再叠加矢量线条。
        out.push(
          `<text x="${x.toFixed(1)}" y="${baseline.toFixed(1)}" fill="${BG}" font-family="${BOX}" font-size="${FONT_SIZE}" xml:space="preserve">${escapeXml(ch)}</text>`,
        );
        out.push(drawGlyph(ch, x, baseline, color));
        col += 1;
        continue;
      }
      const cjk = isWide(ch);
      if (run && cjk !== runCjk) {
        flush();
      }
      if (!run) {
        runCjk = cjk;
        runStart = col;
      }
      run += ch;
      col += cjk ? 2 : 1;
    }
    flush();
    cursor = targetCol + cellWidth(text);
  }
  return out.join('');
}

const body = [];
LINES.forEach((segments, index) => {
  const baseline = CONTENT_TOP + index * LINE_HEIGHT;
  const flat = normalize(segments);
  if (flat.length > 0) body.push(renderLine(flat, baseline));
});

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" rx="16" fill="${BG}"/>
  <path d="M16 0h${WIDTH - 32}a16 16 0 0 1 16 16v38H0V16A16 16 0 0 1 16 0Z" fill="${BAR}"/>
  <circle cx="34" cy="27" r="7" fill="#E06C6C"/>
  <circle cx="58" cy="27" r="7" fill="#E0B96C"/>
  <circle cx="82" cy="27" r="7" fill="#6CC08B"/>
  <text x="${WIDTH / 2}" y="33" text-anchor="middle" fill="${FAINT}" font-family="'Nimbus Mono PS', 'DejaVu Sans Mono', Consolas, 'Courier New', monospace" font-size="17">auraxis — interactive session</text>
  <line x1="0" y1="54" x2="${WIDTH}" y2="54" stroke="${BORDER}" stroke-width="1"/>
  <rect x="0.5" y="0.5" width="${WIDTH - 1}" height="${HEIGHT - 1}" rx="16" fill="none" stroke="${BORDER}" stroke-width="1"/>
  ${body.join('\n  ')}
</svg>
`;

await fs.mkdir(outDir, { recursive: true });
await sharp(Buffer.from(svg), { density: 144 }).png({ compressionLevel: 9 }).toFile(outFile);
const stat = await fs.stat(outFile);
console.log(`已生成 ${path.relative(root, outFile)} · ${WIDTH}×${HEIGHT} · ${Math.round(stat.size / 1024)} KB`);

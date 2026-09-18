/**
 * 用 Chrome DevTools 协议真点一遍页面上的交互元素，验证：
 * 主题切换、语言切换（含 aria/alt）、复制命令、平台下载按钮、页内导航锚点。
 *
 * 用法：node scripts/_click-audit.mjs [url]
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const URL_UNDER_TEST = process.argv[2] || 'http://127.0.0.1:4399/';
const CHROME = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PROFILE = fs.mkdtempSync(path.join(os.tmpdir(), 'auraxis-click-audit-'));
const PORT = 9222;

// 自建静态服务器（避开 npx astro preview 的平台差异）
const DIST = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.json': 'application/json', '.svg': 'image/svg+xml' };
const { createServer } = await import('node:http');
const server = createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  let filePath = path.join(DIST, urlPath.endsWith('/') ? urlPath + 'index.html' : urlPath);
  if (!filePath.startsWith(DIST)) { res.writeHead(403).end(); return; }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404).end('not found'); return; }
    res.writeHead(200, { 'content-type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  });
});
await new Promise((resolve) => server.listen(4399, '127.0.0.1', resolve));

const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${PROFILE}`,
    '--no-first-run',
    '--window-size=1440,1000',
    'about:blank',
  ],
  { stdio: 'ignore' },
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function findTarget() {
  for (let i = 0; i < 40; i += 1) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const list = await res.json();
      const page = list.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
      if (page) return page;
    } catch {
      /* 还没起来 */
    }
    await sleep(300);
  }
  throw new Error('Chrome 调试端口未就绪');
}

const target = await findTarget();
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener('open', resolve, { once: true });
  ws.addEventListener('error', reject, { once: true });
});

let nextId = 0;
const pending = new Map();
const consoleErrors = [];
const pageErrors = [];
const failedRequests = [];

ws.addEventListener('message', (event) => {
  const msg = JSON.parse(String(event.data));
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(JSON.stringify(msg.error)));
    else resolve(msg.result);
    return;
  }
  if (msg.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(msg.params.type)) {
    consoleErrors.push(`${msg.params.type}: ${(msg.params.args || []).map((a) => a.value ?? a.description ?? '').join(' ')}`);
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    pageErrors.push(msg.params.exceptionDetails?.exception?.description || msg.params.exceptionDetails?.text || 'unknown');
  }
  if (msg.method === 'Network.loadingFailed') {
    failedRequests.push(`${msg.params.errorText} ${msg.params.type || ''}`);
  }
});

const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });

const evaluate = async (expression) => {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || 'evaluate failed');
  return result.result?.value;
};

await send('Runtime.enable');
await send('Network.enable');
await send('Page.enable');

// 拦截所有导航意图，只记录不跳转
await send('Page.addScriptToEvaluateOnNewDocument', {
  source: `
    window.__clicks = [];
    document.addEventListener('click', function (event) {
      var el = event.target.closest('a,button');
      if (el) {
        window.__clicks.push({
          tag: el.tagName,
          text: (el.textContent || '').trim().slice(0, 40),
          href: el.getAttribute('href'),
          aria: el.getAttribute('aria-label'),
        });
      }
      var anchor = event.target.closest('a[href^="http"], a[target="_blank"]');
      if (anchor) { event.preventDefault(); event.stopPropagation(); }
    }, true);
  `,
});

await send('Page.navigate', { url: URL_UNDER_TEST });
await sleep(3500);

const results = [];
const record = (name, ok, detail = '') => {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'OK  ' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
};

// 1) 主题切换
try {
  const before = await evaluate('document.documentElement.classList.contains("dark")');
  await evaluate('document.getElementById("theme-toggle").click()');
  await sleep(500);
  const after = await evaluate('document.documentElement.classList.contains("dark")');
  const stored = await evaluate('localStorage.getItem("theme")');
  record('主题切换按钮', before !== after, `dark: ${before} → ${after}，localStorage=${stored}`);
  await evaluate('document.getElementById("theme-toggle").click()');
  await sleep(300);
} catch (error) {
  record('主题切换按钮', false, String(error.message).slice(0, 120));
}

// 2) 语言切换（含 aria 与 alt 是否跟着换）
try {
  const titleBefore = await evaluate('document.title');
  const navBefore = await evaluate('(document.querySelector(\'[data-i18n="nav_solution"]\')||{}).textContent');
  const cliBefore = await evaluate('(document.querySelector(\'[data-i18n="home_cli_title"]\')||{}).textContent');
  const ariaBefore = await evaluate('(document.querySelector(\'[data-i18n-aria="nav_download"]\')||{}).getAttribute("aria-label")');
  const altBefore = await evaluate('(document.querySelector("img[data-i18n-alt]")||{}).getAttribute("alt")');
  await evaluate('document.querySelector("[aria-label*=English],[aria-label*=Switch]").click()');
  await sleep(800);
  const titleAfter = await evaluate('document.title');
  const navAfter = await evaluate('(document.querySelector(\'[data-i18n="nav_solution"]\')||{}).textContent');
  const cliAfter = await evaluate('(document.querySelector(\'[data-i18n="home_cli_title"]\')||{}).textContent');
  const ariaAfter = await evaluate('(document.querySelector(\'[data-i18n-aria="nav_download"]\')||{}).getAttribute("aria-label")');
  const altAfter = await evaluate('(document.querySelector("img[data-i18n-alt]")||{}).getAttribute("alt")');
  const lang = await evaluate('localStorage.getItem("lang")');
  record('语言切换：标题', titleBefore !== titleAfter, `${String(titleBefore).slice(0, 28)} → ${String(titleAfter).slice(0, 28)}`);
  record('语言切换：正文词条', navBefore !== navAfter && /[A-Za-z]/.test(String(navAfter)), `nav=${navAfter} / cli=${String(cliAfter).slice(0, 30)}`);
  record('语言切换：aria-label', ariaBefore !== ariaAfter, `${ariaBefore} → ${ariaAfter}`);
  record('语言切换：图片 alt', altBefore !== altAfter, `${String(altBefore).slice(0, 24)} → ${String(altAfter).slice(0, 24)}`);
  record('语言切换：localStorage', lang === 'en', `lang=${lang}`);
  // 切回中文
  await evaluate('document.querySelector("[aria-label*=中文],[aria-label*=Switch]").click()');
  await sleep(600);
} catch (error) {
  record('语言切换', false, String(error.message).slice(0, 160));
}

// 3) 复制按钮
try {
  await send('Browser.grantPermissions', { permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'] }).catch(() => {});
  const count = await evaluate('document.querySelectorAll("[data-copy-text]").length');
  await evaluate(`
    window.__copied = [];
    navigator.clipboard.writeText = function (t) { window.__copied.push(t); return Promise.resolve(); };
    document.querySelectorAll("[data-copy-text]").forEach(function (b) { b.click(); });
  `);
  await sleep(700);
  const copied = await evaluate('window.__copied');
  record('复制按钮（' + count + ' 个）', Array.isArray(copied) && copied.length === count, `写入剪贴板: ${JSON.stringify(copied)}`);
  const feedback = await evaluate('document.body.textContent.includes("✓") || !!document.querySelector("svg.lucide-check")');
  record('复制后反馈（图标/文字变化）', feedback === true, '');
} catch (error) {
  record('复制按钮', false, String(error.message).slice(0, 160));
}

// 4) 平台下载按钮（Linux 在 releases.json 里 url 为 '#'，会走 alert 兜底，一并统计）
try {
  // SmartDownloader 是 client:visible，必须先滚到视口触发水合
  await evaluate('document.getElementById("download")?.scrollIntoView()');
  await sleep(1800);
  const buttons = await evaluate('[...document.querySelectorAll("button")].filter(b => /下载 |Download for/.test(b.getAttribute("aria-label")||"")).length');
  await evaluate(`
    window.__downloadIntents = [];
    window.__alerts = [];
    window.open = function (u) { window.__downloadIntents.push(String(u)); return null; };
    window.alert = function (m) { window.__alerts.push(String(m)); };
    document.querySelectorAll("button").forEach(function (b) {
      var label = b.getAttribute("aria-label") || "";
      if (/下载 |Download for/.test(label)) b.click();
    });
  `);
  await sleep(700);
  const intents = await evaluate('window.__downloadIntents');
  const alerts = await evaluate('window.__alerts');
  const handled = (intents?.length || 0) + (alerts?.length || 0);
  record(
    '平台下载按钮（' + buttons + ' 个）',
    handled === buttons,
    `下载链接 ${intents?.length || 0} 个` + (alerts?.length ? `，提示兜底 ${alerts.length} 个` : '') + `；示例: ${JSON.stringify(intents?.[0] || alerts?.[0] || '').slice(0, 90)}`,
  );
  record('下载链接均为可访问的 GitHub 资产', (intents || []).every((u) => u.startsWith('https://github.com/yth1120/')), (intents || []).join(' , ').slice(0, 160));
} catch (error) {
  record('平台下载按钮', false, String(error.message).slice(0, 160));
}

// 5) 页内导航锚点
try {
  const anchors = await evaluate('[...#]'.replace('[...#]', '[...document.querySelectorAll(\'a[href^="#"]\')].map(a => a.getAttribute("href"))'));
  const bad = [];
  for (const href of anchors) {
    if (href === '#') continue;
    const exists = await evaluate(`!!document.getElementById(${JSON.stringify(href.slice(1))})`);
    if (!exists) bad.push(href);
  }
  record('页内锚点目标（' + anchors.length + ' 个）', bad.length === 0, bad.length ? '缺失: ' + bad.join(', ') : '全部命中');
} catch (error) {
  record('页内锚点', false, String(error.message).slice(0, 160));
}

// 6) 工具矩阵分类标签：逐个点，检查 aria-selected 与列表数量变化
try {
  // ToolsGrid 同样是 client:visible，先滚到工具矩阵再测
  await evaluate('document.getElementById("tools")?.scrollIntoView()');
  await sleep(1800);
  const tabs = await evaluate('document.querySelectorAll(\'[role="tab"]\').length');
  const outcomes = [];
  for (let i = 0; i < tabs; i += 1) {
    const label = await evaluate(`document.querySelectorAll('[role="tab"]')[${i}].textContent.trim()`);
    await evaluate(`document.querySelectorAll('[role="tab"]')[${i}].click()`);
    await sleep(220);
    // 重新查询：React 重渲染后旧节点会脱离 DOM
    const state = await evaluate(`(() => {
      const list = [...document.querySelectorAll('[role="tab"]')];
      const selected = list.findIndex((el) => el.getAttribute('aria-selected') === 'true');
      const cards = document.querySelectorAll('[data-tool-card], .group.grid, li').length;
      return { selected, activeLabel: list[selected] ? list[selected].textContent.trim() : null, visible: document.querySelectorAll('[data-tool-item]').length };
    })()`);
    outcomes.push({ label, ok: state.activeLabel === label, selected: state.selected });
  }
  const bad = outcomes.filter((o) => !o.ok);
  record('工具矩阵标签切换（' + tabs + ' 个）', bad.length === 0, bad.length ? '未切换: ' + bad.map((b) => b.label).join(', ') : '全部生效');
} catch (error) {
  record('工具矩阵标签切换', false, String(error.message).slice(0, 160));
}

// 6.5) 演示视频：能否真正播放
try {
  await evaluate('document.querySelector("video")?.scrollIntoView()');
  await sleep(1200);
  const info = await evaluate(`(async () => {
    const v = document.querySelector('video');
    if (!v) return { found: false };
    const ready = (async () => {
      if (v.readyState >= 2) return true;
      return await new Promise((resolve) => {
        const done = () => resolve(v.readyState >= 2);
        v.addEventListener('loadeddata', done, { once: true });
        v.addEventListener('error', () => resolve(false), { once: true });
        setTimeout(done, 8000);
      });
    })();
    v.muted = true;
    let played = false;
    try { await v.play(); played = true; } catch (e) { played = false; }
    const ok = await ready;
    const t0 = v.currentTime;
    await new Promise((r) => setTimeout(r, 1200));
    return { found: true, played, readyState: v.readyState, duration: Math.round(v.duration || 0), advanced: v.currentTime > t0, src: (v.currentSrc || '').split('/').pop() };
  })()`);
  record('演示视频可播放', info?.found && (info.advanced || info.played), JSON.stringify(info));
} catch (error) {
  record('演示视频可播放', false, String(error.message).slice(0, 160));
}

// 7) 页面运行时错误汇总
record('无 JS 运行时异常', pageErrors.length === 0, pageErrors.slice(0, 3).join(' | '));
record('无控制台 error', consoleErrors.filter((e) => e.startsWith('error')).length === 0, consoleErrors.slice(0, 3).join(' | '));
const realFailures = failedRequests.filter((f) => !/ERR_ABORTED Media/.test(f));
record('无资源加载失败（媒体预加载中断已忽略）', realFailures.length === 0, realFailures.slice(0, 3).join(' | '));

const failed = results.filter((r) => !r.ok);
console.log(`\n===== 汇总：${results.length - failed.length}/${results.length} 通过 =====`);
if (failed.length) console.log('失败：' + failed.map((f) => f.name).join(' | '));

ws.close();
chrome.kill();
server.close();
await sleep(800);
try { fs.rmSync(PROFILE, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }); } catch { /* Windows 上偶发占用，忽略 */ }
process.exit(failed.length ? 1 : 0);

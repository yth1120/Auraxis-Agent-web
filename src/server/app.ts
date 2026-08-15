import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { releasesRoute } from './routes/releases';
import { toolsRoute } from './routes/tools';

/**
 * Hono 应用工厂
 *
 * 由 Astro catch-all API 路由 src/pages/api/[...route].ts 调用。
 * 兼容 Cloudflare Workers 运行时（无 Node.js 专有 API）。
 */

/** 模块初始化时间戳（替代 process.uptime()，Cloudflare Workers 兼容） */
const START_TIME = Date.now();

export function createApp(): Hono<{ Bindings: Env }> {
  const app = new Hono<{ Bindings: Env }>();

  // ── 全局中间件 ──
  // CORS：允许所有来源（公网官网场景）
  app.use('*', cors({ origin: '*' }));

  // 请求日志（仅非生产环境，CF Pages 注入 NODE_ENV）
  if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
    app.use('*', logger());
  }

  // ── 健康检查 ──
  app.get('/api/health', (c) =>
    c.json({
      success: true,
      data: {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: (Date.now() - START_TIME) / 1000,
      },
    })
  );

  // ── 业务路由 ──
  app.route('/api/releases', releasesRoute);
  app.route('/api/tools', toolsRoute);

  // ── 404 兜底 ──
  app.notFound((c) =>
    c.json(
      {
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: `路由 ${c.req.method} ${c.req.path} 不存在`,
        },
      },
      404
    )
  );

  // ── 全局错误处理 ──
  app.onError((err, c) => {
    console.error('[Hono Error]', err);
    const isProd = typeof process !== 'undefined' && process.env?.NODE_ENV === 'production';
    return c.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: isProd ? '服务器内部错误' : err.message,
        },
      },
      500
    );
  });

  return app;
}

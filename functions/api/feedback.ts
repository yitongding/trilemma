// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Env {
  // If you bind databases in Cloudflare dashboard, they appear here:
  // DB: D1Database;
  // KV: KVNamespace;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const requestBody = (await context.request.json()) as Record<string, unknown>;
    const { trilemmaId, selectedPair, rating, comment } = requestBody;

    if (!trilemmaId || !selectedPair) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // --- 全栈数据库绑定预留示例 (D1 Database Pre-bind Example) ---
    // If you bind a D1 database named 'DB', you can run SQL queries like:
    // await context.env.DB.prepare(
    //   "INSERT INTO feedback (trilemma_id, selected_pair, rating, comment, created_at) VALUES (?, ?, ?, ?, ?)"
    // ).bind(trilemmaId, JSON.stringify(selectedPair), rating, comment, Date.now()).run();

    return new Response(
      JSON.stringify({
        success: true,
        message: '🎉 投票与反馈已通过 Cloudflare Edge Workers 成功接收！已为您预留 D1/KV 数据库写入接口。',
        data: {
          trilemmaId,
          selectedPair,
          rating: rating || 5,
          comment: comment || '',
          timestamp: new Date().toISOString(),
          ip: context.request.headers.get('cf-connecting-ip') || '127.0.0.1'
        }
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// Enable CORS Preflight requests for local/cross-origin testing
export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
};

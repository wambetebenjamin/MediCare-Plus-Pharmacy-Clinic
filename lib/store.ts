/**
 * Persistence layer.
 *
 * Uses Vercel KV when the environment variables are present
 * (KV_REST_API_URL / KV_REST_API_TOKEN, automatically injected when a
 * KV database is linked to the Vercel project). During local development
 * or preview without KV, records are logged to the server console so the
 * app remains fully functional.
 */

type KVClient = typeof import("@vercel/kv").kv;

let warned = false;

async function getKV(): Promise<KVClient | null> {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    if (!warned) {
      warned = true;
      console.warn(
        "[store] Vercel KV not configured (KV_REST_API_URL / KV_REST_API_TOKEN missing). " +
          "Falling back to console logging."
      );
    }
    return null;
  }
  const { kv } = await import("@vercel/kv");
  return kv;
}

/** Append a record to a list key (appointments, enquiries…). */
export async function saveRecord<T extends Record<string, unknown>>(
  key: string,
  record: T
): Promise<void> {
  const kv = await getKV();
  if (kv) {
    await kv.lpush(key, JSON.stringify(record));
  } else {
    console.log(`[store] ${key}:`, JSON.stringify(record));
  }
}

/** Add an email to a deduplicated subscriber set. Returns true if new. */
export async function addSubscriber(email: string): Promise<boolean> {
  const kv = await getKV();
  if (kv) {
    const added = await kv.sadd("mcp:newsletter:subscribers", email);
    return added === 1;
  }
  console.log("[store] newsletter subscriber:", email);
  return true;
}

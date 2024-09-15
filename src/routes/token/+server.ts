import { CACHE_BYPASS_TOKEN } from '$env/static/private';
import { json } from '@sveltejs/kit';

export const config: import('@sveltejs/adapter-vercel').Config = {
  isr: {
    expiration: false,
    bypassToken: CACHE_BYPASS_TOKEN,
  },
};

export function GET() {
  return json({ time: Date.now() });
}

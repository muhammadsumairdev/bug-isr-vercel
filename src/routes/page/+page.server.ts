import { CACHE_BYPASS_TOKEN } from '$env/static/private';

export const config: import('@sveltejs/adapter-vercel').Config = {
  isr: {
    expiration: false,
    bypassToken: CACHE_BYPASS_TOKEN,
  },
};

export function load() {
  return { time: Date.now() };
}

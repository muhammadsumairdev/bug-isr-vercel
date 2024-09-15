import { json } from '@sveltejs/kit';

export const config: import('@sveltejs/adapter-vercel').Config = {
  isr: {
    expiration: 30,
  },
};

export function GET() {
  return json({ time: Date.now() });
}

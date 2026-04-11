import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://andywen78.github.io',
  base: '/Mypage',
  integrations: [tailwind()],
});

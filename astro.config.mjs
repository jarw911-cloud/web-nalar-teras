// @ts-check

import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config'; // Pastikan baris ini ada
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://web-nalar-teras.vercel.app', // Ganti dengan URL asli Kang Mas
  integrations: [sitemap()],


  vite: {
    plugins: [tailwindcss()],
  },
});
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',         // <---- Add this if missing
  adapter: vercel({}),
  vite: {
    plugins: [tailwindcss()],
    envPrefix: ['OPENAI_', 'VITE_'],
  },
  integrations: [react()],
});
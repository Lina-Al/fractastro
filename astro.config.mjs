// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [preact()],
   markdown: {
    remarkPlugins: [remarkGfm]
  }
});


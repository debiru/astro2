import { defineConfig } from 'astro/config';
import myExtIntegration from '/src/config/myExtIntegration';

// refs. https://astro.build/config
export default defineConfig({
  site: 'https://astro2.debiru.net',
  trailingSlash: 'ignore',
  compressHTML: false,
  integrations: [myExtIntegration()],
  build: {
    format: 'file',
  },
});

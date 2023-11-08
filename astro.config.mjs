import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://neon-marzipan-6bbabd.netlify.app/",
  integrations: [preact()]
});
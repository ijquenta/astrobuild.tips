// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()]
});

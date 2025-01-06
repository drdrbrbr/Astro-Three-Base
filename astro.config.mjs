import { defineConfig } from 'astro/config';
import { qrcode } from 'vite-plugin-qrcode';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://test.com/",

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/vars.scss" as *;`,
          api: "modern-compiler"
        }
      }
    },
    plugins: [qrcode()]
  },
  integrations: [alpinejs()],
});
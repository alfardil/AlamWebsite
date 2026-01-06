// @ts-check

import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Enable React to support React JSX components.
  integrations: [react()],
  redirects: {
    "/resume": "/Alfardil_Resume.pdf",
  },
});

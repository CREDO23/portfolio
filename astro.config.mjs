// @ts-check
import { defineConfig } from "astro/config";

// Static site: `astro build` writes plain HTML/CSS to `dist/`.
export default defineConfig({
  site: "https://thierrybakera.com",
  output: "static",
});

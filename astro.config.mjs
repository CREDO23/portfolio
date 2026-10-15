// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// Static site: `astro build` writes plain HTML/CSS to `dist/`.
export default defineConfig({
  site: "https://thierrybakera.com",
  output: "static",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: [
              "./node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
            ],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      fallbacks: ["ui-monospace", "monospace"],
      options: {
        variants: [
          {
            src: [
              "./node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2",
            ],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],
});

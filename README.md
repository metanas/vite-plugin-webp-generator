# vite-plugin-webp-generator

Auto generator webp image for Vite projects

WebP is a modern image format that provides superior lossless and lossy compression for images on the web. Using WebP, webmasters and web developers can create smaller, richer images that make the web faster.

WebP lossless images are 26% smaller compared to PNGs. WebP lossy images are 25-34% smaller than comparable JPEG images at equivalent SSIM quality index.



## Install

```bash
npm i vite-plugin-webp-generator --save-dev
```
or
```bash
yarn add -D vite-plugin-webp-generator
```

## Usage

Add to `vite.config.js`

```ts
// vite.config.js
import { defineConfig } from "vite";
import ViteWebp from 'vite-plugin-webp-generator'

export default {
  plugins: [
    ViteWebp({
      extensions: ["png", "jpg"]
    }),
  ],
};
```





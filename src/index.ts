import { dest, src } from "gulp";
import GWebP from "gulp-cwebp";
import { existsSync } from "fs";
import { extname, dirname } from "path";
import type { Plugin } from "vite";

export default ({
  extensions = ["png", "jpg"],
  logger = false,
}: VitePluginWebpGenerator): Plugin => {
  return {
    name: "vite-plugin-webp-generator",
    enforce: "post",
    transform: async (code: string, id: string) => {
      if (
        new RegExp(`.(${extensions.join("|")})$`).test(id) &&
        !id.includes("node_modules") &&
        !existsSync(id.replace(extname(id), ".webp"))
      ) {
        src(id)
          .pipe(GWebP())
          .pipe(dest(dirname(id)));
        logger && console.info(`Generate ${id.replace(extname(id), ".webp")}`)
      }
    },
  };
};

import { dest, src } from "gulp";
import GWebP from "gulp-cwebp";
import { existsSync } from "fs";
import { extname, dirname } from "path";
import type { Plugin } from "vite";

export default ({
  extensions = ["png", "jpg"],
}: VitePluginWebpGenerator): Plugin => {
  return {
    name: "vite-plugin-webp-generator",
    enforce: "post",
    transform: async (code: string, id: string) => {
      if (
        new RegExp(`.(${extensions.join("|")})$`).test(id) &&
        !existsSync(id.replace(extname(id), "webp"))
      ) {
        src(id)
          .pipe(GWebP())
          .pipe(dest(dirname(id)));
      }
    },
  };
};
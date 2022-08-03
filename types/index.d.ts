declare interface VitePluginWebpGenerator {
	extensions?: ("png" | "jpg" | "svg" | "jpeg")[];
	logger?: boolean;
}

declare module "gulp-cwebp";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/container.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "@mojitane/button"],
  ...options,
}));


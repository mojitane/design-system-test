import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/container.tsx"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react/jsx-runtime", "@mojitane/button"],
});


import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/input.tsx"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react/jsx-runtime", "@mojitane/container"],
});

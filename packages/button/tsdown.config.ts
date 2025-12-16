import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/button.tsx"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react/jsx-runtime"],
});

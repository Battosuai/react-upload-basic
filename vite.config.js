import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import * as packageJson from "./package.json";
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve("src", "lib/index.js"),
      name: "react-upload-basic",
      formats: ["es", "umd"],
      fileName: (format) => `react-upload-basic.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));

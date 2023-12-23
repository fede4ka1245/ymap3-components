import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
  mode: 'production',
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "ymap3-components",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
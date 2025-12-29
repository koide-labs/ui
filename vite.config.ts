import path from "path";
import compiled from "@compiled/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), dts(), compiled(), react()],
  build: {
    minify: "esbuild",
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "react/jsx-runtime",
          "react-dom": "ReactDOM",
        },
      },
    },
    copyPublicDir: false,
  },
});

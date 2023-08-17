import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    port: 8100,
    https: true,
  },
  build: {
    outDir: "build",
  },
  plugins: [react(), vanillaExtractPlugin(), mkcert()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // parsing CSS is slow so if we can get away with not doing it, great
    css: false,
  },
});

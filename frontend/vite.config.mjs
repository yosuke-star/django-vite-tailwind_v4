// frontend/vite.config.js
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
// import { resolve } from "path"

export default defineConfig({
  root: path.resolve(__dirname),
  base: "/static/", //  STATIC_URLの設定に合わせる
  build: {
    manifest: "manifest.json",
    outDir: "../backend/static/", // Django 側で参照される場所に出力
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "js/main.js"), // エントリーポイント
      },
    },
  },
  server: {
    host: true, // ← ここが超重要！ true
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
  plugins: [tailwindcss()],
})

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import Inspect from "vite-plugin-inspect"
import tsconfigPaths from "vite-tsconfig-paths"
import styleX from "./vite-stylex-plugin/index.mjs"
import pre from "./vite-stylex-plugin/pre.mjs"

export default defineConfig(() => {
  return {
    plugins: [
      { ...pre(), enforce: "pre" },
      styleX(),
      Inspect(),
      react(),
      tsconfigPaths(),
    ],
    dev: { headers: { "Cache-Control": "public, max-age=0" } },
    preview: { headers: { "Cache-Control": "public, max-age=600" } },
  }
})

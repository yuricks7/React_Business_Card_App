import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import env from "vite-plugin-env-compatible";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    env({ prefix: "VITE", mountedPath: "process.env" }),
  ],
});
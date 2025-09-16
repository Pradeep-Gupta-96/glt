import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4004,
    host: "0.0.0.0",
    allowedHosts: true, // Allow all hosts
    cors: true,
    hmr: {
      overlay: false, // 🔴 Disable error overlay (helps you continue working)
    },
  },
});

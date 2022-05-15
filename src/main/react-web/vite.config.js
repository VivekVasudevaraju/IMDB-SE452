import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/rest": {
        target: "http://localhost:8080/rest",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/rest/, ""),
      },
    },
  },
  plugins: [react()],
});

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_SERVICE": JSON.stringify(process.env.VITE_SERVICE),
    "process.env.VITE_TEMPLATE": JSON.stringify(process.env.VITE_TEMPLATE),
    "process.env.VITE_PUBLIC_KEY": JSON.stringify(process.env.VITE_PUBLIC_KEY),
  },
});

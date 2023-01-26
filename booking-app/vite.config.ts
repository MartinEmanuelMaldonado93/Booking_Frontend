import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [tsconfigPaths(), react()],//1
  // plugins: [react(), tsconfigPaths()],//2
  resolve: {
    // alias: {// 3
    //   // "@components": path.resolve("src/components/*"),
    // },
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components/"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "src/hooks/"),
      },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "src/constants/index"),
      },
    ],
  },
});

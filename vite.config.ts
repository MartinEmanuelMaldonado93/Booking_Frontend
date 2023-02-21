import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [react()],
  base: "./",
  resolve: {
    // alias: {// 3
    //   // "@components": path.resolve("src/components/*"),
    // },
    alias: [
      {
        find: "@models",
        replacement: path.resolve(__dirname, "src/models"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "src/hooks"),
      },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "src/api"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils/index"),
      },
      {
        find: "@context",
        replacement: path.resolve(__dirname, "src/context"),
      },
      {
        find: "@reduxStore",
        replacement: path.resolve(__dirname, "src/redux"),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },
    ],
  },
});

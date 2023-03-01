import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      VITE_API_KEY: process.env.VITE_API_KEY,
    },
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
          find: "@adapters",
          replacement: path.resolve(__dirname, "src/adapters"),
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
  };
});

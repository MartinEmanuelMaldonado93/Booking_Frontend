import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		define: {
			VITE_API_KEY: process.env.VITE_API_KEY,
		},
		server: {
			host: true,
		},
		plugins: [react()],
		base: './',
		resolve: {
			alias: [
				{
					find: '@lib',
					replacement: path.resolve(__dirname, 'src/api/lib'),
				},
				{
					find: '@routes',
					replacement: path.resolve(__dirname, 'src/routes'),
				},
				{
					find: '@adapters',
					replacement: path.resolve(__dirname, 'src/adapters'),
				},
				{
					find: '@components',
					replacement: path.resolve(__dirname, 'src/components'),
				},
				{
					find: '@hooks',
					replacement: path.resolve(__dirname, 'src/hooks'),
				},
				{
					find: '@api',
					replacement: path.resolve(__dirname, 'src/api'),
				},
				{
					find: '@utils',
					replacement: path.resolve(__dirname, 'src/utils/index'),
				},
				{
					find: '@context',
					replacement: path.resolve(__dirname, 'src/context'),
				},
				{
					find: '@services',
					replacement: path.resolve(__dirname, 'src/services'),
				},
			],
		},
	};
});

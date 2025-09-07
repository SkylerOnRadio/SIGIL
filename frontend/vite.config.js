import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	plugins: [react(), tailwind()],
	css: {
		postcss: {
			plugins: [tailwind(), autoprefixer()],
		},
	},
	server: {
		port: 3000,
		strictPort: true,
	},
});

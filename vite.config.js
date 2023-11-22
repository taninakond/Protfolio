import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        manifest: true,
        minify: false,
        outDir: 'build', // Specify the output directory for the build
        rollupOptions: {
            input: {
                main: './src/main.jsx', // Specify the entry point
            },
            output: {
                entryFileNames: 'main.js',
                assetFileNames: 'assets/[name][extname]',
                format: 'iife',
            },
        },
    },
});

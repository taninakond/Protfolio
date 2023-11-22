import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        manifest: false,
        minify: false,
        outDir: 'build', // Specify the output directory for the build
        // Customize the HTML template
        rollupOptions: {
            output: {
                manualChunks: undefined, // Disable automatic chunk splitting
            },
        },
        assetsInlineLimit: 0, // Inline all assets
    },
});

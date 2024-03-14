/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/laces/',
    test: {
        globals: true,
        coverage: {
            provider: 'v8',
        },
        environment: 'jsdom',
        setupFiles: './src/test-setup.ts',
        mockReset: true,
    },
});

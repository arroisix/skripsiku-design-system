import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Library build for @skripsiku/ui.
 *   npm run build:lib  ->  dist/index.js + dist/index.d.ts + dist/skripsiku-ui.css (+ fonts)
 * React is externalised (peer dependency). CSS (tokens + component modules +
 * bundled webfonts) is emitted as a single stylesheet.
 */
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['**/*.stories.tsx', '**/*.test.*', 'src/main.tsx', 'src/App.tsx', 'src/vite-env.d.ts'],
      entryRoot: path.join(dirname, 'src'),
      tsconfigPath: path.join(dirname, 'tsconfig.app.json'),
    }),
  ],
  build: {
    lib: {
      entry: path.join(dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    cssCodeSplit: false,
    copyPublicDir: false,
    assetsInlineLimit: 0,
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', /^@fontsource\//],
      output: {
        assetFileNames: (info) =>
          info.names?.some((n) => n.endsWith('.css'))
            ? 'skripsiku-ui.css'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
});

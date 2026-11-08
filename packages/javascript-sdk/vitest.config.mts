import { resolve } from 'node:path';
import { defineVitestConfig } from '@stencil/vitest/config';
import { stencilVitestPlugin } from '@stencil/vitest/plugin';

const src = (path: string) => resolve(import.meta.dirname, 'src', path);

export default defineVitestConfig({
  stencilConfig: './stencil.config.ts',
  plugins: [stencilVitestPlugin()],
  resolve: {
    alias: {
      '@assets': src('assets'),
      '@classes': src('classes'),
      '@clients': src('clients'),
      '@components': src('components'),
      '@store': src('store'),
      '@types': src('types'),
      '@utils': src('utils'),
    },
  },
  test: {
    include: ['src/**/*.spec.{ts,tsx}'],
    environment: 'stencil',
  },
});

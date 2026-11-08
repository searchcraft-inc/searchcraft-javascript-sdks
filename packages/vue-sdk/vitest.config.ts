import { defineConfig } from 'vitest/config';

// Kept apart from vite.config.ts, whose plugins and aliases are for the build.
export default defineConfig({
  test: {
    environment: 'jsdom',
  },
});

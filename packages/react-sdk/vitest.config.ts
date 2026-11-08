import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    // Use the browser build of @lit/react, which the client wrappers use. Its
    // node build renders for the server and does not set properties on the
    // custom elements.
    conditions: ['browser'],
  },
  test: {
    environment: 'jsdom',
    server: {
      deps: {
        // Load these through Vite so the browser condition applies to them.
        inline: ['@stencil/react-output-target', '@lit/react'],
      },
    },
  },
});

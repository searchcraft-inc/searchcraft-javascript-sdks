import type { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'searchcraft-javascript-sdk',
  plugins: [
    sass({
      injectGlobalPaths: ['src/utils/_theme.scss'],
    }),
  ],
  outputTargets: [
    {
      // Generates the ESM and CommonJS builds
      type: 'dist',
      esmLoaderPath: './loader',
    },
    {
      // Generates the `custom-elements` directory with .js components
      type: 'dist-custom-elements',
      dir: 'dist/components', // Ensures .js files are generated here
      includeGlobalScripts: false,
      customElementsExportBehavior: 'bundle',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};

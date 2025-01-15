import type { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'searchcraft-javascript-sdk',
  plugins: [
    sass({
      injectGlobalPaths: ['src/theme/main.scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../react-sdk/src/stencil-web-components/',
    }),
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

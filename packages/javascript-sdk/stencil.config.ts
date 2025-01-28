import { readFileSync } from 'node:fs';
import type { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

const loadRawAsString = () => {
  return {
    name: 'loadRawAsString',
    load(id: string) {
      if (id.endsWith('?raw')) {
        const content = readFileSync(id.replace('?raw', '')).toString('utf-8');
        return `export default \`${content.replace(/`/g, '\\`')}\``;
      }
    },
  };
};

export const config: Config = {
  namespace: 'searchcraft-javascript-sdk',
  plugins: [loadRawAsString()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../react-sdk/src/stencil-web-components/',
      stencilPackageName: '@searchcraft/javascript-sdk',
    }),
    vueOutputTarget({
      // The proxiesFile is the relative path to the file that will be generated with all the Vue component wrappers.
      proxiesFile: '../vue-sdk/src/stencil-web-components.ts',
      componentCorePackage: '@searchcraft/javascript-sdk',
      includePolyfills: false,
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
    browserHeadless: 'shell',
  },
};

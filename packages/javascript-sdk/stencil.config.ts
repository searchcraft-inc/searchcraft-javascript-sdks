import { readFileSync } from 'node:fs';

import type { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

const loadRawAsStringPlugin = {
  name: 'loadRawAsString',
  load(id: string) {
    if (id.endsWith('?raw')) {
      const content = readFileSync(id.replace('?raw', '')).toString('utf-8');
      return `export default \`${content.replace(/`/g, '\\`')}\``;
    }
  },
};

export const config: Config = {
  namespace: 'searchcraft-javascript-sdk',
  plugins: [loadRawAsStringPlugin],
  validatePrimaryPackageOutputTarget: true,
  outputTargets: [
    {
      type: 'dist-hydrate-script',
    },
    reactOutputTarget({
      outDir: '../react-sdk/src/stencil-output/',
      stencilPackageName: '@searchcraft/javascript-sdk',
    }),
    vueOutputTarget({
      proxiesFile: '../vue-sdk/src/stencil-web-components.ts',
      componentCorePackage: '@searchcraft/javascript-sdk',
      includePolyfills: false,
    }),
    {
      type: 'dist-custom-elements',
      dir: 'dist/components',
      includeGlobalScripts: false,
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
      isPrimaryPackageOutputTarget: true,
    },
    {
      type: 'docs-readme',
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};

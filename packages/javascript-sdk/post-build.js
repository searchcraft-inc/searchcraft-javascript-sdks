/**
 * Post-build script for @searchcraft/javascript-sdk.
 *
 * The purpose of this script is to:
 *
 * - Create and run a `defineCustomElements()` function.
 * `defineCustomElements` does not automatically exist when building with stencil's `single-output-target` option.
 *
 * - Update the vue-sdk's output target file so that it does not produce typescript errors.
 *
 * - Add version query parameters to all imports for better cache invalidation.
 */
const { join } = require('node:path');
const {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
} = require('node:fs');

// Read package version
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
const version = packageJson.version;

const OUTPUT_DIR = './dist/components';
const GENERATED_JS_FILE = join(OUTPUT_DIR, 'defineCustomElements.js');
const GENERATED_DTS_FILE = join(OUTPUT_DIR, 'defineCustomElements.d.ts');
const INDEX_JS_FILE = join(OUTPUT_DIR, 'index.js');
const INDEX_DTS_FILE = join(OUTPUT_DIR, 'index.d.ts');

const files = readdirSync(OUTPUT_DIR)
  .filter((file) => file.endsWith('.js'))
  .filter((fileName) => fileName.startsWith('searchcraft'))
  // Exclude chunk files (e.g., searchcraft-ad2.js, index2.js, etc.)
  .filter((fileName) => !fileName.match(/\d+\.js$/));

const importString = files
  .map((file) => {
    const name = file.replace('.js', '');
    const aliasName = name.replace(/-/g, '_');
    return `import { defineCustomElement as define_${aliasName} } from './${name}.js';`;
  })
  .join('\n');

const functionString = files
  .map((file) => `define_${file.replace('.js', '').replace(/-/g, '_')}();`)
  .join('\n  ');

// Generate the function to define all custom elements
const jsContent = `
${importString}

export const defineCustomElements = () => {
  ${functionString}
};

// Register the function with globalThis so that core can call it
globalThis.__scDefineCustomElements__ = defineCustomElements;

`.trim();

globalThis.__my_monorepo_generated_fn__ = () => 'Hello from B';

// Write the generated file
writeFileSync(GENERATED_JS_FILE, jsContent);

// Generate the TypeScript definition file
const dtsContent = `
    export declare const defineCustomElements: () => void;
          `.trim();

writeFileSync(GENERATED_DTS_FILE, dtsContent);
console.log(
  '[Stencil Plugin] Generated defineCustomElements.d.ts successfully.',
);

// Append the export to index.js if it's not already there
if (existsSync(INDEX_JS_FILE)) {
  const indexJsContent = readFileSync(INDEX_JS_FILE, 'utf-8');
  if (!indexJsContent.includes('export { defineCustomElements }')) {
    writeFileSync(
      INDEX_JS_FILE,
      `${indexJsContent}\nexport { defineCustomElements } from './defineCustomElements.js';\n`,
    );
    console.log(
      '[Stencil Plugin] Appended defineCustomElements export to index.js.',
    );
  }
}

// Append the TypeScript definition to index.d.ts if it's not already there
if (existsSync(INDEX_DTS_FILE)) {
  const indexDtsContent = readFileSync(INDEX_DTS_FILE, 'utf-8');
  if (
    !indexDtsContent.includes(
      'export declare const defineCustomElements: () => void;',
    )
  ) {
    writeFileSync(
      INDEX_DTS_FILE,
      `${indexDtsContent}\nexport declare const defineCustomElements: () => void;\n`,
    );
    console.log(
      '[Stencil Plugin] Appended defineCustomElements type to index.d.ts.',
    );
  }
}

// Modify the generated vue output target file to not throw typescript errors
const VUE_FILE = '../vue-sdk/src/stencil-web-components.ts';
const vueFileContent = readFileSync(VUE_FILE, 'utf-8');
writeFileSync(VUE_FILE, vueFileContent.replace(/undefined/g, '() => {}'));

// Fix components.d.ts to use import type and export type
const COMPONENTS_DTS_FILE = './src/components.d.ts';
if (existsSync(COMPONENTS_DTS_FILE)) {
  let componentsDtsContent = readFileSync(COMPONENTS_DTS_FILE, 'utf-8');

  // Convert type-only imports to use 'import type'
  // Convert @stencil/core/internal import to import type
  componentsDtsContent = componentsDtsContent.replace(
    /^import \{ (HTMLStencilElement, JSXBase) \} from "@stencil\/core\/internal";$/gm,
    'import type { $1 } from "@stencil/core/internal";',
  );

  // Match imports from "./types/index" and "./components/searchcraft-select/searchcraft-select"
  componentsDtsContent = componentsDtsContent.replace(
    /^import \{ (AdClientResponseItem[^}]+) \} from "\.\/types\/index";$/gm,
    'import type { $1 } from "./types/index";',
  );

  componentsDtsContent = componentsDtsContent.replace(
    /^import \{ (SearchcraftSelectOption) \} from "\.\/components\/searchcraft-select\/searchcraft-select";$/gm,
    'import type { $1 } from "./components/searchcraft-select/searchcraft-select";',
  );

  // Convert type-only exports to use 'export type'
  componentsDtsContent = componentsDtsContent.replace(
    /^export \{ (AdClientResponseItem[^}]+) \} from "\.\/types\/index";$/gm,
    'export type { $1 } from "./types/index";',
  );

  componentsDtsContent = componentsDtsContent.replace(
    /^export \{ (SearchcraftSelectOption) \} from "\.\/components\/searchcraft-select\/searchcraft-select";$/gm,
    'export type { $1 } from "./components/searchcraft-select/searchcraft-select";',
  );

  writeFileSync(COMPONENTS_DTS_FILE, componentsDtsContent);
  console.log(
    '[Stencil Plugin] Fixed components.d.ts to use import type and export type.',
  );
}

// Add version query parameters to all imports for cache busting.
//
// NOTE: Do NOT use `?v=` here.
// Vite (and therefore Storybook's Vite builder) treats `?v=` specially for its own
// module versioning / transform cache. Using `?v=<semver>` can lead to stale
// cached transforms and runtime errors like:
//   "does not provide an export named 'n'"
// when the underlying file has changed but Vite doesn't invalidate correctly.
//
// Use a different query key that won't collide with Vite internals.
const VERSION_QUERY_KEY = 'scv';

function addVersionToImports() {
  const allJsFiles = readdirSync(OUTPUT_DIR).filter((file) =>
    file.endsWith('.js'),
  );

  let filesModified = 0;

  allJsFiles.forEach((file) => {
    const filePath = join(OUTPUT_DIR, file);
    const content = readFileSync(filePath, 'utf-8');

    // Replace all relative imports with versioned imports.
    // Matches:
    //   from './filename.js'
    //   from './filename.js?v=...'
    //   from './filename.js?scv=...'
    // and rewrites them to:
    //   from './filename.js?scv=<packageVersion>'
    const newContent = content.replace(
      new RegExp(
        `(from\\s+['\"]\\.\\/[^'\"]+\\.js)(\\?(?:v|${VERSION_QUERY_KEY})=[^'\"]+)?(['\"])`,
        'g',
      ),
      `$1?${VERSION_QUERY_KEY}=${version}$3`,
    );

    if (newContent !== content) {
      writeFileSync(filePath, newContent);
      filesModified++;
    }
  });

  console.log(
    `[Stencil Plugin] Added version query parameters to ${filesModified} files.`,
  );
}

addVersionToImports();

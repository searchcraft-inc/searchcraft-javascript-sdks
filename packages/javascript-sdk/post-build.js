/**
 * Post-build script for @searchcraft/javascript-sdk.
 * The purpose of this script is to Create and run a `defineCustomElements()` function.
 * `defineCustomElements` does not automatically exist when building with stencil's `single-output-target` option, which we need to use.
 */
const { join } = require('node:path');
const {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
} = require('node:fs');

const OUTPUT_DIR = './dist/components';
const GENERATED_JS_FILE = join(OUTPUT_DIR, 'defineCustomElements.js');
const GENERATED_DTS_FILE = join(OUTPUT_DIR, 'defineCustomElements.d.ts');
const INDEX_JS_FILE = join(OUTPUT_DIR, 'index.js');
const INDEX_DTS_FILE = join(OUTPUT_DIR, 'index.d.ts');

const files = readdirSync(OUTPUT_DIR)
  .filter((file) => file.endsWith('.js'))
  .filter((fileName) => fileName.startsWith('searchcraft'));

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

// Call defineCustomElements as soon as it's available
defineCustomElements();

`.trim();

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

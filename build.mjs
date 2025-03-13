/**
 * SDK Yarn workspace build script
 *
 * Master build script for all the packages in this yarn workspace.
 * Some packages here depend on each other or have various post- or pre- install actions,
 * so build order is important. This script enforces the correct build order and build
 * actions for each package.
 *
 * Usage:
 *   node build.mjs [package-alias] [--watch] [--yalc]
 *
 * Arguments:
 *   build-variant   Alias for the which build steps to perform (see aliases below).
 *                   Defaults to performing all build steps if no variant specified.
 *
 * Flags:
 *   --watch         Rebuild on file changes (uses nodemon).
 *   --yalc          Publish built packages to Yalc.
 *   --verbose       Log build output in terminal.
 *
 * Examples:
 *   node build.mjs                      // Build all packages
 *   node build.mjs pkg1 --watch         // Watch and rebuild pkg1
 *   node build.mjs pkg1 --yalc          // Build and publish pkg1 to Yalc
 *   node build.mjs pkg1 --watch --yalc  // Watch, Build, & publish to Yalc
 *
 * Aliases:
 *   core  -> @searchcraft/core
 *   hologram -> @searchcraft/hologram
 *   js    -> @searchcraft/javascript-sdk
 *   react -> @searchcraft/react-sdk
 *   vue   -> @searchcraft/vue-sdk
 */
import { execSync, spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const shouldWatch = args.includes('--watch');
const shouldPublishToYalc = args.includes('--yalc');
const isVerbose = args.includes('--verbose');
const buildVariant = args.find((arg) => !arg.includes('--'));

const buildVariants = {
  core: ['core-build'],
  hologram: ['hologram-build'],
  js: ['core-build', 'hologram-build', 'javascript-sdk-build'],
  react: [
    'core-build',
    'hologram-build',
    'javascript-sdk-build',
    'react-sdk-build',
  ],
  vue: [
    'core-build',
    'hologram-build',
    'javascript-sdk-build',
    'vue-sdk-build',
  ],
};

const buildSteps = [
  {
    label: 'core-build',
    action: () => {
      execSync('yarn workspace @searchcraft/core build', {
        stdio: isVerbose ? 'inherit' : 'ignore',
      });
    },
  },
  {
    label: 'hologram-build',
    action: () => {
      execSync('yarn workspace @searchcraft/hologram build', {
        stdio: isVerbose ? 'inherit' : 'ignore',
      });
    },
  },
  {
    label: 'javascript-sdk-build',
    action: () => {
      execSync('yarn workspace @searchcraft/javascript-sdk build', {
        stdio: isVerbose ? 'inherit' : 'ignore',
      });
      spawnSync(
        'yarn',
        [
          'dts-bundle-generator',
          '-o',
          'packages/javascript-sdk/dist/components/bundled.types.d.ts',
          'packages/javascript-sdk/src/index.ts',
          '--inline-declare-global',
          '--inline-declare-externals',
        ],
        {
          stdio: isVerbose ? 'inherit' : 'ignore',
        },
      );
      // Invokes the post-build javascript-sdk script
      execSync('cd packages/javascript-sdk && node post-build.js');
      if (shouldPublishToYalc) {
        execSync('cd ./packages/javascript-sdk && yalc publish && yalc push', {
          stdio: isVerbose ? 'inherit' : 'ignore',
        });
      }
    },
  },
  {
    label: 'react-sdk-build',
    action: () => {
      execSync('yarn workspace @searchcraft/react-sdk build', {
        stdio: isVerbose ? 'inherit' : 'ignore',
      });
      spawnSync(
        'yarn',
        [
          'dts-bundle-generator',
          '-o',
          'packages/react-sdk/dist/index.d.ts',
          'packages/react-sdk/src/index.ts',
          '--inline-declare-global',
          '--inline-declare-externals',
        ],
        {
          stdio: isVerbose ? 'inherit' : 'ignore',
        },
      );
      if (shouldPublishToYalc) {
        execSync('cd ./packages/react-sdk && yalc publish && yalc push', {
          stdio: isVerbose ? 'inherit' : 'ignore',
        });
      }
    },
  },
  {
    label: 'vue-sdk-build',
    action: () => {
      execSync('yarn workspace @searchcraft/vue-sdk build', {
        stdio: isVerbose ? 'inherit' : 'ignore',
      });
      spawnSync(
        'yarn',
        [
          'dts-bundle-generator',
          '-o',
          'packages/vue-sdk/dist/index.d.ts',
          'packages/vue-sdk/src/index.ts',
          '--inline-declare-global',
          '--inline-declare-externals',
        ],
        {
          stdio: isVerbose ? 'inherit' : 'ignore',
        },
      );
      if (shouldPublishToYalc) {
        execSync('cd ./packages/vue-sdk && yalc publish && yalc push', {
          stdio: isVerbose ? 'inherit' : 'ignore',
        });
      }
    },
  },
];

if (shouldWatch) {
  spawnSync(
    'npx',
    [
      'nodemon',
      '--exec',
      `node ${process.argv[1]} ${buildVariant || ''} ${
        shouldPublishToYalc ? '--yalc' : ''
      }  ${isVerbose ? '--verbose' : ''}`.trim(),
    ],
    {
      stdio: 'inherit',
    },
  );
}

buildSteps.forEach((step) => {
  if (!buildVariant || buildVariants[buildVariant]?.includes(step.label)) {
    console.log(`Performing build step: ${step.label}...`);
    step.action();
    console.log(`Build step ${step.label} complete.`);
  }
});

console.log('Build complete!');

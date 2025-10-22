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
 *   --wordpress     Build for WordPress (excludes AdMarketplaceClient and NativoClient).
 *
 * Examples:
 *   node build.mjs                      // Build all packages
 *   node build.mjs pkg1 --watch         // Watch and rebuild pkg1
 *   node build.mjs pkg1 --yalc          // Build and publish pkg1 to Yalc
 *   node build.mjs pkg1 --watch --yalc  // Watch, Build, & publish to Yalc
 *   node build.mjs js --wordpress       // Build JavaScript SDK for WordPress (excludes AdMarketplaceClient and NativoClient)
 *
 * Aliases:
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
const isWordPress = args.includes('--wordpress');
const buildVariant = args.find((arg) => !arg.includes('--'));

const buildVariants = {
  hologram: ['hologram-build'],
  js: ['hologram-build', 'javascript-sdk-build'],
  react: ['hologram-build', 'javascript-sdk-build', 'react-sdk-build'],
  vue: ['hologram-build', 'javascript-sdk-build', 'vue-sdk-build'],
};

const buildSteps = [
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
      if (isWordPress) {
        console.log('  Building for WordPress (will exclude AdMarketplaceClient and NativoClient)...');
        // Apply WordPress modifications using the filter script
        execSync('cd packages/javascript-sdk && node wordpress-filter.js', {
          stdio: isVerbose ? 'inherit' : 'ignore'
        });
      }

      execSync('yarn workspace @searchcraft/javascript-sdk build', {
        stdio: isVerbose ? 'inherit' : 'ignore',
      });
      spawnSync(
        'yarn',
        [
          'dts-bundle-generator',
          '-o',
          'packages/javascript-sdk/dist/components/index.d.ts',
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

      if (isWordPress) {
        console.log('  Restoring original files...');
        execSync('git restore packages/javascript-sdk/src/classes/SearchcraftCore.ts packages/javascript-sdk/src/clients/ad-clients/index.ts packages/javascript-sdk/src/clients/ad-clients/AdMarketplaceClient.ts packages/javascript-sdk/src/clients/ad-clients/NativoClient.ts');
      }
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
          'packages/react-sdk/dist/server/index.d.ts',
          'packages/react-sdk/src/server/index.ts',
          '--inline-declare-global',
          '--inline-declare-externals',
        ],
        {
          stdio: isVerbose ? 'inherit' : 'ignore',
        },
      );
      execSync(
        'mkdir -p packages/react-sdk/dist/client/themes && cp "packages/javascript-sdk/src/themes/"*.css* packages/react-sdk/dist/client/themes/',
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
      execSync(
        'mkdir -p packages/vue-sdk/dist/themes && cp "packages/javascript-sdk/src/themes/"*.css* packages/vue-sdk/dist/themes/',
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
      } ${isVerbose ? '--verbose' : ''} ${isWordPress ? '--wordpress' : ''}`.trim(),
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

/**
 * Javascript SDK Build Script
 *
 * Usage:
 *   node build.mjs [package-alias] [--watch] [--yalc]
 *
 * Arguments:
 *   package-alias   Alias for the package to build (see aliases below).
 *                   Defaults to building all non-core packages if omitted.
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
 *   js    -> @searchcraft/javascript-sdk
 *   react -> @searchcraft/react-sdk
 *   vue   -> @searchcraft/vue-sdk
 */
import { execSync, spawnSync } from "child_process";

const packages = {
  js: { name: "@searchcraft/javascript-sdk", path: "./packages/javascript-sdk" },
  react: { name: "@searchcraft/react-sdk", path: "./packages/react-sdk" },
  vue: { name: "@searchcraft/vue-sdk", path: "./packages/vue-sdk" },
};

const args = process.argv.slice(2);
const shouldWatch = args.includes("--watch");
const shouldPublishToYalc = args.includes("--yalc");
const isVerbose = args.includes("--verbose");
const packageAlias = args.find((arg) => !arg.includes("--"));
const targetPackageInfo = packages[packageAlias];

const buildPackage = (packageInfo) => {
  console.log(`Building package ${packageInfo.name} ...`);
  execSync(`yarn workspace ${packageInfo.name} build`, { stdio: isVerbose ? "inherit" : "ignore" });
  console.log(`Package ${packageInfo.name} built successfully.`);

  if (shouldPublishToYalc && packageInfo.path) {
    console.log(`Publishing ${packageInfo.name} to yalc...`);
    execSync(`cd ${packageInfo.path} && yalc publish && yalc push`, { stdio: isVerbose ? "inherit" : "ignore" });
    console.log(`Package ${packageInfo.name} published to yalc.`);
  }
};

const startWatching = () => {
  spawnSync(
    "npx",
    [
      "nodemon",
      "--exec",
      `node ${process.argv[1]} ${packageAlias || ""} ${
        shouldPublishToYalc ? "--yalc" : ""
      }  ${
        isVerbose ? "--verbose" : ""
      }`.trim(),
    ],
    {
      stdio: "inherit"
    }
  );
}

if (packageAlias && !targetPackageInfo) {
  console.error(`Unknown package alias: ${packageAlias}`);
  console.error("Available package aliases:", Object.keys(packages).join(", "));
  process.exit(1);
}

if (shouldWatch) {
  startWatching();
}

// Builds the packages that need to be built every time no matter what
buildPackage({ name: "@searchcraft/core" });
buildPackage({ name: "@searchcraft/hologram" });
buildPackage({ name: "@searchcraft/javascript-sdk" });

// Build the remaining target package OR all the remaining packages
if (targetPackageInfo) {
  if (targetPackageInfo.name !== "@searchcraft/javascript-sdk") {
    buildPackage(targetPackageInfo);
  }
} else {
  Object.values(packages).forEach((packageInfo) => {
    if (packageInfo.name !== "@searchcraft/javascript-sdk") {
      buildPackage(packageInfo);
    }
  });
}

console.log("Build process completed successfully!");

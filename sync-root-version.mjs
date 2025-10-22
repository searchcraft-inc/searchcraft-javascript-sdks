#!/usr/bin/env node

/**
 * Syncs the root package.json version with lerna.json version
 * This runs automatically after `lerna version` via the version.command lifecycle hook
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  // Read lerna.json to get the current version
  const lernaPath = join(__dirname, 'lerna.json');
  const lernaJson = JSON.parse(readFileSync(lernaPath, 'utf-8'));
  const lernaVersion = lernaJson.version;

  // Read root package.json
  const packagePath = join(__dirname, 'package.json');
  const packageJson = JSON.parse(readFileSync(packagePath, 'utf-8'));

  // Check if version needs updating
  if (packageJson.version === lernaVersion) {
    console.log(`✓ Root package.json version already synced: ${lernaVersion}`);
    process.exit(0);
  }

  // Update the version
  packageJson.version = lernaVersion;

  // Write back to package.json with proper formatting
  writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n', 'utf-8');

  console.log(`✓ Synced root package.json version: ${packageJson.version} → ${lernaVersion}`);
} catch (error) {
  console.error('Error syncing root package.json version:', error.message);
  process.exit(1);
}


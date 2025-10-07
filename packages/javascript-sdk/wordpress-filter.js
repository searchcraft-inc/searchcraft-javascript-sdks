/**
 * WordPress Build Filter
 *
 * This script modifies source files for WordPress builds to exclude
 * AdMarketplaceClient and NativoClient.
 */

const fs = require('fs');

console.log('[WordPress Filter] Modifying source files for WordPress build...');

// Modify ad-clients index to exclude the WordPress-incompatible clients
const indexPath = 'src/clients/ad-clients/index.ts';
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  indexContent = indexContent.replace(/export \* from '\.\/AdMarketplaceClient';\s*/g, '');
  indexContent = indexContent.replace(/export \* from '\.\/NativoClient';\s*/g, '');
  fs.writeFileSync(indexPath, indexContent);
  console.log('[WordPress Filter] Modified ad-clients index');
}

// Modify SearchcraftCore to remove imports and initialization logic
const corePath = 'src/classes/SearchcraftCore.ts';
if (fs.existsSync(corePath)) {
  let coreContent = fs.readFileSync(corePath, 'utf8');

  // Remove imports for WordPress-incompatible clients
  coreContent = coreContent.replace(/AdMarketplaceClient,\s*/g, '');
  coreContent = coreContent.replace(/NativoClient,\s*/g, '');
  coreContent = coreContent.replace(/,\s*AdMarketplaceClient/g, '');
  coreContent = coreContent.replace(/,\s*NativoClient/g, '');

  // Remove the initialization logic for these clients
  coreContent = coreContent.replace(/} else if \(config\.nativoConfig\) \{\s*this\.adClient = new NativoClient\(config\);\s*/g, '');
  coreContent = coreContent.replace(/} else if \(config\.admAdConfig\) \{\s*this\.adClient = new AdMarketplaceClient\(config\);\s*/g, '');

  fs.writeFileSync(corePath, coreContent);
  console.log('[WordPress Filter] Modified SearchcraftCore');
}

// Replace the client files with empty stubs to prevent compilation
const adMarketplaceClientPath = 'src/clients/ad-clients/AdMarketplaceClient.ts';
if (fs.existsSync(adMarketplaceClientPath)) {
  const stubContent = `// WordPress build stub - AdMarketplaceClient excluded
import { AdClient } from './AdClient';
export class AdMarketplaceClient extends AdClient {
  async getAds() { return []; }
  async onAdContainerViewed() {}
}`;
  fs.writeFileSync(adMarketplaceClientPath, stubContent);
  console.log('[WordPress Filter] Replaced AdMarketplaceClient with stub');
}

const nativoClientPath = 'src/clients/ad-clients/NativoClient.ts';
if (fs.existsSync(nativoClientPath)) {
  const stubContent = `// WordPress build stub - NativoClient excluded
import { AdClient } from './AdClient';
export class NativoClient extends AdClient {
  async getAds() { return []; }
  async onQuerySubmitted() {}
  async onQueryFetched() {}
  async onInputCleared() {}
}`;
  fs.writeFileSync(nativoClientPath, stubContent);
  console.log('[WordPress Filter] Replaced NativoClient with stub');
}

console.log('[WordPress Filter] WordPress source modifications complete!');

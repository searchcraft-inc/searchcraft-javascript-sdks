import { execSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import { createInterface } from 'node:readline/promises';

const currentBranch = execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim();
if (currentBranch !== 'development') {
  console.error(`Error: Switch to 'development' before running this script.`);
  process.exit(1);
}

// Check for uncommitted changes
const statusOutput = execSync('git status --porcelain').toString().trim();
if (statusOutput) {
  console.error(
    'Error: Uncommitted changes. Commit or stash them before running this script.',
  );
  process.exit(1);
}

const io = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lastTag = execSync('git describe --tags --abbrev=0').toString().trim();
let commitMessages = execSync(
  `git log ${lastTag}..HEAD --no-merges --format=%B`,
)
  .toString()
  .trim();

// Remove ticket numbers in their various formats from commit messages
commitMessages = commitMessages.replace(/re:SC-\d+/g, '');
commitMessages = commitMessages.replace(/re SC-\d+/g, '');
commitMessages = commitMessages.replace(/SC-\d+/g, '');
commitMessages = commitMessages.trim();

const version = await io.question(`Specify version (prev- ${lastTag}): `);
const title = await io.question('Enter a title: ');
const description = await io.question('Enter a description: ');

const changelogEntry = `## ${version} - ${title}\n\n${description}\n\n### Commits:\n\n${commitMessages}\n`;
const changelogContent = fs.readFileSync('CHANGELOG.md', { encoding: 'utf-8' });

fs.writeFileSync('CHANGELOG.md', `${changelogEntry}\n\n${changelogContent}`);
console.log('Updates written to CHANGELOG.md.');

const viResponse = await io.question(
  '\nView the changelog in vim?\n(y or n) > ',
);
const shouldViewInVi =
  viResponse.toLowerCase() === 'y' || viResponse.toLowerCase() === 'yes';
if (shouldViewInVi) {
  execSync('vi CHANGELOG.md', { stdio: 'inherit' });
}

console.log('Changelog Updated.');

process.exit(0);

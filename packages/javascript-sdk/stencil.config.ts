import { readFileSync, promises as fs } from 'node:fs';

import type { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import type {
  JsonDocs,
  JsonDocsEvent,
  JsonDocsProp,
  JsonDocsTag,
} from '@stencil/core/internal';

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
      dir: 'dist/hydrate',
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
      copy: [{ src: 'themes/*.{css,css.map}', dest: 'dist/themes' }],
    },
    {
      type: 'docs-custom',
      generator: async (docs: JsonDocs) => {
        docs.components.forEach(async (component) => {
          if (
            !component.docsTags.some((docTag) => docTag.name === 'internal')
          ) {
            const markdown = [
              `# ${component.tag}`,
              '',
              ...overviewToMarkdown(component.overview),
              ...importsToMarkdown(component.docsTags),
              ...examplesToMarkdown(component.docsTags),
              ...propsToMarkdown(component.props),
              ...eventsToMarkdown(component.events),
            ].join('\n');

            await fs.writeFile(`${component.dirPath}/readme.md`, markdown);
          }
        });
      },
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};

// Overview
export const overviewToMarkdown = (overview?: string): string[] => {
  const content: string[] = [];

  if (!overview) {
    return content;
  }

  content.push(`${overview.trim()}`);
  content.push('');

  return content;
};

// Imports
export const importsToMarkdown = (docsTags: JsonDocsTag[]): string[] => {
  const content: string[] = [];

  if (docsTags.length === 0) {
    return content;
  }

  const filteredDocsTags = docsTags.filter((docsTag) =>
    ['import'].includes(docsTag.name),
  );

  if (filteredDocsTags.length === 0) {
    return content;
  }

  content.push('## Import');
  content.push('');

  filteredDocsTags.forEach((docsTag) => {
    content.push(`${docsTag.text}`);
    content.push('');
    content.push('');
  });

  return content;
};

// Examples
export const examplesToMarkdown = (docsTags: JsonDocsTag[]): string[] => {
  const content: string[] = [];

  if (docsTags.length === 0) {
    return content;
  }

  const filteredDocsTags = docsTags.filter((docsTag) =>
    ['js-example', 'react-example', 'vue-example'].includes(docsTag.name),
  );

  if (filteredDocsTags.length === 0) {
    return content;
  }

  content.push('## Usage');
  content.push('');

  filteredDocsTags.forEach((docsTag) => {
    content.push(`**${getDocsTagName(docsTag.name)}:**`);
    content.push('');
    content.push(`${docsTag.text}`);
    content.push('');
    content.push('');
  });

  return content;
};

const getDocsTagName = (docsTagName: string) => {
  switch (docsTagName) {
    case 'js-example':
      return 'JavaScript';
    case 'react-example':
      return 'React';
    case 'vue-example':
      return 'Vue';
    default:
      return '';
  }
};

// Properties
export const propsToMarkdown = (props: JsonDocsProp[]) => {
  const content: string[] = [];

  if (props.length === 0) {
    return content;
  }

  content.push('## Properties');
  content.push('');
  const headers = ['Property', 'Attribute', 'Description', 'Type', 'Default'];
  const rows: string[][] = [];

  props.forEach((prop) => {
    rows.push([
      getPropertyValue(prop),
      getAttributeValue(prop),
      getDocsValue(prop),
      getTypeValue(prop),
      getDefaultValue(prop),
    ]);
  });

  const table = createTable(headers, rows);
  content.push(...table);
  content.push('');
  content.push('');

  return content;
};

// Events
export const eventsToMarkdown = (events: JsonDocsEvent[]) => {
  const content: string[] = [];

  if (events.length === 0) {
    return content;
  }

  content.push('## Events');
  content.push('');
  const headers = ['Event', 'Description', 'Type'];
  const rows: string[][] = [];

  events.forEach((event) => {
    rows.push([
      `\`${event.event}\``,
      getDocsValue(event),
      `\`CustomEvent<${event.detail}>\``,
    ]);
  });

  const table = createTable(headers, rows);
  content.push(...table);
  content.push('');
  content.push('');

  return content;
};

// Table utilities
const createTable = (headers: string[], rows: string[][]) => {
  const content: string[] = [];

  if (headers.length === 0 || rows.length === 0) {
    return content;
  }

  if (headers) {
    const headerRow = createTableRow(headers);
    content.push(headerRow);
    const borders = headers.map((header) => header.replace(/./g, '-'));
    const borderRow = createTableRow(borders);
    content.push(borderRow);
  }

  rows.forEach((row) => {
    content.push(createTableRow(row));
  });

  return content;
};

const createTableRow = (row: string[]) => {
  const content: string[] = ['| '];

  row.forEach((column) => {
    content.push(column);
    content.push(' | ');
  });

  return content.join('').trim();
};

// Value utilities
const escapeTableMarkdown = (str: string) => {
  let escapedStr = str;
  escapedStr = str.replace(/\r?\n/g, ' '); // New lines
  escapedStr = str.replace(/\|/g, '\\|'); // Pipes
  return escapedStr;
};

const getPropertyValue = (prop: JsonDocsProp) =>
  escapeTableMarkdown(
    `\`${prop.name}\`${prop.required ? ' _(required)_' : ''}`,
  );

const getAttributeValue = (prop: JsonDocsProp) =>
  escapeTableMarkdown(prop.attr ? `\`${prop.attr}\`` : '--');

const getDocsValue = (propOrEvent: JsonDocsProp | JsonDocsEvent) =>
  escapeTableMarkdown(
    `${
      propOrEvent.deprecation !== undefined
        ? `<span style="color:red">**[DEPRECATED]**</span> ${propOrEvent.deprecation}<br/><br/>`
        : ''
    }${propOrEvent.docs.replace(/\r?\n/g, ' ')}`, // New lines must be removed here as well
  );

const getTypeValue = (prop: JsonDocsProp) =>
  escapeTableMarkdown(
    prop.type.includes('`') ? `\`\` ${prop.type} \`\`` : `\`${prop.type}\``,
  );

const getDefaultValue = (prop: JsonDocsProp) =>
  escapeTableMarkdown(
    prop.default?.includes('`')
      ? `\`\` ${prop.default} \`\``
      : `\`${prop.default}\``,
  );

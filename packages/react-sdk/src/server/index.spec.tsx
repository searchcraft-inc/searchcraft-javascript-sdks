import type { ReactElement } from 'react';
import { describe, expect, it, vi } from 'vitest';

import * as generated from '../stencil-output/components';
import * as server from './index';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

// Server rendering needs the hydrate build, so return markup from the tag
// name instead.
vi.mock('./utils/getSearchcraftHtml', () => ({
  getSearchcraftHtml: vi.fn(async (tagName: string) => ({
    tag: `<${tagName}></${tagName}>`,
    html: `<${tagName}>rendered</${tagName}>`,
  })),
}));

const SEARCHCRAFT_ID = 'react-server-spec';

const componentNames = Object.keys(generated)
  .filter((name) => /^Searchcraft[A-Z]/.test(name))
  .sort();

const toTagName = (name: string) =>
  name.replace(/[A-Z]/g, (letter, index) =>
    index === 0 ? letter.toLowerCase() : `-${letter.toLowerCase()}`,
  );

describe('server components', () => {
  it('exports a server component for every component', () => {
    const serverNames = Object.keys(server)
      .filter((name) => /^Searchcraft[A-Z]/.test(name))
      .sort();

    expect(componentNames.length).toBeGreaterThan(0);
    expect(serverNames).toEqual(componentNames);
  });

  it.each(componentNames)('%s renders its own tag', async (name) => {
    const tagName = toTagName(name);
    const ServerComponent = server[name as keyof typeof server] as (props: {
      searchcraftId?: string;
    }) => Promise<
      ReactElement<{
        'data-sc-tag-name': string;
        'data-sc-tag': string;
        dangerouslySetInnerHTML: { __html: string };
      }>
    >;

    const element = await ServerComponent({ searchcraftId: SEARCHCRAFT_ID });

    expect(getSearchcraftHtml).toHaveBeenLastCalledWith(tagName, {
      searchcraftId: SEARCHCRAFT_ID,
    });
    expect(element.props['data-sc-tag-name']).toBe(tagName);
    expect(element.props['data-sc-tag']).toBe(`<${tagName}></${tagName}>`);
    expect(element.props.dangerouslySetInnerHTML.__html).toBe(
      `<${tagName}>rendered</${tagName}>`,
    );
  });
});

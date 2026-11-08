import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { SearchcraftPopoverButton } from './searchcraft-popover-button';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => {
  toBe(expected: unknown): void;
};

const renderButton = (
  type: 'skeuomorphic' | 'magnifying-glass',
  placeholderValue?: string,
) =>
  newSpecPage({
    components: [SearchcraftPopoverButton],
    template: () => (
      <searchcraft-popover-button
        type={type}
        placeholderValue={placeholderValue}
        searchcraftId='popover-button-spec'
      />
    ),
  });

describe('searchcraft-popover-button', () => {
  it('shows "Search" in the skeuomorphic button by default', async () => {
    const page = await renderButton('skeuomorphic');

    expect(
      page.root?.querySelector('.searchcraft-popover-button-input span')
        ?.textContent,
    ).toBe('Search');
  });

  it('shows placeholderValue in the skeuomorphic button', async () => {
    const page = await renderButton('skeuomorphic', 'Buscar artículos');

    expect(
      page.root?.querySelector('.searchcraft-popover-button-input span')
        ?.textContent,
    ).toBe('Buscar artículos');
  });

  it('uses placeholderValue as the magnifying-glass button label', async () => {
    const defaultPage = await renderButton('magnifying-glass');
    expect(
      defaultPage.root?.querySelector('button')?.getAttribute('aria-label'),
    ).toBe('Search');

    const page = await renderButton('magnifying-glass', 'Buscar');
    expect(page.root?.querySelector('button')?.getAttribute('aria-label')).toBe(
      'Buscar',
    );
  });

  it('labels the magnifying-glass button "Search" when placeholderValue is blank', async () => {
    for (const placeholderValue of ['', '   ']) {
      const page = await renderButton('magnifying-glass', placeholderValue);
      expect(
        page.root?.querySelector('button')?.getAttribute('aria-label'),
      ).toBe('Search');
    }
  });
});

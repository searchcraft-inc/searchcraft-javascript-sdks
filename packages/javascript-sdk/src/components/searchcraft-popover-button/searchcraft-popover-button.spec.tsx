import { h, render } from '@stencil/vitest';
import { describe, expect, it } from 'vitest';

import './searchcraft-popover-button';

const renderButton = (
  type: 'skeuomorphic' | 'magnifying-glass',
  placeholderValue?: string,
) =>
  render(
    <searchcraft-popover-button
      type={type}
      placeholderValue={placeholderValue}
      searchcraftId='popover-button-spec'
    />,
  );

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

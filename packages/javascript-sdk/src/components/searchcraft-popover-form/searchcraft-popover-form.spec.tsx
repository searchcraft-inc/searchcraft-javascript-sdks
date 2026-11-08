import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { h, render } from '@stencil/vitest';
import { createSearchcraftStore } from '@store';
import type {
  PopoverNoResultsTemplate,
  SearchClientResponseItem,
} from '@types';
import DOMPurify from 'dompurify';
import { afterEach, describe, expect, it, vi } from 'vitest';

import './searchcraft-popover-form';

const SEARCHCRAFT_ID = 'popover-form-spec';

const item: SearchClientResponseItem = {
  id: '1',
  document: { id: 1, title: 'Hello World' },
  source_index: 'posts',
};

const store = createSearchcraftStore(SEARCHCRAFT_ID);
registry.addCoreInstance(
  { store } as unknown as SearchcraftCore,
  SEARCHCRAFT_ID,
);

const completeSearch = (
  searchTerm: string,
  items: SearchClientResponseItem[] = [],
) => {
  store.setState({
    searchTerm,
    isSearchInProgress: false,
    searchClientResponseItems: items,
    searchClientRequestProperties: { mode: 'fuzzy', searchTerm },
  });
};

const renderPopoverForm = async (
  type: 'inline' | 'modal' | 'fullscreen',
  noResultsTemplate?: PopoverNoResultsTemplate,
) => {
  store.setState({
    isPopoverVisible: true,
    isSearchInProgress: false,
    searchTerm: '',
    searchClientResponseItems: [],
    searchClientRequestProperties: undefined,
  });

  const page = await render(
    <searchcraft-popover-form
      type={type}
      noResultsTemplate={noResultsTemplate}
      searchcraftId={SEARCHCRAFT_ID}
    />,
  );

  if (type === 'inline') {
    page.root
      ?.querySelector('searchcraft-input-form')
      ?.dispatchEvent(new CustomEvent('inputFocus'));
    await page.waitForChanges();
  }

  return page;
};

const noResults = (page: Awaited<ReturnType<typeof renderPopoverForm>>) =>
  page.root?.querySelector('.searchcraft-popover-form-no-results');

describe('searchcraft-popover-form no results state', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  for (const type of ['inline', 'modal', 'fullscreen'] as const) {
    it(`shows a no results message in the ${type} popover`, async () => {
      const page = await renderPopoverForm(type);

      completeSearch('zzzz');
      await page.waitForChanges();

      expect(noResults(page)?.textContent).toBe('No results found for "zzzz".');
      expect(page.root?.querySelector('searchcraft-popover-list-view')).toBe(
        null,
      );
    });
  }

  it('shows the results instead of the message when there are results', async () => {
    const page = await renderPopoverForm('modal');

    completeSearch('hello', [item]);
    await page.waitForChanges();

    expect(noResults(page)).toBeNull();
    expect(
      page.root?.querySelector('searchcraft-popover-list-view'),
    ).not.toBeNull();
  });

  it('does not show the message while a search is in progress', async () => {
    const page = await renderPopoverForm('modal');

    completeSearch('zzz');
    store.setState({ searchTerm: 'zzzz', isSearchInProgress: true });
    await page.waitForChanges();

    expect(noResults(page)).toBeNull();
  });

  it('does not show the message until the search for the current term returns', async () => {
    const page = await renderPopoverForm('modal');

    completeSearch('zzz');
    store.setState({ searchTerm: 'zzzz' });
    await page.waitForChanges();

    expect(noResults(page)).toBeNull();
  });

  it('does not show the message when the search term is empty', async () => {
    const page = await renderPopoverForm('modal');

    completeSearch('   ');
    await page.waitForChanges();

    expect(noResults(page)).toBeNull();
  });

  it('renders noResultsTemplate with the search term', async () => {
    const page = await renderPopoverForm(
      'modal',
      ({ searchTerm }, { html }) =>
        html`<p class="custom-no-results">Nada para "${searchTerm}"</p>`,
    );

    completeSearch('zzzz');
    await page.waitForChanges();

    expect(page.root?.querySelector('.custom-no-results')?.textContent).toBe(
      'Nada para "zzzz"',
    );
  });

  it('sanitizes the noResultsTemplate output with DOMPurify', async () => {
    // DOMPurify cannot sanitize in Stencil's mock document, so check that the
    // template's output is passed through it and that its result is rendered.
    const sanitize = vi
      .spyOn(DOMPurify, 'sanitize')
      .mockReturnValue('<p class="sanitized">Sanitized</p>');

    const page = await renderPopoverForm(
      'modal',
      ({ searchTerm }) => `<p>${searchTerm}</p>`,
    );

    completeSearch('<img src=x onerror=alert(1)>');
    await page.waitForChanges();

    expect(sanitize.mock.calls[0]?.[0]).toBe(
      '<p><img src=x onerror=alert(1)></p>',
    );
    expect(page.root?.querySelector('.sanitized')?.textContent).toBe(
      'Sanitized',
    );
    expect(page.root?.querySelector('img')).toBeNull();
  });

  it('logs an error and shows the default message when noResultsTemplate throws', async () => {
    const consoleError = vi.fn();
    vi.spyOn(console, 'error').mockImplementation(consoleError);

    const page = await renderPopoverForm('modal', () => {
      throw new Error('bad template');
    });

    completeSearch('zzzz');
    await page.waitForChanges();

    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(noResults(page)?.textContent).toBe('No results found for "zzzz".');
  });
});

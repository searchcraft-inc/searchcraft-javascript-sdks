import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { createSearchcraftStore } from '@store';
import type { SearchClientResponseItem } from '@types';

import { SearchcraftSearchResults } from './searchcraft-search-results';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => {
  toBe(expected: unknown): void;
  toBeNull(): void;
  not: { toBeNull(): void };
};

const SEARCHCRAFT_ID = 'search-results-spec';

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

const renderSearchResults = async () => {
  store.setState({
    isSearchInProgress: false,
    searchTerm: '',
    searchClientResponseItems: [],
    searchClientRequestProperties: undefined,
  });

  return newSpecPage({
    components: [SearchcraftSearchResults],
    template: () => (
      <searchcraft-search-results searchcraftId={SEARCHCRAFT_ID} />
    ),
  });
};

const noResultsMessage = (root?: Element | null) =>
  root?.querySelector('.searchcraft-search-results-no-results-message') ?? null;

const emptyState = (root?: Element | null) =>
  root?.querySelector('.searchcraft-search-results-empty-state') ?? null;

describe('searchcraft-search-results no results state', () => {
  it('shows the empty state when there is no search term', async () => {
    const page = await renderSearchResults();

    expect(emptyState(page.root)).not.toBeNull();
    expect(noResultsMessage(page.root)).toBeNull();
  });

  it('shows the no results message when a search returns no results', async () => {
    const page = await renderSearchResults();

    completeSearch('  zzzz  ');
    await page.waitForChanges();

    expect(noResultsMessage(page.root)?.textContent).toBe(
      'No results found for "zzzz".',
    );
    expect(emptyState(page.root)).toBeNull();
  });

  it('shows a search term with markup as text', async () => {
    const page = await renderSearchResults();
    const searchTerm = '<img src=x onerror="alert(1)">';

    completeSearch(searchTerm);
    await page.waitForChanges();

    expect(noResultsMessage(page.root)?.textContent).toBe(
      `No results found for "${searchTerm}".`,
    );
    expect(page.root?.querySelector('img')).toBeNull();
  });

  it('hides the no results message when there are results', async () => {
    const page = await renderSearchResults();

    completeSearch('hello', [item]);
    await page.waitForChanges();

    expect(noResultsMessage(page.root)).toBeNull();
    expect(emptyState(page.root)).toBeNull();
  });

  it('hides the no results message while a search is in progress', async () => {
    const page = await renderSearchResults();

    completeSearch('zzzz');
    store.setState({ isSearchInProgress: true });
    await page.waitForChanges();

    expect(noResultsMessage(page.root)).toBeNull();
  });

  it('hides the no results message until the current term is searched', async () => {
    const page = await renderSearchResults();

    completeSearch('zzzz');
    store.setState({ searchTerm: 'zzzzy' });
    await page.waitForChanges();

    expect(noResultsMessage(page.root)).toBeNull();
    expect(emptyState(page.root)).not.toBeNull();
  });
});

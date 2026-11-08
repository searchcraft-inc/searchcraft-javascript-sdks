import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { h, render } from '@stencil/vitest';
import type {
  PopoverResultMappings,
  SearchClientResponseItem,
  SearchResultTemplate,
  SearchResultTemplateData,
} from '@types';
import { afterEach, describe, expect, it, vi } from 'vitest';

import './searchcraft-popover-list-item';

const SEARCHCRAFT_ID = 'popover-list-item-spec';

const item: SearchClientResponseItem = {
  id: '1',
  document: {
    id: 1,
    title: 'Hello World',
    excerpt: 'An excerpt',
    url: 'https://example.com/hello-world',
  },
  source_index: 'posts',
};

const popoverResultMappings: PopoverResultMappings = {
  title: { fieldNames: [{ fieldName: 'title', dataType: 'text' }] },
  subtitle: { fieldNames: [{ fieldName: 'excerpt', dataType: 'text' }] },
  href: { fieldNames: [{ fieldName: 'url', dataType: 'text' }] },
};

const renderListItem = (
  template?: SearchResultTemplate<SearchResultTemplateData>,
  listItem: SearchClientResponseItem = item,
) =>
  render(
    <searchcraft-popover-list-item
      item={listItem}
      index={3}
      documentPosition={7}
      popoverResultMappings={popoverResultMappings}
      template={template}
      searchcraftId={SEARCHCRAFT_ID}
    />,
  );

describe('searchcraft-popover-list-item', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders popoverResultMappings when no template is provided', async () => {
    const page = await renderListItem();

    const link = page.root?.querySelector<HTMLAnchorElement>(
      '.searchcraft-popover-list-item-link',
    );
    expect(link?.getAttribute('href')).toBe('https://example.com/hello-world');
    expect(
      page.root?.querySelector('.searchcraft-popover-list-item-content-title')
        ?.textContent,
    ).toBe('Hello World');
    expect(
      page.root?.querySelector(
        '.searchcraft-popover-list-item-content-subtitle',
      )?.textContent,
    ).toBe('An excerpt');
    expect(
      page.root?.querySelector('.searchcraft-popover-list-item-template'),
    ).toBeNull();
  });

  it('blocks an unsafe URL in the mapped href', async () => {
    const page = await renderListItem(undefined, {
      ...item,
      document: { ...item.document, url: 'javascript:alert(1)' },
    });

    expect(
      page.root
        ?.querySelector('.searchcraft-popover-list-item-link')
        ?.getAttribute('href'),
    ).toBe('#');
  });

  it('renders the template instead of popoverResultMappings', async () => {
    const templateArgs = vi.fn();
    const page = await renderListItem((data, index, { html, source_index }) => {
      templateArgs(data, index, source_index);
      return html`<a class="custom-link" href="${data.url}">${data.title}</a>`;
    });

    expect(templateArgs).toHaveBeenCalledWith(item.document, 3, 'posts');
    const container = page.root?.querySelector(
      '.searchcraft-popover-list-item-template',
    );
    expect(container?.innerHTML).toContain(
      '<a class="custom-link" href="https://example.com/hello-world">Hello World</a>',
    );
    expect(
      page.root?.querySelector('.searchcraft-popover-list-item-link'),
    ).toBeNull();
  });

  it('passes safeUrl to the template', async () => {
    const page = await renderListItem(
      (data, _index, { html, safeUrl }) =>
        html`<a class="safe-link" href="${safeUrl(data.url)}">Safe</a><a class="unsafe-link" href="${safeUrl('javascript:alert(1)')}">Unsafe</a>`,
    );

    expect(page.root?.querySelector('.safe-link')?.getAttribute('href')).toBe(
      'https://example.com/hello-world',
    );
    expect(page.root?.querySelector('.unsafe-link')?.getAttribute('href')).toBe(
      '#',
    );
  });

  it('logs an error and falls back to popoverResultMappings when the template throws', async () => {
    const consoleError = vi.fn();
    vi.spyOn(console, 'error').mockImplementation(consoleError);

    const page = await renderListItem(() => {
      throw new Error('bad template');
    });

    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(
      page.root?.querySelector('.searchcraft-popover-list-item-template'),
    ).toBeNull();
    expect(
      page.root
        ?.querySelector('.searchcraft-popover-list-item-link')
        ?.getAttribute('href'),
    ).toBe('https://example.com/hello-world');
  });

  it('renders the template when it is set after the item renders', async () => {
    const page = await renderListItem();
    const listItem = page.root as HTMLElement & {
      template?: SearchResultTemplate<SearchResultTemplateData>;
    };

    listItem.template = (data, _index, { html }) =>
      html`<a class="custom-link" href="${data.url}">${data.title}</a>`;
    await page.waitForChanges();

    expect(page.root?.querySelector('.custom-link')?.textContent).toBe(
      'Hello World',
    );
    expect(
      page.root?.querySelector('.searchcraft-popover-list-item-link'),
    ).toBeNull();
  });

  it('sends document_clicked when a link in the template is clicked', async () => {
    const sendMeasureEvent = vi.fn();
    registry.addCoreInstance(
      {
        store: {
          getState: () => ({
            searchTerm: 'hello',
            searchClientResponseItems: [item, item],
          }),
        },
        measureClient: { sendMeasureEvent },
      } as unknown as SearchcraftCore,
      SEARCHCRAFT_ID,
    );

    const page = await renderListItem(
      (data, _index, { html }) =>
        html`<div class="custom-text">${data.title}</div><a class="custom-link" href="${data.url}">Read</a>`,
    );

    page.root
      ?.querySelector<HTMLElement>('.custom-text')
      ?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(sendMeasureEvent).not.toHaveBeenCalled();

    page.root
      ?.querySelector<HTMLElement>('.custom-link')
      ?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(sendMeasureEvent).toHaveBeenCalledWith('document_clicked', {
      document_position: 7,
      number_of_documents: 2,
      search_term: 'hello',
    });
  });
});

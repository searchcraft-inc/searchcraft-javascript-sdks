import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import type {
  PopoverResultMappings,
  SearchClientResponseItem,
  SearchResultTemplate,
  SearchResultTemplateData,
} from '@types';

import { SearchcraftPopoverListItem } from './searchcraft-popover-list-item';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void | Promise<void>) => void;
declare const afterEach: (fn: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => {
  toBe(expected: unknown): void;
  toBeNull(): void;
  toContain(expected: string): void;
  toHaveBeenCalledTimes(expected: number): void;
  toHaveBeenCalledWith(...expected: unknown[]): void;
  not: { toHaveBeenCalled(): void };
};
declare const jest: {
  fn(): ((...args: unknown[]) => unknown) & { mock: { calls: unknown[][] } };
  restoreAllMocks(): void;
  spyOn<T extends object, K extends keyof T>(
    object: T,
    method: K,
  ): {
    mockImplementation(impl: (...args: never[]) => unknown): void;
  };
};

const SEARCHCRAFT_ID = 'popover-list-item-spec';

const item: SearchClientResponseItem = {
  id: '1',
  document: {
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
) =>
  newSpecPage({
    components: [SearchcraftPopoverListItem],
    template: () => (
      <searchcraft-popover-list-item
        item={item}
        index={3}
        documentPosition={7}
        popoverResultMappings={popoverResultMappings}
        template={template}
        searchcraftId={SEARCHCRAFT_ID}
      />
    ),
  });

describe('searchcraft-popover-list-item', () => {
  afterEach(() => {
    jest.restoreAllMocks();
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

  it('renders the template instead of popoverResultMappings', async () => {
    const templateArgs = jest.fn();
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

  it('logs an error when the template throws', async () => {
    const consoleError = jest.fn();
    jest.spyOn(console, 'error').mockImplementation(consoleError);

    const page = await renderListItem(() => {
      throw new Error('bad template');
    });

    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(
      page.root?.querySelector('.searchcraft-popover-list-item-template')
        ?.innerHTML,
    ).toBe('');
  });

  it('sends document_clicked when a link in the template is clicked', async () => {
    const sendMeasureEvent = jest.fn();
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

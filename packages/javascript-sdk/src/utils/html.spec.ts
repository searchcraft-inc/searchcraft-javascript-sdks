import DOMPurify from 'dompurify';

import { html } from './html';
import { safeUrl } from './safeUrl';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void | Promise<void>) => void;
declare const afterEach: (fn: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => {
  toBe(expected: unknown): void;
  toBeNull(): void;
  not: { toHaveBeenCalled(): void };
};
declare const jest: {
  restoreAllMocks(): void;
  spyOn<T extends object, K extends keyof T>(
    object: T,
    method: K,
  ): {
    mockImplementation(impl: (...args: never[]) => unknown): void;
  };
};

const parse = (markup: string) => {
  const container = document.createElement('div');
  container.innerHTML = markup;
  return container.firstElementChild;
};

const attributeNames = (element: Element | null | undefined) =>
  Array.from(element?.attributes ?? [])
    .map((attribute) => attribute.name)
    .join();

/**
 * DOMPurify cannot sanitize in Stencil's mock document, so mark the values it is given instead.
 */
const markSanitizedValues = () =>
  jest
    .spyOn(DOMPurify, 'sanitize')
    .mockImplementation((value: string) => `[${value}]`);

describe('html', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('leaves values without quotes unchanged', () => {
    expect(
      html`<a href="${'/post?a=1&b=2'}" data-id="${42}">${'Hello World'}</a>`,
    ).toBe('<a href="/post?a=1&b=2" data-id="42">Hello World</a>');
  });

  it('sanitizes values in text and escapes values in attributes', () => {
    markSanitizedValues();

    expect(html`<p title="${'a"b'}" data-label='${"a'b"}'>${'text'}</p>`).toBe(
      `<p title="a&quot;b" data-label='a&#39;b'>[text]</p>`,
    );
  });

  it('sanitizes values in a template that has no tags', () => {
    markSanitizedValues();

    expect(html`${5} results for "${'term'}"`).toBe('[5] results for "[term]"');
  });

  it('keeps a value with quotes inside its attribute', () => {
    const title = 'x" onmouseover="alert(1)';
    const singleQuoted = "x' onfocus='alert(1)";
    const link = parse(
      html`<a title="${title}" data-label='${singleQuoted}'>Read</a>`,
    );

    expect(link?.getAttribute('title')).toBe(title);
    expect(link?.getAttribute('data-label')).toBe(singleQuoted);
    expect(attributeNames(link)).toBe('title,data-label');
  });

  it('displays a value with quotes the same in text and attributes', () => {
    const title = `He said "hi" and 'bye'`;
    const image = parse(html`<img alt="${title}" title='${title}'>`);
    const heading = parse(html`<h2>${title}</h2>`);

    expect(image?.getAttribute('alt')).toBe(title);
    expect(image?.getAttribute('title')).toBe(title);
    expect(heading?.textContent).toBe(title);
  });

  it('keeps a value with markup inside its attribute, as given', () => {
    const afterTag = '<b>x</b>" onmouseover="alert(1)';
    const inTag = '<img title=" onmouseover=alert(1) ">';
    const link = parse(
      html`<a title="${afterTag}" data-label="${inTag}">Read</a>`,
    );

    expect(link?.getAttribute('title')).toBe(afterTag);
    expect(link?.getAttribute('data-label')).toBe(inTag);
    expect(attributeNames(link)).toBe('title,data-label');
    expect(link?.textContent).toBe('Read');
  });

  it('places a URL from safeUrl as is', () => {
    const sanitize = jest.spyOn(DOMPurify, 'sanitize');
    const url = '<x>javascript:alert(1)</x>';

    expect(html`<a href="${safeUrl(url)}">Read</a>`).toBe(
      `<a href="${url}">Read</a>`,
    );
    expect(sanitize).not.toHaveBeenCalled();
  });

  it('escapes a value in an unquoted attribute', () => {
    const title = 'a b" onmouseover=alert(1)';
    const link = parse(html`<a title=${title} href=${''}>Read</a>`);

    expect(link?.getAttribute('title')).toBe(title);
    expect(link?.getAttribute('href')).toBe('');
    expect(attributeNames(link)).toBe('title,href');
  });

  it('places a value inside a tag as is', () => {
    const isActive = true;

    expect(
      html`<a href="/" ${isActive ? 'aria-current="page"' : ''}>Home</a>`,
    ).toBe('<a href="/" aria-current="page">Home</a>');
    expect(
      html`<a href="/" ${isActive ? html`aria-current="page"` : ''}>Home</a>`,
    ).toBe('<a href="/" aria-current="page">Home</a>');
  });

  it('escapes values in a nested list of attributes', () => {
    const label = '<b>x</b>" onmouseover="alert(1)';
    const link = parse(
      html`<a href="/" ${html`aria-label="${label}" data-x=${'a b'}`}>Read</a>`,
    );

    expect(link?.getAttribute('aria-label')).toBe(label);
    expect(link?.getAttribute('data-x')).toBe('a b');
    expect(attributeNames(link)).toBe('href,aria-label,data-x');
  });

  it('reads attribute values after comments and raw text elements', () => {
    markSanitizedValues();

    expect(
      html`<!-- " --><style>a[title="x"] > b {}</style><a title="${'q"'}">${'t'}</a><textarea>title="${'v'}</textarea>`,
    ).toBe(
      '<!-- " --><style>a[title="x"] > b {}</style><a title="q&quot;">[t]</a><textarea>title="[v]</textarea>',
    );
  });

});

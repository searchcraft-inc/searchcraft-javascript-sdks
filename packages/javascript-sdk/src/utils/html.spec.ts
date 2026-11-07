import { html } from './html';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => {
  toBe(expected: unknown): void;
  toBeNull(): void;
};

const parse = (markup: string) => {
  const container = document.createElement('div');
  container.innerHTML = markup;
  return container.firstElementChild;
};

describe('html', () => {
  it('leaves values without quotes unchanged', () => {
    expect(
      html`<a href="${'/post?a=1&b=2'}" data-id="${42}">${'Hello World'}</a>`,
    ).toBe('<a href="/post?a=1&b=2" data-id="42">Hello World</a>');
  });

  it('keeps a value with quotes inside its attribute', () => {
    const title = 'x" onmouseover="alert(1)';
    const singleQuoted = "x' onfocus='alert(1)";
    const link = parse(
      html`<a title="${title}" data-label='${singleQuoted}'>Read</a>`,
    );

    expect(link?.getAttribute('title')).toBe(title);
    expect(link?.getAttribute('data-label')).toBe(singleQuoted);
    expect(link?.getAttribute('onmouseover')).toBeNull();
    expect(link?.getAttribute('onfocus')).toBeNull();
  });

  it('displays a value with quotes the same in text and attributes', () => {
    const title = `He said "hi" and 'bye'`;
    const image = parse(html`<img alt="${title}" title='${title}'>`);
    const heading = parse(html`<h2>${title}</h2>`);

    expect(image?.getAttribute('alt')).toBe(title);
    expect(image?.getAttribute('title')).toBe(title);
    expect(heading?.textContent).toBe(title);
  });

  it('keeps the markup in a value while removing its quotes', () => {
    const value =
      '<a href="/post?a=1&amp;b=2" class="result link">It\'s</a> "here"';
    const markup = html`<p>${value}</p>`;
    const paragraph = parse(markup);
    const link = paragraph?.querySelector('a');

    expect(/["']/.test(markup.slice(3, -4))).toBe(false);
    expect(link?.getAttribute('href')).toBe('/post?a=1&b=2');
    expect(link?.getAttribute('class')).toBe('result link');
    expect(paragraph?.textContent).toBe(`It's "here"`);
  });

  it('keeps a value with markup inside its attribute', () => {
    const afterTag = '<b>x</b>" onmouseover="alert(1)';
    const inTag = '<img title=" onmouseover=alert(1) ">';
    const link = parse(
      html`<a title="${afterTag}" data-label="${inTag}">Read</a>`,
    );

    expect(link?.getAttribute('onmouseover')).toBeNull();
    expect(
      Array.from(link?.attributes ?? [])
        .map((attribute) => attribute.name)
        .join(),
    ).toBe('title,data-label');
    expect(link?.textContent).toBe('Read');
  });

  it('places the output of a nested html call as is', () => {
    const isActive = true;

    expect(
      html`<a href="/" ${isActive ? html`aria-current="page"` : ''}>Home</a>`,
    ).toBe('<a href="/" aria-current="page">Home</a>');
  });

  it('escapes attribute text that is not from an html call', () => {
    expect(html`<a href="/" ${'aria-current="page"'}>Home</a>`).toBe(
      '<a href="/" aria-current=&quot;page&quot;>Home</a>',
    );
  });

  it('escapes nested output kept from an earlier task', async () => {
    const attribute = html`aria-current="page"`;
    await Promise.resolve();

    expect(html`<a href="/" ${attribute}>Home</a>`).toBe(
      '<a href="/" aria-current=&quot;page&quot;>Home</a>',
    );
  });
});

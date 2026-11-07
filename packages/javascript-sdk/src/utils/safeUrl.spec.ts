import { safeUrl } from './safeUrl';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => {
  toBe(expected: unknown): void;
};

describe('safeUrl', () => {
  it('returns relative URLs unchanged', () => {
    for (const url of [
      '/2024/10/post',
      'post',
      '../x',
      '?s=term',
      '#comments',
      '/search?q=a:b',
      '?s=javascript:tips',
      'path/with:colon',
    ]) {
      expect(safeUrl(url)).toBe(url);
    }
  });

  it('returns protocol-relative URLs unchanged', () => {
    expect(safeUrl('//cdn.example.com/thumb.jpg')).toBe(
      '//cdn.example.com/thumb.jpg',
    );
  });

  it('returns http and https URLs unchanged in any letter case', () => {
    for (const url of [
      'http://example.com',
      'https://example.com/post?utm_source=x&a=1&amp;b=2#top',
      'HTTPS://Example.com/Post',
    ]) {
      expect(safeUrl(url)).toBe(url);
    }
  });

  it('returns mailto, tel and sms URLs unchanged', () => {
    for (const url of [
      'mailto:news@example.com',
      'tel:+15551234',
      'sms:+15551234',
    ]) {
      expect(safeUrl(url)).toBe(url);
    }
  });

  it('returns data image URLs and srcset lists unchanged', () => {
    for (const url of [
      'data:image/jpeg;base64,/9j/4AAQ',
      'data:image/svg+xml,%3Csvg%3E',
      'a.jpg 1x, b.jpg 2x',
      'https://cdn.example.com/a.jpg 480w, https://cdn.example.com/b.jpg 960w',
    ]) {
      expect(safeUrl(url)).toBe(url);
    }
  });

  it('allows the schemes passed in options', () => {
    expect(safeUrl('myapp://article/123', { schemes: ['myapp'] })).toBe(
      'myapp://article/123',
    );
    expect(safeUrl('intent://scan/#Intent;end', { schemes: ['Intent:'] })).toBe(
      'intent://scan/#Intent;end',
    );
    expect(safeUrl('myapp://article/123')).toBe('#');
  });

  it('blocks script URLs, non-image data URLs and unknown schemes', () => {
    for (const url of [
      'javascript:alert(1)',
      'vbscript:msgbox(1)',
      'data:text/html,<script>alert(1)</script>',
      'blob:https://example.com/1234',
      'ftp://example.com/file',
    ]) {
      expect(safeUrl(url)).toBe('#');
    }
  });

  it('blocks script URLs that are disguised', () => {
    for (const url of [
      'JaVaScRiPt:alert(1)',
      '  javascript:alert(1)',
      '\u0001javascript:alert(1)',
      'java\tscript:alert(1)',
      'java\nscript:alert(1)',
      'java\rscript:alert(1)',
      'javascript&colon;alert(1)',
      'javascript&#58;alert(1)',
      'javascript&#x3A;alert(1)',
      'javascript&#0000058alert(1)',
      '&#106;avascript:alert(1)',
      'java&Tab;script:alert(1)',
      'java&NewLine;script:alert(1)',
      ' data:text/html,<script>alert(1)</script>',
    ]) {
      expect(safeUrl(url)).toBe('#');
    }
  });

  it('returns an empty string for a missing URL and converts numbers to strings', () => {
    expect(safeUrl(undefined)).toBe('');
    expect(safeUrl(null)).toBe('');
    expect(safeUrl('')).toBe('');
    expect(safeUrl(42)).toBe('42');
  });
});

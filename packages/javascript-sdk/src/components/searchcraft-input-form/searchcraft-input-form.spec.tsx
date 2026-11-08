import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { SearchcraftInputForm } from './searchcraft-input-form';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void | Promise<void>) => void;
declare const afterEach: (fn: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => {
  toBe(expected: unknown): void;
  toHaveBeenCalledTimes(expected: number): void;
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

const renderInputForm = () =>
  newSpecPage({
    components: [SearchcraftInputForm],
    template: () => <searchcraft-input-form searchcraftId='input-form-spec' />,
  });

const mockPointer = (
  page: Awaited<ReturnType<typeof renderInputForm>>,
  isTouch: boolean,
) => {
  jest.spyOn(page.win, 'matchMedia').mockImplementation((query: string) => ({
    media: query,
    matches: isTouch && query === '(hover: none) and (pointer: coarse)',
  }));
};

const submitForm = async (
  page: Awaited<ReturnType<typeof renderInputForm>>,
) => {
  const input = page.root?.querySelector('input') as HTMLInputElement;
  const blur = jest.fn();
  input.blur = blur;
  page.root
    ?.querySelector('form')
    ?.dispatchEvent(new Event('submit', { cancelable: true }));
  await page.waitForChanges();
  return blur;
};

describe('searchcraft-input-form', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('labels the on-screen keyboard enter key as search', async () => {
    const page = await renderInputForm();

    expect(
      page.root?.querySelector('input')?.getAttribute('enterkeyhint'),
    ).toBe('search');
  });

  it('closes the on-screen keyboard when a search is submitted on a touch device', async () => {
    const page = await renderInputForm();
    mockPointer(page, true);

    const blur = await submitForm(page);

    expect(blur).toHaveBeenCalledTimes(1);
  });

  it('keeps focus in the input when a search is submitted on a device with a mouse', async () => {
    const page = await renderInputForm();
    mockPointer(page, false);

    const blur = await submitForm(page);

    expect(blur).not.toHaveBeenCalled();
  });
});

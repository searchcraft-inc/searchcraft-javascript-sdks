import { h, render } from '@stencil/vitest';
import { afterEach, describe, expect, it, vi } from 'vitest';

import './searchcraft-input-form';

const renderInputForm = () =>
  render(<searchcraft-input-form searchcraftId='input-form-spec' />);

const mockPointer = (isTouch: boolean) => {
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string) =>
      ({
        media: query,
        matches: isTouch && query === '(hover: none) and (pointer: coarse)',
      }) as MediaQueryList,
  );
};

const submitForm = async (
  page: Awaited<ReturnType<typeof renderInputForm>>,
) => {
  const input = page.root?.querySelector('input') as HTMLInputElement;
  const blur = vi.fn();
  input.blur = blur;
  page.root
    ?.querySelector('form')
    ?.dispatchEvent(new Event('submit', { cancelable: true }));
  await page.waitForChanges();
  return blur;
};

describe('searchcraft-input-form', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('labels the on-screen keyboard enter key as search', async () => {
    const page = await renderInputForm();

    expect(
      page.root?.querySelector('input')?.getAttribute('enterkeyhint'),
    ).toBe('search');
  });

  it('closes the on-screen keyboard when a search is submitted on a touch device', async () => {
    const page = await renderInputForm();
    mockPointer(true);

    const blur = await submitForm(page);

    expect(blur).toHaveBeenCalledTimes(1);
  });

  it('keeps focus in the input when a search is submitted on a device with a mouse', async () => {
    const page = await renderInputForm();
    mockPointer(false);

    const blur = await submitForm(page);

    expect(blur).not.toHaveBeenCalled();
  });
});

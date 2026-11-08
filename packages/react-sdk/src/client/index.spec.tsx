import { cleanup, render } from '@testing-library/react';
import type { FC } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import * as generated from '../stencil-output/components';
import * as client from './index';

const SEARCHCRAFT_ID = 'react-client-spec';

// Components without a searchcraftId prop.
const WITHOUT_SEARCHCRAFT_ID = ['SearchcraftTheme'];

const componentNames = Object.keys(generated)
  .filter((name) => /^Searchcraft[A-Z]/.test(name))
  .sort();

const toTagName = (name: string) =>
  name.replace(/[A-Z]/g, (letter, index) =>
    index === 0 ? letter.toLowerCase() : `-${letter.toLowerCase()}`,
  );

afterEach(() => {
  cleanup();
});

describe('client wrappers', () => {
  it('exports a wrapper for every component', () => {
    const wrapperNames = Object.keys(client)
      .filter((name) => /^Searchcraft[A-Z]/.test(name))
      .sort();

    expect(componentNames.length).toBeGreaterThan(0);
    expect(wrapperNames).toEqual(componentNames);
  });

  it.each(componentNames)('%s renders its custom element', (name) => {
    const Wrapper = client[name as keyof typeof client] as FC<{
      searchcraftId?: string;
    }>;
    const { container } = render(<Wrapper searchcraftId={SEARCHCRAFT_ID} />);
    const element = container.querySelector(toTagName(name)) as
      | (Element & { searchcraftId?: string })
      | null;

    expect(element).not.toBeNull();
    if (!WITHOUT_SEARCHCRAFT_ID.includes(name)) {
      expect(element?.searchcraftId).toBe(SEARCHCRAFT_ID);
    }
  });
});

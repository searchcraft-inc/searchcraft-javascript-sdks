import { afterEach, describe, expect, it } from 'vitest';
import { createApp, h } from 'vue';
import type { Component } from 'vue';

import * as sdk from './index';
import * as generated from './stencil-web-components';

const SEARCHCRAFT_ID = 'vue-spec';

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
  document.body.innerHTML = '';
});

describe('Vue components', () => {
  it('exports every component', () => {
    const exportedNames = Object.keys(sdk)
      .filter((name) => /^Searchcraft[A-Z]/.test(name))
      .sort();

    expect(componentNames.length).toBeGreaterThan(0);
    expect(exportedNames).toEqual(componentNames);
  });

  it.each(componentNames)('%s renders its custom element', (name) => {
    const component = sdk[name as keyof typeof sdk] as Component;
    const container = document.createElement('div');
    document.body.append(container);

    const app = createApp({
      render: () => h(component, { searchcraftId: SEARCHCRAFT_ID }),
    });
    app.mount(container);

    const element = container.querySelector(toTagName(name)) as
      | (Element & { searchcraftId?: string })
      | null;

    expect(element).not.toBeNull();
    if (!WITHOUT_SEARCHCRAFT_ID.includes(name)) {
      expect(element?.searchcraftId).toBe(SEARCHCRAFT_ID);
    }

    app.unmount();
  });
});

import { readdirSync } from 'node:fs';
import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { render } from '@stencil/vitest';
import { createSearchcraftStore } from '@store';
import { describe, expect, it, vi } from 'vitest';

import './searchcraft-ad/searchcraft-ad';
import './searchcraft-button/searchcraft-button';
import './searchcraft-error-message/searchcraft-error-message';
import './searchcraft-facet-list/searchcraft-facet-list';
import './searchcraft-filter-panel/searchcraft-filter-panel';
import './searchcraft-input-form/searchcraft-input-form';
import './searchcraft-input-label/searchcraft-input-label';
import './searchcraft-loading/searchcraft-loading';
import './searchcraft-pagination/searchcraft-pagination';
import './searchcraft-popover-button/searchcraft-popover-button';
import './searchcraft-popover-footer/searchcraft-popover-footer';
import './searchcraft-popover-form/searchcraft-popover-form';
import './searchcraft-popover-list-item/searchcraft-popover-list-item';
import './searchcraft-popover-list-view/searchcraft-popover-list-view';
import './searchcraft-results-info/searchcraft-results-info';
import './searchcraft-results-summary/searchcraft-results-summary';
import './searchcraft-search-result/searchcraft-search-result';
import './searchcraft-search-results/searchcraft-search-results';
import './searchcraft-search-results-per-page/searchcraft-search-results-per-page';
import './searchcraft-select/searchcraft-select';
import './searchcraft-slider/searchcraft-slider';
import './searchcraft-summary-box/searchcraft-summary-box';
import './searchcraft-theme/searchcraft-theme';
import './searchcraft-toggle-button/searchcraft-toggle-button';

const SEARCHCRAFT_ID = 'components-spec';

// Each component lives in a directory named after its tag.
const tags = readdirSync(new URL('.', import.meta.url), { withFileTypes: true })
  .filter(
    (entry) => entry.isDirectory() && entry.name.startsWith('searchcraft-'),
  )
  .map((entry) => entry.name)
  .sort();

// The spec document has no IntersectionObserver, which searchcraft-ad uses to
// tell when an ad is seen.
vi.stubGlobal(
  'IntersectionObserver',
  class {
    observe() {
      return undefined;
    }
    unobserve() {
      return undefined;
    }
    disconnect() {
      return undefined;
    }
  },
);

registry.addCoreInstance(
  {
    store: createSearchcraftStore(SEARCHCRAFT_ID),
  } as unknown as SearchcraftCore,
  SEARCHCRAFT_ID,
);

describe('every component', () => {
  it('imports every component in this spec', () => {
    expect(tags.length).toBeGreaterThan(0);
    for (const tag of tags) {
      expect(customElements.get(tag), tag).toBeDefined();
    }
  });

  it.each(tags)('%s renders without errors', async (tag) => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {
      return undefined;
    });

    try {
      const { root } = await render(
        `<${tag} searchcraft-id="${SEARCHCRAFT_ID}"></${tag}>`,
      );

      expect(root.tagName.toLowerCase()).toBe(tag);
      expect(consoleError).not.toHaveBeenCalled();
    } finally {
      consoleError.mockRestore();
    }
  });
});

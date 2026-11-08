// The spec runner cannot load nanoid, which is ESM only, or the theme CSS,
// which the build imports as a string.
jest.mock('nanoid', () => ({ nanoid: () => 'spec-id' }));
jest.mock(
  '../themes/hologram.css?raw',
  () => ({ __esModule: true, default: '' }),
  { virtual: true },
);

import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { newSpecPage } from '@stencil/core/testing';
import { createSearchcraftStore } from '@store';

import { SearchcraftPopoverListItemAd } from './searchcraft-ad/searchcraft-ad';
import { SearchcraftButton } from './searchcraft-button/searchcraft-button';
import { SearchcraftErrorMessage } from './searchcraft-error-message/searchcraft-error-message';
import { SearchcraftFacetList } from './searchcraft-facet-list/searchcraft-facet-list';
import { SearchcraftFilterPanel } from './searchcraft-filter-panel/searchcraft-filter-panel';
import { SearchcraftInputForm } from './searchcraft-input-form/searchcraft-input-form';
import { SearchcraftInputLabel } from './searchcraft-input-label/searchcraft-input-label';
import { SearchcraftInputLabel as SearchcraftLoading } from './searchcraft-loading/searchcraft-loading';
import { SearchcraftPagination } from './searchcraft-pagination/searchcraft-pagination';
import { SearchcraftPopoverButton } from './searchcraft-popover-button/searchcraft-popover-button';
import { SearchcraftPopoverFooter } from './searchcraft-popover-footer/searchcraft-popover-footer';
import { SearchcraftPopoverForm } from './searchcraft-popover-form/searchcraft-popover-form';
import { SearchcraftPopoverListItem } from './searchcraft-popover-list-item/searchcraft-popover-list-item';
import { SearchcraftPopoverListView } from './searchcraft-popover-list-view/searchcraft-popover-list-view';
import { SearchcraftResultsInfo } from './searchcraft-results-info/searchcraft-results-info';
import { SearchcraftResultsSummary } from './searchcraft-results-summary/searchcraft-results-summary';
import { SearchcraftSearchResult } from './searchcraft-search-result/searchcraft-search-result';
import { SearchcraftSearchResultsPerPage } from './searchcraft-search-results-per-page/searchcraft-search-results-per-page';
import { SearchcraftSearchResults } from './searchcraft-search-results/searchcraft-search-results';
import { SearchcraftSelect } from './searchcraft-select/searchcraft-select';
import { SearchcraftSlider } from './searchcraft-slider/searchcraft-slider';
import { SearchcraftSummaryBox } from './searchcraft-summary-box/searchcraft-summary-box';
import { SearchcraftTheme } from './searchcraft-theme/searchcraft-theme';
import { SearchcraftToggleButton } from './searchcraft-toggle-button/searchcraft-toggle-button';

const SEARCHCRAFT_ID = 'components-spec';

// The spec document has no IntersectionObserver, which searchcraft-ad uses to
// tell when an ad is seen.
class IntersectionObserverStub {
  observe() {
    return undefined;
  }
  unobserve() {
    return undefined;
  }
  disconnect() {
    return undefined;
  }
}
Object.assign(globalThis, { IntersectionObserver: IntersectionObserverStub });

registry.addCoreInstance(
  {
    store: createSearchcraftStore(SEARCHCRAFT_ID),
  } as unknown as SearchcraftCore,
  SEARCHCRAFT_ID,
);

const components: [string, unknown][] = [
  ['searchcraft-ad', SearchcraftPopoverListItemAd],
  ['searchcraft-button', SearchcraftButton],
  ['searchcraft-error-message', SearchcraftErrorMessage],
  ['searchcraft-facet-list', SearchcraftFacetList],
  ['searchcraft-filter-panel', SearchcraftFilterPanel],
  ['searchcraft-input-form', SearchcraftInputForm],
  ['searchcraft-input-label', SearchcraftInputLabel],
  ['searchcraft-loading', SearchcraftLoading],
  ['searchcraft-pagination', SearchcraftPagination],
  ['searchcraft-popover-button', SearchcraftPopoverButton],
  ['searchcraft-popover-footer', SearchcraftPopoverFooter],
  ['searchcraft-popover-form', SearchcraftPopoverForm],
  ['searchcraft-popover-list-item', SearchcraftPopoverListItem],
  ['searchcraft-popover-list-view', SearchcraftPopoverListView],
  ['searchcraft-results-info', SearchcraftResultsInfo],
  ['searchcraft-results-summary', SearchcraftResultsSummary],
  ['searchcraft-search-result', SearchcraftSearchResult],
  ['searchcraft-search-results', SearchcraftSearchResults],
  ['searchcraft-search-results-per-page', SearchcraftSearchResultsPerPage],
  ['searchcraft-select', SearchcraftSelect],
  ['searchcraft-slider', SearchcraftSlider],
  ['searchcraft-summary-box', SearchcraftSummaryBox],
  ['searchcraft-theme', SearchcraftTheme],
  ['searchcraft-toggle-button', SearchcraftToggleButton],
];

describe('every component', () => {
  it.each(components)('%s renders without errors', async (tag, component) => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    try {
      const page = await newSpecPage({
        components: [component],
        html: `<${tag} searchcraft-id="${SEARCHCRAFT_ID}"></${tag}>`,
      });

      expect(page.root?.tagName.toLowerCase()).toBe(tag);
      expect(consoleError).not.toHaveBeenCalled();
    } finally {
      consoleError.mockRestore();
    }
  });
});

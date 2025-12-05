import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { Component, Element, Prop, State, h } from '@stencil/core';
import type {
  DateRangeFilterItem,
  ExactMatchToggleFilterItem,
  FacetsFilterItem,
  FilterItem,
  MostRecentToggleFilterItem,
  NumericFilterItem,
} from '@types';

/**
 * This web component represents a series of filters that allows users to refine and control their search queries by applying various filter criteria.
 *
 * @react-import
 * ```jsx
 * import { SearchcraftFilterPanel } from "@searchcraft/react-sdk";
 * ```
 *
 * @vue-import
 * ```jsx
 * import { SearchcraftFilterPanel } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <!-- index.html -->
 * <searchcraft-filter-panel />
 * ```
 *
 * ```js
 * // index.js
 * const filterPanel = document.querySelector('searchcraft-filter-panel');
 *
 * if (filterPanel) {
 *   filterPanel.items = [];
 * }
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftFilterPanel items={[]} />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftFilterPanel :items="[]" />
 * ```
 */
@Component({
  tag: 'searchcraft-filter-panel',
  shadow: false,
})
export class SearchcraftFilterPanel {
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;
  /**
   * The items to filter.
   */
  @Prop() items: FilterItem[] = [];
  /**
   * The breakpoint (in pixels) below which the filter panel will be hidden.
   * Defaults to 768px (--sc-breakpoint-md).
   */
  @Prop() responsiveBreakpoint?: number = 768;
  /**
   * Controls whether the filter panel automatically hides/shows based on window size.
   * - 'auto': Automatically hide/show based on window width
   * - 'manual': User controls visibility manually
   */
  @Prop() responsiveBehavior?: 'auto' | 'manual' = 'auto';

  @State() lastSearchTerm: string | undefined;
  @State() isFilterPanelVisible = true;

  @Element() hostElement!: HTMLElement;

  private core?: SearchcraftCore;
  private unsubscribe?: () => void;
  private cleanupCore?: () => void;
  private resizeObserver?: ResizeObserver;
  private manuallyToggled = false; // Track if user manually toggled visibility
  private toggleClickHandler?: (event: Event) => void;

  onCoreAvailable(core: SearchcraftCore) {
    this.core = core;
    this.setInitialDateRanges();

    // Initialize visibility based on current window size if in auto mode
    if (this.responsiveBehavior === 'auto') {
      this.updateVisibilityBasedOnWindowSize();
    }

    this.unsubscribe = core.store.subscribe((state, prevState) => {
      if (this.lastSearchTerm !== state.searchTerm) {
        // A place to put actions to do when the query changes
      }
      this.lastSearchTerm = state.searchTerm || '';

      // Check if visibility was manually changed (not by auto-resize)
      if (prevState.isFilterPanelVisible !== state.isFilterPanelVisible) {
        const windowWidth = window.innerWidth;
        const autoVisibility =
          windowWidth >= (this.responsiveBreakpoint || 768);

        // If the new state differs from what auto mode would set, it was manual
        if (state.isFilterPanelVisible !== autoVisibility) {
          this.manuallyToggled = true;
        }

        // Update toggle element attributes when visibility changes
        this.updateToggleElementAttributes(state.isFilterPanelVisible);
      }

      this.isFilterPanelVisible = state.isFilterPanelVisible;
    });
  }

  componentDidLoad() {
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );

    // Set up resize observer if in auto mode
    if (this.responsiveBehavior === 'auto' && typeof window !== 'undefined') {
      this.setupResizeObserver();
    }

    // Set up click handlers for elements with data-toggle-filter-panel attribute
    this.setupToggleClickHandlers();

    // Set initial toggle element state immediately
    // Use setTimeout to ensure this runs after the store is initialized
    setTimeout(() => {
      if (this.core) {
        const currentVisibility =
          this.core.store.getState().isFilterPanelVisible;
        this.updateToggleElementAttributes(currentVisibility);
      }
    }, 0);
  }

  disconnectedCallback() {
    this.unsubscribe?.();
    this.cleanupCore?.();
    this.resizeObserver?.disconnect();

    // Clean up window resize listener if it was used as fallback
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleWindowResize);
    }

    // Clean up toggle click handlers
    this.cleanupToggleClickHandlers();
  }

  /**
   * Sets up a ResizeObserver to watch for window size changes
   */
  setupResizeObserver() {
    if (typeof ResizeObserver === 'undefined') {
      // Fallback to window resize event if ResizeObserver is not available
      window.addEventListener('resize', this.handleWindowResize);
      return;
    }

    this.resizeObserver = new ResizeObserver(() => {
      this.handleWindowResize();
    });

    // Observe the document body for size changes
    this.resizeObserver.observe(document.body);
  }

  /**
   * Handles window resize events
   */
  handleWindowResize = () => {
    if (this.responsiveBehavior === 'auto') {
      this.updateVisibilityBasedOnWindowSize();
    }
  };

  /**
   * Updates filter panel visibility based on current window width
   */
  updateVisibilityBasedOnWindowSize() {
    if (typeof window === 'undefined') return;

    // Don't auto-hide/show if user manually toggled it
    if (this.manuallyToggled) return;

    const windowWidth = window.innerWidth;
    const shouldBeVisible = windowWidth >= (this.responsiveBreakpoint || 768);

    if (this.core && this.isFilterPanelVisible !== shouldBeVisible) {
      this.core.store.getState().setFilterPanelVisibility(shouldBeVisible);
    }
  }

  /**
   * Sets up click handlers for elements with data-toggle-filter-panel attribute
   */
  setupToggleClickHandlers() {
    if (typeof document === 'undefined') return;

    this.toggleClickHandler = (event: Event) => {
      // Only allow toggle on mobile (below breakpoint)
      const windowWidth = window.innerWidth;
      if (windowWidth >= (this.responsiveBreakpoint || 768)) {
        return; // Don't toggle on desktop
      }

      event.preventDefault();
      if (this.core) {
        const currentVisibility =
          this.core.store.getState().isFilterPanelVisible;
        this.core.store.getState().setFilterPanelVisibility(!currentVisibility);
      }
    };

    // Find all elements with the data attribute
    const toggleElements = document.querySelectorAll(
      '[data-toggle-filter-panel]',
    );
    toggleElements.forEach((element) => {
      if (this.toggleClickHandler) {
        element.addEventListener('click', this.toggleClickHandler);
      }
    });
  }

  /**
   * Updates data attributes on toggle elements to reflect panel visibility state
   */
  updateToggleElementAttributes(isVisible: boolean) {
    if (typeof document === 'undefined') return;

    const toggleElements = document.querySelectorAll(
      '[data-toggle-filter-panel]',
    );
    toggleElements.forEach((element) => {
      if (isVisible) {
        element.removeAttribute('data-filter-panel-collapsed');
        element.setAttribute('data-filter-panel-expanded', '');
      } else {
        element.removeAttribute('data-filter-panel-expanded');
        element.setAttribute('data-filter-panel-collapsed', '');
      }
    });
  }

  /**
   * Cleans up click handlers for toggle elements
   */
  cleanupToggleClickHandlers() {
    if (typeof document === 'undefined' || !this.toggleClickHandler) return;

    const toggleElements = document.querySelectorAll(
      '[data-toggle-filter-panel]',
    );
    toggleElements.forEach((element) => {
      if (this.toggleClickHandler) {
        element.removeEventListener('click', this.toggleClickHandler);
      }
    });
  }

  /**
   * Sets the initial min/max date range values for search queries based on the filter items provided.
   */
  setInitialDateRanges() {
    for (const item of this.items) {
      if (item.type === 'dateRange') {
        const dateItem = item as DateRangeFilterItem;

        const startingMinDate = dateItem.options.minDate;
        const startingMaxDate = dateItem.options.maxDate || new Date();

        this.core?.store.getState()?.addRangeValueForIndexField({
          fieldName: dateItem.fieldName,
          value: `${dateItem.fieldName}:[${startingMinDate.toISOString()} TO ${startingMaxDate.toISOString()}]`,
        });
      }
    }
  }

  handleDateRangeChanged(item: DateRangeFilterItem, min: number, max: number) {
    const start = new Date(min);
    const end = new Date(max);
    this.core?.store.getState()?.addRangeValueForIndexField({
      fieldName: item.fieldName,
      value: `${item.fieldName}:[${start.toISOString()} TO ${end.toISOString()}]`,
    });

    this.core?.store.getState()?.search();
  }

  handleNumericRangeChanged(fieldName: string, min: number, max: number) {
    this.core?.store.getState()?.addRangeValueForIndexField({
      fieldName,
      value: `${fieldName}:[${min} TO ${max}]`,
    });
    this.core?.store.getState()?.search();
  }

  handleFacetSelectionUpdated(fieldName: string, paths: string[]) {
    if (paths.length > 0) {
      this.core?.store.getState()?.addFacetPathsForIndexField({
        fieldName,
        value: `${fieldName}: IN [${paths.join(' ')}]`,
      });
    } else {
      this.core?.store.getState()?.removeFacetPathsForIndexField(fieldName);
    }
    this.core?.store.getState()?.search();
  }

  handleExactMatchToggleUpdated(isActive: boolean) {
    this.core?.store.getState()?.setSearchMode(isActive ? 'exact' : 'fuzzy');
    this.core?.store.getState()?.search();
  }

  handleMostRecentToggleUpdated(fieldName: string, isActive: boolean) {
    if (isActive) {
      this.core?.store.getState()?.setSortOrder({
        orderByField: fieldName,
        sortType: 'desc',
      });
    } else {
      this.core?.store.getState()?.setSortOrder({
        orderByField: null,
        sortType: null,
      });
    }
    this.core?.store.getState()?.search();
  }

  /**
   * Iterate through `items` and render them based on `type`
   */
  render() {
    // Don't render if not visible
    if (!this.isFilterPanelVisible) {
      return null;
    }

    return (
      <div class='searchcraft-filter-panel'>
        {this.items.map((filterItem) => {
          switch (filterItem.type) {
            case 'dateRange': {
              const item = filterItem as DateRangeFilterItem;
              const maxDate = item.options.maxDate || new Date();

              // return date range slider
              return (
                <div class='searchcraft-filter-panel-section'>
                  <p class='searchcraft-filter-panel-label'>
                    {filterItem.label}
                  </p>
                  <searchcraft-slider
                    min={item.options.minDate.getTime()}
                    max={maxDate.getTime()}
                    dataType='date'
                    step={1}
                    dateGranularity={item.options.granularity}
                    onRangeChanged={(event) => {
                      this.handleDateRangeChanged(
                        item,
                        event.detail.startValue,
                        event.detail.endValue,
                      );
                    }}
                  />
                </div>
              );
            }
            case 'numericRange': {
              const item = filterItem as NumericFilterItem;
              // return date range slider
              return (
                <div class='searchcraft-filter-panel-section'>
                  <p class='searchcraft-filter-panel-label'>
                    {filterItem.label}
                  </p>
                  <searchcraft-slider
                    min={item.options.min}
                    max={item.options.max}
                    step={item.options.granularity}
                    onRangeChanged={(event) => {
                      this.handleNumericRangeChanged(
                        item.fieldName,
                        event.detail.startValue,
                        event.detail.endValue,
                      );
                    }}
                  />
                </div>
              );
            }
            case 'facets': {
              const item = filterItem as FacetsFilterItem;
              // return "filters-list"
              return (
                <div class='searchcraft-filter-panel-section'>
                  <p class='searchcraft-filter-panel-label'>
                    {filterItem.label}
                  </p>
                  <searchcraft-facet-list
                    fieldName={item.fieldName}
                    exclude={item.options.exclude}
                    onFacetSelectionUpdated={(event) => {
                      this.handleFacetSelectionUpdated(
                        item.fieldName,
                        event.detail.paths,
                      );
                    }}
                  />
                </div>
              );
            }
            case 'exactMatchToggle': {
              const item = filterItem as ExactMatchToggleFilterItem;
              return (
                <searchcraft-toggle-button
                  label={item.label}
                  subLabel={item.options.subLabel}
                  onToggleUpdated={(event) => {
                    this.handleExactMatchToggleUpdated(event.detail);
                  }}
                />
              );
            }
            case 'mostRecentToggle': {
              const item = filterItem as MostRecentToggleFilterItem;
              return (
                <searchcraft-toggle-button
                  label={item.label}
                  subLabel={item.options.subLabel}
                  onToggleUpdated={(event) => {
                    this.handleMostRecentToggleUpdated(
                      item.fieldName,
                      event.detail,
                    );
                  }}
                />
              );
            }
          }
        })}
      </div>
    );
  }
}

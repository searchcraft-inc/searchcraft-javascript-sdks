import {
  Component,
  h,
  State,
  Prop,
  Event,
  type EventEmitter,
  Fragment,
} from '@stencil/core';
import classNames from 'classnames';

import type { FacetChild, FacetRoot } from '@searchcraft/core';

import { useSearchcraftStore, type SearchcraftState } from '@provider/store';

@Component({
  tag: 'searchcraft-facet-list',
  styleUrl: 'searchcraft-facet-list.module.scss',
  shadow: false,
})
export class SearchcraftFiltersList {
  @Prop() fieldName: string;

  @Event() facetSelectionUpdated: EventEmitter<{ paths: string[] }>;

  @State() facetRoot: FacetRoot | undefined;
  @State() selectedPaths: Record<string, boolean> = {};
  @State() unsubscribe: (() => void) | undefined;

  private searchStore = useSearchcraftStore.getState();

  initFacetRootFromState(state: SearchcraftState) {
    console.log('Init facet list from state');
    console.log(state.searchResults?.data.facets);
    const facetPrime = state.searchResults?.data.facets;

    if (facetPrime) {
      const facetRoot: FacetRoot = facetPrime.find(
        (facet) => this.fieldName === Object.keys(facet)[0],
      );

      this.facetRoot = facetRoot;
    }
  }

  connectedCallback() {
    console.log('Connected callback');
    this.initFacetRootFromState(this.searchStore);

    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.initFacetRootFromState(state);
    });
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  handleCheckboxChange(path: string) {
    this.selectedPaths[path] = !this.selectedPaths[path];

    const paths = Object.keys(this.selectedPaths).filter(
      (path) => this.selectedPaths[path],
    );

    this.facetSelectionUpdated.emit({ paths });
  }

  formatLabel = (facetChild: FacetChild): string => {
    const label = facetChild.path.replace(/^\//, '');
    const count = facetChild.count;
    return `${label.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())} (${count})`;
  };

  render() {
    return (
      <div
        class={classNames(
          'filtersListContainer',
          'searchcraft-filters-list-container',
        )}
      >
        {this.facetRoot?.[this.fieldName]?.map((facetChild: FacetChild) => {
          const isChildSelected = facetChild.children
            ? facetChild.children?.some(
                (child) => this.selectedPaths[child.path],
              )
            : false;

          return (
            <div
              key={facetChild.path}
              class={classNames('searchcraft-filters-list-item')}
            >
              <label
                class={classNames(
                  'filterCheckboxLabel',
                  'searchcraft-filters-list-checkbox-label',
                )}
              >
                <input
                  checked={this.selectedPaths[facetChild.path]}
                  onChange={(_event: Event) =>
                    this.handleCheckboxChange(facetChild.path)
                  }
                  type='checkbox'
                />
                {isChildSelected ? (
                  <div
                    class={classNames(
                      'dashContainer',
                      'searchcraft-filter-list-dash-container',
                    )}
                  >
                    <searchcraft-dash-icon />
                  </div>
                ) : (
                  <div
                    class={classNames(
                      'checkContainer',
                      'searchcraft-filter-list-check-container',
                    )}
                  >
                    <searchcraft-check-icon />
                  </div>
                )}
                {this.formatLabel(facetChild)}
              </label>
              {facetChild.children && facetChild.children.length > 0 && (
                <Fragment>
                  {facetChild.children.map((grandchild) => (
                    <label
                      key={grandchild.path}
                      class={classNames(
                        'childFilterCheckboxLabel',
                        'searchcraft-child-filter-checkbox-label',
                      )}
                      style={{
                        display: this.selectedPaths[facetChild.path]
                          ? 'flex'
                          : 'none',
                      }}
                    >
                      <input
                        checked={this.selectedPaths[grandchild.path]}
                        onChange={(_event: Event) =>
                          this.handleCheckboxChange(grandchild.path)
                        }
                        type='checkbox'
                      />
                      <div
                        class={classNames(
                          'checkContainer',
                          'searchcraft-filter-list-check-container',
                        )}
                      >
                        <searchcraft-check-icon />
                      </div>
                      {this.formatLabel(grandchild)}
                    </label>
                  ))}
                </Fragment>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

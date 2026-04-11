import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';

import { SearchcraftResultsSummary as Component } from '../stencil-output/components';

/**
 * The Props for the SearchcraftResultsSummary component.
 */
interface SearchcraftResultsSummaryProps
  extends Components.SearchcraftResultsSummary {}

/**
 * This React component displays an ai-generated results summary of the given search term.
 *
 * @example
 * ```tsx
 * import React, { useEffect, useRef } from 'react';
 * import { SearchcraftResultsSummary } from '@searchcraft/react-sdk';
 *
 *   return <SearchcraftResultsSummary />;
 * };
 *
 * export default MyResultsInfo;
 * ```
 */
const SearchcraftResultsSummary: FC<SearchcraftResultsSummaryProps> = (
  props,
) => <Component {...props} />;

export { SearchcraftResultsSummary };
export type { SearchcraftResultsSummaryProps };

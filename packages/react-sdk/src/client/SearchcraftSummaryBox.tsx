import type { FC } from 'react';

import type { Components } from '@searchcraft/javascript-sdk';

import { SearchcraftSummaryBox as Component } from '../stencil-output/components';

/**
 * The Props for the SearchcraftSummaryBox component.
 */
interface SearchcraftSummaryBoxProps extends Components.SearchcraftSummaryBox {}

/**
 * This React component displays an ai-generated summary of the given search term.
 *
 * @example
 * ```tsx
 * import React, { useEffect, useRef } from 'react';
 * import { SearchcraftSummaryBox } from '@searchcraft/react-sdk';
 *
 *   return <SearchcraftSummaryBox />;
 * };
 *
 * export default MyResultsInfo;
 * ```
 */
const SearchcraftSummaryBox: FC<SearchcraftSummaryBoxProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftSummaryBox };
export type { SearchcraftSummaryBoxProps };

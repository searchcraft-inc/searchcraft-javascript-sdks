import type { FC } from 'react';

import { SearchcraftBaseSearchResults } from '../../stencil-web-components/components';
import type { SearchResultMappings } from '@searchcraft/javascript-sdk/dist/types/components.js';

export type BaseSearchResultsProps = {
  adInterval: number;
  customStylesForResults:
    | string
    | Record<string, Record<string, string>>
    | undefined;
  searchResultMappings: SearchResultMappings | undefined;
  placeAdAtEnd: boolean;
  placeAdAtStart: boolean;
  resultImagePlacement: 'left' | 'right';
  buttonLabel: string | undefined;
  buttonTarget: '_blank' | '_self' | '_top' | '_parent';
  buttonRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  containerTarget: '_blank' | '_self' | '_top' | '_parent';
  containerRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
};

const BaseSearchResults: FC<BaseSearchResultsProps> = ({
  adInterval = 4,
  customStylesForResults = '',
  searchResultMappings,
  placeAdAtEnd = false,
  placeAdAtStart = true,
  resultImagePlacement = 'right',
  buttonLabel = '',
  buttonRel = 'noreferrer',
  buttonTarget = '_blank',
  containerRel = 'noreferrer',
  containerTarget = '_blank',
}) => (
  <SearchcraftBaseSearchResults
    adInterval={adInterval}
    buttonLabel={buttonLabel}
    buttonRel={buttonRel}
    buttonTarget={buttonTarget}
    containerRel={containerRel}
    containerTarget={containerTarget}
    customStylesForResults={customStylesForResults}
    searchResultMappings={searchResultMappings}
    placeAdAtEnd={placeAdAtEnd}
    placeAdAtStart={placeAdAtStart}
    resultImagePlacement={resultImagePlacement}
  />
);

export default BaseSearchResults;

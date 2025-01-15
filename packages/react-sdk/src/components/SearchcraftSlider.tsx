import type { FC } from 'react';

import { SearchcraftSlider as Component } from '../stencil-web-components/components';
import type { Components } from '@searchcraft/javascript-sdk';

interface SearchcraftSliderProps extends Components.SearchcraftSlider {}

const SearchcraftSlider: FC<SearchcraftSliderProps> = (props) => (
  <Component {...props} />
);

export { SearchcraftSlider };
export type { SearchcraftSliderProps };

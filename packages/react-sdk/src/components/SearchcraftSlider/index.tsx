import type { FC } from 'react';

import { SearchcraftSlider } from '../../stencil-web-components/components';

export type SliderProps = {
  dataType: 'number' | 'date';
  granularity: number;
  max: number;
  min: number;
};

const Slider: FC<SliderProps> = ({
  dataType = 'number',
  granularity = 0,
  max = 100,
  min = 0,
}) => (
  <SearchcraftSlider
    dataType={dataType}
    granularity={granularity}
    max={max}
    min={min}
  />
);

export default Slider;

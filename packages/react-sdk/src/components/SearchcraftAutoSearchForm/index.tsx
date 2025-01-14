import type { FC } from 'react';

import type { SearchcraftConfig } from '@searchcraft/core';

import { SearchcraftAutoSearchForm } from '../../stencil-web-components/components';

export type AutoSearchFormProps = {
  clearInput: () => void;
  config: SearchcraftConfig | undefined;
  customStylesForInput: string | Record<string, string>;
  inputCaptionValue: string;
  labelForInput: string;
  placeholderValue: string;
};

const AutoSearchForm: FC<AutoSearchFormProps> = ({
  clearInput = () => {},
  config,
  customStylesForInput = '',
  inputCaptionValue = '',
  labelForInput = '',
  placeholderValue = 'Search here',
}) => (
  <SearchcraftAutoSearchForm
    clearInput={clearInput}
    config={config}
    customStylesForInput={customStylesForInput}
    inputCaptionValue={inputCaptionValue}
    labelForInput={labelForInput}
    placeholderValue={placeholderValue}
  />
);

export default AutoSearchForm;

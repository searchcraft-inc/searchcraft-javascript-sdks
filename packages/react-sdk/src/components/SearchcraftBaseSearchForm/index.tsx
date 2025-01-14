import type { FC } from 'react';

import type { SearchcraftConfig } from '@searchcraft/core';

import { SearchcraftBaseSearchForm } from '../../stencil-web-components/components';

export type BaseSearchFormProps = {
  config?: SearchcraftConfig;
  errorMessage?: string;
  inputLabel?: string;
  buttonLabel?: string;
  buttonPlacement?: 'left' | 'right';
};

const BaseSearchForm: FC<BaseSearchFormProps> = ({
  buttonLabel = '',
  config,
  errorMessage = '',
  inputLabel = '',
  buttonPlacement = 'left',
}) => (
  <SearchcraftBaseSearchForm
    buttonLabel={buttonLabel}
    buttonPlacement={buttonPlacement}
    config={config}
    errorMessage={errorMessage}
    inputLabel={inputLabel}
  />
);

export default BaseSearchForm;

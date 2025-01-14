import type { FC } from 'react';

import { SearchcraftInput } from '../../stencil-web-components/components';

export type InputProps = {
  customStyles: string | Record<string, string>;
  error: boolean;
  flex: boolean;
  placeholderValue: string;
  query: string;
};

const Input: FC<InputProps> = ({
  customStyles = {},
  error = false,
  flex = true,
  placeholderValue = 'Enter Search',
  query = '',
}) => (
  <SearchcraftInput
    customStyles={customStyles}
    error={error}
    flex={flex}
    placeholderValue={placeholderValue}
    query={query}
  />
);

export default Input;

import type { FC } from 'react';

import { SearchcraftInputForm } from '../../stencil-web-components/components';

export type InputProps = {
  customStyles: string | Record<string, string>;
  error: boolean;
  flex: boolean;
  placeholderValue: string;
  query: string;
};

const Input: FC<InputProps> = ({
  customStyles = {},
  placeholderValue = 'Enter Search',
}) => (
  <SearchcraftInputForm
    customStyles={customStyles}
    placeholderValue={placeholderValue}
  />
);

export default Input;

import type { FC } from 'react';

import { SearchcraftInputLabel } from '../../stencil-web-components/components';

export type InputLabelProps = {
  className?: string;
  label: string;
};

const InputLabel: FC<InputLabelProps> = ({
  className,
  label = 'Enter Search',
}) => <SearchcraftInputLabel label={label} inputLabelClassName={className} />;

export default InputLabel;

import type { FC } from 'react';

import { SearchcraftToggleButton } from '../../stencil-web-components/components';

export type ToggleButtonProps = {
  label: string;
  subLabel?: string;
};

const ToggleButton: FC<ToggleButtonProps> = ({
  label = 'Enter Search',
  subLabel = '',
}) => <SearchcraftToggleButton label={label} subLabel={subLabel} />;

export default ToggleButton;

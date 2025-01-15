import type { FC } from 'react';

import { SearchcraftButton } from '../../stencil-web-components/components';

export type ButtonProps = {
  iconElement?: Element;
  iconOnly: boolean;
  iconPosition: 'left' | 'right';
  label: string;
};

const Button: FC<ButtonProps> = ({
  iconElement,
  iconOnly = false,
  iconPosition = 'left',
  label = 'View Results',
}) => (
  <SearchcraftButton
    iconElement={iconElement}
    iconOnly={iconOnly}
    iconPosition={iconPosition}
    label={label}
  />
);

export default Button;

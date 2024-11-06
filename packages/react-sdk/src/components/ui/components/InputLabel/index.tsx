import type { FC } from 'react';
import classNames from 'classnames';

import styles from '@styles/sc-input-label.module.scss';

export type InputLabelProps = {
  className?: string;
  label: string;
};

const InputLabel: FC<InputLabelProps> = ({
  className,
  label = 'Enter Search',
}) => {
  return (
    <label
      className={classNames(styles.label, className)}
      htmlFor='searchcraft-input-id'
    >
      {label}
    </label>
  );
};

export default InputLabel;

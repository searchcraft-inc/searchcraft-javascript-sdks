import type { FC } from 'react';
import classNames from 'classnames';

import { useTheme } from '@/Searchcraft/Searchcraft';

import styles from '@styles/sc-input-label.module.scss';

export type InputLabelProps = {
  className?: string;
  label: string;
};

const InputLabel: FC<InputLabelProps> = ({
  className,
  label = 'Enter Search',
}) => {
  const { theme } = useTheme();
  const labelStyle = theme === 'light' ? styles.labelLight : styles.labelDark;
  return (
    <label
      className={classNames(labelStyle, className)}
      htmlFor='searchcraft-input-id'
    >
      {label}
    </label>
  );
};

export default InputLabel;

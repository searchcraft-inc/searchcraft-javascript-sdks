import type { FC } from 'react';

import styles from '@styles/sc-input-icon.module.scss';
import { SearchIcon, SearchIconError } from '../../assets/SearchIcons';

export type InputIconProps = {
  error?: boolean;
  rightToLeftOrientation?: boolean;
};

export const InputIcon: FC<InputIconProps> = ({
  error = false,
  rightToLeftOrientation = false,
}) => {
  return error ? (
    <div
      className={
        rightToLeftOrientation ? styles.inputIconRTL : styles.inputIconLTR
      }
    >
      <SearchIconError />
    </div>
  ) : (
    <div
      className={
        rightToLeftOrientation ? styles.inputIconRTL : styles.inputIconLTR
      }
    >
      <SearchIcon />
    </div>
  );
};

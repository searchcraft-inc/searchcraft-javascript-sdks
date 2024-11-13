import type { FC } from 'react';

import { useTheme } from '@/Searchcraft/Searchcraft';

import styles from '@styles/sc-input-icon.module.scss';

import {
  SearchIconLight,
  SearchIconDark,
  SearchIconLightError,
  SearchIconDarkError,
} from '../../assets/SearchIcons';

export type InputIconProps = {
  error?: boolean;
  rightToLeftOrientation?: boolean;
};

export const InputIcon: FC<InputIconProps> = ({
  error = false,
  rightToLeftOrientation = false,
}) => {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  return error ? (
    <div
      className={
        rightToLeftOrientation ? styles.inputIconRTL : styles.inputIconLTR
      }
    >
      {isLightTheme ? <SearchIconLightError /> : <SearchIconDarkError />}
    </div>
  ) : (
    <div
      className={
        rightToLeftOrientation ? styles.inputIconRTL : styles.inputIconLTR
      }
    >
      {isLightTheme ? <SearchIconLight /> : <SearchIconDark />}
    </div>
  );
};

import type { FC } from 'react';
import classNames from 'classnames';

import { useSearchcraft, useTheme } from '@/components/providers/Provider';
import styles from '@styles/sc-clear-input-button.module.scss';

import {
  ClearInputIconLight,
  ClearInputIconDark,
} from '../../assets/ClearInputIcon';
import { SpinnerDark, SpinnerLight } from '../Spinner';

export type ClearInputButtonProps = {
  onClearInput?: () => void;
  rightToLeftOrientation?: boolean;
};

const ClearInputButton: FC<ClearInputButtonProps> = ({
  onClearInput,
  rightToLeftOrientation = false,
}) => {
  const { isRequesting } = useSearchcraft();
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';

  return rightToLeftOrientation ? (
    <button
      className={classNames(
        styles.inputClearButtonRTL,
        '.sc-clear-input-button-rtl',
      )}
      onClick={onClearInput}
      type='button'
    >
      {isRequesting ? (
        isLightTheme ? (
          <SpinnerLight />
        ) : (
          <SpinnerDark />
        )
      ) : isLightTheme ? (
        <ClearInputIconLight />
      ) : (
        <ClearInputIconDark />
      )}
    </button>
  ) : (
    <button
      className={classNames(
        styles.inputClearButtonLTR,
        '.sc-clear-input-button-ltr',
      )}
      onClick={onClearInput}
      type='button'
    >
      {isRequesting ? (
        isLightTheme ? (
          <SpinnerLight />
        ) : (
          <SpinnerDark />
        )
      ) : isLightTheme ? (
        <ClearInputIconLight />
      ) : (
        <ClearInputIconDark />
      )}
    </button>
  );
};

export default ClearInputButton;

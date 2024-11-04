import type { FC } from 'react';

import { ClearInputIcon } from '../../assets/ClearInputIcon';

import { SpinnerLight } from '../Spinner';

import styles from '@styles/sc-clear-input-button.module.scss';

export type ClearInputButtonProps = {
  isRequesting?: boolean;
  onClearInput?: () => void;
  rightToLeftOrientation?: boolean;
};

export const ClearInputButton: FC<ClearInputButtonProps> = ({
  isRequesting = false,
  onClearInput,
  rightToLeftOrientation = false,
}) => {
  return rightToLeftOrientation ? (
    <button
      className={styles.inputClearButtonRTL}
      onClick={onClearInput}
      type='button'
    >
      {isRequesting ? <SpinnerLight /> : <ClearInputIcon />}
    </button>
  ) : (
    <button
      className={styles.inputClearButton}
      onClick={onClearInput}
      type='button'
    >
      {isRequesting ? <SpinnerLight /> : <ClearInputIcon />}
    </button>
  );
};

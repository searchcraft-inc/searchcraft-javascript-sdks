import type { FC } from 'react';
import classNames from 'classnames';

import { useSearchcraft } from '@/components/providers/SearchcraftProvider';
import styles from '@styles/sc-clear-input-button.module.scss';

import { ClearInputIcon } from '../../assets/ClearInputIcon';
import { SpinnerLight } from '../Spinner';

export type ClearInputButtonProps = {
  onClearInput?: () => void;
  rightToLeftOrientation?: boolean;
};

export const ClearInputButton: FC<ClearInputButtonProps> = ({
  onClearInput,
  rightToLeftOrientation = false,
}) => {
  const { isRequesting } = useSearchcraft();
  return rightToLeftOrientation ? (
    <button
      className={classNames(
        styles.inputClearButtonRTL,
        '.sc-clear-input-button-rtl',
      )}
      onClick={onClearInput}
      type='button'
    >
      {isRequesting ? <SpinnerLight /> : <ClearInputIcon />}
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
      {isRequesting ? <SpinnerLight /> : <ClearInputIcon />}
    </button>
  );
};

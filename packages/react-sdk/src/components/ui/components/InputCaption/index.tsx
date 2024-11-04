import type { FC } from 'react';
import classNames from 'classnames';

import styles from '@styles/sc-input-caption.module.scss';

export type InputCaptionProps = {
  error?: boolean;
  inputCaptionClassName?: string;
  inputCaptionValue: string;
  rightToLeftOrientation?: boolean;
};

export const InputCaption: FC<InputCaptionProps> = ({
  error = false,
  inputCaptionClassName,
  inputCaptionValue = 'Enter Search',
  rightToLeftOrientation = false,
}) => {
  return rightToLeftOrientation ? (
    <p
      className={classNames(
        error ? styles.inputCaptionErrorRTL : styles.inputCaptionRTL,
        inputCaptionClassName,
      )}
    >
      {inputCaptionValue}
    </p>
  ) : (
    <p
      className={classNames(
        error ? styles.inputCaptionError : styles.inputCaption,
        inputCaptionClassName,
      )}
    >
      {inputCaptionValue}
    </p>
  );
};

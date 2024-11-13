import type { FC } from 'react';
import classNames from 'classnames';

import styles from '@styles/sc-input-caption.module.scss';
import { useTheme } from '@/Searchcraft/Searchcraft';

export type InputCaptionProps = {
  error?: boolean;
  inputCaptionClassName?: string;
  inputCaptionValue: string;
  rightToLeftOrientation?: boolean;
};

const InputCaption: FC<InputCaptionProps> = ({
  error = false,
  inputCaptionClassName,
  inputCaptionValue = 'Enter Search',
  rightToLeftOrientation = false,
}) => {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  return rightToLeftOrientation ? (
    <p
      className={classNames(
        error
          ? isLightTheme
            ? styles.inputCaptionErrorLightRTL
            : styles.inputCaptionErrorDarkRTL
          : isLightTheme
            ? styles.inputCaptionLightRTL
            : styles.inputCaptionDarkRTL,
        inputCaptionClassName,
        '.searchcraft-input-caption',
      )}
    >
      {inputCaptionValue}
    </p>
  ) : (
    <p
      className={classNames(
        error
          ? isLightTheme
            ? styles.inputCaptionErrorLightLTR
            : styles.inputCaptionErrorDarkLTR
          : isLightTheme
            ? styles.inputCaptionLightLTR
            : styles.inputCaptionDarkLTR,
        inputCaptionClassName,
        '.searchcraft-input-caption',
      )}
    >
      {inputCaptionValue}
    </p>
  );
};

export default InputCaption;

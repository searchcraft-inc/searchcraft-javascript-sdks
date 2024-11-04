import type { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { SpinnerDark } from '../Spinner';

import styles from '@styles/sc-button.module.scss';

export type ButtonProps = {
  className?: string;
  isRequesting?: boolean;
  iconElement?: ReactNode;
  iconOnly?: boolean;
  iconPosition?: string;
  label?: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  className,
  iconElement,
  iconOnly = false,
  iconPosition = 'left',
  isRequesting = false,
  label = 'Search',
  onClick,
}) => {
  return (
    <>
      {iconOnly && (
        <button
          className={classNames(styles.button, className)}
          onClick={onClick}
          type='submit'
        >
          {isRequesting ? <SpinnerDark /> : iconElement}
        </button>
      )}
      {!iconOnly && (
        <button
          className={classNames(styles.button, className)}
          onClick={onClick}
          type='submit'
        >
          {iconPosition === 'left' && isRequesting ? (
            <div className={styles.spinnerMarginRight}>
              <SpinnerDark />
            </div>
          ) : (
            iconElement
          )}
          <span
            className={classNames(
              isRequesting && styles.buttonLabel,
              className,
            )}
          >
            {label}
          </span>
          {iconPosition === 'right' && isRequesting ? (
            <div className={styles.spinnerMarginLeft}>
              <SpinnerDark />
            </div>
          ) : (
            iconElement
          )}
        </button>
      )}
    </>
  );
};

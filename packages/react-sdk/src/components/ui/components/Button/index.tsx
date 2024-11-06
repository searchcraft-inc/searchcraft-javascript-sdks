import type { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { useSearchcraft } from '@/components/providers/SearchcraftProvider';
import styles from '@styles/sc-button.module.scss';

import { SpinnerDark } from '../Spinner';

export type ButtonProps = {
  className?: string;
  iconElement?: ReactNode;
  iconOnly?: boolean;
  iconPosition?: string;
  label?: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  className,
  iconElement,
  iconOnly = false,
  iconPosition = 'left',
  label = 'Search',
  onClick,
}) => {
  const { isRequesting } = useSearchcraft();
  return (
    <>
      {iconOnly && (
        <button
          className={classNames(
            styles.button,
            className,
            '.searchcraft-button',
          )}
          onClick={onClick}
          type='submit'
        >
          {isRequesting ? <SpinnerDark /> : iconElement}
        </button>
      )}
      {!iconOnly && (
        <button
          className={classNames(
            styles.button,
            className,
            '.searchcraft-button',
          )}
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
              '.searchcraft-button-label',
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

export default Button;

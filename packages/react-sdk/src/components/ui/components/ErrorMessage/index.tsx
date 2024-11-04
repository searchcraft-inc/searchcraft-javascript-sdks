import type { FC } from 'react';
import classNames from 'classnames';

import styles from '@styles/sc-input-error-message.module.scss';

export type ErrorMessageProps = {
  className?: string;
  errorMessage?: string;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({
  className,
  errorMessage,
}) => {
  return (
    <p className={classNames(styles.errorMessage, className)}>
      {errorMessage || 'Search term is required.'}
    </p>
  );
};

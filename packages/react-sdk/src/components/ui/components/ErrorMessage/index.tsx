import type { FC } from 'react';
import classNames from 'classnames';

import { useTheme } from '@/Searchcraft/Searchcraft';

import styles from '@styles/sc-input-error-message.module.scss';

export type ErrorMessageProps = {
  className?: string;
  errorMessage?: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ className, errorMessage }) => {
  const { theme } = useTheme();
  const errorMessageStyle =
    theme === 'light' ? styles.errorMessageLight : styles.errorMessageDark;
  return (
    <p className={classNames(errorMessageStyle, className)}>
      {errorMessage || 'Search term is required.'}
    </p>
  );
};

export default ErrorMessage;

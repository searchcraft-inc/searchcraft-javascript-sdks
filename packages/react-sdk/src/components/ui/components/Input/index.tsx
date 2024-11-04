import type { ChangeEventHandler, FC } from 'react';
import classNames from 'classnames';

import { InputCaption } from '../InputCaption';
import { InputIcon } from '../InputIcon';
import { ClearInputButton } from '../ClearInputButton';

import styles from '@styles/sc-input.module.scss';

export type InputProps = {
  error?: boolean;
  formClassName?: string;
  inputCaptionClassName?: string;
  inputCaptionValue?: string;
  inputClassName?: string;
  isRequesting?: boolean;
  onClearInput?: () => void;
  onSearchInputChange: ChangeEventHandler<HTMLInputElement>;
  placeholderValue?: string;
  rightToLeftOrientation?: boolean;
  query: string;
};

export const Input: FC<InputProps> = ({
  error = false,
  formClassName = '',
  inputCaptionClassName = '',
  inputClassName = '',
  inputCaptionValue = '',
  isRequesting = false,
  onClearInput,
  onSearchInputChange,
  placeholderValue = 'Enter Search',
  rightToLeftOrientation = false,
  query = '',
}) => {
  const containerClassName = rightToLeftOrientation
    ? styles.inputContainerRTL
    : styles.inputContainer;
  return (
    <div className={classNames(containerClassName, formClassName)}>
      {rightToLeftOrientation ? (
        <>
          <input
            className={classNames(
              error ? styles.inputErrorRTL : styles.inputRTL,
              inputClassName,
            )}
            id='sc-input'
            onChange={onSearchInputChange}
            placeholder={placeholderValue}
            type='text'
            value={query}
          />
          {inputCaptionValue && (
            <InputCaption
              inputCaptionClassName={inputCaptionClassName}
              inputCaptionValue={inputCaptionValue}
              rightToLeftOrientation={rightToLeftOrientation}
            />
          )}
          {query.length > 0 && (
            <ClearInputButton
              isRequesting={isRequesting}
              onClearInput={onClearInput}
              rightToLeftOrientation={rightToLeftOrientation}
            />
          )}
          <InputIcon
            error={error}
            rightToLeftOrientation={rightToLeftOrientation}
          />
        </>
      ) : (
        <>
          <input
            className={classNames(
              error ? styles.inputError : styles.input,
              inputClassName,
            )}
            id='sc-input'
            onChange={onSearchInputChange}
            placeholder={placeholderValue}
            type='text'
            value={query}
          />
          {inputCaptionValue && (
            <InputCaption
              inputCaptionClassName={inputCaptionClassName}
              inputCaptionValue={inputCaptionValue}
              rightToLeftOrientation={rightToLeftOrientation}
            />
          )}
          {query.length > 0 && (
            <ClearInputButton
              onClearInput={onClearInput}
              isRequesting={isRequesting}
              rightToLeftOrientation={rightToLeftOrientation}
            />
          )}
          <InputIcon error={error} />
        </>
      )}
    </div>
  );
};

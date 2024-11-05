import type { ChangeEventHandler, FC } from 'react';
import classNames from 'classnames';

import styles from '@styles/sc-input.module.scss';

import { ClearInputButton } from '../ClearInputButton';
import { InputCaption } from '../InputCaption';
import { InputIcon } from '../InputIcon';

export type InputProps = {
  error?: boolean;
  formClassName?: string;
  inputCaptionClassName?: string;
  inputCaptionValue?: string;
  inputClassName?: string;
  onClearInput?: () => void;
  onSearchInputChange: ChangeEventHandler<HTMLInputElement>;
  placeholderValue?: string;
  rightToLeftOrientation?: boolean;
  query: string;
};

const Input: FC<InputProps> = ({
  error = false,
  formClassName = '',
  inputCaptionClassName = '',
  inputClassName = '',
  inputCaptionValue = '',
  onClearInput,
  onSearchInputChange,
  placeholderValue = 'Enter Search',
  rightToLeftOrientation = false,
  query = '',
}) => {
  const containerClassName = rightToLeftOrientation
    ? styles.inputContainerRTL
    : styles.inputContainerLTR;
  return (
    <div
      className={classNames(
        containerClassName,
        formClassName,
        'searchcraft-input-form',
      )}
    >
      {rightToLeftOrientation ? (
        <>
          <input
            className={classNames(
              error ? styles.inputErrorRTL : styles.inputRTL,
              inputClassName,
              'searchcraft-input',
            )}
            id='searchcraft-input-id'
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
              error ? styles.inputErrorLTR : styles.inputLTR,
              inputClassName,
              'searchcraft-input',
            )}
            id='searchcraft-input-id'
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
              rightToLeftOrientation={rightToLeftOrientation}
            />
          )}
          <InputIcon error={error} />
        </>
      )}
    </div>
  );
};

export default Input;

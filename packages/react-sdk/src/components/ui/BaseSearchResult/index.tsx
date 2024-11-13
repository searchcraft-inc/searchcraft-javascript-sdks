import type { FC } from 'react';

import styles from '@styles/sc-search-result.module.scss';

import { ButtonIcon } from '../assets/ButtonIcons';
import {
  ArrowRightIconLight,
  ArrowRightIconDark,
} from '../assets/ClearInputIcon';
import { useTheme } from '@/Searchcraft/Searchcraft';

export interface BaseSearchResultProps {
  buttonCallbackFn?: () => void;
  buttonLabel?: string;
  imageAltText?: string;
  imageSrc?: string;
  interactiveResult?: boolean;
  callbackFn?: () => void;
  keyDownCallbackFn?: () => void;
  resultBodyContent?: string;
  resultHeading?: string;
  resultSubheading?: string;
}

const BaseSearchResult: FC<BaseSearchResultProps> = ({
  buttonCallbackFn = () => {},
  buttonLabel = '',
  callbackFn = () => {},
  keyDownCallbackFn = () => {},
  imageAltText = '',
  interactiveResult = false,
  imageSrc = '',
  resultBodyContent = '',
  resultHeading = '',
  resultSubheading = '',
}) => {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  const buttonFn = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    buttonCallbackFn();
  };

  const callbackFunc = () => {
    if (interactiveResult) {
      callbackFn();
    } else {
      return;
    }
  };

  return (
    <div
      className={
        interactiveResult
          ? styles.interactiveResultContainer
          : styles.resultContainer
      }
      id='searchcraft-item'
      onClick={callbackFunc}
      onKeyDown={keyDownCallbackFn}
    >
      {interactiveResult && (
        <div className={styles.interactiveIconLarge}>
          {isLightTheme ? <ArrowRightIconLight /> : <ArrowRightIconDark />}
        </div>
      )}
      <div className={styles.imageContainer}>
        <img alt={imageAltText} className={styles.image} src={imageSrc} />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>
          {resultHeading}{' '}
          {interactiveResult && (
            <div className={styles.interactiveIconSmall}>
              {isLightTheme ? <ArrowRightIconLight /> : <ArrowRightIconDark />}
            </div>
          )}
        </h2>
        <h3 className={styles.subheading}>{resultSubheading}</h3>
        <p className={styles.bodyContent}>{resultBodyContent}</p>
        <button className={styles.button} onClick={buttonFn} type='button'>
          <ButtonIcon />
          <span>{buttonLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default BaseSearchResult;

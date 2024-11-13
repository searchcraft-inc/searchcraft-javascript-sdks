import type { FC } from 'react';

import styles from '@styles/sc-search-result.module.scss';

import { useTheme } from '@/components/providers/Provider';
import Button from '@/components/ui/components/Button';

import { ButtonIcon } from '../assets/ButtonIcons';
import {
  ArrowRightIconLight,
  ArrowRightIconDark,
} from '../assets/ClearInputIcon';

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
  const buttonFn = () => {
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
          ? isLightTheme
            ? styles.interactiveResultContainerLight
            : styles.interactiveResultContainerDark
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
        <img
          alt={imageAltText}
          className={isLightTheme ? styles.imageLight : styles.imageDark}
          src={imageSrc}
        />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={isLightTheme ? styles.headingLight : styles.headingDark}>
          {resultHeading}{' '}
          {interactiveResult && (
            <div className={styles.interactiveIconSmall}>
              {isLightTheme ? <ArrowRightIconLight /> : <ArrowRightIconDark />}
            </div>
          )}
        </h2>
        <h3
          className={
            isLightTheme ? styles.subheadingLight : styles.subheadingDark
          }
        >
          {resultSubheading}
        </h3>
        <p
          className={
            isLightTheme ? styles.bodyContentLight : styles.bodyContentDark
          }
        >
          {resultBodyContent}
        </p>
        <Button label={buttonLabel} onClick={buttonFn} />
      </div>
    </div>
  );
};

export default BaseSearchResult;

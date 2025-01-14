import type { FC } from 'react';

import { SearchcraftBaseSearchResult } from '../../stencil-web-components/components';

export type BaseSearchResultProps = {
  titleContent: string | undefined;
  subtitleContent: string | undefined;
  bodyContent: string | undefined;
  footerContent: string | undefined;
  buttonLabel: string | undefined;
  buttonHref: string | undefined;
  buttonTarget: '_blank' | '_self' | '_top' | '_parent';
  buttonRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  containerHref: string | undefined;
  containerTarget: '_blank' | '_self' | '_top' | '_parent';
  containerRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  customStyles: string | undefined;
  imageAlt: string | undefined;
  imageSrc: string | undefined;
  imagePlacement?: 'left' | 'right';
  documentPosition?: number;
};

const BaseSearchResults: FC<BaseSearchResultProps> = ({
  titleContent = '',
  subtitleContent = '',
  bodyContent = '',
  buttonLabel = '',
  buttonTarget = '_blank',
  buttonHref = '',
  buttonRel = undefined,
  containerHref = undefined,
  containerTarget = '_blank',
  containerRel = undefined,
  customStyles = undefined,
  imageAlt = '',
  imageSrc = '',
  footerContent = '',
  imagePlacement = 'right',
  documentPosition = 1,
}) => (
  <SearchcraftBaseSearchResult
    bodyContent={bodyContent}
    buttonHref={buttonHref}
    buttonLabel={buttonLabel}
    buttonRel={buttonRel}
    buttonTarget={buttonTarget}
    containerHref={containerHref}
    containerRel={containerRel}
    containerTarget={containerTarget}
    customStyles={customStyles}
    documentPosition={documentPosition}
    footerContent={footerContent}
    imageAlt={imageAlt}
    imagePlacement={imagePlacement}
    imageSrc={imageSrc}
    subtitleContent={subtitleContent}
    titleContent={titleContent}
  />
);

export default BaseSearchResults;

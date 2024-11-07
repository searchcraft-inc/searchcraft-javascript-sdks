import type { FC } from 'react';

import styles from '@styles/sc-search-results.module.scss';

import { useSearchcraft } from '@/components/providers/SearchcraftProvider';
import BaseSearchResult from '@components/ui/BaseSearchResult';
import ErrorMessage from '@components/ui/components/ErrorMessage';

const BaseSearchResults: FC = () => {
  const { searchResults, query } = useSearchcraft();

  return (
    <div className={styles.resultsContainer}>
      {searchResults?.data?.hits?.map((document, index) => {
        const { doc: result } = document;
        const callback = () => {
          console.log('interactive element');
        };
        const buttonCallback = () => {
          console.log('button callback');
        };
        return (
          <BaseSearchResult
            key={`${result?.id}-${index}`}
            buttonLabel='View More'
            buttonCallbackFn={buttonCallback}
            callbackFn={callback}
            interactiveResult
            imageSrc={result?.poster}
            resultBodyContent={result?.overview}
            resultHeading={result?.title}
            resultSubheading={result?.release_date}
          />
        );
      })}
      {query.length > 0 && searchResults?.data?.hits?.length === 0 && (
        <ErrorMessage
          errorMessage={`No search results found for ${query} query`}
        />
      )}
    </div>
  );
};

export default BaseSearchResults;

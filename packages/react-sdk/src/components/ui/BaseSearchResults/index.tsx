import type { FC } from 'react';

import styles from '@styles/sc-search-results.module.scss';

import { useSearchcraft } from '@/components/providers/SearchcraftProvider';
import BaseSearchResult from '@components/ui/BaseSearchResult';

const BaseSearchResults: FC = () => {
  const { searchResults } = useSearchcraft();

  return (
    <div className={styles.resultsContainer}>
      {searchResults?.data?.hits ? (
        searchResults?.data?.hits?.map((document, index) => {
          const { doc: result } = document;
          const callback = () => {
            console.log('interactive');
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
        })
      ) : (
        <div>no results found</div>
      )}
    </div>
  );
};

export default BaseSearchResults;

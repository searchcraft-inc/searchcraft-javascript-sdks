import { useState, type FC, useEffect, type ChangeEventHandler } from 'react';

import { useSearchcraft } from '@components/providers/SearchcraftProvider';
import styles from '@styles/sc-search-form.module.scss';

import { Input } from '../components/Input';
import { InputLabel } from '../components/InputLabel';

export interface AutoSearchFormProps {
  handleSubmit: (query: string) => void;
  inputCaptionValue?: string;
  labelForInput?: string;
  onClearedInput?: () => void;
  placeholderValue?: string;
  rightToLeftOrientation?: boolean;
}
/**
 * * Button-less form used to submit the search query with a timing configurable debounced function.
 */
export const AutoSearchForm: FC<AutoSearchFormProps> = ({
  handleSubmit,
  inputCaptionValue = '',
  labelForInput = 'Search',
  onClearedInput = () => {},
  placeholderValue = 'Search here',
  rightToLeftOrientation = false,
}) => {
  const { isRequesting, query, setQuery } = useSearchcraft();
  const [canSearch, setCanSearch] = useState<boolean>(false);

  const handleSearchInputChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    event.preventDefault();
    setQuery(event.currentTarget.value);
    if (query !== event.currentTarget.value) {
      setCanSearch(true);
    }
  };

  /**
   * * Exposes a callback for convenience when the input's value is cleared by the user
   */
  const handleClearInput = () => {
    setQuery('');
    onClearedInput();
  };

  /**
   * * Delay the submit function until the user is done typing to throttle API usage.
   */
  useEffect(() => {
    if (canSearch) {
      handleSubmit(query);
      setCanSearch(false);
    } else {
      return;
    }
  }, [canSearch, handleSubmit, query]);

  return (
    <form
      className={rightToLeftOrientation ? styles.formRTL : styles.formLTR}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputLabel label={labelForInput} />
      <div className={styles.searchContainer}>
        <Input
          inputCaptionValue={inputCaptionValue}
          isRequesting={isRequesting}
          onClearInput={handleClearInput}
          onSearchInputChange={handleSearchInputChange}
          placeholderValue={placeholderValue}
          query={query}
          rightToLeftOrientation={rightToLeftOrientation}
        />
      </div>
    </form>
  );
};

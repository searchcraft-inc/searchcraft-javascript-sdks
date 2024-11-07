import { useState, type FC, useEffect, type ChangeEventHandler } from 'react';

import { useSearchcraft } from '@components/providers/SearchcraftProvider';
import styles from '@styles/sc-search-form.module.scss';

import Input from '../components/Input';
import InputLabel from '../components/InputLabel';
import classNames from 'classnames';

export interface AutoSearchFormProps {
  autoSearchFormClass?: string;
  handleSubmit: (query: string) => void;
  inputCaptionValue?: string;
  labelForInput?: string;
  onClearInput?: () => void;
  placeholderValue?: string;
  rightToLeftOrientation?: boolean;
  searchContainerClass?: string;
}

/**
 * * Button-less form used to submit the search query with a timing configurable debounced function.
 */
const AutoSearchForm: FC<AutoSearchFormProps> = ({
  autoSearchFormClass = '',
  handleSubmit,
  inputCaptionValue = '',
  labelForInput = 'Search',
  onClearInput = () => {},
  placeholderValue = 'Search here',
  rightToLeftOrientation = false,
  searchContainerClass = '',
}) => {
  const { query, setQuery } = useSearchcraft();
  const [canSearch, setCanSearch] = useState<boolean>(false);

  const autoSearchFormClassname = rightToLeftOrientation
    ? styles.formRTL
    : styles.formLTR;

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
    onClearInput();
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
      className={classNames(
        autoSearchFormClassname,
        autoSearchFormClass,
        'searchcraft-auto-search-form',
      )}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputLabel label={labelForInput} />
      <div
        className={classNames(
          styles.searchContainer,
          searchContainerClass,
          'searchcraft-input-container',
        )}
      >
        <Input
          inputCaptionValue={inputCaptionValue}
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

export default AutoSearchForm;

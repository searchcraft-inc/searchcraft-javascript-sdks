import { useState, type FC } from 'react';

import { useSearchcraft } from '@components/providers/SearchcraftProvider';
import styles from '@styles/sc-search-form.module.scss';

import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';

export interface BaseSearchFormProps {
  errorMessage?: string;
  handleSubmit: (query: string) => void;
  labelForInput?: string;
  onClearInput?: () => void;
  placeholderValue?: string;
  rightToLeftOrientation?: boolean;
}

/**
 * * Form used to submit the search query using a provided search function.
 */
const BaseSearchForm: FC<BaseSearchFormProps> = ({
  errorMessage,
  handleSubmit,
  labelForInput = 'Search',
  onClearInput = () => {},
  placeholderValue = 'Enter Search Term',
  rightToLeftOrientation = false,
}) => {
  const { query, setQuery } = useSearchcraft();
  const [error, setError] = useState<boolean>(false);

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (query.trim() === '') {
      setError(true);
    } else {
      setError(false);
      handleSubmit(query);
    }
  };

  const handleSearchInputChange = (event: { target: { value: string } }) =>
    setQuery(event.target.value);

  /**
   * * Exposes a callback for convenience when the input's value is cleared by the user
   */
  const handleClearInput = () => {
    setQuery('');
    onClearInput();
  };

  return (
    <form
      className={rightToLeftOrientation ? styles.formRTL : styles.formLTR}
      onSubmit={handleFormSubmit}
    >
      <InputLabel label={labelForInput} />
      <div className={styles.searchContainer}>
        {rightToLeftOrientation && <Button />}
        <Input
          error={error}
          onClearInput={handleClearInput}
          onSearchInputChange={handleSearchInputChange}
          placeholderValue={placeholderValue}
          query={query}
          rightToLeftOrientation={rightToLeftOrientation}
        />
        {!rightToLeftOrientation && <Button />}
      </div>
      {error && <ErrorMessage errorMessage={errorMessage} />}
    </form>
  );
};

export default BaseSearchForm;

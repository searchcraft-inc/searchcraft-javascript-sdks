import { useState, type FC } from 'react';

import { useSearchcraft } from '@components/providers/SearchcraftProvider';
import styles from '@styles/sc-search-form.module.scss';

import { Button } from '../components/Button';
import { ErrorMessage } from '../components/ErrorMessage';
import { Input } from '../components/Input';
import { InputLabel } from '../components/InputLabel';

interface BaseSearchFormProps {
  errorMessage?: string;
  handleSubmit: (query: string) => void;
  labelForInput?: string;
  placeholderValue?: string;
  rightToLeftOrientation?: boolean;
}

/**
 * * Form used to submit the search query using a provided search function.
 */
export const BaseSearchForm: FC<BaseSearchFormProps> = ({
  errorMessage,
  handleSubmit,
  labelForInput = 'Search',
  placeholderValue = 'Enter Search Term',
  rightToLeftOrientation = false,
}) => {
  const { query, isRequesting, setQuery } = useSearchcraft();
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

  const handleClearInput = () => setQuery('');

  return (
    <form
      className={rightToLeftOrientation ? styles.formRTL : styles.formLTR}
      onSubmit={handleFormSubmit}
    >
      <InputLabel label={labelForInput} />
      <div className={styles.searchContainer}>
        {rightToLeftOrientation && <Button isRequesting={isRequesting} />}
        <Input
          error={error}
          onClearInput={handleClearInput}
          onSearchInputChange={handleSearchInputChange}
          placeholderValue={placeholderValue}
          query={query}
          rightToLeftOrientation={rightToLeftOrientation}
        />
        {!rightToLeftOrientation && <Button isRequesting={isRequesting} />}
      </div>
      {error && <ErrorMessage errorMessage={errorMessage} />}
    </form>
  );
};

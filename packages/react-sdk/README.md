# Searchcraft React SDK

This kit provides basic tools for building out a simple search interface using the Searchcraft API. Searching, tracking the request state, and displaying results are all available in this kit.

## Usage

Install with Yarn:

```bash
$ yarn add @searchcraft/react-sdk
```

Install with NPM:

```bash
$ npm install @searchcraft/react-sdk
```

Wrap your app or target a specific interface and wrap them with the `Searchcraft.Provider` to expose the functionalities of the SDK.

```jsx

import { useMemo } from 'react'

import Searchcraft, { SearchcraftCore } from '@searchcraft/react-sdk'

// values are created via the Searchcraft Vektron Customer Portal
const searchcraftConfig = {
  index: ['test_data'],
  apiKey: '1234.909.jmk',
  endpointURL: 'http://127.0.0.1:8000',
}

const Main = () => {
  // initialize and pass an instance of SearchcraftCore into the provider
  const searchcraft = useMemo(() => new SearchcraftCore(searchcraftConfig),[]);
  // debug is optional and has a default value of false
  return (
    <Searchcraft.Provider {...{ searchcraft, debug: true }}>
      <YourApplicationOrScreenGoHere />
    </Searchcraft.Provider>
  )
}

```
### Quickstart with useSearchcraft hook

Once your app is wrapped in the `Searchcraft.Provider`, the `useSearchcraft` hook functionalities are available for use.

```jsx
import Searchcraft, { useSearchcraft, AutoSearchForm, useTheme } from '@searchcraft/react-sdk'

// values available when using the useSearchcraft hook
const useSearchContextValues = {
    error,
    index,
    isRequesting,
    mode,
    query,
    search,
    searchResults,
    setQuery,
  };

// import the styles from the SDK
import '../node_modules/@searchcraft/react-sdk/dist/style.css'

const SearchWithResultsComponent = () => {
const { isRequesting, query, search, searchResults } = useSearchcraft();
// useTheme hook is exposed to control the dark and light UIs available. Configured values are 'light' and 'dark'.
const { toggleTheme, theme } = useTheme();

const handleClearInput = () => {
  setQuery('')
};

  return (
    <>
    <button onClick={toggleTheme}>Toggle Theme</button>
      <AutoSearchForm
        handleSubmit={handleSubmitForm}
        inputCaptionValue="Search here"
        onClearInput={handleClearInput}
        rightToLeftOrientation
      />
      <Searchcraft.BaseSearchResults />
    </>
  )
};
```

## UI Components

The SDK provides 4 pre-built UI components with data provided to them via the `Searchcraft.Provider` and `useSearchcraft` hook.

```jsx
import {
  // Search input without submit button
  AutoSearchForm,
  // Search input with submit button
  BaseSearchForm,
  // Single Search Result component that can be customized while iterating over SearchResults
  BaseSearchResult,
  // Fully encapsulated list of search results with no iteration required
  BaseSearchResults,
  useSearchcraft
} from '@searchcraft/react-sdk';

// OR

import Searchcraft, { useSearchcraft } from '@searchcraft/react-sdk'

const AutoSearchImplementation = () => {
  const { query, search, searchResults } = useSearchcraft()

  const handleSubmitForm = async () =>  await search(query, 'fuzzy')

  const handleClearInput = () => setQuery('');

  return (
    <>
    // example using compound component pattern
      <Searchcraft.AutoSearchForm
        handleSubmit={handleSubmitForm}
        inputCaptionValue="Search here"
        onClearInput={handleClearInput}
        rightToLeftOrientation={true}
      />
    </>
  )
};

const BaseSearchResults: FC = () => {
  const { searchResults, query } = useSearchcraft();

  return (
    <>
      {searchResults?.data?.hits?.map((document, index) => {
        const { doc: result } = document;
        const callback = () => {
          console.log('interactive element');
        };
        const buttonCallback = () => {
          console.log('button callback');
        };
        return (
          // example using named import component
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
    </>
  );
};
```

Additionally, you can import individual sub-components that comprise the pre-built UI components.

```jsx
import { Input, useSearchcraft } from '@searchcraft/react-sdk';

const InputComponent = () => {
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

  const handleClearInput = () => setQuery('');

  return (
    <>
      <Input
        error={error}
        onClearInput={handleClearInput}
        onSearchInputChange={handleSearchInputChange}
        placeholderValue={placeholderValue}
        query={query}
        rightToLeftOrientation={rightToLeftOrientation}
      />
    </>
  )
};
```
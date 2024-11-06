# Searchcraft's React SDK

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

Wrap your app or target a specific interface and wrap them with the `SearchcraftProvider` to expose the functionalities of the SDK.

```jsx

import { useMemo } from 'react'

import { SearchcraftProvider, Searchcraft } from '@searchcraft/react-sdk'

// values are created via the Searchcraft Vektron Customer Portal
const searchcraftConfig = {
  index: ['test_data'],
  apiKey: '1234.909.jmk',
  endpointURL: 'http://127.0.0.1:8000',
}

const Main = () => {
  // initialize and pass an instance of Searchcraft into the provider
  const searchcraft = useMemo(() => new Searchcraft(searchcraftConfig),[]);
  return (
    <SearchcraftProvider {...{ searchcraft }}>
      <YourApplicationOrScreenGoHere />
    </SearchcraftProvider>
  )
}

```
### Quickstart with useSearchcraft hook

Once your app is wrapped in the `SearchcraftProvider`, the `useSearchcraft` hook functionalities are available for use.

```jsx
import {
  useSearchcraft
} from '@searchcraft/react-sdk';

// import the styles from the SDK
import '../node_modules/@searchcraft/react-sdk/dist/style.css'

const SearchWithResultsComponent = () => {
const { isRequesting, query, search, searchResults } = useSearchcraft()

const handleClearInput = () => {
  setQuery('')
};

  return (
    <>
      <AutoSearchForm
        handleSubmit={handleSubmitForm}
        inputCaptionValue="Search here"
        onClearedInput={handleClearInput}
        rightToLeftOrientation
      />
      <BaseSearchResults />
    </>
  )
};
```

## UI Components

The SDK provides 4 pre-built UI components with data provided to them via the `SearchcraftProvider` and `useSearchcraft` hook.

```jsx
import {
  // Search input without submit button
  AutoSearchForm,
  // Search input with submit button
  BasicSearchForm,
  // Single Search Result component that can be customized while iterating over SearchResults
  BasicSearchResult,
  // Fully encapsulated list of search results with no iteration required
  BasicSearchResults,
  useSearchcraft
} from '@searchcraft/react-sdk';

const AutoSearchImplementation = () => {
  const { query, search, searchResults } = useSearchcraft()

  const handleSubmitForm = async () =>  await search(query, 'fuzzy')

  const handleClearInput = () => setQuery('');

  return (
    <>
      <AutoSearchForm
        handleSubmit={handleSubmitForm}
        inputCaptionValue="Search here"
        onClearedInput={handleClearInput}
        rightToLeftOrientation={true}
      />
    </>
  )
};

const BasicSearchAndResultsImplementation = () => {
  const { query, search, searchResults } = useSearchcraft();

  const handleSubmitForm = async () => await search(query, 'fuzzy');

  return (
    <>
      <BaseSearchForm
        rightToLeftOrientation={false}
        handleSubmit={handleSubmitForm}
      />
      {searchResults?.hits ? (
        searchResults?.hits?.map((document, index) => {
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
        <div>no search results found</div>
      )}
    </>
  );
}
```

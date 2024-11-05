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

Wrap your app or target a specific interface and wrap the screen with the `SearchcraftProvider` .

```jsx

import { createRoot } from 'react-dom/client'

import { SearchcraftProvider } from '@searchcraft/react-sdk'

const providerConfig = {
  // values are provided via the Searchcraft Vektron Customer Portal
   config: {
    index: 'demo_movie_index',
    apiKey: 'searchcraft_demo_api_key_1234',
    endpointPath: '/search',
  }
}

createRoot(document.getElementById('root')!).render(
     <SearchcraftProvider {...providerConfig}>
      <YourApplicationGoesHere />
    </SearchcraftProvider>,
)
```
### useSearchcraft

Once your app is wrapped in the `SearchcraftProvider`, you can use the `useSearchcraft` hook.

```jsx
import {
  useSearchcraft
} from '@searchcraft/react-sdk';

// import the styles from the SDk
import '../node_modules/@searchcraft/react-sdk/dist/style.css'

const ReactSearchComponent = () => {
const { isRequesting, query, search, searchResult } = useSearchcraft()
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
```

## UI Components

The SDK provides 3 pre-built UI components with data provided to them by the `SearchcraftProvider`.

```jsx
import {
  AutoSearchForm,
  BasicSearchForm,
  BasicSearchResult,
  useSearchcraft
} from '@searchcraft/react-sdk';

const AutoSearch = () => {
const { query, search, searchResult } = useSearchcraft()
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

const BasicSearch = () => (
  <>
    <BaseSearchForm
      rightToLeftOrientation={false}
      handleSubmit={handleSubmitForm}
    />
  </>
);
```

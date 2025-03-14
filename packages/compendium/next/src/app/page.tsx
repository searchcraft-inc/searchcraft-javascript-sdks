import {
  SearchcraftInputForm,
  SearchcraftTheme,
  SearchcraftSearchResults,
} from '@searchcraft/react-sdk/server';

import { SearchcraftInit } from '../components';

export default async function Page() {
  return (
    <>
      <SearchcraftInit />
      <SearchcraftTheme />
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: 20 }}>
          <SearchcraftInputForm autoSearch />
        </div>
        <SearchcraftSearchResults />
      </div>
    </>
  );
}

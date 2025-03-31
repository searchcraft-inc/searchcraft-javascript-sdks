import {
  SearchcraftInputForm,
  SearchcraftSearchResults,
} from '@searchcraft/react-sdk/server';

import '@searchcraft/javascript-sdk/themes/hologram.css';

import { SearchcraftInit } from '../components';

export default async function Page() {
  return (
    <>
      <SearchcraftInit />
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: 20 }}>
          <SearchcraftInputForm autoSearch />
        </div>
        <SearchcraftSearchResults />
      </div>
    </>
  );
}

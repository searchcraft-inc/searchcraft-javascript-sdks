import {
  SearchcraftInputForm,
  SearchcraftSearchResults,
  SearchcraftPopoverButton,
  SearchcraftPopoverForm,
} from '@searchcraft/react-sdk/server';

import '@searchcraft/javascript-sdk/themes/hologram.css';

import { SearchcraftInit } from '../components';

export default async function Page() {
  return (
    <>
      <SearchcraftInit />
      <div style={{ padding: 20 }}>
        <p style={{ marginBottom: 20 }}>searchcraft-input-form</p>
        <div style={{ marginBottom: 20 }}>
          <SearchcraftInputForm autoSearch />
        </div>
        <SearchcraftSearchResults />
        <hr style={{ marginBottom: 20 }} />
        <p style={{ marginBottom: 20 }}>searchcraft-popover-form</p>
        <SearchcraftPopoverButton />
        <SearchcraftPopoverForm type='modal' />
      </div>
    </>
  );
}

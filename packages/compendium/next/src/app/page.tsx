import {
  SearchcraftInputForm,
  SearchcraftTheme,
  SearchcraftSearchResults,
  SearchcraftPopoverButton,
  SearchcraftPopoverForm,
} from '@searchcraft/react-sdk/server';

import { SearchcraftInit } from '../components';

export default async function Page() {
  return (
    <>
      <SearchcraftInit />
      <SearchcraftTheme />
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

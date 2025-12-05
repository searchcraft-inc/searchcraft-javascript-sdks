import Link from 'next/link';

import { SearchcraftInit } from '@components/SearchcraftInit';
import {
  SearchcraftInputForm,
  SearchcraftSearchResults,
} from '@searchcraft/react-sdk/server';

export default function Page() {
  return (
    <>
      <SearchcraftInit />
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: 20 }}>
          <Link href='/'>&lt; Back</Link>
        </div>
        <div style={{ marginBottom: 20 }}>
          <SearchcraftInputForm autoSearch />
        </div>
        <SearchcraftSearchResults />
      </div>
    </>
  );
}

import Link from 'next/link';

import {
  SearchcraftPopoverButton,
  SearchcraftPopoverForm,
} from '@searchcraft/react-sdk/server';
import { SearchcraftInit } from '@components/index';

export default async function Page() {
  return (
    <>
      <SearchcraftInit />
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: 20 }}>
          <Link href='/'>&lt; Back</Link>
        </div>
        <SearchcraftPopoverButton />
        <SearchcraftPopoverForm type='modal' />
      </div>
    </>
  );
}

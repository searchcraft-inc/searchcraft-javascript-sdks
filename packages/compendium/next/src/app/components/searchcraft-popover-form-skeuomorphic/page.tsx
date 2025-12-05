import Link from 'next/link';

import { SearchcraftInit } from '@components/index';
import {
  SearchcraftPopoverButton,
  SearchcraftPopoverForm,
} from '@searchcraft/react-sdk/server';

export default async function Page() {
  return (
    <>
      <SearchcraftInit />
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: 20 }}>
          <Link href='/'>&lt; Back</Link>
        </div>
        <SearchcraftPopoverButton type='skeuomorphic' />
        <SearchcraftPopoverForm type='modal' />
      </div>
    </>
  );
}

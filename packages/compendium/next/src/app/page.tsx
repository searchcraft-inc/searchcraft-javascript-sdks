// import { SearchcraftCore } from '../components';
import styles from './page.module.css';
import {
  SearchcraftInputForm,
  SearchcraftTheme,
  SearchcraftBaseSearchResults,
} from '@searchcraft/react-sdk/server';

import { SearchcraftInit } from '../components';
import Image from 'next/image';

export default async function Home() {
  return (
    <>
      <SearchcraftInit />
      <SearchcraftTheme />
      <div className={styles.page}>
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js logo'
            width={180}
            height={38}
            priority
          />
          <h2>Searchcraft React Server Components</h2>
          <SearchcraftInputForm
            autoSearch
            buttonPlacement='right'
            customStyles={{}}
            placeholderValue=''
          />
          <SearchcraftBaseSearchResults
            buttonTarget='_blank'
            resultImagePlacement='right'
            containerTarget='_blank'
          />
        </main>
      </div>
    </>
  );
}

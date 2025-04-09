import Link from 'next/link';

export default function Page() {
  return (
    <div style={{ padding: 20 }}>
      <ul style={{ listStyle: 'none' }}>
        <li style={{ marginBottom: 10 }}>
          <Link href='/components/searchcraft-search-results'>
            searchcraft-search-results
          </Link>
        </li>
        <li style={{ marginBottom: 10 }}>
          <Link href='/components/searchcraft-popover-form'>
            searchcraft-popover-form
          </Link>
        </li>
        <li>
          <Link href='/components/searchcraft-popover-form-skeuomorphic'>
            searchcraft-popover-form (skeuomorphic)
          </Link>
        </li>
      </ul>
    </div>
  );
}

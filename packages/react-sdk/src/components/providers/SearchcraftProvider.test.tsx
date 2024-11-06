import { type PropsWithChildren, useMemo } from 'react';
import { renderHook } from '@testing-library/react';

import {
  Searchcraft,
  SearchcraftProvider,
  useSearchcraft,
} from '@components/providers/SearchcraftProvider';

import { TEST_REACT_SDK_CONFIGURATION } from '@testing/mocks/testConfig';

const renderWithWrapper = () => {
  const searchcraft = useMemo(
    () => new Searchcraft(TEST_REACT_SDK_CONFIGURATION),
    [],
  );
  return renderHook(() => useSearchcraft(), {
    wrapper: ({ children }: PropsWithChildren) => {
      return (
        <SearchcraftProvider {...{ searchcraft }}>
          {children}
        </SearchcraftProvider>
      );
    },
  });
};

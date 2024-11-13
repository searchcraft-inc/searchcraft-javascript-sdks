import { type PropsWithChildren, useMemo } from 'react';
import { renderHook } from '@testing-library/react';
import Searchcraft from './Searchcraft';
import {
  SearchcraftCore,
  useSearchcraft,
} from '@/components/providers/Provider';

import { TEST_REACT_SDK_CONFIGURATION } from '@testing/mocks/testConfig';

const renderWithWrapper = () => {
  const searchcraft = useMemo(
    () => new SearchcraftCore(TEST_REACT_SDK_CONFIGURATION),
    [],
  );
  return renderHook(() => useSearchcraft(), {
    wrapper: ({ children }: PropsWithChildren) => {
      return (
        <Searchcraft.Provider {...{ searchcraft, debug: true }}>
          {children}
        </Searchcraft.Provider>
      );
    },
  });
};

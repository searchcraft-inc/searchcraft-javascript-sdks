import { type PropsWithChildren, act } from 'react';
import { renderHook } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import type { SearchcraftProviderConfig } from './SearchcraftProviderConfig';
import { SearchcraftProvider, useSearchcraft } from './SearchcraftProvider';

import { TEST_CONFIG } from '../../test-tools/mocks/testConfig';

const renderWithWrapper = (config: SearchcraftProviderConfig) => {
  return renderHook(() => useSearchcraft(), {
    wrapper: ({ children }: PropsWithChildren) => (
      <SearchcraftProvider {...config}>{children}</SearchcraftProvider>
    ),
  });
};

// describe('SearchcraftProvider', () => {});

import type { FC } from 'react';
import type { CoreSDK } from '@searchcraft/core';
import { CoreSDK as SearchcraftCore } from '@searchcraft/core';

import {
  Provider,
  useSearchcraft,
} from '@/components/providers/SearchcraftProvider';
import AutoSearchForm, {
  type AutoSearchFormProps,
} from '@components/ui/AutoSearchForm';
import BaseSearchForm, {
  type BaseSearchFormProps,
} from '@components/ui/BaseSearchForm';
import BaseSearchResults from '@components/ui/BaseSearchResults';

const Searchcraft: FC & {
  AutoSearchForm: FC<AutoSearchFormProps>;
  BaseSearchForm: FC<BaseSearchFormProps>;
  BaseSearchResults: FC;
  Provider: FC<{ searchcraft: CoreSDK }>;
} = () => null;

Searchcraft.AutoSearchForm = AutoSearchForm;
Searchcraft.BaseSearchForm = BaseSearchForm;
Searchcraft.BaseSearchResults = BaseSearchResults;
Searchcraft.Provider = Provider;

export {
  AutoSearchForm,
  BaseSearchForm,
  BaseSearchResults,
  Provider,
  SearchcraftCore,
  useSearchcraft,
};
export default Searchcraft;

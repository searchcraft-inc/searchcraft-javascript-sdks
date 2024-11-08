import type { FC } from 'react';
import type { CoreSDK } from '@searchcraft/core';
import { CoreSDK as SearchcraftCore } from '@searchcraft/core';

import { Provider, useSearchcraft } from '@/components/providers/Provider';
import AutoSearchForm, {
  type AutoSearchFormProps,
} from '@components/ui/AutoSearchForm';
import BaseSearchForm, {
  type BaseSearchFormProps,
} from '@components/ui/BaseSearchForm';
import BaseSearchResult, {
  type BaseSearchResultProps,
} from '@components/ui/BaseSearchResult';
import BaseSearchResults from '@components/ui/BaseSearchResults';
import Button from '@/components/ui/components/Button';
import ClearInputButton from '@/components/ui/components/ClearInputButton';
import ErrorMessage from '@/components/ui/components/ErrorMessage';
import Input, { type InputProps } from '@/components/ui/components/Input';
import InputCaption, {
  type InputCaptionProps,
} from '@/components/ui/components/InputCaption';
import { InputIcon } from '@/components/ui/components/InputIcon';
import InputLabel, {
  type InputLabelProps,
} from '@/components/ui/components/InputLabel';

const Searchcraft: FC & {
  AutoSearchForm: FC<AutoSearchFormProps>;
  BaseSearchForm: FC<BaseSearchFormProps>;
  BaseSearchResult: FC<BaseSearchResultProps>;
  BaseSearchResults: FC;
  Button: FC;
  ClearInputButton: FC;
  ErrorMessage: FC;
  Input: FC<InputProps>;
  InputCaption: FC<InputCaptionProps>;
  InputIcon: FC;
  InputLabel: FC<InputLabelProps>;
  Provider: FC<{ searchcraft: CoreSDK; debug?: boolean }>;
} = () => null;

Searchcraft.AutoSearchForm = AutoSearchForm;
Searchcraft.BaseSearchForm = BaseSearchForm;
Searchcraft.BaseSearchResult = BaseSearchResult;
Searchcraft.BaseSearchResults = BaseSearchResults;
Searchcraft.Button = Button;
Searchcraft.ClearInputButton = ClearInputButton;
Searchcraft.ErrorMessage = ErrorMessage;
Searchcraft.Input = Input;
Searchcraft.InputCaption = InputCaption;
Searchcraft.InputIcon = InputIcon;
Searchcraft.InputLabel = InputLabel;
Searchcraft.Provider = Provider;

export {
  AutoSearchForm,
  BaseSearchForm,
  BaseSearchResult,
  BaseSearchResults,
  Button,
  ClearInputButton,
  ErrorMessage,
  Input,
  InputCaption,
  InputIcon,
  InputLabel,
  Provider,
  SearchcraftCore,
  useSearchcraft,
};

export default Searchcraft;

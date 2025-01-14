import type { FC } from 'react';

import { SearchcraftErrorMessage } from '../../stencil-web-components/components';

export type ErrorMessageProps = {
  errorMessage?: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({
  errorMessage = 'Enter Search',
}) => <SearchcraftErrorMessage errorMessage={errorMessage} />;

export default ErrorMessage;

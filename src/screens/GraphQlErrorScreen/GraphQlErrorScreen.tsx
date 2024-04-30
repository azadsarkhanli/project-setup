import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ScreenProps } from '../../common/components/Screen';
import { GraphQlError } from '../../common/types';
import { ErrorScreen } from '../ErrorScreen';

type Props = ScreenProps & {
  error: GraphQlError;
  onRestart?: () => void;
  onTryAgain?: () => void;
  onClearDataAndRestart?: () => void;
};

export const GraphQlErrorScreen: FC<Props> = ({
  error,
  onRestart,
  onTryAgain,
  onClearDataAndRestart,
}) => {
  const { title, description, tryAgain, restart, clearAndRestart } =
    useErrorConfig(error);

  return (
    <ErrorScreen
      title={title}
      description={description}
      onRestart={restart ? onRestart : undefined}
      onTryAgain={tryAgain ? onTryAgain : undefined}
      onClearDataAndRestart={
        clearAndRestart ? onClearDataAndRestart : undefined
      }
    />
  );
};

const useErrorConfig = (error: GraphQlError) => {
  const { t } = useTranslation('common');

  switch (error.__typename) {
    case 'NetworkError':
      return {
        title: t('errorScreen.networkError.title'),
        description: t('errorScreen.networkError.description'),
        tryAgain: true,
        restart: false,
        clearAndRestart: false,
      };
    case 'NotFoundError':
      return {
        title: t('errorScreen.notFoundError.title'),
        description: t('errorScreen.notFoundError.description'),
        tryAgain: true,
        restart: false,
        clearAndRestart: false,
      };

    default:
      return {
        title: t('errorScreen.default.title'),
        description: t('errorScreen.default.description'),
        tryAgain: true,
        restart: true,
        clearAndRestart: true,
      };
  }
};

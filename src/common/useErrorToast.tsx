import { IToastProps, Text, Toast, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { TFunction, useTranslation } from 'react-i18next';

import { WarningIcon } from './components/icons';
import { GraphQlError, Maybe } from './types';

export const useErrorToast = (
  error?: Maybe<GraphQlError>,
  props?: Partial<IToastProps>,
) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    if (error) {
      const { title, description } = getErrorMessage(error.__typename, t);

      if (error.__typename === 'NetworkError') {
        showNetworkErrorToast();
      } else {
        showErrorToast(
          title,
          description ||
            (__DEV__ ? `${error.__typename}: ${error.message}` : undefined),
          props,
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
};

const NetworkErrorToast = () => {
  const { t } = useTranslation('common');

  return (
    <VStack
      bg="primary.100"
      shadow="2"
      borderRadius="xl"
      m="4"
      p="6"
      alignItems="center"
    >
      <WarningIcon color="primary.600" size="lg" />
      <Text variant="h4" textAlign="center" mt="4">
        {t('errorScreen.networkError.title')}
      </Text>
      <Text variant="sm" textAlign="center" mt="6">
        {t('errorScreen.networkError.description')}
      </Text>
    </VStack>
  );
};

export const showNetworkErrorToast = () => {
  Toast.show({
    placement: 'top',
    render: () => <NetworkErrorToast />,
  });
};

export const showErrorToast = (
  title?: string,
  description?: string,
  props?: Partial<IToastProps>,
) => {
  Toast.show({
    title,
    variant: 'solid',
    status: 'error',
    placement: 'top',
    description,
    ...props,
  });
};

const getErrorMessage = (
  typename: Maybe<string>,
  t: TFunction<'common'>,
): {
  title: string;
  description?: string;
} => {
  switch (typename) {
    case 'NetworkError':
      return {
        title: t('errorScreen.networkError.title'),
        description: t('errorScreen.networkError.description'),
      };
    case 'EmailVerificationCodeExpiredError':
    case 'EmailVerificationCodeInvalidError':
    case 'EmailVerificationCodeLimitError':
      return {
        title: t('errorToast.invalidCode.title'),
      };
    default:
      return {
        title: t('errorToast.default.title'),
      };
  }
};

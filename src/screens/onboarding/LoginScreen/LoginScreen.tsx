import { VStack, Text } from 'native-base';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../common/components/Button';
import { Screen } from '../../../common/components/Screen';
import { ScreenHeader } from '../../../common/components/ScreenHeader';
import { TextField } from '../../../common/components/TextField';

import { EmailFormValues, useEmailForm } from './useEmailForm';

type Props = {
  error?: {
    name: keyof EmailFormValues;
    message: string;
  };
  loading?: boolean;
  onGoBack: () => void;
  onSubmit: (values: EmailFormValues) => void;
};

export const LoginScreen: FC<Props> = ({
  error,
  loading,
  onGoBack,
  onSubmit,
}) => {
  const { t } = useTranslation('onboarding');
  const { control, handleSubmit, setError } = useEmailForm();

  useEffect(() => {
    if (error) {
      setError(error.name, {
        type: 'manual',
        message: error.message,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <Screen header={<ScreenHeader onGoBack={onGoBack} centerLogo />}>
      <VStack flex={1} alignItems="center" my="9" mx="6">
        <Text variant="h3" textAlign="center" mb="3">
          {t('loginScreen.title')}
        </Text>
        <Text variant="md" textAlign="center" mb="8">
          {t('loginScreen.subtitle')}
        </Text>
        <TextField
          control={control}
          name="email"
          label={t('loginScreen.label')}
          inputProps={{
            autoCapitalize: 'none',
            autoCorrect: false,
            keyboardType: 'email-address',
            textContentType: 'emailAddress',
            placeholder: t('loginScreen.placeholder'),
          }}
          focusOnMount
        />
        <Button
          colorScheme="primary"
          size="md"
          mt="8"
          w="full"
          disabled={loading}
          onPress={() => handleSubmit(onSubmit)()}
        >
          {t('loginScreen.submit')}
        </Button>
      </VStack>
    </Screen>
  );
};

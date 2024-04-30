import { VStack, Text, View } from 'native-base';
import React, { useEffect, useRef, VFC } from 'react';
import { useTranslation } from 'react-i18next';

import { contentLinks } from '../../../app/config';
import { Button } from '../../../common/components/Button';
import { CheckboxField } from '../../../common/components/CheckboxField';
import { InputFormPassword } from '../../../common/components/Input/InputFormPassword';
import { Screen } from '../../../common/components/Screen';
import { ScreenHeader } from '../../../common/components/ScreenHeader';
import { TextField, TextFieldRef } from '../../../common/components/TextField';
import { useLink } from '../../../common/utils/useLink';
import {
  UserInfoForm,
  useUserInfoForm,
} from '../../../features/onboarding/lib/useUserInfoForm';

type Props = {
  error?: {
    name: keyof UserInfoForm;
    message: string;
  };
  formData: UserInfoForm;
  loading?: boolean;
  onGoBack: () => void;
  onSubmit: (formData: UserInfoForm) => void;
};

export interface ImperativeScrollViewHandles {
  scrollTo(options: { x?: number; y?: number; animated?: boolean }): void;
}

export const RegisterNewUserScreen: VFC<Props> = ({
  error,
  formData,
  loading,
  onGoBack,
  onSubmit,
}) => {
  const { t } = useTranslation('onboarding');
  const { control, handleSubmit, setError } = useUserInfoForm(formData);
  const scrollRef = useRef<ImperativeScrollViewHandles>();

  useEffect(() => {
    if (error) {
      setError(error.name, {
        type: 'manual',
        message: error.message,
      });
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const lastNameRef = useRef<TextFieldRef>();
  const emailRef = useRef<TextFieldRef>();
  const phoneRef = useRef<TextFieldRef>();
  const streetRef = useRef<TextFieldRef>();
  const streetNumberRef = useRef<TextFieldRef>();
  const zipCodeRef = useRef<TextFieldRef>();
  const cityRef = useRef<TextFieldRef>();
  const passwordRef = useRef<TextFieldRef>();
  const confirmPasswordRef = useRef<TextFieldRef>();

  return (
    <Screen
      px={6}
      pb={8}
      header={
        <ScreenHeader
          onGoBack={onGoBack}
          title={t('registerNewUserScreen.title')}
        />
      }
      ref={scrollRef}
    >
      <VStack space={4} pt={4}>
        <TextField
          control={control}
          name="firstName"
          label={t('registerNewUserScreen.labels.firstName')}
          nextFieldRef={lastNameRef}
        />
        <TextField
          control={control}
          ref={lastNameRef}
          name="lastName"
          label={t('registerNewUserScreen.labels.lastName')}
          nextFieldRef={emailRef}
        />
        <TextField
          control={control}
          ref={emailRef}
          name="email"
          inputProps={{
            autoCapitalize: 'none',
            autoCorrect: false,
            keyboardType: 'email-address',
            textContentType: 'emailAddress',
          }}
          label={t('registerNewUserScreen.labels.email')}
          nextFieldRef={phoneRef}
        />
        <TextField
          control={control}
          ref={phoneRef}
          name="phone"
          label={t('registerNewUserScreen.labels.phone')}
          nextFieldRef={streetRef}
        />
        <TextField
          control={control}
          ref={streetRef}
          name="street"
          label={t('registerNewUserScreen.labels.street')}
          nextFieldRef={streetNumberRef}
        />
        <TextField
          control={control}
          ref={streetNumberRef}
          name="streetNumber"
          label={t('registerNewUserScreen.labels.streetNumber')}
          nextFieldRef={zipCodeRef}
        />
        <TextField
          control={control}
          ref={zipCodeRef}
          name="zipCode"
          label={t('registerNewUserScreen.labels.zipCode')}
          nextFieldRef={cityRef}
        />
        <TextField
          control={control}
          ref={cityRef}
          name="city"
          label={t('registerNewUserScreen.labels.city')}
          nextFieldRef={passwordRef}
        />
        <TextField
          control={control}
          ref={passwordRef}
          name="password"
          label={t('registerNewUserScreen.labels.password')}
          InputComponent={InputFormPassword}
          nextFieldRef={confirmPasswordRef}
        />
        <TextField
          control={control}
          ref={confirmPasswordRef}
          name="passwordConfirmation"
          label={t('registerNewUserScreen.labels.confirmPassword')}
          InputComponent={InputFormPassword}
        />
      </VStack>
      <VStack space={8} py={4}>
        <CheckboxField
          control={control}
          name="marketingAgreement"
          label={<Text>{t('registerNewUserScreen.arkFriend')}</Text>}
        />
        <View>
          <Text textAlign="center">
            {t('registerNewUserScreen.terms')}
            <TermsLink href={contentLinks.termsAndConditions} />
          </Text>
        </View>
        <Button
          colorScheme="primary"
          _dark={{
            colorScheme: 'primaryLight',
          }}
          size={'md'}
          disabled={loading}
          onPress={handleSubmit(onSubmit)}
        >
          {t('registerNewUserScreen.submit')}
        </Button>
      </VStack>
    </Screen>
  );
};

const TermsLink = ({ href }: { href: string }) => {
  const { t } = useTranslation('onboarding');
  const { linkProps } = useLink({ href });

  // Not using Link because of https://github.com/facebook/react-native/issues/30375
  return (
    <Text
      _dark={{
        color: 'primary.600',
      }}
      color="primary.600"
      {...linkProps}
    >
      {t('registerNewUserScreen.termsLink')}
    </Text>
  );
};

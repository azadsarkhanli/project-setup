import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { track } from '../../../common/events';
import { InvalidFormFieldsExternalError } from '../../../common/graphql';
import { RootStackParamList } from '../../../common/navigation';
import { useErrorToast } from '../../../common/useErrorToast';
import { useLogGraphQlError } from '../../../common/utils/useLogGraphQlError';
import { useRegisterNewUser } from '../../../features/onboarding/graphql/queries';
import { useLoginTokenEffect } from '../../../features/onboarding/lib/useLoginTokenEffect';
import {
  initialValues,
  UserInfoForm,
} from '../../../features/onboarding/lib/useUserInfoForm';

import { RegisterNewUserScreen } from './RegisterNewUserScreen';

export type RegisterNewUserScreenContainerProps = NativeStackScreenProps<
  RootStackParamList,
  'RegisterNewUser'
>;

export const RegisterNewUserScreenContainer: FC<
  RegisterNewUserScreenContainerProps
> = ({ navigation }) => {
  const [registerNewUser, { data: tokenWithUser, loading, error: rawError }] =
    useRegisterNewUser();
  const { t } = useTranslation('onboarding');

  const onSubmit = useCallback(
    async (values: UserInfoForm) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { passwordConfirmation, ...input } = values;
      const response = await registerNewUser({
        variables: {
          input,
        },
      });
      if (
        response.data?.registerNewUser.__typename === 'TokenWithUser' &&
        values.marketingAgreement
      ) {
        track(['ark_venn_signup']);
      }
    },
    [registerNewUser],
  );

  const { formError, error } = useMemo(() => {
    if (rawError?.__typename === 'InvalidFormFieldsExternalError') {
      const fieldError = (
        rawError as InvalidFormFieldsExternalError
      ).formFields?.find(f => f.field !== 'unknown');

      return {
        formError: {
          name: fieldError?.field as keyof UserInfoForm,
          message:
            fieldError?.type ===
            'register-new-user-email-unique-validation-error'
              ? t('registerNewUserScreen.validation.emailAlreadyInUse')
              : t('registerNewUserScreen.validation.genericFieldInvalid'),
        },
      };
    }
    return {
      error: rawError,
    };
  }, [rawError, t]);

  useLoginTokenEffect(tokenWithUser, 'registration');

  useErrorToast(error);
  useLogGraphQlError('RegisterNewUser', error);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <RegisterNewUserScreen
      error={formError}
      formData={initialValues}
      loading={loading}
      onGoBack={handleGoBack}
      onSubmit={onSubmit}
    />
  );
};

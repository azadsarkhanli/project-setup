import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { RegisterNewUserDto } from '../../../common/graphql';

export type UserInfoForm = RegisterNewUserDto & {
  passwordConfirmation: string;
};

export const initialValues: UserInfoForm = {
  firstName: '',
  lastName: '',
  street: '',
  streetNumber: '' || 0,
  zipCode: '',
  city: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  phone: '',
  marketingAgreement: false,
};

const getSchema = (t: TFunction<'onboarding'>) =>
  yup
    .object({
      firstName: yup
        .string()
        .required(t('registerNewUserScreen.validation.required')),
      lastName: yup
        .string()
        .required(t('registerNewUserScreen.validation.required')),
      street: yup
        .string()
        .required(t('registerNewUserScreen.validation.required')),
      streetNumber: yup
        .string()
        .required(t('registerNewUserScreen.validation.required')),
      zipCode: yup
        .string()
        .required(t('registerNewUserScreen.validation.required')),
      city: yup
        .string()
        .required(t('registerNewUserScreen.validation.required')),
      email: yup
        .string()
        .email(t('registerNewUserScreen.validation.email'))
        .required(t('registerNewUserScreen.validation.required')),
      password: yup
        .string()
        .min(8, t('registerNewUserScreen.validation.passswordLength')),
      passwordConfirmation: yup
        .string()
        .test(
          'passwords-match',
          t('registerNewUserScreen.validation.passwordMismatch'),
          function (value) {
            return this.parent.password === value;
          },
        ),
      phone: yup
        .string()
        .required(t('registerNewUserScreen.validation.required'))
        .matches(/^[0-9]{8}$/, t('registerNewUserScreen.validation.phone')),
      marketingAgreement: yup.boolean(),
    })
    .required();

export const useUserInfoForm = (
  defaultValues: UserInfoForm = initialValues,
) => {
  const { t } = useTranslation('onboarding');

  const schema = useMemo(() => getSchema(t), [t]);

  return useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
};

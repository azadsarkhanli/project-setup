import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'react-i18next';
import * as yup from 'yup';

export type EmailFormValues = {
  email: string;
};

const getSchema = (t: TFunction<'onboarding'>) =>
  yup
    .object({
      email: yup
        .string()
        .email(t('registerNewUserScreen.validation.email'))
        .required(t('registerNewUserScreen.validation.required')),
    })
    .required();

export const useEmailForm = () => {
  const { t } = useTranslation('onboarding');

  const schema = useMemo(() => getSchema(t), [t]);

  return useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });
};

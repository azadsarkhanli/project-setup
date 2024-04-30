import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { LoadingScreen } from '../../../common/components/LoadingScreen';
import { ScreenHeader } from '../../../common/components/ScreenHeader';
import { RootStackParamList } from '../../../common/navigation';
import { GraphQlNode } from '../../../common/types';
import { useErrorToast } from '../../../common/useErrorToast';
import { extractMutation } from '../../../common/utils/extractQuery';
import {
  LoginMutation,
  useLoginMutation,
} from '../../../features/onboarding/graphql';
import { useLoginErrorEffect } from '../../../features/onboarding/lib/useLoginErrorEffect';
import { useLoginTokenEffect } from '../../../features/onboarding/lib/useLoginTokenEffect';
import { selectCodeVerifier } from '../../../features/onboarding/reducer/auth';

export type LoginCallbackScreenContainerProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginCallback'
>;

export type LoginCallbackScreenProps = {
  id: string;
  code: string;
};

export const LoginCallbackScreen: FC<LoginCallbackScreenProps> = ({
  id,
  code,
}) => {
  const codeVerifier = useSelector(selectCodeVerifier(id));
  const { goBack } = useNavigation();
  const [execute, mutationResult] = useLoginMutation();

  const { data, loading, error } = extractMutation<
    LoginMutation,
    Extract<LoginMutation['login'], GraphQlNode<'TokenWithUser'>>
  >(mutationResult, 'TokenWithUser', payload => payload.login);

  useEffect(() => {
    if (codeVerifier) {
      execute({
        variables: {
          input: {
            id,
            code,
            codeVerifier,
          },
        },
      });
    }
  }, [code, codeVerifier, execute, id]);

  useErrorToast(error);

  useLoginErrorEffect(error);
  useLoginTokenEffect(data, 'login');

  useEffect(() => {
    if (!codeVerifier || (!loading && error)) {
      goBack();
    }
  }, [codeVerifier, error, goBack, loading]);

  return <LoadingScreen header={<ScreenHeader onGoBack={goBack} />} />;
};

export const LoginCallbackScreenContainer: FC<
  LoginCallbackScreenContainerProps
> = ({ navigation: { goBack }, route }) => {
  const { id, code } = route.params || {};

  useEffect(() => {
    if (!id || !code) {
      goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, code]);

  if (!id || !code) {
    return <LoadingScreen />;
  }

  return <LoginCallbackScreen id={id} code={code} />;
};

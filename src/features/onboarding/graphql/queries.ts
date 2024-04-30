import { MutationHookOptions } from '@apollo/client';

import { GraphQlNode } from '../../../common/types';
import {
  extractMutation,
  MutationReturnType,
} from '../../../common/utils/extractQuery';

import {
  RegisterNewUserMutation,
  RegisterNewUserMutationHookResult,
  RegisterNewUserMutationVariables,
  TriggerEmailConfirmationMutation,
  TriggerEmailConfirmationMutationHookResult,
  useRegisterNewUserMutation,
  useTriggerEmailConfirmationMutation,
  useVerifyEmailCodeMutation,
  VerifyEmailCodeMutation,
  VerifyEmailCodeMutationHookResult,
  VerifyEmailCodeMutationVariables,
} from './index';

export const useTriggerEmailConfirmation = (): [
  TriggerEmailConfirmationMutationHookResult[0],
  MutationReturnType<{
    __typename: 'TriggerEmailConfirmationStatus';
    success: boolean;
  }>,
] => {
  const [mutation, rawResult] = useTriggerEmailConfirmationMutation();
  const result = extractMutation<
    TriggerEmailConfirmationMutation,
    Extract<
      TriggerEmailConfirmationMutation['triggerEmailConfirmation'],
      GraphQlNode<'TriggerEmailConfirmationStatus'>
    >
  >(
    rawResult,
    'TriggerEmailConfirmationStatus',
    payload => payload.triggerEmailConfirmation,
  );
  return [mutation, result];
};

export const useVerifyEmailCode = (
  options?: MutationHookOptions<
    VerifyEmailCodeMutation,
    VerifyEmailCodeMutationVariables
  >,
): [
  VerifyEmailCodeMutationHookResult[0],
  MutationReturnType<{
    __typename: 'VerifyEmailCodeStatus';
    success: boolean;
  }>,
] => {
  const [mutation, rawResult] = useVerifyEmailCodeMutation(options);

  const result = extractMutation<
    VerifyEmailCodeMutation,
    Extract<
      VerifyEmailCodeMutation['verifyEmailCode'],
      GraphQlNode<'VerifyEmailCodeStatus'>
    >
  >(rawResult, 'VerifyEmailCodeStatus', payload => payload.verifyEmailCode);
  return [mutation, result];
};

export const useRegisterNewUser = (
  options?: MutationHookOptions<
    RegisterNewUserMutation,
    RegisterNewUserMutationVariables
  >,
): [
  RegisterNewUserMutationHookResult[0],
  MutationReturnType<
    Extract<
      RegisterNewUserMutation['registerNewUser'],
      GraphQlNode<'TokenWithUser'>
    >
  >,
] => {
  const [mutation, rawResult] = useRegisterNewUserMutation(options);

  const result = extractMutation<
    RegisterNewUserMutation,
    Extract<
      RegisterNewUserMutation['registerNewUser'],
      GraphQlNode<'TokenWithUser'>
    >
  >(rawResult, 'TokenWithUser', payload => payload.registerNewUser);
  return [mutation, result];
};

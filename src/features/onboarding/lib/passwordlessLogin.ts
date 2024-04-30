import { useCallback, useMemo, useState } from 'react';
import { getDeviceId, getDeviceName } from 'react-native-device-info';
import { asyncPkceChallenge } from 'react-native-pkce-challenge';
import useInterval from 'react-use/lib/useInterval';

import { GraphQlNode } from '../../../common/types';
import { extractMutation } from '../../../common/utils/extractQuery';
import {
  CheckPasswordlessConnectionMutation,
  CreatePasswordlessConnectionMutation,
  useCheckPasswordlessConnectionMutation,
  useCreatePasswordlessConnectionMutation,
} from '../graphql';

export const useCreatePasswordlessConnection = () => {
  const [execute, mutationResult] = useCreatePasswordlessConnectionMutation();
  const [codeVerifier, setCodeVerifier] = useState<string | undefined>();

  const createConnection = useCallback(
    async (email: string) => {
      const { codeChallenge, codeVerifier: newCodeVerifier } =
        await asyncPkceChallenge();
      setCodeVerifier(newCodeVerifier);
      const deviceName = await getDeviceName();

      await execute({
        variables: {
          input: {
            codeChallenge,
            deviceId: getDeviceId(),
            deviceName,
            email,
          },
        },
      });
    },
    [execute],
  );

  const {
    data: connection,
    loading,
    error,
  } = useMemo(
    () =>
      extractMutation<
        CreatePasswordlessConnectionMutation,
        Extract<
          CreatePasswordlessConnectionMutation['createPasswordlessConnection'],
          GraphQlNode<'PasswordlessConnection'>
        >
      >(
        mutationResult,
        'PasswordlessConnection',
        payload => payload.createPasswordlessConnection,
      ),
    [mutationResult],
  );

  return {
    codeVerifier,
    createConnection,
    connection,
    loading,
    error,
  };
};

type UseCheckPasswordlessConnectionParams = {
  id: string;
  codeVerifier: string;
  /**
   * miliseconds
   */
  pollInterval?: number;
};

export const useCheckPasswordlessConnection = ({
  id,
  codeVerifier,
  pollInterval = 3000,
}: UseCheckPasswordlessConnectionParams) => {
  const [execute, mutationResult] = useCheckPasswordlessConnectionMutation();

  const checkConnection = useCallback(async () => {
    await execute({
      variables: {
        input: {
          codeVerifier,
          deviceId: getDeviceId(),
          id,
        },
      },
    });
  }, [codeVerifier, execute, id]);

  const { data, loading, error } = useMemo(() => {
    const result = extractMutation<
      CheckPasswordlessConnectionMutation,
      Extract<
        CheckPasswordlessConnectionMutation['checkPasswordlessConnection'],
        GraphQlNode<'TokenWithUser'>
      >
    >(
      mutationResult,
      'TokenWithUser',
      payload =>
        // Exclude because PasswordlessConnection is not compatible with GraphQL error,
        // this is fine, as we are only using the result if data is TokenWithUser,
        // so error is not there
        payload.checkPasswordlessConnection as Exclude<
          CheckPasswordlessConnectionMutation['checkPasswordlessConnection'],
          GraphQlNode<'PasswordlessConnection'>
        >,
    );
    if (result.data) {
      return result;
    }
    return extractMutation<
      CheckPasswordlessConnectionMutation,
      Extract<
        CheckPasswordlessConnectionMutation['checkPasswordlessConnection'],
        GraphQlNode<'PasswordlessConnection'>
      >
    >(
      mutationResult,
      'PasswordlessConnection',
      payload =>
        // Exclude because TokenWithUser is not compatible with GraphQL error,
        // this is fine, as we already checked if response is TokenWithUser in first extractMutation
        payload.checkPasswordlessConnection as Exclude<
          CheckPasswordlessConnectionMutation['checkPasswordlessConnection'],
          GraphQlNode<'TokenWithUser'>
        >,
    );
  }, [mutationResult]);

  const tokenWithUser = data?.__typename === 'TokenWithUser' ? data : undefined;
  const passwordlessConnection =
    data?.__typename === 'PasswordlessConnection' ? data : undefined;

  useInterval(
    () => {
      if (!loading) {
        checkConnection();
      }
    },
    tokenWithUser ? null : pollInterval,
  );

  return {
    passwordlessConnection,
    tokenWithUser,
    loading,
    error,
  };
};

import { ErrorEvent } from '@gyldendaldigital/react-native-readium';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import { captureException } from '../../../common/utils/logger';

export const useReaderCallbacks = () => {
  const navigation = useNavigation();
  const onClose = useCallback(() => navigation.goBack(), [navigation]);

  const onError = useCallback(
    ({ error }: ErrorEvent) => {
      captureException(
        new Error(`Reader Error ${error.domain}: ${error.message}`),
      );
      onClose();
    },
    [onClose],
  );

  return {
    onClose,
    onError,
  };
};

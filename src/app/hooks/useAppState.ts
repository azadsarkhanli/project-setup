import { useMemo } from 'react';
import VersionInfo from 'react-native-version-info';

import { useUserContext } from '../../common/context/UserContext';
import { ActivationStatus } from '../../common/graphql';
import { compare } from '../../common/utils/appVersion';
import { useAppContext } from '../context/AppProvider';

type AppState = 'outdated' | 'unauthorized' | ActivationStatus;

export const useAppState = () => {
  const { remoteConfig } = useAppContext();
  const { user } = useUserContext();

  return useMemo((): AppState => {
    if (isOutdated(remoteConfig.minAppVersion)) {
      return 'outdated';
    }
    if (!user) {
      return 'unauthorized';
    }
    return user.status;
  }, [user, remoteConfig.minAppVersion]);
};

const isOutdated = (minAppVersion: string) => {
  const compareResult = compare(minAppVersion, VersionInfo.appVersion);
  return compareResult === 'greater';
};

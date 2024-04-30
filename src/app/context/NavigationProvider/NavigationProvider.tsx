import {
  LinkingOptions,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, { FC, ReactNode, useRef } from 'react';
import Config from 'react-native-config';

import { trackNavigation } from '../../../common/events';
import { RootStackParamList, Screen } from '../../../common/navigation';

type Props = {
  fallback?: ReactNode;
};

const linking: LinkingOptions<RootStackParamList> = {
  enabled: true,
  prefixes: [Config.APP_UNIVERSALLINKS_PREFIX, Config.APP_DEEPLINKS_PREFIX],
  config: {
    screens: {
      LoginCallback: '/welcome',
    },
  },
};

export const NavigationProvider: FC<Props> = ({ children, fallback }) => {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const routeNameRef = useRef<Screen | undefined>();

  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={fallback}
      linking={linking}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name as Screen;
        trackNavigation(routeNameRef.current);
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()
          ?.name as Screen;

        if (previousRouteName !== currentRouteName) {
          trackNavigation(currentRouteName, previousRouteName);
        }

        routeNameRef.current = currentRouteName;
      }}
    >
      {children}
    </NavigationContainer>
  );
};

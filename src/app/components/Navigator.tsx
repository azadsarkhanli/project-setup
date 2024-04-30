import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { ActivationStatus } from '../../common/graphql';
import { RootStackParamList } from '../../common/navigation';
import { AppOutdatedScreenContainer } from '../../screens/AppOutdatedScreen';
import { LoginApprovalScreenContainer } from '../../screens/onboarding/LoginApprovalScreen';
import { LoginCallbackScreenContainer } from '../../screens/onboarding/LoginCallbackScreen';
import { LoginScreenContainer } from '../../screens/onboarding/LoginScreen';
import { RegisterNewUserScreenContainer } from '../../screens/onboarding/RegisterNewUserScreen/RegisterNewUserScreenContainer';
import {
  WelcomeNewUserScreen,
  useShouldShowWelcomeNewUserScreen,
} from '../../screens/onboarding/WelcomeNewUserScreen';
import { WelcomeScreenContainer } from '../../screens/onboarding/WelcomeScreen';
import { PlayerScreenContainer } from '../../screens/PlayerScreen';
import { ProductModalScreen } from '../../screens/ProductModalScreen/ProductModalScreen';
import { ReaderScreenContainer } from '../../screens/ReaderScreen';
import { useAppState } from '../hooks/useAppState';

import { HomeNavigation } from './HomeNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator: FC = () => {
  const appState = useAppState();
  const shouldShowWelcomeNewUserScreen = useShouldShowWelcomeNewUserScreen();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {appState === 'outdated' && (
        <Stack.Group>
          <Stack.Screen
            name="AppOutdated"
            component={AppOutdatedScreenContainer}
          />
        </Stack.Group>
      )}

      {appState === 'unauthorized' && (
        <Stack.Group>
          <Stack.Screen name="Onboarding" component={WelcomeScreenContainer} />
          <Stack.Screen
            name="LoginLandingPage"
            component={LoginScreenContainer}
          />
          <Stack.Screen
            name="LoginEmailVerification"
            component={LoginApprovalScreenContainer}
          />
          <Stack.Screen
            name="LoginCallback"
            component={LoginCallbackScreenContainer}
          />
          <Stack.Screen
            name="RegisterNewUser"
            component={RegisterNewUserScreenContainer}
          />
        </Stack.Group>
      )}

      {appState === ActivationStatus.Active && (
        <>
          <Stack.Group>
            {shouldShowWelcomeNewUserScreen && (
              <Stack.Screen
                name="WelcomeNewUser"
                component={WelcomeNewUserScreen}
              />
            )}
            <Stack.Screen
              name="HomeNavigation"
              options={{ animationTypeForReplace: 'push' }}
              component={HomeNavigation}
            />
            <Stack.Screen name="Reader" component={ReaderScreenContainer} />
            <Stack.Screen name="Player" component={PlayerScreenContainer} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="ProductModal" component={ProductModalScreen} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
};

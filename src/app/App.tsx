import React, { FC, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { NetworkProvider } from 'react-native-offline';

import { LoadingGate } from '../common/components/LoadingGate';
import { LoadingScreen } from '../common/components/LoadingScreen';
import { NativeBaseProvider } from '../common/components/NativeBaseProvider/NativeBaseProvider';
import { AuthProvider } from '../common/context/AuthContext';
import { ErrorBoundary } from '../common/context/ErrorBoundary';
import { UserProvider } from '../common/context/UserContext';
import { EventsConfigListener } from '../common/events/EventsConfigListener';
import { ContainerProvider } from '../features/catalog/context/ContainerContext';
import { AppPlayerProvider } from '../features/player/AppPlayerProvider';
import { usePlayerSetup } from '../features/player/usePlayerSetup';

import { Navigator } from './components/Navigator';
import { authConfig } from './config';
import { ApolloProvider } from './context/ApolloProvider';
import { AppProvider } from './context/AppProvider';
import { NavigationProvider } from './context/NavigationProvider';
import { ReduxProvider } from './context/ReduxProvider';
import { i18n } from './i18n/i18n';

export const App: FC = () => {
  const fallback = <LoadingScreen />;
  const isPlayerReady = usePlayerSetup();

  return (
    <NativeBaseProvider colorMode="light">
      <ErrorBoundary>
        <Suspense fallback={fallback}>
          <NetworkProvider>
            <ReduxProvider fallback={fallback}>
              <I18nextProvider i18n={i18n}>
                <AuthProvider config={authConfig}>
                  <ApolloProvider>
                    <AppProvider>
                      <UserProvider>
                        <EventsConfigListener />
                        <ContainerProvider>
                          <NavigationProvider>
                            <LoadingGate isLoading={!isPlayerReady}>
                              <AppPlayerProvider>
                                <ErrorBoundary>
                                  <Navigator />
                                </ErrorBoundary>
                              </AppPlayerProvider>
                            </LoadingGate>
                          </NavigationProvider>
                        </ContainerProvider>
                      </UserProvider>
                    </AppProvider>
                  </ApolloProvider>
                </AuthProvider>
              </I18nextProvider>
            </ReduxProvider>
          </NetworkProvider>
        </Suspense>
      </ErrorBoundary>
    </NativeBaseProvider>
  );
};

export default App;

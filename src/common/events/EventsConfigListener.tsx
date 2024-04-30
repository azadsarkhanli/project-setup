import { VFC, useEffect } from 'react';

import { useAppContext } from '../../app/context/AppProvider';
import { useUserContext } from '../context/UserContext';

import { setUser, eventHubLogger } from '.';

export const EventsConfigListener: VFC = () => {
  const { remoteConfig } = useAppContext();
  const { user } = useUserContext();

  useEffect(() => {
    setUser(user);
  }, [user]);

  useEffect(() => {
    eventHubLogger.setConfig(remoteConfig.events);
  }, [remoteConfig.events]);

  return null;
};

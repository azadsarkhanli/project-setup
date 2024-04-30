import analytics from '@react-native-firebase/analytics';

import { UserFragment } from '../graphql';
import { Screen } from '../navigation';
import { Maybe } from '../types';

import { eventHubLogger } from './eventHubLogger';
import { Event } from './types';

export * from './consts';
export * from './EventsConfigListener';
export * from './eventHubLogger';
export * from './types';

export const setUser = (user: Maybe<UserFragment>) => {
  eventHubLogger.setUser(user);
  analytics().setUserId(user?.id ?? null);
};

export const track = (event: Event) => {
  const [name, metadata] = event;
  analytics().logEvent(name, metadata);
  eventHubLogger.track(event);
};

export const trackNavigation = (current: Screen, previous?: Screen) => {
  analytics().logScreenView({
    screen_name: current,
    screen_class: current,
  });

  eventHubLogger.trackNavigation(current, previous);
};

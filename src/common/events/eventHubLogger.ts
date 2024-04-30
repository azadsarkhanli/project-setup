import analytics from '@react-native-firebase/analytics';
import DeviceInfo from 'react-native-device-info';

import { ClientEventsConfiguration, Maybe, UserFragment } from '../graphql';
import { Screen } from '../navigation';
import { captureException } from '../utils/logger';

import { AppLogs, Event } from './types';

class EventHubLogger {
  private appInstanceId: string | null = null;
  private user: Maybe<UserFragment>;
  private config: ClientEventsConfiguration | null = null;
  private screen: Screen | null = null;

  constructor() {
    analytics()
      .getAppInstanceId()
      .then(instanceId => {
        this.appInstanceId = instanceId;
      })
      .catch(e => captureException(e));
  }

  track([action, metadata]: Event) {
    return this.send([
      this.generateBody(action, this.screen, metadata ?? null),
    ]);
  }

  trackNavigation(current: Screen, previous?: Screen) {
    this.setScreen(current);

    const events: AppLogs[] = [];
    if (previous) {
      events.push(this.generateBody('appLeaveScreen', previous, null));
    }

    events.push(
      this.generateBody('appEnterScreen', current, {
        prevScreenId: previous || null,
      }),
    );

    return this.send(events);
  }

  setConfig(config: ClientEventsConfiguration) {
    this.config = config;
  }

  setScreen(screen: Screen | null) {
    this.screen = screen;
  }

  setUser(user: Maybe<UserFragment>) {
    this.user = user;
  }

  private generateBody(
    action: string,
    screen: Screen | null,
    metadata: Record<string, unknown> | null,
  ): AppLogs {
    return {
      userId: this.user?.id || null,
      appInstanceId: this.appInstanceId,
      deviceType: DeviceInfo.getDeviceId(),
      systemName: DeviceInfo.getSystemName(),
      systemVersion: DeviceInfo.getSystemVersion(),
      sessionId: 'HARDCODED-SESSION-ID',
      action,
      screen,
      timestamp: new Date().toISOString(),
      online: true,
      details: metadata,
      consents: this.user?.userInfo?.consents || null,
    };
  }

  private send(events: AppLogs[]) {
    if (!this.config) {
      captureException(
        new Error(
          `Attempted to send events without initialized config: ${events
            .map(e => e.action)
            .join(', ')}`,
        ),
      );
    }
    if (!this.config || !this.config.sendEvents) {
      return;
    }
    const host = this.config.host;
    const headers = {
      authorization: this.config.token,
      'Content-Type': 'application/json',
    };
    // setTimeout, so sending event is not blocking
    setTimeout(() => {
      fetch(host, {
        method: 'POST',
        headers,
        body: JSON.stringify(events),
      }).catch(e => {
        captureException(e);
      });
    });
  }
}

export const eventHubLogger = new EventHubLogger();

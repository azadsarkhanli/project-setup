import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { NavigationDecorator } from '../../../../../storybook/stories/decorators/NavigationDecorator';
import { Screen } from '../../../../common/components/Screen';
import { PlaybackState } from '../../context/PlayerContext';
import { StorybookPlayerProvider } from '../../context/StorybookPlayerProvider';

import { AudiobookSummary } from './AudiobookSummary';
import { DevicesMenu } from './DevicesMenu';
import { MiniPlayer } from './MiniPlayer';
import { PlaybackControls } from './PlaybackControls';
import { PlaybackProgress } from './PlaybackProgress';
import { Player } from './Player';

storiesOf('Player', module)
  .addDecorator(NavigationDecorator)
  .add('Default', () => {
    return (
      <Screen justifyContent="center" h="full">
        <StorybookPlayerProvider>
          <Player
            position={number('position', 50)}
            duration={number('duration', 200)}
            changePositionBy={action('changePositionBy')}
            changePositionShallow={action('changePositionShallow')}
            changePositionShallowEnd={action('changePositionShallowEnd')}
            onGoBack={action('onGoBack')}
            withDevicesMenu={boolean('withDevicesMenu', true)}
            downloadProps={{
              cancel: action('cancel'),
              download: action('download'),
              downloadProgress: number('progress', 0),
              removeFile: action('removeFile'),
              fileStatus: select(
                'fileStatus',
                {
                  checking: 'checking',
                  downloading: 'downloading',
                  offline: 'offline',
                  online: 'online',
                },
                'online',
              ),
            }}
          />
        </StorybookPlayerProvider>
      </Screen>
    );
  })
  .add('DevicesMenu only', () => {
    return (
      <Screen justifyContent="center" h="full">
        <DevicesMenu />
      </Screen>
    );
  })
  .add('PlaybackControls only', () => {
    return (
      <Screen justifyContent="center" h="full">
        <PlaybackControls
          variant={select(
            'variant',
            {
              normal: 'normal',
              compact: 'compact',
            },
            'normal',
          )}
          onPlay={action('onPlay')}
          onPause={action('onPause')}
          onBackward={action('onBackward')}
          onForward={action('onForward')}
          playbackState={select(
            'playbackState',
            {
              none: PlaybackState.None,
              ready: PlaybackState.Ready,
              playing: PlaybackState.Playing,
              paused: PlaybackState.Paused,
              stopped: PlaybackState.Stopped,
              buffering: PlaybackState.Buffering,
              connecting: PlaybackState.Connecting,
            },
            PlaybackState.None,
          )}
        />
      </Screen>
    );
  })
  .add('AudiobookSummary only', () => {
    return (
      <Screen justifyContent="center" h="full">
        <AudiobookSummary
          flex="1"
          title={text('title', 'Hekneveven')}
          authorsFormatted={text('authorsFormatted', 'Lars Mytting')}
        />
      </Screen>
    );
  })
  .add('PlaybackProgress only', () => {
    return (
      <Screen justifyContent="center" h="full">
        <PlaybackProgress
          px="4"
          progress={number('progress', 10)}
          duration={number('duration', 2000)}
          onJumpTo={action('onJumpTo')}
          onJumpToShallow={action('onJumpToShallow')}
        />
      </Screen>
    );
  })
  .add('MiniPlayer', () => {
    return (
      <Screen justifyContent="flex-end" h="full">
        <StorybookPlayerProvider>
          <MiniPlayer
            position={number('position', 50)}
            duration={number('duration', 100)}
            changePositionBy={action('changePositionBy')}
          />
        </StorybookPlayerProvider>
      </Screen>
    );
  });

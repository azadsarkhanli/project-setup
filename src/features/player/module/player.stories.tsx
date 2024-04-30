import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Button, Heading, Slider, VStack } from 'native-base';
import React from 'react';
import { PitchAlgorithm, Track } from 'react-native-track-player';

import { Screen } from '../../../common/components/Screen';

import {
  jumpBy,
  loadTrack,
  pause,
  play,
  resume,
  setPlaybackSpeed,
} from './player';

const track1: Track = {
  url: 'https://www.archive.org/download/mozartsyouth_2106_librivox/mozartsyouth_00_hoffmann_128kb.mp3',
  title: 'Track 1',
  artist: 'Test',
  pitchAlgorithm: PitchAlgorithm.Voice,
};
const track2: Track = {
  url: 'https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_5MB_MP3.mp3',
  title: 'Track 2',
  artist: 'Test',
};

storiesOf('PlayerModule', module).add('Default', () => (
  <Screen alignItems="center" justifyContent="center" p="4">
    <VStack space="4" w="full">
      <Button onPress={() => loadTrack(track1)}>loadTrack(track1)</Button>
      <Button onPress={() => loadTrack(track2)}>loadTrack(track1)</Button>
      <Button onPress={() => play()}>play()</Button>
      <Button onPress={() => pause()}>pause()</Button>
      <Button onPress={() => resume()}>resume()</Button>
      <Button onPress={() => jumpBy(5)}>forward(5)</Button>
      <Button onPress={() => jumpBy(-5)}>forward(-5)</Button>
      <Button onPress={() => setPlaybackSpeed(number('playbackSpeed', 0.5))}>
        setPlaybackSpeed(X)
      </Button>

      <>
        <Heading>Playback Speed</Heading>
        <Slider
          w="full"
          defaultValue={1}
          minValue={0.5}
          maxValue={2}
          step={0.1}
          colorScheme="cyan"
          onChange={v => {
            setPlaybackSpeed(v);
          }}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </>
    </VStack>
  </Screen>
));

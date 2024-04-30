import { LocationChangeEvent } from '@gyldendaldigital/react-native-readium';
import { Box, Fade, Pressable, useToken, View } from 'native-base';
import React, { VFC, useCallback } from 'react';
import useEffectOnce from 'react-use/lib/useEffectOnce';
import useToggle from 'react-use/lib/useToggle';

import { pausePlayerIfPlaying } from '../../../../features/player/module/player';
import { useReaderContext } from '../../context/ReaderContext';
import { EpubReader } from '../EpubReader';
import { useEffectiveColorTheme } from '../EpubReader/useReadingExperienceUserSettings';
import { EpubReaderMenu } from '../EpubReaderMenu/EpubReaderMenu';
import { PositionSlider } from '../PositionSlider/PositionSlider';
import { ReaderWrapper } from '../ReaderWrapper';

const ReaderContent: VFC = () => {
  const { onClose, currentLocator, onLocationChange, goToLocator, positions } =
    useReaderContext();
  const [backgroundColor] = useToken('colors', ['readerBackground']);

  const [readingFocus, toggleReadingFocus] = useToggle(false);
  const [isLoadingLocation, setLoadingLocation] = useToggle(true);
  const [isHumanInteracting, toggleHumanInteracting] = useToggle(false);

  useEffectOnce(() => {
    pausePlayerIfPlaying();
  });

  const handlePress = useCallback(() => {
    toggleReadingFocus(!readingFocus);
  }, [toggleReadingFocus, readingFocus]);

  const handleLocationChange = useCallback(
    (event: LocationChangeEvent) => {
      !isHumanInteracting && !isLoadingLocation;
      if (isLoadingLocation) {
        setLoadingLocation(false);
      }
      if (onLocationChange) {
        onLocationChange(event);
      }
    },
    [
      isHumanInteracting,
      isLoadingLocation,
      onLocationChange,
      setLoadingLocation,
    ],
  );

  return (
    <Box safeArea flex={1}>
      <Box
        safeAreaTop
        bg={backgroundColor}
        top={0}
        width="full"
        position="absolute"
        shadow={readingFocus ? undefined : 2}
      >
        <Box height="46px">
          <Box position="absolute" height="46px" width="100%">
            <Pressable flex={1} />
          </Box>
          <Fade in={!readingFocus} entryDuration={200} exitDuration={200}>
            <EpubReaderMenu onGoBack={onClose} />
          </Fade>
        </Box>
      </Box>
      <View
        flex={1}
        alignContent="center"
        justifyContent="center"
        mt="8"
        mb="5"
      >
        <EpubReader
          onLocationChange={handleLocationChange}
          onPress={handlePress}
        />
      </View>
      <Box
        safeAreaBottom
        bg={backgroundColor}
        bottom={0}
        width="full"
        position="absolute"
      >
        <Fade in={!readingFocus} entryDuration={200} exitDuration={200}>
          <PositionSlider
            onTouchStart={() => toggleHumanInteracting(true)}
            onTouchEnd={() => toggleHumanInteracting(false)}
            position={currentLocator?.locations?.position}
            goToLocator={goToLocator}
            positions={positions}
          />
        </Fade>
        {readingFocus && (
          <Pressable
            onPress={handlePress}
            position="absolute"
            w="full"
            h="full"
          />
        )}
      </Box>
    </Box>
  );
};

export const Reader: VFC = () => {
  const colorTheme = useEffectiveColorTheme();

  return (
    <ReaderWrapper colorTheme={colorTheme}>
      <ReaderContent />
    </ReaderWrapper>
  );
};

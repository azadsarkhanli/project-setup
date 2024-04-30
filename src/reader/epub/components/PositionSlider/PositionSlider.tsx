import { Text, VStack } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Slider, SliderProps } from '../../../../common/components/Slider';
import { ReaderContextValue } from '../../context/ReaderContext';

type PositionSliderProps = {
  position?: number;
} & Pick<ReaderContextValue, 'goToLocator' | 'positions'> &
  Pick<SliderProps, 'onTouchStart' | 'onTouchEnd'>;
export const PositionSlider: FC<PositionSliderProps> = ({
  position,
  goToLocator,
  positions,
  onTouchStart,
  onTouchEnd,
}) => {
  const { t } = useTranslation('reader');
  const [shallowPosition, setShallowPosition] = useState<number>(position || 0);
  useEffect(() => {
    position !== undefined && setShallowPosition(position);
  }, [position]);

  const positionsCount = positions && positions.length;
  if (!position && !positionsCount) {
    return null;
  }
  return (
    <VStack mx="8" mb="4" space="0.5">
      <Slider
        hasTrack
        hasFilledTrack
        colorScheme="primary"
        value={shallowPosition}
        minValue={1}
        maxValue={positionsCount || 0}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onChange={setShallowPosition}
        onChangeEnd={positionIndex => {
          setShallowPosition(positionIndex);
          if (!positions) {
            return;
          }
          const locator = positions[positionIndex - 1];
          locator && goToLocator(locator);
        }}
      />
      <Text variant="2xs" color="muted.500" _dark={{ color: 'muted.500' }}>
        {t('positionSlider.label', {
          position: shallowPosition,
          positionsCount: positions && positions.length,
        })}
      </Text>
    </VStack>
  );
};

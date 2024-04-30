import { Box, useToken } from 'native-base';
import { SliderContext } from 'native-base/src/components/primitives/Slider/Context';
import React, { useMemo } from 'react';

const getStyles = (
  orientation: string,
  sizeValue: number,
  percentage: number,
) => ({
  bottom: orientation === 'vertical' ? `${percentage * 100}%` : undefined,
  left: orientation !== 'vertical' ? `${percentage * 100}%` : undefined,
  transform:
    orientation === 'vertical'
      ? [{ translateY: -sizeValue / 2 }]
      : [{ translateX: -sizeValue / 2 }],
});

export const SliderSteps = () => {
  const { colorScheme, state, orientation, thumbSize } =
    React.useContext(SliderContext);
  const size = Math.max(thumbSize - 4, 2);
  const sizeValue = useToken('space', size);

  const minValue = state.getPercentValue(0);
  const maxValue = state.getPercentValue(100);
  const step = state.step;

  const percentageValues = useMemo(
    () =>
      getStepValues(minValue, maxValue, step)
        .map(v => state.getValuePercent(v))
        .map((value: number) => ({
          value,
          style: getStyles(orientation, sizeValue, value),
        })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [minValue, maxValue, step, orientation, sizeValue],
  );

  return (
    <>
      {percentageValues.map(({ value, style }) => (
        <Box
          key={value}
          position="absolute"
          bg={`${colorScheme}.400`}
          size={size}
          alignItems="center"
          justifyContent="center"
          style={style}
          zIndex={998} // SliderThumb - 1
          rounded="full"
          pointerEvents="none"
        />
      ))}
    </>
  );
};

const getStepValues = (minValue: number, maxValue: number, step: number) => {
  let value = minValue;
  const res = [];
  while (value <= maxValue) {
    res.push(value);
    value = parseFloat((value + step).toFixed(10));
  }
  return res;
};

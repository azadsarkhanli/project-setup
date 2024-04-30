import { Box, Text, useToken } from 'native-base';
import React, { FC, useMemo } from 'react';
import Svg, { Circle } from 'react-native-svg';

import { formatProgress } from '../../../common/utils/format';

type ProgressProps = {
  progress: number;
  showPercentage?: boolean;
};

const Progress: FC<ProgressProps> = ({
  progress,
  showPercentage,
}: ProgressProps) => {
  const [offset, stroke, fill] = useToken('colors', [
    'primary.400',
    'primary.900',
    'primary.900',
  ]);

  const progressText = useMemo(
    () => formatProgress(progress, showPercentage),
    [progress, showPercentage],
  );

  const strokeDashoffset = useMemo(() => {
    return 101 - progress * 101;
  }, [progress]);

  return (
    <Box alignItems="center" justifyContent="center">
      <Svg width={34} height={34} fill="none">
        <Circle
          cx={17}
          cy={17}
          r={16}
          fill={fill}
          stroke={stroke}
          strokeWidth={2}
        />
        <Circle
          cx={17}
          cy={17}
          r={16}
          transform="rotate(-90,17,17)"
          fill="none"
          stroke={offset}
          strokeWidth={2}
          strokeDasharray={101}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      <Text position="absolute" fontSize="2xs" color="lightText">
        {progressText}
      </Text>
    </Box>
  );
};

export default Progress;

import { Box, useToken } from 'native-base';
import React, { FC, useMemo } from 'react';
import Svg, { Circle } from 'react-native-svg';

import { StopIcon } from '../icons';

type DownloadProgressProps = {
  progress: number;
  showPercentage?: boolean;
  onPress?: () => void;
};

export const DownloadProgress: FC<DownloadProgressProps> = ({
  progress,
}: DownloadProgressProps) => {
  const [stroke, offset, fill] = useToken('colors', [
    'primary.600',
    'primary.200',
    'white',
  ]);

  const strokeDashoffset = useMemo(() => {
    return 55 - progress * 55;
  }, [progress]);

  return (
    <Box alignItems="center" justifyContent="center">
      <Svg width={20} height={20} fill="none">
        <Circle
          cx={10}
          cy={10}
          r={9}
          fill={fill}
          stroke={offset}
          strokeWidth={2}
        />
        <Circle
          cx={10}
          cy={10}
          r={9}
          transform="rotate(-90,10,10)"
          fill="none"
          stroke={stroke}
          strokeWidth={2}
          strokeDasharray={55}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      <StopIcon position="absolute" color="primary.600" size="3" />
    </Box>
  );
};

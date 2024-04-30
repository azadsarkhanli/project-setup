import { Box, IBoxProps } from 'native-base';
import React, { FC } from 'react';

type GenreCardProps = IBoxProps & {
  text: string;
};

export const GenreCard: FC<GenreCardProps> = props => {
  const { text, ...boxProps } = props;

  return (
    <Box
      bg={'secondary.700'}
      px={'4'}
      pt={'3.5'}
      pb={'3'}
      borderRadius={'sm'}
      _text={{
        fontSize: 'xs',
        color: 'primary.100',
        _dark: { color: 'primary.100' },
      }}
      {...boxProps}
    >
      {text}
    </Box>
  );
};

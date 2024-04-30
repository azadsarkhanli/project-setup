import { Text, VStack } from 'native-base';
import { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import React, { FC } from 'react';

import { AudiobookPublication } from '../../../../common/graphql';

type AudiobookSummaryProps = Pick<
  AudiobookPublication,
  'title' | 'authorsFormatted'
> &
  IVStackProps & {
    screenWidth?: number;
  };

export const AudiobookSummary: FC<AudiobookSummaryProps> = props => {
  const { title, authorsFormatted, screenWidth } = props;

  return (
    <VStack alignItems="center" px="7" {...props}>
      <Text
        variant={screenWidth ? (screenWidth > 370 ? 'h2' : 'h4') : 'h2'}
        fontSize={24}
        numberOfLines={2}
        borderWidth={1}
        mb="2"
        textAlign="center"
        color="gray.900"
      >
        {title}
      </Text>
      <Text
        numberOfLines={2}
        variant="lg"
        color="primary.600"
        textAlign="center"
      >
        {authorsFormatted}
      </Text>
    </VStack>
  );
};

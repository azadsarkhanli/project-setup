import { Text, IBoxProps, Progress, HStack } from 'native-base';
import React, { FC } from 'react';

import { BookIcon, HeadsetIcon } from '../../../../common/components/icons';
import { formatProgress } from '../../../../common/utils/format';
import { PublicationFormat } from '../../graphql';
import { ResolvedPublication } from '../../types';

export type BookProgressProps = IBoxProps & {
  book: Pick<ResolvedPublication, 'format' | 'progress'>;
};

export const BookProgress: FC<BookProgressProps> = ({ book, ...props }) => {
  const Icon =
    book.format === PublicationFormat.Audiobook ? HeadsetIcon : BookIcon;
  return (
    <HStack space="2" alignItems="center" mt="2" {...props}>
      <Icon size="sm" color="primary.700" ml="3px" />
      <Progress value={(book.progress || 0) * 100} size="xs" flex="1" />
      <Text
        fontSize="2xs"
        noOfLines={1}
        isTruncated={false}
        color="primary.600"
      >
        {formatProgress(book.progress)}
      </Text>
    </HStack>
  );
};

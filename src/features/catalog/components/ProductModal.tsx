import { Center, Text, VStack } from 'native-base';
import React, { FC } from 'react';

import { Screen } from '../../../common/components/Screen';

type Publication = {
  id: string;
  title: string;
  author: string;
};

type Props = {
  publication: Publication;
  onOpen: () => void;
};

export const ProductModal: FC<Props> = ({ publication: { title, author } }) => {
  return (
    <Screen>
      <Center safeArea flex={1}>
        <VStack space={1} alignItems="center" width="100%">
          <Text variant="h3" mb={1} mt={3}>
            {title}
          </Text>
          <Text variant="caption">{author}</Text>
        </VStack>
      </Center>
    </Screen>
  );
};

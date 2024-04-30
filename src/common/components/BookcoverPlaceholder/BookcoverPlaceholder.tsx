import { View } from 'native-base';
import React from 'react';

import { IllustrationPlaceholderBookcover } from '../illustrations';

export const BookcoverPlaceholder = () => {
  return (
    <View
      rounded="lg"
      width={'100%'}
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={'primary.200'}
    >
      <IllustrationPlaceholderBookcover width="100" height="50%" />
    </View>
  );
};

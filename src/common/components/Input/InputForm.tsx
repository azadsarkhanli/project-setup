import { Input, IInputProps } from 'native-base';
import React, { forwardRef } from 'react';

export const InputForm = forwardRef((props: IInputProps, ref) => {
  return (
    <Input
      ref={ref}
      size={'lg'}
      variant={'outline'}
      height={'64px'}
      px={4}
      color={'muted.600'}
      borderRadius={8}
      borderWidth={1}
      backgroundColor="white"
      borderColor={'muted.500'}
      placeholderTextColor={'muted.500'}
      _dark={{ backgroundColor: 'muted.600' }}
      _focus={{
        borderColor: 'primary.700',
        borderWidth: '2',
        color: 'primary.700',
      }}
      _invalid={{
        borderColor: 'error.700',
        color: 'error.700',
        borderWidth: 1,
        opacity: 1,
        _focus: {
          borderColor: 'error.700',
          borderWidth: '2',
          opacity: 1,
        },
      }}
      _disabled={{
        backgroundColor: 'muted.300',
        borderColor: 'muted.300',
        color: 'muted.500',
        opacity: 1,
        placeholderTextColor: 'muted.500',
        _dark: {
          backgroundColor: 'muted.700',
        },
      }}
      {...props}
    />
  );
});

import { IInputProps, IconButton } from 'native-base';
import React, { forwardRef, useCallback, useState } from 'react';

import { SeeIcon } from '../iconsOld';
import { HideIcon } from '../iconsOld';

import { InputForm } from './InputForm';

export const InputFormPassword = forwardRef((props: IInputProps, ref) => {
  const [show, setShow] = useState(false);
  const handleClick = useCallback(() => setShow(!show), [show, setShow]);

  return (
    <InputForm
      ref={ref}
      type={show ? 'text' : 'password'}
      autoCapitalize="none"
      autoCorrect={false}
      InputRightElement={
        <IconButton
          variant="unstyled"
          colorScheme={'secondary'}
          icon={show ? <HideIcon /> : <SeeIcon />}
          _icon={{ color: 'secondary.500', size: 5 }}
          onPress={handleClick}
          size="md"
        />
      }
      {...props}
    />
  );
});

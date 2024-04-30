import {
  VStack,
  Text,
  ITextProps,
  Checkbox,
  ICheckboxProps,
  IBoxProps,
  Box,
} from 'native-base';
import React, { FC } from 'react';

export const CheckboxList: FC<ICheckboxProps> = ({
  children,
  ...checkboxProps
}) => {
  return (
    <Checkbox alignItems={'flex-start'} {...checkboxProps}>
      <VStack ml={4} pr={4}>
        {children}
      </VStack>
    </Checkbox>
  );
};

export const CheckboxListText: FC<ITextProps> = ({ children, ...props }) => {
  return (
    <Text fontSize={'sm'} {...props}>
      {children}
    </Text>
  );
};

type CheckboxListErrorSectionProps = IBoxProps & {
  isError: boolean;
};

export const CheckboxListErrorSection: FC<CheckboxListErrorSectionProps> = ({
  children,
  isError,
  ...props
}) => {
  if (!isError) {
    return null;
  }

  return (
    <Box mt={1} {...props}>
      {children}
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CheckboxListErrorTextProps extends ITextProps {}

export const CheckboxListErrorText: FC<CheckboxListErrorTextProps> = ({
  children,
  ...props
}) => {
  return (
    <Text
      fontSize={'md'}
      color={'error.600'}
      _dark={{ color: 'error.600' }}
      {...props}
    >
      {children}
    </Text>
  );
};

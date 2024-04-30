/* eslint-disable react-native/no-inline-styles */
import { useToken } from 'native-base';
import React, { VFC } from 'react';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const validateCode = (code: string) => /^\d{4}$/.test(code);

type CodeInputProps = {
  value?: string;
  onTextChange?: (value: string) => void;
  onFulfill?: (value: string) => void;
};

export const CodeInput: VFC<CodeInputProps> = ({
  value = '',
  onFulfill,
  onTextChange,
}) => {
  const [borderColor, focusedBgColor, textColor, successColor] = useToken(
    'colors',
    [
      'secondary.800',
      'secondary.600',
      'secondary.50',
      'supporting.statusGreen',
    ],
  );

  const isValid = validateCode(value);

  return (
    <SmoothPinCodeInput
      cellStyle={{
        backgroundColor: '#263733CC',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: isValid ? successColor : borderColor,
        width: 40,
      }}
      cellStyleFocused={{
        backgroundColor: focusedBgColor,
        borderWidth: 2,
        borderColor: successColor,
      }}
      textStyle={{
        color: textColor,
        fontFamily: 'HaasGrotTextRApp-55Roman',
        fontSize: 32,
        padding: 8,
      }}
      value={value}
      cellSize={64}
      cellSpacing={8}
      autoFocus
      restrictToNumbers
      keyboardType="numeric"
      onFulfill={onFulfill}
      onTextChange={onTextChange}
    />
  );
};

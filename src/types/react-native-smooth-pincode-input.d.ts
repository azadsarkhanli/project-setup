// https://github.com/xamous/react-native-smooth-pincode-input/issues/57

declare module 'react-native-smooth-pincode-input' {
  import { ReactElement, Component } from 'react';
  import {
    StyleProp,
    ViewStyle,
    TextStyle,
    TextInputProps,
  } from 'react-native';
  type SmoothPinCodeInputProps = {
    value?: string;
    codeLength?: number;
    cellSize?: number;
    cellSpacing?: number;
    placeholder?: string | ReactElement;
    mask?: string | ReactElement;
    maskDelay?: number;
    password?: boolean;
    autoFocus?: boolean;
    restrictToNumbers?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    cellStyle?: StyleProp<ViewStyle>;
    cellStyleFocused?: StyleProp<ViewStyle>;
    cellStyleFilled?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    textStyleFocused?: StyleProp<TextStyle>;
    animated?: boolean;
    animationFocused?: string;
    onFulfill?: (value: string) => void;
    onChangeText?: TextInputProps['onChangeText'];
    onBackspace?: () => void;
    onTextChange?: TextInputProps['onChangeText'];
    testID?: string;
    onFocus?: TextInputProps['onFocus'];
    onBlur?: TextInputProps['onBlur'];
    keyboardType?: string;
    editable?: boolean;
    inputProps?: TextInputProps;
  };

  type SmoothInputSate = {
    maskDelay: boolean;
    focused: boolean;
  };

  export default class SmoothPinCodeInput extends Component<
    SmoothPinCodeInputProps,
    SmoothInputSate
  > {}
}

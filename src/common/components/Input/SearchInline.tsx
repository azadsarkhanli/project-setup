import { IInputProps, IconButton } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TextInputFocusEventData,
} from 'react-native';

import { CloseCircleOutlineIcon, SearchOutlineIcon } from '../icons';

import { InputForm } from './InputForm';

type SearchInlineProps = IInputProps & {
  onBackClicked?: () => void;
  onClearClicked?: () => void;
  onFocusChanged?: (hasFocus: boolean) => void;
  onActiveChanged?: (isActive: boolean) => void;
};

/**
 * TODO:
 * - the caret in the design has a green color which is not in the design system
 * - text color in the design is secondary.50 rather than lightText, is that correct?
 * - disabled behaviour is unclear when there is a value set
 */
export function SearchInline(props: SearchInlineProps) {
  const {
    value,
    onFocus,
    onEndEditing,
    onChangeText,
    onClearClicked,
    onFocusChanged,
    onActiveChanged,
    isDisabled = false,
    ...rest
  } = props;
  const [textValue, setTextValue] = useState(value);
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState(false);

  const handleOnFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (onFocus) {
        onFocus(e);
      }
      setFocus(true);
    },
    [onFocus],
  );

  const handleOnEndEditing = useCallback(
    (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
      if (onEndEditing) {
        onEndEditing(e);
      }
      setFocus(false);
    },
    [onEndEditing],
  );

  const handleOnChangeText = useCallback(
    (text: string) => {
      if (onChangeText) {
        onChangeText(text);
      }

      setTextValue(text);
    },
    [onChangeText],
  );

  const handleOnCloseClicked = useCallback(() => {
    if (onClearClicked) {
      onClearClicked();
    }
    setTextValue('');
  }, [onClearClicked]);

  useEffect(() => {
    const hasText = !!(textValue && textValue.length > 0);
    setActive(hasText && !isDisabled);
  }, [focus, textValue, isDisabled]);

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  useEffect(() => {
    if (onFocusChanged) {
      onFocusChanged(focus);
    }
  }, [focus, onFocusChanged]);

  useEffect(() => {
    if (onActiveChanged) {
      onActiveChanged(active);
    }
  }, [active, onActiveChanged]);

  return (
    <InputForm
      value={textValue}
      isDisabled={isDisabled}
      onFocus={handleOnFocus}
      onEndEditing={handleOnEndEditing}
      onChangeText={handleOnChangeText}
      size="lg"
      variant="outline"
      InputLeftElement={
        <SearchOutlineIcon
          ml={4}
          size="md"
          color={focus ? 'primary.700' : 'muted.500'}
        />
      }
      InputRightElement={
        active ? (
          <IconButton
            variant="unstyled"
            icon={<CloseCircleOutlineIcon />}
            _icon={{ color: 'black', size: 'md' }}
            _pressed={{ bgColor: 'transparent' }}
            onPress={handleOnCloseClicked}
          />
        ) : (
          <></>
        )
      }
      {...rest}
    />
  );
}

import { FormControl, IInputProps } from 'native-base';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextInput } from 'react-native';
import useEffectOnce from 'react-use/lib/useEffectOnce';

import { InputForm } from './Input/InputForm';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  focusOnMount?: boolean;
  inputProps?: Partial<IInputProps>;
  InputComponent?: React.ForwardRefExoticComponent<
    IInputProps & React.RefAttributes<unknown>
  >;
  nextFieldRef?: React.MutableRefObject<TextFieldRef | undefined>;
};

export type TextFieldRef = { focus: () => void };

function TextFieldImpl<T extends FieldValues>(
  {
    control,
    focusOnMount,
    inputProps,
    label,
    name,
    InputComponent = InputForm,
    nextFieldRef,
  }: Props<T>,
  ref: React.ForwardedRef<TextFieldRef | null | undefined>,
) {
  const inputRef = useRef<TextInput>();

  useEffectOnce(() => {
    if (focusOnMount) {
      inputRef?.current?.focus();
    }
  });

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef?.current?.focus();
    },
  }));

  return (
    <Controller
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <FormControl isInvalid={!!error} mb={4}>
          <FormControl.Label>{label}</FormControl.Label>
          <InputComponent
            ref={inputRef}
            isFullWidth
            onEndEditing={onBlur}
            onChangeText={onChange}
            value={String(value)}
            {...(nextFieldRef
              ? {
                  blurOnSubmit: false,
                  onSubmitEditing: () => {
                    nextFieldRef.current?.focus();
                  },
                }
              : {})}
            {...inputProps}
          />
          {error?.message && (
            <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage>
          )}
        </FormControl>
      )}
      name={name}
    />
  );
}

export const TextField = forwardRef(TextFieldImpl) as <T extends FieldValues>(
  props: Props<T> & {
    ref?: React.ForwardedRef<TextFieldRef | null | undefined>;
  },
) => ReturnType<typeof TextFieldImpl>;

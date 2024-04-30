import { Box, ICheckboxProps } from 'native-base';
import React, { ReactNode } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import {
  CheckboxList,
  CheckboxListErrorSection,
  CheckboxListErrorText,
  CheckboxListText,
} from './Checkbox/CheckboxList';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: ReactNode;
  inputProps?: Partial<ICheckboxProps>;
};

export function CheckboxField<T>({
  control,
  inputProps,
  label,
  name,
}: Props<T>) {
  return (
    <Box borderRadius="8" borderColor="muted.500" borderWidth="1" padding="4">
      <Controller
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CheckboxList
            value={String(value)}
            isChecked={!!value}
            onChange={val => onChange(val)}
            alignItems="center"
            {...inputProps}
          >
            <CheckboxListText>{label}</CheckboxListText>
            <CheckboxListErrorSection isError={!!error}>
              {error?.message && (
                <CheckboxListErrorText>{error.message}</CheckboxListErrorText>
              )}
            </CheckboxListErrorSection>
          </CheckboxList>
        )}
        name={name}
      />
    </Box>
  );
}

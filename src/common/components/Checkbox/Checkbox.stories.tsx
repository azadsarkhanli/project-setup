import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Checkbox } from 'native-base';
import React, { useState } from 'react';

import {
  CheckboxList,
  CheckboxListErrorSection,
  CheckboxListErrorText,
  CheckboxListText,
} from './CheckboxList';

const CheckboxListContainer: React.VFC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxList value="value" isChecked={checked} onChange={setChecked}>
      <CheckboxListText>This is some text</CheckboxListText>
      <CheckboxListText>More text</CheckboxListText>
      <CheckboxListText>More text</CheckboxListText>
      <CheckboxListErrorSection isError={boolean('isError', false)}>
        <CheckboxListErrorText>This is an error</CheckboxListErrorText>
      </CheckboxListErrorSection>
    </CheckboxList>
  );
};

storiesOf('Checkbox', module)
  .add('Default', () => <Checkbox value="value">{'This is a text'}</Checkbox>)
  .add('CheckboxList', () => <CheckboxListContainer />);

import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { VStack } from 'native-base';
import React, { useState } from 'react';

import { MoonIcon, PersonCircleIcon } from '../icons';
import { Screen } from '../Screen';

import { TableCellGroup } from './TableCellGroup';
import { TableCellLink } from './TableCellLink';
import { TableCellSwitch } from './TableCellSwitch';

const SwitchStory = () => {
  const [checked, setChecked] = useState(false);
  return (
    <TableCellSwitch
      onToggle={() => setChecked(!checked)}
      isChecked={checked}
      Icon={MoonIcon}
      title="Dark mode"
      subtitle="Phasellus in diam nec libero eleifend finibus quis vitae ante. Duis efficitur nunc eu convallis laoreet."
    />
  );
};

storiesOf('TableCell', module)
  .add('List', () => {
    const variant = select(
      'variant',
      {
        solid: 'solid',
        ghost: 'ghost',
        outline: 'outline',
      },
      'solid',
    );
    const size = select(
      'size',
      {
        sm: 'sm',
        md: 'md',
        lg: 'lg',
      },
      'md',
    );
    return (
      <Screen>
        <VStack space="4" mx={4}>
          <TableCellLink
            onPress={action('onPress')}
            Icon={PersonCircleIcon}
            title="Profile page"
            size={size}
            variant={variant}
          />
          <TableCellLink
            onPress={action('onPress')}
            Icon={PersonCircleIcon}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis volutpat leo, non porttitor ligula eleifend vitae."
            subtitle="Phasellus in diam nec libero eleifend finibus quis vitae ante. Duis efficitur nunc eu convallis laoreet."
            size={size}
            variant={variant}
          />
          <TableCellSwitch
            Icon={MoonIcon}
            title="Dark mode"
            subtitle="Phasellus in diam nec libero eleifend finibus quis vitae ante. Duis efficitur nunc eu convallis laoreet."
            size={size}
            variant={variant}
          />
        </VStack>
      </Screen>
    );
  })
  .add('Switch', () => (
    <Screen p={6}>
      <SwitchStory />
    </Screen>
  ))
  .add('Group', () => (
    <Screen p={4}>
      <TableCellGroup>
        <TableCellLink
          onPress={action('onPress')}
          Icon={PersonCircleIcon}
          title="Profile page"
          variant="ghost"
        />
        <TableCellLink
          onPress={action('onPress')}
          Icon={PersonCircleIcon}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis volutpat leo, non porttitor ligula eleifend vitae."
          variant="ghost"
        />
        <TableCellSwitch Icon={MoonIcon} title="Dark mode" variant="ghost" />
      </TableCellGroup>
    </Screen>
  ));

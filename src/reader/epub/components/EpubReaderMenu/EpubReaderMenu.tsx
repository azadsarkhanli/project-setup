import { HStack } from 'native-base';
import React, { ComponentType, FC, useCallback, useState } from 'react';

import { ScreenHeader } from '../../../../common/components/ScreenHeader';

import { BookmarkMenuItem } from './BookmarkMenuItem';
import { ExperienceMenuItem } from './ExperienceMenuItem';
import { OutlineMenuItem } from './OutlineMenuItem';
import { MenuItemProps } from './types';

const menuItems: Record<string, ComponentType<MenuItemProps>> = {
  outline: OutlineMenuItem,
  bookmarks: BookmarkMenuItem,
  experience: ExperienceMenuItem,
};

type Props = {
  onGoBack: () => void;
};

export const EpubReaderMenu: FC<Props> = ({ onGoBack }) => {
  const [activeKey, setActiveKey] = useState<string | undefined>();

  const onClose = useCallback(() => {
    setActiveKey('');
  }, [setActiveKey]);

  return (
    <ScreenHeader
      onGoBack={onGoBack}
      rightContent={
        <HStack alignItems="center">
          {Object.entries(menuItems).map(([key, Component]) => (
            <Component
              key={key}
              isOpen={activeKey === key}
              onClose={onClose}
              onPress={() => setActiveKey(key)}
            />
          ))}
        </HStack>
      }
    />
  );
};

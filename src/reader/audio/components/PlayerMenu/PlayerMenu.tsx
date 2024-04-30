import React, { ComponentType, FC, useCallback, useState } from 'react';

import { ReaderMenu } from '../../../common/components/ReaderMenu';
import { MenuItemProps } from '../../../epub/components/EpubReaderMenu/types';

import { BookmarkMenuItem } from './BookmarkMenuItem';
import { OutlineMenuItem } from './OutlineMenuItem';
import { PlaybackSpeedMenuItem } from './PlaybackSpeedMenuItem';
import { SleepTimerMenuItem } from './SleepTimerMenuItem';

const menuItems: Record<string, ComponentType<MenuItemProps>> = {
  bookmarks: OutlineMenuItem,
  bookmark: BookmarkMenuItem,
  playbackSpeed: PlaybackSpeedMenuItem,
  sleepTimer: SleepTimerMenuItem,
};
type ReaderMenuProps = {
  screenWidth: number;
};
export const PlayerMenu: FC<ReaderMenuProps> = props => {
  const [activeKey, setActiveKey] = useState<string | undefined>();

  const onClose = useCallback(() => {
    setActiveKey('');
  }, [setActiveKey]);

  return (
    <ReaderMenu
      _stack={{
        mx: 8,
        mb: props.screenWidth > 370 ? 6 : 4,
      }}
    >
      {Object.entries(menuItems).map(([key, Component]) => (
        <Component
          key={key}
          isOpen={activeKey === key}
          onClose={onClose}
          onPress={() => setActiveKey(key)}
        />
      ))}
    </ReaderMenu>
  );
};

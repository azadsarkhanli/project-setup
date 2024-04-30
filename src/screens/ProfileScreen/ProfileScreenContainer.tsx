import React, { VFC } from 'react';

import { useUserContext } from '../../common/context/UserContext';

import { ProfileScreen } from './ProfileScreen';
import { useSettingsMenu } from './useSettingsMenu';

export const ProfileScreenContainer: VFC = () => {
  const menuItems = useSettingsMenu();
  const { user } = useUserContext();

  return (
    <ProfileScreen
      menuItems={menuItems}
      user={{ email: user?.userInfo?.email ?? '' }}
    />
  );
};

import { IIconProps, Text, View } from 'native-base';
import React, { ComponentType, FC } from 'react';
import { useTranslation } from 'react-i18next';
import VersionInfo from 'react-native-version-info';

import { Screen } from '../../common/components/Screen';
import { ScreenHeader } from '../../common/components/ScreenHeader';
import { TableCellLink } from '../../common/components/TableCell/TableCellLink';
import { UserInfo } from '../../common/graphql';

type MenuItemProps = {
  label: string;
  onPress?: () => void;
  Icon?: ComponentType<IIconProps>;
  RightIcon?: ComponentType<IIconProps>;
};

type Props = {
  menuItems: MenuItemProps[];
  user: Pick<UserInfo, 'email'>;
};

export const ProfileScreen: FC<Props> = ({ menuItems, user }) => {
  const { t } = useTranslation('catalog');
  const textItems = [
    t('profileScreen.appVersion', {
      version: `${VersionInfo.appVersion} (${VersionInfo.buildVersion})`,
    }),
    user.email,
  ];

  return (
    <Screen
      p={4}
      header={<ScreenHeader title={t('profileScreen.title')} />}
      withBottomMenu
    >
      {menuItems.map(({ label, Icon, onPress, RightIcon }, idx) => (
        <TableCellLink
          Icon={Icon}
          rightContent={
            RightIcon ? <RightIcon color="muted.500" size="md" /> : undefined
          }
          mt={4}
          key={idx}
          title={label}
          onPress={onPress}
        />
      ))}
      <View flex={1} />
      {textItems.map(item => (
        <Text key={item} color="muted.500" variant="sm" mb="2">
          {item}
        </Text>
      ))}
    </Screen>
  );
};

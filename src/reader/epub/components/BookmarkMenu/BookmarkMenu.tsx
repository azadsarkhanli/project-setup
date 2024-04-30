import { Divider, IconButton, IIconProps, Menu } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DotsHorizontalIcon } from '../../../../common/components/iconsOld';

type Props = {
  onNavigate: () => void;
  onDelete: () => void;
  iconProps?: IIconProps;
};

export const BookmarkMenu: FC<Props> = ({
  onDelete,
  onNavigate,
  iconProps,
}) => {
  const { t } = useTranslation('reader');
  return (
    <Menu
      trigger={triggerProps => (
        <IconButton
          colorScheme="secondary"
          variant="unstyled"
          size="sm"
          icon={<DotsHorizontalIcon />}
          _icon={{ color: 'primary.600', size: 4, ...iconProps }}
          _pressed={{ bgColor: 'transparent' }}
          {...triggerProps}
        />
      )}
      placement="left bottom"
    >
      <Menu.Item onPress={onNavigate}>
        {t('bookmarks.contextMenu.navigate')}
      </Menu.Item>
      <Divider bg="secondary.600" />
      <Menu.Item onPress={onDelete}>
        {t('bookmarks.contextMenu.delete')}
      </Menu.Item>
    </Menu>
  );
};

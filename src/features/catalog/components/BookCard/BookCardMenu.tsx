import flatMap from 'lodash/flatMap';
import { Divider, IconButton, Menu } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DotsHorizontalIcon } from '../../../../common/components/iconsOld';
import { PublicationFormat } from '../../graphql';
import { ResolvedPublication } from '../../types';

type Props = {
  book: ResolvedPublication;
  onDownload?: () => void;
  onOpen?: () => void;
  onRemoveFromDevice?: () => void;
};

export const BookCardMenu: FC<Props> = ({
  book,
  onDownload,
  onOpen,
  onRemoveFromDevice,
}) => {
  const { t } = useTranslation('catalog');

  if (!book.isOwned) {
    return null;
  }

  const items = [];
  if (book.isDownloaded) {
    items.push(
      <Menu.Item key="continue" onPress={onOpen}>
        {book.format === PublicationFormat.Audiobook
          ? t('bookCard.menu.continueListening')
          : t('bookCard.menu.continueReading')}
      </Menu.Item>,
    );
    items.push(
      <Menu.Item key="removeFromDevice" onPress={onRemoveFromDevice}>
        {t('bookCard.menu.removeFromDevice')}
      </Menu.Item>,
    );
  } else if (onDownload) {
    items.push(
      <Menu.Item key="download" onPress={onDownload}>
        {t('bookCard.menu.download')}
      </Menu.Item>,
    );
  }

  if (!items.length) {
    return null;
  }

  return (
    <Menu
      trigger={triggerProps => (
        <IconButton
          icon={<DotsHorizontalIcon size="sm" color="secondary.500" />}
          bg="secondary.800"
          size="sm"
          colorScheme="secondary"
          position="absolute"
          bottom="2"
          right="2"
          px="1"
          py="0"
          rounded="lg"
          {...triggerProps}
        />
      )}
      placement="left bottom"
    >
      {flatMap(items, (value, index, array) =>
        array.length - 1 !== index
          ? [value, <Divider key={`separator-${index}`} bg="secondary.600" />]
          : value,
      )}
    </Menu>
  );
};

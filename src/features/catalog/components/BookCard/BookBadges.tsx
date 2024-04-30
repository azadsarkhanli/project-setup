import { HStack, Badge, Stack } from 'native-base';
import { IStackProps } from 'native-base/lib/typescript/components/primitives';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BookIcon, HeadsetIcon } from '../../../../common/components/icons';
import { PublicationFormat } from '../../graphql';
import { ResolvedPublication } from '../../types';

export type BookBadgesProps = IStackProps & {
  book: Pick<ResolvedPublication, 'format' | 'isNew'>;
  withFormatIcons?: boolean;
};

export const BookBadges: FC<BookBadgesProps> = ({
  book: { format, isNew },
  withFormatIcons,
  ...props
}) => {
  const { t } = useTranslation('catalog');

  const isEbook = format === PublicationFormat.Ebook;
  const isAudiobook = format === PublicationFormat.Audiobook;

  const items = [];
  if (isNew) {
    items.push(
      <Badge key="isNew" colorScheme="secondary" variant="solid">
        {t('bookCard.badgeNew')}
      </Badge>,
    );
  }
  if (withFormatIcons) {
    items.push(
      <Badge key="format" colorScheme="secondary" variant="solid" py="1" px="2">
        <HStack space="2">
          {isEbook && <BookIcon color="muted.50" size="xs" />}
          {isAudiobook && <HeadsetIcon color="muted.50" size="xs" />}
        </HStack>
      </Badge>,
    );
  }

  return <Stack {...props}>{items}</Stack>;
};

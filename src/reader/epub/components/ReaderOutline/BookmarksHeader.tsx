import { Box, Text } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../../common/components/Button';
import { BookOpenIcon } from '../../../../common/components/iconsOld';

type BookmarksHeaderProps = {
  bookmarksCount: number;
  onContinue: () => void;
};

export const BookmarksHeader: FC<BookmarksHeaderProps> = ({
  bookmarksCount,
  onContinue,
}) => {
  const { t } = useTranslation('reader');

  return (
    <Box key="header">
      <Text variant="md" mb="4">
        {t('readerMenu.outline.bookmarks.bookmarksCount', {
          count: bookmarksCount,
        })}
      </Text>
      <Button
        onPress={onContinue}
        size="md"
        StartIcon={BookOpenIcon}
        colorScheme="secondary"
        alignSelf="flex-start"
        mb="4"
      >
        {t('readerMenu.outline.bookmarks.buttonContinue')}
      </Button>
    </Box>
  );
};

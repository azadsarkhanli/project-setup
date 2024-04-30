import { Image, AspectRatio, Box, IBoxProps } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BookcoverPlaceholder } from '../../../../common/components/BookcoverPlaceholder';
import { AudiobookPublication } from '../../../../common/graphql';

type AudiobookCoverProps = Pick<AudiobookPublication, 'thumbnailUri'> &
  IBoxProps & {
    screenWidth?: number;
  };

export const AudiobookCover: FC<AudiobookCoverProps> = ({
  thumbnailUri,
  screenWidth,
  ...props
}) => {
  const { t } = useTranslation('player');
  let width = screenWidth;

  if (width) {
    if (width > 370) {
      width = width * 0.85;
    } else if (width > 330) {
      width = width * 0.6;
    } else {
      width = width * 0.35;
    }
  }
  return (
    <Box px={width && 8} alignItems="center" {...props}>
      <AspectRatio ratio={1} width={width ? width : 'full'}>
        {thumbnailUri ? (
          <Image
            source={{ uri: thumbnailUri }}
            key={thumbnailUri}
            borderWidth={1}
            borderRadius={8}
            alt={t('audiobookSummary.coverImageAltText')}
            w="full"
          />
        ) : (
          <BookcoverPlaceholder />
        )}
      </AspectRatio>
    </Box>
  );
};

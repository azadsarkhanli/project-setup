import { Image, AspectRatio, IAspectRatioProps, Box } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image as RNImage } from 'react-native';

import { BookcoverPlaceholder } from '../../../../common/components/BookcoverPlaceholder';
import { PublicationFormat } from '../../graphql';
import { BaseBook } from '../../types';

export type CoverImageProps = Omit<IAspectRatioProps, 'children'> & {
  book: Pick<BaseBook, 'thumbnailUri' | 'title' | 'format'>;
  onRatioChange?: (ratio: number) => void;
};

export const CoverImage: FC<CoverImageProps> = ({
  book: { thumbnailUri, title, format },
  onRatioChange,
  ...props
}) => {
  const { t } = useTranslation('catalog');
  const [ratio, setRatio] = useState(
    // setting initial ratio as they usually are for each format,
    // later it's updated in useEffect based on actual image file.
    format === PublicationFormat.Audiobook ? 1 : 105 / 164,
  );

  useEffect(() => {
    if (thumbnailUri) {
      RNImage.getSize(thumbnailUri, (width: number, height: number) => {
        if (height > 0) {
          setRatio(width / height);
          onRatioChange && onRatioChange(width / height);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thumbnailUri]);

  return (
    <AspectRatio ratio={ratio} {...props}>
      {thumbnailUri ? (
        <Image
          rounded="lg"
          source={{
            uri: thumbnailUri,
          }}
          fallbackElement={<Box bg="muted.200" flex={1} borderRadius={4} />}
          backgroundColor="black"
          alt={t('bookCard.coverImageAlt', { title })}
          // Hack for image not updating when changing the source.
          // Should be fixed in the future:
          // https://github.com/GeekyAnts/NativeBase/issues/4268
          key={thumbnailUri}
        />
      ) : (
        <BookcoverPlaceholder />
      )}
    </AspectRatio>
  );
};

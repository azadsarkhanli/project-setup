import { Image, View, IImageProps, Box } from 'native-base';
import React, { useEffect, useState, VFC } from 'react';
import { Image as RNImage } from 'react-native';
import useMountedState from 'react-use/lib/useMountedState';

import { BookcoverPlaceholder } from '../../../../../common/components/BookcoverPlaceholder';

type ImageContain = Omit<IImageProps, 'source' | 'resizeMode'> & {
  imageUrl?: string;
};

type ImageDimensions = { width: number; height: number };

/**
 * This component will show an image which is contained within the specified width and height boundaries and can be vertically aligned.
 * The default RN image will be centered when using resizeMode 'contain' and can not be vertically aligned.
 */
export const ImageContain: VFC<ImageContain> = ({
  alignItems = 'flex-start',
  width: widthProp = '12',
  height: heightProp = '20',
  imageUrl,
  ...imageProps
}) => {
  const isMounted = useMountedState();

  const [imageDimensions, setImageDimensions] = useState<
    ImageDimensions | undefined
  >();

  const [constraintDimensions, setConstraintDimensions] = useState<
    ImageDimensions | undefined
  >();

  useEffect(() => {
    if (imageUrl) {
      const getSizeAsync = async () => {
        const dimensions = await getSize(imageUrl);

        if (isMounted()) {
          setImageDimensions(dimensions);
        }
      };

      getSizeAsync();
    }
  }, [imageUrl, isMounted]);

  const cover = getCoverDimensions(constraintDimensions, imageDimensions);

  return (
    <View
      flexDirection="row"
      alignItems={alignItems}
      width={widthProp}
      height={heightProp}
      onLayout={e =>
        setConstraintDimensions({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height,
        })
      }
    >
      {imageDimensions &&
        (imageUrl ? (
          <Image
            source={{
              uri: imageUrl,
            }}
            style={{ width: cover?.width, height: cover?.height }}
            fallbackElement={<Box bg="muted.200" flex={1} borderRadius={4} />}
            {...imageProps}
          />
        ) : (
          <BookcoverPlaceholder />
        ))}
    </View>
  );
};

const getSize = (imageUrl: string): Promise<ImageDimensions> => {
  return new Promise((resolve, reject) => {
    RNImage.getSize(
      imageUrl,
      (width: number, height: number) =>
        resolve({ width: width, height: height }),
      error => reject(error),
    );
  });
};

const getCoverDimensions = (
  constraint: ImageDimensions | undefined,
  image: ImageDimensions | undefined,
): ImageDimensions | undefined => {
  if (!constraint || !image) {
    return undefined;
  }

  const ratio = getRatio(constraint, image);

  return { width: image.width / ratio, height: image.height / ratio };
};

const getRatio = (
  constraint: ImageDimensions,
  image: ImageDimensions,
): number => {
  const widthRatio = image.width / constraint.width;
  const heightRatio = image.height / constraint.height;

  return Math.max(widthRatio, heightRatio);
};

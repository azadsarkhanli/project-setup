import { Divider, Text, VStack } from 'native-base';
import React, { FC } from 'react';

import { Screen } from '../../common/components/Screen';
import { ScreenHeader } from '../../common/components/ScreenHeader';
import { GraphQlNode } from '../../common/types';
import { CoverImage } from '../../features/catalog/components/CoverImage';
import { ProductDescription } from '../../features/catalog/components/ProductDescription';
import {
  ProductDownload,
  ProductDownloadProps,
} from '../../features/catalog/components/ProductDownload';
import { ProductFeatures } from '../../features/catalog/components/ProductFeatures';
import { ProductGenres } from '../../features/catalog/components/ProductGenres';
import { ProductOpenButton } from '../../features/catalog/components/ProductOpenButton';
import { ProductPurchase } from '../../features/catalog/components/ProductPurchase/ProductPurchase';
import {
  ProductBundleQuery,
  PublicationFragment,
} from '../../features/catalog/graphql';

type ProductScreenProps = {
  onGoBack?: () => void;
  onPurchase?: () => void;
  onOpen?: () => void;
  downloadProps?: Pick<
    ProductDownloadProps,
    'cancel' | 'download' | 'downloadProgress' | 'fileStatus' | 'removeFile'
  > | null;
  productBundle?: Extract<
    ProductBundleQuery['productBundle'],
    GraphQlNode<'ProductBundle'>
  >;
  publication?: PublicationFragment;
};

export const ProductScreen: FC<ProductScreenProps> = ({
  downloadProps,
  productBundle,
  publication,
  onGoBack,
  onOpen,
  onPurchase,
}) => {
  const { title, authorsFormatted, coverImageData, genres } = getCommonMetadata(
    productBundle,
    publication,
  );

  return (
    <Screen header={<ScreenHeader onGoBack={onGoBack} />} withBottomMenu pb={6}>
      <VStack alignItems="center" p={4}>
        {coverImageData && (
          <CoverImage book={coverImageData} height="176px" mb="6" />
        )}
        <Text variant="h3" numberOfLines={2} mb="2" textAlign="center">
          {title}
        </Text>
        <Text
          numberOfLines={2}
          variant="md"
          color="primary.600"
          textAlign="center"
        >
          {authorsFormatted}
        </Text>
        {productBundle && !publication && (
          <ProductPurchase onPress={onPurchase} mt="6" />
        )}
        {publication && onOpen && (
          <ProductOpenButton
            format={publication.format}
            onPress={onOpen}
            mt={6}
          />
        )}
        {downloadProps && downloadProps.fileStatus !== 'checking' && (
          <>
            <Divider my="6" />
            <ProductDownload
              {...downloadProps}
              mt={6}
              isAudiobook={publication?.__typename === 'AudiobookPublication'}
            />
          </>
        )}
        {productBundle?.description && (
          <>
            <Divider my="6" />
            <ProductDescription description={productBundle?.description} />
          </>
        )}
        {Boolean(genres?.length) && (
          <>
            <Divider my="6" />
            <ProductGenres genres={genres} mb="-2" />
          </>
        )}
        {Boolean(productBundle?.products.length) && (
          <>
            <Divider my="6" />
            {productBundle?.products.map(product => (
              <ProductFeatures
                key={product.id}
                metadata={product.metadata}
                mb="6"
              />
            ))}
          </>
        )}
      </VStack>
    </Screen>
  );
};

const getCommonMetadata = (
  productBundle: ProductScreenProps['productBundle'],
  publication: ProductScreenProps['publication'],
) => {
  return {
    title: productBundle?.title ?? publication?.title,
    authorsFormatted:
      productBundle?.authorsFormatted ?? publication?.authorsFormatted,
    coverImageData: productBundle?.products[0]?.metadata ?? publication,
    genres: productBundle?.products[0]?.metadata.genres || [],
  };
};

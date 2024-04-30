import { Box, IBoxProps, Text } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Maybe,
  ProductMetadataFragment,
  PublicationFormat,
} from '../../graphql';

type ProductFeaturesProps = IBoxProps & {
  metadata: ProductMetadataFragment;
};

export const ProductFeatures: FC<ProductFeaturesProps> = ({
  metadata,
  ...props
}) => {
  const { t } = useTranslation('catalog');
  return (
    <Box width="full" {...props}>
      <Text variant="md" color="muted.600" fontWeight="500" mb="2">
        {metadata.format === PublicationFormat.Audiobook
          ? t('productScreen.features.title_AUDIOBOOK')
          : t('productScreen.features.title_EBOOK')}
      </Text>
      <Feature
        label={t('productScreen.features.language')}
        value={metadata.language}
      />
      <Feature
        label={t('productScreen.features.readerVoice')}
        value={metadata.readerVoice}
      />
      <Feature
        label={t('productScreen.features.pages')}
        value={Number(metadata.pages)}
      />
      <Feature
        label={t('productScreen.features.playTime')}
        value={metadata.playTime}
      />
      <Feature
        label={t('productScreen.features.publisher')}
        value={metadata.publisher}
      />
      <Feature
        label={t('productScreen.features.releaseDate')}
        value={metadata.releaseDate}
      />
      <Feature label={t('productScreen.features.isbn')} value={metadata.isbn} />
      <Feature
        label={t('productScreen.features.seriesTitle')}
        value={metadata.seriesTitle}
      />
    </Box>
  );
};

type FeatureProps = {
  label: string;
  value: Maybe<string | number>;
};

const Feature: FC<FeatureProps> = ({ label, value }) => {
  if (!value) {
    return null;
  }
  return (
    <Text variant="sm" color="muted.500">
      {label}: {value}
    </Text>
  );
};

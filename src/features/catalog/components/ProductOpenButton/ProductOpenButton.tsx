import { Button, IButtonProps } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  PlayOutlineIcon,
  ReadingGlassesOutlineIcon,
} from '../../../../common/components/icons';
import { PublicationFormat } from '../../graphql';

type ProductOpenButtonProps = IButtonProps & {
  format: PublicationFormat;
};

export const ProductOpenButton: FC<ProductOpenButtonProps> = ({
  format,
  ...props
}) => {
  const { t } = useTranslation('catalog');

  const IconComponent =
    format === PublicationFormat.Audiobook
      ? PlayOutlineIcon
      : ReadingGlassesOutlineIcon;
  const label =
    format === PublicationFormat.Audiobook
      ? t('productScreen.openAudiobook')
      : t('productScreen.openEbook');

  return (
    <Button
      colorScheme="primary"
      size="md"
      leftIcon={<IconComponent color="muted.50" />}
      width="full"
      {...props}
    >
      {label}
    </Button>
  );
};

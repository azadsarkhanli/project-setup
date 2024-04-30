import { Box, Button, IBoxProps, Text } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { OpenOutlineIcon } from '../../../../common/components/icons';

type ProductPurchaseProps = IBoxProps & {
  onPress?: () => void;
};

export const ProductPurchase: FC<ProductPurchaseProps> = ({
  onPress,
  ...props
}) => {
  const { t } = useTranslation('catalog');

  return (
    <Box p="8" bg="muted.50" rounded="3xl" width="100%" {...props}>
      <Text variant="h4" mb="1" textAlign="center" px="2">
        {t('productScreen.purchase.title')}
      </Text>
      <Text variant="md" mb="6" textAlign="center" px="2">
        {t('productScreen.purchase.description')}
      </Text>
      <Button
        variant="ghost"
        colorScheme="primary"
        size="md"
        rightIcon={<OpenOutlineIcon color="primary.700" mt={-1} />}
        onPress={onPress}
      >
        {t('productScreen.purchase.button')}
      </Button>
    </Box>
  );
};

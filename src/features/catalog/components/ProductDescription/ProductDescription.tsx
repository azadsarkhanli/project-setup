import { Box, IBoxProps, Text } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import useToggle from 'react-use/lib/useToggle';

type ProductDescriptionProps = IBoxProps & {
  description: string;
};

export const ProductDescription: FC<ProductDescriptionProps> = ({
  description,
  ...props
}) => {
  const { t } = useTranslation('catalog');
  const [isExpanded, toggleExpanded] = useToggle(false);

  return (
    <Box {...props}>
      <Text variant="sm" color="muted.600" fontWeight="500" mb="4">
        {t('productScreen.description.title')}
      </Text>
      <Text variant="md" mb="4" numberOfLines={isExpanded ? undefined : 5}>
        {description}
      </Text>
      {!isExpanded && (
        <Text
          variant="md"
          color="primary.600"
          fontWeight="500"
          onPress={toggleExpanded}
        >
          {t('productScreen.description.readMore')}
        </Text>
      )}
    </Box>
  );
};

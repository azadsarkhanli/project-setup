import { Box, Button, IBoxProps, Row, ScrollView, Text } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

type ProductGenresProps = IBoxProps & {
  genres: string[];
};

export const ProductGenres: FC<ProductGenresProps> = ({ genres, ...props }) => {
  const { t } = useTranslation('catalog');
  return (
    <Box width="full" {...props}>
      <Text variant="sm" color="muted.600" fontWeight="500" mb="2">
        {t('productScreen.genres')}
      </Text>
      <ScrollView
        horizontal
        mx="-4"
        py="2"
        showsHorizontalScrollIndicator={false}
      >
        <Row px={4}>
          {genres.map(genre => (
            <Button
              key={genre}
              variant="ghost"
              colorScheme="secondary"
              size="sm"
              mr="3"
            >
              {genre}
            </Button>
          ))}
        </Row>
      </ScrollView>
    </Box>
  );
};

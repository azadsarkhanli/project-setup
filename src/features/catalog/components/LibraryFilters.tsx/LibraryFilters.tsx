import { IBoxProps, HStack, Box } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonProps } from '../../../../common/components/Button';
import { BookIcon } from '../../../../common/components/icons/BookIcon';
import { HeadsetIcon } from '../../../../common/components/icons/HeadsetIcon';
import { PublicationFormat } from '../../graphql';

export type LibraryFiltersProps = IBoxProps & {
  activeFilter: PublicationFormat | null;
  onChange: (filter: PublicationFormat | null) => void;
};

export const LibraryFilters: FC<LibraryFiltersProps> = ({
  activeFilter,
  onChange,
  ...props
}) => {
  const { t } = useTranslation('catalog');

  return (
    <HStack space={2} justifyContent="center" {...props}>
      <Box flex={1}>
        <FilterButton
          isActive={activeFilter === null}
          onPress={() => onChange(null)}
          size="sm"
          width="full"
        >
          {t('libraryScreen.filters.all')}
        </FilterButton>
      </Box>
      <Box flex={1}>
        <FilterButton
          isActive={activeFilter === PublicationFormat.Audiobook}
          onPress={() => onChange(PublicationFormat.Audiobook)}
          size="sm"
          StartIcon={HeadsetIcon}
          width="full"
        >
          {t('libraryScreen.filters.audiobook')}
        </FilterButton>
      </Box>
      <Box flex={1}>
        <FilterButton
          isActive={activeFilter === PublicationFormat.Ebook}
          onPress={() => onChange(PublicationFormat.Ebook)}
          size="sm"
          StartIcon={BookIcon}
          width="full"
        >
          {t('libraryScreen.filters.ebook')}
        </FilterButton>
      </Box>
    </HStack>
  );
};

const FilterButton: FC<{ isActive: boolean } & ButtonProps> = ({
  children,
  isActive,
  ...props
}) => (
  <Button
    colorScheme="secondary"
    variant={isActive ? 'solid' : 'outline'}
    {...props}
  >
    {children}
  </Button>
);

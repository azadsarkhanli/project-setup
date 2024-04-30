import { Box, HStack, Pressable, Text, VStack } from 'native-base';
import { IMenuComponent } from 'native-base/lib/typescript/components/composites/Menu/types';
import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

type HighlightProps = {
  title?: string | ReactElement;
  content?: string | null;
  contentNumberOfLines?: number;
  date?: Date;
  onPress?: () => void;
  contextMenu?: ReactElement<IMenuComponent>;
};

export const Highlight: FC<HighlightProps> = ({
  title,
  content,
  contentNumberOfLines,
  date,
  contextMenu,
  onPress,
}: HighlightProps) => {
  const { t } = useTranslation('common');

  const isTitleAString = title && typeof title === 'string';

  const renderBody = () => (
    <VStack p="4" space="1" bgColor="secondary.700" rounded="xl" w="full">
      <HStack justifyContent="space-between" h="4" alignItems="center">
        {title && isTitleAString && <Text fontSize="2xs">{title}</Text>}
        {title && !isTitleAString && title}
        {contextMenu !== undefined && <Box ml="auto">{contextMenu}</Box>}
      </HStack>
      {!!content && (
        <Text
          variant="lg"
          _dark={{ color: 'primary.100' }}
          {...(contentNumberOfLines
            ? { numberOfLines: contentNumberOfLines }
            : {})}
        >
          {content}
        </Text>
      )}
      {date && (
        <Text
          variant="xs"
          mt="1"
          _dark={{ color: 'secondary.500' }}
          textTransform="capitalize"
        >
          {t('highlight.date', { date })}
        </Text>
      )}
    </VStack>
  );

  return onPress ? (
    <Pressable onPress={onPress}>{renderBody()}</Pressable>
  ) : (
    renderBody()
  );
};

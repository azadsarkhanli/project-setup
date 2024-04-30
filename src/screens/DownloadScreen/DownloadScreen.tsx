import { Box, Center, Pressable, Text, VStack } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../common/components/Button';
import { DownloadYesIcon } from '../../common/components/iconsOld';
import { Screen } from '../../common/components/Screen';
import { PublicationFormat } from '../../common/graphql';
import { FileStatus } from '../../common/useBookFile';
import { formatProgress } from '../../common/utils/format';
import { CoverImage } from '../../features/catalog/components/CoverImage';
import { PublicationFragment } from '../../features/catalog/graphql';

type Props = {
  book: PublicationFragment;
  onDownload?: () => void;
  onGoBack?: () => void;
  onGoToBookPage?: () => void;
  fileStatus: FileStatus;
  downloadProgress?: number;
};

export const DownloadScreen: FC<Props> = ({
  book,
  fileStatus,
  downloadProgress,
  onDownload,
  onGoBack,
}) => {
  const { t } = useTranslation('catalog');
  const { title, authors } = book;
  return (
    <Screen>
      <Center flex={1}>
        <VStack space={3} alignItems="center" mx={13}>
          <CoverImage
            book={{ ...book, format: PublicationFormat.Ebook }}
            width={105}
          />
          <Text variant="h3" textAlign="center">
            {title}
          </Text>
          <Text variant="md" _dark={{ color: 'secondary.50' }}>
            {t('downloadScreen.author', {
              authors: authors.map(author => author.name).join(', '),
            })}
          </Text>
          <Box mt={5} minHeight="100px">
            <Center>
              {fileStatus === 'online' && (
                <>
                  {onDownload && (
                    <Button
                      colorScheme="primary"
                      _dark={{
                        colorScheme: 'primaryLight',
                      }}
                      borderRadius="full"
                      size="lg"
                      onPress={onDownload}
                      StartIcon={DownloadYesIcon}
                    >
                      {t('downloadScreen.download')}
                    </Button>
                  )}
                </>
              )}
              {fileStatus === 'downloading' && (
                <Text variant="lg" _dark={{ color: 'secondary.500' }}>
                  {t('downloadScreen.downloadProgress', {
                    progress: formatProgress(downloadProgress),
                  })}
                </Text>
              )}
            </Center>
          </Box>
        </VStack>
      </Center>
      <Center m={12}>
        {onGoBack && (
          <Pressable onPress={onGoBack}>
            <Text variant="lg" _dark={{ color: 'secondary.600' }}>
              {t('downloadScreen.goBack')}
            </Text>
          </Pressable>
        )}
      </Center>
    </Screen>
  );
};

import { Box, IBoxProps, useDisclose } from 'native-base';
import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { AlertRemoveConfirmation } from '../../../../common/components/AlertRemoveConfirmation';
import { DownloadProgress } from '../../../../common/components/DownloadProgress';
import {
  DownloadOutlineIcon,
  TrashOutlineIcon,
} from '../../../../common/components/icons';
import { TableCellLink } from '../../../../common/components/TableCell/TableCellLink';
import { FileStatus } from '../../../../common/useBookFile';

export type ProductDownloadProps = IBoxProps & {
  cancel: () => void;
  download: () => void;
  downloadProgress: number;
  fileStatus: FileStatus;
  removeFile: () => void;
  isAudiobook: boolean;
};

export const ProductDownload: FC<ProductDownloadProps> = ({
  cancel,
  download,
  downloadProgress,
  fileStatus,
  removeFile,
  isAudiobook,
}) => {
  const { t } = useTranslation('catalog');
  const {
    isOpen: isRemoveAlertOpen,
    onOpen: onRemoveAlertOpen,
    onClose: onRemoveAlertClose,
  } = useDisclose();

  const onPressConfirmRemoveFile = useCallback(() => {
    removeFile();
    onRemoveAlertClose();
  }, [onRemoveAlertClose, removeFile]);

  if (fileStatus === 'checking') {
    return null;
  }

  const props = () => {
    switch (fileStatus) {
      case 'online':
        return {
          Icon: DownloadOutlineIcon,
          onPress: download,
          title: t('productScreen.download.download'),
        };
      case 'downloading':
        return {
          leftContent: <DownloadProgress progress={downloadProgress} />,
          onPress: cancel,
          title: t('productScreen.download.downloading'),
        };
      case 'offline':
        return {
          Icon: TrashOutlineIcon,
          onPress: onRemoveAlertOpen,
          title: t('productScreen.download.remove'),
        };
    }
  };

  return (
    <>
      <Box width="full">
        <TableCellLink
          variant="ghost"
          rightContent={null}
          size="sm"
          px={0}
          _title={{
            fontWeight: 500,
          }}
          {...props()}
        />
      </Box>
      <AlertRemoveConfirmation
        isOpen={isRemoveAlertOpen}
        onPressConfirmRemoveFile={onPressConfirmRemoveFile}
        onRemoveAlertClose={onRemoveAlertClose}
        isAudiobook={isAudiobook}
      />
    </>
  );
};

import { AlertDialog, Button } from 'native-base';
import { IButtonComponentType } from 'native-base/lib/typescript/components/primitives/Button/types';
import React, { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';

type AlertRemoveConfirmationProps = {
  isOpen: boolean;
  onPressConfirmRemoveFile: () => void;
  onRemoveAlertClose: () => void;
  isAudiobook?: boolean;
};

export const AlertRemoveConfirmation: FC<AlertRemoveConfirmationProps> = ({
  isOpen,
  onPressConfirmRemoveFile,
  onRemoveAlertClose,
  isAudiobook = true,
}: AlertRemoveConfirmationProps) => {
  const { t } = useTranslation('common');
  const cancelRemoveRef = useRef<IButtonComponentType>(null);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRemoveRef}
      isOpen={isOpen}
      onClose={onRemoveAlertClose}
    >
      <AlertDialog.Content borderRadius={24} width="5/6">
        <AlertDialog.Header>
          {isAudiobook
            ? t('alertRemoveConfirmation.removeAudiobookHeader')
            : t('alertRemoveConfirmation.removeEbookHeader')}
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <Button.Group space={3}>
            <Button
              size="md"
              minW="2/5"
              colorScheme="primary"
              variant="solid"
              onPress={onPressConfirmRemoveFile}
            >
              {t('alertRemoveConfirmation.buttonRemove')}
            </Button>
            <Button
              ref={cancelRemoveRef}
              size="md"
              minW="2/5"
              colorScheme="primary"
              variant="ghost"
              onPress={onRemoveAlertClose}
            >
              {t('alertRemoveConfirmation.buttonCancel')}
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

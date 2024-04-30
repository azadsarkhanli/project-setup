import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Actionsheet,
  AlertDialog,
  HStack,
  IconButton,
  useDisclose,
} from 'native-base';
import { IButtonComponentType } from 'native-base/lib/typescript/components/primitives/Button/types';
import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import ActionsheetContent from '../../../../common/components/ActionsheetContent';
import { Button } from '../../../../common/components/Button';
import { EllipsisHorizontalIcon } from '../../../../common/components/icons';
import {
  OpenOutlineIcon,
  TrashIcon,
} from '../../../../common/components/icons';
import { TableCellGroup } from '../../../../common/components/TableCell/TableCellGroup';
import { TableCellLink } from '../../../../common/components/TableCell/TableCellLink';
import { RootStackParamList } from '../../../../common/navigation';
import { usePlayerContext } from '../../context/PlayerContext';

export const PublicationMenu = () => {
  const {
    isOpen: isActionsheetOpen,
    onOpen: onActionsheetOpen,
    onClose: onActionsheetClose,
  } = useDisclose();
  const {
    isOpen: isRemoveAlertOpen,
    onOpen: onRemoveAlertOpen,
    onClose: onRemoveAlertClose,
  } = useDisclose();

  const {
    isOpen: isRemovalConfirmationOpen,
    onOpen: onRemovalConfirmationOpen,
    onClose: onRemovalConfirmationClose,
  } = useDisclose();

  const cancelRemoveRef = useRef<IButtonComponentType>(null);
  const buttonGoHomeRef = useRef<IButtonComponentType>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { t } = useTranslation('player');

  const { publication } = usePlayerContext();

  const removeAudiobookFile = useCallback(() => {
    // TODO: perform audiobook file removal
    onRemoveAlertClose();
    onRemovalConfirmationOpen();
  }, [onRemoveAlertClose, onRemovalConfirmationOpen]);

  const goToHome = useCallback(() => {
    onRemovalConfirmationClose();
    navigation.navigate('HomeNavigation');
  }, [onRemovalConfirmationClose, navigation]);

  if (!publication) {
    return null;
  }
  return (
    <>
      <IconButton
        colorScheme="primary"
        variant="unstyled"
        icon={<EllipsisHorizontalIcon size="md" color="primary.600" />}
        onPress={onActionsheetOpen}
      />
      <Actionsheet isOpen={isActionsheetOpen} onClose={onActionsheetClose}>
        <ActionsheetContent onClose={onActionsheetClose}>
          <TableCellGroup mt={4}>
            <TableCellLink
              size="sm"
              title={t('publicationMenu.options.about')}
              variant="ghost"
              rightContent={<OpenOutlineIcon color="primary.600" size="sm" />}
            />
            <TableCellLink
              onPress={() => {
                onActionsheetClose();
                onRemoveAlertOpen();
              }}
              size="sm"
              title={t('publicationMenu.options.remove')}
              _title={{
                color: 'error.600',
              }}
              variant="ghost"
              rightContent={<TrashIcon color="error.600" size="sm" />}
            />
          </TableCellGroup>
        </ActionsheetContent>
      </Actionsheet>

      <AlertDialog
        leastDestructiveRef={cancelRemoveRef}
        isOpen={isRemoveAlertOpen}
        onClose={onRemoveAlertClose}
      >
        <AlertDialog.Content>
          <AlertDialog.Header>
            {t('publicationMenu.alertRemove.header')}
          </AlertDialog.Header>
          <AlertDialog.Body>
            {t('publicationMenu.alertRemove.body')}
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <HStack space="2">
              <Button
                ref={cancelRemoveRef}
                size="md"
                colorScheme="secondary"
                variant="ghost"
                onPress={onRemoveAlertClose}
              >
                {t('publicationMenu.alertRemove.buttonCancel')}
              </Button>
              <Button
                size="md"
                colorScheme="primary"
                variant="solid"
                onPress={removeAudiobookFile}
              >
                {t('publicationMenu.alertRemove.buttonRemove')}
              </Button>
            </HStack>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <AlertDialog
        leastDestructiveRef={buttonGoHomeRef}
        isOpen={isRemovalConfirmationOpen}
        onClose={onRemovalConfirmationClose}
      >
        <AlertDialog.Content>
          <AlertDialog.Header>
            {t('publicationMenu.alertRemoveConfirmation.header')}
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <Button
              size="md"
              ref={buttonGoHomeRef}
              colorScheme="primary"
              variant="solid"
              onPress={goToHome}
            >
              {t('publicationMenu.alertRemoveConfirmation.buttonGoToHome')}
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
};

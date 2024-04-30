import { Box, IBoxProps, Modal } from 'native-base';
import React, { FC } from 'react';

export type FullScreenModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  containerProps?: Partial<IBoxProps>;
};

export const FullScreenModal: FC<FullScreenModalProps> = ({
  children,
  containerProps,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      animationPreset="slide"
      size="full"
      justifyContent="flex-end"
    >
      <Modal.Content
        bg="white"
        width="full"
        height="full"
        maxHeight="full"
        borderRadius={0}
      >
        <Box safeArea flex={1} {...containerProps}>
          {children}
        </Box>
      </Modal.Content>
    </Modal>
  );
};

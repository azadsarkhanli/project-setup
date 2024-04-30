import {
  IIconProps,
  HStack,
  Text,
  useToken,
  useToast,
  Button,
} from 'native-base';
import React, { ComponentType, useCallback, useMemo, useRef } from 'react';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const useArkToast = (
  Icon: ComponentType<IIconProps>,
  text: string,
  buttonText?: string,
  onButtonPress?: () => void,
) => {
  const toast = useToast();
  const toastIdRef = useRef();
  const hMargin = useToken('space', '4');
  const toastWidth = useMemo(() => width - hMargin * 2, [hMargin]);

  const close = useCallback(() => {
    toastIdRef.current && toast.close(toastIdRef.current);
  }, [toast]);

  const onCtaButtonPress = useCallback(() => {
    onButtonPress && onButtonPress();
    close();
  }, [onButtonPress, close]);

  const show = useCallback(() => {
    toastIdRef.current = toast.show({
      render: () => {
        return (
          <HStack
            w={toastWidth}
            bg="primary.100"
            px="4"
            py="6"
            rounded="lg"
            shadow="5"
            space="4"
            alignItems="center"
          >
            <Icon />
            <Text fontSize="md" fontWeight={500} flex={1}>
              {text}
            </Text>
            {buttonText && (
              <Button size="sm" variant="ghost" onPress={onCtaButtonPress}>
                {buttonText}
              </Button>
            )}
          </HStack>
        );
      },
    });
  }, [toast, Icon, text, buttonText, onCtaButtonPress, toastWidth]);

  return {
    show,
    close,
  };
};

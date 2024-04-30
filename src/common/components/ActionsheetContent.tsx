import {
  Box,
  Modal,
  IActionsheetContentProps,
  usePropsResolution,
} from 'native-base';
import React, { memo, forwardRef } from 'react';
import { Animated, PanResponder, Platform } from 'react-native';

type Props = IActionsheetContentProps & {
  onClose: () => void;
};

/**
 * Version of ActionSheet.Content from native-base with pan responder on the whole action sheet content.
 */
const ActionsheetContent = (
  { children, onClose, ...props }: Props,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any,
) => {
  const { _dragIndicator, ...resolvedProps } = usePropsResolution(
    'ActionsheetContent',
    props,
  );
  const pan = React.useRef(new Animated.ValueXY()).current;
  const sheetHeight = React.useRef(0);

  const panResponder = React.useRef(
    PanResponder.create({
      /**
       * onMoveShouldSetPanResponder doesn't trigger correctly on Android in modals.
       *
       * https://github.com/GeekyAnts/NativeBase/issues/4492
       * https://github.com/facebook/react-native/issues/14295
       *
       * A workaround is to set pan responder on start.
       * Alternatively it should be possible to use TouchableWithoutFeedback similarly
       * as in Slider, but setting it up across the whole modal content would be tricky.
       */
      onStartShouldSetPanResponder: () => Platform.OS === 'android',
      onMoveShouldSetPanResponder: (_evt, gestureState) => {
        return gestureState.dy > 15;
      },
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, { dy: pan.y }], {
            useNativeDriver: false,
          })(e, gestureState);
        }
      },
      onPanResponderRelease: (_e, gestureState) => {
        // If sheet is dragged 1/4th of it's height, close it
        if (sheetHeight.current / 4 - gestureState.dy < 0) {
          Animated.timing(pan, {
            toValue: { x: 0, y: sheetHeight.current },
            duration: 150,
            useNativeDriver: true,
          }).start(onClose);
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            overshootClamping: true,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;
  return (
    <Animated.View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        transform: [{ translateY: pan.y }],
        width: '100%',
      }}
      onLayout={event => {
        const { height } = event.nativeEvent.layout;
        sheetHeight.current = height;
      }}
      pointerEvents="box-none"
    >
      <>
        {/* To increase the draggable area */}
        <Box py={5} {...panResponder.panHandlers} collapsable={false} />
      </>

      <Modal.Content
        {...resolvedProps}
        {...panResponder.panHandlers}
        ref={ref}
        safeAreaBottom
        collapsable={false}
      >
        <>
          {/* Hack. Fix later. Add -2 negative margin to remove the padding added by ActionSheetContent */}
          <Box
            pt={3}
            pb={3}
            mt={-2}
            width="100%"
            alignItems="center"
            collapsable={false}
          >
            <Box {..._dragIndicator} />
          </Box>
        </>

        {children}
      </Modal.Content>
    </Animated.View>
  );
};

export default memo(forwardRef(ActionsheetContent));

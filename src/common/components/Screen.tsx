import {
  Box,
  IBoxProps,
  KeyboardAvoidingView,
  ScrollView,
  View,
  useColorMode,
  useTheme,
} from 'native-base';
import React, { FC, forwardRef, ReactNode, useState } from 'react';
import { RefreshControl, Platform } from 'react-native';

import { StatusBar } from './StatusBar';

export type ScreenProps = Omit<IBoxProps, 'background'> & {
  onPullToRefresh?: (finishCallback: () => void) => void;
  header?: ReactNode;
  readerMode?: boolean;
  background?: 'none' | 'default' | 'reader';
  withBottomMenu?: boolean;
  withoutScroll?: boolean;
};

const FULL_SCREEN_STYLE = {
  flexGrow: 1,
  flexShrink: 0,
};

export const Screen: React.ForwardRefExoticComponent<
  ScreenProps & React.RefAttributes<unknown>
> = forwardRef(
  (
    {
      children,
      header,
      onPullToRefresh,
      background = 'default',
      withBottomMenu = false,
      withoutScroll = false,
      ...props
    },
    ref,
  ) => {
    const [refreshing, setRefreshing] = useState(false);

    function startRefreshing() {
      setRefreshing(true);
      onPullToRefresh && onPullToRefresh(stopRefreshing);
    }

    function stopRefreshing() {
      setRefreshing(false);
    }

    const safeAreaProps = withBottomMenu
      ? { safeAreaTop: true }
      : { safeArea: true };

    const content = (
      <Box flex={1} {...props}>
        {children}
      </Box>
    );

    const wrappedContent = withoutScroll ? (
      content
    ) : (
      <ScrollView
        ref={ref}
        flex={1}
        contentContainerStyle={FULL_SCREEN_STYLE}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          onPullToRefresh && (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={startRefreshing}
            />
          )
        }
      >
        {content}
      </ScrollView>
    );

    return (
      <ScreenBackground background={background} {...safeAreaProps}>
        <KeyboardAvoidingView
          flex={1}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          {header}
          {wrappedContent}
        </KeyboardAvoidingView>
      </ScreenBackground>
    );
  },
);

export const ScreenBackground: FC<
  Omit<IBoxProps, 'background'> & Pick<ScreenProps, 'background'>
> = ({ children, background, ...props }) => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();

  if (background === 'none') {
    return <View>{children}</View>;
  }

  const isDarkMode = colorMode === 'dark';
  const lightBgColor =
    background === 'reader' ? colors.readerBackground : colors.white;
  const darkBgColor =
    background === 'reader' ? colors.readerBackground : colors.secondary['900'];
  const statusBarBgColor = isDarkMode ? darkBgColor : lightBgColor;

  return (
    <>
      <StatusBar backgroundColor={statusBarBgColor} />
      <Box
        backgroundColor={lightBgColor}
        _dark={{
          backgroundColor: darkBgColor,
        }}
        flex={1}
        {...props}
      >
        {children}
      </Box>
    </>
  );
};

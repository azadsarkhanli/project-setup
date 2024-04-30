import { Box, HStack } from 'native-base';
import React, { FC, ReactNode, useCallback, useRef, useState } from 'react';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

export const Carousel: FC<{
  children: ReactNode;
}> = ({ children }): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scroll = useRef<ScrollView>(null);
  const [width, setWidth] = useState<number>(0);

  const switchSlide = useCallback(
    index => {
      if (!Array.isArray(children)) {
        return;
      }
      if (index < 0 || index >= children.length) {
        return;
      }
      setCurrentIndex(index);
      scroll?.current?.scrollTo({
        x: index * width,
        animated: true,
      });
    },
    [scroll, width, children],
  );

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x } = event.nativeEvent.contentOffset;
    switchSlide(Math.round(x / width));
  };

  const openPrewSlide = useCallback(() => {
    switchSlide(currentIndex - 1);
  }, [currentIndex, switchSlide]);

  const openNextSlide = useCallback(() => {
    switchSlide(currentIndex + 1);
  }, [currentIndex, switchSlide]);

  if (!Array.isArray(children) || children.length === 1) {
    return <>{children}</>;
  }

  const renderSlides = () =>
    children.map((child, index) => (
      <Box key={`slide-${index}`} w={width}>
        {React.isValidElement(child) &&
          React.cloneElement(child, { openPrewSlide, openNextSlide })}
      </Box>
    ));

  return (
    <>
      <ScrollView
        decelerationRate={0}
        ref={scroll}
        bounces={false}
        onScrollEndDrag={onScrollEnd}
        onLayout={e => {
          setWidth(e.nativeEvent.layout.width);
        }}
        showsVerticalScrollIndicator={false}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {renderSlides()}
      </ScrollView>
      <HStack
        px="4"
        space="4"
        bottom={106}
        flexWrap="wrap"
        alignSelf="center"
        position="absolute"
      >
        {children.map((child, index) => (
          <Box
            mt="4"
            w="1.5"
            h="1.5"
            borderRadius="full"
            key={`slide-${index}`}
            bgColor={currentIndex === index ? 'secondary.500' : 'secondary.600'}
          />
        ))}
      </HStack>
    </>
  );
};

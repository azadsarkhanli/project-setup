import { UserSettings } from '@gyldendaldigital/react-native-readium';
import { Box, Button, FlatList, IBoxProps, Spacer } from 'native-base';
import React, { useCallback, useRef, VFC } from 'react';
import { Platform } from 'react-native';
import useEffectOnce from 'react-use/lib/useEffectOnce';

export type FontFamilySettingProps = IBoxProps & {
  value: UserSettings['fontFamily'];
  onChange: (value: UserSettings['fontFamily']) => void;
};

const optionsByPlatform: Record<string, UserSettings['fontFamily'][]> = {
  android: [
    'Original',
    'PT Serif',
    'Roboto',
    'Source Sans Pro',
    'Vollkorn',
    'OpenDyslexic',
    'AccessibleDfA',
    'IA Writer Duospace',
  ],
  ios: [
    'Original',
    'Helvetica Neue',
    'Iowan Old Style',
    'Athelas',
    'Seravek',
    'OpenDyslexic',
    'AccessibleDfA',
    'IA Writer Duospace',
  ],
};

// TODO: use native-base styles and _contentContainerStyle when updating to 3.3
export const SCROLLVIEW_CONTAINER_STYLE = {
  paddingLeft: 28,
  paddingRight: 28,
};

export const FontFamilySetting: VFC<FontFamilySettingProps> = ({
  value,
  onChange,
  ...props
}) => {
  const options = optionsByPlatform[Platform.OS];
  const listRef = useRef(null);

  const scrollToValue = useCallback(
    (newValue: UserSettings['fontFamily']) => {
      const index = options.indexOf(newValue);
      if (index >= 0) {
        // @ts-ignore
        listRef.current?.scrollToIndex({
          index,
          viewPosition: 0.5,
        });
      }
    },
    [options],
  );

  const handleChange = useCallback(
    (newValue: UserSettings['fontFamily']) => {
      onChange(newValue);
      scrollToValue(newValue);
    },
    [onChange, scrollToValue],
  );

  useEffectOnce(() => {
    setTimeout(() => scrollToValue(value), 1000);
  });

  return (
    <Box height={12} {...props}>
      <FlatList
        ref={listRef}
        mx={-8}
        horizontal
        contentContainerStyle={SCROLLVIEW_CONTAINER_STYLE}
        ItemSeparatorComponent={() => <Spacer w={4} />}
        data={options}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FontItem
            key={item}
            item={item}
            onChange={handleChange}
            isActive={value === item}
          />
        )}
      />
    </Box>
  );
};

type FontItemProps = {
  item: UserSettings['fontFamily'];
  onChange: (value: UserSettings['fontFamily']) => void;
  isActive: boolean;
};

export const FontItem: VFC<FontItemProps> = ({ item, onChange, isActive }) => {
  return (
    <Box>
      <Button
        onPress={() => onChange(item)}
        colorScheme="secondary"
        size="sm"
        variant={isActive ? 'solid' : 'outline'}
      >
        {item}
      </Button>
    </Box>
  );
};

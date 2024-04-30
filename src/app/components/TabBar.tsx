import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Box, HStack, IIconProps, Pressable, Text } from 'native-base';
import React, { ComponentType, FC } from 'react';

import { track } from '../../common/events';
import { HomeNavParamList } from '../../common/navigation';
import { usePlayerProgress } from '../../features/player/usePlayerProgress';
import { MiniPlayer } from '../../reader/audio/components/Player';

export type TabBarProps = BottomTabBarProps & {
  hasMiniPlayer: boolean;
  options: Record<
    keyof HomeNavParamList,
    {
      ActiveIcon: ComponentType<IIconProps>;
      Icon: ComponentType<IIconProps>;
      label: string;
    }
  >;
};

export const TabBar: FC<TabBarProps> = ({
  state,
  navigation,
  options,
  hasMiniPlayer,
}) => {
  const { duration, position, changePositionBy } = usePlayerProgress();

  return (
    <Box bg="primary.100" safeAreaBottom>
      {hasMiniPlayer && (
        <MiniPlayer
          position={position}
          duration={duration}
          changePositionBy={changePositionBy}
        />
      )}
      <HStack w="full" borderTopWidth="0.5px" borderTopColor="muted.300">
        {state.routes.map((route, index) => {
          const option = options[route.name as keyof HomeNavParamList];
          if (!option) {
            return null;
          }
          const { label, Icon, ActiveIcon } = option;
          const isFocused = state.index === index;
          const IconComponent = isFocused ? ActiveIcon : Icon;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            track(['menu_item_clicked', { label }]);
          };

          return (
            <Pressable
              flex="1"
              alignItems="center"
              py="1"
              accessibilityLabel={label}
              key={`option-${index}`}
              onPress={onPress}
            >
              <IconComponent
                size="md"
                color={isFocused ? 'primary.600' : 'muted.500'}
              />
              <Text
                variant="2xs"
                fontWeight={500}
                color={isFocused ? 'primary.600' : 'muted.500'}
                pb={0.5}
              >
                {label}
              </Text>
            </Pressable>
          );
        })}
      </HStack>
    </Box>
  );
};

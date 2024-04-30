import { Avatar, Box, Pressable, Row, Text, View } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export type RecentBooksProps = {
  user: {
    firstName: string;
  };
  onPress?: () => void;
};

const getTimeOfDay = () => {
  const hours = new Date().getHours();
  if (hours < 12) {
    return 'morning';
  }
  if (hours < 18) {
    return 'afternoon';
  }
  return 'evening';
};

export const Welcome: FC<RecentBooksProps> = ({ user, onPress }) => {
  const { t } = useTranslation('catalog');

  return (
    <Box borderColor="secondary.700" borderBottomWidth={1} mx={6} py={6}>
      <Row justifyContent="space-between" alignItems="center">
        <View flexShrink="1">
          <Text
            variant="lg"
            color="primary.300"
            _dark={{ color: 'primary.300' }}
          >
            {
              //@ts-ignore - can't handle context magic
              t('homeScreen.welcome.title', {
                context: getTimeOfDay(),
              })
            }
          </Text>
          <Text
            variant="h2"
            fontWeight={700}
            noOfLines={2}
            accessibilityLabel={user.firstName}
          >
            {user.firstName}
          </Text>
        </View>
        <View>
          <Pressable onPress={onPress} accessibilityLabel={'User menu button'}>
            <Avatar bg="primary.500" />
          </Pressable>
        </View>
      </Row>
    </Box>
  );
};

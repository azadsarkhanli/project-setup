import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  HomeIcon,
  LibraryOutlineIcon,
  SearchOutlineIcon,
  PersonCircleOutlineIcon,
  HomeOutlineIcon,
  LibraryIcon,
  SearchIcon,
  PersonCircleIcon,
} from '../../common/components/icons';
import {
  HomeNavParamList,
  HomeStackParamList,
  LibraryStackParamList,
  SearchStackParamList,
} from '../../common/navigation';
import { HomeScreenContainer } from '../../screens/HomeScreen';
import { LibraryScreenContainer } from '../../screens/LibraryScreen/LibraryScreenContainer';
import { ProductScreenContainer } from '../../screens/ProductScreen';
import { ProfileScreenContainer } from '../../screens/ProfileScreen';
import { SearchScreen } from '../../screens/SearchScreen/SearchScreen';

import { TabBar } from './TabBar';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const LibraryStack = createNativeStackNavigator<LibraryStackParamList>();
const SearchStack = createNativeStackNavigator<SearchStackParamList>();

const Tab = createBottomTabNavigator<HomeNavParamList>();

export const HomeNavigator: FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreenContainer} />
      <HomeStack.Screen name="Product" component={ProductScreenContainer} />
    </HomeStack.Navigator>
  );
};

export const LibraryNavigator: FC = () => {
  return (
    <LibraryStack.Navigator screenOptions={{ headerShown: false }}>
      <LibraryStack.Screen name="Library" component={LibraryScreenContainer} />
      <LibraryStack.Screen name="Product" component={ProductScreenContainer} />
    </LibraryStack.Navigator>
  );
};

export const SearchNavigator: FC = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Product" component={ProductScreenContainer} />
    </SearchStack.Navigator>
  );
};

export const HomeNavigation: FC = () => {
  const { t } = useTranslation('catalog');

  const homeLabel = t('navigation.home');
  const libraryLabel = t('navigation.library');
  const searchLabel = t('navigation.search');
  const profileLabel = t('navigation.profile');

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => (
        <TabBar
          {...props}
          hasMiniPlayer
          options={{
            HomeStack: {
              ActiveIcon: HomeIcon,
              Icon: HomeOutlineIcon,
              label: homeLabel,
            },
            LibraryStack: {
              ActiveIcon: LibraryIcon,
              Icon: LibraryOutlineIcon,
              label: libraryLabel,
            },
            SearchStack: {
              ActiveIcon: SearchIcon,
              Icon: SearchOutlineIcon,
              label: searchLabel,
            },
            Profile: {
              ActiveIcon: PersonCircleIcon,
              Icon: PersonCircleOutlineIcon,
              label: profileLabel,
            },
          }}
        />
      )}
    >
      <Tab.Screen name="HomeStack" component={HomeNavigator} />
      <Tab.Screen name="LibraryStack" component={LibraryNavigator} />
      <Tab.Screen name="SearchStack" component={SearchNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreenContainer} />
    </Tab.Navigator>
  );
};

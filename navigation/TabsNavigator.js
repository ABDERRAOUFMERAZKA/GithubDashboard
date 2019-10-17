import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import SettingScreen from '../screens/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../constants/color';

const TabsNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    Favorite: {
      screen: FavoriteScreen,
    },
    Setting: {
      screen: SettingScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = 'ios-search';
        if (routeName === 'Favorite') {
          iconName = 'ios-heart';
        } else if (routeName === 'Setting') {
          iconName = 'ios-settings';
        }
        return <Ionicons name={iconName} size={32} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: color.primaryColor,
      inactiveTintColor: color.inactiveColor,
      showLabel: false,
    },
  },
);

export default createAppContainer(TabsNavigator);

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../views/Home';
import Map from '../../views/Map';
import Favourites from '../../views/Favourites';
import Profile from '../../views/Profile';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Map':
      iconName = 'google-nearby';
      break;
    case 'Favourites':
      iconName = 'cards-heart';
      break;
    case 'Profile':
      iconName = 'account-outline';
      break;
    default:
      break;
  }
  return <Icon name={iconName} color={color} size={25} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        tabBarStyle: {position: 'absolute'},
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

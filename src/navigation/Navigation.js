import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/base';

import {BarScreen} from '../screens/Bar/BarScreen';
import {FavoriteScreen} from '../screens/FavoriteScreen';
import {CocktailScreen} from '../screens/CocktailScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {screen, colors} from '../utils';
import {BarStack} from './BarStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.PRIMARY_COLOR_LIGHT,
        tabBarInactiveTintColor: colors.PRIMARY_COLOR_DARK,
        tabBarActiveBackgroundColor: colors.PRIMARY_COLOR_DARK,
      }}>
      <Tab.Screen
        name={screen.bar.tab}
        component={BarStack}
        options={{
          headerShown: false,
          title: 'Bares',
          tabBarIcon: ({color, size}) => (
            <Icon name="store" type="material" color={color} size={32}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="bookmark"
              type="material"
              color={color}
              size={size}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Cocktail"
        component={CocktailScreen}
        options={{
          title: 'Cocteles',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="glass-cocktail"
              type="material-community"
              color={color}
              size={size}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Buscar',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="magnify"
              type="material-community"
              color={color}
              size={size}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

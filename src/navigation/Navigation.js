import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/base';

import {CocktailScreen} from '../screens/CocktailScreen';
import {IngredientStack} from './IngredientStack';
import {ValoresScreen} from '../screens/ValoresScreen';
import {BillboardScreen} from '../screens/Billboard/BillboardScreen';
import {screen, colors} from '../utils';
import PersonajeStack from './PersonajeStack';

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
          headerStyle: {
            backgroundColor: colors.PRIMARY_COLOR_DARK,
          },
          headerTintColor: colors.PRIMARY_COLOR_LIGHT,
        }}
      />

      <Tab.Screen
        name={screen.ingredient.tab}
        component={IngredientStack}
        options={{
          headerShown: false,
          title: 'Ingredientes',
          tabBarIcon: ({color}) => (
            <Icon
              name="fridge"
              type="material-community"
              color={color}
              size={28}></Icon>
          ),
        }}
      />

      <Tab.Screen
        name="Valores"
        component={ValoresScreen}
        options={{
          title: 'Valores',
          headerStyle: {
            backgroundColor: colors.PRIMARY_COLOR_DARK,
          },
          headerTintColor: colors.PRIMARY_COLOR_LIGHT,
          tabBarIcon: ({color}) => (
            <Icon
              name="cash-multiple"
              type="material-community"
              color={color}
              size={30}></Icon>
          ),
        }}
      />

      <Tab.Screen
        name={screen.bilboard.tabB}
        component={PersonajeStack}
        options={{
          headerShown: false,
          title: 'Cartelera',
          headerStyle: {
            backgroundColor: colors.PRIMARY_COLOR_DARK,
          },
          headerTintColor: colors.PRIMARY_COLOR_LIGHT,
          tabBarIcon: ({color, size}) => (
            <Icon
              name="filmstrip"
              type="material-community"
              color={color}
              size={size}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BilboardListScreen} from '../screens/Billboards/BillboardsPersonajes';
import {colors, screen} from '../utils';
import {BilboardScreen} from '../screens/Billboards/BillboardsScreen';

const Stack = createNativeStackNavigator();

export default function PersonajeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.bilboard.Bilboard}
        component={BilboardScreen}
        options={{
          title: 'Cartelera',
          headerStyle: {
            backgroundColor: colors.PRIMARY_COLOR_DARK,
          },
          headerTintColor: colors.PRIMARY_COLOR_LIGHT,
        }}
      />

      <Stack.Screen
        name={screen.bilboard.BilboardList}
        component={BilboardListScreen}
        options={{
          title: 'Lista Personajes',
          headerStyle: {
            backgroundColor: colors.PRIMARY_COLOR_DARK,
          },
          headerTintColor: colors.PRIMARY_COLOR_LIGHT,
        }}
      />
    </Stack.Navigator>
  );
}

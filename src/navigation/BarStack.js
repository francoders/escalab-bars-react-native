import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BarScreen} from '../screens/Bar/BarScreen';
import {AddBarScreen} from '../screens/Bar/AddBarScreen';
import {colors, screen} from '../utils';

const Stack = createNativeStackNavigator();

export function BarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.bar.Bar}
        component={BarScreen}
        options={{
          title: 'Bares',
          headerStyle: {
            backgroundColor: colors.PRIMARY_COLOR_DARK,
          },
          headerTintColor: colors.PRIMARY_COLOR_LIGHT,
        }}
      />

      <Stack.Screen
        name={screen.bar.AddBar}
        component={AddBarScreen}
        options={{title: 'Agregar Bares'}}
      />
    </Stack.Navigator>
  );
}

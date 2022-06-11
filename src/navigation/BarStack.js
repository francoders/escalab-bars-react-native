import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {screen} from '../utils';

import {BarScreen} from '../screens/Bar/BarScreen';
import {AddBarScreen} from '../screens/Bar/AddBarScreen';

const Stack = createNativeStackNavigator();

export function BarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.bar.Bar} component={BarScreen} />
      <Stack.Screen name={screen.bar.AddBar} component={AddBarScreen} />
    </Stack.Navigator>
  );
}

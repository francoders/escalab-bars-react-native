import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IngredientScreen} from '../screens/Ingredient/IngredientScreen';
import {IngredientListScreen} from '../screens/Ingredient/IngredientListScreen';
import {colors, screen} from '../utils';

const Stack = createNativeStackNavigator();

export function IngredientStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.ingredient.Ingredient}
        component={IngredientScreen}
        options={{
          title: 'Ingredientes',
          headerStyle: {
            backgroundColor: colors.PRIMARY_COLOR_DARK,
          },
          headerTintColor: colors.PRIMARY_COLOR_LIGHT,
        }}
      />

      <Stack.Screen
        name={screen.ingredient.IngredientList}
        component={IngredientListScreen}
        options={{title: 'Lista de Ingredientes'}}
      />
    </Stack.Navigator>
  );
}

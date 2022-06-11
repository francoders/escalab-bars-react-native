import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {StatusBar} from 'react-native';
import {colors} from './src/utils/colors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.PRIMARY_COLOR_DARK}
      />
      <Navigation />
    </NavigationContainer>
  );
}

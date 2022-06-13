import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {StatusBar} from 'react-native';
import {colors} from './src/utils/colors';

export default function App(Props) {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.COLOR_HEADER_COLOR}
      />
      <Navigation />
    </NavigationContainer>
  );
}

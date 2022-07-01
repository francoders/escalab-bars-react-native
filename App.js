import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {colors} from './src/utils/colors';

LogBox.ignoreAllLogs();

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

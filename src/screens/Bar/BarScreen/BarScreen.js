import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './BarScreen.style';
import {Icon} from '@rneui/base';
import {screen, colors} from '../../../utils';

import {useNavigation} from '@react-navigation/native';

export function BarScreen() {
  const navigation = useNavigation;

  const goToAddBar = () => {
    navigation.navigate(screen.bar.Bar);
  };

  return (
    <View style={styles.content}>
      <Text>Estamos en Bar Screen Principal</Text>
      <Icon
        reverse
        name="plus"
        type="material-community"
        color={colors.PRIMARY_COLOR_DARK}
        containerStyle={styles.btnContainer}
        onPress={goToAddBar}
      />
    </View>
  );
}

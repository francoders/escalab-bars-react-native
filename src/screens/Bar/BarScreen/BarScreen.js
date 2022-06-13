import React from 'react';
import {View, Text, Alert} from 'react-native';
import {styles} from './BarScreen.style';
import {Icon} from '@rneui/base';
import {screen, colors} from '../../../utils';
import TouchID from 'react-native-touch-id';

export function BarScreen(Props) {
  const {navigation} = Props;

  const BtnAuthAddBar = () => {
    TouchID.authenticate('Ingrese su Huella', {
      title: '¿Desea agregar un bar?',
      imageColor: colors.PRIMARY_COLOR_LIGHT,
      cancelText: 'CANCELAR',
      imageErrorColor: 'red',
      sensorDescription: 'Pon la huella en el sensor',
      sensorErrorDescription: 'Huella no reconocida',
    })
      .then(() => {
        Alert.alert('Autencicacion Exitosa', 'Ahora puede agregar un bar');
        navigation.navigate(screen.bar.AddBar);
      })
      .catch(() => {
        Alert.alert(
          'Error de Autenticacion',
          'El sistema de autenticacion no ha reconocido tu huella, o se a cancelado el proceso.',
        );
      });
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
        onPress={BtnAuthAddBar}
      />
    </View>
  );
}

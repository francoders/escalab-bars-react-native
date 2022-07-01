import React from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';
import {styles} from './IngredientScreen.style';
import {Icon} from '@rneui/base';
import {screen, colors} from '../../../utils';
import TouchID from 'react-native-touch-id';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Details} from '../../../components/Details';

export function IngredientScreen(Props) {
  const {navigation} = Props;

  const BtnAuthAddBar = () => {
    TouchID.authenticate('Ingrese con su Huella', {
      title: '¿Desea ir a Ingredientes?',
      imageColor: colors.PRIMARY_COLOR_LIGHT,
      cancelText: 'CANCELAR',
      imageErrorColor: 'red',
      sensorDescription: 'Pon la huella en el sensor',
      sensorErrorDescription: 'Huella no reconocida',
    })
      .then(() => {
        Alert.alert(
          'Autenticacion Exitosa',
          'Ahora puede ver los Ingredientes',
        );
        navigation.navigate(screen.ingredient.IngredientList);
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
      <View style={styles.screen}>
        <Details
          title="Mojitos"
          description="Ment · Soda water · Sugar · Lime"
          URL={
            'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg'
          }
        />

        <Details
          title="Margarita"
          description="Lime Juice · Tropic Sec · Tequila · Salt"
          URL={
            'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
          }
        />

        <Details
          title="Old Fashioned"
          description="Bourbon · Dash water · Cube Sugar"
          URL={
            'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg'
          }
        />
        <Details
          title="Dry Martini"
          description="Gin · Dry Vermounth · Olive"
          URL="https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg"
        />
      </View>

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

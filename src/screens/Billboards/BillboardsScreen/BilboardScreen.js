import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Icon} from '@rneui/base';
import {screen, colors} from '../../../utils';

export function BilboardScreen(Props) {
  const {navigation} = Props;

  const BtnAuthAddBar = () => {
    navigation.navigate(screen.bilboard.BilboardList);
  };

  return (
    <View style={styles.view}>
      <View style={styles.content}>
        <Text style={styles.textTitle}>Pelicula en Cartelera</Text>
        <View style={styles.card}>
          <Image
            style={styles.portada}
            source={require('../../../public/movie.jpg')}
          />
        </View>
        <Text style={styles.textPortada}>
          Harry Potter y la piedra filosofal
        </Text>

        <View style={styles.contentPuntuacion}>
          <Text style={styles.textPortada}>Puntuacion: </Text>
          <Image
            style={styles.star}
            source={require('../../../public/star.png')}
          />
          <Image
            style={styles.star}
            source={require('../../../public/star.png')}
          />
          <Image
            style={styles.star}
            source={require('../../../public/star.png')}
          />
          <Image
            style={styles.star}
            source={require('../../../public/star.png')}
          />
          <Image
            style={styles.star}
            source={require('../../../public/rating.png')}
          />
          <Icon
            reverse
            size={20}
            name="arrow-right-box"
            type="material-community"
            color={colors.PRIMARY_COLOR_LIGHT}
            onPress={BtnAuthAddBar}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123',
  },

  content: {
    width: '80%',
    height: '80%',
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  card: {
    width: '75%',
    height: '65%',
    backgroundColor: colors.PRIMARY_COLOR_LIGHT,
    marginTop: 20,
    borderRadius: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.SECUNDARY_COLOR_LIGHT,
  },
  portada: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  textPortada: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
    color: colors.PRIMARY_COLOR_LIGHT,
  },

  star: {
    width: 18,
    height: 18,
    marginTop: 10,
    marginRight: 3,
  },

  contentPuntuacion: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

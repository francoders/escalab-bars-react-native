import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardCocktail from '../components/CardCocktail';
import {DataProvider} from '../context/DataContext';
import {colors} from '../utils/colors';

export function CocktailScreen() {
  return (
    <View>
      <Text style={styles.textTitle}>Promociones el dia de HOY!</Text>
      <DataProvider>
        <CardCocktail />
        <CardCocktail />
        <CardCocktail />
      </DataProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 22,
    marginTop: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.PRIMARY_COLOR_DARK,
  },
});

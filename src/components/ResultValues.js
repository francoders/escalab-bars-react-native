import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils/colors';

export default function ResultValues(props) {
  const {promocion, cantPromocion, lugar, total, errorMessage} = props;

  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.result}>
          <Text style={styles.text}>Valor Final</Text>

          <View style={styles.ContentData}>
            <Text style={styles.data}>Valor Promocion Solicitada: </Text>
            <Text style={styles.data}>{promocion + ' CLP'}</Text>
          </View>

          <View style={styles.ContentData}>
            <Text style={styles.data}>Cantidad Promocion Solicitada: </Text>
            <Text style={styles.data}>{cantPromocion + ' Promos'}</Text>
          </View>

          <View style={styles.ContentData}>
            <Text style={styles.data}>Tipo de consumo: </Text>
            <Text style={styles.data}>
              {lugar == 10000 ? 'Delivery: ' + lugar : 'Local: ' + lugar}
            </Text>
          </View>

          <View style={styles.ContentData}>
            <Text style={styles.data}>TOTAL A PAGAR: </Text>
            <Text style={styles.data}>{total.contentFinal + ' CLP'}</Text>
          </View>
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
  },

  content: {},

  result: {
    padding: 28,
    marginHorizontal: 30,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.SECUNDARY_COLOR_DARK,
  },

  ContentData: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

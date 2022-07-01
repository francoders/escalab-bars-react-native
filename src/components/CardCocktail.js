import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {DataContext} from '../context/DataContext';
import {colors} from '../utils/colors';

export default function CardCocktail() {
  const {titleData} = useContext(DataContext);

  return (
    <View style={styles.content}>
      <View style={styles.card}>
        <View style={styles.detail}>
          <Text style={styles.title}>{titleData.title}</Text>
          <Text style={styles.description}>{titleData.description}</Text>
          <Text style={styles.description}>dsa</Text>
          <Button title="Valores" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: '90%',
    height: '90%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.SECUNDARY_COLOR_DARK,
  },

  detail: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    color: 'white',
  },
  description: {
    width: '90%',
    fontSize: 15,
    color: 'white',
  },
});
